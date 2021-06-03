<template>
  <div class="home">
    <input @keyup="update" type="text" :placeholder="serach" />
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
      pokimon: [],
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
    try {
      const res = axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=30`);
      console.log(res.data);
      this.pokimon = res.data.result;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
.home input {
  margin-top: 50px;
  padding: 10px;
}
</style>
