"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [241],
  {
    8241: (e, t, n) => {
      n.r(t), n.d(t, { sendPerformanceMetrics: () => J });
      var i = n(8468),
        r = n(9934),
        o = n.n(r),
        a = n(4150),
        s = n.n(a),
        l = n(2206),
        c = n.n(l),
        u = n(845),
        d = n.n(u),
        g = n(7226),
        p = n(6856),
        w = n(9978),
        h = n.n(w);
      const m = 1e-6,
        v = 1e-6,
        f = 20,
        y = (e) => (h()(e) ? "unknown" : e);
      function C({
        device: e = null,
        connectionType: t = null,
        connectionSpeed: n = null,
        viewportWidth: i = null,
        viewportHeight: r = null,
        hasCriticalCss: o = null,
        hasCustomWidgets: a = null,
        browserName: s = null,
        browserVersion: l = null,
        os: c = null,
        firstVisit: u = null,
        pageUuid: d = null,
        serviceWorkerRunning: g = null,
        siteAlias: p = null,
        host: w = null,
        path: h = null,
        vital: { name: f = null, delta: C = null, value: N = null },
      }) {
        return {
          device: e,
          connectionType: y(t),
          connectionSpeed: y(n),
          viewportWidth: i,
          viewportHeight: r,
          hasCriticalCss: o,
          hasCustomWidgets: a,
          browserName: s,
          browserVersion: l,
          os: c,
          firstVisit: u,
          pageUuid: d,
          serviceWorkerRunning: g,
          siteAlias: p,
          host: y(w),
          path: h,
          [f?.toLowerCase()]: C || v,
          [`${f?.toLowerCase()}_value`]: N || m,
          [`${f?.toLowerCase()}_delta`]: C || v,
        };
      }
      function N(e) {
        try {
          let t;
          if (e.startsWith("#") && !isNaN(e[1])) {
            const n = e.slice(1);
            t = document.getElementById(n);
          } else t = document.querySelector(e);
          let n = 0;
          for (; t && n < f; ) {
            const e = t.getAttribute("data-widget-type");
            if (e) return e;
            (t = t.parentElement), n++;
          }
          return "N/A";
        } catch (e) {
          return "N/A";
        }
      }
      function b({ vital: e }) {
        const t = e?.name || "N/A",
          n =
            e?.attribution?.eventTarget ||
            e?.attribution?.largestShiftTarget ||
            "N/A";
        return {
          message: "web vitals logging",
          metric: t,
          eventTarget: n,
          value: e?.value || "N/A",
          rating: e?.rating || "N/A",
          eventType: e?.attribution?.eventType || "N/A",
          isGtmEnabled: !!window.google_tag_manager,
          isFlexSite: !!window.flexSite,
          layoutId: window?.Parameters?.LayoutID || "N/A",
          widgetType: ("CLS" === t && N(n)) || "N/A",
          ...(e || {}),
        };
      }
      var A = n(7108),
        S = n.n(A),
        T = n(9991),
        P = n.n(T),
        W = n(5617),
        _ = n(4272);
      const k = c()(null),
        I = (e) => k(e, window),
        V = (e) => !!document.querySelector(e),
        L = (function ({ apiUrl: e = (0, _.D)("runtimecollector.url") } = {}) {
          return async (t) => {
            if (!e) throw new Error("Missing endpoint for runtimecollector");
            return await fetch(`${e}/performance/metrics`, {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify(t),
              keepalive: !0,
            }).catch((e) => {
              W.C_.warn({
                message: "Error while trying to report Vitals to BI",
                _skipJournal: !0,
                error: d()(e) ? e.toString() : JSON.stringify(e),
                siteAlias: P()("siteAlias", t),
                pageUrl: P()("_currentPage.pageUrl", window),
              });
            });
          };
        })(),
        U = S()((e) => W.C_.info(e), 15),
        E =
          (...e) =>
          (t) =>
            e.reduce(
              (e, t) =>
                e.then((...e) => Promise.resolve().then(t.bind(null, ...e))),
              Promise.resolve(t)
            ),
        R = ({ name: e, rating: t }) => {
          const n = "INP" === e && "poor" === t,
            i = "CLS" === e && "poor" === t,
            r = !!(0, p.V)("runtime.cwv.report.cls.enabled", !1);
          return n || (r && i);
        },
        B = async function () {
          const e = ((window?.sessionStorage ?? window)._cohortId =
              Math.random() < 0.5 ? 0 : 1),
            t = I("_currentDevice"),
            n = I("navigator.connection.type"),
            r = I("navigator.connection.effectiveType"),
            o = I("Parameters.SiteAlias"),
            a = I("window.location.host"),
            l = I("location.pathname"),
            c = V("#criticalCss"),
            u = V('[data-element-type="custom_extension"]'),
            g = I("innerWidth"),
            p = I("innerHeight"),
            w = ["_currentPage.pageContent.uuid", "Parameters.InitialPageUuid"]
              .map((e) => k(e, window))
              .filter(Boolean)
              .at(0),
            { name: h = null, version: m = null, os: v = null } = (0, i.o0)(),
            [f, y] = await (async function () {
              const e = await ((e) => {
                const t = s()(() =>
                  navigator.serviceWorker.getRegistration("/")
                );
                return d()(t) ? null : t;
              })();
              return [!e?.active, !!e];
            })();
          return {
            device: t,
            connectionType: n,
            connectionSpeed: r,
            viewportWidth: g,
            viewportHeight: p,
            hasCriticalCss: c,
            hasCustomWidgets: u,
            browserName: h,
            browserVersion: m,
            os: v,
            firstVisit: f,
            serviceWorkerRunning: y,
            pageUuid: w,
            siteAlias: o,
            host: a,
            path: l,
            cohortId: e,
          };
        },
        H = function (e) {
          return B().then(o()({ vital: e }));
        };
      async function J({ sendLog: e = !0 } = {}) {
        const t = [
          E(H, C, L),
          async (t) => {
            if (e && R(t)) return E(H, b, U)(t);
          },
        ].filter(Boolean);
        [
          g.IN,
          g.Ck,
          (e) => (0, g.rH)(e, { durationThreshold: 0, reportAllChanges: !0 }),
          g.lt,
          g.fK,
          g.zB,
        ].forEach((e) =>
          e((e) => {
            Promise.all(t.map((t) => t(e).catch(console.warn)));
          })
        );
      }
    },
  },
]);
