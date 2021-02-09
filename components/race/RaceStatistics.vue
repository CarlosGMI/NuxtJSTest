<template>
  <div class="race-statistics-container pt-3 bg-white-gray w-100">
    <div class="px-2">
      <transition-group name="race-grid" tag="div" class="race-grid">
        <div
          class="race-grid-item text-center"
          v-for="(seller, index) in raceGrid"
          :key="seller.id"
        >
          <div class="race-grid-item__content">
            <p class="mb-2">
              <b>{{ index + 1 }}. {{ seller.name }}</b>
            </p>
            <b-img src="~/assets/images/formula-1-cropped.png" />
            <p class="my-2"><b>Puntos: </b>{{ seller.points }}</p>
            <p>
              <b>Puntos para ganar: </b
              >{{ showRemainingPoints(seller.pointsToWin) }}
            </p>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

/**
 * The race statistics component.
 *
 * This component contains all the statistics for the race. For each seller placed or sorted in the race grid we render its
 * position on the grid (1st, 2nd, etc.), its points and remaining points to win, and an icon. All of this is wrapped by a
 * transition-group that gives the raceGrid list an animation when a Seller ranks up or down a position.
 */
export default {
  /**
   * Build the race grid list (the Seller positions in the race).
   */
  mounted() {
    this.buildRaceGrid();
  },

  computed: {
    ...mapGetters({
      votes: 'race/getVotesGrid',
      raceGrid: 'race/getRaceGrid',
    }),
  },

  methods: {
    ...mapActions({
      buildRaceGrid: 'race/buildRaceGrid',
    }),

    showRemainingPoints(points) {
      return points < 0 ? 0 : points;
    },
  },

  watch: {
    /**
     * Every time the votes grid changes (the user voted for a Seller) we need to re-build the race grid because we have to
     * know the Sellers rankings.
     */
    votes: {
      deep: true,
      handler: function (votesGrid) {
        this.buildRaceGrid();
      },
    },
  },
};
</script>

<style lang="scss" src="component_styles/race/statistics.scss">
</style>