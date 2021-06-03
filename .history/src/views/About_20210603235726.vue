<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="row justify-content-center">
      <div class="col-md-5 col-lg-4">
        <div class="card">
          <img :src="image" alt="" />
          <h1 class="text-center">{{ result.name }}</h1>
          <hr class="separator" />
          <p class="text-center">
            <span>HP {{}}</span>
            <span>XP {{}}</span>
          </p>
          <div class="row card-body">
            <div class="col">
              <span></span>
              <p>Electric{{}}</p>
            </div>
            <div class="col">
              <span>weight</span>
              <p>5kg{{}}</p>
            </div>
            <div class="col">
              <span>height</span>
              <p>0.85mm</p>
            </div>
          </div>
          <div class="row card-body">
            <div class="col">
              <span>stardust</span>
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
  border-color: #6eecb7 !important;
  border-width: 10px;
  border-radius: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
</style>
