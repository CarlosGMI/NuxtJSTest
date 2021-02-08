<template>
  <div class="race-container mt-5" v-if="sellersList && sellersList.length > 0">
    <RaceForm />
    <RaceResults />
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
    this.buildRaceGrid();
  },

  computed: {
    ...mapGetters({
      sellersList: 'sellers/getSellersList',
    }),
  },

  methods: {
    ...mapActions({
      fetchSellersList: 'sellers/fetchSellersList',
      buildRaceGrid: 'race/buildGrid',
    }),
  },
};
</script>

<style lang="scss">
</style>
