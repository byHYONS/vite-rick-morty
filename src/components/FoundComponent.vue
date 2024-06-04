<!-- JAVASCRIPT -->
<script>
// import store:
import { store } from '../store'


export default {
   nome: 'foundComponent',
   props: {

   },
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
        <p><strong>Found {{ store.cards.length }} characters</strong></p>
    </div>

</template>


<!-- STYLE -->
<style lang="scss" scoped>
p { 
    padding-bottom: 50px;
}


</style>
