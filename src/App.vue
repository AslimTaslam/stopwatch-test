<template>
  <TimerBoard />
</template>

<script>
import TimerBoard from "./components/TimerBoard/TimerBoard.vue";

export default {
  name: "App",
  components: {
    TimerBoard,
  },
};
</script>

<style>
@import url(//db.onlinewebfonts.com/c/07a38bbad54db72a40b406bed1c72f53?family=Gotham+Pro);

#app {
  font-family: Gotham pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 50px;
}
@media (max-width: 768px) {
  #app {
    margin-top: 20px;
  }
}
</style>
