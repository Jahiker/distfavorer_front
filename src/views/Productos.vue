<template>
  <div>
    <div>
      <v-img
        height="55vh"
        style="margin-top: -100px"
        src="../assets/banners/010.png"
        gradient="to top right, rgb(24,27,35,.80) 50%, rgba(255,0,0,.80)"
      >
        <v-row align="center" justify="center" style="margin-top: 130px;">
          <v-col class="text-center white--text" cols="12">
            <div class="container">
              <h1>NUESTROS PRODUCTOS</h1>
              <p
                style="font-size: 13px; font-weight: 200"
                class="hidden-sm-and-down"
              >
                Conoce nuestras amplia gama de productos, fabricados con los más
                altos estandares de calidad.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-img>
    </div>

    <div class="container">
      <v-row>
        <v-col cols="1" md="3">
          <template>
            <v-navigation-drawer
              permanent
              color="grey lighten-3"
              class="hidden-sm-and-down"
            >
              <v-list rounded>
                <v-list-item class="px-2">
                  <v-list-item-avatar>
                    <v-img contain src="../assets/FA.png"></v-img>
                  </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-subtitle>Distribuidora</v-list-item-subtitle>
                    <v-list-item-title class="">Favorer 2018</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list dense rounded="">
                <v-list-item
                  link
                  v-for="(item, index) in categorias"
                  :key="index"
                  v-on:click="
                    getCategoriaActual(item.id);
                    productosCategoria.current_page = 1;
                    nuevo = false;
                  "
                >
                  <v-list-item-icon>
                    <v-icon>mdi-tag</v-icon>
                  </v-list-item-icon>

                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </template>
        </v-col>

        <v-col cols="12" md="9">
          <v-form @submit.prevent="getBusqueda(buscar)">
            <v-toolbar color="grey lighten-3">
              <v-text-field
                hide-details
                single-line
                prepend-inner-icon="mdi-magnify"
                color="error"
                placeholder="¿Qué estás buscando?"
                class="mx-2"
                v-model="buscar"
              ></v-text-field>

              <v-btn type="submit" dark color="error">
                Buscar
              </v-btn>
            </v-toolbar>
          </v-form>

          <div v-if="resultadoBusqueda != ''">
            <v-row>
              <v-col cols="12">
                <div class="container my-10">
                  <v-list-item>
                    <v-list-item-avatar size="60">
                      <v-img
                        contain
                        src="../assets/icons/search-blue.png"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-divider vertical></v-divider>

                    <v-list-item-content class="ml-5">
                      <h2 style="font-weight: 900; color: rgba(255,0,0,.80);">
                        {{ resultadoBusqueda }}
                      </h2>
                      <br />
                    </v-list-item-content>
                  </v-list-item>
                </div>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="4"
                v-for="(item, index) in busqueda.data"
                :key="index"
              >
                <v-card class="mx-auto" max-width="400">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="
                      `${item.image}`
                    "
                  >
                  </v-img>

                  <v-card-title>{{ item.name }}</v-card-title>
                  <v-card-subtitle class="pb-0 ">{{
                    item.code
                  }}</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <!-- <div>{{ item.marca }}</div> -->

                    <div>{{ item.description }}</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <!-- Ventana de dialogo -->
                    <v-dialog v-model="dialog[index]" max-width="800px">
                      <template v-slot:activator="{ on }">
                        <v-btn color="error" text v-on="on">
                          Ver imagen
                        </v-btn>
                      </template>

                      <v-card>
                        <v-img
                          class="white--text align-end"
                          :src="
                            `${item.image}`
                          "
                        >
                        </v-img>
                      </v-card>
                    </v-dialog>
                    <!-- Ventana de dialogo -->
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col cols="12" v-if="busqueda.total > busqueda.per_page">
                <div class="text-center mt-5">
                  <Pagination
                    :pagination="busqueda"
                    @paginate="getBusqueda(buscar)"
                    :offset="4"
                  >
                  </Pagination>
                </div>
              </v-col>
            </v-row>
          </div>

          <div v-else>
            <div v-if="nuevo == true">
              <div class="container my-10">
                <v-list-item>
                  <v-list-item-avatar size="60">
                    <v-img contain src="../assets/icons/new-blue.png"></v-img>
                  </v-list-item-avatar>

                  <v-divider vertical></v-divider>

                  <v-list-item-content class="ml-5">
                    <h2 style="font-weight: 900; color: rgba(255,0,0,.80);">
                      Nuevos productos
                    </h2>
                    <br />
                    <p>
                      Te presentamos lo más nuevo de nuestro catalogo de
                      productos
                    </p>
                  </v-list-item-content>
                </v-list-item>
              </div>

              <v-slide-group
                class="my-10"
                multiple
                show-arrows
                v-if="productosNuevos"
              >
                <v-slide-item
                  v-for="(item, index) in productosNuevos"
                  :key="index"
                >
                  <v-card class="ma-4" width="200">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="
                        `${item.image}`
                      "
                      contain
                    >
                      <div>
                        <v-chip class="ml-3 mb-2" x-small color="error"
                          >NUEVO</v-chip
                        >
                      </div>
                    </v-img>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title class="mb-1">{{
                          item.name
                        }}</v-list-item-title>
                        <v-list-item-subtitle class="">{{
                          item.description
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-slide-item>
              </v-slide-group>

              <div class="row" v-else>
                <v-skeleton-loader height="94" type="list-item-two-line">
                </v-skeleton-loader>
              </div>
            </div>

            <v-divider class="my-5"></v-divider>

            <div class="container my-10">
              <v-list-item v-if="categoriaActual">
                <v-list-item-avatar size="60">
                  <v-img contain src="../assets/icons/gear-blue.png"></v-img>
                </v-list-item-avatar>

                <v-divider vertical></v-divider>

                <v-list-item-content class="ml-5">
                  <h2 style="font-weight: 900; color: rgba(255,0,0,.80);">
                    {{ categoriaActual.name }}
                  </h2>
                  <br />
                  <p>{{ categoriaActual.description }}</p>
                </v-list-item-content>
              </v-list-item>

              <v-skeleton-loader v-else height="94" type="list-item-two-line">
              </v-skeleton-loader>
            </div>


              <v-row v-if="productosCategoria">
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                  v-for="(item, index) in productosCategoria.data"
                  :key="index"
                >
                  <v-card class="mx-auto" max-width="400">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      :src="
                        `${item.image}`
                      "
                    >
                    </v-img>

                    <v-card-title>{{ item.name }}</v-card-title>
                    <v-card-subtitle class="pb-0 ">{{
                      item.code
                    }}</v-card-subtitle>

                    <v-card-text class="text--primary">
                      <!-- <div>{{ item.marca }}</div> -->

                      <div>{{ item.description }}</div>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <!-- Ventana de dialogo -->
                      <v-dialog v-model="dialog[index]" max-width="800px">
                        <template v-slot:activator="{ on }">
                          <v-btn color="error" text v-on="on">
                            Ver imagen
                          </v-btn>
                        </template>

                        <v-card>
                          <v-img
                            class="white--text align-end"
                            :src="
                              `${item.image}`
                            "
                          >
                          </v-img>
                        </v-card>
                      </v-dialog>
                      <!-- Ventana de dialogo -->
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>

              <div class="text-center mt-5" v-if="productosCategoria.total > productosCategoria.per_page">
                <Pagination
                  :pagination="productosCategoria"
                  @paginate="getProductosCategoria(categoriaActual.id)"
                  :offset="4"
                >
                </Pagination>
              </div>

          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Pagination from "../components/Pagination";

export default {
  name: "Productos",
  components: {
    Pagination,
  },
  data() {
    return {
      categorias: {},
      categoriaActual: {},
      paginas: null,
      productosNuevos: {},
      productosCategoria: {
        total: 0,
        per_page: 2,
        from: 1,
        to: 0,
        current_page: 1,
      },
      busqueda: {
        total: 0,
        per_page: 2,
        from: 1,
        to: 0,
        current_page: 1,
      },
      offset: 4,
      buscar: "",
      buscarPag: "",
      resultadoBusqueda: "",
      nuevo: true,
      dialog: [],
      baseUrl: "https://api.distfavorer18.com/api",
    };
  },
  created() {
    this.getCategorias();
    this.getNewProductos();
    this.getCategoriaActual(this.$route.params.id);
  },
  watch: {
    $route: function(val, oldVal) {
      this.getCategoriaActual(this.$route.params.id);
      this.productosCategoria.current_page = 1;
    },
  },
  methods: {
    getBusqueda(search) {
      let endpoint = `${this.baseUrl}/products/search/${search}?page=${this.busqueda.current_page}`;

      axios
        .post(endpoint)
        .then((res) => {
          this.busqueda = res.data;

          if (this.busqueda.length == 0) {
            this.resultadoBusqueda =
              "No se encontraron resultados en la busqueda";
          } else {
            this.resultadoBusqueda = "Resultados";
            this.nuevo = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getNewProductos() {
      let endpoint = `${this.baseUrl}/products/new`;

      axios
        .get(endpoint)
        .then((res) => {
          this.productosNuevos = res.data;
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
    getCategoriaActual(id) {
      let endpoint = `${this.baseUrl}/categories/${id}`;

      axios
        .get(endpoint)
        .then((res) => {
          this.categoriaActual = res.data;
          this.resultadoBusqueda = "";
          this.getProductosCategoria(this.categoriaActual.id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProductosCategoria(categoria) {
      let endpoint = `${this.baseUrl}/products/category/${categoria}?page=${this.productosCategoria.current_page}`;

      axios
        .get(endpoint)
        .then((res) => {
          this.productosCategoria = res.data;
          console.log(this.productosCategoria);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
