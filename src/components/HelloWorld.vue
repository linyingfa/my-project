<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <button @click="go">路由跳转</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '530'
    }
  },
  methods: {// 在这里定义方法
    go () {
      this.$router.push({
        name: 'cus_router'
      })
      // alert('你好')
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  a, h1 {
    color: #42b983;
  }
</style>
