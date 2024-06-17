<template>
  <div class="home">
    <LifeCycle></LifeCycle>
    <Reactive></Reactive>
    <Computed></Computed>
    <Watch></Watch>
    <Watch2></Watch2>
  </div>
</template>
<script>
// @ is an alias to /src
import LifeCycle from "@/components/LifeCycle.vue";
import Reactive from "@/components/Reactive.vue";
import Computed from "@/components/Computed.vue";
import Watch from "@/components/Watch.vue";
import Watch2 from "@/components/Watch2.vue";
export default {
  name: "HomeView",
  components: {
    LifeCycle, Reactive, Computed, Watch, Watch2
  },
};
</script>
