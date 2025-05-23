(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [191],
  {
    9191: (t, e, r) => {
      "use strict";
      r.r(e),
        r.d(e, {
          PROVIDERS: () => p,
          PROVIDERS_API: () => w,
          changeState: () => m,
          init: () => l,
        });
      var i = r(8127),
        s = r(2543),
        n = r(5617),
        o = r(8665);
      let a = null;
      var c = r(3848),
        d = r(6559);
      const u = {};
      let h = {};
      function l(t) {
        return (
          Array.from(document.querySelectorAll(".dmSignup")).forEach((t) => {
            u[t.id] && u[t.id].removeEventListeners(),
              (u[t.id] = new f({ container: t }));
          }),
          u[(t || {}).id] || {}
        );
      }
      function m(t, e) {
        (h = u[t]),
          h.identityProvider === e ||
            ("default" === h.identityProvider &&
              h.defaultCurrentVaritation === e) ||
            (u[t].initStates(e), u[t].changeState(e));
      }
      const p = ["okta", "azuread", "auth0"],
        w = ["oktaApi", "auth0Api"],
        S = {
          empty: {},
          signup: {},
          login: {},
          resetPassword: {},
          chooseNewPassword: {},
          newPasswordSuccess: {},
          resetPasswordCheckEmail: {},
        };
      class f {
        constructor({ container: t }) {
          h = t;
          const e = h.querySelector("#runtime-model");
          (this.identityProvider = h.getAttribute("provider")),
            (this.defaultCurrentVaritation = h.getAttribute(
              "defaultCurrentVariation"
            )),
            (this.runtimeModel = JSON.parse(
              i.Base64.decode(e.dataset.runtimeModel)
            )),
            (this.searchParams = (function (t) {
              const e = {},
                r = ("?" === t[0] ? t.substr(1) : t).split("&");
              for (const t of r) {
                const r = t.split("=");
                e[decodeURIComponent(r[0])] = decodeURIComponent(r[1] || "");
              }
              return e;
            })(window.location.search)),
            (this.signupStateVariation = this.runtimeModel.statesVariation),
            this.initStates(this.identityProvider),
            this.initInitialState(this.identityProvider),
            this.bindMethods();
        }
        changeState(t) {
          this.hideAll(), (S[t].div.style.display = "flex");
        }
        hideAll() {
          for (const t in S)
            S[t].hasOwnProperty("div") &&
              null !== S[t].div &&
              (S[t].div.style.display = "none");
        }
        bindMethods() {
          (this.changeState = this.changeState.bind(this)),
            (this.hideAll = this.hideAll.bind(this)),
            (this.handleSubmitForm = this.handleSubmitForm.bind(this)),
            (this.addEventListener = this.addEventListener.bind(this)),
            (this.initStates = this.initStates.bind(this)),
            (this.removeEventListeners = this.removeEventListeners.bind(this)),
            (this.handleSignupFormSubmit =
              this.handleSignupFormSubmit.bind(this)),
            (this.handleLoginFormSubmit =
              this.handleLoginFormSubmit.bind(this)),
            (this.handleResetPasswordSubmit =
              this.handleResetPasswordSubmit.bind(this)),
            (this.initInitialState = this.initInitialState.bind(this));
        }
        removeEventListeners() {
          for (const t in S)
            S[t].hasOwnProperty("links") &&
              S[t].links.forEach((t) => {
                t.element.removeEventListener("touchstart", (e) => {
                  e.preventDefault(), t.callback();
                }),
                  t.element.removeEventListener("click", (e) => {
                    e.preventDefault(), t.callback();
                  });
              });
          "default" === this.runtimeModel.statesVariation.toLowerCase() &&
            (this.signupForm.removeEventListener("submit", async (t) => {
              t.preventDefault(), await this.handleSignupFormSubmit();
            }),
            this.loginForm.removeEventListener("submit", async (t) => {
              t.preventDefault(), await this.handleLoginFormSubmit();
            }),
            this.resetPasswordForm.removeEventListener("submit", async (t) => {
              t.preventDefault(), await this.handleResetPasswordSubmit();
            }));
        }
        initStates(t) {
          "default" === t &&
            (this.initEmptyState(),
            (this.signupForm = h.querySelector(".signup-form")),
            (this.loginForm = h.querySelector(".login-form")),
            (this.resetPasswordStateDiv = h.querySelector(
              ".reset-password-state"
            )),
            (this.resetPasswordForm = this.resetPasswordStateDiv.querySelector(
              ".reset-password-form"
            )),
            this.initSignupState(),
            this.initLoginState(),
            this.initResetPasswordState(),
            this.initResetPasswordCheckEmailState(),
            this.initChooseNewPasswordState(),
            this.initNewPasswordSuccessState()),
            p.includes(t) && this.initProviderOidcState(t),
            w.includes(t) && this.initProviderApiState(t);
        }
        initInitialState(t) {
          if ("default" === t.toLowerCase()) {
            if ("reset" === this.searchParams.type) {
              if (this.searchParams.success)
                return void this.changeState("newPasswordSuccess");
              if (this.searchParams.token)
                return void this.changeState("chooseNewPassword");
              if ("invalid-token" === this.searchParams.error)
                return void this.changeState("resetPassword");
            }
            const t = h.getAttribute("default-state").toLowerCase();
            this.changeState(t);
          } else this.changeState(t);
        }
        initEmptyState() {
          S.empty.div = h.querySelector(".empty-state");
        }
        initResetPasswordState() {
          (S.resetPassword.div = this.resetPasswordStateDiv),
            (S.resetPassword.links = [
              {
                element: this.resetPasswordStateDiv.querySelector(
                  ".go-to-login-section"
                ),
                callback: () => this.changeState("login"),
              },
            ]),
            "reset" === this.searchParams.type &&
              "invalid-token" === this.searchParams.error &&
              (this.resetPasswordStateDiv.querySelector(
                ".form-description"
              ).textContent =
                this.runtimeModel.resetPasswordInvalidTokenDescription),
            S.resetPassword.links.map((t) => this.addEventListener(t));
          const t = this.resetPasswordStateDiv.querySelector("#email"),
            e = () => {
              t.setCustomValidity(this.runtimeModel.formUserNotExistsErrorText),
                t.reportValidity();
            };
          t.addEventListener(
            "keyup",
            (0, s.debounce)((r) => {
              r.preventDefault(),
                this.validateUserExistence({
                  inputField: t,
                  onUserNotExists: e,
                });
            }, 400)
          ),
            this.resetPasswordForm.addEventListener("submit", async (t) => {
              t.preventDefault(), await this.handleResetPasswordSubmit();
            });
        }
        initSignupState() {
          (this.loginLink = h.querySelector(".login-link")),
            (this.signupStateDiv = h.querySelector(".signup-state")),
            (S.signup.div = this.signupStateDiv),
            (S.signup.links = [
              {
                element: this.loginLink,
                callback: () => this.changeState("login"),
              },
            ]),
            S.signup.links.map((t) => this.addEventListener(t)),
            this.signupForm.addEventListener("submit", async (t) => {
              t.preventDefault(), await this.handleSignupFormSubmit();
            });
          const t = this.signupForm.querySelector("#email"),
            e = () => {
              t.setCustomValidity(this.runtimeModel.formUserExistErrorText),
                t.reportValidity();
            };
          t.addEventListener(
            "keyup",
            (0, s.debounce)((r) => {
              r.preventDefault(),
                this.validateUserExistence({ inputField: t, onUserExists: e });
            }, 400)
          ),
            this.initPasswordButton(this.signupForm);
        }
        initLoginState() {
          (this.loginStateDiv = h.querySelector(".login-state")),
            (this.forgotPasswordLink = h.querySelector(
              ".forgot-password-link"
            )),
            (this.notAMemberLink = h.querySelector(".not-a-member-link")),
            (S.login.div = this.loginStateDiv),
            (S.login.links = [
              {
                element: this.notAMemberLink,
                callback: () => this.changeState("signup"),
              },
              {
                element: this.forgotPasswordLink,
                callback: () => this.changeState("resetPassword"),
              },
            ]),
            S.login.links.map((t) => this.addEventListener(t)),
            this.loginForm.addEventListener("submit", async (t) => {
              t.preventDefault(), await this.handleLoginFormSubmit();
            }),
            this.initPasswordButton(this.loginForm);
        }
        initResetPasswordCheckEmailState() {
          (this.resetPasswordCheckEmailStateDiv = h.querySelector(
            ".reset-password-check-email-state"
          )),
            (S.resetPasswordCheckEmail.div =
              this.resetPasswordCheckEmailStateDiv),
            (S.resetPasswordCheckEmail.links = [
              {
                element: this.resetPasswordCheckEmailStateDiv.querySelector(
                  ".go-to-login-section"
                ),
                callback: () => this.changeState("login"),
              },
            ]),
            S.resetPasswordCheckEmail.links.map((t) =>
              this.addEventListener(t)
            );
        }
        initChooseNewPasswordState() {
          (this.chooseNewPasswordStateDiv = h.querySelector(
            ".choose-new-password-state"
          )),
            (S.chooseNewPassword.div = this.chooseNewPasswordStateDiv),
            this.searchParams.token &&
              (this.chooseNewPasswordStateDiv.querySelector("#token").value =
                this.searchParams.token);
        }
        initNewPasswordSuccessState() {
          (this.newPasswordSuccessStateDiv = h.querySelector(
            ".new-password-success-state"
          )),
            (this.goToSiteBtn =
              this.newPasswordSuccessStateDiv.querySelector("#go-to-site-btn")),
            (S.newPasswordSuccess.div = this.newPasswordSuccessStateDiv),
            this.goToSiteBtn.addEventListener(
              "click",
              async (t) => {
                t.preventDefault(), await this.handleGoToSiteRequest();
              },
              !1
            );
        }
        initPasswordButton(t) {
          const e = t.querySelector("#password"),
            r = t.querySelector(".show-button"),
            i = t.querySelector("#show-password-button"),
            s = t.querySelector("#show-password-icon"),
            n = t.querySelector("#show-password-off-icon");
          e.addEventListener("input", (t) => {
            t.target.value
              ? (r.style.display = "flex")
              : (r.style.display = "none");
          }),
            i.addEventListener("change", (t) => {
              t.target.checked
                ? ((e.type = "text"),
                  (n.style.display = "block"),
                  (s.style.display = "none"))
                : ((e.type = "password"),
                  (n.style.display = "none"),
                  (s.style.display = "block"));
            });
        }
        initProviderOidcState(t) {
          (S[t] = {}),
            (S[t].div = h.querySelector(`.${t}-state`)),
            g(S[t].div.querySelector(".auth-error"), ""),
            "access_denied" === this.searchParams.error &&
              g(
                S[t].div.querySelector(".auth-error"),
                this.runtimeModel.providerAccessDeniedErrorText
              );
        }
        initProviderApiState(t) {
          (S[t] = {}),
            (S[t].form = h.querySelector(`.${t}-form`)),
            (S[t].div = h.querySelector(`.${t}-state`));
          const e = S[t].div.querySelector(".form-error");
          g(e, ""),
            "access_denied" === this.searchParams.error
              ? g(e, this.runtimeModel.providerAccessDeniedErrorText)
              : "invalid_credentials" === this.searchParams.error
              ? g(e, this.runtimeModel.formIncorrectCredentialsText)
              : "true" === this.searchParams.error &&
                g(e, this.runtimeModel.formErrorText),
            this.initPasswordButton(S[t].form);
        }
        validateUserExistence({
          inputField: t,
          onUserExists: e,
          onUserNotExists: r,
        }) {
          if (
            (t.setCustomValidity(""),
            t.value.length && t.validity.valid && !this.isInPreviewMode())
          ) {
            const i = `/rts/auth/public/users/${t.value}`;
            (0, d.e)({ url: i })
              .then(() => {
                e && e();
              })
              .catch((t) => {
                t.status && 404 !== t.status
                  ? n.C_.warn({ message: "Error getting a user", error: t })
                  : r && r();
              });
          }
        }
        addEventListener({ element: t, callback: e }) {
          t.addEventListener("touchstart", (t) => {
            t.preventDefault(), e();
          }),
            t.addEventListener("click", (t) => {
              t.preventDefault(), e();
            });
        }
        async handleSignupFormSubmit() {
          g(this.signupForm.querySelector(".form-error"), ""),
            await this.handleSubmitForm(
              this.signupForm,
              "/rts/auth/public/user",
              v,
              () => {
                g(
                  this.signupForm.querySelector(".form-error"),
                  this.runtimeModel.formErrorText
                );
              }
            );
        }
        async handleResetPasswordSubmit() {
          g(this.resetPasswordForm.querySelector(".form-error"), ""),
            await this.handleSubmitForm(
              this.resetPasswordForm,
              "/rts/auth/public/users/resetPassword",
              () => {
                this.changeState("resetPasswordCheckEmail");
              },
              () => {
                g(
                  this.resetPasswordForm.querySelector(".form-error"),
                  this.runtimeModel.formErrorText
                );
              }
            );
        }
        async handleLoginFormSubmit() {
          g(this.loginForm.querySelector(".form-error"), "");
          const t = this.loginForm.querySelectorAll(
            "#password-field,#username"
          );
          t.forEach((t) => t.classList.remove("invalid-input")),
            this.handleSubmitForm(this.loginForm, "/rts/auth/login", v, (e) => {
              if (401 === e.status)
                return (
                  t.forEach((t) => t.classList.add("invalid-input")),
                  void g(
                    this.loginForm.querySelector(".form-error"),
                    this.runtimeModel.formIncorrectCredentialsText
                  )
                );
              g(
                this.loginForm.querySelector(".form-error"),
                this.runtimeModel.formErrorText
              );
            });
        }
        async handleGoToSiteRequest() {
          const t = window.Parameters.HomeUrl;
          window.location.assign(t);
        }
        async handleSubmitForm(t, e, r, i) {
          const s = t.querySelector("input[type='submit']");
          s.disabled = !0;
          try {
            if ((0, c.DD)()) return;
            this.isInPreviewMode()
              ? await (async function (t) {
                  try {
                    v(
                      await fetch("/ms/auth/public/preview/authorize", {
                        method: "GET",
                        redirect: "follow",
                      })
                    );
                  } catch (e) {
                    n.C_.info({ message: "error in preview", error: e }), t(e);
                  }
                })(i)
              : await (async function (t, e, r, i) {
                  const s = await (async function (t) {
                      let e = "";
                      return (
                        window.friendlyChallenge
                          ? (e = (function (t) {
                              const e = t.querySelector(
                                ".frc-captcha-solution"
                              );
                              return e && e.getAttribute("value");
                            })(t))
                          : window.grecaptcha &&
                            (e = await (async function () {
                              (window.captchaPromise = new o.c()),
                                window.grecaptcha.execute(),
                                (function () {
                                  const t = [
                                    ...document.getElementsByTagName("iframe"),
                                  ].find((t) =>
                                    t.src?.includes(
                                      "google.com/recaptcha/api2/bframe"
                                    )
                                  )?.parentNode?.parentNode;
                                  t &&
                                    ((a = new MutationObserver(function (t) {
                                      t.forEach((t) => {
                                        "attributes" === t.type &&
                                          "style" === t.attributeName &&
                                          "0" === t.target.style.opacity &&
                                          (a && a.disconnect(),
                                          window.grecaptcha.reset(),
                                          window.captchaPromise.resolve(null));
                                      });
                                    })),
                                    a.observe(t, {
                                      attributes: !0,
                                      attributeFilter: ["style"],
                                    }));
                                })();
                              const t = await window.captchaPromise;
                              return (
                                window.grecaptcha.reset(),
                                a && a.disconnect(),
                                t
                              );
                            })()),
                        e
                      );
                    })(t),
                    c = (function (t, e = "") {
                      const r = new FormData(t),
                        i = r.has(P) ? P : r.has(y) ? y : "";
                      return i
                        ? encodeURIComponent(i) +
                            "=" +
                            encodeURIComponent(e) +
                            `&isInvisibleCaptcha=${
                              ((s = i), !s.includes(y) && s.includes(P))
                            }`
                        : "";
                      var s;
                    })(t, s),
                    d = c ? `${e}?${c}` : e;
                  try {
                    const e = {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                    };
                    e.body = (function (t) {
                      const e = new FormData(t);
                      e.delete(P), e.delete(y);
                      const r = new URLSearchParams();
                      for (const [t, i] of e) r.append(t, i);
                      return r.toString();
                    })(t);
                    const s = await fetch(d, e);
                    s.status >= 200 && s.status <= 400 ? r(s) : i(s);
                  } catch (t) {
                    n.C_.warn({
                      dataString: {
                        message: "Error handling signup widget form",
                        error: t,
                      },
                    }),
                      i(t);
                  }
                })(t, e, r, i);
          } finally {
            s.disabled = !1;
          }
        }
        isInPreviewMode() {
          return this.runtimeModel.isInPreview;
        }
      }
      function v(t) {
        t.redirected && window.location.assign(t.url);
      }
      function g(t, e) {
        (t.style.display = e ? "block" : "none"), (t.textContent = e);
      }
      const y = "frc-captcha-solution",
        P = "g-recaptcha-response";
    },
    8127: function (t, e, r) {
      var i, s;
      (s =
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : void 0 !== r.g
          ? r.g
          : this),
        (t.exports = (function (r) {
          "use strict";
          var s,
            n = (r = r || {}).Base64,
            o =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            a = (function (t) {
              for (var e = {}, r = 0, i = t.length; r < i; r++)
                e[t.charAt(r)] = r;
              return e;
            })(o),
            c = String.fromCharCode,
            d = function (t) {
              if (t.length < 2)
                return (e = t.charCodeAt(0)) < 128
                  ? t
                  : e < 2048
                  ? c(192 | (e >>> 6)) + c(128 | (63 & e))
                  : c(224 | ((e >>> 12) & 15)) +
                    c(128 | ((e >>> 6) & 63)) +
                    c(128 | (63 & e));
              var e =
                65536 +
                1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320);
              return (
                c(240 | ((e >>> 18) & 7)) +
                c(128 | ((e >>> 12) & 63)) +
                c(128 | ((e >>> 6) & 63)) +
                c(128 | (63 & e))
              );
            },
            u = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
            h = function (t) {
              return t.replace(u, d);
            },
            l = function (t) {
              var e = [0, 2, 1][t.length % 3],
                r =
                  (t.charCodeAt(0) << 16) |
                  ((t.length > 1 ? t.charCodeAt(1) : 0) << 8) |
                  (t.length > 2 ? t.charCodeAt(2) : 0);
              return [
                o.charAt(r >>> 18),
                o.charAt((r >>> 12) & 63),
                e >= 2 ? "=" : o.charAt((r >>> 6) & 63),
                e >= 1 ? "=" : o.charAt(63 & r),
              ].join("");
            },
            m =
              r.btoa && "function" == typeof r.btoa
                ? function (t) {
                    return r.btoa(t);
                  }
                : function (t) {
                    if (t.match(/[^\x00-\xFF]/))
                      throw new RangeError(
                        "The string contains invalid characters."
                      );
                    return t.replace(/[\s\S]{1,3}/g, l);
                  },
            p = function (t) {
              return m(h(String(t)));
            },
            w = function (t) {
              return t
                .replace(/[+\/]/g, function (t) {
                  return "+" == t ? "-" : "_";
                })
                .replace(/=/g, "");
            },
            S = function (t, e) {
              return e ? w(p(t)) : p(t);
            };
          r.Uint8Array &&
            (s = function (t, e) {
              for (var r = "", i = 0, s = t.length; i < s; i += 3) {
                var n = t[i],
                  a = t[i + 1],
                  c = t[i + 2],
                  d = (n << 16) | (a << 8) | c;
                r +=
                  o.charAt(d >>> 18) +
                  o.charAt((d >>> 12) & 63) +
                  (void 0 !== a ? o.charAt((d >>> 6) & 63) : "=") +
                  (void 0 !== c ? o.charAt(63 & d) : "=");
              }
              return e ? w(r) : r;
            });
          var f,
            v =
              /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
            g = function (t) {
              switch (t.length) {
                case 4:
                  var e =
                    (((7 & t.charCodeAt(0)) << 18) |
                      ((63 & t.charCodeAt(1)) << 12) |
                      ((63 & t.charCodeAt(2)) << 6) |
                      (63 & t.charCodeAt(3))) -
                    65536;
                  return c(55296 + (e >>> 10)) + c(56320 + (1023 & e));
                case 3:
                  return c(
                    ((15 & t.charCodeAt(0)) << 12) |
                      ((63 & t.charCodeAt(1)) << 6) |
                      (63 & t.charCodeAt(2))
                  );
                default:
                  return c(
                    ((31 & t.charCodeAt(0)) << 6) | (63 & t.charCodeAt(1))
                  );
              }
            },
            y = function (t) {
              return t.replace(v, g);
            },
            P = function (t) {
              var e = t.length,
                r = e % 4,
                i =
                  (e > 0 ? a[t.charAt(0)] << 18 : 0) |
                  (e > 1 ? a[t.charAt(1)] << 12 : 0) |
                  (e > 2 ? a[t.charAt(2)] << 6 : 0) |
                  (e > 3 ? a[t.charAt(3)] : 0),
                s = [c(i >>> 16), c((i >>> 8) & 255), c(255 & i)];
              return (s.length -= [0, 0, 2, 1][r]), s.join("");
            },
            b =
              r.atob && "function" == typeof r.atob
                ? function (t) {
                    return r.atob(t);
                  }
                : function (t) {
                    return t.replace(/\S{1,4}/g, P);
                  },
            E = function (t) {
              return b(String(t).replace(/[^A-Za-z0-9\+\/]/g, ""));
            },
            F = function (t) {
              return String(t)
                .replace(/[-_]/g, function (t) {
                  return "-" == t ? "+" : "/";
                })
                .replace(/[^A-Za-z0-9\+\/]/g, "");
            },
            k = function (t) {
              return (function (t) {
                return y(b(t));
              })(F(t));
            };
          r.Uint8Array &&
            (f = function (t) {
              return Uint8Array.from(E(F(t)), function (t) {
                return t.charCodeAt(0);
              });
            });
          if (
            ((r.Base64 = {
              VERSION: "2.6.4",
              atob: E,
              btoa: m,
              fromBase64: k,
              toBase64: S,
              utob: h,
              encode: S,
              encodeURI: function (t) {
                return S(t, !0);
              },
              btou: y,
              decode: k,
              noConflict: function () {
                var t = r.Base64;
                return (r.Base64 = n), t;
              },
              fromUint8Array: s,
              toUint8Array: f,
            }),
            "function" == typeof Object.defineProperty)
          ) {
            var A = function (t) {
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
                A(function () {
                  return k(this);
                })
              ),
                Object.defineProperty(
                  String.prototype,
                  "toBase64",
                  A(function (t) {
                    return S(this, t);
                  })
                ),
                Object.defineProperty(
                  String.prototype,
                  "toBase64URI",
                  A(function () {
                    return S(this, !0);
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
        })(s));
    },
  },
]);
