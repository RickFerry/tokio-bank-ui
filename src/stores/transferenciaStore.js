import { defineStore } from 'pinia'
import { listarTransferencias, agendarTransferencia } from '../api/transferenciaService'

export const useTransferenciaStore = defineStore('transferencia', {
  state: () => ({
    transferencias: [],
  }),
  actions: {
    async carregarTransferencias() {
      const response = await listarTransferencias()
      this.transferencias = response.data
    },
    async agendar(transferencia) {
      await agendarTransferencia(transferencia)
      this.carregarTransferencias()
    },
  },
})
