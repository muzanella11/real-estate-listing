<template>
  <div class="l-homepage">
    <section class="homepage__hero">
      <div class="hero__content">
        <div class="container">
          <div class="content__left">
            <h3 class="title">
              Start Your Journey
            </h3>

            <p class="subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div class="content__right">
            <div class="right-wrapper">
              <div class="c-sliders">
                <div class="sliders__wrapper">
                  <div class="sliders__item">
                    <div class="c-card">
                      <div class="card__header">
                        <div class="header__background" />
                      </div>
                      <div class="card__body">
                        <div class="body__rows-action">
                          <ul class="rows-action__list">
                            <li>
                              <span class="c-pills pills--grey">
                                Dijual
                              </span>
                            </li>
                            <li>
                              <span class="c-pills pills--rounded">
                                Nego
                              </span>
                            </li>
                          </ul>

                          <button class="rows-action__love button button--transparent">
                            <img src="~/assets/icon/love.svg">
                          </button>
                        </div>

                        <div class="body__rows-detail">
                          <div class="rows-detail__budget">
                            <div class="budget-title">
                              Rp 326 jt <span class="budget-subtitle">Cicilan Rp 2,61jt/bln</span>
                            </div>
                          </div>
                        </div>

                        <div class="body__rows-feature">
                          <ul class="rows-feature__list">
                            <li>
                              <img src="~/assets/icon/k-tidur.svg">
                              2 K.Tidur
                            </li>
                            <li>
                              <img src="~/assets/icon/k-mandi.svg">
                              2 K.Mandi
                            </li>
                            <li>
                              <img src="~/assets/icon/l-bangunan.svg">
                              65m2
                            </li>
                            <li>
                              <img src="~/assets/icon/l-tanah.svg">
                              65m2
                            </li>
                          </ul>
                        </div>

                        <div class="body__rows-see-detail">
                          <div class="rows-see-detail__action">
                            <a href="javascript:;" class="action__detail button" @click="actionDetail">
                              Lihat Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="sliders__action">
                  <button class="action__button button-prev">
                    <img src="~/assets/icon/arrow-left.svg">
                  </button>

                  <button class="action__button button-next">
                    <img src="~/assets/icon/arrow-right.svg">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <modal
      v-if="modalEntries.detail"
      modal-name="detail"
    >
      <div class="c-card">
        <div class="card__header">
          <div class="header__background" />
        </div>
        <div class="card__body">
          <div class="body__rows-action">
            <ul class="rows-action__list">
              <li>
                <span class="c-pills pills--grey">
                  Dijual
                </span>
              </li>
              <li>
                <span class="c-pills pills--rounded">
                  Nego
                </span>
              </li>
            </ul>

            <button class="rows-action__love button button--transparent">
              <img src="~/assets/icon/love.svg">
            </button>
          </div>

          <div class="body__rows-detail">
            <div class="rows-detail__budget">
              <div class="budget-title">
                Rp 326 jt <span class="budget-subtitle">Cicilan Rp 2,61jt/bln</span>
              </div>
            </div>
          </div>

          <div class="body__rows-feature">
            <ul class="rows-feature__list">
              <li>
                <img src="~/assets/icon/k-tidur.svg">
                2 K.Tidur
              </li>
              <li>
                <img src="~/assets/icon/k-mandi.svg">
                2 K.Mandi
              </li>
              <li>
                <img src="~/assets/icon/l-bangunan.svg">
                65m2
              </li>
              <li>
                <img src="~/assets/icon/l-tanah.svg">
                65m2
              </li>
            </ul>
          </div>

          <div class="body__rows-see-detail">
            <div class="rows-see-detail__action">
              <a href="javascript:;" class="action__detail button" @click="actionMaps">
                Lihat Peta
              </a>
            </div>
          </div>
        </div>
      </div>
    </modal>

    <modal
      v-if="modalEntries.maps"
      modal-name="maps"
    >
      <div class="c-card">
        <div class="card__header">
          <div class="header__background" />
        </div>
        <div class="card__body">
          <div class="body__rows-detail">
            <div class="rows-detail__budget">
              <div class="budget-title">
                Jl Sukajadi
              </div>
              <div class="budget-subtitle">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>

          <div class="body__rows-see-detail">
            <div class="rows-see-detail__action">
              <a href="javascript:;" class="action__detail button" @click="actionMapsClose">
                Tutup
              </a>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import * as RootTypes from '~/store/types'
import Modal from '~/components/modal/template-modal.vue'

export default {
  components: {
    Modal
  },

  computed: {
    ...mapState({
      modalEntries: state => state.modal
    })
  },

  methods: {
    ...mapMutations({
      setRootState: RootTypes.SET_STATE
    }),

    actionDetail () {
      this.setRootState({
        accessor: 'modal.detail',
        value: true
      })

      this.setRootState({
        accessor: 'modalActive',
        value: 'detail'
      })
    },

    actionMaps () {
      this.pruneModal()

      this.setRootState({
        accessor: 'modal.maps',
        value: true
      })

      this.setRootState({
        accessor: 'modalActive',
        value: 'maps'
      })
    },

    actionMapsClose () {
      this.setRootState({
        accessor: 'modal.maps',
        value: false
      })

      this.setRootState({
        accessor: 'modalActive',
        value: ''
      })
    },

    pruneModal () {
      this.setRootState({
        accessor: 'modal',
        value: {
          detail: false,
          maps: false
        }
      })
      this.setRootState({
        accessor: 'modalActive',
        value: ''
      })
    }
  }
}
</script>
