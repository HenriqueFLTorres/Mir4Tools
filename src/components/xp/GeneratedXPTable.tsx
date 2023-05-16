import { Level } from '@/app/xp/page';
import XPPerLevel from '@/data/XPPerLevel';
import { getReadableNumber } from '@/utils/index';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import humanizeDuration from 'humanize-duration';
import millify from 'millify';
import moment from 'moment';
import { useMemo } from 'react';

export default function GeneratedXPTable({
  XPPerMinute,
  XPToTargetLevel,
  invalidInput,
  currentLvl,
}: {
  XPPerMinute: number;
  XPToTargetLevel?: number;
  invalidInput: boolean;
  currentLvl?: Level;
}) {
  const data = useMemo(
    () =>
      currentLvl
        ? generateTableData(
            XPPerMinute,
            XPToTargetLevel ?? 0,
            currentLvl
          )
        : [],
    [XPPerMinute, XPToTargetLevel, currentLvl]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility: { currentPercentage: false },
    },
  });

  if (!XPPerMinute || invalidInput) return <></>;

  return (
    <section className='relative mt-16 flex flex-col rounded-xl p-1 bg-primary-600'>
      <table className='relative w-full'>
        <thead className='border-b-2 border-primary-500/50'>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className='px-6 py-2 text-xl font-bold text-white'
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className='[&:nth-child(even)>*]:bg-primary-500/20'>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className='px-6 py-3 text-sm font-light first:rounded-l-md last:rounded-r-md text-white'
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

type TableXP = {
  levelReached: Level;
  currentPercentage: number;
  XPEarned: number;
  timeInMinutes: number;
};

const generateTableData = (
  XPPerMinute: number,
  XPToTargetLevel: number,
  currentLvl: Level,
): TableXP[] => {
  const timeSets = [30, 60, 240, 480, 720];
  const result: TableXP[] = [];

  timeSets.map((timeInMinutes) => {
    const XPEarned = timeInMinutes * XPPerMinute;

    if (XPToTargetLevel - XPEarned < 0) return;

    const percentageOfCurrent =
      ((XPEarned) / XPPerLevel[currentLvl]) * 100;

    return result.push({
      levelReached: currentLvl,
      currentPercentage: percentageOfCurrent,
      timeInMinutes,
      XPEarned,
    });
  });

  return [
    ...result,
    {
      levelReached: String(Number(currentLvl) + 1) as Level,
      currentPercentage: 0,
      timeInMinutes: XPToTargetLevel / XPPerMinute,
      XPEarned: XPToTargetLevel,
    },
  ];
};

const columns: ColumnDef<TableXP>[] = [
  {
    accessorKey: 'levelReached',
    header: () => 'Progression',
    cell: ({ getValue, row }) => {
      const percentage = row.getValue('currentPercentage') as number;
      return (
        <span className='font-light'>
          <b className='font-bold'>{String(getValue())}</b>{' '}
          {percentage ? `(+${percentage.toFixed(2)}%)` : ''}
        </span>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: 'currentPercentage',
    enableHiding: true,
  },
  {
    accessorKey: 'XPEarned',
    header: () => <span className='flex min-w-[15rem]'>XP Earned</span>,
    cell: ({ getValue }) => (
      <>
        <b className='font-extrabold'>{`${millify(getValue() as number)} -`}</b>{' '}
        {getReadableNumber(Math.round(getValue() as number))}
      </>
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'timeInMinutes',
    header: () => <span className='flex w-full justify-end'>Time</span>,
    cell: ({ getValue }) => (
      <span className='flex w-full justify-end whitespace-nowrap'>
        {humanizeDuration(
          moment
            .duration(getValue() as moment.DurationInputArg1, 'minutes')
            .asMilliseconds(),
          { round: true }
        )}
      </span>
    ),
    enableSorting: false,
  },
];
