<template>
  <b-modal
    class="p-0"
    id="instructions-modal"
    :hide-footer="true"
    title="Instrucciones"
    :static="true"
    :lazy="true"
  >
    <h4 class="mb-3">¡Bienvenido!</h4>
    <p>
      En Imagenes Del Mundo nos caracterizamos por la excelencia de nuestras
      fotografías y, como somos un poco competitivos 😉, nos hemos enfocado en
      buscar cuál de todos nuestros vendedores es el que tiene mejores
      fotografías.
    </p>
    <p>
      Para ello necesitamos de <span class="highlight">tu ayuda</span> y lo
      único que tienes que hacer es seguir estos sencillos pasos:
    </p>
    <ol>
      <li>Introduce en el campo de texto una palabra que desees buscar.</li>
      <li>Haz click sobre el botón de "¿Qué hay?"</li>
      <li>
        Cuando puedas ver los resultados, haz click sobre la imagen que más te
        guste y presiona el botón de "Me encanta".
      </li>
    </ol>
    <p>
      <span class="highlight">¡Y listo!</span> Habrás dado 3 puntos al vendedor
      del cual seleccionaste la imagen, sin embargo es un proceso que puedes
      repetir hasta que consigas que algún vendedor alcance los 20 puntos.
      Cuando lo hagas, harás que el vendedor pueda crear una factura en Alegra
      que ¡hasta tú podrás ver!
    </p>
    <p>
      <i
        ><span class="highlight"
          >¡Tu ayuda es valiosa y juntos podemos hacer de este mundo un lugar
          más fotogénico!</span
        ></i
      >
    </p>
  </b-modal>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
