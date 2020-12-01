<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/courses_1">Courses-1</router-link> |
    <router-link to="/courses_2">Courses-2</router-link> |
    <router-link to="/courses_3">Courses-3</router-link> |
    <router-link to="/courses_4">Courses-4</router-link> |
    <router-link to="/courses_5">Courses-5</router-link>
  </div>
  <Sheep />
</template>

<script>
import Sheep from "./Sheep";
export default {
  components: {
    Sheep
  }
};
</script>

<style lang="scss" scoped>
#nav {
  margin-bottom: 50px;
  padding: 30px;
  background-color: #c5ffe5;

  a {
    font-weight: bold;
    color: #3c7ec0;

    &.router-link-exact-active {
      color: #036b3c;
    }
  }
}
</style>
