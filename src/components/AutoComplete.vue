<template>
    <div class="new-chat-window">
      <GMapAutocomplete
       class="new-chat-window-input" 
       id="new-chat-window-input"
       placeholder="Entrez votre adresse"
       @place_changed="setPlace"
       GMapAutocomplete/>
    </div>
</template>

<script>
export default {
name: 'App',
  data() {
    return {
    }
  },
  methods: {
    setPlace() {
    }
  }
}
</script>

<style scoped>
new-chat-window {
  position: relative;
  width: 400px;
  display: block;
  margin: 10px auto;
  text-align: center;
  z-index: 2;
}

.new-chat-window .fa {
  position: absolute;
  top: 7px;
  left: 10px;
  font-weight: bold;
  font-style: normal;
}

.new-chat-window-input {
  border: 1px solid #ccc;
  line-height: 30px;
  padding-left: 30px;
  width: 100%;
  z-index: 1;
}
</style>