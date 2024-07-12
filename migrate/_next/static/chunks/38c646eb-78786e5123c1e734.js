"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6654], {
        89351: function(e, t, n) {
            let a;
            n.d(t, {
                U: function() {
                    return useContract
                },
                Y: function() {
                    return useContractRead
                },
                Z: function() {
                    return useContractWrite
                },
                a: function() {
                    return ThirdwebProviderCore
                },
                b: function() {
                    return useConnect
                },
                bB: function() {
                    return useENS
                },
                bD: function() {
                    return useSDK
                },
                bb: function() {
                    return useLogin
                },
                bc: function() {
                    return useLogout
                },
                bd: function() {
                    return useUser
                },
                be: function() {
                    return useAuth
                },
                bt: function() {
                    return useStorage
                },
                bu: function() {
                    return useNetworkMismatch
                },
                bx: function() {
                    return useSupportedChains
                },
                c: function() {
                    return useConnectionStatus
                },
                d: function() {
                    return useCreateWalletInstance
                },
                e: function() {
                    return useDisconnect
                },
                f: function() {
                    return useSwitchChain
                },
                g: function() {
                    return useWallets
                },
                h: function() {
                    return useWalletConfig
                },
                i: function() {
                    return useSetConnectionStatus
                },
                j: function() {
                    return useSetConnectedWallet
                },
                l: function() {
                    return useWalletContext
                },
                m: function() {
                    return useBalance
                },
                o: function() {
                    return useAddress
                },
                p: function() {
                    return useChainId
                },
                r: function() {
                    return resolveMimeType
                },
                s: function() {
                    return useChain
                },
                t: function() {
                    return useThirdwebAuthContext
                },
                u: function() {
                    return useWallet
                }
            });
            var r = n(58499),
                i = n.n(r),
                c = n(5060),
                o = n(43979),
                u = n(66328),
                s = n(55026),
                l = n(22130),
                d = n(2265),
                h = n(5572),
                C = n(46795),
                f = n(57437),
                g = n(44931),
                y = n(1361),
                w = n(63112),
                p = n(78438),
                m = n(33693),
                v = n(23743),
                b = n(33883);
            async function resolveMimeType(e) {
                if (!e) return;
                let t = i().getType(e);
                if (t) return t;
                let n = await fetch(e, {
                    method: "HEAD"
                });
                if (n.ok && n.headers.has("content-type")) return n.headers.get("content-type") || void 0
            }
            n(9581);
            let I = (0, d.createContext)(void 0),
                W = (0, d.createContext)(void 0);

            function useThirdwebAuthContext() {
                return (0, d.useContext)(W)
            }
            let S = "lastConnectedWallet",
                A = new Map,
                P = (0, d.createContext)(void 0);

            function ThirdwebWalletProvider(e) {
                let [t, n] = (0, d.useState)(void 0), [r, i] = (0, d.useState)("unknown"), c = e.autoConnectTimeout || 15e3, [o, u] = (0, d.useState)(), [s, l] = (0, d.useState)(), [h, C] = (0, d.useState)();
                a || (a = e.createWalletStorage("coordinatorStorage"));
                let g = e.autoSwitch ? e.activeChain : void 0,
                    y = (0, d.useMemo)(() => ({
                        chains: e.chains,
                        dappMetadata: e.dAppMeta,
                        chain: e.activeChain || e.chains[0],
                        clientId: e.clientId
                    }), [e.chains, e.dAppMeta, e.activeChain, e.clientId]),
                    w = (0, d.useCallback)(e => {
                        let t = e.create(y);
                        return t.walletId === v.w.magicLink && l(t), A.set(t, e), t
                    }, [y]);
                (0, d.useEffect)(() => {
                    o && o.updateChains(e.chains)
                }, [o, e.chains]);
                let p = (0, d.useCallback)(async function(e, t) {
                        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        u(e);
                        let r = A.get(e);
                        if (!r) throw Error("Wallet config not found for given wallet instance. Do not create a wallet instance manually - use the useCreateWalletInstance() hook instead");
                        C(r), i("connected");
                        let c = await e.getSigner();
                        if (n(c), a) return;
                        let o = {
                                walletId: r.id,
                                connectParams: t
                            },
                            s = e.getPersonalWallet(),
                            l = A.get(s);
                        s && l && (o.connectParams = { ...o.connectParams,
                            personalWallet: {
                                walletId: l.id,
                                connectParams: s.getConnectParams()
                            }
                        }), saveLastConnectedWalletInfo(o)
                    }, []),
                    m = (0, d.useCallback)(async e => {
                        let t = await a.getItem(S);
                        if (t) try {
                            let n = JSON.parse(t);
                            n.connectParams ? n.connectParams.chainId = e : n.connectParams = {
                                chainId: e
                            }, await a.setItem(S, JSON.stringify(n))
                        } catch (e) {
                            console.error(`Error saving the last active chain: ${e}`)
                        }
                    }, []),
                    b = (0, d.useCallback)(async e => {
                        if (!o) throw Error("No active wallet");
                        await o.switchChain(e);
                        let t = await o.getSigner();
                        await m(e), n(t)
                    }, [o, m]),
                    I = (0, d.useRef)(!1);
                (0, d.useEffect)(() => {
                    if (!e.signerWallet && !I.current) {
                        if (!1 === e.shouldAutoConnect) {
                            i("disconnected");
                            return
                        }
                        o || "unknown" !== r || (I.current = !0, async function() {
                            let t = await getLastConnectedWalletInfo();
                            if (!t) {
                                i("disconnected");
                                return
                            }
                            let n = e.supportedWallets.find(e => e.id === t.walletId);
                            if (!n) {
                                i("disconnected");
                                return
                            }
                            let r = t.connectParams ? .personalWallet;
                            if (r) {
                                let e = n.personalWallets || [],
                                    a = e.find(e => e.id === r.walletId);
                                if (a) {
                                    let e = w(a);
                                    try {
                                        await timeoutPromise(e.autoConnect(r.connectParams), {
                                            ms: c,
                                            message: T
                                        })
                                    } catch (e) {
                                        console.error("Failed to auto connect wallet"), console.error(e), i("disconnected");
                                        return
                                    }
                                    t.connectParams = { ...t.connectParams,
                                        personalWallet: e
                                    }
                                } else {
                                    i("disconnected");
                                    return
                                }
                            }
                            let o = w(n);
                            try {
                                i("connecting"), await timeoutPromise(o.autoConnect(t.connectParams), {
                                    ms: c,
                                    message: T
                                }), p(o, t.connectParams, !0)
                            } catch (e) {
                                console.error("Failed to auto connect wallet"), console.error(e), a.removeItem(S), i("disconnected")
                            }
                        }())
                    }
                }, [w, e.supportedWallets, p, e.shouldAutoConnect, o, r, c, e.signerWallet]);
                let W = (0, d.useCallback)(async function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        let [a, r] = t, c = {
                            chainId: g ? .chainId,
                            ...r || {}
                        }, o = w(a);
                        i("connecting");
                        try {
                            a.id === v.w.magicLink && saveLastConnectedWalletInfo({
                                walletId: a.id,
                                connectParams: c
                            }), await o.connect(c), p(o, c)
                        } catch (e) {
                            throw console.error(`Error connecting to wallet: ${e}`), i("disconnected"), e
                        }
                        return o
                    }, [w, p, g]),
                    K = (0, d.useCallback)(async () => {
                        await a.removeItem(S), i("disconnected"), n(void 0), u(void 0), C(void 0)
                    }, []),
                    x = (0, d.useCallback)(async () => {
                        if (!o) {
                            K();
                            return
                        }
                        let e = o.getPersonalWallet();
                        await o.disconnect(), e && await e ? .disconnect(), K()
                    }, [o, K]);
                (0, d.useEffect)(() => {
                    if (!o) return;
                    let update = async () => {
                        let e = await o.getSigner();
                        n(e)
                    };
                    return o.addListener("change", () => {
                        update()
                    }), o.addListener("disconnect", () => {
                        K()
                    }), () => {
                        o.removeListener("change"), o.removeListener("disconnect")
                    }
                }, [o, K]);
                let L = (0, d.useRef)();
                return (0, d.useEffect)(() => {
                    if (!e.signerWallet) {
                        L.current && (x(), L.current = void 0);
                        return
                    }
                    if (L.current === e.signerWallet) return;
                    let t = w(e.signerWallet);
                    p(t), L.current = e.signerWallet
                }, [w, e.supportedWallets, p, e.signerWallet, x]), (0, f.jsx)(P.Provider, {
                    value: {
                        disconnect: x,
                        wallets: e.supportedWallets,
                        connect: W,
                        signer: t,
                        activeWallet: o,
                        activeWalletConfig: h,
                        connectionStatus: r,
                        setConnectionStatus: i,
                        createWalletInstance: w,
                        createdWalletInstance: s,
                        createWalletStorage: e.createWalletStorage,
                        switchChain: b,
                        setConnectedWallet: p,
                        activeChain: e.activeChain,
                        chainToConnect: g,
                        getWalletConfig: e => A.get(e),
                        activeChainSetExplicitly: e.activeChainSetExplicitly,
                        clientId: e.clientId
                    },
                    children: e.children
                })
            }

            function useWalletContext() {
                let e = (0, d.useContext)(P);
                if (!e) throw Error("useWalletContext() can only be used inside <ThirdwebProvider />");
                return e
            }
            async function getLastConnectedWalletInfo() {
                let e = await a.getItem(S);
                if (!e) return null;
                try {
                    return JSON.parse(e)
                } catch {
                    return await a.removeItem(S), null
                }
            }
            async function saveLastConnectedWalletInfo(e) {
                try {
                    await a.setItem(S, JSON.stringify(e))
                } catch (e) {
                    console.error("Error saving the last connected wallet info", e)
                }
            }

            function timeoutPromise(e, t) {
                return new Promise((n, a) => {
                    let r = setTimeout(() => {
                        a(Error(t.message))
                    }, t.ms);
                    e.then(e => {
                        clearTimeout(r), n(e)
                    }, e => {
                        clearTimeout(r), a(e)
                    })
                })
            }
            let T = "Failed to Auto connect. Auto connect timed out. You can increase the timeout duration using the autoConnectTimeout prop on <ThirdwebProvider />";

            function useWallet(e) {
                let t = useWalletContext();
                (0, l.Z)(t, "useWallet() hook must be used within a <ThirdwebProvider/>");
                let n = t.activeWallet;
                if (n && (!e || n.walletId === e)) return n
            }

            function useWalletConfig() {
                let e = useWalletContext();
                return (0, l.Z)(e, "useWallet() hook must be used within a <ThirdwebProvider/>"), e.activeWalletConfig
            }

            function useWallets() {
                let e = useWalletContext();
                return (0, l.Z)(e, "useWallets() hook must be used within a <ThirdwebProvider/>"), e.wallets
            }

            function useConnect() {
                let e = useWalletContext();
                return (0, l.Z)(e, "useConnect() hook must be used within a <ThirdwebProvider/>"), e.connect
            }

            function useDisconnect() {
                let e = useWalletContext();
                return (0, l.Z)(e, "useDisconnect() hook must be used within a <ThirdwebProvider/>"), e.disconnect
            }

            function useConnectionStatus() {
                let e = useWalletContext();
                return (0, l.Z)(e, "useConnectionStatus() must be used within a <ThirdwebProvider/>"), e.connectionStatus
            }

            function useSetConnectionStatus() {
                let e = useWalletContext();
                return (0, l.Z)(e, "useSetConnectionStatus() must be used within a <ThirdwebProvider/>"), e.setConnectionStatus
            }

            function useCreateWalletInstance() {
                let e = useWalletContext();
                return (0, l.Z)(e, "useCreateWalletInstance() must be used within a <ThirdwebProvider/>"), e.createWalletInstance
            }

            function useSwitchChain() {
                let e = useWalletContext();
                return (0, l.Z)(e, "useSwitchChain() must be used within a <ThirdwebProvider/>"), e.switchChain
            }

            function useSetConnectedWallet() {
                let e = useWalletContext();
                return (0, l.Z)(e, "useSwitchChain() must be used within a <ThirdwebProvider/>"), e.setConnectedWallet
            }
            let K = "tw-cache";

            function enforceCachePrefix(e) {
                return [K, ...e.filter(e => "string" != typeof e || e !== K)]
            }

            function createContractCacheKey() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.d,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return enforceCachePrefix(["contract", e, ...t])
            }

            function createCacheKeyWithNetwork(e, t) {
                return enforceCachePrefix(x.network.active(t).concat(e))
            }
            let x = {
                    auth: {
                        user: () => enforceCachePrefix(["user"])
                    },
                    network: {
                        active: e => enforceCachePrefix(["chainId", e])
                    },
                    wallet: {
                        balance: (e, t, n) => enforceCachePrefix(createCacheKeyWithNetwork(enforceCachePrefix(["balance", {
                            walletAddress: t,
                            tokenAddress: n
                        }]), e))
                    },
                    contract: {
                        read: (e, t) => createContractCacheKey(e, ["read", t]),
                        type: e => createContractCacheKey(e, ["contract-type"]),
                        compilerMetadata: e => createContractCacheKey(e, ["publish-metadata"]),
                        typeAndCompilerMetadata: e => createContractCacheKey(e, ["contract-type-and-metadata"]),
                        metadata: e => createContractCacheKey(e, ["metadata"]),
                        extractFunctions: e => createContractCacheKey(e, ["extractFunctions"]),
                        call: (e, t, n, a) => createContractCacheKey(e, ["call", t, n, a]),
                        accountFactory: {
                            getAll: e => createContractCacheKey(e, ["accountFactory"]),
                            isAccountDeployed: (e, t) => createContractCacheKey(e, ["isAccountDeployed", t]),
                            getAllForAddress: (e, t) => createContractCacheKey(e, ["getAllForAddress", t])
                        },
                        account: {
                            signers: e => createContractCacheKey(e, ["account", "signers"])
                        },
                        app: {
                            get: e => createContractCacheKey(e, ["appURI"])
                        },
                        events: {
                            getEvents: (e, t) => createContractCacheKey(e, ["events", "getEvents", {
                                eventName: t
                            }]),
                            getAllEvents: e => createContractCacheKey(e, ["events", "getAllEvents"])
                        },
                        nft: {
                            get: (e, t) => createContractCacheKey(e, ["get", {
                                tokenId: t
                            }]),
                            balanceOf: (e, t, n) => createContractCacheKey(e, ["balanceOf", {
                                owner: t,
                                tokenId: n
                            }]),
                            query: {
                                all: (e, t) => createContractCacheKey(e, t ? ["query", "all", t] : ["query", "all"]),
                                totalCirculatingSupply: e => createContractCacheKey(e, ["query", "totalCirculatingSupply"]),
                                totalCount: e => createContractCacheKey(e, ["query", "totalCount"]),
                                owned: {
                                    all: (e, t) => createContractCacheKey(e, ["query", "owned", "all", t])
                                }
                            },
                            sharedMetadata: {
                                get: e => createContractCacheKey(e)
                            },
                            drop: {
                                getAllUnclaimed: (e, t) => createContractCacheKey(e, t ? ["getAllUnclaimed", t] : ["getAllUnclaimed"]),
                                getAllClaimed: (e, t) => createContractCacheKey(e, t ? ["getAllClaimed", t] : ["getAllClaimed"]),
                                totalUnclaimedSupply: e => createContractCacheKey(e, ["totalUnclaimedSupply"]),
                                totalClaimedSupply: e => createContractCacheKey(e, ["totalClaimedSupply"]),
                                revealer: {
                                    getBatchesToReveal: (e, t) => createContractCacheKey(e, t ? ["getBatchesToReveal", t] : ["getBatchesToReveal"])
                                }
                            }
                        },
                        token: {
                            totalSupply: e => createContractCacheKey(e, ["totalSupply"]),
                            decimals: e => createContractCacheKey(e, ["decimals"]),
                            balanceOf: (e, t) => createContractCacheKey(e, ["balanceOf", {
                                walletAddress: t
                            }])
                        },
                        marketplace: {
                            getListing: (e, t) => createContractCacheKey(e, ["getListing", {
                                listingId: t
                            }]),
                            getAllListings: (e, t) => createContractCacheKey(e, t ? ["getAllListings", t] : ["getAllListings"]),
                            getTotalCount: e => createContractCacheKey(e, ["getTotalCount"]),
                            getActiveListings: (e, t) => createContractCacheKey(e, t ? ["getActiveListings", t] : ["getActiveListings"]),
                            auction: {
                                getBidBufferBps: (e, t) => createContractCacheKey(e, ["auction", "getBidBufferBps", {
                                    listingId: t
                                }]),
                                getWinningBid: (e, t) => createContractCacheKey(e, ["auction", "getWinningBid", {
                                    listingId: t
                                }]),
                                getMinimumNextBid: (e, t) => createContractCacheKey(e, ["auction", "getMinimumNextBid", {
                                    listingId: t
                                }]),
                                getWinner: (e, t) => createContractCacheKey(e, ["auction", "getWinner", {
                                    listingId: t
                                }])
                            },
                            directListings: {
                                getAll: (e, t) => createContractCacheKey(e, t ? ["directListings", "getAll", t] : ["directListings", "getAll"]),
                                getAllValid: (e, t) => createContractCacheKey(e, t ? ["directListings", "getAllValid", t] : ["directListings", "getAllValid"]),
                                getListing: (e, t) => createContractCacheKey(e, ["directListings", "getListing", {
                                    listingId: t
                                }]),
                                getTotalCount: e => createContractCacheKey(e, ["directListings", "getTotalCount"])
                            },
                            englishAuctions: {
                                getAll: (e, t) => createContractCacheKey(e, t ? ["englishAuctions", "getAll", t] : ["englishAuctions", "getAll"]),
                                getAllValid: (e, t) => createContractCacheKey(e, t ? ["englishAuctions", "getAllValid", t] : ["englishAuctions", "getAllValid"]),
                                getAuction: (e, t) => createContractCacheKey(e, ["englishAuctions", "getAuction", {
                                    auctionId: t
                                }]),
                                getWinningBid: (e, t) => createContractCacheKey(e, ["englishAuctions", "getWinningBid", {
                                    auctionId: t
                                }]),
                                getTotalCount: e => createContractCacheKey(e, ["englishAuctions", "getTotalCount"])
                            }
                        }
                    }
                },
                L = "auth_token_storage_key";

            function useLogin() {
                let e = (0, c.NL)(),
                    t = useThirdwebAuthContext(),
                    n = useWallet(),
                    a = (0, o.D)({
                        mutationFn: async () => {
                            let a;
                            (0, l.Z)(t, "Please specify an authConfig in the ThirdwebProvider"), (0, l.Z)(n, "You need a connected wallet to login."), (0, l.Z)(t.authUrl, "Please specify an authUrl in the authConfig.");
                            let r = await n.getAddress(),
                                i = await n.getChainId(),
                                c = await fetch(`${t.authUrl}/payload`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        address: r,
                                        chainId: i.toString()
                                    })
                                });
                            if (!c.ok) throw Error(`Failed to get payload with status code ${c.status}`);
                            try {
                                ({
                                    payload: a
                                } = await c.json())
                            } catch {
                                throw Error("Failed to get payload")
                            }
                            let o = await (0, s.s)({
                                wallet: n,
                                payload: a
                            });
                            if (!(c = await fetch(`${t.authUrl}/login`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        payload: o
                                    }),
                                    credentials: "include"
                                })).ok) {
                                let e = await c.json();
                                if (e.error) throw Error(e.error);
                                throw Error(`Login request failed with status code ${c.status}`)
                            }
                            let {
                                token: u
                            } = await c.json();
                            return await t.secureStorage ? .setItem(L, u), e.invalidateQueries(x.auth.user()), u
                        }
                    });
                return {
                    login: () => a.mutateAsync(),
                    isLoading: a.isLoading
                }
            }

            function useLogout() {
                let e = (0, c.NL)(),
                    t = useThirdwebAuthContext(),
                    n = (0, o.D)({
                        mutationFn: async () => {
                            (0, l.Z)(t, "Please specify an authConfig in the ThirdwebProvider"), (0, l.Z)(t.authUrl, "Please specify an authUrl in the authConfig."), await fetch(`${t.authUrl}/logout`, {
                                method: "POST",
                                credentials: "include"
                            }), t.secureStorage ? .removeItem(L), e.invalidateQueries(x.auth.user())
                        }
                    });
                return {
                    logout: n.mutateAsync,
                    isLoading: n.isLoading
                }
            }

            function useUser() {
                let e = useThirdwebAuthContext(),
                    {
                        data: t,
                        isLoading: n
                    } = (0, u.a)(x.auth.user(), async () => {
                        (0, l.Z)(e, "Please specify an authConfig in the ThirdwebProvider"), (0, l.Z)(e.authUrl, "Please specify an authUrl in the authConfig.");
                        let t = await e.secureStorage ? .getItem(L),
                            n = {
                                credentials: "include",
                                ...t ? {
                                    headers: {
                                        Authorization: `Bearer ${t}`
                                    }
                                } : {}
                            },
                            a = await fetch(`${e.authUrl}/user`, n);
                        return await a.json()
                    }, {
                        enabled: !!e
                    });
                return {
                    user: t,
                    isLoggedIn: !!t,
                    isLoading: n
                }
            }

            function useAuth() {
                let e = useWallet(),
                    t = useThirdwebAuthContext();
                return (0, d.useMemo)(() => {
                    if (t ? .domain && e) return new s.T(e, t.domain)
                }, [e, t ? .domain])
            }
            let ThirdwebAuthProvider = e => {
                let {
                    value: t,
                    children: n
                } = e, a = (0, d.useMemo)(() => {
                    if (!t) return;
                    let e = { ...t,
                        authUrl: t.authUrl ? .replace(/\/$/, "")
                    };
                    return e
                }, [t]);
                return (0, f.jsxs)(W.Provider, {
                    value: a,
                    children: [n, (0, f.jsx)(ChangeActiveWalletOnAccountSwitch, {})]
                })
            };

            function ChangeActiveWalletOnAccountSwitch() {
                let e = useWallet(),
                    {
                        logout: t
                    } = useLogout(),
                    {
                        switchAccount: n
                    } = function() {
                        let e = (0, c.NL)(),
                            t = useThirdwebAuthContext(),
                            n = (0, o.D)({
                                mutationFn: async n => {
                                    (0, l.Z)(t, "Please specify an authConfig in the ThirdwebProvider"), (0, l.Z)(t.authUrl, "Please specify an authUrl in the authConfig."), await fetch(`${t.authUrl}/switch-account`, {
                                        method: "POST",
                                        credentials: "include",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            address: n
                                        })
                                    }), e.invalidateQueries(x.auth.user())
                                }
                            });
                        return {
                            switchAccount: n.mutateAsync,
                            isLoading: n.isLoading
                        }
                    }(),
                    a = useThirdwebAuthContext(),
                    r = (0, c.NL)();
                return (0, d.useEffect)(() => {
                    let handleSwitchAccount = async e => {
                            if (e.address) try {
                                await n(e.address)
                            } catch (t) {
                                console.debug(`[Auth] Failed to switch account to ${e.address} with error:
`, t)
                            }
                        },
                        handleLogout = async () => {
                            try {
                                await t()
                            } catch (e) {
                                console.debug(`[Auth] Failed to logout with error:
`, e)
                            }
                        },
                        r = !!e && a && a.authUrl;
                    return r && (e.addListener("connect", handleSwitchAccount), e.addListener("change", handleSwitchAccount), e.addListener("disconnect", handleLogout)), () => {
                        r && (e.removeListener("connect", handleSwitchAccount), e.removeListener("change", handleSwitchAccount), e.removeListener("disconnect", handleLogout))
                    }
                }, [e, r, a, t, n]), null
            }

            function useUpdateChainsWithClientId(e, t, n) {
                let a = (0, d.useMemo)(() => e.map(e => (0, g.nRj)(e, n)), [e, n]),
                    r = (0, d.useMemo)(() => t && "string" != typeof t && "number" != typeof t ? (0, g.nRj)(t, n) : t, [t, n]);
                return [a, r]
            }
            let k = (0, d.createContext)(void 0),
                ThirdwebConfigProvider = e => {
                    let {
                        value: t,
                        children: n
                    } = e;
                    return (0, f.jsx)(k.Provider, {
                        value: t,
                        children: n
                    })
                },
                M = (0, d.createContext)({});

            function useSDK() {
                let {
                    sdk: e
                } = function() {
                    let e = (0, d.useContext)(M);
                    return (0, l.Z)(e._inProvider, "useSDK must be called from within a ThirdwebProvider, did you forget to wrap your app in a <ThirdwebProvider />?"), e
                }();
                return e
            }

            function useSDKChainId() {
                let e = useSDK();
                return e ? ._chainId
            }
            let D = {
                    wallet: void 0,
                    address: void 0,
                    chainId: void 0,
                    signer: void 0
                },
                N = (0, d.createContext)(void 0),
                ThirdwebConnectedWalletProvider = e => {
                    let {
                        signer: t,
                        children: n
                    } = e, {
                        chains: a,
                        clientId: r
                    } = function() {
                        let e = (0, d.useContext)(k);
                        return (0, l.Z)(e, "useThirdwebConfigContext() hook must be used within a <ThirdwebProvider/>"), e
                    }(), i = useSDK() ? .storage, [c, o] = (0, d.useState)({ ...D,
                        signer: t || void 0
                    });
                    return (0, d.useEffect)(() => {
                        o(e => ({ ...e,
                            signer: t || void 0
                        }))
                    }, [t]), (0, d.useEffect)(() => {
                        if (!i) return;
                        let e = t;
                        return t ? Promise.all([t.getAddress(), t.getChainId()]).then(n => {
                            let c, [u, s] = n,
                                l = a.find(e => e.chainId === s);
                            if (l) try {
                                c = (0, g.OZ$)(l, r)[0]
                            } catch (e) {
                                console.error(e)
                            }
                            if (t === e) {
                                let e = new p.U(t, {
                                    readonlySettings: c ? {
                                        rpcUrl: c,
                                        chainId: s
                                    } : void 0
                                }, i);
                                o({
                                    wallet: e,
                                    address: u,
                                    chainId: s,
                                    signer: t
                                })
                            }
                        }).catch(e => {}) : o(D), () => {
                            e = void 0
                        }
                    }, [t, r]), (0, f.jsx)(N.Provider, {
                        value: c,
                        children: n
                    })
                },
                WrappedThirdwebSDKProvider = e => {
                    let {
                        sdkOptions: t = {},
                        storageInterface: n,
                        supportedChains: a,
                        activeChain: r,
                        signer: i,
                        children: c,
                        clientId: o,
                        secretKey: u
                    } = e, s = (0, d.useMemo)(() => r ? "number" == typeof r ? r : "string" == typeof r ? a.find(e => e.slug === r) ? .chainId : r.chainId : a[0] ? .chainId, [r, a]), l = (0, d.useMemo)(() => {
                        let e, r, i = s,
                            c = a.find(e => e.chainId === i);
                        if (c || void 0 === i || (console.warn(`The chainId ${i} is not in the configured chains, please add it to the ThirdwebProvider`), i = void 0), c && c.rpc.length > 0) try {
                            let t = (0, g.OZ$)(c, o)[0];
                            e = {
                                chainId: c.chainId,
                                rpcUrl: t
                            }
                        } catch (e) {}
                        let l = {
                            readonlySettings: e,
                            ...t,
                            supportedChains: a
                        };
                        if (i && (r = new w.x9T(i, { ...l,
                                clientId: o,
                                secretKey: u
                            }, n)), !r) {
                            if (a.length > 0) i = a[0].chainId, r = new w.x9T(i, l, n);
                            else {
                                console.error("No chains configured, please pass a chain or chains to the ThirdwebProvider");
                                return
                            }
                        }
                        return r._chainId = i, r
                    }, [s, a, t, n, o, u]);
                    (0, d.useEffect)(() => {
                        l && l._chainId === s && (i ? l.updateSignerOrProvider(i) : s && l.updateSignerOrProvider(s))
                    }, [l, l ? ._chainId, i, s]);
                    let h = (0, d.useMemo)(() => ({
                        sdk: l && l._chainId === s ? l : void 0,
                        _inProvider: !0
                    }), [s, l]);
                    return (0, f.jsx)(M.Provider, {
                        value: h,
                        children: c
                    })
                },
                ThirdwebSDKProvider = e => {
                    let {
                        signer: t,
                        children: n,
                        queryClient: a,
                        supportedChains: r,
                        activeChain: i,
                        clientId: c,
                        ...o
                    } = e;
                    c || (0, p.c)("No API key. Please provide a clientId. It is required to access thirdweb's services. You can create a key at https://thirdweb.com/create-api-key", c, void 0);
                    let u = r || g.gL9,
                        s = (0, d.useMemo)(() => {
                            let e = "object" == typeof i && null !== i;
                            if (!e) return u;
                            let t = u.find(e => e.chainId === i.chainId);
                            return t ? u.map(e => e.chainId === i.chainId ? i : e) : [...u, i]
                        }, [u, i]),
                        [l, h] = useUpdateChainsWithClientId(s, i || s[0], c),
                        C = (0, d.useMemo)(() => {
                            if (!h || "string" == typeof h || "number" == typeof h) return l;
                            let e = [...l.filter(e => e.chainId !== h.chainId), h];
                            return e.filter((e, t, n) => t === n.findIndex(t => t.chainId === e.chainId))
                        }, [l, h]);
                    return (0, f.jsx)(ThirdwebConfigProvider, {
                        value: {
                            chains: C,
                            clientId: c
                        },
                        children: (0, f.jsx)(y.Q, {
                            queryClient: a,
                            children: (0, f.jsx)(WrappedThirdwebSDKProvider, {
                                signer: t,
                                supportedChains: C,
                                clientId: c,
                                activeChain: h,
                                ...o,
                                children: (0, f.jsx)(ThirdwebConnectedWalletProvider, {
                                    signer: t,
                                    children: n
                                })
                            })
                        })
                    })
                },
                ThirdwebProviderCore = e => {
                    let {
                        createWalletStorage: t = b.c,
                        ...n
                    } = e, {
                        activeChain: a
                    } = n, r = n.supportedChains || g.gL9, i = (0, d.useMemo)(() => {
                        let e = "object" == typeof a && null !== a;
                        if (!e) return r;
                        let t = r.find(e => e.chainId === a.chainId);
                        return t ? r.map(e => e.chainId === a.chainId ? a : e) : [...r, a]
                    }, [r, a]), [c, o] = useUpdateChainsWithClientId(i, n.activeChain || i[0], n.clientId), u = (0, d.useMemo)(() => {
                        if ("number" == typeof o) {
                            let e = c.find(e => e.chainId === o);
                            if (!e) throw Error(`Invalid chainId: ${o}. It is not one of supportedChains`);
                            return e
                        }
                        if ("string" == typeof o) {
                            let e = c.find(e => e.slug === o);
                            if (!e) throw Error(`Invalid chain: "${o}". It is not one of supportedChains`);
                            return e
                        }
                        return o
                    }, [o, c]), s = n.dAppMeta;
                    return (0, f.jsx)(I.Provider, {
                        value: n.theme,
                        children: (0, f.jsx)(ThirdwebWalletProvider, {
                            chains: c,
                            supportedWallets: n.supportedWallets,
                            shouldAutoConnect: n.autoConnect,
                            createWalletStorage: t,
                            dAppMeta: s,
                            activeChain: u,
                            autoSwitch: n.autoSwitch,
                            autoConnectTimeout: n.autoConnectTimeout,
                            clientId: n.clientId,
                            activeChainSetExplicitly: !!n.activeChain,
                            signerWallet: n.signerWallet,
                            children: (0, f.jsx)(ThirdwebSDKProviderWrapper, {
                                queryClient: n.queryClient,
                                sdkOptions: n.sdkOptions,
                                supportedChains: c,
                                activeChain: u,
                                storageInterface: n.storageInterface,
                                authConfig: n.authConfig,
                                clientId: n.clientId,
                                secretKey: n.secretKey,
                                children: (0, f.jsx)(ThirdwebAuthProvider, {
                                    value: n.authConfig,
                                    children: n.children
                                })
                            })
                        })
                    })
                },
                ThirdwebSDKProviderWrapper = e => {
                    let {
                        children: t,
                        ...n
                    } = e, a = useWalletContext() ? .signer;
                    return (0, f.jsx)(ThirdwebSDKProvider, {
                        signer: a,
                        ...n,
                        children: t
                    })
                };

            function useSupportedChains() {
                let e = (0, d.useContext)(k);
                return (0, l.Z)(e, "useSupportedChains() hook must be used within a <ThirdwebProvider/>"), e.chains
            }

            function useBalance(e) {
                let t = useAddress(),
                    {
                        wallet: n,
                        address: a,
                        chainId: r
                    } = function() {
                        let e = (0, d.useContext)(N);
                        return (0, l.Z)(e, "useThirdwebConnectedWalletContext() hook must be used within a <ThirdwebProvider/>"), e
                    }(),
                    i = (0, d.useMemo)(() => x.wallet.balance(r || -1, a, e), [r, e, a]);
                return (0, u.a)(i, () => n ? .balance(e), {
                    enabled: !!n && !!t && !!r,
                    retry: !0,
                    keepPreviousData: !1
                })
            }

            function useAddress() {
                let e = (0, d.useContext)(N);
                return (0, l.Z)(e, "useAddress() hook must be used within a <ThirdwebProvider/>"), e.address
            }

            function useChainId() {
                let e = (0, d.useContext)(N);
                return (0, l.Z)(e, "useChainId() hook must be used within a <ThirdwebProvider/>"), e.chainId
            }

            function useChain() {
                let e = useChainId(),
                    t = useSupportedChains(),
                    n = (0, d.useMemo)(() => t.find(t => t.chainId === e), [e, t]),
                    a = (0, d.useMemo)(() => {
                        if (!n) return g.gL9.find(t => t.chainId === e)
                    }, [e, n]);
                return n || a
            }

            function useQueryWithNetwork(e, t, n) {
                let a = useSDKChainId(),
                    r = { ...n,
                        enabled: !!(a && n ? .enabled)
                    };
                return (0, u.a)(createCacheKeyWithNetwork(e, a), t, r)
            }
            async function fetchContractType(e, t) {
                if (!e || !t) return null;
                try {
                    return await t.resolveContractType(e)
                } catch (e) {
                    return console.error("failed to resolve contract type", e), "custom"
                }
            }
            let E = {
                cacheKey: (e, t) => createCacheKeyWithNetwork(x.contract.type(e), t),
                useQuery: function(e) {
                    let t = useSDK();
                    return useQueryWithNetwork(x.contract.type(e), () => fetchContractType(e, t), {
                        cacheTime: 1 / 0,
                        staleTime: 1 / 0,
                        enabled: !!e && !!t
                    })
                },
                fetchQuery: fetchContractType
            };

            function fetchCompilerMetadata(e, t) {
                if (!e || !t) return null;
                try {
                    return t.getPublisher().fetchCompilerMetadataFromAddress(e)
                } catch (e) {
                    return null
                }
            }
            let Z = {
                cacheKey: (e, t) => createCacheKeyWithNetwork(x.contract.compilerMetadata(e), t),
                useQuery: function(e) {
                    let t = useSDK();
                    return useQueryWithNetwork(x.contract.compilerMetadata(e), () => fetchCompilerMetadata(e, t), {
                        cacheTime: 1 / 0,
                        staleTime: 1 / 0,
                        enabled: !!e && !!t
                    })
                },
                fetchQuery: fetchCompilerMetadata
            };

            function useContract(e, t) {
                let n = useSDK(),
                    a = (0, c.NL)(),
                    r = useSDKChainId(),
                    i = useAddress(),
                    o = useChainId(),
                    u = n ? ._constructedAt,
                    s = useQueryWithNetwork((0, y.n)(["contract-instance", e, {
                        wallet: i,
                        walletChainId: o,
                        sdkTimestamp: u
                    }]), async () => {
                        if ((0, y.r)(e, "contract address is required"), (0, l.Z)(n, "SDK not initialized"), (0, l.Z)(r, "active chain id is required"), !t || "custom" === t) {
                            let t;
                            let i = (0, m.g)(e);
                            if (i) return n.getContract(e, i);
                            let c = await a.fetchQuery(E.cacheKey(e, r), () => E.fetchQuery(e, n), {
                                cacheTime: 1 / 0,
                                staleTime: 1 / 0
                            });
                            return "custom" === c && (t = (await a.fetchQuery(Z.cacheKey(e, r), () => Z.fetchQuery(e, n), {
                                cacheTime: 1 / 0,
                                staleTime: 1 / 0,
                                retry: 0
                            })) ? .abi), (0, l.Z)(c, "failed to resolve contract type"), n.getContract(e, t || c)
                        }
                        return n.getContract(e, t)
                    }, {
                        keepPreviousData: !0,
                        cacheTime: 1 / 0,
                        staleTime: 1 / 0,
                        enabled: !!e && !!n && !!r,
                        retry: 0
                    });
                return { ...s,
                    data: s.data,
                    contract: s.data
                }
            }

            function useContractRead(e, t, n, a) {
                let r = e ? .getAddress();
                return useQueryWithNetwork(x.contract.call(r, t, n, a), () => ((0, y.r)(e, "contract must be defined"), (0, y.r)(t, "function name must be provided"), e.call(t, n, a)), {
                    enabled: !!e && !!t
                })
            }

            function useContractWrite(e, t) {
                let n = useSDKChainId(),
                    a = e ? .getAddress(),
                    r = (0, c.NL)();
                return (0, o.D)(async n => {
                    let {
                        args: a,
                        overrides: r
                    } = n;
                    return (0, y.r)(e, "contract must be defined"), (0, y.r)(t, "function name must be provided"), e.call(t, a, r)
                }, {
                    onSettled: () => r.invalidateQueries(createCacheKeyWithNetwork(createContractCacheKey(a), n))
                })
            }

            function useStorage() {
                let e = useSDK();
                return e ? .storage
            }

            function useNetworkMismatch() {
                let e = useChainId(),
                    t = useSDKChainId();
                return !!t && -1 !== t && !!e && t !== e
            }

            function useENS() {
                let e = useAddress(),
                    t = useSupportedChains(),
                    {
                        clientId: n
                    } = useWalletContext(),
                    a = t.find(e => 1 === e.chainId);
                return (0, u.a)({
                    queryKey: ["ens", e, a ? .rpc],
                    cacheTime: 864e5,
                    staleTime: 36e5,
                    retry: !1,
                    enabled: !!e,
                    queryFn: async () => {
                        if (!e) return null;
                        let t = (0, w.rV4)(1, {
                            clientId: n,
                            supportedChains: a ? [{
                                chainId: 1,
                                rpc: [...a.rpc],
                                nativeCurrency: a.nativeCurrency,
                                slug: a.slug
                            }] : void 0
                        });
                        if (t instanceof C.r) {
                            let [n, a] = await Promise.all([t.lookupAddress(e), t.getAvatar(e)]);
                            return {
                                ens: n,
                                avatarUrl: a
                            }
                        }
                        return {
                            ens: await t.lookupAddress(e),
                            avatarUrl: null
                        }
                    }
                })
            }
        }
    }
]);