<template>
  <button class="qui-btn" v-on:click="btnClickEvent">
        <slot name="icon"></slot><!--重点在这里-->
        <span>{{msg}}</span>
    </button>
</template>

<script>
  export default {
    props: {
      msg: {
        default: 'default'
      }
    },
    methods: {
      btnClickEvent: function () {
        this.$emit('btnClickEvent')
      }
    }
  }
</script>
<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-btn.import.css';
</style>