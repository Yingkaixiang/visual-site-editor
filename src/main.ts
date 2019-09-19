import Vue from "vue";
import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";

import App from "./App.vue";
import router from "./router";
import store from "./store/";

import "./registerServiceWorker";
import "./global.css";
import "normalize.css";

Sentry.init({
  dsn: "https://5e0aa1454ffa485badaac40bc532f41e@sentry.io/1551057",
  integrations: [new Integrations.Vue({
    Vue,
    attachProps: true,
    logErrors: true,
  })],
  environment: "development",
  release: "v1.0.0",
  beforeSend(event, hint) {
    if (event.exception) {
      Sentry.showReportDialog({ eventId: event.event_id });
    }
    return event;
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
