(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9160], {
        42480: function() {},
        22679: function(e, n, t) {
            Promise.resolve().then(t.bind(t, 48516))
        },
        48516: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return NotFound
                }
            });
            var i = t(57437),
                o = t(24033),
                l = t(23611);

            function NotFound() {
                let e = (0, o.useRouter)();
                return (0, i.jsxs)("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mb-16 items-center justify-center text-center",
                    children: [(0, i.jsx)("span", {
                        className: "bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent",
                        children: "404"
                    }), (0, i.jsx)("h2", {
                        className: "my-2 font-heading text-2xl font-bold",
                        children: "Something's missing"
                    }), (0, i.jsx)("p", {
                        children: "Sorry, the page you are looking for doesn't exist or has been moved."
                    }), (0, i.jsxs)("div", {
                        className: "mt-8 flex justify-center gap-2",
                        children: [(0, i.jsx)(l.z, {
                            onClick: () => e.back(),
                            variant: "default",
                            size: "lg",
                            children: "Go back"
                        }), (0, i.jsx)(l.z, {
                            onClick: () => e.push("/dashboard"),
                            variant: "ghost",
                            size: "lg",
                            children: "Back to Home"
                        })]
                    })]
                })
            }
        },
        23611: function(e, n, t) {
            "use strict";
            t.d(n, {
                d: function() {
                    return s
                },
                z: function() {
                    return u
                }
            });
            var i = t(57437),
                o = t(2265),
                l = t(67256),
                c = t(39213),
                a = t(81628);
            let s = (0, c.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                            outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline"
                        },
                        size: {
                            default: "h-9 px-4 py-2",
                            sm: "h-8 rounded-md px-3 text-xs",
                            lg: "h-10 rounded-md px-8",
                            icon: "h-9 w-9"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                u = o.forwardRef((e, n) => {
                    let {
                        className: t,
                        variant: o,
                        size: c,
                        asChild: u = !1,
                        ...d
                    } = e, f = u ? l.g7 : "button";
                    return (0, i.jsx)(f, {
                        className: (0, a.cn)(s({
                            variant: o,
                            size: c,
                            className: t
                        })),
                        ref: n,
                        ...d
                    })
                });
            u.displayName = "Button"
        },
        81628: function(e, n, t) {
            "use strict";
            t.d(n, {
                JU: function() {
                    return createSupabaseClient
                },
                cn: function() {
                    return cn
                }
            });
            var i = t(57042);
            t(44155);
            var o = t(74769),
                l = t(45456);
            let c = (0, l.eI)("https://jbhfmsjqqnisfjueefag.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiaGZtc2pxcW5pc2ZqdWVlZmFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNDA2NDAsImV4cCI6MjAzMjcxNjY0MH0.XWTBfB25fCdGLp4ifAG5nPfuBXbQCBSLLTqDqf4s7vw");

            function createSupabaseClient() {
                return c
            }

            function cn() {
                for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                return (0, o.m6)((0, i.W)(n))
            }
        },
        24033: function(e, n, t) {
            e.exports = t(50094)
        },
        13428: function(e, n, t) {
            "use strict";

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var i in t)({}).hasOwnProperty.call(t, i) && (e[i] = t[i])
                    }
                    return e
                }).apply(null, arguments)
            }
            t.d(n, {
                Z: function() {
                    return _extends
                }
            })
        },
        42210: function(e, n, t) {
            "use strict";
            t.d(n, {
                F: function() {
                    return $6ed0406888f73fc4$export$43e446d32b3d21af
                },
                e: function() {
                    return $6ed0406888f73fc4$export$c7b2cbe3552a0d05
                }
            });
            var i = t(2265);

            function $6ed0406888f73fc4$export$43e446d32b3d21af(...e) {
                return n => e.forEach(e => {
                    "function" == typeof e ? e(n) : null != e && (e.current = n)
                })
            }

            function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...e) {
                return (0, i.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...e), e)
            }
        },
        67256: function(e, n, t) {
            "use strict";
            t.d(n, {
                A4: function() {
                    return $5e63c961fc1ce211$export$d9f1ccf0bdb05d45
                },
                g7: function() {
                    return c
                }
            });
            var i = t(13428),
                o = t(2265),
                l = t(42210);
            let c = (0, o.forwardRef)((e, n) => {
                let {
                    children: t,
                    ...l
                } = e, c = o.Children.toArray(t), s = c.find($5e63c961fc1ce211$var$isSlottable);
                if (s) {
                    let e = s.props.children,
                        t = c.map(n => n !== s ? n : o.Children.count(e) > 1 ? o.Children.only(null) : (0, o.isValidElement)(e) ? e.props.children : null);
                    return (0, o.createElement)(a, (0, i.Z)({}, l, {
                        ref: n
                    }), (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, t) : null)
                }
                return (0, o.createElement)(a, (0, i.Z)({}, l, {
                    ref: n
                }), t)
            });
            c.displayName = "Slot";
            let a = (0, o.forwardRef)((e, n) => {
                let {
                    children: t,
                    ...i
                } = e;
                return (0, o.isValidElement)(t) ? (0, o.cloneElement)(t, { ... function(e, n) {
                        let t = { ...n
                        };
                        for (let i in n) {
                            let o = e[i],
                                l = n[i],
                                c = /^on[A-Z]/.test(i);
                            c ? o && l ? t[i] = (...e) => {
                                l(...e), o(...e)
                            } : o && (t[i] = o) : "style" === i ? t[i] = { ...o,
                                ...l
                            } : "className" === i && (t[i] = [o, l].filter(Boolean).join(" "))
                        }
                        return { ...e,
                            ...t
                        }
                    }(i, t.props),
                    ref: n ? (0, l.F)(n, t.ref) : t.ref
                }) : o.Children.count(t) > 1 ? o.Children.only(null) : null
            });
            a.displayName = "SlotClone";
            let $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({
                children: e
            }) => (0, o.createElement)(o.Fragment, null, e);

            function $5e63c961fc1ce211$var$isSlottable(e) {
                return (0, o.isValidElement)(e) && e.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45
            }
        },
        39213: function(e, n, t) {
            "use strict";
            t.d(n, {
                j: function() {
                    return cva
                }
            });
            let falsyToString = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
                cx = function() {
                    for (var e, n, t = 0, i = ""; t < arguments.length;)(e = arguments[t++]) && (n = function r(e) {
                        var n, t, i = "";
                        if ("string" == typeof e || "number" == typeof e) i += e;
                        else if ("object" == typeof e) {
                            if (Array.isArray(e))
                                for (n = 0; n < e.length; n++) e[n] && (t = r(e[n])) && (i && (i += " "), i += t);
                            else
                                for (n in e) e[n] && (i && (i += " "), i += n)
                        }
                        return i
                    }(e)) && (i && (i += " "), i += n);
                    return i
                },
                cva = (e, n) => t => {
                    var i;
                    if ((null == n ? void 0 : n.variants) == null) return cx(e, null == t ? void 0 : t.class, null == t ? void 0 : t.className);
                    let {
                        variants: o,
                        defaultVariants: l
                    } = n, c = Object.keys(o).map(e => {
                        let n = null == t ? void 0 : t[e],
                            i = null == l ? void 0 : l[e];
                        if (null === n) return null;
                        let c = falsyToString(n) || falsyToString(i);
                        return o[e][c]
                    }), a = t && Object.entries(t).reduce((e, n) => {
                        let [t, i] = n;
                        return void 0 === i || (e[t] = i), e
                    }, {}), s = null == n ? void 0 : null === (i = n.compoundVariants) || void 0 === i ? void 0 : i.reduce((e, n) => {
                        let {
                            class: t,
                            className: i,
                            ...o
                        } = n;
                        return Object.entries(o).every(e => {
                            let [n, t] = e;
                            return Array.isArray(t) ? t.includes({ ...l,
                                ...a
                            }[n]) : ({ ...l,
                                ...a
                            })[n] === t
                        }) ? [...e, t, i] : e
                    }, []);
                    return cx(e, c, s, null == t ? void 0 : t.class, null == t ? void 0 : t.className)
                }
        }
    },
    function(e) {
        e.O(0, [1201, 2971, 2472, 1744], function() {
            return e(e.s = 22679)
        }), _N_E = e.O()
    }
]);