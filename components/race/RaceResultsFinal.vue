<template>
  <div class="race-finished-results text-center">
    <h2 class="mb-4">Race has ended</h2>
    <h3><b>Winner: </b>{{ raceGrid[0].name }}</h3>
    <h3><b>Points: </b>{{ raceGrid[0].points }}</h3>
    <div class="invoice-wrapper text-center">
      <div class="invoice__loading" v-if="creatingInvoice">
        <p>Creating invoice...</p>
        <b-spinner variant="primary" label="Loading"></b-spinner>
      </div>
      <b-button
        class="mt-4"
        variant="primary"
        v-b-modal="'invoice-modal'"
        v-else
        >See invoice</b-button
      >
      <p class="mt-4"><i>Just for testing...</i></p>
      <b-button variant="primary" @click="restartRace">Restart race</b-button>
    </div>
    <InvoiceModal v-if="!creatingInvoice" :seller="raceGrid[0]" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

/**
 * The component that shows the final results when the race is finished.
 *
 * This component includes the information for the winner Seller of the race which is obtained from the first element of
 * the raceGrid array. This component also renders a button that opens a modal with the invoice information of the winner.
 * This modal is only rendered if the Alegra API finished creating the invoice (@see creatingInvoice getter).
 *
 * @requires ./RaceForm
 */
export default {
  computed: {
    ...mapGetters({
      raceGrid: 'race/getRaceGrid',
      creatingInvoice: 'invoices/getCreatingInvoice',
    }),
  },

  methods: {
    /**
     * Restart the web app (JUST FOR DEVELOPMENT AND EVALUATION PROCESS FROM THE ALEGRA TEAM).
     */
    restartRace() {
      // I know this is ugly but is only a feature to restart the race and only for development and test purposes
      localStorage.clear();
      location.reload();
    },
  },
};
</script>

<style></style>
