<template>
  <div class="mt-5">
      <v-footer
            dark
            padless
            color="#232F3E"
        >
            <v-card
            color="#232F3E"
            flat
            tile
            class="white--text container"
            width="100vw"
            >
            <v-card-text class="text-center">

                <v-btn
                link
                href="https://www.instagram.com/distribuidorafavorer18/"
                class="mx-4 white--text"
                icon
                >
                <v-icon size="24px" color="rgba(255,0,0,.80)">mdi-instagram</v-icon>
                </v-btn>

                <v-btn
                link
                href="https://www.facebook.com/Distribuidora-Favorer-2018-CA-117329860103510/"
                class="mx-4 white--text"
                icon
                >
                <v-icon size="24px" color="rgba(255,0,0,.80)">mdi-facebook</v-icon>
                </v-btn>

                <v-btn
                link
                href="https://tienda.mercadolibre.com.ve/favorer?fbclid=IwAR2eSbi70MnkYNRQ_I8LVTtn0CmhEpFhpFJd4Lu--hiVa5gWMRrcCMNkYo8"
                class="mx-4 white--text"
                icon
                >
                <v-icon size="24px" color="rgba(255,0,0,.80)">mdi-shopping</v-icon>
                </v-btn>

                <v-btn
                link
                href="https://goo.gl/maps/nCM2CjAkAbdJ45KE8"
                class="mx-4 white--text"
                icon
                >
                <v-icon size="24px" color="rgba(255,0,0,.80)">mdi-google-maps</v-icon>
                </v-btn>
            </v-card-text>

            <v-row>
                <v-col cols="12" md="8" lg="9" >
                    <v-card-text class="white--text pt-0">
                        <v-list color="#232F3E" dense>

                            <v-list-item>
                                <v-list-item-icon>
                                <v-icon color="rgba(255,0,0,.80)">mdi-factory</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <h3 class="mb-2">Distribuidora Favorer 2018, C.A. - RIF J-41219637-5</h3>
                                    <p class="direccion">Compra, venta, comercialización, distribución, importación y exportación de repuestos, accesorios y partes para toda clase de vehículos; filtros, correas, gomas, bujías, rolineras y en general podrá realizar cualquier actividad de licito comercio conexa con el objeto principal.</p>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-icon>
                                <v-icon color="rgba(255,0,0,.80)">mdi-map-marker</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <h3>Urb Industrial Carabobo, en la Calle Michelena, C.C. Atlas nivel P.B, Local C-1 </h3>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-icon>
                                <v-icon color="rgba(255,0,0,.80)">mdi-phone</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <h3>+58 (0241) 8329473</h3>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-icon>
                                <v-icon color="rgba(255,0,0,.80)">mdi-cellphone-android</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <h3>+58 (0414) 5810914</h3>
                                </v-list-item-content>
                            </v-list-item>

                        </v-list>

                    </v-card-text>
                </v-col>
                <v-col cols="12" md="4" lg="3" >
                    <v-card-text class="white--text pt-0">
                        <v-list color="#232F3E" dense>

                            <v-list-item link to="/">
                                <v-list-item-icon>
                                <v-icon color="rgba(255,0,0,.80)">mdi-home</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Inicio</v-list-item-title>
                            </v-list-item>

                            <v-list-item link to="/about">
                                <v-list-item-icon>
                                <v-icon color="rgba(255,0,0,.80)">mdi-account-multiple</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Quienes somos</v-list-item-title>
                            </v-list-item>

                            <v-list-item link to="/productos/1">
                                <v-list-item-icon>
                                <v-icon color="rgba(255,0,0,.80)">mdi-shopping</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Productos</v-list-item-title>
                            </v-list-item>

                            <v-list-item link to="/contacto">
                                <v-list-item-icon>
                                <v-icon color="rgba(255,0,0,.80)">mdi-email</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Contacto</v-list-item-title>
                            </v-list-item>

                            <v-list-item link href="https://api.distfavorer18.com">
                                <v-list-item-icon>
                                <v-icon color="rgba(255,0,0,.80)">mdi-settings</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>Panel de administracion</v-list-item-title>
                            </v-list-item>

                        </v-list>
                    </v-card-text>
                </v-col>
            </v-row>


            <v-divider></v-divider>

            <v-card-text class="white--text text-center">
                {{ new Date().getFullYear() }} — &copy <strong>Distribuidora Favorer 2018, C.A.</strong> - J-41219637-5 <br>
                Diseñado por <strong>Chawaramo Soluciones Digitales</strong> - Jahiker Rojas 
            </v-card-text>
            </v-card>
        </v-footer>
  </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
.direccion {
    color: #c5c4c4 !important;
}
</style>