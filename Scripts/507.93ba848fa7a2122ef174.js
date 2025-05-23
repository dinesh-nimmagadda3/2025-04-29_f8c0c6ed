"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [507],
  {
    507: (e, t, o) => {
      o.r(t),
        o.d(t, {
          changeStoreAttribute: () => j,
          init: () => De,
          navigateToCart: () => ne,
          navigateToCategories: () => ce,
          navigateToNewStorePage: () => ge,
          navigateToProduct: () => re,
          navigateToProductAddedToBag: () => ie,
          navigateToProducts: () => ae,
          navigateToSearch: () => se,
          navigateToStorePage: () => oe,
          refreshStoreConfig: () => z,
          shouldLoadEcwidV3: () => Be,
          updateStorePageUrl: () => E,
        });
      var r = o(6856);
      const n = () => (0, r.V)("ecom.ecwidNewUrlStructure.enabled", !1),
        i = {
          ALL_PRODUCTS_MS_STORE: "ALL_PRODUCTS_MS_STORE",
          ALL_CATEGORIES_MS_STORE: "ALL_CATEGORIES_MS_STORE",
        },
        a = {
          CATEGORY: "CATEGORY",
          PRODUCT: "PRODUCT",
          CART: "CART",
          ACCOUNT_ROOT: "ACCOUNT_ROOT",
          SIGN_IN: "SIGN_IN",
        },
        c = () => {
          const { Ecwid: e } = window;
          return e?.isStorefrontV3 && e.isStorefrontV3();
        },
        s = "STORE_FRONT_PAGE",
        d = "STORE_CATEGORY_PAGE",
        l = "STORE_PRODUCT_PAGE",
        u = "STORE_CHECKOUT_PAGE",
        w = "STORE_SEARCH_PAGE",
        f = "STORE_ACCOUNT_PAGE",
        g = {
          STORE_FRONT_PAGE: s,
          STORE_CATEGORY_PAGE: d,
          STORE_PRODUCT_PAGE: l,
          STORE_CHECKOUT_PAGE: u,
          STORE_SEARCH_PAGE: w,
          STORE_ACCOUNT_PAGE: f,
        };
      var _ = o(3848);
      const m = "keyword",
        p = {};
      function h() {
        return "true" === Parameters?.IsNewStore;
      }
      function S() {
        try {
          return JSON.parse(Base64.decode(Parameters.StorePagesUrls));
        } catch (e) {
          return [];
        }
      }
      function E(e, t) {
        const o = S();
        o[e] &&
          ((o[e] = t),
          (Parameters.StorePagesUrls = Base64.encode(JSON.stringify(o))));
      }
      function y() {
        return Parameters.pageType;
      }
      function P(e) {
        p.currentPage = e;
      }
      function C() {
        return p.currentPage;
      }
      function O() {
        return y() === g.STORE_CHECKOUT_PAGE;
      }
      function T() {
        return y() === g.STORE_PRODUCT_PAGE;
      }
      function A() {
        return y() === g.STORE_CATEGORY_PAGE;
      }
      function R() {
        return y() === g.STORE_SEARCH_PAGE;
      }
      function b() {
        return y() === g.STORE_ACCOUNT_PAGE;
      }
      function v(e) {
        p.currentUrl = e;
      }
      function I() {
        return window.location.href?.includes("account?key=");
      }
      function L() {
        return S().STORE_CHECKOUT_PAGE;
      }
      var k = o(2543),
        U = o(5617),
        G = o(6362);
      let N = {},
        D = {};
      function B(e) {
        return N[e];
      }
      function M(e) {
        return D[e];
      }
      async function x(e) {
        try {
          if (!e || !e.length) return;
          const t = new Set();
          e.forEach((e) => {
            const o = e.href?.match(/-p(\d+)/)?.[1];
            o && t.add(o);
          }),
            (N = await V(i.ALL_PRODUCTS_MS_STORE, Array.from(t)));
        } catch (e) {
          U.C_.error({
            dataString: {
              message: "Error get collection products links",
              error: e,
            },
          }),
            (N = {});
        }
      }
      async function q(e) {
        try {
          if (!e || !e.length) return;
          const t = new Set();
          e.forEach((e) => {
            const o = e.href?.match(/-c(\d+)/)?.[1];
            o && t.add(o);
          }),
            (D = await V(i.ALL_CATEGORIES_MS_STORE, Array.from(t)));
        } catch (e) {
          (D = {}),
            U.C_.error({
              dataString: {
                message: "Error get collection categories links",
                error: e,
              },
            });
        }
      }
      function H(e) {
        return ((0, _.jw)() ? (0, G.T_)(e) : e).replace("//", "/");
      }
      async function V(e, t = []) {
        const o = await window.dmAPI.loadCollectionsAPI(),
          r = await o.data(e).where("id", "IN", t).select("link", "id").get(),
          n = window.location.origin;
        return r.values?.reduce(
          (e, t) => ((e[t.data.id] = n + H(t.data.link)), e),
          {}
        );
      }
      async function Y(e, t) {
        try {
          const o = await window.dmAPI.loadCollectionsAPI(),
            r = await o.data(t).where("id", "EQ", e).select("link").get(),
            n = r.values?.[0]?.data?.link;
          if (!n)
            throw new Error(
              `getCollectionItemLink: item ${e} (${t}) not found`
            );
          const a = window.location.origin + H(n);
          return t === i.ALL_CATEGORIES_MS_STORE
            ? ((D[e] = a), D[e])
            : ((N[e] = a), N[e]);
        } catch (e) {
          return (
            U.C_.error({
              dataString: {
                message: "Error get collection item link",
                error: e,
              },
            }),
            null
          );
        }
      }
      function j(e, t, o) {
        window.ec.storefront[t] = o;
        const r = "data-" + t.replace(/_/g, "-"),
          n = $("body");
        n.find(".ecwid[data-store-version]").attr(r, o),
          n.find(".ecwid[data-store-version]").data(e, o);
      }
      function z() {
        try {
          window.Ecwid.refreshConfig(), window.Ecwid.resizeProductBrowser();
        } catch (e) {}
      }
      function K() {
        return !!window.ecwid_prevent_scroll_to_top;
      }
      function W() {
        let e = { ...window.ec };
        return (
          window.ec?.config && (e = { ...window.ec.config }),
          (e.storefrontUrls = e.storefrontUrls || {}),
          (e.storefrontUrls.cleanUrls = !0),
          (e.baseUrl = (function () {
            if (h())
              try {
                const e = S()[y()];
                return Be() && (0, _.OK)() ? (0, G.T_)(e) : e;
              } catch (e) {}
            return encodeURI(Parameters.StoreBaseUrl);
          })()),
          (e.enable_canonical_urls = !0),
          Parameters.StoreDisableScrolling &&
            ((e.navigation_scrolling = "CUSTOM"),
            (e.custom_scroller = function () {
              if (!h()) {
                if (K()) return;
                $.DM.getScrollableElement()[0].scrollTo(0, 0);
              }
            })),
          e
        );
      }
      function F() {
        const e = { ...window.ec?.storefront },
          t = Parameters.StoreVersion || 0,
          o = t > 1;
        (e.enable_new_product_list = t > 0),
          (e.enable_new_product_details = o),
          (e.enable_new_checkout = o),
          (e.enable_new_shopping_cart = o),
          h() || (e.sharing_button_link = "DIRECT_PAGE_URL");
        const r = $("body").find(".xProductBrowser");
        if (r.length) {
          const t = r.eq(0).data(),
            n = [
              "categoriesPerRow=" + t.catPerRow,
              "views=" + t.views,
              "categoryView=" + t.categoryView,
              "searchView=" + t.searchView,
              ...Q(t),
            ];
          window._xnext_initialization_scripts = [
            { widgetType: "ProductBrowser", id: r.attr("id"), arg: n },
          ];
          const i = "desktop" === $.layoutDevice.type;
          (e.product_list_image_size = t.productListImageSize || "medium"),
            (e.product_list_image_aspect_ratio =
              t.productListImageAspectRatio || "SQUARE_1"),
            (e.product_list_image_has_shadow = t.productListImageHasShadow),
            (e.product_list_show_additional_image_on_hover =
              !!i && !0 === t.productListShowAdditionalImageOnHover),
            (e.product_list_show_frame = t.productListShowFrame),
            (e.product_list_product_info_layout =
              t.productListProductInfoLayout || "center"),
            (e.product_list_title_behavior =
              t[X("productListTitleBehavior")] || "show"),
            (e.product_list_sku_behavior =
              t[X("productListSkuBehavior")] || "hide"),
            (e.product_list_price_behavior =
              t[X("productListPriceBehavior")] || "show"),
            (e.product_list_buybutton_behavior =
              t[X("productListBuybuttonBehavior")] || "hide"),
            (e.product_list_cell_spacing =
              void 0 === t[J("productListCellSpacing")]
                ? null
                : parseInt(t[J("productListCellSpacing")], 10)),
            (e.product_list_show_sort_viewas_options =
              t.productListShowSortViewasOptions),
            (e.product_list_category_image_size =
              t.productListCategoryImageSize || "large"),
            (e.product_list_category_image_aspect_ratio =
              t.productListCategoryImageAspectRatio || "PORTRAIT_075"),
            (e.product_list_category_title_behavior =
              t[X("productListCategoryTitleBehavior")] ||
              ("desktop" === $.layoutDevice.type
                ? "show_on_image"
                : "show_below_image")),
            (e.product_list_category_cell_spacing =
              void 0 === t[J("productListCategoryCellSpacing")]
                ? 15
                : parseInt(t[J("productListCategoryCellSpacing")], 10)),
            (e.enable_simple_category_list = t.enableSimpleCategoryList);
          for (const o in t)
            t.hasOwnProperty(o) &&
              o.startsWith("productDetails") &&
              (e[(0, k.snakeCase)(o)] = t[o]);
          (e.product_details_cut_product_description_in_sidebar = !1),
            (e.product_details_show_product_name_always_first_on_mobile = !0),
            o && (e.show_breadcrumbs = t.showBreadcrumbs),
            (e.product_details_position_breadcrumbs = 0),
            (e.breadcrumbs_separator = t.breadcrumbsSeparator || "/"),
            (e.show_signin_link =
              void 0 === t.showSigninLink ||
              "" === t.showSigninLink ||
              !0 === t.showSigninLink),
            (e.show_footer_menu = !0 === t.showFooterMenu);
        }
        return e;
      }
      function Q(e) {
        const t = [];
        if (h()) {
          const o = e.storeItemId;
          T() && t.push(`defaultProductId=${o}`),
            A() && t.push(`defaultCategoryId=${o}`);
        } else
          e.initialStoreScreen &&
            "MAIN_STORE" !== e.initialStoreScreen &&
            (e.initialStoreScreen.startsWith("PRODUCT@@")
              ? t.push(
                  "defaultProductId=" +
                    e.initialStoreScreen.split("PRODUCT@@")[1]
                )
              : e.initialStoreScreen.startsWith("CATEGORY@@") &&
                t.push(
                  "defaultCategoryId=" +
                    e.initialStoreScreen.split("CATEGORY@@")[1]
                ));
        return t;
      }
      function J(e) {
        return "mobile" === $.layoutDevice.type
          ? "mobile" + e.charAt(0).toUpperCase() + e.slice(1)
          : e;
      }
      function X(e) {
        return "desktop" === $.layoutDevice.type
          ? e
          : "mobile" + e.charAt(0).toUpperCase() + e.slice(1);
      }
      const Z = {};
      function ee(e) {
        e && $.DM.ajaxNavigateToLink(e, null, null, { skipCache: (0, _.OK)() });
      }
      function te() {
        return $('[data-element-type="ec_store"]').length > 0;
      }
      function oe(e, t, o) {
        let r = window.location.href;
        const n = window.location.pathname;
        let i = r.replace(n, "");
        const a = encodeURI($.DM.getCurrentPageUrl());
        function c(c) {
          let s = c;
          if ("null" !== s) {
            if (
              ("header" === s && (s = a),
              r.indexOf("#!") > -1 &&
                (r = r.substr(0, window.location.href.indexOf("#!"))),
              s && s !== a)
            ) {
              const e = r.split("?");
              let t = Parameters.translatedPageUrl || a;
              t.startsWith("/") && (t = t.substring(1));
              const o = Parameters.SiteAlias,
                c = encodeURI(t);
              if (n.indexOf(t) > -1 || n.indexOf(c) > -1)
                r = i + n.replace("/" + t, "/" + s).replace("/" + c, "/" + s);
              else if (r.indexOf("site/" + o) > -1)
                r = r.replace("site/" + o, "site/" + o + "/" + s);
              else {
                const e = window.location.host;
                r = r.replace(e, e + "/" + s);
              }
              e.length > 1 && (r += "?" + e[1]);
            }
            if (e.indexOf("#!") > -1) {
              let t = r + e;
              e.startsWith("#!") && (t = r + window.location.search + e), ee(t);
            } else {
              const n = r.split("?"),
                i = n[0].split("/" + s + "/");
              let a = "";
              if (i.length > 1) a = i[0] + "/" + s + e;
              else {
                let t = n[0];
                t.endsWith("/") && "home" === s && (t += "home"), (a = t + e);
              }
              if (n.length > 1 && !o) {
                let e;
                (e = (function (e) {
                  const t = e
                    .split("&")
                    .map((e) => e.split("="))
                    .reduce((e, [t, o]) => ((e[t] = o), e), {});
                  return Object.entries(t)
                    .map(([e, t]) => `${e}=${t}`)
                    .join("&");
                })(t ? n[1] + "&" + t : n[1])),
                  (a += "?" + e);
              } else t && (a += "?" + t);
              ee(a);
            }
          }
        }
        (i = i.split("?")[0]),
          window.layoutApp && window.layoutApp.closeNavMenus(),
          (0, _.OK)()
            ? c(
                window.editorParent.$.Editor.state.getState("siteState")
                  .siteStore.storePageAlias
              )
            : c(Parameters.StorePath.substring(1));
      }
      function re(e) {
        te() ? Ecwid.openPage("product", { id: e }) : oe("/-p" + e);
      }
      function ne(e) {
        Ecwid.Cart.get((t) => {
          0 === t.productsQuantity
            ? Ecwid.Cart.addProduct(parseInt(e, 10), () => {
                Ecwid.openPage("cart");
              })
            : Ecwid.openPage("cart");
        });
      }
      function ie() {
        $(".ecwid-btn--addToBag").length &&
          $(".ecwid-btn--addToBag")[0].click(),
          $(".details-product-purchase__add-to-bag").length &&
            $(".details-product-purchase__add-to-bag")[0].click();
      }
      function ae(e) {
        te()
          ? Ecwid.openPage("category", { id: e || 0 })
          : oe(e ? "/-c" + e : "");
      }
      function ce() {
        te() ? Ecwid.openPage("category") : oe("");
      }
      function se(e) {
        te()
          ? Ecwid.openPage("search", { keywords: e })
          : oe("/search", "keywords=" + e);
      }
      async function de(e, t, o) {
        const r = Z[e];
        if (!r)
          return o === a.CATEGORY
            ? void (await ue(e))
            : void (await (async function (e) {
                await le(e, i.ALL_PRODUCTS_MS_STORE);
              })(e));
        if (!t || (0, k.isEmpty)(t)) ee(r);
        else {
          const e = t[_e()];
          e &&
            (function (e, t) {
              const o = fe(t);
              ee(
                e.replace(/\/([^\/?]+)(?:\?|$)/, (e) =>
                  e.includes("?") ? "/" + o + "?" : "/" + o
                )
              );
            })(r, e);
        }
      }
      async function le(e, t) {
        const o = await window.dmAPI.loadCollectionsAPI(),
          r = (await o.data(t).where("id", "EQ", e).select("link").get())
            .values[0].data.link,
          n = window.location.origin;
        ee((0, _.jw)() ? `${n}${(0, G.T_)(r.slice(1))}` : `${n}${r}`);
      }
      async function ue(e) {
        await le(e, i.ALL_CATEGORIES_MS_STORE);
      }
      function we(e) {
        const {
            type: t,
            categoryId: o,
            returnUrl: r,
            productId: i,
            nameTranslated: w,
            sort: g,
            filterParams: m,
            offset: p,
          } = e,
          h = t === a.CATEGORY,
          E = t === a.PRODUCT,
          y = h && 0 === o,
          P = (function ({
            sort: e,
            filterParams: t,
            offset: o,
            categoryId: r,
          }) {
            return (
              (!r || C()?.categoryId === r) &&
              !!(e || t || o) &&
              (o > 0 ||
                "normal" !== e ||
                [
                  "keywords",
                  "onsale",
                  "inventory",
                  "options",
                  "attributes",
                ].some((e) => !(0, k.isEmpty)(t[e])) ||
                ["priceTo", "priceFrom"].some((e) => t[e]))
            );
          })({ sort: g, filterParams: m, offset: p, categoryId: o });
        return c() || !n() || (!h && !E) || y
          ? !!(function (e, t, o, r) {
              if (
                c() &&
                ((n = e), b() ? n === a.ACCOUNT_ROOT : O() && n === a.CART)
              )
                return !0;
              var n;
              const i = !!S()?.STORE_ACCOUNT_PAGE;
              var s;
              return !(
                [
                  a.CATEGORY,
                  a.PRODUCT,
                  a.CART,
                  i && a.ACCOUNT_ROOT,
                  i &&
                    ((s = r), s && !["account/settings"].includes(s)) &&
                    a.SIGN_IN,
                ]
                  .filter(Boolean)
                  .includes(e) &&
                !I() &&
                (!A() || e !== a.CATEGORY || t || C()?.categoryId !== o) &&
                (!(0, _.OK)() || !O() || e !== a.CART)
              );
            })(t, y, o, r) ||
              (y
                ? ge(s, e)
                : h
                ? ge(d, e)
                : E
                ? ge(l, e)
                : t === a.CART
                ? ge(u)
                : (t !== a.ACCOUNT_ROOT && t !== a.SIGN_IN) || ge(f),
              !1)
          : !!P || (h ? de(o, w, t) : E && de(i, w), !1);
      }
      function fe(e) {
        return (0, k.deburr)(e)
          .replace(/°/g, "deg")
          .replace(/®/g, "r")
          .replace(/™/g, "tm")
          .replace(/€/g, "EU")
          .replace(/[ \/+\\%.":?<>{},|\n\t\r]/g, "-")
          .replace(/[#.'()\[\]!]/g, "")
          .replace(/-+/g, "-")
          .replace(/^-+|-+$/g, "");
      }
      function ge(e, t = {}) {
        const {
          productId: o,
          categoryId: r,
          name: a,
          searchTerm: g,
          skipNormalize: _,
        } = t;
        let p = me(e);
        switch (e) {
          case s:
          case f:
            break;
          case d:
            if (c())
              return void (async function (e) {
                return M(e) || (await Y(e, i.ALL_CATEGORIES_MS_STORE));
              })(r).then(ee);
            if (!n() && Object.keys(Z).length) {
              p = Z[r];
              break;
            }
            p += `/${_ ? a : fe(a)}`;
            break;
          case l:
            if (c())
              return void (async function (e) {
                return B(e) || (await Y(e, i.ALL_PRODUCTS_MS_STORE));
              })(o).then(ee);
            p += `/${(function (e = {}) {
              const { name: t, nameTranslated: o, skipNormalize: r } = e;
              if (o && !(0, k.isEmpty)(o)) {
                const e = o[_e()];
                if (e) return r ? e : fe(e);
              }
              return r ? t : fe(t);
            })(t)}`;
            break;
          case u:
            (function (e, t) {
              sessionStorage.setItem("ecwidProductId", t);
            })(0, o),
              (p += "/cart");
            break;
          case w:
            p += "/search";
        }
        let h = (0, G.T_)(p);
        if ((h.startsWith("/") && (h = h.substring(1)), e === w)) {
          const e = h.includes("?") ? "&" : "?";
          h += `${e}${m}=${g}`;
        }
        ee(`${window.location.origin}/${h}`);
      }
      function _e() {
        let e = Parameters.currentLocale;
        return e && e.startsWith("en-") && (e = "en"), e;
      }
      function me(e) {
        return S()[e] || "";
      }
      async function pe() {
        try {
          return await (function ({
            elementSelector: e,
            parentSelector: t,
            timeout: o = 1e3,
          }) {
            const r = document.querySelector(t);
            return r
              ? new Promise((t) => {
                  let n = null;
                  if (r.querySelector(e)) return t(r.querySelectorAll(e));
                  const i = new MutationObserver(() => {
                    if (r.querySelector(e))
                      return (
                        i.disconnect(),
                        n && clearTimeout(n),
                        t(r.querySelectorAll(e))
                      );
                  });
                  (n = setTimeout(() => (i.disconnect(), t([])), o)),
                    i.observe(r, { childList: !0, subtree: !0 });
                })
              : Promise.resolve([]);
          })({
            elementSelector:
              '\n    .ecwid.ec-storefront-v2 a[href]:not(.ec-fbmessenger-chat>a),\n    .ecwid[data-store-version="2"] a[href]:not(.ec-fbmessenger-chat>a)\n',
            parentSelector: ".dmStore",
          });
        } catch (e) {
          return [];
        }
      }
      async function he() {
        const e = window.location.origin,
          t = me(g.STORE_PRODUCT_PAGE),
          o = `${(0, k.escapeRegExp)(e)}\\/[^?]+\\/([^?]+)-p(\\d+)`,
          r = !(R() || T() || O());
        (await pe()).forEach((i) => {
          const a = i.href?.match(o),
            c = a?.[1],
            s = a?.[2];
          if (
            (a &&
              c &&
              (n() && s && r ? Se(t, c, s, i) : (i.href = `${e}/${t}/${c}`)),
            i.className.includes("facebook"))
          ) {
            const { origin: e, pathname: t, searchParams: o } = new URL(i.href);
            o.set("u", window.location.href),
              (i.href = `${e}${t}?${o.toString()}`);
          }
        });
      }
      function Se(e, t, o, r) {
        const i = window.location.origin;
        if (n()) {
          const n = `${e}/${Parameters.InitialDynamicItem}/${t}`;
          let a = "";
          (a = (0, _.jw)() ? i + (0, G.T_)(n) : `${i}/${n}`),
            (Z[o] = a),
            (r.href = a);
        } else {
          let n;
          (0, _.jw)()
            ? ((n = `${e}/${t}`), (r.href = i + (0, G.T_)(n)))
            : ((n = `/${e}/${t}`), (r.href = i + n)),
            (Z[o] = n);
        }
      }
      async function Ee() {
        const e = window.location.origin,
          t = me(g.STORE_CATEGORY_PAGE),
          o = `${(0, k.escapeRegExp)(e)}\\/[^?]+\\/([^?]+)-c(\\d+)`;
        (await pe()).forEach((e) => {
          const r = e.href?.match(o),
            i = fe(e.title) || fe(e.text),
            a = r?.[2],
            c = e.className.includes("breadcrumbs");
          r &&
            i &&
            a &&
            (c && n()
              ? (function (e, t, o, r) {
                  if (!n()) return;
                  const i = Parameters.InitialDynamicItem,
                    a = i.indexOf(t),
                    c = `${e}/${i.substring(0, a + t.length)}`,
                    s = window.location.origin,
                    d = (0, _.jw)() ? `${s}${(0, G.T_)(c)}` : `${s}/${c}`;
                  (Z[o] = d), (r.href = d);
                })(t, i, a, e)
              : Se(t, i, a, e));
        });
      }
      async function ye() {
        const e = await pe();
        await (async function (e) {
          try {
            const t = e.filter((e) => e.href?.match(/-p(\d+)/)),
              o = e.filter((e) => e.href?.match(/-c(\d+)/));
            await Promise.all([x(t), q(o)]);
          } catch (e) {
            (N = {}), (D = {});
          }
        })(Array.from(e));
        const t = (0, k.escapeRegExp)(window.location.origin),
          o = new RegExp(`${t}\\/[^?]+\\/[^/]+-p(\\d+)`),
          r = new RegExp(`${t}\\/[^?]+\\/[^/]+-c(\\d+)`);
        e.forEach((e) => {
          const t = e.href?.match(o)?.[1],
            n = e.href?.match(r)?.[1];
          if (
            (t && B(t) ? (e.href = B(t)) : n && M(n) && (e.href = M(n)),
            e.href.includes("-p") && e.className.includes("facebook"))
          ) {
            const { origin: t, pathname: o, searchParams: r } = new URL(e.href);
            r.set("u", window.location.href),
              (e.href = `${t}${o}?${r.toString()}`);
          }
        });
      }
      function Pe() {
        const e = $("body");
        e
          .off("click.storeCategory")
          .on(
            "click.storeCategory",
            ".dmStoreCategories .storeCategoryName",
            function () {
              const e = $(this).data("categoryid"),
                t = $(this).data("categoryname");
              if (h()) {
                if (n()) return void ue(e);
                ge(g.STORE_CATEGORY_PAGE, { name: t, categoryId: e });
              } else
                Parameters.StoreCleanUrl
                  ? oe("/" + t + "-c" + e, null, !(0, _.jw)())
                  : oe("#!/~/category/id=" + e + "&offset=0");
            }
          ),
          e
            .off("change.storeCategorySelect")
            .on(
              "change.storeCategorySelect",
              ".dmStoreCategories .storeCategoriesSelect",
              function () {
                const e = $(this).val(),
                  t = $(this).find(`[value="${e}"]`).data("categoryname");
                if (h()) {
                  if (n()) return void ue(e);
                  ge(g.STORE_CATEGORY_PAGE, { name: t, categoryId: e });
                } else
                  Parameters.StoreCleanUrl
                    ? oe("/-c" + e)
                    : oe("#!/~/category/id=" + e + "&offset=0");
              }
            );
      }
      function Ce(e) {
        const t = e.categoryId,
          o = $(".dmStoreCategories.storeCategoriesMenu"),
          r = $(".dmStoreCategories select");
        o.length &&
          ($("div.storeCategory").removeClass("opened"),
          $("div.storeCategoryName").removeClass("selected"),
          $(".storeCategoryName[data-categoryid=" + t + "]")
            .addClass("selected")
            .parents(".storeCategory")
            .addClass("opened")),
          r.length && r.val(t);
        const n = $("a.dmStoreCategory"),
          i = "categoryId-" + t;
        if (n.length)
          for (let e = 0; e < n.length; e++) {
            const t = $(n[e]);
            t.removeClass("currentPage"),
              t.closest("li").removeClass("dmNavItemSelected"),
              t.hasClass(i) &&
                (t.addClass("currentPage"),
                t.closest("li").addClass("dmNavItemSelected"));
          }
      }
      function Oe() {
        function e(e, t) {
          e.preventDefault(),
            h()
              ? ge(g.STORE_SEARCH_PAGE, { searchTerm: t })
              : Parameters.StoreCleanUrl
              ? oe("/search", "keywords=" + t)
              : oe("#!/~/search/keywords=" + t + "&offset=0");
        }
        const t = $("body");
        t
          .off("keypress.storeSearch")
          .on("keypress.storeSearch", ".dmStoreSearchInput", function (t) {
            13 === t.keyCode && e(t, $(this).val());
          }),
          t
            .off("click.storeSearch")
            .on(
              "click.storeSearch",
              ".dmStoreSearchClickOverlay",
              function (t) {
                e(t, $(this).parent().find(".dmStoreSearchInput").val());
              }
            );
      }
      function Te() {
        $("body")
          .off("click.storeCart")
          .on("click.storeCart", ".dmStoreCart", () => {
            h()
              ? ge(g.STORE_CHECKOUT_PAGE)
              : Parameters.StoreCleanUrl
              ? oe("/cart")
              : oe("#!/~/cart");
          });
      }
      function Ae(e) {
        $(".dmStoreCart")
          .find(".cartItems")
          .text(e.productsQuantity)
          .css("visibility", "visible");
      }
      function Re() {
        (T() || A()) && Ecwid.destroy(), b() && !I() && Ecwid.destroy();
      }
      function be() {
        if (window.location.href.includes(`${L()}/account`))
          Ecwid.setStorefrontBaseUrl("account");
        else if (
          O() &&
          !new RegExp(`/${L()}/[^/]+-p\\d+$`).test(window.location.href)
        )
          (0, _.OK)()
            ? Ecwid.Cart.get((e) => {
                if (0 === e.productsQuantity) {
                  const e = (function (e) {
                    const t = sessionStorage.getItem(e);
                    return sessionStorage.removeItem(e), t;
                  })("ecwidProductId");
                  Ecwid.Cart.addProduct(parseInt(e, 10), () => {
                    Ecwid.openPage("cart");
                  });
                } else Ecwid.openPage("cart");
              })
            : (function () {
                const e = L(),
                  { href: t } = window.location;
                return ["account/orders", "checkoutResult"].some((o) =>
                  t.includes(`${e}/${o}`)
                );
              })() || Ecwid.openPage("cart");
        else if (
          !b() ||
          I() ||
          window.location.href?.includes("account/resetPassword") ||
          (function () {
            const e = window.location.href || "";
            return /account\/pages\//.test(e);
          })()
        ) {
          if (R()) {
            const e = new URLSearchParams(window.location.search),
              t = {};
            for (const [o, r] of e.entries()) t[o] = r;
            Ecwid.openPage("search", t);
          }
        } else Ecwid.openPage("account");
      }
      function $e() {
        const e = S().STORE_ACCOUNT_PAGE;
        if (b()) {
          const t = `${e}/account`;
          if (window.location.href?.includes(t)) {
            const o = window.location.href.replace(t, e);
            history.replaceState(history.state, "", o);
          }
        } else if (O()) {
          const t = `${S().STORE_CHECKOUT_PAGE}/${e}`;
          if (window.location.href?.includes(t)) {
            const o = window.location.href.replace(t, e);
            history.replaceState(history.state, "", o),
              (Parameters.pageType = e);
          }
        }
      }
      function ve() {
        v(window.location.href);
      }
      function Ie() {
        const e = p.currentUrl;
        e && (history.replaceState(history.state, "", e), v(null));
      }
      function Le(e = {}) {
        const { type: t, keywords: o } = e;
        "SEARCH" === t &&
          o &&
          v(
            (function (e) {
              if (!e) return "";
              const t = new URLSearchParams(window.location.search);
              return (
                t.set(m, e),
                `${window.location.origin}${window.location.pathname}?${t}`
              );
            })(o)
          );
      }
      function ke(e) {
        "CHECKOUT_PAYMENT_DETAILS" === e.type &&
          ($(".ecwid-Checkout-EmailBlock .ecwid-Checkout-blockTitle")
            .eq(0)
            .show(),
          $(".ecwid-Checkout-EmailBlock .gwt-TextBox").attr(
            "autocomplete",
            "off"
          ),
          $(".ecwid-AccentedContinueButton .ecwid-AccentedButton")
            .off("mouseenter")
            .on("mouseenter", () => {
              $(".ecwid-Checkout-PasswordBlock .gwt-PasswordTextBox").val("");
            }),
          $(".ecwid-productBrowser-auth-signOutLink").length > 0 &&
            $(".ecwid-Checkout-PasswordBlock").attr(
              "style",
              $(".ecwid-Checkout-PasswordBlock").attr("style") +
                ";display:none !important"
            ));
      }
      function Ue() {
        const e = document.querySelector(".dmStore");
        e && e.classList.remove("storeInitialMinHeight");
      }
      function Ge(e) {
        try {
          const t =
            window.location.pathname + window.location.hash.replace("#", "/");
          dm_gaq_push_url && dm_gaq_push_url(t),
            "ORDER_CONFIRMATION" === e.type &&
              dm_gaq_push_event &&
              dm_gaq_push_event("StoreOrder", "StoreOrder", e.orderNumber);
        } catch (e) {}
      }
      const Ne = "store-widget-initialized";
      function De() {
        !(async function () {
          if (
            ($.DM.getScrollableElement().one("scroll", () => {
              window.ecwid_prevent_scroll_to_top = !0;
            }),
            !(
              !(0, r.V)("unsuspendEcwidStoreOnRuntime.enabled") ||
              !Parameters.IsStoreSuspended ||
              /bot|googlebot|crawler|spider|robot|crawling/i.test(
                navigator.userAgent
              ) ||
              !document.querySelectorAll(
                '[data-element-type="ec_store"],[data-element-type="dProductGalleryId"]'
              ).length ||
              window.location.search.includes("cssOptimization")
            ) &&
              (await (async function () {
                return (
                  await fetch(
                    `/_dm/s/rt/actions/sites/store/unsuspend?siteAlias=${Parameters.SiteAlias}`,
                    { method: "POST" }
                  ),
                  new Promise((e) => setTimeout(e, 1e3))
                );
              })()),
            !(function () {
              if ($("#static-product-browser").length) {
                if (
                  /bot|googlebot|crawler|spider|robot|crawling/i.test(
                    navigator.userAgent
                  )
                )
                  return $("#static-product-browser").show(), !0;
                $("#static-product-browser").remove();
              }
              return !1;
            })() &&
              !(function () {
                if (!Parameters.StoreId || "null" === Parameters.StoreId)
                  return !0;
                if (
                  Array.from(document.querySelectorAll(".dmStore")).some((e) =>
                    e.classList.contains(Ne)
                  )
                )
                  return !0;
                if (window.reInitInProgress) return !0;
                const e = document.querySelector(".dmPopupPage");
                return (
                  !(
                    !e ||
                    !e.classList.contains("dmPopup--visible") ||
                    (function (e) {
                      return !!e.querySelector(
                        ".dmStore, .dmStoreCart, .dmStoreSearch"
                      );
                    })(e)
                  ) ||
                  !(
                    document.querySelectorAll(".dmStore").length ||
                    document.querySelectorAll(".dmStoreCart").length ||
                    document.querySelectorAll(".dmStoreSearch").length ||
                    document.querySelectorAll(".dmStoreCategories").length
                  )
                );
              })())
          ) {
            if (
              ((0, _.OK)() &&
                ($.DM.events.on("widget_resize", (e, t) => {
                  $(t).is(".dmStore") && z();
                }),
                $.DM.events.on("col_resize", (e, t) => {
                  $(t).find(".dmStore").length > 0 && z();
                }),
                $.DM.events.on("row_resize", (e, t) => {
                  $(t).find(".dmStore").length > 0 && z();
                })),
              (function () {
                if ("undefined" != typeof Ecwid)
                  try {
                    Ecwid.OnAPILoaded.clear(),
                      (Ecwid.OnAPILoaded.consumers = []),
                      Ecwid.OnCartChanged.clear(),
                      (Ecwid.OnCartChanged.consumers = []),
                      Ecwid.OnPageLoaded.clear(),
                      (Ecwid.OnPageLoaded.consumers = []),
                      Ecwid.OnPageLoad.clear(),
                      (Ecwid.OnPageLoad.consumers = []),
                      Ecwid.OnPageSwitch.clear(),
                      (Ecwid.OnPageSwitch.consumers = []),
                      Ecwid.destroy && Ecwid.destroy();
                  } catch (e) {}
              })(),
              $(".dmStoreCart").find(".cartItems").css("visibility", "hidden"),
              (window.ecwid_nocssrewrite = !0),
              (window.ecwid_dynamic_widgets = !0),
              (window.ecwid_script_defer = !0),
              (window._xnext_initialization_scripts = []),
              (window.ec = { config: W(), storefront: F() }),
              document.getElementById("ecwid-script"))
            )
              ecwid_onBodyDone(), Me();
            else {
              const e = document.createElement("script");
              let t;
              (e.charset = "utf-8"),
                (e.type = "text/javascript"),
                Parameters.ecwidScriptUrl
                  ? (t = Parameters.ecwidScriptUrl)
                  : ((t =
                      window.rtCommonProps["ecommerce.ecwid.script"] +
                      "?" +
                      Parameters.StoreId),
                    (0, r.V)("ecom.ecwid.storefrontV3.enabled") &&
                      (t += "&storefront-v3=true"),
                    Parameters.currentLanguage &&
                      ("en" !== Parameters.currentLanguage ||
                        Parameters.IsSiteMultilingual) &&
                      (t += "&lang=" + Parameters.currentLanguage)),
                Be() &&
                  -1 === t.indexOf("storefront-v3") &&
                  (t += "&storefront-v3=true"),
                (e.src = t),
                (e.id = "ecwid-script"),
                (e.onload = function () {
                  Me(),
                    window.postMessage({ type: "ecwid-script-loaded" }, "*");
                }),
                document.body.appendChild(e);
            }
            !(function () {
              const e = $(
                "<div class='dmWidget' style='display: none;'><span class='text'>test</span></div>"
              );
              e.prependTo(".dmInner");
              const t = e.css("background-color");
              let o = e.find(".text").css("color");
              o = "rgba(0, 0, 0, 0)" === o ? e.css("color") : o;
              const r = e.css("border-color"),
                n = e.css("border-style"),
                i = e.css("border-width");
              e.remove();
              try {
                window.setEcwidStyle ||
                  (dmAPI.injectRuleToPage(
                    "#dm .ecwid .ecwid-btn--primary:not(:hover), #dmRoot .ecwid .ecwid-btn--primary:not(:hover) { background-color: " +
                      t +
                      "; color: " +
                      o +
                      " ; border-color: " +
                      r +
                      "; border-style: " +
                      n +
                      "; border-width: " +
                      i +
                      ";}",
                    0
                  ),
                  dmAPI.injectRuleToPage(
                    "#dm .ecwid div button.ecwid-btn--primary.ecwid-btn:after { color: " +
                      o +
                      "}",
                    0
                  ),
                  (window.setEcwidStyle = !0));
              } catch (e) {}
              const a = $(
                "<div><button class='ecwid ecwid-btn--secondary' style='display: none;'></button></div>"
              );
              let c;
              a.prependTo(".dmInner"),
                (c =
                  "rgb(255, 255, 255)" ===
                  $(".ecwid.ecwid-btn--secondary", a).css("background-color")
                    ? "black"
                    : "white"),
                a.remove(),
                dmAPI.injectRuleToPage(
                  "#dm .ecwid .ecwid-btn--secondary:hover, #dm .ecwid .ecwid-btn--secondary { color: " +
                    c +
                    ";}",
                  0
                );
            })();
          }
        })();
      }
      function Be() {
        const e = "true" === localStorage.getItem("ecwid_v3_storage");
        return (0, r.V)("ecom.ecwid.storefrontV3.enabled") || e;
      }
      function Me() {
        c() || Ecwid.OnAPILoaded.add(Re),
          Ecwid.OnPageLoaded.add(Ge),
          Ecwid.OnPageLoaded.add(ke),
          Ecwid.OnPageLoaded.add(Ue),
          (function () {
            const e = $(".dmStoreCategories");
            Ecwid &&
              e.length &&
              (Ecwid.OnAPILoaded.add(Pe), Ecwid.OnPageLoaded.add(Ce));
          })(),
          Ecwid.OnAPILoaded.add(Oe),
          Ecwid.OnAPILoaded.add(Te),
          Ecwid.OnAPILoaded.add(() => {
            Ecwid.Cart.get(Ae);
          }),
          Ecwid.OnCartChanged.add(Ae),
          h()
            ? (function () {
                if (!c()) {
                  const e = (0, _.DD)(),
                    t = (0, _.OK)();
                  e && Ecwid.OnPageSwitch.add(Le),
                    (e || (O() && t)) &&
                      (Ecwid.OnAPILoaded.add(ve), Ecwid.OnPageLoad.add(Ie));
                }
                Ecwid.OnAPILoaded.add(be),
                  Ecwid.OnPageSwitch.add(we),
                  Ecwid.OnPageLoad.add(P),
                  Ecwid.OnPageLoad.add($e),
                  c()
                    ? Ecwid.OnPageLoaded.add(ye)
                    : (Ecwid.OnPageLoaded.add(he), Ecwid.OnPageLoaded.add(Ee));
              })()
            : (function () {
                if (Parameters.StoreDisableScrolling && !K()) {
                  const e = () => {
                    $.DM.getScrollableElement()[0].scrollTo(0, 0);
                  };
                  Ecwid.OnPageLoad.add(e);
                }
              })(),
          Array.from(document.querySelectorAll(".dmStore")).forEach((e) =>
            e.classList.add(Ne)
          );
      }
    },
  },
]);
