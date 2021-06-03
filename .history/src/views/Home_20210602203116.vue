<template>
  <div class="home">
    <h1>Hello {{title}}</h1>
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
      title: 'world'
    }
  },
  }
</script>
