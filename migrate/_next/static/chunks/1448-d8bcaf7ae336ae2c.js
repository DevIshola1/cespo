"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1448], {
        85859: function(e, t, n) {
            n.d(t, {
                Ry: function() {
                    return hideOthers
                }
            });
            var o = new WeakMap,
                i = new WeakMap,
                a = {},
                l = 0,
                unwrapHost = function(e) {
                    return e && (e.host || unwrapHost(e.parentNode))
                },
                applyAttributeToOthers = function(e, t, n, u) {
                    var c = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var n = unwrapHost(e);
                        return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    a[n] || (a[n] = new WeakMap);
                    var s = a[n],
                        f = [],
                        d = new Set,
                        p = new Set(c),
                        keep = function(e) {
                            !e || d.has(e) || (d.add(e), keep(e.parentNode))
                        };
                    c.forEach(keep);
                    var deep = function(e) {
                        !e || p.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (d.has(e)) deep(e);
                            else try {
                                var t = e.getAttribute(u),
                                    a = null !== t && "false" !== t,
                                    l = (o.get(e) || 0) + 1,
                                    c = (s.get(e) || 0) + 1;
                                o.set(e, l), s.set(e, c), f.push(e), 1 === l && a && i.set(e, !0), 1 === c && e.setAttribute(n, "true"), a || e.setAttribute(u, "true")
                            } catch (t) {
                                console.error("aria-hidden: cannot operate on ", e, t)
                            }
                        })
                    };
                    return deep(t), d.clear(), l++,
                        function() {
                            f.forEach(function(e) {
                                var t = o.get(e) - 1,
                                    a = s.get(e) - 1;
                                o.set(e, t), s.set(e, a), t || (i.has(e) || e.removeAttribute(u), i.delete(e)), a || e.removeAttribute(n)
                            }), --l || (o = new WeakMap, o = new WeakMap, i = new WeakMap, a = {})
                        }
                },
                hideOthers = function(e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var o = Array.from(Array.isArray(e) ? e : [e]),
                        i = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                    return i ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live]"))), applyAttributeToOthers(o, i, n, "aria-hidden")) : function() {
                        return null
                    }
                }
        },
        55322: function(e, t, n) {
            n.d(t, {
                Av: function() {
                    return l
                },
                pF: function() {
                    return o
                },
                xv: function() {
                    return a
                },
                zi: function() {
                    return i
                }
            });
            var o = "right-scroll-bar-position",
                i = "width-before-scroll-bar",
                a = "with-scroll-bars-hidden",
                l = "--removed-body-scroll-bar-size"
        },
        92776: function(e, t, n) {
            n.d(t, {
                jp: function() {
                    return RemoveScrollBar
                }
            });
            var o = n(2265),
                i = n(98662),
                a = n(55322),
                l = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                parse = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                getOffset = function(e) {
                    var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        o = t["padding" === e ? "paddingTop" : "marginTop"],
                        i = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [parse(n), parse(o), parse(i)]
                },
                getGapWidth = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return l;
                    var t = getOffset(e),
                        n = document.documentElement.clientWidth,
                        o = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, o - n + t[2] - t[0])
                    }
                },
                u = (0, i.Ws)(),
                c = "data-scroll-locked",
                getStyles = function(e, t, n, o) {
                    var i = e.left,
                        l = e.top,
                        u = e.right,
                        s = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .".concat(a.xv, " {\n   overflow: hidden ").concat(o, ";\n   padding-right: ").concat(s, "px ").concat(o, ";\n  }\n  body[").concat(c, "] {\n    overflow: hidden ").concat(o, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(o, ";"), "margin" === n && "\n    padding-left: ".concat(i, "px;\n    padding-top: ").concat(l, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(o, ";\n    "), "padding" === n && "padding-right: ".concat(s, "px ").concat(o, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a.pF, " {\n    right: ").concat(s, "px ").concat(o, ";\n  }\n  \n  .").concat(a.zi, " {\n    margin-right: ").concat(s, "px ").concat(o, ";\n  }\n  \n  .").concat(a.pF, " .").concat(a.pF, " {\n    right: 0 ").concat(o, ";\n  }\n  \n  .").concat(a.zi, " .").concat(a.zi, " {\n    margin-right: 0 ").concat(o, ";\n  }\n  \n  body[").concat(c, "] {\n    ").concat(a.Av, ": ").concat(s, "px;\n  }\n")
                },
                getCurrentUseCounter = function() {
                    var e = parseInt(document.body.getAttribute(c) || "0", 10);
                    return isFinite(e) ? e : 0
                },
                useLockAttribute = function() {
                    o.useEffect(function() {
                        return document.body.setAttribute(c, (getCurrentUseCounter() + 1).toString()),
                            function() {
                                var e = getCurrentUseCounter() - 1;
                                e <= 0 ? document.body.removeAttribute(c) : document.body.setAttribute(c, e.toString())
                            }
                    }, [])
                },
                RemoveScrollBar = function(e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        i = e.gapMode,
                        a = void 0 === i ? "margin" : i;
                    useLockAttribute();
                    var l = o.useMemo(function() {
                        return getGapWidth(a)
                    }, [a]);
                    return o.createElement(u, {
                        styles: getStyles(l, !t, a, n ? "" : "!important")
                    })
                }
        },
        32098: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return b
                }
            });
            var o = n(50044),
                i = n(2265),
                a = n(55322),
                l = n(55835),
                u = (0, n(18427)._)(),
                nothing = function() {},
                c = i.forwardRef(function(e, t) {
                    var n = i.useRef(null),
                        a = i.useState({
                            onScrollCapture: nothing,
                            onWheelCapture: nothing,
                            onTouchMoveCapture: nothing
                        }),
                        c = a[0],
                        s = a[1],
                        f = e.forwardProps,
                        d = e.children,
                        p = e.className,
                        g = e.removeScrollBar,
                        m = e.enabled,
                        v = e.shards,
                        h = e.sideCar,
                        _ = e.noIsolation,
                        y = e.inert,
                        b = e.allowPinchZoom,
                        w = e.as,
                        E = void 0 === w ? "div" : w,
                        x = (0, o.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        S = (0, l.q)([n, t]),
                        C = (0, o.__assign)((0, o.__assign)({}, x), c);
                    return i.createElement(i.Fragment, null, m && i.createElement(h, {
                        sideCar: u,
                        removeScrollBar: g,
                        shards: v,
                        noIsolation: _,
                        inert: y,
                        setCallbacks: s,
                        allowPinchZoom: !!b,
                        lockRef: n
                    }), f ? i.cloneElement(i.Children.only(d), (0, o.__assign)((0, o.__assign)({}, C), {
                        ref: S
                    })) : i.createElement(E, (0, o.__assign)({}, C, {
                        className: p,
                        ref: S
                    }), d))
                });
            c.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, c.classNames = {
                fullWidth: a.zi,
                zeroRight: a.pF
            };
            var s = n(26898),
                f = n(92776),
                d = n(98662),
                p = !1;
            if ("undefined" != typeof window) try {
                var g = Object.defineProperty({}, "passive", {
                    get: function() {
                        return p = !0, !0
                    }
                });
                window.addEventListener("test", g, g), window.removeEventListener("test", g, g)
            } catch (e) {
                p = !1
            }
            var m = !!p && {
                    passive: !1
                },
                elementCanBeScrolled = function(e, t) {
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
                },
                locationCouldBeScrolled = function(e, t) {
                    var n = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), elementCouldBeScrolled(e, n)) {
                            var o = getScrollVariables(e, n);
                            if (o[1] > o[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== document.body);
                    return !1
                },
                elementCouldBeScrolled = function(e, t) {
                    return "v" === e ? elementCanBeScrolled(t, "overflowY") : elementCanBeScrolled(t, "overflowX")
                },
                getScrollVariables = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                handleScroll = function(e, t, n, o, i) {
                    var a, l = (a = window.getComputedStyle(t).direction, "h" === e && "rtl" === a ? -1 : 1),
                        u = l * o,
                        c = n.target,
                        s = t.contains(c),
                        f = !1,
                        d = u > 0,
                        p = 0,
                        g = 0;
                    do {
                        var m = getScrollVariables(e, c),
                            v = m[0],
                            h = m[1] - m[2] - l * v;
                        (v || h) && elementCouldBeScrolled(e, c) && (p += h, g += v), c = c.parentNode
                    } while (!s && c !== document.body || s && (t.contains(c) || t === c));
                    return d && (i && 0 === p || !i && u > p) ? f = !0 : !d && (i && 0 === g || !i && -u > g) && (f = !0), f
                },
                getTouchXY = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                getDeltaXY = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                extractRef = function(e) {
                    return e && "current" in e ? e.current : e
                },
                v = 0,
                h = [],
                _ = (0, s.L)(u, function(e) {
                    var t = i.useRef([]),
                        n = i.useRef([0, 0]),
                        a = i.useRef(),
                        l = i.useState(v++)[0],
                        u = i.useState(function() {
                            return (0, d.Ws)()
                        })[0],
                        c = i.useRef(e);
                    i.useEffect(function() {
                        c.current = e
                    }, [e]), i.useEffect(function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(l));
                            var t = (0, o.__spreadArray)([e.lockRef.current], (e.shards || []).map(extractRef), !0).filter(Boolean);
                            return t.forEach(function(e) {
                                    return e.classList.add("allow-interactivity-".concat(l))
                                }),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(l)), t.forEach(function(e) {
                                        return e.classList.remove("allow-interactivity-".concat(l))
                                    })
                                }
                        }
                    }, [e.inert, e.lockRef.current, e.shards]);
                    var s = i.useCallback(function(e, t) {
                            if ("touches" in e && 2 === e.touches.length) return !c.current.allowPinchZoom;
                            var o, i = getTouchXY(e),
                                l = n.current,
                                u = "deltaX" in e ? e.deltaX : l[0] - i[0],
                                s = "deltaY" in e ? e.deltaY : l[1] - i[1],
                                f = e.target,
                                d = Math.abs(u) > Math.abs(s) ? "h" : "v";
                            if ("touches" in e && "h" === d && "range" === f.type) return !1;
                            var p = locationCouldBeScrolled(d, f);
                            if (!p) return !0;
                            if (p ? o = d : (o = "v" === d ? "h" : "v", p = locationCouldBeScrolled(d, f)), !p) return !1;
                            if (!a.current && "changedTouches" in e && (u || s) && (a.current = o), !o) return !0;
                            var g = a.current || o;
                            return handleScroll(g, t, e, "h" === g ? u : s, !0)
                        }, []),
                        p = i.useCallback(function(e) {
                            if (h.length && h[h.length - 1] === u) {
                                var n = "deltaY" in e ? getDeltaXY(e) : getTouchXY(e),
                                    o = t.current.filter(function(t) {
                                        var o;
                                        return t.name === e.type && t.target === e.target && (o = t.delta)[0] === n[0] && o[1] === n[1]
                                    })[0];
                                if (o && o.should) {
                                    e.cancelable && e.preventDefault();
                                    return
                                }
                                if (!o) {
                                    var i = (c.current.shards || []).map(extractRef).filter(Boolean).filter(function(t) {
                                        return t.contains(e.target)
                                    });
                                    (i.length > 0 ? s(e, i[0]) : !c.current.noIsolation) && e.cancelable && e.preventDefault()
                                }
                            }
                        }, []),
                        g = i.useCallback(function(e, n, o, i) {
                            var a = {
                                name: e,
                                delta: n,
                                target: o,
                                should: i
                            };
                            t.current.push(a), setTimeout(function() {
                                t.current = t.current.filter(function(e) {
                                    return e !== a
                                })
                            }, 1)
                        }, []),
                        _ = i.useCallback(function(e) {
                            n.current = getTouchXY(e), a.current = void 0
                        }, []),
                        y = i.useCallback(function(t) {
                            g(t.type, getDeltaXY(t), t.target, s(t, e.lockRef.current))
                        }, []),
                        b = i.useCallback(function(t) {
                            g(t.type, getTouchXY(t), t.target, s(t, e.lockRef.current))
                        }, []);
                    i.useEffect(function() {
                        return h.push(u), e.setCallbacks({
                                onScrollCapture: y,
                                onWheelCapture: y,
                                onTouchMoveCapture: b
                            }), document.addEventListener("wheel", p, m), document.addEventListener("touchmove", p, m), document.addEventListener("touchstart", _, m),
                            function() {
                                h = h.filter(function(e) {
                                    return e !== u
                                }), document.removeEventListener("wheel", p, m), document.removeEventListener("touchmove", p, m), document.removeEventListener("touchstart", _, m)
                            }
                    }, []);
                    var w = e.removeScrollBar,
                        E = e.inert;
                    return i.createElement(i.Fragment, null, E ? i.createElement(u, {
                        styles: "\n  .block-interactivity-".concat(l, " {pointer-events: none;}\n  .allow-interactivity-").concat(l, " {pointer-events: all;}\n")
                    }) : null, w ? i.createElement(f.jp, {
                        gapMode: "margin"
                    }) : null)
                }),
                y = i.forwardRef(function(e, t) {
                    return i.createElement(c, (0, o.__assign)({}, e, {
                        ref: t,
                        sideCar: _
                    }))
                });
            y.classNames = c.classNames;
            var b = y
        },
        98662: function(e, t, n) {
            n.d(t, {
                Ws: function() {
                    return styleSingleton
                }
            });
            var o, i = n(2265),
                stylesheetSingleton = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(i) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = o || n.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var a, l;
                                (a = t).styleSheet ? a.styleSheet.cssText = i : a.appendChild(document.createTextNode(i)), l = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(l)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                styleHookSingleton = function() {
                    var e = stylesheetSingleton();
                    return function(t, n) {
                        i.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && n])
                    }
                },
                styleSingleton = function() {
                    var e = styleHookSingleton();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                }
        },
        55835: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return useMergeRefs
                }
            });
            var o = n(2265);

            function assignRef(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e
            }
            var i = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
                a = new WeakMap;

            function useMergeRefs(e, t) {
                var n, l, u, c = (n = t || null, l = function(t) {
                    return e.forEach(function(e) {
                        return assignRef(e, t)
                    })
                }, (u = (0, o.useState)(function() {
                    return {
                        value: n,
                        callback: l,
                        facade: {
                            get current() {
                                return u.value
                            },
                            set current(value) {
                                var e = u.value;
                                e !== value && (u.value = value, u.callback(value, e))
                            }
                        }
                    }
                })[0]).callback = l, u.facade);
                return i(function() {
                    var t = a.get(c);
                    if (t) {
                        var n = new Set(t),
                            o = new Set(e),
                            i = c.current;
                        n.forEach(function(e) {
                            o.has(e) || assignRef(e, null)
                        }), o.forEach(function(e) {
                            n.has(e) || assignRef(e, i)
                        })
                    }
                    a.set(c, e)
                }, [e]), c
            }
        },
        26898: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return exportSidecar
                }
            });
            var o = n(50044),
                i = n(2265),
                SideCar = function(e) {
                    var t = e.sideCar,
                        n = (0, o.__rest)(e, ["sideCar"]);
                    if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                    var a = t.read();
                    if (!a) throw Error("Sidecar medium not found");
                    return i.createElement(a, (0, o.__assign)({}, n))
                };

            function exportSidecar(e, t) {
                return e.useMedium(t), SideCar
            }
            SideCar.isSideCarExport = !0
        },
        18427: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return createSidecarMedium
                }
            });
            var o = n(50044);

            function ItoI(e) {
                return e
            }

            function createSidecarMedium(e) {
                void 0 === e && (e = {});
                var t, n, i, a = (void 0 === t && (t = ItoI), n = [], i = !1, {
                    read: function() {
                        if (i) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return n.length ? n[n.length - 1] : null
                    },
                    useMedium: function(e) {
                        var o = t(e, i);
                        return n.push(o),
                            function() {
                                n = n.filter(function(e) {
                                    return e !== o
                                })
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (i = !0; n.length;) {
                            var t = n;
                            n = [], t.forEach(e)
                        }
                        n = {
                            push: function(t) {
                                return e(t)
                            },
                            filter: function() {
                                return n
                            }
                        }
                    },
                    assignMedium: function(e) {
                        i = !0;
                        var t = [];
                        if (n.length) {
                            var o = n;
                            n = [], o.forEach(e), t = n
                        }
                        var executeQueue = function() {
                                var n = t;
                                t = [], n.forEach(e)
                            },
                            cycle = function() {
                                return Promise.resolve().then(executeQueue)
                            };
                        cycle(), n = {
                            push: function(e) {
                                t.push(e), cycle()
                            },
                            filter: function(e) {
                                return t = t.filter(e), n
                            }
                        }
                    }
                });
                return a.options = (0, o.__assign)({
                    async: !0,
                    ssr: !1
                }, e), a
            }
        },
        79249: function(e, t, n) {
            let o;
            n.d(t, {
                I0: function() {
                    return v
                },
                XB: function() {
                    return p
                },
                fC: function() {
                    return m
                }
            });
            var i = n(13428),
                a = n(2265),
                l = n(85744),
                u = n(9381),
                c = n(42210),
                s = n(16459);
            let f = "dismissableLayer.update",
                d = (0, a.createContext)({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                p = (0, a.forwardRef)((e, t) => {
                    var n;
                    let {
                        disableOutsidePointerEvents: p = !1,
                        onEscapeKeyDown: g,
                        onPointerDownOutside: m,
                        onFocusOutside: v,
                        onInteractOutside: h,
                        onDismiss: _,
                        ...y
                    } = e, b = (0, a.useContext)(d), [w, E] = (0, a.useState)(null), x = null !== (n = null == w ? void 0 : w.ownerDocument) && void 0 !== n ? n : null == globalThis ? void 0 : globalThis.document, [, S] = (0, a.useState)({}), C = (0, c.e)(t, e => E(e)), O = Array.from(b.layers), [P] = [...b.layersWithOutsidePointerEventsDisabled].slice(-1), A = O.indexOf(P), T = w ? O.indexOf(w) : -1, R = b.layersWithOutsidePointerEventsDisabled.size > 0, $ = T >= A, L = function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, s.W)(e),
                            o = (0, a.useRef)(!1),
                            i = (0, a.useRef)(() => {});
                        return (0, a.useEffect)(() => {
                            let handlePointerDown = e => {
                                    if (e.target && !o.current) {
                                        let o = {
                                            originalEvent: e
                                        };

                                        function handleAndDispatchPointerDownOutsideEvent() {
                                            $5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.pointerDownOutside", n, o, {
                                                discrete: !0
                                            })
                                        }
                                        "touch" === e.pointerType ? (t.removeEventListener("click", i.current), i.current = handleAndDispatchPointerDownOutsideEvent, t.addEventListener("click", i.current, {
                                            once: !0
                                        })) : handleAndDispatchPointerDownOutsideEvent()
                                    } else t.removeEventListener("click", i.current);
                                    o.current = !1
                                },
                                e = window.setTimeout(() => {
                                    t.addEventListener("pointerdown", handlePointerDown)
                                }, 0);
                            return () => {
                                window.clearTimeout(e), t.removeEventListener("pointerdown", handlePointerDown), t.removeEventListener("click", i.current)
                            }
                        }, [t, n]), {
                            onPointerDownCapture: () => o.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...b.branches].some(e => e.contains(t));
                        !$ || n || (null == m || m(e), null == h || h(e), e.defaultPrevented || null == _ || _())
                    }, x), D = function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, s.W)(e),
                            o = (0, a.useRef)(!1);
                        return (0, a.useEffect)(() => {
                            let handleFocus = e => {
                                e.target && !o.current && $5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.focusOutside", n, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return t.addEventListener("focusin", handleFocus), () => t.removeEventListener("focusin", handleFocus)
                        }, [t, n]), {
                            onFocusCapture: () => o.current = !0,
                            onBlurCapture: () => o.current = !1
                        }
                    }(e => {
                        let t = e.target,
                            n = [...b.branches].some(e => e.contains(t));
                        n || (null == v || v(e), null == h || h(e), e.defaultPrevented || null == _ || _())
                    }, x);
                    return ! function(e, t = null == globalThis ? void 0 : globalThis.document) {
                        let n = (0, s.W)(e);
                        (0, a.useEffect)(() => {
                            let handleKeyDown = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", handleKeyDown), () => t.removeEventListener("keydown", handleKeyDown)
                        }, [n, t])
                    }(e => {
                        let t = T === b.layers.size - 1;
                        t && (null == g || g(e), !e.defaultPrevented && _ && (e.preventDefault(), _()))
                    }, x), (0, a.useEffect)(() => {
                        if (w) return p && (0 === b.layersWithOutsidePointerEventsDisabled.size && (o = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), b.layersWithOutsidePointerEventsDisabled.add(w)), b.layers.add(w), $5cb92bef7577960e$var$dispatchUpdate(), () => {
                            p && 1 === b.layersWithOutsidePointerEventsDisabled.size && (x.body.style.pointerEvents = o)
                        }
                    }, [w, x, p, b]), (0, a.useEffect)(() => () => {
                        w && (b.layers.delete(w), b.layersWithOutsidePointerEventsDisabled.delete(w), $5cb92bef7577960e$var$dispatchUpdate())
                    }, [w, b]), (0, a.useEffect)(() => {
                        let handleUpdate = () => S({});
                        return document.addEventListener(f, handleUpdate), () => document.removeEventListener(f, handleUpdate)
                    }, []), (0, a.createElement)(u.WV.div, (0, i.Z)({}, y, {
                        ref: C,
                        style: {
                            pointerEvents: R ? $ ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, l.M)(e.onFocusCapture, D.onFocusCapture),
                        onBlurCapture: (0, l.M)(e.onBlurCapture, D.onBlurCapture),
                        onPointerDownCapture: (0, l.M)(e.onPointerDownCapture, L.onPointerDownCapture)
                    }))
                }),
                g = (0, a.forwardRef)((e, t) => {
                    let n = (0, a.useContext)(d),
                        o = (0, a.useRef)(null),
                        l = (0, c.e)(t, o);
                    return (0, a.useEffect)(() => {
                        let e = o.current;
                        if (e) return n.branches.add(e), () => {
                            n.branches.delete(e)
                        }
                    }, [n.branches]), (0, a.createElement)(u.WV.div, (0, i.Z)({}, e, {
                        ref: l
                    }))
                });

            function $5cb92bef7577960e$var$dispatchUpdate() {
                let e = new CustomEvent(f);
                document.dispatchEvent(e)
            }

            function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(e, t, n, {
                discrete: o
            }) {
                let i = n.originalEvent.target,
                    a = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: n
                    });
                t && i.addEventListener(e, t, {
                    once: !0
                }), o ? (0, u.jH)(i, a) : i.dispatchEvent(a)
            }
            let m = p,
                v = g
        },
        31244: function(e, t, n) {
            n.d(t, {
                EW: function() {
                    return $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c
                }
            });
            var o = n(2265);
            let i = 0;

            function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
                (0, o.useEffect)(() => {
                    var e, t;
                    let n = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : $3db38b7d1fb3fe6a$var$createFocusGuard()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : $3db38b7d1fb3fe6a$var$createFocusGuard()), i++, () => {
                        1 === i && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), i--
                    }
                }, [])
            }

            function $3db38b7d1fb3fe6a$var$createFocusGuard() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
        },
        52759: function(e, t, n) {
            let o;
            n.d(t, {
                M: function() {
                    return p
                }
            });
            var i = n(13428),
                a = n(2265),
                l = n(42210),
                u = n(9381),
                c = n(16459);
            let s = "focusScope.autoFocusOnMount",
                f = "focusScope.autoFocusOnUnmount",
                d = {
                    bubbles: !1,
                    cancelable: !0
                },
                p = (0, a.forwardRef)((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: o = !1,
                        onMountAutoFocus: p,
                        onUnmountAutoFocus: m,
                        ...v
                    } = e, [h, _] = (0, a.useState)(null), y = (0, c.W)(p), b = (0, c.W)(m), w = (0, a.useRef)(null), E = (0, l.e)(t, e => _(e)), x = (0, a.useRef)({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    (0, a.useEffect)(() => {
                        if (o) {
                            function handleFocusIn(e) {
                                if (x.paused || !h) return;
                                let t = e.target;
                                h.contains(t) ? w.current = t : $d3863c46a17e8a28$var$focus(w.current, {
                                    select: !0
                                })
                            }

                            function handleFocusOut(e) {
                                if (x.paused || !h) return;
                                let t = e.relatedTarget;
                                null === t || h.contains(t) || $d3863c46a17e8a28$var$focus(w.current, {
                                    select: !0
                                })
                            }
                            document.addEventListener("focusin", handleFocusIn), document.addEventListener("focusout", handleFocusOut);
                            let e = new MutationObserver(function(e) {
                                let t = document.activeElement;
                                if (t === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && $d3863c46a17e8a28$var$focus(h)
                            });
                            return h && e.observe(h, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", handleFocusIn), document.removeEventListener("focusout", handleFocusOut), e.disconnect()
                            }
                        }
                    }, [o, h, x.paused]), (0, a.useEffect)(() => {
                        if (h) {
                            g.add(x);
                            let e = document.activeElement,
                                t = h.contains(e);
                            if (!t) {
                                let t = new CustomEvent(s, d);
                                h.addEventListener(s, y), h.dispatchEvent(t), t.defaultPrevented || (function(e, {
                                    select: t = !1
                                } = {}) {
                                    let n = document.activeElement;
                                    for (let o of e)
                                        if ($d3863c46a17e8a28$var$focus(o, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }($d3863c46a17e8a28$var$getTabbableCandidates(h).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && $d3863c46a17e8a28$var$focus(h))
                            }
                            return () => {
                                h.removeEventListener(s, y), setTimeout(() => {
                                    let t = new CustomEvent(f, d);
                                    h.addEventListener(f, b), h.dispatchEvent(t), t.defaultPrevented || $d3863c46a17e8a28$var$focus(null != e ? e : document.body, {
                                        select: !0
                                    }), h.removeEventListener(f, b), g.remove(x)
                                }, 0)
                            }
                        }
                    }, [h, y, b, x]);
                    let S = (0, a.useCallback)(e => {
                        if (!n && !o || x.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            i = document.activeElement;
                        if (t && i) {
                            let t = e.currentTarget,
                                [o, a] = function(e) {
                                    let t = $d3863c46a17e8a28$var$getTabbableCandidates(e),
                                        n = $d3863c46a17e8a28$var$findVisible(t, e),
                                        o = $d3863c46a17e8a28$var$findVisible(t.reverse(), e);
                                    return [n, o]
                                }(t),
                                l = o && a;
                            l ? e.shiftKey || i !== a ? e.shiftKey && i === o && (e.preventDefault(), n && $d3863c46a17e8a28$var$focus(a, {
                                select: !0
                            })) : (e.preventDefault(), n && $d3863c46a17e8a28$var$focus(o, {
                                select: !0
                            })) : i === t && e.preventDefault()
                        }
                    }, [n, o, x.paused]);
                    return (0, a.createElement)(u.WV.div, (0, i.Z)({
                        tabIndex: -1
                    }, v, {
                        ref: E,
                        onKeyDown: S
                    }))
                });

            function $d3863c46a17e8a28$var$getTabbableCandidates(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function $d3863c46a17e8a28$var$findVisible(e, t) {
                for (let n of e)
                    if (! function(e, {
                            upTo: t
                        }) {
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === t || e !== t);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function $d3863c46a17e8a28$var$focus(e, {
                select: t = !1
            } = {}) {
                if (e && e.focus) {
                    var n;
                    let o = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== o && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            let g = (o = [], {
                add(e) {
                    let t = o[0];
                    e !== t && (null == t || t.pause()), (o = $d3863c46a17e8a28$var$arrayRemove(o, e)).unshift(e)
                },
                remove(e) {
                    var t;
                    null === (t = (o = $d3863c46a17e8a28$var$arrayRemove(o, e))[0]) || void 0 === t || t.resume()
                }
            });

            function $d3863c46a17e8a28$var$arrayRemove(e, t) {
                let n = [...e],
                    o = n.indexOf(t);
                return -1 !== o && n.splice(o, 1), n
            }
        },
        83995: function(e, t, n) {
            n.d(t, {
                ee: function() {
                    return W
                },
                Eh: function() {
                    return M
                },
                VY: function() {
                    return j
                },
                fC: function() {
                    return $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9
                },
                D7: function() {
                    return P
                }
            });
            var o = n(13428),
                i = n(2265);
            let a = ["top", "right", "bottom", "left"],
                l = Math.min,
                u = Math.max,
                c = Math.round,
                s = Math.floor,
                createCoords = e => ({
                    x: e,
                    y: e
                }),
                f = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                d = {
                    start: "end",
                    end: "start"
                };

            function floating_ui_utils_evaluate(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function floating_ui_utils_getSide(e) {
                return e.split("-")[0]
            }

            function floating_ui_utils_getAlignment(e) {
                return e.split("-")[1]
            }

            function getOppositeAxis(e) {
                return "x" === e ? "y" : "x"
            }

            function getAxisLength(e) {
                return "y" === e ? "height" : "width"
            }

            function floating_ui_utils_getSideAxis(e) {
                return ["top", "bottom"].includes(floating_ui_utils_getSide(e)) ? "y" : "x"
            }

            function floating_ui_utils_getOppositeAlignmentPlacement(e) {
                return e.replace(/start|end/g, e => d[e])
            }

            function getOppositePlacement(e) {
                return e.replace(/left|right|bottom|top/g, e => f[e])
            }

            function floating_ui_utils_getPaddingObject(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function floating_ui_utils_rectToClientRect(e) {
                let {
                    x: t,
                    y: n,
                    width: o,
                    height: i
                } = e;
                return {
                    width: o,
                    height: i,
                    top: n,
                    left: t,
                    right: t + o,
                    bottom: n + i,
                    x: t,
                    y: n
                }
            }

            function computeCoordsFromPlacement(e, t, n) {
                let o, {
                        reference: i,
                        floating: a
                    } = e,
                    l = floating_ui_utils_getSideAxis(t),
                    u = getOppositeAxis(floating_ui_utils_getSideAxis(t)),
                    c = getAxisLength(u),
                    s = floating_ui_utils_getSide(t),
                    f = "y" === l,
                    d = i.x + i.width / 2 - a.width / 2,
                    p = i.y + i.height / 2 - a.height / 2,
                    g = i[c] / 2 - a[c] / 2;
                switch (s) {
                    case "top":
                        o = {
                            x: d,
                            y: i.y - a.height
                        };
                        break;
                    case "bottom":
                        o = {
                            x: d,
                            y: i.y + i.height
                        };
                        break;
                    case "right":
                        o = {
                            x: i.x + i.width,
                            y: p
                        };
                        break;
                    case "left":
                        o = {
                            x: i.x - a.width,
                            y: p
                        };
                        break;
                    default:
                        o = {
                            x: i.x,
                            y: i.y
                        }
                }
                switch (floating_ui_utils_getAlignment(t)) {
                    case "start":
                        o[u] -= g * (n && f ? -1 : 1);
                        break;
                    case "end":
                        o[u] += g * (n && f ? -1 : 1)
                }
                return o
            }
            let computePosition = async (e, t, n) => {
                let {
                    placement: o = "bottom",
                    strategy: i = "absolute",
                    middleware: a = [],
                    platform: l
                } = n, u = a.filter(Boolean), c = await (null == l.isRTL ? void 0 : l.isRTL(t)), s = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i
                }), {
                    x: f,
                    y: d
                } = computeCoordsFromPlacement(s, o, c), p = o, g = {}, m = 0;
                for (let n = 0; n < u.length; n++) {
                    let {
                        name: a,
                        fn: v
                    } = u[n], {
                        x: h,
                        y: _,
                        data: y,
                        reset: b
                    } = await v({
                        x: f,
                        y: d,
                        initialPlacement: o,
                        placement: p,
                        strategy: i,
                        middlewareData: g,
                        rects: s,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    f = null != h ? h : f, d = null != _ ? _ : d, g = { ...g,
                        [a]: { ...g[a],
                            ...y
                        }
                    }, b && m <= 50 && (m++, "object" == typeof b && (b.placement && (p = b.placement), b.rects && (s = !0 === b.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: i
                    }) : b.rects), {
                        x: f,
                        y: d
                    } = computeCoordsFromPlacement(s, p, c)), n = -1)
                }
                return {
                    x: f,
                    y: d,
                    placement: p,
                    strategy: i,
                    middlewareData: g
                }
            };
            async function detectOverflow(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: o,
                    y: i,
                    platform: a,
                    rects: l,
                    elements: u,
                    strategy: c
                } = e, {
                    boundary: s = "clippingAncestors",
                    rootBoundary: f = "viewport",
                    elementContext: d = "floating",
                    altBoundary: p = !1,
                    padding: g = 0
                } = floating_ui_utils_evaluate(t, e), m = floating_ui_utils_getPaddingObject(g), v = u[p ? "floating" === d ? "reference" : "floating" : d], h = floating_ui_utils_rectToClientRect(await a.getClippingRect({
                    element: null == (n = await (null == a.isElement ? void 0 : a.isElement(v))) || n ? v : v.contextElement || await (null == a.getDocumentElement ? void 0 : a.getDocumentElement(u.floating)),
                    boundary: s,
                    rootBoundary: f,
                    strategy: c
                })), _ = "floating" === d ? {
                    x: o,
                    y: i,
                    width: l.floating.width,
                    height: l.floating.height
                } : l.reference, y = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(u.floating)), b = await (null == a.isElement ? void 0 : a.isElement(y)) && await (null == a.getScale ? void 0 : a.getScale(y)) || {
                    x: 1,
                    y: 1
                }, w = floating_ui_utils_rectToClientRect(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: u,
                    rect: _,
                    offsetParent: y,
                    strategy: c
                }) : _);
                return {
                    top: (h.top - w.top + m.top) / b.y,
                    bottom: (w.bottom - h.bottom + m.bottom) / b.y,
                    left: (h.left - w.left + m.left) / b.x,
                    right: (w.right - h.right + m.right) / b.x
                }
            }

            function getSideOffsets(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function isAnySideFullyClipped(e) {
                return a.some(t => e[t] >= 0)
            }
            async function convertValueToCoords(e, t) {
                let {
                    placement: n,
                    platform: o,
                    elements: i
                } = e, a = await (null == o.isRTL ? void 0 : o.isRTL(i.floating)), l = floating_ui_utils_getSide(n), u = floating_ui_utils_getAlignment(n), c = "y" === floating_ui_utils_getSideAxis(n), s = ["left", "top"].includes(l) ? -1 : 1, f = a && c ? -1 : 1, d = floating_ui_utils_evaluate(t, e), {
                    mainAxis: p,
                    crossAxis: g,
                    alignmentAxis: m
                } = "number" == typeof d ? {
                    mainAxis: d,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null,
                    ...d
                };
                return u && "number" == typeof m && (g = "end" === u ? -1 * m : m), c ? {
                    x: g * f,
                    y: p * s
                } : {
                    x: p * s,
                    y: g * f
                }
            }

            function getNodeName(e) {
                return isNode(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function getWindow(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function getDocumentElement(e) {
                var t;
                return null == (t = (isNode(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function isNode(e) {
                return e instanceof Node || e instanceof getWindow(e).Node
            }

            function isElement(e) {
                return e instanceof Element || e instanceof getWindow(e).Element
            }

            function isHTMLElement(e) {
                return e instanceof HTMLElement || e instanceof getWindow(e).HTMLElement
            }

            function isShadowRoot(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof getWindow(e).ShadowRoot)
            }

            function isOverflowElement(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: o,
                    display: i
                } = getComputedStyle(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(i)
            }

            function isContainingBlock(e) {
                let t = isWebKit(),
                    n = getComputedStyle(e);
                return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
            }

            function isWebKit() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function isLastTraversableNode(e) {
                return ["html", "body", "#document"].includes(getNodeName(e))
            }

            function getComputedStyle(e) {
                return getWindow(e).getComputedStyle(e)
            }

            function getNodeScroll(e) {
                return isElement(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function getParentNode(e) {
                if ("html" === getNodeName(e)) return e;
                let t = e.assignedSlot || e.parentNode || isShadowRoot(e) && e.host || getDocumentElement(e);
                return isShadowRoot(t) ? t.host : t
            }

            function getOverflowAncestors(e, t, n) {
                var o;
                void 0 === t && (t = []), void 0 === n && (n = !0);
                let i = function getNearestOverflowAncestor(e) {
                        let t = getParentNode(e);
                        return isLastTraversableNode(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : isHTMLElement(t) && isOverflowElement(t) ? t : getNearestOverflowAncestor(t)
                    }(e),
                    a = i === (null == (o = e.ownerDocument) ? void 0 : o.body),
                    l = getWindow(i);
                return a ? t.concat(l, l.visualViewport || [], isOverflowElement(i) ? i : [], l.frameElement && n ? getOverflowAncestors(l.frameElement) : []) : t.concat(i, getOverflowAncestors(i, [], n))
            }

            function getCssDimensions(e) {
                let t = getComputedStyle(e),
                    n = parseFloat(t.width) || 0,
                    o = parseFloat(t.height) || 0,
                    i = isHTMLElement(e),
                    a = i ? e.offsetWidth : n,
                    l = i ? e.offsetHeight : o,
                    u = c(n) !== a || c(o) !== l;
                return u && (n = a, o = l), {
                    width: n,
                    height: o,
                    $: u
                }
            }

            function unwrapElement(e) {
                return isElement(e) ? e : e.contextElement
            }

            function getScale(e) {
                let t = unwrapElement(e);
                if (!isHTMLElement(t)) return createCoords(1);
                let n = t.getBoundingClientRect(),
                    {
                        width: o,
                        height: i,
                        $: a
                    } = getCssDimensions(t),
                    l = (a ? c(n.width) : n.width) / o,
                    u = (a ? c(n.height) : n.height) / i;
                return l && Number.isFinite(l) || (l = 1), u && Number.isFinite(u) || (u = 1), {
                    x: l,
                    y: u
                }
            }
            let p = createCoords(0);

            function getVisualOffsets(e) {
                let t = getWindow(e);
                return isWebKit() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : p
            }

            function getBoundingClientRect(e, t, n, o) {
                var i;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let a = e.getBoundingClientRect(),
                    l = unwrapElement(e),
                    u = createCoords(1);
                t && (o ? isElement(o) && (u = getScale(o)) : u = getScale(e));
                let c = (void 0 === (i = n) && (i = !1), o && (!i || o === getWindow(l)) && i) ? getVisualOffsets(l) : createCoords(0),
                    s = (a.left + c.x) / u.x,
                    f = (a.top + c.y) / u.y,
                    d = a.width / u.x,
                    p = a.height / u.y;
                if (l) {
                    let e = getWindow(l),
                        t = o && isElement(o) ? getWindow(o) : o,
                        n = e,
                        i = n.frameElement;
                    for (; i && o && t !== n;) {
                        let e = getScale(i),
                            t = i.getBoundingClientRect(),
                            o = getComputedStyle(i),
                            a = t.left + (i.clientLeft + parseFloat(o.paddingLeft)) * e.x,
                            l = t.top + (i.clientTop + parseFloat(o.paddingTop)) * e.y;
                        s *= e.x, f *= e.y, d *= e.x, p *= e.y, s += a, f += l, i = (n = getWindow(i)).frameElement
                    }
                }
                return floating_ui_utils_rectToClientRect({
                    width: d,
                    height: p,
                    x: s,
                    y: f
                })
            }
            let g = [":popover-open", ":modal"];

            function isTopLayer(e) {
                return g.some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function getWindowScrollBarX(e) {
                return getBoundingClientRect(getDocumentElement(e)).left + getNodeScroll(e).scrollLeft
            }

            function getClientRectFromClippingAncestor(e, t, n) {
                let o;
                if ("viewport" === t) o = function(e, t) {
                    let n = getWindow(e),
                        o = getDocumentElement(e),
                        i = n.visualViewport,
                        a = o.clientWidth,
                        l = o.clientHeight,
                        u = 0,
                        c = 0;
                    if (i) {
                        a = i.width, l = i.height;
                        let e = isWebKit();
                        (!e || e && "fixed" === t) && (u = i.offsetLeft, c = i.offsetTop)
                    }
                    return {
                        width: a,
                        height: l,
                        x: u,
                        y: c
                    }
                }(e, n);
                else if ("document" === t) o = function(e) {
                    let t = getDocumentElement(e),
                        n = getNodeScroll(e),
                        o = e.ownerDocument.body,
                        i = u(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
                        a = u(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight),
                        l = -n.scrollLeft + getWindowScrollBarX(e),
                        c = -n.scrollTop;
                    return "rtl" === getComputedStyle(o).direction && (l += u(t.clientWidth, o.clientWidth) - i), {
                        width: i,
                        height: a,
                        x: l,
                        y: c
                    }
                }(getDocumentElement(e));
                else if (isElement(t)) o = function(e, t) {
                    let n = getBoundingClientRect(e, !0, "fixed" === t),
                        o = n.top + e.clientTop,
                        i = n.left + e.clientLeft,
                        a = isHTMLElement(e) ? getScale(e) : createCoords(1),
                        l = e.clientWidth * a.x,
                        u = e.clientHeight * a.y,
                        c = i * a.x,
                        s = o * a.y;
                    return {
                        width: l,
                        height: u,
                        x: c,
                        y: s
                    }
                }(t, n);
                else {
                    let n = getVisualOffsets(e);
                    o = { ...t,
                        x: t.x - n.x,
                        y: t.y - n.y
                    }
                }
                return floating_ui_utils_rectToClientRect(o)
            }

            function isStaticPositioned(e) {
                return "static" === getComputedStyle(e).position
            }

            function getTrueOffsetParent(e, t) {
                return isHTMLElement(e) && "fixed" !== getComputedStyle(e).position ? t ? t(e) : e.offsetParent : null
            }

            function getOffsetParent(e, t) {
                let n = getWindow(e);
                if (isTopLayer(e)) return n;
                if (!isHTMLElement(e)) {
                    let t = getParentNode(e);
                    for (; t && !isLastTraversableNode(t);) {
                        if (isElement(t) && !isStaticPositioned(t)) return t;
                        t = getParentNode(t)
                    }
                    return n
                }
                let o = getTrueOffsetParent(e, t);
                for (; o && ["table", "td", "th"].includes(getNodeName(o)) && isStaticPositioned(o);) o = getTrueOffsetParent(o, t);
                return o && isLastTraversableNode(o) && isStaticPositioned(o) && !isContainingBlock(o) ? n : o || function(e) {
                    let t = getParentNode(e);
                    for (; isHTMLElement(t) && !isLastTraversableNode(t);) {
                        if (isContainingBlock(t)) return t;
                        t = getParentNode(t)
                    }
                    return null
                }(e) || n
            }
            let getElementRects = async function(e) {
                    let t = this.getOffsetParent || getOffsetParent,
                        n = this.getDimensions,
                        o = await n(e.floating);
                    return {
                        reference: function(e, t, n) {
                            let o = isHTMLElement(t),
                                i = getDocumentElement(t),
                                a = "fixed" === n,
                                l = getBoundingClientRect(e, !0, a, t),
                                u = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                c = createCoords(0);
                            if (o || !o && !a) {
                                if (("body" !== getNodeName(t) || isOverflowElement(i)) && (u = getNodeScroll(t)), o) {
                                    let e = getBoundingClientRect(t, !0, a, t);
                                    c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
                                } else i && (c.x = getWindowScrollBarX(i))
                            }
                            let s = l.left + u.scrollLeft - c.x,
                                f = l.top + u.scrollTop - c.y;
                            return {
                                x: s,
                                y: f,
                                width: l.width,
                                height: l.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: o.width,
                            height: o.height
                        }
                    }
                },
                m = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: n,
                            offsetParent: o,
                            strategy: i
                        } = e, a = "fixed" === i, l = getDocumentElement(o), u = !!t && isTopLayer(t.floating);
                        if (o === l || u && a) return n;
                        let c = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            s = createCoords(1),
                            f = createCoords(0),
                            d = isHTMLElement(o);
                        if ((d || !d && !a) && (("body" !== getNodeName(o) || isOverflowElement(l)) && (c = getNodeScroll(o)), isHTMLElement(o))) {
                            let e = getBoundingClientRect(o);
                            s = getScale(o), f.x = e.x + o.clientLeft, f.y = e.y + o.clientTop
                        }
                        return {
                            width: n.width * s.x,
                            height: n.height * s.y,
                            x: n.x * s.x - c.scrollLeft * s.x + f.x,
                            y: n.y * s.y - c.scrollTop * s.y + f.y
                        }
                    },
                    getDocumentElement: getDocumentElement,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: n,
                            rootBoundary: o,
                            strategy: i
                        } = e, a = "clippingAncestors" === n ? isTopLayer(t) ? [] : function(e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let o = getOverflowAncestors(e, [], !1).filter(e => isElement(e) && "body" !== getNodeName(e)),
                                i = null,
                                a = "fixed" === getComputedStyle(e).position,
                                l = a ? getParentNode(e) : e;
                            for (; isElement(l) && !isLastTraversableNode(l);) {
                                let t = getComputedStyle(l),
                                    n = isContainingBlock(l);
                                n || "fixed" !== t.position || (i = null);
                                let u = a ? !n && !i : !n && "static" === t.position && !!i && ["absolute", "fixed"].includes(i.position) || isOverflowElement(l) && !n && function hasFixedPositionAncestor(e, t) {
                                    let n = getParentNode(e);
                                    return !(n === t || !isElement(n) || isLastTraversableNode(n)) && ("fixed" === getComputedStyle(n).position || hasFixedPositionAncestor(n, t))
                                }(e, l);
                                u ? o = o.filter(e => e !== l) : i = t, l = getParentNode(l)
                            }
                            return t.set(e, o), o
                        }(t, this._c) : [].concat(n), c = [...a, o], s = c[0], f = c.reduce((e, n) => {
                            let o = getClientRectFromClippingAncestor(t, n, i);
                            return e.top = u(o.top, e.top), e.right = l(o.right, e.right), e.bottom = l(o.bottom, e.bottom), e.left = u(o.left, e.left), e
                        }, getClientRectFromClippingAncestor(t, s, i));
                        return {
                            width: f.right - f.left,
                            height: f.bottom - f.top,
                            x: f.left,
                            y: f.top
                        }
                    },
                    getOffsetParent,
                    getElementRects,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: n
                        } = getCssDimensions(e);
                        return {
                            width: t,
                            height: n
                        }
                    },
                    getScale,
                    isElement: isElement,
                    isRTL: function(e) {
                        return "rtl" === getComputedStyle(e).direction
                    }
                },
                floating_ui_dom_arrow = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: n,
                            y: o,
                            placement: i,
                            rects: a,
                            platform: c,
                            elements: s,
                            middlewareData: f
                        } = t, {
                            element: d,
                            padding: p = 0
                        } = floating_ui_utils_evaluate(e, t) || {};
                        if (null == d) return {};
                        let g = floating_ui_utils_getPaddingObject(p),
                            m = {
                                x: n,
                                y: o
                            },
                            v = getOppositeAxis(floating_ui_utils_getSideAxis(i)),
                            h = getAxisLength(v),
                            _ = await c.getDimensions(d),
                            y = "y" === v,
                            b = y ? "clientHeight" : "clientWidth",
                            w = a.reference[h] + a.reference[v] - m[v] - a.floating[h],
                            E = m[v] - a.reference[v],
                            x = await (null == c.getOffsetParent ? void 0 : c.getOffsetParent(d)),
                            S = x ? x[b] : 0;
                        S && await (null == c.isElement ? void 0 : c.isElement(x)) || (S = s.floating[b] || a.floating[h]);
                        let C = S / 2 - _[h] / 2 - 1,
                            O = l(g[y ? "top" : "left"], C),
                            P = l(g[y ? "bottom" : "right"], C),
                            A = S - _[h] - P,
                            T = S / 2 - _[h] / 2 + (w / 2 - E / 2),
                            R = u(O, l(T, A)),
                            $ = !f.arrow && null != floating_ui_utils_getAlignment(i) && T !== R && a.reference[h] / 2 - (T < O ? O : P) - _[h] / 2 < 0,
                            L = $ ? T < O ? T - O : T - A : 0;
                        return {
                            [v]: m[v] + L,
                            data: {
                                [v]: R,
                                centerOffset: T - R - L,
                                ...$ && {
                                    alignmentOffset: L
                                }
                            },
                            reset: $
                        }
                    }
                }),
                floating_ui_dom_computePosition = (e, t, n) => {
                    let o = new Map,
                        i = {
                            platform: m,
                            ...n
                        },
                        a = { ...i.platform,
                            _c: o
                        };
                    return computePosition(e, t, { ...i,
                        platform: a
                    })
                };
            var v = n(54887),
                h = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;

            function deepEqual(e, t) {
                let n, o, i;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) !== t.length) return !1;
                        for (o = n; 0 != o--;)
                            if (!deepEqual(e[o], t[o])) return !1;
                        return !0
                    }
                    if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (o = n; 0 != o--;)
                        if (!({}).hasOwnProperty.call(t, i[o])) return !1;
                    for (o = n; 0 != o--;) {
                        let n = i[o];
                        if (("_owner" !== n || !e.$$typeof) && !deepEqual(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function getDPR(e) {
                if ("undefined" == typeof window) return 1;
                let t = e.ownerDocument.defaultView || window;
                return t.devicePixelRatio || 1
            }

            function roundByDPR(e, t) {
                let n = getDPR(e);
                return Math.round(t * n) / n
            }

            function useLatestRef(e) {
                let t = i.useRef(e);
                return h(() => {
                    t.current = e
                }), t
            }
            let arrow$1 = e => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let {
                            element: n,
                            padding: o
                        } = "function" == typeof e ? e(t) : e;
                        return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? floating_ui_dom_arrow({
                            element: n.current,
                            padding: o
                        }).fn(t) : {} : n ? floating_ui_dom_arrow({
                            element: n,
                            padding: o
                        }).fn(t) : {}
                    }
                }),
                floating_ui_react_dom_offset = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = 0), {
                            name: "offset",
                            options: n,
                            async fn(e) {
                                var t, o;
                                let {
                                    x: i,
                                    y: a,
                                    placement: l,
                                    middlewareData: u
                                } = e, c = await convertValueToCoords(e, n);
                                return l === (null == (t = u.offset) ? void 0 : t.placement) && null != (o = u.arrow) && o.alignmentOffset ? {} : {
                                    x: i + c.x,
                                    y: a + c.y,
                                    data: { ...c,
                                        placement: l
                                    }
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                floating_ui_react_dom_shift = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = {}), {
                            name: "shift",
                            options: n,
                            async fn(e) {
                                let {
                                    x: t,
                                    y: o,
                                    placement: i
                                } = e, {
                                    mainAxis: a = !0,
                                    crossAxis: c = !1,
                                    limiter: s = {
                                        fn: e => {
                                            let {
                                                x: t,
                                                y: n
                                            } = e;
                                            return {
                                                x: t,
                                                y: n
                                            }
                                        }
                                    },
                                    ...f
                                } = floating_ui_utils_evaluate(n, e), d = {
                                    x: t,
                                    y: o
                                }, p = await detectOverflow(e, f), g = floating_ui_utils_getSideAxis(floating_ui_utils_getSide(i)), m = getOppositeAxis(g), v = d[m], h = d[g];
                                if (a) {
                                    let e = v + p["y" === m ? "top" : "left"],
                                        t = v - p["y" === m ? "bottom" : "right"];
                                    v = u(e, l(v, t))
                                }
                                if (c) {
                                    let e = "y" === g ? "top" : "left",
                                        t = "y" === g ? "bottom" : "right",
                                        n = h + p[e],
                                        o = h - p[t];
                                    h = u(n, l(h, o))
                                }
                                let _ = s.fn({ ...e,
                                    [m]: v,
                                    [g]: h
                                });
                                return { ..._,
                                    data: {
                                        x: _.x - t,
                                        y: _.y - o
                                    }
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                floating_ui_react_dom_limitShift = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = {}), {
                            options: n,
                            fn(e) {
                                let {
                                    x: t,
                                    y: o,
                                    placement: i,
                                    rects: a,
                                    middlewareData: l
                                } = e, {
                                    offset: u = 0,
                                    mainAxis: c = !0,
                                    crossAxis: s = !0
                                } = floating_ui_utils_evaluate(n, e), f = {
                                    x: t,
                                    y: o
                                }, d = floating_ui_utils_getSideAxis(i), p = getOppositeAxis(d), g = f[p], m = f[d], v = floating_ui_utils_evaluate(u, e), h = "number" == typeof v ? {
                                    mainAxis: v,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...v
                                };
                                if (c) {
                                    let e = "y" === p ? "height" : "width",
                                        t = a.reference[p] - a.floating[e] + h.mainAxis,
                                        n = a.reference[p] + a.reference[e] - h.mainAxis;
                                    g < t ? g = t : g > n && (g = n)
                                }
                                if (s) {
                                    var _, y;
                                    let e = "y" === p ? "width" : "height",
                                        t = ["top", "left"].includes(floating_ui_utils_getSide(i)),
                                        n = a.reference[d] - a.floating[e] + (t && (null == (_ = l.offset) ? void 0 : _[d]) || 0) + (t ? 0 : h.crossAxis),
                                        o = a.reference[d] + a.reference[e] + (t ? 0 : (null == (y = l.offset) ? void 0 : y[d]) || 0) - (t ? h.crossAxis : 0);
                                    m < n ? m = n : m > o && (m = o)
                                }
                                return {
                                    [p]: g,
                                    [d]: m
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                floating_ui_react_dom_flip = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = {}), {
                            name: "flip",
                            options: n,
                            async fn(e) {
                                var t, o, i, a, l;
                                let {
                                    placement: u,
                                    middlewareData: c,
                                    rects: s,
                                    initialPlacement: f,
                                    platform: d,
                                    elements: p
                                } = e, {
                                    mainAxis: g = !0,
                                    crossAxis: m = !0,
                                    fallbackPlacements: v,
                                    fallbackStrategy: h = "bestFit",
                                    fallbackAxisSideDirection: _ = "none",
                                    flipAlignment: y = !0,
                                    ...b
                                } = floating_ui_utils_evaluate(n, e);
                                if (null != (t = c.arrow) && t.alignmentOffset) return {};
                                let w = floating_ui_utils_getSide(u),
                                    E = floating_ui_utils_getSide(f) === f,
                                    x = await (null == d.isRTL ? void 0 : d.isRTL(p.floating)),
                                    S = v || (E || !y ? [getOppositePlacement(f)] : function(e) {
                                        let t = getOppositePlacement(e);
                                        return [floating_ui_utils_getOppositeAlignmentPlacement(e), t, floating_ui_utils_getOppositeAlignmentPlacement(t)]
                                    }(f));
                                v || "none" === _ || S.push(... function(e, t, n, o) {
                                    let i = floating_ui_utils_getAlignment(e),
                                        a = function(e, t, n) {
                                            let o = ["left", "right"],
                                                i = ["right", "left"];
                                            switch (e) {
                                                case "top":
                                                case "bottom":
                                                    if (n) return t ? i : o;
                                                    return t ? o : i;
                                                case "left":
                                                case "right":
                                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                                default:
                                                    return []
                                            }
                                        }(floating_ui_utils_getSide(e), "start" === n, o);
                                    return i && (a = a.map(e => e + "-" + i), t && (a = a.concat(a.map(floating_ui_utils_getOppositeAlignmentPlacement)))), a
                                }(f, y, _, x));
                                let C = [f, ...S],
                                    O = await detectOverflow(e, b),
                                    P = [],
                                    A = (null == (o = c.flip) ? void 0 : o.overflows) || [];
                                if (g && P.push(O[w]), m) {
                                    let e = function(e, t, n) {
                                        void 0 === n && (n = !1);
                                        let o = floating_ui_utils_getAlignment(e),
                                            i = getOppositeAxis(floating_ui_utils_getSideAxis(e)),
                                            a = getAxisLength(i),
                                            l = "x" === i ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                                        return t.reference[a] > t.floating[a] && (l = getOppositePlacement(l)), [l, getOppositePlacement(l)]
                                    }(u, s, x);
                                    P.push(O[e[0]], O[e[1]])
                                }
                                if (A = [...A, {
                                        placement: u,
                                        overflows: P
                                    }], !P.every(e => e <= 0)) {
                                    let e = ((null == (i = c.flip) ? void 0 : i.index) || 0) + 1,
                                        t = C[e];
                                    if (t) return {
                                        data: {
                                            index: e,
                                            overflows: A
                                        },
                                        reset: {
                                            placement: t
                                        }
                                    };
                                    let n = null == (a = A.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : a.placement;
                                    if (!n) switch (h) {
                                        case "bestFit":
                                            {
                                                let e = null == (l = A.map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];e && (n = e);
                                                break
                                            }
                                        case "initialPlacement":
                                            n = f
                                    }
                                    if (u !== n) return {
                                        reset: {
                                            placement: n
                                        }
                                    }
                                }
                                return {}
                            }
                        }),
                        options: [e, t]
                    }
                },
                floating_ui_react_dom_size = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = {}), {
                            name: "size",
                            options: n,
                            async fn(e) {
                                let t, o;
                                let {
                                    placement: i,
                                    rects: a,
                                    platform: c,
                                    elements: s
                                } = e, {
                                    apply: f = () => {},
                                    ...d
                                } = floating_ui_utils_evaluate(n, e), p = await detectOverflow(e, d), g = floating_ui_utils_getSide(i), m = floating_ui_utils_getAlignment(i), v = "y" === floating_ui_utils_getSideAxis(i), {
                                    width: h,
                                    height: _
                                } = a.floating;
                                "top" === g || "bottom" === g ? (t = g, o = m === (await (null == c.isRTL ? void 0 : c.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (o = g, t = "end" === m ? "top" : "bottom");
                                let y = _ - p.top - p.bottom,
                                    b = h - p.left - p.right,
                                    w = l(_ - p[t], y),
                                    E = l(h - p[o], b),
                                    x = !e.middlewareData.shift,
                                    S = w,
                                    C = E;
                                if (v ? C = m || x ? l(E, b) : b : S = m || x ? l(w, y) : y, x && !m) {
                                    let e = u(p.left, 0),
                                        t = u(p.right, 0),
                                        n = u(p.top, 0),
                                        o = u(p.bottom, 0);
                                    v ? C = h - 2 * (0 !== e || 0 !== t ? e + t : u(p.left, p.right)) : S = _ - 2 * (0 !== n || 0 !== o ? n + o : u(p.top, p.bottom))
                                }
                                await f({ ...e,
                                    availableWidth: C,
                                    availableHeight: S
                                });
                                let O = await c.getDimensions(s.floating);
                                return h !== O.width || _ !== O.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }),
                        options: [e, t]
                    }
                },
                floating_ui_react_dom_hide = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = {}), {
                            name: "hide",
                            options: n,
                            async fn(e) {
                                let {
                                    rects: t
                                } = e, {
                                    strategy: o = "referenceHidden",
                                    ...i
                                } = floating_ui_utils_evaluate(n, e);
                                switch (o) {
                                    case "referenceHidden":
                                        {
                                            let n = await detectOverflow(e, { ...i,
                                                    elementContext: "reference"
                                                }),
                                                o = getSideOffsets(n, t.reference);
                                            return {
                                                data: {
                                                    referenceHiddenOffsets: o,
                                                    referenceHidden: isAnySideFullyClipped(o)
                                                }
                                            }
                                        }
                                    case "escaped":
                                        {
                                            let n = await detectOverflow(e, { ...i,
                                                    altBoundary: !0
                                                }),
                                                o = getSideOffsets(n, t.floating);
                                            return {
                                                data: {
                                                    escapedOffsets: o,
                                                    escaped: isAnySideFullyClipped(o)
                                                }
                                            }
                                        }
                                    default:
                                        return {}
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                floating_ui_react_dom_arrow = (e, t) => ({ ...arrow$1(e),
                    options: [e, t]
                });
            var _ = n(9381);
            let y = (0, i.forwardRef)((e, t) => {
                let {
                    children: n,
                    width: a = 10,
                    height: l = 5,
                    ...u
                } = e;
                return (0, i.createElement)(_.WV.svg, (0, o.Z)({}, u, {
                    ref: t,
                    width: a,
                    height: l,
                    viewBox: "0 0 30 10",
                    preserveAspectRatio: "none"
                }), e.asChild ? n : (0, i.createElement)("polygon", {
                    points: "0,0 30,0 15,10"
                }))
            });
            var b = n(42210),
                w = n(56989),
                E = n(16459),
                x = n(51030),
                S = n(94977);
            let C = "Popper",
                [O, P] = (0, w.b)(C),
                [A, T] = O(C),
                R = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: a,
                        ...l
                    } = e, u = T("PopperAnchor", n), c = (0, i.useRef)(null), s = (0, b.e)(t, c);
                    return (0, i.useEffect)(() => {
                        u.onAnchorChange((null == a ? void 0 : a.current) || c.current)
                    }), a ? null : (0, i.createElement)(_.WV.div, (0, o.Z)({}, l, {
                        ref: s
                    }))
                }),
                $ = "PopperContent",
                [L, D] = O($),
                N = (0, i.forwardRef)((e, t) => {
                    var n, a, c, f, d, p, g, m;
                    let {
                        __scopePopper: y,
                        side: w = "bottom",
                        sideOffset: C = 0,
                        align: O = "center",
                        alignOffset: P = 0,
                        arrowPadding: A = 0,
                        avoidCollisions: R = !0,
                        collisionBoundary: D = [],
                        collisionPadding: N = 0,
                        sticky: k = "partial",
                        hideWhenDetached: F = !1,
                        updatePositionStrategy: W = "optimized",
                        onPlaced: j,
                        ...M
                    } = e, B = T($, y), [I, H] = (0, i.useState)(null), V = (0, b.e)(t, e => H(e)), [z, X] = (0, i.useState)(null), Y = (0, S.t)(z), K = null !== (n = null == Y ? void 0 : Y.width) && void 0 !== n ? n : 0, G = null !== (a = null == Y ? void 0 : Y.height) && void 0 !== a ? a : 0, Z = "number" == typeof N ? N : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...N
                    }, q = Array.isArray(D) ? D : [D], U = q.length > 0, Q = {
                        padding: Z,
                        boundary: q.filter($cf1ac5d9fe0e8206$var$isNotNull),
                        altBoundary: U
                    }, {
                        refs: J,
                        floatingStyles: ee,
                        placement: et,
                        isPositioned: en,
                        middlewareData: er
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: n = "absolute",
                            middleware: o = [],
                            platform: a,
                            elements: {
                                reference: l,
                                floating: u
                            } = {},
                            transform: c = !0,
                            whileElementsMounted: s,
                            open: f
                        } = e, [d, p] = i.useState({
                            x: 0,
                            y: 0,
                            strategy: n,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [g, m] = i.useState(o);
                        deepEqual(g, o) || m(o);
                        let [_, y] = i.useState(null), [b, w] = i.useState(null), E = i.useCallback(e => {
                            e !== O.current && (O.current = e, y(e))
                        }, []), x = i.useCallback(e => {
                            e !== P.current && (P.current = e, w(e))
                        }, []), S = l || _, C = u || b, O = i.useRef(null), P = i.useRef(null), A = i.useRef(d), T = null != s, R = useLatestRef(s), $ = useLatestRef(a), L = i.useCallback(() => {
                            if (!O.current || !P.current) return;
                            let e = {
                                placement: t,
                                strategy: n,
                                middleware: g
                            };
                            $.current && (e.platform = $.current), floating_ui_dom_computePosition(O.current, P.current, e).then(e => {
                                let t = { ...e,
                                    isPositioned: !0
                                };
                                D.current && !deepEqual(A.current, t) && (A.current = t, v.flushSync(() => {
                                    p(t)
                                }))
                            })
                        }, [g, t, n, $]);
                        h(() => {
                            !1 === f && A.current.isPositioned && (A.current.isPositioned = !1, p(e => ({ ...e,
                                isPositioned: !1
                            })))
                        }, [f]);
                        let D = i.useRef(!1);
                        h(() => (D.current = !0, () => {
                            D.current = !1
                        }), []), h(() => {
                            if (S && (O.current = S), C && (P.current = C), S && C) {
                                if (R.current) return R.current(S, C, L);
                                L()
                            }
                        }, [S, C, L, R, T]);
                        let N = i.useMemo(() => ({
                                reference: O,
                                floating: P,
                                setReference: E,
                                setFloating: x
                            }), [E, x]),
                            k = i.useMemo(() => ({
                                reference: S,
                                floating: C
                            }), [S, C]),
                            F = i.useMemo(() => {
                                let e = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!k.floating) return e;
                                let t = roundByDPR(k.floating, d.x),
                                    o = roundByDPR(k.floating, d.y);
                                return c ? { ...e,
                                    transform: "translate(" + t + "px, " + o + "px)",
                                    ...getDPR(k.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: t,
                                    top: o
                                }
                            }, [n, c, k.floating, d.x, d.y]);
                        return i.useMemo(() => ({ ...d,
                            update: L,
                            refs: N,
                            elements: k,
                            floatingStyles: F
                        }), [d, L, N, k, F])
                    }({
                        strategy: "fixed",
                        placement: w + ("center" !== O ? "-" + O : ""),
                        whileElementsMounted: (...e) => {
                            let t = function(e, t, n, o) {
                                let i;
                                void 0 === o && (o = {});
                                let {
                                    ancestorScroll: a = !0,
                                    ancestorResize: c = !0,
                                    elementResize: f = "function" == typeof ResizeObserver,
                                    layoutShift: d = "function" == typeof IntersectionObserver,
                                    animationFrame: p = !1
                                } = o, g = unwrapElement(e), m = a || c ? [...g ? getOverflowAncestors(g) : [], ...getOverflowAncestors(t)] : [];
                                m.forEach(e => {
                                    a && e.addEventListener("scroll", n, {
                                        passive: !0
                                    }), c && e.addEventListener("resize", n)
                                });
                                let v = g && d ? function(e, t) {
                                        let n, o = null,
                                            i = getDocumentElement(e);

                                        function cleanup() {
                                            var e;
                                            clearTimeout(n), null == (e = o) || e.disconnect(), o = null
                                        }
                                        return ! function refresh(a, c) {
                                            void 0 === a && (a = !1), void 0 === c && (c = 1), cleanup();
                                            let {
                                                left: f,
                                                top: d,
                                                width: p,
                                                height: g
                                            } = e.getBoundingClientRect();
                                            if (a || t(), !p || !g) return;
                                            let m = s(d),
                                                v = s(i.clientWidth - (f + p)),
                                                h = s(i.clientHeight - (d + g)),
                                                _ = s(f),
                                                y = {
                                                    rootMargin: -m + "px " + -v + "px " + -h + "px " + -_ + "px",
                                                    threshold: u(0, l(1, c)) || 1
                                                },
                                                b = !0;

                                            function handleObserve(e) {
                                                let t = e[0].intersectionRatio;
                                                if (t !== c) {
                                                    if (!b) return refresh();
                                                    t ? refresh(!1, t) : n = setTimeout(() => {
                                                        refresh(!1, 1e-7)
                                                    }, 1e3)
                                                }
                                                b = !1
                                            }
                                            try {
                                                o = new IntersectionObserver(handleObserve, { ...y,
                                                    root: i.ownerDocument
                                                })
                                            } catch (e) {
                                                o = new IntersectionObserver(handleObserve, y)
                                            }
                                            o.observe(e)
                                        }(!0), cleanup
                                    }(g, n) : null,
                                    h = -1,
                                    _ = null;
                                f && (_ = new ResizeObserver(e => {
                                    let [o] = e;
                                    o && o.target === g && _ && (_.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
                                        var e;
                                        null == (e = _) || e.observe(t)
                                    })), n()
                                }), g && !p && _.observe(g), _.observe(t));
                                let y = p ? getBoundingClientRect(e) : null;
                                return p && function frameLoop() {
                                    let t = getBoundingClientRect(e);
                                    y && (t.x !== y.x || t.y !== y.y || t.width !== y.width || t.height !== y.height) && n(), y = t, i = requestAnimationFrame(frameLoop)
                                }(), n(), () => {
                                    var e;
                                    m.forEach(e => {
                                        a && e.removeEventListener("scroll", n), c && e.removeEventListener("resize", n)
                                    }), null == v || v(), null == (e = _) || e.disconnect(), _ = null, p && cancelAnimationFrame(i)
                                }
                            }(...e, {
                                animationFrame: "always" === W
                            });
                            return t
                        },
                        elements: {
                            reference: B.anchor
                        },
                        middleware: [floating_ui_react_dom_offset({
                            mainAxis: C + G,
                            alignmentAxis: P
                        }), R && floating_ui_react_dom_shift({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === k ? floating_ui_react_dom_limitShift() : void 0,
                            ...Q
                        }), R && floating_ui_react_dom_flip({ ...Q
                        }), floating_ui_react_dom_size({ ...Q,
                            apply: ({
                                elements: e,
                                rects: t,
                                availableWidth: n,
                                availableHeight: o
                            }) => {
                                let {
                                    width: i,
                                    height: a
                                } = t.reference, l = e.floating.style;
                                l.setProperty("--radix-popper-available-width", `${n}px`), l.setProperty("--radix-popper-available-height", `${o}px`), l.setProperty("--radix-popper-anchor-width", `${i}px`), l.setProperty("--radix-popper-anchor-height", `${a}px`)
                            }
                        }), z && floating_ui_react_dom_arrow({
                            element: z,
                            padding: A
                        }), $cf1ac5d9fe0e8206$var$transformOrigin({
                            arrowWidth: K,
                            arrowHeight: G
                        }), F && floating_ui_react_dom_hide({
                            strategy: "referenceHidden",
                            ...Q
                        })]
                    }), [eo, ei] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(et), ea = (0, E.W)(j);
                    (0, x.b)(() => {
                        en && (null == ea || ea())
                    }, [en, ea]);
                    let el = null === (c = er.arrow) || void 0 === c ? void 0 : c.x,
                        eu = null === (f = er.arrow) || void 0 === f ? void 0 : f.y,
                        ec = (null === (d = er.arrow) || void 0 === d ? void 0 : d.centerOffset) !== 0,
                        [es, ef] = (0, i.useState)();
                    return (0, x.b)(() => {
                        I && ef(window.getComputedStyle(I).zIndex)
                    }, [I]), (0, i.createElement)("div", {
                        ref: J.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...ee,
                            transform: en ? ee.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: es,
                            "--radix-popper-transform-origin": [null === (p = er.transformOrigin) || void 0 === p ? void 0 : p.x, null === (g = er.transformOrigin) || void 0 === g ? void 0 : g.y].join(" ")
                        },
                        dir: e.dir
                    }, (0, i.createElement)(L, {
                        scope: y,
                        placedSide: eo,
                        onArrowChange: X,
                        arrowX: el,
                        arrowY: eu,
                        shouldHideArrow: ec
                    }, (0, i.createElement)(_.WV.div, (0, o.Z)({
                        "data-side": eo,
                        "data-align": ei
                    }, M, {
                        ref: V,
                        style: { ...M.style,
                            animation: en ? void 0 : "none",
                            opacity: null !== (m = er.hide) && void 0 !== m && m.referenceHidden ? 0 : void 0
                        }
                    }))))
                }),
                k = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                F = (0, i.forwardRef)(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...a
                    } = e, l = D("PopperArrow", n), u = k[l.placedSide];
                    return (0, i.createElement)("span", {
                        ref: l.onArrowChange,
                        style: {
                            position: "absolute",
                            left: l.arrowX,
                            top: l.arrowY,
                            [u]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[l.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[l.placedSide],
                            visibility: l.shouldHideArrow ? "hidden" : void 0
                        }
                    }, (0, i.createElement)(y, (0, o.Z)({}, a, {
                        ref: t,
                        style: { ...a.style,
                            display: "block"
                        }
                    })))
                });

            function $cf1ac5d9fe0e8206$var$isNotNull(e) {
                return null !== e
            }
            let $cf1ac5d9fe0e8206$var$transformOrigin = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, o, i, a, l;
                    let {
                        placement: u,
                        rects: c,
                        middlewareData: s
                    } = t, f = (null === (n = s.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0, d = f ? 0 : e.arrowWidth, p = f ? 0 : e.arrowHeight, [g, m] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(u), v = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[m], h = (null !== (o = null === (i = s.arrow) || void 0 === i ? void 0 : i.x) && void 0 !== o ? o : 0) + d / 2, _ = (null !== (a = null === (l = s.arrow) || void 0 === l ? void 0 : l.y) && void 0 !== a ? a : 0) + p / 2, y = "", b = "";
                    return "bottom" === g ? (y = f ? v : `${h}px`, b = `${-p}px`) : "top" === g ? (y = f ? v : `${h}px`, b = `${c.floating.height+p}px`) : "right" === g ? (y = `${-p}px`, b = f ? v : `${_}px`) : "left" === g && (y = `${c.floating.width+p}px`, b = f ? v : `${_}px`), {
                        data: {
                            x: y,
                            y: b
                        }
                    }
                }
            });

            function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            let $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [o, a] = (0, i.useState)(null);
                    return (0, i.createElement)(A, {
                        scope: t,
                        anchor: o,
                        onAnchorChange: a
                    }, n)
                },
                W = R,
                j = N,
                M = F
        },
        52730: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return u
                }
            });
            var o = n(13428),
                i = n(2265),
                a = n(54887),
                l = n(9381);
            let u = (0, i.forwardRef)((e, t) => {
                var n;
                let {
                    container: u = null == globalThis ? void 0 : null === (n = globalThis.document) || void 0 === n ? void 0 : n.body,
                    ...c
                } = e;
                return u ? a.createPortal((0, i.createElement)(l.WV.div, (0, o.Z)({}, c, {
                    ref: t
                })), u) : null
            })
        },
        8281: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return l
                },
                f: function() {
                    return u
                }
            });
            var o = n(13428),
                i = n(2265),
                a = n(9381);
            let l = (0, i.forwardRef)((e, t) => (0, i.createElement)(a.WV.span, (0, o.Z)({}, e, {
                    ref: t,
                    style: {
                        position: "absolute",
                        border: 0,
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        wordWrap: "normal",
                        ...e.style
                    }
                }))),
                u = l
        },
        39213: function(e, t, n) {
            n.d(t, {
                j: function() {
                    return cva
                }
            });
            let falsyToString = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
                cx = function() {
                    for (var e, t, n = 0, o = ""; n < arguments.length;)(e = arguments[n++]) && (t = function r(e) {
                        var t, n, o = "";
                        if ("string" == typeof e || "number" == typeof e) o += e;
                        else if ("object" == typeof e) {
                            if (Array.isArray(e))
                                for (t = 0; t < e.length; t++) e[t] && (n = r(e[t])) && (o && (o += " "), o += n);
                            else
                                for (t in e) e[t] && (o && (o += " "), o += t)
                        }
                        return o
                    }(e)) && (o && (o += " "), o += t);
                    return o
                },
                cva = (e, t) => n => {
                    var o;
                    if ((null == t ? void 0 : t.variants) == null) return cx(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
                    let {
                        variants: i,
                        defaultVariants: a
                    } = t, l = Object.keys(i).map(e => {
                        let t = null == n ? void 0 : n[e],
                            o = null == a ? void 0 : a[e];
                        if (null === t) return null;
                        let l = falsyToString(t) || falsyToString(o);
                        return i[e][l]
                    }), u = n && Object.entries(n).reduce((e, t) => {
                        let [n, o] = t;
                        return void 0 === o || (e[n] = o), e
                    }, {}), c = null == t ? void 0 : null === (o = t.compoundVariants) || void 0 === o ? void 0 : o.reduce((e, t) => {
                        let {
                            class: n,
                            className: o,
                            ...i
                        } = t;
                        return Object.entries(i).every(e => {
                            let [t, n] = e;
                            return Array.isArray(n) ? n.includes({ ...a,
                                ...u
                            }[t]) : ({ ...a,
                                ...u
                            })[t] === n
                        }) ? [...e, n, o] : e
                    }, []);
                    return cx(e, l, c, null == n ? void 0 : n.class, null == n ? void 0 : n.className)
                }
        },
        50044: function(e, t, n) {
            n.r(t), n.d(t, {
                __addDisposableResource: function() {
                    return __addDisposableResource
                },
                __assign: function() {
                    return __assign
                },
                __asyncDelegator: function() {
                    return __asyncDelegator
                },
                __asyncGenerator: function() {
                    return __asyncGenerator
                },
                __asyncValues: function() {
                    return __asyncValues
                },
                __await: function() {
                    return __await
                },
                __awaiter: function() {
                    return __awaiter
                },
                __classPrivateFieldGet: function() {
                    return __classPrivateFieldGet
                },
                __classPrivateFieldIn: function() {
                    return __classPrivateFieldIn
                },
                __classPrivateFieldSet: function() {
                    return __classPrivateFieldSet
                },
                __createBinding: function() {
                    return o
                },
                __decorate: function() {
                    return __decorate
                },
                __disposeResources: function() {
                    return __disposeResources
                },
                __esDecorate: function() {
                    return __esDecorate
                },
                __exportStar: function() {
                    return __exportStar
                },
                __extends: function() {
                    return __extends
                },
                __generator: function() {
                    return __generator
                },
                __importDefault: function() {
                    return __importDefault
                },
                __importStar: function() {
                    return __importStar
                },
                __makeTemplateObject: function() {
                    return __makeTemplateObject
                },
                __metadata: function() {
                    return __metadata
                },
                __param: function() {
                    return __param
                },
                __propKey: function() {
                    return __propKey
                },
                __read: function() {
                    return __read
                },
                __rest: function() {
                    return __rest
                },
                __runInitializers: function() {
                    return __runInitializers
                },
                __setFunctionName: function() {
                    return __setFunctionName
                },
                __spread: function() {
                    return __spread
                },
                __spreadArray: function() {
                    return __spreadArray
                },
                __spreadArrays: function() {
                    return __spreadArrays
                },
                __values: function() {
                    return __values
                }
            });
            var extendStatics = function(e, t) {
                return (extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })(e, t)
            };

            function __extends(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function __() {
                    this.constructor = e
                }
                extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
            }
            var __assign = function() {
                return (__assign = Object.assign || function(e) {
                    for (var t, n = 1, o = arguments.length; n < o; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function __rest(e, t) {
                var n = {};
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && 0 > t.indexOf(o) && (n[o] = e[o]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, o = Object.getOwnPropertySymbols(e); i < o.length; i++) 0 > t.indexOf(o[i]) && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]]);
                return n
            }

            function __decorate(e, t, n, o) {
                var i, a = arguments.length,
                    l = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, n, o);
                else
                    for (var u = e.length - 1; u >= 0; u--)(i = e[u]) && (l = (a < 3 ? i(l) : a > 3 ? i(t, n, l) : i(t, n)) || l);
                return a > 3 && l && Object.defineProperty(t, n, l), l
            }

            function __param(e, t) {
                return function(n, o) {
                    t(n, o, e)
                }
            }

            function __esDecorate(e, t, n, o, i, a) {
                function accept(e) {
                    if (void 0 !== e && "function" != typeof e) throw TypeError("Function expected");
                    return e
                }
                for (var l, u = o.kind, c = "getter" === u ? "get" : "setter" === u ? "set" : "value", s = !t && e ? o.static ? e : e.prototype : null, f = t || (s ? Object.getOwnPropertyDescriptor(s, o.name) : {}), d = !1, p = n.length - 1; p >= 0; p--) {
                    var g = {};
                    for (var m in o) g[m] = "access" === m ? {} : o[m];
                    for (var m in o.access) g.access[m] = o.access[m];
                    g.addInitializer = function(e) {
                        if (d) throw TypeError("Cannot add initializers after decoration has completed");
                        a.push(accept(e || null))
                    };
                    var v = (0, n[p])("accessor" === u ? {
                        get: f.get,
                        set: f.set
                    } : f[c], g);
                    if ("accessor" === u) {
                        if (void 0 === v) continue;
                        if (null === v || "object" != typeof v) throw TypeError("Object expected");
                        (l = accept(v.get)) && (f.get = l), (l = accept(v.set)) && (f.set = l), (l = accept(v.init)) && i.unshift(l)
                    } else(l = accept(v)) && ("field" === u ? i.unshift(l) : f[c] = l)
                }
                s && Object.defineProperty(s, o.name, f), d = !0
            }

            function __runInitializers(e, t, n) {
                for (var o = arguments.length > 2, i = 0; i < t.length; i++) n = o ? t[i].call(e, n) : t[i].call(e);
                return o ? n : void 0
            }

            function __propKey(e) {
                return "symbol" == typeof e ? e : "".concat(e)
            }

            function __setFunctionName(e, t, n) {
                return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
                    configurable: !0,
                    value: n ? "".concat(n, " ", t) : t
                })
            }

            function __metadata(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function __awaiter(e, t, n, o) {
                return new(n || (n = Promise))(function(i, a) {
                    function fulfilled(e) {
                        try {
                            step(o.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function rejected(e) {
                        try {
                            step(o.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function step(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(fulfilled, rejected)
                    }
                    step((o = o.apply(e, t || [])).next())
                })
            }

            function __generator(e, t) {
                var n, o, i, a, l = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function verb(u) {
                    return function(c) {
                        return function(u) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a && (a = 0, u[0] && (l = 0)), l;) try {
                                if (n = 1, o && (i = 2 & u[0] ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, u[1])).done) return i;
                                switch (o = 0, i && (u = [2 & u[0], i.value]), u[0]) {
                                    case 0:
                                    case 1:
                                        i = u;
                                        break;
                                    case 4:
                                        return l.label++, {
                                            value: u[1],
                                            done: !1
                                        };
                                    case 5:
                                        l.label++, o = u[1], u = [0];
                                        continue;
                                    case 7:
                                        u = l.ops.pop(), l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = l.trys).length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                            l.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && l.label < i[1]) {
                                            l.label = i[1], i = u;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2], l.ops.push(u);
                                            break
                                        }
                                        i[2] && l.ops.pop(), l.trys.pop();
                                        continue
                                }
                                u = t.call(e, l)
                            } catch (e) {
                                u = [6, e], o = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, c])
                    }
                }
            }
            var o = Object.create ? function(e, t, n, o) {
                void 0 === o && (o = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, o, i)
            } : function(e, t, n, o) {
                void 0 === o && (o = n), e[o] = t[n]
            };

            function __exportStar(e, t) {
                for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n)
            }

            function __values(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    o = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && o >= e.length && (e = void 0), {
                            value: e && e[o++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function __read(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var o, i, a = n.call(e),
                    l = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(o = a.next()).done;) l.push(o.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (n = a.return) && n.call(a)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return l
            }

            function __spread() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
                return e
            }

            function __spreadArrays() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                for (var o = Array(e), i = 0, t = 0; t < n; t++)
                    for (var a = arguments[t], l = 0, u = a.length; l < u; l++, i++) o[i] = a[l];
                return o
            }

            function __spreadArray(e, t, n) {
                if (n || 2 == arguments.length)
                    for (var o, i = 0, a = t.length; i < a; i++) !o && i in t || (o || (o = Array.prototype.slice.call(t, 0, i)), o[i] = t[i]);
                return e.concat(o || Array.prototype.slice.call(t))
            }

            function __await(e) {
                return this instanceof __await ? (this.v = e, this) : new __await(e)
            }

            function __asyncGenerator(e, t, n) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var o, i = n.apply(e, t || []),
                    a = [];
                return o = {}, verb("next"), verb("throw"), verb("return"), o[Symbol.asyncIterator] = function() {
                    return this
                }, o;

                function verb(e) {
                    i[e] && (o[e] = function(t) {
                        return new Promise(function(n, o) {
                            a.push([e, t, n, o]) > 1 || resume(e, t)
                        })
                    })
                }

                function resume(e, t) {
                    try {
                        var n;
                        (n = i[e](t)).value instanceof __await ? Promise.resolve(n.value.v).then(fulfill, reject) : settle(a[0][2], n)
                    } catch (e) {
                        settle(a[0][3], e)
                    }
                }

                function fulfill(e) {
                    resume("next", e)
                }

                function reject(e) {
                    resume("throw", e)
                }

                function settle(e, t) {
                    e(t), a.shift(), a.length && resume(a[0][0], a[0][1])
                }
            }

            function __asyncDelegator(e) {
                var t, n;
                return t = {}, verb("next"), verb("throw", function(e) {
                    throw e
                }), verb("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function verb(o, i) {
                    t[o] = e[o] ? function(t) {
                        return (n = !n) ? {
                            value: __await(e[o](t)),
                            done: !1
                        } : i ? i(t) : t
                    } : i
                }
            }

            function __asyncValues(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, n = e[Symbol.asyncIterator];
                return n ? n.call(e) : (e = __values(e), t = {}, verb("next"), verb("throw"), verb("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function verb(n) {
                    t[n] = e[n] && function(t) {
                        return new Promise(function(o, i) {
                            ! function(e, t, n, o) {
                                Promise.resolve(o).then(function(t) {
                                    e({
                                        value: t,
                                        done: n
                                    })
                                }, t)
                            }(o, i, (t = e[n](t)).done, t.value)
                        })
                    }
                }
            }

            function __makeTemplateObject(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }
            var i = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            };

            function __importStar(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && o(t, e, n);
                return i(t, e), t
            }

            function __importDefault(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function __classPrivateFieldGet(e, t, n, o) {
                if ("a" === n && !o) throw TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? o : "a" === n ? o.call(e) : o ? o.value : t.get(e)
            }

            function __classPrivateFieldSet(e, t, n, o, i) {
                if ("m" === o) throw TypeError("Private method is not writable");
                if ("a" === o && !i) throw TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === o ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
            }

            function __classPrivateFieldIn(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t)
            }

            function __addDisposableResource(e, t, n) {
                if (null != t) {
                    var o;
                    if ("object" != typeof t && "function" != typeof t) throw TypeError("Object expected.");
                    if (n) {
                        if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
                        o = t[Symbol.asyncDispose]
                    }
                    if (void 0 === o) {
                        if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
                        o = t[Symbol.dispose]
                    }
                    if ("function" != typeof o) throw TypeError("Object not disposable.");
                    e.stack.push({
                        value: t,
                        dispose: o,
                        async: n
                    })
                } else n && e.stack.push({
                    async: !0
                });
                return t
            }
            var a = "function" == typeof SuppressedError ? SuppressedError : function(e, t, n) {
                var o = Error(n);
                return o.name = "SuppressedError", o.error = e, o.suppressed = t, o
            };

            function __disposeResources(e) {
                function fail(t) {
                    e.error = e.hasError ? new a(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
                }
                return function next() {
                    for (; e.stack.length;) {
                        var t = e.stack.pop();
                        try {
                            var n = t.dispose && t.dispose.call(t.value);
                            if (t.async) return Promise.resolve(n).then(next, function(e) {
                                return fail(e), next()
                            })
                        } catch (e) {
                            fail(e)
                        }
                    }
                    if (e.hasError) throw e.error
                }()
            }
            t.default = {
                __extends,
                __assign,
                __rest,
                __decorate,
                __param,
                __metadata,
                __awaiter,
                __generator,
                __createBinding: o,
                __exportStar,
                __values,
                __read,
                __spread,
                __spreadArrays,
                __spreadArray,
                __await,
                __asyncGenerator,
                __asyncDelegator,
                __asyncValues,
                __makeTemplateObject,
                __importStar,
                __importDefault,
                __classPrivateFieldGet,
                __classPrivateFieldSet,
                __classPrivateFieldIn,
                __addDisposableResource,
                __disposeResources
            }
        }
    }
]);