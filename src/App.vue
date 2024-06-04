<!-- JAVASCRIPT -->
<script>
// import store:
import { store } from './store';

// import axios:
import axios from 'axios';

// import component:
import listComponent from './components/ListComponent.vue';
import searchComponent from './components/SearchComponent.vue';
import footerComponent from './components/FooterComponent.vue';

// istanza vue:
export default {
   nome: 'AppRickMorty',
   data (){
      return {
         title: 'Rick and Morty App',
         store,
      }
   },
   props: {

   },
   components: {
      searchComponent,
      listComponent,
      footerComponent,

   },
   methods: {
      callApi(){
         axios.get(this.store.apiInfo.url).then(response => {
            this.store.cards = response.data.results;
            this.store.meta = response.data.info;
         });
      },
      // funzione per prendere solo una sigola voce da status:
      unifiesStatus() {
         let risult = new Set();
         this.store.cards.forEach(element => risult.add(element.status));
         this.store.option = Array.from(risult);        
      },
   },
   created(){
      // chiamata API:
      this.callApi();
      this.unifiesStatus();
   }
}

</script>


<!-- HTML -->
<template>

   <div class="container-full bg-squares">
      <section class="content">

         <h1> {{ title }} </h1>

         <searchComponent />
         <listComponent />
         <footerComponent />

      </section>
   </div>




</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import
@use './assets/scss/partials/variables' as *;
@use './assets/scss/partials/mixin' as *;

.bg-squares {
   @include checkerboard(70px, $white, $gray1);
      text-align: center;
      h1 {
         padding: 30px 0 50px;
         font-size: 40px;
         font-weight: 900;
         
      }
      
}


</style>

