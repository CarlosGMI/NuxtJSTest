<template>
  <header class="header-container py-1">
    <b-container>
      <b-row>
        <b-col cols="5" sm="2">
          <b-navbar-brand class="m-0" href="/">
            <b-img fluid src="~/assets/images/logo.png" />
          </b-navbar-brand>
        </b-col>
        <b-col cols="7" sm="10">
          <ul
            class="header-menu list-unstyled d-flex align-items-center m-0 h-100 pl-4"
          >
            <li
              id="instructions-modal-opener"
              v-b-modal.instructions-modal
              class="text-uppercase font-main-gray"
            >
              How to use
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
/**
 * The Header component.
 *
 * This component includes a menu item which calls a modal for the race instructions
 * @see AppInstructions
 */
export default {};
</script>

<style lang="scss" src="component_styles/app/appheader.scss"></style>
