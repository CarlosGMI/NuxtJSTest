<template>
  <RaceForm />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },

  async created() {
    await this.fetchSellersList();
    console.log(this.sellersList);
  },

  computed: {
    ...mapGetters({
      sellersList: 'sellers/getSellersList'
    })
  },

  methods: {
    ...mapActions({
      fetchSellersList: 'sellers/fetchSellersList'
    })
  }
}
</script>

<style lang="scss">
</style>
