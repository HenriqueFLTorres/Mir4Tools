import { InventoryAtom, showInventoryAtom } from '@/atoms/Inventory'
import BasicItemFrame from '@/components/Inventory/BasicItemComponent'
import ItemComponent from '@/components/Inventory/ItemComponent'
import Close from '@/icons/Close'
import { useAtom } from 'jotai'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from '../../../public/locales/client'

export default function Inventory() {
  const [inventory] = useAtom(InventoryAtom)
  const [, setShowInventory] = useAtom(showInventoryAtom)
  const { t } = useTranslation()
  const [image, setImage] = useState<undefined | string>(undefined)
  const [result, setResult] = useState<undefined | string>(undefined)

  return (
    <>
      <header className="flex items-center justify-between">
        <h2 className="text-3xl text-primary-200">{t('Inventory')}</h2>

        <button
          onClick={() => {
            setShowInventory((prev) => !prev)
          }}
          className="h-12 w-12 rounded-md p-3 hover:bg-gray-100/10 motion-safe:transition-colors"
          aria-label="Close modal"
        >
          <Close className="fill-white" />
        </button>
      </header>

      <label>
        Upload
        <input
          type="file"
          onChange={async (e) => {
            const file = e.currentTarget.files?.[0]
            if (!file) return
            const data = await convertToBase64(file)

            setImage(data as string)
          }}
        />
      </label>

      <button
        onClick={async () => {
          console.log('click')
          try {
            const headers = new Headers()
            headers.append('Content-Type', 'application/json')

            const response = await fetch(
              'http://localhost:8000/api/inventoryFromImage',
              {
                method: 'POST',
                headers,
                body: JSON.stringify({
                  image: image?.replace('data:image/png;base64,', ''),
                }),
                redirect: 'follow',
              }
            )
            const data = await response.json()

            setResult(data.image)
          } catch (error) {
            console.error(error)
          }
        }}
      >
        send
      </button>

      {image && (
        <Image
          src={`data:image/jpeg;base64,${image}`}
          alt=""
          width={693}
          height={417}
        />
      )}
      {result && (
        <Image
          src={`data:image/jpeg;base64,${result}`}
          alt=""
          width={693}
          height={417}
        />
      )}

      <section className="mt-8 flex flex-col gap-8 p-4">
        {Object.entries(inventory).map(([name, rarities]) => (
          <ul key={name} className="flex gap-2">
            {Object.keys(rarities).map((rarity) => (
              <ItemComponent
                key={rarity}
                item={name as ItemWithRarity}
                rarity={rarity as RarityTypes}
              />
            ))}
          </ul>
        ))}
      </section>

      <section className="my-4 flex flex-col gap-8 p-4">
        <ul className="flex gap-2">
          {Object.entries(inventory)
            .filter(([, value]) => typeof value === 'number')
            ?.map(([name]) => (
              <BasicItemFrame
                key={name}
                item={name as ItemWithRarity}
                rarity={'Default'}
              />
            ))}
        </ul>
      </section>
    </>
  )
}

const convertToBase64 = async (file: File) =>
  await new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
