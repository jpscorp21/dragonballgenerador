<template>
  <v-data-table :headers="headers" :items="personajes" class="elevation-1" />
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      headers: [
        {
          text: "Nombre",
          value: "nombre",
          sortable: false
        },
        {
          text: "Descripcion",
          value: "descripcion",
          sortable: false
        },
        {
          text: "Género",
          value: "genero",
          sortable: false
        },
        {
          text: "Raza",
          value: "raza",
          sortable: false
        },
        {
          text: "Poder",
          value: "poder",
          sortable: false
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("getAllPersonajes");
  },
  computed: {
    ...mapState(["personajes"])
  }
};
</script>