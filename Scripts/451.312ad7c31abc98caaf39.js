/*! For license information please see 451.312ad7c31abc98caaf39.js.LICENSE.txt */
"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [451],
  {
    2451: (e, t, n) => {
      n.r(t),
        n.d(t, {
          $mobx: () => A,
          FlowCancellationError: () => xt,
          IDerivationState: () => $,
          ObservableMap: () => gn,
          ObservableSet: () => On,
          Reaction: () => Xe,
          _allowStateChanges: () => Ae,
          _allowStateChangesInsideComputed: () => Ee,
          _allowStateReadsEnd: () => pe,
          _allowStateReadsStart: () => he,
          _endAction: () => Oe,
          _getAdministration: () => Dn,
          _getGlobalState: () => Ie,
          _interceptReads: () => Tt,
          _isComputingDerivation: () => ie,
          _resetGlobalState: () => Me,
          _startAction: () => we,
          action: () => it,
          autorun: () => ct,
          comparer: () => x,
          computed: () => te,
          configure: () => yt,
          createAtom: () => E,
          decorate: () => bt,
          entries: () => Ut,
          extendObservable: () => gt,
          flow: () => Ct,
          get: () => zt,
          getAtom: () => Tn,
          getDebugName: () => Pn,
          getDependencyTree: () => Ot,
          getObserverTree: () => St,
          has: () => Kt,
          intercept: () => Dt,
          isAction: () => st,
          isArrayLike: () => v,
          isBoxedObservable: () => je,
          isComputed: () => kt,
          isComputedProp: () => Nt,
          isFlowCancellationError: () => jt,
          isObservable: () => Bt,
          isObservableArray: () => vn,
          isObservableMap: () => mn,
          isObservableObject: () => Rn,
          isObservableProp: () => Lt,
          isObservableSet: () => An,
          keys: () => It,
          observable: () => Y,
          observe: () => Ht,
          onBecomeObserved: () => pt,
          onBecomeUnobserved: () => dt,
          onReactionError: () => Ye,
          reaction: () => ht,
          remove: () => qt,
          runInAction: () => at,
          set: () => Gt,
          spy: () => nt,
          toJS: () => Yt,
          trace: () => Ft,
          transaction: () => $t,
          untracked: () => ce,
          values: () => Mt,
          when: () => Qt,
        });
      var r =
          "An invariant failed, however the error is obfuscated because this is a production build.",
        o = [];
      Object.freeze(o);
      var i = {};
      function a() {
        return ++Le.mobxGuid;
      }
      function s(e) {
        throw (u(!1, e), "X");
      }
      function u(e, t) {
        if (!e) throw new Error("[mobx] " + (t || r));
      }
      function c(e) {
        var t = !1;
        return function () {
          if (!t) return (t = !0), e.apply(this, arguments);
        };
      }
      Object.freeze(i);
      var l = function () {};
      function f(e) {
        return null !== e && "object" == typeof e;
      }
      function h(e) {
        if (null === e || "object" != typeof e) return !1;
        var t = Object.getPrototypeOf(e);
        return t === Object.prototype || null === t;
      }
      function p(e, t, n) {
        Object.defineProperty(e, t, {
          enumerable: !1,
          writable: !0,
          configurable: !0,
          value: n,
        });
      }
      function d(e, t) {
        var n = "isMobX" + e;
        return (
          (t.prototype[n] = !0),
          function (e) {
            return f(e) && !0 === e[n];
          }
        );
      }
      function v(e) {
        return Array.isArray(e) || vn(e);
      }
      function y(e) {
        return e instanceof Map;
      }
      function b(e) {
        return e instanceof Set;
      }
      function g(e) {
        var t = new Set();
        for (var n in e) t.add(n);
        return (
          Object.getOwnPropertySymbols(e).forEach(function (n) {
            Object.getOwnPropertyDescriptor(e, n).enumerable && t.add(n);
          }),
          Array.from(t)
        );
      }
      function m(e) {
        return e && e.toString ? e.toString() : new String(e).toString();
      }
      function w(e) {
        return null === e ? null : "object" == typeof e ? "" + e : e;
      }
      var O =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : Object.getOwnPropertyNames,
        A = Symbol("mobx administration"),
        S = (function () {
          function e(e) {
            void 0 === e && (e = "Atom@" + a()),
              (this.name = e),
              (this.isPendingUnobservation = !1),
              (this.isBeingObserved = !1),
              (this.observers = new Set()),
              (this.diffValue = 0),
              (this.lastAccessedBy = 0),
              (this.lowestObserverState = $.NOT_TRACKING);
          }
          return (
            (e.prototype.onBecomeObserved = function () {
              this.onBecomeObservedListeners &&
                this.onBecomeObservedListeners.forEach(function (e) {
                  return e();
                });
            }),
            (e.prototype.onBecomeUnobserved = function () {
              this.onBecomeUnobservedListeners &&
                this.onBecomeUnobservedListeners.forEach(function (e) {
                  return e();
                });
            }),
            (e.prototype.reportObserved = function () {
              return He(this);
            }),
            (e.prototype.reportChanged = function () {
              Ke(),
                (function (e) {
                  e.lowestObserverState !== $.STALE &&
                    ((e.lowestObserverState = $.STALE),
                    e.observers.forEach(function (t) {
                      t.dependenciesState === $.UP_TO_DATE &&
                        (t.isTracing !== Q.NONE && We(t, e), t.onBecomeStale()),
                        (t.dependenciesState = $.STALE);
                    }));
                })(this),
                ze();
            }),
            (e.prototype.toString = function () {
              return this.name;
            }),
            e
          );
        })(),
        _ = d("Atom", S);
      function E(e, t, n) {
        void 0 === t && (t = l), void 0 === n && (n = l);
        var r = new S(e);
        return t !== l && pt(r, t), n !== l && dt(r, n), r;
      }
      var x = {
          identity: function (e, t) {
            return e === t;
          },
          structural: function (e, t) {
            return Nn(e, t);
          },
          default: function (e, t) {
            return Object.is(e, t);
          },
          shallow: function (e, t) {
            return Nn(e, t, 1);
          },
        },
        j = function (e, t) {
          return (
            (j =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              }),
            j(e, t)
          );
        },
        C = function () {
          return (
            (C =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            C.apply(this, arguments)
          );
        };
      function R(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator],
          n = 0;
        return t
          ? t.call(e)
          : {
              next: function () {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                );
              },
            };
      }
      function T(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function D() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(T(arguments[t]));
        return e;
      }
      var P = Symbol("mobx did run lazy initializers"),
        k = Symbol("mobx pending decorators"),
        N = {},
        V = {};
      function B(e) {
        var t, n;
        if (!0 !== e[P]) {
          var r = e[k];
          if (r) {
            p(e, P, !0);
            var o = D(Object.getOwnPropertySymbols(r), Object.keys(r));
            try {
              for (var i = R(o), a = i.next(); !a.done; a = i.next()) {
                var s = r[a.value];
                s.propertyCreator(
                  e,
                  s.prop,
                  s.descriptor,
                  s.decoratorTarget,
                  s.decoratorArguments
                );
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                a && !a.done && (n = i.return) && n.call(i);
              } finally {
                if (t) throw t.error;
              }
            }
          }
        }
      }
      function L(e, t) {
        return function () {
          var n,
            r,
            i = function (r, o, i, a) {
              if (!0 === a) return t(r, o, i, r, n), null;
              if (!Object.prototype.hasOwnProperty.call(r, k)) {
                var s = r[k];
                p(r, k, C({}, s));
              }
              return (
                (r[k][o] = {
                  prop: o,
                  propertyCreator: t,
                  descriptor: i,
                  decoratorTarget: r,
                  decoratorArguments: n,
                }),
                (function (e, t) {
                  var n = t ? N : V;
                  return (
                    n[e] ||
                    (n[e] = {
                      configurable: !0,
                      enumerable: t,
                      get: function () {
                        return B(this), this[e];
                      },
                      set: function (t) {
                        B(this), (this[e] = t);
                      },
                    })
                  );
                })(o, e)
              );
            };
          return ((2 === (r = arguments).length || 3 === r.length) &&
            ("string" == typeof r[1] || "symbol" == typeof r[1])) ||
            (4 === r.length && !0 === r[3])
            ? ((n = o), i.apply(null, arguments))
            : ((n = Array.prototype.slice.call(arguments)), i);
        };
      }
      function I(e, t, n) {
        return Bt(e)
          ? e
          : Array.isArray(e)
          ? Y.array(e, { name: n })
          : h(e)
          ? Y.object(e, void 0, { name: n })
          : y(e)
          ? Y.map(e, { name: n })
          : b(e)
          ? Y.set(e, { name: n })
          : e;
      }
      function M(e) {
        return e;
      }
      function U(e) {
        u(e);
        var t = L(!0, function (t, n, r, o, i) {
            var a = r
              ? r.initializer
                ? r.initializer.call(t)
                : r.value
              : void 0;
            _n(t).addObservableProp(n, a, e);
          }),
          n = ("undefined" != typeof process && process.env, t);
        return (n.enhancer = e), n;
      }
      var G = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
      function q(e) {
        return null == e
          ? G
          : "string" == typeof e
          ? { name: e, deep: !0, proxy: !0 }
          : e;
      }
      Object.freeze(G);
      var K = U(I),
        z = U(function (e, t, n) {
          return null == e || Rn(e) || vn(e) || mn(e) || An(e)
            ? e
            : Array.isArray(e)
            ? Y.array(e, { name: n, deep: !1 })
            : h(e)
            ? Y.object(e, void 0, { name: n, deep: !1 })
            : y(e)
            ? Y.map(e, { name: n, deep: !1 })
            : b(e)
            ? Y.set(e, { name: n, deep: !1 })
            : s(!1);
        }),
        H = U(M),
        W = U(function (e, t, n) {
          return Nn(e, t) ? t : e;
        });
      function J(e) {
        return e.defaultDecorator
          ? e.defaultDecorator.enhancer
          : !1 === e.deep
          ? M
          : I;
      }
      var X = {
          box: function (e, t) {
            arguments.length > 2 && F("box");
            var n = q(t);
            return new xe(e, J(n), n.name, !0, n.equals);
          },
          array: function (e, t) {
            arguments.length > 2 && F("array");
            var n = q(t);
            return (function (e, t, n, r) {
              void 0 === n && (n = "ObservableArray@" + a()),
                void 0 === r && (r = !1);
              var o,
                i,
                s,
                u = new fn(n, t, r);
              (o = u.values),
                (i = A),
                (s = u),
                Object.defineProperty(o, i, {
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                  value: s,
                });
              var c = new Proxy(u.values, ln);
              if (((u.proxy = c), e && e.length)) {
                var l = Se(!0);
                u.spliceWithArray(0, 0, e), _e(l);
              }
              return c;
            })(e, J(n), n.name);
          },
          map: function (e, t) {
            arguments.length > 2 && F("map");
            var n = q(t);
            return new gn(e, J(n), n.name);
          },
          set: function (e, t) {
            arguments.length > 2 && F("set");
            var n = q(t);
            return new On(e, J(n), n.name);
          },
          object: function (e, t, n) {
            "string" == typeof arguments[1] && F("object");
            var r = q(n);
            if (!1 === r.proxy) return gt({}, e, t, r);
            var o = mt(r),
              i = (function (e) {
                var t = new Proxy(e, nn);
                return (e[A].proxy = t), t;
              })(gt({}, void 0, void 0, r));
            return wt(i, e, t, o), i;
          },
          ref: H,
          shallow: z,
          deep: K,
          struct: W,
        },
        Y = function (e, t, n) {
          if (
            "string" == typeof arguments[1] ||
            "symbol" == typeof arguments[1]
          )
            return K.apply(null, arguments);
          if (Bt(e)) return e;
          var r = h(e)
            ? Y.object(e, t, n)
            : Array.isArray(e)
            ? Y.array(e, t)
            : y(e)
            ? Y.map(e, t)
            : b(e)
            ? Y.set(e, t)
            : e;
          if (r !== e) return r;
          s(!1);
        };
      function F(e) {
        s(
          "Expected one or two arguments to observable." +
            e +
            ". Did you accidentally try to use observable." +
            e +
            " as decorator?"
        );
      }
      Object.keys(X).forEach(function (e) {
        return (Y[e] = X[e]);
      });
      var $,
        Q,
        Z = L(!1, function (e, t, n, r, o) {
          var i = n.get,
            a = n.set,
            s = o[0] || {};
          _n(e).addComputedProp(e, t, C({ get: i, set: a, context: e }, s));
        }),
        ee = Z({ equals: x.structural }),
        te = function (e, t, n) {
          if ("string" == typeof t) return Z.apply(null, arguments);
          if (null !== e && "object" == typeof e && 1 === arguments.length)
            return Z.apply(null, arguments);
          var r = "object" == typeof t ? t : {};
          return (
            (r.get = e),
            (r.set = "function" == typeof t ? t : r.set),
            (r.name = r.name || e.name || ""),
            new Ce(r)
          );
        };
      (te.struct = ee),
        (function (e) {
          (e[(e.NOT_TRACKING = -1)] = "NOT_TRACKING"),
            (e[(e.UP_TO_DATE = 0)] = "UP_TO_DATE"),
            (e[(e.POSSIBLY_STALE = 1)] = "POSSIBLY_STALE"),
            (e[(e.STALE = 2)] = "STALE");
        })($ || ($ = {})),
        (function (e) {
          (e[(e.NONE = 0)] = "NONE"),
            (e[(e.LOG = 1)] = "LOG"),
            (e[(e.BREAK = 2)] = "BREAK");
        })(Q || (Q = {}));
      var ne = function (e) {
        this.cause = e;
      };
      function re(e) {
        return e instanceof ne;
      }
      function oe(e) {
        switch (e.dependenciesState) {
          case $.UP_TO_DATE:
            return !1;
          case $.NOT_TRACKING:
          case $.STALE:
            return !0;
          case $.POSSIBLY_STALE:
            for (
              var t = he(!0), n = le(), r = e.observing, o = r.length, i = 0;
              i < o;
              i++
            ) {
              var a = r[i];
              if (Re(a)) {
                if (Le.disableErrorBoundaries) a.get();
                else
                  try {
                    a.get();
                  } catch (e) {
                    return fe(n), pe(t), !0;
                  }
                if (e.dependenciesState === $.STALE) return fe(n), pe(t), !0;
              }
            }
            return de(e), fe(n), pe(t), !1;
        }
      }
      function ie() {
        return null !== Le.trackingDerivation;
      }
      function ae(e) {
        var t = e.observers.size > 0;
        Le.computationDepth > 0 && t && s(!1),
          Le.allowStateChanges ||
            (!t && "strict" !== Le.enforceActions) ||
            s(!1);
      }
      function se(e, t, n) {
        var r = he(!0);
        de(e),
          (e.newObserving = new Array(e.observing.length + 100)),
          (e.unboundDepsCount = 0),
          (e.runId = ++Le.runId);
        var o,
          i = Le.trackingDerivation;
        if (((Le.trackingDerivation = e), !0 === Le.disableErrorBoundaries))
          o = t.call(n);
        else
          try {
            o = t.call(n);
          } catch (e) {
            o = new ne(e);
          }
        return (
          (Le.trackingDerivation = i),
          (function (e) {
            for (
              var t = e.observing,
                n = (e.observing = e.newObserving),
                r = $.UP_TO_DATE,
                o = 0,
                i = e.unboundDepsCount,
                a = 0;
              a < i;
              a++
            )
              0 === (s = n[a]).diffValue &&
                ((s.diffValue = 1), o !== a && (n[o] = s), o++),
                s.dependenciesState > r && (r = s.dependenciesState);
            for (n.length = o, e.newObserving = null, i = t.length; i--; )
              0 === (s = t[i]).diffValue && Ge(s, e), (s.diffValue = 0);
            for (; o--; ) {
              var s;
              1 === (s = n[o]).diffValue && ((s.diffValue = 0), Ue(s, e));
            }
            r !== $.UP_TO_DATE &&
              ((e.dependenciesState = r), e.onBecomeStale());
          })(e),
          pe(r),
          o
        );
      }
      function ue(e) {
        var t = e.observing;
        e.observing = [];
        for (var n = t.length; n--; ) Ge(t[n], e);
        e.dependenciesState = $.NOT_TRACKING;
      }
      function ce(e) {
        var t = le();
        try {
          return e();
        } finally {
          fe(t);
        }
      }
      function le() {
        var e = Le.trackingDerivation;
        return (Le.trackingDerivation = null), e;
      }
      function fe(e) {
        Le.trackingDerivation = e;
      }
      function he(e) {
        var t = Le.allowStateReads;
        return (Le.allowStateReads = e), t;
      }
      function pe(e) {
        Le.allowStateReads = e;
      }
      function de(e) {
        if (e.dependenciesState !== $.UP_TO_DATE) {
          e.dependenciesState = $.UP_TO_DATE;
          for (var t = e.observing, n = t.length; n--; )
            t[n].lowestObserverState = $.UP_TO_DATE;
        }
      }
      var ve = 0,
        ye = 1,
        be = Object.getOwnPropertyDescriptor(function () {}, "name");
      function ge(e, t, n) {
        var r = function () {
          return me(e, t, n || this, arguments);
        };
        return (r.isMobxAction = !0), r;
      }
      function me(e, t, n, r) {
        var o = we();
        try {
          return t.apply(n, r);
        } catch (e) {
          throw ((o.error = e), e);
        } finally {
          Oe(o);
        }
      }
      function we(e, t, n) {
        var r = le();
        Ke();
        var o = {
          prevDerivation: r,
          prevAllowStateChanges: Se(!0),
          prevAllowStateReads: he(!0),
          notifySpy: !1,
          startTime: 0,
          actionId: ye++,
          parentActionId: ve,
        };
        return (ve = o.actionId), o;
      }
      function Oe(e) {
        ve !== e.actionId &&
          s("invalid action stack. did you forget to finish an action?"),
          (ve = e.parentActionId),
          void 0 !== e.error && (Le.suppressReactionErrors = !0),
          _e(e.prevAllowStateChanges),
          pe(e.prevAllowStateReads),
          ze(),
          fe(e.prevDerivation),
          e.notifySpy,
          (Le.suppressReactionErrors = !1);
      }
      function Ae(e, t) {
        var n,
          r = Se(e);
        try {
          n = t();
        } finally {
          _e(r);
        }
        return n;
      }
      function Se(e) {
        var t = Le.allowStateChanges;
        return (Le.allowStateChanges = e), t;
      }
      function _e(e) {
        Le.allowStateChanges = e;
      }
      function Ee(e) {
        var t,
          n = Le.computationDepth;
        Le.computationDepth = 0;
        try {
          t = e();
        } finally {
          Le.computationDepth = n;
        }
        return t;
      }
      be && be.configurable;
      var xe = (function (e) {
          function t(t, n, r, o, i) {
            void 0 === r && (r = "ObservableValue@" + a()),
              void 0 === o && (o = !0),
              void 0 === i && (i = x.default);
            var s = e.call(this, r) || this;
            return (
              (s.enhancer = n),
              (s.name = r),
              (s.equals = i),
              (s.hasUnreportedChange = !1),
              (s.value = n(t, void 0, r)),
              s
            );
          }
          return (
            (function (e, t) {
              function n() {
                this.constructor = e;
              }
              j(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            })(t, e),
            (t.prototype.dehanceValue = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.prototype.set = function (e) {
              if (
                (this.value, (e = this.prepareNewValue(e)) !== Le.UNCHANGED)
              ) {
                this.setNewValue(e);
              }
            }),
            (t.prototype.prepareNewValue = function (e) {
              if ((ae(this), rn(this))) {
                var t = an(this, { object: this, type: "update", newValue: e });
                if (!t) return Le.UNCHANGED;
                e = t.newValue;
              }
              return (
                (e = this.enhancer(e, this.value, this.name)),
                this.equals(this.value, e) ? Le.UNCHANGED : e
              );
            }),
            (t.prototype.setNewValue = function (e) {
              var t = this.value;
              (this.value = e),
                this.reportChanged(),
                sn(this) &&
                  cn(this, {
                    type: "update",
                    object: this,
                    newValue: e,
                    oldValue: t,
                  });
            }),
            (t.prototype.get = function () {
              return this.reportObserved(), this.dehanceValue(this.value);
            }),
            (t.prototype.intercept = function (e) {
              return on(this, e);
            }),
            (t.prototype.observe = function (e, t) {
              return (
                t &&
                  e({
                    object: this,
                    type: "update",
                    newValue: this.value,
                    oldValue: void 0,
                  }),
                un(this, e)
              );
            }),
            (t.prototype.toJSON = function () {
              return this.get();
            }),
            (t.prototype.toString = function () {
              return this.name + "[" + this.value + "]";
            }),
            (t.prototype.valueOf = function () {
              return w(this.get());
            }),
            (t.prototype[Symbol.toPrimitive] = function () {
              return this.valueOf();
            }),
            t
          );
        })(S),
        je = d("ObservableValue", xe),
        Ce = (function () {
          function e(e) {
            (this.dependenciesState = $.NOT_TRACKING),
              (this.observing = []),
              (this.newObserving = null),
              (this.isBeingObserved = !1),
              (this.isPendingUnobservation = !1),
              (this.observers = new Set()),
              (this.diffValue = 0),
              (this.runId = 0),
              (this.lastAccessedBy = 0),
              (this.lowestObserverState = $.UP_TO_DATE),
              (this.unboundDepsCount = 0),
              (this.__mapid = "#" + a()),
              (this.value = new ne(null)),
              (this.isComputing = !1),
              (this.isRunningSetter = !1),
              (this.isTracing = Q.NONE),
              u(e.get, "missing option for computed: get"),
              (this.derivation = e.get),
              (this.name = e.name || "ComputedValue@" + a()),
              e.set && (this.setter = ge(this.name + "-setter", e.set)),
              (this.equals =
                e.equals ||
                (e.compareStructural || e.struct ? x.structural : x.default)),
              (this.scope = e.context),
              (this.requiresReaction = !!e.requiresReaction),
              (this.keepAlive = !!e.keepAlive);
          }
          return (
            (e.prototype.onBecomeStale = function () {
              !(function (e) {
                e.lowestObserverState === $.UP_TO_DATE &&
                  ((e.lowestObserverState = $.POSSIBLY_STALE),
                  e.observers.forEach(function (t) {
                    t.dependenciesState === $.UP_TO_DATE &&
                      ((t.dependenciesState = $.POSSIBLY_STALE),
                      t.isTracing !== Q.NONE && We(t, e),
                      t.onBecomeStale());
                  }));
              })(this);
            }),
            (e.prototype.onBecomeObserved = function () {
              this.onBecomeObservedListeners &&
                this.onBecomeObservedListeners.forEach(function (e) {
                  return e();
                });
            }),
            (e.prototype.onBecomeUnobserved = function () {
              this.onBecomeUnobservedListeners &&
                this.onBecomeUnobservedListeners.forEach(function (e) {
                  return e();
                });
            }),
            (e.prototype.get = function () {
              this.isComputing &&
                s(
                  "Cycle detected in computation " +
                    this.name +
                    ": " +
                    this.derivation
                ),
                0 !== Le.inBatch || 0 !== this.observers.size || this.keepAlive
                  ? (He(this),
                    oe(this) &&
                      this.trackAndCompute() &&
                      (function (e) {
                        e.lowestObserverState !== $.STALE &&
                          ((e.lowestObserverState = $.STALE),
                          e.observers.forEach(function (t) {
                            t.dependenciesState === $.POSSIBLY_STALE
                              ? (t.dependenciesState = $.STALE)
                              : t.dependenciesState === $.UP_TO_DATE &&
                                (e.lowestObserverState = $.UP_TO_DATE);
                          }));
                      })(this))
                  : oe(this) &&
                    (this.warnAboutUntrackedRead(),
                    Ke(),
                    (this.value = this.computeValue(!1)),
                    ze());
              var e = this.value;
              if (re(e)) throw e.cause;
              return e;
            }),
            (e.prototype.peek = function () {
              var e = this.computeValue(!1);
              if (re(e)) throw e.cause;
              return e;
            }),
            (e.prototype.set = function (e) {
              if (this.setter) {
                u(
                  !this.isRunningSetter,
                  "The setter of computed value '" +
                    this.name +
                    "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"
                ),
                  (this.isRunningSetter = !0);
                try {
                  this.setter.call(this.scope, e);
                } finally {
                  this.isRunningSetter = !1;
                }
              } else u(!1, !1);
            }),
            (e.prototype.trackAndCompute = function () {
              var e = this.value,
                t = this.dependenciesState === $.NOT_TRACKING,
                n = this.computeValue(!0),
                r = t || re(e) || re(n) || !this.equals(e, n);
              return r && (this.value = n), r;
            }),
            (e.prototype.computeValue = function (e) {
              var t;
              if (((this.isComputing = !0), Le.computationDepth++, e))
                t = se(this, this.derivation, this.scope);
              else if (!0 === Le.disableErrorBoundaries)
                t = this.derivation.call(this.scope);
              else
                try {
                  t = this.derivation.call(this.scope);
                } catch (e) {
                  t = new ne(e);
                }
              return Le.computationDepth--, (this.isComputing = !1), t;
            }),
            (e.prototype.suspend = function () {
              this.keepAlive || (ue(this), (this.value = void 0));
            }),
            (e.prototype.observe = function (e, t) {
              var n = this,
                r = !0,
                o = void 0;
              return ct(function () {
                var i = n.get();
                if (!r || t) {
                  var a = le();
                  e({ type: "update", object: n, newValue: i, oldValue: o }),
                    fe(a);
                }
                (r = !1), (o = i);
              });
            }),
            (e.prototype.warnAboutUntrackedRead = function () {}),
            (e.prototype.toJSON = function () {
              return this.get();
            }),
            (e.prototype.toString = function () {
              return this.name + "[" + this.derivation.toString() + "]";
            }),
            (e.prototype.valueOf = function () {
              return w(this.get());
            }),
            (e.prototype[Symbol.toPrimitive] = function () {
              return this.valueOf();
            }),
            e
          );
        })(),
        Re = d("ComputedValue", Ce),
        Te = [
          "mobxGuid",
          "spyListeners",
          "enforceActions",
          "computedRequiresReaction",
          "reactionRequiresObservable",
          "observableRequiresReaction",
          "allowStateReads",
          "disableErrorBoundaries",
          "runId",
          "UNCHANGED",
        ],
        De = function () {
          (this.version = 5),
            (this.UNCHANGED = {}),
            (this.trackingDerivation = null),
            (this.computationDepth = 0),
            (this.runId = 0),
            (this.mobxGuid = 0),
            (this.inBatch = 0),
            (this.pendingUnobservations = []),
            (this.pendingReactions = []),
            (this.isRunningReactions = !1),
            (this.allowStateChanges = !0),
            (this.allowStateReads = !0),
            (this.enforceActions = !1),
            (this.spyListeners = []),
            (this.globalReactionErrorHandlers = []),
            (this.computedRequiresReaction = !1),
            (this.reactionRequiresObservable = !1),
            (this.observableRequiresReaction = !1),
            (this.computedConfigurable = !1),
            (this.disableErrorBoundaries = !1),
            (this.suppressReactionErrors = !1);
        },
        Pe = {};
      function ke() {
        return "undefined" != typeof window
          ? window
          : void 0 !== n.g
          ? n.g
          : "undefined" != typeof self
          ? self
          : Pe;
      }
      var Ne,
        Ve = !0,
        Be = !1,
        Le =
          ((Ne = ke()).__mobxInstanceCount > 0 &&
            !Ne.__mobxGlobals &&
            (Ve = !1),
          Ne.__mobxGlobals &&
            Ne.__mobxGlobals.version !== new De().version &&
            (Ve = !1),
          Ve
            ? Ne.__mobxGlobals
              ? ((Ne.__mobxInstanceCount += 1),
                Ne.__mobxGlobals.UNCHANGED || (Ne.__mobxGlobals.UNCHANGED = {}),
                Ne.__mobxGlobals)
              : ((Ne.__mobxInstanceCount = 1), (Ne.__mobxGlobals = new De()))
            : (setTimeout(function () {
                Be ||
                  s(
                    "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`"
                  );
              }, 1),
              new De()));
      function Ie() {
        return Le;
      }
      function Me() {
        var e = new De();
        for (var t in e) -1 === Te.indexOf(t) && (Le[t] = e[t]);
        Le.allowStateChanges = !Le.enforceActions;
      }
      function Ue(e, t) {
        e.observers.add(t),
          e.lowestObserverState > t.dependenciesState &&
            (e.lowestObserverState = t.dependenciesState);
      }
      function Ge(e, t) {
        e.observers.delete(t), 0 === e.observers.size && qe(e);
      }
      function qe(e) {
        !1 === e.isPendingUnobservation &&
          ((e.isPendingUnobservation = !0), Le.pendingUnobservations.push(e));
      }
      function Ke() {
        Le.inBatch++;
      }
      function ze() {
        if (0 == --Le.inBatch) {
          Qe();
          for (var e = Le.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            (n.isPendingUnobservation = !1),
              0 === n.observers.size &&
                (n.isBeingObserved &&
                  ((n.isBeingObserved = !1), n.onBecomeUnobserved()),
                n instanceof Ce && n.suspend());
          }
          Le.pendingUnobservations = [];
        }
      }
      function He(e) {
        var t = Le.trackingDerivation;
        return null !== t
          ? (t.runId !== e.lastAccessedBy &&
              ((e.lastAccessedBy = t.runId),
              (t.newObserving[t.unboundDepsCount++] = e),
              e.isBeingObserved ||
                ((e.isBeingObserved = !0), e.onBecomeObserved())),
            !0)
          : (0 === e.observers.size && Le.inBatch > 0 && qe(e), !1);
      }
      function We(e, t) {
        if (
          (console.log(
            "[mobx.trace] '" +
              e.name +
              "' is invalidated due to a change in: '" +
              t.name +
              "'"
          ),
          e.isTracing === Q.BREAK)
        ) {
          var n = [];
          Je(Ot(e), n, 1),
            new Function(
              "debugger;\n/*\nTracing '" +
                e.name +
                "'\n\nYou are entering this break point because derivation '" +
                e.name +
                "' is being traced and '" +
                t.name +
                "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" +
                (e instanceof Ce
                  ? e.derivation.toString().replace(/[*]\//g, "/")
                  : "") +
                "\n\nThe dependencies for this derivation are:\n\n" +
                n.join("\n") +
                "\n*/\n    "
            )();
        }
      }
      function Je(e, t, n) {
        t.length >= 1e3
          ? t.push("(and many more)")
          : (t.push("" + new Array(n).join("\t") + e.name),
            e.dependencies &&
              e.dependencies.forEach(function (e) {
                return Je(e, t, n + 1);
              }));
      }
      var Xe = (function () {
        function e(e, t, n, r) {
          void 0 === e && (e = "Reaction@" + a()),
            void 0 === r && (r = !1),
            (this.name = e),
            (this.onInvalidate = t),
            (this.errorHandler = n),
            (this.requiresObservable = r),
            (this.observing = []),
            (this.newObserving = []),
            (this.dependenciesState = $.NOT_TRACKING),
            (this.diffValue = 0),
            (this.runId = 0),
            (this.unboundDepsCount = 0),
            (this.__mapid = "#" + a()),
            (this.isDisposed = !1),
            (this._isScheduled = !1),
            (this._isTrackPending = !1),
            (this._isRunning = !1),
            (this.isTracing = Q.NONE);
        }
        return (
          (e.prototype.onBecomeStale = function () {
            this.schedule();
          }),
          (e.prototype.schedule = function () {
            this._isScheduled ||
              ((this._isScheduled = !0), Le.pendingReactions.push(this), Qe());
          }),
          (e.prototype.isScheduled = function () {
            return this._isScheduled;
          }),
          (e.prototype.runReaction = function () {
            if (!this.isDisposed) {
              if ((Ke(), (this._isScheduled = !1), oe(this))) {
                this._isTrackPending = !0;
                try {
                  this.onInvalidate(), this._isTrackPending;
                } catch (e) {
                  this.reportExceptionInDerivation(e);
                }
              }
              ze();
            }
          }),
          (e.prototype.track = function (e) {
            if (!this.isDisposed) {
              Ke();
              this._isRunning = !0;
              var t = se(this, e, void 0);
              (this._isRunning = !1),
                (this._isTrackPending = !1),
                this.isDisposed && ue(this),
                re(t) && this.reportExceptionInDerivation(t.cause),
                ze();
            }
          }),
          (e.prototype.reportExceptionInDerivation = function (e) {
            var t = this;
            if (this.errorHandler) this.errorHandler(e, this);
            else {
              if (Le.disableErrorBoundaries) throw e;
              var n =
                "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" +
                this +
                "'";
              Le.suppressReactionErrors
                ? console.warn(
                    "[mobx] (error in reaction '" +
                      this.name +
                      "' suppressed, fix error of causing action below)"
                  )
                : console.error(n, e),
                Le.globalReactionErrorHandlers.forEach(function (n) {
                  return n(e, t);
                });
            }
          }),
          (e.prototype.dispose = function () {
            this.isDisposed ||
              ((this.isDisposed = !0),
              this._isRunning || (Ke(), ue(this), ze()));
          }),
          (e.prototype.getDisposer = function () {
            var e = this.dispose.bind(this);
            return (e[A] = this), e;
          }),
          (e.prototype.toString = function () {
            return "Reaction[" + this.name + "]";
          }),
          (e.prototype.trace = function (e) {
            void 0 === e && (e = !1), Ft(this, e);
          }),
          e
        );
      })();
      function Ye(e) {
        return (
          Le.globalReactionErrorHandlers.push(e),
          function () {
            var t = Le.globalReactionErrorHandlers.indexOf(e);
            t >= 0 && Le.globalReactionErrorHandlers.splice(t, 1);
          }
        );
      }
      var Fe = 100,
        $e = function (e) {
          return e();
        };
      function Qe() {
        Le.inBatch > 0 || Le.isRunningReactions || $e(Ze);
      }
      function Ze() {
        Le.isRunningReactions = !0;
        for (var e = Le.pendingReactions, t = 0; e.length > 0; ) {
          ++t === Fe &&
            (console.error(
              "Reaction doesn't converge to a stable state after " +
                Fe +
                " iterations. Probably there is a cycle in the reactive function: " +
                e[0]
            ),
            e.splice(0));
          for (var n = e.splice(0), r = 0, o = n.length; r < o; r++)
            n[r].runReaction();
        }
        Le.isRunningReactions = !1;
      }
      var et = d("Reaction", Xe);
      function tt(e) {
        var t = $e;
        $e = function (n) {
          return e(function () {
            return t(n);
          });
        };
      }
      function nt(e) {
        return (
          console.warn("[mobx.spy] Is a no-op in production builds"),
          function () {}
        );
      }
      function rt() {
        s(!1);
      }
      function ot(e) {
        return function (t, n, r) {
          if (r) {
            if (r.value)
              return {
                value: ge(e, r.value),
                enumerable: !1,
                configurable: !0,
                writable: !0,
              };
            var o = r.initializer;
            return {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              initializer: function () {
                return ge(e, o.call(this));
              },
            };
          }
          return (function (e) {
            return function (t, n, r) {
              Object.defineProperty(t, n, {
                configurable: !0,
                enumerable: !1,
                get: function () {},
                set: function (t) {
                  p(this, n, it(e, t));
                },
              });
            };
          })(e).apply(this, arguments);
        };
      }
      var it = function (e, t, n, r) {
        return 1 === arguments.length && "function" == typeof e
          ? ge(e.name || "<unnamed action>", e)
          : 2 === arguments.length && "function" == typeof t
          ? ge(e, t)
          : 1 === arguments.length && "string" == typeof e
          ? ot(e)
          : !0 !== r
          ? ot(t).apply(null, arguments)
          : void p(e, t, ge(e.name || t, n.value, this));
      };
      function at(e, t) {
        return me(
          "string" == typeof e || e.name,
          "function" == typeof e ? e : t,
          this,
          void 0
        );
      }
      function st(e) {
        return "function" == typeof e && !0 === e.isMobxAction;
      }
      function ut(e, t, n) {
        p(e, t, ge(t, n.bind(e)));
      }
      function ct(e, t) {
        void 0 === t && (t = i);
        var n,
          r = (t && t.name) || e.name || "Autorun@" + a();
        if (t.scheduler || t.delay) {
          var o = ft(t),
            s = !1;
          n = new Xe(
            r,
            function () {
              s ||
                ((s = !0),
                o(function () {
                  (s = !1), n.isDisposed || n.track(u);
                }));
            },
            t.onError,
            t.requiresObservable
          );
        } else
          n = new Xe(
            r,
            function () {
              this.track(u);
            },
            t.onError,
            t.requiresObservable
          );
        function u() {
          e(n);
        }
        return n.schedule(), n.getDisposer();
      }
      it.bound = function (e, t, n, r) {
        return !0 === r
          ? (ut(e, t, n.value), null)
          : n
          ? {
              configurable: !0,
              enumerable: !1,
              get: function () {
                return (
                  ut(this, t, n.value || n.initializer.call(this)), this[t]
                );
              },
              set: rt,
            }
          : {
              enumerable: !1,
              configurable: !0,
              set: function (e) {
                ut(this, t, e);
              },
              get: function () {},
            };
      };
      var lt = function (e) {
        return e();
      };
      function ft(e) {
        return e.scheduler
          ? e.scheduler
          : e.delay
          ? function (t) {
              return setTimeout(t, e.delay);
            }
          : lt;
      }
      function ht(e, t, n) {
        void 0 === n && (n = i);
        var r,
          o,
          s,
          u = n.name || "Reaction@" + a(),
          c = it(
            u,
            n.onError
              ? ((r = n.onError),
                (o = t),
                function () {
                  try {
                    return o.apply(this, arguments);
                  } catch (e) {
                    r.call(this, e);
                  }
                })
              : t
          ),
          l = !n.scheduler && !n.delay,
          f = ft(n),
          h = !0,
          p = !1,
          d = n.compareStructural ? x.structural : n.equals || x.default,
          v = new Xe(
            u,
            function () {
              h || l ? y() : p || ((p = !0), f(y));
            },
            n.onError,
            n.requiresObservable
          );
        function y() {
          if (((p = !1), !v.isDisposed)) {
            var t = !1;
            v.track(function () {
              var n = e(v);
              (t = h || !d(s, n)), (s = n);
            }),
              h && n.fireImmediately && c(s, v),
              h || !0 !== t || c(s, v),
              h && (h = !1);
          }
        }
        return v.schedule(), v.getDisposer();
      }
      function pt(e, t, n) {
        return vt("onBecomeObserved", e, t, n);
      }
      function dt(e, t, n) {
        return vt("onBecomeUnobserved", e, t, n);
      }
      function vt(e, t, n, r) {
        var o = "function" == typeof r ? Tn(t, n) : Tn(t),
          i = "function" == typeof r ? r : n,
          a = e + "Listeners";
        return (
          o[a] ? o[a].add(i) : (o[a] = new Set([i])),
          "function" != typeof o[e]
            ? s(!1)
            : function () {
                var e = o[a];
                e && (e.delete(i), 0 === e.size && delete o[a]);
              }
        );
      }
      function yt(e) {
        var t = e.enforceActions,
          n = e.computedRequiresReaction,
          r = e.computedConfigurable,
          o = e.disableErrorBoundaries,
          i = e.reactionScheduler,
          a = e.reactionRequiresObservable,
          u = e.observableRequiresReaction;
        if (
          (!0 === e.isolateGlobalState &&
            ((Le.pendingReactions.length ||
              Le.inBatch ||
              Le.isRunningReactions) &&
              s(
                "isolateGlobalState should be called before MobX is running any reactions"
              ),
            (Be = !0),
            Ve &&
              (0 == --ke().__mobxInstanceCount && (ke().__mobxGlobals = void 0),
              (Le = new De()))),
          void 0 !== t)
        ) {
          var c = void 0;
          switch (t) {
            case !0:
            case "observed":
              c = !0;
              break;
            case !1:
            case "never":
              c = !1;
              break;
            case "strict":
            case "always":
              c = "strict";
              break;
            default:
              s(
                "Invalid value for 'enforceActions': '" +
                  t +
                  "', expected 'never', 'always' or 'observed'"
              );
          }
          (Le.enforceActions = c),
            (Le.allowStateChanges = !0 !== c && "strict" !== c);
        }
        void 0 !== n && (Le.computedRequiresReaction = !!n),
          void 0 !== a && (Le.reactionRequiresObservable = !!a),
          void 0 !== u &&
            ((Le.observableRequiresReaction = !!u),
            (Le.allowStateReads = !Le.observableRequiresReaction)),
          void 0 !== r && (Le.computedConfigurable = !!r),
          void 0 !== o &&
            (!0 === o &&
              console.warn(
                "WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."
              ),
            (Le.disableErrorBoundaries = !!o)),
          i && tt(i);
      }
      function bt(e, t) {
        var n = "function" == typeof e ? e.prototype : e,
          r = function (e) {
            var r = t[e];
            Array.isArray(r) || (r = [r]);
            var o = Object.getOwnPropertyDescriptor(n, e),
              i = r.reduce(function (t, r) {
                return r(n, e, t);
              }, o);
            i && Object.defineProperty(n, e, i);
          };
        for (var o in t) r(o);
        return e;
      }
      function gt(e, t, n, r) {
        var o = mt((r = q(r)));
        return B(e), _n(e, r.name, o.enhancer), t && wt(e, t, n, o), e;
      }
      function mt(e) {
        return e.defaultDecorator || (!1 === e.deep ? H : K);
      }
      function wt(e, t, n, r) {
        var o, i;
        Ke();
        try {
          var a = O(t);
          try {
            for (var s = R(a), u = s.next(); !u.done; u = s.next()) {
              var c = u.value,
                l = Object.getOwnPropertyDescriptor(t, c),
                f = (n && c in n ? n[c] : l.get ? Z : r)(e, c, l, !0);
              f && Object.defineProperty(e, c, f);
            }
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              u && !u.done && (i = s.return) && i.call(s);
            } finally {
              if (o) throw o.error;
            }
          }
        } finally {
          ze();
        }
      }
      function Ot(e, t) {
        return At(Tn(e, t));
      }
      function At(e) {
        var t,
          n,
          r = { name: e.name };
        return (
          e.observing &&
            e.observing.length > 0 &&
            (r.dependencies = ((t = e.observing),
            (n = []),
            t.forEach(function (e) {
              -1 === n.indexOf(e) && n.push(e);
            }),
            n).map(At)),
          r
        );
      }
      function St(e, t) {
        return _t(Tn(e, t));
      }
      function _t(e) {
        var t = { name: e.name };
        return (
          (function (e) {
            return e.observers && e.observers.size > 0;
          })(e) &&
            (t.observers = Array.from(
              (function (e) {
                return e.observers;
              })(e)
            ).map(_t)),
          t
        );
      }
      var Et = 0;
      function xt() {
        this.message = "FLOW_CANCELLED";
      }
      function jt(e) {
        return e instanceof xt;
      }
      function Ct(e) {
        1 !== arguments.length &&
          s("Flow expects 1 argument and cannot be used as decorator");
        var t = e.name || "<unnamed flow>";
        return function () {
          var n,
            r = arguments,
            o = ++Et,
            i = it(t + " - runid: " + o + " - init", e).apply(this, r),
            a = void 0,
            s = new Promise(function (e, r) {
              var s = 0;
              function u(e) {
                var n;
                a = void 0;
                try {
                  n = it(t + " - runid: " + o + " - yield " + s++, i.next).call(
                    i,
                    e
                  );
                } catch (e) {
                  return r(e);
                }
                l(n);
              }
              function c(e) {
                var n;
                a = void 0;
                try {
                  n = it(
                    t + " - runid: " + o + " - yield " + s++,
                    i.throw
                  ).call(i, e);
                } catch (e) {
                  return r(e);
                }
                l(n);
              }
              function l(t) {
                if (!t || "function" != typeof t.then)
                  return t.done
                    ? e(t.value)
                    : (a = Promise.resolve(t.value)).then(u, c);
                t.then(l, r);
              }
              (n = r), u(void 0);
            });
          return (
            (s.cancel = it(t + " - runid: " + o + " - cancel", function () {
              try {
                a && Rt(a);
                var e = i.return(void 0),
                  t = Promise.resolve(e.value);
                t.then(l, l), Rt(t), n(new xt());
              } catch (e) {
                n(e);
              }
            })),
            s
          );
        };
      }
      function Rt(e) {
        "function" == typeof e.cancel && e.cancel();
      }
      function Tt(e, t, n) {
        var r;
        if (mn(e) || vn(e) || je(e)) r = Dn(e);
        else {
          if (!Rn(e)) return s(!1);
          if ("string" != typeof t) return s(!1);
          r = Dn(e, t);
        }
        return void 0 !== r.dehancer
          ? s(!1)
          : ((r.dehancer = "function" == typeof t ? t : n),
            function () {
              r.dehancer = void 0;
            });
      }
      function Dt(e, t, n) {
        return "function" == typeof n
          ? (function (e, t, n) {
              return Dn(e, t).intercept(n);
            })(e, t, n)
          : (function (e, t) {
              return Dn(e).intercept(t);
            })(e, t);
      }
      function Pt(e, t) {
        if (null == e) return !1;
        if (void 0 !== t) {
          if (!1 === Rn(e)) return !1;
          if (!e[A].values.has(t)) return !1;
          var n = Tn(e, t);
          return Re(n);
        }
        return Re(e);
      }
      function kt(e) {
        return arguments.length > 1 ? s(!1) : Pt(e);
      }
      function Nt(e, t) {
        return "string" != typeof t ? s(!1) : Pt(e, t);
      }
      function Vt(e, t) {
        return (
          null != e &&
          (void 0 !== t
            ? !!Rn(e) && e[A].values.has(t)
            : Rn(e) || !!e[A] || _(e) || et(e) || Re(e))
        );
      }
      function Bt(e) {
        return 1 !== arguments.length && s(!1), Vt(e);
      }
      function Lt(e, t) {
        return "string" != typeof t ? s(!1) : Vt(e, t);
      }
      function It(e) {
        return Rn(e)
          ? e[A].getKeys()
          : mn(e) || An(e)
          ? Array.from(e.keys())
          : vn(e)
          ? e.map(function (e, t) {
              return t;
            })
          : s(!1);
      }
      function Mt(e) {
        return Rn(e)
          ? It(e).map(function (t) {
              return e[t];
            })
          : mn(e)
          ? It(e).map(function (t) {
              return e.get(t);
            })
          : An(e)
          ? Array.from(e.values())
          : vn(e)
          ? e.slice()
          : s(!1);
      }
      function Ut(e) {
        return Rn(e)
          ? It(e).map(function (t) {
              return [t, e[t]];
            })
          : mn(e)
          ? It(e).map(function (t) {
              return [t, e.get(t)];
            })
          : An(e)
          ? Array.from(e.entries())
          : vn(e)
          ? e.map(function (e, t) {
              return [t, e];
            })
          : s(!1);
      }
      function Gt(e, t, n) {
        if (2 !== arguments.length || An(e))
          if (Rn(e)) {
            var r = e[A];
            r.values.get(t)
              ? r.write(t, n)
              : r.addObservableProp(t, n, r.defaultEnhancer);
          } else if (mn(e)) e.set(t, n);
          else if (An(e)) e.add(t);
          else {
            if (!vn(e)) return s(!1);
            "number" != typeof t && (t = parseInt(t, 10)),
              u(t >= 0, "Not a valid index: '" + t + "'"),
              Ke(),
              t >= e.length && (e.length = t + 1),
              (e[t] = n),
              ze();
          }
        else {
          Ke();
          var o = t;
          try {
            for (var i in o) Gt(e, i, o[i]);
          } finally {
            ze();
          }
        }
      }
      function qt(e, t) {
        if (Rn(e)) e[A].remove(t);
        else if (mn(e)) e.delete(t);
        else if (An(e)) e.delete(t);
        else {
          if (!vn(e)) return s(!1);
          "number" != typeof t && (t = parseInt(t, 10)),
            u(t >= 0, "Not a valid index: '" + t + "'"),
            e.splice(t, 1);
        }
      }
      function Kt(e, t) {
        return Rn(e)
          ? Dn(e).has(t)
          : mn(e) || An(e)
          ? e.has(t)
          : vn(e)
          ? t >= 0 && t < e.length
          : s(!1);
      }
      function zt(e, t) {
        if (Kt(e, t))
          return Rn(e) ? e[t] : mn(e) ? e.get(t) : vn(e) ? e[t] : s(!1);
      }
      function Ht(e, t, n, r) {
        return "function" == typeof n
          ? (function (e, t, n, r) {
              return Dn(e, t).observe(n, r);
            })(e, t, n, r)
          : (function (e, t, n) {
              return Dn(e).observe(t, n);
            })(e, t, n);
      }
      xt.prototype = Object.create(Error.prototype);
      var Wt = {
        detectCycles: !0,
        exportMapsAsObjects: !0,
        recurseEverything: !1,
      };
      function Jt(e, t, n, r) {
        return r.detectCycles && e.set(t, n), n;
      }
      function Xt(e, t, n) {
        if (!t.recurseEverything && !Bt(e)) return e;
        if ("object" != typeof e) return e;
        if (null === e) return null;
        if (e instanceof Date) return e;
        if (je(e)) return Xt(e.get(), t, n);
        if ((Bt(e) && It(e), !0 === t.detectCycles && null !== e && n.has(e)))
          return n.get(e);
        if (vn(e) || Array.isArray(e)) {
          var r = Jt(n, e, [], t),
            o = e.map(function (e) {
              return Xt(e, t, n);
            });
          r.length = o.length;
          for (var i = 0, a = o.length; i < a; i++) r[i] = o[i];
          return r;
        }
        if (An(e) || Object.getPrototypeOf(e) === Set.prototype) {
          if (!1 === t.exportMapsAsObjects) {
            var s = Jt(n, e, new Set(), t);
            return (
              e.forEach(function (e) {
                s.add(Xt(e, t, n));
              }),
              s
            );
          }
          var u = Jt(n, e, [], t);
          return (
            e.forEach(function (e) {
              u.push(Xt(e, t, n));
            }),
            u
          );
        }
        if (mn(e) || Object.getPrototypeOf(e) === Map.prototype) {
          if (!1 === t.exportMapsAsObjects) {
            var c = Jt(n, e, new Map(), t);
            return (
              e.forEach(function (e, r) {
                c.set(r, Xt(e, t, n));
              }),
              c
            );
          }
          var l = Jt(n, e, {}, t);
          return (
            e.forEach(function (e, r) {
              l[r] = Xt(e, t, n);
            }),
            l
          );
        }
        var f = Jt(n, e, {}, t);
        return (
          g(e).forEach(function (r) {
            f[r] = Xt(e[r], t, n);
          }),
          f
        );
      }
      function Yt(e, t) {
        var n;
        return (
          "boolean" == typeof t && (t = { detectCycles: t }),
          t || (t = Wt),
          (t.detectCycles =
            void 0 === t.detectCycles
              ? !0 === t.recurseEverything
              : !0 === t.detectCycles),
          t.detectCycles && (n = new Map()),
          Xt(e, t, n)
        );
      }
      function Ft() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = !1;
        "boolean" == typeof e[e.length - 1] && (n = e.pop());
        var r = (function (e) {
          switch (e.length) {
            case 0:
              return Le.trackingDerivation;
            case 1:
              return Tn(e[0]);
            case 2:
              return Tn(e[0], e[1]);
          }
        })(e);
        if (!r) return s(!1);
        r.isTracing === Q.NONE &&
          console.log("[mobx.trace] '" + r.name + "' tracing enabled"),
          (r.isTracing = n ? Q.BREAK : Q.LOG);
      }
      function $t(e, t) {
        void 0 === t && (t = void 0), Ke();
        try {
          return e.apply(t);
        } finally {
          ze();
        }
      }
      function Qt(e, t, n) {
        return 1 === arguments.length || (t && "object" == typeof t)
          ? (function (e, t) {
              var n,
                r = new Promise(function (r, o) {
                  var i = Zt(e, r, C(C({}, t), { onError: o }));
                  n = function () {
                    i(), o("WHEN_CANCELLED");
                  };
                });
              return (r.cancel = n), r;
            })(e, t)
          : Zt(e, t, n || {});
      }
      function Zt(e, t, n) {
        var r;
        "number" == typeof n.timeout &&
          (r = setTimeout(function () {
            if (!i[A].isDisposed) {
              i();
              var e = new Error("WHEN_TIMEOUT");
              if (!n.onError) throw e;
              n.onError(e);
            }
          }, n.timeout)),
          (n.name = n.name || "When@" + a());
        var o = ge(n.name + "-effect", t),
          i = ct(function (t) {
            e() && (t.dispose(), r && clearTimeout(r), o());
          }, n);
        return i;
      }
      function en(e) {
        return e[A];
      }
      function tn(e) {
        return (
          "string" == typeof e || "number" == typeof e || "symbol" == typeof e
        );
      }
      var nn = {
        has: function (e, t) {
          if (t === A || "constructor" === t || t === P) return !0;
          var n = en(e);
          return tn(t) ? n.has(t) : t in e;
        },
        get: function (e, t) {
          if (t === A || "constructor" === t || t === P) return e[t];
          var n = en(e),
            r = n.values.get(t);
          if (r instanceof S) {
            var o = r.get();
            return void 0 === o && n.has(t), o;
          }
          return tn(t) && n.has(t), e[t];
        },
        set: function (e, t, n) {
          return !!tn(t) && (Gt(e, t, n), !0);
        },
        deleteProperty: function (e, t) {
          return !!tn(t) && (en(e).remove(t), !0);
        },
        ownKeys: function (e) {
          return en(e).keysAtom.reportObserved(), Reflect.ownKeys(e);
        },
        preventExtensions: function (e) {
          return s("Dynamic observable objects cannot be frozen"), !1;
        },
      };
      function rn(e) {
        return void 0 !== e.interceptors && e.interceptors.length > 0;
      }
      function on(e, t) {
        var n = e.interceptors || (e.interceptors = []);
        return (
          n.push(t),
          c(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function an(e, t) {
        var n = le();
        try {
          for (
            var r = D(e.interceptors || []), o = 0, i = r.length;
            o < i &&
            (u(
              !(t = r[o](t)) || t.type,
              "Intercept handlers should return nothing or a change object"
            ),
            t);
            o++
          );
          return t;
        } finally {
          fe(n);
        }
      }
      function sn(e) {
        return void 0 !== e.changeListeners && e.changeListeners.length > 0;
      }
      function un(e, t) {
        var n = e.changeListeners || (e.changeListeners = []);
        return (
          n.push(t),
          c(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function cn(e, t) {
        var n = le(),
          r = e.changeListeners;
        if (r) {
          for (var o = 0, i = (r = r.slice()).length; o < i; o++) r[o](t);
          fe(n);
        }
      }
      var ln = {
          get: function (e, t) {
            return t === A
              ? e[A]
              : "length" === t
              ? e[A].getArrayLength()
              : "number" == typeof t
              ? hn.get.call(e, t)
              : "string" != typeof t || isNaN(t)
              ? hn.hasOwnProperty(t)
                ? hn[t]
                : e[t]
              : hn.get.call(e, parseInt(t));
          },
          set: function (e, t, n) {
            return (
              "length" === t && e[A].setArrayLength(n),
              "number" == typeof t && hn.set.call(e, t, n),
              "symbol" == typeof t || isNaN(t)
                ? (e[t] = n)
                : hn.set.call(e, parseInt(t), n),
              !0
            );
          },
          preventExtensions: function (e) {
            return s("Observable arrays cannot be frozen"), !1;
          },
        },
        fn = (function () {
          function e(e, t, n) {
            (this.owned = n),
              (this.values = []),
              (this.proxy = void 0),
              (this.lastKnownLength = 0),
              (this.atom = new S(e || "ObservableArray@" + a())),
              (this.enhancer = function (n, r) {
                return t(n, r, e + "[..]");
              });
          }
          return (
            (e.prototype.dehanceValue = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (e.prototype.dehanceValues = function (e) {
              return void 0 !== this.dehancer && e.length > 0
                ? e.map(this.dehancer)
                : e;
            }),
            (e.prototype.intercept = function (e) {
              return on(this, e);
            }),
            (e.prototype.observe = function (e, t) {
              return (
                void 0 === t && (t = !1),
                t &&
                  e({
                    object: this.proxy,
                    type: "splice",
                    index: 0,
                    added: this.values.slice(),
                    addedCount: this.values.length,
                    removed: [],
                    removedCount: 0,
                  }),
                un(this, e)
              );
            }),
            (e.prototype.getArrayLength = function () {
              return this.atom.reportObserved(), this.values.length;
            }),
            (e.prototype.setArrayLength = function (e) {
              if ("number" != typeof e || e < 0)
                throw new Error("[mobx.array] Out of range: " + e);
              var t = this.values.length;
              if (e !== t)
                if (e > t) {
                  for (var n = new Array(e - t), r = 0; r < e - t; r++)
                    n[r] = void 0;
                  this.spliceWithArray(t, 0, n);
                } else this.spliceWithArray(e, t - e);
            }),
            (e.prototype.updateArrayLength = function (e, t) {
              if (e !== this.lastKnownLength)
                throw new Error(
                  "[mobx] Modification exception: the internal structure of an observable array was changed."
                );
              this.lastKnownLength += t;
            }),
            (e.prototype.spliceWithArray = function (e, t, n) {
              var r = this;
              ae(this.atom);
              var i = this.values.length;
              if (
                (void 0 === e
                  ? (e = 0)
                  : e > i
                  ? (e = i)
                  : e < 0 && (e = Math.max(0, i + e)),
                (t =
                  1 === arguments.length
                    ? i - e
                    : null == t
                    ? 0
                    : Math.max(0, Math.min(t, i - e))),
                void 0 === n && (n = o),
                rn(this))
              ) {
                var a = an(this, {
                  object: this.proxy,
                  type: "splice",
                  index: e,
                  removedCount: t,
                  added: n,
                });
                if (!a) return o;
                (t = a.removedCount), (n = a.added);
              }
              n =
                0 === n.length
                  ? n
                  : n.map(function (e) {
                      return r.enhancer(e, void 0);
                    });
              var s = this.spliceItemsIntoValues(e, t, n);
              return (
                (0 === t && 0 === n.length) || this.notifyArraySplice(e, n, s),
                this.dehanceValues(s)
              );
            }),
            (e.prototype.spliceItemsIntoValues = function (e, t, n) {
              var r;
              if (n.length < 1e4)
                return (r = this.values).splice.apply(r, D([e, t], n));
              var o = this.values.slice(e, e + t);
              return (
                (this.values = this.values
                  .slice(0, e)
                  .concat(n, this.values.slice(e + t))),
                o
              );
            }),
            (e.prototype.notifyArrayChildUpdate = function (e, t, n) {
              var r = !this.owned && !1,
                o = sn(this),
                i =
                  o || r
                    ? {
                        object: this.proxy,
                        type: "update",
                        index: e,
                        newValue: t,
                        oldValue: n,
                      }
                    : null;
              this.atom.reportChanged(), o && cn(this, i);
            }),
            (e.prototype.notifyArraySplice = function (e, t, n) {
              var r = !this.owned && !1,
                o = sn(this),
                i =
                  o || r
                    ? {
                        object: this.proxy,
                        type: "splice",
                        index: e,
                        removed: n,
                        added: t,
                        removedCount: n.length,
                        addedCount: t.length,
                      }
                    : null;
              this.atom.reportChanged(), o && cn(this, i);
            }),
            e
          );
        })(),
        hn = {
          intercept: function (e) {
            return this[A].intercept(e);
          },
          observe: function (e, t) {
            return void 0 === t && (t = !1), this[A].observe(e, t);
          },
          clear: function () {
            return this.splice(0);
          },
          replace: function (e) {
            var t = this[A];
            return t.spliceWithArray(0, t.values.length, e);
          },
          toJS: function () {
            return this.slice();
          },
          toJSON: function () {
            return this.toJS();
          },
          splice: function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            var o = this[A];
            switch (arguments.length) {
              case 0:
                return [];
              case 1:
                return o.spliceWithArray(e);
              case 2:
                return o.spliceWithArray(e, t);
            }
            return o.spliceWithArray(e, t, n);
          },
          spliceWithArray: function (e, t, n) {
            return this[A].spliceWithArray(e, t, n);
          },
          push: function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = this[A];
            return n.spliceWithArray(n.values.length, 0, e), n.values.length;
          },
          pop: function () {
            return this.splice(Math.max(this[A].values.length - 1, 0), 1)[0];
          },
          shift: function () {
            return this.splice(0, 1)[0];
          },
          unshift: function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = this[A];
            return n.spliceWithArray(0, 0, e), n.values.length;
          },
          reverse: function () {
            var e = this.slice();
            return e.reverse.apply(e, arguments);
          },
          sort: function (e) {
            var t = this.slice();
            return t.sort.apply(t, arguments);
          },
          remove: function (e) {
            var t = this[A],
              n = t.dehanceValues(t.values).indexOf(e);
            return n > -1 && (this.splice(n, 1), !0);
          },
          get: function (e) {
            var t = this[A];
            if (t) {
              if (e < t.values.length)
                return t.atom.reportObserved(), t.dehanceValue(t.values[e]);
              console.warn(
                "[mobx.array] Attempt to read an array index (" +
                  e +
                  ") that is out of bounds (" +
                  t.values.length +
                  "). Please check length first. Out of bound indices will not be tracked by MobX"
              );
            }
          },
          set: function (e, t) {
            var n = this[A],
              r = n.values;
            if (e < r.length) {
              ae(n.atom);
              var o = r[e];
              if (rn(n)) {
                var i = an(n, {
                  type: "update",
                  object: n.proxy,
                  index: e,
                  newValue: t,
                });
                if (!i) return;
                t = i.newValue;
              }
              (t = n.enhancer(t, o)) !== o &&
                ((r[e] = t), n.notifyArrayChildUpdate(e, t, o));
            } else {
              if (e !== r.length)
                throw new Error(
                  "[mobx.array] Index out of bounds, " +
                    e +
                    " is larger than " +
                    r.length
                );
              n.spliceWithArray(e, 0, [t]);
            }
          },
        };
      [
        "concat",
        "flat",
        "includes",
        "indexOf",
        "join",
        "lastIndexOf",
        "slice",
        "toString",
        "toLocaleString",
      ].forEach(function (e) {
        "function" == typeof Array.prototype[e] &&
          (hn[e] = function () {
            var t = this[A];
            t.atom.reportObserved();
            var n = t.dehanceValues(t.values);
            return n[e].apply(n, arguments);
          });
      }),
        [
          "every",
          "filter",
          "find",
          "findIndex",
          "flatMap",
          "forEach",
          "map",
          "some",
        ].forEach(function (e) {
          "function" == typeof Array.prototype[e] &&
            (hn[e] = function (t, n) {
              var r = this,
                o = this[A];
              return (
                o.atom.reportObserved(),
                o.dehanceValues(o.values)[e](function (e, o) {
                  return t.call(n, e, o, r);
                }, n)
              );
            });
        }),
        ["reduce", "reduceRight"].forEach(function (e) {
          hn[e] = function () {
            var t = this,
              n = this[A];
            n.atom.reportObserved();
            var r = arguments[0];
            return (
              (arguments[0] = function (e, o, i) {
                return (o = n.dehanceValue(o)), r(e, o, i, t);
              }),
              n.values[e].apply(n.values, arguments)
            );
          };
        });
      var pn,
        dn = d("ObservableArrayAdministration", fn);
      function vn(e) {
        return f(e) && dn(e[A]);
      }
      var yn,
        bn = {},
        gn = (function () {
          function e(e, t, n) {
            if (
              (void 0 === t && (t = I),
              void 0 === n && (n = "ObservableMap@" + a()),
              (this.enhancer = t),
              (this.name = n),
              (this[pn] = bn),
              (this._keysAtom = E(this.name + ".keys()")),
              (this[Symbol.toStringTag] = "Map"),
              "function" != typeof Map)
            )
              throw new Error(
                "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js"
              );
            (this._data = new Map()), (this._hasMap = new Map()), this.merge(e);
          }
          return (
            (e.prototype._has = function (e) {
              return this._data.has(e);
            }),
            (e.prototype.has = function (e) {
              var t = this;
              if (!Le.trackingDerivation) return this._has(e);
              var n = this._hasMap.get(e);
              if (!n) {
                var r = (n = new xe(
                  this._has(e),
                  M,
                  this.name + "." + m(e) + "?",
                  !1
                ));
                this._hasMap.set(e, r),
                  dt(r, function () {
                    return t._hasMap.delete(e);
                  });
              }
              return n.get();
            }),
            (e.prototype.set = function (e, t) {
              var n = this._has(e);
              if (rn(this)) {
                var r = an(this, {
                  type: n ? "update" : "add",
                  object: this,
                  newValue: t,
                  name: e,
                });
                if (!r) return this;
                t = r.newValue;
              }
              return n ? this._updateValue(e, t) : this._addValue(e, t), this;
            }),
            (e.prototype.delete = function (e) {
              var t = this;
              if (
                (ae(this._keysAtom),
                rn(this) &&
                  !(r = an(this, { type: "delete", object: this, name: e })))
              )
                return !1;
              if (this._has(e)) {
                var n = sn(this),
                  r = n
                    ? {
                        type: "delete",
                        object: this,
                        oldValue: this._data.get(e).value,
                        name: e,
                      }
                    : null;
                return (
                  $t(function () {
                    t._keysAtom.reportChanged(),
                      t._updateHasMapEntry(e, !1),
                      t._data.get(e).setNewValue(void 0),
                      t._data.delete(e);
                  }),
                  n && cn(this, r),
                  !0
                );
              }
              return !1;
            }),
            (e.prototype._updateHasMapEntry = function (e, t) {
              var n = this._hasMap.get(e);
              n && n.setNewValue(t);
            }),
            (e.prototype._updateValue = function (e, t) {
              var n = this._data.get(e);
              if ((t = n.prepareNewValue(t)) !== Le.UNCHANGED) {
                var r = sn(this),
                  o = r
                    ? {
                        type: "update",
                        object: this,
                        oldValue: n.value,
                        name: e,
                        newValue: t,
                      }
                    : null;
                n.setNewValue(t), r && cn(this, o);
              }
            }),
            (e.prototype._addValue = function (e, t) {
              var n = this;
              ae(this._keysAtom),
                $t(function () {
                  var r = new xe(t, n.enhancer, n.name + "." + m(e), !1);
                  n._data.set(e, r),
                    (t = r.value),
                    n._updateHasMapEntry(e, !0),
                    n._keysAtom.reportChanged();
                });
              var r = sn(this);
              r &&
                cn(
                  this,
                  r ? { type: "add", object: this, name: e, newValue: t } : null
                );
            }),
            (e.prototype.get = function (e) {
              return this.has(e)
                ? this.dehanceValue(this._data.get(e).get())
                : this.dehanceValue(void 0);
            }),
            (e.prototype.dehanceValue = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (e.prototype.keys = function () {
              return this._keysAtom.reportObserved(), this._data.keys();
            }),
            (e.prototype.values = function () {
              var e = this,
                t = this.keys();
              return In({
                next: function () {
                  var n = t.next(),
                    r = n.done,
                    o = n.value;
                  return { done: r, value: r ? void 0 : e.get(o) };
                },
              });
            }),
            (e.prototype.entries = function () {
              var e = this,
                t = this.keys();
              return In({
                next: function () {
                  var n = t.next(),
                    r = n.done,
                    o = n.value;
                  return { done: r, value: r ? void 0 : [o, e.get(o)] };
                },
              });
            }),
            (e.prototype[((pn = A), Symbol.iterator)] = function () {
              return this.entries();
            }),
            (e.prototype.forEach = function (e, t) {
              var n, r;
              try {
                for (var o = R(this), i = o.next(); !i.done; i = o.next()) {
                  var a = T(i.value, 2),
                    s = a[0],
                    u = a[1];
                  e.call(t, u, s, this);
                }
              } catch (e) {
                n = { error: e };
              } finally {
                try {
                  i && !i.done && (r = o.return) && r.call(o);
                } finally {
                  if (n) throw n.error;
                }
              }
            }),
            (e.prototype.merge = function (e) {
              var t = this;
              return (
                mn(e) && (e = e.toJS()),
                $t(function () {
                  var n = Se(!0);
                  try {
                    h(e)
                      ? g(e).forEach(function (n) {
                          return t.set(n, e[n]);
                        })
                      : Array.isArray(e)
                      ? e.forEach(function (e) {
                          var n = T(e, 2),
                            r = n[0],
                            o = n[1];
                          return t.set(r, o);
                        })
                      : y(e)
                      ? (e.constructor !== Map &&
                          s(
                            "Cannot initialize from classes that inherit from Map: " +
                              e.constructor.name
                          ),
                        e.forEach(function (e, n) {
                          return t.set(n, e);
                        }))
                      : null != e && s("Cannot initialize map from " + e);
                  } finally {
                    _e(n);
                  }
                }),
                this
              );
            }),
            (e.prototype.clear = function () {
              var e = this;
              $t(function () {
                ce(function () {
                  var t, n;
                  try {
                    for (
                      var r = R(e.keys()), o = r.next();
                      !o.done;
                      o = r.next()
                    ) {
                      var i = o.value;
                      e.delete(i);
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      o && !o.done && (n = r.return) && n.call(r);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                });
              });
            }),
            (e.prototype.replace = function (e) {
              var t = this;
              return (
                $t(function () {
                  var n,
                    r,
                    o,
                    i,
                    a = (function (e) {
                      if (y(e) || mn(e)) return e;
                      if (Array.isArray(e)) return new Map(e);
                      if (h(e)) {
                        var t = new Map();
                        for (var n in e) t.set(n, e[n]);
                        return t;
                      }
                      return s("Cannot convert to map from '" + e + "'");
                    })(e),
                    u = new Map(),
                    c = !1;
                  try {
                    for (
                      var l = R(t._data.keys()), f = l.next();
                      !f.done;
                      f = l.next()
                    ) {
                      var p = f.value;
                      if (!a.has(p))
                        if (t.delete(p)) c = !0;
                        else {
                          var d = t._data.get(p);
                          u.set(p, d);
                        }
                    }
                  } catch (e) {
                    n = { error: e };
                  } finally {
                    try {
                      f && !f.done && (r = l.return) && r.call(l);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                  try {
                    for (
                      var v = R(a.entries()), b = v.next();
                      !b.done;
                      b = v.next()
                    ) {
                      var g = T(b.value, 2),
                        m = ((p = g[0]), (d = g[1]), t._data.has(p));
                      if ((t.set(p, d), t._data.has(p))) {
                        var w = t._data.get(p);
                        u.set(p, w), m || (c = !0);
                      }
                    }
                  } catch (e) {
                    o = { error: e };
                  } finally {
                    try {
                      b && !b.done && (i = v.return) && i.call(v);
                    } finally {
                      if (o) throw o.error;
                    }
                  }
                  if (!c)
                    if (t._data.size !== u.size) t._keysAtom.reportChanged();
                    else
                      for (
                        var O = t._data.keys(),
                          A = u.keys(),
                          S = O.next(),
                          _ = A.next();
                        !S.done;

                      ) {
                        if (S.value !== _.value) {
                          t._keysAtom.reportChanged();
                          break;
                        }
                        (S = O.next()), (_ = A.next());
                      }
                  t._data = u;
                }),
                this
              );
            }),
            Object.defineProperty(e.prototype, "size", {
              get: function () {
                return this._keysAtom.reportObserved(), this._data.size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.toPOJO = function () {
              var e,
                t,
                n = {};
              try {
                for (var r = R(this), o = r.next(); !o.done; o = r.next()) {
                  var i = T(o.value, 2),
                    a = i[0],
                    s = i[1];
                  n["symbol" == typeof a ? a : m(a)] = s;
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  o && !o.done && (t = r.return) && t.call(r);
                } finally {
                  if (e) throw e.error;
                }
              }
              return n;
            }),
            (e.prototype.toJS = function () {
              return new Map(this);
            }),
            (e.prototype.toJSON = function () {
              return this.toPOJO();
            }),
            (e.prototype.toString = function () {
              var e = this;
              return (
                this.name +
                "[{ " +
                Array.from(this.keys())
                  .map(function (t) {
                    return m(t) + ": " + e.get(t);
                  })
                  .join(", ") +
                " }]"
              );
            }),
            (e.prototype.observe = function (e, t) {
              return un(this, e);
            }),
            (e.prototype.intercept = function (e) {
              return on(this, e);
            }),
            e
          );
        })(),
        mn = d("ObservableMap", gn),
        wn = {},
        On = (function () {
          function e(e, t, n) {
            if (
              (void 0 === t && (t = I),
              void 0 === n && (n = "ObservableSet@" + a()),
              (this.name = n),
              (this[yn] = wn),
              (this._data = new Set()),
              (this._atom = E(this.name)),
              (this[Symbol.toStringTag] = "Set"),
              "function" != typeof Set)
            )
              throw new Error(
                "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js"
              );
            (this.enhancer = function (e, r) {
              return t(e, r, n);
            }),
              e && this.replace(e);
          }
          return (
            (e.prototype.dehanceValue = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (e.prototype.clear = function () {
              var e = this;
              $t(function () {
                ce(function () {
                  var t, n;
                  try {
                    for (
                      var r = R(e._data.values()), o = r.next();
                      !o.done;
                      o = r.next()
                    ) {
                      var i = o.value;
                      e.delete(i);
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      o && !o.done && (n = r.return) && n.call(r);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                });
              });
            }),
            (e.prototype.forEach = function (e, t) {
              var n, r;
              try {
                for (var o = R(this), i = o.next(); !i.done; i = o.next()) {
                  var a = i.value;
                  e.call(t, a, a, this);
                }
              } catch (e) {
                n = { error: e };
              } finally {
                try {
                  i && !i.done && (r = o.return) && r.call(o);
                } finally {
                  if (n) throw n.error;
                }
              }
            }),
            Object.defineProperty(e.prototype, "size", {
              get: function () {
                return this._atom.reportObserved(), this._data.size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.add = function (e) {
              var t = this;
              if (
                (ae(this._atom),
                rn(this) &&
                  !(r = an(this, { type: "add", object: this, newValue: e })))
              )
                return this;
              if (!this.has(e)) {
                $t(function () {
                  t._data.add(t.enhancer(e, void 0)), t._atom.reportChanged();
                });
                var n = sn(this),
                  r = n ? { type: "add", object: this, newValue: e } : null;
                n && cn(this, r);
              }
              return this;
            }),
            (e.prototype.delete = function (e) {
              var t = this;
              if (
                rn(this) &&
                !(r = an(this, { type: "delete", object: this, oldValue: e }))
              )
                return !1;
              if (this.has(e)) {
                var n = sn(this),
                  r = n ? { type: "delete", object: this, oldValue: e } : null;
                return (
                  $t(function () {
                    t._atom.reportChanged(), t._data.delete(e);
                  }),
                  n && cn(this, r),
                  !0
                );
              }
              return !1;
            }),
            (e.prototype.has = function (e) {
              return (
                this._atom.reportObserved(),
                this._data.has(this.dehanceValue(e))
              );
            }),
            (e.prototype.entries = function () {
              var e = 0,
                t = Array.from(this.keys()),
                n = Array.from(this.values());
              return In({
                next: function () {
                  var r = e;
                  return (
                    (e += 1),
                    r < n.length
                      ? { value: [t[r], n[r]], done: !1 }
                      : { done: !0 }
                  );
                },
              });
            }),
            (e.prototype.keys = function () {
              return this.values();
            }),
            (e.prototype.values = function () {
              this._atom.reportObserved();
              var e = this,
                t = 0,
                n = Array.from(this._data.values());
              return In({
                next: function () {
                  return t < n.length
                    ? { value: e.dehanceValue(n[t++]), done: !1 }
                    : { done: !0 };
                },
              });
            }),
            (e.prototype.replace = function (e) {
              var t = this;
              return (
                An(e) && (e = e.toJS()),
                $t(function () {
                  var n = Se(!0);
                  try {
                    Array.isArray(e) || b(e)
                      ? (t.clear(),
                        e.forEach(function (e) {
                          return t.add(e);
                        }))
                      : null != e && s("Cannot initialize set from " + e);
                  } finally {
                    _e(n);
                  }
                }),
                this
              );
            }),
            (e.prototype.observe = function (e, t) {
              return un(this, e);
            }),
            (e.prototype.intercept = function (e) {
              return on(this, e);
            }),
            (e.prototype.toJS = function () {
              return new Set(this);
            }),
            (e.prototype.toString = function () {
              return this.name + "[ " + Array.from(this).join(", ") + " ]";
            }),
            (e.prototype[((yn = A), Symbol.iterator)] = function () {
              return this.values();
            }),
            e
          );
        })(),
        An = d("ObservableSet", On),
        Sn = (function () {
          function e(e, t, n, r) {
            void 0 === t && (t = new Map()),
              (this.target = e),
              (this.values = t),
              (this.name = n),
              (this.defaultEnhancer = r),
              (this.keysAtom = new S(n + ".keys"));
          }
          return (
            (e.prototype.read = function (e) {
              return this.values.get(e).get();
            }),
            (e.prototype.write = function (e, t) {
              var n = this.target,
                r = this.values.get(e);
              if (r instanceof Ce) r.set(t);
              else {
                if (rn(this)) {
                  if (
                    !(i = an(this, {
                      type: "update",
                      object: this.proxy || n,
                      name: e,
                      newValue: t,
                    }))
                  )
                    return;
                  t = i.newValue;
                }
                if ((t = r.prepareNewValue(t)) !== Le.UNCHANGED) {
                  var o = sn(this),
                    i = o
                      ? {
                          type: "update",
                          object: this.proxy || n,
                          oldValue: r.value,
                          name: e,
                          newValue: t,
                        }
                      : null;
                  r.setNewValue(t), o && cn(this, i);
                }
              }
            }),
            (e.prototype.has = function (e) {
              var t = this.pendingKeys || (this.pendingKeys = new Map()),
                n = t.get(e);
              if (n) return n.get();
              var r = !!this.values.get(e);
              return (
                (n = new xe(r, M, this.name + "." + m(e) + "?", !1)),
                t.set(e, n),
                n.get()
              );
            }),
            (e.prototype.addObservableProp = function (e, t, n) {
              void 0 === n && (n = this.defaultEnhancer);
              var r = this.target;
              if (rn(this)) {
                var o = an(this, {
                  object: this.proxy || r,
                  name: e,
                  type: "add",
                  newValue: t,
                });
                if (!o) return;
                t = o.newValue;
              }
              var i = new xe(t, n, this.name + "." + m(e), !1);
              this.values.set(e, i),
                (t = i.value),
                Object.defineProperty(
                  r,
                  e,
                  (function (e) {
                    return (
                      En[e] ||
                      (En[e] = {
                        configurable: !0,
                        enumerable: !0,
                        get: function () {
                          return this[A].read(e);
                        },
                        set: function (t) {
                          this[A].write(e, t);
                        },
                      })
                    );
                  })(e)
                ),
                this.notifyPropertyAddition(e, t);
            }),
            (e.prototype.addComputedProp = function (e, t, n) {
              var r,
                o,
                i,
                a = this.target;
              (n.name = n.name || this.name + "." + m(t)),
                this.values.set(t, new Ce(n)),
                (e === a ||
                  ((r = e),
                  (o = t),
                  !(i = Object.getOwnPropertyDescriptor(r, o)) ||
                    (!1 !== i.configurable && !1 !== i.writable))) &&
                  Object.defineProperty(
                    e,
                    t,
                    (function (e) {
                      return (
                        xn[e] ||
                        (xn[e] = {
                          configurable: Le.computedConfigurable,
                          enumerable: !1,
                          get: function () {
                            return jn(this).read(e);
                          },
                          set: function (t) {
                            jn(this).write(e, t);
                          },
                        })
                      );
                    })(t)
                  );
            }),
            (e.prototype.remove = function (e) {
              if (this.values.has(e)) {
                var t = this.target;
                if (
                  rn(this) &&
                  !(a = an(this, {
                    object: this.proxy || t,
                    name: e,
                    type: "remove",
                  }))
                )
                  return;
                try {
                  Ke();
                  var n = sn(this),
                    r = this.values.get(e),
                    o = r && r.get();
                  if (
                    (r && r.set(void 0),
                    this.keysAtom.reportChanged(),
                    this.values.delete(e),
                    this.pendingKeys)
                  ) {
                    var i = this.pendingKeys.get(e);
                    i && i.set(!1);
                  }
                  delete this.target[e];
                  var a = n
                    ? {
                        type: "remove",
                        object: this.proxy || t,
                        oldValue: o,
                        name: e,
                      }
                    : null;
                  n && cn(this, a);
                } finally {
                  ze();
                }
              }
            }),
            (e.prototype.illegalAccess = function (e, t) {
              console.warn(
                "Property '" +
                  t +
                  "' of '" +
                  e +
                  "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner"
              );
            }),
            (e.prototype.observe = function (e, t) {
              return un(this, e);
            }),
            (e.prototype.intercept = function (e) {
              return on(this, e);
            }),
            (e.prototype.notifyPropertyAddition = function (e, t) {
              var n = sn(this),
                r = n
                  ? {
                      type: "add",
                      object: this.proxy || this.target,
                      name: e,
                      newValue: t,
                    }
                  : null;
              if ((n && cn(this, r), this.pendingKeys)) {
                var o = this.pendingKeys.get(e);
                o && o.set(!0);
              }
              this.keysAtom.reportChanged();
            }),
            (e.prototype.getKeys = function () {
              var e, t;
              this.keysAtom.reportObserved();
              var n = [];
              try {
                for (
                  var r = R(this.values), o = r.next();
                  !o.done;
                  o = r.next()
                ) {
                  var i = T(o.value, 2),
                    a = i[0];
                  i[1] instanceof xe && n.push(a);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  o && !o.done && (t = r.return) && t.call(r);
                } finally {
                  if (e) throw e.error;
                }
              }
              return n;
            }),
            e
          );
        })();
      function _n(e, t, n) {
        if (
          (void 0 === t && (t = ""),
          void 0 === n && (n = I),
          Object.prototype.hasOwnProperty.call(e, A))
        )
          return e[A];
        h(e) || (t = (e.constructor.name || "ObservableObject") + "@" + a()),
          t || (t = "ObservableObject@" + a());
        var r = new Sn(e, new Map(), m(t), n);
        return p(e, A, r), r;
      }
      var En = Object.create(null),
        xn = Object.create(null);
      function jn(e) {
        return e[A] || (B(e), e[A]);
      }
      var Cn = d("ObservableObjectAdministration", Sn);
      function Rn(e) {
        return !!f(e) && (B(e), Cn(e[A]));
      }
      function Tn(e, t) {
        if ("object" == typeof e && null !== e) {
          if (vn(e)) return void 0 !== t && s(!1), e[A].atom;
          if (An(e)) return e[A];
          if (mn(e)) {
            var n = e;
            return void 0 === t
              ? n._keysAtom
              : ((r = n._data.get(t) || n._hasMap.get(t)) || s(!1), r);
          }
          var r;
          if ((B(e), t && !e[A] && e[t], Rn(e)))
            return t ? ((r = e[A].values.get(t)) || s(!1), r) : s(!1);
          if (_(e) || Re(e) || et(e)) return e;
        } else if ("function" == typeof e && et(e[A])) return e[A];
        return s(!1);
      }
      function Dn(e, t) {
        return (
          e || s("Expecting some object"),
          void 0 !== t
            ? Dn(Tn(e, t))
            : _(e) || Re(e) || et(e) || mn(e) || An(e)
            ? e
            : (B(e), e[A] ? e[A] : void s(!1))
        );
      }
      function Pn(e, t) {
        return (
          void 0 !== t ? Tn(e, t) : Rn(e) || mn(e) || An(e) ? Dn(e) : Tn(e)
        ).name;
      }
      var kn = Object.prototype.toString;
      function Nn(e, t, n) {
        return void 0 === n && (n = -1), Vn(e, t, n);
      }
      function Vn(e, t, n, r, o) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return !1;
        if (e != e) return t != t;
        var i = typeof e;
        if ("function" !== i && "object" !== i && "object" != typeof t)
          return !1;
        var a = kn.call(e);
        if (a !== kn.call(t)) return !1;
        switch (a) {
          case "[object RegExp]":
          case "[object String]":
            return "" + e == "" + t;
          case "[object Number]":
            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
          case "[object Date]":
          case "[object Boolean]":
            return +e == +t;
          case "[object Symbol]":
            return (
              "undefined" != typeof Symbol &&
              Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
            );
          case "[object Map]":
          case "[object Set]":
            n >= 0 && n++;
        }
        (e = Bn(e)), (t = Bn(t));
        var s = "[object Array]" === a;
        if (!s) {
          if ("object" != typeof e || "object" != typeof t) return !1;
          var u = e.constructor,
            c = t.constructor;
          if (
            u !== c &&
            !(
              "function" == typeof u &&
              u instanceof u &&
              "function" == typeof c &&
              c instanceof c
            ) &&
            "constructor" in e &&
            "constructor" in t
          )
            return !1;
        }
        if (0 === n) return !1;
        n < 0 && (n = -1), (o = o || []);
        for (var l = (r = r || []).length; l--; )
          if (r[l] === e) return o[l] === t;
        if ((r.push(e), o.push(t), s)) {
          if ((l = e.length) !== t.length) return !1;
          for (; l--; ) if (!Vn(e[l], t[l], n - 1, r, o)) return !1;
        } else {
          var f = Object.keys(e),
            h = void 0;
          if (((l = f.length), Object.keys(t).length !== l)) return !1;
          for (; l--; )
            if (!Ln(t, (h = f[l])) || !Vn(e[h], t[h], n - 1, r, o)) return !1;
        }
        return r.pop(), o.pop(), !0;
      }
      function Bn(e) {
        return vn(e)
          ? e.slice()
          : y(e) || mn(e) || b(e) || An(e)
          ? Array.from(e.entries())
          : e;
      }
      function Ln(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function In(e) {
        return (e[Symbol.iterator] = Mn), e;
      }
      function Mn() {
        return this;
      }
      if ("undefined" == typeof Proxy || "undefined" == typeof Symbol)
        throw new Error(
          "[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore."
        );
      "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
          spy: nt,
          extras: { getDebugName: Pn },
          $mobx: A,
        });
    },
  },
]);
