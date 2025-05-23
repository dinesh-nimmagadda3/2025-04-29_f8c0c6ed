"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [549],
  {
    3549: (e, t, n) => {
      n.r(t),
        n.d(t, {
          collectWidgetCount: () => l,
          countButtonTypes: () => u,
          countImages: () => c,
          countSmartLayouts: () => i,
          countWidgetTypes: () => a,
        });
      var o = n(6856);
      const r = "[data-widget-type], [data-element-type]";
      function a() {
        const e = document.querySelectorAll(r),
          t = Array.from(e).reduce(
            s({ generateFeatureKey: (e) => `widget-${y(e)}` }),
            {}
          );
        return Object.values(t);
      }
      function u() {
        const e = document.querySelectorAll(r),
          t = Array.from(e)
            .filter(d)
            .reduce(
              s({
                generateFeatureKey: (e) =>
                  `${(function (e) {
                    return e.classList.contains("button_2") ||
                      e.querySelector(".button_2")
                      ? "button-secondary"
                      : "button-primary";
                  })(e)}-${y(e)}`,
              }),
              {}
            );
        return Object.values(t);
      }
      function c() {
        const e = document.querySelectorAll("img"),
          t = document.querySelectorAll("image"),
          n = document.querySelectorAll("img[alt]"),
          o = document.querySelectorAll("image[alt]");
        return [
          { feature: "all-image-elements", count: e.length + t.length },
          {
            feature: "all-image-elements-with-alt",
            count: n.length + o.length,
          },
        ];
      }
      function i() {
        const e = document.querySelectorAll("[data-layout-type]"),
          t = Array.from(e).reduce(
            s({
              generateFeatureKey: (e) =>
                `smart-layout-${e.getAttribute("data-layout-type")}`,
            }),
            {}
          );
        return Object.values(t);
      }
      async function l(e) {
        if (!(0, o.V)("scripts.widgetCount.enabled")) return;
        const t =
            e ||
            a()
              .concat(
                (function () {
                  const e = document.querySelectorAll(
                    '[data-element-type="mapextension"][provider="mappy"][data-radius-toggle="true"]'
                  );
                  return e.length
                    ? [{ feature: "maps-mappy-radius", count: e.length }]
                    : [];
                })()
              )
              .concat(u())
              .concat(
                (function () {
                  const e = document.querySelectorAll(
                      '[data-element-type="html"]'
                    ),
                    t = [
                      "acuityscheduling",
                      "tidycal",
                      "Calendly",
                      "simplybookme",
                      "fareharbor",
                      "bookalet",
                      "bookeo",
                    ];
                  return Array.from(e).find((e) =>
                    t.some((t) => e.innerHTML.toLowerCase().includes(t))
                  )
                    ? [{ feature: "booking-script", count: 1 }]
                    : [];
                })()
              )
              .concat(
                (function () {
                  const e = document.querySelectorAll(r),
                    t = ["book", "appointment", "schedule"];
                  return Array.from(e)
                    .filter(d)
                    .find((e) =>
                      t.some((t) => e.innerHTML.toLowerCase().includes(t))
                    )
                    ? [{ feature: "booking-text", count: 1 }]
                    : [];
                })()
              )
              .concat(c())
              .concat(i()),
          { _currentPage: n, Parameters: l } = window;
        !(async function (e) {
          try {
            const t = window.rtCommonProps?.["runtimecollector.url"];
            if (!t) return;
            await fetch(`${t}/feature/metrics`, {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify(e),
            });
          } catch (e) {
            console.debug("Failed send metrics for feature count", e);
          }
        })({
          features: t,
          siteAlias: l?.SiteAlias,
          sitePublicationDate: l?.PublicationDate
            ? new Date(l?.PublicationDate).getTime()
            : 0,
          pageType: l?.pageType,
          pageUuid:
            n?.pageContent?.uuid || l?.InitialPageUuid || `${n?.pageID}`,
          path: location.pathname,
        });
      }
      function s({ generateFeatureKey: e }) {
        return (t, n) => {
          const o = e(n);
          return (
            t[o] || (t[o] = { feature: o, count: 0 }), (t[o].count += 1), t
          );
        };
      }
      const d = (e) => {
        const t = e.classList.contains("dmWidget") && m(e),
          n = Array.from(e.querySelectorAll(".dmWidget")).some((e) => m(e));
        return t || n;
      };
      function m(e) {
        return (
          "none" !== window.getComputedStyle(e).getPropertyValue("display")
        );
      }
      const y = (e) => {
        const t =
            e.getAttribute("data-widget-type") ||
            e.getAttribute("data-element-type"),
          n = e.getAttribute("data-widget-id");
        return n ? `${t}-${n}` : t;
      };
    },
  },
]);
