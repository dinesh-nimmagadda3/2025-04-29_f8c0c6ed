"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [896],
  {
    3896: (e, o, n) => {
      n.r(o), n.d(o, { init: () => a, initMapWidgets: () => d });
      var t = n(4272);
      function i(e) {
        return window.$.dmrt.components[e];
      }
      async function a(e) {
        if (!e) return;
        await void (0, t.D)("common.geocodeProvider");
        let o = "inlinemap";
        "dm_geo_location" === e.dataset.elementType && (o = "geolocation"),
          d({ name: o });
      }
      function d({ name: e } = {}) {
        if (window?.Parameters?.isRuntimeServer) {
          const o = () => {
            if ("Cookiebot" in window) {
              const o =
                window.rtCommonProps["cookiebot.mapbox.consent.category"] ||
                "marketing";
              window?.Cookiebot?.consent?.[o] && i(e).default.ready();
            } else i(e).default.ready();
          };
          o(), window.addEventListener("CookiebotOnAccept", o);
        } else i(e).default.ready();
      }
    },
  },
]);
