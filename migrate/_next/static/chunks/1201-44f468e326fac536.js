(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1201], {
        89494: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Headers: function() {
                    return o
                },
                Request: function() {
                    return a
                },
                Response: function() {
                    return l
                },
                fetch: function() {
                    return n
                }
            });
            var i = function() {
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if (void 0 !== s.g) return s.g;
                throw Error("unable to locate global object")
            }();
            let n = i.fetch;
            t.default = i.fetch.bind(i);
            let o = i.Headers,
                a = i.Request,
                l = i.Response
        },
        45456: function(e, t, s) {
            "use strict";
            s.d(t, {
                eI: function() {
                    return createClient
                }
            });
            let resolveFetch = e => {
                let t;
                return t = e || ("undefined" == typeof fetch ? (...e) => Promise.resolve().then(s.bind(s, 89494)).then(({
                    default: t
                }) => t(...e)) : fetch), (...e) => t(...e)
            };
            let FunctionsError = class FunctionsError extends Error {
                constructor(e, t = "FunctionsError", s) {
                    super(e), this.name = t, this.context = s
                }
            };
            let FunctionsFetchError = class FunctionsFetchError extends FunctionsError {
                constructor(e) {
                    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e)
                }
            };
            let FunctionsRelayError = class FunctionsRelayError extends FunctionsError {
                constructor(e) {
                    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e)
                }
            };
            let FunctionsHttpError = class FunctionsHttpError extends FunctionsError {
                constructor(e) {
                    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e)
                }
            };
            (i = n || (n = {})).Any = "any", i.ApNortheast1 = "ap-northeast-1", i.ApNortheast2 = "ap-northeast-2", i.ApSouth1 = "ap-south-1", i.ApSoutheast1 = "ap-southeast-1", i.ApSoutheast2 = "ap-southeast-2", i.CaCentral1 = "ca-central-1", i.EuCentral1 = "eu-central-1", i.EuWest1 = "eu-west-1", i.EuWest2 = "eu-west-2", i.EuWest3 = "eu-west-3", i.SaEast1 = "sa-east-1", i.UsEast1 = "us-east-1", i.UsWest1 = "us-west-1", i.UsWest2 = "us-west-2";
            let FunctionsClient = class FunctionsClient {
                constructor(e, {
                    headers: t = {},
                    customFetch: s,
                    region: i = n.Any
                } = {}) {
                    this.url = e, this.headers = t, this.region = i, this.fetch = resolveFetch(s)
                }
                setAuth(e) {
                    this.headers.Authorization = `Bearer ${e}`
                }
                invoke(e, t = {}) {
                    var s, i, n, o, a;
                    return i = this, n = void 0, o = void 0, a = function*() {
                        try {
                            let i;
                            let {
                                headers: n,
                                method: o,
                                body: a
                            } = t, l = {}, {
                                region: c
                            } = t;
                            c || (c = this.region), c && "any" !== c && (l["x-region"] = c), a && (n && !Object.prototype.hasOwnProperty.call(n, "Content-Type") || !n) && ("undefined" != typeof Blob && a instanceof Blob || a instanceof ArrayBuffer ? (l["Content-Type"] = "application/octet-stream", i = a) : "string" == typeof a ? (l["Content-Type"] = "text/plain", i = a) : "undefined" != typeof FormData && a instanceof FormData ? i = a : (l["Content-Type"] = "application/json", i = JSON.stringify(a)));
                            let h = yield this.fetch(`${this.url}/${e}`, {
                                method: o || "POST",
                                headers: Object.assign(Object.assign(Object.assign({}, l), this.headers), n),
                                body: i
                            }).catch(e => {
                                throw new FunctionsFetchError(e)
                            }), u = h.headers.get("x-relay-error");
                            if (u && "true" === u) throw new FunctionsRelayError(h);
                            if (!h.ok) throw new FunctionsHttpError(h);
                            let d = (null !== (s = h.headers.get("Content-Type")) && void 0 !== s ? s : "text/plain").split(";")[0].trim();
                            return {
                                data: "application/json" === d ? yield h.json(): "application/octet-stream" === d ? yield h.blob(): "text/event-stream" === d ? h : "multipart/form-data" === d ? yield h.formData(): yield h.text(), error: null
                            }
                        } catch (e) {
                            return {
                                data: null,
                                error: e
                            }
                        }
                    }, new(o || (o = Promise))(function(e, t) {
                        function fulfilled(e) {
                            try {
                                step(a.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function rejected(e) {
                            try {
                                step(a.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function step(t) {
                            var s;
                            t.done ? e(t.value) : ((s = t.value) instanceof o ? s : new o(function(e) {
                                e(s)
                            })).then(fulfilled, rejected)
                        }
                        step((a = a.apply(i, n || [])).next())
                    })
                }
            };
            var i, n, o, a, l, c, h, u, d, f, p, g, y, m, v, _, b, w, k, A, S, x = s(89494);
            let PostgrestError = class PostgrestError extends Error {
                constructor(e) {
                    super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code
                }
            };
            let PostgrestBuilder = class PostgrestBuilder {
                constructor(e) {
                    this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = e.headers, this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = e.shouldThrowOnError, this.signal = e.signal, this.isMaybeSingle = e.isMaybeSingle, e.fetch ? this.fetch = e.fetch : "undefined" == typeof fetch ? this.fetch = x.default : this.fetch = fetch
                }
                throwOnError() {
                    return this.shouldThrowOnError = !0, this
                }
                then(e, t) {
                    void 0 === this.schema || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), "GET" !== this.method && "HEAD" !== this.method && (this.headers["Content-Type"] = "application/json");
                    let s = this.fetch,
                        i = s(this.url.toString(), {
                            method: this.method,
                            headers: this.headers,
                            body: JSON.stringify(this.body),
                            signal: this.signal
                        }).then(async e => {
                            var t, s, i;
                            let n = null,
                                o = null,
                                a = null,
                                l = e.status,
                                c = e.statusText;
                            if (e.ok) {
                                if ("HEAD" !== this.method) {
                                    let t = await e.text();
                                    "" === t || (o = "text/csv" === this.headers.Accept ? t : this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? t : JSON.parse(t))
                                }
                                let i = null === (t = this.headers.Prefer) || void 0 === t ? void 0 : t.match(/count=(exact|planned|estimated)/),
                                    h = null === (s = e.headers.get("content-range")) || void 0 === s ? void 0 : s.split("/");
                                i && h && h.length > 1 && (a = parseInt(h[1])), this.isMaybeSingle && "GET" === this.method && Array.isArray(o) && (o.length > 1 ? (n = {
                                    code: "PGRST116",
                                    details: `Results contain ${o.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                                    hint: null,
                                    message: "JSON object requested, multiple (or no) rows returned"
                                }, o = null, a = null, l = 406, c = "Not Acceptable") : o = 1 === o.length ? o[0] : null)
                            } else {
                                let t = await e.text();
                                try {
                                    n = JSON.parse(t), Array.isArray(n) && 404 === e.status && (o = [], n = null, l = 200, c = "OK")
                                } catch (s) {
                                    404 === e.status && "" === t ? (l = 204, c = "No Content") : n = {
                                        message: t
                                    }
                                }
                                if (n && this.isMaybeSingle && (null === (i = null == n ? void 0 : n.details) || void 0 === i ? void 0 : i.includes("0 rows")) && (n = null, l = 200, c = "OK"), n && this.shouldThrowOnError) throw new PostgrestError(n)
                            }
                            let h = {
                                error: n,
                                data: o,
                                count: a,
                                status: l,
                                statusText: c
                            };
                            return h
                        });
                    return this.shouldThrowOnError || (i = i.catch(e => {
                        var t, s, i;
                        return {
                            error: {
                                message: `${null!==(t=null==e?void 0:e.name)&&void 0!==t?t:"FetchError"}: ${null==e?void 0:e.message}`,
                                details: `${null!==(s=null==e?void 0:e.stack)&&void 0!==s?s:""}`,
                                hint: "",
                                code: `${null!==(i=null==e?void 0:e.code)&&void 0!==i?i:""}`
                            },
                            data: null,
                            count: null,
                            status: 0,
                            statusText: ""
                        }
                    })), i.then(e, t)
                }
            };
            let PostgrestTransformBuilder = class PostgrestTransformBuilder extends PostgrestBuilder {
                select(e) {
                    let t = !1,
                        s = (null != e ? e : "*").split("").map(e => /\s/.test(e) && !t ? "" : ('"' === e && (t = !t), e)).join("");
                    return this.url.searchParams.set("select", s), this.headers.Prefer && (this.headers.Prefer += ","), this.headers.Prefer += "return=representation", this
                }
                order(e, {
                    ascending: t = !0,
                    nullsFirst: s,
                    foreignTable: i,
                    referencedTable: n = i
                } = {}) {
                    let o = n ? `${n}.order` : "order",
                        a = this.url.searchParams.get(o);
                    return this.url.searchParams.set(o, `${a?`${a},`:""}${e}.${t?"asc":"desc"}${void 0===s?"":s?".nullsfirst":".nullslast"}`), this
                }
                limit(e, {
                    foreignTable: t,
                    referencedTable: s = t
                } = {}) {
                    let i = void 0 === s ? "limit" : `${s}.limit`;
                    return this.url.searchParams.set(i, `${e}`), this
                }
                range(e, t, {
                    foreignTable: s,
                    referencedTable: i = s
                } = {}) {
                    let n = void 0 === i ? "offset" : `${i}.offset`,
                        o = void 0 === i ? "limit" : `${i}.limit`;
                    return this.url.searchParams.set(n, `${e}`), this.url.searchParams.set(o, `${t-e+1}`), this
                }
                abortSignal(e) {
                    return this.signal = e, this
                }
                single() {
                    return this.headers.Accept = "application/vnd.pgrst.object+json", this
                }
                maybeSingle() {
                    return "GET" === this.method ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json", this.isMaybeSingle = !0, this
                }
                csv() {
                    return this.headers.Accept = "text/csv", this
                }
                geojson() {
                    return this.headers.Accept = "application/geo+json", this
                }
                explain({
                    analyze: e = !1,
                    verbose: t = !1,
                    settings: s = !1,
                    buffers: i = !1,
                    wal: n = !1,
                    format: o = "text"
                } = {}) {
                    var a;
                    let l = [e ? "analyze" : null, t ? "verbose" : null, s ? "settings" : null, i ? "buffers" : null, n ? "wal" : null].filter(Boolean).join("|"),
                        c = null !== (a = this.headers.Accept) && void 0 !== a ? a : "application/json";
                    return this.headers.Accept = `application/vnd.pgrst.plan+${o}; for="${c}"; options=${l};`, this
                }
                rollback() {
                    var e;
                    return (null !== (e = this.headers.Prefer) && void 0 !== e ? e : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this
                }
                returns() {
                    return this
                }
            };
            let PostgrestFilterBuilder = class PostgrestFilterBuilder extends PostgrestTransformBuilder {
                eq(e, t) {
                    return this.url.searchParams.append(e, `eq.${t}`), this
                }
                neq(e, t) {
                    return this.url.searchParams.append(e, `neq.${t}`), this
                }
                gt(e, t) {
                    return this.url.searchParams.append(e, `gt.${t}`), this
                }
                gte(e, t) {
                    return this.url.searchParams.append(e, `gte.${t}`), this
                }
                lt(e, t) {
                    return this.url.searchParams.append(e, `lt.${t}`), this
                }
                lte(e, t) {
                    return this.url.searchParams.append(e, `lte.${t}`), this
                }
                like(e, t) {
                    return this.url.searchParams.append(e, `like.${t}`), this
                }
                likeAllOf(e, t) {
                    return this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this
                }
                likeAnyOf(e, t) {
                    return this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this
                }
                ilike(e, t) {
                    return this.url.searchParams.append(e, `ilike.${t}`), this
                }
                ilikeAllOf(e, t) {
                    return this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this
                }
                ilikeAnyOf(e, t) {
                    return this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this
                }
                is(e, t) {
                    return this.url.searchParams.append(e, `is.${t}`), this
                } in (e, t) {
                    let s = Array.from(new Set(t)).map(e => "string" == typeof e && RegExp("[,()]").test(e) ? `"${e}"` : `${e}`).join(",");
                    return this.url.searchParams.append(e, `in.(${s})`), this
                }
                contains(e, t) {
                    return "string" == typeof t ? this.url.searchParams.append(e, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`), this
                }
                containedBy(e, t) {
                    return "string" == typeof t ? this.url.searchParams.append(e, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`), this
                }
                rangeGt(e, t) {
                    return this.url.searchParams.append(e, `sr.${t}`), this
                }
                rangeGte(e, t) {
                    return this.url.searchParams.append(e, `nxl.${t}`), this
                }
                rangeLt(e, t) {
                    return this.url.searchParams.append(e, `sl.${t}`), this
                }
                rangeLte(e, t) {
                    return this.url.searchParams.append(e, `nxr.${t}`), this
                }
                rangeAdjacent(e, t) {
                    return this.url.searchParams.append(e, `adj.${t}`), this
                }
                overlaps(e, t) {
                    return "string" == typeof t ? this.url.searchParams.append(e, `ov.${t}`) : this.url.searchParams.append(e, `ov.{${t.join(",")}}`), this
                }
                textSearch(e, t, {
                    config: s,
                    type: i
                } = {}) {
                    let n = "";
                    "plain" === i ? n = "pl" : "phrase" === i ? n = "ph" : "websearch" === i && (n = "w");
                    let o = void 0 === s ? "" : `(${s})`;
                    return this.url.searchParams.append(e, `${n}fts${o}.${t}`), this
                }
                match(e) {
                    return Object.entries(e).forEach(([e, t]) => {
                        this.url.searchParams.append(e, `eq.${t}`)
                    }), this
                }
                not(e, t, s) {
                    return this.url.searchParams.append(e, `not.${t}.${s}`), this
                }
                or(e, {
                    foreignTable: t,
                    referencedTable: s = t
                } = {}) {
                    let i = s ? `${s}.or` : "or";
                    return this.url.searchParams.append(i, `(${e})`), this
                }
                filter(e, t, s) {
                    return this.url.searchParams.append(e, `${t}.${s}`), this
                }
            };
            let PostgrestQueryBuilder = class PostgrestQueryBuilder {
                constructor(e, {
                    headers: t = {},
                    schema: s,
                    fetch: i
                }) {
                    this.url = e, this.headers = t, this.schema = s, this.fetch = i
                }
                select(e, {
                    head: t = !1,
                    count: s
                } = {}) {
                    let i = !1,
                        n = (null != e ? e : "*").split("").map(e => /\s/.test(e) && !i ? "" : ('"' === e && (i = !i), e)).join("");
                    return this.url.searchParams.set("select", n), s && (this.headers.Prefer = `count=${s}`), new PostgrestFilterBuilder({
                        method: t ? "HEAD" : "GET",
                        url: this.url,
                        headers: this.headers,
                        schema: this.schema,
                        fetch: this.fetch,
                        allowEmpty: !1
                    })
                }
                insert(e, {
                    count: t,
                    defaultToNull: s = !0
                } = {}) {
                    let i = [];
                    if (this.headers.Prefer && i.push(this.headers.Prefer), t && i.push(`count=${t}`), s || i.push("missing=default"), this.headers.Prefer = i.join(","), Array.isArray(e)) {
                        let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
                        if (t.length > 0) {
                            let e = [...new Set(t)].map(e => `"${e}"`);
                            this.url.searchParams.set("columns", e.join(","))
                        }
                    }
                    return new PostgrestFilterBuilder({
                        method: "POST",
                        url: this.url,
                        headers: this.headers,
                        schema: this.schema,
                        body: e,
                        fetch: this.fetch,
                        allowEmpty: !1
                    })
                }
                upsert(e, {
                    onConflict: t,
                    ignoreDuplicates: s = !1,
                    count: i,
                    defaultToNull: n = !0
                } = {}) {
                    let o = [`resolution=${s?"ignore":"merge"}-duplicates`];
                    if (void 0 !== t && this.url.searchParams.set("on_conflict", t), this.headers.Prefer && o.push(this.headers.Prefer), i && o.push(`count=${i}`), n || o.push("missing=default"), this.headers.Prefer = o.join(","), Array.isArray(e)) {
                        let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
                        if (t.length > 0) {
                            let e = [...new Set(t)].map(e => `"${e}"`);
                            this.url.searchParams.set("columns", e.join(","))
                        }
                    }
                    return new PostgrestFilterBuilder({
                        method: "POST",
                        url: this.url,
                        headers: this.headers,
                        schema: this.schema,
                        body: e,
                        fetch: this.fetch,
                        allowEmpty: !1
                    })
                }
                update(e, {
                    count: t
                } = {}) {
                    let s = [];
                    return this.headers.Prefer && s.push(this.headers.Prefer), t && s.push(`count=${t}`), this.headers.Prefer = s.join(","), new PostgrestFilterBuilder({
                        method: "PATCH",
                        url: this.url,
                        headers: this.headers,
                        schema: this.schema,
                        body: e,
                        fetch: this.fetch,
                        allowEmpty: !1
                    })
                }
                delete({
                    count: e
                } = {}) {
                    let t = [];
                    return e && t.push(`count=${e}`), this.headers.Prefer && t.unshift(this.headers.Prefer), this.headers.Prefer = t.join(","), new PostgrestFilterBuilder({
                        method: "DELETE",
                        url: this.url,
                        headers: this.headers,
                        schema: this.schema,
                        fetch: this.fetch,
                        allowEmpty: !1
                    })
                }
            };
            let E = {
                "X-Client-Info": "postgrest-js/1.15.2"
            };
            let PostgrestClient = class PostgrestClient {
                constructor(e, {
                    headers: t = {},
                    schema: s,
                    fetch: i
                } = {}) {
                    this.url = e, this.headers = Object.assign(Object.assign({}, E), t), this.schemaName = s, this.fetch = i
                }
                from(e) {
                    let t = new URL(`${this.url}/${e}`);
                    return new PostgrestQueryBuilder(t, {
                        headers: Object.assign({}, this.headers),
                        schema: this.schemaName,
                        fetch: this.fetch
                    })
                }
                schema(e) {
                    return new PostgrestClient(this.url, {
                        headers: this.headers,
                        schema: e,
                        fetch: this.fetch
                    })
                }
                rpc(e, t = {}, {
                    head: s = !1,
                    get: i = !1,
                    count: n
                } = {}) {
                    let o, a;
                    let l = new URL(`${this.url}/rpc/${e}`);
                    s || i ? (o = s ? "HEAD" : "GET", Object.entries(t).filter(([e, t]) => void 0 !== t).map(([e, t]) => [e, Array.isArray(t) ? `{${t.join(",")}}` : `${t}`]).forEach(([e, t]) => {
                        l.searchParams.append(e, t)
                    })) : (o = "POST", a = t);
                    let c = Object.assign({}, this.headers);
                    return n && (c.Prefer = `count=${n}`), new PostgrestFilterBuilder({
                        method: o,
                        url: l,
                        headers: c,
                        schema: this.schemaName,
                        body: a,
                        fetch: this.fetch,
                        allowEmpty: !1
                    })
                }
            };
            let T = {
                "X-Client-Info": "realtime-js/2.9.5"
            };
            (y = o || (o = {}))[y.connecting = 0] = "connecting", y[y.open = 1] = "open", y[y.closing = 2] = "closing", y[y.closed = 3] = "closed", (m = a || (a = {})).closed = "closed", m.errored = "errored", m.joined = "joined", m.joining = "joining", m.leaving = "leaving", (v = l || (l = {})).close = "phx_close", v.error = "phx_error", v.join = "phx_join", v.reply = "phx_reply", v.leave = "phx_leave", v.access_token = "access_token", (c || (c = {})).websocket = "websocket", (_ = h || (h = {})).Connecting = "connecting", _.Open = "open", _.Closing = "closing", _.Closed = "closed";
            let Timer = class Timer {
                constructor(e, t) {
                    this.callback = e, this.timerCalc = t, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = t
                }
                reset() {
                    this.tries = 0, clearTimeout(this.timer)
                }
                scheduleTimeout() {
                    clearTimeout(this.timer), this.timer = setTimeout(() => {
                        this.tries = this.tries + 1, this.callback()
                    }, this.timerCalc(this.tries + 1))
                }
            };
            let Serializer = class Serializer {
                constructor() {
                    this.HEADER_LENGTH = 1
                }
                decode(e, t) {
                    return e.constructor === ArrayBuffer ? t(this._binaryDecode(e)) : "string" == typeof e ? t(JSON.parse(e)) : t({})
                }
                _binaryDecode(e) {
                    let t = new DataView(e),
                        s = new TextDecoder;
                    return this._decodeBroadcast(e, t, s)
                }
                _decodeBroadcast(e, t, s) {
                    let i = t.getUint8(1),
                        n = t.getUint8(2),
                        o = this.HEADER_LENGTH + 2,
                        a = s.decode(e.slice(o, o + i));
                    o += i;
                    let l = s.decode(e.slice(o, o + n));
                    o += n;
                    let c = JSON.parse(s.decode(e.slice(o, e.byteLength)));
                    return {
                        ref: null,
                        topic: a,
                        event: l,
                        payload: c
                    }
                }
            };
            let Push = class Push {
                constructor(e, t, s = {}, i = 1e4) {
                    this.channel = e, this.event = t, this.payload = s, this.timeout = i, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null
                }
                resend(e) {
                    this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send()
                }
                send() {
                    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
                        topic: this.channel.topic,
                        event: this.event,
                        payload: this.payload,
                        ref: this.ref,
                        join_ref: this.channel._joinRef()
                    }))
                }
                updatePayload(e) {
                    this.payload = Object.assign(Object.assign({}, this.payload), e)
                }
                receive(e, t) {
                    var s;
                    return this._hasReceived(e) && t(null === (s = this.receivedResp) || void 0 === s ? void 0 : s.response), this.recHooks.push({
                        status: e,
                        callback: t
                    }), this
                }
                startTimeout() {
                    this.timeoutTimer || (this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref), this.channel._on(this.refEvent, {}, e => {
                        this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = e, this._matchReceive(e)
                    }), this.timeoutTimer = setTimeout(() => {
                        this.trigger("timeout", {})
                    }, this.timeout))
                }
                trigger(e, t) {
                    this.refEvent && this.channel._trigger(this.refEvent, {
                        status: e,
                        response: t
                    })
                }
                destroy() {
                    this._cancelRefEvent(), this._cancelTimeout()
                }
                _cancelRefEvent() {
                    this.refEvent && this.channel._off(this.refEvent, {})
                }
                _cancelTimeout() {
                    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0
                }
                _matchReceive({
                    status: e,
                    response: t
                }) {
                    this.recHooks.filter(t => t.status === e).forEach(e => e.callback(t))
                }
                _hasReceived(e) {
                    return this.receivedResp && this.receivedResp.status === e
                }
            };
            (b = u || (u = {})).SYNC = "sync", b.JOIN = "join", b.LEAVE = "leave";
            let RealtimePresence = class RealtimePresence {
                constructor(e, t) {
                    this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
                        onJoin: () => {},
                        onLeave: () => {},
                        onSync: () => {}
                    };
                    let s = (null == t ? void 0 : t.events) || {
                        state: "presence_state",
                        diff: "presence_diff"
                    };
                    this.channel._on(s.state, {}, e => {
                        let {
                            onJoin: t,
                            onLeave: s,
                            onSync: i
                        } = this.caller;
                        this.joinRef = this.channel._joinRef(), this.state = RealtimePresence.syncState(this.state, e, t, s), this.pendingDiffs.forEach(e => {
                            this.state = RealtimePresence.syncDiff(this.state, e, t, s)
                        }), this.pendingDiffs = [], i()
                    }), this.channel._on(s.diff, {}, e => {
                        let {
                            onJoin: t,
                            onLeave: s,
                            onSync: i
                        } = this.caller;
                        this.inPendingSyncState() ? this.pendingDiffs.push(e) : (this.state = RealtimePresence.syncDiff(this.state, e, t, s), i())
                    }), this.onJoin((e, t, s) => {
                        this.channel._trigger("presence", {
                            event: "join",
                            key: e,
                            currentPresences: t,
                            newPresences: s
                        })
                    }), this.onLeave((e, t, s) => {
                        this.channel._trigger("presence", {
                            event: "leave",
                            key: e,
                            currentPresences: t,
                            leftPresences: s
                        })
                    }), this.onSync(() => {
                        this.channel._trigger("presence", {
                            event: "sync"
                        })
                    })
                }
                static syncState(e, t, s, i) {
                    let n = this.cloneDeep(e),
                        o = this.transformState(t),
                        a = {},
                        l = {};
                    return this.map(n, (e, t) => {
                        o[e] || (l[e] = t)
                    }), this.map(o, (e, t) => {
                        let s = n[e];
                        if (s) {
                            let i = t.map(e => e.presence_ref),
                                n = s.map(e => e.presence_ref),
                                o = t.filter(e => 0 > n.indexOf(e.presence_ref)),
                                c = s.filter(e => 0 > i.indexOf(e.presence_ref));
                            o.length > 0 && (a[e] = o), c.length > 0 && (l[e] = c)
                        } else a[e] = t
                    }), this.syncDiff(n, {
                        joins: a,
                        leaves: l
                    }, s, i)
                }
                static syncDiff(e, t, s, i) {
                    let {
                        joins: n,
                        leaves: o
                    } = {
                        joins: this.transformState(t.joins),
                        leaves: this.transformState(t.leaves)
                    };
                    return s || (s = () => {}), i || (i = () => {}), this.map(n, (t, i) => {
                        var n;
                        let o = null !== (n = e[t]) && void 0 !== n ? n : [];
                        if (e[t] = this.cloneDeep(i), o.length > 0) {
                            let s = e[t].map(e => e.presence_ref),
                                i = o.filter(e => 0 > s.indexOf(e.presence_ref));
                            e[t].unshift(...i)
                        }
                        s(t, o, i)
                    }), this.map(o, (t, s) => {
                        let n = e[t];
                        if (!n) return;
                        let o = s.map(e => e.presence_ref);
                        n = n.filter(e => 0 > o.indexOf(e.presence_ref)), e[t] = n, i(t, n, s), 0 === n.length && delete e[t]
                    }), e
                }
                static map(e, t) {
                    return Object.getOwnPropertyNames(e).map(s => t(s, e[s]))
                }
                static transformState(e) {
                    return Object.getOwnPropertyNames(e = this.cloneDeep(e)).reduce((t, s) => {
                        let i = e[s];
                        return "metas" in i ? t[s] = i.metas.map(e => (e.presence_ref = e.phx_ref, delete e.phx_ref, delete e.phx_ref_prev, e)) : t[s] = i, t
                    }, {})
                }
                static cloneDeep(e) {
                    return JSON.parse(JSON.stringify(e))
                }
                onJoin(e) {
                    this.caller.onJoin = e
                }
                onLeave(e) {
                    this.caller.onLeave = e
                }
                onSync(e) {
                    this.caller.onSync = e
                }
                inPendingSyncState() {
                    return !this.joinRef || this.joinRef !== this.channel._joinRef()
                }
            };
            (w = d || (d = {})).abstime = "abstime", w.bool = "bool", w.date = "date", w.daterange = "daterange", w.float4 = "float4", w.float8 = "float8", w.int2 = "int2", w.int4 = "int4", w.int4range = "int4range", w.int8 = "int8", w.int8range = "int8range", w.json = "json", w.jsonb = "jsonb", w.money = "money", w.numeric = "numeric", w.oid = "oid", w.reltime = "reltime", w.text = "text", w.time = "time", w.timestamp = "timestamp", w.timestamptz = "timestamptz", w.timetz = "timetz", w.tsrange = "tsrange", w.tstzrange = "tstzrange";
            let convertChangeData = (e, t, s = {}) => {
                    var i;
                    let n = null !== (i = s.skipTypes) && void 0 !== i ? i : [];
                    return Object.keys(t).reduce((s, i) => (s[i] = convertColumn(i, e, t, n), s), {})
                },
                convertColumn = (e, t, s, i) => {
                    let n = t.find(t => t.name === e),
                        o = null == n ? void 0 : n.type,
                        a = s[e];
                    return o && !i.includes(o) ? convertCell(o, a) : noop(a)
                },
                convertCell = (e, t) => {
                    if ("_" === e.charAt(0)) {
                        let s = e.slice(1, e.length);
                        return toArray(t, s)
                    }
                    switch (e) {
                        case d.bool:
                            return toBoolean(t);
                        case d.float4:
                        case d.float8:
                        case d.int2:
                        case d.int4:
                        case d.int8:
                        case d.numeric:
                        case d.oid:
                            return toNumber(t);
                        case d.json:
                        case d.jsonb:
                            return toJson(t);
                        case d.timestamp:
                            return toTimestampString(t);
                        case d.abstime:
                        case d.date:
                        case d.daterange:
                        case d.int4range:
                        case d.int8range:
                        case d.money:
                        case d.reltime:
                        case d.text:
                        case d.time:
                        case d.timestamptz:
                        case d.timetz:
                        case d.tsrange:
                        case d.tstzrange:
                        default:
                            return noop(t)
                    }
                },
                noop = e => e,
                toBoolean = e => {
                    switch (e) {
                        case "t":
                            return !0;
                        case "f":
                            return !1;
                        default:
                            return e
                    }
                },
                toNumber = e => {
                    if ("string" == typeof e) {
                        let t = parseFloat(e);
                        if (!Number.isNaN(t)) return t
                    }
                    return e
                },
                toJson = e => {
                    if ("string" == typeof e) try {
                        return JSON.parse(e)
                    } catch (e) {
                        console.log(`JSON parse error: ${e}`)
                    }
                    return e
                },
                toArray = (e, t) => {
                    if ("string" != typeof e) return e;
                    let s = e.length - 1,
                        i = e[s],
                        n = e[0];
                    if ("{" === n && "}" === i) {
                        let i;
                        let n = e.slice(1, s);
                        try {
                            i = JSON.parse("[" + n + "]")
                        } catch (e) {
                            i = n ? n.split(",") : []
                        }
                        return i.map(e => convertCell(t, e))
                    }
                    return e
                },
                toTimestampString = e => "string" == typeof e ? e.replace(" ", "T") : e;
            (k = f || (f = {})).ALL = "*", k.INSERT = "INSERT", k.UPDATE = "UPDATE", k.DELETE = "DELETE", (A = p || (p = {})).BROADCAST = "broadcast", A.PRESENCE = "presence", A.POSTGRES_CHANGES = "postgres_changes", (S = g || (g = {})).SUBSCRIBED = "SUBSCRIBED", S.TIMED_OUT = "TIMED_OUT", S.CLOSED = "CLOSED", S.CHANNEL_ERROR = "CHANNEL_ERROR";
            let RealtimeChannel = class RealtimeChannel {
                constructor(e, t = {
                    config: {}
                }, s) {
                    this.topic = e, this.params = t, this.socket = s, this.bindings = {}, this.state = a.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
                        broadcast: {
                            ack: !1,
                            self: !1
                        },
                        presence: {
                            key: ""
                        }
                    }, t.config), this.timeout = this.socket.timeout, this.joinPush = new Push(this, l.join, this.params, this.timeout), this.rejoinTimer = new Timer(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
                        this.state = a.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach(e => e.send()), this.pushBuffer = []
                    }), this._onClose(() => {
                        this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = a.closed, this.socket._remove(this)
                    }), this._onError(e => {
                        this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, e), this.state = a.errored, this.rejoinTimer.scheduleTimeout())
                    }), this.joinPush.receive("timeout", () => {
                        this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = a.errored, this.rejoinTimer.scheduleTimeout())
                    }), this._on(l.reply, {}, (e, t) => {
                        this._trigger(this._replyEventName(t), e)
                    }), this.presence = new RealtimePresence(this), this.broadcastEndpointURL = this._broadcastEndpointURL()
                }
                subscribe(e, t = this.timeout) {
                    var s, i;
                    if (this.socket.isConnected() || this.socket.connect(), this.joinedOnce) throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance"; {
                        let {
                            config: {
                                broadcast: n,
                                presence: o
                            }
                        } = this.params;
                        this._onError(t => e && e("CHANNEL_ERROR", t)), this._onClose(() => e && e("CLOSED"));
                        let a = {},
                            l = {
                                broadcast: n,
                                presence: o,
                                postgres_changes: null !== (i = null === (s = this.bindings.postgres_changes) || void 0 === s ? void 0 : s.map(e => e.filter)) && void 0 !== i ? i : []
                            };
                        this.socket.accessToken && (a.access_token = this.socket.accessToken), this.updateJoinPayload(Object.assign({
                            config: l
                        }, a)), this.joinedOnce = !0, this._rejoin(t), this.joinPush.receive("ok", ({
                            postgres_changes: t
                        }) => {
                            var s;
                            if (this.socket.accessToken && this.socket.setAuth(this.socket.accessToken), void 0 === t) {
                                e && e("SUBSCRIBED");
                                return
                            } {
                                let i = this.bindings.postgres_changes,
                                    n = null !== (s = null == i ? void 0 : i.length) && void 0 !== s ? s : 0,
                                    o = [];
                                for (let s = 0; s < n; s++) {
                                    let n = i[s],
                                        {
                                            filter: {
                                                event: a,
                                                schema: l,
                                                table: c,
                                                filter: h
                                            }
                                        } = n,
                                        u = t && t[s];
                                    if (u && u.event === a && u.schema === l && u.table === c && u.filter === h) o.push(Object.assign(Object.assign({}, n), {
                                        id: u.id
                                    }));
                                    else {
                                        this.unsubscribe(), e && e("CHANNEL_ERROR", Error("mismatch between server and client bindings for postgres changes"));
                                        return
                                    }
                                }
                                this.bindings.postgres_changes = o, e && e("SUBSCRIBED");
                                return
                            }
                        }).receive("error", t => {
                            e && e("CHANNEL_ERROR", Error(JSON.stringify(Object.values(t).join(", ") || "error")))
                        }).receive("timeout", () => {
                            e && e("TIMED_OUT")
                        })
                    }
                    return this
                }
                presenceState() {
                    return this.presence.state
                }
                async track(e, t = {}) {
                    return await this.send({
                        type: "presence",
                        event: "track",
                        payload: e
                    }, t.timeout || this.timeout)
                }
                async untrack(e = {}) {
                    return await this.send({
                        type: "presence",
                        event: "untrack"
                    }, e)
                }
                on(e, t, s) {
                    return this._on(e, t, s)
                }
                async send(e, t = {}) {
                    var s, i;
                    if (this._canPush() || "broadcast" !== e.type) return new Promise(s => {
                        var i, n, o;
                        let a = this._push(e.type, e, t.timeout || this.timeout);
                        "broadcast" !== e.type || (null === (o = null === (n = null === (i = this.params) || void 0 === i ? void 0 : i.config) || void 0 === n ? void 0 : n.broadcast) || void 0 === o ? void 0 : o.ack) || s("ok"), a.receive("ok", () => s("ok")), a.receive("error", () => s("error")), a.receive("timeout", () => s("timed out"))
                    }); {
                        let {
                            event: n,
                            payload: o
                        } = e, a = {
                            method: "POST",
                            headers: {
                                apikey: null !== (s = this.socket.apiKey) && void 0 !== s ? s : "",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                messages: [{
                                    topic: this.subTopic,
                                    event: n,
                                    payload: o
                                }]
                            })
                        };
                        try {
                            let e = await this._fetchWithTimeout(this.broadcastEndpointURL, a, null !== (i = t.timeout) && void 0 !== i ? i : this.timeout);
                            if (e.ok) return "ok";
                            return "error"
                        } catch (e) {
                            if ("AbortError" === e.name) return "timed out";
                            return "error"
                        }
                    }
                }
                updateJoinPayload(e) {
                    this.joinPush.updatePayload(e)
                }
                unsubscribe(e = this.timeout) {
                    this.state = a.leaving;
                    let onClose = () => {
                        this.socket.log("channel", `leave ${this.topic}`), this._trigger(l.close, "leave", this._joinRef())
                    };
                    return this.rejoinTimer.reset(), this.joinPush.destroy(), new Promise(t => {
                        let s = new Push(this, l.leave, {}, e);
                        s.receive("ok", () => {
                            onClose(), t("ok")
                        }).receive("timeout", () => {
                            onClose(), t("timed out")
                        }).receive("error", () => {
                            t("error")
                        }), s.send(), this._canPush() || s.trigger("ok", {})
                    })
                }
                _broadcastEndpointURL() {
                    let e = this.socket.endPoint;
                    return (e = (e = e.replace(/^ws/i, "http")).replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")).replace(/\/+$/, "") + "/api/broadcast"
                }
                async _fetchWithTimeout(e, t, s) {
                    let i = new AbortController,
                        n = setTimeout(() => i.abort(), s),
                        o = await this.socket.fetch(e, Object.assign(Object.assign({}, t), {
                            signal: i.signal
                        }));
                    return clearTimeout(n), o
                }
                _push(e, t, s = this.timeout) {
                    if (!this.joinedOnce) throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
                    let i = new Push(this, e, t, s);
                    return this._canPush() ? i.send() : (i.startTimeout(), this.pushBuffer.push(i)), i
                }
                _onMessage(e, t, s) {
                    return t
                }
                _isMember(e) {
                    return this.topic === e
                }
                _joinRef() {
                    return this.joinPush.ref
                }
                _trigger(e, t, s) {
                    var i, n;
                    let o = e.toLocaleLowerCase(),
                        {
                            close: a,
                            error: c,
                            leave: h,
                            join: u
                        } = l;
                    if (s && [a, c, h, u].indexOf(o) >= 0 && s !== this._joinRef()) return;
                    let d = this._onMessage(o, t, s);
                    if (t && !d) throw "channel onMessage callbacks must return the payload, modified or unmodified";
                    ["insert", "update", "delete"].includes(o) ? null === (i = this.bindings.postgres_changes) || void 0 === i || i.filter(e => {
                        var t, s, i;
                        return (null === (t = e.filter) || void 0 === t ? void 0 : t.event) === "*" || (null === (i = null === (s = e.filter) || void 0 === s ? void 0 : s.event) || void 0 === i ? void 0 : i.toLocaleLowerCase()) === o
                    }).map(e => e.callback(d, s)) : null === (n = this.bindings[o]) || void 0 === n || n.filter(e => {
                        var s, i, n, a, l, c;
                        if (!["broadcast", "presence", "postgres_changes"].includes(o)) return e.type.toLocaleLowerCase() === o;
                        if ("id" in e) {
                            let o = e.id,
                                a = null === (s = e.filter) || void 0 === s ? void 0 : s.event;
                            return o && (null === (i = t.ids) || void 0 === i ? void 0 : i.includes(o)) && ("*" === a || (null == a ? void 0 : a.toLocaleLowerCase()) === (null === (n = t.data) || void 0 === n ? void 0 : n.type.toLocaleLowerCase()))
                        } {
                            let s = null === (l = null === (a = null == e ? void 0 : e.filter) || void 0 === a ? void 0 : a.event) || void 0 === l ? void 0 : l.toLocaleLowerCase();
                            return "*" === s || s === (null === (c = null == t ? void 0 : t.event) || void 0 === c ? void 0 : c.toLocaleLowerCase())
                        }
                    }).map(e => {
                        if ("object" == typeof d && "ids" in d) {
                            let e = d.data,
                                {
                                    schema: t,
                                    table: s,
                                    commit_timestamp: i,
                                    type: n,
                                    errors: o
                                } = e;
                            d = Object.assign(Object.assign({}, {
                                schema: t,
                                table: s,
                                commit_timestamp: i,
                                eventType: n,
                                new: {},
                                old: {},
                                errors: o
                            }), this._getPayloadRecords(e))
                        }
                        e.callback(d, s)
                    })
                }
                _isClosed() {
                    return this.state === a.closed
                }
                _isJoined() {
                    return this.state === a.joined
                }
                _isJoining() {
                    return this.state === a.joining
                }
                _isLeaving() {
                    return this.state === a.leaving
                }
                _replyEventName(e) {
                    return `chan_reply_${e}`
                }
                _on(e, t, s) {
                    let i = e.toLocaleLowerCase(),
                        n = {
                            type: i,
                            filter: t,
                            callback: s
                        };
                    return this.bindings[i] ? this.bindings[i].push(n) : this.bindings[i] = [n], this
                }
                _off(e, t) {
                    let s = e.toLocaleLowerCase();
                    return this.bindings[s] = this.bindings[s].filter(e => {
                        var i;
                        return !((null === (i = e.type) || void 0 === i ? void 0 : i.toLocaleLowerCase()) === s && RealtimeChannel.isEqual(e.filter, t))
                    }), this
                }
                static isEqual(e, t) {
                    if (Object.keys(e).length !== Object.keys(t).length) return !1;
                    for (let s in e)
                        if (e[s] !== t[s]) return !1;
                    return !0
                }
                _rejoinUntilConnected() {
                    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin()
                }
                _onClose(e) {
                    this._on(l.close, {}, e)
                }
                _onError(e) {
                    this._on(l.error, {}, t => e(t))
                }
                _canPush() {
                    return this.socket.isConnected() && this._isJoined()
                }
                _rejoin(e = this.timeout) {
                    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = a.joining, this.joinPush.resend(e))
                }
                _getPayloadRecords(e) {
                    let t = {
                        new: {},
                        old: {}
                    };
                    return ("INSERT" === e.type || "UPDATE" === e.type) && (t.new = convertChangeData(e.columns, e.record)), ("UPDATE" === e.type || "DELETE" === e.type) && (t.old = convertChangeData(e.columns, e.old_record)), t
                }
            };
            let RealtimeClient_noop = () => {},
                C = "undefined" != typeof WebSocket;
            let RealtimeClient = class RealtimeClient {
                constructor(e, t) {
                    var i;
                    this.accessToken = null, this.apiKey = null, this.channels = [], this.endPoint = "", this.headers = T, this.params = {}, this.timeout = 1e4, this.heartbeatIntervalMs = 3e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = RealtimeClient_noop, this.conn = null, this.sendBuffer = [], this.serializer = new Serializer, this.stateChangeCallbacks = {
                        open: [],
                        close: [],
                        error: [],
                        message: []
                    }, this._resolveFetch = e => {
                        let t;
                        return t = e || ("undefined" == typeof fetch ? (...e) => Promise.resolve().then(s.bind(s, 89494)).then(({
                            default: t
                        }) => t(...e)) : fetch), (...e) => t(...e)
                    }, this.endPoint = `${e}/${c.websocket}`, (null == t ? void 0 : t.transport) ? this.transport = t.transport : this.transport = null, (null == t ? void 0 : t.params) && (this.params = t.params), (null == t ? void 0 : t.headers) && (this.headers = Object.assign(Object.assign({}, this.headers), t.headers)), (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout), (null == t ? void 0 : t.logger) && (this.logger = t.logger), (null == t ? void 0 : t.heartbeatIntervalMs) && (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
                    let n = null === (i = null == t ? void 0 : t.params) || void 0 === i ? void 0 : i.apikey;
                    n && (this.accessToken = n, this.apiKey = n), this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs) ? t.reconnectAfterMs : e => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4, this.encode = (null == t ? void 0 : t.encode) ? t.encode : (e, t) => t(JSON.stringify(e)), this.decode = (null == t ? void 0 : t.decode) ? t.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new Timer(async () => {
                        this.disconnect(), this.connect()
                    }, this.reconnectAfterMs), this.fetch = this._resolveFetch(null == t ? void 0 : t.fetch)
                }
                connect() {
                    if (!this.conn) {
                        if (this.transport) {
                            this.conn = new this.transport(this._endPointURL(), void 0, {
                                headers: this.headers
                            });
                            return
                        }
                        if (C) {
                            this.conn = new WebSocket(this._endPointURL()), this.setupConnection();
                            return
                        }
                        this.conn = new WSWebSocketDummy(this._endPointURL(), void 0, {
                            close: () => {
                                this.conn = null
                            }
                        }), s.e(1656).then(s.t.bind(s, 91656, 23)).then(({
                            default: e
                        }) => {
                            this.conn = new e(this._endPointURL(), void 0, {
                                headers: this.headers
                            }), this.setupConnection()
                        })
                    }
                }
                disconnect(e, t) {
                    this.conn && (this.conn.onclose = function() {}, e ? this.conn.close(e, null != t ? t : "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset())
                }
                getChannels() {
                    return this.channels
                }
                async removeChannel(e) {
                    let t = await e.unsubscribe();
                    return 0 === this.channels.length && this.disconnect(), t
                }
                async removeAllChannels() {
                    let e = await Promise.all(this.channels.map(e => e.unsubscribe()));
                    return this.disconnect(), e
                }
                log(e, t, s) {
                    this.logger(e, t, s)
                }
                connectionState() {
                    switch (this.conn && this.conn.readyState) {
                        case o.connecting:
                            return h.Connecting;
                        case o.open:
                            return h.Open;
                        case o.closing:
                            return h.Closing;
                        default:
                            return h.Closed
                    }
                }
                isConnected() {
                    return this.connectionState() === h.Open
                }
                channel(e, t = {
                    config: {}
                }) {
                    let s = new RealtimeChannel(`realtime:${e}`, t, this);
                    return this.channels.push(s), s
                }
                push(e) {
                    let {
                        topic: t,
                        event: s,
                        payload: i,
                        ref: n
                    } = e, callback = () => {
                        this.encode(e, e => {
                            var t;
                            null === (t = this.conn) || void 0 === t || t.send(e)
                        })
                    };
                    this.log("push", `${t} ${s} (${n})`, i), this.isConnected() ? callback() : this.sendBuffer.push(callback)
                }
                setAuth(e) {
                    this.accessToken = e, this.channels.forEach(t => {
                        e && t.updateJoinPayload({
                            access_token: e
                        }), t.joinedOnce && t._isJoined() && t._push(l.access_token, {
                            access_token: e
                        })
                    })
                }
                _makeRef() {
                    let e = this.ref + 1;
                    return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString()
                }
                _leaveOpenTopic(e) {
                    let t = this.channels.find(t => t.topic === e && (t._isJoined() || t._isJoining()));
                    t && (this.log("transport", `leaving duplicate topic "${e}"`), t.unsubscribe())
                }
                _remove(e) {
                    this.channels = this.channels.filter(t => t._joinRef() !== e._joinRef())
                }
                setupConnection() {
                    this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = e => this._onConnError(e), this.conn.onmessage = e => this._onConnMessage(e), this.conn.onclose = e => this._onConnClose(e))
                }
                _endPointURL() {
                    return this._appendParams(this.endPoint, Object.assign({}, this.params, {
                        vsn: "1.0.0"
                    }))
                }
                _onConnMessage(e) {
                    this.decode(e.data, e => {
                        let {
                            topic: t,
                            event: s,
                            payload: i,
                            ref: n
                        } = e;
                        (n && n === this.pendingHeartbeatRef || s === (null == i ? void 0 : i.type)) && (this.pendingHeartbeatRef = null), this.log("receive", `${i.status||""} ${t} ${s} ${n&&"("+n+")"||""}`, i), this.channels.filter(e => e._isMember(t)).forEach(e => e._trigger(s, i, n)), this.stateChangeCallbacks.message.forEach(t => t(e))
                    })
                }
                _onConnOpen() {
                    this.log("transport", `connected to ${this._endPointURL()}`), this._flushSendBuffer(), this.reconnectTimer.reset(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs), this.stateChangeCallbacks.open.forEach(e => e())
                }
                _onConnClose(e) {
                    this.log("transport", "close", e), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(t => t(e))
                }
                _onConnError(e) {
                    this.log("transport", e.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach(t => t(e))
                }
                _triggerChanError() {
                    this.channels.forEach(e => e._trigger(l.error))
                }
                _appendParams(e, t) {
                    if (0 === Object.keys(t).length) return e;
                    let s = e.match(/\?/) ? "&" : "?",
                        i = new URLSearchParams(t);
                    return `${e}${s}${i}`
                }
                _flushSendBuffer() {
                    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(e => e()), this.sendBuffer = [])
                }
                _sendHeartbeat() {
                    var e;
                    if (this.isConnected()) {
                        if (this.pendingHeartbeatRef) {
                            this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), null === (e = this.conn) || void 0 === e || e.close(1e3, "hearbeat timeout");
                            return
                        }
                        this.pendingHeartbeatRef = this._makeRef(), this.push({
                            topic: "phoenix",
                            event: "heartbeat",
                            payload: {},
                            ref: this.pendingHeartbeatRef
                        }), this.setAuth(this.accessToken)
                    }
                }
            };
            let WSWebSocketDummy = class WSWebSocketDummy {
                constructor(e, t, s) {
                    this.binaryType = "arraybuffer", this.onclose = () => {}, this.onerror = () => {}, this.onmessage = () => {}, this.onopen = () => {}, this.readyState = o.connecting, this.send = () => {}, this.url = null, this.url = e, this.close = s.close
                }
            };
            let StorageError = class StorageError extends Error {
                constructor(e) {
                    super(e), this.__isStorageError = !0, this.name = "StorageError"
                }
            };

            function isStorageError(e) {
                return "object" == typeof e && null !== e && "__isStorageError" in e
            }
            let StorageApiError = class StorageApiError extends StorageError {
                constructor(e, t) {
                    super(e), this.name = "StorageApiError", this.status = t
                }
                toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        status: this.status
                    }
                }
            };
            let StorageUnknownError = class StorageUnknownError extends StorageError {
                constructor(e, t) {
                    super(e), this.name = "StorageUnknownError", this.originalError = t
                }
            };
            let helpers_resolveFetch = e => {
                    let t;
                    return t = e || ("undefined" == typeof fetch ? (...e) => Promise.resolve().then(s.bind(s, 89494)).then(({
                        default: t
                    }) => t(...e)) : fetch), (...e) => t(...e)
                },
                resolveResponse = () => {
                    var e, t, i, n;
                    return e = void 0, t = void 0, i = void 0, n = function*() {
                        return "undefined" == typeof Response ? (yield Promise.resolve().then(s.bind(s, 89494))).Response : Response
                    }, new(i || (i = Promise))(function(s, o) {
                        function fulfilled(e) {
                            try {
                                step(n.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function rejected(e) {
                            try {
                                step(n.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function step(e) {
                            var t;
                            e.done ? s(e.value) : ((t = e.value) instanceof i ? t : new i(function(e) {
                                e(t)
                            })).then(fulfilled, rejected)
                        }
                        step((n = n.apply(e, t || [])).next())
                    })
                };
            var fetch_awaiter = function(e, t, s, i) {
                return new(s || (s = Promise))(function(n, o) {
                    function fulfilled(e) {
                        try {
                            step(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function rejected(e) {
                        try {
                            step(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function step(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                            e(t)
                        })).then(fulfilled, rejected)
                    }
                    step((i = i.apply(e, t || [])).next())
                })
            };
            let _getErrorMessage = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
                handleError = (e, t) => fetch_awaiter(void 0, void 0, void 0, function*() {
                    let s = yield resolveResponse();
                    e instanceof s ? e.json().then(s => {
                        t(new StorageApiError(_getErrorMessage(s), e.status || 500))
                    }).catch(e => {
                        t(new StorageUnknownError(_getErrorMessage(e), e))
                    }) : t(new StorageUnknownError(_getErrorMessage(e), e))
                }),
                _getRequestParams = (e, t, s, i) => {
                    let n = {
                        method: e,
                        headers: (null == t ? void 0 : t.headers) || {}
                    };
                    return "GET" === e ? n : (n.headers = Object.assign({
                        "Content-Type": "application/json"
                    }, null == t ? void 0 : t.headers), n.body = JSON.stringify(i), Object.assign(Object.assign({}, n), s))
                };

            function _handleRequest(e, t, s, i, n, o) {
                return fetch_awaiter(this, void 0, void 0, function*() {
                    return new Promise((a, l) => {
                        e(s, _getRequestParams(t, i, n, o)).then(e => {
                            if (!e.ok) throw e;
                            return (null == i ? void 0 : i.noResolveJson) ? e : e.json()
                        }).then(e => a(e)).catch(e => handleError(e, l))
                    })
                })
            }

            function get(e, t, s, i) {
                return fetch_awaiter(this, void 0, void 0, function*() {
                    return _handleRequest(e, "GET", t, s, i)
                })
            }

            function post(e, t, s, i, n) {
                return fetch_awaiter(this, void 0, void 0, function*() {
                    return _handleRequest(e, "POST", t, i, n, s)
                })
            }

            function remove(e, t, s, i, n) {
                return fetch_awaiter(this, void 0, void 0, function*() {
                    return _handleRequest(e, "DELETE", t, i, n, s)
                })
            }
            var StorageFileApi_awaiter = function(e, t, s, i) {
                return new(s || (s = Promise))(function(n, o) {
                    function fulfilled(e) {
                        try {
                            step(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function rejected(e) {
                        try {
                            step(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function step(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                            e(t)
                        })).then(fulfilled, rejected)
                    }
                    step((i = i.apply(e, t || [])).next())
                })
            };
            let R = {
                    limit: 100,
                    offset: 0,
                    sortBy: {
                        column: "name",
                        order: "asc"
                    }
                },
                P = {
                    cacheControl: "3600",
                    contentType: "text/plain;charset=UTF-8",
                    upsert: !1
                };
            let StorageFileApi = class StorageFileApi {
                constructor(e, t = {}, s, i) {
                    this.url = e, this.headers = t, this.bucketId = s, this.fetch = helpers_resolveFetch(i)
                }
                uploadOrUpdate(e, t, s, i) {
                    return StorageFileApi_awaiter(this, void 0, void 0, function*() {
                        try {
                            let n;
                            let o = Object.assign(Object.assign({}, P), i),
                                a = Object.assign(Object.assign({}, this.headers), "POST" === e && {
                                    "x-upsert": String(o.upsert)
                                });
                            "undefined" != typeof Blob && s instanceof Blob ? ((n = new FormData).append("cacheControl", o.cacheControl), n.append("", s)) : "undefined" != typeof FormData && s instanceof FormData ? (n = s).append("cacheControl", o.cacheControl) : (n = s, a["cache-control"] = `max-age=${o.cacheControl}`, a["content-type"] = o.contentType);
                            let l = this._removeEmptyFolders(t),
                                c = this._getFinalPath(l),
                                h = yield this.fetch(`${this.url}/object/${c}`, Object.assign({
                                    method: e,
                                    body: n,
                                    headers: a
                                }, (null == o ? void 0 : o.duplex) ? {
                                    duplex: o.duplex
                                } : {})), u = yield h.json();
                            if (h.ok) return {
                                data: {
                                    path: l,
                                    id: u.Id,
                                    fullPath: u.Key
                                },
                                error: null
                            };
                            return {
                                data: null,
                                error: u
                            }
                        } catch (e) {
                            if (isStorageError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                upload(e, t, s) {
                    return StorageFileApi_awaiter(this, void 0, void 0, function*() {
                        return this.uploadOrUpdate("POST", e, t, s)
                    })
                }
                uploadToSignedUrl(e, t, s, i) {
                    return StorageFileApi_awaiter(this, void 0, void 0, function*() {
                        let n = this._removeEmptyFolders(e),
                            o = this._getFinalPath(n),
                            a = new URL(this.url + `/object/upload/sign/${o}`);
                        a.searchParams.set("token", t);
                        try {
                            let e;
                            let t = Object.assign({
                                    upsert: P.upsert
                                }, i),
                                o = Object.assign(Object.assign({}, this.headers), {
                                    "x-upsert": String(t.upsert)
                                });
                            "undefined" != typeof Blob && s instanceof Blob ? ((e = new FormData).append("cacheControl", t.cacheControl), e.append("", s)) : "undefined" != typeof FormData && s instanceof FormData ? (e = s).append("cacheControl", t.cacheControl) : (e = s, o["cache-control"] = `max-age=${t.cacheControl}`, o["content-type"] = t.contentType);
                            let l = yield this.fetch(a.toString(), {
                                method: "PUT",
                                body: e,
                                headers: o
                            }), c = yield l.json();
                            if (l.ok) return {
                                data: {
                                    path: n,
                                    fullPath: c.Key
                                },
                                error: null
                            };
                            return {
                                data: null,
                                error: c
                            }
                        } catch (e) {
                            if (isStorageError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                createSignedUploadUrl(e) {
                    return StorageFileApi_awaiter(this, void 0, void 0, function*() {
                        try {
                            let t = this._getFinalPath(e),
                                s = yield post(this.fetch, `${this.url}/object/upload/sign/${t}`, {}, {
                                    headers: this.headers
                                }), i = new URL(this.url + s.url), n = i.searchParams.get("token");
                            if (!n) throw new StorageError("No token returned by API");
                            return {
                                data: {
                                    signedUrl: i.toString(),
                                    path: e,
                                    token: n
                                },
                                error: null
                            }
                        } catch (e) {
                            if (isStorageError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                update(e, t, s) {
                    return StorageFileApi_awaiter(this, void 0, void 0, function*() {
                        return this.uploadOrUpdate("PUT", e, t, s)
                    })
                }
                move(e, t) {
                    return StorageFileApi_awaiter(this, void 0, void 0, function*() {
                        try {
                            let s = yield post(this.fetch, `${this.url}/object/move`, {
                                bucketId: this.bucketId,
                                sourceKey: e,
                                destinationKey: t
                            }, {
                                headers: this.headers
                            });
                            return {
                                data: s,
                                error: null
                            }
                        } catch (e) {
                            if (isStorageError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                copy(e, t) {
                    return StorageFileApi_awaiter(this, void 0, void 0, function*() {
                        try {
                            let s = yield post(this.fetch, `${this.url}/object/copy`, {
                                bucketId: this.bucketId,
                                sourceKey: e,
                                destinationKey: t
                            }, {
                                headers: this.headers
                            });
                            return {
                                data: {
                                    path: s.Key
                                },
                                error: null
                            }
                        } catch (e) {
                            if (isStorageError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                createSignedUrl(e, t, s) {
                    return StorageFileApi_awaiter(this, void 0, void 0, function*() {
                        try {
                            let i = this._getFinalPath(e),
                                n = yield post(this.fetch, `${this.url}/object/sign/${i}`, Object.assign({
                                    expiresIn: t
                                }, (null == s ? void 0 : s.transform) ? {
                                    transform: s.transform
                                } : {}), {
                                    headers: this.headers
                                }), o = (null == s ? void 0 : s.download) ? `&download=${!0===s.download?"":s.download}` : "", a = encodeURI(`${this.url}${n.signedURL}${o}`);
                            return {
                                data: n = {
                                    signedUrl: a
                                },
                                error: null
                            }
                        } catch (e) {
                            if (isStorageError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                createSignedUrls(e, t, s) {
                    return StorageFileApi_awaiter(this, void 0, void 0, function*() {
                        try {
                            let i = yield post(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                                expiresIn: t,
                                paths: e
                            }, {
                                headers: this.headers
                            }), n = (null == s ? void 0 : s.download) ? `&download=${!0===s.download?"":s.download}` : "";
                            return {
                                data: i.map(e => Object.assign(Object.assign({}, e), {
                                    signedUrl: e.signedURL ? encodeURI(`${this.url}${e.signedURL}${n}`) : null
                                })),
                                error: null
                            }
                        } catch (e) {
                            if (isStorageError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                download(e, t) {
                    return StorageFileApi_awaiter(this, void 0, void 0, function*() {
                        let s = void 0 !== (null == t ? void 0 : t.transform),
                            i = this.transformOptsToQueryString((null == t ? void 0 : t.transform) || {}),
                            n = i ? `?${i}` : "";
                        try {
                            let t = this._getFinalPath(e),
                                i = yield get(this.fetch, `${this.url}/${s?"render/image/authenticated":"object"}/${t}${n}`, {
                                    headers: this.headers,
                                    noResolveJson: !0
                                }), o = yield i.blob();
                            return {
                                data: o,
                                error: null
                            }
                        } catch (e) {
                            if (isStorageError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                getPublicUrl(e, t) {
                    let s = this._getFinalPath(e),
                        i = [],
                        n = (null == t ? void 0 : t.download) ? `download=${!0===t.download?"":t.download}` : "";
                    "" !== n && i.push(n);
                    let o = void 0 !== (null == t ? void 0 : t.transform),
                        a = this.transformOptsToQueryString((null == t ? void 0 : t.transform) || {});
                    "" !== a && i.push(a);
                    let l = i.join("&");
                    return "" !== l && (l = `?${l}`), {
                        data: {
                            publicUrl: encodeURI(`${this.url}/${o?"render/image":"object"}/public/${s}${l}`)
                        }
                    }
                }
                remove(e) {
                    return StorageFileApi_awaiter(this, void 0, void 0, function*() {
                        try {
                            let t = yield remove(this.fetch, `${this.url}/object/${this.bucketId}`, {
                                prefixes: e
                            }, {
                                headers: this.headers
                            });
                            return {
                                data: t,
                                error: null
                            }
                        } catch (e) {
                            if (isStorageError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                list(e, t, s) {
                    return StorageFileApi_awaiter(this, void 0, void 0, function*() {
                        try {
                            let i = Object.assign(Object.assign(Object.assign({}, R), t), {
                                    prefix: e || ""
                                }),
                                n = yield post(this.fetch, `${this.url}/object/list/${this.bucketId}`, i, {
                                    headers: this.headers
                                }, s);
                            return {
                                data: n,
                                error: null
                            }
                        } catch (e) {
                            if (isStorageError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                _getFinalPath(e) {
                    return `${this.bucketId}/${e}`
                }
                _removeEmptyFolders(e) {
                    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
                }
                transformOptsToQueryString(e) {
                    let t = [];
                    return e.width && t.push(`width=${e.width}`), e.height && t.push(`height=${e.height}`), e.resize && t.push(`resize=${e.resize}`), e.format && t.push(`format=${e.format}`), e.quality && t.push(`quality=${e.quality}`), t.join("&")
                }
            };
            let j = {
                "X-Client-Info": "storage-js/2.5.5"
            };
            var StorageBucketApi_awaiter = function(e, t, s, i) {
                return new(s || (s = Promise))(function(n, o) {
                    function fulfilled(e) {
                        try {
                            step(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function rejected(e) {
                        try {
                            step(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function step(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                            e(t)
                        })).then(fulfilled, rejected)
                    }
                    step((i = i.apply(e, t || [])).next())
                })
            };
            let StorageBucketApi = class StorageBucketApi {
                constructor(e, t = {}, s) {
                    this.url = e, this.headers = Object.assign(Object.assign({}, j), t), this.fetch = helpers_resolveFetch(s)
                }
                listBuckets() {
                    return StorageBucketApi_awaiter(this, void 0, void 0, function*() {
                        try {
                            let e = yield get(this.fetch, `${this.url}/bucket`, {
                                headers: this.headers
                            });
                            return {
                                data: e,
                                error: null
                            }
                        } catch (e) {
                            if (isStorageError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                getBucket(e) {
                    return StorageBucketApi_awaiter(this, void 0, void 0, function*() {
                        try {
                            let t = yield get(this.fetch, `${this.url}/bucket/${e}`, {
                                headers: this.headers
                            });
                            return {
                                data: t,
                                error: null
                            }
                        } catch (e) {
                            if (isStorageError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                createBucket(e, t = {
                    public: !1
                }) {
                    return StorageBucketApi_awaiter(this, void 0, void 0, function*() {
                        try {
                            let s = yield post(this.fetch, `${this.url}/bucket`, {
                                id: e,
                                name: e,
                                public: t.public,
                                file_size_limit: t.fileSizeLimit,
                                allowed_mime_types: t.allowedMimeTypes
                            }, {
                                headers: this.headers
                            });
                            return {
                                data: s,
                                error: null
                            }
                        } catch (e) {
                            if (isStorageError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                updateBucket(e, t) {
                    return StorageBucketApi_awaiter(this, void 0, void 0, function*() {
                        try {
                            let s = yield function(e, t, s, i, n) {
                                return fetch_awaiter(this, void 0, void 0, function*() {
                                    return _handleRequest(e, "PUT", t, i, void 0, s)
                                })
                            }(this.fetch, `${this.url}/bucket/${e}`, {
                                id: e,
                                name: e,
                                public: t.public,
                                file_size_limit: t.fileSizeLimit,
                                allowed_mime_types: t.allowedMimeTypes
                            }, {
                                headers: this.headers
                            });
                            return {
                                data: s,
                                error: null
                            }
                        } catch (e) {
                            if (isStorageError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                emptyBucket(e) {
                    return StorageBucketApi_awaiter(this, void 0, void 0, function*() {
                        try {
                            let t = yield post(this.fetch, `${this.url}/bucket/${e}/empty`, {}, {
                                headers: this.headers
                            });
                            return {
                                data: t,
                                error: null
                            }
                        } catch (e) {
                            if (isStorageError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                deleteBucket(e) {
                    return StorageBucketApi_awaiter(this, void 0, void 0, function*() {
                        try {
                            let t = yield remove(this.fetch, `${this.url}/bucket/${e}`, {}, {
                                headers: this.headers
                            });
                            return {
                                data: t,
                                error: null
                            }
                        } catch (e) {
                            if (isStorageError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
            };
            let StorageClient = class StorageClient extends StorageBucketApi {
                constructor(e, t = {}, s) {
                    super(e, t, s)
                }
                from(e) {
                    return new StorageFileApi(this.url, this.headers, e, this.fetch)
                }
            };
            let O = "";
            O = "undefined" != typeof Deno ? "deno" : "undefined" != typeof document ? "web" : "undefined" != typeof navigator && "ReactNative" === navigator.product ? "react-native" : "node";
            let B = {
                    "X-Client-Info": `supabase-js-${O}/2.43.4`
                },
                I = {
                    headers: B
                },
                $ = {
                    schema: "public"
                },
                L = {
                    autoRefreshToken: !0,
                    persistSession: !0,
                    detectSessionInUrl: !0,
                    flowType: "implicit"
                },
                W = {},
                fetch_resolveFetch = e => {
                    let t;
                    return t = e || ("undefined" == typeof fetch ? x.default : fetch), (...e) => t(...e)
                },
                resolveHeadersConstructor = () => "undefined" == typeof Headers ? x.Headers : Headers,
                fetchWithAuth = (e, t, s) => {
                    let i = fetch_resolveFetch(s),
                        n = resolveHeadersConstructor();
                    return (s, o) => {
                        var a, l, c, h;
                        return a = void 0, l = void 0, c = void 0, h = function*() {
                            var a;
                            let l = null !== (a = yield t()) && void 0 !== a ? a : e,
                                c = new n(null == o ? void 0 : o.headers);
                            return c.has("apikey") || c.set("apikey", e), c.has("Authorization") || c.set("Authorization", `Bearer ${l}`), i(s, Object.assign(Object.assign({}, o), {
                                headers: c
                            }))
                        }, new(c || (c = Promise))(function(e, t) {
                            function fulfilled(e) {
                                try {
                                    step(h.next(e))
                                } catch (e) {
                                    t(e)
                                }
                            }

                            function rejected(e) {
                                try {
                                    step(h.throw(e))
                                } catch (e) {
                                    t(e)
                                }
                            }

                            function step(t) {
                                var s;
                                t.done ? e(t.value) : ((s = t.value) instanceof c ? s : new c(function(e) {
                                    e(s)
                                })).then(fulfilled, rejected)
                            }
                            step((h = h.apply(a, l || [])).next())
                        })
                    }
                },
                z = "2.64.2",
                D = {
                    "X-Client-Info": `gotrue-js/${z}`
                },
                N = "X-Supabase-Api-Version",
                H = {
                    "2024-01-01": {
                        timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
                        name: "2024-01-01"
                    }
                },
                helpers_isBrowser = () => "undefined" != typeof document,
                U = {
                    tested: !1,
                    writable: !1
                },
                supportsLocalStorage = () => {
                    if (!helpers_isBrowser()) return !1;
                    try {
                        if ("object" != typeof globalThis.localStorage) return !1
                    } catch (e) {
                        return !1
                    }
                    if (U.tested) return U.writable;
                    let e = `lswt-${Math.random()}${Math.random()}`;
                    try {
                        globalThis.localStorage.setItem(e, e), globalThis.localStorage.removeItem(e), U.tested = !0, U.writable = !0
                    } catch (e) {
                        U.tested = !0, U.writable = !1
                    }
                    return U.writable
                };

            function parseParametersFromURL(e) {
                let t = {},
                    s = new URL(e);
                if (s.hash && "#" === s.hash[0]) try {
                    let e = new URLSearchParams(s.hash.substring(1));
                    e.forEach((e, s) => {
                        t[s] = e
                    })
                } catch (e) {}
                return s.searchParams.forEach((e, s) => {
                    t[s] = e
                }), t
            }
            let lib_helpers_resolveFetch = e => {
                    let t;
                    return t = e || ("undefined" == typeof fetch ? (...e) => Promise.resolve().then(s.bind(s, 89494)).then(({
                        default: t
                    }) => t(...e)) : fetch), (...e) => t(...e)
                },
                looksLikeFetchResponse = e => "object" == typeof e && null !== e && "status" in e && "ok" in e && "json" in e && "function" == typeof e.json,
                setItemAsync = async (e, t, s) => {
                    await e.setItem(t, JSON.stringify(s))
                },
                getItemAsync = async (e, t) => {
                    let s = await e.getItem(t);
                    if (!s) return null;
                    try {
                        return JSON.parse(s)
                    } catch (e) {
                        return s
                    }
                },
                removeItemAsync = async (e, t) => {
                    await e.removeItem(t)
                };
            let Deferred = class Deferred {
                constructor() {
                    this.promise = new Deferred.promiseConstructor((e, t) => {
                        this.resolve = e, this.reject = t
                    })
                }
            };

            function decodeJWTPayload(e) {
                let t = e.split(".");
                if (3 !== t.length) throw Error("JWT is not valid: not a JWT structure");
                if (!/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(t[1])) throw Error("JWT is not valid: payload is not in base64url format");
                let s = t[1];
                return JSON.parse(function(e) {
                    let t, s, i, n, o, a, l;
                    let c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        h = "",
                        u = 0;
                    for (e = e.replace("-", "+").replace("_", "/"); u < e.length;) n = c.indexOf(e.charAt(u++)), o = c.indexOf(e.charAt(u++)), a = c.indexOf(e.charAt(u++)), l = c.indexOf(e.charAt(u++)), t = n << 2 | o >> 4, s = (15 & o) << 4 | a >> 2, i = (3 & a) << 6 | l, h += String.fromCharCode(t), 64 != a && 0 != s && (h += String.fromCharCode(s)), 64 != l && 0 != i && (h += String.fromCharCode(i));
                    return h
                }(s))
            }
            async function sleep(e) {
                return await new Promise(t => {
                    setTimeout(() => t(null), e)
                })
            }

            function dec2hex(e) {
                return ("0" + e.toString(16)).substr(-2)
            }
            async function sha256(e) {
                let t = new TextEncoder,
                    s = t.encode(e),
                    i = await crypto.subtle.digest("SHA-256", s),
                    n = new Uint8Array(i);
                return Array.from(n).map(e => String.fromCharCode(e)).join("")
            }
            async function generatePKCEChallenge(e) {
                let t = "undefined" != typeof crypto && void 0 !== crypto.subtle && "undefined" != typeof TextEncoder;
                if (!t) return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), e;
                let s = await sha256(e);
                return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
            }
            async function getCodeChallengeAndMethod(e, t, s = !1) {
                let i = function() {
                        let e = new Uint32Array(56);
                        if ("undefined" == typeof crypto) {
                            let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
                                t = e.length,
                                s = "";
                            for (let i = 0; i < 56; i++) s += e.charAt(Math.floor(Math.random() * t));
                            return s
                        }
                        return crypto.getRandomValues(e), Array.from(e, dec2hex).join("")
                    }(),
                    n = i;
                s && (n += "/PASSWORD_RECOVERY"), await setItemAsync(e, `${t}-code-verifier`, n);
                let o = await generatePKCEChallenge(i),
                    a = i === o ? "plain" : "s256";
                return [o, a]
            }
            Deferred.promiseConstructor = Promise;
            let M = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
            let AuthError = class AuthError extends Error {
                constructor(e, t, s) {
                    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = t, this.code = s
                }
            };

            function isAuthError(e) {
                return "object" == typeof e && null !== e && "__isAuthError" in e
            }
            let AuthApiError = class AuthApiError extends AuthError {
                constructor(e, t, s) {
                    super(e, t, s), this.name = "AuthApiError", this.status = t, this.code = s
                }
            };
            let AuthUnknownError = class AuthUnknownError extends AuthError {
                constructor(e, t) {
                    super(e), this.name = "AuthUnknownError", this.originalError = t
                }
            };
            let CustomAuthError = class CustomAuthError extends AuthError {
                constructor(e, t, s, i) {
                    super(e, s, i), this.name = t, this.status = s
                }
            };
            let AuthSessionMissingError = class AuthSessionMissingError extends CustomAuthError {
                constructor() {
                    super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
                }
            };
            let AuthInvalidTokenResponseError = class AuthInvalidTokenResponseError extends CustomAuthError {
                constructor() {
                    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
                }
            };
            let AuthInvalidCredentialsError = class AuthInvalidCredentialsError extends CustomAuthError {
                constructor(e) {
                    super(e, "AuthInvalidCredentialsError", 400, void 0)
                }
            };
            let AuthImplicitGrantRedirectError = class AuthImplicitGrantRedirectError extends CustomAuthError {
                constructor(e, t = null) {
                    super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = t
                }
                toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        status: this.status,
                        details: this.details
                    }
                }
            };
            let AuthPKCEGrantCodeExchangeError = class AuthPKCEGrantCodeExchangeError extends CustomAuthError {
                constructor(e, t = null) {
                    super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = t
                }
                toJSON() {
                    return {
                        name: this.name,
                        message: this.message,
                        status: this.status,
                        details: this.details
                    }
                }
            };
            let AuthRetryableFetchError = class AuthRetryableFetchError extends CustomAuthError {
                constructor(e, t) {
                    super(e, "AuthRetryableFetchError", t, void 0)
                }
            };

            function isAuthRetryableFetchError(e) {
                return isAuthError(e) && "AuthRetryableFetchError" === e.name
            }
            let AuthWeakPasswordError = class AuthWeakPasswordError extends CustomAuthError {
                constructor(e, t, s) {
                    super(e, "AuthWeakPasswordError", t, "weak_password"), this.reasons = s
                }
            };
            var __rest = function(e, t) {
                var s = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (s[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (s[i[n]] = e[i[n]]);
                return s
            };
            let fetch_getErrorMessage = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
                G = [502, 503, 504];
            async function fetch_handleError(e) {
                var t;
                let s, i;
                if (!looksLikeFetchResponse(e)) throw new AuthRetryableFetchError(fetch_getErrorMessage(e), 0);
                if (G.includes(e.status)) throw new AuthRetryableFetchError(fetch_getErrorMessage(e), e.status);
                try {
                    s = await e.json()
                } catch (e) {
                    throw new AuthUnknownError(fetch_getErrorMessage(e), e)
                }
                let n = function(e) {
                    let t = e.headers.get(N);
                    if (!t || !t.match(M)) return null;
                    try {
                        let e = new Date(`${t}T00:00:00.0Z`);
                        return e
                    } catch (e) {
                        return null
                    }
                }(e);
                if (n && n.getTime() >= H["2024-01-01"].timestamp && "object" == typeof s && s && "string" == typeof s.code ? i = s.code : "object" == typeof s && s && "string" == typeof s.error_code && (i = s.error_code), i) {
                    if ("weak_password" === i) throw new AuthWeakPasswordError(fetch_getErrorMessage(s), e.status, (null === (t = s.weak_password) || void 0 === t ? void 0 : t.reasons) || [])
                } else if ("object" == typeof s && s && "object" == typeof s.weak_password && s.weak_password && Array.isArray(s.weak_password.reasons) && s.weak_password.reasons.length && s.weak_password.reasons.reduce((e, t) => e && "string" == typeof t, !0)) throw new AuthWeakPasswordError(fetch_getErrorMessage(s), e.status, s.weak_password.reasons);
                throw new AuthApiError(fetch_getErrorMessage(s), e.status || 500, i)
            }
            let fetch_getRequestParams = (e, t, s, i) => {
                let n = {
                    method: e,
                    headers: (null == t ? void 0 : t.headers) || {}
                };
                return "GET" === e ? n : (n.headers = Object.assign({
                    "Content-Type": "application/json;charset=UTF-8"
                }, null == t ? void 0 : t.headers), n.body = JSON.stringify(i), Object.assign(Object.assign({}, n), s))
            };
            async function _request(e, t, s, i) {
                var n;
                let o = Object.assign({}, null == i ? void 0 : i.headers);
                o[N] || (o[N] = H["2024-01-01"].name), (null == i ? void 0 : i.jwt) && (o.Authorization = `Bearer ${i.jwt}`);
                let a = null !== (n = null == i ? void 0 : i.query) && void 0 !== n ? n : {};
                (null == i ? void 0 : i.redirectTo) && (a.redirect_to = i.redirectTo);
                let l = Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : "",
                    c = await fetch_handleRequest(e, t, s + l, {
                        headers: o,
                        noResolveJson: null == i ? void 0 : i.noResolveJson
                    }, {}, null == i ? void 0 : i.body);
                return (null == i ? void 0 : i.xform) ? null == i ? void 0 : i.xform(c) : {
                    data: Object.assign({}, c),
                    error: null
                }
            }
            async function fetch_handleRequest(e, t, s, i, n, o) {
                let a;
                let l = fetch_getRequestParams(t, i, n, o);
                try {
                    a = await e(s, Object.assign({}, l))
                } catch (e) {
                    throw console.error(e), new AuthRetryableFetchError(fetch_getErrorMessage(e), 0)
                }
                if (a.ok || await fetch_handleError(a), null == i ? void 0 : i.noResolveJson) return a;
                try {
                    return await a.json()
                } catch (e) {
                    await fetch_handleError(e)
                }
            }

            function _sessionResponse(e) {
                var t;
                let s = null;
                e.access_token && e.refresh_token && e.expires_in && (s = Object.assign({}, e), e.expires_at || (s.expires_at = function(e) {
                    let t = Math.round(Date.now() / 1e3);
                    return t + e
                }(e.expires_in)));
                let i = null !== (t = e.user) && void 0 !== t ? t : e;
                return {
                    data: {
                        session: s,
                        user: i
                    },
                    error: null
                }
            }

            function _sessionResponsePassword(e) {
                let t = _sessionResponse(e);
                return !t.error && e.weak_password && "object" == typeof e.weak_password && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && "string" == typeof e.weak_password.message && e.weak_password.reasons.reduce((e, t) => e && "string" == typeof t, !0) && (t.data.weak_password = e.weak_password), t
            }

            function _userResponse(e) {
                var t;
                let s = null !== (t = e.user) && void 0 !== t ? t : e;
                return {
                    data: {
                        user: s
                    },
                    error: null
                }
            }

            function _ssoResponse(e) {
                return {
                    data: e,
                    error: null
                }
            }

            function _generateLinkResponse(e) {
                let {
                    action_link: t,
                    email_otp: s,
                    hashed_token: i,
                    redirect_to: n,
                    verification_type: o
                } = e, a = __rest(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), l = Object.assign({}, a);
                return {
                    data: {
                        properties: {
                            action_link: t,
                            email_otp: s,
                            hashed_token: i,
                            redirect_to: n,
                            verification_type: o
                        },
                        user: l
                    },
                    error: null
                }
            }

            function _noResolveJsonResponse(e) {
                return e
            }
            var GoTrueAdminApi_rest = function(e, t) {
                var s = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (s[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (s[i[n]] = e[i[n]]);
                return s
            };
            let GoTrueAdminApi_GoTrueAdminApi = class GoTrueAdminApi_GoTrueAdminApi {
                constructor({
                    url: e = "",
                    headers: t = {},
                    fetch: s
                }) {
                    this.url = e, this.headers = t, this.fetch = lib_helpers_resolveFetch(s), this.mfa = {
                        listFactors: this._listFactors.bind(this),
                        deleteFactor: this._deleteFactor.bind(this)
                    }
                }
                async signOut(e, t = "global") {
                    try {
                        return await _request(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
                            headers: this.headers,
                            jwt: e,
                            noResolveJson: !0
                        }), {
                            data: null,
                            error: null
                        }
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: null,
                            error: e
                        };
                        throw e
                    }
                }
                async inviteUserByEmail(e, t = {}) {
                    try {
                        return await _request(this.fetch, "POST", `${this.url}/invite`, {
                            body: {
                                email: e,
                                data: t.data
                            },
                            headers: this.headers,
                            redirectTo: t.redirectTo,
                            xform: _userResponse
                        })
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                user: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async generateLink(e) {
                    try {
                        let {
                            options: t
                        } = e, s = GoTrueAdminApi_rest(e, ["options"]), i = Object.assign(Object.assign({}, s), t);
                        return "newEmail" in s && (i.new_email = null == s ? void 0 : s.newEmail, delete i.newEmail), await _request(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                            body: i,
                            headers: this.headers,
                            xform: _generateLinkResponse,
                            redirectTo: null == t ? void 0 : t.redirectTo
                        })
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                properties: null,
                                user: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async createUser(e) {
                    try {
                        return await _request(this.fetch, "POST", `${this.url}/admin/users`, {
                            body: e,
                            headers: this.headers,
                            xform: _userResponse
                        })
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                user: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async listUsers(e) {
                    var t, s, i, n, o, a, l;
                    try {
                        let c = {
                                nextPage: null,
                                lastPage: 0,
                                total: 0
                            },
                            h = await _request(this.fetch, "GET", `${this.url}/admin/users`, {
                                headers: this.headers,
                                noResolveJson: !0,
                                query: {
                                    page: null !== (s = null === (t = null == e ? void 0 : e.page) || void 0 === t ? void 0 : t.toString()) && void 0 !== s ? s : "",
                                    per_page: null !== (n = null === (i = null == e ? void 0 : e.perPage) || void 0 === i ? void 0 : i.toString()) && void 0 !== n ? n : ""
                                },
                                xform: _noResolveJsonResponse
                            });
                        if (h.error) throw h.error;
                        let u = await h.json(),
                            d = null !== (o = h.headers.get("x-total-count")) && void 0 !== o ? o : 0,
                            f = null !== (l = null === (a = h.headers.get("link")) || void 0 === a ? void 0 : a.split(",")) && void 0 !== l ? l : [];
                        return f.length > 0 && (f.forEach(e => {
                            let t = parseInt(e.split(";")[0].split("=")[1].substring(0, 1)),
                                s = JSON.parse(e.split(";")[1].split("=")[1]);
                            c[`${s}Page`] = t
                        }), c.total = parseInt(d)), {
                            data: Object.assign(Object.assign({}, u), c),
                            error: null
                        }
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                users: []
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async getUserById(e) {
                    try {
                        return await _request(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
                            headers: this.headers,
                            xform: _userResponse
                        })
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                user: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async updateUserById(e, t) {
                    try {
                        return await _request(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
                            body: t,
                            headers: this.headers,
                            xform: _userResponse
                        })
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                user: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async deleteUser(e, t = !1) {
                    try {
                        return await _request(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
                            headers: this.headers,
                            body: {
                                should_soft_delete: t
                            },
                            xform: _userResponse
                        })
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                user: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async _listFactors(e) {
                    try {
                        let {
                            data: t,
                            error: s
                        } = await _request(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
                            headers: this.headers,
                            xform: e => ({
                                data: {
                                    factors: e
                                },
                                error: null
                            })
                        });
                        return {
                            data: t,
                            error: s
                        }
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: null,
                            error: e
                        };
                        throw e
                    }
                }
                async _deleteFactor(e) {
                    try {
                        let t = await _request(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
                            headers: this.headers
                        });
                        return {
                            data: t,
                            error: null
                        }
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: null,
                            error: e
                        };
                        throw e
                    }
                }
            };
            let X = {
                getItem: e => supportsLocalStorage() ? globalThis.localStorage.getItem(e) : null,
                setItem: (e, t) => {
                    supportsLocalStorage() && globalThis.localStorage.setItem(e, t)
                },
                removeItem: e => {
                    supportsLocalStorage() && globalThis.localStorage.removeItem(e)
                }
            };

            function memoryLocalStorageAdapter(e = {}) {
                return {
                    getItem: t => e[t] || null,
                    setItem: (t, s) => {
                        e[t] = s
                    },
                    removeItem: t => {
                        delete e[t]
                    }
                }
            }
            let K = {
                debug: !!(globalThis && supportsLocalStorage() && globalThis.localStorage && "true" === globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug"))
            };
            let LockAcquireTimeoutError = class LockAcquireTimeoutError extends Error {
                constructor(e) {
                    super(e), this.isAcquireTimeout = !0
                }
            };
            let NavigatorLockAcquireTimeoutError = class NavigatorLockAcquireTimeoutError extends LockAcquireTimeoutError {};
            async function navigatorLock(e, t, s) {
                K.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
                let i = new globalThis.AbortController;
                return t > 0 && setTimeout(() => {
                    i.abort(), K.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e)
                }, t), await globalThis.navigator.locks.request(e, 0 === t ? {
                    mode: "exclusive",
                    ifAvailable: !0
                } : {
                    mode: "exclusive",
                    signal: i.signal
                }, async i => {
                    if (i) {
                        K.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, i.name);
                        try {
                            return await s()
                        } finally {
                            K.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, i.name)
                        }
                    } else {
                        if (0 === t) throw K.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e), new NavigatorLockAcquireTimeoutError(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
                        if (K.debug) try {
                            let e = await globalThis.navigator.locks.query();
                            console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(e, null, "  "))
                        } catch (e) {
                            console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e)
                        }
                        return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await s()
                    }
                })
            }! function() {
                if ("object" != typeof globalThis) try {
                    Object.defineProperty(Object.prototype, "__magic__", {
                        get: function() {
                            return this
                        },
                        configurable: !0
                    }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__
                } catch (e) {
                    "undefined" != typeof self && (self.globalThis = self)
                }
            }();
            let V = {
                url: "http://localhost:9999",
                storageKey: "supabase.auth.token",
                autoRefreshToken: !0,
                persistSession: !0,
                detectSessionInUrl: !0,
                headers: D,
                flowType: "implicit",
                debug: !1,
                hasCustomAuthorizationHeader: !1
            };
            async function lockNoOp(e, t, s) {
                return await s()
            }
            let GoTrueClient = class GoTrueClient {
                constructor(e) {
                    var t, s;
                    this.memoryStorage = null, this.stateChangeEmitters = new Map, this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = GoTrueClient.nextInstanceID, GoTrueClient.nextInstanceID += 1, this.instanceID > 0 && helpers_isBrowser() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
                    let i = Object.assign(Object.assign({}, V), e);
                    if (this.logDebugMessages = !!i.debug, "function" == typeof i.debug && (this.logger = i.debug), this.persistSession = i.persistSession, this.storageKey = i.storageKey, this.autoRefreshToken = i.autoRefreshToken, this.admin = new GoTrueAdminApi_GoTrueAdminApi({
                            url: i.url,
                            headers: i.headers,
                            fetch: i.fetch
                        }), this.url = i.url, this.headers = i.headers, this.fetch = lib_helpers_resolveFetch(i.fetch), this.lock = i.lock || lockNoOp, this.detectSessionInUrl = i.detectSessionInUrl, this.flowType = i.flowType, this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader, i.lock ? this.lock = i.lock : helpers_isBrowser() && (null === (t = null == globalThis ? void 0 : globalThis.navigator) || void 0 === t ? void 0 : t.locks) ? this.lock = navigatorLock : this.lock = lockNoOp, this.mfa = {
                            verify: this._verify.bind(this),
                            enroll: this._enroll.bind(this),
                            unenroll: this._unenroll.bind(this),
                            challenge: this._challenge.bind(this),
                            listFactors: this._listFactors.bind(this),
                            challengeAndVerify: this._challengeAndVerify.bind(this),
                            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
                        }, this.persistSession ? i.storage ? this.storage = i.storage : supportsLocalStorage() ? this.storage = X : (this.memoryStorage = {}, this.storage = memoryLocalStorageAdapter(this.memoryStorage)) : (this.memoryStorage = {}, this.storage = memoryLocalStorageAdapter(this.memoryStorage)), helpers_isBrowser() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
                        try {
                            this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
                        } catch (e) {
                            console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e)
                        }
                        null === (s = this.broadcastChannel) || void 0 === s || s.addEventListener("message", async e => {
                            this._debug("received broadcast notification from other tab or client", e), await this._notifyAllSubscribers(e.data.event, e.data.session, !1)
                        })
                    }
                    this.initialize()
                }
                _debug(...e) {
                    return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${z}) ${new Date().toISOString()}`, ...e), this
                }
                async initialize() {
                    return this.initializePromise || (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))()), await this.initializePromise
                }
                async _initialize() {
                    try {
                        let e = !!helpers_isBrowser() && await this._isPKCEFlow();
                        if (this._debug("#_initialize()", "begin", "is PKCE flow", e), e || this.detectSessionInUrl && this._isImplicitGrantFlow()) {
                            let {
                                data: t,
                                error: s
                            } = await this._getSessionFromURL(e);
                            if (s) {
                                if (this._debug("#_initialize()", "error detecting session from URL", s), (null == s ? void 0 : s.message) === "Identity is already linked" || (null == s ? void 0 : s.message) === "Identity is already linked to another user") return {
                                    error: s
                                };
                                return await this._removeSession(), {
                                    error: s
                                }
                            }
                            let {
                                session: i,
                                redirectType: n
                            } = t;
                            return this._debug("#_initialize()", "detected session in URL", i, "redirect type", n), await this._saveSession(i), setTimeout(async () => {
                                "recovery" === n ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i) : await this._notifyAllSubscribers("SIGNED_IN", i)
                            }, 0), {
                                error: null
                            }
                        }
                        return await this._recoverAndRefresh(), {
                            error: null
                        }
                    } catch (e) {
                        if (isAuthError(e)) return {
                            error: e
                        };
                        return {
                            error: new AuthUnknownError("Unexpected error during initialization", e)
                        }
                    } finally {
                        await this._handleVisibilityChange(), this._debug("#_initialize()", "end")
                    }
                }
                async signInAnonymously(e) {
                    var t, s, i;
                    try {
                        await this._removeSession();
                        let n = await _request(this.fetch, "POST", `${this.url}/signup`, {
                                headers: this.headers,
                                body: {
                                    data: null !== (s = null === (t = null == e ? void 0 : e.options) || void 0 === t ? void 0 : t.data) && void 0 !== s ? s : {},
                                    gotrue_meta_security: {
                                        captcha_token: null === (i = null == e ? void 0 : e.options) || void 0 === i ? void 0 : i.captchaToken
                                    }
                                },
                                xform: _sessionResponse
                            }),
                            {
                                data: o,
                                error: a
                            } = n;
                        if (a || !o) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: a
                        };
                        let l = o.session,
                            c = o.user;
                        return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), {
                            data: {
                                user: c,
                                session: l
                            },
                            error: null
                        }
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async signUp(e) {
                    var t, s, i;
                    try {
                        let n;
                        if (await this._removeSession(), "email" in e) {
                            let {
                                email: s,
                                password: i,
                                options: o
                            } = e, a = null, l = null;
                            "pkce" === this.flowType && ([a, l] = await getCodeChallengeAndMethod(this.storage, this.storageKey)), n = await _request(this.fetch, "POST", `${this.url}/signup`, {
                                headers: this.headers,
                                redirectTo: null == o ? void 0 : o.emailRedirectTo,
                                body: {
                                    email: s,
                                    password: i,
                                    data: null !== (t = null == o ? void 0 : o.data) && void 0 !== t ? t : {},
                                    gotrue_meta_security: {
                                        captcha_token: null == o ? void 0 : o.captchaToken
                                    },
                                    code_challenge: a,
                                    code_challenge_method: l
                                },
                                xform: _sessionResponse
                            })
                        } else if ("phone" in e) {
                            let {
                                phone: t,
                                password: o,
                                options: a
                            } = e;
                            n = await _request(this.fetch, "POST", `${this.url}/signup`, {
                                headers: this.headers,
                                body: {
                                    phone: t,
                                    password: o,
                                    data: null !== (s = null == a ? void 0 : a.data) && void 0 !== s ? s : {},
                                    channel: null !== (i = null == a ? void 0 : a.channel) && void 0 !== i ? i : "sms",
                                    gotrue_meta_security: {
                                        captcha_token: null == a ? void 0 : a.captchaToken
                                    }
                                },
                                xform: _sessionResponse
                            })
                        } else throw new AuthInvalidCredentialsError("You must provide either an email or phone number and a password");
                        let {
                            data: o,
                            error: a
                        } = n;
                        if (a || !o) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: a
                        };
                        let l = o.session,
                            c = o.user;
                        return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), {
                            data: {
                                user: c,
                                session: l
                            },
                            error: null
                        }
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async signInWithPassword(e) {
                    try {
                        let t;
                        if (await this._removeSession(), "email" in e) {
                            let {
                                email: s,
                                password: i,
                                options: n
                            } = e;
                            t = await _request(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                                headers: this.headers,
                                body: {
                                    email: s,
                                    password: i,
                                    gotrue_meta_security: {
                                        captcha_token: null == n ? void 0 : n.captchaToken
                                    }
                                },
                                xform: _sessionResponsePassword
                            })
                        } else if ("phone" in e) {
                            let {
                                phone: s,
                                password: i,
                                options: n
                            } = e;
                            t = await _request(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                                headers: this.headers,
                                body: {
                                    phone: s,
                                    password: i,
                                    gotrue_meta_security: {
                                        captcha_token: null == n ? void 0 : n.captchaToken
                                    }
                                },
                                xform: _sessionResponsePassword
                            })
                        } else throw new AuthInvalidCredentialsError("You must provide either an email or phone number and a password");
                        let {
                            data: s,
                            error: i
                        } = t;
                        if (i) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: i
                        };
                        if (!s || !s.session || !s.user) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: new AuthInvalidTokenResponseError
                        };
                        return s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", s.session)), {
                            data: Object.assign({
                                user: s.user,
                                session: s.session
                            }, s.weak_password ? {
                                weakPassword: s.weak_password
                            } : null),
                            error: i
                        }
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async signInWithOAuth(e) {
                    var t, s, i, n;
                    return await this._removeSession(), await this._handleProviderSignIn(e.provider, {
                        redirectTo: null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo,
                        scopes: null === (s = e.options) || void 0 === s ? void 0 : s.scopes,
                        queryParams: null === (i = e.options) || void 0 === i ? void 0 : i.queryParams,
                        skipBrowserRedirect: null === (n = e.options) || void 0 === n ? void 0 : n.skipBrowserRedirect
                    })
                }
                async exchangeCodeForSession(e) {
                    return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
                }
                async _exchangeCodeForSession(e) {
                    let t = await getItemAsync(this.storage, `${this.storageKey}-code-verifier`),
                        [s, i] = (null != t ? t : "").split("/"),
                        {
                            data: n,
                            error: o
                        } = await _request(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                            headers: this.headers,
                            body: {
                                auth_code: e,
                                code_verifier: s
                            },
                            xform: _sessionResponse
                        });
                    return (await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`), o) ? {
                        data: {
                            user: null,
                            session: null,
                            redirectType: null
                        },
                        error: o
                    } : n && n.session && n.user ? (n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), {
                        data: Object.assign(Object.assign({}, n), {
                            redirectType: null != i ? i : null
                        }),
                        error: o
                    }) : {
                        data: {
                            user: null,
                            session: null,
                            redirectType: null
                        },
                        error: new AuthInvalidTokenResponseError
                    }
                }
                async signInWithIdToken(e) {
                    await this._removeSession();
                    try {
                        let {
                            options: t,
                            provider: s,
                            token: i,
                            access_token: n,
                            nonce: o
                        } = e, a = await _request(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                            headers: this.headers,
                            body: {
                                provider: s,
                                id_token: i,
                                access_token: n,
                                nonce: o,
                                gotrue_meta_security: {
                                    captcha_token: null == t ? void 0 : t.captchaToken
                                }
                            },
                            xform: _sessionResponse
                        }), {
                            data: l,
                            error: c
                        } = a;
                        if (c) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: c
                        };
                        if (!l || !l.session || !l.user) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: new AuthInvalidTokenResponseError
                        };
                        return l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), {
                            data: l,
                            error: c
                        }
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async signInWithOtp(e) {
                    var t, s, i, n, o;
                    try {
                        if (await this._removeSession(), "email" in e) {
                            let {
                                email: i,
                                options: n
                            } = e, o = null, a = null;
                            "pkce" === this.flowType && ([o, a] = await getCodeChallengeAndMethod(this.storage, this.storageKey));
                            let {
                                error: l
                            } = await _request(this.fetch, "POST", `${this.url}/otp`, {
                                headers: this.headers,
                                body: {
                                    email: i,
                                    data: null !== (t = null == n ? void 0 : n.data) && void 0 !== t ? t : {},
                                    create_user: null === (s = null == n ? void 0 : n.shouldCreateUser) || void 0 === s || s,
                                    gotrue_meta_security: {
                                        captcha_token: null == n ? void 0 : n.captchaToken
                                    },
                                    code_challenge: o,
                                    code_challenge_method: a
                                },
                                redirectTo: null == n ? void 0 : n.emailRedirectTo
                            });
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: l
                            }
                        }
                        if ("phone" in e) {
                            let {
                                phone: t,
                                options: s
                            } = e, {
                                data: a,
                                error: l
                            } = await _request(this.fetch, "POST", `${this.url}/otp`, {
                                headers: this.headers,
                                body: {
                                    phone: t,
                                    data: null !== (i = null == s ? void 0 : s.data) && void 0 !== i ? i : {},
                                    create_user: null === (n = null == s ? void 0 : s.shouldCreateUser) || void 0 === n || n,
                                    gotrue_meta_security: {
                                        captcha_token: null == s ? void 0 : s.captchaToken
                                    },
                                    channel: null !== (o = null == s ? void 0 : s.channel) && void 0 !== o ? o : "sms"
                                }
                            });
                            return {
                                data: {
                                    user: null,
                                    session: null,
                                    messageId: null == a ? void 0 : a.message_id
                                },
                                error: l
                            }
                        }
                        throw new AuthInvalidCredentialsError("You must provide either an email or phone number.")
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async verifyOtp(e) {
                    var t, s;
                    try {
                        let i, n;
                        "email_change" !== e.type && "phone_change" !== e.type && await this._removeSession(), "options" in e && (i = null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo, n = null === (s = e.options) || void 0 === s ? void 0 : s.captchaToken);
                        let {
                            data: o,
                            error: a
                        } = await _request(this.fetch, "POST", `${this.url}/verify`, {
                            headers: this.headers,
                            body: Object.assign(Object.assign({}, e), {
                                gotrue_meta_security: {
                                    captcha_token: n
                                }
                            }),
                            redirectTo: i,
                            xform: _sessionResponse
                        });
                        if (a) throw a;
                        if (!o) throw Error("An error occurred on token verification.");
                        let l = o.session,
                            c = o.user;
                        return (null == l ? void 0 : l.access_token) && (await this._saveSession(l), await this._notifyAllSubscribers("recovery" == e.type ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), {
                            data: {
                                user: c,
                                session: l
                            },
                            error: null
                        }
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async signInWithSSO(e) {
                    var t, s, i;
                    try {
                        await this._removeSession();
                        let n = null,
                            o = null;
                        return "pkce" === this.flowType && ([n, o] = await getCodeChallengeAndMethod(this.storage, this.storageKey)), await _request(this.fetch, "POST", `${this.url}/sso`, {
                            body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? {
                                provider_id: e.providerId
                            } : null), "domain" in e ? {
                                domain: e.domain
                            } : null), {
                                redirect_to: null !== (s = null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo) && void 0 !== s ? s : void 0
                            }), (null === (i = null == e ? void 0 : e.options) || void 0 === i ? void 0 : i.captchaToken) ? {
                                gotrue_meta_security: {
                                    captcha_token: e.options.captchaToken
                                }
                            } : null), {
                                skip_http_redirect: !0,
                                code_challenge: n,
                                code_challenge_method: o
                            }),
                            headers: this.headers,
                            xform: _ssoResponse
                        })
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: null,
                            error: e
                        };
                        throw e
                    }
                }
                async reauthenticate() {
                    return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate())
                }
                async _reauthenticate() {
                    try {
                        return await this._useSession(async e => {
                            let {
                                data: {
                                    session: t
                                },
                                error: s
                            } = e;
                            if (s) throw s;
                            if (!t) throw new AuthSessionMissingError;
                            let {
                                error: i
                            } = await _request(this.fetch, "GET", `${this.url}/reauthenticate`, {
                                headers: this.headers,
                                jwt: t.access_token
                            });
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: i
                            }
                        })
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async resend(e) {
                    try {
                        "email_change" != e.type && "phone_change" != e.type && await this._removeSession();
                        let t = `${this.url}/resend`;
                        if ("email" in e) {
                            let {
                                email: s,
                                type: i,
                                options: n
                            } = e, {
                                error: o
                            } = await _request(this.fetch, "POST", t, {
                                headers: this.headers,
                                body: {
                                    email: s,
                                    type: i,
                                    gotrue_meta_security: {
                                        captcha_token: null == n ? void 0 : n.captchaToken
                                    }
                                },
                                redirectTo: null == n ? void 0 : n.emailRedirectTo
                            });
                            return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: o
                            }
                        }
                        if ("phone" in e) {
                            let {
                                phone: s,
                                type: i,
                                options: n
                            } = e, {
                                data: o,
                                error: a
                            } = await _request(this.fetch, "POST", t, {
                                headers: this.headers,
                                body: {
                                    phone: s,
                                    type: i,
                                    gotrue_meta_security: {
                                        captcha_token: null == n ? void 0 : n.captchaToken
                                    }
                                }
                            });
                            return {
                                data: {
                                    user: null,
                                    session: null,
                                    messageId: null == o ? void 0 : o.message_id
                                },
                                error: a
                            }
                        }
                        throw new AuthInvalidCredentialsError("You must provide either an email or phone number and a type")
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async getSession() {
                    await this.initializePromise;
                    let e = await this._acquireLock(-1, async () => this._useSession(async e => e));
                    return e
                }
                async _acquireLock(e, t) {
                    this._debug("#_acquireLock", "begin", e);
                    try {
                        if (this.lockAcquired) {
                            let e = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(),
                                s = (async () => (await e, await t()))();
                            return this.pendingInLock.push((async () => {
                                try {
                                    await s
                                } catch (e) {}
                            })()), s
                        }
                        return await this.lock(`lock:${this.storageKey}`, e, async () => {
                            this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                            try {
                                this.lockAcquired = !0;
                                let e = t();
                                for (this.pendingInLock.push((async () => {
                                        try {
                                            await e
                                        } catch (e) {}
                                    })()), await e; this.pendingInLock.length;) {
                                    let e = [...this.pendingInLock];
                                    await Promise.all(e), this.pendingInLock.splice(0, e.length)
                                }
                                return await e
                            } finally {
                                this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1
                            }
                        })
                    } finally {
                        this._debug("#_acquireLock", "end")
                    }
                }
                async _useSession(e) {
                    this._debug("#_useSession", "begin");
                    try {
                        let t = await this.__loadSession();
                        return await e(t)
                    } finally {
                        this._debug("#_useSession", "end")
                    }
                }
                async __loadSession() {
                    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", Error().stack);
                    try {
                        let e = null,
                            t = await getItemAsync(this.storage, this.storageKey);
                        if (this._debug("#getSession()", "session from storage", t), null !== t && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e) return {
                            data: {
                                session: null
                            },
                            error: null
                        };
                        let s = !!e.expires_at && e.expires_at <= Date.now() / 1e3;
                        if (this._debug("#__loadSession()", `session has${s?"":" not"} expired`, "expires_at", e.expires_at), !s) {
                            if (this.storage.isServer) {
                                let t = this.suppressGetSessionWarning,
                                    s = new Proxy(e, {
                                        get: (e, s, i) => (t || "user" !== s || console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), Reflect.get(e, s, i))
                                    });
                                e = s
                            }
                            return {
                                data: {
                                    session: e
                                },
                                error: null
                            }
                        }
                        let {
                            session: i,
                            error: n
                        } = await this._callRefreshToken(e.refresh_token);
                        if (n) return {
                            data: {
                                session: null
                            },
                            error: n
                        };
                        return {
                            data: {
                                session: i
                            },
                            error: null
                        }
                    } finally {
                        this._debug("#__loadSession()", "end")
                    }
                }
                async getUser(e) {
                    if (e) return await this._getUser(e);
                    await this.initializePromise;
                    let t = await this._acquireLock(-1, async () => await this._getUser());
                    return t
                }
                async _getUser(e) {
                    try {
                        if (e) return await _request(this.fetch, "GET", `${this.url}/user`, {
                            headers: this.headers,
                            jwt: e,
                            xform: _userResponse
                        });
                        return await this._useSession(async e => {
                            var t, s, i;
                            let {
                                data: n,
                                error: o
                            } = e;
                            if (o) throw o;
                            return (null === (t = n.session) || void 0 === t ? void 0 : t.access_token) || this.hasCustomAuthorizationHeader ? await _request(this.fetch, "GET", `${this.url}/user`, {
                                headers: this.headers,
                                jwt: null !== (i = null === (s = n.session) || void 0 === s ? void 0 : s.access_token) && void 0 !== i ? i : void 0,
                                xform: _userResponse
                            }) : {
                                data: {
                                    user: null
                                },
                                error: new AuthSessionMissingError
                            }
                        })
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                user: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async updateUser(e, t = {}) {
                    return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e, t))
                }
                async _updateUser(e, t = {}) {
                    try {
                        return await this._useSession(async s => {
                            let {
                                data: i,
                                error: n
                            } = s;
                            if (n) throw n;
                            if (!i.session) throw new AuthSessionMissingError;
                            let o = i.session,
                                a = null,
                                l = null;
                            "pkce" === this.flowType && null != e.email && ([a, l] = await getCodeChallengeAndMethod(this.storage, this.storageKey));
                            let {
                                data: c,
                                error: h
                            } = await _request(this.fetch, "PUT", `${this.url}/user`, {
                                headers: this.headers,
                                redirectTo: null == t ? void 0 : t.emailRedirectTo,
                                body: Object.assign(Object.assign({}, e), {
                                    code_challenge: a,
                                    code_challenge_method: l
                                }),
                                jwt: o.access_token,
                                xform: _userResponse
                            });
                            if (h) throw h;
                            return o.user = c.user, await this._saveSession(o), await this._notifyAllSubscribers("USER_UPDATED", o), {
                                data: {
                                    user: o.user
                                },
                                error: null
                            }
                        })
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                user: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                _decodeJWT(e) {
                    return decodeJWTPayload(e)
                }
                async setSession(e) {
                    return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e))
                }
                async _setSession(e) {
                    try {
                        if (!e.access_token || !e.refresh_token) throw new AuthSessionMissingError;
                        let t = Date.now() / 1e3,
                            s = t,
                            i = !0,
                            n = null,
                            o = decodeJWTPayload(e.access_token);
                        if (o.exp && (i = (s = o.exp) <= t), i) {
                            let {
                                session: t,
                                error: s
                            } = await this._callRefreshToken(e.refresh_token);
                            if (s) return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: s
                            };
                            if (!t) return {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: null
                            };
                            n = t
                        } else {
                            let {
                                data: i,
                                error: o
                            } = await this._getUser(e.access_token);
                            if (o) throw o;
                            n = {
                                access_token: e.access_token,
                                refresh_token: e.refresh_token,
                                user: i.user,
                                token_type: "bearer",
                                expires_in: s - t,
                                expires_at: s
                            }, await this._saveSession(n), await this._notifyAllSubscribers("SIGNED_IN", n)
                        }
                        return {
                            data: {
                                user: n.user,
                                session: n
                            },
                            error: null
                        }
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                session: null,
                                user: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async refreshSession(e) {
                    return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e))
                }
                async _refreshSession(e) {
                    try {
                        return await this._useSession(async t => {
                            var s;
                            if (!e) {
                                let {
                                    data: i,
                                    error: n
                                } = t;
                                if (n) throw n;
                                e = null !== (s = i.session) && void 0 !== s ? s : void 0
                            }
                            if (!(null == e ? void 0 : e.refresh_token)) throw new AuthSessionMissingError;
                            let {
                                session: i,
                                error: n
                            } = await this._callRefreshToken(e.refresh_token);
                            return n ? {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: n
                            } : i ? {
                                data: {
                                    user: i.user,
                                    session: i
                                },
                                error: null
                            } : {
                                data: {
                                    user: null,
                                    session: null
                                },
                                error: null
                            }
                        })
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                async _getSessionFromURL(e) {
                    try {
                        if (!helpers_isBrowser()) throw new AuthImplicitGrantRedirectError("No browser detected.");
                        if ("implicit" !== this.flowType || this._isImplicitGrantFlow()) {
                            if ("pkce" == this.flowType && !e) throw new AuthPKCEGrantCodeExchangeError("Not a valid PKCE flow url.")
                        } else throw new AuthImplicitGrantRedirectError("Not a valid implicit grant flow url.");
                        let t = parseParametersFromURL(window.location.href);
                        if (e) {
                            if (!t.code) throw new AuthPKCEGrantCodeExchangeError("No code detected.");
                            let {
                                data: e,
                                error: s
                            } = await this._exchangeCodeForSession(t.code);
                            if (s) throw s;
                            let i = new URL(window.location.href);
                            return i.searchParams.delete("code"), window.history.replaceState(window.history.state, "", i.toString()), {
                                data: {
                                    session: e.session,
                                    redirectType: null
                                },
                                error: null
                            }
                        }
                        if (t.error || t.error_description || t.error_code) throw new AuthImplicitGrantRedirectError(t.error_description || "Error in URL with unspecified error_description", {
                            error: t.error || "unspecified_error",
                            code: t.error_code || "unspecified_code"
                        });
                        let {
                            provider_token: s,
                            provider_refresh_token: i,
                            access_token: n,
                            refresh_token: o,
                            expires_in: a,
                            expires_at: l,
                            token_type: c
                        } = t;
                        if (!n || !a || !o || !c) throw new AuthImplicitGrantRedirectError("No session defined in URL");
                        let h = Math.round(Date.now() / 1e3),
                            u = parseInt(a),
                            d = h + u;
                        l && (d = parseInt(l));
                        let f = d - h;
                        1e3 * f <= 3e4 && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);
                        let p = d - u;
                        h - p >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", p, d, h) : h - p < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew", p, d, h);
                        let {
                            data: g,
                            error: y
                        } = await this._getUser(n);
                        if (y) throw y;
                        let m = {
                            provider_token: s,
                            provider_refresh_token: i,
                            access_token: n,
                            expires_in: u,
                            expires_at: d,
                            refresh_token: o,
                            token_type: c,
                            user: g.user
                        };
                        return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), {
                            data: {
                                session: m,
                                redirectType: t.type
                            },
                            error: null
                        }
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: {
                                session: null,
                                redirectType: null
                            },
                            error: e
                        };
                        throw e
                    }
                }
                _isImplicitGrantFlow() {
                    let e = parseParametersFromURL(window.location.href);
                    return !!(helpers_isBrowser() && (e.access_token || e.error_description))
                }
                async _isPKCEFlow() {
                    let e = parseParametersFromURL(window.location.href),
                        t = await getItemAsync(this.storage, `${this.storageKey}-code-verifier`);
                    return !!(e.code && t)
                }
                async signOut(e = {
                    scope: "global"
                }) {
                    return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e))
                }
                async _signOut({
                    scope: e
                } = {
                    scope: "global"
                }) {
                    return await this._useSession(async t => {
                        var s;
                        let {
                            data: i,
                            error: n
                        } = t;
                        if (n) return {
                            error: n
                        };
                        let o = null === (s = i.session) || void 0 === s ? void 0 : s.access_token;
                        if (o) {
                            let {
                                error: t
                            } = await this.admin.signOut(o, e);
                            if (t && !(isAuthError(t) && "AuthApiError" === t.name && (404 === t.status || 401 === t.status || 403 === t.status))) return {
                                error: t
                            }
                        }
                        return "others" !== e && (await this._removeSession(), await removeItemAsync(this.storage, `${this.storageKey}-code-verifier`), await this._notifyAllSubscribers("SIGNED_OUT", null)), {
                            error: null
                        }
                    })
                }
                onAuthStateChange(e) {
                    let t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                            let t = 16 * Math.random() | 0;
                            return ("x" == e ? t : 3 & t | 8).toString(16)
                        }),
                        s = {
                            id: t,
                            callback: e,
                            unsubscribe: () => {
                                this._debug("#unsubscribe()", "state change callback with id removed", t), this.stateChangeEmitters.delete(t)
                            }
                        };
                    return this._debug("#onAuthStateChange()", "registered callback with id", t), this.stateChangeEmitters.set(t, s), (async () => {
                        await this.initializePromise, await this._acquireLock(-1, async () => {
                            this._emitInitialSession(t)
                        })
                    })(), {
                        data: {
                            subscription: s
                        }
                    }
                }
                async _emitInitialSession(e) {
                    return await this._useSession(async t => {
                        var s, i;
                        try {
                            let {
                                data: {
                                    session: i
                                },
                                error: n
                            } = t;
                            if (n) throw n;
                            await (null === (s = this.stateChangeEmitters.get(e)) || void 0 === s ? void 0 : s.callback("INITIAL_SESSION", i)), this._debug("INITIAL_SESSION", "callback id", e, "session", i)
                        } catch (t) {
                            await (null === (i = this.stateChangeEmitters.get(e)) || void 0 === i ? void 0 : i.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", t), console.error(t)
                        }
                    })
                }
                async resetPasswordForEmail(e, t = {}) {
                    let s = null,
                        i = null;
                    "pkce" === this.flowType && ([s, i] = await getCodeChallengeAndMethod(this.storage, this.storageKey, !0));
                    try {
                        return await _request(this.fetch, "POST", `${this.url}/recover`, {
                            body: {
                                email: e,
                                code_challenge: s,
                                code_challenge_method: i,
                                gotrue_meta_security: {
                                    captcha_token: t.captchaToken
                                }
                            },
                            headers: this.headers,
                            redirectTo: t.redirectTo
                        })
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: null,
                            error: e
                        };
                        throw e
                    }
                }
                async getUserIdentities() {
                    var e;
                    try {
                        let {
                            data: t,
                            error: s
                        } = await this.getUser();
                        if (s) throw s;
                        return {
                            data: {
                                identities: null !== (e = t.user.identities) && void 0 !== e ? e : []
                            },
                            error: null
                        }
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: null,
                            error: e
                        };
                        throw e
                    }
                }
                async linkIdentity(e) {
                    var t;
                    try {
                        let {
                            data: s,
                            error: i
                        } = await this._useSession(async t => {
                            var s, i, n, o, a;
                            let {
                                data: l,
                                error: c
                            } = t;
                            if (c) throw c;
                            let h = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
                                redirectTo: null === (s = e.options) || void 0 === s ? void 0 : s.redirectTo,
                                scopes: null === (i = e.options) || void 0 === i ? void 0 : i.scopes,
                                queryParams: null === (n = e.options) || void 0 === n ? void 0 : n.queryParams,
                                skipBrowserRedirect: !0
                            });
                            return await _request(this.fetch, "GET", h, {
                                headers: this.headers,
                                jwt: null !== (a = null === (o = l.session) || void 0 === o ? void 0 : o.access_token) && void 0 !== a ? a : void 0
                            })
                        });
                        if (i) throw i;
                        return !helpers_isBrowser() || (null === (t = e.options) || void 0 === t ? void 0 : t.skipBrowserRedirect) || window.location.assign(null == s ? void 0 : s.url), {
                            data: {
                                provider: e.provider,
                                url: null == s ? void 0 : s.url
                            },
                            error: null
                        }
                    } catch (t) {
                        if (isAuthError(t)) return {
                            data: {
                                provider: e.provider,
                                url: null
                            },
                            error: t
                        };
                        throw t
                    }
                }
                async unlinkIdentity(e) {
                    try {
                        return await this._useSession(async t => {
                            var s, i;
                            let {
                                data: n,
                                error: o
                            } = t;
                            if (o) throw o;
                            return await _request(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
                                headers: this.headers,
                                jwt: null !== (i = null === (s = n.session) || void 0 === s ? void 0 : s.access_token) && void 0 !== i ? i : void 0
                            })
                        })
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: null,
                            error: e
                        };
                        throw e
                    }
                }
                async _refreshAccessToken(e) {
                    let t = `#_refreshAccessToken(${e.substring(0,5)}...)`;
                    this._debug(t, "begin");
                    try {
                        let s = Date.now();
                        return await
                        function(e, t) {
                            let s = new Promise((s, i) => {
                                (async () => {
                                    for (let n = 0; n < 1 / 0; n++) try {
                                        let i = await e(n);
                                        if (!t(n, null, i)) {
                                            s(i);
                                            return
                                        }
                                    } catch (e) {
                                        if (!t(n, e)) {
                                            i(e);
                                            return
                                        }
                                    }
                                })()
                            });
                            return s
                        }(async s => (s > 0 && await sleep(200 * Math.pow(2, s - 1)), this._debug(t, "refreshing attempt", s), await _request(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                            body: {
                                refresh_token: e
                            },
                            headers: this.headers,
                            xform: _sessionResponse
                        })), (e, t) => {
                            let i = 200 * Math.pow(2, e);
                            return t && isAuthRetryableFetchError(t) && Date.now() + i - s < 3e4
                        })
                    } catch (e) {
                        if (this._debug(t, "error", e), isAuthError(e)) return {
                            data: {
                                session: null,
                                user: null
                            },
                            error: e
                        };
                        throw e
                    } finally {
                        this._debug(t, "end")
                    }
                }
                _isValidSession(e) {
                    return "object" == typeof e && null !== e && "access_token" in e && "refresh_token" in e && "expires_at" in e
                }
                async _handleProviderSignIn(e, t) {
                    let s = await this._getUrlForProvider(`${this.url}/authorize`, e, {
                        redirectTo: t.redirectTo,
                        scopes: t.scopes,
                        queryParams: t.queryParams
                    });
                    return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", s), helpers_isBrowser() && !t.skipBrowserRedirect && window.location.assign(s), {
                        data: {
                            provider: e,
                            url: s
                        },
                        error: null
                    }
                }
                async _recoverAndRefresh() {
                    var e;
                    let t = "#_recoverAndRefresh()";
                    this._debug(t, "begin");
                    try {
                        let s = await getItemAsync(this.storage, this.storageKey);
                        if (this._debug(t, "session from storage", s), !this._isValidSession(s)) {
                            this._debug(t, "session is not valid"), null !== s && await this._removeSession();
                            return
                        }
                        let i = Math.round(Date.now() / 1e3),
                            n = (null !== (e = s.expires_at) && void 0 !== e ? e : 1 / 0) < i + 10;
                        if (this._debug(t, `session has${n?"":" not"} expired with margin of 10s`), n) {
                            if (this.autoRefreshToken && s.refresh_token) {
                                let {
                                    error: e
                                } = await this._callRefreshToken(s.refresh_token);
                                e && (console.error(e), isAuthRetryableFetchError(e) || (this._debug(t, "refresh failed with a non-retryable error, removing the session", e), await this._removeSession()))
                            }
                        } else await this._notifyAllSubscribers("SIGNED_IN", s)
                    } catch (e) {
                        this._debug(t, "error", e), console.error(e);
                        return
                    } finally {
                        this._debug(t, "end")
                    }
                }
                async _callRefreshToken(e) {
                    var t, s;
                    if (!e) throw new AuthSessionMissingError;
                    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
                    let i = `#_callRefreshToken(${e.substring(0,5)}...)`;
                    this._debug(i, "begin");
                    try {
                        this.refreshingDeferred = new Deferred;
                        let {
                            data: t,
                            error: s
                        } = await this._refreshAccessToken(e);
                        if (s) throw s;
                        if (!t.session) throw new AuthSessionMissingError;
                        await this._saveSession(t.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
                        let i = {
                            session: t.session,
                            error: null
                        };
                        return this.refreshingDeferred.resolve(i), i
                    } catch (e) {
                        if (this._debug(i, "error", e), isAuthError(e)) {
                            let s = {
                                session: null,
                                error: e
                            };
                            return isAuthRetryableFetchError(e) || (await this._removeSession(), await this._notifyAllSubscribers("SIGNED_OUT", null)), null === (t = this.refreshingDeferred) || void 0 === t || t.resolve(s), s
                        }
                        throw null === (s = this.refreshingDeferred) || void 0 === s || s.reject(e), e
                    } finally {
                        this.refreshingDeferred = null, this._debug(i, "end")
                    }
                }
                async _notifyAllSubscribers(e, t, s = !0) {
                    let i = `#_notifyAllSubscribers(${e})`;
                    this._debug(i, "begin", t, `broadcast = ${s}`);
                    try {
                        this.broadcastChannel && s && this.broadcastChannel.postMessage({
                            event: e,
                            session: t
                        });
                        let i = [],
                            n = Array.from(this.stateChangeEmitters.values()).map(async s => {
                                try {
                                    await s.callback(e, t)
                                } catch (e) {
                                    i.push(e)
                                }
                            });
                        if (await Promise.all(n), i.length > 0) {
                            for (let e = 0; e < i.length; e += 1) console.error(i[e]);
                            throw i[0]
                        }
                    } finally {
                        this._debug(i, "end")
                    }
                }
                async _saveSession(e) {
                    this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await setItemAsync(this.storage, this.storageKey, e)
                }
                async _removeSession() {
                    this._debug("#_removeSession()"), await removeItemAsync(this.storage, this.storageKey)
                }
                _removeVisibilityChangedCallback() {
                    this._debug("#_removeVisibilityChangedCallback()");
                    let e = this.visibilityChangedCallback;
                    this.visibilityChangedCallback = null;
                    try {
                        e && helpers_isBrowser() && (null == window ? void 0 : window.removeEventListener) && window.removeEventListener("visibilitychange", e)
                    } catch (e) {
                        console.error("removing visibilitychange callback failed", e)
                    }
                }
                async _startAutoRefresh() {
                    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
                    let e = setInterval(() => this._autoRefreshTokenTick(), 3e4);
                    this.autoRefreshTicker = e, e && "object" == typeof e && "function" == typeof e.unref ? e.unref() : "undefined" != typeof Deno && "function" == typeof Deno.unrefTimer && Deno.unrefTimer(e), setTimeout(async () => {
                        await this.initializePromise, await this._autoRefreshTokenTick()
                    }, 0)
                }
                async _stopAutoRefresh() {
                    this._debug("#_stopAutoRefresh()");
                    let e = this.autoRefreshTicker;
                    this.autoRefreshTicker = null, e && clearInterval(e)
                }
                async startAutoRefresh() {
                    this._removeVisibilityChangedCallback(), await this._startAutoRefresh()
                }
                async stopAutoRefresh() {
                    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh()
                }
                async _autoRefreshTokenTick() {
                    this._debug("#_autoRefreshTokenTick()", "begin");
                    try {
                        await this._acquireLock(0, async () => {
                            try {
                                let e = Date.now();
                                try {
                                    return await this._useSession(async t => {
                                        let {
                                            data: {
                                                session: s
                                            }
                                        } = t;
                                        if (!s || !s.refresh_token || !s.expires_at) {
                                            this._debug("#_autoRefreshTokenTick()", "no session");
                                            return
                                        }
                                        let i = Math.floor((1e3 * s.expires_at - e) / 3e4);
                                        this._debug("#_autoRefreshTokenTick()", `access token expires in ${i} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`), i <= 3 && await this._callRefreshToken(s.refresh_token)
                                    })
                                } catch (e) {
                                    console.error("Auto refresh tick failed with error. This is likely a transient error.", e)
                                }
                            } finally {
                                this._debug("#_autoRefreshTokenTick()", "end")
                            }
                        })
                    } catch (e) {
                        if (e.isAcquireTimeout || e instanceof LockAcquireTimeoutError) this._debug("auto refresh token tick lock not available");
                        else throw e
                    }
                }
                async _handleVisibilityChange() {
                    if (this._debug("#_handleVisibilityChange()"), !helpers_isBrowser() || !(null == window ? void 0 : window.addEventListener)) return this.autoRefreshToken && this.startAutoRefresh(), !1;
                    try {
                        this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), null == window || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0)
                    } catch (e) {
                        console.error("_handleVisibilityChange", e)
                    }
                }
                async _onVisibilityChanged(e) {
                    let t = `#_onVisibilityChanged(${e})`;
                    this._debug(t, "visibilityState", document.visibilityState), "visible" === document.visibilityState ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(-1, async () => {
                        if ("visible" !== document.visibilityState) {
                            this._debug(t, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                            return
                        }
                        await this._recoverAndRefresh()
                    }))) : "hidden" === document.visibilityState && this.autoRefreshToken && this._stopAutoRefresh()
                }
                async _getUrlForProvider(e, t, s) {
                    let i = [`provider=${encodeURIComponent(t)}`];
                    if ((null == s ? void 0 : s.redirectTo) && i.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`), (null == s ? void 0 : s.scopes) && i.push(`scopes=${encodeURIComponent(s.scopes)}`), "pkce" === this.flowType) {
                        let [e, t] = await getCodeChallengeAndMethod(this.storage, this.storageKey), s = new URLSearchParams({
                            code_challenge: `${encodeURIComponent(e)}`,
                            code_challenge_method: `${encodeURIComponent(t)}`
                        });
                        i.push(s.toString())
                    }
                    if (null == s ? void 0 : s.queryParams) {
                        let e = new URLSearchParams(s.queryParams);
                        i.push(e.toString())
                    }
                    return (null == s ? void 0 : s.skipBrowserRedirect) && i.push(`skip_http_redirect=${s.skipBrowserRedirect}`), `${e}?${i.join("&")}`
                }
                async _unenroll(e) {
                    try {
                        return await this._useSession(async t => {
                            var s;
                            let {
                                data: i,
                                error: n
                            } = t;
                            return n ? {
                                data: null,
                                error: n
                            } : await _request(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
                                headers: this.headers,
                                jwt: null === (s = null == i ? void 0 : i.session) || void 0 === s ? void 0 : s.access_token
                            })
                        })
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: null,
                            error: e
                        };
                        throw e
                    }
                }
                async _enroll(e) {
                    try {
                        return await this._useSession(async t => {
                            var s, i;
                            let {
                                data: n,
                                error: o
                            } = t;
                            if (o) return {
                                data: null,
                                error: o
                            };
                            let {
                                data: a,
                                error: l
                            } = await _request(this.fetch, "POST", `${this.url}/factors`, {
                                body: {
                                    friendly_name: e.friendlyName,
                                    factor_type: e.factorType,
                                    issuer: e.issuer
                                },
                                headers: this.headers,
                                jwt: null === (s = null == n ? void 0 : n.session) || void 0 === s ? void 0 : s.access_token
                            });
                            return l ? {
                                data: null,
                                error: l
                            } : ((null === (i = null == a ? void 0 : a.totp) || void 0 === i ? void 0 : i.qr_code) && (a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`), {
                                data: a,
                                error: null
                            })
                        })
                    } catch (e) {
                        if (isAuthError(e)) return {
                            data: null,
                            error: e
                        };
                        throw e
                    }
                }
                async _verify(e) {
                    return this._acquireLock(-1, async () => {
                        try {
                            return await this._useSession(async t => {
                                var s;
                                let {
                                    data: i,
                                    error: n
                                } = t;
                                if (n) return {
                                    data: null,
                                    error: n
                                };
                                let {
                                    data: o,
                                    error: a
                                } = await _request(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
                                    body: {
                                        code: e.code,
                                        challenge_id: e.challengeId
                                    },
                                    headers: this.headers,
                                    jwt: null === (s = null == i ? void 0 : i.session) || void 0 === s ? void 0 : s.access_token
                                });
                                return a ? {
                                    data: null,
                                    error: a
                                } : (await this._saveSession(Object.assign({
                                    expires_at: Math.round(Date.now() / 1e3) + o.expires_in
                                }, o)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o), {
                                    data: o,
                                    error: a
                                })
                            })
                        } catch (e) {
                            if (isAuthError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                async _challenge(e) {
                    return this._acquireLock(-1, async () => {
                        try {
                            return await this._useSession(async t => {
                                var s;
                                let {
                                    data: i,
                                    error: n
                                } = t;
                                return n ? {
                                    data: null,
                                    error: n
                                } : await _request(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
                                    headers: this.headers,
                                    jwt: null === (s = null == i ? void 0 : i.session) || void 0 === s ? void 0 : s.access_token
                                })
                            })
                        } catch (e) {
                            if (isAuthError(e)) return {
                                data: null,
                                error: e
                            };
                            throw e
                        }
                    })
                }
                async _challengeAndVerify(e) {
                    let {
                        data: t,
                        error: s
                    } = await this._challenge({
                        factorId: e.factorId
                    });
                    return s ? {
                        data: null,
                        error: s
                    } : await this._verify({
                        factorId: e.factorId,
                        challengeId: t.id,
                        code: e.code
                    })
                }
                async _listFactors() {
                    let {
                        data: {
                            user: e
                        },
                        error: t
                    } = await this.getUser();
                    if (t) return {
                        data: null,
                        error: t
                    };
                    let s = (null == e ? void 0 : e.factors) || [],
                        i = s.filter(e => "totp" === e.factor_type && "verified" === e.status);
                    return {
                        data: {
                            all: s,
                            totp: i
                        },
                        error: null
                    }
                }
                async _getAuthenticatorAssuranceLevel() {
                    return this._acquireLock(-1, async () => await this._useSession(async e => {
                        var t, s;
                        let {
                            data: {
                                session: i
                            },
                            error: n
                        } = e;
                        if (n) return {
                            data: null,
                            error: n
                        };
                        if (!i) return {
                            data: {
                                currentLevel: null,
                                nextLevel: null,
                                currentAuthenticationMethods: []
                            },
                            error: null
                        };
                        let o = this._decodeJWT(i.access_token),
                            a = null;
                        o.aal && (a = o.aal);
                        let l = a,
                            c = null !== (s = null === (t = i.user.factors) || void 0 === t ? void 0 : t.filter(e => "verified" === e.status)) && void 0 !== s ? s : [];
                        c.length > 0 && (l = "aal2");
                        let h = o.amr || [];
                        return {
                            data: {
                                currentLevel: a,
                                nextLevel: l,
                                currentAuthenticationMethods: h
                            },
                            error: null
                        }
                    }))
                }
            };
            GoTrueClient.nextInstanceID = 0;
            var J = GoTrueClient;
            let SupabaseAuthClient = class SupabaseAuthClient extends J {
                constructor(e) {
                    super(e)
                }
            };
            let SupabaseClient = class SupabaseClient {
                constructor(e, t, s) {
                    var i, n, o;
                    if (this.supabaseUrl = e, this.supabaseKey = t, !e) throw Error("supabaseUrl is required.");
                    if (!t) throw Error("supabaseKey is required.");
                    let a = e.replace(/\/$/, "");
                    this.realtimeUrl = `${a}/realtime/v1`.replace(/^http/i, "ws"), this.authUrl = `${a}/auth/v1`, this.storageUrl = `${a}/storage/v1`, this.functionsUrl = `${a}/functions/v1`;
                    let l = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,
                        c = {
                            db: $,
                            realtime: W,
                            auth: Object.assign(Object.assign({}, L), {
                                storageKey: l
                            }),
                            global: I
                        },
                        h = function(e, t) {
                            let {
                                db: s,
                                auth: i,
                                realtime: n,
                                global: o
                            } = e, {
                                db: a,
                                auth: l,
                                realtime: c,
                                global: h
                            } = t;
                            return {
                                db: Object.assign(Object.assign({}, a), s),
                                auth: Object.assign(Object.assign({}, l), i),
                                realtime: Object.assign(Object.assign({}, c), n),
                                global: Object.assign(Object.assign({}, h), o)
                            }
                        }(null != s ? s : {}, c);
                    this.storageKey = null !== (i = h.auth.storageKey) && void 0 !== i ? i : "", this.headers = null !== (n = h.global.headers) && void 0 !== n ? n : {}, this.auth = this._initSupabaseAuthClient(null !== (o = h.auth) && void 0 !== o ? o : {}, this.headers, h.global.fetch), this.fetch = fetchWithAuth(t, this._getAccessToken.bind(this), h.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({
                        headers: this.headers
                    }, h.realtime)), this.rest = new PostgrestClient(`${a}/rest/v1`, {
                        headers: this.headers,
                        schema: h.db.schema,
                        fetch: this.fetch
                    }), this._listenForAuthEvents()
                }
                get functions() {
                    return new FunctionsClient(this.functionsUrl, {
                        headers: this.headers,
                        customFetch: this.fetch
                    })
                }
                get storage() {
                    return new StorageClient(this.storageUrl, this.headers, this.fetch)
                }
                from(e) {
                    return this.rest.from(e)
                }
                schema(e) {
                    return this.rest.schema(e)
                }
                rpc(e, t = {}, s = {}) {
                    return this.rest.rpc(e, t, s)
                }
                channel(e, t = {
                    config: {}
                }) {
                    return this.realtime.channel(e, t)
                }
                getChannels() {
                    return this.realtime.getChannels()
                }
                removeChannel(e) {
                    return this.realtime.removeChannel(e)
                }
                removeAllChannels() {
                    return this.realtime.removeAllChannels()
                }
                _getAccessToken() {
                    var e, t, s, i, n, o;
                    return s = this, i = void 0, n = void 0, o = function*() {
                        let {
                            data: s
                        } = yield this.auth.getSession();
                        return null !== (t = null === (e = s.session) || void 0 === e ? void 0 : e.access_token) && void 0 !== t ? t : null
                    }, new(n || (n = Promise))(function(e, t) {
                        function fulfilled(e) {
                            try {
                                step(o.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function rejected(e) {
                            try {
                                step(o.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function step(t) {
                            var s;
                            t.done ? e(t.value) : ((s = t.value) instanceof n ? s : new n(function(e) {
                                e(s)
                            })).then(fulfilled, rejected)
                        }
                        step((o = o.apply(s, i || [])).next())
                    })
                }
                _initSupabaseAuthClient({
                    autoRefreshToken: e,
                    persistSession: t,
                    detectSessionInUrl: s,
                    storage: i,
                    storageKey: n,
                    flowType: o,
                    debug: a
                }, l, c) {
                    var h;
                    let u = {
                        Authorization: `Bearer ${this.supabaseKey}`,
                        apikey: `${this.supabaseKey}`
                    };
                    return new SupabaseAuthClient({
                        url: this.authUrl,
                        headers: Object.assign(Object.assign({}, u), l),
                        storageKey: n,
                        autoRefreshToken: e,
                        persistSession: t,
                        detectSessionInUrl: s,
                        storage: i,
                        flowType: o,
                        debug: a,
                        fetch: c,
                        hasCustomAuthorizationHeader: "Authorization" in this.headers
                    })
                }
                _initRealtimeClient(e) {
                    return new RealtimeClient(this.realtimeUrl, Object.assign(Object.assign({}, e), {
                        params: Object.assign({
                            apikey: this.supabaseKey
                        }, null == e ? void 0 : e.params)
                    }))
                }
                _listenForAuthEvents() {
                    return this.auth.onAuthStateChange((e, t) => {
                        this._handleTokenChanged(e, "CLIENT", null == t ? void 0 : t.access_token)
                    })
                }
                _handleTokenChanged(e, t, s) {
                    ("TOKEN_REFRESHED" === e || "SIGNED_IN" === e) && this.changedAccessToken !== s ? (this.realtime.setAuth(null != s ? s : null), this.changedAccessToken = s) : "SIGNED_OUT" === e && (this.realtime.setAuth(this.supabaseKey), "STORAGE" == t && this.auth.signOut(), this.changedAccessToken = void 0)
                }
            };
            let createClient = (e, t, s) => new SupabaseClient(e, t, s)
        },
        85572: function(e, t, s) {
            var i, n, o, a, l, c, h, u, d, f, p, g, y, m, v;
            e.exports = (i = s(84934), s(76217), s(74850), s(28238), s(68994), n = i.lib.BlockCipher, o = i.algo, a = [], l = [], c = [], h = [], u = [], d = [], f = [], p = [], g = [], y = [], function() {
                for (var e = [], t = 0; t < 256; t++) t < 128 ? e[t] = t << 1 : e[t] = t << 1 ^ 283;
                for (var s = 0, i = 0, t = 0; t < 256; t++) {
                    var n = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4;
                    n = n >>> 8 ^ 255 & n ^ 99, a[s] = n, l[n] = s;
                    var o = e[s],
                        m = e[o],
                        v = e[m],
                        _ = 257 * e[n] ^ 16843008 * n;
                    c[s] = _ << 24 | _ >>> 8, h[s] = _ << 16 | _ >>> 16, u[s] = _ << 8 | _ >>> 24, d[s] = _;
                    var _ = 16843009 * v ^ 65537 * m ^ 257 * o ^ 16843008 * s;
                    f[n] = _ << 24 | _ >>> 8, p[n] = _ << 16 | _ >>> 16, g[n] = _ << 8 | _ >>> 24, y[n] = _, s ? (s = o ^ e[e[e[v ^ o]]], i ^= e[e[i]]) : s = i = 1
                }
            }(), m = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], v = o.AES = n.extend({
                _doReset: function() {
                    if (!this._nRounds || this._keyPriorReset !== this._key) {
                        for (var e, t = this._keyPriorReset = this._key, s = t.words, i = t.sigBytes / 4, n = ((this._nRounds = i + 6) + 1) * 4, o = this._keySchedule = [], l = 0; l < n; l++) l < i ? o[l] = s[l] : (e = o[l - 1], l % i ? i > 6 && l % i == 4 && (e = a[e >>> 24] << 24 | a[e >>> 16 & 255] << 16 | a[e >>> 8 & 255] << 8 | a[255 & e]) : e = (a[(e = e << 8 | e >>> 24) >>> 24] << 24 | a[e >>> 16 & 255] << 16 | a[e >>> 8 & 255] << 8 | a[255 & e]) ^ m[l / i | 0] << 24, o[l] = o[l - i] ^ e);
                        for (var c = this._invKeySchedule = [], h = 0; h < n; h++) {
                            var l = n - h;
                            if (h % 4) var e = o[l];
                            else var e = o[l - 4];
                            h < 4 || l <= 4 ? c[h] = e : c[h] = f[a[e >>> 24]] ^ p[a[e >>> 16 & 255]] ^ g[a[e >>> 8 & 255]] ^ y[a[255 & e]]
                        }
                    }
                },
                encryptBlock: function(e, t) {
                    this._doCryptBlock(e, t, this._keySchedule, c, h, u, d, a)
                },
                decryptBlock: function(e, t) {
                    var s = e[t + 1];
                    e[t + 1] = e[t + 3], e[t + 3] = s, this._doCryptBlock(e, t, this._invKeySchedule, f, p, g, y, l);
                    var s = e[t + 1];
                    e[t + 1] = e[t + 3], e[t + 3] = s
                },
                _doCryptBlock: function(e, t, s, i, n, o, a, l) {
                    for (var c = this._nRounds, h = e[t] ^ s[0], u = e[t + 1] ^ s[1], d = e[t + 2] ^ s[2], f = e[t + 3] ^ s[3], p = 4, g = 1; g < c; g++) {
                        var y = i[h >>> 24] ^ n[u >>> 16 & 255] ^ o[d >>> 8 & 255] ^ a[255 & f] ^ s[p++],
                            m = i[u >>> 24] ^ n[d >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & h] ^ s[p++],
                            v = i[d >>> 24] ^ n[f >>> 16 & 255] ^ o[h >>> 8 & 255] ^ a[255 & u] ^ s[p++],
                            _ = i[f >>> 24] ^ n[h >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & d] ^ s[p++];
                        h = y, u = m, d = v, f = _
                    }
                    var y = (l[h >>> 24] << 24 | l[u >>> 16 & 255] << 16 | l[d >>> 8 & 255] << 8 | l[255 & f]) ^ s[p++],
                        m = (l[u >>> 24] << 24 | l[d >>> 16 & 255] << 16 | l[f >>> 8 & 255] << 8 | l[255 & h]) ^ s[p++],
                        v = (l[d >>> 24] << 24 | l[f >>> 16 & 255] << 16 | l[h >>> 8 & 255] << 8 | l[255 & u]) ^ s[p++],
                        _ = (l[f >>> 24] << 24 | l[h >>> 16 & 255] << 16 | l[u >>> 8 & 255] << 8 | l[255 & d]) ^ s[p++];
                    e[t] = y, e[t + 1] = m, e[t + 2] = v, e[t + 3] = _
                },
                keySize: 8
            }), i.AES = n._createHelper(v), i.AES)
        },
        79488: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), s(76217), s(74850), s(28238), s(68994), function() {
                var e = i.lib.BlockCipher,
                    t = i.algo;
                let s = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731],
                    n = [
                        [3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946],
                        [1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055],
                        [3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504],
                        [976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462]
                    ];
                var o = {
                    pbox: [],
                    sbox: []
                };

                function F(e, t) {
                    let s = e.sbox[0][t >> 24 & 255] + e.sbox[1][t >> 16 & 255];
                    return s ^= e.sbox[2][t >> 8 & 255], s += e.sbox[3][255 & t]
                }

                function BlowFish_Encrypt(e, t, s) {
                    let i, n = t,
                        o = s;
                    for (let t = 0; t < 16; ++t) n ^= e.pbox[t], o = F(e, n) ^ o, i = n, n = o, o = i;
                    return i = n, n = o, o = i ^ e.pbox[16], {
                        left: n ^= e.pbox[17],
                        right: o
                    }
                }
                var a = t.Blowfish = e.extend({
                    _doReset: function() {
                        if (this._keyPriorReset !== this._key) {
                            var e = this._keyPriorReset = this._key;
                            ! function(e, t, i) {
                                for (let t = 0; t < 4; t++) {
                                    e.sbox[t] = [];
                                    for (let s = 0; s < 256; s++) e.sbox[t][s] = n[t][s]
                                }
                                let o = 0;
                                for (let n = 0; n < 18; n++) e.pbox[n] = s[n] ^ t[o], ++o >= i && (o = 0);
                                let a = 0,
                                    l = 0,
                                    c = 0;
                                for (let t = 0; t < 18; t += 2) a = (c = BlowFish_Encrypt(e, a, l)).left, l = c.right, e.pbox[t] = a, e.pbox[t + 1] = l;
                                for (let t = 0; t < 4; t++)
                                    for (let s = 0; s < 256; s += 2) a = (c = BlowFish_Encrypt(e, a, l)).left, l = c.right, e.sbox[t][s] = a, e.sbox[t][s + 1] = l
                            }(o, e.words, e.sigBytes / 4)
                        }
                    },
                    encryptBlock: function(e, t) {
                        var s = BlowFish_Encrypt(o, e[t], e[t + 1]);
                        e[t] = s.left, e[t + 1] = s.right
                    },
                    decryptBlock: function(e, t) {
                        var s = function(e, t, s) {
                            let i, n = t,
                                o = s;
                            for (let t = 17; t > 1; --t) n ^= e.pbox[t], o = F(e, n) ^ o, i = n, n = o, o = i;
                            return i = n, n = o, o = i ^ e.pbox[1], {
                                left: n ^= e.pbox[0],
                                right: o
                            }
                        }(o, e[t], e[t + 1]);
                        e[t] = s.left, e[t + 1] = s.right
                    },
                    blockSize: 2,
                    keySize: 4,
                    ivSize: 2
                });
                i.Blowfish = e._createHelper(a)
            }(), i.Blowfish)
        },
        68994: function(e, t, s) {
            var i, n, o, a, l, c, h, u, d, f, p, g, y, m, v, _, b, w;
            e.exports = (i = s(84934), s(28238), void(i.lib.Cipher || (o = (n = i.lib).Base, a = n.WordArray, l = n.BufferedBlockAlgorithm, (c = i.enc).Utf8, h = c.Base64, u = i.algo.EvpKDF, d = n.Cipher = l.extend({
                cfg: o.extend(),
                createEncryptor: function(e, t) {
                    return this.create(this._ENC_XFORM_MODE, e, t)
                },
                createDecryptor: function(e, t) {
                    return this.create(this._DEC_XFORM_MODE, e, t)
                },
                init: function(e, t, s) {
                    this.cfg = this.cfg.extend(s), this._xformMode = e, this._key = t, this.reset()
                },
                reset: function() {
                    l.reset.call(this), this._doReset()
                },
                process: function(e) {
                    return this._append(e), this._process()
                },
                finalize: function(e) {
                    return e && this._append(e), this._doFinalize()
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function() {
                    function selectCipherStrategy(e) {
                        return "string" == typeof e ? w : _
                    }
                    return function(e) {
                        return {
                            encrypt: function(t, s, i) {
                                return selectCipherStrategy(s).encrypt(e, t, s, i)
                            },
                            decrypt: function(t, s, i) {
                                return selectCipherStrategy(s).decrypt(e, t, s, i)
                            }
                        }
                    }
                }()
            }), n.StreamCipher = d.extend({
                _doFinalize: function() {
                    return this._process(!0)
                },
                blockSize: 1
            }), f = i.mode = {}, p = n.BlockCipherMode = o.extend({
                createEncryptor: function(e, t) {
                    return this.Encryptor.create(e, t)
                },
                createDecryptor: function(e, t) {
                    return this.Decryptor.create(e, t)
                },
                init: function(e, t) {
                    this._cipher = e, this._iv = t
                }
            }), g = f.CBC = function() {
                var e = p.extend();

                function xorBlock(e, t, s) {
                    var i, n = this._iv;
                    n ? (i = n, this._iv = void 0) : i = this._prevBlock;
                    for (var o = 0; o < s; o++) e[t + o] ^= i[o]
                }
                return e.Encryptor = e.extend({
                    processBlock: function(e, t) {
                        var s = this._cipher,
                            i = s.blockSize;
                        xorBlock.call(this, e, t, i), s.encryptBlock(e, t), this._prevBlock = e.slice(t, t + i)
                    }
                }), e.Decryptor = e.extend({
                    processBlock: function(e, t) {
                        var s = this._cipher,
                            i = s.blockSize,
                            n = e.slice(t, t + i);
                        s.decryptBlock(e, t), xorBlock.call(this, e, t, i), this._prevBlock = n
                    }
                }), e
            }(), y = (i.pad = {}).Pkcs7 = {
                pad: function(e, t) {
                    for (var s = 4 * t, i = s - e.sigBytes % s, n = i << 24 | i << 16 | i << 8 | i, o = [], l = 0; l < i; l += 4) o.push(n);
                    var c = a.create(o, i);
                    e.concat(c)
                },
                unpad: function(e) {
                    var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                    e.sigBytes -= t
                }
            }, n.BlockCipher = d.extend({
                cfg: d.cfg.extend({
                    mode: g,
                    padding: y
                }),
                reset: function() {
                    d.reset.call(this);
                    var e, t = this.cfg,
                        s = t.iv,
                        i = t.mode;
                    this._xformMode == this._ENC_XFORM_MODE ? e = i.createEncryptor : (e = i.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == e ? this._mode.init(this, s && s.words) : (this._mode = e.call(i, this, s && s.words), this._mode.__creator = e)
                },
                _doProcessBlock: function(e, t) {
                    this._mode.processBlock(e, t)
                },
                _doFinalize: function() {
                    var e, t = this.cfg.padding;
                    return this._xformMode == this._ENC_XFORM_MODE ? (t.pad(this._data, this.blockSize), e = this._process(!0)) : (e = this._process(!0), t.unpad(e)), e
                },
                blockSize: 4
            }), m = n.CipherParams = o.extend({
                init: function(e) {
                    this.mixIn(e)
                },
                toString: function(e) {
                    return (e || this.formatter).stringify(this)
                }
            }), v = (i.format = {}).OpenSSL = {
                stringify: function(e) {
                    var t = e.ciphertext,
                        s = e.salt;
                    return (s ? a.create([1398893684, 1701076831]).concat(s).concat(t) : t).toString(h)
                },
                parse: function(e) {
                    var t, s = h.parse(e),
                        i = s.words;
                    return 1398893684 == i[0] && 1701076831 == i[1] && (t = a.create(i.slice(2, 4)), i.splice(0, 4), s.sigBytes -= 16), m.create({
                        ciphertext: s,
                        salt: t
                    })
                }
            }, _ = n.SerializableCipher = o.extend({
                cfg: o.extend({
                    format: v
                }),
                encrypt: function(e, t, s, i) {
                    i = this.cfg.extend(i);
                    var n = e.createEncryptor(s, i),
                        o = n.finalize(t),
                        a = n.cfg;
                    return m.create({
                        ciphertext: o,
                        key: s,
                        iv: a.iv,
                        algorithm: e,
                        mode: a.mode,
                        padding: a.padding,
                        blockSize: e.blockSize,
                        formatter: i.format
                    })
                },
                decrypt: function(e, t, s, i) {
                    return i = this.cfg.extend(i), t = this._parse(t, i.format), e.createDecryptor(s, i).finalize(t.ciphertext)
                },
                _parse: function(e, t) {
                    return "string" == typeof e ? t.parse(e, this) : e
                }
            }), b = (i.kdf = {}).OpenSSL = {
                execute: function(e, t, s, i, n) {
                    if (i || (i = a.random(8)), n) var o = u.create({
                        keySize: t + s,
                        hasher: n
                    }).compute(e, i);
                    else var o = u.create({
                        keySize: t + s
                    }).compute(e, i);
                    var l = a.create(o.words.slice(t), 4 * s);
                    return o.sigBytes = 4 * t, m.create({
                        key: o,
                        iv: l,
                        salt: i
                    })
                }
            }, w = n.PasswordBasedCipher = _.extend({
                cfg: _.cfg.extend({
                    kdf: b
                }),
                encrypt: function(e, t, s, i) {
                    var n = (i = this.cfg.extend(i)).kdf.execute(s, e.keySize, e.ivSize, i.salt, i.hasher);
                    i.iv = n.iv;
                    var o = _.encrypt.call(this, e, t, n.key, i);
                    return o.mixIn(n), o
                },
                decrypt: function(e, t, s, i) {
                    i = this.cfg.extend(i), t = this._parse(t, i.format);
                    var n = i.kdf.execute(s, e.keySize, e.ivSize, t.salt, i.hasher);
                    return i.iv = n.iv, _.decrypt.call(this, e, t, n.key, i)
                }
            }))))
        },
        84934: function(e, t, s) {
            var i;
            e.exports = i || function(e, t) {
                if ("undefined" != typeof window && window.crypto && (i = window.crypto), "undefined" != typeof self && self.crypto && (i = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (i = globalThis.crypto), !i && "undefined" != typeof window && window.msCrypto && (i = window.msCrypto), !i && void 0 !== s.g && s.g.crypto && (i = s.g.crypto), !i) try {
                    i = s(42480)
                } catch (e) {}
                var i, cryptoSecureRandomInt = function() {
                        if (i) {
                            if ("function" == typeof i.getRandomValues) try {
                                return i.getRandomValues(new Uint32Array(1))[0]
                            } catch (e) {}
                            if ("function" == typeof i.randomBytes) try {
                                return i.randomBytes(4).readInt32LE()
                            } catch (e) {}
                        }
                        throw Error("Native crypto module could not be used to get secure random number.")
                    },
                    n = Object.create || function() {
                        function F() {}
                        return function(e) {
                            var t;
                            return F.prototype = e, t = new F, F.prototype = null, t
                        }
                    }(),
                    o = {},
                    a = o.lib = {},
                    l = a.Base = {
                        extend: function(e) {
                            var t = n(this);
                            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                                t.$super.init.apply(this, arguments)
                            }), t.init.prototype = t, t.$super = this, t
                        },
                        create: function() {
                            var e = this.extend();
                            return e.init.apply(e, arguments), e
                        },
                        init: function() {},
                        mixIn: function(e) {
                            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                            e.hasOwnProperty("toString") && (this.toString = e.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    },
                    c = a.WordArray = l.extend({
                        init: function(e, t) {
                            e = this.words = e || [], void 0 != t ? this.sigBytes = t : this.sigBytes = 4 * e.length
                        },
                        toString: function(e) {
                            return (e || u).stringify(this)
                        },
                        concat: function(e) {
                            var t = this.words,
                                s = e.words,
                                i = this.sigBytes,
                                n = e.sigBytes;
                            if (this.clamp(), i % 4)
                                for (var o = 0; o < n; o++) {
                                    var a = s[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                    t[i + o >>> 2] |= a << 24 - (i + o) % 4 * 8
                                } else
                                    for (var l = 0; l < n; l += 4) t[i + l >>> 2] = s[l >>> 2];
                            return this.sigBytes += n, this
                        },
                        clamp: function() {
                            var t = this.words,
                                s = this.sigBytes;
                            t[s >>> 2] &= 4294967295 << 32 - s % 4 * 8, t.length = e.ceil(s / 4)
                        },
                        clone: function() {
                            var e = l.clone.call(this);
                            return e.words = this.words.slice(0), e
                        },
                        random: function(e) {
                            for (var t = [], s = 0; s < e; s += 4) t.push(cryptoSecureRandomInt());
                            return new c.init(t, e)
                        }
                    }),
                    h = o.enc = {},
                    u = h.Hex = {
                        stringify: function(e) {
                            for (var t = e.words, s = e.sigBytes, i = [], n = 0; n < s; n++) {
                                var o = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                                i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16))
                            }
                            return i.join("")
                        },
                        parse: function(e) {
                            for (var t = e.length, s = [], i = 0; i < t; i += 2) s[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                            return new c.init(s, t / 2)
                        }
                    },
                    d = h.Latin1 = {
                        stringify: function(e) {
                            for (var t = e.words, s = e.sigBytes, i = [], n = 0; n < s; n++) {
                                var o = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                                i.push(String.fromCharCode(o))
                            }
                            return i.join("")
                        },
                        parse: function(e) {
                            for (var t = e.length, s = [], i = 0; i < t; i++) s[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                            return new c.init(s, t)
                        }
                    },
                    f = h.Utf8 = {
                        stringify: function(e) {
                            try {
                                return decodeURIComponent(escape(d.stringify(e)))
                            } catch (e) {
                                throw Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function(e) {
                            return d.parse(unescape(encodeURIComponent(e)))
                        }
                    },
                    p = a.BufferedBlockAlgorithm = l.extend({
                        reset: function() {
                            this._data = new c.init, this._nDataBytes = 0
                        },
                        _append: function(e) {
                            "string" == typeof e && (e = f.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                        },
                        _process: function(t) {
                            var s, i = this._data,
                                n = i.words,
                                o = i.sigBytes,
                                a = this.blockSize,
                                l = o / (4 * a),
                                h = (l = t ? e.ceil(l) : e.max((0 | l) - this._minBufferSize, 0)) * a,
                                u = e.min(4 * h, o);
                            if (h) {
                                for (var d = 0; d < h; d += a) this._doProcessBlock(n, d);
                                s = n.splice(0, h), i.sigBytes -= u
                            }
                            return new c.init(s, u)
                        },
                        clone: function() {
                            var e = l.clone.call(this);
                            return e._data = this._data.clone(), e
                        },
                        _minBufferSize: 0
                    });
                a.Hasher = p.extend({
                    cfg: l.extend(),
                    init: function(e) {
                        this.cfg = this.cfg.extend(e), this.reset()
                    },
                    reset: function() {
                        p.reset.call(this), this._doReset()
                    },
                    update: function(e) {
                        return this._append(e), this._process(), this
                    },
                    finalize: function(e) {
                        return e && this._append(e), this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function(e) {
                        return function(t, s) {
                            return new e.init(s).finalize(t)
                        }
                    },
                    _createHmacHelper: function(e) {
                        return function(t, s) {
                            return new g.HMAC.init(e, s).finalize(t)
                        }
                    }
                });
                var g = o.algo = {};
                return o
            }(Math)
        },
        76217: function(e, t, s) {
            var i, n;
            e.exports = (n = (i = s(84934)).lib.WordArray, i.enc.Base64 = {
                stringify: function(e) {
                    var t = e.words,
                        s = e.sigBytes,
                        i = this._map;
                    e.clamp();
                    for (var n = [], o = 0; o < s; o += 3)
                        for (var a = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, l = 0; l < 4 && o + .75 * l < s; l++) n.push(i.charAt(a >>> 6 * (3 - l) & 63));
                    var c = i.charAt(64);
                    if (c)
                        for (; n.length % 4;) n.push(c);
                    return n.join("")
                },
                parse: function(e) {
                    var t = e.length,
                        s = this._map,
                        i = this._reverseMap;
                    if (!i) {
                        i = this._reverseMap = [];
                        for (var o = 0; o < s.length; o++) i[s.charCodeAt(o)] = o
                    }
                    var a = s.charAt(64);
                    if (a) {
                        var l = e.indexOf(a); - 1 !== l && (t = l)
                    }
                    return function(e, t, s) {
                        for (var i = [], o = 0, a = 0; a < t; a++)
                            if (a % 4) {
                                var l = s[e.charCodeAt(a - 1)] << a % 4 * 2 | s[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
                                i[o >>> 2] |= l << 24 - o % 4 * 8, o++
                            }
                        return n.create(i, o)
                    }(e, t, i)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }, i.enc.Base64)
        },
        40932: function(e, t, s) {
            var i, n;
            e.exports = (n = (i = s(84934)).lib.WordArray, i.enc.Base64url = {
                stringify: function(e, t) {
                    void 0 === t && (t = !0);
                    var s = e.words,
                        i = e.sigBytes,
                        n = t ? this._safe_map : this._map;
                    e.clamp();
                    for (var o = [], a = 0; a < i; a += 3)
                        for (var l = (s[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (s[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | s[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, c = 0; c < 4 && a + .75 * c < i; c++) o.push(n.charAt(l >>> 6 * (3 - c) & 63));
                    var h = n.charAt(64);
                    if (h)
                        for (; o.length % 4;) o.push(h);
                    return o.join("")
                },
                parse: function(e, t) {
                    void 0 === t && (t = !0);
                    var s = e.length,
                        i = t ? this._safe_map : this._map,
                        o = this._reverseMap;
                    if (!o) {
                        o = this._reverseMap = [];
                        for (var a = 0; a < i.length; a++) o[i.charCodeAt(a)] = a
                    }
                    var l = i.charAt(64);
                    if (l) {
                        var c = e.indexOf(l); - 1 !== c && (s = c)
                    }
                    return function(e, t, s) {
                        for (var i = [], o = 0, a = 0; a < t; a++)
                            if (a % 4) {
                                var l = s[e.charCodeAt(a - 1)] << a % 4 * 2 | s[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
                                i[o >>> 2] |= l << 24 - o % 4 * 8, o++
                            }
                        return n.create(i, o)
                    }(e, s, o)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
            }, i.enc.Base64url)
        },
        16192: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), function() {
                var e = i.lib.WordArray,
                    t = i.enc;

                function swapEndian(e) {
                    return e << 8 & 4278255360 | e >>> 8 & 16711935
                }
                t.Utf16 = t.Utf16BE = {
                    stringify: function(e) {
                        for (var t = e.words, s = e.sigBytes, i = [], n = 0; n < s; n += 2) {
                            var o = t[n >>> 2] >>> 16 - n % 4 * 8 & 65535;
                            i.push(String.fromCharCode(o))
                        }
                        return i.join("")
                    },
                    parse: function(t) {
                        for (var s = t.length, i = [], n = 0; n < s; n++) i[n >>> 1] |= t.charCodeAt(n) << 16 - n % 2 * 16;
                        return e.create(i, 2 * s)
                    }
                }, t.Utf16LE = {
                    stringify: function(e) {
                        for (var t = e.words, s = e.sigBytes, i = [], n = 0; n < s; n += 2) {
                            var o = swapEndian(t[n >>> 2] >>> 16 - n % 4 * 8 & 65535);
                            i.push(String.fromCharCode(o))
                        }
                        return i.join("")
                    },
                    parse: function(t) {
                        for (var s = t.length, i = [], n = 0; n < s; n++) i[n >>> 1] |= swapEndian(t.charCodeAt(n) << 16 - n % 2 * 16);
                        return e.create(i, 2 * s)
                    }
                }
            }(), i.enc.Utf16)
        },
        28238: function(e, t, s) {
            var i, n, o, a, l, c, h;
            e.exports = (i = s(84934), s(84711), s(38879), o = (n = i.lib).Base, a = n.WordArray, c = (l = i.algo).MD5, h = l.EvpKDF = o.extend({
                cfg: o.extend({
                    keySize: 4,
                    hasher: c,
                    iterations: 1
                }),
                init: function(e) {
                    this.cfg = this.cfg.extend(e)
                },
                compute: function(e, t) {
                    for (var s, i = this.cfg, n = i.hasher.create(), o = a.create(), l = o.words, c = i.keySize, h = i.iterations; l.length < c;) {
                        s && n.update(s), s = n.update(e).finalize(t), n.reset();
                        for (var u = 1; u < h; u++) s = n.finalize(s), n.reset();
                        o.concat(s)
                    }
                    return o.sigBytes = 4 * c, o
                }
            }), i.EvpKDF = function(e, t, s) {
                return h.create(s).compute(e, t)
            }, i.EvpKDF)
        },
        74947: function(e, t, s) {
            var i, n, o;
            e.exports = (i = s(84934), s(68994), n = i.lib.CipherParams, o = i.enc.Hex, i.format.Hex = {
                stringify: function(e) {
                    return e.ciphertext.toString(o)
                },
                parse: function(e) {
                    var t = o.parse(e);
                    return n.create({
                        ciphertext: t
                    })
                }
            }, i.format.Hex)
        },
        38879: function(e, t, s) {
            var i, n, o;
            e.exports = void(n = (i = s(84934)).lib.Base, o = i.enc.Utf8, i.algo.HMAC = n.extend({
                init: function(e, t) {
                    e = this._hasher = new e.init, "string" == typeof t && (t = o.parse(t));
                    var s = e.blockSize,
                        i = 4 * s;
                    t.sigBytes > i && (t = e.finalize(t)), t.clamp();
                    for (var n = this._oKey = t.clone(), a = this._iKey = t.clone(), l = n.words, c = a.words, h = 0; h < s; h++) l[h] ^= 1549556828, c[h] ^= 909522486;
                    n.sigBytes = a.sigBytes = i, this.reset()
                },
                reset: function() {
                    var e = this._hasher;
                    e.reset(), e.update(this._iKey)
                },
                update: function(e) {
                    return this._hasher.update(e), this
                },
                finalize: function(e) {
                    var t = this._hasher,
                        s = t.finalize(e);
                    return t.reset(), t.finalize(this._oKey.clone().concat(s))
                }
            }))
        },
        44155: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), s(24811), s(8003), s(16192), s(76217), s(40932), s(74850), s(84711), s(54519), s(4102), s(45727), s(5797), s(66517), s(16255), s(38879), s(96727), s(28238), s(68994), s(68940), s(676), s(33805), s(23527), s(35265), s(49015), s(20991), s(62916), s(16608), s(65791), s(74947), s(85572), s(84299), s(1692), s(54080), s(80771), s(79488), i)
        },
        8003: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), function() {
                if ("function" == typeof ArrayBuffer) {
                    var e = i.lib.WordArray,
                        t = e.init;
                    (e.init = function(e) {
                        if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
                            for (var s = e.byteLength, i = [], n = 0; n < s; n++) i[n >>> 2] |= e[n] << 24 - n % 4 * 8;
                            t.call(this, i, s)
                        } else t.apply(this, arguments)
                    }).prototype = e
                }
            }(), i.lib.WordArray)
        },
        74850: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), function(e) {
                var t = i.lib,
                    s = t.WordArray,
                    n = t.Hasher,
                    o = i.algo,
                    a = [];
                ! function() {
                    for (var t = 0; t < 64; t++) a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
                }();
                var l = o.MD5 = n.extend({
                    _doReset: function() {
                        this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function(e, t) {
                        for (var s = 0; s < 16; s++) {
                            var i = t + s,
                                n = e[i];
                            e[i] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360
                        }
                        var o = this._hash.words,
                            l = e[t + 0],
                            c = e[t + 1],
                            h = e[t + 2],
                            u = e[t + 3],
                            d = e[t + 4],
                            f = e[t + 5],
                            p = e[t + 6],
                            g = e[t + 7],
                            y = e[t + 8],
                            m = e[t + 9],
                            v = e[t + 10],
                            _ = e[t + 11],
                            b = e[t + 12],
                            w = e[t + 13],
                            k = e[t + 14],
                            A = e[t + 15],
                            S = o[0],
                            x = o[1],
                            E = o[2],
                            T = o[3];
                        S = FF(S, x, E, T, l, 7, a[0]), T = FF(T, S, x, E, c, 12, a[1]), E = FF(E, T, S, x, h, 17, a[2]), x = FF(x, E, T, S, u, 22, a[3]), S = FF(S, x, E, T, d, 7, a[4]), T = FF(T, S, x, E, f, 12, a[5]), E = FF(E, T, S, x, p, 17, a[6]), x = FF(x, E, T, S, g, 22, a[7]), S = FF(S, x, E, T, y, 7, a[8]), T = FF(T, S, x, E, m, 12, a[9]), E = FF(E, T, S, x, v, 17, a[10]), x = FF(x, E, T, S, _, 22, a[11]), S = FF(S, x, E, T, b, 7, a[12]), T = FF(T, S, x, E, w, 12, a[13]), E = FF(E, T, S, x, k, 17, a[14]), x = FF(x, E, T, S, A, 22, a[15]), S = GG(S, x, E, T, c, 5, a[16]), T = GG(T, S, x, E, p, 9, a[17]), E = GG(E, T, S, x, _, 14, a[18]), x = GG(x, E, T, S, l, 20, a[19]), S = GG(S, x, E, T, f, 5, a[20]), T = GG(T, S, x, E, v, 9, a[21]), E = GG(E, T, S, x, A, 14, a[22]), x = GG(x, E, T, S, d, 20, a[23]), S = GG(S, x, E, T, m, 5, a[24]), T = GG(T, S, x, E, k, 9, a[25]), E = GG(E, T, S, x, u, 14, a[26]), x = GG(x, E, T, S, y, 20, a[27]), S = GG(S, x, E, T, w, 5, a[28]), T = GG(T, S, x, E, h, 9, a[29]), E = GG(E, T, S, x, g, 14, a[30]), x = GG(x, E, T, S, b, 20, a[31]), S = HH(S, x, E, T, f, 4, a[32]), T = HH(T, S, x, E, y, 11, a[33]), E = HH(E, T, S, x, _, 16, a[34]), x = HH(x, E, T, S, k, 23, a[35]), S = HH(S, x, E, T, c, 4, a[36]), T = HH(T, S, x, E, d, 11, a[37]), E = HH(E, T, S, x, g, 16, a[38]), x = HH(x, E, T, S, v, 23, a[39]), S = HH(S, x, E, T, w, 4, a[40]), T = HH(T, S, x, E, l, 11, a[41]), E = HH(E, T, S, x, u, 16, a[42]), x = HH(x, E, T, S, p, 23, a[43]), S = HH(S, x, E, T, m, 4, a[44]), T = HH(T, S, x, E, b, 11, a[45]), E = HH(E, T, S, x, A, 16, a[46]), x = HH(x, E, T, S, h, 23, a[47]), S = II(S, x, E, T, l, 6, a[48]), T = II(T, S, x, E, g, 10, a[49]), E = II(E, T, S, x, k, 15, a[50]), x = II(x, E, T, S, f, 21, a[51]), S = II(S, x, E, T, b, 6, a[52]), T = II(T, S, x, E, u, 10, a[53]), E = II(E, T, S, x, v, 15, a[54]), x = II(x, E, T, S, c, 21, a[55]), S = II(S, x, E, T, y, 6, a[56]), T = II(T, S, x, E, A, 10, a[57]), E = II(E, T, S, x, p, 15, a[58]), x = II(x, E, T, S, w, 21, a[59]), S = II(S, x, E, T, d, 6, a[60]), T = II(T, S, x, E, _, 10, a[61]), E = II(E, T, S, x, h, 15, a[62]), x = II(x, E, T, S, m, 21, a[63]), o[0] = o[0] + S | 0, o[1] = o[1] + x | 0, o[2] = o[2] + E | 0, o[3] = o[3] + T | 0
                    },
                    _doFinalize: function() {
                        var t = this._data,
                            s = t.words,
                            i = 8 * this._nDataBytes,
                            n = 8 * t.sigBytes;
                        s[n >>> 5] |= 128 << 24 - n % 32;
                        var o = e.floor(i / 4294967296);
                        s[(n + 64 >>> 9 << 4) + 15] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, s[(n + 64 >>> 9 << 4) + 14] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360, t.sigBytes = (s.length + 1) * 4, this._process();
                        for (var a = this._hash, l = a.words, c = 0; c < 4; c++) {
                            var h = l[c];
                            l[c] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360
                        }
                        return a
                    },
                    clone: function() {
                        var e = n.clone.call(this);
                        return e._hash = this._hash.clone(), e
                    }
                });

                function FF(e, t, s, i, n, o, a) {
                    var l = e + (t & s | ~t & i) + n + a;
                    return (l << o | l >>> 32 - o) + t
                }

                function GG(e, t, s, i, n, o, a) {
                    var l = e + (t & i | s & ~i) + n + a;
                    return (l << o | l >>> 32 - o) + t
                }

                function HH(e, t, s, i, n, o, a) {
                    var l = e + (t ^ s ^ i) + n + a;
                    return (l << o | l >>> 32 - o) + t
                }

                function II(e, t, s, i, n, o, a) {
                    var l = e + (s ^ (t | ~i)) + n + a;
                    return (l << o | l >>> 32 - o) + t
                }
                i.MD5 = n._createHelper(l), i.HmacMD5 = n._createHmacHelper(l)
            }(Math), i.MD5)
        },
        68940: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), s(68994), i.mode.CFB = function() {
                var e = i.lib.BlockCipherMode.extend();

                function generateKeystreamAndEncrypt(e, t, s, i) {
                    var n, o = this._iv;
                    o ? (n = o.slice(0), this._iv = void 0) : n = this._prevBlock, i.encryptBlock(n, 0);
                    for (var a = 0; a < s; a++) e[t + a] ^= n[a]
                }
                return e.Encryptor = e.extend({
                    processBlock: function(e, t) {
                        var s = this._cipher,
                            i = s.blockSize;
                        generateKeystreamAndEncrypt.call(this, e, t, i, s), this._prevBlock = e.slice(t, t + i)
                    }
                }), e.Decryptor = e.extend({
                    processBlock: function(e, t) {
                        var s = this._cipher,
                            i = s.blockSize,
                            n = e.slice(t, t + i);
                        generateKeystreamAndEncrypt.call(this, e, t, i, s), this._prevBlock = n
                    }
                }), e
            }(), i.mode.CFB)
        },
        33805: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), s(68994),
                /** @preserve
                 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
                 * derived from CryptoJS.mode.CTR
                 * Jan Hruby jhruby.web@gmail.com
                 */
                i.mode.CTRGladman = function() {
                    var e = i.lib.BlockCipherMode.extend();

                    function incWord(e) {
                        if ((e >> 24 & 255) == 255) {
                            var t = e >> 16 & 255,
                                s = e >> 8 & 255,
                                i = 255 & e;
                            255 === t ? (t = 0, 255 === s ? (s = 0, 255 === i ? i = 0 : ++i) : ++s) : ++t, e = 0 + (t << 16) + (s << 8) + i
                        } else e += 16777216;
                        return e
                    }
                    var t = e.Encryptor = e.extend({
                        processBlock: function(e, t) {
                            var s, i = this._cipher,
                                n = i.blockSize,
                                o = this._iv,
                                a = this._counter;
                            o && (a = this._counter = o.slice(0), this._iv = void 0), 0 === ((s = a)[0] = incWord(s[0])) && (s[1] = incWord(s[1]));
                            var l = a.slice(0);
                            i.encryptBlock(l, 0);
                            for (var c = 0; c < n; c++) e[t + c] ^= l[c]
                        }
                    });
                    return e.Decryptor = t, e
                }(), i.mode.CTRGladman)
        },
        676: function(e, t, s) {
            var i, n, o;
            e.exports = (i = s(84934), s(68994), i.mode.CTR = (o = (n = i.lib.BlockCipherMode.extend()).Encryptor = n.extend({
                processBlock: function(e, t) {
                    var s = this._cipher,
                        i = s.blockSize,
                        n = this._iv,
                        o = this._counter;
                    n && (o = this._counter = n.slice(0), this._iv = void 0);
                    var a = o.slice(0);
                    s.encryptBlock(a, 0), o[i - 1] = o[i - 1] + 1 | 0;
                    for (var l = 0; l < i; l++) e[t + l] ^= a[l]
                }
            }), n.Decryptor = o, n), i.mode.CTR)
        },
        35265: function(e, t, s) {
            var i, n;
            e.exports = (i = s(84934), s(68994), i.mode.ECB = ((n = i.lib.BlockCipherMode.extend()).Encryptor = n.extend({
                processBlock: function(e, t) {
                    this._cipher.encryptBlock(e, t)
                }
            }), n.Decryptor = n.extend({
                processBlock: function(e, t) {
                    this._cipher.decryptBlock(e, t)
                }
            }), n), i.mode.ECB)
        },
        23527: function(e, t, s) {
            var i, n, o;
            e.exports = (i = s(84934), s(68994), i.mode.OFB = (o = (n = i.lib.BlockCipherMode.extend()).Encryptor = n.extend({
                processBlock: function(e, t) {
                    var s = this._cipher,
                        i = s.blockSize,
                        n = this._iv,
                        o = this._keystream;
                    n && (o = this._keystream = n.slice(0), this._iv = void 0), s.encryptBlock(o, 0);
                    for (var a = 0; a < i; a++) e[t + a] ^= o[a]
                }
            }), n.Decryptor = o, n), i.mode.OFB)
        },
        49015: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), s(68994), i.pad.AnsiX923 = {
                pad: function(e, t) {
                    var s = e.sigBytes,
                        i = 4 * t,
                        n = i - s % i,
                        o = s + n - 1;
                    e.clamp(), e.words[o >>> 2] |= n << 24 - o % 4 * 8, e.sigBytes += n
                },
                unpad: function(e) {
                    var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                    e.sigBytes -= t
                }
            }, i.pad.Ansix923)
        },
        20991: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), s(68994), i.pad.Iso10126 = {
                pad: function(e, t) {
                    var s = 4 * t,
                        n = s - e.sigBytes % s;
                    e.concat(i.lib.WordArray.random(n - 1)).concat(i.lib.WordArray.create([n << 24], 1))
                },
                unpad: function(e) {
                    var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                    e.sigBytes -= t
                }
            }, i.pad.Iso10126)
        },
        62916: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), s(68994), i.pad.Iso97971 = {
                pad: function(e, t) {
                    e.concat(i.lib.WordArray.create([2147483648], 1)), i.pad.ZeroPadding.pad(e, t)
                },
                unpad: function(e) {
                    i.pad.ZeroPadding.unpad(e), e.sigBytes--
                }
            }, i.pad.Iso97971)
        },
        65791: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), s(68994), i.pad.NoPadding = {
                pad: function() {},
                unpad: function() {}
            }, i.pad.NoPadding)
        },
        16608: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), s(68994), i.pad.ZeroPadding = {
                pad: function(e, t) {
                    var s = 4 * t;
                    e.clamp(), e.sigBytes += s - (e.sigBytes % s || s)
                },
                unpad: function(e) {
                    for (var t = e.words, s = e.sigBytes - 1, s = e.sigBytes - 1; s >= 0; s--)
                        if (t[s >>> 2] >>> 24 - s % 4 * 8 & 255) {
                            e.sigBytes = s + 1;
                            break
                        }
                }
            }, i.pad.ZeroPadding)
        },
        96727: function(e, t, s) {
            var i, n, o, a, l, c, h, u;
            e.exports = (i = s(84934), s(54519), s(38879), o = (n = i.lib).Base, a = n.WordArray, c = (l = i.algo).SHA256, h = l.HMAC, u = l.PBKDF2 = o.extend({
                cfg: o.extend({
                    keySize: 4,
                    hasher: c,
                    iterations: 25e4
                }),
                init: function(e) {
                    this.cfg = this.cfg.extend(e)
                },
                compute: function(e, t) {
                    for (var s = this.cfg, i = h.create(s.hasher, e), n = a.create(), o = a.create([1]), l = n.words, c = o.words, u = s.keySize, d = s.iterations; l.length < u;) {
                        var f = i.update(t).finalize(o);
                        i.reset();
                        for (var p = f.words, g = p.length, y = f, m = 1; m < d; m++) {
                            y = i.finalize(y), i.reset();
                            for (var v = y.words, _ = 0; _ < g; _++) p[_] ^= v[_]
                        }
                        n.concat(f), c[0]++
                    }
                    return n.sigBytes = 4 * u, n
                }
            }), i.PBKDF2 = function(e, t, s) {
                return u.create(s).compute(e, t)
            }, i.PBKDF2)
        },
        80771: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), s(76217), s(74850), s(28238), s(68994), function() {
                var e = i.lib.StreamCipher,
                    t = i.algo,
                    s = [],
                    n = [],
                    o = [],
                    a = t.RabbitLegacy = e.extend({
                        _doReset: function() {
                            var e = this._key.words,
                                t = this.cfg.iv,
                                s = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16],
                                i = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];
                            this._b = 0;
                            for (var n = 0; n < 4; n++) nextState.call(this);
                            for (var n = 0; n < 8; n++) i[n] ^= s[n + 4 & 7];
                            if (t) {
                                var o = t.words,
                                    a = o[0],
                                    l = o[1],
                                    c = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360,
                                    h = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360,
                                    u = c >>> 16 | 4294901760 & h,
                                    d = h << 16 | 65535 & c;
                                i[0] ^= c, i[1] ^= u, i[2] ^= h, i[3] ^= d, i[4] ^= c, i[5] ^= u, i[6] ^= h, i[7] ^= d;
                                for (var n = 0; n < 4; n++) nextState.call(this)
                            }
                        },
                        _doProcessBlock: function(e, t) {
                            var i = this._X;
                            nextState.call(this), s[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, s[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, s[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, s[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
                            for (var n = 0; n < 4; n++) s[n] = (s[n] << 8 | s[n] >>> 24) & 16711935 | (s[n] << 24 | s[n] >>> 8) & 4278255360, e[t + n] ^= s[n]
                        },
                        blockSize: 4,
                        ivSize: 2
                    });

                function nextState() {
                    for (var e = this._X, t = this._C, s = 0; s < 8; s++) n[s] = t[s];
                    t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < n[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < n[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < n[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < n[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < n[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < n[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < n[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < n[7] >>> 0 ? 1 : 0;
                    for (var s = 0; s < 8; s++) {
                        var i = e[s] + t[s],
                            a = 65535 & i,
                            l = i >>> 16,
                            c = ((a * a >>> 17) + a * l >>> 15) + l * l,
                            h = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
                        o[s] = c ^ h
                    }
                    e[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, e[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, e[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, e[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, e[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, e[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, e[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, e[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0
                }
                i.RabbitLegacy = e._createHelper(a)
            }(), i.RabbitLegacy)
        },
        54080: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), s(76217), s(74850), s(28238), s(68994), function() {
                var e = i.lib.StreamCipher,
                    t = i.algo,
                    s = [],
                    n = [],
                    o = [],
                    a = t.Rabbit = e.extend({
                        _doReset: function() {
                            for (var e = this._key.words, t = this.cfg.iv, s = 0; s < 4; s++) e[s] = (e[s] << 8 | e[s] >>> 24) & 16711935 | (e[s] << 24 | e[s] >>> 8) & 4278255360;
                            var i = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16],
                                n = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];
                            this._b = 0;
                            for (var s = 0; s < 4; s++) nextState.call(this);
                            for (var s = 0; s < 8; s++) n[s] ^= i[s + 4 & 7];
                            if (t) {
                                var o = t.words,
                                    a = o[0],
                                    l = o[1],
                                    c = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360,
                                    h = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360,
                                    u = c >>> 16 | 4294901760 & h,
                                    d = h << 16 | 65535 & c;
                                n[0] ^= c, n[1] ^= u, n[2] ^= h, n[3] ^= d, n[4] ^= c, n[5] ^= u, n[6] ^= h, n[7] ^= d;
                                for (var s = 0; s < 4; s++) nextState.call(this)
                            }
                        },
                        _doProcessBlock: function(e, t) {
                            var i = this._X;
                            nextState.call(this), s[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16, s[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16, s[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16, s[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
                            for (var n = 0; n < 4; n++) s[n] = (s[n] << 8 | s[n] >>> 24) & 16711935 | (s[n] << 24 | s[n] >>> 8) & 4278255360, e[t + n] ^= s[n]
                        },
                        blockSize: 4,
                        ivSize: 2
                    });

                function nextState() {
                    for (var e = this._X, t = this._C, s = 0; s < 8; s++) n[s] = t[s];
                    t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < n[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < n[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < n[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < n[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < n[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < n[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < n[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < n[7] >>> 0 ? 1 : 0;
                    for (var s = 0; s < 8; s++) {
                        var i = e[s] + t[s],
                            a = 65535 & i,
                            l = i >>> 16,
                            c = ((a * a >>> 17) + a * l >>> 15) + l * l,
                            h = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
                        o[s] = c ^ h
                    }
                    e[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, e[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, e[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, e[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, e[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, e[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, e[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, e[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0
                }
                i.Rabbit = e._createHelper(a)
            }(), i.Rabbit)
        },
        1692: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), s(76217), s(74850), s(28238), s(68994), function() {
                var e = i.lib.StreamCipher,
                    t = i.algo,
                    s = t.RC4 = e.extend({
                        _doReset: function() {
                            for (var e = this._key, t = e.words, s = e.sigBytes, i = this._S = [], n = 0; n < 256; n++) i[n] = n;
                            for (var n = 0, o = 0; n < 256; n++) {
                                var a = n % s,
                                    l = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                                o = (o + i[n] + l) % 256;
                                var c = i[n];
                                i[n] = i[o], i[o] = c
                            }
                            this._i = this._j = 0
                        },
                        _doProcessBlock: function(e, t) {
                            e[t] ^= generateKeystreamWord.call(this)
                        },
                        keySize: 8,
                        ivSize: 0
                    });

                function generateKeystreamWord() {
                    for (var e = this._S, t = this._i, s = this._j, i = 0, n = 0; n < 4; n++) {
                        s = (s + e[t = (t + 1) % 256]) % 256;
                        var o = e[t];
                        e[t] = e[s], e[s] = o, i |= e[(e[t] + e[s]) % 256] << 24 - 8 * n
                    }
                    return this._i = t, this._j = s, i
                }
                i.RC4 = e._createHelper(s);
                var n = t.RC4Drop = s.extend({
                    cfg: s.cfg.extend({
                        drop: 192
                    }),
                    _doReset: function() {
                        s._doReset.call(this);
                        for (var e = this.cfg.drop; e > 0; e--) generateKeystreamWord.call(this)
                    }
                });
                i.RC4Drop = e._createHelper(n)
            }(), i.RC4)
        },
        16255: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), function(e) {
                var t = i.lib,
                    s = t.WordArray,
                    n = t.Hasher,
                    o = i.algo,
                    a = s.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
                    l = s.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
                    c = s.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
                    h = s.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
                    u = s.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
                    d = s.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
                    f = o.RIPEMD160 = n.extend({
                        _doReset: function() {
                            this._hash = s.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                        },
                        _doProcessBlock: function(e, t) {
                            for (var s, i, n, o, f, p, g, y, m, v, _, b, w, k, A, S, x, E, T, C, R, P, j, O, B, I, $, L, W, z, D, N, H, U, M, G, X, K, V, J, Z, Y = 0; Y < 16; Y++) {
                                var Q = t + Y,
                                    ee = e[Q];
                                e[Q] = (ee << 8 | ee >>> 24) & 16711935 | (ee << 24 | ee >>> 8) & 4278255360
                            }
                            var et = this._hash.words,
                                er = u.words,
                                es = d.words,
                                ei = a.words,
                                en = l.words,
                                eo = c.words,
                                ea = h.words;
                            G = D = et[0], X = N = et[1], K = H = et[2], V = U = et[3], J = M = et[4];
                            for (var Y = 0; Y < 80; Y += 1) Z = D + e[t + ei[Y]] | 0, Y < 16 ? Z += (N ^ H ^ U) + er[0] : Y < 32 ? Z += ((o = N) & H | ~o & U) + er[1] : Y < 48 ? Z += ((N | ~H) ^ U) + er[2] : Y < 64 ? Z += (v = N, _ = H, (v & (b = U) | _ & ~b) + er[3]) : Z += (N ^ (H | ~U)) + er[4], Z |= 0, Z = (Z = rotl(Z, eo[Y])) + M | 0, D = M, M = U, U = rotl(H, 10), H = N, N = Z, Z = G + e[t + en[Y]] | 0, Y < 16 ? Z += (X ^ (K | ~V)) + es[0] : Y < 32 ? Z += (T = X, C = K, (T & (R = V) | C & ~R) + es[1]) : Y < 48 ? Z += ((X | ~K) ^ V) + es[2] : Y < 64 ? Z += ((B = X) & K | ~B & V) + es[3] : Z += (X ^ K ^ V) + es[4], Z |= 0, Z = (Z = rotl(Z, ea[Y])) + J | 0, G = J, J = V, V = rotl(K, 10), K = X, X = Z;
                            Z = et[1] + H + V | 0, et[1] = et[2] + U + J | 0, et[2] = et[3] + M + G | 0, et[3] = et[4] + D + X | 0, et[4] = et[0] + N + K | 0, et[0] = Z
                        },
                        _doFinalize: function() {
                            var e = this._data,
                                t = e.words,
                                s = 8 * this._nDataBytes,
                                i = 8 * e.sigBytes;
                            t[i >>> 5] |= 128 << 24 - i % 32, t[(i + 64 >>> 9 << 4) + 14] = (s << 8 | s >>> 24) & 16711935 | (s << 24 | s >>> 8) & 4278255360, e.sigBytes = (t.length + 1) * 4, this._process();
                            for (var n = this._hash, o = n.words, a = 0; a < 5; a++) {
                                var l = o[a];
                                o[a] = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360
                            }
                            return n
                        },
                        clone: function() {
                            var e = n.clone.call(this);
                            return e._hash = this._hash.clone(), e
                        }
                    });

                function rotl(e, t) {
                    return e << t | e >>> 32 - t
                }
                i.RIPEMD160 = n._createHelper(f), i.HmacRIPEMD160 = n._createHmacHelper(f)
            }(Math), i.RIPEMD160)
        },
        84711: function(e, t, s) {
            var i, n, o, a, l, c, h;
            e.exports = (o = (n = (i = s(84934)).lib).WordArray, a = n.Hasher, l = i.algo, c = [], h = l.SHA1 = a.extend({
                _doReset: function() {
                    this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                },
                _doProcessBlock: function(e, t) {
                    for (var s = this._hash.words, i = s[0], n = s[1], o = s[2], a = s[3], l = s[4], h = 0; h < 80; h++) {
                        if (h < 16) c[h] = 0 | e[t + h];
                        else {
                            var u = c[h - 3] ^ c[h - 8] ^ c[h - 14] ^ c[h - 16];
                            c[h] = u << 1 | u >>> 31
                        }
                        var d = (i << 5 | i >>> 27) + l + c[h];
                        h < 20 ? d += (n & o | ~n & a) + 1518500249 : h < 40 ? d += (n ^ o ^ a) + 1859775393 : h < 60 ? d += (n & o | n & a | o & a) - 1894007588 : d += (n ^ o ^ a) - 899497514, l = a, a = o, o = n << 30 | n >>> 2, n = i, i = d
                    }
                    s[0] = s[0] + i | 0, s[1] = s[1] + n | 0, s[2] = s[2] + o | 0, s[3] = s[3] + a | 0, s[4] = s[4] + l | 0
                },
                _doFinalize: function() {
                    var e = this._data,
                        t = e.words,
                        s = 8 * this._nDataBytes,
                        i = 8 * e.sigBytes;
                    return t[i >>> 5] |= 128 << 24 - i % 32, t[(i + 64 >>> 9 << 4) + 14] = Math.floor(s / 4294967296), t[(i + 64 >>> 9 << 4) + 15] = s, e.sigBytes = 4 * t.length, this._process(), this._hash
                },
                clone: function() {
                    var e = a.clone.call(this);
                    return e._hash = this._hash.clone(), e
                }
            }), i.SHA1 = a._createHelper(h), i.HmacSHA1 = a._createHmacHelper(h), i.SHA1)
        },
        4102: function(e, t, s) {
            var i, n, o, a, l;
            e.exports = (i = s(84934), s(54519), n = i.lib.WordArray, a = (o = i.algo).SHA256, l = o.SHA224 = a.extend({
                _doReset: function() {
                    this._hash = new n.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
                },
                _doFinalize: function() {
                    var e = a._doFinalize.call(this);
                    return e.sigBytes -= 4, e
                }
            }), i.SHA224 = a._createHelper(l), i.HmacSHA224 = a._createHmacHelper(l), i.SHA224)
        },
        54519: function(e, t, s) {
            var i, n, o, a, l, c, h, u, d, f;
            e.exports = (i = s(84934), n = Math, a = (o = i.lib).WordArray, l = o.Hasher, c = i.algo, h = [], u = [], function() {
                function getFractionalBits(e) {
                    return (e - (0 | e)) * 4294967296 | 0
                }
                for (var e = 2, t = 0; t < 64;)(function(e) {
                    for (var t = n.sqrt(e), s = 2; s <= t; s++)
                        if (!(e % s)) return !1;
                    return !0
                })(e) && (t < 8 && (h[t] = getFractionalBits(n.pow(e, .5))), u[t] = getFractionalBits(n.pow(e, 1 / 3)), t++), e++
            }(), d = [], f = c.SHA256 = l.extend({
                _doReset: function() {
                    this._hash = new a.init(h.slice(0))
                },
                _doProcessBlock: function(e, t) {
                    for (var s = this._hash.words, i = s[0], n = s[1], o = s[2], a = s[3], l = s[4], c = s[5], h = s[6], f = s[7], p = 0; p < 64; p++) {
                        if (p < 16) d[p] = 0 | e[t + p];
                        else {
                            var g = d[p - 15],
                                y = (g << 25 | g >>> 7) ^ (g << 14 | g >>> 18) ^ g >>> 3,
                                m = d[p - 2],
                                v = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                            d[p] = y + d[p - 7] + v + d[p - 16]
                        }
                        var _ = l & c ^ ~l & h,
                            b = i & n ^ i & o ^ n & o,
                            w = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22),
                            k = f + ((l << 26 | l >>> 6) ^ (l << 21 | l >>> 11) ^ (l << 7 | l >>> 25)) + _ + u[p] + d[p],
                            A = w + b;
                        f = h, h = c, c = l, l = a + k | 0, a = o, o = n, n = i, i = k + A | 0
                    }
                    s[0] = s[0] + i | 0, s[1] = s[1] + n | 0, s[2] = s[2] + o | 0, s[3] = s[3] + a | 0, s[4] = s[4] + l | 0, s[5] = s[5] + c | 0, s[6] = s[6] + h | 0, s[7] = s[7] + f | 0
                },
                _doFinalize: function() {
                    var e = this._data,
                        t = e.words,
                        s = 8 * this._nDataBytes,
                        i = 8 * e.sigBytes;
                    return t[i >>> 5] |= 128 << 24 - i % 32, t[(i + 64 >>> 9 << 4) + 14] = n.floor(s / 4294967296), t[(i + 64 >>> 9 << 4) + 15] = s, e.sigBytes = 4 * t.length, this._process(), this._hash
                },
                clone: function() {
                    var e = l.clone.call(this);
                    return e._hash = this._hash.clone(), e
                }
            }), i.SHA256 = l._createHelper(f), i.HmacSHA256 = l._createHmacHelper(f), i.SHA256)
        },
        66517: function(e, t, s) {
            var i, n, o, a, l, c, h, u, d, f, p, g;
            e.exports = (i = s(84934), s(24811), n = Math, a = (o = i.lib).WordArray, l = o.Hasher, c = i.x64.Word, h = i.algo, u = [], d = [], f = [], function() {
                for (var e = 1, t = 0, s = 0; s < 24; s++) {
                    u[e + 5 * t] = (s + 1) * (s + 2) / 2 % 64;
                    var i = t % 5,
                        n = (2 * e + 3 * t) % 5;
                    e = i, t = n
                }
                for (var e = 0; e < 5; e++)
                    for (var t = 0; t < 5; t++) d[e + 5 * t] = t + (2 * e + 3 * t) % 5 * 5;
                for (var o = 1, a = 0; a < 24; a++) {
                    for (var l = 0, h = 0, p = 0; p < 7; p++) {
                        if (1 & o) {
                            var g = (1 << p) - 1;
                            g < 32 ? h ^= 1 << g : l ^= 1 << g - 32
                        }
                        128 & o ? o = o << 1 ^ 113 : o <<= 1
                    }
                    f[a] = c.create(l, h)
                }
            }(), p = [], function() {
                for (var e = 0; e < 25; e++) p[e] = c.create()
            }(), g = h.SHA3 = l.extend({
                cfg: l.cfg.extend({
                    outputLength: 512
                }),
                _doReset: function() {
                    for (var e = this._state = [], t = 0; t < 25; t++) e[t] = new c.init;
                    this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
                },
                _doProcessBlock: function(e, t) {
                    for (var s = this._state, i = this.blockSize / 2, n = 0; n < i; n++) {
                        var o = e[t + 2 * n],
                            a = e[t + 2 * n + 1];
                        o = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, a = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
                        var l = s[n];
                        l.high ^= a, l.low ^= o
                    }
                    for (var c = 0; c < 24; c++) {
                        for (var h = 0; h < 5; h++) {
                            for (var g = 0, y = 0, m = 0; m < 5; m++) {
                                var l = s[h + 5 * m];
                                g ^= l.high, y ^= l.low
                            }
                            var v = p[h];
                            v.high = g, v.low = y
                        }
                        for (var h = 0; h < 5; h++)
                            for (var _ = p[(h + 4) % 5], b = p[(h + 1) % 5], w = b.high, k = b.low, g = _.high ^ (w << 1 | k >>> 31), y = _.low ^ (k << 1 | w >>> 31), m = 0; m < 5; m++) {
                                var l = s[h + 5 * m];
                                l.high ^= g, l.low ^= y
                            }
                        for (var A = 1; A < 25; A++) {
                            var g, y, l = s[A],
                                S = l.high,
                                x = l.low,
                                E = u[A];
                            E < 32 ? (g = S << E | x >>> 32 - E, y = x << E | S >>> 32 - E) : (g = x << E - 32 | S >>> 64 - E, y = S << E - 32 | x >>> 64 - E);
                            var T = p[d[A]];
                            T.high = g, T.low = y
                        }
                        var C = p[0],
                            R = s[0];
                        C.high = R.high, C.low = R.low;
                        for (var h = 0; h < 5; h++)
                            for (var m = 0; m < 5; m++) {
                                var A = h + 5 * m,
                                    l = s[A],
                                    P = p[A],
                                    j = p[(h + 1) % 5 + 5 * m],
                                    O = p[(h + 2) % 5 + 5 * m];
                                l.high = P.high ^ ~j.high & O.high, l.low = P.low ^ ~j.low & O.low
                            }
                        var l = s[0],
                            B = f[c];
                        l.high ^= B.high, l.low ^= B.low
                    }
                },
                _doFinalize: function() {
                    var e = this._data,
                        t = e.words;
                    this._nDataBytes;
                    var s = 8 * e.sigBytes,
                        i = 32 * this.blockSize;
                    t[s >>> 5] |= 1 << 24 - s % 32, t[(n.ceil((s + 1) / i) * i >>> 5) - 1] |= 128, e.sigBytes = 4 * t.length, this._process();
                    for (var o = this._state, l = this.cfg.outputLength / 8, c = l / 8, h = [], u = 0; u < c; u++) {
                        var d = o[u],
                            f = d.high,
                            p = d.low;
                        f = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360, p = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360, h.push(p), h.push(f)
                    }
                    return new a.init(h, l)
                },
                clone: function() {
                    for (var e = l.clone.call(this), t = e._state = this._state.slice(0), s = 0; s < 25; s++) t[s] = t[s].clone();
                    return e
                }
            }), i.SHA3 = l._createHelper(g), i.HmacSHA3 = l._createHmacHelper(g), i.SHA3)
        },
        5797: function(e, t, s) {
            var i, n, o, a, l, c, h;
            e.exports = (i = s(84934), s(24811), s(45727), o = (n = i.x64).Word, a = n.WordArray, c = (l = i.algo).SHA512, h = l.SHA384 = c.extend({
                _doReset: function() {
                    this._hash = new a.init([new o.init(3418070365, 3238371032), new o.init(1654270250, 914150663), new o.init(2438529370, 812702999), new o.init(355462360, 4144912697), new o.init(1731405415, 4290775857), new o.init(2394180231, 1750603025), new o.init(3675008525, 1694076839), new o.init(1203062813, 3204075428)])
                },
                _doFinalize: function() {
                    var e = c._doFinalize.call(this);
                    return e.sigBytes -= 16, e
                }
            }), i.SHA384 = c._createHelper(h), i.HmacSHA384 = c._createHmacHelper(h), i.SHA384)
        },
        45727: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), s(24811), function() {
                var e = i.lib.Hasher,
                    t = i.x64,
                    s = t.Word,
                    n = t.WordArray,
                    o = i.algo;

                function X64Word_create() {
                    return s.create.apply(s, arguments)
                }
                var a = [X64Word_create(1116352408, 3609767458), X64Word_create(1899447441, 602891725), X64Word_create(3049323471, 3964484399), X64Word_create(3921009573, 2173295548), X64Word_create(961987163, 4081628472), X64Word_create(1508970993, 3053834265), X64Word_create(2453635748, 2937671579), X64Word_create(2870763221, 3664609560), X64Word_create(3624381080, 2734883394), X64Word_create(310598401, 1164996542), X64Word_create(607225278, 1323610764), X64Word_create(1426881987, 3590304994), X64Word_create(1925078388, 4068182383), X64Word_create(2162078206, 991336113), X64Word_create(2614888103, 633803317), X64Word_create(3248222580, 3479774868), X64Word_create(3835390401, 2666613458), X64Word_create(4022224774, 944711139), X64Word_create(264347078, 2341262773), X64Word_create(604807628, 2007800933), X64Word_create(770255983, 1495990901), X64Word_create(1249150122, 1856431235), X64Word_create(1555081692, 3175218132), X64Word_create(1996064986, 2198950837), X64Word_create(2554220882, 3999719339), X64Word_create(2821834349, 766784016), X64Word_create(2952996808, 2566594879), X64Word_create(3210313671, 3203337956), X64Word_create(3336571891, 1034457026), X64Word_create(3584528711, 2466948901), X64Word_create(113926993, 3758326383), X64Word_create(338241895, 168717936), X64Word_create(666307205, 1188179964), X64Word_create(773529912, 1546045734), X64Word_create(1294757372, 1522805485), X64Word_create(1396182291, 2643833823), X64Word_create(1695183700, 2343527390), X64Word_create(1986661051, 1014477480), X64Word_create(2177026350, 1206759142), X64Word_create(2456956037, 344077627), X64Word_create(2730485921, 1290863460), X64Word_create(2820302411, 3158454273), X64Word_create(3259730800, 3505952657), X64Word_create(3345764771, 106217008), X64Word_create(3516065817, 3606008344), X64Word_create(3600352804, 1432725776), X64Word_create(4094571909, 1467031594), X64Word_create(275423344, 851169720), X64Word_create(430227734, 3100823752), X64Word_create(506948616, 1363258195), X64Word_create(659060556, 3750685593), X64Word_create(883997877, 3785050280), X64Word_create(958139571, 3318307427), X64Word_create(1322822218, 3812723403), X64Word_create(1537002063, 2003034995), X64Word_create(1747873779, 3602036899), X64Word_create(1955562222, 1575990012), X64Word_create(2024104815, 1125592928), X64Word_create(2227730452, 2716904306), X64Word_create(2361852424, 442776044), X64Word_create(2428436474, 593698344), X64Word_create(2756734187, 3733110249), X64Word_create(3204031479, 2999351573), X64Word_create(3329325298, 3815920427), X64Word_create(3391569614, 3928383900), X64Word_create(3515267271, 566280711), X64Word_create(3940187606, 3454069534), X64Word_create(4118630271, 4000239992), X64Word_create(116418474, 1914138554), X64Word_create(174292421, 2731055270), X64Word_create(289380356, 3203993006), X64Word_create(460393269, 320620315), X64Word_create(685471733, 587496836), X64Word_create(852142971, 1086792851), X64Word_create(1017036298, 365543100), X64Word_create(1126000580, 2618297676), X64Word_create(1288033470, 3409855158), X64Word_create(1501505948, 4234509866), X64Word_create(1607167915, 987167468), X64Word_create(1816402316, 1246189591)],
                    l = [];
                ! function() {
                    for (var e = 0; e < 80; e++) l[e] = X64Word_create()
                }();
                var c = o.SHA512 = e.extend({
                    _doReset: function() {
                        this._hash = new n.init([new s.init(1779033703, 4089235720), new s.init(3144134277, 2227873595), new s.init(1013904242, 4271175723), new s.init(2773480762, 1595750129), new s.init(1359893119, 2917565137), new s.init(2600822924, 725511199), new s.init(528734635, 4215389547), new s.init(1541459225, 327033209)])
                    },
                    _doProcessBlock: function(e, t) {
                        for (var s = this._hash.words, i = s[0], n = s[1], o = s[2], c = s[3], h = s[4], u = s[5], d = s[6], f = s[7], p = i.high, g = i.low, y = n.high, m = n.low, v = o.high, _ = o.low, b = c.high, w = c.low, k = h.high, A = h.low, S = u.high, x = u.low, E = d.high, T = d.low, C = f.high, R = f.low, P = p, j = g, O = y, B = m, I = v, $ = _, L = b, W = w, z = k, D = A, N = S, H = x, U = E, M = T, G = C, X = R, K = 0; K < 80; K++) {
                            var V, J, Z = l[K];
                            if (K < 16) J = Z.high = 0 | e[t + 2 * K], V = Z.low = 0 | e[t + 2 * K + 1];
                            else {
                                var Y = l[K - 15],
                                    Q = Y.high,
                                    ee = Y.low,
                                    et = (Q >>> 1 | ee << 31) ^ (Q >>> 8 | ee << 24) ^ Q >>> 7,
                                    er = (ee >>> 1 | Q << 31) ^ (ee >>> 8 | Q << 24) ^ (ee >>> 7 | Q << 25),
                                    es = l[K - 2],
                                    ei = es.high,
                                    en = es.low,
                                    eo = (ei >>> 19 | en << 13) ^ (ei << 3 | en >>> 29) ^ ei >>> 6,
                                    ea = (en >>> 19 | ei << 13) ^ (en << 3 | ei >>> 29) ^ (en >>> 6 | ei << 26),
                                    el = l[K - 7],
                                    ec = el.high,
                                    eh = el.low,
                                    eu = l[K - 16],
                                    ed = eu.high,
                                    ef = eu.low;
                                J = et + ec + ((V = er + eh) >>> 0 < er >>> 0 ? 1 : 0), V += ea, J = J + eo + (V >>> 0 < ea >>> 0 ? 1 : 0), V += ef, J = J + ed + (V >>> 0 < ef >>> 0 ? 1 : 0), Z.high = J, Z.low = V
                            }
                            var ep = z & N ^ ~z & U,
                                eg = D & H ^ ~D & M,
                                ey = P & O ^ P & I ^ O & I,
                                em = j & B ^ j & $ ^ B & $,
                                ev = (P >>> 28 | j << 4) ^ (P << 30 | j >>> 2) ^ (P << 25 | j >>> 7),
                                e_ = (j >>> 28 | P << 4) ^ (j << 30 | P >>> 2) ^ (j << 25 | P >>> 7),
                                eb = (z >>> 14 | D << 18) ^ (z >>> 18 | D << 14) ^ (z << 23 | D >>> 9),
                                ew = (D >>> 14 | z << 18) ^ (D >>> 18 | z << 14) ^ (D << 23 | z >>> 9),
                                ek = a[K],
                                eA = ek.high,
                                eS = ek.low,
                                ex = X + ew,
                                eE = G + eb + (ex >>> 0 < X >>> 0 ? 1 : 0),
                                ex = ex + eg,
                                eE = eE + ep + (ex >>> 0 < eg >>> 0 ? 1 : 0),
                                ex = ex + eS,
                                eE = eE + eA + (ex >>> 0 < eS >>> 0 ? 1 : 0),
                                ex = ex + V,
                                eE = eE + J + (ex >>> 0 < V >>> 0 ? 1 : 0),
                                eT = e_ + em,
                                eC = ev + ey + (eT >>> 0 < e_ >>> 0 ? 1 : 0);
                            G = U, X = M, U = N, M = H, N = z, H = D, z = L + eE + ((D = W + ex | 0) >>> 0 < W >>> 0 ? 1 : 0) | 0, L = I, W = $, I = O, $ = B, O = P, B = j, P = eE + eC + ((j = ex + eT | 0) >>> 0 < ex >>> 0 ? 1 : 0) | 0
                        }
                        g = i.low = g + j, i.high = p + P + (g >>> 0 < j >>> 0 ? 1 : 0), m = n.low = m + B, n.high = y + O + (m >>> 0 < B >>> 0 ? 1 : 0), _ = o.low = _ + $, o.high = v + I + (_ >>> 0 < $ >>> 0 ? 1 : 0), w = c.low = w + W, c.high = b + L + (w >>> 0 < W >>> 0 ? 1 : 0), A = h.low = A + D, h.high = k + z + (A >>> 0 < D >>> 0 ? 1 : 0), x = u.low = x + H, u.high = S + N + (x >>> 0 < H >>> 0 ? 1 : 0), T = d.low = T + M, d.high = E + U + (T >>> 0 < M >>> 0 ? 1 : 0), R = f.low = R + X, f.high = C + G + (R >>> 0 < X >>> 0 ? 1 : 0)
                    },
                    _doFinalize: function() {
                        var e = this._data,
                            t = e.words,
                            s = 8 * this._nDataBytes,
                            i = 8 * e.sigBytes;
                        return t[i >>> 5] |= 128 << 24 - i % 32, t[(i + 128 >>> 10 << 5) + 30] = Math.floor(s / 4294967296), t[(i + 128 >>> 10 << 5) + 31] = s, e.sigBytes = 4 * t.length, this._process(), this._hash.toX32()
                    },
                    clone: function() {
                        var t = e.clone.call(this);
                        return t._hash = this._hash.clone(), t
                    },
                    blockSize: 32
                });
                i.SHA512 = e._createHelper(c), i.HmacSHA512 = e._createHmacHelper(c)
            }(), i.SHA512)
        },
        84299: function(e, t, s) {
            var i;
            e.exports = (i = s(84934), s(76217), s(74850), s(28238), s(68994), function() {
                var e = i.lib,
                    t = e.WordArray,
                    s = e.BlockCipher,
                    n = i.algo,
                    o = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
                    a = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
                    l = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
                    c = [{
                        0: 8421888,
                        268435456: 32768,
                        536870912: 8421378,
                        805306368: 2,
                        1073741824: 512,
                        1342177280: 8421890,
                        1610612736: 8389122,
                        1879048192: 8388608,
                        2147483648: 514,
                        2415919104: 8389120,
                        2684354560: 33280,
                        2952790016: 8421376,
                        3221225472: 32770,
                        3489660928: 8388610,
                        3758096384: 0,
                        4026531840: 33282,
                        134217728: 0,
                        402653184: 8421890,
                        671088640: 33282,
                        939524096: 32768,
                        1207959552: 8421888,
                        1476395008: 512,
                        1744830464: 8421378,
                        2013265920: 2,
                        2281701376: 8389120,
                        2550136832: 33280,
                        2818572288: 8421376,
                        3087007744: 8389122,
                        3355443200: 8388610,
                        3623878656: 32770,
                        3892314112: 514,
                        4160749568: 8388608,
                        1: 32768,
                        268435457: 2,
                        536870913: 8421888,
                        805306369: 8388608,
                        1073741825: 8421378,
                        1342177281: 33280,
                        1610612737: 512,
                        1879048193: 8389122,
                        2147483649: 8421890,
                        2415919105: 8421376,
                        2684354561: 8388610,
                        2952790017: 33282,
                        3221225473: 514,
                        3489660929: 8389120,
                        3758096385: 32770,
                        4026531841: 0,
                        134217729: 8421890,
                        402653185: 8421376,
                        671088641: 8388608,
                        939524097: 512,
                        1207959553: 32768,
                        1476395009: 8388610,
                        1744830465: 2,
                        2013265921: 33282,
                        2281701377: 32770,
                        2550136833: 8389122,
                        2818572289: 514,
                        3087007745: 8421888,
                        3355443201: 8389120,
                        3623878657: 0,
                        3892314113: 33280,
                        4160749569: 8421378
                    }, {
                        0: 1074282512,
                        16777216: 16384,
                        33554432: 524288,
                        50331648: 1074266128,
                        67108864: 1073741840,
                        83886080: 1074282496,
                        100663296: 1073758208,
                        117440512: 16,
                        134217728: 540672,
                        150994944: 1073758224,
                        167772160: 1073741824,
                        184549376: 540688,
                        201326592: 524304,
                        218103808: 0,
                        234881024: 16400,
                        251658240: 1074266112,
                        8388608: 1073758208,
                        25165824: 540688,
                        41943040: 16,
                        58720256: 1073758224,
                        75497472: 1074282512,
                        92274688: 1073741824,
                        109051904: 524288,
                        125829120: 1074266128,
                        142606336: 524304,
                        159383552: 0,
                        176160768: 16384,
                        192937984: 1074266112,
                        209715200: 1073741840,
                        226492416: 540672,
                        243269632: 1074282496,
                        260046848: 16400,
                        268435456: 0,
                        285212672: 1074266128,
                        301989888: 1073758224,
                        318767104: 1074282496,
                        335544320: 1074266112,
                        352321536: 16,
                        369098752: 540688,
                        385875968: 16384,
                        402653184: 16400,
                        419430400: 524288,
                        436207616: 524304,
                        452984832: 1073741840,
                        469762048: 540672,
                        486539264: 1073758208,
                        503316480: 1073741824,
                        520093696: 1074282512,
                        276824064: 540688,
                        293601280: 524288,
                        310378496: 1074266112,
                        327155712: 16384,
                        343932928: 1073758208,
                        360710144: 1074282512,
                        377487360: 16,
                        394264576: 1073741824,
                        411041792: 1074282496,
                        427819008: 1073741840,
                        444596224: 1073758224,
                        461373440: 524304,
                        478150656: 0,
                        494927872: 16400,
                        511705088: 1074266128,
                        528482304: 540672
                    }, {
                        0: 260,
                        1048576: 0,
                        2097152: 67109120,
                        3145728: 65796,
                        4194304: 65540,
                        5242880: 67108868,
                        6291456: 67174660,
                        7340032: 67174400,
                        8388608: 67108864,
                        9437184: 67174656,
                        10485760: 65792,
                        11534336: 67174404,
                        12582912: 67109124,
                        13631488: 65536,
                        14680064: 4,
                        15728640: 256,
                        524288: 67174656,
                        1572864: 67174404,
                        2621440: 0,
                        3670016: 67109120,
                        4718592: 67108868,
                        5767168: 65536,
                        6815744: 65540,
                        7864320: 260,
                        8912896: 4,
                        9961472: 256,
                        11010048: 67174400,
                        12058624: 65796,
                        13107200: 65792,
                        14155776: 67109124,
                        15204352: 67174660,
                        16252928: 67108864,
                        16777216: 67174656,
                        17825792: 65540,
                        18874368: 65536,
                        19922944: 67109120,
                        20971520: 256,
                        22020096: 67174660,
                        23068672: 67108868,
                        24117248: 0,
                        25165824: 67109124,
                        26214400: 67108864,
                        27262976: 4,
                        28311552: 65792,
                        29360128: 67174400,
                        30408704: 260,
                        31457280: 65796,
                        32505856: 67174404,
                        17301504: 67108864,
                        18350080: 260,
                        19398656: 67174656,
                        20447232: 0,
                        21495808: 65540,
                        22544384: 67109120,
                        23592960: 256,
                        24641536: 67174404,
                        25690112: 65536,
                        26738688: 67174660,
                        27787264: 65796,
                        28835840: 67108868,
                        29884416: 67109124,
                        30932992: 67174400,
                        31981568: 4,
                        33030144: 65792
                    }, {
                        0: 2151682048,
                        65536: 2147487808,
                        131072: 4198464,
                        196608: 2151677952,
                        262144: 0,
                        327680: 4198400,
                        393216: 2147483712,
                        458752: 4194368,
                        524288: 2147483648,
                        589824: 4194304,
                        655360: 64,
                        720896: 2147487744,
                        786432: 2151678016,
                        851968: 4160,
                        917504: 4096,
                        983040: 2151682112,
                        32768: 2147487808,
                        98304: 64,
                        163840: 2151678016,
                        229376: 2147487744,
                        294912: 4198400,
                        360448: 2151682112,
                        425984: 0,
                        491520: 2151677952,
                        557056: 4096,
                        622592: 2151682048,
                        688128: 4194304,
                        753664: 4160,
                        819200: 2147483648,
                        884736: 4194368,
                        950272: 4198464,
                        1015808: 2147483712,
                        1048576: 4194368,
                        1114112: 4198400,
                        1179648: 2147483712,
                        1245184: 0,
                        1310720: 4160,
                        1376256: 2151678016,
                        1441792: 2151682048,
                        1507328: 2147487808,
                        1572864: 2151682112,
                        1638400: 2147483648,
                        1703936: 2151677952,
                        1769472: 4198464,
                        1835008: 2147487744,
                        1900544: 4194304,
                        1966080: 64,
                        2031616: 4096,
                        1081344: 2151677952,
                        1146880: 2151682112,
                        1212416: 0,
                        1277952: 4198400,
                        1343488: 4194368,
                        1409024: 2147483648,
                        1474560: 2147487808,
                        1540096: 64,
                        1605632: 2147483712,
                        1671168: 4096,
                        1736704: 2147487744,
                        1802240: 2151678016,
                        1867776: 4160,
                        1933312: 2151682048,
                        1998848: 4194304,
                        2064384: 4198464
                    }, {
                        0: 128,
                        4096: 17039360,
                        8192: 262144,
                        12288: 536870912,
                        16384: 537133184,
                        20480: 16777344,
                        24576: 553648256,
                        28672: 262272,
                        32768: 16777216,
                        36864: 537133056,
                        40960: 536871040,
                        45056: 553910400,
                        49152: 553910272,
                        53248: 0,
                        57344: 17039488,
                        61440: 553648128,
                        2048: 17039488,
                        6144: 553648256,
                        10240: 128,
                        14336: 17039360,
                        18432: 262144,
                        22528: 537133184,
                        26624: 553910272,
                        30720: 536870912,
                        34816: 537133056,
                        38912: 0,
                        43008: 553910400,
                        47104: 16777344,
                        51200: 536871040,
                        55296: 553648128,
                        59392: 16777216,
                        63488: 262272,
                        65536: 262144,
                        69632: 128,
                        73728: 536870912,
                        77824: 553648256,
                        81920: 16777344,
                        86016: 553910272,
                        90112: 537133184,
                        94208: 16777216,
                        98304: 553910400,
                        102400: 553648128,
                        106496: 17039360,
                        110592: 537133056,
                        114688: 262272,
                        118784: 536871040,
                        122880: 0,
                        126976: 17039488,
                        67584: 553648256,
                        71680: 16777216,
                        75776: 17039360,
                        79872: 537133184,
                        83968: 536870912,
                        88064: 17039488,
                        92160: 128,
                        96256: 553910272,
                        100352: 262272,
                        104448: 553910400,
                        108544: 0,
                        112640: 553648128,
                        116736: 16777344,
                        120832: 262144,
                        124928: 537133056,
                        129024: 536871040
                    }, {
                        0: 268435464,
                        256: 8192,
                        512: 270532608,
                        768: 270540808,
                        1024: 268443648,
                        1280: 2097152,
                        1536: 2097160,
                        1792: 268435456,
                        2048: 0,
                        2304: 268443656,
                        2560: 2105344,
                        2816: 8,
                        3072: 270532616,
                        3328: 2105352,
                        3584: 8200,
                        3840: 270540800,
                        128: 270532608,
                        384: 270540808,
                        640: 8,
                        896: 2097152,
                        1152: 2105352,
                        1408: 268435464,
                        1664: 268443648,
                        1920: 8200,
                        2176: 2097160,
                        2432: 8192,
                        2688: 268443656,
                        2944: 270532616,
                        3200: 0,
                        3456: 270540800,
                        3712: 2105344,
                        3968: 268435456,
                        4096: 268443648,
                        4352: 270532616,
                        4608: 270540808,
                        4864: 8200,
                        5120: 2097152,
                        5376: 268435456,
                        5632: 268435464,
                        5888: 2105344,
                        6144: 2105352,
                        6400: 0,
                        6656: 8,
                        6912: 270532608,
                        7168: 8192,
                        7424: 268443656,
                        7680: 270540800,
                        7936: 2097160,
                        4224: 8,
                        4480: 2105344,
                        4736: 2097152,
                        4992: 268435464,
                        5248: 268443648,
                        5504: 8200,
                        5760: 270540808,
                        6016: 270532608,
                        6272: 270540800,
                        6528: 270532616,
                        6784: 8192,
                        7040: 2105352,
                        7296: 2097160,
                        7552: 0,
                        7808: 268435456,
                        8064: 268443656
                    }, {
                        0: 1048576,
                        16: 33555457,
                        32: 1024,
                        48: 1049601,
                        64: 34604033,
                        80: 0,
                        96: 1,
                        112: 34603009,
                        128: 33555456,
                        144: 1048577,
                        160: 33554433,
                        176: 34604032,
                        192: 34603008,
                        208: 1025,
                        224: 1049600,
                        240: 33554432,
                        8: 34603009,
                        24: 0,
                        40: 33555457,
                        56: 34604032,
                        72: 1048576,
                        88: 33554433,
                        104: 33554432,
                        120: 1025,
                        136: 1049601,
                        152: 33555456,
                        168: 34603008,
                        184: 1048577,
                        200: 1024,
                        216: 34604033,
                        232: 1,
                        248: 1049600,
                        256: 33554432,
                        272: 1048576,
                        288: 33555457,
                        304: 34603009,
                        320: 1048577,
                        336: 33555456,
                        352: 34604032,
                        368: 1049601,
                        384: 1025,
                        400: 34604033,
                        416: 1049600,
                        432: 1,
                        448: 0,
                        464: 34603008,
                        480: 33554433,
                        496: 1024,
                        264: 1049600,
                        280: 33555457,
                        296: 34603009,
                        312: 1,
                        328: 33554432,
                        344: 1048576,
                        360: 1025,
                        376: 34604032,
                        392: 33554433,
                        408: 34603008,
                        424: 0,
                        440: 34604033,
                        456: 1049601,
                        472: 1024,
                        488: 33555456,
                        504: 1048577
                    }, {
                        0: 134219808,
                        1: 131072,
                        2: 134217728,
                        3: 32,
                        4: 131104,
                        5: 134350880,
                        6: 134350848,
                        7: 2048,
                        8: 134348800,
                        9: 134219776,
                        10: 133120,
                        11: 134348832,
                        12: 2080,
                        13: 0,
                        14: 134217760,
                        15: 133152,
                        2147483648: 2048,
                        2147483649: 134350880,
                        2147483650: 134219808,
                        2147483651: 134217728,
                        2147483652: 134348800,
                        2147483653: 133120,
                        2147483654: 133152,
                        2147483655: 32,
                        2147483656: 134217760,
                        2147483657: 2080,
                        2147483658: 131104,
                        2147483659: 134350848,
                        2147483660: 0,
                        2147483661: 134348832,
                        2147483662: 134219776,
                        2147483663: 131072,
                        16: 133152,
                        17: 134350848,
                        18: 32,
                        19: 2048,
                        20: 134219776,
                        21: 134217760,
                        22: 134348832,
                        23: 131072,
                        24: 0,
                        25: 131104,
                        26: 134348800,
                        27: 134219808,
                        28: 134350880,
                        29: 133120,
                        30: 2080,
                        31: 134217728,
                        2147483664: 131072,
                        2147483665: 2048,
                        2147483666: 134348832,
                        2147483667: 133152,
                        2147483668: 32,
                        2147483669: 134348800,
                        2147483670: 134217728,
                        2147483671: 134219808,
                        2147483672: 134350880,
                        2147483673: 134217760,
                        2147483674: 134219776,
                        2147483675: 0,
                        2147483676: 133120,
                        2147483677: 2080,
                        2147483678: 131104,
                        2147483679: 134350848
                    }],
                    h = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
                    u = n.DES = s.extend({
                        _doReset: function() {
                            for (var e = this._key.words, t = [], s = 0; s < 56; s++) {
                                var i = o[s] - 1;
                                t[s] = e[i >>> 5] >>> 31 - i % 32 & 1
                            }
                            for (var n = this._subKeys = [], c = 0; c < 16; c++) {
                                for (var h = n[c] = [], u = l[c], s = 0; s < 24; s++) h[s / 6 | 0] |= t[(a[s] - 1 + u) % 28] << 31 - s % 6, h[4 + (s / 6 | 0)] |= t[28 + (a[s + 24] - 1 + u) % 28] << 31 - s % 6;
                                h[0] = h[0] << 1 | h[0] >>> 31;
                                for (var s = 1; s < 7; s++) h[s] = h[s] >>> (s - 1) * 4 + 3;
                                h[7] = h[7] << 5 | h[7] >>> 27
                            }
                            for (var d = this._invSubKeys = [], s = 0; s < 16; s++) d[s] = n[15 - s]
                        },
                        encryptBlock: function(e, t) {
                            this._doCryptBlock(e, t, this._subKeys)
                        },
                        decryptBlock: function(e, t) {
                            this._doCryptBlock(e, t, this._invSubKeys)
                        },
                        _doCryptBlock: function(e, t, s) {
                            this._lBlock = e[t], this._rBlock = e[t + 1], exchangeLR.call(this, 4, 252645135), exchangeLR.call(this, 16, 65535), exchangeRL.call(this, 2, 858993459), exchangeRL.call(this, 8, 16711935), exchangeLR.call(this, 1, 1431655765);
                            for (var i = 0; i < 16; i++) {
                                for (var n = s[i], o = this._lBlock, a = this._rBlock, l = 0, u = 0; u < 8; u++) l |= c[u][((a ^ n[u]) & h[u]) >>> 0];
                                this._lBlock = a, this._rBlock = o ^ l
                            }
                            var d = this._lBlock;
                            this._lBlock = this._rBlock, this._rBlock = d, exchangeLR.call(this, 1, 1431655765), exchangeRL.call(this, 8, 16711935), exchangeRL.call(this, 2, 858993459), exchangeLR.call(this, 16, 65535), exchangeLR.call(this, 4, 252645135), e[t] = this._lBlock, e[t + 1] = this._rBlock
                        },
                        keySize: 2,
                        ivSize: 2,
                        blockSize: 2
                    });

                function exchangeLR(e, t) {
                    var s = (this._lBlock >>> e ^ this._rBlock) & t;
                    this._rBlock ^= s, this._lBlock ^= s << e
                }

                function exchangeRL(e, t) {
                    var s = (this._rBlock >>> e ^ this._lBlock) & t;
                    this._lBlock ^= s, this._rBlock ^= s << e
                }
                i.DES = s._createHelper(u);
                var d = n.TripleDES = s.extend({
                    _doReset: function() {
                        var e = this._key.words;
                        if (2 !== e.length && 4 !== e.length && e.length < 6) throw Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
                        var s = e.slice(0, 2),
                            i = e.length < 4 ? e.slice(0, 2) : e.slice(2, 4),
                            n = e.length < 6 ? e.slice(0, 2) : e.slice(4, 6);
                        this._des1 = u.createEncryptor(t.create(s)), this._des2 = u.createEncryptor(t.create(i)), this._des3 = u.createEncryptor(t.create(n))
                    },
                    encryptBlock: function(e, t) {
                        this._des1.encryptBlock(e, t), this._des2.decryptBlock(e, t), this._des3.encryptBlock(e, t)
                    },
                    decryptBlock: function(e, t) {
                        this._des3.decryptBlock(e, t), this._des2.encryptBlock(e, t), this._des1.decryptBlock(e, t)
                    },
                    keySize: 6,
                    ivSize: 2,
                    blockSize: 2
                });
                i.TripleDES = s._createHelper(d)
            }(), i.TripleDES)
        },
        24811: function(e, t, s) {
            var i, n, o, a, l;
            e.exports = (o = (n = (i = s(84934)).lib).Base, a = n.WordArray, (l = i.x64 = {}).Word = o.extend({
                init: function(e, t) {
                    this.high = e, this.low = t
                }
            }), l.WordArray = o.extend({
                init: function(e, t) {
                    e = this.words = e || [], void 0 != t ? this.sigBytes = t : this.sigBytes = 8 * e.length
                },
                toX32: function() {
                    for (var e = this.words, t = e.length, s = [], i = 0; i < t; i++) {
                        var n = e[i];
                        s.push(n.high), s.push(n.low)
                    }
                    return a.create(s, this.sigBytes)
                },
                clone: function() {
                    for (var e = o.clone.call(this), t = e.words = this.words.slice(0), s = t.length, i = 0; i < s; i++) t[i] = t[i].clone();
                    return e
                }
            }), i)
        },
        30622: function(e, t, s) {
            "use strict";
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var i = s(2265),
                n = Symbol.for("react.element"),
                o = Symbol.for("react.fragment"),
                a = Object.prototype.hasOwnProperty,
                l = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                c = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function q(e, t, s) {
                var i, o = {},
                    h = null,
                    u = null;
                for (i in void 0 !== s && (h = "" + s), void 0 !== t.key && (h = "" + t.key), void 0 !== t.ref && (u = t.ref), t) a.call(t, i) && !c.hasOwnProperty(i) && (o[i] = t[i]);
                if (e && e.defaultProps)
                    for (i in t = e.defaultProps) void 0 === o[i] && (o[i] = t[i]);
                return {
                    $$typeof: n,
                    type: e,
                    key: h,
                    ref: u,
                    props: o,
                    _owner: l.current
                }
            }
            t.Fragment = o, t.jsx = q, t.jsxs = q
        },
        57437: function(e, t, s) {
            "use strict";
            e.exports = s(30622)
        },
        57042: function(e, t, s) {
            "use strict";

            function clsx() {
                for (var e, t, s = 0, i = "", n = arguments.length; s < n; s++)(e = arguments[s]) && (t = function r(e) {
                    var t, s, i = "";
                    if ("string" == typeof e || "number" == typeof e) i += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e)) {
                            var n = e.length;
                            for (t = 0; t < n; t++) e[t] && (s = r(e[t])) && (i && (i += " "), i += s)
                        } else
                            for (s in e) e[s] && (i && (i += " "), i += s)
                    }
                    return i
                }(e)) && (i && (i += " "), i += t);
                return i
            }
            s.d(t, {
                W: function() {
                    return clsx
                }
            })
        },
        74769: function(e, t, s) {
            "use strict";
            s.d(t, {
                m6: function() {
                    return y
                }
            });
            let i = /^\[(.+)\]$/;

            function getPart(e, t) {
                let s = e;
                return t.split("-").forEach(e => {
                    s.nextPart.has(e) || s.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    }), s = s.nextPart.get(e)
                }), s
            }
            let n = /\s+/;

            function twJoin() {
                let e, t, s = 0,
                    i = "";
                for (; s < arguments.length;)(e = arguments[s++]) && (t = function toValue(e) {
                    let t;
                    if ("string" == typeof e) return e;
                    let s = "";
                    for (let i = 0; i < e.length; i++) e[i] && (t = toValue(e[i])) && (s && (s += " "), s += t);
                    return s
                }(e)) && (i && (i += " "), i += t);
                return i
            }

            function fromTheme(e) {
                let themeGetter = t => t[e] || [];
                return themeGetter.isThemeGetter = !0, themeGetter
            }
            let o = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                a = /^\d+\/\d+$/,
                l = new Set(["px", "full", "screen"]),
                c = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                h = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                u = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                d = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                f = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

            function isLength(e) {
                return isNumber(e) || l.has(e) || a.test(e)
            }

            function isArbitraryLength(e) {
                return getIsArbitraryValue(e, "length", isLengthOnly)
            }

            function isNumber(e) {
                return !!e && !Number.isNaN(Number(e))
            }

            function isArbitraryNumber(e) {
                return getIsArbitraryValue(e, "number", isNumber)
            }

            function isInteger(e) {
                return !!e && Number.isInteger(Number(e))
            }

            function isPercent(e) {
                return e.endsWith("%") && isNumber(e.slice(0, -1))
            }

            function isArbitraryValue(e) {
                return o.test(e)
            }

            function isTshirtSize(e) {
                return c.test(e)
            }
            let p = new Set(["length", "size", "percentage"]);

            function isArbitrarySize(e) {
                return getIsArbitraryValue(e, p, isNever)
            }

            function isArbitraryPosition(e) {
                return getIsArbitraryValue(e, "position", isNever)
            }
            let g = new Set(["image", "url"]);

            function isArbitraryImage(e) {
                return getIsArbitraryValue(e, g, isImage)
            }

            function isArbitraryShadow(e) {
                return getIsArbitraryValue(e, "", isShadow)
            }

            function isAny() {
                return !0
            }

            function getIsArbitraryValue(e, t, s) {
                let i = o.exec(e);
                return !!i && (i[1] ? "string" == typeof t ? i[1] === t : t.has(i[1]) : s(i[2]))
            }

            function isLengthOnly(e) {
                return h.test(e) && !u.test(e)
            }

            function isNever() {
                return !1
            }

            function isShadow(e) {
                return d.test(e)
            }

            function isImage(e) {
                return f.test(e)
            }
            let y = function(e) {
                let t, s, o;
                let functionToCall = function(n) {
                    let a = [].reduce((e, t) => t(e), e());
                    return s = (t = {
                        cache: function(e) {
                            if (e < 1) return {
                                get: () => void 0,
                                set: () => {}
                            };
                            let t = 0,
                                s = new Map,
                                i = new Map;

                            function update(n, o) {
                                s.set(n, o), ++t > e && (t = 0, i = s, s = new Map)
                            }
                            return {
                                get(e) {
                                    let t = s.get(e);
                                    return void 0 !== t ? t : void 0 !== (t = i.get(e)) ? (update(e, t), t) : void 0
                                },
                                set(e, t) {
                                    s.has(e) ? s.set(e, t) : update(e, t)
                                }
                            }
                        }(a.cacheSize),
                        splitModifiers: function(e) {
                            let t = e.separator,
                                s = 1 === t.length,
                                i = t[0],
                                n = t.length;
                            return function(e) {
                                let o;
                                let a = [],
                                    l = 0,
                                    c = 0;
                                for (let h = 0; h < e.length; h++) {
                                    let u = e[h];
                                    if (0 === l) {
                                        if (u === i && (s || e.slice(h, h + n) === t)) {
                                            a.push(e.slice(c, h)), c = h + n;
                                            continue
                                        }
                                        if ("/" === u) {
                                            o = h;
                                            continue
                                        }
                                    }
                                    "[" === u ? l++ : "]" === u && l--
                                }
                                let h = 0 === a.length ? e : e.substring(c),
                                    u = h.startsWith("!"),
                                    d = u ? h.substring(1) : h,
                                    f = o && o > c ? o - c : void 0;
                                return {
                                    modifiers: a,
                                    hasImportantModifier: u,
                                    baseClassName: d,
                                    maybePostfixModifierPosition: f
                                }
                            }
                        }(a),
                        ... function(e) {
                            let t = function(e) {
                                    var t;
                                    let {
                                        theme: s,
                                        prefix: i
                                    } = e, n = {
                                        nextPart: new Map,
                                        validators: []
                                    }, o = (t = Object.entries(e.classGroups), i ? t.map(([e, t]) => {
                                        let s = t.map(e => "string" == typeof e ? i + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [i + e, t])) : e);
                                        return [e, s]
                                    }) : t);
                                    return o.forEach(([e, t]) => {
                                        (function processClassesRecursively(e, t, s, i) {
                                            e.forEach(e => {
                                                if ("string" == typeof e) {
                                                    let i = "" === e ? t : getPart(t, e);
                                                    i.classGroupId = s;
                                                    return
                                                }
                                                if ("function" == typeof e) {
                                                    if (e.isThemeGetter) {
                                                        processClassesRecursively(e(i), t, s, i);
                                                        return
                                                    }
                                                    t.validators.push({
                                                        validator: e,
                                                        classGroupId: s
                                                    });
                                                    return
                                                }
                                                Object.entries(e).forEach(([e, n]) => {
                                                    processClassesRecursively(n, getPart(t, e), s, i)
                                                })
                                            })
                                        })(t, n, e, s)
                                    }), n
                                }(e),
                                {
                                    conflictingClassGroups: s,
                                    conflictingClassGroupModifiers: n
                                } = e;
                            return {
                                getClassGroupId: function(e) {
                                    let s = e.split("-");
                                    return "" === s[0] && 1 !== s.length && s.shift(),
                                        function getGroupRecursive(e, t) {
                                            if (0 === e.length) return t.classGroupId;
                                            let s = e[0],
                                                i = t.nextPart.get(s),
                                                n = i ? getGroupRecursive(e.slice(1), i) : void 0;
                                            if (n) return n;
                                            if (0 === t.validators.length) return;
                                            let o = e.join("-");
                                            return t.validators.find(({
                                                validator: e
                                            }) => e(o)) ? .classGroupId
                                        }(s, t) || function(e) {
                                            if (i.test(e)) {
                                                let t = i.exec(e)[1],
                                                    s = t ? .substring(0, t.indexOf(":"));
                                                if (s) return "arbitrary.." + s
                                            }
                                        }(e)
                                },
                                getConflictingClassGroupIds: function(e, t) {
                                    let i = s[e] || [];
                                    return t && n[e] ? [...i, ...n[e]] : i
                                }
                            }
                        }(a)
                    }).cache.get, o = t.cache.set, functionToCall = tailwindMerge, tailwindMerge(n)
                };

                function tailwindMerge(e) {
                    let i = s(e);
                    if (i) return i;
                    let a = function(e, t) {
                        let {
                            splitModifiers: s,
                            getClassGroupId: i,
                            getConflictingClassGroupIds: o
                        } = t, a = new Set;
                        return e.trim().split(n).map(e => {
                            let {
                                modifiers: t,
                                hasImportantModifier: n,
                                baseClassName: o,
                                maybePostfixModifierPosition: a
                            } = s(e), l = i(a ? o.substring(0, a) : o), c = !!a;
                            if (!l) {
                                if (!a || !(l = i(o))) return {
                                    isTailwindClass: !1,
                                    originalClassName: e
                                };
                                c = !1
                            }
                            let h = (function(e) {
                                if (e.length <= 1) return e;
                                let t = [],
                                    s = [];
                                return e.forEach(e => {
                                    let i = "[" === e[0];
                                    i ? (t.push(...s.sort(), e), s = []) : s.push(e)
                                }), t.push(...s.sort()), t
                            })(t).join(":");
                            return {
                                isTailwindClass: !0,
                                modifierId: n ? h + "!" : h,
                                classGroupId: l,
                                originalClassName: e,
                                hasPostfixModifier: c
                            }
                        }).reverse().filter(e => {
                            if (!e.isTailwindClass) return !0;
                            let {
                                modifierId: t,
                                classGroupId: s,
                                hasPostfixModifier: i
                            } = e, n = t + s;
                            return !a.has(n) && (a.add(n), o(s, i).forEach(e => a.add(t + e)), !0)
                        }).reverse().map(e => e.originalClassName).join(" ")
                    }(e, t);
                    return o(e, a), a
                }
                return function() {
                    return functionToCall(twJoin.apply(null, arguments))
                }
            }(function() {
                let e = fromTheme("colors"),
                    t = fromTheme("spacing"),
                    s = fromTheme("blur"),
                    i = fromTheme("brightness"),
                    n = fromTheme("borderColor"),
                    o = fromTheme("borderRadius"),
                    a = fromTheme("borderSpacing"),
                    l = fromTheme("borderWidth"),
                    c = fromTheme("contrast"),
                    h = fromTheme("grayscale"),
                    u = fromTheme("hueRotate"),
                    d = fromTheme("invert"),
                    f = fromTheme("gap"),
                    p = fromTheme("gradientColorStops"),
                    g = fromTheme("gradientColorStopPositions"),
                    y = fromTheme("inset"),
                    m = fromTheme("margin"),
                    v = fromTheme("opacity"),
                    _ = fromTheme("padding"),
                    b = fromTheme("saturate"),
                    w = fromTheme("scale"),
                    k = fromTheme("sepia"),
                    A = fromTheme("skew"),
                    S = fromTheme("space"),
                    x = fromTheme("translate"),
                    getOverscroll = () => ["auto", "contain", "none"],
                    getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, t],
                    getSpacingWithArbitrary = () => [isArbitraryValue, t],
                    getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength],
                    getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue],
                    getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"],
                    getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                    getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                    getZeroAndEmpty = () => ["", "0", isArbitraryValue],
                    getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    getNumber = () => [isNumber, isArbitraryNumber],
                    getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: {
                        colors: [isAny],
                        spacing: [isLength, isArbitraryLength],
                        blur: ["none", "", isTshirtSize, isArbitraryValue],
                        brightness: getNumber(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
                        borderSpacing: getSpacingWithArbitrary(),
                        borderWidth: getLengthWithEmptyAndArbitrary(),
                        contrast: getNumber(),
                        grayscale: getZeroAndEmpty(),
                        hueRotate: getNumberAndArbitrary(),
                        invert: getZeroAndEmpty(),
                        gap: getSpacingWithArbitrary(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [isPercent, isArbitraryLength],
                        inset: getSpacingWithAutoAndArbitrary(),
                        margin: getSpacingWithAutoAndArbitrary(),
                        opacity: getNumber(),
                        padding: getSpacingWithArbitrary(),
                        saturate: getNumber(),
                        scale: getNumber(),
                        sepia: getZeroAndEmpty(),
                        skew: getNumberAndArbitrary(),
                        space: getSpacingWithArbitrary(),
                        translate: getSpacingWithArbitrary()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", isArbitraryValue]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [isTshirtSize]
                        }],
                        "break-after": [{
                            "break-after": getBreaks()
                        }],
                        "break-before": [{
                            "break-before": getBreaks()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [...getPositions(), isArbitraryValue]
                        }],
                        overflow: [{
                            overflow: getOverflow()
                        }],
                        "overflow-x": [{
                            "overflow-x": getOverflow()
                        }],
                        "overflow-y": [{
                            "overflow-y": getOverflow()
                        }],
                        overscroll: [{
                            overscroll: getOverscroll()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": getOverscroll()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": getOverscroll()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [y]
                        }],
                        "inset-x": [{
                            "inset-x": [y]
                        }],
                        "inset-y": [{
                            "inset-y": [y]
                        }],
                        start: [{
                            start: [y]
                        }],
                        end: [{
                            end: [y]
                        }],
                        top: [{
                            top: [y]
                        }],
                        right: [{
                            right: [y]
                        }],
                        bottom: [{
                            bottom: [y]
                        }],
                        left: [{
                            left: [y]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", isInteger, isArbitraryValue]
                        }],
                        basis: [{
                            basis: getSpacingWithAutoAndArbitrary()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", isArbitraryValue]
                        }],
                        grow: [{
                            grow: getZeroAndEmpty()
                        }],
                        shrink: [{
                            shrink: getZeroAndEmpty()
                        }],
                        order: [{
                            order: ["first", "last", "none", isInteger, isArbitraryValue]
                        }],
                        "grid-cols": [{
                            "grid-cols": [isAny]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", isInteger, isArbitraryValue]
                            }, isArbitraryValue]
                        }],
                        "col-start": [{
                            "col-start": getNumberWithAutoAndArbitrary()
                        }],
                        "col-end": [{
                            "col-end": getNumberWithAutoAndArbitrary()
                        }],
                        "grid-rows": [{
                            "grid-rows": [isAny]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [isInteger, isArbitraryValue]
                            }, isArbitraryValue]
                        }],
                        "row-start": [{
                            "row-start": getNumberWithAutoAndArbitrary()
                        }],
                        "row-end": [{
                            "row-end": getNumberWithAutoAndArbitrary()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
                        }],
                        gap: [{
                            gap: [f]
                        }],
                        "gap-x": [{
                            "gap-x": [f]
                        }],
                        "gap-y": [{
                            "gap-y": [f]
                        }],
                        "justify-content": [{
                            justify: ["normal", ...getAlign()]
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal", ...getAlign(), "baseline"]
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [...getAlign(), "baseline"]
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [_]
                        }],
                        px: [{
                            px: [_]
                        }],
                        py: [{
                            py: [_]
                        }],
                        ps: [{
                            ps: [_]
                        }],
                        pe: [{
                            pe: [_]
                        }],
                        pt: [{
                            pt: [_]
                        }],
                        pr: [{
                            pr: [_]
                        }],
                        pb: [{
                            pb: [_]
                        }],
                        pl: [{
                            pl: [_]
                        }],
                        m: [{
                            m: [m]
                        }],
                        mx: [{
                            mx: [m]
                        }],
                        my: [{
                            my: [m]
                        }],
                        ms: [{
                            ms: [m]
                        }],
                        me: [{
                            me: [m]
                        }],
                        mt: [{
                            mt: [m]
                        }],
                        mr: [{
                            mr: [m]
                        }],
                        mb: [{
                            mb: [m]
                        }],
                        ml: [{
                            ml: [m]
                        }],
                        "space-x": [{
                            "space-x": [S]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [S]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", isArbitraryValue, t]
                        }],
                        "min-w": [{
                            "min-w": [isArbitraryValue, t, "min", "max", "fit"]
                        }],
                        "max-w": [{
                            "max-w": [isArbitraryValue, t, "none", "full", "min", "max", "fit", "prose", {
                                screen: [isTshirtSize]
                            }, isTshirtSize]
                        }],
                        h: [{
                            h: [isArbitraryValue, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "min-h": [{
                            "min-h": [isArbitraryValue, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "max-h": [{
                            "max-h": [isArbitraryValue, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        size: [{
                            size: [isArbitraryValue, t, "auto", "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", isTshirtSize, isArbitraryLength]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
                        }],
                        "font-family": [{
                            font: [isAny]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", isNumber, isArbitraryNumber]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
                        }],
                        "list-image": [{
                            "list-image": ["none", isArbitraryValue]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", isArbitraryValue]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [v]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [v]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...getLineStyles(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", isLength, isArbitraryLength]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", isLength, isArbitraryValue]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: getSpacingWithArbitrary()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", isArbitraryValue]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [v]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [...getPositions(), isArbitraryPosition]
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", isArbitrarySize]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, isArbitraryImage]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [g]
                        }],
                        "gradient-via-pos": [{
                            via: [g]
                        }],
                        "gradient-to-pos": [{
                            to: [g]
                        }],
                        "gradient-from": [{
                            from: [p]
                        }],
                        "gradient-via": [{
                            via: [p]
                        }],
                        "gradient-to": [{
                            to: [p]
                        }],
                        rounded: [{
                            rounded: [o]
                        }],
                        "rounded-s": [{
                            "rounded-s": [o]
                        }],
                        "rounded-e": [{
                            "rounded-e": [o]
                        }],
                        "rounded-t": [{
                            "rounded-t": [o]
                        }],
                        "rounded-r": [{
                            "rounded-r": [o]
                        }],
                        "rounded-b": [{
                            "rounded-b": [o]
                        }],
                        "rounded-l": [{
                            "rounded-l": [o]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [o]
                        }],
                        "rounded-se": [{
                            "rounded-se": [o]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [o]
                        }],
                        "rounded-es": [{
                            "rounded-es": [o]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [o]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [o]
                        }],
                        "rounded-br": [{
                            "rounded-br": [o]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [o]
                        }],
                        "border-w": [{
                            border: [l]
                        }],
                        "border-w-x": [{
                            "border-x": [l]
                        }],
                        "border-w-y": [{
                            "border-y": [l]
                        }],
                        "border-w-s": [{
                            "border-s": [l]
                        }],
                        "border-w-e": [{
                            "border-e": [l]
                        }],
                        "border-w-t": [{
                            "border-t": [l]
                        }],
                        "border-w-r": [{
                            "border-r": [l]
                        }],
                        "border-w-b": [{
                            "border-b": [l]
                        }],
                        "border-w-l": [{
                            "border-l": [l]
                        }],
                        "border-opacity": [{
                            "border-opacity": [v]
                        }],
                        "border-style": [{
                            border: [...getLineStyles(), "hidden"]
                        }],
                        "divide-x": [{
                            "divide-x": [l]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [l]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [v]
                        }],
                        "divide-style": [{
                            divide: getLineStyles()
                        }],
                        "border-color": [{
                            border: [n]
                        }],
                        "border-color-x": [{
                            "border-x": [n]
                        }],
                        "border-color-y": [{
                            "border-y": [n]
                        }],
                        "border-color-t": [{
                            "border-t": [n]
                        }],
                        "border-color-r": [{
                            "border-r": [n]
                        }],
                        "border-color-b": [{
                            "border-b": [n]
                        }],
                        "border-color-l": [{
                            "border-l": [n]
                        }],
                        "divide-color": [{
                            divide: [n]
                        }],
                        "outline-style": [{
                            outline: ["", ...getLineStyles()]
                        }],
                        "outline-offset": [{
                            "outline-offset": [isLength, isArbitraryValue]
                        }],
                        "outline-w": [{
                            outline: [isLength, isArbitraryLength]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: getLengthWithEmptyAndArbitrary()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [v]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [isLength, isArbitraryLength]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
                        }],
                        "shadow-color": [{
                            shadow: [isAny]
                        }],
                        opacity: [{
                            opacity: [v]
                        }],
                        "mix-blend": [{
                            "mix-blend": [...getBlendModes(), "plus-lighter", "plus-darker"]
                        }],
                        "bg-blend": [{
                            "bg-blend": getBlendModes()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [s]
                        }],
                        brightness: [{
                            brightness: [i]
                        }],
                        contrast: [{
                            contrast: [c]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
                        }],
                        grayscale: [{
                            grayscale: [h]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [u]
                        }],
                        invert: [{
                            invert: [d]
                        }],
                        saturate: [{
                            saturate: [b]
                        }],
                        sepia: [{
                            sepia: [k]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [s]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [i]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [c]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [h]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [u]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [d]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [v]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [b]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [k]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [a]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [a]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [a]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
                        }],
                        duration: [{
                            duration: getNumberAndArbitrary()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", isArbitraryValue]
                        }],
                        delay: [{
                            delay: getNumberAndArbitrary()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [w]
                        }],
                        "scale-x": [{
                            "scale-x": [w]
                        }],
                        "scale-y": [{
                            "scale-y": [w]
                        }],
                        rotate: [{
                            rotate: [isInteger, isArbitraryValue]
                        }],
                        "translate-x": [{
                            "translate-x": [x]
                        }],
                        "translate-y": [{
                            "translate-y": [x]
                        }],
                        "skew-x": [{
                            "skew-x": [A]
                        }],
                        "skew-y": [{
                            "skew-y": [A]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": getSpacingWithArbitrary()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": getSpacingWithArbitrary()
                        }],
                        "scroll-my": [{
                            "scroll-my": getSpacingWithArbitrary()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": getSpacingWithArbitrary()
                        }],
                        "scroll-me": [{
                            "scroll-me": getSpacingWithArbitrary()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": getSpacingWithArbitrary()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": getSpacingWithArbitrary()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": getSpacingWithArbitrary()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": getSpacingWithArbitrary()
                        }],
                        "scroll-p": [{
                            "scroll-p": getSpacingWithArbitrary()
                        }],
                        "scroll-px": [{
                            "scroll-px": getSpacingWithArbitrary()
                        }],
                        "scroll-py": [{
                            "scroll-py": getSpacingWithArbitrary()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": getSpacingWithArbitrary()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": getSpacingWithArbitrary()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": getSpacingWithArbitrary()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": getSpacingWithArbitrary()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": getSpacingWithArbitrary()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": getSpacingWithArbitrary()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [isLength, isArbitraryLength, isArbitraryNumber]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            })
        }
    }
]);