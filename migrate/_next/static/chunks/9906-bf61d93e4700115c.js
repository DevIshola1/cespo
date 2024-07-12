"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9906], {
        27733: function(e, t, r) {
            r.d(t, {
                B: function() {
                    return $e02a7d9cb1dc128c$export$c74125a8e3af6bb2
                }
            });
            var o = r(2265),
                n = r(56989),
                u = r(42210),
                c = r(67256);

            function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(e) {
                let t = e + "CollectionProvider",
                    [r, l] = (0, n.b)(t),
                    [i, a] = r(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    f = e + "CollectionSlot",
                    s = o.forwardRef((e, t) => {
                        let {
                            scope: r,
                            children: n
                        } = e, l = a(f, r), i = (0, u.e)(t, l.collectionRef);
                        return o.createElement(c.g7, {
                            ref: i
                        }, n)
                    }),
                    d = e + "CollectionItemSlot",
                    b = "data-radix-collection-item",
                    p = o.forwardRef((e, t) => {
                        let {
                            scope: r,
                            children: n,
                            ...l
                        } = e, i = o.useRef(null), f = (0, u.e)(t, i), s = a(d, r);
                        return o.useEffect(() => (s.itemMap.set(i, {
                            ref: i,
                            ...l
                        }), () => void s.itemMap.delete(i))), o.createElement(c.g7, {
                            [b]: "",
                            ref: f
                        }, n)
                    });
                return [{
                    Provider: e => {
                        let {
                            scope: t,
                            children: r
                        } = e, n = o.useRef(null), u = o.useRef(new Map).current;
                        return o.createElement(i, {
                            scope: t,
                            itemMap: u,
                            collectionRef: n
                        }, r)
                    },
                    Slot: s,
                    ItemSlot: p
                }, function(t) {
                    let r = a(e + "CollectionConsumer", t),
                        n = o.useCallback(() => {
                            let e = r.collectionRef.current;
                            if (!e) return [];
                            let t = Array.from(e.querySelectorAll(`[${b}]`)),
                                o = Array.from(r.itemMap.values()),
                                n = o.sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current));
                            return n
                        }, [r.collectionRef, r.itemMap]);
                    return n
                }, l]
            }
        },
        20966: function(e, t, r) {
            r.d(t, {
                M: function() {
                    return $1746a345f3d73bb7$export$f680877a34711e37
                }
            });
            var o, n = r(2265),
                u = r(51030);
            let c = (o || (o = r.t(n, 2)))["useId".toString()] || (() => void 0),
                l = 0;

            function $1746a345f3d73bb7$export$f680877a34711e37(e) {
                let [t, r] = n.useState(c());
                return (0, u.b)(() => {
                    e || r(e => null != e ? e : String(l++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
        },
        44356: function(e, t, r) {
            r.d(t, {
                Pc: function() {
                    return R
                },
                ck: function() {
                    return M
                },
                fC: function() {
                    return A
                }
            });
            var o = r(13428),
                n = r(2265),
                u = r(85744),
                c = r(27733),
                l = r(42210),
                i = r(56989),
                a = r(20966),
                f = r(9381),
                s = r(16459),
                d = r(73763),
                b = r(65400);
            let p = "rovingFocusGroup.onEntryFocus",
                v = {
                    bubbles: !1,
                    cancelable: !0
                },
                m = "RovingFocusGroup",
                [g, $, w] = (0, c.B)(m),
                [h, R] = (0, i.b)(m, [w]),
                [S, E] = h(m),
                F = (0, n.forwardRef)((e, t) => (0, n.createElement)(g.Provider, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, n.createElement)(g.Slot, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, n.createElement)(x, (0, o.Z)({}, e, {
                    ref: t
                }))))),
                x = (0, n.forwardRef)((e, t) => {
                    let {
                        __scopeRovingFocusGroup: r,
                        orientation: c,
                        loop: i = !1,
                        dir: a,
                        currentTabStopId: m,
                        defaultCurrentTabStopId: g,
                        onCurrentTabStopIdChange: w,
                        onEntryFocus: h,
                        ...R
                    } = e, E = (0, n.useRef)(null), F = (0, l.e)(t, E), x = (0, b.gm)(a), [C = null, I] = (0, d.T)({
                        prop: m,
                        defaultProp: g,
                        onChange: w
                    }), [A, M] = (0, n.useState)(!1), y = (0, s.W)(h), T = $(r), k = (0, n.useRef)(!1), [_, D] = (0, n.useState)(0);
                    return (0, n.useEffect)(() => {
                        let e = E.current;
                        if (e) return e.addEventListener(p, y), () => e.removeEventListener(p, y)
                    }, [y]), (0, n.createElement)(S, {
                        scope: r,
                        orientation: c,
                        dir: x,
                        loop: i,
                        currentTabStopId: C,
                        onItemFocus: (0, n.useCallback)(e => I(e), [I]),
                        onItemShiftTab: (0, n.useCallback)(() => M(!0), []),
                        onFocusableItemAdd: (0, n.useCallback)(() => D(e => e + 1), []),
                        onFocusableItemRemove: (0, n.useCallback)(() => D(e => e - 1), [])
                    }, (0, n.createElement)(f.WV.div, (0, o.Z)({
                        tabIndex: A || 0 === _ ? -1 : 0,
                        "data-orientation": c
                    }, R, {
                        ref: F,
                        style: {
                            outline: "none",
                            ...e.style
                        },
                        onMouseDown: (0, u.M)(e.onMouseDown, () => {
                            k.current = !0
                        }),
                        onFocus: (0, u.M)(e.onFocus, e => {
                            let t = !k.current;
                            if (e.target === e.currentTarget && t && !A) {
                                let t = new CustomEvent(p, v);
                                if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                                    let e = T().filter(e => e.focusable),
                                        t = e.find(e => e.active),
                                        r = e.find(e => e.id === C),
                                        o = [t, r, ...e].filter(Boolean),
                                        n = o.map(e => e.ref.current);
                                    $d7bdfb9eb0fdf311$var$focusFirst(n)
                                }
                            }
                            k.current = !1
                        }),
                        onBlur: (0, u.M)(e.onBlur, () => M(!1))
                    })))
                }),
                C = (0, n.forwardRef)((e, t) => {
                    let {
                        __scopeRovingFocusGroup: r,
                        focusable: c = !0,
                        active: l = !1,
                        tabStopId: i,
                        ...s
                    } = e, d = (0, a.M)(), b = i || d, p = E("RovingFocusGroupItem", r), v = p.currentTabStopId === b, m = $(r), {
                        onFocusableItemAdd: w,
                        onFocusableItemRemove: h
                    } = p;
                    return (0, n.useEffect)(() => {
                        if (c) return w(), () => h()
                    }, [c, w, h]), (0, n.createElement)(g.ItemSlot, {
                        scope: r,
                        id: b,
                        focusable: c,
                        active: l
                    }, (0, n.createElement)(f.WV.span, (0, o.Z)({
                        tabIndex: v ? 0 : -1,
                        "data-orientation": p.orientation
                    }, s, {
                        ref: t,
                        onMouseDown: (0, u.M)(e.onMouseDown, e => {
                            c ? p.onItemFocus(b) : e.preventDefault()
                        }),
                        onFocus: (0, u.M)(e.onFocus, () => p.onItemFocus(b)),
                        onKeyDown: (0, u.M)(e.onKeyDown, e => {
                            if ("Tab" === e.key && e.shiftKey) {
                                p.onItemShiftTab();
                                return
                            }
                            if (e.target !== e.currentTarget) return;
                            let t = function(e, t, r) {
                                var o;
                                let n = (o = e.key, "rtl" !== r ? o : "ArrowLeft" === o ? "ArrowRight" : "ArrowRight" === o ? "ArrowLeft" : o);
                                if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(n)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(n))) return I[n]
                            }(e, p.orientation, p.dir);
                            if (void 0 !== t) {
                                e.preventDefault();
                                let n = m().filter(e => e.focusable),
                                    u = n.map(e => e.ref.current);
                                if ("last" === t) u.reverse();
                                else if ("prev" === t || "next" === t) {
                                    var r, o;
                                    "prev" === t && u.reverse();
                                    let n = u.indexOf(e.currentTarget);
                                    u = p.loop ? (r = u, o = n + 1, r.map((e, t) => r[(o + t) % r.length])) : u.slice(n + 1)
                                }
                                setTimeout(() => $d7bdfb9eb0fdf311$var$focusFirst(u))
                            }
                        })
                    })))
                }),
                I = {
                    ArrowLeft: "prev",
                    ArrowUp: "prev",
                    ArrowRight: "next",
                    ArrowDown: "next",
                    PageUp: "first",
                    Home: "first",
                    PageDown: "last",
                    End: "last"
                };

            function $d7bdfb9eb0fdf311$var$focusFirst(e) {
                let t = document.activeElement;
                for (let r of e)
                    if (r === t || (r.focus(), document.activeElement !== t)) return
            }
            let A = F,
                M = C
        },
        73763: function(e, t, r) {
            r.d(t, {
                T: function() {
                    return $71cd76cc60e0454e$export$6f32135080cb4c3
                }
            });
            var o = r(2265),
                n = r(16459);

            function $71cd76cc60e0454e$export$6f32135080cb4c3({
                prop: e,
                defaultProp: t,
                onChange: r = () => {}
            }) {
                let [u, c] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let r = (0, o.useState)(e),
                        [u] = r,
                        c = (0, o.useRef)(u),
                        l = (0, n.W)(t);
                    return (0, o.useEffect)(() => {
                        c.current !== u && (l(u), c.current = u)
                    }, [u, c, l]), r
                }({
                    defaultProp: t,
                    onChange: r
                }), l = void 0 !== e, i = l ? e : u, a = (0, n.W)(r), f = (0, o.useCallback)(t => {
                    if (l) {
                        let r = "function" == typeof t ? t(e) : t;
                        r !== e && a(r)
                    } else c(t)
                }, [l, e, c, a]);
                return [i, f]
            }
        },
        94977: function(e, t, r) {
            r.d(t, {
                t: function() {
                    return $db6c3485150b8e66$export$1ab7ae714698c4b8
                }
            });
            var o = r(2265),
                n = r(51030);

            function $db6c3485150b8e66$export$1ab7ae714698c4b8(e) {
                let [t, r] = (0, o.useState)(void 0);
                return (0, n.b)(() => {
                    if (e) {
                        r({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t => {
                            let o, n;
                            if (!Array.isArray(t) || !t.length) return;
                            let u = t[0];
                            if ("borderBoxSize" in u) {
                                let e = u.borderBoxSize,
                                    t = Array.isArray(e) ? e[0] : e;
                                o = t.inlineSize, n = t.blockSize
                            } else o = e.offsetWidth, n = e.offsetHeight;
                            r({
                                width: o,
                                height: n
                            })
                        });
                        return t.observe(e, {
                            box: "border-box"
                        }), () => t.unobserve(e)
                    }
                    r(void 0)
                }, [e]), t
            }
        }
    }
]);