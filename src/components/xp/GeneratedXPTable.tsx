import XPPerLevel from '@/data/XPPerLevel';
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
  currentXP,
  invalidInput,
}: {
  XPPerMinute: number;
  currentXP: number;
  invalidInput: boolean;
}) {
  const data = useMemo(
    () => generateTableData(XPPerMinute, currentXP),
    [XPPerMinute, currentXP]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (!XPPerMinute || invalidInput) return <></>;

  return (
    <section className='relative my-16 flex flex-col rounded-md border-2 border-black/40'>
      <table className='relative w-full'>
        <thead className='border-b-2 border-primary-200'>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className='px-4 py-2 text-base font-bold text-neutral-200'
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
            <tr key={row.id} className='even:bg-primary-400/20'>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className='px-6 py-3 text-sm font-light text-primary-200'
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
  levelReached: number;
  XPEarned: number;
  timeInMinutes: number;
};

const generateTableData = (
  XPPerMinute: number,
  currentXP: number
): TableXP[] => {
  const timeSets = [30, 60, 240, 480, 720];

  return timeSets.map((timeInMinutes) => {
    const XPEarned = timeInMinutes * XPPerMinute;
    const levelReached = Object.entries(XPPerLevel).find(
      ([lvl, value]) =>
        currentXP + XPEarned > value &&
        currentXP + XPEarned <=
          XPPerLevel[(Number(lvl) + 1) as unknown as keyof typeof XPPerLevel]
    )?.[0];

    return {
      levelReached: Number(levelReached) ?? 0,
      timeInMinutes,
      XPEarned,
    };
  });
};

const columns: ColumnDef<TableXP>[] = [
  {
    accessorKey: 'levelReached',
    header: () => 'LVL Reached',
    cell: ({ getValue }) => (
      <span className='font-bold'>{`${getValue()}`}</span>
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'XPEarned',
    header: () => <span className='flex min-w-[15rem]'>XP Earned</span>,
    cell: ({ getValue }) => (
      <>
        <b className='font-extrabold'>{`${millify(getValue() as number)} -`}</b>{' '}
        {(getValue() as number)
          .toLocaleString('en', { useGrouping: true })
          .replace(/\,/g, '.')}
      </>
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'timeInMinutes',
    header: () => 'Time',
    cell: ({ getValue }) => (
      <span className='flex w-full justify-end whitespace-nowrap'>{`${humanizeDuration(
        moment.duration(getValue() as number, 'minutes').asMilliseconds()
      )}`}</span>
    ),
    enableSorting: false,
  },
];
