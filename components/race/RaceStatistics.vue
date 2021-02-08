<template>
  <h2>Race statistics...</h2>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  mounted() {
    this.buildRaceGrid();
  },

  computed: {
    ...mapGetters({
      votes: 'race/getVotesGrid',
    }),
  },

  methods: {
    ...mapActions({
      buildRaceGrid: 'race/buildRaceGrid',
    }),
  },

  watch: {
    votes: {
      deep: true,
      handler: function (votesGrid) {
        console.log(`I just voted`);
      },
    },
  },
};
</script>

<style lang="scss">
</style>