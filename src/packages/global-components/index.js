import Vue from 'vue';
import MaskedInput from 'vue-text-mask';
import multiSelect from 'vue-multiselect';
import appHeader from '../../components/AppHeader.vue';
import sideBar from '../../components/Sidebar.vue';


Vue.component('masked-input', MaskedInput);
Vue.component('app-header', appHeader);
Vue.component('side-bar', sideBar);
Vue.component('multi-select', multiSelect);
