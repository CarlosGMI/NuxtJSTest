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
      <a :href="seller.image.original" target="_blank" style="cursor: pointer">
        <b-img fluid :src="seller.image.landscape"></b-img>
      </a>
    </div>
  </b-modal>
</template>

<script>
import { mapActions } from 'vuex';

/**
 * The modal for the single result of all the results rendered in RaceResults (@see RaceResults ).
 *
 * This component includes a Bootstrap modal that renders the landscape image associated to a single Seller (result) passed
 * by props. In addition to that, this component renders a button for the user to click and vote for that Seller.
 *
 * @requires ./SellerResult
 */
export default {
  methods: {
    ...mapActions({
      changeVotes: 'race/changeVotesGrid',
    }),

    /**
     * When the user clicks the "Vote" button we dispatch the votation method, we hide the modal and render a notification to
     * the user that his/her vote was successful.
     */
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