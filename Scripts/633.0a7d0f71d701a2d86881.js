"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [633],
  {
    7633: (e, t, n) => {
      n.r(t),
        n.d(t, {
          closeMegaMenus: () => q,
          handleBodyScrollWithMegaMenu: () => $,
          openMegaMenu: () => I,
          registerMegaMenu: () => M,
        });
      var o = n(7174),
        c = n(3848);
      function s({
        megaMenuSections: e,
        selectedSection: t = null,
        megaMenuNavItems: n,
        selectedLink: o = null,
      }) {
        window.rtFlags["flex.megaMenu.a11y"] &&
          !(0, c.OK)() &&
          ((function ({ megaMenuSections: e, selectedSection: t }) {
            e.forEach((e) => {
              e.setAttribute("role", "menu"),
                e.setAttribute("aria-hidden", "true"),
                e.setAttribute("inert", "");
            }),
              t &&
                (t.setAttribute("aria-hidden", "false"),
                t.removeAttribute("inert"));
          })({ megaMenuSections: e, selectedSection: t }),
          (function ({ megaMenuNavItems: e, selectedLink: t }) {
            e.forEach((e) => {
              e.setAttribute("aria-selected", "false");
            }),
              t && t.setAttribute("aria-selected", "true");
          })({ megaMenuNavItems: n, selectedLink: o }));
      }
      var i = n(5976);
      const a = "open",
        l = "--flex-header-height",
        u = `${i.pM} [data-flex-id]`,
        r = `${i.pM} [data-flex-id].${a}`,
        d = `${r} [data-widget-type="youtube"]`,
        m = `${d} iframe`,
        f = `${d} video`;
      function g(e) {
        e.scrollTop = 0;
      }
      let h;
      function v() {
        const e = document.getElementById(i.a$);
        if (e?.getAttribute("data-changeable-on-scroll")) {
          h && h.abort(), (h = new AbortController());
          const t = () => {
            const t = document.querySelector(i.pM),
              n = e.offsetHeight;
            t.style.setProperty(l, `${n}px`);
          };
          e.addEventListener("transitionend", t, { signal: h.signal });
        } else h && h.abort();
      }
      function y() {
        const e = document.querySelectorAll(`${m}, ${f}`);
        e.length &&
          e.forEach((e) => {
            if (e.src) {
              const t = e.src;
              e.src = t;
            }
          });
      }
      function M() {
        const e = document.querySelectorAll(o.m),
          t = document.querySelector(i.pM),
          n = document.querySelectorAll(u);
        let a;
        s({
          megaMenuSections: n,
          selectedSection: null,
          megaMenuNavItems: e,
          selectedLink: null,
        }),
          e.forEach((o) => {
            const i = o.getAttribute("data-target-page-alias").split(":")[1],
              l = document.querySelector(`[data-flex-id="${i}"]`);
            l &&
              ((function ({ navItem: e, targetSection: t }) {
                window.rtFlags["flex.megaMenu.a11y"] &&
                  !(0, c.OK)() &&
                  (e.setAttribute("aria-haspopup", "true"),
                  e.setAttribute("role", "button"),
                  e.setAttribute("tabindex", "0"),
                  t.id && e.setAttribute("aria-controls", t.id));
              })({ navItem: o, targetSection: l }),
              o.addEventListener("mouseenter", () => {
                clearTimeout(a),
                  S(),
                  v(),
                  A(t),
                  p(l),
                  g(t),
                  w(),
                  s({
                    megaMenuSections: n,
                    selectedSection: l,
                    megaMenuNavItems: e,
                    selectedLink: o,
                  });
              }),
              o.addEventListener("mouseleave", () => {
                a = setTimeout(() => {
                  o.matches(":hover") ||
                    l.matches(":hover") ||
                    t.matches(":hover") ||
                    o.classList.contains("dmNavItemSelected") ||
                    (y(),
                    L(t),
                    b(l),
                    E(),
                    s({
                      megaMenuSections: n,
                      selectedSection: null,
                      megaMenuNavItems: e,
                      selectedLink: null,
                    }));
                }, 500);
              }),
              l.addEventListener("mouseleave", () => {
                l.classList.contains("active") ||
                  l.matches(":focus-within") ||
                  (y(),
                  L(t),
                  b(l),
                  E(),
                  s({
                    megaMenuSections: n,
                    selectedSection: null,
                    megaMenuNavItems: e,
                    selectedLink: null,
                  }));
              }));
          });
      }
      function S() {
        const e = document.querySelector(i.pM);
        document.querySelectorAll(r).forEach((e) => {
          b(e);
        }),
          L(e),
          E();
      }
      function p(e) {
        e.classList.add(a), window.dispatchEvent(new Event("resize"));
      }
      function b(e) {
        e.classList.remove(a);
      }
      function A(e) {
        if (!e) return;
        const t = `${document.getElementById(i.a$).offsetHeight}px`;
        e.style.setProperty(l, t), e.classList.add(a);
      }
      function L(e) {
        e && (e.style.removeProperty(l), e.classList.remove(a));
      }
      function $() {
        w();
      }
      function w() {
        (function () {
          const e = document.querySelector(i.pM),
            t = e.clientHeight;
          return e.scrollHeight > t;
        })() &&
          ((document.body.style.height = "100vh"),
          (document.body.style.overflow = "hidden"));
      }
      function E() {
        (document.body.style.height = ""), (document.body.style.overflow = "");
      }
      function I(e) {
        const t = document.querySelector(i.pM),
          n = document.querySelector(`[data-flex-id="${e}"]`);
        n.closest(i.pM)
          ? n.matches(`.${a}`) || (S(), v(), A(t), p(n), g(t), w())
          : S();
      }
      function q() {
        S();
      }
    },
  },
]);
