<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col sm="5">
        <b-form-input
          v-model="searchTerm"
          placeholder="Escribe una palabra"
        ></b-form-input>
      </b-col>
      <b-col sm="2" class="text-center text-sm-left mt-3 mt-sm-0">
        <b-button
          variant="primary"
          @click="searchImages"
          :disabled="isRaceFinished"
          >¿Qué hay?</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      searchTerm: '',
    };
  },

  computed: {
    ...mapGetters({
      isRaceFinished: 'race/getRaceFinished',
    }),
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
