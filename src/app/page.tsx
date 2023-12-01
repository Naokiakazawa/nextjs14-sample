import Image from 'next/image'
import { ModeToggle } from '@/components/modeToggle'
import { ComboboxDemo } from '@/components/Combo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />
      <ComboboxDemo />
    </main>
  )
}
