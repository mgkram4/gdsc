(() => {
  var e = {};
  (e.id = 165),
    (e.ids = [165]),
    (e.modules = {
      7849: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external");
      },
      2934: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external.js");
      },
      5403: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external");
      },
      4580: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external.js");
      },
      4749: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external");
      },
      5869: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external.js");
      },
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      4804: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => p,
            originalPathname: () => u,
            pages: () => l,
            routeModule: () => m,
            tree: () => c,
          });
        var r = n(7),
          o = n(8533),
          s = n(9377),
          i = n.n(s),
          a = n(9799),
          d = {};
        for (let e in a)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (d[e] = () => a[e]);
        n.d(t, d);
        let c = [
            "",
            {
              children: [
                "__PAGE__",
                {},
                {
                  page: [
                    () => Promise.resolve().then(n.t.bind(n, 3472, 23)),
                    "next/dist/client/components/not-found-error",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(n.bind(n, 9224)),
                "/home/bryan/Documents/github/gdsc/gdsc/src/app/layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(n.t.bind(n, 3472, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          l = [],
          u = "/_not-found",
          p = { require: n, loadChunk: () => Promise.resolve() },
          m = new r.AppPageRouteModule({
            definition: {
              kind: o.x.APP_PAGE,
              page: "/_not-found",
              pathname: "/_not-found",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      4100: (e, t, n) => {
        Promise.resolve().then(n.t.bind(n, 5483, 23)),
          Promise.resolve().then(n.t.bind(n, 6544, 23)),
          Promise.resolve().then(n.t.bind(n, 7680, 23)),
          Promise.resolve().then(n.t.bind(n, 4138, 23)),
          Promise.resolve().then(n.t.bind(n, 8705, 23)),
          Promise.resolve().then(n.t.bind(n, 7974, 23));
      },
      570: () => {},
      9224: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => a, metadata: () => i });
        var r = n(657),
          o = n(7337),
          s = n.n(o);
        n(642),
          (function () {
            var e = Error("Cannot find module '@components/navbar'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })(),
          (function () {
            var e = Error("Cannot find module '@components/footer'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })();
        let i = {
          title: "Create Next App",
          description: "Generated by create next app",
        };
        function a({ children: e }) {
          return r.jsx("html", {
            lang: "en",
            children: (0, r.jsxs)("body", {
              className: s().className,
              children: [
                r.jsx(
                  Object(
                    (function () {
                      var e = Error("Cannot find module '@components/navbar'");
                      throw ((e.code = "MODULE_NOT_FOUND"), e);
                    })(),
                  ),
                  {},
                ),
                e,
                r.jsx(
                  Object(
                    (function () {
                      var e = Error("Cannot find module '@components/footer'");
                      throw ((e.code = "MODULE_NOT_FOUND"), e);
                    })(),
                  ),
                  {},
                ),
              ],
            }),
          });
        }
      },
      642: () => {},
    });
  var t = require("../webpack-runtime.js");
  t.C(e);
  var n = (e) => t((t.s = e)),
    r = t.X(0, [215, 404], () => n(4804));
  module.exports = r;
})();