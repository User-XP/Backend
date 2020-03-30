function showAlert(t, e) {
    toastr[t](e)
}

function toast(t, e) {
    "redirect" == t && (t = "info"), toastr[t](e)
}

function logout() {
    let t = document.head.querySelector('meta[name="jwt-cookie"]');
    if (t) {
        let e = t.content;
        console.log(e), e && (document.cookie = e + "=;domain=.lambdatest.com;expires=Thu, 01 Jan 1970 00:00:01 GMT;")
    }
}! function (t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t()
}(function () {
    return function t(e, i, n) {
        function o(r, s) {
            if (!i[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(r, !0);
                    if (a) return a(r, !0);
                    var d = new Error("Cannot find module '" + r + "'");
                    throw d.code = "MODULE_NOT_FOUND", d
                }
                var u = i[r] = {
                    exports: {}
                };
                e[r][0].call(u.exports, function (t) {
                    return o(e[r][1][t] || t)
                }, u, u.exports, t, e, i, n)
            }
            return i[r].exports
        }
        for (var a = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
        return o
    }({
        1: [function (t, e, i) {
            var n = t(5);

            function o(t) {
                if (t) {
                    var e = [0, 0, 0],
                        i = 1,
                        o = t.match(/^#([a-fA-F0-9]{3})$/i);
                    if (o) {
                        o = o[1];
                        for (var a = 0; a < e.length; a++) e[a] = parseInt(o[a] + o[a], 16)
                    } else if (o = t.match(/^#([a-fA-F0-9]{6})$/i))
                        for (o = o[1], a = 0; a < e.length; a++) e[a] = parseInt(o.slice(2 * a, 2 * a + 2), 16);
                    else if (o = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (a = 0; a < e.length; a++) e[a] = parseInt(o[a + 1]);
                        i = parseFloat(o[4])
                    } else if (o = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (a = 0; a < e.length; a++) e[a] = Math.round(2.55 * parseFloat(o[a + 1]));
                        i = parseFloat(o[4])
                    } else if (o = t.match(/(\w+)/)) {
                        if ("transparent" == o[1]) return [0, 0, 0, 0];
                        if (!(e = n[o[1]])) return
                    }
                    for (a = 0; a < e.length; a++) e[a] = u(e[a], 0, 255);
                    return i = i || 0 == i ? u(i, 0, 1) : 1, e[3] = i, e
                }
            }

            function a(t) {
                if (t) {
                    var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (e) {
                        var i = parseFloat(e[4]);
                        return [u(parseInt(e[1]), 0, 360), u(parseFloat(e[2]), 0, 100), u(parseFloat(e[3]), 0, 100), u(isNaN(i) ? 1 : i, 0, 1)]
                    }
                }
            }

            function r(t) {
                if (t) {
                    var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (e) {
                        var i = parseFloat(e[4]);
                        return [u(parseInt(e[1]), 0, 360), u(parseFloat(e[2]), 0, 100), u(parseFloat(e[3]), 0, 100), u(isNaN(i) ? 1 : i, 0, 1)]
                    }
                }
            }

            function s(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            }

            function l(t, e) {
                return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
            }

            function d(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            }

            function u(t, e, i) {
                return Math.min(Math.max(e, t), i)
            }

            function h(t) {
                var e = t.toString(16).toUpperCase();
                return e.length < 2 ? "0" + e : e
            }
            e.exports = {
                getRgba: o,
                getHsla: a,
                getRgb: function (t) {
                    var e = o(t);
                    return e && e.slice(0, 3)
                },
                getHsl: function (t) {
                    var e = a(t);
                    return e && e.slice(0, 3)
                },
                getHwb: r,
                getAlpha: function (t) {
                    var e = o(t);
                    return e ? e[3] : (e = a(t)) ? e[3] : (e = r(t)) ? e[3] : void 0
                },
                hexString: function (t) {
                    return "#" + h(t[0]) + h(t[1]) + h(t[2])
                },
                rgbString: function (t, e) {
                    return e < 1 || t[3] && t[3] < 1 ? s(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                },
                rgbaString: s,
                percentString: function (t, e) {
                    return e < 1 || t[3] && t[3] < 1 ? l(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)"
                },
                percentaString: l,
                hslString: function (t, e) {
                    return e < 1 || t[3] && t[3] < 1 ? d(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
                },
                hslaString: d,
                hwbString: function (t, e) {
                    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
                },
                keyword: function (t) {
                    return c[t.slice(0, 3)]
                }
            };
            var c = {};
            for (var f in n) c[n[f]] = f
        }, {
            5: 5
        }],
        2: [function (t, e, i) {
            var n = t(4),
                o = t(1),
                a = function (t) {
                    return t instanceof a ? t : this instanceof a ? (this.valid = !1, this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1
                    }, void("string" == typeof t ? (e = o.getRgba(t)) ? this.setValues("rgb", e) : (e = o.getHsla(t)) ? this.setValues("hsl", e) : (e = o.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new a(t);
                    var e
                };
            a.prototype = {
                isValid: function () {
                    return this.valid
                },
                rgb: function () {
                    return this.setSpace("rgb", arguments)
                },
                hsl: function () {
                    return this.setSpace("hsl", arguments)
                },
                hsv: function () {
                    return this.setSpace("hsv", arguments)
                },
                hwb: function () {
                    return this.setSpace("hwb", arguments)
                },
                cmyk: function () {
                    return this.setSpace("cmyk", arguments)
                },
                rgbArray: function () {
                    return this.values.rgb
                },
                hslArray: function () {
                    return this.values.hsl
                },
                hsvArray: function () {
                    return this.values.hsv
                },
                hwbArray: function () {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                },
                cmykArray: function () {
                    return this.values.cmyk
                },
                rgbaArray: function () {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                },
                hslaArray: function () {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                },
                alpha: function (t) {
                    return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                },
                red: function (t) {
                    return this.setChannel("rgb", 0, t)
                },
                green: function (t) {
                    return this.setChannel("rgb", 1, t)
                },
                blue: function (t) {
                    return this.setChannel("rgb", 2, t)
                },
                hue: function (t) {
                    return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                },
                saturation: function (t) {
                    return this.setChannel("hsl", 1, t)
                },
                lightness: function (t) {
                    return this.setChannel("hsl", 2, t)
                },
                saturationv: function (t) {
                    return this.setChannel("hsv", 1, t)
                },
                whiteness: function (t) {
                    return this.setChannel("hwb", 1, t)
                },
                blackness: function (t) {
                    return this.setChannel("hwb", 2, t)
                },
                value: function (t) {
                    return this.setChannel("hsv", 2, t)
                },
                cyan: function (t) {
                    return this.setChannel("cmyk", 0, t)
                },
                magenta: function (t) {
                    return this.setChannel("cmyk", 1, t)
                },
                yellow: function (t) {
                    return this.setChannel("cmyk", 2, t)
                },
                black: function (t) {
                    return this.setChannel("cmyk", 3, t)
                },
                hexString: function () {
                    return o.hexString(this.values.rgb)
                },
                rgbString: function () {
                    return o.rgbString(this.values.rgb, this.values.alpha)
                },
                rgbaString: function () {
                    return o.rgbaString(this.values.rgb, this.values.alpha)
                },
                percentString: function () {
                    return o.percentString(this.values.rgb, this.values.alpha)
                },
                hslString: function () {
                    return o.hslString(this.values.hsl, this.values.alpha)
                },
                hslaString: function () {
                    return o.hslaString(this.values.hsl, this.values.alpha)
                },
                hwbString: function () {
                    return o.hwbString(this.values.hwb, this.values.alpha)
                },
                keyword: function () {
                    return o.keyword(this.values.rgb, this.values.alpha)
                },
                rgbNumber: function () {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                },
                luminosity: function () {
                    for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                        var n = t[i] / 255;
                        e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                },
                contrast: function (t) {
                    var e = this.luminosity(),
                        i = t.luminosity();
                    return i < e ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
                },
                level: function (t) {
                    var e = this.contrast(t);
                    return 7.1 <= e ? "AAA" : 4.5 <= e ? "AA" : ""
                },
                dark: function () {
                    var t = this.values.rgb;
                    return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                },
                light: function () {
                    return !this.dark()
                },
                negate: function () {
                    for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t), this
                },
                lighten: function (t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t, this.setValues("hsl", e), this
                },
                darken: function (t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t, this.setValues("hsl", e), this
                },
                saturate: function (t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t, this.setValues("hsl", e), this
                },
                desaturate: function (t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t, this.setValues("hsl", e), this
                },
                whiten: function (t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t, this.setValues("hwb", e), this
                },
                blacken: function (t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t, this.setValues("hwb", e), this
                },
                greyscale: function () {
                    var t = this.values.rgb,
                        e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [e, e, e]), this
                },
                clearer: function (t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t), this
                },
                opaquer: function (t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t), this
                },
                rotate: function (t) {
                    var e = this.values.hsl,
                        i = (e[0] + t) % 360;
                    return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
                },
                mix: function (t, e) {
                    var i = this,
                        n = t,
                        o = void 0 === e ? .5 : e,
                        a = 2 * o - 1,
                        r = i.alpha() - n.alpha(),
                        s = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2,
                        l = 1 - s;
                    return this.rgb(s * i.red() + l * n.red(), s * i.green() + l * n.green(), s * i.blue() + l * n.blue()).alpha(i.alpha() * o + n.alpha() * (1 - o))
                },
                toJSON: function () {
                    return this.rgb()
                },
                clone: function () {
                    var t, e, i = new a,
                        n = this.values,
                        o = i.values;
                    for (var r in n) n.hasOwnProperty(r) && (t = n[r], "[object Array]" === (e = {}.toString.call(t)) ? o[r] = t.slice(0) : "[object Number]" === e ? o[r] = t : console.error("unexpected color value:", t));
                    return i
                }
            }, a.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, a.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, a.prototype.getValues = function (t) {
                for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
                return 1 !== e.alpha && (i.a = e.alpha), i
            }, a.prototype.setValues = function (t, e) {
                var i, o, a = this.values,
                    r = this.spaces,
                    s = this.maxes,
                    l = 1;
                if (this.valid = !0, "alpha" === t) l = e;
                else if (e.length) a[t] = e.slice(0, t.length), l = e[t.length];
                else if (void 0 !== e[t.charAt(0)]) {
                    for (i = 0; i < t.length; i++) a[t][i] = e[t.charAt(i)];
                    l = e.a
                } else if (void 0 !== e[r[t][0]]) {
                    var d = r[t];
                    for (i = 0; i < t.length; i++) a[t][i] = e[d[i]];
                    l = e.alpha
                }
                if (a.alpha = Math.max(0, Math.min(1, void 0 === l ? a.alpha : l)), "alpha" === t) return !1;
                for (i = 0; i < t.length; i++) o = Math.max(0, Math.min(s[t][i], a[t][i])), a[t][i] = Math.round(o);
                for (var u in r) u !== t && (a[u] = n[t][u](a[t]));
                return !0
            }, a.prototype.setSpace = function (t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
            }, a.prototype.setChannel = function (t, e, i) {
                var n = this.values[t];
                return void 0 === i ? n[e] : (i === n[e] || (n[e] = i, this.setValues(t, n)), this)
            }, "undefined" != typeof window && (window.Color = a), e.exports = a
        }, {
            1: 1,
            4: 4
        }],
        3: [function (t, e, i) {
            function n(t) {
                var e, i, n = t[0] / 255,
                    o = t[1] / 255,
                    a = t[2] / 255,
                    r = Math.min(n, o, a),
                    s = Math.max(n, o, a),
                    l = s - r;
                return s == r ? e = 0 : n == s ? e = (o - a) / l : o == s ? e = 2 + (a - n) / l : a == s && (e = 4 + (n - o) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (r + s) / 2, [e, 100 * (s == r ? 0 : i <= .5 ? l / (s + r) : l / (2 - s - r)), 100 * i]
            }

            function o(t) {
                var e, i, n = t[0],
                    o = t[1],
                    a = t[2],
                    r = Math.min(n, o, a),
                    s = Math.max(n, o, a),
                    l = s - r;
                return i = 0 == s ? 0 : l / s * 1e3 / 10, s == r ? e = 0 : n == s ? e = (o - a) / l : o == s ? e = 2 + (a - n) / l : a == s && (e = 4 + (n - o) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10]
            }

            function a(t) {
                var e = t[0],
                    i = t[1],
                    o = t[2];
                return [n(t)[0], 1 / 255 * Math.min(e, Math.min(i, o)) * 100, 100 * (o = 1 - 1 / 255 * Math.max(e, Math.max(i, o)))]
            }

            function s(t) {
                var e, i = t[0] / 255,
                    n = t[1] / 255,
                    o = t[2] / 255;
                return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - o))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - o - e) / (1 - e) || 0), 100 * e]
            }

            function l(t) {
                return M[JSON.stringify(t)]
            }

            function d(t) {
                var e = t[0] / 255,
                    i = t[1] / 255,
                    n = t[2] / 255;
                return [100 * (.4124 * (e = .04045 < e ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = .04045 < i ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = .04045 < n ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)]
            }

            function u(t) {
                var e = d(t),
                    i = e[0],
                    n = e[1],
                    o = e[2];
                return n /= 100, o /= 108.883, i = .008856 < (i /= 95.047) ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = .008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (o = .008856 < o ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))]
            }

            function h(t) {
                var e, i, n, o, a, r = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100;
                if (0 == s) return [a = 255 * l, a, a];
                e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), o = [0, 0, 0];
                for (var d = 0; d < 3; d++)(n = r + 1 / 3 * -(d - 1)) < 0 && n++, 1 < n && n--, a = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, o[d] = 255 * a;
                return o
            }

            function c(t) {
                var e = t[0] / 60,
                    i = t[1] / 100,
                    n = t[2] / 100,
                    o = Math.floor(e) % 6,
                    a = e - Math.floor(e),
                    r = 255 * n * (1 - i),
                    s = 255 * n * (1 - i * a),
                    l = 255 * n * (1 - i * (1 - a));
                switch (n *= 255, o) {
                    case 0:
                        return [n, l, r];
                    case 1:
                        return [s, n, r];
                    case 2:
                        return [r, n, l];
                    case 3:
                        return [r, s, n];
                    case 4:
                        return [l, r, n];
                    case 5:
                        return [n, r, s]
                }
            }

            function f(t) {
                var e, i, n, o, a = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100,
                    d = s + l;
                switch (1 < d && (s /= d, l /= d), n = 6 * a - (e = Math.floor(6 * a)), 0 != (1 & e) && (n = 1 - n), o = s + n * ((i = 1 - l) - s), e) {
                    default:
                    case 6:
                    case 0:
                        r = i, g = o, b = s;
                        break;
                    case 1:
                        r = o, g = i, b = s;
                        break;
                    case 2:
                        r = s, g = i, b = o;
                        break;
                    case 3:
                        r = s, g = o, b = i;
                        break;
                    case 4:
                        r = o, g = s, b = i;
                        break;
                    case 5:
                        r = i, g = s, b = o
                }
                return [255 * r, 255 * g, 255 * b]
            }

            function p(t) {
                var e = t[0] / 100,
                    i = t[1] / 100,
                    n = t[2] / 100,
                    o = t[3] / 100;
                return [255 * (1 - Math.min(1, e * (1 - o) + o)), 255 * (1 - Math.min(1, i * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o))]
            }

            function m(t) {
                var e, i, n, o = t[0] / 100,
                    a = t[1] / 100,
                    r = t[2] / 100;
                return i = -.9689 * o + 1.8758 * a + .0415 * r, n = .0557 * o + -.204 * a + 1.057 * r, e = .0031308 < (e = 3.2406 * o + -1.5372 * a + -.4986 * r) ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = .0031308 < i ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = .0031308 < n ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
            }

            function v(t) {
                var e = t[0],
                    i = t[1],
                    n = t[2];
                return i /= 100, n /= 108.883, e = .008856 < (e /= 95.047) ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = .008856 < i ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = .008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
            }

            function y(t) {
                var e, i, n, o, a = t[0],
                    r = t[1],
                    s = t[2];
                return o = a <= 8 ? (i = 100 * a / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((a + 16) / 116, 3), Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + o - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + o, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (o - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(o - s / 200, 3)]
            }

            function x(t) {
                var e, i = t[0],
                    n = t[1],
                    o = t[2];
                return (e = 360 * Math.atan2(o, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + o * o), e]
            }

            function _(t) {
                return m(y(t))
            }

            function w(t) {
                var e, i = t[0],
                    n = t[1];
                return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)]
            }

            function S(t) {
                return k[t]
            }
            e.exports = {
                rgb2hsl: n,
                rgb2hsv: o,
                rgb2hwb: a,
                rgb2cmyk: s,
                rgb2keyword: l,
                rgb2xyz: d,
                rgb2lab: u,
                rgb2lch: function (t) {
                    return x(u(t))
                },
                hsl2rgb: h,
                hsl2hsv: function (t) {
                    var e = t[0],
                        i = t[1] / 100,
                        n = t[2] / 100;
                    return 0 !== n ? [e, 2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i) * 100, (n + i) / 2 * 100] : [0, 0, 0]
                },
                hsl2hwb: function (t) {
                    return a(h(t))
                },
                hsl2cmyk: function (t) {
                    return s(h(t))
                },
                hsl2keyword: function (t) {
                    return l(h(t))
                },
                hsv2rgb: c,
                hsv2hsl: function (t) {
                    var e, i, n = t[0],
                        o = t[1] / 100,
                        a = t[2] / 100;
                    return e = o * a, [n, 100 * (e = (e /= (i = (2 - o) * a) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)]
                },
                hsv2hwb: function (t) {
                    return a(c(t))
                },
                hsv2cmyk: function (t) {
                    return s(c(t))
                },
                hsv2keyword: function (t) {
                    return l(c(t))
                },
                hwb2rgb: f,
                hwb2hsl: function (t) {
                    return n(f(t))
                },
                hwb2hsv: function (t) {
                    return o(f(t))
                },
                hwb2cmyk: function (t) {
                    return s(f(t))
                },
                hwb2keyword: function (t) {
                    return l(f(t))
                },
                cmyk2rgb: p,
                cmyk2hsl: function (t) {
                    return n(p(t))
                },
                cmyk2hsv: function (t) {
                    return o(p(t))
                },
                cmyk2hwb: function (t) {
                    return a(p(t))
                },
                cmyk2keyword: function (t) {
                    return l(p(t))
                },
                keyword2rgb: S,
                keyword2hsl: function (t) {
                    return n(S(t))
                },
                keyword2hsv: function (t) {
                    return o(S(t))
                },
                keyword2hwb: function (t) {
                    return a(S(t))
                },
                keyword2cmyk: function (t) {
                    return s(S(t))
                },
                keyword2lab: function (t) {
                    return u(S(t))
                },
                keyword2xyz: function (t) {
                    return d(S(t))
                },
                xyz2rgb: m,
                xyz2lab: v,
                xyz2lch: function (t) {
                    return x(v(t))
                },
                lab2xyz: y,
                lab2rgb: _,
                lab2lch: x,
                lch2lab: w,
                lch2xyz: function (t) {
                    return y(w(t))
                },
                lch2rgb: function (t) {
                    return _(w(t))
                }
            };
            var k = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                },
                M = {};
            for (var C in k) M[JSON.stringify(k[C])] = C
        }, {}],
        4: [function (t, e, i) {
            var n = t(3),
                o = function () {
                    return new d
                };
            for (var a in n) {
                o[a + "Raw"] = function (t) {
                    return function (e) {
                        return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e)
                    }
                }(a);
                var r = /(\w+)2(\w+)/.exec(a),
                    s = r[1],
                    l = r[2];
                (o[s] = o[s] || {})[l] = o[a] = function (t) {
                    return function (e) {
                        "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                        var i = n[t](e);
                        if ("string" == typeof i || void 0 === i) return i;
                        for (var o = 0; o < i.length; o++) i[o] = Math.round(i[o]);
                        return i
                    }
                }(a)
            }
            var d = function () {
                this.convs = {}
            };
            d.prototype.routeSpace = function (t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
            }, d.prototype.setValues = function (t, e) {
                return this.space = t, this.convs = {}, this.convs[t] = e, this
            }, d.prototype.getValues = function (t) {
                var e = this.convs[t];
                if (!e) {
                    var i = this.space,
                        n = this.convs[i];
                    e = o[i][t](n), this.convs[t] = e
                }
                return e
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
                d.prototype[t] = function (e) {
                    return this.routeSpace(t, arguments)
                }
            }), e.exports = o
        }, {
            3: 3
        }],
        5: [function (t, e, i) {
            "use strict";
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }, {}],
        6: [function (t, e, i) {
            var n;
            n = function () {
                "use strict";
                var i, n;

                function o() {
                    return i.apply(null, arguments)
                }

                function a(t) {
                    return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
                }

                function r(t) {
                    return null != t && "[object Object]" === Object.prototype.toString.call(t)
                }

                function s(t) {
                    return void 0 === t
                }

                function l(t) {
                    return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
                }

                function d(t) {
                    return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
                }

                function u(t, e) {
                    var i, n = [];
                    for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
                    return n
                }

                function h(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }

                function c(t, e) {
                    for (var i in e) h(e, i) && (t[i] = e[i]);
                    return h(e, "toString") && (t.toString = e.toString), h(e, "valueOf") && (t.valueOf = e.valueOf), t
                }

                function f(t, e, i, n) {
                    return De(t, e, i, n, !0).utc()
                }

                function p(t) {
                    return null == t._pf && (t._pf = {
                        empty: !1,
                        unusedTokens: [],
                        unusedInput: [],
                        overflow: -2,
                        charsLeftOver: 0,
                        nullInput: !1,
                        invalidMonth: null,
                        invalidFormat: !1,
                        userInvalidated: !1,
                        iso: !1,
                        parsedDateParts: [],
                        meridiem: null,
                        rfc2822: !1,
                        weekdayMismatch: !1
                    }), t._pf
                }

                function g(t) {
                    if (null == t._isValid) {
                        var e = p(t),
                            i = n.call(e.parsedDateParts, function (t) {
                                return null != t
                            }),
                            o = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
                        if (t._strict && (o = o && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return o;
                        t._isValid = o
                    }
                    return t._isValid
                }

                function m(t) {
                    var e = f(NaN);
                    return null != t ? c(p(e), t) : p(e).userInvalidated = !0, e
                }
                n = Array.prototype.some ? Array.prototype.some : function (t) {
                    for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++)
                        if (n in e && t.call(this, e[n], n, e)) return !0;
                    return !1
                };
                var v = o.momentProperties = [];

                function y(t, e) {
                    var i, n, o;
                    if (s(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), s(e._i) || (t._i = e._i), s(e._f) || (t._f = e._f), s(e._l) || (t._l = e._l), s(e._strict) || (t._strict = e._strict), s(e._tzm) || (t._tzm = e._tzm), s(e._isUTC) || (t._isUTC = e._isUTC), s(e._offset) || (t._offset = e._offset), s(e._pf) || (t._pf = p(e)), s(e._locale) || (t._locale = e._locale), 0 < v.length)
                        for (i = 0; i < v.length; i++) s(o = e[n = v[i]]) || (t[n] = o);
                    return t
                }
                var b = !1;

                function x(t) {
                    y(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === b && (b = !0, o.updateOffset(this), b = !1)
                }

                function _(t) {
                    return t instanceof x || null != t && null != t._isAMomentObject
                }

                function w(t) {
                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                }

                function S(t) {
                    var e = +t,
                        i = 0;
                    return 0 !== e && isFinite(e) && (i = w(e)), i
                }

                function k(t, e, i) {
                    var n, o = Math.min(t.length, e.length),
                        a = Math.abs(t.length - e.length),
                        r = 0;
                    for (n = 0; n < o; n++)(i && t[n] !== e[n] || !i && S(t[n]) !== S(e[n])) && r++;
                    return r + a
                }

                function M(t) {
                    !1 === o.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
                }

                function C(t, e) {
                    var i = !0;
                    return c(function () {
                        if (null != o.deprecationHandler && o.deprecationHandler(null, t), i) {
                            for (var n, a = [], r = 0; r < arguments.length; r++) {
                                if (n = "", "object" == typeof arguments[r]) {
                                    for (var s in n += "\n[" + r + "] ", arguments[0]) n += s + ": " + arguments[0][s] + ", ";
                                    n = n.slice(0, -2)
                                } else n = arguments[r];
                                a.push(n)
                            }
                            M(t + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + (new Error).stack), i = !1
                        }
                        return e.apply(this, arguments)
                    }, e)
                }
                var D, T = {};

                function O(t, e) {
                    null != o.deprecationHandler && o.deprecationHandler(t, e), T[t] || (M(e), T[t] = !0)
                }

                function P(t) {
                    return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
                }

                function I(t, e) {
                    var i, n = c({}, t);
                    for (i in e) h(e, i) && (r(t[i]) && r(e[i]) ? (n[i] = {}, c(n[i], t[i]), c(n[i], e[i])) : null != e[i] ? n[i] = e[i] : delete n[i]);
                    for (i in t) h(t, i) && !h(e, i) && r(t[i]) && (n[i] = c({}, n[i]));
                    return n
                }

                function A(t) {
                    null != t && this.set(t)
                }
                o.suppressDeprecationWarnings = !1, o.deprecationHandler = null, D = Object.keys ? Object.keys : function (t) {
                    var e, i = [];
                    for (e in t) h(t, e) && i.push(e);
                    return i
                };
                var R = {};

                function F(t, e) {
                    var i = t.toLowerCase();
                    R[i] = R[i + "s"] = R[e] = t
                }

                function L(t) {
                    return "string" == typeof t ? R[t] || R[t.toLowerCase()] : void 0
                }

                function z(t) {
                    var e, i, n = {};
                    for (i in t) h(t, i) && (e = L(i)) && (n[e] = t[i]);
                    return n
                }
                var W = {};

                function B(t, e) {
                    W[t] = e
                }

                function E(t, e, i) {
                    var n = "" + Math.abs(t),
                        o = e - n.length;
                    return (0 <= t ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + n
                }
                var Y = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                    H = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                    N = {},
                    V = {};

                function j(t, e, i, n) {
                    var o = n;
                    "string" == typeof n && (o = function () {
                        return this[n]()
                    }), t && (V[t] = o), e && (V[e[0]] = function () {
                        return E(o.apply(this, arguments), e[1], e[2])
                    }), i && (V[i] = function () {
                        return this.localeData().ordinal(o.apply(this, arguments), t)
                    })
                }

                function $(t, e) {
                    return t.isValid() ? (e = U(e, t.localeData()), N[e] = N[e] || function (t) {
                        var e, i, n, o = t.match(Y);
                        for (e = 0, i = o.length; e < i; e++) V[o[e]] ? o[e] = V[o[e]] : o[e] = (n = o[e]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");
                        return function (e) {
                            var n, a = "";
                            for (n = 0; n < i; n++) a += P(o[n]) ? o[n].call(e, t) : o[n];
                            return a
                        }
                    }(e), N[e](t)) : t.localeData().invalidDate()
                }

                function U(t, e) {
                    var i = 5;

                    function n(t) {
                        return e.longDateFormat(t) || t
                    }
                    for (H.lastIndex = 0; 0 <= i && H.test(t);) t = t.replace(H, n), H.lastIndex = 0, i -= 1;
                    return t
                }
                var q = /\d/,
                    G = /\d\d/,
                    X = /\d{3}/,
                    Z = /\d{4}/,
                    Q = /[+-]?\d{6}/,
                    J = /\d\d?/,
                    K = /\d\d\d\d?/,
                    tt = /\d\d\d\d\d\d?/,
                    et = /\d{1,3}/,
                    it = /\d{1,4}/,
                    nt = /[+-]?\d{1,6}/,
                    ot = /\d+/,
                    at = /[+-]?\d+/,
                    rt = /Z|[+-]\d\d:?\d\d/gi,
                    st = /Z|[+-]\d\d(?::?\d\d)?/gi,
                    lt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                    dt = {};

                function ut(t, e, i) {
                    dt[t] = P(e) ? e : function (t, n) {
                        return t && i ? i : e
                    }
                }

                function ht(t, e) {
                    return h(dt, t) ? dt[t](e._strict, e._locale) : new RegExp(ct(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, i, n, o) {
                        return e || i || n || o
                    })))
                }

                function ct(t) {
                    return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }
                var ft = {};

                function pt(t, e) {
                    var i, n = e;
                    for ("string" == typeof t && (t = [t]), l(e) && (n = function (t, i) {
                            i[e] = S(t)
                        }), i = 0; i < t.length; i++) ft[t[i]] = n
                }

                function gt(t, e) {
                    pt(t, function (t, i, n, o) {
                        n._w = n._w || {}, e(t, n._w, n, o)
                    })
                }
                var mt = 0,
                    vt = 1,
                    yt = 2,
                    bt = 3,
                    xt = 4,
                    _t = 5,
                    wt = 6,
                    St = 7,
                    kt = 8;

                function Mt(t) {
                    return Ct(t) ? 366 : 365
                }

                function Ct(t) {
                    return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
                }
                j("Y", 0, 0, function () {
                    var t = this.year();
                    return t <= 9999 ? "" + t : "+" + t
                }), j(0, ["YY", 2], 0, function () {
                    return this.year() % 100
                }), j(0, ["YYYY", 4], 0, "year"), j(0, ["YYYYY", 5], 0, "year"), j(0, ["YYYYYY", 6, !0], 0, "year"), F("year", "y"), B("year", 1), ut("Y", at), ut("YY", J, G), ut("YYYY", it, Z), ut("YYYYY", nt, Q), ut("YYYYYY", nt, Q), pt(["YYYYY", "YYYYYY"], mt), pt("YYYY", function (t, e) {
                    e[mt] = 2 === t.length ? o.parseTwoDigitYear(t) : S(t)
                }), pt("YY", function (t, e) {
                    e[mt] = o.parseTwoDigitYear(t)
                }), pt("Y", function (t, e) {
                    e[mt] = parseInt(t, 10)
                }), o.parseTwoDigitYear = function (t) {
                    return S(t) + (68 < S(t) ? 1900 : 2e3)
                };
                var Dt, Tt = Ot("FullYear", !0);

                function Ot(t, e) {
                    return function (i) {
                        return null != i ? (It(this, t, i), o.updateOffset(this, e), this) : Pt(this, t)
                    }
                }

                function Pt(t, e) {
                    return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
                }

                function It(t, e, i) {
                    t.isValid() && !isNaN(i) && ("FullYear" === e && Ct(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), At(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i))
                }

                function At(t, e) {
                    if (isNaN(t) || isNaN(e)) return NaN;
                    var i = (e % 12 + 12) % 12;
                    return t += (e - i) / 12, 1 === i ? Ct(t) ? 29 : 28 : 31 - i % 7 % 2
                }
                Dt = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
                    var e;
                    for (e = 0; e < this.length; ++e)
                        if (this[e] === t) return e;
                    return -1
                }, j("M", ["MM", 2], "Mo", function () {
                    return this.month() + 1
                }), j("MMM", 0, 0, function (t) {
                    return this.localeData().monthsShort(this, t)
                }), j("MMMM", 0, 0, function (t) {
                    return this.localeData().months(this, t)
                }), F("month", "M"), B("month", 8), ut("M", J), ut("MM", J, G), ut("MMM", function (t, e) {
                    return e.monthsShortRegex(t)
                }), ut("MMMM", function (t, e) {
                    return e.monthsRegex(t)
                }), pt(["M", "MM"], function (t, e) {
                    e[vt] = S(t) - 1
                }), pt(["MMM", "MMMM"], function (t, e, i, n) {
                    var o = i._locale.monthsParse(t, n, i._strict);
                    null != o ? e[vt] = o : p(i).invalidMonth = t
                });
                var Rt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                    Ft = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    Lt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

                function zt(t, e) {
                    var i;
                    if (!t.isValid()) return t;
                    if ("string" == typeof e)
                        if (/^\d+$/.test(e)) e = S(e);
                        else if (!l(e = t.localeData().monthsParse(e))) return t;
                    return i = Math.min(t.date(), At(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
                }

                function Wt(t) {
                    return null != t ? (zt(this, t), o.updateOffset(this, !0), this) : Pt(this, "Month")
                }
                var Bt = lt,
                    Et = lt;

                function Yt() {
                    function t(t, e) {
                        return e.length - t.length
                    }
                    var e, i, n = [],
                        o = [],
                        a = [];
                    for (e = 0; e < 12; e++) i = f([2e3, e]), n.push(this.monthsShort(i, "")), o.push(this.months(i, "")), a.push(this.months(i, "")), a.push(this.monthsShort(i, ""));
                    for (n.sort(t), o.sort(t), a.sort(t), e = 0; e < 12; e++) n[e] = ct(n[e]), o[e] = ct(o[e]);
                    for (e = 0; e < 24; e++) a[e] = ct(a[e]);
                    this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
                }

                function Ht(t) {
                    var e = new Date(Date.UTC.apply(null, arguments));
                    return t < 100 && 0 <= t && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
                }

                function Nt(t, e, i) {
                    var n = 7 + e - i;
                    return -(7 + Ht(t, 0, n).getUTCDay() - e) % 7 + n - 1
                }

                function Vt(t, e, i, n, o) {
                    var a, r, s = 1 + 7 * (e - 1) + (7 + i - n) % 7 + Nt(t, n, o);
                    return r = s <= 0 ? Mt(a = t - 1) + s : s > Mt(t) ? (a = t + 1, s - Mt(t)) : (a = t, s), {
                        year: a,
                        dayOfYear: r
                    }
                }

                function jt(t, e, i) {
                    var n, o, a = Nt(t.year(), e, i),
                        r = Math.floor((t.dayOfYear() - a - 1) / 7) + 1;
                    return r < 1 ? n = r + $t(o = t.year() - 1, e, i) : r > $t(t.year(), e, i) ? (n = r - $t(t.year(), e, i), o = t.year() + 1) : (o = t.year(), n = r), {
                        week: n,
                        year: o
                    }
                }

                function $t(t, e, i) {
                    var n = Nt(t, e, i),
                        o = Nt(t + 1, e, i);
                    return (Mt(t) - n + o) / 7
                }
                j("w", ["ww", 2], "wo", "week"), j("W", ["WW", 2], "Wo", "isoWeek"), F("week", "w"), F("isoWeek", "W"), B("week", 5), B("isoWeek", 5), ut("w", J), ut("ww", J, G), ut("W", J), ut("WW", J, G), gt(["w", "ww", "W", "WW"], function (t, e, i, n) {
                    e[n.substr(0, 1)] = S(t)
                }), j("d", 0, "do", "day"), j("dd", 0, 0, function (t) {
                    return this.localeData().weekdaysMin(this, t)
                }), j("ddd", 0, 0, function (t) {
                    return this.localeData().weekdaysShort(this, t)
                }), j("dddd", 0, 0, function (t) {
                    return this.localeData().weekdays(this, t)
                }), j("e", 0, 0, "weekday"), j("E", 0, 0, "isoWeekday"), F("day", "d"), F("weekday", "e"), F("isoWeekday", "E"), B("day", 11), B("weekday", 11), B("isoWeekday", 11), ut("d", J), ut("e", J), ut("E", J), ut("dd", function (t, e) {
                    return e.weekdaysMinRegex(t)
                }), ut("ddd", function (t, e) {
                    return e.weekdaysShortRegex(t)
                }), ut("dddd", function (t, e) {
                    return e.weekdaysRegex(t)
                }), gt(["dd", "ddd", "dddd"], function (t, e, i, n) {
                    var o = i._locale.weekdaysParse(t, n, i._strict);
                    null != o ? e.d = o : p(i).invalidWeekday = t
                }), gt(["d", "e", "E"], function (t, e, i, n) {
                    e[n] = S(t)
                });
                var Ut = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    qt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    Gt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    Xt = lt,
                    Zt = lt,
                    Qt = lt;

                function Jt() {
                    function t(t, e) {
                        return e.length - t.length
                    }
                    var e, i, n, o, a, r = [],
                        s = [],
                        l = [],
                        d = [];
                    for (e = 0; e < 7; e++) i = f([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), o = this.weekdaysShort(i, ""), a = this.weekdays(i, ""), r.push(n), s.push(o), l.push(a), d.push(n), d.push(o), d.push(a);
                    for (r.sort(t), s.sort(t), l.sort(t), d.sort(t), e = 0; e < 7; e++) s[e] = ct(s[e]), l[e] = ct(l[e]), d[e] = ct(d[e]);
                    this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
                }

                function Kt() {
                    return this.hours() % 12 || 12
                }

                function te(t, e) {
                    j(t, 0, 0, function () {
                        return this.localeData().meridiem(this.hours(), this.minutes(), e)
                    })
                }

                function ee(t, e) {
                    return e._meridiemParse
                }
                j("H", ["HH", 2], 0, "hour"), j("h", ["hh", 2], 0, Kt), j("k", ["kk", 2], 0, function () {
                    return this.hours() || 24
                }), j("hmm", 0, 0, function () {
                    return "" + Kt.apply(this) + E(this.minutes(), 2)
                }), j("hmmss", 0, 0, function () {
                    return "" + Kt.apply(this) + E(this.minutes(), 2) + E(this.seconds(), 2)
                }), j("Hmm", 0, 0, function () {
                    return "" + this.hours() + E(this.minutes(), 2)
                }), j("Hmmss", 0, 0, function () {
                    return "" + this.hours() + E(this.minutes(), 2) + E(this.seconds(), 2)
                }), te("a", !0), te("A", !1), F("hour", "h"), B("hour", 13), ut("a", ee), ut("A", ee), ut("H", J), ut("h", J), ut("k", J), ut("HH", J, G), ut("hh", J, G), ut("kk", J, G), ut("hmm", K), ut("hmmss", tt), ut("Hmm", K), ut("Hmmss", tt), pt(["H", "HH"], bt), pt(["k", "kk"], function (t, e, i) {
                    var n = S(t);
                    e[bt] = 24 === n ? 0 : n
                }), pt(["a", "A"], function (t, e, i) {
                    i._isPm = i._locale.isPM(t), i._meridiem = t
                }), pt(["h", "hh"], function (t, e, i) {
                    e[bt] = S(t), p(i).bigHour = !0
                }), pt("hmm", function (t, e, i) {
                    var n = t.length - 2;
                    e[bt] = S(t.substr(0, n)), e[xt] = S(t.substr(n)), p(i).bigHour = !0
                }), pt("hmmss", function (t, e, i) {
                    var n = t.length - 4,
                        o = t.length - 2;
                    e[bt] = S(t.substr(0, n)), e[xt] = S(t.substr(n, 2)), e[_t] = S(t.substr(o)), p(i).bigHour = !0
                }), pt("Hmm", function (t, e, i) {
                    var n = t.length - 2;
                    e[bt] = S(t.substr(0, n)), e[xt] = S(t.substr(n))
                }), pt("Hmmss", function (t, e, i) {
                    var n = t.length - 4,
                        o = t.length - 2;
                    e[bt] = S(t.substr(0, n)), e[xt] = S(t.substr(n, 2)), e[_t] = S(t.substr(o))
                });
                var ie, ne = Ot("Hours", !0),
                    oe = {
                        calendar: {
                            sameDay: "[Today at] LT",
                            nextDay: "[Tomorrow at] LT",
                            nextWeek: "dddd [at] LT",
                            lastDay: "[Yesterday at] LT",
                            lastWeek: "[Last] dddd [at] LT",
                            sameElse: "L"
                        },
                        longDateFormat: {
                            LTS: "h:mm:ss A",
                            LT: "h:mm A",
                            L: "MM/DD/YYYY",
                            LL: "MMMM D, YYYY",
                            LLL: "MMMM D, YYYY h:mm A",
                            LLLL: "dddd, MMMM D, YYYY h:mm A"
                        },
                        invalidDate: "Invalid date",
                        ordinal: "%d",
                        dayOfMonthOrdinalParse: /\d{1,2}/,
                        relativeTime: {
                            future: "in %s",
                            past: "%s ago",
                            s: "a few seconds",
                            ss: "%d seconds",
                            m: "a minute",
                            mm: "%d minutes",
                            h: "an hour",
                            hh: "%d hours",
                            d: "a day",
                            dd: "%d days",
                            M: "a month",
                            MM: "%d months",
                            y: "a year",
                            yy: "%d years"
                        },
                        months: Ft,
                        monthsShort: Lt,
                        week: {
                            dow: 0,
                            doy: 6
                        },
                        weekdays: Ut,
                        weekdaysMin: Gt,
                        weekdaysShort: qt,
                        meridiemParse: /[ap]\.?m?\.?/i
                    },
                    ae = {},
                    re = {};

                function se(t) {
                    return t ? t.toLowerCase().replace("_", "-") : t
                }

                function le(i) {
                    var n = null;
                    if (!ae[i] && void 0 !== e && e && e.exports) try {
                        n = ie._abbr, t("./locale/" + i), de(n)
                    } catch (i) {}
                    return ae[i]
                }

                function de(t, e) {
                    var i;
                    return t && ((i = s(e) ? he(t) : ue(t, e)) ? ie = i : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), ie._abbr
                }

                function ue(t, e) {
                    if (null === e) return delete ae[t], null;
                    var i, n = oe;
                    if (e.abbr = t, null != ae[t]) O("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = ae[t]._config;
                    else if (null != e.parentLocale)
                        if (null != ae[e.parentLocale]) n = ae[e.parentLocale]._config;
                        else {
                            if (null == (i = le(e.parentLocale))) return re[e.parentLocale] || (re[e.parentLocale] = []), re[e.parentLocale].push({
                                name: t,
                                config: e
                            }), null;
                            n = i._config
                        } return ae[t] = new A(I(n, e)), re[t] && re[t].forEach(function (t) {
                        ue(t.name, t.config)
                    }), de(t), ae[t]
                }

                function he(t) {
                    var e;
                    if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ie;
                    if (!a(t)) {
                        if (e = le(t)) return e;
                        t = [t]
                    }
                    return function (t) {
                        for (var e, i, n, o, a = 0; a < t.length;) {
                            for (e = (o = se(t[a]).split("-")).length, i = (i = se(t[a + 1])) ? i.split("-") : null; 0 < e;) {
                                if (n = le(o.slice(0, e).join("-"))) return n;
                                if (i && i.length >= e && k(o, i, !0) >= e - 1) break;
                                e--
                            }
                            a++
                        }
                        return ie
                    }(t)
                }

                function ce(t) {
                    var e, i = t._a;
                    return i && -2 === p(t).overflow && (e = i[vt] < 0 || 11 < i[vt] ? vt : i[yt] < 1 || i[yt] > At(i[mt], i[vt]) ? yt : i[bt] < 0 || 24 < i[bt] || 24 === i[bt] && (0 !== i[xt] || 0 !== i[_t] || 0 !== i[wt]) ? bt : i[xt] < 0 || 59 < i[xt] ? xt : i[_t] < 0 || 59 < i[_t] ? _t : i[wt] < 0 || 999 < i[wt] ? wt : -1, p(t)._overflowDayOfYear && (e < mt || yt < e) && (e = yt), p(t)._overflowWeeks && -1 === e && (e = St), p(t)._overflowWeekday && -1 === e && (e = kt), p(t).overflow = e), t
                }

                function fe(t, e, i) {
                    return null != t ? t : null != e ? e : i
                }

                function pe(t) {
                    var e, i, n, a, r, s = [];
                    if (!t._d) {
                        var l, d;
                        for (l = t, d = new Date(o.now()), n = l._useUTC ? [d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()] : [d.getFullYear(), d.getMonth(), d.getDate()], t._w && null == t._a[yt] && null == t._a[vt] && function (t) {
                                var e, i, n, o, a, r, s, l;
                                if (null != (e = t._w).GG || null != e.W || null != e.E) a = 1, r = 4, i = fe(e.GG, t._a[mt], jt(Te(), 1, 4).year), n = fe(e.W, 1), ((o = fe(e.E, 1)) < 1 || 7 < o) && (l = !0);
                                else {
                                    a = t._locale._week.dow, r = t._locale._week.doy;
                                    var d = jt(Te(), a, r);
                                    i = fe(e.gg, t._a[mt], d.year), n = fe(e.w, d.week), null != e.d ? ((o = e.d) < 0 || 6 < o) && (l = !0) : null != e.e ? (o = e.e + a, (e.e < 0 || 6 < e.e) && (l = !0)) : o = a
                                }
                                n < 1 || n > $t(i, a, r) ? p(t)._overflowWeeks = !0 : null != l ? p(t)._overflowWeekday = !0 : (s = Vt(i, n, o, a, r), t._a[mt] = s.year, t._dayOfYear = s.dayOfYear)
                            }(t), null != t._dayOfYear && (r = fe(t._a[mt], n[mt]), (t._dayOfYear > Mt(r) || 0 === t._dayOfYear) && (p(t)._overflowDayOfYear = !0), i = Ht(r, 0, t._dayOfYear), t._a[vt] = i.getUTCMonth(), t._a[yt] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = s[e] = n[e];
                        for (; e < 7; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                        24 === t._a[bt] && 0 === t._a[xt] && 0 === t._a[_t] && 0 === t._a[wt] && (t._nextDay = !0, t._a[bt] = 0), t._d = (t._useUTC ? Ht : function (t, e, i, n, o, a, r) {
                            var s = new Date(t, e, i, n, o, a, r);
                            return t < 100 && 0 <= t && isFinite(s.getFullYear()) && s.setFullYear(t), s
                        }).apply(null, s), a = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[bt] = 24), t._w && void 0 !== t._w.d && t._w.d !== a && (p(t).weekdayMismatch = !0)
                    }
                }
                var ge = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    me = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                    ve = /Z|[+-]\d\d(?::?\d\d)?/,
                    ye = [
                        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                        ["YYYY-DDD", /\d{4}-\d{3}/],
                        ["YYYY-MM", /\d{4}-\d\d/, !1],
                        ["YYYYYYMMDD", /[+-]\d{10}/],
                        ["YYYYMMDD", /\d{8}/],
                        ["GGGG[W]WWE", /\d{4}W\d{3}/],
                        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                        ["YYYYDDD", /\d{7}/]
                    ],
                    be = [
                        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                        ["HH:mm", /\d\d:\d\d/],
                        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                        ["HHmmss", /\d\d\d\d\d\d/],
                        ["HHmm", /\d\d\d\d/],
                        ["HH", /\d\d/]
                    ],
                    xe = /^\/?Date\((\-?\d+)/i;

                function _e(t) {
                    var e, i, n, o, a, r, s = t._i,
                        l = ge.exec(s) || me.exec(s);
                    if (l) {
                        for (p(t).iso = !0, e = 0, i = ye.length; e < i; e++)
                            if (ye[e][1].exec(l[1])) {
                                o = ye[e][0], n = !1 !== ye[e][2];
                                break
                            } if (null == o) return void(t._isValid = !1);
                        if (l[3]) {
                            for (e = 0, i = be.length; e < i; e++)
                                if (be[e][1].exec(l[3])) {
                                    a = (l[2] || " ") + be[e][0];
                                    break
                                } if (null == a) return void(t._isValid = !1)
                        }
                        if (!n && null != a) return void(t._isValid = !1);
                        if (l[4]) {
                            if (!ve.exec(l[4])) return void(t._isValid = !1);
                            r = "Z"
                        }
                        t._f = o + (a || "") + (r || ""), Me(t)
                    } else t._isValid = !1
                }
                var we = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
                var Se = {
                    UT: 0,
                    GMT: 0,
                    EDT: -240,
                    EST: -300,
                    CDT: -300,
                    CST: -360,
                    MDT: -360,
                    MST: -420,
                    PDT: -420,
                    PST: -480
                };

                function ke(t) {
                    var e, i, n, o = we.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                    if (o) {
                        var a = function (t, e, i, n, o, a) {
                            var r = [function (t) {
                                var e = parseInt(t, 10);
                                return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e
                            }(t), Lt.indexOf(e), parseInt(i, 10), parseInt(n, 10), parseInt(o, 10)];
                            return a && r.push(parseInt(a, 10)), r
                        }(o[4], o[3], o[2], o[5], o[6], o[7]);
                        if (i = a, n = t, (e = o[1]) && qt.indexOf(e) !== new Date(i[0], i[1], i[2]).getDay() && (p(n).weekdayMismatch = !0, !(n._isValid = !1))) return;
                        t._a = a, t._tzm = function (t, e, i) {
                            if (t) return Se[t];
                            if (e) return 0;
                            var n = parseInt(i, 10),
                                o = n % 100;
                            return (n - o) / 100 * 60 + o
                        }(o[8], o[9], o[10]), t._d = Ht.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), p(t).rfc2822 = !0
                    } else t._isValid = !1
                }

                function Me(t) {
                    if (t._f !== o.ISO_8601)
                        if (t._f !== o.RFC_2822) {
                            t._a = [], p(t).empty = !0;
                            var e, i, n, a, r, s, l, d, u = "" + t._i,
                                c = u.length,
                                f = 0;
                            for (n = U(t._f, t._locale).match(Y) || [], e = 0; e < n.length; e++) a = n[e], (i = (u.match(ht(a, t)) || [])[0]) && (0 < (r = u.substr(0, u.indexOf(i))).length && p(t).unusedInput.push(r), u = u.slice(u.indexOf(i) + i.length), f += i.length), V[a] ? (i ? p(t).empty = !1 : p(t).unusedTokens.push(a), s = a, d = t, null != (l = i) && h(ft, s) && ft[s](l, d._a, d, s)) : t._strict && !i && p(t).unusedTokens.push(a);
                            p(t).charsLeftOver = c - f, 0 < u.length && p(t).unusedInput.push(u), t._a[bt] <= 12 && !0 === p(t).bigHour && 0 < t._a[bt] && (p(t).bigHour = void 0), p(t).parsedDateParts = t._a.slice(0), p(t).meridiem = t._meridiem, t._a[bt] = function (t, e, i) {
                                var n;
                                return null == i ? e : null != t.meridiemHour ? t.meridiemHour(e, i) : (null != t.isPM && ((n = t.isPM(i)) && e < 12 && (e += 12), n || 12 !== e || (e = 0)), e)
                            }(t._locale, t._a[bt], t._meridiem), pe(t), ce(t)
                        } else ke(t);
                    else _e(t)
                }

                function Ce(t) {
                    var e, i, n, h, f = t._i,
                        v = t._f;
                    return t._locale = t._locale || he(t._l), null === f || void 0 === v && "" === f ? m({
                        nullInput: !0
                    }) : ("string" == typeof f && (t._i = f = t._locale.preparse(f)), _(f) ? new x(ce(f)) : (d(f) ? t._d = f : a(v) ? function (t) {
                        var e, i, n, o, a;
                        if (0 === t._f.length) return p(t).invalidFormat = !0, t._d = new Date(NaN);
                        for (o = 0; o < t._f.length; o++) a = 0, e = y({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[o], Me(e), g(e) && (a += p(e).charsLeftOver, a += 10 * p(e).unusedTokens.length, p(e).score = a, (null == n || a < n) && (n = a, i = e));
                        c(t, i || e)
                    }(t) : v ? Me(t) : s(i = (e = t)._i) ? e._d = new Date(o.now()) : d(i) ? e._d = new Date(i.valueOf()) : "string" == typeof i ? (n = e, null === (h = xe.exec(n._i)) ? (_e(n), !1 === n._isValid && (delete n._isValid, ke(n), !1 === n._isValid && (delete n._isValid, o.createFromInputFallback(n)))) : n._d = new Date(+h[1])) : a(i) ? (e._a = u(i.slice(0), function (t) {
                        return parseInt(t, 10)
                    }), pe(e)) : r(i) ? function (t) {
                        if (!t._d) {
                            var e = z(t._i);
                            t._a = u([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                                return t && parseInt(t, 10)
                            }), pe(t)
                        }
                    }(e) : l(i) ? e._d = new Date(i) : o.createFromInputFallback(e), g(t) || (t._d = null), t))
                }

                function De(t, e, i, n, o) {
                    var s, l = {};
                    return !0 !== i && !1 !== i || (n = i, i = void 0), (r(t) && function (t) {
                        if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                        var e;
                        for (e in t)
                            if (t.hasOwnProperty(e)) return !1;
                        return !0
                    }(t) || a(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = o, l._l = i, l._i = t, l._f = e, l._strict = n, (s = new x(ce(Ce(l))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s
                }

                function Te(t, e, i, n) {
                    return De(t, e, i, n, !1)
                }
                o.createFromInputFallback = C("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
                    t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
                }), o.ISO_8601 = function () {}, o.RFC_2822 = function () {};
                var Oe = C("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                        var t = Te.apply(null, arguments);
                        return this.isValid() && t.isValid() ? t < this ? this : t : m()
                    }),
                    Pe = C("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                        var t = Te.apply(null, arguments);
                        return this.isValid() && t.isValid() ? this < t ? this : t : m()
                    });

                function Ie(t, e) {
                    var i, n;
                    if (1 === e.length && a(e[0]) && (e = e[0]), !e.length) return Te();
                    for (i = e[0], n = 1; n < e.length; ++n) e[n].isValid() && !e[n][t](i) || (i = e[n]);
                    return i
                }
                var Ae = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

                function Re(t) {
                    var e = z(t),
                        i = e.year || 0,
                        n = e.quarter || 0,
                        o = e.month || 0,
                        a = e.week || 0,
                        r = e.day || 0,
                        s = e.hour || 0,
                        l = e.minute || 0,
                        d = e.second || 0,
                        u = e.millisecond || 0;
                    this._isValid = function (t) {
                        for (var e in t)
                            if (-1 === Dt.call(Ae, e) || null != t[e] && isNaN(t[e])) return !1;
                        for (var i = !1, n = 0; n < Ae.length; ++n)
                            if (t[Ae[n]]) {
                                if (i) return !1;
                                parseFloat(t[Ae[n]]) !== S(t[Ae[n]]) && (i = !0)
                            } return !0
                    }(e), this._milliseconds = +u + 1e3 * d + 6e4 * l + 1e3 * s * 60 * 60, this._days = +r + 7 * a, this._months = +o + 3 * n + 12 * i, this._data = {}, this._locale = he(), this._bubble()
                }

                function Fe(t) {
                    return t instanceof Re
                }

                function Le(t) {
                    return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
                }

                function ze(t, e) {
                    j(t, 0, 0, function () {
                        var t = this.utcOffset(),
                            i = "+";
                        return t < 0 && (t = -t, i = "-"), i + E(~~(t / 60), 2) + e + E(~~t % 60, 2)
                    })
                }
                ze("Z", ":"), ze("ZZ", ""), ut("Z", st), ut("ZZ", st), pt(["Z", "ZZ"], function (t, e, i) {
                    i._useUTC = !0, i._tzm = Be(st, t)
                });
                var We = /([\+\-]|\d\d)/gi;

                function Be(t, e) {
                    var i = (e || "").match(t);
                    if (null === i) return null;
                    var n = ((i[i.length - 1] || []) + "").match(We) || ["-", 0, 0],
                        o = 60 * n[1] + S(n[2]);
                    return 0 === o ? 0 : "+" === n[0] ? o : -o
                }

                function Ee(t, e) {
                    var i, n;
                    return e._isUTC ? (i = e.clone(), n = (_(t) || d(t) ? t.valueOf() : Te(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + n), o.updateOffset(i, !1), i) : Te(t).local()
                }

                function Ye(t) {
                    return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
                }

                function He() {
                    return !!this.isValid() && this._isUTC && 0 === this._offset
                }
                o.updateOffset = function () {};
                var Ne = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                    Ve = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

                function je(t, e) {
                    var i, n, o, a = t,
                        r = null;
                    return Fe(t) ? a = {
                        ms: t._milliseconds,
                        d: t._days,
                        M: t._months
                    } : l(t) ? (a = {}, e ? a[e] = t : a.milliseconds = t) : (r = Ne.exec(t)) ? (i = "-" === r[1] ? -1 : 1, a = {
                        y: 0,
                        d: S(r[yt]) * i,
                        h: S(r[bt]) * i,
                        m: S(r[xt]) * i,
                        s: S(r[_t]) * i,
                        ms: S(Le(1e3 * r[wt])) * i
                    }) : (r = Ve.exec(t)) ? (i = "-" === r[1] ? -1 : (r[1], 1), a = {
                        y: $e(r[2], i),
                        M: $e(r[3], i),
                        w: $e(r[4], i),
                        d: $e(r[5], i),
                        h: $e(r[6], i),
                        m: $e(r[7], i),
                        s: $e(r[8], i)
                    }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (o = function (t, e) {
                        var i;
                        return t.isValid() && e.isValid() ? (e = Ee(e, t), t.isBefore(e) ? i = Ue(t, e) : ((i = Ue(e, t)).milliseconds = -i.milliseconds, i.months = -i.months), i) : {
                            milliseconds: 0,
                            months: 0
                        }
                    }(Te(a.from), Te(a.to)), (a = {}).ms = o.milliseconds, a.M = o.months), n = new Re(a), Fe(t) && h(t, "_locale") && (n._locale = t._locale), n
                }

                function $e(t, e) {
                    var i = t && parseFloat(t.replace(",", "."));
                    return (isNaN(i) ? 0 : i) * e
                }

                function Ue(t, e) {
                    var i = {
                        milliseconds: 0,
                        months: 0
                    };
                    return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i
                }

                function qe(t, e) {
                    return function (i, n) {
                        var o;
                        return null === n || isNaN(+n) || (O(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = i, i = n, n = o), Ge(this, je(i = "string" == typeof i ? +i : i, n), t), this
                    }
                }

                function Ge(t, e, i, n) {
                    var a = e._milliseconds,
                        r = Le(e._days),
                        s = Le(e._months);
                    t.isValid() && (n = null == n || n, s && zt(t, Pt(t, "Month") + s * i), r && It(t, "Date", Pt(t, "Date") + r * i), a && t._d.setTime(t._d.valueOf() + a * i), n && o.updateOffset(t, r || s))
                }
                je.fn = Re.prototype, je.invalid = function () {
                    return je(NaN)
                };
                var Xe = qe(1, "add"),
                    Ze = qe(-1, "subtract");

                function Qe(t, e) {
                    var i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                        n = t.clone().add(i, "months");
                    return -(i + (e - n < 0 ? (e - n) / (n - t.clone().add(i - 1, "months")) : (e - n) / (t.clone().add(i + 1, "months") - n))) || 0
                }

                function Je(t) {
                    var e;
                    return void 0 === t ? this._locale._abbr : (null != (e = he(t)) && (this._locale = e), this)
                }
                o.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", o.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                var Ke = C("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
                    return void 0 === t ? this.localeData() : this.locale(t)
                });

                function ti() {
                    return this._locale
                }

                function ei(t, e) {
                    j(0, [t, t.length], 0, e)
                }

                function ii(t, e, i, n, o) {
                    var a;
                    return null == t ? jt(this, n, o).year : ((a = $t(t, n, o)) < e && (e = a), function (t, e, i, n, o) {
                        var a = Vt(t, e, i, n, o),
                            r = Ht(a.year, 0, a.dayOfYear);
                        return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
                    }.call(this, t, e, i, n, o))
                }
                j(0, ["gg", 2], 0, function () {
                    return this.weekYear() % 100
                }), j(0, ["GG", 2], 0, function () {
                    return this.isoWeekYear() % 100
                }), ei("gggg", "weekYear"), ei("ggggg", "weekYear"), ei("GGGG", "isoWeekYear"), ei("GGGGG", "isoWeekYear"), F("weekYear", "gg"), F("isoWeekYear", "GG"), B("weekYear", 1), B("isoWeekYear", 1), ut("G", at), ut("g", at), ut("GG", J, G), ut("gg", J, G), ut("GGGG", it, Z), ut("gggg", it, Z), ut("GGGGG", nt, Q), ut("ggggg", nt, Q), gt(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, i, n) {
                    e[n.substr(0, 2)] = S(t)
                }), gt(["gg", "GG"], function (t, e, i, n) {
                    e[n] = o.parseTwoDigitYear(t)
                }), j("Q", 0, "Qo", "quarter"), F("quarter", "Q"), B("quarter", 7), ut("Q", q), pt("Q", function (t, e) {
                    e[vt] = 3 * (S(t) - 1)
                }), j("D", ["DD", 2], "Do", "date"), F("date", "D"), B("date", 9), ut("D", J), ut("DD", J, G), ut("Do", function (t, e) {
                    return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
                }), pt(["D", "DD"], yt), pt("Do", function (t, e) {
                    e[yt] = S(t.match(J)[0])
                });
                var ni = Ot("Date", !0);
                j("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), F("dayOfYear", "DDD"), B("dayOfYear", 4), ut("DDD", et), ut("DDDD", X), pt(["DDD", "DDDD"], function (t, e, i) {
                    i._dayOfYear = S(t)
                }), j("m", ["mm", 2], 0, "minute"), F("minute", "m"), B("minute", 14), ut("m", J), ut("mm", J, G), pt(["m", "mm"], xt);
                var oi = Ot("Minutes", !1);
                j("s", ["ss", 2], 0, "second"), F("second", "s"), B("second", 15), ut("s", J), ut("ss", J, G), pt(["s", "ss"], _t);
                var ai, ri = Ot("Seconds", !1);
                for (j("S", 0, 0, function () {
                        return ~~(this.millisecond() / 100)
                    }), j(0, ["SS", 2], 0, function () {
                        return ~~(this.millisecond() / 10)
                    }), j(0, ["SSS", 3], 0, "millisecond"), j(0, ["SSSS", 4], 0, function () {
                        return 10 * this.millisecond()
                    }), j(0, ["SSSSS", 5], 0, function () {
                        return 100 * this.millisecond()
                    }), j(0, ["SSSSSS", 6], 0, function () {
                        return 1e3 * this.millisecond()
                    }), j(0, ["SSSSSSS", 7], 0, function () {
                        return 1e4 * this.millisecond()
                    }), j(0, ["SSSSSSSS", 8], 0, function () {
                        return 1e5 * this.millisecond()
                    }), j(0, ["SSSSSSSSS", 9], 0, function () {
                        return 1e6 * this.millisecond()
                    }), F("millisecond", "ms"), B("millisecond", 16), ut("S", et, q), ut("SS", et, G), ut("SSS", et, X), ai = "SSSS"; ai.length <= 9; ai += "S") ut(ai, ot);

                function si(t, e) {
                    e[wt] = S(1e3 * ("0." + t))
                }
                for (ai = "S"; ai.length <= 9; ai += "S") pt(ai, si);
                var li = Ot("Milliseconds", !1);
                j("z", 0, 0, "zoneAbbr"), j("zz", 0, 0, "zoneName");
                var di = x.prototype;

                function ui(t) {
                    return t
                }
                di.add = Xe, di.calendar = function (t, e) {
                    var i = t || Te(),
                        n = Ee(i, this).startOf("day"),
                        a = o.calendarFormat(this, n) || "sameElse",
                        r = e && (P(e[a]) ? e[a].call(this, i) : e[a]);
                    return this.format(r || this.localeData().calendar(a, this, Te(i)))
                }, di.clone = function () {
                    return new x(this)
                }, di.diff = function (t, e, i) {
                    var n, o, a;
                    if (!this.isValid()) return NaN;
                    if (!(n = Ee(t, this)).isValid()) return NaN;
                    switch (o = 6e4 * (n.utcOffset() - this.utcOffset()), e = L(e)) {
                        case "year":
                            a = Qe(this, n) / 12;
                            break;
                        case "month":
                            a = Qe(this, n);
                            break;
                        case "quarter":
                            a = Qe(this, n) / 3;
                            break;
                        case "second":
                            a = (this - n) / 1e3;
                            break;
                        case "minute":
                            a = (this - n) / 6e4;
                            break;
                        case "hour":
                            a = (this - n) / 36e5;
                            break;
                        case "day":
                            a = (this - n - o) / 864e5;
                            break;
                        case "week":
                            a = (this - n - o) / 6048e5;
                            break;
                        default:
                            a = this - n
                    }
                    return i ? a : w(a)
                }, di.endOf = function (t) {
                    return void 0 === (t = L(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
                }, di.format = function (t) {
                    t || (t = this.isUtc() ? o.defaultFormatUtc : o.defaultFormat);
                    var e = $(this, t);
                    return this.localeData().postformat(e)
                }, di.from = function (t, e) {
                    return this.isValid() && (_(t) && t.isValid() || Te(t).isValid()) ? je({
                        to: this,
                        from: t
                    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                }, di.fromNow = function (t) {
                    return this.from(Te(), t)
                }, di.to = function (t, e) {
                    return this.isValid() && (_(t) && t.isValid() || Te(t).isValid()) ? je({
                        from: this,
                        to: t
                    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
                }, di.toNow = function (t) {
                    return this.to(Te(), t)
                }, di.get = function (t) {
                    return P(this[t = L(t)]) ? this[t]() : this
                }, di.invalidAt = function () {
                    return p(this).overflow
                }, di.isAfter = function (t, e) {
                    var i = _(t) ? t : Te(t);
                    return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = L(s(e) ? "millisecond" : e)) ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
                }, di.isBefore = function (t, e) {
                    var i = _(t) ? t : Te(t);
                    return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = L(s(e) ? "millisecond" : e)) ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
                }, di.isBetween = function (t, e, i, n) {
                    return ("(" === (n = n || "()")[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === n[1] ? this.isBefore(e, i) : !this.isAfter(e, i))
                }, di.isSame = function (t, e) {
                    var i, n = _(t) ? t : Te(t);
                    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = L(e || "millisecond")) ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()))
                }, di.isSameOrAfter = function (t, e) {
                    return this.isSame(t, e) || this.isAfter(t, e)
                }, di.isSameOrBefore = function (t, e) {
                    return this.isSame(t, e) || this.isBefore(t, e)
                }, di.isValid = function () {
                    return g(this)
                }, di.lang = Ke, di.locale = Je, di.localeData = ti, di.max = Pe, di.min = Oe, di.parsingFlags = function () {
                    return c({}, p(this))
                }, di.set = function (t, e) {
                    if ("object" == typeof t)
                        for (var i = function (t) {
                                var e = [];
                                for (var i in t) e.push({
                                    unit: i,
                                    priority: W[i]
                                });
                                return e.sort(function (t, e) {
                                    return t.priority - e.priority
                                }), e
                            }(t = z(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]);
                    else if (P(this[t = L(t)])) return this[t](e);
                    return this
                }, di.startOf = function (t) {
                    switch (t = L(t)) {
                        case "year":
                            this.month(0);
                        case "quarter":
                        case "month":
                            this.date(1);
                        case "week":
                        case "isoWeek":
                        case "day":
                        case "date":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
                }, di.subtract = Ze, di.toArray = function () {
                    var t = this;
                    return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
                }, di.toObject = function () {
                    var t = this;
                    return {
                        years: t.year(),
                        months: t.month(),
                        date: t.date(),
                        hours: t.hours(),
                        minutes: t.minutes(),
                        seconds: t.seconds(),
                        milliseconds: t.milliseconds()
                    }
                }, di.toDate = function () {
                    return new Date(this.valueOf())
                }, di.toISOString = function (t) {
                    if (!this.isValid()) return null;
                    var e = !0 !== t,
                        i = e ? this.clone().utc() : this;
                    return i.year() < 0 || 9999 < i.year() ? $(i, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : P(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", $(i, "Z")) : $(i, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
                }, di.inspect = function () {
                    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                    var t = "moment",
                        e = "";
                    this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
                    var i = "[" + t + '("]',
                        n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                        o = e + '[")]';
                    return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + o)
                }, di.toJSON = function () {
                    return this.isValid() ? this.toISOString() : null
                }, di.toString = function () {
                    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                }, di.unix = function () {
                    return Math.floor(this.valueOf() / 1e3)
                }, di.valueOf = function () {
                    return this._d.valueOf() - 6e4 * (this._offset || 0)
                }, di.creationData = function () {
                    return {
                        input: this._i,
                        format: this._f,
                        locale: this._locale,
                        isUTC: this._isUTC,
                        strict: this._strict
                    }
                }, di.year = Tt, di.isLeapYear = function () {
                    return Ct(this.year())
                }, di.weekYear = function (t) {
                    return ii.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                }, di.isoWeekYear = function (t) {
                    return ii.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
                }, di.quarter = di.quarters = function (t) {
                    return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
                }, di.month = Wt, di.daysInMonth = function () {
                    return At(this.year(), this.month())
                }, di.week = di.weeks = function (t) {
                    var e = this.localeData().week(this);
                    return null == t ? e : this.add(7 * (t - e), "d")
                }, di.isoWeek = di.isoWeeks = function (t) {
                    var e = jt(this, 1, 4).week;
                    return null == t ? e : this.add(7 * (t - e), "d")
                }, di.weeksInYear = function () {
                    var t = this.localeData()._week;
                    return $t(this.year(), t.dow, t.doy)
                }, di.isoWeeksInYear = function () {
                    return $t(this.year(), 1, 4)
                }, di.date = ni, di.day = di.days = function (t) {
                    if (!this.isValid()) return null != t ? this : NaN;
                    var e, i, n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null != t ? (e = t, i = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = i.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - n, "d")) : n
                }, di.weekday = function (t) {
                    if (!this.isValid()) return null != t ? this : NaN;
                    var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                    return null == t ? e : this.add(t - e, "d")
                }, di.isoWeekday = function (t) {
                    if (!this.isValid()) return null != t ? this : NaN;
                    if (null == t) return this.day() || 7;
                    var e, i, n = (e = t, i = this.localeData(), "string" == typeof e ? i.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e);
                    return this.day(this.day() % 7 ? n : n - 7)
                }, di.dayOfYear = function (t) {
                    var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                    return null == t ? e : this.add(t - e, "d")
                }, di.hour = di.hours = ne, di.minute = di.minutes = oi, di.second = di.seconds = ri, di.millisecond = di.milliseconds = li, di.utcOffset = function (t, e, i) {
                    var n, a = this._offset || 0;
                    if (!this.isValid()) return null != t ? this : NaN;
                    if (null == t) return this._isUTC ? a : Ye(this);
                    if ("string" == typeof t) {
                        if (null === (t = Be(st, t))) return this
                    } else Math.abs(t) < 16 && !i && (t *= 60);
                    return !this._isUTC && e && (n = Ye(this)), this._offset = t, this._isUTC = !0, null != n && this.add(n, "m"), a !== t && (!e || this._changeInProgress ? Ge(this, je(t - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, o.updateOffset(this, !0), this._changeInProgress = null)), this
                }, di.utc = function (t) {
                    return this.utcOffset(0, t)
                }, di.local = function (t) {
                    return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ye(this), "m")), this
                }, di.parseZone = function () {
                    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                    else if ("string" == typeof this._i) {
                        var t = Be(rt, this._i);
                        null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
                    }
                    return this
                }, di.hasAlignedHourOffset = function (t) {
                    return !!this.isValid() && (t = t ? Te(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
                }, di.isDST = function () {
                    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                }, di.isLocal = function () {
                    return !!this.isValid() && !this._isUTC
                }, di.isUtcOffset = function () {
                    return !!this.isValid() && this._isUTC
                }, di.isUtc = He, di.isUTC = He, di.zoneAbbr = function () {
                    return this._isUTC ? "UTC" : ""
                }, di.zoneName = function () {
                    return this._isUTC ? "Coordinated Universal Time" : ""
                }, di.dates = C("dates accessor is deprecated. Use date instead.", ni), di.months = C("months accessor is deprecated. Use month instead", Wt), di.years = C("years accessor is deprecated. Use year instead", Tt), di.zone = C("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (t, e) {
                    return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
                }), di.isDSTShifted = C("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
                    if (!s(this._isDSTShifted)) return this._isDSTShifted;
                    var t = {};
                    if (y(t, this), (t = Ce(t))._a) {
                        var e = t._isUTC ? f(t._a) : Te(t._a);
                        this._isDSTShifted = this.isValid() && 0 < k(t._a, e.toArray())
                    } else this._isDSTShifted = !1;
                    return this._isDSTShifted
                });
                var hi = A.prototype;

                function ci(t, e, i, n) {
                    var o = he(),
                        a = f().set(n, e);
                    return o[i](a, t)
                }

                function fi(t, e, i) {
                    if (l(t) && (e = t, t = void 0), t = t || "", null != e) return ci(t, e, i, "month");
                    var n, o = [];
                    for (n = 0; n < 12; n++) o[n] = ci(t, n, i, "month");
                    return o
                }

                function pi(t, e, i, n) {
                    "boolean" == typeof t ? l(e) && (i = e, e = void 0) : (e = t, t = !1, l(i = e) && (i = e, e = void 0)), e = e || "";
                    var o, a = he(),
                        r = t ? a._week.dow : 0;
                    if (null != i) return ci(e, (i + r) % 7, n, "day");
                    var s = [];
                    for (o = 0; o < 7; o++) s[o] = ci(e, (o + r) % 7, n, "day");
                    return s
                }
                hi.calendar = function (t, e, i) {
                    var n = this._calendar[t] || this._calendar.sameElse;
                    return P(n) ? n.call(e, i) : n
                }, hi.longDateFormat = function (t) {
                    var e = this._longDateFormat[t],
                        i = this._longDateFormat[t.toUpperCase()];
                    return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function (t) {
                        return t.slice(1)
                    }), this._longDateFormat[t])
                }, hi.invalidDate = function () {
                    return this._invalidDate
                }, hi.ordinal = function (t) {
                    return this._ordinal.replace("%d", t)
                }, hi.preparse = ui, hi.postformat = ui, hi.relativeTime = function (t, e, i, n) {
                    var o = this._relativeTime[i];
                    return P(o) ? o(t, e, i, n) : o.replace(/%d/i, t)
                }, hi.pastFuture = function (t, e) {
                    var i = this._relativeTime[0 < t ? "future" : "past"];
                    return P(i) ? i(e) : i.replace(/%s/i, e)
                }, hi.set = function (t) {
                    var e, i;
                    for (i in t) P(e = t[i]) ? this[i] = e : this["_" + i] = e;
                    this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                }, hi.months = function (t, e) {
                    return t ? a(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Rt).test(e) ? "format" : "standalone"][t.month()] : a(this._months) ? this._months : this._months.standalone
                }, hi.monthsShort = function (t, e) {
                    return t ? a(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Rt.test(e) ? "format" : "standalone"][t.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                }, hi.monthsParse = function (t, e, i) {
                    var n, o, a;
                    if (this._monthsParseExact) return function (t, e, i) {
                        var n, o, a, r = t.toLocaleLowerCase();
                        if (!this._monthsParse)
                            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) a = f([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(a, "").toLocaleLowerCase();
                        return i ? "MMM" === e ? -1 !== (o = Dt.call(this._shortMonthsParse, r)) ? o : null : -1 !== (o = Dt.call(this._longMonthsParse, r)) ? o : null : "MMM" === e ? -1 !== (o = Dt.call(this._shortMonthsParse, r)) ? o : -1 !== (o = Dt.call(this._longMonthsParse, r)) ? o : null : -1 !== (o = Dt.call(this._longMonthsParse, r)) ? o : -1 !== (o = Dt.call(this._shortMonthsParse, r)) ? o : null
                    }.call(this, t, e, i);
                    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                        if (o = f([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (a = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[n] = new RegExp(a.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
                        if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
                        if (!i && this._monthsParse[n].test(t)) return n
                    }
                }, hi.monthsRegex = function (t) {
                    return this._monthsParseExact ? (h(this, "_monthsRegex") || Yt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = Et), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
                }, hi.monthsShortRegex = function (t) {
                    return this._monthsParseExact ? (h(this, "_monthsRegex") || Yt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = Bt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
                }, hi.week = function (t) {
                    return jt(t, this._week.dow, this._week.doy).week
                }, hi.firstDayOfYear = function () {
                    return this._week.doy
                }, hi.firstDayOfWeek = function () {
                    return this._week.dow
                }, hi.weekdays = function (t, e) {
                    return t ? a(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : a(this._weekdays) ? this._weekdays : this._weekdays.standalone
                }, hi.weekdaysMin = function (t) {
                    return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
                }, hi.weekdaysShort = function (t) {
                    return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
                }, hi.weekdaysParse = function (t, e, i) {
                    var n, o, a;
                    if (this._weekdaysParseExact) return function (t, e, i) {
                        var n, o, a, r = t.toLocaleLowerCase();
                        if (!this._weekdaysParse)
                            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) a = f([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(a, "").toLocaleLowerCase();
                        return i ? "dddd" === e ? -1 !== (o = Dt.call(this._weekdaysParse, r)) ? o : null : "ddd" === e ? -1 !== (o = Dt.call(this._shortWeekdaysParse, r)) ? o : null : -1 !== (o = Dt.call(this._minWeekdaysParse, r)) ? o : null : "dddd" === e ? -1 !== (o = Dt.call(this._weekdaysParse, r)) ? o : -1 !== (o = Dt.call(this._shortWeekdaysParse, r)) ? o : -1 !== (o = Dt.call(this._minWeekdaysParse, r)) ? o : null : "ddd" === e ? -1 !== (o = Dt.call(this._shortWeekdaysParse, r)) ? o : -1 !== (o = Dt.call(this._weekdaysParse, r)) ? o : -1 !== (o = Dt.call(this._minWeekdaysParse, r)) ? o : null : -1 !== (o = Dt.call(this._minWeekdaysParse, r)) ? o : -1 !== (o = Dt.call(this._weekdaysParse, r)) ? o : -1 !== (o = Dt.call(this._shortWeekdaysParse, r)) ? o : null
                    }.call(this, t, e, i);
                    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                        if (o = f([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(o, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (a = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[n] = new RegExp(a.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n;
                        if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
                        if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
                        if (!i && this._weekdaysParse[n].test(t)) return n
                    }
                }, hi.weekdaysRegex = function (t) {
                    return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Jt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = Xt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
                }, hi.weekdaysShortRegex = function (t) {
                    return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Jt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Zt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                }, hi.weekdaysMinRegex = function (t) {
                    return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Jt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                }, hi.isPM = function (t) {
                    return "p" === (t + "").toLowerCase().charAt(0)
                }, hi.meridiem = function (t, e, i) {
                    return 11 < t ? i ? "pm" : "PM" : i ? "am" : "AM"
                }, de("en", {
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function (t) {
                        var e = t % 10;
                        return t + (1 === S(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
                    }
                }), o.lang = C("moment.lang is deprecated. Use moment.locale instead.", de), o.langData = C("moment.langData is deprecated. Use moment.localeData instead.", he);
                var gi = Math.abs;

                function mi(t, e, i, n) {
                    var o = je(e, i);
                    return t._milliseconds += n * o._milliseconds, t._days += n * o._days, t._months += n * o._months, t._bubble()
                }

                function vi(t) {
                    return t < 0 ? Math.floor(t) : Math.ceil(t)
                }

                function yi(t) {
                    return 4800 * t / 146097
                }

                function bi(t) {
                    return 146097 * t / 4800
                }

                function xi(t) {
                    return function () {
                        return this.as(t)
                    }
                }
                var _i = xi("ms"),
                    wi = xi("s"),
                    Si = xi("m"),
                    ki = xi("h"),
                    Mi = xi("d"),
                    Ci = xi("w"),
                    Di = xi("M"),
                    Ti = xi("y");

                function Oi(t) {
                    return function () {
                        return this.isValid() ? this._data[t] : NaN
                    }
                }
                var Pi = Oi("milliseconds"),
                    Ii = Oi("seconds"),
                    Ai = Oi("minutes"),
                    Ri = Oi("hours"),
                    Fi = Oi("days"),
                    Li = Oi("months"),
                    zi = Oi("years"),
                    Wi = Math.round,
                    Bi = {
                        ss: 44,
                        s: 45,
                        m: 45,
                        h: 22,
                        d: 26,
                        M: 11
                    },
                    Ei = Math.abs;

                function Yi(t) {
                    return (0 < t) - (t < 0) || +t
                }

                function Hi() {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var t, e, i = Ei(this._milliseconds) / 1e3,
                        n = Ei(this._days),
                        o = Ei(this._months);
                    e = w((t = w(i / 60)) / 60), i %= 60, t %= 60;
                    var a = w(o / 12),
                        r = o %= 12,
                        s = n,
                        l = e,
                        d = t,
                        u = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
                        h = this.asSeconds();
                    if (!h) return "P0D";
                    var c = h < 0 ? "-" : "",
                        f = Yi(this._months) !== Yi(h) ? "-" : "",
                        p = Yi(this._days) !== Yi(h) ? "-" : "",
                        g = Yi(this._milliseconds) !== Yi(h) ? "-" : "";
                    return c + "P" + (a ? f + a + "Y" : "") + (r ? f + r + "M" : "") + (s ? p + s + "D" : "") + (l || d || u ? "T" : "") + (l ? g + l + "H" : "") + (d ? g + d + "M" : "") + (u ? g + u + "S" : "")
                }
                var Ni = Re.prototype;
                return Ni.isValid = function () {
                    return this._isValid
                }, Ni.abs = function () {
                    var t = this._data;
                    return this._milliseconds = gi(this._milliseconds), this._days = gi(this._days), this._months = gi(this._months), t.milliseconds = gi(t.milliseconds), t.seconds = gi(t.seconds), t.minutes = gi(t.minutes), t.hours = gi(t.hours), t.months = gi(t.months), t.years = gi(t.years), this
                }, Ni.add = function (t, e) {
                    return mi(this, t, e, 1)
                }, Ni.subtract = function (t, e) {
                    return mi(this, t, e, -1)
                }, Ni.as = function (t) {
                    if (!this.isValid()) return NaN;
                    var e, i, n = this._milliseconds;
                    if ("month" === (t = L(t)) || "year" === t) return e = this._days + n / 864e5, i = this._months + yi(e), "month" === t ? i : i / 12;
                    switch (e = this._days + Math.round(bi(this._months)), t) {
                        case "week":
                            return e / 7 + n / 6048e5;
                        case "day":
                            return e + n / 864e5;
                        case "hour":
                            return 24 * e + n / 36e5;
                        case "minute":
                            return 1440 * e + n / 6e4;
                        case "second":
                            return 86400 * e + n / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * e) + n;
                        default:
                            throw new Error("Unknown unit " + t)
                    }
                }, Ni.asMilliseconds = _i, Ni.asSeconds = wi, Ni.asMinutes = Si, Ni.asHours = ki, Ni.asDays = Mi, Ni.asWeeks = Ci, Ni.asMonths = Di, Ni.asYears = Ti, Ni.valueOf = function () {
                    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * S(this._months / 12) : NaN
                }, Ni._bubble = function () {
                    var t, e, i, n, o, a = this._milliseconds,
                        r = this._days,
                        s = this._months,
                        l = this._data;
                    return 0 <= a && 0 <= r && 0 <= s || a <= 0 && r <= 0 && s <= 0 || (a += 864e5 * vi(bi(s) + r), s = r = 0), l.milliseconds = a % 1e3, t = w(a / 1e3), l.seconds = t % 60, e = w(t / 60), l.minutes = e % 60, i = w(e / 60), l.hours = i % 24, s += o = w(yi(r += w(i / 24))), r -= vi(bi(o)), n = w(s / 12), s %= 12, l.days = r, l.months = s, l.years = n, this
                }, Ni.clone = function () {
                    return je(this)
                }, Ni.get = function (t) {
                    return t = L(t), this.isValid() ? this[t + "s"]() : NaN
                }, Ni.milliseconds = Pi, Ni.seconds = Ii, Ni.minutes = Ai, Ni.hours = Ri, Ni.days = Fi, Ni.weeks = function () {
                    return w(this.days() / 7)
                }, Ni.months = Li, Ni.years = zi, Ni.humanize = function (t) {
                    if (!this.isValid()) return this.localeData().invalidDate();
                    var e, i, n, o, a, r, s, l, d, u, h = this.localeData(),
                        c = (e = !t, i = h, n = je(this).abs(), o = Wi(n.as("s")), a = Wi(n.as("m")), r = Wi(n.as("h")), s = Wi(n.as("d")), l = Wi(n.as("M")), d = Wi(n.as("y")), (u = o <= Bi.ss && ["s", o] || o < Bi.s && ["ss", o] || a <= 1 && ["m"] || a < Bi.m && ["mm", a] || r <= 1 && ["h"] || r < Bi.h && ["hh", r] || s <= 1 && ["d"] || s < Bi.d && ["dd", s] || l <= 1 && ["M"] || l < Bi.M && ["MM", l] || d <= 1 && ["y"] || ["yy", d])[2] = e, u[3] = 0 < +this, u[4] = i, function (t, e, i, n, o) {
                            return o.relativeTime(e || 1, !!i, t, n)
                        }.apply(null, u));
                    return t && (c = h.pastFuture(+this, c)), h.postformat(c)
                }, Ni.toISOString = Hi, Ni.toString = Hi, Ni.toJSON = Hi, Ni.locale = Je, Ni.localeData = ti, Ni.toIsoString = C("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Hi), Ni.lang = Ke, j("X", 0, 0, "unix"), j("x", 0, 0, "valueOf"), ut("x", at), ut("X", /[+-]?\d+(\.\d{1,3})?/), pt("X", function (t, e, i) {
                    i._d = new Date(1e3 * parseFloat(t, 10))
                }), pt("x", function (t, e, i) {
                    i._d = new Date(S(t))
                }), o.version = "2.22.2", i = Te, o.fn = di, o.min = function () {
                    return Ie("isBefore", [].slice.call(arguments, 0))
                }, o.max = function () {
                    return Ie("isAfter", [].slice.call(arguments, 0))
                }, o.now = function () {
                    return Date.now ? Date.now() : +new Date
                }, o.utc = f, o.unix = function (t) {
                    return Te(1e3 * t)
                }, o.months = function (t, e) {
                    return fi(t, e, "months")
                }, o.isDate = d, o.locale = de, o.invalid = m, o.duration = je, o.isMoment = _, o.weekdays = function (t, e, i) {
                    return pi(t, e, i, "weekdays")
                }, o.parseZone = function () {
                    return Te.apply(null, arguments).parseZone()
                }, o.localeData = he, o.isDuration = Fe, o.monthsShort = function (t, e) {
                    return fi(t, e, "monthsShort")
                }, o.weekdaysMin = function (t, e, i) {
                    return pi(t, e, i, "weekdaysMin")
                }, o.defineLocale = ue, o.updateLocale = function (t, e) {
                    if (null != e) {
                        var i, n, o = oe;
                        null != (n = le(t)) && (o = n._config), (i = new A(e = I(o, e))).parentLocale = ae[t], ae[t] = i, de(t)
                    } else null != ae[t] && (null != ae[t].parentLocale ? ae[t] = ae[t].parentLocale : null != ae[t] && delete ae[t]);
                    return ae[t]
                }, o.locales = function () {
                    return D(ae)
                }, o.weekdaysShort = function (t, e, i) {
                    return pi(t, e, i, "weekdaysShort")
                }, o.normalizeUnits = L, o.relativeTimeRounding = function (t) {
                    return void 0 === t ? Wi : "function" == typeof t && (Wi = t, !0)
                }, o.relativeTimeThreshold = function (t, e) {
                    return void 0 !== Bi[t] && (void 0 === e ? Bi[t] : (Bi[t] = e, "s" === t && (Bi.ss = e - 1), !0))
                }, o.calendarFormat = function (t, e) {
                    var i = t.diff(e, "days", !0);
                    return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
                }, o.prototype = di, o.HTML5_FMT = {
                    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                    DATE: "YYYY-MM-DD",
                    TIME: "HH:mm",
                    TIME_SECONDS: "HH:mm:ss",
                    TIME_MS: "HH:mm:ss.SSS",
                    WEEK: "YYYY-[W]WW",
                    MONTH: "YYYY-MM"
                }, o
            }, "object" == typeof i && void 0 !== e ? e.exports = n() : this.moment = n()
        }, {}],
        7: [function (t, e, i) {
            var n = t(30)();
            n.helpers = t(46), t(28)(n), n.Animation = t(22), n.animationService = t(23), n.defaults = t(26), n.Element = t(27), n.elements = t(41), n.Interaction = t(29), n.layouts = t(31), n.platform = t(49), n.plugins = t(32), n.Scale = t(33), n.scaleService = t(34), n.Ticks = t(35), n.Tooltip = t(36), t(24)(n), t(25)(n), t(56)(n), t(54)(n), t(55)(n), t(57)(n), t(58)(n), t(59)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);
            var o = t(50);
            for (var a in o) o.hasOwnProperty(a) && n.plugins.register(o[a]);
            n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.Legend = o.legend._element, n.Title = o.title._element, n.pluginService = n.plugins, n.PluginBase = n.Element.extend({}), n.canvasHelpers = n.helpers.canvas, n.layoutService = n.layouts
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            36: 36,
            41: 41,
            46: 46,
            49: 49,
            50: 50,
            54: 54,
            55: 55,
            56: 56,
            57: 57,
            58: 58,
            59: 59,
            8: 8,
            9: 9
        }],
        8: [function (t, e, i) {
            "use strict";
            e.exports = function (t) {
                t.Bar = function (e, i) {
                    return i.type = "bar", new t(e, i)
                }
            }
        }, {}],
        9: [function (t, e, i) {
            "use strict";
            e.exports = function (t) {
                t.Bubble = function (e, i) {
                    return i.type = "bubble", new t(e, i)
                }
            }
        }, {}],
        10: [function (t, e, i) {
            "use strict";
            e.exports = function (t) {
                t.Doughnut = function (e, i) {
                    return i.type = "doughnut", new t(e, i)
                }
            }
        }, {}],
        11: [function (t, e, i) {
            "use strict";
            e.exports = function (t) {
                t.Line = function (e, i) {
                    return i.type = "line", new t(e, i)
                }
            }
        }, {}],
        12: [function (t, e, i) {
            "use strict";
            e.exports = function (t) {
                t.PolarArea = function (e, i) {
                    return i.type = "polarArea", new t(e, i)
                }
            }
        }, {}],
        13: [function (t, e, i) {
            "use strict";
            e.exports = function (t) {
                t.Radar = function (e, i) {
                    return i.type = "radar", new t(e, i)
                }
            }
        }, {}],
        14: [function (t, e, i) {
            "use strict";
            e.exports = function (t) {
                t.Scatter = function (e, i) {
                    return i.type = "scatter", new t(e, i)
                }
            }
        }, {}],
        15: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(41),
                a = t(46);
            n._set("bar", {
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }],
                    yAxes: [{
                        type: "linear"
                    }]
                }
            }), n._set("horizontalBar", {
                hover: {
                    mode: "index",
                    axis: "y"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        position: "left",
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }]
                },
                elements: {
                    rectangle: {
                        borderSkipped: "left"
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function (t, e) {
                            var i = "";
                            return 0 < t.length && (t[0].yLabel ? i = t[0].yLabel : 0 < e.labels.length && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
                        },
                        label: function (t, e) {
                            return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                        }
                    },
                    mode: "index",
                    axis: "y"
                }
            }), e.exports = function (t) {
                t.controllers.bar = t.DatasetController.extend({
                    dataElementType: o.Rectangle,
                    initialize: function () {
                        var e;
                        t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0
                    },
                    update: function (t) {
                        var e, i, n = this.getMeta().data;
                        for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
                    },
                    updateElement: function (t, e, i) {
                        var n = this,
                            o = n.chart,
                            r = n.getMeta(),
                            s = n.getDataset(),
                            l = t.custom || {},
                            d = o.options.elements.rectangle;
                        t._xScale = n.getScaleForId(r.xAxisID), t._yScale = n.getScaleForId(r.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
                            datasetLabel: s.label,
                            label: o.data.labels[e],
                            borderSkipped: l.borderSkipped ? l.borderSkipped : d.borderSkipped,
                            backgroundColor: l.backgroundColor ? l.backgroundColor : a.valueAtIndexOrDefault(s.backgroundColor, e, d.backgroundColor),
                            borderColor: l.borderColor ? l.borderColor : a.valueAtIndexOrDefault(s.borderColor, e, d.borderColor),
                            borderWidth: l.borderWidth ? l.borderWidth : a.valueAtIndexOrDefault(s.borderWidth, e, d.borderWidth)
                        }, n.updateElementGeometry(t, e, i), t.pivot()
                    },
                    updateElementGeometry: function (t, e, i) {
                        var n = this,
                            o = t._model,
                            a = n.getValueScale(),
                            r = a.getBasePixel(),
                            s = a.isHorizontal(),
                            l = n._ruler || n.getRuler(),
                            d = n.calculateBarValuePixels(n.index, e),
                            u = n.calculateBarIndexPixels(n.index, e, l);
                        o.horizontal = s, o.base = i ? r : d.base, o.x = s ? i ? r : d.head : u.center, o.y = s ? u.center : i ? r : d.head, o.height = s ? u.size : void 0, o.width = s ? void 0 : u.size
                    },
                    getValueScaleId: function () {
                        return this.getMeta().yAxisID
                    },
                    getIndexScaleId: function () {
                        return this.getMeta().xAxisID
                    },
                    getValueScale: function () {
                        return this.getScaleForId(this.getValueScaleId())
                    },
                    getIndexScale: function () {
                        return this.getScaleForId(this.getIndexScaleId())
                    },
                    _getStacks: function (t) {
                        var e, i, n = this.chart,
                            o = this.getIndexScale().options.stacked,
                            a = void 0 === t ? n.data.datasets.length : t + 1,
                            r = [];
                        for (e = 0; e < a; ++e)(i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === o || !0 === o && -1 === r.indexOf(i.stack) || void 0 === o && (void 0 === i.stack || -1 === r.indexOf(i.stack))) && r.push(i.stack);
                        return r
                    },
                    getStackCount: function () {
                        return this._getStacks().length
                    },
                    getStackIndex: function (t, e) {
                        var i = this._getStacks(t),
                            n = void 0 !== e ? i.indexOf(e) : -1;
                        return -1 === n ? i.length - 1 : n
                    },
                    getRuler: function () {
                        var t, e, i = this.getIndexScale(),
                            n = this.getStackCount(),
                            o = this.index,
                            r = i.isHorizontal(),
                            s = r ? i.left : i.top,
                            l = s + (r ? i.width : i.height),
                            d = [];
                        for (t = 0, e = this.getMeta().data.length; t < e; ++t) d.push(i.getPixelForValue(null, t, o));
                        return {
                            min: a.isNullOrUndef(i.options.barThickness) ? function (t, e) {
                                var i, n, o, a, r = t.isHorizontal() ? t.width : t.height,
                                    s = t.getTicks();
                                for (o = 1, a = e.length; o < a; ++o) r = Math.min(r, e[o] - e[o - 1]);
                                for (o = 0, a = s.length; o < a; ++o) n = t.getPixelForTick(o), r = 0 < o ? Math.min(r, n - i) : r, i = n;
                                return r
                            }(i, d) : -1,
                            pixels: d,
                            start: s,
                            end: l,
                            stackCount: n,
                            scale: i
                        }
                    },
                    calculateBarValuePixels: function (t, e) {
                        var i, n, o, a, r, s, l = this.chart,
                            d = this.getMeta(),
                            u = this.getValueScale(),
                            h = l.data.datasets,
                            c = u.getRightValue(h[t].data[e]),
                            f = u.options.stacked,
                            p = d.stack,
                            g = 0;
                        if (f || void 0 === f && void 0 !== p)
                            for (i = 0; i < t; ++i)(n = l.getDatasetMeta(i)).bar && n.stack === p && n.controller.getValueScaleId() === u.id && l.isDatasetVisible(i) && (o = u.getRightValue(h[i].data[e]), (c < 0 && o < 0 || 0 <= c && 0 < o) && (g += o));
                        return a = u.getPixelForValue(g), {
                            size: s = ((r = u.getPixelForValue(g + c)) - a) / 2,
                            base: a,
                            head: r,
                            center: r + s / 2
                        }
                    },
                    calculateBarIndexPixels: function (t, e, i) {
                        var n, o, r, s, l, d, u, h, c, f, p, g, m, v, y, b, x, _ = i.scale.options,
                            w = "flex" === _.barThickness ? (c = e, p = _, v = (m = (f = i).pixels)[c], y = 0 < c ? m[c - 1] : null, b = c < m.length - 1 ? m[c + 1] : null, x = p.categoryPercentage, null === y && (y = v - (null === b ? f.end - v : b - v)), null === b && (b = v + v - y), g = v - (v - y) / 2 * x, {
                                chunk: (b - y) / 2 * x / f.stackCount,
                                ratio: p.barPercentage,
                                start: g
                            }) : (n = e, o = i, d = (r = _).barThickness, u = o.stackCount, h = o.pixels[n], l = a.isNullOrUndef(d) ? (s = o.min * r.categoryPercentage, r.barPercentage) : (s = d * u, 1), {
                                chunk: s / u,
                                ratio: l,
                                start: h - s / 2
                            }),
                            S = this.getStackIndex(t, this.getMeta().stack),
                            k = w.start + w.chunk * S + w.chunk / 2,
                            M = Math.min(a.valueOrDefault(_.maxBarThickness, 1 / 0), w.chunk * w.ratio);
                        return {
                            base: k - M / 2,
                            head: k + M / 2,
                            center: k,
                            size: M
                        }
                    },
                    draw: function () {
                        var t = this.chart,
                            e = this.getValueScale(),
                            i = this.getMeta().data,
                            n = this.getDataset(),
                            o = i.length,
                            r = 0;
                        for (a.canvas.clipArea(t.ctx, t.chartArea); r < o; ++r) isNaN(e.getRightValue(n.data[r])) || i[r].draw();
                        a.canvas.unclipArea(t.ctx)
                    }
                }), t.controllers.horizontalBar = t.controllers.bar.extend({
                    getValueScaleId: function () {
                        return this.getMeta().xAxisID
                    },
                    getIndexScaleId: function () {
                        return this.getMeta().yAxisID
                    }
                })
            }
        }, {
            26: 26,
            41: 41,
            46: 46
        }],
        16: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(41),
                a = t(46);
            n._set("bubble", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        position: "left",
                        id: "y-axis-0"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        label: function (t, e) {
                            var i = e.datasets[t.datasetIndex].label || "",
                                n = e.datasets[t.datasetIndex].data[t.index];
                            return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
                        }
                    }
                }
            }), e.exports = function (t) {
                t.controllers.bubble = t.DatasetController.extend({
                    dataElementType: o.Point,
                    update: function (t) {
                        var e = this,
                            i = e.getMeta().data;
                        a.each(i, function (i, n) {
                            e.updateElement(i, n, t)
                        })
                    },
                    updateElement: function (t, e, i) {
                        var n = this,
                            o = n.getMeta(),
                            a = t.custom || {},
                            r = n.getScaleForId(o.xAxisID),
                            s = n.getScaleForId(o.yAxisID),
                            l = n._resolveElementOptions(t, e),
                            d = n.getDataset().data[e],
                            u = n.index,
                            h = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == typeof d ? d : NaN, e, u),
                            c = i ? s.getBasePixel() : s.getPixelForValue(d, e, u);
                        t._xScale = r, t._yScale = s, t._options = l, t._datasetIndex = u, t._index = e, t._model = {
                            backgroundColor: l.backgroundColor,
                            borderColor: l.borderColor,
                            borderWidth: l.borderWidth,
                            hitRadius: l.hitRadius,
                            pointStyle: l.pointStyle,
                            rotation: l.rotation,
                            radius: i ? 0 : l.radius,
                            skip: a.skip || isNaN(h) || isNaN(c),
                            x: h,
                            y: c
                        }, t.pivot()
                    },
                    setHoverStyle: function (t) {
                        var e = t._model,
                            i = t._options;
                        t.$previousStyle = {
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: e.borderWidth,
                            radius: e.radius
                        }, e.backgroundColor = a.valueOrDefault(i.hoverBackgroundColor, a.getHoverColor(i.backgroundColor)), e.borderColor = a.valueOrDefault(i.hoverBorderColor, a.getHoverColor(i.borderColor)), e.borderWidth = a.valueOrDefault(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius
                    },
                    _resolveElementOptions: function (t, e) {
                        var i, n, o, r = this.chart,
                            s = r.data.datasets[this.index],
                            l = t.custom || {},
                            d = r.options.elements.point,
                            u = a.options.resolve,
                            h = s.data[e],
                            c = {},
                            f = {
                                chart: r,
                                dataIndex: e,
                                dataset: s,
                                datasetIndex: this.index
                            },
                            p = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
                        for (i = 0, n = p.length; i < n; ++i) c[o = p[i]] = u([l[o], s[o], d[o]], f, e);
                        return c.radius = u([l.radius, h ? h.r : void 0, s.radius, d.radius], f, e), c
                    }
                })
            }
        }, {
            26: 26,
            41: 41,
            46: 46
        }],
        17: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(41),
                a = t(46);
            n._set("doughnut", {
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                hover: {
                    mode: "single"
                },
                legendCallback: function (t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var i = t.data,
                        n = i.datasets,
                        o = i.labels;
                    if (n.length)
                        for (var a = 0; a < n[0].data.length; ++a) e.push('<li><span style="background-color:' + n[0].backgroundColor[a] + '"></span>'), o[a] && e.push(o[a]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function (t) {
                            var e = t.data;
                            return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
                                var o = t.getDatasetMeta(0),
                                    r = e.datasets[0],
                                    s = o.data[n],
                                    l = s && s.custom || {},
                                    d = a.valueAtIndexOrDefault,
                                    u = t.options.elements.arc;
                                return {
                                    text: i,
                                    fillStyle: l.backgroundColor ? l.backgroundColor : d(r.backgroundColor, n, u.backgroundColor),
                                    strokeStyle: l.borderColor ? l.borderColor : d(r.borderColor, n, u.borderColor),
                                    lineWidth: l.borderWidth ? l.borderWidth : d(r.borderWidth, n, u.borderWidth),
                                    hidden: isNaN(r.data[n]) || o.data[n].hidden,
                                    index: n
                                }
                            }) : []
                        }
                    },
                    onClick: function (t, e) {
                        var i, n, o, a = e.index,
                            r = this.chart;
                        for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)(o = r.getDatasetMeta(i)).data[a] && (o.data[a].hidden = !o.data[a].hidden);
                        r.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: -.5 * Math.PI,
                circumference: 2 * Math.PI,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        label: function (t, e) {
                            var i = e.labels[t.index],
                                n = ": " + e.datasets[t.datasetIndex].data[t.index];
                            return a.isArray(i) ? (i = i.slice())[0] += n : i += n, i
                        }
                    }
                }
            }), n._set("pie", a.clone(n.doughnut)), n._set("pie", {
                cutoutPercentage: 0
            }), e.exports = function (t) {
                t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                    dataElementType: o.Arc,
                    linkScales: a.noop,
                    getRingIndex: function (t) {
                        for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
                        return e
                    },
                    update: function (t) {
                        var e = this,
                            i = e.chart,
                            n = i.chartArea,
                            o = i.options,
                            r = o.elements.arc,
                            s = n.right - n.left - r.borderWidth,
                            l = n.bottom - n.top - r.borderWidth,
                            d = Math.min(s, l),
                            u = {
                                x: 0,
                                y: 0
                            },
                            h = e.getMeta(),
                            c = o.cutoutPercentage,
                            f = o.circumference;
                        if (f < 2 * Math.PI) {
                            var p = o.rotation % (2 * Math.PI),
                                g = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + f,
                                m = Math.cos(p),
                                v = Math.sin(p),
                                y = Math.cos(g),
                                b = Math.sin(g),
                                x = p <= 0 && 0 <= g || p <= 2 * Math.PI && 2 * Math.PI <= g,
                                _ = p <= .5 * Math.PI && .5 * Math.PI <= g || p <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                                w = p <= -Math.PI && -Math.PI <= g || p <= Math.PI && Math.PI <= g,
                                S = p <= .5 * -Math.PI && .5 * -Math.PI <= g || p <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                                k = c / 100,
                                M = w ? -1 : Math.min(m * (m < 0 ? 1 : k), y * (y < 0 ? 1 : k)),
                                C = S ? -1 : Math.min(v * (v < 0 ? 1 : k), b * (b < 0 ? 1 : k)),
                                D = x ? 1 : Math.max(m * (0 < m ? 1 : k), y * (0 < y ? 1 : k)),
                                T = _ ? 1 : Math.max(v * (0 < v ? 1 : k), b * (0 < b ? 1 : k)),
                                O = .5 * (D - M),
                                P = .5 * (T - C);
                            d = Math.min(s / O, l / P), u = {
                                x: -.5 * (D + M),
                                y: -.5 * (T + C)
                            }
                        }
                        i.borderWidth = e.getMaxBorderWidth(h.data), i.outerRadius = Math.max((d - i.borderWidth) / 2, 0), i.innerRadius = Math.max(c ? i.outerRadius / 100 * c : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = u.x * i.outerRadius, i.offsetY = u.y * i.outerRadius, h.total = e.calculateTotal(), e.outerRadius = i.outerRadius - i.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - i.radiusLength, 0), a.each(h.data, function (i, n) {
                            e.updateElement(i, n, t)
                        })
                    },
                    updateElement: function (t, e, i) {
                        var n = this,
                            o = n.chart,
                            r = o.chartArea,
                            s = o.options,
                            l = s.animation,
                            d = (r.left + r.right) / 2,
                            u = (r.top + r.bottom) / 2,
                            h = s.rotation,
                            c = s.rotation,
                            f = n.getDataset(),
                            p = i && l.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI)),
                            g = i && l.animateScale ? 0 : n.innerRadius,
                            m = i && l.animateScale ? 0 : n.outerRadius,
                            v = a.valueAtIndexOrDefault;
                        a.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _model: {
                                x: d + o.offsetX,
                                y: u + o.offsetY,
                                startAngle: h,
                                endAngle: c,
                                circumference: p,
                                outerRadius: m,
                                innerRadius: g,
                                label: v(f.label, e, o.data.labels[e])
                            }
                        });
                        var y = t._model,
                            b = t.custom || {},
                            x = a.valueAtIndexOrDefault,
                            _ = this.chart.options.elements.arc;
                        y.backgroundColor = b.backgroundColor ? b.backgroundColor : x(f.backgroundColor, e, _.backgroundColor), y.borderColor = b.borderColor ? b.borderColor : x(f.borderColor, e, _.borderColor), y.borderWidth = b.borderWidth ? b.borderWidth : x(f.borderWidth, e, _.borderWidth), i && l.animateRotate || (y.startAngle = 0 === e ? s.rotation : n.getMeta().data[e - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), t.pivot()
                    },
                    calculateTotal: function () {
                        var t, e = this.getDataset(),
                            i = this.getMeta(),
                            n = 0;
                        return a.each(i.data, function (i, o) {
                            t = e.data[o], isNaN(t) || i.hidden || (n += Math.abs(t))
                        }), n
                    },
                    calculateCircumference: function (t) {
                        var e = this.getMeta().total;
                        return 0 < e && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
                    },
                    getMaxBorderWidth: function (t) {
                        for (var e, i, n = 0, o = this.index, a = t.length, r = 0; r < a; r++) n = (n = n < (e = t[r]._model ? t[r]._model.borderWidth : 0) ? e : n) < (i = t[r]._chart ? t[r]._chart.config.data.datasets[o].hoverBorderWidth : 0) ? i : n;
                        return n
                    }
                })
            }
        }, {
            26: 26,
            41: 41,
            46: 46
        }],
        18: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(41),
                a = t(46);
            n._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        id: "y-axis-0"
                    }]
                }
            }), e.exports = function (t) {
                function e(t, e) {
                    return a.valueOrDefault(t.showLine, e.showLines)
                }
                t.controllers.line = t.DatasetController.extend({
                    datasetElementType: o.Line,
                    dataElementType: o.Point,
                    update: function (t) {
                        var i, n, o, r = this,
                            s = r.getMeta(),
                            l = s.dataset,
                            d = s.data || [],
                            u = r.chart.options,
                            h = u.elements.line,
                            c = r.getScaleForId(s.yAxisID),
                            f = r.getDataset(),
                            p = e(f, u);
                        for (p && (o = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = c, l._datasetIndex = r.index, l._children = d, l._model = {
                                spanGaps: f.spanGaps ? f.spanGaps : u.spanGaps,
                                tension: o.tension ? o.tension : a.valueOrDefault(f.lineTension, h.tension),
                                backgroundColor: o.backgroundColor ? o.backgroundColor : f.backgroundColor || h.backgroundColor,
                                borderWidth: o.borderWidth ? o.borderWidth : f.borderWidth || h.borderWidth,
                                borderColor: o.borderColor ? o.borderColor : f.borderColor || h.borderColor,
                                borderCapStyle: o.borderCapStyle ? o.borderCapStyle : f.borderCapStyle || h.borderCapStyle,
                                borderDash: o.borderDash ? o.borderDash : f.borderDash || h.borderDash,
                                borderDashOffset: o.borderDashOffset ? o.borderDashOffset : f.borderDashOffset || h.borderDashOffset,
                                borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : f.borderJoinStyle || h.borderJoinStyle,
                                fill: o.fill ? o.fill : void 0 !== f.fill ? f.fill : h.fill,
                                steppedLine: o.steppedLine ? o.steppedLine : a.valueOrDefault(f.steppedLine, h.stepped),
                                cubicInterpolationMode: o.cubicInterpolationMode ? o.cubicInterpolationMode : a.valueOrDefault(f.cubicInterpolationMode, h.cubicInterpolationMode)
                            }, l.pivot()), i = 0, n = d.length; i < n; ++i) r.updateElement(d[i], i, t);
                        for (p && 0 !== l._model.tension && r.updateBezierControlPoints(), i = 0, n = d.length; i < n; ++i) d[i].pivot()
                    },
                    getPointBackgroundColor: function (t, e) {
                        var i = this.chart.options.elements.point.backgroundColor,
                            n = this.getDataset(),
                            o = t.custom || {};
                        return o.backgroundColor ? i = o.backgroundColor : n.pointBackgroundColor ? i = a.valueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i
                    },
                    getPointBorderColor: function (t, e) {
                        var i = this.chart.options.elements.point.borderColor,
                            n = this.getDataset(),
                            o = t.custom || {};
                        return o.borderColor ? i = o.borderColor : n.pointBorderColor ? i = a.valueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i
                    },
                    getPointBorderWidth: function (t, e) {
                        var i = this.chart.options.elements.point.borderWidth,
                            n = this.getDataset(),
                            o = t.custom || {};
                        return isNaN(o.borderWidth) ? !isNaN(n.pointBorderWidth) || a.isArray(n.pointBorderWidth) ? i = a.valueAtIndexOrDefault(n.pointBorderWidth, e, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = o.borderWidth, i
                    },
                    getPointRotation: function (t, e) {
                        var i = this.chart.options.elements.point.rotation,
                            n = this.getDataset(),
                            o = t.custom || {};
                        return isNaN(o.rotation) ? isNaN(n.pointRotation) && !a.isArray(n.pointRotation) || (i = a.valueAtIndexOrDefault(n.pointRotation, e, i)) : i = o.rotation, i
                    },
                    updateElement: function (t, e, i) {
                        var n, o, r = this,
                            s = r.getMeta(),
                            l = t.custom || {},
                            d = r.getDataset(),
                            u = r.index,
                            h = d.data[e],
                            c = r.getScaleForId(s.yAxisID),
                            f = r.getScaleForId(s.xAxisID),
                            p = r.chart.options.elements.point;
                        void 0 !== d.radius && void 0 === d.pointRadius && (d.pointRadius = d.radius), void 0 !== d.hitRadius && void 0 === d.pointHitRadius && (d.pointHitRadius = d.hitRadius), n = f.getPixelForValue("object" == typeof h ? h : NaN, e, u), o = i ? c.getBasePixel() : r.calculatePointY(h, e, u), t._xScale = f, t._yScale = c, t._datasetIndex = u, t._index = e, t._model = {
                            x: n,
                            y: o,
                            skip: l.skip || isNaN(n) || isNaN(o),
                            radius: l.radius || a.valueAtIndexOrDefault(d.pointRadius, e, p.radius),
                            pointStyle: l.pointStyle || a.valueAtIndexOrDefault(d.pointStyle, e, p.pointStyle),
                            rotation: r.getPointRotation(t, e),
                            backgroundColor: r.getPointBackgroundColor(t, e),
                            borderColor: r.getPointBorderColor(t, e),
                            borderWidth: r.getPointBorderWidth(t, e),
                            tension: s.dataset._model ? s.dataset._model.tension : 0,
                            steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                            hitRadius: l.hitRadius || a.valueAtIndexOrDefault(d.pointHitRadius, e, p.hitRadius)
                        }
                    },
                    calculatePointY: function (t, e, i) {
                        var n, o, a, r = this.chart,
                            s = this.getMeta(),
                            l = this.getScaleForId(s.yAxisID),
                            d = 0,
                            u = 0;
                        if (l.options.stacked) {
                            for (n = 0; n < i; n++)
                                if (o = r.data.datasets[n], "line" === (a = r.getDatasetMeta(n)).type && a.yAxisID === l.id && r.isDatasetVisible(n)) {
                                    var h = Number(l.getRightValue(o.data[e]));
                                    h < 0 ? u += h || 0 : d += h || 0
                                } var c = Number(l.getRightValue(t));
                            return c < 0 ? l.getPixelForValue(u + c) : l.getPixelForValue(d + c)
                        }
                        return l.getPixelForValue(t)
                    },
                    updateBezierControlPoints: function () {
                        var t, e, i, n, o = this.getMeta(),
                            r = this.chart.chartArea,
                            s = o.data || [];

                        function l(t, e, i) {
                            return Math.max(Math.min(t, i), e)
                        }
                        if (o.dataset._model.spanGaps && (s = s.filter(function (t) {
                                return !t._model.skip
                            })), "monotone" === o.dataset._model.cubicInterpolationMode) a.splineCurveMonotone(s);
                        else
                            for (t = 0, e = s.length; t < e; ++t) i = s[t]._model, n = a.splineCurve(a.previousItem(s, t)._model, i, a.nextItem(s, t)._model, o.dataset._model.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
                        if (this.chart.options.elements.line.capBezierPoints)
                            for (t = 0, e = s.length; t < e; ++t)(i = s[t]._model).controlPointPreviousX = l(i.controlPointPreviousX, r.left, r.right), i.controlPointPreviousY = l(i.controlPointPreviousY, r.top, r.bottom), i.controlPointNextX = l(i.controlPointNextX, r.left, r.right), i.controlPointNextY = l(i.controlPointNextY, r.top, r.bottom)
                    },
                    draw: function () {
                        var t, i = this.chart,
                            n = this.getMeta(),
                            o = n.data || [],
                            r = i.chartArea,
                            s = o.length,
                            l = 0;
                        for (e(this.getDataset(), i.options) && (t = (n.dataset._model.borderWidth || 0) / 2, a.canvas.clipArea(i.ctx, {
                                left: r.left,
                                right: r.right,
                                top: r.top - t,
                                bottom: r.bottom + t
                            }), n.dataset.draw(), a.canvas.unclipArea(i.ctx)); l < s; ++l) o[l].draw(r)
                    },
                    setHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            n = t.custom || {},
                            o = t._model;
                        t.$previousStyle = {
                            backgroundColor: o.backgroundColor,
                            borderColor: o.borderColor,
                            borderWidth: o.borderWidth,
                            radius: o.radius
                        }, o.backgroundColor = n.hoverBackgroundColor || a.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, a.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor || a.valueAtIndexOrDefault(e.pointHoverBorderColor, i, a.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth || a.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, o.borderWidth), o.radius = n.hoverRadius || a.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius)
                    }
                })
            }
        }, {
            26: 26,
            41: 41,
            46: 46
        }],
        19: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(41),
                a = t(46);
            n._set("polarArea", {
                scale: {
                    type: "radialLinear",
                    angleLines: {
                        display: !1
                    },
                    gridLines: {
                        circular: !0
                    },
                    pointLabels: {
                        display: !1
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                },
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                startAngle: -.5 * Math.PI,
                legendCallback: function (t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var i = t.data,
                        n = i.datasets,
                        o = i.labels;
                    if (n.length)
                        for (var a = 0; a < n[0].data.length; ++a) e.push('<li><span style="background-color:' + n[0].backgroundColor[a] + '"></span>'), o[a] && e.push(o[a]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function (t) {
                            var e = t.data;
                            return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
                                var o = t.getDatasetMeta(0),
                                    r = e.datasets[0],
                                    s = o.data[n].custom || {},
                                    l = a.valueAtIndexOrDefault,
                                    d = t.options.elements.arc;
                                return {
                                    text: i,
                                    fillStyle: s.backgroundColor ? s.backgroundColor : l(r.backgroundColor, n, d.backgroundColor),
                                    strokeStyle: s.borderColor ? s.borderColor : l(r.borderColor, n, d.borderColor),
                                    lineWidth: s.borderWidth ? s.borderWidth : l(r.borderWidth, n, d.borderWidth),
                                    hidden: isNaN(r.data[n]) || o.data[n].hidden,
                                    index: n
                                }
                            }) : []
                        }
                    },
                    onClick: function (t, e) {
                        var i, n, o, a = e.index,
                            r = this.chart;
                        for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)(o = r.getDatasetMeta(i)).data[a].hidden = !o.data[a].hidden;
                        r.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        label: function (t, e) {
                            return e.labels[t.index] + ": " + t.yLabel
                        }
                    }
                }
            }), e.exports = function (t) {
                t.controllers.polarArea = t.DatasetController.extend({
                    dataElementType: o.Arc,
                    linkScales: a.noop,
                    update: function (t) {
                        var e, i, n, o = this,
                            r = o.getDataset(),
                            s = o.getMeta(),
                            l = o.chart.options.startAngle || 0,
                            d = o._starts = [],
                            u = o._angles = [];
                        for (o._updateRadius(), s.count = o.countVisibleElements(), e = 0, i = r.data.length; e < i; e++) d[e] = l, n = o._computeAngle(e), l += u[e] = n;
                        a.each(s.data, function (e, i) {
                            o.updateElement(e, i, t)
                        })
                    },
                    _updateRadius: function () {
                        var t = this,
                            e = t.chart,
                            i = e.chartArea,
                            n = e.options,
                            o = n.elements.arc,
                            a = Math.min(i.right - i.left, i.bottom - i.top);
                        e.outerRadius = Math.max((a - o.borderWidth / 2) / 2, 0), e.innerRadius = Math.max(n.cutoutPercentage ? e.outerRadius / 100 * n.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
                    },
                    updateElement: function (t, e, i) {
                        var n = this,
                            o = n.chart,
                            r = n.getDataset(),
                            s = o.options,
                            l = s.animation,
                            d = o.scale,
                            u = o.data.labels,
                            h = d.xCenter,
                            c = d.yCenter,
                            f = s.startAngle,
                            p = t.hidden ? 0 : d.getDistanceFromCenterForValue(r.data[e]),
                            g = n._starts[e],
                            m = g + (t.hidden ? 0 : n._angles[e]),
                            v = l.animateScale ? 0 : d.getDistanceFromCenterForValue(r.data[e]);
                        a.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _scale: d,
                            _model: {
                                x: h,
                                y: c,
                                innerRadius: 0,
                                outerRadius: i ? v : p,
                                startAngle: i && l.animateRotate ? f : g,
                                endAngle: i && l.animateRotate ? f : m,
                                label: a.valueAtIndexOrDefault(u, e, u[e])
                            }
                        });
                        var y = this.chart.options.elements.arc,
                            b = t.custom || {},
                            x = a.valueAtIndexOrDefault,
                            _ = t._model;
                        _.backgroundColor = b.backgroundColor ? b.backgroundColor : x(r.backgroundColor, e, y.backgroundColor), _.borderColor = b.borderColor ? b.borderColor : x(r.borderColor, e, y.borderColor), _.borderWidth = b.borderWidth ? b.borderWidth : x(r.borderWidth, e, y.borderWidth), t.pivot()
                    },
                    countVisibleElements: function () {
                        var t = this.getDataset(),
                            e = this.getMeta(),
                            i = 0;
                        return a.each(e.data, function (e, n) {
                            isNaN(t.data[n]) || e.hidden || i++
                        }), i
                    },
                    _computeAngle: function (t) {
                        var e = this,
                            i = this.getMeta().count,
                            n = e.getDataset(),
                            o = e.getMeta();
                        if (isNaN(n.data[t]) || o.data[t].hidden) return 0;
                        var r = {
                            chart: e.chart,
                            dataIndex: t,
                            dataset: n,
                            datasetIndex: e.index
                        };
                        return a.options.resolve([e.chart.options.elements.arc.angle, 2 * Math.PI / i], r, t)
                    }
                })
            }
        }, {
            26: 26,
            41: 41,
            46: 46
        }],
        20: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(41),
                a = t(46);
            n._set("radar", {
                scale: {
                    type: "radialLinear"
                },
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }), e.exports = function (t) {
                t.controllers.radar = t.DatasetController.extend({
                    datasetElementType: o.Line,
                    dataElementType: o.Point,
                    linkScales: a.noop,
                    update: function (t) {
                        var e = this,
                            i = e.getMeta(),
                            n = i.dataset,
                            o = i.data,
                            r = n.custom || {},
                            s = e.getDataset(),
                            l = e.chart.options.elements.line,
                            d = e.chart.scale;
                        void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), a.extend(i.dataset, {
                            _datasetIndex: e.index,
                            _scale: d,
                            _children: o,
                            _loop: !0,
                            _model: {
                                tension: r.tension ? r.tension : a.valueOrDefault(s.lineTension, l.tension),
                                backgroundColor: r.backgroundColor ? r.backgroundColor : s.backgroundColor || l.backgroundColor,
                                borderWidth: r.borderWidth ? r.borderWidth : s.borderWidth || l.borderWidth,
                                borderColor: r.borderColor ? r.borderColor : s.borderColor || l.borderColor,
                                fill: r.fill ? r.fill : void 0 !== s.fill ? s.fill : l.fill,
                                borderCapStyle: r.borderCapStyle ? r.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                                borderDash: r.borderDash ? r.borderDash : s.borderDash || l.borderDash,
                                borderDashOffset: r.borderDashOffset ? r.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                                borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
                            }
                        }), i.dataset.pivot(), a.each(o, function (i, n) {
                            e.updateElement(i, n, t)
                        }, e), e.updateBezierControlPoints()
                    },
                    updateElement: function (t, e, i) {
                        var n = this,
                            o = t.custom || {},
                            r = n.getDataset(),
                            s = n.chart.scale,
                            l = n.chart.options.elements.point,
                            d = s.getPointPositionForValue(e, r.data[e]);
                        void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius), void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius), a.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _scale: s,
                            _model: {
                                x: i ? s.xCenter : d.x,
                                y: i ? s.yCenter : d.y,
                                tension: o.tension ? o.tension : a.valueOrDefault(r.lineTension, n.chart.options.elements.line.tension),
                                radius: o.radius ? o.radius : a.valueAtIndexOrDefault(r.pointRadius, e, l.radius),
                                backgroundColor: o.backgroundColor ? o.backgroundColor : a.valueAtIndexOrDefault(r.pointBackgroundColor, e, l.backgroundColor),
                                borderColor: o.borderColor ? o.borderColor : a.valueAtIndexOrDefault(r.pointBorderColor, e, l.borderColor),
                                borderWidth: o.borderWidth ? o.borderWidth : a.valueAtIndexOrDefault(r.pointBorderWidth, e, l.borderWidth),
                                pointStyle: o.pointStyle ? o.pointStyle : a.valueAtIndexOrDefault(r.pointStyle, e, l.pointStyle),
                                rotation: o.rotation ? o.rotation : a.valueAtIndexOrDefault(r.pointRotation, e, l.rotation),
                                hitRadius: o.hitRadius ? o.hitRadius : a.valueAtIndexOrDefault(r.pointHitRadius, e, l.hitRadius)
                            }
                        }), t._model.skip = o.skip ? o.skip : isNaN(t._model.x) || isNaN(t._model.y)
                    },
                    updateBezierControlPoints: function () {
                        var t = this.chart.chartArea,
                            e = this.getMeta();
                        a.each(e.data, function (i, n) {
                            var o = i._model,
                                r = a.splineCurve(a.previousItem(e.data, n, !0)._model, o, a.nextItem(e.data, n, !0)._model, o.tension);
                            o.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), o.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), o.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), o.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), i.pivot()
                        })
                    },
                    setHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t.custom || {},
                            n = t._index,
                            o = t._model;
                        t.$previousStyle = {
                            backgroundColor: o.backgroundColor,
                            borderColor: o.borderColor,
                            borderWidth: o.borderWidth,
                            radius: o.radius
                        }, o.radius = i.hoverRadius ? i.hoverRadius : a.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : a.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, a.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : a.valueAtIndexOrDefault(e.pointHoverBorderColor, n, a.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : a.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, o.borderWidth)
                    }
                })
            }
        }, {
            26: 26,
            41: 41,
            46: 46
        }],
        21: [function (t, e, i) {
            "use strict";
            t(26)._set("scatter", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        id: "x-axis-1",
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        id: "y-axis-1",
                        type: "linear",
                        position: "left"
                    }]
                },
                showLines: !1,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        label: function (t) {
                            return "(" + t.xLabel + ", " + t.yLabel + ")"
                        }
                    }
                }
            }), e.exports = function (t) {
                t.controllers.scatter = t.controllers.line
            }
        }, {
            26: 26
        }],
        22: [function (t, e, i) {
            "use strict";
            var n = t(27);
            i = e.exports = n.extend({
                chart: null,
                currentStep: 0,
                numSteps: 60,
                easing: "",
                render: null,
                onAnimationProgress: null,
                onAnimationComplete: null
            }), Object.defineProperty(i.prototype, "animationObject", {
                get: function () {
                    return this
                }
            }), Object.defineProperty(i.prototype, "chartInstance", {
                get: function () {
                    return this.chart
                },
                set: function (t) {
                    this.chart = t
                }
            })
        }, {
            27: 27
        }],
        23: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(46);
            n._set("global", {
                animation: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: o.noop,
                    onComplete: o.noop
                }
            }), e.exports = {
                frameDuration: 17,
                animations: [],
                dropFrames: 0,
                request: null,
                addAnimation: function (t, e, i, n) {
                    var o, a, r = this.animations;
                    for (e.chart = t, n || (t.animating = !0), o = 0, a = r.length; o < a; ++o)
                        if (r[o].chart === t) return void(r[o] = e);
                    r.push(e), 1 === r.length && this.requestAnimationFrame()
                },
                cancelAnimation: function (t) {
                    var e = o.findIndex(this.animations, function (e) {
                        return e.chart === t
                    }); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
                },
                requestAnimationFrame: function () {
                    var t = this;
                    null === t.request && (t.request = o.requestAnimFrame.call(window, function () {
                        t.request = null, t.startDigest()
                    }))
                },
                startDigest: function () {
                    var t = this,
                        e = Date.now(),
                        i = 0;
                    1 < t.dropFrames && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i);
                    var n = Date.now();
                    t.dropFrames += (n - e) / t.frameDuration, 0 < t.animations.length && t.requestAnimationFrame()
                },
                advance: function (t) {
                    for (var e, i, n = this.animations, a = 0; a < n.length;) i = (e = n[a]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [i, e], i), o.callback(e.onAnimationProgress, [e], i), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], i), i.animating = !1, n.splice(a, 1)) : ++a
                }
            }
        }, {
            26: 26,
            46: 46
        }],
        24: [function (t, e, i) {
            "use strict";
            var n = t(22),
                o = t(23),
                a = t(26),
                r = t(46),
                s = t(29),
                l = t(31),
                d = t(49),
                u = t(32),
                h = t(34),
                c = t(36);
            e.exports = function (t) {
                function e(t) {
                    return "top" === t || "bottom" === t
                }
                t.types = {}, t.instances = {}, t.controllers = {}, r.extend(t.prototype, {
                    construct: function (e, i) {
                        var n, o, s = this;
                        (o = (n = (n = i) || {}).data = n.data || {}).datasets = o.datasets || [], o.labels = o.labels || [], n.options = r.configMerge(a.global, a[n.type], n.options || {}), i = n;
                        var l = d.acquireContext(e, i),
                            u = l && l.canvas,
                            h = u && u.height,
                            c = u && u.width;
                        s.id = r.uid(), s.ctx = l, s.canvas = u, s.config = i, s.width = c, s.height = h, s.aspectRatio = h ? c / h : null, s.options = i.options, s._bufferedRender = !1, (s.chart = s).controller = s, t.instances[s.id] = s, Object.defineProperty(s, "data", {
                            get: function () {
                                return s.config.data
                            },
                            set: function (t) {
                                s.config.data = t
                            }
                        }), l && u ? (s.initialize(), s.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                    },
                    initialize: function () {
                        var t = this;
                        return u.notify(t, "beforeInit"), r.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), u.notify(t, "afterInit"), t
                    },
                    clear: function () {
                        return r.canvas.clear(this), this
                    },
                    stop: function () {
                        return o.cancelAnimation(this), this
                    },
                    resize: function (t) {
                        var e = this,
                            i = e.options,
                            n = e.canvas,
                            o = i.maintainAspectRatio && e.aspectRatio || null,
                            a = Math.max(0, Math.floor(r.getMaximumWidth(n))),
                            s = Math.max(0, Math.floor(o ? a / o : r.getMaximumHeight(n)));
                        if ((e.width !== a || e.height !== s) && (n.width = e.width = a, n.height = e.height = s, n.style.width = a + "px", n.style.height = s + "px", r.retinaScale(e, i.devicePixelRatio), !t)) {
                            var l = {
                                width: a,
                                height: s
                            };
                            u.notify(e, "resize", [l]), e.options.onResize && e.options.onResize(e, l), e.stop(), e.update({
                                duration: e.options.responsiveAnimationDuration
                            })
                        }
                    },
                    ensureScalesHaveIDs: function () {
                        var t = this.options,
                            e = t.scales || {},
                            i = t.scale;
                        r.each(e.xAxes, function (t, e) {
                            t.id = t.id || "x-axis-" + e
                        }), r.each(e.yAxes, function (t, e) {
                            t.id = t.id || "y-axis-" + e
                        }), i && (i.id = i.id || "scale")
                    },
                    buildOrUpdateScales: function () {
                        var t = this,
                            i = t.options,
                            n = t.scales || {},
                            o = [],
                            a = Object.keys(n).reduce(function (t, e) {
                                return t[e] = !1, t
                            }, {});
                        i.scales && (o = o.concat((i.scales.xAxes || []).map(function (t) {
                            return {
                                options: t,
                                dtype: "category",
                                dposition: "bottom"
                            }
                        }), (i.scales.yAxes || []).map(function (t) {
                            return {
                                options: t,
                                dtype: "linear",
                                dposition: "left"
                            }
                        }))), i.scale && o.push({
                            options: i.scale,
                            dtype: "radialLinear",
                            isDefault: !0,
                            dposition: "chartArea"
                        }), r.each(o, function (i) {
                            var o = i.options,
                                s = o.id,
                                l = r.valueOrDefault(o.type, i.dtype);
                            e(o.position) !== e(i.dposition) && (o.position = i.dposition), a[s] = !0;
                            var d = null;
                            if (s in n && n[s].type === l)(d = n[s]).options = o, d.ctx = t.ctx, d.chart = t;
                            else {
                                var u = h.getScaleConstructor(l);
                                if (!u) return;
                                d = new u({
                                    id: s,
                                    type: l,
                                    options: o,
                                    ctx: t.ctx,
                                    chart: t
                                }), n[d.id] = d
                            }
                            d.mergeTicksOptions(), i.isDefault && (t.scale = d)
                        }), r.each(a, function (t, e) {
                            t || delete n[e]
                        }), t.scales = n, h.addScalesToLayout(this)
                    },
                    buildOrUpdateControllers: function () {
                        var e = this,
                            i = [],
                            n = [];
                        return r.each(e.data.datasets, function (o, a) {
                            var r = e.getDatasetMeta(a),
                                s = o.type || e.config.type;
                            if (r.type && r.type !== s && (e.destroyDatasetMeta(a), r = e.getDatasetMeta(a)), r.type = s, i.push(r.type), r.controller) r.controller.updateIndex(a), r.controller.linkScales();
                            else {
                                var l = t.controllers[r.type];
                                if (void 0 === l) throw new Error('"' + r.type + '" is not a chart type.');
                                r.controller = new l(e, a), n.push(r.controller)
                            }
                        }, e), n
                    },
                    resetElements: function () {
                        var t = this;
                        r.each(t.data.datasets, function (e, i) {
                            t.getDatasetMeta(i).controller.reset()
                        }, t)
                    },
                    reset: function () {
                        this.resetElements(), this.tooltip.initialize()
                    },
                    update: function (e) {
                        var i, n, o = this;
                        if (e && "object" == typeof e || (e = {
                                duration: e,
                                lazy: arguments[1]
                            }), n = (i = o).options, r.each(i.scales, function (t) {
                                l.removeBox(i, t)
                            }), n = r.configMerge(t.defaults.global, t.defaults[i.config.type], n), i.options = i.config.options = n, i.ensureScalesHaveIDs(), i.buildOrUpdateScales(), i.tooltip._options = n.tooltips, i.tooltip.initialize(), u._invalidate(o), !1 !== u.notify(o, "beforeUpdate")) {
                            o.tooltip._data = o.data;
                            var a = o.buildOrUpdateControllers();
                            r.each(o.data.datasets, function (t, e) {
                                o.getDatasetMeta(e).controller.buildOrUpdateElements()
                            }, o), o.updateLayout(), o.options.animation && o.options.animation.duration && r.each(a, function (t) {
                                t.reset()
                            }), o.updateDatasets(), o.tooltip.initialize(), o.lastActive = [], u.notify(o, "afterUpdate"), o._bufferedRender ? o._bufferedRequest = {
                                duration: e.duration,
                                easing: e.easing,
                                lazy: e.lazy
                            } : o.render(e)
                        }
                    },
                    updateLayout: function () {
                        !1 !== u.notify(this, "beforeLayout") && (l.update(this, this.width, this.height), u.notify(this, "afterScaleUpdate"), u.notify(this, "afterLayout"))
                    },
                    updateDatasets: function () {
                        if (!1 !== u.notify(this, "beforeDatasetsUpdate")) {
                            for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                            u.notify(this, "afterDatasetsUpdate")
                        }
                    },
                    updateDataset: function (t) {
                        var e = this.getDatasetMeta(t),
                            i = {
                                meta: e,
                                index: t
                            };
                        !1 !== u.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), u.notify(this, "afterDatasetUpdate", [i]))
                    },
                    render: function (t) {
                        var e = this;
                        t && "object" == typeof t || (t = {
                            duration: t,
                            lazy: arguments[1]
                        });
                        var i = t.duration,
                            a = t.lazy;
                        if (!1 !== u.notify(e, "beforeRender")) {
                            var s = e.options.animation,
                                l = function (t) {
                                    u.notify(e, "afterRender"), r.callback(s && s.onComplete, [t], e)
                                };
                            if (s && (void 0 !== i && 0 !== i || void 0 === i && 0 !== s.duration)) {
                                var d = new n({
                                    numSteps: (i || s.duration) / 16.66,
                                    easing: t.easing || s.easing,
                                    render: function (t, e) {
                                        var i = r.easing.effects[e.easing],
                                            n = e.currentStep,
                                            o = n / e.numSteps;
                                        t.draw(i(o), o, n)
                                    },
                                    onAnimationProgress: s.onProgress,
                                    onAnimationComplete: l
                                });
                                o.addAnimation(e, d, i, a)
                            } else e.draw(), l(new n({
                                numSteps: 0,
                                chart: e
                            }));
                            return e
                        }
                    },
                    draw: function (t) {
                        var e = this;
                        e.clear(), r.isNullOrUndef(t) && (t = 1), e.transition(t), e.width <= 0 || e.height <= 0 || !1 !== u.notify(e, "beforeDraw", [t]) && (r.each(e.boxes, function (t) {
                            t.draw(e.chartArea)
                        }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), u.notify(e, "afterDraw", [t]))
                    },
                    transition: function (t) {
                        for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                        this.tooltip.transition(t)
                    },
                    drawDatasets: function (t) {
                        var e = this;
                        if (!1 !== u.notify(e, "beforeDatasetsDraw", [t])) {
                            for (var i = (e.data.datasets || []).length - 1; 0 <= i; --i) e.isDatasetVisible(i) && e.drawDataset(i, t);
                            u.notify(e, "afterDatasetsDraw", [t])
                        }
                    },
                    drawDataset: function (t, e) {
                        var i = this.getDatasetMeta(t),
                            n = {
                                meta: i,
                                index: t,
                                easingValue: e
                            };
                        !1 !== u.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), u.notify(this, "afterDatasetDraw", [n]))
                    },
                    _drawTooltip: function (t) {
                        var e = this.tooltip,
                            i = {
                                tooltip: e,
                                easingValue: t
                            };
                        !1 !== u.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), u.notify(this, "afterTooltipDraw", [i]))
                    },
                    getElementAtEvent: function (t) {
                        return s.modes.single(this, t)
                    },
                    getElementsAtEvent: function (t) {
                        return s.modes.label(this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtXAxis: function (t) {
                        return s.modes["x-axis"](this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtEventForMode: function (t, e, i) {
                        var n = s.modes[e];
                        return "function" == typeof n ? n(this, t, i) : []
                    },
                    getDatasetAtEvent: function (t) {
                        return s.modes.dataset(this, t, {
                            intersect: !0
                        })
                    },
                    getDatasetMeta: function (t) {
                        var e = this.data.datasets[t];
                        e._meta || (e._meta = {});
                        var i = e._meta[this.id];
                        return i || (i = e._meta[this.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        }), i
                    },
                    getVisibleDatasetCount: function () {
                        for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
                        return t
                    },
                    isDatasetVisible: function (t) {
                        var e = this.getDatasetMeta(t);
                        return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    },
                    generateLegend: function () {
                        return this.options.legendCallback(this)
                    },
                    destroyDatasetMeta: function (t) {
                        var e = this.id,
                            i = this.data.datasets[t],
                            n = i._meta && i._meta[e];
                        n && (n.controller.destroy(), delete i._meta[e])
                    },
                    destroy: function () {
                        var e, i, n = this,
                            o = n.canvas;
                        for (n.stop(), e = 0, i = n.data.datasets.length; e < i; ++e) n.destroyDatasetMeta(e);
                        o && (n.unbindEvents(), r.canvas.clear(n), d.releaseContext(n.ctx), n.canvas = null, n.ctx = null), u.notify(n, "destroy"), delete t.instances[n.id]
                    },
                    toBase64Image: function () {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    },
                    initToolTip: function () {
                        var t = this;
                        t.tooltip = new c({
                            _chart: t,
                            _chartInstance: t,
                            _data: t.data,
                            _options: t.options.tooltips
                        }, t)
                    },
                    bindEvents: function () {
                        var t = this,
                            e = t._listeners = {},
                            i = function () {
                                t.eventHandler.apply(t, arguments)
                            };
                        r.each(t.options.events, function (n) {
                            d.addEventListener(t, n, i), e[n] = i
                        }), t.options.responsive && (i = function () {
                            t.resize()
                        }, d.addEventListener(t, "resize", i), e.resize = i)
                    },
                    unbindEvents: function () {
                        var t = this,
                            e = t._listeners;
                        e && (delete t._listeners, r.each(e, function (e, i) {
                            d.removeEventListener(t, i, e)
                        }))
                    },
                    updateHoverStyle: function (t, e, i) {
                        var n, o, a, r = i ? "setHoverStyle" : "removeHoverStyle";
                        for (o = 0, a = t.length; o < a; ++o)(n = t[o]) && this.getDatasetMeta(n._datasetIndex).controller[r](n)
                    },
                    eventHandler: function (t) {
                        var e = this,
                            i = e.tooltip;
                        if (!1 !== u.notify(e, "beforeEvent", [t])) {
                            e._bufferedRender = !0, e._bufferedRequest = null;
                            var n = e.handleEvent(t);
                            i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), u.notify(e, "afterEvent", [t]);
                            var o = e._bufferedRequest;
                            return o ? e.render(o) : n && !e.animating && (e.stop(), e.render({
                                duration: e.options.hover.animationDuration,
                                lazy: !0
                            })), e._bufferedRender = !1, e._bufferedRequest = null, e
                        }
                    },
                    handleEvent: function (t) {
                        var e, i = this,
                            n = i.options || {},
                            o = n.hover;
                        return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, o.mode, o), r.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, o.mode, !1), i.active.length && o.mode && i.updateHoverStyle(i.active, o.mode, !0), e = !r.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e
                    }
                }), t.Controller = t
            }
        }, {
            22: 22,
            23: 23,
            26: 26,
            29: 29,
            31: 31,
            32: 32,
            34: 34,
            36: 36,
            46: 46,
            49: 49
        }],
        25: [function (t, e, i) {
            "use strict";
            var n = t(46);
            e.exports = function (t) {
                var e = ["push", "pop", "shift", "splice", "unshift"];

                function i(t, i) {
                    var n = t._chartjs;
                    if (n) {
                        var o = n.listeners,
                            a = o.indexOf(i); - 1 !== a && o.splice(a, 1), 0 < o.length || (e.forEach(function (e) {
                            delete t[e]
                        }), delete t._chartjs)
                    }
                }
                t.DatasetController = function (t, e) {
                    this.initialize(t, e)
                }, n.extend(t.DatasetController.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    initialize: function (t, e) {
                        this.chart = t, this.index = e, this.linkScales(), this.addElements()
                    },
                    updateIndex: function (t) {
                        this.index = t
                    },
                    linkScales: function () {
                        var t = this,
                            e = t.getMeta(),
                            i = t.getDataset();
                        null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id)
                    },
                    getDataset: function () {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function () {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function (t) {
                        return this.chart.scales[t]
                    },
                    reset: function () {
                        this.update(!0)
                    },
                    destroy: function () {
                        this._data && i(this._data, this)
                    },
                    createMetaDataset: function () {
                        var t = this.datasetElementType;
                        return t && new t({
                            _chart: this.chart,
                            _datasetIndex: this.index
                        })
                    },
                    createMetaData: function (t) {
                        var e = this.dataElementType;
                        return e && new e({
                            _chart: this.chart,
                            _datasetIndex: this.index,
                            _index: t
                        })
                    },
                    addElements: function () {
                        var t, e, i = this.getMeta(),
                            n = this.getDataset().data || [],
                            o = i.data;
                        for (t = 0, e = n.length; t < e; ++t) o[t] = o[t] || this.createMetaData(t);
                        i.dataset = i.dataset || this.createMetaDataset()
                    },
                    addElementAndReset: function (t) {
                        var e = this.createMetaData(t);
                        this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                    },
                    buildOrUpdateElements: function () {
                        var t, o, a = this,
                            r = a.getDataset(),
                            s = r.data || (r.data = []);
                        a._data !== s && (a._data && i(a._data, a), o = a, (t = s)._chartjs ? t._chartjs.listeners.push(o) : (Object.defineProperty(t, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {
                                listeners: [o]
                            }
                        }), e.forEach(function (e) {
                            var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                                o = t[e];
                            Object.defineProperty(t, e, {
                                configurable: !0,
                                enumerable: !1,
                                value: function () {
                                    var e = Array.prototype.slice.call(arguments),
                                        a = o.apply(this, e);
                                    return n.each(t._chartjs.listeners, function (t) {
                                        "function" == typeof t[i] && t[i].apply(t, e)
                                    }), a
                                }
                            })
                        })), a._data = s), a.resyncElements()
                    },
                    update: n.noop,
                    transition: function (t) {
                        for (var e = this.getMeta(), i = e.data || [], n = i.length, o = 0; o < n; ++o) i[o].transition(t);
                        e.dataset && e.dataset.transition(t)
                    },
                    draw: function () {
                        var t = this.getMeta(),
                            e = t.data || [],
                            i = e.length,
                            n = 0;
                        for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
                    },
                    removeHoverStyle: function (t) {
                        n.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
                    },
                    setHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            o = t.custom || {},
                            a = n.valueAtIndexOrDefault,
                            r = n.getHoverColor,
                            s = t._model;
                        t.$previousStyle = {
                            backgroundColor: s.backgroundColor,
                            borderColor: s.borderColor,
                            borderWidth: s.borderWidth
                        }, s.backgroundColor = o.hoverBackgroundColor ? o.hoverBackgroundColor : a(e.hoverBackgroundColor, i, r(s.backgroundColor)), s.borderColor = o.hoverBorderColor ? o.hoverBorderColor : a(e.hoverBorderColor, i, r(s.borderColor)), s.borderWidth = o.hoverBorderWidth ? o.hoverBorderWidth : a(e.hoverBorderWidth, i, s.borderWidth)
                    },
                    resyncElements: function () {
                        var t = this.getMeta(),
                            e = this.getDataset().data,
                            i = t.data.length,
                            n = e.length;
                        n < i ? t.data.splice(n, i - n) : i < n && this.insertElements(i, n - i)
                    },
                    insertElements: function (t, e) {
                        for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
                    },
                    onDataPush: function () {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    },
                    onDataPop: function () {
                        this.getMeta().data.pop()
                    },
                    onDataShift: function () {
                        this.getMeta().data.shift()
                    },
                    onDataSplice: function (t, e) {
                        this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                    },
                    onDataUnshift: function () {
                        this.insertElements(0, arguments.length)
                    }
                }), t.DatasetController.extend = n.inherits
            }
        }, {
            46: 46
        }],
        26: [function (t, e, i) {
            "use strict";
            var n = t(46);
            e.exports = {
                _set: function (t, e) {
                    return n.merge(this[t] || (this[t] = {}), e)
                }
            }
        }, {
            46: 46
        }],
        27: [function (t, e, i) {
            "use strict";
            var n = t(2),
                o = t(46),
                a = function (t) {
                    o.extend(this, t), this.initialize.apply(this, arguments)
                };
            o.extend(a.prototype, {
                initialize: function () {
                    this.hidden = !1
                },
                pivot: function () {
                    var t = this;
                    return t._view || (t._view = o.clone(t._model)), t._start = {}, t
                },
                transition: function (t) {
                    var e = this,
                        i = e._model,
                        o = e._start,
                        a = e._view;
                    return i && 1 !== t ? (a || (a = e._view = {}), o || (o = e._start = {}), function (t, e, i, o) {
                        var a, r, s, l, d, u, h, c, f, p = Object.keys(i);
                        for (a = 0, r = p.length; a < r; ++a)
                            if (u = i[s = p[a]], e.hasOwnProperty(s) || (e[s] = u), (l = e[s]) !== u && "_" !== s[0]) {
                                if (t.hasOwnProperty(s) || (t[s] = l), (h = typeof u) == typeof (d = t[s]))
                                    if ("string" === h) {
                                        if ((c = n(d)).valid && (f = n(u)).valid) {
                                            e[s] = f.mix(c, o).rgbString();
                                            continue
                                        }
                                    } else if ("number" === h && isFinite(d) && isFinite(u)) {
                                    e[s] = d + (u - d) * o;
                                    continue
                                }
                                e[s] = u
                            }
                    }(o, a, i, t)) : (e._view = i, e._start = null), e
                },
                tooltipPosition: function () {
                    return {
                        x: this._model.x,
                        y: this._model.y
                    }
                },
                hasValue: function () {
                    return o.isNumber(this._model.x) && o.isNumber(this._model.y)
                }
            }), a.extend = o.inherits, e.exports = a
        }, {
            2: 2,
            46: 46
        }],
        28: [function (t, e, i) {
            "use strict";
            var n = t(2),
                o = t(26),
                a = t(46),
                r = t(34);
            e.exports = function () {
                function t(t, e, i) {
                    var n;
                    return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
                }

                function e(t) {
                    return null != t && "none" !== t
                }

                function i(i, n, o) {
                    var r = document.defaultView,
                        s = a._getParentNode(i),
                        l = r.getComputedStyle(i)[n],
                        d = r.getComputedStyle(s)[n],
                        u = e(l),
                        h = e(d),
                        c = Number.POSITIVE_INFINITY;
                    return u || h ? Math.min(u ? t(l, i, o) : c, h ? t(d, s, o) : c) : "none"
                }
                a.configMerge = function () {
                    return a.merge(a.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function (t, e, i, n) {
                            var o = e[t] || {},
                                s = i[t];
                            "scales" === t ? e[t] = a.scaleMerge(o, s) : "scale" === t ? e[t] = a.merge(o, [r.getScaleDefaults(s.type), s]) : a._merger(t, e, i, n)
                        }
                    })
                }, a.scaleMerge = function () {
                    return a.merge(a.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function (t, e, i, n) {
                            if ("xAxes" === t || "yAxes" === t) {
                                var o, s, l, d = i[t].length;
                                for (e[t] || (e[t] = []), o = 0; o < d; ++o) l = i[t][o], s = a.valueOrDefault(l.type, "xAxes" === t ? "category" : "linear"), o >= e[t].length && e[t].push({}), !e[t][o].type || l.type && l.type !== e[t][o].type ? a.merge(e[t][o], [r.getScaleDefaults(s), l]) : a.merge(e[t][o], l)
                            } else a._merger(t, e, i, n)
                        }
                    })
                }, a.where = function (t, e) {
                    if (a.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var i = [];
                    return a.each(t, function (t) {
                        e(t) && i.push(t)
                    }), i
                }, a.findIndex = Array.prototype.findIndex ? function (t, e, i) {
                    return t.findIndex(e, i)
                } : function (t, e, i) {
                    i = void 0 === i ? t : i;
                    for (var n = 0, o = t.length; n < o; ++n)
                        if (e.call(i, t[n], n, t)) return n;
                    return -1
                }, a.findNextWhere = function (t, e, i) {
                    a.isNullOrUndef(i) && (i = -1);
                    for (var n = i + 1; n < t.length; n++) {
                        var o = t[n];
                        if (e(o)) return o
                    }
                }, a.findPreviousWhere = function (t, e, i) {
                    a.isNullOrUndef(i) && (i = t.length);
                    for (var n = i - 1; 0 <= n; n--) {
                        var o = t[n];
                        if (e(o)) return o
                    }
                }, a.isNumber = function (t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, a.almostEquals = function (t, e, i) {
                    return Math.abs(t - e) < i
                }, a.almostWhole = function (t, e) {
                    var i = Math.round(t);
                    return i - e < t && t < i + e
                }, a.max = function (t) {
                    return t.reduce(function (t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }, a.min = function (t) {
                    return t.reduce(function (t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }, a.sign = Math.sign ? function (t) {
                    return Math.sign(t)
                } : function (t) {
                    return 0 == (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1
                }, a.log10 = Math.log10 ? function (t) {
                    return Math.log10(t)
                } : function (t) {
                    var e = Math.log(t) * Math.LOG10E,
                        i = Math.round(e);
                    return t === Math.pow(10, i) ? i : e
                }, a.toRadians = function (t) {
                    return t * (Math.PI / 180)
                }, a.toDegrees = function (t) {
                    return t * (180 / Math.PI)
                }, a.getAngleFromPoint = function (t, e) {
                    var i = e.x - t.x,
                        n = e.y - t.y,
                        o = Math.sqrt(i * i + n * n),
                        a = Math.atan2(n, i);
                    return a < -.5 * Math.PI && (a += 2 * Math.PI), {
                        angle: a,
                        distance: o
                    }
                }, a.distanceBetweenPoints = function (t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, a.aliasPixel = function (t) {
                    return t % 2 == 0 ? 0 : .5
                }, a.splineCurve = function (t, e, i, n) {
                    var o = t.skip ? e : t,
                        a = e,
                        r = i.skip ? e : i,
                        s = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
                        l = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
                        d = s / (s + l),
                        u = l / (s + l),
                        h = n * (d = isNaN(d) ? 0 : d),
                        c = n * (u = isNaN(u) ? 0 : u);
                    return {
                        previous: {
                            x: a.x - h * (r.x - o.x),
                            y: a.y - h * (r.y - o.y)
                        },
                        next: {
                            x: a.x + c * (r.x - o.x),
                            y: a.y + c * (r.y - o.y)
                        }
                    }
                }, a.EPSILON = Number.EPSILON || 1e-14, a.splineCurveMonotone = function (t) {
                    var e, i, n, o, r, s, l, d, u, h = (t || []).map(function (t) {
                            return {
                                model: t._model,
                                deltaK: 0,
                                mK: 0
                            }
                        }),
                        c = h.length;
                    for (e = 0; e < c; ++e)
                        if (!(n = h[e]).model.skip) {
                            if (i = 0 < e ? h[e - 1] : null, (o = e < c - 1 ? h[e + 1] : null) && !o.model.skip) {
                                var f = o.model.x - n.model.x;
                                n.deltaK = 0 !== f ? (o.model.y - n.model.y) / f : 0
                            }!i || i.model.skip ? n.mK = n.deltaK : !o || o.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2
                        } for (e = 0; e < c - 1; ++e) n = h[e], o = h[e + 1], n.model.skip || o.model.skip || (a.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = o.mK = 0 : (r = n.mK / n.deltaK, s = o.mK / n.deltaK, (d = Math.pow(r, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(d), n.mK = r * l * n.deltaK, o.mK = s * l * n.deltaK)));
                    for (e = 0; e < c; ++e)(n = h[e]).model.skip || (i = 0 < e ? h[e - 1] : null, o = e < c - 1 ? h[e + 1] : null, i && !i.model.skip && (u = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - u, n.model.controlPointPreviousY = n.model.y - u * n.mK), o && !o.model.skip && (u = (o.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + u, n.model.controlPointNextY = n.model.y + u * n.mK))
                }, a.nextItem = function (t, e, i) {
                    return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, a.previousItem = function (t, e, i) {
                    return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }, a.niceNum = function (t, e) {
                    var i = Math.floor(a.log10(t)),
                        n = t / Math.pow(10, i);
                    return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i)
                }, a.requestAnimFrame = "undefined" == typeof window ? function (t) {
                    t()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                    return window.setTimeout(t, 1e3 / 60)
                }, a.getRelativePosition = function (t, e) {
                    var i, n, o = t.originalEvent || t,
                        r = t.target || t.srcElement,
                        s = r.getBoundingClientRect(),
                        l = o.touches;
                    n = l && 0 < l.length ? (i = l[0].clientX, l[0].clientY) : (i = o.clientX, o.clientY);
                    var d = parseFloat(a.getStyle(r, "padding-left")),
                        u = parseFloat(a.getStyle(r, "padding-top")),
                        h = parseFloat(a.getStyle(r, "padding-right")),
                        c = parseFloat(a.getStyle(r, "padding-bottom")),
                        f = s.right - s.left - d - h,
                        p = s.bottom - s.top - u - c;
                    return {
                        x: i = Math.round((i - s.left - d) / f * r.width / e.currentDevicePixelRatio),
                        y: n = Math.round((n - s.top - u) / p * r.height / e.currentDevicePixelRatio)
                    }
                }, a.getConstraintWidth = function (t) {
                    return i(t, "max-width", "clientWidth")
                }, a.getConstraintHeight = function (t) {
                    return i(t, "max-height", "clientHeight")
                }, a._calculatePadding = function (t, e, i) {
                    return -1 < (e = a.getStyle(t, e)).indexOf("%") ? i / parseInt(e, 10) : parseInt(e, 10)
                }, a._getParentNode = function (t) {
                    var e = t.parentNode;
                    return e && e.host && (e = e.host), e
                }, a.getMaximumWidth = function (t) {
                    var e = a._getParentNode(t);
                    if (!e) return t.clientWidth;
                    var i = e.clientWidth,
                        n = i - a._calculatePadding(e, "padding-left", i) - a._calculatePadding(e, "padding-right", i),
                        o = a.getConstraintWidth(t);
                    return isNaN(o) ? n : Math.min(n, o)
                }, a.getMaximumHeight = function (t) {
                    var e = a._getParentNode(t);
                    if (!e) return t.clientHeight;
                    var i = e.clientHeight,
                        n = i - a._calculatePadding(e, "padding-top", i) - a._calculatePadding(e, "padding-bottom", i),
                        o = a.getConstraintHeight(t);
                    return isNaN(o) ? n : Math.min(n, o)
                }, a.getStyle = function (t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, a.retinaScale = function (t, e) {
                    var i = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
                    if (1 !== i) {
                        var n = t.canvas,
                            o = t.height,
                            a = t.width;
                        n.height = o * i, n.width = a * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = o + "px", n.style.width = a + "px")
                    }
                }, a.fontString = function (t, e, i) {
                    return e + " " + t + "px " + i
                }, a.longestText = function (t, e, i, n) {
                    var o = (n = n || {}).data = n.data || {},
                        r = n.garbageCollect = n.garbageCollect || [];
                    n.font !== e && (o = n.data = {}, r = n.garbageCollect = [], n.font = e), t.font = e;
                    var s = 0;
                    a.each(i, function (e) {
                        null != e && !0 !== a.isArray(e) ? s = a.measureText(t, o, r, s, e) : a.isArray(e) && a.each(e, function (e) {
                            null == e || a.isArray(e) || (s = a.measureText(t, o, r, s, e))
                        })
                    });
                    var l = r.length / 2;
                    if (l > i.length) {
                        for (var d = 0; d < l; d++) delete o[r[d]];
                        r.splice(0, l)
                    }
                    return s
                }, a.measureText = function (t, e, i, n, o) {
                    var a = e[o];
                    return a || (a = e[o] = t.measureText(o).width, i.push(o)), n < a && (n = a), n
                }, a.numberOfLabelLines = function (t) {
                    var e = 1;
                    return a.each(t, function (t) {
                        a.isArray(t) && t.length > e && (e = t.length)
                    }), e
                }, a.color = n ? function (t) {
                    return t instanceof CanvasGradient && (t = o.global.defaultColor), n(t)
                } : function (t) {
                    return console.error("Color.js not found!"), t
                }, a.getHoverColor = function (t) {
                    return t instanceof CanvasPattern ? t : a.color(t).saturate(.5).darken(.1).rgbString()
                }
            }
        }, {
            2: 2,
            26: 26,
            34: 34,
            46: 46
        }],
        29: [function (t, e, i) {
            "use strict";
            var n = t(46);

            function o(t, e) {
                return t.native ? {
                    x: t.x,
                    y: t.y
                } : n.getRelativePosition(t, e)
            }

            function a(t, e) {
                var i, n, o, a, r;
                for (n = 0, a = t.data.datasets.length; n < a; ++n)
                    if (t.isDatasetVisible(n))
                        for (o = 0, r = (i = t.getDatasetMeta(n)).data.length; o < r; ++o) {
                            var s = i.data[o];
                            s._view.skip || e(s)
                        }
            }

            function r(t, e) {
                var i = [];
                return a(t, function (t) {
                    t.inRange(e.x, e.y) && i.push(t)
                }), i
            }

            function s(t, e, i, n) {
                var o = Number.POSITIVE_INFINITY,
                    r = [];
                return a(t, function (t) {
                    if (!i || t.inRange(e.x, e.y)) {
                        var a = t.getCenterPoint(),
                            s = n(e, a);
                        s < o ? (r = [t], o = s) : s === o && r.push(t)
                    }
                }), r
            }

            function l(t) {
                var e = -1 !== t.indexOf("x"),
                    i = -1 !== t.indexOf("y");
                return function (t, n) {
                    var o = e ? Math.abs(t.x - n.x) : 0,
                        a = i ? Math.abs(t.y - n.y) : 0;
                    return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2))
                }
            }

            function d(t, e, i) {
                var n = o(e, t);
                i.axis = i.axis || "x";
                var a = l(i.axis),
                    d = i.intersect ? r(t, n) : s(t, n, !1, a),
                    u = [];
                return d.length ? (t.data.datasets.forEach(function (e, i) {
                    if (t.isDatasetVisible(i)) {
                        var n = t.getDatasetMeta(i).data[d[0]._index];
                        n && !n._view.skip && u.push(n)
                    }
                }), u) : []
            }
            e.exports = {
                modes: {
                    single: function (t, e) {
                        var i = o(e, t),
                            n = [];
                        return a(t, function (t) {
                            if (t.inRange(i.x, i.y)) return n.push(t), n
                        }), n.slice(0, 1)
                    },
                    label: d,
                    index: d,
                    dataset: function (t, e, i) {
                        var n = o(e, t);
                        i.axis = i.axis || "xy";
                        var a = l(i.axis),
                            d = i.intersect ? r(t, n) : s(t, n, !1, a);
                        return 0 < d.length && (d = t.getDatasetMeta(d[0]._datasetIndex).data), d
                    },
                    "x-axis": function (t, e) {
                        return d(t, e, {
                            intersect: !1
                        })
                    },
                    point: function (t, e) {
                        return r(t, o(e, t))
                    },
                    nearest: function (t, e, i) {
                        var n = o(e, t);
                        i.axis = i.axis || "xy";
                        var a = l(i.axis),
                            r = s(t, n, i.intersect, a);
                        return 1 < r.length && r.sort(function (t, e) {
                            var i = t.getArea() - e.getArea();
                            return 0 === i && (i = t._datasetIndex - e._datasetIndex), i
                        }), r.slice(0, 1)
                    },
                    x: function (t, e, i) {
                        var n = o(e, t),
                            r = [],
                            s = !1;
                        return a(t, function (t) {
                            t.inXRange(n.x) && r.push(t), t.inRange(n.x, n.y) && (s = !0)
                        }), i.intersect && !s && (r = []), r
                    },
                    y: function (t, e, i) {
                        var n = o(e, t),
                            r = [],
                            s = !1;
                        return a(t, function (t) {
                            t.inYRange(n.y) && r.push(t), t.inRange(n.x, n.y) && (s = !0)
                        }), i.intersect && !s && (r = []), r
                    }
                }
            }
        }, {
            46: 46
        }],
        30: [function (t, e, i) {
            "use strict";
            t(26)._set("global", {
                responsive: !0,
                responsiveAnimationDuration: 0,
                maintainAspectRatio: !0,
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {
                    onHover: null,
                    mode: "nearest",
                    intersect: !0,
                    animationDuration: 400
                },
                onClick: null,
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                showLines: !0,
                elements: {},
                layout: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            }), e.exports = function () {
                var t = function (t, e) {
                    return this.construct(t, e), this
                };
                return t.Chart = t
            }
        }, {
            26: 26
        }],
        31: [function (t, e, i) {
            "use strict";
            var n = t(46);

            function o(t, e) {
                return n.where(t, function (t) {
                    return t.position === e
                })
            }

            function a(t, e) {
                t.forEach(function (t, e) {
                    return t._tmpIndex_ = e, t
                }), t.sort(function (t, i) {
                    var n = e ? i : t,
                        o = e ? t : i;
                    return n.weight === o.weight ? n._tmpIndex_ - o._tmpIndex_ : n.weight - o.weight
                }), t.forEach(function (t) {
                    delete t._tmpIndex_
                })
            }
            e.exports = {
                defaults: {},
                addBox: function (t, e) {
                    t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
                },
                removeBox: function (t, e) {
                    var i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
                },
                configure: function (t, e, i) {
                    for (var n, o = ["fullWidth", "position", "weight"], a = o.length, r = 0; r < a; ++r) n = o[r], i.hasOwnProperty(n) && (e[n] = i[n])
                },
                update: function (t, e, i) {
                    if (t) {
                        var r = t.options.layout || {},
                            s = n.options.toPadding(r.padding),
                            l = s.left,
                            d = s.right,
                            u = s.top,
                            h = s.bottom,
                            c = o(t.boxes, "left"),
                            f = o(t.boxes, "right"),
                            p = o(t.boxes, "top"),
                            g = o(t.boxes, "bottom"),
                            m = o(t.boxes, "chartArea");
                        a(c, !0), a(f, !1), a(p, !0), a(g, !1);
                        var v = e - l - d,
                            y = i - u - h,
                            b = y / 2,
                            x = (e - v / 2) / (c.length + f.length),
                            _ = (i - b) / (p.length + g.length),
                            w = v,
                            S = y,
                            k = [];
                        n.each(c.concat(f, p, g), function (t) {
                            var e, i = t.isHorizontal();
                            i ? (e = t.update(t.fullWidth ? v : w, _), S -= e.height) : (e = t.update(x, S), w -= e.width), k.push({
                                horizontal: i,
                                minSize: e,
                                box: t
                            })
                        });
                        var M = 0,
                            C = 0,
                            D = 0,
                            T = 0;
                        n.each(p.concat(g), function (t) {
                            if (t.getPadding) {
                                var e = t.getPadding();
                                M = Math.max(M, e.left), C = Math.max(C, e.right)
                            }
                        }), n.each(c.concat(f), function (t) {
                            if (t.getPadding) {
                                var e = t.getPadding();
                                D = Math.max(D, e.top), T = Math.max(T, e.bottom)
                            }
                        });
                        var O = l,
                            P = d,
                            I = u,
                            A = h;
                        n.each(c.concat(f), E), n.each(c, function (t) {
                            O += t.width
                        }), n.each(f, function (t) {
                            P += t.width
                        }), n.each(p.concat(g), E), n.each(p, function (t) {
                            I += t.height
                        }), n.each(g, function (t) {
                            A += t.height
                        }), n.each(c.concat(f), function (t) {
                            var e = n.findNextWhere(k, function (e) {
                                    return e.box === t
                                }),
                                i = {
                                    left: 0,
                                    right: 0,
                                    top: I,
                                    bottom: A
                                };
                            e && t.update(e.minSize.width, S, i)
                        }), O = l, P = d, I = u, A = h, n.each(c, function (t) {
                            O += t.width
                        }), n.each(f, function (t) {
                            P += t.width
                        }), n.each(p, function (t) {
                            I += t.height
                        }), n.each(g, function (t) {
                            A += t.height
                        });
                        var R = Math.max(M - O, 0);
                        O += R, P += Math.max(C - P, 0);
                        var F = Math.max(D - I, 0);
                        I += F, A += Math.max(T - A, 0);
                        var L = i - I - A,
                            z = e - O - P;
                        z === w && L === S || (n.each(c, function (t) {
                            t.height = L
                        }), n.each(f, function (t) {
                            t.height = L
                        }), n.each(p, function (t) {
                            t.fullWidth || (t.width = z)
                        }), n.each(g, function (t) {
                            t.fullWidth || (t.width = z)
                        }), S = L, w = z);
                        var W = l + R,
                            B = u + F;
                        n.each(c.concat(p), Y), W += w, B += S, n.each(f, Y), n.each(g, Y), t.chartArea = {
                            left: O,
                            top: I,
                            right: O + w,
                            bottom: I + S
                        }, n.each(m, function (e) {
                            e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(w, S)
                        })
                    }

                    function E(t) {
                        var e = n.findNextWhere(k, function (e) {
                            return e.box === t
                        });
                        if (e)
                            if (t.isHorizontal()) {
                                var i = {
                                    left: Math.max(O, M),
                                    right: Math.max(P, C),
                                    top: 0,
                                    bottom: 0
                                };
                                t.update(t.fullWidth ? v : w, y / 2, i)
                            } else t.update(e.minSize.width, S)
                    }

                    function Y(t) {
                        t.isHorizontal() ? (t.left = t.fullWidth ? l : O, t.right = t.fullWidth ? e - d : O + w, t.top = B, t.bottom = B + t.height, B = t.bottom) : (t.left = W, t.right = W + t.width, t.top = I, t.bottom = I + S, W = t.right)
                    }
                }
            }
        }, {
            46: 46
        }],
        32: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(46);
            n._set("global", {
                plugins: {}
            }), e.exports = {
                _plugins: [],
                _cacheId: 0,
                register: function (t) {
                    var e = this._plugins;
                    [].concat(t).forEach(function (t) {
                        -1 === e.indexOf(t) && e.push(t)
                    }), this._cacheId++
                },
                unregister: function (t) {
                    var e = this._plugins;
                    [].concat(t).forEach(function (t) {
                        var i = e.indexOf(t); - 1 !== i && e.splice(i, 1)
                    }), this._cacheId++
                },
                clear: function () {
                    this._plugins = [], this._cacheId++
                },
                count: function () {
                    return this._plugins.length
                },
                getAll: function () {
                    return this._plugins
                },
                notify: function (t, e, i) {
                    var n, o, a, r, s, l = this.descriptors(t),
                        d = l.length;
                    for (n = 0; n < d; ++n)
                        if ("function" == typeof (s = (a = (o = l[n]).plugin)[e]) && ((r = [t].concat(i || [])).push(o.options), !1 === s.apply(a, r))) return !1;
                    return !0
                },
                descriptors: function (t) {
                    var e = t.$plugins || (t.$plugins = {});
                    if (e.id === this._cacheId) return e.descriptors;
                    var i = [],
                        a = [],
                        r = t && t.config || {},
                        s = r.options && r.options.plugins || {};
                    return this._plugins.concat(r.plugins || []).forEach(function (t) {
                        if (-1 === i.indexOf(t)) {
                            var e = t.id,
                                r = s[e];
                            !1 !== r && (!0 === r && (r = o.clone(n.global.plugins[e])), i.push(t), a.push({
                                plugin: t,
                                options: r || {}
                            }))
                        }
                    }), e.descriptors = a, e.id = this._cacheId, a
                },
                _invalidate: function (t) {
                    delete t.$plugins
                }
            }
        }, {
            26: 26,
            46: 46
        }],
        33: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(27),
                a = t(46),
                r = t(35);

            function s(t) {
                var e, i, n = [];
                for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label);
                return n
            }

            function l(t, e, i) {
                var n = t.getPixelForTick(e);
                return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n
            }

            function d(t, e, i) {
                return a.isArray(e) ? a.longestText(t, i, e) : t.measureText(e).width
            }

            function u(t) {
                var e = a.valueOrDefault,
                    i = n.global,
                    o = e(t.fontSize, i.defaultFontSize),
                    r = e(t.fontStyle, i.defaultFontStyle),
                    s = e(t.fontFamily, i.defaultFontFamily);
                return {
                    size: o,
                    style: r,
                    family: s,
                    font: a.fontString(o, r, s)
                }
            }

            function h(t) {
                return a.options.toLineHeight(a.valueOrDefault(t.lineHeight, 1.2), a.valueOrDefault(t.fontSize, n.global.defaultFontSize))
            }
            n._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {
                    display: !1,
                    labelString: "",
                    lineHeight: 1.2,
                    padding: {
                        top: 4,
                        bottom: 4
                    }
                },
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: r.formatters.values,
                    minor: {},
                    major: {}
                }
            }), e.exports = o.extend({
                getPadding: function () {
                    return {
                        left: this.paddingLeft || 0,
                        top: this.paddingTop || 0,
                        right: this.paddingRight || 0,
                        bottom: this.paddingBottom || 0
                    }
                },
                getTicks: function () {
                    return this._ticks
                },
                mergeTicksOptions: function () {
                    var t = this.options.ticks;
                    for (var e in !1 === t.minor && (t.minor = {
                            display: !1
                        }), !1 === t.major && (t.major = {
                            display: !1
                        }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
                },
                beforeUpdate: function () {
                    a.callback(this.options.beforeUpdate, [this])
                },
                update: function (t, e, i) {
                    var n, o, r, s, l, d, u = this;
                    for (u.beforeUpdate(), u.maxWidth = t, u.maxHeight = e, u.margins = a.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, i), u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), l = u.buildTicks() || [], u.afterBuildTicks(), u.beforeTickToLabelConversion(), r = u.convertTicksToLabels(l) || u.ticks, u.afterTickToLabelConversion(), n = 0, o = (u.ticks = r).length; n < o; ++n) s = r[n], (d = l[n]) ? d.label = s : l.push(d = {
                        label: s,
                        major: !1
                    });
                    return u._ticks = l, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize
                },
                afterUpdate: function () {
                    a.callback(this.options.afterUpdate, [this])
                },
                beforeSetDimensions: function () {
                    a.callback(this.options.beforeSetDimensions, [this])
                },
                setDimensions: function () {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                },
                afterSetDimensions: function () {
                    a.callback(this.options.afterSetDimensions, [this])
                },
                beforeDataLimits: function () {
                    a.callback(this.options.beforeDataLimits, [this])
                },
                determineDataLimits: a.noop,
                afterDataLimits: function () {
                    a.callback(this.options.afterDataLimits, [this])
                },
                beforeBuildTicks: function () {
                    a.callback(this.options.beforeBuildTicks, [this])
                },
                buildTicks: a.noop,
                afterBuildTicks: function () {
                    a.callback(this.options.afterBuildTicks, [this])
                },
                beforeTickToLabelConversion: function () {
                    a.callback(this.options.beforeTickToLabelConversion, [this])
                },
                convertTicksToLabels: function () {
                    var t = this.options.ticks;
                    this.ticks = this.ticks.map(t.userCallback || t.callback, this)
                },
                afterTickToLabelConversion: function () {
                    a.callback(this.options.afterTickToLabelConversion, [this])
                },
                beforeCalculateTickRotation: function () {
                    a.callback(this.options.beforeCalculateTickRotation, [this])
                },
                calculateTickRotation: function () {
                    var t = this,
                        e = t.ctx,
                        i = t.options.ticks,
                        n = s(t._ticks),
                        o = u(i);
                    e.font = o.font;
                    var r = i.minRotation || 0;
                    if (n.length && t.options.display && t.isHorizontal())
                        for (var l, d = a.longestText(e, o.font, n, t.longestTextCache), h = d, c = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; c < h && r < i.maxRotation;) {
                            var f = a.toRadians(r);
                            if (l = Math.cos(f), Math.sin(f) * d > t.maxHeight) {
                                r--;
                                break
                            }
                            r++, h = l * d
                        }
                    t.labelRotation = r
                },
                afterCalculateTickRotation: function () {
                    a.callback(this.options.afterCalculateTickRotation, [this])
                },
                beforeFit: function () {
                    a.callback(this.options.beforeFit, [this])
                },
                fit: function () {
                    var t = this,
                        e = t.minSize = {
                            width: 0,
                            height: 0
                        },
                        i = s(t._ticks),
                        n = t.options,
                        o = n.ticks,
                        r = n.scaleLabel,
                        l = n.gridLines,
                        c = n.display,
                        f = t.isHorizontal(),
                        p = u(o),
                        g = n.gridLines.tickMarkLength;
                    if (e.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : c && l.drawTicks ? g : 0, e.height = f ? c && l.drawTicks ? g : 0 : t.maxHeight, r.display && c) {
                        var m = h(r) + a.options.toPadding(r.padding).height;
                        f ? e.height += m : e.width += m
                    }
                    if (o.display && c) {
                        var v = a.longestText(t.ctx, p.font, i, t.longestTextCache),
                            y = a.numberOfLabelLines(i),
                            b = .5 * p.size,
                            x = t.options.ticks.padding;
                        if (f) {
                            t.longestLabelWidth = v;
                            var _ = a.toRadians(t.labelRotation),
                                w = Math.cos(_),
                                S = Math.sin(_) * v + p.size * y + b * (y - 1) + b;
                            e.height = Math.min(t.maxHeight, e.height + S + x), t.ctx.font = p.font;
                            var k = d(t.ctx, i[0], p.font),
                                M = d(t.ctx, i[i.length - 1], p.font);
                            0 !== t.labelRotation ? (t.paddingLeft = "bottom" === n.position ? w * k + 3 : w * b + 3, t.paddingRight = "bottom" === n.position ? w * b + 3 : w * M + 3) : (t.paddingLeft = k / 2 + 3, t.paddingRight = M / 2 + 3)
                        } else o.mirror ? v = 0 : v += x + b, e.width = Math.min(t.maxWidth, e.width + v), t.paddingTop = p.size / 2, t.paddingBottom = p.size / 2
                    }
                    t.handleMargins(), t.width = e.width, t.height = e.height
                },
                handleMargins: function () {
                    var t = this;
                    t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
                },
                afterFit: function () {
                    a.callback(this.options.afterFit, [this])
                },
                isHorizontal: function () {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                isFullWidth: function () {
                    return this.options.fullWidth
                },
                getRightValue: function (t) {
                    if (a.isNullOrUndef(t)) return NaN;
                    if ("number" == typeof t && !isFinite(t)) return NaN;
                    if (t)
                        if (this.isHorizontal()) {
                            if (void 0 !== t.x) return this.getRightValue(t.x)
                        } else if (void 0 !== t.y) return this.getRightValue(t.y);
                    return t
                },
                getLabelForIndex: a.noop,
                getPixelForValue: a.noop,
                getValueForPixel: a.noop,
                getPixelForTick: function (t) {
                    var e = this,
                        i = e.options.offset;
                    if (e.isHorizontal()) {
                        var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                            o = n * t + e.paddingLeft;
                        return i && (o += n / 2), e.left + Math.round(o) + (e.isFullWidth() ? e.margins.left : 0)
                    }
                    var a = e.height - (e.paddingTop + e.paddingBottom);
                    return e.top + t * (a / (e._ticks.length - 1))
                },
                getPixelForDecimal: function (t) {
                    var e = this;
                    if (e.isHorizontal()) {
                        var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft;
                        return e.left + Math.round(i) + (e.isFullWidth() ? e.margins.left : 0)
                    }
                    return e.top + t * e.height
                },
                getBasePixel: function () {
                    return this.getPixelForValue(this.getBaseValue())
                },
                getBaseValue: function () {
                    var t = this.min,
                        e = this.max;
                    return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0
                },
                _autoSkip: function (t) {
                    var e, i, n, o, r = this,
                        s = r.isHorizontal(),
                        l = r.options.ticks.minor,
                        d = t.length,
                        u = a.toRadians(r.labelRotation),
                        h = Math.cos(u),
                        c = r.longestLabelWidth * h,
                        f = [];
                    for (l.maxTicksLimit && (o = l.maxTicksLimit), s && (e = !1, (c + l.autoSkipPadding) * d > r.width - (r.paddingLeft + r.paddingRight) && (e = 1 + Math.floor((c + l.autoSkipPadding) * d / (r.width - (r.paddingLeft + r.paddingRight)))), o && o < d && (e = Math.max(e, Math.floor(d / o)))), i = 0; i < d; i++) n = t[i], (1 < e && 0 < i % e || i % e == 0 && d <= i + e) && i !== d - 1 && delete n.label, f.push(n);
                    return f
                },
                draw: function (t) {
                    var e = this,
                        i = e.options;
                    if (i.display) {
                        var o = e.ctx,
                            r = n.global,
                            s = i.ticks.minor,
                            d = i.ticks.major || s,
                            c = i.gridLines,
                            f = i.scaleLabel,
                            p = 0 !== e.labelRotation,
                            g = e.isHorizontal(),
                            m = s.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                            v = a.valueOrDefault(s.fontColor, r.defaultFontColor),
                            y = u(s),
                            b = a.valueOrDefault(d.fontColor, r.defaultFontColor),
                            x = u(d),
                            _ = c.drawTicks ? c.tickMarkLength : 0,
                            w = a.valueOrDefault(f.fontColor, r.defaultFontColor),
                            S = u(f),
                            k = a.options.toPadding(f.padding),
                            M = a.toRadians(e.labelRotation),
                            C = [],
                            D = e.options.gridLines.lineWidth,
                            T = "right" === i.position ? e.left : e.right - D - _,
                            O = "right" === i.position ? e.left + _ : e.right,
                            P = "bottom" === i.position ? e.top + D : e.bottom - _ - D,
                            I = "bottom" === i.position ? e.top + D + _ : e.bottom + D;
                        if (a.each(m, function (n, o) {
                                if (!a.isNullOrUndef(n.label)) {
                                    var d, u, h, f, v, y, b, x, w, S, k, A, R, F, L = n.label;
                                    f = o === e.zeroLineIndex && i.offset === c.offsetGridLines ? (d = c.zeroLineWidth, u = c.zeroLineColor, h = c.zeroLineBorderDash, c.zeroLineBorderDashOffset) : (d = a.valueAtIndexOrDefault(c.lineWidth, o), u = a.valueAtIndexOrDefault(c.color, o), h = a.valueOrDefault(c.borderDash, r.borderDash), a.valueOrDefault(c.borderDashOffset, r.borderDashOffset));
                                    var z = "middle",
                                        W = "middle",
                                        B = s.padding;
                                    if (g) {
                                        var E = _ + B;
                                        F = "bottom" === i.position ? (W = p ? "middle" : "top", z = p ? "right" : "center", e.top + E) : (W = p ? "middle" : "bottom", z = p ? "left" : "center", e.bottom - E);
                                        var Y = l(e, o, c.offsetGridLines && 1 < m.length);
                                        Y < e.left && (u = "rgba(0,0,0,0)"), Y += a.aliasPixel(d), R = e.getPixelForTick(o) + s.labelOffset, v = b = w = k = Y, y = P, x = I, S = t.top, A = t.bottom + D
                                    } else {
                                        var H, N = "left" === i.position;
                                        H = s.mirror ? (z = N ? "left" : "right", B) : (z = N ? "right" : "left", _ + B), R = N ? e.right - H : e.left + H;
                                        var V = l(e, o, c.offsetGridLines && 1 < m.length);
                                        V < e.top && (u = "rgba(0,0,0,0)"), V += a.aliasPixel(d), F = e.getPixelForTick(o) + s.labelOffset, v = T, b = O, w = t.left, k = t.right + D, y = x = S = A = V
                                    }
                                    C.push({
                                        tx1: v,
                                        ty1: y,
                                        tx2: b,
                                        ty2: x,
                                        x1: w,
                                        y1: S,
                                        x2: k,
                                        y2: A,
                                        labelX: R,
                                        labelY: F,
                                        glWidth: d,
                                        glColor: u,
                                        glBorderDash: h,
                                        glBorderDashOffset: f,
                                        rotation: -1 * M,
                                        label: L,
                                        major: n.major,
                                        textBaseline: W,
                                        textAlign: z
                                    })
                                }
                            }), a.each(C, function (t) {
                                if (c.display && (o.save(), o.lineWidth = t.glWidth, o.strokeStyle = t.glColor, o.setLineDash && (o.setLineDash(t.glBorderDash), o.lineDashOffset = t.glBorderDashOffset), o.beginPath(), c.drawTicks && (o.moveTo(t.tx1, t.ty1), o.lineTo(t.tx2, t.ty2)), c.drawOnChartArea && (o.moveTo(t.x1, t.y1), o.lineTo(t.x2, t.y2)), o.stroke(), o.restore()), s.display) {
                                    o.save(), o.translate(t.labelX, t.labelY), o.rotate(t.rotation), o.font = t.major ? x.font : y.font, o.fillStyle = t.major ? b : v, o.textBaseline = t.textBaseline, o.textAlign = t.textAlign;
                                    var i = t.label;
                                    if (a.isArray(i))
                                        for (var n = i.length, r = 1.5 * y.size, l = e.isHorizontal() ? 0 : -r * (n - 1) / 2, d = 0; d < n; ++d) o.fillText("" + i[d], 0, l), l += r;
                                    else o.fillText(i, 0, 0);
                                    o.restore()
                                }
                            }), f.display) {
                            var A, R, F = 0,
                                L = h(f) / 2;
                            if (g) A = e.left + (e.right - e.left) / 2, R = "bottom" === i.position ? e.bottom - L - k.bottom : e.top + L + k.top;
                            else {
                                var z = "left" === i.position;
                                A = z ? e.left + L + k.top : e.right - L - k.top, R = e.top + (e.bottom - e.top) / 2, F = z ? -.5 * Math.PI : .5 * Math.PI
                            }
                            o.save(), o.translate(A, R), o.rotate(F), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = w, o.font = S.font, o.fillText(f.labelString, 0, 0), o.restore()
                        }
                        if (c.drawBorder) {
                            o.lineWidth = a.valueAtIndexOrDefault(c.lineWidth, 0), o.strokeStyle = a.valueAtIndexOrDefault(c.color, 0);
                            var W = e.left,
                                B = e.right + D,
                                E = e.top,
                                Y = e.bottom + D,
                                H = a.aliasPixel(o.lineWidth);
                            g ? (E = Y = "top" === i.position ? e.bottom : e.top, E += H, Y += H) : (W = B = "left" === i.position ? e.right : e.left, W += H, B += H), o.beginPath(), o.moveTo(W, E), o.lineTo(B, Y), o.stroke()
                        }
                    }
                }
            })
        }, {
            26: 26,
            27: 27,
            35: 35,
            46: 46
        }],
        34: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(46),
                a = t(31);
            e.exports = {
                constructors: {},
                defaults: {},
                registerScaleType: function (t, e, i) {
                    this.constructors[t] = e, this.defaults[t] = o.clone(i)
                },
                getScaleConstructor: function (t) {
                    return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                },
                getScaleDefaults: function (t) {
                    return this.defaults.hasOwnProperty(t) ? o.merge({}, [n.scale, this.defaults[t]]) : {}
                },
                updateScaleDefaults: function (t, e) {
                    this.defaults.hasOwnProperty(t) && (this.defaults[t] = o.extend(this.defaults[t], e))
                },
                addScalesToLayout: function (t) {
                    o.each(t.scales, function (e) {
                        e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, a.addBox(t, e)
                    })
                }
            }
        }, {
            26: 26,
            31: 31,
            46: 46
        }],
        35: [function (t, e, i) {
            "use strict";
            var n = t(46);
            e.exports = {
                formatters: {
                    values: function (t) {
                        return n.isArray(t) ? t : "" + t
                    },
                    linear: function (t, e, i) {
                        var o = 3 < i.length ? i[2] - i[1] : i[1] - i[0];
                        1 < Math.abs(o) && t !== Math.floor(t) && (o = t - Math.floor(t));
                        var a = n.log10(Math.abs(o)),
                            r = "";
                        if (0 !== t)
                            if (Math.max(Math.abs(i[0]), Math.abs(i[i.length - 1])) < 1e-4) {
                                var s = n.log10(Math.abs(t));
                                r = t.toExponential(Math.floor(s) - Math.floor(a))
                            } else {
                                var l = -1 * Math.floor(a);
                                l = Math.max(Math.min(l, 20), 0), r = t.toFixed(l)
                            }
                        else r = "0";
                        return r
                    },
                    logarithmic: function (t, e, i) {
                        var o = t / Math.pow(10, Math.floor(n.log10(t)));
                        return 0 === t ? "0" : 1 === o || 2 === o || 5 === o || 0 === e || e === i.length - 1 ? t.toExponential() : ""
                    }
                }
            }
        }, {
            46: 46
        }],
        36: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(27),
                a = t(46);
            n._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: a.noop,
                        title: function (t, e) {
                            var i = "",
                                n = e.labels,
                                o = n ? n.length : 0;
                            if (0 < t.length) {
                                var a = t[0];
                                a.xLabel ? i = a.xLabel : 0 < o && a.index < o && (i = n[a.index])
                            }
                            return i
                        },
                        afterTitle: a.noop,
                        beforeBody: a.noop,
                        beforeLabel: a.noop,
                        label: function (t, e) {
                            var i = e.datasets[t.datasetIndex].label || "";
                            return i && (i += ": "), i + t.yLabel
                        },
                        labelColor: function (t, e) {
                            var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                            return {
                                borderColor: i.borderColor,
                                backgroundColor: i.backgroundColor
                            }
                        },
                        labelTextColor: function () {
                            return this._options.bodyFontColor
                        },
                        afterLabel: a.noop,
                        afterBody: a.noop,
                        beforeFooter: a.noop,
                        footer: a.noop,
                        afterFooter: a.noop
                    }
                }
            });
            var r = {
                average: function (t) {
                    if (!t.length) return !1;
                    var e, i, n = 0,
                        o = 0,
                        a = 0;
                    for (e = 0, i = t.length; e < i; ++e) {
                        var r = t[e];
                        if (r && r.hasValue()) {
                            var s = r.tooltipPosition();
                            n += s.x, o += s.y, ++a
                        }
                    }
                    return {
                        x: Math.round(n / a),
                        y: Math.round(o / a)
                    }
                },
                nearest: function (t, e) {
                    var i, n, o, r = e.x,
                        s = e.y,
                        l = Number.POSITIVE_INFINITY;
                    for (i = 0, n = t.length; i < n; ++i) {
                        var d = t[i];
                        if (d && d.hasValue()) {
                            var u = d.getCenterPoint(),
                                h = a.distanceBetweenPoints(e, u);
                            h < l && (l = h, o = d)
                        }
                    }
                    if (o) {
                        var c = o.tooltipPosition();
                        r = c.x, s = c.y
                    }
                    return {
                        x: r,
                        y: s
                    }
                }
            };

            function s(t, e) {
                var i = a.color(t);
                return i.alpha(e * i.alpha()).rgbaString()
            }

            function l(t, e) {
                return e && (a.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
            }

            function d(t) {
                return ("string" == typeof t || t instanceof String) && -1 < t.indexOf("\n") ? t.split("\n") : t
            }

            function u(t) {
                var e = n.global,
                    i = a.valueOrDefault;
                return {
                    xPadding: t.xPadding,
                    yPadding: t.yPadding,
                    xAlign: t.xAlign,
                    yAlign: t.yAlign,
                    bodyFontColor: t.bodyFontColor,
                    _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
                    _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
                    _bodyAlign: t.bodyAlign,
                    bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
                    bodySpacing: t.bodySpacing,
                    titleFontColor: t.titleFontColor,
                    _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
                    _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
                    titleFontSize: i(t.titleFontSize, e.defaultFontSize),
                    _titleAlign: t.titleAlign,
                    titleSpacing: t.titleSpacing,
                    titleMarginBottom: t.titleMarginBottom,
                    footerFontColor: t.footerFontColor,
                    _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
                    _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
                    footerFontSize: i(t.footerFontSize, e.defaultFontSize),
                    _footerAlign: t.footerAlign,
                    footerSpacing: t.footerSpacing,
                    footerMarginTop: t.footerMarginTop,
                    caretSize: t.caretSize,
                    cornerRadius: t.cornerRadius,
                    backgroundColor: t.backgroundColor,
                    opacity: 0,
                    legendColorBackground: t.multiKeyBackground,
                    displayColors: t.displayColors,
                    borderColor: t.borderColor,
                    borderWidth: t.borderWidth
                }
            }

            function h(t) {
                return l([], d(t))
            }(e.exports = o.extend({
                initialize: function () {
                    this._model = u(this._options), this._lastActive = []
                },
                getTitle: function () {
                    var t = this._options.callbacks,
                        e = t.beforeTitle.apply(this, arguments),
                        i = t.title.apply(this, arguments),
                        n = t.afterTitle.apply(this, arguments),
                        o = [];
                    return l(o = l(o = l(o, d(e)), d(i)), d(n))
                },
                getBeforeBody: function () {
                    return h(this._options.callbacks.beforeBody.apply(this, arguments))
                },
                getBody: function (t, e) {
                    var i = this,
                        n = i._options.callbacks,
                        o = [];
                    return a.each(t, function (t) {
                        var a = {
                            before: [],
                            lines: [],
                            after: []
                        };
                        l(a.before, d(n.beforeLabel.call(i, t, e))), l(a.lines, n.label.call(i, t, e)), l(a.after, d(n.afterLabel.call(i, t, e))), o.push(a)
                    }), o
                },
                getAfterBody: function () {
                    return h(this._options.callbacks.afterBody.apply(this, arguments))
                },
                getFooter: function () {
                    var t = this._options.callbacks,
                        e = t.beforeFooter.apply(this, arguments),
                        i = t.footer.apply(this, arguments),
                        n = t.afterFooter.apply(this, arguments),
                        o = [];
                    return l(o = l(o = l(o, d(e)), d(i)), d(n))
                },
                update: function (t) {
                    var e, i, n, o, s, l, d, h, c, f, p, g, m, v, y, b, x, _, w, S, k = this,
                        M = k._options,
                        C = k._model,
                        D = k._model = u(M),
                        T = k._active,
                        O = k._data,
                        P = {
                            xAlign: C.xAlign,
                            yAlign: C.yAlign
                        },
                        I = {
                            x: C.x,
                            y: C.y
                        },
                        A = {
                            width: C.width,
                            height: C.height
                        },
                        R = {
                            x: C.caretX,
                            y: C.caretY
                        };
                    if (T.length) {
                        D.opacity = 1;
                        var F = [],
                            L = [];
                        R = r[M.position].call(k, T, k._eventPosition);
                        var z = [];
                        for (e = 0, i = T.length; e < i; ++e) z.push((_ = x = void 0, x = (b = T[e])._xScale, _ = b._yScale || b._scale, w = b._index, S = b._datasetIndex, {
                            xLabel: x ? x.getLabelForIndex(w, S) : "",
                            yLabel: _ ? _.getLabelForIndex(w, S) : "",
                            index: w,
                            datasetIndex: S,
                            x: b._model.x,
                            y: b._model.y
                        }));
                        M.filter && (z = z.filter(function (t) {
                            return M.filter(t, O)
                        })), M.itemSort && (z = z.sort(function (t, e) {
                            return M.itemSort(t, e, O)
                        })), a.each(z, function (t) {
                            F.push(M.callbacks.labelColor.call(k, t, k._chart)), L.push(M.callbacks.labelTextColor.call(k, t, k._chart))
                        }), D.title = k.getTitle(z, O), D.beforeBody = k.getBeforeBody(z, O), D.body = k.getBody(z, O), D.afterBody = k.getAfterBody(z, O), D.footer = k.getFooter(z, O), D.x = Math.round(R.x), D.y = Math.round(R.y), D.caretPadding = M.caretPadding, D.labelColors = F, D.labelTextColors = L, D.dataPoints = z, P = function (t, e) {
                            var i, n, o, a, r, s = t._model,
                                l = t._chart,
                                d = t._chart.chartArea,
                                u = "center",
                                h = "center";
                            s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom");
                            var c = (d.left + d.right) / 2,
                                f = (d.top + d.bottom) / 2;
                            n = "center" === h ? (i = function (t) {
                                return t <= c
                            }, function (t) {
                                return c < t
                            }) : (i = function (t) {
                                return t <= e.width / 2
                            }, function (t) {
                                return t >= l.width - e.width / 2
                            }), o = function (t) {
                                return t + e.width + s.caretSize + s.caretPadding > l.width
                            }, a = function (t) {
                                return t - e.width - s.caretSize - s.caretPadding < 0
                            }, r = function (t) {
                                return t <= f ? "top" : "bottom"
                            }, i(s.x) ? (u = "left", o(s.x) && (u = "center", h = r(s.y))) : n(s.x) && (u = "right", a(s.x) && (u = "center", h = r(s.y)));
                            var p = t._options;
                            return {
                                xAlign: p.xAlign ? p.xAlign : u,
                                yAlign: p.yAlign ? p.yAlign : h
                            }
                        }(this, A = function (t, e) {
                            var i = t._chart.ctx,
                                n = 2 * e.yPadding,
                                o = 0,
                                r = e.body,
                                s = r.reduce(function (t, e) {
                                    return t + e.before.length + e.lines.length + e.after.length
                                }, 0);
                            s += e.beforeBody.length + e.afterBody.length;
                            var l = e.title.length,
                                d = e.footer.length,
                                u = e.titleFontSize,
                                h = e.bodyFontSize,
                                c = e.footerFontSize;
                            n += l * u, n += l ? (l - 1) * e.titleSpacing : 0, n += l ? e.titleMarginBottom : 0, n += s * h, n += s ? (s - 1) * e.bodySpacing : 0, n += d ? e.footerMarginTop : 0, n += d * c, n += d ? (d - 1) * e.footerSpacing : 0;
                            var f = 0,
                                p = function (t) {
                                    o = Math.max(o, i.measureText(t).width + f)
                                };
                            return i.font = a.fontString(u, e._titleFontStyle, e._titleFontFamily), a.each(e.title, p), i.font = a.fontString(h, e._bodyFontStyle, e._bodyFontFamily), a.each(e.beforeBody.concat(e.afterBody), p), f = e.displayColors ? h + 2 : 0, a.each(r, function (t) {
                                a.each(t.before, p), a.each(t.lines, p), a.each(t.after, p)
                            }), f = 0, i.font = a.fontString(c, e._footerFontStyle, e._footerFontFamily), a.each(e.footer, p), {
                                width: o += 2 * e.xPadding,
                                height: n
                            }
                        }(this, D)), n = D, o = A, s = P, l = k._chart, d = n.x, h = n.y, c = n.caretSize, f = n.caretPadding, p = n.cornerRadius, g = s.xAlign, m = s.yAlign, v = c + f, y = p + f, "right" === g ? d -= o.width : "center" === g && ((d -= o.width / 2) + o.width > l.width && (d = l.width - o.width), d < 0 && (d = 0)), "top" === m ? h += v : h -= "bottom" === m ? o.height + v : o.height / 2, "center" === m ? "left" === g ? d += v : "right" === g && (d -= v) : "left" === g ? d -= y : "right" === g && (d += y), I = {
                            x: d,
                            y: h
                        }
                    } else D.opacity = 0;
                    return D.xAlign = P.xAlign, D.yAlign = P.yAlign, D.x = I.x, D.y = I.y, D.width = A.width, D.height = A.height, D.caretX = R.x, D.caretY = R.y, k._model = D, t && M.custom && M.custom.call(k, D), k
                },
                drawCaret: function (t, e) {
                    var i = this._chart.ctx,
                        n = this._view,
                        o = this.getCaretPosition(t, e, n);
                    i.lineTo(o.x1, o.y1), i.lineTo(o.x2, o.y2), i.lineTo(o.x3, o.y3)
                },
                getCaretPosition: function (t, e, i) {
                    var n, o, a, r, s, l, d = i.caretSize,
                        u = i.cornerRadius,
                        h = i.xAlign,
                        c = i.yAlign,
                        f = t.x,
                        p = t.y,
                        g = e.width,
                        m = e.height;
                    if ("center" === c) s = p + m / 2, l = "left" === h ? (o = (n = f) - d, a = n, r = s + d, s - d) : (o = (n = f + g) + d, a = n, r = s - d, s + d);
                    else if (n = "left" === h ? (o = f + u + d) - d : "right" === h ? (o = f + g - u - d) - d : (o = i.caretX) - d, a = o + d, "top" === c) s = (r = p) - d, l = r;
                    else {
                        s = (r = p + m) + d, l = r;
                        var v = a;
                        a = n, n = v
                    }
                    return {
                        x1: n,
                        x2: o,
                        x3: a,
                        y1: r,
                        y2: s,
                        y3: l
                    }
                },
                drawTitle: function (t, e, i, n) {
                    var o = e.title;
                    if (o.length) {
                        i.textAlign = e._titleAlign, i.textBaseline = "top";
                        var r, l, d = e.titleFontSize,
                            u = e.titleSpacing;
                        for (i.fillStyle = s(e.titleFontColor, n), i.font = a.fontString(d, e._titleFontStyle, e._titleFontFamily), r = 0, l = o.length; r < l; ++r) i.fillText(o[r], t.x, t.y), t.y += d + u, r + 1 === o.length && (t.y += e.titleMarginBottom - u)
                    }
                },
                drawBody: function (t, e, i, n) {
                    var o = e.bodyFontSize,
                        r = e.bodySpacing,
                        l = e.body;
                    i.textAlign = e._bodyAlign, i.textBaseline = "top", i.font = a.fontString(o, e._bodyFontStyle, e._bodyFontFamily);
                    var d = 0,
                        u = function (e) {
                            i.fillText(e, t.x + d, t.y), t.y += o + r
                        };
                    i.fillStyle = s(e.bodyFontColor, n), a.each(e.beforeBody, u);
                    var h = e.displayColors;
                    d = h ? o + 2 : 0, a.each(l, function (r, l) {
                        var d = s(e.labelTextColors[l], n);
                        i.fillStyle = d, a.each(r.before, u), a.each(r.lines, function (a) {
                            h && (i.fillStyle = s(e.legendColorBackground, n), i.fillRect(t.x, t.y, o, o), i.lineWidth = 1, i.strokeStyle = s(e.labelColors[l].borderColor, n), i.strokeRect(t.x, t.y, o, o), i.fillStyle = s(e.labelColors[l].backgroundColor, n), i.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), i.fillStyle = d), u(a)
                        }), a.each(r.after, u)
                    }), d = 0, a.each(e.afterBody, u), t.y -= r
                },
                drawFooter: function (t, e, i, n) {
                    var o = e.footer;
                    o.length && (t.y += e.footerMarginTop, i.textAlign = e._footerAlign, i.textBaseline = "top", i.fillStyle = s(e.footerFontColor, n), i.font = a.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), a.each(o, function (n) {
                        i.fillText(n, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing
                    }))
                },
                drawBackground: function (t, e, i, n, o) {
                    i.fillStyle = s(e.backgroundColor, o), i.strokeStyle = s(e.borderColor, o), i.lineWidth = e.borderWidth;
                    var a = e.xAlign,
                        r = e.yAlign,
                        l = t.x,
                        d = t.y,
                        u = n.width,
                        h = n.height,
                        c = e.cornerRadius;
                    i.beginPath(), i.moveTo(l + c, d), "top" === r && this.drawCaret(t, n), i.lineTo(l + u - c, d), i.quadraticCurveTo(l + u, d, l + u, d + c), "center" === r && "right" === a && this.drawCaret(t, n), i.lineTo(l + u, d + h - c), i.quadraticCurveTo(l + u, d + h, l + u - c, d + h), "bottom" === r && this.drawCaret(t, n), i.lineTo(l + c, d + h), i.quadraticCurveTo(l, d + h, l, d + h - c), "center" === r && "left" === a && this.drawCaret(t, n), i.lineTo(l, d + c), i.quadraticCurveTo(l, d, l + c, d), i.closePath(), i.fill(), 0 < e.borderWidth && i.stroke()
                },
                draw: function () {
                    var t = this._chart.ctx,
                        e = this._view;
                    if (0 !== e.opacity) {
                        var i = {
                                width: e.width,
                                height: e.height
                            },
                            n = {
                                x: e.x,
                                y: e.y
                            },
                            o = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                            a = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                        this._options.enabled && a && (this.drawBackground(n, e, t, i, o), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, o), this.drawBody(n, e, t, o), this.drawFooter(n, e, t, o))
                    }
                },
                handleEvent: function (t) {
                    var e, i = this,
                        n = i._options;
                    return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !a.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
                        x: t.x,
                        y: t.y
                    }, i.update(!0), i.pivot())), e
                }
            })).positioners = r
        }, {
            26: 26,
            27: 27,
            46: 46
        }],
        37: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(27),
                a = t(46);
            n._set("global", {
                elements: {
                    arc: {
                        backgroundColor: n.global.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2
                    }
                }
            }), e.exports = o.extend({
                inLabelRange: function (t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                },
                inRange: function (t, e) {
                    var i = this._view;
                    if (i) {
                        for (var n = a.getAngleFromPoint(i, {
                                x: t,
                                y: e
                            }), o = n.angle, r = n.distance, s = i.startAngle, l = i.endAngle; l < s;) l += 2 * Math.PI;
                        for (; l < o;) o -= 2 * Math.PI;
                        for (; o < s;) o += 2 * Math.PI;
                        var d = s <= o && o <= l,
                            u = r >= i.innerRadius && r <= i.outerRadius;
                        return d && u
                    }
                    return !1
                },
                getCenterPoint: function () {
                    var t = this._view,
                        e = (t.startAngle + t.endAngle) / 2,
                        i = (t.innerRadius + t.outerRadius) / 2;
                    return {
                        x: t.x + Math.cos(e) * i,
                        y: t.y + Math.sin(e) * i
                    }
                },
                getArea: function () {
                    var t = this._view;
                    return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                },
                tooltipPosition: function () {
                    var t = this._view,
                        e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                        i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                    return {
                        x: t.x + Math.cos(e) * i,
                        y: t.y + Math.sin(e) * i
                    }
                },
                draw: function () {
                    var t = this._chart.ctx,
                        e = this._view,
                        i = e.startAngle,
                        n = e.endAngle;
                    t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                }
            })
        }, {
            26: 26,
            27: 27,
            46: 46
        }],
        38: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(27),
                a = t(46),
                r = n.global;
            n._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: r.defaultColor,
                        borderWidth: 3,
                        borderColor: r.defaultColor,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            }), e.exports = o.extend({
                draw: function () {
                    var t, e, i, n, o = this._view,
                        s = this._chart.ctx,
                        l = o.spanGaps,
                        d = this._children.slice(),
                        u = r.elements.line,
                        h = -1;
                    for (this._loop && d.length && d.push(d[0]), s.save(), s.lineCap = o.borderCapStyle || u.borderCapStyle, s.setLineDash && s.setLineDash(o.borderDash || u.borderDash), s.lineDashOffset = o.borderDashOffset || u.borderDashOffset, s.lineJoin = o.borderJoinStyle || u.borderJoinStyle, s.lineWidth = o.borderWidth || u.borderWidth, s.strokeStyle = o.borderColor || r.defaultColor, s.beginPath(), h = -1, t = 0; t < d.length; ++t) e = d[t], i = a.previousItem(d, t), n = e._view, 0 === t ? n.skip || (s.moveTo(n.x, n.y), h = t) : (i = -1 === h ? i : d[h], n.skip || (h !== t - 1 && !l || -1 === h ? s.moveTo(n.x, n.y) : a.canvas.lineTo(s, i._view, e._view), h = t));
                    s.stroke(), s.restore()
                }
            })
        }, {
            26: 26,
            27: 27,
            46: 46
        }],
        39: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(27),
                a = t(46),
                r = n.global.defaultColor;

            function s(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
            }
            n._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: r,
                        borderColor: r,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            }), e.exports = o.extend({
                inRange: function (t, e) {
                    var i = this._view;
                    return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
                },
                inLabelRange: s,
                inXRange: s,
                inYRange: function (t) {
                    var e = this._view;
                    return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
                },
                getCenterPoint: function () {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                },
                getArea: function () {
                    return Math.PI * Math.pow(this._view.radius, 2)
                },
                tooltipPosition: function () {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y,
                        padding: t.radius + t.borderWidth
                    }
                },
                draw: function (t) {
                    var e = this._view,
                        i = this._model,
                        o = this._chart.ctx,
                        s = e.pointStyle,
                        l = e.rotation,
                        d = e.radius,
                        u = e.x,
                        h = e.y;
                    e.skip || (void 0 === t || i.x >= t.left && 1.01 * t.right >= i.x && i.y >= t.top && 1.01 * t.bottom >= i.y) && (o.strokeStyle = e.borderColor || r, o.lineWidth = a.valueOrDefault(e.borderWidth, n.global.elements.point.borderWidth), o.fillStyle = e.backgroundColor || r, a.canvas.drawPoint(o, s, d, u, h, l))
                }
            })
        }, {
            26: 26,
            27: 27,
            46: 46
        }],
        40: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(27);

            function a(t) {
                return void 0 !== t._view.width
            }

            function r(t) {
                var e, i, n, o, r = t._view;
                if (a(t)) {
                    var s = r.width / 2;
                    e = r.x - s, i = r.x + s, n = Math.min(r.y, r.base), o = Math.max(r.y, r.base)
                } else {
                    var l = r.height / 2;
                    e = Math.min(r.x, r.base), i = Math.max(r.x, r.base), n = r.y - l, o = r.y + l
                }
                return {
                    left: e,
                    top: n,
                    right: i,
                    bottom: o
                }
            }
            n._set("global", {
                elements: {
                    rectangle: {
                        backgroundColor: n.global.defaultColor,
                        borderColor: n.global.defaultColor,
                        borderSkipped: "bottom",
                        borderWidth: 0
                    }
                }
            }), e.exports = o.extend({
                draw: function () {
                    var t, e, i, n, o, a, r, s = this._chart.ctx,
                        l = this._view,
                        d = l.borderWidth;
                    if (r = l.horizontal ? (t = l.base, e = l.x, i = l.y - l.height / 2, n = l.y + l.height / 2, o = t < e ? 1 : -1, a = 1, l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, o = 1, a = (i = l.y) < (n = l.base) ? 1 : -1, l.borderSkipped || "bottom"), d) {
                        var u = Math.min(Math.abs(t - e), Math.abs(i - n)),
                            h = (d = u < d ? u : d) / 2,
                            c = t + ("left" !== r ? h * o : 0),
                            f = e + ("right" !== r ? -h * o : 0),
                            p = i + ("top" !== r ? h * a : 0),
                            g = n + ("bottom" !== r ? -h * a : 0);
                        c !== f && (i = p, n = g), p !== g && (t = c, e = f)
                    }
                    s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = d;
                    var m = [
                            [t, n],
                            [t, i],
                            [e, i],
                            [e, n]
                        ],
                        v = ["bottom", "left", "top", "right"].indexOf(r, 0);

                    function y(t) {
                        return m[(v + t) % 4]
                    } - 1 === v && (v = 0);
                    var b = y(0);
                    s.moveTo(b[0], b[1]);
                    for (var x = 1; x < 4; x++) b = y(x), s.lineTo(b[0], b[1]);
                    s.fill(), d && s.stroke()
                },
                height: function () {
                    var t = this._view;
                    return t.base - t.y
                },
                inRange: function (t, e) {
                    var i = !1;
                    if (this._view) {
                        var n = r(this);
                        i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom
                    }
                    return i
                },
                inLabelRange: function (t, e) {
                    if (!this._view) return !1;
                    var i = r(this);
                    return a(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom
                },
                inXRange: function (t) {
                    var e = r(this);
                    return t >= e.left && t <= e.right
                },
                inYRange: function (t) {
                    var e = r(this);
                    return t >= e.top && t <= e.bottom
                },
                getCenterPoint: function () {
                    var t, e, i = this._view;
                    return e = a(this) ? (t = i.x, (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, i.y), {
                        x: t,
                        y: e
                    }
                },
                getArea: function () {
                    var t = this._view;
                    return t.width * Math.abs(t.y - t.base)
                },
                tooltipPosition: function () {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                }
            })
        }, {
            26: 26,
            27: 27
        }],
        41: [function (t, e, i) {
            "use strict";
            e.exports = {}, e.exports.Arc = t(37), e.exports.Line = t(38), e.exports.Point = t(39), e.exports.Rectangle = t(40)
        }, {
            37: 37,
            38: 38,
            39: 39,
            40: 40
        }],
        42: [function (t, e, i) {
            "use strict";
            var n = t(43);
            i = e.exports = {
                clear: function (t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                },
                roundedRect: function (t, e, i, n, o, a) {
                    if (a) {
                        var r = Math.min(a, o / 2 - 1e-7, n / 2 - 1e-7);
                        t.moveTo(e + r, i), t.lineTo(e + n - r, i), t.arcTo(e + n, i, e + n, i + r, r), t.lineTo(e + n, i + o - r), t.arcTo(e + n, i + o, e + n - r, i + o, r), t.lineTo(e + r, i + o), t.arcTo(e, i + o, e, i + o - r, r), t.lineTo(e, i + r), t.arcTo(e, i, e + r, i, r), t.closePath(), t.moveTo(e, i)
                    } else t.rect(e, i, n, o)
                },
                drawPoint: function (t, e, i, n, o, a) {
                    var r, s, l, d, u, h;
                    if (a = a || 0, !e || "object" != typeof e || "[object HTMLImageElement]" !== (r = e.toString()) && "[object HTMLCanvasElement]" !== r) {
                        if (!(isNaN(i) || i <= 0)) {
                            switch (t.save(), t.translate(n, o), t.rotate(a * Math.PI / 180), t.beginPath(), e) {
                                default:
                                    t.arc(0, 0, i, 0, 2 * Math.PI), t.closePath();
                                    break;
                                case "triangle":
                                    u = (s = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(-s / 2, u / 3), t.lineTo(s / 2, u / 3), t.lineTo(0, -2 * u / 3), t.closePath();
                                    break;
                                case "rect":
                                    h = 1 / Math.SQRT2 * i, t.rect(-h, -h, 2 * h, 2 * h);
                                    break;
                                case "rectRounded":
                                    var c = i / Math.SQRT2,
                                        f = -c,
                                        p = -c,
                                        g = Math.SQRT2 * i;
                                    this.roundedRect(t, f, p, g, g, .425 * i);
                                    break;
                                case "rectRot":
                                    h = 1 / Math.SQRT2 * i, t.moveTo(-h, 0), t.lineTo(0, h), t.lineTo(h, 0), t.lineTo(0, -h), t.closePath();
                                    break;
                                case "cross":
                                    t.moveTo(0, i), t.lineTo(0, -i), t.moveTo(-i, 0), t.lineTo(i, 0);
                                    break;
                                case "crossRot":
                                    l = Math.cos(Math.PI / 4) * i, d = Math.sin(Math.PI / 4) * i, t.moveTo(-l, -d), t.lineTo(l, d), t.moveTo(-l, d), t.lineTo(l, -d);
                                    break;
                                case "star":
                                    t.moveTo(0, i), t.lineTo(0, -i), t.moveTo(-i, 0), t.lineTo(i, 0), l = Math.cos(Math.PI / 4) * i, d = Math.sin(Math.PI / 4) * i, t.moveTo(-l, -d), t.lineTo(l, d), t.moveTo(-l, d), t.lineTo(l, -d);
                                    break;
                                case "line":
                                    t.moveTo(-i, 0), t.lineTo(i, 0);
                                    break;
                                case "dash":
                                    t.moveTo(0, 0), t.lineTo(i, 0)
                            }
                            t.fill(), t.stroke(), t.restore()
                        }
                    } else t.drawImage(e, n - e.width / 2, o - e.height / 2, e.width, e.height)
                },
                clipArea: function (t, e) {
                    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                },
                unclipArea: function (t) {
                    t.restore()
                },
                lineTo: function (t, e, i, n) {
                    if (i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
                    i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
                }
            }, n.clear = i.clear, n.drawRoundedRectangle = function (t) {
                t.beginPath(), i.roundedRect.apply(i, arguments)
            }
        }, {
            43: 43
        }],
        43: [function (t, e, i) {
            "use strict";
            var n, o = {
                noop: function () {},
                uid: (n = 0, function () {
                    return n++
                }),
                isNullOrUndef: function (t) {
                    return null == t
                },
                isArray: Array.isArray ? Array.isArray : function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                isObject: function (t) {
                    return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                },
                valueOrDefault: function (t, e) {
                    return void 0 === t ? e : t
                },
                valueAtIndexOrDefault: function (t, e, i) {
                    return o.valueOrDefault(o.isArray(t) ? t[e] : t, i)
                },
                callback: function (t, e, i) {
                    if (t && "function" == typeof t.call) return t.apply(i, e)
                },
                each: function (t, e, i, n) {
                    var a, r, s;
                    if (o.isArray(t))
                        if (r = t.length, n)
                            for (a = r - 1; 0 <= a; a--) e.call(i, t[a], a);
                        else
                            for (a = 0; a < r; a++) e.call(i, t[a], a);
                    else if (o.isObject(t))
                        for (r = (s = Object.keys(t)).length, a = 0; a < r; a++) e.call(i, t[s[a]], s[a])
                },
                arrayEquals: function (t, e) {
                    var i, n, a, r;
                    if (!t || !e || t.length !== e.length) return !1;
                    for (i = 0, n = t.length; i < n; ++i)
                        if (a = t[i], r = e[i], a instanceof Array && r instanceof Array) {
                            if (!o.arrayEquals(a, r)) return !1
                        } else if (a !== r) return !1;
                    return !0
                },
                clone: function (t) {
                    if (o.isArray(t)) return t.map(o.clone);
                    if (o.isObject(t)) {
                        for (var e = {}, i = Object.keys(t), n = i.length, a = 0; a < n; ++a) e[i[a]] = o.clone(t[i[a]]);
                        return e
                    }
                    return t
                },
                _merger: function (t, e, i, n) {
                    var a = e[t],
                        r = i[t];
                    o.isObject(a) && o.isObject(r) ? o.merge(a, r, n) : e[t] = o.clone(r)
                },
                _mergerIf: function (t, e, i) {
                    var n = e[t],
                        a = i[t];
                    o.isObject(n) && o.isObject(a) ? o.mergeIf(n, a) : e.hasOwnProperty(t) || (e[t] = o.clone(a))
                },
                merge: function (t, e, i) {
                    var n, a, r, s, l, d = o.isArray(e) ? e : [e],
                        u = d.length;
                    if (!o.isObject(t)) return t;
                    for (n = (i = i || {}).merger || o._merger, a = 0; a < u; ++a)
                        if (e = d[a], o.isObject(e))
                            for (l = 0, s = (r = Object.keys(e)).length; l < s; ++l) n(r[l], t, e, i);
                    return t
                },
                mergeIf: function (t, e) {
                    return o.merge(t, e, {
                        merger: o._mergerIf
                    })
                },
                extend: function (t) {
                    for (var e = function (e, i) {
                            t[i] = e
                        }, i = 1, n = arguments.length; i < n; ++i) o.each(arguments[i], e);
                    return t
                },
                inherits: function (t) {
                    var e = this,
                        i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                            return e.apply(this, arguments)
                        },
                        n = function () {
                            this.constructor = i
                        };
                    return n.prototype = e.prototype, i.prototype = new n, i.extend = o.inherits, t && o.extend(i.prototype, t), i.__super__ = e.prototype, i
                }
            };
            (e.exports = o).callCallback = o.callback, o.indexOf = function (t, e, i) {
                return Array.prototype.indexOf.call(t, e, i)
            }, o.getValueOrDefault = o.valueOrDefault, o.getValueAtIndexOrDefault = o.valueAtIndexOrDefault
        }, {}],
        44: [function (t, e, i) {
            "use strict";
            var n = t(43),
                o = {
                    linear: function (t) {
                        return t
                    },
                    easeInQuad: function (t) {
                        return t * t
                    },
                    easeOutQuad: function (t) {
                        return -t * (t - 2)
                    },
                    easeInOutQuad: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    easeInCubic: function (t) {
                        return t * t * t
                    },
                    easeOutCubic: function (t) {
                        return (t -= 1) * t * t + 1
                    },
                    easeInOutCubic: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    },
                    easeInQuart: function (t) {
                        return t * t * t * t
                    },
                    easeOutQuart: function (t) {
                        return -((t -= 1) * t * t * t - 1)
                    },
                    easeInOutQuart: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    },
                    easeInQuint: function (t) {
                        return t * t * t * t * t
                    },
                    easeOutQuint: function (t) {
                        return (t -= 1) * t * t * t * t + 1
                    },
                    easeInOutQuint: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    },
                    easeInSine: function (t) {
                        return 1 - Math.cos(t * (Math.PI / 2))
                    },
                    easeOutSine: function (t) {
                        return Math.sin(t * (Math.PI / 2))
                    },
                    easeInOutSine: function (t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    },
                    easeInExpo: function (t) {
                        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                    },
                    easeOutExpo: function (t) {
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                    },
                    easeInOutExpo: function (t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                    },
                    easeInCirc: function (t) {
                        return 1 <= t ? t : -(Math.sqrt(1 - t * t) - 1)
                    },
                    easeOutCirc: function (t) {
                        return Math.sqrt(1 - (t -= 1) * t)
                    },
                    easeInOutCirc: function (t) {
                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    },
                    easeInElastic: function (t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i))
                    },
                    easeOutElastic: function (t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
                    },
                    easeInOutElastic: function (t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
                    },
                    easeInBack: function (t) {
                        return t * t * (2.70158 * t - 1.70158)
                    },
                    easeOutBack: function (t) {
                        return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
                    },
                    easeInOutBack: function (t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                    },
                    easeInBounce: function (t) {
                        return 1 - o.easeOutBounce(1 - t)
                    },
                    easeOutBounce: function (t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    },
                    easeInOutBounce: function (t) {
                        return t < .5 ? .5 * o.easeInBounce(2 * t) : .5 * o.easeOutBounce(2 * t - 1) + .5
                    }
                };
            e.exports = {
                effects: o
            }, n.easingEffects = o
        }, {
            43: 43
        }],
        45: [function (t, e, i) {
            "use strict";
            var n = t(43);
            e.exports = {
                toLineHeight: function (t, e) {
                    var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!i || "normal" === i[1]) return 1.2 * e;
                    switch (t = +i[2], i[3]) {
                        case "px":
                            return t;
                        case "%":
                            t /= 100
                    }
                    return e * t
                },
                toPadding: function (t) {
                    var e, i, o, a;
                    return n.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, o = +t.bottom || 0, a = +t.left || 0) : e = i = o = a = +t || 0, {
                        top: e,
                        right: i,
                        bottom: o,
                        left: a,
                        height: e + o,
                        width: a + i
                    }
                },
                resolve: function (t, e, i) {
                    var o, a, r;
                    for (o = 0, a = t.length; o < a; ++o)
                        if (void 0 !== (r = t[o]) && (void 0 !== e && "function" == typeof r && (r = r(e)), void 0 !== i && n.isArray(r) && (r = r[i]), void 0 !== r)) return r
                }
            }
        }, {
            43: 43
        }],
        46: [function (t, e, i) {
            "use strict";
            e.exports = t(43), e.exports.easing = t(44), e.exports.canvas = t(42), e.exports.options = t(45)
        }, {
            42: 42,
            43: 43,
            44: 44,
            45: 45
        }],
        47: [function (t, e, i) {
            e.exports = {
                acquireContext: function (t) {
                    return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
                }
            }
        }, {}],
        48: [function (t, e, i) {
            "use strict";
            var n = t(46),
                o = "$chartjs",
                a = "chartjs-",
                r = a + "render-monitor",
                s = a + "render-animation",
                l = ["animationstart", "webkitAnimationStart"],
                d = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                };

            function u(t, e) {
                var i = n.getStyle(t, e),
                    o = i && i.match(/^(\d+)(\.\d+)?px$/);
                return o ? Number(o[1]) : void 0
            }
            var h = !! function () {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function () {
                            t = !0
                        }
                    });
                    window.addEventListener("e", null, e)
                } catch (t) {}
                return t
            }() && {
                passive: !0
            };

            function c(t, e, i) {
                t.addEventListener(e, i, h)
            }

            function f(t, e, i) {
                t.removeEventListener(e, i, h)
            }

            function p(t, e, i, n, o) {
                return {
                    type: t,
                    chart: e,
                    native: o || null,
                    x: void 0 !== i ? i : null,
                    y: void 0 !== n ? n : null
                }
            }
            e.exports = {
                _enabled: "undefined" != typeof window && "undefined" != typeof document,
                initialize: function () {
                    var t, e, i = "from{opacity:0.99}to{opacity:1}";
                    t = "@-webkit-keyframes " + s + "{" + i + "}@keyframes " + s + "{" + i + "}." + r + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", e = this._style || document.createElement("style"), this._style || (t = "/* Chart.js */\n" + t, (this._style = e).setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(e)), e.appendChild(document.createTextNode(t))
                },
                acquireContext: function (t, e) {
                    "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                    var i = t && t.getContext && t.getContext("2d");
                    return i && i.canvas === t ? (function (t, e) {
                        var i = t.style,
                            n = t.getAttribute("height"),
                            a = t.getAttribute("width");
                        if (t[o] = {
                                initial: {
                                    height: n,
                                    width: a,
                                    style: {
                                        display: i.display,
                                        height: i.height,
                                        width: i.width
                                    }
                                }
                            }, i.display = i.display || "block", null === a || "" === a) {
                            var r = u(t, "width");
                            void 0 !== r && (t.width = r)
                        }
                        if (null === n || "" === n)
                            if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                            else {
                                var s = u(t, "height");
                                void 0 !== r && (t.height = s)
                            }
                    }(t, e), i) : null
                },
                releaseContext: function (t) {
                    var e = t.canvas;
                    if (e[o]) {
                        var i = e[o].initial;
                        ["height", "width"].forEach(function (t) {
                            var o = i[t];
                            n.isNullOrUndef(o) ? e.removeAttribute(t) : e.setAttribute(t, o)
                        }), n.each(i.style || {}, function (t, i) {
                            e.style[i] = t
                        }), e.width = e.width, delete e[o]
                    }
                },
                addEventListener: function (t, e, i) {
                    var u = t.canvas;
                    if ("resize" !== e) {
                        var h = i[o] || (i[o] = {});
                        c(u, e, (h.proxies || (h.proxies = {}))[t.id + "_" + e] = function (e) {
                            var o, a, r;
                            i((a = t, p(d[(o = e).type] || o.type, a, (r = n.getRelativePosition(o, a)).x, r.y, o)))
                        })
                    } else ! function (t, e, i) {
                        var d, u, h, f, g, m, v, y, b = t[o] || (t[o] = {}),
                            x = b.resizer = function (t) {
                                var e = document.createElement("div"),
                                    i = a + "size-monitor",
                                    n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                                e.style.cssText = n, e.className = i, e.innerHTML = '<div class="' + i + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                                var o = e.childNodes[0],
                                    r = e.childNodes[1];
                                e._reset = function () {
                                    o.scrollLeft = 1e6, o.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6
                                };
                                var s = function () {
                                    e._reset(), t()
                                };
                                return c(o, "scroll", s.bind(o, "expand")), c(r, "scroll", s.bind(r, "shrink")), e
                            }((h = !(d = function () {
                                if (b.resizer) return e(p("resize", i))
                            }), f = [], function () {
                                f = Array.prototype.slice.call(arguments), u = u || this, h || (h = !0, n.requestAnimFrame.call(window, function () {
                                    h = !1, d.apply(u, f)
                                }))
                            }));
                        m = function () {
                            if (b.resizer) {
                                var e = t.parentNode;
                                e && e !== x.parentNode && e.insertBefore(x, e.firstChild), x._reset()
                            }
                        }, v = (g = t)[o] || (g[o] = {}), y = v.renderProxy = function (t) {
                            t.animationName === s && m()
                        }, n.each(l, function (t) {
                            c(g, t, y)
                        }), v.reflow = !!g.offsetParent, g.classList.add(r)
                    }(u, i, t)
                },
                removeEventListener: function (t, e, i) {
                    var a = t.canvas;
                    if ("resize" !== e) {
                        var s = ((i[o] || {}).proxies || {})[t.id + "_" + e];
                        s && f(a, e, s)
                    } else ! function (t) {
                        var e, i, a, s = t[o] || {},
                            d = s.resizer;
                        delete s.resizer, i = (e = t)[o] || {}, (a = i.renderProxy) && (n.each(l, function (t) {
                            f(e, t, a)
                        }), delete i.renderProxy), e.classList.remove(r), d && d.parentNode && d.parentNode.removeChild(d)
                    }(a)
                }
            }, n.addEvent = c, n.removeEvent = f
        }, {
            46: 46
        }],
        49: [function (t, e, i) {
            "use strict";
            var n = t(46),
                o = t(47),
                a = t(48),
                r = a._enabled ? a : o;
            e.exports = n.extend({
                initialize: function () {},
                acquireContext: function () {},
                releaseContext: function () {},
                addEventListener: function () {},
                removeEventListener: function () {}
            }, r)
        }, {
            46: 46,
            47: 47,
            48: 48
        }],
        50: [function (t, e, i) {
            "use strict";
            e.exports = {}, e.exports.filler = t(51), e.exports.legend = t(52), e.exports.title = t(53)
        }, {
            51: 51,
            52: 52,
            53: 53
        }],
        51: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(41),
                a = t(46);
            n._set("global", {
                plugins: {
                    filler: {
                        propagate: !0
                    }
                }
            });
            var r = {
                dataset: function (t) {
                    var e = t.fill,
                        i = t.chart,
                        n = i.getDatasetMeta(e),
                        o = n && i.isDatasetVisible(e) && n.dataset._children || [],
                        a = o.length || 0;
                    return a ? function (t, e) {
                        return e < a && o[e]._view || null
                    } : null
                },
                boundary: function (t) {
                    var e = t.boundary,
                        i = e ? e.x : null,
                        n = e ? e.y : null;
                    return function (t) {
                        return {
                            x: null === i ? t.x : i,
                            y: null === n ? t.y : n
                        }
                    }
                }
            };

            function s(t, e, i) {
                var n, o = t._model || {},
                    a = o.fill;
                if (void 0 === a && (a = !!o.backgroundColor), !1 === a || null === a) return !1;
                if (!0 === a) return "origin";
                if (n = parseFloat(a, 10), isFinite(n) && Math.floor(n) === n) return "-" !== a[0] && "+" !== a[0] || (n = e + n), !(n === e || n < 0 || i <= n) && n;
                switch (a) {
                    case "bottom":
                        return "start";
                    case "top":
                        return "end";
                    case "zero":
                        return "origin";
                    case "origin":
                    case "start":
                    case "end":
                        return a;
                    default:
                        return !1
                }
            }

            function l(t) {
                var e, i = t.el._model || {},
                    n = t.el._scale || {},
                    o = t.fill,
                    a = null;
                if (isFinite(o)) return null;
                if ("start" === o ? a = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === o ? a = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? a = i.scaleZero : n.getBasePosition ? a = n.getBasePosition() : n.getBasePixel && (a = n.getBasePixel()), null != a) {
                    if (void 0 !== a.x && void 0 !== a.y) return a;
                    if ("number" == typeof a && isFinite(a)) return {
                        x: (e = n.isHorizontal()) ? a : null,
                        y: e ? null : a
                    }
                }
                return null
            }

            function d(t, e, i) {
                var n, o = t[e].fill,
                    a = [e];
                if (!i) return o;
                for (; !1 !== o && -1 === a.indexOf(o);) {
                    if (!isFinite(o)) return o;
                    if (!(n = t[o])) return !1;
                    if (n.visible) return o;
                    a.push(o), o = n.fill
                }
                return !1
            }

            function u(t) {
                return t && !t.skip
            }

            function h(t, e, i, n, o) {
                var r;
                if (n && o) {
                    for (t.moveTo(e[0].x, e[0].y), r = 1; r < n; ++r) a.canvas.lineTo(t, e[r - 1], e[r]);
                    for (t.lineTo(i[o - 1].x, i[o - 1].y), r = o - 1; 0 < r; --r) a.canvas.lineTo(t, i[r], i[r - 1], !0)
                }
            }
            e.exports = {
                id: "filler",
                afterDatasetsUpdate: function (t, e) {
                    var i, n, a, u, h, c, f, p = (t.data.datasets || []).length,
                        g = e.propagate,
                        m = [];
                    for (n = 0; n < p; ++n) u = null, (a = (i = t.getDatasetMeta(n)).dataset) && a._model && a instanceof o.Line && (u = {
                        visible: t.isDatasetVisible(n),
                        fill: s(a, n, p),
                        chart: t,
                        el: a
                    }), i.$filler = u, m.push(u);
                    for (n = 0; n < p; ++n)(u = m[n]) && (u.fill = d(m, n, g), u.boundary = l(u), u.mapper = (f = void 0, !(f = "dataset") === (c = (h = u).fill) ? null : (isFinite(c) || (f = "boundary"), r[f](h))))
                },
                beforeDatasetDraw: function (t, e) {
                    var i = e.meta.$filler;
                    if (i) {
                        var o = t.ctx,
                            r = i.el,
                            s = r._view,
                            l = r._children || [],
                            d = i.mapper,
                            c = s.backgroundColor || n.global.defaultColor;
                        d && c && l.length && (a.canvas.clipArea(o, t.chartArea), function (t, e, i, n, o, a) {
                            var r, s, l, d, c, f, p, g = e.length,
                                m = n.spanGaps,
                                v = [],
                                y = [],
                                b = 0,
                                x = 0;
                            for (t.beginPath(), r = 0, s = g + !!a; r < s; ++r) c = i(d = e[l = r % g]._view, l, n), f = u(d), p = u(c), f && p ? (b = v.push(d), x = y.push(c)) : b && x && (m ? (f && v.push(d), p && y.push(c)) : (h(t, v, y, b, x), b = x = 0, v = [], y = []));
                            h(t, v, y, b, x), t.closePath(), t.fillStyle = o, t.fill()
                        }(o, l, d, s, c, r._loop), a.canvas.unclipArea(o))
                    }
                }
            }
        }, {
            26: 26,
            41: 41,
            46: 46
        }],
        52: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(27),
                a = t(46),
                r = t(31),
                s = a.noop;

            function l(t, e) {
                return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
            }
            n._set("global", {
                legend: {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function (t, e) {
                        var i = e.datasetIndex,
                            n = this.chart,
                            o = n.getDatasetMeta(i);
                        o.hidden = null === o.hidden ? !n.data.datasets[i].hidden : null, n.update()
                    },
                    onHover: null,
                    labels: {
                        boxWidth: 40,
                        padding: 10,
                        generateLabels: function (t) {
                            var e = t.data;
                            return a.isArray(e.datasets) ? e.datasets.map(function (e, i) {
                                return {
                                    text: e.label,
                                    fillStyle: a.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                                    hidden: !t.isDatasetVisible(i),
                                    lineCap: e.borderCapStyle,
                                    lineDash: e.borderDash,
                                    lineDashOffset: e.borderDashOffset,
                                    lineJoin: e.borderJoinStyle,
                                    lineWidth: e.borderWidth,
                                    strokeStyle: e.borderColor,
                                    pointStyle: e.pointStyle,
                                    datasetIndex: i
                                }
                            }, this) : []
                        }
                    }
                },
                legendCallback: function (t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                }
            });
            var d = o.extend({
                initialize: function (t) {
                    a.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                },
                beforeUpdate: s,
                update: function (t, e, i) {
                    var n = this;
                    return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                },
                afterUpdate: s,
                beforeSetDimensions: s,
                setDimensions: function () {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: s,
                beforeBuildLabels: s,
                buildLabels: function () {
                    var t = this,
                        e = t.options.labels || {},
                        i = a.callback(e.generateLabels, [t.chart], t) || [];
                    e.filter && (i = i.filter(function (i) {
                        return e.filter(i, t.chart.data)
                    })), t.options.reverse && i.reverse(), t.legendItems = i
                },
                afterBuildLabels: s,
                beforeFit: s,
                fit: function () {
                    var t = this,
                        e = t.options,
                        i = e.labels,
                        o = e.display,
                        r = t.ctx,
                        s = n.global,
                        d = a.valueOrDefault,
                        u = d(i.fontSize, s.defaultFontSize),
                        h = d(i.fontStyle, s.defaultFontStyle),
                        c = d(i.fontFamily, s.defaultFontFamily),
                        f = a.fontString(u, h, c),
                        p = t.legendHitBoxes = [],
                        g = t.minSize,
                        m = t.isHorizontal();
                    if (g.height = m ? (g.width = t.maxWidth, o ? 10 : 0) : (g.width = o ? 10 : 0, t.maxHeight), o)
                        if (r.font = f, m) {
                            var v = t.lineWidths = [0],
                                y = t.legendItems.length ? u + i.padding : 0;
                            r.textAlign = "left", r.textBaseline = "top", a.each(t.legendItems, function (e, n) {
                                var o = l(i, u) + u / 2 + r.measureText(e.text).width;
                                v[v.length - 1] + o + i.padding >= t.width && (y += u + i.padding, v[v.length] = t.left), p[n] = {
                                    left: 0,
                                    top: 0,
                                    width: o,
                                    height: u
                                }, v[v.length - 1] += o + i.padding
                            }), g.height += y
                        } else {
                            var b = i.padding,
                                x = t.columnWidths = [],
                                _ = i.padding,
                                w = 0,
                                S = 0,
                                k = u + b;
                            a.each(t.legendItems, function (t, e) {
                                var n = l(i, u) + u / 2 + r.measureText(t.text).width;
                                S + k > g.height && (_ += w + i.padding, x.push(w), S = w = 0), w = Math.max(w, n), S += k, p[e] = {
                                    left: 0,
                                    top: 0,
                                    width: n,
                                    height: u
                                }
                            }), _ += w, x.push(w), g.width += _
                        } t.width = g.width, t.height = g.height
                },
                afterFit: s,
                isHorizontal: function () {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                draw: function () {
                    var t = this,
                        e = t.options,
                        i = e.labels,
                        o = n.global,
                        r = o.elements.line,
                        s = t.width,
                        d = t.lineWidths;
                    if (e.display) {
                        var u, h = t.ctx,
                            c = a.valueOrDefault,
                            f = c(i.fontColor, o.defaultFontColor),
                            p = c(i.fontSize, o.defaultFontSize),
                            g = c(i.fontStyle, o.defaultFontStyle),
                            m = c(i.fontFamily, o.defaultFontFamily),
                            v = a.fontString(p, g, m);
                        h.textAlign = "left", h.textBaseline = "middle", h.lineWidth = .5, h.strokeStyle = f, h.fillStyle = f, h.font = v;
                        var y = l(i, p),
                            b = t.legendHitBoxes,
                            x = t.isHorizontal();
                        u = x ? {
                            x: t.left + (s - d[0]) / 2,
                            y: t.top + i.padding,
                            line: 0
                        } : {
                            x: t.left + i.padding,
                            y: t.top + i.padding,
                            line: 0
                        };
                        var _ = p + i.padding;
                        a.each(t.legendItems, function (n, l) {
                            var f, g, m, v, w, S = h.measureText(n.text).width,
                                k = y + p / 2 + S,
                                M = u.x,
                                C = u.y;
                            x ? s <= M + k && (C = u.y += _, u.line++, M = u.x = t.left + (s - d[u.line]) / 2) : C + _ > t.bottom && (M = u.x = M + t.columnWidths[u.line] + i.padding, C = u.y = t.top + i.padding, u.line++),
                                function (t, i, n) {
                                    if (!(isNaN(y) || y <= 0)) {
                                        h.save(), h.fillStyle = c(n.fillStyle, o.defaultColor), h.lineCap = c(n.lineCap, r.borderCapStyle), h.lineDashOffset = c(n.lineDashOffset, r.borderDashOffset), h.lineJoin = c(n.lineJoin, r.borderJoinStyle), h.lineWidth = c(n.lineWidth, r.borderWidth), h.strokeStyle = c(n.strokeStyle, o.defaultColor);
                                        var s = 0 === c(n.lineWidth, r.borderWidth);
                                        if (h.setLineDash && h.setLineDash(c(n.lineDash, r.borderDash)), e.labels && e.labels.usePointStyle) {
                                            var l = p * Math.SQRT2 / 2,
                                                d = l / Math.SQRT2,
                                                u = t + d,
                                                f = i + d;
                                            a.canvas.drawPoint(h, n.pointStyle, l, u, f)
                                        } else s || h.strokeRect(t, i, y, p), h.fillRect(t, i, y, p);
                                        h.restore()
                                    }
                                }(M, C, n), b[l].left = M, b[l].top = C, f = n, g = S, v = y + (m = p / 2) + M, w = C + m, h.fillText(f.text, v, w), f.hidden && (h.beginPath(), h.lineWidth = 2, h.moveTo(v, w), h.lineTo(v + g, w), h.stroke()), x ? u.x += k + i.padding : u.y += _
                        })
                    }
                },
                handleEvent: function (t) {
                    var e = this,
                        i = e.options,
                        n = "mouseup" === t.type ? "click" : t.type,
                        o = !1;
                    if ("mousemove" === n) {
                        if (!i.onHover) return
                    } else {
                        if ("click" !== n) return;
                        if (!i.onClick) return
                    }
                    var a = t.x,
                        r = t.y;
                    if (a >= e.left && a <= e.right && r >= e.top && r <= e.bottom)
                        for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                            var d = s[l];
                            if (a >= d.left && a <= d.left + d.width && r >= d.top && r <= d.top + d.height) {
                                if ("click" === n) {
                                    i.onClick.call(e, t.native, e.legendItems[l]), o = !0;
                                    break
                                }
                                if ("mousemove" === n) {
                                    i.onHover.call(e, t.native, e.legendItems[l]), o = !0;
                                    break
                                }
                            }
                        }
                    return o
                }
            });

            function u(t, e) {
                var i = new d({
                    ctx: t.ctx,
                    options: e,
                    chart: t
                });
                r.configure(t, i, e), r.addBox(t, i), t.legend = i
            }
            e.exports = {
                id: "legend",
                _element: d,
                beforeInit: function (t) {
                    var e = t.options.legend;
                    e && u(t, e)
                },
                beforeUpdate: function (t) {
                    var e = t.options.legend,
                        i = t.legend;
                    e ? (a.mergeIf(e, n.global.legend), i ? (r.configure(t, i, e), i.options = e) : u(t, e)) : i && (r.removeBox(t, i), delete t.legend)
                },
                afterEvent: function (t, e) {
                    var i = t.legend;
                    i && i.handleEvent(e)
                }
            }
        }, {
            26: 26,
            27: 27,
            31: 31,
            46: 46
        }],
        53: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(27),
                a = t(46),
                r = t(31),
                s = a.noop;
            n._set("global", {
                title: {
                    display: !1,
                    fontStyle: "bold",
                    fullWidth: !0,
                    lineHeight: 1.2,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                }
            });
            var l = o.extend({
                initialize: function (t) {
                    a.extend(this, t), this.legendHitBoxes = []
                },
                beforeUpdate: s,
                update: function (t, e, i) {
                    var n = this;
                    return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                },
                afterUpdate: s,
                beforeSetDimensions: s,
                setDimensions: function () {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: s,
                beforeBuildLabels: s,
                buildLabels: s,
                afterBuildLabels: s,
                beforeFit: s,
                fit: function () {
                    var t = a.valueOrDefault,
                        e = this.options,
                        i = e.display,
                        o = t(e.fontSize, n.global.defaultFontSize),
                        r = this.minSize,
                        s = a.isArray(e.text) ? e.text.length : 1,
                        l = a.options.toLineHeight(e.lineHeight, o),
                        d = i ? s * l + 2 * e.padding : 0;
                    this.isHorizontal() ? (r.width = this.maxWidth, r.height = d) : (r.width = d, r.height = this.maxHeight), this.width = r.width, this.height = r.height
                },
                afterFit: s,
                isHorizontal: function () {
                    var t = this.options.position;
                    return "top" === t || "bottom" === t
                },
                draw: function () {
                    var t = this.ctx,
                        e = a.valueOrDefault,
                        i = this.options,
                        o = n.global;
                    if (i.display) {
                        var r, s, l, d = e(i.fontSize, o.defaultFontSize),
                            u = e(i.fontStyle, o.defaultFontStyle),
                            h = e(i.fontFamily, o.defaultFontFamily),
                            c = a.fontString(d, u, h),
                            f = a.options.toLineHeight(i.lineHeight, d),
                            p = f / 2 + i.padding,
                            g = 0,
                            m = this.top,
                            v = this.left,
                            y = this.bottom,
                            b = this.right;
                        t.fillStyle = e(i.fontColor, o.defaultFontColor), t.font = c, this.isHorizontal() ? (s = v + (b - v) / 2, l = m + p, r = b - v) : (s = "left" === i.position ? v + p : b - p, l = m + (y - m) / 2, r = y - m, g = Math.PI * ("left" === i.position ? -.5 : .5)), t.save(), t.translate(s, l), t.rotate(g), t.textAlign = "center", t.textBaseline = "middle";
                        var x = i.text;
                        if (a.isArray(x))
                            for (var _ = 0, w = 0; w < x.length; ++w) t.fillText(x[w], 0, _, r), _ += f;
                        else t.fillText(x, 0, 0, r);
                        t.restore()
                    }
                }
            });

            function d(t, e) {
                var i = new l({
                    ctx: t.ctx,
                    options: e,
                    chart: t
                });
                r.configure(t, i, e), r.addBox(t, i), t.titleBlock = i
            }
            e.exports = {
                id: "title",
                _element: l,
                beforeInit: function (t) {
                    var e = t.options.title;
                    e && d(t, e)
                },
                beforeUpdate: function (t) {
                    var e = t.options.title,
                        i = t.titleBlock;
                    e ? (a.mergeIf(e, n.global.title), i ? (r.configure(t, i, e), i.options = e) : d(t, e)) : i && (r.removeBox(t, i), delete t.titleBlock)
                }
            }
        }, {
            26: 26,
            27: 27,
            31: 31,
            46: 46
        }],
        54: [function (t, e, i) {
            "use strict";
            var n = t(33),
                o = t(34);
            e.exports = function () {
                var t = n.extend({
                    getLabels: function () {
                        var t = this.chart.data;
                        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                    },
                    determineDataLimits: function () {
                        var t, e = this,
                            i = e.getLabels();
                        e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex]
                    },
                    buildTicks: function () {
                        var t = this.getLabels();
                        this.ticks = 0 === this.minIndex && this.maxIndex === t.length - 1 ? t : t.slice(this.minIndex, this.maxIndex + 1)
                    },
                    getLabelForIndex: function (t, e) {
                        var i = this.chart.data,
                            n = this.isHorizontal();
                        return i.yLabels && !n ? this.getRightValue(i.datasets[e].data[t]) : this.ticks[t - this.minIndex]
                    },
                    getPixelForValue: function (t, e) {
                        var i, n = this,
                            o = n.options.offset,
                            a = Math.max(n.maxIndex + 1 - n.minIndex - (o ? 0 : 1), 1);
                        if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
                            t = i || t;
                            var r = n.getLabels().indexOf(t);
                            e = -1 !== r ? r : e
                        }
                        if (n.isHorizontal()) {
                            var s = n.width / a,
                                l = s * (e - n.minIndex);
                            return o && (l += s / 2), n.left + Math.round(l)
                        }
                        var d = n.height / a,
                            u = d * (e - n.minIndex);
                        return o && (u += d / 2), n.top + Math.round(u)
                    },
                    getPixelForTick: function (t) {
                        return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
                    },
                    getValueForPixel: function (t) {
                        var e = this.options.offset,
                            i = Math.max(this._ticks.length - (e ? 0 : 1), 1),
                            n = this.isHorizontal(),
                            o = (n ? this.width : this.height) / i;
                        return t -= n ? this.left : this.top, e && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + this.minIndex
                    },
                    getBasePixel: function () {
                        return this.bottom
                    }
                });
                o.registerScaleType("category", t, {
                    position: "bottom"
                })
            }
        }, {
            33: 33,
            34: 34
        }],
        55: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(46),
                a = t(34),
                r = t(35);
            e.exports = function (t) {
                var e = {
                        position: "left",
                        ticks: {
                            callback: r.formatters.linear
                        }
                    },
                    i = t.LinearScaleBase.extend({
                        determineDataLimits: function () {
                            var t = this,
                                e = t.options,
                                i = t.chart,
                                n = i.data.datasets,
                                a = t.isHorizontal();

                            function r(e) {
                                return a ? e.xAxisID === t.id : e.yAxisID === t.id
                            }
                            t.min = null, t.max = null;
                            var s = e.stacked;
                            if (void 0 === s && o.each(n, function (t, e) {
                                    if (!s) {
                                        var n = i.getDatasetMeta(e);
                                        i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0)
                                    }
                                }), e.stacked || s) {
                                var l = {};
                                o.each(n, function (n, a) {
                                    var s = i.getDatasetMeta(a),
                                        d = [s.type, void 0 === e.stacked && void 0 === s.stack ? a : "", s.stack].join(".");
                                    void 0 === l[d] && (l[d] = {
                                        positiveValues: [],
                                        negativeValues: []
                                    });
                                    var u = l[d].positiveValues,
                                        h = l[d].negativeValues;
                                    i.isDatasetVisible(a) && r(s) && o.each(n.data, function (i, n) {
                                        var o = +t.getRightValue(i);
                                        isNaN(o) || s.data[n].hidden || (u[n] = u[n] || 0, h[n] = h[n] || 0, e.relativePoints ? u[n] = 100 : o < 0 ? h[n] += o : u[n] += o)
                                    })
                                }), o.each(l, function (e) {
                                    var i = e.positiveValues.concat(e.negativeValues),
                                        n = o.min(i),
                                        a = o.max(i);
                                    t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? a : Math.max(t.max, a)
                                })
                            } else o.each(n, function (e, n) {
                                var a = i.getDatasetMeta(n);
                                i.isDatasetVisible(n) && r(a) && o.each(e.data, function (e, i) {
                                    var n = +t.getRightValue(e);
                                    isNaN(n) || a.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n))
                                })
                            });
                            t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions()
                        },
                        getTickLimit: function () {
                            var t, e = this.options.ticks;
                            if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));
                            else {
                                var i = o.valueOrDefault(e.fontSize, n.global.defaultFontSize);
                                t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * i)))
                            }
                            return t
                        },
                        handleDirectionalChanges: function () {
                            this.isHorizontal() || this.ticks.reverse()
                        },
                        getLabelForIndex: function (t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForValue: function (t) {
                            var e = this.start,
                                i = +this.getRightValue(t),
                                n = this.end - e;
                            return this.isHorizontal() ? this.left + this.width / n * (i - e) : this.bottom - this.height / n * (i - e)
                        },
                        getValueForPixel: function (t) {
                            var e = this.isHorizontal(),
                                i = e ? this.width : this.height,
                                n = (e ? t - this.left : this.bottom - t) / i;
                            return this.start + (this.end - this.start) * n
                        },
                        getPixelForTick: function (t) {
                            return this.getPixelForValue(this.ticksAsNumbers[t])
                        }
                    });
                a.registerScaleType("linear", i, e)
            }
        }, {
            26: 26,
            34: 34,
            35: 35,
            46: 46
        }],
        56: [function (t, e, i) {
            "use strict";
            var n = t(46),
                o = t(33);
            e.exports = function (t) {
                var e = n.noop;
                t.LinearScaleBase = o.extend({
                    getRightValue: function (t) {
                        return "string" == typeof t ? +t : o.prototype.getRightValue.call(this, t)
                    },
                    handleTickRangeOptions: function () {
                        var t = this,
                            e = t.options.ticks;
                        if (e.beginAtZero) {
                            var i = n.sign(t.min),
                                o = n.sign(t.max);
                            i < 0 && o < 0 ? t.max = 0 : 0 < i && 0 < o && (t.min = 0)
                        }
                        var a = void 0 !== e.min || void 0 !== e.suggestedMin,
                            r = void 0 !== e.max || void 0 !== e.suggestedMax;
                        void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a !== r && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                    },
                    getTickLimit: e,
                    handleDirectionalChanges: e,
                    buildTicks: function () {
                        var t = this,
                            e = t.options.ticks,
                            i = t.getTickLimit(),
                            o = {
                                maxTicks: i = Math.max(2, i),
                                min: e.min,
                                max: e.max,
                                precision: e.precision,
                                stepSize: n.valueOrDefault(e.fixedStepSize, e.stepSize)
                            },
                            a = t.ticks = function (t, e) {
                                var i, o, a, r = [];
                                if (t.stepSize && 0 < t.stepSize) a = t.stepSize;
                                else {
                                    var s = n.niceNum(e.max - e.min, !1);
                                    a = n.niceNum(s / (t.maxTicks - 1), !0), void 0 !== (o = t.precision) && (i = Math.pow(10, o), a = Math.ceil(a * i) / i)
                                }
                                var l = Math.floor(e.min / a) * a,
                                    d = Math.ceil(e.max / a) * a;
                                n.isNullOrUndef(t.min) || n.isNullOrUndef(t.max) || !t.stepSize || n.almostWhole((t.max - t.min) / t.stepSize, a / 1e3) && (l = t.min, d = t.max);
                                var u = (d - l) / a;
                                u = n.almostEquals(u, Math.round(u), a / 1e3) ? Math.round(u) : Math.ceil(u), a < (o = 1) && (o = Math.pow(10, 1 - Math.floor(n.log10(a))), l = Math.round(l * o) / o, d = Math.round(d * o) / o), r.push(void 0 !== t.min ? t.min : l);
                                for (var h = 1; h < u; ++h) r.push(Math.round((l + h * a) * o) / o);
                                return r.push(void 0 !== t.max ? t.max : d), r
                            }(o, t);
                        t.handleDirectionalChanges(), t.max = n.max(a), t.min = n.min(a), e.reverse ? (a.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                    },
                    convertTicksToLabels: function () {
                        this.ticksAsNumbers = this.ticks.slice(), this.zeroLineIndex = this.ticks.indexOf(0), o.prototype.convertTicksToLabels.call(this)
                    }
                })
            }
        }, {
            33: 33,
            46: 46
        }],
        57: [function (t, e, i) {
            "use strict";
            var n = t(46),
                o = t(33),
                a = t(34),
                r = t(35);
            e.exports = function (t) {
                var e = {
                        position: "left",
                        ticks: {
                            callback: r.formatters.logarithmic
                        }
                    },
                    i = o.extend({
                        determineDataLimits: function () {
                            var t = this,
                                e = t.options,
                                i = t.chart,
                                o = i.data.datasets,
                                a = t.isHorizontal();

                            function r(e) {
                                return a ? e.xAxisID === t.id : e.yAxisID === t.id
                            }
                            t.min = null, t.max = null, t.minNotZero = null;
                            var s = e.stacked;
                            if (void 0 === s && n.each(o, function (t, e) {
                                    if (!s) {
                                        var n = i.getDatasetMeta(e);
                                        i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0)
                                    }
                                }), e.stacked || s) {
                                var l = {};
                                n.each(o, function (o, a) {
                                    var s = i.getDatasetMeta(a),
                                        d = [s.type, void 0 === e.stacked && void 0 === s.stack ? a : "", s.stack].join(".");
                                    i.isDatasetVisible(a) && r(s) && (void 0 === l[d] && (l[d] = []), n.each(o.data, function (e, i) {
                                        var n = l[d],
                                            o = +t.getRightValue(e);
                                        isNaN(o) || s.data[i].hidden || o < 0 || (n[i] = n[i] || 0, n[i] += o)
                                    }))
                                }), n.each(l, function (e) {
                                    if (0 < e.length) {
                                        var i = n.min(e),
                                            o = n.max(e);
                                        t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? o : Math.max(t.max, o)
                                    }
                                })
                            } else n.each(o, function (e, o) {
                                var a = i.getDatasetMeta(o);
                                i.isDatasetVisible(o) && r(a) && n.each(e.data, function (e, i) {
                                    var n = +t.getRightValue(e);
                                    isNaN(n) || a.data[i].hidden || n < 0 || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n))
                                })
                            });
                            this.handleTickRangeOptions()
                        },
                        handleTickRangeOptions: function () {
                            var t = this,
                                e = t.options.ticks,
                                i = n.valueOrDefault;
                            t.min = i(e.min, t.min), t.max = i(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(n.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(n.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(n.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(n.log10(t.min)) + 1) : 10), null === t.minNotZero && (0 < t.min ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(n.log10(t.max))) : t.minNotZero = 1)
                        },
                        buildTicks: function () {
                            var t = this,
                                e = t.options.ticks,
                                i = !t.isHorizontal(),
                                o = {
                                    min: e.min,
                                    max: e.max
                                },
                                a = t.ticks = function (t, e) {
                                    var i, o, a = [],
                                        r = n.valueOrDefault,
                                        s = r(t.min, Math.pow(10, Math.floor(n.log10(e.min)))),
                                        l = Math.floor(n.log10(e.max)),
                                        d = Math.ceil(e.max / Math.pow(10, l));
                                    0 === s ? (i = Math.floor(n.log10(e.minNotZero)), o = Math.floor(e.minNotZero / Math.pow(10, i)), a.push(s), s = o * Math.pow(10, i)) : (i = Math.floor(n.log10(s)), o = Math.floor(s / Math.pow(10, i)));
                                    for (var u = i < 0 ? Math.pow(10, Math.abs(i)) : 1; a.push(s), 10 == ++o && (o = 1, u = 0 <= ++i ? 1 : u), s = Math.round(o * Math.pow(10, i) * u) / u, i < l || i === l && o < d;);
                                    var h = r(t.max, s);
                                    return a.push(h), a
                                }(o, t);
                            t.max = n.max(a), t.min = n.min(a), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && a.reverse()
                        },
                        convertTicksToLabels: function () {
                            this.tickValues = this.ticks.slice(), o.prototype.convertTicksToLabels.call(this)
                        },
                        getLabelForIndex: function (t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForTick: function (t) {
                            return this.getPixelForValue(this.tickValues[t])
                        },
                        _getFirstTickValue: function (t) {
                            var e = Math.floor(n.log10(t));
                            return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                        },
                        getPixelForValue: function (e) {
                            var i, o, a, r, s, l = this,
                                d = l.options.ticks.reverse,
                                u = n.log10,
                                h = l._getFirstTickValue(l.minNotZero),
                                c = 0;
                            return e = +l.getRightValue(e), s = d ? (a = l.end, r = l.start, -1) : (a = l.start, r = l.end, 1), o = l.isHorizontal() ? (i = l.width, d ? l.right : l.left) : (i = l.height, s *= -1, d ? l.top : l.bottom), e !== a && (0 === a && (i -= c = n.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), a = h), 0 !== e && (c += i / (u(r) - u(a)) * (u(e) - u(a))), o += s * c), o
                        },
                        getValueForPixel: function (e) {
                            var i, o, a, r, s = this,
                                l = s.options.ticks.reverse,
                                d = n.log10,
                                u = s._getFirstTickValue(s.minNotZero);
                            if (a = l ? (o = s.end, s.start) : (o = s.start, s.end), (r = s.isHorizontal() ? (i = s.width, l ? s.right - e : e - s.left) : (i = s.height, l ? e - s.top : s.bottom - e)) !== o) {
                                if (0 === o) {
                                    var h = n.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                                    r -= h, i -= h, o = u
                                }
                                r *= d(a) - d(o), r /= i, r = Math.pow(10, d(o) + r)
                            }
                            return r
                        }
                    });
                a.registerScaleType("logarithmic", i, e)
            }
        }, {
            33: 33,
            34: 34,
            35: 35,
            46: 46
        }],
        58: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(46),
                a = t(34),
                r = t(35);
            e.exports = function (t) {
                var e = n.global,
                    i = {
                        display: !0,
                        animate: !0,
                        position: "chartArea",
                        angleLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1
                        },
                        gridLines: {
                            circular: !1
                        },
                        ticks: {
                            showLabelBackdrop: !0,
                            backdropColor: "rgba(255,255,255,0.75)",
                            backdropPaddingY: 2,
                            backdropPaddingX: 2,
                            callback: r.formatters.linear
                        },
                        pointLabels: {
                            display: !0,
                            fontSize: 10,
                            callback: function (t) {
                                return t
                            }
                        }
                    };

                function s(t) {
                    var e = t.options;
                    return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
                }

                function l(t) {
                    var i = t.options.pointLabels,
                        n = o.valueOrDefault(i.fontSize, e.defaultFontSize),
                        a = o.valueOrDefault(i.fontStyle, e.defaultFontStyle),
                        r = o.valueOrDefault(i.fontFamily, e.defaultFontFamily);
                    return {
                        size: n,
                        style: a,
                        family: r,
                        font: o.fontString(n, a, r)
                    }
                }

                function d(t, e, i, n, o) {
                    return t === n || t === o ? {
                        start: e - i / 2,
                        end: e + i / 2
                    } : t < n || o < t ? {
                        start: e - i - 5,
                        end: e
                    } : {
                        start: e,
                        end: e + i + 5
                    }
                }

                function u(t, e, i, n) {
                    if (o.isArray(e))
                        for (var a = i.y, r = 1.5 * n, s = 0; s < e.length; ++s) t.fillText(e[s], i.x, a), a += r;
                    else t.fillText(e, i.x, i.y)
                }

                function h(t) {
                    return o.isNumber(t) ? t : 0
                }
                var c = t.LinearScaleBase.extend({
                    setDimensions: function () {
                        var t = this,
                            i = t.options,
                            n = i.ticks;
                        t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                        var a = o.min([t.height, t.width]),
                            r = o.valueOrDefault(n.fontSize, e.defaultFontSize);
                        t.drawingArea = i.display ? a / 2 - (r / 2 + n.backdropPaddingY) : a / 2
                    },
                    determineDataLimits: function () {
                        var t = this,
                            e = t.chart,
                            i = Number.POSITIVE_INFINITY,
                            n = Number.NEGATIVE_INFINITY;
                        o.each(e.data.datasets, function (a, r) {
                            if (e.isDatasetVisible(r)) {
                                var s = e.getDatasetMeta(r);
                                o.each(a.data, function (e, o) {
                                    var a = +t.getRightValue(e);
                                    isNaN(a) || s.data[o].hidden || (i = Math.min(a, i), n = Math.max(a, n))
                                })
                            }
                        }), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions()
                    },
                    getTickLimit: function () {
                        var t = this.options.ticks,
                            i = o.valueOrDefault(t.fontSize, e.defaultFontSize);
                        return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)))
                    },
                    convertTicksToLabels: function () {
                        t.LinearScaleBase.prototype.convertTicksToLabels.call(this), this.pointLabels = this.chart.data.labels.map(this.options.pointLabels.callback, this)
                    },
                    getLabelForIndex: function (t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    fit: function () {
                        var t, e;
                        this.options.pointLabels.display ? function (t) {
                            var e, i, n, a = l(t),
                                r = Math.min(t.height / 2, t.width / 2),
                                u = {
                                    r: t.width,
                                    l: 0,
                                    t: t.height,
                                    b: 0
                                },
                                h = {};
                            t.ctx.font = a.font, t._pointLabelSizes = [];
                            var c, f, p, g = s(t);
                            for (e = 0; e < g; e++) {
                                n = t.getPointPosition(e, r), c = t.ctx, f = a.size, p = t.pointLabels[e] || "", i = o.isArray(p) ? {
                                    w: o.longestText(c, c.font, p),
                                    h: p.length * f + 1.5 * (p.length - 1) * f
                                } : {
                                    w: c.measureText(p).width,
                                    h: f
                                }, t._pointLabelSizes[e] = i;
                                var m = t.getIndexAngle(e),
                                    v = o.toDegrees(m) % 360,
                                    y = d(v, n.x, i.w, 0, 180),
                                    b = d(v, n.y, i.h, 90, 270);
                                y.start < u.l && (u.l = y.start, h.l = m), y.end > u.r && (u.r = y.end, h.r = m), b.start < u.t && (u.t = b.start, h.t = m), b.end > u.b && (u.b = b.end, h.b = m)
                            }
                            t.setReductions(r, u, h)
                        }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0))
                    },
                    setReductions: function (t, e, i) {
                        var n = e.l / Math.sin(i.l),
                            o = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                            a = -e.t / Math.cos(i.t),
                            r = -Math.max(e.b - this.height, 0) / Math.cos(i.b);
                        n = h(n), o = h(o), a = h(a), r = h(r), this.drawingArea = Math.min(Math.round(t - (n + o) / 2), Math.round(t - (a + r) / 2)), this.setCenterPoint(n, o, a, r)
                    },
                    setCenterPoint: function (t, e, i, n) {
                        var o = this,
                            a = o.width - e - o.drawingArea,
                            r = t + o.drawingArea,
                            s = i + o.drawingArea,
                            l = o.height - n - o.drawingArea;
                        o.xCenter = Math.round((r + a) / 2 + o.left), o.yCenter = Math.round((s + l) / 2 + o.top)
                    },
                    getIndexAngle: function (t) {
                        return t * (2 * Math.PI / s(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                    },
                    getDistanceFromCenterForValue: function (t) {
                        if (null === t) return 0;
                        var e = this.drawingArea / (this.max - this.min);
                        return this.options.ticks.reverse ? (this.max - t) * e : (t - this.min) * e
                    },
                    getPointPosition: function (t, e) {
                        var i = this.getIndexAngle(t) - Math.PI / 2;
                        return {
                            x: Math.round(Math.cos(i) * e) + this.xCenter,
                            y: Math.round(Math.sin(i) * e) + this.yCenter
                        }
                    },
                    getPointPositionForValue: function (t, e) {
                        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                    },
                    getBasePosition: function () {
                        var t = this.min,
                            e = this.max;
                        return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0)
                    },
                    draw: function () {
                        var t = this,
                            i = t.options,
                            n = i.gridLines,
                            a = i.ticks,
                            r = o.valueOrDefault;
                        if (i.display) {
                            var d = t.ctx,
                                h = this.getIndexAngle(0),
                                c = r(a.fontSize, e.defaultFontSize),
                                f = r(a.fontStyle, e.defaultFontStyle),
                                p = r(a.fontFamily, e.defaultFontFamily),
                                g = o.fontString(c, f, p);
                            o.each(t.ticks, function (i, l) {
                                if (0 < l || a.reverse) {
                                    var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]);
                                    if (n.display && 0 !== l && function (t, e, i, n) {
                                            var a = t.ctx;
                                            if (a.strokeStyle = o.valueAtIndexOrDefault(e.color, n - 1), a.lineWidth = o.valueAtIndexOrDefault(e.lineWidth, n - 1), t.options.gridLines.circular) a.beginPath(), a.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), a.closePath(), a.stroke();
                                            else {
                                                var r = s(t);
                                                if (0 === r) return;
                                                a.beginPath();
                                                var l = t.getPointPosition(0, i);
                                                a.moveTo(l.x, l.y);
                                                for (var d = 1; d < r; d++) l = t.getPointPosition(d, i), a.lineTo(l.x, l.y);
                                                a.closePath(), a.stroke()
                                            }
                                        }(t, n, u, l), a.display) {
                                        var f = r(a.fontColor, e.defaultFontColor);
                                        if (d.font = g, d.save(), d.translate(t.xCenter, t.yCenter), d.rotate(h), a.showLabelBackdrop) {
                                            var p = d.measureText(i).width;
                                            d.fillStyle = a.backdropColor, d.fillRect(-p / 2 - a.backdropPaddingX, -u - c / 2 - a.backdropPaddingY, p + 2 * a.backdropPaddingX, c + 2 * a.backdropPaddingY)
                                        }
                                        d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = f, d.fillText(i, 0, -u), d.restore()
                                    }
                                }
                            }), (i.angleLines.display || i.pointLabels.display) && function (t) {
                                var i = t.ctx,
                                    n = t.options,
                                    a = n.angleLines,
                                    r = n.pointLabels;
                                i.lineWidth = a.lineWidth, i.strokeStyle = a.color;
                                var d, h, c, f, p = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                                    g = l(t);
                                i.textBaseline = "top";
                                for (var m = s(t) - 1; 0 <= m; m--) {
                                    if (a.display) {
                                        var v = t.getPointPosition(m, p);
                                        i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(v.x, v.y), i.stroke(), i.closePath()
                                    }
                                    if (r.display) {
                                        var y = t.getPointPosition(m, p + 5),
                                            b = o.valueAtIndexOrDefault(r.fontColor, m, e.defaultFontColor);
                                        i.font = g.font, i.fillStyle = b;
                                        var x = t.getIndexAngle(m),
                                            _ = o.toDegrees(x);
                                        i.textAlign = 0 === (f = _) || 180 === f ? "center" : f < 180 ? "left" : "right", d = _, h = t._pointLabelSizes[m], c = y, 90 === d || 270 === d ? c.y -= h.h / 2 : (270 < d || d < 90) && (c.y -= h.h), u(i, t.pointLabels[m] || "", y, g.size)
                                    }
                                }
                            }(t)
                        }
                    }
                });
                a.registerScaleType("radialLinear", c, i)
            }
        }, {
            26: 26,
            34: 34,
            35: 35,
            46: 46
        }],
        59: [function (t, e, i) {
            "use strict";
            var n = t(6);
            n = "function" == typeof n ? n : window.moment;
            var o = t(26),
                a = t(46),
                r = t(33),
                s = t(34),
                l = Number.MIN_SAFE_INTEGER || -9007199254740991,
                d = Number.MAX_SAFE_INTEGER || 9007199254740991,
                u = {
                    millisecond: {
                        common: !0,
                        size: 1,
                        steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                    },
                    second: {
                        common: !0,
                        size: 1e3,
                        steps: [1, 2, 5, 10, 15, 30]
                    },
                    minute: {
                        common: !0,
                        size: 6e4,
                        steps: [1, 2, 5, 10, 15, 30]
                    },
                    hour: {
                        common: !0,
                        size: 36e5,
                        steps: [1, 2, 3, 6, 12]
                    },
                    day: {
                        common: !0,
                        size: 864e5,
                        steps: [1, 2, 5]
                    },
                    week: {
                        common: !1,
                        size: 6048e5,
                        steps: [1, 2, 3, 4]
                    },
                    month: {
                        common: !0,
                        size: 2628e6,
                        steps: [1, 2, 3]
                    },
                    quarter: {
                        common: !1,
                        size: 7884e6,
                        steps: [1, 2, 3, 4]
                    },
                    year: {
                        common: !0,
                        size: 3154e7
                    }
                },
                h = Object.keys(u);

            function c(t, e) {
                return t - e
            }

            function f(t) {
                var e, i, n, o = {},
                    a = [];
                for (e = 0, i = t.length; e < i; ++e) o[n = t[e]] || (o[n] = !0, a.push(n));
                return a
            }

            function p(t, e, i, n) {
                var o = function (t, e, i) {
                        for (var n, o, a, r = 0, s = t.length - 1; 0 <= r && r <= s;) {
                            if (o = t[(n = r + s >> 1) - 1] || null, a = t[n], !o) return {
                                lo: null,
                                hi: a
                            };
                            if (a[e] < i) r = n + 1;
                            else {
                                if (!(o[e] > i)) return {
                                    lo: o,
                                    hi: a
                                };
                                s = n - 1
                            }
                        }
                        return {
                            lo: a,
                            hi: null
                        }
                    }(t, e, i),
                    a = o.lo ? o.hi ? o.lo : t[t.length - 2] : t[0],
                    r = o.lo ? o.hi ? o.hi : t[t.length - 1] : t[1],
                    s = r[e] - a[e],
                    l = s ? (i - a[e]) / s : 0,
                    d = (r[n] - a[n]) * l;
                return a[n] + d
            }

            function g(t, e) {
                var i = e.parser,
                    o = e.parser || e.format;
                return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof o ? n(t, o) : (t instanceof n || (t = n(t)), t.isValid() ? t : "function" == typeof o ? o(t) : t)
            }

            function m(t, e) {
                if (a.isNullOrUndef(t)) return null;
                var i = e.options.time,
                    n = g(e.getRightValue(t), i);
                return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null
            }

            function v(t) {
                for (var e = h.indexOf(t) + 1, i = h.length; e < i; ++e)
                    if (u[h[e]].common) return h[e]
            }

            function y(t, e, i, o) {
                var r, s = o.time,
                    l = s.unit || function (t, e, i, n) {
                        var o, a, r, s = h.length;
                        for (o = h.indexOf(t); o < s - 1; ++o)
                            if (r = (a = u[h[o]]).steps ? a.steps[a.steps.length - 1] : d, a.common && Math.ceil((i - e) / (r * a.size)) <= n) return h[o];
                        return h[s - 1]
                    }(s.minUnit, t, e, i),
                    c = v(l),
                    f = a.valueOrDefault(s.stepSize, s.unitStepSize),
                    p = "week" === l && s.isoWeekday,
                    g = o.ticks.major.enabled,
                    m = u[l],
                    y = n(t),
                    b = n(e),
                    x = [];
                for (f || (f = function (t, e, i, n) {
                        var o, a, r, s = e - t,
                            l = u[i],
                            d = l.size,
                            h = l.steps;
                        if (!h) return Math.ceil(s / (n * d));
                        for (o = 0, a = h.length; o < a && (r = h[o], !(Math.ceil(s / (d * r)) <= n)); ++o);
                        return r
                    }(t, e, l, i)), p && (y = y.isoWeekday(p), b = b.isoWeekday(p)), y = y.startOf(p ? "day" : l), (b = b.startOf(p ? "day" : l)) < e && b.add(1, l), r = n(y), g && c && !p && !s.round && (r.startOf(c), r.add(~~((y - r) / (m.size * f)) * f, l)); r < b; r.add(f, l)) x.push(+r);
                return x.push(+r), x
            }
            e.exports = function () {
                var t = r.extend({
                    initialize: function () {
                        if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        this.mergeTicksOptions(), r.prototype.initialize.call(this)
                    },
                    update: function () {
                        var t = this.options;
                        return t.time && t.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), r.prototype.update.apply(this, arguments)
                    },
                    getRightValue: function (t) {
                        return t && void 0 !== t.t && (t = t.t), r.prototype.getRightValue.call(this, t)
                    },
                    determineDataLimits: function () {
                        var t, e, i, o, r, s, u = this,
                            h = u.chart,
                            p = u.options.time,
                            g = p.unit || "day",
                            v = d,
                            y = l,
                            b = [],
                            x = [],
                            _ = [];
                        for (t = 0, i = h.data.labels.length; t < i; ++t) _.push(m(h.data.labels[t], u));
                        for (t = 0, i = (h.data.datasets || []).length; t < i; ++t)
                            if (h.isDatasetVisible(t))
                                if (r = h.data.datasets[t].data, a.isObject(r[0]))
                                    for (x[t] = [], e = 0, o = r.length; e < o; ++e) s = m(r[e], u), b.push(s), x[t][e] = s;
                                else b.push.apply(b, _), x[t] = _.slice(0);
                        else x[t] = [];
                        _.length && (_ = f(_).sort(c), v = Math.min(v, _[0]), y = Math.max(y, _[_.length - 1])), b.length && (b = f(b).sort(c), v = Math.min(v, b[0]), y = Math.max(y, b[b.length - 1])), v = m(p.min, u) || v, y = m(p.max, u) || y, v = v === d ? +n().startOf(g) : v, y = y === l ? +n().endOf(g) + 1 : y, u.min = Math.min(v, y), u.max = Math.max(v + 1, y), u._horizontal = u.isHorizontal(), u._table = [], u._timestamps = {
                            data: b,
                            datasets: x,
                            labels: _
                        }
                    },
                    buildTicks: function () {
                        var t, e, i, o, a, r, s, l, d, c, f, b, x = this,
                            _ = x.min,
                            w = x.max,
                            S = x.options,
                            k = S.time,
                            M = [],
                            C = [];
                        switch (S.ticks.source) {
                            case "data":
                                M = x._timestamps.data;
                                break;
                            case "labels":
                                M = x._timestamps.labels;
                                break;
                            case "auto":
                            default:
                                M = y(_, w, x.getLabelCapacity(_), S)
                        }
                        for ("ticks" === S.bounds && M.length && (_ = M[0], w = M[M.length - 1]), _ = m(k.min, x) || _, w = m(k.max, x) || w, t = 0, e = M.length; t < e; ++t) _ <= (i = M[t]) && i <= w && C.push(i);
                        return x.min = _, x.max = w, x._unit = k.unit || function (t, e, i, o) {
                                var a, r, s = n.duration(n(o).diff(n(i)));
                                for (a = h.length - 1; a >= h.indexOf(e); a--)
                                    if (r = h[a], u[r].common && s.as(r) >= t.length) return r;
                                return h[e ? h.indexOf(e) : 0]
                            }(C, k.minUnit, x.min, x.max), x._majorUnit = v(x._unit), x._table = function (t, e, i, n) {
                                if ("linear" === S.distribution || !t.length) return [{
                                    time: e,
                                    pos: 0
                                }, {
                                    time: i,
                                    pos: 1
                                }];
                                var o, a, r, s, l, d = [],
                                    u = [e];
                                for (o = 0, a = t.length; o < a; ++o) e < (s = t[o]) && s < i && u.push(s);
                                for (u.push(i), o = 0, a = u.length; o < a; ++o) l = u[o + 1], r = u[o - 1], s = u[o], void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s || d.push({
                                    time: s,
                                    pos: o / (a - 1)
                                });
                                return d
                            }(x._timestamps.data, _, w), x._offsets = (o = x._table, a = C, r = _, s = w, b = f = 0, (l = S).offset && a.length && (l.time.min || (d = 1 < a.length ? a[1] : s, c = a[0], f = (p(o, "time", d, "pos") - p(o, "time", c, "pos")) / 2), l.time.max || (d = a[a.length - 1], c = 1 < a.length ? a[a.length - 2] : r, b = (p(o, "time", d, "pos") - p(o, "time", c, "pos")) / 2)), {
                                left: f,
                                right: b
                            }), x._labelFormat = function (t, e) {
                                var i, n, o, a = t.length;
                                for (i = 0; i < a; i++) {
                                    if (0 !== (n = g(t[i], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                                    0 === n.second() && 0 === n.minute() && 0 === n.hour() || (o = !0)
                                }
                                return o ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
                            }(x._timestamps.data, k),
                            function (t, e) {
                                var i, o, a, r, s = [];
                                for (i = 0, o = t.length; i < o; ++i) a = t[i], r = !!e && a === +n(a).startOf(e), s.push({
                                    value: a,
                                    major: r
                                });
                                return s
                            }(C, x._majorUnit)
                    },
                    getLabelForIndex: function (t, e) {
                        var i = this.chart.data,
                            n = this.options.time,
                            o = i.labels && t < i.labels.length ? i.labels[t] : "",
                            r = i.datasets[e].data[t];
                        return a.isObject(r) && (o = this.getRightValue(r)), n.tooltipFormat ? g(o, n).format(n.tooltipFormat) : "string" == typeof o ? o : g(o, n).format(this._labelFormat)
                    },
                    tickFormatFunction: function (t, e, i, n) {
                        var o = this.options,
                            r = t.valueOf(),
                            s = o.time.displayFormats,
                            l = s[this._unit],
                            d = this._majorUnit,
                            u = s[d],
                            h = t.clone().startOf(d).valueOf(),
                            c = o.ticks.major,
                            f = c.enabled && d && u && r === h,
                            p = t.format(n || (f ? u : l)),
                            g = f ? c : o.ticks.minor,
                            m = a.valueOrDefault(g.callback, g.userCallback);
                        return m ? m(p, e, i) : p
                    },
                    convertTicksToLabels: function (t) {
                        var e, i, o = [];
                        for (e = 0, i = t.length; e < i; ++e) o.push(this.tickFormatFunction(n(t[e].value), e, t));
                        return o
                    },
                    getPixelForOffset: function (t) {
                        var e = this,
                            i = e._horizontal ? e.width : e.height,
                            n = e._horizontal ? e.left : e.top,
                            o = p(e._table, "time", t, "pos");
                        return n + i * (e._offsets.left + o) / (e._offsets.left + 1 + e._offsets.right)
                    },
                    getPixelForValue: function (t, e, i) {
                        var n = null;
                        if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = m(t, this)), null !== n) return this.getPixelForOffset(n)
                    },
                    getPixelForTick: function (t) {
                        var e = this.getTicks();
                        return 0 <= t && t < e.length ? this.getPixelForOffset(e[t].value) : null
                    },
                    getValueForPixel: function (t) {
                        var e = this,
                            i = e._horizontal ? e.width : e.height,
                            o = e._horizontal ? e.left : e.top,
                            a = (i ? (t - o) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                            r = p(e._table, "pos", a, "time");
                        return n(r)
                    },
                    getLabelWidth: function (t) {
                        var e = this.options.ticks,
                            i = this.ctx.measureText(t).width,
                            n = a.toRadians(e.maxRotation),
                            r = Math.cos(n),
                            s = Math.sin(n);
                        return i * r + a.valueOrDefault(e.fontSize, o.global.defaultFontSize) * s
                    },
                    getLabelCapacity: function (t) {
                        var e = this.options.time.displayFormats.millisecond,
                            i = this.tickFormatFunction(n(t), 0, [], e),
                            o = this.getLabelWidth(i),
                            a = this.isHorizontal() ? this.width : this.height,
                            r = Math.floor(a / o);
                        return 0 < r ? r : 1
                    }
                });
                s.registerScaleType("time", t, {
                    position: "bottom",
                    distribution: "linear",
                    bounds: "data",
                    time: {
                        parser: !1,
                        format: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {
                            millisecond: "h:mm:ss.SSS a",
                            second: "h:mm:ss a",
                            minute: "h:mm a",
                            hour: "hA",
                            day: "MMM D",
                            week: "ll",
                            month: "MMM YYYY",
                            quarter: "[Q]Q - YYYY",
                            year: "YYYY"
                        }
                    },
                    ticks: {
                        autoSkip: !1,
                        source: "auto",
                        major: {
                            enabled: !1
                        }
                    }
                })
            }
        }, {
            26: 26,
            33: 33,
            34: 34,
            46: 46,
            6: 6
        }]
    }, {}, [7])(7)
}),
function (t) {
    t(["jquery"], function (t) {
        return function () {
            var e, i, n, o = 0,
                a = {
                    error: "error",
                    info: "info",
                    success: "success",
                    warning: "warning"
                },
                r = {
                    clear: function (i, n) {
                        var o = h();
                        e || s(o);
                        l(i, o, n) || function (i) {
                            for (var n = e.children(), o = n.length - 1; o >= 0; o--) l(t(n[o]), i)
                        }(o)
                    },
                    remove: function (i) {
                        var n = h();
                        e || s(n);
                        if (i && 0 === t(":focus", i).length) return void c(i);
                        e.children().length && e.remove()
                    },
                    error: function (t, e, i) {
                        return u({
                            type: a.error,
                            iconClass: h().iconClasses.error,
                            message: t,
                            optionsOverride: i,
                            title: e
                        })
                    },
                    getContainer: s,
                    info: function (t, e, i) {
                        return u({
                            type: a.info,
                            iconClass: h().iconClasses.info,
                            message: t,
                            optionsOverride: i,
                            title: e
                        })
                    },
                    options: {},
                    subscribe: function (t) {
                        i = t
                    },
                    success: function (t, e, i) {
                        return u({
                            type: a.success,
                            iconClass: h().iconClasses.success,
                            message: t,
                            optionsOverride: i,
                            title: e
                        })
                    },
                    version: "2.1.4",
                    warning: function (t, e, i) {
                        return u({
                            type: a.warning,
                            iconClass: h().iconClasses.warning,
                            message: t,
                            optionsOverride: i,
                            title: e
                        })
                    }
                };
            return r;

            function s(i, n) {
                return i || (i = h()), (e = t("#" + i.containerId)).length ? e : (n && (e = function (i) {
                    return (e = t("<div/>").attr("id", i.containerId).addClass(i.positionClass)).appendTo(t(i.target)), e
                }(i)), e)
            }

            function l(e, i, n) {
                var o = !(!n || !n.force) && n.force;
                return !(!e || !o && 0 !== t(":focus", e).length) && (e[i.hideMethod]({
                    duration: i.hideDuration,
                    easing: i.hideEasing,
                    complete: function () {
                        c(e)
                    }
                }), !0)
            }

            function d(t) {
                i && i(t)
            }

            function u(i) {
                var a = h(),
                    r = i.iconClass || a.iconClass;
                if (void 0 !== i.optionsOverride && (a = t.extend(a, i.optionsOverride), r = i.optionsOverride.iconClass || r), ! function (t, e) {
                        if (t.preventDuplicates) {
                            if (e.message === n) return !0;
                            n = e.message
                        }
                        return !1
                    }(a, i)) {
                    o++, e = s(a, !0);
                    var l = null,
                        u = t("<div/>"),
                        f = t("<div/>"),
                        p = t("<div/>"),
                        g = t("<div/>"),
                        m = t(a.closeHtml),
                        v = {
                            intervalId: null,
                            hideEta: null,
                            maxHideTime: null
                        },
                        y = {
                            toastId: o,
                            state: "visible",
                            startTime: new Date,
                            options: a,
                            map: i
                        };
                    return i.iconClass && u.addClass(a.toastClass).addClass(r),
                        function () {
                            if (i.title) {
                                var t = i.title;
                                a.escapeHtml && (t = b(i.title)), f.append(t).addClass(a.titleClass), u.append(f)
                            }
                        }(),
                        function () {
                            if (i.message) {
                                var t = i.message;
                                a.escapeHtml && (t = b(i.message)), p.append(t).addClass(a.messageClass), u.append(p)
                            }
                        }(), a.closeButton && (m.addClass(a.closeClass).attr("role", "button"), u.prepend(m)), a.progressBar && (g.addClass(a.progressClass), u.prepend(g)), a.rtl && u.addClass("rtl"), a.newestOnTop ? e.prepend(u) : e.append(u),
                        function () {
                            var t = "";
                            switch (i.iconClass) {
                                case "toast-success":
                                case "toast-info":
                                    t = "polite";
                                    break;
                                default:
                                    t = "assertive"
                            }
                            u.attr("aria-live", t)
                        }(), u.hide(), u[a.showMethod]({
                            duration: a.showDuration,
                            easing: a.showEasing,
                            complete: a.onShown
                        }), a.timeOut > 0 && (l = setTimeout(x, a.timeOut), v.maxHideTime = parseFloat(a.timeOut), v.hideEta = (new Date).getTime() + v.maxHideTime, a.progressBar && (v.intervalId = setInterval(S, 10))),
                        function () {
                            a.closeOnHover && u.hover(w, _);
                            !a.onclick && a.tapToDismiss && u.click(x);
                            a.closeButton && m && m.click(function (t) {
                                t.stopPropagation ? t.stopPropagation() : void 0 !== t.cancelBubble && !0 !== t.cancelBubble && (t.cancelBubble = !0), a.onCloseClick && a.onCloseClick(t), x(!0)
                            });
                            a.onclick && u.click(function (t) {
                                a.onclick(t), x()
                            })
                        }(), d(y), a.debug && console && console.log(y), u
                }

                function b(t) {
                    return null == t && (t = ""), t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }

                function x(e) {
                    var i = e && !1 !== a.closeMethod ? a.closeMethod : a.hideMethod,
                        n = e && !1 !== a.closeDuration ? a.closeDuration : a.hideDuration,
                        o = e && !1 !== a.closeEasing ? a.closeEasing : a.hideEasing;
                    if (!t(":focus", u).length || e) return clearTimeout(v.intervalId), u[i]({
                        duration: n,
                        easing: o,
                        complete: function () {
                            c(u), clearTimeout(l), a.onHidden && "hidden" !== y.state && a.onHidden(), y.state = "hidden", y.endTime = new Date, d(y)
                        }
                    })
                }

                function _() {
                    (a.timeOut > 0 || a.extendedTimeOut > 0) && (l = setTimeout(x, a.extendedTimeOut), v.maxHideTime = parseFloat(a.extendedTimeOut), v.hideEta = (new Date).getTime() + v.maxHideTime)
                }

                function w() {
                    clearTimeout(l), v.hideEta = 0, u.stop(!0, !0)[a.showMethod]({
                        duration: a.showDuration,
                        easing: a.showEasing
                    })
                }

                function S() {
                    var t = (v.hideEta - (new Date).getTime()) / v.maxHideTime * 100;
                    g.width(t + "%")
                }
            }

            function h() {
                return t.extend({}, {
                    tapToDismiss: !0,
                    toastClass: "toaster",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    closeMethod: !1,
                    closeDuration: !1,
                    closeEasing: !1,
                    closeOnHover: !0,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    escapeHtml: !1,
                    target: "body",
                    closeHtml: '<button type="button">&times;</button>',
                    closeClass: "toast-close-button",
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1,
                    progressClass: "toast-progress",
                    rtl: !1
                }, r.options)
            }

            function c(t) {
                e || (e = s()), t.is(":visible") || (t.remove(), t = null, 0 === e.children().length && (e.remove(), n = void 0))
            }
        }()
    })
}("function" == typeof define && define.amd ? define : function (t, e) {
    "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : window.toastr = e(window.jQuery)
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function (t) {
    function e(e) {
        var r = e || window.event,
            s = l.call(arguments, 1),
            d = 0,
            h = 0,
            c = 0,
            f = 0,
            p = 0,
            g = 0;
        if ((e = t.event.fix(r)).type = "mousewheel", "detail" in r && (c = -1 * r.detail), "wheelDelta" in r && (c = r.wheelDelta), "wheelDeltaY" in r && (c = r.wheelDeltaY), "wheelDeltaX" in r && (h = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (h = -1 * c, c = 0), d = 0 === c ? h : c, "deltaY" in r && (d = c = -1 * r.deltaY), "deltaX" in r && (h = r.deltaX, 0 === c && (d = -1 * h)), 0 !== c || 0 !== h) {
            if (1 === r.deltaMode) {
                var m = t.data(this, "mousewheel-line-height");
                d *= m, c *= m, h *= m
            } else if (2 === r.deltaMode) {
                var v = t.data(this, "mousewheel-page-height");
                d *= v, c *= v, h *= v
            }
            if (f = Math.max(Math.abs(c), Math.abs(h)), (!a || a > f) && (a = f, n(r, f) && (a /= 40)), n(r, f) && (d /= 40, h /= 40, c /= 40), d = Math[d >= 1 ? "floor" : "ceil"](d / a), h = Math[h >= 1 ? "floor" : "ceil"](h / a), c = Math[c >= 1 ? "floor" : "ceil"](c / a), u.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                p = e.clientX - y.left, g = e.clientY - y.top
            }
            return e.deltaX = h, e.deltaY = c, e.deltaFactor = a, e.offsetX = p, e.offsetY = g, e.deltaMode = 0, s.unshift(e, d, h, c), o && clearTimeout(o), o = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, s)
        }
    }

    function i() {
        a = null
    }

    function n(t, e) {
        return u.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
    }
    var o, a, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (t.event.fixHooks)
        for (var d = r.length; d;) t.event.fixHooks[r[--d]] = t.event.mouseHooks;
    var u = t.event.special.mousewheel = {
        version: "3.1.12",
        setup: function () {
            if (this.addEventListener)
                for (var i = s.length; i;) this.addEventListener(s[--i], e, !1);
            else this.onmousewheel = e;
            t.data(this, "mousewheel-line-height", u.getLineHeight(this)), t.data(this, "mousewheel-page-height", u.getPageHeight(this))
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var i = s.length; i;) this.removeEventListener(s[--i], e, !1);
            else this.onmousewheel = null;
            t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function (e) {
            var i = t(e),
                n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
            return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
        },
        getPageHeight: function (e) {
            return t(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    t.fn.extend({
        mousewheel: function (t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function (t) {
            return this.unbind("mousewheel", t)
        }
    })
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function (t) {
    function e(e) {
        var r = e || window.event,
            s = l.call(arguments, 1),
            d = 0,
            h = 0,
            c = 0,
            f = 0,
            p = 0,
            g = 0;
        if ((e = t.event.fix(r)).type = "mousewheel", "detail" in r && (c = -1 * r.detail), "wheelDelta" in r && (c = r.wheelDelta), "wheelDeltaY" in r && (c = r.wheelDeltaY), "wheelDeltaX" in r && (h = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (h = -1 * c, c = 0), d = 0 === c ? h : c, "deltaY" in r && (d = c = -1 * r.deltaY), "deltaX" in r && (h = r.deltaX, 0 === c && (d = -1 * h)), 0 !== c || 0 !== h) {
            if (1 === r.deltaMode) {
                var m = t.data(this, "mousewheel-line-height");
                d *= m, c *= m, h *= m
            } else if (2 === r.deltaMode) {
                var v = t.data(this, "mousewheel-page-height");
                d *= v, c *= v, h *= v
            }
            if (f = Math.max(Math.abs(c), Math.abs(h)), (!a || a > f) && (a = f, n(r, f) && (a /= 40)), n(r, f) && (d /= 40, h /= 40, c /= 40), d = Math[d >= 1 ? "floor" : "ceil"](d / a), h = Math[h >= 1 ? "floor" : "ceil"](h / a), c = Math[c >= 1 ? "floor" : "ceil"](c / a), u.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                p = e.clientX - y.left, g = e.clientY - y.top
            }
            return e.deltaX = h, e.deltaY = c, e.deltaFactor = a, e.offsetX = p, e.offsetY = g, e.deltaMode = 0, s.unshift(e, d, h, c), o && clearTimeout(o), o = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, s)
        }
    }

    function i() {
        a = null
    }

    function n(t, e) {
        return u.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
    }
    var o, a, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (t.event.fixHooks)
        for (var d = r.length; d;) t.event.fixHooks[r[--d]] = t.event.mouseHooks;
    var u = t.event.special.mousewheel = {
        version: "3.1.12",
        setup: function () {
            if (this.addEventListener)
                for (var i = s.length; i;) this.addEventListener(s[--i], e, !1);
            else this.onmousewheel = e;
            t.data(this, "mousewheel-line-height", u.getLineHeight(this)), t.data(this, "mousewheel-page-height", u.getPageHeight(this))
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var i = s.length; i;) this.removeEventListener(s[--i], e, !1);
            else this.onmousewheel = null;
            t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function (e) {
            var i = t(e),
                n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
            return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
        },
        getPageHeight: function (e) {
            return t(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    t.fn.extend({
        mousewheel: function (t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function (t) {
            return this.unbind("mousewheel", t)
        }
    })
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t : t(jQuery, window, document)
}(function (t) {
    var e, i, n;
    e = "function" == typeof define && define.amd, i = "undefined" != typeof module && module.exports, n = "https:" == document.location.protocol ? "https:" : "http:", e || (i ? require("jquery-mousewheel")(t) : t.event.special.mousewheel || t("head").append(decodeURI("%3Cscript src=" + n + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),
        function () {
            var e, i = "mCustomScrollbar",
                n = "mCS",
                o = ".mCustomScrollbar",
                a = {
                    setTop: 0,
                    setLeft: 0,
                    axis: "y",
                    scrollbarPosition: "inside",
                    scrollInertia: 950,
                    autoDraggerLength: !0,
                    alwaysShowScrollbar: 0,
                    snapOffset: 0,
                    mouseWheel: {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        deltaFactor: "auto",
                        disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                    },
                    scrollButtons: {
                        scrollType: "stepless",
                        scrollAmount: "auto"
                    },
                    keyboard: {
                        enable: !0,
                        scrollType: "stepless",
                        scrollAmount: "auto"
                    },
                    contentTouchScroll: 25,
                    documentTouchScroll: !0,
                    advanced: {
                        autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                        updateOnContentResize: !0,
                        updateOnImageLoad: "auto",
                        autoUpdateTimeout: 60
                    },
                    theme: "light",
                    callbacks: {
                        onTotalScrollOffset: 0,
                        onTotalScrollBackOffset: 0,
                        alwaysTriggerOffsets: !0
                    }
                },
                r = 0,
                s = {},
                l = window.attachEvent && !window.addEventListener ? 1 : 0,
                d = !1,
                u = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
                h = {
                    init: function (e) {
                        var e = t.extend(!0, {}, a, e),
                            i = c.call(this);
                        if (e.live) {
                            var l = e.liveSelector || this.selector || o,
                                d = t(l);
                            if ("off" === e.live) return void p(l);
                            s[l] = setTimeout(function () {
                                d.mCustomScrollbar(e), "once" === e.live && d.length && p(l)
                            }, 500)
                        } else p(l);
                        return e.setWidth = e.set_width ? e.set_width : e.setWidth, e.setHeight = e.set_height ? e.set_height : e.setHeight, e.axis = e.horizontalScroll ? "x" : g(e.axis), e.scrollInertia = e.scrollInertia > 0 && e.scrollInertia < 17 ? 17 : e.scrollInertia, "object" != typeof e.mouseWheel && 1 == e.mouseWheel && (e.mouseWheel = {
                            enable: !0,
                            scrollAmount: "auto",
                            axis: "y",
                            preventDefault: !1,
                            deltaFactor: "auto",
                            normalizeDelta: !1,
                            invert: !1
                        }), e.mouseWheel.scrollAmount = e.mouseWheelPixels ? e.mouseWheelPixels : e.mouseWheel.scrollAmount, e.mouseWheel.normalizeDelta = e.advanced.normalizeMouseWheelDelta ? e.advanced.normalizeMouseWheelDelta : e.mouseWheel.normalizeDelta, e.scrollButtons.scrollType = m(e.scrollButtons.scrollType), f(e), t(i).each(function () {
                            var i = t(this);
                            if (!i.data(n)) {
                                i.data(n, {
                                    idx: ++r,
                                    opt: e,
                                    scrollRatio: {
                                        y: null,
                                        x: null
                                    },
                                    overflowed: null,
                                    contentReset: {
                                        y: null,
                                        x: null
                                    },
                                    bindEvents: !1,
                                    tweenRunning: !1,
                                    sequential: {},
                                    langDir: i.css("direction"),
                                    cbOffsets: null,
                                    trigger: null,
                                    poll: {
                                        size: {
                                            o: 0,
                                            n: 0
                                        },
                                        img: {
                                            o: 0,
                                            n: 0
                                        },
                                        change: {
                                            o: 0,
                                            n: 0
                                        }
                                    }
                                });
                                var o = i.data(n),
                                    a = o.opt,
                                    s = i.data("mcs-axis"),
                                    l = i.data("mcs-scrollbar-position"),
                                    d = i.data("mcs-theme");
                                s && (a.axis = s), l && (a.scrollbarPosition = l), d && (a.theme = d, f(a)), v.call(this), o && a.callbacks.onCreate && "function" == typeof a.callbacks.onCreate && a.callbacks.onCreate.call(this), t("#mCSB_" + o.idx + "_container img:not(." + u[2] + ")").addClass(u[2]), h.update.call(null, i)
                            }
                        })
                    },
                    update: function (e, i) {
                        var o = e || c.call(this);
                        return t(o).each(function () {
                            var e = t(this);
                            if (e.data(n)) {
                                var o = e.data(n),
                                    a = o.opt,
                                    r = t("#mCSB_" + o.idx + "_container"),
                                    s = t("#mCSB_" + o.idx),
                                    l = [t("#mCSB_" + o.idx + "_dragger_vertical"), t("#mCSB_" + o.idx + "_dragger_horizontal")];
                                if (!r.length) return;
                                o.tweenRunning && q(e), i && o && a.callbacks.onBeforeUpdate && "function" == typeof a.callbacks.onBeforeUpdate && a.callbacks.onBeforeUpdate.call(this), e.hasClass(u[3]) && e.removeClass(u[3]), e.hasClass(u[4]) && e.removeClass(u[4]), s.css("max-height", "none"), s.height() !== e.height() && s.css("max-height", e.height()), b.call(this), "y" === a.axis || a.advanced.autoExpandHorizontalScroll || r.css("width", y(r)), o.overflowed = k.call(this), T.call(this), a.autoDraggerLength && _.call(this), w.call(this), C.call(this);
                                var d = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                                "x" !== a.axis && (o.overflowed[0] ? l[0].height() > l[0].parent().height() ? M.call(this) : (G(e, d[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none"
                                }), o.contentReset.y = null) : (M.call(this), "y" === a.axis ? D.call(this) : "yx" === a.axis && o.overflowed[1] && G(e, d[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                }))), "y" !== a.axis && (o.overflowed[1] ? l[1].width() > l[1].parent().width() ? M.call(this) : (G(e, d[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                }), o.contentReset.x = null) : (M.call(this), "x" === a.axis ? D.call(this) : "yx" === a.axis && o.overflowed[0] && G(e, d[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none"
                                }))), i && o && (2 === i && a.callbacks.onImageLoad && "function" == typeof a.callbacks.onImageLoad ? a.callbacks.onImageLoad.call(this) : 3 === i && a.callbacks.onSelectorChange && "function" == typeof a.callbacks.onSelectorChange ? a.callbacks.onSelectorChange.call(this) : a.callbacks.onUpdate && "function" == typeof a.callbacks.onUpdate && a.callbacks.onUpdate.call(this)), U.call(this)
                            }
                        })
                    },
                    scrollTo: function (e, i) {
                        if (void 0 !== e && null != e) {
                            var o = c.call(this);
                            return t(o).each(function () {
                                var o = t(this);
                                if (o.data(n)) {
                                    var a = o.data(n),
                                        r = a.opt,
                                        s = {
                                            trigger: "external",
                                            scrollInertia: r.scrollInertia,
                                            scrollEasing: "mcsEaseInOut",
                                            moveDragger: !1,
                                            timeout: 60,
                                            callbacks: !0,
                                            onStart: !0,
                                            onUpdate: !0,
                                            onComplete: !0
                                        },
                                        l = t.extend(!0, {}, s, i),
                                        d = j.call(this, e),
                                        u = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                                    d[0] = $.call(this, d[0], "y"), d[1] = $.call(this, d[1], "x"), l.moveDragger && (d[0] *= a.scrollRatio.y, d[1] *= a.scrollRatio.x), l.dur = nt() ? 0 : u, setTimeout(function () {
                                        null !== d[0] && void 0 !== d[0] && "x" !== r.axis && a.overflowed[0] && (l.dir = "y", l.overwrite = "all", G(o, d[0].toString(), l)), null !== d[1] && void 0 !== d[1] && "y" !== r.axis && a.overflowed[1] && (l.dir = "x", l.overwrite = "none", G(o, d[1].toString(), l))
                                    }, l.timeout)
                                }
                            })
                        }
                    },
                    stop: function () {
                        var e = c.call(this);
                        return t(e).each(function () {
                            var e = t(this);
                            e.data(n) && q(e)
                        })
                    },
                    disable: function (e) {
                        var i = c.call(this);
                        return t(i).each(function () {
                            var i = t(this);
                            i.data(n) && (i.data(n), U.call(this, "remove"), D.call(this), e && M.call(this), T.call(this, !0), i.addClass(u[3]))
                        })
                    },
                    destroy: function () {
                        var e = c.call(this);
                        return t(e).each(function () {
                            var o = t(this);
                            if (o.data(n)) {
                                var a = o.data(n),
                                    r = a.opt,
                                    s = t("#mCSB_" + a.idx),
                                    l = t("#mCSB_" + a.idx + "_container"),
                                    d = t(".mCSB_" + a.idx + "_scrollbar");
                                r.live && p(r.liveSelector || t(e).selector), U.call(this, "remove"), D.call(this), M.call(this), o.removeData(n), J(this, "mcs"), d.remove(), l.find("img." + u[2]).removeClass(u[2]), s.replaceWith(l.contents()), o.removeClass(i + " _" + n + "_" + a.idx + " " + u[6] + " " + u[7] + " " + u[5] + " " + u[3]).addClass(u[4])
                            }
                        })
                    }
                },
                c = function () {
                    return "object" != typeof t(this) || t(this).length < 1 ? o : this
                },
                f = function (e) {
                    e.autoDraggerLength = !(t.inArray(e.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) > -1) && e.autoDraggerLength, e.autoExpandScrollbar = !(t.inArray(e.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]) > -1) && e.autoExpandScrollbar, e.scrollButtons.enable = !(t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1) && e.scrollButtons.enable, e.autoHideScrollbar = t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1 || e.autoHideScrollbar, e.scrollbarPosition = t.inArray(e.theme, ["minimal", "minimal-dark"]) > -1 ? "outside" : e.scrollbarPosition
                },
                p = function (t) {
                    s[t] && (clearTimeout(s[t]), J(s, t))
                },
                g = function (t) {
                    return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
                },
                m = function (t) {
                    return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
                },
                v = function () {
                    var e = t(this),
                        o = e.data(n),
                        a = o.opt,
                        r = a.autoExpandScrollbar ? " " + u[1] + "_expand" : "",
                        s = ["<div id='mCSB_" + o.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + a.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + u[12] + "'><div id='mCSB_" + o.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + o.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + o.idx + "_scrollbar mCS-" + a.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + u[12] + "'><div id='mCSB_" + o.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                        l = "yx" === a.axis ? "mCSB_vertical_horizontal" : "x" === a.axis ? "mCSB_horizontal" : "mCSB_vertical",
                        d = "yx" === a.axis ? s[0] + s[1] : "x" === a.axis ? s[1] : s[0],
                        h = "yx" === a.axis ? "<div id='mCSB_" + o.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                        c = a.autoHideScrollbar ? " " + u[6] : "",
                        f = "x" !== a.axis && "rtl" === o.langDir ? " " + u[7] : "";
                    a.setWidth && e.css("width", a.setWidth), a.setHeight && e.css("height", a.setHeight), a.setLeft = "y" !== a.axis && "rtl" === o.langDir ? "989999px" : a.setLeft, e.addClass(i + " _" + n + "_" + o.idx + c + f).wrapInner("<div id='mCSB_" + o.idx + "' class='mCustomScrollBox mCS-" + a.theme + " " + l + "'><div id='mCSB_" + o.idx + "_container' class='mCSB_container' style='position:relative; top:" + a.setTop + "; left:" + a.setLeft + ";' dir='" + o.langDir + "' /></div>");
                    var p = t("#mCSB_" + o.idx),
                        g = t("#mCSB_" + o.idx + "_container");
                    "y" === a.axis || a.advanced.autoExpandHorizontalScroll || g.css("width", y(g)), "outside" === a.scrollbarPosition ? ("static" === e.css("position") && e.css("position", "relative"), e.css("overflow", "visible"), p.addClass("mCSB_outside").after(d)) : (p.addClass("mCSB_inside").append(d), g.wrap(h)), x.call(this);
                    var m = [t("#mCSB_" + o.idx + "_dragger_vertical"), t("#mCSB_" + o.idx + "_dragger_horizontal")];
                    m[0].css("min-height", m[0].height()), m[1].css("min-width", m[1].width())
                },
                y = function (e) {
                    var i = [e[0].scrollWidth, Math.max.apply(Math, e.children().map(function () {
                            return t(this).outerWidth(!0)
                        }).get())],
                        n = e.parent().width();
                    return i[0] > n ? i[0] : i[1] > n ? i[1] : "100%"
                },
                b = function () {
                    var e = t(this),
                        i = e.data(n),
                        o = i.opt,
                        a = t("#mCSB_" + i.idx + "_container");
                    if (o.advanced.autoExpandHorizontalScroll && "y" !== o.axis) {
                        a.css({
                            width: "auto",
                            "min-width": 0,
                            "overflow-x": "scroll"
                        });
                        var r = Math.ceil(a[0].scrollWidth);
                        3 === o.advanced.autoExpandHorizontalScroll || 2 !== o.advanced.autoExpandHorizontalScroll && r > a.parent().width() ? a.css({
                            width: r,
                            "min-width": "100%",
                            "overflow-x": "inherit"
                        }) : a.css({
                            "overflow-x": "inherit",
                            position: "absolute"
                        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                            width: Math.ceil(a[0].getBoundingClientRect().right + .4) - Math.floor(a[0].getBoundingClientRect().left),
                            "min-width": "100%",
                            position: "relative"
                        }).unwrap()
                    }
                },
                x = function () {
                    var e = t(this),
                        i = e.data(n),
                        o = i.opt,
                        a = t(".mCSB_" + i.idx + "_scrollbar:first"),
                        r = et(o.scrollButtons.tabindex) ? "tabindex='" + o.scrollButtons.tabindex + "'" : "",
                        s = ["<a href='#' class='" + u[13] + "' " + r + " />", "<a href='#' class='" + u[14] + "' " + r + " />", "<a href='#' class='" + u[15] + "' " + r + " />", "<a href='#' class='" + u[16] + "' " + r + " />"],
                        l = ["x" === o.axis ? s[2] : s[0], "x" === o.axis ? s[3] : s[1], s[2], s[3]];
                    o.scrollButtons.enable && a.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
                },
                _ = function () {
                    var e = t(this),
                        i = e.data(n),
                        o = t("#mCSB_" + i.idx),
                        a = t("#mCSB_" + i.idx + "_container"),
                        r = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")],
                        s = [o.height() / a.outerHeight(!1), o.width() / a.outerWidth(!1)],
                        d = [parseInt(r[0].css("min-height")), Math.round(s[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(s[1] * r[1].parent().width())],
                        u = l && d[1] < d[0] ? d[0] : d[1],
                        h = l && d[3] < d[2] ? d[2] : d[3];
                    r[0].css({
                        height: u,
                        "max-height": r[0].parent().height() - 10
                    }).find(".mCSB_dragger_bar").css({
                        "line-height": d[0] + "px"
                    }), r[1].css({
                        width: h,
                        "max-width": r[1].parent().width() - 10
                    })
                },
                w = function () {
                    var e = t(this),
                        i = e.data(n),
                        o = t("#mCSB_" + i.idx),
                        a = t("#mCSB_" + i.idx + "_container"),
                        r = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")],
                        s = [a.outerHeight(!1) - o.height(), a.outerWidth(!1) - o.width()],
                        l = [s[0] / (r[0].parent().height() - r[0].height()), s[1] / (r[1].parent().width() - r[1].width())];
                    i.scrollRatio = {
                        y: l[0],
                        x: l[1]
                    }
                },
                S = function (t, e, i) {
                    var n = i ? u[0] + "_expanded" : "",
                        o = t.closest(".mCSB_scrollTools");
                    "active" === e ? (t.toggleClass(u[0] + " " + n), o.toggleClass(u[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(u[0]), o.removeClass(u[1])) : (t.addClass(u[0]), o.addClass(u[1])))
                },
                k = function () {
                    var e = t(this),
                        i = e.data(n),
                        o = t("#mCSB_" + i.idx),
                        a = t("#mCSB_" + i.idx + "_container"),
                        r = null == i.overflowed ? a.height() : a.outerHeight(!1),
                        s = null == i.overflowed ? a.width() : a.outerWidth(!1),
                        l = a[0].scrollHeight,
                        d = a[0].scrollWidth;
                    return l > r && (r = l), d > s && (s = d), [r > o.height(), s > o.width()]
                },
                M = function () {
                    var e = t(this),
                        i = e.data(n),
                        o = i.opt,
                        a = t("#mCSB_" + i.idx),
                        r = t("#mCSB_" + i.idx + "_container"),
                        s = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")];
                    if (q(e), ("x" !== o.axis && !i.overflowed[0] || "y" === o.axis && i.overflowed[0]) && (s[0].add(r).css("top", 0), G(e, "_resetY")), "y" !== o.axis && !i.overflowed[1] || "x" === o.axis && i.overflowed[1]) {
                        var l = dx = 0;
                        "rtl" === i.langDir && (l = a.width() - r.outerWidth(!1), dx = Math.abs(l / i.scrollRatio.x)), r.css("left", l), s[1].css("left", dx), G(e, "_resetX")
                    }
                },
                C = function () {
                    var e, i = t(this),
                        o = i.data(n),
                        a = o.opt;
                    o.bindEvents || (P.call(this), a.contentTouchScroll && I.call(this), A.call(this), a.mouseWheel.enable && function n() {
                        e = setTimeout(function () {
                            t.event.special.mousewheel ? (clearTimeout(e), R.call(i[0])) : n()
                        }, 100)
                    }(), B.call(this), Y.call(this), a.advanced.autoScrollOnFocus && E.call(this), a.scrollButtons.enable && H.call(this), a.keyboard.enable && N.call(this), o.bindEvents = !0)
                },
                D = function () {
                    var e = t(this),
                        i = e.data(n),
                        o = i.opt,
                        a = n + "_" + i.idx,
                        r = ".mCSB_" + i.idx + "_scrollbar",
                        s = t("#mCSB_" + i.idx + ",#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper," + r + " ." + u[12] + ",#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal," + r + ">a"),
                        l = t("#mCSB_" + i.idx + "_container");
                    o.advanced.releaseDraggableSelectors && s.add(t(o.advanced.releaseDraggableSelectors)), o.advanced.extraDraggableSelectors && s.add(t(o.advanced.extraDraggableSelectors)), i.bindEvents && (t(document).add(t(!L() || top.document)).unbind("." + a), s.each(function () {
                        t(this).unbind("." + a)
                    }), clearTimeout(e[0]._focusTimeout), J(e[0], "_focusTimeout"), clearTimeout(i.sequential.step), J(i.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), J(l[0], "onCompleteTimeout"), i.bindEvents = !1)
                },
                T = function (e) {
                    var i = t(this),
                        o = i.data(n),
                        a = o.opt,
                        r = t("#mCSB_" + o.idx + "_container_wrapper"),
                        s = r.length ? r : t("#mCSB_" + o.idx + "_container"),
                        l = [t("#mCSB_" + o.idx + "_scrollbar_vertical"), t("#mCSB_" + o.idx + "_scrollbar_horizontal")],
                        d = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                    "x" !== a.axis && (o.overflowed[0] && !e ? (l[0].add(d[0]).add(l[0].children("a")).css("display", "block"), s.removeClass(u[8] + " " + u[10])) : (a.alwaysShowScrollbar ? (2 !== a.alwaysShowScrollbar && d[0].css("display", "none"), s.removeClass(u[10])) : (l[0].css("display", "none"), s.addClass(u[10])), s.addClass(u[8]))), "y" !== a.axis && (o.overflowed[1] && !e ? (l[1].add(d[1]).add(l[1].children("a")).css("display", "block"), s.removeClass(u[9] + " " + u[11])) : (a.alwaysShowScrollbar ? (2 !== a.alwaysShowScrollbar && d[1].css("display", "none"), s.removeClass(u[11])) : (l[1].css("display", "none"), s.addClass(u[11])), s.addClass(u[9]))), o.overflowed[0] || o.overflowed[1] ? i.removeClass(u[5]) : i.addClass(u[5])
                },
                O = function (e) {
                    var i = e.type,
                        n = e.target.ownerDocument !== document && null !== frameElement ? [t(frameElement).offset().top, t(frameElement).offset().left] : null,
                        o = L() && e.target.ownerDocument !== top.document && null !== frameElement ? [t(e.view.frameElement).offset().top, t(e.view.frameElement).offset().left] : [0, 0];
                    switch (i) {
                        case "pointerdown":
                        case "MSPointerDown":
                        case "pointermove":
                        case "MSPointerMove":
                        case "pointerup":
                        case "MSPointerUp":
                            return n ? [e.originalEvent.pageY - n[0] + o[0], e.originalEvent.pageX - n[1] + o[1], !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                        case "touchstart":
                        case "touchmove":
                        case "touchend":
                            var a = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                                r = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                            return e.target.ownerDocument !== document ? [a.screenY, a.screenX, r > 1] : [a.pageY, a.pageX, r > 1];
                        default:
                            return n ? [e.pageY - n[0] + o[0], e.pageX - n[1] + o[1], !1] : [e.pageY, e.pageX, !1]
                    }
                },
                P = function () {
                    function e(t, e, n, o) {
                        if (f[0].idleTimer = u.scrollInertia < 233 ? 250 : 0, i.attr("id") === c[1]) var a = "x",
                            l = (i[0].offsetLeft - e + o) * s.scrollRatio.x;
                        else var a = "y",
                            l = (i[0].offsetTop - t + n) * s.scrollRatio.y;
                        G(r, l.toString(), {
                            dir: a,
                            drag: !0
                        })
                    }
                    var i, o, a, r = t(this),
                        s = r.data(n),
                        u = s.opt,
                        h = n + "_" + s.idx,
                        c = ["mCSB_" + s.idx + "_dragger_vertical", "mCSB_" + s.idx + "_dragger_horizontal"],
                        f = t("#mCSB_" + s.idx + "_container"),
                        p = t("#" + c[0] + ",#" + c[1]),
                        g = u.advanced.releaseDraggableSelectors ? p.add(t(u.advanced.releaseDraggableSelectors)) : p,
                        m = u.advanced.extraDraggableSelectors ? t(!L() || top.document).add(t(u.advanced.extraDraggableSelectors)) : t(!L() || top.document);
                    p.bind("contextmenu." + h, function (t) {
                        t.preventDefault()
                    }).bind("mousedown." + h + " touchstart." + h + " pointerdown." + h + " MSPointerDown." + h, function (e) {
                        if (e.stopImmediatePropagation(), e.preventDefault(), K(e)) {
                            d = !0, l && (document.onselectstart = function () {
                                return !1
                            }), z.call(f, !1), q(r);
                            var n = (i = t(this)).offset(),
                                s = O(e)[0] - n.top,
                                h = O(e)[1] - n.left,
                                c = i.height() + n.top,
                                p = i.width() + n.left;
                            c > s && s > 0 && p > h && h > 0 && (o = s, a = h), S(i, "active", u.autoExpandScrollbar)
                        }
                    }).bind("touchmove." + h, function (t) {
                        t.stopImmediatePropagation(), t.preventDefault();
                        var n = i.offset(),
                            r = O(t)[0] - n.top,
                            s = O(t)[1] - n.left;
                        e(o, a, r, s)
                    }), t(document).add(m).bind("mousemove." + h + " pointermove." + h + " MSPointerMove." + h, function (t) {
                        if (i) {
                            var n = i.offset(),
                                r = O(t)[0] - n.top,
                                s = O(t)[1] - n.left;
                            if (o === r && a === s) return;
                            e(o, a, r, s)
                        }
                    }).add(g).bind("mouseup." + h + " touchend." + h + " pointerup." + h + " MSPointerUp." + h, function () {
                        i && (S(i, "active", u.autoExpandScrollbar), i = null), d = !1, l && (document.onselectstart = null), z.call(f, !0)
                    })
                },
                I = function () {
                    function i(t) {
                        if (!tt(t) || d || O(t)[2]) e = 0;
                        else {
                            e = 1, w = 0, S = 0, u = 1, k.removeClass("mCS_touch_action");
                            var i = P.offset();
                            h = O(t)[0] - i.top, c = O(t)[1] - i.left, W = [O(t)[0], O(t)[1]]
                        }
                    }

                    function o(t) {
                        if (tt(t) && !d && !O(t)[2] && (C.documentTouchScroll || t.preventDefault(), t.stopImmediatePropagation(), (!S || w) && u)) {
                            m = Z();
                            var e = T.offset(),
                                i = O(t)[0] - e.top,
                                n = O(t)[1] - e.left,
                                o = "mcsLinearOut";
                            if (A.push(i), R.push(n), W[2] = Math.abs(O(t)[0] - W[0]), W[3] = Math.abs(O(t)[1] - W[1]), M.overflowed[0]) var a = I[0].parent().height() - I[0].height(),
                                r = h - i > 0 && i - h > -a * M.scrollRatio.y && (2 * W[3] < W[2] || "yx" === C.axis);
                            if (M.overflowed[1]) var s = I[1].parent().width() - I[1].width(),
                                f = c - n > 0 && n - c > -s * M.scrollRatio.x && (2 * W[2] < W[3] || "yx" === C.axis);
                            r || f ? (Y || t.preventDefault(), w = 1) : (S = 1, k.addClass("mCS_touch_action")), Y && t.preventDefault(), x = "yx" === C.axis ? [h - i, c - n] : "x" === C.axis ? [null, c - n] : [h - i, null], P[0].idleTimer = 250, M.overflowed[0] && l(x[0], F, o, "y", "all", !0), M.overflowed[1] && l(x[1], F, o, "x", z, !0)
                        }
                    }

                    function a(t) {
                        if (!tt(t) || d || O(t)[2]) e = 0;
                        else {
                            e = 1, t.stopImmediatePropagation(), q(k), g = Z();
                            var i = T.offset();
                            f = O(t)[0] - i.top, p = O(t)[1] - i.left, A = [], R = []
                        }
                    }

                    function r(t) {
                        if (tt(t) && !d && !O(t)[2]) {
                            u = 0, t.stopImmediatePropagation(), w = 0, S = 0, v = Z();
                            var e = T.offset(),
                                i = O(t)[0] - e.top,
                                n = O(t)[1] - e.left;
                            if (!(v - m > 30)) {
                                var o = "mcsEaseOut",
                                    a = 2.5 > (b = 1e3 / (v - g)),
                                    r = a ? [A[A.length - 2], R[R.length - 2]] : [0, 0];
                                y = a ? [i - r[0], n - r[1]] : [i - f, n - p];
                                var h = [Math.abs(y[0]), Math.abs(y[1])];
                                b = a ? [Math.abs(y[0] / 4), Math.abs(y[1] / 4)] : [b, b];
                                var c = [Math.abs(P[0].offsetTop) - y[0] * s(h[0] / b[0], b[0]), Math.abs(P[0].offsetLeft) - y[1] * s(h[1] / b[1], b[1])];
                                x = "yx" === C.axis ? [c[0], c[1]] : "x" === C.axis ? [null, c[1]] : [c[0], null], _ = [4 * h[0] + C.scrollInertia, 4 * h[1] + C.scrollInertia];
                                var k = parseInt(C.contentTouchScroll) || 0;
                                x[0] = h[0] > k ? x[0] : 0, x[1] = h[1] > k ? x[1] : 0, M.overflowed[0] && l(x[0], _[0], o, "y", z, !1), M.overflowed[1] && l(x[1], _[1], o, "x", z, !1)
                            }
                        }
                    }

                    function s(t, e) {
                        var i = [1.5 * e, 2 * e, e / 1.5, e / 2];
                        return t > 90 ? e > 4 ? i[0] : i[3] : t > 60 ? e > 3 ? i[3] : i[2] : t > 30 ? e > 8 ? i[1] : e > 6 ? i[0] : e > 4 ? e : i[2] : e > 8 ? e : i[3]
                    }

                    function l(t, e, i, n, o, a) {
                        t && G(k, t.toString(), {
                            dur: e,
                            scrollEasing: i,
                            dir: n,
                            overwrite: o,
                            drag: a
                        })
                    }
                    var u, h, c, f, p, g, m, v, y, b, x, _, w, S, k = t(this),
                        M = k.data(n),
                        C = M.opt,
                        D = n + "_" + M.idx,
                        T = t("#mCSB_" + M.idx),
                        P = t("#mCSB_" + M.idx + "_container"),
                        I = [t("#mCSB_" + M.idx + "_dragger_vertical"), t("#mCSB_" + M.idx + "_dragger_horizontal")],
                        A = [],
                        R = [],
                        F = 0,
                        z = "yx" === C.axis ? "none" : "all",
                        W = [],
                        B = P.find("iframe"),
                        E = ["touchstart." + D + " pointerdown." + D + " MSPointerDown." + D, "touchmove." + D + " pointermove." + D + " MSPointerMove." + D, "touchend." + D + " pointerup." + D + " MSPointerUp." + D],
                        Y = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                    P.bind(E[0], function (t) {
                        i(t)
                    }).bind(E[1], function (t) {
                        o(t)
                    }), T.bind(E[0], function (t) {
                        a(t)
                    }).bind(E[2], function (t) {
                        r(t)
                    }), B.length && B.each(function () {
                        t(this).bind("load", function () {
                            L(this) && t(this.contentDocument || this.contentWindow.document).bind(E[0], function (t) {
                                i(t), a(t)
                            }).bind(E[1], function (t) {
                                o(t)
                            }).bind(E[2], function (t) {
                                r(t)
                            })
                        })
                    })
                },
                A = function () {
                    function i(t, e, i) {
                        l.type = i && o ? "stepped" : "stepless", l.scrollAmount = 10, V(a, t, e, "mcsLinearOut", i ? 60 : null)
                    }
                    var o, a = t(this),
                        r = a.data(n),
                        s = r.opt,
                        l = r.sequential,
                        u = n + "_" + r.idx,
                        h = t("#mCSB_" + r.idx + "_container"),
                        c = h.parent();
                    h.bind("mousedown." + u, function () {
                        e || o || (o = 1, d = !0)
                    }).add(document).bind("mousemove." + u, function (t) {
                        if (!e && o && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text)) {
                            var n = h.offset(),
                                a = O(t)[0] - n.top + h[0].offsetTop,
                                d = O(t)[1] - n.left + h[0].offsetLeft;
                            a > 0 && a < c.height() && d > 0 && d < c.width() ? l.step && i("off", null, "stepped") : ("x" !== s.axis && r.overflowed[0] && (0 > a ? i("on", 38) : a > c.height() && i("on", 40)), "y" !== s.axis && r.overflowed[1] && (0 > d ? i("on", 37) : d > c.width() && i("on", 39)))
                        }
                    }).bind("mouseup." + u + " dragend." + u, function () {
                        e || (o && (o = 0, i("off", null)), d = !1)
                    })
                },
                R = function () {
                    function e(e, n) {
                        if (q(i), !W(i, e.target)) {
                            var r = "auto" !== a.mouseWheel.deltaFactor ? parseInt(a.mouseWheel.deltaFactor) : l && e.deltaFactor < 100 ? 100 : e.deltaFactor || 100,
                                u = a.scrollInertia;
                            if ("x" === a.axis || "x" === a.mouseWheel.axis) var h = "x",
                                c = [Math.round(r * o.scrollRatio.x), parseInt(a.mouseWheel.scrollAmount)],
                                f = "auto" !== a.mouseWheel.scrollAmount ? c[1] : c[0] >= s.width() ? .9 * s.width() : c[0],
                                p = Math.abs(t("#mCSB_" + o.idx + "_container")[0].offsetLeft),
                                g = d[1][0].offsetLeft,
                                m = d[1].parent().width() - d[1].width(),
                                v = "y" === a.mouseWheel.axis ? e.deltaY || n : e.deltaX;
                            else var h = "y",
                                c = [Math.round(r * o.scrollRatio.y), parseInt(a.mouseWheel.scrollAmount)],
                                f = "auto" !== a.mouseWheel.scrollAmount ? c[1] : c[0] >= s.height() ? .9 * s.height() : c[0],
                                p = Math.abs(t("#mCSB_" + o.idx + "_container")[0].offsetTop),
                                g = d[0][0].offsetTop,
                                m = d[0].parent().height() - d[0].height(),
                                v = e.deltaY || n;
                            "y" === h && !o.overflowed[0] || "x" === h && !o.overflowed[1] || ((a.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) && (v = -v), a.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== g || 0 > v && g !== m || a.mouseWheel.preventDefault) && (e.stopImmediatePropagation(), e.preventDefault()), e.deltaFactor < 5 && !a.mouseWheel.normalizeDelta && (f = e.deltaFactor, u = 17), G(i, (p - v * f).toString(), {
                                dir: h,
                                dur: u
                            }))
                        }
                    }
                    if (t(this).data(n)) {
                        var i = t(this),
                            o = i.data(n),
                            a = o.opt,
                            r = n + "_" + o.idx,
                            s = t("#mCSB_" + o.idx),
                            d = [t("#mCSB_" + o.idx + "_dragger_vertical"), t("#mCSB_" + o.idx + "_dragger_horizontal")],
                            u = t("#mCSB_" + o.idx + "_container").find("iframe");
                        u.length && u.each(function () {
                            t(this).bind("load", function () {
                                L(this) && t(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function (t, i) {
                                    e(t, i)
                                })
                            })
                        }), s.bind("mousewheel." + r, function (t, i) {
                            e(t, i)
                        })
                    }
                },
                F = new Object,
                L = function (e) {
                    var i = !1,
                        n = !1,
                        o = null;
                    if (void 0 === e ? n = "#empty" : void 0 !== t(e).attr("id") && (n = t(e).attr("id")), !1 !== n && void 0 !== F[n]) return F[n];
                    if (e) {
                        try {
                            var a = e.contentDocument || e.contentWindow.document;
                            o = a.body.innerHTML
                        } catch (t) {}
                        i = null !== o
                    } else {
                        try {
                            var a = top.document;
                            o = a.body.innerHTML
                        } catch (t) {}
                        i = null !== o
                    }
                    return !1 !== n && (F[n] = i), i
                },
                z = function (t) {
                    var e = this.find("iframe");
                    if (e.length) {
                        var i = t ? "auto" : "none";
                        e.css("pointer-events", i)
                    }
                },
                W = function (e, i) {
                    var o = i.nodeName.toLowerCase(),
                        a = e.data(n).opt.mouseWheel.disableOver;
                    return t.inArray(o, a) > -1 && !(t.inArray(o, ["select", "textarea"]) > -1 && !t(i).is(":focus"))
                },
                B = function () {
                    var e, i = t(this),
                        o = i.data(n),
                        a = n + "_" + o.idx,
                        r = t("#mCSB_" + o.idx + "_container"),
                        s = r.parent(),
                        l = t(".mCSB_" + o.idx + "_scrollbar ." + u[12]);
                    l.bind("mousedown." + a + " touchstart." + a + " pointerdown." + a + " MSPointerDown." + a, function (i) {
                        d = !0, t(i.target).hasClass("mCSB_dragger") || (e = 1)
                    }).bind("touchend." + a + " pointerup." + a + " MSPointerUp." + a, function () {
                        d = !1
                    }).bind("click." + a, function (n) {
                        if (e && (e = 0, t(n.target).hasClass(u[12]) || t(n.target).hasClass("mCSB_draggerRail"))) {
                            q(i);
                            var a = t(this),
                                l = a.find(".mCSB_dragger");
                            if (a.parent(".mCSB_scrollTools_horizontal").length > 0) {
                                if (!o.overflowed[1]) return;
                                var d = "x",
                                    h = n.pageX > l.offset().left ? -1 : 1,
                                    c = Math.abs(r[0].offsetLeft) - h * (.9 * s.width())
                            } else {
                                if (!o.overflowed[0]) return;
                                var d = "y",
                                    h = n.pageY > l.offset().top ? -1 : 1,
                                    c = Math.abs(r[0].offsetTop) - h * (.9 * s.height())
                            }
                            G(i, c.toString(), {
                                dir: d,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                    })
                },
                E = function () {
                    var e = t(this),
                        i = e.data(n),
                        o = i.opt,
                        a = n + "_" + i.idx,
                        r = t("#mCSB_" + i.idx + "_container"),
                        s = r.parent();
                    r.bind("focusin." + a, function () {
                        var i = t(document.activeElement),
                            n = r.find(".mCustomScrollBox").length;
                        i.is(o.advanced.autoScrollOnFocus) && (q(e), clearTimeout(e[0]._focusTimeout), e[0]._focusTimer = n ? 17 * n : 0, e[0]._focusTimeout = setTimeout(function () {
                            var t = [it(i)[0], it(i)[1]],
                                n = [r[0].offsetTop, r[0].offsetLeft],
                                a = [n[0] + t[0] >= 0 && n[0] + t[0] < s.height() - i.outerHeight(!1), n[1] + t[1] >= 0 && n[0] + t[1] < s.width() - i.outerWidth(!1)],
                                l = "yx" !== o.axis || a[0] || a[1] ? "all" : "none";
                            "x" === o.axis || a[0] || G(e, t[0].toString(), {
                                dir: "y",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: l,
                                dur: 0
                            }), "y" === o.axis || a[1] || G(e, t[1].toString(), {
                                dir: "x",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: l,
                                dur: 0
                            })
                        }, e[0]._focusTimer))
                    })
                },
                Y = function () {
                    var e = t(this),
                        i = e.data(n),
                        o = n + "_" + i.idx,
                        a = t("#mCSB_" + i.idx + "_container").parent();
                    a.bind("scroll." + o, function () {
                        0 === a.scrollTop() && 0 === a.scrollLeft() || t(".mCSB_" + i.idx + "_scrollbar").css("visibility", "hidden")
                    })
                },
                H = function () {
                    var e = t(this),
                        i = e.data(n),
                        o = i.opt,
                        a = i.sequential,
                        r = n + "_" + i.idx,
                        s = ".mCSB_" + i.idx + "_scrollbar",
                        l = t(s + ">a");
                    l.bind("contextmenu." + r, function (t) {
                        t.preventDefault()
                    }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function (n) {
                        function r(t, i) {
                            a.scrollAmount = o.scrollButtons.scrollAmount, V(e, t, i)
                        }
                        if (n.preventDefault(), K(n)) {
                            var s = t(this).attr("class");
                            switch (a.type = o.scrollButtons.scrollType, n.type) {
                                case "mousedown":
                                case "touchstart":
                                case "pointerdown":
                                case "MSPointerDown":
                                    if ("stepped" === a.type) return;
                                    d = !0, i.tweenRunning = !1, r("on", s);
                                    break;
                                case "mouseup":
                                case "touchend":
                                case "pointerup":
                                case "MSPointerUp":
                                case "mouseout":
                                case "pointerout":
                                case "MSPointerOut":
                                    if ("stepped" === a.type) return;
                                    d = !1, a.dir && r("off", s);
                                    break;
                                case "click":
                                    if ("stepped" !== a.type || i.tweenRunning) return;
                                    r("on", s)
                            }
                        }
                    })
                },
                N = function () {
                    function e(e) {
                        function n(t, e) {
                            r.type = a.keyboard.scrollType, r.scrollAmount = a.keyboard.scrollAmount, "stepped" === r.type && o.tweenRunning || V(i, t, e)
                        }
                        switch (e.type) {
                            case "blur":
                                o.tweenRunning && r.dir && n("off", null);
                                break;
                            case "keydown":
                            case "keyup":
                                var s = e.keyCode ? e.keyCode : e.which,
                                    l = "on";
                                if ("x" !== a.axis && (38 === s || 40 === s) || "y" !== a.axis && (37 === s || 39 === s)) {
                                    if ((38 === s || 40 === s) && !o.overflowed[0] || (37 === s || 39 === s) && !o.overflowed[1]) return;
                                    "keyup" === e.type && (l = "off"), t(document.activeElement).is(h) || (e.preventDefault(), e.stopImmediatePropagation(), n(l, s))
                                } else if (33 === s || 34 === s) {
                                    if ((o.overflowed[0] || o.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type) {
                                        q(i);
                                        var c = 34 === s ? -1 : 1;
                                        if ("x" === a.axis || "yx" === a.axis && o.overflowed[1] && !o.overflowed[0]) var f = "x",
                                            p = Math.abs(d[0].offsetLeft) - c * (.9 * u.width());
                                        else var f = "y",
                                            p = Math.abs(d[0].offsetTop) - c * (.9 * u.height());
                                        G(i, p.toString(), {
                                            dir: f,
                                            scrollEasing: "mcsEaseInOut"
                                        })
                                    }
                                } else if ((35 === s || 36 === s) && !t(document.activeElement).is(h) && ((o.overflowed[0] || o.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type)) {
                                    if ("x" === a.axis || "yx" === a.axis && o.overflowed[1] && !o.overflowed[0]) var f = "x",
                                        p = 35 === s ? Math.abs(u.width() - d.outerWidth(!1)) : 0;
                                    else var f = "y",
                                        p = 35 === s ? Math.abs(u.height() - d.outerHeight(!1)) : 0;
                                    G(i, p.toString(), {
                                        dir: f,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                        }
                    }
                    var i = t(this),
                        o = i.data(n),
                        a = o.opt,
                        r = o.sequential,
                        s = n + "_" + o.idx,
                        l = t("#mCSB_" + o.idx),
                        d = t("#mCSB_" + o.idx + "_container"),
                        u = d.parent(),
                        h = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                        c = d.find("iframe"),
                        f = ["blur." + s + " keydown." + s + " keyup." + s];
                    c.length && c.each(function () {
                        t(this).bind("load", function () {
                            L(this) && t(this.contentDocument || this.contentWindow.document).bind(f[0], function (t) {
                                e(t)
                            })
                        })
                    }), l.attr("tabindex", "0").bind(f[0], function (t) {
                        e(t)
                    })
                },
                V = function (e, i, o, a, r) {
                    function s(t) {
                        d.snapAmount && (h.scrollAmount = d.snapAmount instanceof Array ? "x" === h.dir[0] ? d.snapAmount[1] : d.snapAmount[0] : d.snapAmount);
                        var i = "stepped" !== h.type,
                            n = r || (t ? i ? p / 1.5 : g : 1e3 / 60),
                            o = t ? i ? 7.5 : 40 : 2.5,
                            u = [Math.abs(c[0].offsetTop), Math.abs(c[0].offsetLeft)],
                            f = [l.scrollRatio.y > 10 ? 10 : l.scrollRatio.y, l.scrollRatio.x > 10 ? 10 : l.scrollRatio.x],
                            m = "x" === h.dir[0] ? u[1] + h.dir[1] * (f[1] * o) : u[0] + h.dir[1] * (f[0] * o),
                            v = "x" === h.dir[0] ? u[1] + h.dir[1] * parseInt(h.scrollAmount) : u[0] + h.dir[1] * parseInt(h.scrollAmount),
                            y = "auto" !== h.scrollAmount ? v : m,
                            b = a || (t ? i ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
                            x = !!t;
                        return t && 17 > n && (y = "x" === h.dir[0] ? u[1] : u[0]), G(e, y.toString(), {
                            dir: h.dir[0],
                            scrollEasing: b,
                            dur: n,
                            onComplete: x
                        }), t ? void(h.dir = !1) : (clearTimeout(h.step), void(h.step = setTimeout(function () {
                            s()
                        }, n)))
                    }
                    var l = e.data(n),
                        d = l.opt,
                        h = l.sequential,
                        c = t("#mCSB_" + l.idx + "_container"),
                        f = "stepped" === h.type,
                        p = d.scrollInertia < 26 ? 26 : d.scrollInertia,
                        g = d.scrollInertia < 1 ? 17 : d.scrollInertia;
                    switch (i) {
                        case "on":
                            if (h.dir = [o === u[16] || o === u[15] || 39 === o || 37 === o ? "x" : "y", o === u[13] || o === u[15] || 38 === o || 37 === o ? -1 : 1], q(e), et(o) && "stepped" === h.type) return;
                            s(f);
                            break;
                        case "off":
                            clearTimeout(h.step), J(h, "step"), q(e), (f || l.tweenRunning && h.dir) && s(!0)
                    }
                },
                j = function (e) {
                    var i = t(this).data(n).opt,
                        o = [];
                    return "function" == typeof e && (e = e()), e instanceof Array ? o = e.length > 1 ? [e[0], e[1]] : "x" === i.axis ? [null, e[0]] : [e[0], null] : (o[0] = e.y ? e.y : e.x || "x" === i.axis ? null : e, o[1] = e.x ? e.x : e.y || "y" === i.axis ? null : e), "function" == typeof o[0] && (o[0] = o[0]()), "function" == typeof o[1] && (o[1] = o[1]()), o
                },
                $ = function (e, i) {
                    if (null != e && void 0 !== e) {
                        var o = t(this),
                            a = o.data(n),
                            r = a.opt,
                            s = t("#mCSB_" + a.idx + "_container"),
                            l = s.parent(),
                            d = typeof e;
                        i || (i = "x" === r.axis ? "x" : "y");
                        var u = "x" === i ? s.outerWidth(!1) - l.width() : s.outerHeight(!1) - l.height(),
                            c = "x" === i ? s[0].offsetLeft : s[0].offsetTop,
                            f = "x" === i ? "left" : "top";
                        switch (d) {
                            case "function":
                                return e();
                            case "object":
                                var p = e.jquery ? e : t(e);
                                if (!p.length) return;
                                return "x" === i ? it(p)[1] : it(p)[0];
                            case "string":
                            case "number":
                                if (et(e)) return Math.abs(e);
                                if (-1 !== e.indexOf("%")) return Math.abs(u * parseInt(e) / 100);
                                if (-1 !== e.indexOf("-=")) return Math.abs(c - parseInt(e.split("-=")[1]));
                                if (-1 !== e.indexOf("+=")) {
                                    var g = c + parseInt(e.split("+=")[1]);
                                    return g >= 0 ? 0 : Math.abs(g)
                                }
                                if (-1 !== e.indexOf("px") && et(e.split("px")[0])) return Math.abs(e.split("px")[0]);
                                if ("top" === e || "left" === e) return 0;
                                if ("bottom" === e) return Math.abs(l.height() - s.outerHeight(!1));
                                if ("right" === e) return Math.abs(l.width() - s.outerWidth(!1));
                                if ("first" === e || "last" === e) {
                                    var p = s.find(":" + e);
                                    return "x" === i ? it(p)[1] : it(p)[0]
                                }
                                return t(e).length ? "x" === i ? it(t(e))[1] : it(t(e))[0] : (s.css(f, e), void h.update.call(null, o[0]))
                        }
                    }
                },
                U = function (e) {
                    function i(t) {
                        clearTimeout(s[0].autoUpdate), h.update.call(null, o[0], t)
                    }
                    var o = t(this),
                        a = o.data(n),
                        r = a.opt,
                        s = t("#mCSB_" + a.idx + "_container");
                    return e ? (clearTimeout(s[0].autoUpdate), void J(s[0], "autoUpdate")) : void
                    function e() {
                        return clearTimeout(s[0].autoUpdate), 0 === o.parents("html").length ? void(o = null) : void(s[0].autoUpdate = setTimeout(function () {
                            return r.advanced.updateOnSelectorChange && (a.poll.change.n = function () {
                                !0 === r.advanced.updateOnSelectorChange && (r.advanced.updateOnSelectorChange = "*");
                                var t = 0,
                                    e = s.find(r.advanced.updateOnSelectorChange);
                                return r.advanced.updateOnSelectorChange && e.length > 0 && e.each(function () {
                                    t += this.offsetHeight + this.offsetWidth
                                }), t
                            }(), a.poll.change.n !== a.poll.change.o) ? (a.poll.change.o = a.poll.change.n, void i(3)) : r.advanced.updateOnContentResize && (a.poll.size.n = o[0].scrollHeight + o[0].scrollWidth + s[0].offsetHeight + o[0].offsetHeight + o[0].offsetWidth, a.poll.size.n !== a.poll.size.o) ? (a.poll.size.o = a.poll.size.n, void i(1)) : !r.advanced.updateOnImageLoad || "auto" === r.advanced.updateOnImageLoad && "y" === r.axis || (a.poll.img.n = s.find("img").length, a.poll.img.n === a.poll.img.o) ? void((r.advanced.updateOnSelectorChange || r.advanced.updateOnContentResize || r.advanced.updateOnImageLoad) && e()) : (a.poll.img.o = a.poll.img.n, void s.find("img").each(function () {
                                ! function (e) {
                                    if (t(e).hasClass(u[2])) i();
                                    else {
                                        var n = new Image;
                                        n.onload = function (t, e) {
                                            return function () {
                                                return e.apply(t, arguments)
                                            }
                                        }(n, function () {
                                            this.onload = null, t(e).addClass(u[2]), i(2)
                                        }), n.src = e.src
                                    }
                                }(this)
                            }))
                        }, r.advanced.autoUpdateTimeout))
                    }()
                },
                q = function (e) {
                    var i = e.data(n),
                        o = t("#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper,#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal");
                    o.each(function () {
                        Q.call(this)
                    })
                },
                G = function (e, i, o) {
                    function a(t) {
                        return s && l.callbacks[t] && "function" == typeof l.callbacks[t]
                    }

                    function r() {
                        var t = [c[0].offsetTop, c[0].offsetLeft],
                            i = [v[0].offsetTop, v[0].offsetLeft],
                            n = [c.outerHeight(!1), c.outerWidth(!1)],
                            a = [h.height(), h.width()];
                        e[0].mcs = {
                            content: c,
                            top: t[0],
                            left: t[1],
                            draggerTop: i[0],
                            draggerLeft: i[1],
                            topPct: Math.round(100 * Math.abs(t[0]) / (Math.abs(n[0]) - a[0])),
                            leftPct: Math.round(100 * Math.abs(t[1]) / (Math.abs(n[1]) - a[1])),
                            direction: o.dir
                        }
                    }
                    var s = e.data(n),
                        l = s.opt,
                        d = {
                            trigger: "internal",
                            dir: "y",
                            scrollEasing: "mcsEaseOut",
                            drag: !1,
                            dur: l.scrollInertia,
                            overwrite: "all",
                            callbacks: !0,
                            onStart: !0,
                            onUpdate: !0,
                            onComplete: !0
                        },
                        o = t.extend(d, o),
                        u = [o.dur, o.drag ? 0 : o.dur],
                        h = t("#mCSB_" + s.idx),
                        c = t("#mCSB_" + s.idx + "_container"),
                        f = c.parent(),
                        p = l.callbacks.onTotalScrollOffset ? j.call(e, l.callbacks.onTotalScrollOffset) : [0, 0],
                        g = l.callbacks.onTotalScrollBackOffset ? j.call(e, l.callbacks.onTotalScrollBackOffset) : [0, 0];
                    if (s.trigger = o.trigger, 0 === f.scrollTop() && 0 === f.scrollLeft() || (t(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), f.scrollTop(0).scrollLeft(0)), "_resetY" !== i || s.contentReset.y || (a("onOverflowYNone") && l.callbacks.onOverflowYNone.call(e[0]), s.contentReset.y = 1), "_resetX" !== i || s.contentReset.x || (a("onOverflowXNone") && l.callbacks.onOverflowXNone.call(e[0]), s.contentReset.x = 1), "_resetY" !== i && "_resetX" !== i) {
                        if (!s.contentReset.y && e[0].mcs || !s.overflowed[0] || (a("onOverflowY") && l.callbacks.onOverflowY.call(e[0]), s.contentReset.x = null), !s.contentReset.x && e[0].mcs || !s.overflowed[1] || (a("onOverflowX") && l.callbacks.onOverflowX.call(e[0]), s.contentReset.x = null), l.snapAmount) {
                            var m = l.snapAmount instanceof Array ? "x" === o.dir ? l.snapAmount[1] : l.snapAmount[0] : l.snapAmount;
                            i = function (t, e, i) {
                                return Math.round(t / e) * e - i
                            }(i, m, l.snapOffset)
                        }
                        switch (o.dir) {
                            case "x":
                                var v = t("#mCSB_" + s.idx + "_dragger_horizontal"),
                                    y = "left",
                                    b = c[0].offsetLeft,
                                    x = [h.width() - c.outerWidth(!1), v.parent().width() - v.width()],
                                    _ = [i, 0 === i ? 0 : i / s.scrollRatio.x],
                                    w = p[1],
                                    k = g[1],
                                    M = w > 0 ? w / s.scrollRatio.x : 0,
                                    C = k > 0 ? k / s.scrollRatio.x : 0;
                                break;
                            case "y":
                                var v = t("#mCSB_" + s.idx + "_dragger_vertical"),
                                    y = "top",
                                    b = c[0].offsetTop,
                                    x = [h.height() - c.outerHeight(!1), v.parent().height() - v.height()],
                                    _ = [i, 0 === i ? 0 : i / s.scrollRatio.y],
                                    w = p[0],
                                    k = g[0],
                                    M = w > 0 ? w / s.scrollRatio.y : 0,
                                    C = k > 0 ? k / s.scrollRatio.y : 0
                        }
                        _[1] < 0 || 0 === _[0] && 0 === _[1] ? _ = [0, 0] : _[1] >= x[1] ? _ = [x[0], x[1]] : _[0] = -_[0], e[0].mcs || (r(), a("onInit") && l.callbacks.onInit.call(e[0])), clearTimeout(c[0].onCompleteTimeout), X(v[0], y, Math.round(_[1]), u[1], o.scrollEasing), !s.tweenRunning && (0 === b && _[0] >= 0 || b === x[0] && _[0] <= x[0]) || X(c[0], y, Math.round(_[0]), u[0], o.scrollEasing, o.overwrite, {
                            onStart: function () {
                                o.callbacks && o.onStart && !s.tweenRunning && (a("onScrollStart") && (r(), l.callbacks.onScrollStart.call(e[0])), s.tweenRunning = !0, S(v), s.cbOffsets = [l.callbacks.alwaysTriggerOffsets || b >= x[0] + w, l.callbacks.alwaysTriggerOffsets || -k >= b])
                            },
                            onUpdate: function () {
                                o.callbacks && o.onUpdate && a("whileScrolling") && (r(), l.callbacks.whileScrolling.call(e[0]))
                            },
                            onComplete: function () {
                                if (o.callbacks && o.onComplete) {
                                    "yx" === l.axis && clearTimeout(c[0].onCompleteTimeout);
                                    var t = c[0].idleTimer || 0;
                                    c[0].onCompleteTimeout = setTimeout(function () {
                                        a("onScroll") && (r(), l.callbacks.onScroll.call(e[0])), a("onTotalScroll") && _[1] >= x[1] - M && s.cbOffsets[0] && (r(), l.callbacks.onTotalScroll.call(e[0])), a("onTotalScrollBack") && _[1] <= C && s.cbOffsets[1] && (r(), l.callbacks.onTotalScrollBack.call(e[0])), s.tweenRunning = !1, c[0].idleTimer = 0, S(v, "hide")
                                    }, t)
                                }
                            }
                        })
                    }
                },
                X = function (t, e, i, n, o, a, r) {
                    function s() {
                        y.stop || (g || h.call(), g = Z() - p, l(), g >= y.time && (y.time = g > y.time ? g + d - (g - y.time) : g + d - 1, y.time < g + 1 && (y.time = g + 1)), y.time < n ? y.id = u(s) : f.call())
                    }

                    function l() {
                        n > 0 ? (y.currVal = function (t, e, i, n, o) {
                            switch (o) {
                                case "linear":
                                case "mcsLinear":
                                    return i * t / n + e;
                                case "mcsLinearOut":
                                    return t /= n, t--, i * Math.sqrt(1 - t * t) + e;
                                case "easeInOutSmooth":
                                    return 1 > (t /= n / 2) ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e;
                                case "easeInOutStrong":
                                    return 1 > (t /= n / 2) ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, i / 2 * (2 - Math.pow(2, -10 * t)) + e);
                                case "easeInOut":
                                case "mcsEaseInOut":
                                    return 1 > (t /= n / 2) ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e;
                                case "easeOutSmooth":
                                    return t /= n, -i * (--t * t * t * t - 1) + e;
                                case "easeOutStrong":
                                    return i * (1 - Math.pow(2, -10 * t / n)) + e;
                                case "easeOut":
                                case "mcsEaseOut":
                                default:
                                    var a = (t /= n) * t,
                                        r = a * t;
                                    return e + i * (.499999999999997 * r * a + -2.5 * a * a + 5.5 * r + -6.5 * a + 4 * t)
                            }
                        }(y.time, m, b, n, o), v[e] = Math.round(y.currVal) + "px") : v[e] = i + "px", c.call()
                    }
                    t._mTween || (t._mTween = {
                        top: {},
                        left: {}
                    });
                    var d, u, r = r || {},
                        h = r.onStart || function () {},
                        c = r.onUpdate || function () {},
                        f = r.onComplete || function () {},
                        p = Z(),
                        g = 0,
                        m = t.offsetTop,
                        v = t.style,
                        y = t._mTween[e];
                    "left" === e && (m = t.offsetLeft);
                    var b = i - m;
                    y.stop = 0, "none" !== a && null != y.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(y.id) : clearTimeout(y.id), y.id = null), d = 1e3 / 60, y.time = g + d, u = window.requestAnimationFrame ? window.requestAnimationFrame : function (t) {
                        return l(), setTimeout(t, .01)
                    }, y.id = u(s)
                },
                Z = function () {
                    return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
                },
                Q = function () {
                    var t = this;
                    t._mTween || (t._mTween = {
                        top: {},
                        left: {}
                    });
                    for (var e = ["top", "left"], i = 0; i < e.length; i++) {
                        var n = e[i];
                        t._mTween[n].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[n].id) : clearTimeout(t._mTween[n].id), t._mTween[n].id = null, t._mTween[n].stop = 1)
                    }
                },
                J = function (t, e) {
                    try {
                        delete t[e]
                    } catch (i) {
                        t[e] = null
                    }
                },
                K = function (t) {
                    return !(t.which && 1 !== t.which)
                },
                tt = function (t) {
                    var e = t.originalEvent.pointerType;
                    return !(e && "touch" !== e && 2 !== e)
                },
                et = function (t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                },
                it = function (t) {
                    var e = t.parents(".mCSB_container");
                    return [t.offset().top - e.offset().top, t.offset().left - e.offset().left]
                },
                nt = function () {
                    var t = function () {
                        var t = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var e = 0; e < t.length; e++)
                            if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                        return null
                    }();
                    return !!t && document[t]
                };
            t.fn[i] = function (e) {
                return h[e] ? h[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : h.init.apply(this, arguments)
            }, t[i] = function (e) {
                return h[e] ? h[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : h.init.apply(this, arguments)
            }, t[i].defaults = a, window[i] = !0, t(window).bind("load", function () {
                t(o)[i](), t.extend(t.expr[":"], {
                    mcsInView: t.expr[":"].mcsInView || function (e) {
                        var i, n, o = t(e),
                            a = o.parents(".mCSB_container");
                        if (a.length) return i = a.parent(), (n = [a[0].offsetTop, a[0].offsetLeft])[0] + it(o)[0] >= 0 && n[0] + it(o)[0] < i.height() - o.outerHeight(!1) && n[1] + it(o)[1] >= 0 && n[1] + it(o)[1] < i.width() - o.outerWidth(!1)
                    },
                    mcsInSight: t.expr[":"].mcsInSight || function (e, i, n) {
                        var o, a, r, s, l = t(e),
                            d = l.parents(".mCSB_container"),
                            u = "exact" === n[3] ? [
                                [1, 0],
                                [1, 0]
                            ] : [
                                [.9, .1],
                                [.6, .4]
                            ];
                        if (d.length) return o = [l.outerHeight(!1), l.outerWidth(!1)], r = [d[0].offsetTop + it(l)[0], d[0].offsetLeft + it(l)[1]], a = [d.parent()[0].offsetHeight, d.parent()[0].offsetWidth], r[0] - a[0] * (s = [o[0] < a[0] ? u[0] : u[1], o[1] < a[1] ? u[0] : u[1]])[0][0] < 0 && r[0] + o[0] - a[0] * s[0][1] >= 0 && r[1] - a[1] * s[1][0] < 0 && r[1] + o[1] - a[1] * s[1][1] >= 0
                    },
                    mcsOverflow: t.expr[":"].mcsOverflow || function (e) {
                        var i = t(e).data(n);
                        if (i) return i.overflowed[0] || i.overflowed[1]
                    }
                })
            })
        }()
}),
function (t, e, i, n) {
    function o(e, i) {
        this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        }, this)), t.each(o.Plugins, t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(o.Workers, t.proxy(function (e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    o.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, o.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, o.Type = {
        Event: "event",
        State: "state"
    }, o.Plugins = {}, o.Workers = [{
        filter: ["width", "settings"],
        run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                n = this.settings.rtl,
                o = {
                    width: "auto",
                    "margin-left": n ? e : "",
                    "margin-right": n ? "" : e
                };
            !i && this.$stage.children().css(o), t.css = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                n = this._items.length,
                o = !this.settings.autoWidth,
                a = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, a[n] = o ? e * i : this._items[n].width();
            this._widths = a
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            var e = [],
                i = this._items,
                n = this.settings,
                o = Math.max(2 * n.items, 4),
                a = 2 * Math.ceil(i.length / 2),
                r = n.loop && i.length ? n.rewind ? o : Math.max(o, a) : 0,
                s = "",
                l = "";
            for (r /= 2; r > 0;) e.push(this.normalize(e.length / 2, !0)), s += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l, r -= 1;
            this._clones = e, t(s).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, o = 0, a = []; ++i < e;) n = a[i - 1] || 0, o = this._widths[this.relative(i)] + this.settings.margin, a.push(n + o * t);
            this._coordinates = a
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                n = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, n.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function () {
            var t, e, i, n, o = this.settings.rtl ? 1 : -1,
                a = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + a,
                s = r + this.width() * o,
                l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + a * o, (this.op(t, "<=", r) && this.op(t, ">", s) || this.op(e, "<", r) && this.op(e, ">", s)) && l.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], o.prototype.initializeStage = function () {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()))
    }, o.prototype.initializeItems = function () {
        var e = this.$element.find(".owl-item");
        if (e.length) return this._items = e.get().map(function (e) {
            return t(e)
        }), this._mergers = this._items.map(function () {
            return 1
        }), void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }, o.prototype.initialize = function () {
        var t, e, i;
        this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t)), this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, o.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, o.prototype.setup = function () {
        var e = this.viewport(),
            i = this.options.responsive,
            n = -1,
            o = null;
        i ? (t.each(i, function (t) {
            t <= e && t > n && (n = Number(t))
        }), "function" == typeof (o = t.extend({}, this.options, i[n])).stagePadding && (o.stagePadding = o.stagePadding()), delete o.responsive, o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : o = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: o
            }
        }), this._breakpoint = n, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, o.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, o.prototype.prepare = function (e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, o.prototype.update = function () {
        for (var e = 0, i = this._pipe.length, n = t.proxy(function (t) {
                return this[t]
            }, this._invalidated), o = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(o), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, o.prototype.width = function (t) {
        switch (t = t || o.Width.Default) {
            case o.Width.Inner:
            case o.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, o.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, o.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, o.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, o.prototype.registerEventHandlers = function () {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, o.prototype.onDragStart = function (e) {
        var n = null;
        3 !== e.which && (t.support.transform ? n = {
            x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4],
            y: n[16 === n.length ? 13 : 5]
        } : (n = this.$stage.position(), n = {
            x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
            y: n.top
        }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
            var n = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, o.prototype.onDragMove = function (t) {
        var e = null,
            i = null,
            n = null,
            o = this.difference(this._drag.pointer, this.pointer(t)),
            a = this.difference(this._drag.stage.start, o);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, a.x = ((a.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * o.x / 5 : 0, a.x = Math.max(Math.min(a.x, e + n), i + n)), this._drag.stage.current = a, this.animate(a.x))
    }, o.prototype.onDragEnd = function (e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)),
            o = this._drag.stage.current,
            a = n.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(o.x, 0 !== n.x ? a : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = a, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, o.prototype.closest = function (e, i) {
        var o = -1,
            a = this.width(),
            r = this.coordinates();
        return this.settings.freeDrag || t.each(r, t.proxy(function (t, s) {
            return "left" === i && e > s - 30 && e < s + 30 ? o = t : "right" === i && e > s - a - 30 && e < s - a + 30 ? o = t + 1 : this.op(e, "<", s) && this.op(e, ">", r[t + 1] !== n ? r[t + 1] : s - a) && (o = "left" === i ? t + 1 : t), -1 === o
        }, this)), this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? o = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (o = e = this.maximum())), o
    }, o.prototype.animate = function (e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : i ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, o.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, o.prototype.current = function (t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, o.prototype.invalidate = function (e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (t, e) {
            return e
        })
    }, o.prototype.reset = function (t) {
        (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, o.prototype.normalize = function (t, e) {
        var i = this._items.length,
            o = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = n : (t < 0 || t >= i + o) && (t = ((t - o / 2) % i + i) % i + o / 2), t
    }, o.prototype.relative = function (t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, o.prototype.maximum = function (t) {
        var e, i, n, o = this.settings,
            a = this._coordinates.length;
        if (o.loop) a = this._clones.length / 2 + this._items.length - 1;
        else if (o.autoWidth || o.merge) {
            if (e = this._items.length)
                for (i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n););
            a = e + 1
        } else a = o.center ? this._items.length - 1 : this._items.length - o.items;
        return t && (a -= this._clones.length / 2), Math.max(a, 0)
    }, o.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, o.prototype.items = function (t) {
        return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, o.prototype.mergers = function (t) {
        return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, o.prototype.clones = function (e) {
        var i = this._clones.length / 2,
            o = i + this._items.length,
            a = function (t) {
                return t % 2 == 0 ? o + t / 2 : i - (t + 1) / 2
            };
        return e === n ? t.map(this._clones, function (t, e) {
            return a(e)
        }) : t.map(this._clones, function (t, i) {
            return t === e ? a(i) : null
        })
    }, o.prototype.speed = function (t) {
        return t !== n && (this._speed = t), this._speed
    }, o.prototype.coordinates = function (e) {
        var i, o = 1,
            a = e - 1;
        return e === n ? t.map(this._coordinates, t.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (o = -1, a = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[a] || 0)) / 2 * o) : i = this._coordinates[a] || 0, i = Math.ceil(i))
    }, o.prototype.duration = function (t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, o.prototype.to = function (t, e) {
        var i = this.current(),
            n = null,
            o = t - this.relative(i),
            a = (o > 0) - (o < 0),
            r = this._items.length,
            s = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(o) > r / 2 && (o += -1 * a * r), (n = (((t = i + o) - s) % r + r) % r + s) !== t && n - o <= l && n - o > 0 && (i = n - o, t = n, this.reset(i))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(s, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
    }, o.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, o.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, o.prototype.onTransitionEnd = function (t) {
        if (t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, o.prototype.viewport = function () {
        var n;
        return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
    }, o.prototype.replace = function (e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
            return 1 === this.nodeType
        }).each(t.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, o.prototype.add = function (e, i) {
        var o = this.relative(this._current);
        i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: i
        }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[o] && this.reset(this._items[o].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: i
        })
    }, o.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, o.prototype.preloadAutoWidthImages = function (e) {
        e.each(t.proxy(function (e, i) {
            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function (t) {
                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, o.prototype.destroy = function () {
        for (var n in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, o.prototype.op = function (t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case "<":
                return n ? t > i : t < i;
            case ">":
                return n ? t < i : t > i;
            case ">=":
                return n ? t <= i : t >= i;
            case "<=":
                return n ? t >= i : t <= i
        }
    }, o.prototype.on = function (t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, o.prototype.off = function (t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, o.prototype.trigger = function (e, i, n, a, r) {
        var s = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            l = t.camelCase(t.grep(["on", e, n], function (t) {
                return t
            }).join("-").toLowerCase()),
            d = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, s, i));
        return this._supress[e] || (t.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(d)
        }), this.register({
            type: o.Type.Event,
            name: e
        }), this.$element.trigger(d), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, d)), d
    }, o.prototype.enter = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, o.prototype.leave = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e]--
        }, this))
    }, o.prototype.register = function (e) {
        if (e.type === o.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function (t) {
                    return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (i, n) {
            return t.inArray(i, this._states.tags[e.name]) === n
        }, this)))
    }, o.prototype.suppress = function (e) {
        t.each(e, t.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, o.prototype.release = function (e) {
        t.each(e, t.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, o.prototype.pointer = function (t) {
        var i = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, o.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
    }, o.prototype.difference = function (t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, t.fn.owlCarousel = function (e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var n = t(this),
                a = n.data("owl.carousel");
            a || (a = new o(this, "object" == typeof e && e), n.data("owl.carousel", a), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, i) {
                a.register({
                    type: o.Type.Event,
                    name: i
                }), a.$element.on(i + ".owl.carousel.core", t.proxy(function (t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), a[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, a))
            })), "string" == typeof e && "_" !== e.charAt(0) && a[e].apply(a, i)
        })
    }, t.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document),
function (t, e, i, n) {
    var o = function (e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, o.prototype.watch = function () {
        this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, o.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, o.prototype.destroy = function () {
        var t, i;
        for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
}(window.Zepto || window.jQuery, window, document),
function (t, e, i, n) {
    var o = function (e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * n || 0, a = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + o, r = this._core.clones().length, s = t.proxy(function (t, e) {
                            this.load(e)
                        }, this); o++ < n;) this.load(r / 2 + this._core.relative(a)), r && t.each(this._core.clones(this._core.relative(a)), s), a++
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
        lazyLoad: !1
    }, o.prototype.load = function (i) {
        var n = this._core.$stage.children().eq(i),
            o = n && n.find(".owl-lazy");
        !o || t.inArray(n.get(0), this._loaded) > -1 || (o.each(t.proxy(function (i, n) {
            var o, a = t(n),
                r = e.devicePixelRatio > 1 && a.attr("data-src-retina") || a.attr("data-src") || a.attr("data-srcset");
            this._core.trigger("load", {
                element: a,
                url: r
            }, "lazy"), a.is("img") ? a.one("load.owl.lazy", t.proxy(function () {
                a.css("opacity", 1), this._core.trigger("loaded", {
                    element: a,
                    url: r
                }, "lazy")
            }, this)).attr("src", r) : a.is("source") ? a.one("load.owl.lazy", t.proxy(function () {
                this._core.trigger("loaded", {
                    element: a,
                    url: r
                }, "lazy")
            }, this)).attr("srcset", r) : ((o = new Image).onload = t.proxy(function () {
                a.css({
                    "background-image": 'url("' + r + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: a,
                    url: r
                }, "lazy")
            }, this), o.src = r)
        }, this)), this._loaded.push(n.get(0)))
    }, o.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = o
}(window.Zepto || window.jQuery, window, document),
function (t, e, i, n) {
    var o = function (i) {
        this._core = i, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && (console.log("update called"), this.update())
            }, this),
            "loaded.owl.lazy": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var n = this;
        t(e).on("load", function () {
            n._core.settings.autoHeight && n.update()
        }), t(e).resize(function () {
            n._core.settings.autoHeight && (null != n._intervalId && clearTimeout(n._intervalId), n._intervalId = setTimeout(function () {
                n.update()
            }, 250))
        })
    };
    o.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, o.prototype.update = function () {
        var e, i = this._core._current,
            n = i + this._core.settings.items,
            o = this._core.$stage.children().toArray().slice(i, n),
            a = [];
        t.each(o, function (e, i) {
            a.push(t(i).height())
        }), e = Math.max.apply(null, a), this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)
    }, o.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
}(window.Zepto || window.jQuery, window, document),
function (t, e, i, n) {
    var o = function (e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
            this.play(t)
        }, this))
    };
    o.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, o.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            o = t.attr("data-width") || this._core.settings.videoWidth,
            a = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if ((n = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
        else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
            if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        n = n[6], this._videos[r] = {
            type: i,
            id: n,
            width: o,
            height: a
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, o.prototype.thumbnail = function (e, i) {
        var n, o, a = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            r = e.find("img"),
            s = "src",
            l = "",
            d = this._core.settings,
            u = function (t) {
                '<div class="owl-video-play-icon"></div>',
                n = d.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + s + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>',
                e.after(n),
                e.after('<div class="owl-video-play-icon"></div>')
            };
        if (e.wrap('<div class="owl-video-wrapper"' + a + "></div>"), this._core.settings.lazyLoad && (s = "data-src", l = "owl-lazy"), r.length) return u(r.attr(s)), r.remove(), !1;
        "youtube" === i.type ? (o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(o)) : "vimeo" === i.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                o = t[0].thumbnail_large, u(o)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                o = t.framegrab_url, u(o)
            }
        })
    }, o.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, o.prototype.play = function (e) {
        var i, n = t(e.target).closest("." + this._core.settings.itemClass),
            o = this._videos[n.attr("data-video")],
            a = o.width || "100%",
            r = o.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), "youtube" === o.type ? i = '<iframe width="' + a + '" height="' + r + '" src="//www.youtube.com/embed/' + o.id + "?autoplay=1&rel=0&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type ? i = '<iframe src="//player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + a + '" height="' + r + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === o.type && (i = '<iframe frameborder="0"height="' + r + '"width="' + a + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + o.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
    }, o.prototype.isInFullScreen = function () {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, o.prototype.destroy = function () {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = o
}(window.Zepto || window.jQuery, window, document),
function (t, e, i, n) {
    var o = function (e) {
        this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": t.proxy(function (t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    o.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, o.prototype.swap = function () {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                n = this.core.$stage.children().eq(this.previous),
                o = this.core.$stage.children().eq(this.next),
                a = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(r)), a && o.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(a))
        }
    }, o.prototype.clear = function (e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, o.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
}(window.Zepto || window.jQuery, window, document),
function (t, e, i, n) {
    var o = function (e) {
        this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": t.proxy(function (t, e, i) {
                t.namespace && this.play(e, i)
            }, this),
            "stop.owl.autoplay": t.proxy(function (t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, o.Defaults, this._core.options)
    };
    o.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, o.prototype._next = function (n) {
        this._call = e.setTimeout(t.proxy(this._next, this, n), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed)
    }, o.prototype.read = function () {
        return (new Date).getTime() - this._time
    }, o.prototype.play = function (i, n) {
        var o;
        this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, o = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - o, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, n), i - o)
    }, o.prototype.stop = function () {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
    }, o.prototype.pause = function () {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
    }, o.prototype.destroy = function () {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = o
}(window.Zepto || window.jQuery, window, document),
function (t, e, i, n) {
    "use strict";
    var o = function (e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    o.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, o.prototype.initialize = function () {
        var e, i = this._core.settings;
        for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function (t) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function (t) {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function (e) {
                var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(n, i.dotsSpeed)
            }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
    }, o.prototype.destroy = function () {
        var t, e, i, n, o;
        for (t in o = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) "$relative" === e && o.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, o.prototype.update = function () {
        var t, e, i = this._core.clones().length / 2,
            n = i + this._core.items().length,
            o = this._core.maximum(!0),
            a = this._core.settings,
            r = a.center || a.autoWidth || a.dotsData ? 1 : a.dotsEach || a.items;
        if ("page" !== a.slideBy && (a.slideBy = Math.min(a.slideBy, a.items)), a.dots || "page" == a.slideBy)
            for (this._pages = [], t = i, e = 0; t < n; t++) {
                if (e >= r || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(o, t - i),
                            end: t - i + r - 1
                        }), Math.min(o, t - i) === o) break;
                    e = 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, o.prototype.draw = function () {
        var e, i = this._core.settings,
            n = this._core.items().length <= i.items,
            o = this._core.relative(this._core.current()),
            a = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !a && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !a && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, o.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, o.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function (t, i) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, o.prototype.getPosition = function (e) {
        var i, n, o = this._core.settings;
        return "page" == o.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += o.slideBy : i -= o.slideBy), i
    }, o.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, o.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, o.prototype.to = function (e, i, n) {
        var o;
        !n && this._pages.length ? (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = o
}(window.Zepto || window.jQuery, window, document),
function (t, e, i, n) {
    "use strict";
    var o = function (i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = e.content
                }
            }, this),
            "changed.owl.carousel": t.proxy(function (i) {
                if (i.namespace && "position" === i.property.name) {
                    var n = this._core.items(this._core.relative(this._core.current())),
                        o = t.map(this._hashes, function (t, e) {
                            return t === n ? e : null
                        }).join();
                    if (!o || e.location.hash.slice(1) === o) return;
                    e.location.hash = o
                }
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function (t) {
            var i = e.location.hash.substring(1),
                n = this._core.$stage.children(),
                o = this._hashes[i] && n.index(this._hashes[i]);
            void 0 !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
        }, this))
    };
    o.Defaults = {
        URLhashListener: !1
    }, o.prototype.destroy = function () {
        var i, n;
        for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = o
}(window.Zepto || window.jQuery, window, document),
function (t, e, i, n) {
    var o = t("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        r = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        };

    function s(e, i) {
        var r = !1,
            s = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(s + " ") + s).split(" "), function (t, e) {
            if (o[e] !== n) return r = !i || e, !1
        }), r
    }

    function l(t) {
        return s(t, !0)
    }!!s("transition") && (t.support.transition = new String(l("transition")), t.support.transition.end = r.transition.end[t.support.transition]), !!s("animation") && (t.support.animation = new String(l("animation")), t.support.animation.end = r.animation.end[t.support.animation]), s("transform") && (t.support.transform = new String(l("transform")), t.support.transform3d = !!s("perspective"))
}(window.Zepto || window.jQuery, window, document), $(function () {
    jQuery("img.svg").each(function () {
        var t = jQuery(this),
            e = t.attr("id"),
            i = t.attr("class"),
            n = t.attr("src");
        jQuery.get(n, function (n) {
            var o = jQuery(n).find("svg");
            void 0 !== e && (o = o.attr("id", e)), void 0 !== i && (o = o.attr("class", i + " replaced-svg")), !(o = o.removeAttr("xmlns:a")).attr("viewBox") && o.attr("height") && o.attr("width") && o.attr("viewBox", "0 0 " + o.attr("height") + " " + o.attr("width")), t.replaceWith(o)
        }, "xml")
    })
}), $(".left-menu-list > li > a").click(function () {
    $(this).parent("li").toggleClass("active").siblings().removeClass("active")
}), $(".menu-collapse").click(function () {
    $(this).children("i").toggleClass("fa-chevron-right"), $(this).parent().toggleClass("active"), $(".left-menu").toggleClass("active"), $(".collapse-row").toggleClass("active"), $(".main-section").toggleClass("active")
}), $(".menu").click(function () {
    $(".mobile-menu").toggle()
}), $(window).resize(function () {
    $(window).width() < 1280 ? ($(".logo-menu").addClass("active"), $(".collapse-row").addClass("active"), $(".left-menu").addClass("active"), $(".main-section").addClass("active")) : ($(".logo-menu").removeClass("active"), $(".collapse-row").removeClass("active"), $(".left-menu").removeClass("active"), $(".main-section").removeClass("active"))
}).resize(), $(".selectble-box").on("click", function (t) {
    t.stopPropagation(), $(".multi-select-box").removeClass("active"), $(this).parent(".multi-select-box").toggleClass("active")
}), $(".multi-select-box").click(function (t) {
    t.stopPropagation()
}), $(document).click(function () {
    $(".multi-select-box").removeClass("active")
}), $(".search-input-team").on("keyup", function () {
    var t = $(this).val().toLowerCase();
    $(".select-list ul.team > li").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(t) > -1)
    })
}), $(".search-input-testType").on("keyup", function () {
    var t = $(this).val().toLowerCase();
    $(".select-list ul.testType > li").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(t) > -1)
    })
}), $(function () {
    $('[data-toggle="tooltip"]').tooltip()
}), $(function () {
    $('[data-toggle="popover"]').popover()
});