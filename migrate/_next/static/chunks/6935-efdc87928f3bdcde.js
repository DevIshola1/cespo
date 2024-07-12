(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6935], {
        62898: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return createLucideIcon
                }
            });
            var r = n(2265),
                i = {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                };
            /**
             * @license lucide-react v0.331.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let toKebabCase = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
                createLucideIcon = (e, t) => {
                    let n = (0, r.forwardRef)(({
                        color: n = "currentColor",
                        size: o = 24,
                        strokeWidth: a = 2,
                        absoluteStrokeWidth: l,
                        className: u = "",
                        children: s,
                        ...d
                    }, c) => (0, r.createElement)("svg", {
                        ref: c,
                        ...i,
                        width: o,
                        height: o,
                        stroke: n,
                        strokeWidth: l ? 24 * Number(a) / Number(o) : a,
                        className: ["lucide", `lucide-${toKebabCase(e)}`, u].join(" "),
                        ...d
                    }, [...t.map(([e, t]) => (0, r.createElement)(e, t)), ...Array.isArray(s) ? s : [s]]));
                    return n.displayName = `${e}`, n
                }
        },
        90413: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function() {
                    return g
                }
            });
            let r = n(70817),
                i = n(37401),
                o = i._(n(2265)),
                a = r._(n(54887)),
                l = r._(n(35793)),
                u = n(7929),
                s = n(17727),
                d = n(47327);
            n(92637);
            let c = n(36304),
                f = r._(n(69950)),
                p = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function handleLoading(e, t, n, r, i, o) {
                let a = null == e ? void 0 : e.src;
                if (!e || e["data-loaded-src"] === a) return;
                e["data-loaded-src"] = a;
                let l = "decode" in e ? e.decode() : Promise.resolve();
                l.catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && i(!0), null == n ? void 0 : n.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let r = !1,
                                i = !1;
                            n.current({ ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => r,
                                isPropagationStopped: () => i,
                                persist: () => {},
                                preventDefault: () => {
                                    r = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    i = !0, t.stopPropagation()
                                }
                            })
                        }(null == r ? void 0 : r.current) && r.current(e)
                    }
                })
            }

            function getDynamicProps(e) {
                let [t, n] = o.version.split("."), r = parseInt(t, 10), i = parseInt(n, 10);
                return r > 18 || 18 === r && i >= 3 ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            let m = (0, o.forwardRef)((e, t) => {
                let {
                    src: n,
                    srcSet: r,
                    sizes: i,
                    height: a,
                    width: l,
                    decoding: u,
                    className: s,
                    style: d,
                    fetchPriority: c,
                    placeholder: f,
                    loading: p,
                    unoptimized: m,
                    fill: g,
                    onLoadRef: h,
                    onLoadingCompleteRef: y,
                    setBlurComplete: b,
                    setShowAltText: v,
                    onLoad: _,
                    onError: w,
                    ...S
                } = e;
                return o.default.createElement("img", { ...S,
                    ...getDynamicProps(c),
                    loading: p,
                    width: l,
                    height: a,
                    decoding: u,
                    "data-nimg": g ? "fill" : "1",
                    className: s,
                    style: d,
                    sizes: i,
                    srcSet: r,
                    src: n,
                    ref: (0, o.useCallback)(e => {
                        t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (w && (e.src = e.src), e.complete && handleLoading(e, f, h, y, b, m))
                    }, [n, f, h, y, b, w, m, t]),
                    onLoad: e => {
                        let t = e.currentTarget;
                        handleLoading(t, f, h, y, b, m)
                    },
                    onError: e => {
                        v(!0), "empty" !== f && b(!0), w && w(e)
                    }
                })
            });

            function ImagePreload(e) {
                let {
                    isAppRouter: t,
                    imgAttributes: n
                } = e, r = {
                    as: "image",
                    imageSrcSet: n.srcSet,
                    imageSizes: n.sizes,
                    crossOrigin: n.crossOrigin,
                    referrerPolicy: n.referrerPolicy,
                    ...getDynamicProps(n.fetchPriority)
                };
                return t && a.default.preload ? (a.default.preload(n.src, r), null) : o.default.createElement(l.default, null, o.default.createElement("link", {
                    key: "__nimg-" + n.src + n.srcSet + n.sizes,
                    rel: "preload",
                    href: n.srcSet ? void 0 : n.src,
                    ...r
                }))
            }
            let g = (0, o.forwardRef)((e, t) => {
                let n = (0, o.useContext)(c.RouterContext),
                    r = (0, o.useContext)(d.ImageConfigContext),
                    i = (0, o.useMemo)(() => {
                        let e = p || r || s.imageConfigDefault,
                            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                            n = e.deviceSizes.sort((e, t) => e - t);
                        return { ...e,
                            allSizes: t,
                            deviceSizes: n
                        }
                    }, [r]),
                    {
                        onLoad: a,
                        onLoadingComplete: l
                    } = e,
                    g = (0, o.useRef)(a);
                (0, o.useEffect)(() => {
                    g.current = a
                }, [a]);
                let h = (0, o.useRef)(l);
                (0, o.useEffect)(() => {
                    h.current = l
                }, [l]);
                let [y, b] = (0, o.useState)(!1), [v, _] = (0, o.useState)(!1), {
                    props: w,
                    meta: S
                } = (0, u.getImgProps)(e, {
                    defaultLoader: f.default,
                    imgConf: i,
                    blurComplete: y,
                    showAltText: v
                });
                return o.default.createElement(o.default.Fragment, null, o.default.createElement(m, { ...w,
                    unoptimized: S.unoptimized,
                    placeholder: S.placeholder,
                    fill: S.fill,
                    onLoadRef: g,
                    onLoadingCompleteRef: h,
                    setBlurComplete: b,
                    setShowAltText: _,
                    ref: t
                }), S.priority ? o.default.createElement(ImagePreload, {
                    isAppRouter: !n,
                    imgAttributes: w
                }) : null)
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        28569: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(70817),
                i = r._(n(2265)),
                o = i.default.createContext({})
        },
        94472: function(e, t) {
            "use strict";

            function isInAmpMode(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: n = !1,
                    hasQuery: r = !1
                } = void 0 === e ? {} : e;
                return t || n && r
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return isInAmpMode
                }
            })
        },
        7929: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return getImgProps
                }
            }), n(92637);
            let r = n(61511),
                i = n(17727);

            function isStaticRequire(e) {
                return void 0 !== e.default
            }

            function getInt(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function getImgProps(e, t) {
                var n;
                let o, a, l, {
                        src: u,
                        sizes: s,
                        unoptimized: d = !1,
                        priority: c = !1,
                        loading: f,
                        className: p,
                        quality: m,
                        width: g,
                        height: h,
                        fill: y = !1,
                        style: b,
                        onLoad: v,
                        onLoadingComplete: _,
                        placeholder: w = "empty",
                        blurDataURL: S,
                        fetchPriority: C,
                        layout: P,
                        objectFit: j,
                        objectPosition: O,
                        lazyBoundary: x,
                        lazyRoot: E,
                        ...I
                    } = e,
                    {
                        imgConf: M,
                        showAltText: z,
                        blurComplete: k,
                        defaultLoader: A
                    } = t,
                    R = M || i.imageConfigDefault;
                if ("allSizes" in R) o = R;
                else {
                    let e = [...R.deviceSizes, ...R.imageSizes].sort((e, t) => e - t),
                        t = R.deviceSizes.sort((e, t) => e - t);
                    o = { ...R,
                        allSizes: e,
                        deviceSizes: t
                    }
                }
                let L = I.loader || A;
                delete I.loader, delete I.srcSet;
                let D = "__next_img_default" in L;
                if (D) {
                    if ("custom" === o.loader) throw Error('Image with src "' + u + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let e = L;
                    L = t => {
                        let {
                            config: n,
                            ...r
                        } = t;
                        return e(r)
                    }
                }
                if (P) {
                    "fill" === P && (y = !0);
                    let e = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[P];
                    e && (b = { ...b,
                        ...e
                    });
                    let t = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[P];
                    t && !s && (s = t)
                }
                let N = "",
                    U = getInt(g),
                    B = getInt(h);
                if ("object" == typeof(n = u) && (isStaticRequire(n) || void 0 !== n.src)) {
                    let e = isStaticRequire(u) ? u.default : u;
                    if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                    if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                    if (a = e.blurWidth, l = e.blurHeight, S = S || e.blurDataURL, N = e.src, !y) {
                        if (U || B) {
                            if (U && !B) {
                                let t = U / e.width;
                                B = Math.round(e.height * t)
                            } else if (!U && B) {
                                let t = B / e.height;
                                U = Math.round(e.width * t)
                            }
                        } else U = e.width, B = e.height
                    }
                }
                let W = !c && ("lazy" === f || void 0 === f);
                (!(u = "string" == typeof u ? u : N) || u.startsWith("data:") || u.startsWith("blob:")) && (d = !0, W = !1), o.unoptimized && (d = !0), D && u.endsWith(".svg") && !o.dangerouslyAllowSVG && (d = !0), c && (C = "high");
                let F = getInt(m),
                    G = Object.assign(y ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: j,
                        objectPosition: O
                    } : {}, z ? {} : {
                        color: "transparent"
                    }, b),
                    H = k || "empty" === w ? null : "blur" === w ? 'url("data:image/svg+xml;charset=utf-8,' + (0, r.getImageBlurSvg)({
                        widthInt: U,
                        heightInt: B,
                        blurWidth: a,
                        blurHeight: l,
                        blurDataURL: S || "",
                        objectFit: G.objectFit
                    }) + '")' : 'url("' + w + '")',
                    T = H ? {
                        backgroundSize: G.objectFit || "cover",
                        backgroundPosition: G.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: H
                    } : {},
                    $ = function(e) {
                        let {
                            config: t,
                            src: n,
                            unoptimized: r,
                            width: i,
                            quality: o,
                            sizes: a,
                            loader: l
                        } = e;
                        if (r) return {
                            src: n,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: u,
                            kind: s
                        } = function(e, t, n) {
                            let {
                                deviceSizes: r,
                                allSizes: i
                            } = e;
                            if (n) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let r; r = e.exec(n); r) t.push(parseInt(r[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: i.filter(t => t >= r[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: i,
                                    kind: "w"
                                }
                            }
                            if ("number" != typeof t) return {
                                widths: r,
                                kind: "w"
                            };
                            let o = [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))];
                            return {
                                widths: o,
                                kind: "x"
                            }
                        }(t, i, a), d = u.length - 1;
                        return {
                            sizes: a || "w" !== s ? a : "100vw",
                            srcSet: u.map((e, r) => l({
                                config: t,
                                src: n,
                                quality: o,
                                width: e
                            }) + " " + ("w" === s ? e : r + 1) + s).join(", "),
                            src: l({
                                config: t,
                                src: n,
                                quality: o,
                                width: u[d]
                            })
                        }
                    }({
                        config: o,
                        src: u,
                        unoptimized: d,
                        width: U,
                        quality: F,
                        sizes: s,
                        loader: L
                    }),
                    q = { ...I,
                        loading: W ? "lazy" : f,
                        fetchPriority: C,
                        width: U,
                        height: B,
                        decoding: "async",
                        className: p,
                        style: { ...G,
                            ...T
                        },
                        sizes: $.sizes,
                        srcSet: $.srcSet,
                        src: $.src
                    },
                    V = {
                        unoptimized: d,
                        priority: c,
                        placeholder: w,
                        fill: y
                    };
                return {
                    props: q,
                    meta: V
                }
            }
        },
        35793: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    defaultHead: function() {
                        return defaultHead
                    },
                    default: function() {
                        return _default
                    }
                });
            let r = n(70817),
                i = n(37401),
                o = i._(n(2265)),
                a = r._(n(80110)),
                l = n(28569),
                u = n(61852),
                s = n(94472);

            function defaultHead(e) {
                void 0 === e && (e = !1);
                let t = [o.default.createElement("meta", {
                    charSet: "utf-8"
                })];
                return e || t.push(o.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function onlyReactElement(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
            }
            n(92637);
            let d = ["name", "httpEquiv", "charSet", "itemProp"];

            function reduceComponents(e, t) {
                let {
                    inAmpMode: n
                } = t;
                return e.reduce(onlyReactElement, []).reverse().concat(defaultHead(n).reverse()).filter(function() {
                    let e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return i => {
                        let o = !0,
                            a = !1;
                        if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                            a = !0;
                            let t = i.key.slice(i.key.indexOf("$") + 1);
                            e.has(t) ? o = !1 : e.add(t)
                        }
                        switch (i.type) {
                            case "title":
                            case "base":
                                t.has(i.type) ? o = !1 : t.add(i.type);
                                break;
                            case "meta":
                                for (let e = 0, t = d.length; e < t; e++) {
                                    let t = d[e];
                                    if (i.props.hasOwnProperty(t)) {
                                        if ("charSet" === t) n.has(t) ? o = !1 : n.add(t);
                                        else {
                                            let e = i.props[t],
                                                n = r[t] || new Set;
                                            ("name" !== t || !a) && n.has(e) ? o = !1 : (n.add(e), r[t] = n)
                                        }
                                    }
                                }
                        }
                        return o
                    }
                }()).reverse().map((e, t) => {
                    let r = e.key || t;
                    if (!n && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                        let t = { ...e.props || {}
                        };
                        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, o.default.cloneElement(e, t)
                    }
                    return o.default.cloneElement(e, {
                        key: r
                    })
                })
            }
            let _default = function(e) {
                let {
                    children: t
                } = e, n = (0, o.useContext)(l.AmpStateContext), r = (0, o.useContext)(u.HeadManagerContext);
                return o.default.createElement(a.default, {
                    reduceComponentsToState: reduceComponents,
                    headManager: r,
                    inAmpMode: (0, s.isInAmpMode)(n)
                }, t)
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        61511: function(e, t) {
            "use strict";

            function getImageBlurSvg(e) {
                let {
                    widthInt: t,
                    heightInt: n,
                    blurWidth: r,
                    blurHeight: i,
                    blurDataURL: o,
                    objectFit: a
                } = e, l = r ? 40 * r : t, u = i ? 40 * i : n, s = l && u ? "viewBox='0 0 " + l + " " + u + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + s + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (s ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return getImageBlurSvg
                }
            })
        },
        47327: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = n(70817),
                i = r._(n(2265)),
                o = n(17727),
                a = i.default.createContext(o.imageConfigDefault)
        },
        17727: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    VALID_LOADERS: function() {
                        return n
                    },
                    imageConfigDefault: function() {
                        return r
                    }
                });
            let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
                r = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        80679: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    unstable_getImgProps: function() {
                        return unstable_getImgProps
                    },
                    default: function() {
                        return u
                    }
                });
            let r = n(70817),
                i = n(7929),
                o = n(92637),
                a = n(90413),
                l = r._(n(69950)),
                unstable_getImgProps = e => {
                    (0, o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
                    let {
                        props: t
                    } = (0, i.getImgProps)(e, {
                        defaultLoader: l.default,
                        imgConf: {
                            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                            path: "/_next/image",
                            loader: "default",
                            dangerouslyAllowSVG: !1,
                            unoptimized: !1
                        }
                    });
                    for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
                    return {
                        props: t
                    }
                },
                u = a.Image
        },
        69950: function(e, t) {
            "use strict";

            function defaultLoader(e) {
                let {
                    config: t,
                    src: n,
                    width: r,
                    quality: i
                } = e;
                return t.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + (i || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), defaultLoader.__next_img_default = !0;
            let n = defaultLoader
        },
        36304: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(70817),
                i = r._(n(2265)),
                o = i.default.createContext(null)
        },
        80110: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return SideEffect
                }
            });
            let r = n(2265),
                i = r.useLayoutEffect,
                o = r.useEffect;

            function SideEffect(e) {
                let {
                    headManager: t,
                    reduceComponentsToState: n
                } = e;

                function emitChange() {
                    if (t && t.mountedInstances) {
                        let i = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(n(i, e))
                    }
                }
                return i(() => {
                    var n;
                    return null == t || null == (n = t.mountedInstances) || n.add(e.children), () => {
                        var n;
                        null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                    }
                }), i(() => (t && (t._pendingUpdate = emitChange), () => {
                    t && (t._pendingUpdate = emitChange)
                })), o(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
                    t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                })), null
            }
        },
        92637: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "warnOnce", {
                enumerable: !0,
                get: function() {
                    return warnOnce
                }
            });
            let warnOnce = e => {}
        },
        16691: function(e, t, n) {
            e.exports = n(80679)
        }
    }
]);