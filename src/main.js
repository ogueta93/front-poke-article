import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import App from '@/App';
import Router from '@/router';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

const vue = new Vue({
    el: "#app",
    router: Router,
    render: h => h(App),

    data() {
        return {
        }
    },
    mounted: function() {
    }
});

window.app = vue;