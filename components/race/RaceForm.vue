<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col sm="5">
        <b-form-input
          v-model="searchTerm"
          placeholder="Escribe una palabra"
        ></b-form-input>
      </b-col>
      <b-col sm="2">
        <b-button variant="primary" @click="searchImages">¿Qué hay?</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      searchTerm: '',
    };
  },

  methods: {
    ...mapActions({
      fetchResults: 'race/fetchResults',
    }),

    searchImages() {
      if (this.isBlankOrEmptyString(this.searchTerm)) {
        this.makeToast(
          this,
          'warning',
          'Error',
          'Por favor introduzca una palabra'
        );
      } else {
        this.fetchResults({ searchTerm: this.searchTerm });
      }
    },
  },
};
</script>

<style lang="scss"></style>
