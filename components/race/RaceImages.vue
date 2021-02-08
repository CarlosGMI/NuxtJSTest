<template>
  <b-row class="results-images">
    <b-col cols="12" class="text-center mb-4">
      <h2>Presentando:</h2>
    </b-col>
    <b-col sm="4" v-for="result in results" :key="result.id">
      <SellerResult :result="result" />
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      results: 'race/getResults',
    }),
  },
};
</script>

<style>
</style>