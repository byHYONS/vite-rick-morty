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
   // funzioni:
   methods: {
      searchCharacter(){
         console.log('cerca!');

         const searchLower = this.store.search.toLowerCase().trim();
         const selectedStatus = this.store.selectedStatus;

         this.store.cards.forEach(element => {
            const matchesName = element.name.toLowerCase().includes(searchLower);
            const matchesStatus = selectedStatus === 'all' || element.status.toLowerCase() === selectedStatus;

            element.visible = matchesName && matchesStatus;
         });
         this.store.search = '';


      },
      searchReset(){
         console.log('cancella');
         this.store.search = '';
         this.store.selectedStatus = 'all';
         this.store.cards.forEach(element => {
            element.visible = true;
         });
      },

      callApi(){
         this.store.loading = true;
         axios.get(this.store.apiInfo.url)
         .then(response => {
            
            const {results, info} = response.data;  // destrutturo
            this.store.cards = results.map(element => {
               return element = {
                  ...element,
                  visible: true,
               }
            });

            this.store.meta = info;

            this.store.loading = false;
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

   <main class="bg-squares">

      <div class="container-full">

         <div v-if="store.loading" class="loading">
            <div class="red">
               <div class="blue"></div>
            </div>

         </div>

         <div v-else class="content">

            <h1> {{ title }} </h1>
   
            <searchComponent 
            @search="searchCharacter()"
            @reset="searchReset"/>
            <listComponent />
            <footerComponent />
            
         </div>
      </div>

   </main>





</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import
@use './assets/scss/partials/variables' as *;
@use './assets/scss/partials/mixin' as *;

.bg-squares {
   @include checkerboard(70px, $white, $gray1);
   min-height: 100vh;
   text-align: center;

   .loading {
      min-height: 100vh;
      background-color: $loading;
      align-content: center;
      .red {
         display: flex;
         justify-content: center;
         align-items: center;
         width: 180px;
         height: 180px;
         border-top: 7px solid $red;
         border-radius: 50%;
         margin: auto;
         animation: load 1.5s linear infinite;
      }
      .blue {
         width: 110px;
         height: 110px;
         border-top: 4px solid $blue;
         border-radius: 50%;
         animation: load 4s linear infinite;
      }
      @keyframes load {
         0% {
            transform: rotate(0deg);
         }

         100% {
            transform: rotate(360deg);
         }
      }
   }
   h1 {
      padding: 30px 0 50px;
      font-size: 40px;
      font-weight: 900;
      
   }
      
}



</style>

