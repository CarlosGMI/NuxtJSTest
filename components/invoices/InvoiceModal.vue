<template>
  <b-modal
    class="invoice-modal"
    id="invoice-modal"
    :title="`${seller.name}'s Invoice`"
    size="xl"
    hide-footer
  >
    <h3 class="text-center">{{ seller.name }}</h3>
    <p><b>Creation Date: </b>{{ invoice.date }}</p>
    <p><b>Expiration Date: </b>{{ invoice.dueDate }}</p>
    <p><b>Customer: </b>{{ invoice.client.name }}</p>
    <b-table hover :items="invoice.items" :fields="fields"></b-table>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex';

/**
 * The modal with the invoice information component.
 *
 * This component contains all the invoice information from the race winner by passing props.
 *
 * @requires ../race/RaceResultsFinal
 */
export default {
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'price',
          label: 'Price',
        },
        {
          key: 'quantity',
          label: 'Quantity (points in total)',
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

<style></style>
