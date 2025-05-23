"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [571],
  {
    1072: (t, e, n) => {
      n.d(e, { e: () => c });
      const o = new WeakSet(),
        r = (t) => o.has(t),
        i = (t) => o.add(t),
        c = (t) => (e, n) => {
          n && n?.length
            ? n.forEach((e) => {
                r(e) || (t(e), i(e));
              })
            : e && (r(e) || (t(e), i(e)));
        };
    },
    7571: (t, e, n) => {
      n.r(e),
        n.d(e, {
          getActiveItemId: () => a,
          init: () => u,
          initTabsLayout: () => d,
          setActiveItem: () => l,
        });
      var o = n(2505),
        r = n(1072);
      const i = "active-tab",
        c = "active-tab-title",
        s = (t) => t.querySelector(`[${o.LG}]`)?.getAttribute(o.LG),
        a = (t) => (0, o.A6)(t, i)?.id || s(t),
        l = (t, e) => {
          [...t.querySelectorAll(`[${o.LG}]`)].forEach((n) => {
            const r = n.getAttribute(o.LG),
              s = t.querySelector(`[id="${r}"]`);
            r === e
              ? ((0, o.Xs)({
                  contentItem: s,
                  controlItem: n,
                  activeContentClassName: i,
                  activeControlClassName: c,
                }),
                (0, o.Ck)(n))
              : (0, o.IV)({
                  contentItem: s,
                  controlItem: n,
                  activeContentClassName: i,
                  activeControlClassName: c,
                });
          });
        },
        d = (t) => {
          const e = (e) => {
            e.stopPropagation();
            const n = e.target,
              r = n.parentNode,
              i = n.getAttribute(o.LG) || r.getAttribute(o.LG);
            i && l(t, i);
          };
          t.addEventListener("click", e),
            t.addEventListener("keydown", (t) => {
              "Enter" === t.key && e(t);
            }),
            ((t) => {
              if (t.querySelector(`.${i}`)) return;
              const e = s(t);
              e && l(t, e);
            })(t),
            (0, o.os)(t, l);
        },
        u = (0, r.e)(d);
    },
    2505: (t, e, n) => {
      n.d(e, {
        A6: () => a,
        Ck: () => c,
        IV: () => r,
        LG: () => o,
        RD: () => s,
        Xs: () => i,
        os: () => l,
      });
      const o = "data-content-reference",
        r = ({
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
        i = ({
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
        c = (t) => {
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
        s = (t, e) => t.querySelectorAll(`.${e}`),
        a = (t, e) => s(t, e)?.[0],
        l = (t, e) => {
          const n = window.location.hash;
          if (!n) return;
          if (!t.querySelector(n)) return;
          const r = [...t.querySelectorAll(`[${o}]`)];
          for (let i = 0; i < r.length; i++) {
            const c = r[i].getAttribute(o),
              s = t.querySelector(`[id="${c}"]`),
              a = s?.querySelector(n);
            if (a) {
              e(t, c);
              break;
            }
          }
        };
    },
  },
]);
