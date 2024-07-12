"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8110], {
        38110: function(r, i, a) {
            a.d(i, {
                F: function() {
                    return zod_t
                }
            });
            var l = a(61865),
                t = function(r, i, a) {
                    if (r && "reportValidity" in r) {
                        var u = (0, l.U2)(a, i);
                        r.setCustomValidity(u && u.message || ""), r.reportValidity()
                    }
                },
                resolvers_n = function(r, i) {
                    var e = function(a) {
                        var l = i.fields[a];
                        l && l.ref && "reportValidity" in l.ref ? t(l.ref, a, r) : l.refs && l.refs.forEach(function(i) {
                            return t(i, a, r)
                        })
                    };
                    for (var a in i.fields) e(a)
                },
                s = function(r, i, a) {
                    for (var l, u = -1, o = /^\w*$/.test(i) ? [i] : Array.isArray(l = i.replace(/["|']|\]/g, "").split(/\.|\[/)) ? l.filter(Boolean) : [], d = o.length, f = d - 1; ++u < d;) {
                        var g = o[u],
                            y = a;
                        if (u !== f) {
                            var m = r[g];
                            y = !(null != m && !Array.isArray(m) && "object" == typeof m && !(m instanceof Date) || Array.isArray(m)) ? isNaN(+o[u + 1]) ? {} : [] : m
                        }
                        r[g] = y, r = r[g]
                    }
                    return r
                },
                resolvers_u = function(r, i) {
                    i.shouldUseNativeValidation && resolvers_n(r, i);
                    var a = {};
                    for (var u in r) {
                        var o = (0, l.U2)(i.fields, u),
                            d = Object.assign(r[u] || {}, {
                                ref: o && o.ref
                            });
                        if (c(i.names || Object.keys(r), u)) {
                            var f = Object.assign({}, (0, l.U2)(a, u));
                            s(f, "root", d), s(a, u, f)
                        } else s(a, u, d)
                    }
                    return a
                },
                c = function(r, i) {
                    return r.some(function(r) {
                        return r.startsWith(i + ".")
                    })
                },
                n = function(r, i) {
                    for (var a = {}; r.length;) {
                        var u = r[0],
                            o = u.code,
                            d = u.message,
                            f = u.path.join(".");
                        if (!a[f]) {
                            if ("unionErrors" in u) {
                                var g = u.unionErrors[0].errors[0];
                                a[f] = {
                                    message: g.message,
                                    type: g.code
                                }
                            } else a[f] = {
                                message: d,
                                type: o
                            }
                        }
                        if ("unionErrors" in u && u.unionErrors.forEach(function(i) {
                                return i.errors.forEach(function(i) {
                                    return r.push(i)
                                })
                            }), i) {
                            var y = a[f].types,
                                m = y && y[u.code];
                            a[f] = (0, l.KN)(f, i, a, o, m ? [].concat(m, u.message) : u.message)
                        }
                        r.shift()
                    }
                    return a
                },
                zod_t = function(r, i, a) {
                    return void 0 === a && (a = {}),
                        function(l, u, o) {
                            try {
                                return Promise.resolve(function(u, d) {
                                    try {
                                        var f = Promise.resolve(r["sync" === a.mode ? "parse" : "parseAsync"](l, i)).then(function(r) {
                                            return o.shouldUseNativeValidation && resolvers_n({}, o), {
                                                errors: {},
                                                values: a.raw ? l : r
                                            }
                                        })
                                    } catch (r) {
                                        return d(r)
                                    }
                                    return f && f.then ? f.then(void 0, d) : f
                                }(0, function(r) {
                                    if (null != r.errors) return {
                                        values: {},
                                        errors: resolvers_u(n(r.errors, !o.shouldUseNativeValidation && "all" === o.criteriaMode), o)
                                    };
                                    throw r
                                }))
                            } catch (r) {
                                return Promise.reject(r)
                            }
                        }
                }
        },
        61865: function(r, i, a) {
            a.d(i, {
                Gc: function() {
                    return useFormContext
                },
                KN: function() {
                    return appendErrors
                },
                Qr: function() {
                    return Controller
                },
                RV: function() {
                    return FormProvider
                },
                U2: function() {
                    return get
                },
                cI: function() {
                    return useForm
                }
            });
            var l = a(2265),
                isCheckBoxInput = r => "checkbox" === r.type,
                isDateObject = r => r instanceof Date,
                isNullOrUndefined = r => null == r;
            let isObjectType = r => "object" == typeof r;
            var isObject = r => !isNullOrUndefined(r) && !Array.isArray(r) && isObjectType(r) && !isDateObject(r),
                getEventValue = r => isObject(r) && r.target ? isCheckBoxInput(r.target) ? r.target.checked : r.target.value : r,
                getNodeParentName = r => r.substring(0, r.search(/\.\d+(\.|$)/)) || r,
                isNameInFieldArray = (r, i) => r.has(getNodeParentName(i)),
                isPlainObject = r => {
                    let i = r.constructor && r.constructor.prototype;
                    return isObject(i) && i.hasOwnProperty("isPrototypeOf")
                },
                u = "undefined" != typeof window && void 0 !== window.HTMLElement && "undefined" != typeof document;

            function cloneObject(r) {
                let i;
                let a = Array.isArray(r);
                if (r instanceof Date) i = new Date(r);
                else if (r instanceof Set) i = new Set(r);
                else if (!(!(u && (r instanceof Blob || r instanceof FileList)) && (a || isObject(r)))) return r;
                else if (i = a ? [] : {}, a || isPlainObject(r))
                    for (let a in r) r.hasOwnProperty(a) && (i[a] = cloneObject(r[a]));
                else i = r;
                return i
            }
            var compact = r => Array.isArray(r) ? r.filter(Boolean) : [],
                isUndefined = r => void 0 === r,
                get = (r, i, a) => {
                    if (!i || !isObject(r)) return a;
                    let l = compact(i.split(/[,[\].]+?/)).reduce((r, i) => isNullOrUndefined(r) ? r : r[i], r);
                    return isUndefined(l) || l === r ? isUndefined(r[i]) ? a : r[i] : l
                },
                isBoolean = r => "boolean" == typeof r,
                isKey = r => /^\w*$/.test(r),
                stringToPath = r => compact(r.replace(/["|']|\]/g, "").split(/\.|\[/)),
                set = (r, i, a) => {
                    let l = -1,
                        u = isKey(i) ? [i] : stringToPath(i),
                        o = u.length,
                        d = o - 1;
                    for (; ++l < o;) {
                        let i = u[l],
                            o = a;
                        if (l !== d) {
                            let a = r[i];
                            o = isObject(a) || Array.isArray(a) ? a : isNaN(+u[l + 1]) ? {} : []
                        }
                        if ("__proto__" === i) return;
                        r[i] = o, r = r[i]
                    }
                    return r
                };
            let o = {
                    BLUR: "blur",
                    FOCUS_OUT: "focusout",
                    CHANGE: "change"
                },
                d = {
                    onBlur: "onBlur",
                    onChange: "onChange",
                    onSubmit: "onSubmit",
                    onTouched: "onTouched",
                    all: "all"
                },
                f = {
                    max: "max",
                    min: "min",
                    maxLength: "maxLength",
                    minLength: "minLength",
                    pattern: "pattern",
                    required: "required",
                    validate: "validate"
                },
                g = l.createContext(null),
                useFormContext = () => l.useContext(g),
                FormProvider = r => {
                    let {
                        children: i,
                        ...a
                    } = r;
                    return l.createElement(g.Provider, {
                        value: a
                    }, i)
                };
            var getProxyFormState = (r, i, a, l = !0) => {
                    let u = {
                        defaultValues: i._defaultValues
                    };
                    for (let o in r) Object.defineProperty(u, o, {
                        get: () => (i._proxyFormState[o] !== d.all && (i._proxyFormState[o] = !l || d.all), a && (a[o] = !0), r[o])
                    });
                    return u
                },
                isEmptyObject = r => isObject(r) && !Object.keys(r).length,
                shouldRenderFormState = (r, i, a, l) => {
                    a(r);
                    let {
                        name: u,
                        ...o
                    } = r;
                    return isEmptyObject(o) || Object.keys(o).length >= Object.keys(i).length || Object.keys(o).find(r => i[r] === (!l || d.all))
                },
                convertToArrayPayload = r => Array.isArray(r) ? r : [r],
                shouldSubscribeByName = (r, i, a) => !r || !i || r === i || convertToArrayPayload(r).some(r => r && (a ? r === i : r.startsWith(i) || i.startsWith(r)));

            function useSubscribe(r) {
                let i = l.useRef(r);
                i.current = r, l.useEffect(() => {
                    let a = !r.disabled && i.current.subject && i.current.subject.subscribe({
                        next: i.current.next
                    });
                    return () => {
                        a && a.unsubscribe()
                    }
                }, [r.disabled])
            }
            var isString = r => "string" == typeof r,
                generateWatchOutput = (r, i, a, l, u) => isString(r) ? (l && i.watch.add(r), get(a, r, u)) : Array.isArray(r) ? r.map(r => (l && i.watch.add(r), get(a, r))) : (l && (i.watchAll = !0), a);
            let Controller = r => r.render(function(r) {
                let i = useFormContext(),
                    {
                        name: a,
                        disabled: u,
                        control: d = i.control,
                        shouldUnregister: f
                    } = r,
                    g = isNameInFieldArray(d._names.array, a),
                    y = function(r) {
                        let i = useFormContext(),
                            {
                                control: a = i.control,
                                name: u,
                                defaultValue: o,
                                disabled: d,
                                exact: f
                            } = r || {},
                            g = l.useRef(u);
                        g.current = u, useSubscribe({
                            disabled: d,
                            subject: a._subjects.values,
                            next: r => {
                                shouldSubscribeByName(g.current, r.name, f) && m(cloneObject(generateWatchOutput(g.current, a._names, r.values || a._formValues, !1, o)))
                            }
                        });
                        let [y, m] = l.useState(a._getWatch(u, o));
                        return l.useEffect(() => a._removeUnmounted()), y
                    }({
                        control: d,
                        name: a,
                        defaultValue: get(d._formValues, a, get(d._defaultValues, a, r.defaultValue)),
                        exact: !0
                    }),
                    m = function(r) {
                        let i = useFormContext(),
                            {
                                control: a = i.control,
                                disabled: u,
                                name: o,
                                exact: d
                            } = r || {},
                            [f, g] = l.useState(a._formState),
                            y = l.useRef(!0),
                            m = l.useRef({
                                isDirty: !1,
                                isLoading: !1,
                                dirtyFields: !1,
                                touchedFields: !1,
                                validatingFields: !1,
                                isValidating: !1,
                                isValid: !1,
                                errors: !1
                            }),
                            p = l.useRef(o);
                        return p.current = o, useSubscribe({
                            disabled: u,
                            next: r => y.current && shouldSubscribeByName(p.current, r.name, d) && shouldRenderFormState(r, m.current, a._updateFormState) && g({ ...a._formState,
                                ...r
                            }),
                            subject: a._subjects.state
                        }), l.useEffect(() => (y.current = !0, m.current.isValid && a._updateValid(!0), () => {
                            y.current = !1
                        }), [a]), getProxyFormState(f, a, m.current, !1)
                    }({
                        control: d,
                        name: a
                    }),
                    p = l.useRef(d.register(a, { ...r.rules,
                        value: y,
                        ...isBoolean(r.disabled) ? {
                            disabled: r.disabled
                        } : {}
                    }));
                return l.useEffect(() => {
                    let r = d._options.shouldUnregister || f,
                        updateMounted = (r, i) => {
                            let a = get(d._fields, r);
                            a && (a._f.mount = i)
                        };
                    if (updateMounted(a, !0), r) {
                        let r = cloneObject(get(d._options.defaultValues, a));
                        set(d._defaultValues, a, r), isUndefined(get(d._formValues, a)) && set(d._formValues, a, r)
                    }
                    return () => {
                        (g ? r && !d._state.action : r) ? d.unregister(a): updateMounted(a, !1)
                    }
                }, [a, d, g, f]), l.useEffect(() => {
                    get(d._fields, a) && d._updateDisabledField({
                        disabled: u,
                        fields: d._fields,
                        name: a,
                        value: get(d._fields, a)._f.value
                    })
                }, [u, a, d]), {
                    field: {
                        name: a,
                        value: y,
                        ...isBoolean(u) || m.disabled ? {
                            disabled: m.disabled || u
                        } : {},
                        onChange: l.useCallback(r => p.current.onChange({
                            target: {
                                value: getEventValue(r),
                                name: a
                            },
                            type: o.CHANGE
                        }), [a]),
                        onBlur: l.useCallback(() => p.current.onBlur({
                            target: {
                                value: get(d._formValues, a),
                                name: a
                            },
                            type: o.BLUR
                        }), [a, d]),
                        ref: r => {
                            let i = get(d._fields, a);
                            i && r && (i._f.ref = {
                                focus: () => r.focus(),
                                select: () => r.select(),
                                setCustomValidity: i => r.setCustomValidity(i),
                                reportValidity: () => r.reportValidity()
                            })
                        }
                    },
                    formState: m,
                    fieldState: Object.defineProperties({}, {
                        invalid: {
                            enumerable: !0,
                            get: () => !!get(m.errors, a)
                        },
                        isDirty: {
                            enumerable: !0,
                            get: () => !!get(m.dirtyFields, a)
                        },
                        isTouched: {
                            enumerable: !0,
                            get: () => !!get(m.touchedFields, a)
                        },
                        isValidating: {
                            enumerable: !0,
                            get: () => !!get(m.validatingFields, a)
                        },
                        error: {
                            enumerable: !0,
                            get: () => get(m.errors, a)
                        }
                    })
                }
            }(r));
            var appendErrors = (r, i, a, l, u) => i ? { ...a[r],
                    types: { ...a[r] && a[r].types ? a[r].types : {},
                        [l]: u || !0
                    }
                } : {},
                getValidationModes = r => ({
                    isOnSubmit: !r || r === d.onSubmit,
                    isOnBlur: r === d.onBlur,
                    isOnChange: r === d.onChange,
                    isOnAll: r === d.all,
                    isOnTouch: r === d.onTouched
                }),
                isWatched = (r, i, a) => !a && (i.watchAll || i.watch.has(r) || [...i.watch].some(i => r.startsWith(i) && /^\.\w+/.test(r.slice(i.length))));
            let iterateFieldsByAction = (r, i, a, l) => {
                for (let u of a || Object.keys(r)) {
                    let a = get(r, u);
                    if (a) {
                        let {
                            _f: r,
                            ...o
                        } = a;
                        if (r) {
                            if (r.refs && r.refs[0] && i(r.refs[0], u) && !l || r.ref && i(r.ref, r.name) && !l) break;
                            iterateFieldsByAction(o, i)
                        } else isObject(o) && iterateFieldsByAction(o, i)
                    }
                }
            };
            var updateFieldArrayRootError = (r, i, a) => {
                    let l = compact(get(r, a));
                    return set(l, "root", i[a]), set(r, a, l), r
                },
                isFileInput = r => "file" === r.type,
                isFunction = r => "function" == typeof r,
                isHTMLElement = r => {
                    if (!u) return !1;
                    let i = r ? r.ownerDocument : 0;
                    return r instanceof(i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement)
                },
                isMessage = r => isString(r),
                isRadioInput = r => "radio" === r.type,
                isRegex = r => r instanceof RegExp;
            let y = {
                    value: !1,
                    isValid: !1
                },
                m = {
                    value: !0,
                    isValid: !0
                };
            var getCheckboxValue = r => {
                if (Array.isArray(r)) {
                    if (r.length > 1) {
                        let i = r.filter(r => r && r.checked && !r.disabled).map(r => r.value);
                        return {
                            value: i,
                            isValid: !!i.length
                        }
                    }
                    return r[0].checked && !r[0].disabled ? r[0].attributes && !isUndefined(r[0].attributes.value) ? isUndefined(r[0].value) || "" === r[0].value ? m : {
                        value: r[0].value,
                        isValid: !0
                    } : m : y
                }
                return y
            };
            let p = {
                isValid: !1,
                value: null
            };
            var getRadioValue = r => Array.isArray(r) ? r.reduce((r, i) => i && i.checked && !i.disabled ? {
                isValid: !0,
                value: i.value
            } : r, p) : p;

            function getValidateError(r, i, a = "validate") {
                if (isMessage(r) || Array.isArray(r) && r.every(isMessage) || isBoolean(r) && !r) return {
                    type: a,
                    message: isMessage(r) ? r : "",
                    ref: i
                }
            }
            var getValueAndMessage = r => isObject(r) && !isRegex(r) ? r : {
                    value: r,
                    message: ""
                },
                validateField = async (r, i, a, l, u) => {
                    let {
                        ref: o,
                        refs: d,
                        required: g,
                        maxLength: y,
                        minLength: m,
                        min: p,
                        max: h,
                        pattern: b,
                        validate: v,
                        name: V,
                        valueAsNumber: _,
                        mount: F,
                        disabled: A
                    } = r._f, O = get(i, V);
                    if (!F || A) return {};
                    let S = d ? d[0] : o,
                        setCustomValidity = r => {
                            l && S.reportValidity && (S.setCustomValidity(isBoolean(r) ? "" : r || ""), S.reportValidity())
                        },
                        x = {},
                        D = isRadioInput(o),
                        j = isCheckBoxInput(o),
                        E = (_ || isFileInput(o)) && isUndefined(o.value) && isUndefined(O) || isHTMLElement(o) && "" === o.value || "" === O || Array.isArray(O) && !O.length,
                        k = appendErrors.bind(null, V, a, x),
                        getMinMaxMessage = (r, i, a, l = f.maxLength, u = f.minLength) => {
                            let d = r ? i : a;
                            x[V] = {
                                type: r ? l : u,
                                message: d,
                                ref: o,
                                ...k(r ? l : u, d)
                            }
                        };
                    if (u ? !Array.isArray(O) || !O.length : g && (!(D || j) && (E || isNullOrUndefined(O)) || isBoolean(O) && !O || j && !getCheckboxValue(d).isValid || D && !getRadioValue(d).isValid)) {
                        let {
                            value: r,
                            message: i
                        } = isMessage(g) ? {
                            value: !!g,
                            message: g
                        } : getValueAndMessage(g);
                        if (r && (x[V] = {
                                type: f.required,
                                message: i,
                                ref: S,
                                ...k(f.required, i)
                            }, !a)) return setCustomValidity(i), x
                    }
                    if (!E && (!isNullOrUndefined(p) || !isNullOrUndefined(h))) {
                        let r, i;
                        let l = getValueAndMessage(h),
                            u = getValueAndMessage(p);
                        if (isNullOrUndefined(O) || isNaN(O)) {
                            let a = o.valueAsDate || new Date(O),
                                convertTimeToDate = r => new Date(new Date().toDateString() + " " + r),
                                d = "time" == o.type,
                                f = "week" == o.type;
                            isString(l.value) && O && (r = d ? convertTimeToDate(O) > convertTimeToDate(l.value) : f ? O > l.value : a > new Date(l.value)), isString(u.value) && O && (i = d ? convertTimeToDate(O) < convertTimeToDate(u.value) : f ? O < u.value : a < new Date(u.value))
                        } else {
                            let a = o.valueAsNumber || (O ? +O : O);
                            isNullOrUndefined(l.value) || (r = a > l.value), isNullOrUndefined(u.value) || (i = a < u.value)
                        }
                        if ((r || i) && (getMinMaxMessage(!!r, l.message, u.message, f.max, f.min), !a)) return setCustomValidity(x[V].message), x
                    }
                    if ((y || m) && !E && (isString(O) || u && Array.isArray(O))) {
                        let r = getValueAndMessage(y),
                            i = getValueAndMessage(m),
                            l = !isNullOrUndefined(r.value) && O.length > +r.value,
                            u = !isNullOrUndefined(i.value) && O.length < +i.value;
                        if ((l || u) && (getMinMaxMessage(l, r.message, i.message), !a)) return setCustomValidity(x[V].message), x
                    }
                    if (b && !E && isString(O)) {
                        let {
                            value: r,
                            message: i
                        } = getValueAndMessage(b);
                        if (isRegex(r) && !O.match(r) && (x[V] = {
                                type: f.pattern,
                                message: i,
                                ref: o,
                                ...k(f.pattern, i)
                            }, !a)) return setCustomValidity(i), x
                    }
                    if (v) {
                        if (isFunction(v)) {
                            let r = await v(O, i),
                                l = getValidateError(r, S);
                            if (l && (x[V] = { ...l,
                                    ...k(f.validate, l.message)
                                }, !a)) return setCustomValidity(l.message), x
                        } else if (isObject(v)) {
                            let r = {};
                            for (let l in v) {
                                if (!isEmptyObject(r) && !a) break;
                                let u = getValidateError(await v[l](O, i), S, l);
                                u && (r = { ...u,
                                    ...k(l, u.message)
                                }, setCustomValidity(u.message), a && (x[V] = r))
                            }
                            if (!isEmptyObject(r) && (x[V] = {
                                    ref: S,
                                    ...r
                                }, !a)) return x
                        }
                    }
                    return setCustomValidity(!0), x
                };

            function unset(r, i) {
                let a = Array.isArray(i) ? i : isKey(i) ? [i] : stringToPath(i),
                    l = 1 === a.length ? r : function(r, i) {
                        let a = i.slice(0, -1).length,
                            l = 0;
                        for (; l < a;) r = isUndefined(r) ? l++ : r[i[l++]];
                        return r
                    }(r, a),
                    u = a.length - 1,
                    o = a[u];
                return l && delete l[o], 0 !== u && (isObject(l) && isEmptyObject(l) || Array.isArray(l) && function(r) {
                    for (let i in r)
                        if (r.hasOwnProperty(i) && !isUndefined(r[i])) return !1;
                    return !0
                }(l)) && unset(r, a.slice(0, -1)), r
            }
            var createSubject = () => {
                    let r = [];
                    return {
                        get observers() {
                            return r
                        },
                        next: i => {
                            for (let a of r) a.next && a.next(i)
                        },
                        subscribe: i => (r.push(i), {
                            unsubscribe: () => {
                                r = r.filter(r => r !== i)
                            }
                        }),
                        unsubscribe: () => {
                            r = []
                        }
                    }
                },
                isPrimitive = r => isNullOrUndefined(r) || !isObjectType(r);

            function deepEqual(r, i) {
                if (isPrimitive(r) || isPrimitive(i)) return r === i;
                if (isDateObject(r) && isDateObject(i)) return r.getTime() === i.getTime();
                let a = Object.keys(r),
                    l = Object.keys(i);
                if (a.length !== l.length) return !1;
                for (let u of a) {
                    let a = r[u];
                    if (!l.includes(u)) return !1;
                    if ("ref" !== u) {
                        let r = i[u];
                        if (isDateObject(a) && isDateObject(r) || isObject(a) && isObject(r) || Array.isArray(a) && Array.isArray(r) ? !deepEqual(a, r) : a !== r) return !1
                    }
                }
                return !0
            }
            var isMultipleSelect = r => "select-multiple" === r.type,
                isRadioOrCheckbox = r => isRadioInput(r) || isCheckBoxInput(r),
                live = r => isHTMLElement(r) && r.isConnected,
                objectHasFunction = r => {
                    for (let i in r)
                        if (isFunction(r[i])) return !0;
                    return !1
                };

            function markFieldsDirty(r, i = {}) {
                let a = Array.isArray(r);
                if (isObject(r) || a)
                    for (let a in r) Array.isArray(r[a]) || isObject(r[a]) && !objectHasFunction(r[a]) ? (i[a] = Array.isArray(r[a]) ? [] : {}, markFieldsDirty(r[a], i[a])) : isNullOrUndefined(r[a]) || (i[a] = !0);
                return i
            }
            var getDirtyFields = (r, i) => (function getDirtyFieldsFromDefaultValues(r, i, a) {
                    let l = Array.isArray(r);
                    if (isObject(r) || l)
                        for (let l in r) Array.isArray(r[l]) || isObject(r[l]) && !objectHasFunction(r[l]) ? isUndefined(i) || isPrimitive(a[l]) ? a[l] = Array.isArray(r[l]) ? markFieldsDirty(r[l], []) : { ...markFieldsDirty(r[l])
                        } : getDirtyFieldsFromDefaultValues(r[l], isNullOrUndefined(i) ? {} : i[l], a[l]) : a[l] = !deepEqual(r[l], i[l]);
                    return a
                })(r, i, markFieldsDirty(i)),
                getFieldValueAs = (r, {
                    valueAsNumber: i,
                    valueAsDate: a,
                    setValueAs: l
                }) => isUndefined(r) ? r : i ? "" === r ? NaN : r ? +r : r : a && isString(r) ? new Date(r) : l ? l(r) : r;

            function getFieldValue(r) {
                let i = r.ref;
                return (r.refs ? r.refs.every(r => r.disabled) : i.disabled) ? void 0 : isFileInput(i) ? i.files : isRadioInput(i) ? getRadioValue(r.refs).value : isMultipleSelect(i) ? [...i.selectedOptions].map(({
                    value: r
                }) => r) : isCheckBoxInput(i) ? getCheckboxValue(r.refs).value : getFieldValueAs(isUndefined(i.value) ? r.ref.value : i.value, r)
            }
            var getResolverOptions = (r, i, a, l) => {
                    let u = {};
                    for (let a of r) {
                        let r = get(i, a);
                        r && set(u, a, r._f)
                    }
                    return {
                        criteriaMode: a,
                        names: [...r],
                        fields: u,
                        shouldUseNativeValidation: l
                    }
                },
                getRuleValue = r => isUndefined(r) ? r : isRegex(r) ? r.source : isObject(r) ? isRegex(r.value) ? r.value.source : r.value : r,
                hasValidation = r => r.mount && (r.required || r.min || r.max || r.maxLength || r.minLength || r.pattern || r.validate);

            function schemaErrorLookup(r, i, a) {
                let l = get(r, a);
                if (l || isKey(a)) return {
                    error: l,
                    name: a
                };
                let u = a.split(".");
                for (; u.length;) {
                    let l = u.join("."),
                        o = get(i, l),
                        d = get(r, l);
                    if (o && !Array.isArray(o) && a !== l) break;
                    if (d && d.type) return {
                        name: l,
                        error: d
                    };
                    u.pop()
                }
                return {
                    name: a
                }
            }
            var skipValidation = (r, i, a, l, u) => !u.isOnAll && (!a && u.isOnTouch ? !(i || r) : (a ? l.isOnBlur : u.isOnBlur) ? !r : (a ? !l.isOnChange : !u.isOnChange) || r),
                unsetEmptyArray = (r, i) => !compact(get(r, i)).length && unset(r, i);
            let h = {
                mode: d.onSubmit,
                reValidateMode: d.onChange,
                shouldFocusError: !0
            };

            function useForm(r = {}) {
                let i = l.useRef(),
                    a = l.useRef(),
                    [f, g] = l.useState({
                        isDirty: !1,
                        isValidating: !1,
                        isLoading: isFunction(r.defaultValues),
                        isSubmitted: !1,
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !1,
                        submitCount: 0,
                        dirtyFields: {},
                        touchedFields: {},
                        validatingFields: {},
                        errors: r.errors || {},
                        disabled: r.disabled || !1,
                        defaultValues: isFunction(r.defaultValues) ? void 0 : r.defaultValues
                    });
                i.current || (i.current = { ... function(r = {}) {
                        let i, a = { ...h,
                                ...r
                            },
                            l = {
                                submitCount: 0,
                                isDirty: !1,
                                isLoading: isFunction(a.defaultValues),
                                isValidating: !1,
                                isSubmitted: !1,
                                isSubmitting: !1,
                                isSubmitSuccessful: !1,
                                isValid: !1,
                                touchedFields: {},
                                dirtyFields: {},
                                validatingFields: {},
                                errors: a.errors || {},
                                disabled: a.disabled || !1
                            },
                            f = {},
                            g = (isObject(a.defaultValues) || isObject(a.values)) && cloneObject(a.defaultValues || a.values) || {},
                            y = a.shouldUnregister ? {} : cloneObject(g),
                            m = {
                                action: !1,
                                mount: !1,
                                watch: !1
                            },
                            p = {
                                mount: new Set,
                                unMount: new Set,
                                array: new Set,
                                watch: new Set
                            },
                            b = 0,
                            v = {
                                isDirty: !1,
                                dirtyFields: !1,
                                validatingFields: !1,
                                touchedFields: !1,
                                isValidating: !1,
                                isValid: !1,
                                errors: !1
                            },
                            V = {
                                values: createSubject(),
                                array: createSubject(),
                                state: createSubject()
                            },
                            _ = getValidationModes(a.mode),
                            F = getValidationModes(a.reValidateMode),
                            A = a.criteriaMode === d.all,
                            debounce = r => i => {
                                clearTimeout(b), b = setTimeout(r, i)
                            },
                            _updateValid = async r => {
                                if (v.isValid || r) {
                                    let r = a.resolver ? isEmptyObject((await _executeSchema()).errors) : await executeBuiltInValidation(f, !0);
                                    r !== l.isValid && V.state.next({
                                        isValid: r
                                    })
                                }
                            },
                            _updateIsValidating = (r, i) => {
                                (v.isValidating || v.validatingFields) && ((r || Array.from(p.mount)).forEach(r => {
                                    r && (i ? set(l.validatingFields, r, i) : unset(l.validatingFields, r))
                                }), V.state.next({
                                    validatingFields: l.validatingFields,
                                    isValidating: !isEmptyObject(l.validatingFields)
                                }))
                            },
                            updateErrors = (r, i) => {
                                set(l.errors, r, i), V.state.next({
                                    errors: l.errors
                                })
                            },
                            updateValidAndValue = (r, i, a, l) => {
                                let u = get(f, r);
                                if (u) {
                                    let o = get(y, r, isUndefined(a) ? get(g, r) : a);
                                    isUndefined(o) || l && l.defaultChecked || i ? set(y, r, i ? o : getFieldValue(u._f)) : setFieldValue(r, o), m.mount && _updateValid()
                                }
                            },
                            updateTouchAndDirty = (r, i, a, u, o) => {
                                let d = !1,
                                    y = !1,
                                    m = {
                                        name: r
                                    },
                                    p = !!(get(f, r) && get(f, r)._f.disabled);
                                if (!a || u) {
                                    v.isDirty && (y = l.isDirty, l.isDirty = m.isDirty = _getDirty(), d = y !== m.isDirty);
                                    let a = p || deepEqual(get(g, r), i);
                                    y = !!(!p && get(l.dirtyFields, r)), a || p ? unset(l.dirtyFields, r) : set(l.dirtyFields, r, !0), m.dirtyFields = l.dirtyFields, d = d || v.dirtyFields && !a !== y
                                }
                                if (a) {
                                    let i = get(l.touchedFields, r);
                                    i || (set(l.touchedFields, r, a), m.touchedFields = l.touchedFields, d = d || v.touchedFields && i !== a)
                                }
                                return d && o && V.state.next(m), d ? m : {}
                            },
                            shouldRenderByError = (a, u, o, d) => {
                                let f = get(l.errors, a),
                                    g = v.isValid && isBoolean(u) && l.isValid !== u;
                                if (r.delayError && o ? (i = debounce(() => updateErrors(a, o)))(r.delayError) : (clearTimeout(b), i = null, o ? set(l.errors, a, o) : unset(l.errors, a)), (o ? !deepEqual(f, o) : f) || !isEmptyObject(d) || g) {
                                    let r = { ...d,
                                        ...g && isBoolean(u) ? {
                                            isValid: u
                                        } : {},
                                        errors: l.errors,
                                        name: a
                                    };
                                    l = { ...l,
                                        ...r
                                    }, V.state.next(r)
                                }
                            },
                            _executeSchema = async r => {
                                _updateIsValidating(r, !0);
                                let i = await a.resolver(y, a.context, getResolverOptions(r || p.mount, f, a.criteriaMode, a.shouldUseNativeValidation));
                                return _updateIsValidating(r), i
                            },
                            executeSchemaAndUpdateState = async r => {
                                let {
                                    errors: i
                                } = await _executeSchema(r);
                                if (r)
                                    for (let a of r) {
                                        let r = get(i, a);
                                        r ? set(l.errors, a, r) : unset(l.errors, a)
                                    } else l.errors = i;
                                return i
                            },
                            executeBuiltInValidation = async (r, i, u = {
                                valid: !0
                            }) => {
                                for (let o in r) {
                                    let d = r[o];
                                    if (d) {
                                        let {
                                            _f: r,
                                            ...f
                                        } = d;
                                        if (r) {
                                            let f = p.array.has(r.name);
                                            _updateIsValidating([o], !0);
                                            let g = await validateField(d, y, A, a.shouldUseNativeValidation && !i, f);
                                            if (_updateIsValidating([o]), g[r.name] && (u.valid = !1, i)) break;
                                            i || (get(g, r.name) ? f ? updateFieldArrayRootError(l.errors, g, r.name) : set(l.errors, r.name, g[r.name]) : unset(l.errors, r.name))
                                        }
                                        f && await executeBuiltInValidation(f, i, u)
                                    }
                                }
                                return u.valid
                            },
                            _getDirty = (r, i) => (r && i && set(y, r, i), !deepEqual(getValues(), g)),
                            _getWatch = (r, i, a) => generateWatchOutput(r, p, { ...m.mount ? y : isUndefined(i) ? g : isString(r) ? {
                                    [r]: i
                                } : i
                            }, a, i),
                            setFieldValue = (r, i, a = {}) => {
                                let l = get(f, r),
                                    u = i;
                                if (l) {
                                    let a = l._f;
                                    a && (a.disabled || set(y, r, getFieldValueAs(i, a)), u = isHTMLElement(a.ref) && isNullOrUndefined(i) ? "" : i, isMultipleSelect(a.ref) ? [...a.ref.options].forEach(r => r.selected = u.includes(r.value)) : a.refs ? isCheckBoxInput(a.ref) ? a.refs.length > 1 ? a.refs.forEach(r => (!r.defaultChecked || !r.disabled) && (r.checked = Array.isArray(u) ? !!u.find(i => i === r.value) : u === r.value)) : a.refs[0] && (a.refs[0].checked = !!u) : a.refs.forEach(r => r.checked = r.value === u) : isFileInput(a.ref) ? a.ref.value = "" : (a.ref.value = u, a.ref.type || V.values.next({
                                        name: r,
                                        values: { ...y
                                        }
                                    })))
                                }(a.shouldDirty || a.shouldTouch) && updateTouchAndDirty(r, u, a.shouldTouch, a.shouldDirty, !0), a.shouldValidate && trigger(r)
                            },
                            setValues = (r, i, a) => {
                                for (let l in i) {
                                    let u = i[l],
                                        o = `${r}.${l}`,
                                        d = get(f, o);
                                    !p.array.has(r) && isPrimitive(u) && (!d || d._f) || isDateObject(u) ? setFieldValue(o, u, a) : setValues(o, u, a)
                                }
                            },
                            setValue = (r, i, a = {}) => {
                                let u = get(f, r),
                                    o = p.array.has(r),
                                    d = cloneObject(i);
                                set(y, r, d), o ? (V.array.next({
                                    name: r,
                                    values: { ...y
                                    }
                                }), (v.isDirty || v.dirtyFields) && a.shouldDirty && V.state.next({
                                    name: r,
                                    dirtyFields: getDirtyFields(g, y),
                                    isDirty: _getDirty(r, d)
                                })) : !u || u._f || isNullOrUndefined(d) ? setFieldValue(r, d, a) : setValues(r, d, a), isWatched(r, p) && V.state.next({ ...l
                                }), V.values.next({
                                    name: m.mount ? r : void 0,
                                    values: { ...y
                                    }
                                })
                            },
                            onChange = async r => {
                                m.mount = !0;
                                let u = r.target,
                                    d = u.name,
                                    g = !0,
                                    h = get(f, d),
                                    _updateIsFieldValueUpdated = r => {
                                        g = Number.isNaN(r) || r === get(y, d, r)
                                    };
                                if (h) {
                                    let m, b;
                                    let O = u.type ? getFieldValue(h._f) : getEventValue(r),
                                        S = r.type === o.BLUR || r.type === o.FOCUS_OUT,
                                        x = !hasValidation(h._f) && !a.resolver && !get(l.errors, d) && !h._f.deps || skipValidation(S, get(l.touchedFields, d), l.isSubmitted, F, _),
                                        D = isWatched(d, p, S);
                                    set(y, d, O), S ? (h._f.onBlur && h._f.onBlur(r), i && i(0)) : h._f.onChange && h._f.onChange(r);
                                    let j = updateTouchAndDirty(d, O, S, !1),
                                        E = !isEmptyObject(j) || D;
                                    if (S || V.values.next({
                                            name: d,
                                            type: r.type,
                                            values: { ...y
                                            }
                                        }), x) return v.isValid && _updateValid(), E && V.state.next({
                                        name: d,
                                        ...D ? {} : j
                                    });
                                    if (!S && D && V.state.next({ ...l
                                        }), a.resolver) {
                                        let {
                                            errors: r
                                        } = await _executeSchema([d]);
                                        if (_updateIsFieldValueUpdated(O), g) {
                                            let i = schemaErrorLookup(l.errors, f, d),
                                                a = schemaErrorLookup(r, f, i.name || d);
                                            m = a.error, d = a.name, b = isEmptyObject(r)
                                        }
                                    } else _updateIsValidating([d], !0), m = (await validateField(h, y, A, a.shouldUseNativeValidation))[d], _updateIsValidating([d]), _updateIsFieldValueUpdated(O), g && (m ? b = !1 : v.isValid && (b = await executeBuiltInValidation(f, !0)));
                                    g && (h._f.deps && trigger(h._f.deps), shouldRenderByError(d, b, m, j))
                                }
                            },
                            _focusInput = (r, i) => {
                                if (get(l.errors, i) && r.focus) return r.focus(), 1
                            },
                            trigger = async (r, i = {}) => {
                                let u, o;
                                let d = convertToArrayPayload(r);
                                if (a.resolver) {
                                    let i = await executeSchemaAndUpdateState(isUndefined(r) ? r : d);
                                    u = isEmptyObject(i), o = r ? !d.some(r => get(i, r)) : u
                                } else r ? ((o = (await Promise.all(d.map(async r => {
                                    let i = get(f, r);
                                    return await executeBuiltInValidation(i && i._f ? {
                                        [r]: i
                                    } : i)
                                }))).every(Boolean)) || l.isValid) && _updateValid() : o = u = await executeBuiltInValidation(f);
                                return V.state.next({ ...!isString(r) || v.isValid && u !== l.isValid ? {} : {
                                        name: r
                                    },
                                    ...a.resolver || !r ? {
                                        isValid: u
                                    } : {},
                                    errors: l.errors
                                }), i.shouldFocus && !o && iterateFieldsByAction(f, _focusInput, r ? d : p.mount), o
                            },
                            getValues = r => {
                                let i = { ...m.mount ? y : g
                                };
                                return isUndefined(r) ? i : isString(r) ? get(i, r) : r.map(r => get(i, r))
                            },
                            getFieldState = (r, i) => ({
                                invalid: !!get((i || l).errors, r),
                                isDirty: !!get((i || l).dirtyFields, r),
                                isTouched: !!get((i || l).touchedFields, r),
                                isValidating: !!get((i || l).validatingFields, r),
                                error: get((i || l).errors, r)
                            }),
                            setError = (r, i, a) => {
                                let u = (get(f, r, {
                                        _f: {}
                                    })._f || {}).ref,
                                    o = get(l.errors, r) || {},
                                    {
                                        ref: d,
                                        message: g,
                                        type: y,
                                        ...m
                                    } = o;
                                set(l.errors, r, { ...m,
                                    ...i,
                                    ref: u
                                }), V.state.next({
                                    name: r,
                                    errors: l.errors,
                                    isValid: !1
                                }), a && a.shouldFocus && u && u.focus && u.focus()
                            },
                            unregister = (r, i = {}) => {
                                for (let u of r ? convertToArrayPayload(r) : p.mount) p.mount.delete(u), p.array.delete(u), i.keepValue || (unset(f, u), unset(y, u)), i.keepError || unset(l.errors, u), i.keepDirty || unset(l.dirtyFields, u), i.keepTouched || unset(l.touchedFields, u), i.keepIsValidating || unset(l.validatingFields, u), a.shouldUnregister || i.keepDefaultValue || unset(g, u);
                                V.values.next({
                                    values: { ...y
                                    }
                                }), V.state.next({ ...l,
                                    ...i.keepDirty ? {
                                        isDirty: _getDirty()
                                    } : {}
                                }), i.keepIsValid || _updateValid()
                            },
                            _updateDisabledField = ({
                                disabled: r,
                                name: i,
                                field: a,
                                fields: l,
                                value: u
                            }) => {
                                if (isBoolean(r) && m.mount || r) {
                                    let o = r ? void 0 : isUndefined(u) ? getFieldValue(a ? a._f : get(l, i)._f) : u;
                                    set(y, i, o), updateTouchAndDirty(i, o, !1, !1, !0)
                                }
                            },
                            register = (r, i = {}) => {
                                let l = get(f, r),
                                    u = isBoolean(i.disabled);
                                return set(f, r, { ...l || {},
                                    _f: { ...l && l._f ? l._f : {
                                            ref: {
                                                name: r
                                            }
                                        },
                                        name: r,
                                        mount: !0,
                                        ...i
                                    }
                                }), p.mount.add(r), l ? _updateDisabledField({
                                    field: l,
                                    disabled: i.disabled,
                                    name: r,
                                    value: i.value
                                }) : updateValidAndValue(r, !0, i.value), { ...u ? {
                                        disabled: i.disabled
                                    } : {},
                                    ...a.progressive ? {
                                        required: !!i.required,
                                        min: getRuleValue(i.min),
                                        max: getRuleValue(i.max),
                                        minLength: getRuleValue(i.minLength),
                                        maxLength: getRuleValue(i.maxLength),
                                        pattern: getRuleValue(i.pattern)
                                    } : {},
                                    name: r,
                                    onChange,
                                    onBlur: onChange,
                                    ref: u => {
                                        if (u) {
                                            register(r, i), l = get(f, r);
                                            let a = isUndefined(u.value) && u.querySelectorAll && u.querySelectorAll("input,select,textarea")[0] || u,
                                                o = isRadioOrCheckbox(a),
                                                d = l._f.refs || [];
                                            (o ? d.find(r => r === a) : a === l._f.ref) || (set(f, r, {
                                                _f: { ...l._f,
                                                    ...o ? {
                                                        refs: [...d.filter(live), a, ...Array.isArray(get(g, r)) ? [{}] : []],
                                                        ref: {
                                                            type: a.type,
                                                            name: r
                                                        }
                                                    } : {
                                                        ref: a
                                                    }
                                                }
                                            }), updateValidAndValue(r, !1, void 0, a))
                                        } else(l = get(f, r, {}))._f && (l._f.mount = !1), (a.shouldUnregister || i.shouldUnregister) && !(isNameInFieldArray(p.array, r) && m.action) && p.unMount.add(r)
                                    }
                                }
                            },
                            _focusError = () => a.shouldFocusError && iterateFieldsByAction(f, _focusInput, p.mount),
                            handleSubmit = (r, i) => async u => {
                                let o;
                                u && (u.preventDefault && u.preventDefault(), u.persist && u.persist());
                                let d = cloneObject(y);
                                if (V.state.next({
                                        isSubmitting: !0
                                    }), a.resolver) {
                                    let {
                                        errors: r,
                                        values: i
                                    } = await _executeSchema();
                                    l.errors = r, d = i
                                } else await executeBuiltInValidation(f);
                                if (unset(l.errors, "root"), isEmptyObject(l.errors)) {
                                    V.state.next({
                                        errors: {}
                                    });
                                    try {
                                        await r(d, u)
                                    } catch (r) {
                                        o = r
                                    }
                                } else i && await i({ ...l.errors
                                }, u), _focusError(), setTimeout(_focusError);
                                if (V.state.next({
                                        isSubmitted: !0,
                                        isSubmitting: !1,
                                        isSubmitSuccessful: isEmptyObject(l.errors) && !o,
                                        submitCount: l.submitCount + 1,
                                        errors: l.errors
                                    }), o) throw o
                            },
                            _reset = (i, a = {}) => {
                                let o = i ? cloneObject(i) : g,
                                    d = cloneObject(o),
                                    h = isEmptyObject(i),
                                    b = h ? g : d;
                                if (a.keepDefaultValues || (g = o), !a.keepValues) {
                                    if (a.keepDirtyValues)
                                        for (let r of p.mount) get(l.dirtyFields, r) ? set(b, r, get(y, r)) : setValue(r, get(b, r));
                                    else {
                                        if (u && isUndefined(i))
                                            for (let r of p.mount) {
                                                let i = get(f, r);
                                                if (i && i._f) {
                                                    let r = Array.isArray(i._f.refs) ? i._f.refs[0] : i._f.ref;
                                                    if (isHTMLElement(r)) {
                                                        let i = r.closest("form");
                                                        if (i) {
                                                            i.reset();
                                                            break
                                                        }
                                                    }
                                                }
                                            }
                                        f = {}
                                    }
                                    y = r.shouldUnregister ? a.keepDefaultValues ? cloneObject(g) : {} : cloneObject(b), V.array.next({
                                        values: { ...b
                                        }
                                    }), V.values.next({
                                        values: { ...b
                                        }
                                    })
                                }
                                p = {
                                    mount: a.keepDirtyValues ? p.mount : new Set,
                                    unMount: new Set,
                                    array: new Set,
                                    watch: new Set,
                                    watchAll: !1,
                                    focus: ""
                                }, m.mount = !v.isValid || !!a.keepIsValid || !!a.keepDirtyValues, m.watch = !!r.shouldUnregister, V.state.next({
                                    submitCount: a.keepSubmitCount ? l.submitCount : 0,
                                    isDirty: !h && (a.keepDirty ? l.isDirty : !!(a.keepDefaultValues && !deepEqual(i, g))),
                                    isSubmitted: !!a.keepIsSubmitted && l.isSubmitted,
                                    dirtyFields: h ? [] : a.keepDirtyValues ? a.keepDefaultValues && y ? getDirtyFields(g, y) : l.dirtyFields : a.keepDefaultValues && i ? getDirtyFields(g, i) : {},
                                    touchedFields: a.keepTouched ? l.touchedFields : {},
                                    errors: a.keepErrors ? l.errors : {},
                                    isSubmitSuccessful: !!a.keepIsSubmitSuccessful && l.isSubmitSuccessful,
                                    isSubmitting: !1
                                })
                            },
                            reset = (r, i) => _reset(isFunction(r) ? r(y) : r, i);
                        return {
                            control: {
                                register,
                                unregister,
                                getFieldState,
                                handleSubmit,
                                setError,
                                _executeSchema,
                                _getWatch,
                                _getDirty,
                                _updateValid,
                                _removeUnmounted: () => {
                                    for (let r of p.unMount) {
                                        let i = get(f, r);
                                        i && (i._f.refs ? i._f.refs.every(r => !live(r)) : !live(i._f.ref)) && unregister(r)
                                    }
                                    p.unMount = new Set
                                },
                                _updateFieldArray: (r, i = [], a, u, o = !0, d = !0) => {
                                    if (u && a) {
                                        if (m.action = !0, d && Array.isArray(get(f, r))) {
                                            let i = a(get(f, r), u.argA, u.argB);
                                            o && set(f, r, i)
                                        }
                                        if (d && Array.isArray(get(l.errors, r))) {
                                            let i = a(get(l.errors, r), u.argA, u.argB);
                                            o && set(l.errors, r, i), unsetEmptyArray(l.errors, r)
                                        }
                                        if (v.touchedFields && d && Array.isArray(get(l.touchedFields, r))) {
                                            let i = a(get(l.touchedFields, r), u.argA, u.argB);
                                            o && set(l.touchedFields, r, i)
                                        }
                                        v.dirtyFields && (l.dirtyFields = getDirtyFields(g, y)), V.state.next({
                                            name: r,
                                            isDirty: _getDirty(r, i),
                                            dirtyFields: l.dirtyFields,
                                            errors: l.errors,
                                            isValid: l.isValid
                                        })
                                    } else set(y, r, i)
                                },
                                _updateDisabledField,
                                _getFieldArray: i => compact(get(m.mount ? y : g, i, r.shouldUnregister ? get(g, i, []) : [])),
                                _reset,
                                _resetDefaultValues: () => isFunction(a.defaultValues) && a.defaultValues().then(r => {
                                    reset(r, a.resetOptions), V.state.next({
                                        isLoading: !1
                                    })
                                }),
                                _updateFormState: r => {
                                    l = { ...l,
                                        ...r
                                    }
                                },
                                _disableForm: r => {
                                    isBoolean(r) && (V.state.next({
                                        disabled: r
                                    }), iterateFieldsByAction(f, (i, a) => {
                                        let l = get(f, a);
                                        l && (i.disabled = l._f.disabled || r, Array.isArray(l._f.refs) && l._f.refs.forEach(i => {
                                            i.disabled = l._f.disabled || r
                                        }))
                                    }, 0, !1))
                                },
                                _subjects: V,
                                _proxyFormState: v,
                                _setErrors: r => {
                                    l.errors = r, V.state.next({
                                        errors: l.errors,
                                        isValid: !1
                                    })
                                },
                                get _fields() {
                                    return f
                                },
                                get _formValues() {
                                    return y
                                },
                                get _state() {
                                    return m
                                },
                                set _state(value) {
                                    m = value
                                },
                                get _defaultValues() {
                                    return g
                                },
                                get _names() {
                                    return p
                                },
                                set _names(value) {
                                    p = value
                                },
                                get _formState() {
                                    return l
                                },
                                set _formState(value) {
                                    l = value
                                },
                                get _options() {
                                    return a
                                },
                                set _options(value) {
                                    a = { ...a,
                                        ...value
                                    }
                                }
                            },
                            trigger,
                            register,
                            handleSubmit,
                            watch: (r, i) => isFunction(r) ? V.values.subscribe({
                                next: a => r(_getWatch(void 0, i), a)
                            }) : _getWatch(r, i, !0),
                            setValue,
                            getValues,
                            reset,
                            resetField: (r, i = {}) => {
                                get(f, r) && (isUndefined(i.defaultValue) ? setValue(r, cloneObject(get(g, r))) : (setValue(r, i.defaultValue), set(g, r, cloneObject(i.defaultValue))), i.keepTouched || unset(l.touchedFields, r), i.keepDirty || (unset(l.dirtyFields, r), l.isDirty = i.defaultValue ? _getDirty(r, cloneObject(get(g, r))) : _getDirty()), !i.keepError && (unset(l.errors, r), v.isValid && _updateValid()), V.state.next({ ...l
                                }))
                            },
                            clearErrors: r => {
                                r && convertToArrayPayload(r).forEach(r => unset(l.errors, r)), V.state.next({
                                    errors: r ? l.errors : {}
                                })
                            },
                            unregister,
                            setError,
                            setFocus: (r, i = {}) => {
                                let a = get(f, r),
                                    l = a && a._f;
                                if (l) {
                                    let r = l.refs ? l.refs[0] : l.ref;
                                    r.focus && (r.focus(), i.shouldSelect && r.select())
                                }
                            },
                            getFieldState
                        }
                    }(r),
                    formState: f
                });
                let y = i.current.control;
                return y._options = r, useSubscribe({
                    subject: y._subjects.state,
                    next: r => {
                        shouldRenderFormState(r, y._proxyFormState, y._updateFormState, !0) && g({ ...y._formState
                        })
                    }
                }), l.useEffect(() => y._disableForm(r.disabled), [y, r.disabled]), l.useEffect(() => {
                    if (y._proxyFormState.isDirty) {
                        let r = y._getDirty();
                        r !== f.isDirty && y._subjects.state.next({
                            isDirty: r
                        })
                    }
                }, [y, f.isDirty]), l.useEffect(() => {
                    r.values && !deepEqual(r.values, a.current) ? (y._reset(r.values, y._options.resetOptions), a.current = r.values, g(r => ({ ...r
                    }))) : y._resetDefaultValues()
                }, [r.values, y]), l.useEffect(() => {
                    r.errors && y._setErrors(r.errors)
                }, [r.errors, y]), l.useEffect(() => {
                    y._state.mount || (y._updateValid(), y._state.mount = !0), y._state.watch && (y._state.watch = !1, y._subjects.state.next({ ...y._formState
                    })), y._removeUnmounted()
                }), l.useEffect(() => {
                    r.shouldUnregister && y._subjects.values.next({
                        values: y._getWatch()
                    })
                }, [r.shouldUnregister, y]), i.current.formState = getProxyFormState(f, y), i.current
            }
        }
    }
]);