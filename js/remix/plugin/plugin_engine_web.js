/*! For license information please see plugin_engine_web.js.LICENSE.txt */
var plugin_engine_web;
(() => {
    "use strict";
    var e = {
        6010: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(3681), t),
            r.__exportStar(i(3107), t),
            r.__exportStar(i(5395), t),
            r.__exportStar(i(1687), t),
            r.__exportStar(i(2805), t),
            r.__exportStar(i(1293), t),
            r.__exportStar(i(553), t)
        },
        1293: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.HostPlugin = void 0;
            const r = i(7569);
            class n extends r.Plugin {
                constructor(e) {
                    const t = Array.from(new Set([...e.methods || [], "currentFocus", "focus", "addView", "removeView"]));
                    super(Object.assign(Object.assign({}, e), {
                            methods: t
                        }))
                }
            }
            t.HostPlugin = n
        },
        3681: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.IframePlugin = void 0;
            const r = i(5490),
            n = i(7569);
            class o extends n.PluginConnector {
                constructor(e) {
                    super(e),
                    this.profile = e,
                    this.listener = ["message", e => this.getEvent(e), !1],
                    this.iframe = document.createElement("iframe")
                }
                connect(e) {
                    this.url = e;
                    const t = this.render();
                    return new Promise(((e, i) => {
                            t.onload = () => r.__awaiter(this, void 0, void 0, (function  * () {
                                    t.contentWindow || i(new Error(`${this.name} plugin cannot find url ${this.profile.url}`)),
                                    this.origin = new URL(t.src).origin,
                                    this.source = t.contentWindow,
                                    window.addEventListener(...this.listener),
                                    this.handshake().then(e).catch(i)
                                })),
                            this.call(this.profile.location, "addView", this.profile, t).catch(i)
                        }))
                }
                disconnect() {
                    return this.iframe.remove(),
                    window.removeEventListener(...this.listener),
                    this.call(this.profile.location, "removeView", this.profile).catch(console.error)
                }
                getEvent(e) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            if (e.source !== this.source)
                                return;
                            if (e.origin !== this.origin)
                                return;
                            const t = e.data;
                            this.getMessage(t)
                        }))
                }
                send(e) {
                    if (!this.source)
                        throw new Error("No window attached to Iframe yet");
                    this.source.postMessage(e, this.origin)
                }
                render() {
                    if (this.iframe.contentWindow)
                        throw new Error(`${this.name} plugin is already rendered`);
                    return this.iframe.setAttribute("sandbox", "allow-popups allow-scripts allow-same-origin allow-forms allow-top-navigation"),
                    this.iframe.setAttribute("seamless", "true"),
                    this.iframe.setAttribute("id", `plugin-${this.name}`),
                    this.iframe.src = this.url,
                    this.iframe
                }
            }
            t.IframePlugin = o
        },
        5395: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.ThemePlugin = t.createTheme = void 0;
            const r = i(5490),
            n = i(7569),
            o = i(4668);
            function s(e = {}) {
                return Object.assign(Object.assign({
                        brightness: "light",
                        fontFamily: 'Arial,"Helvetica Neue",Helvetica,sans-serif',
                        space: 8
                    }, e), {
                    breakpoints: Object.assign({
                        xs: 0,
                        sm: 600,
                        md: 1024,
                        lg: 1440,
                        xl: 1920
                    }, e.breakpoints),
                    colors: Object.assign({
                        surface: "white",
                        background: "#fafafa",
                        foreground: "black",
                        primary: "#3f51b5",
                        primaryContrast: "white",
                        secondary: "#e91e63",
                        secondaryContrast: "rgba(white, 0.7)",
                        success: "#4caf50",
                        successContrast: "rgba(black, 0.87)",
                        warn: "#ff9800",
                        warnContrast: "white",
                        error: "#f44336",
                        errorContrast: "white",
                        disabled: "rgba(0,0,0,.26)"
                    }, e.colors)
                })
            }
            t.createTheme = s;
            class a extends n.Plugin {
                constructor() {
                    super(o.themeProfile),
                    this.getTheme = s,
                    this.theme = this.getTheme()
                }
                setTheme(e) {
                    this.theme = this.getTheme(e),
                    this.emit("themeChanged", this.theme)
                }
                currentTheme() {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            return this.theme
                        }))
                }
            }
            t.ThemePlugin = a
        },
        553: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.ViewPlugin = t.isView = void 0;
            const r = i(5490),
            n = i(7569);
            t.isView = function (e) {
                return !!e.location
            };
            class o extends n.Plugin {
                constructor(e) {
                    super(e),
                    this.profile = e
                }
                activate() {
                    const e = Object.create(null, {
                        activate: {
                            get: () => super.activate
                        }
                    });
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            yield this.call(this.profile.location, "addView", this.profile, this.render()),
                            e.activate.call(this)
                        }))
                }
                deactivate() {
                    this.call(this.profile.location, "removeView", this.profile),
                    super.deactivate()
                }
            }
            t.ViewPlugin = o
        },
        2805: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.WebWorkerPlugin = void 0;
            const r = i(5490),
            n = i(7569);
            class o extends n.PluginConnector {
                constructor(e, t) {
                    super(e),
                    this.profile = e,
                    this.setOptions(t)
                }
                setOptions(e) {
                    super.setOptions(Object.assign({
                            type: "module",
                            name: this.name
                        }, e))
                }
                connect(e) {
                    if ("Worker" in window)
                        return this.worker = new Worker(e, this.options), this.worker.onmessage = e => this.getEvent(e), this.handshake()
                }
                disconnect() {
                    this.worker.terminate()
                }
                getEvent(e) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            const t = e.data;
                            this.getMessage(t)
                        }))
                }
                send(e) {
                    if (!this.worker)
                        throw new Error("No worker attached to the plugin");
                    this.worker.postMessage(e)
                }
            }
            t.WebWorkerPlugin = o
        },
        1687: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.WindowPlugin = void 0;
            const r = i(7569),
            n = i(4668);
            class o extends r.Plugin {
                constructor(e = {}) {
                    super(n.windowProfile),
                    super.setOptions(Object.assign({
                            queueTimeout: 6e4
                        }, e))
                }
                prompt(e) {
                    return new Promise(((t, i) => t(window.prompt(e))))
                }
                confirm(e) {
                    return new Promise((t => t(window.confirm(e))))
                }
                alert(e, t) {
                    return new Promise(((t, i) => t(window.alert(e))))
                }
            }
            t.WindowPlugin = o
        },
        3107: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.WebsocketPlugin = void 0;
            const r = i(5490),
            n = i(7569);
            class o extends n.PluginConnector {
                constructor(e, t = {}) {
                    super(e),
                    this.listeners = {
                        message: ["message", e => this.getEvent(e), !1],
                        close: ["close", e => this.onclose(e), !1]
                    },
                    this.options = {
                        reconnectDelay: 1e3
                    },
                    this.options = Object.assign(Object.assign({}, this.options), t)
                }
                getEvent(e) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            try {
                                const t = JSON.parse(e.data);
                                this.getMessage(t)
                            } catch (e) {
                                console.error(e)
                            }
                        }))
                }
                onclose(e) {
                    this.loaded = !1,
                    1e3 !== e.code && setTimeout((() => this.open()), this.options.reconnectDelay)
                }
                open() {
                    this.socket = new WebSocket(this.url),
                    this.socket.addEventListener("open", (() => r.__awaiter(this, void 0, void 0, (function  * () {
                                    this.socket.addEventListener(...this.listeners.message),
                                    this.handshake()
                                }))))
                }
                send(e) {
                    if (this.socket.readyState !== this.socket.OPEN)
                        throw new Error("Websocket connection is not open yet");
                    this.socket.send(JSON.stringify(e))
                }
                connect(e) {
                    this.url = e,
                    this.open(),
                    this.socket.addEventListener(...this.listeners.close)
                }
                disconnect() {
                    this.socket.removeEventListener(...this.listeners.close),
                    this.socket.removeEventListener(...this.listeners.message),
                    this.socket.close()
                }
            }
            t.WebsocketPlugin = o
        },
        7569: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(6661), t),
            r.__exportStar(i(1775), t),
            r.__exportStar(i(3785), t),
            r.__exportStar(i(9331), t),
            r.__exportStar(i(6072), t)
        },
        6661: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.Plugin = void 0;
            const r = i(5490),
            n = i(6507);
            t.Plugin = class {
                constructor(e) {
                    this.profile = e,
                    this.activateService = {},
                    this.options = {},
                    this.queue = []
                }
                get name() {
                    return this.profile.name
                }
                get methods() {
                    return this.profile.methods
                }
                set methods(e) {
                    this.profile.methods = e
                }
                activate() {
                    this.onActivation && this.onActivation()
                }
                deactivate() {
                    this.onDeactivation && this.onDeactivation()
                }
                setOptions(e = {}) {
                    this.options = Object.assign(Object.assign({}, this.options), e)
                }
                callPluginMethod(e, t) {
                    var i;
                    const r = null === (i = this.currentRequest) || void 0 === i ? void 0 : i.path,
                    o = n.getMethodPath(e, r);
                    if (!(o in this))
                        throw new Error(`Method ${o} is not implemented by ${this.profile.name}`);
                    return this[o](...t)
                }
                setCurrentRequest(e) {
                    this.currentRequest = e
                }
                letContinue() {
                    delete this.currentRequest,
                    this.queue = this.queue.filter((e => !1 === e.canceled && !1 === e.timedout && !1 === e.finished));
                    const e = this.queue.find((e => !1 === e.canceled && !1 === e.timedout && !1 === e.finished));
                    e && e.run()
                }
                addRequest(e, t, i) {
                    return new Promise(((o, s) => {
                            const a = new n.PluginQueueItem(o, s, e, t, this.options, i);
                            a.setCurrentRequest = e => this.setCurrentRequest(e),
                            a.callMethod = (e, t) => r.__awaiter(this, void 0, void 0, (function  * () {
                                    return this.callPluginMethod(e, t)
                                })),
                            a.letContinue = () => this.letContinue(),
                            this.queue.push(a),
                            1 === this.queue.length && this.queue[0].run()
                        }))
                }
                cancelRequests(e, t) {
                    for (const i of this.queue)
                        i.request.from != e.from || t && i.method != t || i.cancel()
                }
                askUserPermission(e, t) {
                    if (!this.currentRequest)
                        return Promise.resolve(!0);
                    if (this.methods.includes(e)) {
                        const i = this.currentRequest.from,
                        r = this.name;
                        return this.call("manager", "canCall", i, r, e, t)
                    }
                    return Promise.resolve(!1)
                }
                canActivate(e, t) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            return !0
                        }))
                }
                canDeactivate(e) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            return !0
                        }))
                }
                createService(e, t) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            if (this.methods && this.methods.includes(e))
                                throw new Error("A service cannot have the same name as an exposed method");
                            const i = n.createService(e, t);
                            return yield n.activateService(this, i),
                            i
                        }))
                }
                prepareService(e, t) {
                    return this.activateService[e] = () => r.__awaiter(this, void 0, void 0, (function  * () {
                            if (this.methods && this.methods.includes(e))
                                throw new Error("A service cannot have the same name as an exposed method");
                            const i = yield t(),
                            r = n.createService(e, i);
                            return yield n.activateService(this, r),
                            delete this.activateService[e],
                            r
                        }))
                }
                on(e, t, i) {
                    throw new Error(`Cannot use method "on" from plugin "${this.name}". It is not registered in the engine yet.`)
                }
                once(e, t, i) {
                    throw new Error(`Cannot use method "once" from plugin "${this.name}". It is not registered in the engine yet.`)
                }
                off(e, t) {
                    throw new Error(`Cannot use method "off" from plugin "${this.name}". It is not registered in the engine yet.`)
                }
                call(e, t, ...i) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            throw new Error(`Cannot use method "call" from plugin "${this.name}". It is not registered in the engine yet.`)
                        }))
                }
                cancel(e, t) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            throw new Error(`Cannot use method "cancel" from plugin "${this.name}". It is not registered in the engine yet.`)
                        }))
                }
                emit(e, ...t) {
                    throw new Error(`Cannot use method "emit" from plugin "${this.name}". It is not registered in the engine yet.`)
                }
            }
        },
        1775: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.PluginConnector = t.transformUrl = t.defaultGateways = void 0;
            const r = i(5490),
            n = i(6661);
            function o({
                url: e,
                name: i
            }) {
                const r = Object.keys(t.defaultGateways).find((t => e.startsWith(t)));
                return r ? t.defaultGateways[r](e, i) : e
            }
            t.defaultGateways = {
                "ipfs://": (e, t) => `https://${t}.dyn.plugin.remixproject.org/ipfs/${e.replace("ipfs://","")}`,
                "swarm://": (e, t) => `https://swarm-gateways.net/bzz-raw://${e.replace("swarm://","")}`
            },
            t.transformUrl = o;
            class s extends n.Plugin {
                constructor(e) {
                    super(e),
                    this.id = 0,
                    this.pendingRequest = {}
                }
                activate() {
                    const e = Object.create(null, {
                        activate: {
                            get: () => super.activate
                        }
                    });
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            const t = this.options.transformUrl ? this.options.transformUrl(this.profile) : o(this.profile);
                            return yield this.connect(t),
                            e.activate.call(this)
                        }))
                }
                deactivate() {
                    const e = Object.create(null, {
                        deactivate: {
                            get: () => super.deactivate
                        }
                    });
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            return this.loaded = !1,
                            yield this.disconnect(),
                            e.deactivate.call(this)
                        }))
                }
                setOptions(e = {}) {
                    super.setOptions(e)
                }
                callPluginMethod(e, t = []) {
                    const i = this.id++,
                    r = this.currentRequest,
                    n = this.name,
                    o = new Promise(((e, t) => {
                                this.pendingRequest[i] = (i, r) => r ? t(r) : e(i)
                            }));
                    return this.send({
                        id: i,
                        action: "request",
                        key: e,
                        payload: t,
                        requestInfo: r,
                        name: n
                    }),
                    o
                }
                handshake() {
                    var e,
                    t;
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            if (this.loaded)
                                return this.callPluginMethod("handshake", [this.profile.name, null === (t = this.options) || void 0 === t ? void 0 : t.engine]); {
                                let t;
                                this.loaded = !0;
                                try {
                                    t = yield this.callPluginMethod("handshake", [this.profile.name, null === (e = this.options) || void 0 === e ? void 0 : e.engine])
                                } catch (e) {
                                    throw this.loaded = !1,
                                    e
                                }
                                t && (this.profile.methods = t, this.call("manager", "updateProfile", this.profile))
                            }
                        }))
                }
                getMessage(e) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            if ("request" === e.action && "handshake" === e.key)
                                return this.handshake();
                            switch (e.action) {
                            case "on":
                            case "listen": {
                                    const {
                                        name: t,
                                        key: i
                                    } = e,
                                    r = "notification";
                                    this.on(t, i, ((...e) => this.send({
                                                action: r,
                                                name: t,
                                                key: i,
                                                payload: e
                                            })));
                                    break
                                }
                            case "off": {
                                    const {
                                        name: t,
                                        key: i
                                    } = e;
                                    this.off(t, i);
                                    break
                                }
                            case "once": {
                                    const {
                                        name: t,
                                        key: i
                                    } = e,
                                    r = "notification";
                                    this.once(t, i, ((...e) => this.send({
                                                action: r,
                                                name: t,
                                                key: i,
                                                payload: e
                                            })));
                                    break
                                }
                            case "emit":
                            case "notification":
                                if (!e.payload)
                                    break;
                                this.emit(e.key, ...e.payload);
                                break;
                            case "call":
                            case "request": {
                                    const t = "response";
                                    try {
                                        const i = yield this.call(e.name, e.key, ...e.payload),
                                        r = void 0;
                                        this.send(Object.assign(Object.assign({}, e), {
                                                action: t,
                                                payload: i,
                                                error: r
                                            }))
                                    } catch (i) {
                                        const r = void 0,
                                        n = i.message || i;
                                        this.send(Object.assign(Object.assign({}, e), {
                                                action: t,
                                                payload: r,
                                                error: n
                                            }))
                                    }
                                    break
                                }
                            case "cancel":
                                this.cancel(e.name, e.key);
                                break;
                            case "response": {
                                    const {
                                        id: t,
                                        payload: i,
                                        error: r
                                    } = e;
                                    this.pendingRequest[t](i, r),
                                    delete this.pendingRequest[t];
                                    break
                                }
                            default:
                                throw new Error("Message should be a notification, request or response")
                            }
                        }))
                }
            }
            t.PluginConnector = s
        },
        3785: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.Engine = void 0;
            const r = i(5490),
            n = i(6507);
            t.Engine = class {
                constructor() {
                    this.plugins = {},
                    this.events = {},
                    this.listeners = {},
                    this.eventMemory = {}
                }
                broadcast(e, t, ...i) {
                    const r = n.listenEvent(e, t);
                    this.listeners[r] && ((this.listeners[r] || []).forEach((n => {
                                if (!this.events[n][r])
                                    throw new Error(`Plugin ${n} should be listening on event ${t} from ${e}. But no callback have been found`);
                                this.events[n][r](...i)
                            })), this.eventMemory[e] ? this.eventMemory[e][t] = i : this.eventMemory[e] = {
                            [t]: i
                        })
                }
                addListener(e, t, i, r) {
                    const o = n.listenEvent(t, i);
                    this.events[e][o] || (this.events[e][o] = r),
                    this.listeners[o] || (this.listeners[o] = []),
                    this.listeners[o].includes(e) || this.listeners[o].push(e),
                    t in this.eventMemory && i in this.eventMemory[t] && r(...this.eventMemory[t][i])
                }
                removeListener(e, t, i) {
                    const r = n.listenEvent(t, i);
                    this.listeners[r] = this.listeners[r].filter((t => t !== e)),
                    delete this.events[e][r]
                }
                listenOnce(e, t, i, r) {
                    this.addListener(e, t, i, ((...n) => {
                            r(...n),
                            this.removeListener(e, t, i)
                        }))
                }
                callMethod(e, t, i, ...n) {
                    var o;
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            const r = t.split(".").shift();
                            if (!this.plugins[r])
                                throw new Error(`Cannot call ${r} from ${e}, because ${r} is not registered`);
                            const[s, a] = yield Promise.all([this.manager.getProfile(r), this.manager.getProfile(e)]);
                            if (!(yield this.manager.isActive(r))) {
                                const e = yield this.manager.canActivatePlugin(a, s, i),
                                t = yield null === (o = this.plugins[s.name]) || void 0 === o ? void 0 : o.canActivate(s, i);
                                if (!e || !t)
                                    throw new Error(`${a.name} cannot call ${i} of ${r}, because ${r} is not activated yet`);
                                yield this.manager.toggleActive(r)
                            }
                            const l = [...s.methods || [], "canDeactivate"];
                            if (!l.includes(i)) {
                                const t = `Cannot call method "${i}" of "${r}" from "${e}", because "${i}" is not exposed.`,
                                n = `Here is the list of exposed methods: ${l.map((e=>` "${e}" `)).join(",")}`;
                                throw new Error(`${t} ${n}`)
                            }
                            const c = {
                                from: e,
                                path: t
                            };
                            return this.plugins[r].addRequest(c, i, n)
                        }))
                }
                cancelMethod(e, t, i) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            const r = t.split(".").shift();
                            if (!this.plugins[r])
                                throw new Error(`Cannot cancel ${i} on ${r} from ${e}, because ${r} is not registered`);
                            const[n, o] = yield Promise.all([this.manager.getProfile(r), this.manager.getProfile(e)]);
                            if (!(yield this.manager.isActive(r)))
                                throw new Error(`${o.name} cannot cancel ${i?` $ {
                                    i
                                }
                                    of `:"calls on"}${r}, because ${r} is not activated`);
                            const s = [...n.methods || [], "canDeactivate"];
                            if (!s.includes(i) && i) {
                                const t = `Cannot cancel "${i}" of "${r}" from "${e}", because "${i}" is not exposed.`,
                                n = `Here is the list of exposed methods: ${s.map((e=>` "${e}" `)).join(",")}`;
                                throw new Error(`${t} ${n}`)
                            }
                            const a = {
                                from: e,
                                path: t
                            };
                            return this.plugins[r].cancelRequests(a, i)
                        }))
                }
                createApp(e) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            const t = Object.keys(this.plugins).map((e => this.manager.getProfile(e)));
                            return (yield Promise.all(t)).reduce(((t, i) => (t[i.name] = (i.methods || []).reduce(((t, r) => (t[r] = (...t) => this.callMethod(e, i.name, r, ...t), t)), {
                                            on: (t, r) => this.addListener(e, i.name, t, r),
                                            once: (t, r) => this.listenOnce(e, i.name, t, r),
                                            off: t => this.removeListener(e, i.name, t),
                                            profile: i
                                        }), t)), {})
                        }))
                }
                activatePlugin(e) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            if (!this.plugins[e])
                                throw new Error(`Cannot active plugin ${e} because it's not registered yet`);
                            if (yield this.manager.isActive(e))
                                return;
                            const t = this.plugins[e];
                            this.events[e] = {},
                            t.on = (t, i, r) => {
                                this.addListener(e, t, i, r)
                            },
                            t.once = (t, i, r) => {
                                this.listenOnce(e, t, i, r)
                            },
                            t.off = (t, i) => {
                                this.removeListener(e, t, i)
                            },
                            t.emit = (t, ...i) => {
                                this.broadcast(e, t, ...i)
                            },
                            t.call = (t, i, ...r) => this.callMethod(e, t, i, ...r),
                            t.cancel = (t, i) => this.cancelMethod(e, t, i),
                            t.app = yield this.createApp(e),
                            t.createApp = () => this.createApp(e),
                            yield t.activate()
                        }))
                }
                deactivatePlugin(e) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            if (!this.plugins[e])
                                throw new Error(`Cannot deactive plugin ${e} because it's not registered yet`);
                            if (!(yield this.manager.isActive(e)))
                                return;
                            const t = this.plugins[e];
                            yield t.deactivate(),
                            this.updateErrorHandler(t),
                            delete t.app,
                            delete t.createApp,
                            delete this.events[e],
                            delete this.eventMemory[e],
                            Object.keys(this.listeners).forEach((t => {
                                    this.listeners[t].forEach(((i, r) => {
                                            i === e && this.listeners[t].splice(r, 1)
                                        }))
                                }))
                        }))
                }
                updateErrorHandler(e) {
                    const t = e.name,
                    i = e => `Plugin "${t}" is currently deactivated. ${e}. Activate "${t}" first.`;
                    e.call = (e, t, ...r) => {
                        throw new Error(i(`It cannot call method ${t} of plugin ${e}.`))
                    },
                    e.cancel = (e, t, ...r) => {
                        throw new Error(i(`It cannot cancel method ${t} of plugin ${e}.`))
                    },
                    e.on = (e, t) => {
                        throw new Error(i(`It cannot listen on event ${t} of plugin ${e}.`))
                    },
                    e.once = (e, t) => {
                        throw new Error(i(`It cannot listen on event ${t} of plugin ${e}.`))
                    },
                    e.off = (e, t) => {
                        throw new Error(i("All event listeners are already removed."))
                    },
                    e.emit = (e, ...t) => {
                        throw new Error(i(`It cannot emit the event ${e}`))
                    }
                }
                register(e) {
                    const t = e => {
                        var t;
                        if (this.plugins[e.name])
                            throw new Error(`Plugin ${e.name} is already register.`);
                        if ("manager" === e.name && this.registerManager(e), this.plugins[e.name] = e, null === (t = this.manager) || void 0 === t || t.addProfile(e.profile), this.updateErrorHandler(e), this.setPluginOption) {
                            const t = this.setPluginOption(e.profile);
                            e.setOptions(t)
                        }
                        return e.onRegistration && e.onRegistration(),
                        this.onRegistration && this.onRegistration(e),
                        e.name
                    };
                    return Array.isArray(e) ? e.map(t) : t(e)
                }
                registerManager(e) {
                    this.manager = e,
                    this.manager.engineActivatePlugin = e => this.activatePlugin(e),
                    this.manager.engineDeactivatePlugin = e => this.deactivatePlugin(e);
                    const t = Object.values(this.plugins).map((e => e.profile));
                    this.manager.addProfile(t)
                }
                remove(e) {
                    const t = e => r.__awaiter(this, void 0, void 0, (function  * () {
                                yield this.manager.deactivatePlugin(e),
                                delete this.listeners[e],
                                delete this.plugins[e]
                            }));
                    return Array.isArray(e) ? Promise.all(e.map(t)) : t(e)
                }
                isRegistered(e) {
                    return !!this.plugins[e]
                }
            }
        },
        9331: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.LibraryPlugin = t.isViewLibrary = void 0;
            const r = i(5490),
            n = i(6661);
            function o(e) {
                return !!e.location
            }
            t.isViewLibrary = o;
            class s extends n.Plugin {
                constructor(e, t) {
                    if (super(t), this.library = e, this.profile = t, t.methods.forEach((i => {
                                if (!e[i])
                                    throw new Error(`Method ${i} is exposed by LibraryPlugin ${t.name}. But library doesn't expose this method`)
                                })), this.isView = o(t), this.isView && !this.render)throw new Error(`Profile ${t.name} define the location ${t.location}, but method "render" is not implemented`)
                }
                activate() {
                    const e = Object.create(null, {
                        activate: {
                            get: () => super.activate
                        }
                    });
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            if (this.isView && (yield this.call(this.profile.location, "addView", this.profile, this.render())), this.profile.notifications) {
                                if (!this.library.events || !this.library.events.emit)
                                    throw new Error(`"events" object from Library of plugin ${this.name} should implement "emit"`);
                                Object.keys(this.profile.notifications).forEach((e => {
                                        this.profile.notifications[e].forEach((t => {
                                                this.on(e, t, (i => this.library.events.emit(`[${e}] ${t}`, ...i)))
                                            }))
                                    }))
                            }
                            if (this.profile.events) {
                                if (!this.library.events || !this.library.events.emit)
                                    throw new Error(`"events" object from Library of plugin ${this.name} should implement "emit"`);
                                this.profile.events.forEach((e => {
                                        this.library.events.on(e, ((...t) => this.emit(e, ...t)))
                                    }))
                            }
                            e.activate.call(this)
                        }))
                }
                deactivate() {
                    var e;
                    this.isView && this.call(this.profile.location, "removeView", this.profile),
                    this.profile.notifications && Object.keys(this.profile.notifications).forEach((e => {
                            this.profile.notifications[e].forEach((t => this.off(e, t)))
                        })),
                    null === (e = this.profile.events) || void 0 === e || e.forEach((e => {
                            var t;
                            return null === (t = this.library.events) || void 0 === t ? void 0 : t.removeAllListeners(e)
                        })),
                    super.deactivate()
                }
                callPluginMethod(e, t) {
                    if (!this.library[e])
                        throw new Error(`LibraryPlugin ${this.name} doesn't expose method ${e}`);
                    return this.library[e](...t)
                }
            }
            t.LibraryPlugin = s
        },
        6072: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.PluginManager = void 0;
            const r = i(5490),
            n = i(4668),
            o = i(6661);
            function s(e) {
                return new Promise(((t, i) => {
                        const r = [],
                        n = [];
                        let o = 0;
                        const s = (s, a) => {
                            a && n.push(a),
                            s && r.push(s),
                            ++o === e.length && (n.length ? i(r) : t(n))
                        };
                        for (const t of e)
                            t.then((e => s(e, null))).catch((e => s(null, e)))
                    }))
            }
            class a extends o.Plugin {
                constructor(e = n.pluginManagerProfile) {
                    super(e),
                    this.profiles = {},
                    this.actives = []
                }
                get requestFrom() {
                    var e;
                    return (null === (e = this.currentRequest) || void 0 === e ? void 0 : e.from) || "manager"
                }
                engineActivatePlugin(e) {
                    throw new Error(`You cannot activate plugin "${e}", manager plugin is not register yet. Run "engine.register(manager)" first`)
                }
                engineDeactivatePlugin(e) {
                    throw new Error(`You cannot deactivate plugin "${e}", manager plugin is not register yet. Run "engine.register(manager)" first`)
                }
                getProfile(e) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            return this.profiles[e]
                        }))
                }
                getProfiles() {
                    return Object.values(this.profiles)
                }
                getActiveProfiles() {
                    return this.actives.map((e => this.profiles[e]))
                }
                updateProfile(e) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            if (!e)
                                return;
                            if (!this.profiles[e.name])
                                throw new Error(`Plugin ${e.name} is not register, you cannot update it's profile.`);
                            const t = yield this.getProfile(this.requestFrom);
                            yield this.canUpdateProfile(t, e),
                            this.profiles[e.name] = Object.assign(Object.assign({}, this.profiles[e.name]), e),
                            this.emit("profileUpdated", this.profiles[e.name])
                        }))
                }
                addProfile(e) {
                    const t = e => {
                        if (this.profiles[e.name])
                            throw new Error(`Plugin ${e.name} already exist`);
                        this.profiles[e.name] = e,
                        this.actives.includes("manager") && this.emit("profileAdded", e),
                        this.onProfileAdded && this.onProfileAdded(e)
                    };
                    return Array.isArray(e) ? e.map(t) : t(e)
                }
                isActive(e) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            return this.actives.includes(e)
                        }))
                }
                activatePlugin(e) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            this.actives.includes("manager") || (yield this.toggleActive("manager"));
                            const t = e => r.__awaiter(this, void 0, void 0, (function  * () {
                                        if (yield this.isActive(e))
                                            return;
                                        const[t, i] = yield Promise.all([this.getProfile(e), this.getProfile(this.requestFrom)]);
                                        if (!(yield this.canActivatePlugin(i, t)))
                                            throw new Error(`Plugin ${this.requestFrom} has no right to activate plugin ${e}`);
                                        yield this.toggleActive(e)
                                    }));
                            return Array.isArray(e) ? s(e.map(t)) : t(e)
                        }))
                }
                deactivatePlugin(e) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            const t = e => r.__awaiter(this, void 0, void 0, (function  * () {
                                        if (!(yield this.isActive(e)))
                                            return;
                                        const[t, i] = yield Promise.all([this.getProfile(e), this.getProfile(this.requestFrom)]);
                                        if ("manager" === i.name)
                                            return this.toggleActive(e);
                                        if (!(yield this.canDeactivatePlugin(i, t)))
                                            throw new Error(`Plugin ${this.requestFrom} has no right to deactivate plugin ${e}`);
                                        if (i.name !== t.name && !(yield this.call(t.name, "canDeactivate", i)))
                                            throw new Error(`Plugin ${this.requestFrom} has no right to deactivate plugin ${e}`);
                                        return this.toggleActive(e)
                                    }));
                            return Array.isArray(e) ? s(e.map(t)) : t(e)
                        }))
                }
                toggleActive(e) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            const t = e => r.__awaiter(this, void 0, void 0, (function  * () {
                                        const[t, i] = yield Promise.all([this.isActive(e), this.getProfile(e)]);
                                        t ? (yield this.engineDeactivatePlugin(e), this.actives = this.actives.filter((t => t !== e)), this.emit("pluginDeactivated", i), this.onPluginDeactivated && this.onPluginDeactivated(i)) : (yield this.engineActivatePlugin(e), this.actives.push(e), this.emit("pluginActivated", i), this.onPluginActivated && this.onPluginActivated(i))
                                    }));
                            return Array.isArray(e) ? Promise.all(e.map(t)) : t(e)
                        }))
                }
                canActivatePlugin(e, t) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            return !0
                        }))
                }
                canDeactivatePlugin(e, t) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            return "manager" === e.name || e.name === t.name
                        }))
                }
                canCall(e, t, i, n) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            return !0
                        }))
                }
                canUpdateProfile(e, t) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            if (t.name && e.name !== t.name)
                                throw new Error("A plugin cannot change its name.");
                            if (t.url && t.url !== this.profiles[t.name].url)
                                throw new Error("Url from Profile cannot be updated.");
                            return !0
                        }))
                }
            }
            t.PluginManager = a
        },
        4668: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(8597), t),
            r.__exportStar(i(662), t),
            r.__exportStar(i(8281), t),
            r.__exportStar(i(7372), t),
            r.__exportStar(i(7094), t),
            r.__exportStar(i(2945), t),
            r.__exportStar(i(960), t),
            r.__exportStar(i(762), t),
            r.__exportStar(i(854), t),
            r.__exportStar(i(3079), t),
            r.__exportStar(i(9327), t),
            r.__exportStar(i(2649), t),
            r.__exportStar(i(5911), t),
            r.__exportStar(i(1323), t),
            r.__exportStar(i(2568), t),
            r.__exportStar(i(4419), t)
        },
        5154: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8597: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(5154), t),
            r.__exportStar(i(3379), t),
            r.__exportStar(i(7884), t)
        },
        7884: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.compilerProfile = void 0,
            t.compilerProfile = {
                name: "solidity",
                methods: ["compile", "getCompilationResult", "compileWithParameters", "setCompilerConfig"],
                events: ["compilationFinished"]
            }
        },
        3379: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(1146), t),
            r.__exportStar(i(3812), t)
        },
        1146: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        3812: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        7160: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        662: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(7160), t),
            r.__exportStar(i(2785), t),
            r.__exportStar(i(2788), t)
        },
        2788: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.contentImportProfile = void 0,
            t.contentImportProfile = {
                name: "contentImport",
                methods: ["resolve", "resolveAndSave"]
            }
        },
        2785: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        2601: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        2945: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(2601), t),
            r.__exportStar(i(4196), t)
        },
        4196: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.dGitProfile = void 0,
            t.dGitProfile = {
                name: "dGitProvider",
                methods: ["clone", "addremote", "delremote", "remotes", "init", "status", "log", "commit", "add", "rm", "lsfiles", "readblob", "resolveref", "branch", "branches", "checkout", "currentbranch", "zip", "push", "pull", "setIpfsConfig", "getItem", "setItem", "localStorageUsed"]
            }
        },
        3757: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8281: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(8772), t),
            r.__exportStar(i(3757), t),
            r.__exportStar(i(1166), t)
        },
        1166: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.editorProfile = void 0,
            t.editorProfile = {
                name: "editor",
                methods: ["discardHighlight", "highlight", "addAnnotation", "clearAnnotations", "discardHighlightAt", "gotoLine"]
            }
        },
        8772: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        7041: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        7372: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(7041), t),
            r.__exportStar(i(7646), t),
            r.__exportStar(i(6598), t)
        },
        6598: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.filSystemProfile = void 0,
            t.filSystemProfile = {
                name: "fileManager",
                displayName: "Native Filemanager for Remix vscode plugin",
                description: "Provides communication between vscode filemanager and remix-plugin",
                location: "sidePanel",
                documentation: "https://remix-ide.readthedocs.io/en/latest/solidity_editor.html",
                version: "0.0.1",
                methods: ["getFolder", "getCurrentFile", "getFile", "setFile", "switchFile", "open", "writeFile", "readFile", "rename", "copyFile", "mkdir", "readdir", "closeAllFiles", "closeFile", "remove"],
                events: ["currentFileChanged", "fileAdded", "fileClosed", "fileRemoved", "fileRenamed", "fileSaved", "noFileSelected", "folderAdded"]
            }
        },
        7646: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        744: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        7094: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(744), t),
            r.__exportStar(i(9835), t),
            r.__exportStar(i(7964), t)
        },
        9835: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.filePanelProfile = void 0,
            t.filePanelProfile = {
                name: "filePanel",
                displayName: "File explorers",
                description: "Provides communication between remix file explorers and remix-plugin",
                location: "sidePanel",
                documentation: "",
                version: "0.0.1",
                methods: ["getCurrentWorkspace", "getWorkspaces", "createWorkspace", "registerContextMenuItem", "renameWorkspace", "deleteWorkspace"],
                events: ["setWorkspace", "workspaceRenamed", "workspaceDeleted", "workspaceCreated"]
            }
        },
        7964: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        7535: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        960: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(7535), t),
            r.__exportStar(i(3905), t)
        },
        3905: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.gitProfile = void 0,
            t.gitProfile = {
                name: "remixd.git",
                methods: ["clone", "checkout", "init", "add", "commit", "fetch", "pull", "push", "reset", "status", "remote", "log"]
            }
        },
        613: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        762: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(613), t),
            r.__exportStar(i(6105), t),
            r.__exportStar(i(1031), t)
        },
        1031: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.networkProfile = void 0,
            t.networkProfile = {
                name: "network",
                methods: ["addNetwork", "detectNetwork", "getEndpoint", "getNetworkProvider", "removeNetwork"],
                events: ["providerChanged"]
            }
        },
        6105: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        2960: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        854: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(2960), t),
            r.__exportStar(i(6486), t)
        },
        6486: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.pluginManagerProfile = void 0,
            t.pluginManagerProfile = {
                name: "manager",
                methods: ["getProfile", "updateProfile", "activatePlugin", "deactivatePlugin", "isActive", "canCall"],
                events: ["pluginActivated", "pluginDeactivated", "profileAdded", "profileUpdated"]
            }
        },
        2568: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.remixProfiles = t.remixApi = void 0;
            const r = i(8597),
            n = i(7372),
            o = i(8281),
            s = i(762),
            a = i(2649),
            l = i(9327),
            c = i(5911),
            u = i(662),
            d = i(3079),
            h = i(960),
            f = i(6998),
            p = i(854),
            v = i(7094),
            m = i(2945),
            _ = i(8510);
            t.remixApi = Object.freeze({
                manager: p.pluginManagerProfile,
                solidity: Object.assign(Object.assign({}, r.compilerProfile), {
                    name: "solidity"
                }),
                fileManager: Object.assign(Object.assign({}, n.filSystemProfile), {
                    name: "fileManager"
                }),
                dGitProvider: m.dGitProfile,
                filePanel: v.filePanelProfile,
                solidityUnitTesting: Object.assign(Object.assign({}, c.unitTestProfile), {
                    name: "solidityUnitTesting"
                }),
                editor: o.editorProfile,
                network: s.networkProfile,
                udapp: a.udappProfile,
                contentImport: u.contentImportProfile,
                settings: d.settingsProfile,
                theme: l.themeProfile,
                vscodeExtAPI: f.vscodeExtProfile,
                terminal: _.terminalProfile
            }),
            t.remixProfiles = Object.freeze({
                manager: p.pluginManagerProfile,
                solidity: Object.assign(Object.assign({}, r.compilerProfile), {
                    name: "solidity"
                }),
                fileManager: Object.assign(Object.assign({}, n.filSystemProfile), {
                    name: "fileManager"
                }),
                git: Object.assign(Object.assign({}, h.gitProfile), {
                    name: "git"
                }),
                dGitProvider: m.dGitProfile,
                filePanel: v.filePanelProfile,
                solidityUnitTesting: Object.assign(Object.assign({}, c.unitTestProfile), {
                    name: "solidityUnitTesting"
                }),
                editor: o.editorProfile,
                network: s.networkProfile,
                udapp: a.udappProfile,
                contentImport: u.contentImportProfile,
                settings: d.settingsProfile,
                theme: l.themeProfile,
                vscodeExtAPI: f.vscodeExtProfile,
                terminal: _.terminalProfile
            })
        },
        2357: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        3079: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(2357), t),
            r.__exportStar(i(664), t)
        },
        664: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.settingsProfile = void 0,
            t.settingsProfile = {
                name: "settings",
                methods: ["getGithubAccessToken"]
            }
        },
        4419: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.standardProfiles = void 0;
            const r = i(8597),
            n = i(7372),
            o = i(8281),
            s = i(762),
            a = i(2649),
            l = i(854);
            t.standardProfiles = Object.freeze({
                manager: l.pluginManagerProfile,
                solidity: Object.assign(Object.assign({}, r.compilerProfile), {
                    name: "solidity"
                }),
                fileManager: Object.assign(Object.assign({}, n.filSystemProfile), {
                    name: "fileManager"
                }),
                editor: o.editorProfile,
                network: s.networkProfile,
                udapp: a.udappProfile
            })
        },
        1082: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8510: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(1082), t),
            r.__exportStar(i(2071), t),
            r.__exportStar(i(910), t)
        },
        910: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.terminalProfile = void 0,
            t.terminalProfile = {
                name: "terminal",
                methods: ["log"]
            }
        },
        2071: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        4291: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        9327: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(4291), t),
            r.__exportStar(i(6617), t),
            r.__exportStar(i(201), t)
        },
        6617: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.themeProfile = void 0,
            t.themeProfile = {
                name: "theme",
                methods: ["currentTheme"],
                events: ["themeChanged"]
            }
        },
        201: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        240: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        2649: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(240), t),
            r.__exportStar(i(811), t),
            r.__exportStar(i(4846), t)
        },
        4846: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.udappProfile = void 0,
            t.udappProfile = {
                name: "udapp",
                methods: ["createVMAccount", "getAccounts", "sendTransaction", "getSettings", "setEnvironmentMode"],
                events: ["newTransaction"]
            }
        },
        811: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        9122: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        5911: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(9122), t),
            r.__exportStar(i(4609), t),
            r.__exportStar(i(1041), t)
        },
        1041: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.unitTestProfile = void 0,
            t.unitTestProfile = {
                name: "unitTest",
                methods: ["testFromPath", "testFromSource"]
            }
        },
        4609: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        715: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        6998: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(715), t),
            r.__exportStar(i(6602), t)
        },
        6602: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.vscodeExtProfile = void 0,
            t.vscodeExtProfile = {
                name: "vscodeExtAPI",
                methods: ["executeCommand"]
            }
        },
        8568: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        1323: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(8568), t),
            r.__exportStar(i(765), t)
        },
        765: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.windowProfile = void 0,
            t.windowProfile = {
                name: "window",
                methods: ["prompt", "confirm", "alert"]
            }
        },
        6507: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = i(5490);
            r.__exportStar(i(4378), t),
            r.__exportStar(i(9142), t),
            r.__exportStar(i(3423), t),
            r.__exportStar(i(3800), t),
            r.__exportStar(i(5548), t),
            r.__exportStar(i(7823), t),
            r.__exportStar(i(3385), t),
            r.__exportStar(i(6418), t),
            r.__exportStar(i(3975), t),
            r.__exportStar(i(2848), t),
            r.__exportStar(i(7211), t),
            r.__exportStar(i(2370), t)
        },
        4378: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.listenEvent = t.callEvent = void 0,
            t.callEvent = function (e, t, i) {
                return `[${e}] ${t}-${i}`
            },
            t.listenEvent = function (e, t) {
                return `[${e}] ${t}`
            }
        },
        9142: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getRootPath = t.getMethodPath = void 0,
            t.getMethodPath = function (e, t) {
                if (!t)
                    return e;
                const i = t.split(".");
                return i.shift(),
                i.push(e),
                i.join(".")
            },
            t.getRootPath = function (e) {
                return e.split(".").shift()
            }
        },
        3800: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.PluginQueueItem = void 0;
            const r = i(5490);
            t.PluginQueueItem = class {
                constructor(e, t, i, r, n, o) {
                    this.options = {},
                    this.resolve = e,
                    this.reject = t,
                    this.method = r,
                    this.request = i,
                    this.timer = void 0,
                    this.timedout = !1,
                    this.canceled = !1,
                    this.finished = !1,
                    this.running = !1,
                    this.args = o,
                    this.options = n
                }
                setCurrentRequest(e) {
                    throw new Error("Cannot call this directly")
                }
                callMethod(e, t) {
                    throw new Error("Cannot call this directly")
                }
                letContinue() {
                    throw new Error("Cannot call this directly")
                }
                cancel() {
                    this.canceled = !0,
                    clearTimeout(this.timer),
                    this.reject(`[CANCEL] Canceled call ${this.method} from ${this.request.from}`),
                    this.running && this.letContinue()
                }
                run() {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            if (this.canceled)
                                this.letContinue();
                            else {
                                this.timer = setTimeout((() => {
                                            this.timedout = !0,
                                            this.reject(`[TIMEOUT] Timeout for call ${this.method} from ${this.request.from}`),
                                            this.letContinue()
                                        }), this.options.queueTimeout || 1e4),
                                this.running = !0,
                                this.setCurrentRequest(this.request);
                                try {
                                    const e = yield this.callMethod(this.method, this.args);
                                    if (this.timedout || this.canceled)
                                        return;
                                    this.resolve(e)
                                } catch (e) {
                                    this.reject(e)
                                }
                                this.finished = !0,
                                this.running = !1,
                                clearTimeout(this.timer),
                                this.letContinue()
                            }
                        }))
                }
            }
        },
        3423: (e, t, i) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.PluginService = t.activateService = t.createService = t.getMethods = t.isPluginService = void 0;
            const r = i(5490),
            n = i(9142);
            function o(e) {
                if (e.methods) {
                    for (const t of e.methods)
                        if (!(t in e))
                            throw new Error(`Method ${t} is not part of serivce`);
                    return e.methods
                }
                if (t.isPluginService(e)) {
                    const t = Object.getPrototypeOf(e);
                    return Object.getOwnPropertyNames(t).filter((e => "constructor" !== e && !e.startsWith("_")))
                }
                return Object.getOwnPropertyNames(e).filter((t => "function" == typeof e[t] && !t.startsWith("_")))
            }
            function s(e, i) {
                if (i.path && n.getRootPath(i.path) !== e)
                    throw new Error(`Service path ${i.path} is different from the one provided: ${e}`);
                const r = o(i);
                for (const t of r)
                    if (!(t in i))
                        throw new Error(`Method ${t} is not part of service ${e}`);
                return t.isPluginService(i) ? (i.methods || (i.methods = r), i) : Object.assign(Object.assign({}, i), {
                    methods: r,
                    path: e
                })
            }
            function a(e, t) {
                e.methods = [...e.methods || [], ...t.methods];
                const i = o(t);
                for (const r of i)
                    e[`${t.path}.${r}`] = t[r].bind(t);
                return e.call("manager", "updateProfile", {
                    methods: e.methods
                })
            }
            t.isPluginService = e => e instanceof l,
            t.getMethods = o,
            t.createService = s,
            t.activateService = a;
            class l {
                emit(e, ...t) {
                    this.plugin.emit(e, ...t)
                }
                createService(e, t) {
                    return r.__awaiter(this, void 0, void 0, (function  * () {
                            if (this.methods.includes(e))
                                throw new Error("A service cannot have the same name as an exposed method");
                            const i = s(`${this.path}.${e}`, t);
                            return yield a(this.plugin, i),
                            i
                        }))
                }
                prepareService(e, t) {
                    if (this.methods.includes(e))
                        throw new Error("A service cannot have the same name as an exposed method");
                    const i = `${this.path}.${e}`;
                    this.plugin.activateService[i] = () => r.__awaiter(this, void 0, void 0, (function  * () {
                            const e = t(),
                            r = s(i, e);
                            return yield a(this.plugin, r),
                            delete this.plugin.activateService[i],
                            r
                        }))
                }
            }
            t.PluginService = l
        },
        5548: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        7823: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        2370: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        3385: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        6418: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        7211: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        3975: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        2848: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        5490: (e, t, i) => {
            i.r(t),
            i.d(t, {
                __assign: () => o,
                __asyncDelegator: () => P,
                __asyncGenerator: () => y,
                __asyncValues: () => w,
                __await: () => g,
                __awaiter: () => u,
                __classPrivateFieldGet: () => x,
                __classPrivateFieldSet: () => S,
                __createBinding: () => h,
                __decorate: () => a,
                __exportStar: () => f,
                __extends: () => n,
                __generator: () => d,
                __importDefault: () => M,
                __importStar: () => j,
                __makeTemplateObject: () => b,
                __metadata: () => c,
                __param: () => l,
                __read: () => v,
                __rest: () => s,
                __spread: () => m,
                __spreadArrays: () => _,
                __values: () => p
            });
            var r = function (e, t) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                }
                 || function (e, t) {
                    for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                },
                r(e, t)
            };
            function n(e, t) {
                function i() {
                    this.constructor = e
                }
                r(e, t),
                e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }
            var o = function () {
                return o = Object.assign || function (e) {
                    for (var t, i = 1, r = arguments.length; i < r; i++)
                        for (var n in t = arguments[i])
                            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                },
                o.apply(this, arguments)
            };
            function s(e, t) {
                var i = {};
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (i[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var n = 0;
                    for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
                        t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (i[r[n]] = e[r[n]])
                }
                return i
            }
            function a(e, t, i, r) {
                var n,
                o = arguments.length,
                s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    s = Reflect.decorate(e, t, i, r);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, i, s) : n(t, i)) || s);
                return o > 3 && s && Object.defineProperty(t, i, s),
                s
            }
            function l(e, t) {
                return function (i, r) {
                    t(i, r, e)
                }
            }
            function c(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                    return Reflect.metadata(e, t)
            }
            function u(e, t, i, r) {
                return new(i || (i = Promise))((function (n, o) {
                        function s(e) {
                            try {
                                l(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }
                        function a(e) {
                            try {
                                l(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }
                        function l(e) {
                            var t;
                            e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i((function (e) {
                                        e(t)
                                    }))).then(s, a)
                        }
                        l((r = r.apply(e, t || [])).next())
                    }))
            }
            function d(e, t) {
                var i,
                r,
                n,
                o,
                s = {
                    label: 0,
                    sent: function () {
                        if (1 & n[0])
                            throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw : a(1),
                    return : a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                    return this
                }),
                o;
                function a(o) {
                    return function (a) {
                        return function (o) {
                            if (i)
                                throw new TypeError("Generator is already executing.");
                            for (; s; )
                                try {
                                    if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, o[1])).done)
                                        return n;
                                    switch (r = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        n = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++,
                                        r = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(),
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!((n = (n = s.trys).length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < n[1]) {
                                            s.label = n[1],
                                            n = o;
                                            break
                                        }
                                        if (n && s.label < n[2]) {
                                            s.label = n[2],
                                            s.ops.push(o);
                                            break
                                        }
                                        n[2] && s.ops.pop(),
                                        s.trys.pop();
                                        continue
                                    }
                                    o = t.call(e, s)
                                } catch (e) {
                                    o = [6, e],
                                    r = 0
                                }
                            finally {
                                i = n = 0
                            }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }
                        ([o, a])
                    }
                }
            }
            var h = Object.create ? function (e, t, i, r) {
                void 0 === r && (r = i),
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                        return t[i]
                    }
                })
            }
             : function (e, t, i, r) {
                void 0 === r && (r = i),
                e[r] = t[i]
            };
            function f(e, t) {
                for (var i in e)
                    "default" === i || Object.prototype.hasOwnProperty.call(t, i) || h(t, e, i)
            }
            function p(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                i = t && e[t],
                r = 0;
                if (i)
                    return i.call(e);
                if (e && "number" == typeof e.length)
                    return {
                        next: function () {
                            return e && r >= e.length && (e = void 0), {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }
            function v(e, t) {
                var i = "function" == typeof Symbol && e[Symbol.iterator];
                if (!i)
                    return e;
                var r,
                n,
                o = i.call(e),
                s = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
                        s.push(r.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                }
                finally {
                    try {
                        r && !r.done && (i = o.return) && i.call(o)
                    }
                    finally {
                        if (n)
                            throw n.error
                    }
                }
                return s
            }
            function m() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(v(arguments[t]));
                return e
            }
            function _() {
                for (var e = 0, t = 0, i = arguments.length; t < i; t++)
                    e += arguments[t].length;
                var r = Array(e),
                n = 0;
                for (t = 0; t < i; t++)
                    for (var o = arguments[t], s = 0, a = o.length; s < a; s++, n++)
                        r[n] = o[s];
                return r
            }
            function g(e) {
                return this instanceof g ? (this.v = e, this) : new g(e)
            }
            function y(e, t, i) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var r,
                n = i.apply(e, t || []),
                o = [];
                return r = {},
                s("next"),
                s("throw"),
                s("return"),
                r[Symbol.asyncIterator] = function () {
                    return this
                },
                r;
                function s(e) {
                    n[e] && (r[e] = function (t) {
                        return new Promise((function (i, r) {
                                o.push([e, t, i, r]) > 1 || a(e, t)
                            }))
                    })
                }
                function a(e, t) {
                    try {
                        (i = n[e](t)).value instanceof g ? Promise.resolve(i.value.v).then(l, c) : u(o[0][2], i)
                    } catch (e) {
                        u(o[0][3], e)
                    }
                    var i
                }
                function l(e) {
                    a("next", e)
                }
                function c(e) {
                    a("throw", e)
                }
                function u(e, t) {
                    e(t),
                    o.shift(),
                    o.length && a(o[0][0], o[0][1])
                }
            }
            function P(e) {
                var t,
                i;
                return t = {},
                r("next"),
                r("throw", (function (e) {
                        throw e
                    })),
                r("return"),
                t[Symbol.iterator] = function () {
                    return this
                },
                t;
                function r(r, n) {
                    t[r] = e[r] ? function (t) {
                        return (i = !i) ? {
                            value: g(e[r](t)),
                            done: "return" === r
                        }
                         : n ? n(t) : t
                    }
                     : n
                }
            }
            function w(e) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var t,
                i = e[Symbol.asyncIterator];
                return i ? i.call(e) : (e = p(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function () {
                    return this
                }, t);
                function r(i) {
                    t[i] = e[i] && function (t) {
                        return new Promise((function (r, n) {
                                !function (e, t, i, r) {
                                    Promise.resolve(r).then((function (t) {
                                            e({
                                                value: t,
                                                done: i
                                            })
                                        }), t)
                                }
                                (r, n, (t = e[i](t)).done, t.value)
                            }))
                    }
                }
            }
            function b(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }
            var O = Object.create ? function (e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
             : function (e, t) {
                e.default = t
            };
            function j(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var i in e)
                        "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && h(t, e, i);
                return O(t, e),
                t
            }
            function M(e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            }
            function x(e, t) {
                if (!t.has(e))
                    throw new TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }
            function S(e, t, i) {
                if (!t.has(e))
                    throw new TypeError("attempted to set private field on non-instance");
                return t.set(e, i),
                i
            }
        }
    },
    t = {};
    function i(r) {
        var n = t[r];
        if (void 0 !== n)
            return n.exports;
        var o = t[r] = {
            exports: {}
        };
        return e[r](o, o.exports, i),
        o.exports
    }
    i.d = (e, t) => {
        for (var r in t)
            i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    },
    i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    i.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var r = i(6010);
    plugin_engine_web = r
})();
