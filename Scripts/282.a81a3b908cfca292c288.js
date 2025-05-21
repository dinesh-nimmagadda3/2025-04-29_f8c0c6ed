"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [282],
  {
    7174: (e, t, n) => {
      n.d(t, { m: () => a });
      const a = '[data-target-page-alias^="mega_menu:"]';
    },
    6282: (e, t, n) => {
      n.r(t), n.d(t, { init: () => r, services: () => o });
      var a = n(7174);
      function r() {
        !(function () {
          const e = document.querySelectorAll(
            '.dmMobileBody [dmle_extension="onelinksmenu"] li.dmUDNavigationItem_dmMore > a'
          );
          e.forEach((e) => e.removeEventListener("click", i)),
            e.forEach((e) => e.addEventListener("click", i));
        })(),
          [
            ...document.querySelectorAll(
              ".unifiednav:not([data-nav-structure='VERTICAL']) .unifiednav__container_sub-nav[data-depth=\"0\"]"
            ),
          ].forEach((e) => {
            const t = e.querySelector(".unifiednav__container"),
              n = e.getBoundingClientRect();
            n.top + n.height <= window.innerHeight ||
              (t
                ? ((e.style.transition =
                    "transform 0.1s ease-out, opacity 0.1s ease-out, clip-path 0.1s ease-out"),
                  e.addEventListener("wheel", (e) => {
                    e.preventDefault();
                    const t = e.currentTarget,
                      a = Number(t.dataset.scrollY || 0),
                      r = window._navScrollSpeed || 35,
                      i = e.deltaY > 0 ? r : -r,
                      o = n.height - window.innerHeight + n.top,
                      s = Math.max(0, Math.min(a + i, o));
                    (t.dataset.scrollY = s),
                      (t.style.transform = `translate(0, -${s}px)`),
                      (t.style.clipPath = `inset(${s}px -100vw -100vw -100vw)`);
                  }))
                : ((e.style.maxHeight = "65vh"), (e.style.overflow = "auto")));
          }),
          (function () {
            const e = "Tab",
              t = "Enter",
              n = "Escape",
              a = "Space",
              r = "ArrowLeft",
              i = "ArrowUp",
              o = "ArrowRight",
              s = "ArrowDown",
              c = document.querySelectorAll(".unifiednav");
            Array.from(c).forEach((c) => {
              const l = c.querySelectorAll(
                  ".unifiednav > ul > li, .middleLogoLink"
                ),
                d = c.querySelectorAll(".unifiednav > ul > li li");
              let u,
                h,
                f = 0,
                p = [];
              const y = (e) => {
                  e.style.removeProperty("opacity"),
                    e.style.removeProperty("max-height");
                },
                m = () => {
                  u && (y(u), (u = null));
                },
                v = () => {
                  p.forEach((e) => y(e)), (p = []);
                },
                g = (e) => {
                  const t = e.getElementsByTagName("a")[0];
                  t && t.focus();
                },
                b = (e) => {
                  (f = e),
                    e === l.length ? (f = 0) : e < 0 && (f = l.length - 1),
                    l[f].classList.contains("middleLogoLink")
                      ? l[f].focus()
                      : g(l[f]);
                },
                k = (e, t) => {
                  h = t;
                  const n = e.children;
                  t === n.length ? (h = 0) : t < 0 && (h = n.length - 1),
                    g(n[h]),
                    ((e) => {
                      (u = e),
                        (u.style.opacity = 1),
                        (u.style.maxHeight = "initial"),
                        p.push(e);
                    })(e);
                },
                A = (e) => {
                  e.getElementsByTagName("a")[0].click();
                };
              Array.prototype.forEach.call(l, (c, d) => {
                (({ element: e, index: t }) => {
                  Array.from(e.querySelectorAll("a")).forEach((n, a) => {
                    n.closest(".unifiednav__container_sub-nav")
                      ? n.setAttribute("tabindex", "-1")
                      : n.setAttribute("tabindex", "0"),
                      0 === t &&
                        0 === a &&
                        e.addEventListener("focus", () => {
                          f = 0;
                        });
                  });
                })({ element: c, index: d }),
                  c.addEventListener("focus", () => {
                    (h = 0),
                      Array.prototype.forEach.call(l, (e) => {
                        e.setAttribute("aria-expanded", "false");
                      });
                  }),
                  c.addEventListener("click", function () {
                    "false" === this.getAttribute("aria-expanded") ||
                    null === this.getAttribute("aria-expanded")
                      ? this.setAttribute("aria-expanded", "true")
                      : this.setAttribute("aria-expanded", "false");
                  }),
                  c.addEventListener("keydown", function (c) {
                    let l = !1;
                    const d = this.querySelector("ul");
                    switch (c.code) {
                      case o:
                        b(f + 1), v(), (l = !0);
                        break;
                      case r:
                        b(f - 1), v(), (l = !0);
                        break;
                      case e:
                        v();
                        break;
                      case a:
                      case t:
                        d ? ((h = 0), m(), k(d, 0)) : A(this), (l = !0);
                        break;
                      case s:
                        d && ((h = 0), k(d, 0), (l = !0));
                        break;
                      case i:
                        d &&
                          ((h = d.querySelectorAll("li").length - 1),
                          k(d, h),
                          (l = !0));
                        break;
                      case n:
                        m(), b(f), (l = !0);
                        break;
                      default:
                        l = !1;
                    }
                    l && c.preventDefault();
                  });
              }),
                Array.prototype.forEach.call(d, (c) => {
                  c.addEventListener("keydown", function (c) {
                    let l = !1;
                    const d = this.querySelector("ul"),
                      p = this.parentNode.parentNode,
                      y = p.closest(".unifiednav__container_sub-nav"),
                      g = () => {
                        m(),
                          (h = Array.prototype.indexOf.call(y.children, p)),
                          (u = y),
                          k(y, h);
                      };
                    switch (c.code) {
                      case e:
                        v();
                        break;
                      case o:
                        d ? k(d, 0) : (b(f + 1), v()), (l = !0);
                        break;
                      case r:
                        y ? g() : (b(f - 1), v()), (l = !0);
                        break;
                      case n:
                        y ? g() : (b(f), m()), (l = !0);
                        break;
                      case s:
                        k(this.parentNode, h + 1), (l = !0);
                        break;
                      case i:
                        k(this.parentNode, h - 1), (l = !0);
                        break;
                      case t:
                      case a:
                        d ? k(d, 0) : A(this), (l = !0);
                        break;
                      default:
                        l = !1;
                    }
                    return l && (c.preventDefault(), c.stopPropagation()), !1;
                  });
                });
            });
          })(),
          window.flexSite &&
            document.querySelector(a.m) &&
            n
              .e(633)
              .then(n.bind(n, 7633))
              .then((e) => {
                e.registerMegaMenu();
              });
      }
      function i(e) {
        const t = e.target.closest("li.dmUDNavigationItem_dmMore");
        t.classList.add("hover"),
          document.body.addEventListener(
            "click",
            () => {
              t.classList.remove("hover");
            },
            { once: !0 }
          );
      }
      const o = {
        openMegaMenu: function (...e) {
          n.e(633)
            .then(n.bind(n, 7633))
            .then((t) => {
              t.openMegaMenu(...e);
            });
        },
        closeMegaMenus: function (...e) {
          n.e(633)
            .then(n.bind(n, 7633))
            .then((t) => {
              t.closeMegaMenus(...e);
            });
        },
        handleBodyScrollWithMegaMenu: function (...e) {
          n.e(633)
            .then(n.bind(n, 7633))
            .then((t) => {
              t.handleBodyScrollWithMegaMenu(...e);
            });
        },
      };
    },
  },
]);
