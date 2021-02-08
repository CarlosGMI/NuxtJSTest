<template>
  <b-container class="race-results-container mt-5">
    <div class="race-not-finished" v-if="!isRaceFinished">
      <RaceLoading v-if="searchingResults" />
      <RaceImages v-if="!searchingResults && results.length > 0" />
      <RaceNoResults
        v-if="raceStarted && results.length === 0 && !searchingResults"
      />
    </div>
    <div class="race-finished" v-else>
      <h2>Race finished...</h2>
    </div>
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
      isRaceFinished: 'race/getRaceFinished',
    }),
  },
};
</script>

<style lang="scss">
</style>