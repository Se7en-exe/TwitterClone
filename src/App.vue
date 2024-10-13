<script>
import SideBarLeft from "./components/SideBarLeft/SideBarLeft.vue";
import SideBarRight from "./components/SideBarRight/SideBarRight.vue";

export default {
  name: "App",
  components: {
    SideBarLeft,
    SideBarRight,
  },
  computed: {
    isLoggedIn() {
      // 从 Vuex 获取登录状态
      return this.$store.state.isLoggedIn;
    }
  },
  methods: {
    logout() {
      // 用户登出逻辑
      this.$store.commit('logout');
      this.$router.push('/login');
    }
  }
};
</script>

<template>
  <div id="app">
    <SideBarLeft />
    <router-view id="router-view" />
    <SideBarRight />
  </div>
</template>

<style lang="scss">
@import "./assets/css/reset.css";
@import "./assets/scss/responsive.scss";
@import "./assets/scss/global-variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  margin: auto;
}

body{
  overflow: hidden;
}
#router-view{
  flex-grow: 1;
  overflow-y: auto;
  height: calc(120vh - 64px);
}
#router-view::-webkit-scrollbar {
  display: none;
  /* 隐藏滚动条 */
}
</style>
