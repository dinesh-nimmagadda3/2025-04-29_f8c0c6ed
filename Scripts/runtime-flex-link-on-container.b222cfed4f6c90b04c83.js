"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [192],
  {
    7466: (t, e, n) => {
      n.r(e), n.d(e, { init: () => u });
      var r = n(210),
        i = n(3848);
      function a(t) {
        const e = t.currentTarget;
        (0, r.A)(t) ||
          ("popup" !== e.getAttribute("data-type")
            ? (function (t) {
                return (
                  "anchor" === t.getAttribute("data-type") &&
                  window.$.DM.isHrefAliasCurrent(
                    t.getAttribute("data-link-on-container")
                  )
                );
              })(e)
              ? window.$.DM.scrollToAnchorFromLinkClickEvent({
                  event: t,
                  href: e.getAttribute("data-link-on-container"),
                  anchorLink: e,
                })
              : (function (t) {
                  const e = (function (t) {
                    const e = t.getAttribute("data-link-on-container") || "",
                      n = t.getAttribute("data-target") || "",
                      r = t.getAttribute("data-rel") || "",
                      i = t.getAttribute("data-type"),
                      a = ["file", "email"].includes(i || "");
                    if (!e) return null;
                    const o = document.createElement("a");
                    return (
                      a && (o.target = "_blank"),
                      n && (o.target = n),
                      (o.href = e),
                      (o.rel = r),
                      (o.tabIndex = -1),
                      (o.style.display = "none"),
                      o
                    );
                  })(t);
                  t.appendChild(e),
                    (e.onclick = (t) => t.stopPropagation()),
                    (e.style.display = "none"),
                    e.click(),
                    e.remove();
                })(e)
            : window.$.DM.openPopupLink(
                t.currentTarget.getAttribute("data-popup-target"),
                t
              ));
      }
      function o(t) {
        t.addEventListener("click", a),
          (function (t) {
            t.setAttribute("tabindex", "0"),
              t.addEventListener("keyup", (t) => {
                "Enter" === t.key && a(t);
              });
          })(t);
      }
      const c = "[data-link-on-container]";
      async function u() {
        !(function ({ selector: t }) {
          !(0, i.OK)() &&
            !(0, i.DD)() &&
            document.querySelectorAll(t).forEach(o);
        })({ selector: c });
      }
    },
  },
]);
