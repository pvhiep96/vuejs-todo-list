import Vue from 'vue';
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib';
import DatetimePicker from 'vuetify-datetime-picker'

// import 'vuetify-datetime-picker/src/stylus/main.styl'

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
  }
})
Vue.use(DatetimePicker);

export default new Vuetify({
});
