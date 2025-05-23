"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [62],
  {
    7062: (t, i, e) => {
      e.r(i), e.d(i, { changeState: () => s, init: () => o });
      var n = e(5617);
      const a = {};
      function o(t) {
        return (
          Array.from(document.querySelectorAll(".dmLoginBar")).forEach((t) => {
            a[t.id] && a[t.id].removeEventListeners(),
              (a[t.id] = new r({ container: t }));
          }),
          a[(t || {}).id] || {}
        );
      }
      function s(t, i) {
        a[t].changeState(i);
      }
      class r {
        constructor({ container: t }) {
          (this.STATES = { empty: {}, loginButton: {}, profileBar: {} }),
            (this.updateText = ({ state: t, element: i, text: e }) => {
              (this.STATES[t][i].textContent = e),
                "memberNameSpan" === i &&
                  this.STATES[t][i].setAttribute("data-label", e);
            }),
            (this.container = t),
            this.bindMethods(),
            this.initStates();
        }
        changeState(t) {
          this.hideAll(),
            (this.STATES[t].div.style.display = "flex"),
            this.container.setAttribute("data-showstate", t);
        }
        hideAll() {
          for (const t in this.STATES)
            this.STATES[t].hasOwnProperty("div") &&
              null !== this.STATES[t].div &&
              (this.STATES[t].div.style.display = "none");
        }
        hideMyAccountLink() {
          this.changeMyAccount("none");
        }
        showMyAccountLink() {
          this.changeMyAccount(null);
        }
        changeMyAccount(t) {
          const { myAccountLink: i } = this.STATES.profileBar;
          i && (i.style.display = t);
        }
        bindMethods() {
          (this.changeState = this.changeState.bind(this)),
            (this.hideAll = this.hideAll.bind(this)),
            (this.initStates = this.initStates.bind(this)),
            (this.initInitialState = this.initInitialState.bind(this));
        }
        initStates() {
          this.initEmptyState(),
            this.initLoginButtonState(),
            this.initProfileBarState(),
            this.initInitialState();
        }
        async initInitialState() {
          this.changeState("empty");
          try {
            const t = this.container.getAttribute("data-layout"),
              i = await (async () =>
                (
                  await window.dmAPI.getLoggedInUser()
                ).userInfo)();
            "BUTTON" === t &&
              this.updateText({
                state: "profileBar",
                element: "memberNameSpan",
                text: `${i.firstname} ${i.lastname}`,
              }),
              this.changeState("profileBar"),
              window.Snipcart && this.showMyAccountLink(),
              document.addEventListener("snipcart.ready", () => {
                this.showMyAccountLink();
              });
          } catch (t) {
            this.changeState("loginButton");
          }
        }
        initEmptyState() {
          this.STATES.empty.div = this.container.querySelector(".empty-state");
        }
        initLoginButtonState() {
          this.STATES.loginButton.div = this.container.querySelector(
            ".login-button-state"
          );
        }
        handleClickMyAccount() {
          window.location.assign(`${window.location.pathname}#/dashboard`);
        }
        async handleClickLogout() {
          try {
            await fetch("/rts/auth/public/users/logout", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }),
              window.location.reload();
          } catch (t) {
            n.C_.warn({
              dataString: { message: "Error logging out a user", error: t },
            });
          }
        }
        initProfileBarState() {
          const t = this.container.querySelector(".profile-bar-state");
          (this.STATES.profileBar.div = t),
            (this.STATES.profileBar.memberNameSpan =
              t.querySelector("#member-name")),
            (this.STATES.profileBar.logoutLink =
              t.querySelector(".logout-link")),
            (this.STATES.profileBar.myAccountLink =
              t.querySelector(".my-account-link")),
            this.hideMyAccountLink(),
            this.STATES.profileBar.myAccountLink.addEventListener(
              "click",
              this.handleClickMyAccount
            ),
            this.STATES.profileBar.logoutLink.addEventListener(
              "click",
              this.handleClickLogout
            );
        }
        removeEventListeners() {
          this.STATES.profileBar.logoutLink.removeEventListener(
            "click",
            this.handleClickLogout
          );
        }
      }
    },
  },
]);
