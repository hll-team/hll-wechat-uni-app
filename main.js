import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
import cuCustom from 'components/colorui/components/cu-custom.vue'
import hllTitle from 'components/hll-title.vue'
import hllHeader from 'components/hll-header.vue'

Vue.component('hll-title',hllTitle)
Vue.component('hll-header',hllHeader)
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false
const app = new Vue({
    ...App
})
app.$mount()
