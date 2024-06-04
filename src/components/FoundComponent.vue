<!-- JAVASCRIPT -->
<script>
// import store:
import { store } from '../store'


export default {
   nome: 'foundComponent',
   data(){
      return{
        store,
      }
   },
   
}

</script>


<!-- HTML -->
<template>

    <div class="found">
        <p><strong>
            Found {{ store.cards.length }} characters
        </strong></p>
    </div>

</template>


<!-- STYLE -->
<style lang="scss" scoped>

.found {
    p { 
        padding-bottom: 50px;
    }

}


</style>
