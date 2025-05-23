"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [105],
  {
    7493: (e, t, r) => {
      function i(e) {
        e && e.classList.remove("stickyHeaderFix");
      }
      function s() {
        return (
          window.flexSite && !document.querySelector(".layout-drawer-hamburger")
        );
      }
      r.r(t),
        r.d(t, {
          allowDragging: () => S,
          clean: () => b,
          closeNavMenus: () => L,
          init: () => _,
          isDrawerOpen: () => f,
          openNavMenus: () => y,
          preventDragging: () => M,
          toggleNavMenus: () => D,
        });
      var n = r(8665);
      function a(e) {
        return { passive: !0, capture: e };
      }
      var o = r(5976);
      function d(e) {
        return void 0 === e;
      }
      class h {
        static get ORIGINS() {
          return ["top", "side", "side-reverse"];
        }
        constructor({ drawer: e, threshold: t = 50 } = {}) {
          if (!e)
            throw new Error(
              "Can't construct drawer without the `drawer` element"
            );
          (this._drawerElement = e),
            (this.threshold = t),
            (this.open = this._drawerElement.hasAttribute("open")),
            (this.origin = this._drawerElement.getAttribute("data-origin")),
            (this._drawerElement.style.transform = null),
            (this.forbidDragging = this.pushContent),
            this._drawerElement.setAttribute(
              "aria-hidden",
              this._drawerElement.hasAttribute("open") ? "false" : "true"
            ),
            this._drawerElement.hasAttribute("open")
              ? this._drawerElement.removeAttribute("inert")
              : this._drawerElement.setAttribute("inert", ""),
            this._bindMethods(),
            this._bindEventListeners(),
            (this._drawerObserver = new window.MutationObserver(
              this._attributesChanges
            )),
            this._drawerObserver.observe(this._drawerElement, {
              attributes: !0,
              attributeFilter: ["open", "data-origin"],
            });
        }
        destruct() {
          this._unbindEventListeners(), this._drawerObserver.disconnect();
        }
        startDraggingDrawer(e) {
          if (
            this.forbidDragging ||
            ("top" === this.origin &&
              this._drawerElement.scrollHeight >
                this._drawerElement.offsetHeight)
          )
            return;
          (this._dragging = !0),
            (this._drawerElement.style.willChange = "transform"),
            (this._drawerElement.style.transition = "none");
          const t = this._determinePositionProp();
          e.touches
            ? ((this.startPos = e.touches[0][t]),
              this._drawerElement.removeEventListener(
                "touchmove",
                this.movingDrawer
              ),
              this._drawerElement.addEventListener(
                "touchmove",
                this.movingDrawer,
                a()
              ))
            : e[t] &&
              ((this.startPos = e[t]),
              this._drawerElement.removeEventListener(
                "mousemove",
                this.movingDrawer
              ),
              this._drawerElement.addEventListener(
                "mousemove",
                this.movingDrawer,
                a()
              ));
        }
        movingDrawer(e) {
          const t = this._determinePositionProp(),
            r = e.touches ? e.touches[0][t] : e[t];
          this._calculateMostDrag(r),
            (this._drawerElement.style.transform = this._buildTranslateValue(
              this.startPos,
              r
            ));
        }
        _calculateMostDrag(e) {
          let t = Number.MAX_SAFE_INTEGER,
            r = "min";
          this._isReversed() && ((t = Number.MIN_SAFE_INTEGER), (r = "max")),
            (this.minimal = Math[r](e, t, this.minimal || t));
        }
        finishedDraggingDrawer(e) {
          this._stopDragging();
          const t = this._determinePositionProp();
          let r = e[t];
          e.changedTouches && (r = e.changedTouches[0][t]);
          const i = this._isReversed() ? r < this.minimal : r > this.minimal;
          if (d(this.startPos) || i) return void (this.minimal = null);
          const s = this._isReversed() ? r - this.startPos : this.startPos - r;
          delete this.startPos,
            s > this.threshold && (this.closeDrawer(), e.stopPropagation());
        }
        _isReversed() {
          return "side-reverse" === this.origin;
        }
        toggleDrawer(e) {
          d(e) ? (this.open = !this.open) : (this.open = !!e);
        }
        closeDrawer() {
          this.open = !1;
        }
        get open() {
          return this._drawerElement.hasAttribute("open");
        }
        set open(e) {
          this._drawerElement.hasAttribute("open") !== e &&
            setTimeout(() => {
              e
                ? (this._drawerElement.setAttribute("open", ""),
                  this._drawerElement.setAttribute("aria-hidden", "false"),
                  this._drawerElement.removeAttribute("inert"))
                : (this._drawerElement.removeAttribute("open"),
                  this._drawerElement.setAttribute("aria-hidden", "true"),
                  this._drawerElement.setAttribute("inert", ""),
                  this._stopDragging()),
                this._dispatchEvent({
                  eventName: "drawer-toggled",
                  detail: { open: e },
                });
            });
        }
        get origin() {
          return this._drawerElement.getAttribute("data-origin") || "side";
        }
        set origin(e) {
          if (this.origin === e) return;
          let t = e;
          h.ORIGINS.includes(e) || (t = "side"),
            this._drawerElement.setAttribute("data-origin", t);
        }
        get pushContent() {
          return !!this._drawerElement.hasAttribute("data-push-content");
        }
        set pushContent(e) {
          (this.forbidDragging = e),
            e
              ? this._drawerElement.setAttribute("data-push-content", "")
              : this._drawerElement.removeAttribute("data-push-content");
        }
        get forbidDragging() {
          return !!this._drawerElement.hasAttribute("forbid-dragging");
        }
        set forbidDragging(e) {
          e
            ? this._drawerElement.setAttribute("forbid-dragging", "")
            : this._drawerElement.removeAttribute("forbid-dragging");
        }
        _attributesChanges(e) {
          Array.from(e).forEach((e) => {
            "attributes" === e.type &&
              ("open" === e.attributeName &&
                (this.open = this._drawerElement.hasAttribute("open")),
              "data-origin" === e.attributeName &&
                (this.origin =
                  this._drawerElement.getAttribute("data-origin")));
          });
        }
        _stopDragging() {
          (this._dragging = !1),
            this._drawerElement.removeEventListener(
              "touchmove",
              this.movingDrawer
            ),
            this._drawerElement.removeEventListener(
              "mousemove",
              this.movingDrawer
            ),
            (this._drawerElement.style.willChange = null),
            (this._drawerElement.style.transform = null),
            (this._drawerElement.style.transition = null);
        }
        _determinePositionProp() {
          return "top" === this.origin ? "clientY" : "clientX";
        }
        _buildTranslateValue(e, t) {
          const r = "top" === this.origin ? "translateY" : "translateX";
          return this._isReversed() && e < t
            ? `${r}(${t - e}px)`
            : !this._isReversed() && e > t
            ? `${r}(-${e - t}px)`
            : null;
        }
        _bindMethods() {
          (this.startDraggingDrawer = this.startDraggingDrawer.bind(this)),
            (this.movingDrawer = this.movingDrawer.bind(this)),
            (this.finishedDraggingDrawer =
              this.finishedDraggingDrawer.bind(this)),
            (this.toggleDrawer = this.toggleDrawer.bind(this)),
            (this.closeDrawer = this.closeDrawer.bind(this)),
            (this._attributesChanges = this._attributesChanges.bind(this));
        }
        _bindEventListeners() {
          this._drawerElement.addEventListener(
            "touchstart",
            this.startDraggingDrawer,
            a()
          ),
            this._drawerElement.addEventListener(
              "touchend",
              this.finishedDraggingDrawer,
              a(!0)
            ),
            this._drawerElement.addEventListener(
              "mousedown",
              this.startDraggingDrawer
            ),
            this._drawerElement.addEventListener(
              "mouseup",
              this.finishedDraggingDrawer
            );
        }
        _unbindEventListeners() {
          this._drawerElement.removeEventListener(
            "touchstart",
            this.startDraggingDrawer,
            a()
          ),
            this._drawerElement.removeEventListener(
              "touchend",
              this.finishedDraggingDrawer,
              a(!0)
            ),
            this._drawerElement.removeEventListener(
              "mousedown",
              this.startDraggingDrawer
            ),
            this._drawerElement.removeEventListener(
              "mouseup",
              this.finishedDraggingDrawer
            ),
            this._drawerElement.removeEventListener(
              "touchmove",
              this.movingDrawer
            ),
            this._drawerElement.removeEventListener(
              "mousemove",
              this.movingDrawer
            );
        }
        _dispatchEvent({ eventName: e, detail: t }) {
          if (this.silent) return;
          const r = new window.CustomEvent(e, {
            detail: t,
            bubbles: !1,
            cancelable: !0,
          });
          this._drawerElement.dispatchEvent(r);
        }
      }
      class l {
        constructor({ container: e, drawer: t, drawerTrigger: r, overlay: n }) {
          (this._drawerFocusHandler = (e) => {
            if ("Tab" === e.key) {
              const t = this.drawerElement.querySelector(
                '\n  a[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex]:not([tabindex="-1"]),\n  [contenteditable]\n'
              );
              t && (t.focus(), e.preventDefault()),
                this._stopDrawerFocusListener();
            }
          }),
            (this.drawerElement = t);
          const a = new h({ drawer: t });
          (this.container = e),
            (this.drawer = a),
            (this.drawerTrigger = r),
            (this.overlay = n),
            (this._rootElement = window.document.body),
            (this._styleToStopScroll = { overflow: "hidden", height: "100vh" }),
            this._bindMethods(),
            this._bindEventListeners(),
            s() || this._hideHamburgerIfHeaderIsHidden(this.container),
            (function ({ container: e }) {
              if (document.body.hasAttribute("data-flex-site")) return;
              const t = document.querySelector(".stickyHeaderFix"),
                r = document.querySelector("[dmtemplateid]");
              if (
                r.classList.contains("header-over-content") ||
                r.closest(".responsiveTablet")
              )
                return void i(t);
              const s = e.querySelector(".site_content"),
                n = parseInt(window.getComputedStyle(s).marginTop, 10),
                a = e
                  .querySelector("#hamburger-header-container")
                  .getBoundingClientRect().height;
              n === a
                ? i(t)
                : (t || s.style.setProperty("transition", "margin-top 0.3s"),
                  window.requestAnimationFrame(() => {
                    window.requestAnimationFrame(() => {
                      s.style.setProperty("margin-top", `${a}px`, "important"),
                        i(t);
                    });
                  }));
            })({ container: e });
        }
        destruct() {
          this._unbindEventListeners(), this.drawer.destruct();
        }
        drawerToggled(e) {
          setTimeout(() => {
            e.detail.open
              ? (this.container.classList.add("layout-drawer_open"),
                s() || this._unMarkHamburgerOnHeader(),
                this._saveScrollPosition(),
                this._stopDocumentScroll(),
                this._initDrawerFocusListener())
              : (this.container.classList.remove("layout-drawer_open"),
                this._restoreRootStyles(),
                s() ||
                  (this._markHamburgerOnHeader(), this.drawerTrigger.focus()),
                this._stopDrawerFocusListener());
          });
        }
        _initDrawerFocusListener() {
          this._stopDrawerFocusListener(),
            document.addEventListener("keydown", this._drawerFocusHandler);
        }
        _stopDrawerFocusListener() {
          document.removeEventListener("keydown", this._drawerFocusHandler);
        }
        closeNavMenus({ silently: e } = {}) {
          if (!this.drawer.open) return Promise.resolve();
          const t = new Promise((e) =>
            this.drawerElement.addEventListener("transitionend", e, {
              once: !0,
            })
          );
          return (
            (this.drawer.silent = e),
            (this.drawer.open = !1),
            (this.drawer.silent = !1),
            t
          );
        }
        openNavMenus({ silently: e } = {}) {
          if (this.drawer.open) return Promise.resolve();
          const t = new Promise((e) =>
            this.drawerElement.addEventListener("transitionend", e, {
              once: !0,
            })
          );
          return (
            (this.drawer.silent = e),
            (this.drawer.open = !0),
            (this.drawer.silent = !1),
            t
          );
        }
        toggleNavMenus({ silently: e } = {}) {
          return this.drawer.open
            ? this.closeNavMenus({ silently: e })
            : this.openNavMenus({ silently: e });
        }
        isDrawerOpen() {
          return this.drawer.open;
        }
        preventDragging() {
          this.drawer.forbidDragging = !0;
        }
        allowDragging() {
          this.drawer.forbidDragging = !1;
        }
        _triggerClickListener() {
          this.toggleNavMenus();
        }
        _escKeyListener(e) {
          e.keyCode === o.D$.ESC && this.closeNavMenus();
        }
        _bindMethods() {
          (this.drawerToggled = this.drawerToggled.bind(this)),
            (this.closeNavMenus = this.closeNavMenus.bind(this)),
            (this._triggerClickListener =
              this._triggerClickListener.bind(this)),
            (this._escKeyListener = this._escKeyListener.bind(this));
        }
        _bindEventListeners() {
          this.drawerElement.addEventListener(
            "drawer-toggled",
            this.drawerToggled
          ),
            s() ||
              this.drawerTrigger.addEventListener(
                "click",
                this._triggerClickListener
              ),
            this.container.addEventListener("keyup", this._escKeyListener),
            this.overlay
              ? (this.overlay.addEventListener(
                  "touchend",
                  this.closeNavMenus,
                  a()
                ),
                this.overlay.addEventListener(
                  "mouseup",
                  this.closeNavMenus,
                  a()
                ),
                this.overlay.addEventListener("click", this.closeNavMenus))
              : this.container.addEventListener(
                  "touchend",
                  this.closeNavMenus,
                  a()
                );
        }
        _unbindEventListeners() {
          this.drawerElement.removeEventListener(
            "drawer-toggled",
            this.drawerToggled
          ),
            s() ||
              this.drawerTrigger.removeEventListener(
                "click",
                this._triggerClickListener
              ),
            this.container.removeEventListener("keyup", this._escKeyListener),
            this.overlay
              ? (this.overlay.removeEventListener(
                  "touchend",
                  this.closeNavMenus,
                  a()
                ),
                this.overlay.removeEventListener(
                  "mouseup",
                  this.closeNavMenus,
                  a()
                ),
                this.overlay.removeEventListener("click", this.closeNavMenus))
              : this.container.removeEventListener(
                  "touchend",
                  this.closeNavMenus,
                  a()
                );
        }
        _saveScrollPosition() {
          this._currentScroll = window.pageYOffset;
        }
        _restoreRootStyles() {
          Object.keys(this._styleToStopScroll).forEach((e) => {
            this._rootElement.style.removeProperty(e);
          });
          const e = this._resetHacksOfIOS();
          return window.scrollTo(0, this._currentScroll), e;
        }
        _stopDocumentScroll() {
          return (
            Object.keys(this._styleToStopScroll).forEach((e) => {
              this._rootElement.style.setProperty(
                e,
                this._styleToStopScroll[e],
                ""
              );
            }),
            this._hackToFixIOSIssues()
          );
        }
        async _hackToFixIOSIssues() {
          /side/i.test(this.drawer.origin) &&
            (await this._waitForActualPaint(),
            (this.drawerElement.style.height = "calc(100% + 0px)"));
        }
        async _resetHacksOfIOS() {
          (this.drawerElement.style.height = ""),
            this.container.classList.contains("layout-drawer_push-content") &&
              (this.container.style.setProperty("position", "fixed"),
              await this._waitForActualPaint(),
              this.container.style.removeProperty("position"));
        }
        _waitForActualPaint() {
          this._transitioningElement = this.container.classList.contains(
            "layout-drawer_push-content"
          )
            ? this.container
            : this.drawerElement;
          const e = new n.c();
          return (
            this.container.removeEventListener(
              "transitionend",
              this._transitionListener
            ),
            this.drawerElement.removeEventListener(
              "transitionend",
              this._transitionListener
            ),
            (this._transitionListener = (t) => {
              this._transitioningElement === t.target &&
                (t.target.removeEventListener(t.type, this._transitionListener),
                e.resolve(t.target));
            }),
            this._transitioningElement.addEventListener(
              "transitionend",
              this._transitionListener,
              { capture: !0 }
            ),
            e.promise
          );
        }
        _unMarkHamburgerOnHeader() {
          this.container.classList.contains("layout-drawer_fixed-header") ||
            this.drawerTrigger.classList.remove("hamburger-on-header");
        }
        _markHamburgerOnHeader() {
          this.drawerTrigger.classList.add("hamburger-on-header");
        }
        _hideHamburgerIfHeaderIsHidden(e) {
          return !(
            (e.querySelector(".hamburger-header") &&
              "none" !== e.querySelector(".hamburger-header").style.display) ||
            (e
              .querySelector(".layout-drawer-hamburger")
              .classList.add("header-is-hidden"),
            0)
          );
        }
      }
      function u(e) {
        return new l({
          container: e,
          overlay: e.querySelector(".layout-drawer-overlay"),
          drawer: e.querySelector(".layout-drawer"),
          drawerTrigger: e.querySelector(".layout-drawer-hamburger"),
        });
      }
      class c {
        constructor({ sidebar: e, sidebarWrapper: t, sidebarOpener: r }) {
          (this.sidebarToggled = (e) => {
            this.sidebarWrapper.classList.toggle(
              "sidebarExpanded",
              e.detail.open
            );
          }),
            (this.sidebarElement = e),
            (this.sidebarWrapper = t),
            (this.sidebarOpener = r),
            this._bindMethods(),
            this._bindEventListeners();
        }
        destruct() {
          this._unbindEventListeners();
        }
        _bindEventListeners() {
          this.sidebarOpener &&
            this.sidebarOpener.addEventListener("click", this.sidebarToggled);
        }
        _unbindEventListeners() {
          this.sidebarOpener &&
            this.sidebarOpener.removeEventListener(
              "click",
              this.sidebarToggled
            );
        }
        _bindMethods() {
          this.sidebarToggled = this.sidebarToggled.bind(this);
        }
        _isSidebarCollapsed() {
          return (
            !this.sidebarOpener ||
            "1" === window.getComputedStyle(this.sidebarOpener).opacity
          );
        }
        closeNavMenus() {
          this._isSidebarCollapsed() &&
            this.sidebarToggled({ detail: { open: !1 } });
        }
        openNavMenus() {}
        preventDragging() {}
        allowDragging() {}
      }
      function g() {
        const e = document.querySelector.bind(document);
        return new c({
          sidebar: e(".sidebar"),
          sidebarWrapper: e(".hasGenericSidebar"),
          sidebarOpener: e("#sidebarHamburger"),
        });
      }
      const m = {
          closeNavMenus() {},
          openNavMenus() {},
          toggleNavMenus() {},
          isDrawerOpen() {},
          preventDragging() {},
          allowDragging() {},
          init() {},
          clean() {},
        },
        w = { layoutManager: m };
      let v = null;
      function _({ containerId: e } = {}) {
        return (
          (v = document.getElementById(e) || document.body),
          v.classList.add("runtime-module-container"),
          document.querySelector(".responsiveTablet") && !s()
            ? (p(),
              (async function (e) {
                const t = document.querySelector(".layout-drawer-hamburger"),
                  r = document.querySelector(".hasGenericSidebar");
                if (!t && !r) return "Not a Hamburger / Sidebar layout";
                const i = [];
                return (
                  Boolean(t) && i.push(u(e)),
                  Boolean(r) && i.push(g()),
                  (w.layoutManager = Object.keys(m).reduce(
                    (e, t) => ({
                      ...e,
                      [t]: () => {
                        i.forEach((e) => e?.[t]?.());
                      },
                    }),
                    {}
                  )),
                  w.layoutManager
                );
              })(v))
            : document.querySelector(".layout-drawer-hamburger") || s()
            ? (p(), (w.layoutManager = u(v)), Promise.resolve(w.layoutManager))
            : document.querySelector(".hasGenericSidebar")
            ? ((w.layoutManager = g()), Promise.resolve(w.layoutManager))
            : Promise.resolve("Not a hamburger layout")
        );
      }
      function b() {
        w.layoutManager.destruct(),
          v.classList.remove("runtime-module-container");
      }
      function p() {
        if (!document.querySelector(".responsiveTablet")) return;
        const e = window.matchMedia("(max-width: 1024px)");
        try {
          e.addEventListener("change", E, { passive: !0 });
        } catch (t) {
          try {
            e.addListener(E, { passive: !0 });
          } catch (e) {
            console.error("initResponsiveTablet failed", e);
          }
        }
      }
      function E(e) {
        const t = new CustomEvent("media-query-changed", {
          bubbles: !0,
          cancelable: !0,
          detail: { matchesQuery: e.matches },
        });
        document.documentElement.dispatchEvent(t);
      }
      function y(e) {
        return w.layoutManager.openNavMenus(e);
      }
      function L(e) {
        return w.layoutManager.closeNavMenus(e);
      }
      function D(e) {
        return w.layoutManager.toggleNavMenus(e);
      }
      function f(e) {
        return w.layoutManager.isDrawerOpen(e);
      }
      function M() {
        return w.layoutManager.preventDragging();
      }
      function S() {
        return w.layoutManager.allowDragging();
      }
    },
  },
]);
