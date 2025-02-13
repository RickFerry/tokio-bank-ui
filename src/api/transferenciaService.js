import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/transferencias',
})

export const agendarTransferencia = async (transferencia) => {
  return api.post('/', transferencia)
}

export const listarTransferencias = async () => {
  return api.get('/')
}
