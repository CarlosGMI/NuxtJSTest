<template>
  <b-container class="race-results-container mt-5">
    <RaceLoading v-if="searchingResults" />
    <RaceImages v-if="!searchingResults && results.length > 0" />
    <RaceNoResults v-if="raceStarted && results.length === 0" />
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      searchingResults: 'race/getSearchingResults',
      results: 'race/getResults',
      raceStarted: 'race/getRaceStarted',
    }),
  },
};
</script>

<style lang="scss">
</style>