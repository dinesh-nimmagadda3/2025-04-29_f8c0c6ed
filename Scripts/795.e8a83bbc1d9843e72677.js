"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [795],
  {
    8795: (t, e, n) => {
      n.r(e),
        n.d(e, {
          deactivateAllItems: () => u,
          getActiveItemId: () => d,
          init: () => v,
          initAccordionLayout: () => A,
          removeAnimationDistance: () => c,
          setActiveItem: () => C,
          setAnimationDistance: () => l,
          toggleCurrentItem: () => g,
          toggleCurrentItemAndCloseOthers: () => h,
        });
      var o = n(2505),
        s = n(1072);
      const r = "active-item",
        i = "active-item-control",
        a = ".accordion-item",
        c = (t) => {
          if (!t.classList.contains(r)) return;
          const e = t.closest(a);
          (e.ontransitionend = null),
            (e.style.maxHeight = t.scrollHeight + "px"),
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                e.style.maxHeight = "0px";
              });
            });
        },
        l = (t) => {
          const e = t.closest(a);
          (e.style.maxHeight = t.scrollHeight + "px"),
            (e.ontransitionend = () => {
              e.style.maxHeight = "max-content";
            });
        },
        m = (t) => {
          c(t.contentItem), (0, o.IV)(t);
        },
        u = (t) => {
          const e = document.getElementById(t);
          e &&
            [...(0, o.RD)(e, i)].forEach((t) => {
              const n = t.getAttribute(o.LG),
                s = e.querySelector(`[id="${n}"]`);
              m({
                contentItem: s,
                controlItem: t,
                activeContentClassName: r,
                activeControlClassName: i,
              });
            });
        },
        d = (t) => (0, o.A6)(t, r)?.id,
        g = (t, e) => {
          const n = t.querySelector(`[id="${e}"]`),
            s = t.querySelector(`[id="c-${e}"]`);
          (0, o.Ck)(s), I({ contentItem: n, controlItem: s });
        },
        h = (t, e, { shouldToggleCurrentItem: n = !0 } = {}) => {
          [...t.querySelectorAll(`[${o.LG}]`)].forEach((s) => {
            const a = s.getAttribute(o.LG),
              c = t.querySelector(`[id="${a}"]`);
            var u;
            a === e
              ? n
                ? g(t, e)
                : (l(
                    (u = {
                      contentItem: c,
                      controlItem: s,
                      activeContentClassName: r,
                      activeControlClassName: i,
                    }).contentItem
                  ),
                  (0, o.Xs)(u),
                  (0, o.Ck)(s))
              : m({
                  contentItem: c,
                  controlItem: s,
                  activeContentClassName: r,
                  activeControlClassName: i,
                });
          });
        },
        C = (t, e) => h(t, e, { shouldToggleCurrentItem: !1 }),
        I = ({ contentItem: t, controlItem: e }) => {
          const n = t.classList.contains(r)
              ? "true"
              : e.getAttribute("aria-selected") ?? "false",
            o =
              "false" === (t.getAttribute("aria-hidden") ?? "true")
                ? "true"
                : "false",
            s = "false" === n ? "true" : "false";
          e.setAttribute("aria-selected", s),
            t.setAttribute("aria-hidden", o),
            "true" === s ? l(t) : c(t),
            e.classList.toggle(i),
            t.classList.toggle(r);
        },
        A = (t) => {
          const e = (e) => {
            e.stopPropagation();
            const n = e.target.closest(`[${o.LG}]`);
            if (!n) return;
            const s = n.getAttribute(o.LG),
              r = "true" === t.getAttribute("data-layout-only-one-open");
            s && (r ? h(t, s) : g(t, s));
          };
          t.addEventListener("click", e),
            t.addEventListener("keydown", (t) => {
              "Enter" === t.key && e(t);
            }),
            (0, o.os)(t, C);
        },
        v = (0, s.e)(A);
    },
    1072: (t, e, n) => {
      n.d(e, { e: () => i });
      const o = new WeakSet(),
        s = (t) => o.has(t),
        r = (t) => o.add(t),
        i = (t) => (e, n) => {
          n && n?.length
            ? n.forEach((e) => {
                s(e) || (t(e), r(e));
              })
            : e && (s(e) || (t(e), r(e)));
        };
    },
    2505: (t, e, n) => {
      n.d(e, {
        A6: () => c,
        Ck: () => i,
        IV: () => s,
        LG: () => o,
        RD: () => a,
        Xs: () => r,
        os: () => l,
      });
      const o = "data-content-reference",
        s = ({
          contentItem: t,
          controlItem: e,
          activeContentClassName: n,
          activeControlClassName: o,
        }) => {
          t.classList.remove(n),
            t.setAttribute("aria-hidden", "true"),
            e.classList.remove(o),
            e.setAttribute("aria-selected", "false");
        },
        r = ({
          contentItem: t,
          controlItem: e,
          activeContentClassName: n,
          activeControlClassName: o,
        }) => {
          t.classList.add(n),
            t.setAttribute("aria-hidden", "false"),
            e.setAttribute("aria-selected", "true"),
            e.classList.add(o);
        },
        i = (t) => {
          (function (t) {
            const e = t.getBoundingClientRect();
            return (
              e.top >= 0 &&
              e.left >= 0 &&
              e.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
              e.right <=
                (window.innerWidth || document.documentElement.clientWidth)
            );
          })(t) || t.scrollIntoView({ behavior: "smooth", block: "center" });
        },
        a = (t, e) => t.querySelectorAll(`.${e}`),
        c = (t, e) => a(t, e)?.[0],
        l = (t, e) => {
          const n = window.location.hash;
          if (!n) return;
          if (!t.querySelector(n)) return;
          const s = [...t.querySelectorAll(`[${o}]`)];
          for (let r = 0; r < s.length; r++) {
            const i = s[r].getAttribute(o),
              a = t.querySelector(`[id="${i}"]`),
              c = a?.querySelector(n);
            if (c) {
              e(t, i);
              break;
            }
          }
        };
    },
  },
]);
