<template>
  <div class="race-container mt-5" v-if="sellersList && sellersList.length > 0">
    <RaceForm />
    <RaceResults />
    <RaceStatistics v-if="!isEmptyObject(votesGrid)" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

/**
 * The Index page component.
 *
 * This component contains all the components for the race web app. The form (@see RaceForm ), the results when an user enters a
 * word in the input (@see RaceResults ) and the race statistics of which Seller is winning the race (@see RaceStatistics ).
 *
 * @requires ../components/race/RaceForm
 * @requires ../components/race/RaceResults
 * @requires ../components/race/RaceStatistics
 */
export default {
  data() {
    return {};
  },

  /**
   * Get Sellers from Alegra and then build the votes grid based on the Sellers.
   */
  async mounted() {
    await this.fetchSellersList();
    this.buildVotesGrid();
  },

  computed: {
    ...mapGetters({
      sellersList: 'sellers/getSellersList',
      votesGrid: 'race/getVotesGrid',
      isRaceFinished: 'race/getRaceFinished',
    }),
  },

  methods: {
    ...mapActions({
      fetchSellersList: 'sellers/fetchSellersList',
      buildVotesGrid: 'race/buildInitialVotesGrid',
    }),
  },

  watch: {
    isRaceFinished() {
      this.makeToast(
        this,
        'success',
        'Thank you very much!',
        'The race has finished and we have a winner'
      );
    },
  },
};
</script>

<style lang="scss" src="page_styles/index.scss"></style>
