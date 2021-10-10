<template>
  <navbar></navbar>
  <div class="container mb-5">
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
  <footer-sticky></footer-sticky>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import FooterSticky from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    FooterSticky
  },
};
</script>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>