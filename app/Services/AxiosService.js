
export const jeopardyApi = axios.create({
  baseURL: 'https://jservice.io/api/random',
  timeout: 8000
})

export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/players',
  timeout: 8000
})