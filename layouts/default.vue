<template>
  <div class="l-default sss">
    <header-default />

    <main class="default__main">
      <Nuxt />
    </main>

    <div v-show="modalActive" class="c-modal modal-overlay" @click="overlayClose" />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>

<script>
import { mapState, mapMutations } from 'vuex'
import * as RootTypes from '~/store/types'
import HeaderDefault from '~/components/header/template-header.vue'

export default {
  components: {
    HeaderDefault
  },

  data () {
    return {
      modalOverlayShown: false
    }
  },

  computed: {
    ...mapState({
      modalEntries: state => state.modal,
      modalActive: state => state.modalActive
    })
  },

  methods: {
    ...mapMutations({
      setRootState: RootTypes.SET_STATE
    }),

    overlayClose () {
      console.info('here :: ')

      this.setRootState({
        accessor: `modal.${this.modalActive}`,
        value: false
      })

      this.setRootState({
        accessor: 'modalActive',
        value: ''
      })
    }
  }
}
</script>
