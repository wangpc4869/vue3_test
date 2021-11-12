<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome Welcometo Your Vue.js App"/>-->
  <Demo name="新一" @hello="getHello" @click="getClick">
    <template v-slot:text>
      <span >这是一段文字</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'



export default {
  name: 'App',
  components: {
    Demo
  },
  setup(){
    function getHello(e){
      console.log(`时间监听--hello${e}`)
    }

    function getClick(){
      console.log('点击了组件')
    }
    return{
      getHello,
      getClick
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
