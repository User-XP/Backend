if ("object" == typeof CE2 && CE2.uid) throw Error("CE: multiple userscripts installed");
"undefined" == typeof CE2 && (CE2 = {}), CE2.uid = 851990, CE2.USER_SCRIPT_VERSION = 1585183807, CE2.__CE_HOST__ = "https://app.crazyegg.com", "undefined" == typeof CE2 && (CE2 = {}), CE2.ignoredElements = [], CE2.clickCaptors = [], CE2.d = document, CE2.w = window, CE2.n = navigator, CE2.p = {},
    function () {
        var e = CE2.n.userAgent;
        /\bMSIE\b/.test(e) && (CE2.ie = 1, CE2.ieVersion = parseInt(/MSIE (\d+)\.\d+/.exec(e)[1], 10), CE2.ieQuirksMode = "BackCompat" == CE2.d.compatMode)
    }(), CE2.ignore = function (e) {
        e && (CE2.ignoredElements.push(e), CE2.tracker && CE2.tracker.ignoredElements.push(e))
    }, CE2.capture = function (e) {
        CE2.clickCaptors.push(e), CE2.tracker && CE2.tracker.clickCaptors.push(e)
    }, CE2.findMatchingSnapshot = function (e, t, n, r, i, o) {
        var s, a, c, u;
        if (e && e.length) {
            for (s = Math.floor((+new Date + CE2._sampling.getDiffTime()) / 1e3), a = 0; c = e[a++];) c.e && c.e <= s || n && !/n/.test(c.o || "") || i && !/go/.test(c.o || "") || CE2.isMatchingSnapshot(c, t, n, r, i, o) && (c.s && c.s > s ? CE2.p[c.id] = c : u || (u = c));
            return u
        }
    }, CE2.isMatchingSnapshot = function (e, t, n, r, i, o) {
        return void 0 === e.isBlocked && (e.isBlocked = new CE2.IPBlockList(e.ip).blocked(o)), !e.isBlocked && (!(11 <= e.v && CE2.isBot()) && (r ? r == e.vid : !(!r && e.vid) && (i ? CE2.matchURL(e.u, i, e.o, e.d, CE2.n.userAgent) : CE2.matchURL(e.u, n || t, e.o, e.d, CE2.n.userAgent))))
    }, CE2.startTracking = function (e, t) {
        var n, r = CE2.V11Tracker,
            i = 11;
        e && 6 <= e.v && e.v <= 7 && (r = CE2.V6Tracker, i = 6);
        var o = [];
        e && o.push("SNAPSHOT_ID=" + e.id), t && o.push("SESSION=" + t), CE2.debug("Preparing Tracker TRACKER=" + i + " " + o.join(" ")), e && CE2.sampleVisit(e) && (n = e.id, CE2.testID = e.id, CE2.testVersion = e.v || 1), n || t ? (CE2.debug("Starting V" + i + "Tracker"), CE2.tracker && CE2.tracker.cleanup(), CE2.tracker = new r(i, n, t)) : CE2.debug("No tracker started.")
    }, CE2.unescape = function (t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {
            return unescape(t)
        }
    }, CE2.qs2obj = function (e, t) {
        if (null == e || /^\s*$/.test(e)) return null;
        var n, r, i = {},
            o = null,
            s = e.replace(/\+/g, " ").split(t || "&");
        for (n = 0, r = s.length; n < r; n++)(o = s[n].split("="))[0] && (i[CE2.unescape(o[0])] = null == o[1] ? null : CE2.unescape(o[1]));
        return i
    }, CE2.each = function (e, t, n) {
        var r, i;
        if (e)
            if ("number" == typeof e.length && "function" == typeof e.concat)
                for (var o = 0, s = e.length; o < s && (r = e[o], !1 !== t.call(n, r, o)); o++);
            else
                for (i in e)
                    if ((r = e[i]) !== Object.prototype[i] && !1 === t.call(n, r, i)) break
    }, CE2.indexOf = function (e, t, n) {
        var r, i;
        for (r = n || 0, i = e.length; r < i; r++)
            if (e[r] === t) return r;
        return -1
    }, CE2.listen = CE2.addListener = function (e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent("on" + t, n)
    }, CE2.removeListener = function (e, t, n) {
        e.removeEventListener ? e.removeEventListener(t, n, !0) : e.detachEvent("on" + t, n)
    }, CE2.userData = {}, CE2.set = function (e, t) {
        1 <= (e = parseInt(e, 10)) && e <= 5 && (CE2.userData[e] = t + "")
    }, CE2.click = function () {
        if (CE2.tracker) return CE2.tracker.click.apply(CE2.tracker, arguments)
    }, CE2.getBox || (CE2.getBox = function () {}), CE2.sampleVisit = function (e) {
        return null == e.r || (!1 !== e.r && !0 !== e.r && (Math.random() >= 1 / e.r ? e.r = !1 : e.r = !0), e.r)
    }, CE2.dontTrack = function (e, t, n, r) {
        if (r && void 0 !== e.external) try {
            if (!0 === e.external.InPrivateFilteringEnabled()) return !0
        } catch (e) {}
        var i = t.doNotTrack || n.doNotTrack || n.msDoNotTrack || e.doNotTrack;
        return "1" == i || "yes" == i
    }, CE2.cookies = function () {
        try {
            return CE2.qs2obj(document.cookie, /;\s*/g) || {}
        } catch (e) {
            return {}
        }
    }(), CE2.writeCookie = function (e, t, n) {
        n || (n = {});
        var r = encodeURIComponent,
            i = CE2.cookies,
            o = n.path || "/",
            s = n.domain || new CE2.URI(CE2.w.location.href).getDomain(),
            a = null;
        n.expires ? a = n.expires : n.expiresIn ? a = new Date((new Date).getTime() + 1e3 * n.expiresIn) : n.expiresInDays && (a = new Date((new Date).getTime() + 86400 * n.expiresInDays * 1e3)), null == t ? (delete i[e], a = new Date(0), t = "") : i[e] = t;
        var c = [r(e) + "=" + r(t)];
        c.push("path=" + o), c.push("SameSite=Strict"), s && c.push("domain=" + s), a && c.push("expires=" + a.toUTCString()), document.cookie = c.join(";")
    }, CE2.deleteCookie = function (e, t) {
        CE2.writeCookie(e, null, t)
    }, CE2.parseJSON = function (src) {
        return void 0 !== JSON && "function" == typeof JSON.parse ? JSON.parse(src) : eval("(" + src + ")")
    }, CE2.convertToFormData = function (e) {
        for (var t = new FormData, n = Object.keys(e), r = 0; r < n.length; r++) t.append(n[r], e[n[r]]);
        return t
    }, CE2.dasherize = function (e) {
        return "string" == typeof e ? e.replace(/([a-z\d])([A-Z])/g, "$1_$2").toLowerCase().replace(/[ _]/g, "-") : e
    }, CE2.matchSite = function (e, t) {
        return CE2.re.ipHost.test(e) ? e === t : RegExp("(^|\\.)" + e + "$", "i").test(t)
    }, CE2.normalizeSiteName = function (e) {
        var t = document.createElement("a");
        return t.href = "http://" + e + "/", t.hostname
    }, CE2.getCurrentSite = function (e) {
        var t, n;
        for (n = 0; t = e[n++];)
            if (CE2.matchSite(CE2.normalizeSiteName(t.name), location.hostname)) return t
    }, CE2.matchURLRules = function (e) {
        var t, n;
        if (e && e.length)
            for (t = 0; n = e[t++];)
                if (CE2.matchURL(n.u, location.href, n.o)) return !0;
        return !1
    }, "undefined" == typeof CE2 && (CE2 = {}), CE2.browser = function () {
        var e = navigator.userAgent;
        CE2.opera = CE2.ie = CE2.chrome = CE2.safari = CE2.firefox = !1;
        var t = "unknown";
        return CE2.w.opera && "function" == typeof CE2.w.opera.version ? (t = "opera", CE2.opera = !0, CE2.operaVersion = parseInt(opera.version(), 10)) : /\bMSIE\b/.test(e) ? (t = "ie", CE2.ie = !0, CE2.ieVersion = parseInt(/MSIE (\d+)\.\d+/.exec(navigator.userAgent)[1], 10), CE2.ieQuirksMode = "BackCompat" == document.compatMode) : /\b(iPhone|iP[ao]d)\b/.test(e) ? (t = "iphone", CE2.iphone = !0, CE2.webkit = !0) : /\bChrome\b/.test(e) ? (t = "chrome", CE2.chrome = !0, CE2.webkit = !0) : /AppleWebKit/.test(navigator.appVersion) ? (t = "safari", CE2.safari = !0, CE2.webkit = !0) : /Mozilla/i.test(e) && !/compatible|webkit/i.test(e) && (t = "firefox", CE2.firefox = !0), CE2.webkit && (CE2.webkitVersion = parseInt(/AppleWebKit\/(\d+)/.exec(e)[1], 10)), t
    }(), CE2.findByClass = function (e) {
        var t, n, r, i, o = [],
            s = CE2.d.body;
        if (s.getElementsByClassName ? r = s.getElementsByClassName(e) : s.querySelectorAll && (r = s.querySelectorAll("." + e)), r)
            for (t = 0; n = r[t++];) o.push(n);
        else
            for (r = s.getElementsByTagName("*"), i = RegExp("(^|\\s)" + e + "($|\\s)"), t = 0; n = r[t++];) n.className && i.test(n.className) && o.push(n);
        return o
    }, CE2.formatClass = function (e) {
        var t = e.className;
        if (t && "string" == typeof t) return (t = CE2.strip(t.replace(/(\s|^)-ce-capture\b/g, "")).split(/\s+/)).sort(), t.join(" ")
    }, CE2.href = function (e) {
        if (!CE2.ie) return e.getAttribute("href");
        var t = e.outerHTML.match(CE2.re.href);
        return t ? CE2.strip(t[1]) : void 0
    }, CE2.src = function (e) {
        return /^\s*data:/.test(e) ? CE2.strip(e).substr(0, 100) : new CE2.URI(e).simplify()
    }, CE2.map = function (e, t, n) {
        for (var r = [], i = 0, o = e.length; i < o; i++) r.push(t.call(n, e[i]));
        return r
    }, CE2.spansLines = function (e) {
        return e.getClientRects && 1 < e.getClientRects().length
    }, CE2.eventCoords = function (e, t) {
        if (null != e.pageX) return [e.pageX, e.pageY];
        var n = CE2.scroll(t);
        return [e.clientX + n.left, e.clientY + n.top]
    }, CE2.contains = function (e, t) {
        if (e == t) return !0;
        if ("function" == typeof e.contains) return e.contains(t);
        for (var n = t;
            (n = n.parentNode) && n != document.body && n != e;);
        return n == e
    }, CE2.arrayContains = function (e, t) {
        var n, r;
        if (e && e.length)
            for (n = 0; r = e[n++];)
                if (CE2.contains(r, t)) return r
    }, CE2.isVML = function (e) {
        return "string" == typeof e.tagUrn && 0 <= e.tagUrn.indexOf("vml")
    }, CE2.bind = function (e, t) {
        var n = e[t];
        return function () {
            try {
                return n.apply(e, arguments)
            } catch (e) {}
        }
    }, CE2.TIME_RANGES = [500, 1e3, 1500, 2e3, 3e3, 4e3, 5e3, 6e3, 8e3, 1e4, 15e3, 2e4, 3e4, 35e3, 4e4, 6e4, 9e4, 12e4, 18e4, 24e4, 3e5, 42e4, 6e5, 9e5, 12e5, 15e5, 18e5, 24e5, 3e6, 36e5, 72e5, 108e5, Number.MAX_VALUE], CE2.getTimeRange = function (e) {
        for (var t = CE2.TIME_RANGES, n = 0, r = t.length; n < r; n++)
            if (e < t[n] && (0 == n || e >= t[n - 1])) return n + 1
    }, CE2.eventWindow = function (e) {
        return e.source || e.view || e.srcElement.ownerDocument.parentWindow
    }, CE2.getStyle = function (e) {
        var t = CE2.w,
            n = t.getComputedStyle;
        return n ? n.call(t, e, null) : e.currentStyle
    }, CE2.querySelectorAll = function (e, t) {
        var n = CE2.d;
        if (n.querySelectorAll) return t ? n.querySelector(e) : n.querySelectorAll(e);
        var r, i, o = [],
            s = n.all,
            a = n.createStyleSheet();
        for (r = (e = e.split(/\s*,\s*/)).length; r--;) {
            for (a.addRule(e[r], "k:v"), i = s.length; i--;)
                if (s[i].currentStyle.k) {
                    if (t) return s[i];
                    o.push(s[i])
                } a.removeRule(0)
        }
        return t ? null : o
    }, CE2.makeId = function (e, t) {
        var n, r, i, o = CE2.w.crypto,
            s = "function" == typeof CE2.w.btoa && CE2.w.btoa,
            a = "";
        if (e = e || 20, o && o.getRandomValues) n = new Uint8Array(e), o.getRandomValues(n);
        else
            for (n = Array(e), r = 0; r < e; r++) n[r] = Math.floor(256 * Math.random());
        if (t && s) return s(a = CE2.map(n, function (e) {
            return String.fromCharCode(e)
        }).join("")).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=+$/, "");
        for (r = 0; r < e; r++) a += (i = n[r].toString(16)).length < 2 ? "0" + i : i;
        return a
    }, CE2.hasAccessToFrame = function (e) {
        var t = "key_" + +new Date;
        try {
            var n = e.contentWindow,
                r = (n[t] = "temp") === n[t];
            return r && delete n[t], r
        } catch (e) {
            return !1
        }
    }, CE2.assign = function (e) {
        if (1 === arguments.length) return e;
        var t = Array.prototype.slice.call(arguments),
            n = t[1];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        return t.splice(1, 1), CE2.assign.apply(this, t)
    }, CE2.isVisible = function (e) {
        var t = CE2.getStyle(e);
        return "none" !== t.display && ("hidden" !== t.visibility && (!(t.opacity < .1) && (!e.parentElement || CE2.isVisible(e.parentElement))))
    }, "undefined" == typeof CE2 && (CE2 = {}), CE2.SPIRAL = [
        [.4, .4],
        [.5, .4],
        [.5, .5],
        [.4, .5],
        [.3, .5],
        [.3, .4],
        [.3, .3],
        [.4, .3],
        [.5, .3],
        [.6, .3],
        [.6, .4],
        [.6, .5],
        [.6, .6],
        [.5, .6],
        [.4, .6],
        [.3, .6],
        [.2, .6],
        [.2, .5],
        [.2, .4],
        [.2, .3],
        [.2, .2],
        [.3, .2],
        [.4, .2],
        [.5, .2],
        [.6, .2],
        [.7, .2],
        [.7, .3],
        [.7, .4],
        [.7, .5],
        [.7, .6],
        [.7, .7],
        [.6, .7],
        [.5, .7],
        [.4, .7],
        [.3, .7],
        [.2, .7],
        [.1, .7],
        [.1, .6],
        [.1, .5],
        [.1, .4],
        [.1, .3],
        [.1, .2],
        [.1, .1],
        [.2, .1],
        [.3, .1],
        [.4, .1],
        [.5, .1],
        [.6, .1],
        [.7, .1],
        [.8, .1],
        [.8, .2],
        [.8, .3],
        [.8, .4],
        [.8, .5],
        [.8, .6],
        [.8, .7],
        [.8, .8],
        [.7, .8],
        [.6, .8],
        [.5, .8],
        [.4, .8],
        [.3, .8],
        [.2, .8],
        [.1, .8],
        [0, .8],
        [0, .7],
        [0, .6],
        [0, .5],
        [0, .4],
        [0, .3],
        [0, .2],
        [0, .1],
        [0, 0],
        [.1, 0],
        [.2, 0],
        [.3, 0],
        [.4, 0],
        [.5, 0],
        [.6, 0],
        [.7, 0],
        [.8, 0],
        [.9, 0],
        [.9, .1],
        [.9, .2],
        [.9, .3],
        [.9, .4],
        [.9, .5],
        [.9, .6],
        [.9, .7],
        [.9, .8],
        [.9, .9],
        [.8, .9],
        [.7, .9],
        [.6, .9],
        [.5, .9],
        [.4, .9],
        [.3, .9],
        [.2, .9],
        [.1, .9],
        [0, .9]
    ], CE2.dynamicKey = "cedk" + Math.random().toString().replace(/\D/g, ""), CE2.scrollRootKey = "cesrk" + Math.random().toString().replace(/\D/g, ""), CE2.ScrollTracker = function () {
        this.strictAnchorSearch = !0, this.lastRecordedScroll = null, this.lastRecordedTime = 0, this.lastRecordedY = 0, this.idleAt = null, this.idleSince = (new Date).getTime()
    }, CE2.ScrollTracker.prototype = {
        shouldRecordScroll: function (e) {
            var t = e.top,
                n = e.height,
                r = t + ":" + n,
                i = (new Date).getTime();
            if (r == this.lastRecordedScroll) return !1;
            if (r == this.idleAt) {
                if (800 <= i - this.idleSince) return this.lastRecordedScroll = r, this.lastRecordedTime = i, this.lastRecordedY = t, !0
            } else this.idleAt = r, this.idleSince = i;
            return null == this.lastRecordedScroll || Math.abs(t - this.lastRecordedY) > n / 2 && 1600 <= i - this.lastRecordedTime ? (this.lastRecordedScroll = r, this.lastRecordedTime = i, this.lastRecordedY = t, !0) : void 0
        },
        findAnchor: function (e, t) {
            if (!CE2.d.elementFromPoint) return t(e);
            var n, r, i, o, s = this,
                a = 0,
                c = this.strictAnchorSearch,
                u = e.width,
                l = e.height,
                d = function () {
                    if (n = CE2.SPIRAL[a++]) {
                        if (i = (n[0] + .1 * Math.random()) * u, o = (n[1] + .1 * Math.random()) * l, r = CE2.elementFromPoint(i, o, e), CE2.isAnchorElement(r, e, c)) return t(e, r);
                        setTimeout(d, 0)
                    } else a = 0, s.strictAnchorSearch = c = !1, setTimeout(d, 0)
                };
            setTimeout(d, 0)
        }
    }, CE2.scroll = function (e) {
        var t, n, r = CE2.scrollRootKey;
        return n = (e = e || CE2.w).document, e[r + "_path"] !== e.location.pathname && (e[r] = CE2.findScrollRoot(n), e[r + "_path"] = e.location.pathname), {
            left: (t = (t = e[r]) || ("BackCompat" === n.compatMode ? n.body : n.documentElement)).scrollLeft,
            top: t.scrollTop,
            width: e.innerWidth,
            height: e.innerHeight
        }
    }, CE2.findScrollRoot = function (e) {
        if (e.querySelectorAll && "number" == typeof e.body.scrollHeight) {
            var t, n, r, i, o = e.body,
                s = e.defaultView,
                a = e.querySelectorAll("html, body, body > *, body > * > *, body > * > * > *"),
                c = o.getElementsByTagName("*").length;
            for (t = 0, n = Math.min(7e3, a.length); t < n; t++)
                if (!((r = a[t]).clientHeight >= r.scrollHeight) && (r.offsetWidth || r.offsetHeight || r.getClientRects().length) && !(r.getElementsByTagName("*").length / c < .5 || r.clientHeight > window.innerHeight || (i = r.getBoundingClientRect(), Math.floor(i.width || i.right - i.left) < .75 * s.innerWidth || Math.floor(i.height || i.bottom - i.top) < .75 * s.innerHeight))) return r
        }
    }, CE2.isStatic = function (e) {
        var t, n = this.dynamicKey;
        if (e[n]) return !1;
        for (; e && e != CE2.d && e != CE2.d.documentElement && e != CE2.d.body; e = e.parentNode)
            if ((t = CE2.getStyle(e)) && ("absolute" == t.position || "fixed" == t.position)) return !(e[n] = !0);
        return !0
    }, CE2.isAnchorElement = function (e, t, n) {
        if (!e || !e.nodeName) return !1;
        if (e == CE2.d || e == CE2.d.documentElement || e == CE2.d.body) return !1;
        if (CE2.isVML(e)) return !1;
        if (n) {
            if (!CE2.isStatic(e)) return !1;
            if (CE2.getBox(e).height > 2 * t.height) return !1
        }
        return !0
    }, CE2.elementFromPointAbsolute = function (e, t, n) {
        var r = CE2.d.elementFromPoint(e + n.left, t + n.top);
        return r.nodeType === r.TEXT_NODE ? r.parentNode : r
    }, CE2.elementFromPointRelative = function (e, t) {
        return CE2.d.elementFromPoint(e, t)
    }, CE2.elementFromPoint = function () {
        if (CE2.d.elementFromPoint) return CE2.webkit && CE2.webkitVersion < 533 || CE2.opera && CE2.operaVersion < 10 ? CE2.elementFromPoint = CE2.elementFromPointAbsolute : CE2.elementFromPoint = CE2.elementFromPointRelative, CE2.elementFromPoint.apply(CE2, arguments)
    }, "undefined" == typeof CE2 && (CE2 = {}), CE2.re = function () {
        var e = "[\\s\\u00a0\\u2028\\u2029]+";
        return {
            whitespace: RegExp(e, "g"),
            strip: RegExp("^" + e + "|" + e + "$", "g"),
            href: /\bhref="(.*?)"/i,
            ipHost: /^([\d\.]+|\[[a-f\d:]+\])$/i
        }
    }(), CE2.strip = function (e, t) {
        var n = e.replace(CE2.re.strip, "");
        return t ? n.replace(CE2.re.whitespace, " ") : n
    }, CE2.hash = function (e) {
        var t, n, r = 0;
        if (0 == e.length) return r;
        for (t = 0, n = e.length; t < n; t++) r = (r << 5) - r + e.charCodeAt(t), r |= 0;
        return r
    }, "undefined" == typeof CE2 && (CE2 = {}), CE2.getBox = function (e, t, n) {
        var r;
        if (t = t || {}, "AREA" == e.nodeName)(r = CE2.boxForArea(e)) && (t.left = r.left, t.top = r.top, t.width = r.width, t.height = r.height);
        else if (e.getBoundingClientRect) {
            r = e.getBoundingClientRect();
            var i = CE2.scroll();
            t.left = Math.floor(r.left + i.left), t.top = Math.floor(r.top + i.top), CE2.webkit && CE2.webkitVersion < 533 && "relative" == e.style.position && (t.left += parseInt(e.style.left, 10), t.top += parseInt(e.style.top, 10)), t.width = Math.floor(r.width || r.right - r.left), t.height = Math.floor(r.height || r.bottom - r.top)
        } else {
            t.width = e.offsetWidth, t.height = e.offsetHeight;
            for (var o = e, s = 0, a = 0; s += o.offsetLeft || 0, a += o.offsetTop || 0, o = o.offsetParent;);
            t.left = Math.floor(s), t.top = Math.floor(a)
        }
        if (t.pageX = t.left, t.pageY = t.top, n) {
            var c = CE2.getBox(n);
            t.left -= c.pageX, t.top -= c.pageY
        }
        return t
    }, CE2.boxForArea = function (e) {
        var t = CE2.imageForArea(e);
        if (t) {
            var n = CE2.getBox(t),
                r = CE2.areaBounds(e, n);
            return r ? {
                left: n.left + r.left,
                top: n.top + r.top,
                width: r.width,
                height: r.height
            } : void 0
        }
    }, CE2.imageForArea = function (e) {
        var t, n, r = RegExp("(^|#)" + e.parentNode.name, "i"),
            i = e.ownerDocument.getElementsByTagName("IMG");
        for (t = 0; n = i[t++];)
            if (r.test(n.useMap)) return n
    }, CE2.areaBounds = function (e, t) {
        var n, r, i, o = CE2.areaLength,
            s = Math.min(t.width, t.height),
            a = CE2.map(CE2.strip(e.coords, !0).split(/[^\d\.%]+/), function (e) {
                return o(e, s)
            });
        if (!/circle/i.test(e.shape)) {
            n = [], r = [];
            for (var c = 0, u = a.length; c < u; c++) c % 2 ? r.push(a[c]) : n.push(a[c]);
            var l = Math.min.apply(null, n),
                d = Math.max.apply(null, n),
                h = Math.min.apply(null, r);
            return {
                left: l,
                top: h,
                width: d - l,
                height: Math.max.apply(null, r) - h
            }
        }
        if (3 <= a.length) return n = a[0], r = a[1], {
            left: n - (i = a[2]),
            top: r - i,
            width: 2 * i,
            height: 2 * i
        }
    }, CE2.areaLength = function (e, t) {
        var n = parseInt(e, 10);
        return -1 != e.indexOf("%") && (n *= .01 * t), isNaN(n) ? null : n
    }, CE2.getPageCoords = function (e) {
        var t, n;
        e.pageX = e.left, e.pageY = e.top, e.parentID && (t = CE2.d.getElementById(e.parentID + "")) && (n = CE2.getBox(t), e.pageX += n.pageX, e.pageY += n.pageY)
    }, "undefined" == typeof CE2 && (CE2 = {}), CE2.fingerprint = function (e) {
        var t, n, r, i, o, s = {
            type: CE2.tagTypes[e.nodeName.toLowerCase()] || 0
        };
        return (t = CE2.getName(e)) && (s.name = t), (n = CE2.getData(e)) && (s.data = n), (r = e.getAttribute("id")) && (s.id = r), (i = CE2.getCEID(e)) && (s.ceid = i), (o = CE2.getParentID(e)) && (s.parentID = o), CE2.getBox(e, s, o ? e.parentNode : null), s
    }, CE2.getParentID = function (e) {
        var t = e.parentNode,
            n = null;
        if (t && t.getAttribute && t != e.ownerDocument.body) return (n = t.id) && t.ownerDocument.getElementById(n) == t ? n : CE2.getCEID(t) || null
    }, CE2.getCEID = function (e) {
        return e.getAttribute("ceid") || e.getAttribute("data-ceid")
    }, CE2.IGNORE_HREF = /^\s*javascript:|^\s*#\s*$/, CE2.getName = function (e) {
        var t, n;
        return (t = e.getAttribute("cename")) ? t : (t = e.getAttribute("ceid")) ? t : (t = e.getAttribute("title")) ? t : (t = e.getAttribute("alt")) ? t : (t = e.getAttribute("name")) ? t : "A" == e.nodeName && (t = CE2.innerTextName(e)) ? t : (t = CE2.href(e)) && (n = CE2.href(e)) && !CE2.IGNORE_HREF.test(n) ? new CE2.URI(t).simplify() : (t = e.getAttribute("src")) ? CE2.src(t) : (t = CE2.innerTextName(e)) ? t : (t = e.getAttribute("id")) ? t : (t = CE2.fingerprintClass(e)) ? t : ""
    }, CE2.getData = function (e) {
        var t;
        switch (e.nodeName) {
            case "A":
                if ((t = CE2.href(e)) && !CE2.IGNORE_HREF.test(t)) return new CE2.URI(e.href).simplify();
                if (e.className) return "@#" + CE2.fingerprintClass(e);
                break;
            case "IMG":
            case "IFRAME":
            case "EMBED":
                return CE2.src(e.src);
            case "OBJECT":
                return CE2.src(e.data);
            case "INPUT":
            case "SELECT":
            case "TEXTAREA":
                return e.name;
            default:
                return CE2.fingerprintClass(e)
        }
    }, CE2.innerText = function (e) {
        var i = void 0 === e.textContent ? "innerText" : "textContent",
            t = e[i].substr(0, 16384);

        function n(e, t) {
            var n, r;
            for (n = 0; r = t[n++];) e = e.replace(r[i], "");
            return e
        }
        return t = n(t = n(t, e.getElementsByTagName("SCRIPT")), e.getElementsByTagName("NOSCRIPT"))
    }, CE2.innerTextName = function (e, t) {
        if ("TEXTAREA" != e.nodeName) {
            var n = CE2.strip(CE2.strip(CE2.innerText(e), !0).substr(0, t || 100));
            return CE2.strip(n.replace(/[\ud800-\udbff\udc00-\udfff]+$/, ""))
        }
    }, CE2.tagTypes = {
        a: 3,
        abbr: 4,
        acronym: 5,
        address: 6,
        applet: 7,
        area: 8,
        b: 9,
        base: 10,
        basefont: 11,
        bdo: 12,
        big: 13,
        blockquote: 14,
        body: 15,
        br: 16,
        button: 17,
        caption: 18,
        center: 19,
        cite: 20,
        code: 21,
        col: 22,
        colgroup: 23,
        dd: 24,
        del: 25,
        dfn: 26,
        dir: 27,
        div: 28,
        dl: 29,
        dt: 30,
        em: 31,
        fieldset: 32,
        font: 33,
        form: 34,
        frame: 35,
        frameset: 36,
        head: 37,
        h1: 38,
        h2: 38,
        h3: 38,
        h4: 38,
        h5: 38,
        h6: 38,
        hr: 38,
        html: 39,
        i: 40,
        iframe: 41,
        img: 42,
        input: 43,
        ins: 44,
        kbd: 45,
        label: 46,
        legend: 47,
        li: 48,
        link: 49,
        map: 50,
        menu: 51,
        meta: 52,
        noframes: 53,
        noscript: 54,
        object: 55,
        embed: 55,
        ol: 56,
        optgroup: 57,
        option: 58,
        p: 59,
        param: 60,
        pre: 61,
        q: 62,
        s: 63,
        samp: 64,
        script: 65,
        select: 66,
        small: 67,
        span: 68,
        strike: 69,
        strong: 70,
        style: 71,
        sub: 72,
        sup: 73,
        table: 74,
        tbody: 75,
        td: 76,
        textarea: 77,
        tfoot: 78,
        th: 79,
        thead: 80,
        title: 81,
        tr: 82,
        tt: 83,
        u: 84,
        ul: 85,
        var: 86,
        article: 87,
        aside: 88,
        audio: 89,
        bdi: 90,
        canvas: 91,
        command: 92,
        details: 93,
        figcaption: 94,
        figure: 95,
        footer: 96,
        header: 97,
        hgroup: 98,
        keygen: 99,
        mark: 100,
        meter: 101,
        nav: 102,
        output: 103,
        progress: 104,
        rp: 105,
        rt: 106,
        ruby: 107,
        section: 108,
        summary: 109,
        time: 110,
        video: 111,
        svg: 112,
        "(custom)": 255
    }, CE2.CLASS_EXCLUDE_PATTERN = /(-|^)(default|open|hover|close|error|active|focus|valid|invalid|dirty|submitted|expand|collapse|hide|show|enable|disable|on|off|yui|ui)/i, CE2.fingerprintClass = function (e) {
        var t = CE2.formatClass(e);
        if (!t || CE2.testVersion && CE2.testVersion <= 6) return t;
        var n = [];
        return CE2.each(t.split(/\s+/), function (e) {
            e && !CE2.CLASS_EXCLUDE_PATTERN.test(e) && n.push(e)
        }), n.join(" ")
    }, "undefined" == typeof CE2 && (CE2 = {}),
    function () {
        var d = 1,
            u = 2,
            l = 32;

        function h(e) {
            var t, n, r, i = h.getTypeID,
                o = h.encodeTypeIDs,
                s = [],
                a = [],
                c = [];
            for (t = e;;) {
                if (t.previousElementSibling) n = d, t = t.previousElementSibling;
                else {
                    if (!t.parentNode || t.parentNode == document.body || t.parentNode == document.documentElement) break;
                    n = u, t = t.parentNode
                }
                if (s.push({
                        type: i(t),
                        relation: n
                    }), s.length >= l) break
            }
            for (t = e.nextElementSibling; a.length < l && t; t = t.nextElementSibling) a.push({
                type: i(t)
            });
            for (r = e.getElementsByTagName("*"), t = 0; t < r.length && t < l; t++) c.push({
                type: i(r[t])
            });
            this.type = i(e), this.elders = o(s), this.youngerSiblings = o(a), this.descendants = o(c), CE2.getBox(e, this), this.name = CE2.getName(e)
        }
        h.fromObject = function (e) {
            if (e instanceof h) return e;
            var t = Object.create(h.prototype);
            return CE2.assign(t, e), t
        }, h.hex = function (e) {
            if ("string" == typeof e) return e;
            var t = e.toString(16);
            return t.length % 2 != 0 ? "0" + t : t
        }, h.getTypeID = function (e) {
            return CE2.tagTypes[e.nodeName.toLowerCase()] || 0
        }, h.encodeTypeIDs = function (e) {
            var t, n, r, i, o, s, a, c = h.hex,
                u = [],
                l = "";
            for (i = 0, o = e.length; i < o; i++)(t = e[i]).type === (n && n.type) && t.relation === n.relation ? u[u.length - 1].count++ : u.push({
                type: t.type,
                relation: t.relation,
                count: 1
            }), n = t;
            for (i = 0, o = u.length; i < o; i++)
                if ((s = u[i]).relation && s.relation !== r && (l += s.relation === d ? "^" : "<", r = s.relation), 2 < s.count) l += c(s.type) + "x" + c(s.count);
                else
                    for (a = 0; a < s.count; a++) l += c(s.type);
            return l
        }, h.prototype.toString = function () {
            return h.hex(this.type) + ";" + this.elders + ";" + this.youngerSiblings + ";" + this.descendants
        }, CE2.Fingerprint2 = h
    }(), "undefined" == typeof CE2 && (CE2 = {}), void 0 === CE2.URI && (CE2.URI = function (e) {
        if (this.src = e, this.protocol = this.host = this.port = this.path = this.qs = this.hash = this.query = null, e) {
            var t = typeof e;
            "string" == t ? this.initWithString(e) : "object" == t && this.initWithURI(e)
        }
    }, CE2.URI.pattern = /^\s*([\S]+?:\/\/)?([^\s\/]+?@)?([^:\/\?\#]+)?(\:\d+)?(\/?[^#\?\s]*)?([\?][^#\s]*)?([#]\S+)?/i, CE2.URI.prototype = {
        initWithString: function (e) {
            var t, n, r, i, o, s = CE2.URI.pattern.exec(e);
            s[1] || "/" == e.charAt(0) ? ((t = s[1]) && (this.protocol = t.substr(0, t.indexOf(":"))), this.host = s[3] || null, (n = s[4]) && (this.port = +n.substr(1)), (r = s[5]) ? this.path = CE2.unescape(r) : this.host && (this.path = "/")) : this.path = CE2.unescape((s[3] || "") + (s[5] || "")), (i = s[6]) && (this.qs = CE2.qs2obj(i.substr(1)), this.query = i.substr(1)), (o = s[7]) && (this.hash = CE2.unescape(o.substr(1)))
        },
        initWithURI: function (e) {
            CE2.each(e, function (e, t) {
                this[t] = e
            }, this)
        },
        isAbsolute: function () {
            return this.isURL() || this.path && "/" == this.path.charAt(0)
        },
        isURL: function () {
            return this.protocol && this.host
        },
        getDomain: function () {
            return this.host && this.host.replace(/^(www|m)\./, "")
        },
        getHost: function () {
            return this.host + (this.port ? ":" + this.port : "")
        },
        getOrigin: function () {
            return this.protocol + "://" + this.getHost()
        }
    }), "undefined" == typeof CE2 && (CE2 = {}), CE2.URI.prototype.join = function (e) {
        var t = new CE2.URI(this),
            n = this.path;
        return "string" == typeof e && (e = new CE2.URI(e)), e.isURL() ? new CE2.URI(e) : (n = e.isAbsolute() ? e.path : n ? ((n = n.split("/")).pop(), (n = e.path ? n.concat(e.path.split("/")) : n).join("/")) : this.isURL() ? "/" + e.path : e.path, t.path = n, t.qs = e.qs, t.hash = e.hash, t)
    }, CE2.URI.prototype.normalize = function () {
        if (this.path) {
            var e;
            CE2.ie && CE2.ieVersion < 9 ? (e = [], "/" == this.path.charAt(0) && e.push(""), e = e.concat(this.path.split(/\/+/g)), "/" == this.path.charAt(this.path.length - 1) && e.push("")) : e = this.path.split(/\/+/g);
            var t, n = 0;
            do {
                if (t = e.length - 1, ".." == e[n + 1]) "" == e[n] && 0 == n ? e.splice(n + 1, 1) : (e.splice(n, 2), n -= 1);
                else if ("." == e[n]) {
                    if (0 == t) break;
                    e.splice(n, 1)
                } else n++
            } while (n <= t);
            this.path = e.join("/")
        }
    }, CE2.URI.prototype.simplify = function (e) {
        var t, n = [];
        if ((t = "file" == this.protocol ? this : CE2.ie ? e ? e.join(this) : this : (e = e || new CE2.URI(CE2.d.baseURI)).join(this)).normalize(), t.host && n.push(t.host.replace(/^(www|m)\./, "")), null != t.port && n.push(":" + t.port), "/" == t.path || /^\/(default|home|index)\b[^\/]*$/i.test(t.path) ? (t.qs || t.hash) && n.push("/") : n.push(t.path), t.qs) {
            var r = [];
            CE2.each(t.qs, function (e, t) {
                e && !/(^sess|^sid$|^phpsessid$|^jsessionid$|^__VIEWSTATE$)/i.test(t) && r.push(encodeURIComponent(t) + "=" + encodeURIComponent(e))
            }), r.length && n.push("?" + r.join("&"))
        }
        return t.hash && n.push("#" + t.hash), n.join("")
    }, CE2.URI.prototype.sameOrigin = function (e) {
        return !!e && ("string" == typeof e && (e = new CE2.URI(e)), null == e.host || e.host == this.host && e.port == this.port && e.protocol == this.protocol)
    }, CE2.IGNORED_TAGS = {
        SCRIPT: 0,
        NOSCRIPT: 0,
        STYLE: 0,
        BR: 0
    }, CE2.getAllFingerprints = function (e) {
        e = e || {};
        var t, n, r, i, o = [],
            s = CE2.d.body,
            a = e.elements || s.getElementsByTagName("*"),
            c = s.clientWidth,
            u = CE2.findByClass("-ce-capture"),
            l = CE2.findByClass("-ce-ignore"),
            d = CE2.IGNORED_TAGS,
            h = null == e.skipHidden || e.skipHidden,
            p = null == e.skipOffScreen || e.skipOffScreen,
            f = e.onHidden,
            m = e.onFingerprint,
            g = e.snakeCase,
            v = e.fpClass;
        for (t = 0; n = a[t++];) try {
            if (n.nodeName in d || "INPUT" == n.nodeName && "hidden" == n.type) continue;
            if (h && "AREA" != n.nodeName && !CE2.isVisible(n)) {
                f && f(n);
                continue
            }
            if (CE2.arrayContains(l, n)) continue;
            if ((i = CE2.arrayContains(u, n)) && i != n) continue;
            if (n.ownerSVGElement) continue;
            if (r = v ? new v(n) : CE2.fingerprint(n), g && (r.parentID && (r.parent_id = r.parentID, delete r.parentID), r.page_x = r.pageX, r.page_y = r.pageY, delete r.pageX, delete r.pageY), m && m(n, r), p && r.pageX + r.width < .25 * -c) continue;
            if (u.length) {
                var E, C = !1;
                for (E = 0; i = u[E++];)
                    if (i != n && CE2.contains(i, n)) {
                        C = !0;
                        break
                    } if (C) continue
            }
            o.push(r)
        } catch (e) {
            console.log(e)
        }
        return o.sort(function (e, t) {
            return (e.width && e.height && e.type ? -1 : 1) - (t.width && t.height && t.type ? -1 : 1)
        }), o
    }, CE2.getAllFingerprints2 = function (e) {
        e = CE2.assign({
            fpClass: CE2.Fingerprint2,
            skipHidden: !1
        }, e);
        for (var t, n = CE2.getAllFingerprints(e), r = 0; t = n[r++];) t.element_fingerprint_id = r, t.found = !0, t.parentID && (t.parent_id = t.parentID), delete t.parentID, delete t.pageX, delete t.pageY;
        return n
    },
    function () {
        var n, r, i, o;

        function e(e) {
            window.parent.postMessage({
                type: "ce-site-loaded"
            }, e.getOrigin())
        }

        function t() {
            if (n = null, r) {
                var e = CE2.getAllFingerprints2(),
                    t = JSON.stringify(e);
                r !== t && (r = t, window.parent.postMessage({
                    type: "ce-reload-reports",
                    fps: e
                }, i.getOrigin()))
            }
        }

        function s() {
            n && clearTimeout(n), n = setTimeout(t, 1e3)
        }
        if (window.parent !== window && (i = new CE2.URI(document.referrer), o = new CE2.URI(CE2.__CE_HOST__), i.getHost() === o.getHost())) throw window.performance.timing.loadEventEnd ? e(i) : window.addEventListener("load", function () {
            e(i)
        }, !0), window.addEventListener("message", function (e) {
            if (new CE2.URI(e.origin).getHost() === o.getHost() && "ce-get-fingerprints" === e.data) {
                var t = CE2.getAllFingerprints2();
                r = JSON.stringify(t), window.parent.postMessage({
                    type: "ce-fingerprints",
                    fps: t
                }, e.origin)
            }
            if (new CE2.URI(e.origin).getHost() === o.getHost() && "ce-get-height" === e.data) {
                var n = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
                window.parent.postMessage({
                    type: "ce-height",
                    height: n
                }, e.origin)
            }
        }, !0), CE2.listen(window, "mousedown", s), CE2.listen(window, "mouseover", s), CE2.listen(window, "keydown", s), CE2.listen(window, "mousemove", function (e) {
            window.parent.postMessage({
                type: "ce-interactive-mousemove",
                clientX: e.clientX,
                clientY: e.clientY
            }, i.getOrigin())
        }), Error("site loaded")
    }(), "undefined" == typeof CE2 && (CE2 = {}), CE2.deviceType = function (e) {
        var t, n, r = e.toLowerCase(),
            i = 0;
        if (-1 == (t = e.indexOf("("))) return 1;
        if (t++, -1 != (n = e.indexOf("Android", t))) {
            if (n += 8, e.length > n && (i = e.charAt(n))) switch (i) {
                case "2":
                    if (-1 != e.indexOf("BNTV", n)) return 3;
                    if (-1 != r.indexOf("nook", n)) return 3;
                    if (-1 != e.indexOf("Kindle", n)) return 3;
                    if (-1 != e.indexOf("Touchpad", n)) return 3;
                    break;
                case "3":
                    return 3;
                case "4":
                    if (-1 != e.indexOf("Silk", n)) return 3
            }
            return -1 != r.indexOf("tablet", n) ? 3 : -1 != e.indexOf("Mobi", n) ? 2 : 3
        }
        if (-1 != (n = e.indexOf("iP", t))) switch (i = e.charAt(n + 2)) {
            case "a":
                return 3;
            case "h":
            case "o":
                return 2
        }
        return -1 != (n = e.indexOf("BlackBerry", t)) ? -1 != e.indexOf("Tablet", n + 10) ? 3 : 2 : -1 != e.indexOf("Windows Phone", t) ? 2 : -1 != e.indexOf("BB10", t) ? 2 : "M" != e.charAt(0) && -1 != e.indexOf("Opera Mini", t) ? 2 : 1
    }, "undefined" == typeof CE2 && (CE2 = {}), CE2.READY_STATE_PATTERN = CE2.ie ? /complete/ : /complete|interactive/, CE2.autoStart = "undefined" == typeof CE_MANUAL_START || !CE_MANUAL_START, CE2.domReady = document.readyState && CE2.READY_STATE_PATTERN.test(document.readyState), CE2.domReadyListeners = [], CE2.onDOMReady = function (e) {
        if (CE2.domReady) return setTimeout(e, 1);
        CE2.domReadyListeners.push(e)
    }, CE2.domReadySetup = function () {
        var t = function () {
            for (var e = CE2.domReadyListeners; 0 < e.length;) e.pop().call();
            CE2.domReady = !0
        };
        if (CE2.domReady && t(), CE2.listen(window, "load", t), document.addEventListener && CE2.listen(document, "DOMContentLoaded", t), document.readyState) {
            var n = CE2.READY_STATE_PATTERN;
            ! function e() {
                n.test(document.readyState) ? t() : setTimeout(e, 10)
            }()
        }
    }, CE2.autoStart && CE2.domReadySetup(), "undefined" == typeof CE2 && (CE2 = {}), CE2.matchURL = function (e, t, n, r, i) {
        var o, s, a, c, u, l, d, h, p, f, m, g, v, E, C, y, w = /(default|index)($|\..*)/i,
            S = !1;
        if (!e || !t) return !1;
        if (r && CE2.indexOf(r, CE2.deviceType(i)) < 0) return !1;
        if (/n/.test(n = n || "")) return e.trim() === t.trim();
        if (/go/.test(n)) {
            var b = e.split(".");
            return t && t[b[0]] && t[b[0]].experiments && t[b[0]].experiments[b[1]] && t[b[0]].experiments[b[1]] == b[2]
        }
        if (/[re]/.test(n)) try {
            return RegExp(e, "i").test(t)
        } catch (e) {
            return !1
        }
        if (e = new CE2.URI(e), o = new CE2.URI(t.toLowerCase()), /h/.test(n) && e.protocol != o.protocol) return !1;
        if (s = (a = o.host).replace(/^(www|m)\./, ""), h = e.host, p = e.ihost, /w/.test(n) && a != h && a != p) return !1;
        if (s != h.replace(/^(www|m)\./, "") && s != (p && p.replace(/^(www|m)\./, ""))) return !1;
        if ((f = e.path ? e.path : "/") != (c = o.path)) {
            if (/\//.test(n)) return !1;
            for (m = f.split("/"), u = c.split("/"), C = 0, y = Math.max(m.length, u.length); C < y; C++)
                if (m[C] || (m[C] = ""), u[C] || (u[C] = ""), C == y - 1 && (m[C] = m[C].replace(w, ""), u[C] = u[C].replace(w, "")), m[C] != u[C]) return !1
        }
        return l = o.qs, E = /\?/.test(n), g = e.qs || "", !(E && l && !g || !l && g) && (CE2.each(g, function (e, t) {
            if (l[t] !== e) return !(S = !0)
        }), !S && ((!E || (CE2.each(l, function (e, t) {
            if (e != g[t]) return S = !0
        }), !S)) && (v = e.hash || "", d = o.hash || "", !(E = /#/.test(n)) && !v || v == d)))
    }, "undefined" == typeof CE2 && (CE2 = {}),
    function () {
        var e;
        CE2.uaBot = function (e) {
            return !window.__CE_SCRIPT_CHECK && (/bingpreview|prerender|jorgee|Mediapartners-Google|APIs-Google|phpcrawl|GoogleAdSenseInfeed|Google Page Speed Insights|Google-Ads-Overview|Google-Read-Aloud|Google-Structured-Data-Testing-Tool|Data Theorem|alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo|yandex|phantom|headless/i.test(e) || void 0)
        }, CE2.isBot = function () {
            return !window.__CE_SCRIPT_CHECK && (void 0 === e && (e = function () {
                try {
                    if (CE2.uaBot(navigator.userAgent)) return !0;
                    if (0 === window.outerWidth || 0 === window.outerHeight) return !0;
                    if (!1 === navigator.onLine) return !0;
                    if (!navigator.language || navigator.languages && 0 === navigator.languages.length) return !0;
                    if (navigator.webdriver) return !0;
                    if (window.jasmine) return !0;
                    if (navigator.connection && 0 === navigator.connection.rtt) return !0;
                    var e = ["__webdriver_evaluate", "__selenium_evaluate", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__driver_evaluate", "__selenium_unwrapped", "__fxdriver_unwrapped"],
                        t = ["webdriver", "_phantom", "__nightmare", "_selenium", "callPhantom", "callSelenium", "_Selenium_IDE_Recorder"];
                    for (var n in t)
                        if (window[t[n]]) return !0;
                    for (var r in e) {
                        var i = e[r];
                        if (window.document[i]) return !0
                    }
                    for (var o in window.document)
                        if (o.match(/\$[a-z]dc_/) && window.document[o].cache_) return !0;
                    if (window.external && window.external.toString() && -1 != window.external.toString().indexOf("Sequentum")) return !0;
                    var s = window.document.documentElement;
                    if (s.getAttribute("selenium") || s.getAttribute("webdriver") || s.getAttribute("driver")) return !0;
                    try {
                        new WebSocket("itsgonnafail")
                    } catch (e) {
                        if (/SyntaxError: DOM Exception 12/.test(e.message)) return !0
                    }
                    if (/Chrome|Chromium/i.test(navigator.userAgent)) {
                        if (!window.chrome) return !0;
                        var a = document.createElement("iframe");
                        a.srcdoc = "blank page", document.body.appendChild(a);
                        var c = typeof a.contentWindow.chrome;
                        if (a.remove(), "undefined" === c) return !0;
                        var u = document.createElement("canvas").getContext("webgl"),
                            l = u.getExtension("WEBGL_debug_renderer_info"),
                            d = u.getParameter(l.UNMASKED_VENDOR_WEBGL),
                            h = u.getParameter(l.UNMASKED_RENDERER_WEBGL);
                        if ("Brian Paul" === d && "Mesa OffScreen" === h) return !0
                    }
                } catch (e) {}
                return !1
            }()), e)
        }
    }(), "undefined" == typeof CE2 && (CE2 = {}),
    function () {
        function a(e, t) {
            this.left = parseInt(e, 10), this.right = parseInt(t, 10)
        }

        function c(e) {
            this.parts = e
        }

        function n(e) {
            this.ip = e, this.parts = e.split(".").map(function (e) {
                return parseInt(e, 10)
            })
        }

        function e(e) {
            var t = this;
            this.text = e || "", this.rules = this.text.split("\n").map(function (e) {
                return t.parse_rule(e)
            }), this.rules = this.rules.filter(function (e) {
                return e
            })
        }
        a.prototype.includes = function (e) {
            return this.left <= parseInt(e, 10) && this.right >= parseInt(e, 10)
        }, c.prototype.matches = function (e) {
            for (var t, n = 0; n < e.parts.length; n++)
                if (t = e.parts[n], !c.parts_match(this.parts[n], t)) return !1;
            return !0
        }, c.parts_match = function (e, t) {
            return null === e || (isNaN(e) ? e instanceof a ? e.includes(t) : void 0 : e === t)
        }, e.prototype.blocked = function (e) {
            if (!e) return !1;
            e = new n(e);
            for (var t = 0; t < this.rules.length; t++)
                if (this.rules[t].matches(e)) return !0;
            return !1
        }, e.prototype.parse_rule = function (e) {
            return "" === (e = e.trim()) || /^\s*#.*$/.test(e) ? null : -1 < (e = e.replace(/\s*#.*$/, "")).indexOf("-") ? this.parse_range_based_rule(e) : new c(e.split(".").map(function (e) {
                return "*" === e ? null : /^[0-9]+$/.test(e) ? parseInt(e, 10) : null
            }))
        }, e.prototype.parse_range_based_rule = function (e) {
            for (var t = this, n = e.split("-").map(function (e) {
                    return t.parse_rule(e)
                }), r = [], i = 0; i < 4; i++) {
                var o = n[0].parts[i],
                    s = n[1].parts[i];
                o === s ? r.push(o) : null == o || null == s ? r.push(null) : r.push(new a(o, s))
            }
            return new c(r)
        }, CE2.IPBlockList = e
    }(), "undefined" == typeof CE2 && (CE2 = {}),
    function () {
        function e(e) {
            this.site = e
        }
        e.prototype = {
            nEndpoint: function () {
                return CE2.SREC_DEST.sample + "/n/" + CE2.uid + "/" + this._key() + "?v=7&user_script_version=" + CE2.USER_SCRIPT_VERSION
            },
            rEndpoint: function () {
                return this._freeSamplingApplies() ? CE2.SREC_DEST.sample + "/r/" + CE2.uid + "/" + this._key() + "/" + this.samplingData.numFreeRecordingsRecorded + "?free_recordings=true&user_script_version=" + CE2.USER_SCRIPT_VERSION : CE2.SREC_DEST.sample + "/r/" + CE2.uid + "/" + this._key() + "/" + this.samplingData.numRecordingsForKey + "?user_script_version=" + CE2.USER_SCRIPT_VERSION
            },
            validSamplingData: function () {
                return void 0 !== this.samplingData && null != this.samplingData
            },
            setSamplingData: function (e) {
                var t = e.split(",");
                7 <= t.length ? (this.samplingData = {
                    numRecordingsTotal: t[0],
                    numRequestsForKey: t[1],
                    numRecordingsForKey: t[2],
                    lastRecordedForKey: new Date(1e3 * parseInt(t[3], 10)),
                    numFreeRecordingsRecorded: t[4] || 0,
                    serverNow: new Date(1e3 * parseInt(t[5], 10)),
                    serverNextMonth: new Date(1e3 * parseInt(t[6], 10))
                }, t[7] && sessionStorage.setItem("ce_ip_address", t[7]), sessionStorage.setItem("ce_diff_time", 1e3 * parseInt(t[5], 10) - +new Date)) : this.samplingData = null
            },
            canSample: function () {
                var e, t = 0;
                return t = CE2.NUMBER_OF_RECORDINGS - this.samplingData.numRecordingsTotal, this._activatedRecordingsThisMonth() && (t += this._freeRecordings()), 0 < t && (this._freeSamplingApplies() ? (CE2.debug("Recording: free sampling applied"), !0) : "custom" === this._strategy() && this._customSamplingApplies() ? (this.appliedStrategy = "custom", 0 < (e = this.site.recordingSettings.samplingNumRecordings - this.samplingData.numRecordingsForKey) ? this._canSampleUniformly(e, this.samplingData.lastRecordedForKey, new Date(1e3 * parseInt(this.site.recordingSettings.samplingEndDateUnix, 10))) : (CE2.debug("Recording: custom sampling rejected"), !1)) : "consecutive" === this._strategy() && this._canSampleConsecutively() ? (this.appliedStrategy = "consecutive", 0 < (e = this.site.recordingSettings.samplingNumRecordings - this.samplingData.numRecordingsForKey) ? (CE2.debug("Recording: consecutive sampling applied"), !0) : (CE2.debug("Recording: consecutive sampling rejected"), !1)) : (this.appliedStrategy = "uniform", this._canSampleUniformly(t, this.samplingData.lastRecordedForKey, this.samplingData.serverNextMonth)))
            },
            _key: function () {
                return "custom" === this._strategy() || "consecutive" === this._strategy() ? btoa(this.site.id + "|" + this.site.recordingSettings.samplingUpdatedAt) : "all"
            },
            _strategy: function () {
                return "custom" === this.site.recordingSettings.samplingStrategy ? "custom" : "consecutive" === this.site.recordingSettings.samplingStrategy ? "consecutive" : "uniform"
            },
            _appliedStrategy: function () {
                return this.appliedStrategy
            },
            _customSamplingApplies: function () {
                var e = new Date(1e3 * parseInt(this.site.recordingSettings.samplingStartDateUnix, 10)),
                    t = new Date(1e3 * parseInt(this.site.recordingSettings.samplingEndDateUnix, 10));
                return e <= this.samplingData.serverNow && this.samplingData.serverNow <= t
            },
            _freeRecordings: function () {
                return .1 * CE2.NUMBER_OF_RECORDINGS
            },
            _freeSamplingApplies: function () {
                return this._activatedRecordingsThisMonth() && this.samplingData.numFreeRecordingsRecorded < this._freeRecordings()
            },
            _canSampleUniformly: function (e, t, n) {
                return (n - this.samplingData.serverNow) / e < this.samplingData.serverNow - t ? (console.debug("Recording: uniform sampling applied"), !0) : (console.debug("Recording: uniform sampling rejected"), !1)
            },
            _canSampleConsecutively: function () {
                return 0 < this.site.recordingSettings.samplingNumRecordings && this.samplingData.numRecordingsForKey < this.site.recordingSettings.samplingNumRecordings
            },
            _activatedRecordingsThisMonth: function () {
                if (CE2.RECORDINGS_ACTIVATION) {
                    var e = new Date(1e3 * parseInt(CE2.RECORDINGS_ACTIVATION, 10));
                    return Math.abs(new Date - e) / 864e5 < 30
                }
                return !1
            },
            getSamplingData: function (e) {
                if (void 0 !== this.samplingData) e();
                else {
                    var t = this,
                        n = new XMLHttpRequest;
                    n.onreadystatechange = function () {
                        if (4 === n.readyState) return t.setSamplingData(n.response), e()
                    }, n.open("GET", this.nEndpoint()), n.send()
                }
            },
            getIP: function () {
                return sessionStorage.getItem("ce_ip_address")
            },
            getDiffTime: function () {
                var e = sessionStorage.getItem("ce_diff_time");
                return null === e ? null : parseInt(e, 10)
            }
        }, CE2.Sampling = e
    }(), CE2.userMain = function () {
        try {
            CE2.debug("Starting CrazyEgg");
            var i, o = CE2.snapshots,
                e = CE2.sites,
                t = CE2.GLOBAL_IP_BLOCK_LIST;
            if (CE2.uaBot(navigator.userAgent)) return void CE2.debug("Not tracking: bot detected.");
            if (CE2.dontTrack(CE2.w, CE2.d, CE2.n, CE2.ie)) return void CE2.debug("Not tracking: doNotTrack detected.");
            CE2.testID = CE2.testVersion = null, CE2.initPageEdits && CE2.initPageEdits(), CE2.initFlowTracking && (i = CE2.initFlowTracking()), CE2.showWebsite(), "undefined" == typeof CE2 && (CE2 = {});
            var n = function () {
                    var e, t = "!$%&()*+,-.0123456789;<=>?@[]^_`{|}~",
                        n = {};
                    for (e = 0; e < 36; e++) n[t.charAt(e)] = e.toString(36);
                    return n
                }(),
                s = function (e) {
                    return parseInt(e.replace(/./g, function (e) {
                        return n[e]
                    }), 36)
                },
                r = function (e) {
                    for (var t, n = "", r = /(![^:\/a-z])|([^:\/a-z]{2})|(:[^:\/a-z]{3})|(\/[^:\/a-z]{4})/gi, i = String.fromCharCode; null != (t = r.exec(e));) t[1] || t[2] ? n += i(s(t[0])) : t[3] ? n += i(s(t[3].substr(1))) : t[4] && (n += i(s(t[4].substr(1))));
                    return n
                };
            "string" == typeof o && (o = CE2.parseJSON(r(o))), "string" == typeof e && (e = CE2.parseJSON(r(e))), t = r(t);
            var a = CE2.getCurrentSite(e);
            if (a) {
                var c = function () {
                    if (!new CE2.IPBlockList(t).blocked(CE2._sampling.getIP())) {
                        CE2.recording && CE2.recording.main && CE2.recording.main(a);
                        var e = function () {
                            try {
                                var e = CE2.w.location.href,
                                    t = i && i.flow && i.flow.trackByVariant && i.variant.variantId,
                                    n = null,
                                    r = null;
                                if (t && (n = CE2.findMatchingSnapshot(o, e, "string" == typeof CE_SNAPSHOT_NAME && CE_SNAPSHOT_NAME.trim(), t, null, CE2._sampling.getIP())), !n && CE2.w.gaData && (n = CE2.findMatchingSnapshot(o, e, "string" == typeof CE_SNAPSHOT_NAME && CE_SNAPSHOT_NAME.trim(), null, CE2.w.gaData, CE2._sampling.getIP())), n || (n = CE2.findMatchingSnapshot(o, e, "string" == typeof CE_SNAPSHOT_NAME && CE_SNAPSHOT_NAME.trim(), null, null, CE2._sampling.getIP())), CE2.ALLOW_RECORDINGS_2 && CE2.recording && CE2.recording.getSessionState() && (r = CE2.recording.getSessionState().id), !n && !r || CE2.tracker && CE2.tracker.snapshotId != (n && n.id) || CE2.tracker && CE2.tracker.recordingSessionId != r) return CE2.testID = CE2.testVersion = null, void(CE2.tracker && (CE2.tracker.cleanup(), CE2.tracker = null));
                                CE2.tracker || CE2.startTracking(n, r)
                            } catch (e) {}
                        };
                        e(), CE2.autoStart && (CE2.monitorInterval = setInterval(e, 1e3))
                    }
                };
                CE2._sampling = new CE2.Sampling(a);
                var u = o && 0 < o.length;
                CE2.IS_USING_IP_BLOCKING && !CE2._sampling.getIP() || u && null === CE2._sampling.getDiffTime() ? CE2._sampling.getSamplingData(function () {
                    CE2._sampling.validSamplingData() && c()
                }) : c()
            }
        } finally {
            CE2.showWebsite()
        }
    }, CE2.showWebsite = function () {
        CE2.bh && (CE2.bh.parentElement.removeChild(CE2.bh), CE2.bh = null)
    }, CE2.autoStart && CE2.onDOMReady(CE2.userMain), "function" == typeof CE_READY ? CE2.onDOMReady(CE_READY) : "object" == typeof CE_READY && CE2.onDOMReady(function () {
        CE2.each(CE_READY, function (e) {
            "function" == typeof e && e()
        })
    }), CE2.debugEnabled = CE2.w.location.search && 0 < CE2.w.location.search.indexOf("ce2debug=enabled"), CE2.debug = function (e) {
        if (!CE2.debugEnabled) return !1;
        console.log("string" == typeof e ? "CE2: " + e : e)
    }, CE2.sites = "%8&4!}%|%]!}$<$4$3$5$3$5$2$,!}&%%?&$%^!}$<!}&!%?&$%@%]%?&,%^&+&,$.%[&&&$!}$,!}&+%^&+&+%|&&&%%.%^%[&&&*%]%|&%%`!}$<&,&*&-%^$,!}&*%^%[&&&*%]%|&%%`%0%^&,&,%|&%%`&+!}$<&4!}&(%?%`%^%1%?&*%`%^&,%|&%%`$|&%%?%@&!%^%]!}$<&,&*&-%^$,!}&(%?%`%^%1%?&*%`%^&,%|&%%`%2&*&!&+!}$<%8%;$,!}&*&-&!%^&+!}$<%8%;$,!}&$%?&+%~$|&!%^&$%^&%&,&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,&*%?&,%^%`&2!}$<!}&-&%%|%_&&&*&$!}$,!}&+%?&$&(&!%|&%%`%*&-&$%.%^%[&&&*%]%|&%%`&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%2&(%]%?&,%^%]$^&,!}$<&%&-&!&!$,!}%^&%%]%0%^&+&+%|&&&%%+&%$_&!&&%[%~%^%]%2&*&!!}$<%_%?&!&+%^$,!}%@&!&&%[%~%^%]%2&*&!&+!}$<%8%;$,!}%@&!&&%[%~%^%]%.&-&!%^&+!}$<%8%;$,!}&(&*%^$`%?%[%{%^%$&$%?%`%^&+!}$<%_%?&!&+%^&6&6%;", CE2.GLOBAL_IP_BLOCK_LIST = "$3$3$4$.$3$7$.$4$2$.$2$1!.$2$1$4$.$9$1$.$7$8$.$3$3$7!.$5$6$.$7$5$.$9$.$;$9!.$2$5$8$.$2$4$6$.$2$2$.$2$2$4", CE2.IS_USING_IP_BLOCKING = !0, CE2.snapshots = "%8&4!}%|%]!}$<$4$9$6$4$6$3$3$,!}&.!}$<$2$2$,!}%^!}$<$2$6$9$8$;$;$6$8$;$;$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.&!%?&$%@%]%?&,%^&+&,$.%[&&&$!}$,!}&(%?&,%{!}$<!}$0&!%?&%%]%|&%%`$-&,%^&1&,$-%[&,%?!}&6$,!}%]!}$<%8$2%;&6$,&4!}%|%]!}$<$4$9$6$4$6$3$4$,!}&.!}$<$2$2$,!}%^!}$<$2$6$9$8$;$;$6$8$;$;$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.&!%?&$%@%]%?&,%^&+&,$.%[&&&$!}$,!}&(%?&,%{!}$<!}$0&!%?&%%]%|&%%`$-&,%^&1&,$-%[&,%?!}&6$,!}%]!}$<%8$4%;&6$,&4!}%|%]!}$<$4$9$6$4$6$3$5$,!}&.!}$<$2$2$,!}%^!}$<$2$6$9$8$;$;$6$8$;$;$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.&!%?&$%@%]%?&,%^&+&,$.%[&&&$!}$,!}&(%?&,%{!}$<!}$0&!%?&%%]%|&%%`$-&,%^&1&,$-%[&,%?!}&6$,!}%]!}$<%8$3%;&6$,&4!}%|%]!}$<$4$8$;$5$6$6$6$,!}&.!}$<$8$,!}%^!}$<$2$6$9$6$5$1$5$2$6$2$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}%[&&&$&$&-&%%|&,&2$.&!%?&$%@%]%?&,%^&+&,$.%[&&&$!}$,!}&(%?&,%{!}$<!}$0!}&6&6%;", CE2.TRACKING_DEST = "http://trk.cetrk.com/", CE2.TRACKING_DEST_SECURE = "https://s3.amazonaws.com/trk.cetrk.com/", CE2.TRACKING_DEST_NEW = "https://user-event-tracker.crazyegg.com/", CE2.TRACKING_DEST_NEW_SECURE = "https://user-event-tracker.crazyegg.com/", "undefined" == typeof CE2 && (CE2 = {}), CE2.S16_0 = 32768, CE2.Package = function () {
        for (var e, t, n, r, i = [], o = {}, s = arguments, a = 0, c = s.length; a < c; a++) t = (e = s[a])[0], n = e[1], r = e[2], i.push(t), o[t] = {
            t: n,
            s: r
        };
        this.props = o, this.propList = i, this.overBudget = [], this.surplus = 0
    }, CE2.Package.prototype = {
        set: function (e, t) {
            var n = this.props[e],
                r = 0;
            n && ("s" == n.t ? (n.ov = t, n.v = t + "" ? CE2.utf8Trim(t + "", 255) : "", r = n.s - n.v.length, this.surplus += r, r < 0 && this.overBudget.push(n)) : (n.ov = t, n.v = isNaN(parseInt(t, 10)) ? 0 : parseInt(t, 10)))
        },
        trimStrings: function () {
            var e = this.surplus,
                t = this.overBudget;
            if (!(0 <= e)) {
                var n = Math.abs(e) / t.length,
                    r = Math.floor(n) == n ? 0 : 1;
                n = Math.floor(n);
                for (var i = 0, o = t.length, s = null; i < o; i++)(s = t[i]).v = CE2.utf8Trim(s.v, s.v.length - n - r), r && (r = 0)
            }
        },
        toString: function () {
            this.trimStrings();
            for (var e, t, n = this.props, r = this.propList, i = [], o = 0, s = r.length; o < s; o++) t = (e = n[r[o]]).v, "s" == e.t ? null == t ? i.push("\0") : (i.push(CE2.pack(1, t.length)), i.push(t)) : null == t ? i.push(CE2.pack(e.s, 0)) : i.push(CE2.pack(e.s, t));
            return i.join("")
        }
    }, CE2.pack = function (e, t) {
        for (var n = "", r = 0; r < e; r++) n += String.fromCharCode(t >> 8 * r & 255);
        return n
    }, CE2.utf8 = function (e) {
        return unescape(encodeURIComponent(e))
    }, CE2.utf8Trim = function (e, t) {
        var n = e.substr(0, t),
            r = CE2.utf8(n);
        if (r == n) return n;
        for (var i = n.length - 1; r.length > t; i--) r = CE2.utf8(n.substr(0, i));
        return r
    }, CE2.base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", CE2.base64 = function (e) {
        for (var t, n, r, i, o, s, a, c = CE2.base64Alphabet, u = [], l = 0, d = e.length; l < d;) i = (t = e.charCodeAt(l++)) >> 2, o = (3 & t) << 4 | (n = e.charCodeAt(l++)) >> 4, s = (15 & n) << 2 | (r = e.charCodeAt(l++)) >> 6, a = 63 & r, isNaN(n) ? s = a = 64 : isNaN(r) && (a = 64), u.push(c.charAt(i) + c.charAt(o)), 64 != s && (u.push(c.charAt(s)), 64 != a && u.push(c.charAt(a)));
        return u.join("")
    }, CE2.V6Tracker = function (e, t) {
        var n;
        (this.snapshotId = t, this.version = e, this.location = new CE2.URI(window.location.href), this.startTime = (new Date).getTime(), this.ignoredElements = CE2.ignoredElements.concat(CE2.findByClass("-ce-ignore")), this.clickCaptors = CE2.clickCaptors.concat(CE2.findByClass("-ce-capture")), this.trackURL = "https:" == window.location.protocol ? CE2.TRACKING_DEST_SECURE : CE2.TRACKING_DEST, this.trackNewURL = "https:" == window.location.protocol ? CE2.TRACKING_DEST_NEW_SECURE : CE2.TRACKING_DEST_NEW, this.opaqueElement = null, this.lastClicked = null, this.handlers = {}, CE2.each(["onOver", "onOut", "onBlur", "onUnload", "onClickFrame", "onClick", "foundAnchor"], function (e) {
            this.handlers[e] = CE2.bind(this, e)
        }, this), this.handleEvents(), this.isReturning = function () {
            var e = CE2.qs2obj(document.cookie.replace(/;\s*/g, "&"));
            if (e) return parseInt(e._ceir, 10) || parseInt(e.is_returning, 10) || 0
        }(), "undefined" != typeof CE_NO_COOKIES && CE_NO_COOKIES) || (n = "number" == typeof CE_COOKIE_EXPIRE_DAYS ? CE_COOKIE_EXPIRE_DAYS : 1825, CE2.writeCookie("_ceir", "1", {
            expiresInDays: n
        }));
        this.visit()
    }, CE2.V6Tracker.prototype = {
        handleEvents: function () {
            var o = this.handlers;
            this.version && 2 <= this.version && (this.scrollTracker = new CE2.ScrollTracker, this.trackScrollInterval = setInterval(CE2.bind(this, "trackScroll"), 100)), CE2.listen(document, "mousedown", o.onClick), CE2.each(["FRAME", "IFRAME", "OBJECT", "EMBED"], function (e) {
                var t, n, r, i = document.body.getElementsByTagName(e);
                for (t = 0; n = i[t++];) /I?FRAME/.test(n.nodeName) && CE2.hasAccessToFrame(n) ? CE2.listen(CE2.ieVersion < 9 ? n.contentWindow.document : n.contentWindow, "mousedown", o.onClickFrame) : 1 < (r = CE2.getBox(n)).width && 1 < r.height && (CE2.listen(n, "mouseover", o.onOver), CE2.listen(n, "mouseout", o.onOut))
            }, this), CE2.listen(window, "blur", o.onBlur), CE2.listen(window, CE2.opera ? "unload" : "beforeunload", o.onUnload)
        },
        cleanup: function () {
            var o = this.handlers;
            clearInterval(this.trackScrollInterval), delete this.scrollTracker, CE2.removeListener(document, "mousedown", o.onClick), CE2.removeListener(window, "blur", o.onBlur), CE2.removeListener(window, CE2.opera ? "unload" : "beforeunload", o.onUnload), CE2.each(["FRAME", "IFRAME", "OBJECT", "EMBED"], function (e) {
                var t, n, r, i = document.body.getElementsByTagName(e);
                for (t = 0; n = i[t++];) /i?frame/i.test(n.nodeName) && CE2.hasAccessToFrame(n) ? CE2.removeListener(CE2.ieVersion < 9 ? n.contentWindow.document : n.contentWindow, "mousedown", o.onClickFrame) : 1 < (r = CE2.getBox(n)).width && 1 < r.height && (CE2.removeListener(n, "mouseover", o.onOver), CE2.removeListener(n, "mouseout", o.onOut))
            }, this)
        },
        ts: function () {
            return Math.floor((new Date).getTime() / 1e3)
        },
        visit: function () {
            this.send("t.js", null, this.ts())
        },
        click: function (e, t, n) {
            var r, i, o, s, a, c, u, l, d, h;
            if (e != document && e != document.body && e != document.documentElement && !this.isIgnored(e) && ((d = CE2.arrayContains(this.clickCaptors, e)) && (e = d), e.ownerSVGElement && (e = e.ownerSVGElement), "OPTION" == e.nodeName && (e = e.parentNode), !CE2.isVML(e))) {
                for (this.lastClicked = e, t && (t.srcElement || t.target) && (r = t), i = new CE2.Package(["type", "i", 1], ["left", "i", 2], ["top", "i", 2], ["width", "i", 2], ["height", "i", 2], ["id", "s", 40], ["ceid", "s", 40], ["name", "s", 100], ["data", "s", 180], ["parentID", "s", 40], ["x", "i", 1], ["y", "i", 1], ["windowWidth", "i", 1], ["timeToClick", "i", 1], ["isReturning", "i", 1], ["referrer", "s", 100], ["googleCampaignSource", "s", 100], ["googleCampaignMedium", "s", 100], ["googleCampaignTerm", "s", 100], ["googleCampaignContent", "s", 100], ["googleCampaignName", "s", 100], ["user1", "s", 100], ["user2", "s", 100], ["user3", "s", 100], ["user4", "s", 100], ["user5", "s", 100], ["flags", "i", 1]), o = 1 === e.nodeType ? CE2.fingerprint(e) : (i.set("type", CE2.tagTypes["(custom)"]), i.set("flags", 1), CE2.getPageCoords(e), e), CE2.each(o, function (e, t) {
                        i.set(t, e)
                    }), r ? (t = (s = CE2.eventCoords(r))[0] - o.pageX, n = s[1] - o.pageY) : null == t && (t = o.width / 2, n = o.height / 2), i.set("x", Math.floor(255 * t / o.width)), i.set("y", Math.floor(255 * n / o.height)), 0 == (a = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth) ? i.set("windowWidth", 0) : i.set("windowWidth", 1 + Math.floor(a / 100)), i.set("timeToClick", CE2.getTimeRange((new Date).getTime() - this.startTime)), i.set("isReturning", this.isReturning), (h = document.referrer) && (h = new CE2.URI(h).simplify()), i.set("referrer", h), (c = this.location.qs) && (i.set("googleCampaignSource", c.utm_source || ""), i.set("googleCampaignMedium", c.utm_medium || ""), i.set("googleCampaignTerm", c.utm_term || ""), i.set("googleCampaignContent", c.utm_content || ""), i.set("googleCampaignName", c.utm_campaign || "")), l = 1; l <= 5; l++)(u = CE2.userData[l]) && i.set("user" + l, u);
                this.send("c", i)
            }
        },
        send: function (e, t, n) {
            var r = t && CE2.base64(t.toString());
            document.createElement("img").src = this.url(e, r, n)
        },
        url: function (e, t, n) {
            var r = this.snapshotId;
            return t = t || "", n = n ? n + (t && "&") : "", (6 <= this.version ? ("t.js" === e && (r = "s=" + r, n = "t=" + n), this.trackNewURL) : this.trackURL) + e + "?" + r + "&" + n + t
        },
        isIgnored: function (e) {
            return CE2.arrayContains(this.ignoredElements, e)
        },
        onClick: function (e, t) {
            var n, r;
            if (CE2.ieVersion && (CE2.ieVersion < 9 || CE2.ieQuirksMode)) {
                if (1 != e.button) return
            } else if (0 != e.button) return;
            r = t ? (n = CE2.eventWindow(e)).frameElement : e.srcElement || e.target, t ? this.click.apply(this, [r].concat(CE2.eventCoords(e, n))) : this.click(r, e)
        },
        onClickFrame: function (e) {
            this.onClick(e, !0)
        },
        onOver: function (e) {
            var t = e.srcElement || e.target;
            this.isIgnored(t) || (this.opaqueElement = t)
        },
        onOut: function (e) {
            this.isIgnored(e.srcElement || e.target) || (this.opaqueElement = null)
        },
        onBlur: function () {
            var e = this.opaqueElement;
            e && e != this.lastClicked && (this.click(e), this.opaqueElement = null)
        },
        onUnload: function () {
            var e = this.opaqueElement;
            this.isIgnored(e) || e && (this.click(e), this.opaqueElement = null)
        },
        trackScroll: function () {
            var e = CE2.scroll();
            this.scrollTracker.shouldRecordScroll(e) && this.scrollTracker.findAnchor(e, this.handlers.foundAnchor)
        },
        foundAnchor: function (e, t) {
            var n, r = new CE2.Package(["screenTop", "i", 2], ["screenHeight", "i", 2], ["screenTopDistanceFromAnchor", "i", 2], ["screenBottomDistanceFromAnchor", "i", 2], ["type", "i", 1], ["left", "i", 2], ["top", "i", 2], ["width", "i", 2], ["height", "i", 2], ["id", "s", 40], ["ceid", "s", 40], ["name", "s", 100], ["data", "s", 180], ["parentID", "s", 40]);
            r.set("screenTop", e.top), r.set("screenHeight", e.height), t && (n = CE2.fingerprint(t), r.set("screenTopDistanceFromAnchor", e.top - n.pageY + CE2.S16_0), r.set("screenBottomDistanceFromAnchor", e.top + e.height - n.pageY + CE2.S16_0), CE2.each(n, function (e, t) {
                r.set(t, e)
            })), this.send("s", r, this.ts())
        }
    }, CE2.DEST_V11 = "https://tracking.crazyegg.com/v11", CE2.cookieStorage = {
        CK: "_ce.s",
        saveTimeout: null,
        canSave: "undefined" == typeof CE_NO_COOKIES || !CE_NO_COOKIES,
        expiresIn: "number" == typeof CE_COOKIE_EXPIRE_DAYS ? CE_COOKIE_EXPIRE_DAYS : 1780,
        load: function () {
            if (!this.values) {
                var e, t, n = {},
                    r = CE2.cookies[this.CK];
                if (r) {
                    for (r = r.replace(/\\~/g, "\0").split("~"), e = 0; t = r[e]; e += 2) n[t.replace(/\x00/g, "~")] = r[e + 1].replace(/\x00/g, "~");
                    this.values = n
                } else this.values = {}
            }
        },
        getCookieRawValue: function () {
            var e = this.values || {},
                n = [];
            return CE2.each(e, function (e, t) {
                n.push(t.replace("~", "\\~")), n.push(e.replace("~", "\\~"))
            }), n.join("~")
        },
        save: function () {
            this.canSave && CE2.writeCookie(this.CK, this.getCookieRawValue(), {
                expiresInDays: this.expiresIn
            })
        },
        get: function (e) {
            return this.load(), this.values[e]
        },
        set: function (e, t) {
            var n = this;
            this.load(), this.values[e] = "" + t, null === this.saveTimeout && (this.saveTimeout = setTimeout(function () {
                n.saveTimeout = null, n.save()
            }, 10))
        },
        del: function (e) {
            this.load(), delete this.values[e], this.save()
        }
    }, "undefined" == typeof CE2 && (CE2 = {}), CE2.JSON || (CE2.JSON = {}),
    function (e) {
        "use strict";
        var l, d, n, h, t = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

        function r(e) {
            return e < 10 ? "0" + e : e
        }

        function i() {
            return this.valueOf()
        }

        function p(e) {
            return t.lastIndex = 0, t.test(e) ? '"' + e.replace(t, function (e) {
                var t = n[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + r(1 + this.getUTCMonth()) + "-" + r(this.getUTCDate()) + "T" + r(this.getUTCHours()) + ":" + r(this.getUTCMinutes()) + ":" + r(this.getUTCSeconds()) + "Z" : null
        }, Boolean.prototype.toJSON = i, Number.prototype.toJSON = i, String.prototype.toJSON = i), "function" != typeof e.stringify && (n = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, e.stringify = function (e, t, n) {
            var r;
            if (d = l = "", "number" == typeof n)
                for (r = 0; r < n; r += 1) d += " ";
            else "string" == typeof n && (d = n);
            if ((h = t) && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw Error("JSON.stringify");
            return function e(t, n) {
                var r, i, o, s, a, c = l,
                    u = n[t];
                switch (u && "object" == typeof u && "[object Array]" !== Object.prototype.toString.apply(u) && "function" == typeof u.toJSON && (u = u.toJSON(t)), "function" == typeof h && (u = h.call(n, t, u)), typeof u) {
                    case "string":
                        return p(u);
                    case "number":
                        return isFinite(u) ? u + "" : "null";
                    case "boolean":
                    case "null":
                        return u + "";
                    case "object":
                        if (!u) return "null";
                        if (l += d, a = [], "[object Array]" === Object.prototype.toString.apply(u)) {
                            for (s = u.length, r = 0; r < s; r += 1) a[r] = e(r, u) || "null";
                            return o = 0 === a.length ? "[]" : l ? "[\n" + l + a.join(",\n" + l) + "\n" + c + "]" : "[" + a.join(",") + "]", l = c, o
                        }
                        if (h && "object" == typeof h)
                            for (s = h.length, r = 0; r < s; r += 1) "string" == typeof h[r] && (o = e(i = h[r], u)) && a.push(p(i) + (l ? ": " : ":") + o);
                        else
                            for (i in u) Object.prototype.hasOwnProperty.call(u, i) && (o = e(i, u)) && a.push(p(i) + (l ? ": " : ":") + o);
                        return o = 0 === a.length ? "{}" : l ? "{\n" + l + a.join(",\n" + l) + "\n" + c + "}" : "{" + a.join(",") + "}", l = c, o
                }
            }("", {
                "": e
            })
        })
    }(CE2.JSON), CE2.V11Tracker = function (e, t, n, r) {
        this.snapshotId = t, this.recordingSessionId = n, this.version = e, this.location = new CE2.URI(window.location.href), this.startTime = (new Date).getTime(), this.ignoredElements = CE2.ignoredElements.concat(CE2.findByClass("-ce-ignore")), this.clickCaptors = CE2.clickCaptors.concat(CE2.findByClass("-ce-capture")), this.trackURL = r || CE2.DEST_V11, this.sessionCK = "_ce.sid", this.setVisitIDs(), this.opaqueElement = null, this.lastClicked = null, this.handlers = {}, CE2.each(["onOver", "onOut", "onBlur", "onUnload", "onClickFrame", "onClick", "foundAnchor"], function (e) {
            this.handlers[e] = CE2.bind(this, e)
        }, this), this.handleEvents(), this.isReturning = parseInt(CE2.cookieStorage.get("ir"), 10) || 0, CE2.cookieStorage.set("ir", "1"), this.visit()
    }, CE2.V11Tracker.prototype = {
        eventTypes: {
            VISIT: 1,
            CLICK: 2,
            SCROLL: 3
        },
        visitSchema: ["referrer", "is_returning", "screen_width", "screen_height", "window_width", "window_height", "utm"],
        fingerprintSchema: ["type", "elders", "youngerSiblings", "descendants", "left", "top", "width", "height", "name"],
        clickSchema: ["x", "y"],
        scrollSchema: ["viewport_top", "viewport_height", "viewport_top_distance", "viewport_bottom_distance"],
        utmKeys: ["utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign"],
        makeId: function () {
            return CE2.makeId(0, 1)
        },
        setVisitIDs: function () {
            this.visitID = this.makeId(), this.visitorID = CE2.cookieStorage.get("v"), this.visitorID || (this.visitorID = this.makeId(), CE2.cookieStorage.set("v", this.visitorID))
        },
        handleEvents: function () {
            var e = this.handlers;
            this.scrollTracker = new CE2.ScrollTracker, this.trackScrollInterval = setInterval(CE2.bind(this, "trackScroll"), 100), CE2.listen(document, "mousedown", e.onClick), this.listenersOnEmbed(CE2.listen), this.listenersOnFrames(CE2.listen), CE2.listen(window, "blur", e.onBlur), CE2.listen(window, CE2.opera ? "unload" : "beforeunload", e.onUnload)
        },
        cleanup: function () {
            var e = this.handlers;
            clearInterval(this.trackScrollInterval), delete this.scrollTracker, CE2.removeListener(document, "mousedown", e.onClick), CE2.removeListener(window, "blur", e.onBlur), CE2.removeListener(window, CE2.opera ? "unload" : "beforeunload", e.onUnload), this.listenersOnEmbed(CE2.removeListener), this.listenersOnFrames(CE2.removeListener)
        },
        listenersOnEmbed: function (e) {
            var t, n, r, i = CE2.querySelectorAll("OBJECT, EMBED"),
                o = this.handlers;
            for (t = 0; n = i[t++];) 1 < (r = CE2.getBox(n)).width && 1 < r.height && (e(n, "mouseover", o.onOver), e(n, "mouseout", o.onOut))
        },
        listenersOnFrames: function (e) {
            var t, n, r, i = CE2.querySelectorAll("FRAME, IFRAME"),
                o = this.handlers;
            for (t = 0; n = i[t++];) CE2.hasAccessToFrame(n) ? e(CE2.ieVersion < 9 ? n.contentWindow.document : n.contentWindow, "mousedown", o.onClickFrame) : 1 < (r = CE2.getBox(n)).width && 1 < r.height && (e(n, "mouseover", o.onOver), e(n, "mouseout", o.onOut))
        },
        visit: function () {
            var e = CE2.d,
                t = CE2.w,
                n = this.newEvent(this.eventTypes.VISIT, this.visitID),
                r = {
                    referrer: e.referrer,
                    is_returning: !!this.isReturning,
                    screen_width: screen.width,
                    screen_height: screen.height,
                    window_width: t.innerWidth || e.documentElement.clientWidth,
                    window_height: t.innerHeight || e.documentElement.clientHeight,
                    utm: this.getGoogleCampaignData()
                };
            CE2.each(this.visitSchema, function (e) {
                this.setAttribute(n, r[e])
            }, this), this.send(n)
        },
        ATTRIBUTE_INDEX: 4,
        newEvent: function (e, t) {
            var n = [t || this.makeId(), this.visitorID, e, this.version, []],
                r = this.getUserData();
            return 0 < r.length && n.push(r), n
        },
        setAttribute: function (e, t) {
            var n = e[this.ATTRIBUTE_INDEX];
            void 0 === t ? n.push("") : Array.isArray(t) ? n.push.apply(n, t) : n.push(t)
        },
        getGoogleCampaignData: function () {
            var t, n = [],
                r = !1;
            return (t = this.location.qs) && CE2.each(this.utmKeys, function (e) {
                t[e] ? (r = !0, n.push(t[e])) : n.push("")
            }), r ? n : []
        },
        getUserData: function () {
            var n = [],
                r = CE2.userData;
            return CE2.each([1, 2, 3, 4, 5], function (e) {
                var t = r[e];
                void 0 !== t && n.push(e + "", t)
            }), n
        },
        isTopLevelElement: function (e) {
            return e === document || e === document.body || e === document.documentElement
        },
        getElementToRecordClick: function (e) {
            var t;
            return (t = CE2.arrayContains(this.clickCaptors, e)) && (e = t), e.ownerSVGElement && (e = e.ownerSVGElement), "OPTION" === e.nodeName && (e = e.parentNode), e
        },
        click: function (e, t, n) {
            var r, i, o;
            this.isTopLevelElement(e) || this.isIgnored(e) || (r = this.newEvent(this.eventTypes.CLICK), e = this.getElementToRecordClick(e), CE2.isVML(e) || (this.lastClicked = e, i = this.getFingerprint(e), o = this.getClickPosition(t, n, i), this.setAttribute(r, this.visitID), CE2.each(this.fingerprintSchema, function (e) {
                this.setAttribute(r, i[e])
            }, this), CE2.each(this.clickSchema, function (e) {
                this.setAttribute(r, o[e])
            }, this), this.send(r)))
        },
        getClickPosition: function (e, t, n) {
            var r, i, o = {
                x: 0,
                y: 0
            };
            return e && (e.srcElement || e.target) ? (i = e, r = CE2.eventCoords(i), o.x = r[0] - n.pageX, o.y = r[1] - n.pageY) : e || (o.x = n.width / 2, o.y = n.height / 2), o
        },
        getFingerprint: function (e) {
            return new CE2.Fingerprint2(e)
        },
        send: function (e) {
            navigator.sendBeacon(this.url(), CE2.JSON.stringify(e))
        },
        url: function () {
            var e = [];
            return this.snapshotId && e.push("s=" + encodeURIComponent(this.snapshotId)), this.recordingSessionId && (e.push("u=" + encodeURIComponent(CE2.uid)), e.push("ss=" + encodeURIComponent(this.recordingSessionId))), this.trackURL + "?" + e.join("&")
        },
        isIgnored: function (e) {
            return CE2.arrayContains(this.ignoredElements, e)
        },
        onClick: function (e, t) {
            var n, r;
            this.isLeftButton(e) && (t ? (r = (n = CE2.eventWindow(e)).frameElement, this.click.apply(this, [r].concat(CE2.eventCoords(e, n)))) : (r = e.srcElement || e.target, this.click(r, e)))
        },
        isLeftButton: function (e) {
            if (CE2.ieVersion && (CE2.ieVersion < 9 || CE2.ieQuirksMode)) {
                if (1 !== e.button) return
            } else if (0 !== e.button) return;
            return !0
        },
        onClickFrame: function (e) {
            this.onClick(e, !0)
        },
        onOver: function (e) {
            var t = e.srcElement || e.target;
            this.isIgnored(t) || (this.opaqueElement = t)
        },
        onOut: function (e) {
            this.isIgnored(e.srcElement || e.target) || (this.opaqueElement = null)
        },
        onBlur: function () {
            var e = this.opaqueElement;
            e && e !== this.lastClicked && (this.click(e), this.opaqueElement = null)
        },
        onUnload: function () {
            var e = this.opaqueElement;
            this.isIgnored(e) || e && (this.click(e), this.opaqueElement = null)
        },
        trackScroll: function () {
            var e = CE2.scroll();
            this.scrollTracker.shouldRecordScroll(e) && this.scrollTracker.findAnchor(e, this.handlers.foundAnchor)
        },
        foundAnchor: function (e, t) {
            var n, r = this.newEvent(this.eventTypes.SCROLL),
                i = {
                    viewport_top: e.top,
                    viewport_height: e.height
                };
            t && (n = this.getFingerprint(t), i.viewport_top_distance = e.top - n.pageY, i.viewport_bottom_distance = e.top + e.height - n.pageY, CE2.each(n, function (e, t) {
                i[t] = e
            })), this.setAttribute(r, this.visitID), CE2.each(this.fingerprintSchema, function (e) {
                this.setAttribute(r, i[e])
            }, this), CE2.each(this.scrollSchema, function (e) {
                this.setAttribute(r, i[e])
            }, this), this.send(r)
        }
    }, CE2.PAGE_VIEWS_LIMIT_REACHED = !1, CE2.SREC_DEST = {
        sample: "https://sample-api-v2.crazyegg.com",
        record: "https://recording.crazyegg.com"
    }, CE2.NUMBER_OF_RECORDINGS = 500, CE2.RECORDINGS_ACTIVATION = 1555156204, CE2.SAMPLING_STRATEGY = "uniform",
    function (e) {
        var t = window;
        (t.CE2 || (t.CE2 = {})).recording = function o(s, a, c) {
            function u(n, e) {
                if (!a[n]) {
                    if (!s[n]) {
                        var t = "function" == typeof require && require;
                        if (!e && t) return t(n, !0);
                        if (l) return l(n, !0);
                        var r = Error("Cannot find module '" + n + "'");
                        throw r.code = "MODULE_NOT_FOUND", r
                    }
                    var i = a[n] = {
                        exports: {}
                    };
                    s[n][0].call(i.exports, function (e) {
                        var t = s[n][1][e];
                        return u(t || e)
                    }, i, i.exports, o, s, a, c)
                }
                return a[n].exports
            }
            for (var l = "function" == typeof require && require, e = 0; e < c.length; e++) u(c[e]);
            return u
        }({
            1: [function (e, t, n) {
                "use strict";
                var r = e("vdom-parser"),
                    i = e("virtual-dom/diff"),
                    o = e("virtual-dom/create-element"),
                    s = e("vdom-serialized-patch/serialize"),
                    a = e("vdom-serialized-patch/patch"),
                    c = e("./vdom-ext").getBaseUrl,
                    u = e("./vdom-ext").findNodesByTagName,
                    l = e("./vdom-ext").vNodeCleanupUrls,
                    d = e("./vdom-ext").patchCleanupUrls;
                ! function (e) {
                    var t = e.prototype,
                        r = t.parseFromString;
                    try {
                        if ((new e).parseFromString("", "text/html")) return
                    } catch (e) {}
                    t.parseFromString = function (e, t) {
                        if (/^\s*text\/html\s*(?:;|$)/i.test(t)) {
                            var n = document.implementation.createHTMLDocument("");
                            return -1 < e.toLowerCase().indexOf("<!doctype") ? n.documentElement.innerHTML = e : n.body.innerHTML = e, n
                        }
                        return r.apply(this, arguments)
                    }
                }(DOMParser);
                var h = new DOMParser,
                    p = {
                        parse: function (e, t) {
                            return r("string" == typeof e ? h.parseFromString(e, "text/html").body : e, t)
                        },
                        diff: function (e, t, n) {
                            var r = s(i(e, t));
                            return (n = n || {}).preserveVdom || delete r.a, r
                        },
                        patch: a,
                        createElement: o,
                        getBaseUrl: c,
                        findNodesByTagName: u,
                        vNodeCleanupUrls: l,
                        patchCleanupUrls: d
                    };
                t.exports = {
                    vdom: p,
                    vdomAsJson: e("vdom-as-json")
                }
            }, {
                "./vdom-ext": 62,
                "vdom-as-json": 12,
                "vdom-parser": 18,
                "vdom-serialized-patch/patch": 32,
                "vdom-serialized-patch/serialize": 33,
                "virtual-dom/create-element": 34,
                "virtual-dom/diff": 35
            }],
            2: [function (e, t, n) {}, {}],
            3: [function (e, t, n) {
                var l, d, h;
                t.exports = (d = String.prototype.split, h = /()??/.exec("")[1] === l, function (e, t, n) {
                    if ("[object RegExp]" !== Object.prototype.toString.call(t)) return d.call(e, t, n);
                    var r, i, o, s, a = [],
                        c = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.extended ? "x" : "") + (t.sticky ? "y" : ""),
                        u = 0,
                        t = RegExp(t.source, c + "g");
                    for (e += "", h || (r = RegExp("^" + t.source + "$(?!\\s)", c)), n = n === l ? -1 >>> 0 : n >>> 0;
                        (i = t.exec(e)) && (o = i.index + i[0].length, !(u < o && (a.push(e.slice(u, i.index)), !h && 1 < i.length && i[0].replace(r, function () {
                            for (var e = 1; e < arguments.length - 2; e++) arguments[e] === l && (i[e] = l)
                        }), 1 < i.length && i.index < e.length && Array.prototype.push.apply(a, i.slice(1)), s = i[0].length, u = o, a.length >= n)));) t.lastIndex === i.index && t.lastIndex++;
                    return u === e.length ? !s && t.test("") || a.push("") : a.push(e.slice(u)), a.length > n ? a.slice(0, n) : a
                })
            }, {}],
            4: [function (e, t, n) {
                "use strict";
                var r = e("individual/one-version");
                r("ev-store", "7");
                var i = "__EV_STORE_KEY@7";
                t.exports = function (e) {
                    var t = e[i];
                    return t || (t = e[i] = {}), t
                }
            }, {
                "individual/one-version": 7
            }],
            5: [function (e, t, n) {
                var r, i, o, s;
                r = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, o = void 0 !== r ? r : "undefined" != typeof window ? window : {}, s = e("min-document"), "undefined" != typeof document ? i = document : (i = o["__GLOBAL_DOCUMENT_CACHE@4"]) || (i = o["__GLOBAL_DOCUMENT_CACHE@4"] = s), t.exports = i
            }, {
                "min-document": 2
            }],
            6: [function (e, t, n) {
                ! function (e) {
                    "use strict";
                    var n = "undefined" != typeof window ? window : void 0 !== e ? e : {};
                    t.exports = function (e, t) {
                        return e in n ? n[e] : n[e] = t
                    }
                }("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            7: [function (e, t, n) {
                "use strict";
                var o = e("./index.js");
                t.exports = function (e, t, n) {
                    var r = "__INDIVIDUAL_ONE_VERSION_" + e,
                        i = o(r + "_ENFORCE_SINGLETON", t);
                    if (i === t) return o(r, n);
                    throw Error("Can only have one copy of " + e + ".\nYou already have version " + i + " installed.\nThis means you cannot install version " + t)
                }
            }, {
                "./index.js": 6
            }],
            8: [function (e, t, n) {
                "use strict";
                t.exports = function (e) {
                    return "object" == typeof e && null !== e
                }
            }, {}],
            9: [function (e, t, n) {
                "use strict";
                t.exports = e("./lib/hookProperties")
            }, {
                "./lib/hookProperties": 11
            }],
            10: [function (e, t, n) {
                "use strict";
                var r = e("./types"),
                    o = e("virtual-dom/vdom/undefined-value"),
                    i = e("virtual-dom/vnode/vnode"),
                    s = e("virtual-dom/vnode/vtext"),
                    a = e("virtual-dom/vnode/vpatch"),
                    c = e("virtual-dom/virtual-hyperscript/hooks/soft-set-hook"),
                    u = e("./hookProperties");

                function l(e, t) {
                    for (var n = e.length, r = -1, i = Array(n); ++r < n;) i[r] = f(e[r], t);
                    return i
                }

                function d(e, t) {
                    var n = {};
                    for (var r in e) {
                        var i = e[r];
                        o.isUndefined(i) && (i = void 0), n[r] = void 0 !== i ? f(i, t) : i
                    }
                    return n
                }

                function h(e, t) {
                    var n = new i(e.tn, e.p ? d(e.p, t) : {}, e.c ? l(e.c, t) : [], e.k, e.n);
                    return u(n.namespace, n.properties), n
                }

                function p(e, t) {
                    switch (e.t) {
                        case r.VirtualPatch:
                            return function (e, t) {
                                var n = null;
                                if ("string" == typeof e.v && 0 == e.v.indexOf("i:")) {
                                    var r = parseInt(e.v.substr(2));
                                    n = t.dftIndexArray[r]
                                } else n = e.v ? f(e.v, t) : null;
                                return new a(e.pt, n, e.p && f(e.p, t))
                            }(e, t);
                        case r.VirtualNode:
                            return h(e, t);
                        case r.VirtualTree:
                            return new s(e.x);
                        case r.SoftSetHook:
                            return new c(e.value)
                    }
                    return d(e, t)
                }

                function f(e, t) {
                    var n, r, i = typeof e;
                    switch (i) {
                        case "string":
                        case "boolean":
                        case "number":
                            return e
                    }
                    return Array.isArray(e) ? l(e, t) : e ? (e && e.a && e.a.tn && null == t && ((t = {
                        diffRoot: h(e.a)
                    }).dftIndexArray = (n = t.diffRoot, function t(n, e, r) {
                        return (n[r] = e).children && e.children.forEach(function (e) {
                            r = t(n, e, ++r)
                        }), r
                    }(r = [], n, 0), r)), p(e, t)) : null
                }
                t.exports = f
            }, {
                "./hookProperties": 11,
                "./types": 15,
                "virtual-dom/vdom/undefined-value": 41,
                "virtual-dom/virtual-hyperscript/hooks/soft-set-hook": 44,
                "virtual-dom/vnode/vnode": 55,
                "virtual-dom/vnode/vpatch": 56,
                "virtual-dom/vnode/vtext": 57
            }],
            11: [function (e, t, n) {
                "use strict";
                var o = e("virtual-dom/virtual-hyperscript/svg-attribute-namespace"),
                    s = e("virtual-dom/virtual-hyperscript/hooks/attribute-hook"),
                    a = e("virtual-dom/vnode/is-vhook");
                t.exports = function (e, t) {
                    for (var n in t)
                        if (t.hasOwnProperty(n))
                            if (t[n] && t[n].namespace) t[n] = s(t[n].namespace, t[n].value);
                            else if (!a(t[n]) && null !== e) {
                        var r = o(n);
                        if (void 0 !== r) {
                            var i = t[n];
                            t[n] = s(r, i)
                        }
                    }
                }
            }, {
                "virtual-dom/virtual-hyperscript/hooks/attribute-hook": 42,
                "virtual-dom/virtual-hyperscript/svg-attribute-namespace": 47,
                "virtual-dom/vnode/is-vhook": 50
            }],
            12: [function (e, t, n) {
                "use strict";
                t.exports = {
                    fromJson: e("./fromJson"),
                    toJson: e("./toJson"),
                    isHook: e("./is-vhook")
                }
            }, {
                "./fromJson": 10,
                "./is-vhook": 13,
                "./toJson": 14
            }],
            13: [function (e, t, n) {
                "use strict";
                t.exports = e("virtual-dom/vnode/is-vhook")
            }, {
                "virtual-dom/vnode/is-vhook": 50
            }],
            14: [function (e, t, n) {
                "use strict";
                var l = e("./types"),
                    u = e("virtual-dom/vdom/undefined-value"),
                    d = e("virtual-dom/virtual-hyperscript/hooks/soft-set-hook");

                function h(e, t) {
                    for (var n = e.length, r = -1, i = Array(n); ++r < n;) i[r] = f(e[r], t);
                    return i
                }

                function p(e, t) {
                    var n, r, i = {},
                        o = !1,
                        s = t;
                    for (var a in e && e.a && e.a.tagName && (n = {}, Object.keys(r = t).forEach(function (e) {
                            n[e] = r[e]
                        }), s = n, o = !0), e) {
                        var c = e[a];
                        o && (s.patchHashIndex = parseInt(a)), i[a] = void 0 !== c ? f(c, s) : u.undefinedConst
                    }
                    return i
                }

                function r(e, t) {
                    return "patch" in e && "number" == typeof e.type ? (o = e, s = t, a = {
                        t: l.VirtualPatch,
                        pt: o.type
                    }, o.vNode && (s && null != s.patchHashIndex ? a.v = "i:" + s.patchHashIndex : a.v = f(o.vNode, s)), o.patch && (a.p = f(o.patch, s)), a) : "VirtualNode" === e.type ? (n = e, r = t, i = {
                        t: l.VirtualNode,
                        tn: n.tagName
                    }, Object.keys(n.properties).length && (i.p = p(n.properties, r)), n.children.length && (i.c = h(n.children, r)), n.key && (i.k = n.key), n.namespace && (i.n = n.namespace), i) : "VirtualText" === e.type ? (c = e, {
                        t: l.VirtualTree,
                        x: c.text
                    }) : e instanceof d ? (u = e, {
                        t: l.SoftSetHook,
                        value: u.value
                    }) : p(e, t);
                    var n, r, i, o, s, a, c, u
                }

                function f(e, t) {
                    var n = typeof e;
                    switch (n) {
                        case "string":
                        case "boolean":
                        case "number":
                            return e
                    }
                    return Array.isArray(e) ? h(e, t || {}) : e ? (e && e.a && e.a.tagName && !t ? t = {
                        diffRoot: e.a
                    } : null == t && (t = {}), r(e, t)) : null
                }
                t.exports = f
            }, {
                "./types": 15,
                "virtual-dom/vdom/undefined-value": 41,
                "virtual-dom/virtual-hyperscript/hooks/soft-set-hook": 44
            }],
            15: [function (e, t, n) {
                t.exports = {
                    VirtualTree: 1,
                    VirtualPatch: 2,
                    VirtualNode: 3,
                    SoftSetHook: 4
                }
            }, {}],
            16: [function (e, t, n) {
                "use strict";
                t.exports = e("./lib/toJson")
            }, {
                "./lib/toJson": 14
            }],
            17: [function (e, t, n) {
                "use strict";
                t.exports = {
                    scrollTop: "scrollTop",
                    scrollLeft: "scrollLeft",
                    value: "value",
                    checked: "checked",
                    autoplay: "autoplay",
                    muted: "muted",
                    controls: "controls",
                    loop: "loop",
                    hidden: "hidden",
                    multiple: "multiple",
                    seamless: "seamless",
                    selected: "selected",
                    sortable: "sortable",
                    readOnly: "readOnly"
                }
            }, {}],
            18: [function (e, t, n) {
                "use strict";
                var r, d = e("virtual-dom/vnode/vnode"),
                    h = e("virtual-dom/vnode/vtext"),
                    o = (e("virtual-dom/vnode/is-vnode"), e("./property-map")),
                    p = e("./dom-property-map"),
                    f = e("./namespace-map"),
                    m = e("./style-properties"),
                    g = "http://www.w3.org/1999/xhtml";

                function v(e, t) {
                    return 3 === e.nodeType ? (l = e, E(t) ? new h("") : new h(l.nodeValue)) : 1 === e.nodeType || 9 === e.nodeType ? (n = e, (u = !E(r = t) && (o = n, (s = r) && s.censor && function (e, t) {
                        if (e.matches) return e.matches(t);
                        for (var n = (e.document || e.ownerDocument).querySelectorAll(t), r = n.length; 0 <= r && n.item(r) !== e; r--);
                        return -1 < r
                    }(o, s.censor))) && (r.onCensoredNode = !0), i = new d("SCRIPT" !== (c = n).tagName ? c.tagName : "NOSCRIPT", function (e, t) {
                        if (E(t)) {
                            for (var n = {}, r = getComputedStyle(e), i = e.getBoundingClientRect(), o = {}, s = 0; s < m.length; s++) r[m[s]] && (o[m[s]] = r[m[s]]);
                            "inline" === o.display && (o.display = "inline-block"), o.width = i.width + "px", o.height = i.height + "px", n.style = o, n.className = "ce-censored-node", "IMG" === e.tagName && (n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"), t && t.key && (n.attributes = {}, n.attributes[t.key] = C(e, t))
                        } else {
                            var n = function (e) {
                                var t, n, r, i = {};
                                e.namespaceURI && e.namespaceURI !== g && (t = e.namespaceURI);
                                for (var o = 0; o < e.attributes.length; o++) /^on[A-Za-z]/.test(e.attributes[o].name) || ((n = "style" == e.attributes[o].name ? w(e) : t ? (r = e.attributes[o], {
                                    name: r.name,
                                    value: r.value,
                                    ns: f[r.name] || "",
                                    isAttr: !0
                                }) : y(e.attributes[o], e)).ns ? i[n.name] = {
                                    namespace: n.ns,
                                    value: n.value
                                } : n.isAttr ? (i.attributes || (i.attributes = {}), i.attributes[n.name] = n.value) : i[n.name] = n.value);
                                for (var s in p) void 0 !== e[s] && ("LI" === e.tagName && "value" === s || e[s] instanceof Element || (n = y({
                                    name: s,
                                    value: e[s]
                                }, e), i[n.name] = n.value));
                                return i
                            }(e);
                            t && t.fontBoosted && window && function (e, t) {
                                if (!document.head.contains(e)) {
                                    var n = e.getBoundingClientRect(),
                                        r = window.getComputedStyle(e);
                                    "style" in t || (t.style = {}), "BR" == e.tagName && (t.style["line-height"] = n.height + "px"), "fontSize" in r && (t.style["font-size"] = r.fontSize)
                                }
                            }(e, n)
                        }
                        return n
                    }(n, r), function (e, t) {
                        var n, r, i = [];
                        for (r = e.shadowRoot ? e.shadowRoot.childNodes : e instanceof HTMLSlotElement ? e.assignedNodes() : e.childNodes, n = 0; n < r.length; n++) i.push(v(r[n], t));
                        if ("STYLE" === e.tagName && e.sheet) {
                            var o = [];
                            for (n = 0; n < e.sheet.cssRules.length; n++) o.push(e.sheet.cssRules[n].cssText);
                            i.push(v(document.createTextNode(o.join(" ")), t))
                        }
                        return i
                    }(n, r), C(n, r), (a = n).namespaceURI !== g ? a.namespaceURI : null), u && (r.onCensoredNode = !1), i) : new h("");
                    var n, r, i, o, s, a, c, u, l
                }

                function E(e) {
                    return e && e.onCensoredNode
                }

                function C(e, t) {
                    return t && t.key ? e.getAttribute(t.key) : null
                }

                function y(e, t) {
                    var n, r, i = !1;
                    return o[e.name] && o[e.name] in t ? n = o[e.name] : p[e.name] && p[e.name] in t ? n = p[e.name] : (n = e.name, i = !0), r = e.value, {
                        name: n,
                        value: r,
                        isAttr: i
                    }
                }

                function w(e) {
                    for (var t = e.style, n = {}, r = 0; r < t.length; ++r) {
                        var i = t.item(r);
                        n[i] = t[i] + "", void 0 === t[i] && (n[i] = s(t, i)), -1 < n[i].indexOf("url") && (n[i] = n[i].replace(/\"/g, ""))
                    }
                    return {
                        name: "style",
                        value: n
                    }
                }

                function s(e, t) {
                    var n, r;
                    r = e.cssText.split(";");
                    for (var i = 0; i < r.length; ++i)
                        if (-1 < r[i].indexOf(t)) {
                            n = r[i].replace(t + ":", "").trim();
                            break
                        } return n
                }
                t.exports = function (e, t) {
                    if (!e) return v(document.createTextNode(""));
                    if ("string" == typeof e) {
                        if (!("DOMParser" in window)) throw Error("DOMParser is not available, so parsing string to DOM node is not possible.");
                        var n = (r = r || new DOMParser).parseFromString(e, "text/html");
                        e = n.body.firstChild ? n.getElementsByTagName("body")[0].firstChild : n.head.firstChild && ("TITLE" !== n.head.firstChild.tagName || n.title) ? n.head.firstChild : n.firstChild && "HTML" !== n.firstChild.tagName ? n.firstChild : document.createTextNode("")
                    }
                    if ("object" == typeof e && e && e.nodeType) return v(e, t);
                    throw Error("invalid dom node", e)
                }
            }, {
                "./dom-property-map": 17,
                "./namespace-map": 19,
                "./property-map": 20,
                "./style-properties": 21,
                "virtual-dom/vnode/is-vnode": 51,
                "virtual-dom/vnode/vnode": 55,
                "virtual-dom/vnode/vtext": 57
            }],
            19: [function (e, t, n) {
                "use strict";
                var r = null,
                    i = "http://www.w3.org/1999/xlink",
                    o = "http://www.w3.org/XML/1998/namespace",
                    s = {
                        about: r,
                        "accent-height": r,
                        accumulate: r,
                        additive: r,
                        "alignment-baseline": r,
                        alphabetic: r,
                        amplitude: r,
                        "arabic-form": r,
                        ascent: r,
                        attributeName: r,
                        attributeType: r,
                        azimuth: r,
                        bandwidth: r,
                        baseFrequency: r,
                        baseProfile: r,
                        "baseline-shift": r,
                        bbox: r,
                        begin: r,
                        bias: r,
                        by: r,
                        calcMode: r,
                        "cap-height": r,
                        class: r,
                        clip: r,
                        "clip-path": r,
                        "clip-rule": r,
                        clipPathUnits: r,
                        color: r,
                        "color-interpolation": r,
                        "color-interpolation-filters": r,
                        "color-profile": r,
                        "color-rendering": r,
                        content: r,
                        contentScriptType: r,
                        contentStyleType: r,
                        cursor: r,
                        cx: r,
                        cy: r,
                        d: r,
                        datatype: r,
                        defaultAction: r,
                        descent: r,
                        diffuseConstant: r,
                        direction: r,
                        display: r,
                        divisor: r,
                        "dominant-baseline": r,
                        dur: r,
                        dx: r,
                        dy: r,
                        edgeMode: r,
                        editable: r,
                        elevation: r,
                        "enable-background": r,
                        end: r,
                        "ev:event": "http://www.w3.org/2001/xml-events",
                        event: r,
                        exponent: r,
                        externalResourcesRequired: r,
                        fill: r,
                        "fill-opacity": r,
                        "fill-rule": r,
                        filter: r,
                        filterRes: r,
                        filterUnits: r,
                        "flood-color": r,
                        "flood-opacity": r,
                        focusHighlight: r,
                        focusable: r,
                        "font-family": r,
                        "font-size": r,
                        "font-size-adjust": r,
                        "font-stretch": r,
                        "font-style": r,
                        "font-variant": r,
                        "font-weight": r,
                        format: r,
                        from: r,
                        fx: r,
                        fy: r,
                        g1: r,
                        g2: r,
                        "glyph-name": r,
                        "glyph-orientation-horizontal": r,
                        "glyph-orientation-vertical": r,
                        glyphRef: r,
                        gradientTransform: r,
                        gradientUnits: r,
                        handler: r,
                        hanging: r,
                        height: r,
                        "horiz-adv-x": r,
                        "horiz-origin-x": r,
                        "horiz-origin-y": r,
                        id: r,
                        ideographic: r,
                        "image-rendering": r,
                        in: r,
                        in2: r,
                        initialVisibility: r,
                        intercept: r,
                        k: r,
                        k1: r,
                        k2: r,
                        k3: r,
                        k4: r,
                        kernelMatrix: r,
                        kernelUnitLength: r,
                        kerning: r,
                        keyPoints: r,
                        keySplines: r,
                        keyTimes: r,
                        lang: r,
                        lengthAdjust: r,
                        "letter-spacing": r,
                        "lighting-color": r,
                        limitingConeAngle: r,
                        local: r,
                        "marker-end": r,
                        "marker-mid": r,
                        "marker-start": r,
                        markerHeight: r,
                        markerUnits: r,
                        markerWidth: r,
                        mask: r,
                        maskContentUnits: r,
                        maskUnits: r,
                        mathematical: r,
                        max: r,
                        media: r,
                        mediaCharacterEncoding: r,
                        mediaContentEncodings: r,
                        mediaSize: r,
                        mediaTime: r,
                        method: r,
                        min: r,
                        mode: r,
                        name: r,
                        "nav-down": r,
                        "nav-down-left": r,
                        "nav-down-right": r,
                        "nav-left": r,
                        "nav-next": r,
                        "nav-prev": r,
                        "nav-right": r,
                        "nav-up": r,
                        "nav-up-left": r,
                        "nav-up-right": r,
                        numOctaves: r,
                        observer: r,
                        offset: r,
                        opacity: r,
                        operator: r,
                        order: r,
                        orient: r,
                        orientation: r,
                        origin: r,
                        overflow: r,
                        overlay: r,
                        "overline-position": r,
                        "overline-thickness": r,
                        "panose-1": r,
                        path: r,
                        pathLength: r,
                        patternContentUnits: r,
                        patternTransform: r,
                        patternUnits: r,
                        phase: r,
                        playbackOrder: r,
                        "pointer-events": r,
                        points: r,
                        pointsAtX: r,
                        pointsAtY: r,
                        pointsAtZ: r,
                        preserveAlpha: r,
                        preserveAspectRatio: r,
                        primitiveUnits: r,
                        propagate: r,
                        property: r,
                        r: r,
                        radius: r,
                        refX: r,
                        refY: r,
                        rel: r,
                        "rendering-intent": r,
                        repeatCount: r,
                        repeatDur: r,
                        requiredExtensions: r,
                        requiredFeatures: r,
                        requiredFonts: r,
                        requiredFormats: r,
                        resource: r,
                        restart: r,
                        result: r,
                        rev: r,
                        role: r,
                        rotate: r,
                        rx: r,
                        ry: r,
                        scale: r,
                        seed: r,
                        "shape-rendering": r,
                        slope: r,
                        snapshotTime: r,
                        spacing: r,
                        specularConstant: r,
                        specularExponent: r,
                        spreadMethod: r,
                        startOffset: r,
                        stdDeviation: r,
                        stemh: r,
                        stemv: r,
                        stitchTiles: r,
                        "stop-color": r,
                        "stop-opacity": r,
                        "strikethrough-position": r,
                        "strikethrough-thickness": r,
                        string: r,
                        stroke: r,
                        "stroke-dasharray": r,
                        "stroke-dashoffset": r,
                        "stroke-linecap": r,
                        "stroke-linejoin": r,
                        "stroke-miterlimit": r,
                        "stroke-opacity": r,
                        "stroke-width": r,
                        surfaceScale: r,
                        syncBehavior: r,
                        syncBehaviorDefault: r,
                        syncMaster: r,
                        syncTolerance: r,
                        syncToleranceDefault: r,
                        systemLanguage: r,
                        tableValues: r,
                        target: r,
                        targetX: r,
                        targetY: r,
                        "text-anchor": r,
                        "text-decoration": r,
                        "text-rendering": r,
                        textLength: r,
                        timelineBegin: r,
                        title: r,
                        to: r,
                        transform: r,
                        transformBehavior: r,
                        type: r,
                        typeof: r,
                        u1: r,
                        u2: r,
                        "underline-position": r,
                        "underline-thickness": r,
                        unicode: r,
                        "unicode-bidi": r,
                        "unicode-range": r,
                        "units-per-em": r,
                        "v-alphabetic": r,
                        "v-hanging": r,
                        "v-ideographic": r,
                        "v-mathematical": r,
                        values: r,
                        version: r,
                        "vert-adv-y": r,
                        "vert-origin-x": r,
                        "vert-origin-y": r,
                        viewBox: r,
                        viewTarget: r,
                        visibility: r,
                        width: r,
                        widths: r,
                        "word-spacing": r,
                        "writing-mode": r,
                        x: r,
                        "x-height": r,
                        x1: r,
                        x2: r,
                        xChannelSelector: r,
                        "xlink:actuate": i,
                        "xlink:arcrole": i,
                        "xlink:href": i,
                        "xlink:role": i,
                        "xlink:show": i,
                        "xlink:title": i,
                        "xlink:type": i,
                        "xml:base": o,
                        "xml:id": o,
                        "xml:lang": o,
                        "xml:space": o,
                        y: r,
                        y1: r,
                        y2: r,
                        yChannelSelector: r,
                        z: r,
                        zoomAndPan: r
                    };
                t.exports = s
            }, {}],
            20: [function (e, t, n) {
                "use strict";
                t.exports = {
                    abbr: "abbr",
                    accept: "accept",
                    "accept-charset": "acceptCharset",
                    accesskey: "accessKey",
                    action: "action",
                    allowfullscreen: "allowFullScreen",
                    allowtransparency: "allowTransparency",
                    alt: "alt",
                    async: "async",
                    autocomplete: "autoComplete",
                    autofocus: "autoFocus",
                    autoplay: "autoplay",
                    cellpadding: "cellPadding",
                    cellspacing: "cellSpacing",
                    challenge: "challenge",
                    charset: "charset",
                    checked: "checked",
                    cite: "cite",
                    class: "className",
                    cols: "cols",
                    colspan: "colSpan",
                    command: "command",
                    content: "content",
                    contenteditable: "contentEditable",
                    contextmenu: "contextMenu",
                    controls: "controls",
                    coords: "coords",
                    crossorigin: "crossOrigin",
                    data: "data",
                    datetime: "dateTime",
                    default: "default",
                    defer: "defer",
                    dir: "dir",
                    disabled: "disabled",
                    download: "download",
                    draggable: "draggable",
                    dropzone: "dropzone",
                    enctype: "encType",
                    for: "htmlFor",
                    form: "form",
                    formaction: "formAction",
                    formenctype: "formEncType",
                    formmethod: "formMethod",
                    formnovalidate: "formNoValidate",
                    formtarget: "formTarget",
                    frameBorder: "frameBorder",
                    headers: "headers",
                    hidden: "hidden",
                    high: "high",
                    href: "href",
                    hreflang: "hrefLang",
                    "http-equiv": "httpEquiv",
                    icon: "icon",
                    id: "id",
                    inputmode: "inputMode",
                    ismap: "isMap",
                    itemid: "itemId",
                    itemprop: "itemProp",
                    itemref: "itemRef",
                    itemscope: "itemScope",
                    itemtype: "itemType",
                    kind: "kind",
                    label: "label",
                    lang: "lang",
                    list: "list",
                    loop: "loop",
                    manifest: "manifest",
                    max: "max",
                    maxlength: "maxLength",
                    media: "media",
                    mediagroup: "mediaGroup",
                    method: "method",
                    min: "min",
                    minlength: "minLength",
                    multiple: "multiple",
                    muted: "muted",
                    name: "name",
                    novalidate: "noValidate",
                    open: "open",
                    optimum: "optimum",
                    pattern: "pattern",
                    ping: "ping",
                    placeholder: "placeholder",
                    poster: "poster",
                    preload: "preload",
                    radiogroup: "radioGroup",
                    readonly: "readOnly",
                    rel: "rel",
                    required: "required",
                    role: "role",
                    rows: "rows",
                    rowspan: "rowSpan",
                    sandbox: "sandbox",
                    scope: "scope",
                    scoped: "scoped",
                    scrolling: "scrolling",
                    seamless: "seamless",
                    selected: "selected",
                    shape: "shape",
                    size: "size",
                    sizes: "sizes",
                    sortable: "sortable",
                    span: "span",
                    spellcheck: "spellCheck",
                    src: "src",
                    srcdoc: "srcDoc",
                    srcset: "srcset",
                    start: "start",
                    step: "step",
                    style: "style",
                    tabindex: "tabIndex",
                    target: "target",
                    title: "title",
                    translate: "translate",
                    type: "type",
                    typemustmatch: "typeMustMatch",
                    usemap: "useMap",
                    value: "value",
                    wmode: "wmode",
                    wrap: "wrap",
                    valign: "vAlign",
                    integrity: "integrity"
                }
            }, {}],
            21: [function (e, t, n) {
                t.exports = ["top", "left", "right", "bottom", "display", "visibility", "width", "height", "position", "margin", "float", "padding", "border", "borderStyle", "borderWidth", "zIndex", "clear", "boxSizing", "tableLayout", "transform", "order", "grid", "gridArea", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridColumn", "gridColumnEnd", "gridColumnGap", "gridColumnStart", "gridGap", "gridRow", "gridRowEnd", "gridRowGap", "gridRowStart", "gridTemplate", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows", "flex", "flexBasis", "flexDirection", "flexFlow", "flexGrow", "flexShrink", "flexWrap", "justifyContent", "alignItems", "alignContent", "alignSelf", "verticalAlign"]
            }, {}],
            22: [function (e, t, n) {
                var c = e("virtual-dom/vdom/apply-properties"),
                    u = e("./isVText"),
                    l = e("./isVNode"),
                    d = e("vdom-as-json/hookProperties");
                t.exports = function e(t) {
                    var n = document;
                    if (u(t)) return n.createTextNode(t.x);
                    if (!l(t)) return null;
                    var r = t.n ? n.createElementNS(t.n, t.tn) : n.createElement(t.tn),
                        i = t.p;
                    i && d(t.n, i), c(r, i);
                    var o = t.c;
                    if (o)
                        for (var s = 0; s < o.length; s++) {
                            var a = e(o[s]);
                            a && r.appendChild(a)
                        }
                    return r
                }
            }, {
                "./isVNode": 25,
                "./isVText": 26,
                "vdom-as-json/hookProperties": 9,
                "virtual-dom/vdom/apply-properties": 37
            }],
            23: [function (e, t, n) {
                var d = {};

                function h(e, t, n) {
                    if (0 === e.length) return !1;
                    for (var r, i, o = 0, s = e.length - 1; o <= s;) {
                        if (i = e[r = (s + o) / 2 >> 0], o === s) return t <= i && i <= n;
                        if (i < t) o = r + 1;
                        else {
                            if (!(n < i)) return !0;
                            s = r - 1
                        }
                    }
                    return !1
                }

                function s(e, t) {
                    return t < e ? 1 : -1
                }
                t.exports = function (e, t, n) {
                    return t && 0 !== t.length ? (t.sort(s), n ? function e(t, n, r, i, o) {
                        if (i = i || {}, o = o || 0, t) {
                            h(r, o, o) && (i[o] = t);
                            var s = n[0];
                            if (s)
                                for (var a = t.childNodes, c = 0; c < s.length; c++) {
                                    o += 1;
                                    var u = s[c] || d,
                                        l = o + (u[1] || 0);
                                    h(r, o, l) && e(a[c], u, r, i, o), o = l
                                }
                        }
                        return i
                    }(e, n, t) : (r = e, o = {}, i = (i = t).slice(), function e(t, n, r) {
                        r = r || {
                            value: 0
                        };
                        for (var i = 0; i < t.length; i++) {
                            if (!1 === n(t[i], r.value)) return !1;
                            r.value++;
                            var o = t[i].childNodes;
                            if (o && !1 === e(o, n, r)) return !1
                        }
                    }([r], function (e, t) {
                        return t === i[0] && (o[t] = e, i.shift()), 0 < i.length
                    }), o)) : {};
                    var r, i, o
                }
            }, {}],
            24: [function (e, t, n) {
                var r = e("./patchRecursive");
                t.exports = r
            }, {
                "./patchRecursive": 28
            }],
            25: [function (e, t, n) {
                t.exports = function (e) {
                    return e && e.t === r.VirtualNode
                };
                var r = e("./types")
            }, {
                "./types": 29
            }],
            26: [function (e, t, n) {
                t.exports = function (e) {
                    return e && e.t === r.VirtualTree
                };
                var r = e("./types")
            }, {
                "./types": 29
            }],
            27: [function (e, t, n) {
                var g = e("virtual-dom/vdom/apply-properties"),
                    v = e("../patchTypes"),
                    E = e("./createElement");
                t.exports = function (e, t, n) {
                    var r, i, o, s, a, c, u, l, d, h, p = e[0],
                        f = e[1],
                        m = e[2];
                    switch (p) {
                        case v.REMOVE:
                            return (h = (d = t).parentNode) && h.removeChild(d), null;
                        case v.INSERT:
                            return u = t, l = E(f), u && u.appendChild(l), u;
                        case v.VTEXT:
                            return function (e, t) {
                                var n;
                                if (3 === e.nodeType) e.replaceData(0, e.length, t.x), n = e;
                                else {
                                    var r = e.parentNode;
                                    n = E(t), r && n !== e && r.replaceChild(n, e)
                                }
                                return n
                            }(t, f);
                        case v.VNODE:
                            return s = f, a = (o = t).parentNode, c = E(s), a && c !== o && a.replaceChild(c, o), c;
                        case v.ORDER:
                            return function (e, t) {
                                for (var n, r, i, o = e.childNodes, s = {}, a = 0; a < t.removes.length; a++) r = t.removes[a], n = o[r.from], r.key && (s[r.key] = n), e.removeChild(n);
                                for (var c = o.length, u = 0; u < t.inserts.length; u++) i = t.inserts[u], n = s[i.key], e.insertBefore(n, i.to >= c++ ? null : o[i.to])
                            }(t, f), t;
                        case v.PROPS:
                            return g(t, f, m.p), t;
                        case v.THUNK:
                            return i = n(r = t, f), r && i && r !== i && r.parentNode && r.parentNode.replaceChild(i, r), i;
                        default:
                            return t
                    }
                }
            }, {
                "../patchTypes": 30,
                "./createElement": 22,
                "virtual-dom/vdom/apply-properties": 37
            }],
            28: [function (e, t, n) {
                var a = e("./domIndex"),
                    c = e("./patchOp");

                function u(e, t, n) {
                    n = n || {};
                    var r = function (e) {
                        var t, n = [];
                        for (var r in e)((t = +r) || 0 === t) && n.push(t);
                        return n
                    }(t);
                    if (0 === r.length) return e;
                    for (var i = a(e, r, t.a), o = 0; o < r.length; o++) {
                        var s = r[o];
                        e = l(e, i[s], t[s], n)
                    }
                    return e
                }

                function l(e, t, n, r) {
                    if (!t) return e;
                    for (var i, o = r && r.beforePatch, s = 0; s < n.length; s++) o && !1 === o(t, n[s]) || (i = c(n[s], t, u), t === e && (e = i));
                    return e
                }
                t.exports = u
            }, {
                "./domIndex": 23,
                "./patchOp": 27
            }],
            29: [function (e, t, n) {
                t.exports = {
                    VirtualTree: 1,
                    VirtualPatch: 2,
                    VirtualNode: 3,
                    SoftSetHook: 4
                }
            }, {}],
            30: [function (e, t, n) {
                t.exports = {
                    NONE: 0,
                    VTEXT: 1,
                    VNODE: 2,
                    WIDGET: 3,
                    PROPS: 4,
                    ORDER: 5,
                    INSERT: 6,
                    REMOVE: 7,
                    THUNK: 8
                }
            }, {}],
            31: [function (e, t, n) {
                var r = e("../patchTypes"),
                    i = e("vdom-as-json/toJson");

                function o(e) {
                    if (Array.isArray(e)) {
                        for (var t = e.length, n = Array(t), r = -1; ++r < t;) n[r] = s(e[r]);
                        return n
                    }
                    return [s(e)]
                }

                function s(e) {
                    var t = e.type,
                        n = [t, e.patch && e.patch.a ? i(a(e.patch)) : i(e.patch)];
                    return t === r.PROPS && n.push({
                        p: e.vNode.properties
                    }), n
                }

                function a(e) {
                    var t = function e(t) {
                            var n = t.children;
                            if (!n) return null;
                            for (var r = n.length, i = Array(r), o = -1; ++o < r;) i[o] = e(n[o]);
                            return t.count ? [i, t.count] : [i]
                        }(e.a),
                        n = {
                            a: t
                        };
                    for (var r in e) "a" !== r && (n[r] = o(e[r]));
                    return n
                }
                t.exports = a
            }, {
                "../patchTypes": 30,
                "vdom-as-json/toJson": 16
            }],
            32: [function (e, t, n) {
                t.exports = e("./lib/patch")
            }, {
                "./lib/patch": 24
            }],
            33: [function (e, t, n) {
                t.exports = e("./lib/serialize")
            }, {
                "./lib/serialize": 31
            }],
            34: [function (e, t, n) {
                var r = e("./vdom/create-element.js");
                t.exports = r
            }, {
                "./vdom/create-element.js": 39
            }],
            35: [function (e, t, n) {
                var r = e("./vtree/diff.js");
                t.exports = r
            }, {
                "./vtree/diff.js": 59
            }],
            36: [function (e, t, n) {
                var r = e("./virtual-hyperscript/index.js");
                t.exports = r
            }, {
                "./virtual-hyperscript/index.js": 45
            }],
            37: [function (e, t, n) {
                var d = e("is-object"),
                    a = e("../vnode/is-vhook"),
                    o = e("./is-soft-set-hook"),
                    h = e("./undefined-value"),
                    r = e("./attributes");

                function s(e, t, n, r) {
                    if (r) {
                        var i = r[t];
                        if (a(i)) i.unhook && i.unhook(e, t, n);
                        else if ("attributes" === t)
                            for (var o in i) e.removeAttribute(o);
                        else if ("style" === t)
                            for (var s in i) e.style[s] = "";
                        else e[t] = "string" == typeof i ? "" : null
                    }
                }

                function c(e, t, n) {
                    try {
                        e[t] = r.attributeToPropertyValue(t, n)
                    } catch (e) {}
                }

                function u(e, t, n, r) {
                    var i = t ? t[n] : void 0;
                    if ("attributes" !== n)
                        if (i && d(i) && p(i) !== p(r)) e[n] = r;
                        else {
                            d(e[n]) || (e[n] = {});
                            var o = "style" === n ? "" : void 0,
                                s = 0;
                            for (var a in r) {
                                var c = r[a];
                                e[n][a] = h.isUndefined(c) ? o : c, "style" === n && "" === e[n].item(s) && (whitespace = 0 < s ? " " : "", property = whitespace + a + ": " + e[n][a] + ";", e[n].cssText = e[n].cssText + property), s++
                            }
                        }
                    else
                        for (var u in r) {
                            var l = r[u];
                            try {
                                h.isUndefined(l) ? e.removeAttribute(u) : e.setAttribute(u, l)
                            } catch (e) {}
                        }
                }

                function p(e) {
                    return Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__ || e.constructor.prototype
                }
                t.exports = function (e, t, n) {
                    for (var r in t) {
                        var i = t[r];
                        h.isUndefined(i) ? s(e, r, i, n) : a(i) ? (s(e, r, i, n), i.hook && i.hook(e, r, n ? n[r] : void 0)) : o(i) ? (s(e, r, i, n), c(e, r, i.value)) : d(i) ? u(e, n, r, i) : c(e, r, i)
                    }
                }
            }, {
                "../vnode/is-vhook": 50,
                "./attributes": 38,
                "./is-soft-set-hook": 40,
                "./undefined-value": 41,
                "is-object": 8
            }],
            38: [function (e, t, n) {
                var r = ["checked", "disabled", "hidden", "ismap", "multiple", "noresize", "readonly", "selected"];

                function i(e) {
                    return 0 <= r.indexOf(e)
                }
                t.exports = {
                    isBooleanAttribute: i,
                    attributeToPropertyValue: function (e, t) {
                        return i(e) && !1 !== t && (t = !0), t
                    }
                }
            }, {}],
            39: [function (e, t, n) {
                var l = e("global/document"),
                    d = e("./apply-properties"),
                    h = e("../vnode/is-vnode.js"),
                    p = e("../vnode/is-vtext.js"),
                    f = e("../vnode/is-widget.js"),
                    m = e("../vnode/handle-thunk.js");

                function g(t, n) {
                    try {
                        return null === t.namespace ? n.createElement(t.tagName) : n.createElementNS(t.namespace, t.tagName)
                    } catch (e) {
                        if (e.INVALID_CHARACTER_ERR === e.code && "DIV" !== t.tagName) return t.tagName = "DIV", g(t, n);
                        throw e
                    }
                }
                t.exports = function e(t, n) {
                    var r = n && n.document || l,
                        i = n ? n.warn : null;
                    if (t = m(t).a, f(t)) return t.init();
                    if (p(t)) return r.createTextNode(t.text);
                    if (!h(t)) return i && i("Item is not a valid virtual dom node", t), null;
                    var o = g(t, r),
                        s = t.properties;
                    d(o, s);
                    for (var a = t.children, c = 0; c < a.length; c++) {
                        var u = e(a[c], n);
                        u && o.appendChild(u)
                    }
                    return o
                }
            }, {
                "../vnode/handle-thunk.js": 48,
                "../vnode/is-vnode.js": 51,
                "../vnode/is-vtext.js": 52,
                "../vnode/is-widget.js": 53,
                "./apply-properties": 37,
                "global/document": 5
            }],
            40: [function (e, t, n) {
                t.exports = function (e) {
                    return e && "object" == typeof e && void 0 !== e.value
                }
            }, {}],
            41: [function (e, t, n) {
                var r = "____UnDeFiNeD____";
                t.exports = {
                    isUndefined: function (e) {
                        return void 0 === e || e === r
                    },
                    undefinedConst: r
                }
            }, {}],
            42: [function (e, t, n) {
                "use strict";

                function r(e, t) {
                    if (!(this instanceof r)) return new r(e, t);
                    this.namespace = e, this.value = t
                }(t.exports = r).prototype.hook = function (e, t, n) {
                    n && "AttributeHook" === n.type && n.value === this.value && n.namespace === this.namespace || e.setAttributeNS(this.namespace, t, this.value)
                }, r.prototype.unhook = function (e, t, n) {
                    if (!n || "AttributeHook" !== n.type || n.namespace !== this.namespace) {
                        var r = t.indexOf(":"),
                            i = -1 < r ? t.substr(r + 1) : t;
                        e.removeAttributeNS(this.namespace, i)
                    }
                }, r.prototype.type = "AttributeHook"
            }, {}],
            43: [function (e, t, n) {
                "use strict";
                var i = e("ev-store");

                function r(e) {
                    if (!(this instanceof r)) return new r(e);
                    this.value = e
                }(t.exports = r).prototype.hook = function (e, t) {
                    var n = i(e),
                        r = t.substr(3);
                    n[r] = this.value
                }, r.prototype.unhook = function (e, t) {
                    var n = i(e),
                        r = t.substr(3);
                    n[r] = void 0
                }
            }, {
                "ev-store": 4
            }],
            44: [function (e, t, n) {
                "use strict";

                function r(e) {
                    if (!(this instanceof r)) return new r(e);
                    this.value = e
                }(t.exports = r).prototype.hook = function (e, t) {
                    e[t] !== this.value && (e[t] = this.value)
                }
            }, {}],
            45: [function (e, t, n) {
                "use strict";
                var d = e("x-is-array"),
                    h = e("../vnode/vnode.js"),
                    p = e("../vnode/vtext.js"),
                    r = e("../vnode/is-vnode"),
                    i = e("../vnode/is-vtext"),
                    o = e("../vnode/is-widget"),
                    f = e("../vnode/is-vhook"),
                    s = e("../vnode/is-thunk"),
                    m = e("./parse-tag.js"),
                    g = e("./hooks/soft-set-hook.js"),
                    v = e("./hooks/ev-hook.js");

                function E(e) {
                    return r(e) || i(e) || o(e) || s(e)
                }

                function C(e) {
                    var t = Error();
                    return t.type = "virtual-hyperscript.unexpected.virtual-element", t.message = "Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n" + y(e.foreignObject) + ".\nThe parent vnode is:\n" + y(e.parentVnode), t.foreignObject = e.foreignObject, t.parentVnode = e.parentVnode, t
                }

                function y(t) {
                    try {
                        return JSON.stringify(t, null, "    ")
                    } catch (e) {
                        return t + ""
                    }
                }
                t.exports = function (e, t, n) {
                    var r, i, o, s, a, c, u, l = [];
                    if (!n && ("string" == typeof (a = t) || d(a) || E(a)) && (n = t, i = {}), r = m(e, i = i || t || {}), i.hasOwnProperty("key") && (o = i.key, i.key = void 0), i.hasOwnProperty("namespace") && (s = i.namespace, i.namespace = void 0), "INPUT" === r && !s && i.hasOwnProperty("value") && void 0 !== i.value && !f(i.value)) {
                        if (null !== i.value && "string" != typeof i.value) throw c = {
                            expected: "String",
                            received: typeof i.value,
                            Vnode: {
                                tagName: r,
                                properties: i
                            }
                        }, (u = Error()).type = "virtual-hyperscript.unsupported.value-type", u.message = "Unexpected value type for input passed to h().\nExpected a " + y(c.expected) + " but got:\n" + y(c.received) + ".\nThe vnode is:\n" + y(c.Vnode), u.Vnode = c.Vnode, u;
                        i.value = g(i.value)
                    }
                    return function (e) {
                        for (var t in e)
                            if (e.hasOwnProperty(t)) {
                                var n = e[t];
                                if (f(n)) continue;
                                "ev-" === t.substr(0, 3) && (e[t] = v(n))
                            }
                    }(i), null != n && function e(t, n, r, i) {
                        if ("string" == typeof t) n.push(new p(t));
                        else if ("number" == typeof t) n.push(new p(t + ""));
                        else if (E(t)) n.push(t);
                        else {
                            if (!d(t)) {
                                if (null == t) return;
                                throw C({
                                    foreignObject: t,
                                    parentVnode: {
                                        tagName: r,
                                        properties: i
                                    }
                                })
                            }
                            for (var o = 0; o < t.length; o++) e(t[o], n, r, i)
                        }
                    }(n, l, r, i), new h(r, i, l, o, s)
                }
            }, {
                "../vnode/is-thunk": 49,
                "../vnode/is-vhook": 50,
                "../vnode/is-vnode": 51,
                "../vnode/is-vtext": 52,
                "../vnode/is-widget": 53,
                "../vnode/vnode.js": 55,
                "../vnode/vtext.js": 57,
                "./hooks/ev-hook.js": 43,
                "./hooks/soft-set-hook.js": 44,
                "./parse-tag.js": 46,
                "x-is-array": 60
            }],
            46: [function (e, t, n) {
                "use strict";
                var u = e("browser-split"),
                    l = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,
                    d = /^\.|#/;
                t.exports = function (e, t) {
                    if (!e) return "DIV";
                    var n, r, i, o, s = !t.hasOwnProperty("id"),
                        a = u(e, l),
                        c = null;
                    for (d.test(a[1]) && (c = "DIV"), o = 0; o < a.length; o++)(r = a[o]) && (i = r.charAt(0), c ? "." === i ? (n = n || []).push(r.substring(1, r.length)) : "#" === i && s && (t.id = r.substring(1, r.length)) : c = r);
                    return n && (t.className && n.push(t.className), t.className = n.join(" ")), t.namespace ? c : c.toUpperCase()
                }
            }, {
                "browser-split": 3
            }],
            47: [function (e, t, n) {
                "use strict";
                var r = null,
                    i = "http://www.w3.org/1999/xlink",
                    o = "http://www.w3.org/XML/1998/namespace",
                    s = {
                        about: r,
                        "accent-height": r,
                        accumulate: r,
                        additive: r,
                        "alignment-baseline": r,
                        alphabetic: r,
                        amplitude: r,
                        "arabic-form": r,
                        ascent: r,
                        attributeName: r,
                        attributeType: r,
                        azimuth: r,
                        bandwidth: r,
                        baseFrequency: r,
                        baseProfile: r,
                        "baseline-shift": r,
                        bbox: r,
                        begin: r,
                        bias: r,
                        by: r,
                        calcMode: r,
                        "cap-height": r,
                        class: r,
                        clip: r,
                        "clip-path": r,
                        "clip-rule": r,
                        clipPathUnits: r,
                        color: r,
                        "color-interpolation": r,
                        "color-interpolation-filters": r,
                        "color-profile": r,
                        "color-rendering": r,
                        content: r,
                        contentScriptType: r,
                        contentStyleType: r,
                        cursor: r,
                        cx: r,
                        cy: r,
                        d: r,
                        datatype: r,
                        defaultAction: r,
                        descent: r,
                        diffuseConstant: r,
                        direction: r,
                        display: r,
                        divisor: r,
                        "dominant-baseline": r,
                        dur: r,
                        dx: r,
                        dy: r,
                        edgeMode: r,
                        editable: r,
                        elevation: r,
                        "enable-background": r,
                        end: r,
                        "ev:event": "http://www.w3.org/2001/xml-events",
                        event: r,
                        exponent: r,
                        externalResourcesRequired: r,
                        fill: r,
                        "fill-opacity": r,
                        "fill-rule": r,
                        filter: r,
                        filterRes: r,
                        filterUnits: r,
                        "flood-color": r,
                        "flood-opacity": r,
                        focusHighlight: r,
                        focusable: r,
                        "font-family": r,
                        "font-size": r,
                        "font-size-adjust": r,
                        "font-stretch": r,
                        "font-style": r,
                        "font-variant": r,
                        "font-weight": r,
                        format: r,
                        from: r,
                        fx: r,
                        fy: r,
                        g1: r,
                        g2: r,
                        "glyph-name": r,
                        "glyph-orientation-horizontal": r,
                        "glyph-orientation-vertical": r,
                        glyphRef: r,
                        gradientTransform: r,
                        gradientUnits: r,
                        handler: r,
                        hanging: r,
                        height: r,
                        "horiz-adv-x": r,
                        "horiz-origin-x": r,
                        "horiz-origin-y": r,
                        id: r,
                        ideographic: r,
                        "image-rendering": r,
                        in: r,
                        in2: r,
                        initialVisibility: r,
                        intercept: r,
                        k: r,
                        k1: r,
                        k2: r,
                        k3: r,
                        k4: r,
                        kernelMatrix: r,
                        kernelUnitLength: r,
                        kerning: r,
                        keyPoints: r,
                        keySplines: r,
                        keyTimes: r,
                        lang: r,
                        lengthAdjust: r,
                        "letter-spacing": r,
                        "lighting-color": r,
                        limitingConeAngle: r,
                        local: r,
                        "marker-end": r,
                        "marker-mid": r,
                        "marker-start": r,
                        markerHeight: r,
                        markerUnits: r,
                        markerWidth: r,
                        mask: r,
                        maskContentUnits: r,
                        maskUnits: r,
                        mathematical: r,
                        max: r,
                        media: r,
                        mediaCharacterEncoding: r,
                        mediaContentEncodings: r,
                        mediaSize: r,
                        mediaTime: r,
                        method: r,
                        min: r,
                        mode: r,
                        name: r,
                        "nav-down": r,
                        "nav-down-left": r,
                        "nav-down-right": r,
                        "nav-left": r,
                        "nav-next": r,
                        "nav-prev": r,
                        "nav-right": r,
                        "nav-up": r,
                        "nav-up-left": r,
                        "nav-up-right": r,
                        numOctaves: r,
                        observer: r,
                        offset: r,
                        opacity: r,
                        operator: r,
                        order: r,
                        orient: r,
                        orientation: r,
                        origin: r,
                        overflow: r,
                        overlay: r,
                        "overline-position": r,
                        "overline-thickness": r,
                        "panose-1": r,
                        path: r,
                        pathLength: r,
                        patternContentUnits: r,
                        patternTransform: r,
                        patternUnits: r,
                        phase: r,
                        playbackOrder: r,
                        "pointer-events": r,
                        points: r,
                        pointsAtX: r,
                        pointsAtY: r,
                        pointsAtZ: r,
                        preserveAlpha: r,
                        preserveAspectRatio: r,
                        primitiveUnits: r,
                        propagate: r,
                        property: r,
                        r: r,
                        radius: r,
                        refX: r,
                        refY: r,
                        rel: r,
                        "rendering-intent": r,
                        repeatCount: r,
                        repeatDur: r,
                        requiredExtensions: r,
                        requiredFeatures: r,
                        requiredFonts: r,
                        requiredFormats: r,
                        resource: r,
                        restart: r,
                        result: r,
                        rev: r,
                        role: r,
                        rotate: r,
                        rx: r,
                        ry: r,
                        scale: r,
                        seed: r,
                        "shape-rendering": r,
                        slope: r,
                        snapshotTime: r,
                        spacing: r,
                        specularConstant: r,
                        specularExponent: r,
                        spreadMethod: r,
                        startOffset: r,
                        stdDeviation: r,
                        stemh: r,
                        stemv: r,
                        stitchTiles: r,
                        "stop-color": r,
                        "stop-opacity": r,
                        "strikethrough-position": r,
                        "strikethrough-thickness": r,
                        string: r,
                        stroke: r,
                        "stroke-dasharray": r,
                        "stroke-dashoffset": r,
                        "stroke-linecap": r,
                        "stroke-linejoin": r,
                        "stroke-miterlimit": r,
                        "stroke-opacity": r,
                        "stroke-width": r,
                        surfaceScale: r,
                        syncBehavior: r,
                        syncBehaviorDefault: r,
                        syncMaster: r,
                        syncTolerance: r,
                        syncToleranceDefault: r,
                        systemLanguage: r,
                        tableValues: r,
                        target: r,
                        targetX: r,
                        targetY: r,
                        "text-anchor": r,
                        "text-decoration": r,
                        "text-rendering": r,
                        textLength: r,
                        timelineBegin: r,
                        title: r,
                        to: r,
                        transform: r,
                        transformBehavior: r,
                        type: r,
                        typeof: r,
                        u1: r,
                        u2: r,
                        "underline-position": r,
                        "underline-thickness": r,
                        unicode: r,
                        "unicode-bidi": r,
                        "unicode-range": r,
                        "units-per-em": r,
                        "v-alphabetic": r,
                        "v-hanging": r,
                        "v-ideographic": r,
                        "v-mathematical": r,
                        values: r,
                        version: r,
                        "vert-adv-y": r,
                        "vert-origin-x": r,
                        "vert-origin-y": r,
                        viewBox: r,
                        viewTarget: r,
                        visibility: r,
                        width: r,
                        widths: r,
                        "word-spacing": r,
                        "writing-mode": r,
                        x: r,
                        "x-height": r,
                        x1: r,
                        x2: r,
                        xChannelSelector: r,
                        "xlink:actuate": i,
                        "xlink:arcrole": i,
                        "xlink:href": i,
                        "xlink:role": i,
                        "xlink:show": i,
                        "xlink:title": i,
                        "xlink:type": i,
                        "xml:base": o,
                        "xml:id": o,
                        "xml:lang": o,
                        "xml:space": o,
                        y: r,
                        y1: r,
                        y2: r,
                        yChannelSelector: r,
                        z: r,
                        zoomAndPan: r
                    };
                t.exports = function (e) {
                    if (s.hasOwnProperty(e)) return s[e]
                }
            }, {}],
            48: [function (e, t, n) {
                var r = e("./is-vnode"),
                    i = e("./is-vtext"),
                    o = e("./is-widget"),
                    s = e("./is-thunk");

                function a(e, t) {
                    var n = e.vnode;
                    if (n || (n = e.vnode = e.render(t)), !(r(n) || i(n) || o(n))) throw Error("thunk did not return a valid node");
                    return n
                }
                t.exports = function (e, t) {
                    var n = e,
                        r = t;
                    return s(t) && (r = a(t, e)), s(e) && (n = a(e, null)), {
                        a: n,
                        b: r
                    }
                }
            }, {
                "./is-thunk": 49,
                "./is-vnode": 51,
                "./is-vtext": 52,
                "./is-widget": 53
            }],
            49: [function (e, t, n) {
                t.exports = function (e) {
                    return e && "Thunk" === e.type
                }
            }, {}],
            50: [function (e, t, n) {
                t.exports = function (e) {
                    return e && ("function" == typeof e.hook && !e.hasOwnProperty("hook") || "function" == typeof e.unhook && !e.hasOwnProperty("unhook"))
                }
            }, {}],
            51: [function (e, t, n) {
                var r = e("./version");
                t.exports = function (e) {
                    return e && "VirtualNode" === e.type && e.version === r
                }
            }, {
                "./version": 54
            }],
            52: [function (e, t, n) {
                var r = e("./version");
                t.exports = function (e) {
                    return e && "VirtualText" === e.type && e.version === r
                }
            }, {
                "./version": 54
            }],
            53: [function (e, t, n) {
                t.exports = function (e) {
                    return e && "Widget" === e.type
                }
            }, {}],
            54: [function (e, t, n) {
                t.exports = "2"
            }, {}],
            55: [function (e, t, n) {
                var r = e("./version"),
                    m = e("./is-vnode"),
                    g = e("./is-widget"),
                    v = e("./is-thunk"),
                    E = e("./is-vhook");
                t.exports = i;
                var C = {},
                    y = [];

                function i(e, t, n, r, i) {
                    this.tagName = e, this.properties = t || C, this.children = n || y, this.key = null != r ? r + "" : void 0, this.namespace = "string" == typeof i ? i : null;
                    var o, s = n && n.length || 0,
                        a = 0,
                        c = !1,
                        u = !1,
                        l = !1;
                    for (var d in t)
                        if (t.hasOwnProperty(d)) {
                            var h = t[d];
                            E(h) && h.unhook && (o || (o = {}), o[d] = h)
                        } for (var p = 0; p < s; p++) {
                        var f = n[p];
                        m(f) ? (a += f.count || 0, !c && f.hasWidgets && (c = !0), !u && f.hasThunks && (u = !0), l || !f.hooks && !f.descendantHooks || (l = !0)) : !c && g(f) ? "function" == typeof f.destroy && (c = !0) : !u && v(f) && (u = !0)
                    }
                    this.count = s + a, this.hasWidgets = c, this.hasThunks = u, this.hooks = o, this.descendantHooks = l
                }
                i.prototype.version = r, i.prototype.type = "VirtualNode"
            }, {
                "./is-thunk": 49,
                "./is-vhook": 50,
                "./is-vnode": 51,
                "./is-widget": 53,
                "./version": 54
            }],
            56: [function (e, t, n) {
                var r = e("./version");

                function i(e, t, n) {
                    this.type = +e, this.vNode = t, this.patch = n
                }
                i.NONE = 0, i.VTEXT = 1, i.VNODE = 2, i.WIDGET = 3, i.PROPS = 4, i.ORDER = 5, i.INSERT = 6, i.REMOVE = 7, i.THUNK = 8, (t.exports = i).prototype.version = r, i.prototype.type = "VirtualPatch"
            }, {
                "./version": 54
            }],
            57: [function (e, t, n) {
                var r = e("./version");

                function i(e) {
                    this.text = e + ""
                }(t.exports = i).prototype.version = r, i.prototype.type = "VirtualText"
            }, {
                "./version": 54
            }],
            58: [function (e, t, n) {
                var u = e("is-object"),
                    l = e("../vnode/is-vhook");

                function d(e) {
                    return Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__ ? e.__proto__ : e.constructor ? e.constructor.prototype : void 0
                }
                t.exports = function e(t, n) {
                    var r;
                    for (var i in t) {
                        i in n || ((r = r || {})[i] = void 0);
                        var o = t[i],
                            s = n[i];
                        if (o !== s)
                            if (u(o) && u(s))
                                if (d(s) !== d(o))(r = r || {})[i] = s;
                                else if (l(s))(r = r || {})[i] = s;
                        else {
                            var a = e(o, s);
                            a && ((r = r || {})[i] = a)
                        } else(r = r || {})[i] = s
                    }
                    for (var c in n) c in t || ((r = r || {})[c] = n[c]);
                    return r
                }
            }, {
                "../vnode/is-vhook": 50,
                "is-object": 8
            }],
            59: [function (e, t, n) {
                var r = e("x-is-array"),
                    f = e("../vnode/vpatch"),
                    m = e("../vnode/is-vnode"),
                    a = e("../vnode/is-vtext"),
                    c = e("../vnode/is-widget"),
                    u = e("../vnode/is-thunk"),
                    s = e("../vnode/handle-thunk"),
                    l = e("./diff-props");

                function d(e, t) {
                    var n = {
                        a: e
                    };
                    return g(e, t, n, 0), n
                }

                function g(e, t, n, r) {
                    if (e !== t) {
                        var i = n[r],
                            o = !1;
                        if (u(e) || u(t)) p(e, t, n, r);
                        else if (null == t) c(e) || (h(e, n, r), i = n[r]), i = E(i, new f(f.REMOVE, e, t));
                        else if (m(t))
                            if (m(e))
                                if (e.tagName === t.tagName && e.namespace === t.namespace && e.key === t.key) {
                                    var s = l(e.properties, t.properties);
                                    s && (i = E(i, new f(f.PROPS, e, s))), i = function (e, t, n, r, i) {
                                        for (var o = e.children, s = function (e, t) {
                                                var n = x(t),
                                                    r = n.keys,
                                                    i = n.free;
                                                if (i.length === t.length) return {
                                                    children: t,
                                                    moves: null
                                                };
                                                var o = x(e),
                                                    s = o.keys;
                                                if (o.free.length === e.length) return {
                                                    children: t,
                                                    moves: null
                                                };
                                                for (var a = [], c = 0, u = i.length, l = 0, d = 0; d < e.length; d++) {
                                                    var h, p = e[d];
                                                    p.key ? r.hasOwnProperty(p.key) ? (h = r[p.key], a.push(t[h])) : (h = d - l++, a.push(null)) : c < u ? (h = i[c++], a.push(t[h])) : (h = d - l++, a.push(null))
                                                }
                                                for (var f = c >= i.length ? t.length : i[c], m = 0; m < t.length; m++) {
                                                    var g = t[m];
                                                    g.key ? s.hasOwnProperty(g.key) || a.push(g) : f <= m && a.push(g)
                                                }
                                                for (var v, E = a.slice(), C = 0, y = [], w = [], S = 0; S < t.length;) {
                                                    var b = t[S];
                                                    for (v = E[C]; null === v && E.length;) y.push(k(E, C, null)), v = E[C];
                                                    v && v.key === b.key ? (C++, S++) : b.key ? (v && v.key && r[v.key] !== S + 1 ? (y.push(k(E, C, v.key)), (v = E[C]) && v.key === b.key ? C++ : w.push({
                                                        key: b.key,
                                                        to: S
                                                    })) : w.push({
                                                        key: b.key,
                                                        to: S
                                                    }), S++) : v && v.key && y.push(k(E, C, v.key))
                                                }
                                                for (; C < E.length;) v = E[C], y.push(k(E, C, v && v.key));
                                                return y.length !== l || w.length ? {
                                                    children: a,
                                                    moves: {
                                                        removes: y,
                                                        inserts: w
                                                    }
                                                } : {
                                                    children: a,
                                                    moves: null
                                                }
                                            }(o, t.children), a = s.children, c = o.length, u = a.length, l = u < c ? c : u, d = 0; d < l; d++) {
                                            var h = o[d],
                                                p = a[d];
                                            i += 1, h ? g(h, p, n, i) : p && (r = E(r, new f(f.INSERT, null, p))), m(h) && h.count && (i += h.count)
                                        }
                                        return s.moves && (r = E(r, new f(f.ORDER, e, s.moves))), r
                                    }(e, t, n, i, r)
                                } else i = E(i, new f(f.VNODE, e, t)), o = !0;
                        else i = E(i, new f(f.VNODE, e, t)), o = !0;
                        else a(t) ? a(e) ? e.text !== t.text && (i = E(i, new f(f.VTEXT, e, t))) : (i = E(i, new f(f.VTEXT, e, t)), o = !0) : c(t) && (c(e) || (o = !0), i = E(i, new f(f.WIDGET, e, t)));
                        i && (n[r] = i), o && h(e, n, r)
                    }
                }

                function h(e, t, n) {
                    ! function e(t, n, r) {
                        if (m(t)) {
                            if (t.hooks && (n[r] = E(n[r], new f(f.PROPS, t, v(t.hooks)))), t.descendantHooks || t.hasThunks)
                                for (var i = t.children, o = i.length, s = 0; s < o; s++) {
                                    var a = i[s];
                                    e(a, n, r += 1), m(a) && a.count && (r += a.count)
                                }
                        } else u(t) && p(t, null, n, r)
                    }(e, t, n),
                    function e(t, n, r) {
                        if (c(t)) "function" == typeof t.destroy && (n[r] = E(n[r], new f(f.REMOVE, t, null)));
                        else if (m(t) && (t.hasWidgets || t.hasThunks))
                            for (var i = t.children, o = i.length, s = 0; s < o; s++) {
                                var a = i[s];
                                e(a, n, r += 1), m(a) && a.count && (r += a.count)
                            } else u(t) && p(t, null, n, r)
                    }(e, t, n)
                }

                function p(e, t, n, r) {
                    var i = s(e, t),
                        o = d(i.a, i.b);
                    (function (e) {
                        for (var t in e)
                            if ("a" !== t) return !0;
                        return !1
                    })(o) && (n[r] = new f(f.THUNK, null, o))
                }

                function v(e) {
                    var t = {};
                    for (var n in e) t[n] = void 0;
                    return t
                }

                function k(e, t, n) {
                    return e.splice(t, 1), {
                        from: t,
                        key: n
                    }
                }

                function x(e) {
                    for (var t = {}, n = [], r = e.length, i = 0; i < r; i++) {
                        var o = e[i];
                        o.key ? t[o.key] = i : n.push(i)
                    }
                    return {
                        keys: t,
                        free: n
                    }
                }

                function E(e, t) {
                    return e ? (r(e) ? e.push(t) : e = [e, t], e) : t
                }
                t.exports = d
            }, {
                "../vnode/handle-thunk": 48,
                "../vnode/is-thunk": 49,
                "../vnode/is-vnode": 51,
                "../vnode/is-vtext": 52,
                "../vnode/is-widget": 53,
                "../vnode/vpatch": 56,
                "./diff-props": 58,
                "x-is-array": 60
            }],
            60: [function (e, t, n) {
                var r = Array.isArray,
                    i = Object.prototype.toString;
                t.exports = r || function (e) {
                    return "[object Array]" === i.call(e)
                }
            }, {}],
            61: [function (e, t, n) {
                "use strict";
                var r = /\/\*[^]*?\*\//g,
                    i = [/(@import\s+)(')(.+?)(')/gi, /(@import\s+)(")(.+?)(")/gi, /(url\s*\()(\s*)([^\s'")].*?)(\))/gi, /(url\s*\()(\s*')([^']+?)(')/gi, /(url\s*\()(\s*")([^"]+?)(")/gi];
                t.exports = {
                    getQueryParam: function (e, t) {
                        if (e) return (e = new URL(e)).searchParams.get(t)
                    },
                    addQueryParam: function (e, t, n) {
                        var r = new URL(e);
                        return r.searchParams.set(t, n), r.toString()
                    },
                    updateScheme: function (e, t) {
                        return e && t && /^blob:http/.test(e) && (e = e.replace(/^blob:/, "")), e && /^http:\//.test(e) ? e.replace(/^http:\/\//, "https://scheme.updated.") : e
                    },
                    processCSS: function (e, t) {
                        return e = e.replace(r, ""), t && (e = e.replace(/:hover/g, ".__ce_hover_state")), e = e.replace(/device-width(\s)*:/g, "width:").replace(/device-height(\s)*:/g, "height:"), this.updateUrlsinCSS(e, t)
                    },
                    updateUrlsinCSS: function (e, o) {
                        var s = this;
                        return i.reduce(function (e, t) {
                            return "number" == typeof e ? e : e.replace(t, function (e, t, n, r, i) {
                                return t + n + s.updateScheme(r, o) + i
                            })
                        }, e)
                    },
                    processSrcSet: function (t) {
                        var i = this;
                        try {
                            if (t) {
                                var e = t.trim().split(/\s*,\s*/);
                                return (e = e.map(function (e) {
                                    var t = void 0,
                                        n = void 0,
                                        r = /(.*)(\s.*)/.exec(e);
                                    return n = r ? (t = r[1], r[2]) : (t = e, ""), "" + (t = i.updateScheme(t)) + n
                                })).join(",")
                            }
                            return t
                        } catch (e) {
                            return this.updateScheme(t)
                        }
                    },
                    hasCssUrls: function (t) {
                        return i.some(function (e) {
                            return e.test(t)
                        })
                    },
                    getWindowUrl: function (e, t) {
                        return new Promise(function (n) {
                            if (t) n(e.request.url);
                            else {
                                var r = e.clientId;
                                r ? "get" in clients ? clients.get(r).then(function (e) {
                                    n(e && e.url)
                                }) : clients.matchAll({
                                    type: "window"
                                }).then(function (e) {
                                    var t = e.find(function (e) {
                                        return e.id === r
                                    });
                                    n(t && t.url)
                                }) : n()
                            }
                        })
                    },
                    getBody: function (e) {
                        return -1 < ["GET", "HEAD"].indexOf(e.method) ? Promise.resolve() : e.text()
                    },
                    isFontFile: function (e) {
                        return /\.(ttf|woff|woff2|eot|otf)$/i.test(e)
                    }
                }
            }, {}],
            62: [function (e, t, n) {
                "use strict";
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    s = e("virtual-dom/vnode/is-vnode"),
                    a = (e("virtual-dom/h"), e("./utils")),
                    c = e("virtual-dom/vdom/undefined-value"),
                    u = ["src", "href"],
                    l = ["integrity", "crossorigin"];

                function d(e, t) {
                    t && t.length && Array.prototype.push.apply(e, t)
                }

                function o(e, t) {
                    for (var n, r = 0 <= ["HTML", "HEAD", "BODY", "BASE"].indexOf(t), i = [e], o = []; n = i.shift();)
                        if (s(n)) {
                            if (n.tagName.toUpperCase() === t.toUpperCase() && (o.push(n), r)) return o;
                            d(i, n.children)
                        } return o
                }

                function h(e) {
                    var t, n = [];
                    for (var r in e) 0 <= (t = +r) && n.push(t);
                    return n
                }

                function p(e) {
                    var t = e.x ? "x" : "text",
                        n = "";
                    e[t] && (n = a.processCSS(e[t], !0)), e[t] = n
                }

                function f(e) {
                    var n, t, r, i, o;
                    n = e, u.forEach(function (e) {
                        var t = n[e];
                        t && (n[e] = a.updateScheme(t, !0))
                    }), (o = (i = e).srcset) && (i.srcset = a.processSrcSet(o)), r = e.style, c.isUndefined(r) || Object.keys(r).forEach(function (e) {
                        r[e] = a.updateUrlsinCSS(r[e])
                    }), t = e, l.forEach(function (e) {
                        delete t[e], t.attributes && delete t.attributes[e]
                    })
                }

                function m(e, t) {
                    if (null !== e && "object" === (void 0 === e ? "undefined" : i(e))) {
                        if (e.c)
                            for (var n = 0; n < e.c.length; n++) m(e.c[n], {
                                proxyUrl: t.proxyUrl,
                                baseUrl: t.baseUrl,
                                parent: e,
                                index: t.index + 1 + n,
                                cacheParam: t.cacheParam
                            });
                        if (e.p && f(e.p), e.x) {
                            var r = t.parent ? "STYLE" === t.parent.tn : a.hasCssUrls(e.x);
                            r && p(e)
                        }
                    }
                }

                function g(e, t) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        4 === r[0] ? m({
                            p: r[1]
                        }, t) : m(r[1], t), m(r[2], t)
                    }
                }
                t.exports = {
                    getBaseUrl: function (e, t) {
                        var n = o(e, "BASE")[0],
                            r = t;
                        return n && (r = n.properties.href || n.properties.attributes && n.properties.attributes.href || "", r = new URL(r, t).href), r
                    },
                    vNodeCleanupUrls: function (e) {
                        for (var t, n = [e]; t = n.shift();) s(t) && (f(t.properties), "STYLE" === t.tagName && t.children[0] && p(t.children[0])), d(n, t.children);
                        return e
                    },
                    patchCleanupUrls: function (t, n, r, i) {
                        return h(t).forEach(function (e) {
                            g(t[e], {
                                proxyUrl: n,
                                baseUrl: r,
                                index: e,
                                cacheParam: i
                            })
                        }), t
                    },
                    processInlineCSS: p,
                    findNodesByTagName: o
                }
            }, {
                "./utils": 61,
                "virtual-dom/h": 36,
                "virtual-dom/vdom/undefined-value": 41,
                "virtual-dom/vnode/is-vnode": 51
            }]
        }, {}, [1])(1)
    }(), CE2.post = {
        send: function (e, t, n, r) {
            var i, o = this.encodeParams;
            r && CE2.n && CE2.n.sendBeacon ? (CE2.n.sendBeacon(e, o(t)), n && n()) : ((i = CE2.w.XMLHttpRequest && new XMLHttpRequest).onreadystatechange = function () {
                n && 4 == i.readyState && n(i)
            }, i.open("POST", e), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.send(o(t)))
        },
        sendPlain: function (e, t) {
            var n = CE2.w.XMLHttpRequest && new XMLHttpRequest;
            n.open("POST", e), n.setRequestHeader("Content-type", "text/plain"), n.send(t)
        },
        sendJSON: function (e, t) {
            var n = CE2.w.XMLHttpRequest && new XMLHttpRequest;
            n.open("POST", e), n.setRequestHeader("Content-type", "text/plain"), n.send(CE2.JSON.stringify(t))
        },
        encodeParams: function (e) {
            var n = "",
                r = encodeURIComponent;
            return CE2.each(e, function (e, t) {
                null != e && CE2.strip("" + e) && (n.length && (n += "&"), n += r(t) + "=" + r(e))
            }), n
        }
    }, CE2.LZString = function () {
        var v = String.fromCharCode,
            n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
            r = {};
        var i = {
            compressToBase64: function (e) {
                if (null == e) return "";
                var t = i._compress(e, 6, function (e) {
                    return n.charAt(e)
                });
                switch (t.length % 4) {
                    default:
                    case 0:
                        return t;
                    case 1:
                        return t + "===";
                    case 2:
                        return t + "==";
                    case 3:
                        return t + "="
                }
            },
            decompressFromBase64: function (t) {
                return null == t ? "" : "" == t ? null : i._decompress(t.length, 32, function (e) {
                    return function (e, t) {
                        if (!r[e]) {
                            r[e] = {};
                            for (var n = 0; n < e.length; n++) r[e][e.charAt(n)] = n
                        }
                        return r[e][t]
                    }(n, t.charAt(e))
                })
            },
            compress: function (e) {
                return i._compress(e, 16, function (e) {
                    return v(e)
                })
            },
            _compress: function (e, t, n) {
                if (null == e) return "";
                var r, i, o, s = {},
                    a = {},
                    c = "",
                    u = "",
                    l = "",
                    d = 2,
                    h = 3,
                    p = 2,
                    f = [],
                    m = 0,
                    g = 0;
                for (o = 0; o < e.length; o += 1)
                    if (c = e.charAt(o), Object.prototype.hasOwnProperty.call(s, c) || (s[c] = h++, a[c] = !0), u = l + c, Object.prototype.hasOwnProperty.call(s, u)) l = u;
                    else {
                        if (Object.prototype.hasOwnProperty.call(a, l)) {
                            if (l.charCodeAt(0) < 256) {
                                for (r = 0; r < p; r++) m <<= 1, g == t - 1 ? (g = 0, f.push(n(m)), m = 0) : g++;
                                for (i = l.charCodeAt(0), r = 0; r < 8; r++) m = m << 1 | 1 & i, g == t - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, i >>= 1
                            } else {
                                for (i = 1, r = 0; r < p; r++) m = m << 1 | i, g == t - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, i = 0;
                                for (i = l.charCodeAt(0), r = 0; r < 16; r++) m = m << 1 | 1 & i, g == t - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, i >>= 1
                            }
                            0 == --d && (d = Math.pow(2, p), p++), delete a[l]
                        } else
                            for (i = s[l], r = 0; r < p; r++) m = m << 1 | 1 & i, g == t - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, i >>= 1;
                        0 == --d && (d = Math.pow(2, p), p++), s[u] = h++, l = c + ""
                    } if ("" !== l) {
                    if (Object.prototype.hasOwnProperty.call(a, l)) {
                        if (l.charCodeAt(0) < 256) {
                            for (r = 0; r < p; r++) m <<= 1, g == t - 1 ? (g = 0, f.push(n(m)), m = 0) : g++;
                            for (i = l.charCodeAt(0), r = 0; r < 8; r++) m = m << 1 | 1 & i, g == t - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, i >>= 1
                        } else {
                            for (i = 1, r = 0; r < p; r++) m = m << 1 | i, g == t - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, i = 0;
                            for (i = l.charCodeAt(0), r = 0; r < 16; r++) m = m << 1 | 1 & i, g == t - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, i >>= 1
                        }
                        0 == --d && (d = Math.pow(2, p), p++), delete a[l]
                    } else
                        for (i = s[l], r = 0; r < p; r++) m = m << 1 | 1 & i, g == t - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, i >>= 1;
                    0 == --d && (d = Math.pow(2, p), p++)
                }
                for (i = 2, r = 0; r < p; r++) m = m << 1 | 1 & i, g == t - 1 ? (g = 0, f.push(n(m)), m = 0) : g++, i >>= 1;
                for (;;) {
                    if (m <<= 1, g == t - 1) {
                        f.push(n(m));
                        break
                    }
                    g++
                }
                return f.join("")
            },
            decompress: function (t) {
                return null == t ? "" : "" == t ? null : i._decompress(t.length, 32768, function (e) {
                    return t.charCodeAt(e)
                })
            },
            _decompress: function (e, t, n) {
                var r, i, o, s, a, c, u, l = [],
                    d = 4,
                    h = 4,
                    p = 3,
                    f = "",
                    m = [],
                    g = {
                        val: n(0),
                        position: t,
                        index: 1
                    };
                for (r = 0; r < 3; r += 1) l[r] = r;
                for (o = 0, a = 4, c = 1; c != a;) s = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = t, g.val = n(g.index++)), o |= (0 < s ? 1 : 0) * c, c <<= 1;
                switch (o) {
                    case 0:
                        for (o = 0, a = 256, c = 1; c != a;) s = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = t, g.val = n(g.index++)), o |= (0 < s ? 1 : 0) * c, c <<= 1;
                        u = v(o);
                        break;
                    case 1:
                        for (o = 0, a = 65536, c = 1; c != a;) s = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = t, g.val = n(g.index++)), o |= (0 < s ? 1 : 0) * c, c <<= 1;
                        u = v(o);
                        break;
                    case 2:
                        return ""
                }
                for (i = l[3] = u, m.push(u);;) {
                    if (g.index > e) return "";
                    for (o = 0, a = Math.pow(2, p), c = 1; c != a;) s = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = t, g.val = n(g.index++)), o |= (0 < s ? 1 : 0) * c, c <<= 1;
                    switch (u = o) {
                        case 0:
                            for (o = 0, a = 256, c = 1; c != a;) s = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = t, g.val = n(g.index++)), o |= (0 < s ? 1 : 0) * c, c <<= 1;
                            l[h++] = v(o), u = h - 1, d--;
                            break;
                        case 1:
                            for (o = 0, a = 65536, c = 1; c != a;) s = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = t, g.val = n(g.index++)), o |= (0 < s ? 1 : 0) * c, c <<= 1;
                            l[h++] = v(o), u = h - 1, d--;
                            break;
                        case 2:
                            return m.join("")
                    }
                    if (0 == d && (d = Math.pow(2, p), p++), l[u]) f = l[u];
                    else {
                        if (u !== h) return null;
                        f = i + i.charAt(0)
                    }
                    m.push(f), l[h++] = i + f.charAt(0), i = f, 0 == --d && (d = Math.pow(2, p), p++)
                }
            }
        };
        return i
    }(),
    function (g) {
        var a = ["input:not([type])", 'input[type=""]', "input[type=text]", "input[type=password]", "input[type=email]", "input[type=number]", "input[type=tel]", "input[type=range]", "textarea", "[contenteditable=true]", '[contenteditable=""]'],
            v = "data-ce-key";

        function c(e, t, n, r) {
            var i = this;
            if (this.caller = c.caller, this.site = e, this.visitor = t, this.state = n, this.id = n.id, this.endpoint = n.endpoint || CE2.SREC_DEST.record, this.lastDiff = n.created, this.settings = r || {}, this.cachedUrls = {}, this.body = CE2.d.body, this.pageRevision = 0, this.cursorStates = [], this.mousePositions = [], this.browser = [], this.userData = {}, this.censoredElements = a.slice(0), this.site.recordingSettings.preCacheImages && (this.CACHED_RESOURCES = "img[src]"), this.site.recordingSettings.maskElements)
                for (var o = JSON.parse(this.site.recordingSettings.maskElements), s = 0; s < o.length; s++) this.censoredElements.push(o[s].selector);
            this.$diff = function () {
                i.diff()
            }, this.$sample = function () {
                i.sample()
            }
        }
        c.prototype = {
            initializeMutationObserver: function () {
                if (MutationObserver) {
                    var t = this;
                    this.mutationObserver = new MutationObserver(function (e) {
                        e.forEach(function (e) {
                            "childList" === e.type && t.onTreeChanged(e)
                        })
                    }), this.mutationObserver.observe(document, {
                        childList: !0,
                        subtree: !0
                    })
                }
            },
            onTreeChanged: function (e) {
                for (var t = 0; t < e.addedNodes.length; ++t) {
                    var n = e.addedNodes[t];
                    n && n.getAttribute && n.getAttribute(v) && parseInt(n.getAttribute(v), 10) !== n._ceKey && this.removeKeyAttributeRecursive(n)
                }
            },
            setKeyAttribute: function (e) {
                for (var t = e ? "*" : ":not([" + v + "])", n = document.querySelectorAll(t), r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = CE2.key++;
                    i.setAttribute(v, o), i._ceKey = o
                }
            },
            removeKeyAttributeRecursive: function (e) {
                e.removeAttribute(v);
                var t = this;
                Array.prototype.slice.call(e.children).forEach(function (e) {
                    t.removeKeyAttributeRecursive(e)
                })
            },
            cacheResources: function () {
                var e = this.collectUrlsFromHtml();
                if ((e = e.concat(this.collectCssUrls())) && 0 < e.length) {
                    var t = e.reduce(function (e, t) {
                        return 0 == t.indexOf("blob:http") ? e[1].push(t) : 0 == t.indexOf("http") && e[0].push(t), e
                    }, [
                        [],
                        []
                    ]);
                    t[0] && 0 < t[0].length && this.cacheNormalUrls(t[0]), this.cacheBlobUrls(t[1])
                }
            },
            collectCssUrls: function () {
                for (var t, e, n = [], r = 0; t = document.styleSheets[r]; r++)
                    if (t.href && 0 != t.href.indexOf("data:") && !this.cachedUrls[t.href]) {
                        try {
                            e = Array.prototype.slice.call(t.cssRules).map(function (e) {
                                return e.cssText
                            }).join(" "), e = btoa(unescape(encodeURIComponent(e))), n.push(this.convertBlobUrl(t.href) + "\t" + e)
                        } catch (e) {
                            n.push(t.href)
                        }
                        this.cachedUrls[t.href] = !0
                    } return n
            },
            collectUrlsFromHtml: function () {
                var e = [];
                if (this.CACHED_RESOURCES)
                    for (var t = document.querySelectorAll(this.CACHED_RESOURCES), n = 0; n < t.length; n++) {
                        var r = t[n].href || t[n].src;
                        r && !this.cachedUrls[r] && (e.push(r), this.cachedUrls[r] = !0)
                    }
                return e
            },
            cacheNormalUrls: function (e) {
                var t = this.endpoint + "/s",
                    n = {
                        i: this.id,
                        "d[cached_urls]": e.join("\n"),
                        ut: Math.ceil(+new Date / 1e3)
                    };
                CE2.post.send(t, n)
            },
            cacheBlobUrls: function (e) {
                for (var t = null, n = 0; t = e[n]; n++) this.cacheBlobUrl(t)
            },
            cacheBlobUrl: function (r) {
                var i = this,
                    e = new XMLHttpRequest;
                e.open("GET", r, !0), e.onload = function () {
                    if (200 === this.status) {
                        var e = btoa(unescape(encodeURIComponent(this.responseText))),
                            t = i.endpoint + "/s",
                            n = {
                                i: i.id,
                                "d[cached_urls]": i.convertBlobUrl(r) + "\t" + e,
                                ut: Math.ceil(+new Date / 1e3)
                            };
                        CE2.post.send(t, n)
                    }
                }, e.send()
            },
            convertBlobUrl: function (e) {
                return e && 0 == e.indexOf("blob:http") && (e = e.replace("blob:", "")), e
            },
            getMetadata: function () {
                if (!this.metadata) {
                    var e, t, n, r = CE2.w.location,
                        i = this.getUserData(),
                        o = new CE2.URI(r.href).qs,
                        s = ["source", "medium", "term", "content", "campaign"],
                        a = CE2.d.referrer;
                    if (this.metadata = {
                            user_id: CE2.uid,
                            site_id: this.site.id,
                            screen_width: screen.width,
                            screen_height: screen.height,
                            visitor_id: this.visitor.id,
                            first_visit: this.visitor.firstVisit,
                            num_visits: this.visitor.numVisits,
                            domain: r.protocol + "//" + r.host,
                            user_agent: CE2.n.userAgent,
                            version: "1.2"
                        }, a && (this.metadata.referrer = a), i && CE2.each(i, function (e, t) {
                            e && (this.metadata[t] = e)
                        }, this), void 0 !== this.settings.samplingKey && (this.metadata.sampling_key = this.settings.samplingKey), void 0 !== this.settings.freeRecording && (this.metadata.free_recording = this.settings.freeRecording), void 0 !== this.settings.strategy && (this.metadata.strategy = this.settings.strategy), void 0 !== this.settings.appliedStrategy && (this.metadata.applied_strategy = this.settings.appliedStrategy), CE2.USER_SCRIPT_VERSION && (this.metadata.user_script_version = CE2.USER_SCRIPT_VERSION), o)
                        for (e = 0; t = s[e++];)(n = o[t = "utm_" + t]) && (this.metadata[t] = n)
                }
                return this.metadata
            },
            record: function () {
                if (this.isExpired()) g.sessionExpired(this.site, !0);
                else {
                    this.startTime = +new Date, this.browserSize = this.getBrowserSize(), CE2.key || (CE2.key = 0), this.setKeyAttribute(!0), this.initializeMutationObserver(), this.url = this.currentURL();
                    var n = this,
                        e = g.vdom.parse(CE2.d.documentElement, {
                            key: v,
                            censor: this.censoredElements,
                            fontBoosted: CE2.d.body.clientWidth > CE2.w.outerWidth
                        }),
                        t = g.vdomAsJson.toJson(e),
                        r = CE2.LZString.compressToBase64(CE2.JSON.stringify(t)),
                        i = +new Date,
                        o = "p:" + i + ":" + r + "\ns:" + i + ":" + CE2.JSON.stringify([this.browserSize]),
                        s = "d[" + i + "]",
                        a = {
                            i: this.id,
                            m: CE2.JSON.stringify(this.getMetadata()),
                            "d[urls]": this.url + "\t" + i
                        };
                    a[s] = o, this.settings.isNewSession && (a.n = "1", a.st = Math.floor(this.startTime / 1e3)), this.recording = !0, this.pageKey = s, this.vPage = e, this.viewport = {
                        width: screen.width,
                        height: screen.height
                    }, a.ut = Math.ceil(+new Date / 1e3), CE2.post.send(this.endpoint + "/s", a, function (e) {
                        var t = e.responseText;
                        if (t)
                            if ("K" === (t = t.split(","))[0]) {
                                if (t[1]) n.state.endpoint = n.endpoint = new CE2.URI(CE2.SREC_DEST.record).protocol + "://" + t[1], n.state.save();
                                else if (!n.endpoint) return void n.destroy();
                                n.cacheResources(), n.diffTimeout = setTimeout(n.$diff, 750), n.sampleTimeout = setTimeout(n.$sample, 100), CE2.listen(CE2.d.body, "mousemove", n.mouseMove.bind(n)), CE2.listen(CE2.d.body, "mousedown", n.mouseStateChange.bind(n)), CE2.listen(CE2.d.body, "mouseup", n.mouseStateChange.bind(n)), CE2.listen(CE2.w, "beforeunload", n.finishSession.bind(n))
                            } else n.destroy();
                        else n.destroy()
                    })
                }
            },
            getUserData: function (e) {
                var t, n, r = this.userData,
                    i = {},
                    o = !0;
                for (e = e || "user_data_", t = 1; t <= 5; t++)(n = CE2.userData[t]) !== r[t] && (i[e + t] = r[t] = n, o = !1);
                if (!o) return i
            },
            isEmpty: function (e) {
                var t, n = !0;
                return (t = Object.keys) ? 0 == t(e).length : (CE2.each(e, function () {
                    return n = !1
                }), n)
            },
            currentURL: function () {
                return CE2.w.location.href
            },
            destroy: function () {
                this.mutationObserver && this.mutationObserver.disconnect(), this.sampleTimeout && clearTimeout(this.sampleTimeout), this.diffTimeout && clearTimeout(this.diffTimeout)
            },
            finishSession: function () {
                this.diff(!0), this.destroy()
            },
            diff: function (e) {
                try {
                    this.setKeyAttribute(), this.cacheResources();
                    var t, n = this.vPage,
                        r = g.vdom.parse(CE2.d.documentElement, {
                            key: v,
                            censor: this.censoredElements,
                            fontBoosted: CE2.d.body.clientWidth > CE2.w.outerWidth
                        }),
                        i = g.vdom.diff(n, r),
                        o = +new Date,
                        s = this.isEmpty,
                        a = "",
                        c = this.cursorStates,
                        u = this.mousePositions,
                        l = this.browser,
                        d = this.getUserData(),
                        h = this.endpoint + "/s",
                        p = this.currentURL(),
                        f = p != this.url;
                    if (f) {
                        var m = g.vdomAsJson.toJson(r);
                        a += "p:" + o + ":" + CE2.LZString.compressToBase64(CE2.JSON.stringify(m)) + "\n", this.vPage = r, this.pageRevision = 0, this.startTime = +new Date, this.browserSize = this.getBrowserSize()
                    } else s(i) || (a += "d:" + o + ":" + this.pageRevision++ + ":" + CE2.LZString.compressToBase64(CE2.JSON.stringify(i)) + "\n", this.vPage = r);
                    if (0 < c.length && (a += "c:" + o + ":" + CE2.JSON.stringify(c) + "\n", this.cursorStates = []), 0 < u.length && (a += "m:" + o + ":" + CE2.JSON.stringify(u) + "\n", this.mousePositions = []), 0 < l.length && (a += "s:" + o + ":" + CE2.JSON.stringify(l) + "\n", this.browser = []), a || d || e) {
                        if (!this.isRecording()) return this.terminateSampler = !0, void g.sessionExpired(this.site, !1);
                        this.lastDiff = Math.floor(+new Date / 1e3), t = {
                            i: this.id
                        }, f && (this.url = p, this.pageKey = "d[" + o + "]", t["d[urls]"] = this.url + "\t" + o), a && (t[this.pageKey] = a), d && (t.m = CE2.JSON.stringify(d)), e && (t.c = 1), t.ut = Math.ceil(+new Date / 1e3), e && "function" == typeof CE2.n.sendBeacon ? CE2.n.sendBeacon(h, CE2.convertToFormData(t)) : CE2.post.send(h, t)
                    }
                } catch (e) {}
                e || (this.diffTimeout = setTimeout(this.$diff, 750))
            },
            sample: function () {
                try {
                    if (this.terminateSampler) return;
                    var e, t = this.browser,
                        n = this.browserSize,
                        r = this.getBrowserSize(),
                        i = this.mousePos;
                    for (i && (this.mousePositions.push(i), delete this.mousePos), e = 0; e < r.length; e++)
                        if (!n || e != r.length - 1 && n[e] != r[e]) {
                            t.push(r), this.browserSize = r;
                            break
                        }
                } catch (e) {}
                this.sampleTimeout = setTimeout(this.$sample, 100)
            },
            mouseStateChange: function (e) {
                0 == e.button && this.cursorStates.push(["mousedown" == e.type ? 1 : 0, +new Date - this.startTime])
            },
            mouseMove: function (e) {
                try {
                    if (!e) return;
                    this.mousePos = [e.pageX, e.pageY, +new Date - this.startTime]
                } catch (e) {}
            },
            getBrowserSize: function () {
                var e = CE2.w,
                    t = e.innerWidth || screen.availWidth,
                    n = e.innerHeight || screen.availHeight,
                    r = +new Date - this.startTime,
                    i = CE2.detectZoom.zoom() || 1,
                    o = e.document.documentElement.getBoundingClientRect();
                return [t, n, i, o.width, o.height, r]
            },
            isRecording: function () {
                return this.recording && !this.isExpired()
            },
            isExpired: function () {
                return 1800 < Math.floor(+new Date / 1e3) - this.lastDiff
            }
        }, g.Session = c
    }(CE2.recording), "undefined" == typeof CE2 && (CE2 = {}), CE2.recording || (CE2.recording = {}),
    function (n) {
        function r(e, t, n) {
            this.id = e, this.endpoint = t, this.created = n || Math.floor(+new Date / 1e3)
        }
        r.isPresent = function () {
            return !!CE2.cookies[n.CK.session]
        }, r.load = function () {
            var e = n.CK.session,
                t = CE2.cookies[e];
            if (t) return n.SessionState.parse(t)
        }, r.clear = function () {
            CE2.deleteCookie(n.CK.session, {
                domain: n.cookieDomain()
            })
        }, r.parse = function (e) {
            var t = e.split("|");
            return new r(t[0], t[1] || null, t[2] ? parseInt(t[2], 36) : null)
        }, r.prototype = {
            toString: function () {
                return this.id + "|" + (this.endpoint || "") + "|" + this.created.toString(36)
            },
            save: function () {
                CE2.writeCookie(n.CK.session, this.toString(), {
                    domain: n.cookieDomain()
                })
            }
        }, n.SessionState = r
    }(CE2.recording), "undefined" == typeof CE2 && (CE2 = {}), CE2.recording || (CE2.recording = {}),
    function (e) {
        function n(e, t, n) {
            this.id = e, this.firstVisit = t || Math.floor(+new Date / 1e3), this.numVisits = n || 0
        }
        n.parse = function (e) {
            var t = e.split(".");
            return new n(t[0], t[1] ? parseInt(t[1], 36) : Math.floor(+new Date / 1e3), t[2] ? parseInt(t[2], 36) : 0)
        }, n.prototype = {
            toString: function () {
                return this.id + "." + this.firstVisit.toString(36) + "." + this.numVisits.toString(36)
            }
        }, e.Visitor = n
    }(CE2.recording), CE2.detectZoom = function (e, t, n) {
        "use strict";
        return i = function () {
            return window.devicePixelRatio || 1
        }, r = function () {
            var e = Math.round(screen.deviceXDPI / screen.logicalXDPI * 100) / 100;
            return {
                zoom: e,
                devicePxPerCssPx: e * i()
            }
        }, o = function () {
            var e = Math.round(document.documentElement.offsetHeight / window.innerHeight * 100) / 100;
            return {
                zoom: e,
                devicePxPerCssPx: e * i()
            }
        }, s = function () {
            var e = Math.round(window.outerWidth / window.innerWidth * 100) / 100;
            return {
                zoom: e,
                devicePxPerCssPx: e * i()
            }
        }, a = function () {
            var e = Math.round(document.documentElement.clientWidth / window.innerWidth * 100) / 100;
            return {
                zoom: e,
                devicePxPerCssPx: e * i()
            }
        }, c = function () {
            var e = 90 == Math.abs(window.orientation) ? screen.height : screen.width,
                t = e / window.innerWidth;
            return {
                zoom: t,
                devicePxPerCssPx: t * i()
            }
        }, u = function () {
            var e = function (e) {
                    return e.replace(/;/g, " !important;")
                },
                t = document.createElement("div");
            t.innerHTML = "1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0", t.setAttribute("style", e("font: 100px/1em sans-serif; -webkit-text-size-adjust: none; text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;"));
            var n = document.createElement("div");
            n.setAttribute("style", e("width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;")), n.appendChild(t), document.body.appendChild(n);
            var r = 1e3 / t.clientHeight;
            return r = Math.round(100 * r) / 100, document.body.removeChild(n), {
                zoom: r,
                devicePxPerCssPx: r * i()
            }
        }, l = function () {
            var e = p("min--moz-device-pixel-ratio", "", 0, 10, 20, 1e-4);
            return {
                zoom: e = Math.round(100 * e) / 100,
                devicePxPerCssPx: e
            }
        }, d = function () {
            return {
                zoom: l().zoom,
                devicePxPerCssPx: i()
            }
        }, h = function () {
            var e = window.top.outerWidth / window.top.innerWidth;
            return {
                zoom: e = Math.round(100 * e) / 100,
                devicePxPerCssPx: e * i()
            }
        }, p = function (s, a, e, t, n, c) {
            var u, r, i, o;
            u = window.matchMedia ? window.matchMedia : (r = document.getElementsByTagName("head")[0], i = document.createElement("style"), r.appendChild(i), (o = document.createElement("div")).className = "mediaQueryBinarySearch", o.style.display = "none", document.body.appendChild(o), function (e) {
                i.sheet.insertRule("@media " + e + "{.mediaQueryBinarySearch {text-decoration: underline} }", 0);
                var t = "underline" == getComputedStyle(o, null).textDecoration;
                return i.sheet.deleteRule(0), {
                    matches: t
                }
            });
            var l = function e(t, n, r) {
                var i = (t + n) / 2;
                if (r <= 0 || n - t < c) return i;
                var o = "(" + s + ":" + i + a + ")";
                return u(o).matches ? e(i, n, r - 1) : e(t, i, r - 1)
            }(e, t, n);
            return o && (r.removeChild(i), document.body.removeChild(o)), l
        }, m = function () {
            return {
                zoom: 1,
                devicePxPerCssPx: 1
            }
        }, isNaN(screen.logicalXDPI) || isNaN(screen.systemXDPI) ? window.navigator.msMaxTouchPoints ? m = o : window.chrome && !(window.opera || 0 <= navigator.userAgent.indexOf(" Opera")) ? m = s : 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") ? m = a : "orientation" in window && "webkitRequestAnimationFrame" in window ? m = c : "webkitRequestAnimationFrame" in window ? m = u : 0 <= navigator.userAgent.indexOf("Opera") ? m = h : window.devicePixelRatio ? m = d : .001 < l().zoom && (m = l) : m = r, f = m, {
            zoom: function () {
                return f().zoom
            },
            device: function () {
                return f().devicePxPerCssPx
            }
        };
        var i, r, o, s, a, c, u, l, d, h, p, f, m
    }(window), "undefined" == typeof CE2 && (CE2 = {}), CE2.recording || (CE2.recording = {}),
    function (p) {
        var i, e;
        p.CK = {
            session: "_cer.s",
            visitor: "_cer.v"
        }, p.getSessionState = function () {
            return e || (e = p.SessionState.load() || new p.SessionState(CE2.makeId()))
        }, p.clearSessionState = function () {
            e = null, p.SessionState.clear()
        }, p.hasSession = function () {
            return !!e || p.SessionState.isPresent()
        }, p.cookieDomain = function () {
            var e = location.hostname;
            return CE2.re.ipHost.test(e) || !/\./.test(e) ? e : "." + new CE2.URI(location.href).getDomain()
        }, p.getVisitor = function () {
            if (i) return i;
            var e = p.CK.visitor,
                t = CE2.cookies[e],
                n = new Date,
                r = new Date(n.getFullYear(), 1 + n.getMonth(), 1);
            return t = t ? ((i = p.Visitor.parse(t)).numVisits++, i.toString()) : (i = new p.Visitor(CE2.makeId())).toString(), CE2.writeCookie(e, t, {
                domain: p.cookieDomain(),
                expires: r
            }), i
        }, p.checkSample = function (t, n) {
            var r = CE2._sampling;
            r.getSamplingData(function () {
                if (r.validSamplingData() && r.canSample()) {
                    var e = new XMLHttpRequest;
                    e.onreadystatechange = function () {
                        if (4 === e.readyState && "1" === e.response) return n(t, r._key(), r._freeSamplingApplies(), r._strategy(), r._appliedStrategy())
                    }, e.open("GET", r.rEndpoint()), e.send()
                }
            })
        }, p.recordSession = function (e, t, n, r, i) {
            var o = !p.hasSession();
            !o && p.startedRecording || (new p.Session(e, p.getVisitor(), p.getSessionState(), {
                isNewSession: o,
                samplingKey: t,
                freeRecording: n,
                strategy: r,
                appliedStrategy: i
            }).record(), p.startedRecording = !0)
        }, p.sessionExpired = function (e, t) {
            p.clearSessionState(), t && p.begin(e)
        }, p.main = function (e) {
            e.sessionRecording && p.begin(e)
        }, p.begin = function (e) {
            if (CE2.debug("Recording: evaluating..."), p.blockSession(e)) CE2.debug("Recording: blocked");
            else if (p.hasSession() && !p.isFirstPageInSession()) CE2.debug("Recording: continued from first page..."), p.recordSession(e);
            else if (p.matchPageTargeting(e.recordingSettings)) {
                if (CE2.debug("Recording: continued..."), p.hasSession()) return void p.recordSession(e);
                if (!e.recordingSettings.pageTargetingEnabled && !p.isFirstPageInSession()) return;
                CE2.debug("Recording: checking sample before starting..."), p.checkSample(e, p.recordSession)
            } else p.hasSession() ? (CE2.debug("Recording: clearing session"), p.clearSessionState()) : CE2.debug("Recording: no matches")
        }, p.blockSession = function (e) {
            if (CE2.matchURLRules(e.recordingSettings.blockedRules)) return p.hasSession() && (p.sendIsOnBlockedPage(e.recordingSettings.endSessionOnBlockedUrl), e.recordingSettings.endSessionOnBlockedUrl && p.clearSessionState()), !0
        }, p.sendIsOnBlockedPage = function (e) {
            var t = p.getSessionState(),
                n = t.endpoint || CE2.SREC_DEST.record,
                r = new DOMParser,
                i = "<html><head><title>" + CE2.d.title + '</title></head><body style="width: 100%; height: 100%; background: #3A4145; color: #fff;"><div style="position:fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);"><p>User visited masked page with url ' + CE2.w.location.href + "</p></div></body></html>",
                o = r.parseFromString(i, "text/html"),
                s = p.vdom.parse(o.documentElement),
                a = p.vdomAsJson.toJson(s),
                c = CE2.LZString.compressToBase64(CE2.JSON.stringify(a)),
                u = +new Date,
                l = "p:" + u + ":" + c,
                d = "d[" + u + "]",
                h = {
                    i: t.id,
                    ut: Math.ceil(+new Date / 1e3),
                    c: e ? 1 : 0,
                    "d[urls]": CE2.w.location.href + "\t" + u
                };
            h[d] = l, CE2.post.send(n + "/s", h)
        }, p.isFirstPageInSession = function () {
            if (!document.referrer) return !0;
            var e = new CE2.URI(document.referrer).host;
            return CE2.re.ipHost.test(e) || (e = e.split(".").slice(-2).join(".")), !CE2.matchSite(e, location.hostname)
        }, p.matchPageTargeting = function (e) {
            var t, n, r = e.rules;
            if (e.pageTargetingEnabled && r && r.length) {
                for (t = 0; n = r[t++];)
                    if (CE2.matchURL(n.u, location.href, n.o)) return !0;
                return !1
            }
            return !0
        }
    }(CE2.recording);