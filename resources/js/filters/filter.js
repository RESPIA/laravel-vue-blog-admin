import moment from 'moment'
import Vue from 'vue'
Vue.filter('timeformat', (arg) => {
    return moment(arg).format("YYYY-MM-DD - HH:mm:ss");
})


Vue.filter('sortlength', function (text, length, suffix) {
    return text.substring(0, length) + suffix;
})

/* filter */
Vue.filter('upText', function (value) {
    //return text.toUpperCase();
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})
/* end filter */

/* register moment js */
Vue.filter('myDate', (arg) => {
    return moment(arg).format("YYYY-MM-DD - HH:mm:ss");
})
/* end register moment js */