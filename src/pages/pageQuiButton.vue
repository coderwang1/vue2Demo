<template>
  <div id="pageQuiButton">
    <!--使用-->
    <qui-btn msg="确定" class="small"></qui-btn>
    <qui-btn v-on:btnClickEvent="doSth"  class="small" msg="我可以点击" ></qui-btn>
    <qui-btn v-on:btnClickEvent="doSth1" class="small" msg="确定" ></qui-btn>
    <qui-btn v-on:btnClickEvent="doSth2" class="small" msg="取消" ></qui-btn>
    
    <qui-btn msg="下载" class="with-icon" v-on:btnClickEvent="doSth">
      <img slot="icon" class="ico" src="../assets/logo.png" />
    </qui-btn>
  
  </div>
</template>
<script>
  import quiBtn from '../components/quiButton.vue'
  export default {
    name: 'pageQuiButton',
    components: {
      'qui-btn': quiBtn
    },
    methods: {
      doSth: function () {
        alert('触发自定义事件doSth')
      },
      doSth1: function () {
        alert('触发自定义事件doSth1')
      },
      doSth2: function () {
        alert('触发自定义事件doSth2')
      }
    }
  }
</script>