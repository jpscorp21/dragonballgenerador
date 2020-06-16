<template>
  <v-container class="m-auto">
    <h1>Crear un Personaje</h1>
    <v-row class="m-auto">
      <v-col cols="12" md="5">
        <GeneradorForm />
      </v-col>
      <v-col cols="12" md="7">
        <GeneradorTabla />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import GeneradorForm from "./GeneradorForm";
import GeneradorTabla from "./GeneradorTabla";

export default {
  components: {
    GeneradorForm,
    GeneradorTabla
  }
};
</script>