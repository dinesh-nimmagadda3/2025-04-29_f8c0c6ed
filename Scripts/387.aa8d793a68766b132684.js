"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [387],
  {
    8387: (e, n, t) => {
      t.r(n), t.d(n, { init: () => o });
      var r = t(3848);
      async function o() {
        return (
          [...document.querySelectorAll(".hamburgerButton")].forEach((e) => {
            e.removeEventListener("click", c), e.addEventListener("click", c);
          }),
          Promise.resolve({})
        );
      }
      function c() {
        (0, r.OK)() || window.layoutApp.toggleNavMenus();
      }
    },
  },
]);
