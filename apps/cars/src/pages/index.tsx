import { ListCars } from '@/features/list-cars'

export default function Home() {
  return (
    <div>
      <main className="min-h-screen w-full bg-background">
        <div className="mx-auto flex w-full max-w-7xl justify-between py-6">
          <ListCars />
        </div>
      </main>
    </div>
  )
}
