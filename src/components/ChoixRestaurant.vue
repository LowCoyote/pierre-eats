<template>
    <v-toolbar class="Toolbar">
    <v-spacer></v-spacer>
        <v-btn class="button" stacked>
            <v-icon size="x-large">mdi-food-croissant</v-icon>
            <p class="under-text">Française</p>
        </v-btn>

        <v-btn class="button" stacked>
        <v-icon size="x-large">mdi-noodles</v-icon>
        <p class="under-text">Chinois</p>
        </v-btn>

        <v-btn class="button" stacked>
            <v-icon size="x-large">mdi-pizza</v-icon>
            <p class="under-text">Pizza</p>
        </v-btn>

        <v-btn class="button" stacked>
            <v-icon size="x-large">mdi-pasta</v-icon>
            <p class="under-text">Italienne</p>
        </v-btn>
    
        <v-btn class="button" stacked @click="greet">
            <v-icon size="x-large">mdi-menu</v-icon>
            <p class="under-text">Menu</p>
        </v-btn>

    <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
export default {
name: 'App',
  data() {
    return {
        items: [
        { title: 'Click Me1' },
        { title: 'Click Me2' },
        { title: 'Click Me3' },
        { title: 'Click Me4' },
      ],
    }
  },
  methods: {
    greet: function (event) {
      //Faire 
    }
  },  
}
</script>

<style scoped>
.under-text{
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 12px;
    color: black;
}

.button{
    border-radius: 50%;
    margin-left: 50px;
    margin-bottom: 15px;
}
.Toolbar{
    padding-top: 25px;
    left: 0;
    width: 100%;
    z-index: 1;
    background-color: white;
}
</style>