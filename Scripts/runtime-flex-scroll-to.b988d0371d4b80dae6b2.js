"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [327],
  {
    1809: (e, t, o) => {
      o.r(t), o.d(t, { init: () => r });
      var n = o(3848),
        l = o(932);
      let c;
      async function r() {
        !(function ({ selector: e }) {
          c && c.abort(),
            (c = new AbortController()),
            document.querySelectorAll(e).forEach((e) => {
              const t = e.getAttribute("link_type") || "";
              e.addEventListener(
                "click",
                (e) =>
                  (function (e, t) {
                    (0, n.OK)() ||
                      (e.preventDefault(),
                      window.scrollTo({
                        top: t === l.u ? 0 : document.body.scrollHeight,
                        behavior: "smooth",
                      }));
                  })(e, t),
                { signal: c.signal }
              );
            });
        })({ selector: l.e });
      }
    },
  },
]);
