(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3106], {
        27935: function(t, e, r) {
            "use strict";
            r.d(e, {
                i: function() {
                    return n
                }
            });
            let n = "abi/5.7.0"
        },
        77273: function(t, e, r) {
            "use strict";
            r.d(e, {
                R: function() {
                    return AbiCoder
                },
                $: function() {
                    return v
                }
            });
            var n = r(57273),
                i = r(17213),
                o = r(36288),
                s = r(27935),
                a = r(11035),
                u = r(18994);
            let AddressCoder = class AddressCoder extends a.XI {
                constructor(t) {
                    super("address", "address", t, !1)
                }
                defaultValue() {
                    return "0x0000000000000000000000000000000000000000"
                }
                encode(t, e) {
                    try {
                        e = (0, u.getAddress)(e)
                    } catch (t) {
                        this._throwError(t.message, e)
                    }
                    return t.writeValue(e)
                }
                decode(t) {
                    return (0, u.getAddress)((0, n.hexZeroPad)(t.readValue().toHexString(), 20))
                }
            };
            let AnonymousCoder = class AnonymousCoder extends a.XI {
                constructor(t) {
                    super(t.name, t.type, void 0, t.dynamic), this.coder = t
                }
                defaultValue() {
                    return this.coder.defaultValue()
                }
                encode(t, e) {
                    return this.coder.encode(t, e)
                }
                decode(t) {
                    return this.coder.decode(t)
                }
            };
            let l = new o.Logger(s.i);

            function pack(t, e, r) {
                let n = null;
                if (Array.isArray(r)) n = r;
                else if (r && "object" == typeof r) {
                    let t = {};
                    n = e.map(e => {
                        let n = e.localName;
                        return n || l.throwError("cannot encode object for signature with missing names", o.Logger.errors.INVALID_ARGUMENT, {
                            argument: "values",
                            coder: e,
                            value: r
                        }), t[n] && l.throwError("cannot encode object for signature with duplicate names", o.Logger.errors.INVALID_ARGUMENT, {
                            argument: "values",
                            coder: e,
                            value: r
                        }), t[n] = !0, r[n]
                    })
                } else l.throwArgumentError("invalid tuple value", "tuple", r);
                e.length !== n.length && l.throwArgumentError("types/value length mismatch", "tuple", r);
                let i = new a.QV(t.wordSize),
                    s = new a.QV(t.wordSize),
                    u = [];
                return e.forEach((t, e) => {
                    let r = n[e];
                    if (t.dynamic) {
                        let e = s.length;
                        t.encode(s, r);
                        let n = i.writeUpdatableValue();
                        u.push(t => {
                            n(t + e)
                        })
                    } else t.encode(i, r)
                }), u.forEach(t => {
                    t(i.length)
                }), t.appendWriter(i) + t.appendWriter(s)
            }

            function unpack(t, e) {
                let r = [],
                    n = t.subReader(0);
                e.forEach(e => {
                    let i = null;
                    if (e.dynamic) {
                        let r = t.readValue(),
                            s = n.subReader(r.toNumber());
                        try {
                            i = e.decode(s)
                        } catch (t) {
                            if (t.code === o.Logger.errors.BUFFER_OVERRUN) throw t;
                            (i = t).baseType = e.name, i.name = e.localName, i.type = e.type
                        }
                    } else try {
                        i = e.decode(t)
                    } catch (t) {
                        if (t.code === o.Logger.errors.BUFFER_OVERRUN) throw t;
                        (i = t).baseType = e.name, i.name = e.localName, i.type = e.type
                    }
                    void 0 != i && r.push(i)
                });
                let i = e.reduce((t, e) => {
                    let r = e.localName;
                    return r && (t[r] || (t[r] = 0), t[r]++), t
                }, {});
                e.forEach((t, e) => {
                    let n = t.localName;
                    if (!n || 1 !== i[n] || ("length" === n && (n = "_length"), null != r[n])) return;
                    let o = r[e];
                    o instanceof Error ? Object.defineProperty(r, n, {
                        enumerable: !0,
                        get: () => {
                            throw o
                        }
                    }) : r[n] = o
                });
                for (let t = 0; t < r.length; t++) {
                    let e = r[t];
                    e instanceof Error && Object.defineProperty(r, t, {
                        enumerable: !0,
                        get: () => {
                            throw e
                        }
                    })
                }
                return Object.freeze(r)
            }
            let ArrayCoder = class ArrayCoder extends a.XI {
                constructor(t, e, r) {
                    let n = t.type + "[" + (e >= 0 ? e : "") + "]",
                        i = -1 === e || t.dynamic;
                    super("array", n, r, i), this.coder = t, this.length = e
                }
                defaultValue() {
                    let t = this.coder.defaultValue(),
                        e = [];
                    for (let r = 0; r < this.length; r++) e.push(t);
                    return e
                }
                encode(t, e) {
                    Array.isArray(e) || this._throwError("expected array value", e);
                    let r = this.length; - 1 === r && (r = e.length, t.writeValue(e.length)), l.checkArgumentCount(e.length, r, "coder array" + (this.localName ? " " + this.localName : ""));
                    let n = [];
                    for (let t = 0; t < e.length; t++) n.push(this.coder);
                    return pack(t, n, e)
                }
                decode(t) {
                    let e = this.length; - 1 === e && 32 * (e = t.readValue().toNumber()) > t._data.length && l.throwError("insufficient data length", o.Logger.errors.BUFFER_OVERRUN, {
                        length: t._data.length,
                        count: e
                    });
                    let r = [];
                    for (let t = 0; t < e; t++) r.push(new AnonymousCoder(this.coder));
                    return t.coerce(this.name, unpack(t, r))
                }
            };
            let BooleanCoder = class BooleanCoder extends a.XI {
                constructor(t) {
                    super("bool", "bool", t, !1)
                }
                defaultValue() {
                    return !1
                }
                encode(t, e) {
                    return t.writeValue(e ? 1 : 0)
                }
                decode(t) {
                    return t.coerce(this.type, !t.readValue().isZero())
                }
            };
            let DynamicBytesCoder = class DynamicBytesCoder extends a.XI {
                constructor(t, e) {
                    super(t, t, e, !0)
                }
                defaultValue() {
                    return "0x"
                }
                encode(t, e) {
                    return e = (0, n.arrayify)(e), t.writeValue(e.length) + t.writeBytes(e)
                }
                decode(t) {
                    return t.readBytes(t.readValue().toNumber(), !0)
                }
            };
            let BytesCoder = class BytesCoder extends DynamicBytesCoder {
                constructor(t) {
                    super("bytes", t)
                }
                decode(t) {
                    return t.coerce(this.name, (0, n.hexlify)(super.decode(t)))
                }
            };
            let FixedBytesCoder = class FixedBytesCoder extends a.XI {
                constructor(t, e) {
                    let r = "bytes" + String(t);
                    super(r, r, e, !1), this.size = t
                }
                defaultValue() {
                    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size)
                }
                encode(t, e) {
                    let r = (0, n.arrayify)(e);
                    return r.length !== this.size && this._throwError("incorrect data length", e), t.writeBytes(r)
                }
                decode(t) {
                    return t.coerce(this.name, (0, n.hexlify)(t.readBytes(this.size)))
                }
            };
            let NullCoder = class NullCoder extends a.XI {
                constructor(t) {
                    super("null", "", t, !1)
                }
                defaultValue() {
                    return null
                }
                encode(t, e) {
                    return null != e && this._throwError("not null", e), t.writeBytes([])
                }
                decode(t) {
                    return t.readBytes(0), t.coerce(this.name, null)
                }
            };
            var h = r(92598),
                c = r(53690);
            let NumberCoder = class NumberCoder extends a.XI {
                constructor(t, e, r) {
                    let n = (e ? "int" : "uint") + 8 * t;
                    super(n, n, r, !1), this.size = t, this.signed = e
                }
                defaultValue() {
                    return 0
                }
                encode(t, e) {
                    let r = h.O$.from(e),
                        n = c.Bz.mask(8 * t.wordSize);
                    if (this.signed) {
                        let t = n.mask(8 * this.size - 1);
                        (r.gt(t) || r.lt(t.add(c.fh).mul(c.tL))) && this._throwError("value out-of-bounds", e)
                    } else(r.lt(c._Y) || r.gt(n.mask(8 * this.size))) && this._throwError("value out-of-bounds", e);
                    return r = r.toTwos(8 * this.size).mask(8 * this.size), this.signed && (r = r.fromTwos(8 * this.size).toTwos(8 * t.wordSize)), t.writeValue(r)
                }
                decode(t) {
                    let e = t.readValue().mask(8 * this.size);
                    return this.signed && (e = e.fromTwos(8 * this.size)), t.coerce(this.name, e)
                }
            };
            var d = r(58337);
            let StringCoder = class StringCoder extends DynamicBytesCoder {
                constructor(t) {
                    super("string", t)
                }
                defaultValue() {
                    return ""
                }
                encode(t, e) {
                    return super.encode(t, (0, d.Y0)(e))
                }
                decode(t) {
                    return (0, d.ZN)(super.decode(t))
                }
            };
            let TupleCoder = class TupleCoder extends a.XI {
                constructor(t, e) {
                    let r = !1,
                        n = [];
                    t.forEach(t => {
                        t.dynamic && (r = !0), n.push(t.type)
                    });
                    let i = "tuple(" + n.join(",") + ")";
                    super("tuple", i, e, r), this.coders = t
                }
                defaultValue() {
                    let t = [];
                    this.coders.forEach(e => {
                        t.push(e.defaultValue())
                    });
                    let e = this.coders.reduce((t, e) => {
                        let r = e.localName;
                        return r && (t[r] || (t[r] = 0), t[r]++), t
                    }, {});
                    return this.coders.forEach((r, n) => {
                        let i = r.localName;
                        i && 1 === e[i] && ("length" === i && (i = "_length"), null == t[i] && (t[i] = t[n]))
                    }), Object.freeze(t)
                }
                encode(t, e) {
                    return pack(t, this.coders, e)
                }
                decode(t) {
                    return t.coerce(this.name, unpack(t, this.coders))
                }
            };
            var g = r(55725);
            let m = new o.Logger(s.i),
                p = new RegExp(/^bytes([0-9]*)$/),
                y = new RegExp(/^(u?int)([0-9]*)$/);
            let AbiCoder = class AbiCoder {
                constructor(t) {
                    (0, i.defineReadOnly)(this, "coerceFunc", t || null)
                }
                _getCoder(t) {
                    switch (t.baseType) {
                        case "address":
                            return new AddressCoder(t.name);
                        case "bool":
                            return new BooleanCoder(t.name);
                        case "string":
                            return new StringCoder(t.name);
                        case "bytes":
                            return new BytesCoder(t.name);
                        case "array":
                            return new ArrayCoder(this._getCoder(t.arrayChildren), t.arrayLength, t.name);
                        case "tuple":
                            return new TupleCoder((t.components || []).map(t => this._getCoder(t)), t.name);
                        case "":
                            return new NullCoder(t.name)
                    }
                    let e = t.type.match(y);
                    if (e) {
                        let r = parseInt(e[2] || "256");
                        return (0 === r || r > 256 || r % 8 != 0) && m.throwArgumentError("invalid " + e[1] + " bit length", "param", t), new NumberCoder(r / 8, "int" === e[1], t.name)
                    }
                    if (e = t.type.match(p)) {
                        let r = parseInt(e[1]);
                        return (0 === r || r > 32) && m.throwArgumentError("invalid bytes length", "param", t), new FixedBytesCoder(r, t.name)
                    }
                    return m.throwArgumentError("invalid type", "type", t.type)
                }
                _getWordSize() {
                    return 32
                }
                _getReader(t, e) {
                    return new a.Ej(t, this._getWordSize(), this.coerceFunc, e)
                }
                _getWriter() {
                    return new a.QV(this._getWordSize())
                }
                getDefaultValue(t) {
                    let e = t.map(t => this._getCoder(g._R.from(t))),
                        r = new TupleCoder(e, "_");
                    return r.defaultValue()
                }
                encode(t, e) {
                    t.length !== e.length && m.throwError("types/values length mismatch", o.Logger.errors.INVALID_ARGUMENT, {
                        count: {
                            types: t.length,
                            values: e.length
                        },
                        value: {
                            types: t,
                            values: e
                        }
                    });
                    let r = t.map(t => this._getCoder(g._R.from(t))),
                        n = new TupleCoder(r, "_"),
                        i = this._getWriter();
                    return n.encode(i, e), i.data
                }
                decode(t, e, r) {
                    let i = t.map(t => this._getCoder(g._R.from(t))),
                        o = new TupleCoder(i, "_");
                    return o.decode(this._getReader((0, n.arrayify)(e), r))
                }
            };
            let v = new AbiCoder
        },
        11035: function(t, e, r) {
            "use strict";
            r.d(e, {
                BR: function() {
                    return checkResultErrors
                },
                Ej: function() {
                    return Reader
                },
                QV: function() {
                    return Writer
                },
                XI: function() {
                    return Coder
                }
            });
            var n = r(57273),
                i = r(92598),
                o = r(17213),
                s = r(36288),
                a = r(27935);
            let u = new s.Logger(a.i);

            function checkResultErrors(t) {
                let e = [],
                    checkErrors = function(t, r) {
                        if (Array.isArray(r))
                            for (let n in r) {
                                let i = t.slice();
                                i.push(n);
                                try {
                                    checkErrors(i, r[n])
                                } catch (t) {
                                    e.push({
                                        path: i,
                                        error: t
                                    })
                                }
                            }
                    };
                return checkErrors([], t), e
            }
            let Coder = class Coder {
                constructor(t, e, r, n) {
                    this.name = t, this.type = e, this.localName = r, this.dynamic = n
                }
                _throwError(t, e) {
                    u.throwArgumentError(t, this.localName, e)
                }
            };
            let Writer = class Writer {
                constructor(t) {
                    (0, o.defineReadOnly)(this, "wordSize", t || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(t)
                }
                get data() {
                    return (0, n.hexConcat)(this._data)
                }
                get length() {
                    return this._dataLength
                }
                _writeData(t) {
                    return this._data.push(t), this._dataLength += t.length, t.length
                }
                appendWriter(t) {
                    return this._writeData((0, n.concat)(t._data))
                }
                writeBytes(t) {
                    let e = (0, n.arrayify)(t),
                        r = e.length % this.wordSize;
                    return r && (e = (0, n.concat)([e, this._padding.slice(r)])), this._writeData(e)
                }
                _getValue(t) {
                    let e = (0, n.arrayify)(i.O$.from(t));
                    return e.length > this.wordSize && u.throwError("value out-of-bounds", s.Logger.errors.BUFFER_OVERRUN, {
                        length: this.wordSize,
                        offset: e.length
                    }), e.length % this.wordSize && (e = (0, n.concat)([this._padding.slice(e.length % this.wordSize), e])), e
                }
                writeValue(t) {
                    return this._writeData(this._getValue(t))
                }
                writeUpdatableValue() {
                    let t = this._data.length;
                    return this._data.push(this._padding), this._dataLength += this.wordSize, e => {
                        this._data[t] = this._getValue(e)
                    }
                }
            };
            let Reader = class Reader {
                constructor(t, e, r, i) {
                    (0, o.defineReadOnly)(this, "_data", (0, n.arrayify)(t)), (0, o.defineReadOnly)(this, "wordSize", e || 32), (0, o.defineReadOnly)(this, "_coerceFunc", r), (0, o.defineReadOnly)(this, "allowLoose", i), this._offset = 0
                }
                get data() {
                    return (0, n.hexlify)(this._data)
                }
                get consumed() {
                    return this._offset
                }
                static coerce(t, e) {
                    let r = t.match("^u?int([0-9]+)$");
                    return r && 48 >= parseInt(r[1]) && (e = e.toNumber()), e
                }
                coerce(t, e) {
                    return this._coerceFunc ? this._coerceFunc(t, e) : Reader.coerce(t, e)
                }
                _peekBytes(t, e, r) {
                    let n = Math.ceil(e / this.wordSize) * this.wordSize;
                    return this._offset + n > this._data.length && (this.allowLoose && r && this._offset + e <= this._data.length ? n = e : u.throwError("data out-of-bounds", s.Logger.errors.BUFFER_OVERRUN, {
                        length: this._data.length,
                        offset: this._offset + n
                    })), this._data.slice(this._offset, this._offset + n)
                }
                subReader(t) {
                    return new Reader(this._data.slice(this._offset + t), this.wordSize, this._coerceFunc, this.allowLoose)
                }
                readBytes(t, e) {
                    let r = this._peekBytes(0, t, !!e);
                    return this._offset += r.length, r.slice(0, t)
                }
                readValue() {
                    return i.O$.from(this.readBytes(this.wordSize))
                }
            }
        },
        55725: function(t, e, r) {
            "use strict";
            r.d(e, {
                HY: function() {
                    return Fragment
                },
                IC: function() {
                    return ErrorFragment
                },
                QV: function() {
                    return EventFragment
                },
                Xg: function() {
                    return ConstructorFragment
                },
                YW: function() {
                    return FunctionFragment
                },
                _R: function() {
                    return ParamType
                },
                pc: function() {
                    return c
                }
            });
            var n = r(92598),
                i = r(17213),
                o = r(36288),
                s = r(27935);
            let a = new o.Logger(s.i),
                u = {},
                l = {
                    calldata: !0,
                    memory: !0,
                    storage: !0
                },
                h = {
                    calldata: !0,
                    memory: !0
                };

            function checkModifier(t, e) {
                if ("bytes" === t || "string" === t) {
                    if (l[e]) return !0
                } else if ("address" === t) {
                    if ("payable" === e) return !0
                } else if ((t.indexOf("[") >= 0 || "tuple" === t) && h[e]) return !0;
                return (l[e] || "payable" === e) && a.throwArgumentError("invalid modifier", "name", e), !1
            }

            function populate(t, e) {
                for (let r in e)(0, i.defineReadOnly)(t, r, e[r])
            }
            let c = Object.freeze({
                    sighash: "sighash",
                    minimal: "minimal",
                    full: "full",
                    json: "json"
                }),
                d = new RegExp(/^(.*)\[([0-9]*)\]$/);
            let ParamType = class ParamType {
                constructor(t, e) {
                    t !== u && a.throwError("use fromString", o.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new ParamType()"
                    }), populate(this, e);
                    let r = this.type.match(d);
                    r ? populate(this, {
                        arrayLength: parseInt(r[2] || "-1"),
                        arrayChildren: ParamType.fromObject({
                            type: r[1],
                            components: this.components
                        }),
                        baseType: "array"
                    }) : populate(this, {
                        arrayLength: null,
                        arrayChildren: null,
                        baseType: null != this.components ? "tuple" : this.type
                    }), this._isParamType = !0, Object.freeze(this)
                }
                format(t) {
                    if (t || (t = c.sighash), c[t] || a.throwArgumentError("invalid format type", "format", t), t === c.json) {
                        let e = {
                            type: "tuple" === this.baseType ? "tuple" : this.type,
                            name: this.name || void 0
                        };
                        return "boolean" == typeof this.indexed && (e.indexed = this.indexed), this.components && (e.components = this.components.map(e => JSON.parse(e.format(t)))), JSON.stringify(e)
                    }
                    let e = "";
                    return "array" === this.baseType ? e += this.arrayChildren.format(t) + "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]" : "tuple" === this.baseType ? (t !== c.sighash && (e += this.type), e += "(" + this.components.map(e => e.format(t)).join(t === c.full ? ", " : ",") + ")") : e += this.type, t !== c.sighash && (!0 === this.indexed && (e += " indexed"), t === c.full && this.name && (e += " " + this.name)), e
                }
                static from(t, e) {
                    return "string" == typeof t ? ParamType.fromString(t, e) : ParamType.fromObject(t)
                }
                static fromObject(t) {
                    return ParamType.isParamType(t) ? t : new ParamType(u, {
                        name: t.name || null,
                        type: verifyType(t.type),
                        indexed: null == t.indexed ? null : !!t.indexed,
                        components: t.components ? t.components.map(ParamType.fromObject) : null
                    })
                }
                static fromString(t, e) {
                    var r;
                    return r = function(t, e) {
                        let r = t;

                        function throwError(e) {
                            a.throwArgumentError(`unexpected character at position ${e}`, "param", t)
                        }

                        function newNode(t) {
                            let r = {
                                type: "",
                                name: "",
                                parent: t,
                                state: {
                                    allowType: !0
                                }
                            };
                            return e && (r.indexed = !1), r
                        }
                        t = t.replace(/\s/g, " ");
                        let n = {
                                type: "",
                                name: "",
                                state: {
                                    allowType: !0
                                }
                            },
                            i = n;
                        for (let r = 0; r < t.length; r++) {
                            let n = t[r];
                            switch (n) {
                                case "(":
                                    i.state.allowType && "" === i.type ? i.type = "tuple" : i.state.allowParams || throwError(r), i.state.allowType = !1, i.type = verifyType(i.type), i.components = [newNode(i)], i = i.components[0];
                                    break;
                                case ")":
                                    delete i.state, "indexed" === i.name && (e || throwError(r), i.indexed = !0, i.name = ""), checkModifier(i.type, i.name) && (i.name = ""), i.type = verifyType(i.type);
                                    let o = i;
                                    (i = i.parent) || throwError(r), delete o.parent, i.state.allowParams = !1, i.state.allowName = !0, i.state.allowArray = !0;
                                    break;
                                case ",":
                                    delete i.state, "indexed" === i.name && (e || throwError(r), i.indexed = !0, i.name = ""), checkModifier(i.type, i.name) && (i.name = ""), i.type = verifyType(i.type);
                                    let s = newNode(i.parent);
                                    i.parent.components.push(s), delete i.parent, i = s;
                                    break;
                                case " ":
                                    i.state.allowType && "" !== i.type && (i.type = verifyType(i.type), delete i.state.allowType, i.state.allowName = !0, i.state.allowParams = !0), i.state.allowName && "" !== i.name && ("indexed" === i.name ? (e || throwError(r), i.indexed && throwError(r), i.indexed = !0, i.name = "") : checkModifier(i.type, i.name) ? i.name = "" : i.state.allowName = !1);
                                    break;
                                case "[":
                                    i.state.allowArray || throwError(r), i.type += n, i.state.allowArray = !1, i.state.allowName = !1, i.state.readArray = !0;
                                    break;
                                case "]":
                                    i.state.readArray || throwError(r), i.type += n, i.state.readArray = !1, i.state.allowArray = !0, i.state.allowName = !0;
                                    break;
                                default:
                                    i.state.allowType ? (i.type += n, i.state.allowParams = !0, i.state.allowArray = !0) : i.state.allowName ? (i.name += n, delete i.state.allowArray) : i.state.readArray ? i.type += n : throwError(r)
                            }
                        }
                        return i.parent && a.throwArgumentError("unexpected eof", "param", t), delete n.state, "indexed" === i.name ? (e || throwError(r.length - 7), i.indexed && throwError(r.length - 7), i.indexed = !0, i.name = "") : checkModifier(i.type, i.name) && (i.name = ""), n.type = verifyType(n.type), n
                    }(t, !!e), ParamType.fromObject({
                        name: r.name,
                        type: r.type,
                        indexed: r.indexed,
                        components: r.components
                    })
                }
                static isParamType(t) {
                    return !!(null != t && t._isParamType)
                }
            };

            function parseParams(t, e) {
                return (function(t) {
                    t = t.trim();
                    let e = [],
                        r = "",
                        n = 0;
                    for (let i = 0; i < t.length; i++) {
                        let o = t[i];
                        "," === o && 0 === n ? (e.push(r), r = "") : (r += o, "(" === o ? n++ : ")" === o && -1 == --n && a.throwArgumentError("unbalanced parenthesis", "value", t))
                    }
                    return r && e.push(r), e
                })(t).map(t => ParamType.fromString(t, e))
            }
            let Fragment = class Fragment {
                constructor(t, e) {
                    t !== u && a.throwError("use a static from method", o.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new Fragment()"
                    }), populate(this, e), this._isFragment = !0, Object.freeze(this)
                }
                static from(t) {
                    return Fragment.isFragment(t) ? t : "string" == typeof t ? Fragment.fromString(t) : Fragment.fromObject(t)
                }
                static fromObject(t) {
                    if (Fragment.isFragment(t)) return t;
                    switch (t.type) {
                        case "function":
                            return FunctionFragment.fromObject(t);
                        case "event":
                            return EventFragment.fromObject(t);
                        case "constructor":
                            return ConstructorFragment.fromObject(t);
                        case "error":
                            return ErrorFragment.fromObject(t);
                        case "fallback":
                        case "receive":
                            return null
                    }
                    return a.throwArgumentError("invalid fragment object", "value", t)
                }
                static fromString(t) {
                    return "event" === (t = (t = (t = t.replace(/\s/g, " ")).replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ")).trim()).split(" ")[0] ? EventFragment.fromString(t.substring(5).trim()) : "function" === t.split(" ")[0] ? FunctionFragment.fromString(t.substring(8).trim()) : "constructor" === t.split("(")[0].trim() ? ConstructorFragment.fromString(t.trim()) : "error" === t.split(" ")[0] ? ErrorFragment.fromString(t.substring(5).trim()) : a.throwArgumentError("unsupported fragment", "value", t)
                }
                static isFragment(t) {
                    return !!(t && t._isFragment)
                }
            };
            let EventFragment = class EventFragment extends Fragment {
                format(t) {
                    if (t || (t = c.sighash), c[t] || a.throwArgumentError("invalid format type", "format", t), t === c.json) return JSON.stringify({
                        type: "event",
                        anonymous: this.anonymous,
                        name: this.name,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t)))
                    });
                    let e = "";
                    return t !== c.sighash && (e += "event "), e += this.name + "(" + this.inputs.map(e => e.format(t)).join(t === c.full ? ", " : ",") + ") ", t !== c.sighash && this.anonymous && (e += "anonymous "), e.trim()
                }
                static from(t) {
                    return "string" == typeof t ? EventFragment.fromString(t) : EventFragment.fromObject(t)
                }
                static fromObject(t) {
                    if (EventFragment.isEventFragment(t)) return t;
                    "event" !== t.type && a.throwArgumentError("invalid event object", "value", t);
                    let e = {
                        name: verifyIdentifier(t.name),
                        anonymous: t.anonymous,
                        inputs: t.inputs ? t.inputs.map(ParamType.fromObject) : [],
                        type: "event"
                    };
                    return new EventFragment(u, e)
                }
                static fromString(t) {
                    let e = t.match(m);
                    e || a.throwArgumentError("invalid event string", "value", t);
                    let r = !1;
                    return e[3].split(" ").forEach(t => {
                        switch (t.trim()) {
                            case "anonymous":
                                r = !0;
                                break;
                            case "":
                                break;
                            default:
                                a.warn("unknown modifier: " + t)
                        }
                    }), EventFragment.fromObject({
                        name: e[1].trim(),
                        anonymous: r,
                        inputs: parseParams(e[2], !0),
                        type: "event"
                    })
                }
                static isEventFragment(t) {
                    return t && t._isFragment && "event" === t.type
                }
            };

            function parseGas(t, e) {
                e.gas = null;
                let r = t.split("@");
                return 1 !== r.length ? (r.length > 2 && a.throwArgumentError("invalid human-readable ABI signature", "value", t), r[1].match(/^[0-9]+$/) || a.throwArgumentError("invalid human-readable ABI signature gas", "value", t), e.gas = n.O$.from(r[1]), r[0]) : t
            }

            function parseModifiers(t, e) {
                e.constant = !1, e.payable = !1, e.stateMutability = "nonpayable", t.split(" ").forEach(t => {
                    switch (t.trim()) {
                        case "constant":
                            e.constant = !0;
                            break;
                        case "payable":
                            e.payable = !0, e.stateMutability = "payable";
                            break;
                        case "nonpayable":
                            e.payable = !1, e.stateMutability = "nonpayable";
                            break;
                        case "pure":
                            e.constant = !0, e.stateMutability = "pure";
                            break;
                        case "view":
                            e.constant = !0, e.stateMutability = "view";
                            break;
                        case "external":
                        case "public":
                        case "":
                            break;
                        default:
                            console.log("unknown modifier: " + t)
                    }
                })
            }

            function verifyState(t) {
                let e = {
                    constant: !1,
                    payable: !0,
                    stateMutability: "payable"
                };
                return null != t.stateMutability ? (e.stateMutability = t.stateMutability, e.constant = "view" === e.stateMutability || "pure" === e.stateMutability, null != t.constant && !!t.constant !== e.constant && a.throwArgumentError("cannot have constant function with mutability " + e.stateMutability, "value", t), e.payable = "payable" === e.stateMutability, null != t.payable && !!t.payable !== e.payable && a.throwArgumentError("cannot have payable function with mutability " + e.stateMutability, "value", t)) : null != t.payable ? (e.payable = !!t.payable, null != t.constant || e.payable || "constructor" === t.type || a.throwArgumentError("unable to determine stateMutability", "value", t), e.constant = !!t.constant, e.constant ? e.stateMutability = "view" : e.stateMutability = e.payable ? "payable" : "nonpayable", e.payable && e.constant && a.throwArgumentError("cannot have constant payable function", "value", t)) : null != t.constant ? (e.constant = !!t.constant, e.payable = !e.constant, e.stateMutability = e.constant ? "view" : "payable") : "constructor" !== t.type && a.throwArgumentError("unable to determine stateMutability", "value", t), e
            }
            let ConstructorFragment = class ConstructorFragment extends Fragment {
                format(t) {
                    if (t || (t = c.sighash), c[t] || a.throwArgumentError("invalid format type", "format", t), t === c.json) return JSON.stringify({
                        type: "constructor",
                        stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                        payable: this.payable,
                        gas: this.gas ? this.gas.toNumber() : void 0,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t)))
                    });
                    t === c.sighash && a.throwError("cannot format a constructor for sighash", o.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "format(sighash)"
                    });
                    let e = "constructor(" + this.inputs.map(e => e.format(t)).join(t === c.full ? ", " : ",") + ") ";
                    return this.stateMutability && "nonpayable" !== this.stateMutability && (e += this.stateMutability + " "), e.trim()
                }
                static from(t) {
                    return "string" == typeof t ? ConstructorFragment.fromString(t) : ConstructorFragment.fromObject(t)
                }
                static fromObject(t) {
                    if (ConstructorFragment.isConstructorFragment(t)) return t;
                    "constructor" !== t.type && a.throwArgumentError("invalid constructor object", "value", t);
                    let e = verifyState(t);
                    e.constant && a.throwArgumentError("constructor cannot be constant", "value", t);
                    let r = {
                        name: null,
                        type: t.type,
                        inputs: t.inputs ? t.inputs.map(ParamType.fromObject) : [],
                        payable: e.payable,
                        stateMutability: e.stateMutability,
                        gas: t.gas ? n.O$.from(t.gas) : null
                    };
                    return new ConstructorFragment(u, r)
                }
                static fromString(t) {
                    let e = {
                            type: "constructor"
                        },
                        r = (t = parseGas(t, e)).match(m);
                    return r && "constructor" === r[1].trim() || a.throwArgumentError("invalid constructor string", "value", t), e.inputs = parseParams(r[2].trim(), !1), parseModifiers(r[3].trim(), e), ConstructorFragment.fromObject(e)
                }
                static isConstructorFragment(t) {
                    return t && t._isFragment && "constructor" === t.type
                }
            };
            let FunctionFragment = class FunctionFragment extends ConstructorFragment {
                format(t) {
                    if (t || (t = c.sighash), c[t] || a.throwArgumentError("invalid format type", "format", t), t === c.json) return JSON.stringify({
                        type: "function",
                        name: this.name,
                        constant: this.constant,
                        stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                        payable: this.payable,
                        gas: this.gas ? this.gas.toNumber() : void 0,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t))),
                        outputs: this.outputs.map(e => JSON.parse(e.format(t)))
                    });
                    let e = "";
                    return t !== c.sighash && (e += "function "), e += this.name + "(" + this.inputs.map(e => e.format(t)).join(t === c.full ? ", " : ",") + ") ", t !== c.sighash && (this.stateMutability ? "nonpayable" !== this.stateMutability && (e += this.stateMutability + " ") : this.constant && (e += "view "), this.outputs && this.outputs.length && (e += "returns (" + this.outputs.map(e => e.format(t)).join(", ") + ") "), null != this.gas && (e += "@" + this.gas.toString() + " ")), e.trim()
                }
                static from(t) {
                    return "string" == typeof t ? FunctionFragment.fromString(t) : FunctionFragment.fromObject(t)
                }
                static fromObject(t) {
                    if (FunctionFragment.isFunctionFragment(t)) return t;
                    "function" !== t.type && a.throwArgumentError("invalid function object", "value", t);
                    let e = verifyState(t),
                        r = {
                            type: t.type,
                            name: verifyIdentifier(t.name),
                            constant: e.constant,
                            inputs: t.inputs ? t.inputs.map(ParamType.fromObject) : [],
                            outputs: t.outputs ? t.outputs.map(ParamType.fromObject) : [],
                            payable: e.payable,
                            stateMutability: e.stateMutability,
                            gas: t.gas ? n.O$.from(t.gas) : null
                        };
                    return new FunctionFragment(u, r)
                }
                static fromString(t) {
                    let e = {
                            type: "function"
                        },
                        r = (t = parseGas(t, e)).split(" returns ");
                    r.length > 2 && a.throwArgumentError("invalid function string", "value", t);
                    let n = r[0].match(m);
                    if (n || a.throwArgumentError("invalid function signature", "value", t), e.name = n[1].trim(), e.name && verifyIdentifier(e.name), e.inputs = parseParams(n[2], !1), parseModifiers(n[3].trim(), e), r.length > 1) {
                        let n = r[1].match(m);
                        ("" != n[1].trim() || "" != n[3].trim()) && a.throwArgumentError("unexpected tokens", "value", t), e.outputs = parseParams(n[2], !1)
                    } else e.outputs = [];
                    return FunctionFragment.fromObject(e)
                }
                static isFunctionFragment(t) {
                    return t && t._isFragment && "function" === t.type
                }
            };

            function checkForbidden(t) {
                let e = t.format();
                return ("Error(string)" === e || "Panic(uint256)" === e) && a.throwArgumentError(`cannot specify user defined ${e} error`, "fragment", t), t
            }
            let ErrorFragment = class ErrorFragment extends Fragment {
                format(t) {
                    if (t || (t = c.sighash), c[t] || a.throwArgumentError("invalid format type", "format", t), t === c.json) return JSON.stringify({
                        type: "error",
                        name: this.name,
                        inputs: this.inputs.map(e => JSON.parse(e.format(t)))
                    });
                    let e = "";
                    return t !== c.sighash && (e += "error "), (e += this.name + "(" + this.inputs.map(e => e.format(t)).join(t === c.full ? ", " : ",") + ") ").trim()
                }
                static from(t) {
                    return "string" == typeof t ? ErrorFragment.fromString(t) : ErrorFragment.fromObject(t)
                }
                static fromObject(t) {
                    if (ErrorFragment.isErrorFragment(t)) return t;
                    "error" !== t.type && a.throwArgumentError("invalid error object", "value", t);
                    let e = {
                        type: t.type,
                        name: verifyIdentifier(t.name),
                        inputs: t.inputs ? t.inputs.map(ParamType.fromObject) : []
                    };
                    return checkForbidden(new ErrorFragment(u, e))
                }
                static fromString(t) {
                    let e = {
                            type: "error"
                        },
                        r = t.match(m);
                    return r || a.throwArgumentError("invalid error signature", "value", t), e.name = r[1].trim(), e.name && verifyIdentifier(e.name), e.inputs = parseParams(r[2], !1), checkForbidden(ErrorFragment.fromObject(e))
                }
                static isErrorFragment(t) {
                    return t && t._isFragment && "error" === t.type
                }
            };

            function verifyType(t) {
                return t.match(/^uint($|[^1-9])/) ? t = "uint256" + t.substring(4) : t.match(/^int($|[^1-9])/) && (t = "int256" + t.substring(3)), t
            }
            let g = RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");

            function verifyIdentifier(t) {
                return t && t.match(g) || a.throwArgumentError(`invalid identifier "${t}"`, "value", t), t
            }
            let m = RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$")
        },
        98291: function(t, e, r) {
            "use strict";
            r.d(e, {
                CC: function() {
                    return LogDescription
                },
                Hk: function() {
                    return Indexed
                },
                vU: function() {
                    return Interface
                },
                vk: function() {
                    return TransactionDescription
                }
            });
            var n = r(18994),
                i = r(92598),
                o = r(57273),
                s = r(36339),
                a = r(14184),
                u = r(17213),
                l = r(77273),
                h = r(55725),
                c = r(36288),
                d = r(27935);
            let g = new c.Logger(d.i);
            let LogDescription = class LogDescription extends u.Description {};
            let TransactionDescription = class TransactionDescription extends u.Description {};
            let ErrorDescription = class ErrorDescription extends u.Description {};
            let Indexed = class Indexed extends u.Description {
                static isIndexed(t) {
                    return !!(t && t._isIndexed)
                }
            };
            let m = {
                "0x08c379a0": {
                    signature: "Error(string)",
                    name: "Error",
                    inputs: ["string"],
                    reason: !0
                },
                "0x4e487b71": {
                    signature: "Panic(uint256)",
                    name: "Panic",
                    inputs: ["uint256"]
                }
            };

            function wrapAccessError(t, e) {
                let r = Error(`deferred error during ABI decoding triggered accessing ${t}`);
                return r.error = e, r
            }
            let Interface = class Interface {
                constructor(t) {
                    let e = [];
                    e = "string" == typeof t ? JSON.parse(t) : t, (0, u.defineReadOnly)(this, "fragments", e.map(t => h.HY.from(t)).filter(t => null != t)), (0, u.defineReadOnly)(this, "_abiCoder", (0, u.getStatic)(new.target, "getAbiCoder")()), (0, u.defineReadOnly)(this, "functions", {}), (0, u.defineReadOnly)(this, "errors", {}), (0, u.defineReadOnly)(this, "events", {}), (0, u.defineReadOnly)(this, "structs", {}), this.fragments.forEach(t => {
                        let e = null;
                        switch (t.type) {
                            case "constructor":
                                if (this.deploy) {
                                    g.warn("duplicate definition - constructor");
                                    return
                                }(0, u.defineReadOnly)(this, "deploy", t);
                                return;
                            case "function":
                                e = this.functions;
                                break;
                            case "event":
                                e = this.events;
                                break;
                            case "error":
                                e = this.errors;
                                break;
                            default:
                                return
                        }
                        let r = t.format();
                        if (e[r]) {
                            g.warn("duplicate definition - " + r);
                            return
                        }
                        e[r] = t
                    }), this.deploy || (0, u.defineReadOnly)(this, "deploy", h.Xg.from({
                        payable: !1,
                        type: "constructor"
                    })), (0, u.defineReadOnly)(this, "_isInterface", !0)
                }
                format(t) {
                    t || (t = h.pc.full), t === h.pc.sighash && g.throwArgumentError("interface does not support formatting sighash", "format", t);
                    let e = this.fragments.map(e => e.format(t));
                    return t === h.pc.json ? JSON.stringify(e.map(t => JSON.parse(t))) : e
                }
                static getAbiCoder() {
                    return l.$
                }
                static getAddress(t) {
                    return (0, n.getAddress)(t)
                }
                static getSighash(t) {
                    return (0, o.hexDataSlice)((0, s.id)(t.format()), 0, 4)
                }
                static getEventTopic(t) {
                    return (0, s.id)(t.format())
                }
                getFunction(t) {
                    if ((0, o.isHexString)(t)) {
                        for (let e in this.functions)
                            if (t === this.getSighash(e)) return this.functions[e];
                        g.throwArgumentError("no matching function", "sighash", t)
                    }
                    if (-1 === t.indexOf("(")) {
                        let e = t.trim(),
                            r = Object.keys(this.functions).filter(t => t.split("(")[0] === e);
                        return 0 === r.length ? g.throwArgumentError("no matching function", "name", e) : r.length > 1 && g.throwArgumentError("multiple matching functions", "name", e), this.functions[r[0]]
                    }
                    let e = this.functions[h.YW.fromString(t).format()];
                    return e || g.throwArgumentError("no matching function", "signature", t), e
                }
                getEvent(t) {
                    if ((0, o.isHexString)(t)) {
                        let e = t.toLowerCase();
                        for (let t in this.events)
                            if (e === this.getEventTopic(t)) return this.events[t];
                        g.throwArgumentError("no matching event", "topichash", e)
                    }
                    if (-1 === t.indexOf("(")) {
                        let e = t.trim(),
                            r = Object.keys(this.events).filter(t => t.split("(")[0] === e);
                        return 0 === r.length ? g.throwArgumentError("no matching event", "name", e) : r.length > 1 && g.throwArgumentError("multiple matching events", "name", e), this.events[r[0]]
                    }
                    let e = this.events[h.QV.fromString(t).format()];
                    return e || g.throwArgumentError("no matching event", "signature", t), e
                }
                getError(t) {
                    if ((0, o.isHexString)(t)) {
                        let e = (0, u.getStatic)(this.constructor, "getSighash");
                        for (let r in this.errors) {
                            let n = this.errors[r];
                            if (t === e(n)) return this.errors[r]
                        }
                        g.throwArgumentError("no matching error", "sighash", t)
                    }
                    if (-1 === t.indexOf("(")) {
                        let e = t.trim(),
                            r = Object.keys(this.errors).filter(t => t.split("(")[0] === e);
                        return 0 === r.length ? g.throwArgumentError("no matching error", "name", e) : r.length > 1 && g.throwArgumentError("multiple matching errors", "name", e), this.errors[r[0]]
                    }
                    let e = this.errors[h.YW.fromString(t).format()];
                    return e || g.throwArgumentError("no matching error", "signature", t), e
                }
                getSighash(t) {
                    if ("string" == typeof t) try {
                        t = this.getFunction(t)
                    } catch (e) {
                        try {
                            t = this.getError(t)
                        } catch (t) {
                            throw e
                        }
                    }
                    return (0, u.getStatic)(this.constructor, "getSighash")(t)
                }
                getEventTopic(t) {
                    return "string" == typeof t && (t = this.getEvent(t)), (0, u.getStatic)(this.constructor, "getEventTopic")(t)
                }
                _decodeParams(t, e) {
                    return this._abiCoder.decode(t, e)
                }
                _encodeParams(t, e) {
                    return this._abiCoder.encode(t, e)
                }
                encodeDeploy(t) {
                    return this._encodeParams(this.deploy.inputs, t || [])
                }
                decodeErrorResult(t, e) {
                    "string" == typeof t && (t = this.getError(t));
                    let r = (0, o.arrayify)(e);
                    return (0, o.hexlify)(r.slice(0, 4)) !== this.getSighash(t) && g.throwArgumentError(`data signature does not match error ${t.name}.`, "data", (0, o.hexlify)(r)), this._decodeParams(t.inputs, r.slice(4))
                }
                encodeErrorResult(t, e) {
                    return "string" == typeof t && (t = this.getError(t)), (0, o.hexlify)((0, o.concat)([this.getSighash(t), this._encodeParams(t.inputs, e || [])]))
                }
                decodeFunctionData(t, e) {
                    "string" == typeof t && (t = this.getFunction(t));
                    let r = (0, o.arrayify)(e);
                    return (0, o.hexlify)(r.slice(0, 4)) !== this.getSighash(t) && g.throwArgumentError(`data signature does not match function ${t.name}.`, "data", (0, o.hexlify)(r)), this._decodeParams(t.inputs, r.slice(4))
                }
                encodeFunctionData(t, e) {
                    return "string" == typeof t && (t = this.getFunction(t)), (0, o.hexlify)((0, o.concat)([this.getSighash(t), this._encodeParams(t.inputs, e || [])]))
                }
                decodeFunctionResult(t, e) {
                    "string" == typeof t && (t = this.getFunction(t));
                    let r = (0, o.arrayify)(e),
                        n = null,
                        i = "",
                        s = null,
                        a = null,
                        u = null;
                    switch (r.length % this._abiCoder._getWordSize()) {
                        case 0:
                            try {
                                return this._abiCoder.decode(t.outputs, r)
                            } catch (t) {}
                            break;
                        case 4:
                            {
                                let t = (0, o.hexlify)(r.slice(0, 4)),
                                    e = m[t];
                                if (e) s = this._abiCoder.decode(e.inputs, r.slice(4)),
                                a = e.name,
                                u = e.signature,
                                e.reason && (n = s[0]),
                                "Error" === a ? i = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(s[0])}` : "Panic" === a && (i = `; VM Exception while processing transaction: reverted with panic code ${s[0]}`);
                                else try {
                                    let e = this.getError(t);
                                    s = this._abiCoder.decode(e.inputs, r.slice(4)), a = e.name, u = e.format()
                                } catch (t) {}
                            }
                    }
                    return g.throwError("call revert exception" + i, c.Logger.errors.CALL_EXCEPTION, {
                        method: t.format(),
                        data: (0, o.hexlify)(e),
                        errorArgs: s,
                        errorName: a,
                        errorSignature: u,
                        reason: n
                    })
                }
                encodeFunctionResult(t, e) {
                    return "string" == typeof t && (t = this.getFunction(t)), (0, o.hexlify)(this._abiCoder.encode(t.outputs, e || []))
                }
                encodeFilterTopics(t, e) {
                    "string" == typeof t && (t = this.getEvent(t)), e.length > t.inputs.length && g.throwError("too many arguments for " + t.format(), c.Logger.errors.UNEXPECTED_ARGUMENT, {
                        argument: "values",
                        value: e
                    });
                    let r = [];
                    t.anonymous || r.push(this.getEventTopic(t));
                    let encodeTopic = (t, e) => "string" === t.type ? (0, s.id)(e) : "bytes" === t.type ? (0, a.keccak256)((0, o.hexlify)(e)) : ("bool" === t.type && "boolean" == typeof e && (e = e ? "0x01" : "0x00"), t.type.match(/^u?int/) && (e = i.O$.from(e).toHexString()), "address" === t.type && this._abiCoder.encode(["address"], [e]), (0, o.hexZeroPad)((0, o.hexlify)(e), 32));
                    for (e.forEach((e, n) => {
                            let i = t.inputs[n];
                            if (!i.indexed) {
                                null != e && g.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + i.name, e);
                                return
                            }
                            null == e ? r.push(null) : "array" === i.baseType || "tuple" === i.baseType ? g.throwArgumentError("filtering with tuples or arrays not supported", "contract." + i.name, e) : Array.isArray(e) ? r.push(e.map(t => encodeTopic(i, t))) : r.push(encodeTopic(i, e))
                        }); r.length && null === r[r.length - 1];) r.pop();
                    return r
                }
                encodeEventLog(t, e) {
                    "string" == typeof t && (t = this.getEvent(t));
                    let r = [],
                        n = [],
                        i = [];
                    return t.anonymous || r.push(this.getEventTopic(t)), e.length !== t.inputs.length && g.throwArgumentError("event arguments/values mismatch", "values", e), t.inputs.forEach((t, o) => {
                        let u = e[o];
                        if (t.indexed) {
                            if ("string" === t.type) r.push((0, s.id)(u));
                            else if ("bytes" === t.type) r.push((0, a.keccak256)(u));
                            else if ("tuple" === t.baseType || "array" === t.baseType) throw Error("not implemented");
                            else r.push(this._abiCoder.encode([t.type], [u]))
                        } else n.push(t), i.push(u)
                    }), {
                        data: this._abiCoder.encode(n, i),
                        topics: r
                    }
                }
                decodeEventLog(t, e, r) {
                    if ("string" == typeof t && (t = this.getEvent(t)), null != r && !t.anonymous) {
                        let e = this.getEventTopic(t);
                        (0, o.isHexString)(r[0], 32) && r[0].toLowerCase() === e || g.throwError("fragment/topic mismatch", c.Logger.errors.INVALID_ARGUMENT, {
                            argument: "topics[0]",
                            expected: e,
                            value: r[0]
                        }), r = r.slice(1)
                    }
                    let n = [],
                        i = [],
                        s = [];
                    t.inputs.forEach((t, e) => {
                        t.indexed ? "string" === t.type || "bytes" === t.type || "tuple" === t.baseType || "array" === t.baseType ? (n.push(h._R.fromObject({
                            type: "bytes32",
                            name: t.name
                        })), s.push(!0)) : (n.push(t), s.push(!1)) : (i.push(t), s.push(!1))
                    });
                    let a = null != r ? this._abiCoder.decode(n, (0, o.concat)(r)) : null,
                        u = this._abiCoder.decode(i, e, !0),
                        l = [],
                        d = 0,
                        m = 0;
                    t.inputs.forEach((t, e) => {
                        if (t.indexed) {
                            if (null == a) l[e] = new Indexed({
                                _isIndexed: !0,
                                hash: null
                            });
                            else if (s[e]) l[e] = new Indexed({
                                _isIndexed: !0,
                                hash: a[m++]
                            });
                            else try {
                                l[e] = a[m++]
                            } catch (t) {
                                l[e] = t
                            }
                        } else try {
                            l[e] = u[d++]
                        } catch (t) {
                            l[e] = t
                        }
                        if (t.name && null == l[t.name]) {
                            let r = l[e];
                            r instanceof Error ? Object.defineProperty(l, t.name, {
                                enumerable: !0,
                                get: () => {
                                    throw wrapAccessError(`property ${JSON.stringify(t.name)}`, r)
                                }
                            }) : l[t.name] = r
                        }
                    });
                    for (let t = 0; t < l.length; t++) {
                        let e = l[t];
                        e instanceof Error && Object.defineProperty(l, t, {
                            enumerable: !0,
                            get: () => {
                                throw wrapAccessError(`index ${t}`, e)
                            }
                        })
                    }
                    return Object.freeze(l)
                }
                parseTransaction(t) {
                    let e = this.getFunction(t.data.substring(0, 10).toLowerCase());
                    return e ? new TransactionDescription({
                        args: this._abiCoder.decode(e.inputs, "0x" + t.data.substring(10)),
                        functionFragment: e,
                        name: e.name,
                        signature: e.format(),
                        sighash: this.getSighash(e),
                        value: i.O$.from(t.value || "0")
                    }) : null
                }
                parseLog(t) {
                    let e = this.getEvent(t.topics[0]);
                    return !e || e.anonymous ? null : new LogDescription({
                        eventFragment: e,
                        name: e.name,
                        signature: e.format(),
                        topic: this.getEventTopic(e),
                        args: this.decodeEventLog(e, t.data, t.topics)
                    })
                }
                parseError(t) {
                    let e = (0, o.hexlify)(t),
                        r = this.getError(e.substring(0, 10).toLowerCase());
                    return r ? new ErrorDescription({
                        args: this._abiCoder.decode(r.inputs, "0x" + e.substring(10)),
                        errorFragment: r,
                        name: r.name,
                        signature: r.format(),
                        sighash: this.getSighash(r)
                    }) : null
                }
                static isInterface(t) {
                    return !!(t && t._isInterface)
                }
            }
        },
        94999: function(t, e, r) {
            "use strict";
            r.d(e, {
                Sg: function() {
                    return ForkEvent
                },
                zt: function() {
                    return Provider
                }
            });
            var n = r(92598),
                i = r(17213),
                o = r(36288);
            let s = new o.Logger("abstract-provider/5.7.0");
            let ForkEvent = class ForkEvent extends i.Description {
                static isForkEvent(t) {
                    return !!(t && t._isForkEvent)
                }
            };
            let Provider = class Provider {
                constructor() {
                    s.checkAbstract(new.target, Provider), (0, i.defineReadOnly)(this, "_isProvider", !0)
                }
                getFeeData() {
                    var t, e, r, o;
                    return t = this, e = void 0, r = void 0, o = function*() {
                        let {
                            block: t,
                            gasPrice: e
                        } = yield(0, i.resolveProperties)({
                            block: this.getBlock("latest"),
                            gasPrice: this.getGasPrice().catch(t => null)
                        }), r = null, o = null, s = null;
                        return t && t.baseFeePerGas && (r = t.baseFeePerGas, s = n.O$.from("1500000000"), o = t.baseFeePerGas.mul(2).add(s)), {
                            lastBaseFeePerGas: r,
                            maxFeePerGas: o,
                            maxPriorityFeePerGas: s,
                            gasPrice: e
                        }
                    }, new(r || (r = Promise))(function(n, i) {
                        function fulfilled(t) {
                            try {
                                step(o.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function rejected(t) {
                            try {
                                step(o.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function step(t) {
                            var e;
                            t.done ? n(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                                t(e)
                            })).then(fulfilled, rejected)
                        }
                        step((o = o.apply(t, e || [])).next())
                    })
                }
                addListener(t, e) {
                    return this.on(t, e)
                }
                removeListener(t, e) {
                    return this.off(t, e)
                }
                static isProvider(t) {
                    return !!(t && t._isProvider)
                }
            }
        },
        14941: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                Signer: function() {
                    return Signer
                },
                VoidSigner: function() {
                    return VoidSigner
                }
            });
            var n = r(17213),
                i = r(36288),
                __awaiter = function(t, e, r, n) {
                    return new(r || (r = Promise))(function(i, o) {
                        function fulfilled(t) {
                            try {
                                step(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function rejected(t) {
                            try {
                                step(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function step(t) {
                            var e;
                            t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                                t(e)
                            })).then(fulfilled, rejected)
                        }
                        step((n = n.apply(t, e || [])).next())
                    })
                };
            let o = new i.Logger("abstract-signer/5.7.0"),
                s = ["accessList", "ccipReadEnabled", "chainId", "customData", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
                a = [i.Logger.errors.INSUFFICIENT_FUNDS, i.Logger.errors.NONCE_EXPIRED, i.Logger.errors.REPLACEMENT_UNDERPRICED];
            let Signer = class Signer {
                constructor() {
                    o.checkAbstract(new.target, Signer), (0, n.defineReadOnly)(this, "_isSigner", !0)
                }
                getBalance(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), t)
                    })
                }
                getTransactionCount(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), t)
                    })
                }
                estimateGas(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        this._checkProvider("estimateGas");
                        let e = yield(0, n.resolveProperties)(this.checkTransaction(t));
                        return yield this.provider.estimateGas(e)
                    })
                }
                call(t, e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        this._checkProvider("call");
                        let r = yield(0, n.resolveProperties)(this.checkTransaction(t));
                        return yield this.provider.call(r, e)
                    })
                }
                sendTransaction(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        this._checkProvider("sendTransaction");
                        let e = yield this.populateTransaction(t), r = yield this.signTransaction(e);
                        return yield this.provider.sendTransaction(r)
                    })
                }
                getChainId() {
                    return __awaiter(this, void 0, void 0, function*() {
                        this._checkProvider("getChainId");
                        let t = yield this.provider.getNetwork();
                        return t.chainId
                    })
                }
                getGasPrice() {
                    return __awaiter(this, void 0, void 0, function*() {
                        return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
                    })
                }
                getFeeData() {
                    return __awaiter(this, void 0, void 0, function*() {
                        return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
                    })
                }
                resolveName(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        return this._checkProvider("resolveName"), yield this.provider.resolveName(t)
                    })
                }
                checkTransaction(t) {
                    for (let e in t) - 1 === s.indexOf(e) && o.throwArgumentError("invalid transaction key: " + e, "transaction", t);
                    let e = (0, n.shallowCopy)(t);
                    return null == e.from ? e.from = this.getAddress() : e.from = Promise.all([Promise.resolve(e.from), this.getAddress()]).then(e => (e[0].toLowerCase() !== e[1].toLowerCase() && o.throwArgumentError("from address mismatch", "transaction", t), e[0])), e
                }
                populateTransaction(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let e = yield(0, n.resolveProperties)(this.checkTransaction(t));
                        null != e.to && (e.to = Promise.resolve(e.to).then(t => __awaiter(this, void 0, void 0, function*() {
                            if (null == t) return null;
                            let e = yield this.resolveName(t);
                            return null == e && o.throwArgumentError("provided ENS name resolves to null", "tx.to", t), e
                        })), e.to.catch(t => {}));
                        let r = null != e.maxFeePerGas || null != e.maxPriorityFeePerGas;
                        if (null != e.gasPrice && (2 === e.type || r) ? o.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", t) : (0 === e.type || 1 === e.type) && r && o.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", t), (2 === e.type || null == e.type) && null != e.maxFeePerGas && null != e.maxPriorityFeePerGas) e.type = 2;
                        else if (0 === e.type || 1 === e.type) null == e.gasPrice && (e.gasPrice = this.getGasPrice());
                        else {
                            let t = yield this.getFeeData();
                            if (null == e.type) {
                                if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas) {
                                    if (e.type = 2, null != e.gasPrice) {
                                        let t = e.gasPrice;
                                        delete e.gasPrice, e.maxFeePerGas = t, e.maxPriorityFeePerGas = t
                                    } else null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas), null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas)
                                } else null != t.gasPrice ? (r && o.throwError("network does not support EIP-1559", i.Logger.errors.UNSUPPORTED_OPERATION, {
                                    operation: "populateTransaction"
                                }), null == e.gasPrice && (e.gasPrice = t.gasPrice), e.type = 0) : o.throwError("failed to get consistent fee data", i.Logger.errors.UNSUPPORTED_OPERATION, {
                                    operation: "signer.getFeeData"
                                })
                            } else 2 === e.type && (null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas), null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas))
                        }
                        return null == e.nonce && (e.nonce = this.getTransactionCount("pending")), null == e.gasLimit && (e.gasLimit = this.estimateGas(e).catch(t => {
                            if (a.indexOf(t.code) >= 0) throw t;
                            return o.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", i.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                                error: t,
                                tx: e
                            })
                        })), null == e.chainId ? e.chainId = this.getChainId() : e.chainId = Promise.all([Promise.resolve(e.chainId), this.getChainId()]).then(e => (0 !== e[1] && e[0] !== e[1] && o.throwArgumentError("chainId address mismatch", "transaction", t), e[0])), yield(0, n.resolveProperties)(e)
                    })
                }
                _checkProvider(t) {
                    this.provider || o.throwError("missing provider", i.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: t || "_checkProvider"
                    })
                }
                static isSigner(t) {
                    return !!(t && t._isSigner)
                }
            };
            let VoidSigner = class VoidSigner extends Signer {
                constructor(t, e) {
                    super(), (0, n.defineReadOnly)(this, "address", t), (0, n.defineReadOnly)(this, "provider", e || null)
                }
                getAddress() {
                    return Promise.resolve(this.address)
                }
                _fail(t, e) {
                    return Promise.resolve().then(() => {
                        o.throwError(t, i.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: e
                        })
                    })
                }
                signMessage(t) {
                    return this._fail("VoidSigner cannot sign messages", "signMessage")
                }
                signTransaction(t) {
                    return this._fail("VoidSigner cannot sign transactions", "signTransaction")
                }
                _signTypedData(t, e, r) {
                    return this._fail("VoidSigner cannot sign typed data", "signTypedData")
                }
                connect(t) {
                    return new VoidSigner(this.address, t)
                }
            }
        },
        18994: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                getAddress: function() {
                    return getAddress
                },
                getContractAddress: function() {
                    return getContractAddress
                },
                getCreate2Address: function() {
                    return getCreate2Address
                },
                getIcapAddress: function() {
                    return getIcapAddress
                },
                isAddress: function() {
                    return isAddress
                }
            });
            var n = r(57273),
                i = r(92598),
                o = r(14184),
                s = r(7054),
                a = r(36288);
            let u = new a.Logger("address/5.7.0");

            function getChecksumAddress(t) {
                (0, n.isHexString)(t, 20) || u.throwArgumentError("invalid address", "address", t), t = t.toLowerCase();
                let e = t.substring(2).split(""),
                    r = new Uint8Array(40);
                for (let t = 0; t < 40; t++) r[t] = e[t].charCodeAt(0);
                let i = (0, n.arrayify)((0, o.keccak256)(r));
                for (let t = 0; t < 40; t += 2) i[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()), (15 & i[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase());
                return "0x" + e.join("")
            }
            let l = {};
            for (let t = 0; t < 10; t++) l[String(t)] = String(t);
            for (let t = 0; t < 26; t++) l[String.fromCharCode(65 + t)] = String(10 + t);
            let h = Math.floor(Math.log10 ? Math.log10(9007199254740991) : Math.log(9007199254740991) / Math.LN10);

            function ibanChecksum(t) {
                let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map(t => l[t]).join("");
                for (; e.length >= h;) {
                    let t = e.substring(0, h);
                    e = parseInt(t, 10) % 97 + e.substring(t.length)
                }
                let r = String(98 - parseInt(e, 10) % 97);
                for (; r.length < 2;) r = "0" + r;
                return r
            }

            function getAddress(t) {
                let e = null;
                if ("string" != typeof t && u.throwArgumentError("invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), e = getChecksumAddress(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && u.throwArgumentError("bad address checksum", "address", t);
                else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                    for (t.substring(2, 4) !== ibanChecksum(t) && u.throwArgumentError("bad icap checksum", "address", t), e = (0, i.g$)(t.substring(4)); e.length < 40;) e = "0" + e;
                    e = getChecksumAddress("0x" + e)
                } else u.throwArgumentError("invalid address", "address", t);
                return e
            }

            function isAddress(t) {
                try {
                    return getAddress(t), !0
                } catch (t) {}
                return !1
            }

            function getIcapAddress(t) {
                let e = (0, i.t2)(getAddress(t).substring(2)).toUpperCase();
                for (; e.length < 30;) e = "0" + e;
                return "XE" + ibanChecksum("XE00" + e) + e
            }

            function getContractAddress(t) {
                let e = null;
                try {
                    e = getAddress(t.from)
                } catch (e) {
                    u.throwArgumentError("missing from address", "transaction", t)
                }
                let r = (0, n.stripZeros)((0, n.arrayify)(i.O$.from(t.nonce).toHexString()));
                return getAddress((0, n.hexDataSlice)((0, o.keccak256)((0, s.encode)([e, r])), 12))
            }

            function getCreate2Address(t, e, r) {
                return 32 !== (0, n.hexDataLength)(e) && u.throwArgumentError("salt must be 32 bytes", "salt", e), 32 !== (0, n.hexDataLength)(r) && u.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", r), getAddress((0, n.hexDataSlice)((0, o.keccak256)((0, n.concat)(["0xff", getAddress(t), e, r])), 12))
            }
        },
        72275: function(t, e, r) {
            "use strict";
            r.d(e, {
                J: function() {
                    return decode
                },
                c: function() {
                    return encode
                }
            });
            var n = r(57273);

            function decode(t) {
                t = atob(t);
                let e = [];
                for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
                return (0, n.arrayify)(e)
            }

            function encode(t) {
                t = (0, n.arrayify)(t);
                let e = "";
                for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
                return btoa(e)
            }
        },
        63221: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                Base32: function() {
                    return o
                },
                Base58: function() {
                    return s
                },
                BaseX: function() {
                    return BaseX
                }
            });
            var n = r(57273),
                i = r(17213);
            let BaseX = class BaseX {
                constructor(t) {
                    (0, i.defineReadOnly)(this, "alphabet", t), (0, i.defineReadOnly)(this, "base", t.length), (0, i.defineReadOnly)(this, "_alphabetMap", {}), (0, i.defineReadOnly)(this, "_leader", t.charAt(0));
                    for (let e = 0; e < t.length; e++) this._alphabetMap[t.charAt(e)] = e
                }
                encode(t) {
                    let e = (0, n.arrayify)(t);
                    if (0 === e.length) return "";
                    let r = [0];
                    for (let t = 0; t < e.length; ++t) {
                        let n = e[t];
                        for (let t = 0; t < r.length; ++t) n += r[t] << 8, r[t] = n % this.base, n = n / this.base | 0;
                        for (; n > 0;) r.push(n % this.base), n = n / this.base | 0
                    }
                    let i = "";
                    for (let t = 0; 0 === e[t] && t < e.length - 1; ++t) i += this._leader;
                    for (let t = r.length - 1; t >= 0; --t) i += this.alphabet[r[t]];
                    return i
                }
                decode(t) {
                    if ("string" != typeof t) throw TypeError("Expected String");
                    let e = [];
                    if (0 === t.length) return new Uint8Array(e);
                    e.push(0);
                    for (let r = 0; r < t.length; r++) {
                        let n = this._alphabetMap[t[r]];
                        if (void 0 === n) throw Error("Non-base" + this.base + " character");
                        let i = n;
                        for (let t = 0; t < e.length; ++t) i += e[t] * this.base, e[t] = 255 & i, i >>= 8;
                        for (; i > 0;) e.push(255 & i), i >>= 8
                    }
                    for (let r = 0; t[r] === this._leader && r < t.length - 1; ++r) e.push(0);
                    return (0, n.arrayify)(new Uint8Array(e.reverse()))
                }
            };
            let o = new BaseX("abcdefghijklmnopqrstuvwxyz234567"),
                s = new BaseX("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        },
        68334: function(t, e, r) {
            "use strict";
            r.d(e, {
                i: function() {
                    return n
                }
            });
            let n = "bignumber/5.7.0"
        },
        92598: function(t, e, r) {
            "use strict";
            r.d(e, {
                O$: function() {
                    return BigNumber
                },
                Zm: function() {
                    return isBigNumberish
                },
                g$: function() {
                    return _base36To16
                },
                t2: function() {
                    return _base16To36
                }
            });
            var n = r(56662),
                i = r.n(n),
                o = r(57273),
                s = r(36288),
                a = r(68334),
                u = i().BN;
            let l = new s.Logger(a.i),
                h = {};

            function isBigNumberish(t) {
                return null != t && (BigNumber.isBigNumber(t) || "number" == typeof t && t % 1 == 0 || "string" == typeof t && !!t.match(/^-?[0-9]+$/) || (0, o.isHexString)(t) || "bigint" == typeof t || (0, o.isBytes)(t))
            }
            let c = !1;
            let BigNumber = class BigNumber {
                constructor(t, e) {
                    t !== h && l.throwError("cannot call constructor directly; use BigNumber.from", s.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new (BigNumber)"
                    }), this._hex = e, this._isBigNumber = !0, Object.freeze(this)
                }
                fromTwos(t) {
                    return toBigNumber(toBN(this).fromTwos(t))
                }
                toTwos(t) {
                    return toBigNumber(toBN(this).toTwos(t))
                }
                abs() {
                    return "-" === this._hex[0] ? BigNumber.from(this._hex.substring(1)) : this
                }
                add(t) {
                    return toBigNumber(toBN(this).add(toBN(t)))
                }
                sub(t) {
                    return toBigNumber(toBN(this).sub(toBN(t)))
                }
                div(t) {
                    let e = BigNumber.from(t);
                    return e.isZero() && throwFault("division-by-zero", "div"), toBigNumber(toBN(this).div(toBN(t)))
                }
                mul(t) {
                    return toBigNumber(toBN(this).mul(toBN(t)))
                }
                mod(t) {
                    let e = toBN(t);
                    return e.isNeg() && throwFault("division-by-zero", "mod"), toBigNumber(toBN(this).umod(e))
                }
                pow(t) {
                    let e = toBN(t);
                    return e.isNeg() && throwFault("negative-power", "pow"), toBigNumber(toBN(this).pow(e))
                }
                and(t) {
                    let e = toBN(t);
                    return (this.isNegative() || e.isNeg()) && throwFault("unbound-bitwise-result", "and"), toBigNumber(toBN(this).and(e))
                }
                or(t) {
                    let e = toBN(t);
                    return (this.isNegative() || e.isNeg()) && throwFault("unbound-bitwise-result", "or"), toBigNumber(toBN(this).or(e))
                }
                xor(t) {
                    let e = toBN(t);
                    return (this.isNegative() || e.isNeg()) && throwFault("unbound-bitwise-result", "xor"), toBigNumber(toBN(this).xor(e))
                }
                mask(t) {
                    return (this.isNegative() || t < 0) && throwFault("negative-width", "mask"), toBigNumber(toBN(this).maskn(t))
                }
                shl(t) {
                    return (this.isNegative() || t < 0) && throwFault("negative-width", "shl"), toBigNumber(toBN(this).shln(t))
                }
                shr(t) {
                    return (this.isNegative() || t < 0) && throwFault("negative-width", "shr"), toBigNumber(toBN(this).shrn(t))
                }
                eq(t) {
                    return toBN(this).eq(toBN(t))
                }
                lt(t) {
                    return toBN(this).lt(toBN(t))
                }
                lte(t) {
                    return toBN(this).lte(toBN(t))
                }
                gt(t) {
                    return toBN(this).gt(toBN(t))
                }
                gte(t) {
                    return toBN(this).gte(toBN(t))
                }
                isNegative() {
                    return "-" === this._hex[0]
                }
                isZero() {
                    return toBN(this).isZero()
                }
                toNumber() {
                    try {
                        return toBN(this).toNumber()
                    } catch (t) {
                        throwFault("overflow", "toNumber", this.toString())
                    }
                    return null
                }
                toBigInt() {
                    try {
                        return BigInt(this.toString())
                    } catch (t) {}
                    return l.throwError("this platform does not support BigInt", s.Logger.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
                toString() {
                    return arguments.length > 0 && (10 === arguments[0] ? c || (c = !0, l.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? l.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", s.Logger.errors.UNEXPECTED_ARGUMENT, {}) : l.throwError("BigNumber.toString does not accept parameters", s.Logger.errors.UNEXPECTED_ARGUMENT, {})), toBN(this).toString(10)
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
                    if (t instanceof BigNumber) return t;
                    if ("string" == typeof t) return t.match(/^-?0x[0-9a-f]+$/i) ? new BigNumber(h, toHex(t)) : t.match(/^-?[0-9]+$/) ? new BigNumber(h, toHex(new u(t))) : l.throwArgumentError("invalid BigNumber string", "value", t);
                    if ("number" == typeof t) return t % 1 && throwFault("underflow", "BigNumber.from", t), (t >= 9007199254740991 || t <= -9007199254740991) && throwFault("overflow", "BigNumber.from", t), BigNumber.from(String(t));
                    if ("bigint" == typeof t) return BigNumber.from(t.toString());
                    if ((0, o.isBytes)(t)) return BigNumber.from((0, o.hexlify)(t));
                    if (t) {
                        if (t.toHexString) {
                            let e = t.toHexString();
                            if ("string" == typeof e) return BigNumber.from(e)
                        } else {
                            let e = t._hex;
                            if (null == e && "BigNumber" === t.type && (e = t.hex), "string" == typeof e && ((0, o.isHexString)(e) || "-" === e[0] && (0, o.isHexString)(e.substring(1)))) return BigNumber.from(e)
                        }
                    }
                    return l.throwArgumentError("invalid BigNumber value", "value", t)
                }
                static isBigNumber(t) {
                    return !!(t && t._isBigNumber)
                }
            };

            function toHex(t) {
                if ("string" != typeof t) return toHex(t.toString(16));
                if ("-" === t[0]) return ("-" === (t = t.substring(1))[0] && l.throwArgumentError("invalid hex", "value", t), "0x00" === (t = toHex(t))) ? t : "-" + t;
                if ("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t) return "0x00";
                for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4);) t = "0x" + t.substring(4);
                return t
            }

            function toBigNumber(t) {
                return BigNumber.from(toHex(t))
            }

            function toBN(t) {
                let e = BigNumber.from(t).toHexString();
                return "-" === e[0] ? new u("-" + e.substring(3), 16) : new u(e.substring(2), 16)
            }

            function throwFault(t, e, r) {
                let n = {
                    fault: t,
                    operation: e
                };
                return null != r && (n.value = r), l.throwError(t, s.Logger.errors.NUMERIC_FAULT, n)
            }

            function _base36To16(t) {
                return new u(t, 36).toString(16)
            }

            function _base16To36(t) {
                return new u(t, 16).toString(36)
            }
        },
        84844: function(t, e, r) {
            "use strict";
            r.d(e, {
                Ox: function() {
                    return parseFixed
                },
                S5: function() {
                    return formatFixed
                },
                xO: function() {
                    return FixedFormat
                },
                xs: function() {
                    return FixedNumber
                }
            });
            var n = r(57273),
                i = r(36288),
                o = r(68334),
                s = r(92598);
            let a = new i.Logger(o.i),
                u = {},
                l = s.O$.from(0),
                h = s.O$.from(-1);

            function throwFault(t, e, r, n) {
                let o = {
                    fault: e,
                    operation: r
                };
                return void 0 !== n && (o.value = n), a.throwError(t, i.Logger.errors.NUMERIC_FAULT, o)
            }
            let c = "0";
            for (; c.length < 256;) c += c;

            function getMultiplier(t) {
                if ("number" != typeof t) try {
                    t = s.O$.from(t).toNumber()
                } catch (t) {}
                return "number" == typeof t && t >= 0 && t <= 256 && !(t % 1) ? "1" + c.substring(0, t) : a.throwArgumentError("invalid decimal size", "decimals", t)
            }

            function formatFixed(t, e) {
                null == e && (e = 0);
                let r = getMultiplier(e);
                t = s.O$.from(t);
                let n = t.lt(l);
                n && (t = t.mul(h));
                let i = t.mod(r).toString();
                for (; i.length < r.length - 1;) i = "0" + i;
                i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1];
                let o = t.div(r).toString();
                return t = 1 === r.length ? o : o + "." + i, n && (t = "-" + t), t
            }

            function parseFixed(t, e) {
                null == e && (e = 0);
                let r = getMultiplier(e);
                "string" == typeof t && t.match(/^-?[0-9.]+$/) || a.throwArgumentError("invalid decimal value", "value", t);
                let n = "-" === t.substring(0, 1);
                n && (t = t.substring(1)), "." === t && a.throwArgumentError("missing value", "value", t);
                let i = t.split(".");
                i.length > 2 && a.throwArgumentError("too many decimal points", "value", t);
                let o = i[0],
                    u = i[1];
                for (o || (o = "0"), u || (u = "0");
                    "0" === u[u.length - 1];) u = u.substring(0, u.length - 1);
                for (u.length > r.length - 1 && throwFault("fractional component exceeds decimals", "underflow", "parseFixed"), "" === u && (u = "0"); u.length < r.length - 1;) u += "0";
                let l = s.O$.from(o),
                    c = s.O$.from(u),
                    d = l.mul(r).add(c);
                return n && (d = d.mul(h)), d
            }
            let FixedFormat = class FixedFormat {
                constructor(t, e, r, n) {
                    t !== u && a.throwError("cannot use FixedFormat constructor; use FixedFormat.from", i.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new FixedFormat"
                    }), this.signed = e, this.width = r, this.decimals = n, this.name = (e ? "" : "u") + "fixed" + String(r) + "x" + String(n), this._multiplier = getMultiplier(n), Object.freeze(this)
                }
                static from(t) {
                    if (t instanceof FixedFormat) return t;
                    "number" == typeof t && (t = `fixed128x${t}`);
                    let e = !0,
                        r = 128,
                        n = 18;
                    if ("string" == typeof t) {
                        if ("fixed" === t);
                        else if ("ufixed" === t) e = !1;
                        else {
                            let i = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                            i || a.throwArgumentError("invalid fixed format", "format", t), e = "u" !== i[1], r = parseInt(i[2]), n = parseInt(i[3])
                        }
                    } else if (t) {
                        let check = (e, r, n) => null == t[e] ? n : (typeof t[e] !== r && a.throwArgumentError("invalid fixed format (" + e + " not " + r + ")", "format." + e, t[e]), t[e]);
                        e = check("signed", "boolean", e), r = check("width", "number", r), n = check("decimals", "number", n)
                    }
                    return r % 8 && a.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", r), n > 80 && a.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n), new FixedFormat(u, e, r, n)
                }
            };
            let FixedNumber = class FixedNumber {
                constructor(t, e, r, n) {
                    t !== u && a.throwError("cannot use FixedNumber constructor; use FixedNumber.from", i.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "new FixedFormat"
                    }), this.format = n, this._hex = e, this._value = r, this._isFixedNumber = !0, Object.freeze(this)
                }
                _checkFormat(t) {
                    this.format.name !== t.format.name && a.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t)
                }
                addUnsafe(t) {
                    this._checkFormat(t);
                    let e = parseFixed(this._value, this.format.decimals),
                        r = parseFixed(t._value, t.format.decimals);
                    return FixedNumber.fromValue(e.add(r), this.format.decimals, this.format)
                }
                subUnsafe(t) {
                    this._checkFormat(t);
                    let e = parseFixed(this._value, this.format.decimals),
                        r = parseFixed(t._value, t.format.decimals);
                    return FixedNumber.fromValue(e.sub(r), this.format.decimals, this.format)
                }
                mulUnsafe(t) {
                    this._checkFormat(t);
                    let e = parseFixed(this._value, this.format.decimals),
                        r = parseFixed(t._value, t.format.decimals);
                    return FixedNumber.fromValue(e.mul(r).div(this.format._multiplier), this.format.decimals, this.format)
                }
                divUnsafe(t) {
                    this._checkFormat(t);
                    let e = parseFixed(this._value, this.format.decimals),
                        r = parseFixed(t._value, t.format.decimals);
                    return FixedNumber.fromValue(e.mul(this.format._multiplier).div(r), this.format.decimals, this.format)
                }
                floor() {
                    let t = this.toString().split(".");
                    1 === t.length && t.push("0");
                    let e = FixedNumber.from(t[0], this.format),
                        r = !t[1].match(/^(0*)$/);
                    return this.isNegative() && r && (e = e.subUnsafe(d.toFormat(e.format))), e
                }
                ceiling() {
                    let t = this.toString().split(".");
                    1 === t.length && t.push("0");
                    let e = FixedNumber.from(t[0], this.format),
                        r = !t[1].match(/^(0*)$/);
                    return !this.isNegative() && r && (e = e.addUnsafe(d.toFormat(e.format))), e
                }
                round(t) {
                    null == t && (t = 0);
                    let e = this.toString().split(".");
                    if (1 === e.length && e.push("0"), (t < 0 || t > 80 || t % 1) && a.throwArgumentError("invalid decimal count", "decimals", t), e[1].length <= t) return this;
                    let r = FixedNumber.from("1" + c.substring(0, t), this.format),
                        n = g.toFormat(this.format);
                    return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r)
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
                    t % 8 && a.throwArgumentError("invalid byte width", "width", t);
                    let e = s.O$.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
                    return (0, n.hexZeroPad)(e, t / 8)
                }
                toUnsafeFloat() {
                    return parseFloat(this.toString())
                }
                toFormat(t) {
                    return FixedNumber.fromString(this._value, t)
                }
                static fromValue(t, e, r) {
                    return null != r || null == e || (0, s.Zm)(e) || (r = e, e = null), null == e && (e = 0), null == r && (r = "fixed"), FixedNumber.fromString(formatFixed(t, e), FixedFormat.from(r))
                }
                static fromString(t, e) {
                    null == e && (e = "fixed");
                    let r = FixedFormat.from(e),
                        i = parseFixed(t, r.decimals);
                    !r.signed && i.lt(l) && throwFault("unsigned value cannot be negative", "overflow", "value", t);
                    let o = null;
                    r.signed ? o = i.toTwos(r.width).toHexString() : (o = i.toHexString(), o = (0, n.hexZeroPad)(o, r.width / 8));
                    let s = formatFixed(i, r.decimals);
                    return new FixedNumber(u, o, s, r)
                }
                static fromBytes(t, e) {
                    null == e && (e = "fixed");
                    let r = FixedFormat.from(e);
                    if ((0, n.arrayify)(t).length > r.width / 8) throw Error("overflow");
                    let i = s.O$.from(t);
                    r.signed && (i = i.fromTwos(r.width));
                    let o = i.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),
                        a = formatFixed(i, r.decimals);
                    return new FixedNumber(u, o, a, r)
                }
                static from(t, e) {
                    if ("string" == typeof t) return FixedNumber.fromString(t, e);
                    if ((0, n.isBytes)(t)) return FixedNumber.fromBytes(t, e);
                    try {
                        return FixedNumber.fromValue(t, 0, e)
                    } catch (t) {
                        if (t.code !== i.Logger.errors.INVALID_ARGUMENT) throw t
                    }
                    return a.throwArgumentError("invalid FixedNumber value", "value", t)
                }
                static isFixedNumber(t) {
                    return !!(t && t._isFixedNumber)
                }
            };
            let d = FixedNumber.from(1),
                g = FixedNumber.from("0.5")
        },
        57273: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                arrayify: function() {
                    return arrayify
                },
                concat: function() {
                    return concat
                },
                hexConcat: function() {
                    return hexConcat
                },
                hexDataLength: function() {
                    return hexDataLength
                },
                hexDataSlice: function() {
                    return hexDataSlice
                },
                hexStripZeros: function() {
                    return hexStripZeros
                },
                hexValue: function() {
                    return hexValue
                },
                hexZeroPad: function() {
                    return hexZeroPad
                },
                hexlify: function() {
                    return hexlify
                },
                isBytes: function() {
                    return isBytes
                },
                isBytesLike: function() {
                    return isBytesLike
                },
                isHexString: function() {
                    return isHexString
                },
                joinSignature: function() {
                    return joinSignature
                },
                splitSignature: function() {
                    return splitSignature
                },
                stripZeros: function() {
                    return stripZeros
                },
                zeroPad: function() {
                    return zeroPad
                }
            });
            var n = r(36288);
            let i = new n.Logger("bytes/5.7.0");

            function isHexable(t) {
                return !!t.toHexString
            }

            function addSlice(t) {
                return t.slice || (t.slice = function() {
                    let e = Array.prototype.slice.call(arguments);
                    return addSlice(new Uint8Array(Array.prototype.slice.apply(t, e)))
                }), t
            }

            function isBytesLike(t) {
                return isHexString(t) && !(t.length % 2) || isBytes(t)
            }

            function isInteger(t) {
                return "number" == typeof t && t == t && t % 1 == 0
            }

            function isBytes(t) {
                if (null == t) return !1;
                if (t.constructor === Uint8Array) return !0;
                if ("string" == typeof t || !isInteger(t.length) || t.length < 0) return !1;
                for (let e = 0; e < t.length; e++) {
                    let r = t[e];
                    if (!isInteger(r) || r < 0 || r >= 256) return !1
                }
                return !0
            }

            function arrayify(t, e) {
                if (e || (e = {}), "number" == typeof t) {
                    i.checkSafeUint53(t, "invalid arrayify value");
                    let e = [];
                    for (; t;) e.unshift(255 & t), t = parseInt(String(t / 256));
                    return 0 === e.length && e.push(0), addSlice(new Uint8Array(e))
                }
                if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), isHexable(t) && (t = t.toHexString()), isHexString(t)) {
                    let r = t.substring(2);
                    r.length % 2 && ("left" === e.hexPad ? r = "0" + r : "right" === e.hexPad ? r += "0" : i.throwArgumentError("hex data is odd-length", "value", t));
                    let n = [];
                    for (let t = 0; t < r.length; t += 2) n.push(parseInt(r.substring(t, t + 2), 16));
                    return addSlice(new Uint8Array(n))
                }
                return isBytes(t) ? addSlice(new Uint8Array(t)) : i.throwArgumentError("invalid arrayify value", "value", t)
            }

            function concat(t) {
                let e = t.map(t => arrayify(t)),
                    r = e.reduce((t, e) => t + e.length, 0),
                    n = new Uint8Array(r);
                return e.reduce((t, e) => (n.set(e, t), t + e.length), 0), addSlice(n)
            }

            function stripZeros(t) {
                let e = arrayify(t);
                if (0 === e.length) return e;
                let r = 0;
                for (; r < e.length && 0 === e[r];) r++;
                return r && (e = e.slice(r)), e
            }

            function zeroPad(t, e) {
                (t = arrayify(t)).length > e && i.throwArgumentError("value out of range", "value", arguments[0]);
                let r = new Uint8Array(e);
                return r.set(t, e - t.length), addSlice(r)
            }

            function isHexString(t, e) {
                return "string" == typeof t && !!t.match(/^0x[0-9A-Fa-f]*$/) && (!e || t.length === 2 + 2 * e)
            }
            let o = "0123456789abcdef";

            function hexlify(t, e) {
                if (e || (e = {}), "number" == typeof t) {
                    i.checkSafeUint53(t, "invalid hexlify value");
                    let e = "";
                    for (; t;) e = o[15 & t] + e, t = Math.floor(t / 16);
                    return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00"
                }
                if ("bigint" == typeof t) return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
                if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), isHexable(t)) return t.toHexString();
                if (isHexString(t)) return t.length % 2 && ("left" === e.hexPad ? t = "0x0" + t.substring(2) : "right" === e.hexPad ? t += "0" : i.throwArgumentError("hex data is odd-length", "value", t)), t.toLowerCase();
                if (isBytes(t)) {
                    let e = "0x";
                    for (let r = 0; r < t.length; r++) {
                        let n = t[r];
                        e += o[(240 & n) >> 4] + o[15 & n]
                    }
                    return e
                }
                return i.throwArgumentError("invalid hexlify value", "value", t)
            }

            function hexDataLength(t) {
                if ("string" != typeof t) t = hexlify(t);
                else if (!isHexString(t) || t.length % 2) return null;
                return (t.length - 2) / 2
            }

            function hexDataSlice(t, e, r) {
                return ("string" != typeof t ? t = hexlify(t) : (!isHexString(t) || t.length % 2) && i.throwArgumentError("invalid hexData", "value", t), e = 2 + 2 * e, null != r) ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
            }

            function hexConcat(t) {
                let e = "0x";
                return t.forEach(t => {
                    e += hexlify(t).substring(2)
                }), e
            }

            function hexValue(t) {
                let e = hexStripZeros(hexlify(t, {
                    hexPad: "left"
                }));
                return "0x" === e ? "0x0" : e
            }

            function hexStripZeros(t) {
                "string" != typeof t && (t = hexlify(t)), isHexString(t) || i.throwArgumentError("invalid hex string", "value", t), t = t.substring(2);
                let e = 0;
                for (; e < t.length && "0" === t[e];) e++;
                return "0x" + t.substring(e)
            }

            function hexZeroPad(t, e) {
                for ("string" != typeof t ? t = hexlify(t) : isHexString(t) || i.throwArgumentError("invalid hex string", "value", t), t.length > 2 * e + 2 && i.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2;) t = "0x0" + t.substring(2);
                return t
            }

            function splitSignature(t) {
                let e = {
                    r: "0x",
                    s: "0x",
                    _vs: "0x",
                    recoveryParam: 0,
                    v: 0,
                    yParityAndS: "0x",
                    compact: "0x"
                };
                if (isBytesLike(t)) {
                    let r = arrayify(t);
                    64 === r.length ? (e.v = 27 + (r[32] >> 7), r[32] &= 127, e.r = hexlify(r.slice(0, 32)), e.s = hexlify(r.slice(32, 64))) : 65 === r.length ? (e.r = hexlify(r.slice(0, 32)), e.s = hexlify(r.slice(32, 64)), e.v = r[64]) : i.throwArgumentError("invalid signature string", "signature", t), e.v < 27 && (0 === e.v || 1 === e.v ? e.v += 27 : i.throwArgumentError("signature invalid v byte", "signature", t)), e.recoveryParam = 1 - e.v % 2, e.recoveryParam && (r[32] |= 128), e._vs = hexlify(r.slice(32, 64))
                } else {
                    if (e.r = t.r, e.s = t.s, e.v = t.v, e.recoveryParam = t.recoveryParam, e._vs = t._vs, null != e._vs) {
                        let r = zeroPad(arrayify(e._vs), 32);
                        e._vs = hexlify(r);
                        let n = r[0] >= 128 ? 1 : 0;
                        null == e.recoveryParam ? e.recoveryParam = n : e.recoveryParam !== n && i.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t), r[0] &= 127;
                        let o = hexlify(r);
                        null == e.s ? e.s = o : e.s !== o && i.throwArgumentError("signature v mismatch _vs", "signature", t)
                    }
                    if (null == e.recoveryParam) null == e.v ? i.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === e.v || 1 === e.v ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
                    else if (null == e.v) e.v = 27 + e.recoveryParam;
                    else {
                        let r = 0 === e.v || 1 === e.v ? e.v : 1 - e.v % 2;
                        e.recoveryParam !== r && i.throwArgumentError("signature recoveryParam mismatch v", "signature", t)
                    }
                    null != e.r && isHexString(e.r) ? e.r = hexZeroPad(e.r, 32) : i.throwArgumentError("signature missing or invalid r", "signature", t), null != e.s && isHexString(e.s) ? e.s = hexZeroPad(e.s, 32) : i.throwArgumentError("signature missing or invalid s", "signature", t);
                    let r = arrayify(e.s);
                    r[0] >= 128 && i.throwArgumentError("signature s out of range", "signature", t), e.recoveryParam && (r[0] |= 128);
                    let n = hexlify(r);
                    e._vs && (isHexString(e._vs) || i.throwArgumentError("signature invalid _vs", "signature", t), e._vs = hexZeroPad(e._vs, 32)), null == e._vs ? e._vs = n : e._vs !== n && i.throwArgumentError("signature _vs mismatch v and s", "signature", t)
                }
                return e.yParityAndS = e._vs, e.compact = e.r + e.yParityAndS.substring(2), e
            }

            function joinSignature(t) {
                return hexlify(concat([(t = splitSignature(t)).r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
            }
        },
        5572: function(t, e, r) {
            "use strict";
            r.d(e, {
                d: function() {
                    return n
                }
            });
            let n = "0x0000000000000000000000000000000000000000"
        },
        53690: function(t, e, r) {
            "use strict";
            r.d(e, {
                $B: function() {
                    return h
                },
                Bz: function() {
                    return l
                },
                Ce: function() {
                    return u
                },
                PS: function() {
                    return c
                },
                Py: function() {
                    return a
                },
                _Y: function() {
                    return o
                },
                fh: function() {
                    return s
                },
                tL: function() {
                    return i
                }
            });
            var n = r(92598);
            let i = n.O$.from(-1),
                o = n.O$.from(0),
                s = n.O$.from(1),
                a = n.O$.from(2),
                u = n.O$.from("1000000000000000000"),
                l = n.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                h = n.O$.from("-0x8000000000000000000000000000000000000000000000000000000000000000"),
                c = n.O$.from("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
        },
        76726: function(t, e, r) {
            "use strict";
            r.d(e, {
                R: function() {
                    return n
                }
            });
            let n = "0x0000000000000000000000000000000000000000000000000000000000000000"
        },
        28410: function(t, e, r) {
            "use strict";
            r.d(e, {
                VZ: function() {
                    return BaseContract
                },
                CH: function() {
                    return Contract
                },
                lV: function() {
                    return ContractFactory
                }
            });
            var n = r(11035),
                i = r(98291),
                o = r(94999),
                s = r(14941),
                a = r(18994),
                u = r(92598),
                l = r(57273),
                h = r(17213),
                c = r(12060),
                d = r(36288),
                __awaiter = function(t, e, r, n) {
                    return new(r || (r = Promise))(function(i, o) {
                        function fulfilled(t) {
                            try {
                                step(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function rejected(t) {
                            try {
                                step(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function step(t) {
                            var e;
                            t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                                t(e)
                            })).then(fulfilled, rejected)
                        }
                        step((n = n.apply(t, e || [])).next())
                    })
                };
            let g = new d.Logger("contracts/5.7.0"),
                m = {
                    chainId: !0,
                    data: !0,
                    from: !0,
                    gasLimit: !0,
                    gasPrice: !0,
                    nonce: !0,
                    to: !0,
                    value: !0,
                    type: !0,
                    accessList: !0,
                    maxFeePerGas: !0,
                    maxPriorityFeePerGas: !0,
                    customData: !0,
                    ccipReadEnabled: !0
                };

            function resolveName(t, e) {
                return __awaiter(this, void 0, void 0, function*() {
                    let r = yield e;
                    "string" != typeof r && g.throwArgumentError("invalid address or ENS name", "name", r);
                    try {
                        return (0, a.getAddress)(r)
                    } catch (t) {}
                    t || g.throwError("a provider or signer is needed to resolve ENS names", d.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "resolveName"
                    });
                    let n = yield t.resolveName(r);
                    return null == n && g.throwArgumentError("resolver or addr is not configured for ENS name", "name", r), n
                })
            }

            function resolveAddresses(t, e, r) {
                return __awaiter(this, void 0, void 0, function*() {
                    return Array.isArray(r) ? yield Promise.all(r.map((r, n) => resolveAddresses(t, Array.isArray(e) ? e[n] : e[r.name], r))): "address" === r.type ? yield resolveName(t, e): "tuple" === r.type ? yield resolveAddresses(t, e, r.components): "array" === r.baseType ? Array.isArray(e) ? yield Promise.all(e.map(e => resolveAddresses(t, e, r.arrayChildren))): Promise.reject(g.makeError("invalid value for array", d.Logger.errors.INVALID_ARGUMENT, {
                        argument: "value",
                        value: e
                    })): e
                })
            }

            function populateTransaction(t, e, r) {
                return __awaiter(this, void 0, void 0, function*() {
                    let n = {};
                    r.length === e.inputs.length + 1 && "object" == typeof r[r.length - 1] && (n = (0, h.shallowCopy)(r.pop())), g.checkArgumentCount(r.length, e.inputs.length, "passed to contract"), t.signer ? n.from ? n.from = (0, h.resolveProperties)({
                        override: resolveName(t.signer, n.from),
                        signer: t.signer.getAddress()
                    }).then(t => __awaiter(this, void 0, void 0, function*() {
                        return (0, a.getAddress)(t.signer) !== t.override && g.throwError("Contract with a Signer cannot override from", d.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "overrides.from"
                        }), t.override
                    })) : n.from = t.signer.getAddress() : n.from && (n.from = resolveName(t.provider, n.from));
                    let i = yield(0, h.resolveProperties)({
                        args: resolveAddresses(t.signer || t.provider, r, e.inputs),
                        address: t.resolvedAddress,
                        overrides: (0, h.resolveProperties)(n) || {}
                    }), o = t.interface.encodeFunctionData(e, i.args), s = {
                        data: o,
                        to: i.address
                    }, m = i.overrides;
                    if (null != m.nonce && (s.nonce = u.O$.from(m.nonce).toNumber()), null != m.gasLimit && (s.gasLimit = u.O$.from(m.gasLimit)), null != m.gasPrice && (s.gasPrice = u.O$.from(m.gasPrice)), null != m.maxFeePerGas && (s.maxFeePerGas = u.O$.from(m.maxFeePerGas)), null != m.maxPriorityFeePerGas && (s.maxPriorityFeePerGas = u.O$.from(m.maxPriorityFeePerGas)), null != m.from && (s.from = m.from), null != m.type && (s.type = m.type), null != m.accessList && (s.accessList = (0, c.accessListify)(m.accessList)), null == s.gasLimit && null != e.gas) {
                        let t = 21e3,
                            r = (0, l.arrayify)(o);
                        for (let e = 0; e < r.length; e++) t += 4, r[e] && (t += 64);
                        s.gasLimit = u.O$.from(e.gas).add(t)
                    }
                    if (m.value) {
                        let t = u.O$.from(m.value);
                        t.isZero() || e.payable || g.throwError("non-payable method cannot override value", d.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "overrides.value",
                            value: n.value
                        }), s.value = t
                    }
                    m.customData && (s.customData = (0, h.shallowCopy)(m.customData)), m.ccipReadEnabled && (s.ccipReadEnabled = !!m.ccipReadEnabled), delete n.nonce, delete n.gasLimit, delete n.gasPrice, delete n.from, delete n.value, delete n.type, delete n.accessList, delete n.maxFeePerGas, delete n.maxPriorityFeePerGas, delete n.customData, delete n.ccipReadEnabled;
                    let p = Object.keys(n).filter(t => null != n[t]);
                    return p.length && g.throwError(`cannot override ${p.map(t=>JSON.stringify(t)).join(",")}`, d.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "overrides",
                        overrides: p
                    }), s
                })
            }

            function addContractWait(t, e) {
                let r = e.wait.bind(e);
                e.wait = e => r(e).then(e => (e.events = e.logs.map(r => {
                    let n = (0, h.deepCopy)(r),
                        i = null;
                    try {
                        i = t.interface.parseLog(r)
                    } catch (t) {}
                    return i && (n.args = i.args, n.decode = (e, r) => t.interface.decodeEventLog(i.eventFragment, e, r), n.event = i.name, n.eventSignature = i.signature), n.removeListener = () => t.provider, n.getBlock = () => t.provider.getBlock(e.blockHash), n.getTransaction = () => t.provider.getTransaction(e.transactionHash), n.getTransactionReceipt = () => Promise.resolve(e), n
                }), e))
            }

            function buildCall(t, e, r) {
                let n = t.signer || t.provider;
                return function(...i) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let o;
                        if (i.length === e.inputs.length + 1 && "object" == typeof i[i.length - 1]) {
                            let t = (0, h.shallowCopy)(i.pop());
                            null != t.blockTag && (o = yield t.blockTag), delete t.blockTag, i.push(t)
                        }
                        null != t.deployTransaction && (yield t._deployed(o));
                        let s = yield populateTransaction(t, e, i), a = yield n.call(s, o);
                        try {
                            let n = t.interface.decodeFunctionResult(e, a);
                            return r && 1 === e.outputs.length && (n = n[0]), n
                        } catch (e) {
                            throw e.code === d.Logger.errors.CALL_EXCEPTION && (e.address = t.address, e.args = i, e.transaction = s), e
                        }
                    })
                }
            }

            function buildDefault(t, e, r) {
                return e.constant ? buildCall(t, e, r) : function(...r) {
                    return __awaiter(this, void 0, void 0, function*() {
                        t.signer || g.throwError("sending a transaction requires a signer", d.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "sendTransaction"
                        }), null != t.deployTransaction && (yield t._deployed());
                        let n = yield populateTransaction(t, e, r), i = yield t.signer.sendTransaction(n);
                        return addContractWait(t, i), i
                    })
                }
            }

            function getEventTag(t) {
                return t.address && (null == t.topics || 0 === t.topics.length) ? "*" : (t.address || "*") + "@" + (t.topics ? t.topics.map(t => Array.isArray(t) ? t.join("|") : t).join(":") : "")
            }
            let RunningEvent = class RunningEvent {
                constructor(t, e) {
                    (0, h.defineReadOnly)(this, "tag", t), (0, h.defineReadOnly)(this, "filter", e), this._listeners = []
                }
                addListener(t, e) {
                    this._listeners.push({
                        listener: t,
                        once: e
                    })
                }
                removeListener(t) {
                    let e = !1;
                    this._listeners = this._listeners.filter(r => !!e || r.listener !== t || (e = !0, !1))
                }
                removeAllListeners() {
                    this._listeners = []
                }
                listeners() {
                    return this._listeners.map(t => t.listener)
                }
                listenerCount() {
                    return this._listeners.length
                }
                run(t) {
                    let e = this.listenerCount();
                    return this._listeners = this._listeners.filter(e => {
                        let r = t.slice();
                        return setTimeout(() => {
                            e.listener.apply(this, r)
                        }, 0), !e.once
                    }), e
                }
                prepareEvent(t) {}
                getEmit(t) {
                    return [t]
                }
            };
            let ErrorRunningEvent = class ErrorRunningEvent extends RunningEvent {
                constructor() {
                    super("error", null)
                }
            };
            let FragmentRunningEvent = class FragmentRunningEvent extends RunningEvent {
                constructor(t, e, r, n) {
                    let i = {
                            address: t
                        },
                        o = e.getEventTopic(r);
                    n ? (o !== n[0] && g.throwArgumentError("topic mismatch", "topics", n), i.topics = n.slice()) : i.topics = [o], super(getEventTag(i), i), (0, h.defineReadOnly)(this, "address", t), (0, h.defineReadOnly)(this, "interface", e), (0, h.defineReadOnly)(this, "fragment", r)
                }
                prepareEvent(t) {
                    super.prepareEvent(t), t.event = this.fragment.name, t.eventSignature = this.fragment.format(), t.decode = (t, e) => this.interface.decodeEventLog(this.fragment, t, e);
                    try {
                        t.args = this.interface.decodeEventLog(this.fragment, t.data, t.topics)
                    } catch (e) {
                        t.args = null, t.decodeError = e
                    }
                }
                getEmit(t) {
                    let e = (0, n.BR)(t.args);
                    if (e.length) throw e[0].error;
                    let r = (t.args || []).slice();
                    return r.push(t), r
                }
            };
            let WildcardRunningEvent = class WildcardRunningEvent extends RunningEvent {
                constructor(t, e) {
                    super("*", {
                        address: t
                    }), (0, h.defineReadOnly)(this, "address", t), (0, h.defineReadOnly)(this, "interface", e)
                }
                prepareEvent(t) {
                    super.prepareEvent(t);
                    try {
                        let e = this.interface.parseLog(t);
                        t.event = e.name, t.eventSignature = e.signature, t.decode = (t, r) => this.interface.decodeEventLog(e.eventFragment, t, r), t.args = e.args
                    } catch (t) {}
                }
            };
            let BaseContract = class BaseContract {
                constructor(t, e, r) {
                    (0, h.defineReadOnly)(this, "interface", (0, h.getStatic)(new.target, "getInterface")(e)), null == r ? ((0, h.defineReadOnly)(this, "provider", null), (0, h.defineReadOnly)(this, "signer", null)) : s.Signer.isSigner(r) ? ((0, h.defineReadOnly)(this, "provider", r.provider || null), (0, h.defineReadOnly)(this, "signer", r)) : o.zt.isProvider(r) ? ((0, h.defineReadOnly)(this, "provider", r), (0, h.defineReadOnly)(this, "signer", null)) : g.throwArgumentError("invalid signer or provider", "signerOrProvider", r), (0, h.defineReadOnly)(this, "callStatic", {}), (0, h.defineReadOnly)(this, "estimateGas", {}), (0, h.defineReadOnly)(this, "functions", {}), (0, h.defineReadOnly)(this, "populateTransaction", {}), (0, h.defineReadOnly)(this, "filters", {}); {
                        let t = {};
                        Object.keys(this.interface.events).forEach(e => {
                            let r = this.interface.events[e];
                            (0, h.defineReadOnly)(this.filters, e, (...t) => ({
                                address: this.address,
                                topics: this.interface.encodeFilterTopics(r, t)
                            })), t[r.name] || (t[r.name] = []), t[r.name].push(e)
                        }), Object.keys(t).forEach(e => {
                            let r = t[e];
                            1 === r.length ? (0, h.defineReadOnly)(this.filters, e, this.filters[r[0]]) : g.warn(`Duplicate definition of ${e} (${r.join(", ")})`)
                        })
                    }
                    if ((0, h.defineReadOnly)(this, "_runningEvents", {}), (0, h.defineReadOnly)(this, "_wrappedEmits", {}), null == t && g.throwArgumentError("invalid contract address or ENS name", "addressOrName", t), (0, h.defineReadOnly)(this, "address", t), this.provider)(0, h.defineReadOnly)(this, "resolvedAddress", resolveName(this.provider, t));
                    else try {
                        (0, h.defineReadOnly)(this, "resolvedAddress", Promise.resolve((0, a.getAddress)(t)))
                    } catch (t) {
                        g.throwError("provider is required to use ENS name as contract address", d.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "new Contract"
                        })
                    }
                    this.resolvedAddress.catch(t => {});
                    let n = {},
                        i = {};
                    Object.keys(this.interface.functions).forEach(t => {
                        let e = this.interface.functions[t];
                        if (i[t]) {
                            g.warn(`Duplicate ABI entry for ${JSON.stringify(t)}`);
                            return
                        }
                        i[t] = !0; {
                            let r = e.name;
                            n[`%${r}`] || (n[`%${r}`] = []), n[`%${r}`].push(t)
                        }
                        if (null == this[t] && (0, h.defineReadOnly)(this, t, buildDefault(this, e, !0)), null == this.functions[t] && (0, h.defineReadOnly)(this.functions, t, buildDefault(this, e, !1)), null == this.callStatic[t] && (0, h.defineReadOnly)(this.callStatic, t, buildCall(this, e, !0)), null == this.populateTransaction[t]) {
                            var r;
                            (0, h.defineReadOnly)(this.populateTransaction, t, (r = this, function(...t) {
                                return populateTransaction(r, e, t)
                            }))
                        }
                        null == this.estimateGas[t] && (0, h.defineReadOnly)(this.estimateGas, t, function(t, e) {
                            let r = t.signer || t.provider;
                            return function(...n) {
                                return __awaiter(this, void 0, void 0, function*() {
                                    r || g.throwError("estimate require a provider or signer", d.Logger.errors.UNSUPPORTED_OPERATION, {
                                        operation: "estimateGas"
                                    });
                                    let i = yield populateTransaction(t, e, n);
                                    return yield r.estimateGas(i)
                                })
                            }
                        }(this, e))
                    }), Object.keys(n).forEach(t => {
                        let e = n[t];
                        if (e.length > 1) return;
                        t = t.substring(1);
                        let r = e[0];
                        try {
                            null == this[t] && (0, h.defineReadOnly)(this, t, this[r])
                        } catch (t) {}
                        null == this.functions[t] && (0, h.defineReadOnly)(this.functions, t, this.functions[r]), null == this.callStatic[t] && (0, h.defineReadOnly)(this.callStatic, t, this.callStatic[r]), null == this.populateTransaction[t] && (0, h.defineReadOnly)(this.populateTransaction, t, this.populateTransaction[r]), null == this.estimateGas[t] && (0, h.defineReadOnly)(this.estimateGas, t, this.estimateGas[r])
                    })
                }
                static getContractAddress(t) {
                    return (0, a.getContractAddress)(t)
                }
                static getInterface(t) {
                    return i.vU.isInterface(t) ? t : new i.vU(t)
                }
                deployed() {
                    return this._deployed()
                }
                _deployed(t) {
                    return this._deployedPromise || (this.deployTransaction ? this._deployedPromise = this.deployTransaction.wait().then(() => this) : this._deployedPromise = this.provider.getCode(this.address, t).then(t => ("0x" === t && g.throwError("contract not deployed", d.Logger.errors.UNSUPPORTED_OPERATION, {
                        contractAddress: this.address,
                        operation: "getDeployed"
                    }), this))), this._deployedPromise
                }
                fallback(t) {
                    this.signer || g.throwError("sending a transactions require a signer", d.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "sendTransaction(fallback)"
                    });
                    let e = (0, h.shallowCopy)(t || {});
                    return ["from", "to"].forEach(function(t) {
                        null != e[t] && g.throwError("cannot override " + t, d.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: t
                        })
                    }), e.to = this.resolvedAddress, this.deployed().then(() => this.signer.sendTransaction(e))
                }
                connect(t) {
                    "string" == typeof t && (t = new s.VoidSigner(t, this.provider));
                    let e = new this.constructor(this.address, this.interface, t);
                    return this.deployTransaction && (0, h.defineReadOnly)(e, "deployTransaction", this.deployTransaction), e
                }
                attach(t) {
                    return new this.constructor(t, this.interface, this.signer || this.provider)
                }
                static isIndexed(t) {
                    return i.Hk.isIndexed(t)
                }
                _normalizeRunningEvent(t) {
                    return this._runningEvents[t.tag] ? this._runningEvents[t.tag] : t
                }
                _getRunningEvent(t) {
                    if ("string" == typeof t) {
                        if ("error" === t) return this._normalizeRunningEvent(new ErrorRunningEvent);
                        if ("event" === t) return this._normalizeRunningEvent(new RunningEvent("event", null));
                        if ("*" === t) return this._normalizeRunningEvent(new WildcardRunningEvent(this.address, this.interface));
                        let e = this.interface.getEvent(t);
                        return this._normalizeRunningEvent(new FragmentRunningEvent(this.address, this.interface, e))
                    }
                    if (t.topics && t.topics.length > 0) {
                        try {
                            let e = t.topics[0];
                            if ("string" != typeof e) throw Error("invalid topic");
                            let r = this.interface.getEvent(e);
                            return this._normalizeRunningEvent(new FragmentRunningEvent(this.address, this.interface, r, t.topics))
                        } catch (t) {}
                        let e = {
                            address: this.address,
                            topics: t.topics
                        };
                        return this._normalizeRunningEvent(new RunningEvent(getEventTag(e), e))
                    }
                    return this._normalizeRunningEvent(new WildcardRunningEvent(this.address, this.interface))
                }
                _checkRunningEvents(t) {
                    if (0 === t.listenerCount()) {
                        delete this._runningEvents[t.tag];
                        let e = this._wrappedEmits[t.tag];
                        e && t.filter && (this.provider.off(t.filter, e), delete this._wrappedEmits[t.tag])
                    }
                }
                _wrapEvent(t, e, r) {
                    let n = (0, h.deepCopy)(e);
                    return n.removeListener = () => {
                        r && (t.removeListener(r), this._checkRunningEvents(t))
                    }, n.getBlock = () => this.provider.getBlock(e.blockHash), n.getTransaction = () => this.provider.getTransaction(e.transactionHash), n.getTransactionReceipt = () => this.provider.getTransactionReceipt(e.transactionHash), t.prepareEvent(n), n
                }
                _addEventListener(t, e, r) {
                    if (this.provider || g.throwError("events require a provider or a signer with a provider", d.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "once"
                        }), t.addListener(e, r), this._runningEvents[t.tag] = t, !this._wrappedEmits[t.tag]) {
                        let wrappedEmit = r => {
                            let n = this._wrapEvent(t, r, e);
                            if (null == n.decodeError) try {
                                let e = t.getEmit(n);
                                this.emit(t.filter, ...e)
                            } catch (t) {
                                n.decodeError = t.error
                            }
                            null != t.filter && this.emit("event", n), null != n.decodeError && this.emit("error", n.decodeError, n)
                        };
                        this._wrappedEmits[t.tag] = wrappedEmit, null != t.filter && this.provider.on(t.filter, wrappedEmit)
                    }
                }
                queryFilter(t, e, r) {
                    let n = this._getRunningEvent(t),
                        i = (0, h.shallowCopy)(n.filter);
                    return "string" == typeof e && (0, l.isHexString)(e, 32) ? (null != r && g.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", r), i.blockHash = e) : (i.fromBlock = null != e ? e : 0, i.toBlock = null != r ? r : "latest"), this.provider.getLogs(i).then(t => t.map(t => this._wrapEvent(n, t, null)))
                }
                on(t, e) {
                    return this._addEventListener(this._getRunningEvent(t), e, !1), this
                }
                once(t, e) {
                    return this._addEventListener(this._getRunningEvent(t), e, !0), this
                }
                emit(t, ...e) {
                    if (!this.provider) return !1;
                    let r = this._getRunningEvent(t),
                        n = r.run(e) > 0;
                    return this._checkRunningEvents(r), n
                }
                listenerCount(t) {
                    return this.provider ? null == t ? Object.keys(this._runningEvents).reduce((t, e) => t + this._runningEvents[e].listenerCount(), 0) : this._getRunningEvent(t).listenerCount() : 0
                }
                listeners(t) {
                    if (!this.provider) return [];
                    if (null == t) {
                        let t = [];
                        for (let e in this._runningEvents) this._runningEvents[e].listeners().forEach(e => {
                            t.push(e)
                        });
                        return t
                    }
                    return this._getRunningEvent(t).listeners()
                }
                removeAllListeners(t) {
                    if (!this.provider) return this;
                    if (null == t) {
                        for (let t in this._runningEvents) {
                            let e = this._runningEvents[t];
                            e.removeAllListeners(), this._checkRunningEvents(e)
                        }
                        return this
                    }
                    let e = this._getRunningEvent(t);
                    return e.removeAllListeners(), this._checkRunningEvents(e), this
                }
                off(t, e) {
                    if (!this.provider) return this;
                    let r = this._getRunningEvent(t);
                    return r.removeListener(e), this._checkRunningEvents(r), this
                }
                removeListener(t, e) {
                    return this.off(t, e)
                }
            };
            let Contract = class Contract extends BaseContract {};
            let ContractFactory = class ContractFactory {
                constructor(t, e, r) {
                    let n = null;
                    "0x" !== (n = "string" == typeof e ? e : (0, l.isBytes)(e) ? (0, l.hexlify)(e) : e && "string" == typeof e.object ? e.object : "!").substring(0, 2) && (n = "0x" + n), (!(0, l.isHexString)(n) || n.length % 2) && g.throwArgumentError("invalid bytecode", "bytecode", e), r && !s.Signer.isSigner(r) && g.throwArgumentError("invalid signer", "signer", r), (0, h.defineReadOnly)(this, "bytecode", n), (0, h.defineReadOnly)(this, "interface", (0, h.getStatic)(new.target, "getInterface")(t)), (0, h.defineReadOnly)(this, "signer", r || null)
                }
                getDeployTransaction(...t) {
                    let e = {};
                    if (t.length === this.interface.deploy.inputs.length + 1 && "object" == typeof t[t.length - 1]) {
                        for (let r in e = (0, h.shallowCopy)(t.pop()))
                            if (!m[r]) throw Error("unknown transaction override " + r)
                    }
                    if (["data", "from", "to"].forEach(t => {
                            null != e[t] && g.throwError("cannot override " + t, d.Logger.errors.UNSUPPORTED_OPERATION, {
                                operation: t
                            })
                        }), e.value) {
                        let t = u.O$.from(e.value);
                        t.isZero() || this.interface.deploy.payable || g.throwError("non-payable constructor cannot override value", d.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "overrides.value",
                            value: e.value
                        })
                    }
                    return g.checkArgumentCount(t.length, this.interface.deploy.inputs.length, " in Contract constructor"), e.data = (0, l.hexlify)((0, l.concat)([this.bytecode, this.interface.encodeDeploy(t)])), e
                }
                deploy(...t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let e = {};
                        t.length === this.interface.deploy.inputs.length + 1 && (e = t.pop()), g.checkArgumentCount(t.length, this.interface.deploy.inputs.length, " in Contract constructor");
                        let r = yield resolveAddresses(this.signer, t, this.interface.deploy.inputs);
                        r.push(e);
                        let n = this.getDeployTransaction(...r),
                            i = yield this.signer.sendTransaction(n), o = (0, h.getStatic)(this.constructor, "getContractAddress")(i), s = (0, h.getStatic)(this.constructor, "getContract")(o, this.interface, this.signer);
                        return addContractWait(s, i), (0, h.defineReadOnly)(s, "deployTransaction", i), s
                    })
                }
                attach(t) {
                    return this.constructor.getContract(t, this.interface, this.signer)
                }
                connect(t) {
                    return new this.constructor(this.interface, this.bytecode, t)
                }
                static fromSolidity(t, e) {
                    null == t && g.throwError("missing compiler output", d.Logger.errors.MISSING_ARGUMENT, {
                        argument: "compilerOutput"
                    }), "string" == typeof t && (t = JSON.parse(t));
                    let r = t.abi,
                        n = null;
                    return t.bytecode ? n = t.bytecode : t.evm && t.evm.bytecode && (n = t.evm.bytecode), new this(r, n, e)
                }
                static getInterface(t) {
                    return Contract.getInterface(t)
                }
                static getContractAddress(t) {
                    return (0, a.getContractAddress)(t)
                }
                static getContract(t, e, r) {
                    return new Contract(t, e, r)
                }
            }
        },
        10996: function(t, e, r) {
            "use strict";
            r.d(e, {
                i: function() {
                    return n
                }
            });
            let n = "hash/5.7.0"
        },
        36339: function(t, e, r) {
            "use strict";
            r.d(e, {
                id: function() {
                    return id
                }
            });
            var n = r(14184),
                i = r(58337);

            function id(t) {
                return (0, n.keccak256)((0, i.Y0)(t))
            }
        },
        66007: function(t, e, r) {
            "use strict";
            let n, i;
            r.d(e, {
                Kn: function() {
                    return dnsEncode
                },
                w3: function() {
                    return ensNormalize
                },
                r1: function() {
                    return isValidName
                },
                VM: function() {
                    return namehash
                }
            });
            var o, s = r(57273),
                a = r(58337),
                u = r(14184),
                l = r(36288),
                h = r(10996),
                c = r(72275);

            function flat(t, e) {
                null == e && (e = 1);
                let r = [],
                    n = r.forEach,
                    flatDeep = function(t, e) {
                        n.call(t, function(t) {
                            e > 0 && Array.isArray(t) ? flatDeep(t, e - 1) : r.push(t)
                        })
                    };
                return flatDeep(t, e), r
            }

            function read_ascending(t, e) {
                let r = Array(t);
                for (let n = 0, i = -1; n < t; n++) r[n] = i += 1 + e();
                return r
            }

            function read_member_array(t, e) {
                let r = read_ascending(t(), t),
                    n = t(),
                    i = read_ascending(n, t),
                    o = function(t, e) {
                        let r = Array(t);
                        for (let n = 0; n < t; n++) r[n] = 1 + e();
                        return r
                    }(n, t);
                for (let t = 0; t < n; t++)
                    for (let e = 0; e < o[t]; e++) r.push(i[t] + e);
                return e ? r.map(t => e[t]) : r
            }

            function read_transposed(t, e, r) {
                let n = Array(t).fill(void 0).map(() => []);
                for (let i = 0; i < e; i++)(function(t, e) {
                    let r = Array(t);
                    for (let i = 0, o = 0; i < t; i++) {
                        var n;
                        r[i] = o += 1 & (n = e()) ? ~n >> 1 : n >> 1
                    }
                    return r
                })(t, r).forEach((t, e) => n[e].push(t));
                return n
            }
            let d = (o = function(t) {
                    let e = 0;

                    function u16() {
                        return t[e++] << 8 | t[e++]
                    }
                    let r = u16(),
                        n = 1,
                        i = [0, 1];
                    for (let t = 1; t < r; t++) i.push(n += u16());
                    let o = u16(),
                        s = e;
                    e += o;
                    let a = 0,
                        u = 0;

                    function read_bit() {
                        return 0 == a && (u = u << 8 | t[e++], a = 8), u >> --a & 1
                    }
                    let l = 0;
                    for (let t = 0; t < 31; t++) l = l << 1 | read_bit();
                    let h = [],
                        c = 0,
                        d = 2147483648;
                    for (;;) {
                        let t = Math.floor(((l - c + 1) * n - 1) / d),
                            e = 0,
                            o = r;
                        for (; o - e > 1;) {
                            let r = e + o >>> 1;
                            t < i[r] ? o = r : e = r
                        }
                        if (0 == e) break;
                        h.push(e);
                        let s = c + Math.floor(d * i[e] / n),
                            a = c + Math.floor(d * i[e + 1] / n) - 1;
                        for (;
                            ((s ^ a) & 1073741824) == 0;) l = l << 1 & 2147483647 | read_bit(), s = s << 1 & 2147483647, a = a << 1 & 2147483647 | 1;
                        for (; s & ~a & 536870912;) l = 1073741824 & l | l << 1 & 1073741823 | read_bit(), s = s << 1 ^ 1073741824, a = (1073741824 ^ a) << 1 | 1073741825;
                        c = s, d = 1 + a - s
                    }
                    let g = r - 4;
                    return h.map(e => {
                        switch (e - g) {
                            case 3:
                                return g + 65792 + (t[s++] << 16 | t[s++] << 8 | t[s++]);
                            case 2:
                                return g + 256 + (t[s++] << 8 | t[s++]);
                            case 1:
                                return g + t[s++];
                            default:
                                return e - 1
                        }
                    })
                }((0, c.J)("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA==")), i = 0, () => o[i++]),
                g = new Set(read_member_array(d)),
                m = new Set(read_member_array(d)),
                p = function(t) {
                    let e = [];
                    for (;;) {
                        let r = t();
                        if (0 == r) break;
                        e.push(function(t, e) {
                            let r = 1 + e(),
                                n = e(),
                                i = function(t) {
                                    let e = [];
                                    for (;;) {
                                        let r = t();
                                        if (0 == r) break;
                                        e.push(r)
                                    }
                                    return e
                                }(e);
                            return flat(read_transposed(i.length, 1 + t, e).map((t, e) => {
                                let o = t[0],
                                    s = t.slice(1);
                                return Array(i[e]).fill(void 0).map((t, e) => {
                                    let i = e * n;
                                    return [o + e * r, s.map(t => t + i)]
                                })
                            }))
                        }(r, t))
                    }
                    for (;;) {
                        let r = t() - 1;
                        if (r < 0) break;
                        e.push(read_transposed(1 + t(), 1 + r, t).map(t => [t[0], t.slice(1)]))
                    }
                    return function(t) {
                        let e = {};
                        for (let r = 0; r < t.length; r++) {
                            let n = t[r];
                            e[n[0]] = n[1]
                        }
                        return e
                    }(flat(e))
                }(d),
                y = (n = read_member_array(d).sort((t, e) => t - e), function read() {
                    let t = [];
                    for (;;) {
                        let e = read_member_array(d, n);
                        if (0 == e.length) break;
                        t.push({
                            set: new Set(e),
                            node: read()
                        })
                    }
                    t.sort((t, e) => e.set.size - t.set.size);
                    let e = d();
                    return {
                        branches: t,
                        valid: e % 3,
                        fe0f: !!(1 & (e = e / 3 | 0)),
                        save: 1 == (e >>= 1),
                        check: 2 == e
                    }
                }());

            function filter_fe0f(t) {
                return t.filter(t => 65039 != t)
            }

            function ens_normalize_post_check(t) {
                for (let e of t.split(".")) {
                    let t = (0, a.XL)(e);
                    try {
                        for (let e = t.lastIndexOf(95) - 1; e >= 0; e--)
                            if (95 !== t[e]) throw Error("underscore only allowed at start");
                        if (t.length >= 4 && t.every(t => t < 128) && 45 === t[2] && 45 === t[3]) throw Error("invalid label extension")
                    } catch (t) {
                        throw Error(`Invalid label "${e}": ${t.message}`)
                    }
                }
                return t
            }
            let v = new l.Logger(h.i),
                w = new Uint8Array(32);

            function checkComponent(t) {
                if (0 === t.length) throw Error("invalid ENS name; empty component");
                return t
            }

            function ensNameSplit(t) {
                let e = (0, a.Y0)(ens_normalize_post_check(function(t, e) {
                        let r = (0, a.XL)(t).reverse(),
                            n = [];
                        for (; r.length;) {
                            let t = function(t, e) {
                                var r;
                                let n, i;
                                let o = y,
                                    s = [],
                                    a = t.length;
                                for (e && (e.length = 0); a;) {
                                    let u = t[--a];
                                    if (!(o = null === (r = o.branches.find(t => t.set.has(u))) || void 0 === r ? void 0 : r.node)) break;
                                    if (o.save) i = u;
                                    else if (o.check && u === i) break;
                                    s.push(u), o.fe0f && (s.push(65039), a > 0 && 65039 == t[a - 1] && a--), o.valid && (n = s.slice(), 2 == o.valid && n.splice(1, 1), e && e.push(...t.slice(a).reverse()), t.length = a)
                                }
                                return n
                            }(r);
                            if (t) {
                                n.push(...e(t));
                                continue
                            }
                            let i = r.pop();
                            if (g.has(i)) {
                                n.push(i);
                                continue
                            }
                            if (m.has(i)) continue;
                            let o = p[i];
                            if (o) {
                                n.push(...o);
                                continue
                            }
                            throw Error(`Disallowed codepoint: 0x${i.toString(16).toUpperCase()}`)
                        }
                        return ens_normalize_post_check(String.fromCodePoint(...n).normalize("NFC"))
                    }(t, filter_fe0f))),
                    r = [];
                if (0 === t.length) return r;
                let n = 0;
                for (let t = 0; t < e.length; t++) {
                    let i = e[t];
                    46 === i && (r.push(checkComponent(e.slice(n, t))), n = t + 1)
                }
                if (n >= e.length) throw Error("invalid ENS name; empty component");
                return r.push(checkComponent(e.slice(n))), r
            }

            function ensNormalize(t) {
                return ensNameSplit(t).map(t => (0, a.ZN)(t)).join(".")
            }

            function isValidName(t) {
                try {
                    return 0 !== ensNameSplit(t).length
                } catch (t) {}
                return !1
            }

            function namehash(t) {
                "string" != typeof t && v.throwArgumentError("invalid ENS name; not a string", "name", t);
                let e = w,
                    r = ensNameSplit(t);
                for (; r.length;) e = (0, u.keccak256)((0, s.concat)([e, (0, u.keccak256)(r.pop())]));
                return (0, s.hexlify)(e)
            }

            function dnsEncode(t) {
                return (0, s.hexlify)((0, s.concat)(ensNameSplit(t).map(t => {
                    if (t.length > 63) throw Error("invalid DNS encoded entry; length exceeds 63 bytes");
                    let e = new Uint8Array(t.length + 1);
                    return e.set(t, 1), e[0] = e.length - 1, e
                }))) + "00"
            }
            w.fill(0)
        },
        31822: function(t, e, r) {
            "use strict";
            r.d(e, {
                E: function() {
                    return TypedDataEncoder
                }
            });
            var n = r(18994),
                i = r(92598),
                o = r(57273),
                s = r(14184),
                a = r(17213),
                u = r(36288),
                l = r(10996),
                h = r(36339);
            let c = new u.Logger(l.i),
                d = new Uint8Array(32);
            d.fill(0);
            let g = i.O$.from(-1),
                m = i.O$.from(0),
                p = i.O$.from(1),
                y = i.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                v = (0, o.hexZeroPad)(p.toHexString(), 32),
                w = (0, o.hexZeroPad)(m.toHexString(), 32),
                b = {
                    name: "string",
                    version: "string",
                    chainId: "uint256",
                    verifyingContract: "address",
                    salt: "bytes32"
                },
                A = ["name", "version", "chainId", "verifyingContract", "salt"];

            function checkString(t) {
                return function(e) {
                    return "string" != typeof e && c.throwArgumentError(`invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e), e
                }
            }
            let E = {
                name: checkString("name"),
                version: checkString("version"),
                chainId: function(t) {
                    try {
                        return i.O$.from(t).toString()
                    } catch (t) {}
                    return c.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", t)
                },
                verifyingContract: function(t) {
                    try {
                        return (0, n.getAddress)(t).toLowerCase()
                    } catch (t) {}
                    return c.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", t)
                },
                salt: function(t) {
                    try {
                        let e = (0, o.arrayify)(t);
                        if (32 !== e.length) throw Error("bad length");
                        return (0, o.hexlify)(e)
                    } catch (t) {}
                    return c.throwArgumentError('invalid domain value "salt"', "domain.salt", t)
                }
            };

            function getBaseEncoder(t) {
                {
                    let e = t.match(/^(u?)int(\d*)$/);
                    if (e) {
                        let r = "" === e[1],
                            n = parseInt(e[2] || "256");
                        (n % 8 != 0 || n > 256 || e[2] && e[2] !== String(n)) && c.throwArgumentError("invalid numeric width", "type", t);
                        let s = y.mask(r ? n - 1 : n),
                            a = r ? s.add(p).mul(g) : m;
                        return function(e) {
                            let r = i.O$.from(e);
                            return (r.lt(a) || r.gt(s)) && c.throwArgumentError(`value out-of-bounds for ${t}`, "value", e), (0, o.hexZeroPad)(r.toTwos(256).toHexString(), 32)
                        }
                    }
                } {
                    let e = t.match(/^bytes(\d+)$/);
                    if (e) {
                        let r = parseInt(e[1]);
                        return (0 === r || r > 32 || e[1] !== String(r)) && c.throwArgumentError("invalid bytes width", "type", t),
                            function(e) {
                                let n = (0, o.arrayify)(e);
                                return n.length !== r && c.throwArgumentError(`invalid length for ${t}`, "value", e),
                                    function(t) {
                                        let e = (0, o.arrayify)(t),
                                            r = e.length % 32;
                                        return r ? (0, o.hexConcat)([e, d.slice(r)]) : (0, o.hexlify)(e)
                                    }(e)
                            }
                    }
                }
                switch (t) {
                    case "address":
                        return function(t) {
                            return (0, o.hexZeroPad)((0, n.getAddress)(t), 32)
                        };
                    case "bool":
                        return function(t) {
                            return t ? v : w
                        };
                    case "bytes":
                        return function(t) {
                            return (0, s.keccak256)(t)
                        };
                    case "string":
                        return function(t) {
                            return (0, h.id)(t)
                        }
                }
                return null
            }

            function encodeType(t, e) {
                return `${t}(${e.map(({name:t,type:e})=>e+" "+t).join(",")})`
            }
            let TypedDataEncoder = class TypedDataEncoder {
                constructor(t) {
                    (0, a.defineReadOnly)(this, "types", Object.freeze((0, a.deepCopy)(t))), (0, a.defineReadOnly)(this, "_encoderCache", {}), (0, a.defineReadOnly)(this, "_types", {});
                    let e = {},
                        r = {},
                        n = {};
                    for (let i in Object.keys(t).forEach(t => {
                            e[t] = {}, r[t] = [], n[t] = {}
                        }), t) {
                        let n = {};
                        t[i].forEach(o => {
                            n[o.name] && c.throwArgumentError(`duplicate variable name ${JSON.stringify(o.name)} in ${JSON.stringify(i)}`, "types", t), n[o.name] = !0;
                            let s = o.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
                            s === i && c.throwArgumentError(`circular type reference to ${JSON.stringify(s)}`, "types", t);
                            let a = getBaseEncoder(s);
                            a || (r[s] || c.throwArgumentError(`unknown type ${JSON.stringify(s)}`, "types", t), r[s].push(i), e[i][s] = !0)
                        })
                    }
                    let i = Object.keys(r).filter(t => 0 === r[t].length);
                    for (let o in 0 === i.length ? c.throwArgumentError("missing primary type", "types", t) : i.length > 1 && c.throwArgumentError(`ambiguous primary types or unused types: ${i.map(t=>JSON.stringify(t)).join(", ")}`, "types", t), (0, a.defineReadOnly)(this, "primaryType", i[0]), ! function checkCircular(i, o) {
                            o[i] && c.throwArgumentError(`circular type reference to ${JSON.stringify(i)}`, "types", t), o[i] = !0, Object.keys(e[i]).forEach(t => {
                                r[t] && (checkCircular(t, o), Object.keys(o).forEach(e => {
                                    n[e][t] = !0
                                }))
                            }), delete o[i]
                        }(this.primaryType, {}), n) {
                        let e = Object.keys(n[o]);
                        e.sort(), this._types[o] = encodeType(o, t[o]) + e.map(e => encodeType(e, t[e])).join("")
                    }
                }
                getEncoder(t) {
                    let e = this._encoderCache[t];
                    return e || (e = this._encoderCache[t] = this._getEncoder(t)), e
                }
                _getEncoder(t) {
                    {
                        let e = getBaseEncoder(t);
                        if (e) return e
                    }
                    let e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (e) {
                        let t = e[1],
                            r = this.getEncoder(t),
                            n = parseInt(e[3]);
                        return e => {
                            n >= 0 && e.length !== n && c.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e);
                            let i = e.map(r);
                            return this._types[t] && (i = i.map(s.keccak256)), (0, s.keccak256)((0, o.hexConcat)(i))
                        }
                    }
                    let r = this.types[t];
                    if (r) {
                        let e = (0, h.id)(this._types[t]);
                        return t => {
                            let n = r.map(({
                                name: e,
                                type: r
                            }) => {
                                let n = this.getEncoder(r)(t[e]);
                                return this._types[r] ? (0, s.keccak256)(n) : n
                            });
                            return n.unshift(e), (0, o.hexConcat)(n)
                        }
                    }
                    return c.throwArgumentError(`unknown type: ${t}`, "type", t)
                }
                encodeType(t) {
                    let e = this._types[t];
                    return e || c.throwArgumentError(`unknown type: ${JSON.stringify(t)}`, "name", t), e
                }
                encodeData(t, e) {
                    return this.getEncoder(t)(e)
                }
                hashStruct(t, e) {
                    return (0, s.keccak256)(this.encodeData(t, e))
                }
                encode(t) {
                    return this.encodeData(this.primaryType, t)
                }
                hash(t) {
                    return this.hashStruct(this.primaryType, t)
                }
                _visit(t, e, r) {
                    {
                        let n = getBaseEncoder(t);
                        if (n) return r(t, e)
                    }
                    let n = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (n) {
                        let t = n[1],
                            i = parseInt(n[3]);
                        return i >= 0 && e.length !== i && c.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e), e.map(e => this._visit(t, e, r))
                    }
                    let i = this.types[t];
                    return i ? i.reduce((t, {
                        name: n,
                        type: i
                    }) => (t[n] = this._visit(i, e[n], r), t), {}) : c.throwArgumentError(`unknown type: ${t}`, "type", t)
                }
                visit(t, e) {
                    return this._visit(this.primaryType, t, e)
                }
                static from(t) {
                    return new TypedDataEncoder(t)
                }
                static getPrimaryType(t) {
                    return TypedDataEncoder.from(t).primaryType
                }
                static hashStruct(t, e, r) {
                    return TypedDataEncoder.from(e).hashStruct(t, r)
                }
                static hashDomain(t) {
                    let e = [];
                    for (let r in t) {
                        let n = b[r];
                        n || c.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", t), e.push({
                            name: r,
                            type: n
                        })
                    }
                    return e.sort((t, e) => A.indexOf(t.name) - A.indexOf(e.name)), TypedDataEncoder.hashStruct("EIP712Domain", {
                        EIP712Domain: e
                    }, t)
                }
                static encode(t, e, r) {
                    return (0, o.hexConcat)(["0x1901", TypedDataEncoder.hashDomain(t), TypedDataEncoder.from(e).hash(r)])
                }
                static hash(t, e, r) {
                    return (0, s.keccak256)(TypedDataEncoder.encode(t, e, r))
                }
                static resolveNames(t, e, r, n) {
                    var i, s, u, l;
                    return i = this, s = void 0, u = void 0, l = function*() {
                        t = (0, a.shallowCopy)(t);
                        let i = {};
                        t.verifyingContract && !(0, o.isHexString)(t.verifyingContract, 20) && (i[t.verifyingContract] = "0x");
                        let s = TypedDataEncoder.from(e);
                        for (let t in s.visit(r, (t, e) => ("address" !== t || (0, o.isHexString)(e, 20) || (i[e] = "0x"), e)), i) i[t] = yield n(t);
                        return t.verifyingContract && i[t.verifyingContract] && (t.verifyingContract = i[t.verifyingContract]), {
                            domain: t,
                            value: r = s.visit(r, (t, e) => "address" === t && i[e] ? i[e] : e)
                        }
                    }, new(u || (u = Promise))(function(t, e) {
                        function fulfilled(t) {
                            try {
                                step(l.next(t))
                            } catch (t) {
                                e(t)
                            }
                        }

                        function rejected(t) {
                            try {
                                step(l.throw(t))
                            } catch (t) {
                                e(t)
                            }
                        }

                        function step(e) {
                            var r;
                            e.done ? t(e.value) : ((r = e.value) instanceof u ? r : new u(function(t) {
                                t(r)
                            })).then(fulfilled, rejected)
                        }
                        step((l = l.apply(i, s || [])).next())
                    })
                }
                static getPayload(t, e, r) {
                    TypedDataEncoder.hashDomain(t);
                    let n = {},
                        s = [];
                    A.forEach(e => {
                        let r = t[e];
                        null != r && (n[e] = E[e](r), s.push({
                            name: e,
                            type: b[e]
                        }))
                    });
                    let u = TypedDataEncoder.from(e),
                        l = (0, a.shallowCopy)(e);
                    return l.EIP712Domain ? c.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", e) : l.EIP712Domain = s, u.encode(r), {
                        types: l,
                        domain: n,
                        primaryType: u.primaryType,
                        message: u.visit(r, (t, e) => {
                            if (t.match(/^bytes(\d*)/)) return (0, o.hexlify)((0, o.arrayify)(e));
                            if (t.match(/^u?int/)) return i.O$.from(e).toString();
                            switch (t) {
                                case "address":
                                    return e.toLowerCase();
                                case "bool":
                                    return !!e;
                                case "string":
                                    return "string" != typeof e && c.throwArgumentError("invalid string", "value", e), e
                            }
                            return c.throwArgumentError("unsupported type", "type", t)
                        })
                    }
                }
            }
        },
        14184: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                keccak256: function() {
                    return keccak256
                }
            });
            var n = r(26398),
                i = r.n(n),
                o = r(57273);

            function keccak256(t) {
                return "0x" + i().keccak_256((0, o.arrayify)(t))
            }
        },
        36288: function(t, e, r) {
            "use strict";
            var n, i, o, s;
            r.r(e), r.d(e, {
                ErrorCode: function() {
                    return i
                },
                LogLevel: function() {
                    return n
                },
                Logger: function() {
                    return Logger
                }
            });
            let a = !1,
                u = !1,
                l = {
                    debug: 1,
                    default: 2,
                    info: 2,
                    warning: 3,
                    error: 4,
                    off: 5
                },
                h = 2,
                c = null,
                d = function() {
                    try {
                        let t = [];
                        if (["NFD", "NFC", "NFKD", "NFKC"].forEach(e => {
                                try {
                                    if ("test" !== "test".normalize(e)) throw Error("bad normalize")
                                } catch (r) {
                                    t.push(e)
                                }
                            }), t.length) throw Error("missing " + t.join(", "));
                        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw Error("broken implementation")
                    } catch (t) {
                        return t.message
                    }
                    return null
                }();
            (o = n || (n = {})).DEBUG = "DEBUG", o.INFO = "INFO", o.WARNING = "WARNING", o.ERROR = "ERROR", o.OFF = "OFF", (s = i || (i = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR", s.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", s.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", s.NETWORK_ERROR = "NETWORK_ERROR", s.SERVER_ERROR = "SERVER_ERROR", s.TIMEOUT = "TIMEOUT", s.BUFFER_OVERRUN = "BUFFER_OVERRUN", s.NUMERIC_FAULT = "NUMERIC_FAULT", s.MISSING_NEW = "MISSING_NEW", s.INVALID_ARGUMENT = "INVALID_ARGUMENT", s.MISSING_ARGUMENT = "MISSING_ARGUMENT", s.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", s.CALL_EXCEPTION = "CALL_EXCEPTION", s.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", s.NONCE_EXPIRED = "NONCE_EXPIRED", s.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", s.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", s.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", s.ACTION_REJECTED = "ACTION_REJECTED";
            let g = "0123456789abcdef";
            let Logger = class Logger {
                constructor(t) {
                    Object.defineProperty(this, "version", {
                        enumerable: !0,
                        value: t,
                        writable: !1
                    })
                }
                _log(t, e) {
                    let r = t.toLowerCase();
                    null == l[r] && this.throwArgumentError("invalid log level name", "logLevel", t), h > l[r] || console.log.apply(console, e)
                }
                debug(...t) {
                    this._log(Logger.levels.DEBUG, t)
                }
                info(...t) {
                    this._log(Logger.levels.INFO, t)
                }
                warn(...t) {
                    this._log(Logger.levels.WARNING, t)
                }
                makeError(t, e, r) {
                    if (u) return this.makeError("censored error", e, {});
                    e || (e = Logger.errors.UNKNOWN_ERROR), r || (r = {});
                    let n = [];
                    Object.keys(r).forEach(t => {
                        let e = r[t];
                        try {
                            if (e instanceof Uint8Array) {
                                let r = "";
                                for (let t = 0; t < e.length; t++) r += g[e[t] >> 4] + g[15 & e[t]];
                                n.push(t + "=Uint8Array(0x" + r + ")")
                            } else n.push(t + "=" + JSON.stringify(e))
                        } catch (e) {
                            n.push(t + "=" + JSON.stringify(r[t].toString()))
                        }
                    }), n.push(`code=${e}`), n.push(`version=${this.version}`);
                    let o = t,
                        s = "";
                    switch (e) {
                        case i.NUMERIC_FAULT:
                            {
                                s = "NUMERIC_FAULT";
                                let e = t;
                                switch (e) {
                                    case "overflow":
                                    case "underflow":
                                    case "division-by-zero":
                                        s += "-" + e;
                                        break;
                                    case "negative-power":
                                    case "negative-width":
                                        s += "-unsupported";
                                        break;
                                    case "unbound-bitwise-result":
                                        s += "-unbound-result"
                                }
                                break
                            }
                        case i.CALL_EXCEPTION:
                        case i.INSUFFICIENT_FUNDS:
                        case i.MISSING_NEW:
                        case i.NONCE_EXPIRED:
                        case i.REPLACEMENT_UNDERPRICED:
                        case i.TRANSACTION_REPLACED:
                        case i.UNPREDICTABLE_GAS_LIMIT:
                            s = e
                    }
                    s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"), n.length && (t += " (" + n.join(", ") + ")");
                    let a = Error(t);
                    return a.reason = o, a.code = e, Object.keys(r).forEach(function(t) {
                        a[t] = r[t]
                    }), a
                }
                throwError(t, e, r) {
                    throw this.makeError(t, e, r)
                }
                throwArgumentError(t, e, r) {
                    return this.throwError(t, Logger.errors.INVALID_ARGUMENT, {
                        argument: e,
                        value: r
                    })
                }
                assert(t, e, r, n) {
                    t || this.throwError(e, r, n)
                }
                assertArgument(t, e, r, n) {
                    t || this.throwArgumentError(e, r, n)
                }
                checkNormalize(t) {
                    null == t && (t = "platform missing String.prototype.normalize"), d && this.throwError("platform missing String.prototype.normalize", Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: d
                    })
                }
                checkSafeUint53(t, e) {
                    "number" == typeof t && (null == e && (e = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(e, Logger.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: t
                    }), t % 1 && this.throwError(e, Logger.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: t
                    }))
                }
                checkArgumentCount(t, e, r) {
                    r = r ? ": " + r : "", t < e && this.throwError("missing argument" + r, Logger.errors.MISSING_ARGUMENT, {
                        count: t,
                        expectedCount: e
                    }), t > e && this.throwError("too many arguments" + r, Logger.errors.UNEXPECTED_ARGUMENT, {
                        count: t,
                        expectedCount: e
                    })
                }
                checkNew(t, e) {
                    (t === Object || null == t) && this.throwError("missing new", Logger.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                checkAbstract(t, e) {
                    t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", Logger.errors.UNSUPPORTED_OPERATION, {
                        name: t.name,
                        operation: "new"
                    }) : (t === Object || null == t) && this.throwError("missing new", Logger.errors.MISSING_NEW, {
                        name: e.name
                    })
                }
                static globalLogger() {
                    return c || (c = new Logger("logger/5.7.0")), c
                }
                static setCensorship(t, e) {
                    if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        }), a) {
                        if (!t) return;
                        this.globalLogger().throwError("error censorship permanent", Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    u = !!t, a = !!e
                }
                static setLogLevel(t) {
                    let e = l[t.toLowerCase()];
                    if (null == e) {
                        Logger.globalLogger().warn("invalid log level - " + t);
                        return
                    }
                    h = e
                }
                static from(t) {
                    return new Logger(t)
                }
            };
            Logger.errors = i, Logger.levels = n
        },
        30795: function(t, e, r) {
            "use strict";
            r.d(e, {
                H: function() {
                    return getNetwork
                }
            });
            var n = r(36288);
            let i = new n.Logger("networks/5.7.1");

            function ethDefaultProvider(t) {
                let func = function(e, r) {
                    null == r && (r = {});
                    let n = [];
                    if (e.InfuraProvider && "-" !== r.infura) try {
                        n.push(new e.InfuraProvider(t, r.infura))
                    } catch (t) {}
                    if (e.EtherscanProvider && "-" !== r.etherscan) try {
                        n.push(new e.EtherscanProvider(t, r.etherscan))
                    } catch (t) {}
                    if (e.AlchemyProvider && "-" !== r.alchemy) try {
                        n.push(new e.AlchemyProvider(t, r.alchemy))
                    } catch (t) {}
                    if (e.PocketProvider && "-" !== r.pocket) try {
                        let i = new e.PocketProvider(t, r.pocket);
                        i.network && -1 === ["goerli", "ropsten", "rinkeby", "sepolia"].indexOf(i.network.name) && n.push(i)
                    } catch (t) {}
                    if (e.CloudflareProvider && "-" !== r.cloudflare) try {
                        n.push(new e.CloudflareProvider(t))
                    } catch (t) {}
                    if (e.AnkrProvider && "-" !== r.ankr) try {
                        let i = new e.AnkrProvider(t, r.ankr);
                        i.network && -1 === ["ropsten"].indexOf(i.network.name) && n.push(i)
                    } catch (t) {}
                    if (0 === n.length) return null;
                    if (e.FallbackProvider) {
                        let i = 1;
                        return null != r.quorum ? i = r.quorum : "homestead" === t && (i = 2), new e.FallbackProvider(n, i)
                    }
                    return n[0]
                };
                return func.renetwork = function(t) {
                    return ethDefaultProvider(t)
                }, func
            }

            function etcDefaultProvider(t, e) {
                let func = function(r, n) {
                    return r.JsonRpcProvider ? new r.JsonRpcProvider(t, e) : null
                };
                return func.renetwork = function(e) {
                    return etcDefaultProvider(t, e)
                }, func
            }
            let o = {
                    chainId: 1,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "homestead",
                    _defaultProvider: ethDefaultProvider("homestead")
                },
                s = {
                    chainId: 3,
                    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                    name: "ropsten",
                    _defaultProvider: ethDefaultProvider("ropsten")
                },
                a = {
                    chainId: 63,
                    name: "classicMordor",
                    _defaultProvider: etcDefaultProvider("https://www.ethercluster.com/mordor", "classicMordor")
                },
                u = {
                    unspecified: {
                        chainId: 0,
                        name: "unspecified"
                    },
                    homestead: o,
                    mainnet: o,
                    morden: {
                        chainId: 2,
                        name: "morden"
                    },
                    ropsten: s,
                    testnet: s,
                    rinkeby: {
                        chainId: 4,
                        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        name: "rinkeby",
                        _defaultProvider: ethDefaultProvider("rinkeby")
                    },
                    kovan: {
                        chainId: 42,
                        name: "kovan",
                        _defaultProvider: ethDefaultProvider("kovan")
                    },
                    goerli: {
                        chainId: 5,
                        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                        name: "goerli",
                        _defaultProvider: ethDefaultProvider("goerli")
                    },
                    kintsugi: {
                        chainId: 1337702,
                        name: "kintsugi"
                    },
                    sepolia: {
                        chainId: 11155111,
                        name: "sepolia",
                        _defaultProvider: ethDefaultProvider("sepolia")
                    },
                    classic: {
                        chainId: 61,
                        name: "classic",
                        _defaultProvider: etcDefaultProvider("https://www.ethercluster.com/etc", "classic")
                    },
                    classicMorden: {
                        chainId: 62,
                        name: "classicMorden"
                    },
                    classicMordor: a,
                    classicTestnet: a,
                    classicKotti: {
                        chainId: 6,
                        name: "classicKotti",
                        _defaultProvider: etcDefaultProvider("https://www.ethercluster.com/kotti", "classicKotti")
                    },
                    xdai: {
                        chainId: 100,
                        name: "xdai"
                    },
                    matic: {
                        chainId: 137,
                        name: "matic",
                        _defaultProvider: ethDefaultProvider("matic")
                    },
                    maticmum: {
                        chainId: 80001,
                        name: "maticmum"
                    },
                    optimism: {
                        chainId: 10,
                        name: "optimism",
                        _defaultProvider: ethDefaultProvider("optimism")
                    },
                    "optimism-kovan": {
                        chainId: 69,
                        name: "optimism-kovan"
                    },
                    "optimism-goerli": {
                        chainId: 420,
                        name: "optimism-goerli"
                    },
                    arbitrum: {
                        chainId: 42161,
                        name: "arbitrum"
                    },
                    "arbitrum-rinkeby": {
                        chainId: 421611,
                        name: "arbitrum-rinkeby"
                    },
                    "arbitrum-goerli": {
                        chainId: 421613,
                        name: "arbitrum-goerli"
                    },
                    bnb: {
                        chainId: 56,
                        name: "bnb"
                    },
                    bnbt: {
                        chainId: 97,
                        name: "bnbt"
                    }
                };

            function getNetwork(t) {
                if (null == t) return null;
                if ("number" == typeof t) {
                    for (let e in u) {
                        let r = u[e];
                        if (r.chainId === t) return {
                            name: r.name,
                            chainId: r.chainId,
                            ensAddress: r.ensAddress || null,
                            _defaultProvider: r._defaultProvider || null
                        }
                    }
                    return {
                        chainId: t,
                        name: "unknown"
                    }
                }
                if ("string" == typeof t) {
                    let e = u[t];
                    return null == e ? null : {
                        name: e.name,
                        chainId: e.chainId,
                        ensAddress: e.ensAddress,
                        _defaultProvider: e._defaultProvider || null
                    }
                }
                let e = u[t.name];
                if (!e) return "number" != typeof t.chainId && i.throwArgumentError("invalid network chainId", "network", t), t;
                0 !== t.chainId && t.chainId !== e.chainId && i.throwArgumentError("network chainId mismatch", "network", t);
                let r = t._defaultProvider || null;
                if (null == r && e._defaultProvider) {
                    var n;
                    r = (n = e._defaultProvider) && "function" == typeof n.renetwork ? e._defaultProvider.renetwork(t) : e._defaultProvider
                }
                return {
                    name: t.name,
                    chainId: e.chainId,
                    ensAddress: t.ensAddress || e.ensAddress || null,
                    _defaultProvider: r
                }
            }
        },
        17213: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                Description: function() {
                    return Description
                },
                checkProperties: function() {
                    return checkProperties
                },
                deepCopy: function() {
                    return deepCopy
                },
                defineReadOnly: function() {
                    return defineReadOnly
                },
                getStatic: function() {
                    return getStatic
                },
                resolveProperties: function() {
                    return resolveProperties
                },
                shallowCopy: function() {
                    return shallowCopy
                }
            });
            var n = r(36288);
            let i = new n.Logger("properties/5.7.0");

            function defineReadOnly(t, e, r) {
                Object.defineProperty(t, e, {
                    enumerable: !0,
                    value: r,
                    writable: !1
                })
            }

            function getStatic(t, e) {
                for (let r = 0; r < 32; r++) {
                    if (t[e]) return t[e];
                    if (!t.prototype || "object" != typeof t.prototype) break;
                    t = Object.getPrototypeOf(t.prototype).constructor
                }
                return null
            }

            function resolveProperties(t) {
                var e, r, n, i;
                return e = this, r = void 0, n = void 0, i = function*() {
                    let e = Object.keys(t).map(e => {
                            let r = t[e];
                            return Promise.resolve(r).then(t => ({
                                key: e,
                                value: t
                            }))
                        }),
                        r = yield Promise.all(e);
                    return r.reduce((t, e) => (t[e.key] = e.value, t), {})
                }, new(n || (n = Promise))(function(t, o) {
                    function fulfilled(t) {
                        try {
                            step(i.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function rejected(t) {
                        try {
                            step(i.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function step(e) {
                        var r;
                        e.done ? t(e.value) : ((r = e.value) instanceof n ? r : new n(function(t) {
                            t(r)
                        })).then(fulfilled, rejected)
                    }
                    step((i = i.apply(e, r || [])).next())
                })
            }

            function checkProperties(t, e) {
                t && "object" == typeof t || i.throwArgumentError("invalid object", "object", t), Object.keys(t).forEach(r => {
                    e[r] || i.throwArgumentError("invalid object key - " + r, "transaction:" + r, t)
                })
            }

            function shallowCopy(t) {
                let e = {};
                for (let r in t) e[r] = t[r];
                return e
            }
            let o = {
                bigint: !0,
                boolean: !0,
                function: !0,
                number: !0,
                string: !0
            };

            function deepCopy(t) {
                return function(t) {
                    if (function _isFrozen(t) {
                            if (null == t || o[typeof t]) return !0;
                            if (Array.isArray(t) || "object" == typeof t) {
                                if (!Object.isFrozen(t)) return !1;
                                let e = Object.keys(t);
                                for (let r = 0; r < e.length; r++) {
                                    let n = null;
                                    try {
                                        n = t[e[r]]
                                    } catch (t) {
                                        continue
                                    }
                                    if (!_isFrozen(n)) return !1
                                }
                                return !0
                            }
                            return i.throwArgumentError(`Cannot deepCopy ${typeof t}`, "object", t)
                        }(t)) return t;
                    if (Array.isArray(t)) return Object.freeze(t.map(t => deepCopy(t)));
                    if ("object" == typeof t) {
                        let e = {};
                        for (let r in t) {
                            let n = t[r];
                            void 0 !== n && defineReadOnly(e, r, deepCopy(n))
                        }
                        return e
                    }
                    return i.throwArgumentError(`Cannot deepCopy ${typeof t}`, "object", t)
                }(t)
            }
            let Description = class Description {
                constructor(t) {
                    for (let e in t) this[e] = deepCopy(t[e])
                }
            }
        },
        12312: function(t, e, r) {
            "use strict";
            r.d(e, {
                i: function() {
                    return n
                }
            });
            let n = "providers/5.7.2"
        },
        26790: function(t, e, r) {
            "use strict";
            r.d(e, {
                H2: function() {
                    return Resolver
                },
                Zk: function() {
                    return BaseProvider
                }
            });
            var n = r(94999),
                i = r(72275),
                o = r(63221),
                s = r(92598),
                a = r(57273),
                u = r(76726),
                l = r(66007),
                h = r(30795),
                c = r(17213),
                d = r(37815),
                g = r(58337),
                m = r(39318),
                p = r(76942),
                y = r.n(p),
                v = r(36288),
                w = r(12312),
                b = r(54259),
                __awaiter = function(t, e, r, n) {
                    return new(r || (r = Promise))(function(i, o) {
                        function fulfilled(t) {
                            try {
                                step(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function rejected(t) {
                            try {
                                step(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function step(t) {
                            var e;
                            t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                                t(e)
                            })).then(fulfilled, rejected)
                        }
                        step((n = n.apply(t, e || [])).next())
                    })
                };
            let A = new v.Logger(w.i);

            function checkTopic(t) {
                return null == t ? "null" : (32 !== (0, a.hexDataLength)(t) && A.throwArgumentError("invalid topic", "topic", t), t.toLowerCase())
            }

            function serializeTopics(t) {
                for (t = t.slice(); t.length > 0 && null == t[t.length - 1];) t.pop();
                return t.map(t => {
                    if (!Array.isArray(t)) return checkTopic(t); {
                        let e = {};
                        t.forEach(t => {
                            e[checkTopic(t)] = !0
                        });
                        let r = Object.keys(e);
                        return r.sort(), r.join("|")
                    }
                }).join("&")
            }

            function getEventTag(t) {
                if ("string" == typeof t) {
                    if (t = t.toLowerCase(), 32 === (0, a.hexDataLength)(t)) return "tx:" + t;
                    if (-1 === t.indexOf(":")) return t
                } else if (Array.isArray(t)) return "filter:*:" + serializeTopics(t);
                else if (n.Sg.isForkEvent(t)) throw A.warn("not implemented"), Error("not implemented");
                else if (t && "object" == typeof t) return "filter:" + (t.address || "*") + ":" + serializeTopics(t.topics || []);
                throw Error("invalid event - " + t)
            }

            function getTime() {
                return new Date().getTime()
            }

            function stall(t) {
                return new Promise(e => {
                    setTimeout(e, t)
                })
            }
            let E = ["block", "network", "pending", "poll"];
            let Event = class Event {
                constructor(t, e, r) {
                    (0, c.defineReadOnly)(this, "tag", t), (0, c.defineReadOnly)(this, "listener", e), (0, c.defineReadOnly)(this, "once", r), this._lastBlockNumber = -2, this._inflight = !1
                }
                get event() {
                    switch (this.type) {
                        case "tx":
                            return this.hash;
                        case "filter":
                            return this.filter
                    }
                    return this.tag
                }
                get type() {
                    return this.tag.split(":")[0]
                }
                get hash() {
                    let t = this.tag.split(":");
                    return "tx" !== t[0] ? null : t[1]
                }
                get filter() {
                    var t;
                    let e = this.tag.split(":");
                    if ("filter" !== e[0]) return null;
                    let r = e[1],
                        n = "" === (t = e[2]) ? [] : t.split(/&/g).map(t => {
                            if ("" === t) return [];
                            let e = t.split("|").map(t => "null" === t ? null : t);
                            return 1 === e.length ? e[0] : e
                        }),
                        i = {};
                    return n.length > 0 && (i.topics = n), r && "*" !== r && (i.address = r), i
                }
                pollable() {
                    return this.tag.indexOf(":") >= 0 || E.indexOf(this.tag) >= 0
                }
            };
            let _ = {
                0: {
                    symbol: "btc",
                    p2pkh: 0,
                    p2sh: 5,
                    prefix: "bc"
                },
                2: {
                    symbol: "ltc",
                    p2pkh: 48,
                    p2sh: 50,
                    prefix: "ltc"
                },
                3: {
                    symbol: "doge",
                    p2pkh: 30,
                    p2sh: 22
                },
                60: {
                    symbol: "eth",
                    ilk: "eth"
                },
                61: {
                    symbol: "etc",
                    ilk: "eth"
                },
                700: {
                    symbol: "xdai",
                    ilk: "eth"
                }
            };

            function bytes32ify(t) {
                return (0, a.hexZeroPad)(s.O$.from(t).toHexString(), 32)
            }

            function base58Encode(t) {
                return o.Base58.encode((0, a.concat)([t, (0, a.hexDataSlice)((0, d.JQ)((0, d.JQ)(t)), 0, 4)]))
            }
            let N = RegExp("^(ipfs)://(.*)$", "i"),
                x = [RegExp("^(https)://(.*)$", "i"), RegExp("^(data):(.*)$", "i"), N, RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];

            function _parseString(t, e) {
                try {
                    return (0, g.ZN)(_parseBytes(t, e))
                } catch (t) {}
                return null
            }

            function _parseBytes(t, e) {
                if ("0x" === t) return null;
                let r = s.O$.from((0, a.hexDataSlice)(t, e, e + 32)).toNumber(),
                    n = s.O$.from((0, a.hexDataSlice)(t, r, r + 32)).toNumber();
                return (0, a.hexDataSlice)(t, r + 32, r + 32 + n)
            }

            function getIpfsLink(t) {
                return t.match(/^ipfs:\/\/ipfs\//i) ? t = t.substring(12) : t.match(/^ipfs:\/\//i) ? t = t.substring(7) : A.throwArgumentError("unsupported IPFS format", "link", t), `https://gateway.ipfs.io/ipfs/${t}`
            }

            function numPad(t) {
                let e = (0, a.arrayify)(t);
                if (e.length > 32) throw Error("internal; should not happen");
                let r = new Uint8Array(32);
                return r.set(e, 32 - e.length), r
            }

            function encodeBytes(t) {
                let e = [],
                    r = 0;
                for (let n = 0; n < t.length; n++) e.push(null), r += 32;
                for (let n = 0; n < t.length; n++) {
                    let i = (0, a.arrayify)(t[n]);
                    e[n] = numPad(r), e.push(numPad(i.length)), e.push(function(t) {
                        if (t.length % 32 == 0) return t;
                        let e = new Uint8Array(32 * Math.ceil(t.length / 32));
                        return e.set(t), e
                    }(i)), r += 32 + 32 * Math.ceil(i.length / 32)
                }
                return (0, a.hexConcat)(e)
            }
            let Resolver = class Resolver {
                constructor(t, e, r, n) {
                    (0, c.defineReadOnly)(this, "provider", t), (0, c.defineReadOnly)(this, "name", r), (0, c.defineReadOnly)(this, "address", t.formatter.address(e)), (0, c.defineReadOnly)(this, "_resolvedAddress", n)
                }
                supportsWildcard() {
                    return this._supportsEip2544 || (this._supportsEip2544 = this.provider.call({
                        to: this.address,
                        data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"
                    }).then(t => s.O$.from(t).eq(1)).catch(t => {
                        if (t.code === v.Logger.errors.CALL_EXCEPTION) return !1;
                        throw this._supportsEip2544 = null, t
                    })), this._supportsEip2544
                }
                _fetch(t, e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let r = {
                                to: this.address,
                                ccipReadEnabled: !0,
                                data: (0, a.hexConcat)([t, (0, l.VM)(this.name), e || "0x"])
                            },
                            n = !1;
                        (yield this.supportsWildcard()) && (n = !0, r.data = (0, a.hexConcat)(["0x9061b923", encodeBytes([(0, l.Kn)(this.name), r.data])]));
                        try {
                            let t = yield this.provider.call(r);
                            return (0, a.arrayify)(t).length % 32 == 4 && A.throwError("resolver threw error", v.Logger.errors.CALL_EXCEPTION, {
                                transaction: r,
                                data: t
                            }), n && (t = _parseBytes(t, 0)), t
                        } catch (t) {
                            if (t.code === v.Logger.errors.CALL_EXCEPTION) return null;
                            throw t
                        }
                    })
                }
                _fetchBytes(t, e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let r = yield this._fetch(t, e);
                        return null != r ? _parseBytes(r, 0) : null
                    })
                }
                _getAddress(t, e) {
                    let r = _[String(t)];
                    if (null == r && A.throwError(`unsupported coin type: ${t}`, v.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: `getAddress(${t})`
                        }), "eth" === r.ilk) return this.provider.formatter.address(e);
                    let n = (0, a.arrayify)(e);
                    if (null != r.p2pkh) {
                        let t = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
                        if (t) {
                            let e = parseInt(t[1], 16);
                            if (t[2].length === 2 * e && e >= 1 && e <= 75) return base58Encode((0, a.concat)([
                                [r.p2pkh], "0x" + t[2]
                            ]))
                        }
                    }
                    if (null != r.p2sh) {
                        let t = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
                        if (t) {
                            let e = parseInt(t[1], 16);
                            if (t[2].length === 2 * e && e >= 1 && e <= 75) return base58Encode((0, a.concat)([
                                [r.p2sh], "0x" + t[2]
                            ]))
                        }
                    }
                    if (null != r.prefix) {
                        let t = n[1],
                            e = n[0];
                        if (0 === e ? 20 !== t && 32 !== t && (e = -1) : e = -1, e >= 0 && n.length === 2 + t && t >= 1 && t <= 75) {
                            let t = y().toWords(n.slice(2));
                            return t.unshift(e), y().encode(r.prefix, t)
                        }
                    }
                    return null
                }
                getAddress(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        if (null == t && (t = 60), 60 === t) try {
                            let t = yield this._fetch("0x3b3b57de");
                            if ("0x" === t || t === u.R) return null;
                            return this.provider.formatter.callAddress(t)
                        } catch (t) {
                            if (t.code === v.Logger.errors.CALL_EXCEPTION) return null;
                            throw t
                        }
                        let e = yield this._fetchBytes("0xf1cb7e06", bytes32ify(t));
                        if (null == e || "0x" === e) return null;
                        let r = this._getAddress(t, e);
                        return null == r && A.throwError("invalid or unsupported coin data", v.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: `getAddress(${t})`,
                            coinType: t,
                            data: e
                        }), r
                    })
                }
                getAvatar() {
                    return __awaiter(this, void 0, void 0, function*() {
                        let t = [{
                            type: "name",
                            content: this.name
                        }];
                        try {
                            let e = yield this.getText("avatar");
                            if (null == e) return null;
                            for (let r = 0; r < x.length; r++) {
                                let n = e.match(x[r]);
                                if (null == n) continue;
                                let i = n[1].toLowerCase();
                                switch (i) {
                                    case "https":
                                        return t.push({
                                            type: "url",
                                            content: e
                                        }), {
                                            linkage: t,
                                            url: e
                                        };
                                    case "data":
                                        return t.push({
                                            type: "data",
                                            content: e
                                        }), {
                                            linkage: t,
                                            url: e
                                        };
                                    case "ipfs":
                                        return t.push({
                                            type: "ipfs",
                                            content: e
                                        }), {
                                            linkage: t,
                                            url: getIpfsLink(e)
                                        };
                                    case "erc721":
                                    case "erc1155":
                                        {
                                            let r = "erc721" === i ? "0xc87b56dd" : "0x0e89341c";t.push({
                                                type: i,
                                                content: e
                                            });
                                            let o = this._resolvedAddress || (yield this.getAddress()),
                                                u = (n[2] || "").split("/");
                                            if (2 !== u.length) return null;
                                            let l = yield this.provider.formatter.address(u[0]), h = (0, a.hexZeroPad)(s.O$.from(u[1]).toHexString(), 32);
                                            if ("erc721" === i) {
                                                let e = this.provider.formatter.callAddress((yield this.provider.call({
                                                    to: l,
                                                    data: (0, a.hexConcat)(["0x6352211e", h])
                                                })));
                                                if (o !== e) return null;
                                                t.push({
                                                    type: "owner",
                                                    content: e
                                                })
                                            } else if ("erc1155" === i) {
                                                let e = s.O$.from((yield this.provider.call({
                                                    to: l,
                                                    data: (0, a.hexConcat)(["0x00fdd58e", (0, a.hexZeroPad)(o, 32), h])
                                                })));
                                                if (e.isZero()) return null;
                                                t.push({
                                                    type: "balance",
                                                    content: e.toString()
                                                })
                                            }
                                            let c = {
                                                    to: this.provider.formatter.address(u[0]),
                                                    data: (0, a.hexConcat)([r, h])
                                                },
                                                d = _parseString((yield this.provider.call(c)), 0);
                                            if (null == d) return null;t.push({
                                                type: "metadata-url-base",
                                                content: d
                                            }),
                                            "erc1155" === i && (d = d.replace("{id}", h.substring(2)), t.push({
                                                type: "metadata-url-expanded",
                                                content: d
                                            })),
                                            d.match(/^ipfs:/i) && (d = getIpfsLink(d)),
                                            t.push({
                                                type: "metadata-url",
                                                content: d
                                            });
                                            let g = yield(0, m.fetchJson)(d);
                                            if (!g) return null;t.push({
                                                type: "metadata",
                                                content: JSON.stringify(g)
                                            });
                                            let p = g.image;
                                            if ("string" != typeof p) return null;
                                            if (p.match(/^(https:\/\/|data:)/i));
                                            else {
                                                let e = p.match(N);
                                                if (null == e) return null;
                                                t.push({
                                                    type: "url-ipfs",
                                                    content: p
                                                }), p = getIpfsLink(p)
                                            }
                                            return t.push({
                                                type: "url",
                                                content: p
                                            }),
                                            {
                                                linkage: t,
                                                url: p
                                            }
                                        }
                                }
                            }
                        } catch (t) {}
                        return null
                    })
                }
                getContentHash() {
                    return __awaiter(this, void 0, void 0, function*() {
                        let t = yield this._fetchBytes("0xbc1c58d1");
                        if (null == t || "0x" === t) return null;
                        let e = t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (e) {
                            let t = parseInt(e[3], 16);
                            if (e[4].length === 2 * t) return "ipfs://" + o.Base58.encode("0x" + e[1])
                        }
                        let r = t.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                        if (r) {
                            let t = parseInt(r[3], 16);
                            if (r[4].length === 2 * t) return "ipns://" + o.Base58.encode("0x" + r[1])
                        }
                        let n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
                        if (n && 64 === n[1].length) return "bzz://" + n[1];
                        let s = t.match(/^0x90b2c605([0-9a-f]*)$/);
                        if (s && 68 === s[1].length) {
                            let t = {
                                    "=": "",
                                    "+": "-",
                                    "/": "_"
                                },
                                e = (0, i.c)("0x" + s[1]).replace(/[=+\/]/g, e => t[e]);
                            return "sia://" + e
                        }
                        return A.throwError("invalid or unsupported content hash data", v.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "getContentHash()",
                            data: t
                        })
                    })
                }
                getText(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let e = (0, g.Y0)(t);
                        (e = (0, a.concat)([bytes32ify(64), bytes32ify(e.length), e])).length % 32 != 0 && (e = (0, a.concat)([e, (0, a.hexZeroPad)("0x", 32 - t.length % 32)]));
                        let r = yield this._fetchBytes("0x59d1d43c", (0, a.hexlify)(e));
                        return null == r || "0x" === r ? null : (0, g.ZN)(r)
                    })
                }
            };
            let k = null,
                S = 1;
            let BaseProvider = class BaseProvider extends n.zt {
                constructor(t) {
                    if (super(), this._events = [], this._emitted = {
                            block: -2
                        }, this.disableCcipRead = !1, this.formatter = new.target.getFormatter(), (0, c.defineReadOnly)(this, "anyNetwork", "any" === t), this.anyNetwork && (t = this.detectNetwork()), t instanceof Promise) this._networkPromise = t, t.catch(t => {}), this._ready().catch(t => {});
                    else {
                        let e = (0, c.getStatic)(new.target, "getNetwork")(t);
                        e ? ((0, c.defineReadOnly)(this, "_network", e), this.emit("network", e, null)) : A.throwArgumentError("invalid network", "network", t)
                    }
                    this._maxInternalBlockNumber = -1024, this._lastBlockNumber = -2, this._maxFilterBlockRange = 10, this._pollingInterval = 4e3, this._fastQueryDate = 0
                }
                _ready() {
                    return __awaiter(this, void 0, void 0, function*() {
                        if (null == this._network) {
                            let t = null;
                            if (this._networkPromise) try {
                                t = yield this._networkPromise
                            } catch (t) {}
                            null == t && (t = yield this.detectNetwork()), t || A.throwError("no network detected", v.Logger.errors.UNKNOWN_ERROR, {}), null == this._network && (this.anyNetwork ? this._network = t : (0, c.defineReadOnly)(this, "_network", t), this.emit("network", t, null))
                        }
                        return this._network
                    })
                }
                get ready() {
                    return (0, m.poll)(() => this._ready().then(t => t, t => {
                        if (t.code !== v.Logger.errors.NETWORK_ERROR || "noNetwork" !== t.event) throw t
                    }))
                }
                static getFormatter() {
                    return null == k && (k = new b.Mb), k
                }
                static getNetwork(t) {
                    return (0, h.H)(null == t ? "homestead" : t)
                }
                ccipReadFetch(t, e, r) {
                    return __awaiter(this, void 0, void 0, function*() {
                        if (this.disableCcipRead || 0 === r.length) return null;
                        let n = t.to.toLowerCase(),
                            i = e.toLowerCase(),
                            o = [];
                        for (let t = 0; t < r.length; t++) {
                            let e = r[t],
                                s = e.replace("{sender}", n).replace("{data}", i),
                                a = e.indexOf("{data}") >= 0 ? null : JSON.stringify({
                                    data: i,
                                    sender: n
                                }),
                                u = yield(0, m.fetchJson)({
                                    url: s,
                                    errorPassThrough: !0
                                }, a, (t, e) => (t.status = e.statusCode, t));
                            if (u.data) return u.data;
                            let l = u.message || "unknown error";
                            if (u.status >= 400 && u.status < 500) return A.throwError(`response not found during CCIP fetch: ${l}`, v.Logger.errors.SERVER_ERROR, {
                                url: e,
                                errorMessage: l
                            });
                            o.push(l)
                        }
                        return A.throwError(`error encountered during CCIP fetch: ${o.map(t=>JSON.stringify(t)).join(", ")}`, v.Logger.errors.SERVER_ERROR, {
                            urls: r,
                            errorMessages: o
                        })
                    })
                }
                _getInternalBlockNumber(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        if (yield this._ready(), t > 0)
                            for (; this._internalBlockNumber;) {
                                let e = this._internalBlockNumber;
                                try {
                                    let r = yield e;
                                    if (getTime() - r.respTime <= t) return r.blockNumber;
                                    break
                                } catch (t) {
                                    if (this._internalBlockNumber === e) break
                                }
                            }
                        let e = getTime(),
                            r = (0, c.resolveProperties)({
                                blockNumber: this.perform("getBlockNumber", {}),
                                networkError: this.getNetwork().then(t => null, t => t)
                            }).then(({
                                blockNumber: t,
                                networkError: n
                            }) => {
                                if (n) throw this._internalBlockNumber === r && (this._internalBlockNumber = null), n;
                                let i = getTime();
                                return (t = s.O$.from(t).toNumber()) < this._maxInternalBlockNumber && (t = this._maxInternalBlockNumber), this._maxInternalBlockNumber = t, this._setFastBlockNumber(t), {
                                    blockNumber: t,
                                    reqTime: e,
                                    respTime: i
                                }
                            });
                        return this._internalBlockNumber = r, r.catch(t => {
                            this._internalBlockNumber === r && (this._internalBlockNumber = null)
                        }), (yield r).blockNumber
                    })
                }
                poll() {
                    return __awaiter(this, void 0, void 0, function*() {
                        let t = S++,
                            e = [],
                            r = null;
                        try {
                            r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2)
                        } catch (t) {
                            this.emit("error", t);
                            return
                        }
                        if (this._setFastBlockNumber(r), this.emit("poll", t, r), r === this._lastBlockNumber) {
                            this.emit("didPoll", t);
                            return
                        }
                        if (-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3) A.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`), this.emit("error", A.makeError("network block skew detected", v.Logger.errors.NETWORK_ERROR, {
                            blockNumber: r,
                            event: "blockSkew",
                            previousBlockNumber: this._emitted.block
                        })), this.emit("block", r);
                        else
                            for (let t = this._emitted.block + 1; t <= r; t++) this.emit("block", t);
                        this._emitted.block !== r && (this._emitted.block = r, Object.keys(this._emitted).forEach(t => {
                            if ("block" === t) return;
                            let e = this._emitted[t];
                            "pending" !== e && r - e > 12 && delete this._emitted[t]
                        })), -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1), this._events.forEach(t => {
                            switch (t.type) {
                                case "tx":
                                    {
                                        let r = t.hash,
                                            n = this.getTransactionReceipt(r).then(t => (t && null != t.blockNumber && (this._emitted["t:" + r] = t.blockNumber, this.emit(r, t)), null)).catch(t => {
                                                this.emit("error", t)
                                            });e.push(n);
                                        break
                                    }
                                case "filter":
                                    if (!t._inflight) {
                                        t._inflight = !0, -2 === t._lastBlockNumber && (t._lastBlockNumber = r - 1);
                                        let n = t.filter;
                                        n.fromBlock = t._lastBlockNumber + 1, n.toBlock = r;
                                        let i = n.toBlock - this._maxFilterBlockRange;
                                        i > n.fromBlock && (n.fromBlock = i), n.fromBlock < 0 && (n.fromBlock = 0);
                                        let o = this.getLogs(n).then(e => {
                                            t._inflight = !1, 0 !== e.length && e.forEach(e => {
                                                e.blockNumber > t._lastBlockNumber && (t._lastBlockNumber = e.blockNumber), this._emitted["b:" + e.blockHash] = e.blockNumber, this._emitted["t:" + e.transactionHash] = e.blockNumber, this.emit(n, e)
                                            })
                                        }).catch(e => {
                                            this.emit("error", e), t._inflight = !1
                                        });
                                        e.push(o)
                                    }
                            }
                        }), this._lastBlockNumber = r, Promise.all(e).then(() => {
                            this.emit("didPoll", t)
                        }).catch(t => {
                            this.emit("error", t)
                        })
                    })
                }
                resetEventsBlock(t) {
                    this._lastBlockNumber = t - 1, this.polling && this.poll()
                }
                get network() {
                    return this._network
                }
                detectNetwork() {
                    return __awaiter(this, void 0, void 0, function*() {
                        return A.throwError("provider does not support network detection", v.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "provider.detectNetwork"
                        })
                    })
                }
                getNetwork() {
                    return __awaiter(this, void 0, void 0, function*() {
                        let t = yield this._ready(), e = yield this.detectNetwork();
                        if (t.chainId !== e.chainId) {
                            if (this.anyNetwork) return this._network = e, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, this.emit("network", e, t), yield stall(0), this._network;
                            let r = A.makeError("underlying network changed", v.Logger.errors.NETWORK_ERROR, {
                                event: "changed",
                                network: t,
                                detectedNetwork: e
                            });
                            throw this.emit("error", r), r
                        }
                        return t
                    })
                }
                get blockNumber() {
                    return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(t => {
                        this._setFastBlockNumber(t)
                    }, t => {}), null != this._fastBlockNumber ? this._fastBlockNumber : -1
                }
                get polling() {
                    return null != this._poller
                }
                set polling(t) {
                    t && !this._poller ? (this._poller = setInterval(() => {
                        this.poll()
                    }, this.pollingInterval), this._bootstrapPoll || (this._bootstrapPoll = setTimeout(() => {
                        this.poll(), this._bootstrapPoll = setTimeout(() => {
                            this._poller || this.poll(), this._bootstrapPoll = null
                        }, this.pollingInterval)
                    }, 0))) : !t && this._poller && (clearInterval(this._poller), this._poller = null)
                }
                get pollingInterval() {
                    return this._pollingInterval
                }
                set pollingInterval(t) {
                    if ("number" != typeof t || t <= 0 || parseInt(String(t)) != t) throw Error("invalid polling interval");
                    this._pollingInterval = t, this._poller && (clearInterval(this._poller), this._poller = setInterval(() => {
                        this.poll()
                    }, this._pollingInterval))
                }
                _getFastBlockNumber() {
                    let t = getTime();
                    return t - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = t, this._fastBlockNumberPromise = this.getBlockNumber().then(t => ((null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t), this._fastBlockNumber))), this._fastBlockNumberPromise
                }
                _setFastBlockNumber(t) {
                    (null == this._fastBlockNumber || !(t < this._fastBlockNumber)) && (this._fastQueryDate = getTime(), (null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t, this._fastBlockNumberPromise = Promise.resolve(t)))
                }
                waitForTransaction(t, e, r) {
                    return __awaiter(this, void 0, void 0, function*() {
                        return this._waitForTransaction(t, null == e ? 1 : e, r || 0, null)
                    })
                }
                _waitForTransaction(t, e, r, n) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let i = yield this.getTransactionReceipt(t);
                        return (i ? i.confirmations : 0) >= e ? i : new Promise((i, o) => {
                            let s = [],
                                a = !1,
                                alreadyDone = function() {
                                    return !!a || (a = !0, s.forEach(t => {
                                        t()
                                    }), !1)
                                },
                                minedHandler = t => {
                                    t.confirmations < e || alreadyDone() || i(t)
                                };
                            if (this.on(t, minedHandler), s.push(() => {
                                    this.removeListener(t, minedHandler)
                                }), n) {
                                let r = n.startBlock,
                                    i = null,
                                    replaceHandler = s => __awaiter(this, void 0, void 0, function*() {
                                        a || (yield stall(1e3), this.getTransactionCount(n.from).then(u => __awaiter(this, void 0, void 0, function*() {
                                            if (!a) {
                                                if (u <= n.nonce) r = s;
                                                else {
                                                    {
                                                        let e = yield this.getTransaction(t);
                                                        if (e && null != e.blockNumber) return
                                                    }
                                                    for (null == i && (i = r - 3) < n.startBlock && (i = n.startBlock); i <= s;) {
                                                        if (a) return;
                                                        let r = yield this.getBlockWithTransactions(i);
                                                        for (let i = 0; i < r.transactions.length; i++) {
                                                            let s = r.transactions[i];
                                                            if (s.hash === t) return;
                                                            if (s.from === n.from && s.nonce === n.nonce) {
                                                                if (a) return;
                                                                let r = yield this.waitForTransaction(s.hash, e);
                                                                if (alreadyDone()) return;
                                                                let i = "replaced";
                                                                s.data === n.data && s.to === n.to && s.value.eq(n.value) ? i = "repriced" : "0x" === s.data && s.from === s.to && s.value.isZero() && (i = "cancelled"), o(A.makeError("transaction was replaced", v.Logger.errors.TRANSACTION_REPLACED, {
                                                                    cancelled: "replaced" === i || "cancelled" === i,
                                                                    reason: i,
                                                                    replacement: this._wrapTransaction(s),
                                                                    hash: t,
                                                                    receipt: r
                                                                }));
                                                                return
                                                            }
                                                        }
                                                        i++
                                                    }
                                                }
                                                a || this.once("block", replaceHandler)
                                            }
                                        }), t => {
                                            a || this.once("block", replaceHandler)
                                        }))
                                    });
                                if (a) return;
                                this.once("block", replaceHandler), s.push(() => {
                                    this.removeListener("block", replaceHandler)
                                })
                            }
                            if ("number" == typeof r && r > 0) {
                                let t = setTimeout(() => {
                                    alreadyDone() || o(A.makeError("timeout exceeded", v.Logger.errors.TIMEOUT, {
                                        timeout: r
                                    }))
                                }, r);
                                t.unref && t.unref(), s.push(() => {
                                    clearTimeout(t)
                                })
                            }
                        })
                    })
                }
                getBlockNumber() {
                    return __awaiter(this, void 0, void 0, function*() {
                        return this._getInternalBlockNumber(0)
                    })
                }
                getGasPrice() {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let t = yield this.perform("getGasPrice", {});
                        try {
                            return s.O$.from(t)
                        } catch (e) {
                            return A.throwError("bad result from backend", v.Logger.errors.SERVER_ERROR, {
                                method: "getGasPrice",
                                result: t,
                                error: e
                            })
                        }
                    })
                }
                getBalance(t, e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let r = yield(0, c.resolveProperties)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), n = yield this.perform("getBalance", r);
                        try {
                            return s.O$.from(n)
                        } catch (t) {
                            return A.throwError("bad result from backend", v.Logger.errors.SERVER_ERROR, {
                                method: "getBalance",
                                params: r,
                                result: n,
                                error: t
                            })
                        }
                    })
                }
                getTransactionCount(t, e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let r = yield(0, c.resolveProperties)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), n = yield this.perform("getTransactionCount", r);
                        try {
                            return s.O$.from(n).toNumber()
                        } catch (t) {
                            return A.throwError("bad result from backend", v.Logger.errors.SERVER_ERROR, {
                                method: "getTransactionCount",
                                params: r,
                                result: n,
                                error: t
                            })
                        }
                    })
                }
                getCode(t, e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let r = yield(0, c.resolveProperties)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(e)
                        }), n = yield this.perform("getCode", r);
                        try {
                            return (0, a.hexlify)(n)
                        } catch (t) {
                            return A.throwError("bad result from backend", v.Logger.errors.SERVER_ERROR, {
                                method: "getCode",
                                params: r,
                                result: n,
                                error: t
                            })
                        }
                    })
                }
                getStorageAt(t, e, r) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let n = yield(0, c.resolveProperties)({
                            address: this._getAddress(t),
                            blockTag: this._getBlockTag(r),
                            position: Promise.resolve(e).then(t => (0, a.hexValue)(t))
                        }), i = yield this.perform("getStorageAt", n);
                        try {
                            return (0, a.hexlify)(i)
                        } catch (t) {
                            return A.throwError("bad result from backend", v.Logger.errors.SERVER_ERROR, {
                                method: "getStorageAt",
                                params: n,
                                result: i,
                                error: t
                            })
                        }
                    })
                }
                _wrapTransaction(t, e, r) {
                    if (null != e && 32 !== (0, a.hexDataLength)(e)) throw Error("invalid response - sendTransaction");
                    return null != e && t.hash !== e && A.throwError("Transaction hash mismatch from Provider.sendTransaction.", v.Logger.errors.UNKNOWN_ERROR, {
                        expectedHash: t.hash,
                        returnedHash: e
                    }), t.wait = (e, n) => __awaiter(this, void 0, void 0, function*() {
                        let i;
                        null == e && (e = 1), null == n && (n = 0), 0 !== e && null != r && (i = {
                            data: t.data,
                            from: t.from,
                            nonce: t.nonce,
                            to: t.to,
                            value: t.value,
                            startBlock: r
                        });
                        let o = yield this._waitForTransaction(t.hash, e, n, i);
                        return null == o && 0 === e ? null : (this._emitted["t:" + t.hash] = o.blockNumber, 0 === o.status && A.throwError("transaction failed", v.Logger.errors.CALL_EXCEPTION, {
                            transactionHash: t.hash,
                            transaction: t,
                            receipt: o
                        }), o)
                    }), t
                }
                sendTransaction(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let e = yield Promise.resolve(t).then(t => (0, a.hexlify)(t)), r = this.formatter.transaction(t);
                        null == r.confirmations && (r.confirmations = 0);
                        let n = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                        try {
                            let t = yield this.perform("sendTransaction", {
                                signedTransaction: e
                            });
                            return this._wrapTransaction(r, t, n)
                        } catch (t) {
                            throw t.transaction = r, t.transactionHash = r.hash, t
                        }
                    })
                }
                _getTransactionRequest(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let e = yield t, r = {};
                        return ["from", "to"].forEach(t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => t ? this._getAddress(t) : null))
                        }), ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach(t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => t ? s.O$.from(t) : null))
                        }), ["type"].forEach(t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => null != t ? t : null))
                        }), e.accessList && (r.accessList = this.formatter.accessList(e.accessList)), ["data"].forEach(t => {
                            null != e[t] && (r[t] = Promise.resolve(e[t]).then(t => t ? (0, a.hexlify)(t) : null))
                        }), this.formatter.transactionRequest((yield(0, c.resolveProperties)(r)))
                    })
                }
                _getFilter(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        t = yield t;
                        let e = {};
                        return null != t.address && (e.address = this._getAddress(t.address)), ["blockHash", "topics"].forEach(r => {
                            null != t[r] && (e[r] = t[r])
                        }), ["fromBlock", "toBlock"].forEach(r => {
                            null != t[r] && (e[r] = this._getBlockTag(t[r]))
                        }), this.formatter.filter((yield(0, c.resolveProperties)(e)))
                    })
                }
                _call(t, e, r) {
                    return __awaiter(this, void 0, void 0, function*() {
                        r >= 10 && A.throwError("CCIP read exceeded maximum redirections", v.Logger.errors.SERVER_ERROR, {
                            redirects: r,
                            transaction: t
                        });
                        let n = t.to,
                            i = yield this.perform("call", {
                                transaction: t,
                                blockTag: e
                            });
                        if (r >= 0 && "latest" === e && null != n && "0x556f1830" === i.substring(0, 10) && (0, a.hexDataLength)(i) % 32 == 4) try {
                            let o = (0, a.hexDataSlice)(i, 4),
                                u = (0, a.hexDataSlice)(o, 0, 32);
                            s.O$.from(u).eq(n) || A.throwError("CCIP Read sender did not match", v.Logger.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: i
                            });
                            let l = [],
                                h = s.O$.from((0, a.hexDataSlice)(o, 32, 64)).toNumber(),
                                c = s.O$.from((0, a.hexDataSlice)(o, h, h + 32)).toNumber(),
                                d = (0, a.hexDataSlice)(o, h + 32);
                            for (let e = 0; e < c; e++) {
                                let r = _parseString(d, 32 * e);
                                null == r && A.throwError("CCIP Read contained corrupt URL string", v.Logger.errors.CALL_EXCEPTION, {
                                    name: "OffchainLookup",
                                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                    transaction: t,
                                    data: i
                                }), l.push(r)
                            }
                            let g = _parseBytes(o, 64);
                            s.O$.from((0, a.hexDataSlice)(o, 100, 128)).isZero() || A.throwError("CCIP Read callback selector included junk", v.Logger.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: i
                            });
                            let m = (0, a.hexDataSlice)(o, 96, 100),
                                p = _parseBytes(o, 128),
                                y = yield this.ccipReadFetch(t, g, l);
                            null == y && A.throwError("CCIP Read disabled or provided no URLs", v.Logger.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: i
                            });
                            let w = {
                                to: n,
                                data: (0, a.hexConcat)([m, encodeBytes([y, p])])
                            };
                            return this._call(w, e, r + 1)
                        } catch (t) {
                            if (t.code === v.Logger.errors.SERVER_ERROR) throw t
                        }
                        try {
                            return (0, a.hexlify)(i)
                        } catch (r) {
                            return A.throwError("bad result from backend", v.Logger.errors.SERVER_ERROR, {
                                method: "call",
                                params: {
                                    transaction: t,
                                    blockTag: e
                                },
                                result: i,
                                error: r
                            })
                        }
                    })
                }
                call(t, e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let r = yield(0, c.resolveProperties)({
                            transaction: this._getTransactionRequest(t),
                            blockTag: this._getBlockTag(e),
                            ccipReadEnabled: Promise.resolve(t.ccipReadEnabled)
                        });
                        return this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1)
                    })
                }
                estimateGas(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let e = yield(0, c.resolveProperties)({
                            transaction: this._getTransactionRequest(t)
                        }), r = yield this.perform("estimateGas", e);
                        try {
                            return s.O$.from(r)
                        } catch (t) {
                            return A.throwError("bad result from backend", v.Logger.errors.SERVER_ERROR, {
                                method: "estimateGas",
                                params: e,
                                result: r,
                                error: t
                            })
                        }
                    })
                }
                _getAddress(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        "string" != typeof(t = yield t) && A.throwArgumentError("invalid address or ENS name", "name", t);
                        let e = yield this.resolveName(t);
                        return null == e && A.throwError("ENS name not configured", v.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: `resolveName(${JSON.stringify(t)})`
                        }), e
                    })
                }
                _getBlock(t, e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork(), t = yield t;
                        let r = -128,
                            n = {
                                includeTransactions: !!e
                            };
                        if ((0, a.isHexString)(t, 32)) n.blockHash = t;
                        else try {
                            n.blockTag = yield this._getBlockTag(t), (0, a.isHexString)(n.blockTag) && (r = parseInt(n.blockTag.substring(2), 16))
                        } catch (e) {
                            A.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", t)
                        }
                        return (0, m.poll)(() => __awaiter(this, void 0, void 0, function*() {
                            let t = yield this.perform("getBlock", n);
                            if (null == t) return null != n.blockHash && null == this._emitted["b:" + n.blockHash] || null != n.blockTag && r > this._emitted.block ? null : void 0;
                            if (e) {
                                let e = null;
                                for (let r = 0; r < t.transactions.length; r++) {
                                    let n = t.transactions[r];
                                    if (null == n.blockNumber) n.confirmations = 0;
                                    else if (null == n.confirmations) {
                                        null == e && (e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                                        let t = e - n.blockNumber + 1;
                                        t <= 0 && (t = 1), n.confirmations = t
                                    }
                                }
                                let r = this.formatter.blockWithTransactions(t);
                                return r.transactions = r.transactions.map(t => this._wrapTransaction(t)), r
                            }
                            return this.formatter.block(t)
                        }), {
                            oncePoll: this
                        })
                    })
                }
                getBlock(t) {
                    return this._getBlock(t, !1)
                }
                getBlockWithTransactions(t) {
                    return this._getBlock(t, !0)
                }
                getTransaction(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork(), t = yield t;
                        let e = {
                            transactionHash: this.formatter.hash(t, !0)
                        };
                        return (0, m.poll)(() => __awaiter(this, void 0, void 0, function*() {
                            let r = yield this.perform("getTransaction", e);
                            if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
                            let n = this.formatter.transactionResponse(r);
                            if (null == n.blockNumber) n.confirmations = 0;
                            else if (null == n.confirmations) {
                                let t = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval), e = t - n.blockNumber + 1;
                                e <= 0 && (e = 1), n.confirmations = e
                            }
                            return this._wrapTransaction(n)
                        }), {
                            oncePoll: this
                        })
                    })
                }
                getTransactionReceipt(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork(), t = yield t;
                        let e = {
                            transactionHash: this.formatter.hash(t, !0)
                        };
                        return (0, m.poll)(() => __awaiter(this, void 0, void 0, function*() {
                            let r = yield this.perform("getTransactionReceipt", e);
                            if (null == r) return null == this._emitted["t:" + t] ? null : void 0;
                            if (null == r.blockHash) return;
                            let n = this.formatter.receipt(r);
                            if (null == n.blockNumber) n.confirmations = 0;
                            else if (null == n.confirmations) {
                                let t = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval), e = t - n.blockNumber + 1;
                                e <= 0 && (e = 1), n.confirmations = e
                            }
                            return n
                        }), {
                            oncePoll: this
                        })
                    })
                }
                getLogs(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield this.getNetwork();
                        let e = yield(0, c.resolveProperties)({
                            filter: this._getFilter(t)
                        }), r = yield this.perform("getLogs", e);
                        return r.forEach(t => {
                            null == t.removed && (t.removed = !1)
                        }), b.Mb.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
                    })
                }
                getEtherPrice() {
                    return __awaiter(this, void 0, void 0, function*() {
                        return yield this.getNetwork(), this.perform("getEtherPrice", {})
                    })
                }
                _getBlockTag(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        if ("number" == typeof(t = yield t) && t < 0) {
                            t % 1 && A.throwArgumentError("invalid BlockTag", "blockTag", t);
                            let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                            return (e += t) < 0 && (e = 0), this.formatter.blockTag(e)
                        }
                        return this.formatter.blockTag(t)
                    })
                }
                getResolver(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let e = t;
                        for (;;) {
                            if ("" === e || "." === e || "eth" !== t && "eth" === e) return null;
                            let r = yield this._getResolver(e, "getResolver");
                            if (null != r) {
                                let n = new Resolver(this, r, t);
                                if (e !== t && !(yield n.supportsWildcard())) return null;
                                return n
                            }
                            e = e.split(".").slice(1).join(".")
                        }
                    })
                }
                _getResolver(t, e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        null == e && (e = "ENS");
                        let r = yield this.getNetwork();
                        r.ensAddress || A.throwError("network does not support ENS", v.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: e,
                            network: r.name
                        });
                        try {
                            let e = yield this.call({
                                to: r.ensAddress,
                                data: "0x0178b8bf" + (0, l.VM)(t).substring(2)
                            });
                            return this.formatter.callAddress(e)
                        } catch (t) {}
                        return null
                    })
                }
                resolveName(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        t = yield t;
                        try {
                            return Promise.resolve(this.formatter.address(t))
                        } catch (e) {
                            if ((0, a.isHexString)(t)) throw e
                        }
                        "string" != typeof t && A.throwArgumentError("invalid ENS name", "name", t);
                        let e = yield this.getResolver(t);
                        return e ? yield e.getAddress(): null
                    })
                }
                lookupAddress(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        t = yield t, t = this.formatter.address(t);
                        let e = t.substring(2).toLowerCase() + ".addr.reverse",
                            r = yield this._getResolver(e, "lookupAddress");
                        if (null == r) return null;
                        let n = _parseString((yield this.call({
                                to: r,
                                data: "0x691f3431" + (0, l.VM)(e).substring(2)
                            })), 0),
                            i = yield this.resolveName(n);
                        return i != t ? null : n
                    })
                }
                getAvatar(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let e = null;
                        if ((0, a.isHexString)(t)) {
                            let r = this.formatter.address(t),
                                n = r.substring(2).toLowerCase() + ".addr.reverse",
                                i = yield this._getResolver(n, "getAvatar");
                            if (!i) return null;
                            e = new Resolver(this, i, n);
                            try {
                                let t = yield e.getAvatar();
                                if (t) return t.url
                            } catch (t) {
                                if (t.code !== v.Logger.errors.CALL_EXCEPTION) throw t
                            }
                            try {
                                let t = _parseString((yield this.call({
                                    to: i,
                                    data: "0x691f3431" + (0, l.VM)(n).substring(2)
                                })), 0);
                                e = yield this.getResolver(t)
                            } catch (t) {
                                if (t.code !== v.Logger.errors.CALL_EXCEPTION) throw t;
                                return null
                            }
                        } else if (!(e = yield this.getResolver(t))) return null;
                        let r = yield e.getAvatar();
                        return null == r ? null : r.url
                    })
                }
                perform(t, e) {
                    return A.throwError(t + " not implemented", v.Logger.errors.NOT_IMPLEMENTED, {
                        operation: t
                    })
                }
                _startEvent(t) {
                    this.polling = this._events.filter(t => t.pollable()).length > 0
                }
                _stopEvent(t) {
                    this.polling = this._events.filter(t => t.pollable()).length > 0
                }
                _addEventListener(t, e, r) {
                    let n = new Event(getEventTag(t), e, r);
                    return this._events.push(n), this._startEvent(n), this
                }
                on(t, e) {
                    return this._addEventListener(t, e, !1)
                }
                once(t, e) {
                    return this._addEventListener(t, e, !0)
                }
                emit(t, ...e) {
                    let r = !1,
                        n = [],
                        i = getEventTag(t);
                    return this._events = this._events.filter(t => t.tag !== i || (setTimeout(() => {
                        t.listener.apply(this, e)
                    }, 0), r = !0, !t.once || (n.push(t), !1))), n.forEach(t => {
                        this._stopEvent(t)
                    }), r
                }
                listenerCount(t) {
                    if (!t) return this._events.length;
                    let e = getEventTag(t);
                    return this._events.filter(t => t.tag === e).length
                }
                listeners(t) {
                    if (null == t) return this._events.map(t => t.listener);
                    let e = getEventTag(t);
                    return this._events.filter(t => t.tag === e).map(t => t.listener)
                }
                off(t, e) {
                    if (null == e) return this.removeAllListeners(t);
                    let r = [],
                        n = !1,
                        i = getEventTag(t);
                    return this._events = this._events.filter(t => t.tag !== i || t.listener != e || !!n || (n = !0, r.push(t), !1)), r.forEach(t => {
                        this._stopEvent(t)
                    }), this
                }
                removeAllListeners(t) {
                    let e = [];
                    if (null == t) e = this._events, this._events = [];
                    else {
                        let r = getEventTag(t);
                        this._events = this._events.filter(t => t.tag !== r || (e.push(t), !1))
                    }
                    return e.forEach(t => {
                        this._stopEvent(t)
                    }), this
                }
            }
        },
        54259: function(t, e, r) {
            "use strict";
            r.d(e, {
                Ed: function() {
                    return isCommunityResourcable
                },
                Gp: function() {
                    return isCommunityResource
                },
                Mb: function() {
                    return Formatter
                },
                vh: function() {
                    return showThrottleMessage
                }
            });
            var n = r(18994),
                i = r(92598),
                o = r(57273),
                s = r(5572),
                a = r(17213),
                u = r(12060),
                l = r(36288),
                h = r(12312);
            let c = new l.Logger(h.i);
            let Formatter = class Formatter {
                constructor() {
                    this.formats = this.getDefaultFormats()
                }
                getDefaultFormats() {
                    let t = {},
                        e = this.address.bind(this),
                        r = this.bigNumber.bind(this),
                        n = this.blockTag.bind(this),
                        i = this.data.bind(this),
                        o = this.hash.bind(this),
                        s = this.hex.bind(this),
                        u = this.number.bind(this),
                        l = this.type.bind(this);
                    return t.transaction = {
                        hash: o,
                        type: l,
                        accessList: Formatter.allowNull(this.accessList.bind(this), null),
                        blockHash: Formatter.allowNull(o, null),
                        blockNumber: Formatter.allowNull(u, null),
                        transactionIndex: Formatter.allowNull(u, null),
                        confirmations: Formatter.allowNull(u, null),
                        from: e,
                        gasPrice: Formatter.allowNull(r),
                        maxPriorityFeePerGas: Formatter.allowNull(r),
                        maxFeePerGas: Formatter.allowNull(r),
                        gasLimit: r,
                        to: Formatter.allowNull(e, null),
                        value: r,
                        nonce: u,
                        data: i,
                        r: Formatter.allowNull(this.uint256),
                        s: Formatter.allowNull(this.uint256),
                        v: Formatter.allowNull(u),
                        creates: Formatter.allowNull(e, null),
                        raw: Formatter.allowNull(i)
                    }, t.transactionRequest = {
                        from: Formatter.allowNull(e),
                        nonce: Formatter.allowNull(u),
                        gasLimit: Formatter.allowNull(r),
                        gasPrice: Formatter.allowNull(r),
                        maxPriorityFeePerGas: Formatter.allowNull(r),
                        maxFeePerGas: Formatter.allowNull(r),
                        to: Formatter.allowNull(e),
                        value: Formatter.allowNull(r),
                        data: Formatter.allowNull(t => this.data(t, !0)),
                        type: Formatter.allowNull(u),
                        accessList: Formatter.allowNull(this.accessList.bind(this), null)
                    }, t.receiptLog = {
                        transactionIndex: u,
                        blockNumber: u,
                        transactionHash: o,
                        address: e,
                        topics: Formatter.arrayOf(o),
                        data: i,
                        logIndex: u,
                        blockHash: o
                    }, t.receipt = {
                        to: Formatter.allowNull(this.address, null),
                        from: Formatter.allowNull(this.address, null),
                        contractAddress: Formatter.allowNull(e, null),
                        transactionIndex: u,
                        root: Formatter.allowNull(s),
                        gasUsed: r,
                        logsBloom: Formatter.allowNull(i),
                        blockHash: o,
                        transactionHash: o,
                        logs: Formatter.arrayOf(this.receiptLog.bind(this)),
                        blockNumber: u,
                        confirmations: Formatter.allowNull(u, null),
                        cumulativeGasUsed: r,
                        effectiveGasPrice: Formatter.allowNull(r),
                        status: Formatter.allowNull(u),
                        type: l
                    }, t.block = {
                        hash: Formatter.allowNull(o),
                        parentHash: o,
                        number: u,
                        timestamp: u,
                        nonce: Formatter.allowNull(s),
                        difficulty: this.difficulty.bind(this),
                        gasLimit: r,
                        gasUsed: r,
                        miner: Formatter.allowNull(e),
                        extraData: i,
                        transactions: Formatter.allowNull(Formatter.arrayOf(o)),
                        baseFeePerGas: Formatter.allowNull(r)
                    }, t.blockWithTransactions = (0, a.shallowCopy)(t.block), t.blockWithTransactions.transactions = Formatter.allowNull(Formatter.arrayOf(this.transactionResponse.bind(this))), t.filter = {
                        fromBlock: Formatter.allowNull(n, void 0),
                        toBlock: Formatter.allowNull(n, void 0),
                        blockHash: Formatter.allowNull(o, void 0),
                        address: Formatter.allowNull(e, void 0),
                        topics: Formatter.allowNull(this.topics.bind(this), void 0)
                    }, t.filterLog = {
                        blockNumber: Formatter.allowNull(u),
                        blockHash: Formatter.allowNull(o),
                        transactionIndex: u,
                        removed: Formatter.allowNull(this.boolean.bind(this)),
                        address: e,
                        data: Formatter.allowFalsish(i, "0x"),
                        topics: Formatter.arrayOf(o),
                        transactionHash: o,
                        logIndex: u
                    }, t
                }
                accessList(t) {
                    return (0, u.accessListify)(t || [])
                }
                number(t) {
                    return "0x" === t ? 0 : i.O$.from(t).toNumber()
                }
                type(t) {
                    return "0x" === t || null == t ? 0 : i.O$.from(t).toNumber()
                }
                bigNumber(t) {
                    return i.O$.from(t)
                }
                boolean(t) {
                    if ("boolean" == typeof t) return t;
                    if ("string" == typeof t) {
                        if ("true" === (t = t.toLowerCase())) return !0;
                        if ("false" === t) return !1
                    }
                    throw Error("invalid boolean - " + t)
                }
                hex(t, e) {
                    return "string" == typeof t && (e || "0x" === t.substring(0, 2) || (t = "0x" + t), (0, o.isHexString)(t)) ? t.toLowerCase() : c.throwArgumentError("invalid hash", "value", t)
                }
                data(t, e) {
                    let r = this.hex(t, e);
                    if (r.length % 2 != 0) throw Error("invalid data; odd-length - " + t);
                    return r
                }
                address(t) {
                    return (0, n.getAddress)(t)
                }
                callAddress(t) {
                    if (!(0, o.isHexString)(t, 32)) return null;
                    let e = (0, n.getAddress)((0, o.hexDataSlice)(t, 12));
                    return e === s.d ? null : e
                }
                contractAddress(t) {
                    return (0, n.getContractAddress)(t)
                }
                blockTag(t) {
                    if (null == t) return "latest";
                    if ("earliest" === t) return "0x0";
                    switch (t) {
                        case "earliest":
                            return "0x0";
                        case "latest":
                        case "pending":
                        case "safe":
                        case "finalized":
                            return t
                    }
                    if ("number" == typeof t || (0, o.isHexString)(t)) return (0, o.hexValue)(t);
                    throw Error("invalid blockTag")
                }
                hash(t, e) {
                    let r = this.hex(t, e);
                    return 32 !== (0, o.hexDataLength)(r) ? c.throwArgumentError("invalid hash", "value", t) : r
                }
                difficulty(t) {
                    if (null == t) return null;
                    let e = i.O$.from(t);
                    try {
                        return e.toNumber()
                    } catch (t) {}
                    return null
                }
                uint256(t) {
                    if (!(0, o.isHexString)(t)) throw Error("invalid uint256");
                    return (0, o.hexZeroPad)(t, 32)
                }
                _block(t, e) {
                    null != t.author && null == t.miner && (t.miner = t.author);
                    let r = null != t._difficulty ? t._difficulty : t.difficulty,
                        n = Formatter.check(e, t);
                    return n._difficulty = null == r ? null : i.O$.from(r), n
                }
                block(t) {
                    return this._block(t, this.formats.block)
                }
                blockWithTransactions(t) {
                    return this._block(t, this.formats.blockWithTransactions)
                }
                transactionRequest(t) {
                    return Formatter.check(this.formats.transactionRequest, t)
                }
                transactionResponse(t) {
                    null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas), t.to && i.O$.from(t.to).isZero() && (t.to = "0x0000000000000000000000000000000000000000"), null != t.input && null == t.data && (t.data = t.input), null == t.to && null == t.creates && (t.creates = this.contractAddress(t)), (1 === t.type || 2 === t.type) && null == t.accessList && (t.accessList = []);
                    let e = Formatter.check(this.formats.transaction, t);
                    if (null != t.chainId) {
                        let r = t.chainId;
                        (0, o.isHexString)(r) && (r = i.O$.from(r).toNumber()), e.chainId = r
                    } else {
                        let r = t.networkId;
                        null == r && null == e.v && (r = t.chainId), (0, o.isHexString)(r) && (r = i.O$.from(r).toNumber()), "number" != typeof r && null != e.v && ((r = (e.v - 35) / 2) < 0 && (r = 0), r = parseInt(r)), "number" != typeof r && (r = 0), e.chainId = r
                    }
                    return e.blockHash && "x" === e.blockHash.replace(/0/g, "") && (e.blockHash = null), e
                }
                transaction(t) {
                    return (0, u.parse)(t)
                }
                receiptLog(t) {
                    return Formatter.check(this.formats.receiptLog, t)
                }
                receipt(t) {
                    let e = Formatter.check(this.formats.receipt, t);
                    if (null != e.root) {
                        if (e.root.length <= 4) {
                            let t = i.O$.from(e.root).toNumber();
                            0 === t || 1 === t ? (null != e.status && e.status !== t && c.throwArgumentError("alt-root-status/status mismatch", "value", {
                                root: e.root,
                                status: e.status
                            }), e.status = t, delete e.root) : c.throwArgumentError("invalid alt-root-status", "value.root", e.root)
                        } else 66 !== e.root.length && c.throwArgumentError("invalid root hash", "value.root", e.root)
                    }
                    return null != e.status && (e.byzantium = !0), e
                }
                topics(t) {
                    return Array.isArray(t) ? t.map(t => this.topics(t)) : null != t ? this.hash(t, !0) : null
                }
                filter(t) {
                    return Formatter.check(this.formats.filter, t)
                }
                filterLog(t) {
                    return Formatter.check(this.formats.filterLog, t)
                }
                static check(t, e) {
                    let r = {};
                    for (let n in t) try {
                        let i = t[n](e[n]);
                        void 0 !== i && (r[n] = i)
                    } catch (t) {
                        throw t.checkKey = n, t.checkValue = e[n], t
                    }
                    return r
                }
                static allowNull(t, e) {
                    return function(r) {
                        return null == r ? e : t(r)
                    }
                }
                static allowFalsish(t, e) {
                    return function(r) {
                        return r ? t(r) : e
                    }
                }
                static arrayOf(t) {
                    return function(e) {
                        if (!Array.isArray(e)) throw Error("not an array");
                        let r = [];
                        return e.forEach(function(e) {
                            r.push(t(e))
                        }), r
                    }
                }
            };

            function isCommunityResourcable(t) {
                return t && "function" == typeof t.isCommunityResource
            }

            function isCommunityResource(t) {
                return isCommunityResourcable(t) && t.isCommunityResource()
            }
            let d = !1;

            function showThrottleMessage() {
                d || (d = !0, console.log("========= NOTICE ========="), console.log("Request-Rate Exceeded  (this message will not be repeated)"), console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.io/api-keys/"), console.log("=========================="))
            }
        },
        46795: function(t, e, r) {
            "use strict";
            r.d(e, {
                C: function() {
                    return JsonRpcSigner
                },
                r: function() {
                    return JsonRpcProvider
                }
            });
            var n = r(14941),
                i = r(92598),
                o = r(57273),
                s = r(31822),
                a = r(17213),
                u = r(58337),
                l = r(12060),
                h = r(39318),
                c = r(36288),
                d = r(12312),
                g = r(26790),
                __awaiter = function(t, e, r, n) {
                    return new(r || (r = Promise))(function(i, o) {
                        function fulfilled(t) {
                            try {
                                step(n.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function rejected(t) {
                            try {
                                step(n.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function step(t) {
                            var e;
                            t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                                t(e)
                            })).then(fulfilled, rejected)
                        }
                        step((n = n.apply(t, e || [])).next())
                    })
                };
            let m = new c.Logger(d.i),
                p = ["call", "estimateGas"];

            function spelunk(t, e) {
                if (null == t) return null;
                if ("string" == typeof t.message && t.message.match("reverted")) {
                    let r = (0, o.isHexString)(t.data) ? t.data : null;
                    if (!e || r) return {
                        message: t.message,
                        data: r
                    }
                }
                if ("object" == typeof t) {
                    for (let r in t) {
                        let n = spelunk(t[r], e);
                        if (n) return n
                    }
                    return null
                }
                if ("string" == typeof t) try {
                    return spelunk(JSON.parse(t), e)
                } catch (t) {}
                return null
            }

            function checkError(t, e, r) {
                let n = r.transaction || r.signedTransaction;
                if ("call" === t) {
                    let t = spelunk(e, !0);
                    if (t) return t.data;
                    m.throwError("missing revert data in call exception; Transaction reverted without a reason string", c.Logger.errors.CALL_EXCEPTION, {
                        data: "0x",
                        transaction: n,
                        error: e
                    })
                }
                if ("estimateGas" === t) {
                    let r = spelunk(e.body, !1);
                    null == r && (r = spelunk(e, !1)), r && m.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", c.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                        reason: r.message,
                        method: t,
                        transaction: n,
                        error: e
                    })
                }
                let i = e.message;
                throw e.code === c.Logger.errors.SERVER_ERROR && e.error && "string" == typeof e.error.message ? i = e.error.message : "string" == typeof e.body ? i = e.body : "string" == typeof e.responseText && (i = e.responseText), (i = (i || "").toLowerCase()).match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i) && m.throwError("insufficient funds for intrinsic transaction cost", c.Logger.errors.INSUFFICIENT_FUNDS, {
                    error: e,
                    method: t,
                    transaction: n
                }), i.match(/nonce (is )?too low/i) && m.throwError("nonce has already been used", c.Logger.errors.NONCE_EXPIRED, {
                    error: e,
                    method: t,
                    transaction: n
                }), i.match(/replacement transaction underpriced|transaction gas price.*too low/i) && m.throwError("replacement fee too low", c.Logger.errors.REPLACEMENT_UNDERPRICED, {
                    error: e,
                    method: t,
                    transaction: n
                }), i.match(/only replay-protected/i) && m.throwError("legacy pre-eip-155 transactions not supported", c.Logger.errors.UNSUPPORTED_OPERATION, {
                    error: e,
                    method: t,
                    transaction: n
                }), p.indexOf(t) >= 0 && i.match(/gas required exceeds allowance|always failing transaction|execution reverted|revert/) && m.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", c.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                    error: e,
                    method: t,
                    transaction: n
                }), e
            }

            function timer(t) {
                return new Promise(function(e) {
                    setTimeout(e, t)
                })
            }

            function getResult(t) {
                if (t.error) {
                    let e = Error(t.error.message);
                    throw e.code = t.error.code, e.data = t.error.data, e
                }
                return t.result
            }

            function getLowerCase(t) {
                return t ? t.toLowerCase() : t
            }
            let y = {};
            let JsonRpcSigner = class JsonRpcSigner extends n.Signer {
                constructor(t, e, r) {
                    if (super(), t !== y) throw Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
                    (0, a.defineReadOnly)(this, "provider", e), null == r && (r = 0), "string" == typeof r ? ((0, a.defineReadOnly)(this, "_address", this.provider.formatter.address(r)), (0, a.defineReadOnly)(this, "_index", null)) : "number" == typeof r ? ((0, a.defineReadOnly)(this, "_index", r), (0, a.defineReadOnly)(this, "_address", null)) : m.throwArgumentError("invalid address or index", "addressOrIndex", r)
                }
                connect(t) {
                    return m.throwError("cannot alter JSON-RPC Signer connection", c.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "connect"
                    })
                }
                connectUnchecked() {
                    return new UncheckedJsonRpcSigner(y, this.provider, this._address || this._index)
                }
                getAddress() {
                    return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then(t => (t.length <= this._index && m.throwError("unknown account #" + this._index, c.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "getAddress"
                    }), this.provider.formatter.address(t[this._index])))
                }
                sendUncheckedTransaction(t) {
                    t = (0, a.shallowCopy)(t);
                    let e = this.getAddress().then(t => (t && (t = t.toLowerCase()), t));
                    if (null == t.gasLimit) {
                        let r = (0, a.shallowCopy)(t);
                        r.from = e, t.gasLimit = this.provider.estimateGas(r)
                    }
                    return null != t.to && (t.to = Promise.resolve(t.to).then(t => __awaiter(this, void 0, void 0, function*() {
                        if (null == t) return null;
                        let e = yield this.provider.resolveName(t);
                        return null == e && m.throwArgumentError("provided ENS name resolves to null", "tx.to", t), e
                    }))), (0, a.resolveProperties)({
                        tx: (0, a.resolveProperties)(t),
                        sender: e
                    }).then(({
                        tx: e,
                        sender: r
                    }) => {
                        null != e.from ? e.from.toLowerCase() !== r && m.throwArgumentError("from address mismatch", "transaction", t) : e.from = r;
                        let n = this.provider.constructor.hexlifyTransaction(e, {
                            from: !0
                        });
                        return this.provider.send("eth_sendTransaction", [n]).then(t => t, t => ("string" == typeof t.message && t.message.match(/user denied/i) && m.throwError("user rejected transaction", c.Logger.errors.ACTION_REJECTED, {
                            action: "sendTransaction",
                            transaction: e
                        }), checkError("sendTransaction", t, n)))
                    })
                }
                signTransaction(t) {
                    return m.throwError("signing transactions is unsupported", c.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "signTransaction"
                    })
                }
                sendTransaction(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let e = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval), r = yield this.sendUncheckedTransaction(t);
                        try {
                            return yield(0, h.poll)(() => __awaiter(this, void 0, void 0, function*() {
                                let t = yield this.provider.getTransaction(r);
                                if (null !== t) return this.provider._wrapTransaction(t, r, e)
                            }), {
                                oncePoll: this.provider
                            })
                        } catch (t) {
                            throw t.transactionHash = r, t
                        }
                    })
                }
                signMessage(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let e = "string" == typeof t ? (0, u.Y0)(t) : t,
                            r = yield this.getAddress();
                        try {
                            return yield this.provider.send("personal_sign", [(0, o.hexlify)(e), r.toLowerCase()])
                        } catch (e) {
                            throw "string" == typeof e.message && e.message.match(/user denied/i) && m.throwError("user rejected signing", c.Logger.errors.ACTION_REJECTED, {
                                action: "signMessage",
                                from: r,
                                messageData: t
                            }), e
                        }
                    })
                }
                _legacySignMessage(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let e = "string" == typeof t ? (0, u.Y0)(t) : t,
                            r = yield this.getAddress();
                        try {
                            return yield this.provider.send("eth_sign", [r.toLowerCase(), (0, o.hexlify)(e)])
                        } catch (e) {
                            throw "string" == typeof e.message && e.message.match(/user denied/i) && m.throwError("user rejected signing", c.Logger.errors.ACTION_REJECTED, {
                                action: "_legacySignMessage",
                                from: r,
                                messageData: t
                            }), e
                        }
                    })
                }
                _signTypedData(t, e, r) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let n = yield s.E.resolveNames(t, e, r, t => this.provider.resolveName(t)), i = yield this.getAddress();
                        try {
                            return yield this.provider.send("eth_signTypedData_v4", [i.toLowerCase(), JSON.stringify(s.E.getPayload(n.domain, e, n.value))])
                        } catch (t) {
                            throw "string" == typeof t.message && t.message.match(/user denied/i) && m.throwError("user rejected signing", c.Logger.errors.ACTION_REJECTED, {
                                action: "_signTypedData",
                                from: i,
                                messageData: {
                                    domain: n.domain,
                                    types: e,
                                    value: n.value
                                }
                            }), t
                        }
                    })
                }
                unlock(t) {
                    return __awaiter(this, void 0, void 0, function*() {
                        let e = this.provider,
                            r = yield this.getAddress();
                        return e.send("personal_unlockAccount", [r.toLowerCase(), t, null])
                    })
                }
            };
            let UncheckedJsonRpcSigner = class UncheckedJsonRpcSigner extends JsonRpcSigner {
                sendTransaction(t) {
                    return this.sendUncheckedTransaction(t).then(t => ({
                        hash: t,
                        nonce: null,
                        gasLimit: null,
                        gasPrice: null,
                        data: null,
                        value: null,
                        chainId: null,
                        confirmations: 0,
                        from: null,
                        wait: e => this.provider.waitForTransaction(t, e)
                    }))
                }
            };
            let v = {
                chainId: !0,
                data: !0,
                gasLimit: !0,
                gasPrice: !0,
                nonce: !0,
                to: !0,
                value: !0,
                type: !0,
                accessList: !0,
                maxFeePerGas: !0,
                maxPriorityFeePerGas: !0
            };
            let JsonRpcProvider = class JsonRpcProvider extends g.Zk {
                constructor(t, e) {
                    let r = e;
                    null == r && (r = new Promise((t, e) => {
                        setTimeout(() => {
                            this.detectNetwork().then(e => {
                                t(e)
                            }, t => {
                                e(t)
                            })
                        }, 0)
                    })), super(r), t || (t = (0, a.getStatic)(this.constructor, "defaultUrl")()), "string" == typeof t ? (0, a.defineReadOnly)(this, "connection", Object.freeze({
                        url: t
                    })) : (0, a.defineReadOnly)(this, "connection", Object.freeze((0, a.shallowCopy)(t))), this._nextId = 42
                }
                get _cache() {
                    return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache
                }
                static defaultUrl() {
                    return "http://localhost:8545"
                }
                detectNetwork() {
                    return this._cache.detectNetwork || (this._cache.detectNetwork = this._uncachedDetectNetwork(), setTimeout(() => {
                        this._cache.detectNetwork = null
                    }, 0)), this._cache.detectNetwork
                }
                _uncachedDetectNetwork() {
                    return __awaiter(this, void 0, void 0, function*() {
                        yield timer(0);
                        let t = null;
                        try {
                            t = yield this.send("eth_chainId", [])
                        } catch (e) {
                            try {
                                t = yield this.send("net_version", [])
                            } catch (t) {}
                        }
                        if (null != t) {
                            let e = (0, a.getStatic)(this.constructor, "getNetwork");
                            try {
                                return e(i.O$.from(t).toNumber())
                            } catch (e) {
                                return m.throwError("could not detect network", c.Logger.errors.NETWORK_ERROR, {
                                    chainId: t,
                                    event: "invalidNetwork",
                                    serverError: e
                                })
                            }
                        }
                        return m.throwError("could not detect network", c.Logger.errors.NETWORK_ERROR, {
                            event: "noNetwork"
                        })
                    })
                }
                getSigner(t) {
                    return new JsonRpcSigner(y, this, t)
                }
                getUncheckedSigner(t) {
                    return this.getSigner(t).connectUnchecked()
                }
                listAccounts() {
                    return this.send("eth_accounts", []).then(t => t.map(t => this.formatter.address(t)))
                }
                send(t, e) {
                    let r = {
                        method: t,
                        params: e,
                        id: this._nextId++,
                        jsonrpc: "2.0"
                    };
                    this.emit("debug", {
                        action: "request",
                        request: (0, a.deepCopy)(r),
                        provider: this
                    });
                    let n = ["eth_chainId", "eth_blockNumber"].indexOf(t) >= 0;
                    if (n && this._cache[t]) return this._cache[t];
                    let i = (0, h.fetchJson)(this.connection, JSON.stringify(r), getResult).then(t => (this.emit("debug", {
                        action: "response",
                        request: r,
                        response: t,
                        provider: this
                    }), t), t => {
                        throw this.emit("debug", {
                            action: "response",
                            error: t,
                            request: r,
                            provider: this
                        }), t
                    });
                    return n && (this._cache[t] = i, setTimeout(() => {
                        this._cache[t] = null
                    }, 0)), i
                }
                prepareRequest(t, e) {
                    switch (t) {
                        case "getBlockNumber":
                            return ["eth_blockNumber", []];
                        case "getGasPrice":
                            return ["eth_gasPrice", []];
                        case "getBalance":
                            return ["eth_getBalance", [getLowerCase(e.address), e.blockTag]];
                        case "getTransactionCount":
                            return ["eth_getTransactionCount", [getLowerCase(e.address), e.blockTag]];
                        case "getCode":
                            return ["eth_getCode", [getLowerCase(e.address), e.blockTag]];
                        case "getStorageAt":
                            return ["eth_getStorageAt", [getLowerCase(e.address), (0, o.hexZeroPad)(e.position, 32), e.blockTag]];
                        case "sendTransaction":
                            return ["eth_sendRawTransaction", [e.signedTransaction]];
                        case "getBlock":
                            if (e.blockTag) return ["eth_getBlockByNumber", [e.blockTag, !!e.includeTransactions]];
                            if (e.blockHash) return ["eth_getBlockByHash", [e.blockHash, !!e.includeTransactions]];
                            break;
                        case "getTransaction":
                            return ["eth_getTransactionByHash", [e.transactionHash]];
                        case "getTransactionReceipt":
                            return ["eth_getTransactionReceipt", [e.transactionHash]];
                        case "call":
                            {
                                let t = (0, a.getStatic)(this.constructor, "hexlifyTransaction");
                                return ["eth_call", [t(e.transaction, {
                                    from: !0
                                }), e.blockTag]]
                            }
                        case "estimateGas":
                            {
                                let t = (0, a.getStatic)(this.constructor, "hexlifyTransaction");
                                return ["eth_estimateGas", [t(e.transaction, {
                                    from: !0
                                })]]
                            }
                        case "getLogs":
                            return e.filter && null != e.filter.address && (e.filter.address = getLowerCase(e.filter.address)), ["eth_getLogs", [e.filter]]
                    }
                    return null
                }
                perform(t, e) {
                    return __awaiter(this, void 0, void 0, function*() {
                        if ("call" === t || "estimateGas" === t) {
                            let t = e.transaction;
                            if (t && null != t.type && i.O$.from(t.type).isZero() && null == t.maxFeePerGas && null == t.maxPriorityFeePerGas) {
                                let r = yield this.getFeeData();
                                null == r.maxFeePerGas && null == r.maxPriorityFeePerGas && ((e = (0, a.shallowCopy)(e)).transaction = (0, a.shallowCopy)(t), delete e.transaction.type)
                            }
                        }
                        let r = this.prepareRequest(t, e);
                        null == r && m.throwError(t + " not implemented", c.Logger.errors.NOT_IMPLEMENTED, {
                            operation: t
                        });
                        try {
                            return yield this.send(r[0], r[1])
                        } catch (r) {
                            return checkError(t, r, e)
                        }
                    })
                }
                _startEvent(t) {
                    "pending" === t.tag && this._startPending(), super._startEvent(t)
                }
                _startPending() {
                    if (null != this._pendingFilter) return;
                    let t = this,
                        e = this.send("eth_newPendingTransactionFilter", []);
                    this._pendingFilter = e, e.then(function(r) {
                        return function poll() {
                            t.send("eth_getFilterChanges", [r]).then(function(r) {
                                if (t._pendingFilter != e) return null;
                                let n = Promise.resolve();
                                return r.forEach(function(e) {
                                    t._emitted["t:" + e.toLowerCase()] = "pending", n = n.then(function() {
                                        return t.getTransaction(e).then(function(e) {
                                            return t.emit("pending", e), null
                                        })
                                    })
                                }), n.then(function() {
                                    return timer(1e3)
                                })
                            }).then(function() {
                                if (t._pendingFilter != e) {
                                    t.send("eth_uninstallFilter", [r]);
                                    return
                                }
                                return setTimeout(function() {
                                    poll()
                                }, 0), null
                            }).catch(t => {})
                        }(), r
                    }).catch(t => {})
                }
                _stopEvent(t) {
                    "pending" === t.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null), super._stopEvent(t)
                }
                static hexlifyTransaction(t, e) {
                    let r = (0, a.shallowCopy)(v);
                    if (e)
                        for (let t in e) e[t] && (r[t] = !0);
                    (0, a.checkProperties)(t, r);
                    let n = {};
                    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(function(e) {
                        if (null == t[e]) return;
                        let r = (0, o.hexValue)(i.O$.from(t[e]));
                        "gasLimit" === e && (e = "gas"), n[e] = r
                    }), ["from", "to", "data"].forEach(function(e) {
                        null != t[e] && (n[e] = (0, o.hexlify)(t[e]))
                    }), t.accessList && (n.accessList = (0, l.accessListify)(t.accessList)), n
                }
            }
        },
        56955: function(t, e, r) {
            "use strict";
            r.d(e, {
                Q: function() {
                    return Web3Provider
                }
            });
            var n = r(17213),
                i = r(36288),
                o = r(12312),
                s = r(46795);
            let a = new i.Logger(o.i),
                u = 1;

            function buildWeb3LegacyFetcher(t, e) {
                let r = "Web3LegacyFetcher";
                return function(t, i) {
                    let o = {
                        method: t,
                        params: i,
                        id: u++,
                        jsonrpc: "2.0"
                    };
                    return new Promise((t, i) => {
                        this.emit("debug", {
                            action: "request",
                            fetcher: r,
                            request: (0, n.deepCopy)(o),
                            provider: this
                        }), e(o, (e, n) => {
                            if (e) return this.emit("debug", {
                                action: "response",
                                fetcher: r,
                                error: e,
                                request: o,
                                provider: this
                            }), i(e);
                            if (this.emit("debug", {
                                    action: "response",
                                    fetcher: r,
                                    request: o,
                                    response: n,
                                    provider: this
                                }), n.error) {
                                let t = Error(n.error.message);
                                return t.code = n.error.code, t.data = n.error.data, i(t)
                            }
                            t(n.result)
                        })
                    })
                }
            }
            let Web3Provider = class Web3Provider extends s.r {
                constructor(t, e) {
                    null == t && a.throwArgumentError("missing provider", "provider", t);
                    let r = null,
                        i = null,
                        o = null;
                    "function" == typeof t ? (r = "unknown:", i = t) : (((r = t.host || t.path || "") || !t.isMetaMask || (r = "metamask"), o = t, t.request) ? ("" === r && (r = "eip-1193:"), i = function(e, r) {
                        null == r && (r = []);
                        let i = {
                            method: e,
                            params: r
                        };
                        return this.emit("debug", {
                            action: "request",
                            fetcher: "Eip1193Fetcher",
                            request: (0, n.deepCopy)(i),
                            provider: this
                        }), t.request(i).then(t => (this.emit("debug", {
                            action: "response",
                            fetcher: "Eip1193Fetcher",
                            request: i,
                            response: t,
                            provider: this
                        }), t), t => {
                            throw this.emit("debug", {
                                action: "response",
                                fetcher: "Eip1193Fetcher",
                                request: i,
                                error: t,
                                provider: this
                            }), t
                        })
                    }) : t.sendAsync ? i = buildWeb3LegacyFetcher(t, t.sendAsync.bind(t)) : t.send ? i = buildWeb3LegacyFetcher(t, t.send.bind(t)) : a.throwArgumentError("unsupported provider", "provider", t), r || (r = "unknown:")), super(r, e), (0, n.defineReadOnly)(this, "jsonRpcFetchFunc", i), (0, n.defineReadOnly)(this, "provider", o)
                }
                send(t, e) {
                    return this.jsonRpcFetchFunc(t, e)
                }
            }
        },
        7054: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                decode: function() {
                    return decode
                },
                encode: function() {
                    return encode
                }
            });
            var n = r(57273),
                i = r(36288);
            let o = new i.Logger("rlp/5.7.0");

            function arrayifyInteger(t) {
                let e = [];
                for (; t;) e.unshift(255 & t), t >>= 8;
                return e
            }

            function unarrayifyInteger(t, e, r) {
                let n = 0;
                for (let i = 0; i < r; i++) n = 256 * n + t[e + i];
                return n
            }

            function encode(t) {
                return (0, n.hexlify)(function _encode(t) {
                    if (Array.isArray(t)) {
                        let e = [];
                        if (t.forEach(function(t) {
                                e = e.concat(_encode(t))
                            }), e.length <= 55) return e.unshift(192 + e.length), e;
                        let r = arrayifyInteger(e.length);
                        return r.unshift(247 + r.length), r.concat(e)
                    }(0, n.isBytesLike)(t) || o.throwArgumentError("RLP object must be BytesLike", "object", t);
                    let e = Array.prototype.slice.call((0, n.arrayify)(t));
                    if (1 === e.length && e[0] <= 127) return e;
                    if (e.length <= 55) return e.unshift(128 + e.length), e;
                    let r = arrayifyInteger(e.length);
                    return r.unshift(183 + r.length), r.concat(e)
                }(t))
            }

            function _decodeChildren(t, e, r, n) {
                let s = [];
                for (; r < e + 1 + n;) {
                    let a = _decode(t, r);
                    s.push(a.result), (r += a.consumed) > e + 1 + n && o.throwError("child data too short", i.Logger.errors.BUFFER_OVERRUN, {})
                }
                return {
                    consumed: 1 + n,
                    result: s
                }
            }

            function _decode(t, e) {
                if (0 === t.length && o.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {}), t[e] >= 248) {
                    let r = t[e] - 247;
                    e + 1 + r > t.length && o.throwError("data short segment too short", i.Logger.errors.BUFFER_OVERRUN, {});
                    let n = unarrayifyInteger(t, e + 1, r);
                    return e + 1 + r + n > t.length && o.throwError("data long segment too short", i.Logger.errors.BUFFER_OVERRUN, {}), _decodeChildren(t, e, e + 1 + r, r + n)
                }
                if (t[e] >= 192) {
                    let r = t[e] - 192;
                    return e + 1 + r > t.length && o.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {}), _decodeChildren(t, e, e + 1, r)
                }
                if (t[e] >= 184) {
                    let r = t[e] - 183;
                    e + 1 + r > t.length && o.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {});
                    let s = unarrayifyInteger(t, e + 1, r);
                    e + 1 + r + s > t.length && o.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {});
                    let a = (0, n.hexlify)(t.slice(e + 1 + r, e + 1 + r + s));
                    return {
                        consumed: 1 + r + s,
                        result: a
                    }
                }
                if (t[e] >= 128) {
                    let r = t[e] - 128;
                    e + 1 + r > t.length && o.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {});
                    let s = (0, n.hexlify)(t.slice(e + 1, e + 1 + r));
                    return {
                        consumed: 1 + r,
                        result: s
                    }
                }
                return {
                    consumed: 1,
                    result: (0, n.hexlify)(t[e])
                }
            }

            function decode(t) {
                let e = (0, n.arrayify)(t),
                    r = _decode(e, 0);
                return r.consumed !== e.length && o.throwArgumentError("invalid rlp data", "data", t), r.result
            }
        },
        37815: function(t, e, r) {
            "use strict";
            r.d(e, {
                Gy: function() {
                    return computeHmac
                },
                bP: function() {
                    return ripemd160
                },
                JQ: function() {
                    return sha256
                },
                o: function() {
                    return sha512
                }
            });
            var n = r(55336),
                i = r.n(n),
                o = r(57273),
                s = r(67557),
                a = r(36288);
            let u = new a.Logger("sha2/5.7.0");

            function ripemd160(t) {
                return "0x" + i().ripemd160().update((0, o.arrayify)(t)).digest("hex")
            }

            function sha256(t) {
                return "0x" + i().sha256().update((0, o.arrayify)(t)).digest("hex")
            }

            function sha512(t) {
                return "0x" + i().sha512().update((0, o.arrayify)(t)).digest("hex")
            }

            function computeHmac(t, e, r) {
                return s.p[t] || u.throwError("unsupported algorithm " + t, a.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "hmac",
                    algorithm: t
                }), "0x" + i().hmac(i()[t], (0, o.arrayify)(e)).update((0, o.arrayify)(r)).digest("hex")
            }
        },
        67557: function(t, e, r) {
            "use strict";
            var n, i;
            r.d(e, {
                p: function() {
                    return n
                }
            }), (i = n || (n = {})).sha256 = "sha256", i.sha512 = "sha512"
        },
        74731: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                SigningKey: function() {
                    return SigningKey
                },
                computePublicKey: function() {
                    return computePublicKey
                },
                recoverPublicKey: function() {
                    return recoverPublicKey
                }
            });
            var n = r(56662),
                i = r.n(n),
                o = r(55336),
                s = r.n(o);

            function createCommonjsModule(t, e, r) {
                return t(r = {
                    path: e,
                    exports: {},
                    require: function(t, e) {
                        return function() {
                            throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                        }(t, null == e ? r.path : e)
                    }
                }, r.exports), r.exports
            }
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self && self;
            var a = assert;

            function assert(t, e) {
                if (!t) throw Error(e || "Assertion failed")
            }
            assert.equal = function(t, e, r) {
                if (t != e) throw Error(r || "Assertion failed: " + t + " != " + e)
            };
            var u = createCommonjsModule(function(t, e) {
                    function zero2(t) {
                        return 1 === t.length ? "0" + t : t
                    }

                    function toHex(t) {
                        for (var e = "", r = 0; r < t.length; r++) e += zero2(t[r].toString(16));
                        return e
                    }
                    e.toArray = function(t, e) {
                        if (Array.isArray(t)) return t.slice();
                        if (!t) return [];
                        var r = [];
                        if ("string" != typeof t) {
                            for (var n = 0; n < t.length; n++) r[n] = 0 | t[n];
                            return r
                        }
                        if ("hex" === e) {
                            (t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t);
                            for (var n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16))
                        } else
                            for (var n = 0; n < t.length; n++) {
                                var i = t.charCodeAt(n),
                                    o = i >> 8,
                                    s = 255 & i;
                                o ? r.push(o, s) : r.push(s)
                            }
                        return r
                    }, e.zero2 = zero2, e.toHex = toHex, e.encode = function(t, e) {
                        return "hex" === e ? toHex(t) : t
                    }
                }),
                l = createCommonjsModule(function(t, e) {
                    e.assert = a, e.toArray = u.toArray, e.zero2 = u.zero2, e.toHex = u.toHex, e.encode = u.encode, e.getNAF = function(t, e, r) {
                        var n = Array(Math.max(t.bitLength(), r) + 1);
                        n.fill(0);
                        for (var i = 1 << e + 1, o = t.clone(), s = 0; s < n.length; s++) {
                            var a, u = o.andln(i - 1);
                            o.isOdd() ? (a = u > (i >> 1) - 1 ? (i >> 1) - u : u, o.isubn(a)) : a = 0, n[s] = a, o.iushrn(1)
                        }
                        return n
                    }, e.getJSF = function(t, e) {
                        var r = [
                            [],
                            []
                        ];
                        t = t.clone(), e = e.clone();
                        for (var n = 0, i = 0; t.cmpn(-n) > 0 || e.cmpn(-i) > 0;) {
                            var o, s, a, u = t.andln(3) + n & 3,
                                l = e.andln(3) + i & 3;
                            3 === u && (u = -1), 3 === l && (l = -1), s = (1 & u) == 0 ? 0 : (3 == (o = t.andln(7) + n & 7) || 5 === o) && 2 === l ? -u : u, r[0].push(s), a = (1 & l) == 0 ? 0 : (3 == (o = e.andln(7) + i & 7) || 5 === o) && 2 === u ? -l : l, r[1].push(a), 2 * n === s + 1 && (n = 1 - n), 2 * i === a + 1 && (i = 1 - i), t.iushrn(1), e.iushrn(1)
                        }
                        return r
                    }, e.cachedProperty = function(t, e, r) {
                        var n = "_" + e;
                        t.prototype[e] = function() {
                            return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
                        }
                    }, e.parseBytes = function(t) {
                        return "string" == typeof t ? e.toArray(t, "hex") : t
                    }, e.intFromLE = function(t) {
                        return new(i())(t, "hex", "le")
                    }
                }),
                h = l.getNAF,
                c = l.getJSF,
                d = l.assert;

            function BaseCurve(t, e) {
                this.type = t, this.p = new(i())(e.p, 16), this.red = e.prime ? i().red(e.prime) : i().mont(this.p), this.zero = new(i())(0).toRed(this.red), this.one = new(i())(1).toRed(this.red), this.two = new(i())(2).toRed(this.red), this.n = e.n && new(i())(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = [, , , , ], this._wnafT2 = [, , , , ], this._wnafT3 = [, , , , ], this._wnafT4 = [, , , , ], this._bitLength = this.n ? this.n.bitLength() : 0;
                var r = this.n && this.p.div(this.n);
                !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
            }

            function BasePoint(t, e) {
                this.curve = t, this.type = e, this.precomputed = null
            }
            BaseCurve.prototype.point = function() {
                throw Error("Not implemented")
            }, BaseCurve.prototype.validate = function() {
                throw Error("Not implemented")
            }, BaseCurve.prototype._fixedNafMul = function(t, e) {
                d(t.precomputed);
                var r, n, i = t._getDoubles(),
                    o = h(e, 1, this._bitLength),
                    s = (1 << i.step + 1) - (i.step % 2 == 0 ? 2 : 1);
                s /= 3;
                var a = [];
                for (r = 0; r < o.length; r += i.step) {
                    n = 0;
                    for (var u = r + i.step - 1; u >= r; u--) n = (n << 1) + o[u];
                    a.push(n)
                }
                for (var l = this.jpoint(null, null, null), c = this.jpoint(null, null, null), g = s; g > 0; g--) {
                    for (r = 0; r < a.length; r++)(n = a[r]) === g ? c = c.mixedAdd(i.points[r]) : n === -g && (c = c.mixedAdd(i.points[r].neg()));
                    l = l.add(c)
                }
                return l.toP()
            }, BaseCurve.prototype._wnafMul = function(t, e) {
                var r = 4,
                    n = t._getNAFPoints(r);
                r = n.wnd;
                for (var i = n.points, o = h(e, r, this._bitLength), s = this.jpoint(null, null, null), a = o.length - 1; a >= 0; a--) {
                    for (var u = 0; a >= 0 && 0 === o[a]; a--) u++;
                    if (a >= 0 && u++, s = s.dblp(u), a < 0) break;
                    var l = o[a];
                    d(0 !== l), s = "affine" === t.type ? l > 0 ? s.mixedAdd(i[l - 1 >> 1]) : s.mixedAdd(i[-l - 1 >> 1].neg()) : l > 0 ? s.add(i[l - 1 >> 1]) : s.add(i[-l - 1 >> 1].neg())
                }
                return "affine" === t.type ? s.toP() : s
            }, BaseCurve.prototype._wnafMulAdd = function(t, e, r, n, i) {
                var o, s, a, u = this._wnafT1,
                    l = this._wnafT2,
                    d = this._wnafT3,
                    g = 0;
                for (o = 0; o < n; o++) {
                    var m = (a = e[o])._getNAFPoints(t);
                    u[o] = m.wnd, l[o] = m.points
                }
                for (o = n - 1; o >= 1; o -= 2) {
                    var p = o - 1,
                        y = o;
                    if (1 !== u[p] || 1 !== u[y]) {
                        d[p] = h(r[p], u[p], this._bitLength), d[y] = h(r[y], u[y], this._bitLength), g = Math.max(d[p].length, g), g = Math.max(d[y].length, g);
                        continue
                    }
                    var v = [e[p], null, null, e[y]];
                    0 === e[p].y.cmp(e[y].y) ? (v[1] = e[p].add(e[y]), v[2] = e[p].toJ().mixedAdd(e[y].neg())) : 0 === e[p].y.cmp(e[y].y.redNeg()) ? (v[1] = e[p].toJ().mixedAdd(e[y]), v[2] = e[p].add(e[y].neg())) : (v[1] = e[p].toJ().mixedAdd(e[y]), v[2] = e[p].toJ().mixedAdd(e[y].neg()));
                    var w = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                        b = c(r[p], r[y]);
                    for (s = 0, g = Math.max(b[0].length, g), d[p] = Array(g), d[y] = Array(g); s < g; s++) {
                        var A = 0 | b[0][s],
                            E = 0 | b[1][s];
                        d[p][s] = w[(A + 1) * 3 + (E + 1)], d[y][s] = 0, l[p] = v
                    }
                }
                var _ = this.jpoint(null, null, null),
                    N = this._wnafT4;
                for (o = g; o >= 0; o--) {
                    for (var x = 0; o >= 0;) {
                        var k = !0;
                        for (s = 0; s < n; s++) N[s] = 0 | d[s][o], 0 !== N[s] && (k = !1);
                        if (!k) break;
                        x++, o--
                    }
                    if (o >= 0 && x++, _ = _.dblp(x), o < 0) break;
                    for (s = 0; s < n; s++) {
                        var S = N[s];
                        0 !== S && (S > 0 ? a = l[s][S - 1 >> 1] : S < 0 && (a = l[s][-S - 1 >> 1].neg()), _ = "affine" === a.type ? _.mixedAdd(a) : _.add(a))
                    }
                }
                for (o = 0; o < n; o++) l[o] = null;
                return i ? _ : _.toP()
            }, BaseCurve.BasePoint = BasePoint, BasePoint.prototype.eq = function() {
                throw Error("Not implemented")
            }, BasePoint.prototype.validate = function() {
                return this.curve.validate(this)
            }, BaseCurve.prototype.decodePoint = function(t, e) {
                t = l.toArray(t, e);
                var r = this.p.byteLength();
                if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r) return 6 === t[0] ? d(t[t.length - 1] % 2 == 0) : 7 === t[0] && d(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
                if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
                throw Error("Unknown point format")
            }, BasePoint.prototype.encodeCompressed = function(t) {
                return this.encode(t, !0)
            }, BasePoint.prototype._encode = function(t) {
                var e = this.curve.p.byteLength(),
                    r = this.getX().toArray("be", e);
                return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e))
            }, BasePoint.prototype.encode = function(t, e) {
                return l.encode(this._encode(e), t)
            }, BasePoint.prototype.precompute = function(t) {
                if (this.precomputed) return this;
                var e = {
                    doubles: null,
                    naf: null,
                    beta: null
                };
                return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this
            }, BasePoint.prototype._hasDoubles = function(t) {
                if (!this.precomputed) return !1;
                var e = this.precomputed.doubles;
                return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
            }, BasePoint.prototype._getDoubles = function(t, e) {
                if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                for (var r = [this], n = this, i = 0; i < e; i += t) {
                    for (var o = 0; o < t; o++) n = n.dbl();
                    r.push(n)
                }
                return {
                    step: t,
                    points: r
                }
            }, BasePoint.prototype._getNAFPoints = function(t) {
                if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                for (var e = [this], r = (1 << t) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) e[i] = e[i - 1].add(n);
                return {
                    wnd: t,
                    points: e
                }
            }, BasePoint.prototype._getBeta = function() {
                return null
            }, BasePoint.prototype.dblp = function(t) {
                for (var e = this, r = 0; r < t; r++) e = e.dbl();
                return e
            };
            var g = createCommonjsModule(function(t) {
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
                            var TempCtor = function() {};
                            TempCtor.prototype = e.prototype, t.prototype = new TempCtor, t.prototype.constructor = t
                        }
                    }
                }),
                m = l.assert;

            function ShortCurve(t) {
                BaseCurve.call(this, "short", t), this.a = new(i())(t.a, 16).toRed(this.red), this.b = new(i())(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = [, , , , ], this._endoWnafT2 = [, , , , ]
            }

            function Point(t, e, r, n) {
                BaseCurve.BasePoint.call(this, t, "affine"), null === e && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new(i())(e, 16), this.y = new(i())(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
            }

            function JPoint(t, e, r, n) {
                BaseCurve.BasePoint.call(this, t, "jacobian"), null === e && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new(i())(0)) : (this.x = new(i())(e, 16), this.y = new(i())(r, 16), this.z = new(i())(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
            }
            g(ShortCurve, BaseCurve), ShortCurve.prototype._getEndomorphism = function(t) {
                if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                    if (t.beta) e = new(i())(t.beta, 16).toRed(this.red);
                    else {
                        var e, r, n, o = this._getEndoRoots(this.p);
                        e = (e = 0 > o[0].cmp(o[1]) ? o[0] : o[1]).toRed(this.red)
                    }
                    if (t.lambda) r = new(i())(t.lambda, 16);
                    else {
                        var s = this._getEndoRoots(this.n);
                        0 === this.g.mul(s[0]).x.cmp(this.g.x.redMul(e)) ? r = s[0] : (r = s[1], m(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
                    }
                    return n = t.basis ? t.basis.map(function(t) {
                        return {
                            a: new(i())(t.a, 16),
                            b: new(i())(t.b, 16)
                        }
                    }) : this._getEndoBasis(r), {
                        beta: e,
                        lambda: r,
                        basis: n
                    }
                }
            }, ShortCurve.prototype._getEndoRoots = function(t) {
                var e = t === this.p ? this.red : i().mont(t),
                    r = new(i())(2).toRed(e).redInvm(),
                    n = r.redNeg(),
                    o = new(i())(3).toRed(e).redNeg().redSqrt().redMul(r);
                return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()]
            }, ShortCurve.prototype._getEndoBasis = function(t) {
                for (var e, r, n, o, s, a, u, l, h, c = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), d = t, g = this.n.clone(), m = new(i())(1), p = new(i())(0), y = new(i())(0), v = new(i())(1), w = 0; 0 !== d.cmpn(0);) {
                    var b = g.div(d);
                    l = g.sub(b.mul(d)), h = y.sub(b.mul(m));
                    var A = v.sub(b.mul(p));
                    if (!n && 0 > l.cmp(c)) e = u.neg(), r = m, n = l.neg(), o = h;
                    else if (n && 2 == ++w) break;
                    u = l, g = d, d = l, y = m, m = h, v = p, p = A
                }
                s = l.neg(), a = h;
                var E = n.sqr().add(o.sqr());
                return s.sqr().add(a.sqr()).cmp(E) >= 0 && (s = e, a = r), n.negative && (n = n.neg(), o = o.neg()), s.negative && (s = s.neg(), a = a.neg()), [{
                    a: n,
                    b: o
                }, {
                    a: s,
                    b: a
                }]
            }, ShortCurve.prototype._endoSplit = function(t) {
                var e = this.endo.basis,
                    r = e[0],
                    n = e[1],
                    i = n.b.mul(t).divRound(this.n),
                    o = r.b.neg().mul(t).divRound(this.n),
                    s = i.mul(r.a),
                    a = o.mul(n.a),
                    u = i.mul(r.b),
                    l = o.mul(n.b);
                return {
                    k1: t.sub(s).sub(a),
                    k2: u.add(l).neg()
                }
            }, ShortCurve.prototype.pointFromX = function(t, e) {
                (t = new(i())(t, 16)).red || (t = t.toRed(this.red));
                var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                    n = r.redSqrt();
                if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw Error("invalid point");
                var o = n.fromRed().isOdd();
                return (e && !o || !e && o) && (n = n.redNeg()), this.point(t, n)
            }, ShortCurve.prototype.validate = function(t) {
                if (t.inf) return !0;
                var e = t.x,
                    r = t.y,
                    n = this.a.redMul(e),
                    i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
                return 0 === r.redSqr().redISub(i).cmpn(0)
            }, ShortCurve.prototype._endoWnafMulAdd = function(t, e, r) {
                for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < t.length; o++) {
                    var s = this._endoSplit(e[o]),
                        a = t[o],
                        u = a._getBeta();
                    s.k1.negative && (s.k1.ineg(), a = a.neg(!0)), s.k2.negative && (s.k2.ineg(), u = u.neg(!0)), n[2 * o] = a, n[2 * o + 1] = u, i[2 * o] = s.k1, i[2 * o + 1] = s.k2
                }
                for (var l = this._wnafMulAdd(1, n, i, 2 * o, r), h = 0; h < 2 * o; h++) n[h] = null, i[h] = null;
                return l
            }, g(Point, BaseCurve.BasePoint), ShortCurve.prototype.point = function(t, e, r) {
                return new Point(this, t, e, r)
            }, ShortCurve.prototype.pointFromJSON = function(t, e) {
                return Point.fromJSON(this, t, e)
            }, Point.prototype._getBeta = function() {
                if (this.curve.endo) {
                    var t = this.precomputed;
                    if (t && t.beta) return t.beta;
                    var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                    if (t) {
                        var r = this.curve,
                            endoMul = function(t) {
                                return r.point(t.x.redMul(r.endo.beta), t.y)
                            };
                        t.beta = e, e.precomputed = {
                            beta: null,
                            naf: t.naf && {
                                wnd: t.naf.wnd,
                                points: t.naf.points.map(endoMul)
                            },
                            doubles: t.doubles && {
                                step: t.doubles.step,
                                points: t.doubles.points.map(endoMul)
                            }
                        }
                    }
                    return e
                }
            }, Point.prototype.toJSON = function() {
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
            }, Point.fromJSON = function(t, e, r) {
                "string" == typeof e && (e = JSON.parse(e));
                var n = t.point(e[0], e[1], r);
                if (!e[2]) return n;

                function obj2point(e) {
                    return t.point(e[0], e[1], r)
                }
                var i = e[2];
                return n.precomputed = {
                    beta: null,
                    doubles: i.doubles && {
                        step: i.doubles.step,
                        points: [n].concat(i.doubles.points.map(obj2point))
                    },
                    naf: i.naf && {
                        wnd: i.naf.wnd,
                        points: [n].concat(i.naf.points.map(obj2point))
                    }
                }, n
            }, Point.prototype.inspect = function() {
                return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
            }, Point.prototype.isInfinity = function() {
                return this.inf
            }, Point.prototype.add = function(t) {
                if (this.inf) return t;
                if (t.inf) return this;
                if (this.eq(t)) return this.dbl();
                if (this.neg().eq(t) || 0 === this.x.cmp(t.x)) return this.curve.point(null, null);
                var e = this.y.redSub(t.y);
                0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
                var r = e.redSqr().redISub(this.x).redISub(t.x),
                    n = e.redMul(this.x.redSub(r)).redISub(this.y);
                return this.curve.point(r, n)
            }, Point.prototype.dbl = function() {
                if (this.inf) return this;
                var t = this.y.redAdd(this.y);
                if (0 === t.cmpn(0)) return this.curve.point(null, null);
                var e = this.curve.a,
                    r = this.x.redSqr(),
                    n = t.redInvm(),
                    i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),
                    o = i.redSqr().redISub(this.x.redAdd(this.x)),
                    s = i.redMul(this.x.redSub(o)).redISub(this.y);
                return this.curve.point(o, s)
            }, Point.prototype.getX = function() {
                return this.x.fromRed()
            }, Point.prototype.getY = function() {
                return this.y.fromRed()
            }, Point.prototype.mul = function(t) {
                return (t = new(i())(t, 16), this.isInfinity()) ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
            }, Point.prototype.mulAdd = function(t, e, r) {
                var n = [this, e],
                    i = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
            }, Point.prototype.jmulAdd = function(t, e, r) {
                var n = [this, e],
                    i = [t, r];
                return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
            }, Point.prototype.eq = function(t) {
                return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
            }, Point.prototype.neg = function(t) {
                if (this.inf) return this;
                var e = this.curve.point(this.x, this.y.redNeg());
                if (t && this.precomputed) {
                    var r = this.precomputed,
                        negate = function(t) {
                            return t.neg()
                        };
                    e.precomputed = {
                        naf: r.naf && {
                            wnd: r.naf.wnd,
                            points: r.naf.points.map(negate)
                        },
                        doubles: r.doubles && {
                            step: r.doubles.step,
                            points: r.doubles.points.map(negate)
                        }
                    }
                }
                return e
            }, Point.prototype.toJ = function() {
                return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
            }, g(JPoint, BaseCurve.BasePoint), ShortCurve.prototype.jpoint = function(t, e, r) {
                return new JPoint(this, t, e, r)
            }, JPoint.prototype.toP = function() {
                if (this.isInfinity()) return this.curve.point(null, null);
                var t = this.z.redInvm(),
                    e = t.redSqr(),
                    r = this.x.redMul(e),
                    n = this.y.redMul(e).redMul(t);
                return this.curve.point(r, n)
            }, JPoint.prototype.neg = function() {
                return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
            }, JPoint.prototype.add = function(t) {
                if (this.isInfinity()) return t;
                if (t.isInfinity()) return this;
                var e = t.z.redSqr(),
                    r = this.z.redSqr(),
                    n = this.x.redMul(e),
                    i = t.x.redMul(r),
                    o = this.y.redMul(e.redMul(t.z)),
                    s = t.y.redMul(r.redMul(this.z)),
                    a = n.redSub(i),
                    u = o.redSub(s);
                if (0 === a.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var l = a.redSqr(),
                    h = l.redMul(a),
                    c = n.redMul(l),
                    d = u.redSqr().redIAdd(h).redISub(c).redISub(c),
                    g = u.redMul(c.redISub(d)).redISub(o.redMul(h)),
                    m = this.z.redMul(t.z).redMul(a);
                return this.curve.jpoint(d, g, m)
            }, JPoint.prototype.mixedAdd = function(t) {
                if (this.isInfinity()) return t.toJ();
                if (t.isInfinity()) return this;
                var e = this.z.redSqr(),
                    r = this.x,
                    n = t.x.redMul(e),
                    i = this.y,
                    o = t.y.redMul(e).redMul(this.z),
                    s = r.redSub(n),
                    a = i.redSub(o);
                if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                var u = s.redSqr(),
                    l = u.redMul(s),
                    h = r.redMul(u),
                    c = a.redSqr().redIAdd(l).redISub(h).redISub(h),
                    d = a.redMul(h.redISub(c)).redISub(i.redMul(l)),
                    g = this.z.redMul(s);
                return this.curve.jpoint(c, d, g)
            }, JPoint.prototype.dblp = function(t) {
                if (0 === t || this.isInfinity()) return this;
                if (!t) return this.dbl();
                if (this.curve.zeroA || this.curve.threeA) {
                    var e, r = this;
                    for (e = 0; e < t; e++) r = r.dbl();
                    return r
                }
                var n = this.curve.a,
                    i = this.curve.tinv,
                    o = this.x,
                    s = this.y,
                    a = this.z,
                    u = a.redSqr().redSqr(),
                    l = s.redAdd(s);
                for (e = 0; e < t; e++) {
                    var h = o.redSqr(),
                        c = l.redSqr(),
                        d = c.redSqr(),
                        g = h.redAdd(h).redIAdd(h).redIAdd(n.redMul(u)),
                        m = o.redMul(c),
                        p = g.redSqr().redISub(m.redAdd(m)),
                        y = m.redISub(p),
                        v = g.redMul(y);
                    v = v.redIAdd(v).redISub(d);
                    var w = l.redMul(a);
                    e + 1 < t && (u = u.redMul(d)), o = p, a = w, l = v
                }
                return this.curve.jpoint(o, l.redMul(i), a)
            }, JPoint.prototype.dbl = function() {
                return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
            }, JPoint.prototype._zeroDbl = function() {
                if (this.zOne) {
                    var t, e, r, n = this.x.redSqr(),
                        i = this.y.redSqr(),
                        o = i.redSqr(),
                        s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                    s = s.redIAdd(s);
                    var a = n.redAdd(n).redIAdd(n),
                        u = a.redSqr().redISub(s).redISub(s),
                        l = o.redIAdd(o);
                    l = (l = l.redIAdd(l)).redIAdd(l), t = u, e = a.redMul(s.redISub(u)).redISub(l), r = this.y.redAdd(this.y)
                } else {
                    var h = this.x.redSqr(),
                        c = this.y.redSqr(),
                        d = c.redSqr(),
                        g = this.x.redAdd(c).redSqr().redISub(h).redISub(d);
                    g = g.redIAdd(g);
                    var m = h.redAdd(h).redIAdd(h),
                        p = m.redSqr(),
                        y = d.redIAdd(d);
                    y = (y = y.redIAdd(y)).redIAdd(y), t = p.redISub(g).redISub(g), e = m.redMul(g.redISub(t)).redISub(y), r = (r = this.y.redMul(this.z)).redIAdd(r)
                }
                return this.curve.jpoint(t, e, r)
            }, JPoint.prototype._threeDbl = function() {
                if (this.zOne) {
                    var t, e, r, n = this.x.redSqr(),
                        i = this.y.redSqr(),
                        o = i.redSqr(),
                        s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                    s = s.redIAdd(s);
                    var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                        u = a.redSqr().redISub(s).redISub(s);
                    t = u;
                    var l = o.redIAdd(o);
                    l = (l = l.redIAdd(l)).redIAdd(l), e = a.redMul(s.redISub(u)).redISub(l), r = this.y.redAdd(this.y)
                } else {
                    var h = this.z.redSqr(),
                        c = this.y.redSqr(),
                        d = this.x.redMul(c),
                        g = this.x.redSub(h).redMul(this.x.redAdd(h));
                    g = g.redAdd(g).redIAdd(g);
                    var m = d.redIAdd(d),
                        p = (m = m.redIAdd(m)).redAdd(m);
                    t = g.redSqr().redISub(p), r = this.y.redAdd(this.z).redSqr().redISub(c).redISub(h);
                    var y = c.redSqr();
                    y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y), e = g.redMul(m.redISub(t)).redISub(y)
                }
                return this.curve.jpoint(t, e, r)
            }, JPoint.prototype._dbl = function() {
                var t = this.curve.a,
                    e = this.x,
                    r = this.y,
                    n = this.z,
                    i = n.redSqr().redSqr(),
                    o = e.redSqr(),
                    s = r.redSqr(),
                    a = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),
                    u = e.redAdd(e),
                    l = (u = u.redIAdd(u)).redMul(s),
                    h = a.redSqr().redISub(l.redAdd(l)),
                    c = l.redISub(h),
                    d = s.redSqr();
                d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
                var g = a.redMul(c).redISub(d),
                    m = r.redAdd(r).redMul(n);
                return this.curve.jpoint(h, g, m)
            }, JPoint.prototype.trpl = function() {
                if (!this.curve.zeroA) return this.dbl().add(this);
                var t = this.x.redSqr(),
                    e = this.y.redSqr(),
                    r = this.z.redSqr(),
                    n = e.redSqr(),
                    i = t.redAdd(t).redIAdd(t),
                    o = i.redSqr(),
                    s = this.x.redAdd(e).redSqr().redISub(t).redISub(n),
                    a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
                    u = n.redIAdd(n);
                u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
                var l = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(u),
                    h = e.redMul(l);
                h = (h = h.redIAdd(h)).redIAdd(h);
                var c = this.x.redMul(a).redISub(h);
                c = (c = c.redIAdd(c)).redIAdd(c);
                var d = this.y.redMul(l.redMul(u.redISub(l)).redISub(s.redMul(a)));
                d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
                var g = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
                return this.curve.jpoint(c, d, g)
            }, JPoint.prototype.mul = function(t, e) {
                return t = new(i())(t, e), this.curve._wnafMul(this, t)
            }, JPoint.prototype.eq = function(t) {
                if ("affine" === t.type) return this.eq(t.toJ());
                if (this === t) return !0;
                var e = this.z.redSqr(),
                    r = t.z.redSqr();
                if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
                var n = e.redMul(this.z),
                    i = r.redMul(t.z);
                return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0)
            }, JPoint.prototype.eqXToP = function(t) {
                var e = this.z.redSqr(),
                    r = t.toRed(this.curve.red).redMul(e);
                if (0 === this.x.cmp(r)) return !0;
                for (var n = t.clone(), i = this.curve.redN.redMul(e);;) {
                    if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                    if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0
                }
            }, JPoint.prototype.inspect = function() {
                return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
            }, JPoint.prototype.isInfinity = function() {
                return 0 === this.z.cmpn(0)
            };
            var p = createCommonjsModule(function(t, e) {
                    e.base = BaseCurve, e.short = ShortCurve, e.mont = null, e.edwards = null
                }),
                y = createCommonjsModule(function(t, e) {
                    var r, n = l.assert;

                    function PresetCurve(t) {
                        "short" === t.type ? this.curve = new p.short(t) : "edwards" === t.type ? this.curve = new p.edwards(t) : this.curve = new p.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, n(this.g.validate(), "Invalid curve"), n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
                    }

                    function defineCurve(t, r) {
                        Object.defineProperty(e, t, {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                var n = new PresetCurve(r);
                                return Object.defineProperty(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: n
                                }), n
                            }
                        })
                    }
                    e.PresetCurve = PresetCurve, defineCurve("p192", {
                        type: "short",
                        prime: "p192",
                        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                        hash: s().sha256,
                        gRed: !1,
                        g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
                    }), defineCurve("p224", {
                        type: "short",
                        prime: "p224",
                        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                        hash: s().sha256,
                        gRed: !1,
                        g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
                    }), defineCurve("p256", {
                        type: "short",
                        prime: null,
                        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                        hash: s().sha256,
                        gRed: !1,
                        g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
                    }), defineCurve("p384", {
                        type: "short",
                        prime: null,
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                        hash: s().sha384,
                        gRed: !1,
                        g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
                    }), defineCurve("p521", {
                        type: "short",
                        prime: null,
                        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                        hash: s().sha512,
                        gRed: !1,
                        g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
                    }), defineCurve("curve25519", {
                        type: "mont",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "76d06",
                        b: "1",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: s().sha256,
                        gRed: !1,
                        g: ["9"]
                    }), defineCurve("ed25519", {
                        type: "edwards",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "-1",
                        c: "1",
                        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: s().sha256,
                        gRed: !1,
                        g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
                    });
                    try {
                        r = null.crash()
                    } catch (t) {
                        r = void 0
                    }
                    defineCurve("secp256k1", {
                        type: "short",
                        prime: "k256",
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                        a: "0",
                        b: "7",
                        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                        h: "1",
                        hash: s().sha256,
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
                        g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
                    })
                });

            function HmacDRBG(t) {
                if (!(this instanceof HmacDRBG)) return new HmacDRBG(t);
                this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
                var e = u.toArray(t.entropy, t.entropyEnc || "hex"),
                    r = u.toArray(t.nonce, t.nonceEnc || "hex"),
                    n = u.toArray(t.pers, t.persEnc || "hex");
                a(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, n)
            }
            HmacDRBG.prototype._init = function(t, e, r) {
                var n = t.concat(e).concat(r);
                this.K = Array(this.outLen / 8), this.V = Array(this.outLen / 8);
                for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
                this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
            }, HmacDRBG.prototype._hmac = function() {
                return new(s()).hmac(this.hash, this.K)
            }, HmacDRBG.prototype._update = function(t) {
                var e = this._hmac().update(this.V).update([0]);
                t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest())
            }, HmacDRBG.prototype.reseed = function(t, e, r, n) {
                "string" != typeof e && (n = r, r = e, e = null), t = u.toArray(t, e), r = u.toArray(r, n), a(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r || [])), this._reseed = 1
            }, HmacDRBG.prototype.generate = function(t, e, r, n) {
                if (this._reseed > this.reseedInterval) throw Error("Reseed is required");
                "string" != typeof e && (n = r, r = e, e = null), r && (r = u.toArray(r, n || "hex"), this._update(r));
                for (var i = []; i.length < t;) this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
                var o = i.slice(0, t);
                return this._update(r), this._reseed++, u.encode(o, e)
            };
            var v = l.assert;

            function KeyPair(t, e) {
                this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
            }
            KeyPair.fromPublic = function(t, e, r) {
                return e instanceof KeyPair ? e : new KeyPair(t, {
                    pub: e,
                    pubEnc: r
                })
            }, KeyPair.fromPrivate = function(t, e, r) {
                return e instanceof KeyPair ? e : new KeyPair(t, {
                    priv: e,
                    privEnc: r
                })
            }, KeyPair.prototype.validate = function() {
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
            }, KeyPair.prototype.getPublic = function(t, e) {
                return ("string" == typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e) ? this.pub.encode(e, t) : this.pub
            }, KeyPair.prototype.getPrivate = function(t) {
                return "hex" === t ? this.priv.toString(16, 2) : this.priv
            }, KeyPair.prototype._importPrivate = function(t, e) {
                this.priv = new(i())(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n)
            }, KeyPair.prototype._importPublic = function(t, e) {
                if (t.x || t.y) {
                    "mont" === this.ec.curve.type ? v(t.x, "Need x coordinate") : ("short" === this.ec.curve.type || "edwards" === this.ec.curve.type) && v(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
                    return
                }
                this.pub = this.ec.curve.decodePoint(t, e)
            }, KeyPair.prototype.derive = function(t) {
                return t.validate() || v(t.validate(), "public point not validated"), t.mul(this.priv).getX()
            }, KeyPair.prototype.sign = function(t, e, r) {
                return this.ec.sign(t, this, e, r)
            }, KeyPair.prototype.verify = function(t, e) {
                return this.ec.verify(t, e, this)
            }, KeyPair.prototype.inspect = function() {
                return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
            };
            var w = l.assert;

            function Signature(t, e) {
                if (t instanceof Signature) return t;
                this._importDER(t, e) || (w(t.r && t.s, "Signature without r or s"), this.r = new(i())(t.r, 16), this.s = new(i())(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
            }

            function Position() {
                this.place = 0
            }

            function getLength(t, e) {
                var r = t[e.place++];
                if (!(128 & r)) return r;
                var n = 15 & r;
                if (0 === n || n > 4) return !1;
                for (var i = 0, o = 0, s = e.place; o < n; o++, s++) i <<= 8, i |= t[s], i >>>= 0;
                return !(i <= 127) && (e.place = s, i)
            }

            function rmPadding(t) {
                for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r;) e++;
                return 0 === e ? t : t.slice(e)
            }

            function constructLength(t, e) {
                if (e < 128) {
                    t.push(e);
                    return
                }
                var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
                for (t.push(128 | r); --r;) t.push(e >>> (r << 3) & 255);
                t.push(e)
            }
            Signature.prototype._importDER = function(t, e) {
                t = l.toArray(t, e);
                var r = new Position;
                if (48 !== t[r.place++]) return !1;
                var n = getLength(t, r);
                if (!1 === n || n + r.place !== t.length || 2 !== t[r.place++]) return !1;
                var o = getLength(t, r);
                if (!1 === o) return !1;
                var s = t.slice(r.place, o + r.place);
                if (r.place += o, 2 !== t[r.place++]) return !1;
                var a = getLength(t, r);
                if (!1 === a || t.length !== a + r.place) return !1;
                var u = t.slice(r.place, a + r.place);
                if (0 === s[0]) {
                    if (!(128 & s[1])) return !1;
                    s = s.slice(1)
                }
                if (0 === u[0]) {
                    if (!(128 & u[1])) return !1;
                    u = u.slice(1)
                }
                return this.r = new(i())(s), this.s = new(i())(u), this.recoveryParam = null, !0
            }, Signature.prototype.toDER = function(t) {
                var e = this.r.toArray(),
                    r = this.s.toArray();
                for (128 & e[0] && (e = [0].concat(e)), 128 & r[0] && (r = [0].concat(r)), e = rmPadding(e), r = rmPadding(r); !r[0] && !(128 & r[1]);) r = r.slice(1);
                var n = [2];
                constructLength(n, e.length), (n = n.concat(e)).push(2), constructLength(n, r.length);
                var i = n.concat(r),
                    o = [48];
                return constructLength(o, i.length), o = o.concat(i), l.encode(o, t)
            };
            var rand = function() {
                    throw Error("unsupported")
                },
                b = l.assert;

            function EC(t) {
                if (!(this instanceof EC)) return new EC(t);
                "string" == typeof t && (b(Object.prototype.hasOwnProperty.call(y, t), "Unknown curve " + t), t = y[t]), t instanceof y.PresetCurve && (t = {
                    curve: t
                }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash
            }
            EC.prototype.keyPair = function(t) {
                return new KeyPair(this, t)
            }, EC.prototype.keyFromPrivate = function(t, e) {
                return KeyPair.fromPrivate(this, t, e)
            }, EC.prototype.keyFromPublic = function(t, e) {
                return KeyPair.fromPublic(this, t, e)
            }, EC.prototype.genKeyPair = function(t) {
                t || (t = {});
                for (var e = new HmacDRBG({
                        hash: this.hash,
                        pers: t.pers,
                        persEnc: t.persEnc || "utf8",
                        entropy: t.entropy || rand(this.hash.hmacStrength),
                        entropyEnc: t.entropy && t.entropyEnc || "utf8",
                        nonce: this.n.toArray()
                    }), r = this.n.byteLength(), n = this.n.sub(new(i())(2));;) {
                    var o = new(i())(e.generate(r));
                    if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o)
                }
            }, EC.prototype._truncateToN = function(t, e) {
                var r = 8 * t.byteLength() - this.n.bitLength();
                return (r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0) ? t.sub(this.n) : t
            }, EC.prototype.sign = function(t, e, r, n) {
                "object" == typeof r && (n = r, r = null), n || (n = {}), e = this.keyFromPrivate(e, r), t = this._truncateToN(new(i())(t, 16));
                for (var o = this.n.byteLength(), s = e.getPrivate().toArray("be", o), a = t.toArray("be", o), u = new HmacDRBG({
                        hash: this.hash,
                        entropy: s,
                        nonce: a,
                        pers: n.pers,
                        persEnc: n.persEnc || "utf8"
                    }), l = this.n.sub(new(i())(1)), h = 0;; h++) {
                    var c = n.k ? n.k(h) : new(i())(u.generate(this.n.byteLength()));
                    if (!(0 >= (c = this._truncateToN(c, !0)).cmpn(1) || c.cmp(l) >= 0)) {
                        var d = this.g.mul(c);
                        if (!d.isInfinity()) {
                            var g = d.getX(),
                                m = g.umod(this.n);
                            if (0 !== m.cmpn(0)) {
                                var p = c.invm(this.n).mul(m.mul(e.getPrivate()).iadd(t));
                                if (0 !== (p = p.umod(this.n)).cmpn(0)) {
                                    var y = (d.getY().isOdd() ? 1 : 0) | (0 !== g.cmp(m) ? 2 : 0);
                                    return n.canonical && p.cmp(this.nh) > 0 && (p = this.n.sub(p), y ^= 1), new Signature({
                                        r: m,
                                        s: p,
                                        recoveryParam: y
                                    })
                                }
                            }
                        }
                    }
                }
            }, EC.prototype.verify = function(t, e, r, n) {
                t = this._truncateToN(new(i())(t, 16)), r = this.keyFromPublic(r, n);
                var o, s = (e = new Signature(e, "hex")).r,
                    a = e.s;
                if (0 > s.cmpn(1) || s.cmp(this.n) >= 0 || 0 > a.cmpn(1) || a.cmp(this.n) >= 0) return !1;
                var u = a.invm(this.n),
                    l = u.mul(t).umod(this.n),
                    h = u.mul(s).umod(this.n);
                return this.curve._maxwellTrick ? !(o = this.g.jmulAdd(l, r.getPublic(), h)).isInfinity() && o.eqXToP(s) : !(o = this.g.mulAdd(l, r.getPublic(), h)).isInfinity() && 0 === o.getX().umod(this.n).cmp(s)
            }, EC.prototype.recoverPubKey = function(t, e, r, n) {
                b((3 & r) === r, "The recovery param is more than two bits"), e = new Signature(e, n);
                var o = this.n,
                    s = new(i())(t),
                    a = e.r,
                    u = e.s,
                    l = 1 & r,
                    h = r >> 1;
                if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h) throw Error("Unable to find sencond key candinate");
                a = h ? this.curve.pointFromX(a.add(this.curve.n), l) : this.curve.pointFromX(a, l);
                var c = e.r.invm(o),
                    d = o.sub(s).mul(c).umod(o),
                    g = u.mul(c).umod(o);
                return this.g.mulAdd(d, a, g)
            }, EC.prototype.getKeyRecoveryParam = function(t, e, r, n) {
                if (null !== (e = new Signature(e, n)).recoveryParam) return e.recoveryParam;
                for (var i, o = 0; o < 4; o++) {
                    try {
                        i = this.recoverPubKey(t, e, o)
                    } catch (t) {
                        continue
                    }
                    if (i.eq(r)) return o
                }
                throw Error("Unable to find valid recovery factor")
            };
            var A = createCommonjsModule(function(t, e) {
                    e.version = "6.5.4", e.utils = l, e.rand = function() {
                        throw Error("unsupported")
                    }, e.curve = p, e.curves = y, e.ec = EC, e.eddsa = null
                }).ec,
                E = r(57273),
                _ = r(17213),
                N = r(36288);
            let x = new N.Logger("signing-key/5.7.0"),
                k = null;

            function getCurve() {
                return k || (k = new A("secp256k1")), k
            }
            let SigningKey = class SigningKey {
                constructor(t) {
                    (0, _.defineReadOnly)(this, "curve", "secp256k1"), (0, _.defineReadOnly)(this, "privateKey", (0, E.hexlify)(t)), 32 !== (0, E.hexDataLength)(this.privateKey) && x.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
                    let e = getCurve().keyFromPrivate((0, E.arrayify)(this.privateKey));
                    (0, _.defineReadOnly)(this, "publicKey", "0x" + e.getPublic(!1, "hex")), (0, _.defineReadOnly)(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")), (0, _.defineReadOnly)(this, "_isSigningKey", !0)
                }
                _addPoint(t) {
                    let e = getCurve().keyFromPublic((0, E.arrayify)(this.publicKey)),
                        r = getCurve().keyFromPublic((0, E.arrayify)(t));
                    return "0x" + e.pub.add(r.pub).encodeCompressed("hex")
                }
                signDigest(t) {
                    let e = getCurve().keyFromPrivate((0, E.arrayify)(this.privateKey)),
                        r = (0, E.arrayify)(t);
                    32 !== r.length && x.throwArgumentError("bad digest length", "digest", t);
                    let n = e.sign(r, {
                        canonical: !0
                    });
                    return (0, E.splitSignature)({
                        recoveryParam: n.recoveryParam,
                        r: (0, E.hexZeroPad)("0x" + n.r.toString(16), 32),
                        s: (0, E.hexZeroPad)("0x" + n.s.toString(16), 32)
                    })
                }
                computeSharedSecret(t) {
                    let e = getCurve().keyFromPrivate((0, E.arrayify)(this.privateKey)),
                        r = getCurve().keyFromPublic((0, E.arrayify)(computePublicKey(t)));
                    return (0, E.hexZeroPad)("0x" + e.derive(r.getPublic()).toString(16), 32)
                }
                static isSigningKey(t) {
                    return !!(t && t._isSigningKey)
                }
            };

            function recoverPublicKey(t, e) {
                let r = (0, E.splitSignature)(e),
                    n = {
                        r: (0, E.arrayify)(r.r),
                        s: (0, E.arrayify)(r.s)
                    };
                return "0x" + getCurve().recoverPubKey((0, E.arrayify)(t), n, r.recoveryParam).encode("hex", !1)
            }

            function computePublicKey(t, e) {
                let r = (0, E.arrayify)(t);
                if (32 === r.length) {
                    let t = new SigningKey(r);
                    return e ? "0x" + getCurve().keyFromPrivate(r).getPublic(!0, "hex") : t.publicKey
                }
                return 33 === r.length ? e ? (0, E.hexlify)(r) : "0x" + getCurve().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? e ? "0x" + getCurve().keyFromPublic(r).getPublic(!0, "hex") : (0, E.hexlify)(r) : x.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
            }
        },
        58337: function(t, e, r) {
            "use strict";
            r.d(e, {
                Uj: function() {
                    return o
                },
                te: function() {
                    return h
                },
                Uw: function() {
                    return s
                },
                U$: function() {
                    return _toEscapedUtf8String
                },
                uu: function() {
                    return _toUtf8String
                },
                Y0: function() {
                    return toUtf8Bytes
                },
                XL: function() {
                    return toUtf8CodePoints
                },
                ZN: function() {
                    return toUtf8String
                }
            });
            var n, i, o, s, a = r(57273),
                u = r(36288);
            let l = new u.Logger("strings/5.7.0");

            function ignoreFunc(t, e, r, n, i) {
                if (t === s.BAD_PREFIX || t === s.UNEXPECTED_CONTINUE) {
                    let t = 0;
                    for (let n = e + 1; n < r.length && r[n] >> 6 == 2; n++) t++;
                    return t
                }
                return t === s.OVERRUN ? r.length - e - 1 : 0
            }(n = o || (o = {})).current = "", n.NFC = "NFC", n.NFD = "NFD", n.NFKC = "NFKC", n.NFKD = "NFKD", (i = s || (s = {})).UNEXPECTED_CONTINUE = "unexpected continuation byte", i.BAD_PREFIX = "bad codepoint prefix", i.OVERRUN = "string overrun", i.MISSING_CONTINUE = "missing continuation byte", i.OUT_OF_RANGE = "out of UTF-8 range", i.UTF16_SURROGATE = "UTF-16 surrogate", i.OVERLONG = "overlong representation";
            let h = Object.freeze({
                error: function(t, e, r, n, i) {
                    return l.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, "bytes", r)
                },
                ignore: ignoreFunc,
                replace: function(t, e, r, n, i) {
                    return t === s.OVERLONG ? (n.push(i), 0) : (n.push(65533), ignoreFunc(t, e, r, n, i))
                }
            });

            function getUtf8CodePoints(t, e) {
                null == e && (e = h.error), t = (0, a.arrayify)(t);
                let r = [],
                    n = 0;
                for (; n < t.length;) {
                    let i = t[n++];
                    if (i >> 7 == 0) {
                        r.push(i);
                        continue
                    }
                    let o = null,
                        a = null;
                    if ((224 & i) == 192) o = 1, a = 127;
                    else if ((240 & i) == 224) o = 2, a = 2047;
                    else if ((248 & i) == 240) o = 3, a = 65535;
                    else {
                        (192 & i) == 128 ? n += e(s.UNEXPECTED_CONTINUE, n - 1, t, r) : n += e(s.BAD_PREFIX, n - 1, t, r);
                        continue
                    }
                    if (n - 1 + o >= t.length) {
                        n += e(s.OVERRUN, n - 1, t, r);
                        continue
                    }
                    let u = i & (1 << 8 - o - 1) - 1;
                    for (let i = 0; i < o; i++) {
                        let i = t[n];
                        if ((192 & i) != 128) {
                            n += e(s.MISSING_CONTINUE, n, t, r), u = null;
                            break
                        }
                        u = u << 6 | 63 & i, n++
                    }
                    if (null !== u) {
                        if (u > 1114111) {
                            n += e(s.OUT_OF_RANGE, n - 1 - o, t, r, u);
                            continue
                        }
                        if (u >= 55296 && u <= 57343) {
                            n += e(s.UTF16_SURROGATE, n - 1 - o, t, r, u);
                            continue
                        }
                        if (u <= a) {
                            n += e(s.OVERLONG, n - 1 - o, t, r, u);
                            continue
                        }
                        r.push(u)
                    }
                }
                return r
            }

            function toUtf8Bytes(t, e = o.current) {
                e != o.current && (l.checkNormalize(), t = t.normalize(e));
                let r = [];
                for (let e = 0; e < t.length; e++) {
                    let n = t.charCodeAt(e);
                    if (n < 128) r.push(n);
                    else if (n < 2048) r.push(n >> 6 | 192), r.push(63 & n | 128);
                    else if ((64512 & n) == 55296) {
                        e++;
                        let i = t.charCodeAt(e);
                        if (e >= t.length || (64512 & i) != 56320) throw Error("invalid utf-8 string");
                        let o = 65536 + ((1023 & n) << 10) + (1023 & i);
                        r.push(o >> 18 | 240), r.push(o >> 12 & 63 | 128), r.push(o >> 6 & 63 | 128), r.push(63 & o | 128)
                    } else r.push(n >> 12 | 224), r.push(n >> 6 & 63 | 128), r.push(63 & n | 128)
                }
                return (0, a.arrayify)(r)
            }

            function escapeChar(t) {
                let e = "0000" + t.toString(16);
                return "\\u" + e.substring(e.length - 4)
            }

            function _toEscapedUtf8String(t, e) {
                return '"' + getUtf8CodePoints(t, e).map(t => {
                    if (t < 256) {
                        switch (t) {
                            case 8:
                                return "\\b";
                            case 9:
                                return "\\t";
                            case 10:
                                return "\\n";
                            case 13:
                                return "\\r";
                            case 34:
                                return '\\"';
                            case 92:
                                return "\\\\"
                        }
                        if (t >= 32 && t < 127) return String.fromCharCode(t)
                    }
                    return t <= 65535 ? escapeChar(t) : escapeChar(((t -= 65536) >> 10 & 1023) + 55296) + escapeChar((1023 & t) + 56320)
                }).join("") + '"'
            }

            function _toUtf8String(t) {
                return t.map(t => t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(((t -= 65536) >> 10 & 1023) + 55296, (1023 & t) + 56320)).join("")
            }

            function toUtf8String(t, e) {
                return _toUtf8String(getUtf8CodePoints(t, e))
            }

            function toUtf8CodePoints(t, e = o.current) {
                return getUtf8CodePoints(toUtf8Bytes(t, e))
            }
        },
        12060: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                TransactionTypes: function() {
                    return i
                },
                accessListify: function() {
                    return accessListify
                },
                computeAddress: function() {
                    return computeAddress
                },
                parse: function() {
                    return parse
                },
                recoverAddress: function() {
                    return recoverAddress
                },
                serialize: function() {
                    return serialize
                }
            });
            var n, i, o = r(18994),
                s = r(92598),
                a = r(57273),
                u = r(53690),
                l = r(14184),
                h = r(17213),
                c = r(7054),
                d = r(74731),
                g = r(36288);
            let m = new g.Logger("transactions/5.7.0");

            function handleAddress(t) {
                return "0x" === t ? null : (0, o.getAddress)(t)
            }

            function handleNumber(t) {
                return "0x" === t ? u._Y : s.O$.from(t)
            }(n = i || (i = {}))[n.legacy = 0] = "legacy", n[n.eip2930 = 1] = "eip2930", n[n.eip1559 = 2] = "eip1559";
            let p = [{
                    name: "nonce",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "gasPrice",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "gasLimit",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "to",
                    length: 20
                }, {
                    name: "value",
                    maxLength: 32,
                    numeric: !0
                }, {
                    name: "data"
                }],
                y = {
                    chainId: !0,
                    data: !0,
                    gasLimit: !0,
                    gasPrice: !0,
                    nonce: !0,
                    to: !0,
                    type: !0,
                    value: !0
                };

            function computeAddress(t) {
                let e = (0, d.computePublicKey)(t);
                return (0, o.getAddress)((0, a.hexDataSlice)((0, l.keccak256)((0, a.hexDataSlice)(e, 1)), 12))
            }

            function recoverAddress(t, e) {
                return computeAddress((0, d.recoverPublicKey)((0, a.arrayify)(t), e))
            }

            function formatNumber(t, e) {
                let r = (0, a.stripZeros)(s.O$.from(t).toHexString());
                return r.length > 32 && m.throwArgumentError("invalid length for " + e, "transaction:" + e, t), r
            }

            function accessSetify(t, e) {
                return {
                    address: (0, o.getAddress)(t),
                    storageKeys: (e || []).map((e, r) => (32 !== (0, a.hexDataLength)(e) && m.throwArgumentError("invalid access list storageKey", `accessList[${t}:${r}]`, e), e.toLowerCase()))
                }
            }

            function accessListify(t) {
                if (Array.isArray(t)) return t.map((t, e) => Array.isArray(t) ? (t.length > 2 && m.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${e}]`, t), accessSetify(t[0], t[1])) : accessSetify(t.address, t.storageKeys));
                let e = Object.keys(t).map(e => {
                    let r = t[e].reduce((t, e) => (t[e] = !0, t), {});
                    return accessSetify(e, Object.keys(r).sort())
                });
                return e.sort((t, e) => t.address.localeCompare(e.address)), e
            }

            function formatAccessList(t) {
                return accessListify(t).map(t => [t.address, t.storageKeys])
            }

            function _serializeEip1559(t, e) {
                if (null != t.gasPrice) {
                    let e = s.O$.from(t.gasPrice),
                        r = s.O$.from(t.maxFeePerGas || 0);
                    e.eq(r) || m.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
                        gasPrice: e,
                        maxFeePerGas: r
                    })
                }
                let r = [formatNumber(t.chainId || 0, "chainId"), formatNumber(t.nonce || 0, "nonce"), formatNumber(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), formatNumber(t.maxFeePerGas || 0, "maxFeePerGas"), formatNumber(t.gasLimit || 0, "gasLimit"), null != t.to ? (0, o.getAddress)(t.to) : "0x", formatNumber(t.value || 0, "value"), t.data || "0x", formatAccessList(t.accessList || [])];
                if (e) {
                    let t = (0, a.splitSignature)(e);
                    r.push(formatNumber(t.recoveryParam, "recoveryParam")), r.push((0, a.stripZeros)(t.r)), r.push((0, a.stripZeros)(t.s))
                }
                return (0, a.hexConcat)(["0x02", c.encode(r)])
            }

            function _serializeEip2930(t, e) {
                let r = [formatNumber(t.chainId || 0, "chainId"), formatNumber(t.nonce || 0, "nonce"), formatNumber(t.gasPrice || 0, "gasPrice"), formatNumber(t.gasLimit || 0, "gasLimit"), null != t.to ? (0, o.getAddress)(t.to) : "0x", formatNumber(t.value || 0, "value"), t.data || "0x", formatAccessList(t.accessList || [])];
                if (e) {
                    let t = (0, a.splitSignature)(e);
                    r.push(formatNumber(t.recoveryParam, "recoveryParam")), r.push((0, a.stripZeros)(t.r)), r.push((0, a.stripZeros)(t.s))
                }
                return (0, a.hexConcat)(["0x01", c.encode(r)])
            }

            function serialize(t, e) {
                if (null == t.type || 0 === t.type) return null != t.accessList && m.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", t),
                    function(t, e) {
                        (0, h.checkProperties)(t, y);
                        let r = [];
                        p.forEach(function(e) {
                            let n = t[e.name] || [],
                                i = {};
                            e.numeric && (i.hexPad = "left"), n = (0, a.arrayify)((0, a.hexlify)(n, i)), e.length && n.length !== e.length && n.length > 0 && m.throwArgumentError("invalid length for " + e.name, "transaction:" + e.name, n), e.maxLength && (n = (0, a.stripZeros)(n)).length > e.maxLength && m.throwArgumentError("invalid length for " + e.name, "transaction:" + e.name, n), r.push((0, a.hexlify)(n))
                        });
                        let n = 0;
                        if (null != t.chainId ? "number" != typeof(n = t.chainId) && m.throwArgumentError("invalid transaction.chainId", "transaction", t) : e && !(0, a.isBytesLike)(e) && e.v > 28 && (n = Math.floor((e.v - 35) / 2)), 0 !== n && (r.push((0, a.hexlify)(n)), r.push("0x"), r.push("0x")), !e) return c.encode(r);
                        let i = (0, a.splitSignature)(e),
                            o = 27 + i.recoveryParam;
                        return 0 !== n ? (r.pop(), r.pop(), r.pop(), o += 2 * n + 8, i.v > 28 && i.v !== o && m.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", e)) : i.v !== o && m.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", e), r.push((0, a.hexlify)(o)), r.push((0, a.stripZeros)((0, a.arrayify)(i.r))), r.push((0, a.stripZeros)((0, a.arrayify)(i.s))), c.encode(r)
                    }(t, e);
                switch (t.type) {
                    case 1:
                        return _serializeEip2930(t, e);
                    case 2:
                        return _serializeEip1559(t, e)
                }
                return m.throwError(`unsupported transaction type: ${t.type}`, g.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "serializeTransaction",
                    transactionType: t.type
                })
            }

            function _parseEipSignature(t, e, r) {
                try {
                    let r = handleNumber(e[0]).toNumber();
                    if (0 !== r && 1 !== r) throw Error("bad recid");
                    t.v = r
                } catch (t) {
                    m.throwArgumentError("invalid v for transaction type: 1", "v", e[0])
                }
                t.r = (0, a.hexZeroPad)(e[1], 32), t.s = (0, a.hexZeroPad)(e[2], 32);
                try {
                    let e = (0, l.keccak256)(r(t));
                    t.from = recoverAddress(e, {
                        r: t.r,
                        s: t.s,
                        recoveryParam: t.v
                    })
                } catch (t) {}
            }

            function parse(t) {
                let e = (0, a.arrayify)(t);
                if (e[0] > 127) return function(t) {
                    let e = c.decode(t);
                    9 !== e.length && 6 !== e.length && m.throwArgumentError("invalid raw transaction", "rawTransaction", t);
                    let r = {
                        nonce: handleNumber(e[0]).toNumber(),
                        gasPrice: handleNumber(e[1]),
                        gasLimit: handleNumber(e[2]),
                        to: handleAddress(e[3]),
                        value: handleNumber(e[4]),
                        data: e[5],
                        chainId: 0
                    };
                    if (6 === e.length) return r;
                    try {
                        r.v = s.O$.from(e[6]).toNumber()
                    } catch (t) {
                        return r
                    }
                    if (r.r = (0, a.hexZeroPad)(e[7], 32), r.s = (0, a.hexZeroPad)(e[8], 32), s.O$.from(r.r).isZero() && s.O$.from(r.s).isZero()) r.chainId = r.v, r.v = 0;
                    else {
                        r.chainId = Math.floor((r.v - 35) / 2), r.chainId < 0 && (r.chainId = 0);
                        let n = r.v - 27,
                            i = e.slice(0, 6);
                        0 !== r.chainId && (i.push((0, a.hexlify)(r.chainId)), i.push("0x"), i.push("0x"), n -= 2 * r.chainId + 8);
                        let o = (0, l.keccak256)(c.encode(i));
                        try {
                            r.from = recoverAddress(o, {
                                r: (0, a.hexlify)(r.r),
                                s: (0, a.hexlify)(r.s),
                                recoveryParam: n
                            })
                        } catch (t) {}
                        r.hash = (0, l.keccak256)(t)
                    }
                    return r.type = null, r
                }(e);
                switch (e[0]) {
                    case 1:
                        return function(t) {
                            let e = c.decode(t.slice(1));
                            8 !== e.length && 11 !== e.length && m.throwArgumentError("invalid component count for transaction type: 1", "payload", (0, a.hexlify)(t));
                            let r = {
                                type: 1,
                                chainId: handleNumber(e[0]).toNumber(),
                                nonce: handleNumber(e[1]).toNumber(),
                                gasPrice: handleNumber(e[2]),
                                gasLimit: handleNumber(e[3]),
                                to: handleAddress(e[4]),
                                value: handleNumber(e[5]),
                                data: e[6],
                                accessList: accessListify(e[7])
                            };
                            return 8 === e.length || (r.hash = (0, l.keccak256)(t), _parseEipSignature(r, e.slice(8), _serializeEip2930)), r
                        }(e);
                    case 2:
                        return function(t) {
                            let e = c.decode(t.slice(1));
                            9 !== e.length && 12 !== e.length && m.throwArgumentError("invalid component count for transaction type: 2", "payload", (0, a.hexlify)(t));
                            let r = handleNumber(e[2]),
                                n = handleNumber(e[3]),
                                i = {
                                    type: 2,
                                    chainId: handleNumber(e[0]).toNumber(),
                                    nonce: handleNumber(e[1]).toNumber(),
                                    maxPriorityFeePerGas: r,
                                    maxFeePerGas: n,
                                    gasPrice: null,
                                    gasLimit: handleNumber(e[4]),
                                    to: handleAddress(e[5]),
                                    value: handleNumber(e[6]),
                                    data: e[7],
                                    accessList: accessListify(e[8])
                                };
                            return 9 === e.length || (i.hash = (0, l.keccak256)(t), _parseEipSignature(i, e.slice(9), _serializeEip1559)), i
                        }(e)
                }
                return m.throwError(`unsupported transaction type: ${e[0]}`, g.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "parseTransaction",
                    transactionType: e[0]
                })
            }
        },
        73760: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                commify: function() {
                    return commify
                },
                formatEther: function() {
                    return formatEther
                },
                formatUnits: function() {
                    return formatUnits
                },
                parseEther: function() {
                    return parseEther
                },
                parseUnits: function() {
                    return parseUnits
                }
            });
            var n = r(84844),
                i = r(36288);
            let o = new i.Logger("units/5.7.0"),
                s = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];

            function commify(t) {
                let e = String(t).split(".");
                (e.length > 2 || !e[0].match(/^-?[0-9]*$/) || e[1] && !e[1].match(/^[0-9]*$/) || "." === t || "-." === t) && o.throwArgumentError("invalid value", "value", t);
                let r = e[0],
                    n = "";
                for ("-" === r.substring(0, 1) && (n = "-", r = r.substring(1));
                    "0" === r.substring(0, 1);) r = r.substring(1);
                "" === r && (r = "0");
                let i = "";
                for (2 === e.length && (i = "." + (e[1] || "0")); i.length > 2 && "0" === i[i.length - 1];) i = i.substring(0, i.length - 1);
                let s = [];
                for (; r.length;) {
                    if (r.length <= 3) {
                        s.unshift(r);
                        break
                    } {
                        let t = r.length - 3;
                        s.unshift(r.substring(t)), r = r.substring(0, t)
                    }
                }
                return n + s.join(",") + i
            }

            function formatUnits(t, e) {
                if ("string" == typeof e) {
                    let t = s.indexOf(e); - 1 !== t && (e = 3 * t)
                }
                return (0, n.S5)(t, null != e ? e : 18)
            }

            function parseUnits(t, e) {
                if ("string" != typeof t && o.throwArgumentError("value must be a string", "value", t), "string" == typeof e) {
                    let t = s.indexOf(e); - 1 !== t && (e = 3 * t)
                }
                return (0, n.Ox)(t, null != e ? e : 18)
            }

            function formatEther(t) {
                return formatUnits(t, 18)
            }

            function parseEther(t) {
                return parseUnits(t, 18)
            }
        },
        39318: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                _fetchData: function() {
                    return _fetchData
                },
                fetchJson: function() {
                    return fetchJson
                },
                poll: function() {
                    return poll
                }
            });
            var n = r(72275),
                i = r(57273),
                o = r(17213),
                s = r(58337),
                a = r(36288);
            let u = new a.Logger("web/5.7.1");

            function staller(t) {
                return new Promise(e => {
                    setTimeout(e, t)
                })
            }

            function bodyify(t, e) {
                if (null == t) return null;
                if ("string" == typeof t) return t;
                if ((0, i.isBytesLike)(t)) {
                    if (e && ("text" === e.split("/")[0] || "application/json" === e.split(";")[0].trim())) try {
                        return (0, s.ZN)(t)
                    } catch (t) {}
                    return (0, i.hexlify)(t)
                }
                return t
            }

            function _fetchData(t, e, r) {
                let l = "object" == typeof t && null != t.throttleLimit ? t.throttleLimit : 12;
                u.assertArgument(l > 0 && l % 1 == 0, "invalid connection throttle limit", "connection.throttleLimit", l);
                let h = "object" == typeof t ? t.throttleCallback : null,
                    c = "object" == typeof t && "number" == typeof t.throttleSlotInterval ? t.throttleSlotInterval : 100;
                u.assertArgument(c > 0 && c % 1 == 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", c);
                let d = "object" == typeof t && !!t.errorPassThrough,
                    g = {},
                    m = null,
                    p = {
                        method: "GET"
                    },
                    y = !1,
                    v = 12e4;
                if ("string" == typeof t) m = t;
                else if ("object" == typeof t) {
                    if ((null == t || null == t.url) && u.throwArgumentError("missing URL", "connection.url", t), m = t.url, "number" == typeof t.timeout && t.timeout > 0 && (v = t.timeout), t.headers)
                        for (let e in t.headers) g[e.toLowerCase()] = {
                            key: e,
                            value: String(t.headers[e])
                        }, ["if-none-match", "if-modified-since"].indexOf(e.toLowerCase()) >= 0 && (y = !0);
                    if (p.allowGzip = !!t.allowGzip, null != t.user && null != t.password) {
                        "https:" !== m.substring(0, 6) && !0 !== t.allowInsecureAuthentication && u.throwError("basic authentication requires a secure https url", a.Logger.errors.INVALID_ARGUMENT, {
                            argument: "url",
                            url: m,
                            user: t.user,
                            password: "[REDACTED]"
                        });
                        let e = t.user + ":" + t.password;
                        g.authorization = {
                            key: "Authorization",
                            value: "Basic " + (0, n.c)((0, s.Y0)(e))
                        }
                    }
                    null != t.skipFetchSetup && (p.skipFetchSetup = !!t.skipFetchSetup), null != t.fetchOptions && (p.fetchOptions = (0, o.shallowCopy)(t.fetchOptions))
                }
                let w = RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
                    b = m ? m.match(w) : null;
                if (b) try {
                    var A;
                    let t = {
                            statusCode: 200,
                            statusMessage: "OK",
                            headers: {
                                "content-type": b[1] || "text/plain"
                            },
                            body: b[2] ? (0, n.J)(b[3]) : (A = b[3], (0, s.Y0)(A.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) => String.fromCharCode(parseInt(e, 16)))))
                        },
                        e = t.body;
                    return r && (e = r(t.body, t)), Promise.resolve(e)
                } catch (t) {
                    u.throwError("processing response error", a.Logger.errors.SERVER_ERROR, {
                        body: bodyify(b[1], b[2]),
                        error: t,
                        requestBody: null,
                        requestMethod: "GET",
                        url: m
                    })
                }
                e && (p.method = "POST", p.body = e, null == g["content-type"] && (g["content-type"] = {
                    key: "Content-Type",
                    value: "application/octet-stream"
                }), null == g["content-length"] && (g["content-length"] = {
                    key: "Content-Length",
                    value: String(e.length)
                }));
                let E = {};
                Object.keys(g).forEach(t => {
                    let e = g[t];
                    E[e.key] = e.value
                }), p.headers = E;
                let _ = function() {
                        let t = null,
                            e = new Promise(function(e, r) {
                                v && (t = setTimeout(() => {
                                    null != t && (t = null, r(u.makeError("timeout", a.Logger.errors.TIMEOUT, {
                                        requestBody: bodyify(p.body, E["content-type"]),
                                        requestMethod: p.method,
                                        timeout: v,
                                        url: m
                                    })))
                                }, v))
                            });
                        return {
                            promise: e,
                            cancel: function() {
                                null != t && (clearTimeout(t), t = null)
                            }
                        }
                    }(),
                    N = function() {
                        var t, e, n, o;
                        return t = this, e = void 0, n = void 0, o = function*() {
                            for (let t = 0; t < l; t++) {
                                let e = null;
                                try {
                                    if (e = yield function(t, e) {
                                            var r, n, o, s;
                                            return r = this, n = void 0, o = void 0, s = function*() {
                                                null == e && (e = {});
                                                let r = {
                                                    method: e.method || "GET",
                                                    headers: e.headers || {},
                                                    body: e.body || void 0
                                                };
                                                if (!0 !== e.skipFetchSetup && (r.mode = "cors", r.cache = "no-cache", r.credentials = "same-origin", r.redirect = "follow", r.referrer = "client"), null != e.fetchOptions) {
                                                    let t = e.fetchOptions;
                                                    t.mode && (r.mode = t.mode), t.cache && (r.cache = t.cache), t.credentials && (r.credentials = t.credentials), t.redirect && (r.redirect = t.redirect), t.referrer && (r.referrer = t.referrer)
                                                }
                                                let n = yield fetch(t, r), o = yield n.arrayBuffer(), s = {};
                                                return n.headers.forEach ? n.headers.forEach((t, e) => {
                                                    s[e.toLowerCase()] = t
                                                }) : n.headers.keys().forEach(t => {
                                                    s[t.toLowerCase()] = n.headers.get(t)
                                                }), {
                                                    headers: s,
                                                    statusCode: n.status,
                                                    statusMessage: n.statusText,
                                                    body: (0, i.arrayify)(new Uint8Array(o))
                                                }
                                            }, new(o || (o = Promise))(function(t, e) {
                                                function fulfilled(t) {
                                                    try {
                                                        step(s.next(t))
                                                    } catch (t) {
                                                        e(t)
                                                    }
                                                }

                                                function rejected(t) {
                                                    try {
                                                        step(s.throw(t))
                                                    } catch (t) {
                                                        e(t)
                                                    }
                                                }

                                                function step(e) {
                                                    var r;
                                                    e.done ? t(e.value) : ((r = e.value) instanceof o ? r : new o(function(t) {
                                                        t(r)
                                                    })).then(fulfilled, rejected)
                                                }
                                                step((s = s.apply(r, n || [])).next())
                                            })
                                        }(m, p), t < l) {
                                        if (301 === e.statusCode || 302 === e.statusCode) {
                                            let t = e.headers.location || "";
                                            if ("GET" === p.method && t.match(/^https:/)) {
                                                m = e.headers.location;
                                                continue
                                            }
                                        } else if (429 === e.statusCode) {
                                            let r = !0;
                                            if (h && (r = yield h(t, m)), r) {
                                                let r = 0,
                                                    n = e.headers["retry-after"];
                                                r = "string" == typeof n && n.match(/^[1-9][0-9]*$/) ? 1e3 * parseInt(n) : c * parseInt(String(Math.random() * Math.pow(2, t))), yield staller(r);
                                                continue
                                            }
                                        }
                                    }
                                } catch (t) {
                                    null == (e = t.response) && (_.cancel(), u.throwError("missing response", a.Logger.errors.SERVER_ERROR, {
                                        requestBody: bodyify(p.body, E["content-type"]),
                                        requestMethod: p.method,
                                        serverError: t,
                                        url: m
                                    }))
                                }
                                let n = e.body;
                                if (y && 304 === e.statusCode ? n = null : !d && (e.statusCode < 200 || e.statusCode >= 300) && (_.cancel(), u.throwError("bad response", a.Logger.errors.SERVER_ERROR, {
                                        status: e.statusCode,
                                        headers: e.headers,
                                        body: bodyify(n, e.headers ? e.headers["content-type"] : null),
                                        requestBody: bodyify(p.body, E["content-type"]),
                                        requestMethod: p.method,
                                        url: m
                                    })), r) try {
                                    let t = yield r(n, e);
                                    return _.cancel(), t
                                } catch (r) {
                                    if (r.throttleRetry && t < l) {
                                        let e = !0;
                                        if (h && (e = yield h(t, m)), e) {
                                            let e = c * parseInt(String(Math.random() * Math.pow(2, t)));
                                            yield staller(e);
                                            continue
                                        }
                                    }
                                    _.cancel(), u.throwError("processing response error", a.Logger.errors.SERVER_ERROR, {
                                        body: bodyify(n, e.headers ? e.headers["content-type"] : null),
                                        error: r,
                                        requestBody: bodyify(p.body, E["content-type"]),
                                        requestMethod: p.method,
                                        url: m
                                    })
                                }
                                return _.cancel(), n
                            }
                            return u.throwError("failed response", a.Logger.errors.SERVER_ERROR, {
                                requestBody: bodyify(p.body, E["content-type"]),
                                requestMethod: p.method,
                                url: m
                            })
                        }, new(n || (n = Promise))(function(r, i) {
                            function fulfilled(t) {
                                try {
                                    step(o.next(t))
                                } catch (t) {
                                    i(t)
                                }
                            }

                            function rejected(t) {
                                try {
                                    step(o.throw(t))
                                } catch (t) {
                                    i(t)
                                }
                            }

                            function step(t) {
                                var e;
                                t.done ? r(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                                    t(e)
                                })).then(fulfilled, rejected)
                            }
                            step((o = o.apply(t, e || [])).next())
                        })
                    }();
                return Promise.race([_.promise, N])
            }

            function fetchJson(t, e, r) {
                let n = null;
                if (null != e) {
                    n = (0, s.Y0)(e);
                    let r = "string" == typeof t ? {
                        url: t
                    } : (0, o.shallowCopy)(t);
                    if (r.headers) {
                        let t = 0 !== Object.keys(r.headers).filter(t => "content-type" === t.toLowerCase()).length;
                        t || (r.headers = (0, o.shallowCopy)(r.headers), r.headers["content-type"] = "application/json")
                    } else r.headers = {
                        "content-type": "application/json"
                    };
                    t = r
                }
                return _fetchData(t, n, (t, e) => {
                    let n = null;
                    if (null != t) try {
                        n = JSON.parse((0, s.ZN)(t))
                    } catch (e) {
                        u.throwError("invalid JSON", a.Logger.errors.SERVER_ERROR, {
                            body: t,
                            error: e
                        })
                    }
                    return r && (n = r(n, e)), n
                })
            }

            function poll(t, e) {
                return e || (e = {}), null == (e = (0, o.shallowCopy)(e)).floor && (e.floor = 0), null == e.ceiling && (e.ceiling = 1e4), null == e.interval && (e.interval = 250), new Promise(function(r, n) {
                    let i = null,
                        o = !1,
                        cancel = () => !o && (o = !0, i && clearTimeout(i), !0);
                    e.timeout && (i = setTimeout(() => {
                        cancel() && n(Error("timeout"))
                    }, e.timeout));
                    let s = e.retryLimit,
                        a = 0;
                    ! function check() {
                        return t().then(function(t) {
                            if (void 0 !== t) cancel() && r(t);
                            else if (e.oncePoll) e.oncePoll.once("poll", check);
                            else if (e.onceBlock) e.onceBlock.once("block", check);
                            else if (!o) {
                                if (++a > s) {
                                    cancel() && n(Error("retry limit reached"));
                                    return
                                }
                                let t = e.interval * parseInt(String(Math.random() * Math.pow(2, a)));
                                t < e.floor && (t = e.floor), t > e.ceiling && (t = e.ceiling), setTimeout(check, t)
                            }
                            return null
                        }, function(t) {
                            cancel() && n(t)
                        })
                    }()
                })
            }
        },
        76942: function(t) {
            "use strict";
            for (var e = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", r = {}, n = 0; n < e.length; n++) {
                var i = e.charAt(n);
                if (void 0 !== r[i]) throw TypeError(i + " is ambiguous");
                r[i] = n
            }

            function polymodStep(t) {
                var e = t >> 25;
                return (33554431 & t) << 5 ^ 996825010 & -(e >> 0 & 1) ^ 642813549 & -(e >> 1 & 1) ^ 513874426 & -(e >> 2 & 1) ^ 1027748829 & -(e >> 3 & 1) ^ 705979059 & -(e >> 4 & 1)
            }

            function prefixChk(t) {
                for (var e = 1, r = 0; r < t.length; ++r) {
                    var n = t.charCodeAt(r);
                    if (n < 33 || n > 126) return "Invalid prefix (" + t + ")";
                    e = polymodStep(e) ^ n >> 5
                }
                for (r = 0, e = polymodStep(e); r < t.length; ++r) {
                    var i = t.charCodeAt(r);
                    e = polymodStep(e) ^ 31 & i
                }
                return e
            }

            function __decode(t, e) {
                if (e = e || 90, t.length < 8) return t + " too short";
                if (t.length > e) return "Exceeds length limit";
                var n = t.toLowerCase(),
                    i = t.toUpperCase();
                if (t !== n && t !== i) return "Mixed-case string " + t;
                var o = (t = n).lastIndexOf("1");
                if (-1 === o) return "No separator character for " + t;
                if (0 === o) return "Missing prefix for " + t;
                var s = t.slice(0, o),
                    a = t.slice(o + 1);
                if (a.length < 6) return "Data too short";
                var u = prefixChk(s);
                if ("string" == typeof u) return u;
                for (var l = [], h = 0; h < a.length; ++h) {
                    var c = a.charAt(h),
                        d = r[c];
                    if (void 0 === d) return "Unknown character " + c;
                    u = polymodStep(u) ^ d, h + 6 >= a.length || l.push(d)
                }
                return 1 !== u ? "Invalid checksum for " + t : {
                    prefix: s,
                    words: l
                }
            }

            function convert(t, e, r, n) {
                for (var i = 0, o = 0, s = (1 << r) - 1, a = [], u = 0; u < t.length; ++u)
                    for (i = i << e | t[u], o += e; o >= r;) a.push(i >> (o -= r) & s);
                if (n) o > 0 && a.push(i << r - o & s);
                else {
                    if (o >= e) return "Excess padding";
                    if (i << r - o & s) return "Non-zero padding"
                }
                return a
            }
            t.exports = {
                decodeUnsafe: function() {
                    var t = __decode.apply(null, arguments);
                    if ("object" == typeof t) return t
                },
                decode: function(t) {
                    var e = __decode.apply(null, arguments);
                    if ("object" == typeof e) return e;
                    throw Error(e)
                },
                encode: function(t, r, n) {
                    if (n = n || 90, t.length + 7 + r.length > n) throw TypeError("Exceeds length limit");
                    var i = prefixChk(t = t.toLowerCase());
                    if ("string" == typeof i) throw Error(i);
                    for (var o = t + "1", s = 0; s < r.length; ++s) {
                        var a = r[s];
                        if (a >> 5 != 0) throw Error("Non 5-bit word");
                        i = polymodStep(i) ^ a, o += e.charAt(a)
                    }
                    for (s = 0; s < 6; ++s) i = polymodStep(i);
                    for (i ^= 1, s = 0; s < 6; ++s) {
                        var u = i >> (5 - s) * 5 & 31;
                        o += e.charAt(u)
                    }
                    return o
                },
                toWordsUnsafe: function(t) {
                    var e = convert(t, 8, 5, !0);
                    if (Array.isArray(e)) return e
                },
                toWords: function(t) {
                    var e = convert(t, 8, 5, !0);
                    if (Array.isArray(e)) return e;
                    throw Error(e)
                },
                fromWordsUnsafe: function(t) {
                    var e = convert(t, 5, 8, !1);
                    if (Array.isArray(e)) return e
                },
                fromWords: function(t) {
                    var e = convert(t, 5, 8, !1);
                    if (Array.isArray(e)) return e;
                    throw Error(e)
                }
            }
        },
        56662: function(t, e, r) {
            ! function(t, e) {
                "use strict";

                function assert(t, e) {
                    if (!t) throw Error(e || "Assertion failed")
                }

                function inherits(t, e) {
                    t.super_ = e;
                    var TempCtor = function() {};
                    TempCtor.prototype = e.prototype, t.prototype = new TempCtor, t.prototype.constructor = t
                }

                function BN(t, e, r) {
                    if (BN.isBN(t)) return t;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && (("le" === e || "be" === e) && (r = e, e = 10), this._init(t || 0, e || 10, r || "be"))
                }
                "object" == typeof t ? t.exports = BN : e.BN = BN, BN.BN = BN, BN.wordSize = 26;
                try {
                    n = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(46601).Buffer
                } catch (t) {}

                function parseHex4Bits(t, e) {
                    var r = t.charCodeAt(e);
                    return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void assert(!1, "Invalid character in " + t)
                }

                function parseHexByte(t, e, r) {
                    var n = parseHex4Bits(t, r);
                    return r - 1 >= e && (n |= parseHex4Bits(t, r - 1) << 4), n
                }

                function parseBase(t, e, r, n) {
                    for (var i = 0, o = 0, s = Math.min(t.length, r), a = e; a < s; a++) {
                        var u = t.charCodeAt(a) - 48;
                        i *= n, o = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u, assert(u >= 0 && o < n, "Invalid character"), i += o
                    }
                    return i
                }

                function move(t, e) {
                    t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red
                }
                if (BN.isBN = function(t) {
                        return t instanceof BN || null !== t && "object" == typeof t && t.constructor.wordSize === BN.wordSize && Array.isArray(t.words)
                    }, BN.max = function(t, e) {
                        return t.cmp(e) > 0 ? t : e
                    }, BN.min = function(t, e) {
                        return 0 > t.cmp(e) ? t : e
                    }, BN.prototype._init = function(t, e, r) {
                        if ("number" == typeof t) return this._initNumber(t, e, r);
                        if ("object" == typeof t) return this._initArray(t, e, r);
                        "hex" === e && (e = 16), assert(e === (0 | e) && e >= 2 && e <= 36);
                        var n = 0;
                        "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (n++, this.negative = 1), n < t.length && (16 === e ? this._parseHex(t, n, r) : (this._parseBase(t, e, n), "le" === r && this._initArray(this.toArray(), e, r)))
                    }, BN.prototype._initNumber = function(t, e, r) {
                        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (assert(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r)
                    }, BN.prototype._initArray = function(t, e, r) {
                        if (assert("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(t.length / 3), this.words = Array(this.length);
                        for (var n, i, o = 0; o < this.length; o++) this.words[o] = 0;
                        var s = 0;
                        if ("be" === r)
                            for (o = t.length - 1, n = 0; o >= 0; o -= 3) i = t[o] | t[o - 1] << 8 | t[o - 2] << 16, this.words[n] |= i << s & 67108863, this.words[n + 1] = i >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, n++);
                        else if ("le" === r)
                            for (o = 0, n = 0; o < t.length; o += 3) i = t[o] | t[o + 1] << 8 | t[o + 2] << 16, this.words[n] |= i << s & 67108863, this.words[n + 1] = i >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, n++);
                        return this._strip()
                    }, BN.prototype._parseHex = function(t, e, r) {
                        this.length = Math.ceil((t.length - e) / 6), this.words = Array(this.length);
                        for (var n, i = 0; i < this.length; i++) this.words[i] = 0;
                        var o = 0,
                            s = 0;
                        if ("be" === r)
                            for (i = t.length - 1; i >= e; i -= 2) n = parseHexByte(t, e, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                        else
                            for (i = (t.length - e) % 2 == 0 ? e + 1 : e; i < t.length; i += 2) n = parseHexByte(t, e, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
                        this._strip()
                    }, BN.prototype._parseBase = function(t, e, r) {
                        this.words = [0], this.length = 1;
                        for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
                        n--, i = i / e | 0;
                        for (var o = t.length - r, s = o % n, a = Math.min(o, o - s) + r, u = 0, l = r; l < a; l += n) u = parseBase(t, l, l + n, e), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
                        if (0 !== s) {
                            var h = 1;
                            for (u = parseBase(t, l, t.length, e), l = 0; l < s; l++) h *= e;
                            this.imuln(h), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u)
                        }
                        this._strip()
                    }, BN.prototype.copy = function(t) {
                        t.words = Array(this.length);
                        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                        t.length = this.length, t.negative = this.negative, t.red = this.red
                    }, BN.prototype._move = function(t) {
                        move(t, this)
                    }, BN.prototype.clone = function() {
                        var t = new BN(null);
                        return this.copy(t), t
                    }, BN.prototype._expand = function(t) {
                        for (; this.length < t;) this.words[this.length++] = 0;
                        return this
                    }, BN.prototype._strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, BN.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                    BN.prototype[Symbol.for("nodejs.util.inspect.custom")] = inspect
                } catch (t) {
                    BN.prototype.inspect = inspect
                } else BN.prototype.inspect = inspect;

                function inspect() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                var n, i = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    o = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    s = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function smallMulTo(t, e, r) {
                    r.negative = e.negative ^ t.negative;
                    var n = t.length + e.length | 0;
                    r.length = n, n = n - 1 | 0;
                    var i = 0 | t.words[0],
                        o = 0 | e.words[0],
                        s = i * o,
                        a = 67108863 & s,
                        u = s / 67108864 | 0;
                    r.words[0] = a;
                    for (var l = 1; l < n; l++) {
                        for (var h = u >>> 26, c = 67108863 & u, d = Math.min(l, e.length - 1), g = Math.max(0, l - t.length + 1); g <= d; g++) {
                            var m = l - g | 0;
                            h += (s = (i = 0 | t.words[m]) * (o = 0 | e.words[g]) + c) / 67108864 | 0, c = 67108863 & s
                        }
                        r.words[l] = 0 | c, u = 0 | h
                    }
                    return 0 !== u ? r.words[l] = 0 | u : r.length--, r._strip()
                }
                BN.prototype.toString = function(t, e) {
                    if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                        r = "";
                        for (var r, n = 0, a = 0, u = 0; u < this.length; u++) {
                            var l = this.words[u],
                                h = ((l << n | a) & 16777215).toString(16);
                            a = l >>> 24 - n & 16777215, (n += 2) >= 26 && (n -= 26, u--), r = 0 !== a || u !== this.length - 1 ? i[6 - h.length] + h + r : h + r
                        }
                        for (0 !== a && (r = a.toString(16) + r); r.length % e != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (t === (0 | t) && t >= 2 && t <= 36) {
                        var c = o[t],
                            d = s[t];
                        r = "";
                        var g = this.clone();
                        for (g.negative = 0; !g.isZero();) {
                            var m = g.modrn(d).toString(t);
                            r = (g = g.idivn(d)).isZero() ? m + r : i[c - m.length] + m + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % e != 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    assert(!1, "Base should be between 2 and 36")
                }, BN.prototype.toNumber = function() {
                    var t = this.words[0];
                    return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && assert(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t
                }, BN.prototype.toJSON = function() {
                    return this.toString(16, 2)
                }, n && (BN.prototype.toBuffer = function(t, e) {
                    return this.toArrayLike(n, t, e)
                }), BN.prototype.toArray = function(t, e) {
                    return this.toArrayLike(Array, t, e)
                }, BN.prototype.toArrayLike = function(t, e, r) {
                    this._strip();
                    var n = this.byteLength(),
                        i = r || Math.max(1, n);
                    assert(n <= i, "byte array longer than desired length"), assert(i > 0, "Requested array length <= 0");
                    var o = t.allocUnsafe ? t.allocUnsafe(i) : new t(i);
                    return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](o, n), o
                }, BN.prototype._toArrayLikeLE = function(t, e) {
                    for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                        var s = this.words[i] << o | n;
                        t[r++] = 255 & s, r < t.length && (t[r++] = s >> 8 & 255), r < t.length && (t[r++] = s >> 16 & 255), 6 === o ? (r < t.length && (t[r++] = s >> 24 & 255), n = 0, o = 0) : (n = s >>> 24, o += 2)
                    }
                    if (r < t.length)
                        for (t[r++] = n; r < t.length;) t[r++] = 0
                }, BN.prototype._toArrayLikeBE = function(t, e) {
                    for (var r = t.length - 1, n = 0, i = 0, o = 0; i < this.length; i++) {
                        var s = this.words[i] << o | n;
                        t[r--] = 255 & s, r >= 0 && (t[r--] = s >> 8 & 255), r >= 0 && (t[r--] = s >> 16 & 255), 6 === o ? (r >= 0 && (t[r--] = s >> 24 & 255), n = 0, o = 0) : (n = s >>> 24, o += 2)
                    }
                    if (r >= 0)
                        for (t[r--] = n; r >= 0;) t[r--] = 0
                }, Math.clz32 ? BN.prototype._countBits = function(t) {
                    return 32 - Math.clz32(t)
                } : BN.prototype._countBits = function(t) {
                    var e = t,
                        r = 0;
                    return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e
                }, BN.prototype._zeroBits = function(t) {
                    if (0 === t) return 26;
                    var e = t,
                        r = 0;
                    return (8191 & e) == 0 && (r += 13, e >>>= 13), (127 & e) == 0 && (r += 7, e >>>= 7), (15 & e) == 0 && (r += 4, e >>>= 4), (3 & e) == 0 && (r += 2, e >>>= 2), (1 & e) == 0 && r++, r
                }, BN.prototype.bitLength = function() {
                    var t = this.words[this.length - 1],
                        e = this._countBits(t);
                    return (this.length - 1) * 26 + e
                }, BN.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                        var r = this._zeroBits(this.words[e]);
                        if (t += r, 26 !== r) break
                    }
                    return t
                }, BN.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, BN.prototype.toTwos = function(t) {
                    return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
                }, BN.prototype.fromTwos = function(t) {
                    return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
                }, BN.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, BN.prototype.neg = function() {
                    return this.clone().ineg()
                }, BN.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, BN.prototype.iuor = function(t) {
                    for (; this.length < t.length;) this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                    return this._strip()
                }, BN.prototype.ior = function(t) {
                    return assert((this.negative | t.negative) == 0), this.iuor(t)
                }, BN.prototype.or = function(t) {
                    return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
                }, BN.prototype.uor = function(t) {
                    return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
                }, BN.prototype.iuand = function(t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                    return this.length = e.length, this._strip()
                }, BN.prototype.iand = function(t) {
                    return assert((this.negative | t.negative) == 0), this.iuand(t)
                }, BN.prototype.and = function(t) {
                    return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
                }, BN.prototype.uand = function(t) {
                    return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
                }, BN.prototype.iuxor = function(t) {
                    this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                    for (var e, r, n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
                    if (this !== e)
                        for (; n < e.length; n++) this.words[n] = e.words[n];
                    return this.length = e.length, this._strip()
                }, BN.prototype.ixor = function(t) {
                    return assert((this.negative | t.negative) == 0), this.iuxor(t)
                }, BN.prototype.xor = function(t) {
                    return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
                }, BN.prototype.uxor = function(t) {
                    return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
                }, BN.prototype.inotn = function(t) {
                    assert("number" == typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                        r = t % 26;
                    this._expand(e), r > 0 && e--;
                    for (var n = 0; n < e; n++) this.words[n] = 67108863 & ~this.words[n];
                    return r > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - r), this._strip()
                }, BN.prototype.notn = function(t) {
                    return this.clone().inotn(t)
                }, BN.prototype.setn = function(t, e) {
                    assert("number" == typeof t && t >= 0);
                    var r = t / 26 | 0,
                        n = t % 26;
                    return this._expand(r + 1), e ? this.words[r] = this.words[r] | 1 << n : this.words[r] = this.words[r] & ~(1 << n), this._strip()
                }, BN.prototype.iadd = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                    this.length > t.length ? (r = this, n = t) : (r = t, n = this);
                    for (var e, r, n, i = 0, o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    for (; 0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                    if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this
                }, BN.prototype.add = function(t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
                }, BN.prototype.isub = function(t) {
                    if (0 !== t.negative) {
                        t.negative = 0;
                        var e, r, n = this.iadd(t);
                        return t.negative = 1, n._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                    var i = this.cmp(t);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (e = this, r = t) : (e = t, r = this);
                    for (var o = 0, s = 0; s < r.length; s++) o = (n = (0 | e.words[s]) - (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & n;
                    for (; 0 !== o && s < e.length; s++) o = (n = (0 | e.words[s]) + o) >> 26, this.words[s] = 67108863 & n;
                    if (0 === o && s < e.length && e !== this)
                        for (; s < e.length; s++) this.words[s] = e.words[s];
                    return this.length = Math.max(this.length, s), e !== this && (this.negative = 1), this._strip()
                }, BN.prototype.sub = function(t) {
                    return this.clone().isub(t)
                };
                var comb10MulTo = function(t, e, r) {
                    var n, i, o, s = t.words,
                        a = e.words,
                        u = r.words,
                        l = 0,
                        h = 0 | s[0],
                        c = 8191 & h,
                        d = h >>> 13,
                        g = 0 | s[1],
                        m = 8191 & g,
                        p = g >>> 13,
                        y = 0 | s[2],
                        v = 8191 & y,
                        w = y >>> 13,
                        b = 0 | s[3],
                        A = 8191 & b,
                        E = b >>> 13,
                        _ = 0 | s[4],
                        N = 8191 & _,
                        x = _ >>> 13,
                        k = 0 | s[5],
                        S = 8191 & k,
                        P = k >>> 13,
                        M = 0 | s[6],
                        B = 8191 & M,
                        R = M >>> 13,
                        C = 0 | s[7],
                        I = 8191 & C,
                        O = C >>> 13,
                        T = 0 | s[8],
                        F = 8191 & T,
                        L = T >>> 13,
                        D = 0 | s[9],
                        U = 8191 & D,
                        H = D >>> 13,
                        z = 0 | a[0],
                        j = 8191 & z,
                        G = z >>> 13,
                        q = 0 | a[1],
                        K = 8191 & q,
                        J = q >>> 13,
                        V = 0 | a[2],
                        Q = 8191 & V,
                        Y = V >>> 13,
                        Z = 0 | a[3],
                        X = 8191 & Z,
                        W = Z >>> 13,
                        $ = 0 | a[4],
                        tt = 8191 & $,
                        te = $ >>> 13,
                        tr = 0 | a[5],
                        tn = 8191 & tr,
                        ti = tr >>> 13,
                        to = 0 | a[6],
                        ts = 8191 & to,
                        ta = to >>> 13,
                        tu = 0 | a[7],
                        tl = 8191 & tu,
                        th = tu >>> 13,
                        tc = 0 | a[8],
                        tf = 8191 & tc,
                        td = tc >>> 13,
                        tg = 0 | a[9],
                        tm = 8191 & tg,
                        tp = tg >>> 13;
                    r.negative = t.negative ^ e.negative, r.length = 19;
                    var ty = (l + (n = Math.imul(c, j)) | 0) + ((8191 & (i = (i = Math.imul(c, G)) + Math.imul(d, j) | 0)) << 13) | 0;
                    l = ((o = Math.imul(d, G)) + (i >>> 13) | 0) + (ty >>> 26) | 0, ty &= 67108863, n = Math.imul(m, j), i = (i = Math.imul(m, G)) + Math.imul(p, j) | 0, o = Math.imul(p, G);
                    var tv = (l + (n = n + Math.imul(c, K) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, J) | 0) + Math.imul(d, K) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, J) | 0) + (i >>> 13) | 0) + (tv >>> 26) | 0, tv &= 67108863, n = Math.imul(v, j), i = (i = Math.imul(v, G)) + Math.imul(w, j) | 0, o = Math.imul(w, G), n = n + Math.imul(m, K) | 0, i = (i = i + Math.imul(m, J) | 0) + Math.imul(p, K) | 0, o = o + Math.imul(p, J) | 0;
                    var tw = (l + (n = n + Math.imul(c, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, Y) | 0) + Math.imul(d, Q) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, Y) | 0) + (i >>> 13) | 0) + (tw >>> 26) | 0, tw &= 67108863, n = Math.imul(A, j), i = (i = Math.imul(A, G)) + Math.imul(E, j) | 0, o = Math.imul(E, G), n = n + Math.imul(v, K) | 0, i = (i = i + Math.imul(v, J) | 0) + Math.imul(w, K) | 0, o = o + Math.imul(w, J) | 0, n = n + Math.imul(m, Q) | 0, i = (i = i + Math.imul(m, Y) | 0) + Math.imul(p, Q) | 0, o = o + Math.imul(p, Y) | 0;
                    var tb = (l + (n = n + Math.imul(c, X) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, W) | 0) + Math.imul(d, X) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, W) | 0) + (i >>> 13) | 0) + (tb >>> 26) | 0, tb &= 67108863, n = Math.imul(N, j), i = (i = Math.imul(N, G)) + Math.imul(x, j) | 0, o = Math.imul(x, G), n = n + Math.imul(A, K) | 0, i = (i = i + Math.imul(A, J) | 0) + Math.imul(E, K) | 0, o = o + Math.imul(E, J) | 0, n = n + Math.imul(v, Q) | 0, i = (i = i + Math.imul(v, Y) | 0) + Math.imul(w, Q) | 0, o = o + Math.imul(w, Y) | 0, n = n + Math.imul(m, X) | 0, i = (i = i + Math.imul(m, W) | 0) + Math.imul(p, X) | 0, o = o + Math.imul(p, W) | 0;
                    var tA = (l + (n = n + Math.imul(c, tt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, te) | 0) + Math.imul(d, tt) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, te) | 0) + (i >>> 13) | 0) + (tA >>> 26) | 0, tA &= 67108863, n = Math.imul(S, j), i = (i = Math.imul(S, G)) + Math.imul(P, j) | 0, o = Math.imul(P, G), n = n + Math.imul(N, K) | 0, i = (i = i + Math.imul(N, J) | 0) + Math.imul(x, K) | 0, o = o + Math.imul(x, J) | 0, n = n + Math.imul(A, Q) | 0, i = (i = i + Math.imul(A, Y) | 0) + Math.imul(E, Q) | 0, o = o + Math.imul(E, Y) | 0, n = n + Math.imul(v, X) | 0, i = (i = i + Math.imul(v, W) | 0) + Math.imul(w, X) | 0, o = o + Math.imul(w, W) | 0, n = n + Math.imul(m, tt) | 0, i = (i = i + Math.imul(m, te) | 0) + Math.imul(p, tt) | 0, o = o + Math.imul(p, te) | 0;
                    var tE = (l + (n = n + Math.imul(c, tn) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, ti) | 0) + Math.imul(d, tn) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, ti) | 0) + (i >>> 13) | 0) + (tE >>> 26) | 0, tE &= 67108863, n = Math.imul(B, j), i = (i = Math.imul(B, G)) + Math.imul(R, j) | 0, o = Math.imul(R, G), n = n + Math.imul(S, K) | 0, i = (i = i + Math.imul(S, J) | 0) + Math.imul(P, K) | 0, o = o + Math.imul(P, J) | 0, n = n + Math.imul(N, Q) | 0, i = (i = i + Math.imul(N, Y) | 0) + Math.imul(x, Q) | 0, o = o + Math.imul(x, Y) | 0, n = n + Math.imul(A, X) | 0, i = (i = i + Math.imul(A, W) | 0) + Math.imul(E, X) | 0, o = o + Math.imul(E, W) | 0, n = n + Math.imul(v, tt) | 0, i = (i = i + Math.imul(v, te) | 0) + Math.imul(w, tt) | 0, o = o + Math.imul(w, te) | 0, n = n + Math.imul(m, tn) | 0, i = (i = i + Math.imul(m, ti) | 0) + Math.imul(p, tn) | 0, o = o + Math.imul(p, ti) | 0;
                    var t_ = (l + (n = n + Math.imul(c, ts) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, ta) | 0) + Math.imul(d, ts) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, ta) | 0) + (i >>> 13) | 0) + (t_ >>> 26) | 0, t_ &= 67108863, n = Math.imul(I, j), i = (i = Math.imul(I, G)) + Math.imul(O, j) | 0, o = Math.imul(O, G), n = n + Math.imul(B, K) | 0, i = (i = i + Math.imul(B, J) | 0) + Math.imul(R, K) | 0, o = o + Math.imul(R, J) | 0, n = n + Math.imul(S, Q) | 0, i = (i = i + Math.imul(S, Y) | 0) + Math.imul(P, Q) | 0, o = o + Math.imul(P, Y) | 0, n = n + Math.imul(N, X) | 0, i = (i = i + Math.imul(N, W) | 0) + Math.imul(x, X) | 0, o = o + Math.imul(x, W) | 0, n = n + Math.imul(A, tt) | 0, i = (i = i + Math.imul(A, te) | 0) + Math.imul(E, tt) | 0, o = o + Math.imul(E, te) | 0, n = n + Math.imul(v, tn) | 0, i = (i = i + Math.imul(v, ti) | 0) + Math.imul(w, tn) | 0, o = o + Math.imul(w, ti) | 0, n = n + Math.imul(m, ts) | 0, i = (i = i + Math.imul(m, ta) | 0) + Math.imul(p, ts) | 0, o = o + Math.imul(p, ta) | 0;
                    var tN = (l + (n = n + Math.imul(c, tl) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, th) | 0) + Math.imul(d, tl) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, th) | 0) + (i >>> 13) | 0) + (tN >>> 26) | 0, tN &= 67108863, n = Math.imul(F, j), i = (i = Math.imul(F, G)) + Math.imul(L, j) | 0, o = Math.imul(L, G), n = n + Math.imul(I, K) | 0, i = (i = i + Math.imul(I, J) | 0) + Math.imul(O, K) | 0, o = o + Math.imul(O, J) | 0, n = n + Math.imul(B, Q) | 0, i = (i = i + Math.imul(B, Y) | 0) + Math.imul(R, Q) | 0, o = o + Math.imul(R, Y) | 0, n = n + Math.imul(S, X) | 0, i = (i = i + Math.imul(S, W) | 0) + Math.imul(P, X) | 0, o = o + Math.imul(P, W) | 0, n = n + Math.imul(N, tt) | 0, i = (i = i + Math.imul(N, te) | 0) + Math.imul(x, tt) | 0, o = o + Math.imul(x, te) | 0, n = n + Math.imul(A, tn) | 0, i = (i = i + Math.imul(A, ti) | 0) + Math.imul(E, tn) | 0, o = o + Math.imul(E, ti) | 0, n = n + Math.imul(v, ts) | 0, i = (i = i + Math.imul(v, ta) | 0) + Math.imul(w, ts) | 0, o = o + Math.imul(w, ta) | 0, n = n + Math.imul(m, tl) | 0, i = (i = i + Math.imul(m, th) | 0) + Math.imul(p, tl) | 0, o = o + Math.imul(p, th) | 0;
                    var tx = (l + (n = n + Math.imul(c, tf) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, td) | 0) + Math.imul(d, tf) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, td) | 0) + (i >>> 13) | 0) + (tx >>> 26) | 0, tx &= 67108863, n = Math.imul(U, j), i = (i = Math.imul(U, G)) + Math.imul(H, j) | 0, o = Math.imul(H, G), n = n + Math.imul(F, K) | 0, i = (i = i + Math.imul(F, J) | 0) + Math.imul(L, K) | 0, o = o + Math.imul(L, J) | 0, n = n + Math.imul(I, Q) | 0, i = (i = i + Math.imul(I, Y) | 0) + Math.imul(O, Q) | 0, o = o + Math.imul(O, Y) | 0, n = n + Math.imul(B, X) | 0, i = (i = i + Math.imul(B, W) | 0) + Math.imul(R, X) | 0, o = o + Math.imul(R, W) | 0, n = n + Math.imul(S, tt) | 0, i = (i = i + Math.imul(S, te) | 0) + Math.imul(P, tt) | 0, o = o + Math.imul(P, te) | 0, n = n + Math.imul(N, tn) | 0, i = (i = i + Math.imul(N, ti) | 0) + Math.imul(x, tn) | 0, o = o + Math.imul(x, ti) | 0, n = n + Math.imul(A, ts) | 0, i = (i = i + Math.imul(A, ta) | 0) + Math.imul(E, ts) | 0, o = o + Math.imul(E, ta) | 0, n = n + Math.imul(v, tl) | 0, i = (i = i + Math.imul(v, th) | 0) + Math.imul(w, tl) | 0, o = o + Math.imul(w, th) | 0, n = n + Math.imul(m, tf) | 0, i = (i = i + Math.imul(m, td) | 0) + Math.imul(p, tf) | 0, o = o + Math.imul(p, td) | 0;
                    var tk = (l + (n = n + Math.imul(c, tm) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, tp) | 0) + Math.imul(d, tm) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(d, tp) | 0) + (i >>> 13) | 0) + (tk >>> 26) | 0, tk &= 67108863, n = Math.imul(U, K), i = (i = Math.imul(U, J)) + Math.imul(H, K) | 0, o = Math.imul(H, J), n = n + Math.imul(F, Q) | 0, i = (i = i + Math.imul(F, Y) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, Y) | 0, n = n + Math.imul(I, X) | 0, i = (i = i + Math.imul(I, W) | 0) + Math.imul(O, X) | 0, o = o + Math.imul(O, W) | 0, n = n + Math.imul(B, tt) | 0, i = (i = i + Math.imul(B, te) | 0) + Math.imul(R, tt) | 0, o = o + Math.imul(R, te) | 0, n = n + Math.imul(S, tn) | 0, i = (i = i + Math.imul(S, ti) | 0) + Math.imul(P, tn) | 0, o = o + Math.imul(P, ti) | 0, n = n + Math.imul(N, ts) | 0, i = (i = i + Math.imul(N, ta) | 0) + Math.imul(x, ts) | 0, o = o + Math.imul(x, ta) | 0, n = n + Math.imul(A, tl) | 0, i = (i = i + Math.imul(A, th) | 0) + Math.imul(E, tl) | 0, o = o + Math.imul(E, th) | 0, n = n + Math.imul(v, tf) | 0, i = (i = i + Math.imul(v, td) | 0) + Math.imul(w, tf) | 0, o = o + Math.imul(w, td) | 0;
                    var tS = (l + (n = n + Math.imul(m, tm) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(m, tp) | 0) + Math.imul(p, tm) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(p, tp) | 0) + (i >>> 13) | 0) + (tS >>> 26) | 0, tS &= 67108863, n = Math.imul(U, Q), i = (i = Math.imul(U, Y)) + Math.imul(H, Q) | 0, o = Math.imul(H, Y), n = n + Math.imul(F, X) | 0, i = (i = i + Math.imul(F, W) | 0) + Math.imul(L, X) | 0, o = o + Math.imul(L, W) | 0, n = n + Math.imul(I, tt) | 0, i = (i = i + Math.imul(I, te) | 0) + Math.imul(O, tt) | 0, o = o + Math.imul(O, te) | 0, n = n + Math.imul(B, tn) | 0, i = (i = i + Math.imul(B, ti) | 0) + Math.imul(R, tn) | 0, o = o + Math.imul(R, ti) | 0, n = n + Math.imul(S, ts) | 0, i = (i = i + Math.imul(S, ta) | 0) + Math.imul(P, ts) | 0, o = o + Math.imul(P, ta) | 0, n = n + Math.imul(N, tl) | 0, i = (i = i + Math.imul(N, th) | 0) + Math.imul(x, tl) | 0, o = o + Math.imul(x, th) | 0, n = n + Math.imul(A, tf) | 0, i = (i = i + Math.imul(A, td) | 0) + Math.imul(E, tf) | 0, o = o + Math.imul(E, td) | 0;
                    var tP = (l + (n = n + Math.imul(v, tm) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(v, tp) | 0) + Math.imul(w, tm) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(w, tp) | 0) + (i >>> 13) | 0) + (tP >>> 26) | 0, tP &= 67108863, n = Math.imul(U, X), i = (i = Math.imul(U, W)) + Math.imul(H, X) | 0, o = Math.imul(H, W), n = n + Math.imul(F, tt) | 0, i = (i = i + Math.imul(F, te) | 0) + Math.imul(L, tt) | 0, o = o + Math.imul(L, te) | 0, n = n + Math.imul(I, tn) | 0, i = (i = i + Math.imul(I, ti) | 0) + Math.imul(O, tn) | 0, o = o + Math.imul(O, ti) | 0, n = n + Math.imul(B, ts) | 0, i = (i = i + Math.imul(B, ta) | 0) + Math.imul(R, ts) | 0, o = o + Math.imul(R, ta) | 0, n = n + Math.imul(S, tl) | 0, i = (i = i + Math.imul(S, th) | 0) + Math.imul(P, tl) | 0, o = o + Math.imul(P, th) | 0, n = n + Math.imul(N, tf) | 0, i = (i = i + Math.imul(N, td) | 0) + Math.imul(x, tf) | 0, o = o + Math.imul(x, td) | 0;
                    var tM = (l + (n = n + Math.imul(A, tm) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, tp) | 0) + Math.imul(E, tm) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(E, tp) | 0) + (i >>> 13) | 0) + (tM >>> 26) | 0, tM &= 67108863, n = Math.imul(U, tt), i = (i = Math.imul(U, te)) + Math.imul(H, tt) | 0, o = Math.imul(H, te), n = n + Math.imul(F, tn) | 0, i = (i = i + Math.imul(F, ti) | 0) + Math.imul(L, tn) | 0, o = o + Math.imul(L, ti) | 0, n = n + Math.imul(I, ts) | 0, i = (i = i + Math.imul(I, ta) | 0) + Math.imul(O, ts) | 0, o = o + Math.imul(O, ta) | 0, n = n + Math.imul(B, tl) | 0, i = (i = i + Math.imul(B, th) | 0) + Math.imul(R, tl) | 0, o = o + Math.imul(R, th) | 0, n = n + Math.imul(S, tf) | 0, i = (i = i + Math.imul(S, td) | 0) + Math.imul(P, tf) | 0, o = o + Math.imul(P, td) | 0;
                    var tB = (l + (n = n + Math.imul(N, tm) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(N, tp) | 0) + Math.imul(x, tm) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(x, tp) | 0) + (i >>> 13) | 0) + (tB >>> 26) | 0, tB &= 67108863, n = Math.imul(U, tn), i = (i = Math.imul(U, ti)) + Math.imul(H, tn) | 0, o = Math.imul(H, ti), n = n + Math.imul(F, ts) | 0, i = (i = i + Math.imul(F, ta) | 0) + Math.imul(L, ts) | 0, o = o + Math.imul(L, ta) | 0, n = n + Math.imul(I, tl) | 0, i = (i = i + Math.imul(I, th) | 0) + Math.imul(O, tl) | 0, o = o + Math.imul(O, th) | 0, n = n + Math.imul(B, tf) | 0, i = (i = i + Math.imul(B, td) | 0) + Math.imul(R, tf) | 0, o = o + Math.imul(R, td) | 0;
                    var tR = (l + (n = n + Math.imul(S, tm) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(S, tp) | 0) + Math.imul(P, tm) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(P, tp) | 0) + (i >>> 13) | 0) + (tR >>> 26) | 0, tR &= 67108863, n = Math.imul(U, ts), i = (i = Math.imul(U, ta)) + Math.imul(H, ts) | 0, o = Math.imul(H, ta), n = n + Math.imul(F, tl) | 0, i = (i = i + Math.imul(F, th) | 0) + Math.imul(L, tl) | 0, o = o + Math.imul(L, th) | 0, n = n + Math.imul(I, tf) | 0, i = (i = i + Math.imul(I, td) | 0) + Math.imul(O, tf) | 0, o = o + Math.imul(O, td) | 0;
                    var tC = (l + (n = n + Math.imul(B, tm) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(B, tp) | 0) + Math.imul(R, tm) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(R, tp) | 0) + (i >>> 13) | 0) + (tC >>> 26) | 0, tC &= 67108863, n = Math.imul(U, tl), i = (i = Math.imul(U, th)) + Math.imul(H, tl) | 0, o = Math.imul(H, th), n = n + Math.imul(F, tf) | 0, i = (i = i + Math.imul(F, td) | 0) + Math.imul(L, tf) | 0, o = o + Math.imul(L, td) | 0;
                    var tI = (l + (n = n + Math.imul(I, tm) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(I, tp) | 0) + Math.imul(O, tm) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(O, tp) | 0) + (i >>> 13) | 0) + (tI >>> 26) | 0, tI &= 67108863, n = Math.imul(U, tf), i = (i = Math.imul(U, td)) + Math.imul(H, tf) | 0, o = Math.imul(H, td);
                    var tO = (l + (n = n + Math.imul(F, tm) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(F, tp) | 0) + Math.imul(L, tm) | 0)) << 13) | 0;
                    l = ((o = o + Math.imul(L, tp) | 0) + (i >>> 13) | 0) + (tO >>> 26) | 0, tO &= 67108863;
                    var tT = (l + (n = Math.imul(U, tm)) | 0) + ((8191 & (i = (i = Math.imul(U, tp)) + Math.imul(H, tm) | 0)) << 13) | 0;
                    return l = ((o = Math.imul(H, tp)) + (i >>> 13) | 0) + (tT >>> 26) | 0, tT &= 67108863, u[0] = ty, u[1] = tv, u[2] = tw, u[3] = tb, u[4] = tA, u[5] = tE, u[6] = t_, u[7] = tN, u[8] = tx, u[9] = tk, u[10] = tS, u[11] = tP, u[12] = tM, u[13] = tB, u[14] = tR, u[15] = tC, u[16] = tI, u[17] = tO, u[18] = tT, 0 !== l && (u[19] = l, r.length++), r
                };

                function bigMulTo(t, e, r) {
                    r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                    for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                        var s = i;
                        i = 0;
                        for (var a = 67108863 & n, u = Math.min(o, e.length - 1), l = Math.max(0, o - t.length + 1); l <= u; l++) {
                            var h = o - l,
                                c = (0 | t.words[h]) * (0 | e.words[l]),
                                d = 67108863 & c;
                            s = s + (c / 67108864 | 0) | 0, a = 67108863 & (d = d + a | 0), i += (s = s + (d >>> 26) | 0) >>> 26, s &= 67108863
                        }
                        r.words[o] = a, n = s, s = i
                    }
                    return 0 !== n ? r.words[o] = n : r.length--, r._strip()
                }

                function FFTM(t, e) {
                    this.x = t, this.y = e
                }
                Math.imul || (comb10MulTo = smallMulTo), BN.prototype.mulTo = function(t, e) {
                    var r, n = this.length + t.length;
                    return 10 === this.length && 10 === t.length ? comb10MulTo(this, t, e) : n < 63 ? smallMulTo(this, t, e) : bigMulTo(this, t, e)
                }, FFTM.prototype.makeRBT = function(t) {
                    for (var e = Array(t), r = BN.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
                    return e
                }, FFTM.prototype.revBin = function(t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
                    return n
                }, FFTM.prototype.permute = function(t, e, r, n, i, o) {
                    for (var s = 0; s < o; s++) n[s] = e[t[s]], i[s] = r[t[s]]
                }, FFTM.prototype.transform = function(t, e, r, n, i, o) {
                    this.permute(o, t, e, r, n, i);
                    for (var s = 1; s < i; s <<= 1)
                        for (var a = s << 1, u = Math.cos(2 * Math.PI / a), l = Math.sin(2 * Math.PI / a), h = 0; h < i; h += a)
                            for (var c = u, d = l, g = 0; g < s; g++) {
                                var m = r[h + g],
                                    p = n[h + g],
                                    y = r[h + g + s],
                                    v = n[h + g + s],
                                    w = c * y - d * v;
                                v = c * v + d * y, y = w, r[h + g] = m + y, n[h + g] = p + v, r[h + g + s] = m - y, n[h + g + s] = p - v, g !== a && (w = u * c - l * d, d = u * d + l * c, c = w)
                            }
                }, FFTM.prototype.guessLen13b = function(t, e) {
                    var r = 1 | Math.max(e, t),
                        n = 1 & r,
                        i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) i++;
                    return 1 << i + 1 + n
                }, FFTM.prototype.conjugate = function(t, e, r) {
                    if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) {
                            var i = t[n];
                            t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i
                        }
                }, FFTM.prototype.normalize13b = function(t, e) {
                    for (var r = 0, n = 0; n < e / 2; n++) {
                        var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                        t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return t
                }, FFTM.prototype.convert13b = function(t, e, r, n) {
                    for (var i = 0, o = 0; o < e; o++) i += 0 | t[o], r[2 * o] = 8191 & i, i >>>= 13, r[2 * o + 1] = 8191 & i, i >>>= 13;
                    for (o = 2 * e; o < n; ++o) r[o] = 0;
                    assert(0 === i), assert((-8192 & i) == 0)
                }, FFTM.prototype.stub = function(t) {
                    for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e
                }, FFTM.prototype.mulp = function(t, e, r) {
                    var n = 2 * this.guessLen13b(t.length, e.length),
                        i = this.makeRBT(n),
                        o = this.stub(n),
                        s = Array(n),
                        a = Array(n),
                        u = Array(n),
                        l = Array(n),
                        h = Array(n),
                        c = Array(n),
                        d = r.words;
                    d.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(e.words, e.length, l, n), this.transform(s, o, a, u, n, i), this.transform(l, o, h, c, n, i);
                    for (var g = 0; g < n; g++) {
                        var m = a[g] * h[g] - u[g] * c[g];
                        u[g] = a[g] * c[g] + u[g] * h[g], a[g] = m
                    }
                    return this.conjugate(a, u, n), this.transform(a, u, d, o, n, i), this.conjugate(d, o, n), this.normalize13b(d, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r._strip()
                }, BN.prototype.mul = function(t) {
                    var e = new BN(null);
                    return e.words = Array(this.length + t.length), this.mulTo(t, e)
                }, BN.prototype.mulf = function(t) {
                    var e = new BN(null);
                    return e.words = Array(this.length + t.length), bigMulTo(this, t, e)
                }, BN.prototype.imul = function(t) {
                    return this.clone().mulTo(t, this)
                }, BN.prototype.imuln = function(t) {
                    var e = t < 0;
                    e && (t = -t), assert("number" == typeof t), assert(t < 67108864);
                    for (var r = 0, n = 0; n < this.length; n++) {
                        var i = (0 | this.words[n]) * t,
                            o = (67108863 & i) + (67108863 & r);
                        r >>= 26, r += (i / 67108864 | 0) + (o >>> 26), this.words[n] = 67108863 & o
                    }
                    return 0 !== r && (this.words[n] = r, this.length++), e ? this.ineg() : this
                }, BN.prototype.muln = function(t) {
                    return this.clone().imuln(t)
                }, BN.prototype.sqr = function() {
                    return this.mul(this)
                }, BN.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, BN.prototype.pow = function(t) {
                    var e = function(t) {
                        for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                            var n = r / 26 | 0,
                                i = r % 26;
                            e[r] = t.words[n] >>> i & 1
                        }
                        return e
                    }(t);
                    if (0 === e.length) return new BN(1);
                    for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
                    if (++n < e.length)
                        for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
                    return r
                }, BN.prototype.iushln = function(t) {
                    assert("number" == typeof t && t >= 0);
                    var e, r = t % 26,
                        n = (t - r) / 26,
                        i = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var o = 0;
                        for (e = 0; e < this.length; e++) {
                            var s = this.words[e] & i,
                                a = (0 | this.words[e]) - s << r;
                            this.words[e] = a | o, o = s >>> 26 - r
                        }
                        o && (this.words[e] = o, this.length++)
                    }
                    if (0 !== n) {
                        for (e = this.length - 1; e >= 0; e--) this.words[e + n] = this.words[e];
                        for (e = 0; e < n; e++) this.words[e] = 0;
                        this.length += n
                    }
                    return this._strip()
                }, BN.prototype.ishln = function(t) {
                    return assert(0 === this.negative), this.iushln(t)
                }, BN.prototype.iushrn = function(t, e, r) {
                    assert("number" == typeof t && t >= 0), n = e ? (e - e % 26) / 26 : 0;
                    var n, i = t % 26,
                        o = Math.min((t - i) / 26, this.length),
                        s = 67108863 ^ 67108863 >>> i << i;
                    if (n -= o, n = Math.max(0, n), r) {
                        for (var a = 0; a < o; a++) r.words[a] = this.words[a];
                        r.length = o
                    }
                    if (0 === o);
                    else if (this.length > o)
                        for (this.length -= o, a = 0; a < this.length; a++) this.words[a] = this.words[a + o];
                    else this.words[0] = 0, this.length = 1;
                    var u = 0;
                    for (a = this.length - 1; a >= 0 && (0 !== u || a >= n); a--) {
                        var l = 0 | this.words[a];
                        this.words[a] = u << 26 - i | l >>> i, u = l & s
                    }
                    return r && 0 !== u && (r.words[r.length++] = u), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                }, BN.prototype.ishrn = function(t, e, r) {
                    return assert(0 === this.negative), this.iushrn(t, e, r)
                }, BN.prototype.shln = function(t) {
                    return this.clone().ishln(t)
                }, BN.prototype.ushln = function(t) {
                    return this.clone().iushln(t)
                }, BN.prototype.shrn = function(t) {
                    return this.clone().ishrn(t)
                }, BN.prototype.ushrn = function(t) {
                    return this.clone().iushrn(t)
                }, BN.prototype.testn = function(t) {
                    assert("number" == typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    return !(this.length <= r) && !!(this.words[r] & 1 << e)
                }, BN.prototype.imaskn = function(t) {
                    assert("number" == typeof t && t >= 0);
                    var e = t % 26,
                        r = (t - e) / 26;
                    return (assert(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) ? this : (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> e << e), this._strip())
                }, BN.prototype.maskn = function(t) {
                    return this.clone().imaskn(t)
                }, BN.prototype.iaddn = function(t) {
                    return (assert("number" == typeof t), assert(t < 67108864), t < 0) ? this.isubn(-t) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(t), this.negative = 1), this) : this._iaddn(t)
                }, BN.prototype._iaddn = function(t) {
                    this.words[0] += t;
                    for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                    return this.length = Math.max(this.length, e + 1), this
                }, BN.prototype.isubn = function(t) {
                    if (assert("number" == typeof t), assert(t < 67108864), t < 0) return this.iaddn(-t);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                    if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
                    return this._strip()
                }, BN.prototype.addn = function(t) {
                    return this.clone().iaddn(t)
                }, BN.prototype.subn = function(t) {
                    return this.clone().isubn(t)
                }, BN.prototype.iabs = function() {
                    return this.negative = 0, this
                }, BN.prototype.abs = function() {
                    return this.clone().iabs()
                }, BN.prototype._ishlnsubmul = function(t, e, r) {
                    var n, i, o = t.length + r;
                    this._expand(o);
                    var s = 0;
                    for (n = 0; n < t.length; n++) {
                        i = (0 | this.words[n + r]) + s;
                        var a = (0 | t.words[n]) * e;
                        i -= 67108863 & a, s = (i >> 26) - (a / 67108864 | 0), this.words[n + r] = 67108863 & i
                    }
                    for (; n < this.length - r; n++) s = (i = (0 | this.words[n + r]) + s) >> 26, this.words[n + r] = 67108863 & i;
                    if (0 === s) return this._strip();
                    for (assert(-1 === s), s = 0, n = 0; n < this.length; n++) s = (i = -(0 | this.words[n]) + s) >> 26, this.words[n] = 67108863 & i;
                    return this.negative = 1, this._strip()
                }, BN.prototype._wordDiv = function(t, e) {
                    var r, n = this.length - t.length,
                        i = this.clone(),
                        o = t,
                        s = 0 | o.words[o.length - 1];
                    0 != (n = 26 - this._countBits(s)) && (o = o.ushln(n), i.iushln(n), s = 0 | o.words[o.length - 1]);
                    var a = i.length - o.length;
                    if ("mod" !== e) {
                        (r = new BN(null)).length = a + 1, r.words = Array(r.length);
                        for (var u = 0; u < r.length; u++) r.words[u] = 0
                    }
                    var l = i.clone()._ishlnsubmul(o, 1, a);
                    0 === l.negative && (i = l, r && (r.words[a] = 1));
                    for (var h = a - 1; h >= 0; h--) {
                        var c = (0 | i.words[o.length + h]) * 67108864 + (0 | i.words[o.length + h - 1]);
                        for (c = Math.min(c / s | 0, 67108863), i._ishlnsubmul(o, c, h); 0 !== i.negative;) c--, i.negative = 0, i._ishlnsubmul(o, 1, h), i.isZero() || (i.negative ^= 1);
                        r && (r.words[h] = c)
                    }
                    return r && r._strip(), i._strip(), "div" !== e && 0 !== n && i.iushrn(n), {
                        div: r || null,
                        mod: i
                    }
                }, BN.prototype.divmod = function(t, e, r) {
                    var n, i, o;
                    return (assert(!t.isZero()), this.isZero()) ? {
                        div: new BN(0),
                        mod: new BN(0)
                    } : 0 !== this.negative && 0 === t.negative ? (o = this.neg().divmod(t, e), "mod" !== e && (n = o.div.neg()), "div" !== e && (i = o.mod.neg(), r && 0 !== i.negative && i.iadd(t)), {
                        div: n,
                        mod: i
                    }) : 0 === this.negative && 0 !== t.negative ? (o = this.divmod(t.neg(), e), "mod" !== e && (n = o.div.neg()), {
                        div: n,
                        mod: o.mod
                    }) : (this.negative & t.negative) != 0 ? (o = this.neg().divmod(t.neg(), e), "div" !== e && (i = o.mod.neg(), r && 0 !== i.negative && i.isub(t)), {
                        div: o.div,
                        mod: i
                    }) : t.length > this.length || 0 > this.cmp(t) ? {
                        div: new BN(0),
                        mod: this
                    } : 1 === t.length ? "div" === e ? {
                        div: this.divn(t.words[0]),
                        mod: null
                    } : "mod" === e ? {
                        div: null,
                        mod: new BN(this.modrn(t.words[0]))
                    } : {
                        div: this.divn(t.words[0]),
                        mod: new BN(this.modrn(t.words[0]))
                    } : this._wordDiv(t, e)
                }, BN.prototype.div = function(t) {
                    return this.divmod(t, "div", !1).div
                }, BN.prototype.mod = function(t) {
                    return this.divmod(t, "mod", !1).mod
                }, BN.prototype.umod = function(t) {
                    return this.divmod(t, "mod", !0).mod
                }, BN.prototype.divRound = function(t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                        n = t.ushrn(1),
                        i = t.andln(1),
                        o = r.cmp(n);
                    return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
                }, BN.prototype.modrn = function(t) {
                    var e = t < 0;
                    e && (t = -t), assert(t <= 67108863);
                    for (var r = 67108864 % t, n = 0, i = this.length - 1; i >= 0; i--) n = (r * n + (0 | this.words[i])) % t;
                    return e ? -n : n
                }, BN.prototype.modn = function(t) {
                    return this.modrn(t)
                }, BN.prototype.idivn = function(t) {
                    var e = t < 0;
                    e && (t = -t), assert(t <= 67108863);
                    for (var r = 0, n = this.length - 1; n >= 0; n--) {
                        var i = (0 | this.words[n]) + 67108864 * r;
                        this.words[n] = i / t | 0, r = i % t
                    }
                    return this._strip(), e ? this.ineg() : this
                }, BN.prototype.divn = function(t) {
                    return this.clone().idivn(t)
                }, BN.prototype.egcd = function(t) {
                    assert(0 === t.negative), assert(!t.isZero());
                    var e = this,
                        r = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    for (var n = new BN(1), i = new BN(0), o = new BN(0), s = new BN(1), a = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++a;
                    for (var u = r.clone(), l = e.clone(); !e.isZero();) {
                        for (var h = 0, c = 1;
                            (e.words[0] & c) == 0 && h < 26; ++h, c <<= 1);
                        if (h > 0)
                            for (e.iushrn(h); h-- > 0;)(n.isOdd() || i.isOdd()) && (n.iadd(u), i.isub(l)), n.iushrn(1), i.iushrn(1);
                        for (var d = 0, g = 1;
                            (r.words[0] & g) == 0 && d < 26; ++d, g <<= 1);
                        if (d > 0)
                            for (r.iushrn(d); d-- > 0;)(o.isOdd() || s.isOdd()) && (o.iadd(u), s.isub(l)), o.iushrn(1), s.iushrn(1);
                        e.cmp(r) >= 0 ? (e.isub(r), n.isub(o), i.isub(s)) : (r.isub(e), o.isub(n), s.isub(i))
                    }
                    return {
                        a: o,
                        b: s,
                        gcd: r.iushln(a)
                    }
                }, BN.prototype._invmp = function(t) {
                    assert(0 === t.negative), assert(!t.isZero());
                    var e, r = this,
                        n = t.clone();
                    r = 0 !== r.negative ? r.umod(t) : r.clone();
                    for (var i = new BN(1), o = new BN(0), s = n.clone(); r.cmpn(1) > 0 && n.cmpn(1) > 0;) {
                        for (var a = 0, u = 1;
                            (r.words[0] & u) == 0 && a < 26; ++a, u <<= 1);
                        if (a > 0)
                            for (r.iushrn(a); a-- > 0;) i.isOdd() && i.iadd(s), i.iushrn(1);
                        for (var l = 0, h = 1;
                            (n.words[0] & h) == 0 && l < 26; ++l, h <<= 1);
                        if (l > 0)
                            for (n.iushrn(l); l-- > 0;) o.isOdd() && o.iadd(s), o.iushrn(1);
                        r.cmp(n) >= 0 ? (r.isub(n), i.isub(o)) : (n.isub(r), o.isub(i))
                    }
                    return 0 > (e = 0 === r.cmpn(1) ? i : o).cmpn(0) && e.iadd(t), e
                }, BN.prototype.gcd = function(t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                        r = t.clone();
                    e.negative = 0, r.negative = 0;
                    for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; e.isEven();) e.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var i = e.cmp(r);
                        if (i < 0) {
                            var o = e;
                            e = r, r = o
                        } else if (0 === i || 0 === r.cmpn(1)) break;
                        e.isub(r)
                    }
                    return r.iushln(n)
                }, BN.prototype.invm = function(t) {
                    return this.egcd(t).a.umod(t)
                }, BN.prototype.isEven = function() {
                    return (1 & this.words[0]) == 0
                }, BN.prototype.isOdd = function() {
                    return (1 & this.words[0]) == 1
                }, BN.prototype.andln = function(t) {
                    return this.words[0] & t
                }, BN.prototype.bincn = function(t) {
                    assert("number" == typeof t);
                    var e = t % 26,
                        r = (t - e) / 26,
                        n = 1 << e;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= n, this;
                    for (var i = n, o = r; 0 !== i && o < this.length; o++) {
                        var s = 0 | this.words[o];
                        s += i, i = s >>> 26, s &= 67108863, this.words[o] = s
                    }
                    return 0 !== i && (this.words[o] = i, this.length++), this
                }, BN.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, BN.prototype.cmpn = function(t) {
                    var e, r = t < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this._strip(), this.length > 1) e = 1;
                    else {
                        r && (t = -t), assert(t <= 67108863, "Number is too big");
                        var n = 0 | this.words[0];
                        e = n === t ? 0 : n < t ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -e : e
                }, BN.prototype.cmp = function(t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e
                }, BN.prototype.ucmp = function(t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r],
                            i = 0 | t.words[r];
                        if (n !== i) {
                            n < i ? e = -1 : n > i && (e = 1);
                            break
                        }
                    }
                    return e
                }, BN.prototype.gtn = function(t) {
                    return 1 === this.cmpn(t)
                }, BN.prototype.gt = function(t) {
                    return 1 === this.cmp(t)
                }, BN.prototype.gten = function(t) {
                    return this.cmpn(t) >= 0
                }, BN.prototype.gte = function(t) {
                    return this.cmp(t) >= 0
                }, BN.prototype.ltn = function(t) {
                    return -1 === this.cmpn(t)
                }, BN.prototype.lt = function(t) {
                    return -1 === this.cmp(t)
                }, BN.prototype.lten = function(t) {
                    return 0 >= this.cmpn(t)
                }, BN.prototype.lte = function(t) {
                    return 0 >= this.cmp(t)
                }, BN.prototype.eqn = function(t) {
                    return 0 === this.cmpn(t)
                }, BN.prototype.eq = function(t) {
                    return 0 === this.cmp(t)
                }, BN.red = function(t) {
                    return new Red(t)
                }, BN.prototype.toRed = function(t) {
                    return assert(!this.red, "Already a number in reduction context"), assert(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t)
                }, BN.prototype.fromRed = function() {
                    return assert(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, BN.prototype._forceRed = function(t) {
                    return this.red = t, this
                }, BN.prototype.forceRed = function(t) {
                    return assert(!this.red, "Already a number in reduction context"), this._forceRed(t)
                }, BN.prototype.redAdd = function(t) {
                    return assert(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
                }, BN.prototype.redIAdd = function(t) {
                    return assert(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
                }, BN.prototype.redSub = function(t) {
                    return assert(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
                }, BN.prototype.redISub = function(t) {
                    return assert(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
                }, BN.prototype.redShl = function(t) {
                    return assert(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
                }, BN.prototype.redMul = function(t) {
                    return assert(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
                }, BN.prototype.redIMul = function(t) {
                    return assert(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
                }, BN.prototype.redSqr = function() {
                    return assert(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, BN.prototype.redISqr = function() {
                    return assert(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, BN.prototype.redSqrt = function() {
                    return assert(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, BN.prototype.redInvm = function() {
                    return assert(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, BN.prototype.redNeg = function() {
                    return assert(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, BN.prototype.redPow = function(t) {
                    return assert(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
                };
                var a = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function MPrime(t, e) {
                    this.name = t, this.p = new BN(e, 16), this.n = this.p.bitLength(), this.k = new BN(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function K256() {
                    MPrime.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function P224() {
                    MPrime.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function P192() {
                    MPrime.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function P25519() {
                    MPrime.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function Red(t) {
                    if ("string" == typeof t) {
                        var e = BN._prime(t);
                        this.m = e.p, this.prime = e
                    } else assert(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null
                }

                function Mont(t) {
                    Red.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new BN(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                MPrime.prototype._tmp = function() {
                    var t = new BN(null);
                    return t.words = Array(Math.ceil(this.n / 13)), t
                }, MPrime.prototype.ireduce = function(t) {
                    var e, r = t;
                    do this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength(); while (e > this.n);
                    var n = e < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
                }, MPrime.prototype.split = function(t, e) {
                    t.iushrn(this.n, 0, e)
                }, MPrime.prototype.imulK = function(t) {
                    return t.imul(this.k)
                }, inherits(K256, MPrime), K256.prototype.split = function(t, e) {
                    for (var r = Math.min(t.length, 9), n = 0; n < r; n++) e.words[n] = t.words[n];
                    if (e.length = r, t.length <= 9) {
                        t.words[0] = 0, t.length = 1;
                        return
                    }
                    var i = t.words[9];
                    for (n = 10, e.words[e.length++] = 4194303 & i; n < t.length; n++) {
                        var o = 0 | t.words[n];
                        t.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                    }
                    i >>>= 22, t.words[n - 10] = i, 0 === i && t.length > 10 ? t.length -= 10 : t.length -= 9
                }, K256.prototype.imulK = function(t) {
                    t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = 0 | t.words[r];
                        e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0)
                    }
                    return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t
                }, inherits(P224, MPrime), inherits(P192, MPrime), inherits(P25519, MPrime), P25519.prototype.imulK = function(t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                        var n = (0 | t.words[r]) * 19 + e,
                            i = 67108863 & n;
                        n >>>= 26, t.words[r] = i, e = n
                    }
                    return 0 !== e && (t.words[t.length++] = e), t
                }, BN._prime = function(t) {
                    var e;
                    if (a[t]) return a[t];
                    if ("k256" === t) e = new K256;
                    else if ("p224" === t) e = new P224;
                    else if ("p192" === t) e = new P192;
                    else if ("p25519" === t) e = new P25519;
                    else throw Error("Unknown prime " + t);
                    return a[t] = e, e
                }, Red.prototype._verify1 = function(t) {
                    assert(0 === t.negative, "red works only with positives"), assert(t.red, "red works only with red numbers")
                }, Red.prototype._verify2 = function(t, e) {
                    assert((t.negative | e.negative) == 0, "red works only with positives"), assert(t.red && t.red === e.red, "red works only with red numbers")
                }, Red.prototype.imod = function(t) {
                    return this.prime ? this.prime.ireduce(t)._forceRed(this) : (move(t, t.umod(this.m)._forceRed(this)), t)
                }, Red.prototype.neg = function(t) {
                    return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
                }, Red.prototype.add = function(t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, Red.prototype.iadd = function(t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, Red.prototype.sub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this)
                }, Red.prototype.isub = function(t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return 0 > r.cmpn(0) && r.iadd(this.m), r
                }, Red.prototype.shl = function(t, e) {
                    return this._verify1(t), this.imod(t.ushln(e))
                }, Red.prototype.imul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.imul(e))
                }, Red.prototype.mul = function(t, e) {
                    return this._verify2(t, e), this.imod(t.mul(e))
                }, Red.prototype.isqr = function(t) {
                    return this.imul(t, t.clone())
                }, Red.prototype.sqr = function(t) {
                    return this.mul(t, t)
                }, Red.prototype.sqrt = function(t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if (assert(e % 2 == 1), 3 === e) {
                        var r = this.m.add(new BN(1)).iushrn(2);
                        return this.pow(t, r)
                    }
                    for (var n = this.m.subn(1), i = 0; !n.isZero() && 0 === n.andln(1);) i++, n.iushrn(1);
                    assert(!n.isZero());
                    var o = new BN(1).toRed(this),
                        s = o.redNeg(),
                        a = this.m.subn(1).iushrn(1),
                        u = this.m.bitLength();
                    for (u = new BN(2 * u * u).toRed(this); 0 !== this.pow(u, a).cmp(s);) u.redIAdd(s);
                    for (var l = this.pow(u, n), h = this.pow(t, n.addn(1).iushrn(1)), c = this.pow(t, n), d = i; 0 !== c.cmp(o);) {
                        for (var g = c, m = 0; 0 !== g.cmp(o); m++) g = g.redSqr();
                        assert(m < d);
                        var p = this.pow(l, new BN(1).iushln(d - m - 1));
                        h = h.redMul(p), l = p.redSqr(), c = c.redMul(l), d = m
                    }
                    return h
                }, Red.prototype.invm = function(t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e)
                }, Red.prototype.pow = function(t, e) {
                    if (e.isZero()) return new BN(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = Array(16);
                    r[0] = new BN(1).toRed(this), r[1] = t;
                    for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
                    var i = r[0],
                        o = 0,
                        s = 0,
                        a = e.bitLength() % 26;
                    for (0 === a && (a = 26), n = e.length - 1; n >= 0; n--) {
                        for (var u = e.words[n], l = a - 1; l >= 0; l--) {
                            var h = u >> l & 1;
                            if (i !== r[0] && (i = this.sqr(i)), 0 === h && 0 === o) {
                                s = 0;
                                continue
                            }
                            o <<= 1, o |= h, (4 == ++s || 0 === n && 0 === l) && (i = this.mul(i, r[o]), s = 0, o = 0)
                        }
                        a = 26
                    }
                    return i
                }, Red.prototype.convertTo = function(t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e
                }, Red.prototype.convertFrom = function(t) {
                    var e = t.clone();
                    return e.red = null, e
                }, BN.mont = function(t) {
                    return new Mont(t)
                }, inherits(Mont, Red), Mont.prototype.convertTo = function(t) {
                    return this.imod(t.ushln(this.shift))
                }, Mont.prototype.convertFrom = function(t) {
                    var e = this.imod(t.mul(this.rinv));
                    return e.red = null, e
                }, Mont.prototype.imul = function(t, e) {
                    if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                    var r = t.imul(e),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : 0 > i.cmpn(0) && (o = i.iadd(this.m)), o._forceRed(this)
                }, Mont.prototype.mul = function(t, e) {
                    if (t.isZero() || e.isZero()) return new BN(0)._forceRed(this);
                    var r = t.mul(e),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : 0 > i.cmpn(0) && (o = i.iadd(this.m)), o._forceRed(this)
                }, Mont.prototype.invm = function(t) {
                    return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(t = r.nmd(t), this)
        },
        55336: function(t, e, r) {
            e.utils = r(65794), e.common = r(49619), e.sha = r(53610), e.ripemd = r(17721), e.hmac = r(56432), e.sha1 = e.sha.sha1, e.sha256 = e.sha.sha256, e.sha224 = e.sha.sha224, e.sha384 = e.sha.sha384, e.sha512 = e.sha.sha512, e.ripemd160 = e.ripemd.ripemd160
        },
        49619: function(t, e, r) {
            "use strict";
            var n = r(65794),
                i = r(8786);

            function BlockHash() {
                this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
            }
            e.BlockHash = BlockHash, BlockHash.prototype.update = function(t, e) {
                if (t = n.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
                    var r = (t = this.pending).length % this._delta8;
                    this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = n.join32(t, 0, t.length - r, this.endian);
                    for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32)
                }
                return this
            }, BlockHash.prototype.digest = function(t) {
                return this.update(this._pad()), i(null === this.pending), this._digest(t)
            }, BlockHash.prototype._pad = function() {
                var t = this.pendingTotal,
                    e = this._delta8,
                    r = e - (t + this.padLength) % e,
                    n = Array(r + this.padLength);
                n[0] = 128;
                for (var i = 1; i < r; i++) n[i] = 0;
                if (t <<= 3, "big" === this.endian) {
                    for (var o = 8; o < this.padLength; o++) n[i++] = 0;
                    n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = t >>> 24 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 8 & 255, n[i++] = 255 & t
                } else
                    for (o = 8, n[i++] = 255 & t, n[i++] = t >>> 8 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0; o < this.padLength; o++) n[i++] = 0;
                return n
            }
        },
        56432: function(t, e, r) {
            "use strict";
            var n = r(65794),
                i = r(8786);

            function Hmac(t, e, r) {
                if (!(this instanceof Hmac)) return new Hmac(t, e, r);
                this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(e, r))
            }
            t.exports = Hmac, Hmac.prototype._init = function(t) {
                t.length > this.blockSize && (t = new this.Hash().update(t).digest()), i(t.length <= this.blockSize);
                for (var e = t.length; e < this.blockSize; e++) t.push(0);
                for (e = 0; e < t.length; e++) t[e] ^= 54;
                for (e = 0, this.inner = new this.Hash().update(t); e < t.length; e++) t[e] ^= 106;
                this.outer = new this.Hash().update(t)
            }, Hmac.prototype.update = function(t, e) {
                return this.inner.update(t, e), this
            }, Hmac.prototype.digest = function(t) {
                return this.outer.update(this.inner.digest()), this.outer.digest(t)
            }
        },
        17721: function(t, e, r) {
            "use strict";
            var n = r(65794),
                i = r(49619),
                o = n.rotl32,
                s = n.sum32,
                a = n.sum32_3,
                u = n.sum32_4,
                l = i.BlockHash;

            function RIPEMD160() {
                if (!(this instanceof RIPEMD160)) return new RIPEMD160;
                l.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
            }

            function f(t, e, r, n) {
                return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n)
            }
            n.inherits(RIPEMD160, l), e.ripemd160 = RIPEMD160, RIPEMD160.blockSize = 512, RIPEMD160.outSize = 160, RIPEMD160.hmacStrength = 192, RIPEMD160.padLength = 64, RIPEMD160.prototype._update = function(t, e) {
                for (var r = this.h[0], n = this.h[1], i = this.h[2], l = this.h[3], m = this.h[4], p = r, y = n, v = i, w = l, b = m, A = 0; A < 80; A++) {
                    var E, _, N = s(o(u(r, f(A, n, i, l), t[h[A] + e], (E = A) <= 15 ? 0 : E <= 31 ? 1518500249 : E <= 47 ? 1859775393 : E <= 63 ? 2400959708 : 2840853838), d[A]), m);
                    r = m, m = l, l = o(i, 10), i = n, n = N, N = s(o(u(p, f(79 - A, y, v, w), t[c[A] + e], (_ = A) <= 15 ? 1352829926 : _ <= 31 ? 1548603684 : _ <= 47 ? 1836072691 : _ <= 63 ? 2053994217 : 0), g[A]), b), p = b, b = w, w = o(v, 10), v = y, y = N
                }
                N = a(this.h[1], i, w), this.h[1] = a(this.h[2], l, b), this.h[2] = a(this.h[3], m, p), this.h[3] = a(this.h[4], r, y), this.h[4] = a(this.h[0], n, v), this.h[0] = N
            }, RIPEMD160.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h, "little") : n.split32(this.h, "little")
            };
            var h = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                c = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                d = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                g = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
        },
        53610: function(t, e, r) {
            "use strict";
            e.sha1 = r(22490), e.sha224 = r(10627), e.sha256 = r(78101), e.sha384 = r(11629), e.sha512 = r(20368)
        },
        22490: function(t, e, r) {
            "use strict";
            var n = r(65794),
                i = r(49619),
                o = r(52770),
                s = n.rotl32,
                a = n.sum32,
                u = n.sum32_5,
                l = o.ft_1,
                h = i.BlockHash,
                c = [1518500249, 1859775393, 2400959708, 3395469782];

            function SHA1() {
                if (!(this instanceof SHA1)) return new SHA1;
                h.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = Array(80)
            }
            n.inherits(SHA1, h), t.exports = SHA1, SHA1.blockSize = 512, SHA1.outSize = 160, SHA1.hmacStrength = 80, SHA1.padLength = 64, SHA1.prototype._update = function(t, e) {
                for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
                for (; n < r.length; n++) r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
                var i = this.h[0],
                    o = this.h[1],
                    h = this.h[2],
                    d = this.h[3],
                    g = this.h[4];
                for (n = 0; n < r.length; n++) {
                    var m = ~~(n / 20),
                        p = u(s(i, 5), l(m, o, h, d), g, r[n], c[m]);
                    g = d, d = h, h = s(o, 30), o = i, i = p
                }
                this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], h), this.h[3] = a(this.h[3], d), this.h[4] = a(this.h[4], g)
            }, SHA1.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        },
        10627: function(t, e, r) {
            "use strict";
            var n = r(65794),
                i = r(78101);

            function SHA224() {
                if (!(this instanceof SHA224)) return new SHA224;
                i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
            }
            n.inherits(SHA224, i), t.exports = SHA224, SHA224.blockSize = 512, SHA224.outSize = 224, SHA224.hmacStrength = 192, SHA224.padLength = 64, SHA224.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big")
            }
        },
        78101: function(t, e, r) {
            "use strict";
            var n = r(65794),
                i = r(49619),
                o = r(52770),
                s = r(8786),
                a = n.sum32,
                u = n.sum32_4,
                l = n.sum32_5,
                h = o.ch32,
                c = o.maj32,
                d = o.s0_256,
                g = o.s1_256,
                m = o.g0_256,
                p = o.g1_256,
                y = i.BlockHash,
                v = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

            function SHA256() {
                if (!(this instanceof SHA256)) return new SHA256;
                y.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = v, this.W = Array(64)
            }
            n.inherits(SHA256, y), t.exports = SHA256, SHA256.blockSize = 512, SHA256.outSize = 256, SHA256.hmacStrength = 192, SHA256.padLength = 64, SHA256.prototype._update = function(t, e) {
                for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
                for (; n < r.length; n++) r[n] = u(p(r[n - 2]), r[n - 7], m(r[n - 15]), r[n - 16]);
                var i = this.h[0],
                    o = this.h[1],
                    y = this.h[2],
                    v = this.h[3],
                    w = this.h[4],
                    b = this.h[5],
                    A = this.h[6],
                    E = this.h[7];
                for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
                    var _ = l(E, g(w), h(w, b, A), this.k[n], r[n]),
                        N = a(d(i), c(i, o, y));
                    E = A, A = b, b = w, w = a(v, _), v = y, y = o, o = i, i = a(_, N)
                }
                this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], y), this.h[3] = a(this.h[3], v), this.h[4] = a(this.h[4], w), this.h[5] = a(this.h[5], b), this.h[6] = a(this.h[6], A), this.h[7] = a(this.h[7], E)
            }, SHA256.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        },
        11629: function(t, e, r) {
            "use strict";
            var n = r(65794),
                i = r(20368);

            function SHA384() {
                if (!(this instanceof SHA384)) return new SHA384;
                i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
            }
            n.inherits(SHA384, i), t.exports = SHA384, SHA384.blockSize = 1024, SHA384.outSize = 384, SHA384.hmacStrength = 192, SHA384.padLength = 128, SHA384.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big")
            }
        },
        20368: function(t, e, r) {
            "use strict";
            var n = r(65794),
                i = r(49619),
                o = r(8786),
                s = n.rotr64_hi,
                a = n.rotr64_lo,
                u = n.shr64_hi,
                l = n.shr64_lo,
                h = n.sum64,
                c = n.sum64_hi,
                d = n.sum64_lo,
                g = n.sum64_4_hi,
                m = n.sum64_4_lo,
                p = n.sum64_5_hi,
                y = n.sum64_5_lo,
                v = i.BlockHash,
                w = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

            function SHA512() {
                if (!(this instanceof SHA512)) return new SHA512;
                v.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = w, this.W = Array(160)
            }
            n.inherits(SHA512, v), t.exports = SHA512, SHA512.blockSize = 1024, SHA512.outSize = 512, SHA512.hmacStrength = 192, SHA512.padLength = 128, SHA512.prototype._prepareBlock = function(t, e) {
                for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n];
                for (; n < r.length; n += 2) {
                    var i = function(t, e) {
                            var r = s(t, e, 19) ^ s(e, t, 29) ^ u(t, e, 6);
                            return r < 0 && (r += 4294967296), r
                        }(r[n - 4], r[n - 3]),
                        o = function(t, e) {
                            var r = a(t, e, 19) ^ a(e, t, 29) ^ l(t, e, 6);
                            return r < 0 && (r += 4294967296), r
                        }(r[n - 4], r[n - 3]),
                        h = r[n - 14],
                        c = r[n - 13],
                        d = function(t, e) {
                            var r = s(t, e, 1) ^ s(t, e, 8) ^ u(t, e, 7);
                            return r < 0 && (r += 4294967296), r
                        }(r[n - 30], r[n - 29]),
                        p = function(t, e) {
                            var r = a(t, e, 1) ^ a(t, e, 8) ^ l(t, e, 7);
                            return r < 0 && (r += 4294967296), r
                        }(r[n - 30], r[n - 29]),
                        y = r[n - 32],
                        v = r[n - 31];
                    r[n] = g(i, o, h, c, d, p, y, v), r[n + 1] = m(i, o, h, c, d, p, y, v)
                }
            }, SHA512.prototype._update = function(t, e) {
                this._prepareBlock(t, e);
                var r = this.W,
                    n = this.h[0],
                    i = this.h[1],
                    u = this.h[2],
                    l = this.h[3],
                    g = this.h[4],
                    m = this.h[5],
                    v = this.h[6],
                    w = this.h[7],
                    b = this.h[8],
                    A = this.h[9],
                    E = this.h[10],
                    _ = this.h[11],
                    N = this.h[12],
                    x = this.h[13],
                    k = this.h[14],
                    S = this.h[15];
                o(this.k.length === r.length);
                for (var P = 0; P < r.length; P += 2) {
                    var M = k,
                        B = S,
                        R = function(t, e) {
                            var r = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9);
                            return r < 0 && (r += 4294967296), r
                        }(b, A),
                        C = function(t, e) {
                            var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
                            return r < 0 && (r += 4294967296), r
                        }(b, A),
                        I = function(t, e, r, n, i) {
                            var o = t & r ^ ~t & i;
                            return o < 0 && (o += 4294967296), o
                        }(b, 0, E, 0, N, x),
                        O = function(t, e, r, n, i, o) {
                            var s = e & n ^ ~e & o;
                            return s < 0 && (s += 4294967296), s
                        }(0, A, 0, _, 0, x),
                        T = this.k[P],
                        F = this.k[P + 1],
                        L = r[P],
                        D = r[P + 1],
                        U = p(M, B, R, C, I, O, T, F, L, D),
                        H = y(M, B, R, C, I, O, T, F, L, D);
                    M = function(t, e) {
                        var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
                        return r < 0 && (r += 4294967296), r
                    }(n, i);
                    var z = c(M, B = function(t, e) {
                            var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
                            return r < 0 && (r += 4294967296), r
                        }(n, i), R = function(t, e, r, n, i) {
                            var o = t & r ^ t & i ^ r & i;
                            return o < 0 && (o += 4294967296), o
                        }(n, 0, u, 0, g, m), C = function(t, e, r, n, i, o) {
                            var s = e & n ^ e & o ^ n & o;
                            return s < 0 && (s += 4294967296), s
                        }(0, i, 0, l, 0, m)),
                        j = d(M, B, R, C);
                    k = N, S = x, N = E, x = _, E = b, _ = A, b = c(v, w, U, H), A = d(w, w, U, H), v = g, w = m, g = u, m = l, u = n, l = i, n = c(U, H, z, j), i = d(U, H, z, j)
                }
                h(this.h, 0, n, i), h(this.h, 2, u, l), h(this.h, 4, g, m), h(this.h, 6, v, w), h(this.h, 8, b, A), h(this.h, 10, E, _), h(this.h, 12, N, x), h(this.h, 14, k, S)
            }, SHA512.prototype._digest = function(t) {
                return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
            }
        },
        52770: function(t, e, r) {
            "use strict";
            var n = r(65794).rotr32;

            function maj32(t, e, r) {
                return t & e ^ t & r ^ e & r
            }
            e.ft_1 = function(t, e, r, n) {
                return 0 === t ? e & r ^ ~e & n : 1 === t || 3 === t ? e ^ r ^ n : 2 === t ? maj32(e, r, n) : void 0
            }, e.ch32 = function(t, e, r) {
                return t & e ^ ~t & r
            }, e.maj32 = maj32, e.p32 = function(t, e, r) {
                return t ^ e ^ r
            }, e.s0_256 = function(t) {
                return n(t, 2) ^ n(t, 13) ^ n(t, 22)
            }, e.s1_256 = function(t) {
                return n(t, 6) ^ n(t, 11) ^ n(t, 25)
            }, e.g0_256 = function(t) {
                return n(t, 7) ^ n(t, 18) ^ t >>> 3
            }, e.g1_256 = function(t) {
                return n(t, 17) ^ n(t, 19) ^ t >>> 10
            }
        },
        65794: function(t, e, r) {
            "use strict";
            var n = r(8786),
                i = r(75335);

            function htonl(t) {
                return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
            }

            function zero2(t) {
                return 1 === t.length ? "0" + t : t
            }

            function zero8(t) {
                if (7 === t.length) return "0" + t;
                if (6 === t.length) return "00" + t;
                if (5 === t.length) return "000" + t;
                if (4 === t.length) return "0000" + t;
                if (3 === t.length) return "00000" + t;
                if (2 === t.length) return "000000" + t;
                if (1 === t.length) return "0000000" + t;
                else return t
            }
            e.inherits = i, e.toArray = function(t, e) {
                if (Array.isArray(t)) return t.slice();
                if (!t) return [];
                var r = [];
                if ("string" == typeof t) {
                    if (e) {
                        if ("hex" === e)
                            for ((t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t), i = 0; i < t.length; i += 2) r.push(parseInt(t[i] + t[i + 1], 16))
                    } else
                        for (var n = 0, i = 0; i < t.length; i++) {
                            var o, s, a = t.charCodeAt(i);
                            a < 128 ? r[n++] = a : (a < 2048 ? r[n++] = a >> 6 | 192 : ((o = t, s = i, (64512 & o.charCodeAt(s)) != 55296 || s < 0 || s + 1 >= o.length ? 1 : (64512 & o.charCodeAt(s + 1)) != 56320) ? r[n++] = a >> 12 | 224 : (a = 65536 + ((1023 & a) << 10) + (1023 & t.charCodeAt(++i)), r[n++] = a >> 18 | 240, r[n++] = a >> 12 & 63 | 128), r[n++] = a >> 6 & 63 | 128), r[n++] = 63 & a | 128)
                        }
                } else
                    for (i = 0; i < t.length; i++) r[i] = 0 | t[i];
                return r
            }, e.toHex = function(t) {
                for (var e = "", r = 0; r < t.length; r++) e += zero2(t[r].toString(16));
                return e
            }, e.htonl = htonl, e.toHex32 = function(t, e) {
                for (var r = "", n = 0; n < t.length; n++) {
                    var i = t[n];
                    "little" === e && (i = htonl(i)), r += zero8(i.toString(16))
                }
                return r
            }, e.zero2 = zero2, e.zero8 = zero8, e.join32 = function(t, e, r, i) {
                var o, s = r - e;
                n(s % 4 == 0);
                for (var a = Array(s / 4), u = 0, l = e; u < a.length; u++, l += 4) o = "big" === i ? t[l] << 24 | t[l + 1] << 16 | t[l + 2] << 8 | t[l + 3] : t[l + 3] << 24 | t[l + 2] << 16 | t[l + 1] << 8 | t[l], a[u] = o >>> 0;
                return a
            }, e.split32 = function(t, e) {
                for (var r = Array(4 * t.length), n = 0, i = 0; n < t.length; n++, i += 4) {
                    var o = t[n];
                    "big" === e ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o)
                }
                return r
            }, e.rotr32 = function(t, e) {
                return t >>> e | t << 32 - e
            }, e.rotl32 = function(t, e) {
                return t << e | t >>> 32 - e
            }, e.sum32 = function(t, e) {
                return t + e >>> 0
            }, e.sum32_3 = function(t, e, r) {
                return t + e + r >>> 0
            }, e.sum32_4 = function(t, e, r, n) {
                return t + e + r + n >>> 0
            }, e.sum32_5 = function(t, e, r, n, i) {
                return t + e + r + n + i >>> 0
            }, e.sum64 = function(t, e, r, n) {
                var i = t[e],
                    o = n + t[e + 1] >>> 0;
                t[e] = (o < n ? 1 : 0) + r + i >>> 0, t[e + 1] = o
            }, e.sum64_hi = function(t, e, r, n) {
                return (e + n >>> 0 < e ? 1 : 0) + t + r >>> 0
            }, e.sum64_lo = function(t, e, r, n) {
                return e + n >>> 0
            }, e.sum64_4_hi = function(t, e, r, n, i, o, s, a) {
                var u, l = e;
                return t + r + i + s + (0 + ((l = l + n >>> 0) < e ? 1 : 0) + ((l = l + o >>> 0) < o ? 1 : 0) + ((l = l + a >>> 0) < a ? 1 : 0)) >>> 0
            }, e.sum64_4_lo = function(t, e, r, n, i, o, s, a) {
                return e + n + o + a >>> 0
            }, e.sum64_5_hi = function(t, e, r, n, i, o, s, a, u, l) {
                var h, c = e;
                return t + r + i + s + u + (0 + ((c = c + n >>> 0) < e ? 1 : 0) + ((c = c + o >>> 0) < o ? 1 : 0) + ((c = c + a >>> 0) < a ? 1 : 0) + ((c = c + l >>> 0) < l ? 1 : 0)) >>> 0
            }, e.sum64_5_lo = function(t, e, r, n, i, o, s, a, u, l) {
                return e + n + o + a + l >>> 0
            }, e.rotr64_hi = function(t, e, r) {
                return (e << 32 - r | t >>> r) >>> 0
            }, e.rotr64_lo = function(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }, e.shr64_hi = function(t, e, r) {
                return t >>> r
            }, e.shr64_lo = function(t, e, r) {
                return (t << 32 - r | e >>> r) >>> 0
            }
        },
        75335: function(t) {
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
                    var TempCtor = function() {};
                    TempCtor.prototype = e.prototype, t.prototype = new TempCtor, t.prototype.constructor = t
                }
            }
        },
        26398: function(t, e, r) {
            var n, i = r(25566);
            ! function() {
                "use strict";
                var o = "input is invalid type",
                    s = "object" == typeof window,
                    a = s ? window : {};
                a.JS_SHA3_NO_WINDOW && (s = !1);
                var u = !s && "object" == typeof self;
                !a.JS_SHA3_NO_NODE_JS && "object" == typeof i && i.versions && i.versions.node ? a = r.g : u && (a = self);
                var l = !a.JS_SHA3_NO_COMMON_JS && t.exports,
                    h = r.amdO,
                    c = !a.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                    d = "0123456789abcdef".split(""),
                    g = [4, 1024, 262144, 67108864],
                    m = [0, 8, 16, 24],
                    p = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                    y = [224, 256, 384, 512],
                    v = [128, 256],
                    w = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                    b = {
                        128: 168,
                        256: 136
                    };
                (a.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }), c && (a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(t) {
                    return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                });
                for (var createOutputMethod = function(t, e, r) {
                        return function(n) {
                            return new Keccak(t, e, t).update(n)[r]()
                        }
                    }, createShakeOutputMethod = function(t, e, r) {
                        return function(n, i) {
                            return new Keccak(t, e, i).update(n)[r]()
                        }
                    }, createCshakeOutputMethod = function(t, e, r) {
                        return function(e, n, i, o) {
                            return E["cshake" + t].update(e, n, i, o)[r]()
                        }
                    }, createKmacOutputMethod = function(t, e, r) {
                        return function(e, n, i, o) {
                            return E["kmac" + t].update(e, n, i, o)[r]()
                        }
                    }, createOutputMethods = function(t, e, r, n) {
                        for (var i = 0; i < w.length; ++i) {
                            var o = w[i];
                            t[o] = e(r, n, o)
                        }
                        return t
                    }, createMethod = function(t, e) {
                        var r = createOutputMethod(t, e, "hex");
                        return r.create = function() {
                            return new Keccak(t, e, t)
                        }, r.update = function(t) {
                            return r.create().update(t)
                        }, createOutputMethods(r, createOutputMethod, t, e)
                    }, A = [{
                        name: "keccak",
                        padding: [1, 256, 65536, 16777216],
                        bits: y,
                        createMethod: createMethod
                    }, {
                        name: "sha3",
                        padding: [6, 1536, 393216, 100663296],
                        bits: y,
                        createMethod: createMethod
                    }, {
                        name: "shake",
                        padding: [31, 7936, 2031616, 520093696],
                        bits: v,
                        createMethod: function(t, e) {
                            var r = createShakeOutputMethod(t, e, "hex");
                            return r.create = function(r) {
                                return new Keccak(t, e, r)
                            }, r.update = function(t, e) {
                                return r.create(e).update(t)
                            }, createOutputMethods(r, createShakeOutputMethod, t, e)
                        }
                    }, {
                        name: "cshake",
                        padding: g,
                        bits: v,
                        createMethod: function(t, e) {
                            var r = b[t],
                                n = createCshakeOutputMethod(t, e, "hex");
                            return n.create = function(n, i, o) {
                                return i || o ? new Keccak(t, e, n).bytepad([i, o], r) : E["shake" + t].create(n)
                            }, n.update = function(t, e, r, i) {
                                return n.create(e, r, i).update(t)
                            }, createOutputMethods(n, createCshakeOutputMethod, t, e)
                        }
                    }, {
                        name: "kmac",
                        padding: g,
                        bits: v,
                        createMethod: function(t, e) {
                            var r = b[t],
                                n = createKmacOutputMethod(t, e, "hex");
                            return n.create = function(n, i, o) {
                                return new Kmac(t, e, i).bytepad(["KMAC", o], r).bytepad([n], r)
                            }, n.update = function(t, e, r, i) {
                                return n.create(t, r, i).update(e)
                            }, createOutputMethods(n, createKmacOutputMethod, t, e)
                        }
                    }], E = {}, _ = [], N = 0; N < A.length; ++N)
                    for (var x = A[N], k = x.bits, S = 0; S < k.length; ++S) {
                        var P = x.name + "_" + k[S];
                        if (_.push(P), E[P] = x.createMethod(k[S], x.padding), "sha3" !== x.name) {
                            var M = x.name + k[S];
                            _.push(M), E[M] = E[P]
                        }
                    }

                function Keccak(t, e, r) {
                    this.blocks = [], this.s = [], this.padding = e, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
                    for (var n = 0; n < 50; ++n) this.s[n] = 0
                }

                function Kmac(t, e, r) {
                    Keccak.call(this, t, e, r)
                }
                Keccak.prototype.update = function(t) {
                    if (this.finalized) throw Error("finalize already called");
                    var e, r = typeof t;
                    if ("string" !== r) {
                        if ("object" === r) {
                            if (null === t) throw Error(o);
                            if (c && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                            else if (!Array.isArray(t) && (!c || !ArrayBuffer.isView(t))) throw Error(o)
                        } else throw Error(o);
                        e = !0
                    }
                    for (var n, i, s = this.blocks, a = this.byteCount, u = t.length, l = this.blockCount, h = 0, d = this.s; h < u;) {
                        if (this.reset)
                            for (n = 1, this.reset = !1, s[0] = this.block; n < l + 1; ++n) s[n] = 0;
                        if (e)
                            for (n = this.start; h < u && n < a; ++h) s[n >> 2] |= t[h] << m[3 & n++];
                        else
                            for (n = this.start; h < u && n < a; ++h)(i = t.charCodeAt(h)) < 128 ? s[n >> 2] |= i << m[3 & n++] : (i < 2048 ? s[n >> 2] |= (192 | i >> 6) << m[3 & n++] : (i < 55296 || i >= 57344 ? s[n >> 2] |= (224 | i >> 12) << m[3 & n++] : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++h)), s[n >> 2] |= (240 | i >> 18) << m[3 & n++], s[n >> 2] |= (128 | i >> 12 & 63) << m[3 & n++]), s[n >> 2] |= (128 | i >> 6 & 63) << m[3 & n++]), s[n >> 2] |= (128 | 63 & i) << m[3 & n++]);
                        if (this.lastByteIndex = n, n >= a) {
                            for (this.start = n - a, this.block = s[l], n = 0; n < l; ++n) d[n] ^= s[n];
                            f(d), this.reset = !0
                        } else this.start = n
                    }
                    return this
                }, Keccak.prototype.encode = function(t, e) {
                    var r = 255 & t,
                        n = 1,
                        i = [r];
                    for (t >>= 8, r = 255 & t; r > 0;) i.unshift(r), t >>= 8, r = 255 & t, ++n;
                    return e ? i.push(n) : i.unshift(n), this.update(i), i.length
                }, Keccak.prototype.encodeString = function(t) {
                    var e, r = typeof t;
                    if ("string" !== r) {
                        if ("object" === r) {
                            if (null === t) throw Error(o);
                            if (c && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                            else if (!Array.isArray(t) && (!c || !ArrayBuffer.isView(t))) throw Error(o)
                        } else throw Error(o);
                        e = !0
                    }
                    var n = 0,
                        i = t.length;
                    if (e) n = i;
                    else
                        for (var s = 0; s < t.length; ++s) {
                            var a = t.charCodeAt(s);
                            a < 128 ? n += 1 : a < 2048 ? n += 2 : a < 55296 || a >= 57344 ? n += 3 : (a = 65536 + ((1023 & a) << 10 | 1023 & t.charCodeAt(++s)), n += 4)
                        }
                    return n += this.encode(8 * n), this.update(t), n
                }, Keccak.prototype.bytepad = function(t, e) {
                    for (var r = this.encode(e), n = 0; n < t.length; ++n) r += this.encodeString(t[n]);
                    var i = e - r % e,
                        o = [];
                    return o.length = i, this.update(o), this
                }, Keccak.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var t = this.blocks,
                            e = this.lastByteIndex,
                            r = this.blockCount,
                            n = this.s;
                        if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount)
                            for (e = 1, t[0] = t[r]; e < r + 1; ++e) t[e] = 0;
                        for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) n[e] ^= t[e];
                        f(n)
                    }
                }, Keccak.prototype.toString = Keccak.prototype.hex = function() {
                    this.finalize();
                    for (var t, e = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, s = 0, a = ""; s < n;) {
                        for (o = 0; o < e && s < n; ++o, ++s) a += d[(t = r[o]) >> 4 & 15] + d[15 & t] + d[t >> 12 & 15] + d[t >> 8 & 15] + d[t >> 20 & 15] + d[t >> 16 & 15] + d[t >> 28 & 15] + d[t >> 24 & 15];
                        s % e == 0 && (f(r), o = 0)
                    }
                    return i && (a += d[(t = r[o]) >> 4 & 15] + d[15 & t], i > 1 && (a += d[t >> 12 & 15] + d[t >> 8 & 15]), i > 2 && (a += d[t >> 20 & 15] + d[t >> 16 & 15])), a
                }, Keccak.prototype.arrayBuffer = function() {
                    this.finalize();
                    var t, e = this.blockCount,
                        r = this.s,
                        n = this.outputBlocks,
                        i = this.extraBytes,
                        o = 0,
                        s = 0,
                        a = this.outputBits >> 3;
                    t = new ArrayBuffer(i ? n + 1 << 2 : a);
                    for (var u = new Uint32Array(t); s < n;) {
                        for (o = 0; o < e && s < n; ++o, ++s) u[s] = r[o];
                        s % e == 0 && f(r)
                    }
                    return i && (u[o] = r[o], t = t.slice(0, a)), t
                }, Keccak.prototype.buffer = Keccak.prototype.arrayBuffer, Keccak.prototype.digest = Keccak.prototype.array = function() {
                    this.finalize();
                    for (var t, e, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, s = 0, a = 0, u = []; a < i;) {
                        for (s = 0; s < r && a < i; ++s, ++a) t = a << 2, e = n[s], u[t] = 255 & e, u[t + 1] = e >> 8 & 255, u[t + 2] = e >> 16 & 255, u[t + 3] = e >> 24 & 255;
                        a % r == 0 && f(n)
                    }
                    return o && (t = a << 2, e = n[s], u[t] = 255 & e, o > 1 && (u[t + 1] = e >> 8 & 255), o > 2 && (u[t + 2] = e >> 16 & 255)), u
                }, Kmac.prototype = new Keccak, Kmac.prototype.finalize = function() {
                    return this.encode(this.outputBits, !0), Keccak.prototype.finalize.call(this)
                };
                var f = function(t) {
                    var e, r, n, i, o, s, a, u, l, h, c, d, g, m, y, v, w, b, A, E, _, N, x, k, S, P, M, B, R, C, I, O, T, F, L, D, U, H, z, j, G, q, K, J, V, Q, Y, Z, X, W, $, tt, te, tr, tn, ti, to, ts, ta, tu, tl, th, tc;
                    for (n = 0; n < 48; n += 2) i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], u = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], l = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], h = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], c = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48], g = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49], e = d ^ (s << 1 | a >>> 31), r = g ^ (a << 1 | s >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = i ^ (u << 1 | l >>> 31), r = o ^ (l << 1 | u >>> 31), t[2] ^= e, t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = s ^ (h << 1 | c >>> 31), r = a ^ (c << 1 | h >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, t[44] ^= e, t[45] ^= r, e = u ^ (d << 1 | g >>> 31), r = l ^ (g << 1 | d >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = h ^ (i << 1 | o >>> 31), r = c ^ (o << 1 | i >>> 31), t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, m = t[0], y = t[1], Q = t[11] << 4 | t[10] >>> 28, Y = t[10] << 4 | t[11] >>> 28, B = t[20] << 3 | t[21] >>> 29, R = t[21] << 3 | t[20] >>> 29, tu = t[31] << 9 | t[30] >>> 23, tl = t[30] << 9 | t[31] >>> 23, q = t[40] << 18 | t[41] >>> 14, K = t[41] << 18 | t[40] >>> 14, F = t[2] << 1 | t[3] >>> 31, L = t[3] << 1 | t[2] >>> 31, v = t[13] << 12 | t[12] >>> 20, w = t[12] << 12 | t[13] >>> 20, Z = t[22] << 10 | t[23] >>> 22, X = t[23] << 10 | t[22] >>> 22, C = t[33] << 13 | t[32] >>> 19, I = t[32] << 13 | t[33] >>> 19, th = t[42] << 2 | t[43] >>> 30, tc = t[43] << 2 | t[42] >>> 30, tr = t[5] << 30 | t[4] >>> 2, tn = t[4] << 30 | t[5] >>> 2, D = t[14] << 6 | t[15] >>> 26, U = t[15] << 6 | t[14] >>> 26, b = t[25] << 11 | t[24] >>> 21, A = t[24] << 11 | t[25] >>> 21, W = t[34] << 15 | t[35] >>> 17, $ = t[35] << 15 | t[34] >>> 17, O = t[45] << 29 | t[44] >>> 3, T = t[44] << 29 | t[45] >>> 3, k = t[6] << 28 | t[7] >>> 4, S = t[7] << 28 | t[6] >>> 4, ti = t[17] << 23 | t[16] >>> 9, to = t[16] << 23 | t[17] >>> 9, H = t[26] << 25 | t[27] >>> 7, z = t[27] << 25 | t[26] >>> 7, E = t[36] << 21 | t[37] >>> 11, _ = t[37] << 21 | t[36] >>> 11, tt = t[47] << 24 | t[46] >>> 8, te = t[46] << 24 | t[47] >>> 8, J = t[8] << 27 | t[9] >>> 5, V = t[9] << 27 | t[8] >>> 5, P = t[18] << 20 | t[19] >>> 12, M = t[19] << 20 | t[18] >>> 12, ts = t[29] << 7 | t[28] >>> 25, ta = t[28] << 7 | t[29] >>> 25, j = t[38] << 8 | t[39] >>> 24, G = t[39] << 8 | t[38] >>> 24, N = t[48] << 14 | t[49] >>> 18, x = t[49] << 14 | t[48] >>> 18, t[0] = m ^ ~v & b, t[1] = y ^ ~w & A, t[10] = k ^ ~P & B, t[11] = S ^ ~M & R, t[20] = F ^ ~D & H, t[21] = L ^ ~U & z, t[30] = J ^ ~Q & Z, t[31] = V ^ ~Y & X, t[40] = tr ^ ~ti & ts, t[41] = tn ^ ~to & ta, t[2] = v ^ ~b & E, t[3] = w ^ ~A & _, t[12] = P ^ ~B & C, t[13] = M ^ ~R & I, t[22] = D ^ ~H & j, t[23] = U ^ ~z & G, t[32] = Q ^ ~Z & W, t[33] = Y ^ ~X & $, t[42] = ti ^ ~ts & tu, t[43] = to ^ ~ta & tl, t[4] = b ^ ~E & N, t[5] = A ^ ~_ & x, t[14] = B ^ ~C & O, t[15] = R ^ ~I & T, t[24] = H ^ ~j & q, t[25] = z ^ ~G & K, t[34] = Z ^ ~W & tt, t[35] = X ^ ~$ & te, t[44] = ts ^ ~tu & th, t[45] = ta ^ ~tl & tc, t[6] = E ^ ~N & m, t[7] = _ ^ ~x & y, t[16] = C ^ ~O & k, t[17] = I ^ ~T & S, t[26] = j ^ ~q & F, t[27] = G ^ ~K & L, t[36] = W ^ ~tt & J, t[37] = $ ^ ~te & V, t[46] = tu ^ ~th & tr, t[47] = tl ^ ~tc & tn, t[8] = N ^ ~m & v, t[9] = x ^ ~y & w, t[18] = O ^ ~k & P, t[19] = T ^ ~S & M, t[28] = q ^ ~F & D, t[29] = K ^ ~L & U, t[38] = tt ^ ~J & Q, t[39] = te ^ ~V & Y, t[48] = th ^ ~tr & ti, t[49] = tc ^ ~tn & to, t[0] ^= p[n], t[1] ^= p[n + 1]
                };
                if (l) t.exports = E;
                else {
                    for (N = 0; N < _.length; ++N) a[_[N]] = E[_[N]];
                    h && void 0 !== (n = (function() {
                        return E
                    }).call(e, r, e, t)) && (t.exports = n)
                }
            }()
        },
        8786: function(t) {
            function assert(t, e) {
                if (!t) throw Error(e || "Assertion failed")
            }
            t.exports = assert, assert.equal = function(t, e, r) {
                if (t != e) throw Error(r || "Assertion failed: " + t + " != " + e)
            }
        }
    }
]);