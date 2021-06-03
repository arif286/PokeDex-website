<template>
  <div class="home">
   <input @keyup="update" v-model="name" type="text" :placeholder="serach">
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
      name: '',
    }
  },
  methods:{
    update(e){
    {
      console.log('name', e.target.value)
    }
    }
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