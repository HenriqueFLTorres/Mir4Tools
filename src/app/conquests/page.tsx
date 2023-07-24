'use client'

import ConquestTowersData from '@/data/ConquestTowerData'
import Chevron from '@/icons/Chevron'
import { cn } from '@/utils/classNames'
import { getReadableNumber } from '@/utils/index'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table'
import humanizeDuration from 'humanize-duration'
import moment from 'moment'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { useTranslation } from '../../../public/locales/client'

const towersButtonPosition = [
  {
    label: 'Mine',
    styling: 'translate-x-12 translate-y-12',
    buttonStyling: 'h-32 w-32',
  },
  {
    label: 'Forge',
    styling: 'translate-x-36 translate-y-[9.5rem]',
    buttonStyling: 'h-36 w-36',
  },
  {
    label: 'Sanctuary of Hydra',
    styling: 'translate-x-[18.75rem] translate-y-[9.5rem]',
    buttonStyling: 'h-44 w-36',
  },
  {
    label: 'Tower of Conquest',
    styling: 'translate-x-[28.5rem] translate-y-[1.5rem]',
    buttonStyling: 'h-48 w-40',
  },
  {
    label: 'Tower of Quintessence',
    styling: 'translate-x-[37rem] translate-y-[7rem]',
    buttonStyling: 'h-44 w-20',
  },
  {
    label: 'Millennial Tree',
    styling: 'translate-x-[43.5rem] translate-y-[7rem]',
    buttonStyling: 'h-28 w-32',
  },
  {
    label: 'Portal',
    styling: 'translate-x-[52rem] translate-y-[4rem]',
    buttonStyling: 'h-48 w-32',
  },
  {
    label: 'Tower of Victory',
    styling: 'translate-x-[60.5rem] translate-y-[3rem]',
    buttonStyling: 'h-48 w-24',
  },
  {
    label: 'Training Sanctum',
    styling: 'translate-x-[67.5rem] translate-y-[12rem]',
    buttonStyling: 'h-[7rem] w-28',
  },
  {
    label: 'Holy Shrine',
    styling: 'translate-x-[76rem] translate-y-[1.5rem]',
    buttonStyling: 'h-48 w-40',
  },
] as const

