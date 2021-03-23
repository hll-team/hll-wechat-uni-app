import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
import cuCustom from 'colorui/components/cu-custom.vue'

Vue.config.productionTip = false
const app = new Vue({
    ...App
})
app.$mount()
