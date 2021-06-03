<template>
  <div class="home">
   <input @keyup="update" type="text" :placeholder="serach">
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
    update(e){
    {
      console.log('name', e.target.value)
      fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.value}?limit=150`)
      .then(res=> res.json())
      .then(data=> console.log(data))
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