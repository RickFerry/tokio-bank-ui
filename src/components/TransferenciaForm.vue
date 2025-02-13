<template>
  <form @submit.prevent="agendar">
    <label for="contaOrigem">Conta Origem:</label>
    <input id="contaOrigem" v-model="transferencia.contaOrigem" required />

    <label for="contaDestino">Conta Destino:</label>
    <input id="contaDestino" v-model="transferencia.contaDestino" required />

    <label for="valor">Valor:</label>
    <input id="valor" v-model.number="transferencia.valor" type="number" required />

    <label for="dataTransferencia">Data da Transferência:</label>
    <input id="dataTransferencia" v-model="transferencia.dataTransferencia" type="date" required />

    <button type="submit">Agendar</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useTransferenciaStore } from '../stores/transferenciaStore'

const store = useTransferenciaStore()
const transferencia = ref({
  contaOrigem: '',
  contaDestino: '',
  valor: null,
  dataTransferencia: '',
  dataAgendamento: new Date().toISOString().split('T')[0],
})

const agendar = async () => {
  await store.agendar(transferencia.value)
  transferencia.value = { contaOrigem: '', contaDestino: '', valor: null, dataTransferencia: '' }
}
</script>
