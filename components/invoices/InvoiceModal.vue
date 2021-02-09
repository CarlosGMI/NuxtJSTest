<template>
  <b-modal
    class="invoice-modal"
    id="invoice-modal"
    :title="`Factura de ${seller.name}`"
    size="xl"
    hide-footer
  >
    <h3 class="text-center">{{ seller.name }}</h3>
    <p><b>Fecha de creación: </b>{{ invoice.date }}</p>
    <p><b>Fecha de expiración: </b>{{ invoice.dueDate }}</p>
    <p><b>Cliente: </b>{{ invoice.client.name }}</p>
    <b-table hover :items="invoice.items" :fields="fields"></b-table>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'Nombre',
        },
        {
          key: 'price',
          label: 'Precio',
        },
        {
          key: 'quantity',
          label: 'Cantidad (puntos acumulados)',
        },
      ],
    };
  },

  computed: {
    ...mapGetters({
      invoice: 'invoices/getWinnerInvoice',
    }),
  },

  props: ['seller'],
};
</script>

<style>
</style>