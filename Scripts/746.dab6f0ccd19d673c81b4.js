(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [746],
  {
    2746: (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, { init: () => a });
      var i = r(8127);
      class n {
        constructor({ container: t }) {
          (this._positionHandlers = {
            start: () => {
              this.handle.style.setProperty("left", "0"), this._clipAfterImg(0);
            },
            center: (t) => {
              this.handle.style.setProperty("left", ""),
                this._clipAfterImg(t.width / 2);
            },
            end: (t) => {
              this.handle.style.setProperty("left", `${t.width}px`),
                this._clipAfterImg(t.width);
            },
          }),
            (this.container = t),
            (this.doc = this.container.ownerDocument.documentElement),
            (this._initialized = this.initSizes());
          const e = this.handle.getBoundingClientRect();
          (this.offset = { left: e.width / 2, top: e.height / 2 }),
            this._bindMethods(),
            this.handle.style.setProperty("left", ""),
            this.handle.addEventListener("touchstart", this.startDragging),
            this.handle.addEventListener("mousedown", this.startDragging),
            (this.observer = new MutationObserver(this.updateData)),
            this.observer.observe(this.container, {
              attributes: !0,
              childList: !1,
              subtree: !1,
            });
        }
        async initSizes() {
          (this.beforeImg = this.container.querySelector(
            ".baf__img-preview.baf__before"
          )),
            (this.afterImg = this.container.querySelector(
              ".baf__img-preview.baf__after"
            )),
            (this.innerAfterImg = this.afterImg.querySelector("img")),
            (this.handle = this.container.querySelector(".baf__handle")),
            await Promise.all([
              this._waitForImgLoad(this.beforeImg),
              this._waitForImgLoad(this.innerAfterImg),
            ]),
            this._rePosition("init"),
            this.container.ownerDocument.defaultView.addEventListener(
              "resize",
              this._rePosition
            ),
            this.container.ownerDocument.defaultView.addEventListener(
              "orientationchange",
              this._rePosition
            );
        }
        release() {
          this.observer.disconnect(),
            this.handle.removeEventListener("touchstart", this.startDragging),
            this.handle.removeEventListener("mousedown", this.startDragging),
            this.container.ownerDocument.defaultView.removeEventListener(
              "resize",
              this._rePosition
            ),
            this.container.ownerDocument.defaultView.removeEventListener(
              "orientationchange",
              this._rePosition
            ),
            this._stopTrackingMouseEvents();
        }
        startDragging(t) {
          this.container.classList.add("baf__dragging"),
            this.container.classList.add("user-interacting"),
            (this.containerRect = this.container.getBoundingClientRect());
          const e = this.handle.getBoundingClientRect(),
            { clientX: r } = o(t);
          (this.handle.style.transform = `translate(${
            r - this.containerRect.left - e.width / 2
          }px, -50%)`),
            (this.handle.style.left = ""),
            this._startTrackingMouseEvents();
        }
        performUpdates(t) {
          const { clientX: e } = o(t);
          (this.movedTo = this._calculateMoveTo(e)),
            (this.handle.style.transform = `translate(${
              this.movedTo - this.offset.left
            }px, -50%)`),
            this._clipAfterImg(this.movedTo);
        }
        _calculateMoveTo(t) {
          const e = t - this.containerRect.left,
            r = Math.max(0, e);
          return e > this.containerRect.width ? this.containerRect.width : r;
        }
        updatesAfterDrag() {
          this.container.classList.remove("baf__dragging"),
            this.container.classList.remove("user-interacting"),
            this.handle.style.setProperty("transform", ""),
            this.handle.style.setProperty("left", `${this.movedTo}px`),
            this._stopTrackingMouseEvents();
        }
        updateData(t) {
          Array.from(t).forEach(({ attributeName: t }) => {
            if ("data-ext" !== t) return;
            const e = this.extractData();
            this.applyData(e);
          });
        }
        extractData() {
          return JSON.parse(i.Base64.decode(this.container.dataset.ext));
        }
        applyData({
          imgBefore: t,
          imgBeforeAlt: e,
          imgAfter: r,
          imgAfterAlt: i,
          beforeText: n,
          afterText: s,
          beforeTextVisible: a,
          afterTextVisible: o,
        }) {
          (this.beforeImg.src = t || this.beforeImg.src),
            this.beforeImg.setAttribute("alt", e),
            (this.innerAfterImg.src = r || this.innerAfterImg.src),
            this.innerAfterImg.setAttribute("alt", i);
          const h = this.container.querySelector(".baf__title"),
            c = this.container.querySelector(".baf__title.baf__before");
          (h.innerText = n),
            h.classList.toggle("baf__title--hidden", !a),
            (c.innerText = s),
            c.classList.toggle("baf__title--hidden", !o),
            (this._initialized = this.initSizes());
        }
        _rePosition(t = !1) {
          const { width: e, height: r } = getComputedStyle(this.container);
          if (
            e === this.afterImg.style.width &&
            r === this.afterImg.style.height &&
            "init" !== t
          )
            return;
          (this.afterImg.style.width = e), (this.afterImg.style.height = r);
          const i = this.container.getBoundingClientRect();
          this.handle.style.setProperty("left", "");
          const { initialPosition: n } = this.extractData();
          (this._positionHandlers[n] || this._positionHandlers.center)(i);
        }
        _clipAfterImg(t) {
          (this.afterImg.style.transform = `translate(${t}px, 0)`),
            (this.innerAfterImg.style.transform = `translate(-${t}px, 0)`);
        }
        _stopTrackingMouseEvents() {
          this.doc.removeEventListener("touchmove", this.performUpdates, {
            passive: !0,
            capture: !0,
          }),
            this.doc.removeEventListener("mousemove", this.performUpdates, {
              passive: !0,
              capture: !0,
            }),
            this.doc.removeEventListener("touchend", this.updatesAfterDrag, {
              capture: !0,
            }),
            this.doc.removeEventListener("mouseup", this.updatesAfterDrag, {
              capture: !0,
            });
        }
        _startTrackingMouseEvents() {
          this.doc.addEventListener("touchmove", this.performUpdates, {
            passive: !0,
            capture: !0,
          }),
            this.doc.addEventListener("mousemove", this.performUpdates, {
              passive: !0,
              capture: !0,
            }),
            this.doc.addEventListener("touchend", this.updatesAfterDrag, {
              capture: !0,
            }),
            this.doc.addEventListener("mouseup", this.updatesAfterDrag, {
              capture: !0,
            });
        }
        _waitForImgLoad(t) {
          return new Promise((e) => {
            (t.onload = () => {
              window.requestAnimationFrame(e);
            }),
              (t.src = t.src.slice());
          });
        }
        _bindMethods() {
          (this.startDragging = this.startDragging.bind(this)),
            (this.performUpdates = this.performUpdates.bind(this)),
            (this.updatesAfterDrag = this.updatesAfterDrag.bind(this)),
            (this.updateData = this.updateData.bind(this)),
            (this._rePosition = this._rePosition.bind(this));
        }
      }
      const s = {};
      function a(t) {
        return (
          Array.from(document.querySelectorAll(".dmBeforeAndAfter")).forEach(
            (t) => {
              s[t.id] && s[t.id].release(), (s[t.id] = new n({ container: t }));
            }
          ),
          s[(t || {}).id] || {}
        );
      }
      function o(t) {
        return t.type.includes("touch")
          ? (t.touches || t.changedTouches)[0]
          : t;
      }
    },
    8127: function (t, e, r) {
      var i, n;
      (n =
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : void 0 !== r.g
          ? r.g
          : this),
        (t.exports = (function (r) {
          "use strict";
          var n,
            s = (r = r || {}).Base64,
            a =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            o = (function (t) {
              for (var e = {}, r = 0, i = t.length; r < i; r++)
                e[t.charAt(r)] = r;
              return e;
            })(a),
            h = String.fromCharCode,
            c = function (t) {
              if (t.length < 2)
                return (e = t.charCodeAt(0)) < 128
                  ? t
                  : e < 2048
                  ? h(192 | (e >>> 6)) + h(128 | (63 & e))
                  : h(224 | ((e >>> 12) & 15)) +
                    h(128 | ((e >>> 6) & 63)) +
                    h(128 | (63 & e));
              var e =
                65536 +
                1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320);
              return (
                h(240 | ((e >>> 18) & 7)) +
                h(128 | ((e >>> 12) & 63)) +
                h(128 | ((e >>> 6) & 63)) +
                h(128 | (63 & e))
              );
            },
            d = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
            u = function (t) {
              return t.replace(d, c);
            },
            f = function (t) {
              var e = [0, 2, 1][t.length % 3],
                r =
                  (t.charCodeAt(0) << 16) |
                  ((t.length > 1 ? t.charCodeAt(1) : 0) << 8) |
                  (t.length > 2 ? t.charCodeAt(2) : 0);
              return [
                a.charAt(r >>> 18),
                a.charAt((r >>> 12) & 63),
                e >= 2 ? "=" : a.charAt((r >>> 6) & 63),
                e >= 1 ? "=" : a.charAt(63 & r),
              ].join("");
            },
            l =
              r.btoa && "function" == typeof r.btoa
                ? function (t) {
                    return r.btoa(t);
                  }
                : function (t) {
                    if (t.match(/[^\x00-\xFF]/))
                      throw new RangeError(
                        "The string contains invalid characters."
                      );
                    return t.replace(/[\s\S]{1,3}/g, f);
                  },
            g = function (t) {
              return l(u(String(t)));
            },
            p = function (t) {
              return t
                .replace(/[+\/]/g, function (t) {
                  return "+" == t ? "-" : "_";
                })
                .replace(/=/g, "");
            },
            m = function (t, e) {
              return e ? p(g(t)) : g(t);
            };
          r.Uint8Array &&
            (n = function (t, e) {
              for (var r = "", i = 0, n = t.length; i < n; i += 3) {
                var s = t[i],
                  o = t[i + 1],
                  h = t[i + 2],
                  c = (s << 16) | (o << 8) | h;
                r +=
                  a.charAt(c >>> 18) +
                  a.charAt((c >>> 12) & 63) +
                  (void 0 !== o ? a.charAt((c >>> 6) & 63) : "=") +
                  (void 0 !== h ? a.charAt(63 & c) : "=");
              }
              return e ? p(r) : r;
            });
          var v,
            A =
              /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
            b = function (t) {
              switch (t.length) {
                case 4:
                  var e =
                    (((7 & t.charCodeAt(0)) << 18) |
                      ((63 & t.charCodeAt(1)) << 12) |
                      ((63 & t.charCodeAt(2)) << 6) |
                      (63 & t.charCodeAt(3))) -
                    65536;
                  return h(55296 + (e >>> 10)) + h(56320 + (1023 & e));
                case 3:
                  return h(
                    ((15 & t.charCodeAt(0)) << 12) |
                      ((63 & t.charCodeAt(1)) << 6) |
                      (63 & t.charCodeAt(2))
                  );
                default:
                  return h(
                    ((31 & t.charCodeAt(0)) << 6) | (63 & t.charCodeAt(1))
                  );
              }
            },
            y = function (t) {
              return t.replace(A, b);
            },
            _ = function (t) {
              var e = t.length,
                r = e % 4,
                i =
                  (e > 0 ? o[t.charAt(0)] << 18 : 0) |
                  (e > 1 ? o[t.charAt(1)] << 12 : 0) |
                  (e > 2 ? o[t.charAt(2)] << 6 : 0) |
                  (e > 3 ? o[t.charAt(3)] : 0),
                n = [h(i >>> 16), h((i >>> 8) & 255), h(255 & i)];
              return (n.length -= [0, 0, 2, 1][r]), n.join("");
            },
            w =
              r.atob && "function" == typeof r.atob
                ? function (t) {
                    return r.atob(t);
                  }
                : function (t) {
                    return t.replace(/\S{1,4}/g, _);
                  },
            x = function (t) {
              return w(String(t).replace(/[^A-Za-z0-9\+\/]/g, ""));
            },
            D = function (t) {
              return String(t)
                .replace(/[-_]/g, function (t) {
                  return "-" == t ? "+" : "/";
                })
                .replace(/[^A-Za-z0-9\+\/]/g, "");
            },
            B = function (t) {
              return (function (t) {
                return y(w(t));
              })(D(t));
            };
          r.Uint8Array &&
            (v = function (t) {
              return Uint8Array.from(x(D(t)), function (t) {
                return t.charCodeAt(0);
              });
            });
          if (
            ((r.Base64 = {
              VERSION: "2.6.4",
              atob: x,
              btoa: l,
              fromBase64: B,
              toBase64: m,
              utob: u,
              encode: m,
              encodeURI: function (t) {
                return m(t, !0);
              },
              btou: y,
              decode: B,
              noConflict: function () {
                var t = r.Base64;
                return (r.Base64 = s), t;
              },
              fromUint8Array: n,
              toUint8Array: v,
            }),
            "function" == typeof Object.defineProperty)
          ) {
            var I = function (t) {
              return {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              };
            };
            r.Base64.extendString = function () {
              Object.defineProperty(
                String.prototype,
                "fromBase64",
                I(function () {
                  return B(this);
                })
              ),
                Object.defineProperty(
                  String.prototype,
                  "toBase64",
                  I(function (t) {
                    return m(this, t);
                  })
                ),
                Object.defineProperty(
                  String.prototype,
                  "toBase64URI",
                  I(function () {
                    return m(this, !0);
                  })
                );
            };
          }
          return (
            r.Meteor && (Base64 = r.Base64),
            t.exports
              ? (t.exports.Base64 = r.Base64)
              : void 0 ===
                  (i = function () {
                    return r.Base64;
                  }.apply(e, [])) || (t.exports = i),
            { Base64: r.Base64 }
          );
        })(n));
    },
  },
]);
