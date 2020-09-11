import Vue from "nativescript-vue";
import VueDevtools from 'nativescript-vue-devtools'

import store from '@/store/main-store'

if(TNS_ENV !== 'production') {
	Vue.use(VueDevtools)
}
Vue.config.silent = TNS_ENV === 'production';

import Home from '@/screens/Home.vue'

new Vue({
    template: `
        <Frame>
            <Home />
        </Frame>`,
    components: {
        Home
	},
	store: store
}).$start();
