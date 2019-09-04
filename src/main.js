import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/index";
import store from "@/store/index";
import ElementUi from "element-ui";
import "@/mock/index";
import "@/styles/element-variables.scss";
import "@/styles/master.scss";

Vue.config.productionTip = false;
Vue.use(ElementUi);

/** 注册全局通用组件 */
Vue.component("ibue-card", () => import("@/components/IbueCard"));
Vue.component("ibue-crud", () => import("@/components/BmsCrud"));
Vue.component("ibue-table", () => import("@/components/IbueTable"));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
