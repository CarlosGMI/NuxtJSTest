<template>
  <div class="race-finished-results text-center">
    <h2 class="mb-4">La carrera ha terminado</h2>
    <h3><b>Ganador: </b>{{ raceGrid[0].name }}</h3>
    <h3><b>Puntos: </b>{{ raceGrid[0].points }}</h3>
    <div class="invoice-wrapper text-center">
      <div class="invoice__loading" v-if="creatingInvoice">
        <p>Creando factura...</p>
        <b-spinner variant="primary" label="Loading"></b-spinner>
      </div>
      <b-button
        class="mt-4"
        variant="primary"
        v-b-modal="'invoice-modal'"
        v-else
        >Ver factura</b-button
      >
    </div>
    <InvoiceModal :seller="raceGrid[0]" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      raceGrid: 'race/getRaceGrid',
      creatingInvoice: 'invoices/getCreatingInvoice',
    }),
  },
};
</script>

<style>
</style>