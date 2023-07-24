'use client'

import { ConquestsAtom } from '@/atoms/Conquests'
import ConquestTowersData from '@/data/ConquestTowerData'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table'
import { useAtomValue } from 'jotai'
import { useMemo } from 'react'

export default function ConquestEffectsTable() {
  const { tower, stage } = useAtomValue(ConquestsAtom)

  const currentTower = ConquestTowersData[tower].Steps[stage]
  const hasPreviousStage = stage > 0

  const data = useMemo(() => {
    if (!currentTower) return []

    const dataObject: {
      [key in string]: {
        current: string | number | undefined
        next: string | number
      }
    } = {}

    Object.entries(currentTower.Effects).forEach(
      ([effectName, value]) =>
        (dataObject[effectName] = {
          current: '',
          next: value,
        })
    )
    if (hasPreviousStage) {
      Object.entries(
        ConquestTowersData[tower].Steps[stage - 1].Effects
      ).forEach(
        ([effectName, value]) =>
          (dataObject[effectName] = {
            ...dataObject[effectName],
            current: value,
          })
      )
    }

    return Object.entries(dataObject).map(([key, values]) => ({
      effectName: key,
      currentEffect: values.current ?? '-',
      nextEffect: values.next ?? '-',
    }))
  }, [tower, stage])

  const table = useReactTable({
    data,
    columns: getColumns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility: { currentPercentage: false },
    },
  })

  return (
    <div className="relative mt-4 flex w-full max-w-3xl flex-col rounded-md bg-primary-600 p-1 md:mt-8 md:rounded-xl">
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
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
