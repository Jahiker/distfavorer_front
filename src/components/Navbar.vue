<template>
  <div>
    <v-app-bar id="nav" width="100vw" height="100px" dark app flat>
      <v-btn @click="drawer = !drawer" large icon class="hidden-md-and-up">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <div class="ml-3">
        <img src="../assets/logo.png" width="270vw" alt="" />
      </div>

      <v-spacer></v-spacer>

      <v-btn text class="hidden-sm-and-down" link to="/">
        INICIO
      </v-btn>

      <v-btn text class="hidden-sm-and-down" link to="/about">
        QUIÉNES SOMOS
      </v-btn>

      <v-menu offset-y open-on-hover transition="slide-y-transition">
        <template v-slot:activator="{ on }">
          <v-btn
            text
            class="hidden-sm-and-down"
            slot="activator"
            v-on="on"
            link
            to="/productos/1"
          >
            PRODUCTOS
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            link
            v-for="(item, index) in categorias"
            :key="index"
            :to="`/productos/${item.id}`"
          >
            <v-list-item-title style="font-weight: 700">{{
              item.name
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text class="hidden-sm-and-down" link to="/contacto">
        CONTACTO
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed absolute temporary dense>
      <!-- <v-card max-width="50vw"> -->

      <v-list-item>
        <v-list-item-avatar>
          <v-img contain src="../assets/FA.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Favorer 2018</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense rounded>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Quiénes somos</v-list-item-title>
        </v-list-item>

        <v-list-group prepend-icon="mdi-shopping" value="true" color="red">
          <template v-slot:activator>
            <v-list-item-title>Productos</v-list-item-title>
          </template>

          <v-list-item
            v-for="(item, index) in categorias"
            :key="index"
            link
            :to="`/productos/${item.id}`"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item link to="/contacto">
          <v-list-item-icon>
            <v-icon>mdi-email</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Contacto</v-list-item-title>
        </v-list-item>

        <v-list-item link href="http://www.api.distfavorer18.com">
          <v-list-item-icon>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-icon>

          <v-list-item-title>
            Administracion
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <!-- </v-card> -->
    </v-navigation-drawer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      scroll: false,
      logo: "../assets/logo.jpg",
      menu: false,
      categorias: [],
      baseUrl: "https://api.distfavorer18.com/api",
    };
  },
  created() {
    this.onScroll();
    this.getCategorias();
  },
  methods: {
    onScroll() {
      window.addEventListener("scroll", () => {
        document
          .querySelector(".v-toolbar__content")
          .classList.toggle("scrollColor", window.scrollY > 50);
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
  font-family: "Spartan", sans-serif;
}
#nav {
  background-color: rgb(35, 47, 62, 0);
  transition: 600ms;
}
div.scrollColor {
  background-color: rgb(35, 47, 62);
  transition: 600ms;
}
</style>
