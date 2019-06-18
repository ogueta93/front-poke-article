<template>
<div>
    <b-container fluid class="container-content">
        <b-img v-bind="imgProps"></b-img>
        
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Poke-Articles</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Seccion 1</b-nav-item>
                    <b-nav-item href="#">Seccion 2</b-nav-item>
                    <b-nav-item href="#">Seccion 3</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <template slot="button-content"><em>Usuario</em></template>
                        <b-dropdown-item href="#">Perfil</b-dropdown-item>
                        <b-dropdown-item href="#">Salir</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <b-row>
            <b-col>
                <h2>
                    Los primeros 50 pokemons <b-badge variant="success">New</b-badge>
                </h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                {{demoText}}
            </b-col>
            <b-col>
                {{demoText}}
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <tableComponent/>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import tableComponent from '@/components/TableComponent.vue'

export default {
    name: 'mainView',
    components: {
        tableComponent
    },
    data: function() {
        return {
            imgProps: {
                src: 'https://seeklogo.com/images/P/Pokemon-logo-3618A9643C-seeklogo.com.png',
                center: true,
                fluid: true,
                class: "header-img"
            },
            demoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et risus mauris. Maecenas eu lorem id magna faucibus semper. Vivamus at diam libero. Etiam sollicitudin quam dictum justo vulputate, sed gravida sapien volutpat. Nulla risus ipsum, sollicitudin non sapien quis, posuere vulputate odio. Praesent at elit aliquam, placerat nisl sodales, consequat augue. Curabitur laoreet urna id sem volutpat, et auctor risus vestibulum."
        }
    }
}
</script>

<style scope>
.header-img {
    height: 200px;
    margin: 0 0 50px 0;
}

.container-content {
    margin: 20px 0 0 0;
}

.container-content .row{
    margin: 0 0 20px 0;
}
</style>

