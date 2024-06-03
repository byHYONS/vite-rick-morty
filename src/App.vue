<!-- JAVASCRIPT -->
<script>
// import store:
import { store } from './store';

// import component:
import listComponent from './components/ListComponent.vue';


export default {
   nome: 'App',
   data (){
      return {
         title: 'Rick and Morty App'
      }
   },
   props: {

   },
   components: {
      listComponent,
   }
}

</script>


<!-- HTML -->
<template>

   <div class="container-full bg-squares">
      <section class="">

         <h1> {{ title }} </h1>

         <listComponent />

      </section>
   </div>




</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import
@use './assets/scss/partials/variables' as *;
@use './assets/scss/partials/mixin' as *;

.bg-squares {
   @include checkerboard(70px, $white, $gray1, $gray2);
      height: 100vh;
      text-align: center;
      h1 {
         margin: 30px 0 50px;
         font-size: 40px;
         font-weight: 900;
         
      }
      
}




</style>

