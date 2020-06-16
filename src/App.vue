<template>
  <v-app>
    <Header />
    <v-content class="mb-5 pb-5">
      <Generador />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Generador from "./components/Generador";

export default {
  name: "App",

  components: {
    Header,
    Footer,
    Generador
  },

  data: () => ({
    //
  })
};
</script>
