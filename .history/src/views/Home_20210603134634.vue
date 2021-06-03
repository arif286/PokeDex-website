<template>
  <div class="home">
    <input @keyup="update" type="text" :placeholder="serach" />
  </div>
  <div class="container">
    <div class="row">
      <div
        class="col-md-4 pb-4"
        v-for="(pokimon, index) in pokimons"
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
          <h3 class="text-center">{{ pokimon.name }}</h3>
          <button class="btn btn-danger">View details</button>
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
      serach: "Pokimon",
      pokimons: null,
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
      this.pokimons = res.data.results;
      console.log(this.pokimons);
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
