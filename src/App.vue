<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        v-model="drawer"
        app
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://avatars.githubusercontent.com/u/60074565?v=4"
            title="Pierre Campmas"
            subtitle="pierre.campmas@gmail.com"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="Accueil" value="myfiles" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-silverware" title="Voir les restaurants" value="shared" to="/restaurant"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Mes commandes" value="starred" to="/order"></v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
          <v-list nav>
            <v-list-item prepend-icon="mdi-cog" title="Paramètres" value="settings" to="/settings"></v-list-item>
            <v-list-item prepend-icon="mdi-account-circle" title="Mon compte" value="account" to="/account"></v-list-item>
          </v-list>
          </div>
        </template>
      </v-navigation-drawer>

      <v-main style="height: 1000px;">
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
  export default {
    data: () => ({ 
        drawer: null,
    }),
  }
</script>