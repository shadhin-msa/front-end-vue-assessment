import wrap from '@vue/web-component-wrapper';
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

const CustomElement = wrap(Vue, App);

window.customElements.define('test-webcomponent', CustomElement);
