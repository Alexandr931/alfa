!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).IMask = {})
}(this, (function(t) {
    "use strict";
    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        e(t)
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function u(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        t
    }
    function s(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        e && a(t, e)
    }
    function r(t) {
        return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        r(t)
    }
    function a(t, e) {
        return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        a(t, e)
    }
    function o(t, e) {
        if (null == t)
            return {};
        var n, i, u = function(t, e) {
            if (null == t)
                return {};
            var n, i, u = {}, s = Object.keys(t);
            for (i = 0; i < s.length; i++)
                n = s[i],
                e.indexOf(n) >= 0 || (u[n] = t[n]);
            return u
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            for (i = 0; i < s.length; i++)
                n = s[i],
                e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (u[n] = t[n])
        }
        return u
    }
    function l(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }
    function h(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, i = r(t);
            if (e) {
                var u = r(this).constructor;
                n = Reflect.construct(i, arguments, u)
            } else
                n = i.apply(this, arguments);
            return l(this, n)
        }
    }
    function c(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t)); )
            ;
        return t
    }
    function f() {
        return f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
            var i = c(t, e);
            if (i) {
                var u = Object.getOwnPropertyDescriptor(i, e);
                return u.get ? u.get.call(arguments.length < 3 ? t : n) : u.value
            }
        }
        ,
        f.apply(this, arguments)
    }
    function p(t, e, n, i) {
        return p = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function(t, e, n, i) {
            var u, s = c(t, e);
            if (s) {
                if ((u = Object.getOwnPropertyDescriptor(s, e)).set)
                    return u.set.call(i, n),
                    !0;
                if (!u.writable)
                    return !1
            }
            if (u = Object.getOwnPropertyDescriptor(i, e)) {
                if (!u.writable)
                    return !1;
                u.value = n,
                Object.defineProperty(i, e, u)
            } else
                !function(t, e, n) {
                    e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n
                }(i, e, n);
            return !0
        }
        ,
        p(t, e, n, i)
    }
    function d(t, e, n, i, u) {
        if (!p(t, e, n, i || t) && u)
            throw new Error("failed to set property");
        return n
    }
    function v(t, e) {
        return function(t) {
            if (Array.isArray(t))
                return t
        }(t) || function(t, e) {
            var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null == n)
                return;
            var i, u, s = [], r = !0, a = !1;
            try {
                for (n = n.call(t); !(r = (i = n.next()).done) && (s.push(i.value),
                !e || s.length !== e); r = !0)
                    ;
            } catch (t) {
                a = !0,
                u = t
            } finally {
                try {
                    r || null == n.return || n.return()
                } finally {
                    if (a)
                        throw u
                }
            }
            return s
        }(t, e) || k(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function k(t, e) {
        if (t) {
            if ("string" == typeof t)
                return g(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(t, e) : void 0
        }
    }
    function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++)
            i[n] = t[n];
        return i
    }
    var y = function() {
        function t(e) {
            n(this, t),
            Object.assign(this, {
                inserted: "",
                rawInserted: "",
                skip: !1,
                tailShift: 0
            }, e)
        }
        return u(t, [{
            key: "aggregate",
            value: function(t) {
                return this.rawInserted += t.rawInserted,
                this.skip = this.skip || t.skip,
                this.inserted += t.inserted,
                this.tailShift += t.tailShift,
                this
            }
        }, {
            key: "offset",
            get: function() {
                return this.tailShift + this.inserted.length
            }
        }]),
        t
    }();
    function m(t) {
        return "string" == typeof t || t instanceof String
    }
    var _ = "NONE"
      , A = "LEFT"
      , b = "FORCE_LEFT"
      , C = "RIGHT"
      , E = "FORCE_RIGHT";
    function F(t) {
        return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    }
    function S(t) {
        return Array.isArray(t) ? t : [t, new y]
    }
    function B(t, n) {
        if (n === t)
            return !0;
        var i, u = Array.isArray(n), s = Array.isArray(t);
        if (u && s) {
            if (n.length != t.length)
                return !1;
            for (i = 0; i < n.length; i++)
                if (!B(n[i], t[i]))
                    return !1;
            return !0
        }
        if (u != s)
            return !1;
        if (n && t && "object" === e(n) && "object" === e(t)) {
            var r = n instanceof Date
              , a = t instanceof Date;
            if (r && a)
                return n.getTime() == t.getTime();
            if (r != a)
                return !1;
            var o = n instanceof RegExp
              , l = t instanceof RegExp;
            if (o && l)
                return n.toString() == t.toString();
            if (o != l)
                return !1;
            var h = Object.keys(n);
            for (i = 0; i < h.length; i++)
                if (!Object.prototype.hasOwnProperty.call(t, h[i]))
                    return !1;
            for (i = 0; i < h.length; i++)
                if (!B(t[h[i]], n[h[i]]))
                    return !1;
            return !0
        }
        return !(!n || !t || "function" != typeof n || "function" != typeof t) && n.toString() === t.toString()
    }
    var D = function() {
        function t(e, i, u, s) {
            for (n(this, t),
            this.value = e,
            this.cursorPos = i,
            this.oldValue = u,
            this.oldSelection = s; this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos); )
                --this.oldSelection.start
        }
        return u(t, [{
            key: "startChangePos",
            get: function() {
                return Math.min(this.cursorPos, this.oldSelection.start)
            }
        }, {
            key: "insertedCount",
            get: function() {
                return this.cursorPos - this.startChangePos
            }
        }, {
            key: "inserted",
            get: function() {
                return this.value.substr(this.startChangePos, this.insertedCount)
            }
        }, {
            key: "removedCount",
            get: function() {
                return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0)
            }
        }, {
            key: "removed",
            get: function() {
                return this.oldValue.substr(this.startChangePos, this.removedCount)
            }
        }, {
            key: "head",
            get: function() {
                return this.value.substring(0, this.startChangePos)
            }
        }, {
            key: "tail",
            get: function() {
                return this.value.substring(this.startChangePos + this.insertedCount)
            }
        }, {
            key: "removeDirection",
            get: function() {
                return !this.removedCount || this.insertedCount ? _ : this.oldSelection.end !== this.cursorPos && this.oldSelection.start !== this.cursorPos || this.oldSelection.end !== this.oldSelection.start ? A : C
            }
        }]),
        t
    }()
      , x = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , u = arguments.length > 2 ? arguments[2] : void 0;
            n(this, t),
            this.value = e,
            this.from = i,
            this.stop = u
        }
        return u(t, [{
            key: "toString",
            value: function() {
                return this.value
            }
        }, {
            key: "extend",
            value: function(t) {
                this.value += String(t)
            }
        }, {
            key: "appendTo",
            value: function(t) {
                return t.append(this.toString(), {
                    tail: !0
                }).aggregate(t._appendPlaceholder())
            }
        }, {
            key: "state",
            get: function() {
                return {
                    value: this.value,
                    from: this.from,
                    stop: this.stop
                }
            },
            set: function(t) {
                Object.assign(this, t)
            }
        }, {
            key: "unshift",
            value: function(t) {
                if (!this.value.length || null != t && this.from >= t)
                    return "";
                var e = this.value[0];
                return this.value = this.value.slice(1),
                e
            }
        }, {
            key: "shift",
            value: function() {
                if (!this.value.length)
                    return "";
                var t = this.value[this.value.length - 1];
                return this.value = this.value.slice(0, -1),
                t
            }
        }]),
        t
    }();
    function w(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new w.InputMask(t,e)
    }
    var M = function() {
        function t(e) {
            n(this, t),
            this._value = "",
            this._update(Object.assign({}, t.DEFAULTS, e)),
            this.isInitialized = !0
        }
        return u(t, [{
            key: "updateOptions",
            value: function(t) {
                Object.keys(t).length && this.withValueRefresh(this._update.bind(this, t))
            }
        }, {
            key: "_update",
            value: function(t) {
                Object.assign(this, t)
            }
        }, {
            key: "state",
            get: function() {
                return {
                    _value: this.value
                }
            },
            set: function(t) {
                this._value = t._value
            }
        }, {
            key: "reset",
            value: function() {
                this._value = ""
            }
        }, {
            key: "value",
            get: function() {
                return this._value
            },
            set: function(t) {
                this.resolve(t)
            }
        }, {
            key: "resolve",
            value: function(t) {
                return this.reset(),
                this.append(t, {
                    input: !0
                }, ""),
                this.doCommit(),
                this.value
            }
        }, {
            key: "unmaskedValue",
            get: function() {
                return this.value
            },
            set: function(t) {
                this.reset(),
                this.append(t, {}, ""),
                this.doCommit()
            }
        }, {
            key: "typedValue",
            get: function() {
                return this.doParse(this.value)
            },
            set: function(t) {
                this.value = this.doFormat(t)
            }
        }, {
            key: "rawInputValue",
            get: function() {
                return this.extractInput(0, this.value.length, {
                    raw: !0
                })
            },
            set: function(t) {
                this.reset(),
                this.append(t, {
                    raw: !0
                }, ""),
                this.doCommit()
            }
        }, {
            key: "isComplete",
            get: function() {
                return !0
            }
        }, {
            key: "isFilled",
            get: function() {
                return this.isComplete
            }
        }, {
            key: "nearestInputPos",
            value: function(t, e) {
                return t
            }
        }, {
            key: "extractInput",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                return this.value.slice(t, e)
            }
        }, {
            key: "extractTail",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                return new x(this.extractInput(t, e),t)
            }
        }, {
            key: "appendTail",
            value: function(t) {
                return m(t) && (t = new x(String(t))),
                t.appendTo(this)
            }
        }, {
            key: "_appendCharRaw",
            value: function(t) {
                return t ? (this._value += t,
                new y({
                    inserted: t,
                    rawInserted: t
                })) : new y
            }
        }, {
            key: "_appendChar",
            value: function(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0, u = this.state, s = v(S(this.doPrepare(t, n)), 2);
                if (t = s[0],
                (e = (e = s[1]).aggregate(this._appendCharRaw(t, n))).inserted) {
                    var r, a = !1 !== this.doValidate(n);
                    if (a && null != i) {
                        var o = this.state;
                        !0 === this.overwrite && (r = i.state,
                        i.unshift(this.value.length));
                        var l = this.appendTail(i);
                        (a = l.rawInserted === i.toString()) && l.inserted || "shift" !== this.overwrite || (this.state = o,
                        r = i.state,
                        i.shift(),
                        a = (l = this.appendTail(i)).rawInserted === i.toString()),
                        a && l.inserted && (this.state = o)
                    }
                    a || (e = new y,
                    this.state = u,
                    i && r && (i.state = r))
                }
                return e
            }
        }, {
            key: "_appendPlaceholder",
            value: function() {
                return new y
            }
        }, {
            key: "_appendEager",
            value: function() {
                return new y
            }
        }, {
            key: "append",
            value: function(t, e, n) {
                if (!m(t))
                    throw new Error("value should be string");
                var i = new y
                  , u = m(n) ? new x(String(n)) : n;
                null != e && e.tail && (e._beforeTailState = this.state);
                for (var s = 0; s < t.length; ++s)
                    i.aggregate(this._appendChar(t[s], e, u));
                return null != u && (i.tailShift += this.appendTail(u).tailShift),
                this.eager && null != e && e.input && t && i.aggregate(this._appendEager()),
                i
            }
        }, {
            key: "remove",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                return this._value = this.value.slice(0, t) + this.value.slice(e),
                new y
            }
        }, {
            key: "withValueRefresh",
            value: function(t) {
                if (this._refreshing || !this.isInitialized)
                    return t();
                this._refreshing = !0;
                var e = this.rawInputValue
                  , n = this.value
                  , i = t();
                return this.rawInputValue = e,
                this.value && this.value !== n && 0 === n.indexOf(this.value) && this.append(n.slice(this.value.length), {}, ""),
                delete this._refreshing,
                i
            }
        }, {
            key: "runIsolated",
            value: function(t) {
                if (this._isolated || !this.isInitialized)
                    return t(this);
                this._isolated = !0;
                var e = this.state
                  , n = t(this);
                return this.state = e,
                delete this._isolated,
                n
            }
        }, {
            key: "doPrepare",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.prepare ? this.prepare(t, this, e) : t
            }
        }, {
            key: "doValidate",
            value: function(t) {
                return (!this.validate || this.validate(this.value, this, t)) && (!this.parent || this.parent.doValidate(t))
            }
        }, {
            key: "doCommit",
            value: function() {
                this.commit && this.commit(this.value, this)
            }
        }, {
            key: "doFormat",
            value: function(t) {
                return this.format ? this.format(t, this) : t
            }
        }, {
            key: "doParse",
            value: function(t) {
                return this.parse ? this.parse(t, this) : t
            }
        }, {
            key: "splice",
            value: function(t, e, n, i) {
                var u, s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                    input: !0
                }, r = t + e, a = this.extractTail(r);
                this.eager && (i = function(t) {
                    switch (t) {
                    case A:
                        return b;
                    case C:
                        return E;
                    default:
                        return t
                    }
                }(i),
                u = this.extractInput(0, r, {
                    raw: !0
                }));
                var o = this.nearestInputPos(t, e > 1 && 0 !== t && !this.eager ? _ : i)
                  , l = new y({
                    tailShift: o - t
                }).aggregate(this.remove(o));
                if (this.eager && i !== _ && u === this.rawInputValue)
                    if (i === b)
                        for (var h; u === this.rawInputValue && (h = this.value.length); )
                            l.aggregate(new y({
                                tailShift: -1
                            })).aggregate(this.remove(h - 1));
                    else
                        i === E && a.unshift();
                return l.aggregate(this.append(n, s, a))
            }
        }, {
            key: "maskEquals",
            value: function(t) {
                return this.mask === t
            }
        }, {
            key: "typedValueEquals",
            value: function(e) {
                var n = this.typedValue;
                return e === n || t.EMPTY_VALUES.includes(e) && t.EMPTY_VALUES.includes(n) || this.doFormat(e) === this.doFormat(this.typedValue)
            }
        }]),
        t
    }();
    function P(t) {
        if (null == t)
            throw new Error("mask property should be defined");
        return t instanceof RegExp ? w.MaskedRegExp : m(t) ? w.MaskedPattern : t instanceof Date || t === Date ? w.MaskedDate : t instanceof Number || "number" == typeof t || t === Number ? w.MaskedNumber : Array.isArray(t) || t === Array ? w.MaskedDynamic : w.Masked && t.prototype instanceof w.Masked ? t : t instanceof w.Masked ? t.constructor : t instanceof Function ? w.MaskedFunction : (console.warn("Mask not found for mask", t),
        w.Masked)
    }
    function T(t) {
        if (w.Masked && t instanceof w.Masked)
            return t;
        var e = (t = Object.assign({}, t)).mask;
        if (w.Masked && e instanceof w.Masked)
            return e;
        var n = P(e);
        if (!n)
            throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
        return new n(t)
    }
    M.DEFAULTS = {
        format: function(t) {
            return t
        },
        parse: function(t) {
            return t
        }
    },
    M.EMPTY_VALUES = [void 0, null, ""],
    w.Masked = M,
    w.createMask = T;
    var I = ["mask"]
      , V = {
        0: /\d/,
        a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        "*": /./
    }
      , O = function() {
        function t(e) {
            n(this, t);
            var i = e.mask
              , u = o(e, I);
            this.masked = T({
                mask: i
            }),
            Object.assign(this, u)
        }
        return u(t, [{
            key: "reset",
            value: function() {
                this.isFilled = !1,
                this.masked.reset()
            }
        }, {
            key: "remove",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                return 0 === t && e >= 1 ? (this.isFilled = !1,
                this.masked.remove(t, e)) : new y
            }
        }, {
            key: "value",
            get: function() {
                return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "")
            }
        }, {
            key: "unmaskedValue",
            get: function() {
                return this.masked.unmaskedValue
            }
        }, {
            key: "isComplete",
            get: function() {
                return Boolean(this.masked.value) || this.isOptional
            }
        }, {
            key: "_appendChar",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (this.isFilled)
                    return new y;
                var n = this.masked.state
                  , i = this.masked._appendChar(t, e);
                return i.inserted && !1 === this.doValidate(e) && (i.inserted = i.rawInserted = "",
                this.masked.state = n),
                i.inserted || this.isOptional || this.lazy || e.input || (i.inserted = this.placeholderChar),
                i.skip = !i.inserted && !this.isOptional,
                this.isFilled = Boolean(i.inserted),
                i
            }
        }, {
            key: "append",
            value: function() {
                var t;
                return (t = this.masked).append.apply(t, arguments)
            }
        }, {
            key: "_appendPlaceholder",
            value: function() {
                var t = new y;
                return this.isFilled || this.isOptional || (this.isFilled = !0,
                t.inserted = this.placeholderChar),
                t
            }
        }, {
            key: "_appendEager",
            value: function() {
                return new y
            }
        }, {
            key: "extractTail",
            value: function() {
                var t;
                return (t = this.masked).extractTail.apply(t, arguments)
            }
        }, {
            key: "appendTail",
            value: function() {
                var t;
                return (t = this.masked).appendTail.apply(t, arguments)
            }
        }, {
            key: "extractInput",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length
                  , n = arguments.length > 2 ? arguments[2] : void 0;
                return this.masked.extractInput(t, e, n)
            }
        }, {
            key: "nearestInputPos",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _
                  , n = this.value.length
                  , i = Math.min(Math.max(t, 0), n);
                switch (e) {
                case A:
                case b:
                    return this.isComplete ? i : 0;
                case C:
                case E:
                    return this.isComplete ? i : n;
                default:
                    return i
                }
            }
        }, {
            key: "doValidate",
            value: function() {
                var t, e;
                return (t = this.masked).doValidate.apply(t, arguments) && (!this.parent || (e = this.parent).doValidate.apply(e, arguments))
            }
        }, {
            key: "doCommit",
            value: function() {
                this.masked.doCommit()
            }
        }, {
            key: "state",
            get: function() {
                return {
                    masked: this.masked.state,
                    isFilled: this.isFilled
                }
            },
            set: function(t) {
                this.masked.state = t.masked,
                this.isFilled = t.isFilled
            }
        }]),
        t
    }()
      , R = function() {
        function t(e) {
            n(this, t),
            Object.assign(this, e),
            this._value = "",
            this.isFixed = !0
        }
        return u(t, [{
            key: "value",
            get: function() {
                return this._value
            }
        }, {
            key: "unmaskedValue",
            get: function() {
                return this.isUnmasking ? this.value : ""
            }
        }, {
            key: "reset",
            value: function() {
                this._isRawInput = !1,
                this._value = ""
            }
        }, {
            key: "remove",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
                return this._value = this._value.slice(0, t) + this._value.slice(e),
                this._value || (this._isRawInput = !1),
                new y
            }
        }, {
            key: "nearestInputPos",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _
                  , n = this._value.length;
                switch (e) {
                case A:
                case b:
                    return 0;
                default:
                    return n
                }
            }
        }, {
            key: "extractInput",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
                return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).raw && this._isRawInput && this._value.slice(t, e) || ""
            }
        }, {
            key: "isComplete",
            get: function() {
                return !0
            }
        }, {
            key: "isFilled",
            get: function() {
                return Boolean(this._value)
            }
        }, {
            key: "_appendChar",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = new y;
                if (this._value)
                    return n;
                var i = this.char === t && (this.isUnmasking || e.input || e.raw) && (!e.raw || !this.eager) && !e.tail;
                return i && (n.rawInserted = this.char),
                this._value = n.inserted = this.char,
                this._isRawInput = i && (e.raw || e.input),
                n
            }
        }, {
            key: "_appendEager",
            value: function() {
                return this._appendChar(this.char, {
                    tail: !0
                })
            }
        }, {
            key: "_appendPlaceholder",
            value: function() {
                var t = new y;
                return this._value || (this._value = t.inserted = this.char),
                t
            }
        }, {
            key: "extractTail",
            value: function() {
                return arguments.length > 1 && void 0 !== arguments[1] || this.value.length,
                new x("")
            }
        }, {
            key: "appendTail",
            value: function(t) {
                return m(t) && (t = new x(String(t))),
                t.appendTo(this)
            }
        }, {
            key: "append",
            value: function(t, e, n) {
                var i = this._appendChar(t[0], e);
                return null != n && (i.tailShift += this.appendTail(n).tailShift),
                i
            }
        }, {
            key: "doCommit",
            value: function() {}
        }, {
            key: "state",
            get: function() {
                return {
                    _value: this._value,
                    _isRawInput: this._isRawInput
                }
            },
            set: function(t) {
                Object.assign(this, t)
            }
        }]),
        t
    }()
      , j = ["chunks"]
      , L = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            n(this, t),
            this.chunks = e,
            this.from = i
        }
        return u(t, [{
            key: "toString",
            value: function() {
                return this.chunks.map(String).join("")
            }
        }, {
            key: "extend",
            value: function(e) {
                if (String(e)) {
                    m(e) && (e = new x(String(e)));
                    var n = this.chunks[this.chunks.length - 1]
                      , i = n && (n.stop === e.stop || null == e.stop) && e.from === n.from + n.toString().length;
                    if (e instanceof x)
                        i ? n.extend(e.toString()) : this.chunks.push(e);
                    else if (e instanceof t) {
                        if (null == e.stop)
                            for (var u; e.chunks.length && null == e.chunks[0].stop; )
                                (u = e.chunks.shift()).from += e.from,
                                this.extend(u);
                        e.toString() && (e.stop = e.blockIndex,
                        this.chunks.push(e))
                    }
                }
            }
        }, {
            key: "appendTo",
            value: function(e) {
                if (!(e instanceof w.MaskedPattern))
                    return new x(this.toString()).appendTo(e);
                for (var n = new y, i = 0; i < this.chunks.length && !n.skip; ++i) {
                    var u = this.chunks[i]
                      , s = e._mapPosToBlock(e.value.length)
                      , r = u.stop
                      , a = void 0;
                    if (null != r && (!s || s.index <= r) && ((u instanceof t || e._stops.indexOf(r) >= 0) && n.aggregate(e._appendPlaceholder(r)),
                    a = u instanceof t && e._blocks[r]),
                    a) {
                        var o = a.appendTail(u);
                        o.skip = !1,
                        n.aggregate(o),
                        e._value += o.inserted;
                        var l = u.toString().slice(o.rawInserted.length);
                        l && n.aggregate(e.append(l, {
                            tail: !0
                        }))
                    } else
                        n.aggregate(e.append(u.toString(), {
                            tail: !0
                        }))
                }
                return n
            }
        }, {
            key: "state",
            get: function() {
                return {
                    chunks: this.chunks.map((function(t) {
                        return t.state
                    }
                    )),
                    from: this.from,
                    stop: this.stop,
                    blockIndex: this.blockIndex
                }
            },
            set: function(e) {
                var n = e.chunks
                  , i = o(e, j);
                Object.assign(this, i),
                this.chunks = n.map((function(e) {
                    var n = "chunks"in e ? new t : new x;
                    return n.state = e,
                    n
                }
                ))
            }
        }, {
            key: "unshift",
            value: function(t) {
                if (!this.chunks.length || null != t && this.from >= t)
                    return "";
                for (var e = null != t ? t - this.from : t, n = 0; n < this.chunks.length; ) {
                    var i = this.chunks[n]
                      , u = i.unshift(e);
                    if (i.toString()) {
                        if (!u)
                            break;
                        ++n
                    } else
                        this.chunks.splice(n, 1);
                    if (u)
                        return u
                }
                return ""
            }
        }, {
            key: "shift",
            value: function() {
                if (!this.chunks.length)
                    return "";
                for (var t = this.chunks.length - 1; 0 <= t; ) {
                    var e = this.chunks[t]
                      , n = e.shift();
                    if (e.toString()) {
                        if (!n)
                            break;
                        --t
                    } else
                        this.chunks.splice(t, 1);
                    if (n)
                        return n
                }
                return ""
            }
        }]),
        t
    }()
      , U = function() {
        function t(e, i) {
            n(this, t),
            this.masked = e,
            this._log = [];
            var u = e._mapPosToBlock(i) || (i < 0 ? {
                index: 0,
                offset: 0
            } : {
                index: this.masked._blocks.length,
                offset: 0
            })
              , s = u.offset
              , r = u.index;
            this.offset = s,
            this.index = r,
            this.ok = !1
        }
        return u(t, [{
            key: "block",
            get: function() {
                return this.masked._blocks[this.index]
            }
        }, {
            key: "pos",
            get: function() {
                return this.masked._blockStartPos(this.index) + this.offset
            }
        }, {
            key: "state",
            get: function() {
                return {
                    index: this.index,
                    offset: this.offset,
                    ok: this.ok
                }
            },
            set: function(t) {
                Object.assign(this, t)
            }
        }, {
            key: "pushState",
            value: function() {
                this._log.push(this.state)
            }
        }, {
            key: "popState",
            value: function() {
                var t = this._log.pop();
                return this.state = t,
                t
            }
        }, {
            key: "bindBlock",
            value: function() {
                this.block || (this.index < 0 && (this.index = 0,
                this.offset = 0),
                this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1,
                this.offset = this.block.value.length))
            }
        }, {
            key: "_pushLeft",
            value: function(t) {
                for (this.pushState(),
                this.bindBlock(); 0 <= this.index; --this.index,
                this.offset = (null === (e = this.block) || void 0 === e ? void 0 : e.value.length) || 0) {
                    var e;
                    if (t())
                        return this.ok = !0
                }
                return this.ok = !1
            }
        }, {
            key: "_pushRight",
            value: function(t) {
                for (this.pushState(),
                this.bindBlock(); this.index < this.masked._blocks.length; ++this.index,
                this.offset = 0)
                    if (t())
                        return this.ok = !0;
                return this.ok = !1
            }
        }, {
            key: "pushLeftBeforeFilled",
            value: function() {
                var t = this;
                return this._pushLeft((function() {
                    if (!t.block.isFixed && t.block.value)
                        return t.offset = t.block.nearestInputPos(t.offset, b),
                        0 !== t.offset || void 0
                }
                ))
            }
        }, {
            key: "pushLeftBeforeInput",
            value: function() {
                var t = this;
                return this._pushLeft((function() {
                    if (!t.block.isFixed)
                        return t.offset = t.block.nearestInputPos(t.offset, A),
                        !0
                }
                ))
            }
        }, {
            key: "pushLeftBeforeRequired",
            value: function() {
                var t = this;
                return this._pushLeft((function() {
                    if (!(t.block.isFixed || t.block.isOptional && !t.block.value))
                        return t.offset = t.block.nearestInputPos(t.offset, A),
                        !0
                }
                ))
            }
        }, {
            key: "pushRightBeforeFilled",
            value: function() {
                var t = this;
                return this._pushRight((function() {
                    if (!t.block.isFixed && t.block.value)
                        return t.offset = t.block.nearestInputPos(t.offset, E),
                        t.offset !== t.block.value.length || void 0
                }
                ))
            }
        }, {
            key: "pushRightBeforeInput",
            value: function() {
                var t = this;
                return this._pushRight((function() {
                    if (!t.block.isFixed)
                        return t.offset = t.block.nearestInputPos(t.offset, _),
                        !0
                }
                ))
            }
        }, {
            key: "pushRightBeforeRequired",
            value: function() {
                var t = this;
                return this._pushRight((function() {
                    if (!(t.block.isFixed || t.block.isOptional && !t.block.value))
                        return t.offset = t.block.nearestInputPos(t.offset, _),
                        !0
                }
                ))
            }
        }]),
        t
    }()
      , N = function(t) {
        s(i, t);
        var e = h(i);
        function i() {
            return n(this, i),
            e.apply(this, arguments)
        }
        return u(i, [{
            key: "_update",
            value: function(t) {
                t.mask && (t.validate = function(e) {
                    return e.search(t.mask) >= 0
                }
                ),
                f(r(i.prototype), "_update", this).call(this, t)
            }
        }]),
        i
    }(M);
    w.MaskedRegExp = N;
    var q = ["_blocks"]
      , Y = function(t) {
        s(i, t);
        var e = h(i);
        function i() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return n(this, i),
            t.definitions = Object.assign({}, V, t.definitions),
            e.call(this, Object.assign({}, i.DEFAULTS, t))
        }
        return u(i, [{
            key: "_update",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t.definitions = Object.assign({}, this.definitions, t.definitions),
                f(r(i.prototype), "_update", this).call(this, t),
                this._rebuildMask()
            }
        }, {
            key: "_rebuildMask",
            value: function() {
                var t = this
                  , e = this.definitions;
                this._blocks = [],
                this._stops = [],
                this._maskedBlocks = {};
                var n = this.mask;
                if (n && e)
                    for (var u = !1, s = !1, r = 0; r < n.length; ++r) {
                        if (this.blocks)
                            if ("continue" === function() {
                                var e = n.slice(r)
                                  , i = Object.keys(t.blocks).filter((function(t) {
                                    return 0 === e.indexOf(t)
                                }
                                ));
                                i.sort((function(t, e) {
                                    return e.length - t.length
                                }
                                ));
                                var u = i[0];
                                if (u) {
                                    var s = T(Object.assign({
                                        parent: t,
                                        lazy: t.lazy,
                                        eager: t.eager,
                                        placeholderChar: t.placeholderChar,
                                        overwrite: t.overwrite
                                    }, t.blocks[u]));
                                    return s && (t._blocks.push(s),
                                    t._maskedBlocks[u] || (t._maskedBlocks[u] = []),
                                    t._maskedBlocks[u].push(t._blocks.length - 1)),
                                    r += u.length - 1,
                                    "continue"
                                }
                            }())
                                continue;
                        var a = n[r]
                          , o = a in e;
                        if (a !== i.STOP_CHAR)
                            if ("{" !== a && "}" !== a)
                                if ("[" !== a && "]" !== a) {
                                    if (a === i.ESCAPE_CHAR) {
                                        if (++r,
                                        !(a = n[r]))
                                            break;
                                        o = !1
                                    }
                                    var l = o ? new O({
                                        parent: this,
                                        lazy: this.lazy,
                                        eager: this.eager,
                                        placeholderChar: this.placeholderChar,
                                        mask: e[a],
                                        isOptional: s
                                    }) : new R({
                                        char: a,
                                        eager: this.eager,
                                        isUnmasking: u
                                    });
                                    this._blocks.push(l)
                                } else
                                    s = !s;
                            else
                                u = !u;
                        else
                            this._stops.push(this._blocks.length)
                    }
            }
        }, {
            key: "state",
            get: function() {
                return Object.assign({}, f(r(i.prototype), "state", this), {
                    _blocks: this._blocks.map((function(t) {
                        return t.state
                    }
                    ))
                })
            },
            set: function(t) {
                var e = t._blocks
                  , n = o(t, q);
                this._blocks.forEach((function(t, n) {
                    return t.state = e[n]
                }
                )),
                d(r(i.prototype), "state", n, this, !0)
            }
        }, {
            key: "reset",
            value: function() {
                f(r(i.prototype), "reset", this).call(this),
                this._blocks.forEach((function(t) {
                    return t.reset()
                }
                ))
            }
        }, {
            key: "isComplete",
            get: function() {
                return this._blocks.every((function(t) {
                    return t.isComplete
                }
                ))
            }
        }, {
            key: "isFilled",
            get: function() {
                return this._blocks.every((function(t) {
                    return t.isFilled
                }
                ))
            }
        }, {
            key: "isFixed",
            get: function() {
                return this._blocks.every((function(t) {
                    return t.isFixed
                }
                ))
            }
        }, {
            key: "isOptional",
            get: function() {
                return this._blocks.every((function(t) {
                    return t.isOptional
                }
                ))
            }
        }, {
            key: "doCommit",
            value: function() {
                this._blocks.forEach((function(t) {
                    return t.doCommit()
                }
                )),
                f(r(i.prototype), "doCommit", this).call(this)
            }
        }, {
            key: "unmaskedValue",
            get: function() {
                return this._blocks.reduce((function(t, e) {
                    return t + e.unmaskedValue
                }
                ), "")
            },
            set: function(t) {
                d(r(i.prototype), "unmaskedValue", t, this, !0)
            }
        }, {
            key: "value",
            get: function() {
                return this._blocks.reduce((function(t, e) {
                    return t + e.value
                }
                ), "")
            },
            set: function(t) {
                d(r(i.prototype), "value", t, this, !0)
            }
        }, {
            key: "appendTail",
            value: function(t) {
                return f(r(i.prototype), "appendTail", this).call(this, t).aggregate(this._appendPlaceholder())
            }
        }, {
            key: "_appendEager",
            value: function() {
                var t, e = new y, n = null === (t = this._mapPosToBlock(this.value.length)) || void 0 === t ? void 0 : t.index;
                if (null == n)
                    return e;
                this._blocks[n].isFilled && ++n;
                for (var i = n; i < this._blocks.length; ++i) {
                    var u = this._blocks[i]._appendEager();
                    if (!u.inserted)
                        break;
                    e.aggregate(u)
                }
                return e
            }
        }, {
            key: "_appendCharRaw",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = this._mapPosToBlock(this.value.length)
                  , i = new y;
                if (!n)
                    return i;
                for (var u = n.index; ; ++u) {
                    var s, r, a = this._blocks[u];
                    if (!a)
                        break;
                    var o = a._appendChar(t, Object.assign({}, e, {
                        _beforeTailState: null === (s = e._beforeTailState) || void 0 === s || null === (r = s._blocks) || void 0 === r ? void 0 : r[u]
                    }))
                      , l = o.skip;
                    if (i.aggregate(o),
                    l || o.rawInserted)
                        break
                }
                return i
            }
        }, {
            key: "extractTail",
            value: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length
                  , i = new L;
                return e === n || this._forEachBlocksInRange(e, n, (function(e, n, u, s) {
                    var r = e.extractTail(u, s);
                    r.stop = t._findStopBefore(n),
                    r.from = t._blockStartPos(n),
                    r instanceof L && (r.blockIndex = n),
                    i.extend(r)
                }
                )),
                i
            }
        }, {
            key: "extractInput",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (t === e)
                    return "";
                var i = "";
                return this._forEachBlocksInRange(t, e, (function(t, e, u, s) {
                    i += t.extractInput(u, s, n)
                }
                )),
                i
            }
        }, {
            key: "_findStopBefore",
            value: function(t) {
                for (var e, n = 0; n < this._stops.length; ++n) {
                    var i = this._stops[n];
                    if (!(i <= t))
                        break;
                    e = i
                }
                return e
            }
        }, {
            key: "_appendPlaceholder",
            value: function(t) {
                var e = this
                  , n = new y;
                if (this.lazy && null == t)
                    return n;
                var i = this._mapPosToBlock(this.value.length);
                if (!i)
                    return n;
                var u = i.index
                  , s = null != t ? t : this._blocks.length;
                return this._blocks.slice(u, s).forEach((function(i) {
                    if (!i.lazy || null != t) {
                        var u = null != i._blocks ? [i._blocks.length] : []
                          , s = i._appendPlaceholder.apply(i, u);
                        e._value += s.inserted,
                        n.aggregate(s)
                    }
                }
                )),
                n
            }
        }, {
            key: "_mapPosToBlock",
            value: function(t) {
                for (var e = "", n = 0; n < this._blocks.length; ++n) {
                    var i = this._blocks[n]
                      , u = e.length;
                    if (t <= (e += i.value).length)
                        return {
                            index: n,
                            offset: t - u
                        }
                }
            }
        }, {
            key: "_blockStartPos",
            value: function(t) {
                return this._blocks.slice(0, t).reduce((function(t, e) {
                    return t + e.value.length
                }
                ), 0)
            }
        }, {
            key: "_forEachBlocksInRange",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length
                  , n = arguments.length > 2 ? arguments[2] : void 0
                  , i = this._mapPosToBlock(t);
                if (i) {
                    var u = this._mapPosToBlock(e)
                      , s = u && i.index === u.index
                      , r = i.offset
                      , a = u && s ? u.offset : this._blocks[i.index].value.length;
                    if (n(this._blocks[i.index], i.index, r, a),
                    u && !s) {
                        for (var o = i.index + 1; o < u.index; ++o)
                            n(this._blocks[o], o, 0, this._blocks[o].value.length);
                        n(this._blocks[u.index], u.index, 0, u.offset)
                    }
                }
            }
        }, {
            key: "remove",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length
                  , n = f(r(i.prototype), "remove", this).call(this, t, e);
                return this._forEachBlocksInRange(t, e, (function(t, e, i, u) {
                    n.aggregate(t.remove(i, u))
                }
                )),
                n
            }
        }, {
            key: "nearestInputPos",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
                if (!this._blocks.length)
                    return 0;
                var n = new U(this,t);
                if (e === _)
                    return n.pushRightBeforeInput() ? n.pos : (n.popState(),
                    n.pushLeftBeforeInput() ? n.pos : this.value.length);
                if (e === A || e === b) {
                    if (e === A) {
                        if (n.pushRightBeforeFilled(),
                        n.ok && n.pos === t)
                            return t;
                        n.popState()
                    }
                    if (n.pushLeftBeforeInput(),
                    n.pushLeftBeforeRequired(),
                    n.pushLeftBeforeFilled(),
                    e === A) {
                        if (n.pushRightBeforeInput(),
                        n.pushRightBeforeRequired(),
                        n.ok && n.pos <= t)
                            return n.pos;
                        if (n.popState(),
                        n.ok && n.pos <= t)
                            return n.pos;
                        n.popState()
                    }
                    return n.ok ? n.pos : e === b ? 0 : (n.popState(),
                    n.ok ? n.pos : (n.popState(),
                    n.ok ? n.pos : 0))
                }
                return e === C || e === E ? (n.pushRightBeforeInput(),
                n.pushRightBeforeRequired(),
                n.pushRightBeforeFilled() ? n.pos : e === E ? this.value.length : (n.popState(),
                n.ok ? n.pos : (n.popState(),
                n.ok ? n.pos : this.nearestInputPos(t, A)))) : t
            }
        }, {
            key: "maskedBlock",
            value: function(t) {
                return this.maskedBlocks(t)[0]
            }
        }, {
            key: "maskedBlocks",
            value: function(t) {
                var e = this
                  , n = this._maskedBlocks[t];
                return n ? n.map((function(t) {
                    return e._blocks[t]
                }
                )) : []
            }
        }]),
        i
    }(M);
    Y.DEFAULTS = {
        lazy: !0,
        placeholderChar: "_"
    },
    Y.STOP_CHAR = "`",
    Y.ESCAPE_CHAR = "\\",
    Y.InputDefinition = O,
    Y.FixedDefinition = R,
    w.MaskedPattern = Y;
    var z = function(t) {
        s(i, t);
        var e = h(i);
        function i() {
            return n(this, i),
            e.apply(this, arguments)
        }
        return u(i, [{
            key: "_matchFrom",
            get: function() {
                return this.maxLength - String(this.from).length
            }
        }, {
            key: "_update",
            value: function(t) {
                t = Object.assign({
                    to: this.to || 0,
                    from: this.from || 0,
                    maxLength: this.maxLength || 0
                }, t);
                var e = String(t.to).length;
                null != t.maxLength && (e = Math.max(e, t.maxLength)),
                t.maxLength = e;
                for (var n = String(t.from).padStart(e, "0"), u = String(t.to).padStart(e, "0"), s = 0; s < u.length && u[s] === n[s]; )
                    ++s;
                t.mask = u.slice(0, s).replace(/0/g, "\\0") + "0".repeat(e - s),
                f(r(i.prototype), "_update", this).call(this, t)
            }
        }, {
            key: "isComplete",
            get: function() {
                return f(r(i.prototype), "isComplete", this) && Boolean(this.value)
            }
        }, {
            key: "boundaries",
            value: function(t) {
                var e = ""
                  , n = ""
                  , i = v(t.match(/^(\D*)(\d*)(\D*)/) || [], 3)
                  , u = i[1]
                  , s = i[2];
                return s && (e = "0".repeat(u.length) + s,
                n = "9".repeat(u.length) + s),
                [e = e.padEnd(this.maxLength, "0"), n = n.padEnd(this.maxLength, "9")]
            }
        }, {
            key: "doPrepare",
            value: function(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, u = v(S(f(r(i.prototype), "doPrepare", this).call(this, t.replace(/\D/g, ""), n)), 2);
                if (t = u[0],
                e = u[1],
                !this.autofix || !t)
                    return t;
                var s = String(this.from).padStart(this.maxLength, "0")
                  , a = String(this.to).padStart(this.maxLength, "0")
                  , o = this.value + t;
                if (o.length > this.maxLength)
                    return "";
                var l = v(this.boundaries(o), 2)
                  , h = l[0]
                  , c = l[1];
                return Number(c) < this.from ? s[o.length - 1] : Number(h) > this.to ? "pad" === this.autofix && o.length < this.maxLength ? ["", e.aggregate(this.append(s[o.length - 1] + t, n))] : a[o.length - 1] : t
            }
        }, {
            key: "doValidate",
            value: function() {
                var t, e = this.value;
                if (-1 === e.search(/[^0]/) && e.length <= this._matchFrom)
                    return !0;
                for (var n = v(this.boundaries(e), 2), u = n[0], s = n[1], a = arguments.length, o = new Array(a), l = 0; l < a; l++)
                    o[l] = arguments[l];
                return this.from <= Number(s) && Number(u) <= this.to && (t = f(r(i.prototype), "doValidate", this)).call.apply(t, [this].concat(o))
            }
        }]),
        i
    }(Y);
    w.MaskedRange = z;
    var H = function(t) {
        s(i, t);
        var e = h(i);
        function i(t) {
            return n(this, i),
            e.call(this, Object.assign({}, i.DEFAULTS, t))
        }
        return u(i, [{
            key: "_update",
            value: function(t) {
                t.mask === Date && delete t.mask,
                t.pattern && (t.mask = t.pattern);
                var e = t.blocks;
                t.blocks = Object.assign({}, i.GET_DEFAULT_BLOCKS()),
                t.min && (t.blocks.Y.from = t.min.getFullYear()),
                t.max && (t.blocks.Y.to = t.max.getFullYear()),
                t.min && t.max && t.blocks.Y.from === t.blocks.Y.to && (t.blocks.m.from = t.min.getMonth() + 1,
                t.blocks.m.to = t.max.getMonth() + 1,
                t.blocks.m.from === t.blocks.m.to && (t.blocks.d.from = t.min.getDate(),
                t.blocks.d.to = t.max.getDate())),
                Object.assign(t.blocks, this.blocks, e),
                Object.keys(t.blocks).forEach((function(e) {
                    var n = t.blocks[e];
                    !("autofix"in n) && "autofix"in t && (n.autofix = t.autofix)
                }
                )),
                f(r(i.prototype), "_update", this).call(this, t)
            }
        }, {
            key: "doValidate",
            value: function() {
                for (var t, e = this.date, n = arguments.length, u = new Array(n), s = 0; s < n; s++)
                    u[s] = arguments[s];
                return (t = f(r(i.prototype), "doValidate", this)).call.apply(t, [this].concat(u)) && (!this.isComplete || this.isDateExist(this.value) && null != e && (null == this.min || this.min <= e) && (null == this.max || e <= this.max))
            }
        }, {
            key: "isDateExist",
            value: function(t) {
                return this.format(this.parse(t, this), this).indexOf(t) >= 0
            }
        }, {
            key: "date",
            get: function() {
                return this.typedValue
            },
            set: function(t) {
                this.typedValue = t
            }
        }, {
            key: "typedValue",
            get: function() {
                return this.isComplete ? f(r(i.prototype), "typedValue", this) : null
            },
            set: function(t) {
                d(r(i.prototype), "typedValue", t, this, !0)
            }
        }, {
            key: "maskEquals",
            value: function(t) {
                return t === Date || f(r(i.prototype), "maskEquals", this).call(this, t)
            }
        }]),
        i
    }(Y);
    H.DEFAULTS = {
        pattern: "d{.}`m{.}`Y",
        format: function(t) {
            return t ? [String(t.getDate()).padStart(2, "0"), String(t.getMonth() + 1).padStart(2, "0"), t.getFullYear()].join(".") : ""
        },
        parse: function(t) {
            var e = v(t.split("."), 3)
              , n = e[0]
              , i = e[1]
              , u = e[2];
            return new Date(u,i - 1,n)
        }
    },
    H.GET_DEFAULT_BLOCKS = function() {
        return {
            d: {
                mask: z,
                from: 1,
                to: 31,
                maxLength: 2
            },
            m: {
                mask: z,
                from: 1,
                to: 12,
                maxLength: 2
            },
            Y: {
                mask: z,
                from: 1900,
                to: 9999
            }
        }
    }
    ,
    w.MaskedDate = H;
    var Z = function() {
        function t() {
            n(this, t)
        }
        return u(t, [{
            key: "selectionStart",
            get: function() {
                var t;
                try {
                    t = this._unsafeSelectionStart
                } catch (t) {}
                return null != t ? t : this.value.length
            }
        }, {
            key: "selectionEnd",
            get: function() {
                var t;
                try {
                    t = this._unsafeSelectionEnd
                } catch (t) {}
                return null != t ? t : this.value.length
            }
        }, {
            key: "select",
            value: function(t, e) {
                if (null != t && null != e && (t !== this.selectionStart || e !== this.selectionEnd))
                    try {
                        this._unsafeSelect(t, e)
                    } catch (t) {}
            }
        }, {
            key: "_unsafeSelect",
            value: function(t, e) {}
        }, {
            key: "isActive",
            get: function() {
                return !1
            }
        }, {
            key: "bindEvents",
            value: function(t) {}
        }, {
            key: "unbindEvents",
            value: function() {}
        }]),
        t
    }();
    w.MaskElement = Z;
    var K = function(t) {
        s(i, t);
        var e = h(i);
        function i(t) {
            var u;
            return n(this, i),
            (u = e.call(this)).input = t,
            u._handlers = {},
            u
        }
        return u(i, [{
            key: "rootElement",
            get: function() {
                var t, e, n;
                return null !== (t = null === (e = (n = this.input).getRootNode) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : document
            }
        }, {
            key: "isActive",
            get: function() {
                return this.input === this.rootElement.activeElement
            }
        }, {
            key: "_unsafeSelectionStart",
            get: function() {
                return this.input.selectionStart
            }
        }, {
            key: "_unsafeSelectionEnd",
            get: function() {
                return this.input.selectionEnd
            }
        }, {
            key: "_unsafeSelect",
            value: function(t, e) {
                this.input.setSelectionRange(t, e)
            }
        }, {
            key: "value",
            get: function() {
                return this.input.value
            },
            set: function(t) {
                this.input.value = t
            }
        }, {
            key: "bindEvents",
            value: function(t) {
                var e = this;
                Object.keys(t).forEach((function(n) {
                    return e._toggleEventHandler(i.EVENTS_MAP[n], t[n])
                }
                ))
            }
        }, {
            key: "unbindEvents",
            value: function() {
                var t = this;
                Object.keys(this._handlers).forEach((function(e) {
                    return t._toggleEventHandler(e)
                }
                ))
            }
        }, {
            key: "_toggleEventHandler",
            value: function(t, e) {
                this._handlers[t] && (this.input.removeEventListener(t, this._handlers[t]),
                delete this._handlers[t]),
                e && (this.input.addEventListener(t, e),
                this._handlers[t] = e)
            }
        }]),
        i
    }(Z);
    K.EVENTS_MAP = {
        selectionChange: "keydown",
        input: "input",
        drop: "drop",
        click: "click",
        focus: "focus",
        commit: "blur"
    },
    w.HTMLMaskElement = K;
    var $ = function(t) {
        s(i, t);
        var e = h(i);
        function i() {
            return n(this, i),
            e.apply(this, arguments)
        }
        return u(i, [{
            key: "_unsafeSelectionStart",
            get: function() {
                var t = this.rootElement
                  , e = t.getSelection && t.getSelection()
                  , n = e && e.anchorOffset
                  , i = e && e.focusOffset;
                return null == i || null == n || n < i ? n : i
            }
        }, {
            key: "_unsafeSelectionEnd",
            get: function() {
                var t = this.rootElement
                  , e = t.getSelection && t.getSelection()
                  , n = e && e.anchorOffset
                  , i = e && e.focusOffset;
                return null == i || null == n || n > i ? n : i
            }
        }, {
            key: "_unsafeSelect",
            value: function(t, e) {
                if (this.rootElement.createRange) {
                    var n = this.rootElement.createRange();
                    n.setStart(this.input.firstChild || this.input, t),
                    n.setEnd(this.input.lastChild || this.input, e);
                    var i = this.rootElement
                      , u = i.getSelection && i.getSelection();
                    u && (u.removeAllRanges(),
                    u.addRange(n))
                }
            }
        }, {
            key: "value",
            get: function() {
                return this.input.textContent
            },
            set: function(t) {
                this.input.textContent = t
            }
        }]),
        i
    }(K);
    w.HTMLContenteditableMaskElement = $;
    var G = ["mask"]
      , W = function() {
        function t(e, i) {
            n(this, t),
            this.el = e instanceof Z ? e : e.isContentEditable && "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName ? new $(e) : new K(e),
            this.masked = T(i),
            this._listeners = {},
            this._value = "",
            this._unmaskedValue = "",
            this._saveSelection = this._saveSelection.bind(this),
            this._onInput = this._onInput.bind(this),
            this._onChange = this._onChange.bind(this),
            this._onDrop = this._onDrop.bind(this),
            this._onFocus = this._onFocus.bind(this),
            this._onClick = this._onClick.bind(this),
            this.alignCursor = this.alignCursor.bind(this),
            this.alignCursorFriendly = this.alignCursorFriendly.bind(this),
            this._bindEvents(),
            this.updateValue(),
            this._onChange()
        }
        return u(t, [{
            key: "mask",
            get: function() {
                return this.masked.mask
            },
            set: function(t) {
                if (!this.maskEquals(t))
                    if (t instanceof w.Masked || this.masked.constructor !== P(t)) {
                        var e = T({
                            mask: t
                        });
                        e.unmaskedValue = this.masked.unmaskedValue,
                        this.masked = e
                    } else
                        this.masked.updateOptions({
                            mask: t
                        })
            }
        }, {
            key: "maskEquals",
            value: function(t) {
                var e;
                return null == t || (null === (e = this.masked) || void 0 === e ? void 0 : e.maskEquals(t))
            }
        }, {
            key: "value",
            get: function() {
                return this._value
            },
            set: function(t) {
                this.value !== t && (this.masked.value = t,
                this.updateControl(),
                this.alignCursor())
            }
        }, {
            key: "unmaskedValue",
            get: function() {
                return this._unmaskedValue
            },
            set: function(t) {
                this.unmaskedValue !== t && (this.masked.unmaskedValue = t,
                this.updateControl(),
                this.alignCursor())
            }
        }, {
            key: "typedValue",
            get: function() {
                return this.masked.typedValue
            },
            set: function(t) {
                this.masked.typedValueEquals(t) || (this.masked.typedValue = t,
                this.updateControl(),
                this.alignCursor())
            }
        }, {
            key: "_bindEvents",
            value: function() {
                this.el.bindEvents({
                    selectionChange: this._saveSelection,
                    input: this._onInput,
                    drop: this._onDrop,
                    click: this._onClick,
                    focus: this._onFocus,
                    commit: this._onChange
                })
            }
        }, {
            key: "_unbindEvents",
            value: function() {
                this.el && this.el.unbindEvents()
            }
        }, {
            key: "_fireEvent",
            value: function(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                    n[i - 1] = arguments[i];
                var u = this._listeners[t];
                u && u.forEach((function(t) {
                    return t.apply(void 0, n)
                }
                ))
            }
        }, {
            key: "selectionStart",
            get: function() {
                return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart
            }
        }, {
            key: "cursorPos",
            get: function() {
                return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd
            },
            set: function(t) {
                this.el && this.el.isActive && (this.el.select(t, t),
                this._saveSelection())
            }
        }, {
            key: "_saveSelection",
            value: function() {
                this.value !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),
                this._selection = {
                    start: this.selectionStart,
                    end: this.cursorPos
                }
            }
        }, {
            key: "updateValue",
            value: function() {
                this.masked.value = this.el.value,
                this._value = this.masked.value
            }
        }, {
            key: "updateControl",
            value: function() {
                var t = this.masked.unmaskedValue
                  , e = this.masked.value
                  , n = this.unmaskedValue !== t || this.value !== e;
                this._unmaskedValue = t,
                this._value = e,
                this.el.value !== e && (this.el.value = e),
                n && this._fireChangeEvents()
            }
        }, {
            key: "updateOptions",
            value: function(t) {
                var e = t.mask
                  , n = o(t, G)
                  , i = !this.maskEquals(e)
                  , u = !B(this.masked, n);
                i && (this.mask = e),
                u && this.masked.updateOptions(n),
                (i || u) && this.updateControl()
            }
        }, {
            key: "updateCursor",
            value: function(t) {
                null != t && (this.cursorPos = t,
                this._delayUpdateCursor(t))
            }
        }, {
            key: "_delayUpdateCursor",
            value: function(t) {
                var e = this;
                this._abortUpdateCursor(),
                this._changingCursorPos = t,
                this._cursorChanging = setTimeout((function() {
                    e.el && (e.cursorPos = e._changingCursorPos,
                    e._abortUpdateCursor())
                }
                ), 10)
            }
        }, {
            key: "_fireChangeEvents",
            value: function() {
                this._fireEvent("accept", this._inputEvent),
                this.masked.isComplete && this._fireEvent("complete", this._inputEvent)
            }
        }, {
            key: "_abortUpdateCursor",
            value: function() {
                this._cursorChanging && (clearTimeout(this._cursorChanging),
                delete this._cursorChanging)
            }
        }, {
            key: "alignCursor",
            value: function() {
                this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, A))
            }
        }, {
            key: "alignCursorFriendly",
            value: function() {
                this.selectionStart === this.cursorPos && this.alignCursor()
            }
        }, {
            key: "on",
            value: function(t, e) {
                return this._listeners[t] || (this._listeners[t] = []),
                this._listeners[t].push(e),
                this
            }
        }, {
            key: "off",
            value: function(t, e) {
                if (!this._listeners[t])
                    return this;
                if (!e)
                    return delete this._listeners[t],
                    this;
                var n = this._listeners[t].indexOf(e);
                return n >= 0 && this._listeners[t].splice(n, 1),
                this
            }
        }, {
            key: "_onInput",
            value: function(t) {
                if (this._inputEvent = t,
                this._abortUpdateCursor(),
                !this._selection)
                    return this.updateValue();
                var e = new D(this.el.value,this.cursorPos,this.value,this._selection)
                  , n = this.masked.rawInputValue
                  , i = this.masked.splice(e.startChangePos, e.removed.length, e.inserted, e.removeDirection, {
                    input: !0,
                    raw: !0
                }).offset
                  , u = n === this.masked.rawInputValue ? e.removeDirection : _
                  , s = this.masked.nearestInputPos(e.startChangePos + i, u);
                u !== _ && (s = this.masked.nearestInputPos(s, _)),
                this.updateControl(),
                this.updateCursor(s),
                delete this._inputEvent
            }
        }, {
            key: "_onChange",
            value: function() {
                this.value !== this.el.value && this.updateValue(),
                this.masked.doCommit(),
                this.updateControl(),
                this._saveSelection()
            }
        }, {
            key: "_onDrop",
            value: function(t) {
                t.preventDefault(),
                t.stopPropagation()
            }
        }, {
            key: "_onFocus",
            value: function(t) {
                this.alignCursorFriendly()
            }
        }, {
            key: "_onClick",
            value: function(t) {
                this.alignCursorFriendly()
            }
        }, {
            key: "destroy",
            value: function() {
                this._unbindEvents(),
                this._listeners.length = 0,
                delete this.el
            }
        }]),
        t
    }();
    w.InputMask = W;
    var X = function(t) {
        s(i, t);
        var e = h(i);
        function i() {
            return n(this, i),
            e.apply(this, arguments)
        }
        return u(i, [{
            key: "_update",
            value: function(t) {
                t.enum && (t.mask = "*".repeat(t.enum[0].length)),
                f(r(i.prototype), "_update", this).call(this, t)
            }
        }, {
            key: "doValidate",
            value: function() {
                for (var t, e = this, n = arguments.length, u = new Array(n), s = 0; s < n; s++)
                    u[s] = arguments[s];
                return this.enum.some((function(t) {
                    return t.indexOf(e.unmaskedValue) >= 0
                }
                )) && (t = f(r(i.prototype), "doValidate", this)).call.apply(t, [this].concat(u))
            }
        }]),
        i
    }(Y);
    w.MaskedEnum = X;
    var J, Q = function(t) {
        s(i, t);
        var e = h(i);
        function i(t) {
            return n(this, i),
            e.call(this, Object.assign({}, i.DEFAULTS, t))
        }
        return u(i, [{
            key: "_update",
            value: function(t) {
                f(r(i.prototype), "_update", this).call(this, t),
                this._updateRegExps()
            }
        }, {
            key: "_updateRegExps",
            value: function() {
                var t = "^" + (this.allowNegative ? "[+|\\-]?" : "")
                  , e = (this.scale ? "(" + F(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
                this._numberRegExpInput = new RegExp(t + "(0|([1-9]+\\d*))?" + e),
                this._numberRegExp = new RegExp(t + "\\d*" + e),
                this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(F).join("") + "]","g"),
                this._thousandsSeparatorRegExp = new RegExp(F(this.thousandsSeparator),"g")
            }
        }, {
            key: "_removeThousandsSeparators",
            value: function(t) {
                return t.replace(this._thousandsSeparatorRegExp, "")
            }
        }, {
            key: "_insertThousandsSeparators",
            value: function(t) {
                var e = t.split(this.radix);
                return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator),
                e.join(this.radix)
            }
        }, {
            key: "doPrepare",
            value: function(t) {
                var e;
                t = t.replace(this._mapToRadixRegExp, this.radix);
                for (var n = this._removeThousandsSeparators(t), u = arguments.length, s = new Array(u > 1 ? u - 1 : 0), a = 1; a < u; a++)
                    s[a - 1] = arguments[a];
                var o = v(S((e = f(r(i.prototype), "doPrepare", this)).call.apply(e, [this, n].concat(s))), 2)
                  , l = o[0]
                  , h = o[1];
                return t && !n && (h.skip = !0),
                [l, h]
            }
        }, {
            key: "_separatorsCount",
            value: function(t) {
                for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, i = 0; i < t; ++i)
                    this._value.indexOf(this.thousandsSeparator, i) === i && (++n,
                    e && (t += this.thousandsSeparator.length));
                return n
            }
        }, {
            key: "_separatorsCountFromSlice",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._value;
                return this._separatorsCount(this._removeThousandsSeparators(t).length, !0)
            }
        }, {
            key: "extractInput",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length
                  , n = arguments.length > 2 ? arguments[2] : void 0
                  , u = v(this._adjustRangeWithSeparators(t, e), 2);
                return t = u[0],
                e = u[1],
                this._removeThousandsSeparators(f(r(i.prototype), "extractInput", this).call(this, t, e, n))
            }
        }, {
            key: "_appendCharRaw",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!this.thousandsSeparator)
                    return f(r(i.prototype), "_appendCharRaw", this).call(this, t, e);
                var n = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value
                  , u = this._separatorsCountFromSlice(n);
                this._value = this._removeThousandsSeparators(this.value);
                var s = f(r(i.prototype), "_appendCharRaw", this).call(this, t, e);
                this._value = this._insertThousandsSeparators(this._value);
                var a = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value
                  , o = this._separatorsCountFromSlice(a);
                return s.tailShift += (o - u) * this.thousandsSeparator.length,
                s.skip = !s.rawInserted && t === this.thousandsSeparator,
                s
            }
        }, {
            key: "_findSeparatorAround",
            value: function(t) {
                if (this.thousandsSeparator) {
                    var e = t - this.thousandsSeparator.length + 1
                      , n = this.value.indexOf(this.thousandsSeparator, e);
                    if (n <= t)
                        return n
                }
                return -1
            }
        }, {
            key: "_adjustRangeWithSeparators",
            value: function(t, e) {
                var n = this._findSeparatorAround(t);
                n >= 0 && (t = n);
                var i = this._findSeparatorAround(e);
                return i >= 0 && (e = i + this.thousandsSeparator.length),
                [t, e]
            }
        }, {
            key: "remove",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length
                  , n = v(this._adjustRangeWithSeparators(t, e), 2);
                t = n[0],
                e = n[1];
                var i = this.value.slice(0, t)
                  , u = this.value.slice(e)
                  , s = this._separatorsCount(i.length);
                this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(i + u));
                var r = this._separatorsCountFromSlice(i);
                return new y({
                    tailShift: (r - s) * this.thousandsSeparator.length
                })
            }
        }, {
            key: "nearestInputPos",
            value: function(t, e) {
                if (!this.thousandsSeparator)
                    return t;
                switch (e) {
                case _:
                case A:
                case b:
                    var n = this._findSeparatorAround(t - 1);
                    if (n >= 0) {
                        var i = n + this.thousandsSeparator.length;
                        if (t < i || this.value.length <= i || e === b)
                            return n
                    }
                    break;
                case C:
                case E:
                    var u = this._findSeparatorAround(t);
                    if (u >= 0)
                        return u + this.thousandsSeparator.length
                }
                return t
            }
        }, {
            key: "doValidate",
            value: function(t) {
                var e = (t.input ? this._numberRegExpInput : this._numberRegExp).test(this._removeThousandsSeparators(this.value));
                if (e) {
                    var n = this.number;
                    e = e && !isNaN(n) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max)
                }
                return e && f(r(i.prototype), "doValidate", this).call(this, t)
            }
        }, {
            key: "doCommit",
            value: function() {
                if (this.value) {
                    var t = this.number
                      , e = t;
                    null != this.min && (e = Math.max(e, this.min)),
                    null != this.max && (e = Math.min(e, this.max)),
                    e !== t && (this.unmaskedValue = String(e));
                    var n = this.value;
                    this.normalizeZeros && (n = this._normalizeZeros(n)),
                    this.padFractionalZeros && this.scale > 0 && (n = this._padFractionalZeros(n)),
                    this._value = n
                }
                f(r(i.prototype), "doCommit", this).call(this)
            }
        }, {
            key: "_normalizeZeros",
            value: function(t) {
                var e = this._removeThousandsSeparators(t).split(this.radix);
                return e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, (function(t, e, n, i) {
                    return e + i
                }
                )),
                t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + "0"),
                e.length > 1 && (e[1] = e[1].replace(/0*$/, ""),
                e[1].length || (e.length = 1)),
                this._insertThousandsSeparators(e.join(this.radix))
            }
        }, {
            key: "_padFractionalZeros",
            value: function(t) {
                if (!t)
                    return t;
                var e = t.split(this.radix);
                return e.length < 2 && e.push(""),
                e[1] = e[1].padEnd(this.scale, "0"),
                e.join(this.radix)
            }
        }, {
            key: "unmaskedValue",
            get: function() {
                return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".")
            },
            set: function(t) {
                d(r(i.prototype), "unmaskedValue", t.replace(".", this.radix), this, !0)
            }
        }, {
            key: "typedValue",
            get: function() {
                return Number(this.unmaskedValue)
            },
            set: function(t) {
                d(r(i.prototype), "unmaskedValue", String(t), this, !0)
            }
        }, {
            key: "number",
            get: function() {
                return this.typedValue
            },
            set: function(t) {
                this.typedValue = t
            }
        }, {
            key: "allowNegative",
            get: function() {
                return this.signed || null != this.min && this.min < 0 || null != this.max && this.max < 0
            }
        }, {
            key: "typedValueEquals",
            value: function(t) {
                return (f(r(i.prototype), "typedValueEquals", this).call(this, t) || i.EMPTY_VALUES.includes(t) && i.EMPTY_VALUES.includes(this.typedValue)) && !(0 === t && "" === this.value)
            }
        }]),
        i
    }(M);
    Q.DEFAULTS = {
        radix: ",",
        thousandsSeparator: "",
        mapToRadix: ["."],
        scale: 2,
        signed: !1,
        normalizeZeros: !0,
        padFractionalZeros: !1
    },
    Q.EMPTY_VALUES = [].concat(function(t) {
        if (Array.isArray(t))
            return g(t)
    }(J = M.EMPTY_VALUES) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
            return Array.from(t)
    }(J) || k(J) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }(), [0]),
    w.MaskedNumber = Q;
    var tt = function(t) {
        s(i, t);
        var e = h(i);
        function i() {
            return n(this, i),
            e.apply(this, arguments)
        }
        return u(i, [{
            key: "_update",
            value: function(t) {
                t.mask && (t.validate = t.mask),
                f(r(i.prototype), "_update", this).call(this, t)
            }
        }]),
        i
    }(M);
    w.MaskedFunction = tt;
    var et = ["compiledMasks", "currentMaskRef", "currentMask"]
      , nt = function(t) {
        s(i, t);
        var e = h(i);
        function i(t) {
            var u;
            return n(this, i),
            (u = e.call(this, Object.assign({}, i.DEFAULTS, t))).currentMask = null,
            u
        }
        return u(i, [{
            key: "_update",
            value: function(t) {
                f(r(i.prototype), "_update", this).call(this, t),
                "mask"in t && (this.compiledMasks = Array.isArray(t.mask) ? t.mask.map((function(t) {
                    return T(t)
                }
                )) : [])
            }
        }, {
            key: "_appendCharRaw",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = this._applyDispatch(t, e);
                return this.currentMask && n.aggregate(this.currentMask._appendChar(t, this.currentMaskFlags(e))),
                n
            }
        }, {
            key: "_applyDispatch",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = e.tail && null != e._beforeTailState ? e._beforeTailState._value : this.value
                  , i = this.rawInputValue
                  , u = e.tail && null != e._beforeTailState ? e._beforeTailState._rawInputValue : i
                  , s = i.slice(u.length)
                  , r = this.currentMask
                  , a = new y
                  , o = null == r ? void 0 : r.state;
                if (this.currentMask = this.doDispatch(t, Object.assign({}, e)),
                this.currentMask)
                    if (this.currentMask !== r) {
                        if (this.currentMask.reset(),
                        u) {
                            var l = this.currentMask.append(u, {
                                raw: !0
                            });
                            a.tailShift = l.inserted.length - n.length
                        }
                        s && (a.tailShift += this.currentMask.append(s, {
                            raw: !0,
                            tail: !0
                        }).tailShift)
                    } else
                        this.currentMask.state = o;
                return a
            }
        }, {
            key: "_appendPlaceholder",
            value: function() {
                var t = this._applyDispatch.apply(this, arguments);
                return this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()),
                t
            }
        }, {
            key: "_appendEager",
            value: function() {
                var t = this._applyDispatch.apply(this, arguments);
                return this.currentMask && t.aggregate(this.currentMask._appendEager()),
                t
            }
        }, {
            key: "currentMaskFlags",
            value: function(t) {
                var e, n;
                return Object.assign({}, t, {
                    _beforeTailState: (null === (e = t._beforeTailState) || void 0 === e ? void 0 : e.currentMaskRef) === this.currentMask && (null === (n = t._beforeTailState) || void 0 === n ? void 0 : n.currentMask) || t._beforeTailState
                })
            }
        }, {
            key: "doDispatch",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.dispatch(t, this, e)
            }
        }, {
            key: "doValidate",
            value: function(t) {
                return f(r(i.prototype), "doValidate", this).call(this, t) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(t)))
            }
        }, {
            key: "doPrepare",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = v(S(f(r(i.prototype), "doPrepare", this).call(this, t, e)), 2)
                  , u = n[0]
                  , s = n[1];
                if (this.currentMask) {
                    var a, o = v(S(f(r(i.prototype), "doPrepare", this).call(this, u, this.currentMaskFlags(e))), 2);
                    u = o[0],
                    a = o[1],
                    s = s.aggregate(a)
                }
                return [u, s]
            }
        }, {
            key: "reset",
            value: function() {
                var t;
                null === (t = this.currentMask) || void 0 === t || t.reset(),
                this.compiledMasks.forEach((function(t) {
                    return t.reset()
                }
                ))
            }
        }, {
            key: "value",
            get: function() {
                return this.currentMask ? this.currentMask.value : ""
            },
            set: function(t) {
                d(r(i.prototype), "value", t, this, !0)
            }
        }, {
            key: "unmaskedValue",
            get: function() {
                return this.currentMask ? this.currentMask.unmaskedValue : ""
            },
            set: function(t) {
                d(r(i.prototype), "unmaskedValue", t, this, !0)
            }
        }, {
            key: "typedValue",
            get: function() {
                return this.currentMask ? this.currentMask.typedValue : ""
            },
            set: function(t) {
                var e = String(t);
                this.currentMask && (this.currentMask.typedValue = t,
                e = this.currentMask.unmaskedValue),
                this.unmaskedValue = e
            }
        }, {
            key: "isComplete",
            get: function() {
                var t;
                return Boolean(null === (t = this.currentMask) || void 0 === t ? void 0 : t.isComplete)
            }
        }, {
            key: "isFilled",
            get: function() {
                var t;
                return Boolean(null === (t = this.currentMask) || void 0 === t ? void 0 : t.isFilled)
            }
        }, {
            key: "remove",
            value: function() {
                var t, e = new y;
                this.currentMask && e.aggregate((t = this.currentMask).remove.apply(t, arguments)).aggregate(this._applyDispatch());
                return e
            }
        }, {
            key: "state",
            get: function() {
                var t;
                return Object.assign({}, f(r(i.prototype), "state", this), {
                    _rawInputValue: this.rawInputValue,
                    compiledMasks: this.compiledMasks.map((function(t) {
                        return t.state
                    }
                    )),
                    currentMaskRef: this.currentMask,
                    currentMask: null === (t = this.currentMask) || void 0 === t ? void 0 : t.state
                })
            },
            set: function(t) {
                var e = t.compiledMasks
                  , n = t.currentMaskRef
                  , u = t.currentMask
                  , s = o(t, et);
                this.compiledMasks.forEach((function(t, n) {
                    return t.state = e[n]
                }
                )),
                null != n && (this.currentMask = n,
                this.currentMask.state = u),
                d(r(i.prototype), "state", s, this, !0)
            }
        }, {
            key: "extractInput",
            value: function() {
                var t;
                return this.currentMask ? (t = this.currentMask).extractInput.apply(t, arguments) : ""
            }
        }, {
            key: "extractTail",
            value: function() {
                for (var t, e, n = arguments.length, u = new Array(n), s = 0; s < n; s++)
                    u[s] = arguments[s];
                return this.currentMask ? (t = this.currentMask).extractTail.apply(t, u) : (e = f(r(i.prototype), "extractTail", this)).call.apply(e, [this].concat(u))
            }
        }, {
            key: "doCommit",
            value: function() {
                this.currentMask && this.currentMask.doCommit(),
                f(r(i.prototype), "doCommit", this).call(this)
            }
        }, {
            key: "nearestInputPos",
            value: function() {
                for (var t, e, n = arguments.length, u = new Array(n), s = 0; s < n; s++)
                    u[s] = arguments[s];
                return this.currentMask ? (t = this.currentMask).nearestInputPos.apply(t, u) : (e = f(r(i.prototype), "nearestInputPos", this)).call.apply(e, [this].concat(u))
            }
        }, {
            key: "overwrite",
            get: function() {
                return this.currentMask ? this.currentMask.overwrite : f(r(i.prototype), "overwrite", this)
            },
            set: function(t) {
                console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings')
            }
        }, {
            key: "eager",
            get: function() {
                return this.currentMask ? this.currentMask.eager : f(r(i.prototype), "eager", this)
            },
            set: function(t) {
                console.warn('"eager" option is not available in dynamic mask, use this option in siblings')
            }
        }, {
            key: "maskEquals",
            value: function(t) {
                return Array.isArray(t) && this.compiledMasks.every((function(e, n) {
                    var i;
                    return e.maskEquals(null === (i = t[n]) || void 0 === i ? void 0 : i.mask)
                }
                ))
            }
        }, {
            key: "typedValueEquals",
            value: function(t) {
                var e;
                return Boolean(null === (e = this.currentMask) || void 0 === e ? void 0 : e.typedValueEquals(t))
            }
        }]),
        i
    }(M);
    nt.DEFAULTS = {
        dispatch: function(t, e, n) {
            if (e.compiledMasks.length) {
                var i = e.rawInputValue
                  , u = e.compiledMasks.map((function(u, s) {
                    return u.reset(),
                    u.append(i, {
                        raw: !0
                    }),
                    u.append(t, e.currentMaskFlags(n)),
                    {
                        weight: u.rawInputValue.length,
                        index: s
                    }
                }
                ));
                return u.sort((function(t, e) {
                    return e.weight - t.weight
                }
                )),
                e.compiledMasks[u[0].index]
            }
        }
    },
    w.MaskedDynamic = nt;
    var it = {
        MASKED: "value",
        UNMASKED: "unmaskedValue",
        TYPED: "typedValue"
    };
    function ut(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : it.MASKED
          , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : it.MASKED
          , i = T(t);
        return function(t) {
            return i.runIsolated((function(i) {
                return i[e] = t,
                i[n]
            }
            ))
        }
    }
    function st(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
            n[i - 1] = arguments[i];
        return ut.apply(void 0, n)(t)
    }
    w.PIPE_TYPE = it,
    w.createPipe = ut,
    w.pipe = st;
    try {
        globalThis.IMask = w
    } catch (t) {}
    t.HTMLContenteditableMaskElement = $,
    t.HTMLMaskElement = K,
    t.InputMask = W,
    t.MaskElement = Z,
    t.Masked = M,
    t.MaskedDate = H,
    t.MaskedDynamic = nt,
    t.MaskedEnum = X,
    t.MaskedFunction = tt,
    t.MaskedNumber = Q,
    t.MaskedPattern = Y,
    t.MaskedRange = z,
    t.MaskedRegExp = N,
    t.PIPE_TYPE = it,
    t.createMask = T,
    t.createPipe = ut,
    t.default = w,
    t.pipe = st,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}
));
