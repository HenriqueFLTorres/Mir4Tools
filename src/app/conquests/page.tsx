'use client'

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table'
import Image from 'next/image'
import { useMemo } from 'react'

export default function Conquests() {
  const data = useMemo(
    () => [
      {
        effectName: 'Max Character Level',
        currentEffect: '110',
        nextEffect: '120',
      },
      {
        effectName: 'Max Character Level',
        currentEffect: '110',
        nextEffect: '120',
      },
      {
        effectName: 'Max Character Level',
        currentEffect: '110',
        nextEffect: '120',
      },
      {
        effectName: 'Max Character Level',
        currentEffect: '110',
        nextEffect: '120',
      },
    ],
    []
  )

  const table = useReactTable({
    data,
    columns: getColumns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility: { currentPercentage: false },
    },
  })

  return (
    <div className="relative mx-auto flex h-screen w-full max-w-[90rem] flex-col items-center pt-24 selection:bg-primary-800">
      <Image
        src="/conquests/main.png"
        alt=""
        width={2813}
        height={809}
        className="w-screen rounded-lg object-contain"
      />

      <section className="flex w-full flex-col items-center px-8 py-4 text-white">
        <header className="flex w-full justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold">Tower of Conquest</h1>
            <p className="text-xl font-normal">
              {'Stage 15 > '}
              <span className="text-[#62CA63]">Stage 16</span>
            </p>
          </div>

          <div className="flex flex-col gap-2 text-end">
            <h2 className="text-end text-2xl font-bold">38 days</h2>
            <p className="text-end text-sm font-medium">
              <b className="text-end font-bold">{'Power Score - '}</b>
              {'3301 > '}
              <span className="text-[#62CA63]">3794</span>
            </p>
          </div>
        </header>

        <div className="relative mt-12 flex w-full max-w-3xl flex-col rounded-md bg-primary-600 p-1 md:mt-16 md:rounded-xl">
          <table className="relative w-full">
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="[&:nth-child(even)>*]:bg-primary-500/20"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-3 py-1.5 text-end text-sm font-medium text-white first:rounded-l-md first:text-start last:rounded-r-md md:px-6 md:py-3 md:text-sm"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

interface TableConquests {
  effectName: string
  currentEffect: number | string
  nextEffect: number | string
}

const getColumns: Array<ColumnDef<TableConquests>> = [
  {
    accessorKey: 'effectName',
    header: () => <></>,
    cell: ({ getValue }) => (
      <span className="text-sm font-bold">{getValue() as string}</span>
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'currentEffect',
    header: () => <></>,
    cell: ({ getValue }) => <>{getValue()}</>,
    enableSorting: false,
  },
  {
    accessorKey: 'nextEffect',
    header: () => <></>,
    cell: ({ getValue }) => (
      <span className="text-[#62CA63]">{getValue() as string}</span>
    ),
    enableSorting: false,
  },
]
