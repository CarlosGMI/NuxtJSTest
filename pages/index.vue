<template>
  <div class="race-container mt-5" v-if="sellersList && sellersList.length > 0">
    <RaceForm />
    <RaceResults />
    <RaceStatistics v-if="!isEmptyObject(votesGrid)" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },

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
        '¡Muchísimas gracias!',
        'Con tu ayuda la carrera ha finalizado y ya tenemos un ganador'
      );
    },
  },
};
</script>

<style lang="scss">
</style>
