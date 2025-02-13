<template>
  <div>
    <h2>Extrato de Transferências</h2>
    <table>
      <thead>
        <tr>
          <th>Conta Origem</th>
          <th>Conta Destino</th>
          <th>Valor</th>
          <th>Taxa</th>
          <th>Data Transferência</th>
          <th>Data Agendamento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in store.transferencias" :key="t.id">
          <td>{{ t.contaOrigem }}</td>
          <td>{{ t.contaDestino }}</td>
          <td>R$ {{ t.valor.toFixed(2) }}</td>
          <td>R$ {{ t.taxa.toFixed(2) }}</td>
          <td>{{ t.dataTransferencia }}</td>
          <td>{{ t.dataAgendamento }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTransferenciaStore } from '../stores/transferenciaStore'

const store = useTransferenciaStore()
onMounted(() => store.carregarTransferencias())
</script>
