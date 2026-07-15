const fs = require("fs");
const path = require("path");
const Papa = require("papaparse");

const CSV_DIR = path.join(__dirname, "csv");

const NUMBER_RE = /^-?\d+(?:\.\d+)?$/;

// Array-valued columns (EffectString01, etc.) are stored as a single quoted
// cell like "(1,2,3)" - Papa hands that back as one string field, so it
// still needs to become an actual array for the dump scripts. Only convert
// when every part is numeric: some text cells (STRING_TEMPLATE.csv) are
// literally wrapped in parens, e.g. "(To be deleted)", and must stay strings.
function coerceCell(raw) {
  if (typeof raw !== "string" || !raw.startsWith("(") || !raw.endsWith(")")) return raw;

  const parts = raw
    .slice(1, -1)
    .split(",")
    .map((part) => part.trim());
  return parts.every((part) => NUMBER_RE.test(part)) ? parts.map(Number) : raw;
}

async function convertFile(csvPath, jsonPath) {
  const text = await Bun.file(csvPath).text();
  const { data, meta } = Papa.parse(text, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
  });
  const idColumn = meta.fields[0]; // "Name" - always mirrors the table's real id column

  const rows = {};
  for (const row of data) {
    for (const column in row) row[column] = coerceCell(row[column]);
    rows[row[idColumn]] = row;
  }

  await Bun.write(jsonPath, JSON.stringify([{ Rows: rows }]));
  return Object.keys(rows).length;
}

async function main() {
  const files = fs.readdirSync(CSV_DIR).filter((f) => f.endsWith(".csv"));

  for (const file of files) {
    const name = path.basename(file, ".csv");
    const count = await convertFile(path.join(CSV_DIR, file), path.join(__dirname, `${name}.json`));
    console.log(`${name}.csv -> ${name}.json (${count} rows)`);
  }
}

main();
