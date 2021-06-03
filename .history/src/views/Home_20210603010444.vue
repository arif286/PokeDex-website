<template>
  <div class="home">
   <input type="text" :placeholder="serach">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
  data(){
    return{
      serach: 'Pokimon',
    }
  },
  methods:{
    },
  created(){
    }
  }
</script>
<style scoped>
.home input{
  margin-top: 50px;
  padding: 10px;
}
</style>