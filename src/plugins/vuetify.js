import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { Icon } from "@iconify/vue";
import { h } from "vue";

const vuetify = createVuetify({
  icons: {
    defaultSet: "iconify",
    sets: {
      iconify: {
        component: (props) => h(Icon, { icon: props.icon }),
      },
    },
  },
});

export default vuetify;
