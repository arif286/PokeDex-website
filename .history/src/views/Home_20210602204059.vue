<template>
  <div class="home">
    <h1>Hello {{title}}</h1>
    <h3 v-text="text"></h3>
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
      title: 'Bangladesh',
      text: 'This is a bad country',
      input: '<input type="text" placeholder="search"/>',
    }
  },
  }
</script>
