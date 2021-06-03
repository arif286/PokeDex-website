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
      text: e.target.value;
      console.log('name', text)
      fetch(`https://pokeapi.co/api/v2/pokemon/${text}`)
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