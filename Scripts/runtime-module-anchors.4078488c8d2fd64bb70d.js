"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [27],
  {
    4646: (e, t, r) => {
      r.r(t), r.d(t, { clean: () => m, init: () => u, onPageChange: () => d });
      var n = r(4272);
      class i {
        constructor({ elementsSelector: e, listener: t, threshold: r }) {
          (this.onIntersection = (e) => {
            e.forEach((e) => {
              e.isIntersecting
                ? this.currentIntersecting.add(e.target)
                : this.currentIntersecting.delete(e.target);
            }),
              this.listener(this.currentIntersecting);
          }),
            (this.elementSelector = e),
            (this.listener = t),
            (this.threshold = r),
            (this.observer = new IntersectionObserver(this.onIntersection, {
              threshold: this.threshold,
            })),
            this._init();
        }
        destroy() {
          this.elementsToMonitor.forEach((e) => {
            this.observer.unobserve(e);
          });
        }
        _init() {
          (this.elementsToMonitor =
            document.querySelectorAll(this.elementSelector) || []),
            (this.currentIntersecting = new Set([])),
            this.elementsToMonitor.forEach((e) => {
              this.observer.observe(e);
            });
        }
        reinit() {
          this.destroy(), this._init();
        }
      }
      const s = ".unifiednav",
        o = "dmNavItemSelected";
      let l, c;
      class h {
        constructor() {
          (this.afterScrolling = void 0),
            (this.onObserverUpdated = (e) => {
              this.currentIntersecting = Array.from(e);
            }),
            (this.onScroll = () => {
              if (document.querySelector(".layout-drawer_open")) return;
              if (!this.currentIntersecting) return;
              clearTimeout(this.afterScrolling);
              const e = this.currentIntersecting.filter((e) => {
                const t = document.scrollingElement || document.documentElement;
                return (e.offsetTop - t.scrollTop) / window.innerHeight < 0.35;
              });
              this.transitioning ||
                ((this.transitioning = !0),
                window.requestAnimationFrame(() => {
                  this.highlightSelectedAnchor({ intersectingElements: e });
                }),
                (this.afterScrolling = setTimeout(() => {
                  this.highlightSelectedAnchor({ intersectingElements: e });
                }, 150)));
            }),
            (this.destroy = () => {
              this.observer.destroy();
            }),
            this._init();
        }
        reInitMarkers() {
          this._init();
        }
        _init() {
          if (!document.querySelectorAll(s))
            return (
              this.observer && this.observer.destroy(),
              void document.removeEventListener("scroll", this.onScroll, {
                passive: !0,
              })
            );
          document.removeEventListener("scroll", this.onScroll, {
            passive: !0,
          }),
            document.addEventListener("scroll", this.onScroll, { passive: !0 }),
            (this.observer = (function ({
              elementsSelector: e,
              listener: t = () => {},
              threshold: r = 0.2,
            } = {}) {
              return new i({ elementsSelector: e, listener: t, threshold: r });
            })({
              elementsSelector: "[data-anchor]",
              threshold: 0.4,
              listener: this.onObserverUpdated,
            })),
            (this.navigationWidgets =
              Array.from(document.querySelectorAll(s)) || []);
        }
        highlightSelectedAnchor({ intersectingElements: e }) {
          this.navigationWidgets.forEach((t) => {
            (t.querySelectorAll("a") || []).forEach((t) => {
              t.classList.remove(o),
                (function ({ intersectingElements: e, href: t }) {
                  return (
                    e[e.length - 1] &&
                    t?.includes(e[e.length - 1].getAttribute("id"))
                  );
                })({ href: t.getAttribute("href"), intersectingElements: e }) &&
                  (function (e) {
                    e.classList.add(o);
                    a(e, []).forEach((t) => {
                      const r = t.querySelector("a");
                      e && r.classList.add(o);
                    });
                  })(t);
            }),
              (this.transitioning = !1);
          }),
            (function (e) {
              if (e.length) return;
              Array.from(document.querySelectorAll(".unifiednav__item") || [])
                .filter((e) => e.href && !e.href.includes("#"))
                .forEach((e) => {
                  new URL(e.href).pathname === window.location.pathname
                    ? e.classList.add(o)
                    : e.classList.remove(o);
                });
            })(e);
        }
      }
      function a(e, t) {
        return e.matches("nav")
          ? t
          : (e.matches(".unifiednav__item-wrap") && t.push(e),
            a(e.parentNode, t));
      }
      function u() {
        return (
          (c = (0, n.D)("feature.flag.mark.anchors")
            ? ((l = new h()), l)
            : null),
          Promise.resolve()
        );
      }
      function d() {
        c && c.reInitMarkers();
      }
      function m() {
        c && c.clean();
      }
    },
  },
]);
