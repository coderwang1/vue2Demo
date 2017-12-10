<template>
  <div id="pageQuiNav">
      <qui-nav v-on:navClickEvent="doSth"></qui-nav>
  </div>
</template>

<script>
import quiNav from '../components/quiNav.vue'
export default {
  name: 'pageQuiNav',
  components: {
    'qui-nav': quiNav
  },
  methods: {
    doSth: function (items, index) {
      console.log(items[index].text + index)
    }
  }
}
</script>

<style scoped>

</style>

