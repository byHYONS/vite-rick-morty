<!-- JAVASCRIPT -->
<script>
// istanza vue:
export default {
   nome: 'cardComponent',
   props: {
    card: String,
   },

}

</script>


<!-- HTML -->
<template>

<div class="card">
    <img :src="card.image" :alt="card.name">
    <h3> {{ card.name }} </h3>
    <p> {{ card.status }} </p>
    <p> {{ card.species }} </p>
</div>

</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import:
@use '../assets/scss/partials/variables' as *;

.card {
    
    img {
        border-radius: 100%;
        width: 100%;
        height: auto;
        box-shadow: 1px 3px 10px rgba($shodow, $alpha);
    }
    h3 {
        color: $text;
        margin-top: 25px;
        font-size: 28px;
        font-weight: 700;
    }
    p {
        color: $text2;
        font-size: 20px;
        margin-top: 10px;
    }
}


</style>
