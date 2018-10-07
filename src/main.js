import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import moment from 'moment';
import axios from 'axios';
import Auth from './packages/auth/auth.js';
import CheckRoles from './packages/check-roles/index.js';
import './packages/filters-template/index';
import './packages/global-components/index.js';
import './packages/sort/index.js';

Vue.use(Auth);
Vue.use(CheckRoles);

// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');
moment.locale('ru');

const app = new Vue({
    el: '#app',
    components: {App},
    template: '<app></app>',
    baseUrl: 'http://localhost:82/Qlever%20Solutions/public/api',
    router,
    store
});
Vue.config.productionTip = false;

