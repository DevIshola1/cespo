"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6764], {
        70723: function(t, e, u) {
            let f, h;
            u.d(e, {
                $0m: function() {
                    return $o
                },
                AWt: function() {
                    return e3
                },
                Au2: function() {
                    return mu
                },
                B95: function() {
                    return oh
                },
                Bvr: function() {
                    return Du
                },
                BwD: function() {
                    return p0
                },
                D6H: function() {
                    return tr
                },
                DJo: function() {
                    return fu
                },
                DQe: function() {
                    return dn
                },
                DaH: function() {
                    return Xo
                },
                DdM: function() {
                    return Vu
                },
                E0T: function() {
                    return v0
                },
                E12: function() {
                    return ju
                },
                EJd: function() {
                    return $u
                },
                ENt: function() {
                    return eo
                },
                Ggh: function() {
                    return hh
                },
                GqV: function() {
                    return c0
                },
                H1S: function() {
                    return a0
                },
                H4H: function() {
                    return th
                },
                HIp: function() {
                    return wu
                },
                HhN: function() {
                    return m0
                },
                IPd: function() {
                    return n0
                },
                Ih8: function() {
                    return Qu
                },
                IkP: function() {
                    return cu
                },
                JTI: function() {
                    return rh
                },
                KCv: function() {
                    return i0
                },
                L5o: function() {
                    return Yr
                },
                Llj: function() {
                    return Mu
                },
                M_r: function() {
                    return Gt
                },
                Maj: function() {
                    return vo
                },
                NmC: function() {
                    return Li
                },
                O6B: function() {
                    return lh
                },
                ONw: function() {
                    return uh
                },
                PMr: function() {
                    return Xu
                },
                Q01: function() {
                    return Zu
                },
                Q8x: function() {
                    return Eu
                },
                UGU: function() {
                    return pi
                },
                WGe: function() {
                    return Mr
                },
                X_B: function() {
                    return Wo
                },
                Y31: function() {
                    return du
                },
                YmJ: function() {
                    return bu
                },
                Z26: function() {
                    return No
                },
                Z42: function() {
                    return h0
                },
                _HE: function() {
                    return Su
                },
                alS: function() {
                    return fh
                },
                b$m: function() {
                    return er
                },
                bW6: function() {
                    return g0
                },
                c4l: function() {
                    return ou
                },
                cOS: function() {
                    return Nu
                },
                eGA: function() {
                    return ge
                },
                gn4: function() {
                    return d0
                },
                gpE: function() {
                    return Zi
                },
                guN: function() {
                    return zo
                },
                h1R: function() {
                    return Yu
                },
                hA9: function() {
                    return Qr
                },
                hFY: function() {
                    return u0
                },
                hHR: function() {
                    return eh
                },
                heJ: function() {
                    return Pu
                },
                iPz: function() {
                    return l0
                },
                ing: function() {
                    return So
                },
                jUY: function() {
                    return pr
                },
                jdp: function() {
                    return gu
                },
                jvJ: function() {
                    return Ju
                },
                kCb: function() {
                    return xe
                },
                m$A: function() {
                    return Au
                },
                naP: function() {
                    return Wu
                },
                nfW: function() {
                    return ih
                },
                o8e: function() {
                    return Pe
                },
                ouN: function() {
                    return pu
                },
                p8o: function() {
                    return nh
                },
                peR: function() {
                    return xu
                },
                qJM: function() {
                    return lu
                },
                qt8: function() {
                    return Er
                },
                rFo: function() {
                    return Io
                },
                rVF: function() {
                    return e4
                },
                rjm: function() {
                    return yu
                },
                uwg: function() {
                    return ch
                },
                vBi: function() {
                    return Xi
                },
                wvx: function() {
                    return zf
                },
                xWS: function() {
                    return Gu
                }
            });
            var l, c, d, g, A, M, E, S, I, N, B, C = u(69954),
                _ = u(58619),
                O = u(849),
                x = u(36073),
                R = u(89291),
                P = u(51040),
                T = u(20342),
                D = u(35077),
                F = u(87853),
                q = u(38195),
                K = u(71188),
                Q = u(18431),
                X = u(25566),
                Z = u(67133).Buffer;

            function dn(t) {
                let [e, u] = t.split(":");
                return {
                    namespace: e,
                    reference: u
                }
            }

            function zo(t, e = []) {
                let u = [];
                return Object.keys(t).forEach(f => {
                    if (e.length && !e.includes(f)) return;
                    let h = t[f];
                    u.push(...h.accounts)
                }), u
            }

            function _r(t, e) {
                return t.includes(":") ? [t] : e.chains || []
            }
            var $ = Object.defineProperty,
                tt = Object.getOwnPropertySymbols,
                te = Object.prototype.hasOwnProperty,
                ti = Object.prototype.propertyIsEnumerable,
                yn = (t, e, u) => e in t ? $(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: u
                }) : t[e] = u,
                wn = (t, e) => {
                    for (var u in e || (e = {})) te.call(e, u) && yn(t, u, e[u]);
                    if (tt)
                        for (var u of tt(e)) ti.call(e, u) && yn(t, u, e[u]);
                    return t
                };
            let to = {
                reactNative: "react-native",
                node: "node",
                browser: "browser",
                unknown: "unknown"
            };

            function pi() {
                return "u" > typeof X && "u" > typeof X.versions && "u" > typeof X.versions.node
            }

            function er() {
                return !(0, O.getDocument)() && !!(0, O.getNavigator)() && "ReactNative" === navigator.product
            }

            function pr() {
                return !pi() && !!(0, O.getNavigator)() && !!(0, O.getDocument)()
            }

            function We() {
                return er() ? to.reactNative : pi() ? to.node : pr() ? to.browser : to.unknown
            }

            function Wo() {
                var t;
                try {
                    return er() && "u" > typeof u.g && "u" > typeof(null == u.g ? void 0 : u.g.Application) ? null == (t = u.g.Application) ? void 0 : t.applicationId : void 0
                } catch {
                    return
                }
            }

            function Xo() {
                return (0, x.D)() || {
                    name: "",
                    description: "",
                    url: "",
                    icons: [""]
                }
            }

            function $o({
                protocol: t,
                version: e,
                relayUrl: f,
                sdkVersion: h,
                auth: l,
                projectId: c,
                useOnCloseEvent: d,
                bundleId: g
            }) {
                var A;
                let M;
                let E = f.split("?"),
                    S = function(t, e, f) {
                        let h = function() {
                                if (We() === to.reactNative && "u" > typeof u.g && "u" > typeof(null == u.g ? void 0 : u.g.Platform)) {
                                    let {
                                        OS: t,
                                        Version: e
                                    } = u.g.Platform;
                                    return [t, e].join("-")
                                }
                                let t = (0, C.qY)();
                                if (null === t) return "unknown";
                                let e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
                                return "browser" === t.type ? [e, t.name, t.version].join("-") : [e, t.version].join("-")
                            }(),
                            l = function() {
                                var t;
                                let e = We();
                                return e === to.browser ? [e, (null == (t = (0, O.getLocation)()) ? void 0 : t.host) || "unknown"].join(":") : e
                            }();
                        return [
                            [t, e].join("-"), ["js", f].join("-"), h, l
                        ].join("/")
                    }(t, e, h),
                    I = (A = E[1] || "", M = wn(wn({}, M = R.parse(A)), {
                        auth: l,
                        ua: S,
                        projectId: c,
                        useOnCloseEvent: d || void 0,
                        origin: g || void 0
                    }), A = R.stringify(M));
                return E[0] + "?" + I
            }

            function _e(t, e) {
                return t.filter(t => e.includes(t)).length === t.length
            }

            function i0(t) {
                return Object.fromEntries(t.entries())
            }

            function n0(t) {
                return new Map(Object.entries(t))
            }

            function a0(t = _.FIVE_MINUTES, e) {
                let u, f, h;
                let l = (0, _.toMiliseconds)(t || _.FIVE_MINUTES);
                return {
                    resolve: t => {
                        h && u && (clearTimeout(h), u(t))
                    },
                    reject: t => {
                        h && f && (clearTimeout(h), f(t))
                    },
                    done: () => new Promise((t, c) => {
                        h = setTimeout(() => {
                            c(Error(e))
                        }, l), u = t, f = c
                    })
                }
            }

            function u0(t, e, u) {
                return new Promise(async (f, h) => {
                    let l = setTimeout(() => h(Error(u)), e);
                    try {
                        let e = await t;
                        f(e)
                    } catch (t) {
                        h(t)
                    }
                    clearTimeout(l)
                })
            }

            function vi(t, e) {
                if ("string" == typeof e && e.startsWith(`${t}:`)) return e;
                if ("topic" === t.toLowerCase()) {
                    if ("string" != typeof e) throw Error('Value must be "string" for expirer target type: topic');
                    return `topic:${e}`
                }
                if ("id" === t.toLowerCase()) {
                    if ("number" != typeof e) throw Error('Value must be "number" for expirer target type: id');
                    return `id:${e}`
                }
                throw Error(`Unknown expirer target type: ${t}`)
            }

            function h0(t) {
                return vi("topic", t)
            }

            function c0(t) {
                return vi("id", t)
            }

            function l0(t) {
                let [e, u] = t.split(":"), f = {
                    id: void 0,
                    topic: void 0
                };
                if ("topic" === e && "string" == typeof u) f.topic = u;
                else if ("id" === e && Number.isInteger(Number(u))) f.id = Number(u);
                else throw Error(`Invalid target, expected id:number or topic:string, got ${e}:${u}`);
                return f
            }

            function d0(t, e) {
                return (0, _.fromMiliseconds)((e || Date.now()) + (0, _.toMiliseconds)(t))
            }

            function p0(t) {
                return Date.now() >= (0, _.toMiliseconds)(t)
            }

            function v0(t, e) {
                return `${t}${e?`:${e}`:""}`
            }

            function ge(t = [], e = []) {
                return [...new Set([...t, ...e])]
            }
            async function m0({
                id: t,
                topic: e,
                wcDeepLink: f
            }) {
                try {
                    if (!f) return;
                    let h = "string" == typeof f ? JSON.parse(f) : f,
                        l = h ? .href;
                    if ("string" != typeof l) return;
                    l.endsWith("/") && (l = l.slice(0, -1));
                    let c = `${l}/wc?requestId=${t}&sessionTopic=${e}`,
                        d = We();
                    d === to.browser ? c.startsWith("https://") || c.startsWith("http://") ? window.open(c, "_blank", "noreferrer noopener") : window.open(c, "_self", "noreferrer noopener") : d === to.reactNative && "u" > typeof(null == u.g ? void 0 : u.g.Linking) && await u.g.Linking.openURL(c)
                } catch (t) {
                    console.error(t)
                }
            }
            async function g0(t, e) {
                try {
                    return await t.getItem(e) || (pr() ? localStorage.getItem(e) : void 0)
                } catch (t) {
                    console.error(t)
                }
            }
            var ts = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof u.g ? u.g : "u" > typeof self ? self : {},
                tu = {
                    exports: {}
                };
            ! function() {
                var t = "input is invalid type",
                    e = "object" == typeof window,
                    u = e ? window : {};
                u.JS_SHA3_NO_WINDOW && (e = !1);
                var f = !e && "object" == typeof self;
                !u.JS_SHA3_NO_NODE_JS && "object" == typeof X && X.versions && X.versions.node ? u = ts : f && (u = self);
                var h = !u.JS_SHA3_NO_COMMON_JS && tu.exports,
                    l = !u.JS_SHA3_NO_ARRAY_BUFFER && "u" > typeof ArrayBuffer,
                    c = "0123456789abcdef".split(""),
                    d = [4, 1024, 262144, 67108864],
                    g = [0, 8, 16, 24],
                    A = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                    M = [224, 256, 384, 512],
                    E = [128, 256],
                    S = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                    I = {
                        128: 168,
                        256: 136
                    };
                (u.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }), l && (u.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(t) {
                    return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                });
                for (var G = function(t, e, u) {
                        return function(f) {
                            return new s(t, e, t).update(f)[u]()
                        }
                    }, H = function(t, e, u) {
                        return function(f, h) {
                            return new s(t, e, h).update(f)[u]()
                        }
                    }, z = function(t, e, u) {
                        return function(e, f, h, l) {
                            return B["cshake" + t].update(e, f, h, l)[u]()
                        }
                    }, Pt = function(t, e, u) {
                        return function(e, f, h, l) {
                            return B["kmac" + t].update(e, f, h, l)[u]()
                        }
                    }, W = function(t, e, u, f) {
                        for (var h = 0; h < S.length; ++h) {
                            var l = S[h];
                            t[l] = e(u, f, l)
                        }
                        return t
                    }, Rt = function(t, e) {
                        var u = G(t, e, "hex");
                        return u.create = function() {
                            return new s(t, e, t)
                        }, u.update = function(t) {
                            return u.create().update(t)
                        }, W(u, G, t, e)
                    }, N = [{
                        name: "keccak",
                        padding: [1, 256, 65536, 16777216],
                        bits: M,
                        createMethod: Rt
                    }, {
                        name: "sha3",
                        padding: [6, 1536, 393216, 100663296],
                        bits: M,
                        createMethod: Rt
                    }, {
                        name: "shake",
                        padding: [31, 7936, 2031616, 520093696],
                        bits: E,
                        createMethod: function(t, e) {
                            var u = H(t, e, "hex");
                            return u.create = function(u) {
                                return new s(t, e, u)
                            }, u.update = function(t, e) {
                                return u.create(e).update(t)
                            }, W(u, H, t, e)
                        }
                    }, {
                        name: "cshake",
                        padding: d,
                        bits: E,
                        createMethod: function(t, e) {
                            var u = I[t],
                                f = z(t, e, "hex");
                            return f.create = function(f, h, l) {
                                return h || l ? new s(t, e, f).bytepad([h, l], u) : B["shake" + t].create(f)
                            }, f.update = function(t, e, u, h) {
                                return f.create(e, u, h).update(t)
                            }, W(f, z, t, e)
                        }
                    }, {
                        name: "kmac",
                        padding: d,
                        bits: E,
                        createMethod: function(t, e) {
                            var u = I[t],
                                f = Pt(t, e, "hex");
                            return f.create = function(f, h, l) {
                                return new v(t, e, h).bytepad(["KMAC", l], u).bytepad([f], u)
                            }, f.update = function(t, e, u, h) {
                                return f.create(t, u, h).update(e)
                            }, W(f, Pt, t, e)
                        }
                    }], B = {}, C = [], _ = 0; _ < N.length; ++_)
                    for (var O = N[_], x = O.bits, R = 0; R < x.length; ++R) {
                        var P = O.name + "_" + x[R];
                        if (C.push(P), B[P] = O.createMethod(x[R], O.padding), "sha3" !== O.name) {
                            var T = O.name + x[R];
                            C.push(T), B[T] = B[P]
                        }
                    }

                function s(t, e, u) {
                    this.blocks = [], this.s = [], this.padding = e, this.outputBits = u, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = u >> 5, this.extraBytes = (31 & u) >> 3;
                    for (var f = 0; f < 50; ++f) this.s[f] = 0
                }

                function v(t, e, u) {
                    s.call(this, t, e, u)
                }
                s.prototype.update = function(e) {
                    if (this.finalized) throw Error("finalize already called");
                    var u, f = typeof e;
                    if ("string" !== f) {
                        if ("object" === f) {
                            if (null === e) throw Error(t);
                            if (l && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                            else if (!Array.isArray(e) && (!l || !ArrayBuffer.isView(e))) throw Error(t)
                        } else throw Error(t);
                        u = !0
                    }
                    for (var h, c, d = this.blocks, A = this.byteCount, M = e.length, E = this.blockCount, S = 0, I = this.s; S < M;) {
                        if (this.reset)
                            for (this.reset = !1, d[0] = this.block, h = 1; h < E + 1; ++h) d[h] = 0;
                        if (u)
                            for (h = this.start; S < M && h < A; ++S) d[h >> 2] |= e[S] << g[3 & h++];
                        else
                            for (h = this.start; S < M && h < A; ++S)(c = e.charCodeAt(S)) < 128 ? d[h >> 2] |= c << g[3 & h++] : (c < 2048 ? d[h >> 2] |= (192 | c >> 6) << g[3 & h++] : (c < 55296 || c >= 57344 ? d[h >> 2] |= (224 | c >> 12) << g[3 & h++] : (c = 65536 + ((1023 & c) << 10 | 1023 & e.charCodeAt(++S)), d[h >> 2] |= (240 | c >> 18) << g[3 & h++], d[h >> 2] |= (128 | c >> 12 & 63) << g[3 & h++]), d[h >> 2] |= (128 | c >> 6 & 63) << g[3 & h++]), d[h >> 2] |= (128 | 63 & c) << g[3 & h++]);
                        if (this.lastByteIndex = h, h >= A) {
                            for (this.start = h - A, this.block = d[E], h = 0; h < E; ++h) I[h] ^= d[h];
                            k(I), this.reset = !0
                        } else this.start = h
                    }
                    return this
                }, s.prototype.encode = function(t, e) {
                    var u = 255 & t,
                        f = 1,
                        h = [u];
                    for (t >>= 8, u = 255 & t; u > 0;) h.unshift(u), t >>= 8, u = 255 & t, ++f;
                    return e ? h.push(f) : h.unshift(f), this.update(h), h.length
                }, s.prototype.encodeString = function(e) {
                    var u, f = typeof e;
                    if ("string" !== f) {
                        if ("object" === f) {
                            if (null === e) throw Error(t);
                            if (l && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                            else if (!Array.isArray(e) && (!l || !ArrayBuffer.isView(e))) throw Error(t)
                        } else throw Error(t);
                        u = !0
                    }
                    var h = 0,
                        c = e.length;
                    if (u) h = c;
                    else
                        for (var d = 0; d < e.length; ++d) {
                            var g = e.charCodeAt(d);
                            g < 128 ? h += 1 : g < 2048 ? h += 2 : g < 55296 || g >= 57344 ? h += 3 : (g = 65536 + ((1023 & g) << 10 | 1023 & e.charCodeAt(++d)), h += 4)
                        }
                    return h += this.encode(8 * h), this.update(e), h
                }, s.prototype.bytepad = function(t, e) {
                    for (var u = this.encode(e), f = 0; f < t.length; ++f) u += this.encodeString(t[f]);
                    var h = e - u % e,
                        l = [];
                    return l.length = h, this.update(l), this
                }, s.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var t = this.blocks,
                            e = this.lastByteIndex,
                            u = this.blockCount,
                            f = this.s;
                        if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount)
                            for (t[0] = t[u], e = 1; e < u + 1; ++e) t[e] = 0;
                        for (t[u - 1] |= 2147483648, e = 0; e < u; ++e) f[e] ^= t[e];
                        k(f)
                    }
                }, s.prototype.toString = s.prototype.hex = function() {
                    this.finalize();
                    for (var t, e = this.blockCount, u = this.s, f = this.outputBlocks, h = this.extraBytes, l = 0, d = 0, g = ""; d < f;) {
                        for (l = 0; l < e && d < f; ++l, ++d) g += c[(t = u[l]) >> 4 & 15] + c[15 & t] + c[t >> 12 & 15] + c[t >> 8 & 15] + c[t >> 20 & 15] + c[t >> 16 & 15] + c[t >> 28 & 15] + c[t >> 24 & 15];
                        d % e == 0 && (k(u), l = 0)
                    }
                    return h && (g += c[(t = u[l]) >> 4 & 15] + c[15 & t], h > 1 && (g += c[t >> 12 & 15] + c[t >> 8 & 15]), h > 2 && (g += c[t >> 20 & 15] + c[t >> 16 & 15])), g
                }, s.prototype.arrayBuffer = function() {
                    this.finalize();
                    var t, e = this.blockCount,
                        u = this.s,
                        f = this.outputBlocks,
                        h = this.extraBytes,
                        l = 0,
                        c = 0,
                        d = this.outputBits >> 3;
                    t = new ArrayBuffer(h ? f + 1 << 2 : d);
                    for (var g = new Uint32Array(t); c < f;) {
                        for (l = 0; l < e && c < f; ++l, ++c) g[c] = u[l];
                        c % e == 0 && k(u)
                    }
                    return h && (g[l] = u[l], t = t.slice(0, d)), t
                }, s.prototype.buffer = s.prototype.arrayBuffer, s.prototype.digest = s.prototype.array = function() {
                    this.finalize();
                    for (var t, e, u = this.blockCount, f = this.s, h = this.outputBlocks, l = this.extraBytes, c = 0, d = 0, g = []; d < h;) {
                        for (c = 0; c < u && d < h; ++c, ++d) t = d << 2, e = f[c], g[t] = 255 & e, g[t + 1] = e >> 8 & 255, g[t + 2] = e >> 16 & 255, g[t + 3] = e >> 24 & 255;
                        d % u == 0 && k(f)
                    }
                    return l && (t = d << 2, e = f[c], g[t] = 255 & e, l > 1 && (g[t + 1] = e >> 8 & 255), l > 2 && (g[t + 2] = e >> 16 & 255)), g
                }, v.prototype = new s, v.prototype.finalize = function() {
                    return this.encode(this.outputBits, !0), s.prototype.finalize.call(this)
                };
                var k = function(t) {
                    var e, u, f, h, l, c, d, g, M, E, S, I, N, B, C, _, O, x, R, P, T, D, F, q, K, Q, X, Z, $, tt, te, ti, to, ts, tu, tf, ta, tl, tc, td, tp, tm, tg, tv, tA, ty, tb, tw, tM, tE, tS, tI, tN, tB, tC, t_, tO, tx, tR, tk, tP, tU, tT;
                    for (f = 0; f < 48; f += 2) h = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], l = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], c = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], d = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], g = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], M = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], E = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], S = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], I = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48], N = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49], e = I ^ (c << 1 | d >>> 31), u = N ^ (d << 1 | c >>> 31), t[0] ^= e, t[1] ^= u, t[10] ^= e, t[11] ^= u, t[20] ^= e, t[21] ^= u, t[30] ^= e, t[31] ^= u, t[40] ^= e, t[41] ^= u, e = h ^ (g << 1 | M >>> 31), u = l ^ (M << 1 | g >>> 31), t[2] ^= e, t[3] ^= u, t[12] ^= e, t[13] ^= u, t[22] ^= e, t[23] ^= u, t[32] ^= e, t[33] ^= u, t[42] ^= e, t[43] ^= u, e = c ^ (E << 1 | S >>> 31), u = d ^ (S << 1 | E >>> 31), t[4] ^= e, t[5] ^= u, t[14] ^= e, t[15] ^= u, t[24] ^= e, t[25] ^= u, t[34] ^= e, t[35] ^= u, t[44] ^= e, t[45] ^= u, e = g ^ (I << 1 | N >>> 31), u = M ^ (N << 1 | I >>> 31), t[6] ^= e, t[7] ^= u, t[16] ^= e, t[17] ^= u, t[26] ^= e, t[27] ^= u, t[36] ^= e, t[37] ^= u, t[46] ^= e, t[47] ^= u, e = E ^ (h << 1 | l >>> 31), u = S ^ (l << 1 | h >>> 31), t[8] ^= e, t[9] ^= u, t[18] ^= e, t[19] ^= u, t[28] ^= e, t[29] ^= u, t[38] ^= e, t[39] ^= u, t[48] ^= e, t[49] ^= u, B = t[0], C = t[1], ty = t[11] << 4 | t[10] >>> 28, tb = t[10] << 4 | t[11] >>> 28, Z = t[20] << 3 | t[21] >>> 29, $ = t[21] << 3 | t[20] >>> 29, tk = t[31] << 9 | t[30] >>> 23, tP = t[30] << 9 | t[31] >>> 23, tm = t[40] << 18 | t[41] >>> 14, tg = t[41] << 18 | t[40] >>> 14, ts = t[2] << 1 | t[3] >>> 31, tu = t[3] << 1 | t[2] >>> 31, _ = t[13] << 12 | t[12] >>> 20, O = t[12] << 12 | t[13] >>> 20, tw = t[22] << 10 | t[23] >>> 22, tM = t[23] << 10 | t[22] >>> 22, tt = t[33] << 13 | t[32] >>> 19, te = t[32] << 13 | t[33] >>> 19, tU = t[42] << 2 | t[43] >>> 30, tT = t[43] << 2 | t[42] >>> 30, tB = t[5] << 30 | t[4] >>> 2, tC = t[4] << 30 | t[5] >>> 2, tf = t[14] << 6 | t[15] >>> 26, ta = t[15] << 6 | t[14] >>> 26, x = t[25] << 11 | t[24] >>> 21, R = t[24] << 11 | t[25] >>> 21, tE = t[34] << 15 | t[35] >>> 17, tS = t[35] << 15 | t[34] >>> 17, ti = t[45] << 29 | t[44] >>> 3, to = t[44] << 29 | t[45] >>> 3, q = t[6] << 28 | t[7] >>> 4, K = t[7] << 28 | t[6] >>> 4, t_ = t[17] << 23 | t[16] >>> 9, tO = t[16] << 23 | t[17] >>> 9, tl = t[26] << 25 | t[27] >>> 7, tc = t[27] << 25 | t[26] >>> 7, P = t[36] << 21 | t[37] >>> 11, T = t[37] << 21 | t[36] >>> 11, tI = t[47] << 24 | t[46] >>> 8, tN = t[46] << 24 | t[47] >>> 8, tv = t[8] << 27 | t[9] >>> 5, tA = t[9] << 27 | t[8] >>> 5, Q = t[18] << 20 | t[19] >>> 12, X = t[19] << 20 | t[18] >>> 12, tx = t[29] << 7 | t[28] >>> 25, tR = t[28] << 7 | t[29] >>> 25, td = t[38] << 8 | t[39] >>> 24, tp = t[39] << 8 | t[38] >>> 24, D = t[48] << 14 | t[49] >>> 18, F = t[49] << 14 | t[48] >>> 18, t[0] = B ^ ~_ & x, t[1] = C ^ ~O & R, t[10] = q ^ ~Q & Z, t[11] = K ^ ~X & $, t[20] = ts ^ ~tf & tl, t[21] = tu ^ ~ta & tc, t[30] = tv ^ ~ty & tw, t[31] = tA ^ ~tb & tM, t[40] = tB ^ ~t_ & tx, t[41] = tC ^ ~tO & tR, t[2] = _ ^ ~x & P, t[3] = O ^ ~R & T, t[12] = Q ^ ~Z & tt, t[13] = X ^ ~$ & te, t[22] = tf ^ ~tl & td, t[23] = ta ^ ~tc & tp, t[32] = ty ^ ~tw & tE, t[33] = tb ^ ~tM & tS, t[42] = t_ ^ ~tx & tk, t[43] = tO ^ ~tR & tP, t[4] = x ^ ~P & D, t[5] = R ^ ~T & F, t[14] = Z ^ ~tt & ti, t[15] = $ ^ ~te & to, t[24] = tl ^ ~td & tm, t[25] = tc ^ ~tp & tg, t[34] = tw ^ ~tE & tI, t[35] = tM ^ ~tS & tN, t[44] = tx ^ ~tk & tU, t[45] = tR ^ ~tP & tT, t[6] = P ^ ~D & B, t[7] = T ^ ~F & C, t[16] = tt ^ ~ti & q, t[17] = te ^ ~to & K, t[26] = td ^ ~tm & ts, t[27] = tp ^ ~tg & tu, t[36] = tE ^ ~tI & tv, t[37] = tS ^ ~tN & tA, t[46] = tk ^ ~tU & tB, t[47] = tP ^ ~tT & tC, t[8] = D ^ ~B & _, t[9] = F ^ ~C & O, t[18] = ti ^ ~q & Q, t[19] = to ^ ~K & X, t[28] = tm ^ ~ts & tf, t[29] = tg ^ ~tu & ta, t[38] = tI ^ ~tv & ty, t[39] = tN ^ ~tA & tb, t[48] = tU ^ ~tB & t_, t[49] = tT ^ ~tC & tO, t[0] ^= A[f], t[1] ^= A[f + 1]
                };
                if (h) tu.exports = B;
                else
                    for (_ = 0; _ < C.length; ++_) u[C[_]] = B[C[_]]
            }();
            var tf = tu.exports;
            let ta = !1,
                tl = !1,
                tc = {
                    debug: 1,
                    default: 2,
                    info: 2,
                    warning: 3,
                    error: 4,
                    off: 5
                },
                td = 2,
                tp = null,
                tm = function() {
                    try {
                        let t = [];
                        if (["NFD", "NFC", "NFKD", "NFKC"].forEach(e => {
                                try {
                                    if ("test" !== "test".normalize(e)) throw Error("bad normalize")
                                } catch {
                                    t.push(e)
                                }
                            }), t.length) throw Error("missing " + t.join(", "));
                        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw Error("broken implementation")
                    } catch (t) {
                        return t.message
                    }
                    return null
                }();
            (c = E || (E = {})).DEBUG = "DEBUG", c.INFO = "INFO", c.WARNING = "WARNING", c.ERROR = "ERROR", c.OFF = "OFF", (d = S || (S = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR", d.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", d.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", d.NETWORK_ERROR = "NETWORK_ERROR", d.SERVER_ERROR = "SERVER_ERROR", d.TIMEOUT = "TIMEOUT", d.BUFFER_OVERRUN = "BUFFER_OVERRUN", d.NUMERIC_FAULT = "NUMERIC_FAULT", d.MISSING_NEW = "MISSING_NEW", d.INVALID_ARGUMENT = "INVALID_ARGUMENT", d.MISSING_ARGUMENT = "MISSING_ARGUMENT", d.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", d.CALL_EXCEPTION = "CALL_EXCEPTION", d.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", d.NONCE_EXPIRED = "NONCE_EXPIRED", d.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", d.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", d.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", d.ACTION_REJECTED = "ACTION_REJECTED";
            let tg = "0123456789abcdef";
            let L = class L {
                constructor(t) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                }
                _log(t, e) {
                    let u = t.toLowerCase();
                    null == tc[u] && this.throwArgumentError("invalid log level name", "logLevel", t), td > tc[u] || console.log.apply(console, e)
                }
                debug(...t) {
                    this._log(L.levels.DEBUG, t)
                }
                info(...t) {
                    this._log(L.levels.INFO, t)
                }
                warn(...t) {
                    this._log(L.levels.WARNING, t)
                }
                makeError(t, e, u) {
                    if (tl) return this.makeError("censored error", e, {});
                    e || (e = L.errors.UNKNOWN_ERROR), u || (u = {});
                    let f = [];
                    Object.keys(u).forEach(t => {
                        let e = u[t];
                        try {
                            if (e instanceof Uint8Array) {
                                let u = "";
                                for (let t = 0; t < e.length; t++) u += tg[e[t] >> 4] + tg[15 & e[t]];
                                f.push(t + "=Uint8Array(0x" + u + ")")
                            } else f.push(t + "=" + JSON.stringify(e))
                        } catch {
                            f.push(t + "=" + JSON.stringify(u[t].toString()))
                        }
                    }), f.push(`code=${e}`), f.push(`version=${this.version}`);
                    let h = t,
                        l = "";
                    switch (e) {
                        case S.NUMERIC_FAULT:
                            {
                                l = "NUMERIC_FAULT";
                                let e = t;
                                switch (e) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        l += "-" + e;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        l += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        l += "-unbound-result"
                                }
                                break
                            }
                        case S.CALL_EXCEPTION:
                        case S.INSUFFICIENT_FUNDS:
                        case S.MISSING_NEW:
                        case S.NONCE_EXPIRED:
                        case S.REPLACEMENT_UNDERPRICED:
                        case S.TRANSACTION_REPLACED:
                        case S.UNPREDICTABLE_GAS_LIMIT:
                            l = e
                    }
                    l && (t += " [ See: https://links.ethers.org/v5-errors-" + l + " ]"), f.length && (t += " (" + f.join(", ") + ")");
                    let c = Error(t);
                    return c.reason = h, c.code = e, Object.keys(u).forEach(function(t) {
                        c[t] = u[t]
                    }), c
                }
                throwError(t, e, u) {
                    throw this.makeError(t, e, u)
                }
                throwArgumentError(t, e, u) {
                    return this.throwError(t, L.errors.INVALID_ARGUMENT, {
                        argument: e,
                        value: u
                    })
                }
                assert(t, e, u, f) {
                    t || this.throwError(e, u, f)
                }
                assertArgument(t, e, u, f) {
                    t || this.throwArgumentError(e, u, f)
                }
                checkNormalize(t) {
                    tm && this.throwError("platform missing String.prototype.normalize", L.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: tm
                    })
                }
                checkSafeUint53(t, e) {
                    "number" == typeof t && (null == e && (e = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(e, L.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: t
                    }), t % 1 && this.throwError(e, L.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: t
                    }))
                }
                checkArgumentCount(t, e, u) {
                    u = u ? ": " + u : "", t < e && this.throwError("missing argument" + u, L.errors.MISSING_ARGUMENT, {
                        count: t,
                        expectedCount: e
                    }), t > e && this.throwError("too many arguments" + u, L.errors.UNEXPECTED_ARGUMENT, {
                        count: t,
                        expectedCount: e
                    })
                }
                checkNew(t, e) {
                    (t === Object || null == t) && this.throwError("missing new", L.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                checkAbstract(t, e) {
                    t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", L.errors.UNSUPPORTED_OPERATION, {
                        name: t.name,
                        operation: "new"
                    }) : (t === Object || null == t) && this.throwError("missing new", L.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                static globalLogger() {
                    return tp || (tp = new L("logger/5.7.0")), tp
                }
                static setCensorship(t, e) {
                    if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", L.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), ta) {
                        if (!t) return;
                        this.globalLogger().throwError("error censorship permanent", L.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    tl = !!t, ta = !!e
                }
                static setLogLevel(t) {
                    let e = tc[t.toLowerCase()];
                    if (null == e) {
                        L.globalLogger().warn("invalid log level - " + t);
                        return
                    }
                    td = e
                }
                static from(t) {
                    return new L(t)
                }
            };
            L.errors = S, L.levels = E;
            let tv = new L("bytes/5.7.0");

            function qn(t) {
                return !!t.toHexString
            }

            function rr(t) {
                return t.slice || (t.slice = function() {
                    let e = Array.prototype.slice.call(arguments);
                    return rr(new Uint8Array(Array.prototype.slice.apply(t, e)))
                }), t
            }

            function Kn(t) {
                return "number" == typeof t && t == t && t % 1 == 0
            }

            function ir(t) {
                if (null == t) return !1;
                if (t.constructor === Uint8Array) return !0;
                if ("string" == typeof t || !Kn(t.length) || t.length < 0) return !1;
                for (let e = 0; e < t.length; e++) {
                    let u = t[e];
                    if (!Kn(u) || u < 0 || u >= 256) return !1
                }
                return !0
            }

            function Ot(t, e) {
                if (e || (e = {}), "number" == typeof t) {
                    tv.checkSafeUint53(t, "invalid arrayify value");
                    let e = [];
                    for (; t;) e.unshift(255 & t), t = parseInt(String(t / 256));
                    return 0 === e.length && e.push(0), rr(new Uint8Array(e))
                }
                if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), qn(t) && (t = t.toHexString()), Qt(t)) {
                    let u = t.substring(2);
                    u.length % 2 && ("left" === e.hexPad ? u = "0" + u : "right" === e.hexPad ? u += "0" : tv.throwArgumentError("hex data is odd-length", "value", t));
                    let f = [];
                    for (let t = 0; t < u.length; t += 2) f.push(parseInt(u.substring(t, t + 2), 16));
                    return rr(new Uint8Array(f))
                }
                return ir(t) ? rr(new Uint8Array(t)) : tv.throwArgumentError("invalid arrayify value", "value", t)
            }

            function Qt(t, e) {
                return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/) || e && t.length !== 2 + 2 * e)
            }
            let tA = "0123456789abcdef";

            function Kt(t, e) {
                if (e || (e = {}), "number" == typeof t) {
                    tv.checkSafeUint53(t, "invalid hexlify value");
                    let e = "";
                    for (; t;) e = tA[15 & t] + e, t = Math.floor(t / 16);
                    return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00"
                }
                if ("bigint" == typeof t) return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
                if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), qn(t)) return t.toHexString();
                if (Qt(t)) return t.length % 2 && ("left" === e.hexPad ? t = "0x0" + t.substring(2) : "right" === e.hexPad ? t += "0" : tv.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
                if (ir(t)) {
                    let e = "0x";
                    for (let u = 0; u < t.length; u++) {
                        let f = t[u];
                        e += tA[(240 & f) >> 4] + tA[15 & f]
                    }
                    return e
                }
                return tv.throwArgumentError("invalid hexlify value", "value", t)
            }

            function Hn(t, e, u) {
                return "string" != typeof t ? t = Kt(t) : (!Qt(t) || t.length % 2) && tv.throwArgumentError("invalid hexData", "value", t), e = 2 + 2 * e, null != u ? "0x" + t.substring(e, 2 + 2 * u) : "0x" + t.substring(e)
            }

            function oe(t, e) {
                for ("string" != typeof t ? t = Kt(t) : Qt(t) || tv.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && tv.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2;) t = "0x0" + t.substring(2);
                return t
            }

            function zn(t) {
                let e = {
                    r: "0x",
                    s: "0x",
                    _vs: "0x",
                    recoveryParam: 0,
                    v: 0,
                    yParityAndS: "0x",
                    compact: "0x"
                };
                if (Qt(t) && !(t.length % 2) || ir(t)) {
                    let u = Ot(t);
                    64 === u.length ? (e.v = 27 + (u[32] >> 7), u[32] &= 127, e.r = Kt(u.slice(0, 32)), e.s = Kt(u.slice(32, 64))) : 65 === u.length ? (e.r = Kt(u.slice(0, 32)), e.s = Kt(u.slice(32, 64)), e.v = u[64]) : tv.throwArgumentError("invalid signature string", "signature", t), e.v < 27 && (0 === e.v || 1 === e.v ? e.v += 27 : tv.throwArgumentError("signature invalid v byte", "signature", t)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (u[32] |= 128), e._vs = Kt(u.slice(32, 64))
                } else {
                    if (e.r = t.r, e.s = t.s, e.v = t.v, e.recoveryParam = t.recoveryParam, e._vs = t._vs, null != e._vs) {
                        let u = function(t, e) {
                            (t = Ot(t)).length > e && tv.throwArgumentError("value out of range", "value", arguments[0]);
                            let u = new Uint8Array(e);
                            return u.set(t, e - t.length), rr(u)
                        }(Ot(e._vs), 32);
                        e._vs = Kt(u);
                        let f = u[0] >= 128 ? 1 : 0;
                        null == e.recoveryParam ? e.recoveryParam = f : e.recoveryParam !== f && tv.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), u[0] &= 127;
                        let h = Kt(u);
                        null == e.s ? e.s = h : e.s !== h && tv.throwArgumentError("signature v mismatch _vs", "signature", t)
                    }
                    if (null == e.recoveryParam) null == e.v ? tv.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === e.v || 1 === e.v ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
                    else if (null == e.v) e.v = 27 + e.recoveryParam;
                    else {
                        let u = 0 === e.v || 1 === e.v ? e.v : 1 - e.v % 2;
                        e.recoveryParam !== u && tv.throwArgumentError("signature recoveryParam mismatch v", "signature", t)
                    }
                    null != e.r && Qt(e.r) ? e.r = oe(e.r, 32) : tv.throwArgumentError("signature missing or invalid r", "signature", t), null != e.s && Qt(e.s) ? e.s = oe(e.s, 32) : tv.throwArgumentError("signature missing or invalid s", "signature", t);
                    let u = Ot(e.s);
                    u[0] >= 128 && tv.throwArgumentError("signature s out of range", "signature", t), e.recoveryParam && (u[0] |= 128);
                    let f = Kt(u);
                    e._vs && (Qt(e._vs) || tv.throwArgumentError("signature invalid _vs", "signature", t), e._vs = oe(e._vs, 32)), null == e._vs ? e._vs = f : e._vs !== f && tv.throwArgumentError("signature _vs mismatch v and s", "signature", t)
                }
                return e.yParityAndS = e._vs, e.compact = e.r + e.yParityAndS.substring(2), e
            }

            function yi(t) {
                return "0x" + tf.keccak_256(Ot(t))
            }
            var ty = {
                    exports: {}
                },
                tb = function(t) {
                    var e = t.default;
                    if ("function" == typeof e) {
                        var r = function() {
                            return e.apply(this, arguments)
                        };
                        r.prototype = e.prototype
                    } else r = {};
                    return Object.defineProperty(r, "__esModule", {
                        value: !0
                    }), Object.keys(t).forEach(function(e) {
                        var u = Object.getOwnPropertyDescriptor(t, e);
                        Object.defineProperty(r, e, u.get ? u : {
                            enumerable: !0,
                            get: function() {
                                return t[e]
                            }
                        })
                    }), r
                }(Object.freeze({
                    __proto__: null,
                    default: {}
                }));
            ! function(t, e) {
                function i(t, e) {
                    if (!t) throw Error(e || "Assertion failed")
                }

                function n(t, e) {
                    t.super_ = e;
                    var a = function() {};
                    a.prototype = e.prototype, t.prototype = new a, t.prototype.constructor = t
                }

                function o(t, e, u) {
                    if (o.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && (("le" === e || "be" === e) && (u = e, e = 10), this._init(t || 0, e || 10, u || "be"))
                }
                "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    u = "u" > typeof window && "u" > typeof window.Buffer ? window.Buffer : tb.Buffer
                } catch {}

                function p(t, e) {
                    var u = t.charCodeAt(e);
                    return u >= 48 && u <= 57 ? u - 48 : u >= 65 && u <= 70 ? u - 55 : u >= 97 && u <= 102 ? u - 87 : void i(!1, "Invalid character in " + t)
                }

                function b(t, e, u) {
                    var f = p(t, u);
                    return u - 1 >= e && (f |= p(t, u - 1) << 4), f
                }

                function m(t, e, u, f) {
                    for (var h = 0, l = 0, c = Math.min(t.length, u), d = e; d < c; d++) {
                        var g = t.charCodeAt(d) - 48;
                        h *= f, l = g >= 49 ? g - 49 + 10 : g >= 17 ? g - 17 + 10 : g, i(g >= 0 && l < f, "Invalid character"), h += l
                    }
                    return h
                }

                function w(t, e) {
                    t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                }
                if (o.isBN = function(t) {
                        return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
                    }, o.max = function(t, e) {
                        return t.cmp(e) > 0 ? t : e
                    }, o.min = function(t, e) {
                        return 0 > t.cmp(e) ? t : e
                    }, o.prototype._init = function(t, e, u) {
                        if ("number" == typeof t) return this._initNumber(t, e, u);
                        if ("object" == typeof t) return this._initArray(t, e, u);
                        "hex" === e && (e = 16), i(e === (0 | e) && e >= 2 && e <= 36);
                        var f = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (f++, this.negative = 1), f < t.length && (16 === e ? this._parseHex(t, f, u) : (this._parseBase(t, e, f), "le" === u && this._initArray(this.toArray(), e, u)))
                    }, o.prototype._initNumber = function(t, e, u) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (i(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === u && this._initArray(this.toArray(), e, u)
                    }, o.prototype._initArray = function(t, e, u) {
                        if (i("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = Array(this.length);
                        for (var f = 0; f < this.length; f++) this.words[f] = 0;
                        var h, l, c = 0;
                        if ("be" === u)
                            for (f = t.length - 1, h = 0; f >= 0; f -= 3) l = t[f] | t[f - 1] << 8 | t[f - 2] << 16, this.words[h] |= l << c & 67108863, this.words[h + 1] = l >>> 26 - c & 67108863, (c += 24) >= 26 && (c -= 26, h++);
                        else if ("le" === u)
                            for (f = 0, h = 0; f < t.length; f += 3) l = t[f] | t[f + 1] << 8 | t[f + 2] << 16, this.words[h] |= l << c & 67108863, this.words[h + 1] = l >>> 26 - c & 67108863, (c += 24) >= 26 && (c -= 26, h++);
                        return this._strip()
                    }, o.prototype._parseHex = function(t, e, u) {
                        this.length = Math.ceil((t.length - e) / 6), this.words = Array(this.length);
                        for (var f = 0; f < this.length; f++) this.words[f] = 0;
                        var h, l = 0,
                            c = 0;
                        if ("be" === u)
                            for (f = t.length - 1; f >= e; f -= 2) h = b(t, e, f) << l, this.words[c] |= 67108863 & h, l >= 18 ? (l -= 18, c += 1, this.words[c] |= h >>> 26) : l += 8;
                        else
                            for (f = (t.length - e) % 2 == 0 ? e + 1 : e; f < t.length; f += 2) h = b(t, e, f) << l, this.words[c] |= 67108863 & h, l >= 18 ? (l -= 18, c += 1, this.words[c] |= h >>> 26) : l += 8;
                        this._strip()
                    }, o.prototype._parseBase = function(t, e, u) {
                        this.words = [0], this.length = 1;
                        for (var f = 0, h = 1; h <= 67108863; h *= e) f++;
                        f--, h = h / e | 0;
                        for (var l = t.length - u, c = l % f, d = Math.min(l, l - c) + u, g = 0, A = u; A < d; A += f) g = m(t, A, A + f, e), this.imuln(h), this.words[0] + g < 67108864 ? this.words[0] += g : this._iaddn(g);
                        if (0 !== c) {
                            var M = 1;
                            for (g = m(t, A, t.length, e), A = 0; A < c; A++) M *= e;
                            this.imuln(M), this.words[0] + g < 67108864 ? this.words[0] += g : this._iaddn(g)
                        }
                        this._strip()
                    }, o.prototype.copy = function(t) {
                        t.words = Array(this.length);
                        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, o.prototype._move = function(t) {
                        w(t, this)
                    }, o.prototype.clone = function() {
                        var t = new o(null);
                        return this.copy(t), t
                    }, o.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, o.prototype._strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, o.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, "u" > typeof Symbol && "function" == typeof Symbol.for) try {
                    o.prototype[Symbol.for("nodejs.util.inspect.custom")] = y
                } catch {
                    o.prototype.inspect = y
                } else o.prototype.inspect = y;

                function y() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                var u, f = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    l = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function U(t, e, u) {
                    u.negative = e.negative ^ t.negative;
                    var f = t.length + e.length | 0;
                    u.length = f, f = f - 1 | 0;
                    var h = 0 | t.words[0],
                        l = 0 | e.words[0],
                        c = h * l,
                        d = 67108863 & c,
                        g = c / 67108864 | 0;
                    u.words[0] = d;
                    for (var A = 1; A < f; A++) {
                        for (var M = g >>> 26, E = 67108863 & g, S = Math.min(A, e.length - 1), I = Math.max(0, A - t.length + 1); I <= S; I++) {
                            var N = A - I | 0;
                            M += (c = (h = 0 | t.words[N]) * (l = 0 | e.words[I]) + E) / 67108864 | 0, E = 67108863 & c
                        }
                        u.words[A] = 0 | E, g = 0 | M
                    }
                    return 0 !== g ? u.words[A] = 0 | g : u.length--, u._strip()
                }
                o.prototype.toString = function(t, e) {
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        u = "";
                        for (var u, c = 0, d = 0, g = 0; g < this.length; g++) {
                            var A = this.words[g],
                                M = ((A << c | d) & 16777215).toString(16);
                            d = A >>> 24 - c & 16777215, (c += 2) >= 26 && (c -= 26, g--), u = 0 !== d || g !== this.length - 1 ? f[6 - M.length] + M + u : M + u
                        }
                        for (0 !== d && (u = d.toString(16) + u); u.length % e != 0;) u = "0" + u;
                        return 0 !== this.negative && (u = "-" + u), u
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var E = h[t],
                            S = l[t];
                        u = "";
                        var I = this.clone();
                        for (I.negative = 0; !I.isZero();) {
                            var N = I.modrn(S).toString(t);
                            u = (I = I.idivn(S)).isZero() ? N + u : f[E - N.length] + N + u
                        }
                        for (this.isZero() && (u = "0" + u); u.length % e != 0;) u = "0" + u;
                        return 0 !== this.negative && (u = "-" + u), u
                    }
                    i(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, o.prototype.toJSON = function() {
                    return this.toString(16, 2)
                }, u && (o.prototype.toBuffer = function(t, e) {
                    return this.toArrayLike(u, t, e)
                }), o.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                }, o.prototype.toArrayLike = function(t, e, u) {
                    this._strip();
                    var f = this.byteLength(),
                        h = u || Math.max(1, f);
                    i(f <= h, "byte array longer than desired length"), i(h > 0, "Requested array length <= 0");
                    var l = t.allocUnsafe ? t.allocUnsafe(h) : new t(h);
                    return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](l, f), l
                }, o.prototype._toArrayLikeLE = function(t, e) {
                    for (var u = 0, f = 0, h = 0, l = 0; h < this.length; h++) {
                        var c = this.words[h] << l | f;
                        t[u++] = 255 & c, u < t.length && (t[u++] = c >> 8 & 255), u < t.length && (t[u++] = c >> 16 & 255), 6 === l ? (u < t.length && (t[u++] = c >> 24 & 255), f = 0, l = 0) : (f = c >>> 24, l += 2)
                    }
                    if (u < t.length)
                        for (t[u++] = f; u < t.length;) t[u++] = 0
                }, o.prototype._toArrayLikeBE = function(t, e) {
                    for (var u = t.length - 1, f = 0, h = 0, l = 0; h < this.length; h++) {
                        var c = this.words[h] << l | f;
                        t[u--] = 255 & c, u >= 0 && (t[u--] = c >> 8 & 255), u >= 0 && (t[u--] = c >> 16 & 255), 6 === l ? (u >= 0 && (t[u--] = c >> 24 & 255), f = 0, l = 0) : (f = c >>> 24, l += 2)
                    }
                    if (u >= 0)
                        for (t[u--] = f; u >= 0;) t[u--] = 0
                }, Math.clz32 ? o.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : o.prototype._countBits = function(t) {
                    var e = t,
                        u = 0;
                    return e >= 4096 && (u += 13, e >>>= 13), e >= 64 && (u += 7, e >>>= 7), e >= 8 && (u += 4, e >>>= 4), e >= 2 && (u += 2, e >>>= 2), u + e
                }, o.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        u = 0;
                    return 8191 & e || (u += 13, e >>>= 13), 127 & e || (u += 7, e >>>= 7), 15 & e || (u += 4, e >>>= 4), 3 & e || (u += 2, e >>>= 2), 1 & e || u++, u
                }, o.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return (this.length - 1) * 26 + e
                }, o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var u = this._zeroBits(this.words[e]);
                        if (t += u, 26 !== u) break
                    }
                    return t
                }, o.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, o.prototype.toTwos = function(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, o.prototype.fromTwos = function(t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, o.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, o.prototype.neg = function() {
                    return this.clone().ineg()
                }, o.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, o.prototype.iuor = function(t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this._strip()
                }, o.prototype.ior = function(t) {
                    return i((this.negative | t.negative) == 0), this.iuor(t)
                }, o.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, o.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, o.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var u = 0; u < e.length; u++) this.words[u] = this.words[u] & t.words[u];
                    return this.length = e.length, this._strip()
                }, o.prototype.iand = function(t) {
                    return i((this.negative | t.negative) == 0), this.iuand(t)
                }, o.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, o.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, o.prototype.iuxor = function(t) {
                    var e, u;
                    this.length > t.length ? (e = this, u = t) : (e = t, u = this);
                    for (var f = 0; f < u.length; f++) this.words[f] = e.words[f] ^ u.words[f];
                    if (this !== e)
                        for (; f < e.length; f++) this.words[f] = e.words[f];
                    return this.length = e.length, this._strip()
                }, o.prototype.ixor = function(t) {
                    return i((this.negative | t.negative) == 0), this.iuxor(t)
                }, o.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, o.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, o.prototype.inotn = function(t) {
                    i("number" == typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        u = t % 26;
                    this._expand(e), u > 0 && e--;
                    for (var f = 0; f < e; f++) this.words[f] = 67108863 & ~this.words[f];
                    return u > 0 && (this.words[f] = ~this.words[f] & 67108863 >> 26 - u), this._strip()
                }, o.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, o.prototype.setn = function(t, e) {
                    i("number" == typeof t && t >= 0);
                    var u = t / 26 | 0,
                        f = t % 26;
                    return this._expand(u + 1), e ? this.words[u] = this.words[u] | 1 << f : this.words[u] = this.words[u] & ~(1 << f), this._strip()
                }, o.prototype.iadd = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (u = this, f = t) : (u = t, f = this);
                    for (var e, u, f, h = 0, l = 0; l < f.length; l++) e = (0 | u.words[l]) + (0 | f.words[l]) + h, this.words[l] = 67108863 & e, h = e >>> 26;
                    for (; 0 !== h && l < u.length; l++) e = (0 | u.words[l]) + h, this.words[l] = 67108863 & e, h = e >>> 26;
                    if (this.length = u.length, 0 !== h) this.words[this.length] = h, this.length++;
                    else if (u !== this)
                        for (; l < u.length; l++) this.words[l] = u.words[l];
                    return this
                }, o.prototype.add = function(t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, o.prototype.isub = function(t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e, u, f = this.iadd(t);
                        return t.negative = 1, f._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var h = this.cmp(t);
                    if (0 === h) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    h > 0 ? (e = this, u = t) : (e = t, u = this);
                    for (var l = 0, c = 0; c < u.length; c++) l = (f = (0 | e.words[c]) - (0 | u.words[c]) + l) >> 26, this.words[c] = 67108863 & f;
                    for (; 0 !== l && c < e.length; c++) l = (f = (0 | e.words[c]) + l) >> 26, this.words[c] = 67108863 & f;
                    if (0 === l && c < e.length && e !== this)
                        for (; c < e.length; c++) this.words[c] = e.words[c];
                    return this.length = Math.max(this.length, c), e !== this && (this.negative = 1), this._strip()
                }, o.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var J = function(t, e, u) {
                    var f, h, l, c = t.words,
                        d = e.words,
                        g = u.words,
                        A = 0,
                        M = 0 | c[0],
                        E = 8191 & M,
                        S = M >>> 13,
                        I = 0 | c[1],
                        N = 8191 & I,
                        B = I >>> 13,
                        C = 0 | c[2],
                        _ = 8191 & C,
                        O = C >>> 13,
                        x = 0 | c[3],
                        R = 8191 & x,
                        P = x >>> 13,
                        T = 0 | c[4],
                        D = 8191 & T,
                        F = T >>> 13,
                        q = 0 | c[5],
                        K = 8191 & q,
                        Q = q >>> 13,
                        X = 0 | c[6],
                        Z = 8191 & X,
                        $ = X >>> 13,
                        tt = 0 | c[7],
                        te = 8191 & tt,
                        ti = tt >>> 13,
                        to = 0 | c[8],
                        ts = 8191 & to,
                        tu = to >>> 13,
                        tf = 0 | c[9],
                        ta = 8191 & tf,
                        tl = tf >>> 13,
                        tc = 0 | d[0],
                        td = 8191 & tc,
                        tp = tc >>> 13,
                        tm = 0 | d[1],
                        tg = 8191 & tm,
                        tv = tm >>> 13,
                        tA = 0 | d[2],
                        ty = 8191 & tA,
                        tb = tA >>> 13,
                        tw = 0 | d[3],
                        tM = 8191 & tw,
                        tE = tw >>> 13,
                        tS = 0 | d[4],
                        tI = 8191 & tS,
                        tN = tS >>> 13,
                        tB = 0 | d[5],
                        tC = 8191 & tB,
                        t_ = tB >>> 13,
                        tO = 0 | d[6],
                        tx = 8191 & tO,
                        tR = tO >>> 13,
                        tk = 0 | d[7],
                        tP = 8191 & tk,
                        tU = tk >>> 13,
                        tT = 0 | d[8],
                        tD = 8191 & tT,
                        tF = tT >>> 13,
                        tL = 0 | d[9],
                        tj = 8191 & tL,
                        tz = tL >>> 13;
                    u.negative = t.negative ^ e.negative, u.length = 19, f = Math.imul(E, td), h = (h = Math.imul(E, tp)) + Math.imul(S, td) | 0, l = Math.imul(S, tp);
                    var tq = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (tq >>> 26) | 0, tq &= 67108863, f = Math.imul(N, td), h = (h = Math.imul(N, tp)) + Math.imul(B, td) | 0, l = Math.imul(B, tp), f = f + Math.imul(E, tg) | 0, h = (h = h + Math.imul(E, tv) | 0) + Math.imul(S, tg) | 0, l = l + Math.imul(S, tv) | 0;
                    var tK = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (tK >>> 26) | 0, tK &= 67108863, f = Math.imul(_, td), h = (h = Math.imul(_, tp)) + Math.imul(O, td) | 0, l = Math.imul(O, tp), f = f + Math.imul(N, tg) | 0, h = (h = h + Math.imul(N, tv) | 0) + Math.imul(B, tg) | 0, l = l + Math.imul(B, tv) | 0, f = f + Math.imul(E, ty) | 0, h = (h = h + Math.imul(E, tb) | 0) + Math.imul(S, ty) | 0, l = l + Math.imul(S, tb) | 0;
                    var tH = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (tH >>> 26) | 0, tH &= 67108863, f = Math.imul(R, td), h = (h = Math.imul(R, tp)) + Math.imul(P, td) | 0, l = Math.imul(P, tp), f = f + Math.imul(_, tg) | 0, h = (h = h + Math.imul(_, tv) | 0) + Math.imul(O, tg) | 0, l = l + Math.imul(O, tv) | 0, f = f + Math.imul(N, ty) | 0, h = (h = h + Math.imul(N, tb) | 0) + Math.imul(B, ty) | 0, l = l + Math.imul(B, tb) | 0, f = f + Math.imul(E, tM) | 0, h = (h = h + Math.imul(E, tE) | 0) + Math.imul(S, tM) | 0, l = l + Math.imul(S, tE) | 0;
                    var tQ = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (tQ >>> 26) | 0, tQ &= 67108863, f = Math.imul(D, td), h = (h = Math.imul(D, tp)) + Math.imul(F, td) | 0, l = Math.imul(F, tp), f = f + Math.imul(R, tg) | 0, h = (h = h + Math.imul(R, tv) | 0) + Math.imul(P, tg) | 0, l = l + Math.imul(P, tv) | 0, f = f + Math.imul(_, ty) | 0, h = (h = h + Math.imul(_, tb) | 0) + Math.imul(O, ty) | 0, l = l + Math.imul(O, tb) | 0, f = f + Math.imul(N, tM) | 0, h = (h = h + Math.imul(N, tE) | 0) + Math.imul(B, tM) | 0, l = l + Math.imul(B, tE) | 0, f = f + Math.imul(E, tI) | 0, h = (h = h + Math.imul(E, tN) | 0) + Math.imul(S, tI) | 0, l = l + Math.imul(S, tN) | 0;
                    var tY = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (tY >>> 26) | 0, tY &= 67108863, f = Math.imul(K, td), h = (h = Math.imul(K, tp)) + Math.imul(Q, td) | 0, l = Math.imul(Q, tp), f = f + Math.imul(D, tg) | 0, h = (h = h + Math.imul(D, tv) | 0) + Math.imul(F, tg) | 0, l = l + Math.imul(F, tv) | 0, f = f + Math.imul(R, ty) | 0, h = (h = h + Math.imul(R, tb) | 0) + Math.imul(P, ty) | 0, l = l + Math.imul(P, tb) | 0, f = f + Math.imul(_, tM) | 0, h = (h = h + Math.imul(_, tE) | 0) + Math.imul(O, tM) | 0, l = l + Math.imul(O, tE) | 0, f = f + Math.imul(N, tI) | 0, h = (h = h + Math.imul(N, tN) | 0) + Math.imul(B, tI) | 0, l = l + Math.imul(B, tN) | 0, f = f + Math.imul(E, tC) | 0, h = (h = h + Math.imul(E, t_) | 0) + Math.imul(S, tC) | 0, l = l + Math.imul(S, t_) | 0;
                    var tG = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (tG >>> 26) | 0, tG &= 67108863, f = Math.imul(Z, td), h = (h = Math.imul(Z, tp)) + Math.imul($, td) | 0, l = Math.imul($, tp), f = f + Math.imul(K, tg) | 0, h = (h = h + Math.imul(K, tv) | 0) + Math.imul(Q, tg) | 0, l = l + Math.imul(Q, tv) | 0, f = f + Math.imul(D, ty) | 0, h = (h = h + Math.imul(D, tb) | 0) + Math.imul(F, ty) | 0, l = l + Math.imul(F, tb) | 0, f = f + Math.imul(R, tM) | 0, h = (h = h + Math.imul(R, tE) | 0) + Math.imul(P, tM) | 0, l = l + Math.imul(P, tE) | 0, f = f + Math.imul(_, tI) | 0, h = (h = h + Math.imul(_, tN) | 0) + Math.imul(O, tI) | 0, l = l + Math.imul(O, tN) | 0, f = f + Math.imul(N, tC) | 0, h = (h = h + Math.imul(N, t_) | 0) + Math.imul(B, tC) | 0, l = l + Math.imul(B, t_) | 0, f = f + Math.imul(E, tx) | 0, h = (h = h + Math.imul(E, tR) | 0) + Math.imul(S, tx) | 0, l = l + Math.imul(S, tR) | 0;
                    var tJ = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (tJ >>> 26) | 0, tJ &= 67108863, f = Math.imul(te, td), h = (h = Math.imul(te, tp)) + Math.imul(ti, td) | 0, l = Math.imul(ti, tp), f = f + Math.imul(Z, tg) | 0, h = (h = h + Math.imul(Z, tv) | 0) + Math.imul($, tg) | 0, l = l + Math.imul($, tv) | 0, f = f + Math.imul(K, ty) | 0, h = (h = h + Math.imul(K, tb) | 0) + Math.imul(Q, ty) | 0, l = l + Math.imul(Q, tb) | 0, f = f + Math.imul(D, tM) | 0, h = (h = h + Math.imul(D, tE) | 0) + Math.imul(F, tM) | 0, l = l + Math.imul(F, tE) | 0, f = f + Math.imul(R, tI) | 0, h = (h = h + Math.imul(R, tN) | 0) + Math.imul(P, tI) | 0, l = l + Math.imul(P, tN) | 0, f = f + Math.imul(_, tC) | 0, h = (h = h + Math.imul(_, t_) | 0) + Math.imul(O, tC) | 0, l = l + Math.imul(O, t_) | 0, f = f + Math.imul(N, tx) | 0, h = (h = h + Math.imul(N, tR) | 0) + Math.imul(B, tx) | 0, l = l + Math.imul(B, tR) | 0, f = f + Math.imul(E, tP) | 0, h = (h = h + Math.imul(E, tU) | 0) + Math.imul(S, tP) | 0, l = l + Math.imul(S, tU) | 0;
                    var tV = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (tV >>> 26) | 0, tV &= 67108863, f = Math.imul(ts, td), h = (h = Math.imul(ts, tp)) + Math.imul(tu, td) | 0, l = Math.imul(tu, tp), f = f + Math.imul(te, tg) | 0, h = (h = h + Math.imul(te, tv) | 0) + Math.imul(ti, tg) | 0, l = l + Math.imul(ti, tv) | 0, f = f + Math.imul(Z, ty) | 0, h = (h = h + Math.imul(Z, tb) | 0) + Math.imul($, ty) | 0, l = l + Math.imul($, tb) | 0, f = f + Math.imul(K, tM) | 0, h = (h = h + Math.imul(K, tE) | 0) + Math.imul(Q, tM) | 0, l = l + Math.imul(Q, tE) | 0, f = f + Math.imul(D, tI) | 0, h = (h = h + Math.imul(D, tN) | 0) + Math.imul(F, tI) | 0, l = l + Math.imul(F, tN) | 0, f = f + Math.imul(R, tC) | 0, h = (h = h + Math.imul(R, t_) | 0) + Math.imul(P, tC) | 0, l = l + Math.imul(P, t_) | 0, f = f + Math.imul(_, tx) | 0, h = (h = h + Math.imul(_, tR) | 0) + Math.imul(O, tx) | 0, l = l + Math.imul(O, tR) | 0, f = f + Math.imul(N, tP) | 0, h = (h = h + Math.imul(N, tU) | 0) + Math.imul(B, tP) | 0, l = l + Math.imul(B, tU) | 0, f = f + Math.imul(E, tD) | 0, h = (h = h + Math.imul(E, tF) | 0) + Math.imul(S, tD) | 0, l = l + Math.imul(S, tF) | 0;
                    var tW = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (tW >>> 26) | 0, tW &= 67108863, f = Math.imul(ta, td), h = (h = Math.imul(ta, tp)) + Math.imul(tl, td) | 0, l = Math.imul(tl, tp), f = f + Math.imul(ts, tg) | 0, h = (h = h + Math.imul(ts, tv) | 0) + Math.imul(tu, tg) | 0, l = l + Math.imul(tu, tv) | 0, f = f + Math.imul(te, ty) | 0, h = (h = h + Math.imul(te, tb) | 0) + Math.imul(ti, ty) | 0, l = l + Math.imul(ti, tb) | 0, f = f + Math.imul(Z, tM) | 0, h = (h = h + Math.imul(Z, tE) | 0) + Math.imul($, tM) | 0, l = l + Math.imul($, tE) | 0, f = f + Math.imul(K, tI) | 0, h = (h = h + Math.imul(K, tN) | 0) + Math.imul(Q, tI) | 0, l = l + Math.imul(Q, tN) | 0, f = f + Math.imul(D, tC) | 0, h = (h = h + Math.imul(D, t_) | 0) + Math.imul(F, tC) | 0, l = l + Math.imul(F, t_) | 0, f = f + Math.imul(R, tx) | 0, h = (h = h + Math.imul(R, tR) | 0) + Math.imul(P, tx) | 0, l = l + Math.imul(P, tR) | 0, f = f + Math.imul(_, tP) | 0, h = (h = h + Math.imul(_, tU) | 0) + Math.imul(O, tP) | 0, l = l + Math.imul(O, tU) | 0, f = f + Math.imul(N, tD) | 0, h = (h = h + Math.imul(N, tF) | 0) + Math.imul(B, tD) | 0, l = l + Math.imul(B, tF) | 0, f = f + Math.imul(E, tj) | 0, h = (h = h + Math.imul(E, tz) | 0) + Math.imul(S, tj) | 0, l = l + Math.imul(S, tz) | 0;
                    var tX = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (tX >>> 26) | 0, tX &= 67108863, f = Math.imul(ta, tg), h = (h = Math.imul(ta, tv)) + Math.imul(tl, tg) | 0, l = Math.imul(tl, tv), f = f + Math.imul(ts, ty) | 0, h = (h = h + Math.imul(ts, tb) | 0) + Math.imul(tu, ty) | 0, l = l + Math.imul(tu, tb) | 0, f = f + Math.imul(te, tM) | 0, h = (h = h + Math.imul(te, tE) | 0) + Math.imul(ti, tM) | 0, l = l + Math.imul(ti, tE) | 0, f = f + Math.imul(Z, tI) | 0, h = (h = h + Math.imul(Z, tN) | 0) + Math.imul($, tI) | 0, l = l + Math.imul($, tN) | 0, f = f + Math.imul(K, tC) | 0, h = (h = h + Math.imul(K, t_) | 0) + Math.imul(Q, tC) | 0, l = l + Math.imul(Q, t_) | 0, f = f + Math.imul(D, tx) | 0, h = (h = h + Math.imul(D, tR) | 0) + Math.imul(F, tx) | 0, l = l + Math.imul(F, tR) | 0, f = f + Math.imul(R, tP) | 0, h = (h = h + Math.imul(R, tU) | 0) + Math.imul(P, tP) | 0, l = l + Math.imul(P, tU) | 0, f = f + Math.imul(_, tD) | 0, h = (h = h + Math.imul(_, tF) | 0) + Math.imul(O, tD) | 0, l = l + Math.imul(O, tF) | 0, f = f + Math.imul(N, tj) | 0, h = (h = h + Math.imul(N, tz) | 0) + Math.imul(B, tj) | 0, l = l + Math.imul(B, tz) | 0;
                    var tZ = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (tZ >>> 26) | 0, tZ &= 67108863, f = Math.imul(ta, ty), h = (h = Math.imul(ta, tb)) + Math.imul(tl, ty) | 0, l = Math.imul(tl, tb), f = f + Math.imul(ts, tM) | 0, h = (h = h + Math.imul(ts, tE) | 0) + Math.imul(tu, tM) | 0, l = l + Math.imul(tu, tE) | 0, f = f + Math.imul(te, tI) | 0, h = (h = h + Math.imul(te, tN) | 0) + Math.imul(ti, tI) | 0, l = l + Math.imul(ti, tN) | 0, f = f + Math.imul(Z, tC) | 0, h = (h = h + Math.imul(Z, t_) | 0) + Math.imul($, tC) | 0, l = l + Math.imul($, t_) | 0, f = f + Math.imul(K, tx) | 0, h = (h = h + Math.imul(K, tR) | 0) + Math.imul(Q, tx) | 0, l = l + Math.imul(Q, tR) | 0, f = f + Math.imul(D, tP) | 0, h = (h = h + Math.imul(D, tU) | 0) + Math.imul(F, tP) | 0, l = l + Math.imul(F, tU) | 0, f = f + Math.imul(R, tD) | 0, h = (h = h + Math.imul(R, tF) | 0) + Math.imul(P, tD) | 0, l = l + Math.imul(P, tF) | 0, f = f + Math.imul(_, tj) | 0, h = (h = h + Math.imul(_, tz) | 0) + Math.imul(O, tj) | 0, l = l + Math.imul(O, tz) | 0;
                    var t$ = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (t$ >>> 26) | 0, t$ &= 67108863, f = Math.imul(ta, tM), h = (h = Math.imul(ta, tE)) + Math.imul(tl, tM) | 0, l = Math.imul(tl, tE), f = f + Math.imul(ts, tI) | 0, h = (h = h + Math.imul(ts, tN) | 0) + Math.imul(tu, tI) | 0, l = l + Math.imul(tu, tN) | 0, f = f + Math.imul(te, tC) | 0, h = (h = h + Math.imul(te, t_) | 0) + Math.imul(ti, tC) | 0, l = l + Math.imul(ti, t_) | 0, f = f + Math.imul(Z, tx) | 0, h = (h = h + Math.imul(Z, tR) | 0) + Math.imul($, tx) | 0, l = l + Math.imul($, tR) | 0, f = f + Math.imul(K, tP) | 0, h = (h = h + Math.imul(K, tU) | 0) + Math.imul(Q, tP) | 0, l = l + Math.imul(Q, tU) | 0, f = f + Math.imul(D, tD) | 0, h = (h = h + Math.imul(D, tF) | 0) + Math.imul(F, tD) | 0, l = l + Math.imul(F, tF) | 0, f = f + Math.imul(R, tj) | 0, h = (h = h + Math.imul(R, tz) | 0) + Math.imul(P, tj) | 0, l = l + Math.imul(P, tz) | 0;
                    var t0 = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (t0 >>> 26) | 0, t0 &= 67108863, f = Math.imul(ta, tI), h = (h = Math.imul(ta, tN)) + Math.imul(tl, tI) | 0, l = Math.imul(tl, tN), f = f + Math.imul(ts, tC) | 0, h = (h = h + Math.imul(ts, t_) | 0) + Math.imul(tu, tC) | 0, l = l + Math.imul(tu, t_) | 0, f = f + Math.imul(te, tx) | 0, h = (h = h + Math.imul(te, tR) | 0) + Math.imul(ti, tx) | 0, l = l + Math.imul(ti, tR) | 0, f = f + Math.imul(Z, tP) | 0, h = (h = h + Math.imul(Z, tU) | 0) + Math.imul($, tP) | 0, l = l + Math.imul($, tU) | 0, f = f + Math.imul(K, tD) | 0, h = (h = h + Math.imul(K, tF) | 0) + Math.imul(Q, tD) | 0, l = l + Math.imul(Q, tF) | 0, f = f + Math.imul(D, tj) | 0, h = (h = h + Math.imul(D, tz) | 0) + Math.imul(F, tj) | 0, l = l + Math.imul(F, tz) | 0;
                    var t1 = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (t1 >>> 26) | 0, t1 &= 67108863, f = Math.imul(ta, tC), h = (h = Math.imul(ta, t_)) + Math.imul(tl, tC) | 0, l = Math.imul(tl, t_), f = f + Math.imul(ts, tx) | 0, h = (h = h + Math.imul(ts, tR) | 0) + Math.imul(tu, tx) | 0, l = l + Math.imul(tu, tR) | 0, f = f + Math.imul(te, tP) | 0, h = (h = h + Math.imul(te, tU) | 0) + Math.imul(ti, tP) | 0, l = l + Math.imul(ti, tU) | 0, f = f + Math.imul(Z, tD) | 0, h = (h = h + Math.imul(Z, tF) | 0) + Math.imul($, tD) | 0, l = l + Math.imul($, tF) | 0, f = f + Math.imul(K, tj) | 0, h = (h = h + Math.imul(K, tz) | 0) + Math.imul(Q, tj) | 0, l = l + Math.imul(Q, tz) | 0;
                    var t2 = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (t2 >>> 26) | 0, t2 &= 67108863, f = Math.imul(ta, tx), h = (h = Math.imul(ta, tR)) + Math.imul(tl, tx) | 0, l = Math.imul(tl, tR), f = f + Math.imul(ts, tP) | 0, h = (h = h + Math.imul(ts, tU) | 0) + Math.imul(tu, tP) | 0, l = l + Math.imul(tu, tU) | 0, f = f + Math.imul(te, tD) | 0, h = (h = h + Math.imul(te, tF) | 0) + Math.imul(ti, tD) | 0, l = l + Math.imul(ti, tF) | 0, f = f + Math.imul(Z, tj) | 0, h = (h = h + Math.imul(Z, tz) | 0) + Math.imul($, tj) | 0, l = l + Math.imul($, tz) | 0;
                    var t3 = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (t3 >>> 26) | 0, t3 &= 67108863, f = Math.imul(ta, tP), h = (h = Math.imul(ta, tU)) + Math.imul(tl, tP) | 0, l = Math.imul(tl, tU), f = f + Math.imul(ts, tD) | 0, h = (h = h + Math.imul(ts, tF) | 0) + Math.imul(tu, tD) | 0, l = l + Math.imul(tu, tF) | 0, f = f + Math.imul(te, tj) | 0, h = (h = h + Math.imul(te, tz) | 0) + Math.imul(ti, tj) | 0, l = l + Math.imul(ti, tz) | 0;
                    var t6 = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (t6 >>> 26) | 0, t6 &= 67108863, f = Math.imul(ta, tD), h = (h = Math.imul(ta, tF)) + Math.imul(tl, tD) | 0, l = Math.imul(tl, tF), f = f + Math.imul(ts, tj) | 0, h = (h = h + Math.imul(ts, tz) | 0) + Math.imul(tu, tj) | 0, l = l + Math.imul(tu, tz) | 0;
                    var t8 = (A + f | 0) + ((8191 & h) << 13) | 0;
                    A = (l + (h >>> 13) | 0) + (t8 >>> 26) | 0, t8 &= 67108863, f = Math.imul(ta, tj), h = (h = Math.imul(ta, tz)) + Math.imul(tl, tj) | 0, l = Math.imul(tl, tz);
                    var t4 = (A + f | 0) + ((8191 & h) << 13) | 0;
                    return A = (l + (h >>> 13) | 0) + (t4 >>> 26) | 0, t4 &= 67108863, g[0] = tq, g[1] = tK, g[2] = tH, g[3] = tQ, g[4] = tY, g[5] = tG, g[6] = tJ, g[7] = tV, g[8] = tW, g[9] = tX, g[10] = tZ, g[11] = t$, g[12] = t0, g[13] = t1, g[14] = t2, g[15] = t3, g[16] = t6, g[17] = t8, g[18] = t4, 0 !== A && (g[19] = A, u.length++), u
                };

                function Bt(t, e, u) {
                    u.negative = e.negative ^ t.negative, u.length = t.length + e.length;
                    for (var f = 0, h = 0, l = 0; l < u.length - 1; l++) {
                        var c = h;
                        h = 0;
                        for (var d = 67108863 & f, g = Math.min(l, e.length - 1), A = Math.max(0, l - t.length + 1); A <= g; A++) {
                            var M = l - A,
                                E = (0 | t.words[M]) * (0 | e.words[A]),
                                S = 67108863 & E;
                            c = c + (E / 67108864 | 0) | 0, d = 67108863 & (S = S + d | 0), h += (c = c + (S >>> 26) | 0) >>> 26, c &= 67108863
                        }
                        u.words[l] = d, f = c, c = h
                    }
                    return 0 !== f ? u.words[l] = f : u.length--, u._strip()
                }
                Math.imul || (J = U), o.prototype.mulTo = function(t, e) {
                    var u, f = this.length + t.length;
                    return 10 === this.length && 10 === t.length ? J(this, t, e) : f < 63 ? U(this, t, e) : Bt(this, t, e)
                }, o.prototype.mul = function(t) {
                    var e = new o(null);
                    return e.words = Array(this.length + t.length), this.mulTo(t, e)
                }, o.prototype.mulf = function(t) {
                    var e = new o(null);
                    return e.words = Array(this.length + t.length), Bt(this, t, e)
                }, o.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, o.prototype.imuln = function(t) {
                    var e = t < 0;
                    e && (t = -t), i("number" == typeof t), i(t < 67108864);
                    for (var u = 0, f = 0; f < this.length; f++) {
                        var h = (0 | this.words[f]) * t,
                            l = (67108863 & h) + (67108863 & u);
                        u >>= 26, u += (h / 67108864 | 0) + (l >>> 26), this.words[f] = 67108863 & l
                    }
                    return 0 !== u && (this.words[f] = u, this.length++), e ? this.ineg() : this
                }, o.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = Array(t.bitLength()), u = 0; u < e.length; u++) {
                            var f = u / 26 | 0,
                                h = u % 26;
                            e[u] = t.words[f] >>> h & 1
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new o(1);
                    for (var u = this, f = 0; f < e.length && 0 === e[f]; f++, u = u.sqr());
                    if (++f < e.length)
                        for (var h = u.sqr(); f < e.length; f++, h = h.sqr()) 0 !== e[f] && (u = u.mul(h));
                    return u
                }, o.prototype.iushln = function(t) {
                    i("number" == typeof t && t >= 0);
                    var e, u = t % 26,
                        f = (t - u) / 26,
                        h = 67108863 >>> 26 - u << 26 - u;
                    if (0 !== u) {
                        var l = 0;
                        for (e = 0; e < this.length; e++) {
                            var c = this.words[e] & h,
                                d = (0 | this.words[e]) - c << u;
                            this.words[e] = d | l, l = c >>> 26 - u
                        }
                        l && (this.words[e] = l, this.length++)
                    }
                    if (0 !== f) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + f] = this.words[e];
                        for (e = 0; e < f; e++) this.words[e] = 0;
                        this.length += f
                    }
                    return this._strip()
                }, o.prototype.ishln = function(t) {
                    return i(0 === this.negative), this.iushln(t)
                }, o.prototype.iushrn = function(t, e, u) {
                    i("number" == typeof t && t >= 0), f = e ? (e - e % 26) / 26 : 0;
                    var f, h = t % 26,
                        l = Math.min((t - h) / 26, this.length),
                        c = 67108863 ^ 67108863 >>> h << h;
                    if (f -= l, f = Math.max(0, f), u) {
                        for (var d = 0; d < l; d++) u.words[d] = this.words[d];
                        u.length = l
                    }
                    if (0 !== l) {
                        if (this.length > l)
                            for (this.length -= l, d = 0; d < this.length; d++) this.words[d] = this.words[d + l];
                        else this.words[0] = 0, this.length = 1
                    }
                    var g = 0;
                    for (d = this.length - 1; d >= 0 && (0 !== g || d >= f); d--) {
                        var A = 0 | this.words[d];
                        this.words[d] = g << 26 - h | A >>> h, g = A & c
                    }
                    return u && 0 !== g && (u.words[u.length++] = g), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                }, o.prototype.ishrn = function(t, e, u) {
                    return i(0 === this.negative), this.iushrn(t, e, u)
                }, o.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, o.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, o.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, o.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, o.prototype.testn = function(t) {
                    i("number" == typeof t && t >= 0);
                    var e = t % 26,
                        u = (t - e) / 26;
                    return !(this.length <= u) && !!(this.words[u] & 1 << e)
                }, o.prototype.imaskn = function(t) {
                    i("number" == typeof t && t >= 0);
                    var e = t % 26,
                        u = (t - e) / 26;
                    return (i(0 === this.negative, "imaskn works only with positive numbers"), this.length <= u) ? this : (0 !== e && u++, this.length = Math.min(u, this.length), 0 !== e && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> e << e), this._strip())
                }, o.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, o.prototype.iaddn = function(t) {
                    return i("number" == typeof t), i(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(t), this.negative = 1), this) : this._iaddn(t)
                }, o.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, o.prototype.isubn = function(t) {
                    if (i("number" == typeof t), i(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                    return this._strip()
                }, o.prototype.addn = function(t) {
                    return this.clone().iaddn(t)
                }, o.prototype.subn = function(t) {
                    return this.clone().isubn(t)
                }, o.prototype.iabs = function() {
                    return this.negative = 0, this
                }, o.prototype.abs = function() {
                    return this.clone().iabs()
                }, o.prototype._ishlnsubmul = function(t, e, u) {
                    var f, h = t.length + u;
                    this._expand(h);
                    var l, c = 0;
                    for (f = 0; f < t.length; f++) {
                        l = (0 | this.words[f + u]) + c;
                        var d = (0 | t.words[f]) * e;
                        l -= 67108863 & d, c = (l >> 26) - (d / 67108864 | 0), this.words[f + u] = 67108863 & l
                    }
                    for (; f < this.length - u; f++) c = (l = (0 | this.words[f + u]) + c) >> 26, this.words[f + u] = 67108863 & l;
                    if (0 === c) return this._strip();
                    for (i(-1 === c), c = 0, f = 0; f < this.length; f++) c = (l = -(0 | this.words[f]) + c) >> 26, this.words[f] = 67108863 & l;
                    return this.negative = 1, this._strip()
                }, o.prototype._wordDiv = function(t, e) {
                    var u = this.length - t.length,
                        f = this.clone(),
                        h = t,
                        l = 0 | h.words[h.length - 1];
                    0 != (u = 26 - this._countBits(l)) && (h = h.ushln(u), f.iushln(u), l = 0 | h.words[h.length - 1]);
                    var c, d = f.length - h.length;
                    if ("mod" !== e) {
                        (c = new o(null)).length = d + 1, c.words = Array(c.length);
                        for (var g = 0; g < c.length; g++) c.words[g] = 0
                    }
                    var A = f.clone()._ishlnsubmul(h, 1, d);
                    0 === A.negative && (f = A, c && (c.words[d] = 1));
                    for (var M = d - 1; M >= 0; M--) {
                        var E = (0 | f.words[h.length + M]) * 67108864 + (0 | f.words[h.length + M - 1]);
                        for (E = Math.min(E / l | 0, 67108863), f._ishlnsubmul(h, E, M); 0 !== f.negative;) E--, f.negative = 0, f._ishlnsubmul(h, 1, M), f.isZero() || (f.negative ^= 1);
                        c && (c.words[M] = E)
                    }
                    return c && c._strip(), f._strip(), "div" !== e && 0 !== u && f.iushrn(u), {
                        div: c || null,
                        mod: f
                    }
                }, o.prototype.divmod = function(t, e, u) {
                    var f, h, l;
                    return (i(!t.isZero()), this.isZero()) ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === t.negative ? (l = this.neg().divmod(t, e), "mod" !== e && (f = l.div.neg()), "div" !== e && (h = l.mod.neg(), u && 0 !== h.negative && h.iadd(t)), {
                        div: f,
                        mod: h
                    }) : 0 === this.negative && 0 !== t.negative ? (l = this.divmod(t.neg(), e), "mod" !== e && (f = l.div.neg()), {
                        div: f,
                        mod: l.mod
                    }) : this.negative & t.negative ? (l = this.neg().divmod(t.neg(), e), "div" !== e && (h = l.mod.neg(), u && 0 !== h.negative && h.isub(t)), {
                        div: l.div,
                        mod: h
                    }) : t.length > this.length || 0 > this.cmp(t) ? {
                        div: new o(0),
                        mod: this
                    } : 1 === t.length ? "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {
                        div: null,
                        mod: new o(this.modrn(t.words[0]))
                    } : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modrn(t.words[0]))
                    } : this._wordDiv(t, e)
                }, o.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, o.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, o.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, o.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var u = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        f = t.ushrn(1),
                        h = t.andln(1),
                        l = u.cmp(f);
                    return l < 0 || 1 === h && 0 === l ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, o.prototype.modrn = function(t) {
                    var e = t < 0;
                    e && (t = -t), i(t <= 67108863);
                    for (var u = 67108864 % t, f = 0, h = this.length - 1; h >= 0; h--) f = (u * f + (0 | this.words[h])) % t;
                    return e ? -f : f
                }, o.prototype.modn = function(t) {
                    return this.modrn(t)
                }, o.prototype.idivn = function(t) {
                    var e = t < 0;
                    e && (t = -t), i(t <= 67108863);
                    for (var u = 0, f = this.length - 1; f >= 0; f--) {
                        var h = (0 | this.words[f]) + 67108864 * u;
                        this.words[f] = h / t | 0, u = h % t
                    }
                    return this._strip(), e ? this.ineg() : this
                }, o.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, o.prototype.egcd = function(t) {
                    i(0 === t.negative), i(!t.isZero());
                    var e = this,
                        u = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var f = new o(1), h = new o(0), l = new o(0), c = new o(1), d = 0; e.isEven() && u.isEven();) e.iushrn(1), u.iushrn(1), ++d;
                    for (var g = u.clone(), A = e.clone(); !e.isZero();) {
                        for (var M = 0, E = 1; !(e.words[0] & E) && M < 26; ++M, E <<= 1);
                        if (M > 0)
                            for (e.iushrn(M); M-- > 0;)(f.isOdd() || h.isOdd()) && (f.iadd(g), h.isub(A)), f.iushrn(1), h.iushrn(1);
                        for (var S = 0, I = 1; !(u.words[0] & I) && S < 26; ++S, I <<= 1);
                        if (S > 0)
                            for (u.iushrn(S); S-- > 0;)(l.isOdd() || c.isOdd()) && (l.iadd(g), c.isub(A)), l.iushrn(1), c.iushrn(1);
                        e.cmp(u) >= 0 ? (e.isub(u), f.isub(l), h.isub(c)) : (u.isub(e), l.isub(f), c.isub(h))
                    }
                    return {
                        a: l,
                        b: c,
                        gcd: u.iushln(d)
                    }
                }, o.prototype._invmp = function(t) {
                    i(0 === t.negative), i(!t.isZero());
                    var e, u = this,
                        f = t.clone();
                    u = 0 !== u.negative ? u.umod(t) : u.clone();
                    for (var h = new o(1), l = new o(0), c = f.clone(); u.cmpn(1) > 0 && f.cmpn(1) > 0;) {
                        for (var d = 0, g = 1; !(u.words[0] & g) && d < 26; ++d, g <<= 1);
                        if (d > 0)
                            for (u.iushrn(d); d-- > 0;) h.isOdd() && h.iadd(c), h.iushrn(1);
                        for (var A = 0, M = 1; !(f.words[0] & M) && A < 26; ++A, M <<= 1);
                        if (A > 0)
                            for (f.iushrn(A); A-- > 0;) l.isOdd() && l.iadd(c), l.iushrn(1);
                        u.cmp(f) >= 0 ? (u.isub(f), h.isub(l)) : (f.isub(u), l.isub(h))
                    }
                    return 0 > (e = 0 === u.cmpn(1) ? h : l).cmpn(0) && e.iadd(t), e
                }, o.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        u = t.clone();
                    e.negative = 0, u.negative = 0;
                    for (var f = 0; e.isEven() && u.isEven(); f++) e.iushrn(1), u.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; u.isEven();) u.iushrn(1);
                        var h = e.cmp(u);
                        if (h < 0) {
                            var l = e;
                            e = u, u = l
                        } else if (0 === h || 0 === u.cmpn(1)) break;
                        e.isub(u)
                    }
                    return u.iushln(f)
                }, o.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, o.prototype.isEven = function() {
                    return (1 & this.words[0]) == 0
                }, o.prototype.isOdd = function() {
                    return (1 & this.words[0]) == 1
                }, o.prototype.andln = function(t) {
                    return this.words[0] & t
                }, o.prototype.bincn = function(t) {
                    i("number" == typeof t);
                    var e = t % 26,
                        u = (t - e) / 26,
                        f = 1 << e;
                    if (this.length <= u) return this._expand(u + 1), this.words[u] |= f, this;
                    for (var h = f, l = u; 0 !== h && l < this.length; l++) {
                        var c = 0 | this.words[l];
                        c += h, h = c >>> 26, c &= 67108863, this.words[l] = c
                    }
                    return 0 !== h && (this.words[l] = h, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(t) {
                    var e, u = t < 0;
                    if (0 !== this.negative && !u) return -1;
                    if (0 === this.negative && u) return 1;
                    if (this._strip(), this.length > 1) e = 1;
                    else {
                        u && (t = -t), i(t <= 67108863, "Number is too big");
                        var f = 0 | this.words[0];
                        e = f === t ? 0 : f < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.cmp = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, o.prototype.ucmp = function(t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, u = this.length - 1; u >= 0; u--) {
                        var f = 0 | this.words[u],
                            h = 0 | t.words[u];
                        if (f !== h) {
                            f < h ? e = -1 : f > h && (e = 1);
                            break
                        }
                    }
                    return e
                }, o.prototype.gtn = function(t) {
                    return 1 === this.cmpn(t)
                }, o.prototype.gt = function(t) {
                    return 1 === this.cmp(t)
                }, o.prototype.gten = function(t) {
                    return this.cmpn(t) >= 0
                }, o.prototype.gte = function(t) {
                    return this.cmp(t) >= 0
                }, o.prototype.ltn = function(t) {
                    return -1 === this.cmpn(t)
                }, o.prototype.lt = function(t) {
                    return -1 === this.cmp(t)
                }, o.prototype.lten = function(t) {
                    return 0 >= this.cmpn(t)
                }, o.prototype.lte = function(t) {
                    return 0 >= this.cmp(t)
                }, o.prototype.eqn = function(t) {
                    return 0 === this.cmpn(t)
                }, o.prototype.eq = function(t) {
                    return 0 === this.cmp(t)
                }, o.red = function(t) {
                    return new Y(t)
                }, o.prototype.toRed = function(t) {
                    return i(!this.red, "Already a number in reduction context"), i(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, o.prototype.fromRed = function() {
                    return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, o.prototype.forceRed = function(t) {
                    return i(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, o.prototype.redAdd = function(t) {
                    return i(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, o.prototype.redIAdd = function(t) {
                    return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, o.prototype.redSub = function(t) {
                    return i(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, o.prototype.redISub = function(t) {
                    return i(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, o.prototype.redShl = function(t) {
                    return i(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, o.prototype.redMul = function(t) {
                    return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, o.prototype.redIMul = function(t) {
                    return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, o.prototype.redSqr = function() {
                    return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(t) {
                    return i(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var c = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function z(t, e) {
                    this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function Pt() {
                    z.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function W() {
                    z.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function Rt() {
                    z.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function Yt() {
                    z.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function Y(t) {
                    if ("string" == typeof t) {
                        var e = o._prime(t);
                        this.m = e.p, this.prime = e
                    } else i(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function Vt(t) {
                    Y.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                z.prototype._tmp = function() {
                    var t = new o(null);
                    return t.words = Array(Math.ceil(this.n / 13)), t
                }, z.prototype.ireduce = function(t) {
                    var e, u = t;
                    do this.split(u, this.tmp), e = (u = (u = this.imulK(u)).iadd(this.tmp)).bitLength(); while (e > this.n);
                    var f = e < this.n ? -1 : u.ucmp(this.p);
                    return 0 === f ? (u.words[0] = 0, u.length = 1) : f > 0 ? u.isub(this.p) : void 0 !== u.strip ? u.strip() : u._strip(), u
                }, z.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, z.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, n(Pt, z), Pt.prototype.split = function(t, e) {
                    for (var u = Math.min(t.length, 9), f = 0; f < u; f++) e.words[f] = t.words[f];
                    if (e.length = u, t.length <= 9) {
                        t.words[0] = 0, t.length = 1;
                        return
                    }
                    var h = t.words[9];
                    for (e.words[e.length++] = 4194303 & h, f = 10; f < t.length; f++) {
                        var l = 0 | t.words[f];
                        t.words[f - 10] = (4194303 & l) << 4 | h >>> 22, h = l
                    }
                    h >>>= 22, t.words[f - 10] = h, 0 === h && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, Pt.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, u = 0; u < t.length; u++) {
                        var f = 0 | t.words[u];
                        e += 977 * f, t.words[u] = 67108863 & e, e = 64 * f + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, n(W, z), n(Rt, z), n(Yt, z), Yt.prototype.imulK = function(t) {
                    for (var e = 0, u = 0; u < t.length; u++) {
                        var f = (0 | t.words[u]) * 19 + e,
                            h = 67108863 & f;
                        f >>>= 26, t.words[u] = h, e = f
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, o._prime = function(t) {
                    var e;
                    if (c[t]) return c[t];
                    if ("k256" === t) e = new Pt;
                    else if ("p224" === t) e = new W;
                    else if ("p192" === t) e = new Rt;
                    else if ("p25519" === t) e = new Yt;
                    else throw Error("Unknown prime " + t);
                    return c[t] = e, e
                }, Y.prototype._verify1 = function(t) {
                    i(0 === t.negative, "red works only with positives"), i(t.red, "red works only with red numbers")
                }, Y.prototype._verify2 = function(t, e) {
                    i((t.negative | e.negative) == 0, "red works only with positives"), i(t.red && t.red === e.red, "red works only with red numbers")
                }, Y.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : (w(t, t.umod(this.m)._forceRed(this)), t)
                }, Y.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, Y.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var u = t.add(e);
                    return u.cmp(this.m) >= 0 && u.isub(this.m), u._forceRed(this)
                }, Y.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var u = t.iadd(e);
                    return u.cmp(this.m) >= 0 && u.isub(this.m), u
                }, Y.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var u = t.sub(e);
                    return 0 > u.cmpn(0) && u.iadd(this.m), u._forceRed(this)
                }, Y.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var u = t.isub(e);
                    return 0 > u.cmpn(0) && u.iadd(this.m), u
                }, Y.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, Y.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, Y.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, Y.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, Y.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, Y.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (i(e % 2 == 1), 3 === e) {
                        var u = this.m.add(new o(1)).iushrn(2);
                        return this.pow(t, u)
                    }
                    for (var f = this.m.subn(1), h = 0; !f.isZero() && 0 === f.andln(1);) h++, f.iushrn(1);
                    i(!f.isZero());
                    var l = new o(1).toRed(this),
                        c = l.redNeg(),
                        d = this.m.subn(1).iushrn(1),
                        g = this.m.bitLength();
                    for (g = new o(2 * g * g).toRed(this); 0 !== this.pow(g, d).cmp(c);) g.redIAdd(c);
                    for (var A = this.pow(g, f), M = this.pow(t, f.addn(1).iushrn(1)), E = this.pow(t, f), S = h; 0 !== E.cmp(l);) {
                        for (var I = E, N = 0; 0 !== I.cmp(l); N++) I = I.redSqr();
                        i(N < S);
                        var B = this.pow(A, new o(1).iushln(S - N - 1));
                        M = M.redMul(B), A = B.redSqr(), E = E.redMul(A), S = N
                    }
                    return M
                }, Y.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, Y.prototype.pow = function(t, e) {
                    if (e.isZero()) return new o(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var u = Array(16);
                    u[0] = new o(1).toRed(this), u[1] = t;
                    for (var f = 2; f < u.length; f++) u[f] = this.mul(u[f - 1], t);
                    var h = u[0],
                        l = 0,
                        c = 0,
                        d = e.bitLength() % 26;
                    for (0 === d && (d = 26), f = e.length - 1; f >= 0; f--) {
                        for (var g = e.words[f], A = d - 1; A >= 0; A--) {
                            var M = g >> A & 1;
                            if (h !== u[0] && (h = this.sqr(h)), 0 === M && 0 === l) {
                                c = 0;
                                continue
                            }
                            l <<= 1, l |= M, 4 != ++c && (0 !== f || 0 !== A) || (h = this.mul(h, u[l]), c = 0, l = 0)
                        }
                        d = 26
                    }
                    return h
                }, Y.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, Y.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, o.mont = function(t) {
                    return new Vt(t)
                }, n(Vt, Y), Vt.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, Vt.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, Vt.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var u = t.imul(e),
                        f = u.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        h = u.isub(f).iushrn(this.shift),
                        l = h;
                    return h.cmp(this.m) >= 0 ? l = h.isub(this.m) : 0 > h.cmpn(0) && (l = h.iadd(this.m)), l._forceRed(this)
                }, Vt.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                    var u = t.mul(e),
                        f = u.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        h = u.isub(f).iushrn(this.shift),
                        l = h;
                    return h.cmp(this.m) >= 0 ? l = h.isub(this.m) : 0 > h.cmpn(0) && (l = h.iadd(this.m)), l._forceRed(this)
                }, Vt.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(ty, ts);
            var tw = ty.exports;
            let tM = "bignumber/5.7.0";
            var tE = tw.BN;
            let tS = new L(tM),
                tI = {},
                tN = !1;
            let V = class V {
                constructor(t, e) {
                    t !== tI && tS.throwError("cannot call constructor directly; use BigNumber.from", L.errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = e, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(t) {
                    return Lt(j(this).fromTwos(t))
                }
                toTwos(t) {
                    return Lt(j(this).toTwos(t))
                }
                abs() {
                    return "-" === this._hex[0] ? V.from(this._hex.substring(1)) : this
                }
                add(t) {
                    return Lt(j(this).add(j(t)))
                }
                sub(t) {
                    return Lt(j(this).sub(j(t)))
                }
                div(t) {
                    return V.from(t).isZero() && Wt("division-by-zero", "div"), Lt(j(this).div(j(t)))
                }
                mul(t) {
                    return Lt(j(this).mul(j(t)))
                }
                mod(t) {
                    let e = j(t);
                    return e.isNeg() && Wt("division-by-zero", "mod"), Lt(j(this).umod(e))
                }
                pow(t) {
                    let e = j(t);
                    return e.isNeg() && Wt("negative-power", "pow"), Lt(j(this).pow(e))
                }
                and(t) {
                    let e = j(t);
                    return (this.isNegative() || e.isNeg()) && Wt("unbound-bitwise-result", "and"), Lt(j(this).and(e))
                }
                or(t) {
                    let e = j(t);
                    return (this.isNegative() || e.isNeg()) && Wt("unbound-bitwise-result", "or"), Lt(j(this).or(e))
                }
                xor(t) {
                    let e = j(t);
                    return (this.isNegative() || e.isNeg()) && Wt("unbound-bitwise-result", "xor"), Lt(j(this).xor(e))
                }
                mask(t) {
                    return (this.isNegative() || t < 0) && Wt("negative-width", "mask"), Lt(j(this).maskn(t))
                }
                shl(t) {
                    return (this.isNegative() || t < 0) && Wt("negative-width", "shl"), Lt(j(this).shln(t))
                }
                shr(t) {
                    return (this.isNegative() || t < 0) && Wt("negative-width", "shr"), Lt(j(this).shrn(t))
                }
                eq(t) {
                    return j(this).eq(j(t))
                }
                lt(t) {
                    return j(this).lt(j(t))
                }
                lte(t) {
                    return j(this).lte(j(t))
                }
                gt(t) {
                    return j(this).gt(j(t))
                }
                gte(t) {
                    return j(this).gte(j(t))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return j(this).isZero()
                }
                toNumber() {
                    try {
                        return j(this).toNumber()
                    } catch {
                        Wt("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch {}
                    return tS.throwError("this platform does not support BigInt", L.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? tN || (tN = !0, tS.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? tS.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", L.errors.UNEXPECTED_ARGUMENT, {}) : tS.throwError("BigNumber.toString does not accept parameters", L.errors.UNEXPECTED_ARGUMENT, {})), j(this).toString(10)
                }
                toHexString() {
                    return this._hex
                }
                toJSON(t) {
                    return {
                        type: "BigNumber",
                        hex: this.toHexString()
                    }
                }
                static from(t) {
                    if (t instanceof V) return t;
                    if ("string" == typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new V(tI, vr(t)) : t.match(/^-?[0-9]+$/) ? new V(tI, vr(new tE(t))) : tS.throwArgumentError("invalid BigNumber string", "value", t);
                    if ("number" == typeof t) return t % 1 && Wt("underflow", "BigNumber.from", t), (t >= 9007199254740991 || t <= -9007199254740991) && Wt("overflow", "BigNumber.from", t), V.from(String(t));
                    if ("bigint" == typeof t) return V.from(t.toString());
                    if (ir(t)) return V.from(Kt(t));
                    if (t) {
                        if (t.toHexString) {
                            let e = t.toHexString();
                            if ("string" == typeof e) return V.from(e)
                        } else {
                            let e = t._hex;
                            if (null == e && "BigNumber" === t.type && (e = t.hex), "string" == typeof e && (Qt(e) || "-" === e[0] && Qt(e.substring(1)))) return V.from(e)
                        }
                    }
                    return tS.throwArgumentError("invalid BigNumber value", "value", t)
                }
                static isBigNumber(t) {
                    return !!(t && t._isBigNumber)
                }
            };

            function vr(t) {
                if ("string" != typeof t) return vr(t.toString(16));
                if ("-" === t[0]) return "-" === (t = t.substring(1))[0] && tS.throwArgumentError("invalid hex", "value", t), "0x00" === (t = vr(t)) ? t : "-" + t;
                if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
                for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4);) t = "0x" + t.substring(4);
                return t
            }

            function Lt(t) {
                return V.from(vr(t))
            }

            function j(t) {
                let e = V.from(t).toHexString();
                return "-" === e[0] ? new tE("-" + e.substring(3), 16) : new tE(e.substring(2), 16)
            }

            function Wt(t, e, u) {
                let f = {
                    fault: t,
                    operation: e
                };
                return null != u && (f.value = u), tS.throwError(t, L.errors.NUMERIC_FAULT, f)
            }
            let tB = new L(tM),
                tC = {},
                t_ = V.from(0),
                tO = V.from(-1);

            function Vn(t, e, u, f) {
                let h = {
                    fault: e,
                    operation: u
                };
                return void 0 !== f && (h.value = f), tB.throwError(t, L.errors.NUMERIC_FAULT, h)
            }
            let tx = "0";
            for (; tx.length < 256;) tx += tx;

            function xi(t) {
                if ("number" != typeof t) try {
                    t = V.from(t).toNumber()
                } catch {}
                return "number" == typeof t && t >= 0 && t <= 256 && !(t % 1) ? "1" + tx.substring(0, t) : tB.throwArgumentError("invalid decimal size", "decimals", t)
            }

            function Mi(t, e) {
                null == e && (e = 0);
                let u = xi(e);
                t = V.from(t);
                let f = t.lt(t_);
                f && (t = t.mul(tO));
                let h = t.mod(u).toString();
                for (; h.length < u.length - 1;) h = "0" + h;
                h = h.match(/^([0-9]*[1-9]|0)(0*)/)[1];
                let l = t.div(u).toString();
                return t = 1 === u.length ? l : l + "." + h, f && (t = "-" + t), t
            }

            function be(t, e) {
                null == e && (e = 0);
                let u = xi(e);
                "string" == typeof t && t.match(/^-?[0-9.]+$/) || tB.throwArgumentError("invalid decimal value", "value", t);
                let f = "-" === t.substring(0, 1);
                f && (t = t.substring(1)), "." === t && tB.throwArgumentError("missing value", "value", t);
                let h = t.split(".");
                h.length > 2 && tB.throwArgumentError("too many decimal points", "value", t);
                let l = h[0],
                    c = h[1];
                for (l || (l = "0"), c || (c = "0");
                    "0" === c[c.length - 1];) c = c.substring(0, c.length - 1);
                for (c.length > u.length - 1 && Vn("fractional component exceeds decimals", "underflow", "parseFixed"), "" === c && (c = "0"); c.length < u.length - 1;) c += "0";
                let d = V.from(l),
                    g = V.from(c),
                    A = d.mul(u).add(g);
                return f && (A = A.mul(tO)), A
            }
            let dr = class dr {
                constructor(t, e, u, f) {
                    t !== tC && tB.throwError("cannot use FixedFormat constructor; use FixedFormat.from", L.errors.UNSUPPORTED_OPERATION, {
                        operation: "new FixedFormat"
                    }), this.signed = e, this.width = u, this.decimals = f, this.name = (e ? "" : "u") + "fixed" + String(u) + "x" + String(f), this._multiplier = xi(f), Object.freeze(this)
                }
                static from(t) {
                    if (t instanceof dr) return t;
                    "number" == typeof t && (t = `fixed128x${t}`);
                    let e = !0,
                        u = 128,
                        f = 18;
                    if ("string" == typeof t) {
                        if ("fixed" !== t) {
                            if ("ufixed" === t) e = !1;
                            else {
                                let h = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                                h || tB.throwArgumentError("invalid fixed format", "format", t), e = "u" !== h[1], u = parseInt(h[2]), f = parseInt(h[3])
                            }
                        }
                    } else if (t) {
                        let o = (e, u, f) => null == t[e] ? f : (typeof t[e] !== u && tB.throwArgumentError("invalid fixed format (" + e + " not " + u + ")", "format." + e, t[e]), t[e]);
                        e = o("signed", "boolean", e), u = o("width", "number", u), f = o("decimals", "number", f)
                    }
                    return u % 8 && tB.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", u), f > 80 && tB.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", f), new dr(tC, e, u, f)
                }
            };
            let Ut = class Ut {
                constructor(t, e, u, f) {
                    t !== tC && tB.throwError("cannot use FixedNumber constructor; use FixedNumber.from", L.errors.UNSUPPORTED_OPERATION, {
                        operation: "new FixedFormat"
                    }), this.format = f, this._hex = e, this._value = u, this._isFixedNumber = !0, Object.freeze(this)
                }
                _checkFormat(t) {
                    this.format.name !== t.format.name && tB.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t)
                }
                addUnsafe(t) {
                    this._checkFormat(t);
                    let e = be(this._value, this.format.decimals),
                        u = be(t._value, t.format.decimals);
                    return Ut.fromValue(e.add(u), this.format.decimals, this.format)
                }
                subUnsafe(t) {
                    this._checkFormat(t);
                    let e = be(this._value, this.format.decimals),
                        u = be(t._value, t.format.decimals);
                    return Ut.fromValue(e.sub(u), this.format.decimals, this.format)
                }
                mulUnsafe(t) {
                    this._checkFormat(t);
                    let e = be(this._value, this.format.decimals),
                        u = be(t._value, t.format.decimals);
                    return Ut.fromValue(e.mul(u).div(this.format._multiplier), this.format.decimals, this.format)
                }
                divUnsafe(t) {
                    this._checkFormat(t);
                    let e = be(this._value, this.format.decimals),
                        u = be(t._value, t.format.decimals);
                    return Ut.fromValue(e.mul(this.format._multiplier).div(u), this.format.decimals, this.format)
                }
                floor() {
                    let t = this.toString().split(".");
                    1 === t.length && t.push("0");
                    let e = Ut.from(t[0], this.format),
                        u = !t[1].match(/^(0*)$/);
                    return this.isNegative() && u && (e = e.subUnsafe(tR.toFormat(e.format))), e
                }
                ceiling() {
                    let t = this.toString().split(".");
                    1 === t.length && t.push("0");
                    let e = Ut.from(t[0], this.format),
                        u = !t[1].match(/^(0*)$/);
                    return !this.isNegative() && u && (e = e.addUnsafe(tR.toFormat(e.format))), e
                }
                round(t) {
                    null == t && (t = 0);
                    let e = this.toString().split(".");
                    if (1 === e.length && e.push("0"), (t < 0 || t > 80 || t % 1) && tB.throwArgumentError("invalid decimal count", "decimals", t), e[1].length <= t) return this;
                    let u = Ut.from("1" + tx.substring(0, t), this.format),
                        f = tk.toFormat(this.format);
                    return this.mulUnsafe(u).addUnsafe(f).floor().divUnsafe(u)
                }
                isZero() {
                    return "0.0" === this._value || "0" === this._value
                }
                isNegative() {
                    return "-" === this._value[0]
                }
                toString() {
                    return this._value
                }
                toHexString(t) {
                    if (null == t) return this._hex;
                    t % 8 && tB.throwArgumentError("invalid byte width", "width", t);
                    let e = V.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
                    return oe(e, t / 8)
                }
                toUnsafeFloat() {
                    return parseFloat(this.toString())
                }
                toFormat(t) {
                    return Ut.fromString(this._value, t)
                }
                static fromValue(t, e, u) {
                    var f;
                    return null != u || null == e || null != (f = e) && (V.isBigNumber(f) || "number" == typeof f && f % 1 == 0 || "string" == typeof f && f.match(/^-?[0-9]+$/) || Qt(f) || "bigint" == typeof f || ir(f)) || (u = e, e = null), null == e && (e = 0), null == u && (u = "fixed"), Ut.fromString(Mi(t, e), dr.from(u))
                }
                static fromString(t, e) {
                    null == e && (e = "fixed");
                    let u = dr.from(e),
                        f = be(t, u.decimals);
                    !u.signed && f.lt(t_) && Vn("unsigned value cannot be negative", "overflow", "value", t);
                    let h = null;
                    h = u.signed ? f.toTwos(u.width).toHexString() : oe(h = f.toHexString(), u.width / 8);
                    let l = Mi(f, u.decimals);
                    return new Ut(tC, h, l, u)
                }
                static fromBytes(t, e) {
                    null == e && (e = "fixed");
                    let u = dr.from(e);
                    if (Ot(t).length > u.width / 8) throw Error("overflow");
                    let f = V.from(t);
                    u.signed && (f = f.fromTwos(u.width));
                    let h = f.toTwos((u.signed ? 0 : 1) + u.width).toHexString(),
                        l = Mi(f, u.decimals);
                    return new Ut(tC, h, l, u)
                }
                static from(t, e) {
                    if ("string" == typeof t) return Ut.fromString(t, e);
                    if (ir(t)) return Ut.fromBytes(t, e);
                    try {
                        return Ut.fromValue(t, 0, e)
                    } catch (t) {
                        if (t.code !== L.errors.INVALID_ARGUMENT) throw t
                    }
                    return tB.throwArgumentError("invalid FixedNumber value", "value", t)
                }
                static isFixedNumber(t) {
                    return !!(t && t._isFixedNumber)
                }
            };
            let tR = Ut.from(1),
                tk = Ut.from("0.5"),
                tP = new L("strings/5.7.0");

            function Zn(t, e, u, f, h) {
                if (t === N.BAD_PREFIX || t === N.UNEXPECTED_CONTINUE) {
                    let t = 0;
                    for (let f = e + 1; f < u.length && u[f] >> 6 == 2; f++) t++;
                    return t
                }
                return t === N.OVERRUN ? u.length - e - 1 : 0
            }

            function Ei(t, e = I.current) {
                e != I.current && (tP.checkNormalize(), t = t.normalize(e));
                let u = [];
                for (let e = 0; e < t.length; e++) {
                    let f = t.charCodeAt(e);
                    if (f < 128) u.push(f);
                    else if (f < 2048) u.push(f >> 6 | 192), u.push(63 & f | 128);
                    else if ((64512 & f) == 55296) {
                        e++;
                        let h = t.charCodeAt(e);
                        if (e >= t.length || (64512 & h) != 56320) throw Error("invalid utf-8 string");
                        let l = 65536 + ((1023 & f) << 10) + (1023 & h);
                        u.push(l >> 18 | 240), u.push(l >> 12 & 63 | 128), u.push(l >> 6 & 63 | 128), u.push(63 & l | 128)
                    } else u.push(f >> 12 | 224), u.push(f >> 6 & 63 | 128), u.push(63 & f | 128)
                }
                return Ot(u)
            }

            function Si(t, e) {
                e || (e = function(t) {
                    return [parseInt(t, 16)]
                });
                let u = 0,
                    f = {};
                return t.split(",").forEach(t => {
                    let h = t.split(":");
                    f[u += parseInt(h[0], 16)] = e(h[1])
                }), f
            }

            function $n(t) {
                let e = 0;
                return t.split(",").map(t => {
                    let u = t.split("-");
                    return 1 === u.length ? u[1] = "0" : "" === u[1] && (u[1] = "1"), {
                        l: e + parseInt(u[0], 16),
                        h: e = parseInt(u[1], 16)
                    }
                })
            }(g = I || (I = {})).current = "", g.NFC = "NFC", g.NFD = "NFD", g.NFKC = "NFKC", g.NFKD = "NFKD", (A = N || (N = {})).UNEXPECTED_CONTINUE = "unexpected continuation byte", A.BAD_PREFIX = "bad codepoint prefix", A.OVERRUN = "string overrun", A.MISSING_CONTINUE = "missing continuation byte", A.OUT_OF_RANGE = "out of UTF-8 range", A.UTF16_SURROGATE = "UTF-16 surrogate", A.OVERLONG = "overlong representation", Object.freeze({
                error: function(t, e, u, f, h) {
                    return tP.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, "bytes", u)
                },
                ignore: Zn,
                replace: function(t, e, u, f, h) {
                    return t === N.OVERLONG ? (f.push(h), 0) : (f.push(65533), Zn(t, e, u))
                }
            }), $n("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(t => parseInt(t, 16)), Si("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Si("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Si("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", function(t) {
                if (t.length % 4 != 0) throw Error("bad data");
                let e = [];
                for (let u = 0; u < t.length; u += 4) e.push(parseInt(t.substring(u, u + 4), 16));
                return e
            }), $n("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
            let tU = "hash/5.7.0";

            function ef(t, e) {
                null == e && (e = 1);
                let u = [],
                    f = u.forEach,
                    n = function(t, e) {
                        f.call(t, function(t) {
                            e > 0 && Array.isArray(t) ? n(t, e - 1) : u.push(t)
                        })
                    };
                return n(t, e), u
            }

            function rf(t, e) {
                let u = Array(t);
                for (let f = 0, h = -1; f < t; f++) u[f] = h += 1 + e();
                return u
            }

            function Pr(t, e) {
                let u = rf(t(), t),
                    f = t(),
                    h = rf(f, t),
                    l = function(t, e) {
                        let u = Array(t);
                        for (let f = 0; f < t; f++) u[f] = 1 + e();
                        return u
                    }(f, t);
                for (let t = 0; t < f; t++)
                    for (let e = 0; e < l[t]; e++) u.push(h[t] + e);
                return e ? u.map(t => e[t]) : u
            }

            function nf(t, e, u) {
                let f = Array(t).fill(void 0).map(() => []);
                for (let h = 0; h < e; h++)(function(t, e) {
                    let u = Array(t);
                    for (let h = 0, l = 0; h < t; h++) {
                        var f;
                        u[h] = l += 1 & (f = e()) ? ~f >> 1 : f >> 1
                    }
                    return u
                })(t, u).forEach((t, e) => f[e].push(t));
                return f
            }
            let tT = (l = function(t) {
                let e = 0;

                function r() {
                    return t[e++] << 8 | t[e++]
                }
                let u = r(),
                    f = 1,
                    h = [0, 1];
                for (let t = 1; t < u; t++) h.push(f += r());
                let l = r(),
                    c = e;
                e += l;
                let d = 0,
                    g = 0;

                function w() {
                    return 0 == d && (g = g << 8 | t[e++], d = 8), g >> --d & 1
                }
                let A = 0;
                for (let t = 0; t < 31; t++) A = A << 1 | w();
                let M = [],
                    E = 0,
                    S = 2147483648;
                for (;;) {
                    let t = Math.floor(((A - E + 1) * f - 1) / S),
                        e = 0,
                        l = u;
                    for (; l - e > 1;) {
                        let u = e + l >>> 1;
                        t < h[u] ? l = u : e = u
                    }
                    if (0 == e) break;
                    M.push(e);
                    let c = E + Math.floor(S * h[e] / f),
                        d = E + Math.floor(S * h[e + 1] / f) - 1;
                    for (; !((c ^ d) & 1073741824);) A = A << 1 & 2147483647 | w(), c = c << 1 & 2147483647, d = d << 1 & 2147483647 | 1;
                    for (; c & ~d & 536870912;) A = 1073741824 & A | A << 1 & 1073741823 | w(), c = c << 1 ^ 1073741824, d = (1073741824 ^ d) << 1 | 1073741824 | 1;
                    E = c, S = 1 + d - c
                }
                let I = u - 4;
                return M.map(e => {
                    switch (e - I) {
                        case 3:
                            return I + 65792 + (t[c++] << 16 | t[c++] << 8 | t[c++]);
                        case 2:
                            return I + 256 + (t[c++] << 8 | t[c++]);
                        case 1:
                            return I + t[c++];
                        default:
                            return e - 1
                    }
                })
            }(function(t) {
                t = atob(t);
                let e = [];
                for (let u = 0; u < t.length; u++) e.push(t.charCodeAt(u));
                return Ot(e)
            }("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")), h = 0, () => l[h++]);
            Pr(tT), Pr(tT),
                function(t) {
                    let e = [];
                    for (;;) {
                        let u = t();
                        if (0 == u) break;
                        e.push(function(t, e) {
                            let u = 1 + e(),
                                f = e(),
                                h = function(t) {
                                    let e = [];
                                    for (;;) {
                                        let u = t();
                                        if (0 == u) break;
                                        e.push(u)
                                    }
                                    return e
                                }(e);
                            return ef(nf(h.length, 1 + t, e).map((t, e) => {
                                let l = t[0],
                                    c = t.slice(1);
                                return Array(h[e]).fill(void 0).map((t, e) => {
                                    let h = e * f;
                                    return [l + e * u, c.map(t => t + h)]
                                })
                            }))
                        }(u, t))
                    }
                    for (;;) {
                        let u = t() - 1;
                        if (u < 0) break;
                        e.push(nf(1 + t(), 1 + u, t).map(t => [t[0], t.slice(1)]))
                    }(function(t) {
                        let e = {};
                        for (let u = 0; u < t.length; u++) {
                            let f = t[u];
                            e[f[0]] = f[1]
                        }
                    })(ef(e))
                }(tT), f = Pr(tT).sort((t, e) => t - e),
                function r() {
                    let t = [];
                    for (;;) {
                        let e = Pr(tT, f);
                        if (0 == e.length) break;
                        t.push({
                            set: new Set(e),
                            node: r()
                        })
                    }
                    t.sort((t, e) => e.set.size - t.set.size);
                    let e = tT();
                    return {
                        branches: t,
                        valid: e % 3,
                        fe0f: !!(1 & (e = e / 3 | 0)),
                        save: 1 == (e >>= 1),
                        check: 2 == e
                    }
                }(), new L(tU);
            let tD = new Uint8Array(32);
            tD.fill(0);
            let tF = `Ethereum Signed Message:
`;

            function ff(t) {
                return "string" == typeof t && (t = Ei(t)), yi(function(t) {
                    let e = t.map(t => Ot(t)),
                        u = e.reduce((t, e) => t + e.length, 0),
                        f = new Uint8Array(u);
                    return e.reduce((t, e) => (f.set(e, t), t + e.length), 0), rr(f)
                }([Ei(tF), Ei(String(t.length)), t]))
            }
            new L("rlp/5.7.0");
            let tL = new L("address/5.7.0");

            function of (t) {
                Qt(t, 20) || tL.throwArgumentError("invalid address", "address", t), t = t.toLowerCase();
                let e = t.substring(2).split(""),
                    u = new Uint8Array(40);
                for (let t = 0; t < 40; t++) u[t] = e[t].charCodeAt(0);
                let f = Ot(yi(u));
                for (let t = 0; t < 40; t += 2) f[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()), (15 & f[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase());
                return "0x" + e.join("")
            }
            let tj = {};
            for (let t = 0; t < 10; t++) tj[String(t)] = String(t);
            for (let t = 0; t < 26; t++) tj[String.fromCharCode(65 + t)] = String(10 + t);
            let tz = Math.floor(Math.log10 ? Math.log10(9007199254740991) : Math.log(9007199254740991) / Math.LN10);

            function br(t, e, u) {
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    value: u,
                    writable: !1
                })
            }
            new L("properties/5.7.0"), new L(tU);
            let tq = new Uint8Array(32);
            tq.fill(0), V.from(-1);
            let tK = V.from(0),
                tH = V.from(1);
            V.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), oe(tH.toHexString(), 32), oe(tK.toHexString(), 32);
            var tQ = {},
                tY = {};

            function af(t, e) {
                if (!t) throw Error(e || "Assertion failed")
            }
            af.equal = function(t, e, u) {
                if (t != e) throw Error(u || "Assertion failed: " + t + " != " + e)
            };
            var tG = {
                exports: {}
            };
            "function" == typeof Object.create ? tG.exports = function(t, e) {
                e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : tG.exports = function(t, e) {
                if (e) {
                    t.super_ = e;
                    var i = function() {};
                    i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t
                }
            };
            var tJ = tG.exports;

            function uf(t) {
                return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
            }

            function hf(t) {
                return 1 === t.length ? "0" + t : t
            }

            function cf(t) {
                return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t
            }
            tY.inherits = tJ, tY.toArray = function(t, e) {
                if (Array.isArray(t)) return t.slice();
                if (!t) return [];
                var u = [];
                if ("string" == typeof t) {
                    if (e) {
                        if ("hex" === e)
                            for ((t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t), h = 0; h < t.length; h += 2) u.push(parseInt(t[h] + t[h + 1], 16))
                    } else
                        for (var f = 0, h = 0; h < t.length; h++) {
                            var l, c, d = t.charCodeAt(h);
                            d < 128 ? u[f++] = d : (d < 2048 ? u[f++] = d >> 6 | 192 : ((l = t, c = h, (64512 & l.charCodeAt(c)) != 55296 || c < 0 || c + 1 >= l.length || (64512 & l.charCodeAt(c + 1)) != 56320) ? u[f++] = d >> 12 | 224 : (d = 65536 + ((1023 & d) << 10) + (1023 & t.charCodeAt(++h)), u[f++] = d >> 18 | 240, u[f++] = d >> 12 & 63 | 128), u[f++] = d >> 6 & 63 | 128), u[f++] = 63 & d | 128)
                        }
                } else
                    for (h = 0; h < t.length; h++) u[h] = 0 | t[h];
                return u
            }, tY.toHex = function(t) {
                for (var e = "", u = 0; u < t.length; u++) e += hf(t[u].toString(16));
                return e
            }, tY.htonl = uf, tY.toHex32 = function(t, e) {
                for (var u = "", f = 0; f < t.length; f++) {
                    var h = t[f];
                    "little" === e && (h = uf(h)), u += cf(h.toString(16))
                }
                return u
            }, tY.zero2 = hf, tY.zero8 = cf, tY.join32 = function(t, e, u, f) {
                var h, l = u - e;
                af(l % 4 == 0);
                for (var c = Array(l / 4), d = 0, g = e; d < c.length; d++, g += 4) h = "big" === f ? t[g] << 24 | t[g + 1] << 16 | t[g + 2] << 8 | t[g + 3] : t[g + 3] << 24 | t[g + 2] << 16 | t[g + 1] << 8 | t[g], c[d] = h >>> 0;
                return c
            }, tY.split32 = function(t, e) {
                for (var u = Array(4 * t.length), f = 0, h = 0; f < t.length; f++, h += 4) {
                    var l = t[f];
                    "big" === e ? (u[h] = l >>> 24, u[h + 1] = l >>> 16 & 255, u[h + 2] = l >>> 8 & 255, u[h + 3] = 255 & l) : (u[h + 3] = l >>> 24, u[h + 2] = l >>> 16 & 255, u[h + 1] = l >>> 8 & 255, u[h] = 255 & l)
                }
                return u
            }, tY.rotr32 = function(t, e) {
                return t >>> e | t << 32 - e
            }, tY.rotl32 = function(t, e) {
                return t << e | t >>> 32 - e
            }, tY.sum32 = function(t, e) {
                return t + e >>> 0
            }, tY.sum32_3 = function(t, e, u) {
                return t + e + u >>> 0
            }, tY.sum32_4 = function(t, e, u, f) {
                return t + e + u + f >>> 0
            }, tY.sum32_5 = function(t, e, u, f, h) {
                return t + e + u + f + h >>> 0
            }, tY.sum64 = function(t, e, u, f) {
                var h = t[e],
                    l = f + t[e + 1] >>> 0;
                t[e] = (l < f ? 1 : 0) + u + h >>> 0, t[e + 1] = l
            }, tY.sum64_hi = function(t, e, u, f) {
                return (e + f >>> 0 < e ? 1 : 0) + t + u >>> 0
            }, tY.sum64_lo = function(t, e, u, f) {
                return e + f >>> 0
            }, tY.sum64_4_hi = function(t, e, u, f, h, l, c, d) {
                var g, A = e;
                return t + u + h + c + (0 + ((A = A + f >>> 0) < e ? 1 : 0) + ((A = A + l >>> 0) < l ? 1 : 0) + ((A = A + d >>> 0) < d ? 1 : 0)) >>> 0
            }, tY.sum64_4_lo = function(t, e, u, f, h, l, c, d) {
                return e + f + l + d >>> 0
            }, tY.sum64_5_hi = function(t, e, u, f, h, l, c, d, g, A) {
                var M, E = e;
                return t + u + h + c + g + (0 + ((E = E + f >>> 0) < e ? 1 : 0) + ((E = E + l >>> 0) < l ? 1 : 0) + ((E = E + d >>> 0) < d ? 1 : 0) + ((E = E + A >>> 0) < A ? 1 : 0)) >>> 0
            }, tY.sum64_5_lo = function(t, e, u, f, h, l, c, d, g, A) {
                return e + f + l + d + A >>> 0
            }, tY.rotr64_hi = function(t, e, u) {
                return (e << 32 - u | t >>> u) >>> 0
            }, tY.rotr64_lo = function(t, e, u) {
                return (t << 32 - u | e >>> u) >>> 0
            }, tY.shr64_hi = function(t, e, u) {
                return t >>> u
            }, tY.shr64_lo = function(t, e, u) {
                return (t << 32 - u | e >>> u) >>> 0
            };
            var tV = {};

            function Fr() {
                this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
            }
            tV.BlockHash = Fr, Fr.prototype.update = function(t, e) {
                if (t = tY.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
                    var u = (t = this.pending).length % this._delta8;
                    this.pending = t.slice(t.length - u, t.length), 0 === this.pending.length && (this.pending = null), t = tY.join32(t, 0, t.length - u, this.endian);
                    for (var f = 0; f < t.length; f += this._delta32) this._update(t, f, f + this._delta32)
                }
                return this
            }, Fr.prototype.digest = function(t) {
                return this.update(this._pad()), af(null === this.pending), this._digest(t)
            }, Fr.prototype._pad = function() {
                var t = this.pendingTotal,
                    e = this._delta8,
                    u = e - (t + this.padLength) % e,
                    f = Array(u + this.padLength);
                f[0] = 128;
                for (var h = 1; h < u; h++) f[h] = 0;
                if (t <<= 3, "big" === this.endian) {
                    for (var l = 8; l < this.padLength; l++) f[h++] = 0;
                    f[h++] = 0, f[h++] = 0, f[h++] = 0, f[h++] = 0, f[h++] = t >>> 24 & 255, f[h++] = t >>> 16 & 255, f[h++] = t >>> 8 & 255, f[h++] = 255 & t
                } else
                    for (f[h++] = 255 & t, f[h++] = t >>> 8 & 255, f[h++] = t >>> 16 & 255, f[h++] = t >>> 24 & 255, f[h++] = 0, f[h++] = 0, f[h++] = 0, f[h++] = 0, l = 8; l < this.padLength; l++) f[h++] = 0;
                return f
            };
            var tW = {},
                tX = {},
                tZ = tY.rotr32;

            function pf(t, e, u) {
                return t & e ^ t & u ^ e & u
            }
            tX.ft_1 = function(t, e, u, f) {
                return 0 === t ? e & u ^ ~e & f : 1 === t || 3 === t ? e ^ u ^ f : 2 === t ? pf(e, u, f) : void 0
            }, tX.ch32 = function(t, e, u) {
                return t & e ^ ~t & u
            }, tX.maj32 = pf, tX.p32 = function(t, e, u) {
                return t ^ e ^ u
            }, tX.s0_256 = function(t) {
                return tZ(t, 2) ^ tZ(t, 13) ^ tZ(t, 22)
            }, tX.s1_256 = function(t) {
                return tZ(t, 6) ^ tZ(t, 11) ^ tZ(t, 25)
            }, tX.g0_256 = function(t) {
                return tZ(t, 7) ^ tZ(t, 18) ^ t >>> 3
            }, tX.g1_256 = function(t) {
                return tZ(t, 17) ^ tZ(t, 19) ^ t >>> 10
            };
            var t$ = tY.rotl32,
                t0 = tY.sum32,
                t1 = tY.sum32_5,
                t2 = tX.ft_1,
                t3 = tV.BlockHash,
                t6 = [1518500249, 1859775393, 2400959708, 3395469782];

            function he() {
                if (!(this instanceof he)) return new he;
                t3.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = Array(80)
            }
            tY.inherits(he, t3), he.blockSize = 512, he.outSize = 160, he.hmacStrength = 80, he.padLength = 64, he.prototype._update = function(t, e) {
                for (var u = this.W, f = 0; f < 16; f++) u[f] = t[e + f];
                for (; f < u.length; f++) u[f] = t$(u[f - 3] ^ u[f - 8] ^ u[f - 14] ^ u[f - 16], 1);
                var h = this.h[0],
                    l = this.h[1],
                    c = this.h[2],
                    d = this.h[3],
                    g = this.h[4];
                for (f = 0; f < u.length; f++) {
                    var A = ~~(f / 20),
                        M = t1(t$(h, 5), t2(A, l, c, d), g, u[f], t6[A]);
                    g = d, d = c, c = t$(l, 30), l = h, h = M
                }
                this.h[0] = t0(this.h[0], h), this.h[1] = t0(this.h[1], l), this.h[2] = t0(this.h[2], c), this.h[3] = t0(this.h[3], d), this.h[4] = t0(this.h[4], g)
            }, he.prototype._digest = function(t) {
                return "hex" === t ? tY.toHex32(this.h, "big") : tY.split32(this.h, "big")
            };
            var t8 = tY.sum32,
                t4 = tY.sum32_4,
                t5 = tY.sum32_5,
                t7 = tX.ch32,
                t9 = tX.maj32,
                et = tX.s0_256,
                ee = tX.s1_256,
                ei = tX.g0_256,
                es = tX.g1_256,
                eu = tV.BlockHash,
                ea = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

            function ce() {
                if (!(this instanceof ce)) return new ce;
                eu.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = ea, this.W = Array(64)
            }

            function ye() {
                if (!(this instanceof ye)) return new ye;
                ce.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
            }
            tY.inherits(ce, eu), ce.blockSize = 512, ce.outSize = 256, ce.hmacStrength = 192, ce.padLength = 64, ce.prototype._update = function(t, e) {
                for (var u = this.W, f = 0; f < 16; f++) u[f] = t[e + f];
                for (; f < u.length; f++) u[f] = t4(es(u[f - 2]), u[f - 7], ei(u[f - 15]), u[f - 16]);
                var h = this.h[0],
                    l = this.h[1],
                    c = this.h[2],
                    d = this.h[3],
                    g = this.h[4],
                    A = this.h[5],
                    M = this.h[6],
                    E = this.h[7];
                for (af(this.k.length === u.length), f = 0; f < u.length; f++) {
                    var S = t5(E, ee(g), t7(g, A, M), this.k[f], u[f]),
                        I = t8(et(h), t9(h, l, c));
                    E = M, M = A, A = g, g = t8(d, S), d = c, c = l, l = h, h = t8(S, I)
                }
                this.h[0] = t8(this.h[0], h), this.h[1] = t8(this.h[1], l), this.h[2] = t8(this.h[2], c), this.h[3] = t8(this.h[3], d), this.h[4] = t8(this.h[4], g), this.h[5] = t8(this.h[5], A), this.h[6] = t8(this.h[6], M), this.h[7] = t8(this.h[7], E)
            }, ce.prototype._digest = function(t) {
                return "hex" === t ? tY.toHex32(this.h, "big") : tY.split32(this.h, "big")
            }, tY.inherits(ye, ce), ye.blockSize = 512, ye.outSize = 224, ye.hmacStrength = 192, ye.padLength = 64, ye.prototype._digest = function(t) {
                return "hex" === t ? tY.toHex32(this.h.slice(0, 7), "big") : tY.split32(this.h.slice(0, 7), "big")
            };
            var el = tY.rotr64_hi,
                ec = tY.rotr64_lo,
                ed = tY.shr64_hi,
                ep = tY.shr64_lo,
                em = tY.sum64,
                eg = tY.sum64_hi,
                ev = tY.sum64_lo,
                eA = tY.sum64_4_hi,
                ey = tY.sum64_4_lo,
                eb = tY.sum64_5_hi,
                ew = tY.sum64_5_lo,
                eM = tV.BlockHash,
                eE = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

            function ne() {
                if (!(this instanceof ne)) return new ne;
                eM.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = eE, this.W = Array(160)
            }

            function we() {
                if (!(this instanceof we)) return new we;
                ne.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
            }
            tY.inherits(ne, eM), ne.blockSize = 1024, ne.outSize = 512, ne.hmacStrength = 192, ne.padLength = 128, ne.prototype._prepareBlock = function(t, e) {
                for (var u = this.W, f = 0; f < 32; f++) u[f] = t[e + f];
                for (; f < u.length; f += 2) {
                    var h = function(t, e) {
                            var u = el(t, e, 19) ^ el(e, t, 29) ^ ed(t, e, 6);
                            return u < 0 && (u += 4294967296), u
                        }(u[f - 4], u[f - 3]),
                        l = function(t, e) {
                            var u = ec(t, e, 19) ^ ec(e, t, 29) ^ ep(t, e, 6);
                            return u < 0 && (u += 4294967296), u
                        }(u[f - 4], u[f - 3]),
                        c = u[f - 14],
                        d = u[f - 13],
                        g = function(t, e) {
                            var u = el(t, e, 1) ^ el(t, e, 8) ^ ed(t, e, 7);
                            return u < 0 && (u += 4294967296), u
                        }(u[f - 30], u[f - 29]),
                        A = function(t, e) {
                            var u = ec(t, e, 1) ^ ec(t, e, 8) ^ ep(t, e, 7);
                            return u < 0 && (u += 4294967296), u
                        }(u[f - 30], u[f - 29]),
                        M = u[f - 32],
                        E = u[f - 31];
                    u[f] = eA(h, l, c, d, g, A, M, E), u[f + 1] = ey(h, l, c, d, g, A, M, E)
                }
            }, ne.prototype._update = function(t, e) {
                this._prepareBlock(t, e);
                var u = this.W,
                    f = this.h[0],
                    h = this.h[1],
                    l = this.h[2],
                    c = this.h[3],
                    d = this.h[4],
                    g = this.h[5],
                    A = this.h[6],
                    M = this.h[7],
                    E = this.h[8],
                    S = this.h[9],
                    I = this.h[10],
                    N = this.h[11],
                    B = this.h[12],
                    C = this.h[13],
                    _ = this.h[14],
                    O = this.h[15];
                af(this.k.length === u.length);
                for (var x = 0; x < u.length; x += 2) {
                    var R = _,
                        P = O,
                        T = function(t, e) {
                            var u = el(t, e, 14) ^ el(t, e, 18) ^ el(e, t, 9);
                            return u < 0 && (u += 4294967296), u
                        }(E, S),
                        D = function(t, e) {
                            var u = ec(t, e, 14) ^ ec(t, e, 18) ^ ec(e, t, 9);
                            return u < 0 && (u += 4294967296), u
                        }(E, S),
                        F = function(t, e, u, f, h) {
                            var l = t & u ^ ~t & h;
                            return l < 0 && (l += 4294967296), l
                        }(E, 0, I, 0, B),
                        q = function(t, e, u, f, h, l) {
                            var c = e & f ^ ~e & l;
                            return c < 0 && (c += 4294967296), c
                        }(0, S, 0, N, 0, C),
                        K = this.k[x],
                        Q = this.k[x + 1],
                        X = u[x],
                        Z = u[x + 1],
                        $ = eb(R, P, T, D, F, q, K, Q, X, Z),
                        tt = ew(R, P, T, D, F, q, K, Q, X, Z);
                    R = function(t, e) {
                        var u = el(t, e, 28) ^ el(e, t, 2) ^ el(e, t, 7);
                        return u < 0 && (u += 4294967296), u
                    }(f, h);
                    var te = eg(R, P = function(t, e) {
                            var u = ec(t, e, 28) ^ ec(e, t, 2) ^ ec(e, t, 7);
                            return u < 0 && (u += 4294967296), u
                        }(f, h), T = function(t, e, u, f, h) {
                            var l = t & u ^ t & h ^ u & h;
                            return l < 0 && (l += 4294967296), l
                        }(f, 0, l, 0, d), D = function(t, e, u, f, h, l) {
                            var c = e & f ^ e & l ^ f & l;
                            return c < 0 && (c += 4294967296), c
                        }(0, h, 0, c, 0, g)),
                        ti = ev(R, P, T, D);
                    _ = B, O = C, B = I, C = N, I = E, N = S, E = eg(A, M, $, tt), S = ev(M, M, $, tt), A = d, M = g, d = l, g = c, l = f, c = h, f = eg($, tt, te, ti), h = ev($, tt, te, ti)
                }
                em(this.h, 0, f, h), em(this.h, 2, l, c), em(this.h, 4, d, g), em(this.h, 6, A, M), em(this.h, 8, E, S), em(this.h, 10, I, N), em(this.h, 12, B, C), em(this.h, 14, _, O)
            }, ne.prototype._digest = function(t) {
                return "hex" === t ? tY.toHex32(this.h, "big") : tY.split32(this.h, "big")
            }, tY.inherits(we, ne), we.blockSize = 1024, we.outSize = 384, we.hmacStrength = 192, we.padLength = 128, we.prototype._digest = function(t) {
                return "hex" === t ? tY.toHex32(this.h.slice(0, 12), "big") : tY.split32(this.h.slice(0, 12), "big")
            }, tW.sha1 = he, tW.sha224 = ye, tW.sha256 = ce, tW.sha384 = we, tW.sha512 = ne;
            var eS = {},
                eI = tY.rotl32,
                eN = tY.sum32,
                eB = tY.sum32_3,
                eC = tY.sum32_4,
                e_ = tV.BlockHash;

            function pe() {
                if (!(this instanceof pe)) return new pe;
                e_.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
            }

            function Bf(t, e, u, f) {
                return t <= 15 ? e ^ u ^ f : t <= 31 ? e & u | ~e & f : t <= 47 ? (e | ~u) ^ f : t <= 63 ? e & f | u & ~f : e ^ (u | ~f)
            }
            tY.inherits(pe, e_), eS.ripemd160 = pe, pe.blockSize = 512, pe.outSize = 160, pe.hmacStrength = 192, pe.padLength = 64, pe.prototype._update = function(t, e) {
                for (var u = this.h[0], f = this.h[1], h = this.h[2], l = this.h[3], c = this.h[4], d = u, g = f, A = h, M = l, E = c, S = 0; S < 80; S++) {
                    var I, N, B = eN(eI(eC(u, Bf(S, f, h, l), t[eO[S] + e], (I = S) <= 15 ? 0 : I <= 31 ? 1518500249 : I <= 47 ? 1859775393 : I <= 63 ? 2400959708 : 2840853838), eR[S]), c);
                    u = c, c = l, l = eI(h, 10), h = f, f = B, B = eN(eI(eC(d, Bf(79 - S, g, A, M), t[ex[S] + e], (N = S) <= 15 ? 1352829926 : N <= 31 ? 1548603684 : N <= 47 ? 1836072691 : N <= 63 ? 2053994217 : 0), ek[S]), E), d = E, E = M, M = eI(A, 10), A = g, g = B
                }
                B = eB(this.h[1], h, M), this.h[1] = eB(this.h[2], l, E), this.h[2] = eB(this.h[3], c, d), this.h[3] = eB(this.h[4], u, g), this.h[4] = eB(this.h[0], f, A), this.h[0] = B
            }, pe.prototype._digest = function(t) {
                return "hex" === t ? tY.toHex32(this.h, "little") : tY.split32(this.h, "little")
            };
            var eO = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                ex = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                eR = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                ek = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];

            function hr(t, e, u) {
                if (!(this instanceof hr)) return new hr(t, e, u);
                this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(tY.toArray(e, u))
            }

            function cr(t, e, u) {
                return t(u = {
                    path: e,
                    exports: {},
                    require: function(t, e) {
                        return function() {
                            throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                        }(t, e ? ? u.path)
                    }
                }, u.exports), u.exports
            }
            hr.prototype._init = function(t) {
                t.length > this.blockSize && (t = new this.Hash().update(t).digest()), af(t.length <= this.blockSize);
                for (var e = t.length; e < this.blockSize; e++) t.push(0);
                for (e = 0; e < t.length; e++) t[e] ^= 54;
                for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++) t[e] ^= 106;
                this.outer = new this.Hash().update(t)
            }, hr.prototype.update = function(t, e) {
                return this.inner.update(t, e), this
            }, hr.prototype.digest = function(t) {
                return this.outer.update(this.inner.digest()), this.outer.digest(t)
            }, tQ.utils = tY, tQ.common = tV, tQ.sha = tW, tQ.ripemd = eS, tQ.hmac = hr, tQ.sha1 = tQ.sha.sha1, tQ.sha256 = tQ.sha.sha256, tQ.sha224 = tQ.sha.sha224, tQ.sha384 = tQ.sha.sha384, tQ.sha512 = tQ.sha.sha512, tQ.ripemd160 = tQ.ripemd.ripemd160;
            var eP = Cf;

            function Cf(t, e) {
                if (!t) throw Error(e || "Assertion failed")
            }
            Cf.equal = function(t, e, u) {
                if (t != e) throw Error(u || "Assertion failed: " + t + " != " + e)
            };
            var eU = cr(function(t, e) {
                    function n(t) {
                        return 1 === t.length ? "0" + t : t
                    }

                    function o(t) {
                        for (var e = "", u = 0; u < t.length; u++) e += n(t[u].toString(16));
                        return e
                    }
                    e.toArray = function(t, e) {
                        if (Array.isArray(t)) return t.slice();
                        if (!t) return [];
                        var u = [];
                        if ("string" != typeof t) {
                            for (var f = 0; f < t.length; f++) u[f] = 0 | t[f];
                            return u
                        }
                        if ("hex" === e) {
                            (t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t);
                            for (var f = 0; f < t.length; f += 2) u.push(parseInt(t[f] + t[f + 1], 16))
                        } else
                            for (var f = 0; f < t.length; f++) {
                                var h = t.charCodeAt(f),
                                    l = h >> 8,
                                    c = 255 & h;
                                l ? u.push(l, c) : u.push(c)
                            }
                        return u
                    }, e.zero2 = n, e.toHex = o, e.encode = function(t, e) {
                        return "hex" === e ? o(t) : t
                    }
                }),
                eT = cr(function(t, e) {
                    e.assert = eP, e.toArray = eU.toArray, e.zero2 = eU.zero2, e.toHex = eU.toHex, e.encode = eU.encode, e.getNAF = function(t, e, u) {
                        var f = Array(Math.max(t.bitLength(), u) + 1);
                        f.fill(0);
                        for (var h = 1 << e + 1, l = t.clone(), c = 0; c < f.length; c++) {
                            var d, g = l.andln(h - 1);
                            l.isOdd() ? (d = g > (h >> 1) - 1 ? (h >> 1) - g : g, l.isubn(d)) : d = 0, f[c] = d, l.iushrn(1)
                        }
                        return f
                    }, e.getJSF = function(t, e) {
                        var u = [
                            [],
                            []
                        ];
                        t = t.clone(), e = e.clone();
                        for (var f, h = 0, l = 0; t.cmpn(-h) > 0 || e.cmpn(-l) > 0;) {
                            var c, d, g = t.andln(3) + h & 3,
                                A = e.andln(3) + l & 3;
                            3 === g && (g = -1), 3 === A && (A = -1), c = 1 & g ? (3 == (f = t.andln(7) + h & 7) || 5 === f) && 2 === A ? -g : g : 0, u[0].push(c), d = 1 & A ? (3 == (f = e.andln(7) + l & 7) || 5 === f) && 2 === g ? -A : A : 0, u[1].push(d), 2 * h === c + 1 && (h = 1 - h), 2 * l === d + 1 && (l = 1 - l), t.iushrn(1), e.iushrn(1)
                        }
                        return u
                    }, e.cachedProperty = function(t, e, u) {
                        var f = "_" + e;
                        t.prototype[e] = function() {
                            return void 0 !== this[f] ? this[f] : this[f] = u.call(this)
                        }
                    }, e.parseBytes = function(t) {
                        return "string" == typeof t ? e.toArray(t, "hex") : t
                    }, e.intFromLE = function(t) {
                        return new tw(t, "hex", "le")
                    }
                }),
                eD = eT.getNAF,
                eF = eT.getJSF,
                eL = eT.assert;

            function Ce(t, e) {
                this.type = t, this.p = new tw(e.p, 16), this.red = e.prime ? tw.red(e.prime) : tw.mont(this.p), this.zero = new tw(0).toRed(this.red), this.one = new tw(1).toRed(this.red), this.two = new tw(2).toRed(this.red), this.n = e.n && new tw(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = [, , , , ], this._wnafT2 = [, , , , ], this._wnafT3 = [, , , , ], this._wnafT4 = [, , , , ], this._bitLength = this.n ? this.n.bitLength() : 0;
                var u = this.n && this.p.div(this.n);
                !u || u.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }

            function Xt(t, e) {
                this.curve = t, this.type = e, this.precomputed = null
            }
            Ce.prototype.point = function() {
                throw Error("Not implemented")
            }, Ce.prototype.validate = function() {
                throw Error("Not implemented")
            }, Ce.prototype._fixedNafMul = function(t, e) {
                eL(t.precomputed);
                var u = t._getDoubles(),
                    f = eD(e, 1, this._bitLength),
                    h = (1 << u.step + 1) - (u.step % 2 == 0 ? 2 : 1);
                h /= 3;
                var l, c, d = [];
                for (l = 0; l < f.length; l += u.step) {
                    c = 0;
                    for (var g = l + u.step - 1; g >= l; g--) c = (c << 1) + f[g];
                    d.push(c)
                }
                for (var A = this.jpoint(null, null, null), M = this.jpoint(null, null, null), E = h; E > 0; E--) {
                    for (l = 0; l < d.length; l++)(c = d[l]) === E ? M = M.mixedAdd(u.points[l]) : c === -E && (M = M.mixedAdd(u.points[l].neg()));
                    A = A.add(M)
                }
                return A.toP()
            }, Ce.prototype._wnafMul = function(t, e) {
                var u = 4,
                    f = t._getNAFPoints(u);
                u = f.wnd;
                for (var h = f.points, l = eD(e, u, this._bitLength), c = this.jpoint(null, null, null), d = l.length - 1; d >= 0; d--) {
                    for (var g = 0; d >= 0 && 0 === l[d]; d--) g++;
                    if (d >= 0 && g++, c = c.dblp(g), d < 0) break;
                    var A = l[d];
                    eL(0 !== A), c = "affine" === t.type ? A > 0 ? c.mixedAdd(h[A - 1 >> 1]) : c.mixedAdd(h[-A - 1 >> 1].neg()) : A > 0 ? c.add(h[A - 1 >> 1]) : c.add(h[-A - 1 >> 1].neg())
                }
                return "affine" === t.type ? c.toP() : c
            }, Ce.prototype._wnafMulAdd = function(t, e, u, f, h) {
                var l, c, d, g = this._wnafT1,
                    A = this._wnafT2,
                    M = this._wnafT3,
                    E = 0;
                for (l = 0; l < f; l++) {
                    var S = (d = e[l])._getNAFPoints(t);
                    g[l] = S.wnd, A[l] = S.points
                }
                for (l = f - 1; l >= 1; l -= 2) {
                    var I = l - 1,
                        N = l;
                    if (1 !== g[I] || 1 !== g[N]) {
                        M[I] = eD(u[I], g[I], this._bitLength), M[N] = eD(u[N], g[N], this._bitLength), E = Math.max(M[I].length, E), E = Math.max(M[N].length, E);
                        continue
                    }
                    var B = [e[I], null, null, e[N]];
                    0 === e[I].y.cmp(e[N].y) ? (B[1] = e[I].add(e[N]), B[2] = e[I].toJ().mixedAdd(e[N].neg())) : 0 === e[I].y.cmp(e[N].y.redNeg()) ? (B[1] = e[I].toJ().mixedAdd(e[N]), B[2] = e[I].add(e[N].neg())) : (B[1] = e[I].toJ().mixedAdd(e[N]), B[2] = e[I].toJ().mixedAdd(e[N].neg()));
                    var C = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                        _ = eF(u[I], u[N]);
                    for (E = Math.max(_[0].length, E), M[I] = Array(E), M[N] = Array(E), c = 0; c < E; c++) {
                        var O = 0 | _[0][c],
                            x = 0 | _[1][c];
                        M[I][c] = C[(O + 1) * 3 + (x + 1)], M[N][c] = 0, A[I] = B
                    }
                }
                var R = this.jpoint(null, null, null),
                    P = this._wnafT4;
                for (l = E; l >= 0; l--) {
                    for (var T = 0; l >= 0;) {
                        var D = !0;
                        for (c = 0; c < f; c++) P[c] = 0 | M[c][l], 0 !== P[c] && (D = !1);
                        if (!D) break;
                        T++, l--
                    }
                    if (l >= 0 && T++, R = R.dblp(T), l < 0) break;
                    for (c = 0; c < f; c++) {
                        var F = P[c];
                        0 !== F && (F > 0 ? d = A[c][F - 1 >> 1] : F < 0 && (d = A[c][-F - 1 >> 1].neg()), R = "affine" === d.type ? R.mixedAdd(d) : R.add(d))
                    }
                }
                for (l = 0; l < f; l++) A[l] = null;
                return h ? R : R.toP()
            }, Ce.BasePoint = Xt, Xt.prototype.eq = function() {
                throw Error("Not implemented")
            }, Xt.prototype.validate = function() {
                return this.curve.validate(this)
            }, Ce.prototype.decodePoint = function(t, e) {
                t = eT.toArray(t, e);
                var u = this.p.byteLength();
                if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * u) return 6 === t[0] ? eL(t[t.length - 1] % 2 == 0) : 7 === t[0] && eL(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + u), t.slice(1 + u, 1 + 2 * u));
                if ((2 === t[0] || 3 === t[0]) && t.length - 1 === u) return this.pointFromX(t.slice(1, 1 + u), 3 === t[0]);
                throw Error("Unknown point format")
            }, Xt.prototype.encodeCompressed = function(t) {
                return this.encode(t, !0)
            }, Xt.prototype._encode = function(t) {
                var e = this.curve.p.byteLength(),
                    u = this.getX().toArray("be", e);
                return t ? [this.getY().isEven() ? 2 : 3].concat(u) : [4].concat(u, this.getY().toArray("be", e))
            }, Xt.prototype.encode = function(t, e) {
                return eT.encode(this._encode(e), t)
            }, Xt.prototype.precompute = function(t) {
                if (this.precomputed) return this;
                var e = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this
            }, Xt.prototype._hasDoubles = function(t) {
                if (!this.precomputed) return !1;
                var e = this.precomputed.doubles;
                return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
            }, Xt.prototype._getDoubles = function(t, e) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var u = [this], f = this, h = 0; h < e; h += t) {
                    for (var l = 0; l < t; l++) f = f.dbl();
                    u.push(f)
                }
                return {
                    step: t,
                    points: u
                }
            }, Xt.prototype._getNAFPoints = function(t) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var e = [this], u = (1 << t) - 1, f = 1 === u ? null : this.dbl(), h = 1; h < u; h++) e[h] = e[h - 1].add(f);
                return {
                    wnd: t,
                    points: e
                }
            }, Xt.prototype._getBeta = function() {
                return null
            }, Xt.prototype.dblp = function(t) {
                for (var e = this, u = 0; u < t; u++) e = e.dbl();
                return e
            };
            var ej = cr(function(t) {
                    "function" == typeof Object.create ? t.exports = function(t, e) {
                        e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }))
                    } : t.exports = function(t, e) {
                        if (e) {
                            t.super_ = e;
                            var n = function() {};
                            n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
                        }
                    }
                }),
                ez = eT.assert;

            function Zt(t) {
                Ce.call(this, "short", t), this.a = new tw(t.a, 16).toRed(this.red), this.b = new tw(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = [, , , , ], this._endoWnafT2 = [, , , , ]
            }

            function Ft(t, e, u, f) {
                Ce.BasePoint.call(this, t, "affine"), null === e && null === u ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new tw(e, 16), this.y = new tw(u, 16), f && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function Tt(t, e, u, f) {
                Ce.BasePoint.call(this, t, "jacobian"), null === e && null === u && null === f ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new tw(0)) : (this.x = new tw(e, 16), this.y = new tw(u, 16), this.z = new tw(f, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            ej(Zt, Ce), Zt.prototype._getEndomorphism = function(t) {
                if (!(!this.zeroA || !this.g || !this.n || 1 !== this.p.modn(3))) {
                    if (t.beta) e = new tw(t.beta, 16).toRed(this.red);
                    else {
                        var e, u, f, h = this._getEndoRoots(this.p);
                        e = (e = 0 > h[0].cmp(h[1]) ? h[0] : h[1]).toRed(this.red)
                    }
                    if (t.lambda) u = new tw(t.lambda, 16);
                    else {
                        var l = this._getEndoRoots(this.n);
                        0 === this.g.mul(l[0]).x.cmp(this.g.x.redMul(e)) ? u = l[0] : (u = l[1], ez(0 === this.g.mul(u).x.cmp(this.g.x.redMul(e))))
                    }
                    return f = t.basis ? t.basis.map(function(t) {
                        return {
                            a: new tw(t.a, 16),
                            b: new tw(t.b, 16)
                        }
                    }) : this._getEndoBasis(u), {
                        beta: e,
                        lambda: u,
                        basis: f
                    }
                }
            }, Zt.prototype._getEndoRoots = function(t) {
                var e = t === this.p ? this.red : tw.mont(t),
                    u = new tw(2).toRed(e).redInvm(),
                    f = u.redNeg(),
                    h = new tw(3).toRed(e).redNeg().redSqrt().redMul(u);
                return [f.redAdd(h).fromRed(), f.redSub(h).fromRed()]
            }, Zt.prototype._getEndoBasis = function(t) {
                for (var e, u, f, h, l, c, d, g, A, M = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), E = t, S = this.n.clone(), I = new tw(1), N = new tw(0), B = new tw(0), C = new tw(1), _ = 0; 0 !== E.cmpn(0);) {
                    var O = S.div(E);
                    g = S.sub(O.mul(E)), A = B.sub(O.mul(I));
                    var x = C.sub(O.mul(N));
                    if (!f && 0 > g.cmp(M)) e = d.neg(), u = I, f = g.neg(), h = A;
                    else if (f && 2 == ++_) break;
                    d = g, S = E, E = g, B = I, I = A, C = N, N = x
                }
                l = g.neg(), c = A;
                var R = f.sqr().add(h.sqr());
                return l.sqr().add(c.sqr()).cmp(R) >= 0 && (l = e, c = u), f.negative && (f = f.neg(), h = h.neg()), l.negative && (l = l.neg(), c = c.neg()), [{
                    a: f,
                    b: h
                }, {
                    a: l,
                    b: c
                }]
            }, Zt.prototype._endoSplit = function(t) {
                var e = this.endo.basis,
                    u = e[0],
                    f = e[1],
                    h = f.b.mul(t).divRound(this.n),
                    l = u.b.neg().mul(t).divRound(this.n),
                    c = h.mul(u.a),
                    d = l.mul(f.a),
                    g = h.mul(u.b),
                    A = l.mul(f.b);
                return {
                    k1: t.sub(c).sub(d),
                    k2: g.add(A).neg()
                }
            }, Zt.prototype.pointFromX = function(t, e) {
                (t = new tw(t, 16)).red || (t = t.toRed(this.red));
                var u = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                    f = u.redSqrt();
                if (0 !== f.redSqr().redSub(u).cmp(this.zero)) throw Error("invalid point");
                var h = f.fromRed().isOdd();
                return (e && !h || !e && h) && (f = f.redNeg()), this.point(t, f)
            }, Zt.prototype.validate = function(t) {
                if (t.inf) return !0;
                var e = t.x,
                    u = t.y,
                    f = this.a.redMul(e),
                    h = e.redSqr().redMul(e).redIAdd(f).redIAdd(this.b);
                return 0 === u.redSqr().redISub(h).cmpn(0)
            }, Zt.prototype._endoWnafMulAdd = function(t, e, u) {
                for (var f = this._endoWnafT1, h = this._endoWnafT2, l = 0; l < t.length; l++) {
                    var c = this._endoSplit(e[l]),
                        d = t[l],
                        g = d._getBeta();
                    c.k1.negative && (c.k1.ineg(), d = d.neg(!0)), c.k2.negative && (c.k2.ineg(), g = g.neg(!0)), f[2 * l] = d, f[2 * l + 1] = g, h[2 * l] = c.k1, h[2 * l + 1] = c.k2
                }
                for (var A = this._wnafMulAdd(1, f, h, 2 * l, u), M = 0; M < 2 * l; M++) f[M] = null, h[M] = null;
                return A
            }, ej(Ft, Ce.BasePoint), Zt.prototype.point = function(t, e, u) {
                return new Ft(this, t, e, u)
            }, Zt.prototype.pointFromJSON = function(t, e) {
                return Ft.fromJSON(this, t, e)
            }, Ft.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var t = this.precomputed;
                    if (t && t.beta) return t.beta;
                    var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (t) {
                        var u = this.curve,
                            n = function(t) {
                                return u.point(t.x.redMul(u.endo.beta), t.y)
                            };
                        t.beta = e, e.precomputed = {
                            beta: null,
                            naf: t.naf && {
                                wnd: t.naf.wnd,
                                points: t.naf.points.map(n)
                            },
                            doubles: t.doubles && {
                                step: t.doubles.step,
                                points: t.doubles.points.map(n)
                            }
                        }
                    }
                    return e
                }
            }, Ft.prototype.toJSON = function() {
                return this.precomputed ? [this.x, this.y, this.precomputed && {
                    doubles: this.precomputed.doubles && {
                        step: this.precomputed.doubles.step,
                        points: this.precomputed.doubles.points.slice(1)
                    },
                    naf: this.precomputed.naf && {
                        wnd: this.precomputed.naf.wnd,
                        points: this.precomputed.naf.points.slice(1)
                    }
                }] : [this.x, this.y]
            }, Ft.fromJSON = function(t, e, u) {
                "string" == typeof e && (e = JSON.parse(e));
                var f = t.point(e[0], e[1], u);
                if (!e[2]) return f;

                function o(e) {
                    return t.point(e[0], e[1], u)
                }
                var h = e[2];
                return f.precomputed = {
                    beta: null,
                    doubles: h.doubles && {
                        step: h.doubles.step,
                        points: [f].concat(h.doubles.points.map(o))
                    },
                    naf: h.naf && {
                        wnd: h.naf.wnd,
                        points: [f].concat(h.naf.points.map(o))
                    }
                }, f
            }, Ft.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, Ft.prototype.isInfinity = function() {
                return this.inf
            }, Ft.prototype.add = function(t) {
                if (this.inf) return t;
                if (t.inf) return this;
                if (this.eq(t)) return this.dbl();
                if (this.neg().eq(t) || 0 === this.x.cmp(t.x)) return this.curve.point(null, null);
                var e = this.y.redSub(t.y);
                0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
                var u = e.redSqr().redISub(this.x).redISub(t.x),
                    f = e.redMul(this.x.redSub(u)).redISub(this.y);
                return this.curve.point(u, f)
            }, Ft.prototype.dbl = function() {
                if (this.inf) return this;
                var t = this.y.redAdd(this.y);
                if (0 === t.cmpn(0)) return this.curve.point(null, null);
                var e = this.curve.a,
                    u = this.x.redSqr(),
                    f = t.redInvm(),
                    h = u.redAdd(u).redIAdd(u).redIAdd(e).redMul(f),
                    l = h.redSqr().redISub(this.x.redAdd(this.x)),
                    c = h.redMul(this.x.redSub(l)).redISub(this.y);
                return this.curve.point(l, c)
            }, Ft.prototype.getX = function() {
                return this.x.fromRed()
            }, Ft.prototype.getY = function() {
                return this.y.fromRed()
            }, Ft.prototype.mul = function(t) {
                return t = new tw(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
            }, Ft.prototype.mulAdd = function(t, e, u) {
                var f = [this, e],
                    h = [t, u];
                return this.curve.endo ? this.curve._endoWnafMulAdd(f, h) : this.curve._wnafMulAdd(1, f, h, 2)
            }, Ft.prototype.jmulAdd = function(t, e, u) {
                var f = [this, e],
                    h = [t, u];
                return this.curve.endo ? this.curve._endoWnafMulAdd(f, h, !0) : this.curve._wnafMulAdd(1, f, h, 2, !0)
            }, Ft.prototype.eq = function(t) {
                return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
            }, Ft.prototype.neg = function(t) {
                if (this.inf) return this;
                var e = this.curve.point(this.x, this.y.redNeg());
                if (t && this.precomputed) {
                    var u = this.precomputed,
                        n = function(t) {
                            return t.neg()
                        };
                    e.precomputed = {
                        naf: u.naf && {
                            wnd: u.naf.wnd,
                            points: u.naf.points.map(n)
                        },
                        doubles: u.doubles && {
                            step: u.doubles.step,
                            points: u.doubles.points.map(n)
                        }
                    }
                }
                return e
            }, Ft.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, ej(Tt, Ce.BasePoint), Zt.prototype.jpoint = function(t, e, u) {
                return new Tt(this, t, e, u)
            }, Tt.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var t = this.z.redInvm(),
                    e = t.redSqr(),
                    u = this.x.redMul(e),
                    f = this.y.redMul(e).redMul(t);
                return this.curve.point(u, f)
            }, Tt.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, Tt.prototype.add = function(t) {
                if (this.isInfinity()) return t;
                if (t.isInfinity()) return this;
                var e = t.z.redSqr(),
                    u = this.z.redSqr(),
                    f = this.x.redMul(e),
                    h = t.x.redMul(u),
                    l = this.y.redMul(e.redMul(t.z)),
                    c = t.y.redMul(u.redMul(this.z)),
                    d = f.redSub(h),
                    g = l.redSub(c);
                if (0 === d.cmpn(0)) return 0 !== g.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var A = d.redSqr(),
                    M = A.redMul(d),
                    E = f.redMul(A),
                    S = g.redSqr().redIAdd(M).redISub(E).redISub(E),
                    I = g.redMul(E.redISub(S)).redISub(l.redMul(M)),
                    N = this.z.redMul(t.z).redMul(d);
                return this.curve.jpoint(S, I, N)
            }, Tt.prototype.mixedAdd = function(t) {
                if (this.isInfinity()) return t.toJ();
                if (t.isInfinity()) return this;
                var e = this.z.redSqr(),
                    u = this.x,
                    f = t.x.redMul(e),
                    h = this.y,
                    l = t.y.redMul(e).redMul(this.z),
                    c = u.redSub(f),
                    d = h.redSub(l);
                if (0 === c.cmpn(0)) return 0 !== d.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var g = c.redSqr(),
                    A = g.redMul(c),
                    M = u.redMul(g),
                    E = d.redSqr().redIAdd(A).redISub(M).redISub(M),
                    S = d.redMul(M.redISub(E)).redISub(h.redMul(A)),
                    I = this.z.redMul(c);
                return this.curve.jpoint(E, S, I)
            }, Tt.prototype.dblp = function(t) {
                if (0 === t || this.isInfinity()) return this;
                if (!t) return this.dbl();
                if (this.curve.zeroA || this.curve.threeA) {
                    var e, u = this;
                    for (e = 0; e < t; e++) u = u.dbl();
                    return u
                }
                var f = this.curve.a,
                    h = this.curve.tinv,
                    l = this.x,
                    c = this.y,
                    d = this.z,
                    g = d.redSqr().redSqr(),
                    A = c.redAdd(c);
                for (e = 0; e < t; e++) {
                    var M = l.redSqr(),
                        E = A.redSqr(),
                        S = E.redSqr(),
                        I = M.redAdd(M).redIAdd(M).redIAdd(f.redMul(g)),
                        N = l.redMul(E),
                        B = I.redSqr().redISub(N.redAdd(N)),
                        C = N.redISub(B),
                        _ = I.redMul(C);
                    _ = _.redIAdd(_).redISub(S);
                    var O = A.redMul(d);
                    e + 1 < t && (g = g.redMul(S)), l = B, d = O, A = _
                }
                return this.curve.jpoint(l, A.redMul(h), d)
            }, Tt.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, Tt.prototype._zeroDbl = function() {
                var t, e, u;
                if (this.zOne) {
                    var f = this.x.redSqr(),
                        h = this.y.redSqr(),
                        l = h.redSqr(),
                        c = this.x.redAdd(h).redSqr().redISub(f).redISub(l);
                    c = c.redIAdd(c);
                    var d = f.redAdd(f).redIAdd(f),
                        g = d.redSqr().redISub(c).redISub(c),
                        A = l.redIAdd(l);
                    A = (A = A.redIAdd(A)).redIAdd(A), t = g, e = d.redMul(c.redISub(g)).redISub(A), u = this.y.redAdd(this.y)
                } else {
                    var M = this.x.redSqr(),
                        E = this.y.redSqr(),
                        S = E.redSqr(),
                        I = this.x.redAdd(E).redSqr().redISub(M).redISub(S);
                    I = I.redIAdd(I);
                    var N = M.redAdd(M).redIAdd(M),
                        B = N.redSqr(),
                        C = S.redIAdd(S);
                    C = (C = C.redIAdd(C)).redIAdd(C), t = B.redISub(I).redISub(I), e = N.redMul(I.redISub(t)).redISub(C), u = (u = this.y.redMul(this.z)).redIAdd(u)
                }
                return this.curve.jpoint(t, e, u)
            }, Tt.prototype._threeDbl = function() {
                var t, e, u;
                if (this.zOne) {
                    var f = this.x.redSqr(),
                        h = this.y.redSqr(),
                        l = h.redSqr(),
                        c = this.x.redAdd(h).redSqr().redISub(f).redISub(l);
                    c = c.redIAdd(c);
                    var d = f.redAdd(f).redIAdd(f).redIAdd(this.curve.a),
                        g = d.redSqr().redISub(c).redISub(c);
                    t = g;
                    var A = l.redIAdd(l);
                    A = (A = A.redIAdd(A)).redIAdd(A), e = d.redMul(c.redISub(g)).redISub(A), u = this.y.redAdd(this.y)
                } else {
                    var M = this.z.redSqr(),
                        E = this.y.redSqr(),
                        S = this.x.redMul(E),
                        I = this.x.redSub(M).redMul(this.x.redAdd(M));
                    I = I.redAdd(I).redIAdd(I);
                    var N = S.redIAdd(S),
                        B = (N = N.redIAdd(N)).redAdd(N);
                    t = I.redSqr().redISub(B), u = this.y.redAdd(this.z).redSqr().redISub(E).redISub(M);
                    var C = E.redSqr();
                    C = (C = (C = C.redIAdd(C)).redIAdd(C)).redIAdd(C), e = I.redMul(N.redISub(t)).redISub(C)
                }
                return this.curve.jpoint(t, e, u)
            }, Tt.prototype._dbl = function() {
                var t = this.curve.a,
                    e = this.x,
                    u = this.y,
                    f = this.z,
                    h = f.redSqr().redSqr(),
                    l = e.redSqr(),
                    c = u.redSqr(),
                    d = l.redAdd(l).redIAdd(l).redIAdd(t.redMul(h)),
                    g = e.redAdd(e),
                    A = (g = g.redIAdd(g)).redMul(c),
                    M = d.redSqr().redISub(A.redAdd(A)),
                    E = A.redISub(M),
                    S = c.redSqr();
                S = (S = (S = S.redIAdd(S)).redIAdd(S)).redIAdd(S);
                var I = d.redMul(E).redISub(S),
                    N = u.redAdd(u).redMul(f);
                return this.curve.jpoint(M, I, N)
            }, Tt.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var t = this.x.redSqr(),
                    e = this.y.redSqr(),
                    u = this.z.redSqr(),
                    f = e.redSqr(),
                    h = t.redAdd(t).redIAdd(t),
                    l = h.redSqr(),
                    c = this.x.redAdd(e).redSqr().redISub(t).redISub(f),
                    d = (c = (c = (c = c.redIAdd(c)).redAdd(c).redIAdd(c)).redISub(l)).redSqr(),
                    g = f.redIAdd(f);
                g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g);
                var A = h.redIAdd(c).redSqr().redISub(l).redISub(d).redISub(g),
                    M = e.redMul(A);
                M = (M = M.redIAdd(M)).redIAdd(M);
                var E = this.x.redMul(d).redISub(M);
                E = (E = E.redIAdd(E)).redIAdd(E);
                var S = this.y.redMul(A.redMul(g.redISub(A)).redISub(c.redMul(d)));
                S = (S = (S = S.redIAdd(S)).redIAdd(S)).redIAdd(S);
                var I = this.z.redAdd(c).redSqr().redISub(u).redISub(d);
                return this.curve.jpoint(E, S, I)
            }, Tt.prototype.mul = function(t, e) {
                return t = new tw(t, e), this.curve._wnafMul(this, t)
            }, Tt.prototype.eq = function(t) {
                if ("affine" === t.type) return this.eq(t.toJ());
                if (this === t) return !0;
                var e = this.z.redSqr(),
                    u = t.z.redSqr();
                if (0 !== this.x.redMul(u).redISub(t.x.redMul(e)).cmpn(0)) return !1;
                var f = e.redMul(this.z),
                    h = u.redMul(t.z);
                return 0 === this.y.redMul(h).redISub(t.y.redMul(f)).cmpn(0)
            }, Tt.prototype.eqXToP = function(t) {
                var e = this.z.redSqr(),
                    u = t.toRed(this.curve.red).redMul(e);
                if (0 === this.x.cmp(u)) return !0;
                for (var f = t.clone(), h = this.curve.redN.redMul(e);;) {
                    if (f.iadd(this.curve.n), f.cmp(this.curve.p) >= 0) return !1;
                    if (u.redIAdd(h), 0 === this.x.cmp(u)) return !0
                }
            }, Tt.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, Tt.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            };
            var eq = cr(function(t, e) {
                    e.base = Ce, e.short = Zt, e.mont = null, e.edwards = null
                }),
                eK = cr(function(t, e) {
                    var u, f = eT.assert;

                    function n(t) {
                        "short" === t.type ? this.curve = new eq.short(t) : "edwards" === t.type ? this.curve = new eq.edwards(t) : this.curve = new eq.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, f(this.g.validate(), "Invalid curve"), f(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                    }

                    function o(t, u) {
                        Object.defineProperty(e, t, {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                var f = new n(u);
                                return Object.defineProperty(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: f
                                }), f
                            }
                        })
                    }
                    e.PresetCurve = n, o("p192", {
                        type: "short",
                        prime: "p192",
                        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                        hash: tQ.sha256,
                        gRed: !1,
                        g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                    }), o("p224", {
                        type: "short",
                        prime: "p224",
                        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                        hash: tQ.sha256,
                        gRed: !1,
                        g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                    }), o("p256", {
                        type: "short",
                        prime: null,
                        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                        hash: tQ.sha256,
                        gRed: !1,
                        g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                    }), o("p384", {
                        type: "short",
                        prime: null,
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                        hash: tQ.sha384,
                        gRed: !1,
                        g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                    }), o("p521", {
                        type: "short",
                        prime: null,
                        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                        hash: tQ.sha512,
                        gRed: !1,
                        g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                    }), o("curve25519", {
                        type: "mont",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "76d06",
                        b: "1",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: tQ.sha256,
                        gRed: !1,
                        g: ["9"]
                    }), o("ed25519", {
                        type: "edwards",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "-1",
                        c: "1",
                        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: tQ.sha256,
                        gRed: !1,
                        g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                    });
                    try {
                        u = null.crash()
                    } catch {
                        u = void 0
                    }
                    o("secp256k1", {
                        type: "short",
                        prime: "k256",
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                        a: "0",
                        b: "7",
                        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                        h: "1",
                        hash: tQ.sha256,
                        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                        basis: [{
                            a: "3086d221a7d46bcde86c90e49284eb15",
                            b: "-e4437ed6010e88286f547fa90abfe4c3"
                        }, {
                            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                            b: "3086d221a7d46bcde86c90e49284eb15"
                        }],
                        gRed: !1,
                        g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", u]
                    })
                });

            function Re(t) {
                if (!(this instanceof Re)) return new Re(t);
                this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var e = eU.toArray(t.entropy, t.entropyEnc || "hex"),
                    u = eU.toArray(t.nonce, t.nonceEnc || "hex"),
                    f = eU.toArray(t.pers, t.persEnc || "hex");
                eP(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, u, f)
            }
            Re.prototype._init = function(t, e, u) {
                var f = t.concat(e).concat(u);
                this.K = Array(this.outLen / 8), this.V = Array(this.outLen / 8);
                for (var h = 0; h < this.V.length; h++) this.K[h] = 0, this.V[h] = 1;
                this._update(f), this._reseed = 1, this.reseedInterval = 281474976710656
            }, Re.prototype._hmac = function() {
                return new tQ.hmac(this.hash, this.K)
            }, Re.prototype._update = function(t) {
                var e = this._hmac().update(this.V).update([0]);
                t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
            }, Re.prototype.reseed = function(t, e, u, f) {
                "string" != typeof e && (f = u, u = e, e = null), t = eU.toArray(t, e), u = eU.toArray(u, f), eP(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(u || [])), this._reseed = 1
            }, Re.prototype.generate = function(t, e, u, f) {
                if (this._reseed > this.reseedInterval) throw Error("Reseed is required");
                "string" != typeof e && (f = u, u = e, e = null), u && (u = eU.toArray(u, f || "hex"), this._update(u));
                for (var h = []; h.length < t;) this.V = this._hmac().update(this.V).digest(), h = h.concat(this.V);
                var l = h.slice(0, t);
                return this._update(u), this._reseed++, eU.encode(l, e)
            };
            var eH = eT.assert;

            function kt(t, e) {
                this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
            }
            kt.fromPublic = function(t, e, u) {
                return e instanceof kt ? e : new kt(t, {
                    pub: e,
                    pubEnc: u
                })
            }, kt.fromPrivate = function(t, e, u) {
                return e instanceof kt ? e : new kt(t, {
                    priv: e,
                    privEnc: u
                })
            }, kt.prototype.validate = function() {
                var t = this.getPublic();
                return t.isInfinity() ? {
                    result: !1,
                    reason: "Invalid public key"
                } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                    result: !0,
                    reason: null
                } : {
                    result: !1,
                    reason: "Public key * N != O"
                } : {
                    result: !1,
                    reason: "Public key is not a point"
                }
            }, kt.prototype.getPublic = function(t, e) {
                return "string" == typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub
            }, kt.prototype.getPrivate = function(t) {
                return "hex" === t ? this.priv.toString(16, 2) : this.priv
            }, kt.prototype._importPrivate = function(t, e) {
                this.priv = new tw(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, kt.prototype._importPublic = function(t, e) {
                if (t.x || t.y) {
                    "mont" === this.ec.curve.type ? eH(t.x, "Need x coordinate") : ("short" === this.ec.curve.type || "edwards" === this.ec.curve.type) && eH(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
                    return
                }
                this.pub = this.ec.curve.decodePoint(t, e)
            }, kt.prototype.derive = function(t) {
                return t.validate() || eH(t.validate(), "public point not validated"), t.mul(this.priv).getX()
            }, kt.prototype.sign = function(t, e, u) {
                return this.ec.sign(t, this, e, u)
            }, kt.prototype.verify = function(t, e) {
                return this.ec.verify(t, e, this)
            }, kt.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            };
            var eQ = eT.assert;

            function Hr(t, e) {
                if (t instanceof Hr) return t;
                this._importDER(t, e) || (eQ(t.r && t.s, "Signature without r or s"), this.r = new tw(t.r, 16), this.s = new tw(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
            }

            function Ka() {
                this.place = 0
            }

            function Ui(t, e) {
                var u = t[e.place++];
                if (!(128 & u)) return u;
                var f = 15 & u;
                if (0 === f || f > 4) return !1;
                for (var h = 0, l = 0, c = e.place; l < f; l++, c++) h <<= 8, h |= t[c], h >>>= 0;
                return !(h <= 127) && (e.place = c, h)
            }

            function Of(t) {
                for (var e = 0, u = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < u;) e++;
                return 0 === e ? t : t.slice(e)
            }

            function ki(t, e) {
                if (e < 128) {
                    t.push(e);
                    return
                }
                var u = 1 + (Math.log(e) / Math.LN2 >>> 3);
                for (t.push(128 | u); --u;) t.push(e >>> (u << 3) & 255);
                t.push(e)
            }
            Hr.prototype._importDER = function(t, e) {
                t = eT.toArray(t, e);
                var u = new Ka;
                if (48 !== t[u.place++]) return !1;
                var f = Ui(t, u);
                if (!1 === f || f + u.place !== t.length || 2 !== t[u.place++]) return !1;
                var h = Ui(t, u);
                if (!1 === h) return !1;
                var l = t.slice(u.place, h + u.place);
                if (u.place += h, 2 !== t[u.place++]) return !1;
                var c = Ui(t, u);
                if (!1 === c || t.length !== c + u.place) return !1;
                var d = t.slice(u.place, c + u.place);
                if (0 === l[0]) {
                    if (!(128 & l[1])) return !1;
                    l = l.slice(1)
                }
                if (0 === d[0]) {
                    if (!(128 & d[1])) return !1;
                    d = d.slice(1)
                }
                return this.r = new tw(l), this.s = new tw(d), this.recoveryParam = null, !0
            }, Hr.prototype.toDER = function(t) {
                var e = this.r.toArray(),
                    u = this.s.toArray();
                for (128 & e[0] && (e = [0].concat(e)), 128 & u[0] && (u = [0].concat(u)), e = Of(e), u = Of(u); !u[0] && !(128 & u[1]);) u = u.slice(1);
                var f = [2];
                ki(f, e.length), (f = f.concat(e)).push(2), ki(f, u.length);
                var h = f.concat(u),
                    l = [48];
                return ki(l, h.length), l = l.concat(h), eT.encode(l, t)
            };
            var Ha = function() {
                    throw Error("unsupported")
                },
                eY = eT.assert;

            function $t(t) {
                if (!(this instanceof $t)) return new $t(t);
                "string" == typeof t && (eY(Object.prototype.hasOwnProperty.call(eK, t), "Unknown curve " + t), t = eK[t]), t instanceof eK.PresetCurve && (t = {
                    curve: t
                }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
            }
            $t.prototype.keyPair = function(t) {
                return new kt(this, t)
            }, $t.prototype.keyFromPrivate = function(t, e) {
                return kt.fromPrivate(this, t, e)
            }, $t.prototype.keyFromPublic = function(t, e) {
                return kt.fromPublic(this, t, e)
            }, $t.prototype.genKeyPair = function(t) {
                t || (t = {});
                for (var e = new Re({
                        hash: this.hash,
                        pers: t.pers,
                        persEnc: t.persEnc || "utf8",
                        entropy: t.entropy || Ha(this.hash.hmacStrength),
                        entropyEnc: t.entropy && t.entropyEnc || "utf8",
                        nonce: this.n.toArray()
                    }), u = this.n.byteLength(), f = this.n.sub(new tw(2));;) {
                    var h = new tw(e.generate(u));
                    if (!(h.cmp(f) > 0)) return h.iaddn(1), this.keyFromPrivate(h)
                }
            }, $t.prototype._truncateToN = function(t, e) {
                var u = 8 * t.byteLength() - this.n.bitLength();
                return u > 0 && (t = t.ushrn(u)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
            }, $t.prototype.sign = function(t, e, u, f) {
                "object" == typeof u && (f = u, u = null), f || (f = {}), e = this.keyFromPrivate(e, u), t = this._truncateToN(new tw(t, 16));
                for (var h = this.n.byteLength(), l = e.getPrivate().toArray("be", h), c = t.toArray("be", h), d = new Re({
                        hash: this.hash,
                        entropy: l,
                        nonce: c,
                        pers: f.pers,
                        persEnc: f.persEnc || "utf8"
                    }), g = this.n.sub(new tw(1)), A = 0;; A++) {
                    var M = f.k ? f.k(A) : new tw(d.generate(this.n.byteLength()));
                    if (!(0 >= (M = this._truncateToN(M, !0)).cmpn(1) || M.cmp(g) >= 0)) {
                        var E = this.g.mul(M);
                        if (!E.isInfinity()) {
                            var S = E.getX(),
                                I = S.umod(this.n);
                            if (0 !== I.cmpn(0)) {
                                var N = M.invm(this.n).mul(I.mul(e.getPrivate()).iadd(t));
                                if (0 !== (N = N.umod(this.n)).cmpn(0)) {
                                    var B = (E.getY().isOdd() ? 1 : 0) | (0 !== S.cmp(I) ? 2 : 0);
                                    return f.canonical && N.cmp(this.nh) > 0 && (N = this.n.sub(N), B ^= 1), new Hr({
                                        r: I,
                                        s: N,
                                        recoveryParam: B
                                    })
                                }
                            }
                        }
                    }
                }
            }, $t.prototype.verify = function(t, e, u, f) {
                t = this._truncateToN(new tw(t, 16)), u = this.keyFromPublic(u, f);
                var h = (e = new Hr(e, "hex")).r,
                    l = e.s;
                if (0 > h.cmpn(1) || h.cmp(this.n) >= 0 || 0 > l.cmpn(1) || l.cmp(this.n) >= 0) return !1;
                var c, d = l.invm(this.n),
                    g = d.mul(t).umod(this.n),
                    A = d.mul(h).umod(this.n);
                return this.curve._maxwellTrick ? !(c = this.g.jmulAdd(g, u.getPublic(), A)).isInfinity() && c.eqXToP(h) : !(c = this.g.mulAdd(g, u.getPublic(), A)).isInfinity() && 0 === c.getX().umod(this.n).cmp(h)
            }, $t.prototype.recoverPubKey = function(t, e, u, f) {
                eY((3 & u) === u, "The recovery param is more than two bits"), e = new Hr(e, f);
                var h = this.n,
                    l = new tw(t),
                    c = e.r,
                    d = e.s,
                    g = 1 & u,
                    A = u >> 1;
                if (c.cmp(this.curve.p.umod(this.curve.n)) >= 0 && A) throw Error("Unable to find sencond key candinate");
                c = A ? this.curve.pointFromX(c.add(this.curve.n), g) : this.curve.pointFromX(c, g);
                var M = e.r.invm(h),
                    E = h.sub(l).mul(M).umod(h),
                    S = d.mul(M).umod(h);
                return this.g.mulAdd(E, c, S)
            }, $t.prototype.getKeyRecoveryParam = function(t, e, u, f) {
                if (null !== (e = new Hr(e, f)).recoveryParam) return e.recoveryParam;
                for (var h, l = 0; l < 4; l++) {
                    try {
                        h = this.recoverPubKey(t, e, l)
                    } catch {
                        continue
                    }
                    if (h.eq(u)) return l
                }
                throw Error("Unable to find valid recovery factor")
            };
            var eG = cr(function(t, e) {
                e.version = "6.5.4", e.utils = eT, e.rand = function() {
                    throw Error("unsupported")
                }, e.curve = eq, e.curves = eK, e.ec = $t, e.eddsa = null
            }).ec;
            let eJ = new L("signing-key/5.7.0"),
                eV = null;

            function ve() {
                return eV || (eV = new eG("secp256k1")), eV
            }
            let Ja = class Ja {
                constructor(t) {
                    br(this, "curve", "secp256k1"), br(this, "privateKey", Kt(t)), 32 !== function(t) {
                        if ("string" != typeof t) t = Kt(t);
                        else if (!Qt(t) || t.length % 2) return null;
                        return (t.length - 2) / 2
                    }(this.privateKey) && eJ.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
                    let e = ve().keyFromPrivate(Ot(this.privateKey));
                    br(this, "publicKey", "0x" + e.getPublic(!1, "hex")), br(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")), br(this, "_isSigningKey", !0)
                }
                _addPoint(t) {
                    let e = ve().keyFromPublic(Ot(this.publicKey)),
                        u = ve().keyFromPublic(Ot(t));
                    return "0x" + e.pub.add(u.pub).encodeCompressed("hex")
                }
                signDigest(t) {
                    let e = ve().keyFromPrivate(Ot(this.privateKey)),
                        u = Ot(t);
                    32 !== u.length && eJ.throwArgumentError("bad digest length", "digest", t);
                    let f = e.sign(u, {
                        canonical: !0
                    });
                    return zn({
                        recoveryParam: f.recoveryParam,
                        r: oe("0x" + f.r.toString(16), 32),
                        s: oe("0x" + f.s.toString(16), 32)
                    })
                }
                computeSharedSecret(t) {
                    let e = ve().keyFromPrivate(Ot(this.privateKey)),
                        u = ve().keyFromPublic(Ot(Df(t)));
                    return oe("0x" + e.derive(u.getPublic()).toString(16), 32)
                }
                static isSigningKey(t) {
                    return !!(t && t._isSigningKey)
                }
            };

            function Df(t, e) {
                let u = Ot(t);
                if (32 === u.length) {
                    let t = new Ja(u);
                    return e ? "0x" + ve().keyFromPrivate(u).getPublic(!0, "hex") : t.publicKey
                }
                return 33 === u.length ? e ? Kt(u) : "0x" + ve().keyFromPublic(u).getPublic(!1, "hex") : 65 === u.length ? e ? "0x" + ve().keyFromPublic(u).getPublic(!0, "hex") : Kt(u) : eJ.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
            }
            async function Tf(t, e, u, f, h, l) {
                switch (u.t) {
                    case "eip191":
                        var c, d, g;
                        return c = t, d = e, g = u.s, (function(t) {
                            let e = Df(t);
                            return function(t) {
                                let e = null;
                                if ("string" != typeof t && tL.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), e = of (t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && tL.throwArgumentError("bad address checksum", "address", t);
                                else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                                    var u;
                                    for (t.substring(2, 4) !== function(t) {
                                            let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map(t => tj[t]).join("");
                                            for (; e.length >= tz;) {
                                                let t = e.substring(0, tz);
                                                e = parseInt(t, 10) % 97 + e.substring(t.length)
                                            }
                                            let u = String(98 - parseInt(e, 10) % 97);
                                            for (; u.length < 2;) u = "0" + u;
                                            return u
                                        }(t) && tL.throwArgumentError("bad icap checksum", "address", t), u = t.substring(4), e = new tE(u, 36).toString(16); e.length < 40;) e = "0" + e;
                                    e = of ("0x" + e)
                                } else tL.throwArgumentError("invalid address", "address", t);
                                return e
                            }(Hn(yi(Hn(e, 1)), 12))
                        })(function(t, e) {
                            let u = zn(e),
                                f = {
                                    r: Ot(u.r),
                                    s: Ot(u.s)
                                };
                            return "0x" + ve().recoverPubKey(Ot(t), f, u.recoveryParam).encode("hex", !1)
                        }(Ot(ff(d)), g)).toLowerCase() === c.toLowerCase();
                    case "eip1271":
                        return await kf(t, e, u.s, f, h, l);
                    default:
                        throw Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${u.t}`)
                }
            }
            async function kf(t, e, u, f, h, l) {
                try {
                    let c = "0x1626ba7e",
                        d = u.substring(2),
                        g = ff(e).substring(2),
                        A = await fetch(`${l||"https://rpc.walletconnect.com/v1"}/?chainId=${f}&projectId=${h}`, {
                            method: "POST",
                            body: JSON.stringify({
                                id: Date.now() + Math.floor(1e3 * Math.random()),
                                jsonrpc: "2.0",
                                method: "eth_call",
                                params: [{
                                    to: t,
                                    data: c + g + "00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041" + d
                                }, "latest"]
                            })
                        }),
                        {
                            result: M
                        } = await A.json();
                    return !!M && M.slice(0, c.length).toLowerCase() === c.toLowerCase()
                } catch (t) {
                    return console.error("isValidEip1271Signature: ", t), !1
                }
            }
            new L("transactions/5.7.0"), (M = B || (B = {}))[M.legacy = 0] = "legacy", M[M.eip2930 = 1] = "eip2930", M[M.eip1559 = 2] = "eip1559";
            var eW = Object.defineProperty,
                eX = Object.defineProperties,
                eZ = Object.getOwnPropertyDescriptors,
                e$ = Object.getOwnPropertySymbols,
                e0 = Object.prototype.hasOwnProperty,
                e1 = Object.prototype.propertyIsEnumerable,
                Kf = (t, e, u) => e in t ? eW(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: u
                }) : t[e] = u,
                Hi = (t, e) => {
                    for (var u in e || (e = {})) e0.call(e, u) && Kf(t, u, e[u]);
                    if (e$)
                        for (var u of e$(e)) e1.call(e, u) && Kf(t, u, e[u]);
                    return t
                },
                Hf = (t, e) => eX(t, eZ(e));
            let Lr = t => t ? .split(":"),
                zi = t => {
                    let e = t && Lr(t);
                    if (e) return t.includes("did:pkh:") ? e[3] : e[1]
                },
                fu = t => {
                    let e = t && Lr(t);
                    if (e) return e[2] + ":" + e[3]
                },
                Li = t => {
                    let e = t && Lr(t);
                    if (e) return e.pop()
                };
            async function ou(t) {
                let {
                    cacao: e,
                    projectId: u
                } = t, {
                    s: f,
                    p: h
                } = e, l = zf(h, h.iss), c = Li(h.iss);
                return await Tf(c, l, f, zi(h.iss), u)
            }
            let zf = (t, e) => {
                let u = `${t.domain} wants you to sign in with your Ethereum account:`,
                    f = Li(e);
                if (!t.aud && !t.uri) throw Error("Either `aud` or `uri` is required to construct the message");
                let h = t.statement || void 0,
                    l = `URI: ${t.aud||t.uri}`,
                    c = `Version: ${t.version}`,
                    d = `Chain ID: ${zi(e)}`,
                    g = `Nonce: ${t.nonce}`,
                    A = `Issued At: ${t.iat}`,
                    M = t.resources ? `Resources:${t.resources.map(t=>`
- ${t}`).join("")}` : void 0,
                    E = Qr(t.resources);
                if (E) {
                    let t = Oe(E);
                    h = function(t = "", e) {
                        me(e);
                        let u = "I further authorize the stated URI to perform the following actions on my behalf: ";
                        if (t.includes(u)) return t;
                        let f = [],
                            h = 0;
                        Object.keys(e.att).forEach(t => {
                            let u = Object.keys(e.att[t]).map(t => ({
                                ability: t.split("/")[0],
                                action: t.split("/")[1]
                            }));
                            u.sort((t, e) => t.action.localeCompare(e.action));
                            let l = {};
                            u.forEach(t => {
                                l[t.ability] || (l[t.ability] = []), l[t.ability].push(t.action)
                            });
                            let c = Object.keys(l).map(e => (h++, `(${h}) '${e}': '${l[e].join("', '")}' for '${t}'.`));
                            f.push(c.join(", ").replace(".,", "."))
                        });
                        let l = f.join(" "),
                            c = `${u}${l}`;
                        return `${t?t+" ":""}${c}`
                    }(h, t)
                }
                return [u, f, "", h, "", l, c, d, g, A, M].filter(t => null != t).join(`
`)
            };

            function me(t) {
                if (!t) throw Error("No recap provided, value is undefined");
                if (!t.att) throw Error("No `att` property found");
                let e = Object.keys(t.att);
                if (!(null != e && e.length)) throw Error("No resources found in `att` property");
                e.forEach(e => {
                    let u = t.att[e];
                    if (Array.isArray(u) || "object" != typeof u) throw Error(`Resource must be an object: ${e}`);
                    if (!Object.keys(u).length) throw Error(`Resource object is empty: ${e}`);
                    Object.keys(u).forEach(t => {
                        let e = u[t];
                        if (!Array.isArray(e)) throw Error(`Ability limits ${t} must be an array of objects, found: ${e}`);
                        if (!e.length) throw Error(`Value of ${t} is empty array, must be an array with objects`);
                        e.forEach(e => {
                            if ("object" != typeof e) throw Error(`Ability limits (${t}) must be an array of objects, found: ${e}`)
                        })
                    })
                })
            }

            function jr(t) {
                return me(t), `urn:recap:${Z.from(JSON.stringify(t)).toString("base64").replace(/=/g,"")}`
            }

            function Oe(t) {
                var e;
                let u = (e = t.replace("urn:recap:", ""), JSON.parse(Z.from(e, "base64").toString("utf-8")));
                return me(u), u
            }

            function cu(t, e, u) {
                let f = function(t, e, u, f = {}) {
                    return u ? .sort((t, e) => t.localeCompare(e)), {
                        att: {
                            [t]: function(t, e, u = {}) {
                                e = e ? .sort((t, e) => t.localeCompare(e));
                                let f = e.map(e => ({
                                    [`${t}/${e}`]: [u]
                                }));
                                return Object.assign({}, ...f)
                            }(e, u, f)
                        }
                    }
                }(t, e, u);
                return jr(f)
            }

            function lu(t, e) {
                let u = Oe(t),
                    f = Oe(e),
                    h = function(t, e) {
                        me(t), me(e);
                        let u = Object.keys(t.att).concat(Object.keys(e.att)).sort((t, e) => t.localeCompare(e)),
                            f = {
                                att: {}
                            };
                        return u.forEach(u => {
                            var h, l;
                            Object.keys((null == (h = t.att) ? void 0 : h[u]) || {}).concat(Object.keys((null == (l = e.att) ? void 0 : l[u]) || {})).sort((t, e) => t.localeCompare(e)).forEach(h => {
                                var l, c;
                                f.att[u] = Hf(Hi({}, f.att[u]), {
                                    [h]: (null == (l = t.att[u]) ? void 0 : l[h]) || (null == (c = e.att[u]) ? void 0 : c[h])
                                })
                            })
                        }), f
                    }(u, f);
                return jr(h)
            }

            function du(t) {
                var e;
                let u = Oe(t);
                me(u);
                let f = null == (e = u.att) ? void 0 : e.eip155;
                return f ? Object.keys(f).map(t => t.split("/")[1]) : []
            }

            function pu(t) {
                let e = Oe(t);
                me(e);
                let u = [];
                return Object.values(e.att).forEach(t => {
                    Object.values(t).forEach(t => {
                        var e;
                        null != (e = t ? .[0]) && e.chains && u.push(t[0].chains)
                    })
                }), [...new Set(u.flat())]
            }

            function Qr(t) {
                if (!t) return;
                let e = t ? .[t.length - 1];
                return e && e.includes("urn:recap:") ? e : void 0
            }
            let e2 = "base10",
                e3 = "base16",
                e6 = "base64pad",
                e8 = "utf8",
                e4 = 1;

            function mu() {
                let t = q.Au();
                return {
                    privateKey: (0, K.BB)(t.secretKey, e3),
                    publicKey: (0, K.BB)(t.publicKey, e3)
                }
            }

            function gu() {
                let t = (0, D.randomBytes)(32);
                return (0, K.BB)(t, e3)
            }

            function Au(t, e) {
                let u = q.gi((0, K.mL)(t, e3), (0, K.mL)(e, e3), !0),
                    f = new T.t(F.mE, u).expand(32);
                return (0, K.BB)(f, e3)
            }

            function bu(t) {
                let e = (0, F.vp)((0, K.mL)(t, e3));
                return (0, K.BB)(e, e3)
            }

            function yu(t) {
                let e = (0, F.vp)((0, K.mL)(t, e8));
                return (0, K.BB)(e, e3)
            }

            function Mr(t) {
                return Number((0, K.BB)(t, e2))
            }

            function wu(t) {
                var e;
                let u = (e = "u" > typeof t.type ? t.type : 0, (0, K.mL)(`${e}`, e2));
                if (Mr(u) === e4 && typeof t.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                let f = "u" > typeof t.senderPublicKey ? (0, K.mL)(t.senderPublicKey, e3) : void 0,
                    h = "u" > typeof t.iv ? (0, K.mL)(t.iv, e3) : (0, D.randomBytes)(12),
                    l = new P.OK((0, K.mL)(t.symKey, e3)).seal(h, (0, K.mL)(t.message, e8));
                return function(t) {
                    if (Mr(t.type) === e4) {
                        if (typeof t.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                        return (0, K.BB)((0, K.zo)([t.type, t.senderPublicKey, t.iv, t.sealed]), e6)
                    }
                    return (0, K.BB)((0, K.zo)([t.type, t.iv, t.sealed]), e6)
                }({
                    type: u,
                    sealed: l,
                    iv: h,
                    senderPublicKey: f
                })
            }

            function xu(t) {
                let e = new P.OK((0, K.mL)(t.symKey, e3)),
                    {
                        sealed: u,
                        iv: f
                    } = Xi(t.encoded),
                    h = e.open(f, u);
                if (null === h) throw Error("Failed to decrypt");
                return (0, K.BB)(h, e8)
            }

            function Xi(t) {
                let e = (0, K.mL)(t, e6),
                    u = e.slice(0, 1);
                if (Mr(u) === e4) {
                    let t = e.slice(1, 33),
                        f = e.slice(33, 45),
                        h = e.slice(45);
                    return {
                        type: u,
                        sealed: h,
                        iv: f,
                        senderPublicKey: t
                    }
                }
                let f = e.slice(1, 13),
                    h = e.slice(13);
                return {
                    type: u,
                    sealed: h,
                    iv: f
                }
            }

            function Mu(t, e) {
                let u = Xi(t);
                return eo({
                    type: Mr(u.type),
                    senderPublicKey: "u" > typeof u.senderPublicKey ? (0, K.BB)(u.senderPublicKey, e3) : void 0,
                    receiverPublicKey: e ? .receiverPublicKey
                })
            }

            function eo(t) {
                let e = t ? .type || 0;
                if (e === e4) {
                    if (typeof t ? .senderPublicKey > "u") throw Error("missing sender public key");
                    if (typeof t ? .receiverPublicKey > "u") throw Error("missing receiver public key")
                }
                return {
                    type: e,
                    senderPublicKey: t ? .senderPublicKey,
                    receiverPublicKey: t ? .receiverPublicKey
                }
            }

            function Eu(t) {
                return t.type === e4 && "string" == typeof t.senderPublicKey && "string" == typeof t.receiverPublicKey
            }

            function Su(t) {
                return t ? .relay || {
                    protocol: "irn"
                }
            }

            function Nu(t) {
                let e = Q.iO[t];
                if (typeof e > "u") throw Error(`Relay Protocol not supported: ${t}`);
                return e
            }
            var e5 = Object.defineProperty,
                e7 = Object.defineProperties,
                e9 = Object.getOwnPropertyDescriptors,
                rt = Object.getOwnPropertySymbols,
                re = Object.prototype.hasOwnProperty,
                ri = Object.prototype.propertyIsEnumerable,
                no = (t, e, u) => e in t ? e5(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: u
                }) : t[e] = u,
                fo = (t, e) => {
                    for (var u in e || (e = {})) re.call(e, u) && no(t, u, e[u]);
                    if (rt)
                        for (var u of rt(e)) ri.call(e, u) && no(t, u, e[u]);
                    return t
                },
                Ou = (t, e) => e7(t, e9(e));

            function Pu(t) {
                var e;
                t = (t = t.includes("wc://") ? t.replace("wc://", "") : t).includes("wc:") ? t.replace("wc:", "") : t;
                let u = t.indexOf(":"),
                    f = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0,
                    h = t.substring(0, u),
                    l = t.substring(u + 1, f).split("@"),
                    c = "u" > typeof f ? t.substring(f) : "",
                    d = R.parse(c),
                    g = "string" == typeof d.methods ? d.methods.split(",") : void 0;
                return {
                    protocol: h,
                    topic: (e = l[0]).startsWith("//") ? e.substring(2) : e,
                    version: parseInt(l[1], 10),
                    symKey: d.symKey,
                    relay: function(t, e = "-") {
                        let u = {},
                            f = "relay" + e;
                        return Object.keys(t).forEach(e => {
                            if (e.startsWith(f)) {
                                let h = e.replace(f, ""),
                                    l = t[e];
                                u[h] = l
                            }
                        }), u
                    }(d),
                    methods: g,
                    expiryTimestamp: d.expiryTimestamp ? parseInt(d.expiryTimestamp, 10) : void 0
                }
            }

            function Du(t) {
                return `${t.protocol}:${t.topic}@${t.version}?` + R.stringify(fo(Ou(fo({
                    symKey: t.symKey
                }, function(t, e = "-") {
                    let u = {};
                    return Object.keys(t).forEach(f => {
                        t[f] && (u["relay" + e + f] = t[f])
                    }), u
                }(t.relay)), {
                    expiryTimestamp: t.expiryTimestamp
                }), t.methods ? {
                    methods: t.methods.join(",")
                } : {}))
            }

            function $e(t) {
                let e = [];
                return t.forEach(t => {
                    let [u, f] = t.split(":");
                    e.push(`${u}:${f}`)
                }), e
            }

            function Zi(t) {
                return t.includes(":")
            }

            function vo(t) {
                return Zi(t) ? t.split(":")[0] : t
            }

            function ju(t, e) {
                e = e.map(t => t.replace("did:pkh:", ""));
                let u = function(t) {
                    let e = {};
                    return t ? .forEach(t => {
                        let [u, f] = t.split(":");
                        e[u] || (e[u] = {
                            accounts: [],
                            chains: [],
                            events: []
                        }), e[u].accounts.push(t), e[u].chains.push(`${u}:${f}`)
                    }), e
                }(e);
                for (let [e, f] of Object.entries(u)) f.methods ? f.methods = ge(f.methods, t) : f.methods = t, f.events = ["chainChanged", "accountsChanged"];
                return u
            }
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            let rn = {
                    INVALID_METHOD: {
                        message: "Invalid method.",
                        code: 1001
                    },
                    INVALID_EVENT: {
                        message: "Invalid event.",
                        code: 1002
                    },
                    INVALID_UPDATE_REQUEST: {
                        message: "Invalid update request.",
                        code: 1003
                    },
                    INVALID_EXTEND_REQUEST: {
                        message: "Invalid extend request.",
                        code: 1004
                    },
                    INVALID_SESSION_SETTLE_REQUEST: {
                        message: "Invalid session settle request.",
                        code: 1005
                    },
                    UNAUTHORIZED_METHOD: {
                        message: "Unauthorized method.",
                        code: 3001
                    },
                    UNAUTHORIZED_EVENT: {
                        message: "Unauthorized event.",
                        code: 3002
                    },
                    UNAUTHORIZED_UPDATE_REQUEST: {
                        message: "Unauthorized update request.",
                        code: 3003
                    },
                    UNAUTHORIZED_EXTEND_REQUEST: {
                        message: "Unauthorized extend request.",
                        code: 3004
                    },
                    USER_REJECTED: {
                        message: "User rejected.",
                        code: 5e3
                    },
                    USER_REJECTED_CHAINS: {
                        message: "User rejected chains.",
                        code: 5001
                    },
                    USER_REJECTED_METHODS: {
                        message: "User rejected methods.",
                        code: 5002
                    },
                    USER_REJECTED_EVENTS: {
                        message: "User rejected events.",
                        code: 5003
                    },
                    UNSUPPORTED_CHAINS: {
                        message: "Unsupported chains.",
                        code: 5100
                    },
                    UNSUPPORTED_METHODS: {
                        message: "Unsupported methods.",
                        code: 5101
                    },
                    UNSUPPORTED_EVENTS: {
                        message: "Unsupported events.",
                        code: 5102
                    },
                    UNSUPPORTED_ACCOUNTS: {
                        message: "Unsupported accounts.",
                        code: 5103
                    },
                    UNSUPPORTED_NAMESPACE_KEY: {
                        message: "Unsupported namespace key.",
                        code: 5104
                    },
                    USER_DISCONNECTED: {
                        message: "User disconnected.",
                        code: 6e3
                    },
                    SESSION_SETTLEMENT_FAILED: {
                        message: "Session settlement failed.",
                        code: 7e3
                    },
                    WC_METHOD_UNSUPPORTED: {
                        message: "Unsupported wc_ method.",
                        code: 10001
                    }
                },
                ro = {
                    NOT_INITIALIZED: {
                        message: "Not initialized.",
                        code: 1
                    },
                    NO_MATCHING_KEY: {
                        message: "No matching key.",
                        code: 2
                    },
                    RESTORE_WILL_OVERRIDE: {
                        message: "Restore will override.",
                        code: 3
                    },
                    RESUBSCRIBED: {
                        message: "Resubscribed.",
                        code: 4
                    },
                    MISSING_OR_INVALID: {
                        message: "Missing or invalid.",
                        code: 5
                    },
                    EXPIRED: {
                        message: "Expired.",
                        code: 6
                    },
                    UNKNOWN_TYPE: {
                        message: "Unknown type.",
                        code: 7
                    },
                    MISMATCHED_TOPIC: {
                        message: "Mismatched topic.",
                        code: 8
                    },
                    NON_CONFORMING_NAMESPACES: {
                        message: "Non conforming namespaces.",
                        code: 9
                    }
                };

            function xe(t, e) {
                let {
                    message: u,
                    code: f
                } = ro[t];
                return {
                    message: e ? `${u} ${e}` : u,
                    code: f
                }
            }

            function tr(t, e) {
                let {
                    message: u,
                    code: f
                } = rn[t];
                return {
                    message: e ? `${u} ${e}` : u,
                    code: f
                }
            }

            function Er(t, e) {
                return !!Array.isArray(t) && (!("u" > typeof e) || !t.length || t.every(e))
            }

            function Yr(t) {
                return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length
            }

            function Pe(t) {
                return typeof t > "u"
            }

            function Gt(t, e) {
                return !!(e && Pe(t)) || "string" == typeof t && !!t.trim().length
            }

            function Vr(t, e) {
                return !!(e && Pe(t)) || "number" == typeof t && !isNaN(t)
            }

            function Qu(t, e) {
                let {
                    requiredNamespaces: u
                } = e, f = Object.keys(t.namespaces), h = Object.keys(u), l = !0;
                return !!_e(h, f) && (f.forEach(e => {
                    let {
                        accounts: f,
                        methods: h,
                        events: c
                    } = t.namespaces[e], d = $e(f), g = u[e];
                    _e(_r(e, g), d) && _e(g.methods, h) && _e(g.events, c) || (l = !1)
                }), l)
            }

            function Sr(t) {
                return !!(Gt(t, !1) && t.includes(":")) && 2 === t.split(":").length
            }

            function Ju(t) {
                if (Gt(t, !1)) try {
                    return "u" > typeof new URL(t)
                } catch {}
                return !1
            }

            function Gu(t) {
                var e;
                return null == (e = t ? .proposer) ? void 0 : e.publicKey
            }

            function Yu(t) {
                return t ? .topic
            }

            function Vu(t, e) {
                let u = null;
                return Gt(t ? .publicKey, !1) || (u = xe("MISSING_OR_INVALID", `${e} controller public key should be a string`)), u
            }

            function tn(t) {
                let e = !0;
                return Er(t) ? t.length && (e = t.every(t => Gt(t, !1))) : e = !1, e
            }

            function en(t, e) {
                let u = null;
                return Object.values(t).forEach(t => {
                    var f;
                    let h;
                    if (u) return;
                    let l = (f = `${e}, namespace`, h = null, tn(t ? .methods) ? tn(t ? .events) || (h = tr("UNSUPPORTED_EVENTS", `${f}, events should be an array of strings or empty array for no events`)) : h = tr("UNSUPPORTED_METHODS", `${f}, methods should be an array of strings or empty array for no methods`), h);
                    l && (u = l)
                }), u
            }

            function Wu(t, e, u) {
                let f = null;
                if (t && Yr(t)) {
                    let h;
                    let l = en(t, e);
                    l && (f = l);
                    let c = (h = null, Object.entries(t).forEach(([t, f]) => {
                        var l, c;
                        let d;
                        if (h) return;
                        let g = (l = _r(t, f), c = `${e} ${u}`, d = null, Er(l) && l.length ? l.forEach(t => {
                            d || Sr(t) || (d = tr("UNSUPPORTED_CHAINS", `${c}, chain ${t} should be a string and conform to "namespace:chainId" format`))
                        }) : Sr(t) || (d = tr("UNSUPPORTED_CHAINS", `${c}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), d);
                        g && (h = g)
                    }), h);
                    c && (f = c)
                } else f = xe("MISSING_OR_INVALID", `${e}, ${u} should be an object with data`);
                return f
            }

            function So(t, e) {
                let u = null;
                if (t && Yr(t)) {
                    let f;
                    let h = en(t, e);
                    h && (u = h);
                    let l = (f = null, Object.values(t).forEach(t => {
                        var u, h;
                        let l;
                        if (f) return;
                        let c = (u = t ? .accounts, h = `${e} namespace`, l = null, Er(u) ? u.forEach(t => {
                            l || function(t) {
                                if (Gt(t, !1) && t.includes(":")) {
                                    let e = t.split(":");
                                    if (3 === e.length) {
                                        let t = e[0] + ":" + e[1];
                                        return !!e[2] && Sr(t)
                                    }
                                }
                                return !1
                            }(t) || (l = tr("UNSUPPORTED_ACCOUNTS", `${h}, account ${t} should be a string and conform to "namespace:chainId:address" format`))
                        }) : l = tr("UNSUPPORTED_ACCOUNTS", `${h}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), l);
                        c && (f = c)
                    }), f);
                    l && (u = l)
                } else u = xe("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
                return u
            }

            function No(t) {
                return Gt(t.protocol, !0)
            }

            function Xu(t, e) {
                let u = !1;
                return e && !t ? u = !0 : t && Er(t) && t.length && t.forEach(t => {
                    u = No(t)
                }), u
            }

            function Zu(t) {
                return "number" == typeof t
            }

            function $u(t) {
                return "u" > typeof t
            }

            function th(t) {
                return !(!t || "object" != typeof t || !t.code || !Vr(t.code, !1) || !t.message || !Gt(t.message, !1))
            }

            function eh(t) {
                return !(Pe(t) || !Gt(t.method, !1))
            }

            function rh(t) {
                return !(Pe(t) || Pe(t.result) && Pe(t.error) || !Vr(t.id, !1) || !Gt(t.jsonrpc, !1))
            }

            function ih(t) {
                return !(Pe(t) || !Gt(t.name, !1))
            }

            function nh(t, e) {
                return !(!Sr(e) || !(function(t) {
                    let e = [];
                    return Object.values(t).forEach(t => {
                        e.push(...$e(t.accounts))
                    }), e
                })(t).includes(e))
            }

            function fh(t, e, u) {
                return !!Gt(u, !1) && (function(t, e) {
                    let u = [];
                    return Object.values(t).forEach(t => {
                        $e(t.accounts).includes(e) && u.push(...t.methods)
                    }), u
                })(t, e).includes(u)
            }

            function oh(t, e, u) {
                return !!Gt(u, !1) && (function(t, e) {
                    let u = [];
                    return Object.values(t).forEach(t => {
                        $e(t.accounts).includes(e) && u.push(...t.events)
                    }), u
                })(t, e).includes(u)
            }

            function Io(t, e, u) {
                let f = null,
                    h = function(t) {
                        let e = {};
                        return Object.keys(t).forEach(u => {
                            var f;
                            u.includes(":") ? e[u] = t[u] : null == (f = t[u].chains) || f.forEach(f => {
                                e[f] = {
                                    methods: t[u].methods,
                                    events: t[u].events
                                }
                            })
                        }), e
                    }(t),
                    l = function(t) {
                        let e = {};
                        return Object.keys(t).forEach(u => {
                            if (u.includes(":")) e[u] = t[u];
                            else {
                                let f = $e(t[u].accounts);
                                f ? .forEach(f => {
                                    e[f] = {
                                        accounts: t[u].accounts.filter(t => t.includes(`${f}:`)),
                                        methods: t[u].methods,
                                        events: t[u].events
                                    }
                                })
                            }
                        }), e
                    }(e),
                    c = Object.keys(h),
                    d = Object.keys(l),
                    g = _o(Object.keys(t)),
                    A = _o(Object.keys(e)),
                    M = g.filter(t => !A.includes(t));
                return M.length && (f = xe("NON_CONFORMING_NAMESPACES", `${u} namespaces keys don't satisfy requiredNamespaces.
      Required: ${M.toString()}
      Received: ${Object.keys(e).toString()}`)), _e(c, d) || (f = xe("NON_CONFORMING_NAMESPACES", `${u} namespaces chains don't satisfy required namespaces.
      Required: ${c.toString()}
      Approved: ${d.toString()}`)), Object.keys(e).forEach(t => {
                    if (!t.includes(":") || f) return;
                    let h = $e(e[t].accounts);
                    h.includes(t) || (f = xe("NON_CONFORMING_NAMESPACES", `${u} namespaces accounts don't satisfy namespace accounts for ${t}
        Required: ${t}
        Approved: ${h.toString()}`))
                }), c.forEach(t => {
                    f || (_e(h[t].methods, l[t].methods) ? _e(h[t].events, l[t].events) || (f = xe("NON_CONFORMING_NAMESPACES", `${u} namespaces events don't satisfy namespace events for ${t}`)) : f = xe("NON_CONFORMING_NAMESPACES", `${u} namespaces methods don't satisfy namespace methods for ${t}`))
                }), f
            }

            function _o(t) {
                return [...new Set(t.map(t => t.includes(":") ? t.split(":")[0] : t))]
            }

            function uh(t, e) {
                return Vr(t, !1) && t <= e.max && t >= e.min
            }

            function hh() {
                let t = We();
                return new Promise(e => {
                    switch (t) {
                        case to.browser:
                            e(pr() && navigator ? .onLine);
                            break;
                        case to.reactNative:
                            e(Co());
                            break;
                        case to.node:
                        default:
                            e(!0)
                    }
                })
            }
            async function Co() {
                if (er() && "u" > typeof u.g && null != u.g && u.g.NetInfo) {
                    let t = await (null == u.g ? void 0 : u.g.NetInfo.fetch());
                    return t ? .isConnected
                }
                return !0
            }

            function ch(t) {
                switch (We()) {
                    case to.browser:
                        !er() && pr() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
                        break;
                    case to.reactNative:
                        er() && "u" > typeof u.g && null != u.g && u.g.NetInfo && u.g ? .NetInfo.addEventListener(e => t(e ? .isConnected));
                    case to.node:
                }
            }
            let rs = {};
            let lh = class lh {
                static get(t) {
                    return rs[t]
                }
                static set(t, e) {
                    rs[t] = e
                }
                static delete(t) {
                    delete rs[t]
                }
            }
        }
    }
]);