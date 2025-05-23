"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [253, 307],
  {
    6307: (t, e, a) => {
      a.r(e), a.d(e, { init: () => w, initAnimations: () => b });
      var n = {};
      a.r(n),
        a.d(n, {
          Device: () => s,
          animatedElementsArray: () => l,
          forEachAnimatedElement: () => c,
          getAnimationSelector: () => p,
          getDAMDescriptor: () => x,
          getElementAnimationData: () => m,
          getElementExtendedAnimationData: () => d,
          getOptionsFromStyle: () => f,
          shouldRespectCSSAnimationProps: () => u,
        });
      const r = {
        bounce: {
          defaultOptions: { easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
          timeline: {
            0: { transform: "translate3d(0px, 0px, 0px) scaleY(1)" },
            20: { transform: "translate3d(0px, 0px, 0px)" },
            40: { transform: "translate3d(0px, -30px, 0px) scaleY(1.1)" },
            43: { transform: "translate3d(0px, -30px, 0px) scaleY(1.1)" },
            53: { transform: "translate3d(0px, 0px, 0px)" },
            70: { transform: "translate3d(0px, -15px, 0px) scaleY(1.05)" },
            80: { transform: "translate3d(0px, 0px, 0px) scaleY(0.95)" },
            90: { transform: "translate3d(0px, -4px, 0px) scaleY(1.02)" },
            100: { transform: "translate3d(0px, 0px, 0px) scaleY(1)" },
          },
        },
        flash: {
          timeline: {
            0: { opacity: "1" },
            25: { opacity: "0" },
            50: { opacity: "1" },
            75: { opacity: "0" },
            100: { opacity: "1" },
          },
        },
        pulse: {
          timeline: {
            0: { transform: "scale3d(1, 1, 1)" },
            50: { transform: "scale3d(1.05, 1.05, 1.05)" },
            100: { transform: "scale3d(1, 1, 1)" },
          },
        },
        rubberBand: {
          timeline: {
            0: { transform: "scale3d(1, 1, 1)" },
            30: { transform: "scale3d(1.25, 0.75, 1)" },
            40: { transform: "scale3d(0.75, 1.25, 1)" },
            50: { transform: "scale3d(1.15, 0.85, 1)" },
            65: { transform: "scale3d(0.95, 1.05, 1)" },
            75: { transform: "scale3d(1.05, 0.95, 1)" },
            100: { transform: "scale3d(1, 1, 1)" },
          },
        },
        shake: {
          timeline: {
            0: { transform: "translate3d(0, 0, 0)" },
            10: { transform: "translate3d(-10px, 0, 0)" },
            20: { transform: "translate3d(10px, 0, 0)" },
            30: { transform: "translate3d(-10px, 0, 0)" },
            40: { transform: "translate3d(10px, 0, 0)" },
            50: { transform: "translate3d(-10px, 0, 0)" },
            60: { transform: "translate3d(10px, 0, 0)" },
            70: { transform: "translate3d(-10px, 0, 0)" },
            80: { transform: "translate3d(10px, 0, 0)" },
            90: { transform: "translate3d(-10px, 0, 0)" },
            100: { transform: "translate3d(0, 0, 0)" },
          },
        },
        swing: {
          timeline: {
            0: { transform: "rotate3d(0, 0, 1, 0deg)" },
            20: { transform: "rotate3d(0, 0, 1, 15deg)" },
            40: { transform: "rotate3d(0, 0, 1, -10deg)" },
            60: { transform: "rotate3d(0, 0, 1, 5deg)" },
            80: { transform: "rotate3d(0, 0, 1, -5deg)" },
            100: { transform: "rotate3d(0, 0, 1, 0deg)" },
          },
        },
        tada: {
          timeline: {
            0: { transform: "scale3d(1, 1, 1) rotate3d(0, 0, 1, 0deg)" },
            10: {
              transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
            },
            20: {
              transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
            },
            30: { transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
            40: {
              transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
            },
            50: { transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
            60: {
              transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
            },
            70: { transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
            80: {
              transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
            },
            90: { transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
            100: { transform: "scale3d(1, 1, 1) rotate3d(0, 0, 1, 0deg)" },
          },
        },
        wobble: {
          timeline: {
            0: {
              transform: "translate3d(0%, 0px, 0px) rotate3d(0, 0, 1, 0deg)",
            },
            15: {
              transform: "translate3d(-25%, 0px, 0px) rotate3d(0, 0, 1, -5deg)",
            },
            30: {
              transform: "translate3d(20%, 0px, 0px) rotate3d(0, 0, 1, 3deg)",
            },
            45: {
              transform: "translate3d(-15%, 0px, 0px) rotate3d(0, 0, 1, -3deg)",
            },
            60: {
              transform: "translate3d(10%, 0px, 0px) rotate3d(0, 0, 1, 2deg)",
            },
            75: {
              transform: "translate3d(-5%, 0px, 0px) rotate3d(0, 0, 1, -1deg)",
            },
            100: {
              transform: "translate3d(0%, 0px, 0px) rotate3d(0, 0, 1, 0deg)",
            },
          },
        },
        flipInX: {
          defaultOptions: { easing: "ease-in" },
          timeline: {
            0: {
              transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)",
              opacity: "0",
            },
            40: { transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)" },
            60: {
              transform: "perspective(400px) rotate3d(1, 0, 0, 10deg)",
              opacity: "1",
            },
            80: { transform: "perspective(400px) rotate3d(1, 0, 0, -5deg)" },
            100: { transform: "perspective(400px) rotate3d(1, 0, 0, 0deg)" },
          },
        },
        flipInY: {
          defaultOptions: { easing: "ease-in" },
          timeline: {
            0: {
              transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)",
              opacity: "0",
            },
            40: { transform: "perspective(400px) rotate3d(0, 1, 0, -20deg)" },
            60: {
              transform: "perspective(400px) rotate3d(0, 1, 0, 10deg)",
              opacity: "1",
            },
            80: { transform: "perspective(400px) rotate3d(0, 1, 0, -5deg)" },
            100: { transform: "perspective(400px) rotate3d(0, 1, 0, 0deg)" },
          },
        },
        rollIn: {
          timeline: {
            0: {
              opacity: "0",
              transform:
                "translate3d(-100%, 0px, 0px) rotate3d(0, 0, 1, -120deg)",
            },
            100: {
              opacity: "1",
              transform: "translate3d(0%, 0px, 0px)  rotate3d(0, 0, 1, 0deg)",
            },
          },
        },
        zoomInUp: {
          defaultOptions: { easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)" },
          timeline: {
            0: {
              opacity: "0",
              transform: "scale3d(0.1, 0.1, 0.1) translate3d(0px, 1000px, 0px)",
            },
            60: {
              opacity: "1",
              transform:
                "scale3d(0.475, 0.475, 0.475) translate3d(0px, -60px, 0px)",
            },
            100: { transform: "scale3d(1, 1, 1) translate3d(0px, 0px, 0px)" },
          },
        },
      };
      a(2355);
      var o = a(8486),
        i = a(3254);
      const s = { MOBILE: "mobile", TABLET: "tablet", DESKTOP: "desktop" };
      function d(t) {
        return i.a1(t);
      }
      function m(t) {
        const e = g(),
          a = d(t);
        if (a) return i.oe(a, e);
        {
          let a = t.getAttribute(`data-anim-${e}`) || "";
          return (
            a ||
              e !== s.DESKTOP ||
              (a =
                t.getAttribute("data-anim") ||
                t.getAttribute("data-current-anim") ||
                ""),
            { animation: a || "none", trigger: "entrance" }
          );
        }
      }
      function p() {
        return `[data-anim], [data-anim-${g()}], [data-current-anim], [${
          i.QM
        }]`;
      }
      function l(t = document) {
        return Array.from(t.querySelectorAll(p()));
      }
      function c(t, e = document) {
        l(e).forEach(t);
      }
      function f(t) {
        if (!u()) return {};
        const e = [];
        [
          "transition-delay",
          "transition-duration",
          "animation-delay",
          "animation-duration",
        ].forEach((a) => {
          "unset" === t.style[a] && (e.push(a), (t.style[a] = ""));
        });
        const a = getComputedStyle(t),
          n = {
            delay: parseFloat(a.animationDelay) || 0,
            duration: parseFloat(a.animationDuration) || 1,
          };
        return (
          e.forEach((e) => {
            t.style.setProperty(e, "unset", "important");
          }),
          n
        );
      }
      function u() {
        return window.rtCommonProps[
          "feature.flag.runtime.newAnimation.respectCssAnimationProps.enabled"
        ];
      }
      function x(t, e = {}) {
        const a = i.z1.find((e) => e.presetKey === t);
        return a?.equivalent
          ? i.z1
              .find((t) => t.presetKey === a.equivalent.presetKey)
              .damDescriptor({ ...e, ...a.equivalent.options })
          : a?.damDescriptor
          ? a.damDescriptor(e)
          : null;
      }
      function g() {
        return window?.$ &&
          ((window.$.layoutDevice && window.$.layoutDevice.type) ||
            window.Parameters.LayoutParams._device) === s.MOBILE
          ? s.MOBILE
          : s.DESKTOP;
      }
      const y = [];
      function w() {
        if (window.dam) return;
        const t =
          window.rtCommonProps[
            "feature.flag.runtime.newAnimation.jitAnimation.enabled"
          ] || !1;
        window.dam = new o.DudaAnimationManager({ jitAnimation: t });
        try {
          window.top !== window &&
            (window.top._damInstance?.disabled && window.dam.disable(),
            (window.top._damInstance = window.dam));
        } catch (t) {}
        b(),
          new MutationObserver((t) => {
            t.forEach((t) => {
              (t.addedNodes ? Array.from(t.addedNodes) : [])
                .filter((t) => t.nodeType === Node.ELEMENT_NODE)
                .map((t) => t.parentNode || t)
                .forEach((t) => {
                  c((t) => {
                    setTimeout(() => {
                      y.includes(t) ||
                        (t.getBoundingClientRect().width ||
                        t.getBoundingClientRect().height
                          ? v(t)
                          : setTimeout(() => {
                              y.includes(t) || v(t);
                            }, 500));
                    });
                  }, t);
                });
            });
          }).observe(document.body, { childList: !0, subtree: !0 }),
          (window.dam.api = { applyAnimation: A, rtAnimationService: n });
      }
      function b() {
        window.dam &&
          l()
            .map(
              (t) =>
                new Promise((e) => {
                  y.includes(t) ? e() : (v(t), requestAnimationFrame(e));
                })
            )
            .reduce((t, e) => t.then(e), Promise.resolve());
      }
      function v(t) {
        Array.from(t.classList)
          .filter((t) => t.startsWith("running-animation-"))
          .forEach((e) => t.classList.remove(e));
        const e = () => {
          A({ element: t, animationData: m(t) });
        };
        setTimeout(
          () => window.requestAnimationFrame(e),
          ("feature.flag.runtime.newAnimation.asyncInit.setTimeout.enabled",
          window.rtFlags[
            "feature.flag.runtime.newAnimation.asyncInit.setTimeout.enabled"
          ] && "mobile" === window.$?.layoutDevice?.type
            ? 350
            : 0)
        ),
          y.push(t);
      }
      function A({
        selector: t,
        element: e = document.querySelector(t),
        animationData: a,
      }) {
        e.style.setProperty("visibility", "visible", "important");
        const { animation: n, trigger: o = "entrance", options: i = {} } = a;
        if (!window.dam) return;
        if (
          (window.dam.getInstancesByElement(e).forEach((t) => t.remove()),
          "none" === n)
        )
          return;
        const s = x(n, i) || (r[n] ? { effect: r[n] } : null);
        if (s) {
          const t = window.dam.createAnimation(s);
          t.setTrigger(o);
          const a = f(e);
          t.setOptions({
            duration: 1,
            easing: s?.effect?.defaultOptions?.easing || "linear",
            ...a,
            ...i,
            ...(s.options || {}),
          }),
            (e.style.transition = ""),
            t.apply(e),
            u() &&
              (function (t) {
                [
                  "transition-delay",
                  "transition-duration",
                  "animation-delay",
                  "animation-duration",
                ].forEach((e) => {
                  t.style.setProperty(e, "unset", "important");
                }),
                  t.style.setProperty(
                    "transition-property",
                    "none",
                    "important"
                  );
              })(e);
        }
      }
    },
    3206: (t, e, a) => {
      a.r(e),
        a.d(e, {
          animation: () => n,
          facebookWidgets: () => i,
          flexShrinkingHeader: () => s,
          miniHeader: () => o,
          scrollResponder: () => r,
        });
      var n = a(6307),
        r = a(2424),
        o = a(6387),
        i = a(4378),
        s = a(4493);
    },
  },
]);
