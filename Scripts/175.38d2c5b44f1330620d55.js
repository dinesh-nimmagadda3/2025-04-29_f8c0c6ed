(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [175],
  {
    4765: (e) => {
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = (function (e, t) {
                var n,
                  r = e[1] || "",
                  a = e[3];
                if (!a) return r;
                if (t && "function" == typeof btoa) {
                  var o =
                      ((n = a),
                      "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                        btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
                        " */"),
                    i = a.sources.map(function (e) {
                      return "/*# sourceURL=" + a.sourceRoot + e + " */";
                    });
                  return [r].concat(i).concat([o]).join("\n");
                }
                return [r].join("\n");
              })(t, e);
              return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
            }).join("");
          }),
          (t.i = function (e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var r = {}, a = 0; a < this.length; a++) {
              var o = this[a][0];
              "number" == typeof o && (r[o] = !0);
            }
            for (a = 0; a < e.length; a++) {
              var i = e[a];
              ("number" == typeof i[0] && r[i[0]]) ||
                (n && !i[2]
                  ? (i[2] = n)
                  : n && (i[2] = "(" + i[2] + ") and (" + n + ")"),
                t.push(i));
            }
          }),
          t
        );
      };
    },
    3027: (e, t, n) => {
      var r,
        a,
        o = {},
        i =
          ((r = function () {
            return window && document && document.all && !window.atob;
          }),
          function () {
            return void 0 === a && (a = r.apply(this, arguments)), a;
          }),
        s = (function (e) {
          var t = {};
          return function (n) {
            return void 0 === t[n] && (t[n] = e.call(this, n)), t[n];
          };
        })(function (e) {
          return document.querySelector(e);
        }),
        u = null,
        l = 0,
        c = [],
        h = n(7874);
      function d(e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            a = o[r.id];
          if (a) {
            a.refs++;
            for (var i = 0; i < a.parts.length; i++) a.parts[i](r.parts[i]);
            for (; i < r.parts.length; i++) a.parts.push(b(r.parts[i], t));
          } else {
            var s = [];
            for (i = 0; i < r.parts.length; i++) s.push(b(r.parts[i], t));
            o[r.id] = { id: r.id, refs: 1, parts: s };
          }
        }
      }
      function m(e, t) {
        for (var n = [], r = {}, a = 0; a < e.length; a++) {
          var o = e[a],
            i = t.base ? o[0] + t.base : o[0],
            s = { css: o[1], media: o[2], sourceMap: o[3] };
          r[i] ? r[i].parts.push(s) : n.push((r[i] = { id: i, parts: [s] }));
        }
        return n;
      }
      function f(e, t) {
        var n = s(e.insertInto);
        if (!n)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var r = c[c.length - 1];
        if ("top" === e.insertAt)
          r
            ? r.nextSibling
              ? n.insertBefore(t, r.nextSibling)
              : n.appendChild(t)
            : n.insertBefore(t, n.firstChild),
            c.push(t);
        else {
          if ("bottom" !== e.insertAt)
            throw new Error(
              "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
            );
          n.appendChild(t);
        }
      }
      function p(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = c.indexOf(e);
        t >= 0 && c.splice(t, 1);
      }
      function y(e) {
        var t = document.createElement("style");
        return (e.attrs.type = "text/css"), g(t, e.attrs), f(e, t), t;
      }
      function g(e, t) {
        Object.keys(t).forEach(function (n) {
          e.setAttribute(n, t[n]);
        });
      }
      function b(e, t) {
        var n, r, a, o;
        if (t.transform && e.css) {
          if (!(o = t.transform(e.css))) return function () {};
          e.css = o;
        }
        if (t.singleton) {
          var i = l++;
          (n = u || (u = y(t))),
            (r = k.bind(null, n, i, !1)),
            (a = k.bind(null, n, i, !0));
        } else
          e.sourceMap &&
          "function" == typeof URL &&
          "function" == typeof URL.createObjectURL &&
          "function" == typeof URL.revokeObjectURL &&
          "function" == typeof Blob &&
          "function" == typeof btoa
            ? ((n = (function (e) {
                var t = document.createElement("link");
                return (
                  (e.attrs.type = "text/css"),
                  (e.attrs.rel = "stylesheet"),
                  g(t, e.attrs),
                  f(e, t),
                  t
                );
              })(t)),
              (r = j.bind(null, n, t)),
              (a = function () {
                p(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = y(t)),
              (r = z.bind(null, n)),
              (a = function () {
                p(n);
              }));
        return (
          r(e),
          function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              r((e = t));
            } else a();
          }
        );
      }
      e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
          throw new Error(
            "The style-loader cannot be used in a non-browser environment"
          );
        ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}),
          t.singleton || (t.singleton = i()),
          t.insertInto || (t.insertInto = "head"),
          t.insertAt || (t.insertAt = "bottom");
        var n = m(e, t);
        return (
          d(n, t),
          function (e) {
            for (var r = [], a = 0; a < n.length; a++) {
              var i = n[a];
              (s = o[i.id]).refs--, r.push(s);
            }
            for (e && d(m(e, t), t), a = 0; a < r.length; a++) {
              var s;
              if (0 === (s = r[a]).refs) {
                for (var u = 0; u < s.parts.length; u++) s.parts[u]();
                delete o[s.id];
              }
            }
          }
        );
      };
      var w,
        v =
          ((w = []),
          function (e, t) {
            return (w[e] = t), w.filter(Boolean).join("\n");
          });
      function k(e, t, n, r) {
        var a = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = v(t, a);
        else {
          var o = document.createTextNode(a),
            i = e.childNodes;
          i[t] && e.removeChild(i[t]),
            i.length ? e.insertBefore(o, i[t]) : e.appendChild(o);
        }
      }
      function z(e, t) {
        var n = t.css,
          r = t.media;
        if ((r && e.setAttribute("media", r), e.styleSheet))
          e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }
      function j(e, t, n) {
        var r = n.css,
          a = n.sourceMap,
          o = void 0 === t.convertToAbsoluteUrls && a;
        (t.convertToAbsoluteUrls || o) && (r = h(r)),
          a &&
            (r +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
              " */");
        var i = new Blob([r], { type: "text/css" }),
          s = e.href;
        (e.href = URL.createObjectURL(i)), s && URL.revokeObjectURL(s);
      }
    },
    7874: (e) => {
      e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
          r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(
          /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
          function (e, t) {
            var a,
              o = t
                .trim()
                .replace(/^"(.*)"$/, function (e, t) {
                  return t;
                })
                .replace(/^'(.*)'$/, function (e, t) {
                  return t;
                });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)
              ? e
              : ((a =
                  0 === o.indexOf("//")
                    ? o
                    : 0 === o.indexOf("/")
                    ? n + o
                    : r + o.replace(/^\.\//, "")),
                "url(" + JSON.stringify(a) + ")");
          }
        );
      };
    },
    5533: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => dt });
      const r = (e, t, n) => {
        const [r, a] = e.split("/"),
          [o, i] = a.split(":");
        return Date.UTC(n, r - 1, o, i) - 36e5 * t;
      };
      var a,
        o = (e, t, n, a, o) => {
          const i = new Date(e).getUTCFullYear(),
            s = r(t, o, i),
            u = r(n, a, i);
          return e >= s && e < u;
        },
        i =
          ((a = Object.freeze({
            __proto__: null,
            default: {
              "9|s": "2/dili,2/jayapura",
              "9|n": "2/chita,2/khandyga,2/pyongyang,2/seoul,2/tokyo,11/palau",
              "9.5|s|04/04:03->10/03:02":
                "4/adelaide,4/broken_hill,4/south,4/yancowinna",
              "9.5|s": "4/darwin,4/north",
              "8|s|03/08:01->10/04:00": "12/casey",
              "8|s":
                "2/kuala_lumpur,2/makassar,2/singapore,4/perth,2/ujung_pandang,4/west",
              "8|n":
                "2/brunei,2/choibalsan,2/hong_kong,2/irkutsk,2/kuching,2/macau,2/manila,2/shanghai,2/taipei,2/ulaanbaatar,2/chongqing,2/chungking,2/harbin,2/macao,2/ulan_bator",
              "8.75|s": "4/eucla",
              "7|s": "12/davis,2/jakarta,9/christmas",
              "7|n":
                "2/bangkok,2/barnaul,2/hovd,2/krasnoyarsk,2/novokuznetsk,2/novosibirsk,2/phnom_penh,2/pontianak,2/saigon,2/tomsk,2/vientiane,2/ho_chi_minh",
              "6|s": "12/vostok",
              "6|n":
                "2/almaty,2/bishkek,2/dhaka,2/omsk,2/qyzylorda,2/qostanay,2/thimphu,2/urumqi,9/chagos,2/dacca,2/kashgar,2/thimbu",
              "6.5|n": "2/rangoon,9/cocos,2/yangon",
              "5|s": "12/mawson,9/kerguelen",
              "5|n":
                "2/aqtau,2/aqtobe,2/ashgabat,2/atyrau,2/baku,2/dushanbe,2/karachi,2/oral,2/samarkand,2/tashkent,2/yekaterinburg,9/maldives,2/ashkhabad",
              "5.75|n": "2/katmandu,2/kathmandu",
              "5.5|n": "2/calcutta,2/colombo,2/kolkata",
              "4|s": "9/reunion",
              "4|n":
                "2/dubai,2/muscat,2/tbilisi,2/yerevan,8/astrakhan,8/samara,8/saratov,8/ulyanovsk,8/volgograd,2/volgograd,9/mahe,9/mauritius",
              "4.5|n|03/22:00->09/21:24": "2/tehran",
              "4.5|n": "2/kabul",
              "3|s": "12/syowa,9/antananarivo",
              "3|n|03/28:03->10/31:04":
                "2/famagusta,2/nicosia,8/athens,8/bucharest,8/helsinki,8/kiev,8/mariehamn,8/riga,8/sofia,8/tallinn,8/uzhgorod,8/vilnius,8/zaporozhye,8/nicosia",
              "3|n|03/28:02->10/31:03": "8/chisinau,8/tiraspol",
              "3|n|03/28:00->10/30:24": "2/beirut",
              "3|n|03/27:00->10/30:01": "2/gaza,2/hebron",
              "3|n|03/26:02->10/31:02": "2/jerusalem,2/tel_aviv",
              "3|n|03/26:00->10/29:01": "2/amman",
              "3|n|03/26:00->10/28:24": "2/damascus",
              "3|n":
                "0/addis_ababa,0/asmera,0/dar_es_salaam,0/djibouti,0/juba,0/kampala,0/mogadishu,0/nairobi,2/aden,2/baghdad,2/bahrain,2/kuwait,2/qatar,2/riyadh,8/istanbul,8/kirov,8/minsk,8/moscow,8/simferopol,9/comoro,9/mayotte,0/asmara,2/istanbul",
              "2|s|03/28:02->10/31:02": "12/troll",
              "2|s":
                "0/gaborone,0/harare,0/johannesburg,0/lubumbashi,0/lusaka,0/maputo,0/maseru,0/mbabane",
              "2|n|03/28:02->10/31:03":
                "0/ceuta,arctic/longyearbyen,8/amsterdam,8/andorra,8/belgrade,8/berlin,8/bratislava,8/brussels,8/budapest,8/busingen,8/copenhagen,8/gibraltar,8/ljubljana,8/luxembourg,8/madrid,8/malta,8/monaco,8/oslo,8/paris,8/podgorica,8/prague,8/rome,8/san_marino,8/sarajevo,8/skopje,8/stockholm,8/tirane,8/vaduz,8/vatican,8/vienna,8/warsaw,8/zagreb,8/zurich,3/jan_mayen",
              "2|n":
                "0/blantyre,0/bujumbura,0/cairo,0/khartoum,0/kigali,0/tripoli,8/kaliningrad",
              "1|s": "0/brazzaville,0/kinshasa,0/luanda,0/windhoek",
              "1|n|04/11:03->05/16:02": "0/casablanca,0/el_aaiun",
              "1|n|03/28:01->10/31:02":
                "3/canary,3/faeroe,3/madeira,8/dublin,8/guernsey,8/isle_of_man,8/jersey,8/lisbon,8/london,3/faroe,8/belfast",
              "1|n":
                "0/algiers,0/bangui,0/douala,0/lagos,0/libreville,0/malabo,0/ndjamena,0/niamey,0/porto-novo,0/tunis",
              "14|n": "11/kiritimati",
              "13|s|04/04:04->09/26:03": "11/apia",
              "13|s|01/15:02->11/05:03": "11/tongatapu",
              "13|n": "11/enderbury,11/fakaofo",
              "12|s|04/04:03->09/26:02": "12/mcmurdo,11/auckland,12/south_pole",
              "12|s|01/17:03->11/14:02": "11/fiji",
              "12|n":
                "2/anadyr,2/kamchatka,2/srednekolymsk,11/funafuti,11/kwajalein,11/majuro,11/nauru,11/tarawa,11/wake,11/wallis",
              "12.75|s|04/04:03->09/26:02": "11/chatham",
              "11|s|04/04:03->10/03:02": "12/macquarie",
              "11|s": "11/bougainville",
              "11|n":
                "2/magadan,2/sakhalin,11/efate,11/guadalcanal,11/kosrae,11/noumea,11/ponape,11/pohnpei",
              "11.5|n|04/04:03->10/03:02": "11/norfolk",
              "10|s|04/04:03->10/03:02":
                "4/currie,4/hobart,4/melbourne,4/sydney,4/act,4/canberra,4/nsw,4/tasmania,4/victoria",
              "10|s":
                "12/dumontdurville,4/brisbane,4/lindeman,11/port_moresby,4/queensland",
              "10|n":
                "2/ust-nera,2/vladivostok,2/yakutsk,11/guam,11/saipan,11/truk,11/chuuk,11/yap",
              "10.5|s|04/04:01->10/03:02": "4/lord_howe,4/lhi",
              "0|n|03/28:00->10/31:01": "1/scoresbysund,3/azores",
              "0|n":
                "0/abidjan,0/accra,0/bamako,0/banjul,0/bissau,0/conakry,0/dakar,0/freetown,0/lome,0/monrovia,0/nouakchott,0/ouagadougou,0/sao_tome,1/danmarkshavn,3/reykjavik,3/st_helena,13/gmt,13/utc,0/timbuktu,13/gmt-0,13/gmt+0,13/gmt0,13/greenwich,13/uct,13/universal,13/zulu",
              "-9|n|03/14:02->11/07:02": "1/adak,1/atka,us/aleutian",
              "-9|n": "11/gambier",
              "-9.5|n": "11/marquesas",
              "-8|n|03/14:02->11/07:02":
                "1/anchorage,1/juneau,1/metlakatla,1/nome,1/sitka,1/yakutat,us/alaska",
              "-8|n": "11/pitcairn",
              "-7|n|03/14:02->11/07:02":
                "1/los_angeles,1/santa_isabel,1/tijuana,1/vancouver,1/ensenada,6/pacific,10/bajanorte,us/pacific-new,us/pacific",
              "-7|n|03/08:02->11/01:01": "1/dawson,1/whitehorse,6/yukon",
              "-7|n":
                "1/creston,1/dawson_creek,1/fort_nelson,1/hermosillo,1/phoenix,us/arizona",
              "-6|s|04/03:22->09/04:22": "11/easter,7/easterisland",
              "-6|n|04/04:02->10/31:02": "1/chihuahua,1/mazatlan,10/bajasur",
              "-6|n|03/14:02->11/07:02":
                "1/boise,1/cambridge_bay,1/denver,1/edmonton,1/inuvik,1/ojinaga,1/yellowknife,1/shiprock,6/mountain,us/mountain",
              "-6|n":
                "1/belize,1/costa_rica,1/el_salvador,1/guatemala,1/managua,1/regina,1/swift_current,1/tegucigalpa,11/galapagos,6/east-saskatchewan,6/saskatchewan",
              "-5|s": "1/lima,1/rio_branco,1/porto_acre,5/acre",
              "-5|n|04/04:02->10/31:02":
                "1/bahia_banderas,1/merida,1/mexico_city,1/monterrey,10/general",
              "-5|n|03/14:02->11/07:02":
                "1/chicago,1/matamoros,1/menominee,1/rainy_river,1/rankin_inlet,1/resolute,1/winnipeg,1/indiana/knox,1/indiana/tell_city,1/north_dakota/beulah,1/north_dakota/center,1/north_dakota/new_salem,1/knox_in,6/central,us/central,us/indiana-starke",
              "-5|n|03/12:03->11/05:01": "1/north_dakota",
              "-5|n":
                "1/bogota,1/cancun,1/cayman,1/coral_harbour,1/eirunepe,1/guayaquil,1/jamaica,1/panama,1/atikokan",
              "-4|s|05/13:23->08/13:01": "12/palmer",
              "-4|s|04/03:24->09/05:00": "1/santiago,7/continental",
              "-4|s|03/27:24->10/03:00": "1/asuncion",
              "-4|s|02/16:24->11/03:00": "1/campo_grande,1/cuiaba",
              "-4|s": "1/la_paz,1/manaus,5/west",
              "-4|n|03/14:02->11/07:02":
                "1/detroit,1/grand_turk,1/indianapolis,1/iqaluit,1/louisville,1/montreal,1/nassau,1/new_york,1/nipigon,1/pangnirtung,1/port-au-prince,1/thunder_bay,1/toronto,1/indiana/marengo,1/indiana/petersburg,1/indiana/vevay,1/indiana/vincennes,1/indiana/winamac,1/kentucky/monticello,1/fort_wayne,1/indiana/indianapolis,1/kentucky/louisville,6/eastern,us/east-indiana,us/eastern,us/michigan",
              "-4|n|03/14:00->11/07:01": "1/havana",
              "-4|n|03/12:03->11/05:01": "1/indiana,1/kentucky",
              "-4|n":
                "1/anguilla,1/antigua,1/aruba,1/barbados,1/blanc-sablon,1/boa_vista,1/caracas,1/curacao,1/dominica,1/grenada,1/guadeloupe,1/guyana,1/kralendijk,1/lower_princes,1/marigot,1/martinique,1/montserrat,1/port_of_spain,1/porto_velho,1/puerto_rico,1/santo_domingo,1/st_barthelemy,1/st_kitts,1/st_lucia,1/st_thomas,1/st_vincent,1/tortola,1/virgin",
              "-3|s":
                "1/argentina,1/buenos_aires,1/catamarca,1/cordoba,1/fortaleza,1/jujuy,1/mendoza,1/montevideo,1/punta_arenas,1/sao_paulo,12/rothera,3/stanley,1/argentina/la_rioja,1/argentina/rio_gallegos,1/argentina/salta,1/argentina/san_juan,1/argentina/san_luis,1/argentina/tucuman,1/argentina/ushuaia,1/argentina/buenos_aires,1/argentina/catamarca,1/argentina/comodrivadavia,1/argentina/cordoba,1/argentina/jujuy,1/argentina/mendoza,1/rosario,5/east",
              "-3|n|03/14:02->11/07:02":
                "1/glace_bay,1/goose_bay,1/halifax,1/moncton,1/thule,3/bermuda,6/atlantic",
              "-3|n":
                "1/araguaina,1/bahia,1/belem,1/cayenne,1/maceio,1/paramaribo,1/recife,1/santarem",
              "-2|n|03/27:22->10/30:23": "1/godthab,1/nuuk",
              "-2|n|03/14:02->11/07:02": "1/miquelon",
              "-2|n": "1/noronha,3/south_georgia,5/denoronha",
              "-2.5|n|03/14:02->11/07:02": "1/st_johns,6/newfoundland",
              "-1|n": "3/cape_verde",
              "-11|n": "11/midway,11/niue,11/pago_pago,11/samoa,us/samoa",
              "-10|n":
                "11/honolulu,11/johnston,11/rarotonga,11/tahiti,us/hawaii",
            },
          })) &&
            a.default) ||
          a,
        s = [
          "africa",
          "america",
          "asia",
          "atlantic",
          "australia",
          "brazil",
          "canada",
          "chile",
          "europe",
          "indian",
          "mexico",
          "pacific",
          "antarctica",
          "etc",
        ];
      let u = {};
      Object.keys(i).forEach((e) => {
        let t = e.split("|"),
          n = { offset: Number(t[0]), hem: t[1] };
        t[2] && (n.dst = t[2]),
          i[e].split(",").forEach((e) => {
            (e = e.replace(
              /(^[0-9]+)\//,
              (e, t) => ((t = Number(t)), s[t] + "/")
            )),
              (u[e] = n);
          });
      }),
        (u.utc = { offset: 0, hem: "n" });
      for (let e = -14; e <= 14; e += 0.5) {
        let t = e;
        t > 0 && (t = "+" + t);
        let n = "etc/gmt" + t;
        (u[n] = { offset: -1 * e, hem: "n" }),
          (n = "utc/gmt" + t),
          (u[n] = { offset: -1 * e, hem: "n" });
      }
      const l = /(\-?[0-9]+)h(rs)?/i,
        c = /(\-?[0-9]+)/,
        h = /utc([\-+]?[0-9]+)/i,
        d = /gmt([\-+]?[0-9]+)/i,
        m = function (e) {
          return (e = Number(e)) >= -13 && e <= 13
            ? "etc/gmt" + (e = ((e *= -1) > 0 ? "+" : "") + e)
            : null;
        };
      var f = u;
      const p = (() => {
          let e = (() => {
            if ("undefined" == typeof Intl || void 0 === Intl.DateTimeFormat)
              return null;
            let e = Intl.DateTimeFormat();
            if (void 0 === e || void 0 === e.resolvedOptions) return null;
            let t = e.resolvedOptions().timeZone;
            return t ? t.toLowerCase() : null;
          })();
          return null === e ? "utc" : e;
        })(),
        y = Object.keys(f).reduce((e, t) => {
          let n = t.split("/")[1] || "";
          return (n = n.replace(/_/g, " ")), (e[n] = t), e;
        }, {});
      var g,
        b =
          ((function (e, t) {
            (t.isLeapYear = (e) =>
              (e % 4 == 0 && e % 100 != 0) || e % 400 == 0),
              (t.isDate = (e) =>
                "[object Date]" === Object.prototype.toString.call(e) &&
                !isNaN(e.valueOf())),
              (t.isArray = (e) =>
                "[object Array]" === Object.prototype.toString.call(e)),
              (t.isObject = (e) =>
                "[object Object]" === Object.prototype.toString.call(e)),
              (t.isBoolean = (e) =>
                "[object Boolean]" === Object.prototype.toString.call(e)),
              (t.zeroPad = (e, t = 2) =>
                (e += "").length >= t
                  ? e
                  : new Array(t - e.length + 1).join("0") + e),
              (t.titleCase = (e) =>
                e ? e[0].toUpperCase() + e.substr(1) : ""),
              (t.ordinal = (e) => {
                let t = e % 10,
                  n = e % 100;
                return 1 === t && 11 !== n
                  ? e + "st"
                  : 2 === t && 12 !== n
                  ? e + "nd"
                  : 3 === t && 13 !== n
                  ? e + "rd"
                  : e + "th";
              }),
              (t.toCardinal = (e) => (
                (e = (e = String(e)).replace(/([0-9])(st|nd|rd|th)$/i, "$1")),
                parseInt(e, 10)
              )),
              (t.normalize = (e = "") =>
                "day" ===
                  (e = (e = (e = (e = e.toLowerCase().trim()).replace(
                    /ies$/,
                    "y"
                  )).replace(/s$/, "")).replace(/-/g, "")) || "days" === e
                  ? "date"
                  : "min" === e || "mins" === e
                  ? "minute"
                  : e),
              (t.getEpoch = (e) =>
                "number" == typeof e
                  ? e
                  : t.isDate(e)
                  ? e.getTime()
                  : e.epoch
                  ? e.epoch
                  : null),
              (t.beADate = (e, n) =>
                !1 === t.isObject(e) ? n.clone().set(e) : e),
              (t.formatTimezone = (e, n = "") => {
                const r = e > 0 ? "+" : "-",
                  a = Math.abs(e);
                return `${r}${t.zeroPad(parseInt("" + a, 10))}${n}${t.zeroPad(
                  (a % 1) * 60
                )}`;
              });
          })((g = { exports: {} }), g.exports),
          g.exports);
      b.isLeapYear,
        b.isDate,
        b.isArray,
        b.isObject,
        b.isBoolean,
        b.zeroPad,
        b.titleCase,
        b.ordinal,
        b.toCardinal,
        b.normalize,
        b.getEpoch,
        b.beADate,
        b.formatTimezone;
      const w = { year: new Date().getFullYear(), month: 0, date: 1 };
      var v = {
        parseArray: (e, t, n) => {
          if (0 === t.length) return e;
          let r = [
            "year",
            "month",
            "date",
            "hour",
            "minute",
            "second",
            "millisecond",
          ];
          for (let a = 0; a < r.length; a++) {
            let o = t[a] || n[r[a]] || w[r[a]] || 0;
            e = e[r[a]](o);
          }
          return e;
        },
        parseObject: (e, t, n) => {
          if (0 === Object.keys(t).length) return e;
          t = Object.assign({}, w, n, t);
          let r = Object.keys(t);
          for (let a = 0; a < r.length; a++) {
            let o = r[a];
            if (void 0 === e[o] || "function" != typeof e[o]) continue;
            if (null === t[o] || void 0 === t[o] || "" === t[o]) continue;
            let i = t[o] || n[o] || w[o] || 0;
            e = e[o](i);
          }
          return e;
        },
        parseNumber: function (e, t) {
          return (
            t > 0 &&
              t < 25e8 &&
              !1 === e.silent &&
              (console.warn(
                "  - Warning: You are setting the date to January 1970."
              ),
              console.warn(
                "       -   did input seconds instead of milliseconds?"
              )),
            (e.epoch = t),
            e
          );
        },
      };
      const k = function (e) {
          return (
            (e.epoch = Date.now()),
            Object.keys(e._today || {}).forEach((t) => {
              "function" == typeof e[t] && (e = e[t](e._today[t]));
            }),
            e
          );
        },
        z = {
          now: (e) => k(e),
          today: (e) => k(e),
          tonight: (e) => (e = k(e)).hour(18),
          tomorrow: (e) => (e = (e = k(e)).add(1, "day")).startOf("day"),
          yesterday: (e) => (e = (e = k(e)).subtract(1, "day")).startOf("day"),
          christmas: (e) => {
            let t = k(e).year();
            return e.set([t, 11, 25, 18, 0, 0]);
          },
          "new years": (e) => {
            let t = k(e).year();
            return e.set([t, 11, 31, 18, 0, 0]);
          },
        };
      z["new years eve"] = z["new years"];
      var j = z;
      let _ = {
        millisecond: 1,
        second: 1e3,
        minute: 6e4,
        hour: 36e5,
        day: 864e5,
      };
      (_.date = _.day),
        (_.month = 25488e5),
        (_.week = 6048e5),
        (_.year = 3154e7),
        Object.keys(_).forEach((e) => {
          _[e + "s"] = _[e];
        });
      var O = _;
      const $ = (e, t, n, r, a) => {
          let o = e.d[n]();
          if (o === t) return;
          let i = null === a ? null : e.d[a](),
            s = e.epoch,
            u = t - o;
          (e.epoch += O[r] * u),
            "day" === r && Math.abs(u) > 28 && t < 28 && (e.epoch += O.hour),
            null !== a && i !== e.d[a]() && (e.epoch = s);
          const l = O[r] / 2;
          for (; e.d[n]() < t; ) e.epoch += l;
          for (; e.d[n]() > t; ) e.epoch -= l;
          null !== a && i !== e.d[a]() && (e.epoch = s);
        },
        D = {
          year: {
            valid: (e) => e > -4e3 && e < 4e3,
            walkTo: (e, t) => $(e, t, "getFullYear", "year", null),
          },
          month: {
            valid: (e) => e >= 0 && e <= 11,
            walkTo: (e, t) => {
              let n = e.d,
                r = n.getMonth(),
                a = e.epoch,
                o = n.getFullYear();
              if (r === t) return;
              let i = t - r;
              for (
                e.epoch += O.day * (28 * i),
                  o !== e.d.getFullYear() && (e.epoch = a);
                e.d.getMonth() < t;

              )
                e.epoch += O.day;
              for (; e.d.getMonth() > t; ) e.epoch -= O.day;
            },
          },
          date: {
            valid: (e) => e > 0 && e <= 31,
            walkTo: (e, t) => $(e, t, "getDate", "day", "getMonth"),
          },
          hour: {
            valid: (e) => e >= 0 && e < 24,
            walkTo: (e, t) => $(e, t, "getHours", "hour", "getDate"),
          },
          minute: {
            valid: (e) => e >= 0 && e < 60,
            walkTo: (e, t) => $(e, t, "getMinutes", "minute", "getHours"),
          },
          second: {
            valid: (e) => e >= 0 && e < 60,
            walkTo: (e, t) => {
              e.epoch = e.seconds(t).epoch;
            },
          },
          millisecond: {
            valid: (e) => e >= 0 && e < 1e3,
            walkTo: (e, t) => {
              e.epoch = e.milliseconds(t).epoch;
            },
          },
        };
      let M = [
          "jan",
          "feb",
          "mar",
          "apr",
          "may",
          "jun",
          "jul",
          "aug",
          "sept",
          "oct",
          "nov",
          "dec",
        ],
        S = [
          "january",
          "february",
          "march",
          "april",
          "may",
          "june",
          "july",
          "august",
          "september",
          "october",
          "november",
          "december",
        ];
      var C = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        E = b,
        N = () => M,
        T = () =>
          (function () {
            const e = { sep: 8 };
            for (let t = 0; t < M.length; t++) e[M[t]] = t;
            for (let t = 0; t < S.length; t++) e[S[t]] = t;
            return e;
          })();
      const P = E.isLeapYear,
        I = T();
      var q = (e, t) => {
          let n = Object.keys(D),
            r = e.clone();
          for (let a = 0; a < n.length; a++) {
            let o = n[a],
              i = t[o];
            if (
              (void 0 === i && (i = r[o]()),
              "string" == typeof i && (i = parseInt(i, 10)),
              !D[o].valid(i))
            )
              return (
                (e.epoch = null),
                void (
                  !1 === e.silent && console.warn("invalid " + o + ": " + i)
                )
              );
            D[o].walkTo(e, i);
          }
        },
        A = {
          parseOffset: (e, t) => {
            if (!t) return e;
            ("Z" !== t && "z" !== t) || (t = "+0000");
            let n = 0;
            /^[\+-]?[0-9]{2}:[0-9]{2}$/.test(t) &&
              (!0 === /:00/.test(t) && (t = t.replace(/:00/, "")),
              !0 === /:30/.test(t) && (t = t.replace(/:30/, ".5"))),
              /^[\+-]?[0-9]{4}$/.test(t) && (t = t.replace(/30$/, ".5")),
              (n = parseFloat(t)),
              Math.abs(n) > 100 && (n /= 100),
              (n *= -1),
              n >= 0 && (n = "+" + n);
            let r = "etc/gmt" + n;
            return e.timezones[r] && (e.tz = r), e;
          },
          parseTime: (e, t = "") => {
            let n = (t = t.replace(/^\s+/, "").toLowerCase()).match(
              /([0-9]{1,2}):([0-9]{1,2}):?([0-9]{1,2})?[:\.]?([0-9]{1,4})?/
            );
            if (null !== n) {
              let r = Number(n[1]);
              if (r < 0 || r > 24) return e.startOf("day");
              let a = Number(n[2]);
              if (n[2].length < 2 || a < 0 || a > 59) return e.startOf("day");
              n[4] > 999 && (n[4] = parseInt(("" + n[4]).substring(0, 3), 10)),
                (e = (e = (e = (e = e.hour(r)).minute(a)).seconds(
                  n[3] || 0
                )).millisecond(n[4] || 0));
              let o = t.match(/[\b0-9] ?(am|pm)\b/);
              return null !== o && o[1] && (e = e.ampm(o[1])), e;
            }
            if (((n = t.match(/([0-9]+) ?(am|pm)/)), null !== n && n[1])) {
              let t = Number(n[1]);
              return t > 12 || t < 1
                ? e.startOf("day")
                : (e = (e = (e = e.hour(n[1] || 0)).ampm(n[2])).startOf(
                    "hour"
                  ));
            }
            return e.startOf("day");
          },
          parseYear: (e = "", t) => {
            if (((e = e.trim()), !0 === /^'[0-9][0-9]$/.test(e))) {
              let t = Number(e.replace(/'/, ""));
              return t > 50 ? 1900 + t : 2e3 + t;
            }
            let n = parseInt(e, 10);
            return (
              !n && t && (n = t.year), (n = n || new Date().getFullYear()), n
            );
          },
          parseMonth: function (e) {
            return (e = e.toLowerCase().trim()), I[e];
          },
          validate: (e) => {
            if (!0 !== C.hasOwnProperty(e.month)) return !1;
            if (1 === e.month)
              return !!(P(e.year) && e.date <= 29) || e.date <= 28;
            let t = C[e.month] || 0;
            return e.date <= t;
          },
        };
      const {
        validate: x,
        parseTime: L,
        parseYear: Y,
        parseMonth: U,
        parseOffset: B,
      } = A;
      var F = [
        {
          reg: /^(\-?0?0?[0-9]{3,4})-([0-9]{1,2})-([0-9]{1,2})[T| ]([0-9.:]+)(Z|[0-9\-\+:]+)?$/i,
          parse: (e, t) => {
            let n = { year: t[1], month: parseInt(t[2], 10) - 1, date: t[3] };
            return !1 === x(n)
              ? ((e.epoch = null), e)
              : (B(e, t[5]), q(e, n), (e = L(e, t[4])));
          },
        },
        {
          reg: /^([0-9]{4})[\-\/\. ]([0-9]{1,2})[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
          parse: (e, t) => {
            let n = {
              year: t[1],
              month: parseInt(t[2], 10) - 1,
              date: parseInt(t[3], 10),
            };
            return (
              n.month >= 12 &&
                ((n.date = parseInt(t[2], 10)),
                (n.month = parseInt(t[3], 10) - 1)),
              !1 === x(n) ? ((e.epoch = null), e) : (q(e, n), (e = L(e, t[4])))
            );
          },
        },
        {
          reg: /^([0-9]{4})[\-\/\. ]([a-z]+)[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
          parse: (e, t) => {
            let n = {
              year: Y(t[1], e._today),
              month: U(t[2]),
              date: E.toCardinal(t[3] || ""),
            };
            return !1 === x(n)
              ? ((e.epoch = null), e)
              : (q(e, n), (e = L(e, t[4])));
          },
        },
      ];
      const { validate: R, parseTime: Z, parseYear: G, parseMonth: H } = A;
      var Q = [
        {
          reg: /^([0-9]{1,2})[\-\/.]([0-9]{1,2})[\-\/.]?([0-9]{4})?( [0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i,
          parse: (e, t) => {
            let n = parseInt(t[1], 10) - 1,
              r = parseInt(t[2], 10);
            (e.british || n >= 12) &&
              ((r = parseInt(t[1], 10)), (n = parseInt(t[2], 10) - 1));
            let a = {
              date: r,
              month: n,
              year: G(t[3], e._today) || new Date().getFullYear(),
            };
            return !1 === R(a)
              ? ((e.epoch = null), e)
              : (q(e, a), (e = Z(e, t[4])));
          },
        },
        {
          reg: /^([a-z]+)[\-\/\. ]([0-9]{1,2})[\-\/\. ]?([0-9]{4}|'[0-9]{2})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
          parse: (e, t) => {
            let n = {
              year: G(t[3], e._today),
              month: H(t[1]),
              date: E.toCardinal(t[2] || ""),
            };
            return !1 === R(n)
              ? ((e.epoch = null), e)
              : (q(e, n), (e = Z(e, t[4])));
          },
        },
        {
          reg: /^([a-z]+) ([0-9]{1,2})( [0-9]{4})?( ([0-9:]+( ?am| ?pm| ?gmt)?))?$/i,
          parse: (e, t) => {
            let n = {
              year: G(t[3], e._today),
              month: H(t[1]),
              date: E.toCardinal(t[2] || ""),
            };
            return !1 === R(n)
              ? ((e.epoch = null), e)
              : (q(e, n), (e = Z(e, t[4])));
          },
        },
        {
          reg: /^([a-z]+) ([0-9]{1,2})( [0-9:]+)?( \+[0-9]{4})?( [0-9]{4})?$/i,
          parse: (e, t) => {
            let n = {
              year: G(t[5], e._today),
              month: H(t[1]),
              date: E.toCardinal(t[2] || ""),
            };
            return !1 === R(n)
              ? ((e.epoch = null), e)
              : (q(e, n), (e = Z(e, t[3])));
          },
        },
      ];
      const { validate: J, parseTime: V, parseYear: W, parseMonth: K } = A;
      var X = [
        {
          reg: /^([0-9]{1,2})[\-\/]([a-z]+)[\-\/]?([0-9]{4})?$/i,
          parse: (e, t) => {
            let n = {
              year: W(t[3], e._today),
              month: K(t[2]),
              date: E.toCardinal(t[1] || ""),
            };
            return !1 === J(n)
              ? ((e.epoch = null), e)
              : (q(e, n), (e = V(e, t[4])));
          },
        },
        {
          reg: /^([0-9]{1,2})( [a-z]+)( [0-9]{4}| '[0-9]{2})? ?([0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i,
          parse: (e, t) => {
            let n = {
              year: W(t[3], e._today),
              month: K(t[2]),
              date: E.toCardinal(t[1]),
            };
            return n.month && !1 !== J(n)
              ? (q(e, n), (e = V(e, t[4])))
              : ((e.epoch = null), e);
          },
        },
        {
          reg: /^([0-9]{1,2})[\. -/]([a-z]+)[\. -/]([0-9]{4})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
          parse: (e, t) => {
            let n = { date: Number(t[1]), month: K(t[2]), year: Number(t[3]) };
            return !1 === J(n)
              ? ((e.epoch = null), e)
              : (q(e, n), (e = e.startOf("day")), (e = V(e, t[4])));
          },
        },
      ];
      const { validate: ee, parseTime: te, parseYear: ne, parseMonth: re } = A;
      var ae = [].concat(F, Q, X, [
          {
            reg: /^([0-9]{4})[\-\/]([0-9]{2})$/i,
            parse: (e, t) => {
              let n = { year: t[1], month: parseInt(t[2], 10) - 1, date: 1 };
              return !1 === ee(n)
                ? ((e.epoch = null), e)
                : (q(e, n), (e = te(e, t[4])));
            },
          },
          {
            reg: /^([a-z]+) ([0-9]{4})$/i,
            parse: (e, t) => {
              let n = {
                year: ne(t[2], e._today),
                month: re(t[1]),
                date: e._today.date || 1,
              };
              return !1 === ee(n)
                ? ((e.epoch = null), e)
                : (q(e, n), (e = te(e, t[4])));
            },
          },
          {
            reg: /^(q[0-9])( of)?( [0-9]{4})?/i,
            parse: (e, t) => {
              let n = t[1] || "";
              e = e.quarter(n);
              let r = t[3] || "";
              return r && ((r = r.trim()), (e = e.year(r))), e;
            },
          },
          {
            reg: /^(spring|summer|winter|fall|autumn)( of)?( [0-9]{4})?/i,
            parse: (e, t) => {
              let n = t[1] || "";
              e = e.season(n);
              let r = t[3] || "";
              return r && ((r = r.trim()), (e = e.year(r))), e;
            },
          },
          {
            reg: /^[0-9,]+ ?b\.?c\.?$/i,
            parse: (e, t) => {
              let n = t[0] || "";
              n = n.replace(/^([0-9,]+) ?b\.?c\.?$/i, "-$1");
              let r = new Date(),
                a = {
                  year: parseInt(n.trim(), 10),
                  month: r.getMonth(),
                  date: r.getDate(),
                };
              return !1 === ee(a)
                ? ((e.epoch = null), e)
                : (q(e, a), (e = te(e)));
            },
          },
          {
            reg: /^[0-9,]+ ?(a\.?d\.?|c\.?e\.?)$/i,
            parse: (e, t) => {
              let n = t[0] || "";
              n = n.replace(/,/g, "");
              let r = new Date(),
                a = {
                  year: parseInt(n.trim(), 10),
                  month: r.getMonth(),
                  date: r.getDate(),
                };
              return !1 === ee(a)
                ? ((e.epoch = null), e)
                : (q(e, a), (e = te(e)));
            },
          },
          {
            reg: /^[0-9]{4}( ?a\.?d\.?)?$/i,
            parse: (e, t) => {
              let n = e._today;
              n.month && !n.date && (n.date = 1);
              let r = new Date(),
                a = {
                  year: ne(t[0], n),
                  month: n.month || r.getMonth(),
                  date: n.date || r.getDate(),
                };
              return !1 === ee(a)
                ? ((e.epoch = null), e)
                : (q(e, a), (e = te(e)));
            },
          },
        ]),
        oe = v,
        ie = j;
      const { parseArray: se, parseObject: ue, parseNumber: le } = oe,
        ce = { year: new Date().getFullYear(), month: 0, date: 1 };
      let he = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        de = [
          "sunday",
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
        ],
        me = !0;
      var fe = {
          short: () => he,
          long: () => de,
          set: (e) => {
            (he = e.short || he), (de = e.long || de);
          },
          aliases: {
            mo: 1,
            tu: 2,
            we: 3,
            th: 4,
            fr: 5,
            sa: 6,
            su: 7,
            tues: 2,
            weds: 3,
            wedn: 3,
            thur: 4,
            thurs: 4,
          },
        },
        pe = (e) => {
          let t = e.timezone().current.offset;
          return t ? E.formatTimezone(t, ":") : "Z";
        };
      const ye = (e) => (me ? E.titleCase(e) : e),
        ge = {
          day: (e) => ye(e.dayName()),
          "day-short": (e) => ye(fe.short()[e.day()]),
          "day-number": (e) => e.day(),
          "day-ordinal": (e) => E.ordinal(e.day()),
          "day-pad": (e) => E.zeroPad(e.day()),
          date: (e) => e.date(),
          "date-ordinal": (e) => E.ordinal(e.date()),
          "date-pad": (e) => E.zeroPad(e.date()),
          month: (e) => ye(e.monthName()),
          "month-short": (e) => ye(N()[e.month()]),
          "month-number": (e) => e.month(),
          "month-ordinal": (e) => E.ordinal(e.month()),
          "month-pad": (e) => E.zeroPad(e.month()),
          "iso-month": (e) => E.zeroPad(e.month() + 1),
          year: (e) => {
            let t = e.year();
            return t > 0 ? t : ((t = Math.abs(t)), t + " BC");
          },
          "year-short": (e) => {
            let t = e.year();
            return t > 0
              ? "'" + String(e.year()).substr(2, 4)
              : ((t = Math.abs(t)), t + " BC");
          },
          "iso-year": (e) => {
            let t = e.year(),
              n = t < 0,
              r = E.zeroPad(Math.abs(t), 4);
            return n && ((r = E.zeroPad(r, 6)), (r = "-" + r)), r;
          },
          time: (e) => e.time(),
          "time-24": (e) => `${e.hour24()}:${E.zeroPad(e.minute())}`,
          hour: (e) => e.hour12(),
          "hour-pad": (e) => E.zeroPad(e.hour12()),
          "hour-24": (e) => e.hour24(),
          "hour-24-pad": (e) => E.zeroPad(e.hour24()),
          minute: (e) => e.minute(),
          "minute-pad": (e) => E.zeroPad(e.minute()),
          second: (e) => e.second(),
          "second-pad": (e) => E.zeroPad(e.second()),
          millisecond: (e) => e.millisecond(),
          "millisecond-pad": (e) => E.zeroPad(e.millisecond(), 3),
          ampm: (e) => e.ampm(),
          quarter: (e) => "Q" + e.quarter(),
          season: (e) => e.season(),
          era: (e) => e.era(),
          json: (e) => e.json(),
          timezone: (e) => e.timezone().name,
          offset: (e) => pe(e),
          numeric: (e) =>
            `${e.year()}/${E.zeroPad(e.month() + 1)}/${E.zeroPad(e.date())}`,
          "numeric-us": (e) =>
            `${E.zeroPad(e.month() + 1)}/${E.zeroPad(e.date())}/${e.year()}`,
          "numeric-uk": (e) =>
            `${E.zeroPad(e.date())}/${E.zeroPad(e.month() + 1)}/${e.year()}`,
          "mm/dd": (e) => `${E.zeroPad(e.month() + 1)}/${E.zeroPad(e.date())}`,
          iso: (e) =>
            `${e.format("iso-year")}-${E.zeroPad(e.month() + 1)}-${E.zeroPad(
              e.date()
            )}T${E.zeroPad(e.h24())}:${E.zeroPad(e.minute())}:${E.zeroPad(
              e.second()
            )}.${E.zeroPad(e.millisecond(), 3)}${pe(e)}`,
          "iso-short": (e) => {
            let t = E.zeroPad(e.month() + 1),
              n = E.zeroPad(e.date());
            var r;
            return `${
              (r = e.year()) >= 0
                ? E.zeroPad(r, 4)
                : ((r = Math.abs(r)), "-" + E.zeroPad(r, 4))
            }-${t}-${n}`;
          },
          "iso-utc": (e) => new Date(e.epoch).toISOString(),
          nice: (e) => `${N()[e.month()]} ${E.ordinal(e.date())}, ${e.time()}`,
          "nice-24": (e) =>
            `${N()[e.month()]} ${E.ordinal(
              e.date()
            )}, ${e.hour24()}:${E.zeroPad(e.minute())}`,
          "nice-year": (e) =>
            `${N()[e.month()]} ${E.ordinal(e.date())}, ${e.year()}`,
          "nice-day": (e) =>
            `${fe.short()[e.day()]} ${ye(N()[e.month()])} ${E.ordinal(
              e.date()
            )}`,
          "nice-full": (e) =>
            `${e.dayName()} ${ye(e.monthName())} ${E.ordinal(
              e.date()
            )}, ${e.time()}`,
          "nice-full-24": (e) =>
            `${e.dayName()} ${ye(e.monthName())} ${E.ordinal(
              e.date()
            )}, ${e.hour24()}:${E.zeroPad(e.minute())}`,
        },
        be = {
          "day-name": "day",
          "month-name": "month",
          "iso 8601": "iso",
          "time-h24": "time-24",
          "time-12": "time",
          "time-h12": "time",
          tz: "timezone",
          "day-num": "day-number",
          "month-num": "month-number",
          "month-iso": "iso-month",
          "year-iso": "iso-year",
          "nice-short": "nice",
          "nice-short-24": "nice-24",
          mdy: "numeric-us",
          dmy: "numeric-uk",
          ymd: "numeric",
          "yyyy/mm/dd": "numeric",
          "mm/dd/yyyy": "numeric-us",
          "dd/mm/yyyy": "numeric-us",
          "little-endian": "numeric-uk",
          "big-endian": "numeric",
          "day-nice": "nice-day",
        };
      Object.keys(be).forEach((e) => (ge[e] = ge[be[e]]));
      const we = E.zeroPad,
        ve = E.formatTimezone,
        ke = {
          G: (e) => e.era(),
          GG: (e) => e.era(),
          GGG: (e) => e.era(),
          GGGG: (e) => ("AD" === e.era() ? "Anno Domini" : "Before Christ"),
          y: (e) => e.year(),
          yy: (e) => parseInt(String(e.year()).substr(2, 4), 10),
          yyy: (e) => e.year(),
          yyyy: (e) => e.year(),
          yyyyy: (e) => "0" + e.year(),
          Q: (e) => e.quarter(),
          QQ: (e) => e.quarter(),
          QQQ: (e) => e.quarter(),
          QQQQ: (e) => e.quarter(),
          M: (e) => e.month() + 1,
          MM: (e) => we(e.month() + 1),
          MMM: (e) => e.format("month-short"),
          MMMM: (e) => e.format("month"),
          w: (e) => e.week(),
          ww: (e) => we(e.week()),
          d: (e) => e.date(),
          dd: (e) => we(e.date()),
          D: (e) => e.dayOfYear(),
          DD: (e) => we(e.dayOfYear()),
          DDD: (e) => we(e.dayOfYear(), 3),
          E: (e) => e.format("day-short"),
          EE: (e) => e.format("day-short"),
          EEE: (e) => e.format("day-short"),
          EEEE: (e) => e.format("day"),
          EEEEE: (e) => e.format("day")[0],
          e: (e) => e.day(),
          ee: (e) => e.day(),
          eee: (e) => e.format("day-short"),
          eeee: (e) => e.format("day"),
          eeeee: (e) => e.format("day")[0],
          a: (e) => e.ampm().toUpperCase(),
          aa: (e) => e.ampm().toUpperCase(),
          aaa: (e) => e.ampm().toUpperCase(),
          aaaa: (e) => e.ampm().toUpperCase(),
          h: (e) => e.h12(),
          hh: (e) => we(e.h12()),
          H: (e) => e.hour(),
          HH: (e) => we(e.hour()),
          m: (e) => e.minute(),
          mm: (e) => we(e.minute()),
          s: (e) => e.second(),
          ss: (e) => we(e.second()),
          SSS: (e) => we(e.millisecond(), 3),
          A: (e) => e.epoch - e.startOf("day").epoch,
          z: (e) => e.timezone().name,
          zz: (e) => e.timezone().name,
          zzz: (e) => e.timezone().name,
          zzzz: (e) => e.timezone().name,
          Z: (e) => ve(e.timezone().current.offset),
          ZZ: (e) => ve(e.timezone().current.offset),
          ZZZ: (e) => ve(e.timezone().current.offset),
          ZZZZ: (e) => ve(e.timezone().current.offset, ":"),
        },
        ze = (e, t, n) => {
          let r = e,
            a = t;
          for (let o = 0; o < n; o += 1) (ke[r] = ke[a]), (r += e), (a += t);
        };
      ze("q", "Q", 4),
        ze("L", "M", 4),
        ze("Y", "y", 4),
        ze("c", "e", 4),
        ze("k", "H", 2),
        ze("K", "h", 2),
        ze("S", "s", 2),
        ze("v", "z", 4),
        ze("V", "Z", 4);
      const je = [
          "year",
          "season",
          "quarter",
          "month",
          "week",
          "day",
          "quarterHour",
          "hour",
          "minute",
        ],
        _e = function (e, t) {
          let n = e.clone().startOf(t),
            r = e.clone().endOf(t).epoch - n.epoch,
            a = (e.epoch - n.epoch) / r;
          return parseFloat(a.toFixed(2));
        },
        Oe = (e, t, n) => {
          let r = 0;
          for (e = e.clone(); e.isBefore(t); ) (e = e.add(1, n)), (r += 1);
          return e.isAfter(t, n) && (r -= 1), r;
        };
      var $e = (e, t, n) => (e.isBefore(t) ? Oe(e, t, n) : -1 * Oe(t, e, n));
      const De = {
        months: { almost: 10, over: 4 },
        days: { almost: 25, over: 10 },
        hours: { almost: 20, over: 8 },
        minutes: { almost: 50, over: 20 },
        seconds: { almost: 50, over: 20 },
      };
      function Me(e, t) {
        return 1 === e && (t = t.slice(0, -1)), e + " " + t;
      }
      var Se = {
          north: [
            ["spring", 2, 1],
            ["summer", 5, 1],
            ["fall", 8, 1],
            ["autumn", 8, 1],
            ["winter", 11, 1],
          ],
          south: [
            ["fall", 2, 1],
            ["autumn", 2, 1],
            ["winter", 5, 1],
            ["spring", 8, 1],
            ["summer", 11, 1],
          ],
        },
        Ce = [null, [0, 1], [3, 1], [6, 1], [9, 1]];
      const Ee = {
        minute: (e) => (q(e, { second: 0, millisecond: 0 }), e),
        quarterhour: (e) => {
          let t = e.minutes();
          return (
            (e =
              t >= 45
                ? e.minutes(45)
                : t >= 30
                ? e.minutes(30)
                : t >= 15
                ? e.minutes(15)
                : e.minutes(0)),
            q(e, { second: 0, millisecond: 0 }),
            e
          );
        },
        hour: (e) => (q(e, { minute: 0, second: 0, millisecond: 0 }), e),
        day: (e) => (
          q(e, { hour: 0, minute: 0, second: 0, millisecond: 0 }), e
        ),
        week: (e) => {
          let t = e.clone();
          return (
            (e = e.day(e._weekStart)).isAfter(t) && (e = e.subtract(1, "week")),
            q(e, { hour: 0, minute: 0, second: 0, millisecond: 0 }),
            e
          );
        },
        month: (e) => (
          q(e, { date: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }), e
        ),
        quarter: (e) => {
          let t = e.quarter();
          return (
            Ce[t] &&
              q(e, {
                month: Ce[t][0],
                date: Ce[t][1],
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0,
              }),
            e
          );
        },
        season: (e) => {
          let t = e.season(),
            n = "north";
          "South" === e.hemisphere() && (n = "south");
          for (let r = 0; r < Se[n].length; r++)
            if (Se[n][r][0] === t) {
              let a = e.year();
              return (
                "winter" === t && e.month() < 3 && (a -= 1),
                q(e, {
                  year: a,
                  month: Se[n][r][1],
                  date: Se[n][r][2],
                  hour: 0,
                  minute: 0,
                  second: 0,
                  millisecond: 0,
                }),
                e
              );
            }
          return e;
        },
        year: (e) => (
          q(e, {
            month: 0,
            date: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
          }),
          e
        ),
        decade: (e) => {
          let t = (e = e.startOf("year")).year(),
            n = 10 * parseInt(t / 10, 10);
          return e.year(n);
        },
        century: (e) => {
          let t = (e = e.startOf("year")).year(),
            n = 100 * parseInt(t / 100, 10);
          return e.year(n);
        },
      };
      Ee.date = Ee.day;
      var Ne = (e, t) => {
          if (!e) return p;
          "string" != typeof e &&
            console.error("Timezone must be a string - recieved: '", e, "'\n");
          let n = e.trim();
          if (((n = n.toLowerCase()), !0 === t.hasOwnProperty(n))) return n;
          if (
            ((n = ((e) =>
              (e = (e = (e = (e = (e = e.replace(/ time/g, "")).replace(
                / (standard|daylight|summer)/g,
                ""
              )).replace(/\b(east|west|north|south)ern/g, "$1")).replace(
                /\b(africa|america|australia)n/g,
                "$1"
              )).replace(/\beuropean/g, "europe")).replace(
                /\islands/g,
                "island"
              ))(n)),
            !0 === t.hasOwnProperty(n))
          )
            return n;
          if (!0 === y.hasOwnProperty(n)) return y[n];
          if (!0 === /[0-9]/.test(n)) {
            let e = (function (e) {
              let t = e.match(l);
              if (null !== t) return m(t[1]);
              if (((t = e.match(h)), null !== t)) return m(t[1]);
              if (((t = e.match(d)), null !== t)) {
                let e = -1 * Number(t[1]);
                return m(e);
              }
              return (t = e.match(c)), null !== t ? m(t[1]) : null;
            })(n);
            if (e) return e;
          }
          throw new Error(
            "Spacetime: Cannot find timezone named: '" +
              e +
              "'. Please enter an IANA timezone id."
          );
        },
        Te = (e, t = "") => {
          if (!0 !== e.isValid()) return "";
          if (ge.hasOwnProperty(t)) {
            let n = ge[t](e) || "";
            return (
              "json" !== t && ((n = String(n)), "ampm" !== t && (n = ye(n))), n
            );
          }
          if (-1 !== t.indexOf("{")) {
            let n = /\{(.+?)\}/g;
            return t.replace(n, (t, n) => {
              if (((n = n.toLowerCase().trim()), ge.hasOwnProperty(n))) {
                let t = String(ge[n](e));
                return "ampm" !== n ? ye(t) : t;
              }
              return "";
            });
          }
          return e.format("iso-short");
        },
        Pe = (e) => {
          let t = e.timezones,
            n = e.tz;
          if ((!1 === t.hasOwnProperty(n) && (n = Ne(e.tz, t)), null === n))
            return (
              !1 === e.silent &&
                console.warn(
                  "Warn: could not find given or local timezone - '" +
                    e.tz +
                    "'"
                ),
              { current: { epochShift: 0 } }
            );
          let r = t[n],
            a = {
              name:
                ((i = n),
                (i = (i = (i = i[0].toUpperCase() + i.substr(1)).replace(
                  /\/gmt/,
                  "/GMT"
                )).replace(/[\/_]([a-z])/gi, (e) => e.toUpperCase()))),
              hasDst: Boolean(r.dst),
              default_offset: r.offset,
              hemisphere: "s" === r.hem ? "South" : "North",
              current: {},
            };
          var i, s;
          if (a.hasDst) {
            let e = (s = r.dst) ? s.split("->") : [];
            a.change = { start: e[0], back: e[1] };
          }
          let u = r.offset,
            l = u;
          return (
            !0 === a.hasDst &&
              (l = "North" === a.hemisphere ? u - 1 : r.offset + 1),
            !1 === a.hasDst
              ? ((a.current.offset = u), (a.current.isDST = !1))
              : !0 === o(e.epoch, a.change.start, a.change.back, u, l)
              ? ((a.current.offset = u),
                (a.current.isDST = "North" === a.hemisphere))
              : ((a.current.offset = l),
                (a.current.isDST = "South" === a.hemisphere)),
            a
          );
        },
        Ie = (e, t) => {
          let n = e._today || ce;
          if ("number" == typeof t) return le(e, t);
          if (
            ((e.epoch = Date.now()),
            e._today &&
              E.isObject(e._today) &&
              Object.keys(e._today).length > 0)
          ) {
            let t = ue(e, n, ce);
            t.isValid() && (e.epoch = t.epoch);
          }
          return null == t || "" === t
            ? e
            : !0 === E.isDate(t)
            ? ((e.epoch = t.getTime()), e)
            : !0 === E.isArray(t)
            ? (e = se(e, t, n))
            : !0 === E.isObject(t)
            ? t.epoch
              ? ((e.epoch = t.epoch), (e.tz = t.tz), e)
              : (e = ue(e, t, n))
            : "string" != typeof t
            ? e
            : ((t = (function (e) {
                return (e = (e = (e = e.replace(
                  /\b(mon|tues?|wed|wednes|thur?s?|fri|sat|satur|sun)(day)?\b/i,
                  ""
                )).replace(/([0-9])(th|rd|st|nd)/, "$1")).replace(/,/g, ""))
                  .replace(/ +/g, " ")
                  .trim();
              })(t)),
              !0 === ie.hasOwnProperty(t)
                ? (e = ie[t](e))
                : (function (e, t, n) {
                    for (let n = 0; n < ae.length; n++) {
                      let r = t.match(ae[n].reg);
                      if (r) {
                        let t = ae[n].parse(e, r, undefined);
                        if (null !== t && t.isValid()) return t;
                      }
                    }
                    return (
                      !1 === e.silent &&
                        console.warn(
                          "Warning: couldn't parse date-string: '" + t + "'"
                        ),
                      (e.epoch = null),
                      e
                    );
                  })(e, t));
        };
      const qe = [
          "century",
          "decade",
          "year",
          "month",
          "date",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond",
        ],
        Ae = {
          set: function (e, t) {
            let n = this.clone();
            return (n = Ie(n, e)), t && (this.tz = Ne(t)), n;
          },
          timezone: function () {
            return Pe(this);
          },
          isDST: function () {
            return Pe(this).current.isDST;
          },
          hasDST: function () {
            return Pe(this).hasDst;
          },
          offset: function () {
            return 60 * Pe(this).current.offset;
          },
          hemisphere: function () {
            return Pe(this).hemisphere;
          },
          format: function (e) {
            return Te(this, e);
          },
          unixFmt: function (e) {
            return ((e, t) => {
              let n = t.split("");
              return (
                (n = (function (e) {
                  for (let t = 0; t < e.length; t += 1)
                    if ("'" === e[t])
                      for (let n = t + 1; n < e.length; n += 1) {
                        if ((e[n] && (e[t] += e[n]), "'" === e[n])) {
                          e[n] = null;
                          break;
                        }
                        e[n] = null;
                      }
                  return e.filter((e) => e);
                })(n)),
                (n = (function (e) {
                  for (let t = 0; t < e.length; t += 1) {
                    let n = e[t];
                    for (let r = t + 1; r < e.length && e[r] === n; r += 1)
                      (e[t] += e[r]), (e[r] = null);
                  }
                  return (e = e.filter((e) => e)).map(
                    (e) => ("''" === e && (e = "'"), e)
                  );
                })(n)),
                n.reduce(
                  (t, n) => (
                    void 0 !== ke[n]
                      ? (t += ke[n](e) || "")
                      : (/^'.{1,}'$/.test(n) && (n = n.replace(/'/g, "")),
                        (t += n)),
                    t
                  ),
                  ""
                )
              );
            })(this, e);
          },
          startOf: function (e) {
            return ((e, t) => {
              let n = e.clone();
              return (
                (t = E.normalize(t)),
                Ee[t]
                  ? Ee[t](n)
                  : "summer" === t || "winter" === t
                  ? ((n = n.season(t)), Ee.season(n))
                  : n
              );
            })(this, e);
          },
          endOf: function (e) {
            return ((e, t) => {
              let n = e.clone();
              return (
                (t = E.normalize(t)),
                Ee[t]
                  ? ((n = Ee[t](n)),
                    (n = n.add(1, t)),
                    (n = n.subtract(1, "millisecond")),
                    n)
                  : n
              );
            })(this, e);
          },
          leapYear: function () {
            let e = this.year();
            return E.isLeapYear(e);
          },
          progress: function (e) {
            return ((e, t) => {
              if (t) return (t = E.normalize(t)), _e(e, t);
              let n = {};
              return (
                je.forEach((t) => {
                  n[t] = _e(e, t);
                }),
                n
              );
            })(this, e);
          },
          nearest: function (e) {
            return ((e, t) => {
              let n = e.progress();
              return (
                "quarterhour" === (t = E.normalize(t)) && (t = "quarterHour"),
                void 0 !== n[t]
                  ? (n[t] > 0.5 && (e = e.add(1, t)), (e = e.startOf(t)))
                  : !1 === e.silent &&
                    console.warn("no known unit '" + t + "'"),
                e
              );
            })(this, e);
          },
          diff: function (e, t) {
            return (function (e, t, n) {
              t = E.beADate(t, e);
              let r = !1;
              if (e.isAfter(t)) {
                let n = e;
                (e = t), (t = n), (r = !0);
              }
              let a = (function (e, t) {
                let n = t.epoch - e.epoch,
                  r = { milliseconds: n, seconds: parseInt(n / 1e3, 10) };
                (r.minutes = parseInt(r.seconds / 60, 10)),
                  (r.hours = parseInt(r.minutes / 60, 10));
                let a = e.clone();
                return (
                  (r.years = ((e, t) => {
                    let n = t.year() - e.year();
                    return (e = e.year(t.year())).isAfter(t) && (n -= 1), n;
                  })(a, t)),
                  (a = e.add(r.years, "year")),
                  (r.months = 12 * r.years),
                  (a = e.add(r.months, "month")),
                  (r.months += $e(a, t, "month")),
                  (r.weeks = 52 * r.years),
                  (a = e.add(r.weeks, "week")),
                  (r.weeks += $e(a, t, "week")),
                  (r.days = 7 * r.weeks),
                  (a = e.add(r.days, "day")),
                  (r.days += $e(a, t, "day")),
                  r
                );
              })(e, t);
              return (
                r &&
                  (a = (function (e) {
                    return (
                      Object.keys(e).forEach((t) => {
                        e[t] *= -1;
                      }),
                      e
                    );
                  })(a)),
                n
                  ? ((n = E.normalize(n)),
                    !0 !== /s$/.test(n) && (n += "s"),
                    "dates" === n && (n = "days"),
                    a[n])
                  : a
              );
            })(this, e, t);
          },
          since: function (e) {
            return (
              e || (e = this.clone().set()),
              ((e, t) => {
                const n = (function (e, t) {
                  const n = e.isBefore(t),
                    r = n ? t : e;
                  let a = n ? e : t;
                  a = a.clone();
                  const o = {
                    years: 0,
                    months: 0,
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                  };
                  return (
                    Object.keys(o).forEach((e) => {
                      if (a.isSame(r, e)) return;
                      let t = a.diff(r, e);
                      (a = a.add(t, e)), (o[e] = t);
                    }),
                    n &&
                      Object.keys(o).forEach((e) => {
                        0 !== o[e] && (o[e] *= -1);
                      }),
                    o
                  );
                })(e, (t = E.beADate(t, e)));
                if (!0 === Object.keys(n).every((e) => !n[e]))
                  return {
                    diff: n,
                    rounded: "now",
                    qualified: "now",
                    precise: "now",
                  };
                let r,
                  a,
                  o,
                  i = [];
                return (
                  Object.keys(n).forEach((e, t, o) => {
                    const s = Math.abs(n[e]);
                    if (0 === s) return;
                    const u = Me(s, e);
                    if ((i.push(u), !r)) {
                      if (((r = a = u), t > 4)) return;
                      const i = o[t + 1],
                        l = Math.abs(n[i]);
                      l > De[i].almost
                        ? ((r = Me(s + 1, e)), (a = "almost " + r))
                        : l > De[i].over && (a = "over " + u);
                    }
                  }),
                  (o = i.splice(0, 2).join(", ")),
                  !0 === e.isAfter(t)
                    ? ((r += " ago"), (a += " ago"), (o += " ago"))
                    : ((r = "in " + r), (a = "in " + a), (o = "in " + o)),
                  { diff: n, rounded: r, qualified: a, precise: o }
                );
              })(this, e)
            );
          },
          next: function (e) {
            return this.add(1, e).startOf(e);
          },
          last: function (e) {
            return this.subtract(1, e).startOf(e);
          },
          isValid: function () {
            return !(
              (!this.epoch && 0 !== this.epoch) ||
              isNaN(this.d.getTime())
            );
          },
          goto: function (e) {
            let t = this.clone();
            return (t.tz = Ne(e, t.timezones)), t;
          },
          every: function (e, t) {
            if ("object" == typeof e && "string" == typeof t) {
              let n = t;
              (t = e), (e = n);
            }
            return (function (e, t = "", n) {
              if (!t || !n) return [];
              if (
                ((t = E.normalize(t)), (n = e.clone().set(n)), e.isAfter(n))
              ) {
                let t = e;
                (e = n), (n = t);
              }
              let r = e.clone();
              !(function (e) {
                return (
                  !!fe.short().find((t) => t === e) ||
                  !!fe.long().find((t) => t === e)
                );
              })(t)
                ? (r = r.next(t))
                : ((r = r.next(t)), (t = "week"));
              let a = [];
              for (; r.isBefore(n); ) a.push(r), (r = r.add(1, t));
              return a;
            })(this, e, t);
          },
          isAwake: function () {
            let e = this.hour();
            return !(e < 8 || e > 22);
          },
          isAsleep: function () {
            return !this.isAwake();
          },
          daysInMonth: function () {
            switch (this.month()) {
              case 0:
              case 2:
              case 4:
              case 6:
              case 7:
              case 9:
              case 11:
                return 31;
              case 1:
                return this.leapYear() ? 29 : 28;
              case 3:
              case 5:
              case 8:
              case 10:
                return 30;
              default:
                throw new Error("Invalid Month state.");
            }
          },
          log: function () {
            return console.log(""), console.log(Te(this, "nice-short")), this;
          },
          logYear: function () {
            return console.log(""), console.log(Te(this, "full-short")), this;
          },
          json: function () {
            return qe.reduce((e, t) => ((e[t] = this[t]()), e), {});
          },
          debug: function () {
            let e = this.timezone(),
              t =
                this.format("MM") +
                " " +
                this.format("date-ordinal") +
                " " +
                this.year();
            return (
              (t += "\n     - " + this.format("time")),
              console.log(
                "\n\n",
                t + "\n     - " + e.name + " (" + e.current.offset + ")"
              ),
              this
            );
          },
          from: function (e) {
            return (e = this.clone().set(e)).since(this);
          },
          fromNow: function () {
            return this.clone().set(Date.now()).since(this);
          },
          weekStart: function (e) {
            if ("number" == typeof e) return (this._weekStart = e), this;
            if ("string" == typeof e) {
              e = e.toLowerCase().trim();
              let t = fe.short().indexOf(e);
              -1 === t && (t = fe.long().indexOf(e)),
                -1 === t && (t = 1),
                (this._weekStart = t);
            } else
              console.warn(
                "Spacetime Error: Cannot understand .weekStart() input:",
                e
              );
            return this;
          },
        };
      (Ae.inDST = Ae.isDST), (Ae.round = Ae.nearest), (Ae.each = Ae.every);
      var xe = Ae;
      const Le = E.isLeapYear,
        Ye = (e) => ("string" == typeof e && (e = parseInt(e, 10)), e),
        Ue = [
          "year",
          "month",
          "date",
          "hour",
          "minute",
          "second",
          "millisecond",
        ],
        Be = (e, t, n) => {
          let r = Ue.indexOf(n),
            a = Ue.slice(r, Ue.length);
          for (let n = 0; n < a.length; n++) {
            let r = t[a[n]]();
            e[a[n]](r);
          }
          return e;
        },
        Fe = function (e, t, n, r) {
          return (
            !0 === n && e.isBefore(t)
              ? (e = e.add(1, r))
              : !1 === n && e.isAfter(t) && (e = e.minus(1, r)),
            e
          );
        };
      var Re = (e, t, n) => {
          t = Ye(t);
          let r = e.clone(),
            a = (e.minute() - t) * O.minute;
          return (
            (e.epoch -= a), Be(e, r, "second"), (e = Fe(e, r, n, "hour")).epoch
          );
        },
        Ze = (e, t, n) => {
          (t = Ye(t)) >= 24 ? (t = 24) : t < 0 && (t = 0);
          let r = e.clone(),
            a = e.hour() - t,
            o = a * O.hour;
          return (
            (e.epoch -= o),
            e.date() !== r.date() &&
              ((e = r.clone()),
              a > 1 && (a -= 1),
              a < 1 && (a += 1),
              (o = a * O.hour),
              (e.epoch -= o)),
            q(e, { hour: t }),
            Be(e, r, "minute"),
            (e = Fe(e, r, n, "day")).epoch
          );
        },
        Ge = (e, t) => (
          "string" == typeof t &&
            /^'[0-9]{2}$/.test(t) &&
            ((t = t.replace(/'/, "").trim()),
            (t = (t = Number(t)) > 30 ? 1900 + t : 2e3 + t)),
          (t = Ye(t)),
          q(e, { year: t }),
          e.epoch
        );
      const He = (e) => (e = (e = e.minute(0)).second(0)).millisecond(1);
      var Qe = {
          millisecond: function (e) {
            if (void 0 !== e) {
              let t = this.clone();
              return (
                (t.epoch = ((e, t) => {
                  t = Ye(t);
                  let n = e.millisecond() - t;
                  return e.epoch - n;
                })(t, e)),
                t
              );
            }
            return this.d.getMilliseconds();
          },
          second: function (e, t) {
            if (void 0 !== e) {
              let n = this.clone();
              return (
                (n.epoch = ((e, t, n) => {
                  t = Ye(t);
                  let r = e.clone(),
                    a = (e.second() - t) * O.second;
                  return (
                    (e.epoch = e.epoch - a), (e = Fe(e, r, n, "minute")).epoch
                  );
                })(n, e, t)),
                n
              );
            }
            return this.d.getSeconds();
          },
          minute: function (e, t) {
            if (void 0 !== e) {
              let n = this.clone();
              return (n.epoch = Re(n, e, t)), n;
            }
            return this.d.getMinutes();
          },
          hour: function (e, t) {
            let n = this.d;
            if (void 0 !== e) {
              let n = this.clone();
              return (n.epoch = Ze(n, e, t)), n;
            }
            return n.getHours();
          },
          hourFloat: function (e, t) {
            if (void 0 !== e) {
              let n = this.clone(),
                r = e % 1;
              r *= 60;
              let a = parseInt(e, 10);
              return (n.epoch = Ze(n, a, t)), (n.epoch = Re(n, r, t)), n;
            }
            let n = this.d,
              r = n.getHours(),
              a = n.getMinutes();
            return (a /= 60), r + a;
          },
          hour12: function (e, t) {
            let n = this.d;
            if (void 0 !== e) {
              let n = this.clone(),
                r = (e = "" + e).match(/^([0-9]+)(am|pm)$/);
              if (r) {
                let e = parseInt(r[1], 10);
                "pm" === r[2] && (e += 12), (n.epoch = Ze(n, e, t));
              }
              return n;
            }
            let r = n.getHours();
            return r > 12 && (r -= 12), 0 === r && (r = 12), r;
          },
          time: function (e, t) {
            if (void 0 !== e) {
              let n = this.clone();
              return (
                (e = e.toLowerCase().trim()),
                (n.epoch = ((e, t, n) => {
                  let r = t.match(
                    /([0-9]{1,2})[:h]([0-9]{1,2})(:[0-9]{1,2})? ?(am|pm)?/
                  );
                  if (!r) {
                    if (((r = t.match(/([0-9]{1,2}) ?(am|pm)/)), !r))
                      return e.epoch;
                    r.splice(2, 0, "0"), r.splice(3, 0, "");
                  }
                  let a = !1,
                    o = parseInt(r[1], 10),
                    i = parseInt(r[2], 10);
                  i >= 60 && (i = 59),
                    o > 12 && (a = !0),
                    !1 === a &&
                      ("am" === r[4] && 12 === o && (o = 0),
                      "pm" === r[4] && o < 12 && (o += 12)),
                    (r[3] = r[3] || ""),
                    (r[3] = r[3].replace(/:/, ""));
                  let s = parseInt(r[3], 10) || 0,
                    u = e.clone();
                  return (
                    (e = (e = (e = (e = e.hour(o)).minute(i)).second(
                      s
                    )).millisecond(0)),
                    (e = Fe(e, u, n, "day")).epoch
                  );
                })(n, e, t)),
                n
              );
            }
            return `${this.h12()}:${E.zeroPad(this.minute())}${this.ampm()}`;
          },
          ampm: function (e, t) {
            let n = "am",
              r = this.hour();
            if ((r >= 12 && (n = "pm"), "string" != typeof e)) return n;
            let a = this.clone();
            return (
              (e = e.toLowerCase().trim()),
              r >= 12 && "am" === e
                ? ((r -= 12), a.hour(r, t))
                : r < 12 && "pm" === e
                ? ((r += 12), a.hour(r, t))
                : a
            );
          },
          dayTime: function (e, t) {
            if (void 0 !== e) {
              const n = {
                morning: "7:00am",
                breakfast: "7:00am",
                noon: "12:00am",
                lunch: "12:00pm",
                afternoon: "2:00pm",
                evening: "6:00pm",
                dinner: "6:00pm",
                night: "11:00pm",
                midnight: "23:59pm",
              };
              let r = this.clone();
              return (
                (e = (e = e || "").toLowerCase()),
                !0 === n.hasOwnProperty(e) && (r = r.time(n[e], t)),
                r
              );
            }
            let n = this.hour();
            return n < 6
              ? "night"
              : n < 12
              ? "morning"
              : n < 17
              ? "afternoon"
              : n < 22
              ? "evening"
              : "night";
          },
          iso: function (e) {
            return void 0 !== e ? this.set(e) : this.format("iso");
          },
        },
        Je = {
          date: function (e, t) {
            if (void 0 !== e) {
              let n = this.clone();
              return (
                (e = parseInt(e, 10)) &&
                  (n.epoch = ((e, t, n) => {
                    if ((t = Ye(t)) > 28) {
                      let n = e.month(),
                        r = C[n];
                      1 === n && 29 === t && Le(e.year()) && (r = 29),
                        t > r && (t = r);
                    }
                    t <= 0 && (t = 1);
                    let r = e.clone();
                    return q(e, { date: t }), (e = Fe(e, r, n, "month")).epoch;
                  })(n, e, t)),
                n
              );
            }
            return this.d.getDate();
          },
          day: function (e, t) {
            if (void 0 === e) return this.d.getDay();
            let n = this.clone(),
              r = e;
            "string" == typeof e &&
              ((e = e.toLowerCase()),
              fe.aliases.hasOwnProperty(e)
                ? (r = fe.aliases[e])
                : ((r = fe.short().indexOf(e)),
                  -1 === r && (r = fe.long().indexOf(e))));
            let a = this.d.getDay() - r;
            !0 === t && a > 0 && (a -= 7), !1 === t && a < 0 && (a += 7);
            let o = this.subtract(a, "days");
            return (
              q(o, { hour: n.hour(), minute: n.minute(), second: n.second() }),
              o
            );
          },
          dayName: function (e, t) {
            if (void 0 === e) return fe.long()[this.day()];
            let n = this.clone();
            return (n = n.day(e, t)), n;
          },
        },
        Ve = {
          dayOfYear: function (e, t) {
            if (void 0 !== e) {
              let n = this.clone();
              return (
                (n.epoch = ((e, t, n) => {
                  t = Ye(t);
                  let r = e.clone();
                  return (
                    (t -= 1) <= 0 ? (t = 0) : t >= 365 && (t = 364),
                    (e = (e = e.startOf("year")).add(t, "day")),
                    Be(e, r, "hour"),
                    (e = Fe(e, r, n, "year")).epoch
                  );
                })(n, e, t)),
                n
              );
            }
            let n,
              r = 0,
              a = this.d.getMonth();
            for (let e = 1; e <= a; e++)
              (n = new Date()),
                n.setDate(1),
                n.setFullYear(this.d.getFullYear()),
                n.setHours(1),
                n.setMinutes(1),
                n.setMonth(e),
                n.setHours(-2),
                (r += n.getDate());
            return r + this.d.getDate();
          },
          week: function (e, t) {
            if (void 0 !== e) {
              let n = this.clone();
              return (
                (n.epoch = ((e, t, n) => {
                  let r = e.clone();
                  return (
                    (t = Ye(t)),
                    "december" ===
                      (e = (e = (e = e.month(0)).date(1)).day(
                        "monday"
                      )).monthName() &&
                      e.date() >= 28 &&
                      (e = e.add(1, "week")),
                    (t -= 1),
                    (e = e.add(t, "weeks")),
                    (e = Fe(e, r, n, "year")).epoch
                  );
                })(this, e, t)),
                (n = He(n)),
                n
              );
            }
            let n = this.clone();
            (n = n.month(0)),
              (n = n.date(1)),
              (n = He(n)),
              (n = n.day("monday")),
              "december" === n.monthName() &&
                n.date() >= 28 &&
                (n = n.add(1, "week"));
            let r = 1;
            1 === n.date() && (r = 0), (n = n.minus(1, "second"));
            const a = this.epoch;
            if (n.epoch > a) return 1;
            let o = 0,
              i = 4 * this.month();
            for (n.epoch += O.week * i, o += i; o <= 52; o++) {
              if (n.epoch > a) return o + r;
              n = n.add(1, "week");
            }
            return 52;
          },
          month: function (e, t) {
            if (void 0 !== e) {
              let n = this.clone();
              return (
                (n.epoch = ((e, t, n) => {
                  "string" == typeof t && (t = T()[t.toLowerCase()]),
                    (t = Ye(t)) >= 12 && (t = 11),
                    t <= 0 && (t = 0);
                  let r = e.date();
                  r > C[t] && (r = C[t]);
                  let a = e.clone();
                  return (
                    q(e, { month: t, date: r }), (e = Fe(e, a, n, "year")).epoch
                  );
                })(n, e, t)),
                n
              );
            }
            return this.d.getMonth();
          },
          monthName: function (e, t) {
            if (void 0 !== e) {
              let n = this.clone();
              return (n = n.month(e, t)), n;
            }
            return S[this.month()];
          },
          quarter: function (e, t) {
            if (
              void 0 !== e &&
              ("string" == typeof e &&
                ((e = e.replace(/^q/i, "")), (e = parseInt(e, 10))),
              Ce[e])
            ) {
              let n = this.clone(),
                r = Ce[e][0];
              return (
                (n = n.month(r, t)),
                (n = n.date(1, t)),
                (n = n.startOf("day")),
                n
              );
            }
            let n = this.d.getMonth();
            for (let e = 1; e < Ce.length; e++) if (n < Ce[e][0]) return e - 1;
            return 4;
          },
          season: function (e, t) {
            let n = "north";
            if (
              ("South" === this.hemisphere() && (n = "south"), void 0 !== e)
            ) {
              let r = this.clone();
              for (let a = 0; a < Se[n].length; a++)
                e === Se[n][a][0] &&
                  ((r = r.month(Se[n][a][1], t)),
                  (r = r.date(1)),
                  (r = r.startOf("day")));
              return r;
            }
            let r = this.d.getMonth();
            for (let e = 0; e < Se[n].length - 1; e++)
              if (r >= Se[n][e][1] && r < Se[n][e + 1][1]) return Se[n][e][0];
            return "winter";
          },
          year: function (e) {
            if (void 0 !== e) {
              let t = this.clone();
              return (t.epoch = Ge(t, e)), t;
            }
            return this.d.getFullYear();
          },
          era: function (e) {
            if (void 0 !== e) {
              let t = this.clone();
              e = e.toLowerCase();
              let n = t.d.getFullYear();
              return (
                "bc" === e && n > 0 && (t.epoch = Ge(t, -1 * n)),
                "ad" === e && n < 0 && (t.epoch = Ge(t, -1 * n)),
                t
              );
            }
            return this.d.getFullYear() < 0 ? "BC" : "AD";
          },
          decade: function (e) {
            if (void 0 !== e) {
              if (
                !(e = (e = (e = String(e)).replace(
                  /([0-9])'?s$/,
                  "$1"
                )).replace(/([0-9])(th|rd|st|nd)/, "$1"))
              )
                return console.warn("Spacetime: Invalid decade input"), this;
              2 === e.length && /[0-9][0-9]/.test(e) && (e = "19" + e);
              let t = Number(e);
              return isNaN(t)
                ? this
                : ((t = 10 * Math.floor(t / 10)), this.year(t));
            }
            return this.startOf("decade").year();
          },
          century: function (e) {
            if (void 0 !== e) {
              "string" == typeof e &&
                (e = (e = (e = e.replace(/([0-9])(th|rd|st|nd)/, "$1")).replace(
                  /([0-9]+) ?(b\.?c\.?|a\.?d\.?)/i,
                  (e, t, n) => (n.match(/b\.?c\.?/i) && (t = "-" + t), t)
                )).replace(/c$/, ""));
              let t = Number(e);
              return isNaN(e)
                ? (console.warn("Spacetime: Invalid century input"), this)
                : (0 === t && (t = 1),
                  (t = t >= 0 ? 100 * (t - 1) : 100 * (t + 1)),
                  this.year(t));
            }
            let t = this.startOf("century").year();
            return (t = Math.floor(t / 100)), t < 0 ? t - 1 : t + 1;
          },
          millenium: function (e) {
            if (void 0 !== e) {
              if (
                "string" == typeof e &&
                ((e = e.replace(/([0-9])(th|rd|st|nd)/, "$1")),
                (e = Number(e)),
                isNaN(e))
              )
                return console.warn("Spacetime: Invalid millenium input"), this;
              e > 0 && (e -= 1);
              let t = 1e3 * e;
              return 0 === t && (t = 1), this.year(t);
            }
            let t = Math.floor(this.year() / 1e3);
            return t >= 0 && (t += 1), t;
          },
        };
      const We = Object.assign({}, Qe, Je, Ve);
      (We.milliseconds = We.millisecond),
        (We.seconds = We.second),
        (We.minutes = We.minute),
        (We.hours = We.hour),
        (We.hour24 = We.hour),
        (We.h12 = We.hour12),
        (We.h24 = We.hour24),
        (We.days = We.day);
      const Ke = E.isLeapYear,
        Xe = function (e, t) {
          return 1 === e && Ke(t) ? 29 : C[e];
        };
      const et = ["millisecond", "second", "minute", "hour", "date", "month"];
      let tt = {
        second: et.slice(0, 1),
        minute: et.slice(0, 2),
        quarterhour: et.slice(0, 2),
        hour: et.slice(0, 3),
        date: et.slice(0, 4),
        month: et.slice(0, 4),
        quarter: et.slice(0, 4),
        season: et.slice(0, 4),
        year: et,
        decade: et,
        century: et,
      };
      (tt.week = tt.hour), (tt.season = tt.date), (tt.quarter = tt.date);
      const nt = {
          year: !0,
          quarter: !0,
          season: !0,
          month: !0,
          week: !0,
          date: !0,
        },
        rt = { month: !0, quarter: !0, season: !0, year: !0 },
        at = {
          millisecond: (e) => e.epoch,
          second: (e) =>
            [
              e.year(),
              e.month(),
              e.date(),
              e.hour(),
              e.minute(),
              e.second(),
            ].join("-"),
          minute: (e) =>
            [e.year(), e.month(), e.date(), e.hour(), e.minute()].join("-"),
          hour: (e) => [e.year(), e.month(), e.date(), e.hour()].join("-"),
          day: (e) => [e.year(), e.month(), e.date()].join("-"),
          week: (e) => [e.year(), e.week()].join("-"),
          month: (e) => [e.year(), e.month()].join("-"),
          quarter: (e) => [e.year(), e.quarter()].join("-"),
          year: (e) => e.year(),
        };
      at.date = at.day;
      var ot = (e) => {
          let t = e.timezones[e.tz];
          if (void 0 === t)
            return console.warn("Warning: couldn't find timezone " + e.tz), 0;
          if (void 0 === t.dst) return t.offset;
          let n = t.offset,
            r = t.offset + 1;
          "n" === t.hem && (r = n - 1);
          let a = t.dst.split("->");
          return !0 === o(e.epoch, a[0], a[1], n, r) ? n : r;
        },
        it = xe;
      let st = f;
      const ut = function (e, t, n = {}) {
        (this.epoch = null),
          (this.tz = Ne(t, st)),
          (this.silent = n.silent || !0),
          (this.british = n.dmy || n.british),
          (this._weekStart = 1),
          void 0 !== n.weekStart && (this._weekStart = n.weekStart),
          (this._today = {}),
          void 0 !== n.today && (this._today = n.today),
          Object.defineProperty(this, "d", {
            get: function () {
              let e = ot(this),
                t = (new Date(this.epoch).getTimezoneOffset() || 0) + 60 * e;
              t = 60 * t * 1e3;
              let n = this.epoch + t;
              return new Date(n);
            },
          }),
          Object.defineProperty(this, "timezones", {
            get: () => st,
            set: (e) => ((st = e), e),
          });
        let r = Ie(this, e);
        this.epoch = r.epoch;
      };
      Object.keys(it).forEach((e) => {
        ut.prototype[e] = it[e];
      }),
        (ut.prototype.clone = function () {
          return new ut(this.epoch, this.tz, {
            silent: this.silent,
            weekStart: this._weekStart,
            today: this._today,
            parsers: this.parsers,
          });
        }),
        (ut.prototype.toLocalDate = function () {
          return this.toNativeDate();
        }),
        (ut.prototype.toNativeDate = function () {
          return new Date(this.epoch);
        }),
        ((e) => {
          Object.keys(We).forEach((t) => {
            e.prototype[t] = We[t];
          });
        })(ut),
        ((e) => {
          (e.prototype.add = function (e, t) {
            let n = this.clone();
            if (!t || 0 === e) return n;
            let r = this.clone();
            if ("millisecond" === (t = E.normalize(t)))
              return (n.epoch += e), n;
            "fortnight" === t && ((e *= 2), (t = "week")),
              O[t]
                ? (n.epoch += O[t] * e)
                : "week" === t || "weekend" === t
                ? (n.epoch += O.day * (7 * e))
                : "quarter" === t || "season" === t
                ? (n.epoch += O.month * (3 * e))
                : "quarterhour" === t && (n.epoch += 15 * O.minute * e);
            let a = {};
            if (
              (tt[t] &&
                tt[t].forEach((e) => {
                  a[e] = r[e]();
                }),
              nt[t])
            ) {
              const e =
                r.timezone().current.offset - n.timezone().current.offset;
              n.epoch += 3600 * e * 1e3;
            }
            if (
              ("month" === t &&
                ((a.month = r.month() + e),
                (a = ((e, t) => {
                  if (e.month > 0) {
                    let n = parseInt(e.month / 12, 10);
                    (e.year = t.year() + n), (e.month = e.month % 12);
                  } else if (e.month < 0) {
                    let n = Math.floor(Math.abs(e.month) / 13, 10);
                    (n = Math.abs(n) + 1),
                      (e.year = t.year() - n),
                      (e.month = e.month % 12),
                      (e.month = e.month + 12),
                      12 === e.month && (e.month = 0);
                  }
                  return e;
                })(a, r))),
              "week" === t)
            ) {
              let t = r.date() + 7 * e;
              t <= 28 && t > 1 && (a.date = t);
            }
            if ("weekend" === t && "saturday" !== n.dayName())
              n = n.day("saturday", !0);
            else if ("date" === t) {
              if (e < 0)
                a = ((e, t, n) => {
                  (e.year = t.year()), (e.month = t.month());
                  let r = t.date();
                  for (e.date = r - Math.abs(n); e.date < 1; ) {
                    (e.month -= 1),
                      e.month < 0 && ((e.month = 11), (e.year -= 1));
                    let t = Xe(e.month, e.year);
                    e.date += t;
                  }
                  return e;
                })(a, r, e);
              else {
                let t = r.date() + e;
                a = ((e, t, n) => {
                  let r = t.year(),
                    a = t.month(),
                    o = Xe(a, r);
                  for (; n > o; )
                    (n -= o),
                      (a += 1),
                      a >= 12 && ((a -= 12), (r += 1)),
                      (o = Xe(a, r));
                  return (e.month = a), (e.date = n), e;
                })(a, r, t);
              }
              0 !== e && r.isSame(n, "day") && (a.date = r.date() + e);
            } else if ("quarter" === t) {
              if (
                ((a.month = r.month() + 3 * e),
                (a.year = r.year()),
                a.month < 0)
              ) {
                let e = Math.floor(a.month / 12),
                  t = a.month + 12 * Math.abs(e);
                (a.month = t), (a.year += e);
              } else if (a.month >= 12) {
                let e = Math.floor(a.month / 12);
                (a.month = a.month % 12), (a.year += e);
              }
              a.date = r.date();
            } else if ("year" === t) {
              let t = r.year() + e,
                a = n.year();
              if (a < t) {
                let t = Math.floor(e / 4) || 1;
                n.epoch += Math.abs(O.day * t);
              } else if (a > t) {
                let t = Math.floor(e / 4) || 1;
                n.epoch += O.day * t;
              }
            } else
              "decade" === t
                ? (a.year = n.year() + 10)
                : "century" === t && (a.year = n.year() + 100);
            if (rt[t]) {
              let e = C[a.month];
              (a.date = r.date()), a.date > e && (a.date = e);
            }
            return Object.keys(a).length > 1 && q(n, a), n;
          }),
            (e.prototype.subtract = function (e, t) {
              return this.clone().add(-1 * e, t);
            }),
            (e.prototype.minus = e.prototype.subtract),
            (e.prototype.plus = e.prototype.add);
        })(ut),
        ((e) => {
          e.prototype.isSame = function (t, n, r = !0) {
            let a = this;
            if (!n) return null;
            if ("string" == typeof t && "object" == typeof n) {
              let e = t;
              (t = n), (n = e);
            }
            return (
              ("string" != typeof t && "number" != typeof t) ||
                (t = new e(t, this.timezone.name)),
              (n = n.replace(/s$/, "")),
              !0 === r && a.tz !== t.tz && ((t = t.clone()).tz = a.tz),
              at[n] ? at[n](a) === at[n](t) : null
            );
          };
        })(ut),
        ((e) => {
          const t = {
            isAfter: function (e) {
              e = E.beADate(e, this);
              let t = E.getEpoch(e);
              return null === t ? null : this.epoch > t;
            },
            isBefore: function (e) {
              e = E.beADate(e, this);
              let t = E.getEpoch(e);
              return null === t ? null : this.epoch < t;
            },
            isEqual: function (e) {
              e = E.beADate(e, this);
              let t = E.getEpoch(e);
              return null === t ? null : this.epoch === t;
            },
            isBetween: function (e, t, n = !1) {
              (e = E.beADate(e, this)), (t = E.beADate(t, this));
              let r = E.getEpoch(e);
              if (null === r) return null;
              let a = E.getEpoch(t);
              return null === a
                ? null
                : n
                ? this.isBetween(e, t) || this.isEqual(e) || this.isEqual(t)
                : r < this.epoch && this.epoch < a;
            },
          };
          Object.keys(t).forEach((n) => {
            e.prototype[n] = t[n];
          });
        })(ut),
        ((e) => {
          const t = {
            i18n: (e) => {
              E.isObject(e.days) && fe.set(e.days),
                E.isObject(e.months) &&
                  ((e) => {
                    (M = e.short || M), (S = e.long || S);
                  })(e.months),
                E.isBoolean(e.useTitleCase) &&
                  ((e) => {
                    me = e;
                  })(e.useTitleCase);
            },
          };
          Object.keys(t).forEach((n) => {
            e.prototype[n] = t[n];
          });
        })(ut);
      var lt = ut;
      const ct = (e, t, n) => new lt(e, t, n),
        ht = function (e) {
          let t = e._today || {};
          return (
            Object.keys(t).forEach((n) => {
              e = e[n](t[n]);
            }),
            e
          );
        };
      (ct.now = (e, t) => {
        let n = new lt(new Date().getTime(), e, t);
        return (n = ht(n)), n;
      }),
        (ct.today = (e, t) => {
          let n = new lt(new Date().getTime(), e, t);
          return (n = ht(n)), n.startOf("day");
        }),
        (ct.tomorrow = (e, t) => {
          let n = new lt(new Date().getTime(), e, t);
          return (n = ht(n)), n.add(1, "day").startOf("day");
        }),
        (ct.yesterday = (e, t) => {
          let n = new lt(new Date().getTime(), e, t);
          return (n = ht(n)), n.subtract(1, "day").startOf("day");
        }),
        (ct.extend = function (e = {}) {
          return (
            Object.keys(e).forEach((t) => {
              lt.prototype[t] = e[t];
            }),
            this
          );
        }),
        (ct.timezones = function () {
          return new lt().timezones;
        }),
        (ct.max = function (e, t) {
          let n = new lt(null, e, t);
          return (n.epoch = 864e13), n;
        }),
        (ct.min = function (e, t) {
          let n = new lt(null, e, t);
          return (n.epoch = -864e13), n;
        }),
        (ct.whereIts = (e, t) => {
          let n = new lt(null),
            r = new lt(null);
          (n = n.time(e)), (r = t ? r.time(t) : n.add(59, "minutes"));
          let a = n.hour(),
            o = r.hour();
          return Object.keys(n.timezones).filter((e) => {
            if (-1 === e.indexOf("/")) return !1;
            let t = new lt(null, e),
              i = t.hour();
            return (
              i >= a &&
              i <= o &&
              !(i === a && t.minute() < n.minute()) &&
              !(i === o && t.minute() > r.minute())
            );
          });
        }),
        (ct.version = "6.16.3"),
        (ct.plugin = ct.extend);
      var dt = ct;
    },
  },
]);
