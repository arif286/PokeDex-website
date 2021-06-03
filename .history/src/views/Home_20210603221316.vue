<template>
  <div class="home">
    <input @keyup="update" type="text" placeholder="search pokemon..." />
  </div>
  <div class="container">
    <div class="row">
      <div
        class="col-md-4 pb-4"
        v-for="(pokemon, index) in pokemons"
        :key="index"
      >
        <div class="card">
          <img
            class="w-100"
            :src="
              `http://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`
            "
            alt=""
          />
          <h3 class="text-center">{{ pokemon.name }}</h3>
          <button @click="handleView(pokemon.name)" class="btn btn-danger">
            View details
          </button>
        </div>
      </div>
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
      pokemons: null,
    };
  },
  methods: {
    update(e) {
      console.log("name", e.target.value);
      fetch(`https://pokeapi.co/api/v2/pokemon/${e.target.value}?limit=150`)
        .then((res) => res.json())
        .then((data) => console.log(data));
    },
    handleView(name) {
      console.log(name);
      this.$router.push({ name: "pokemon", params: { id: name } });
    },
  },
  created() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=30`).then((res) => {
      this.pokemons = res.data.results;
      console.log(this.pokemons);
    });
  },
};
</script>
<style scoped>
.home input {
  margin-top: 50px;
  padding: 10px;
  margin-bottom: 50px;
}
.home {
  text-align: center;
}
</style>
