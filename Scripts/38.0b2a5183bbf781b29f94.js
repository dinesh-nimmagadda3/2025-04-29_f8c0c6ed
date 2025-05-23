/*! For license information please see 38.0b2a5183bbf781b29f94.js.LICENSE.txt */
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [38],
  {
    7038: function (e, t, n) {
      var i, o;
      (i = function () {
        "use strict";
        return function (e, t, n, i) {
          var o = {
            features: null,
            bind: function (e, t, n, i) {
              var o = (i ? "remove" : "add") + "EventListener";
              t = t.split(" ");
              for (var a = 0; a < t.length; a++) t[a] && e[o](t[a], n, !1);
            },
            isArray: function (e) {
              return e instanceof Array;
            },
            createEl: function (e, t) {
              var n = document.createElement(t || "div");
              return e && (n.className = e), n;
            },
            getScrollY: function () {
              var e = window.pageYOffset;
              return void 0 !== e ? e : document.documentElement.scrollTop;
            },
            unbind: function (e, t, n) {
              o.bind(e, t, n, !0);
            },
            removeClass: function (e, t) {
              var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
              e.className = e.className
                .replace(n, " ")
                .replace(/^\s\s*/, "")
                .replace(/\s\s*$/, "");
            },
            addClass: function (e, t) {
              o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t);
            },
            hasClass: function (e, t) {
              return (
                e.className &&
                new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
              );
            },
            getChildByClass: function (e, t) {
              for (var n = e.firstChild; n; ) {
                if (o.hasClass(n, t)) return n;
                n = n.nextSibling;
              }
            },
            arraySearch: function (e, t, n) {
              for (var i = e.length; i--; ) if (e[i][n] === t) return i;
              return -1;
            },
            extend: function (e, t, n) {
              for (var i in t)
                if (t.hasOwnProperty(i)) {
                  if (n && e.hasOwnProperty(i)) continue;
                  e[i] = t[i];
                }
            },
            easing: {
              sine: {
                out: function (e) {
                  return Math.sin(e * (Math.PI / 2));
                },
                inOut: function (e) {
                  return -(Math.cos(Math.PI * e) - 1) / 2;
                },
              },
              cubic: {
                out: function (e) {
                  return --e * e * e + 1;
                },
              },
            },
            detectFeatures: function () {
              if (o.features) return o.features;
              var e = o.createEl().style,
                t = "",
                n = {};
              if (
                ((n.oldIE = document.all && !document.addEventListener),
                (n.touch = "ontouchstart" in window),
                window.requestAnimationFrame &&
                  ((n.raf = window.requestAnimationFrame),
                  (n.caf = window.cancelAnimationFrame)),
                (n.pointerEvent =
                  navigator.pointerEnabled || navigator.msPointerEnabled),
                !n.pointerEvent)
              ) {
                var i = navigator.userAgent;
                if (/iP(hone|od)/.test(navigator.platform)) {
                  var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                  a &&
                    a.length > 0 &&
                    (a = parseInt(a[1], 10)) >= 1 &&
                    8 > a &&
                    (n.isOldIOSPhone = !0);
                }
                var r = i.match(/Android\s([0-9\.]*)/),
                  l = r ? r[1] : 0;
                (l = parseFloat(l)) >= 1 &&
                  (4.4 > l && (n.isOldAndroid = !0), (n.androidVersion = l)),
                  (n.isMobileOpera = /opera mini|opera mobi/i.test(i));
              }
              for (
                var s,
                  u,
                  c = ["transform", "perspective", "animationName"],
                  d = ["", "webkit", "Moz", "ms", "O"],
                  p = 0;
                4 > p;
                p++
              ) {
                t = d[p];
                for (var m = 0; 3 > m; m++)
                  (s = c[m]),
                    (u = t + (t ? s.charAt(0).toUpperCase() + s.slice(1) : s)),
                    !n[s] && u in e && (n[s] = u);
                t &&
                  !n.raf &&
                  ((t = t.toLowerCase()),
                  (n.raf = window[t + "RequestAnimationFrame"]),
                  n.raf &&
                    (n.caf =
                      window[t + "CancelAnimationFrame"] ||
                      window[t + "CancelRequestAnimationFrame"]));
              }
              if (!n.raf) {
                var f = 0;
                (n.raf = function (e) {
                  var t = new Date().getTime(),
                    n = Math.max(0, 16 - (t - f)),
                    i = window.setTimeout(function () {
                      e(t + n);
                    }, n);
                  return (f = t + n), i;
                }),
                  (n.caf = function (e) {
                    clearTimeout(e);
                  });
              }
              return (
                (n.svg =
                  !!document.createElementNS &&
                  !!document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "svg"
                  ).createSVGRect),
                (o.features = n),
                n
              );
            },
          };
          o.detectFeatures(),
            o.features.oldIE &&
              (o.bind = function (e, t, n, i) {
                t = t.split(" ");
                for (
                  var o,
                    a = (i ? "detach" : "attach") + "Event",
                    r = function () {
                      n.handleEvent.call(n);
                    },
                    l = 0;
                  l < t.length;
                  l++
                )
                  if ((o = t[l]))
                    if ("object" == typeof n && n.handleEvent) {
                      if (i) {
                        if (!n["oldIE" + o]) return !1;
                      } else n["oldIE" + o] = r;
                      e[a]("on" + o, n["oldIE" + o]);
                    } else e[a]("on" + o, n);
              });
          var a = this,
            r = {
              allowPanToNext: !0,
              spacing: 0.12,
              bgOpacity: 1,
              mouseUsed: !1,
              loop: !0,
              pinchToClose: !0,
              closeOnScroll: !0,
              closeOnVerticalDrag: !0,
              hideAnimationDuration: 333,
              showAnimationDuration: 333,
              showHideOpacity: !1,
              focus: !0,
              escKey: !0,
              arrowKeys: !0,
              mainScrollEndFriction: 0.35,
              panEndFriction: 0.35,
              isClickableElement: function (e) {
                return "A" === e.tagName;
              },
              getDoubleTapZoom: function (e, t) {
                return e || t.initialZoomLevel < 0.7 ? 1 : 1.5;
              },
              maxSpreadZoom: 2,
              scaleMode: "fit",
              modal: !0,
              alwaysFadeIn: !1,
            };
          o.extend(r, i);
          var l,
            s,
            u,
            c,
            d,
            p,
            m,
            f,
            h,
            y,
            v,
            x,
            g,
            w,
            b,
            C,
            I,
            D,
            T,
            M,
            S,
            A,
            k,
            E,
            O,
            R,
            Z,
            F,
            L,
            P,
            _,
            z,
            N,
            U,
            B,
            H,
            Y,
            W,
            G,
            V,
            X,
            K,
            q,
            $,
            J,
            j,
            Q,
            ee,
            te,
            ne,
            ie,
            oe,
            ae,
            re,
            le,
            se,
            ue = { x: 0, y: 0 },
            ce = { x: 0, y: 0 },
            de = { x: 0, y: 0 },
            pe = {},
            me = 0,
            fe = { x: 0, y: 0 },
            he = 0,
            ye = !0,
            ve = [],
            xe = {},
            ge = function (e, t) {
              o.extend(a, t.publicMethods), ve.push(e);
            },
            we = function (e) {
              var t = Nt();
              return e > t - 1 ? e - t : 0 > e ? t + e : e;
            },
            be = {},
            Ce = function (e, t) {
              return be[e] || (be[e] = []), be[e].push(t);
            },
            Ie = function (e) {
              var t = be[e];
              if (t) {
                var n = Array.prototype.slice.call(arguments);
                n.shift();
                for (var i = 0; i < t.length; i++) t[i].apply(a, n);
              }
            },
            De = function () {
              return new Date().getTime();
            },
            Te = function (e) {
              (re = e), (a.bg.style.opacity = e * r.bgOpacity);
            },
            Me = function (e, t, n, i) {
              e[k] = x + t + "px, " + n + "px" + g + " scale(" + i + ")";
            },
            Se = function () {
              te && Me(te, de.x, de.y, y);
            },
            Ae = function (e) {
              e.container &&
                Me(
                  e.container.style,
                  e.initialPosition.x,
                  e.initialPosition.y,
                  e.initialZoomLevel
                );
            },
            ke = function (e, t) {
              t[k] = x + e + "px, 0px" + g;
            },
            Ee = function (e, t) {
              if (!r.loop && t) {
                var n = c + (fe.x * me - e) / fe.x,
                  i = Math.round(e - st.x);
                ((0 > n && i > 0) || (n >= Nt() - 1 && 0 > i)) &&
                  (e = st.x + i * r.mainScrollEndFriction);
              }
              (st.x = e), ke(e, d);
            },
            Oe = function (e, t) {
              var n = ut[e] - C[e];
              return ce[e] + ue[e] + n - n * (t / v);
            },
            Re = function (e, t) {
              (e.x = t.x), (e.y = t.y), t.id && (e.id = t.id);
            },
            Ze = function (e) {
              (e.x = Math.round(e.x)), (e.y = Math.round(e.y));
            },
            Fe = null,
            Le = function () {
              Fe &&
                (o.unbind(document, "mousemove", Le),
                o.addClass(e, "pswp--has_mouse"),
                (r.mouseUsed = !0),
                Ie("mouseUsed")),
                (Fe = setTimeout(function () {
                  Fe = null;
                }, 100));
            },
            Pe = function (e, t) {
              var n = Wt(a.currItem, pe, e);
              return t && (ee = n), n;
            },
            _e = function (e) {
              return e || (e = a.currItem), e.initialZoomLevel;
            },
            ze = function (e) {
              return e || (e = a.currItem), e.w > 0 ? r.maxSpreadZoom : 1;
            },
            Ne = function (e, t, n, i) {
              return i === a.currItem.initialZoomLevel
                ? ((n[e] = a.currItem.initialPosition[e]), !0)
                : ((n[e] = Oe(e, i)),
                  n[e] > t.min[e]
                    ? ((n[e] = t.min[e]), !0)
                    : n[e] < t.max[e] && ((n[e] = t.max[e]), !0));
            },
            Ue = function (e) {
              var t = "";
              r.escKey && 27 === e.keyCode
                ? (t = "close")
                : r.arrowKeys &&
                  (37 === e.keyCode
                    ? (t = "prev")
                    : 39 === e.keyCode && (t = "next")),
                t &&
                  (e.ctrlKey ||
                    e.altKey ||
                    e.shiftKey ||
                    e.metaKey ||
                    (e.preventDefault
                      ? e.preventDefault()
                      : (e.returnValue = !1),
                    a[t]()));
            },
            Be = function (e) {
              e &&
                (K || X || ne || Y) &&
                (e.preventDefault(), e.stopPropagation());
            },
            He = function () {
              a.setScrollOffset(0, o.getScrollY());
            },
            Ye = {},
            We = 0,
            Ge = function (e) {
              Ye[e] && (Ye[e].raf && Z(Ye[e].raf), We--, delete Ye[e]);
            },
            Ve = function (e) {
              Ye[e] && Ge(e), Ye[e] || (We++, (Ye[e] = {}));
            },
            Xe = function () {
              for (var e in Ye) Ye.hasOwnProperty(e) && Ge(e);
            },
            Ke = function (e, t, n, i, o, a, r) {
              var l,
                s = De();
              Ve(e);
              var u = function () {
                if (Ye[e]) {
                  if ((l = De() - s) >= i) return Ge(e), a(n), void (r && r());
                  a((n - t) * o(l / i) + t), (Ye[e].raf = R(u));
                }
              };
              u();
            },
            qe = {
              shout: Ie,
              listen: Ce,
              viewportSize: pe,
              options: r,
              isMainScrollAnimating: function () {
                return ne;
              },
              getZoomLevel: function () {
                return y;
              },
              getCurrentIndex: function () {
                return c;
              },
              isDragging: function () {
                return G;
              },
              isZooming: function () {
                return j;
              },
              setScrollOffset: function (e, t) {
                (C.x = e), (_ = C.y = t);
              },
              applyZoomPan: function (e, t, n) {
                (de.x = t), (de.y = n), (y = e), Se();
              },
              init: function () {
                if (!l && !s) {
                  var n;
                  (a.framework = o),
                    (a.template = e),
                    (a.bg = o.getChildByClass(e, "pswp__bg")),
                    (F = e.className),
                    (l = !0),
                    (z = o.detectFeatures()),
                    (R = z.raf),
                    (Z = z.caf),
                    (k = z.transform),
                    (P = z.oldIE),
                    (a.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap")),
                    (a.container = o.getChildByClass(
                      a.scrollWrap,
                      "pswp__container"
                    )),
                    (d = a.container.style),
                    (a.itemHolders = I =
                      [
                        { el: a.container.children[0], wrap: 0, index: -1 },
                        { el: a.container.children[1], wrap: 0, index: -1 },
                        { el: a.container.children[2], wrap: 0, index: -1 },
                      ]),
                    (I[0].el.style.display = I[2].el.style.display = "none"),
                    (function () {
                      if (k) {
                        var t = z.perspective && !O;
                        return (
                          (x = "translate" + (t ? "3d(" : "(")),
                          void (g = z.perspective ? ", 0px)" : ")")
                        );
                      }
                      (k = "left"),
                        o.addClass(e, "pswp--ie"),
                        (ke = function (e, t) {
                          t.left = e + "px";
                        }),
                        (Ae = function (e) {
                          var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                            n = e.container.style,
                            i = t * e.w,
                            o = t * e.h;
                          (n.width = i + "px"),
                            (n.height = o + "px"),
                            (n.left = e.initialPosition.x + "px"),
                            (n.top = e.initialPosition.y + "px");
                        }),
                        (Se = function () {
                          if (te) {
                            var e = te,
                              t = a.currItem,
                              n = t.fitRatio > 1 ? 1 : t.fitRatio,
                              i = n * t.w,
                              o = n * t.h;
                            (e.width = i + "px"),
                              (e.height = o + "px"),
                              (e.left = de.x + "px"),
                              (e.top = de.y + "px");
                          }
                        });
                    })(),
                    (h = {
                      resize: a.updateSize,
                      scroll: He,
                      keydown: Ue,
                      click: Be,
                    });
                  var i = z.isOldIOSPhone || z.isOldAndroid || z.isMobileOpera;
                  for (
                    (z.animationName && z.transform && !i) ||
                      (r.showAnimationDuration = r.hideAnimationDuration = 0),
                      n = 0;
                    n < ve.length;
                    n++
                  )
                    a["init" + ve[n]]();
                  t && (a.ui = new t(a, o)).init(),
                    Ie("firstUpdate"),
                    (c = c || r.index || 0),
                    (isNaN(c) || 0 > c || c >= Nt()) && (c = 0),
                    (a.currItem = zt(c)),
                    (z.isOldIOSPhone || z.isOldAndroid) && (ye = !1),
                    r.modal &&
                      (e.setAttribute("aria-hidden", "false"),
                      ye
                        ? (e.style.position = "fixed")
                        : ((e.style.position = "absolute"),
                          (e.style.top = o.getScrollY() + "px"))),
                    void 0 === _ &&
                      (Ie("initialLayout"), (_ = L = o.getScrollY()));
                  var u = "pswp--open ";
                  for (
                    r.mainClass && (u += r.mainClass + " "),
                      r.showHideOpacity && (u += "pswp--animate_opacity "),
                      u += O ? "pswp--touch" : "pswp--notouch",
                      u += z.animationName ? " pswp--css_animation" : "",
                      u += z.svg ? " pswp--svg" : "",
                      o.addClass(e, u),
                      a.updateSize(),
                      p = -1,
                      he = null,
                      n = 0;
                    3 > n;
                    n++
                  )
                    ke((n + p) * fe.x, I[n].el.style);
                  P || o.bind(a.scrollWrap, f, a),
                    Ce("initialZoomInEnd", function () {
                      a.setContent(I[0], c - 1),
                        a.setContent(I[2], c + 1),
                        (I[0].el.style.display = I[2].el.style.display =
                          "block"),
                        r.focus && e.focus(),
                        o.bind(document, "keydown", a),
                        z.transform && o.bind(a.scrollWrap, "click", a),
                        r.mouseUsed || o.bind(document, "mousemove", Le),
                        o.bind(window, "resize scroll", a),
                        Ie("bindEvents");
                    }),
                    a.setContent(I[1], c),
                    a.updateCurrItem(),
                    Ie("afterInit"),
                    ye ||
                      (w = setInterval(function () {
                        We ||
                          G ||
                          j ||
                          y !== a.currItem.initialZoomLevel ||
                          a.updateSize();
                      }, 1e3)),
                    o.addClass(e, "pswp--visible");
                }
              },
              close: function () {
                l &&
                  ((l = !1),
                  (s = !0),
                  Ie("close"),
                  o.unbind(window, "resize", a),
                  o.unbind(window, "scroll", h.scroll),
                  o.unbind(document, "keydown", a),
                  o.unbind(document, "mousemove", Le),
                  z.transform && o.unbind(a.scrollWrap, "click", a),
                  G && o.unbind(window, m, a),
                  Ie("unbindEvents"),
                  Ut(a.currItem, null, !0, a.destroy));
              },
              destroy: function () {
                Ie("destroy"),
                  Ft && clearTimeout(Ft),
                  r.modal &&
                    (e.setAttribute("aria-hidden", "true"), (e.className = F)),
                  w && clearInterval(w),
                  o.unbind(a.scrollWrap, f, a),
                  o.unbind(window, "scroll", a),
                  pt(),
                  Xe(),
                  (be = null);
              },
              panTo: function (e, t, n) {
                n ||
                  (e > ee.min.x
                    ? (e = ee.min.x)
                    : e < ee.max.x && (e = ee.max.x),
                  t > ee.min.y
                    ? (t = ee.min.y)
                    : t < ee.max.y && (t = ee.max.y)),
                  (de.x = e),
                  (de.y = t),
                  Se();
              },
              handleEvent: function (e) {
                (e = e || window.event), h[e.type] && h[e.type](e);
              },
              goTo: function (e) {
                var t = (e = we(e)) - c;
                (he = t),
                  (c = e),
                  (a.currItem = zt(c)),
                  (me -= t),
                  Ee(fe.x * me),
                  Xe(),
                  (ne = !1),
                  a.updateCurrItem();
              },
              next: function () {
                a.goTo(c + 1);
              },
              prev: function () {
                a.goTo(c - 1);
              },
              updateCurrZoomItem: function (e) {
                if ((e && Ie("beforeChange", 0), I[1].el.children.length)) {
                  var t = I[1].el.children[0];
                  te = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null;
                } else te = null;
                (ee = a.currItem.bounds),
                  (v = y = a.currItem.initialZoomLevel),
                  (de.x = ee.center.x),
                  (de.y = ee.center.y),
                  e && Ie("afterChange");
              },
              invalidateCurrItems: function () {
                b = !0;
                for (var e = 0; 3 > e; e++)
                  I[e].item && (I[e].item.needsUpdate = !0);
              },
              updateCurrItem: function (e) {
                if (0 !== he) {
                  var t,
                    n = Math.abs(he);
                  if (!(e && 2 > n)) {
                    (a.currItem = zt(c)),
                      Ie("beforeChange", he),
                      n >= 3 && ((p += he + (he > 0 ? -3 : 3)), (n = 3));
                    for (var i = 0; n > i; i++)
                      he > 0
                        ? ((t = I.shift()),
                          (I[2] = t),
                          p++,
                          ke((p + 2) * fe.x, t.el.style),
                          a.setContent(t, c - n + i + 1 + 1))
                        : ((t = I.pop()),
                          I.unshift(t),
                          p--,
                          ke(p * fe.x, t.el.style),
                          a.setContent(t, c + n - i - 1 - 1));
                    if (te && 1 === Math.abs(he)) {
                      var o = zt(D);
                      o.initialZoomLevel !== y && (Wt(o, pe), Ae(o));
                    }
                    (he = 0),
                      a.updateCurrZoomItem(),
                      (D = c),
                      Ie("afterChange");
                  }
                }
              },
              updateSize: function (t) {
                if (!ye) {
                  var n = o.getScrollY();
                  if (
                    (_ !== n && ((e.style.top = n + "px"), (_ = n)),
                    !t &&
                      xe.x === window.innerWidth &&
                      xe.y === window.innerHeight)
                  )
                    return;
                  (xe.x = window.innerWidth),
                    (xe.y = window.innerHeight),
                    (e.style.height = xe.y + "px");
                }
                if (
                  ((pe.x = a.scrollWrap.clientWidth),
                  (pe.y = a.scrollWrap.clientHeight),
                  (C = { x: 0, y: _ }),
                  (fe.x = pe.x + Math.round(pe.x * r.spacing)),
                  (fe.y = pe.y),
                  Ee(fe.x * me),
                  Ie("beforeResize"),
                  void 0 !== p)
                ) {
                  for (var i, l, s, u = 0; 3 > u; u++)
                    (i = I[u]),
                      ke((u + p) * fe.x, i.el.style),
                      (s = c + u - 1),
                      r.loop && Nt() > 2 && (s = we(s)),
                      (l = zt(s)) && (b || l.needsUpdate || !l.bounds)
                        ? (a.cleanSlide(l),
                          a.setContent(i, s),
                          1 === u &&
                            ((a.currItem = l), a.updateCurrZoomItem(!0)),
                          (l.needsUpdate = !1))
                        : -1 === i.index && s >= 0 && a.setContent(i, s),
                      l && l.container && (Wt(l, pe), Ae(l));
                  b = !1;
                }
                (v = y = a.currItem.initialZoomLevel),
                  (ee = a.currItem.bounds) &&
                    ((de.x = ee.center.x), (de.y = ee.center.y), Se()),
                  Ie("resize");
              },
              zoomTo: function (e, t, n, i, a) {
                t &&
                  ((v = y),
                  (ut.x = Math.abs(t.x) - de.x),
                  (ut.y = Math.abs(t.y) - de.y),
                  Re(ce, de));
                var r = Pe(e, !1),
                  l = {};
                Ne("x", r, l, e), Ne("y", r, l, e);
                var s = y,
                  u = de.x,
                  c = de.y;
                Ze(l);
                var d = function (t) {
                  1 === t
                    ? ((y = e), (de.x = l.x), (de.y = l.y))
                    : ((y = (e - s) * t + s),
                      (de.x = (l.x - u) * t + u),
                      (de.y = (l.y - c) * t + c)),
                    a && a(t),
                    Se();
                };
                n
                  ? Ke("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, d)
                  : d(1);
              },
            },
            $e = {},
            Je = {},
            je = {},
            Qe = {},
            et = {},
            tt = [],
            nt = {},
            it = [],
            ot = {},
            at = 0,
            rt = { x: 0, y: 0 },
            lt = 0,
            st = { x: 0, y: 0 },
            ut = { x: 0, y: 0 },
            ct = { x: 0, y: 0 },
            dt = function (e, t) {
              return (
                (ot.x = Math.abs(e.x - t.x)),
                (ot.y = Math.abs(e.y - t.y)),
                Math.sqrt(ot.x * ot.x + ot.y * ot.y)
              );
            },
            pt = function () {
              q && (Z(q), (q = null));
            },
            mt = function () {
              G && ((q = R(mt)), St());
            },
            ft = function (e, t) {
              return (
                !!e &&
                !(
                  e.className && e.className.indexOf("pswp__scroll-wrap") > -1
                ) &&
                (t(e) ? e : ft(e.parentNode, t))
              );
            },
            ht = {},
            yt = function (e, t) {
              return (
                (ht.prevent = !ft(e.target, r.isClickableElement)),
                Ie("preventDragEvent", e, t, ht),
                ht.prevent
              );
            },
            vt = function (e, t) {
              return (t.x = e.pageX), (t.y = e.pageY), (t.id = e.identifier), t;
            },
            xt = function (e, t, n) {
              (n.x = 0.5 * (e.x + t.x)), (n.y = 0.5 * (e.y + t.y));
            },
            gt = function () {
              var e = de.y - a.currItem.initialPosition.y;
              return 1 - Math.abs(e / (pe.y / 2));
            },
            wt = {},
            bt = {},
            Ct = [],
            It = function (e) {
              for (; Ct.length > 0; ) Ct.pop();
              return (
                E
                  ? ((se = 0),
                    tt.forEach(function (e) {
                      0 === se ? (Ct[0] = e) : 1 === se && (Ct[1] = e), se++;
                    }))
                  : e.type.indexOf("touch") > -1
                  ? e.touches &&
                    e.touches.length > 0 &&
                    ((Ct[0] = vt(e.touches[0], wt)),
                    e.touches.length > 1 && (Ct[1] = vt(e.touches[1], bt)))
                  : ((wt.x = e.pageX),
                    (wt.y = e.pageY),
                    (wt.id = ""),
                    (Ct[0] = wt)),
                Ct
              );
            },
            Dt = function (e, t) {
              var n,
                i,
                o,
                l,
                s = de[e] + t[e],
                u = t[e] > 0,
                c = st.x + t.x,
                d = st.x - nt.x;
              return (
                (n = s > ee.min[e] || s < ee.max[e] ? r.panEndFriction : 1),
                (s = de[e] + t[e] * n),
                (!r.allowPanToNext && y !== a.currItem.initialZoomLevel) ||
                (te
                  ? "h" !== ie ||
                    "x" !== e ||
                    X ||
                    (u
                      ? (s > ee.min[e] &&
                          ((n = r.panEndFriction),
                          ee.min[e],
                          (i = ee.min[e] - ce[e])),
                        (0 >= i || 0 > d) && Nt() > 1
                          ? ((l = c), 0 > d && c > nt.x && (l = nt.x))
                          : ee.min.x !== ee.max.x && (o = s))
                      : (s < ee.max[e] &&
                          ((n = r.panEndFriction),
                          ee.max[e],
                          (i = ce[e] - ee.max[e])),
                        (0 >= i || d > 0) && Nt() > 1
                          ? ((l = c), d > 0 && c < nt.x && (l = nt.x))
                          : ee.min.x !== ee.max.x && (o = s)))
                  : (l = c),
                "x" !== e)
                  ? void (
                      ne ||
                      $ ||
                      (y > a.currItem.fitRatio && (de[e] += t[e] * n))
                    )
                  : (void 0 !== l && (Ee(l, !0), ($ = l !== nt.x)),
                    ee.min.x !== ee.max.x &&
                      (void 0 !== o ? (de.x = o) : $ || (de.x += t.x * n)),
                    void 0 !== l)
              );
            },
            Tt = function (e) {
              if (!("mousedown" === e.type && e.button > 0)) {
                if (_t) return void e.preventDefault();
                if (!W || "mousedown" !== e.type) {
                  if ((yt(e, !0) && e.preventDefault(), Ie("pointerDown"), E)) {
                    var t = o.arraySearch(tt, e.pointerId, "id");
                    0 > t && (t = tt.length),
                      (tt[t] = { x: e.pageX, y: e.pageY, id: e.pointerId });
                  }
                  var n = It(e),
                    i = n.length;
                  (J = null),
                    Xe(),
                    (G && 1 !== i) ||
                      ((G = oe = !0),
                      o.bind(window, m, a),
                      (H = le = ae = Y = $ = K = V = X = !1),
                      (ie = null),
                      Ie("firstTouchStart", n),
                      Re(ce, de),
                      (ue.x = ue.y = 0),
                      Re(Qe, n[0]),
                      Re(et, Qe),
                      (nt.x = fe.x * me),
                      (it = [{ x: Qe.x, y: Qe.y }]),
                      (U = N = De()),
                      Pe(y, !0),
                      pt(),
                      mt()),
                    !j &&
                      i > 1 &&
                      !ne &&
                      !$ &&
                      ((v = y),
                      (X = !1),
                      (j = V = !0),
                      (ue.y = ue.x = 0),
                      Re(ce, de),
                      Re($e, n[0]),
                      Re(Je, n[1]),
                      xt($e, Je, ct),
                      (ut.x = Math.abs(ct.x) - de.x),
                      (ut.y = Math.abs(ct.y) - de.y),
                      (Q = dt($e, Je)));
                }
              }
            },
            Mt = function (e) {
              if ((e.preventDefault(), E)) {
                var t = o.arraySearch(tt, e.pointerId, "id");
                if (t > -1) {
                  var n = tt[t];
                  (n.x = e.pageX), (n.y = e.pageY);
                }
              }
              if (G) {
                var i = It(e);
                if (ie || K || j) J = i;
                else {
                  var a = Math.abs(i[0].x - Qe.x) - Math.abs(i[0].y - Qe.y);
                  Math.abs(a) >= 10 && ((ie = a > 0 ? "h" : "v"), (J = i));
                }
              }
            },
            St = function () {
              if (J) {
                var e = J.length;
                if (0 !== e)
                  if (
                    (Re($e, J[0]),
                    (je.x = $e.x - Qe.x),
                    (je.y = $e.y - Qe.y),
                    j && e > 1)
                  ) {
                    if (
                      ((Qe.x = $e.x),
                      (Qe.y = $e.y),
                      !je.x &&
                        !je.y &&
                        (function (e, t) {
                          return e.x === t.x && e.y === t.y;
                        })(J[1], Je))
                    )
                      return;
                    Re(Je, J[1]), X || ((X = !0), Ie("zoomGestureStarted"));
                    var t = dt($e, Je),
                      n = Rt(t);
                    n >
                      a.currItem.initialZoomLevel +
                        a.currItem.initialZoomLevel / 15 && (le = !0);
                    var i = 1,
                      o = _e(),
                      l = ze();
                    if (o > n)
                      if (
                        r.pinchToClose &&
                        !le &&
                        v <= a.currItem.initialZoomLevel
                      ) {
                        var s = 1 - (o - n) / (o / 1.2);
                        Te(s), Ie("onPinchClose", s), (ae = !0);
                      } else
                        (i = (o - n) / o) > 1 && (i = 1), (n = o - i * (o / 3));
                    else
                      n > l &&
                        ((i = (n - l) / (6 * o)) > 1 && (i = 1),
                        (n = l + i * o));
                    0 > i && (i = 0),
                      xt($e, Je, rt),
                      (ue.x += rt.x - ct.x),
                      (ue.y += rt.y - ct.y),
                      Re(ct, rt),
                      (de.x = Oe("x", n)),
                      (de.y = Oe("y", n)),
                      (H = n > y),
                      (y = n),
                      Se();
                  } else {
                    if (!ie) return;
                    if (
                      (oe &&
                        ((oe = !1),
                        Math.abs(je.x) >= 10 && (je.x -= J[0].x - et.x),
                        Math.abs(je.y) >= 10 && (je.y -= J[0].y - et.y)),
                      (Qe.x = $e.x),
                      (Qe.y = $e.y),
                      0 === je.x && 0 === je.y)
                    )
                      return;
                    if (
                      "v" === ie &&
                      r.closeOnVerticalDrag &&
                      "fit" === r.scaleMode &&
                      y === a.currItem.initialZoomLevel
                    ) {
                      (ue.y += je.y), (de.y += je.y);
                      var u = gt();
                      return (
                        (Y = !0), Ie("onVerticalDrag", u), Te(u), void Se()
                      );
                    }
                    (function (e, t, n) {
                      if (e - U > 50) {
                        var i = it.length > 2 ? it.shift() : {};
                        (i.x = t), (i.y = n), it.push(i), (U = e);
                      }
                    })(De(), $e.x, $e.y),
                      (K = !0),
                      (ee = a.currItem.bounds),
                      Dt("x", je) || (Dt("y", je), Ze(de), Se());
                  }
              }
            },
            At = function (e) {
              if (z.isOldAndroid) {
                if (W && "mouseup" === e.type) return;
                e.type.indexOf("touch") > -1 &&
                  (clearTimeout(W),
                  (W = setTimeout(function () {
                    W = 0;
                  }, 600)));
              }
              var t;
              if ((Ie("pointerUp"), yt(e, !1) && e.preventDefault(), E)) {
                var n = o.arraySearch(tt, e.pointerId, "id");
                if (n > -1)
                  if (((t = tt.splice(n, 1)[0]), navigator.pointerEnabled))
                    t.type = e.pointerType || "mouse";
                  else {
                    (t.type = { 4: "mouse", 2: "touch", 3: "pen" }[
                      e.pointerType
                    ]),
                      t.type || (t.type = e.pointerType || "mouse");
                  }
              }
              var i,
                r = It(e),
                l = r.length;
              if (("mouseup" === e.type && (l = 0), 2 === l))
                return (J = null), !0;
              1 === l && Re(et, r[0]),
                0 !== l ||
                  ie ||
                  ne ||
                  (t ||
                    ("mouseup" === e.type
                      ? (t = { x: e.pageX, y: e.pageY, type: "mouse" })
                      : e.changedTouches &&
                        e.changedTouches[0] &&
                        (t = {
                          x: e.changedTouches[0].pageX,
                          y: e.changedTouches[0].pageY,
                          type: "touch",
                        })),
                  Ie("touchRelease", e, t));
              var s = -1;
              if (
                (0 === l &&
                  ((G = !1),
                  o.unbind(window, m, a),
                  pt(),
                  j ? (s = 0) : -1 !== lt && (s = De() - lt)),
                (lt = 1 === l ? De() : -1),
                (i = -1 !== s && 150 > s ? "zoom" : "swipe"),
                j &&
                  2 > l &&
                  ((j = !1),
                  1 === l && (i = "zoomPointerUp"),
                  Ie("zoomGestureEnded")),
                (J = null),
                K || X || ne || Y)
              )
                if ((Xe(), B || (B = kt()), B.calculateSwipeSpeed("x"), Y))
                  if (0.6 > gt()) a.close();
                  else {
                    var u = de.y,
                      c = re;
                    Ke(
                      "verticalDrag",
                      0,
                      1,
                      300,
                      o.easing.cubic.out,
                      function (e) {
                        (de.y = (a.currItem.initialPosition.y - u) * e + u),
                          Te((1 - c) * e + c),
                          Se();
                      }
                    ),
                      Ie("onVerticalDrag", 1);
                  }
                else {
                  if (($ || ne) && 0 === l) {
                    if (Ot(i, B)) return;
                    i = "zoomPointerUp";
                  }
                  if (!ne)
                    return "swipe" !== i
                      ? void Zt()
                      : void (!$ && y > a.currItem.fitRatio && Et(B));
                }
            },
            kt = function () {
              var e,
                t,
                n = {
                  lastFlickOffset: {},
                  lastFlickDist: {},
                  lastFlickSpeed: {},
                  slowDownRatio: {},
                  slowDownRatioReverse: {},
                  speedDecelerationRatio: {},
                  speedDecelerationRatioAbs: {},
                  distanceOffset: {},
                  backAnimDestination: {},
                  backAnimStarted: {},
                  calculateSwipeSpeed: function (i) {
                    it.length > 1
                      ? ((e = De() - U + 50), (t = it[it.length - 2][i]))
                      : ((e = De() - N), (t = et[i])),
                      (n.lastFlickOffset[i] = Qe[i] - t),
                      (n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i])),
                      (n.lastFlickSpeed[i] =
                        n.lastFlickDist[i] > 20 ? n.lastFlickOffset[i] / e : 0),
                      Math.abs(n.lastFlickSpeed[i]) < 0.1 &&
                        (n.lastFlickSpeed[i] = 0),
                      (n.slowDownRatio[i] = 0.95),
                      (n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i]),
                      (n.speedDecelerationRatio[i] = 1);
                  },
                  calculateOverBoundsAnimOffset: function (e, t) {
                    n.backAnimStarted[e] ||
                      (de[e] > ee.min[e]
                        ? (n.backAnimDestination[e] = ee.min[e])
                        : de[e] < ee.max[e] &&
                          (n.backAnimDestination[e] = ee.max[e]),
                      void 0 !== n.backAnimDestination[e] &&
                        ((n.slowDownRatio[e] = 0.7),
                        (n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e]),
                        n.speedDecelerationRatioAbs[e] < 0.05 &&
                          ((n.lastFlickSpeed[e] = 0),
                          (n.backAnimStarted[e] = !0),
                          Ke(
                            "bounceZoomPan" + e,
                            de[e],
                            n.backAnimDestination[e],
                            t || 300,
                            o.easing.sine.out,
                            function (t) {
                              (de[e] = t), Se();
                            }
                          ))));
                  },
                  calculateAnimOffset: function (e) {
                    n.backAnimStarted[e] ||
                      ((n.speedDecelerationRatio[e] =
                        n.speedDecelerationRatio[e] *
                        (n.slowDownRatio[e] +
                          n.slowDownRatioReverse[e] -
                          (n.slowDownRatioReverse[e] * n.timeDiff) / 10)),
                      (n.speedDecelerationRatioAbs[e] = Math.abs(
                        n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]
                      )),
                      (n.distanceOffset[e] =
                        n.lastFlickSpeed[e] *
                        n.speedDecelerationRatio[e] *
                        n.timeDiff),
                      (de[e] += n.distanceOffset[e]));
                  },
                  panAnimLoop: function () {
                    return Ye.zoomPan &&
                      ((Ye.zoomPan.raf = R(n.panAnimLoop)),
                      (n.now = De()),
                      (n.timeDiff = n.now - n.lastNow),
                      (n.lastNow = n.now),
                      n.calculateAnimOffset("x"),
                      n.calculateAnimOffset("y"),
                      Se(),
                      n.calculateOverBoundsAnimOffset("x"),
                      n.calculateOverBoundsAnimOffset("y"),
                      n.speedDecelerationRatioAbs.x < 0.05 &&
                        n.speedDecelerationRatioAbs.y < 0.05)
                      ? ((de.x = Math.round(de.x)),
                        (de.y = Math.round(de.y)),
                        Se(),
                        void Ge("zoomPan"))
                      : void 0;
                  },
                };
              return n;
            },
            Et = function (e) {
              return (
                e.calculateSwipeSpeed("y"),
                (ee = a.currItem.bounds),
                (e.backAnimDestination = {}),
                (e.backAnimStarted = {}),
                Math.abs(e.lastFlickSpeed.x) <= 0.05 &&
                Math.abs(e.lastFlickSpeed.y) <= 0.05
                  ? ((e.speedDecelerationRatioAbs.x =
                      e.speedDecelerationRatioAbs.y =
                        0),
                    e.calculateOverBoundsAnimOffset("x"),
                    e.calculateOverBoundsAnimOffset("y"),
                    !0)
                  : (Ve("zoomPan"), (e.lastNow = De()), void e.panAnimLoop())
              );
            },
            Ot = function (e, t) {
              var n, i, l;
              if ((ne || (at = c), "swipe" === e)) {
                var s = Qe.x - et.x,
                  u = t.lastFlickDist.x < 10;
                s > 30 && (u || t.lastFlickOffset.x > 20)
                  ? (i = -1)
                  : -30 > s && (u || t.lastFlickOffset.x < -20) && (i = 1);
              }
              i &&
                (0 > (c += i)
                  ? ((c = r.loop ? Nt() - 1 : 0), (l = !0))
                  : c >= Nt() && ((c = r.loop ? 0 : Nt() - 1), (l = !0)),
                (!l || r.loop) && ((he += i), (me -= i), (n = !0)));
              var d,
                p = fe.x * me,
                m = Math.abs(p - st.x);
              return (
                n || p > st.x == t.lastFlickSpeed.x > 0
                  ? ((d =
                      Math.abs(t.lastFlickSpeed.x) > 0
                        ? m / Math.abs(t.lastFlickSpeed.x)
                        : 333),
                    (d = Math.min(d, 400)),
                    (d = Math.max(d, 250)))
                  : (d = 333),
                at === c && (n = !1),
                (ne = !0),
                Ie("mainScrollAnimStart"),
                Ke(
                  "mainScroll",
                  st.x,
                  p,
                  d,
                  o.easing.cubic.out,
                  Ee,
                  function () {
                    Xe(),
                      (ne = !1),
                      (at = -1),
                      (n || at !== c) && a.updateCurrItem(),
                      Ie("mainScrollAnimComplete");
                  }
                ),
                n && a.updateCurrItem(!0),
                n
              );
            },
            Rt = function (e) {
              return (1 / Q) * e * v;
            },
            Zt = function () {
              var e = y,
                t = _e(),
                n = ze();
              t > y ? (e = t) : y > n && (e = n);
              var i,
                r = re;
              return ae && !H && !le && t > y
                ? (a.close(), !0)
                : (ae &&
                    (i = function (e) {
                      Te((1 - r) * e + r);
                    }),
                  a.zoomTo(e, 0, 300, o.easing.cubic.out, i),
                  !0);
            };
          ge("Gestures", {
            publicMethods: {
              initGestures: function () {
                var e = function (e, t, n, i, o) {
                  (T = e + t), (M = e + n), (S = e + i), (A = o ? e + o : "");
                };
                (E = z.pointerEvent) && z.touch && (z.touch = !1),
                  E
                    ? navigator.pointerEnabled
                      ? e("pointer", "down", "move", "up", "cancel")
                      : e("MSPointer", "Down", "Move", "Up", "Cancel")
                    : z.touch
                    ? (e("touch", "start", "move", "end", "cancel"), (O = !0))
                    : e("mouse", "down", "move", "up"),
                  (m = M + " " + S + " " + A),
                  (f = T),
                  E &&
                    !O &&
                    (O =
                      navigator.maxTouchPoints > 1 ||
                      navigator.msMaxTouchPoints > 1),
                  (a.likelyTouchDevice = O),
                  (h[T] = Tt),
                  (h[M] = Mt),
                  (h[S] = At),
                  A && (h[A] = h[S]),
                  z.touch &&
                    ((f += " mousedown"),
                    (m += " mousemove mouseup"),
                    (h.mousedown = h[T]),
                    (h.mousemove = h[M]),
                    (h.mouseup = h[S])),
                  O || (r.allowPanToNext = !1);
              },
            },
          });
          var Ft,
            Lt,
            Pt,
            _t,
            zt,
            Nt,
            Ut = function (t, n, i, l) {
              var s;
              Ft && clearTimeout(Ft),
                (_t = !0),
                (Pt = !0),
                t.initialLayout
                  ? ((s = t.initialLayout), (t.initialLayout = null))
                  : (s = r.getThumbBoundsFn && r.getThumbBoundsFn(c));
              var d = i ? r.hideAnimationDuration : r.showAnimationDuration,
                p = function () {
                  Ge("initialZoom"),
                    i
                      ? (a.template.removeAttribute("style"),
                        a.bg.removeAttribute("style"))
                      : (Te(1),
                        n && (n.style.display = "block"),
                        o.addClass(e, "pswp--animated-in"),
                        Ie("initialZoom" + (i ? "OutEnd" : "InEnd"))),
                    l && l(),
                    (_t = !1);
                };
              if (d && s && void 0 !== s.x) {
                !(function () {
                  var n = u,
                    l =
                      !a.currItem.src ||
                      a.currItem.loadError ||
                      r.showHideOpacity;
                  t.miniImg &&
                    (t.miniImg.style.webkitBackfaceVisibility = "hidden"),
                    i ||
                      ((y = s.w / t.w),
                      (de.x = s.x),
                      (de.y = s.y - L),
                      (a[l ? "template" : "bg"].style.opacity = 0.001),
                      Se()),
                    Ve("initialZoom"),
                    i && !n && o.removeClass(e, "pswp--animated-in"),
                    l &&
                      (i
                        ? o[(n ? "remove" : "add") + "Class"](
                            e,
                            "pswp--animate_opacity"
                          )
                        : setTimeout(function () {
                            o.addClass(e, "pswp--animate_opacity");
                          }, 30)),
                    (Ft = setTimeout(
                      function () {
                        if ((Ie("initialZoom" + (i ? "Out" : "In")), i)) {
                          var a = s.w / t.w,
                            r = { x: de.x, y: de.y },
                            u = y,
                            c = re,
                            m = function (t) {
                              1 === t
                                ? ((y = a), (de.x = s.x), (de.y = s.y - _))
                                : ((y = (a - u) * t + u),
                                  (de.x = (s.x - r.x) * t + r.x),
                                  (de.y = (s.y - _ - r.y) * t + r.y)),
                                Se(),
                                l ? (e.style.opacity = 1 - t) : Te(c - t * c);
                            };
                          n
                            ? Ke(
                                "initialZoom",
                                0,
                                1,
                                d,
                                o.easing.cubic.out,
                                m,
                                p
                              )
                            : (m(1), (Ft = setTimeout(p, d + 20)));
                        } else
                          (y = t.initialZoomLevel),
                            Re(de, t.initialPosition),
                            Se(),
                            Te(1),
                            l ? (e.style.opacity = 1) : Te(1),
                            (Ft = setTimeout(p, d + 20));
                      },
                      i ? 25 : 90
                    ));
                })();
              } else
                Ie("initialZoom" + (i ? "Out" : "In")),
                  (y = t.initialZoomLevel),
                  Re(de, t.initialPosition),
                  Se(),
                  (e.style.opacity = i ? 0 : 1),
                  Te(1),
                  p();
            },
            Bt = {},
            Ht = [],
            Yt = {
              index: 0,
              errorMsg:
                '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
              forceProgressiveLoading: !1,
              preload: [1, 1],
              getNumItemsFn: function () {
                return Lt.length;
              },
            },
            Wt = function (e, t, n) {
              if (e.src && !e.loadError) {
                var i = !n;
                if (
                  (i &&
                    (e.vGap || (e.vGap = { top: 0, bottom: 0 }),
                    Ie("parseVerticalMargin", e)),
                  (Bt.x = t.x),
                  (Bt.y = t.y - e.vGap.top - e.vGap.bottom),
                  i)
                ) {
                  var o = Bt.x / e.w,
                    a = Bt.y / e.h;
                  e.fitRatio = a > o ? o : a;
                  var l = r.scaleMode;
                  "orig" === l ? (n = 1) : "fit" === l && (n = e.fitRatio),
                    n > 1 && (n = 1),
                    (e.initialZoomLevel = n),
                    e.bounds ||
                      (e.bounds = {
                        center: { x: 0, y: 0 },
                        max: { x: 0, y: 0 },
                        min: { x: 0, y: 0 },
                      });
                }
                if (!n) return;
                return (
                  (function (e, t, n) {
                    var i = e.bounds;
                    (i.center.x = Math.round((Bt.x - t) / 2)),
                      (i.center.y = Math.round((Bt.y - n) / 2) + e.vGap.top),
                      (i.max.x = t > Bt.x ? Math.round(Bt.x - t) : i.center.x),
                      (i.max.y =
                        n > Bt.y
                          ? Math.round(Bt.y - n) + e.vGap.top
                          : i.center.y),
                      (i.min.x = t > Bt.x ? 0 : i.center.x),
                      (i.min.y = n > Bt.y ? e.vGap.top : i.center.y);
                  })(e, e.w * n, e.h * n),
                  i &&
                    n === e.initialZoomLevel &&
                    (e.initialPosition = e.bounds.center),
                  e.bounds
                );
              }
              return (
                (e.w = e.h = 0),
                (e.initialZoomLevel = e.fitRatio = 1),
                (e.bounds = {
                  center: { x: 0, y: 0 },
                  max: { x: 0, y: 0 },
                  min: { x: 0, y: 0 },
                }),
                (e.initialPosition = e.bounds.center),
                e.bounds
              );
            },
            Gt = function (e, t, n, i, o, l) {
              if (!t.loadError) {
                var s,
                  u = a.isDragging() && !a.isZooming(),
                  d = e === c || a.isMainScrollAnimating() || u;
                !o && (O || r.alwaysFadeIn) && d && (s = !0),
                  i &&
                    (s && (i.style.opacity = 0),
                    (t.imageAppended = !0),
                    Kt(i, t.w, t.h),
                    n.appendChild(i),
                    s &&
                      setTimeout(function () {
                        (i.style.opacity = 1),
                          l &&
                            setTimeout(function () {
                              t &&
                                t.loaded &&
                                t.placeholder &&
                                ((t.placeholder.style.display = "none"),
                                (t.placeholder = null));
                            }, 500);
                      }, 50));
              }
            },
            Vt = function (e) {
              (e.loading = !0), (e.loaded = !1);
              var t = (e.img = o.createEl("pswp__img", "img")),
                n = function () {
                  (e.loading = !1),
                    (e.loaded = !0),
                    e.loadComplete ? e.loadComplete(e) : (e.img = null),
                    (t.onload = t.onerror = null),
                    (t = null);
                };
              return (
                (t.onload = n),
                (t.onerror = function () {
                  (e.loadError = !0), n();
                }),
                (t.src = e.src),
                t
              );
            },
            Xt = function (e, t) {
              return e.src && e.loadError && e.container
                ? (t && (e.container.innerHTML = ""),
                  (e.container.innerHTML = r.errorMsg.replace("%url%", e.src)),
                  !0)
                : void 0;
            },
            Kt = function (e, t, n) {
              (e.style.width = t + "px"), (e.style.height = n + "px");
            },
            qt = function () {
              if (Ht.length) {
                for (var e, t = 0; t < Ht.length; t++)
                  (e = Ht[t]).holder.index === e.index &&
                    Gt(e.index, e.item, e.baseDiv, e.img);
                Ht = [];
              }
            };
          ge("Controller", {
            publicMethods: {
              lazyLoadItem: function (e) {
                e = we(e);
                var t = zt(e);
                !t ||
                  t.loaded ||
                  t.loading ||
                  (Ie("gettingData", e, t), t.src && Vt(t));
              },
              initController: function () {
                o.extend(r, Yt, !0),
                  (a.items = Lt = n),
                  (zt = a.getItemAt),
                  (Nt = r.getNumItemsFn),
                  r.loop,
                  Nt() < 3 && (r.loop = !1),
                  Ce("beforeChange", function (e) {
                    var t,
                      n = r.preload,
                      i = null === e || e > 0,
                      o = Math.min(n[0], Nt()),
                      l = Math.min(n[1], Nt());
                    for (t = 1; (i ? l : o) >= t; t++) a.lazyLoadItem(c + t);
                    for (t = 1; (i ? o : l) >= t; t++) a.lazyLoadItem(c - t);
                  }),
                  Ce("initialLayout", function () {
                    a.currItem.initialLayout =
                      r.getThumbBoundsFn && r.getThumbBoundsFn(c);
                  }),
                  Ce("mainScrollAnimComplete", qt),
                  Ce("initialZoomInEnd", qt),
                  Ce("destroy", function () {
                    for (var e, t = 0; t < Lt.length; t++)
                      (e = Lt[t]).container && (e.container = null),
                        e.placeholder && (e.placeholder = null),
                        e.img && (e.img = null),
                        e.preloader && (e.preloader = null),
                        e.loadError && (e.loaded = e.loadError = !1);
                    Ht = null;
                  });
              },
              getItemAt: function (e) {
                return e >= 0 && void 0 !== Lt[e] && Lt[e];
              },
              allowProgressiveImg: function () {
                return (
                  r.forceProgressiveLoading ||
                  !O ||
                  r.mouseUsed ||
                  screen.width > 1200
                );
              },
              setContent: function (e, t) {
                r.loop && (t = we(t));
                var n = a.getItemAt(e.index);
                n && (n.container = null);
                var i,
                  s = a.getItemAt(t);
                if (s) {
                  Ie("gettingData", t, s), (e.index = t), (e.item = s);
                  var u = (s.container = o.createEl("pswp__zoom-wrap"));
                  if (
                    (!s.src &&
                      s.html &&
                      (s.html.tagName
                        ? u.appendChild(s.html)
                        : (u.innerHTML = s.html)),
                    Xt(s),
                    !s.src || s.loadError || s.loaded)
                  )
                    s.src &&
                      !s.loadError &&
                      (((i = o.createEl(
                        "pswp__img",
                        "img"
                      )).style.webkitBackfaceVisibility = "hidden"),
                      (i.style.opacity = 1),
                      (i.src = s.src),
                      Kt(i, s.w, s.h),
                      Gt(t, s, u, i, !0));
                  else {
                    if (
                      ((s.loadComplete = function (n) {
                        if (l) {
                          if (
                            (n.img &&
                              (n.img.style.webkitBackfaceVisibility = "hidden"),
                            e && e.index === t)
                          ) {
                            if (Xt(n, !0))
                              return (
                                (n.loadComplete = n.img = null),
                                Wt(n, pe),
                                Ae(n),
                                void (e.index === c && a.updateCurrZoomItem())
                              );
                            n.imageAppended
                              ? !_t &&
                                n.placeholder &&
                                ((n.placeholder.style.display = "none"),
                                (n.placeholder = null))
                              : z.transform && (ne || _t)
                              ? Ht.push({
                                  item: n,
                                  baseDiv: u,
                                  img: n.img,
                                  index: t,
                                  holder: e,
                                })
                              : Gt(t, n, u, n.img, ne || _t);
                          }
                          (n.loadComplete = null),
                            (n.img = null),
                            Ie("imageLoadComplete", t, n);
                        }
                      }),
                      o.features.transform)
                    ) {
                      var d = "pswp__img pswp__img--placeholder";
                      d += s.msrc ? "" : " pswp__img--placeholder--blank";
                      var p = o.createEl(d, s.msrc ? "img" : "");
                      s.msrc && (p.src = s.msrc),
                        Kt(p, s.w, s.h),
                        u.appendChild(p),
                        (s.placeholder = p);
                    }
                    s.loading || Vt(s),
                      a.allowProgressiveImg() &&
                        (!Pt && z.transform
                          ? Ht.push({
                              item: s,
                              baseDiv: u,
                              img: s.img,
                              index: t,
                              holder: e,
                            })
                          : Gt(t, s, u, s.img, !0, !0));
                  }
                  Wt(s, pe),
                    Pt || t !== c ? Ae(s) : ((te = u.style), Ut(s, i || s.img)),
                    (e.el.innerHTML = ""),
                    e.el.appendChild(u);
                } else e.el.innerHTML = "";
              },
              cleanSlide: function (e) {
                e.img && (e.img.onload = e.img.onerror = null),
                  (e.loaded = e.loading = e.img = e.imageAppended = !1);
              },
            },
          });
          var $t,
            Jt,
            jt = {},
            Qt = function (e, t, n) {
              var i = document.createEvent("CustomEvent"),
                o = {
                  origEvent: e,
                  target: e.target,
                  releasePoint: t,
                  pointerType: n || "touch",
                };
              i.initCustomEvent("pswpTap", !0, !0, o),
                e.target.dispatchEvent(i);
            };
          ge("Tap", {
            publicMethods: {
              initTap: function () {
                Ce("firstTouchStart", a.onTapStart),
                  Ce("touchRelease", a.onTapRelease),
                  Ce("destroy", function () {
                    (jt = {}), ($t = null);
                  });
              },
              onTapStart: function (e) {
                e.length > 1 && (clearTimeout($t), ($t = null));
              },
              onTapRelease: function (e, t) {
                if (t && !K && !V && !We) {
                  var n = t;
                  if (
                    $t &&
                    (clearTimeout($t),
                    ($t = null),
                    (function (e, t) {
                      return (
                        Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
                      );
                    })(n, jt))
                  )
                    return void Ie("doubleTap", n);
                  if ("mouse" === t.type) return void Qt(e, t, "mouse");
                  if (
                    "BUTTON" === e.target.tagName.toUpperCase() ||
                    o.hasClass(e.target, "pswp__single-tap")
                  )
                    return void Qt(e, t);
                  Re(jt, n),
                    ($t = setTimeout(function () {
                      Qt(e, t), ($t = null);
                    }, 300));
                }
              },
            },
          }),
            ge("DesktopZoom", {
              publicMethods: {
                initDesktopZoom: function () {
                  P ||
                    (O
                      ? Ce("mouseUsed", function () {
                          a.setupDesktopZoom();
                        })
                      : a.setupDesktopZoom(!0));
                },
                setupDesktopZoom: function (t) {
                  Jt = {};
                  var n = "wheel mousewheel DOMMouseScroll";
                  Ce("bindEvents", function () {
                    o.bind(e, n, a.handleMouseWheel);
                  }),
                    Ce("unbindEvents", function () {
                      Jt && o.unbind(e, n, a.handleMouseWheel);
                    }),
                    (a.mouseZoomedIn = !1);
                  var i,
                    r = function () {
                      a.mouseZoomedIn &&
                        (o.removeClass(e, "pswp--zoomed-in"),
                        (a.mouseZoomedIn = !1)),
                        1 > y
                          ? o.addClass(e, "pswp--zoom-allowed")
                          : o.removeClass(e, "pswp--zoom-allowed"),
                        l();
                    },
                    l = function () {
                      i && (o.removeClass(e, "pswp--dragging"), (i = !1));
                    };
                  Ce("resize", r),
                    Ce("afterChange", r),
                    Ce("pointerDown", function () {
                      a.mouseZoomedIn &&
                        ((i = !0), o.addClass(e, "pswp--dragging"));
                    }),
                    Ce("pointerUp", l),
                    t || r();
                },
                handleMouseWheel: function (e) {
                  if (y <= a.currItem.fitRatio)
                    return (
                      r.closeOnScroll
                        ? k && Math.abs(e.deltaY) > 2 && ((u = !0), a.close())
                        : e.preventDefault(),
                      !0
                    );
                  if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    (Jt.x = 0),
                    "deltaX" in e)
                  )
                    1 === e.deltaMode
                      ? ((Jt.x = 18 * e.deltaX), (Jt.y = 18 * e.deltaY))
                      : ((Jt.x = e.deltaX), (Jt.y = e.deltaY));
                  else if ("wheelDelta" in e)
                    e.wheelDeltaX && (Jt.x = -0.16 * e.wheelDeltaX),
                      (Jt.y = e.wheelDeltaY
                        ? -0.16 * e.wheelDeltaY
                        : -0.16 * e.wheelDelta);
                  else {
                    if (!("detail" in e)) return;
                    Jt.y = e.detail;
                  }
                  Pe(y, !0), a.panTo(de.x - Jt.x, de.y - Jt.y);
                },
                toggleDesktopZoom: function (t) {
                  t = t || { x: pe.x / 2, y: pe.y / 2 + _ };
                  var n = r.getDoubleTapZoom(!0, a.currItem),
                    i = y === n;
                  (a.mouseZoomedIn = !i),
                    a.zoomTo(i ? a.currItem.initialZoomLevel : n, t, 333),
                    o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in");
                },
              },
            });
          var en,
            tn,
            nn,
            on,
            an,
            rn,
            ln,
            sn,
            un,
            cn,
            dn,
            pn,
            mn = { history: !0, galleryUID: 1 },
            fn = function () {
              return dn.hash.substring(1);
            },
            hn = function () {
              en && clearTimeout(en), nn && clearTimeout(nn);
            },
            yn = function () {
              var e = fn(),
                t = {};
              if (e.length < 5) return t;
              for (var n = e.split("&"), i = 0; i < n.length; i++)
                if (n[i]) {
                  var o = n[i].split("=");
                  o.length < 2 || (t[o[0]] = o[1]);
                }
              return (
                (t.pid = parseInt(t.pid, 10) - 1), t.pid < 0 && (t.pid = 0), t
              );
            },
            vn = function () {
              if ((nn && clearTimeout(nn), We || G)) nn = setTimeout(vn, 500);
              else {
                on ? clearTimeout(tn) : (on = !0);
                var e = ln + "&gid=" + r.galleryUID + "&pid=" + (c + 1);
                sn || (-1 === dn.hash.indexOf(e) && (cn = !0));
                var t = dn.href.split("#")[0] + "#" + e;
                pn
                  ? "#" + e !== window.location.hash &&
                    history[sn ? "replaceState" : "pushState"](
                      "",
                      document.title,
                      t
                    )
                  : sn
                  ? dn.replace(t)
                  : (dn.hash = e),
                  (sn = !0),
                  (tn = setTimeout(function () {
                    on = !1;
                  }, 60));
              }
            };
          ge("History", {
            publicMethods: {
              initHistory: function () {
                if ((o.extend(r, mn, !0), r.history)) {
                  (dn = window.location),
                    (cn = !1),
                    (un = !1),
                    (sn = !1),
                    (ln = fn()),
                    (pn = "pushState" in history),
                    ln.indexOf("gid=") > -1 &&
                      (ln = (ln = ln.split("&gid=")[0]).split("?gid=")[0]),
                    Ce("afterChange", a.updateURL),
                    Ce("unbindEvents", function () {
                      o.unbind(window, "hashchange", a.onHashChange);
                    });
                  var e = function () {
                    (rn = !0),
                      un ||
                        (cn
                          ? history.back()
                          : ln
                          ? (dn.hash = ln)
                          : pn
                          ? history.pushState(
                              "",
                              document.title,
                              dn.pathname + dn.search
                            )
                          : (dn.hash = "")),
                      hn();
                  };
                  Ce("unbindEvents", function () {
                    u && e();
                  }),
                    Ce("destroy", function () {
                      rn || e();
                    }),
                    Ce("firstUpdate", function () {
                      c = yn().pid;
                    });
                  var t = ln.indexOf("pid=");
                  t > -1 &&
                    "&" === (ln = ln.substring(0, t)).slice(-1) &&
                    (ln = ln.slice(0, -1)),
                    setTimeout(function () {
                      l && o.bind(window, "hashchange", a.onHashChange);
                    }, 40);
                }
              },
              onHashChange: function () {
                return fn() === ln
                  ? ((un = !0), void a.close())
                  : void (on || ((an = !0), a.goTo(yn().pid), (an = !1)));
              },
              updateURL: function () {
                hn(), an || (sn ? (en = setTimeout(vn, 800)) : vn());
              },
            },
          }),
            o.extend(a, qe);
        };
      }),
        void 0 === (o = i.call(t, n, t, e)) || (e.exports = o);
    },
  },
]);
