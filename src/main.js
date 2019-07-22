import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select,
  LocaleProvider,
  Dropdown,
  DatePicker
} from "ant-design-vue";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth.js";
// import "ant-design-vue/dist/antd.less";
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(LocaleProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.component("Authorized", Authorized);
Vue.use(Auth);
Vue.config.productionTip = false;
// 自定义图标
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1294349_l7bbe19mmrl.js" // 在 iconfont.cn 上生成
});

Vue.component("IconFont", IconFont);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
