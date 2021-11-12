<template>
  <div>
    <h1>测试demo</h1>
    <h1>姓名：{{username}}</h1>
    <div>年龄：{{obj.age}}</div>
    <div>地址：{{obj.address}}</div>
    <button @click.stop="editor">修改数据</button>
    <slot name="text"></slot>
  </div>

</template>

<script>
import {reactive, ref} from "vue";
export default {
  name: "Demo",
  props:{
    name:{
      type: String,
      default:''
    }
  },
  emits:['hello'],//hello防止浏览器出现事件警告
  // emits:{
  //   // 没有验证
  //   click: null,
  //   hello:'hello'
  // },
  beforeCreate() {
    console.log('beforeCreate执行了----')
  },
  setup(props,context) {
    console.log('setup执行了---- this为undefined',this)
    console.log('组件传值',props)
    console.log('上下文对象',context)

    let username = ref('王鹏程')

    let obj = reactive({
      age: 26,
      address: '南京'
    })

    console.log(obj, 'reactive对象')

    function editor() {
      username.value = props.name
      obj.age = 27
      obj.address = '北京'
      context.emit('hello','我是新一')
    }

    return {
      username,
      obj,
      editor
    }
  }
}
</script>

<style scoped>

</style>