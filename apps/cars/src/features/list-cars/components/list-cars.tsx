import { Filters } from './filters'

export function ListCars() {
  return (
    <div className="grid w-full grid-cols-[1fr_3fr] gap-4">
      <Filters />

      <div className="h-fit rounded-lg border border-slate-200 py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni est
        magnam perspiciatis doloribus architecto ut voluptatum ullam
        necessitatibus vel. Asperiores, consequatur. Velit veniam suscipit ab,
        magnam quibusdam eaque ipsum est.
        <div className="mt-10 flex flex-col lg:flex-row">
          <span>pedro</span>
          <span>Henrique</span>
        </div>
      </div>
    </div>
  )
}
