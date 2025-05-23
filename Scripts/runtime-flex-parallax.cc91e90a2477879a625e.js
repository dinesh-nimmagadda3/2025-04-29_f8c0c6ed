"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [901],
  {
    4861: (t, e, n) => {
      function o(t) {
        return "none" !== window.getComputedStyle(t).backgroundImage;
      }
      n.r(e), n.d(e, { clean: () => b, init: () => p, refresh: () => w });
      const r = (t) => Math.max(t.offsetHeight, window.innerHeight);
      const a = 0.2;
      function i(t) {
        if (!t.hasAttribute("data-parallax")) return;
        const e = t.getBoundingClientRect().top,
          n = Number(t.getAttribute("data-parallax-velocity")) ?? a,
          o = Math.floor(-e * n);
        t.style.backgroundPosition = `50% calc(50% + ${o}px)`;
      }
      function c(t) {
        return Array.from(document.querySelectorAll(t)) || [];
      }
      let s, l, u, g;
      function f(t) {
        const e = new Set();
        if (!g) return;
        const n = (t) =>
          (function ({ targetElement: t, imgData: e }) {
            (t.style.backgroundSize = (function ({
              imgData: t,
              targetElement: e,
            }) {
              return `auto ${(function ({ imgData: t, el: e }) {
                if (!t) return 0;
                const n = r(e),
                  o = n * (t.width / t.height),
                  a = e.offsetWidth;
                return o < a ? n * (a / o) : n;
              })({ imgData: t, el: e })}px`;
            })({ targetElement: t, imgData: e })),
              i(t);
          })({ targetElement: t, imgData: g.get(t) });
        var a, c;
        (s = new IntersectionObserver(
          (function ({
            onIntersectingCallback: t,
            onIntersecting: e,
            onNotIntersecting: n,
          }) {
            return function (o) {
              o.forEach((o) => {
                o.isIntersecting ? (t(o.target), e(o.target)) : n(o.target);
              });
            };
          })({
            onIntersectingCallback: n,
            onIntersecting: (t) => e.add(t),
            onNotIntersecting: (t) => e.delete(t),
          }),
          d
        )),
          (l = new ResizeObserver(
            ((a = n),
            function (t) {
              t.forEach(({ target: t }) => {
                a(t);
              });
            })
          )),
          s.disconnect(),
          l.disconnect(),
          t.filter(o).forEach((t) => {
            n(t), s.observe(t), l.observe(t);
          }),
          (u = (function (t) {
            const e = new AbortController();
            var n;
            return (
              window.addEventListener(
                "scroll",
                ((n = t),
                function (...t) {
                  requestAnimationFrame(() => {
                    n(...t);
                  });
                }),
                { signal: e.signal }
              ),
              { abortController: e }
            );
          })(
            ((c = e),
            function () {
              c.forEach((t) => {
                i(t);
              });
            })
          ));
      }
      const d = { root: null, rootMargin: "200px", threshold: 0 };
      function m() {
        s && s.disconnect(),
          l && l.disconnect(),
          u && u.abortController.abort();
      }
      const h = '[data-parallax="true"]';
      async function p() {
        !(async function ({ selector: t }) {
          const e = c(t);
          e.length &&
            ((g = await (async function (t) {
              const e = new Map(),
                n = t.map(async (t) => {
                  const n = window
                      .getComputedStyle(t)
                      .backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, "$2")
                      .split(",")[0],
                    o = new Image();
                  (o.src = n),
                    (o.style.opacity = "0"),
                    (o.style.pointerEvents = "none"),
                    document.body.appendChild(o);
                  const r = await new Promise((t) => {
                    o.addEventListener("load", () => {
                      t({ width: o.offsetWidth, height: o.offsetHeight });
                    });
                  });
                  e.set(t, r), document.body.removeChild(o);
                });
              return await Promise.all(n), e;
            })(e)),
            f(e));
        })({ selector: h });
      }
      function w() {
        !(function ({ selector: t }) {
          const e = c(t);
          m(), f(e);
        })({ selector: h });
      }
      function b() {
        m();
      }
    },
  },
]);
