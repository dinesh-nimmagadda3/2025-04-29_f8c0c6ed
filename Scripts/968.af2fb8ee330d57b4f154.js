"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [968],
  {
    6968: (t, e, i) => {
      i.r(e),
        i.d(e, {
          clean: () => U,
          getCurrentGallery: () => D,
          init: () => O,
          initGallery: () => G,
          insert: () => N,
        });
      var a = i(2543),
        s = i.n(a),
        o = i(1884),
        n = i(9213);
      const { THUMBNAIL: l } = n.fQ,
        r = /(-)\d+([wh])(\.[^\.]*?$)/;
      function h(t) {
        return t.includes("/multi/opt/");
      }
      var g = i(6251),
        c = i(5976),
        d = i(6856),
        u = i(7769),
        m = i(7477),
        y = i(6362);
      class p {
        constructor(t) {
          (this.images = void 0),
            (this.gallery = void 0),
            (this.wrapImage = (t) => {
              const e = t.find(">");
              return (
                e.is(".thumbnailInnerWrapper") ||
                  e.wrapAll(
                    '<div class="thumbnailInnerWrapper" style="opacity:0"/>'
                  ),
                t
              );
            }),
            (this.add = (t, e) => {
              const i = e ? 0 : this.images.length;
              return this.images.splice(i, 0, this.wrapImage(t)), this.images;
            }),
            (this.get = () => this.images),
            (this.getAsJQuery = () => {
              const t = this.get();
              return $(t).map(function () {
                return this.toArray();
              });
            }),
            (this.clear = () => {
              this.images = [];
            }),
            (this.swap = (t, e) => {
              const i = this.images[e];
              return (
                this.images.splice(e, 1),
                this.images.splice(t, 0, i),
                this.images
              );
            }),
            (this.remove = (t) => (
              (this.images = this.images.filter((e) => e.attr("id") !== t)),
              this.images
            )),
            (this.getImageAt = (t) =>
              t < this.images.length ? this.images[t] : null),
            (this.getNextImage = (t) => {
              const e = t.attr("id"),
                i = Array.from(this.images).findIndex(
                  (t) => t.attr("id") === e
                );
              return i < 0 || i === this.images.length - 1
                ? null
                : this.images[i + 1];
            }),
            (this.gallery = t);
          let e = Array.from(this.gallery.find(".photoGalleryThumbs"));
          e.length &&
            e[0].hasAttribute("data-index") &&
            (e = e.sort((t, e) =>
              (Number(t.dataset.index) || -1) > (Number(e.dataset.index) || -1)
                ? 1
                : -1
            )),
            (this.images = e.map((t) => this.wrapImage($(t))));
        }
      }
      const {
        SQUARE: w,
        VERTICAL: f,
        PINTEREST: v,
        PANORAMIC: I,
        ASYMETRIC: C,
        ASYMETRIC2: S,
        ASYMETRIC3: b,
        CLASSIC_ROUNDED: A,
        CLASSIC_DROPS: k,
        PINTEREST_ROUNDED: T,
        VERTICAL_ROUNDED: L,
      } = c.in;
      class E {
        constructor(t, e) {
          (this.layout = void 0),
            (this.gallery = void 0),
            (this.textLayout = void 0),
            (this.imagesStack = void 0),
            (this.layoutContainer = void 0),
            (this.viewAll = void 0),
            (this.galleryHolder = void 0),
            (this.updateCaptionAlignment = () =>
              "captionAlignment-" +
                this.gallery.attr(`data-${this.device}-caption-alignment`) ||
              0),
            (this.updateTextLayout = () => {
              let t = this.gallery.attr(`data-${this.device}-text-layout`);
              return (
                t ||
                  (this.gallery.hasClass("upgradedGallery") &&
                    (t = this.gallery.attr("data-text-layout"))),
                t || c.rg.BOTTOM
              );
            }),
            (this.getNumberOfRow = (t, e) => {
              const i = this.layout.numberOfImagesPerColumn,
                a = Math.floor(e / i);
              return 1 === t ? a : Math.floor(a / t);
            }),
            (this.setLayout = (t) => {
              t &&
                (this.gallery.attr("data-" + this.device + "-layout", t),
                (this.layout = t));
            }),
            (this.get = () => this.layout),
            (this.getTextLayout = () => this.textLayout),
            (this.generateRow = (t, e = "") =>
              $(`<div class='photogallery-row ${e}' data-index='${t}'/>`)),
            (this.generateColumn = (t, e = "") =>
              $(`<div class='photogallery-column ${e}' data-index='${t}'/>`)),
            (this.generateImage = (t, e, i) => (
              t.removeClass().addClass("photoGalleryThumbs " + (i || "")),
              t.attr("data-index", e),
              t
            )),
            (this.appendColumnsToRow = (t, e, i = "") => {
              for (let a = 0; a < e; a++)
                t.append(this.generateColumn(a, `${i} column-${e}`));
            }),
            (this.getMaxHeight = (t) => {
              let e = 0;
              return (
                t.each((t, i) => {
                  const a = $(i).height();
                  a > e && (e = a);
                }),
                e
              );
            }),
            (this.generateLayoutContainer = () =>
              $('<div class="layout-container ' + this.layout + '" />')),
            (this.clearCaptionInlineHeight = (t) => {
              this.getRows(t)
                .find(".photogallery-column .caption-container")
                .css("height", "");
            }),
            (this.getRows = (t) =>
              t
                ? t.closest(".photogallery-row")
                : this.gallery.find(".photogallery-row")),
            (this.equalCaptionsHeight = (t) => {
              const e = this.getRows(t);
              if (this.textLayout === c.rg.OVER)
                e.find(".photogallery-column .caption-container").css(
                  "height",
                  "100%"
                );
              else if (this.textLayout === c.rg.FIXED)
                e.find(".photogallery-column .caption-container").css(
                  "height",
                  "auto"
                );
              else
                switch (this.layout) {
                  case v:
                  case T:
                    e.each((t, e) => {
                      const i = $(e).find(
                        ".photogallery-column >:first-child .caption-container"
                      );
                      i.css("height", ""), i.height(this.getMaxHeight(i));
                      const a = $(e).find(
                        ".photogallery-column >:last-child .caption-container"
                      );
                      a.height(this.getMaxHeight(a));
                    });
                    break;
                  case S:
                  case b:
                    e.each((t, e) => {
                      const i = $(e).find(".caption-container");
                      i.css("height", "");
                      let a = 0;
                      i.each((t, e) => {
                        const i = $(e).height();
                        i > a && (a = i);
                      }),
                        i.height(a),
                        $(e)
                          .find(".asymetric-big-image .caption-container")
                          .height(2 * a);
                    });
                    break;
                  default:
                    e.each((t, e) => {
                      const i = $(e).find(
                        ".photogallery-column .caption-container"
                      );
                      i.css("height", ""), i.height(this.getMaxHeight(i));
                    });
                }
            }),
            (this.isEven = (t) => t % 2 == 0),
            (this.findColumnByIndex = (t, e) =>
              t.find('.photogallery-column[data-index="' + e + '"]')),
            (this.drawSquare = () => {
              const t = this.imagesStack.get(),
                e = this.getNumberOfColumns();
              let i;
              for (let a = 0; a < t.length; a++) {
                const s = this.generateImage(t[a], a);
                a % e == 0 &&
                  ((i = this.generateRow(Math.floor(a / e))),
                  this.layoutContainer.append(i),
                  this.appendColumnsToRow(i, e));
                const o = a % e;
                this.findColumnByIndex(i, o).append(s);
              }
            }),
            (this.calculateImageHeight = (t) => {
              const e = t.find("img"),
                i = e.attr("data-src");
              let a = t.attr("data-ratio");
              if (a) this.updateImageHeightByRatio(a, t);
              else {
                const s = e.attr("irh"),
                  o = e.attr("irw");
                if (s && o) (a = s / o), this.updateImageHeightByRatio(a, t);
                else {
                  const e = new Image();
                  (e.onload = () => {
                    const i = e.naturalHeight,
                      s = e.naturalWidth;
                    (a = i / s), this.updateImageHeightByRatio(a, t);
                  }),
                    (e.src = i);
                }
              }
            }),
            (this.updateImageHeightByRatio = (t, e) => {
              const i = e.find("a");
              i.css("padding", "inherit"), i.css("height", t * e.width());
            }),
            (this.drawPinterest = () => {
              const t = this.imagesStack.get(),
                e = 1 * this.getNumberOfColumns();
              let i,
                a,
                s,
                o = 0;
              const n = 0 === this.isEven(e),
                l = 1 === e ? e : 2 * e;
              for (let r = 0; r < t.length; r++) {
                let h;
                r % l == 0 &&
                  ((a = Math.floor(r / e)),
                  (i = this.generateRow(a)),
                  this.layoutContainer.append(i),
                  this.appendColumnsToRow(i, e)),
                  (o = r % e),
                  (s = this.findColumnByIndex(i, o)),
                  (h =
                    (this.isEven(r) &&
                      this.isEven(o) &&
                      0 === s.children().length) ||
                    ((!this.isEven(r) || !n) &&
                      !this.isEven(o) &&
                      1 === s.children().length)
                      ? this.generateImage(t[r], r, "pinterest-low")
                      : this.generateImage(t[r], r, "pinterest-high")),
                  s.append(h);
              }
            }),
            (this.drawPanoramic = () => {
              const t = this.imagesStack.get();
              let e;
              for (let i = 0; i < t.length; i++) {
                const a = this.generateImage(t[i], i, "panoramic-height");
                (e = this.generateRow(Math.floor(i))),
                  this.layoutContainer.append(e),
                  e.append(this.generateColumn(0, "column-1")),
                  e.find(".photogallery-column").append(a);
              }
            }),
            (this.drawVertical = () => {
              const t = this.imagesStack.get(),
                e = this.getNumberOfColumns();
              let i;
              for (let a = 0; a < t.length; a++) {
                const s = this.generateImage(t[a], a, "vertical-height");
                a % e == 0 &&
                  ((i = this.generateRow(Math.floor(a / e))),
                  this.layoutContainer.append(i),
                  this.appendColumnsToRow(i, e));
                const o = a % e;
                this.findColumnByIndex(i, o).append(s);
              }
            }),
            (this.calculateAsymetricsColumns = () => {
              const t = 1 * this.getNumberOfColumns();
              if (1 === t || (this.layout !== S && this.layout !== b)) return;
              const e = this.layout === b ? 2 : 1.5;
              let i;
              const a = 100 / t,
                s = Math.ceil(t / 2),
                o = 40 / Math.floor(t / 2),
                n = 60 / s,
                l = this.gallery.find(".photogallery-column"),
                r = l.eq(0).find("li").css("padding") || "0px";
              l.each((t, s) => {
                const l = $(s),
                  h = l.find(".image-container a");
                l.hasClass("row-direction")
                  ? (l.css("width", n + "%"),
                    (i = (a / n) * 100 + "%"),
                    h.css("padding-top", i),
                    this.layout === b &&
                      l
                        .find(".asymetric3-long-image .image-container a")
                        .css("padding-top", (a / n) * 50 + "%"))
                  : (l.css("width", o + "%"),
                    (i = `calc(${(a / o) * 100}% + ${
                      r.replace("px", "") * e
                    }px)`),
                    h.css("padding-top", i));
              });
            }),
            (this.drawAsymetric2 = () => {
              const t = this.imagesStack.get(),
                e = this.getNumberOfColumns();
              let i,
                a = 0,
                s = this.generateRow(a),
                o = 0,
                n = 0,
                l = this.isEven(a);
              for (let r = 0; r < t.length; r++) {
                if (0 === n) {
                  o === 1 * e &&
                    (a++,
                    (s = this.generateRow(a)),
                    (l = this.isEven(a)),
                    (o = 0)),
                    (l = !l),
                    (n = l ? 1 : 4);
                  const t = (l ? "" : "row-direction ") + "column-" + e;
                  (i = this.generateColumn(o, t)),
                    s.append(i),
                    this.layoutContainer.append(s),
                    o++;
                }
                const h = l ? "asymetric-big-image" : "flex column width-50",
                  g = this.generateImage(t[r], r, h);
                i.append(g), n--;
              }
            }),
            (this.drawAsymetric3 = () => {
              const t = this.imagesStack.get(),
                e = this.getNumberOfColumns();
              let i,
                a = 0,
                s = this.generateRow(a),
                o = 0,
                n = 0,
                l = !this.isEven(a);
              for (let r = 0; r < t.length; r++) {
                if (0 === n) {
                  o === 1 * e &&
                    (a++,
                    (s = this.generateRow(a)),
                    (l = !this.isEven(a)),
                    (o = 0)),
                    (l = !l),
                    (n = l ? 1 : 3);
                  const t = (l ? "" : "row-direction ") + "column-" + e;
                  (i = this.generateColumn(o, t)),
                    s.append(i),
                    this.layoutContainer.append(s),
                    o++;
                }
                let h;
                h = l
                  ? "asymetric-big-image"
                  : 1 === n
                  ? "flex column asymetric3-long-image"
                  : "flex column width-50";
                const g = this.generateImage(t[r], r, h);
                i.append(g), n--;
              }
            }),
            (this.getNumberOfColumns = ({ ignoreAutoAdjust: t } = {}) => {
              let e = this.gallery.attr("data-" + this.device + "-columns");
              const i =
                "true" === this.gallery.attr("data-auto-adjust-columns");
              if (
                this.device === c.pF.MOBILE &&
                (this.layout === S || this.layout === b)
              )
                return "1";
              if (!e)
                if (this.device === c.pF.DESKTOP) e = "4";
                else if (this.device === c.pF.TABLET)
                  e = this.gallery.attr("data-desktop-columns") || "4";
                else {
                  const t =
                    1 * (this.gallery.attr("data-desktop-columns") || 4);
                  e = Math.min(2, t).toString();
                }
              const a =
                t ||
                this.layout === S ||
                this.layout === b ||
                this.layout === I;
              if (i && !a) {
                const t = this.imagesStack.images.length,
                  i = parseInt(e, 10);
                return "" + this.getAutoAdjustedNumberOfColumns(t, i);
              }
              return e;
            }),
            (this.getAutoAdjustedNumberOfColumns = (t, e) => {
              if (t <= e) return t;
              if (0 == t % e) return e;
              let i = 1;
              for (i = 1; i < 3; i++) {
                if (e - i > 1 && t % (e - i) == 0) return e - i;
                if (t % (e + i) == 0) return e + i;
              }
              return e;
            }),
            (this.draw = () => {
              this.layoutContainer && this.layoutContainer.remove(),
                (this.layoutContainer = this.generateLayoutContainer());
              const t = this.imagesStack.getAsJQuery();
              switch (
                (t.css("background-image", ""),
                t.find("a").attr("style", ""),
                this.layout)
              ) {
                case w:
                case A:
                case k:
                case C:
                  this.drawSquare();
                  break;
                case v:
                case T:
                  this.drawPinterest();
                  break;
                case I:
                  this.drawPanoramic();
                  break;
                case f:
                case L:
                  this.drawVertical();
                  break;
                case S:
                  this.drawAsymetric2();
                  break;
                case b:
                  this.drawAsymetric3();
              }
              this.viewAll.length
                ? this.layoutContainer.insertBefore(this.viewAll)
                : this.layoutContainer.insertAfter(this.galleryHolder),
                this.calculateAsymetricsColumns();
              const e = (i = this.gallery) ? (i.jquery ? i.get(0) : i) : null;
              var i;
              e?.classList?.forEach((t) => {
                t.startsWith("text-layout-") && this.gallery.removeClass(t);
              }),
                this.gallery.removeClass(this.captionAlignment),
                (this.textLayout = this.updateTextLayout()),
                (this.captionAlignment = this.updateCaptionAlignment()),
                this.gallery.addClass("text-layout-" + this.textLayout),
                this.gallery.addClass(this.captionAlignment),
                this.gallery.addClass("photo-gallery-done"),
                this.layoutContainer
                  .find(".photogallery-row")
                  .addClass("photogallery-hidden-row");
            }),
            (this.isCaptionElementVisible = (t, e) => {
              const i = t.find(".caption-inner"),
                a = t.find(".caption-container");
              return (
                i.length > 0 &&
                "none" !== i.css("display") &&
                "none" !== a.css("display") &&
                "none" !== t.find(e).css("display")
              );
            }),
            (this.gallery = t),
            (this.layout =
              this.gallery.attr("data-" + this.device + "-layout") ||
              this.gallery.attr("data-desktop-layout") ||
              w),
            (this.textLayout = this.updateTextLayout()),
            (this.captionAlignment = this.updateCaptionAlignment()),
            (this.imagesStack = e),
            (this.viewAll = this.gallery.find(".photoGalleryViewAll")),
            (this.galleryHolder = this.gallery.find(".dmPhotoGalleryHolder")),
            this.gallery.find(".layout-container").length &&
              this.gallery.find(".layout-container").remove();
        }
        get device() {
          return m.AH();
        }
      }
      const { inEditorMode: P, inPreviewMode: x, inRuntimeMode: R } = m;
      class M {
        constructor(t) {
          (this.layoutProvider = void 0),
            (this.imagesStack = void 0),
            (this.gallery = void 0),
            (this.galleryType = void 0),
            (this.galleryId = void 0),
            (this.rowsToShow = void 0),
            (this.rows = void 0),
            (this.imagesToUnveil = void 0),
            (this.viewImagesButton = void 0),
            (this.animationDelay = 0),
            (this.enableLazyLoading = void 0),
            (this.unveilThreshold = void 0),
            (this.init = (t) => {
              (this.getElementDimensions =
                this.getElementDimensions.bind(this)),
                (this.gallery = t),
                (this.galleryId = this.gallery.attr("id")),
                (this.galleryType =
                  this.gallery.attr("data-link-gallery") &&
                  "true" === this.gallery.attr("data-link-gallery")
                    ? "link"
                    : "photoSwipe"),
                (this.rowsToShow = this.getRowsToShow()),
                (this.enableLazyLoading = this.getLazyLoading()),
                (this.viewImagesButton = this.gallery.find(
                  ".photoGalleryViewAll"
                )),
                (this.imagesStack = new p(this.gallery)),
                (this.imagesToUnveil = []),
                (this.animation =
                  this.gallery.attr("data-image-animation") || "none"),
                (this.layoutProvider = new E(this.gallery, this.imagesStack)),
                this.initLayout();
            }),
            (this.initLayout = (t, e) => {
              (this.unveilThreshold = this.animation ? 0 : 500),
                this.cleanAnchors(),
                this.layoutProvider.setLayout(t),
                this.layoutProvider.draw(),
                (this.rows = this.gallery.find(".photogallery-row")),
                this.manageRowsVisibility(),
                this.initUnveilImages({ skipAnimation: e }),
                this.addEvents(e),
                this.initLinks();
            }),
            (this.getLazyLoading = () => {
              const t = this.gallery.attr("data-enable-lazy-loading");
              return !t || "true" === t;
            }),
            (this.initLinks = () => {
              this.imagesStack.get().forEach((t) => {
                const e = $(t).find(".image-container a"),
                  i = e.find("img"),
                  a = e.attr("href") || "",
                  s = i.attr("data-src") || "";
                a && s === a && a.length && e.attr("href", "");
              });
            }),
            (this.changeRowsToShow = (t) => {
              const e = this.isInstagramConnected()
                ? "data-" + this.device + "-rows-to-show"
                : "data-rows-to-show";
              this.gallery.attr(e, t), (this.rowsToShow = t), this.initLayout();
            }),
            (this.getRowsToShow = () =>
              this.isInstagramConnected()
                ? this.gallery.attr("data-" + this.device + "-rows-to-show")
                : this.gallery.attr("data-rows-to-show") || "4"),
            (this.manageRowsVisibility = () => {
              let t;
              const e = this.gallery.attr(g.X.VIEW_MORE_VISIBILITY_ATTRIBUTE);
              "100" === this.rowsToShow
                ? (t = this.rows)
                : "all" === (this.viewImagesButton.attr("data-mode") || "all")
                ? ((t = this.rows.slice(0, this.rowsToShow)),
                  this.viewImagesButton.text(
                    this.viewImagesButton.attr("data-viewall")
                  ))
                : ((t = this.rows),
                  this.viewImagesButton.text(
                    this.viewImagesButton.attr("data-viewless")
                  )),
                "false" !== e && this.rows.length > this.rowsToShow
                  ? this.viewImagesButton.show()
                  : this.viewImagesButton.hide(),
                t.removeClass("photogallery-hidden-row");
            }),
            (this.handleViewMoreVisibleChange = (t) => {
              "false" === t && this.viewImagesButton.attr("data-mode", "all"),
                this.initLayout();
            }),
            (this.onUnveil = (t) => {
              if (!this.enableLazyLoading)
                return (
                  (this.imagesToUnveil = []),
                  void this.revealElements(this.imagesStack.getAsJQuery(), t)
                );
              if (!(0, o.YG)(this.gallery[0], this.unveilThreshold)) return;
              const e = this.imagesToUnveil.filter((t, e) =>
                (0, o.YG)(e, this.unveilThreshold)
              );
              e.length &&
                ((this.imagesToUnveil = this.imagesToUnveil.not(e)),
                this.revealElements(
                  this.isInPopup() ? this.imagesStack.getAsJQuery() : e,
                  t
                ));
            }),
            (this.initUnveilImages = (t = {}) => {
              const e = m.Gz(this.device),
                i = 8 === e || 7 === e ? $("#iscrollBody") : $(window);
              this.imagesToUnveil = this.imagesStack.getAsJQuery();
              const a = `touchmove.unveil-${this.galleryId}\n        scroll.unveil-${this.galleryId}\n        resize.unveil-${this.galleryId}\n        lookup.unveil-${this.galleryId} `;
              return (
                i.off(a).on(
                  a,
                  s().throttle(() => this.onUnveil(t.skipAnimation), 500)
                ),
                this.onUnveil(t.skipAnimation),
                this
              );
            }),
            (this.getImagePhotoswipeObject = (t) => {
              if (!t.length) return null;
              const e = t.find("img"),
                i = t.find(".caption-title"),
                a = e.attr("data-src");
              let s = "";
              this.layoutProvider.isCaptionElementVisible(t, ".caption-text") &&
                t
                  .find(".caption-text")
                  .contents()
                  .filter((t) => 3 !== t.nodeType)
                  .each((t, e) => {
                    s += e.textContent.trim() + " ";
                  });
              const o = new Image();
              return (
                (o.decoding = "async"),
                (o.src = a),
                {
                  w: o.width,
                  h: o.height,
                  src: a,
                  el: t,
                  author: i.length ? i.text().trim() : "",
                  title: s || "",
                }
              );
            }),
            (this.getImagesAsPhotoswipeItems = async (t) => {
              async function e(t) {
                return new Promise((e) => {
                  setTimeout(() => {
                    e(this.getImagePhotoswipeObject($(t)));
                  });
                });
              }
              return await Promise.all(
                t.map(async (t) => await e.bind(this)(t))
              );
            }),
            (this.initPhotoSwipeFromDOM = () => {
              this.imagesStack
                .getAsJQuery()
                .off("click.photoSwipe")
                .on("click.photoSwipe", (t) => {
                  t.preventDefault && t.preventDefault(),
                    t.stopPropagation && t.stopPropagation();
                  const e = t.target || t.srcElement,
                    i = $(e).closest(".photoGalleryThumbs"),
                    a = i.attr("data-index");
                  this.openPhotoSwipe(a, i);
                });
            }),
            (this.openPhotoSwipe = async (t) => {
              const e = document.querySelectorAll(".pswp")[0],
                i = {
                  galleryUID: this.galleryId,
                  index: 1 * t,
                  shareEl: !this.gallery.attr("data-hide-share"),
                },
                a = await this.getImagesAsPhotoswipeItems(
                  this.imagesStack.get()
                );
              (this.photoSwipeGallery = new window.PhotoSwipe(
                e,
                window.PhotoSwipeUI_Default,
                a,
                i
              )),
                this.photoSwipeGallery.listen("gettingData", (t, e) => {
                  if (e.w < 1 || e.h < 1) {
                    const t = new Image(),
                      i = this.photoSwipeGallery;
                    (t.onload = function () {
                      (e.w = this.width),
                        (e.h = this.height),
                        (e.needsUpdate = !0),
                        i.updateSize(!0);
                    }),
                      (t.src = e.src);
                  }
                }),
                window.setTimeout(() => {
                  this.photoSwipeGallery.init();
                });
            }),
            (this.revealElements = (t, e) => {
              let i = 100;
              document.body.dispatchEvent(
                new CustomEvent("loading-widget", {
                  detail: { type: "photoGallery" },
                })
              ),
                Array.from(t)
                  .filter((t) => t.querySelector("[data-src]"))
                  .forEach(async (t) => {
                    const e = $(t);
                    if (
                      (this.animation &&
                        (t.style.setProperty("animation-delay", `${i}ms`),
                        (i += 100)),
                      !t.querySelector("[data-src]").getAttribute("data-src"))
                    )
                      return;
                    const a = t.querySelector(".image-container");
                    a.querySelectorAll("a").forEach((t) => {
                      const i = t
                        .querySelector("[data-src]")
                        .getAttribute("data-src");
                      if (!i) return;
                      const a = this.getSourceByDevice(i, e);
                      requestAnimationFrame(() => {
                        t.style.setProperty("background-image", `url('${a}')`);
                      });
                    }),
                      await u.yt($(a), { background: !0 }),
                      a.classList.add("revealed"),
                      this.layoutProvider.get() === c.in.ASYMETRIC &&
                        this.oldLayoutFix({ thumb: e }) &&
                        (await this.waitForTransition(a)),
                      a
                        .closest(".thumbnailInnerWrapper")
                        .style.setProperty("opacity", "1");
                  }),
                this.layoutProvider.getTextLayout() === c.rg.BOTTOM
                  ? this.layoutProvider.equalCaptionsHeight(t)
                  : this.layoutProvider.clearCaptionInlineHeight(t),
                e ||
                  (t.removeClass("animated " + this.animation),
                  t.addClass("animated " + this.animation)),
                document.body.dispatchEvent(
                  new CustomEvent("widget-loaded", {
                    detail: { type: "photoGallery" },
                  })
                );
            }),
            (this.getSourceByDevice = (t, e) => {
              if (
                (P() && !x()) ||
                "true" === this.gallery.attr("data-dm-multisize-skip-opt")
              )
                return t;
              {
                if (this.isSignedUrl(t)) return t;
                let { width: i, height: a } = this.getElementDimensions(e);
                if ((0, d.V)("feature.flag.photo.gallery.exact.size")) {
                  const s = e[0].querySelector(".image-container a"),
                    o = window.getComputedStyle(s).backgroundSize;
                  return (
                    (a = 100 * Math.ceil(a / 100)),
                    (i = 100 * Math.ceil(i / 100)),
                    a >= i && h(t)
                      ? ((a = "cover" === o ? 2 * a : a),
                        (function (t, e) {
                          const i = Math.round(e);
                          return t.replace(r, `$1${i}h$3`);
                        })(t, a))
                      : h(t)
                      ? ((i = "cover" === o ? 2 * i : i),
                        this.replaceSourcePath(t, i))
                      : t
                  );
                }
                return i >= a
                  ? i <= 160 && a <= 90
                    ? this.replaceSourcePath(t, "thumbnail")
                    : i <= 640
                    ? this.replaceSourcePath(t, "mobile")
                    : i <= 1280
                    ? this.replaceSourcePath(t, "tablet")
                    : t
                  : i <= 160 && a <= 90
                  ? this.replaceSourcePath(t, "thumbnail")
                  : "mobile" === this.device
                  ? this.replaceSourcePath(t, "mobile")
                  : i <= 1280
                  ? this.replaceSourcePath(t, "tablet")
                  : t;
              }
            }),
            (this.updateLazyLoading = (t) => {
              this.enableLazyLoading = t;
            }),
            (this.changeTextLayout = (t) => {
              this.gallery.attr("data-desktop-text-layout", t),
                this.initLayout();
            }),
            (this.changeNumberOfColumns = () => {
              this.gallery.attr("data-desktop-columns", this.numberOfColumns),
                this.initLayout();
            }),
            (this.onViewImagesClicked = (t) => {
              t.preventDefault(), t.stopPropagation();
              const e = this.viewImagesButton.attr("data-mode") || "all";
              this.viewImagesButton.attr(
                "data-mode",
                "all" === e ? "less" : "all"
              ),
                this.initLayout();
            }),
            (this.cleanAnchors = () => {
              this.imagesStack
                .getAsJQuery()
                .find(".image-container a")
                .css("background-image", "");
            }),
            (this.addEvents = (t) => {
              const e = this.gallery.find(".caption-button");
              if (
                (this.viewImagesButton
                  .off("click.viewallbutton")
                  .on("click.viewallbutton", this.onViewImagesClicked),
                x() || R())
              ) {
                const t = this.gallery.find(".image-container > a");
                if (
                  (t
                    .off("click.photogallery")
                    .on("click.photogallery", function (t) {
                      (this.getAttribute("href") &&
                        this.getAttribute("href") !==
                          this.getAttribute("data-image-url")) ||
                        t.preventDefault();
                    }),
                  x()
                    ? y.D4(e)
                    : e.on("click", (t) => {
                        t.stopPropagation();
                      }),
                  "photoSwipe" === this.galleryType)
                ) {
                  if (P() && !x())
                    return void this.imagesStack
                      .getAsJQuery()
                      .off("click.photoSwipe");
                  this.initPhotoSwipeFromDOM();
                } else this.imagesStack.getAsJQuery().off("click.photoSwipe");
                y.aF(t), y.aF(e);
              }
              if (P()) {
                const e = setInterval(() => {
                  const i = window?.parent?.$?.dmx;
                  i &&
                    (clearInterval(e),
                    i.events &&
                      (window.parent.$.dmx.events.on("siteHeightChange", () => {
                        this.onUnveil(t);
                      }),
                      window.parent.$.dmx.events.on(
                        "previewMobileOrientationRotated.photogallery-" +
                          this.galleryId,
                        () => {
                          this.initLayout();
                        },
                        !0,
                        { scope: "page" }
                      ),
                      window.parent.$.dmx.events
                        .off("onePreviewToggle.photogallery-" + this.galleryId)
                        .on(
                          "onePreviewToggle.photogallery-" + this.galleryId,
                          (t) => {
                            this.photoSwipeGallery &&
                              this.photoSwipeGallery.close(),
                              t && t.preview
                                ? this.initLayout()
                                : this.imagesStack
                                    .getAsJQuery()
                                    .off("click.photoSwipe");
                          }
                        )));
                }, 300);
              }
            }),
            (this.getNumberOfColumns = () =>
              this.layoutProvider.getNumberOfColumns()),
            (this.equalCaptionsHeight = (t) => {
              this.layoutProvider.equalCaptionsHeight(t);
            }),
            (this.setLinkGallery = (t) => {
              t
                ? ((this.galleryType = "link"),
                  this.imagesStack.get().forEach((t) => {
                    const e = $(t).find(".image-container a"),
                      i = e.attr("data-link-url") || "";
                    e.attr("href", i);
                  }))
                : (this.imagesStack.get().forEach((t) => {
                    const e = $(t).find(".image-container a"),
                      i = e.attr("href");
                    e.attr("data-link-url", i);
                  }),
                  (this.galleryType = "photoSwipe")),
                this.initLayout();
            }),
            (this.initAnimation = (t, e) => {
              this.gallery
                .find(".photoGalleryThumbs")
                .removeClass("animated " + e)
                .addClass("animated " + t)
                .css("animation-name", ""),
                this.gallery.attr("data-image-animation", t),
                (this.animation = t),
                this.initLayout();
            }),
            (this.getNextImage = (t) => this.imagesStack.getNextImage(t)),
            (this.getId = () => this.gallery[0].id),
            (this.swapImages = (t, e) => {
              this.imagesStack.swap(t, e), this.initLayout();
            }),
            (this.getImages = () => this.imagesStack.get()),
            (this.addImage = (t, e) => {
              this.imagesStack.add($(t), e), this.initLayout();
            }),
            (this.removeImage = (t) => {
              this.imagesStack.remove(t);
            }),
            (this.isInPopup = () => this.gallery.closest("#dmPopup")),
            this.init(t);
        }
        get device() {
          return m.AH();
        }
        get animation() {
          return this._animation;
        }
        set animation(t) {
          this._animation !== t && (this._animation = "none" !== t ? t : null);
        }
        isInstagramConnected() {
          return this.gallery.attr(g.X.INSTAGRAM_USERNAME_ATTRIBUTE);
        }
        oldLayoutFix({ thumb: t }) {
          this.layoutProvider.calculateImageHeight(t);
          const e = this.gallery.attr("data-image-hover-effect");
          return this.animation && e && "false" !== e && "none" !== e;
        }
        waitForTransition(t) {
          return new Promise((e) => {
            $(t).one("transitionend", e);
          });
        }
        getElementDimensions(t) {
          const e = t.length ? t[0] : t;
          try {
            const t = e.getBoundingClientRect();
            return { width: t.width, height: t.height };
          } catch (t) {
            return { width: 0, height: 0 };
          }
        }
        isSignedUrl(t) {
          if (!t) return !1;
          try {
            const e = new URL(t);
            return e && e.pathname && e.pathname.startsWith("/s/");
          } catch (t) {
            return !1;
          }
        }
        replaceSourcePath(t, e) {
          return h(t) || "number" == typeof e
            ? (function (t, e = l) {
                const i = "number" == typeof e ? Math.round(e) : n.TG[e] || 160;
                return t.replace(r, `$1${i}w$3`);
              })(t, e)
            : t.replace(
                /\/multi\/(?:desktop\/|tablet\/|thumbnail\/|mobile\/)?/gi,
                `/multi/${e}/`
              );
        }
      }
      let B = [];
      function O(t = {}) {
        const e = $(".dmPhotoGallery"),
          i = e.length;
        (B = []),
          ($.dmrt.components.photogallery = {
            load() {},
            default: { ready() {}, load() {} },
          }),
          $.dmrt?.photogallery?.oldComponent &&
            ($.dmrt.components.photogallery.oldComponent = {
              ...$.dmrt.photogallery.oldComponent,
            });
        for (let a = 0; a < i; a++) N(e.eq(a), t);
      }
      function N(t, e = {}) {
        let i;
        t.hasClass("newPhotoGallery")
          ? (t.data("initialized") && !e.force
              ? (i = t.data("initialized"))
              : (e.disableLazyLoading &&
                  t.attr("data-enable-lazy-loading", "false"),
                e.disableAnimation && t.removeAttr("data-image-animation"),
                (i = new M(t)),
                t.data("initialized", i)),
            B.push(i))
          : $.dmrt.components?.photogallery.oldComponent &&
            $.dmrt.components.photogallery.oldComponent.default.ready();
      }
      function U() {}
      function D(t) {
        for (let e = 0; e < B.length; e++) if (B[e].getId() === t) return B[e];
        return null;
      }
      function G(t) {
        B || (B = []);
        const e = new M(t);
        t.data("initialized", e), B.push(e);
      }
    },
  },
]);
