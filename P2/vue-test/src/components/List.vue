<template>
  <div>
    <h1 v-show="isLoading">Cargando personajes ...</h1>
    <table class="table table-hover" v-show="!isLoading">
      <thead class="thead-dark">
        <tr>
          <th>Nombre</th>
          <th>Casa</th>
          <th>Detalle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="character in characters" :key="character._id">
          <td>{{ character.name }}</td>
          <td>{{ character.house }}</td>
          <td class="text-center">
            <button class="btn btn-info" @click="goToDetail(character._id)">Ver detalle</button>
          </td>
        </tr>
      </tbody>
    </table>
    <Detail v-if="showModal"/>
  </div>
</template>

<script>
import { listsAllCharacters } from "../services/got.service.js";
import Detail from "./Detail";
//import routes from './routes'

export default {
  name: "list-component",
  components: {
    Detail
  },

  /**
   * @description the data block represents all the local variable of this component.
   */
  data() {
    return {
      characters: [],
      isLoading: false,
      showModal: this.$route.meta.showModal,
    };
  },

  /**
   * @description the create function is the first one to be execute when the component is being created (see vue js lifecycle).
   */
  created() {
    this.isLoading = true;
    listsAllCharacters().then(res => {
      this.characters = res;
      this.isLoading = false;
    });
  },

  /**
   * @description listener to var showModal.
   */
  watch: {
    "$route.meta"({ showModal }) {
      this.showModal = showModal;
    }
  },
  /**
   * @description the methods block represents all the local methods of this component.
   */
  methods: {
    /**
     * @description get the detail of a character from the GoT API.
     * @param {string} id. the "_id" of the character that we are going to request.
     * @method goToDetail
     */
    goToDetail(id) {
      this.$router.push({ path: `/details/${id}` });
    }
  }
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>