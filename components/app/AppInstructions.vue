<template>
  <b-modal
    class="p-0"
    id="instructions-modal"
    :hide-footer="true"
    title="Instructions"
    :static="true"
    :lazy="true"
  >
    <h4 class="mb-3">Welcome!</h4>
    <p>
      At Imagenes Del Mundo we are known for the excellence of our photographs
      and as we are a bit competitive 😉, we have focused on which of our
      vendors has the best ones.
    </p>
    <p>
      We need <span class="highlight">your help</span> for that and you need to
      follow these steps:
    </p>
    <ol>
      <li>In the search input, type a term or a word you want to search</li>
      <li>Click the "What's up" button</li>
      <li>
        When the results are presented to you, click on the image you like the
        most and click on the "Vote" button
      </li>
    </ol>
    <p>
      <span class="highlight">That's it!</span> You gave 3 points to the seller
      you chose the photo from. However, this is a process that you can repeat
      until a seller gets 20 points. When you do, you will be able to create an
      invoice for that seller in Alegra and you will be able to see it!
    </p>
    <p>
      <i
        ><span class="highlight"
          >We love your help and we thank you for that!</span
        ></i
      >
    </p>
  </b-modal>
</template>

<script>
/**
 * The modal for the race instructions
 *
 * This component contains information regarding how to use the web app. Is a Bootstrap modal that is opened when the instructions
 * menu item in the Header component (@see AppHeader ) is clicked.
 */
export default {};
</script>

<style lang="scss"></style>
