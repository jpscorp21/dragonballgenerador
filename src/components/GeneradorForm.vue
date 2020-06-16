<template>
  <form>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="form.nombre" label="Nombre" placeholder="Nombre del guerrero" />
      </v-col>
      <v-col cols="12">
        <v-radio-group label="Género" v-model="form.genero">
          <v-radio label="Masculino" value="M" />
          <v-radio label="Femenido" value="F" />
        </v-radio-group>
      </v-col>
      <v-col cols="12">
        <v-textarea
          v-model="form.descripcion"
          label="Descripción"
          placeholder="Descripción del guerrero"
        />
      </v-col>
      <v-col cols="12">
        <v-select
          label="Raza"
          v-model="form.raza"
          :items="['Maligna', 'Namekiano', 'Yardrat', 'Terricola', 'Saiyajin']"
        ></v-select>
      </v-col>
      <v-col cols="12">
        <v-slider v-model="form.poder" label="Nivel de Poder" min="10" max="10000" thumb-label />
      </v-col>
      <v-col class="text-right">
        <v-btn color="orange" @click="guardar" dark>Guardar</v-btn>
      </v-col>
    </v-row>
  </form>
</template>
<script>
export default {
  data() {
    return {
      form: this.initialForm()
    };
  },
  methods: {
    initialForm() {
      return {
        nombre: "",
        descripcion: "",
        genero: "F",
        raza: "",
        poder: 0
      };
    },
    guardar() {
      console.log(this.form);
      this.$store
        .dispatch("addPersonaje", { ...this.form })
        .then(() => {
          this.form = this.initialForm();
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>