<template>
  <b-modal
    class="seller-result-modal"
    :id="`seller-modal-${seller.id}`"
    :title="seller.name"
    size="xl"
    hide-footer
  >
    <div class="text-center">
      <b-button
        class="mb-3"
        variant="primary"
        size="lg"
        @click="vote(seller.id, seller.name)"
        >Votar</b-button
      >
    </div>
    <div class="seller-modal-img text-center">
      <b-img fluid :src="seller.image.landscape"></b-img>
    </div>
  </b-modal>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      changeVotes: 'race/changeVotesGrid',
    }),

    vote(sellerId, sellerName) {
      this.changeVotes(sellerId);
      this.$bvModal.hide(`seller-modal-${sellerId}`);
      this.makeToast(
        this,
        'success',
        '¡Muchas gracias!',
        `Su voto a ${sellerName} ha sido procesado con éxito`
      );
    },
  },

  props: ['seller'],
};
</script>

<style>
</style>