<template>
  <div>
    <h3>Listado de Clientes Cuyo nombre NO empieza con P</h3>
    <div v-for="(c,i) of store.state.lista.filter(function(v) { return v.nombre.charAt(0) !== 'P' })" :key="i" class="container">
      <div class="columna">
        <div class="titulo" :style="{color: dame_color()}">Nombre</div><div :style="{color: dame_color()}">{{ c.nombre }}</div>
      </div>
      <div class="columna">
        <div class="titulo" :style="{color: dame_color()}">Rut</div><div :style="{color: dame_color()}">{{ c.rut }}</div>
      </div>
      <div class="columna">
        <div class="titulo" :style="{color: dame_color()}">Sueldo</div><div :style="{color: dame_color()}">{{ c.sueldo }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClienteConP',
  props: {
    msg: String
  },
  data() {
    return {
      store: this.$store
    }
  },
  methods: {
    dame_color () {
      return this.$util.generar_color()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
}
.container > div {
  flex: 1; /*grow*/
}
.columna {
  padding: 10px;
  border: solid 0.5px;
  border-color: rgba(0, 0, 0, .05);
}
.titulo {
  text-align: left;
  font-weight: 600;
}
</style>
