import { setupWorker } from 'msw/browser'

const ENABLE = true

export const worker = setupWorker()

export async function enableMSW() {
  if (!ENABLE) {
    return
  }

  await worker.start()
}
