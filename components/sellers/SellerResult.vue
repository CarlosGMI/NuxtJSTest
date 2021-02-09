<template>
  <div class="text-center seller-result-item mb-5">
    <h3>{{ result.name }}</h3>
    <a
      class="seller-result-modal-opener d-flex justify-content-center"
      v-b-modal="'seller-modal-' + result.id"
    >
      <b-img thumbnail fluid :src="result.image.medium"></b-img>
    </a>
    <SellerModal :seller="result" />
  </div>
</template>

<script>
/**
 * The component for the single result of all the results rendered in RaceResults (@see RaceResults ).
 *
 * This component includes the individual information for every result that gets passed by props. This component renders the
 * Seller name and the medium sized image associated to that Seller. At the same time, when clicking the image we can get a modal
 * with the image in landscape mode and the "vote" button (@see SellerModal ).
 *
 * @requires ../race/RaceImages
 */
export default {
  props: ['result'],
};
</script>

<style src="component_styles/sellers/sellers-results.scss" lang="scss">
</style>