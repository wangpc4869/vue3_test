import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象
const app = createApp(App)
// 挂载
app.mount('#app')

console.log(createApp(App),'工厂函数')

// vue2
// const vm = new Vue({
//     render:h => h(App)
// })
// vm.$mount('#app')