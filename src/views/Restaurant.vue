<template>
    <div>
        <SearchBar @search="handleSearch"/>
    </div>
              <ChoixRestaurant/>

    <v-carousel
    height="600"
    hide-delimiters
    progress="#fffff">

    <v-carousel-item
      v-for="i in slides.length"
      :id="i">
      <v-sheet
        height="100%"
        >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2 inline-block">
            <template v-for="j in 3" >
              <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374">

              <v-progress-linear
              v-if="loading"
              class="position-absolute"
              style="z-index: 1"
              color="deep-purple"
              height="10"
              indeterminate></v-progress-linear>
                  
              <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              cover></v-img>

              <v-card-header>
              <v-card-header-text>
              <v-card-title>Card {{i}}-{{j}}</v-card-title>

              <v-card-subtitle>
              <span class="mr-1">Local Favorite</span>

              <v-icon
                  color="error"
                  icon="mdi-fire-circle"
                  size="small"
              ></v-icon>
              </v-card-subtitle>
              </v-card-header-text>
              </v-card-header>
              <v-card-text>
              <v-row
                  align="center"
                  class="mx-0"
              >
              <v-rating
              :model-value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
              ></v-rating>

              <div class="text-grey ms-4">
              4.5 (413)
              </div>
              </v-row>

              <div class="my-4 text-subtitle-1">
                  $ • Italian, Cafe
              </div>

              <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
              </v-card-text>
              </v-card>
              <div class="divider">
              </div>
            </template>  
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import Card from "../components/Cards.vue";
import ChoixRestaurant from "../components/ChoixRestaurant.vue";


  export default {
    data: () => ({
      model: null,
      loading: false,
      selection: 1,
      slides: [
            {
            id: 1,
            title: 'Faire la vaisselle',
            description: 'Restaurant italien avec une cuisine de la mama, les pizzas et les plats du jour sont à votre disposition',
            },
            {
            id: 2,
            title: 'Vider le lave vaisselle',
            description: 'Restaurant italien avec une cuisine de la mama, les pizzas et les plats du jour sont à votre disposition',
            },
            {
            id: 3,
            title: 'Nettoyer le lave linge',
            description: 'Restaurant italien avec une cuisine de la mama, les pizzas et les plats du jour sont à votre disposition',
            },            
            {
            id: 4,
            title: 'Etendre le linge',
            description: 'Restaurant italien avec une cuisine de la mama, les pizzas et les plats du jour sont à votre disposition',
            },
        ],
    }),
    components:{
        SearchBar,
        Card,
        ChoixRestaurant,
    },
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      handleSearch(value){
            if(value && value.length > 0) {
                this.filteredData = this.technologyData.filter(i => {
                const val = value.toLowerCase();
                const title = i.title && i.title.toLowerCase();
                if(val && title.indexOf(val) !== -1) {
                    return true
                } 
                return false
                })
            } else {
                this.filteredData = this.technologyData;
            }
        }
    },
  }
</script>

<style scoped>
.inline-block{
    display: flex;
    flex-wrap: wrap;
    margin: 60px;
}

.divider{
    margin-left: 50px;
}
</style>