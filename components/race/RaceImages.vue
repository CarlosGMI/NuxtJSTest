<template>
  <b-row class="results-images">
    <b-col cols="12" class="text-center mb-4">
      <h2>Presenting:</h2>
    </b-col>
    <b-col sm="4" v-for="result in results" :key="result.id">
      <SellerResult :result="result" />
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex';

/**
 * The results component.
 *
 * This component contains the results (images) for the text (word) entered by the user in the form (@see RaceForm ). For each
 * result fetched we call another component from the Seller module (@see SellerResult ).
 *
 * @requires ./RaceResults
 * @requires ../sellers/SellerModal
 */
export default {
  computed: {
    ...mapGetters({
      results: 'race/getResults',
    }),
  },
};
</script>

<style></style>
