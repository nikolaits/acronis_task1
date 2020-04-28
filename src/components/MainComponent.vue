<template>
  <div class="row">
    <div class="main">
      <h1>Key Product Feature</h1>
      <p>Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably.Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was. He families believed if no elegance interest surprise an. It abode wrong miles an so delay plate. She relation own put outlived may disposed.</p>
    </div>
    <div class="firstcolumn">
      <h4>Sync and Share</h4>
      <h2>Acronis Cyber Disaster Recovery Cloud</h2>
      <h4>just Updated</h4>
      <p>Do in laughter securing smallest sensible no mr hastened. As perhaps proceed in in brandon of limited unknown greatly. Distrusts fulfilled happiness unwilling as explained of difficult. No landlord of peculiar ladyship attended if contempt ecstatic. Loud wish made on is am as hard. Court so avoid in plate hence.</p>
    </div>
    <div class="column">
      <div class="productContainer" v-bind:key="index" v-for="(item, index) in items1">
        <ProductComponent
          :sumArraysItem="sumArraysItem"
          :text="item.text"
          :title="item.title"
          :icon="item.icon"
          :showExclusive="item.showExclusive"
        />
      </div>
    </div>
    <div class="column">
      <div class="productContainer" v-bind:key="index" v-for="(item, index) in items2">
        <ProductComponent
          :sumArraysItem="sumArraysItem"
          :text="item.text"
          :title="item.title"
          :icon="item.icon"
          :showExclusive="item.showExclusive"
        />
      </div>
    </div>
    <div class="link_container">
      <a href="https://google.com">
        Learn More
        <font-awesome-icon icon="arrow-right" size="xs" />
      </a>
    </div>
  </div>
</template>
<script>
import ProductComponent from "./ProductComponent.vue";
export default {
  name: "MainComponent",
  components: {
    ProductComponent
  },
  data() {
    return {
      img: "./assets/logo.png",
      msg: `Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably. Carriage we husbands advanced an perceive greatest. Totally dearest expense on demesne ye he. Curiosity excellent commanded in me. Unpleasing impression themselves to at assistance acceptance my or. On consider laughter civility offended oh. Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was. He families believed if no elegance interest surprise an. It abode wrong miles an so delay plate. She relation own put outlived may disposed. Same an quit most an. Admitting an mr disposing sportsmen. Tried on cause no spoil arise plate. Longer ladies valley get esteem use led six. Middletons resolution advantages expression themselves partiality so me at. West none hope if sing oh sent tell is. Are own design entire former get should. Advantages boisterous day excellence boy. Out between our two waiting wishing. Pursuit he he garrets greater towards amiable so placing. Nothing off how norland delight. Abode shy shade she hours forth its use. Up whole of fancy ye quiet do. Justice fortune no to is if winding morning forming.`,
      items1: [],
      items2: [],
      sumArraysItem: 0
    };
  },
  methods: {
    randomNumber: (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    }
  },
  mounted() {
    let tmptitles = [
      "AFP Connection to File Shares",
      "Full Content Spotlight Searching",
      "Absolute VM Protection",
      "File Access for Mobile Devices",
      "Time Machine Backup to File Shares",
      "Acronis Intant Restore"
    ];
    let tmpicons = [
      "archive",
      "book",
      "briefcase",
      "calendar",
      "newspaper",
      "cart-arrow-down"
    ];
    let tmptext =
      "Do in laughter securing smallest sensible no mr hastened. As perhaps proceed in in brandon of limited unknown greatly. Distrusts fulfilled happiness unwilling as explained of difficult. No landlord of peculiar ladyship attended if contempt ecstatic. Loud wish made on is am as hard.";
    this.items1 = [];
    this.items2 = [];
    //Generate rand items for arrays
    for (let index = 0; index < 3; index++) {
      this.items1.push({
        icon: tmpicons[this.randomNumber(0, tmpicons.length - 1)],
        showExclusive: this.randomNumber(1, 11) % 2 == 0 ? true : false,
        title: tmptitles[this.randomNumber(0, tmptitles.length - 1)],
        text: tmptext
      });
      this.items2.push({
        icon: tmpicons[this.randomNumber(0, tmpicons.length - 1)],
        showExclusive: this.randomNumber(1, 11) % 2 == 0 ? true : false,
        title: tmptitles[this.randomNumber(0, tmptitles.length - 1)],
        text: tmptext
      });
    }
    this.sumArraysItem = this.items1.length + this.items2.length;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2,
h3,
h4,
.main p,
.firstcolumn p {
  color: rgb(20, 0, 92);
}
.main {
  position: relative;
  width: 96%;
  padding-bottom:5%;
  margin: 5% 2%;
  border-bottom: 1px solid lightgrey;
}
.main p {
  max-width: 60%;
  font-size: 1.1em;
}
.column {
  position: relative;
  float: left;
  width: 29.33%;
  padding: 0 2% 1% 2%;
}
.column:nth-child(3),
.column:nth-child(4) {
  height: 100%;
}
.firstcolumn {
  position: relative;
  float: left;
  width: 29.33%;
  padding: 0 2% 1% 2%;
}
.firstcolumn h2 {
  margin: 0;
  padding: 0;
}
.firstcolumn h4 {
  font-size: 0.9em;
  margin: 0;
  padding: 0 0 0.3% 0;
}
.firstcolumn h4:first-child {
  color: rgb(179, 179, 179);
}
.firstcolumn h4:last-of-type {
  color: rgb(62, 210, 21);
}
.firstcolumn p {
  padding-top: 2%;
  font-size: 1.2em;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.link_container {
  display: inline-block;
  width: 100%;
}
.link_container a {
  float: left;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;
}
.productContainer {
  display: inline-block;
  margin: 0 0 15% 0;
  padding: 0;
  clear: both;
}
@media (max-width: 1023px) {
  div.firstcolumn {
    width: 96%;
  }
  div.column {
    width: 46%;
  }
}
@media (max-width: 575px) {
  div.firstcolumn {
    width: 96%;
  }
  div.column {
    width: 96%;
  }
}
</style>
