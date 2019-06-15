<template>
  <div>
    <homesearch></homesearch>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import tabbar from "@/components/tabbar";
import homesearch from "@/components/homesearch";

export default {
  name: "home",
  data() {
    return {
      
    };
  },
  components: {
    tabbar,
    homesearch
  }
};
</script>
<style lang="scss" scoped>
  
</style>
