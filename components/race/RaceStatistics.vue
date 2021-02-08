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
    ...mapGetters({}),
  },

  methods: {
    ...mapActions({
      buildRaceGrid: 'race/buildInitialRaceGrid',
    }),
  },
};
</script>

<style lang="scss">
</style>