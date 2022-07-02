<template>
  <v-footer class="d-flex flex-column bottom-footer">
    <div class="d-flex w-100 align-center px-4" style="background-color: #37474f;">
      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-1 text-white"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-white text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Pierre Campmas</strong>
    </div>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>
.bottom-footer {
  position: fixed;
  left:0;
  bottom: 0;
  width: 105%;
  color: white;
  text-align: center;
}
</style>