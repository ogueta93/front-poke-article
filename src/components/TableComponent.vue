<template>
    <b-container fluid>
    <b-row>
        <b-col md="6">
            <b-form-group label-cols-sm="3" label="Filtro" class="mb-0">
                <b-input-group>
                <b-form-input v-model="filter" placeholder="Escribe para buscar"></b-form-input>
                <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">Limpiar</b-button>
                </b-input-group-append>
                </b-input-group>
            </b-form-group>
        </b-col>

        <b-col md="6">
            <b-form-group label-cols-sm="3" label="Por página" class="mb-0">
                <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
            </b-form-group>
        </b-col>
    </b-row>

    <b-table
        show-empty
        stacked="md"
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        @filtered="onFiltered"
    >
        <template slot="name" slot-scope="row">
            <span class="table-name">{{ row.value }}</span>
        </template>

        <template slot="weight" slot-scope="row">
            {{ row.value }} <b-badge>kg</b-badge>
        </template>
    </b-table>

    <b-row>
        <b-col md="6">
            <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage">
            </b-pagination>
        </b-col>
    </b-row>
    </b-container>  
</template>

<script>
export default {
    name: 'tableComponent',
    data() {
        return {
            urlService: 'http://pokedex-api.vascoframework.es/',
            items: [],
            fields: [
                { key: 'id', label: 'Nº', sortable: true},
                { key: 'name', label: 'Nombre', sortable: true, class: 'text-center' },
                { key: 'height', label: 'Altura', sortable: true, class: 'text-center' },
                { key: 'weight', label: 'Peso', sortable: true, class: 'text-center' }
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 15, 20],
            sortBy: null,
            sortDesc: false,
            sortDirection: 'asc',
            filter: null,
        }
    },
    computed: {
        sortOptions() {
            return this.fields
            .filter(f => f.sortable)
            .map(f => {
                return { text: f.label, value: f.key }
            })
        }
    },
    mounted: function() {
        var that = this;

        this.$http.get(this.urlService).then(response => {
            that.items = response.body.results;
            that.totalRows = that.items.length;
        }, response => {
            throw 'Unknown Error';
        });
    },
    methods: {
            onFiltered(filteredItems) {
            this.totalRows = filteredItems.length
            this.currentPage = 1
        }
    }
}
</script>

<style scoped>
.table-name {
    text-transform: capitalize;  
}
</style>