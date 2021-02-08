<template>
  <b-modal
    class="seller-result-modal"
    :id="`seller-modal-${seller.id}`"
    :title="seller.name"
    size="xl"
    hide-footer
  >
    <div class="text-center">
      <b-button class="mb-3" variant="primary" size="lg">Votar</b-button>
    </div>
    <div class="seller-modal-img text-center">
      <b-img fluid :src="seller.image.landscape"></b-img>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: ['seller'],
};
</script>

<style>
</style>