export default {
  props: {
    modalName: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      isShown: false
    }
  },

  computed: {
    modalId () {
      return `modal-${this.modalName}`
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      //
    },

    open () {
      this.isShown = true
    },

    close () {
      this.isShown = false
    }
  }
}
