<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="row justify-content-center">
      <div class="col-md-5 col-lg-4">
        <div class="card shadow">
          <img :src="image" alt="" />
          <h1 class="text-center">{{ result.name }}</h1>
          <hr class="separator" />
          <p class="text-center">
            <span class="hp"
              >HP
              {{ Math.floor(Math.floor() * result.stats[0].base_stat) }}</span
            >
            <span class="xp">XP {{}}</span>
          </p>
          <div class="row card-body">
            <div class="col">
              <p></p>
              <p>Electric{{}}</p>
            </div>
            <div class="col">
              <p>weight</p>
              <p>{{ result.weight }}g</p>
            </div>
            <div class="col">
              <span>height</span>
              <p>{{ result.height }}mm</p>
            </div>
          </div>
          <div class="row card-body">
            <div class="col">
              <p>stardust</p>
              <p>5000{{}}</p>
            </div>
            <div class="col">
              <p>pikacu</p>
              <p>1</p>
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
</style>
