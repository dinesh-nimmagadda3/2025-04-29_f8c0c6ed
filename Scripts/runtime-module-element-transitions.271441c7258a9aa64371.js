"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [866],
  {
    8208: (t, n, e) => {
      e.r(n), e.d(n, { init: () => s });
      class i {
        constructor() {
          (this.transitioning = !1),
            (this.onScroll = () => {
              this.currentInterSectingElements.length &&
                (this.transitioning ||
                  ((this.transitioning = !0),
                  window.requestAnimationFrame(this.animation)));
            }),
            (this.animation = () => {
              this.transitioning = !1;
              const t = (document.scrollingElement || document.documentElement)
                .scrollTop;
              this.currentInterSectingElements.forEach((n) => {
                const e = this.elementsLocation[n];
                if (e.top > t + window.innerHeight || e.top < t) return;
                const i = parseInt(n.getAttribute("data-transition-to"), 10);
                let s = parseInt(
                  n.getAttribute("data-transition-to-direction"),
                  10
                );
                isNaN(s) && (s = 1);
                const o = Math.min(
                    1 - Math.abs(e.top - t) / window.innerHeight,
                    1
                  ),
                  r = Math.min(o * i, i);
                n.style.transform = `translateX(${s * r}px)`;
              });
            }),
            (this.elements =
              Array.from(document.querySelectorAll("[data-transition-to]")) ||
              []),
            (this.elementsLocation = {}),
            (this.currentInterSectingElements = Array.from(this.elements)),
            this.currentInterSectingElements.reduce((t, n) => {
              const e = n.getBoundingClientRect();
              return (t[n] = { top: e.top, height: e.height }), t;
            }, this.elementsLocation),
            document.addEventListener("scroll", this.onScroll, { passive: !0 });
        }
      }
      function s() {
        return new i(), Promise.resolve();
      }
    },
  },
]);
