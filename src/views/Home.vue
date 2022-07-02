<template>
    <h1 class="title">Bienvenue sur <div class="divTitle"><span class="firstTitle">Pierre</span><span class="secondTitle">Eats</span></div></h1>
    <div class="center-content">
        <GMapAutocomplete></GMapAutocomplete>
    </div>
</template>

<script>
import AutoCompleteVue from "../components/AutoComplete.vue";

export default{
    components:{
        "GMapAutocomplete": AutoCompleteVue,
    }
}
</script>

<style scoped>
.center-content{
    margin-top: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.title{
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2px;
}
.divTitle{
    border-radius: 10px;
    display: inline;
    background-color: #37474f;
}
.firstTitle{
    color: white;
}
.secondTitle{
    color: #66bb6a;
}
</style>