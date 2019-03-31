
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/* Vue router*/
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource';

Vue.use(VueResource)


/* VueProgressBar */
import VueProgressBar from 'vue-progressbar'

const options = {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px',
    thickness: '2px',
    transition: {
        speed: '1s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}

Vue.use(VueProgressBar, options)

/* End VueProgressBar */

/* Sweet alert 2*/
import swal from 'sweetalert2'
window.swal = swal;

/* Toastr */

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
window.toast = toast

/* Vue-SimpleMDE */
import VueSimplemde from 'vue-simplemde'
Vue.use(VueSimplemde)
/* End Vue-SimpleMDE */

/* v-form */
import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
/* end v-form */

/*load data after created user */
// let Fire = new Vue();
// window.Fire = Fire;
window.Fire = new Vue();
/* end load data after created user */


/* pagination */
Vue.component('pagination', require('laravel-vue-pagination'));
/* end pagination */


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Backend  
Vue.component("adminMaster", require("./components/admin/AdminMaster.vue").default);
// step 2
import { routes } from './routes/index'

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode  : 'history'
  })

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/* Filter  */
import { filter } from './filters/filter'

/* Vuex */
import Vuex from 'vuex'
Vue.use(Vuex)



import storeData from "./store/index"

// store vuex
const store = new Vuex.Store(
    storeData
)


const app = new Vue({
    router,
    store
  }).$mount('#app')
  