export default function Conquests() {
  const { t, i18n } = useTranslation()
  const [selectedTower, setSelectedTower] = useState<ConquestTowers>('Mine')
  const [stage, setStage] = useState(0)

  const currentTower = ConquestTowersData[selectedTower].Steps[stage]
  const hasPreviousStage = stage > 0
  const maxStage = selectedTower === 'Sanctuary of Hydra' ? 12 : 24

  const handleTowerChange = (tower: ConquestTowers) => {
    if (tower === 'Sanctuary of Hydra' && stage > 12) {
      setStage(12)
    }

    setSelectedTower(tower)
  }

  const handleStageChange = (value: number) => {
    value = value - 1
    if (value < 0) value = 0
    if (value > maxStage) value = maxStage
    console.log(value)
    setStage(value)
  }

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
        ConquestTowersData[selectedTower].Steps[stage - 1].Effects
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
  }, [selectedTower, stage])

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
      <div className="custom-scroll relative flex w-full shrink-0 self-start overflow-x-auto">
        <Image
          src="/conquests/main.png"
          alt=""
          width={2813}
          height={809}
          className="w-[90rem] min-w-[90rem] shrink-0 rounded-lg object-contain"
        />
        {towersButtonPosition.map(({ label, styling, buttonStyling }) => (
          <label
            key={label}
            className={cn(
              'group absolute flex flex-col items-center gap-2',
              styling
            )}
            data-active={label === selectedTower}
          >
            <button
              className={cn('rounded-full', buttonStyling)}
              onClick={() => handleTowerChange(label)}
            />
            <span className="max-w-[8rem] text-center text-xl font-extrabold text-neutral-100 drop-shadow-[0_1px_4px_rgb(0,0,0,0.6)] transition-[transform,_color,_filter] will-change-[transform,color,filter] group-hover:-translate-y-2 group-data-[active=true]:text-white group-data-[active=true]:drop-shadow-[0_1px_4px_rgb(200,200,200)]">
              {label}
            </span>
          </label>
        ))}
      </div>

      <section className="flex w-full flex-col items-center px-8 py-4 text-white">
        <div className="flex items-center justify-between gap-4 rounded-full bg-primary-600 px-4 py-2">
          <button
            className="rounded-full p-1 transition-[colors,opacity] hover:bg-primary-500 disabled:opacity-0"
            onClick={() => setStage((prev) => (prev === 0 ? 0 : prev - 1))}
            disabled={stage === 0}
          >
            <Chevron />
          </button>
          <span className="flex items-center gap-2">
            Stage{' '}
            <input
              className={
                'flex w-8 appearance-none rounded-md bg-primary-500/50 px-1 text-center text-sm font-normal outline-none selection:bg-primary-800 placeholder:text-neutral-200/70 sm:text-base'
              }
              type="number"
              value={String(stage + 1)}
              onChange={(e) => handleStageChange(e.currentTarget.valueAsNumber)}
            />
          </span>
          <button
            className="rounded-full p-1 transition-[colors,opacity] hover:bg-primary-500 disabled:opacity-0"
            onClick={() =>
              setStage((prev) => (stage >= maxStage ? maxStage : prev + 1))
            }
            disabled={stage >= maxStage}
          >
            <Chevron className="rotate-180" />
          </button>
        </div>

        <header className="flex w-full justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold">{selectedTower}</h1>
            <p className="text-xl font-normal">
              {`Stage ${hasPreviousStage ? stage - 1 : 0} > `}
              <span className="text-[#62CA63]">Stage {stage + 1}</span>
            </p>
          </div>

          <div className="flex flex-col gap-2 text-end">
            <h2 className="text-end text-2xl font-bold">
              {humanizeDuration(
                moment
                  .duration(currentTower.UpgradeTime, 'seconds')
                  .asMilliseconds(),
                {
                  round: true,
                  language: i18n.language,
                }
              )}
            </h2>
            <p className="text-end text-sm font-medium">
              <b className="text-end font-bold">{'Power Score - '}</b>
              {`${
                hasPreviousStage
                  ? ConquestTowersData[selectedTower].Steps[stage - 1].Power
                  : 0
              } > `}
              <span className="text-[#62CA63]">{currentTower.Power}</span>
            </p>
          </div>
        </header>

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

        {currentTower.Condition ? (
          <div className="custom-scroll relative mt-14 flex w-full max-w-5xl gap-4 overflow-auto px-8 py-4">
            {currentTower.Condition?.Building &&
              Object.entries(currentTower.Condition?.Building).map(
                ([buildingName, level]) => (
                  <div
                    key={buildingName}
                    className="flex shrink-0 flex-col items-center gap-3"
                  >
                    <Image
                      src={`/conquests/previews/${buildingName
                        .toLocaleLowerCase()
                        .replace(/\s/g, '_')}.png`}
                      alt={buildingName}
                      width={216}
                      height={112}
                      className="select-none rounded-md object-contain"
                    />

                    <p className="max-w-[10rem] text-center text-sm font-medium text-white">
                      <b className="font-semibold">{buildingName}</b> <br />
                      Lv. {level as number}
                    </p>
                  </div>
                )
              )}
            {currentTower.Condition?.Achievement &&
              Object.values(currentTower.Condition?.Achievement).map(
                (achievment, index) => (
                  <div
                    key={index}
                    className="flex shrink-0 flex-col items-center gap-3"
                  >
                    <Image
                      src={'/conquests/previews/condition.png'}
                      alt={''}
                      width={216}
                      height={112}
                      className="select-none rounded-md object-contain"
                    />

                    <p className="max-w-[10rem] text-center text-sm font-semibold text-white">
                      {achievment as string}
                    </p>
                  </div>
                )
              )}
          </div>
        ) : (
          <></>
        )}

        <footer className="mt-10 flex items-center gap-4">
          {Object.entries(currentTower.Cost).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center gap-4 rounded-full bg-primary-600 px-3 py-2 pr-6 text-xl font-bold text-white"
            >
              <Image
                src={`/items/${key.toLowerCase()}.webp`}
                alt={key}
                width={32}
                height={32}
              />
              {getReadableNumber(value)}
            </div>
          ))}
        </footer>
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
