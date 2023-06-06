<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col sm="5">
        <b-form-input
          v-model="searchTerm"
          placeholder="Write a word"
        ></b-form-input>
      </b-col>
      <b-col sm="2" class="text-center text-sm-left mt-3 mt-sm-0">
        <b-button
          variant="primary"
          @click="searchImages"
          :disabled="isRaceFinished"
          >What's Up?</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

/**
 * The form for images search component.
 *
 * This component contains the input and the button that a user needs to search for a word and present his/her with images related
 * with the search term (the word).
 * The button is disabled when the race is finished.
 */
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

    /**
     * Make a notification if the user enters a blank or empty string. If not, get the images from the searched term (word).
     */
    searchImages() {
      if (this.isBlankOrEmptyString(this.searchTerm)) {
        this.makeToast(this, 'warning', 'Error', 'Please type a search term');
      } else {
        this.fetchResults({ searchTerm: this.searchTerm });
      }
    },
  },
};
</script>

<style lang="scss"></style>
