<template>
  <div class="home">
    <input @keyup="update" type="text" :placeholder="serach" />
  </div>
  <div>
    <div v-for="(pokimon, index) in pokimons" :key="index">
      {{ pokimon.name }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      serach: "Pokimon",
      pokimons: [],
    };
  },
  methods: {
    update(e) {
      {
        console.log("name", e.target.value);
        fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.value}?limit=150`)
          .then((res) => res.json())
          .then((data) => console.log(data));
      }
    },
  },
  created() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=30`).then((res) => {
      this.pokimon = res.data.results;
      console.log(this.pokimons);
    });
  },
};
</script>
<style scoped>
.home input {
  margin-top: 50px;
  padding: 10px;
}
</style>
