<template>
  <div>
    <div v-if="sumArraysItem<8" class="iconborder clearb" style="font-size: 1.2rem;">
      <font-awesome-icon :icon="icon" size="3x" />
    </div>
    <h3 v-if="showExclusive" class="excl clearb">EXCLUSIVE</h3>
    <h3 v-if="!showExclusive" class="no-excl clearb"></h3>
    <h4 class="clearb">{{title}}</h4>
    <p class="clearb">{{text}}</p>
  </div>
</template>
<script>
export default {
  name: "ProductComponent",
  props: {
    icon: String,
    showExclusive: Boolean,
    title: String,
    text: String,
    sumArraysItem: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconborder {
  display: inline-block;
  padding: 1%;
  border: 1px solid gray;
  border-style: dashed;
}
h1,
h2,
h4 {
  color: rgb(20, 0, 92);
}
h4 {
  width: auto;
  margin: 3% 0;
  font-size: 1.2em;
}
.excl {
  display: inline-block;
  background-color: rgb(62, 210, 21);
  color: white;
  border-radius: 3px;
  font-size: 0.7em;
  padding: 0.3% 2%;
  margin: 0;
}
.no-excl {
  margin: 0;
  padding: 2.1%;
}
p {
  padding: 0;
  margin: 0;
  font-size: 1em;
}
.clearb {
  clear: both;
  float: left;
}
</style>
