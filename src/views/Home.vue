<template>
  <div id="home">
    <v-img
      loading="lazy"
      style="margin-top: -100px"
      height="100vh"
      src="../assets/banners/BANNER PAGINA WEB.jpg"
      gradient="to top right, rgb(24,27,35,.80) 50%, rgba(255,0,0,.80)"
    >
      <!-- texto -->
      <v-row id="title-img" style="margin-top: 150px">
        <v-col class="text-center white--text" cols="12">
          <div class="text-center container" height="200px">
            <h1 style="font-weight: 900">TODO EN GOMAS Y SUSPENSIÓN</h1>
            <p
              class="container hidden-sm-and-down"
              style="font-size: 13px; font-weight: 200"
            >
              En DISTRIBUIDORA FAVORER 2018 te ofrecemos la más amplia gama de
              guardapolvos, gomas y repuestos para la suspensión y tren
              delantero de las casas automotrices más populares a nivel mundial
              y con los más altos estándares de calidad.
            </p>
          </div>
        </v-col>
        <!-- texto -->

        <!-- botones -->
        <div class="mx-auto">
          <v-btn
            download="Catalogo.pdf"
            href="./download/CATALOGO DIGITAL OCTUBRE 2021.pdf"
            outlined
            rounded
            dark
            class="mx-1"
            style="background-color: rgba(255,0,0,.60); font-weight: 700;"
          >
            CATÁLOGO
          </v-btn>
        </div>
        <!-- botones -->
      </v-row>

      <!-- slider marcas de automoviles -->
      <div class="mx-auto my-7 container">
        <v-slide-group multiple show-arrows dark v-if="marcas">
          <v-slide-item v-for="(marca, index) in marcas" :key="index">
            <v-sheet
              tile
              height="80px"
              width="80px"
              color="rgba(35,47,62,0)"
              class="text-center d-flex justify-center align-center mb-2 mx-auto"
            >
              <v-img
                loading="lazy"
                width="70px"
                class="white--text align-end"
                :src="`${marca.logo}`"
                aspect-ratio="1"
                contain
              >
              </v-img>
            </v-sheet>
          </v-slide-item>
        </v-slide-group>
      </div>
      <!-- slider marcas de automoviles -->
    </v-img>

    <div class="container mt-10">
      <v-list-item>
        <v-list-item-avatar size="60">
          <v-img
            loading="lazy"
            contain
            src="../assets/icons/gear-blue.png"
          ></v-img>
        </v-list-item-avatar>

        <v-divider vertical></v-divider>

        <v-list-item-content class="ml-5">
          <h2 style="font-weight: 900; color: rgba(255,0,0,.80);">
            Nuestros productos
          </h2>
          <br />
          <p>Conoce todas nuestras categorias de productos</p>
        </v-list-item-content>
      </v-list-item>
    </div>

    <div class="container mt-10" v-if="categorias">
      <v-row>
        <v-col
          v-for="(item, index) in categorias"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="mx-auto"
        >
          <v-card class="mx-auto text-center" max-width="300" flat="">
            <v-img
              loading="lazy"
              contain
              class="white--text align-end d-flex justify-center align-center"
              height="120px"
              src="../assets/icons/hexagono-red.png"
            >
              <v-img
                loading="lazy"
                contain
                height="50px"
                :src="`${item.icon}`"
              ></v-img>
            </v-img>

            <v-card-text class="text--primary">
              <h3 class="text-center">{{ item.name }}</h3>

              <v-card-subtitle class="pb-0">{{
                item.description
              }}</v-card-subtitle>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="container mt-10">
      <v-list-item>
        <v-list-item-avatar size="60">
          <v-img
            loading="lazy"
            contain
            src="../assets/icons/star-blue.png"
          ></v-img>
        </v-list-item-avatar>

        <v-divider vertical></v-divider>

        <v-list-item-content class="ml-5">
          <h2 style="font-weight: 900; color: rgba(255,0,0,.80);">
            Productos destacados
          </h2>
          <br />
          <p>Descubres nuestros productos destacados por su calidad</p>
        </v-list-item-content>
      </v-list-item>
    </div>

    <div class="mt-10">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="mx-auto"
          v-for="(item, index) in destacados"
          :key="index"
        >
          <v-card flat tile elevation="5">
            <v-img
              loading="lazy"
              :src="require(`../assets/banners/${item}`)"
              aspect-ratio="1"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <v-divider class="my-10"></v-divider>
  </div>
</template>

<script>
import axios from "axios";

axios.get('cost_centers');

export default {
  name: "Home",
  data() {
    return {
      marcas: [],
      categorias: [],
      destacados: [
        "001.png",
        "002.png",
        "003.png",
        "004.jpg",
        "005.png",
        "006.png",
        "012.png",
        "013.png",
      ],
      baseUrl: "https://api.distfavorer18.com/api",
    };
  },
  mounted() {
    this.getMarcas();
    this.getCategorias();
  },
  methods: {
    getMarcas() {
      let endpoint = `${this.baseUrl}/brands`;

      axios
        .get(endpoint)
        .then((res) => {
          this.marcas = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCategorias() {
      let endpoint = `${this.baseUrl}/categories`;

      axios
        .get(endpoint)
        .then((res) => {
          this.categorias = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
* {
  font-family: "Orbitron", sans-serif;
}
</style>
