(() => {
  var e = {};
  (e.id = 966),
    (e.ids = [966]),
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
      5660: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => d,
            originalPathname: () => f,
            pages: () => c,
            routeModule: () => p,
            tree: () => l,
          });
        var r = n(7),
          o = n(8533),
          a = n(9377),
          i = n.n(a),
          s = n(9799),
          u = {};
        for (let e in s)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (u[e] = () => s[e]);
        n.d(t, u);
        let l = [
            "",
            {
              children: [
                "signup",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(n.bind(n, 2641)),
                        "/home/bryan/Documents/github/gdsc/gdsc/src/app/signup/page.tsx",
                      ],
                    },
                  ],
                },
                {},
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
          c = [
            "/home/bryan/Documents/github/gdsc/gdsc/src/app/signup/page.tsx",
          ],
          f = "/signup/page",
          d = { require: n, loadChunk: () => Promise.resolve() },
          p = new r.AppPageRouteModule({
            definition: {
              kind: o.x.APP_PAGE,
              page: "/signup/page",
              pathname: "/signup",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      4143: (e, t, n) => {
        let r = {
          "8570b6a74db85f226bdc9eabf6e23a2643d478b7": () =>
            Promise.resolve()
              .then(n.bind(n, 2641))
              .then((e) => e.default),
        };
        async function o(e, ...t) {
          return (await r[e]()).apply(null, t);
        }
        e.exports = {
          "8570b6a74db85f226bdc9eabf6e23a2643d478b7": o.bind(
            null,
            "8570b6a74db85f226bdc9eabf6e23a2643d478b7",
          ),
        };
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
      4868: () => {},
      878: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "U", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
        let r = n(6386);
        function o(e, t) {
          return (0, r.registerServerReference)(t, e, null);
        }
      },
      656: (e, t) => {
        "use strict";
        function n(e) {
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            if ("function" != typeof n)
              throw Error(
                `A "use server" file can only export async functions, found ${typeof n}.`,
              );
          }
        }
        Object.defineProperty(t, "h", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      },
      7545: (e, t, n) => {
        "use strict";
        var r = n(6374),
          o = n(5099),
          a = { stream: !0 },
          i = new Map();
        function s(e) {
          var t = globalThis.__next_require__(e);
          return "function" != typeof t.then || "fulfilled" === t.status
            ? null
            : (t.then(
                function (e) {
                  (t.status = "fulfilled"), (t.value = e);
                },
                function (e) {
                  (t.status = "rejected"), (t.reason = e);
                },
              ),
              t);
        }
        function u() {}
        var l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher,
          c = Symbol.for("react.element"),
          f = Symbol.for("react.provider"),
          d = Symbol.for("react.server_context"),
          p = Symbol.for("react.lazy"),
          m = Symbol.for("react.default_value"),
          h = Symbol.iterator,
          g = Array.isArray,
          y = Object.getPrototypeOf,
          b = Object.prototype,
          v = new WeakMap();
        function w(e, t, n, r) {
          var o = 1,
            a = 0,
            i = null;
          (e = JSON.stringify(e, function e(s, u) {
            if (null === u) return null;
            if ("object" == typeof u) {
              if ("function" == typeof u.then) {
                null === i && (i = new FormData()), a++;
                var l,
                  c,
                  f = o++;
                return (
                  u.then(
                    function (r) {
                      r = JSON.stringify(r, e);
                      var o = i;
                      o.append(t + f, r), 0 == --a && n(o);
                    },
                    function (e) {
                      r(e);
                    },
                  ),
                  "$@" + f.toString(16)
                );
              }
              if (g(u)) return u;
              if (u instanceof FormData) {
                null === i && (i = new FormData());
                var d = i,
                  p = t + (s = o++) + "_";
                return (
                  u.forEach(function (e, t) {
                    d.append(p + t, e);
                  }),
                  "$K" + s.toString(16)
                );
              }
              if (u instanceof Map)
                return (
                  (u = JSON.stringify(Array.from(u), e)),
                  null === i && (i = new FormData()),
                  (s = o++),
                  i.append(t + s, u),
                  "$Q" + s.toString(16)
                );
              if (u instanceof Set)
                return (
                  (u = JSON.stringify(Array.from(u), e)),
                  null === i && (i = new FormData()),
                  (s = o++),
                  i.append(t + s, u),
                  "$W" + s.toString(16)
                );
              if (
                null === (c = u) || "object" != typeof c
                  ? null
                  : "function" == typeof (c = (h && c[h]) || c["@@iterator"])
                    ? c
                    : null
              )
                return Array.from(u);
              if ((s = y(u)) !== b && (null === s || null !== y(s)))
                throw Error(
                  "Only plain objects, and a few built-ins, can be passed to Server Actions. Classes or null prototypes are not supported.",
                );
              return u;
            }
            if ("string" == typeof u)
              return "Z" === u[u.length - 1] && this[s] instanceof Date
                ? "$D" + u
                : (u = "$" === u[0] ? "$" + u : u);
            if ("boolean" == typeof u) return u;
            if ("number" == typeof u)
              return Number.isFinite((l = u))
                ? 0 === l && -1 / 0 == 1 / l
                  ? "$-0"
                  : l
                : 1 / 0 === l
                  ? "$Infinity"
                  : -1 / 0 === l
                    ? "$-Infinity"
                    : "$NaN";
            if (void 0 === u) return "$undefined";
            if ("function" == typeof u) {
              if (void 0 !== (u = v.get(u)))
                return (
                  (u = JSON.stringify(u, e)),
                  null === i && (i = new FormData()),
                  (s = o++),
                  i.set(t + s, u),
                  "$F" + s.toString(16)
                );
              throw Error(
                "Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.",
              );
            }
            if ("symbol" == typeof u) {
              if (Symbol.for((s = u.description)) !== u)
                throw Error(
                  "Only global symbols received from Symbol.for(...) can be passed to Server Functions. The symbol Symbol.for(" +
                    u.description +
                    ") cannot be found among global symbols.",
                );
              return "$S" + s;
            }
            if ("bigint" == typeof u) return "$n" + u.toString(10);
            throw Error(
              "Type " +
                typeof u +
                " is not supported as an argument to a Server Function.",
            );
          })),
            null === i ? n(e) : (i.set(t + "0", e), 0 === a && n(i));
        }
        var _ = new WeakMap();
        function S(e) {
          var t = v.get(this);
          if (!t)
            throw Error(
              "Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.",
            );
          var n = null;
          if (null !== t.bound) {
            if (
              ((n = _.get(t)) ||
                ((r = t),
                (i = new Promise(function (e, t) {
                  (o = e), (a = t);
                })),
                w(
                  r,
                  "",
                  function (e) {
                    if ("string" == typeof e) {
                      var t = new FormData();
                      t.append("0", e), (e = t);
                    }
                    (i.status = "fulfilled"), (i.value = e), o(e);
                  },
                  function (e) {
                    (i.status = "rejected"), (i.reason = e), a(e);
                  },
                ),
                (n = i),
                _.set(t, n)),
              "rejected" === n.status)
            )
              throw n.reason;
            if ("fulfilled" !== n.status) throw n;
            t = n.value;
            var r,
              o,
              a,
              i,
              s = new FormData();
            t.forEach(function (t, n) {
              s.append("$ACTION_" + e + ":" + n, t);
            }),
              (n = s),
              (t = "$ACTION_REF_" + e);
          } else t = "$ACTION_ID_" + t.id;
          return {
            name: t,
            method: "POST",
            encType: "multipart/form-data",
            data: n,
          };
        }
        function T(e, t) {
          var n = v.get(this);
          if (!n)
            throw Error(
              "Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.",
            );
          if (n.id !== e) return !1;
          var r = n.bound;
          if (null === r) return 0 === t;
          switch (r.status) {
            case "fulfilled":
              return r.value.length === t;
            case "pending":
              throw r;
            case "rejected":
              throw r.reason;
            default:
              throw (
                ("string" != typeof r.status &&
                  ((r.status = "pending"),
                  r.then(
                    function (e) {
                      (r.status = "fulfilled"), (r.value = e);
                    },
                    function (e) {
                      (r.status = "rejected"), (r.reason = e);
                    },
                  )),
                r)
              );
          }
        }
        function x(e, t) {
          Object.defineProperties(e, {
            $$FORM_ACTION: { value: S },
            $$IS_SIGNATURE_EQUAL: { value: T },
            bind: { value: N },
          }),
            v.set(e, t);
        }
        var O = Function.prototype.bind,
          E = Array.prototype.slice;
        function N() {
          var e = O.apply(this, arguments),
            t = v.get(this);
          if (t) {
            var n = E.call(arguments, 1),
              r = null;
            (r =
              null !== t.bound
                ? Promise.resolve(t.bound).then(function (e) {
                    return e.concat(n);
                  })
                : Promise.resolve(n)),
              x(e, { id: t.id, bound: r });
          }
          return e;
        }
        var j =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ContextRegistry;
        function A(e, t, n, r) {
          (this.status = e),
            (this.value = t),
            (this.reason = n),
            (this._response = r);
        }
        function D(e) {
          switch (e.status) {
            case "resolved_model":
              U(e);
              break;
            case "resolved_module":
              F(e);
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "pending":
            case "blocked":
            case "cyclic":
              throw e;
            default:
              throw e.reason;
          }
        }
        function P(e, t) {
          for (var n = 0; n < e.length; n++) (0, e[n])(t);
        }
        function M(e, t, n) {
          switch (e.status) {
            case "fulfilled":
              P(t, e.value);
              break;
            case "pending":
            case "blocked":
            case "cyclic":
              (e.value = t), (e.reason = n);
              break;
            case "rejected":
              n && P(n, e.reason);
          }
        }
        function k(e, t) {
          if ("pending" === e.status || "blocked" === e.status) {
            var n = e.reason;
            (e.status = "rejected"), (e.reason = t), null !== n && P(n, t);
          }
        }
        function R(e, t) {
          if ("pending" === e.status || "blocked" === e.status) {
            var n = e.value,
              r = e.reason;
            (e.status = "resolved_module"),
              (e.value = t),
              null !== n && (F(e), M(e, n, r));
          }
        }
        (A.prototype = Object.create(Promise.prototype)),
          (A.prototype.then = function (e, t) {
            switch (this.status) {
              case "resolved_model":
                U(this);
                break;
              case "resolved_module":
                F(this);
            }
            switch (this.status) {
              case "fulfilled":
                e(this.value);
                break;
              case "pending":
              case "blocked":
              case "cyclic":
                e &&
                  (null === this.value && (this.value = []),
                  this.value.push(e)),
                  t &&
                    (null === this.reason && (this.reason = []),
                    this.reason.push(t));
                break;
              default:
                t(this.reason);
            }
          });
        var C = null,
          q = null;
        function U(e) {
          var t = C,
            n = q;
          (C = e), (q = null);
          var r = e.value;
          (e.status = "cyclic"), (e.value = null), (e.reason = null);
          try {
            var o = JSON.parse(r, e._response._fromJSON);
            if (null !== q && 0 < q.deps)
              (q.value = o),
                (e.status = "blocked"),
                (e.value = null),
                (e.reason = null);
            else {
              var a = e.value;
              (e.status = "fulfilled"), (e.value = o), null !== a && P(a, o);
            }
          } catch (t) {
            (e.status = "rejected"), (e.reason = t);
          } finally {
            (C = t), (q = n);
          }
        }
        function F(e) {
          try {
            var t = e.value,
              n = globalThis.__next_require__(t[0]);
            if (4 === t.length && "function" == typeof n.then) {
              if ("fulfilled" === n.status) n = n.value;
              else throw n.reason;
            }
            var r =
              "*" === t[2]
                ? n
                : "" === t[2]
                  ? n.__esModule
                    ? n.default
                    : n
                  : n[t[2]];
            (e.status = "fulfilled"), (e.value = r);
          } catch (t) {
            (e.status = "rejected"), (e.reason = t);
          }
        }
        function I(e, t) {
          e._chunks.forEach(function (e) {
            "pending" === e.status && k(e, t);
          });
        }
        function $(e, t) {
          var n = e._chunks,
            r = n.get(t);
          return r || ((r = new A("pending", null, null, e)), n.set(t, r)), r;
        }
        function L(e, t) {
          if (
            ("resolved_model" === (e = $(e, t)).status && U(e),
            "fulfilled" === e.status)
          )
            return e.value;
          throw e.reason;
        }
        function J() {
          throw Error(
            'Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.',
          );
        }
        function G() {
          throw Error(
            "Server Functions cannot be called during initial render. This would create a fetch waterfall. Try to use a Server Component to pass data to Client Components instead.",
          );
        }
        function K(e) {
          var t,
            n = e.ssrManifest.moduleMap;
          return (
            ((n = {
              _bundlerConfig: n,
              _moduleLoading: e.ssrManifest.moduleLoading,
              _callServer: void 0 !== G ? G : J,
              _nonce: (e = "string" == typeof e.nonce ? e.nonce : void 0),
              _chunks: new Map(),
              _stringDecoder: new TextDecoder(),
              _fromJSON: null,
              _rowState: 0,
              _rowID: 0,
              _rowTag: 0,
              _rowLength: 0,
              _buffer: [],
            })._fromJSON =
              ((t = n),
              function (e, n) {
                return "string" == typeof n
                  ? (function (e, t, n, r) {
                      if ("$" === r[0]) {
                        if ("$" === r) return c;
                        switch (r[1]) {
                          case "$":
                            return r.slice(1);
                          case "L":
                            return {
                              $$typeof: p,
                              _payload: (e = $(
                                e,
                                (t = parseInt(r.slice(2), 16)),
                              )),
                              _init: D,
                            };
                          case "@":
                            return $(e, (t = parseInt(r.slice(2), 16)));
                          case "S":
                            return Symbol.for(r.slice(2));
                          case "P":
                            return (
                              j[(e = r.slice(2))] ||
                                (((t = {
                                  $$typeof: d,
                                  _currentValue: m,
                                  _currentValue2: m,
                                  _defaultValue: m,
                                  _threadCount: 0,
                                  Provider: null,
                                  Consumer: null,
                                  _globalName: e,
                                }).Provider = { $$typeof: f, _context: t }),
                                (j[e] = t)),
                              j[e].Provider
                            );
                          case "F":
                            return (
                              (t = L(e, (t = parseInt(r.slice(2), 16)))),
                              (function (e, t) {
                                function n() {
                                  var e = Array.prototype.slice.call(arguments),
                                    n = t.bound;
                                  return n
                                    ? "fulfilled" === n.status
                                      ? r(t.id, n.value.concat(e))
                                      : Promise.resolve(n).then(function (n) {
                                          return r(t.id, n.concat(e));
                                        })
                                    : r(t.id, e);
                                }
                                var r = e._callServer;
                                return x(n, t), n;
                              })(e, t)
                            );
                          case "Q":
                            return (
                              (e = L(e, (t = parseInt(r.slice(2), 16)))),
                              new Map(e)
                            );
                          case "W":
                            return (
                              (e = L(e, (t = parseInt(r.slice(2), 16)))),
                              new Set(e)
                            );
                          case "I":
                            return 1 / 0;
                          case "-":
                            return "$-0" === r ? -0 : -1 / 0;
                          case "N":
                            return NaN;
                          case "u":
                            return;
                          case "D":
                            return new Date(Date.parse(r.slice(2)));
                          case "n":
                            return BigInt(r.slice(2));
                          default:
                            switch (
                              (e = $(e, (r = parseInt(r.slice(1), 16)))).status
                            ) {
                              case "resolved_model":
                                U(e);
                                break;
                              case "resolved_module":
                                F(e);
                            }
                            switch (e.status) {
                              case "fulfilled":
                                return e.value;
                              case "pending":
                              case "blocked":
                              case "cyclic":
                                var o;
                                return (
                                  (r = C),
                                  e.then(
                                    (function (e, t, n, r) {
                                      if (q) {
                                        var o = q;
                                        r || o.deps++;
                                      } else
                                        o = q = {
                                          deps: r ? 0 : 1,
                                          value: null,
                                        };
                                      return function (r) {
                                        (t[n] = r),
                                          o.deps--,
                                          0 === o.deps &&
                                            "blocked" === e.status &&
                                            ((r = e.value),
                                            (e.status = "fulfilled"),
                                            (e.value = o.value),
                                            null !== r && P(r, o.value));
                                      };
                                    })(r, t, n, "cyclic" === e.status),
                                    ((o = r),
                                    function (e) {
                                      return k(o, e);
                                    }),
                                  ),
                                  null
                                );
                              default:
                                throw e.reason;
                            }
                        }
                      }
                      return r;
                    })(t, this, e, n)
                  : "object" == typeof n && null !== n
                    ? (e =
                        n[0] === c
                          ? {
                              $$typeof: c,
                              type: n[1],
                              key: n[2],
                              ref: null,
                              props: n[3],
                              _owner: null,
                            }
                          : n)
                    : n;
              })),
            n
          );
        }
        function B(e, t) {
          function r(t) {
            I(e, t);
          }
          var o = t.getReader();
          o.read()
            .then(function t(c) {
              var f = c.value;
              if (c.done) I(e, Error("Connection closed."));
              else {
                var d = 0,
                  p = e._rowState,
                  m = e._rowID,
                  h = e._rowTag,
                  g = e._rowLength;
                c = e._buffer;
                for (var y = f.length; d < y; ) {
                  var b = -1;
                  switch (p) {
                    case 0:
                      58 === (b = f[d++])
                        ? (p = 1)
                        : (m = (m << 4) | (96 < b ? b - 87 : b - 48));
                      continue;
                    case 1:
                      84 === (p = f[d])
                        ? ((h = p), (p = 2), d++)
                        : 64 < p && 91 > p
                          ? ((h = p), (p = 3), d++)
                          : ((h = 0), (p = 3));
                      continue;
                    case 2:
                      44 === (b = f[d++])
                        ? (p = 4)
                        : (g = (g << 4) | (96 < b ? b - 87 : b - 48));
                      continue;
                    case 3:
                      b = f.indexOf(10, d);
                      break;
                    case 4:
                      (b = d + g) > f.length && (b = -1);
                  }
                  var v = f.byteOffset + d;
                  if (-1 < b) {
                    (d = new Uint8Array(f.buffer, v, b - d)), (g = e), (v = h);
                    var w = g._stringDecoder;
                    h = "";
                    for (var _ = 0; _ < c.length; _++) h += w.decode(c[_], a);
                    switch (((h += w.decode(d)), v)) {
                      case 73:
                        !(function (e, t, r) {
                          var o = e._chunks,
                            a = o.get(t);
                          r = JSON.parse(r, e._fromJSON);
                          var c = (function (e, t) {
                            if (e) {
                              var n = e[t[0]];
                              if ((e = n[t[2]])) n = e.name;
                              else {
                                if (!(e = n["*"]))
                                  throw Error(
                                    'Could not find the module "' +
                                      t[0] +
                                      '" in the React SSR Manifest. This is probably a bug in the React Server Components bundler.',
                                  );
                                n = t[2];
                              }
                              return 4 === t.length
                                ? [e.id, e.chunks, n, 1]
                                : [e.id, e.chunks, n];
                            }
                            return t;
                          })(e._bundlerConfig, r);
                          if (
                            ((function (e, t, n) {
                              if (null !== e)
                                for (var r = 1; r < t.length; r += 2) {
                                  var o = l.current;
                                  if (o) {
                                    var a = o.preinitScript,
                                      i = e.prefix + t[r],
                                      s = e.crossOrigin;
                                    (s =
                                      "string" == typeof s
                                        ? "use-credentials" === s
                                          ? s
                                          : ""
                                        : void 0),
                                      a.call(o, i, {
                                        crossOrigin: s,
                                        nonce: n,
                                      });
                                  }
                                }
                            })(e._moduleLoading, r[1], e._nonce),
                            (r = (function (e) {
                              for (
                                var t = e[1], r = [], o = 0;
                                o < t.length;

                              ) {
                                var a = t[o++];
                                t[o++];
                                var l = i.get(a);
                                if (void 0 === l) {
                                  (l = n.e(a)), r.push(l);
                                  var c = i.set.bind(i, a, null);
                                  l.then(c, u), i.set(a, l);
                                } else null !== l && r.push(l);
                              }
                              return 4 === e.length
                                ? 0 === r.length
                                  ? s(e[0])
                                  : Promise.all(r).then(function () {
                                      return s(e[0]);
                                    })
                                : 0 < r.length
                                  ? Promise.all(r)
                                  : null;
                            })(c)))
                          ) {
                            if (a) {
                              var f = a;
                              f.status = "blocked";
                            } else
                              (f = new A("blocked", null, null, e)),
                                o.set(t, f);
                            r.then(
                              function () {
                                return R(f, c);
                              },
                              function (e) {
                                return k(f, e);
                              },
                            );
                          } else
                            a
                              ? R(a, c)
                              : o.set(t, new A("resolved_module", c, null, e));
                        })(g, m, h);
                        break;
                      case 72:
                        if (
                          ((m = h[0]),
                          (g = JSON.parse((h = h.slice(1)), g._fromJSON)),
                          (h = l.current))
                        )
                          switch (m) {
                            case "D":
                              h.prefetchDNS(g);
                              break;
                            case "C":
                              "string" == typeof g
                                ? h.preconnect(g)
                                : h.preconnect(g[0], g[1]);
                              break;
                            case "L":
                              (m = g[0]),
                                (d = g[1]),
                                3 === g.length
                                  ? h.preload(m, d, g[2])
                                  : h.preload(m, d);
                              break;
                            case "m":
                              "string" == typeof g
                                ? h.preloadModule(g)
                                : h.preloadModule(g[0], g[1]);
                              break;
                            case "S":
                              "string" == typeof g
                                ? h.preinitStyle(g)
                                : h.preinitStyle(
                                    g[0],
                                    0 === g[1] ? void 0 : g[1],
                                    3 === g.length ? g[2] : void 0,
                                  );
                              break;
                            case "X":
                              "string" == typeof g
                                ? h.preinitScript(g)
                                : h.preinitScript(g[0], g[1]);
                              break;
                            case "M":
                              "string" == typeof g
                                ? h.preinitModuleScript(g)
                                : h.preinitModuleScript(g[0], g[1]);
                          }
                        break;
                      case 69:
                        (d = (h = JSON.parse(h)).digest),
                          ((h = Error(
                            "An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.",
                          )).stack = "Error: " + h.message),
                          (h.digest = d),
                          (v = (d = g._chunks).get(m))
                            ? k(v, h)
                            : d.set(m, new A("rejected", null, h, g));
                        break;
                      case 84:
                        g._chunks.set(m, new A("fulfilled", h, null, g));
                        break;
                      default:
                        (v = (d = g._chunks).get(m))
                          ? ((g = v),
                            (m = h),
                            "pending" === g.status &&
                              ((h = g.value),
                              (d = g.reason),
                              (g.status = "resolved_model"),
                              (g.value = m),
                              null !== h && (U(g), M(g, h, d))))
                          : d.set(m, new A("resolved_model", h, null, g));
                    }
                    (d = b),
                      3 === p && d++,
                      (g = m = h = p = 0),
                      (c.length = 0);
                  } else {
                    (f = new Uint8Array(f.buffer, v, f.byteLength - d)),
                      c.push(f),
                      (g -= f.byteLength);
                    break;
                  }
                }
                return (
                  (e._rowState = p),
                  (e._rowID = m),
                  (e._rowTag = h),
                  (e._rowLength = g),
                  o.read().then(t).catch(r)
                );
              }
            })
            .catch(r);
        }
        (t.createFromFetch = function (e, t) {
          var n = K(t);
          return (
            e.then(
              function (e) {
                B(n, e.body);
              },
              function (e) {
                I(n, e);
              },
            ),
            $(n, 0)
          );
        }),
          (t.createFromReadableStream = function (e, t) {
            return B((t = K(t)), e), $(t, 0);
          }),
          (t.createServerReference = function (e) {
            return (function (e, t) {
              function n() {
                var n = Array.prototype.slice.call(arguments);
                return t(e, n);
              }
              return x(n, { id: e, bound: null }), n;
            })(e, G);
          }),
          (t.encodeReply = function (e) {
            return new Promise(function (t, n) {
              w(e, "", t, n);
            });
          });
      },
      1596: (e, t, n) => {
        "use strict";
        e.exports = n(7545);
      },
      7979: () => {},
      8409: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "DetachedPromise", {
            enumerable: !0,
            get: function () {
              return n;
            },
          });
        class n {
          constructor() {
            let e, t;
            (this.promise = new Promise((n, r) => {
              (e = n), (t = r);
            })),
              (this.resolve = e),
              (this.reject = t);
          }
        }
      },
      4809: (e, t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var n in t)
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          })(t, {
            scheduleOnNextTick: function () {
              return n;
            },
            scheduleImmediate: function () {
              return r;
            },
          });
        let n = (e) => {
            Promise.resolve().then(() => {
              process.nextTick(e);
            });
          },
          r = (e) => {
            setImmediate(e);
          };
      },
      5010: (e, t) => {
        "use strict";
        let n, r;
        function o(e) {
          let t = new Uint8Array(e),
            n = t.byteLength;
          if (n < 65535) return String.fromCharCode.apply(null, t);
          let r = "";
          for (let e = 0; e < n; e++) r += String.fromCharCode(t[e]);
          return r;
        }
        function a(e) {
          let t = e.length,
            n = new Uint8Array(t);
          for (let r = 0; r < t; r++) n[r] = e.charCodeAt(r);
          return n;
        }
        function i(e, t, n) {
          return crypto.subtle.encrypt({ name: "AES-GCM", iv: t }, e, n);
        }
        function s(e, t, n) {
          return crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, n);
        }
        async function u(e) {
          if (e && void 0 !== r) return r;
          let t = await crypto.subtle.generateKey(
              { name: "AES-GCM", length: 256 },
              !0,
              ["encrypt", "decrypt"],
            ),
            a = btoa(o(await crypto.subtle.exportKey("raw", t)));
          return (n = t), e && (r = a), a;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var n in t)
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          })(t, {
            arrayBufferToString: function () {
              return o;
            },
            stringToUint8Array: function () {
              return a;
            },
            encrypt: function () {
              return i;
            },
            decrypt: function () {
              return s;
            },
            generateRandomActionKeyRaw: function () {
              return u;
            },
            setReferenceManifestsSingleton: function () {
              return c;
            },
            getServerModuleMap: function () {
              return f;
            },
            getClientReferenceManifestSingleton: function () {
              return d;
            },
            getActionEncryptionKey: function () {
              return p;
            },
          });
        let l = Symbol.for("next.server.action-manifests");
        function c({
          clientReferenceManifest: e,
          serverActionsManifest: t,
          serverModuleMap: n,
        }) {
          globalThis[l] = {
            clientReferenceManifest: e,
            serverActionsManifest: t,
            serverModuleMap: n,
          };
        }
        function f() {
          let e = globalThis[l];
          if (!e)
            throw Error(
              "Missing manifest for Server Actions. This is a bug in Next.js",
            );
          return e.serverModuleMap;
        }
        function d() {
          let e = globalThis[l];
          if (!e)
            throw Error(
              "Missing manifest for Server Actions. This is a bug in Next.js",
            );
          return e.clientReferenceManifest;
        }
        async function p() {
          if (n) return n;
          let e = globalThis[l];
          if (!e)
            throw Error(
              "Missing manifest for Server Actions. This is a bug in Next.js",
            );
          let t =
            process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY ||
            e.serverActionsManifest.encryptionKey;
          if (void 0 === t)
            throw Error("Missing encryption key for Server Actions");
          return (n = await crypto.subtle.importKey(
            "raw",
            a(atob(t)),
            "AES-GCM",
            !0,
            ["encrypt", "decrypt"],
          ));
        }
      },
      1389: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var n in t)
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          })(t, {
            encryptActionBoundArgs: function () {
              return f;
            },
            decryptActionBoundArgs: function () {
              return d;
            },
          }),
          n(7979);
        let r = n(6386),
          o = n(1596),
          a = n(9671),
          i = n(5010),
          s = new TextEncoder(),
          u = new TextDecoder();
        async function l(e, t) {
          let n = await (0, i.getActionEncryptionKey)();
          if (void 0 === n)
            throw Error(
              "Missing encryption key for Server Action. This is a bug in Next.js",
            );
          let r = atob(t),
            o = r.slice(0, 16),
            a = r.slice(16);
          if (void 0 === a) throw Error("Invalid Server Action payload.");
          let s = u.decode(
            await (0, i.decrypt)(
              n,
              (0, i.stringToUint8Array)(o),
              (0, i.stringToUint8Array)(a),
            ),
          );
          if (!s.startsWith(e))
            throw Error("Invalid Server Action payload: failed to decrypt.");
          return s.slice(e.length);
        }
        async function c(e, t) {
          let n = await (0, i.getActionEncryptionKey)();
          if (void 0 === n)
            throw Error(
              "Missing encryption key for Server Action. This is a bug in Next.js",
            );
          let r = new Uint8Array(16);
          crypto.getRandomValues(r);
          let o = (0, i.arrayBufferToString)(r.buffer),
            a = await (0, i.encrypt)(n, r, s.encode(e + t));
          return btoa(o + (0, i.arrayBufferToString)(a));
        }
        async function f(e, t) {
          let n = (0, i.getClientReferenceManifestSingleton)(),
            o = await (0, a.streamToString)(
              (0, r.renderToReadableStream)(t, n.clientModules),
            );
          return await c(e, o);
        }
        async function d(e, t) {
          let n = await l(e, await t),
            a = await (0, o.createFromReadableStream)(
              new ReadableStream({
                start(e) {
                  e.enqueue(new TextEncoder().encode(n)), e.close();
                },
              }),
              { ssrManifest: { moduleLoading: {}, moduleMap: {} } },
            ),
            s = (0, i.getServerModuleMap)();
          return await (0, r.decodeReply)(await (0, o.encodeReply)(a), s);
        }
      },
      1806: (e, t) => {
        "use strict";
        function n(e = new TextDecoder()) {
          return new TransformStream({
            transform: (t, n) => n.enqueue(e.decode(t, { stream: !0 })),
            flush: (t) => t.enqueue(e.decode()),
          });
        }
        function r(e = new TextEncoder()) {
          return new TransformStream({
            transform: (t, n) => n.enqueue(e.encode(t)),
          });
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var n in t)
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          })(t, {
            createDecodeTransformStream: function () {
              return n;
            },
            createEncodeTransformStream: function () {
              return r;
            },
          });
      },
      9671: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var n in t)
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          })(t, {
            cloneTransformStream: function () {
              return u;
            },
            chainStreams: function () {
              return l;
            },
            streamFromString: function () {
              return c;
            },
            streamToString: function () {
              return f;
            },
            createBufferedTransformStream: function () {
              return d;
            },
            renderToInitialFizzStream: function () {
              return m;
            },
            createRootLayoutValidatorStream: function () {
              return y;
            },
            continueFizzStream: function () {
              return v;
            },
            continuePostponedFizzStream: function () {
              return w;
            },
          });
        let r = n(7579),
          o = n(4807),
          a = n(1806),
          i = n(8409),
          s = n(4809);
        function u(e) {
          let t = e.readable.getReader();
          return new TransformStream({
            async start(e) {
              for (;;) {
                let { done: n, value: r } = await t.read();
                if (n) break;
                e.enqueue(r);
              }
            },
            transform() {},
          });
        }
        function l(...e) {
          let { readable: t, writable: n } = new TransformStream(),
            r = Promise.resolve();
          for (let t = 0; t < e.length; ++t)
            r = r.then(() =>
              e[t].pipeTo(n, { preventClose: t + 1 < e.length }),
            );
          return r.catch(() => {}), t;
        }
        function c(e) {
          let t = new TextEncoder();
          return new ReadableStream({
            start(n) {
              n.enqueue(t.encode(e)), n.close();
            },
          });
        }
        async function f(e) {
          let t = "";
          return (
            await e.pipeThrough((0, a.createDecodeTransformStream)()).pipeTo(
              new WritableStream({
                write(e) {
                  t += e;
                },
              }),
            ),
            t
          );
        }
        function d() {
          let e,
            t = new Uint8Array(),
            n = (n) => {
              if (e) return;
              let r = new i.DetachedPromise();
              (e = r),
                (0, s.scheduleImmediate)(() => {
                  try {
                    n.enqueue(t), (t = new Uint8Array());
                  } catch {
                  } finally {
                    (e = void 0), r.resolve();
                  }
                });
            };
          return new TransformStream({
            transform(e, r) {
              let o = new Uint8Array(t.length + e.byteLength);
              o.set(t), o.set(e, t.length), (t = o), n(r);
            },
            flush() {
              if (e) return e.promise;
            },
          });
        }
        function p(e) {
          let t = new TextEncoder();
          return new TransformStream({
            transform: async (n, r) => {
              let o = await e();
              o && r.enqueue(t.encode(o)), r.enqueue(n);
            },
          });
        }
        function m({ ReactDOMServer: e, element: t, streamOptions: n }) {
          return (0, r.getTracer)().trace(
            o.AppRenderSpan.renderToReadableStream,
            async () => e.renderToReadableStream(t, n),
          );
        }
        function h(e) {
          let t = !1,
            n = null,
            r = (t) => {
              let r = e.getReader(),
                o = new i.DetachedPromise();
              (n = o),
                (0, s.scheduleImmediate)(async () => {
                  try {
                    for (;;) {
                      let { done: e, value: n } = await r.read();
                      if (e) return;
                      t.enqueue(n);
                    }
                  } catch (e) {
                    t.error(e);
                  } finally {
                    o.resolve();
                  }
                });
            };
          return new TransformStream({
            transform(e, n) {
              n.enqueue(e), t || ((t = !0), r(n));
            },
            flush() {
              if (n && t) return n.promise;
            },
          });
        }
        function g(e) {
          let t = !1,
            n = new TextEncoder(),
            r = new TextDecoder();
          return new TransformStream({
            transform(o, a) {
              if (t) return a.enqueue(o);
              let i = r.decode(o),
                s = i.indexOf(e);
              if (s > -1) {
                if (((t = !0), i.length === e.length)) return;
                let r = i.slice(0, s);
                if (
                  ((o = n.encode(r)), a.enqueue(o), i.length > e.length + s)
                ) {
                  let t = i.slice(s + e.length);
                  (o = n.encode(t)), a.enqueue(o);
                }
              } else a.enqueue(o);
            },
            flush(t) {
              t.enqueue(n.encode(e));
            },
          });
        }
        function y(e = "", t) {
          let n = !1,
            r = !1,
            o = new TextEncoder(),
            a = new TextDecoder(),
            i = "";
          return new TransformStream({
            async transform(e, t) {
              (!n || !r) &&
                ((i += a.decode(e, { stream: !0 })),
                !n && i.includes("<html") && (n = !0),
                !r && i.includes("<body") && (r = !0)),
                t.enqueue(e);
            },
            flush(s) {
              (!n || !r) &&
                ((i += a.decode()),
                !n && i.includes("<html") && (n = !0),
                !r && i.includes("<body") && (r = !0));
              let u = [];
              n || u.push("html"),
                r || u.push("body"),
                u.length > 0 &&
                  s.enqueue(
                    o.encode(
                      `<script>self.__next_root_layout_missing_tags_error=${JSON.stringify({ missingTags: u, assetPrefix: e ?? "", tree: t() })}</script>`,
                    ),
                  );
            },
          });
        }
        function b(e, t) {
          let n = e;
          for (let e of t) e && (n = n.pipeThrough(e));
          return n;
        }
        async function v(
          e,
          {
            suffix: t,
            inlinedDataStream: n,
            isStaticGeneration: r,
            getServerInsertedHTML: o,
            serverInsertedHTMLToHead: a,
            validateRootLayout: u,
          },
        ) {
          let l = "</body></html>",
            c = t ? t.split(l, 1)[0] : null;
          return (
            r && "allReady" in e && (await e.allReady),
            b(e, [
              d(),
              o && !a ? p(o) : null,
              null != c && c.length > 0
                ? (function (e) {
                    let t,
                      n = !1,
                      r = new TextEncoder(),
                      o = (n) => {
                        let o = new i.DetachedPromise();
                        (t = o),
                          (0, s.scheduleImmediate)(() => {
                            try {
                              n.enqueue(r.encode(e));
                            } catch {
                            } finally {
                              (t = void 0), o.resolve();
                            }
                          });
                      };
                    return new TransformStream({
                      transform(e, t) {
                        t.enqueue(e), n || ((n = !0), o(t));
                      },
                      flush(o) {
                        if (t) return t.promise;
                        n || o.enqueue(r.encode(e));
                      },
                    });
                  })(c)
                : null,
              n ? h(n) : null,
              g(l),
              o && a
                ? (function (e) {
                    let t = !1,
                      n = !1,
                      r = new TextEncoder(),
                      o = new TextDecoder();
                    return new TransformStream({
                      async transform(a, i) {
                        if (n) {
                          i.enqueue(a);
                          return;
                        }
                        let u = await e();
                        if (t) i.enqueue(r.encode(u)), i.enqueue(a), (n = !0);
                        else {
                          let e = o.decode(a),
                            s = e.indexOf("</head>");
                          if (-1 !== s) {
                            let o = e.slice(0, s) + u + e.slice(s);
                            i.enqueue(r.encode(o)), (n = !0), (t = !0);
                          }
                        }
                        t
                          ? (0, s.scheduleImmediate)(() => {
                              n = !1;
                            })
                          : i.enqueue(a);
                      },
                      async flush(t) {
                        let n = await e();
                        n && t.enqueue(r.encode(n));
                      },
                    });
                  })(o)
                : null,
              u ? y(u.assetPrefix, u.getTree) : null,
            ])
          );
        }
        async function w(
          e,
          {
            inlinedDataStream: t,
            isStaticGeneration: n,
            getServerInsertedHTML: r,
            serverInsertedHTMLToHead: o,
          },
        ) {
          return (
            n && "allReady" in e && (await e.allReady),
            b(e, [
              d(),
              r && !o ? p(r) : null,
              t ? h(t) : null,
              g("</body></html>"),
            ])
          );
        }
      },
      9224: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => s, metadata: () => i });
        var r = n(657),
          o = n(7337),
          a = n.n(o);
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
        function s({ children: e }) {
          return r.jsx("html", {
            lang: "en",
            children: (0, r.jsxs)("body", {
              className: a().className,
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
      2641: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => a });
        var r = n(657),
          o = n(878);
        async function a({ searchParams: e }) {
          return r.jsx("div", {
            className: "flex items-center justify-center",
            children: (0, r.jsxs)("div", {
              className: "max-w-sm mx-auto mt-8 p-4 bg-white rounded shadow-md",
              children: [
                r.jsx("h2", {
                  className: "text-2xl font-bold mb-4",
                  children: "Sign Up",
                }),
                (0, r.jsxs)("form", {
                  className: "grid grid-cols-1 gap-4",
                  action: Object(
                    (function () {
                      var e = Error(
                        "Cannot find module '@/src/actions/auth/signup/actions'",
                      );
                      throw ((e.code = "MODULE_NOT_FOUND"), e);
                    })(),
                  ),
                  children: [
                    (0, r.jsxs)("label", {
                      className: "block",
                      children: [
                        "Email:",
                        r.jsx("input", {
                          type: "email",
                          className:
                            "mt-1 p-2 w-full rounded border-2 border-gray-200",
                          name: "email",
                          required: !0,
                        }),
                      ],
                    }),
                    (0, r.jsxs)("label", {
                      className: "block",
                      children: [
                        "Password:",
                        r.jsx("input", {
                          type: "password",
                          className:
                            "mt-1 p-2 w-full rounded border-2 border-gray-200",
                          name: "password",
                          required: !0,
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      className:
                        "bg-green-500 text-white p-2 rounded hover:bg-green-600 cursor-pointer",
                      children: "Sign up",
                    }),
                    r.jsx(
                      Object(
                        (function () {
                          var e = Error(
                            "Cannot find module '@components/button/g-signin'",
                          );
                          throw ((e.code = "MODULE_NOT_FOUND"), e);
                        })(),
                      ),
                      { isSignUp: !0 },
                    ),
                    r.jsx(
                      Object(
                        (function () {
                          var e = Error(
                            "Cannot find module '@/src/components/button/x-signin'",
                          );
                          throw ((e.code = "MODULE_NOT_FOUND"), e);
                        })(),
                      ),
                      { isSignUp: !0 },
                    ),
                    r.jsx("p", {
                      className: "text-red-500 text-center font-bold",
                      children: e?.error,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        n(1389),
          (function () {
            var e = Error(
              "Cannot find module '@/src/actions/auth/signup/actions'",
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })(),
          (function () {
            var e = Error(
              "Cannot find module '@/src/components/button/x-signin'",
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })(),
          (function () {
            var e = Error("Cannot find module '@components/button/g-signin'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })(),
          (0, n(656).h)([a]),
          (0, o.U)("8570b6a74db85f226bdc9eabf6e23a2643d478b7", a);
      },
      642: () => {},
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var n = (e) => t((t.s = e)),
    r = t.X(0, [215, 404], () => n(5660));
  module.exports = r;
})();
