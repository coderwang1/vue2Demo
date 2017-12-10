<template>
    <div class="qui-nav nav-type-1">
        <a v-for="(item, index) in items" :class="[commonClass,item.active ? activeClass : '']" v-on:click="navClickEvent(items,index)"> <!--for 循环 -->
            <span class="nav-txt"> {{item.text}}</span>
        </a>
    </div>    
</template>

<script>
export default {
  data: function () {
    return {
      commonClass: 'nav-item',
      activeClass: 'active',
      items: [
        {
          text: '首页',
          active: true
        },
        {
          text: '列表',
          active: false
        },
        {
          text: '关于',
          active: false
        },
        {
          text: '招聘',
          active: false
        }
      ]
    }
  },
  methods: {
    navClickEvent: function (items, index) {
      //   default active is false
      items.forEach(element => {
        element.active = false
      })
      // click nav active is true
      items[index].active = true
      // open api
      this.$emit('navClickEvent', items, index)
    }
  }
}
</script>
<style scoped>
@import "./css/reset.import.css";
@import "./css/qui-nav.import.css";
</style>
