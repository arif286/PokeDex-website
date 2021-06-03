<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <img src="" alt="" />
          <h5>pice</h5>
          <hr class="separator" />
          <p><span>HP {{}}</span> <span>XP {{}}</span></p>
          <div class="row">
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
    };
  },
  methods: {},
  created() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then((res) => {
      this.result = res.data;
      console.log(this.result);
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
