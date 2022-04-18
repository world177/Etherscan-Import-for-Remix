/*! For license information please see plugin_iframe.js.LICENSE.txt */
var plugin_iframe;
(() => {
    "use strict";
    var e = {
        4668: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(8597), t),
            n.__exportStar(r(662), t),
            n.__exportStar(r(8281), t),
            n.__exportStar(r(7372), t),
            n.__exportStar(r(7094), t),
            n.__exportStar(r(2945), t),
            n.__exportStar(r(960), t),
            n.__exportStar(r(762), t),
            n.__exportStar(r(854), t),
            n.__exportStar(r(3079), t),
            n.__exportStar(r(9327), t),
            n.__exportStar(r(2649), t),
            n.__exportStar(r(5911), t),
            n.__exportStar(r(1323), t),
            n.__exportStar(r(2568), t),
            n.__exportStar(r(4419), t)
        },
        2848: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8597: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(2848), t),
            n.__exportStar(r(3379), t),
            n.__exportStar(r(7884), t)
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
        3379: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(1146), t),
            n.__exportStar(r(3812), t)
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
        662: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(7160), t),
            n.__exportStar(r(2785), t),
            n.__exportStar(r(2788), t)
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
        2945: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(2601), t),
            n.__exportStar(r(4196), t)
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
        8281: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(8772), t),
            n.__exportStar(r(3757), t),
            n.__exportStar(r(1166), t)
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
        7372: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(7041), t),
            n.__exportStar(r(7646), t),
            n.__exportStar(r(6598), t)
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
        7094: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(744), t),
            n.__exportStar(r(9835), t),
            n.__exportStar(r(7964), t)
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
        960: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(7535), t),
            n.__exportStar(r(3905), t)
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
        762: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(613), t),
            n.__exportStar(r(6105), t),
            n.__exportStar(r(1031), t)
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
        854: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(2960), t),
            n.__exportStar(r(6486), t)
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
        2568: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.remixProfiles = t.remixApi = void 0;
            const n = r(8597),
            o = r(7372),
            i = r(8281),
            s = r(762),
            a = r(2649),
            l = r(9327),
            c = r(5911),
            u = r(662),
            d = r(3079),
            f = r(960),
            p = r(6998),
            h = r(854),
            _ = r(7094),
            v = r(2945),
            m = r(8510);
            t.remixApi = Object.freeze({
                manager: h.pluginManagerProfile,
                solidity: Object.assign(Object.assign({}, n.compilerProfile), {
                    name: "solidity"
                }),
                fileManager: Object.assign(Object.assign({}, o.filSystemProfile), {
                    name: "fileManager"
                }),
                dGitProvider: v.dGitProfile,
                filePanel: _.filePanelProfile,
                solidityUnitTesting: Object.assign(Object.assign({}, c.unitTestProfile), {
                    name: "solidityUnitTesting"
                }),
                editor: i.editorProfile,
                network: s.networkProfile,
                udapp: a.udappProfile,
                contentImport: u.contentImportProfile,
                settings: d.settingsProfile,
                theme: l.themeProfile,
                vscodeExtAPI: p.vscodeExtProfile,
                terminal: m.terminalProfile
            }),
            t.remixProfiles = Object.freeze({
                manager: h.pluginManagerProfile,
                solidity: Object.assign(Object.assign({}, n.compilerProfile), {
                    name: "solidity"
                }),
                fileManager: Object.assign(Object.assign({}, o.filSystemProfile), {
                    name: "fileManager"
                }),
                git: Object.assign(Object.assign({}, f.gitProfile), {
                    name: "git"
                }),
                dGitProvider: v.dGitProfile,
                filePanel: _.filePanelProfile,
                solidityUnitTesting: Object.assign(Object.assign({}, c.unitTestProfile), {
                    name: "solidityUnitTesting"
                }),
                editor: i.editorProfile,
                network: s.networkProfile,
                udapp: a.udappProfile,
                contentImport: u.contentImportProfile,
                settings: d.settingsProfile,
                theme: l.themeProfile,
                vscodeExtAPI: p.vscodeExtProfile,
                terminal: m.terminalProfile
            })
        },
        2357: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        3079: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(2357), t),
            n.__exportStar(r(664), t)
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
        4419: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.standardProfiles = void 0;
            const n = r(8597),
            o = r(7372),
            i = r(8281),
            s = r(762),
            a = r(2649),
            l = r(854);
            t.standardProfiles = Object.freeze({
                manager: l.pluginManagerProfile,
                solidity: Object.assign(Object.assign({}, n.compilerProfile), {
                    name: "solidity"
                }),
                fileManager: Object.assign(Object.assign({}, o.filSystemProfile), {
                    name: "fileManager"
                }),
                editor: i.editorProfile,
                network: s.networkProfile,
                udapp: a.udappProfile
            })
        },
        1082: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8510: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(1082), t),
            n.__exportStar(r(2071), t),
            n.__exportStar(r(910), t)
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
        9327: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(4291), t),
            n.__exportStar(r(6617), t),
            n.__exportStar(r(201), t)
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
        2649: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(240), t),
            n.__exportStar(r(811), t),
            n.__exportStar(r(4846), t)
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
        5911: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(9122), t),
            n.__exportStar(r(4609), t),
            n.__exportStar(r(1041), t)
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
        6998: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(715), t),
            n.__exportStar(r(6602), t)
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
        1323: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(8568), t),
            n.__exportStar(r(765), t)
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
        6010: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(1290), t),
            n.__exportStar(r(5395), t)
        },
        1290: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.createClient = t.IframeConnector = void 0;
            const n = r(5490),
            o = r(6807),
            i = r(5395);
            class s {
                constructor(e) {
                    this.options = e
                }
                send(e) {
                    this.source ? this.source.postMessage(e, this.origin) : o.isHandshake(e) && window.parent.postMessage(e, "*")
                }
                on(e) {
                    window.addEventListener("message", (t => n.__awaiter(this, void 0, void 0, (function  * () {
                                    if (t.source && t.data && o.isPluginMessage(t.data))
                                        return (yield o.checkOrigin(t.origin, this.options)) ? (o.isHandshake(t.data) && (this.source = t.source, this.origin = t.origin), void e(t.data)) : console.warn("Origin provided is not allow in message", t)
                                }))), !1)
                }
            }
            t.IframeConnector = s,
            t.createClient = (e = new o.PluginClient) => {
                const t = e,
                r = e.options,
                n = new s(r);
                return o.connectClient(n, t),
                o.applyApi(t),
                r.customTheme || i.listenOnThemeChanged(t),
                t
            }
        },
        5395: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.listenOnThemeChanged = void 0;
            const n = r(5490);
            function o(e, t) {
                e.setAttribute("href", t.url.replace(/^http:/, "").replace(/^https:/, "")),
                document.documentElement.style.setProperty("--theme", t.quality)
            }
            t.listenOnThemeChanged = function (e, t) {
                return n.__awaiter(this, void 0, void 0, (function  * () {
                        if (t && t.customTheme)
                            return;
                        const r = document.createElement("link");
                        return r.setAttribute("rel", "stylesheet"),
                        document.head.prepend(r),
                        e.onload((() => n.__awaiter(this, void 0, void 0, (function  * () {
                                        e.on("theme", "themeChanged", (e => o(r, e)));
                                        const t = yield e.call("theme", "currentTheme");
                                        o(r, t)
                                    })))),
                        r
                    }))
            }
        },
        6507: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(4378), t),
            n.__exportStar(r(9142), t),
            n.__exportStar(r(3423), t),
            n.__exportStar(r(3800), t),
            n.__exportStar(r(5548), t),
            n.__exportStar(r(7823), t),
            n.__exportStar(r(3385), t),
            n.__exportStar(r(6418), t),
            n.__exportStar(r(3975), t),
            n.__exportStar(r(6191), t),
            n.__exportStar(r(7211), t),
            n.__exportStar(r(2370), t)
        },
        4378: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.listenEvent = t.callEvent = void 0,
            t.callEvent = function (e, t, r) {
                return `[${e}] ${t}-${r}`
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
                const r = t.split(".");
                return r.shift(),
                r.push(e),
                r.join(".")
            },
            t.getRootPath = function (e) {
                return e.split(".").shift()
            }
        },
        3800: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.PluginQueueItem = void 0;
            const n = r(5490);
            t.PluginQueueItem = class {
                constructor(e, t, r, n, o, i) {
                    this.options = {},
                    this.resolve = e,
                    this.reject = t,
                    this.method = n,
                    this.request = r,
                    this.timer = void 0,
                    this.timedout = !1,
                    this.canceled = !1,
                    this.finished = !1,
                    this.running = !1,
                    this.args = i,
                    this.options = o
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
                    return n.__awaiter(this, void 0, void 0, (function  * () {
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
        3423: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.PluginService = t.activateService = t.createService = t.getMethods = t.isPluginService = void 0;
            const n = r(5490),
            o = r(9142);
            function i(e) {
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
            function s(e, r) {
                if (r.path && o.getRootPath(r.path) !== e)
                    throw new Error(`Service path ${r.path} is different from the one provided: ${e}`);
                const n = i(r);
                for (const t of n)
                    if (!(t in r))
                        throw new Error(`Method ${t} is not part of service ${e}`);
                return t.isPluginService(r) ? (r.methods || (r.methods = n), r) : Object.assign(Object.assign({}, r), {
                    methods: n,
                    path: e
                })
            }
            function a(e, t) {
                e.methods = [...e.methods || [], ...t.methods];
                const r = i(t);
                for (const n of r)
                    e[`${t.path}.${n}`] = t[n].bind(t);
                return e.call("manager", "updateProfile", {
                    methods: e.methods
                })
            }
            t.isPluginService = e => e instanceof l,
            t.getMethods = i,
            t.createService = s,
            t.activateService = a;
            class l {
                emit(e, ...t) {
                    this.plugin.emit(e, ...t)
                }
                createService(e, t) {
                    return n.__awaiter(this, void 0, void 0, (function  * () {
                            if (this.methods.includes(e))
                                throw new Error("A service cannot have the same name as an exposed method");
                            const r = s(`${this.path}.${e}`, t);
                            return yield a(this.plugin, r),
                            r
                        }))
                }
                prepareService(e, t) {
                    if (this.methods.includes(e))
                        throw new Error("A service cannot have the same name as an exposed method");
                    const r = `${this.path}.${e}`;
                    this.plugin.activateService[r] = () => n.__awaiter(this, void 0, void 0, (function  * () {
                            const e = t(),
                            n = s(r, e);
                            return yield a(this.plugin, n),
                            delete this.plugin.activateService[r],
                            n
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
        6191: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        6807: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = r(5490);
            n.__exportStar(r(5349), t),
            n.__exportStar(r(7753), t),
            n.__exportStar(r(1150), t),
            n.__exportStar(r(2008), t),
            n.__exportStar(r(9665), t)
        },
        5349: (e, t) => {
            function r(e, t) {
                if ("string" != typeof t.name)
                    throw new Error("Profile should have a name");
                const r = (t.methods || []).reduce(((r, n) => Object.assign(Object.assign({}, r), {
                            [n]: e.call.bind(e, t.name, n)
                        })), {});
                return Object.assign({
                    on: (r, n) => {
                        e.on.call(e, t.name, r, n)
                    }
                }, r)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getApiMap = t.createApi = void 0,
            t.createApi = r,
            t.getApiMap = function (e, t) {
                return Object.keys(t).reduce(((n, o) => {
                        const i = t[o];
                        return Object.assign(Object.assign({}, n), {
                            [o]: r(e, i)
                        })
                    }), {})
            }
        },
        7753: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.PluginClient = t.handleConnectionError = t.defaultOptions = void 0;
            const n = r(5490),
            o = r(543),
            i = r(4668),
            s = r(6507);
            function a(e) {
                const t = e ? `Make sure the port of the IDE is ${e.port}` : "If you are using a local IDE, make sure to add devMode in client options";
                throw new Error(`Not connected to the IDE. ${t}`)
            }
            t.defaultOptions = {
                customTheme: !1,
                customApi: i.remixProfiles
            },
            t.handleConnectionError = a,
            t.PluginClient = class {
                constructor(e = {}) {
                    this.id = 0,
                    this.isLoaded = !1,
                    this.events = new o.EventEmitter,
                    this.activateService = {},
                    this.options = Object.assign(Object.assign({}, t.defaultOptions), e),
                    this.events.once("loaded", (() => {
                            this.isLoaded = !0,
                            this.onActivation && this.onActivation()
                        }))
                }
                onload(e) {
                    return new Promise(((t, r) => {
                            const n = () => {
                                t(),
                                e && e()
                            };
                            this.isLoaded ? n() : this.events.once("loaded", (() => n()))
                        }))
                }
                askUserPermission(e, t) {
                    if (!this.currentRequest)
                        return Promise.resolve(!0);
                    if (this.methods.includes(e)) {
                        const r = this.currentRequest.from,
                        n = this.name;
                        return this.call("manager", "canCall", r, n, e, t)
                    }
                    return Promise.resolve(!1)
                }
                canDeactivate(e) {
                    return !0
                }
                call(e, t, ...r) {
                    return this.isLoaded || a(this.options.devMode),
                    this.id++,
                    new Promise(((n, o) => {
                            const i = s.callEvent(e, t, this.id);
                            this.events.once(i, ((e, t) => {
                                    t ? o(new Error(`Error from IDE : ${t}`)) : n(e)
                                })),
                            this.events.emit("send", {
                                action: "request",
                                name: e,
                                key: t,
                                payload: r,
                                id: this.id
                            })
                        }))
                }
                cancel(e, t) {
                    this.isLoaded || a(this.options.devMode),
                    this.events.emit("send", {
                        action: "cancel",
                        name: e,
                        key: t
                    })
                }
                on(e, t, r) {
                    const n = s.listenEvent(e, t);
                    this.events.on(n, r),
                    this.events.emit("send", {
                        action: "on",
                        name: e,
                        key: t,
                        id: this.id
                    })
                }
                once(e, t, r) {
                    const n = s.listenEvent(e, t);
                    this.events.once(n, r),
                    this.events.emit("send", {
                        action: "once",
                        name: e,
                        key: t,
                        id: this.id
                    })
                }
                off(e, t) {
                    const r = s.listenEvent(e, t);
                    this.events.removeAllListeners(r),
                    this.events.emit("send", {
                        action: "off",
                        name: e,
                        key: t,
                        id: this.id
                    })
                }
                emit(e, ...t) {
                    this.isLoaded || a(this.options.devMode),
                    this.events.emit("send", {
                        action: "emit",
                        key: e,
                        payload: t
                    })
                }
                createService(e, t) {
                    return n.__awaiter(this, void 0, void 0, (function  * () {
                            if (this.methods && this.methods.includes(e))
                                throw new Error("A service cannot have the same name as an exposed method");
                            const r = s.createService(e, t);
                            return yield s.activateService(this, r),
                            r
                        }))
                }
                prepareService(e, t) {
                    return this.activateService[e] = () => n.__awaiter(this, void 0, void 0, (function  * () {
                            if (this.methods && this.methods.includes(e))
                                throw new Error("A service cannot have the same name as an exposed method");
                            const r = yield t(),
                            n = s.createService(e, r);
                            return yield s.activateService(this, n),
                            delete this.activateService[e],
                            n
                        }))
                }
            }
        },
        1150: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.createConnectorClient = t.applyApi = t.connectClient = t.isPluginMessage = t.isHandshake = void 0;
            const n = r(5490),
            o = r(6507),
            i = r(7753),
            s = r(5349);
            function a(e) {
                return "handshake" === e.key && ("request" === e.action || "call" === e.action)
            }
            function l(e, t = new i.PluginClient) {
                let r = !1;
                return e.on((({
                            action: i,
                            key: s,
                            name: l,
                            payload: c,
                            id: u,
                            requestInfo: d,
                            error: f
                        }) => n.__awaiter(this, void 0, void 0, (function  * () {
                                try {
                                    if (a({
                                            action: i,
                                            key: s
                                        })) {
                                        r || (r = !0, t.events.on("send", (t => e.send(t))), t.events.emit("loaded"), t.name = c[0]);
                                        const n = {
                                            action: "response",
                                            name: l,
                                            key: s,
                                            id: u,
                                            payload: t.methods
                                        };
                                        return void e.send(n)
                                    }
                                    if (!r)
                                        throw new Error("Handshake before communicating");
                                    switch (i) {
                                    case "emit":
                                    case "notification":
                                        t.events.emit(o.listenEvent(l, s), ...c);
                                        break;
                                    case "response":
                                        t.events.emit(o.callEvent(l, s, u), c, f),
                                        delete t.currentRequest;
                                        break;
                                    case "call":
                                    case "request": {
                                            const r = d && d.path,
                                            n = o.getMethodPath(s, r);
                                            if (!t[n])
                                                throw new Error(`Method ${n} doesn't exist on plugin ${l}`);
                                            t.currentRequest = d;
                                            const i = yield t[n](...c),
                                            a = {
                                                action: "response",
                                                name: l,
                                                key: s,
                                                id: u,
                                                payload: i
                                            };
                                            e.send(a);
                                            break
                                        }
                                    }
                                } catch (t) {
                                    console.error(t);
                                    const r = {
                                        action: "request" === i ? "response" : i,
                                        name: l,
                                        key: s,
                                        id: u,
                                        error: t.message || t
                                    };
                                    e.send(r)
                                }
                            })))),
                r || e.send({
                    action: "request",
                    key: "handshake",
                    id: -1
                }),
                t
            }
            function c(e) {
                const t = e.options.customApi || {};
                for (const r in t) {
                    if (e[r])
                        throw new Error(`Your plugin client should have a method/attribut named "${r}" as it is the name of another plugin. To prevent this set the option "customApi" to "null" in the client's options. For exemple: "const client = createClient(new PluginClient<any, any>({ customApi: null }))".`);
                    e[r] = s.createApi(e, t[r])
                }
            }
            t.isHandshake = a,
            t.isPluginMessage = function (e) {
                return "object" == typeof e && "action" in e && "name" in e
            },
            t.connectClient = l,
            t.applyApi = c,
            t.createConnectorClient = (e, t = new i.PluginClient) => {
                const r = t;
                return l(e, r),
                c(r),
                r
            }
        },
        2008: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.PluginNode = void 0;
            const n = r(6507);
            class o {
                constructor(e, t) {
                    this.path = e,
                    this.client = t
                }
                get(e) {
                    return new o(`${this.path}.${e}`, this.client)
                }
                call(e, ...t) {
                    return this.client.call(this.path, e, t)
                }
                on(e, t) {
                    this.client.on(n.getRootPath(this.path), e, t)
                }
            }
            t.PluginNode = o
        },
        9665: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.checkOrigin = t.getDevmodeOrigins = t.getOriginsFromUrl = t.remixOrgins = void 0;
            const n = r(5490);
            function o(e) {
                return n.__awaiter(this, void 0, void 0, (function  * () {
                        return (yield fetch(e)).json()
                    }))
            }
            function i({
                devMode: e
            }) {
                return [...e.port ? [`http://127.0.0.1:${e.port}`, `http://localhost:${e.port}`, `https://127.0.0.1:${e.port}`, `https://localhost:${e.port}`] : [], ...e.origins ? "string" == typeof e.origins ? [e.origins] : e.origins : []]
            }
            t.remixOrgins = "https://gist.githubusercontent.com/EthereumRemix/091ccc57986452bbb33f57abfb13d173/raw/3367e019335746b73288e3710af2922d4c8ef5a3/origins.json",
            t.getOriginsFromUrl = o,
            t.getDevmodeOrigins = i,
            t.checkOrigin = function (e, t = {}) {
                return n.__awaiter(this, void 0, void 0, (function  * () {
                        let r = [];
                        if (t.allowOrigins)
                            if (Array.isArray(t.allowOrigins))
                                r = r.concat(t.allowOrigins);
                            else {
                                const e = yield o(t.allowOrigins);
                                r = r.concat(e)
                            }
                        else {
                            if (!t.devMode)
                                return !0; {
                                const e = i(t);
                                r = r.concat(e)
                            }
                        }
                        return r.includes(e)
                    }))
            }
        },
        543: e => {
            var t,
            r = "object" == typeof Reflect ? Reflect : null,
            n = r && "function" == typeof r.apply ? r.apply : function (e, t, r) {
                return Function.prototype.apply.call(e, t, r)
            };
            t = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            }
             : function (e) {
                return Object.getOwnPropertyNames(e)
            };
            var o = Number.isNaN || function (e) {
                return e != e
            };
            function i() {
                i.init.call(this)
            }
            e.exports = i,
            e.exports.once = function (e, t) {
                return new Promise((function (r, n) {
                        function o() {
                            void 0 !== i && e.removeListener("error", i),
                            r([].slice.call(arguments))
                        }
                        var i;
                        "error" !== t && (i = function (r) {
                            e.removeListener(t, o),
                            n(r)
                        }, e.once("error", i)),
                        e.once(t, o)
                    }))
            },
            i.EventEmitter = i,
            i.prototype._events = void 0,
            i.prototype._eventsCount = 0,
            i.prototype._maxListeners = void 0;
            var s = 10;
            function a(e) {
                if ("function" != typeof e)
                    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
            }
            function l(e) {
                return void 0 === e._maxListeners ? i.defaultMaxListeners : e._maxListeners
            }
            function c(e, t, r, n) {
                var o,
                i,
                s,
                c;
                if (a(r), void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), i = e._events), s = i[t]), void 0 === s)
                    s = i[t] = r, ++e._eventsCount;
                else if ("function" == typeof s ? s = i[t] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), (o = l(e)) > 0 && s.length > o && !s.warned) {
                    s.warned = !0;
                    var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    u.name = "MaxListenersExceededWarning",
                    u.emitter = e,
                    u.type = t,
                    u.count = s.length,
                    c = u,
                    console && console.warn && console.warn(c)
                }
                return e
            }
            function u() {
                if (!this.fired)
                    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }
            function d(e, t, r) {
                var n = {
                    fired: !1,
                    wrapFn: void 0,
                    target: e,
                    type: t,
                    listener: r
                },
                o = u.bind(n);
                return o.listener = r,
                n.wrapFn = o,
                o
            }
            function f(e, t, r) {
                var n = e._events;
                if (void 0 === n)
                    return [];
                var o = n[t];
                return void 0 === o ? [] : "function" == typeof o ? r ? [o.listener || o] : [o] : r ? function (e) {
                    for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                        t[r] = e[r].listener || e[r];
                    return t
                }
                (o) : h(o, o.length)
            }
            function p(e) {
                var t = this._events;
                if (void 0 !== t) {
                    var r = t[e];
                    if ("function" == typeof r)
                        return 1;
                    if (void 0 !== r)
                        return r.length
                }
                return 0
            }
            function h(e, t) {
                for (var r = new Array(t), n = 0; n < t; ++n)
                    r[n] = e[n];
                return r
            }
            Object.defineProperty(i, "defaultMaxListeners", {
                enumerable: !0,
                get: function () {
                    return s
                },
                set: function (e) {
                    if ("number" != typeof e || e < 0 || o(e))
                        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    s = e
                }
            }),
            i.init = function () {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0),
                this._maxListeners = this._maxListeners || void 0
            },
            i.prototype.setMaxListeners = function (e) {
                if ("number" != typeof e || e < 0 || o(e))
                    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                return this._maxListeners = e,
                this
            },
            i.prototype.getMaxListeners = function () {
                return l(this)
            },
            i.prototype.emit = function (e) {
                for (var t = [], r = 1; r < arguments.length; r++)
                    t.push(arguments[r]);
                var o = "error" === e,
                i = this._events;
                if (void 0 !== i)
                    o = o && void 0 === i.error;
                else if (!o)
                    return !1;
                if (o) {
                    var s;
                    if (t.length > 0 && (s = t[0]), s instanceof Error)
                        throw s;
                    var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                    throw a.context = s,
                    a
                }
                var l = i[e];
                if (void 0 === l)
                    return !1;
                if ("function" == typeof l)
                    n(l, this, t);
                else {
                    var c = l.length,
                    u = h(l, c);
                    for (r = 0; r < c; ++r)
                        n(u[r], this, t)
                }
                return !0
            },
            i.prototype.addListener = function (e, t) {
                return c(this, e, t, !1)
            },
            i.prototype.on = i.prototype.addListener,
            i.prototype.prependListener = function (e, t) {
                return c(this, e, t, !0)
            },
            i.prototype.once = function (e, t) {
                return a(t),
                this.on(e, d(this, e, t)),
                this
            },
            i.prototype.prependOnceListener = function (e, t) {
                return a(t),
                this.prependListener(e, d(this, e, t)),
                this
            },
            i.prototype.removeListener = function (e, t) {
                var r,
                n,
                o,
                i,
                s;
                if (a(t), void 0 === (n = this._events))
                    return this;
                if (void 0 === (r = n[e]))
                    return this;
                if (r === t || r.listener === t)
                    0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
                else if ("function" != typeof r) {
                    for (o = -1, i = r.length - 1; i >= 0; i--)
                        if (r[i] === t || r[i].listener === t) {
                            s = r[i].listener,
                            o = i;
                            break
                        }
                    if (o < 0)
                        return this;
                    0 === o ? r.shift() : function (e, t) {
                        for (; t + 1 < e.length; t++)
                            e[t] = e[t + 1];
                        e.pop()
                    }
                    (r, o),
                    1 === r.length && (n[e] = r[0]),
                    void 0 !== n.removeListener && this.emit("removeListener", e, s || t)
                }
                return this
            },
            i.prototype.off = i.prototype.removeListener,
            i.prototype.removeAllListeners = function (e) {
                var t,
                r,
                n;
                if (void 0 === (r = this._events))
                    return this;
                if (void 0 === r.removeListener)
                    return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
                if (0 === arguments.length) {
                    var o,
                    i = Object.keys(r);
                    for (n = 0; n < i.length; ++n)
                        "removeListener" !== (o = i[n]) && this.removeAllListeners(o);
                    return this.removeAllListeners("removeListener"),
                    this._events = Object.create(null),
                    this._eventsCount = 0,
                    this
                }
                if ("function" == typeof(t = r[e]))
                    this.removeListener(e, t);
                else if (void 0 !== t)
                    for (n = t.length - 1; n >= 0; n--)
                        this.removeListener(e, t[n]);
                return this
            },
            i.prototype.listeners = function (e) {
                return f(this, e, !0)
            },
            i.prototype.rawListeners = function (e) {
                return f(this, e, !1)
            },
            i.listenerCount = function (e, t) {
                return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t)
            },
            i.prototype.listenerCount = p,
            i.prototype.eventNames = function () {
                return this._eventsCount > 0 ? t(this._events) : []
            }
        },
        5490: (e, t, r) => {
            r.r(t),
            r.d(t, {
                __assign: () => i,
                __asyncDelegator: () => P,
                __asyncGenerator: () => g,
                __asyncValues: () => b,
                __await: () => y,
                __awaiter: () => u,
                __classPrivateFieldGet: () => S,
                __classPrivateFieldSet: () => M,
                __createBinding: () => f,
                __decorate: () => a,
                __exportStar: () => p,
                __extends: () => o,
                __generator: () => d,
                __importDefault: () => x,
                __importStar: () => w,
                __makeTemplateObject: () => O,
                __metadata: () => c,
                __param: () => l,
                __read: () => _,
                __rest: () => s,
                __spread: () => v,
                __spreadArrays: () => m,
                __values: () => h
            });
            var n = function (e, t) {
                return n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                }
                 || function (e, t) {
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                },
                n(e, t)
            };
            function o(e, t) {
                function r() {
                    this.constructor = e
                }
                n(e, t),
                e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var i = function () {
                return i = Object.assign || function (e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r])
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                },
                i.apply(this, arguments)
            };
            function s(e, t) {
                var r = {};
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                        t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
                }
                return r
            }
            function a(e, t, r, n) {
                var o,
                i = arguments.length,
                s = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    s = Reflect.decorate(e, t, r, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
                return i > 3 && s && Object.defineProperty(t, r, s),
                s
            }
            function l(e, t) {
                return function (r, n) {
                    t(r, n, e)
                }
            }
            function c(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                    return Reflect.metadata(e, t)
            }
            function u(e, t, r, n) {
                return new(r || (r = Promise))((function (o, i) {
                        function s(e) {
                            try {
                                l(n.next(e))
                            } catch (e) {
                                i(e)
                            }
                        }
                        function a(e) {
                            try {
                                l(n.throw(e))
                            } catch (e) {
                                i(e)
                            }
                        }
                        function l(e) {
                            var t;
                            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                                        e(t)
                                    }))).then(s, a)
                        }
                        l((n = n.apply(e, t || [])).next())
                    }))
            }
            function d(e, t) {
                var r,
                n,
                o,
                i,
                s = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw : a(1),
                    return : a(2)
                },
                "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }),
                i;
                function a(i) {
                    return function (a) {
                        return function (i) {
                            if (r)
                                throw new TypeError("Generator is already executing.");
                            for (; s; )
                                try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done)
                                        return o;
                                    switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++,
                                        n = i[1],
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(),
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = s.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1],
                                            o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2],
                                            s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(),
                                        s.trys.pop();
                                        continue
                                    }
                                    i = t.call(e, s)
                                } catch (e) {
                                    i = [6, e],
                                    n = 0
                                }
                            finally {
                                r = o = 0
                            }
                            if (5 & i[0])
                                throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }
                        ([i, a])
                    }
                }
            }
            var f = Object.create ? function (e, t, r, n) {
                void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[r]
                    }
                })
            }
             : function (e, t, r, n) {
                void 0 === n && (n = r),
                e[n] = t[r]
            };
            function p(e, t) {
                for (var r in e)
                    "default" === r || Object.prototype.hasOwnProperty.call(t, r) || f(t, e, r)
            }
            function h(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                r = t && e[t],
                n = 0;
                if (r)
                    return r.call(e);
                if (e && "number" == typeof e.length)
                    return {
                        next: function () {
                            return e && n >= e.length && (e = void 0), {
                                value: e && e[n++],
                                done: !e
                            }
                        }
                    };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }
            function _(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r)
                    return e;
                var n,
                o,
                i = r.call(e),
                s = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
                        s.push(n.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                }
                finally {
                    try {
                        n && !n.done && (r = i.return) && r.call(i)
                    }
                    finally {
                        if (o)
                            throw o.error
                    }
                }
                return s
            }
            function v() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(_(arguments[t]));
                return e
            }
            function m() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++)
                    e += arguments[t].length;
                var n = Array(e),
                o = 0;
                for (t = 0; t < r; t++)
                    for (var i = arguments[t], s = 0, a = i.length; s < a; s++, o++)
                        n[o] = i[s];
                return n
            }
            function y(e) {
                return this instanceof y ? (this.v = e, this) : new y(e)
            }
            function g(e, t, r) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var n,
                o = r.apply(e, t || []),
                i = [];
                return n = {},
                s("next"),
                s("throw"),
                s("return"),
                n[Symbol.asyncIterator] = function () {
                    return this
                },
                n;
                function s(e) {
                    o[e] && (n[e] = function (t) {
                        return new Promise((function (r, n) {
                                i.push([e, t, r, n]) > 1 || a(e, t)
                            }))
                    })
                }
                function a(e, t) {
                    try {
                        (r = o[e](t)).value instanceof y ? Promise.resolve(r.value.v).then(l, c) : u(i[0][2], r)
                    } catch (e) {
                        u(i[0][3], e)
                    }
                    var r
                }
                function l(e) {
                    a("next", e)
                }
                function c(e) {
                    a("throw", e)
                }
                function u(e, t) {
                    e(t),
                    i.shift(),
                    i.length && a(i[0][0], i[0][1])
                }
            }
            function P(e) {
                var t,
                r;
                return t = {},
                n("next"),
                n("throw", (function (e) {
                        throw e
                    })),
                n("return"),
                t[Symbol.iterator] = function () {
                    return this
                },
                t;
                function n(n, o) {
                    t[n] = e[n] ? function (t) {
                        return (r = !r) ? {
                            value: y(e[n](t)),
                            done: "return" === n
                        }
                         : o ? o(t) : t
                    }
                     : o
                }
            }
            function b(e) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var t,
                r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = h(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function () {
                    return this
                }, t);
                function n(r) {
                    t[r] = e[r] && function (t) {
                        return new Promise((function (n, o) {
                                !function (e, t, r, n) {
                                    Promise.resolve(n).then((function (t) {
                                            e({
                                                value: t,
                                                done: r
                                            })
                                        }), t)
                                }
                                (n, o, (t = e[r](t)).done, t.value)
                            }))
                    }
                }
            }
            function O(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t,
                e
            }
            var j = Object.create ? function (e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
             : function (e, t) {
                e.default = t
            };
            function w(e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r in e)
                        "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && f(t, e, r);
                return j(t, e),
                t
            }
            function x(e) {
                return e && e.__esModule ? e : {
                default:
                    e
                }
            }
            function S(e, t) {
                if (!t.has(e))
                    throw new TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }
            function M(e, t, r) {
                if (!t.has(e))
                    throw new TypeError("attempted to set private field on non-instance");
                return t.set(e, r),
                r
            }
        }
    },
    t = {};
    function r(n) {
        var o = t[n];
        if (void 0 !== o)
            return o.exports;
        var i = t[n] = {
            exports: {}
        };
        return e[n](i, i.exports, r),
        i.exports
    }
    r.d = (e, t) => {
        for (var n in t)
            r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    },
    r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var n = r(6010);
    plugin_iframe = n
})();
