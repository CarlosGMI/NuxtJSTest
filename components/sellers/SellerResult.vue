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
export default {
  props: ['result'],
};
</script>

<style lang="scss">
</style>