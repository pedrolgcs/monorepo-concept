import axios from 'axios'

const DELAY = true

const api = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000',
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    throw error
  },
)

if (DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 1000)),
    )
    return config
  })
}

export { api }
