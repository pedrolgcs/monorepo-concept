
import {Badge} from '@repo/ui/badge'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-400 w-full">
      <Badge variant="default">Hello</Badge>
      <div className='h-96 bg-red-300'></div>
    </main>
  );
}
