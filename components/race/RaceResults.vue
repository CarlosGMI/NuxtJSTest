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
      <RaceResultsFinal />
    </div>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

/**
 * The images results component.
 *
 * This component includes all the required components to give the user a nice UX regarding the results for the word that the
 * user entered in the form (@see RaceForm ). We can present the user a screen with all the results (@see RaceImages ), a screen
 * when no results are found (@see RaceNoResults ), a screen while getting the images for the API (@see RaceLoading ), and finally
 * a screen presenting the final results when the race is finished (@see RaceResultsFinal ).
 *
 * @requires ./RaceForm
 */
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