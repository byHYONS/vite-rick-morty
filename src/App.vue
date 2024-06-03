<!-- JAVASCRIPT -->
<script>
// import store:
import { store } from './store';

// import axios:
import axios from 'axios';

// import component:
import listComponent from './components/ListComponent.vue';


export default {
   nome: 'App',
   data (){
      return {
         title: 'Rick and Morty App',
         store,
      }
   },
   props: {

   },
   components: {
      listComponent,
   },
   created(){
      axios.get(this.store.apiURL).then(response => {
         this.store.cards = response.data.results;
         console.log(response.data.results);
      });
   }
}

</script>


<!-- HTML -->
<template>

   <div class="container-full bg-squares">
      <section class="content">

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
      text-align: center;
      h1 {
         padding: 30px 0 50px;
         font-size: 40px;
         font-weight: 900;
         
      }
      
}




</style>

