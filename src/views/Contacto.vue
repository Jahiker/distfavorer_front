<template>
  <div>
    <div class="mb-10">
      <v-img
        loading="lazy"
        height="55vh"
        style="margin-top: -100px"
        src="../assets/banners/019.jpg"
        gradient="to top right, rgb(24,27,35,.80) 50%, rgba(255,0,0,.80)"
      >
        <v-row align="center" justify="center" style="margin-top: 130px;">
          <v-col class="text-center white--text" cols="12">
            <div class="container">
              <h1>ATENCIÓN AL CLIENTE</h1>
              <p
                style="font-size: 13px; font-weight: 200"
                class="hidden-xs-only"
              >
                Te presentamos nuestros canales oficiales para comunicarte con
                nosotros.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-img>
    </div>

    <v-form @submit.prevent="enviarMensaje()" class="my-10">
      <v-card
        class="text-center mx-auto my-5 pa-1"
        max-width="600px"
        tile
        elevation="3"
      >
        <v-card-title class="mx-auto">
          <div class="">
            <v-list-item>
              <v-list-item-avatar size="60">
                <v-img
                  loading="lazy"
                  contain
                  src="../assets/icons/email-blue.png"
                ></v-img>
              </v-list-item-avatar>

              <v-divider vertical></v-divider>

              <v-list-item-content class="ml-5">
                <h2 style="font-weight: 900; color: rgba(255,0,0,.80);">
                  CONTÁCTANOS
                </h2>
                <br />
                <p style="font-size: 13px;">
                  Envíanos un mensaje y con mucho gusto te estaremos
                  contactando.
                </p>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text class="mb-0">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="mensaje.nombre"
                name="nombre"
                label="Nombre"
                color="#232F3E"
                outlined
                filled
                required
              ></v-text-field>

              <v-text-field
                v-model="mensaje.email"
                name="email"
                label="Email"
                color="#232F3E"
                outlined
                filled
                required
              ></v-text-field>

              <v-text-field
                v-model="mensaje.telefono"
                name="telefono"
                label="Telefono"
                color="#232F3E"
                outlined
                filled
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-textarea
                v-model="mensaje.contenido"
                outlined
                color="#232F3E"
                name="mensaje"
                label="Escriba su mensaje..."
                height="230px"
                counter
                filled
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions class="mt-0">
          <v-btn type="submit" dark color="error" large block
            >Enviar mensaje</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-form>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>

        <v-progress-linear
          :active="loading"
          :indeterminate="loading"
          absolute
          bottom
          color="#232F3E"
        ></v-progress-linear>

        <v-card-title class="headline"
          ><v-icon :color="aviso.color">{{ aviso.icon }}</v-icon
          >{{ aviso.titulo }}</v-card-title
        >

        <v-card-text>
          {{ aviso.descripcion }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn :color="aviso.color" text @click="dialog = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Contacto",
  data() {
    return {
      mensaje: {
        nombre: "",
        email: "",
        telefono: "",
        contenido: ""
      },
      dialog: false,
      loading: false,
      aviso: {
        titulo: "",
        descripcion: "",
        icon: "",
        color: "",
      },
      baseUrl: "https://api.distfavorer18.com/api",
    };
  },
  methods: {
    enviarMensaje() {
        let endpoint = `${this.baseUrl}/msg/contact`
        this.resetMensaje();
        this.dialog = true;
        this.loading = true;

      if (
        this.mensaje.nombre != "" &&
        this.mensaje.telefono != "" &&
        this.mensaje.email != "" &&
        this.mensaje.contenido != ""
      ) {

        axios
          .post(endpoint, {
            name: this.mensaje.nombre,
            phone: this.mensaje.telefono,
            email: this.mensaje.email,
            content: this.mensaje.contenido,
          })
          .then((response) => {
            this.datos = response.data;

            this.loading = false;

            this.aviso.titulo = "Mensaje enviado";
            this.aviso.descripcion =
              "Gracias por comunicarse con nosotros, pronto estaremos atendiendo su solicutud";
            this.aviso.icon = "mdi-checkbox-marked-circle-outline";
            this.aviso.color = "success";
            
            this.mensaje.nombre = "";
            this.mensaje.telefono = "";
            this.mensaje.email = "";
            this.mensaje.contenido = "";
          })
          .catch((err) => {
            this.loading = false;

            this.aviso.titulo = "Mensaje no enviado";
            this.aviso.descripcion = err;
            this.aviso.icon = "mdi-close-circle-outline";
            this.aviso.color = "error";
          });
      } else {
        this.loading = false;
        this.aviso.titulo = "Mensaje no enviado";
        this.aviso.descripcion = "Debe llenar todos los datos";
        this.aviso.icon = "mdi-close-circle-outline";
        this.aviso.color = "error";
      }
    },
    resetMensaje(){
      this.aviso = {
        titulo: "Enviando mensaje",
        descripcion: "Espere un momento",
        icon: "mdi-clock",
        color: "#232F3E",
      };
    }
  },
};
</script>

<style></style>
