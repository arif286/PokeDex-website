<template>
  <div class="row mb-5 mt-5 justify-content-center">
    <div class="d-flex col-md-5 col-lg-4">
      <input
        v-model="search"
        class="form-control searchBar"
        type="text"
        placeholder="Search pokemon..."
      />
      <input @click="update" class="search-btn" type="submit" value="Search" />
    </div>
  </div>
  <div v-if="load" class="container">
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
  <div v-if="!load" :key="searchData.id" class="container">
    <div class="row justify-content-center">
      <div class="col-md-5 col-lg-4">
        <div class="card shadow">
          <img class="w-100" :src="image" alt="" />
          <h3 class="text-center">{{ searchData.name }}</h3>
          <button @click="handleView(searchData.name)" class="btn btn-danger">
            View details
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="failed" class="alert alert-danger">
    Pokemon Not Found
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      pokemons: null,
      search: "",
      searchData: {},
      image: "",
      load: true,
      failed: false,
    };
  },
  methods: {
    update() {
      if (this.search) {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${this.search}`)
          .then((res) => {
            this.searchData = res.data;
            this.image = res.data.sprites.other.dream_world.front_default;
            this.load = false;
          })
          .catch((err) => {
            this.failed = true;
            console.log(this.failed);
          });
      }
    },
    handleView(name) {
      console.log(name);
      this.$router.push({ name: "pokemon", params: { id: name } });
    },
  },
  created() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=30`)
      .then((res) => {
        this.pokemons = res.data.results;
      })
      .catch((err) => console.log(err.massage));
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
.searchBar {
  position: relative;
  width: 88%;
  padding: 8px;
}
.search-btn {
  outline: none;
  background-color: #f91944;
  display: inline-block;
  width: 100px;
  padding: 7px;
  color: #fff;
  border: none;
  font-weight: 300;
  margin-right: 15px;
}
</style>
