<script setup>
import {ref} from 'vue';

const countries = ref([])

const capital = ref("");

const distance = ref(2500);

</script>

<template>
  <main class="container">
    <section>
      <h2>Settings:</h2>
      <div class="settings">
        <div class="item double">
          <label for="capital">Capital:</label>
          <select name="capital" id="capital" v-model="capital">
            <option value="">Please select a capital</option>
          </select>
        </div>

        <div class="item">
            <label for="distance">Distance:</label>
            <input type="text" id="distance" name="distance" size="5" min="500" max="5000" v-model="distance">
        </div>

        <div class="item double">
          <label for="slider">Select distance:</label>
          <input type="range" class="slider" id="slider" min="500" max="5000" v-model="distance">
        </div>

      </div>
    </section>

    <section>
      <h2>Results:</h2>
      <div id="results">
      <!-- RESULTS GO HERE -->
      </div>
    </section>
  </main>


</template>

<style scoped>

main.container{
  width: 1024px;
}

section {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
}

.settings {
  display: flex;
}

.item {
  width: 10%;
}

.item.double {
  flex-grow: 2;
}

label {
  display: block;
  padding: 10px 0;
}

input {
  font-size: medium;
}

select {
  width: 85%;
  font-size: large;
  display: block;
}

.slider {
  width: 100%;
}

</style>
