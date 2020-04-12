! function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(i, o, function (e) {
                return t[e]
            }.bind(null, o));
        return i
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "<?php bloginfo('template_url'); ?>", n(n.s = 37)
}([function (t, e, n) {
    "use strict";
    (function (e) {
        var i = n(8),
            o = n(9),
            r = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
            a = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");

        function l(t) {
            return (t || "").toString().replace(a, "")
        }
        var c = [
                ["#", "hash"],
                ["?", "query"],
                function (t) {
                    return t.replace("\\", "/")
                },
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d+)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            u = {
                hash: 1,
                query: 1
            };

        function f(t) {
            var n, i = ("undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}).location || {},
                o = {},
                s = typeof (t = t || i);
            if ("blob:" === t.protocol) o = new d(unescape(t.pathname), {});
            else if ("string" === s)
                for (n in o = new d(t, {}), u) delete o[n];
            else if ("object" === s) {
                for (n in t) n in u || (o[n] = t[n]);
                void 0 === o.slashes && (o.slashes = r.test(t.href))
            }
            return o
        }

        function h(t) {
            t = l(t);
            var e = s.exec(t);
            return {
                protocol: e[1] ? e[1].toLowerCase() : "",
                slashes: !!e[2],
                rest: e[3]
            }
        }

        function d(t, e, n) {
            if (t = l(t), !(this instanceof d)) return new d(t, e, n);
            var r, s, a, u, p, m, g = c.slice(),
                v = typeof e,
                _ = this,
                b = 0;
            for ("object" !== v && "string" !== v && (n = e, e = null), n && "function" != typeof n && (n = o.parse), e = f(e), r = !(s = h(t || "")).protocol && !s.slashes, _.slashes = s.slashes || r && e.slashes, _.protocol = s.protocol || e.protocol || "", t = s.rest, s.slashes || (g[3] = [/(.*)/, "pathname"]); b < g.length; b++) "function" != typeof (u = g[b]) ? (a = u[0], m = u[1], a != a ? _[m] = t : "string" == typeof a ? ~(p = t.indexOf(a)) && ("number" == typeof u[2] ? (_[m] = t.slice(0, p), t = t.slice(p + u[2])) : (_[m] = t.slice(p), t = t.slice(0, p))) : (p = a.exec(t)) && (_[m] = p[1], t = t.slice(0, p.index)), _[m] = _[m] || r && u[3] && e[m] || "", u[4] && (_[m] = _[m].toLowerCase())) : t = u(t);
            n && (_.query = n(_.query)), r && e.slashes && "/" !== _.pathname.charAt(0) && ("" !== _.pathname || "" !== e.pathname) && (_.pathname = function (t, e) {
                if ("" === t) return e;
                for (var n = (e || "/").split("/").slice(0, -1).concat(t.split("/")), i = n.length, o = n[i - 1], r = !1, s = 0; i--;) "." === n[i] ? n.splice(i, 1) : ".." === n[i] ? (n.splice(i, 1), s++) : s && (0 === i && (r = !0), n.splice(i, 1), s--);
                return r && n.unshift(""), "." !== o && ".." !== o || n.push(""), n.join("/")
            }(_.pathname, e.pathname)), i(_.port, _.protocol) || (_.host = _.hostname, _.port = ""), _.username = _.password = "", _.auth && (u = _.auth.split(":"), _.username = u[0] || "", _.password = u[1] || ""), _.origin = _.protocol && _.host && "file:" !== _.protocol ? _.protocol + "//" + _.host : "null", _.href = _.toString()
        }
        d.prototype = {
            set: function (t, e, n) {
                var r = this;
                switch (t) {
                    case "query":
                        "string" == typeof e && e.length && (e = (n || o.parse)(e)), r[t] = e;
                        break;
                    case "port":
                        r[t] = e, i(e, r.protocol) ? e && (r.host = r.hostname + ":" + e) : (r.host = r.hostname, r[t] = "");
                        break;
                    case "hostname":
                        r[t] = e, r.port && (e += ":" + r.port), r.host = e;
                        break;
                    case "host":
                        r[t] = e, /:\d+$/.test(e) ? (e = e.split(":"), r.port = e.pop(), r.hostname = e.join(":")) : (r.hostname = e, r.port = "");
                        break;
                    case "protocol":
                        r.protocol = e.toLowerCase(), r.slashes = !n;
                        break;
                    case "pathname":
                    case "hash":
                        if (e) {
                            var s = "pathname" === t ? "/" : "#";
                            r[t] = e.charAt(0) !== s ? s + e : e
                        } else r[t] = e;
                        break;
                    default:
                        r[t] = e
                }
                for (var a = 0; a < c.length; a++) {
                    var l = c[a];
                    l[4] && (r[l[1]] = r[l[1]].toLowerCase())
                }
                return r.origin = r.protocol && r.host && "file:" !== r.protocol ? r.protocol + "//" + r.host : "null", r.href = r.toString(), r
            },
            toString: function (t) {
                t && "function" == typeof t || (t = o.stringify);
                var e, n = this,
                    i = n.protocol;
                i && ":" !== i.charAt(i.length - 1) && (i += ":");
                var r = i + (n.slashes ? "//" : "");
                return n.username && (r += n.username, n.password && (r += ":" + n.password), r += "@"), r += n.host + n.pathname, (e = "object" == typeof n.query ? t(n.query) : n.query) && (r += "?" !== e.charAt(0) ? "?" + e : e), n.hash && (r += n.hash), r
            }
        }, d.extractProtocol = h, d.location = f, d.trimLeft = l, d.qs = o, t.exports = d
    }).call(this, n(2))
}, function (t, e) {
    t.exports = jQuery
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e, n) {
    var i;
    ! function (o, r) {
        function s(t, e) {
            var n, i = "db_" + t,
                o = !1,
                r = null;
            try {
                n = e === sessionStorage ? sessionStorage : localStorage
            } catch (t) {
                n = e
            }

            function s(t) {
                ! function (t, e) {
                    try {
                        n.setItem(t, e)
                    } catch (t) {
                        return !1
                    }
                }(i, t)
            }

            function a(t) {
                return !!r.tables[t]
            }

            function l(t) {
                a(t) || v("The table '" + t + "' does not exist")
            }

            function c(t, e, n) {
                if (r.tables[t].fields = r.tables[t].fields.concat(e), void 0 !== n)
                    for (var i in r.data[t])
                        if (r.data[t].hasOwnProperty(i))
                            for (var o in e) r.data[t][i][e[o]] = "object" == typeof n ? n[e[o]] : n
            }

            function u(t, e) {
                return e.ID = r.tables[t].auto_increment, r.data[t][r.tables[t].auto_increment] = e, r.tables[t].auto_increment++, e.ID
            }

            function f(t, e) {
                return function (n, i) {
                    var o = "string" == typeof n[t] ? n[t].toLowerCase() : n[t],
                        r = "string" == typeof i[t] ? i[t].toLowerCase() : i[t];
                    return "DESC" === e ? o === r ? 0 : o < r ? 1 : -1 : o === r ? 0 : o > r ? 1 : -1
                }
            }

            function h(t, e) {
                var n = [],
                    i = !1,
                    o = null;
                for (var s in r.data[t])
                    if (r.data[t].hasOwnProperty(s)) {
                        for (var a in o = r.data[t][s], i = !0, e)
                            if (e.hasOwnProperty(a))
                                if ("string" == typeof e[a]) {
                                    if (null === o[a] || o[a].toString().toLowerCase() !== e[a].toString().toLowerCase()) {
                                        i = !1;
                                        break
                                    }
                                } else if (o[a] !== e[a]) {
                            i = !1;
                            break
                        }
                        i && n.push(s)
                    } return n
            }

            function d(t, e) {
                var n = [];
                for (var i in r.data[t]) r.data[t].hasOwnProperty(i) && !0 === e(_(r.data[t][i])) && n.push(i);
                return n
            }

            function p(t) {
                var e = [];
                for (var n in r.data[t]) r.data[t].hasOwnProperty(n) && e.push(n);
                return e
            }

            function m(t, e, n) {
                for (var i = "", o = 0, s = 0; s < e.length; s++) {
                    i = e[s];
                    var a = n(_(r.data[t][i]));
                    if (a) {
                        delete a.ID;
                        var l = r.data[t][i];
                        for (var c in a) a.hasOwnProperty(c) && (l[c] = a[c]);
                        r.data[t][i] = y(t, l), o++
                    }
                }
                return o
            }

            function g() {
                try {
                    return n.setItem(i, JSON.stringify(r)), !0
                } catch (t) {
                    return !1
                }
            }

            function v(t) {
                throw new Error(t)
            }

            function _(t) {
                var e = {};
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }

            function b(t) {
                return !t.toString().match(/[^a-z_0-9]/gi)
            }

            function y(t, e) {
                var n = "",
                    i = {};
                for (n in e) {
                    -1 === r.tables[t].fields.indexOf(n) && v("Invalid query parameter: " + n), i[n] = e[n]
                }
                return i
            }

            function w(t, e) {
                for (var n = "", i = {}, o = 0; o < r.tables[t].fields.length; o++) i[n = r.tables[t].fields[o]] = null === e[n] || void 0 === e[n] ? null : e[n];
                return i
            }
            return (r = n[i]) && (r = JSON.parse(r)) && r.tables && r.data || (b(t) ? (r = {
                tables: {},
                data: {}
            }, g(), o = !0) : v("The name '" + t + "' contains invalid characters")), {
                commit: function () {
                    return g()
                },
                isNew: function () {
                    return o
                },
                drop: function () {
                    n.hasOwnProperty(i) && delete n[i], r = null
                },
                getItem: function (t) {
                    return function (t) {
                        try {
                            return n.storage[t]
                        } catch (t) {
                            return null
                        }
                    }(t)
                },
                replace: function (t) {
                    s(t)
                },
                serialize: function () {
                    return JSON.stringify(r)
                },
                tableExists: function (t) {
                    return a(t)
                },
                tableFields: function (t) {
                    return function (t) {
                        return r.tables[t].fields
                    }(t)
                },
                tableCount: function () {
                    return function () {
                        var t = 0;
                        for (var e in r.tables) r.tables.hasOwnProperty(e) && t++;
                        return t
                    }()
                },
                columnExists: function (t, e) {
                    return function (t, e) {
                        var n = !1,
                            i = r.tables[t].fields;
                        for (var o in i)
                            if (i[o] === e) {
                                n = !0;
                                break
                            } return n
                    }(t, e)
                },
                createTable: function (t, e) {
                    var n = !1;
                    if (b(t))
                        if (this.tableExists(t)) v("The table name '" + t + "' already exists.");
                        else {
                            var i, o = !0;
                            for (i = 0; i < e.length; i++)
                                if (!b(e[i])) {
                                    o = !1;
                                    break
                                } if (o) {
                                var s = {};
                                for (i = 0; i < e.length; i++) s[e[i]] = !0;
                                for (var a in delete s.ID, e = ["ID"], s) s.hasOwnProperty(a) && e.push(a);
                                ! function (t, e) {
                                    r.tables[t] = {
                                        fields: e,
                                        auto_increment: 1
                                    }, r.data[t] = {}
                                }(t, e), n = !0
                            } else v("One or more field names in the table definition contains invalid characters")
                        }
                    else v("The database name '" + t + "' contains invalid characters.");
                    return n
                },
                createTableWithData: function (t, e) {
                    ("object" != typeof e || !e.length || e.length < 1) && v("Data supplied isn't in object form. Example: [{k:v,k:v},{k:v,k:v} ..]");
                    var n = Object.keys(e[0]);
                    if (this.createTable(t, n)) {
                        this.commit();
                        for (var i = 0; i < e.length; i++) u(t, e[i]) || v("Failed to insert record: [" + JSON.stringify(e[i]) + "]");
                        this.commit()
                    }
                    return !0
                },
                dropTable: function (t) {
                    l(t),
                        function (t) {
                            delete r.tables[t], delete r.data[t]
                        }(t)
                },
                truncate: function (t) {
                    l(t),
                        function (t) {
                            r.tables[t].auto_increment = 1, r.data[t] = {}
                        }(t)
                },
                alterTable: function (t, e, n) {
                    var i = !1;
                    if (b(t)) {
                        if ("object" == typeof e) {
                            var o, r = !0;
                            for (o = 0; o < e.length; o++)
                                if (!b(e[o])) {
                                    r = !1;
                                    break
                                } if (r) {
                                var s = {};
                                for (o = 0; o < e.length; o++) s[e[o]] = !0;
                                for (var a in delete s.ID, e = [], s) s.hasOwnProperty(a) && e.push(a);
                                c(t, e, n), i = !0
                            } else v("One or more field names in the table definition contains invalid characters")
                        } else if ("string" == typeof e)
                            if (b(e)) {
                                var l = [];
                                l.push(e), c(t, l, n), i = !0
                            } else v("One or more field names in the table definition contains invalid characters")
                    } else v("The database name '" + t + "' contains invalid characters");
                    return i
                },
                rowCount: function (t) {
                    return l(t),
                        function (t) {
                            var e = 0;
                            for (var n in r.data[t]) r.data[t].hasOwnProperty(n) && e++;
                            return e
                        }(t)
                },
                insert: function (t, e) {
                    return l(t), u(t, w(t, e))
                },
                insertOrUpdate: function (t, e, n) {
                    l(t);
                    var i = [];
                    if (e ? "object" == typeof e ? i = h(t, y(t, e)) : "function" == typeof e && (i = d(t, e)) : i = p(t), 0 === i.length) return u(t, w(t, n));
                    var o = [];
                    return m(t, i, (function (t) {
                        return o.push(t.ID), n
                    })), o
                },
                update: function (t, e, n) {
                    l(t);
                    var i = [];
                    return e ? "object" == typeof e ? i = h(t, y(t, e)) : "function" == typeof e && (i = d(t, e)) : i = p(t), m(t, i, n)
                },
                query: function (t, e, n, i, o, s) {
                    l(t);
                    var a = [];
                    return e ? "object" == typeof e ? a = h(t, y(t, e)) : "function" == typeof e && (a = d(t, e)) : a = p(t),
                        function (t, e, n, i, o, s) {
                            var a, l = null,
                                c = [],
                                u = null;
                            for (a = 0; a < e.length; a++) l = e[a], u = r.data[t][l], c.push(_(u));
                            if (o && o instanceof Array)
                                for (a = 0; a < o.length; a++) c.sort(f(o[a][0], o[a].length > 1 ? o[a][1] : null));
                            if (s && s instanceof Array) {
                                for (var h = 0; h < s.length; h++) {
                                    var d = {},
                                        p = s[h];
                                    for (a = 0; a < c.length; a++) void 0 !== c[a] && (c[a].hasOwnProperty(p) && d.hasOwnProperty(c[a][p]) ? delete c[a] : d[c[a][p]] = 1)
                                }
                                var m = [];
                                for (a = 0; a < c.length; a++) void 0 !== c[a] && m.push(c[a]);
                                c = m
                            }
                            return i = i && "number" == typeof i ? i : null, (n = n && "number" == typeof n ? n : null) && i ? c = c.slice(n, n + i) : n ? c = c.slice(n) : i && (c = c.slice(n, i)), c
                        }(t, a, i, n, o, s)
                },
                queryAll: function (t, e) {
                    return e ? this.query(t, e.hasOwnProperty("query") ? e.query : null, e.hasOwnProperty("limit") ? e.limit : null, e.hasOwnProperty("start") ? e.start : null, e.hasOwnProperty("sort") ? e.sort : null, e.hasOwnProperty("distinct") ? e.distinct : null) : this.query(t)
                },
                deleteRows: function (t, e) {
                    l(t);
                    var n = [];
                    return e ? "object" == typeof e ? n = h(t, y(t, e)) : "function" == typeof e && (n = d(t, e)) : n = p(t),
                        function (t, e) {
                            for (var n = 0; n < e.length; n++) r.data[t].hasOwnProperty(e[n]) && delete r.data[t][e[n]];
                            return e.length
                        }(t, n)
                }
            }
        }
        t.exports ? t.exports = s : void 0 === (i = function () {
            return s
        }.call(e, n, e, t)) || (t.exports = i)
    }("undefined" != typeof window && window)
}, function (t, e, n) {}, function (t, e, n) {
    /*!
     * Bootstrap v4.4.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    ! function (t, e, n) {
        "use strict";

        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function o(t, e, n) {
            return e && i(t.prototype, e), n && i(t, n), t
        }

        function r(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function s(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function a(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(Object(n), !0).forEach((function (e) {
                    r(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function l(t) {
            var n = this,
                i = !1;
            return e(this).one(c.TRANSITION_END, (function () {
                i = !0
            })), setTimeout((function () {
                i || c.triggerTransitionEnd(n)
            }), t), this
        }
        e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
        var c = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            },
            getSelectorFromElement: function (t) {
                var e = t.getAttribute("data-target");
                if (!e || "#" === e) {
                    var n = t.getAttribute("href");
                    e = n && "#" !== n ? n.trim() : ""
                }
                try {
                    return document.querySelector(e) ? e : null
                } catch (t) {
                    return null
                }
            },
            getTransitionDurationFromElement: function (t) {
                if (!t) return 0;
                var n = e(t).css("transition-duration"),
                    i = e(t).css("transition-delay"),
                    o = parseFloat(n),
                    r = parseFloat(i);
                return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
            },
            reflow: function (t) {
                return t.offsetHeight
            },
            triggerTransitionEnd: function (t) {
                e(t).trigger("transitionend")
            },
            supportsTransitionEnd: function () {
                return Boolean("transitionend")
            },
            isElement: function (t) {
                return (t[0] || t).nodeType
            },
            typeCheckConfig: function (t, e, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var o = n[i],
                            r = e[i],
                            s = r && c.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                    } var a
            },
            findShadowRoot: function (t) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof t.getRootNode) {
                    var e = t.getRootNode();
                    return e instanceof ShadowRoot ? e : null
                }
                return t instanceof ShadowRoot ? t : t.parentNode ? c.findShadowRoot(t.parentNode) : null
            },
            jQueryDetection: function () {
                if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var t = e.fn.jquery.split(" ")[0].split(".");
                if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }
        };
        c.jQueryDetection(), e.fn.emulateTransitionEnd = l, e.event.special[c.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function (t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        };
        var u = e.fn.alert,
            f = {
                CLOSE: "close.bs.alert",
                CLOSED: "closed.bs.alert",
                CLICK_DATA_API: "click.bs.alert.data-api"
            },
            h = "alert",
            d = "fade",
            p = "show",
            m = function () {
                function t(t) {
                    this._element = t
                }
                var n = t.prototype;
                return n.close = function (t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                }, n.dispose = function () {
                    e.removeData(this._element, "bs.alert"), this._element = null
                }, n._getRootElement = function (t) {
                    var n = c.getSelectorFromElement(t),
                        i = !1;
                    return n && (i = document.querySelector(n)), i || (i = e(t).closest("." + h)[0]), i
                }, n._triggerCloseEvent = function (t) {
                    var n = e.Event(f.CLOSE);
                    return e(t).trigger(n), n
                }, n._removeElement = function (t) {
                    var n = this;
                    if (e(t).removeClass(p), e(t).hasClass(d)) {
                        var i = c.getTransitionDurationFromElement(t);
                        e(t).one(c.TRANSITION_END, (function (e) {
                            return n._destroyElement(t, e)
                        })).emulateTransitionEnd(i)
                    } else this._destroyElement(t)
                }, n._destroyElement = function (t) {
                    e(t).detach().trigger(f.CLOSED).remove()
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this),
                            o = i.data("bs.alert");
                        o || (o = new t(this), i.data("bs.alert", o)), "close" === n && o[n](this)
                    }))
                }, t._handleDismiss = function (t) {
                    return function (e) {
                        e && e.preventDefault(), t.close(this)
                    }
                }, o(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }]), t
            }();
        e(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', m._handleDismiss(new m)), e.fn.alert = m._jQueryInterface, e.fn.alert.Constructor = m, e.fn.alert.noConflict = function () {
            return e.fn.alert = u, m._jQueryInterface
        };
        var g = e.fn.button,
            v = "active",
            _ = "btn",
            b = "focus",
            y = '[data-toggle^="button"]',
            w = '[data-toggle="buttons"]',
            E = '[data-toggle="button"]',
            C = '[data-toggle="buttons"] .btn',
            T = 'input:not([type="hidden"])',
            S = ".active",
            D = ".btn",
            I = {
                CLICK_DATA_API: "click.bs.button.data-api",
                FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api",
                LOAD_DATA_API: "load.bs.button.data-api"
            },
            A = function () {
                function t(t) {
                    this._element = t
                }
                var n = t.prototype;
                return n.toggle = function () {
                    var t = !0,
                        n = !0,
                        i = e(this._element).closest(w)[0];
                    if (i) {
                        var o = this._element.querySelector(T);
                        if (o) {
                            if ("radio" === o.type)
                                if (o.checked && this._element.classList.contains(v)) t = !1;
                                else {
                                    var r = i.querySelector(S);
                                    r && e(r).removeClass(v)
                                }
                            else "checkbox" === o.type ? "LABEL" === this._element.tagName && o.checked === this._element.classList.contains(v) && (t = !1) : t = !1;
                            t && (o.checked = !this._element.classList.contains(v), e(o).trigger("change")), o.focus(), n = !1
                        }
                    }
                    this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(v)), t && e(this._element).toggleClass(v))
                }, n.dispose = function () {
                    e.removeData(this._element, "bs.button"), this._element = null
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this).data("bs.button");
                        i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]()
                    }))
                }, o(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }]), t
            }();
        e(document).on(I.CLICK_DATA_API, y, (function (t) {
            var n = t.target;
            if (e(n).hasClass(_) || (n = e(n).closest(D)[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) t.preventDefault();
            else {
                var i = n.querySelector(T);
                if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void t.preventDefault();
                A._jQueryInterface.call(e(n), "toggle")
            }
        })).on(I.FOCUS_BLUR_DATA_API, y, (function (t) {
            var n = e(t.target).closest(D)[0];
            e(n).toggleClass(b, /^focus(in)?$/.test(t.type))
        })), e(window).on(I.LOAD_DATA_API, (function () {
            for (var t = [].slice.call(document.querySelectorAll(C)), e = 0, n = t.length; e < n; e++) {
                var i = t[e],
                    o = i.querySelector(T);
                o.checked || o.hasAttribute("checked") ? i.classList.add(v) : i.classList.remove(v)
            }
            for (var r = 0, s = (t = [].slice.call(document.querySelectorAll(E))).length; r < s; r++) {
                var a = t[r];
                "true" === a.getAttribute("aria-pressed") ? a.classList.add(v) : a.classList.remove(v)
            }
        })), e.fn.button = A._jQueryInterface, e.fn.button.Constructor = A, e.fn.button.noConflict = function () {
            return e.fn.button = g, A._jQueryInterface
        };
        var O = "carousel",
            N = ".bs.carousel",
            k = e.fn[O],
            x = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
                touch: !0
            },
            P = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            },
            L = "next",
            j = "prev",
            H = "left",
            R = "right",
            M = {
                SLIDE: "slide.bs.carousel",
                SLID: "slid.bs.carousel",
                KEYDOWN: "keydown.bs.carousel",
                MOUSEENTER: "mouseenter.bs.carousel",
                MOUSELEAVE: "mouseleave.bs.carousel",
                TOUCHSTART: "touchstart.bs.carousel",
                TOUCHMOVE: "touchmove.bs.carousel",
                TOUCHEND: "touchend.bs.carousel",
                POINTERDOWN: "pointerdown.bs.carousel",
                POINTERUP: "pointerup.bs.carousel",
                DRAG_START: "dragstart.bs.carousel",
                LOAD_DATA_API: "load.bs.carousel.data-api",
                CLICK_DATA_API: "click.bs.carousel.data-api"
            },
            F = "carousel",
            q = "active",
            W = "slide",
            U = "carousel-item-right",
            B = "carousel-item-left",
            K = "carousel-item-next",
            Q = "carousel-item-prev",
            V = "pointer-event",
            z = ".active",
            Y = ".active.carousel-item",
            $ = ".carousel-item",
            X = ".carousel-item img",
            J = ".carousel-item-next, .carousel-item-prev",
            G = ".carousel-indicators",
            Z = "[data-slide], [data-slide-to]",
            tt = '[data-ride="carousel"]',
            et = {
                TOUCH: "touch",
                PEN: "pen"
            },
            nt = function () {
                function t(t, e) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(G), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                }
                var n = t.prototype;
                return n.next = function () {
                    this._isSliding || this._slide(L)
                }, n.nextWhenVisible = function () {
                    !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                }, n.prev = function () {
                    this._isSliding || this._slide(j)
                }, n.pause = function (t) {
                    t || (this._isPaused = !0), this._element.querySelector(J) && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, n.cycle = function (t) {
                    t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, n.to = function (t) {
                    var n = this;
                    this._activeElement = this._element.querySelector(Y);
                    var i = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding) e(this._element).one(M.SLID, (function () {
                            return n.to(t)
                        }));
                        else {
                            if (i === t) return this.pause(), void this.cycle();
                            var o = t > i ? L : j;
                            this._slide(o, this._items[t])
                        }
                }, n.dispose = function () {
                    e(this._element).off(N), e.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, n._getConfig = function (t) {
                    return t = a({}, x, {}, t), c.typeCheckConfig(O, t, P), t
                }, n._handleSwipe = function () {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
                    }
                }, n._addEventListeners = function () {
                    var t = this;
                    this._config.keyboard && e(this._element).on(M.KEYDOWN, (function (e) {
                        return t._keydown(e)
                    })), "hover" === this._config.pause && e(this._element).on(M.MOUSEENTER, (function (e) {
                        return t.pause(e)
                    })).on(M.MOUSELEAVE, (function (e) {
                        return t.cycle(e)
                    })), this._config.touch && this._addTouchEventListeners()
                }, n._addTouchEventListeners = function () {
                    var t = this;
                    if (this._touchSupported) {
                        var n = function (e) {
                                t._pointerEvent && et[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                            },
                            i = function (e) {
                                t._pointerEvent && et[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function (e) {
                                    return t.cycle(e)
                                }), 500 + t._config.interval))
                            };
                        e(this._element.querySelectorAll(X)).on(M.DRAG_START, (function (t) {
                            return t.preventDefault()
                        })), this._pointerEvent ? (e(this._element).on(M.POINTERDOWN, (function (t) {
                            return n(t)
                        })), e(this._element).on(M.POINTERUP, (function (t) {
                            return i(t)
                        })), this._element.classList.add(V)) : (e(this._element).on(M.TOUCHSTART, (function (t) {
                            return n(t)
                        })), e(this._element).on(M.TOUCHMOVE, (function (e) {
                            return function (e) {
                                e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX
                            }(e)
                        })), e(this._element).on(M.TOUCHEND, (function (t) {
                            return i(t)
                        })))
                    }
                }, n._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                        case 37:
                            t.preventDefault(), this.prev();
                            break;
                        case 39:
                            t.preventDefault(), this.next()
                    }
                }, n._getItemIndex = function (t) {
                    return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll($)) : [], this._items.indexOf(t)
                }, n._getItemByDirection = function (t, e) {
                    var n = t === L,
                        i = t === j,
                        o = this._getItemIndex(e),
                        r = this._items.length - 1;
                    if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                    var s = (o + (t === j ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                }, n._triggerSlideEvent = function (t, n) {
                    var i = this._getItemIndex(t),
                        o = this._getItemIndex(this._element.querySelector(Y)),
                        r = e.Event(M.SLIDE, {
                            relatedTarget: t,
                            direction: n,
                            from: o,
                            to: i
                        });
                    return e(this._element).trigger(r), r
                }, n._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        var n = [].slice.call(this._indicatorsElement.querySelectorAll(z));
                        e(n).removeClass(q);
                        var i = this._indicatorsElement.children[this._getItemIndex(t)];
                        i && e(i).addClass(q)
                    }
                }, n._slide = function (t, n) {
                    var i, o, r, s = this,
                        a = this._element.querySelector(Y),
                        l = this._getItemIndex(a),
                        u = n || a && this._getItemByDirection(t, a),
                        f = this._getItemIndex(u),
                        h = Boolean(this._interval);
                    if (t === L ? (i = B, o = K, r = H) : (i = U, o = Q, r = R), u && e(u).hasClass(q)) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && a && u) {
                        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(u);
                        var d = e.Event(M.SLID, {
                            relatedTarget: u,
                            direction: r,
                            from: l,
                            to: f
                        });
                        if (e(this._element).hasClass(W)) {
                            e(u).addClass(o), c.reflow(u), e(a).addClass(i), e(u).addClass(i);
                            var p = parseInt(u.getAttribute("data-interval"), 10);
                            p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                            var m = c.getTransitionDurationFromElement(a);
                            e(a).one(c.TRANSITION_END, (function () {
                                e(u).removeClass(i + " " + o).addClass(q), e(a).removeClass(q + " " + o + " " + i), s._isSliding = !1, setTimeout((function () {
                                    return e(s._element).trigger(d)
                                }), 0)
                            })).emulateTransitionEnd(m)
                        } else e(a).removeClass(q), e(u).addClass(q), this._isSliding = !1, e(this._element).trigger(d);
                        h && this.cycle()
                    }
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this).data("bs.carousel"),
                            o = a({}, x, {}, e(this).data());
                        "object" == typeof n && (o = a({}, o, {}, n));
                        var r = "string" == typeof n ? n : o.slide;
                        if (i || (i = new t(this, o), e(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);
                        else if ("string" == typeof r) {
                            if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
                            i[r]()
                        } else o.interval && o.ride && (i.pause(), i.cycle())
                    }))
                }, t._dataApiClickHandler = function (n) {
                    var i = c.getSelectorFromElement(this);
                    if (i) {
                        var o = e(i)[0];
                        if (o && e(o).hasClass(F)) {
                            var r = a({}, e(o).data(), {}, e(this).data()),
                                s = this.getAttribute("data-slide-to");
                            s && (r.interval = !1), t._jQueryInterface.call(e(o), r), s && e(o).data("bs.carousel").to(s), n.preventDefault()
                        }
                    }
                }, o(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return x
                    }
                }]), t
            }();
        e(document).on(M.CLICK_DATA_API, Z, nt._dataApiClickHandler), e(window).on(M.LOAD_DATA_API, (function () {
            for (var t = [].slice.call(document.querySelectorAll(tt)), n = 0, i = t.length; n < i; n++) {
                var o = e(t[n]);
                nt._jQueryInterface.call(o, o.data())
            }
        })), e.fn[O] = nt._jQueryInterface, e.fn[O].Constructor = nt, e.fn[O].noConflict = function () {
            return e.fn[O] = k, nt._jQueryInterface
        };
        var it = "collapse",
            ot = e.fn[it],
            rt = {
                toggle: !0,
                parent: ""
            },
            st = {
                toggle: "boolean",
                parent: "(string|element)"
            },
            at = {
                SHOW: "show.bs.collapse",
                SHOWN: "shown.bs.collapse",
                HIDE: "hide.bs.collapse",
                HIDDEN: "hidden.bs.collapse",
                CLICK_DATA_API: "click.bs.collapse.data-api"
            },
            lt = "show",
            ct = "collapse",
            ut = "collapsing",
            ft = "collapsed",
            ht = "width",
            dt = "height",
            pt = ".show, .collapsing",
            mt = '[data-toggle="collapse"]',
            gt = function () {
                function t(t, e) {
                    this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                    for (var n = [].slice.call(document.querySelectorAll(mt)), i = 0, o = n.length; i < o; i++) {
                        var r = n[i],
                            s = c.getSelectorFromElement(r),
                            a = [].slice.call(document.querySelectorAll(s)).filter((function (e) {
                                return e === t
                            }));
                        null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(r))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var n = t.prototype;
                return n.toggle = function () {
                    e(this._element).hasClass(lt) ? this.hide() : this.show()
                }, n.show = function () {
                    var n, i, o = this;
                    if (!(this._isTransitioning || e(this._element).hasClass(lt) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(pt)).filter((function (t) {
                            return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains(ct)
                        }))).length && (n = null), n && (i = e(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                        var r = e.Event(at.SHOW);
                        if (e(this._element).trigger(r), !r.isDefaultPrevented()) {
                            n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"), i || e(n).data("bs.collapse", null));
                            var s = this._getDimension();
                            e(this._element).removeClass(ct).addClass(ut), this._element.style[s] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(ft).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                                l = c.getTransitionDurationFromElement(this._element);
                            e(this._element).one(c.TRANSITION_END, (function () {
                                e(o._element).removeClass(ut).addClass(ct).addClass(lt), o._element.style[s] = "", o.setTransitioning(!1), e(o._element).trigger(at.SHOWN)
                            })).emulateTransitionEnd(l), this._element.style[s] = this._element[a] + "px"
                        }
                    }
                }, n.hide = function () {
                    var t = this;
                    if (!this._isTransitioning && e(this._element).hasClass(lt)) {
                        var n = e.Event(at.HIDE);
                        if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var i = this._getDimension();
                            this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", c.reflow(this._element), e(this._element).addClass(ut).removeClass(ct).removeClass(lt);
                            var o = this._triggerArray.length;
                            if (o > 0)
                                for (var r = 0; r < o; r++) {
                                    var s = this._triggerArray[r],
                                        a = c.getSelectorFromElement(s);
                                    null !== a && (e([].slice.call(document.querySelectorAll(a))).hasClass(lt) || e(s).addClass(ft).attr("aria-expanded", !1))
                                }
                            this.setTransitioning(!0), this._element.style[i] = "";
                            var l = c.getTransitionDurationFromElement(this._element);
                            e(this._element).one(c.TRANSITION_END, (function () {
                                t.setTransitioning(!1), e(t._element).removeClass(ut).addClass(ct).trigger(at.HIDDEN)
                            })).emulateTransitionEnd(l)
                        }
                    }
                }, n.setTransitioning = function (t) {
                    this._isTransitioning = t
                }, n.dispose = function () {
                    e.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, n._getConfig = function (t) {
                    return (t = a({}, rt, {}, t)).toggle = Boolean(t.toggle), c.typeCheckConfig(it, t, st), t
                }, n._getDimension = function () {
                    return e(this._element).hasClass(ht) ? ht : dt
                }, n._getParent = function () {
                    var n, i = this;
                    c.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                    var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        r = [].slice.call(n.querySelectorAll(o));
                    return e(r).each((function (e, n) {
                        i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
                    })), n
                }, n._addAriaAndCollapsedClass = function (t, n) {
                    var i = e(t).hasClass(lt);
                    n.length && e(n).toggleClass(ft, !i).attr("aria-expanded", i)
                }, t._getTargetFromElement = function (t) {
                    var e = c.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this),
                            o = i.data("bs.collapse"),
                            r = a({}, rt, {}, i.data(), {}, "object" == typeof n && n ? n : {});
                        if (!o && r.toggle && /show|hide/.test(n) && (r.toggle = !1), o || (o = new t(this, r), i.data("bs.collapse", o)), "string" == typeof n) {
                            if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                            o[n]()
                        }
                    }))
                }, o(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return rt
                    }
                }]), t
            }();
        e(document).on(at.CLICK_DATA_API, mt, (function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = e(this),
                i = c.getSelectorFromElement(this),
                o = [].slice.call(document.querySelectorAll(i));
            e(o).each((function () {
                var t = e(this),
                    i = t.data("bs.collapse") ? "toggle" : n.data();
                gt._jQueryInterface.call(t, i)
            }))
        })), e.fn[it] = gt._jQueryInterface, e.fn[it].Constructor = gt, e.fn[it].noConflict = function () {
            return e.fn[it] = ot, gt._jQueryInterface
        };
        var vt = "dropdown",
            _t = e.fn[vt],
            bt = new RegExp("38|40|27"),
            yt = {
                HIDE: "hide.bs.dropdown",
                HIDDEN: "hidden.bs.dropdown",
                SHOW: "show.bs.dropdown",
                SHOWN: "shown.bs.dropdown",
                CLICK: "click.bs.dropdown",
                CLICK_DATA_API: "click.bs.dropdown.data-api",
                KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
            },
            wt = "disabled",
            Et = "show",
            Ct = "dropup",
            Tt = "dropright",
            St = "dropleft",
            Dt = "dropdown-menu-right",
            It = "position-static",
            At = '[data-toggle="dropdown"]',
            Ot = ".dropdown form",
            Nt = ".dropdown-menu",
            kt = ".navbar-nav",
            xt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            Pt = "top-start",
            Lt = "top-end",
            jt = "bottom-start",
            Ht = "bottom-end",
            Rt = "right-start",
            Mt = "left-start",
            Ft = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic",
                popperConfig: null
            },
            qt = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string",
                popperConfig: "(null|object)"
            },
            Wt = function () {
                function t(t, e) {
                    this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }
                var i = t.prototype;
                return i.toggle = function () {
                    if (!this._element.disabled && !e(this._element).hasClass(wt)) {
                        var n = e(this._menu).hasClass(Et);
                        t._clearMenus(), n || this.show(!0)
                    }
                }, i.show = function (i) {
                    if (void 0 === i && (i = !1), !(this._element.disabled || e(this._element).hasClass(wt) || e(this._menu).hasClass(Et))) {
                        var o = {
                                relatedTarget: this._element
                            },
                            r = e.Event(yt.SHOW, o),
                            s = t._getParentFromElement(this._element);
                        if (e(s).trigger(r), !r.isDefaultPrevented()) {
                            if (!this._inNavbar && i) {
                                if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var a = this._element;
                                "parent" === this._config.reference ? a = s : c.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(s).addClass(It), this._popper = new n(a, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === e(s).closest(kt).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(Et), e(s).toggleClass(Et).trigger(e.Event(yt.SHOWN, o))
                        }
                    }
                }, i.hide = function () {
                    if (!this._element.disabled && !e(this._element).hasClass(wt) && e(this._menu).hasClass(Et)) {
                        var n = {
                                relatedTarget: this._element
                            },
                            i = e.Event(yt.HIDE, n),
                            o = t._getParentFromElement(this._element);
                        e(o).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), e(this._menu).toggleClass(Et), e(o).toggleClass(Et).trigger(e.Event(yt.HIDDEN, n)))
                    }
                }, i.dispose = function () {
                    e.removeData(this._element, "bs.dropdown"), e(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                }, i.update = function () {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, i._addEventListeners = function () {
                    var t = this;
                    e(this._element).on(yt.CLICK, (function (e) {
                        e.preventDefault(), e.stopPropagation(), t.toggle()
                    }))
                }, i._getConfig = function (t) {
                    return t = a({}, this.constructor.Default, {}, e(this._element).data(), {}, t), c.typeCheckConfig(vt, t, this.constructor.DefaultType), t
                }, i._getMenuElement = function () {
                    if (!this._menu) {
                        var e = t._getParentFromElement(this._element);
                        e && (this._menu = e.querySelector(Nt))
                    }
                    return this._menu
                }, i._getPlacement = function () {
                    var t = e(this._element.parentNode),
                        n = jt;
                    return t.hasClass(Ct) ? (n = Pt, e(this._menu).hasClass(Dt) && (n = Lt)) : t.hasClass(Tt) ? n = Rt : t.hasClass(St) ? n = Mt : e(this._menu).hasClass(Dt) && (n = Ht), n
                }, i._detectNavbar = function () {
                    return e(this._element).closest(".navbar").length > 0
                }, i._getOffset = function () {
                    var t = this,
                        e = {};
                    return "function" == typeof this._config.offset ? e.fn = function (e) {
                        return e.offsets = a({}, e.offsets, {}, t._config.offset(e.offsets, t._element) || {}), e
                    } : e.offset = this._config.offset, e
                }, i._getPopperConfig = function () {
                    var t = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (t.modifiers.applyStyle = {
                        enabled: !1
                    }), a({}, t, {}, this._config.popperConfig)
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this).data("bs.dropdown");
                        if (i || (i = new t(this, "object" == typeof n ? n : null), e(this).data("bs.dropdown", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, t._clearMenus = function (n) {
                    if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                        for (var i = [].slice.call(document.querySelectorAll(At)), o = 0, r = i.length; o < r; o++) {
                            var s = t._getParentFromElement(i[o]),
                                a = e(i[o]).data("bs.dropdown"),
                                l = {
                                    relatedTarget: i[o]
                                };
                            if (n && "click" === n.type && (l.clickEvent = n), a) {
                                var c = a._menu;
                                if (e(s).hasClass(Et) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && e.contains(s, n.target))) {
                                    var u = e.Event(yt.HIDE, l);
                                    e(s).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), i[o].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), e(c).removeClass(Et), e(s).removeClass(Et).trigger(e.Event(yt.HIDDEN, l)))
                                }
                            }
                        }
                }, t._getParentFromElement = function (t) {
                    var e, n = c.getSelectorFromElement(t);
                    return n && (e = document.querySelector(n)), e || t.parentNode
                }, t._dataApiKeydownHandler = function (n) {
                    if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || e(n.target).closest(Nt).length)) : bt.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !e(this).hasClass(wt))) {
                        var i = t._getParentFromElement(this),
                            o = e(i).hasClass(Et);
                        if (o || 27 !== n.which)
                            if (o && (!o || 27 !== n.which && 32 !== n.which)) {
                                var r = [].slice.call(i.querySelectorAll(xt)).filter((function (t) {
                                    return e(t).is(":visible")
                                }));
                                if (0 !== r.length) {
                                    var s = r.indexOf(n.target);
                                    38 === n.which && s > 0 && s--, 40 === n.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
                                }
                            } else {
                                if (27 === n.which) {
                                    var a = i.querySelector(At);
                                    e(a).trigger("focus")
                                }
                                e(this).trigger("click")
                            }
                    }
                }, o(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Ft
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return qt
                    }
                }]), t
            }();
        e(document).on(yt.KEYDOWN_DATA_API, At, Wt._dataApiKeydownHandler).on(yt.KEYDOWN_DATA_API, Nt, Wt._dataApiKeydownHandler).on(yt.CLICK_DATA_API + " " + yt.KEYUP_DATA_API, Wt._clearMenus).on(yt.CLICK_DATA_API, At, (function (t) {
            t.preventDefault(), t.stopPropagation(), Wt._jQueryInterface.call(e(this), "toggle")
        })).on(yt.CLICK_DATA_API, Ot, (function (t) {
            t.stopPropagation()
        })), e.fn[vt] = Wt._jQueryInterface, e.fn[vt].Constructor = Wt, e.fn[vt].noConflict = function () {
            return e.fn[vt] = _t, Wt._jQueryInterface
        };
        var Ut = e.fn.modal,
            Bt = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            },
            Kt = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            },
            Qt = {
                HIDE: "hide.bs.modal",
                HIDE_PREVENTED: "hidePrevented.bs.modal",
                HIDDEN: "hidden.bs.modal",
                SHOW: "show.bs.modal",
                SHOWN: "shown.bs.modal",
                FOCUSIN: "focusin.bs.modal",
                RESIZE: "resize.bs.modal",
                CLICK_DISMISS: "click.dismiss.bs.modal",
                KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                CLICK_DATA_API: "click.bs.modal.data-api"
            },
            Vt = "modal-dialog-scrollable",
            zt = "modal-scrollbar-measure",
            Yt = "modal-backdrop",
            $t = "modal-open",
            Xt = "fade",
            Jt = "show",
            Gt = "modal-static",
            Zt = ".modal-dialog",
            te = ".modal-body",
            ee = '[data-toggle="modal"]',
            ne = '[data-dismiss="modal"]',
            ie = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            oe = ".sticky-top",
            re = function () {
                function t(t, e) {
                    this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(Zt), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                }
                var n = t.prototype;
                return n.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t)
                }, n.show = function (t) {
                    var n = this;
                    if (!this._isShown && !this._isTransitioning) {
                        e(this._element).hasClass(Xt) && (this._isTransitioning = !0);
                        var i = e.Event(Qt.SHOW, {
                            relatedTarget: t
                        });
                        e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(Qt.CLICK_DISMISS, ne, (function (t) {
                            return n.hide(t)
                        })), e(this._dialog).on(Qt.MOUSEDOWN_DISMISS, (function () {
                            e(n._element).one(Qt.MOUSEUP_DISMISS, (function (t) {
                                e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                            }))
                        })), this._showBackdrop((function () {
                            return n._showElement(t)
                        })))
                    }
                }, n.hide = function (t) {
                    var n = this;
                    if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                        var i = e.Event(Qt.HIDE);
                        if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                            this._isShown = !1;
                            var o = e(this._element).hasClass(Xt);
                            if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(Qt.FOCUSIN), e(this._element).removeClass(Jt), e(this._element).off(Qt.CLICK_DISMISS), e(this._dialog).off(Qt.MOUSEDOWN_DISMISS), o) {
                                var r = c.getTransitionDurationFromElement(this._element);
                                e(this._element).one(c.TRANSITION_END, (function (t) {
                                    return n._hideModal(t)
                                })).emulateTransitionEnd(r)
                            } else this._hideModal()
                        }
                    }
                }, n.dispose = function () {
                    [window, this._element, this._dialog].forEach((function (t) {
                        return e(t).off(".bs.modal")
                    })), e(document).off(Qt.FOCUSIN), e.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                }, n.handleUpdate = function () {
                    this._adjustDialog()
                }, n._getConfig = function (t) {
                    return t = a({}, Bt, {}, t), c.typeCheckConfig("modal", t, Kt), t
                }, n._triggerBackdropTransition = function () {
                    var t = this;
                    if ("static" === this._config.backdrop) {
                        var n = e.Event(Qt.HIDE_PREVENTED);
                        if (e(this._element).trigger(n), n.defaultPrevented) return;
                        this._element.classList.add(Gt);
                        var i = c.getTransitionDurationFromElement(this._element);
                        e(this._element).one(c.TRANSITION_END, (function () {
                            t._element.classList.remove(Gt)
                        })).emulateTransitionEnd(i), this._element.focus()
                    } else this.hide()
                }, n._showElement = function (t) {
                    var n = this,
                        i = e(this._element).hasClass(Xt),
                        o = this._dialog ? this._dialog.querySelector(te) : null;
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), e(this._dialog).hasClass(Vt) && o ? o.scrollTop = 0 : this._element.scrollTop = 0, i && c.reflow(this._element), e(this._element).addClass(Jt), this._config.focus && this._enforceFocus();
                    var r = e.Event(Qt.SHOWN, {
                            relatedTarget: t
                        }),
                        s = function () {
                            n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r)
                        };
                    if (i) {
                        var a = c.getTransitionDurationFromElement(this._dialog);
                        e(this._dialog).one(c.TRANSITION_END, s).emulateTransitionEnd(a)
                    } else s()
                }, n._enforceFocus = function () {
                    var t = this;
                    e(document).off(Qt.FOCUSIN).on(Qt.FOCUSIN, (function (n) {
                        document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                    }))
                }, n._setEscapeEvent = function () {
                    var t = this;
                    this._isShown && this._config.keyboard ? e(this._element).on(Qt.KEYDOWN_DISMISS, (function (e) {
                        27 === e.which && t._triggerBackdropTransition()
                    })) : this._isShown || e(this._element).off(Qt.KEYDOWN_DISMISS)
                }, n._setResizeEvent = function () {
                    var t = this;
                    this._isShown ? e(window).on(Qt.RESIZE, (function (e) {
                        return t.handleUpdate(e)
                    })) : e(window).off(Qt.RESIZE)
                }, n._hideModal = function () {
                    var t = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function () {
                        e(document.body).removeClass($t), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(Qt.HIDDEN)
                    }))
                }, n._removeBackdrop = function () {
                    this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                }, n._showBackdrop = function (t) {
                    var n = this,
                        i = e(this._element).hasClass(Xt) ? Xt : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = Yt, i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on(Qt.CLICK_DISMISS, (function (t) {
                                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && n._triggerBackdropTransition()
                            })), i && c.reflow(this._backdrop), e(this._backdrop).addClass(Jt), !t) return;
                        if (!i) return void t();
                        var o = c.getTransitionDurationFromElement(this._backdrop);
                        e(this._backdrop).one(c.TRANSITION_END, t).emulateTransitionEnd(o)
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass(Jt);
                        var r = function () {
                            n._removeBackdrop(), t && t()
                        };
                        if (e(this._element).hasClass(Xt)) {
                            var s = c.getTransitionDurationFromElement(this._backdrop);
                            e(this._backdrop).one(c.TRANSITION_END, r).emulateTransitionEnd(s)
                        } else r()
                    } else t && t()
                }, n._adjustDialog = function () {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, n._resetAdjustments = function () {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, n._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, n._setScrollbar = function () {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        var n = [].slice.call(document.querySelectorAll(ie)),
                            i = [].slice.call(document.querySelectorAll(oe));
                        e(n).each((function (n, i) {
                            var o = i.style.paddingRight,
                                r = e(i).css("padding-right");
                            e(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
                        })), e(i).each((function (n, i) {
                            var o = i.style.marginRight,
                                r = e(i).css("margin-right");
                            e(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
                        }));
                        var o = document.body.style.paddingRight,
                            r = e(document.body).css("padding-right");
                        e(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                    }
                    e(document.body).addClass($t)
                }, n._resetScrollbar = function () {
                    var t = [].slice.call(document.querySelectorAll(ie));
                    e(t).each((function (t, n) {
                        var i = e(n).data("padding-right");
                        e(n).removeData("padding-right"), n.style.paddingRight = i || ""
                    }));
                    var n = [].slice.call(document.querySelectorAll("" + oe));
                    e(n).each((function (t, n) {
                        var i = e(n).data("margin-right");
                        void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                    }));
                    var i = e(document.body).data("padding-right");
                    e(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
                }, n._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    t.className = zt, document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e
                }, t._jQueryInterface = function (n, i) {
                    return this.each((function () {
                        var o = e(this).data("bs.modal"),
                            r = a({}, Bt, {}, e(this).data(), {}, "object" == typeof n && n ? n : {});
                        if (o || (o = new t(this, r), e(this).data("bs.modal", o)), "string" == typeof n) {
                            if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                            o[n](i)
                        } else r.show && o.show(i)
                    }))
                }, o(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Bt
                    }
                }]), t
            }();
        e(document).on(Qt.CLICK_DATA_API, ee, (function (t) {
            var n, i = this,
                o = c.getSelectorFromElement(this);
            o && (n = document.querySelector(o));
            var r = e(n).data("bs.modal") ? "toggle" : a({}, e(n).data(), {}, e(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var s = e(n).one(Qt.SHOW, (function (t) {
                t.isDefaultPrevented() || s.one(Qt.HIDDEN, (function () {
                    e(i).is(":visible") && i.focus()
                }))
            }));
            re._jQueryInterface.call(e(n), r, this)
        })), e.fn.modal = re._jQueryInterface, e.fn.modal.Constructor = re, e.fn.modal.noConflict = function () {
            return e.fn.modal = Ut, re._jQueryInterface
        };
        var se = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            ae = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            le = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            ce = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

        function ue(t, e, n) {
            if (0 === t.length) return t;
            if (n && "function" == typeof n) return n(t);
            for (var i = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), r = [].slice.call(i.body.querySelectorAll("*")), s = function (t, n) {
                    var i = r[t],
                        s = i.nodeName.toLowerCase();
                    if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                    var a = [].slice.call(i.attributes),
                        l = [].concat(e["*"] || [], e[s] || []);
                    a.forEach((function (t) {
                        (function (t, e) {
                            var n = t.nodeName.toLowerCase();
                            if (-1 !== e.indexOf(n)) return -1 === se.indexOf(n) || Boolean(t.nodeValue.match(le) || t.nodeValue.match(ce));
                            for (var i = e.filter((function (t) {
                                    return t instanceof RegExp
                                })), o = 0, r = i.length; o < r; o++)
                                if (n.match(i[o])) return !0;
                            return !1
                        })(t, l) || i.removeAttribute(t.nodeName)
                    }))
                }, a = 0, l = r.length; a < l; a++) s(a);
            return i.body.innerHTML
        }
        var fe = "tooltip",
            he = e.fn.tooltip,
            de = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            pe = ["sanitize", "whiteList", "sanitizeFn"],
            me = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
                popperConfig: "(null|object)"
            },
            ge = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            },
            ve = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: ae,
                popperConfig: null
            },
            _e = "show",
            be = "out",
            ye = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip"
            },
            we = "fade",
            Ee = "show",
            Ce = ".tooltip-inner",
            Te = ".arrow",
            Se = "hover",
            De = "focus",
            Ie = "click",
            Ae = "manual",
            Oe = function () {
                function t(t, e) {
                    if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                }
                var i = t.prototype;
                return i.enable = function () {
                    this._isEnabled = !0
                }, i.disable = function () {
                    this._isEnabled = !1
                }, i.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }, i.toggle = function (t) {
                    if (this._isEnabled)
                        if (t) {
                            var n = this.constructor.DATA_KEY,
                                i = e(t.currentTarget).data(n);
                            i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                        } else {
                            if (e(this.getTipElement()).hasClass(Ee)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }, i.dispose = function () {
                    clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, i.show = function () {
                    var t = this;
                    if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var i = e.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        e(this.element).trigger(i);
                        var o = c.findShadowRoot(this.element),
                            r = e.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
                        if (i.isDefaultPrevented() || !r) return;
                        var s = this.getTipElement(),
                            a = c.getUID(this.constructor.NAME);
                        s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(s).addClass(we);
                        var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                            u = this._getAttachment(l);
                        this.addAttachmentClass(u);
                        var f = this._getContainer();
                        e(s).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(s).appendTo(f), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, this._getPopperConfig(u)), e(s).addClass(Ee), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                        var h = function () {
                            t.config.animation && t._fixTransition();
                            var n = t._hoverState;
                            t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === be && t._leave(null, t)
                        };
                        if (e(this.tip).hasClass(we)) {
                            var d = c.getTransitionDurationFromElement(this.tip);
                            e(this.tip).one(c.TRANSITION_END, h).emulateTransitionEnd(d)
                        } else h()
                    }
                }, i.hide = function (t) {
                    var n = this,
                        i = this.getTipElement(),
                        o = e.Event(this.constructor.Event.HIDE),
                        r = function () {
                            n._hoverState !== _e && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                        };
                    if (e(this.element).trigger(o), !o.isDefaultPrevented()) {
                        if (e(i).removeClass(Ee), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger[Ie] = !1, this._activeTrigger[De] = !1, this._activeTrigger[Se] = !1, e(this.tip).hasClass(we)) {
                            var s = c.getTransitionDurationFromElement(i);
                            e(i).one(c.TRANSITION_END, r).emulateTransitionEnd(s)
                        } else r();
                        this._hoverState = ""
                    }
                }, i.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, i.isWithContent = function () {
                    return Boolean(this.getTitle())
                }, i.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-tooltip-" + t)
                }, i.getTipElement = function () {
                    return this.tip = this.tip || e(this.config.template)[0], this.tip
                }, i.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(e(t.querySelectorAll(Ce)), this.getTitle()), e(t).removeClass(we + " " + Ee)
                }, i.setElementContent = function (t, n) {
                    "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = ue(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())
                }, i.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                }, i._getPopperConfig = function (t) {
                    var e = this;
                    return a({}, {
                        placement: t,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: Te
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function (t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }, {}, this.config.popperConfig)
                }, i._getOffset = function () {
                    var t = this,
                        e = {};
                    return "function" == typeof this.config.offset ? e.fn = function (e) {
                        return e.offsets = a({}, e.offsets, {}, t.config.offset(e.offsets, t.element) || {}), e
                    } : e.offset = this.config.offset, e
                }, i._getContainer = function () {
                    return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
                }, i._getAttachment = function (t) {
                    return ge[t.toUpperCase()]
                }, i._setListeners = function () {
                    var t = this;
                    this.config.trigger.split(" ").forEach((function (n) {
                        if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function (e) {
                            return t.toggle(e)
                        }));
                        else if (n !== Ae) {
                            var i = n === Se ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                o = n === Se ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                            e(t.element).on(i, t.config.selector, (function (e) {
                                return t._enter(e)
                            })).on(o, t.config.selector, (function (e) {
                                return t._leave(e)
                            }))
                        }
                    })), this._hideModalHandler = function () {
                        t.element && t.hide()
                    }, e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, i._fixTitle = function () {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, i._enter = function (t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? De : Se] = !0), e(n.getTipElement()).hasClass(Ee) || n._hoverState === _e ? n._hoverState = _e : (clearTimeout(n._timeout), n._hoverState = _e, n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function () {
                        n._hoverState === _e && n.show()
                    }), n.config.delay.show) : n.show())
                }, i._leave = function (t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? De : Se] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = be, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function () {
                        n._hoverState === be && n.hide()
                    }), n.config.delay.hide) : n.hide())
                }, i._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t]) return !0;
                    return !1
                }, i._getConfig = function (t) {
                    var n = e(this.element).data();
                    return Object.keys(n).forEach((function (t) {
                        -1 !== pe.indexOf(t) && delete n[t]
                    })), "number" == typeof (t = a({}, this.constructor.Default, {}, n, {}, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                        show: t.delay,
                        hide: t.delay
                    }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), c.typeCheckConfig(fe, t, this.constructor.DefaultType), t.sanitize && (t.template = ue(t.template, t.whiteList, t.sanitizeFn)), t
                }, i._getDelegateConfig = function () {
                    var t = {};
                    if (this.config)
                        for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t
                }, i._cleanTipClass = function () {
                    var t = e(this.getTipElement()),
                        n = t.attr("class").match(de);
                    null !== n && n.length && t.removeClass(n.join(""))
                }, i._handlePopperPlacementChange = function (t) {
                    var e = t.instance;
                    this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                }, i._fixTransition = function () {
                    var t = this.getTipElement(),
                        n = this.config.animation;
                    null === t.getAttribute("x-placement") && (e(t).removeClass(we), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this).data("bs.tooltip"),
                            o = "object" == typeof n && n;
                        if ((i || !/dispose|hide/.test(n)) && (i || (i = new t(this, o), e(this).data("bs.tooltip", i)), "string" == typeof n)) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, o(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return ve
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return fe
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return "bs.tooltip"
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return ye
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return ".bs.tooltip"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return me
                    }
                }]), t
            }();
        e.fn.tooltip = Oe._jQueryInterface, e.fn.tooltip.Constructor = Oe, e.fn.tooltip.noConflict = function () {
            return e.fn.tooltip = he, Oe._jQueryInterface
        };
        var Ne = "popover",
            ke = e.fn.popover,
            xe = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            Pe = a({}, Oe.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }),
            Le = a({}, Oe.DefaultType, {
                content: "(string|element|function)"
            }),
            je = "fade",
            He = "show",
            Re = ".popover-header",
            Me = ".popover-body",
            Fe = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover"
            },
            qe = function (t) {
                var n, i;

                function r() {
                    return t.apply(this, arguments) || this
                }
                i = t, (n = r).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
                var s = r.prototype;
                return s.isWithContent = function () {
                    return this.getTitle() || this._getContent()
                }, s.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-popover-" + t)
                }, s.getTipElement = function () {
                    return this.tip = this.tip || e(this.config.template)[0], this.tip
                }, s.setContent = function () {
                    var t = e(this.getTipElement());
                    this.setElementContent(t.find(Re), this.getTitle());
                    var n = this._getContent();
                    "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(Me), n), t.removeClass(je + " " + He)
                }, s._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content
                }, s._cleanTipClass = function () {
                    var t = e(this.getTipElement()),
                        n = t.attr("class").match(xe);
                    null !== n && n.length > 0 && t.removeClass(n.join(""))
                }, r._jQueryInterface = function (t) {
                    return this.each((function () {
                        var n = e(this).data("bs.popover"),
                            i = "object" == typeof t ? t : null;
                        if ((n || !/dispose|hide/.test(t)) && (n || (n = new r(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
                            if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    }))
                }, o(r, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Pe
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return Ne
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return "bs.popover"
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return Fe
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return ".bs.popover"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Le
                    }
                }]), r
            }(Oe);
        e.fn.popover = qe._jQueryInterface, e.fn.popover.Constructor = qe, e.fn.popover.noConflict = function () {
            return e.fn.popover = ke, qe._jQueryInterface
        };
        var We = "scrollspy",
            Ue = e.fn[We],
            Be = {
                offset: 10,
                method: "auto",
                target: ""
            },
            Ke = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            },
            Qe = {
                ACTIVATE: "activate.bs.scrollspy",
                SCROLL: "scroll.bs.scrollspy",
                LOAD_DATA_API: "load.bs.scrollspy.data-api"
            },
            Ve = "dropdown-item",
            ze = "active",
            Ye = '[data-spy="scroll"]',
            $e = ".nav, .list-group",
            Xe = ".nav-link",
            Je = ".nav-item",
            Ge = ".list-group-item",
            Ze = ".dropdown",
            tn = ".dropdown-item",
            en = ".dropdown-toggle",
            nn = "offset",
            on = "position",
            rn = function () {
                function t(t, n) {
                    var i = this;
                    this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + Xe + "," + this._config.target + " " + Ge + "," + this._config.target + " " + tn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(Qe.SCROLL, (function (t) {
                        return i._process(t)
                    })), this.refresh(), this._process()
                }
                var n = t.prototype;
                return n.refresh = function () {
                    var t = this,
                        n = this._scrollElement === this._scrollElement.window ? nn : on,
                        i = "auto" === this._config.method ? n : this._config.method,
                        o = i === on ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function (t) {
                        var n, r = c.getSelectorFromElement(t);
                        if (r && (n = document.querySelector(r)), n) {
                            var s = n.getBoundingClientRect();
                            if (s.width || s.height) return [e(n)[i]().top + o, r]
                        }
                        return null
                    })).filter((function (t) {
                        return t
                    })).sort((function (t, e) {
                        return t[0] - e[0]
                    })).forEach((function (e) {
                        t._offsets.push(e[0]), t._targets.push(e[1])
                    }))
                }, n.dispose = function () {
                    e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, n._getConfig = function (t) {
                    if ("string" != typeof (t = a({}, Be, {}, "object" == typeof t && t ? t : {})).target) {
                        var n = e(t.target).attr("id");
                        n || (n = c.getUID(We), e(t.target).attr("id", n)), t.target = "#" + n
                    }
                    return c.typeCheckConfig(We, t, Ke), t
                }, n._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, n._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, n._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, n._process = function () {
                    var t = this._getScrollTop() + this._config.offset,
                        e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(), t >= n) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }, n._activate = function (t) {
                    this._activeTarget = t, this._clear();
                    var n = this._selector.split(",").map((function (e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                        })),
                        i = e([].slice.call(document.querySelectorAll(n.join(","))));
                    i.hasClass(Ve) ? (i.closest(Ze).find(en).addClass(ze), i.addClass(ze)) : (i.addClass(ze), i.parents($e).prev(Xe + ", " + Ge).addClass(ze), i.parents($e).prev(Je).children(Xe).addClass(ze)), e(this._scrollElement).trigger(Qe.ACTIVATE, {
                        relatedTarget: t
                    })
                }, n._clear = function () {
                    [].slice.call(document.querySelectorAll(this._selector)).filter((function (t) {
                        return t.classList.contains(ze)
                    })).forEach((function (t) {
                        return t.classList.remove(ze)
                    }))
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this).data("bs.scrollspy");
                        if (i || (i = new t(this, "object" == typeof n && n), e(this).data("bs.scrollspy", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, o(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Be
                    }
                }]), t
            }();
        e(window).on(Qe.LOAD_DATA_API, (function () {
            for (var t = [].slice.call(document.querySelectorAll(Ye)), n = t.length; n--;) {
                var i = e(t[n]);
                rn._jQueryInterface.call(i, i.data())
            }
        })), e.fn[We] = rn._jQueryInterface, e.fn[We].Constructor = rn, e.fn[We].noConflict = function () {
            return e.fn[We] = Ue, rn._jQueryInterface
        };
        var sn = e.fn.tab,
            an = {
                HIDE: "hide.bs.tab",
                HIDDEN: "hidden.bs.tab",
                SHOW: "show.bs.tab",
                SHOWN: "shown.bs.tab",
                CLICK_DATA_API: "click.bs.tab.data-api"
            },
            ln = "dropdown-menu",
            cn = "active",
            un = "disabled",
            fn = "fade",
            hn = "show",
            dn = ".dropdown",
            pn = ".nav, .list-group",
            mn = ".active",
            gn = "> li > .active",
            vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            _n = ".dropdown-toggle",
            bn = "> .dropdown-menu .active",
            yn = function () {
                function t(t) {
                    this._element = t
                }
                var n = t.prototype;
                return n.show = function () {
                    var t = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(cn) || e(this._element).hasClass(un))) {
                        var n, i, o = e(this._element).closest(pn)[0],
                            r = c.getSelectorFromElement(this._element);
                        if (o) {
                            var s = "UL" === o.nodeName || "OL" === o.nodeName ? gn : mn;
                            i = (i = e.makeArray(e(o).find(s)))[i.length - 1]
                        }
                        var a = e.Event(an.HIDE, {
                                relatedTarget: this._element
                            }),
                            l = e.Event(an.SHOW, {
                                relatedTarget: i
                            });
                        if (i && e(i).trigger(a), e(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                            r && (n = document.querySelector(r)), this._activate(this._element, o);
                            var u = function () {
                                var n = e.Event(an.HIDDEN, {
                                        relatedTarget: t._element
                                    }),
                                    o = e.Event(an.SHOWN, {
                                        relatedTarget: i
                                    });
                                e(i).trigger(n), e(t._element).trigger(o)
                            };
                            n ? this._activate(n, n.parentNode, u) : u()
                        }
                    }
                }, n.dispose = function () {
                    e.removeData(this._element, "bs.tab"), this._element = null
                }, n._activate = function (t, n, i) {
                    var o = this,
                        r = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? e(n).children(mn) : e(n).find(gn))[0],
                        s = i && r && e(r).hasClass(fn),
                        a = function () {
                            return o._transitionComplete(t, r, i)
                        };
                    if (r && s) {
                        var l = c.getTransitionDurationFromElement(r);
                        e(r).removeClass(hn).one(c.TRANSITION_END, a).emulateTransitionEnd(l)
                    } else a()
                }, n._transitionComplete = function (t, n, i) {
                    if (n) {
                        e(n).removeClass(cn);
                        var o = e(n.parentNode).find(bn)[0];
                        o && e(o).removeClass(cn), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                    }
                    if (e(t).addClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), c.reflow(t), t.classList.contains(fn) && t.classList.add(hn), t.parentNode && e(t.parentNode).hasClass(ln)) {
                        var r = e(t).closest(dn)[0];
                        if (r) {
                            var s = [].slice.call(r.querySelectorAll(_n));
                            e(s).addClass(cn)
                        }
                        t.setAttribute("aria-expanded", !0)
                    }
                    i && i()
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this),
                            o = i.data("bs.tab");
                        if (o || (o = new t(this), i.data("bs.tab", o)), "string" == typeof n) {
                            if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                            o[n]()
                        }
                    }))
                }, o(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }]), t
            }();
        e(document).on(an.CLICK_DATA_API, vn, (function (t) {
            t.preventDefault(), yn._jQueryInterface.call(e(this), "show")
        })), e.fn.tab = yn._jQueryInterface, e.fn.tab.Constructor = yn, e.fn.tab.noConflict = function () {
            return e.fn.tab = sn, yn._jQueryInterface
        };
        var wn = e.fn.toast,
            En = {
                CLICK_DISMISS: "click.dismiss.bs.toast",
                HIDE: "hide.bs.toast",
                HIDDEN: "hidden.bs.toast",
                SHOW: "show.bs.toast",
                SHOWN: "shown.bs.toast"
            },
            Cn = "fade",
            Tn = "hide",
            Sn = "show",
            Dn = "showing",
            In = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            },
            An = {
                animation: !0,
                autohide: !0,
                delay: 500
            },
            On = '[data-dismiss="toast"]',
            Nn = function () {
                function t(t, e) {
                    this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
                }
                var n = t.prototype;
                return n.show = function () {
                    var t = this,
                        n = e.Event(En.SHOW);
                    if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                        this._config.animation && this._element.classList.add(Cn);
                        var i = function () {
                            t._element.classList.remove(Dn), t._element.classList.add(Sn), e(t._element).trigger(En.SHOWN), t._config.autohide && (t._timeout = setTimeout((function () {
                                t.hide()
                            }), t._config.delay))
                        };
                        if (this._element.classList.remove(Tn), c.reflow(this._element), this._element.classList.add(Dn), this._config.animation) {
                            var o = c.getTransitionDurationFromElement(this._element);
                            e(this._element).one(c.TRANSITION_END, i).emulateTransitionEnd(o)
                        } else i()
                    }
                }, n.hide = function () {
                    if (this._element.classList.contains(Sn)) {
                        var t = e.Event(En.HIDE);
                        e(this._element).trigger(t), t.isDefaultPrevented() || this._close()
                    }
                }, n.dispose = function () {
                    clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Sn) && this._element.classList.remove(Sn), e(this._element).off(En.CLICK_DISMISS), e.removeData(this._element, "bs.toast"), this._element = null, this._config = null
                }, n._getConfig = function (t) {
                    return t = a({}, An, {}, e(this._element).data(), {}, "object" == typeof t && t ? t : {}), c.typeCheckConfig("toast", t, this.constructor.DefaultType), t
                }, n._setListeners = function () {
                    var t = this;
                    e(this._element).on(En.CLICK_DISMISS, On, (function () {
                        return t.hide()
                    }))
                }, n._close = function () {
                    var t = this,
                        n = function () {
                            t._element.classList.add(Tn), e(t._element).trigger(En.HIDDEN)
                        };
                    if (this._element.classList.remove(Sn), this._config.animation) {
                        var i = c.getTransitionDurationFromElement(this._element);
                        e(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i)
                    } else n()
                }, t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this),
                            o = i.data("bs.toast");
                        if (o || (o = new t(this, "object" == typeof n && n), i.data("bs.toast", o)), "string" == typeof n) {
                            if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                            o[n](this)
                        }
                    }))
                }, o(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.4.1"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return In
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return An
                    }
                }]), t
            }();
        e.fn.toast = Nn._jQueryInterface, e.fn.toast.Constructor = Nn, e.fn.toast.noConflict = function () {
            return e.fn.toast = wn, Nn._jQueryInterface
        }, t.Alert = m, t.Button = A, t.Carousel = nt, t.Collapse = gt, t.Dropdown = Wt, t.Modal = re, t.Popover = qe, t.Scrollspy = rn, t.Tab = yn, t.Toast = Nn, t.Tooltip = Oe, t.Util = c, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }(e, n(1), n(6))
}, function (t, e, n) {
    "use strict";
    n.r(e),
        function (t) {
            /**!
             * @fileOverview Kickass library to create and place poppers near their reference elements.
             * @version 1.16.1
             * @license
             * Copyright (c) 2016 Federico Zivolo and contributors
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in all
             * copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
             * SOFTWARE.
             */
            var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
                i = function () {
                    for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
                        if (n && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
                    return 0
                }();
            var o = n && window.Promise ? function (t) {
                var e = !1;
                return function () {
                    e || (e = !0, window.Promise.resolve().then((function () {
                        e = !1, t()
                    })))
                }
            } : function (t) {
                var e = !1;
                return function () {
                    e || (e = !0, setTimeout((function () {
                        e = !1, t()
                    }), i))
                }
            };

            function r(t) {
                return t && "[object Function]" === {}.toString.call(t)
            }

            function s(t, e) {
                if (1 !== t.nodeType) return [];
                var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
                return e ? n[e] : n
            }

            function a(t) {
                return "HTML" === t.nodeName ? t : t.parentNode || t.host
            }

            function l(t) {
                if (!t) return document.body;
                switch (t.nodeName) {
                    case "HTML":
                    case "BODY":
                        return t.ownerDocument.body;
                    case "#document":
                        return t.body
                }
                var e = s(t),
                    n = e.overflow,
                    i = e.overflowX,
                    o = e.overflowY;
                return /(auto|scroll|overlay)/.test(n + o + i) ? t : l(a(t))
            }

            function c(t) {
                return t && t.referenceNode ? t.referenceNode : t
            }
            var u = n && !(!window.MSInputMethodContext || !document.documentMode),
                f = n && /MSIE 10/.test(navigator.userAgent);

            function h(t) {
                return 11 === t ? u : 10 === t ? f : u || f
            }

            function d(t) {
                if (!t) return document.documentElement;
                for (var e = h(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
                var i = n && n.nodeName;
                return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? d(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
            }

            function p(t) {
                return null !== t.parentNode ? p(t.parentNode) : t
            }

            function m(t, e) {
                if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
                var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                    i = n ? t : e,
                    o = n ? e : t,
                    r = document.createRange();
                r.setStart(i, 0), r.setEnd(o, 0);
                var s, a, l = r.commonAncestorContainer;
                if (t !== l && e !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && d(s.firstElementChild) !== s ? d(l) : l;
                var c = p(t);
                return c.host ? m(c.host, e) : m(t, p(e).host)
            }

            function g(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                    n = "top" === e ? "scrollTop" : "scrollLeft",
                    i = t.nodeName;
                if ("BODY" === i || "HTML" === i) {
                    var o = t.ownerDocument.documentElement,
                        r = t.ownerDocument.scrollingElement || o;
                    return r[n]
                }
                return t[n]
            }

            function v(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = g(e, "top"),
                    o = g(e, "left"),
                    r = n ? -1 : 1;
                return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t
            }

            function _(t, e) {
                var n = "x" === e ? "Left" : "Top",
                    i = "Left" === n ? "Right" : "Bottom";
                return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"])
            }

            function b(t, e, n, i) {
                return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], h(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
            }

            function y(t) {
                var e = t.body,
                    n = t.documentElement,
                    i = h(10) && getComputedStyle(n);
                return {
                    height: b("Height", e, n, i),
                    width: b("Width", e, n, i)
                }
            }
            var w = function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                E = function () {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function (e, n, i) {
                        return n && t(e.prototype, n), i && t(e, i), e
                    }
                }(),
                C = function (t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                },
                T = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                    }
                    return t
                };

            function S(t) {
                return T({}, t, {
                    right: t.left + t.width,
                    bottom: t.top + t.height
                })
            }

            function D(t) {
                var e = {};
                try {
                    if (h(10)) {
                        e = t.getBoundingClientRect();
                        var n = g(t, "top"),
                            i = g(t, "left");
                        e.top += n, e.left += i, e.bottom += n, e.right += i
                    } else e = t.getBoundingClientRect()
                } catch (t) {}
                var o = {
                        left: e.left,
                        top: e.top,
                        width: e.right - e.left,
                        height: e.bottom - e.top
                    },
                    r = "HTML" === t.nodeName ? y(t.ownerDocument) : {},
                    a = r.width || t.clientWidth || o.width,
                    l = r.height || t.clientHeight || o.height,
                    c = t.offsetWidth - a,
                    u = t.offsetHeight - l;
                if (c || u) {
                    var f = s(t);
                    c -= _(f, "x"), u -= _(f, "y"), o.width -= c, o.height -= u
                }
                return S(o)
            }

            function I(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = h(10),
                    o = "HTML" === e.nodeName,
                    r = D(t),
                    a = D(e),
                    c = l(t),
                    u = s(e),
                    f = parseFloat(u.borderTopWidth),
                    d = parseFloat(u.borderLeftWidth);
                n && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
                var p = S({
                    top: r.top - a.top - f,
                    left: r.left - a.left - d,
                    width: r.width,
                    height: r.height
                });
                if (p.marginTop = 0, p.marginLeft = 0, !i && o) {
                    var m = parseFloat(u.marginTop),
                        g = parseFloat(u.marginLeft);
                    p.top -= f - m, p.bottom -= f - m, p.left -= d - g, p.right -= d - g, p.marginTop = m, p.marginLeft = g
                }
                return (i && !n ? e.contains(c) : e === c && "BODY" !== c.nodeName) && (p = v(p, e)), p
            }

            function A(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = t.ownerDocument.documentElement,
                    i = I(t, n),
                    o = Math.max(n.clientWidth, window.innerWidth || 0),
                    r = Math.max(n.clientHeight, window.innerHeight || 0),
                    s = e ? 0 : g(n),
                    a = e ? 0 : g(n, "left"),
                    l = {
                        top: s - i.top + i.marginTop,
                        left: a - i.left + i.marginLeft,
                        width: o,
                        height: r
                    };
                return S(l)
            }

            function O(t) {
                var e = t.nodeName;
                if ("BODY" === e || "HTML" === e) return !1;
                if ("fixed" === s(t, "position")) return !0;
                var n = a(t);
                return !!n && O(n)
            }

            function N(t) {
                if (!t || !t.parentElement || h()) return document.documentElement;
                for (var e = t.parentElement; e && "none" === s(e, "transform");) e = e.parentElement;
                return e || document.documentElement
            }

            function k(t, e, n, i) {
                var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    r = {
                        top: 0,
                        left: 0
                    },
                    s = o ? N(t) : m(t, c(e));
                if ("viewport" === i) r = A(s, o);
                else {
                    var u = void 0;
                    "scrollParent" === i ? "BODY" === (u = l(a(e))).nodeName && (u = t.ownerDocument.documentElement) : u = "window" === i ? t.ownerDocument.documentElement : i;
                    var f = I(u, s, o);
                    if ("HTML" !== u.nodeName || O(s)) r = f;
                    else {
                        var h = y(t.ownerDocument),
                            d = h.height,
                            p = h.width;
                        r.top += f.top - f.marginTop, r.bottom = d + f.top, r.left += f.left - f.marginLeft, r.right = p + f.left
                    }
                }
                var g = "number" == typeof (n = n || 0);
                return r.left += g ? n : n.left || 0, r.top += g ? n : n.top || 0, r.right -= g ? n : n.right || 0, r.bottom -= g ? n : n.bottom || 0, r
            }

            function x(t) {
                return t.width * t.height
            }

            function P(t, e, n, i, o) {
                var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === t.indexOf("auto")) return t;
                var s = k(n, i, r, o),
                    a = {
                        top: {
                            width: s.width,
                            height: e.top - s.top
                        },
                        right: {
                            width: s.right - e.right,
                            height: s.height
                        },
                        bottom: {
                            width: s.width,
                            height: s.bottom - e.bottom
                        },
                        left: {
                            width: e.left - s.left,
                            height: s.height
                        }
                    },
                    l = Object.keys(a).map((function (t) {
                        return T({
                            key: t
                        }, a[t], {
                            area: x(a[t])
                        })
                    })).sort((function (t, e) {
                        return e.area - t.area
                    })),
                    c = l.filter((function (t) {
                        var e = t.width,
                            i = t.height;
                        return e >= n.clientWidth && i >= n.clientHeight
                    })),
                    u = c.length > 0 ? c[0].key : l[0].key,
                    f = t.split("-")[1];
                return u + (f ? "-" + f : "")
            }

            function L(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    o = i ? N(e) : m(e, c(n));
                return I(n, o, i)
            }

            function j(t) {
                var e = t.ownerDocument.defaultView.getComputedStyle(t),
                    n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
                    i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
                return {
                    width: t.offsetWidth + i,
                    height: t.offsetHeight + n
                }
            }

            function H(t) {
                var e = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return t.replace(/left|right|bottom|top/g, (function (t) {
                    return e[t]
                }))
            }

            function R(t, e, n) {
                n = n.split("-")[0];
                var i = j(t),
                    o = {
                        width: i.width,
                        height: i.height
                    },
                    r = -1 !== ["right", "left"].indexOf(n),
                    s = r ? "top" : "left",
                    a = r ? "left" : "top",
                    l = r ? "height" : "width",
                    c = r ? "width" : "height";
                return o[s] = e[s] + e[l] / 2 - i[l] / 2, o[a] = n === a ? e[a] - i[c] : e[H(a)], o
            }

            function M(t, e) {
                return Array.prototype.find ? t.find(e) : t.filter(e)[0]
            }

            function F(t, e, n) {
                return (void 0 === n ? t : t.slice(0, function (t, e, n) {
                    if (Array.prototype.findIndex) return t.findIndex((function (t) {
                        return t[e] === n
                    }));
                    var i = M(t, (function (t) {
                        return t[e] === n
                    }));
                    return t.indexOf(i)
                }(t, "name", n))).forEach((function (t) {
                    t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = t.function || t.fn;
                    t.enabled && r(n) && (e.offsets.popper = S(e.offsets.popper), e.offsets.reference = S(e.offsets.reference), e = n(e, t))
                })), e
            }

            function q() {
                if (!this.state.isDestroyed) {
                    var t = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    t.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = P(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = R(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = F(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                }
            }

            function W(t, e) {
                return t.some((function (t) {
                    var n = t.name;
                    return t.enabled && n === e
                }))
            }

            function U(t) {
                for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
                    var o = e[i],
                        r = o ? "" + o + n : t;
                    if (void 0 !== document.body.style[r]) return r
                }
                return null
            }

            function B() {
                return this.state.isDestroyed = !0, W(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[U("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
            }

            function K(t) {
                var e = t.ownerDocument;
                return e ? e.defaultView : window
            }

            function Q(t, e, n, i) {
                n.updateBound = i, K(t).addEventListener("resize", n.updateBound, {
                    passive: !0
                });
                var o = l(t);
                return function t(e, n, i, o) {
                    var r = "BODY" === e.nodeName,
                        s = r ? e.ownerDocument.defaultView : e;
                    s.addEventListener(n, i, {
                        passive: !0
                    }), r || t(l(s.parentNode), n, i, o), o.push(s)
                }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
            }

            function V() {
                this.state.eventsEnabled || (this.state = Q(this.reference, this.options, this.state, this.scheduleUpdate))
            }

            function z() {
                var t, e;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, K(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach((function (t) {
                    t.removeEventListener("scroll", e.updateBound)
                })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
            }

            function Y(t) {
                return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
            }

            function $(t, e) {
                Object.keys(e).forEach((function (n) {
                    var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && Y(e[n]) && (i = "px"), t.style[n] = e[n] + i
                }))
            }
            var X = n && /Firefox/i.test(navigator.userAgent);

            function J(t, e, n) {
                var i = M(t, (function (t) {
                        return t.name === e
                    })),
                    o = !!i && t.some((function (t) {
                        return t.name === n && t.enabled && t.order < i.order
                    }));
                if (!o) {
                    var r = "`" + e + "`",
                        s = "`" + n + "`";
                    console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
                }
                return o
            }
            var G = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                Z = G.slice(3);

            function tt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = Z.indexOf(t),
                    i = Z.slice(n + 1).concat(Z.slice(0, n));
                return e ? i.reverse() : i
            }
            var et = "flip",
                nt = "clockwise",
                it = "counterclockwise";

            function ot(t, e, n, i) {
                var o = [0, 0],
                    r = -1 !== ["right", "left"].indexOf(i),
                    s = t.split(/(\+|\-)/).map((function (t) {
                        return t.trim()
                    })),
                    a = s.indexOf(M(s, (function (t) {
                        return -1 !== t.search(/,|\s/)
                    })));
                s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                    c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                return (c = c.map((function (t, i) {
                    var o = (1 === i ? !r : r) ? "height" : "width",
                        s = !1;
                    return t.reduce((function (t, e) {
                        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
                    }), []).map((function (t) {
                        return function (t, e, n, i) {
                            var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                r = +o[1],
                                s = o[2];
                            if (!r) return t;
                            if (0 === s.indexOf("%")) {
                                var a = void 0;
                                switch (s) {
                                    case "%p":
                                        a = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        a = i
                                }
                                return S(a)[e] / 100 * r
                            }
                            if ("vh" === s || "vw" === s) {
                                return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r
                            }
                            return r
                        }(t, o, e, n)
                    }))
                }))).forEach((function (t, e) {
                    t.forEach((function (n, i) {
                        Y(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1))
                    }))
                })), o
            }
            var rt = {
                    placement: "bottom",
                    positionFixed: !1,
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function () {},
                    onUpdate: function () {},
                    modifiers: {
                        shift: {
                            order: 100,
                            enabled: !0,
                            fn: function (t) {
                                var e = t.placement,
                                    n = e.split("-")[0],
                                    i = e.split("-")[1];
                                if (i) {
                                    var o = t.offsets,
                                        r = o.reference,
                                        s = o.popper,
                                        a = -1 !== ["bottom", "top"].indexOf(n),
                                        l = a ? "left" : "top",
                                        c = a ? "width" : "height",
                                        u = {
                                            start: C({}, l, r[l]),
                                            end: C({}, l, r[l] + r[c] - s[c])
                                        };
                                    t.offsets.popper = T({}, s, u[i])
                                }
                                return t
                            }
                        },
                        offset: {
                            order: 200,
                            enabled: !0,
                            fn: function (t, e) {
                                var n = e.offset,
                                    i = t.placement,
                                    o = t.offsets,
                                    r = o.popper,
                                    s = o.reference,
                                    a = i.split("-")[0],
                                    l = void 0;
                                return l = Y(+n) ? [+n, 0] : ot(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), t.popper = r, t
                            },
                            offset: 0
                        },
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function (t, e) {
                                var n = e.boundariesElement || d(t.instance.popper);
                                t.instance.reference === n && (n = d(n));
                                var i = U("transform"),
                                    o = t.instance.popper.style,
                                    r = o.top,
                                    s = o.left,
                                    a = o[i];
                                o.top = "", o.left = "", o[i] = "";
                                var l = k(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                                o.top = r, o.left = s, o[i] = a, e.boundaries = l;
                                var c = e.priority,
                                    u = t.offsets.popper,
                                    f = {
                                        primary: function (t) {
                                            var n = u[t];
                                            return u[t] < l[t] && !e.escapeWithReference && (n = Math.max(u[t], l[t])), C({}, t, n)
                                        },
                                        secondary: function (t) {
                                            var n = "right" === t ? "left" : "top",
                                                i = u[n];
                                            return u[t] > l[t] && !e.escapeWithReference && (i = Math.min(u[n], l[t] - ("right" === t ? u.width : u.height))), C({}, n, i)
                                        }
                                    };
                                return c.forEach((function (t) {
                                    var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                                    u = T({}, u, f[e](t))
                                })), t.offsets.popper = u, t
                            },
                            priority: ["left", "right", "top", "bottom"],
                            padding: 5,
                            boundariesElement: "scrollParent"
                        },
                        keepTogether: {
                            order: 400,
                            enabled: !0,
                            fn: function (t) {
                                var e = t.offsets,
                                    n = e.popper,
                                    i = e.reference,
                                    o = t.placement.split("-")[0],
                                    r = Math.floor,
                                    s = -1 !== ["top", "bottom"].indexOf(o),
                                    a = s ? "right" : "bottom",
                                    l = s ? "left" : "top",
                                    c = s ? "width" : "height";
                                return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])), t
                            }
                        },
                        arrow: {
                            order: 500,
                            enabled: !0,
                            fn: function (t, e) {
                                var n;
                                if (!J(t.instance.modifiers, "arrow", "keepTogether")) return t;
                                var i = e.element;
                                if ("string" == typeof i) {
                                    if (!(i = t.instance.popper.querySelector(i))) return t
                                } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                                var o = t.placement.split("-")[0],
                                    r = t.offsets,
                                    a = r.popper,
                                    l = r.reference,
                                    c = -1 !== ["left", "right"].indexOf(o),
                                    u = c ? "height" : "width",
                                    f = c ? "Top" : "Left",
                                    h = f.toLowerCase(),
                                    d = c ? "left" : "top",
                                    p = c ? "bottom" : "right",
                                    m = j(i)[u];
                                l[p] - m < a[h] && (t.offsets.popper[h] -= a[h] - (l[p] - m)), l[h] + m > a[p] && (t.offsets.popper[h] += l[h] + m - a[p]), t.offsets.popper = S(t.offsets.popper);
                                var g = l[h] + l[u] / 2 - m / 2,
                                    v = s(t.instance.popper),
                                    _ = parseFloat(v["margin" + f]),
                                    b = parseFloat(v["border" + f + "Width"]),
                                    y = g - t.offsets.popper[h] - _ - b;
                                return y = Math.max(Math.min(a[u] - m, y), 0), t.arrowElement = i, t.offsets.arrow = (C(n = {}, h, Math.round(y)), C(n, d, ""), n), t
                            },
                            element: "[x-arrow]"
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function (t, e) {
                                if (W(t.instance.modifiers, "inner")) return t;
                                if (t.flipped && t.placement === t.originalPlacement) return t;
                                var n = k(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                                    i = t.placement.split("-")[0],
                                    o = H(i),
                                    r = t.placement.split("-")[1] || "",
                                    s = [];
                                switch (e.behavior) {
                                    case et:
                                        s = [i, o];
                                        break;
                                    case nt:
                                        s = tt(i);
                                        break;
                                    case it:
                                        s = tt(i, !0);
                                        break;
                                    default:
                                        s = e.behavior
                                }
                                return s.forEach((function (a, l) {
                                    if (i !== a || s.length === l + 1) return t;
                                    i = t.placement.split("-")[0], o = H(i);
                                    var c = t.offsets.popper,
                                        u = t.offsets.reference,
                                        f = Math.floor,
                                        h = "left" === i && f(c.right) > f(u.left) || "right" === i && f(c.left) < f(u.right) || "top" === i && f(c.bottom) > f(u.top) || "bottom" === i && f(c.top) < f(u.bottom),
                                        d = f(c.left) < f(n.left),
                                        p = f(c.right) > f(n.right),
                                        m = f(c.top) < f(n.top),
                                        g = f(c.bottom) > f(n.bottom),
                                        v = "left" === i && d || "right" === i && p || "top" === i && m || "bottom" === i && g,
                                        _ = -1 !== ["top", "bottom"].indexOf(i),
                                        b = !!e.flipVariations && (_ && "start" === r && d || _ && "end" === r && p || !_ && "start" === r && m || !_ && "end" === r && g),
                                        y = !!e.flipVariationsByContent && (_ && "start" === r && p || _ && "end" === r && d || !_ && "start" === r && g || !_ && "end" === r && m),
                                        w = b || y;
                                    (h || v || w) && (t.flipped = !0, (h || v) && (i = s[l + 1]), w && (r = function (t) {
                                        return "end" === t ? "start" : "start" === t ? "end" : t
                                    }(r)), t.placement = i + (r ? "-" + r : ""), t.offsets.popper = T({}, t.offsets.popper, R(t.instance.popper, t.offsets.reference, t.placement)), t = F(t.instance.modifiers, t, "flip"))
                                })), t
                            },
                            behavior: "flip",
                            padding: 5,
                            boundariesElement: "viewport",
                            flipVariations: !1,
                            flipVariationsByContent: !1
                        },
                        inner: {
                            order: 700,
                            enabled: !1,
                            fn: function (t) {
                                var e = t.placement,
                                    n = e.split("-")[0],
                                    i = t.offsets,
                                    o = i.popper,
                                    r = i.reference,
                                    s = -1 !== ["left", "right"].indexOf(n),
                                    a = -1 === ["top", "left"].indexOf(n);
                                return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), t.placement = H(e), t.offsets.popper = S(o), t
                            }
                        },
                        hide: {
                            order: 800,
                            enabled: !0,
                            fn: function (t) {
                                if (!J(t.instance.modifiers, "hide", "preventOverflow")) return t;
                                var e = t.offsets.reference,
                                    n = M(t.instance.modifiers, (function (t) {
                                        return "preventOverflow" === t.name
                                    })).boundaries;
                                if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                                    if (!0 === t.hide) return t;
                                    t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                                } else {
                                    if (!1 === t.hide) return t;
                                    t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                                }
                                return t
                            }
                        },
                        computeStyle: {
                            order: 850,
                            enabled: !0,
                            fn: function (t, e) {
                                var n = e.x,
                                    i = e.y,
                                    o = t.offsets.popper,
                                    r = M(t.instance.modifiers, (function (t) {
                                        return "applyStyle" === t.name
                                    })).gpuAcceleration;
                                void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                var s = void 0 !== r ? r : e.gpuAcceleration,
                                    a = d(t.instance.popper),
                                    l = D(a),
                                    c = {
                                        position: o.position
                                    },
                                    u = function (t, e) {
                                        var n = t.offsets,
                                            i = n.popper,
                                            o = n.reference,
                                            r = Math.round,
                                            s = Math.floor,
                                            a = function (t) {
                                                return t
                                            },
                                            l = r(o.width),
                                            c = r(i.width),
                                            u = -1 !== ["left", "right"].indexOf(t.placement),
                                            f = -1 !== t.placement.indexOf("-"),
                                            h = e ? u || f || l % 2 == c % 2 ? r : s : a,
                                            d = e ? r : a;
                                        return {
                                            left: h(l % 2 == 1 && c % 2 == 1 && !f && e ? i.left - 1 : i.left),
                                            top: d(i.top),
                                            bottom: d(i.bottom),
                                            right: h(i.right)
                                        }
                                    }(t, window.devicePixelRatio < 2 || !X),
                                    f = "bottom" === n ? "top" : "bottom",
                                    h = "right" === i ? "left" : "right",
                                    p = U("transform"),
                                    m = void 0,
                                    g = void 0;
                                if (g = "bottom" === f ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, m = "right" === h ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && p) c[p] = "translate3d(" + m + "px, " + g + "px, 0)", c[f] = 0, c[h] = 0, c.willChange = "transform";
                                else {
                                    var v = "bottom" === f ? -1 : 1,
                                        _ = "right" === h ? -1 : 1;
                                    c[f] = g * v, c[h] = m * _, c.willChange = f + ", " + h
                                }
                                var b = {
                                    "x-placement": t.placement
                                };
                                return t.attributes = T({}, b, t.attributes), t.styles = T({}, c, t.styles), t.arrowStyles = T({}, t.offsets.arrow, t.arrowStyles), t
                            },
                            gpuAcceleration: !0,
                            x: "bottom",
                            y: "right"
                        },
                        applyStyle: {
                            order: 900,
                            enabled: !0,
                            fn: function (t) {
                                var e, n;
                                return $(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach((function (t) {
                                    !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                                })), t.arrowElement && Object.keys(t.arrowStyles).length && $(t.arrowElement, t.arrowStyles), t
                            },
                            onLoad: function (t, e, n, i, o) {
                                var r = L(o, e, t, n.positionFixed),
                                    s = P(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                return e.setAttribute("x-placement", s), $(e, {
                                    position: n.positionFixed ? "fixed" : "absolute"
                                }), n
                            },
                            gpuAcceleration: void 0
                        }
                    }
                },
                st = function () {
                    function t(e, n) {
                        var i = this,
                            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        w(this, t), this.scheduleUpdate = function () {
                            return requestAnimationFrame(i.update)
                        }, this.update = o(this.update.bind(this)), this.options = T({}, t.Defaults, s), this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: []
                        }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(T({}, t.Defaults.modifiers, s.modifiers)).forEach((function (e) {
                            i.options.modifiers[e] = T({}, t.Defaults.modifiers[e] || {}, s.modifiers ? s.modifiers[e] : {})
                        })), this.modifiers = Object.keys(this.options.modifiers).map((function (t) {
                            return T({
                                name: t
                            }, i.options.modifiers[t])
                        })).sort((function (t, e) {
                            return t.order - e.order
                        })), this.modifiers.forEach((function (t) {
                            t.enabled && r(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                        })), this.update();
                        var a = this.options.eventsEnabled;
                        a && this.enableEventListeners(), this.state.eventsEnabled = a
                    }
                    return E(t, [{
                        key: "update",
                        value: function () {
                            return q.call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            return B.call(this)
                        }
                    }, {
                        key: "enableEventListeners",
                        value: function () {
                            return V.call(this)
                        }
                    }, {
                        key: "disableEventListeners",
                        value: function () {
                            return z.call(this)
                        }
                    }]), t
                }();
            st.Utils = ("undefined" != typeof window ? window : t).PopperUtils, st.placements = G, st.Defaults = rt, e.default = st
        }.call(this, n(2))
}, function (t, e) {
    ! function () {
        if ("function" == typeof window.CustomEvent) return !1;

        function t(t, e) {
            e = e || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
        }
        t.prototype = window.Event.prototype, window.CustomEvent = t
    }()
}, function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
        if (e = e.split(":")[0], !(t = +t)) return !1;
        switch (e) {
            case "http":
            case "ws":
                return 80 !== t;
            case "https":
            case "wss":
                return 443 !== t;
            case "ftp":
                return 21 !== t;
            case "gopher":
                return 70 !== t;
            case "file":
                return !1
        }
        return 0 !== t
    }
}, function (t, e, n) {
    "use strict";
    var i = Object.prototype.hasOwnProperty;

    function o(t) {
        try {
            return decodeURIComponent(t.replace(/\+/g, " "))
        } catch (t) {
            return null
        }
    }
    e.stringify = function (t, e) {
        e = e || "";
        var n, o, r = [];
        for (o in "string" != typeof e && (e = "?"), t)
            if (i.call(t, o)) {
                if ((n = t[o]) || null != n && !isNaN(n) || (n = ""), o = encodeURIComponent(o), n = encodeURIComponent(n), null === o || null === n) continue;
                r.push(o + "=" + n)
            } return r.length ? e + r.join("&") : ""
    }, e.parse = function (t) {
        for (var e, n = /([^=?&]+)=?([^&]*)/g, i = {}; e = n.exec(t);) {
            var r = o(e[1]),
                s = o(e[2]);
            null === r || null === s || r in i || (i[r] = s)
        }
        return i
    }
}, function (t, e, n) {
    "use strict";
    var i = n(0),
        o = n.n(i),
        r = n(3),
        s = n.n(r);

    function a(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var l = function (t, e) {
            var n = e.hostname,
                i = e.pathname,
                o = e.localPathName;
            return t.queryAll("referrals", {
                query: {
                    host: n,
                    path: i,
                    local_path: o
                }
            })[0]
        },
        c = function (t, e) {
            var n = e.hostname,
                i = e.pathname,
                o = e.query,
                r = e.localPathName,
                s = e.localQuery,
                a = Date.now() / 1e3 | 0;
            t.insert("referrals", {
                host: n,
                path: i,
                query: o,
                local_path: r,
                local_query: s,
                visits: [a]
            }), t.commit()
        },
        u = function (t, e) {
            var n = Date.now() / 1e3 | 0;
            t.update("referrals", {
                ID: e.ID
            }, (function (t) {
                return t.visits = [].concat(a(e.visits.slice(0, 15)), [n]), t
            })), t.commit()
        },
        f = function (t) {
            var e = t.queryAll("referrals", {
                sort: [
                    ["ID", "ASC"]
                ]
            }).map((function (t) {
                return t.ID
            })).slice(-15);
            t.deleteRows("referrals", (function (t) {
                return !e.includes(t.ID)
            })), t.commit()
        },
        h = function () {
            var t = new CustomEvent("new-referral", {
                detail: {
                    hazcheeseburger: !0
                }
            });
            document.body.dispatchEvent(t)
        },
        d = function () {
            var t = document.referrer,
                e = function () {
                    var t = new s.a("referrals", localStorage);
                    return t.isNew() && t.createTable("referrals", ["host", "path", "local_path", "query", "local_query", "visits"]), t.commit(), t
                }(),
                n = new o.a(location.href, !0),
                i = n.query,
                r = n.pathname;
            if (!t) return (a = l(e, {
                hostname: "direct",
                pathname: "/",
                localPathName: r
            })) ? u(e, a) : c(e, {
                hostname: "direct",
                pathname: "/",
                query: {},
                localPathName: r,
                localQuery: i
            }), f(e), void h();
            var a, d = new o.a(t, !0),
                p = d.pathname,
                m = d.hostname,
                g = d.query;
            m !== location.hostname && ((a = l(e, {
                hostname: m,
                pathname: p,
                localPathName: r
            })) ? u(e, a) : c(e, {
                hostname: m,
                pathname: p,
                query: g,
                localPathName: r,
                localQuery: i
            }), f(e), h())
        };

    function p(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var m = function (t, e) {
        [].concat(p(document.getElementsByName("data[params][options]")), p(document.getElementsByName("data[options]"))).map((function (n) {
            var i = JSON.parse(n.value || "{}");
            i[t] = e, n.value = JSON.stringify(i)
        }))
    };

    function g() {
        var t = window.growsumo ? window.growsumo.data.partner_key : void 0;
        if (t) {
            var e = {
                affiliateName: "growsumo",
                customerKey: "cus_" + Math.random().toString(36).substr(2, 10),
                partnerKey: t
            };
            growsumo.data.customer_key = e.customerKey, m("affiliates", e)
        }
    }

    function v() {
        var t = ((JSON.parse(localStorage.getItem("db_referrals") || "{}") || {}).data || {}).referrals || [];
        m("referrals", Object.values(t))
    }
    var _ = {
        init: function () {
            this.initPaymoReferral(), this.initMatomoReferral(), this.initGrowsumoReferral()
        },
        initPaymoReferral: function () {
            document.body.addEventListener("new-referral", (function (t) {
                v()
            })), v()
        },
        initMatomoReferral: function () {
            _paq.push([function () {
                void 0 !== Matomo && m("matomoReferral", Matomo.getAsyncTracker().getAttributionReferrerUrl())
            }])
        },
        initGrowsumoReferral: function () {
            setTimeout(g, 5e3)
        }
    };
    n(7), d(), _.init(), $((function () {
        var t, e, n;

        function i() {
            var t = $(this).find(".modal-dialog");
            t.css("margin-top", Math.max(0, ($(window).height() - t.height()) / 2))
        }
        t = $("a.nav-link"), e = ".nav-item a[href='" + window.location.pathname + "']", t.on("click", (function () {
                t.removeClass("current-page")
            })), $(e).addClass("current-page"), 0 !== $(window).scrollTop() && $(".navbar").css({
                "border-bottom": "1px solid #ebebeb",
                "box-shadow": "0px 4px 10px 0px rgba(0,0,0,0.07)"
            }), $(document).scroll((function () {
                0 === $(window).scrollTop() ? $(".navbar").css({
                    "border-bottom": "1px solid #fff",
                    "box-shadow": "none"
                }) : $(".navbar").css({
                    "border-bottom": "1px solid #ebebeb",
                    "box-shadow": "0px 4px 10px 0px rgba(0,0,0,0.07)"
                })
            })), n = window.location.pathname, ["/pricing/", "/spread-the-word/", "/small-office-plan/", "/task-management-software/", "/affiliates/"].includes(n) || $("a[href^='#']").on("click", (function (t) {
                t.preventDefault();
                var e = $(this.hash),
                    n = e && e.offset(),
                    i = n ? n.top - 130 : 0;
                n && $("html, body").animate({
                    scrollTop: i
                }, 50, (function () {}))
            })), $(".modal").on("shown.bs.modal", i), $(window).on("resize", (function () {
                $(".modal:visible").each(i)
            })),
            function () {
                var t = document.createElement("script");
                t.src = "https://snippet.growsumo.com/growsumo.min.js", t.type = "text/javascript", t.async = "true", t.onload = t.onreadystatechange = function () {
                    var t = this.readyState;
                    if (!t || "complete" == t || "loaded" == t) try {
                        growsumo._initialize("pk_9gh4RRHAPzQdmS6qTvB7zbADm8XUA7pw"), "function" == typeof growsumoInit && growsumoInit()
                    } catch (t) {}
                };
                var e = document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(t, e)
            }(), window.navigator && navigator.serviceWorker && navigator.serviceWorker.getRegistrations().then((function (t) {
                var e = !0,
                    n = !1,
                    i = void 0;
                try {
                    for (var o, r = t[Symbol.iterator](); !(e = (o = r.next()).done); e = !0) {
                        o.value.unregister()
                    }
                } catch (t) {
                    n = !0, i = t
                } finally {
                    try {
                        e || null == r.return || r.return()
                    } finally {
                        if (n) throw i
                    }
                }
            }))
    }))
}, , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    n.r(e);
    n(4), n(38), n(5), n(10);
    var i = n(1),
        o = n.n(i);
    null === localStorage.getItem("buyers-guide") && (localStorage.setItem("buyers-guide", "on"), o()(".buyers-guide").css("display", "flex")), "off" === localStorage.getItem("buyers-guide") && o()(".buyers-guide").css("display", "none"), o()(".close-btn").on("click", (function () {
        o()(".buyers-guide").css("display", "none"), localStorage.setItem("buyers-guide", "off")
    })), o()((function () {
        var t, e = o()(".features-menu a"),
            n = (t = {}, function (e, n, i) {
                i || (i = "Don't call this twice without a uniqueId"), t[i] && clearTimeout(t[i]), t[i] = setTimeout(e, n)
            });
        o()(window).resize((function () {
            n((function () {
                o()(".features-menu-link.active-link").trigger("click")
            }), 200, "some unique string")
        }));
        var i = 1;

        function r() {
            return i
        }
        e.on("click", (function () {
            var t, n, r, u, f, h;
            e.removeClass("active-link"), o()(this).addClass("active-link"), t = o()(this).find("span[key-feature]").attr("key-feature"), n = s[0 == t ? 0 : t - 1].type, r = o()("div[feature-type='" + n + "']").find(".clickable-div-style").first(), o()(".features-options > div").removeClass("d-block").addClass("d-none"), f = Number(t), h = ".features-options > div:nth-child(" + f + ") ", o()(h).removeClass("d-none").addClass("d-block"), u = Number(t), i = u, l(0, a()), c(r)
        })), e.on("click", (function () {
            var t = o()(this).position().left,
                e = o()(this).width();
            o()(".features-selection").animate({
                width: e + 60,
                left: t
            }, {
                duration: 100
            })
        }));
        var s = [{
            type: "task_management",
            path: "features/Task-Management/",
            images: ["tasks-tasklists-kanban-0.png", "advanced-task-management-0.png", "schedule-and-monitor-activities-0.png", "real-time-task-comments-0.png"]
        }, {
            type: "time_tracking",
            path: "features/Time-Tracking/",
            images: ["desktop-and-mobile-apps-0.png", "multiple-timesheet-views-0.png", "automatic-time-tracking-0.png", "integrated-online-timer-0.png"]
        }, {
            type: "timesheet_reporting",
            path: "features/Timesheet-Reporting/",
            images: ["satic-and-live-updating-time-reports-0.png", "share-reports-with-clients-1.png", "customizable-report-builder-0.png", "visual-reports-0.png"]
        }, {
            type: "team_scheduling",
            path: "features/Team-Scheduling/",
            images: ["birds-eye-view-of-team-utilisation-0.png", "employee-and-project-schedules-timeline-0.png", "automatic-bookings-0.png", "built-in-leave-planner-0.png"]
        }, {
            type: "invoicing",
            path: "features/Invoicing/",
            images: ["create-estimates-based-on-project-data-0.png", "multi-language-invoices-0.png", "add-and-track-expenses-0.png", "accept-online-payments-0.png"]
        }, {
            type: "integrations",
            path: "features/Integrations/",
            images: ["gsuite-google-apps-integration-0.png", "slack-integration-0.png", "quickbooks-xero-integration-0.png", "zapier-integration-paymo-api-0.png"]
        }];

        function a() {
            return o()(".features-img").attr("src").split("features/")[0]
        }

        function l(t, e) {
            var n = r(),
                i = s[n - 1],
                a = e + (i.path + i.images[Number(t)]),
                l = a + " 1x, " + a.split(".png")[0] + "@2x.png 2x";
            o()(".features-img").attr("src", a), o()(".features-img").attr("srcset", l)
        }

        function c(t) {
            var e = o()(".clickable-div-style");
            e.find(".active-feature").removeClass("active-feature"), e.find("h5").removeClass("text-teal"), t.find(".icon-arrow").addClass("active-feature"), t.find("h5").addClass("text-teal")
        }
        o()(".clickable-div-style").on("click", (function () {
            var t = o()(this);
            l(o()(this).attr("value"), a()), c(t)
        }));
        var u = o()(".embed-responsive");
        o()("#YoutubeModal").on("show.bs.modal", (function (t) {
            o()("a.video");
            var e = o()(t.relatedTarget).data("youtubeid");
            jQuery("<iframe />", {
                name: "videoframe",
                id: "videoframe",
                src: "https://youtube.com/embed/" + e + "?rel=0&amp;autoplay=1&amp;showinfo=0",
                frameborder: 0,
                class: "youtube-player",
                type: "text/html",
                allowfullscreen: !0
            }).appendTo(u)
        })), o()("#YoutubeModal").on("hide.bs.modal", (function (t) {
            o()("div.embed-responsive").html("")
        }))
    }))
}, function (t, e, n) {}]);