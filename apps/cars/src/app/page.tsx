import { ListCars } from '@/features/list-cars'

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background">
      <div className="mx-auto grid w-full max-w-7xl justify-between px-4 py-6">
        <ListCars />
      </div>
    </main>
  )
}
