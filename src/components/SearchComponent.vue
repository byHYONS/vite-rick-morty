<script>
import { store } from '../store'

export default {
    nome: 'searchComponent',
    data(){
        return {
            store,
        
        }
    },

}
</script>

<template>

    <div class="search">
        <input type="text" placeholder="Search character"
        v-model="store.search" />
        <select name="status" id="status" 
        v-model="store.selectedStatus"
        @change="$emit('changeOption')">
            <option value="all"> Select status </option>
            <option value="alive"> Alive </option>
            <option value="dead"> Dead </option>
            <option value="unknown"> Unknown </option>

            <!-- <option v-for="(option, index) in store.option" :key="index"
            value="status"> {{ option }}</option> -->

        </select>

        <button class="btn search"
        @click="$emit('search')" 
        >Search</button>

        <button class="btn reset"
        @click="$emit('reset')"
        >Reset</button>

    </div>
    

</template>



<style lang="scss" scoped>
//import 
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/extende' as *;

.search {
    margin-bottom: 30px;
    input {
        margin-right: 10px;
        padding: 10px 15px;
        border: none;
        border-radius: 10px;
        outline: none;
        @extend %shadow;

    }
    select {
        @extend input;
        background-color: $white;
        
    }
    .btn {
        @extend input;
        &.search {
            background-color: $search;
            color: $text3;
        }
        &.reset {
            background-color: $reset;
        }
    }
}

</style>