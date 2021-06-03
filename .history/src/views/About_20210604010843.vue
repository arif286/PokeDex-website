<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div class="card shadow">
          <img :src="image" alt="" />
          <h1 class="text-center">{{ result.name }}</h1>
          <hr class="separator" />
          <p class="text-center">
            <span class="hp">HP {{ result.stats[0].base_stat }}</span>
            <span class="xp">XP {{ result.base_experience }}</span>
          </p>
          <div class="row card-body">
            <div class="col text-center">
              <p>Type</p>
              <p>
                {{ result.types[0].type.name }}/{{ result.types[1].type.name }}
              </p>
            </div>
            <div class="col text-center">
              <p>weight</p>
              <p>{{ result.weight }}g</p>
            </div>
            <div class="col text-center">
              <p>height</p>
              <p>{{ result.height }}mm</p>
            </div>
          </div>
          <div class="row card-body stardust_update">
            <div class="col text-center">
              <p>
                {{ Math.floor(Math.random() * 100000 + 1) }}
              </p>
              <p>stardust</p>
            </div>
            <div class="col">
              <p>{{ Math.floor(Math.random() * 100) }}</p>
              <p>{{ result.name }} Candy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "About",
  data() {
    return {
      id: this.$route.params.id,
      result: {},
      image: null,
    };
  },
  methods: {},
  created() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then((res) => {
      this.result = res.data;
      console.log(this.result);
      this.image = res.data.sprites.other.dream_world.front_default;
    });
  },
};
</script>
<style scoped>
.separator {
  color: #6eecb7 !important;
  border-radius: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-sizing: content-box;
  height: 8px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
}
.xp {
  padding: 0px 15px;
}
.hp {
  border-right: 1px solid gray;
  padding: 0px 15px;
}
.stardust_update {
  border-top: 1px solid gray;
}
</style>
