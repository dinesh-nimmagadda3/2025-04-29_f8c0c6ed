"use strict";
(self.webpackJsonpRuntime = self.webpackJsonpRuntime || []).push([
  [184],
  {
    5184: (t, e, i) => {
      i.r(e),
        i.d(e, { initPagination: () => a, initWidgetsPagination: () => o });
      var n = i(1229);
      const a = (t) => {
          const e = t.querySelector(".pagination-list"),
            i = t.getAttribute("id");
          e &&
            e.addEventListener("click", (t) => {
              const e = t.target.closest(".pagination-item a");
              e &&
                (t.preventDefault(),
                ((t, e) => {
                  const i = parseInt(e.getAttribute("data-page"), 10),
                    a = document
                      .querySelector(`[id="${t}"]`)
                      .getAttribute("data-paginate-page-size");
                  if (!isNaN(i))
                    try {
                      (0, n.gL)(t, { pageNumber: i - 1, pageSize: a }).then(
                        () => {
                          const e = document.getElementById(t);
                          if (e) {
                            const t = e.getBoundingClientRect();
                            (t.top < 0 || t.top >= window.innerHeight) &&
                              e.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                          }
                        }
                      );
                    } catch (t) {
                      console.error(
                        "Error parsing binding metadata or data_query:",
                        t
                      );
                    }
                })(i, e));
            });
        },
        o = (t = []) => t.forEach((t) => a(t));
    },
  },
]);
