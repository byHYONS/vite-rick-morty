<!-- JAVASCRIPT -->
<script>
// import:
import cardComponent from './CardComponent.vue';

// import store:
import { store } from '../store';

export default {
   nome: 'listComponent',
   data(){
      return{
        store,
      }
   },
   components: {
    cardComponent,

   }
}

</script>


<!-- HTML -->
<template>
    <div class="row gap-50">

        <cardComponent class="card-list" 
        v-for="(card, index) in store.cards" 
        :key="index" :card="card" />

    </div>

</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import:
@use '../assets/scss/partials/mixin' as *;

.row {
    padding-bottom: 80px;
    .card-list {
        @include col-x(50px, 4);
    }
}


</style>
