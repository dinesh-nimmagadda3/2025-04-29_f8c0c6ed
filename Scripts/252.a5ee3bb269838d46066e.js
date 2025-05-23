(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [252],
  {
    6252: (t, n, e) => {
      "use strict";
      e.r(n),
        e.d(n, {
          closePopup: () => f,
          init: () => h,
          openPopupWithEvent: () => p,
        });
      var r = e(8127),
        a = e(5976),
        o = e(7477);
      function i(t, n, e, r, a) {
        window.dmShowPopupPage(t, n, e, r, a);
      }
      const c = 230,
        s = 270,
        d = 300,
        u = 390;
      class l {
        constructor({ container: t }) {
          (this.container = t),
            (this.navigationMonths = 0),
            this._bindMethods(),
            t.addEventListener("click", this._navigationDispatch),
            this._loadCurrentMonth();
        }
        _bindMethods() {
          (this._loadNewMonth = this._loadNewMonth.bind(this)),
            (this._loadCurrentMonth = this._loadCurrentMonth.bind(this)),
            (this._buildDataString = this._buildDataString.bind(this)),
            (this._fetchAndLoadNewMonth =
              this._fetchAndLoadNewMonth.bind(this)),
            (this._navigationDispatch = this._navigationDispatch.bind(this));
        }
        _navigationDispatch(t) {
          const n = t.target.closest("[class*=arrow-container]"),
            e = t.target.closest(".today-btn-container");
          n ? this._loadNewMonth(n) : e && this._loadCurrentMonth();
        }
        _buildDataString() {
          const t = { commandID: "d1_loadNewGoogleCalendar" };
          return (
            (t["data-public-calendar-id"] = this.container.getAttribute(
              "data-public-calendar-id"
            )),
            (t["data-navigation-months"] = "0"),
            (t.device = o.AH()),
            (t["data-week-start-on"] =
              this.container.getAttribute("data-week-start-on")),
            (t["data-time-format"] =
              this.container.getAttribute("data-time-format")),
            (t.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone),
            t
          );
        }
        async _loadCurrentMonth() {
          const t = this._buildDataString();
          await this._fetchAndLoadNewMonth(t, 0);
        }
        async _loadNewMonth(t) {
          const n = this._buildDataString(),
            e =
              "rtl" ===
              getComputedStyle(
                this.container.querySelector(".calendar-container")
              ).getPropertyValue("direction")
                ? -1
                : 1,
            r = t.classList.contains("left-arrow-container") ? -1 : 1,
            a = this.navigationMonths + e * r,
            o = a.toString(10);
          (n["data-navigation-months"] = o),
            await this._fetchAndLoadNewMonth(n, a);
        }
        async _fetchAndLoadNewMonth(t, n) {
          const e = `/_dm/s/rt/api/public/wpl/site/${o.Kg()}`,
            r = await fetch(e, {
              method: "POST",
              credentials: "include",
              body: JSON.stringify(t),
              headers: { "Content-Type": "application/json" },
            });
          if (r.ok) {
            const e = await r.json();
            if (e.googleCalendarMarkup) {
              const n = document.createElement("div");
              (n.innerHTML = e.googleCalendarMarkup.toString()),
                (this.container.innerHTML = n.querySelector(
                  ".dm-google-calendar"
                ).innerHTML),
                this.container.setAttribute(
                  "data-navigation-months",
                  t["data-navigation-months"]
                );
            }
            this.navigationMonths = n;
          }
        }
      }
      function h() {
        const t = [];
        Array.from(document.querySelectorAll(".dm-google-calendar")).forEach(
          (n) => {
            t[n.id] = new l({ container: n });
          }
        ),
          (function (t) {
            t.length
              ? document.addEventListener("click", g)
              : document.removeEventListener("click", g);
          })(t);
      }
      function p(t) {
        const n = document.createElement("div"),
          e = t.description
            ? `<div class='event-description dmNewParagraph'>${t.description.replace(
                /\n/g,
                "<br>"
              )}</div>`
            : "",
          r = `<span>\n                        ${
            "true" === t.isAllDayEvent ? t.date : `${t.start} - ${t.end}`
          }\n                        </span>`;
        (n.innerHTML = `\n        <div class='event-full-container'>\n          <p>\n              <span class="event-full-container-title">${t.summary}</span>\n              <br/>\n              ${r}\n              <br/>\n          </p> \n          ${e}     \n        </div>    \n`),
          n.querySelectorAll(".event-description a").forEach(function (t) {
            t.setAttribute("target", "_blank");
          });
        const l = {
            dontOverlay: !0,
            animation: "opened-calendar-popup",
            shouldGenerateFlexPopupTemplate: window.flexSite,
          },
          h = o.AH() === a.pF.MOBILE ? c : s;
        i(
          n,
          "google-calendar-popup-content-container",
          o.AH() === a.pF.MOBILE ? d : u,
          h,
          l
        );
      }
      function f() {
        window.dmHidePopup(undefined, undefined);
      }
      function g(t) {
        const n = t.target.closest(".event-container"),
          e = t.target.closest(".x-more-container"),
          a = t.target.closest(".monthly-day-card.mobile");
        n
          ? (function (t) {
              const n = JSON.parse(r.Base64.decode(t.dataset.calendarEvent));
              n && p(n);
            })(n)
          : e
          ? v(e)
          : a && v(a, !0);
      }
      function v(t, n = !1) {
        const e = t.closest(".monthly-day-card");
        if (
          !e
            .querySelector(".events-container")
            .querySelectorAll(".event-container").length
        )
          return;
        const l = e.cloneNode(!0),
          h = l.querySelector(".x-more-container");
        h && h.remove(),
          n && (l.querySelector(".events-container").style.display = "block");
        const p = JSON.parse(r.Base64.decode(e.dataset.dayEvents));
        let f = "";
        for (const t of p) {
          const n = JSON.parse(r.Base64.decode(t.eventB64));
          let e = "";
          "false" === n.isAllDayEvent &&
            (e = `<span class="start"> ${t.start}</span>`),
            (f += `\n            <p class="event-container clickable" data-calendar-event=${r.Base64.encode(
              JSON.stringify(n)
            )}>\n              ${e}\n              <span>${
              n.summary
            }</span>\n              <br/>\n            </p>\n`);
        }
        l.querySelector(".events-container").innerHTML = f;
        const g = l,
          v = o.AH() === a.pF.MOBILE ? c : s;
        i(
          g,
          "google-calendar-popup-content-container",
          o.AH() === a.pF.MOBILE ? d : u,
          v,
          { dontOverlay: !0, animation: "opened-calendar-popup" }
        );
      }
    },
    8127: function (t, n, e) {
      var r, a;
      (a =
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : void 0 !== e.g
          ? e.g
          : this),
        (t.exports = (function (e) {
          "use strict";
          var a,
            o = (e = e || {}).Base64,
            i =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            c = (function (t) {
              for (var n = {}, e = 0, r = t.length; e < r; e++)
                n[t.charAt(e)] = e;
              return n;
            })(i),
            s = String.fromCharCode,
            d = function (t) {
              if (t.length < 2)
                return (n = t.charCodeAt(0)) < 128
                  ? t
                  : n < 2048
                  ? s(192 | (n >>> 6)) + s(128 | (63 & n))
                  : s(224 | ((n >>> 12) & 15)) +
                    s(128 | ((n >>> 6) & 63)) +
                    s(128 | (63 & n));
              var n =
                65536 +
                1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320);
              return (
                s(240 | ((n >>> 18) & 7)) +
                s(128 | ((n >>> 12) & 63)) +
                s(128 | ((n >>> 6) & 63)) +
                s(128 | (63 & n))
              );
            },
            u = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
            l = function (t) {
              return t.replace(u, d);
            },
            h = function (t) {
              var n = [0, 2, 1][t.length % 3],
                e =
                  (t.charCodeAt(0) << 16) |
                  ((t.length > 1 ? t.charCodeAt(1) : 0) << 8) |
                  (t.length > 2 ? t.charCodeAt(2) : 0);
              return [
                i.charAt(e >>> 18),
                i.charAt((e >>> 12) & 63),
                n >= 2 ? "=" : i.charAt((e >>> 6) & 63),
                n >= 1 ? "=" : i.charAt(63 & e),
              ].join("");
            },
            p =
              e.btoa && "function" == typeof e.btoa
                ? function (t) {
                    return e.btoa(t);
                  }
                : function (t) {
                    if (t.match(/[^\x00-\xFF]/))
                      throw new RangeError(
                        "The string contains invalid characters."
                      );
                    return t.replace(/[\s\S]{1,3}/g, h);
                  },
            f = function (t) {
              return p(l(String(t)));
            },
            g = function (t) {
              return t
                .replace(/[+\/]/g, function (t) {
                  return "+" == t ? "-" : "_";
                })
                .replace(/=/g, "");
            },
            v = function (t, n) {
              return n ? g(f(t)) : f(t);
            };
          e.Uint8Array &&
            (a = function (t, n) {
              for (var e = "", r = 0, a = t.length; r < a; r += 3) {
                var o = t[r],
                  c = t[r + 1],
                  s = t[r + 2],
                  d = (o << 16) | (c << 8) | s;
                e +=
                  i.charAt(d >>> 18) +
                  i.charAt((d >>> 12) & 63) +
                  (void 0 !== c ? i.charAt((d >>> 6) & 63) : "=") +
                  (void 0 !== s ? i.charAt(63 & d) : "=");
              }
              return n ? g(e) : e;
            });
          var A,
            m =
              /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
            y = function (t) {
              switch (t.length) {
                case 4:
                  var n =
                    (((7 & t.charCodeAt(0)) << 18) |
                      ((63 & t.charCodeAt(1)) << 12) |
                      ((63 & t.charCodeAt(2)) << 6) |
                      (63 & t.charCodeAt(3))) -
                    65536;
                  return s(55296 + (n >>> 10)) + s(56320 + (1023 & n));
                case 3:
                  return s(
                    ((15 & t.charCodeAt(0)) << 12) |
                      ((63 & t.charCodeAt(1)) << 6) |
                      (63 & t.charCodeAt(2))
                  );
                default:
                  return s(
                    ((31 & t.charCodeAt(0)) << 6) | (63 & t.charCodeAt(1))
                  );
              }
            },
            b = function (t) {
              return t.replace(m, y);
            },
            w = function (t) {
              var n = t.length,
                e = n % 4,
                r =
                  (n > 0 ? c[t.charAt(0)] << 18 : 0) |
                  (n > 1 ? c[t.charAt(1)] << 12 : 0) |
                  (n > 2 ? c[t.charAt(2)] << 6 : 0) |
                  (n > 3 ? c[t.charAt(3)] : 0),
                a = [s(r >>> 16), s((r >>> 8) & 255), s(255 & r)];
              return (a.length -= [0, 0, 2, 1][e]), a.join("");
            },
            S =
              e.atob && "function" == typeof e.atob
                ? function (t) {
                    return e.atob(t);
                  }
                : function (t) {
                    return t.replace(/\S{1,4}/g, w);
                  },
            C = function (t) {
              return S(String(t).replace(/[^A-Za-z0-9\+\/]/g, ""));
            },
            M = function (t) {
              return String(t)
                .replace(/[-_]/g, function (t) {
                  return "-" == t ? "+" : "/";
                })
                .replace(/[^A-Za-z0-9\+\/]/g, "");
            },
            B = function (t) {
              return (function (t) {
                return b(S(t));
              })(M(t));
            };
          e.Uint8Array &&
            (A = function (t) {
              return Uint8Array.from(C(M(t)), function (t) {
                return t.charCodeAt(0);
              });
            });
          if (
            ((e.Base64 = {
              VERSION: "2.6.4",
              atob: C,
              btoa: p,
              fromBase64: B,
              toBase64: v,
              utob: l,
              encode: v,
              encodeURI: function (t) {
                return v(t, !0);
              },
              btou: b,
              decode: B,
              noConflict: function () {
                var t = e.Base64;
                return (e.Base64 = o), t;
              },
              fromUint8Array: a,
              toUint8Array: A,
            }),
            "function" == typeof Object.defineProperty)
          ) {
            var _ = function (t) {
              return {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              };
            };
            e.Base64.extendString = function () {
              Object.defineProperty(
                String.prototype,
                "fromBase64",
                _(function () {
                  return B(this);
                })
              ),
                Object.defineProperty(
                  String.prototype,
                  "toBase64",
                  _(function (t) {
                    return v(this, t);
                  })
                ),
                Object.defineProperty(
                  String.prototype,
                  "toBase64URI",
                  _(function () {
                    return v(this, !0);
                  })
                );
            };
          }
          return (
            e.Meteor && (Base64 = e.Base64),
            t.exports
              ? (t.exports.Base64 = e.Base64)
              : void 0 ===
                  (r = function () {
                    return e.Base64;
                  }.apply(n, [])) || (t.exports = r),
            { Base64: e.Base64 }
          );
        })(a));
    },
  },
]);
