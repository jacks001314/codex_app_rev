;(() => {
  var e,
    t,
    n,
    a = {
      89213(e, t, n) {
        "use strict"
        var a = n(83937)
        let i = {
            manifestDirectory: "AppData/Local/OpenAI/extension",
            registryRoot: "HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts",
          },
          r = {
            dev: "com.openai.codexextension.dev",
            internal: "com.openai.codexextension.internal",
            production: "com.openai.codexextension",
          },
          o = {
            dev: { distributions: a.t.chrome.dev },
            internal: { distributions: a.t.chrome.internal },
            prod: { distributions: a.t.chrome.prod },
          },
          s = {
            chrome: {
              backendCompatibilityKey: "chrome",
              displayName: "Google Chrome",
              browserIconAssetPath: "assets/google-chrome.png",
              shortDisplayName: "Chrome",
              userAgentIdentifiers: ["Chrome/"],
              internalUrlSchemes: ["chrome"],
              extensionManagementUrl: "chrome://extensions",
              extensionChannels: o,
              linux: {
                installations: [
                  { commands: ["google-chrome", "google-chrome-stable"], userDataDirName: "google-chrome" },
                  { commands: ["chromium", "chromium-browser"], userDataDirName: "chromium" },
                  { commands: ["google-chrome-beta"], userDataDirName: "google-chrome-beta" },
                  { commands: ["google-chrome-unstable"], userDataDirName: "google-chrome-unstable" },
                  { commands: ["google-chrome-for-testing"], userDataDirName: "google-chrome-for-testing" },
                ],
                nativeMessagingManifestDirectories: [
                  ".config/google-chrome/NativeMessagingHosts",
                  ".config/chromium/NativeMessagingHosts",
                  ".config/google-chrome-beta/NativeMessagingHosts",
                  ".config/google-chrome-unstable/NativeMessagingHosts",
                  ".config/google-chrome-for-testing/NativeMessagingHosts",
                ],
                processNames: ["chrome"],
                userDataDirectorySegments: [".config", "google-chrome"],
              },
              macos: {
                applicationNames: ["Google Chrome.app"],
                bundleId: "com.google.Chrome",
                nativeMessagingManifestDirectories: [
                  "Library/Application Support/Google/Chrome/NativeMessagingHosts",
                  "Library/Application Support/Chromium/NativeMessagingHosts",
                  "Library/Application Support/Google/ChromeForTesting/NativeMessagingHosts",
                  "Library/Application Support/Google/Chrome for Testing/NativeMessagingHosts",
                ],
                processNames: ["Google Chrome", "Google Chrome Helper"],
                userDataDirectorySegments: ["Library", "Application Support", "Google", "Chrome"],
              },
              windows: {
                commandNames: ["chrome.exe", "chrome"],
                httpsUserChoiceProgIdPrefixes: ["chromehtml"],
                installPathSegments: ["Google", "Chrome", "Application", "chrome.exe"],
                processNames: ["chrome.exe"],
                userDataDirectorySegments: ["Google", "Chrome", "User Data"],
              },
            },
            edge: {
              backendCompatibilityKey: "chrome",
              displayName: "Microsoft Edge",
              browserIconAssetPath: "assets/microsoft-edge.svg",
              shortDisplayName: "Edge",
              userAgentIdentifiers: ["Edg/"],
              internalUrlSchemes: ["edge"],
              extensionManagementUrl: "edge://extensions",
              extensionChannels: {
                dev: { distributions: a.t.edge.dev },
                internal: { distributions: a.t.edge.internal },
                prod: { distributions: a.t.edge.prod },
              },
              linux: {
                installations: [
                  { commands: ["microsoft-edge", "microsoft-edge-stable"], userDataDirName: "microsoft-edge" },
                ],
                nativeMessagingManifestDirectories: [".config/microsoft-edge/NativeMessagingHosts"],
                processNames: ["msedge"],
                userDataDirectorySegments: [".config", "microsoft-edge"],
              },
              macos: {
                applicationNames: ["Microsoft Edge.app"],
                bundleId: "com.microsoft.edgemac",
                nativeMessagingManifestDirectories: ["Library/Application Support/Microsoft Edge/NativeMessagingHosts"],
                processNames: ["Microsoft Edge", "Microsoft Edge Helper"],
                userDataDirectorySegments: ["Library", "Application Support", "Microsoft Edge"],
              },
              windows: {
                commandNames: ["msedge.exe", "msedge"],
                httpsUserChoiceProgIdPrefixes: ["msedgehtm"],
                installPathSegments: ["Microsoft", "Edge", "Application", "msedge.exe"],
                processNames: ["msedge.exe"],
                userDataDirectorySegments: ["Microsoft", "Edge", "User Data"],
              },
            },
            brave: {
              backendCompatibilityKey: "chrome",
              displayName: "Brave Browser",
              browserIconAssetPath: "assets/brave.svg",
              shortDisplayName: "Brave",
              userAgentIdentifiers: ["Brave/"],
              internalUrlSchemes: ["brave", "chrome"],
              extensionManagementUrl: "brave://extensions",
              extensionChannels: o,
              linux: {
                installations: [
                  {
                    commands: ["brave-browser", "brave-browser-stable", "brave"],
                    userDataDirName: "BraveSoftware/Brave-Browser",
                  },
                ],
                nativeMessagingManifestDirectories: [".config/BraveSoftware/Brave-Browser/NativeMessagingHosts"],
                processNames: ["brave", "brave-browser"],
                userDataDirectorySegments: [".config", "BraveSoftware", "Brave-Browser"],
              },
              macos: {
                applicationNames: ["Brave Browser.app"],
                bundleId: "com.brave.Browser",
                nativeMessagingManifestDirectories: [
                  "Library/Application Support/BraveSoftware/Brave-Browser/NativeMessagingHosts",
                ],
                processNames: ["Brave Browser", "Brave Browser Helper"],
                userDataDirectorySegments: ["Library", "Application Support", "BraveSoftware", "Brave-Browser"],
              },
              windows: {
                commandNames: ["brave.exe", "brave", "brave-browser"],
                httpsUserChoiceProgIdPrefixes: ["bravehtml"],
                installPathSegments: ["BraveSoftware", "Brave-Browser", "Application", "brave.exe"],
                processNames: ["brave.exe"],
                userDataDirectorySegments: ["BraveSoftware", "Brave-Browser", "User Data"],
              },
            },
            opera: {
              backendCompatibilityKey: "chrome",
              displayName: "Opera",
              browserIconAssetPath: "assets/opera.svg",
              shortDisplayName: "Opera",
              userAgentIdentifiers: ["OPR/", "Opera/"],
              internalUrlSchemes: ["opera", "chrome"],
              extensionManagementUrl: "opera://extensions",
              extensionChannels: o,
              linux: {
                installations: [{ commands: ["opera", "opera-stable"], userDataDirName: "opera" }],
                nativeMessagingManifestDirectories: [".config/opera/NativeMessagingHosts"],
                processNames: ["opera"],
                userDataDirectorySegments: [".config", "opera"],
              },
              macos: {
                applicationNames: ["Opera.app"],
                bundleId: "com.operasoftware.Opera",
                nativeMessagingManifestDirectories: [
                  "Library/Application Support/com.operasoftware.Opera/NativeMessagingHosts",
                ],
                processNames: ["Opera", "Opera Helper"],
                userDataDirectorySegments: ["Library", "Application Support", "com.operasoftware.Opera"],
              },
              windows: {
                commandNames: ["opera.exe", "opera"],
                httpsUserChoiceProgIdPrefixes: ["operastable"],
                installPathSegments: ["Opera", "opera.exe"],
                processNames: ["opera.exe"],
                userDataDirectorySegments: ["Opera Software", "Opera Stable"],
              },
            },
            vivaldi: {
              backendCompatibilityKey: "chrome",
              displayName: "Vivaldi",
              browserIconAssetPath: "assets/vivaldi.svg",
              shortDisplayName: "Vivaldi",
              userAgentIdentifiers: ["Vivaldi/"],
              internalUrlSchemes: ["vivaldi", "chrome"],
              extensionManagementUrl: "vivaldi://extensions",
              extensionChannels: o,
              linux: {
                installations: [{ commands: ["vivaldi", "vivaldi-stable"], userDataDirName: "vivaldi" }],
                nativeMessagingManifestDirectories: [".config/vivaldi/NativeMessagingHosts"],
                processNames: ["vivaldi", "vivaldi-bin"],
                userDataDirectorySegments: [".config", "vivaldi"],
              },
              macos: {
                applicationNames: ["Vivaldi.app"],
                bundleId: "com.vivaldi.Vivaldi",
                nativeMessagingManifestDirectories: ["Library/Application Support/Vivaldi/NativeMessagingHosts"],
                processNames: ["Vivaldi", "Vivaldi Helper"],
                userDataDirectorySegments: ["Library", "Application Support", "Vivaldi"],
              },
              windows: {
                commandNames: ["vivaldi.exe", "vivaldi"],
                httpsUserChoiceProgIdPrefixes: ["vivaldihtm"],
                installPathSegments: ["Vivaldi", "Application", "vivaldi.exe"],
                processNames: ["vivaldi.exe"],
                userDataDirectorySegments: ["Vivaldi", "User Data"],
              },
            },
          }
        function l(e, t = [], n = {}) {
          let a = new Set()
          for (let e of t) p(a, e)
          for (let t of Object.keys(s).filter(c))
            for (let i of s[t].extensionChannels[e].distributions)
              !(function (e, t, n) {
                for (let n of t.extensionIds) p(e, n)
                if ("managed-self-hosted" !== t.distribution || null == t.signingIdentity) return
                let a = n[t.signingIdentity]
                null != a && p(e, a)
              })(a, i, n)
          return [...a]
        }
        function c(e) {
          return Object.hasOwn(s, e)
        }
        function p(e, t) {
          e.add(u(t))
        }
        function u(e) {
          let t = e.trim()
          if (!/^[a-p]{32}$/u.test(t)) throw Error(`Invalid Chromium extension ID "${e}".`)
          return t
        }
        n.d(
          t,
          {},
          {
            C$: r,
            Mp: function (e) {
              return "windows" === e
                ? [i.manifestDirectory]
                : [...new Set(Object.values(s).flatMap((t) => t[e].nativeMessagingManifestDirectories))]
            },
            Yp: s,
            a8: function (e) {
              return `https://chromewebstore.google.com/detail/${u(e)}`
            },
            aM: i,
            cs: function (e, t) {
              return (
                s[e].extensionChannels[t].distributions.find(
                  (e) =>
                    ("chrome-web-store" === e.distribution || "microsoft-edge-add-ons" === e.distribution) &&
                    null != e.extensionIds[0] &&
                    null != e.storeUrl,
                ) ?? null
              )
            },
            fw: function ({ chromeConfigHome: e, defaultConfigHome: t, xdgConfigHome: n }) {
              let a = null != n && n.length > 0 ? n : t
              return Object.entries(s).flatMap(([t, n]) => {
                let i = "chrome" === t && null != e && e.length > 0 ? e : a
                return n.linux.nativeMessagingManifestDirectories.map((e) => ({ configHome: i, manifestDirectory: e }))
              })
            },
            mA: function (e, t = {}) {
              switch (e) {
                case r.dev:
                  return l("dev", [], t)
                case r.internal:
                  return l("internal", [], t)
                case r.production:
                  return l("prod", [], t)
                default:
                  return []
              }
            },
            qx: function (e) {
              let t = e.toLowerCase()
              return Object.keys(s)
                .filter(c)
                .find((e) => s[e].windows.httpsUserChoiceProgIdPrefixes.some((e) => t.startsWith(e.toLowerCase())))
            },
            rU: c,
            ss: function (e, t, n) {
              let a = s[e].extensionChannels[t].distributions.find((e) => e.distribution === n)
              if (null == a) throw Error(`Missing ${n} extension distribution for ${e} ${t}.`)
              return a
            },
          },
        )
      },
      83937(e, t, n) {
        "use strict"
        let a = {
            distribution: "chrome-web-store",
            extensionIds: ["lfkehkpjohcoelkpembgemeipeppanef"],
            outputModes: [],
            releaseChannel: "beta",
            signingIdentity: null,
            storeUrl: "https://chromewebstore.google.com/detail/codex/lfkehkpjohcoelkpembgemeipeppanef",
          },
          i = {
            distribution: "chrome-web-store",
            extensionIds: ["hehggadaopoacecdllhhajmbjkdcmajg"],
            outputModes: [],
            releaseChannel: "stable",
            signingIdentity: null,
            storeUrl: "https://chromewebstore.google.com/detail/chatgpt/hehggadaopoacecdllhhajmbjkdcmajg",
          },
          r = {
            distribution: "microsoft-edge-add-ons",
            extensionIds: ["odlomjlbamekndcpllcnffbgeohgkmjh"],
            outputModes: [],
            releaseChannel: "stable",
            signingIdentity: null,
            storeUrl: "https://microsoftedge.microsoft.com/addons/detail/odlomjlbamekndcpllcnffbgeohgkmjh",
          }
        n.d(
          t,
          {},
          {
            t: {
              chrome: {
                dev: [
                  {
                    distribution: "local-development",
                    extensionIds: [],
                    outputModes: ["file"],
                    releaseChannel: "dev",
                    signingIdentity: "development",
                  },
                  {
                    distribution: "managed-self-hosted",
                    extensionIds: [],
                    outputModes: ["file"],
                    releaseChannel: "dev",
                    signingIdentity: "development",
                  },
                  a,
                ],
                internal: [
                  {
                    distribution: "managed-self-hosted",
                    extensionIds: [],
                    outputModes: ["file", "blobstore"],
                    releaseChannel: "beta",
                    signingIdentity: "beta",
                  },
                  a,
                ],
                prod: [
                  {
                    distribution: "managed-self-hosted",
                    extensionIds: [],
                    outputModes: ["file"],
                    releaseChannel: "stable",
                    signingIdentity: "stable",
                  },
                  i,
                ],
              },
              edge: {
                dev: [
                  {
                    distribution: "local-development",
                    extensionIds: [],
                    outputModes: ["file"],
                    releaseChannel: "dev",
                    signingIdentity: "development",
                  },
                  {
                    distribution: "managed-self-hosted",
                    extensionIds: [],
                    outputModes: ["file"],
                    releaseChannel: "dev",
                    signingIdentity: "development",
                  },
                  a,
                ],
                internal: [
                  {
                    distribution: "managed-self-hosted",
                    extensionIds: [],
                    outputModes: ["file", "blobstore"],
                    releaseChannel: "beta",
                    signingIdentity: "beta",
                  },
                  r,
                  a,
                ],
                prod: [
                  {
                    distribution: "managed-self-hosted",
                    extensionIds: [],
                    outputModes: ["file"],
                    releaseChannel: "stable",
                    signingIdentity: "stable",
                  },
                  r,
                  i,
                ],
              },
            },
          },
        )
      },
      99970(e, t, n) {
        "use strict"
        n.d(
          t,
          {},
          {
            G$: function (e) {
              var t
              return "string" == typeof e &&
                e.length <= 16384 &&
                /^data:image\/(?:avif|bmp|gif|jpeg|png|webp|x-icon|vnd\.microsoft\.icon);base64,[A-Za-z0-9+/]+={0,2}$/.test(
                  e,
                ) &&
                (t = e).slice(t.indexOf(",") + 1).length % 4 == 0
                ? e
                : null
            },
            H3: 500,
            Qc: function (e, t) {
              return JSON.stringify([e, String(t)])
            },
            Rk: 128,
            _X: 16384,
            kY: 1024,
            lR: function (e, t) {
              let n = `${e.title}
${e.url}`.toLowerCase()
              return t
                .trim()
                .toLowerCase()
                .split(/\s+/)
                .filter(Boolean)
                .every((e) => n.includes(e))
            },
            s3: 100,
            yq: function (e) {
              for (let t = 0; t < e.length; t += 1) {
                let n = e.charCodeAt(t)
                if (n >= 55296 && n <= 56319) {
                  let n = e.charCodeAt(t + 1)
                  if (!(n >= 56320 && n <= 57343)) return !1
                  t += 1
                } else if (n >= 56320 && n <= 57343) return !1
              }
              return !0
            },
            zG: 4096,
          },
        )
      },
      43230(e, t, n) {
        "use strict"
        ;(Object.freeze(["supported", "unsupported", "unknown"]),
          Object.freeze({
            supported: Object.freeze([]),
            unsupported: Object.freeze(["invalid-schema-version", "schema-not-readable", "schema-not-writable"]),
            unknown: Object.freeze(["missing-schema-version", "missing-manifest", "missing-artifact-capabilities"]),
          }))
        let a = {
          "invalid-manifest": "Invalid collaboration manifest",
          "invalid-capabilities": "Invalid collaboration capabilities",
          "invalid-schema-list": "Invalid collaboration schema list",
          "invalid-decision": "Invalid schema decision",
          "invalid-compatibility": "Invalid schema compatibility",
        }
        class i extends TypeError {
          reason
          constructor(e) {
            ;(super(a[e]), (this.name = "CollaborationSchemaValidationError"), (this.reason = e))
          }
        }
        function r(e) {
          return null !== e && "object" == typeof e && !Array.isArray(e)
        }
        n.d(
          t,
          {},
          {
            iB: function (e) {
              if (null == e) return null
              if (!r(e) || Object.keys(e).length > 32) throw new i("invalid-manifest")
              return Object.fromEntries(
                Object.entries(e).map(([e, t]) => {
                  if (
                    0 === e.length ||
                    [...e].length > 64 ||
                    !r(t) ||
                    Object.keys(t).some((e) => "readableSchemas" !== e && "writableSchemas" !== e)
                  )
                    throw new i("invalid-capabilities")
                  for (let e of [t.readableSchemas, t.writableSchemas])
                    if (!Array.isArray(e) || e.length > 64 || e.some((e) => !Number.isSafeInteger(e) || e < 1))
                      throw new i("invalid-schema-list")
                  return [e, { readableSchemas: [...t.readableSchemas], writableSchemas: [...t.writableSchemas] }]
                }),
              )
            },
          },
        )
      },
      73065(e, t, n) {
        e.exports = n(30061)(n(83084), "DataView")
      },
      61216(e, t, n) {
        var a = n(17123),
          i = n(42295),
          r = n(71206),
          o = n(97410),
          s = n(20698)
        function l(e) {
          var t = -1,
            n = null == e ? 0 : e.length
          for (this.clear(); ++t < n;) {
            var a = e[t]
            this.set(a[0], a[1])
          }
        }
        ;((l.prototype.clear = a),
          (l.prototype.delete = i),
          (l.prototype.get = r),
          (l.prototype.has = o),
          (l.prototype.set = s),
          (e.exports = l))
      },
      900(e, t, n) {
        var a = n(71583),
          i = n(8923),
          r = n(71674),
          o = n(48254),
          s = n(22182)
        function l(e) {
          var t = -1,
            n = null == e ? 0 : e.length
          for (this.clear(); ++t < n;) {
            var a = e[t]
            this.set(a[0], a[1])
          }
        }
        ;((l.prototype.clear = a),
          (l.prototype.delete = i),
          (l.prototype.get = r),
          (l.prototype.has = o),
          (l.prototype.set = s),
          (e.exports = l))
      },
      55760(e, t, n) {
        e.exports = n(30061)(n(83084), "Map")
      },
      5244(e, t, n) {
        var a = n(76439),
          i = n(80323),
          r = n(22562),
          o = n(49270),
          s = n(78766)
        function l(e) {
          var t = -1,
            n = null == e ? 0 : e.length
          for (this.clear(); ++t < n;) {
            var a = e[t]
            this.set(a[0], a[1])
          }
        }
        ;((l.prototype.clear = a),
          (l.prototype.delete = i),
          (l.prototype.get = r),
          (l.prototype.has = o),
          (l.prototype.set = s),
          (e.exports = l))
      },
      14487(e, t, n) {
        e.exports = n(30061)(n(83084), "Promise")
      },
      92330(e, t, n) {
        e.exports = n(30061)(n(83084), "Set")
      },
      11882(e, t, n) {
        var a = n(5244),
          i = n(57711),
          r = n(24092)
        function o(e) {
          var t = -1,
            n = null == e ? 0 : e.length
          for (this.__data__ = new a(); ++t < n;) this.add(e[t])
        }
        ;((o.prototype.add = o.prototype.push = i), (o.prototype.has = r), (e.exports = o))
      },
      126(e, t, n) {
        var a = n(900),
          i = n(14437),
          r = n(95349),
          o = n(39164),
          s = n(93208),
          l = n(11768)
        function c(e) {
          var t = (this.__data__ = new a(e))
          this.size = t.size
        }
        ;((c.prototype.clear = i),
          (c.prototype.delete = r),
          (c.prototype.get = o),
          (c.prototype.has = s),
          (c.prototype.set = l),
          (e.exports = c))
      },
      20776(e, t, n) {
        e.exports = n(83084).Symbol
      },
      44149(e, t, n) {
        e.exports = n(83084).Uint8Array
      },
      42884(e, t, n) {
        e.exports = n(30061)(n(83084), "WeakMap")
      },
      55982(e) {
        e.exports = function (e, t, n) {
          switch (n.length) {
            case 0:
              return e.call(t)
            case 1:
              return e.call(t, n[0])
            case 2:
              return e.call(t, n[0], n[1])
            case 3:
              return e.call(t, n[0], n[1], n[2])
          }
          return e.apply(t, n)
        }
      },
      20178(e) {
        e.exports = function (e, t) {
          for (var n = -1, a = null == e ? 0 : e.length; ++n < a && !1 !== t(e[n], n, e););
          return e
        }
      },
      74205(e) {
        e.exports = function (e, t) {
          for (var n = -1, a = null == e ? 0 : e.length, i = 0, r = []; ++n < a;) {
            var o = e[n]
            t(o, n, e) && (r[i++] = o)
          }
          return r
        }
      },
      77120(e, t, n) {
        var a = n(59651),
          i = n(24269),
          r = n(48984),
          o = n(44235),
          s = n(78038),
          l = n(54504),
          c = Object.prototype.hasOwnProperty
        e.exports = function (e, t) {
          var n = r(e),
            p = !n && i(e),
            u = !n && !p && o(e),
            d = !n && !p && !u && l(e),
            m = n || p || u || d,
            f = m ? a(e.length, String) : [],
            h = f.length
          for (var g in e)
            (t || c.call(e, g)) &&
              !(
                m &&
                ("length" == g ||
                  (u && ("offset" == g || "parent" == g)) ||
                  (d && ("buffer" == g || "byteLength" == g || "byteOffset" == g)) ||
                  s(g, h))
              ) &&
              f.push(g)
          return f
        }
      },
      2041(e) {
        e.exports = function (e, t) {
          for (var n = -1, a = null == e ? 0 : e.length, i = Array(a); ++n < a;) i[n] = t(e[n], n, e)
          return i
        }
      },
      13083(e) {
        e.exports = function (e, t) {
          for (var n = -1, a = t.length, i = e.length; ++n < a;) e[i + n] = t[n]
          return e
        }
      },
      11815(e) {
        e.exports = function (e, t) {
          for (var n = -1, a = null == e ? 0 : e.length; ++n < a;) if (t(e[n], n, e)) return !0
          return !1
        }
      },
      54872(e, t, n) {
        var a = n(5259),
          i = n(16847)
        e.exports = function (e, t, n) {
          ;((void 0 === n || i(e[t], n)) && (void 0 !== n || t in e)) || a(e, t, n)
        }
      },
      55272(e, t, n) {
        var a = n(5259),
          i = n(16847),
          r = Object.prototype.hasOwnProperty
        e.exports = function (e, t, n) {
          var o = e[t]
          ;(r.call(e, t) && i(o, n) && (void 0 !== n || t in e)) || a(e, t, n)
        }
      },
      86232(e, t, n) {
        var a = n(16847)
        e.exports = function (e, t) {
          for (var n = e.length; n--;) if (a(e[n][0], t)) return n
          return -1
        }
      },
      91252(e, t, n) {
        var a = n(54146),
          i = n(42501)
        e.exports = function (e, t) {
          return e && a(t, i(t), e)
        }
      },
      13403(e, t, n) {
        var a = n(54146),
          i = n(56630)
        e.exports = function (e, t) {
          return e && a(t, i(t), e)
        }
      },
      5259(e, t, n) {
        var a = n(370)
        e.exports = function (e, t, n) {
          "__proto__" == t && a ? a(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (e[t] = n)
        }
      },
      42840(e, t, n) {
        var a = n(126),
          i = n(20178),
          r = n(55272),
          o = n(91252),
          s = n(13403),
          l = n(3477),
          c = n(18600),
          p = n(60400),
          u = n(2847),
          d = n(3423),
          m = n(44292),
          f = n(45072),
          h = n(99096),
          g = n(20370),
          v = n(80146),
          x = n(48984),
          b = n(44235),
          y = n(8987),
          w = n(81074),
          k = n(42229),
          _ = n(42501),
          P = n(56630),
          I = "[object Arguments]",
          j = "[object Function]",
          A = "[object Object]",
          S = {}
        ;((S[I] =
          S["[object Array]"] =
          S["[object ArrayBuffer]"] =
          S["[object DataView]"] =
          S["[object Boolean]"] =
          S["[object Date]"] =
          S["[object Float32Array]"] =
          S["[object Float64Array]"] =
          S["[object Int8Array]"] =
          S["[object Int16Array]"] =
          S["[object Int32Array]"] =
          S["[object Map]"] =
          S["[object Number]"] =
          S[A] =
          S["[object RegExp]"] =
          S["[object Set]"] =
          S["[object String]"] =
          S["[object Symbol]"] =
          S["[object Uint8Array]"] =
          S["[object Uint8ClampedArray]"] =
          S["[object Uint16Array]"] =
          S["[object Uint32Array]"] =
            !0),
          (S["[object Error]"] = S[j] = S["[object WeakMap]"] = !1),
          (e.exports = function e(t, n, O, E, T, z) {
            var C,
              R = 1 & n,
              $ = 2 & n,
              M = 4 & n
            if ((O && (C = T ? O(t, E, T, z) : O(t)), void 0 !== C)) return C
            if (!w(t)) return t
            var Y = x(t)
            if (Y) {
              if (((C = h(t)), !R)) return c(t, C)
            } else {
              var D = f(t),
                N = D == j || "[object GeneratorFunction]" == D
              if (b(t)) return l(t, R)
              if (D == A || D == I || (N && !T)) {
                if (((C = $ || N ? {} : v(t)), !R)) return $ ? u(t, s(C, t)) : p(t, o(C, t))
              } else {
                if (!S[D]) return T ? t : {}
                C = g(t, D, R)
              }
            }
            z || (z = new a())
            var L = z.get(t)
            if (L) return L
            ;(z.set(t, C),
              k(t)
                ? t.forEach(function (a) {
                    C.add(e(a, n, O, a, t, z))
                  })
                : y(t) &&
                  t.forEach(function (a, i) {
                    C.set(i, e(a, n, O, i, t, z))
                  }))
            var U = M ? ($ ? m : d) : $ ? P : _,
              F = Y ? void 0 : U(t)
            return (
              i(F || t, function (a, i) {
                ;(F && (a = t[(i = a)]), r(C, i, e(a, n, O, i, t, z)))
              }),
              C
            )
          }))
      },
      45301(e, t, n) {
        var a = n(81074),
          i = Object.create
        e.exports = (function () {
          function e() {}
          return function (t) {
            if (!a(t)) return {}
            if (i) return i(t)
            e.prototype = t
            var n = new e()
            return ((e.prototype = void 0), n)
          }
        })()
      },
      95636(e) {
        e.exports = function (e, t, n, a) {
          for (var i = e.length, r = n + (a ? 1 : -1); a ? r-- : ++r < i;) if (t(e[r], r, e)) return r
          return -1
        }
      },
      39999(e, t, n) {
        var a = n(13083),
          i = n(66800)
        e.exports = function e(t, n, r, o, s) {
          var l = -1,
            c = t.length
          for (r || (r = i), s || (s = []); ++l < c;) {
            var p = t[l]
            n > 0 && r(p) ? (n > 1 ? e(p, n - 1, r, o, s) : a(s, p)) : o || (s[s.length] = p)
          }
          return s
        }
      },
      45150(e, t, n) {
        e.exports = n(51430)()
      },
      78932(e, t, n) {
        var a = n(45150),
          i = n(42501)
        e.exports = function (e, t) {
          return e && a(e, t, i)
        }
      },
      6173(e, t, n) {
        var a = n(76808),
          i = n(93438)
        e.exports = function (e, t) {
          t = a(t, e)
          for (var n = 0, r = t.length; null != e && n < r;) e = e[i(t[n++])]
          return n && n == r ? e : void 0
        }
      },
      69754(e, t, n) {
        var a = n(13083),
          i = n(48984)
        e.exports = function (e, t, n) {
          var r = t(e)
          return i(e) ? r : a(r, n(e))
        }
      },
      3021(e, t, n) {
        var a = n(20776),
          i = n(52876),
          r = n(77531),
          o = a ? a.toStringTag : void 0
        e.exports = function (e) {
          return null == e ? (void 0 === e ? "[object Undefined]" : "[object Null]") : o && o in Object(e) ? i(e) : r(e)
        }
      },
      51066(e) {
        e.exports = function (e, t) {
          return null != e && t in Object(e)
        }
      },
      46613(e, t, n) {
        var a = n(3021),
          i = n(24653)
        e.exports = function (e) {
          return i(e) && "[object Arguments]" == a(e)
        }
      },
      77169(e, t, n) {
        var a = n(12123),
          i = n(24653)
        e.exports = function e(t, n, r, o, s) {
          return t === n || (null != t && null != n && (i(t) || i(n)) ? a(t, n, r, o, e, s) : t != t && n != n)
        }
      },
      12123(e, t, n) {
        var a = n(126),
          i = n(38128),
          r = n(51863),
          o = n(23492),
          s = n(45072),
          l = n(48984),
          c = n(44235),
          p = n(54504),
          u = "[object Arguments]",
          d = "[object Array]",
          m = "[object Object]",
          f = Object.prototype.hasOwnProperty
        e.exports = function (e, t, n, h, g, v) {
          var x = l(e),
            b = l(t),
            y = x ? d : s(e),
            w = b ? d : s(t)
          ;((y = y == u ? m : y), (w = w == u ? m : w))
          var k = y == m,
            _ = w == m,
            P = y == w
          if (P && c(e)) {
            if (!c(t)) return !1
            ;((x = !0), (k = !1))
          }
          if (P && !k) return (v || (v = new a()), x || p(e) ? i(e, t, n, h, g, v) : r(e, t, y, n, h, g, v))
          if (!(1 & n)) {
            var I = k && f.call(e, "__wrapped__"),
              j = _ && f.call(t, "__wrapped__")
            if (I || j) {
              var A = I ? e.value() : e,
                S = j ? t.value() : t
              return (v || (v = new a()), g(A, S, n, h, v))
            }
          }
          return !!P && (v || (v = new a()), o(e, t, n, h, g, v))
        }
      },
      92883(e, t, n) {
        var a = n(45072),
          i = n(24653)
        e.exports = function (e) {
          return i(e) && "[object Map]" == a(e)
        }
      },
      35328(e, t, n) {
        var a = n(126),
          i = n(77169)
        e.exports = function (e, t, n, r) {
          var o = n.length,
            s = o,
            l = !r
          if (null == e) return !s
          for (e = Object(e); o--;) {
            var c = n[o]
            if (l && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
          }
          for (; ++o < s;) {
            var p = (c = n[o])[0],
              u = e[p],
              d = c[1]
            if (l && c[2]) {
              if (void 0 === u && !(p in e)) return !1
            } else {
              var m = new a()
              if (r) var f = r(u, d, p, e, t, m)
              if (!(void 0 === f ? i(d, u, 3, r, m) : f)) return !1
            }
          }
          return !0
        }
      },
      88798(e, t, n) {
        var a = n(27785),
          i = n(48869),
          r = n(81074),
          o = n(84568),
          s = /^\[object .+?Constructor\]$/,
          l = Object.prototype,
          c = Function.prototype.toString,
          p = l.hasOwnProperty,
          u = RegExp(
            "^" +
              c
                .call(p)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
              "$",
          )
        e.exports = function (e) {
          return !(!r(e) || i(e)) && (a(e) ? u : s).test(o(e))
        }
      },
      20509(e, t, n) {
        var a = n(45072),
          i = n(24653)
        e.exports = function (e) {
          return i(e) && "[object Set]" == a(e)
        }
      },
      9792(e, t, n) {
        var a = n(3021),
          i = n(41249),
          r = n(24653),
          o = {}
        ;((o["[object Float32Array]"] =
          o["[object Float64Array]"] =
          o["[object Int8Array]"] =
          o["[object Int16Array]"] =
          o["[object Int32Array]"] =
          o["[object Uint8Array]"] =
          o["[object Uint8ClampedArray]"] =
          o["[object Uint16Array]"] =
          o["[object Uint32Array]"] =
            !0),
          (o["[object Arguments]"] =
            o["[object Array]"] =
            o["[object ArrayBuffer]"] =
            o["[object Boolean]"] =
            o["[object DataView]"] =
            o["[object Date]"] =
            o["[object Error]"] =
            o["[object Function]"] =
            o["[object Map]"] =
            o["[object Number]"] =
            o["[object Object]"] =
            o["[object RegExp]"] =
            o["[object Set]"] =
            o["[object String]"] =
            o["[object WeakMap]"] =
              !1),
          (e.exports = function (e) {
            return r(e) && i(e.length) && !!o[a(e)]
          }))
      },
      38180(e, t, n) {
        var a = n(79660),
          i = n(31105),
          r = n(17075),
          o = n(48984),
          s = n(37952)
        e.exports = function (e) {
          return "function" == typeof e
            ? e
            : null == e
              ? r
              : "object" == typeof e
                ? o(e)
                  ? i(e[0], e[1])
                  : a(e)
                : s(e)
        }
      },
      89325(e, t, n) {
        var a = n(29432),
          i = n(37563),
          r = Object.prototype.hasOwnProperty
        e.exports = function (e) {
          if (!a(e)) return i(e)
          var t = []
          for (var n in Object(e)) r.call(e, n) && "constructor" != n && t.push(n)
          return t
        }
      },
      16862(e, t, n) {
        var a = n(81074),
          i = n(29432),
          r = n(86472),
          o = Object.prototype.hasOwnProperty
        e.exports = function (e) {
          if (!a(e)) return r(e)
          var t = i(e),
            n = []
          for (var s in e) ("constructor" == s && (t || !o.call(e, s))) || n.push(s)
          return n
        }
      },
      79660(e, t, n) {
        var a = n(35328),
          i = n(97161),
          r = n(41850)
        e.exports = function (e) {
          var t = i(e)
          return 1 == t.length && t[0][2]
            ? r(t[0][0], t[0][1])
            : function (n) {
                return n === e || a(n, e, t)
              }
        }
      },
      31105(e, t, n) {
        var a = n(77169),
          i = n(52453),
          r = n(52498),
          o = n(91217),
          s = n(47813),
          l = n(41850),
          c = n(93438)
        e.exports = function (e, t) {
          return o(e) && s(t)
            ? l(c(e), t)
            : function (n) {
                var o = i(n, e)
                return void 0 === o && o === t ? r(n, e) : a(t, o, 3)
              }
        }
      },
      97857(e, t, n) {
        var a = n(126),
          i = n(54872),
          r = n(45150),
          o = n(5963),
          s = n(81074),
          l = n(56630),
          c = n(7301)
        e.exports = function e(t, n, p, u, d) {
          t !== n &&
            r(
              n,
              function (r, l) {
                if ((d || (d = new a()), s(r))) o(t, n, l, p, e, u, d)
                else {
                  var m = u ? u(c(t, l), r, l + "", t, n, d) : void 0
                  ;(void 0 === m && (m = r), i(t, l, m))
                }
              },
              l,
            )
        }
      },
      5963(e, t, n) {
        var a = n(54872),
          i = n(3477),
          r = n(70338),
          o = n(18600),
          s = n(80146),
          l = n(24269),
          c = n(48984),
          p = n(4316),
          u = n(44235),
          d = n(27785),
          m = n(81074),
          f = n(21582),
          h = n(54504),
          g = n(7301),
          v = n(46581)
        e.exports = function (e, t, n, x, b, y, w) {
          var k = g(e, n),
            _ = g(t, n),
            P = w.get(_)
          if (P) return void a(e, n, P)
          var I = y ? y(k, _, n + "", e, t, w) : void 0,
            j = void 0 === I
          if (j) {
            var A = c(_),
              S = !A && u(_),
              O = !A && !S && h(_)
            ;((I = _),
              A || S || O
                ? c(k)
                  ? (I = k)
                  : p(k)
                    ? (I = o(k))
                    : S
                      ? ((j = !1), (I = i(_, !0)))
                      : O
                        ? ((j = !1), (I = r(_, !0)))
                        : (I = [])
                : f(_) || l(_)
                  ? ((I = k), l(k) ? (I = v(k)) : (!m(k) || d(k)) && (I = s(_)))
                  : (j = !1))
          }
          ;(j && (w.set(_, I), b(I, _, x, y, w), w.delete(_)), a(e, n, I))
        }
      },
      48296(e) {
        e.exports = function (e) {
          return function (t) {
            return null == t ? void 0 : t[e]
          }
        }
      },
      69382(e, t, n) {
        var a = n(6173)
        e.exports = function (e) {
          return function (t) {
            return a(t, e)
          }
        }
      },
      84995(e, t, n) {
        var a = n(17075),
          i = n(46456),
          r = n(39514)
        e.exports = function (e, t) {
          return r(i(e, t, a), e + "")
        }
      },
      55801(e, t, n) {
        var a = n(55272),
          i = n(76808),
          r = n(78038),
          o = n(81074),
          s = n(93438)
        e.exports = function (e, t, n, l) {
          if (!o(e)) return e
          t = i(t, e)
          for (var c = -1, p = t.length, u = p - 1, d = e; null != d && ++c < p;) {
            var m = s(t[c]),
              f = n
            if ("__proto__" === m || "constructor" === m || "prototype" === m) break
            if (c != u) {
              var h = d[m]
              void 0 === (f = l ? l(h, m, d) : void 0) && (f = o(h) ? h : r(t[c + 1]) ? [] : {})
            }
            ;(a(d, m, f), (d = d[m]))
          }
          return e
        }
      },
      17321(e, t, n) {
        var a = n(97969),
          i = n(370),
          r = n(17075)
        e.exports = i
          ? function (e, t) {
              return i(e, "toString", { configurable: !0, enumerable: !1, value: a(t), writable: !0 })
            }
          : r
      },
      70251(e) {
        e.exports = function (e, t, n) {
          var a = -1,
            i = e.length
          ;(t < 0 && (t = -t > i ? 0 : i + t),
            (n = n > i ? i : n) < 0 && (n += i),
            (i = t > n ? 0 : (n - t) >>> 0),
            (t >>>= 0))
          for (var r = Array(i); ++a < i;) r[a] = e[a + t]
          return r
        }
      },
      59651(e) {
        e.exports = function (e, t) {
          for (var n = -1, a = Array(e); ++n < e;) a[n] = t(n)
          return a
        }
      },
      91497(e, t, n) {
        var a = n(20776),
          i = n(2041),
          r = n(48984),
          o = n(45205),
          s = a ? a.prototype : void 0,
          l = s ? s.toString : void 0
        e.exports = function e(t) {
          if ("string" == typeof t) return t
          if (r(t)) return i(t, e) + ""
          if (o(t)) return l ? l.call(t) : ""
          var n = t + ""
          return "0" == n && 1 / t == -1 / 0 ? "-0" : n
        }
      },
      22393(e, t, n) {
        var a = n(2123),
          i = /^\s+/
        e.exports = function (e) {
          return e ? e.slice(0, a(e) + 1).replace(i, "") : e
        }
      },
      76994(e) {
        e.exports = function (e) {
          return function (t) {
            return e(t)
          }
        }
      },
      97560(e, t, n) {
        var a = n(76808),
          i = n(38349),
          r = n(25840),
          o = n(93438),
          s = Object.prototype.hasOwnProperty
        e.exports = function (e, t) {
          t = a(t, e)
          var n = -1,
            l = t.length
          if (!l) return !0
          for (; ++n < l;) {
            var c = o(t[n])
            if (
              ("__proto__" === c && !s.call(e, "__proto__")) ||
              (("constructor" === c || "prototype" === c) && n < l - 1)
            )
              return !1
          }
          var p = r(e, t)
          return null == p || delete p[o(i(t))]
        }
      },
      3286(e) {
        e.exports = function (e, t) {
          return e.has(t)
        }
      },
      76808(e, t, n) {
        var a = n(48984),
          i = n(91217),
          r = n(10859),
          o = n(33265)
        e.exports = function (e, t) {
          return a(e) ? e : i(e, t) ? [e] : r(o(e))
        }
      },
      93880(e, t, n) {
        var a = n(44149)
        e.exports = function (e) {
          var t = new e.constructor(e.byteLength)
          return (new a(t).set(new a(e)), t)
        }
      },
      3477(e, t, n) {
        e = n.nmd(e)
        var a = n(83084),
          i = t && !t.nodeType && t,
          r = i && e && !e.nodeType && e,
          o = r && r.exports === i ? a.Buffer : void 0,
          s = o ? o.allocUnsafe : void 0
        e.exports = function (e, t) {
          if (t) return e.slice()
          var n = e.length,
            a = s ? s(n) : new e.constructor(n)
          return (e.copy(a), a)
        }
      },
      72610(e, t, n) {
        var a = n(93880)
        e.exports = function (e, t) {
          var n = t ? a(e.buffer) : e.buffer
          return new e.constructor(n, e.byteOffset, e.byteLength)
        }
      },
      97438(e) {
        var t = /\w*$/
        e.exports = function (e) {
          var n = new e.constructor(e.source, t.exec(e))
          return ((n.lastIndex = e.lastIndex), n)
        }
      },
      19195(e, t, n) {
        var a = n(20776),
          i = a ? a.prototype : void 0,
          r = i ? i.valueOf : void 0
        e.exports = function (e) {
          return r ? Object(r.call(e)) : {}
        }
      },
      70338(e, t, n) {
        var a = n(93880)
        e.exports = function (e, t) {
          var n = t ? a(e.buffer) : e.buffer
          return new e.constructor(n, e.byteOffset, e.length)
        }
      },
      18600(e) {
        e.exports = function (e, t) {
          var n = -1,
            a = e.length
          for (t || (t = Array(a)); ++n < a;) t[n] = e[n]
          return t
        }
      },
      54146(e, t, n) {
        var a = n(55272),
          i = n(5259)
        e.exports = function (e, t, n, r) {
          var o = !n
          n || (n = {})
          for (var s = -1, l = t.length; ++s < l;) {
            var c = t[s],
              p = r ? r(n[c], e[c], c, n, e) : void 0
            ;(void 0 === p && (p = e[c]), o ? i(n, c, p) : a(n, c, p))
          }
          return n
        }
      },
      60400(e, t, n) {
        var a = n(54146),
          i = n(43729)
        e.exports = function (e, t) {
          return a(e, i(e), t)
        }
      },
      2847(e, t, n) {
        var a = n(54146),
          i = n(18010)
        e.exports = function (e, t) {
          return a(e, i(e), t)
        }
      },
      47340(e, t, n) {
        e.exports = n(83084)["__core-js_shared__"]
      },
      86358(e, t, n) {
        var a = n(84995),
          i = n(96197)
        e.exports = function (e) {
          return a(function (t, n) {
            var a = -1,
              r = n.length,
              o = r > 1 ? n[r - 1] : void 0,
              s = r > 2 ? n[2] : void 0
            for (
              o = e.length > 3 && "function" == typeof o ? (r--, o) : void 0,
                s && i(n[0], n[1], s) && ((o = r < 3 ? void 0 : o), (r = 1)),
                t = Object(t);
              ++a < r;
            ) {
              var l = n[a]
              l && e(t, l, a, o)
            }
            return t
          })
        }
      },
      51430(e) {
        e.exports = function (e) {
          return function (t, n, a) {
            for (var i = -1, r = Object(t), o = a(t), s = o.length; s--;) {
              var l = o[e ? s : ++i]
              if (!1 === n(r[l], l, r)) break
            }
            return t
          }
        }
      },
      60423(e, t, n) {
        var a = n(38180),
          i = n(93087),
          r = n(42501)
        e.exports = function (e) {
          return function (t, n, o) {
            var s = Object(t)
            if (!i(t)) {
              var l = a(n, 3)
              ;((t = r(t)),
                (n = function (e) {
                  return l(s[e], e, s)
                }))
            }
            var c = e(t, n, o)
            return c > -1 ? s[l ? t[c] : c] : void 0
          }
        }
      },
      61669(e, t, n) {
        var a = n(21582)
        e.exports = function (e) {
          return a(e) ? void 0 : e
        }
      },
      370(e, t, n) {
        var a = n(30061)
        e.exports = (function () {
          try {
            var e = a(Object, "defineProperty")
            return (e({}, "", {}), e)
          } catch (e) {}
        })()
      },
      38128(e, t, n) {
        var a = n(11882),
          i = n(11815),
          r = n(3286)
        e.exports = function (e, t, n, o, s, l) {
          var c = 1 & n,
            p = e.length,
            u = t.length
          if (p != u && !(c && u > p)) return !1
          var d = l.get(e),
            m = l.get(t)
          if (d && m) return d == t && m == e
          var f = -1,
            h = !0,
            g = 2 & n ? new a() : void 0
          for (l.set(e, t), l.set(t, e); ++f < p;) {
            var v = e[f],
              x = t[f]
            if (o) var b = c ? o(x, v, f, t, e, l) : o(v, x, f, e, t, l)
            if (void 0 !== b) {
              if (b) continue
              h = !1
              break
            }
            if (g) {
              if (
                !i(t, function (e, t) {
                  if (!r(g, t) && (v === e || s(v, e, n, o, l))) return g.push(t)
                })
              ) {
                h = !1
                break
              }
            } else if (!(v === x || s(v, x, n, o, l))) {
              h = !1
              break
            }
          }
          return (l.delete(e), l.delete(t), h)
        }
      },
      51863(e, t, n) {
        var a = n(20776),
          i = n(44149),
          r = n(16847),
          o = n(38128),
          s = n(39796),
          l = n(74310),
          c = a ? a.prototype : void 0,
          p = c ? c.valueOf : void 0
        e.exports = function (e, t, n, a, c, u, d) {
          switch (n) {
            case "[object DataView]":
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break
              ;((e = e.buffer), (t = t.buffer))
            case "[object ArrayBuffer]":
              if (e.byteLength != t.byteLength || !u(new i(e), new i(t))) break
              return !0
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
              return r(+e, +t)
            case "[object Error]":
              return e.name == t.name && e.message == t.message
            case "[object RegExp]":
            case "[object String]":
              return e == t + ""
            case "[object Map]":
              var m = s
            case "[object Set]":
              var f = 1 & a
              if ((m || (m = l), e.size != t.size && !f)) break
              var h = d.get(e)
              if (h) return h == t
              ;((a |= 2), d.set(e, t))
              var g = o(m(e), m(t), a, c, u, d)
              return (d.delete(e), g)
            case "[object Symbol]":
              if (p) return p.call(e) == p.call(t)
          }
          return !1
        }
      },
      23492(e, t, n) {
        var a = n(3423),
          i = Object.prototype.hasOwnProperty
        e.exports = function (e, t, n, r, o, s) {
          var l = 1 & n,
            c = a(e),
            p = c.length
          if (p != a(t).length && !l) return !1
          for (var u = p; u--;) {
            var d = c[u]
            if (!(l ? d in t : i.call(t, d))) return !1
          }
          var m = s.get(e),
            f = s.get(t)
          if (m && f) return m == t && f == e
          var h = !0
          ;(s.set(e, t), s.set(t, e))
          for (var g = l; ++u < p;) {
            var v = e[(d = c[u])],
              x = t[d]
            if (r) var b = l ? r(x, v, d, t, e, s) : r(v, x, d, e, t, s)
            if (!(void 0 === b ? v === x || o(v, x, n, r, s) : b)) {
              h = !1
              break
            }
            g || (g = "constructor" == d)
          }
          if (h && !g) {
            var y = e.constructor,
              w = t.constructor
            y != w &&
              "constructor" in e &&
              "constructor" in t &&
              !("function" == typeof y && y instanceof y && "function" == typeof w && w instanceof w) &&
              (h = !1)
          }
          return (s.delete(e), s.delete(t), h)
        }
      },
      93525(e, t, n) {
        var a = n(45959),
          i = n(46456),
          r = n(39514)
        e.exports = function (e) {
          return r(i(e, void 0, a), e + "")
        }
      },
      39365(e) {
        e.exports = "object" == typeof global && global && global.Object === Object && global
      },
      3423(e, t, n) {
        var a = n(69754),
          i = n(43729),
          r = n(42501)
        e.exports = function (e) {
          return a(e, r, i)
        }
      },
      44292(e, t, n) {
        var a = n(69754),
          i = n(18010),
          r = n(56630)
        e.exports = function (e) {
          return a(e, r, i)
        }
      },
      56858(e, t, n) {
        var a = n(50285)
        e.exports = function (e, t) {
          var n = e.__data__
          return a(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }
      },
      97161(e, t, n) {
        var a = n(47813),
          i = n(42501)
        e.exports = function (e) {
          for (var t = i(e), n = t.length; n--;) {
            var r = t[n],
              o = e[r]
            t[n] = [r, o, a(o)]
          }
          return t
        }
      },
      30061(e, t, n) {
        var a = n(88798),
          i = n(2229)
        e.exports = function (e, t) {
          var n = i(e, t)
          return a(n) ? n : void 0
        }
      },
      27810(e, t, n) {
        e.exports = n(28504)(Object.getPrototypeOf, Object)
      },
      52876(e, t, n) {
        var a = n(20776),
          i = Object.prototype,
          r = i.hasOwnProperty,
          o = i.toString,
          s = a ? a.toStringTag : void 0
        e.exports = function (e) {
          var t = r.call(e, s),
            n = e[s]
          try {
            e[s] = void 0
            var a = !0
          } catch (e) {}
          var i = o.call(e)
          return (a && (t ? (e[s] = n) : delete e[s]), i)
        }
      },
      43729(e, t, n) {
        var a = n(74205),
          i = n(47672),
          r = Object.prototype.propertyIsEnumerable,
          o = Object.getOwnPropertySymbols
        e.exports = o
          ? function (e) {
              return null == e
                ? []
                : a(o((e = Object(e))), function (t) {
                    return r.call(e, t)
                  })
            }
          : i
      },
      18010(e, t, n) {
        var a = n(13083),
          i = n(27810),
          r = n(43729),
          o = n(47672)
        e.exports = Object.getOwnPropertySymbols
          ? function (e) {
              for (var t = []; e;) (a(t, r(e)), (e = i(e)))
              return t
            }
          : o
      },
      45072(e, t, n) {
        var a = n(73065),
          i = n(55760),
          r = n(14487),
          o = n(92330),
          s = n(42884),
          l = n(3021),
          c = n(84568),
          p = "[object Map]",
          u = "[object Promise]",
          d = "[object Set]",
          m = "[object WeakMap]",
          f = "[object DataView]",
          h = c(a),
          g = c(i),
          v = c(r),
          x = c(o),
          b = c(s),
          y = l
        ;(((a && y(new a(new ArrayBuffer(1))) != f) ||
          (i && y(new i()) != p) ||
          (r && y(r.resolve()) != u) ||
          (o && y(new o()) != d) ||
          (s && y(new s()) != m)) &&
          (y = function (e) {
            var t = l(e),
              n = "[object Object]" == t ? e.constructor : void 0,
              a = n ? c(n) : ""
            if (a)
              switch (a) {
                case h:
                  return f
                case g:
                  return p
                case v:
                  return u
                case x:
                  return d
                case b:
                  return m
              }
            return t
          }),
          (e.exports = y))
      },
      2229(e) {
        e.exports = function (e, t) {
          return null == e ? void 0 : e[t]
        }
      },
      31981(e, t, n) {
        var a = n(76808),
          i = n(24269),
          r = n(48984),
          o = n(78038),
          s = n(41249),
          l = n(93438)
        e.exports = function (e, t, n) {
          t = a(t, e)
          for (var c = -1, p = t.length, u = !1; ++c < p;) {
            var d = l(t[c])
            if (!(u = null != e && n(e, d))) break
            e = e[d]
          }
          return u || ++c != p ? u : !!(p = null == e ? 0 : e.length) && s(p) && o(d, p) && (r(e) || i(e))
        }
      },
      17123(e, t, n) {
        var a = n(82331)
        e.exports = function () {
          ;((this.__data__ = a ? a(null) : {}), (this.size = 0))
        }
      },
      42295(e) {
        e.exports = function (e) {
          var t = this.has(e) && delete this.__data__[e]
          return ((this.size -= !!t), t)
        }
      },
      71206(e, t, n) {
        var a = n(82331),
          i = Object.prototype.hasOwnProperty
        e.exports = function (e) {
          var t = this.__data__
          if (a) {
            var n = t[e]
            return "__lodash_hash_undefined__" === n ? void 0 : n
          }
          return i.call(t, e) ? t[e] : void 0
        }
      },
      97410(e, t, n) {
        var a = n(82331),
          i = Object.prototype.hasOwnProperty
        e.exports = function (e) {
          var t = this.__data__
          return a ? void 0 !== t[e] : i.call(t, e)
        }
      },
      20698(e, t, n) {
        var a = n(82331)
        e.exports = function (e, t) {
          var n = this.__data__
          return ((this.size += +!this.has(e)), (n[e] = a && void 0 === t ? "__lodash_hash_undefined__" : t), this)
        }
      },
      99096(e) {
        var t = Object.prototype.hasOwnProperty
        e.exports = function (e) {
          var n = e.length,
            a = new e.constructor(n)
          return (n && "string" == typeof e[0] && t.call(e, "index") && ((a.index = e.index), (a.input = e.input)), a)
        }
      },
      20370(e, t, n) {
        var a = n(93880),
          i = n(72610),
          r = n(97438),
          o = n(19195),
          s = n(70338)
        e.exports = function (e, t, n) {
          var l = e.constructor
          switch (t) {
            case "[object ArrayBuffer]":
              return a(e)
            case "[object Boolean]":
            case "[object Date]":
              return new l(+e)
            case "[object DataView]":
              return i(e, n)
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
              return s(e, n)
            case "[object Map]":
            case "[object Set]":
              return new l()
            case "[object Number]":
            case "[object String]":
              return new l(e)
            case "[object RegExp]":
              return r(e)
            case "[object Symbol]":
              return o(e)
          }
        }
      },
      80146(e, t, n) {
        var a = n(45301),
          i = n(27810),
          r = n(29432)
        e.exports = function (e) {
          return "function" != typeof e.constructor || r(e) ? {} : a(i(e))
        }
      },
      66800(e, t, n) {
        var a = n(20776),
          i = n(24269),
          r = n(48984),
          o = a ? a.isConcatSpreadable : void 0
        e.exports = function (e) {
          return r(e) || i(e) || !!(o && e && e[o])
        }
      },
      78038(e) {
        var t = /^(?:0|[1-9]\d*)$/
        e.exports = function (e, n) {
          var a = typeof e
          return (
            !!(n = null == n ? 0x1fffffffffffff : n) &&
            ("number" == a || ("symbol" != a && t.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < n
          )
        }
      },
      96197(e, t, n) {
        var a = n(16847),
          i = n(93087),
          r = n(78038),
          o = n(81074)
        e.exports = function (e, t, n) {
          if (!o(n)) return !1
          var s = typeof t
          return ("number" == s ? !!(i(n) && r(t, n.length)) : "string" == s && t in n) && a(n[t], e)
        }
      },
      91217(e, t, n) {
        var a = n(48984),
          i = n(45205),
          r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          o = /^\w*$/
        e.exports = function (e, t) {
          if (a(e)) return !1
          var n = typeof e
          return (
            !!("number" == n || "symbol" == n || "boolean" == n || null == e || i(e)) ||
            o.test(e) ||
            !r.test(e) ||
            (null != t && e in Object(t))
          )
        }
      },
      50285(e) {
        e.exports = function (e) {
          var t = typeof e
          return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        }
      },
      48869(e, t, n) {
        var a,
          i = n(47340),
          r = (a = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + a : ""
        e.exports = function (e) {
          return !!r && r in e
        }
      },
      29432(e) {
        var t = Object.prototype
        e.exports = function (e) {
          var n = e && e.constructor
          return e === (("function" == typeof n && n.prototype) || t)
        }
      },
      47813(e, t, n) {
        var a = n(81074)
        e.exports = function (e) {
          return e == e && !a(e)
        }
      },
      71583(e) {
        e.exports = function () {
          ;((this.__data__ = []), (this.size = 0))
        }
      },
      8923(e, t, n) {
        var a = n(86232),
          i = Array.prototype.splice
        e.exports = function (e) {
          var t = this.__data__,
            n = a(t, e)
          return !(n < 0) && (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, !0)
        }
      },
      71674(e, t, n) {
        var a = n(86232)
        e.exports = function (e) {
          var t = this.__data__,
            n = a(t, e)
          return n < 0 ? void 0 : t[n][1]
        }
      },
      48254(e, t, n) {
        var a = n(86232)
        e.exports = function (e) {
          return a(this.__data__, e) > -1
        }
      },
      22182(e, t, n) {
        var a = n(86232)
        e.exports = function (e, t) {
          var n = this.__data__,
            i = a(n, e)
          return (i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this)
        }
      },
      76439(e, t, n) {
        var a = n(61216),
          i = n(900),
          r = n(55760)
        e.exports = function () {
          ;((this.size = 0), (this.__data__ = { hash: new a(), map: new (r || i)(), string: new a() }))
        }
      },
      80323(e, t, n) {
        var a = n(56858)
        e.exports = function (e) {
          var t = a(this, e).delete(e)
          return ((this.size -= !!t), t)
        }
      },
      22562(e, t, n) {
        var a = n(56858)
        e.exports = function (e) {
          return a(this, e).get(e)
        }
      },
      49270(e, t, n) {
        var a = n(56858)
        e.exports = function (e) {
          return a(this, e).has(e)
        }
      },
      78766(e, t, n) {
        var a = n(56858)
        e.exports = function (e, t) {
          var n = a(this, e),
            i = n.size
          return (n.set(e, t), (this.size += +(n.size != i)), this)
        }
      },
      39796(e) {
        e.exports = function (e) {
          var t = -1,
            n = Array(e.size)
          return (
            e.forEach(function (e, a) {
              n[++t] = [a, e]
            }),
            n
          )
        }
      },
      41850(e) {
        e.exports = function (e, t) {
          return function (n) {
            return null != n && n[e] === t && (void 0 !== t || e in Object(n))
          }
        }
      },
      72175(e, t, n) {
        var a = n(50353)
        e.exports = function (e) {
          var t = a(e, function (e) {
              return (500 === n.size && n.clear(), e)
            }),
            n = t.cache
          return t
        }
      },
      82331(e, t, n) {
        e.exports = n(30061)(Object, "create")
      },
      37563(e, t, n) {
        e.exports = n(28504)(Object.keys, Object)
      },
      86472(e) {
        e.exports = function (e) {
          var t = []
          if (null != e) for (var n in Object(e)) t.push(n)
          return t
        }
      },
      23396(e, t, n) {
        e = n.nmd(e)
        var a = n(39365),
          i = t && !t.nodeType && t,
          r = i && e && !e.nodeType && e,
          o = r && r.exports === i && a.process,
          s = (function () {
            try {
              var e = r && r.require && r.require("util").types
              if (e) return e
              return o && o.binding && o.binding("util")
            } catch (e) {}
          })()
        e.exports = s
      },
      77531(e) {
        var t = Object.prototype.toString
        e.exports = function (e) {
          return t.call(e)
        }
      },
      28504(e) {
        e.exports = function (e, t) {
          return function (n) {
            return e(t(n))
          }
        }
      },
      46456(e, t, n) {
        var a = n(55982),
          i = Math.max
        e.exports = function (e, t, n) {
          return (
            (t = i(void 0 === t ? e.length - 1 : t, 0)),
            function () {
              for (var r = arguments, o = -1, s = i(r.length - t, 0), l = Array(s); ++o < s;) l[o] = r[t + o]
              o = -1
              for (var c = Array(t + 1); ++o < t;) c[o] = r[o]
              return ((c[t] = n(l)), a(e, this, c))
            }
          )
        }
      },
      25840(e, t, n) {
        var a = n(6173),
          i = n(70251)
        e.exports = function (e, t) {
          return t.length < 2 ? e : a(e, i(t, 0, -1))
        }
      },
      83084(e, t, n) {
        var a = n(39365),
          i = "object" == typeof self && self && self.Object === Object && self
        e.exports = a || i || Function("return this")()
      },
      7301(e) {
        e.exports = function (e, t) {
          if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
        }
      },
      57711(e) {
        e.exports = function (e) {
          return (this.__data__.set(e, "__lodash_hash_undefined__"), this)
        }
      },
      24092(e) {
        e.exports = function (e) {
          return this.__data__.has(e)
        }
      },
      74310(e) {
        e.exports = function (e) {
          var t = -1,
            n = Array(e.size)
          return (
            e.forEach(function (e) {
              n[++t] = e
            }),
            n
          )
        }
      },
      39514(e, t, n) {
        var a = n(17321)
        e.exports = n(3430)(a)
      },
      3430(e) {
        var t = Date.now
        e.exports = function (e) {
          var n = 0,
            a = 0
          return function () {
            var i = t(),
              r = 16 - (i - a)
            if (((a = i), r > 0)) {
              if (++n >= 800) return arguments[0]
            } else n = 0
            return e.apply(void 0, arguments)
          }
        }
      },
      14437(e, t, n) {
        var a = n(900)
        e.exports = function () {
          ;((this.__data__ = new a()), (this.size = 0))
        }
      },
      95349(e) {
        e.exports = function (e) {
          var t = this.__data__,
            n = t.delete(e)
          return ((this.size = t.size), n)
        }
      },
      39164(e) {
        e.exports = function (e) {
          return this.__data__.get(e)
        }
      },
      93208(e) {
        e.exports = function (e) {
          return this.__data__.has(e)
        }
      },
      11768(e, t, n) {
        var a = n(900),
          i = n(55760),
          r = n(5244)
        e.exports = function (e, t) {
          var n = this.__data__
          if (n instanceof a) {
            var o = n.__data__
            if (!i || o.length < 199) return (o.push([e, t]), (this.size = ++n.size), this)
            n = this.__data__ = new r(o)
          }
          return (n.set(e, t), (this.size = n.size), this)
        }
      },
      10859(e, t, n) {
        var a = n(72175),
          i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          r = /\\(\\)?/g
        e.exports = a(function (e) {
          var t = []
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(i, function (e, n, a, i) {
              t.push(a ? i.replace(r, "$1") : n || e)
            }),
            t
          )
        })
      },
      93438(e, t, n) {
        var a = n(45205)
        e.exports = function (e) {
          if ("string" == typeof e || a(e)) return e
          var t = e + ""
          return "0" == t && 1 / e == -1 / 0 ? "-0" : t
        }
      },
      84568(e) {
        var t = Function.prototype.toString
        e.exports = function (e) {
          if (null != e) {
            try {
              return t.call(e)
            } catch (e) {}
            try {
              return e + ""
            } catch (e) {}
          }
          return ""
        }
      },
      2123(e) {
        var t = /\s/
        e.exports = function (e) {
          for (var n = e.length; n-- && t.test(e.charAt(n)););
          return n
        }
      },
      9002(e, t, n) {
        var a = n(67040)
        e.exports = function (e, t) {
          var n
          if ("function" != typeof t) throw TypeError("Expected a function")
          return (
            (e = a(e)),
            function () {
              return (--e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = void 0), n)
            }
          )
        }
      },
      44814(e, t, n) {
        var a = n(42840)
        e.exports = function (e) {
          return a(e, 5)
        }
      },
      97969(e) {
        e.exports = function (e) {
          return function () {
            return e
          }
        }
      },
      16847(e) {
        e.exports = function (e, t) {
          return e === t || (e != e && t != t)
        }
      },
      57118(e, t, n) {
        e.exports = n(60423)(n(78232))
      },
      78232(e, t, n) {
        var a = n(95636),
          i = n(38180),
          r = n(67040),
          o = Math.max,
          s = Math.min
        e.exports = function (e, t, n) {
          var l = null == e ? 0 : e.length
          if (!l) return -1
          var c = l - 1
          return (void 0 !== n && ((c = r(n)), (c = n < 0 ? o(l + c, 0) : s(c, l - 1))), a(e, i(t, 3), c, !0))
        }
      },
      45959(e, t, n) {
        var a = n(39999)
        e.exports = function (e) {
          return (null == e ? 0 : e.length) ? a(e, 1) : []
        }
      },
      52453(e, t, n) {
        var a = n(6173)
        e.exports = function (e, t, n) {
          var i = null == e ? void 0 : a(e, t)
          return void 0 === i ? n : i
        }
      },
      52498(e, t, n) {
        var a = n(51066),
          i = n(31981)
        e.exports = function (e, t) {
          return null != e && i(e, t, a)
        }
      },
      17075(e) {
        e.exports = function (e) {
          return e
        }
      },
      24269(e, t, n) {
        var a = n(46613),
          i = n(24653),
          r = Object.prototype,
          o = r.hasOwnProperty,
          s = r.propertyIsEnumerable
        e.exports = a(
          (function () {
            return arguments
          })(),
        )
          ? a
          : function (e) {
              return i(e) && o.call(e, "callee") && !s.call(e, "callee")
            }
      },
      48984(e) {
        e.exports = Array.isArray
      },
      93087(e, t, n) {
        var a = n(27785),
          i = n(41249)
        e.exports = function (e) {
          return null != e && i(e.length) && !a(e)
        }
      },
      4316(e, t, n) {
        var a = n(93087),
          i = n(24653)
        e.exports = function (e) {
          return i(e) && a(e)
        }
      },
      44235(e, t, n) {
        e = n.nmd(e)
        var a = n(83084),
          i = n(32698),
          r = t && !t.nodeType && t,
          o = r && e && !e.nodeType && e,
          s = o && o.exports === r ? a.Buffer : void 0,
          l = s ? s.isBuffer : void 0
        e.exports = l || i
      },
      8857(e, t, n) {
        var a = n(77169)
        e.exports = function (e, t) {
          return a(e, t)
        }
      },
      27785(e, t, n) {
        var a = n(3021),
          i = n(81074)
        e.exports = function (e) {
          if (!i(e)) return !1
          var t = a(e)
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          )
        }
      },
      41249(e) {
        e.exports = function (e) {
          return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff
        }
      },
      8987(e, t, n) {
        var a = n(92883),
          i = n(76994),
          r = n(23396),
          o = r && r.isMap
        e.exports = o ? i(o) : a
      },
      81074(e) {
        e.exports = function (e) {
          var t = typeof e
          return null != e && ("object" == t || "function" == t)
        }
      },
      24653(e) {
        e.exports = function (e) {
          return null != e && "object" == typeof e
        }
      },
      21582(e, t, n) {
        var a = n(3021),
          i = n(27810),
          r = n(24653),
          o = Object.prototype,
          s = Function.prototype.toString,
          l = o.hasOwnProperty,
          c = s.call(Object)
        e.exports = function (e) {
          if (!r(e) || "[object Object]" != a(e)) return !1
          var t = i(e)
          if (null === t) return !0
          var n = l.call(t, "constructor") && t.constructor
          return "function" == typeof n && n instanceof n && s.call(n) == c
        }
      },
      42229(e, t, n) {
        var a = n(20509),
          i = n(76994),
          r = n(23396),
          o = r && r.isSet
        e.exports = o ? i(o) : a
      },
      45205(e, t, n) {
        var a = n(3021),
          i = n(24653)
        e.exports = function (e) {
          return "symbol" == typeof e || (i(e) && "[object Symbol]" == a(e))
        }
      },
      54504(e, t, n) {
        var a = n(9792),
          i = n(76994),
          r = n(23396),
          o = r && r.isTypedArray
        e.exports = o ? i(o) : a
      },
      42501(e, t, n) {
        var a = n(77120),
          i = n(89325),
          r = n(93087)
        e.exports = function (e) {
          return r(e) ? a(e) : i(e)
        }
      },
      56630(e, t, n) {
        var a = n(77120),
          i = n(16862),
          r = n(93087)
        e.exports = function (e) {
          return r(e) ? a(e, !0) : i(e)
        }
      },
      38349(e) {
        e.exports = function (e) {
          var t = null == e ? 0 : e.length
          return t ? e[t - 1] : void 0
        }
      },
      94065(e, t, n) {
        var a = n(5259),
          i = n(78932),
          r = n(38180)
        e.exports = function (e, t) {
          var n = {}
          return (
            (t = r(t, 3)),
            i(e, function (e, i, r) {
              a(n, i, t(e, i, r))
            }),
            n
          )
        }
      },
      50353(e, t, n) {
        var a = n(5244)
        function i(e, t) {
          if ("function" != typeof e || (null != t && "function" != typeof t)) throw TypeError("Expected a function")
          var n = function () {
            var a = arguments,
              i = t ? t.apply(this, a) : a[0],
              r = n.cache
            if (r.has(i)) return r.get(i)
            var o = e.apply(this, a)
            return ((n.cache = r.set(i, o) || r), o)
          }
          return ((n.cache = new (i.Cache || a)()), n)
        }
        ;((i.Cache = a), (e.exports = i))
      },
      10189(e, t, n) {
        var a = n(97857)
        e.exports = n(86358)(function (e, t, n, i) {
          a(e, t, n, i)
        })
      },
      8292(e, t, n) {
        var a = n(2041),
          i = n(42840),
          r = n(97560),
          o = n(76808),
          s = n(54146),
          l = n(61669),
          c = n(93525),
          p = n(44292)
        e.exports = c(function (e, t) {
          var n = {}
          if (null == e) return n
          var c = !1
          ;((t = a(t, function (t) {
            return ((t = o(t, e)), c || (c = t.length > 1), t)
          })),
            s(e, p(e), n),
            c && (n = i(n, 7, l)))
          for (var u = t.length; u--;) r(n, t[u])
          return n
        })
      },
      31648(e, t, n) {
        var a = n(9002)
        e.exports = function (e) {
          return a(2, e)
        }
      },
      37952(e, t, n) {
        var a = n(48296),
          i = n(69382),
          r = n(91217),
          o = n(93438)
        e.exports = function (e) {
          return r(e) ? a(o(e)) : i(e)
        }
      },
      67073(e, t, n) {
        var a = n(55801)
        e.exports = function (e, t, n) {
          return null == e ? e : a(e, t, n)
        }
      },
      47672(e) {
        e.exports = function () {
          return []
        }
      },
      32698(e) {
        e.exports = function () {
          return !1
        }
      },
      28035(e, t, n) {
        var a = n(84301)
        e.exports = function (e) {
          return e
            ? 1 / 0 === (e = a(e)) || -1 / 0 === e
              ? (e < 0 ? -1 : 1) * 17976931348623157e292
              : e == e
                ? e
                : 0
            : 0 === e
              ? e
              : 0
        }
      },
      67040(e, t, n) {
        var a = n(28035)
        e.exports = function (e) {
          var t = a(e),
            n = t % 1
          return t == t ? (n ? t - n : t) : 0
        }
      },
      84301(e, t, n) {
        var a = n(22393),
          i = n(81074),
          r = n(45205),
          o = /^[-+]0x[0-9a-f]+$/i,
          s = /^0b[01]+$/i,
          l = /^0o[0-7]+$/i,
          c = parseInt
        e.exports = function (e) {
          if ("number" == typeof e) return e
          if (r(e)) return 0 / 0
          if (i(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e
            e = i(t) ? t + "" : t
          }
          if ("string" != typeof e) return 0 === e ? e : +e
          e = a(e)
          var n = s.test(e)
          return n || l.test(e) ? c(e.slice(2), n ? 2 : 8) : o.test(e) ? 0 / 0 : +e
        }
      },
      46581(e, t, n) {
        var a = n(54146),
          i = n(56630)
        e.exports = function (e) {
          return a(e, i(e))
        }
      },
      33265(e, t, n) {
        var a = n(91497)
        e.exports = function (e) {
          return null == e ? "" : a(e)
        }
      },
      65168(e, t, n) {
        var a = n(97560)
        e.exports = function (e, t) {
          return null == e || a(e, t)
        }
      },
      527(e, t, n) {
        e.exports = n(35796)
      },
      55722(e, t, n) {
        "use strict"
        var a,
          i,
          r,
          o = n(527),
          s = n(62003).extname,
          l = /^\s*([^;\s]*)(?:;|\s|$)/,
          c = /^text\//i
        function p(e) {
          if (!e || "string" != typeof e) return !1
          var t = l.exec(e),
            n = t && o[t[1].toLowerCase()]
          return n && n.charset ? n.charset : !!(t && c.test(t[1])) && "UTF-8"
        }
        ;((t.charset = p),
          (t.charsets = { lookup: p }),
          (t.contentType = function (e) {
            if (!e || "string" != typeof e) return !1
            var n = -1 === e.indexOf("/") ? t.lookup(e) : e
            if (!n) return !1
            if (-1 === n.indexOf("charset")) {
              var a = t.charset(n)
              a && (n += "; charset=" + a.toLowerCase())
            }
            return n
          }),
          (t.extension = function (e) {
            if (!e || "string" != typeof e) return !1
            var n = l.exec(e),
              a = n && t.extensions[n[1].toLowerCase()]
            return !!a && !!a.length && a[0]
          }),
          (t.extensions = Object.create(null)),
          (t.lookup = function (e) {
            if (!e || "string" != typeof e) return !1
            var n = s("x." + e)
              .toLowerCase()
              .substr(1)
            return !!n && (t.types[n] || !1)
          }),
          (t.types = Object.create(null)),
          (a = t.extensions),
          (i = t.types),
          (r = ["nginx", "apache", void 0, "iana"]),
          Object.keys(o).forEach(function (e) {
            var t = o[e],
              n = t.extensions
            if (n && n.length) {
              a[e] = n
              for (var s = 0; s < n.length; s++) {
                var l = n[s]
                if (i[l]) {
                  var c = r.indexOf(o[i[l]].source),
                    p = r.indexOf(t.source)
                  if (
                    "application/octet-stream" !== i[l] &&
                    (c > p || (c === p && "application/" === i[l].substr(0, 12)))
                  )
                    continue
                }
                i[l] = e
              }
            }
          }))
      },
      25133(e) {
        "use strict"
        function t(e, t) {
          if ("string" != typeof e) throw TypeError(`${t} must be a string`)
        }
        function n(e) {
          return 47 === e || 92 === e
        }
        function a(e) {
          return 47 === e
        }
        function i(e) {
          return (e >= 65 && e <= 90) || (e >= 97 && e <= 122)
        }
        function r(e, t, n, a) {
          let i = "",
            r = 0,
            o = -1,
            s = 0,
            l = 0
          for (let c = 0; c <= e.length; ++c) {
            if (c < e.length) l = e.charCodeAt(c)
            else if (a(l)) break
            else l = 47
            if (a(l)) {
              if (o === c - 1 || 1 === s);
              else if (2 === s) {
                if (i.length < 2 || 2 !== r || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2)) {
                  if (i.length > 2) {
                    let e = i.lastIndexOf(n)
                    ;(-1 === e ? ((i = ""), (r = 0)) : (r = (i = i.slice(0, e)).length - 1 - i.lastIndexOf(n)),
                      (o = c),
                      (s = 0))
                    continue
                  } else if (0 !== i.length) {
                    ;((i = ""), (r = 0), (o = c), (s = 0))
                    continue
                  }
                }
                t && ((i += i.length > 0 ? `${n}..` : ".."), (r = 2))
              } else (i.length > 0 ? (i += `${n}${e.slice(o + 1, c)}`) : (i = e.slice(o + 1, c)), (r = c - o - 1))
              ;((o = c), (s = 0))
            } else 46 === l && -1 !== s ? ++s : (s = -1)
          }
          return i
        }
        function o(e, t) {
          var n
          if ("object" != typeof t || null === t) throw TypeError("pathObject must be an object")
          let a = t.dir || t.root,
            i = t.base || `${t.name || ""}${(n = t.ext) ? `${"." === n[0] ? "" : "."}${n}` : ""}`
          return a ? (a === t.root ? `${a}${i}` : `${a}${e}${i}`) : i
        }
        let s = {
            resolve(...e) {
              let a = "",
                o = "",
                s = !1
              for (let r = e.length - 1; r >= -1; r--) {
                let l
                if (r >= 0) {
                  if ((t((l = e[r]), `paths[${r}]`), 0 === l.length)) continue
                } else
                  (void 0 === l || (l.slice(0, 2).toLowerCase() !== a.toLowerCase() && 92 === l.charCodeAt(2))) &&
                    (l = `${a}\\`)
                let c = l.length,
                  p = 0,
                  u = "",
                  d = !1,
                  m = l.charCodeAt(0)
                if (1 === c) n(m) && ((p = 1), (d = !0))
                else if (n(m))
                  if (((d = !0), n(l.charCodeAt(1)))) {
                    let e = 2,
                      t = 2
                    for (; e < c && !n(l.charCodeAt(e));) e++
                    if (e < c && e !== t) {
                      let a = l.slice(t, e)
                      for (t = e; e < c && n(l.charCodeAt(e));) e++
                      if (e < c && e !== t) {
                        for (t = e; e < c && !n(l.charCodeAt(e));) e++
                        ;(e === c || e !== t) &&
                          ("." !== a && "?" !== a
                            ? ((u = `\\\\${a}\\${l.slice(t, e)}`), (p = e))
                            : ((u = `\\\\${a}`), (p = 4)))
                      }
                    }
                  } else p = 1
                else
                  i(m) &&
                    58 === l.charCodeAt(1) &&
                    ((u = l.slice(0, 2)), (p = 2), c > 2 && n(l.charCodeAt(2)) && ((d = !0), (p = 3)))
                if (u.length > 0)
                  if (a.length > 0) {
                    if (u.toLowerCase() !== a.toLowerCase()) continue
                  } else a = u
                if (s) {
                  if (a.length > 0) break
                } else if (((o = `${l.slice(p)}\\${o}`), (s = d), d && a.length > 0)) break
              }
              return ((o = r(o, !s, "\\", n)), s ? `${a}\\${o}` : `${a}${o}` || ".")
            },
            normalize(e) {
              let o
              t(e, "path")
              let s = e.length
              if (0 === s) return "."
              let l = 0,
                c = !1,
                p = e.charCodeAt(0)
              if (1 === s) return a(p) ? "\\" : e
              if (n(p))
                if (((c = !0), n(e.charCodeAt(1)))) {
                  let t = 2,
                    a = 2
                  for (; t < s && !n(e.charCodeAt(t));) t++
                  if (t < s && t !== a) {
                    let i = e.slice(a, t)
                    for (a = t; t < s && n(e.charCodeAt(t));) t++
                    if (t < s && t !== a) {
                      for (a = t; t < s && !n(e.charCodeAt(t));) t++
                      if (t === s || t !== a)
                        if ("." === i || "?" === i) ((o = `\\\\${i}`), (l = 4))
                        else {
                          if (t === s) return `\\\\${i}\\${e.slice(a)}\\`
                          ;((o = `\\\\${i}\\${e.slice(a, t)}`), (l = t))
                        }
                    }
                  }
                } else l = 1
              else
                i(p) &&
                  58 === e.charCodeAt(1) &&
                  ((o = e.slice(0, 2)), (l = 2), s > 2 && n(e.charCodeAt(2)) && ((c = !0), (l = 3)))
              let u = l < s ? r(e.slice(l), !c, "\\", n) : ""
              return (0 !== u.length || c || (u = "."),
              u.length > 0 && n(e.charCodeAt(s - 1)) && (u += "\\"),
              void 0 === o)
                ? c
                  ? `\\${u}`
                  : u
                : c
                  ? `${o}\\${u}`
                  : `${o}${u}`
            },
            isAbsolute(e) {
              t(e, "path")
              let a = e.length
              if (0 === a) return !1
              let r = e.charCodeAt(0)
              return n(r) || (a > 2 && i(r) && 58 === e.charCodeAt(1) && n(e.charCodeAt(2)))
            },
            join(...e) {
              let a, i
              if (0 === e.length) return "."
              for (let n = 0; n < e.length; ++n) {
                let r = e[n]
                ;(t(r, "path"), r.length > 0 && (void 0 === a ? (a = i = r) : (a += `\\${r}`)))
              }
              if (void 0 === a) return "."
              let r = !0,
                o = 0
              if (n(i.charCodeAt(0))) {
                ++o
                let e = i.length
                e > 1 && n(i.charCodeAt(1)) && (++o, e > 2 && (n(i.charCodeAt(2)) ? ++o : (r = !1)))
              }
              if (r) {
                for (; o < a.length && n(a.charCodeAt(o));) o++
                o >= 2 && (a = `\\${a.slice(o)}`)
              }
              return s.normalize(a)
            },
            relative(e, n) {
              if ((t(e, "from"), t(n, "to"), e === n)) return ""
              let a = s.resolve(e),
                i = s.resolve(n)
              if (a === i || ((e = a.toLowerCase()), (n = i.toLowerCase()), e === n)) return ""
              if (a.length !== e.length || i.length !== n.length) {
                let e,
                  t = a.split("\\"),
                  n = i.split("\\")
                ;("" === t[t.length - 1] && t.pop(), "" === n[n.length - 1] && n.pop())
                let r = t.length,
                  o = n.length,
                  s = r < o ? r : o
                for (e = 0; e < s && t[e].toLowerCase() === n[e].toLowerCase(); e++);
                return 0 === e
                  ? i
                  : e === s
                    ? o > s
                      ? n.slice(e).join("\\")
                      : r > s
                        ? "..\\".repeat(r - 1 - e) + ".."
                        : ""
                    : "..\\".repeat(r - e) + n.slice(e).join("\\")
              }
              let r = 0
              for (; r < e.length && 92 === e.charCodeAt(r);) r++
              let o = e.length
              for (; o - 1 > r && 92 === e.charCodeAt(o - 1);) o--
              let l = o - r,
                c = 0
              for (; c < n.length && 92 === n.charCodeAt(c);) c++
              let p = n.length
              for (; p - 1 > c && 92 === n.charCodeAt(p - 1);) p--
              let u = p - c,
                d = l < u ? l : u,
                m = -1,
                f = 0
              for (; f < d; f++) {
                let t = e.charCodeAt(r + f)
                if (t !== n.charCodeAt(c + f)) break
                92 === t && (m = f)
              }
              if (f !== d) {
                if (-1 === m) return i
              } else {
                if (u > d) {
                  if (92 === n.charCodeAt(c + f)) return i.slice(c + f + 1)
                  if (2 === f) return i.slice(c + f)
                }
                ;(l > d && (92 === e.charCodeAt(r + f) ? (m = f) : 2 === f && (m = 3)), -1 === m && (m = 0))
              }
              let h = ""
              for (f = r + m + 1; f <= o; ++f)
                (f === o || 92 === e.charCodeAt(f)) && (h += 0 === h.length ? ".." : "\\..")
              return ((c += m), h.length > 0) ? `${h}${i.slice(c, p)}` : (92 === i.charCodeAt(c) && ++c, i.slice(c, p))
            },
            toNamespacedPath(e) {
              if ("string" != typeof e || 0 === e.length) return e
              let t = s.resolve(e)
              if (t.length <= 2) return e
              if (92 === t.charCodeAt(0)) {
                if (92 === t.charCodeAt(1)) {
                  let e = t.charCodeAt(2)
                  if (63 !== e && 46 !== e) return `\\\\?\\UNC\\${t.slice(2)}`
                }
              } else if (i(t.charCodeAt(0)) && 58 === t.charCodeAt(1) && 92 === t.charCodeAt(2)) return `\\\\?\\${t}`
              return t
            },
            dirname(e) {
              t(e, "path")
              let a = e.length
              if (0 === a) return "."
              let r = -1,
                o = 0,
                s = e.charCodeAt(0)
              if (1 === a) return n(s) ? e : "."
              if (n(s)) {
                if (((r = o = 1), n(e.charCodeAt(1)))) {
                  let t = 2,
                    i = 2
                  for (; t < a && !n(e.charCodeAt(t));) t++
                  if (t < a && t !== i) {
                    for (i = t; t < a && n(e.charCodeAt(t));) t++
                    if (t < a && t !== i) {
                      for (i = t; t < a && !n(e.charCodeAt(t));) t++
                      if (t === a) return e
                      t !== i && (r = o = t + 1)
                    }
                  }
                }
              } else i(s) && 58 === e.charCodeAt(1) && (o = r = a > 2 && n(e.charCodeAt(2)) ? 3 : 2)
              let l = -1,
                c = !0
              for (let t = a - 1; t >= o; --t)
                if (n(e.charCodeAt(t))) {
                  if (!c) {
                    l = t
                    break
                  }
                } else c = !1
              if (-1 === l) {
                if (-1 === r) return "."
                l = r
              }
              return e.slice(0, l)
            },
            basename(e, a) {
              ;(void 0 !== a && t(a, "suffix"), t(e, "path"))
              let r = 0,
                o = -1,
                s = !0
              if (
                (e.length >= 2 && i(e.charCodeAt(0)) && 58 === e.charCodeAt(1) && (r = 2),
                void 0 !== a && a.length > 0 && a.length <= e.length)
              ) {
                if (a === e) return ""
                let t = a.length - 1,
                  i = -1
                for (let l = e.length - 1; l >= r; --l) {
                  let c = e.charCodeAt(l)
                  if (n(c)) {
                    if (!s) {
                      r = l + 1
                      break
                    }
                  } else
                    (-1 === i && ((s = !1), (i = l + 1)),
                      t >= 0 && (c === a.charCodeAt(t) ? -1 == --t && (o = l) : ((t = -1), (o = i))))
                }
                return (r === o ? (o = i) : -1 === o && (o = e.length), e.slice(r, o))
              }
              for (let t = e.length - 1; t >= r; --t)
                if (n(e.charCodeAt(t))) {
                  if (!s) {
                    r = t + 1
                    break
                  }
                } else -1 === o && ((s = !1), (o = t + 1))
              return -1 === o ? "" : e.slice(r, o)
            },
            extname(e) {
              t(e, "path")
              let a = 0,
                r = -1,
                o = 0,
                s = -1,
                l = !0,
                c = 0
              e.length >= 2 && 58 === e.charCodeAt(1) && i(e.charCodeAt(0)) && (a = o = 2)
              for (let t = e.length - 1; t >= a; --t) {
                let a = e.charCodeAt(t)
                if (n(a)) {
                  if (!l) {
                    o = t + 1
                    break
                  }
                  continue
                }
                ;(-1 === s && ((l = !1), (s = t + 1)),
                  46 === a ? (-1 === r ? (r = t) : 1 !== c && (c = 1)) : -1 !== r && (c = -1))
              }
              return -1 === r || -1 === s || 0 === c || (1 === c && r === s - 1 && r === o + 1) ? "" : e.slice(r, s)
            },
            format: o.bind(null, "\\"),
            parse(e) {
              t(e, "path")
              let a = { root: "", dir: "", base: "", ext: "", name: "" }
              if (0 === e.length) return a
              let r = e.length,
                o = 0,
                s = e.charCodeAt(0)
              if (1 === r) return (n(s) ? (a.root = a.dir = e) : (a.base = a.name = e), a)
              if (n(s)) {
                if (((o = 1), n(e.charCodeAt(1)))) {
                  let t = 2,
                    a = 2
                  for (; t < r && !n(e.charCodeAt(t));) t++
                  if (t < r && t !== a) {
                    for (a = t; t < r && n(e.charCodeAt(t));) t++
                    if (t < r && t !== a) {
                      for (a = t; t < r && !n(e.charCodeAt(t));) t++
                      t === r ? (o = t) : t !== a && (o = t + 1)
                    }
                  }
                }
              } else if (i(s) && 58 === e.charCodeAt(1)) {
                if (r <= 2) return ((a.root = a.dir = e), a)
                if (((o = 2), n(e.charCodeAt(2)))) {
                  if (3 === r) return ((a.root = a.dir = e), a)
                  o = 3
                }
              }
              o > 0 && (a.root = e.slice(0, o))
              let l = -1,
                c = o,
                p = -1,
                u = !0,
                d = e.length - 1,
                m = 0
              for (; d >= o; --d) {
                if (n((s = e.charCodeAt(d)))) {
                  if (!u) {
                    c = d + 1
                    break
                  }
                  continue
                }
                ;(-1 === p && ((u = !1), (p = d + 1)),
                  46 === s ? (-1 === l ? (l = d) : 1 !== m && (m = 1)) : -1 !== l && (m = -1))
              }
              return (
                -1 !== p &&
                  (-1 === l || 0 === m || (1 === m && l === p - 1 && l === c + 1)
                    ? (a.base = a.name = e.slice(c, p))
                    : ((a.name = e.slice(c, l)), (a.base = e.slice(c, p)), (a.ext = e.slice(l, p)))),
                c > 0 && c !== o ? (a.dir = e.slice(0, c - 1)) : (a.dir = a.root),
                a
              )
            },
            sep: "\\",
            delimiter: ";",
            win32: null,
            posix: null,
          },
          l = {
            resolve(...e) {
              let n = "",
                i = !1
              for (let a = e.length - 1; a >= 0 && !i; a--) {
                let r = e[a]
                ;(t(r, `paths[${a}]`), 0 !== r.length && ((n = `${r}/${n}`), (i = 47 === r.charCodeAt(0))))
              }
              return ((n = r(n, !i, "/", a)), i) ? `/${n}` : n.length > 0 ? n : "."
            },
            normalize(e) {
              if ((t(e, "path"), 0 === e.length)) return "."
              let n = 47 === e.charCodeAt(0),
                i = 47 === e.charCodeAt(e.length - 1)
              return 0 === (e = r(e, !n, "/", a)).length
                ? n
                  ? "/"
                  : i
                    ? "./"
                    : "."
                : (i && (e += "/"), n ? `/${e}` : e)
            },
            isAbsolute: (e) => (t(e, "path"), e.length > 0 && 47 === e.charCodeAt(0)),
            join(...e) {
              if (0 === e.length) return "."
              let n = []
              for (let a = 0; a < e.length; ++a) {
                let i = e[a]
                ;(t(i, "path"), i.length > 0 && n.push(i))
              }
              return 0 === n.length ? "." : l.normalize(n.join("/"))
            },
            relative(e, n) {
              if ((t(e, "from"), t(n, "to"), e === n || ((e = l.resolve(e)), (n = l.resolve(n)), e === n))) return ""
              let a = e.length,
                i = a - 1,
                r = n.length - 1,
                o = i < r ? i : r,
                s = -1,
                c = 0
              for (; c < o; c++) {
                let t = e.charCodeAt(1 + c)
                if (t !== n.charCodeAt(1 + c)) break
                47 === t && (s = c)
              }
              if (c === o)
                if (r > o) {
                  if (47 === n.charCodeAt(1 + c)) return n.slice(1 + c + 1)
                  if (0 === c) return n.slice(1 + c)
                } else i > o && (47 === e.charCodeAt(1 + c) ? (s = c) : 0 === c && (s = 0))
              let p = ""
              for (c = 1 + s + 1; c <= a; ++c)
                (c === a || 47 === e.charCodeAt(c)) && (p += 0 === p.length ? ".." : "/..")
              return `${p}${n.slice(1 + s)}`
            },
            toNamespacedPath: (e) => e,
            dirname(e) {
              if ((t(e, "path"), 0 === e.length)) return "."
              let n = 47 === e.charCodeAt(0),
                a = -1,
                i = !0
              for (let t = e.length - 1; t >= 1; --t)
                if (47 === e.charCodeAt(t)) {
                  if (!i) {
                    a = t
                    break
                  }
                } else i = !1
              return -1 === a ? (n ? "/" : ".") : n && 1 === a ? "//" : e.slice(0, a)
            },
            basename(e, n) {
              ;(void 0 !== n && t(n, "suffix"), t(e, "path"))
              let a = 0,
                i = -1,
                r = !0
              if (void 0 !== n && n.length > 0 && n.length <= e.length) {
                if (n === e) return ""
                let t = n.length - 1,
                  o = -1
                for (let s = e.length - 1; s >= 0; --s) {
                  let l = e.charCodeAt(s)
                  if (47 === l) {
                    if (!r) {
                      a = s + 1
                      break
                    }
                  } else
                    (-1 === o && ((r = !1), (o = s + 1)),
                      t >= 0 && (l === n.charCodeAt(t) ? -1 == --t && (i = s) : ((t = -1), (i = o))))
                }
                return (a === i ? (i = o) : -1 === i && (i = e.length), e.slice(a, i))
              }
              for (let t = e.length - 1; t >= 0; --t)
                if (47 === e.charCodeAt(t)) {
                  if (!r) {
                    a = t + 1
                    break
                  }
                } else -1 === i && ((r = !1), (i = t + 1))
              return -1 === i ? "" : e.slice(a, i)
            },
            extname(e) {
              t(e, "path")
              let n = -1,
                a = 0,
                i = -1,
                r = !0,
                o = 0
              for (let t = e.length - 1; t >= 0; --t) {
                let s = e[t]
                if ("/" === s) {
                  if (!r) {
                    a = t + 1
                    break
                  }
                  continue
                }
                ;(-1 === i && ((r = !1), (i = t + 1)),
                  "." === s ? (-1 === n ? (n = t) : 1 !== o && (o = 1)) : -1 !== n && (o = -1))
              }
              return -1 === n || -1 === i || 0 === o || (1 === o && n === i - 1 && n === a + 1) ? "" : e.slice(n, i)
            },
            format: o.bind(null, "/"),
            parse(e) {
              let n
              t(e, "path")
              let a = { root: "", dir: "", base: "", ext: "", name: "" }
              if (0 === e.length) return a
              let i = 47 === e.charCodeAt(0)
              i ? ((a.root = "/"), (n = 1)) : (n = 0)
              let r = -1,
                o = 0,
                s = -1,
                l = !0,
                c = e.length - 1,
                p = 0
              for (; c >= n; --c) {
                let t = e.charCodeAt(c)
                if (47 === t) {
                  if (!l) {
                    o = c + 1
                    break
                  }
                  continue
                }
                ;(-1 === s && ((l = !1), (s = c + 1)),
                  46 === t ? (-1 === r ? (r = c) : 1 !== p && (p = 1)) : -1 !== r && (p = -1))
              }
              if (-1 !== s) {
                let t = 0 === o && i ? 1 : o
                ;-1 === r || 0 === p || (1 === p && r === s - 1 && r === o + 1)
                  ? (a.base = a.name = e.slice(t, s))
                  : ((a.name = e.slice(t, r)), (a.base = e.slice(t, s)), (a.ext = e.slice(r, s)))
              }
              return (o > 0 ? (a.dir = e.slice(0, o - 1)) : i && (a.dir = "/"), a)
            },
            sep: "/",
            delimiter: ":",
            win32: null,
            posix: null,
          }
        ;((l.win32 = s.win32 = s),
          (l.posix = s.posix = l),
          (s._makeLong = s.toNamespacedPath),
          (l._makeLong = l.toNamespacedPath),
          (e.exports = l))
      },
      71415(e, t, n) {
        "use strict"
        n(85172)
        var a = n(84698)
        let i = {
          liveVisualizationExecutorRead: "0.169.0-alpha.11",
          desktopMcpSocket: null,
          threadRealtimeVoiceBackend: "0.166.0-alpha.6",
          threadGoalProvenance: "0.161.0-alpha.5",
          threadReadState: "0.163.0-alpha.4",
          threadMemorySummary: "0.165.0-alpha.1",
          computerAudio: "0.147.0",
          feedbackSave: "0.164.0-alpha.11",
          preserveForkPrefix: "0.163.0-alpha.4",
          attachedThreads: "0.165.0-alpha.1",
          persistentSideChats: "0.166.0-alpha.1",
          attachedThreadSearch: "0.169.0-alpha.9",
          capacityErrorRetries: "0.162.0-alpha.18",
          experimentalPredictionForkMode: "0.162.0-alpha.20",
          threadSample: "0.164.0-alpha.11",
          threadSampleInterruptOnCancel: "0.167.0-alpha.1",
          incrementalTools: "0.162.0-alpha.17",
          incrementalToolsLegacy: "0.169.0-alpha.2",
          incrementalToolsLegacyGcp: null,
          skillCatalogDeltas: "0.166.0-alpha.1",
          outputTokenReplay: "0.163.0-alpha.6",
          multiAgentWaitToolConfig: "0.146.0",
          instantInterrupt: "0.159.0",
          bedrockAccessKeysLogin: "0.150.0-alpha.9",
          gcpSetup: "0.166.0-alpha.2",
          modelProviderSetup: "0.167.0-alpha.4",
          searchMcpClient: "0.157.0-alpha.8",
          mcpApplicationNetworkPolicy: "0.157.0-alpha.11",
          mcpServerStatusByName: "0.159.0-alpha.11",
          gatewayOAuth: "0.157.0-alpha.11",
          threadItemAnchors: "0.159.0-alpha.2",
          mcpServerCapabilities: "0.155.0-alpha.4",
          directMcpSandboxCwd: "0.171.0-alpha.6",
          applyPatchPreserveLineEndings: "0.148.0-alpha.6",
          appRead: "0.145.0-alpha.19",
          appReadThreadId: "0.148.0-alpha.7",
          threadCallableApps: "0.164.0-alpha.11",
          audioInputs: "0.145.0-alpha.24",
          compactionImageBudget: "0.149.1",
          cyberAccessProgram: "0.150.0-alpha.11",
          daybreakEnabled: "0.154.0-alpha.6",
          initialDaybreakEnabled: "0.156.0-alpha.1",
          daybreakModelAccess: "0.155.0-alpha.6",
          ephemeralForkCache: "0.156.0-alpha.1",
          reasoningEffortUpdates: "0.156.0",
          mcpToolExposure: "0.147.0",
          mcpToolCallAppContext: "0.142.0-alpha.3",
          misalignmentReview: "0.151.0-alpha.1",
          misalignmentReviewTarget: "0.162.0-alpha.17",
          diagnostics: "0.148.0-alpha.3",
          hostedLoginSuccess: "0.143.0-alpha.39",
          defaultPaginatedHistory: "0.150.0-alpha.10",
          deferredToolWorldState: "0.146.0-alpha.6",
          mcpEventStream: "0.150.0-alpha.1",
          mcpOauthLoginThreadId: "0.143.0-alpha.26",
          mcpOauthRefreshCoordination: "0.154.0-alpha.1",
          mcpResourceReadOriginCallId: "0.148.0-alpha.22",
          mcpResourceReadTarget: "0.157.0-alpha.8",
          mcpStructuredErrors: "0.151.0-alpha.7",
          pluginMcpConfigOverrides: "0.151.0-alpha.1",
          guardianV2StructuredConfig: "0.148.0-alpha.18",
          guardianNativeMultiAgentHistory: "0.166.0-alpha.3",
          guardianV2DecisionsComparison: "0.162.0-alpha.2",
          pluginOnboarding: "0.156.0-alpha.6",
          recommendedPlugins: "0.147.0-alpha.1",
          rolloutCompression: "0.155.0-alpha.13",
          projects: "0.148.0-alpha.21",
          providerModelFallback: "0.143.0-alpha.26",
          threadAttachments: "0.155.0-alpha.2",
          threadAttachmentOwners: "0.162.0-alpha.1",
          threadForkBeforeTurn: "0.145.0-alpha.14",
          threadPluginSelection: "0.155.0-alpha.8",
          threadQueue: "0.148.0-alpha.14",
          threadRevert: "0.148.0-alpha.13",
          threadTimeline: "0.150.0-alpha.9",
          threadRealtimeExistingCall: "0.150.0-alpha.3",
          realtimeVoiceSessionId: "0.163.0-alpha.11",
          tokenBudgetHistoryNotes: "0.150.0-alpha.2",
          turnTrigger: "0.150.0-alpha.10",
          turnLineage: "0.162.0-alpha.17",
          turnToolOutput: "0.151.0-alpha.4",
          turnToolOutputRetention: "0.163.0-alpha.5",
          turnApprovalsReviewer: "0.153.0-alpha.4",
          serviceTierForTurn: "0.150.0-alpha.10",
          asyncCompaction: "0.163.0-alpha.11",
        }
        n.d(
          t,
          {},
          {
            JF: function (e, t) {
              if ("0.0.0" === e)
                return (
                  "threadRealtimeVoiceBackend" !== t &&
                  "desktopMcpSocket" !== t &&
                  "directMcpSandboxCwd" !== t &&
                  "threadItemAnchors" !== t &&
                  "mcpApplicationNetworkPolicy" !== t &&
                  "threadCallableApps" !== t &&
                  "misalignmentReviewTarget" !== t &&
                  "attachedThreads" !== t &&
                  "persistentSideChats" !== t
                )
              let n = i[t]
              if (null == n || null == e || !(0, a.D)(e)) return !1
              if ("compactionImageBudget" === t) {
                if (e.startsWith("0.149.0-alpha.4.")) return (0, a.r)(e, "0.149.0-alpha.4.3") >= 0
                if (e.startsWith("0.149.0-alpha.7.")) return (0, a.r)(e, "0.149.0-alpha.7.3") >= 0
                if (e.startsWith("0.150.0-")) return !1
              }
              return (0, a.r)(e, n) >= 0
            },
          },
        )
      },
      99365(e, t, n) {
        "use strict"
        n.d(
          t,
          {},
          {
            DD: function (e) {
              return e
            },
            JX: function (e) {
              return e
            },
          },
        )
      },
      22677(e, t, n) {
        "use strict"
        n.d(t, { a: () => a })
        let a = {
          error: !0,
          "thread/started": !0,
          "thread/readState/changed": !0,
          "thread/search/partial": !1,
          "thread/section/changed": !0,
          "thread/name/updated": !0,
          "thread/attachment/updated": !0,
          "thread/project/updated": !1,
          "thread/prediction/updated": !1,
          "thread/queue/changed": !0,
          "thread/environment/connected": !0,
          "thread/environment/disconnected": !0,
          "thread/settings/updated": !0,
          "thread/tokenUsage/updated": !0,
          "turn/started": !0,
          "hook/started": !0,
          "turn/completed": !0,
          "hook/completed": !0,
          "turn/diff/updated": !0,
          "turn/plan/updated": !0,
          "item/started": !0,
          "item/autoApprovalReview/started": !0,
          "item/autoApprovalReview/completed": !0,
          "autoApprovalReview/strictReviewRequired": !0,
          "item/completed": !0,
          "rawResponseItem/completed": !1,
          "item/agentMessage/delta": !0,
          "item/plan/delta": !0,
          "command/exec/outputDelta": !1,
          "process/outputDelta": !1,
          "process/exited": !1,
          "project/changed": !1,
          "item/commandExecution/outputDelta": !0,
          "item/commandExecution/terminalInteraction": !0,
          "item/fileChange/outputDelta": !0,
          "item/fileChange/patchUpdated": !0,
          "serverRequest/resolved": !0,
          "item/mcpToolCall/progress": !0,
          "mcpServer/oauthLogin/completed": !0,
          "mcpServer/startupStatus/updated": !0,
          "mcpServer/event/stream/notification": !0,
          "account/updated": !0,
          "account/gatewayOAuth/changed": !0,
          "account/rateLimits/updated": !0,
          "app/list/updated": !0,
          "externalAgentConfig/import/progress": !1,
          "externalAgentConfig/import/completed": !0,
          "fs/changed": !0,
          "item/reasoning/summaryTextDelta": !0,
          "item/reasoning/summaryPartAdded": !0,
          "item/reasoning/textDelta": !0,
          "thread/compacted": !1,
          deprecationNotice: !0,
          configWarning: !0,
          "windows/worldWritableWarning": !1,
          "windowsSandbox/setupCompleted": !0,
          "account/login/completed": !0,
          "model/rerouted": !0,
          "model/verification": !0,
          "modelProvider/authRecoveryStarted": !1,
          "modelProvider/authRecoveryCompleted": !1,
          "model/safetyBuffering/updated": !0,
          "turn/moderationMetadata": !0,
          authStatusChange: !1,
          loginChatGptComplete: !1,
          sessionConfigured: !0,
          "codex/event/session_configured": !0,
          "codex/event/task_started": !1,
          "codex/event/agent_reasoning": !1,
          "codex/event/agent_message": !1,
          "codex/event/task_complete": !1,
          "codex/event/mcp_tool_call_begin": !1,
          "codex/event/mcp_tool_call_end": !1,
          "codex/event/exec_command_begin": !1,
          "codex/event/exec_command_end": !1,
          "codex/event/exec_command_output_delta": !1,
          "codex/event/exec_approval_request": !1,
          "codex/event/apply_patch_approval_request": !1,
          "codex/event/background_event": !1,
          "codex/event/turn_diff": !1,
          "codex/event/get_history_entry_response": !1,
          "codex/event/agent_reasoning_delta": !1,
          "codex/event/agent_reasoning_section_break": !1,
          "codex/event/agent_message_delta": !1,
          "codex/event/stream_error": !1,
          "codex/event/error": !1,
          "codex/event/turn_aborted": !1,
          "codex/event/plan_delta": !1,
          "codex/event/plan_update": !1,
          "codex/event/patch_apply_begin": !1,
          "codex/event/patch_apply_end": !1,
          "codex/event/item_started": !1,
          "codex/event/item_completed": !1,
          "codex/event/user_message": !1,
          "codex/event/agent_reasoning_raw_content": !1,
          "codex/event/agent_reasoning_raw_content_delta": !1,
          "codex/event/web_search_begin": !1,
          "codex/event/web_search_end": !1,
          "codex/event/mcp_list_tools_response": !1,
          "codex/event/list_skills_response": !1,
          "codex/event/list_remote_skills_response": !1,
          "codex/event/remote_skill_downloaded": !1,
          "codex/event/list_custom_prompts_response": !1,
          "codex/event/raw_response_item": !1,
          "codex/event/agent_message_content_delta": !1,
          "codex/event/reasoning_content_delta": !1,
          "codex/event/reasoning_raw_content_delta": !1,
          "codex/event/warning": !1,
          "codex/event/undo_started": !1,
          "codex/event/undo_completed": !1,
          "codex/event/shutdown_complete": !1,
          "codex/event/entered_review_mode": !1,
          "codex/event/exited_review_mode": !1,
          "codex/event/view_image_tool_call": !1,
          "codex/event/mcp_startup_update": !1,
          "codex/event/mcp_startup_complete": !1,
          "codex/event/remote_task_created": !1,
          "codex/event/thread_rolled_back": !1,
          "codex/event/thread_name_updated": !1,
          "codex/event/collab_agent_spawn_begin": !0,
          "codex/event/collab_agent_spawn_end": !0,
          "codex/event/collab_agent_interaction_begin": !0,
          "codex/event/collab_agent_interaction_end": !0,
          "codex/event/collab_resume_begin": !0,
          "codex/event/collab_resume_end": !0,
          "codex/event/collab_waiting_begin": !0,
          "codex/event/collab_waiting_end": !0,
          "codex/event/collab_close_begin": !0,
          "codex/event/collab_close_end": !0,
          "codex/event/elicitation_request": !1,
          "codex/event/dynamic_tool_call_request": !1,
          "codex/event/request_user_input": !1,
          "codex/event/terminal_interaction": !1,
          "codex/event/token_count": !1,
          "codex/event/deprecation_notice": !1,
          "fuzzyFileSearch/sessionUpdated": !0,
          "fuzzyFileSearch/sessionCompleted": !0,
          "thread/archived": !0,
          "thread/deleted": !0,
          "thread/closed": !1,
          "thread/reverted": !1,
          "thread/goal/cleared": !0,
          "thread/goal/updated": !0,
          "thread/unarchived": !0,
          "skills/changed": !0,
          "thread/realtime/started": !0,
          "thread/realtime/itemAdded": !0,
          "thread/realtime/item/started": !0,
          "thread/realtime/item/transcript/delta": !0,
          "thread/realtime/item/completed": !0,
          "thread/realtime/transcript/delta": !0,
          "thread/realtime/transcript/done": !0,
          "thread/realtime/outputAudio/delta": !0,
          "thread/realtime/sdp": !0,
          "thread/realtime/error": !0,
          "thread/realtime/closed": !0,
          "thread/status/changed": !0,
          "remoteControl/status/changed": !0,
          "rawResponse/completed": !1,
          guardianWarning: !0,
          warning: !1,
        }
      },
      4762(e, t, n) {
        "use strict"
        n.d(t, {
          A$: () => s,
          BA: () => c,
          H4: () => p,
          IG: () => u,
          p5: () => o,
          e$: () => l,
          SJ: () => w,
          QO: () => j,
          Ix: () => x,
          Vh: () => b,
          Xh: () => y,
          hq: () => T,
          AX: () => C,
          JM: () => m,
          wP: () => P,
          E_: () => A,
          Qj: () => S,
          bE: () => I,
          LS: () => E,
          YN: () => O,
          $o: () => d,
        })
        var a = n(40893)
        let i = "gpt-6.1-sol",
          r = a.YjP().trim().min(1)
        a.Ikc({
          codex_automation_model_slug: r.catch(i),
          codex_ephemeral_generation_model_slug: r.catch("gpt-6-luna"),
          codex_ephemeral_visualization_model_slug: r.catch("gpt-6.1-terra"),
          codex_ambient_suggestions_model_slug: r.catch("gpt-6-luna"),
          codex_ambient_suggestions_safety_model_slug: r.catch("gpt-6-luna"),
        })
        let o =
            "Automation schedule has no future runs. Check that its start time, interval, and BYHOUR/BYMINUTE/BYSECOND values can reach a future occurrence.",
          s = "Automation migration is in progress. Open Scheduled > Manage to review sync issues or retry sync.",
          l =
            "Automation does not exist in the app and could not be updated. It may have been deleted manually by the user.",
          c = 15e4,
          p = 1e4,
          u = `Automation instructions exceed the ${p.toLocaleString("en-US")}-token limit.`,
          d = a.Ikc({ id: a.YjP().min(1), identity: a.YjP().min(1) })
        function m(e, t) {
          return null == t ? e : JSON.stringify([t.id, t.identity, t.accountId, t.userId, e])
        }
        let f = a.k5n(["ACTIVE", "PAUSED", "DELETED"]),
          h = a.k5n(["cron", "heartbeat"]),
          g = a.k5n(["worktree", "local"]),
          v = a.gMt("type", [
            a.Ikc({ type: a.euz("project"), project_id: a.YjP() }),
            a.Ikc({ type: a.euz("projectless") }),
          ]),
          x = a.k5n(["failed_runs_only"]),
          b = a.k5n(["none", "minimal", "low", "medium", "high", "xhigh", "max", "ultra"]),
          y = a.Ikc({
            version: a.aig().optional(),
            id: a.YjP(),
            kind: h.optional(),
            name: a.YjP(),
            prompt: a.YjP(),
            status: f,
            rrule: a.YjP().optional(),
            execution_environment: g.optional(),
            local_environment_config_path: a.YjP().optional(),
            model: a.YjP().optional(),
            reasoning_effort: b.optional(),
            plugin_template_id: a.YjP().optional(),
            target: v.optional(),
            notification_policy: x.optional(),
            auto_archive: a.zMY().optional(),
            model_prompt_sha256: a.YjP().optional(),
            cwds: a.YOg(a.YjP()).optional(),
            target_thread_id: a.YjP().optional(),
            created_at: a.aig(),
            updated_at: a.aig(),
          }),
          w = "medium",
          k = "gpt-5.3-codex",
          _ = "medium"
        function P(e) {
          let t = 0
          for (let n of e) if (++t > c) return !0
          return !1
        }
        function I(e) {
          return new TextEncoder().encode(e).byteLength > 4 * p
        }
        function j(e) {
          if (I(e)) throw Error(u)
        }
        function A(e) {
          return "cron" === e.kind
        }
        function S(e) {
          return "heartbeat" === e.kind
        }
        function O(e) {
          let t = e?.trim()
          return t || "FREQ=HOURLY;INTERVAL=24;BYMINUTE=0"
        }
        function E(e) {
          return "worktree" === e || "local" === e ? e : "worktree"
        }
        function T(e, t) {
          return null == t ? null : (e.find((e) => e.model === t) ?? null)
        }
        function z({ model: e, reasoningEffort: t }) {
          let n = e?.supportedReasoningEfforts ?? []
          return null != t && n.some((e) => e.reasoningEffort === t)
            ? t
            : (e?.defaultReasoningEffort ?? n[0]?.reasoningEffort ?? null)
        }
        function C({ automation: e, models: t, defaultModel: n }) {
          let a = T(t, e.model)
          if (null != a) return { model: a.model, reasoningEffort: z({ model: a, reasoningEffort: e.reasoningEffort }) }
          if (null == e.model) {
            let n = T(t, k)
            if (null != n)
              return { model: n.model, reasoningEffort: z({ model: n, reasoningEffort: e.reasoningEffort ?? _ }) }
          }
          let r =
            t.find((e) => e.model === n) ?? t.find((e) => e.isDefault) ?? t.find((e) => e.model === i) ?? t[0] ?? null
          return null != r
            ? { model: r.model, reasoningEffort: z({ model: r, reasoningEffort: null }) }
            : { model: e.model ?? k, reasoningEffort: e.reasoningEffort ?? _ }
        }
      },
      53907(e, t, n) {
        "use strict"
        var a = n(40893)
        let i = { maxSerializedBytes: 2048, maxKeys: 6, maxKeyLength: 64, maxStringValueLength: 256 },
          r = a.YjP().regex(/^[^\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]*$/u),
          o = a
            .YjP()
            .max(i.maxKeyLength)
            .regex(/^[A-Za-z][A-Za-z0-9_-]*(?: [A-Za-z0-9_-]+)*$/)
            .refine((e) => "__proto__" !== e && "constructor" !== e && "prototype" !== e),
          s = a.KCZ([r.max(i.maxStringValueLength), a.aig(), a.zMY(), a.chJ()]),
          l = a.g1P(o, s),
          c = r.max(128).refine((e) => e.trim().length > 0)
        n.d(
          t,
          {},
          {
            ME: function (e) {
              if (null != e && "object" == typeof e)
                try {
                  var t
                  let n = Object.getPrototypeOf(e)
                  if (n !== Object.prototype && null != n) return
                  let a = Object.getOwnPropertyDescriptors(e),
                    r = Reflect.ownKeys(a)
                  if (
                    r.length > i.maxKeys ||
                    r.some((e) => !o.safeParse(e).success) ||
                    Object.values(a).some((e) => !e.enumerable || !Object.hasOwn(e, "value"))
                  )
                    return
                  let s = l.safeParse(Object.fromEntries(Object.entries(a).map(([e, t]) => [e, t.value])))
                  if (
                    !s.success ||
                    !(
                      (t = JSON.stringify(s.data)).length <= i.maxSerializedBytes &&
                      new TextEncoder().encode(t).byteLength <= i.maxSerializedBytes
                    )
                  )
                    return
                  return s.data
                } catch {
                  return
                }
            },
            Qv: function (e) {
              let t = c.safeParse(e)
              return t.success ? t.data : void 0
            },
            W6: i,
          },
        )
      },
      33879(e, t, n) {
        "use strict"
        var a = n(46922),
          i = n(61330)
        let r = /\.html?$/i,
          o = new Set(["localhost", "127.0.0.1", "0.0.0.0", "[::1]", "::1"]),
          s = new Set(["mailto:", "sms:", "tel:"]),
          l = new Set(["file", "vscode-remote"])
        function c(e) {
          if (e.length > 32768) return !1
          try {
            let t = new URL(e),
              n = t.searchParams.get("access_request_reference")
            return (
              "onepassword:" === t.protocol &&
              "grant-brokered-access" === t.hostname &&
              "" === t.username &&
              "" === t.password &&
              "" === t.port &&
              "" === t.pathname &&
              "" === t.hash &&
              1 === t.searchParams.size &&
              null != n &&
              /^[A-Za-z0-9_-]+$/.test(n)
            )
          } catch {
            return !1
          }
        }
        function p(e) {
          return r.test(e)
        }
        function u(e) {
          let t = e.toLowerCase()
          return t.endsWith(".localhost") || o.has(t)
        }
        function d(e) {
          let t
          if (null != m(e)) return !0
          try {
            t = new URL(e)
          } catch {
            return !1
          }
          return (
            "file:" === t.protocol &&
            (function (e) {
              var t
              let n,
                a = e.hostname.toLowerCase()
              if (a.length > 0 && "localhost" !== a) return !1
              let r = ((t = e.pathname), (n = (0, i.AQ)(t).replace(/^\/{3,}/, "//")), (0, i.kq)(n))
              return !!(0, i.tI)(r) || !(0, i.zj)(r)
            })(t)
          )
        }
        function m(e) {
          let t
          try {
            t = new URL(e)
          } catch {
            return null
          }
          return ("http:" === t.protocol || "https:" === t.protocol) && u(t.hostname)
            ? Number(t.port || ("https:" === t.protocol ? 443 : 80))
            : null
        }
        function f({
          browserPaneEnabled: e,
          link: t,
          openLinkInTargetPreference: n = a.u,
          openLocalUrlInTargetPreference: i = a.u,
        }) {
          if (!e) return !1
          switch (t.type) {
            case "file":
              return null == t.target && null == t.location && p(t.path)
            case "url":
              if (d(t.url)) return "in-app-browser" === i
              return "in-app-browser" === n && h(t.url)
          }
        }
        function h(e) {
          try {
            let { protocol: t } = new URL(e)
            return "http:" === t || "https:" === t
          } catch {
            return !1
          }
        }
        n.d(
          t,
          {},
          {
            FA: function (e) {
              try {
                let { protocol: t } = new URL(e)
                return "https:" === t || ("http:" === t && d(e))
              } catch {
                return !1
              }
            },
            Oe: function ({
              browserPaneEnabled: e,
              openLinkInTargetPreference: t = a.u,
              openLocalUrlInTargetPreference: n = a.u,
              openTarget: i,
              url: r,
              useExternalBrowser: o,
            }) {
              return !0 === o || "external-browser" === i
                ? "external-browser"
                : f({
                      browserPaneEnabled: e,
                      link: { type: "url", url: r },
                      openLinkInTargetPreference: i ?? t,
                      openLocalUrlInTargetPreference: i ?? n,
                    })
                  ? "in-app-browser"
                  : "external-browser"
            },
            QP: p,
            Ru: u,
            hf: d,
            j8: function (e) {
              try {
                var t
                let n = new URL(e),
                  { protocol: a } = n
                return (
                  "file:" === a ||
                  "http:" === a ||
                  "https:" === a ||
                  c(e) ||
                  ((t = n),
                  "vscode:" === t.protocol || "vscode-insiders:" === t.protocol
                    ? 0 === t.username.length && 0 === t.password.length && l.has(t.host)
                    : s.has(t.protocol))
                )
              } catch {
                return !1
              }
            },
            ps: f,
            q$: h,
            s0: m,
            zw: c,
          },
        )
      },
      64890(e, t, n) {
        "use strict"
        var a = n(40893),
          i = n(53907)
        let r = a.YjP().max(240),
          o = { BATCH: "batch", QUICK: "quick" },
          s = {
            [o.BATCH]: { defaultSubmitMode: "saved", persistent: !0 },
            [o.QUICK]: { defaultSubmitMode: "direct", persistent: !1 },
          }
        function l(e, t) {
          let n = new Map(t.map((e) => [e.property, e]))
          return e.map((e) => {
            let t = n.get(e.property)
            return null == t ? e : { ...e, previousValue: t.previousValue, value: t.value }
          })
        }
        function c(e, t) {
          return `${e}\0${t}`
        }
        n.d(
          t,
          {
            CU: () => r,
            D3: () => 294,
            DJ: () => c,
            HG: () => l,
            K1: () => 16,
            ME: () => i.ME,
            QH: () => 26,
            Qv: () => i.Qv,
          },
          {
            RF: 208,
            RL: function (e) {
              return s[e ?? o.BATCH]
            },
            Rq: function (e) {
              return e.some((e) => {
                var t
                return (
                  e.designChange?.status === "queued" &&
                  ((t = e.designChange),
                  t.annotationControlChanges?.some((e) => e.value !== e.previousValue) === !0 ||
                    t.declarations.some((e) => e.value !== e.previousValue) ||
                    (null != t.text && t.text.value !== t.text.previousValue))
                )
              })
            },
            XK: { defaultLocale: "en-US", locale: "en-US", messages: {} },
            YF: function (e, t) {
              var n, a
              let i, r
              if (
                e.kind !== t.kind ||
                !(
                  e.documentId === t.documentId &&
                  e.pageUrl === t.pageUrl &&
                  e.title === t.title &&
                  e.elementPath === t.elementPath &&
                  e.frameUrl === t.frameUrl &&
                  e.framePath.length === t.framePath.length &&
                  e.framePath.every((e, n) => e === t.framePath[n]) &&
                  ((n = e.scrollContainers),
                  (a = t.scrollContainers),
                  (i = n ?? []),
                  (r = a ?? []),
                  i.length === r.length &&
                    i.every((e, t) => {
                      let n = r[t]
                      return (
                        null != n &&
                        e.selector === n.selector &&
                        e.scrollLeft === n.scrollLeft &&
                        e.scrollTop === n.scrollTop
                      )
                    })) &&
                  e.isFixed === t.isFixed &&
                  e.point.xPercent === t.point.xPercent &&
                  e.point.y === t.point.y &&
                  e.rect.x === t.rect.x &&
                  e.rect.y === t.rect.y &&
                  e.rect.width === t.rect.width &&
                  e.rect.height === t.rect.height &&
                  e.role === t.role &&
                  e.name === t.name &&
                  e.selector === t.selector &&
                  e.nearbyText === t.nearbyText
                )
              )
                return !1
              switch (e.kind) {
                case "virtual":
                  return "virtual" === t.kind && e.surfaceId === t.surfaceId && e.targetId === t.targetId
                case "element":
                  return "element" === t.kind && e.runtimeElementId === t.runtimeElementId
                case "region":
                  return !0
                case "text":
                  return (
                    "text" === t.kind &&
                    e.selectedText === t.selectedText &&
                    e.textLocator.kind === t.textLocator.kind &&
                    e.textLocator.direction === t.textLocator.direction &&
                    ("form-control" === e.textLocator.kind ||
                      ("dom" === t.textLocator.kind && e.textLocator.rangeText === t.textLocator.rangeText)) &&
                    e.textLocator.selector === t.textLocator.selector &&
                    e.textLocator.shadowHosts.length === t.textLocator.shadowHosts.length &&
                    e.textLocator.shadowHosts.every((e, n) => e === t.textLocator.shadowHosts[n]) &&
                    e.textLocator.startOffset === t.textLocator.startOffset &&
                    e.textLocator.endOffset === t.textLocator.endOffset &&
                    e.selectionRects.length === t.selectionRects.length &&
                    e.selectionRects.every((e, n) => {
                      let a = t.selectionRects[n]
                      return null != a && e.x === a.x && e.y === a.y && e.width === a.width && e.height === a.height
                    })
                  )
              }
            },
            aw: function (e) {
              return e.length > 0
            },
            bU: 120,
            c0: 10,
            cQ: o,
            fX: function (e, t) {
              return t
                ? e
                : e.map((e) => {
                    if (null == e.additionalAnchors) return e
                    let { additionalAnchors: t, ...n } = e
                    return n
                  })
            },
            i9: function (e, t) {
              switch (e.mode) {
                case "create":
                  return "create" === t.mode
                case "edit":
                  return "edit" === t.mode && e.commentId === t.commentId
                case "design":
                  return "design" === t.mode && e.groupId === t.groupId
              }
            },
            l6: function (e) {
              return /\r?\n/.test(e) ? 68 : 44
            },
            o3: 2e4,
            o6: 88,
            rC: 1e3,
            t4: function (e) {
              return e.length
            },
            t_: { width: 344, height: 344 },
            tu: 44,
            w0: function (e) {
              return {
                id: e.id,
                anchor: e.anchor,
                additionalAnchors: e.additionalAnchors?.length ? e.additionalAnchors : void 0,
                designChange: e.designChange,
                markerViewportPoint: e.markerViewportPoint,
                themeVariant: e.themeVariant,
                viewportSize: e.viewportSize,
              }
            },
          },
        )
      },
      24546(e, t, n) {
        "use strict"
        var a = n(99970),
          i = n(40893)
        let r = {
            browser: "browser@openai-bundled",
            hostedBrowser: "browser@openai-curated-remote",
            chrome: "chrome@openai-bundled",
            chromeDev: "chrome-dev@openai-bundled",
            chromeInternal: "chrome-internal@openai-bundled",
          },
          o = "tab-v1",
          s = ["mention", "browserId", "tabId", "title", "url"],
          l = ["mention", "source", "browserId", "tabId", "title", "url"],
          c = 12 * (a.Rk + a.kY + a.zG + a._X + 128),
          p = i.IeY((e) => null != h(e))
        function u(e) {
          return JSON.stringify(["browser-tab", e.source, e.browserId, e.tabId])
        }
        function d(e) {
          let t = h(e)
          if (null == t) throw TypeError("Invalid browser tab mention")
          let n = new URLSearchParams()
          ;(n.set("mention", o),
            t.pluginId === r.browser && "extension" === t.source && n.set("source", "extension"),
            n.set("browserId", t.browserId),
            n.set("tabId", t.tabId),
            n.set("title", t.snapshot.title),
            n.set("url", t.snapshot.url))
          let a = `plugin://${t.pluginId}?${n.toString()}`
          if (a.length > c) throw TypeError("Serialized browser tab mention exceeds its size limit")
          return a
        }
        function m(e) {
          let t = 0
          for (let n of e) if ((t += d(n).length) > 1048576) return !1
          return !0
        }
        function f(e) {
          if ("string" != typeof e || e.length > c) return null
          let t = (function (e) {
            let t = `plugin://${r.browser}?`
            if (e.startsWith(t)) {
              let n = new URLSearchParams(e.slice(t.length))
              return { pluginId: r.browser, source: "extension" === n.get("source") ? "extension" : "iab" }
            }
            return e.startsWith(`plugin://${r.chrome}?`)
              ? { pluginId: r.chrome, source: "extension" }
              : e.startsWith(`plugin://${r.hostedBrowser}?`)
                ? { pluginId: r.hostedBrowser, source: "extension" }
                : e.startsWith(`plugin://${r.chromeDev}?`)
                  ? { pluginId: r.chromeDev, source: "extension" }
                  : e.startsWith(`plugin://${r.chromeInternal}?`)
                    ? { pluginId: r.chromeInternal, source: "extension" }
                    : null
          })(e)
          if (null == t) return null
          let n = `plugin://${t.pluginId}?`
          try {
            let a = new URLSearchParams(e.slice(n.length)),
              i = [...a.keys()],
              c = t.pluginId === r.browser && "extension" === t.source ? l : s
            if (i.length !== c.length || i.some((e, t) => e !== c[t]) || a.get("mention") !== o) return null
            let p = h({
              browserId: a.get("browserId"),
              pluginId: t.pluginId,
              source: t.source,
              tabId: a.get("tabId"),
              snapshot: { title: a.get("title"), url: a.get("url") },
            })
            return null != p && d(p) === e ? p : null
          } catch {
            return null
          }
        }
        function h(e) {
          var t, n, i, o, s
          let l = v(e)
          if (null == l || !x(l, ["browserId", "pluginId", "source", "tabId", "snapshot"])) return null
          let c =
              "string" == typeof (t = l.browserId) && t.length <= a.Rk && t.trim().length > 0 && (0, a.yq)(t)
                ? t
                : null,
            p = "extension" === (n = l.source) || "iab" === n ? n : null,
            u =
              ((i = l.pluginId),
              (o = p),
              i === r.browser
                ? i
                : "extension" === o
                  ? (function (e) {
                      switch (e) {
                        case r.hostedBrowser:
                        case r.chrome:
                        case r.chromeDev:
                        case r.chromeInternal:
                          return e
                        default:
                          return null
                      }
                    })(i)
                  : null),
            d = "string" == typeof (s = l.tabId) && s.length <= a.kY && s.trim().length > 0 && (0, a.yq)(s) ? s : null,
            m = (function (e) {
              let t,
                n = v(e)
              if (null == n || !x(n, ["title", "url"])) return null
              let i = g(n.title, a.zG),
                r = g(n.url, a._X)
              if (null == i || null == r) return null
              let o = { title: i, url: r }
              return ((t = o.title.replace(/[\r\n]+/g, " ").trim()).length > 0
                ? t
                : o.url.replace(/[\r\n]+/g, " ").trim()
              ).length > 0
                ? o
                : null
            })(l.snapshot)
          return null == c || null == u || null == p || null == d || null == m
            ? null
            : { browserId: c, pluginId: u, source: p, tabId: d, snapshot: m }
        }
        function g(e, t) {
          return "string" == typeof e && e.length <= t && (0, a.yq)(e) ? e : null
        }
        function v(e) {
          return "object" != typeof e || null == e || Array.isArray(e) ? null : Object.fromEntries(Object.entries(e))
        }
        function x(e, t) {
          return Object.keys(e).every((e) => t.includes(e))
        }
        n.d(t, {
          DV: () => r,
          H3: () => a.H3,
          Lw: () => f,
          S0: () => m,
          T_: () => u,
          dz: () => p,
          qm: () => h,
          s3: () => a.s3,
        })
      },
      7049(e, t, n) {
        "use strict"
        n.d(t, {}, { X: "browser-use", z: "browser" })
      },
      83418(e, t, n) {
        "use strict"
        n.d(
          t,
          {},
          {
            N: {
              Dev: "dev",
              Agent: "agent",
              Nightly: "nightly",
              InternalAlpha: "internal-alpha",
              PublicBeta: "public-beta",
              Prod: "prod",
            },
          },
        )
      },
      84766(e, t, n) {
        "use strict"
        var a = n(7049),
          i = n(55482),
          r = n(40818)
        let o = "openai-bundled",
          s = a.z,
          l = "chrome-dev",
          c = "chrome-internal",
          p = "chrome",
          u = "computer-use",
          d = `${u}@${o}`,
          m = "unified-computer-use",
          f = "plan",
          h = "codex-app-tools",
          g = {
            codexAppTools: {
              excludeFromExecutor: !1,
              hidden: !0,
              installWhenMissing: !0,
              mcpServerName: "codex_app",
              name: h,
            },
            browser: { installWhenMissing: !0, name: s },
            unifiedComputerUse: {
              excludeFromExecutor: !1,
              hidden: !0,
              installWhenMissing: !0,
              mcpServerName: r.uC,
              name: m,
            },
            chromeDev: { name: l },
            chromeInternal: { name: c },
            chrome: { name: p },
            computerUse: { installWhenMissing: !0, installWhenMissingRequiresOptIn: !0, name: u },
            messages: { name: "messages" },
            recordAndReplay: { name: "record-and-replay" },
            computerHistory: { name: "computer-history" },
            latex: { name: "latex" },
            notebook: { installWhenMissing: !0, name: "notebook" },
            plan: { installWhenMissing: !0, name: f },
            dreamMemory: { excludeFromExecutor: !1, hidden: !0, installWhenMissing: !0, name: "codex-dream-memory" },
            deepResearch: { installWhenMissing: !0, name: "deep-research" },
            visualize: { installWhenMissing: !0, name: "visualize" },
          }
        function v(e) {
          return e === o
        }
        let x = new Map([
          [s, i.Q2.BROWSER_USE_BUNDLED_PLUGIN_AUTO_INSTALL_DISABLED],
          [u, i.Q2.COMPUTER_USE_BUNDLED_PLUGIN_AUTO_INSTALL_DISABLED],
        ])
        n.d(
          t,
          {},
          {
            $M: h,
            MY: o,
            PO: d,
            Qg: l,
            Y6: c,
            fo: v,
            g2: p,
            iR: g,
            kC: function (e, t, n) {
              var a
              if (!v(t)) return !1
              let i = ((a = e), Object.values(g).find(({ name: e }) => e === a))
              return "executor" === n ? (i?.excludeFromExecutor ?? i?.hidden ?? !1) : (i?.hidden ?? !1)
            },
            kJ: s,
            kT: function (e) {
              return x.get(e)
            },
            nS: f,
            t_: u,
            v3: function (e) {
              return o
            },
            y$: m,
          },
        )
      },
      10029(e, t, n) {
        "use strict"
        n.d(t, {}, { W: "https://chatgpt.com/codex" })
      },
      83237(e, t, n) {
        "use strict"
        let a =
            /^<codex_delegation>\s*<source_thread_id>([^<]*)<\/source_thread_id>\s*(?:<source_orbit_id>([^<]*)<\/source_orbit_id>\s*)?<input>([\s\S]*)<\/input>\s*<\/codex_delegation>$/,
          i =
            /^<codex_delegation_content version="1">\s*<source_orbit_id>([^<]*)<\/source_orbit_id>\s*<task>([^<]*)<\/task>\s*<\/codex_delegation_content>$/
        function r(e) {
          return e.replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&amp;", "&")
        }
        n.d(
          t,
          {},
          {
            Z: function (e) {
              let t = a.exec(e.trim())
              if (null == t) return null
              let n = r(t[1].trim()),
                o = t[2],
                s = t[3],
                l = i.exec(s.trim())
              if (null != l)
                return null != o ? null : { sourceThreadId: n, sourceOrbitId: r(l[1].trim()), input: r(l[2]) }
              if (s.includes("<")) return null
              let c = null == o ? void 0 : r(o.trim())
              return { sourceThreadId: n, ...(c ? { sourceOrbitId: c } : {}), input: r(s.trim()) }
            },
          },
        )
      },
      34971(e, t, n) {
        "use strict"
        let a = {
          DIFF: "diff",
          BROWSER: "browser",
          PDF: "pdf",
          ARTIFACT_ANNOTATION: "artifact_annotation",
          ARTIFACT_COMMENT: "artifact_comment",
        }
        n.d(
          t,
          {},
          {
            j: a,
            s: function (e) {
              let t = e.origin
              return t === a.DIFF ||
                t === a.BROWSER ||
                t === a.PDF ||
                t === a.ARTIFACT_ANNOTATION ||
                t === a.ARTIFACT_COMMENT
                ? t
                : null
            },
          },
        )
      },
      46922(e, t, n) {
        "use strict"
        n.d(t, {}, { C: ["enter", "cmdIfMultiline", "cmdAlways"], u: "in-app-browser" })
      },
      5844(e, t, n) {
        "use strict"
        n.d(
          t,
          {},
          {
            u: function () {
              let e = () => {},
                t = () => {}
              return {
                promise: new Promise((n, a) => {
                  ;((e = n), (t = a))
                }),
                resolve: e,
                reject: t,
              }
            },
          },
        )
      },
      12439(e, t, n) {
        "use strict"
        function a(e) {
          if (e.reason instanceof Error) return e.reason
          let t = Error("The operation was aborted")
          return ((t.name = "AbortError"), t)
        }
        n.d(
          t,
          {},
          {
            _: function (e, t) {
              return t.aborted
                ? (e.catch(() => {}), Promise.reject(a(t)))
                : new Promise((n, i) => {
                    let r = () => {
                      i(a(t))
                    }
                    ;(t.addEventListener("abort", r, { once: !0 }),
                      e.then(n, i).finally(() => {
                        t.removeEventListener("abort", r)
                      }))
                  })
            },
          },
        )
      },
      8302(e, t, n) {
        "use strict"
        var a = n(40893),
          i = n(71415)
        ;[...new Set(["automation_update", "create_thread", "send_message_to_thread", "fork_thread", "handoff_thread"])]
        let r = "plugins.codex-app-tools@openai-bundled.mcp_servers.codex_app.enabled_tools",
          o = "mcp_servers.codex_app.enabled_tools",
          s = a.Ikc({
            contentItems: a.YOg(
              a.gMt("type", [
                a.Ikc({ text: a.YjP(), type: a.euz("inputText") }),
                a.Ikc({ imageUrl: a.YjP(), type: a.euz("inputImage") }),
                a.Ikc({ audioUrl: a.YjP(), type: a.euz("inputAudio") }),
              ]),
            ),
            success: a.zMY(),
          })
        n.d(
          t,
          {},
          {
            $0: o,
            Hl: r,
            Hr: function (e) {
              return (0, i.JF)(e, "pluginMcpConfigOverrides") ? r : o
            },
            K2: s,
            qD: ["codex_app", "plugin_management"],
          },
        )
      },
      51944(e, t, n) {
        "use strict"
        function a(e, t) {
          let n = e.stdout.getReader(),
            a = new Response(e.stderr).text(),
            i = !1
          return (
            a.catch(() => {}),
            new ReadableStream({
              async pull(r) {
                try {
                  let { done: i, value: o } = await n.read()
                  if (!i) return void r.enqueue(o)
                  let [s, l] = await Promise.all([e.wait(), a])
                  if (0 !== s.code) throw Error(0 === l.trim().length ? t : `${t}: ${l.trim()}`)
                  r.close()
                } catch (t) {
                  if (i) return
                  ;(e.kill(), r.error(t))
                }
              },
              async cancel() {
                ;((i = !0), e.kill(), await n.cancel())
              },
            })
          )
        }
        function i(e) {
          return new ReadableStream({
            start(t) {
              ;(t.enqueue(e), t.close())
            },
          })
        }
        async function r(e) {
          let t = new TextDecoder("utf-8", { ignoreBOM: !0 }),
            n = ""
          for await (let a of e) n += t.decode(a, { stream: !0 })
          return n + t.decode()
        }
        n.d(
          t,
          {},
          {
            SD: async function (e) {
              let [t, n, a] = await Promise.all([e.wait(), r(e.stdout), r(e.stderr)])
              return { ...t, stdout: n, stderr: a }
            },
            bv: async function (e) {
              return new Uint8Array(await new Response(e).arrayBuffer())
            },
            dp: a,
            i: async function (e, t, n) {
              if (!Number.isSafeInteger(n) || n < 0) throw Error("File read limit must be a nonnegative integer")
              return a(
                await e.spawn({
                  args: [
                    "powershell.exe",
                    "-NoLogo",
                    "-NoProfile",
                    "-NonInteractive",
                    "-Command",
                    `$ErrorActionPreference = 'Stop';
$file = [System.IO.File]::OpenRead($env:CODEX_FILE_READ_PATH);
try {
  $output = [Console]::OpenStandardOutput();
  $buffer = New-Object byte[] 65536;
  $remaining = [long]$env:CODEX_FILE_READ_LIMIT;
  while ($remaining -gt 0) {
    $count = $file.Read($buffer, 0, [Math]::Min($buffer.Length, $remaining));
    if ($count -eq 0) { break; }
    $output.Write($buffer, 0, $count);
    $remaining -= $count;
  }
} finally { $file.Dispose(); }`,
                  ],
                  cwd: (await e.platformPath()).dirname(t),
                  env: { CODEX_FILE_READ_PATH: t, CODEX_FILE_READ_LIMIT: String(n) },
                  outputBytesCap: n,
                }),
                "Failed to read remote file",
              )
            },
            iw: i,
            jk: function (e) {
              return e instanceof ReadableStream
                ? e
                : e instanceof Blob
                  ? e.stream()
                  : i("string" == typeof e ? new TextEncoder().encode(e) : e)
            },
            rG: function () {
              let e,
                t = !1
              return {
                stream: new ReadableStream({
                  start(t) {
                    e = t
                  },
                  cancel() {
                    t = !0
                  },
                }),
                close: () => {
                  t || ((t = !0), e.close())
                },
                enqueue: (n) => {
                  t || e.enqueue(n)
                },
                error: (n) => {
                  t || ((t = !0), e.error(n))
                },
              }
            },
          },
        )
      },
      16109(e, t, n) {
        "use strict"
        n(10189)
        var a = n(40893)
        n(71415)
        var i = n(84698)
        let r = "features.",
          o = "default_mode_request_user_input",
          s = a.Ikc({ min_app_server_version: a.YjP().refine(i.D), config: a.g1P(a.YjP(), a.Pq9()) }),
          l = s.extend({
            config_rules: a
              .YOg(s.nullable().catch(null))
              .catch([])
              .transform((e) => e.filter((e) => null != e))
              .optional(),
          })
        n.d(
          t,
          {},
          {
            Bi: function (e) {
              return e.startsWith(r) ? e : `${r}${e}`
            },
            Q2: l,
            QL: function (e, t) {
              return t || e?.[o] !== !0 ? e : { ...e, [o]: !1 }
            },
            R1: "workspace_dependencies",
          },
        )
      },
      87612(e, t, n) {
        "use strict"
        let a = new Set([
            "7z",
            "Z",
            "apk",
            "bz2",
            "docm",
            "docx",
            "epub",
            "gz",
            "jar",
            "odp",
            "ods",
            "odt",
            "potm",
            "potx",
            "ppsm",
            "ppsx",
            "pptm",
            "pptx",
            "rar",
            "tar",
            "tar.gz",
            "xlsm",
            "xlsx",
            "xpi",
            "xz",
            "zip",
            "zst",
          ]),
          i = new Set([
            "application/eps",
            "application/postscript",
            "application/rtf",
            "application/x-ms-regedit",
            "application/xml",
          ]),
          r = new TextDecoder("utf-8"),
          o = null
        async function s(e) {
          var t, s
          let l
          if (null == e || 0 === e.byteLength) return null
          let c =
            ((t = e),
            (l = r.decode(t.subarray(0, 512)).trimStart().toLowerCase()).startsWith("<svg") ||
            (l.startsWith("<?xml") && l.includes("<svg"))
              ? "image/svg+xml"
              : null)
          if (null != c) return { kind: "image", mimeType: c }
          let p = await (async function (e) {
            try {
              let { fileTypeFromBuffer: t } = await (o =
                o ??
                (async function () {
                  return {
                    fileTypeFromBuffer: (await Promise.all([n.e(337), n.e(718)]).then(n.bind(n, 19837)))
                      .fileTypeFromBuffer,
                  }
                })())
              return await t(e)
            } catch {
              return
            }
          })(e)
          return null == p
            ? null
            : "application/pdf" === (s = p).mime
              ? { kind: "pdf", mimeType: s.mime }
              : s.mime.startsWith("image/")
                ? { kind: "image", mimeType: s.mime }
                : s.mime.startsWith("audio/")
                  ? { kind: "audio", mimeType: s.mime }
                  : s.mime.startsWith("video/")
                    ? { kind: "video", mimeType: s.mime }
                    : s.mime.startsWith("text/") || i.has(s.mime)
                      ? { kind: "text", mimeType: s.mime }
                      : a.has(s.ext)
                        ? { kind: "archive", mimeType: s.mime }
                        : { kind: "binary", mimeType: s.mime }
        }
        n.d(
          t,
          {},
          {
            PC: async function (e) {
              if (null == e) return null
              let t = await s(e)
              return null != t
                ? t.kind
                : !(function (e) {
                      for (let t = 0; t < e.length; t += 1) {
                        let n = e[t]
                        if (n < 32 && (n < 7 || n > 14)) return !1
                      }
                      return !0
                    })(e)
                  ? "binary"
                  : "text"
            },
            VJ: 4096,
            VM: async function (e) {
              return (await s(e))?.mimeType ?? null
            },
          },
        )
      },
      61330(e, t, n) {
        "use strict"
        let a = /^[A-Za-z]:[\\/]/,
          i = /^\/[A-Za-z]:[\\/]/,
          r = /^\\\\[^\\]+\\[^\\]+/,
          o = /^\/\/[^/]+\/[^/]+/
        function s(e) {
          return e.replace(/\\/g, "/")
        }
        function l(e) {
          return e.startsWith("\\\\?\\") || e.startsWith("\\\\.\\") ? e.slice(4).replace(/^UNC\\/i, "\\\\") : e
        }
        function c(e) {
          let t = s(/^\\\\\?\\(?:UNC\\|[a-zA-Z]:[\\/])/i.test(e) ? l(e) : e).toLowerCase(),
            n = t.match(/^\/\/(?:wsl\$|wsl\.localhost)\/[^/]+(?:\/(.*))?$/)
          if (n) {
            let e = n[1] ?? ""
            return e.length > 0 ? `/${e}` : "/"
          }
          let a = t.match(/^\/?([a-z]):(?:\/(.*))?$/)
          if (a) {
            let [, e, t] = a
            return null != t && t.length > 0 ? `/mnt/${e}/${t}` : `/mnt/${e}`
          }
          return t
        }
        function p(e) {
          return a.test(e)
        }
        function u(e) {
          return r.test(e) || o.test(e)
        }
        function d(e) {
          return (e.startsWith("/") && !e.startsWith("//")) || p(e) || u(e)
        }
        function m(e) {
          return p(e) && !e.startsWith("/") ? `/${e}` : e
        }
        function f(e) {
          return i.test(e) ? e.slice(1) : e
        }
        function h(e) {
          let t = e.match(/^\\\\\?\\UNC\\(.*)$/i)
          if (null != t) return `\\\\${t[1]}`
          let n = e.match(/^\\\\\?\\([a-zA-Z]:[\\/].*)$/)
          return null != n ? n[1] : e
        }
        function g(e) {
          let t = s(h(e)),
            n = /^\/[a-z]:\//i.test(t) ? t.slice(1) : t,
            a = t.match(/^\/\/(?:wsl\$|wsl\.localhost)\/([^/]+)(?:\/(.*))?$/i),
            i = t
          if (null != a) {
            let e = `/${a[2] ?? ""}`
            i = /^\/mnt\/[a-z](?:\/|$)/i.test(e) ? `win32:${c(e)}` : `wsl:${a[1].toLowerCase()}:${e}`
          } else (p(n) || u(n)) && (i = `win32:${c(n)}`)
          return "/" === i ? i : i.replace(/\/+$/, "")
        }
        function v(e) {
          return e.startsWith("win32:")
            ? { comparablePath: e.slice(6), explicit: !0 }
            : /^\/mnt\/[a-z](?:\/|$)/i.test(e)
              ? { comparablePath: c(e), explicit: !1 }
              : null
        }
        function x(e) {
          return s(h(e))
        }
        n.d(
          t,
          {},
          {
            AQ: s,
            Fd: x,
            H7: m,
            JH: c,
            K8: function (e) {
              return !/^[\\/]{2}/.test(e)
            },
            R0: function (e) {
              return p(e) || u(e) ? g(e) : e.replace(/\/+$/u, "") || e
            },
            XH: g,
            cx: d,
            du: l,
            eI: function (e) {
              return x(e).toLowerCase()
            },
            kq: f,
            oB: function (e, t, n) {
              let a,
                i,
                r =
                  ((a = x(e)),
                  d((i = x(t))) || "" === a
                    ? m(i)
                    : m(
                        (function (e, t) {
                          if (!e) return t
                          if (!t) return e
                          let n = e.replace(/\/+$/, ""),
                            a = t.replace(/^\/+/, "")
                          return `${n}/${a}`
                        })(a, i),
                      ))
              return n ? f(r) : r
            },
            r6: h,
            tI: p,
            y7: function (e, t) {
              let n = g(e),
                a = g(t)
              if (n === a) return !0
              let i = v(n),
                r = v(a)
              return null != i && null != r && (i.explicit || r.explicit) && i.comparablePath === r.comparablePath
            },
            zj: u,
          },
        )
      },
      90242(e, t, n) {
        "use strict"
        function a(e) {
          if (null == e) return null
          try {
            return new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 }).decode(e)
          } catch {
            return null
          }
        }
        function i(e) {
          return e >= "0" && e <= "7"
        }
        n.d(
          t,
          {},
          {
            h: a,
            t: function (e, t) {
              if ('"' !== e[t]) return null
              let n = t + 1,
                r = "",
                o = ""
              for (; n < e.length;) {
                let t = e[n]
                if (null == t) break
                if ('"' === t) return { nextIndex: n + 1, path: r, pathForUnquotedDiffHeader: o }
                if ("\\" !== t) {
                  ;((r += t), (o += t), (n += 1))
                  continue
                }
                let s = (function (e, t) {
                  let n = e[t]
                  if (null == n) return null
                  if ("\\" === n || '"' === n) return { nextIndex: t + 1, path: n, pathForUnquotedDiffHeader: n }
                  if ("a" === n) return { nextIndex: t + 1, path: "\x07", pathForUnquotedDiffHeader: "\\a" }
                  if ("b" === n) return { nextIndex: t + 1, path: "\b", pathForUnquotedDiffHeader: "\\b" }
                  if ("f" === n) return { nextIndex: t + 1, path: "\f", pathForUnquotedDiffHeader: "\\f" }
                  if ("n" === n) return { nextIndex: t + 1, path: "\n", pathForUnquotedDiffHeader: "\\n" }
                  if ("r" === n) return { nextIndex: t + 1, path: "\r", pathForUnquotedDiffHeader: "\\r" }
                  if ("t" === n) return { nextIndex: t + 1, path: "	", pathForUnquotedDiffHeader: "\\t" }
                  if ("v" === n) return { nextIndex: t + 1, path: "\v", pathForUnquotedDiffHeader: "\\v" }
                  if (!i(n)) return { nextIndex: t + 1, path: n, pathForUnquotedDiffHeader: n }
                  let r = [],
                    o = t
                  for (;;) {
                    let t = e.slice(o, o + 3)
                    if (
                      !(function (e) {
                        let t = e[0],
                          n = e[1],
                          a = e[2]
                        return 3 === e.length && null != t && null != n && null != a && i(t) && i(n) && i(a)
                      })(t)
                    )
                      return null
                    if ((r.push(Number.parseInt(t, 8)), "\\" !== e[(o += 3)] || !i(e[o + 1] ?? ""))) break
                    o += 1
                  }
                  let s = a(Uint8Array.from(r))
                  return null == s ? null : { nextIndex: o, path: s, pathForUnquotedDiffHeader: e.slice(t - 1, o) }
                })(e, n + 1)
                if (null == s) break
                ;((r += s.path), (o += s.pathForUnquotedDiffHeader), (n = s.nextIndex))
              }
              return null
            },
          },
        )
      },
      55482(e, t, n) {
        "use strict"
        let a = "always",
          i = {
            STATSIG_STABLE_ID: "statsig-stable-id",
            NUX_2025_09_15: "viewed2025-09-15-nux",
            NUX_2025_09_15_FULL_CHATGPT_AUTH_VIEWED: "viewed2025-09-15-full-chatgpt-auth-nux",
            NUX_2025_09_15_APIKEY_AUTH_VIEWED: "viewed2025-09-15-apikey-auth-nux",
            WINDOWS_WSL_REMINDER_DISMISSED_AT: "windows-wsl-reminder-dismissed-date",
            SHOW_COPILOT_LOGIN_FIRST: "show-copilot-login-first",
            USE_COPILOT_AUTH_IF_AVAILABLE: "use-copilot-auth-if-available",
            COPILOT_DEFAULT_MODEL: "copilot-default-model",
            NOTIFICATIONS_TURN_MODE: "notifications-turn-mode",
            NOTIFICATIONS_PERMISSIONS_ENABLED: "notifications-permissions-enabled",
            NOTIFICATIONS_QUESTIONS_ENABLED: "notifications-questions-enabled",
            NOTIFICATIONS_DOT_ENABLED: "notifications-dot-enabled",
            AMBIENT_SUGGESTIONS_ENABLED: "ambient-suggestions-enabled",
            CODEX_MICRO_AGENT_SOURCE: "codex-micro-agent-source",
            CODEX_MICRO_LAYOUT: "codex-micro-layout",
            PAUSED_LANGUAGE_SERVER_PROJECTS: "paused-language-server-projects",
            MAC_MENU_BAR_ENABLED: "mac-menu-bar-enabled",
            DESKTOP_FIRST_SEEN_AT_MS: "desktop-first-seen-at-ms",
            GIT_BRANCH_PREFIX: "git-branch-prefix",
            GIT_ALWAYS_FORCE_PUSH: "git-always-force-push",
            GIT_CREATE_PULL_REQUEST_AS_DRAFT: "git-create-pull-request-as-draft",
            GIT_PULL_REQUEST_MERGE_METHOD: "git-pull-request-merge-method",
            GIT_PR_POLL_INTERVAL_SECONDS: "git-pr-poll-interval-seconds",
            GIT_REVIEW_MODE: "git-review-mode",
            GIT_SHOW_SIDEBAR_PR_ICONS: "git-show-sidebar-pr-icons",
            GIT_WORKTREE_ROOT: "git-worktree-root",
            GIT_COMMIT_INSTRUCTIONS: "git-commit-instructions",
            GIT_PR_INSTRUCTIONS: "git-pr-instructions",
            WORKTREE_UPSTREAM_REFRESH_MODE: "worktree-upstream-refresh-mode",
            WORKTREE_DEFAULT_CREATION_PREFERENCE: "worktree-creation-preference",
            WORKTREE_CONFIRM_BEFORE_DELETE: "worktree-confirm-before-delete",
            WORKTREE_AUTO_CLEANUP_ENABLED: "worktree-auto-cleanup-enabled",
            WORKTREE_AUTO_CLEANUP_UNPACKAGED_OVERRIDE_ENABLED: "worktree-auto-cleanup-unpackaged-override-enabled",
            GLOBAL_DICTATION_FORCE_LOCK_DEBUG_ENABLED: "global-dictation-force-lock-debug-enabled",
            DEBUG_CHROME_PAGES_ENABLED: "debug-chrome-pages-enabled",
            WORKTREE_KEEP_COUNT: "worktree-keep-count",
            REMOTE_CONNECTION_MAX_RETRY_ATTEMPTS: "remote-connection-max-retry-attempts",
            CODEX_MANAGED_REMOTE_CONNECTIONS: "codex-managed-remote-connections",
            CODEX_MOBILE_SETUP_COMPLETED: "codex-mobile-has-connected-device",
            REMOTE_CONNECTION_ANALYTICS_ID_BY_HOST_ID: "remote-connection-analytics-id-by-host-id",
            PERSISTED_ATOM_STATE: "persisted-atom-state",
            PRIMARY_RUNTIME_UPDATE_JITTER_MS: "primary-runtime-update-jitter-ms",
            SITE_CREATOR_BUNDLED_PLUGIN_AUTO_INSTALL_DISABLED: "site-creator-bundled-plugin-auto-install-disabled",
            BROWSER_USE_BUNDLED_PLUGIN_AUTO_INSTALL_DISABLED: "browser-use-bundled-plugin-auto-install-disabled",
            COMPUTER_USE_BUNDLED_PLUGIN_AUTO_INSTALL_DISABLED: "computer-use-bundled-plugin-auto-install-disabled",
            BROWSER_ANNOTATION_SCREENSHOTS_MODE: "browser-annotation-screenshots-mode",
            BROWSER_DOWNLOAD_DIRECTORY: "browser-download-directory",
            BROWSER_DOWNLOAD_PROMPT_ENABLED: "browser-download-prompt-enabled",
            DOCK_ICON_PREFERENCE: "dock-icon-preference",
            REDUCED_MOTION_PREFERENCE: "reduced-motion-preference",
            OPEN_IN_TARGET_PREFERENCES: "open-in-target-preferences",
            WORKTREE_REPOSITORY_PREFERENCES: "worktree-repository-preferences",
            DESKTOP_APP_BETA_PREFERENCES_BY_ACCOUNT_ID: "desktop-app-beta-preferences-by-account-id",
            ACTIVE_WORKSPACE_ROOTS: "active-workspace-roots",
            WORKSPACE_ROOT_OPTIONS: "electron-saved-workspace-roots",
            WORKSPACE_ROOT_LABELS: "electron-workspace-root-labels",
            LOCAL_PROJECTS: "local-projects",
            APP_SERVER_PROJECT_ID_BY_LEGACY_PROJECT_ID_BY_HOST: "app-server-project-id-by-legacy-project-id-by-host",
            APP_SERVER_PROJECTS_MIGRATION_BY_HOST: "app-server-projects-migration-by-host",
            APP_SERVER_PENDING_PROJECT_DELETIONS_BY_HOST: "app-server-pending-project-deletions-by-host",
            SELECTED_PROJECT: "selected-project",
            PROJECT_WRITABLE_ROOTS: "project-writable-roots",
            PROJECT_APPEARANCES: "project-appearances",
            PROJECT_FILES: "project-files",
            PINNED_THREAD_IDS: "pinned-thread-ids",
            APP_SERVER_MIGRATED_PINNED_THREAD_IDS_BY_HOST: "app-server-migrated-pinned-thread-ids-by-host",
            PINNED_PROJECT_IDS: "pinned-project-ids",
            SIDEBAR_PROJECT_THREAD_ORDERS: "sidebar-project-thread-orders",
            THREAD_PROJECT_ASSIGNMENTS: "thread-project-assignments",
            THREAD_PROJECT_MEMBERSHIP_HOST_IDS: "thread-project-membership-host-ids",
            THREAD_WRITABLE_ROOTS: "thread-writable-roots",
            THREAD_WORKSPACE_ROOT_HINTS: "thread-workspace-root-hints",
            THREAD_PROJECTLESS_OUTPUT_DIRECTORIES: "thread-projectless-output-directories",
            PROJECTLESS_THREAD_IDS: "projectless-thread-ids",
            SELECTED_REMOTE_HOST_ID: "selected-remote-host-id",
            REMOTE_PROJECTS: "remote-projects",
            ACTIVE_REMOTE_PROJECT_ID: "active-remote-project-id",
            PROJECT_ORDER: "project-order",
            CONNECTION_GROUP_ORDER: "connection-group-order",
            REMOTE_CWDS_BY_HOST_AND_WORKSPACE: "remote-cwds-by-host-and-workspace",
            HOST_ID_REMOTE_CONTROL_ALLOWED: "host-id-remote-control-allowed",
            ADDED_REMOTE_CONTROL_ENV_IDS: "added-remote-control-env-ids",
            REMOTE_PROJECT_CONNECTION_BACKFILL_COMPLETED: "remote-project-connection-backfill-completed",
            REMOTE_CONNECTION_AUTO_CONNECT_BY_HOST_ID: "remote-connection-auto-connect-by-host-id",
            QUEUED_FOLLOW_UPS: "queued-follow-ups",
          },
          r = {
            [i.GIT_ALWAYS_FORCE_PUSH]: !1,
            [i.GIT_CREATE_PULL_REQUEST_AS_DRAFT]: !0,
            [i.GIT_PULL_REQUEST_MERGE_METHOD]: "merge",
            [i.GIT_REVIEW_MODE]: "full",
            [i.GIT_BRANCH_PREFIX]: "codex/",
            [i.GIT_WORKTREE_ROOT]: "",
            [i.GIT_COMMIT_INSTRUCTIONS]: "",
            [i.GIT_PR_INSTRUCTIONS]: "",
            [i.SIDEBAR_PROJECT_THREAD_ORDERS]: {},
            [i.PROJECT_APPEARANCES]: {},
            [i.ADDED_REMOTE_CONTROL_ENV_IDS]: [],
            [i.CODEX_MOBILE_SETUP_COMPLETED]: !1,
            [i.AMBIENT_SUGGESTIONS_ENABLED]: !0,
            [i.DEBUG_CHROME_PAGES_ENABLED]: !1,
            [i.WORKTREE_AUTO_CLEANUP_ENABLED]: !0,
            [i.WORKTREE_CONFIRM_BEFORE_DELETE]: !0,
            [i.WORKTREE_KEEP_COUNT]: 15,
            [i.BROWSER_ANNOTATION_SCREENSHOTS_MODE]: a,
            [i.BROWSER_DOWNLOAD_DIRECTORY]: null,
            [i.BROWSER_DOWNLOAD_PROMPT_ENABLED]: !1,
            [i.DOCK_ICON_PREFERENCE]: "app-default",
            [i.REDUCED_MOTION_PREFERENCE]: "system",
          }
        n.d(
          t,
          {},
          {
            PN: a,
            Q2: i,
            sT: "never",
            yD: function (e) {
              return r[e]
            },
          },
        )
      },
      85172(e, t, n) {
        "use strict"
        let a = "durable",
          i = "environment-git:hosted:",
          r = "remote-control"
        function o(e) {
          return e?.kind === r
        }
        function s(e) {
          return e?.kind === "ssh"
        }
        function l(e) {
          return e?.kind === "wsl"
        }
        n.d(
          t,
          {},
          {
            $2: function (e) {
              return "wsl" === e.source
            },
            $S: l,
            EY: function (e) {
              return `remote-wsl:${encodeURIComponent(e)}`
            },
            Er: function (e) {
              return `remote-ssh-discovered:${encodeURIComponent(e)}`
            },
            Fh: function (e) {
              return `${i}${encodeURIComponent(e)}`
            },
            PA: "wsl",
            SS: function (e) {
              return e.startsWith(i) ? decodeURIComponent(e.slice(i.length)) : null
            },
            Ti: s,
            V5: r,
            Xh: function ({ alias: e, hostname: t, sshPort: n, identity: a }) {
              let i = e?.trim()
              if (i) return [i]
              let r = []
              return (a && r.push("-i", a), null != n && r.push("-p", String(n)), r.push(t), r)
            },
            ZJ: function (e) {
              return e === a
            },
            iw: a,
            mq: function (e) {
              return "remote-control" === e.source
            },
            rs: function (e) {
              return s(e) || l(e) || o(e)
            },
            sf: o,
            sh: !1,
            tP: function (e) {
              return "codex-managed" === e.source || "discovered" === e.source
            },
            xO: function (e) {
              return `remote-control:${encodeURIComponent(e)}`
            },
          },
        )
      },
      81189(e, t, n) {
        "use strict"
        n.d(
          t,
          {},
          {
            EN: 1e3,
            sk: function (e) {
              return /[\\/]$/.test(e.path)
            },
            xw: function (e) {
              return null == e.startLine && /\.(csv|docx|ipynb|pdf|pptx|tex|tsv|xlsm|xlsx)$/i.test(e.fsPath || e.path)
            },
          },
        )
      },
      8769(e, t, n) {
        "use strict"
        let a, i
        n.d(t, {
          Oi9: () => M,
          GP5: () => F,
          ONi: () => eu.ON,
          vKV: () => ed,
          SsO: () => em,
          qck: () => ey,
          H0c: () => aE.H0,
          n1Q: () => n_,
          jp6: () => nP,
          A$E: () => H.A$,
          BAA: () => H.BA,
          H43: () => H.H4,
          IG7: () => H.IG,
          p5P: () => H.p5,
          e$f: () => H.e$,
          pFD: () => eL,
          IYj: () => eU,
          VuE: () => eB,
          Ufb: () => eF,
          Zkw: () => eq,
          Zam: () => eJ,
          eMN: () => eW,
          wb1: () => eZ,
          bZi: () => eK,
          ofg: () => B,
          ozQ: () => ei,
          HFH: () => el,
          Y9T: () => ev,
          cQD: () => ty.cQ,
          d33: () => nw,
          bUX: () => ty.bU,
          D3l: () => ty.D3,
          RFx: () => ty.RF,
          c06: () => ty.c0,
          kcU: () => to,
          EAE: () => ts,
          Wq_: () => ta,
          zqs: () => ti,
          v94: () => tY,
          aQz: () => tD,
          ThQ: () => tl,
          xPC: () => tp,
          mPM: () => tc,
          sRd: () => tm,
          DIy: () => tu,
          s3P: () => tf,
          DVx: () => tF.DV,
          aU6: () => tM,
          ADS: () => eN.AD,
          t_6: () => ty.t_,
          XRS: () => t$,
          pG2: () => tR,
          kJv: () => e1.kJ,
          Qgq: () => e1.Qg,
          Y6k: () => e1.Y6,
          g28: () => e1.g2,
          $MS: () => e1.$M,
          POp: () => e1.PO,
          t_C: () => e1.t_,
          nSh: () => e1.nS,
          iRL: () => e1.iR,
          y$e: () => e1.y$,
          x1u: () => e0,
          YR$: () => nm,
          vgw: () => Z,
          Ubp: () => t4,
          DI5: () => eN.DI,
          Jbi: () => rZ,
          NLx: () => aE.NL,
          CPn: () => sL,
          WaA: () => r.W,
          BAs: () => rz,
          esV: () => rC,
          $zB: () => oq,
          O8h: () => nk,
          wI6: () => t5,
          uC1: () => aE.uC,
          SJM: () => H.SJ,
          JCZ: () => eG,
          XKp: () => ty.XK,
          SKQ: () => eN.SK,
          Lg_: () => tO,
          FhT: () => ai,
          oeH: () => aa,
          fH5: () => i7,
          shR: () => n2.sh,
          crV: () => rF,
          sT7: () => nV.sT,
          Krz: () => rh,
          iwv: () => n2.iw,
          qDu: () => nc.qD,
          aiU: () => nG,
          vAN: () => nl,
          c2p: () => U,
          HRg: () => nu,
          VJf: () => nN.VJ,
          oyJ: () => nF,
          ENM: () => n7.EN,
          Nr6: () => sN,
          uLF: () => sY,
          oqt: () => sD,
          n4$: () => sW,
          ea9: () => sZ,
          $kD: () => m.$k,
          aeC: () => m.ae,
          Q2Y: () => nV.Q2,
          wCz: () => eu.wC,
          R2t: () => eN.R2,
          e$b: () => oJ,
          muO: () => eu.mu,
          zV$: () => aZ.z,
          Pex: () => oe,
          AKB: () => eN.AK,
          xlJ: () => sU,
          XUd: () => aZ.X,
          P7: () => re,
          fRB: () => ar,
          yQU: () => ao,
          l_T: () => as,
          eXE: () => al,
          iFb: () => rO,
          xiT: () => rb,
          s3R: () => tF.s3,
          rju: () => rj,
          G48: () => rI,
          mEF: () => rA,
          iiB: () => rw,
          $zi: () => r_,
          hjm: () => sM.hj,
          xis: () => rd,
          cSM: () => aw,
          DeS: () => af,
          MjT: () => eb,
          lap: () => aS.l,
          c9A: () => eN.c9,
          gVp: () => aE.gV,
          wLF: () => aE.wL,
          zNv: () => aE.zN,
          Fvh: () => aE.Fv,
          n9i: () => aE.n9,
          oR3: () => aE.oR,
          ytA: () => aE.yt,
          AtJ: () => ej,
          MY3: () => e1.MY,
          IY7: () => m.IY,
          MtY: () => t6,
          yu$: () => p,
          rpK: () => t9,
          m20: () => aO,
          K7L: () => rS,
          l02: () => eu.l0,
          yhu: () => nb,
          O3u: () => i4,
          V57: () => n2.V5,
          ZWF: () => eN.ZW,
          BIQ: () => rg,
          MMY: () => iq,
          Ym4: () => ra.Y,
          nCo: () => oZ,
          Hkr: () => oW,
          FtW: () => oB,
          faO: () => rE,
          h8j: () => o6,
          jft: () => nx,
          Wl7: () => so,
          FEK: () => sl,
          pZW: () => sp,
          i0d: () => sg,
          ToG: () => sc,
          RFt: () => sd,
          HlH: () => su,
          Wf1: () => sz,
          M2d: () => sR,
          aww: () => s$,
          CN7: () => sB,
          R1o: () => ny.R1,
          jQ: () => eN.jQ,
          WEo: () => eN.WE,
          orR: () => t8,
          ouF: () => n0,
          PAg: () => n2.PA,
          z3E: () => sq,
          aX$: () => nv,
          oQk: () => Y,
          bZ8: () => L,
          hij: () => r0,
          oKj: () => r6,
          QrD: () => r8,
          i9x: () => ty.i9,
          YFe: () => ty.YF,
          y7N: () => nL.y7,
          isz: () => rx,
          QOP: () => H.QO,
          Q7j: () => rP,
          Ixd: () => H.Ix,
          Vhs: () => H.Vh,
          XhY: () => H.Xh,
          CUP: () => ty.CU,
          Hyh: () => rs,
          rRd: () => e6,
          v3V: () => tn,
          tdP: () => tt,
          VU9: () => e5,
          _tc: () => r7,
          dzS: () => tF.dz,
          aMe: () => ro.aM,
          xcD: () => tU,
          nFm: () => m.nF,
          vUq: () => m.vU,
          dVE: () => nt,
          Er7: () => n2.Er,
          Fh0: () => n2.Fh,
          _RT: () => m._R,
          POg: () => aE.PO,
          $5i: () => $.$5,
          Ctf: () => m.Ct,
          G$6: () => m.G$,
          Sg6: () => ig,
          NqL: () => $.Nq,
          xOp: () => n2.xO,
          EYB: () => n2.EY,
          Xhq: () => n2.Xh,
          T9S: () => W,
          FAg: () => e2.FA,
          j8X: () => e2.j8,
          $km: () => o1,
          QoX: () => rr,
          AvD: () => aR,
          Lnj: () => aC,
          D5s: () => ro.D5,
          CqK: () => ro.Cq,
          jME: () => ro.jM,
          S8x: () => tT,
          Ab$: () => d,
          Yt9: () => ry,
          $Mt: () => on,
          Ft3: () => m.Ft,
          rT6: () => ep.r,
          aRT: () => oc,
          XIF: () => nj,
          mh4: () => nA,
          IGg: () => nS,
          k3V: () => nO,
          cB6: () =>
            function e(t) {
              let n = t.match(/^(?:\\\\|\/\/)\?[\\/]UNC[\\/](wsl\$|wsl\.localhost)[\\/](.*)$/i)
              if (n) return e(`\\\\${n[1]}\\${n[2]}`)
              let a = t.match(/^(?:\\\\|\/\/)\?[\\/]([a-zA-Z]):[\\/](.*)$/)
              if (a) {
                let e = a[1].toLowerCase(),
                  t = a[2].replace(/\\/g, "/")
                return `/mnt/${e}/${t}`
              }
              if (/^(\\\\|\/\/)(wsl\$|wsl\.localhost)/i.test(t)) {
                let e = t.replace(/^((\\\\|\/\/)(wsl\$|wsl\.localhost)[\\/]+)/i, "").split(/[\\/]/)
                e.shift()
                let n = e.join("/").replace(/\\/g, "/")
                return 0 === n.length ? "/" : n.startsWith("/") ? n : `/${n}`
              }
              if (t.startsWith("\\\\") || t.startsWith("//")) return s4(t)
              if (t.startsWith("/")) return t
              let i = t.match(/^([a-zA-Z]):[\\/](.*)$/)
              if (i) {
                let e = i[1].toLowerCase(),
                  t = i[2].replace(/\\/g, "/")
                return `/mnt/${e}/${t}`
              }
              return t.replace(/\\/g, "/")
            },
          EAz: () => s3,
          t4X: () => ty.t4,
          w0M: () => ty.w0,
          DHE: () => tN,
          bK8: () => eN.bK,
          JXB: () => er.JX,
          udX: () => no.u,
          knC: () => nB,
          ztd: () => nq,
          DIv: () => nZ,
          PUz: () => nW,
          TE6: () => nK,
          JT0: () => nJ,
          Luh: () => nH,
          DDP: () => er.DD,
          rGx: () => nd.rG,
          Np8: () => az,
          VNn: () => ib,
          gN: () => tx,
          RAB: () => sF,
          sg1: () => nr,
          haJ: () => n1.h,
          Q4s: () => oC,
          U6S: () => om,
          _qC: () => ns._,
          K20: () => nc.K2,
          OBg: () => nX,
          JzA: () => np,
          z81: () => rT,
          uvL: () => oz,
          _qz: () => rn,
          k_6: () => nz,
          OTv: () => sV,
          v6O: () => eE,
          Szl: () => ox,
          WGc: () => sA,
          PpM: () => sS,
          zsm: () => ex,
          pCC: () => sy,
          SKV: () => sb,
          Lrv: () => e_,
          Bnq: () => $.Bn,
          hqW: () => H.hq,
          AXl: () => H.AX,
          SeT: () => eH,
          i9k: () => ty.RL,
          BdV: () => tw,
          fXS: () => ty.fX,
          OeF: () => e2.Oe,
          Rod: () => tv,
          wmj: () => tK,
          qLJ: () => tL,
          DJQ: () => ty.DJ,
          PfK: () => tC,
          Dr0: () => a8,
          kTr: () => e1.kT,
          Brr: () => ot,
          Hrc: () => nc.Hr,
          jZe: () => eP,
          q3U: () => x,
          H_$: () => f,
          Oet: () => e3,
          JHM: () => nL.JH,
          TVZ: () => ni,
          n5J: () => ez,
          Vtf: () => nR,
          PCY: () => nN.PC,
          VMY: () => nN.VM,
          jkc: () => nd.jk,
          XHz: () => nL.XH,
          yDt: () => nV.yD,
          JM_: () => H.JM,
          Tzy: () => n8,
          SSJ: () => n2.SS,
          _NX: () => nM,
          vgM: () => aW.vg,
          s0l: () => e2.s0,
          LX1: () => sh,
          ycq: () => aN,
          FWz: () => aD,
          yvu: () => ak,
          yr_: () => tg,
          R0x: () => nL.R0,
          v3D: () => e1.v3,
          SRY: () => aT,
          $z3: () => rk,
          UH4: () => nf,
          R_c: () => aq,
          dwE: () => m.dw,
          VZO: () => aW.VZ,
          dpU: () => nd.dp,
          VGZ: () => a7,
          ePA: () => il,
          V7u: () => iv,
          mdc: () => ix,
          U6b: () => i8,
          Gf8: () => nh,
          OMH: () => si,
          A5V: () => eN.A5,
          NCC: () => eT,
          i7l: () => eN.i7,
          oYK: () => $.oY,
          nVh: () => rH,
          crQ: () => oL,
          Q6s: () => oU,
          MF$: () => o3,
          wAQ: () => tz,
          Ax_: () => sf.Ax,
          Mxp: () => sf.Mx,
          R8c: () => sv,
          w_u: () => oD,
          u3Y: () => s_,
          lkj: () => eR,
          ShB: () => sM.Sh,
          CVx: () => sM.CV,
          OqV: () => eC,
          o43: () => s2,
          Ugj: () => n5,
          ouN: () => nT,
          M$l: () => sG,
          awN: () => ty.aw,
          Rqq: () => ty.Rq,
          Z9d: () => sI,
          tKe: () => aW.tK,
          cxl: () => nL.cx,
          K82: () => nL.K8,
          yPQ: () => eg,
          JFB: () => eA.JF,
          yQ4: () => eh,
          xug: () => es,
          bzb: () => $.bz,
          wPy: () => H.wP,
          QPd: () => e2.QP,
          L$F: () => eN.L$,
          sQ3: () => ne,
          E_f: () => H.E_,
          ZJQ: () => n2.ZJ,
          Qj8: () => H.Qj,
          q$v: () => e2.q$,
          F5T: () => eu.F5,
          hfz: () => e2.hf,
          Ruh: () => e2.Ru,
          inc: () => m.in,
          Rg6: () => ax,
          SrG: () => at,
          kh9: () => m.TV,
          qOc: () => aE.qO,
          zwr: () => e2.zw,
          foP: () => e1.fo,
          WqY: () => $.Wq,
          PuL: () => aL,
          bvA: () => rq,
          FHf: () => m.FH,
          dlm: () => eI,
          mqi: () => n2.mq,
          sfQ: () => n2.sf,
          rsL: () => n2.rs,
          tPs: () => n2.tP,
          Tim: () => n2.Ti,
          $24: () => n2.$2,
          $S6: () => n2.$S,
          RWz: () => sf.RW,
          WLk: () => eo,
          DE9: () => ep.D,
          Czm: () => o2,
          cb0: () => se,
          DEu: () => o7,
          khL: () => sM.kh,
          tIC: () => nL.tI,
          NUu: () => s0,
          zjD: () => nL.zj,
          vWk: () => s1,
          vne: () => eN.vn,
          jPp: () => sX,
          Xzz: () => nI,
          ZzL: () => aE.Zz,
          Sik: () => nU,
          sHj: () => o0,
          bGJ: () => sJ,
          Gv0: () => ad,
          Rt_: () => aA.R,
          YHW: () => rc,
          kke: () => rf,
          qfz: () => rp,
          A47: () => ru,
          Zov: () => rl,
          HGT: () => ty.HG,
          fpP: () => o4,
          KYW: () => ob.K,
          ltm: () => u,
          Bic: () => ny.Bi,
          qPI: () => sa,
          GGi: () => sn,
          AAe: () => sm,
          KoA: () => s4,
          qzM: () => ow,
          ok: () => rt,
          wBE: () => V,
          n5: () => eO,
          MEy: () => ty.ME,
          Qvf: () => ty.Qv,
          Zs6: () => h.Z,
          $Cs: () => nD,
          Ekp: () => an,
          cCV: () => m.cC,
          b9: () => aY,
          E$9: () => rV,
          OTq: () => m.OT,
          BSL: () => a5,
          OS5: () => is,
          E52: () => iu,
          eFT: () => ih,
          KoP: () => i3,
          AKj: () => i2,
          tN7: () => aU,
          jls: () => oF,
          pRA: () => oK,
          Ko0: () => o5,
          o2C: () => sC,
          DZs: () => sf.DZ,
          kWF: () => oI,
          QKy: () => aE.QK,
          YUQ: () => c,
          iwW: () => l,
          H7T: () => nL.H7,
          fx1: () => rU,
          zkv: () => ir,
          qIo: () => tH,
          tYF: () => n1.t,
          bvT: () => nd.bv,
          iax: () => nd.i,
          Rfu: () => s9,
          fsg: () => oM,
          YYJ: () => i5,
          $L7: () => i6,
          Dw7: () => st,
          AQM: () => nL.AQ,
          LS9: () => H.LS,
          YNA: () => H.YN,
          L9S: () => $.L9,
          fL$: () => rR,
          c8y: () => rN,
          IkK: () => nQ,
          cNE: () => sT,
          tXO: () => sE,
          ps1: () => e2.ps,
          naf: () => iC,
          $oE: () => H.$o,
          kqw: () => nL.kq,
          due: () => nL.du,
          r6I: () => nL.r6,
          xlq: () => r9,
          aSH: () => sf.aS,
          SKH: () => rB,
          SDF: () => nd.SD,
          LXO: () => K,
          Uf9: () => sO,
          f5g: () => sj,
          ubS: () => oS.u,
          POs: () => s6,
          yIh: () => sK,
          PHv: () => n9,
        })
        var r = n(10029),
          o = n(40893),
          s = n(69150)
        let l = o.Ikc({ suggestion: o.YjP().trim().nullable() })
        function c(e) {
          let t = s.bl(l)
          return (
            delete t.$schema,
            `${e}

Return only JSON matching this schema: ${JSON.stringify(t)}.`
          )
        }
        let p = 3e5
        function u(e, t) {
          return ["cumberbatch", "new-thread", e, t]
        }
        function d(e) {
          let t = "string" == typeof e ? URL.parse(e) : e
          return null == t || ("codex:" !== t.protocol && "codex-dev:" !== t.protocol)
            ? null
            : { destination: "" === t.username && "" === t.password && "" === t.port ? t.host : "unsupported", url: t }
        }
        var m = n(58973)
        function f(e) {
          let t
          if ("cli-login" === e.get("source")) return null
          let n = e.get("plugin_id")?.trim()
          if ("plugin" === e.get("target") && n) return (0, m.fe)({ pluginId: n })
          if ("launch" === e.get("target")) return "codex://launch"
          if ("dots" === e.get("target")) return "codex://dots"
          let a = o.uRe().safeParse(e.get("codex_thread_id")?.trim()).data,
            i = new URL(`codex://threads/${a ?? "new"}`),
            r = e.get("hostId")?.trim()
          null != a && r && i.searchParams.set("hostId", r)
          let s = e.get("q")?.trim()
          s && i.searchParams.set("prompt", s)
          let l = e.getAll("mode")
          ;(1 === l.length
            ? (t = m.Ft.safeParse(l[0]).data)
            : 0 === l.length && "work" === e.get("fallback") && s && (t = "work"),
            null == a && null != t && i.searchParams.set("mode", t))
          let c = e.get("browserUrl"),
            p = URL.parse(c ?? "")
          return (
            c === c?.trim() &&
              null != p &&
              ["http:", "https:"].includes(p.protocol) &&
              !p.username &&
              !p.password &&
              i.searchParams.set("browserUrl", p.toString()),
            i.toString()
          )
        }
        var h = n(83237)
        let g = o.k5n(["off", "30-seconds", "1-minute", "3-minutes", "10-minutes", "30-minutes", "1-hour"]),
          v = o.aig().int().min(0).max(100)
        function x(e) {
          switch (e) {
            case "working":
              return 3166206
            case "unread":
              return 65356
            case "idle":
              return 0xffffff
            case "awaiting-approval":
            case "awaiting-response":
              return 0xff6d00
            case "error":
              return 0xff0033
            case "off":
              return 0
          }
        }
        o.k5n(["ACT06", "ACT07", "ACT08", "ACT09", "ACT10", "ACT11", "ACT10_ACT11", "ACT12"])
        let b = o.k5n([
            "FAST",
            "APPR",
            "REJ",
            "SPLIT",
            "MIC",
            "MIC1",
            "CODEX",
            "BUG",
            "OAI",
            "TERM",
            "DWN",
            "DEL",
            "NEW",
            "NAV",
            "MAGIC",
            "DIFF",
            "PLAY",
            "GIT",
            "BRCH",
            "BRANCH",
            "MRG",
            "PR",
            "PAINT",
            "LAB",
            "PARTY",
            "TIME",
            "MIND+",
            "MIND-",
            "EMPT1",
            "EMPT2",
            "EMPT3",
            "EMPT4",
            "SETUP",
            "FOLD",
            "UPL",
            "APPS",
            "YOLO",
            "YEET",
            "EMPT5",
          ]),
          y = o.Ikc({ type: o.euz("command"), commandId: o.YjP().min(1) }),
          w = o.Ikc({ type: o.euz("skill"), skillName: o.YjP().min(1), skillPath: o.YjP().min(1) }),
          k = o.gMt("type", [y, w]),
          _ = o.gMt("type", [y, w, o.Ikc({ type: o.euz("composer-text"), text: o.YjP().min(1) })]),
          P = o.Ikc({ keycapId: b, commandId: o.YjP().optional(), action: _.optional() }),
          I = o.Ikc({ up: k.nullable(), right: k.nullable(), down: k.nullable(), left: k.nullable() }),
          j = o.Ikc({ left: k.nullable(), right: k.nullable(), click: k.nullable(), longPress: k.nullable() }),
          A = o.k5n(["composer-navigation", "reasoning", "conversation-scroll", "custom"]),
          S = o.k5n(["push-to-talk", "realtime"]),
          O = o.k5n(["pinned", "recent", "priority", "custom"]),
          E = {
            up: { type: "command", commandId: "composer.togglePlanMode" },
            right: { type: "command", commandId: "navigateForward" },
            down: { type: "command", commandId: "toggleSidebar" },
            left: { type: "command", commandId: "navigateBack" },
          },
          T = { left: null, right: null, click: null, longPress: null },
          z = "composer-navigation",
          C = "push-to-talk",
          R = o.Ikc({
            version: o.euz(1),
            slots: o.Ikc({
              ACT06: P,
              ACT07: P,
              ACT08: P,
              ACT09: P,
              ACT10: P.default({ keycapId: "MIC1" }),
              ACT11: P.default({ keycapId: "EMPT1" }),
              ACT10_ACT11: P,
              ACT12: P,
            }),
            analogStick: I.default(E),
            encoder: j.default(T),
            encoderMode: A.default(z),
            voiceButtonMode: S.default(C),
            separateMicrophoneKeys: o.zMY().default(!1),
          })
        o.g1P(o.YjP(), o.Pq9())
        var $ = n(61082)
        let M = "agent-mode-by-host-id",
          Y = o.k5n($.pK),
          D = o.k5n(["pending", "accepted", "dismissed"])
        o.k5n(["science"]).nullable()
        let N = o.Ikc({
            id: o.YjP().min(1),
            title: o.YjP(),
            description: o.YjP(),
            prompt: o.YjP(),
            appIds: o.YOg(o.YjP()),
            pluginMention: o.Ikc({ id: o.YjP().min(1), label: o.YjP().min(1) }).optional(),
            status: D,
            createdAtMs: o.aig(),
            updatedAtMs: o.aig(),
          }),
          L = o.Ikc({
            projectRoot: o.YjP().default(""),
            generatedAtMs: o.aig().nullable(),
            currentSuggestionIds: o.YOg(o.YjP()),
            suggestions: o.YOg(N),
          }),
          U = { projectRoot: "", generatedAtMs: null, currentSuggestionIds: [], suggestions: [] },
          F = "ambient-suggestions.json",
          q = [
            "plus",
            "pro",
            "promax",
            "business",
            "team",
            "self_serve_business_prolite",
            "self_serve_business_usage_based",
          ]
        function W(e) {
          return (
            null != e &&
            ("apiKey" === e.type ||
              ("chatgpt" === e.type &&
                (function ({ email: e, plan: t }) {
                  return e?.toLowerCase().endsWith("@openai.com") === !0 || q.some((e) => e === t)
                })({ email: e.email, plan: e.planType })))
          )
        }
        let Z = "chatgpt-migration-announcement-completed-v1"
        class B {
          handlers = new Set()
          subscribe(e) {
            return (
              this.handlers.add(e),
              {
                dispose: () => {
                  this.handlers.delete(e)
                },
              }
            )
          }
          emit(e, t = Date.now()) {
            for (let n of this.handlers) n({ type: e, at: t })
          }
        }
        var H = n(4762)
        let K = o.gMt("kind", [
            o.Ikc({ kind: o.euz("new-chat") }),
            o.Ikc({ kind: o.euz("orbit") }),
            o.Ikc({ kind: o.euz("space") }),
            o.Ikc({
              kind: o.euz("chat"),
              accountId: o.YjP().min(1).max(256),
              conversationId: o.YjP().min(1).max(256),
              projectId: o.YjP().max(256).nullable(),
            }),
          ]),
          J = o.k5n(["codex", "chatgpt"]),
          G = o.vkY(
            (e) => ("codex-light" === e || "codex-dark" === e ? "codex-system" : e),
            o.k5n(["app-default", "codex-system", "space-system"]),
          )
        function V(e) {
          let t = J.safeParse(e?.trim())
          return t.success ? t.data : null
        }
        var Q = n(67073),
          X = n.n(Q),
          ee = n(65168),
          et = n.n(ee)
        let en = new Set([
            "app/installed",
            "config/batchWrite",
            "config/read",
            "configRequirements/read",
            "command/exec",
            "environment/info",
            "model/list",
            "permissionProfile/list",
            "thread/archive",
            "thread/list",
            "thread/metadata/update",
            "thread/name/set",
            "thread/read",
            "thread/queue/add",
            "thread/queue/list",
            "thread/queue/update",
            "thread/queue/delete",
            "thread/queue/reorder",
            "thread/realtime/appendAudio",
            "thread/realtime/appendSpeech",
            "thread/realtime/appendText",
            "thread/realtime/listVoices",
            "thread/realtime/start",
            "thread/realtime/stop",
            "thread/resume",
            "thread/settings/update",
            "thread/start",
            "thread/startAeon",
            "thread/stop",
            "thread/items/list",
            "thread/inject_items",
            "thread/turns/list",
            "thread/unarchive",
            "turn/addUserMessage",
            "turn/interrupt",
            "turn/start",
            "turn/steer",
          ]),
          ea = {
            model: null,
            review_model: null,
            model_context_window: null,
            model_auto_compact_token_limit: null,
            model_auto_compact_token_limit_scope: null,
            model_provider: null,
            approval_policy: null,
            approvals_reviewer: null,
            sandbox_mode: null,
            sandbox_workspace_write: null,
            forced_chatgpt_workspace_id: null,
            forced_login_method: null,
            web_search: null,
            client_search_provider: null,
            tools: null,
            profile: null,
            profiles: {},
            instructions: null,
            developer_instructions: null,
            compact_prompt: null,
            model_reasoning_effort: null,
            model_reasoning_summary: null,
            model_verbosity: null,
            service_tier: null,
            analytics: null,
            apps: null,
            browser_use: null,
            computer_use: null,
            desktop: null,
          }
        class ei {
          options
          inMemoryConfigVersion = 0
          inMemoryConfig = structuredClone(ea)
          constructor(e = { forwardConfigRequirements: !1 }) {
            this.options = e
          }
          readConfig() {
            return { config: structuredClone(this.inMemoryConfig), origins: {}, layers: null }
          }
          supports(e) {
            return en.has(e.method)
          }
          send(e) {
            if (
              ("thread/read" === e.method && e.params.threadId.includes(":")) ||
              (("command/exec" === e.method || (e.method.startsWith("fs/") && "fs/unwatch" !== e.method)) &&
                (null == e.params ||
                  !("environmentId" in e.params) ||
                  "string" != typeof e.params.environmentId ||
                  "" === e.params.environmentId.trim()))
            )
              return {
                type: "response",
                response: {
                  id: e.id,
                  error: {
                    code: -32602,
                    message:
                      "thread/read" === e.method
                        ? "thread/read requires a server-issued thread ID"
                        : `${e.method} requires an environmentId`,
                  },
                },
              }
            if ("config/read" === e.method)
              return { type: "response", response: { id: e.id, result: this.readConfig() } }
            if ("config/batchWrite" === e.method) {
              for (let t of e.params.edits) {
                if ("replace" === t.mergeStrategy && null == t.value) {
                  et()(this.inMemoryConfig, t.keyPath)
                  continue
                }
                X()(this.inMemoryConfig, t.keyPath, structuredClone(t.value))
              }
              return (
                (this.inMemoryConfigVersion += 1),
                {
                  type: "response",
                  response: {
                    id: e.id,
                    result: {
                      status: "ok",
                      version: `in-memory-${this.inMemoryConfigVersion}`,
                      filePath: "/in-memory/config.toml",
                      overriddenMetadata: null,
                    },
                  },
                }
              )
            }
            return "configRequirements/read" !== e.method || this.options.forwardConfigRequirements
              ? "permissionProfile/list" === e.method
                ? { type: "response", response: { id: e.id, result: { data: [], nextCursor: null } } }
                : "thread/startAeon" === e.method ||
                    "thread/start" === e.method ||
                    "thread/resume" === e.method ||
                    "turn/start" === e.method ||
                    "turn/addUserMessage" === e.method
                  ? {
                      type: "request",
                      request: {
                        ...e,
                        params: {
                          ...e.params,
                          personality: void 0,
                          serviceTier: (function (e) {
                            return "priority" === e
                              ? "fast"
                              : null == e || "fast" === e || "flex" === e || "ultrafast" === e
                                ? e
                                : void 0
                          })(e.params.serviceTier),
                        },
                      },
                    }
                  : { type: "request", request: e }
              : { type: "response", response: { id: e.id, result: { requirements: null } } }
          }
        }
        var er = n(99365)
        function eo(e, t) {
          return "chatgpt" === e.kind
            ? "chatgpt" === t.kind && e.accountId === t.accountId && e.userId === t.userId
            : "execution-storage" === t.kind && e.authMode === t.authMode
        }
        function es(e) {
          if (
            ("code" in e && "thread_not_found" === e.code) ||
            ("jsonRpcCode" in e && "thread_not_found" === e.jsonRpcCode) ||
            ec(e.message)
          )
            return !0
          let t = "data" in e ? e.data : null
          return (
            null != t &&
            "object" == typeof t &&
            "grpcStatusCode" in t &&
            (5 === t.grpcStatusCode || 9 === t.grpcStatusCode) &&
            ec(e.message.slice(e.message.indexOf(":") + 1).trimStart())
          )
        }
        Date.parse("2026-11-10T08:45:10Z")
        class el {
          lookups = new Map()
          nextPruneAtMs = 0
          read(e, t, n = { pinned: !1 }) {
            let a = Date.now()
            if (a >= this.nextPruneAtMs)
              for (let [e, t] of ((this.nextPruneAtMs = a + 6e4), this.lookups))
                !t.pinned && t.retryAtMs <= a && this.lookups.delete(e)
            let i = this.lookups.get(e)
            if (null != i && (i.retryAtMs > a || (n.pinned && i.pinned)))
              return ((i.pinned = i.pinned || n.pinned), i.promise)
            let r = {
              retryAtMs: 1 / 0,
              pinned: n.pinned,
              promise: Promise.resolve()
                .then(t)
                .then(
                  (t) => (
                    null == t ? (r.retryAtMs = Date.now() + 6e4) : this.lookups.get(e) === r && this.lookups.delete(e),
                    t
                  ),
                  (t) => {
                    throw (
                      t instanceof Error && es(t)
                        ? (r.retryAtMs = Date.now() + 6e4)
                        : this.lookups.get(e) === r && this.lookups.delete(e),
                      t
                    )
                  },
                ),
            }
            return (this.lookups.set(e, r), r.promise)
          }
          forgetRemovedPins(e) {
            for (let [t, n] of this.lookups) n.pinned && !e.has(t) && this.lookups.delete(t)
          }
          delete(e) {
            this.lookups.delete(e)
          }
          clear() {
            ;(this.lookups.clear(), (this.nextPruneAtMs = 0))
          }
        }
        function ec(e) {
          return (
            /^(?:thread not (?:found|loaded)|unknown thread):/i.test(e) ||
            /^no rollout found for thread id /i.test(e) ||
            /^invalid thread id:/i.test(e)
          )
        }
        var ep = n(84698),
          eu = n(58379)
        let ed = "01984de2-8f74-7c91-a3b2-5c5e937cf318",
          em = 100,
          ef = new Map()
        function eh(e) {
          return null != e && (0, ep.D)(e) && (0, ep.r)(e, "0.148.0-alpha.7") >= 0
        }
        function eg(e) {
          return eh(e)
        }
        class ev {
          adapter
          constructor(e) {
            this.adapter = e
          }
          async listHostSectionThreadIds(e, t = e.pinnedSectionId) {
            let n = [],
              a = null
            do {
              let i = await this.adapter.listThreads(e, {
                cursor: a,
                limit: em,
                modelProviders: [],
                sectionId: t,
                sortKey: "section_position",
                sourceKinds: eu.dV,
                useStateDbOnly: !0,
              })
              ;(n.push(...i.data.map((e) => e.id)), (a = i.nextCursor))
            } while (null != a)
            return n
          }
          async listSections(e) {
            let t = await Promise.all(
              e.map(async (e) => {
                let t = [],
                  n = null
                do {
                  let a = await this.adapter.listSections(e, { cursor: n, limit: em })
                  ;(t.push(
                    ...a.data
                      .filter(({ id: e }) => e !== ed)
                      .map(({ id: t, name: n }) => ({ hostId: e.hostId, id: t, name: n })),
                  ),
                    (n = a.nextCursor))
                } while (null != n)
                return t
              }),
            )
            return { hostIds: e.map(({ hostId: e }) => e), sections: t.flat() }
          }
          async createSection(e, t, n) {
            let a = `${e.hostId}\0${n}`,
              i = ef.get(a)
            if (null != i) return i
            let r = this.adapter
              .createSection(e, { name: t })
              .then(({ section: { id: e, name: t } }) => ({ id: e, name: t }))
            ef.set(a, r)
            try {
              return await r
            } finally {
              ef.get(a) === r && ef.delete(a)
            }
          }
          async updateSection(e, t, n) {
            await this.adapter.updateSection(e, { sectionId: t, name: n })
          }
          async deleteSection(e, t) {
            await this.adapter.deleteSection(e, { sectionId: t })
          }
          async findThreadOwner(e, t, n = {}) {
            let a = (
              await Promise.all(
                t.map(async (t) => {
                  try {
                    let a = await this.adapter.readThread(t, e, !0 === n.forDiscovery)
                    return a?.id === e
                      ? { ...t, isPinned: a.section?.id === t.pinnedSectionId, sectionId: a.section?.id ?? null }
                      : null
                  } catch (e) {
                    if (n.throwOnMissingThread || !(e instanceof Error) || !es(e)) throw e
                    return null
                  }
                }),
              )
            ).filter((e) => null != e)
            if (a.length <= 1 || !n.throwOnAmbiguousOwner) return 1 === a.length ? (a[0] ?? null) : null
            throw Error("Pinned thread ownership is ambiguous across app-server hosts")
          }
          async setThreadPinned(e, t) {
            let { threadId: n, pinned: a, beforeThreadId: i } = t
            if (e.isPinned === a) return !1
            let r = a && null != i ? await this.findThreadOwner(i, [e]) : null
            return this.setThreadSection(e, {
              beforeThreadId: r?.isPinned ? i : null,
              sectionId: a ? e.pinnedSectionId : null,
              threadId: n,
            })
          }
          async setThreadSection(e, t) {
            let { threadId: n, sectionId: a, beforeThreadId: i, previousSectionId: r } = t
            if (null == a && null == e.sectionId) return !0
            if ((null != r && e.sectionId !== r) || (e.sectionId === a && void 0 === i)) return !1
            let o = !1
            null != a &&
              a !== e.pinnedSectionId &&
              e.sectionId !== a &&
              null != i &&
              (await this.adapter.moveThread(e, { beforeThreadId: null, sectionId: a, threadId: n }), (o = !0))
            try {
              await this.adapter.moveThread(e, { beforeThreadId: i ?? null, sectionId: a, threadId: n })
            } catch (t) {
              throw (
                o && (await this.adapter.moveThread(e, { beforeThreadId: null, sectionId: e.sectionId, threadId: n })),
                t
              )
            }
            return !0
          }
          async movePinnedThread(e, t) {
            let { threadId: n, beforeThreadId: a } = t
            return (
              !!e.isPinned && this.setThreadSection(e, { beforeThreadId: a, sectionId: e.pinnedSectionId, threadId: n })
            )
          }
        }
        function ex(e, t) {
          return ["codex-app-server", `codex-client.${t}`, `openai-bearer.${e}`]
        }
        let eb = "0.141.0",
          ey = "codex-app-server-version-unsupported:",
          ew = /^.+?\/(?<version>\S+)/,
          ek =
            /(?:^|\s)(?<version>\d+\.\d+\.\d+(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?)(?:\s|$)/
        function e_(e) {
          return ew.exec(e)?.groups?.version ?? null
        }
        function eP(e) {
          return ek.exec(e)?.groups?.version ?? null
        }
        function eI(e) {
          return "0.0.0" === e || (0, ep.r)(e, eb) >= 0
        }
        let ej = 48e3
        var eA = n(71415)
        let eS =
          /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?<suffix>(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?)$/
        function eO(e) {
          return e$(e).version
        }
        function eE(e) {
          return `${e.major}.${e.minor}.${e.patch}`
        }
        function eT(e) {
          let t = e$(e),
            n = (function (e) {
              let t = String(e.minor)
              if (eY(e.major, t) || e.patch < 1e4 || !t.startsWith("5")) return e.minor
              let n = t.slice(1)
              return eY(e.major, n) ? Number(n) : e.minor
            })(t.version)
          return {
            isPreRelease: n !== t.version.minor,
            version: `${eE({ major: t.version.major, minor: n, patch: t.version.patch })}${t.suffix}`,
          }
        }
        function ez(e) {
          let t
          try {
            t = e$(e).version
          } catch {
            return null
          }
          if (!eM(t)) return null
          let n = eD(String(t.minor))
          if (null == n) return null
          let a = String(t.patch),
            i = Number(a.slice(0, -4)),
            r = a.slice(-4),
            o = Number(r.slice(0, 2)),
            s = Number(r.slice(2))
          return !Number.isInteger(i) || !Number.isInteger(o) || !Number.isInteger(s) || i < 1 || o > 23 || s > 59
            ? null
            : new Date(Date.UTC(2e3 + t.major, n.month - 1, n.day + i - 1, o + 8, s))
        }
        function eC(e) {
          let t = e$(e)
          if (!eM(t.version)) return `${eE(t.version)}.0`
          let n = String(t.version.patch),
            a = Number(n.slice(0, -4)),
            i = n.slice(-4),
            r = Number(i.slice(0, 2)),
            o = Number(i.slice(2))
          return `${t.version.major}.${t.version.minor}.${(a - 1) * 1440 + 60 * r + o}.0`
        }
        function eR(e, t) {
          return `${e}.v${t.replaceAll(".", "-")}`
        }
        function e$(e) {
          let t = eS.exec(e)
          if (t?.groups == null) throw Error(`Invalid semantic version: ${e}`)
          return {
            suffix: t.groups.suffix,
            version: { major: Number(t.groups.major), minor: Number(t.groups.minor), patch: Number(t.groups.patch) },
          }
        }
        function eM(e) {
          return e.patch >= 1e4 && eY(e.major, String(e.minor))
        }
        function eY(e, t) {
          let n = eD(t)
          if (null == n) return !1
          let a = new Date(Date.UTC(2e3 + e, n.month, 0)).getUTCDate()
          return n.day <= a
        }
        function eD(e) {
          if (!/^[0-9]{3,4}$/.test(e)) return null
          let t = 3 === e.length ? e.slice(0, 1) : e.slice(0, 2),
            n = 3 === e.length ? e.slice(1) : e.slice(2),
            a = Number(t),
            i = Number(n)
          return a < 1 || a > 12 || i < 1 || i > 31 ? null : { day: i, month: a }
        }
        var eN = n(49973)
        let eL = 330,
          eU = { damping: 37.7, initialVelocity: 0, mass: 1, stiffness: 720 },
          eF = 330,
          eq = 16,
          eW = 4,
          eZ = 26,
          eB = 28
        function eH(e) {
          let t = 2 + +!!e
          return 20 + 20 * t + 20 * (t - 1)
        }
        let eK = 188,
          eJ = 40,
          eG = {
            collapseMovementSpringBounce: 0.1,
            collapseTransitionDurationMs: 0,
            compactControlCornerRadius: 6.5,
            compactControlGap: -10.5,
            compactControlHeight: 6,
            compactControlWidth: 17,
            compactDismissDelayMs: 300,
            compactGlassSpacing: 14,
            compactOffsetX: 0,
            compactOffsetY: 0,
            contentHiddenBlurRadiusPx: 14,
            contentHiddenScale: 0.75,
            expandingGlassSpacing: 20,
            glassMergeDurationMs: 300,
            hoverControlGap: 8,
            hoverControlSize: 24,
            hoverGlassSpacing: 0,
            hoverOffsetX: 0,
            hoverOffsetY: 10,
            movementSpringBounce: 0.1,
            movementSpringLaunchOffsetY: 16,
            proximityEnterDistance: 40,
            proximityExitDistance: 56,
            transitionDurationMs: 200,
          }
        var eV = n(83418)
        let eQ = Object.values(eV.N),
          eX = [eV.N.Dev, eV.N.Agent, eV.N.Nightly, eV.N.InternalAlpha],
          e0 = {
            ...eV.N,
            values: eQ,
            help: eQ.join(", "),
            isValid: (e) => eQ.includes(e),
            parse(e) {
              let t = e?.trim()
              return t && e0.isValid(t) ? t : null
            },
            isInternal: (e) => eX.includes(e),
            allowDebugMenu: (e) => e0.isInternal(e),
            supportsReactScan: (e) => e === e0.Dev || e === e0.Agent || e === e0.Nightly,
          }
        var e1 = n(84766),
          e2 = n(33879)
        function e3(e) {
          let t = 0 === e.length || "about:blank" === e ? "" : e
          if (0 === t.length) return t
          try {
            return new URL(t).href
          } catch {
            return t
          }
        }
        let e4 = o.k5n(["atlas", "chrome"]),
          e5 = o.Ikc({ hasCookiesOlderThanProfile: o.zMY(), hasPasswordsOlderThanProfile: o.zMY() }),
          e6 = o
            .Ikc({
              source: e4,
              appName: o.YjP(),
              profileName: o.YjP(),
              profileDirectoryName: o.YjP(),
              profilePath: o.YjP(),
              rootPath: o.YjP(),
              hasCookies: o.zMY(),
              hasPasswords: o.zMY(),
              hasHistory: o.zMY().optional().default(!1),
              hasExtensions: o.zMY().optional(),
              hasBookmarks: o.zMY().optional(),
              gaiaName: o.YjP().optional(),
              userName: o.YjP().optional(),
            })
            .loose(),
          e9 = o
            .Ikc({
              status: o.YjP().optional(),
              discovered: o.aig().int().nonnegative().optional(),
              canonicalized: o.aig().int().nonnegative().optional(),
              imported: o.aig().int().nonnegative().optional(),
              skippedExisting: o.aig().int().nonnegative().optional(),
              skippedInvalid: o.aig().int().nonnegative().optional(),
              failed: o.aig().int().nonnegative().optional(),
              error: o.YjP().optional(),
            })
            .loose(),
          e8 = e9.extend({ profile: e9.optional(), account: e9.optional() }).loose(),
          e7 = o.Ikc({
            status: o.YjP(),
            discovered: o.aig().int().nonnegative(),
            imported: o.aig().int().nonnegative(),
            skippedExisting: o.aig().int().nonnegative(),
            skippedInvalid: o.aig().int().nonnegative(),
            failed: o.aig().int().nonnegative(),
          }),
          te = e9.extend({
            failures: o.YOg(o.Ikc({ id: o.YjP().optional(), name: o.YjP().optional(), reason: o.YjP() })).optional(),
          }),
          tt = o
            .Ikc({
              source: e4,
              profilePath: o.YjP(),
              cookies: e9.optional(),
              passwords: e8.optional(),
              history: e7.optional(),
              extensions: te.optional(),
              bookmarks: e9.optional(),
            })
            .loose(),
          tn = o.Ikc({
            dialogAction: o.k5n(["confirm", "retry"]).optional(),
            source: e4,
            profilePath: o.YjP().trim().min(1),
            importCookies: o.zMY().optional().default(!0),
            importPasswords: o.zMY().optional().default(!0),
            importHistory: o.zMY().optional().default(!1),
            importExtensions: o.zMY().optional().default(!1),
            importBookmarks: o.zMY().optional().default(!1),
            allowUnverifiedExtensions: o.zMY().optional(),
            allowElevatedChromeDecryption: o.zMY().optional(),
            cookieDomainAllowlist: o.YOg(o.YjP().trim().min(1)).optional(),
          }),
          ta = "chrome://extensions/",
          ti = "persist:codex-browser-app",
          tr = "/settings/browser-use/bookmarks",
          to = ["chrome://settings/addresses", "chrome://settings/contactInfo"],
          ts = "persist:codex-contact-info-settings",
          tl = "chrome://password-manager/",
          tc = "persist:codex-password-manager-settings",
          tp = "/settings/browser-use/passwords",
          tu = "chrome://settings/content",
          td = `${tu}/siteDetails`,
          tm = [tu, "chrome://settings/privacy", "chrome://settings/handlers", "chrome://settings/cookies"],
          tf = "persist:codex-site-settings",
          th = new Map([
            ["downloads", "/settings/browser-use/downloads"],
            ["history", "/settings/browser-use/history"],
            ["bookmarks", tr],
          ])
        function tg(e, t) {
          try {
            let n = new URL(e.replace(/^chrome:\/{0,3}/i, "chrome://"))
            if ("chrome:" !== n.protocol || "" !== n.username || "" !== n.password || "" !== n.port) return null
            let a = th.get(decodeURIComponent(n.hostname).toLowerCase())
            if (a === tr) {
              if (!t) return null
              let e = n.searchParams.get("id")
              e && (n.searchParams.set("folder", e), n.searchParams.delete("id"))
            }
            return null == a ? null : `${a}${n.search}`
          } catch {
            return null
          }
        }
        function tv(e) {
          if (null == e) return null
          let t = (function (e) {
            try {
              let t = new URL(e)
              if ("http:" !== t.protocol && "https:" !== t.protocol) return null
              return t.origin
            } catch {
              return null
            }
          })(e)
          return null == t ? null : `${td}?site=${encodeURIComponent(t)}`
        }
        function tx(e, t, n) {
          let a = e.body ?? "",
            i = a.trim(),
            r =
              null == e.designChange
                ? void 0
                : {
                    ...e.designChange,
                    ...(0 === i.length ? {} : { comment: i }),
                    screenshot: e.screenshot ?? e.designChange.screenshot,
                  }
          return (function ({
            anchor: e,
            additionalAnchors: t,
            attachedImages: n,
            body: a,
            browserTabId: i,
            designChange: r,
            line: o,
            markerViewportPoint: s,
            screenshot: l,
            commentId: c,
            themeVariant: p,
            viewportSize: u,
          }) {
            return (0, eN.cu)(
              {
                type: "comment",
                content: [
                  {
                    content_type: "text",
                    text: (function (e, t) {
                      let n = e.trim()
                      if (null == t) return e
                      let a = [
                        null == t.text || t.text.value === t.text.previousValue
                          ? null
                          : `text: ${t.text.previousValue} -> ${t.text.value}`,
                        ...t.declarations
                          .filter((e) => e.value !== e.previousValue)
                          .map((e) => `${e.property}: ${e.previousValue} -> ${e.value}`),
                      ]
                        .filter((e) => null != e)
                        .join("\n")
                      return 0 === n.length
                        ? a
                        : 0 === a.length
                          ? e
                          : `${n}
${a}`
                    })(a, r),
                  },
                ],
                position: {
                  side: "right",
                  path: (function (e) {
                    let t = e.anchor.title.trim()
                    if (t.length > 0) return `browser:${t}`
                    try {
                      let t = new URL(e.anchor.pageUrl),
                        n = `${t.hostname}${"/" === t.pathname ? "" : t.pathname}`
                      return `browser:${n}`
                    } catch {
                      return `browser:${e.anchor.pageUrl}`
                    }
                  })({ anchor: e }),
                  line: o,
                },
                localBrowserContext: {
                  pageUrl: e.pageUrl,
                  framePath: e.framePath,
                  frameUrl: e.frameUrl,
                  additionalSelections:
                    "virtual" !== e.kind && t?.length ? t.filter((e) => "virtual" !== e.kind).map(tb) : void 0,
                  ...("text" === e.kind
                    ? { selectedText: e.selectedText }
                    : {
                        targetDescription: e.title,
                        targetImmediateText: e.immediateText ?? void 0,
                        targetRole: e.role,
                        targetName: e.name,
                        targetSelector: e.selector,
                        targetPath: e.elementPath,
                        targetRect: "element" !== e.kind ? e.rect : void 0,
                        nearbyText: e.nearbyText,
                        elementName: "region" !== e.kind ? e.elementName : void 0,
                        elementMetadata: "region" !== e.kind ? e.elementMetadata : void 0,
                        virtualTarget: "virtual" === e.kind ? { surfaceId: e.surfaceId, targetId: e.targetId } : void 0,
                      }),
                  documentContext: e.documentContext,
                },
                localBrowserCommentMetadata: {
                  browserTabId: i,
                  commentId: c,
                  hasAnnotationFeatures:
                    (function (e, t) {
                      let n = []
                      for (let a of ((t?.annotationControls?.controls.length ?? 0) > 0 &&
                        n.push({ feature: "custom-controls" }),
                      e)) {
                        for (let e of a.annotationFeatures ?? [])
                          n.push(
                            "requests" === e
                              ? { feature: e, includesPrompt: !0 === a.annotationRequestIncludesPrompt }
                              : { feature: e },
                          )
                        ;("virtual" === a.kind && n.push({ feature: "registered-surface" }),
                          ("element" === a.kind || "virtual" === a.kind) &&
                            null != a.elementMetadata &&
                            Object.keys(a.elementMetadata).length > 0 &&
                            n.push({ feature: "metadata" }))
                      }
                      return n.filter(
                        (e, t) =>
                          n.findIndex((t) => t.feature === e.feature && t.includesPrompt === e.includesPrompt) === t,
                      )
                    })([e, ...(t ?? [])], r).length > 0,
                  kind: e.kind,
                  markerViewportPoint: s,
                  themeVariant: p,
                  viewportSize: u,
                },
                localBrowserAttachedImages: n,
                localBrowserDesignChange: null == r ? void 0 : { group: r },
                ...(null == l ? {} : { localBrowserScreenshot: { ...l, commentId: c } }),
              },
              eN.jv.BROWSER,
            )
          })({
            anchor: e.anchor,
            additionalAnchors: e.additionalAnchors,
            attachedImages: e.attachedImages,
            body: a,
            browserTabId: n,
            designChange: r,
            line: t,
            markerViewportPoint: e.markerViewportPoint,
            screenshot: e.screenshot,
            commentId: e.id,
            themeVariant: e.themeVariant,
            viewportSize: e.viewportSize,
          })
        }
        function tb(e) {
          return "region" === e.kind
            ? {
                kind: e.kind,
                pageUrl: e.pageUrl,
                framePath: e.framePath,
                frameUrl: e.frameUrl,
                rect: e.rect,
                targetDescription: e.title,
                targetPath: e.elementPath,
                documentContext: e.documentContext,
              }
            : {
                kind: e.kind,
                pageUrl: e.pageUrl,
                framePath: e.framePath,
                frameUrl: e.frameUrl,
                targetDescription: e.title,
                targetImmediateText: e.immediateText ?? void 0,
                targetRole: e.role,
                targetName: e.name,
                targetSelector: e.selector,
                targetPath: e.elementPath,
                nearbyText: e.nearbyText,
                documentContext: e.documentContext,
                elementName: e.elementName,
                elementMetadata: e.elementMetadata,
              }
        }
        var ty = n(64890)
        function tw({
          placementContext: e,
          anchorState: t,
          forceFallback: n = !1,
          body: a = "",
          placementSurfaceSize: i,
          previewSurfaceSize: r,
          metadataHeaderHeight: o = 0,
          surfaceMode: s = "editor",
        }) {
          let { browserViewportBounds: l, workArea: c, viewportScale: p } = e,
            u = Math.max(1, l.width - 32),
            d = Math.max(1, l.height - 32),
            m = (0, ty.l6)(a),
            f = Math.min(ty.D3, u),
            h = tP(r?.width ?? f, f),
            g = tI(r?.height ?? m, d),
            v = Math.min(u, Math.max(ty.D3, i?.width ?? ty.D3, r?.width ?? ty.D3)),
            x = tP(Math.max(r?.width ?? ty.D3, i?.width ?? 0), v),
            b = tI(r?.height ?? ty.bU, d),
            y = "preview" === s ? h : x,
            w = "preview" === s ? g : b,
            k = "preview" === s ? y : tP(i?.width ?? y, v),
            _ = "preview" === s ? w : tI(i?.height ?? w, d),
            P =
              "preview" === s
                ? (function ({
                    browserViewportBounds: e,
                    viewportScale: t,
                    anchorState: n,
                    previewWidth: a,
                    previewHeight: i,
                  }) {
                    let { x: r, y: o } = tk({ anchorState: n, browserViewportBounds: e, viewportScale: t }),
                      s = e.x + 16,
                      l = e.x + e.width - a - 16,
                      c = e.y + 16,
                      p = e.y + e.height - i - 16,
                      u = Math.min(ty.D3, Math.max(1, e.width - 32)),
                      d = ty.bU,
                      m = ty.QH / 2 + 12,
                      f = tj(o - i / 2, c, Math.max(c, p)),
                      h = r + m
                    if (h + u <= e.x + e.width - 16)
                      return { bounds: { x: h, y: f, width: a, height: i }, previewAlignment: "start" }
                    if (r - m - u >= s)
                      return { bounds: { x: r - m - a, y: f, width: a, height: i }, previewAlignment: "end" }
                    let g = tj(r - a / 2, s, Math.max(s, l)),
                      v = o + m
                    return v + d <= e.y + e.height - 16
                      ? {
                          bounds: { x: g, y: v, width: a, height: i },
                          previewAlignment: t_({ maxCardX: l, minCardX: s, x: g }),
                        }
                      : {
                          bounds: { x: g, y: Math.max(c, o - m - i), width: a, height: i },
                          previewAlignment: t_({ maxCardX: l, minCardX: s, x: g }),
                        }
                  })({ browserViewportBounds: l, viewportScale: p, anchorState: t, previewWidth: h, previewHeight: g })
                : null,
            I =
              "preview" === s
                ? null
                : (function ({ browserViewportBounds: e, cardWidth: t, cardHeight: n }) {
                    return { x: e.x + e.width - t - 16, y: e.y + e.height - n - 16, width: t, height: n }
                  })({ browserViewportBounds: l, cardWidth: y, cardHeight: w }),
            j = "editor" === s && "top-left" === t.placement,
            A =
              P ??
              (n || j
                ? null
                : (function ({
                    browserViewportBounds: e,
                    viewportScale: t,
                    anchorState: n,
                    cardWidth: a,
                    sideAnchorHeight: i,
                    metadataHeaderHeight: r,
                    cardHeight: o,
                    placementCardWidth: s,
                    placementCardHeight: l,
                  }) {
                    let { x: c, y: p } = tk({ anchorState: n, browserViewportBounds: e, viewportScale: t }),
                      u = e.x + 16,
                      d = e.x + e.width - a - 16,
                      m = e.x + e.width - s - 16,
                      f = e.y + 16,
                      h = e.y + e.height - o - 16,
                      g = e.y + e.height - l - 16,
                      v = tj(p - r - i / 2, f, h, 0 === r),
                      x = r > 0 ? p - i / 2 : void 0,
                      b = ty.QH / 2 + 12,
                      y = c + b
                    if (y >= u && y <= m)
                      return {
                        bounds: { x: y, y: v, width: a, height: o },
                        previewAlignment: "start",
                        verticalPlacement: "side",
                        metadataBodyTop: x,
                      }
                    let w = c - b - s
                    if (w >= u && w <= m)
                      return {
                        bounds: { x: c - b - a, y: v, width: a, height: o },
                        previewAlignment: "end",
                        verticalPlacement: "side",
                        metadataBodyTop: x,
                      }
                    let k = tj(c - a / 2, u, d),
                      _ = p + b
                    return _ <= g
                      ? {
                          bounds: { x: k, y: _, width: a, height: o },
                          previewAlignment: t_({ maxCardX: d, minCardX: u, x: k }),
                          verticalPlacement: "below",
                        }
                      : p - b - l < f
                        ? null
                        : {
                            bounds: { x: k, y: p - b - o, width: a, height: o },
                            previewAlignment: t_({ maxCardX: d, minCardX: u, x: k }),
                            verticalPlacement: "above",
                          }
                  })({
                    browserViewportBounds: l,
                    viewportScale: p,
                    anchorState: t,
                    cardWidth: y,
                    cardHeight: w,
                    placementCardWidth: k,
                    placementCardHeight: _,
                    sideAnchorHeight: ty.tu,
                    metadataHeaderHeight: o,
                  })),
            S = j ? { x: l.x + 16, y: l.y + 16, width: y, height: w } : (A?.bounds ?? I)
          if (null == S) throw Error("Expected preview card bounds")
          let O = null != P || null != A ? "anchored" : "fallback",
            E = j ? "start" : (A?.previewAlignment ?? "end"),
            T = tj(S.x, c.x, c.x + c.width - y),
            z = tj(S.y, c.y, c.y + c.height - w, 0 === o || "preview" === s),
            C = "preview" === s ? 0 : Math.min(ty.o6, Math.max(z - c.y, 0)),
            R = "preview" === s ? m : Math.max(w, ty.bU) + C,
            $ = "preview" === s ? z : z - C,
            M = A?.verticalPlacement === "below",
            Y = M ? z : Math.max(l.y + 16, c.y)
          return {
            cardWindowBounds: { x: T, y: z, width: y, height: w },
            placementStrategy: O,
            previewAlignment: E,
            maxSurfaceWidth: u,
            maxSurfaceHeight: d,
            metadataAnchor:
              "editor" !== s || o <= 0
                ? void 0
                : {
                    bodyTop: (A?.metadataBodyTop ?? z + (M ? 0 : o)) - $,
                    minTop: Y - $,
                    maxBottom: tj(l.y + l.height - 16, Y + 1, c.y + c.height, !1) - $,
                  },
            reservedTrayHeight: C,
            editorWindowBounds: { x: T, y: $, width: y, height: R },
          }
        }
        function tk({ anchorState: e, browserViewportBounds: t, viewportScale: n }) {
          let a = null == e.viewportSize || e.viewportSize.width <= 0 ? n : t.width / e.viewportSize.width,
            i = null == e.viewportSize || e.viewportSize.height <= 0 ? n : t.height / e.viewportSize.height,
            r = e.visualViewport,
            o = ty.K1 + ty.QH / 2
          return {
            x: t.x + tj((e.viewportPoint.x - (r?.offsetLeft ?? 0)) * (r?.scale ?? 1) * a, o, t.width - o),
            y: t.y + tj((e.viewportPoint.y - (r?.offsetTop ?? 0)) * (r?.scale ?? 1) * i, o, t.height - o),
          }
        }
        function t_({ maxCardX: e, minCardX: t, x: n }) {
          return n <= t ? "start" : n >= e ? "end" : "center"
        }
        function tP(e, t) {
          return tj(Math.ceil(e), 1, Math.max(1, t))
        }
        function tI(e, t) {
          return tj(Math.ceil(e), 1, Math.max(1, t))
        }
        function tj(e, t, n, a = !0) {
          return n < t ? t : Math.min(Math.max(a ? Math.round(e) : e, t), n)
        }
        let tA = [25, 33, 50, 67, 75, 80, 90, 100, 110, 125, 150, 175, 200, 250, 300, 400, 500],
          tS = tA[0],
          tO = 100,
          tE = tA[tA.length - 1]
        function tT(e) {
          return Math.min(tE, Math.max(tS, e))
        }
        function tz(e, t) {
          let n = tT(e)
          if (t > 0) {
            for (let e of tA) if (e > n) return e
            return tE
          }
          for (let e = tA.length - 1; e >= 0; e -= 1) {
            let t = tA[e]
            if (t < n) return t
          }
          return tS
        }
        function tC(e) {
          return tT(e) / 100
        }
        let tR = "persist:codex-browser-app-route:",
          t$ = ":host:",
          tM = "thread-browser-tabs-v1:",
          tY = "data-browser-sidebar-page-restore",
          tD = "data-browser-sidebar-page-storage-id"
        function tN(e) {
          return e
        }
        function tL(e) {
          return `${tM}${encodeURIComponent(e)}`
        }
        function tU(e, t) {
          return `${tR}${encodeURIComponent(`${e}\0${t}`)}`
        }
        var tF = n(24546),
          tq = n(99970),
          tW = n(89213),
          tZ = n(23065)
        let tB = o
          .rej({
            browserId: o.L5J(),
            browserFamily: o
              .L5J()
              .optional()
              .transform((e, t) => {
                if (void 0 !== e)
                  return "string" == typeof e && (0, tW.rU)(e)
                    ? e
                    : (t.addIssue({ code: "custom", message: "Invalid browser family" }), tZ.tm)
              }),
            pluginId: o.L5J(),
            source: o.L5J(),
            tabId: o.L5J(),
            snapshot: o.L5J(),
            faviconUrl: o.L5J().transform((e) => (0, tq.G$)(e)),
            recency: o.aig().min(0),
          })
          .transform(({ browserFamily: e, faviconUrl: t, recency: n, ...a }, i) => {
            let r = (0, tF.qm)(a)
            return null == r
              ? (i.addIssue({ code: "custom", message: "Invalid browser tab mention" }), tZ.tm)
              : { ...r, browserFamily: e, faviconUrl: t, recency: n }
          })
        function tH(e, t = "") {
          let n = new Set(),
            a = []
          for (let i of [...e].sort(tJ)) {
            let e = (0, tF.T_)(i)
            if (!n.has(e) && (n.add(e), (0, tq.lR)(i.snapshot, t) && (a.push(i), a.length === tF.s3))) break
          }
          return a
        }
        function tK(e) {
          return 0 === e.trim().length ? 3 : tF.s3
        }
        function tJ(e, t) {
          return e.recency !== t.recency
            ? e.recency > t.recency
              ? -1
              : 1
            : tG(e.source, t.source) ||
                tG(e.pluginId, t.pluginId) ||
                tG(e.browserId, t.browserId) ||
                tG(e.tabId, t.tabId) ||
                tG(e.snapshot.title, t.snapshot.title) ||
                tG(e.snapshot.url, t.snapshot.url) ||
                tG(e.faviconUrl ?? "", t.faviconUrl ?? "")
        }
        function tG(e, t) {
          return e === t ? 0 : e < t ? -1 : 1
        }
        ;(o.rej({ candidates: o.YOg(tB).max(tF.s3) }),
          (function ({ browserClientPath: e, browserMode: t, browserPreference: n }) {
            let a = ("plugins" === t && e?.trim()) || null
            if ("cua_repl" === t && null != n) JSON.stringify(n.extensionInstanceId)
            else if (null != a) {
              let e = `const { pathToFileURL } = await import("node:url");

const browserClientPath = ${JSON.stringify(a)};
const browserClientUrl = pathToFileURL(browserClientPath).href;

if (!globalThis.agent) {
  const { setupBrowserRuntime } = await import(browserClientUrl);
  globalThis.agent = await setupBrowserRuntime();
}
if (!globalThis.browser) {
  globalThis.browser = await agent.browsers.get("extension");
}`
            }
          })({ browserMode: "unavailable", browserClientPath: null }))
        let tV = o.L5J().transform((e) => ("string" == typeof e && e.length > 0 ? e : null)),
          tQ = o
            .L5J()
            .transform((e) => (Array.isArray(e) ? e.filter((e) => "string" == typeof e && e.length > 0) : [])),
          tX = o
            .Ikc({
              extensionInstanceId: o.YjP().trim().min(1),
              preferredWindowId: o
                .aig()
                .int()
                .nonnegative()
                .optional()
                .catch(void 0),
            })
            .optional()
            .catch(void 0),
          t0 = o
            .g1P(o.YjP(), Y.optional().catch(void 0))
            .transform((e) => Object.fromEntries(Object.entries(e).filter((e) => void 0 !== e[1]))),
          t1 = Y.exclude(["full-access", "custom"]),
          t2 = o
            .g1P(
              o.YjP(),
              t1
                .nullable()
                .optional()
                .catch(void 0),
            )
            .transform((e) => Object.fromEntries(Object.entries(e).filter((e) => void 0 !== e[1]))),
          t3 = o.Ikc({ agentModesByHostId: t0, preferredNonFullAccessModesByHostId: t2 })
        o.Ikc({
          browserPreference: tX,
          browserClientPath: tV,
          browserServicePath: tV,
          codexCliPath: tV,
          desktopAgentModeDefaults: t3.nullable().optional(),
          nodeModuleDirs: tQ.prefault([]),
          nodePath: tV,
          nodeReplPath: tV,
          platform: o.YjP().catch("unknown"),
        })
        Symbol("unset")
        let t4 = "codex-checkout",
          t5 = "codex-credit-",
          t6 = "codex-personal-checkout-",
          t9 = "codex-pricing-",
          t8 = "codex-workspace-settings-"
        o.Ikc({ data: o.Ikc({ reason: o.euz("governmentWorkspaceRequired"), action: o.euz("relogin") }) })
        let t7 = o.Ikc({
          data: o.Ikc({
            reason: o.k5n(["cloudRequirements", "cloudConfigBundle"]),
            errorCode: o.YjP().optional(),
            action: o.YjP().optional(),
          }),
        })
        function ne(e) {
          let t = t7.safeParse(e)
          return !!t.success && ("Auth" === t.data.data.errorCode || "relogin" === t.data.data.action)
        }
        function nt({ command: e, stdout: t, stderr: n, fallbackOutput: a = t || n || "An unknown error occurred" }) {
          return { command: e, output: [t, n].filter((e) => e.length > 0).join("\n") || a }
        }
        let nn = o.aig().int().positive(),
          na = o.Ikc({
            reason: o.euz("configLoad"),
            filePath: o
              .YjP()
              .nullable()
              .optional()
              .transform((e) => e ?? null),
            line: nn
              .nullable()
              .optional()
              .transform((e) => e ?? null),
            column: nn
              .nullable()
              .optional()
              .transform((e) => e ?? null),
            detail: o.YjP(),
          })
        function ni(e) {
          if ("object" != typeof e || null == e || !("data" in e)) return null
          let t = e.data
          if ("object" != typeof t || null == t) return null
          let n = na.safeParse(t)
          return n.success ? n.data : null
        }
        function nr(e, t) {
          let n = null,
            a = null,
            i = (...i) => {
              ;((a = i),
                n && clearTimeout(n),
                (n = setTimeout(() => {
                  n = null
                  let t = a
                  ;((a = null), t && e(...t))
                }, t)))
            }
          return (
            (i.cancel = () => {
              ;(n && (clearTimeout(n), (n = null)), (a = null))
            }),
            i
          )
        }
        var no = n(5844),
          ns = n(12439)
        class nl {
          callbacks
          primaryPressedAtMs
          primaryPressMode = "consumed"
          latchedGeneration = null
          pendingPrimaryToggle = null
          singleTapPressed = !1
          singleTapStartsSession = !1
          lastTapAtMs
          generation = 0
          pendingGeneration = null
          constructor(e) {
            this.callbacks = e
          }
          get hasPendingStart() {
            return null != this.pendingGeneration
          }
          isCurrent(e) {
            return this.generation === e
          }
          async press(e, t) {
            if ("single-tap" === e) {
              if (this.singleTapPressed) return
              ;((this.singleTapPressed = !0), (this.singleTapStartsSession = !1), (this.lastTapAtMs = void 0))
              let e = this.callbacks.getSession()
              null != e
                ? this.callbacks.stop(e.generation)
                : this.hasPendingStart
                  ? this.cancel()
                  : ((this.singleTapStartsSession = !0),
                    await this.start("toggle", {
                      startedAtMs: Date.now(),
                      gestureWaitMs: 0,
                      supportsDoubleTap: !1,
                      bareModifier: t,
                    }))
              return
            }
            let n = this.pendingPrimaryToggle?.releasedAtMs
            if (
              (null != n && ((this.pendingPrimaryToggle = null), this.releasePrimary(n)),
              null != this.primaryPressedAtMs)
            )
              return
            ;((this.primaryPressedAtMs = Date.now()), (this.primaryPressMode = "consumed"))
            let a = this.callbacks.getSession()
            if (
              "shared" === e &&
              this.latchedGeneration === this.generation &&
              (this.hasPendingStart || a?.generation === this.generation) &&
              null != this.lastTapAtMs &&
              this.primaryPressedAtMs - this.lastTapAtMs <= 400
            ) {
              this.lastTapAtMs = void 0
              return
            }
            if (this.hasPendingStart)
              return void (null != a && this.latchedGeneration === a.generation
                ? this.callbacks.stop(a.generation)
                : this.cancel())
            if (null != a) {
              "toggle" === a.mode && this.callbacks.stop(a.generation)
              return
            }
            let i = { startedAtMs: this.primaryPressedAtMs, gestureWaitMs: 0, supportsDoubleTap: !0, bareModifier: t },
              r = this.lastTapAtMs
            ;((this.lastTapAtMs = void 0),
              null != r && Date.now() - r <= 400
                ? ((this.primaryPressMode = "toggle"), await this.start("toggle", i))
                : ((this.primaryPressMode = "shared" === e ? "shared" : "hold"), await this.start("hold", i)))
          }
          async tryPrimaryAsToggle(e, t) {
            let n = {}
            this.pendingPrimaryToggle = n
            try {
              let a = await t()
              return (
                a &&
                  this.isCurrent(e) &&
                  (this.pendingPrimaryToggle === n &&
                    (this.primaryPressMode = "shared" === this.primaryPressMode ? "shared-toggle" : "toggle"),
                  (this.pendingGeneration = null),
                  this.callbacks.onPendingChange?.()),
                a
              )
            } finally {
              this.pendingPrimaryToggle === n &&
                ((this.pendingPrimaryToggle = null), null != n.releasedAtMs && this.releasePrimary(n.releasedAtMs))
            }
          }
          release(e) {
            if ("single-tap" === e) {
              ;((this.singleTapPressed = !1), (this.singleTapStartsSession = !1))
              return
            }
            let t = Date.now()
            if (null != this.pendingPrimaryToggle) {
              this.pendingPrimaryToggle.releasedAtMs = this.pendingPrimaryToggle.releasedAtMs ?? t
              return
            }
            this.releasePrimary(t)
          }
          releasePrimary(e) {
            let t = this.primaryPressedAtMs
            if (null == t) return
            this.primaryPressedAtMs = void 0
            let n = this.primaryPressMode
            if (((this.primaryPressMode = "consumed"), "shared-toggle" === n)) {
              ;((this.latchedGeneration = this.generation), (this.lastTapAtMs = e))
              return
            }
            if ("toggle" === n || "consumed" === n) return
            if ("shared" === n && this.hasPendingStart && e - t < 100) {
              ;((this.latchedGeneration = this.generation), (this.lastTapAtMs = e))
              return
            }
            let a = this.hasPendingStart
            if ((this.invalidateGeneration(), a)) (this.cancel(), (this.lastTapAtMs = e - t < 100 ? e : void 0))
            else {
              let e = this.callbacks.getSession()
              e?.mode === "hold" && this.callbacks.stop(e.generation)
            }
          }
          cancelPress(e) {
            if ("single-tap" === e) {
              ;(this.singleTapStartsSession && ((this.singleTapStartsSession = !1), this.cancel()),
                (this.singleTapPressed = !1),
                (this.lastTapAtMs = void 0))
              return
            }
            if ("consumed" === this.primaryPressMode) {
              this.primaryPressedAtMs = void 0
              return
            }
            ;(("toggle" === this.primaryPressMode ||
              "shared-toggle" === this.primaryPressMode ||
              null != this.pendingPrimaryToggle) &&
              this.cancel(),
              (this.primaryPressMode = "consumed"))
            let t = this.generation
            ;(this.invalidateGeneration(), (this.primaryPressedAtMs = void 0), (this.lastTapAtMs = void 0))
            let n = this.callbacks.getSession()
            n?.mode === "hold" && n.generation === t && this.callbacks.cancel()
          }
          cancel() {
            ;(this.invalidateGeneration(), (this.lastTapAtMs = void 0), this.callbacks.cancel())
          }
          reset(e) {
            ;("single-tap" !== e &&
              (this.invalidateGeneration(), (this.primaryPressedAtMs = void 0), (this.primaryPressMode = "consumed")),
              (null == e || "single-tap" === e) && ((this.singleTapPressed = !1), (this.singleTapStartsSession = !1)),
              (this.lastTapAtMs = void 0))
          }
          sessionEnded() {
            ;(null == this.latchedGeneration || this.pendingGeneration !== this.latchedGeneration) &&
              ((this.latchedGeneration = null), (this.lastTapAtMs = void 0))
          }
          invalidateGeneration() {
            ;((this.pendingPrimaryToggle = null),
              (this.generation += 1),
              (this.pendingGeneration = null),
              this.callbacks.onPendingChange?.())
          }
          async start(e, t) {
            let n = ++this.generation
            ;((this.pendingGeneration = n), this.callbacks.onPendingChange?.())
            try {
              if ("hold" === e) {
                await Promise.all([
                  new Promise((e) => setTimeout(e, 100)),
                  this.callbacks.start({ generation: n, mode: e }, t),
                ])
                let a = this.callbacks.getSession()
                this.isCurrent(n) &&
                  a?.mode === "hold" &&
                  a.generation === n &&
                  !a.stopRequested &&
                  (this.latchedGeneration === n ? (a.mode = "toggle") : (this.lastTapAtMs = void 0),
                  this.callbacks.confirm(n))
              } else await this.callbacks.start({ generation: n, mode: e }, t)
            } finally {
              ;(this.pendingGeneration === n && (this.pendingGeneration = null), this.callbacks.onPendingChange?.())
            }
          }
        }
        var nc = n(8302)
        let np = { file: "file-menu", edit: "edit-menu", view: "view-menu", window: "window-menu", help: "help-menu" }
        class nu {
          ttlMs
          maxSize
          entryByKey = new Map()
          constructor(e) {
            ;((this.ttlMs = e.ttlMs), (this.maxSize = e.maxSize ?? 1 / 0))
          }
          set(e, t, n = Date.now()) {
            if (
              (this.pruneExpired(n),
              this.entryByKey.delete(e),
              this.entryByKey.set(e, { value: t, createdAtMs: n }),
              this.entryByKey.size > this.maxSize)
            ) {
              let e = this.entryByKey.keys().next()
              e.done || this.entryByKey.delete(e.value)
            }
          }
          get(e, t = Date.now()) {
            let n = this.entryByKey.get(e)
            if (n) return this.isExpired(n, t) ? void this.entryByKey.delete(e) : n.value
          }
          has(e, t = Date.now()) {
            let n = this.entryByKey.get(e)
            return !!n && (!this.isExpired(n, t) || (this.entryByKey.delete(e), !1))
          }
          delete(e) {
            return this.entryByKey.delete(e)
          }
          clear() {
            this.entryByKey.clear()
          }
          size(e = Date.now()) {
            return (this.pruneExpired(e), this.entryByKey.size)
          }
          pruneExpired(e) {
            for (let [t, n] of this.entryByKey) this.isExpired(n, e) && this.entryByKey.delete(t)
          }
          isExpired(e, t) {
            return t - e.createdAtMs > this.ttlMs
          }
        }
        var nd = n(51944)
        let nm = { outputBytesCap: 16384, timeoutMs: 5e3 }
        async function nf(e, t, n, a) {
          let i = await t.spawn({ args: [n, "-P"], cwd: e, ...nm, signal: a }),
            { code: r, stdout: o } = await (0, nd.SD)(i)
          if (0 !== r) return null
          let s = o.endsWith("\n") ? o.slice(0, -1) : o
          return 0 === s.length ? null : s
        }
        async function nh(e, t) {
          if (!e.startsWith("/") || (await t.platformFamily()) !== "unix") return
          let n = await t.spawn({ args: ["/usr/bin/realpath", e], cwd: "/", ...nm }),
            { code: a, stdout: i } = await (0, nd.SD)(n)
          return 0 === a && i.startsWith("/") && i.endsWith("\n") ? i.slice(0, -1) : void 0
        }
        let ng = new Map()
        async function nv(e, t = {}) {
          let n = ng.get(e) ?? { activeReservations: 0, waiters: [], foregroundAdmissions: 0 }
          ;(ng.set(e, n),
            n.activeReservations >= 4
              ? await new Promise((e) => {
                  n.waiters.push({ startPriority: t.startPriority, resolve: e })
                })
              : (n.activeReservations += 1))
          let a = !1,
            { autoReleaseTimeoutMs: i = 1e3 } = t,
            r = null == i ? null : setTimeout(o, i)
          function o() {
            if (a) return
            ;((a = !0), null != r && clearTimeout(r))
            let t = (function (e) {
              let t = e.waiters.findIndex(({ startPriority: e }) => e?.priority !== "background"),
                n = e.waiters.findIndex(({ startPriority: e }) => e?.priority === "background")
              if (-1 === t || -1 === n) return ((e.foregroundAdmissions = 0), e.waiters.shift())
              let a = e.foregroundAdmissions < 3 ? t : n
              return ((e.foregroundAdmissions = a === t ? e.foregroundAdmissions + 1 : 0), e.waiters.splice(a, 1)[0])
            })(n)
            null != t ? t.resolve() : ((n.activeReservations -= 1), 0 === n.activeReservations && ng.delete(e))
          }
          return o
        }
        class nx {
          available
          pending = []
          ready = []
          constructor(e) {
            this.available = e
          }
          acquire() {
            return this.available > 0
              ? ((this.available -= 1), Promise.resolve())
              : new Promise((e) => this.pending.push(e))
          }
          release() {
            0 === this.ready.length &&
              this.pending.length > 0 &&
              ((this.ready = this.pending.reverse()), (this.pending = []))
            let e = this.ready.pop()
            null == e ? (this.available += 1) : e()
          }
        }
        class nb {
          currentPriority
          promotionCallbacks = new Set()
          constructor(e) {
            this.currentPriority = e
          }
          get priority() {
            return this.currentPriority
          }
          promote() {
            if ("foreground" === this.currentPriority) return
            this.currentPriority = "foreground"
            let e = [...this.promotionCallbacks]
            for (let t of (this.promotionCallbacks.clear(), e)) t()
          }
          onPromotion(e) {
            return "foreground" === this.currentPriority
              ? (e(), () => {})
              : (this.promotionCallbacks.add(e),
                () => {
                  this.promotionCallbacks.delete(e)
                })
          }
        }
        var ny = n(16109)
        let nw = "/flora/browser/form-fill",
          nk = "X-Codex-Surface",
          n_ = "X-OpenAI-Attach-Auth",
          nP = "X-OpenAI-Attach-Desktop-Surface"
        function nI(e, t) {
          let n = e.replace(/\/+$/, ""),
            a = t.replace(/^\/+/, "")
          return (
            a.startsWith("public-api/") &&
              (n.endsWith("/backend-api")
                ? (n = n.slice(0, -12))
                : n.endsWith("/api") && ((n = n.slice(0, -4)), (a = a.replace(/^public-api\//, "public/")))),
            `${n}/${a}`
          )
        }
        function nj(e) {
          return nE(e, n_)
        }
        function nA(e) {
          return nE(e, nP)
        }
        function nS(e) {
          return nE(e, "X-OpenAI-Attach-DeviceCheck-Token")
        }
        function nO(e) {
          let t = nz(e, "X-OpenAI-Expected-Account-Id")
          if (null == t) return
          let n = e[t]
          return (delete e[t], n)
        }
        function nE(e, t) {
          let n = nz(e, t)
          if (null == n) return !1
          let a = e[n]
          return (delete e[n], "0" !== a && "false" !== a.toLowerCase())
        }
        function nT(e, t) {
          return null != nz(e, t)
        }
        function nz(e, t) {
          let n = t.toLowerCase()
          return Object.keys(e).find((e) => e.toLowerCase() === n)
        }
        let nC = o.Ikc({
          code: o.k5n([
            "EAI_AGAIN",
            "EADDRINFO",
            "ECONNREFUSED",
            "ECONNRESET",
            "EHOSTUNREACH",
            "ENETUNREACH",
            "ENOTFOUND",
            "ETIMEDOUT",
            "UND_ERR_CONNECT_TIMEOUT",
            "UND_ERR_HEADERS_TIMEOUT",
            "UND_ERR_BODY_TIMEOUT",
            "UND_ERR_SOCKET",
          ]),
        })
        function nR(e) {
          if (
            !(!(e instanceof Error) || "AbortError" === e.name || e.message.startsWith("net::ERR_ABORTED")) &&
            (e.message.startsWith("net::") ||
              "NetworkError" === e.name ||
              (e instanceof TypeError &&
                /^(?:failed to fetch|fetch failed|load failed|networkerror when attempting to fetch resource\.?|network error)$/i.test(
                  e.message,
                )) ||
              nC.safeParse(e).success ||
              nC.safeParse(e.cause).success)
          )
            return "network"
        }
        let n$ = o.KCZ([
          o.Ikc({ error_code: o.YjP().min(1) }).transform(({ error_code: e }) => e),
          o.Ikc({ file_parse_error_code: o.YjP().min(1) }).transform(({ file_parse_error_code: e }) => e),
          o.Ikc({ code: o.YjP().min(1) }).transform(({ code: e }) => e),
        ])
        function nM(e) {
          let t =
              (function (e) {
                if (null == e) return
                let t = Number(e),
                  n = Number.isFinite(t) ? Date.now() + 1e3 * Math.max(0, t) : Date.parse(e)
                return Number.isFinite(n) ? n : void 0
              })(e.get("retry-after")) ?? 0 / 0,
            n = Number(e.get("x-ratelimit-reset")),
            a = Math.max(
              ...[t, "0" === e.get("x-ratelimit-remaining") && n > 0 ? 1e3 * n : 0 / 0].filter(Number.isFinite),
            )
          return Number.isFinite(a) ? a : void 0
        }
        let nY = o.KCZ([
          o.Ikc({ extra: n$ }).transform(({ extra: e }) => e),
          n$,
          o.Ikc({ error: n$ }).transform(({ error: e }) => e),
          o.Ikc({ detail: n$ }).transform(({ detail: e }) => e),
          o.Ikc({ detail: o.Ikc({ error: n$ }) }).transform(({ detail: e }) => e.error),
          o.Ikc({ error: o.Ikc({ error: n$ }) }).transform(({ error: e }) => e.error),
        ])
        function nD(e) {
          if (null != e)
            try {
              let t = nY.safeParse(JSON.parse(e))
              return t.success ? t.data : void 0
            } catch {
              return
            }
        }
        o.Ikc({
          can_retry: o
            .zMY()
            .optional()
            .catch(void 0),
          detail: o
            .Ikc({
              can_retry: o
                .zMY()
                .optional()
                .catch(void 0),
            })
            .optional()
            .catch(void 0),
        })
        var nN = n(87612),
          nL = n(61330)
        function nU(e, t, n) {
          return null != n ? `${e}\0project\0${n}` : `${e}\0${(0, nL.R0)((0, nL.kq)(t))}`
        }
        let nF = "codex-first-party-plugin-authenticated-chatgpt-"
        function nq(e) {
          return e
        }
        function nW(e) {
          return e
        }
        function nZ(e) {
          return e
        }
        function nB(e) {
          return e
        }
        function nH(e) {
          return e
        }
        function nK(e) {
          return e
        }
        function nJ(e) {
          return e
        }
        let nG = {
          LAST_COMPLETED_ONBOARDING: "last_completed_onboarding",
          PROJECTLESS_ONBOARDING_COMPLETED: "electron:onboarding-projectless-completed",
          BEDROCK_GOVCLOUD_ACKNOWLEDGED: "electron:bedrock-govcloud-guidance-acknowledged",
          CTRL_TAB_SHORTCUT_NOTICE_SHOWN: "ctrl-tab-shortcut-notice-shown",
          NUMBER_SHORTCUT_NOTICE_SHOWN: "number-shortcut-notice-shown",
          THREAD_SORT_KEY: "thread-sort-key",
        }
        var nV = n(55482)
        function nQ(e, t) {
          return e.hostId === t.hostId && (0, nL.XH)(e.commonDir) === (0, nL.XH)(t.commonDir)
        }
        function nX(e, t, n) {
          return null == n ? e : (t.find((e) => nQ(e, n))?.preference ?? e)
        }
        let n0 = "codex-worktree-creation-preference"
        var n1 = n(90242),
          n2 = n(85172),
          n3 = n(37581),
          n4 = n(41803)
        let n5 = {
            branchPrefix: (0, n4.KF)({
              agentAccess: "read-write",
              default: "codex/",
              description: "Prefix for branches Codex creates",
              key: "git-branch-prefix",
              schema: n3.JV,
            }),
            alwaysForcePush: (0, n4.KF)({
              agentAccess: "read-write",
              default: !1,
              description: "Whether Codex always force-pushes branches",
              key: "git-always-force-push",
              schema: n3.uf,
            }),
            createPullRequestAsDraft: (0, n4.KF)({
              agentAccess: "read-write",
              default: !0,
              description: "Whether Codex creates pull requests as drafts",
              key: "git-create-pull-request-as-draft",
              schema: n3.uf,
            }),
            pullRequestMergeMethod: (0, n4.KF)({
              agentAccess: "read-write",
              default: "merge",
              description: "Preferred pull request merge method",
              key: "git-pull-request-merge-method",
              schema: o.k5n(["merge", "squash"]),
            }),
            pullRequestPollIntervalSeconds: (0, n4.KF)({
              agentAccess: "read-write",
              default: 15,
              description:
                "Minimum interval in seconds for automatic pull request refreshes (15–300). Explicit refreshes remain immediate.",
              key: "git-pr-poll-interval-seconds",
              schema: o.aig().int().min(15).max(300),
            }),
            reviewMode: (0, n4.KF)({
              agentAccess: "read-write",
              default: "full",
              description: "Whether Git Review uses all sources or only recorded Last Turn changes",
              key: "git-review-mode",
              schema: o.k5n(["full", "last-turn-only"]),
            }),
            showSidebarPrIcons: (0, n4.KF)({
              agentAccess: "read-write",
              default: void 0,
              description: "Whether sidebar pull request icons are shown",
              key: "git-show-sidebar-pr-icons",
              schema: n3.uf,
            }),
            worktreeRoot: (0, n4.KF)({
              agentAccess: "read-write",
              default: "",
              description: "Directory where Codex creates managed git worktrees",
              key: "git-worktree-root",
              schema: n3.JV,
            }),
            commitInstructions: (0, n4.KF)({
              agentAccess: "read-only",
              default: "",
              description: "Custom git commit instructions",
              key: "git-commit-instructions",
              schema: n3.JV,
            }),
            pullRequestInstructions: (0, n4.KF)({
              agentAccess: "read-only",
              default: "",
              description: "Custom pull request instructions",
              key: "git-pr-instructions",
              schema: n3.JV,
            }),
          },
          n6 = o.k5n(["ask", "always", "never", "dirty"]),
          n9 = {
            defaultCreationPreference: (0, n4.KF)({
              agentAccess: "read-only",
              default: "ask",
              description:
                "Default for creating managed worktrees for file edits in repositories without a saved preference",
              key: nV.Q2.WORKTREE_DEFAULT_CREATION_PREFERENCE,
              schema: n6,
            }),
            repositoryPreferences: (0, n4.KF)({
              agentAccess: "hidden",
              default: [],
              description: "User-selected worktree permissions for individual repositories on each host",
              key: nV.Q2.WORKTREE_REPOSITORY_PREFERENCES,
              schema: o.YOg(o.rej({ hostId: o.YjP(), commonDir: o.YjP(), root: o.YjP(), preference: n6 })),
            }),
            upstreamRefreshMode: (0, n4.KF)({
              agentAccess: "hidden",
              default: nV.sT,
              description: "How Codex refreshes upstream branches before creating worktrees",
              key: nV.Q2.WORKTREE_UPSTREAM_REFRESH_MODE,
              schema: o.k5n(["never", "best-effort"]),
            }),
            autoCleanupEnabled: (0, n4.KF)({
              agentAccess: "read-write",
              default: !0,
              description: "Whether Codex automatically cleans up old worktrees",
              key: "worktree-auto-cleanup-enabled",
              schema: n3.uf,
            }),
            confirmBeforeDelete: (0, n4.KF)({
              agentAccess: "hidden",
              default: !0,
              description: "Whether to ask before manually deleting a worktree in settings",
              key: nV.Q2.WORKTREE_CONFIRM_BEFORE_DELETE,
              schema: n3.uf,
            }),
            keepCount: (0, n4.KF)({
              agentAccess: "read-write",
              default: 15,
              description: "How many recent worktrees Codex keeps",
              key: "worktree-keep-count",
              schema: o.aig().int().min(1),
            }),
          }
        function n8(e) {
          let t = n5.worktreeRoot.schema.safeParse(e?.[n5.worktreeRoot.key]),
            n = n9.autoCleanupEnabled.schema.safeParse(e?.[n9.autoCleanupEnabled.key]),
            a = n9.keepCount.schema.safeParse(e?.[n9.keepCount.key])
          return {
            worktreesRoot: t.success ? t.data : n5.worktreeRoot.default,
            autoCleanupEnabled: n.success ? n.data : n9.autoCleanupEnabled.default,
            keepCount: a.success ? a.data : n9.keepCount.default,
          }
        }
        var n7 = n(81189)
        let ae = new Set(["ENOENT", "ENOTDIR"])
        function at(e, t) {
          if (!(e instanceof Error)) return !1
          if ("code" in e && ae.has(e.code)) return !0
          let n = null == t ? e.message : e.message.replaceAll(t, ""),
            a = /\(os error (\d+)\)$/.exec(n)
          if (null != a) return "2" === a[1] || "3" === a[1] || n.endsWith("Not a directory (os error 20)")
          let i = /(?:^|: )(E[A-Z0-9]+): /.exec(n)
          return null != i
            ? ae.has(i[1])
            : n.includes("ENOENT") ||
                n.includes("No such file or directory") ||
                n.includes("Not a directory") ||
                /\(os error (?:2|3)\)/.test(n)
        }
        function an(e) {
          let t = /^https:\/\/chatgpt\.com\/api\/library\/files\/([^/]+)\/download$/.exec(e),
            n = t?.[1]
          return t?.[0] === e && null != n && /^libfile[-_][A-Za-z0-9_-]+$/.exec(n)?.[0] === n ? n : null
        }
        let aa = { es: "es-419", fr: "fr-FR", pt: "pt-BR", zh: "zh-CN" },
          ai = "environment.toml",
          ar = "codex.localEnvironmentConfigPath",
          ao = "__none__",
          as = "CODEX_SOURCE_TREE_PATH",
          al = "CODEX_WORKTREE_PATH",
          ac = o.Ikc({
            name: o.YjP(),
            icon: o.k5n(["tool", "run", "debug", "test"]).nullable().catch(null),
            command: o.YjP(),
            platform: o.k5n(["darwin", "linux", "win32"]).optional(),
          }),
          ap = o.Ikc({ script: o.YjP() }),
          au = o.Ikc({ script: o.YjP(), darwin: ap.optional(), linux: ap.optional(), win32: ap.optional() }),
          ad = o.Ikc({
            version: o.aig().int().min(1).default(1),
            name: o.YjP(),
            setup: au,
            cleanup: au.optional(),
            actions: o.YOg(ac).optional(),
          })
        var am = n(22677)
        let af = [
          "notifications/events/active",
          "notifications/events/error",
          "notifications/events/event",
          "notifications/events/heartbeat",
          "notifications/events/terminated",
        ]
        o.Ikc({ httpStatusCode: o.aig().nullable() })
        let ah = am.a,
          ag = new Set(["turn/moderationMetadata", "process/outputDelta", "process/exited", "fs/changed"])
        Object.entries(ah)
          .filter(([e, t]) => !t && !ag.has(e))
          .map(([e]) => e)
        let av = o.Ikc({ code: o.aig().optional(), jsonRpcCode: o.aig().optional(), message: o.YjP().optional() })
        function ax(e, t) {
          let n = av.safeParse(e)
          if (!n.success) return !1
          if (-32601 === n.data.code || -32601 === n.data.jsonRpcCode) return !0
          let a = n.data.message?.toLowerCase()
          return (
            a?.includes("method not found") ||
            (a?.includes("unknown method") && a.includes(t.toLowerCase())) ||
            (a?.includes("unknown variant") && a.includes(t.toLowerCase())) ||
            !1
          )
        }
        function ab(e) {
          let t = e
              ? o
                  .YjP()
                  .min(1)
                  .optional()
                  .catch(void 0)
              : o.YjP().optional(),
            n = o.Ikc({ resourceUri: t }).optional()
          return o.Ikc({ "openai/outputTemplate": t.nullable(), ui: e ? n.catch(void 0) : n, "ui/resourceUri": t })
        }
        ;(ab(!1), ab(!0))
        let ay = "codex-mcp-app-sandbox",
          aw = "codex-sandbox"
        function ak(e) {
          if ("string" != typeof e) return null
          let t = e.replace(/^persist:/, "")
          if (!t.startsWith(`${ay}:`)) return null
          let n = t.slice(ay.length + 1)
          return n.length > 0 ? n : null
        }
        let a_ = o.k5n(["read", "created", "updated"]),
          aP = o.Ikc({
            id: o.YjP().min(1),
            url: o.YjP().refine(function (e) {
              try {
                let t = new URL(e)
                return ("http:" === t.protocol || "https:" === t.protocol) && "" === t.username && "" === t.password
              } catch {
                return !1
              }
            }),
            title: o.YjP().optional(),
            mimeType: o.YjP().optional(),
            activities: o.YOg(a_).min(1),
          })
        ;(o.Ikc({ "openai/resourceActivities": o.Ikc({ version: o.euz(1), resources: o.YOg(aP) }).loose() }).loose(),
          o.Ikc({ "openai/resourceActivities": o.L5J().optional() }).loose())
        let aI = o.Ikc({
            src: o
              .OZ5({ protocol: /^https$/u })
              .max(16384)
              .refine((e) => {
                let t = new URL(e)
                return "" === t.username && "" === t.password
              }),
            theme: o.k5n(["light", "dark"]).optional(),
          }),
          aj = o
            .YOg(
              o.Ikc({
                id: o.YjP().regex(/^[a-z][a-z0-9_-]{0,63}$/u),
                title: o
                  .YjP()
                  .refine((e) => !/\p{Cc}/u.test(e))
                  .pipe(o.YjP().trim().min(1).max(128)),
                icons: o
                  .YOg(aI)
                  .max(8)
                  .optional()
                  .catch(void 0),
                accessMode: o.k5n(["included", "connected", "web"]).optional(),
                delayMinutes: o.aig().int().min(1).max(10080).optional(),
              }),
            )
            .max(32)
        o.Ikc({ "openai/toolSource": o.Ikc({ version: o.euz(1), providers: aj }) })
        var aA = n(29176),
          aS = n(30329)
        n(86439)
        let aO = "~"
        var aE = n(40818)
        function aT(e) {
          return "darwin" === e ? "macOS" : "linux" === e ? "Linux" : "win32" === e ? "Windows" : void 0
        }
        function az(e) {
          return e
        }
        let aC = o.Ikc({ accountId: o.YjP().min(1), userId: o.YjP().min(1), projectId: o.YjP().startsWith("g-p-") }),
          aR = o.Ikc({ accountId: o.YjP().min(1), userId: o.YjP().min(1), state: o.euz("requested") }),
          a$ = o.Ikc({
            id: o.YjP().transform(az),
            name: o.YjP(),
            rootPaths: o.YOg(o.YjP()),
            chatGptBacking: aC.optional().catch(void 0),
            retiredChatGptBacking: aC.optional().catch(void 0),
            chatGptBackingCreation: aR.optional().catch(void 0),
            chatGptBackingRecoveryPending: o
              .euz(!0)
              .optional()
              .catch(void 0),
            createdAt: o.aig(),
            updatedAt: o.aig(),
          }),
          aM = o.g1P(o.YjP(), o.L5J())
        function aY(e) {
          let t = aM.safeParse(e).data
          return null == t
            ? {}
            : Object.fromEntries(
                Object.entries(t).flatMap(([e, t]) => {
                  let n = a$.safeParse(t).data
                  return null == n ? [] : [[e, n]]
                }),
              )
        }
        function aD({ localProjects: e, projectId: t, project: n }) {
          let a = { ...e }
          return (null == n ? delete a[t] : (a[t] = n), a)
        }
        function aN(e) {
          return e?.[0] ?? null
        }
        function aL(e, t) {
          let n = 1 === e.rootPaths.length
          if (n !== (1 === t.rootPaths.length)) return n
          let a = (0, nL.JH)(e.rootPaths[0] ?? "") === (0, nL.JH)(e.rootPath)
          return a !== ((0, nL.JH)(t.rootPaths[0] ?? "") === (0, nL.JH)(t.rootPath))
            ? a
            : e.createdAt !== t.createdAt
              ? e.createdAt < t.createdAt
              : e.projectId.localeCompare(t.projectId) > 0
        }
        function aU(e) {
          let t = e.trim()
          if (!t || /^[a-zA-Z]:[\\/]/.test(t)) return null
          if (t.includes("://")) {
            let e = (function (e) {
              try {
                let t = new URL(e),
                  n = t.hostname
                if (!n) return { success: !1 }
                let a = t.pathname.replace(/^\/+/, "").replace(/\.git$/i, ""),
                  i = aF(a)
                if (!i.success) return { success: !1 }
                return { success: !0, value: { host: n, ...i.value } }
              } catch {
                return { success: !1 }
              }
            })(t)
            return e.success ? e.value : null
          }
          let n = (function (e) {
            if (e.includes("://")) return { success: !1 }
            let t = /^(?:[^@]+@)?(\[[^\]]+\]|[^:]+):(.+)$/.exec(e)
            if (!t) return { success: !1 }
            let n = t[1]?.trim(),
              a = t[2]
                ?.trim()
                .replace(/^\/+/, "")
                .replace(/\.git$/i, "")
            if (!n || !a) return { success: !1 }
            let i = aF(a)
            return i.success ? { success: !0, value: { host: n, ...i.value } } : { success: !1 }
          })(t)
          return n.success ? n.value : null
        }
        function aF(e) {
          let t = e.split("/").filter((e) => e.length > 0)
          if (t.length < 2) return { success: !1 }
          let n = t[t.length - 1]
          if (!n) return { success: !1 }
          let a = t.slice(0, -1).join("/")
          return a ? { success: !0, value: { owner: a, repo: n } } : { success: !1 }
        }
        function aq({ threadIds: e, threadId: t, beforeThreadId: n }) {
          let a = e.filter((e) => e !== t)
          if (null == n) return [...a, t]
          let i = a.indexOf(n)
          return -1 === i ? [...a, t] : [...a.slice(0, i), t, ...a.slice(i)]
        }
        ;(n(65972), n(8857))
        var aW = n(3031),
          aZ = n(7049)
        let aB = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"],
          aH = new Map(aB.map((e, t) => [e, t])),
          aK = aB.slice(0, 5),
          aJ = /^[a-z0-9]+(?:-[a-z0-9]+)*\.json$/,
          aG = o.k5n(aB),
          aV = o.YjP().regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/),
          aQ = o
            .YOg(aG)
            .min(1)
            .refine((e) => new Set(e).size === e.length),
          aX = o.Ikc({ type: o.euz("hourly"), intervalHours: o.aig().int().positive(), days: aQ.optional() }).strict(),
          a0 = o.Ikc({ type: o.euz("daily"), time: aV }).strict(),
          a1 = o.Ikc({ type: o.euz("weekdays"), time: aV }).strict(),
          a2 = o.Ikc({ type: o.euz("weekly"), days: aQ, time: aV }).strict(),
          a3 = o.gMt("type", [aX, a0, a1, a2]),
          a4 = o.Ikc({ name: o.YjP().trim().min(1), prompt: o.YjP().trim().min(1), schedule: a3 }).strict()
        function a5(e, t) {
          if (!aJ.test(e)) return null
          let n = a4.safeParse(t)
          return n.success
            ? {
                key: e.slice(0, -5),
                name: n.data.name,
                prompt: n.data.prompt,
                rrule: (function (e) {
                  switch (e.type) {
                    case "hourly":
                      return `RRULE:FREQ=HOURLY;INTERVAL=${e.intervalHours};BYMINUTE=0;BYDAY=${a9(e.days ?? Array.from(aB))}`
                    case "daily":
                      return a6(e.time, Array.from(aB))
                    case "weekdays":
                      return a6(e.time, Array.from(aK))
                    case "weekly":
                      return a6(e.time, e.days)
                  }
                })(n.data.schedule),
              }
            : null
        }
        function a6(e, t) {
          let [n, a] = e.split(":").map(Number)
          return `RRULE:FREQ=WEEKLY;BYHOUR=${n};BYMINUTE=${a};BYDAY=${a9(t)}`
        }
        function a9(e) {
          return [...e].sort((e, t) => (aH.get(e) ?? 0) - (aH.get(t) ?? 0)).join(",")
        }
        function a8(e) {
          switch (e) {
            case e0.Dev:
              return "Dev"
            case e0.Agent:
              return "Agent"
            case e0.Nightly:
              return "Nightly"
            case e0.InternalAlpha:
              return "Alpha"
            case e0.PublicBeta:
              return "Beta"
            case e0.Prod:
              return null
          }
        }
        function a7(e) {
          let t = a8(e)
          return null == t ? "ChatGPT" : `ChatGPT (${t})`
        }
        let ie = o.k5n(["black", "blue", "green", "orange", "pink", "purple", "red", "yellow"]),
          it = o.k5n([
            "folder",
            "currency-dollar",
            "book",
            "graduation-cap",
            "edit",
            "writing",
            "function",
            "terminal",
            "music",
            "popcorn",
            "customize",
            "palette",
            "stethoscope",
            "health",
            "lotus",
            "suitcase",
            "bar-chart",
            "kettlebell",
            "dumbbell",
            "logs",
            "scale",
            "desk-globe",
            "plane",
            "globe",
            "wrench",
            "paw",
            "flask",
            "brain",
            "heart",
            "plant",
          ]),
          ia = {
            "balancing-scale": "scale",
            building: "folder",
            bug: "folder",
            cat: "paw",
            code: "function",
            "code-brackets": "function",
            cube: "folder",
            gift: "folder",
            "globe-spin": "desk-globe",
            graduation: "graduation-cap",
            lightbulb: "brain",
            lightning: "folder",
            lite: "lotus",
            network: "brain",
            notebook: "logs",
            openai: "folder",
            pencil: "edit",
            pens: "customize",
            pointer: "folder",
            presentation: "bar-chart",
            puzzle: "customize",
            search: "globe",
            star: "folder",
            target: "folder",
            waveform: "music",
          },
          ii = o.KCZ([
            o.Ikc({
              kind: o.euz("icon"),
              icon: o.vkY((e) => {
                var t
                let n
                return (
                  (t = e),
                  (null == (n = o.YjP().safeParse(t).data) ? null : (it.safeParse(n).data ?? ia[n] ?? null)) ?? e
                )
              }, it),
            }),
            o.Ikc({ kind: o.euz("emoji"), emoji: o.YjP().min(1) }),
          ]),
          ir = o.Ikc({ color: ie, marker: ii }),
          io = o.g1P(o.YjP(), ir)
        function is(e) {
          return io.safeParse(e).data ?? {}
        }
        function il({ projectAppearances: e, projectId: t, appearance: n }) {
          let a = { ...e }
          return (null == n ? delete a[t] : (a[t] = n), a)
        }
        let ic = o.Ikc({ kind: o.euz("local"), path: o.YjP(), label: o.YjP().optional() }),
          ip = o.g1P(o.YjP(), o.YOg(ic))
        function iu(e) {
          return ip.safeParse(e).data ?? {}
        }
        let id = o.Ikc({ kind: o.euz("local"), path: o.YjP(), label: o.YjP().optional() }),
          im = o.g1P(o.YjP(), o.YOg(id))
        function ih(e) {
          return im.safeParse(e).data ?? {}
        }
        function ig({ cwd: e, projectlessOutputDirectory: t, projectlessWorkspaceBrowserRoot: n }) {
          let a = t ?? n ?? e
          return [
            "### Projectless Chat",
            "This projectless thread starts in a generated directory under the user's Documents/Codex folder.",
            "The generated directory name is only a filesystem identifier. Do not infer the user's language, locale, or preferences from its name or path, even if it resembles a language code such as 'ru'.",
            "Prefer answering inline in chat unless using local files would make the result more useful.",
            ...(null != t && t !== e
              ? [
                  `Use work/ for intermediate files, scratch analysis, scripts, drafts, and temporary assets. Use ${a} only for user-facing deliverables that should appear as outputs.`,
                  `When referring to saved deliverables in the final response, link only files from ${a}.`,
                ]
              : [
                  `When using local files for this projectless thread, write scratch files, drafts, generated assets, and other outputs under ${a}.`,
                ]),
            "Do not write directly in the home directory unless the user explicitly asks.",
          ].join("\n")
        }
        function iv({ codexHome: e, path: t }) {
          let n = e.replace(/[\\/]+$/, "")
          return ".codex" === t.basename(n) ? t.dirname(n) : n
        }
        function ix({ configuredWorkspaceRoot: e, homeDirectory: t, path: n }) {
          return e ?? n.join(t, "Documents", "Codex")
        }
        async function ib({
          configuredWorkspaceRoot: e,
          createSplitDirectories: t,
          directoryName: n,
          fileSystem: a,
          homeDirectory: i,
          path: r,
          prompt: o,
          uniqueDirectoryNameSuffix: s = ik,
        }) {
          var l
          let c,
            p,
            u,
            d = await (async function ({ configuredWorkspaceRoot: e, fileSystem: t, homeDirectory: n, path: a }) {
              let i = ix({ configuredWorkspaceRoot: e, homeDirectory: n, path: a })
              return (await t.createDirectory({ path: i, recursive: !0 }), await iy(t, i), i)
            })({ configuredWorkspaceRoot: e, fileSystem: a, homeDirectory: i, path: r }),
            m = (function ({ date: e = new Date(), path: t, workspaceRoot: n }) {
              var a
              let i, r
              return t.join(
                n,
                ((i = String((a = e).getMonth() + 1).padStart(2, "0")),
                (r = String(a.getDate()).padStart(2, "0")),
                `${a.getFullYear()}-${i}-${r}`),
              )
            })({ path: r, workspaceRoot: d }),
            f =
              ((c = "object" == typeof (l = { directoryName: n, prompt: o }) && null != l ? l.directoryName : null),
              (p = null != l ? l.prompt : l),
              null == (u = (c ?? p)?.toLowerCase().match(/[a-z0-9]+/g)) || 0 === u.length
                ? "new-chat"
                : (null == c ? u.slice(0, 6) : u).join("-").slice(0, 80))
          ;(await a.createDirectory({ path: m, recursive: !0 }), await iy(a, m))
          for (let e = 0; e < 100; e += 1) {
            let n = await iw({
              createSplitDirectories: t,
              dateDirectory: m,
              fileSystem: a,
              path: r,
              threadDirectoryName: 0 === e ? f : `${f}-${e + 1}`,
              workspaceRoot: d,
            })
            if (null != n) return n
          }
          for (let e = 0; e < 5; e += 1) {
            let e = await iw({
              createSplitDirectories: t,
              dateDirectory: m,
              fileSystem: a,
              path: r,
              threadDirectoryName: `${f}-${s()}`,
              workspaceRoot: d,
            })
            if (null != e) return e
          }
          throw Error("Unable to create a unique projectless thread directory")
        }
        async function iy(e, t) {
          let n = await e.getMetadata(t)
          if (!0 !== n.isDirectory || !0 === n.isSymlink)
            throw Error("Projectless thread directory must be a real directory")
        }
        async function iw({
          createSplitDirectories: e,
          dateDirectory: t,
          fileSystem: n,
          path: a,
          threadDirectoryName: i,
          workspaceRoot: r,
        }) {
          let o = a.join(t, i),
            s = e ? a.join(o, "outputs") : o
          try {
            await n.createDirectory({ path: o, recursive: !1 })
          } catch (e) {
            if (
              ("object" == typeof e && null != e && "code" in e && "EEXIST" !== e.code) ||
              !(await (async function (e, t) {
                try {
                  return (await e.getMetadata(t), !0)
                } catch {
                  return !1
                }
              })(n, o))
            )
              throw e
            return null
          }
          if (e)
            try {
              await Promise.all([
                n.createDirectory({ path: s, recursive: !1 }),
                n.createDirectory({ path: a.join(o, "work"), recursive: !1 }),
              ])
            } catch {
              return { cwd: o, outputDirectory: o, workspaceRoot: r }
            }
          return { cwd: o, outputDirectory: s, workspaceRoot: r }
        }
        function ik() {
          return "u" > typeof crypto && "function" == typeof crypto.randomUUID
            ? crypto.randomUUID()
            : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
        }
        let i_ = o.k5n(["approved", "changes_requested", "merged", "opened"]),
          iP = o.Ikc({
            actorLogin: o.YjP().nullable(),
            createdAt: o.YjP(),
            event: i_,
            id: o.YjP(),
            type: o.euz("event"),
            url: o.YjP().nullable(),
          }),
          iI = o.k5n(["comment", "review", "review_comment"]),
          ij = {
            viewerCanReact: o.zMY().optional(),
            reactions: o
              .YOg(
                o.Ikc({
                  content: o.YjP(),
                  emoji: o.YjP().optional(),
                  count: o.aig(),
                  viewerHasReacted: o.zMY(),
                  reactors: o.YOg(o.YjP()).nullish(),
                }),
              )
              .optional(),
          },
          iA = o.Ikc({
            ...ij,
            authorAvatarUrl: o.YjP().nullable().optional(),
            authorLogin: o.YjP().nullable(),
            body: o.YjP(),
            createdAt: o.YjP(),
            id: o.YjP(),
            nodeId: o.YjP().optional(),
            isPending: o.zMY().optional(),
            isDeleted: o.zMY().optional(),
            viewerCanReply: o.zMY().optional(),
            pendingReviewId: o.YjP().optional(),
            rawBody: o.YjP().optional(),
            url: o.YjP().nullable(),
            viewerCanDelete: o.zMY().optional(),
            viewerCanUpdate: o.zMY().optional(),
          }),
          iS = o.Ikc({
            ...ij,
            authorAvatarUrl: o.YjP().nullable().optional(),
            authorLogin: o.YjP().nullable(),
            authorType: o.YjP().optional(),
            body: o.YjP(),
            createdAt: o.YjP(),
            diffHunk: o.YjP().nullable().optional(),
            diffSnapshot: o
              .Ikc({
                positionType: o.k5n(["text", "image", "file"]),
                baseRevision: o.YjP().nullable().optional(),
                mergeBaseRevision: o.YjP().nullable().optional(),
                headRevision: o.YjP().nullable().optional(),
                basePath: o.YjP(),
                headPath: o.YjP(),
              })
              .nullable()
              .optional(),
            id: o.YjP(),
            inReplyToId: o.YjP().nullable().optional(),
            isResolved: o.zMY().optional(),
            isMinimized: o.zMY().optional(),
            isResolvable: o.zMY().optional(),
            isSystem: o.zMY().optional(),
            line: o.aig().nullable().optional(),
            nodeId: o.YjP().optional(),
            isPending: o.zMY().optional(),
            isDeleted: o.zMY().optional(),
            viewerCanReply: o.zMY().optional(),
            pendingReviewId: o.YjP().optional(),
            originalLine: o.aig().nullable().optional(),
            originalStartLine: o.aig().nullable().optional(),
            path: o.YjP().nullable().optional(),
            rawBody: o.YjP().optional(),
            replies: o.YOg(iA).optional(),
            reviewThreadId: o.YjP().nullable().optional(),
            side: o.k5n(["left", "right"]).nullable().optional(),
            startLine: o.aig().nullable().optional(),
            startSide: o.k5n(["left", "right"]).nullable().optional(),
            type: iI,
            url: o.YjP().nullable(),
            viewerCanDelete: o.zMY().optional(),
            viewerCanResolve: o.zMY().optional(),
            viewerCanUnresolve: o.zMY().optional(),
            viewerCanUpdate: o.zMY().optional(),
          }),
          iO = o.Ikc({
            authorLogin: o.YjP().nullable(),
            authorName: o.YjP().nullable(),
            committedDate: o.YjP(),
            messageHeadline: o.YjP(),
            oid: o.YjP(),
            url: o.YjP().nullable(),
          }),
          iE = o.Ikc({ commits: o.YOg(iO), createdAt: o.YjP(), id: o.YjP(), type: o.euz("commit_group") })
        ;(o.Ikc({ comments: o.YOg(iS), commits: o.YOg(iO) }),
          o.KCZ([iP, iS, iE]),
          o.Ikc({ id: o.YjP(), isStandalone: o.zMY(), comments: o.YOg(iS) }),
          o.Ikc({
            commentId: o.YjP(),
            canUpdate: o.zMY().optional(),
            canDelete: o.zMY().optional(),
            canResolve: o.zMY().optional(),
          }),
          o.Ikc({ login: o.YjP(), avatarUrl: o.YjP().nullable() }),
          o.Ikc({
            authorLogin: o.YjP().nullable(),
            createdAt: o.YjP().nullable(),
            mergedAt: o.YjP().nullable(),
            mergeUserLogin: o.YjP().nullable(),
          }))
        let iT = o.k5n(["user", "team"]),
          iz = o.Ikc({ kind: iT, id: o.YjP() })
        function iC({ buildFlavor: e, isDev: t }) {
          return t || e0.isInternal(e)
        }
        o.Ikc({
          key: o.gMt("type", [
            o.Ikc({ type: o.euz("principal"), principal: iz }),
            o.Ikc({ type: o.euz("imported"), kind: o.k5n(["user", "team", "unknown"]), displayId: o.YjP() }),
          ]),
          name: o.YjP().optional(),
          handle: o.YjP().optional(),
          avatarUrl: o.YjP().optional(),
          decision: o.k5n(["approved", "changes_requested"]).nullable(),
          approvedOnPreviousRevision: o.zMY().optional(),
          commented: o.zMY(),
          isViewer: o.zMY(),
          importedPending: o.zMY(),
          required: o.zMY().optional(),
          nativeAddTarget: iz.optional(),
          nativeRemoveTarget: iz.optional(),
        })
        let iR = o.aig().nonnegative()
        o.Ikc({
          duration_ms: iR,
          js_sample_records: iR,
          js_sample_timestamps: iR,
          js_self_profiling_available: o.zMY().optional(),
          native_trace_join_offset_ms: iR.optional(),
          forced_layout_ms: iR.optional(),
          long_frames: iR.optional(),
          long_tasks: iR.optional(),
          scroll_events: iR,
          worst_input_delay_ms: iR.optional(),
          worst_input_processing_ms: iR.optional(),
          worst_input_presentation_ms: iR.optional(),
          worst_input_ms: iR.optional(),
          frame_cadence_fps: iR.optional(),
          worst_frame_gap_ms: iR,
          cls: iR.optional(),
          heap_change_bytes: o.aig().optional(),
          maitai_writes: iR.optional(),
          maitai_changes: iR.optional(),
          layout_read_candidates: iR.optional(),
          overlapping_layout_reads: iR.optional(),
        })
        var i$ = n(57118),
          iM = n.n(i$)
        function iY(e, t) {
          switch (t.type) {
            case "created": {
              let n = e.entries.findIndex((e) => "item" === e.type && e.id === t.previousItemId),
                a = -1 === n ? e.entries.length : n + 1
              return {
                entries: [
                  ...e.entries.slice(0, a),
                  { type: "item", completed: !1, id: t.item.id, role: t.item.role, text: "" },
                  ...e.entries.slice(a),
                ],
              }
            }
            case "delta":
              return {
                entries: e.entries.map((e) =>
                  "item" === e.type && e.id === t.itemId ? { ...e, text: `${e.text}${t.delta}` } : e,
                ),
              }
            case "done":
              return {
                entries: e.entries.map((e) =>
                  "item" === e.type && e.id === t.itemId ? { ...e, completed: !0, text: t.text } : e,
                ),
              }
          }
        }
        let iD = [
          "aha",
          "alright",
          "gotcha",
          "hm",
          "hmm",
          "mhm",
          "mm",
          "mm hmm",
          "okay",
          "ok",
          "right",
          "sure",
          "uh huh",
          "yeah",
          "yep",
          "yes",
        ]
        class iN {
          itemIdPrefix
          assistantAcknowledgmentAwaitingFinal = !1
          foregroundRole = null
          lastCreatedItemId = null
          lastDeltaAtMs = { assistant: null, user: null }
          nextItemNumber = 1
          openItems = { assistant: null, user: null }
          pendingAssistantText = null
          reopenableRole = null
          constructor(e = "local-transcript") {
            this.itemIdPrefix = e
          }
          addDelta(e, t, n) {
            let a = this.lastDeltaAtMs[e]
            switch (((this.lastDeltaAtMs[e] = n), e)) {
              case "assistant":
                return ((this.assistantAcknowledgmentAwaitingFinal = !1), this.addAssistantDelta(t, n, a))
              case "user":
                return (this.suppressPendingAssistantAcknowledgment(), this.appendOrStartItem("user", t, n, a))
            }
          }
          complete(e, t, n) {
            switch (((this.lastDeltaAtMs[e] = n), e)) {
              case "assistant": {
                let e = this.assistantAcknowledgmentAwaitingFinal || null != this.pendingAssistantText
                if (((this.assistantAcknowledgmentAwaitingFinal = !1), (this.pendingAssistantText = null), e)) {
                  var a
                  if (((a = t), iD.includes(iU(a)))) return []
                  return this.startItem("assistant", t, !0, n).events
                }
                return this.completeItem("assistant", t, n)
              }
              case "user":
                return (this.suppressPendingAssistantAcknowledgment(), this.completeItem("user", t, n))
            }
          }
          suppressPendingAssistantAcknowledgment() {
            null != this.pendingAssistantText &&
              ((this.assistantAcknowledgmentAwaitingFinal = !0), (this.pendingAssistantText = null))
          }
          close() {
            this.suppressPendingAssistantAcknowledgment()
            let e = [...this.finishOpenItem("user"), ...this.finishOpenItem("assistant")]
            return (
              (this.foregroundRole = null),
              (this.lastCreatedItemId = null),
              (this.lastDeltaAtMs = { assistant: null, user: null }),
              (this.reopenableRole = null),
              e
            )
          }
          addAssistantDelta(e, t, n) {
            if (this.canAppendInterruptionTail("assistant", t, n)) return this.appendOrStartItem("assistant", e, t, n)
            if (null != this.pendingAssistantText) {
              if (((this.pendingAssistantText += e), iL(this.pendingAssistantText))) return []
              let a = this.pendingAssistantText
              return ((this.pendingAssistantText = null), this.appendOrStartItem("assistant", a, t, n))
            }
            return "assistant" !== this.foregroundRole && iL(e)
              ? ((this.pendingAssistantText = e), [])
              : this.appendOrStartItem("assistant", e, t, n)
          }
          appendOrStartItem(e, t, n, a) {
            let i = this.openItems[e]
            return null != i && (this.foregroundRole === e || this.canAppendInterruptionTail(e, n, a))
              ? ((i.text += t), [{ type: "delta", itemId: i.id, delta: t }])
              : this.startItem(e, t, !1, n).events
          }
          canAppendInterruptionTail(e, t, n) {
            return this.reopenableRole === e && null != n && t - n <= 1e3
          }
          completeItem(e, t, n) {
            let a = this.openItems[e]
            return null == a
              ? this.startItem(e, t, !0, n).events
              : ((a.text = t),
                (this.openItems[e] = null),
                this.reopenableRole === e && (this.reopenableRole = null),
                [{ type: "done", itemId: a.id, text: t }])
          }
          startItem(e, t, n, a) {
            let i = this.finishOpenItem(e),
              r = this.foregroundRole,
              o = null
            ;(null != r && (o = this.lastDeltaAtMs[r]),
              (this.reopenableRole = null),
              null != r &&
                r !== e &&
                null != this.openItems[r] &&
                null != o &&
                a - o <= 1e3 &&
                (this.reopenableRole = r),
              (this.foregroundRole = e))
            let s = { id: `${this.itemIdPrefix}-${this.nextItemNumber++}`, text: t }
            return (
              i.push(
                { type: "created", previousItemId: this.lastCreatedItemId, item: { id: s.id, role: e } },
                n ? { type: "done", itemId: s.id, text: t } : { type: "delta", itemId: s.id, delta: t },
              ),
              (this.lastCreatedItemId = s.id),
              n || (this.openItems[e] = s),
              { events: i, itemId: s.id }
            )
          }
          finishOpenItem(e) {
            let t = this.openItems[e]
            return null == t ? [] : ((this.openItems[e] = null), [{ type: "done", itemId: t.id, text: t.text }])
          }
        }
        function iL(e) {
          let t = iU(e)
          return t.length > 0 && iD.some((e) => e.startsWith(t))
        }
        function iU(e) {
          return e
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, " ")
            .trim()
            .replace(/\s+/g, " ")
        }
        let iF = { entries: [] }
        class iq {
          #e = new Map()
          startSession(e, t, n) {
            return this.startThreadSession(e, t, n).thread.snapshot
          }
          startThreadSession(e, t, n) {
            let a = this.getOrCreateThread(e),
              i = a.activeSession
            if (i?.id === t) return ((i.finalizationMode = n ?? i.finalizationMode), { session: i, thread: a })
            ;(null != i && (a.snapshot = iW(a.snapshot, i.linearizer.close())),
              a.snapshot.entries.length > 0 &&
                (a.snapshot = { entries: [...a.snapshot.entries, { type: "session-divider", id: t }] }))
            let r = {
              finalizationMode: n ?? "boundary",
              id: t,
              linearizer: new iN(`${t}-item`),
              pendingDeltaItemIds: { assistant: null, user: null },
              pendingFinalItemIds: { assistant: null, user: null },
              pendingHandoffUserDeltaItemId: null,
            }
            return ((a.activeSession = r), { session: r, thread: a })
          }
          addDelta(e, t, n, a, i) {
            let { session: r, thread: o } = this.ensureSession(e, t),
              s =
                "server" === r.finalizationMode
                  ? r.pendingDeltaItemIds[n]
                  : "user" === n
                    ? r.pendingHandoffUserDeltaItemId
                    : null
            if (null != s)
              return (
                "user" === n && r.linearizer.suppressPendingAssistantAcknowledgment(),
                this.invalidateOppositeRoleContinuation(r, n),
                (o.snapshot = iW(o.snapshot, [{ type: "delta", itemId: s, delta: a }])),
                o.snapshot
              )
            ;((r.pendingDeltaItemIds[n] = null), (r.pendingFinalItemIds[n] = null))
            let l = r.linearizer.addDelta(n, a, i)
            return (
              l.length > 0 && this.invalidateOppositeRoleContinuation(r, n),
              (o.snapshot = iW(o.snapshot, l)),
              o.snapshot
            )
          }
          complete(e, t, n, a, i) {
            let { session: r, thread: o } = this.ensureSession(e, t),
              s = r.pendingFinalItemIds[n]
            ;((r.pendingDeltaItemIds[n] = null),
              (r.pendingFinalItemIds[n] = null),
              "user" === n &&
                ((r.pendingHandoffUserDeltaItemId = null),
                null != s && r.linearizer.suppressPendingAssistantAcknowledgment()))
            let l = null == s ? r.linearizer.complete(n, a, i) : [{ type: "done", itemId: s, text: a }]
            return (
              null == s && l.length > 0 && this.invalidateOppositeRoleContinuation(r, n),
              (o.snapshot = iW(o.snapshot, l)),
              o.snapshot
            )
          }
          addHandoff(e, t, n) {
            let { session: a, thread: i } = this.ensureSession(e, t)
            return (
              this.finishHandoffSessionSegment(a, i),
              (i.snapshot = { entries: [...i.snapshot.entries, { type: "handoff", id: n }] }),
              i.snapshot
            )
          }
          finishHandoffSegment(e, t) {
            let { session: n, thread: a } = this.ensureSession(e, t)
            return (this.finishHandoffSessionSegment(n, a), a.snapshot)
          }
          finishSegment(e, t) {
            let n = this.#e.get(iZ(e))
            return n?.activeSession?.id !== t
              ? (n?.snapshot ?? iF)
              : (this.finishSessionSegment(n.activeSession, n), n.snapshot)
          }
          close(e, t) {
            let n = this.#e.get(iZ(e))
            return n?.activeSession?.id !== t
              ? (n?.snapshot ?? iF)
              : ((n.snapshot = iW(n.snapshot, n.activeSession.linearizer.close())),
                (n.activeSession = null),
                n.snapshot)
          }
          getSnapshot(e) {
            return this.#e.get(iZ(e))?.snapshot ?? iF
          }
          forget(e) {
            this.#e.delete(iZ(e))
          }
          restoreSnapshot(e, t) {
            this.#e.set(iZ(e), { activeSession: null, snapshot: t })
          }
          ensureSession(e, t) {
            let n = this.getOrCreateThread(e)
            return n.activeSession?.id === t ? { session: n.activeSession, thread: n } : this.startThreadSession(e, t)
          }
          getOrCreateThread(e) {
            let t = iZ(e),
              n = this.#e.get(t)
            return (null == n && ((n = { activeSession: null, snapshot: iF }), this.#e.set(t, n)), n)
          }
          invalidateOppositeRoleContinuation(e, t) {
            ;((e.pendingDeltaItemIds["assistant" === t ? "user" : "assistant"] = null),
              "assistant" === t && (e.pendingHandoffUserDeltaItemId = null))
          }
          finishSessionSegment(e, t) {
            let n = { assistant: null, user: null }
            for (let a of ["assistant", "user"]) {
              let i = iM()(t.snapshot.entries, (e) => "item" === e.type && e.role === a && !e.completed)
              null != i && ((e.pendingDeltaItemIds[a] = i.id), (e.pendingFinalItemIds[a] = i.id), (n[a] = i.id))
            }
            return ((t.snapshot = iW(t.snapshot, e.linearizer.close())), n)
          }
          finishHandoffSessionSegment(e, t) {
            let n = this.finishSessionSegment(e, t)
            e.pendingHandoffUserDeltaItemId = n.user
          }
        }
        function iW(e, t) {
          return t.reduce(iY, e)
        }
        function iZ({ hostId: e, conversationId: t }) {
          return JSON.stringify([e, t])
        }
        var iB = n(62003),
          iH = n.n(iB)
        ;(n(7695), n(25133))
        let iK = /visualize([^]+)/g
        o.Ikc({
          path: o.YjP().nullable(),
          title: o.YjP().optional(),
          type: o.k5n(["inline", "live"]).optional(),
          mode: o.euz("wide").optional(),
          wide: o.zMY().optional(),
        })
        let iJ = /^ {0,3}::codex-inline-vis\{file="([^"]+)"(?:[ \t]+threadId="([^"]+)")?\}[ \t]*$/,
          iG = /^ {0,3}visualize\{.*\}[ \t]*$/,
          iV = /^ {0,3}(`{3,}|~{3,})/,
          iQ = /^\[([A-Z][A-Z0-9_-]*)\][ \t]*/,
          iX = /^\[[A-Z][A-Z0-9_-]*$/,
          i0 = o.Ikc({ path: o.YjP().trim().min(1) }),
          i1 = o.KCZ([
            o.Ikc({ kind: o.euz("chatgpt"), threadId: o.YjP().trim().min(1) }),
            o.Ikc({ kind: o.euz("chatgpt"), clientThreadId: o.YjP().trim().min(1) }),
            o.Ikc({
              kind: o.euz("codex").optional(),
              threadId: o.YjP().trim().min(1),
              hostId: o.YjP().trim().min(1).optional(),
            }),
            o.Ikc({
              kind: o.euz("codex").optional(),
              clientThreadId: o.IeY((e) => "string" == typeof e && (0, eN.L$)(e)),
              hostId: o.YjP().trim().min(1).optional(),
            }),
          ])
        function i2(e) {
          try {
            var t
            let n
            return ((t = JSON.parse(e)), (n = i1.safeParse(t)).success ? n.data : null)
          } catch {
            return null
          }
        }
        function i3(e) {
          var t, n, a
          let i,
            r,
            o =
              null !=
              (r = (function (e) {
                let t = e.length - e.trimStart().length,
                  n = iQ.exec(e.slice(t))
                if (n?.[1] == null) return null
                let a = t + n[0].length
                return (
                  "\r\n" === e.slice(a, a + 2) ? (a += 2) : "\n" === e[a] && (a += 1),
                  { channel: n[1].toLowerCase(), contentStart: a, contentEnd: e.length }
                )
              })((t = e)))
                ? { start: r.contentStart, end: r.contentEnd }
                : "[" === (i = t.trimStart()) || iX.test(i) || iQ.test(i)
                  ? null
                  : { start: 0, end: t.length }
          if (null == o) return []
          let s = (function (e, t, n) {
              let a = [],
                i = t
              for (; i < n;) {
                let t = e.indexOf("\n", i),
                  r = -1 === t || t >= n ? -1 : t,
                  o = -1 === r ? n : r + 1,
                  s = -1 === r ? n : r,
                  l = "\r" === e[s - 1] ? s - 1 : s
                ;(a.push({ content: e.slice(i, l), end: l, nextStart: o, start: i }), (i = o))
              }
              return a
            })(e, o.start, o.end),
            l = s[0]
          if (l?.content === "::codex-realtime-inline{}" && l.nextStart > l.end)
            return [
              {
                type: "inline-markdown",
                index: 0,
                content: e.slice(l.nextStart, o.end),
                contentStart: l.nextStart,
                contentEnd: o.end,
              },
            ]
          let c = [],
            p = null
          for (let e of s) {
            if (null != p) {
              ;((n = e.content),
                (a = p),
                RegExp(`^ {0,3}${a.character}{${String(a.length)},}[ \\t]*$`).test(n) && (p = null))
              continue
            }
            let t = iJ.exec(e.content),
              i =
                t?.[1] ??
                (function (e) {
                  if (!iG.test(e)) return null
                  let t = (function (e, t) {
                    let n = e.matchAll(iK).next().value
                    if (n?.index !== 0 || n[0].length !== e.length) return null
                    let a = n[1],
                      i = { path: a }
                    if (a.startsWith("{"))
                      try {
                        i = JSON.parse(a)
                      } catch {
                        return null
                      }
                    let r = t.safeParse(i)
                    return r.success ? r.data : null
                  })(e.trim(), i0)
                  return null == t ? null : iH().posix.basename((0, nL.AQ)(t.path))
                })(e.content)
            if (null != i) {
              c.push({
                type: "inline-visualization",
                index: c.length,
                file: i,
                sourceThreadId: t?.[2],
                start: e.start,
                end: e.nextStart,
              })
              continue
            }
            p = (function (e) {
              let t = iV.exec(e)?.[1]
              if (null == t) return null
              let n = t[0]
              return "`" !== n && "~" !== n ? null : { character: n, length: t.length }
            })(e.content)
          }
          return c
        }
        n(71527)
        let i4 = "remote_control_enrollment_account_mismatch",
          i5 = o.Ikc({
            accountUserId: o.YjP(),
            algorithm: o.euz("ecdsa_p256_sha256"),
            clientId: o.YjP(),
            keyId: o.YjP(),
            protectionClass: o.k5n(["hardware_secure_enclave", "hardware_tpm", "os_protected_nonextractable"]),
            publicKeySpkiDerBase64: o.YjP(),
          }),
          i6 = o
            .Ikc({
              iat: o.aig(),
              pwd_auth_time: o.aig(),
              scope: o.YjP().optional(),
              scp: o.YOg(o.YjP()).optional(),
              "https://api.openai.com/auth": o
                .Ikc({
                  amr: o.YOg(o.YjP()).optional(),
                  account_id: o.YjP().optional(),
                  chatgpt_account_user_id: o.YjP().optional(),
                  chatgpt_account_id: o.YjP().optional(),
                  account_user_id: o.YjP().optional(),
                  user_id: o.YjP().optional(),
                })
                .loose(),
            })
            .loose(),
          i9 = o.Ikc({
            errorCode: o.k5n([
              "remote_control_device_key_tpm_unavailable",
              "remote_control_device_key_tpm_configuration",
              "remote_control_device_key_store_unavailable",
              "remote_control_device_key_unusable",
            ]),
          })
        function i8(e) {
          let t = i9.safeParse(e)
          return t.success ? t.data.errorCode : null
        }
        let i7 = "New voice chat",
          re = "New Realtime Voice Chat"
        function rt(e) {
          return { type: "ok", value: e }
        }
        function rn(e) {
          return { type: "error", error: { message: e instanceof Error ? e.message : String(e) } }
        }
        n(87605)
        var ra = n(38682)
        let ri = o
            .Ikc({
              action_url: o
                .YjP()
                .optional()
                .catch(void 0),
              dismissal_id: o
                .YjP()
                .optional()
                .catch(void 0),
              app_name: o
                .YjP()
                .optional()
                .catch(void 0),
              connector_filler_hover_enabled: o
                .zMY()
                .optional()
                .catch(void 0),
              prompt: o
                .YjP()
                .optional()
                .catch(void 0),
              task_suggestion_prompt_as_tool: o
                .zMY()
                .optional()
                .catch(void 0),
              system_hints: o
                .YOg(o.YjP())
                .optional()
                .catch(void 0),
              quick_actions: o
                .YOg(
                  o
                    .Ikc({
                      label: o
                        .YjP()
                        .trim()
                        .min(1)
                        .max(20)
                        .regex(/^\S+(?:\s+\S+){0,2}$/),
                      prompt: o.YjP().trim().min(1),
                      source_index: o
                        .aig()
                        .int()
                        .min(0)
                        .max(1)
                        .optional()
                        .catch(void 0),
                    })
                    .optional()
                    .catch(void 0),
                )
                .max(2)
                .transform((e) => e.filter((e) => void 0 !== e))
                .optional()
                .catch(void 0),
              title_links: o
                .YOg(
                  o.Ikc({
                    text: o.YjP(),
                    url: o.YjP(),
                    summary: o
                      .YjP()
                      .trim()
                      .min(1)
                      .optional()
                      .catch(void 0),
                    app_name: o
                      .YjP()
                      .optional()
                      .catch(void 0),
                    icon_paths: o
                      .g1P(o.YjP(), o.YjP())
                      .optional()
                      .catch(void 0),
                  }),
                )
                .max(2)
                .optional()
                .catch(void 0),
            })
            .optional()
            .catch(void 0),
          rr = o.Ikc({
            action_metadata: ri,
            client_dismiss_on_tap: o.zMY().nullish(),
            id: o.uRe(),
            chat_home_unit_id: o.uRe().nullable().optional(),
            producer: o.YjP().min(1),
            item_type: o.k5n([
              "chat_home_curated",
              "chat_home",
              "chat_home_evergreen",
              "chat_home_evergreen_demo",
              "chat_home_trending",
              "chat_home_task_suggestions",
              "chat_home_paas_task_suggestions",
              "chat_home_paas_free_user_suggestions",
              "file_action_suggestion",
              "task_suggestion",
              "proactive_suggestion",
              "connector_suggestion",
              "plugin_activation_suggestion",
              "automation_suggestion",
              "unread_automation",
              "delayed_image_completed_result",
              "promotional",
            ]),
            title: o.YjP(),
            description: o.YjP().nullable().optional(),
            short_description: o.YjP().nullable().optional(),
            icon_paths: o.g1P(o.YjP(), o.YjP()).nullable().optional(),
            emoji: o.YjP().nullable().optional(),
            logging_metadata: o
              .Ikc({ app_id: o.YjP().nullable().optional(), suggestion_id: o.YjP().nullable().optional() })
              .nullable()
              .optional(),
            destination_metadata: o
              .gMt("type", [
                o.Ikc({
                  type: o.euz("prompt"),
                  prompt: o.YjP(),
                  entrypoint: o.k5n(["chat", "work"]).nullable().optional(),
                  auto_send: o.zMY().optional(),
                  auto_send_in_background: o.zMY().optional(),
                  show_prompt_on_hover: o.zMY().optional(),
                }),
                o.Ikc({
                  type: o.euz("conversation"),
                  conversation_id: o.YjP(),
                  continuation: o
                    .Ikc({
                      prompt: o.YjP(),
                      last_message_id: o.YjP(),
                      conversation_title: o.YjP(),
                      auto_send: o.zMY().optional(),
                    })
                    .nullable()
                    .optional(),
                }),
                o.Ikc({ type: o.euz("connector"), connector_id: o.YjP(), plugin_id: o.YjP().nullable().optional() }),
                o.Ikc({ type: o.euz("url") }),
              ])
              .nullable()
              .optional(),
          })
        var ro = n(89098)
        let rs = o.gMt("backend", [
            ro.D5.omit({ turnId: !0 }).extend({ backend: o.euz("chrome") }),
            o.Ikc({ backend: o.euz("iab"), providerTabId: ro.D5.shape.providerTabId }),
          ]),
          rl = o.KCZ([
            o.Ikc({ connectorId: o.YjP() }),
            o.Ikc({ hostId: o.YjP(), serverName: o.YjP(), projectConfigScope: o.YjP().nullable() }),
          ]),
          rc = o.gMt("kind", [
            o.Ikc({ kind: o.euz("request"), requestId: o.uRe() }),
            o.Ikc({ kind: o.euz("cancel"), requestId: o.uRe() }),
            o.Ikc({ kind: o.euz("toggle"), requestId: o.uRe(), force: o.zMY().optional() }),
          ]),
          rp = o.k5n(["camera", "microphone", "geolocation", "clipboardWrite", "localNetwork", "loopbackNetwork"]),
          ru = {
            camera: { feature: "camera", permissionGroup: "media-stream-camera" },
            microphone: { feature: "microphone", permissionGroup: "media-stream-mic" },
            geolocation: { feature: "geolocation", permissionGroup: "location" },
            clipboardWrite: { feature: "clipboard-write", permissionGroup: "clipboard" },
            localNetwork: { feature: "local-network", permissionGroup: "local-network" },
            loopbackNetwork: { feature: "loopback-network", permissionGroup: "loopback-network" },
          },
          rd = "mcp-app-permission-declarations-v2",
          rm = o.Ikc({
            partition: o.YjP(),
            origin: o.OZ5(),
            owners: o.YOg(o.Ikc({ identity: rl, pluginIds: o.YOg(o.YjP()) })),
            permissions: o.YOg(rp),
          }),
          rf = o.g1P(o.YjP(), rm).catch({}),
          rh = "/detached-window",
          rg = ["OwlOpenAIGoLinks", "OwlRemoteSearchSuggestions"]
        var rv = n(43230)
        let rx = o.Ikc({
            snapshotId: o.YjP().min(1),
            invocationId: o.YjP().min(1),
            updateId: o.YjP().min(1),
            crdtUpdateBase64: o.YjP(),
            waitForPersistence: o.zMY().optional(),
            clientManifest: o
              .L5J()
              .transform((e) => (0, rv.iB)(e) ?? void 0)
              .optional(),
          }),
          rb = 0x4000000
        function ry(e, t) {
          "admission_cancelled" === t ? e.close(1e3, t) : e.close()
        }
        let rw = 0x2900000
        function rk(e) {
          return Math.max(2e4, 1e3 * Math.ceil(e / 524288))
        }
        let r_ = 0x2800000 + 4 * Math.ceil(2097152 / 3) + 1048576
        function rP(e, t) {
          let n =
              "wss:" === e.protocol &&
              /^pages-realtime\.gateway\.[A-Za-z0-9.-]+\.api\.openai\.(com|org)$/u.test(e.hostname) &&
              "/ws" === e.pathname,
            a =
              "wss:" === e.protocol &&
              "" === e.port &&
              /^pages-realtime-dev-ephemeral-pr[1-9][0-9]*\.gateway\.unified-0s\.internal\.api\.openai\.org$/u.test(
                e.hostname,
              ) &&
              "/ws" === e.pathname,
            i =
              "wss:" === e.protocol &&
              "" === e.port &&
              ((["chatgpt.com", "ws.chatgpt.com"].includes(e.hostname) &&
                /^\/backend-api\/pages\/realtime-broker\/u(0|[1-9][0-9]*)\/(?:identity\/)?ws$/u.test(e.pathname)) ||
                (["chatgpt-staging.com", "ws.chatgpt-staging.com"].includes(e.hostname) &&
                  [
                    "/backend-api/pages/realtime-broker/u0s/ws",
                    "/backend-api/pages/realtime-broker/u0s/identity/ws",
                  ].includes(e.pathname))),
            r =
              t &&
              "ws:" === e.protocol &&
              ["localhost", "127.0.0.1", "[::1]"].includes(e.hostname) &&
              "/ws" === e.pathname
          if (!(n || a || i || r) || "" !== e.username || "" !== e.password || "" !== e.hash)
            throw Error("invalid_page_realtime_endpoint")
        }
        let rI = 0x1400000,
          rj = 0x6400000,
          rA = 64,
          rS = 6e4,
          rO = 100,
          rE = 501
        function rT(e) {
          return {
            ...e,
            globalStateEntries: e.globalStateEntries.map((e) =>
              null != e.value &&
              (e.key === nV.Q2.THREAD_WORKSPACE_ROOT_HINTS || e.key === nV.Q2.THREAD_PROJECT_ASSIGNMENTS)
                ? { key: e.key, valueJson: JSON.stringify(e.value) }
                : e,
            ),
          }
        }
        let rz = "codex-primary-runtime",
          rC = "https://oaisidekickupdates.blob.core.windows.net/owl"
        o.YjP()
          .max(64)
          .regex(/^[\dA-Za-z]+(?:[.+-][\dA-Za-z]+)*$/)
        let rR = o
            .YjP()
            .trim()
            .min(1)
            .refine(
              (e) => "." !== e && ".." !== e && !e.includes("/") && !e.includes("\\"),
              "Expected a single path segment.",
            ),
          r$ = o
            .YjP()
            .trim()
            .regex(/^[a-fA-F0-9]{64}$/),
          rM = o
            .YjP()
            .trim()
            .pipe(o.OZ5())
            .refine((e) => {
              let t = new URL(e)
              return "https://chatgpt.com" === t.origin && t.pathname.startsWith("/codex/app/updates/runtimes/")
            }),
          rY = o.Ikc({ url: o.YjP().trim().min(1) }),
          rD = o.Ikc({
            digest: r$,
            format: o.YjP().trim().min(1).optional(),
            hash: o.euz("sha256"),
            internalCdnUrl: rM.optional(),
            path: o.YjP().trim().min(1).optional(),
            providers: o.PVZ([rY]).rest(rY),
            size: o.aig().int().positive().optional(),
          }),
          rN = o.Ikc({
            bundleFormatVersion: o.aig().int().optional(),
            bundleVersion: o.YjP().trim().optional(),
            platforms: o.g1P(o.YjP(), rD),
            runtimeRootDirectoryName: rR.optional(),
          }),
          rL = o.Ikc({
            baseUrl: o.YjP().trim().min(1).optional(),
            latest: rN.optional(),
            "latest-alpha": rN.optional(),
            versions: o.g1P(o.YjP(), rN).optional(),
          })
        o.Ikc({ runtimes: o.g1P(o.YjP(), rL) })
        let rU = o.Ikc({
            archiveName: rR.optional(),
            archiveSha256: r$,
            archiveSizeBytes: o.aig().int().positive().optional(),
            archiveUrl: o.YjP().trim().min(1),
            bundleFormatVersion: o.aig().int().optional(),
            bundleVersion: o.YjP().trim().optional(),
            format: o.YjP().trim().min(1).optional(),
            generatedDependencies: o.YOg(o.YjP()).optional(),
            internalCdnUrl: rM.optional(),
            latestManifestFileName: rR.optional(),
            latestManifestUrl: o.YjP().trim().min(1).optional(),
            nodeVersion: o.YjP().trim().min(1).optional(),
            pythonVersion: o.YjP().trim().min(1).optional(),
            runtimeRootDirectoryName: rR.optional(),
            targetArch: o.YjP().trim().min(1).optional(),
            targetPlatform: o.YjP().trim().min(1).optional(),
          }),
          rF = {}
        function rq({ archiveFormat: e, osRelease: t, platform: n }) {
          var a
          let i
          if ("win32" !== n) return !0
          let r = ((a = t), null == (i = a?.match(/^10\.0\.(\d+)/)?.[1]) ? null : Number(i))
          return null == r || r >= 22621 || "tar.gz" === e || "zip" === e
        }
        let rW = "[Truncated: breadcrumb data exceeded 2 KiB]",
          rZ = "https://6719eaa18601933a26ac21499dcaba2f@o33249.ingest.us.sentry.io/4510999349821440"
        function rB(e) {
          let { data: t } = e
          if (null == t) return e
          if (!("arguments" in t && !rK(t.arguments))) return rK(t) ? e : { ...e, data: rJ(t) }
          let n = { ...t, arguments: rW, codex_truncated_breadcrumb_data: !0 }
          return rK(n) ? { ...e, data: n } : { ...e, data: rJ(t) }
        }
        function rH(e) {
          return `codex@${e}`
        }
        function rK(e) {
          try {
            let t = JSON.stringify(e)
            if (null == t || t.length > 2048) return !1
            return new TextEncoder().encode(t).byteLength <= 2048
          } catch {
            return !1
          }
        }
        function rJ(e) {
          let t = { codex_truncated_breadcrumb_data: !0 },
            n = [],
            a = 0,
            i = !1
          for (let r in e) {
            if (!Object.hasOwn(e, r)) continue
            if (20 === a) {
              i = !0
              break
            }
            a += 1
            let o = e[r],
              s = { ...t, [r]: rK(o) ? o : rW, codex_truncated_breadcrumb_data: !0 }
            rK(s) ? (t = s) : n.push(r)
          }
          if (n.length > 0 || i) {
            let e = {
              ...t,
              codex_omitted_breadcrumb_data_keys: [
                ...n.slice(0, 20).map((e) => e.slice(0, 128)),
                ...(i ? ["[Additional keys omitted]"] : []),
              ],
            }
            if (rK(e)) return e
          }
          return t
        }
        let rG = "default-service-tier"
        function rV(e) {
          var t
          return e && "object" == typeof e && rG in e
            ? "string" != typeof (t = e[rG]) || 0 === t.length || "default" === t
              ? null
              : t
            : null
        }
        var rQ = n(31648),
          rX = n.n(rQ)
        let r0 = {
          enabled: (0, n4.KF)({
            agentAccess: "read-write",
            default: !0,
            description: "Whether home-page ambient suggestions are enabled",
            key: "ambient-suggestions-enabled",
            schema: n3.uf,
          }),
        }
        var r1 = n(70846)
        let r2 = 11,
          r3 = 16,
          r4 = 8,
          r5 = 24,
          r6 = {
            theme: (0, n4.IZ)({
              agentAccess: "read-write",
              default: "system",
              description: "Preferred app appearance mode",
              key: "appearanceTheme",
              schema: o.k5n(["system", "light", "dark"]),
            }),
            lightChromeTheme: (0, n4.IZ)({
              agentAccess: "read-write",
              default: void 0,
              description: "Chrome theme used in light mode",
              key: "appearanceLightChromeTheme",
              schema: n3.wV.optional(),
            }),
            darkChromeTheme: (0, n4.IZ)({
              agentAccess: "read-write",
              default: void 0,
              description: "Chrome theme used in dark mode",
              key: "appearanceDarkChromeTheme",
              schema: n3.wV.optional(),
            }),
            lightCodeThemeId: (0, n4.IZ)({
              agentAccess: "read-write",
              default: r1.Rg.CODEX,
              description: "Code theme used in light mode",
              key: "appearanceLightCodeThemeId",
              schema: n3.PK,
            }),
            darkCodeThemeId: (0, n4.IZ)({
              agentAccess: "read-write",
              default: r1.Rg.CODEX,
              description: "Code theme used in dark mode",
              key: "appearanceDarkCodeThemeId",
              schema: n3.PK,
            }),
            diffMarkerStyle: (0, n4.IZ)({
              agentAccess: "read-write",
              default: "color",
              description: "Diff marker style used in code review surfaces",
              key: "appearanceDiffMarkerStyle",
              schema: o.k5n(["color", "symbols"]),
            }),
            sansFontSize: (0, n4.IZ)({
              agentAccess: "read-write",
              default: 14,
              description: "Base UI font size",
              key: "sansFontSize",
              schema: o.aig().min(r2).max(r3),
            }),
            codeFontSize: (0, n4.IZ)({
              agentAccess: "read-write",
              default: 12,
              description: "Code font size",
              key: "codeFontSize",
              schema: o.aig().min(r4).max(r5),
            }),
            useOpenAISans: (0, n4.IZ)({
              agentAccess: "hidden",
              default: !0,
              description: "Whether enrolled ChatGPT Web accounts use OpenAI Sans",
              key: "useOpenAISans",
              schema: n3.uf,
            }),
            useFontSmoothing: (0, n4.IZ)({
              agentAccess: "read-write",
              default: !0,
              description: "Whether font smoothing is enabled",
              key: "useFontSmoothing",
              schema: n3.uf,
            }),
            usePointerCursors: (0, n4.IZ)({
              agentAccess: "read-write",
              default: !1,
              description: "Whether interactive controls use pointer cursors",
              key: "usePointerCursors",
              schema: n3.uf,
            }),
            dockIconPreference: (0, n4.KF)({
              agentAccess: "read-write",
              default: "app-default",
              description: "Preferred macOS Dock icon",
              key: nV.Q2.DOCK_ICON_PREFERENCE,
              schema: G,
            }),
            reducedMotionPreference: (0, n4.KF)({
              agentAccess: "read-write",
              default: "system",
              description: "Whether Codex reduces interface motion",
              key: "reduced-motion-preference",
              schema: o.k5n(["system", "on", "off"]),
            }),
          },
          r9 = {
            light: { chromeThemeSetting: r6.lightChromeTheme, codeThemeSetting: r6.lightCodeThemeId },
            dark: { chromeThemeSetting: r6.darkChromeTheme, codeThemeSetting: r6.darkCodeThemeId },
          },
          r8 = {
            alwaysSendToMini: (0, n4.IZ)({
              agentAccess: "read-write",
              default: !1,
              description: "Whether global shortcut appshots prefer Mini when it is visible",
              key: "appshotAlwaysSendToMini",
              schema: n3.uf,
            }),
            destination: (0, n4.IZ)({
              agentAccess: "read-write",
              default: "automatic",
              description: "Where global shortcut appshots are attached",
              key: "appshotDestination",
              schema: o.k5n(["automatic", "last-chat", "new-chat"]),
            }),
            soundEnabled: (0, n4.IZ)({
              agentAccess: "read-write",
              default: !0,
              description: "Whether appshots play a sound effect",
              key: "appshotSoundEnabled",
              schema: n3.uf,
            }),
          },
          r7 = {
            bookmarksBarVisibility: (0, n4.at)({
              agentAccess: "hidden",
              default: "new-tab",
              description: "When the in-app browser bookmarks bar is visible",
              key: "browser-bookmarks-bar-visibility",
              schema: o.k5n(["never", "always", "new-tab"]),
            }),
            annotationMarkersVisible: (0, n4.at)({
              agentAccess: "hidden",
              default: !0,
              description: "Whether saved annotations show markers on browser pages",
              key: "browser-annotation-markers-visible",
              schema: o.zMY(),
            }),
            extensionsToolbarVisible: (0, n4.at)({
              agentAccess: "hidden",
              default: !0,
              description: "Whether the extensions puzzle button is pinned to the browser toolbar",
              key: "browser-extensions-toolbar-visible",
              schema: o.zMY(),
            }),
            showDeviceToolbarInNewTabs: (0, n4.at)({
              agentAccess: "hidden",
              default: !1,
              description: "Whether new browser tabs show the device toolbar",
              key: "browser-show-device-toolbar-in-new-tabs",
              schema: o.zMY(),
            }),
            showFullUrl: (0, n4.at)({
              agentAccess: "hidden",
              default: !1,
              description: "Whether the in-app browser address bar shows the full URL",
              key: "browser-show-full-url",
              schema: o.zMY(),
            }),
            annotationScreenshotsMode: (0, n4.KF)({
              agentAccess: "read-write",
              default: nV.PN,
              description: "When browser annotation screenshots are included",
              key: "browser-annotation-screenshots-mode",
              schema: o.k5n(["always", "necessary"]),
            }),
            disabledSiteAnnotationHostnames: (0, n4.at)({
              agentAccess: "hidden",
              default: [],
              description: "Hostnames where custom site annotation features are disabled",
              key: "browser-disabled-site-annotation-hostnames",
              schema: o.YOg(o.YjP()),
            }),
            siteAnnotationPermissionAnsweredHostnames: (0, n4.at)({
              agentAccess: "hidden",
              default: [],
              description: "Hostnames whose site annotation permission prompt the user answered",
              key: "browser-site-annotation-permission-answered-hostnames",
              schema: o.YOg(o.YjP()),
            }),
            debugChromePagesEnabled: (0, n4.KF)({
              agentAccess: "hidden",
              default: !1,
              description: "Whether Browser Use may open trusted chrome:// diagnostic pages",
              key: nV.Q2.DEBUG_CHROME_PAGES_ENABLED,
              schema: o.zMY(),
            }),
            downloadDirectory: (0, n4.KF)({
              agentAccess: "hidden",
              default: null,
              description: "Folder where files downloaded by the in-app browser are saved",
              key: nV.Q2.BROWSER_DOWNLOAD_DIRECTORY,
              schema: o.YjP().nullable(),
            }),
            promptForDownloadLocation: (0, n4.KF)({
              agentAccess: "hidden",
              default: !1,
              description: "Whether manual browser downloads ask where to save each file",
              key: nV.Q2.BROWSER_DOWNLOAD_PROMPT_ENABLED,
              schema: o.zMY(),
            }),
          },
          oe = {
            typescript: ["javascript", "javascriptreact", "typescript", "typescriptreact"],
            python: ["python"],
            java: ["java"],
            kotlin: ["kotlin"],
            rust: ["rust"],
            swift: ["swift"],
            latex: ["latex"],
          }
        function ot(e) {
          return e.replace(/^(javascript|typescript)react$/, "$1")
        }
        let on = {
            enabled: (0, n4.at)({
              agentAccess: "hidden",
              default: !0,
              description: "Whether Code Navigation can start language servers",
              key: "code-navigation-enabled",
              schema: o.zMY(),
            }),
            pausedProjects: (0, n4.KF)({
              agentAccess: "hidden",
              default: [],
              description: "Projects with Code Navigation turned off",
              key: nV.Q2.PAUSED_LANGUAGE_SERVER_PROJECTS,
              schema: o.YOg(o.YjP()),
            }),
            pausedLanguages: (0, n4.at)({
              agentAccess: "hidden",
              default: [],
              description: "Languages with Code Navigation turned off",
              key: "paused-language-server-languages",
              schema: o.YOg(o.YjP().transform(ot)),
            }),
          },
          oa = o
            .Ikc({ hostname: o.YjP().min(1), connectorId: o.YjP().min(1), accountLinkId: o.YjP().min(1) })
            .nullable(),
          oi = o.k5n(["github", "gitlab"]),
          or = o.YOg(o.k5n(["waiting_for_review", "needs_my_review", "needs_my_teams_review", "merged", "recents"])),
          oo = {
            agentSource: (0, n4.KF)({
              agentAccess: "hidden",
              default: "recent",
              description: "Task source for Codex Micro agent keys",
              key: "codex-micro-agent-source",
              schema: O,
            }),
            singleTapAgentKeys: (0, n4.at)({
              agentAccess: "hidden",
              default: !1,
              description: "Whether Codex Micro agent keys open assigned conversations with a single tap",
              key: "codex-micro-single-tap-agent-keys",
              schema: o.zMY(),
            }),
            layout: (0, n4.KF)({
              agentAccess: "hidden",
              default: {
                version: 1,
                slots: {
                  ACT06: { keycapId: "FAST" },
                  ACT07: { keycapId: "APPR" },
                  ACT08: { keycapId: "REJ" },
                  ACT09: { keycapId: "SPLIT" },
                  ACT10: { keycapId: "MIC1" },
                  ACT11: { keycapId: "EMPT1" },
                  ACT10_ACT11: { keycapId: "MIC" },
                  ACT12: { keycapId: "CODEX" },
                },
                analogStick: E,
                encoder: T,
                encoderMode: z,
                voiceButtonMode: C,
                separateMicrophoneKeys: !1,
              },
              description: "Configured action-key layout for Codex Micro",
              key: "codex-micro-layout",
              schema: R,
            }),
            lightingBrightness: (0, n4.at)({
              agentAccess: "hidden",
              default: 100,
              description: "Brightness of Codex Micro lighting",
              key: "codex-micro-lighting-brightness",
              schema: v,
            }),
            lightsOffWhenLocked: (0, n4.at)({
              agentAccess: "hidden",
              default: !1,
              description: "Turn off Micro lighting while the computer is locked",
              key: "codex-micro-lights-off-when-locked",
              schema: o.zMY(),
            }),
            lightingAutoOff: (0, n4.at)({
              agentAccess: "hidden",
              default: "3-minutes",
              description: "When Codex Micro lighting turns off after inactivity",
              key: "codex-micro-lighting-auto-off",
              schema: g,
            }),
          }
        var os = n(94065)
        let ol = n.n(os)()(tW.Yp, (e, t) =>
            (0, n4.at)({
              agentAccess: "hidden",
              default: !0,
              description: `Whether the ${e.shortDisplayName} browser reference is shown in the composer`,
              key: `browser-family-enabled:${t}`,
              schema: n3.uf,
            }),
          ),
          oc = {
            alwaysHidePictureInPicture: (0, n4.IZ)({
              agentAccess: "hidden",
              default: !1,
              description: "Whether Computer Use picture in picture is always hidden",
              key: "computerUseAlwaysHidePictureInPicture",
              schema: n3.uf,
            }),
            ...ol,
          }
        var op = n(46922)
        let ou = o.Ikc({
            label: o.YjP().min(1),
            icon: o.YjP().min(1),
            command: o.YjP().min(1),
            args: o.YOg(o.YjP()).default([]),
            input: o.k5n(["path", "json_argument", "json_stdin"]).default("path"),
            supports_ssh: o.zMY().default(!1),
          }),
          od = o.g1P(o.YjP(), ou),
          om = {
            confirmBeforeClose: (0, n4.at)({
              agentAccess: "read-write",
              default: "keyboardOnly",
              description: "When to ask for confirmation before closing a desktop window",
              key: "confirm-before-close",
              schema: o.k5n(["never", "keyboardOnly", "always"]),
            }),
            agentUsageResetEnabled: (0, n4.at)({
              agentAccess: "read-only",
              default: !1,
              description: "Whether Codex can use usage resets after explicit user authorization",
              key: "agent-usage-reset-enabled",
              schema: n3.uf,
            }),
            mcpStartupAuthentication: (0, n4.at)({
              agentAccess: "read-only",
              default: !1,
              description: "Whether to prompt for MCP authentication at startup",
              key: "mcp_startup_authentication",
              schema: n3.uf,
            }),
            gatewayAutoReauth: (0, n4.at)({
              agentAccess: "read-only",
              default: !0,
              description: "Automatically open browser sign-in when the configured gateway needs reauthentication",
              key: "gateway_auto_reauth",
              schema: n3.uf,
            }),
            primaryNumberShortcutTarget: (0, n4.at)({
              agentAccess: "read-write",
              default: "tabs",
              description: "Whether primary-modifier number shortcuts select sidebar tasks or tabs",
              key: "primary-number-shortcut-target",
              schema: o.k5n(["sidebar", "tabs"]),
            }),
            defaultWorkspaceFullView: (0, n4.at)({
              agentAccess: "read-write",
              default: !1,
              description: "Whether new tasks start with the workspace in full view",
              key: "default-workspace-full-view",
              schema: n3.uf,
            }),
            appBetaPreferencesByAccountId: (0, n4.KF)({
              agentAccess: "hidden",
              default: {},
              description: "Desktop app beta feature preferences by account",
              key: nV.Q2.DESKTOP_APP_BETA_PREFERENCES_BY_ACCOUNT_ID,
              schema: o.g1P(o.YjP(), o.zMY()),
            }),
            macMenuBarEnabled: (0, n4.KF)({
              agentAccess: "read-write",
              default: !0,
              description: "Whether the macOS menu bar is shown",
              key: "mac-menu-bar-enabled",
              schema: n3.uf,
            }),
            chronicleMenuBarIndicatorEnabled: (0, n4.at)({
              agentAccess: "read-write",
              default: !0,
              description: "Whether the macOS menu bar shows the Computer History recording indicator",
              key: "chronicle-menu-bar-indicator-enabled",
              schema: n3.uf,
            }),
            openInTargetPreferences: (0, n4.KF)({
              agentAccess: "read-write",
              default: {},
              description: "Preferred targets for opening paths",
              key: "open-in-target-preferences",
              schema: o.Ikc({ global: o.YjP().optional(), perPath: o.g1P(o.YjP(), o.YjP()).optional() }),
            }),
            openLinkInTargetPreference: (0, n4.IZ)({
              agentAccess: "read-write",
              default: op.u,
              description: "Preferred target for opening links",
              key: "open-link-in-target-preference",
              schema: o.k5n(["in-app-browser", "external-browser"]),
            }),
            externalBrowserLinkShortcut: (0, n4.IZ)({
              agentAccess: "read-write",
              default: "primary",
              description: "Modifier-click shortcut for opening web links in the default browser",
              key: "external-browser-link-shortcut",
              schema: o.k5n(["unassigned", "primary", "alt", "primary-shift"]),
            }),
            openLocalUrlInTargetPreference: (0, n4.IZ)({
              agentAccess: "read-write",
              default: op.u,
              description: "Preferred target for opening local URLs",
              key: "open-local-url-in-target-preference",
              schema: o.k5n(["in-app-browser", "external-browser"]),
            }),
            customFileHandlers: (0, n4.IZ)({
              agentAccess: "read-write",
              default: {},
              description: "Custom file handlers for opening files from Codex App",
              key: "custom_file_handlers",
              schema: od,
            }),
          },
          of = o.KCZ([n3.uf, o.euz("original")]),
          oh = o
            .Ikc({
              SESSIONS: of,
              AGENTS_MD: of,
              CONFIG: of,
              SKILLS: of,
              PLUGINS: of,
              MCP_SERVER_CONFIG: of,
              SUBAGENTS: of,
              HOOKS: of,
              COMMANDS: of,
              MEMORY: of,
            })
            .partial(),
          og = {
            syncEnabled: (0, n4.at)({
              agentAccess: "hidden",
              default: !1,
              description: "Whether imported content is automatically kept in sync",
              key: "external-agent-import-sync-enabled",
              schema: n3.uf,
            }),
            syncItemTypes: (0, n4.at)({
              agentAccess: "hidden",
              default: null,
              description:
                "Automatically sync all categories, including categories found later, or only selected categories; unset preferences retain the original import selections",
              key: "external-agent-import-sync-item-types",
              schema: o.KCZ([o.euz("all"), oh]).nullable(),
            }),
          },
          ov = {
            preferredViewers: (0, n4.at)({
              agentAccess: "hidden",
              default: {},
              description: "Preferred viewers by host and file extension for files opened by the user",
              key: "preferred-file-viewers",
              schema: o.g1P(o.YjP(), o.YjP()),
            }),
          },
          ox = {
            autoArchiveAfterDays: (0, n4.IZ)({
              agentAccess: "read-write",
              default: 0,
              description:
                "Number of inactive days before local chats are automatically archived; 0 disables auto-archive",
              key: "autoArchiveAfterDays",
              schema: o.aig().int().nonnegative(),
            }),
            latexAutoCompile: (0, n4.at)({
              agentAccess: "hidden",
              default: !0,
              description: "Whether LaTeX documents compile automatically while editing",
              key: "latex-auto-compile",
              schema: n3.uf,
            }),
            sidebarShowProjectsInRecents: (0, n4.at)({
              agentAccess: "read-write",
              default: !0,
              description: "Whether project chats also appear in Recents when grouped by project",
              key: "sidebar-show-projects-in-recents",
              schema: n3.uf,
            }),
            dictationSoundsEnabled: (0, n4.IZ)({
              agentAccess: "read-write",
              default: !0,
              description: "Whether sounds play when dictation starts and stops",
              key: "dictationSoundsEnabled",
              schema: n3.uf,
            }),
            dictationPlaybackDuckingEnabled: (0, n4.IZ)({
              agentAccess: "read-write",
              default: !0,
              description: "Whether dictation lowers the volume of other applications",
              key: "dictationPlaybackDuckingEnabled",
              schema: n3.uf,
            }),
            dictationAlwaysShowLiveTranscription: (0, n4.IZ)({
              agentAccess: "read-write",
              default: !1,
              description: "Whether dictation always starts with live transcription visible",
              key: "dictationAlwaysShowLiveTranscription",
              schema: n3.uf,
            }),
            dictationDictionary: (0, n4.IZ)({
              agentAccess: "read-write",
              default: [],
              description: "Custom dictation dictionary entries",
              key: "dictationDictionary",
              schema: o.YOg(o.YjP()),
            }),
            microphoneInputDeviceId: (0, n4.IZ)({
              agentAccess: "hidden",
              default: null,
              description: "Preferred microphone input device for voice and dictation",
              key: "microphoneInputDeviceId",
              schema: o.YjP().min(1).nullable(),
            }),
            audioOutputDeviceId: (0, n4.IZ)({
              agentAccess: "hidden",
              default: null,
              description: "Preferred audio output device for voice calls",
              key: "audioOutputDeviceId",
              schema: o.YjP().min(1).nullable(),
            }),
            followUpQueueMode: (0, n4.IZ)({
              agentAccess: "read-write",
              default: "steer",
              description: "How follow-up prompts behave while a turn is running",
              key: "followUpQueueMode",
              schema: o.k5n(["queue", "steer", "interrupt"]),
              vscode: {
                default: "queue",
                description:
                  "Control whether follow-up messages are queued or steer the current run. Press Cmd/Ctrl+Shift+Enter to do the opposite for a single in-progress follow-up.",
              },
            }),
            composerEnterBehavior: (0, n4.IZ)({
              agentAccess: "read-write",
              default: "enter",
              description: "How Enter behaves in the composer",
              key: "composerEnterBehavior",
              schema: o.k5n(op.C),
              vscode: { description: "Enter behavior for the Codex composer." },
            }),
            composerPlainTextMode: (0, n4.IZ)({
              agentAccess: "read-write",
              default: !1,
              description:
                "Whether the composer and sent Codex prompts display code, Markdown, and links as literal text",
              key: "composerPlainTextMode",
              schema: n3.uf,
            }),
            showContextWindowUsage: (0, n4.at)({
              agentAccess: "read-write",
              default: !1,
              description: "Whether context window usage is shown in the composer",
              key: "show-context-window-usage",
              schema: n3.uf,
            }),
            showEducationalTips: (0, n4.at)({
              agentAccess: "read-write",
              default: !0,
              description: "Whether educational tips are shown above the composer",
              key: "show-educational-tips",
              schema: n3.uf,
            }),
            reviewDelivery: (0, n4.IZ)({
              agentAccess: "read-write",
              default: "inline",
              description: "How code review results are delivered",
              key: "reviewDelivery",
              schema: o.k5n(["inline", "detached"]),
              vscode: {
                description: "Start /review inline in the current chat when possible or launch a separate review chat",
              },
            }),
            localeOverride: (0, n4.IZ)({
              agentAccess: "read-write",
              default: null,
              description: "Explicit locale override",
              key: "localeOverride",
              schema: n3.S4,
              vscode: {
                description: "Preferred language for the Codex UI. Leave empty to auto detect.",
                scope: "application",
              },
            }),
            defaultProjectParent: (0, n4.IZ)({
              agentAccess: "hidden",
              default: null,
              description: "Parent folder for new local projects created with Start from scratch.",
              key: "defaultProjectParent",
              schema: o.YjP().refine(nL.cx, "Default project parent must be absolute").nullable(),
            }),
            projectlessWorkspaceRoot: (0, n4.IZ)({
              agentAccess: "hidden",
              default: null,
              description: "The location where tasks started outside of projects store their data by default.",
              key: "projectlessWorkspaceRoot",
              schema: o.YjP().refine(nL.cx, "Projectless chat folder must be absolute").nullable(),
            }),
            preventSleepWhileRunning: (0, n4.IZ)({
              agentAccess: "read-write",
              default: !1,
              description: "Whether the machine stays awake while Codex is running",
              key: "preventSleepWhileRunning",
              schema: n3.uf,
            }),
            keepRemoteControlAwakeWhilePluggedIn: (0, n4.IZ)({
              agentAccess: "read-write",
              default: !1,
              description: "Whether remote control keeps this computer awake while plugged in",
              key: "keepRemoteControlAwakeWhilePluggedIn",
              schema: n3.uf,
            }),
            integratedTerminalShell: (0, n4.IZ)({
              agentAccess: "read-write",
              default: void 0,
              description: "Preferred integrated terminal shell",
              key: "integratedTerminalShell",
              schema: o.k5n(["powershell", "commandPrompt", "gitBash", "wsl"]),
            }),
            defaultTerminalLocation: (0, n4.IZ)({
              agentAccess: "read-write",
              default: "bottom",
              description: "Where terminal actions open terminal tabs by default",
              key: "defaultTerminalLocation",
              schema: o.k5n(["bottom", "right"]),
            }),
            runCodexInWsl: (0, n4.IZ)({
              agentAccess: "hidden",
              default: !1,
              description: "Whether Codex runs inside WSL on Windows",
              key: "runCodexInWindowsSubsystemForLinux",
              schema: n3.uf,
              vscode: {
                default: !1,
                description:
                  "Deprecated. To run Codex in WSL, reopen your folder using the Microsoft WSL extension. Turn this setting off to run Codex on Windows. Changing it reloads the window.",
              },
            }),
          }
        var ob = n(24757)
        let oy = o.KCZ([
            o.k5n(["default", "classic", "none", "Basso", "Glass", "Ping", "Pop", "Purr", "Tink"]),
            o.Ikc({ fileName: o.YjP().regex(/^codex-custom-[a-f0-9]{64}\.(wav|aiff|caf)$/), name: o.YjP().min(1) }),
          ]),
          ow = {
            sound: (0, n4.at)({
              agentAccess: "read-write",
              default: "default",
              description: "Sound for all desktop task notifications; custom files must be imported on this computer",
              key: "notifications-sound",
              schema: oy,
            }),
            turnMode: (0, n4.KF)({
              agentAccess: "read-write",
              default: "unfocused",
              description: "When turn-completion notifications are shown",
              key: "notifications-turn-mode",
              schema: o.k5n(["off", "unfocused", "always"]),
            }),
            permissionsEnabled: (0, n4.KF)({
              agentAccess: "read-write",
              default: !0,
              description: "Whether permission notifications are shown",
              key: "notifications-permissions-enabled",
              schema: n3.uf,
            }),
            questionsEnabled: (0, n4.KF)({
              agentAccess: "read-write",
              default: !0,
              description: "Whether question notifications are shown",
              key: "notifications-questions-enabled",
              schema: n3.uf,
            }),
            dotEnabled: (0, n4.KF)({
              agentAccess: "read-write",
              default: !0,
              description: "Whether dot message notifications are shown",
              key: "notifications-dot-enabled",
              schema: n3.uf,
            }),
          },
          ok = o.aig().min(12).max(24)
        function o_() {
          return (i = i ?? {
            fontSize: (0, n4.IZ)({
              agentAccess: "read-write",
              default: 15,
              description: "Base font size for Page text",
              key: "pagesFontSize",
              schema: ok,
            }),
            fullWidth: (0, n4.IZ)({
              agentAccess: "read-write",
              default: !1,
              description: "Display Pages using the full available width for this viewer",
              key: "pagesFullWidth",
              schema: n3.uf,
            }),
            smartPunctuationEnabled: (0, n4.IZ)({
              agentAccess: "read-write",
              default: !0,
              description:
                "Automatically convert quotes, dashes, ellipses, arrows, and math symbols while typing in Pages",
              key: "pagesSmartPunctuationEnabled",
              schema: n3.uf,
            }),
          })
        }
        let oP = o.Ikc({
          showActivityGraph: o.zMY(),
          showUsageStatistics: o.zMY(),
          showTopPlugins: o.zMY().default(!0),
          showInsights: o.zMY().default(!0),
        })
        o.k5n(["circle", "blossom", "square", "oval", "scalloped"])
        let oI = {
            profilePetsByAccount: (0, n4.at)({
              agentAccess: "hidden",
              default: {},
              description: "Local profile pet selection for each signed-in user and workspace",
              key: "profile-pets-by-account",
              schema: o.g1P(
                o.YjP(),
                o.Ikc({ enabled: o.zMY(), petId: o.YjP().nullable(), displayName: o.YjP().optional() }),
              ),
            }),
            profileDisplayOptionsByUserId: (0, n4.at)({
              agentAccess: "hidden",
              default: {},
              description: "Local profile section visibility for each signed-in user",
              key: "profile-display-options-by-user-id",
              schema: o.g1P(o.YjP(), oP),
            }),
            defaultServiceTier: (0, n4.at)({
              agentAccess: "read-write",
              default: null,
              description: "Preferred model speed tier",
              key: rG,
              schema: n3.S4,
            }),
            selectedAvatarId: (0, n4.at)({
              agentAccess: "read-write",
              default: null,
              description: "Selected Codex avatar",
              key: "selected-avatar-id",
              schema: n3.S4,
            }),
            petSize: (0, n4.at)({
              agentAccess: "read-write",
              default: 112,
              description: "Size of the floating Codex pet",
              key: "avatar-overlay-mascot-width-px",
              schema: o.aig().int().min(80).max(224),
            }),
            petVisible: (0, n4.at)({
              agentAccess: "hidden",
              default: !0,
              description: "Whether the floating Codex pet is visible above its controls",
              key: "avatar-overlay-pet-visible",
              schema: o.zMY(),
            }),
            petVisibility: (0, n4.at)({
              agentAccess: "read-write",
              default: "always-visible",
              description: "Whether Mini stays visible or hides when you click away",
              key: "pet-visibility",
              schema: o.k5n(["always-visible", "on-demand"]),
            }),
          },
          oj = {
            screenContextEnabled: (0, n4.IZ)({
              agentAccess: "hidden",
              default: !0,
              description:
                "Whether realtime voice can inspect the foreground app when the user refers to screen content",
              key: "realtimeVoiceScreenContextEnabled",
              schema: n3.uf,
            }),
          },
          oA = {
            audioVisualizerEnabled: (0, n4.at)({
              agentAccess: "hidden",
              default: !1,
              description: "Whether conversation navigation rails react to system playback audio",
              key: "toys-audio-visualizer-enabled",
              schema: o.zMY(),
            }),
            confettiEnabled: (0, n4.at)({
              agentAccess: "hidden",
              default: !1,
              description: "Whether Codex can show confetti celebrations in the app window",
              key: "toys-confetti-enabled",
              schema: o.zMY(),
            }),
          }
        var oS = n(43913)
        function oO(e) {
          return (
            "none" === e ||
            "minimal" === e ||
            "low" === e ||
            "medium" === e ||
            "high" === e ||
            "xhigh" === e ||
            "max" === e ||
            "ultra" === e ||
            "persistent" === e
          )
        }
        ;(o.Ikc({
          enabled: o.YOg(o.YjP()).transform((e) => e.filter(oO)),
          source: o.k5n(["default", "migrated", "user"]),
          uses_defaults: o.zMY(),
        }),
          o.Ikc({
            modelContextWindow: o.Whr().positive().nullish(),
            modelAutoCompactTokenLimit: o.Whr().positive().nullish(),
            model: o.YjP().min(1).max(256).nullish(),
            reasoningEffort: o.YjP().min(1).max(32).nullish(),
            serviceTier: o.k5n(["standard", "fast", "ultrafast"]).nullish(),
            approvalPolicy: o.k5n(["on-request", "untrusted", "never"]).nullish(),
            sandboxMode: o.k5n(["read-only", "workspace-write"]).nullish(),
            networkAccess: o.zMY().nullish(),
            webSearch: o.k5n(["disabled", "cached", "live"]).nullish(),
            enabledReasoningEfforts: ob.K.enabledReasoningEfforts.schema.nullish(),
            showUltraInModelPickerSlider: o.zMY().nullish(),
            cloudBrowserUse: o.zMY().nullish(),
          }))
        let oE = [
            ...Object.values(r0),
            ...Object.values(r6),
            ...Object.values(r8),
            ...Object.values(r7),
            ...Object.values(on),
            ...Object.values(oo),
            ...Object.values(oc),
            ...Object.values(
              (a = a ?? {
                gitHostingProvider: (0, n4.at)({
                  agentAccess: "hidden",
                  default: "github",
                  description: "Selected code hosting provider for Code Review",
                  key: "code-review-git-hosting-provider",
                  schema: oi,
                }),
                gitlabConnectorId: (0, n4.at)({
                  agentAccess: "hidden",
                  default: null,
                  description: "GitLab connection used by Code Review; unset uses gitlab.com",
                  key: "code-review-gitlab-connector-id",
                  schema: o.YjP().trim().min(1).nullable(),
                }),
                githubConnection: (0, n4.at)({
                  agentAccess: "hidden",
                  default: null,
                  description: "GitHub connection used by Code Review; unset uses github.com",
                  key: "code-review-github-connection",
                  schema: oa,
                }),
                sidebarSections: (0, n4.at)({
                  agentAccess: "hidden",
                  default: ["waiting_for_review", "needs_my_review", "needs_my_teams_review"],
                  description: "Visible sections in the Code Review sidebar",
                  key: "code-review-sidebar-sections",
                  schema: or,
                }),
                sidebarLayout: (0, n4.at)({
                  agentAccess: "hidden",
                  default: "detailed",
                  description: "Layout of pull requests in the Code Review sidebar",
                  key: "code-review-sidebar-layout",
                  schema: o.k5n(["compact", "detailed"]),
                }),
                githubLinkTarget: (0, n4.at)({
                  agentAccess: "hidden",
                  default: "github",
                  description: "Where pull request and merge request links open",
                  key: "code-review-github-link-target",
                  schema: o.k5n(["code-review-tab", "github"]),
                }),
                localReviewInstructions: (0, n4.at)({
                  agentAccess: "read-only",
                  default: "",
                  description: "Personal instructions for private code reviews you start",
                  key: "code-review-local-instructions",
                  schema: o.YjP(),
                }),
              }),
            ),
            ...Object.values({
              enabled: (0, n4.at)({
                agentAccess: "hidden",
                default: !0,
                description: "Whether the composer predicts the user's next message",
                key: "composer-predictions-enabled",
                schema: n3.uf,
              }),
            }),
            ...Object.values(om),
            ...Object.values(og),
            ...Object.values(ov),
            ...Object.values(ox),
            ...Object.values(n5),
            ...Object.values(ob.K),
            ...Object.values(ow),
            ...Object.values(oI),
            ...Object.values(oj),
            (0, n4.at)({
              agentAccess: "hidden",
              default: !0,
              description: "Whether Priority includes chats created by your dot",
              key: "sidebarShowYourDotInRecents",
              schema: n3.uf,
            }),
            o_().fontSize,
            o_().fullWidth,
            o_().smartPunctuationEnabled,
            ...Object.values(oA),
            ...Object.values(oS.u),
            ...Object.values(n9),
          ],
          oT = "TOML-backed settings cannot contain null in dynamic object fields"
        function oz(e, t) {
          return (function e(t, n) {
            if (null == n) return null
            if ("boolean" == typeof n || "number" == typeof n || "string" == typeof n) return n
            if (Array.isArray(n)) {
              if (n.some((e) => null == e)) throw Error("TOML-backed settings cannot contain null inside arrays")
              let a = t instanceof o.naA ? oR(t.element) : void 0
              return n.map((t) => e(a, t))
            }
            if (!o$(n)) throw Error("TOML-backed settings must be JSON-compatible")
            if (t instanceof o.b8S)
              return Object.fromEntries(
                Object.entries(n).map(([n, a]) => {
                  if (null == a) throw Error(oT)
                  return [n, e(oR(t.valueType), a)]
                }),
              )
            let a = t instanceof o.bvH ? t : null
            return Object.fromEntries(
              Object.entries(n).flatMap(([t, n]) => {
                if (void 0 === n) return []
                let i = a?.shape[t]
                if (null == n) {
                  if (null == i) throw Error(oT)
                  return []
                }
                return [[t, e(null == i ? void 0 : oR(i), n)]]
              }),
            )
          })(oR(e), t)
        }
        function oC(e, t) {
          return (function e(t, n) {
            if (Array.isArray(n)) {
              let a = t instanceof o.naA ? oR(t.element) : void 0
              return n.map((t) => e(a, t))
            }
            if (!o$(n)) return n
            if (t instanceof o.b8S)
              return Object.fromEntries(Object.entries(n).map(([n, a]) => [n, e(oR(t.valueType), a)]))
            if (!(t instanceof o.bvH)) return n
            let a = Object.fromEntries(
              Object.entries(n).map(([n, a]) => [n, e(null == t.shape[n] ? void 0 : oR(t.shape[n]), a)]),
            )
            for (let [e, n] of Object.entries(t.shape))
              !Object.prototype.hasOwnProperty.call(a, e) && n.isNullable() && (a[e] = null)
            return a
          })(oR(e), t)
        }
        function oR(e) {
          return e instanceof o.XiL || e instanceof o.l1C || e instanceof o.IiU ? oR(e.unwrap()) : e
        }
        function o$(e) {
          return "object" == typeof e && null != e && !Array.isArray(e)
        }
        let oM = [...oE],
          oY = oE.filter((e) => "hidden" !== e.agentAccess),
          oD = rX()(() =>
            oY.map(({ agentAccess: e, default: t, description: n, key: a, schema: i }) => ({
              agentAccess: e,
              default: t,
              description: n,
              key: a,
              schema: s.bl(
                (function (e) {
                  switch (e) {
                    case "appearanceLightCodeThemeId":
                      return o.k5n((0, r1.P6)("light"))
                    case "appearanceDarkCodeThemeId":
                      return o.k5n((0, r1.P6)("dark"))
                    default:
                      return
                  }
                })(a) ?? i,
              ),
            })),
          ),
          oN = new Map(oM.map((e) => [e.key, e]))
        function oL(e) {
          return oN.get(e)
        }
        function oU(e) {
          return oL(e).schema
        }
        function oF(e, t) {
          return oU(e).parse(t)
        }
        let oq = "CODEX_SHELL",
          oW = "_SHELL_ENV_DELIMITER_",
          oZ = `printf '\\0%s\\0' '${oW}'; command env -0 || exit; printf '\\0%s\\0' '${oW}'; exit`,
          oB = { DISABLE_AUTO_UPDATE: "true", ZSH_TMUX_AUTOSTARTED: "true", ZSH_TMUX_AUTOSTART: "false" },
          oH =
            /(?:\u001B\][\s\S]*?(?:\u0007|\u001B\u005C|\u009C)|[\u001B\u009B][[\]()#;?]*(?:\d{1,4}(?:[;:]\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~])/g
        function oK(e, t) {
          let n = "\0" === t ? `\0${oW}\0` : oW,
            [, a, i] = e.split(n)
          if (null == a || null == i) throw Error("Shell output did not contain env delimiters")
          let r = {}
          for (let e of ("\n" === t ? a.replace(oH, "") : a).split(t)) {
            let n = "\n" === t ? e.trimEnd() : e,
              a = n.indexOf("=")
            a > 0 && (r[n.slice(0, a)] = n.slice(a + 1))
          }
          return r
        }
        let oJ = { powershell: "PowerShell", commandPrompt: "Command Prompt", gitBash: "Git Bash", wsl: "WSL" }
        var oG = n(72551)
        let oV = o.Ikc({ threadIds: o.YOg(o.YjP()), sortKey: o.k5n(["created_at", "updated_at"]).optional() }),
          oQ = o.g1P(o.YjP(), o.L5J()),
          oX = o.PVZ([o.YjP(), o.YjP(), o.YjP().startsWith("g-p-")]),
          o0 = o.gMt("type", [
            o.Ikc({ type: o.euz("reorder"), visibleKeys: o.YOg(o.YjP().min(1)), nextKeys: o.YOg(o.YjP().min(1)) }),
            o.Ikc({ type: o.euz("prepend"), key: o.YjP().min(1), ifMissing: o.zMY().optional() }),
            o.Ikc({ type: o.euz("replace"), previousKey: o.YjP().min(1), key: o.YjP().min(1) }),
          ])
        function o1(e, t) {
          if ("prepend" === t.type)
            return t.ifMissing && e.includes(t.key) ? e : [t.key, ...e.filter((e) => e !== t.key)]
          if ("replace" === t.type)
            return t.key !== t.previousKey && e.includes(t.previousKey)
              ? e.filter((e) => e !== t.key).map((e) => (e === t.previousKey ? t.key : e))
              : e
          let n = new Set(t.visibleKeys)
          if (
            n.size !== t.visibleKeys.length ||
            new Set(t.nextKeys).size !== t.nextKeys.length ||
            t.nextKeys.length !== t.visibleKeys.length ||
            t.nextKeys.some((e) => !n.has(e))
          )
            throw Error("A task reorder must preserve the visible task membership")
          return o4({
            threadIds: [...new Set([...e, ...t.visibleKeys])],
            visibleThreadIds: t.visibleKeys,
            nextVisibleThreadIds: t.nextKeys,
          })
        }
        function o2(e, t) {
          let n
          if (!e.startsWith("linked:")) return !0
          if (null == t) return !1
          try {
            n = oX.safeParse(JSON.parse(e.slice(7))).data
          } catch {
            return !1
          }
          return n?.[0] === t.accountId && n[1] === t.userId
        }
        function o3(e, t, n) {
          return o2(e, n)
            ? e.startsWith("linked:")
              ? t.flatMap((e) => {
                  let t = oG.$I.safeParse(e).data
                  if (t?.startsWith("chatgpt:conversation:")) return [t.slice(21)]
                  if (t?.startsWith("codex:thread:local:") !== !0) return []
                  let n = t.slice(19)
                  return 0 === n.length || (0, eN.L$)(n) ? [] : [n]
                })
              : t
            : []
        }
        function o4({ threadIds: e, visibleThreadIds: t, nextVisibleThreadIds: n }) {
          let a = new Set(t),
            i = 0,
            r = []
          for (let t of e) {
            if (!a.has(t)) {
              r.push(t)
              continue
            }
            let e = n[i]
            ;(null != e && r.push(e), (i += 1))
          }
          return r
        }
        function o5(e) {
          let t = oQ.safeParse(e).data
          return null == t
            ? {}
            : Object.fromEntries(
                Object.entries(t).flatMap(([e, t]) => {
                  let n = oV.safeParse(t).data
                  return null == n ? [] : [[e, n]]
                }),
              )
        }
        let o6 = ["png", "jpg", "jpeg", "gif", "webp"],
          o9 = new Set(["image/gif", "image/jpeg", "image/jpg", "image/png", "image/webp", "image/x-png"]),
          o8 = new Set(o6)
        function o7(e) {
          let t = e.lastIndexOf(".")
          return !(t < 0) && t !== e.length - 1 && o8.has(e.slice(t + 1).toLowerCase())
        }
        function se(e) {
          let t = e.type?.toLowerCase() ?? ""
          return t.startsWith("image/") ? o9.has(t) : o7(e.name ?? "")
        }
        let st = o.Ikc({ id: o.YjP(), hostId: o.YjP(), remotePath: o.YjP(), label: o.YjP() })
        function sn(e) {
          let t = (0, nL.AQ)(e.trim())
          return 0 === t.length
            ? ""
            : /^\/+$/.test(t)
              ? "/"
              : /^[A-Za-z]:\/+$/.test(t)
                ? `${t.slice(0, 2)}/`
                : t.replace(/\/+$/, "")
        }
        function sa(e) {
          let t = (0, nL.JH)(e.trim()).replace(/\/+/g, "/")
          return "/" === t ? t : t.replace(/\/+$/, "")
        }
        function si(e) {
          let t = sn(e)
          return iH().posix.basename(t) || t
        }
        let sr = [
          "bootstrap",
          "host_ready",
          "window_created",
          "renderer_ready",
          "first_content_visible",
          "background_ready",
        ]
        class so {
          abortController = new AbortController()
          listeners = new Set()
          phase
          constructor(e = "bootstrap") {
            this.phase = e
          }
          getSnapshot = () => this.phase
          subscribe = (e) =>
            this.abortController.signal.aborted
              ? () => {}
              : (this.listeners.add(e),
                () => {
                  this.listeners.delete(e)
                })
          hasReached(e) {
            return sr.indexOf(this.phase) >= sr.indexOf(e)
          }
          reach(e) {
            if (!(this.abortController.signal.aborted || this.hasReached(e)))
              for (let t of ((this.phase = e), this.listeners)) t()
          }
          whenReached(e, t) {
            return t?.aborted
              ? Promise.reject(ss(t))
              : this.abortController.signal.aborted
                ? Promise.reject(ss(this.abortController.signal))
                : this.hasReached(e)
                  ? Promise.resolve()
                  : new Promise((n, a) => {
                      let i = this.subscribe(() => {
                          this.hasReached(e) && (o(), n())
                        }),
                        r = () => {
                          ;(o(), a(ss(t?.aborted ? t : this.abortController.signal)))
                        },
                        o = () => {
                          ;(i(),
                            t?.removeEventListener("abort", r),
                            this.abortController.signal.removeEventListener("abort", r))
                        }
                      ;(t?.addEventListener("abort", r, { once: !0 }),
                        this.abortController.signal.addEventListener("abort", r, { once: !0 }))
                    })
          }
          dispose() {
            this.abortController.signal.aborted ||
              (this.abortController.abort(new DOMException("Startup was disposed", "AbortError")),
              this.listeners.clear())
          }
        }
        function ss(e) {
          return e.reason instanceof Error ? e.reason : new DOMException("Startup was canceled", "AbortError")
        }
        let sl = 6e4,
          sc = 36,
          sp = 100,
          su = 280,
          sd = 60
        function sm(e, t = sc) {
          let n = (
            e
              .replace(/\r\n/g, "\n")
              .split("\n")
              .find((e) => e.trim().length > 0) ?? ""
          ).trim()
          if (
            0 === n.length ||
            0 ===
              (n = (n = (n = (n = n.replace(/^title[:\s]+/i, "")).replace(
                /^[`"'\u201c\u201d\u2018\u2019]+|[`"'\u201c\u201d\u2018\u2019]+$/g,
                "",
              ))
                .replace(/\s+/g, " ")
                .trim())
                .replace(/[.?!]+$/, "")
                .trim()).length
          )
            return null
          if (n.length > t) {
            let e = t
            " " !== n[e] && " " !== n[e - 1] && -1 === (e = n.indexOf(" ", e)) && (e = n.length)
            let a = n.slice(0, e).trimEnd()
            return 0 === n.slice(e).trim().length ? a : `${a}…`
          }
          return n
        }
        var sf = n(63068)
        function sh(e) {
          var t
          return ((t = `local:${e}`), `thread-client-id-v1:${encodeURIComponent(t)}`)
        }
        ;(n(42871), n(20885))
        let sg = "thread-tab-routes-v1:"
        function sv(e) {
          return `${sg}${encodeURIComponent(e)}`
        }
        let sx = [
          ["expected active turn id", "active_turn_mismatch"],
          ["Configuration was modified since last read", "config_modified"],
          ["os error 28", "disk_full"],
          ["os error 112", "disk_full"],
          ["no goal exists", "goal_not_found"],
          ["Invalid configuration:", "invalid_config"],
          ["expected any valid TOML value", "invalid_config"],
          ["AbsolutePathBuf deserialized without a base path", "invalid_config"],
          ["failed to load configuration:", "invalid_config"],
          ["no active turn to", "no_active_turn"],
          ["Codex app-server is not available", "remote_unavailable"],
          ["thread rollback requires persisted thread history", "rollback_history_missing"],
          ["rollback already in progress", "rollback_in_progress"],
          ["no rollout found for thread id", "rollout_not_found"],
          ["failed to resolve rollout path", "rollout_not_found"],
          [" is archived", "thread_archived"],
          ["thread not found:", "thread_not_found"],
          ["Client specified an invalid argument: unknown thread:", "thread_not_found"],
          ["Cannot rollback while a turn is in progress", "turn_in_progress"],
          ["Unauthorized", "unauthorized"],
          ["auth failed", "unauthorized"],
        ]
        function sb(e, t) {
          if (sk(e)) {
            let n = sw(t)
            return { "app_server.error_code": e, ...(null == n ? {} : { "app_server.failure_reason": n }) }
          }
          return {}
        }
        function sy(e) {
          if (
            null != e &&
            "object" == typeof e &&
            (("code" in e && sk(e.code)) || ("jsonRpcCode" in e && sk(e.jsonRpcCode)))
          )
            return sw(e)
        }
        function sw(e) {
          if (null == e || "object" != typeof e || !("message" in e) || "string" != typeof e.message) return
          let { message: t } = e
          return t.includes("Connection for host ID") && t.includes(" not found")
            ? "remote_unavailable"
            : sx.find(([e]) => t.includes(e))?.[1]
        }
        function sk(e) {
          return (
            "number" == typeof e &&
            Number.isInteger(e) &&
            ((e >= -32099 && e <= -32e3) || -32700 === e || (e >= -32603 && e <= -32600))
          )
        }
        function s_(e) {
          let t = null != e && "object" == typeof e && "name" in e ? e.name : null
          return "AbortError" === t
            ? { "codex.outcome": "canceled" }
            : "string" == typeof t &&
                t.startsWith("AppServerRequestError(") &&
                null != e &&
                "object" == typeof e &&
                "code" in e &&
                "number" == typeof e.code
              ? {
                  "codex.outcome": "failure",
                  "error.category": "app_server",
                  "error.type": "operation_failed",
                  ...sb(e.code, e),
                }
              : {
                  "codex.outcome": "failure",
                  "error.category":
                    "TimeoutError" === t ||
                    (e instanceof Error &&
                      ("Timeout" === e.message || e.message.startsWith("Timed out waiting for MCP response to ")))
                      ? "timeout"
                      : "unexpected",
                  "error.type": "operation_failed",
                }
        }
        let sP = {
          getActiveSpanContext: () => null,
          getActiveTraceContext: () => null,
          runWithTraceContext: (e, t) => t(),
          setActiveSpanAttributes: (e) => {},
          setActiveSpanOutcome: (e, t) => {},
          startSpan: (e, t) => t(),
        }
        function sI(e) {
          sP = e
        }
        function sj(e, t) {
          return sP.startSpan(e, t)
        }
        function sA() {
          return sP.getActiveSpanContext()
        }
        function sS() {
          return sP.getActiveTraceContext()
        }
        function sO(e, t) {
          return sP.runWithTraceContext(e, t)
        }
        function sE(e, t) {
          sP.setActiveSpanOutcome(e, t)
        }
        function sT(e) {
          sP.setActiveSpanAttributes(e)
        }
        let sz = "none"
        function sC(e) {
          let t = [],
            n = !1,
            a = e.length
          for (let i = 0; i < e.length; i += 1) {
            let r = e[i]
            if (n)
              if ("\\" === r) {
                let t = "u" === e[i + 1] ? 6 : 2
                if (i + t > e.length) {
                  a = i
                  break
                }
                i += t - 1
              } else '"' === r && (n = !1)
            else if ('"' === r) n = !0
            else if ("{" === r) t.push("}")
            else if ("[" === r) t.push("]")
            else if (("}" === r || "]" === r) && t.pop() !== r) return
          }
          try {
            return JSON.parse(e.slice(0, a) + (n ? '"' : "") + t.reverse().join(""))
          } catch {
            return
          }
        }
        let sR = "update-resume-state-v1",
          s$ = 9e5
        var sM = n(38591)
        let sY = 4,
          sD = "Git is unavailable",
          sN = 3e4,
          sL = "Codex <noreply@openai.com>",
          sU = 5e3
        function sF(e) {
          return e
        }
        class sq {
          emit
          constructor(e) {
            this.emit = e
          }
        }
        let sW = "codex_desktop:connect-git-worker",
          sZ = "codex_desktop:git-worker-port",
          sB = ["git"]
        o.k5n(["project", "projectless"])
        let sH = o.Ikc({ threadId: o.YjP().min(1), archived: o.zMY() }),
          sK = o
            .YjP()
            .min(1)
            .max(64)
            .regex(
              /^(?![0-9a-f]{4,}$)(?!(?:con|prn|aux|nul|com[1-9]|lpt[1-9])$)[a-z0-9]+(?:-[a-z0-9]+)*$/,
              "Use lowercase letters, numbers, and single hyphens; hexadecimal IDs and Windows device names are reserved.",
            )
        async function sJ(e) {
          let t = new Map()
          for await (let n of sQ(e)) t.set(n.threadId, n)
          return [...t.values()]
        }
        async function sG(e, t) {
          try {
            for await (let n of sQ(e)) if (n.threadId !== t) return !0
            return !1
          } catch {
            return null
          }
        }
        async function sV({
          archivedThreadId: e,
          listThreads: t,
          worktreeRoot: n,
          runningOnly: a = !1,
          environmentId: i,
        }) {
          let r = (0, nL.JH)(n).replace(/\/+$/, ""),
            o = null,
            s = null
          do {
            let n = await t({ archived: !1, cursor: s, limit: 100, sourceKinds: a ? eu.dV : eu.mu, useStateDbOnly: !0 })
            for (let t of n.data) {
              let n = null == i ? t.cwd : t.environments?.find((e) => e.environmentId === i)?.cwd
              if (null == n && (t.environments?.length ?? 0) > 0) continue
              let s = (0, nL.JH)(n ?? t.cwd).replace(/\/+$/, "")
              t.id === e ||
                (a && "active" !== t.status.type) ||
                (s !== r && !s.startsWith(`${r}/`)) ||
                (null != o &&
                  (t.createdAt > o.createdAt || (t.createdAt === o.createdAt && t.id.localeCompare(o.id) >= 0))) ||
                (o = t)
            }
            s = n.nextCursor
          } while (null != s)
          return o
        }
        async function* sQ({ worktreeRoot: e, listOwners: t }) {
          let n = new Set(),
            a = null
          do {
            let i = await t({ attachmentType: "worktree", identityKey: e, archived: !1, cursor: a, limit: 100 })
            for (let e of o.YOg(o.L5J()).parse(i.data)) {
              let t = sH.parse(e)
              t.archived || (yield t)
            }
            if (null != (a = o.YjP().nullable().parse(i.nextCursor))) {
              if (n.has(a)) throw Error("App Server repeated a worktree attachment owner cursor")
              n.add(a)
            }
          } while (null != a)
        }
        function sX(e) {
          return !!/^\/mnt\/[a-zA-Z](?:\/|$)/.test(e) || /^\\{1,2}[Mm][Nn][Tt]\\[a-zA-Z](?:\\|$)/.test(e)
        }
        function s0(e) {
          return !!/^[a-zA-Z]:[\\/]/.test(e) || e.startsWith("\\\\") || e.startsWith("//")
        }
        function s1(e) {
          return /^(\\\\|\/\/)(?:\?[\\/]UNC[\\/])?(wsl\$|wsl\.localhost)[\\/]/i.test(e)
        }
        function s2(e) {
          return e.match(/^(?:\\\\|\/\/)(?:\?[\\/]UNC[\\/])?(?:wsl\$|wsl\.localhost)[\\/]([^\\/]+)/i)?.[1] ?? null
        }
        function s3(e) {
          let t = e.match(/^\/mnt\/([a-zA-Z])(?:\/(.*))?$/)
          if (t) {
            let e = t[1].toUpperCase(),
              n = (t[2] ?? "").replace(/\//g, "\\")
            return `${e}:\\${n}`
          }
          let n = e.match(/^\\{1,2}[Mm][Nn][Tt]\\([a-zA-Z])(?:\\(.*))?$/i)
          if (n) {
            let e = n[1].toUpperCase(),
              t = (n[2] ?? "").replace(/[\\/]/g, "\\")
            return `${e}:\\${t}`
          }
          let a = e.match(/^C:\\mnt\\c(.*)$/i)
          if (a) {
            let e = a[1].replace(/^([\\/])+/, "").replace(/[\\/]/g, "\\")
            return `C:\\${e}`
          }
          return e.replace(/\//g, "\\")
        }
        function s4(e) {
          return e.replace(/\//g, "\\")
        }
        let s5 = /^[^\r\n\0]*$/,
          s6 = o.Ikc({
            hostId: o.YjP(),
            roots: o.YOg(o.YjP().min(1)).min(1).max(20),
            priorityFolders: o.YOg(o.YjP().min(1).max(4096).regex(s5)).max(20).optional(),
            query: o.YjP().min(1).max(256).regex(s5),
            fileMask: o.YjP().max(256).regex(s5),
          }),
          s9 = s6.pick({ hostId: !0, roots: !0 })
      },
      9169(e, t, n) {
        "use strict"
        n.d(t, {
          pe: () => p,
          rT: () => s,
          NG: () => h,
          tZ: () => f,
          $C: () => g,
          vB: () => v,
          w6: () => x,
          Br: () => m,
        })
        var a = n(37418),
          i = n(40893)
        let r = i.vkY(
            (e) => (Array.isArray(e) ? e.slice(0, 5) : e),
            i.YOg(
              i.Ikc({
                code: i.YjP().transform((e) => e.slice(0, 80)),
                path: i.vkY(
                  (e) => (Array.isArray(e) ? e.slice(0, 8) : e),
                  i.YOg(i.KCZ([i.YjP().transform((e) => e.slice(0, 80)), i.aig()])),
                ),
              }),
            ),
          ),
          o = i.Ikc({
            code: i
              .KCZ([i.YjP().transform((e) => e.slice(0, 80)), i.aig()])
              .optional()
              .catch(void 0),
            issues: r.optional().catch(void 0),
            data: i
              .Ikc({ issues: r.optional() })
              .optional()
              .catch(void 0),
          })
        function s(e) {
          if (!e.startsWith("[")) return { loggerName: null, message: e }
          let t = e.indexOf("]")
          if (-1 === t || " " !== e[t + 1]) return { loggerName: null, message: e }
          let n = e.slice(1, t).trim()
          return n ? { loggerName: n, message: e.slice(t + 2) } : { loggerName: null, message: e }
        }
        let l = { safe: {}, sensitive: {} }
        function c(e) {
          return null == e ? l : { safe: e.safe, sensitive: e.sensitive ?? {} }
        }
        class p {
          buffer = []
          maxBufferSize = 500
          hasLoggedDroppedLogMessage = !1
          push(e) {
            if (this.buffer.length >= this.maxBufferSize) {
              this.hasLoggedDroppedLogMessage ||
                ((this.hasLoggedDroppedLogMessage = !0),
                this.buffer.push({
                  timestamp: e.timestamp,
                  level: "warning",
                  message: "Dropped buffered log message after maxBufferSize was reached",
                  tags: l,
                }))
              return
            }
            this.buffer.push(e)
          }
          createLogMethod(e) {
            return (t, n) => {
              this.log(e, t, n)
            }
          }
          trace = this.createLogMethod("trace")
          debug = this.createLogMethod("debug")
          info = this.createLogMethod("info")
          warning = this.createLogMethod("warning")
          error = this.createLogMethod("error")
          log = (e, t, n, a = Date.now()) => {
            this.push({ timestamp: a, level: e, message: t, tags: c(n) })
          }
          flushTo(e) {
            for (let t of this.buffer) e(t.level, t.message, t.tags, t.timestamp)
            this.buffer.length = 0
          }
          dispose() {
            this.buffer = []
          }
        }
        let u = new p(),
          d = !1
        function m(e) {
          if (d && ("u" < typeof process || 1)) throw Error("Logger already set")
          ;((d = !0), u instanceof p && u.flushTo((...t) => e.log(...t)), (u = e))
        }
        function f() {
          return u
        }
        function h(e) {
          let t = (function (e) {
            let t = {}
            for (let [n, a] of Object.entries(e)) {
              if ("error" === n && a instanceof Error) {
                Object.assign(
                  t,
                  (function e(t, n = 0) {
                    let a = o.parse(t),
                      i = {
                        errorName: t.name.slice(0, 80),
                        errorMessage: t.message.slice(0, 16e3),
                        errorStack: t.stack?.slice(0, 32e3),
                      }
                    null != a.code && (i.errorCode = a.code)
                    let r = a.issues ?? a.data?.issues
                    return (
                      null != r && (i.errorIssues = r),
                      n < 3 && t.cause instanceof Error && (i.errorCause = e(t.cause, n + 1)),
                      i
                    )
                  })(a),
                )
                continue
              }
              t[n] = "error" === n && "string" == typeof a ? a.slice(0, 16e3) : a
            }
            return t
          })(e)
          return Object.keys(t)
            .sort((e, t) => e.localeCompare(t))
            .map((e) => {
              let n = t[e]
              return `${e}=${(function (e) {
                if ("string" == typeof e) return 0 === e.length || /\s/.test(e) ? JSON.stringify(e) : e
                if ("number" == typeof e || "boolean" == typeof e || "bigint" == typeof e) return String(e)
                if (null == e) return void 0 === e ? "undefined" : "null"
                try {
                  let t = JSON.stringify(e)
                  if (null != t) return t
                } catch {}
                return (0, a.inspect)(e)
              })(n)}`.replace(
                /codex-texture-v[0-9]+:[A-Za-z0-9.-]+:[0-9a-f]{64}/g,
                "[redacted shared texture connection token]",
              )
            })
            .join(" ")
        }
        function g(e) {
          let t = `[${e}] `,
            n = (e, n, a) => {
              u.log(e, `${t}${n}`, c(a))
            },
            a = (e) => (t, a) => {
              n(e, t, a)
            }
          return {
            trace: a("trace"),
            debug: a("debug"),
            info: a("info"),
            warning: a("warning"),
            error: a("error"),
            log: (e, t, a) => {
              n(e, t, a)
            },
            dispose: () => {
              u.dispose()
            },
          }
        }
        function v(e) {
          let t = null
          return () => (t = t ?? g(e))
        }
        function x(e) {
          let t = Date.now(),
            n = g(e),
            a = (e, n) => [`[${((Date.now() - t) / 1e3).toFixed(3)}] ${e}`, c(n)]
          return {
            trace: (e, t) => {
              let [i, r] = a(e, t)
              n.trace(i, r)
            },
            debug: (e, t) => {
              let [i, r] = a(e, t)
              n.debug(i, r)
            },
            info: (e, t) => {
              let [i, r] = a(e, t)
              n.info(i, r)
            },
            warning: (e, t) => {
              let [i, r] = a(e, t)
              n.warning(i, r)
            },
            error: (e, t) => {
              let [i, r] = a(e, t)
              n.error(i, r)
            },
            log: (e, t, i) => {
              let [r, o] = a(t, i)
              n.log(e, r, o)
            },
            dispose: () => {
              n.dispose()
            },
          }
        }
      },
      29176(e, t, n) {
        "use strict"
        n.d(
          t,
          {},
          {
            R: function (e) {
              if (e instanceof Error) return e.message
              if ("string" == typeof e) return e
              if ("object" == typeof e && null != e && "message" in e) {
                let t = e.message
                if ("string" == typeof t && t.length > 0) return t
              }
              try {
                return JSON.stringify(e)
              } catch {
                return String(e)
              }
            },
          },
        )
      },
      71527(e, t, n) {
        "use strict"
        var a = n(62762)
        ;(n(8857), n(8292))
        let i = n(40893).gMt("type", [a.yu, a.gX, a.u$, a.w9])
        n.d(
          t,
          {},
          {
            U1: function (e) {
              return null == e.content
                ? e.imageAttachments.map(({ src: e }) => e)
                : e.content.flatMap((e) => ("image" === e.type ? [`data:${e.mimeType};base64,${e.data}`] : []))
            },
            af: function (e) {
              if (null == e.content) return e.text
              let t = e.content
                .flatMap((e) => {
                  switch (e.type) {
                    case "text":
                      return [e.text]
                    case "resource_link":
                      return [JSON.stringify({ ...e, _meta: void 0 })]
                    case "resource":
                      return [JSON.stringify({ ...e, _meta: void 0, resource: { ...e.resource, _meta: void 0 } })]
                    case "image":
                      return []
                  }
                })
                .join("\n\n")
                .trim()
              return t.length > 0 ? t : null
            },
            g5: function (e, t) {
              let n = [],
                a = []
              for (let i of e ?? []) (i.untrusted || (t && "message" !== i.kind) ? a : n).push(i)
              return { user: n, untrusted: a }
            },
            nk: i,
            uh: ["card", "pill"],
          },
        )
      },
      30329(e, t, n) {
        "use strict"
        n.d(
          t,
          {},
          {
            l: class {
              minIntervalMs
              lastMarkedAtMs = -1 / 0
              constructor(e) {
                this.minIntervalMs = e.minIntervalMs
              }
              canPass(e = Date.now()) {
                return e - this.lastMarkedAtMs >= this.minIntervalMs
              }
              mark(e = Date.now()) {
                this.lastMarkedAtMs = e
              }
              tryPass(e = Date.now()) {
                return !!this.canPass(e) && (this.mark(e), !0)
              }
            },
          },
        )
      },
      40818(e, t, n) {
        "use strict"
        let a = "CODEX_CLI_PATH",
          i = "NODE_REPL_NODE_MODULE_DIRS",
          r = "NODE_REPL_NODE_PATH",
          o = "NODE_REPL_REQUEST_META",
          s = "node_repl",
          l = "cua_repl",
          c = "NODE_REPL_TRACE_META",
          p = "NODE_REPL_TRUSTED_CODE_PATHS"
        function u(e, t) {
          return e.filter((e) => e.length > 0).join("win32" === t ? ";" : ":")
        }
        function d(e) {
          return "darwin" === e || "linux" === e || "win32" === e
        }
        n.d(
          t,
          {},
          {
            Fv: s,
            H0: "artifact_session",
            NL: a,
            PO: function ({
              codexCliPath: e,
              codexHome: t,
              envVars: n = [],
              extraEnv: l,
              nodeModuleDirs: m = "",
              nodePath: f,
              nodeReplPath: h,
              platform: g,
              requestMeta: v,
              sentryUserId: x,
              traceMeta: b = !1,
              shouldUseWslPaths: y,
            }) {
              if (null == f || null == h) return null
              let w = {
                NODE_REPL_NATIVE_PIPE_CONNECT_TIMEOUT_MS: "1000",
                [i]: m,
                [r]: f,
                [p]: u([t, m], g),
                CODEX_HOME: t,
              }
              ;(null != v && (w[o] = v),
                null != x && (w.NODE_REPL_SENTRY_USER_ID = x),
                b && (w[c] = "1"),
                Object.assign(
                  w,
                  (function (e) {
                    let t = {}
                    for (let [n, a] of Object.entries(e ?? {})) null != a && (t[n] = a)
                    return t
                  })(l),
                ),
                null != e && d(g) && (w[a] = e))
              let k = n
              if ("win32" === g && !y && null != e) {
                let e = "CODEX_WINDOWS_REGISTERED_CORE"
                k = [...new Set([...n, e])]
                let t = w.NODE_REPL_UNTRUSTED_ENV_ALLOWLIST
                w.NODE_REPL_UNTRUSTED_ENV_ALLOWLIST = t ? `${t},${e}` : e
              }
              return (
                y &&
                  (w.WSLENV = Object.keys(w)
                    .map((e) => `${e}/w`)
                    .join(":")),
                {
                  [`mcp_servers.${s}`]: {
                    args: [],
                    command: h,
                    env: w,
                    ...(0 === k.length ? {} : { env_vars: Array.from(k) }),
                    startup_timeout_sec: 120,
                  },
                }
              )
            },
            QK: d,
            Zz: u,
            gV: i,
            n9: c,
            oR: p,
            qO: function (e) {
              return e === s || e === l
            },
            uC: l,
            wL: r,
            yt: "NODE_REPL_TRUSTED_SERVICES",
            zN: o,
          },
        )
      },
      72354(e, t, n) {
        "use strict"
        var a = n(40893)
        ;(a.rej({ message: a.YjP().trim().min(1).describe("The concise question or update to send to the user.") }),
          n.d(t, {}, { BB: "cloud_threads.create" }))
      },
      55073(e, t, n) {
        "use strict"
        let a, i
        var r = n(40893),
          o = n(99365)
        let s = "/browser/handoff",
          l =
            ((a = r
              .YjP()
              .max(128)
              .refine((e) => e.trim().length > 0 && new TextEncoder().encode(e).length <= 128)),
            (i = r
              .YjP()
              .regex(/^[1-9][0-9]*$/)
              .refine((e) => Number.isSafeInteger(Number(e)))),
            r.Ikc({ threadId: r.PVZ([a]), tabId: r.PVZ([i]), connectionThreadId: r.KCZ([r.PVZ([]), r.PVZ([a])]) }))
        function c(e) {
          let t = l.safeParse({
            threadId: e.getAll("thread_id"),
            tabId: e.getAll("tab_id"),
            connectionThreadId: e.getAll("connection_thread_id"),
          })
          if (!t.success) return null
          let n = (0, o.JX)(t.data.threadId[0])
          return {
            threadId: n,
            tabId: t.data.tabId[0],
            connectionThreadId: (0, o.JX)(t.data.connectionThreadId[0] ?? n),
          }
        }
        n.d(
          t,
          {},
          {
            Qe: c,
            W0: s,
            cQ: function (e) {
              let t = new URLSearchParams({ thread_id: e.threadId, tab_id: e.tabId })
              return (
                e.connectionThreadId !== e.threadId && t.set("connection_thread_id", e.connectionThreadId),
                `${s}?${t}`
              )
            },
            ch: function (e) {
              let t = `${s}?`
              return null == e || !e.startsWith(t) || e.includes("#") ? null : c(new URLSearchParams(e.slice(t.length)))
            },
          },
        )
      },
      87196(e, t, n) {
        "use strict"
        n.d(t, {}, { b: /^[A-Za-z0-9][A-Za-z0-9._~-]{0,199}$/u })
      },
      12704(e, t, n) {
        "use strict"
        var a = n(40893),
          i = n(87196)
        ;(a.Ikc({
          assignmentMentionId: a.uRe().optional(),
          mentionId: a.YjP().min(1).max(256).optional(),
          blockId: a.YjP().min(1).max(256).optional(),
          threadId: a.YjP().min(1).max(256).optional(),
          openComments: a.euz(!0).optional(),
          messageId: a.YjP().min(1).max(256).optional(),
          requestId: a.YjP(),
        }),
          n.d(
            t,
            { bS: () => i.b },
            {
              yl: function (e, t, n) {
                let a = new URLSearchParams()
                ;(t?.mentionId != null && a.set("mention", t.mentionId),
                  t?.assignmentMentionId != null
                    ? a.set("assignment", t.assignmentMentionId)
                    : t?.blockId != null && a.set("block", t.blockId),
                  t?.threadId != null && a.set("thread", t.threadId),
                  t?.messageId != null && a.set("message", t.messageId),
                  t?.openComments && a.set("panel", "comments"))
                let i = a.toString(),
                  r = null == t && null != n ? `#${encodeURIComponent(n)}` : ""
                return `/space/${encodeURIComponent(e)}${"" === i ? r : `?${i}`}`
              },
            },
          ))
      },
      90323(e, t, n) {
        "use strict"
        var a = n(40893),
          i = n(87196)
        ;(a.Ikc({
          assignmentMentionId: a.uRe().optional(),
          mentionId: a.YjP().min(1).max(256).optional(),
          blockId: a.YjP().min(1).max(256).optional(),
          threadId: a.YjP().min(1).max(256).optional(),
          openComments: a.euz(!0).optional(),
          messageId: a.YjP().min(1).max(256).optional(),
          requestId: a.YjP(),
        }),
          n.d(t, { bS: () => i.b }))
      },
      65972(e, t, n) {
        "use strict"
        ;(n(8857), n(61082))
        let a = [
          {
            agentMode: "read-only",
            permissionProfileId: ":read-only",
            approvalPolicy: "on-request",
            approvalsReviewer: "user",
          },
          {
            agentMode: "auto",
            permissionProfileId: ":workspace",
            approvalPolicy: "on-request",
            approvalsReviewer: "user",
          },
          {
            agentMode: "granular",
            permissionProfileId: ":workspace",
            approvalPolicy: {
              granular: {
                sandbox_approval: !1,
                rules: !1,
                skill_approval: !1,
                request_permissions: !0,
                mcp_elicitations: !0,
              },
            },
            approvalsReviewer: "user",
          },
          {
            agentMode: "guardian-approvals",
            permissionProfileId: ":workspace",
            approvalPolicy: "on-request",
            approvalsReviewer: "guardian_subagent",
          },
          {
            agentMode: "full-access",
            permissionProfileId: ":danger-full-access",
            approvalPolicy: "never",
            approvalsReviewer: "user",
          },
        ]
        n.d(
          t,
          {},
          {
            If: function (e) {
              let t = a.find((t) => t.agentMode === e)
              if (null == t) throw Error(`Missing permission catalog entry for ${e}`)
              return t
            },
          },
        )
      },
      86439(e, t, n) {
        "use strict"
        n(61082)
        var a = n(65972)
        n.d(
          t,
          {},
          {
            y: function (e) {
              switch (e.kind) {
                case "agent-mode": {
                  let t = (0, a.If)(e.agentMode)
                  return {
                    permissions: t.permissionProfileId,
                    approvalPolicy: t.approvalPolicy,
                    approvalsReviewer: t.approvalsReviewer,
                  }
                }
                case "profile":
                  return { permissions: e.profileId }
                case "custom":
                case "server-default":
                  return null
              }
            },
          },
        )
      },
      61082(e, t, n) {
        "use strict"
        n(44814)
        var a = n(8857),
          i = n.n(a)
        let r = ["read-only", "auto", "granular", "guardian-approvals", "full-access"],
          o = { type: "readOnly", networkAccess: !1 },
          s = {
            granular: {
              sandbox_approval: !1,
              rules: !1,
              skill_approval: !1,
              request_permissions: !0,
              mcp_elicitations: !0,
            },
          }
        function l(e) {
          return "auto_review" === e || "guardian_subagent" === e
        }
        let c = {
          "read-only": {
            permissionProfileId: ":read-only",
            sandboxMode: "read-only",
            approvalPolicy: "on-request",
            approvalsReviewer: "user",
          },
          auto: {
            permissionProfileId: ":workspace",
            sandboxMode: "workspace-write",
            approvalPolicy: "on-request",
            approvalsReviewer: "user",
          },
          granular: {
            permissionProfileId: ":workspace",
            sandboxMode: "workspace-write",
            approvalPolicy: s,
            approvalsReviewer: "user",
          },
          "guardian-approvals": {
            permissionProfileId: ":workspace",
            sandboxMode: "workspace-write",
            approvalPolicy: "on-request",
            approvalsReviewer: "guardian_subagent",
          },
          "full-access": {
            permissionProfileId: ":danger-full-access",
            sandboxMode: "danger-full-access",
            approvalPolicy: "never",
            approvalsReviewer: "user",
          },
        }
        function p(e) {
          switch (e.type) {
            case "dangerFullAccess":
              return "danger-full-access"
            case "readOnly":
              return "read-only"
            case "workspaceWrite":
              return "workspace-write"
            case "externalSandbox":
              return null
          }
        }
        function u(e, t, n, a) {
          if (null == e) return !0
          let r = e.allowedSandboxModes
          if (null != r && null != t && !r.includes(t)) return !1
          let o = e.allowedApprovalPolicies
          if (null != o && null != n && !o.some((e) => i()(e, n))) return !1
          let s = e.allowedApprovalsReviewers,
            c = s?.some(l) === !0
          return null == s || null == a || !!s.includes(a) || !!(l(a) && c)
        }
        function d(e, t, n, a = "user", i = null == t ? { id: ":workspace", extends: null } : null) {
          return {
            activePermissionProfile: i,
            runtimeWorkspaceRoots: e,
            sandboxPolicy: {
              type: "workspaceWrite",
              writableRoots: [...e, ...(t?.writable_roots ?? [])],
              excludeSlashTmp: t?.exclude_slash_tmp ?? !1,
              excludeTmpdirEnvVar: t?.exclude_tmpdir_env_var ?? !1,
              networkAccess: t?.network_access ?? !1,
            },
            approvalPolicy: n ?? "on-request",
            approvalsReviewer: a,
          }
        }
        function m(e, t = "user", n = { id: ":read-only", extends: null }) {
          return {
            activePermissionProfile: n,
            sandboxPolicy: o,
            approvalPolicy: e ?? "on-request",
            approvalsReviewer: t,
          }
        }
        function f(e, t = "user", n = { id: ":danger-full-access", extends: null }) {
          return {
            activePermissionProfile: n,
            sandboxPolicy: { type: "dangerFullAccess" },
            approvalPolicy: e ?? "never",
            approvalsReviewer: t,
          }
        }
        function h(e, t) {
          let n = g(t ?? void 0)
          switch (t?.sandbox_mode) {
            case "danger-full-access":
              return f(t.approval_policy, n, null)
            case "read-only":
              return m(t.approval_policy, n, null)
            case "workspace-write":
              return d(e, t.sandbox_workspace_write, t.approval_policy, n, null)
            case null:
            case void 0:
              return m(t?.approval_policy, n, null)
          }
        }
        function g(e) {
          let t = e?.approvals_reviewer
          return ("user" !== t && "auto_review" !== t && "guardian_subagent" !== t) ||
            ("guardian_subagent" === t && !1 === v(e))
            ? "user"
            : t
        }
        function v(e) {
          var t = "guardian_approval"
          let n = e?.[`features.${t}`]
          if ("boolean" == typeof n) return n
          let a = e?.features
          if (null == a || "object" != typeof a || Array.isArray(a)) return
          let i = Object.getOwnPropertyDescriptor(a, t)?.value
          return "boolean" == typeof i ? i : void 0
        }
        n.d(
          t,
          {},
          {
            $5: function e(t, n, a, i) {
              if (null != i) {
                let r = !i.startsWith(":"),
                  o = e(r ? "custom" : t, n, a)
                return (
                  r &&
                    "guardian-approvals" === t &&
                    a?.approvals_reviewer == null &&
                    !1 !== v(a ?? void 0) &&
                    (o.approvalsReviewer = "guardian_subagent"),
                  { ...o, activePermissionProfile: { id: i, extends: null }, runtimeWorkspaceRoots: n }
                )
              }
              switch (t) {
                case "read-only":
                  return { ...m(), runtimeWorkspaceRoots: n }
                case "full-access":
                  return { ...f(), runtimeWorkspaceRoots: n }
                case "auto":
                  return d(n)
                case "granular":
                  return d(n, void 0, s)
                case "guardian-approvals":
                  if (
                    a?.sandbox_mode === "read-only" &&
                    ("on-request" === a.approval_policy || null == a.approval_policy)
                  )
                    return { ...m(void 0, "guardian_subagent"), runtimeWorkspaceRoots: n }
                  if (
                    a?.sandbox_mode === "workspace-write" &&
                    ("on-request" === a.approval_policy || null == a.approval_policy)
                  )
                    return d(n, a.sandbox_workspace_write, void 0, "guardian_subagent", null)
                  return d(n, void 0, void 0, "guardian_subagent")
                case "custom":
                  return h(n, a)
              }
            },
            Bn: g,
            L9: function (e, t) {
              var n
              let a = !!t?.approval_policy || !!t?.sandbox_mode,
                i =
                  ((n = e),
                  r.filter((e) =>
                    (function (e, t) {
                      if (null == t) return !0
                      let { permissionProfileId: n, sandboxMode: a, approvalPolicy: i, approvalsReviewer: r } = c[e]
                      return (
                        (null == t.allowedPermissionProfiles || !0 === t.allowedPermissionProfiles[n]) && u(t, a, i, r)
                      )
                    })(e, n),
                  )),
                o = a ? h([], t) : null
              return e?.allowedPermissionProfiles == null &&
                o &&
                u(e, p(o.sandboxPolicy), o.approvalPolicy, o.approvalsReviewer)
                ? [...i, "custom"]
                : i
            },
            Nq: m,
            Wq: u,
            Xh: function (e) {
              return e.runtimeWorkspaceRoots ?? []
            },
            ZG: function (e) {
              return null != e.activePermissionProfile
                ? { permissions: e.activePermissionProfile.id }
                : { sandboxPolicy: e.sandboxPolicy }
            },
            bz: l,
            oY: p,
            pK: ["read-only", "auto", "granular", "guardian-approvals", "full-access", "custom"],
            s9: function (e) {
              return null != e.activePermissionProfile
                ? { permissions: e.activePermissionProfile.id }
                : { sandbox: p(e.sandboxPolicy) }
            },
          },
        )
      },
      3031(e, t, n) {
        "use strict"
        var a = n(62003),
          i = n.n(a),
          r = n(40893),
          o = n(61330),
          s = n(29176)
        let l = r
            .YjP()
            .trim()
            .min(1)
            .refine(
              (e) => "." !== e && ".." !== e && !e.includes("/") && !e.includes("\\"),
              "Expected a single path segment.",
            ),
          c = r
            .YjP()
            .trim()
            .regex(/^[a-fA-F0-9]{64}$/),
          p = r
            .YjP()
            .trim()
            .pipe(r.OZ5())
            .refine((e) => {
              let t = new URL(e)
              return "https://chatgpt.com" === t.origin && t.pathname.startsWith("/codex/app/updates/plugins/")
            }),
          u = r.Ikc({ internalCdnUrl: p.optional(), sha256: c, url: r.YjP().trim().min(1), version: l }),
          d = [
            "failed to back up plugin cache entry",
            "failed to activate updated plugin cache entry",
            "failed to activate plugin cache entry",
            "failed to remove existing plugin cache entry",
          ]
        n.d(
          t,
          {},
          {
            VZ: function (e) {
              let t = (0, s.R)(e).toLowerCase()
              return d.some((e) => t.includes(e)) ? "cache_overwrite_failure" : "other"
            },
            tK: u,
            vg: function ({ codexHome: e, localVersion: t, marketplaceName: n, pluginName: a }) {
              let r = (0, o.AQ)(e),
                s = i().posix.join(r, "plugins", "cache", l.parse(n), l.parse(a), l.parse(t ?? "local"))
              return (0, o.zj)(r) ? `/${s}` : s
            },
          },
        )
      },
      49973(e, t, n) {
        "use strict"
        function a(e) {
          return e
        }
        ;(n.d(t, {
          AD: () => v,
          DI: () => y,
          jv: () => s.j,
          SK: () => x,
          R2: () => h,
          AK: () => l,
          c9: () => c,
          ZW: () => r,
          jQ: () => p,
          WE: () => u,
          bK: () => a,
          A5: () => o,
          i7: () => d,
          L$: () => b,
          vn: () => m,
          cu: () => g,
        }),
          n(64890))
        let i = "codex-renderer-window:",
          r = { BROWSER_COMMENT_POPUP: "browserCommentPopup", PRESENTATION_AUDIENCE: "presentationAudience" }
        function o(e) {
          if (!e.startsWith(i)) return null
          let t = e.slice(i.length),
            n = t.indexOf(":")
          if (n < 0) return null
          let a = t.slice(0, n),
            o = t.slice(n + 1)
          if (a === r.PRESENTATION_AUDIENCE)
            try {
              let e = decodeURIComponent(o)
              return e.length > 0 ? { windowId: a, sessionId: e } : null
            } catch {
              return null
            }
          if (a !== r.BROWSER_COMMENT_POPUP) return null
          let s = o.indexOf(":")
          if (s < 0) return null
          try {
            let [e, t] = decodeURIComponent(o.slice(0, s)).split("\0"),
              n = decodeURIComponent(o.slice(s + 1))
            return e?.length > 0 && t?.length > 0 && n.length > 0
              ? { windowId: a, browserTabId: t, conversationId: e, sessionId: n }
              : null
          } catch {
            return null
          }
        }
        var s = n(34971)
        n(89098)
        let l = "electron:last-switched-workspace",
          c = [".doc", ".docx", ".ppt", ".pptx", ".xls", ".xlsm", ".xlsx"],
          p = 0x10000000,
          u = 1048576
        function d(e) {
          let t = (e.replaceAll("\\", "/").replace(/\/+$/u, "").split("/").at(-1) ?? "")
            .replace(/[<>:"|?*]/gu, "_")
            .replaceAll("\0", "_")
          return "." === t || ".." === t || "" === t ? "download" : t
        }
        function m(e) {
          return e > p
        }
        var f = n(40893)
        ;(f.Ikc({ type: f.euz("vscode-capn-rpc-message"), sessionId: f.YjP(), message: f.L5J() }),
          f.Ikc({ type: f.euz("vscode-capn-rpc-connect"), sessionId: f.YjP() }))
        let h = { CHANGED: "inbox-items-changed" }
        function g(e, t) {
          return { ...e, origin: t }
        }
        let v = { NEW_TAB_PAGE: "new-tab-page", WEB: "web" },
          x = "New tab"
        function b(e) {
          return e.startsWith("client-new-thread:")
        }
        let y = "claude-cowork"
      },
      87605(e, t, n) {
        "use strict"
        var a = n(62003),
          i = n.n(a)
        function r(e) {
          return i().posix.normalize(e.replaceAll("\\", "/"))
        }
        ;(n(60662),
          n.d(
            t,
            {},
            {
              YH: function (e) {
                let t,
                  n =
                    e ??
                    ((t = "u" > typeof process ? process.env : void 0),
                    t?.CODEX_HOME && t.CODEX_HOME.length > 0
                      ? r(t.CODEX_HOME)
                      : t?.HOME && t.HOME.length > 0
                        ? i().posix.join(r(t.HOME), ".codex")
                        : "/.codex")
                return i().posix.join(r(n), "worktrees")
              },
            },
          ))
      },
      38682(e, t, n) {
        "use strict"
        n.d(
          t,
          {},
          {
            Y: class {
              windowMs
              entries = []
              headIndex = 0
              rollingSum = 0
              constructor(e) {
                this.windowMs = e.windowMs
              }
              record(e, t = Date.now()) {
                ;(this.entries.push({ atMs: t, value: e }), (this.rollingSum += e), this.prune(t))
              }
              getSnapshot(e = Date.now()) {
                return (this.prune(e), { count: this.entries.length - this.headIndex, sum: this.rollingSum })
              }
              prune(e) {
                let t = e - this.windowMs
                for (; this.headIndex < this.entries.length && this.entries[this.headIndex].atMs < t;)
                  ((this.rollingSum -= this.entries[this.headIndex].value), (this.headIndex += 1))
                0 === this.headIndex ||
                  2 * this.headIndex < this.entries.length ||
                  (this.entries.splice(0, this.headIndex), (this.headIndex = 0))
              }
            },
          },
        )
      },
      58973(e, t, n) {
        "use strict"
        var a = n(40893),
          i = n(99365),
          r = n(84766),
          o = n(87196)
        n(49973)
        let s = "/global-dictation",
          l = `${s}/setup`,
          c = "/plugins",
          p = "openai-curated",
          u = /^(?:plugins_[0-9a-f]{32}|(?:plugins~)?Plugin_[0-9a-f]{32}|plugin_[A-Za-z0-9][A-Za-z0-9_-]{0,247})$/,
          d = /^[A-Za-z0-9][A-Za-z0-9_-]{0,247}(?:@[A-Za-z0-9][A-Za-z0-9_-]{0,247})?$/,
          m = "/local",
          f = a.k5n(["branch", "last-turn"]),
          h = a.Ikc({
            conversationId: a.YjP().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i),
            diffFilter: f.nullable().catch(null),
            extraPathSegments: a.YOg(a.YjP()),
            host: a.euz("threads"),
            protocol: a.euz("codex:"),
            reviewPath: a.YjP().min(1).nullable().catch(null),
            view: a.euz("review").nullable().catch(null),
          }),
          g = a.Ikc({ path: a.YOg(a.YjP()), query: a.YOg(a.PVZ([a.YjP(), a.YjP()])) })
        a.Ikc({
          entrypoint: a.k5n(["global", "settings"]).optional(),
          mcpAppDeepLink: g.optional(),
          sourceMcpApp: a.Ikc({ appId: a.YjP(), toolName: a.YjP() }).optional(),
        })
        let v = a.k5n(["chat", "work", "codex"])
        function x(e, { allowExtraPathSegments: t = !1 } = {}) {
          let n
          try {
            n = "string" == typeof e ? new URL(e) : e
          } catch {
            return null
          }
          if ("codex:" !== n.protocol || "threads" !== n.host) return null
          let [a, ...r] = n.pathname.split("/").filter(Boolean),
            o = h.safeParse({
              conversationId: a,
              diffFilter: n.searchParams.get("diffFilter"),
              extraPathSegments: r,
              host: n.host,
              protocol: n.protocol,
              reviewPath: n.searchParams.get("path"),
              view: n.searchParams.get("view"),
            })
          return o.success && (t || !(o.data.extraPathSegments.length > 0))
            ? "review" !== o.data.view
              ? { conversationId: (0, i.JX)(o.data.conversationId) }
              : null == o.data.diffFilter
                ? { conversationId: (0, i.JX)(o.data.conversationId), openReview: !0 }
                : {
                    conversationId: (0, i.JX)(o.data.conversationId),
                    openReview: !0,
                    reviewDiffFilter: o.data.diffFilter,
                    reviewPath: o.data.reviewPath ?? void 0,
                  }
            : null
        }
        function b(e) {
          let t = e.lastIndexOf("@")
          return t <= 0 || t === e.length - 1 ? null : e.slice(t + 1)
        }
        function y(e) {
          return (
            null != e && (e === p || (0, r.fo)(e) || "openai-primary-runtime" === e || "openai-internal-testing" === e)
          )
        }
        function w(e) {
          return y(b(e)) || u.test(e) ? e : null
        }
        function k(e) {
          return w(e) ?? (d.test(e) ? e : null)
        }
        function _(e, t) {
          return !!e && (e === t || e.startsWith(`${t}/`))
        }
        function P(e) {
          if (null == e || 0 === e.trim().length) return null
          try {
            let t = decodeURIComponent(e).trim()
            return t.length > 0 ? t : null
          } catch {
            return null
          }
        }
        function I(e) {
          return encodeURIComponent(e).replaceAll("%40", "@")
        }
        function j(e) {
          let t = (function ({
            breadcrumb: e,
            browseSearch: t = "",
            deepLinkMode: n,
            hostId: a,
            marketplacePath: i,
            pluginName: r,
            remoteMarketplaceName: o,
          }) {
            let s = (function (e) {
              let t = new URLSearchParams(e),
                n = new URLSearchParams()
              for (let e of ["directoryTab", "category", "search", "hostId"]) {
                let a = t.get(e)
                null != a && a.trim().length > 0 && n.set(e, a)
              }
              return n
            })(t)
            return (
              s.delete("hostId"),
              null != i && s.set("marketplacePath", i),
              null != o && s.set("remoteMarketplaceName", o),
              null != r && s.set("pluginName", r),
              null != n && s.set("mode", n),
              null != a && s.set("hostId", a),
              ("settings" === e || "settings" === new URLSearchParams(t).get("breadcrumb")) &&
                s.set("breadcrumb", "settings"),
              s
            )
          })(e).toString()
          return t ? `?${t}` : ""
        }
        ;(a.Ikc({ codexAppMode: v.optional() }),
          n.d(
            t,
            {},
            {
              $k: s,
              Ct: function (e) {
                let t = j(e)
                return `${c}/${I(e.pluginId)}${t}`
              },
              FH: y,
              Ft: v,
              G$: function (e, t) {
                return `/mcp-app/plugins/${encodeURIComponent(e)}/${encodeURIComponent(t)}`
              },
              IY: p,
              OT: function (e) {
                let t
                try {
                  t = "string" == typeof e ? new URL(e) : e
                } catch {
                  return null
                }
                if (
                  (["https://chatgpt.com", "https://chatgpt-staging.com"].includes(t.origin) &&
                    "" === t.username &&
                    "" === t.password &&
                    t.pathname.startsWith("/plugins/") &&
                    (t = new URL(`codex://${t.pathname.slice(1)}${t.search}${t.hash}`)),
                  "plugins" === t.host)
                )
                  return (function (e) {
                    let [, t, n, a, ...i] = e.pathname.split("/"),
                      r = P(t),
                      o = P(a),
                      s = e.searchParams.getAll("path")
                    if (
                      !["codex:", "codex-dev:", "chatgpt:"].includes(e.protocol) ||
                      "" !== e.username ||
                      "" !== e.password ||
                      "" !== e.port ||
                      "" !== e.hash ||
                      0 !== i.length ||
                      ("app" !== n && "settings" !== n) ||
                      null == r ||
                      null == k(r) ||
                      null == o ||
                      s.length > 1
                    )
                      return null
                    let l = (function (e) {
                      if (!e.startsWith("/") || e.startsWith("//") || /[\\#\u0000-\u0020\u007f]/.test(e)) return null
                      let t = e.indexOf("?"),
                        n = -1 === t ? e : e.slice(0, t),
                        a = -1 === t ? "" : e.slice(t + 1)
                      try {
                        return {
                          path: "/" === n ? [] : n.slice(1).split("/").map(decodeURIComponent),
                          query: Array.from(new URLSearchParams(a).entries()),
                        }
                      } catch {
                        return null
                      }
                    })(s[0] ?? "/")
                    return null == l
                      ? null
                      : { entrypoint: "app" === n ? "global" : "settings", pluginId: r, toolName: o, target: l }
                  })(t)
                let n = t.pathname.split("/").filter(Boolean),
                  a = "settings" === t.host && ["mcp-app", "plugins"].includes(n[0] ?? "")
                if (
                  ("codex:" !== t.protocol && "codex-dev:" !== t.protocol) ||
                  ("mcp-app" !== t.host && !a) ||
                  "" !== t.username ||
                  "" !== t.password ||
                  "" !== t.port ||
                  "" !== t.hash
                )
                  return null
                let [i, r, ...o] = n.slice(+!!a),
                  s = P(i),
                  l = P(r)
                if (null == s || null == l || null == k(s)) return null
                let c = []
                for (let e of o) {
                  let t = P(e)
                  if (null == t) return null
                  c.push(t)
                }
                let p = Array.from(t.searchParams.entries())
                return {
                  entrypoint: a ? "settings" : "global",
                  pluginId: s,
                  target: 0 === c.length && 0 === p.length ? null : { path: c, query: p },
                  toolName: l,
                }
              },
              TV: function (e) {
                return (
                  null != x(e) &&
                  "" === e.username &&
                  "" === e.password &&
                  !e.href.includes("#") &&
                  [...e.searchParams].every(
                    ([e, t]) =>
                      ["hostId", "view", "diffFilter", "path"].includes(e) || ("threadAccess" === e && "shared" === t),
                  )
                )
              },
              _R: function (e) {
                return `${m}/${e}`
              },
              ae: l,
              cC: x,
              dw: w,
              fe: function (e) {
                let t = j(e)
                return `codex://plugins/${I(e.pluginId)}${t}`
              },
              in: function (e) {
                let t = /^\/space\/([^/?#]+)(?:[?#].*)?$/u.exec(e ?? "")?.[1],
                  n = /^\/spaces\/([^/?#]+)(?:[?#].*)?$/u.exec(e ?? "")?.[1]
                return (
                  "/" === e ||
                  "/space" === e ||
                  (null != n && o.b.test(n)) ||
                  (null != t && !t.startsWith("local-page-") && o.b.test(t)) ||
                  _(e, m) ||
                  _(e, c) ||
                  _(e, "/skills/plugins") ||
                  _(e, "/skills/manage") ||
                  _(e, "/remote")
                )
              },
              nF: function (e) {
                return `/share/${encodeURIComponent(e)}`
              },
              vU: function (e) {
                return `/code-review#${new URLSearchParams({ pullRequest: e })}`
              },
              zA: b,
            },
          ))
      },
      89098(e, t, n) {
        "use strict"
        var a = n(40893),
          i = n(24546)
        let r = a.rej({ conversationId: a.YjP().nullable(), query: a.YjP().max(i.H3) }),
          o = a.rej({ tabId: a.aig().int().positive(), turnId: a.YjP().min(1), providerTabId: a.YjP().min(1) }),
          s = a.rej({ extensionInstanceId: a.YjP().min(1), tabId: a.aig().int().nonnegative() }),
          l = a.rej({ extensionInstanceId: a.YjP().min(1), tabIds: a.YOg(a.aig().int().nonnegative()).max(i.s3) })
        n.d(t, {}, { Cq: s, D5: o, aM: r, jM: l })
      },
      84698(e, t, n) {
        "use strict"
        let a =
          /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<prerelease>[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/
        function i(e) {
          let t = a.exec(e)
          return t?.groups == null
            ? null
            : {
                major: Number(t.groups.major),
                minor: Number(t.groups.minor),
                patch: Number(t.groups.patch),
                prerelease:
                  t.groups.prerelease?.split(".").map((e) => (/^(0|[1-9]\d*)$/.test(e) ? Number(e) : e)) ?? [],
              }
        }
        n.d(
          t,
          {},
          {
            D: function (e) {
              return null != i(e)
            },
            r: function (e, t) {
              var n, a
              let r = i(e),
                o = i(t)
              if (null == r || null == o) return 0
              let s =
                ((n = r),
                (a = o),
                n.major !== a.major
                  ? n.major - a.major
                  : n.minor !== a.minor
                    ? n.minor - a.minor
                    : n.patch !== a.patch
                      ? n.patch - a.patch
                      : 0)
              if (0 !== s) return s
              let l = r.prerelease,
                c = o.prerelease
              if (0 === l.length && 0 === c.length) return 0
              if (0 === l.length) return 1
              if (0 === c.length) return -1
              let p = Math.max(l.length, c.length)
              for (let e = 0; e < p; e += 1) {
                let t = l[e],
                  n = c[e]
                if (null == t) return -1
                if (null == n) return 1
                if (t !== n) {
                  if ("number" == typeof t && "number" == typeof n) return t - n
                  if ("number" == typeof t) return -1
                  if ("number" == typeof n) return 1
                  return t.localeCompare(n)
                }
              }
              return 0
            },
          },
        )
      },
      24757(e, t, n) {
        "use strict"
        n.d(t, { K: () => o })
        var a = n(40893)
        let i = a.k5n(["none", "minimal", "low", "medium", "high", "xhigh", "max", "ultra", "persistent"])
        var r = n(41803)
        let o = {
          daybreakEnabled: (0, r.at)({
            agentAccess: "hidden",
            default: null,
            description: "Saved Daybreak choice for the signed-in ChatGPT workspace",
            key: "daybreak-enabled",
            schema: a.Ikc({ accountId: a.YjP(), userId: a.YjP(), enabled: a.zMY() }).nullable(),
          }),
          chatGptDaybreakEnabled: (0, r.at)({
            agentAccess: "hidden",
            default: null,
            description: "Saved Work Daybreak choice for the signed-in ChatGPT workspace",
            key: "chatgpt-daybreak-enabled",
            schema: a.Ikc({ accountId: a.YjP(), userId: a.YjP(), enabled: a.zMY() }).nullable(),
          }),
          defaultModeRequestUserInput: (0, r.at)({
            agentAccess: "read-write",
            default: !0,
            description: "Whether Codex can ask questions outside Plan mode",
            key: "default-mode-request-user-input-enabled",
            schema: a.zMY(),
          }),
          enabledReasoningEfforts: (0, r.at)({
            agentAccess: "hidden",
            default: ["low", "medium", "high", "xhigh", "ultra", "persistent"],
            description: "Reasoning effort levels available in model controls",
            key: "enabled-reasoning-efforts",
            schema: a.YOg(i),
          }),
          showUltraInModelPickerSlider: (0, r.at)({
            agentAccess: "hidden",
            default: !1,
            description: "Whether Ultra appears in the model picker slider",
            key: "show-ultra-in-model-picker-slider",
            schema: a.zMY(),
          }),
        }
      },
      43913(e, t, n) {
        "use strict"
        var a = n(40893)
        let i = {
          conversationDetailMode: (0, n(41803).IZ)({
            agentAccess: "read-write",
            default: "STEPS_COMMANDS",
            description: "How much turn detail Codex shows",
            key: "conversationDetailMode",
            schema: a.k5n(["STEPS_PROSE", "STEPS_COMMANDS", "STEPS_EXECUTION"]),
          }),
        }
        n.d(t, {}, { u: i })
      },
      37581(e, t, n) {
        "use strict"
        var a = n(40893),
          i = n(70846)
        let r = a.zMY(),
          o = a.k5n(i.Rg),
          s = a.YjP().nullable(),
          l = a.YjP(),
          c = a.YjP().regex(/^#[0-9a-fA-F]{6}$/),
          p = a.Ikc({ family: a.YjP(), fullName: a.YjP(), postscriptName: a.YjP() }),
          u = a.Ikc({
            accent: c,
            accentSource: a.k5n(["chatgpt", "custom"]).optional(),
            contrast: a.aig().int().min(0).max(100),
            fonts: a.Ikc({
              code: s,
              codeFace: p.optional(),
              content: s.optional(),
              contentFace: p.optional(),
              ui: s,
              uiFace: p.optional(),
            }),
            ink: c,
            opaqueWindows: r,
            semanticColors: a.Ikc({ diffAdded: c, diffRemoved: c, skill: c }),
            surface: c,
          })
        n.d(t, {}, { JV: l, PK: o, S4: s, uf: r, wV: u })
      },
      41803(e, t, n) {
        "use strict"
        n.d(
          t,
          {},
          {
            IZ: function ({ agentAccess: e, default: t, description: n, key: a, schema: i, vscode: r }) {
              return {
                agentAccess: e,
                default: t,
                description: n,
                key: a,
                hostStorage: { kind: "configuration", key: a },
                schema: i,
                vscode: r,
              }
            },
            KF: function ({ agentAccess: e, default: t, description: n, key: a, schema: i }) {
              return {
                agentAccess: e,
                default: t,
                description: n,
                key: a,
                hostStorage: { kind: "global-state", key: a },
                schema: i,
              }
            },
            at: function ({ agentAccess: e, default: t, description: n, key: a, schema: i }) {
              return {
                agentAccess: e,
                default: t,
                description: n,
                key: a,
                hostStorage: { kind: "persisted-atom", key: a },
                schema: i,
              }
            },
          },
        )
      },
      72551(e, t, n) {
        "use strict"
        n(25133)
        var a = n(40893)
        let i = a.KCZ([
          a.Uy$(["codex:thread:local:", a.YjP()]),
          a.Uy$(["codex:thread:remote:", a.YjP()]),
          a.Uy$(["codex:project:", a.YjP()]),
          a.Uy$(["chatgpt:conversation:", a.YjP()]),
          a.Uy$(["chatgpt:project:", a.YjP()]),
          a.Uy$(["space:page:", a.YjP(), ":", a.YjP()]),
          a.Uy$(["space:space:", a.YjP(), ":", a.YjP()]),
          a.Uy$(["dot:", a.YjP(), ":", a.YjP()]),
          a.Uy$(["site:", a.YjP(), ":", a.YjP(), ":", a.YjP()]),
          a.Uy$(["content-tab:", a.YjP()]),
        ])
        n.d(t, {}, { $I: i })
      },
      70846(e, t, n) {
        "use strict"
        let a = {
            AYU: "ayu",
            CATPPUCCIN: "catppuccin",
            CODEX: "codex",
            DRACULA: "dracula",
            EVERFOREST: "everforest",
            GITHUB: "github",
            GRUVBOX: "gruvbox",
            LINEAR: "linear",
            LOBSTER: "lobster",
            MATERIAL: "material",
            MATRIX: "matrix",
            MONOKAI: "monokai",
            ABSOLUTELY: "absolutely",
            NIGHT_OWL: "night-owl",
            NORD: "nord",
            NOTION: "notion",
            OG: "og",
            OSCURANGE: "oscurange",
            ONE: "one",
            PROOF: "proof",
            RAYCAST: "raycast",
            ROSE_PINE: "rose-pine",
            SENTRY: "sentry",
            SOLARIZED: "solarized",
            TEMPLE: "temple",
            TOKYO_NIGHT: "tokyo-night",
            VERCEL: "vercel",
            VSCODE_PLUS: "vscode-plus",
            XCODE: "xcode",
          },
          i = {
            [a.AYU]: { label: "Ayu", variants: ["dark"] },
            [a.CATPPUCCIN]: { label: "Catppuccin", variants: ["dark", "light"] },
            [a.ABSOLUTELY]: { label: "Absolutely", variants: ["dark", "light"] },
            [a.CODEX]: { label: "Codex", variants: ["dark", "light"] },
            [a.DRACULA]: { label: "Dracula", variants: ["dark"] },
            [a.EVERFOREST]: { label: "Everforest", variants: ["dark", "light"] },
            [a.GITHUB]: { label: "GitHub", variants: ["dark", "light"] },
            [a.GRUVBOX]: { label: "Gruvbox", variants: ["dark", "light"] },
            [a.LINEAR]: { label: "Linear", variants: ["dark", "light"] },
            [a.LOBSTER]: { label: "Lobster", variants: ["dark"] },
            [a.MATERIAL]: { label: "Material", variants: ["dark"] },
            [a.MATRIX]: { label: "Matrix", variants: ["dark"] },
            [a.MONOKAI]: { label: "Monokai", variants: ["dark"] },
            [a.NIGHT_OWL]: { label: "Night Owl", variants: ["dark"] },
            [a.NORD]: { label: "Nord", variants: ["dark"] },
            [a.NOTION]: { label: "Notion", variants: ["dark", "light"] },
            [a.OG]: { label: "OG", variants: ["dark"] },
            [a.OSCURANGE]: { label: "Oscurange", variants: ["dark"] },
            [a.ONE]: { label: "One", variants: ["dark", "light"] },
            [a.PROOF]: { label: "Proof", variants: ["light"] },
            [a.RAYCAST]: { label: "Raycast", variants: ["dark", "light"] },
            [a.ROSE_PINE]: { label: "Rose Pine", variants: ["dark", "light"] },
            [a.SENTRY]: { label: "Sentry", variants: ["dark"] },
            [a.SOLARIZED]: { label: "Solarized", variants: ["dark", "light"] },
            [a.TOKYO_NIGHT]: { label: "Tokyo Night", variants: ["dark"] },
            [a.TEMPLE]: { label: "Temple", variants: ["dark"] },
            [a.VERCEL]: { label: "Vercel", variants: ["dark", "light"] },
            [a.VSCODE_PLUS]: { label: "VS Code Plus", variants: ["dark", "light"] },
            [a.XCODE]: { label: "Xcode", variants: ["dark", "light"] },
          },
          r = new Intl.Collator(void 0, { sensitivity: "base" })
        n.d(
          t,
          {},
          {
            P6: function (e) {
              return Object.values(a)
                .filter((t) => null == e || i[t].variants.some((t) => t === e))
                .sort((e, t) => r.compare(i[e].label, i[t].label))
            },
            Rg: a,
          },
        )
      },
      63068(e, t, n) {
        "use strict"
        var a = n(40893)
        let i = a.gMt("projectKind", [
            a.Ikc({ projectKind: a.euz("local"), projectId: a.YjP(), projectOrigin: a.euz("chatgpt").optional() }),
            a.Ikc({ projectKind: a.euz("remote"), projectId: a.YjP(), hostId: a.YjP().optional() }),
          ]),
          r = a.g1P(a.YjP(), a.L5J())
        function o(e, t) {
          return null == e || null == t
            ? null == e && null == t
            : e.projectKind === t.projectKind && e.projectId === t.projectId && l(e) === l(t) && s(e) === s(t)
        }
        function s(e) {
          switch (e.projectKind) {
            case "local":
              return null
            case "remote":
              return e.hostId ?? null
          }
        }
        function l(e) {
          return "local" === e.projectKind ? e.projectOrigin : void 0
        }
        ;(a.YOg(a.YjP()),
          n.d(
            t,
            {},
            {
              Ax: function (e, t) {
                return { assignment: e.assignments[t] ?? null, projectless: e.projectlessThreadIds.includes(t) }
              },
              DZ: function (e) {
                let t = r.safeParse(e).data
                return null == t
                  ? {}
                  : Object.fromEntries(
                      Object.entries(t).flatMap(([e, t]) => {
                        let n = i.safeParse(t).data
                        return null == n ? [] : [[e, n]]
                      }),
                    )
              },
              Mx: function (e, t) {
                let n = { ...e.assignments },
                  a = new Set(e.projectlessThreadIds),
                  i = new Set()
                for (let { threadId: e, assignment: r, projectless: o } of t)
                  (null == r ? delete n[e] : (n[e] = r), o ? a.add(e) : a.delete(e), i.add(e))
                let r = new Set(e.projectlessThreadIds),
                  s = {},
                  l = !1,
                  c = !1
                for (let t of i) {
                  let i = n[t] ?? null,
                    p = a.has(t),
                    u = !o(e.assignments[t], i),
                    d = r.has(t) !== p
                  ;((l = l || u), (c = c || d), (u || d) && (s[t] = { assignment: i, projectless: p }))
                }
                return {
                  records: {
                    assignments: l ? n : e.assignments,
                    projectlessThreadIds: c ? [...a] : e.projectlessThreadIds,
                  },
                  memberships: s,
                }
              },
              RW: o,
              aS: i,
            },
          ))
      },
      58379(e, t, n) {
        "use strict"
        var a = n(72354)
        let i = Object.values({
            cli: "cli",
            vscode: "vscode",
            exec: "exec",
            appServer: "appServer",
            subAgent: "subAgent",
            subAgentReview: "subAgentReview",
            subAgentCompact: "subAgentCompact",
            subAgentThreadSpawn: "subAgentThreadSpawn",
            subAgentOther: "subAgentOther",
            unknown: "unknown",
          }),
          r = new Set([
            "user",
            "page_comment",
            "slides_comment",
            "agent_created_thread",
            "agent_forked_thread",
            "ambient_suggestion_task",
            "avatar_quick_chat",
            "chatgpt_handoff",
            "code_review",
            "codex_replay",
            "conversation_digest",
            "implement_todo",
            "local_environment_configuration",
            "mcp_app_follow_up",
            "onboarding_checklist",
            "security_remediation",
            "security_scan",
            "voice_chat",
          ])
        n.d(
          t,
          {},
          {
            F5: function (e) {
              return null == e || r.has(e) || e === a.BB
            },
            ON: "ambient_suggestions",
            dV: i,
            l0: "pull_request_fix_automation",
            mu: [],
            wC: "chatgpt_hidden",
          },
        )
      },
      42871(e, t, n) {
        "use strict"
        var a = n(40893),
          i = n(63068)
        let r = a.Ikc({ projectSources: a.YOg(a.YjP()), cwd: a.YjP(), runtimeWorkspaceRoots: a.YOg(a.YjP()) }),
          o = a.Ikc({
            revision: a.YjP(),
            project: i.aS.nullable(),
            projectMembership: i.aS.optional(),
            projectMembershipRevision: a.YjP().optional(),
            applied: r.nullable(),
            pending: r.nullable(),
          })
        n.d(
          t,
          {},
          {
            Q: function (e) {
              if (null != e) return o.safeParse(e).data
            },
          },
        )
      },
      20885(e, t, n) {
        "use strict"
        let a = "## My request:",
          i = "<page-comment-context>\n",
          r = "\n</page-comment-context>\n",
          o = `${a}
`,
          s = /## My request(?: for Codex)?:/g,
          l = "# Response annotations:",
          c = "<response-annotations>",
          p = "</response-annotations>"
        function u(e) {
          let t = `
${l}
`
          if (!e.startsWith(t)) return null
          let n = `
${c}
`,
            a = e.indexOf(n, t.length)
          if (-1 === a) return null
          let i = a + n.length,
            r = `
${p}
`,
            o = e.indexOf(r, i)
          return -1 === o ? null : { endIndex: o + r.length, json: e.slice(i, o) }
        }
        let d = "# Selected text:",
          m = "Attached images: ",
          f = " additional labeled images for Comment "
        function h(e, t) {
          return 1 === t ? `Attached image: 1 additional labeled image for Comment ${e}` : `${m}${t}${f}${e}`
        }
        function g(e) {
          let t = 0
          if (!e.startsWith(i)) {
            if ("#" !== e[0] && "\n" !== e[0]) return null
            let n = `
${o}`,
              a = e.indexOf(n)
            if (((t = a + n.length), -1 === a || !e.startsWith(i, t))) return null
          }
          let n = e.indexOf(r, t + i.length)
          if (-1 === n) return null
          let a = n + r.length
          if (
            ("\n" === e[a] && a++,
            e.startsWith(
              `${d}

## Selection 1`,
              a,
            ))
          ) {
            let t = e.indexOf(
              `
${o}`,
              a,
            )
            if (-1 === t) return null
            a = t + 1
          }
          return e.startsWith(o, a) ? a + o.length : null
        }
        n.d(
          t,
          {},
          {
            $r: h,
            CZ: "# Files mentioned by the user:",
            Dh: (e) => {
              let t,
                n = null == (t = g(e)) ? null : e.slice(t)
              if (null != n) return n.trim()
              let a = e.split(s)
              return a.length <= 1 ? e : a[a.length - 1].trim()
            },
            Dq: "# Worktree instructions:\nThe user selected Worktree for this task. Worktree creation runs asynchronously. Use the supplied worktree creation status to check progress. Perform the requested task only in the resulting checkout.\n",
            EJ: "Browser annotation: graphics snapshot",
            GE: "Browser annotation: text",
            OG: "# Browser comments:",
            QS: "Browser",
            Qf: d,
            Ue: function (e) {
              return `Annotated PDF screenshot: attached as a labeled image for Comment ${e}`
            },
            Vh: a,
            Wh: "# Failing PR checks:",
            YY: "## Comment",
            Y_: "# Files pasted by the user:",
            b5: "# Diff comments:",
            cS: function (e, t) {
              if (e === h(t, 1)) return 1
              let n = `${f}${t}`
              if (!e.startsWith(m) || !e.endsWith(n)) return null
              let a = Number(e.slice(m.length, e.length - n.length))
              return !Number.isSafeInteger(a) || a <= 0 ? null : a
            },
            dO: function (e) {
              return `Saved marker screenshot: attached as a labeled image for Comment ${e}`
            },
            ey: u,
            hf: function (e) {
              let t = u(e),
                n = t?.endIndex ?? 0,
                a = e.slice(n).search(s)
              return -1 === a ? null : e.slice(n, n + a)
            },
            jt: "## Requested annotation",
            k$: function (e) {
              return `Annotated screenshot: attached as a labeled image for Comment ${e}`
            },
            lG: l,
            m5: function (e, t) {
              let n = g(e)
              if (null != n)
                return `${e.slice(0, n)}${t}
`
              let i = Array.from(e.matchAll(s)).at(-1)
              if (null == i) return t
              let r = e.slice(0, i.index).trimEnd()
              return `${r}
${a}
${t}
`
            },
            qK: c,
            sm: "## User Comment",
            um: p,
          },
        )
      },
      38591(e, t, n) {
        "use strict"
        var a = n(25133),
          i = n.n(a),
          r = n(61330)
        let o = /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
          s = /^[0-9a-f]{8}-[0-9a-f]{3}[048c]-8[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
          l =
            /(?:^|[\\/])(?:\.codex|(?:\.codex-workspaces|OpenAI[\\/]Codex[\\/]workspaces)(?:[\\/]instances[\\/][0-9a-f-]+)?)[\\/]visualizations[\\/]\d{4}[\\/]\d{2}[\\/]\d{2}[\\/]([a-zA-Z0-9_-]+)[\\/][a-z0-9]+(?:-[a-z0-9]+)*\.html$/
        n.d(
          t,
          {},
          {
            CV: function (e) {
              let t
              if (o.test(e)) t = Number.parseInt(`${e.slice(0, 8)}${e.slice(9, 13)}`, 16)
              else {
                if (!s.test(e)) return null
                t = 1e3 * Number.parseInt(e.slice(0, 8), 16)
              }
              let n = new Date(t)
              return [
                n.getUTCFullYear(),
                String(n.getUTCMonth() + 1).padStart(2, "0"),
                String(n.getUTCDate()).padStart(2, "0"),
              ].join("/")
            },
            Sh: function (e, t) {
              let n = (0, r.tI)(e) || (0, r.zj)(e) ? i().win32 : i().posix,
                a = n.relative(t, e)
              if (".." === a || a.startsWith(`..${n.sep}`) || n.isAbsolute(a)) return null
              let o = [],
                s = e
              for (; o.length < 64;) {
                if ((o.push(s), "" === n.relative(t, s))) return o
                let e = n.dirname(s)
                if (e === s) break
                s = e
              }
              return null
            },
            hj: 5e6,
            kh: function (e) {
              return /^[a-z0-9]+(?:-[a-z0-9]+)*\.html$/.test(e)
            },
            sk: function (e) {
              return l.test(e)
            },
          },
        )
      },
      60662(e, t, n) {
        "use strict"
        var a = n(61330)
        let i =
            "^(.*/(?:\\.codex|\\.codex-workspaces(?:/instances/[^/]+)?|OpenAI/Codex/workspaces(?:/instances/[^/]+)?)/worktrees)(?:/|$)",
          r = new RegExp(i),
          o = RegExp(i, "i")
        n.d(
          t,
          {},
          {
            Cy: function ({ cwd: e, worktreesRoot: t }) {
              let n = t?.trim()
              return (
                null != e &&
                !!n &&
                ((0, a.XH)(e).startsWith(`${(0, a.XH)(n)}/`) ||
                  (((0, a.tI)(e) || (0, a.tI)(n)) && (0, a.JH)(e).startsWith(`${(0, a.JH)(n)}/`)))
              )
            },
            nv: function (e) {
              let t = (0, a.AQ)((0, a.r6)(e)),
                n = (0, a.tI)(t) || (0, a.zj)(t) ? o : r
              return n.exec(t)?.[1] ?? null
            },
          },
        )
      },
      15338(e, t, n) {
        "use strict"
        let a = { error: 0, warning: 1, info: 2, debug: 3, trace: 4 }
        function i(e) {
          let t = e?.trim().toLowerCase() ?? ""
          switch (t) {
            case "error":
            case "warning":
            case "info":
            case "debug":
            case "trace":
              return t
            default:
              return null
          }
        }
        n.d(
          t,
          {},
          {
            ML: i,
            Vd: function (e) {
              let t = i(process.env.CODEX_MAX_LOG_LEVEL)
              if (null != t) return t
              switch (e) {
                case "prod":
                  return "info"
                case "nightly":
                case "internal-alpha":
                case "public-beta":
                  return "debug"
                case "agent":
                case "dev":
                  return "trace"
              }
            },
            yV: function (e, t) {
              return a[e] <= a[t]
            },
          },
        )
      },
      50596(e, t, n) {
        "use strict"
        var a = n(89477),
          i = n(42524),
          r = n(86697),
          o = n(26238),
          s = n(73127),
          l = n(4482),
          c = n(8769)
        let p = "index.html",
          u = "detached-window.html",
          d = "/@fs",
          m = "app://-"
        function f(e) {
          return e === c.Krz ? u : p
        }
        function h(e, t = !1) {
          return "win32" === process.platform
            ? l.net.fetch((0, s.pathToFileURL)(e).toString())
            : (async function (e, { headers: t, readFromArchive: n = !1 } = {}) {
                var r
                let s, l
                try {
                  s = await (0, i.stat)(e)
                } catch {
                  return new Response(null, { status: 404, statusText: "Not Found" })
                }
                if (!s.isFile()) return new Response(null, { status: 404, statusText: "Not Found" })
                let c = b(e)
                return new Response(
                  n
                    ? ((r = e),
                      (l = !1),
                      new ReadableStream(
                        {
                          async pull(e) {
                            let t = await (0, i.readFile)(r)
                            l || (e.enqueue(t), e.close())
                          },
                          cancel() {
                            l = !0
                          },
                        },
                        { highWaterMark: 0 },
                      ))
                    : o.Readable.toWeb((0, a.createReadStream)(e)),
                  {
                    headers: {
                      "Content-Length": String(s.size),
                      "Content-Type": "string" == typeof c ? c : "application/octet-stream",
                      ...t,
                    },
                  },
                )
              })(e, { readFromArchive: t })
        }
        function g(e) {
          if (null == e) return null
          try {
            let t = new URL(e)
            if ("app:" === t.protocol) return `app://${t.host}`
            return t.origin
          } catch {
            return null
          }
        }
        function v() {
          if (l.app.isPackaged) return null
          let e = process.env.ELECTRON_RENDERER_URL
          if (null == e || 0 === e.trim().length) return null
          try {
            let t = new URL(e)
            if ("http:" !== t.protocol && "https:" !== t.protocol) return null
            return t.origin
          } catch {
            return null
          }
        }
        function x(e, t = r.resolve) {
          let n,
            a = e.slice(d.length)
          if (!a) return null
          try {
            n = decodeURIComponent(a)
          } catch {
            return null
          }
          let i = (0, c.AQM)(n)
          if (!(0, c.cxl)(i)) return null
          let o = t((0, c.kqw)(i)),
            s = y(o)
          return "string" == typeof s && (s.startsWith("audio/") || s.startsWith("image/") || s.startsWith("video/"))
            ? o
            : null
        }
        function b(e) {
          switch ((0, r.extname)(e)) {
            case ".html":
              return "text/html"
            case ".js":
              return "application/javascript"
            case ".css":
              return "text/css"
            case ".woff2":
              return "font/woff2"
            case ".svg":
              return "image/svg+xml"
            case ".png":
              return "image/png"
            default:
              return y(e)
          }
        }
        function y(e) {
          let { lookup: t } = n(55722)
          return t(e)
        }
        function w(e) {
          let t = b(e)
          return "string" == typeof t && (t.startsWith("audio/") || t.startsWith("video/"))
        }
        async function k(e, t) {
          let n
          try {
            n = await (0, i.stat)(t)
          } catch {
            return new Response(null, { status: 404, statusText: "Not Found" })
          }
          let r = b(t),
            s = new Headers({
              "Accept-Ranges": "bytes",
              "Content-Type": "string" == typeof r ? r : "application/octet-stream",
            }),
            l = e.headers.get("range")
          if (!l)
            return (
              s.set("Content-Length", String(n.size)),
              new Response(o.Readable.toWeb((0, a.createReadStream)(t)), { headers: s })
            )
          let c = (function (e, t) {
            let n = /^bytes=(\d*)-(\d*)$/.exec(e)
            if (!n) return null
            let [, a, i] = n
            if ("" === a && "" === i) return null
            if ("" === a) {
              let e = Number(i)
              return e <= 0 || 0 === t ? null : { start: Math.max(t - e, 0), end: t - 1 }
            }
            let r = Number(a),
              o = "" === i ? t - 1 : Number(i)
            return r < 0 || o < r || r >= t ? null : { start: r, end: Math.min(o, t - 1) }
          })(l, n.size)
          return c
            ? (s.set("Content-Length", String(c.end - c.start + 1)),
              s.set("Content-Range", `bytes ${c.start}-${c.end}/${n.size}`),
              new Response(o.Readable.toWeb((0, a.createReadStream)(t, { start: c.start, end: c.end })), {
                status: 206,
                statusText: "Partial Content",
                headers: s,
              }))
            : (s.set("Content-Range", `bytes */${n.size}`),
              new Response(null, { status: 416, statusText: "Range Not Satisfiable", headers: s }))
        }
        n.d(
          t,
          {},
          {
            Bi: function () {
              l.protocol.registerSchemesAsPrivileged([
                {
                  scheme: "app",
                  privileges: {
                    codeCache:
                      "supportsCustomProtocolCodeCache" in l.app && !0 === l.app.supportsCustomProtocolCodeCache,
                    standard: !0,
                    secure: !0,
                    stream: !0,
                    supportFetchAPI: !0,
                  },
                },
                {
                  scheme: c.cSM,
                  privileges: {
                    allowServiceWorkers: !0,
                    corsEnabled: !0,
                    standard: !0,
                    secure: !0,
                    stream: !0,
                    supportFetchAPI: !0,
                  },
                },
              ])
            },
            DC: v,
            Rk: function (e) {
              let t = new URL(`${m}/${f(e)}`)
              return (e && t.searchParams.set("initialRoute", e), t.toString())
            },
            Xt: f,
            c: function (e) {
              return (0, r.join)(e, "..", "..", "webview")
            },
            cR: m,
            fX: "app",
            t9: function (e) {
              let t
              try {
                t = new URL(e)
              } catch {
                return null
              }
              return "app:" === t.protocol && "fs" === t.host && t.pathname.startsWith(d) ? x(t.pathname) : null
            },
            tx: function (e, t) {
              t.addSessionRestriction(
                l.session.defaultSession,
                (e) => {
                  var t
                  let n
                  return {
                    cancel:
                      "app://fs" === g(e.url) && ((t = e.frame), null == (n = g(t?.url)) || (n !== m && n !== v())),
                  }
                },
                "app:",
              )
              let a = l.app.isPackaged && ".asar" === (0, r.extname)((0, r.dirname)(e))
              l.protocol.handle("app", async (t) => {
                let i = (function (e, t) {
                  let n = (function (e) {
                    let t = "app://"
                    if (!e.startsWith(t)) return null
                    let n = e.slice(t.length),
                      a = n.indexOf("/"),
                      i = a >= 0 ? n.slice(a) : "/"
                    return i.split("?")[0]?.split("#")[0] ?? null
                  })(e)
                  if (!n) return null
                  try {
                    if (
                      (0, c.AQM)(decodeURIComponent(n))
                        .split("/")
                        .some((e) => ".." === e || /^\.\.[. ]+$/.test(e))
                    )
                      return null
                  } catch {
                    return null
                  }
                  let a = new URL(e)
                  if ("app:" !== a.protocol) return null
                  if (a.pathname.startsWith(d)) return "fs" !== a.host ? null : x(a.pathname)
                  if (a.host && "-" !== a.host) return null
                  let i = a.pathname ? a.pathname : "/",
                    o = (0, c.AQM)(i),
                    s = o.startsWith("/") ? o.slice(1) : o,
                    l = r.posix.normalize(s)
                  if ("." === l || "" === l) return (0, r.join)(t, p)
                  if (l.startsWith("..") || l.includes("/..")) return null
                  let u = (0, r.join)(t, ...l.split("/")),
                    m = (0, r.relative)(t, u)
                  return m.startsWith("..") || (0, r.isAbsolute)(m) ? null : u
                })(t.url, e)
                if (!i) return new Response(null, { status: 404, statusText: "Not Found" })
                let o = new URL(t.url)
                if ("fs" === o.host) {
                  let e = w(i) ? await k(t, i) : await h(i),
                    n = new Headers(e.headers)
                  return (
                    n.set("X-Content-Type-Options", "nosniff"),
                    n.set("Content-Type", b(i) || "application/octet-stream"),
                    new Response(e.body, { status: e.status, statusText: e.statusText, headers: n })
                  )
                }
                if (w(i)) return k(t, i)
                let s = a && (i.endsWith(".js") || i.endsWith(".css")),
                  l = await h(i, s)
                if ("-" === o.host && (i === (0, r.join)(e, p) || i === (0, r.join)(e, u))) {
                  let e = new Headers(l.headers)
                  ;(e.set("Document-Policy", "include-js-call-stacks-in-crash-reports"),
                    (l = new Response(l.body, { status: l.status, statusText: l.statusText, headers: e })))
                }
                if ("-" === o.host) {
                  let { addCharacterFrameHeaders: e } = await n.e(887).then(n.bind(n, 88426))
                  return e(o, l)
                }
                return l
              })
            },
            wE: p,
          },
        )
      },
      37062(e, t, n) {
        "use strict"
        let a = (0, n(78335).randomUUID)()
        n.d(t, {}, { P: a })
      },
      10631(e, t, n) {
        "use strict"
        n.d(t, {}, { Q: "codex-node-network-restricted" })
      },
      46514(e, t, n) {
        "use strict"
        n.d(
          t,
          {},
          {
            oK: ["disable-background-networking", "disable-component-update"],
            w4: "codex-browser-background-networking-disabled",
            xy: ["AimEnabled", "AutofillServerCommunication", "NetworkTimeServiceQuerying"],
          },
        )
      },
      49236(e, t, n) {
        "use strict"
        var a = n(89477),
          i = n(86697),
          r = n(4482),
          o = n(9169),
          s = n(46514),
          l = n(65734),
          c = n(36572)
        let p = "codex-ignore-browser-startup-hint",
          u = r.app.isPackaged
            ? (0, i.join)(
                process.env.CODEX_ELECTRON_USER_DATA_PATH?.trim() ||
                  (0, i.join)(r.app.getPath("appData"), (0, c.m)(l.x.resolve())),
                s.w4,
              )
            : null
        n.d(
          t,
          {},
          {
            E8: p,
            bn: function () {
              u && !r.app.commandLine.hasSwitch(p) && (0, a.existsSync)(u) && r.app.commandLine.appendSwitch(s.w4)
            },
            lQ: function (e) {
              if (u && (0, a.existsSync)(u) !== e)
                try {
                  e
                    ? ((0, a.mkdirSync)((0, i.dirname)(u), { recursive: !0 }),
                      (0, a.writeFileSync)(u, "", { flag: "a", mode: 384 }))
                    : (0, a.rmSync)(u, { force: !0 })
                } catch (e) {
                  ;(0, o.tZ)().warning("Failed to save browser startup hint", { safe: {}, sensitive: { error: e } })
                }
            },
          },
        )
      },
      65734(e, t, n) {
        "use strict"
        n.d(t, { x: () => f })
        var a = n(83418)
        let i = Object.values(a.N),
          r = [a.N.Dev, a.N.Agent, a.N.Nightly, a.N.InternalAlpha],
          o = {
            ...a.N,
            values: i,
            help: i.join(", "),
            isValid: (e) => i.includes(e),
            parse(e) {
              let t = e?.trim()
              return t && o.isValid(t) ? t : null
            },
            isInternal: (e) => r.includes(e),
            allowDebugMenu: (e) => o.isInternal(e),
            supportsReactScan: (e) => e === o.Dev || e === o.Agent || e === o.Nightly,
          }
        var s = n(9169),
          l = n(8892)
        let c = (0, s.vB)("build-flavor"),
          p = [o.Nightly, o.InternalAlpha, o.PublicBeta, o.Prod],
          u = {
            [o.Nightly]: { kind: "msix" },
            [o.InternalAlpha]: { kind: "msix" },
            [o.PublicBeta]: {
              kind: "store",
              storeProductId: "9N8CJ4W95TBZ",
              storeUpdateManifestUrl: "https://persistent.oaistatic.com/codex-app-beta/windows-store-update.json",
            },
            [o.Prod]: {
              kind: "store",
              storeProductId: "9PLM9XGG6VKS",
              storeUpdateManifestUrl: "https://persistent.oaistatic.com/codex-app-prod/windows-store-update.json",
              storeReleaseFeedUrl: "https://persistent.oaistatic.com/codex-app-prod/windows-release.json",
            },
          },
          d = (e, t, n, a) => "false" !== a.CODEX_SPARKLE_ENABLED && p.includes(e) && t === n,
          m = (e) => u[e] ?? null,
          f = {
            ...o,
            supportsStartupPerformanceRecording: (e) => e === o.Dev || e === o.Nightly || e === o.InternalAlpha,
            readFromPackageMetadata(e = l.C) {
              let t = e("codexBuildFlavor", { parse: (e) => (f.isValid(e) ? e : null) })
              return t
                ? (c().debug("Resolved build flavor from package metadata", { safe: { value: t }, sensitive: {} }), t)
                : (c().warning("Missing codexBuildFlavor from package metadata"), null)
            },
            resolve(e = l.C) {
              let t = process.env.BUILD_FLAVOR,
                n = f.parse(t)
              if (n) return (c().info("Resolved build flavor from env", { safe: { value: n }, sensitive: {} }), n)
              t?.trim() && c().warning("Invalid BUILD_FLAVOR", { safe: { value: t, expected: f.help }, sensitive: {} })
              let a = f.readFromPackageMetadata(e)
              return a || (c().warning("BUILD_FLAVOR missing; defaulting to prod in production runtime"), f.Prod)
            },
            assertMinAppServerVersionForReleaseBuild(e, t, n = process.env) {
              if (null != n.CODEX_RELEASE_BUILD_FLAVOR && !f.isInternal(e) && /-alpha(?:\.|$)/.test(t))
                throw Error(
                  `MIN_APP_SERVER_VERSION cannot be an alpha version for public-beta or prod builds (received ${t})`,
                )
            },
            shouldIncludeSparkle: (e, t, n = process.env) => d(e, t, "darwin", n),
            shouldIncludeWindowsUpdater: (e, t, n = process.env) => d(e, t, "win32", n) && null != m(e),
            shouldIncludeLinuxPackageUpdater: (e, t, n = process.env) => d(e, t, "linux", n),
            shouldIncludeWindowsMsixUpdater: (e, t, n = process.env) => d(e, t, "win32", n) && m(e)?.kind === "msix",
            shouldIncludeBrowserUsePeerAuthorization: (e, t) => "darwin" === t && p.includes(e),
            shouldIncludeUpdater: (e, t, n = process.env) =>
              f.shouldIncludeSparkle(e, t, n) ||
              f.shouldIncludeWindowsUpdater(e, t, n) ||
              f.shouldIncludeLinuxPackageUpdater(e, t, n),
            getWindowsDistributionFlavor: (e, t) => (e === f.Prod && "OpenAI.CodexBeta" === t ? f.PublicBeta : e),
            getWindowsStoreConfig(e, t = null) {
              let n = m(f.getWindowsDistributionFlavor(e, t))
              return n?.kind === "store"
                ? {
                    storeProductId: n.storeProductId,
                    storeUpdateManifestUrl: n.storeUpdateManifestUrl,
                    storeReleaseFeedUrl: n.storeReleaseFeedUrl,
                  }
                : null
            },
            shouldIncludeWindowsAppContainedCore(e, t = null) {
              let n = f.getWindowsDistributionFlavor(e, t)
              return n === f.Dev || n === f.Nightly || n === f.InternalAlpha || n === f.PublicBeta || n === f.Prod
            },
            shouldIncludeWindowsSandboxService(e, t = null) {
              let n = f.getWindowsDistributionFlavor(e, t)
              return n === f.Nightly || n === f.Prod
            },
            allowDevtools: (e) => f.isInternal(e),
          }
      },
      36572(e, t, n) {
        "use strict"
        var a = n(65734)
        n.d(
          t,
          {},
          {
            m: function (e) {
              switch (e) {
                case a.x.Agent:
                  return "com.openai.codex.agent"
                case a.x.Dev:
                  return "com.openai.codex.dev"
                case a.x.Nightly:
                  return "com.openai.codex.nightly"
                case a.x.InternalAlpha:
                  return "com.openai.codex.alpha"
                case a.x.PublicBeta:
                  return "com.openai.codex.beta"
                case a.x.Prod:
                  return "com.openai.codex"
              }
            },
          },
        )
      },
      78191(e, t, n) {
        "use strict"
        var a = n(73127),
          i = n(4482),
          r = n(18507)
        let o = [],
          s = [],
          l = null,
          c = null,
          p = !1
        function u(e) {
          return 0 !== e.length && (null != l ? l(e) : o.push(...e), !0)
        }
        function d(e) {
          return 0 !== e.length && (s.push(...e), !0)
        }
        n.d(
          t,
          {},
          {
            W6: u,
            XO: function () {
              ;(0 !== o.length || 0 !== s.length) &&
                (process.env.CODEX_DESKTOP_RELAUNCH_OPEN_EVENTS = JSON.stringify({
                  filePaths: o.splice(0),
                  urls: s.splice(0),
                }))
            },
            Z1: function () {
              return ((p = !0), s.splice(0, s.length))
            },
            _5: function (e) {
              return ((l = e), o.splice(0, o.length))
            },
            cK: function (e) {
              if (!e || null != c) return () => {}
              let t = (e, t) => {
                  ;(e.preventDefault(), u([t]))
                },
                n = (e, t) => {
                  let n
                  try {
                    n = (0, a.fileURLToPath)(t)
                  } catch {
                    let n
                    if (p) return
                    try {
                      n = new URL(t)
                    } catch {
                      return
                    }
                    if (
                      "codex:" !== n.protocol &&
                      "codex-dev:" !== n.protocol &&
                      "http:" !== n.protocol &&
                      "https:" !== n.protocol
                    )
                      return
                    ;(e.preventDefault(), d([t]))
                    return
                  }
                  ;(e.preventDefault(), u([n]))
                },
                o = (0, r._t)(i.app, (e) => !p && d([e]))
              return (
                (c = t),
                i.app.on("open-file", t),
                i.app.on("open-url", n),
                () => {
                  c === t &&
                    (i.app.removeListener("open-file", t), i.app.removeListener("open-url", n), o?.(), (c = null))
                }
              )
            },
            r1: function (e) {
              l === e && (l = null)
            },
            sO: async function () {
              let e = process.env.CODEX_DESKTOP_RELAUNCH_OPEN_EVENTS
              if ((delete process.env.CODEX_DESKTOP_RELAUNCH_OPEN_EVENTS, null == e)) return
              let { z: t } = await n.e(800).then(n.bind(n, 86051)),
                a = t.object({ filePaths: t.array(t.string()), urls: t.array(t.string()) }).parse(JSON.parse(e))
              ;(u(a.filePaths), d(a.urls))
            },
            wn: function () {
              return s
            },
          },
        )
      },
      18507(e, t, n) {
        "use strict"
        n.d(t, { w4: () => p, Yr: () => c, _t: () => u })
        var a = n(55073),
          i = n(12704),
          r = n(10029),
          o = n(90323)
        let s = new URL(r.W).origin,
          l = /^(page|space):\/\/([A-Za-z0-9][A-Za-z0-9._~-]{0,199})(?:#([A-Za-z0-9][A-Za-z0-9._~-]{0,199}))?$/u
        function c(e) {
          if (
            "https:" !== e.protocol ||
            "chatgpt.com" !== e.hostname ||
            "" !== e.username ||
            "" !== e.password ||
            "" !== e.port ||
            "" !== e.hash ||
            e.pathname !== a.W0
          )
            return null
          let t = (0, a.Qe)(e.searchParams)
          return null == t ? null : { kind: "browserHandoff", target: t }
        }
        function p(e) {
          if ("https:" !== e.protocol || e.searchParams.has("no_universal_links") || "#no_universal_links" === e.hash)
            return null
          let t = (function (e, t) {
            let n = l.exec(e)
            if (null != n)
              return "space" === n[1]
                ? null == n[3]
                  ? { kind: "space", id: n[2] }
                  : null
                : { kind: "page", id: n[2], blockId: n[3] }
            try {
              let n = new URL(e),
                a = n.pathname.startsWith("/codex/app/space/") ? "/codex/app/space/" : "/space/",
                i = n.pathname.startsWith(a) ? n.pathname.slice(a.length) : "",
                r = "" === n.hash ? void 0 : n.hash.slice(1)
              return n.origin === s &&
                "" === n.username &&
                "" === n.password &&
                ("link" === t || (!n.searchParams.has("thread") && !n.searchParams.has("message"))) &&
                o.bS.test(i) &&
                (null == r || o.bS.test(r))
                ? { kind: "page", id: i, blockId: r }
                : null
            } catch {
              return null
            }
          })(e.href, "link")
          return t?.kind === "page" ? `${(0, i.yl)(t.id)}${e.search}${e.hash}` : null
        }
        function u(e, t) {
          let n = (e, n, a, i) => {
            let r
            if ("NSUserActivityTypeBrowsingWeb" === n && i?.webpageURL != null) {
              try {
                r = new URL(i.webpageURL)
              } catch {
                return
              }
              "chatgpt.com" === r.hostname && (null != p(r) || null != c(r)) && t(i.webpageURL) && e.preventDefault()
            }
          }
          return (e.on("continue-activity", n), () => e.removeListener("continue-activity", n))
        }
      },
      10478(e, t, n) {
        "use strict"
        let a, i
        n(95676)
        var r = n(4482),
          o = n(50596),
          s = n(10631),
          l = n(46514),
          c = n(49236),
          p = n(65734),
          u = n(78191)
        for (let e of (function ({ buildFlavor: e, env: t }) {
          let n,
            a = t.CODEX_ELECTRON_CHROMIUM_SWITCHES?.trim()
          if (e !== p.x.Dev || !a) return []
          try {
            n = JSON.parse(a)
          } catch {
            throw Error("CODEX_ELECTRON_CHROMIUM_SWITCHES must be valid JSON")
          }
          if (null == n || "object" != typeof n || Array.isArray(n))
            throw Error("CODEX_ELECTRON_CHROMIUM_SWITCHES must be a JSON object")
          return Object.entries(n).map(([e, t]) => {
            if (0 === e.length) throw Error("CODEX_ELECTRON_CHROMIUM_SWITCHES contains an empty switch name")
            if (null != t && "string" != typeof t)
              throw Error(`CODEX_ELECTRON_CHROMIUM_SWITCHES value for ${e} must be a string or null`)
            return null == t ? { name: e } : { name: e, value: t }
          })
        })({ buildFlavor: p.x.resolve(), env: process.env }))
          r.app.commandLine.appendSwitch(e.name, e.value)
        ;((a = new Set(r.app.commandLine.getSwitchValue("enable-features").split(",").filter(Boolean))).add(
          "DevToolsWebMCPSupport",
        ),
          r.app.commandLine.removeSwitch("enable-features"),
          r.app.commandLine.appendSwitch("enable-features", [...a].join(",")),
          (i = new Set(r.app.commandLine.getSwitchValue("enable-blink-features").split(",").filter(Boolean))).add(
            "WebMCP",
          ),
          i.add("FocusgroupV2"),
          r.app.commandLine.removeSwitch("enable-blink-features"),
          r.app.commandLine.appendSwitch("enable-blink-features", [...i].join(",")))
        let d = new Set(r.app.commandLine.getSwitchValue("disable-blink-features").split(",").filter(Boolean))
        for (let e of (d.add("ReplacedNormalFlowStackingInlinePaint"),
        r.app.commandLine.removeSwitch("disable-blink-features"),
        r.app.commandLine.appendSwitch("disable-blink-features", [...d].join(",")),
        r.app.commandLine.appendSwitch(
          "enable-features",
          [r.app.commandLine.getSwitchValue("enable-features"), "DocumentPolicyIncludeJSCallStacksInCrashReports"]
            .filter((e) => "" !== e)
            .join(","),
        ),
        (function ({ isPackaged: e }) {
          return e
            ? [
                {
                  name: "owl-scoped-user-agent-additional-hosts",
                  value: "openai.com,chatgpt.com,chatgpt.site,chatgpt-team.site",
                },
                { name: "owl-scoped-user-agent-prefix", value: "CodexBrowser" },
              ]
            : []
        })({ isPackaged: r.app.isPackaged })))
          r.app.commandLine.hasSwitch(e.name) || r.app.commandLine.appendSwitch(e.name, e.value)
        let m = [r.app.commandLine.getSwitchValue("disable-features"), "ApiGlicPrivate", "OwlNativeCaret"]
        if (((0, c.bn)(), r.app.commandLine.hasSwitch(l.w4))) {
          for (let e of l.oK) r.app.commandLine.appendSwitch(e)
          m.push(...l.xy)
        }
        ;(r.app.commandLine.appendSwitch("disable-features", m.filter((e) => "" !== e).join(",")),
          r.app.commandLine.hasSwitch(s.Q) && r.app.requireWebRequestForNetworking(),
          (0, o.Bi)(),
          (0, u.cK)("darwin" === process.platform),
          (async function () {
            ;("linux" === process.platform && (await r.app.whenReady()), await (0, u.sO)())
            let { initializeNodeNetworkPermissions: e } = await Promise.all([n.e(337), n.e(824), n.e(35)]).then(
                n.bind(n, 38878),
              ),
              t = e()
            if (
              ("darwin" === process.platform &&
                r.app.isPackaged &&
                Promise.allSettled([
                  Promise.all([n.e(337), n.e(824), n.e(35), n.e(7), n.e(719)]).then(n.bind(n, 45226)),
                  Promise.all([n.e(337), n.e(824), n.e(35), n.e(916), n.e(7)]).then(n.bind(n, 9319)),
                ]),
              !(await t))
            )
              return
            let { startBootstrap: a } = await Promise.all([n.e(337), n.e(824), n.e(35), n.e(7), n.e(719)]).then(
              n.bind(n, 45226),
            )
            await a()
          })().catch(async (e) => {
            let { getLogger: t } = await Promise.all([n.e(337), n.e(824)]).then(n.bind(n, 37891))
            ;(t().error("Desktop network requirements prevented startup", { safe: {}, sensitive: { error: e } }),
              r.app.exit(1))
          }))
      },
      29547(e, t, n) {
        "use strict"
        var a = n(89477),
          i = n(62228),
          r = n(86697),
          o = n(6726),
          s = n(65734),
          l = n(36572)
        function c(e, t = process.platform) {
          let n = process.env,
            a = (0, i.homedir)()
          if ("darwin" === t) return (0, r.join)(a, "Library", "Logs", (0, l.m)(e ?? s.x.resolve()))
          if ("win32" === t) {
            let e = n.LOCALAPPDATA ?? (0, r.join)(a, "AppData", "Local")
            return (0, r.join)(e, "Codex", "Logs")
          }
          if ("linux" === t) {
            let e = n.XDG_STATE_HOME ?? (0, r.join)(a, ".local", "state")
            return (0, r.join)(e, "codex", "logs")
          }
          return (0, r.join)(a, ".codex", "logs")
        }
        function p(e) {
          return e.toString().padStart(2, "0")
        }
        function u(e, t) {
          let n = t.getUTCFullYear().toString(),
            a = p(t.getUTCMonth() + 1),
            i = p(t.getUTCDate())
          return (0, r.join)(e, n, a, i)
        }
        function d(e, t, n, a) {
          return e > 0 ? e : (n(Error(`[file-logger] invalid ${a}`), { [a]: e }), t)
        }
        function m(e, t, n, a, i) {
          return `codex-desktop-${e}-${t}-t${n}-i${a}-${p(i.getUTCHours())}${p(i.getUTCMinutes())}${p(i.getUTCSeconds())}`
        }
        let f = 0
        function h(e, t, n, i) {
          try {
            let i = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())),
              o = new Date(i)
            for (let t of (o.setUTCDate(o.getUTCDate() - (n - 1)), (0, a.readdirSync)(e, { withFileTypes: !0 }))) {
              let n = t.name
              if (!t.isDirectory() || !/^\d{4}$/.test(n)) continue
              let i = Number(n)
              if (!Number.isFinite(i)) continue
              let s = (0, r.join)(e, n),
                l = (0, a.readdirSync)(s, { withFileTypes: !0 }),
                c = l.length
              for (let e of l) {
                let t = e.name
                if (!e.isDirectory() || !/^\d{2}$/.test(t)) continue
                let n = Number(t)
                if (!Number.isFinite(n) || n < 1 || n > 12) continue
                let l = (0, r.join)(s, t),
                  p = (0, a.readdirSync)(l, { withFileTypes: !0 }),
                  u = p.length
                for (let e of p) {
                  let t = e.name
                  if (!e.isDirectory() || !/^\d{2}$/.test(t)) continue
                  let s = Number(t)
                  Number.isFinite(s) &&
                    !(s < 1) &&
                    !(s > 31) &&
                    new Date(Date.UTC(i, n - 1, s)) < o &&
                    ((0, a.rmSync)((0, r.join)(l, t), { recursive: !0, force: !0 }), u--)
                }
                0 === u && g(l) && c--
              }
              0 === c && g(s)
            }
          } catch (t) {
            i(Error("[file-logger] failed to prune old logs"), {
              rootDir: e,
              retentionDays: n,
              error: t instanceof Error ? t.message : String(t),
            })
          }
        }
        function g(e) {
          try {
            return ((0, a.rmdirSync)(e), !0)
          } catch (e) {
            if (!(e instanceof Error && "code" in e)) throw e
            switch (e.code) {
              case "ENOENT":
                return !0
              case "ENOTEMPTY":
              case "EEXIST":
                return !1
              default:
                throw e
            }
          }
        }
        n.d(
          t,
          {},
          {
            B: c,
            Q: function (e, t = {}) {
              let n = (t, n) => e.nonFatalReporter.reportNonFatal(t, { kind: "file-based-logger", extra: n }),
                i = e.rootDir ?? c(),
                s = t.processId ?? process.pid,
                l = t.threadId ?? o.threadId ?? 0,
                p = t.instanceId ?? (f += 1),
                g = e.appSessionId,
                v = t.now ?? (() => new Date()),
                x = e.maxSegmentBytes ?? 0xa00000,
                b = e.maxSegments ?? 5,
                y = e.pendingLineLimit ?? 1e4,
                w = e.highWaterMarkBytes ?? 1048576,
                k =
                  t.createStream ??
                  ((e, t, n = !1) => (0, a.createWriteStream)(e, { flags: n ? "a" : "w", highWaterMark: t })),
                _ = d(b, 5, n, "maxSegments"),
                P = d(x, 0xa00000, n, "maxSegmentBytes"),
                I = d(y, 1e4, n, "pendingLineLimit")
              try {
                let t = v(),
                  o = Math.floor(t.getTime() / 864e5),
                  c = u(i, t)
                ;((0, a.mkdirSync)(c, { recursive: !0 }), h(i, t, 15, n))
                let d = m(g, s, l, p, t),
                  f = (e) => (0, r.join)(c, `${d}-${e}.log`),
                  x = !1,
                  b = (e) => {
                    ;((x = !0),
                      n(Error("[file-logger] stream error"), {
                        error: e instanceof Error ? e.message : String(e),
                        rootDir: i,
                        appSessionId: g,
                        processId: s,
                        threadId: l,
                        instanceId: p,
                      }))
                  },
                  y = 0,
                  j = 0,
                  A = !0 === e.startSynchronous,
                  S = (e = !1) => {
                    var t
                    return A
                      ? null
                      : ((t = k(f(y), w, e)).on("error", (e) => {
                          b(e)
                        }),
                        t)
                  },
                  O = S(),
                  E = [],
                  T = 0,
                  z = !1,
                  C = 0,
                  R = () => {
                    ;(O?.end(), (y = (y + 1) % _), (j = 0), (O = S()))
                  },
                  $ = () => {
                    if (0 === C) return
                    let e = `[file-logger] dropped ${C} lines due to backpressure
`
                    ;(E.push({ text: e, bytes: Buffer.byteLength(e) }), (C = 0))
                  },
                  M = () => {
                    if (x) {
                      ;((E = []), (T = 0), (C = 0))
                      return
                    }
                    if (z) return
                    z = !0
                    let e = !1
                    try {
                      for (; !(T >= E.length) || ($(), !(T >= E.length));) {
                        let t = E[T]
                        if ((j + t.bytes > P && R(), null == O)) {
                          ;((0, a.writeFileSync)(f(y), t.text, { flag: 0 === j ? "w" : "a" }), (j += t.bytes), (T += 1))
                          continue
                        }
                        let n = O.write(t.text)
                        if (((j += t.bytes), (T += 1), !n)) {
                          ;(2 * T >= E.length && ((E = E.slice(T)), (T = 0)),
                            (e = !0),
                            O.once("drain", () => {
                              ;((z = !1), M())
                            }))
                          return
                        }
                      }
                      ;((E = []), (T = 0))
                    } catch (e) {
                      ;(n(Error("[file-logger] write failed"), {
                        error: e instanceof Error ? e.message : String(e),
                        rootDir: i,
                        appSessionId: g,
                        processId: s,
                        threadId: l,
                        instanceId: p,
                        maxSegments: _,
                        maxSegmentBytes: P,
                        pendingLineLimit: I,
                      }),
                        (E = []),
                        (T = 0))
                    } finally {
                      z && !e && (z = !1)
                    }
                  }
                return {
                  startAsyncWrites: () => {
                    if (A && !x) {
                      A = !1
                      try {
                        O = S(j > 0)
                      } catch (e) {
                        b(e)
                      }
                    }
                  },
                  logLine: (e) => {
                    if (!x)
                      try {
                        let t, r
                        !z &&
                          0 === E.length &&
                          ((t = v()),
                          (r = Math.floor(t.getTime() / 864e5)),
                          Object.is(r, o) ||
                            ((o = r),
                            (c = u(i, t)),
                            (0, a.mkdirSync)(c, { recursive: !0 }),
                            (d = m(g, s, l, p, t)),
                            O?.end(),
                            (y = 0),
                            (j = 0),
                            (C = 0),
                            (O = S()),
                            h(i, t, 15, n)))
                        let f = `${e}
`
                        if (E.length - T >= I) {
                          C += 1
                          return
                        }
                        ;(E.push({ text: f, bytes: Buffer.byteLength(f) }), M())
                      } catch (e) {
                        n(Error("[file-logger] logLine threw"), {
                          error: e instanceof Error ? e.message : String(e),
                          rootDir: i,
                          appSessionId: g,
                          processId: s,
                          threadId: l,
                          instanceId: p,
                        })
                      }
                  },
                }
              } catch {
                return (
                  n(Error("[file-logger] failed to initialize"), {
                    rootDir: i,
                    appSessionId: g,
                    processId: s,
                    threadId: l,
                    instanceId: p,
                  }),
                  { logLine: () => {}, startAsyncWrites: () => {} }
                )
              }
            },
          },
        )
      },
      8892(e, t, n) {
        "use strict"
        var a = n(89477),
          i = n(86697),
          r = n.n(i)
        function o() {
          return process.resourcesPath ? r().join(process.resourcesPath, "app.asar", "package.json") : void 0
        }
        function s(e) {
          if ((0, a.existsSync)(e)) return JSON.parse((0, a.readFileSync)(e, "utf8"))
        }
        function l(
          e,
          {
            candidates: t = (() => {
              let e = process.cwd(),
                t = [],
                n = o()
              return (
                n && t.push(n),
                t.push(r().join(e, "package.json")),
                t.push(r().join(e, "electron", "package.json")),
                t
              )
            })(),
            parse: n,
          } = {},
          a = s,
        ) {
          for (let i of t) {
            let t = a(i)
            if (void 0 === t) continue
            let r = "string" == typeof t[e] ? t[e].trim() : ""
            if (!r) continue
            let o = n ? n(r) : r
            if (null != o) return o
          }
          return null
        }
        n.d(
          t,
          {},
          {
            C: l,
            c: function () {
              let e,
                t = o()
              function n(n) {
                return n !== t ? s(n) : (void 0 === e && (e = s(n)), e)
              }
              return (e, t) => l(e, t, n)
            },
          },
        )
      },
      30280(e, t, n) {
        "use strict"
        var a = n(9169),
          i = n(15338),
          r = n(29547)
        function o(e) {
          return (
            "object" == typeof e &&
            null != e &&
            "code" in e &&
            ("EPIPE" === e.code || "ERR_STREAM_DESTROYED" === e.code || "EBADF" === e.code)
          )
        }
        function s(e = [process.stdout, process.stderr]) {
          for (let t of e)
            t.__codexIgnoreConsoleWriteErrors ||
              ((t.__codexIgnoreConsoleWriteErrors = !0),
              t.on("error", (e) => {
                if (!o(e)) throw e
              }))
        }
        n.d(
          t,
          {},
          {
            Dr: function (e, t) {
              let n
              s()
              let l = null,
                c = t,
                p = new a.pe(),
                u = (...e) => p.log(...e),
                d =
                  ((n = !1),
                  (e, t) => {
                    if (!n)
                      try {
                        switch (e) {
                          case "error":
                            console.error(t)
                            break
                          case "warning":
                            console.warn(t)
                            break
                          case "info":
                            console.info(t)
                            break
                          case "debug":
                            console.debug(t)
                            break
                          case "trace":
                            console.log(t)
                        }
                      } catch (e) {
                        if (o(e)) {
                          n = !0
                          return
                        }
                        throw e
                      }
                  }),
                m = (0, r.Q)({
                  appSessionId: e,
                  startSynchronous: !0,
                  nonFatalReporter: {
                    reportNonFatal: (e, t) => {
                      l ? l.reportNonFatal(e, t) : d("error", `[file-logger] ${String(e)}`)
                    },
                  },
                }),
                f =
                  (e) =>
                  (t, n, r = Date.now()) => {
                    if (!(0, i.yV)(e, c)) return
                    let o = n ?? { safe: {}, sensitive: {} },
                      s = { ...o.safe, ...o.sensitive },
                      l = 0 === Object.keys(s).length ? t : `${t} ${(0, a.NG)(s)}`
                    ;(d(e, l), m.logLine(`${new Date(r).toISOString()} ${e} ${l}`), u(e, t, { safe: o.safe }, r))
                  },
                h = { trace: f("trace"), debug: f("debug"), info: f("info"), warning: f("warning"), error: f("error") }
              return (
                (0, a.Br)({
                  trace: h.trace,
                  debug: h.debug,
                  info: h.info,
                  warning: h.warning,
                  error: h.error,
                  log: (e, t, n, a) => {
                    h[e](t, n, a)
                  },
                  dispose: () => {},
                }),
                (e, t, n) => {
                  ;((l = e),
                    (c = n),
                    (u = (e, n, a, r) => {
                      ;(0, i.yV)(e, c) && t?.log(e, n, { ...a?.safe, date: r })
                    }),
                    p.flushTo(u),
                    m.startAsyncWrites())
                }
              )
            },
            Ky: s,
          },
        )
      },
      95676(e, t, n) {
        "use strict"
        var a = n(15338),
          i = n(37062),
          r = n(65734)
        let o = (0, n(30280).Dr)(i.P, (0, a.Vd)(r.x.resolve()))
        n.d(t, {}, { n: o })
      },
      16242(e) {
        "use strict"
        e.exports = require("@parcel/watcher")
      },
      64770(e) {
        "use strict"
        e.exports = require("assert")
      },
      28903(e) {
        "use strict"
        e.exports = require("async_hooks")
      },
      87550(e) {
        "use strict"
        e.exports = require("better-sqlite3")
      },
      1158(e) {
        "use strict"
        e.exports = require("buffer")
      },
      13200(e) {
        "use strict"
        e.exports = require("child_process")
      },
      38749(e) {
        "use strict"
        e.exports = require("crypto")
      },
      68564(e) {
        "use strict"
        e.exports = require("diagnostics_channel")
      },
      62951(e) {
        "use strict"
        e.exports = require("dns")
      },
      4482(e) {
        "use strict"
        e.exports = require("electron")
      },
      66261(e) {
        "use strict"
        e.exports = require("events")
      },
      94383(e) {
        "use strict"
        e.exports = require("fs")
      },
      24246(e) {
        "use strict"
        e.exports = require("fs/promises")
      },
      9856(e) {
        "use strict"
        e.exports = require("http")
      },
      9730(e) {
        "use strict"
        e.exports = require("http2")
      },
      2057(e) {
        "use strict"
        e.exports = require("https")
      },
      77972(e) {
        "use strict"
        e.exports = require("module")
      },
      52135(e) {
        "use strict"
        e.exports = require("net")
      },
      52420(e) {
        "use strict"
        e.exports = require("node:assert")
      },
      65521(e) {
        "use strict"
        e.exports = require("node:async_hooks")
      },
      25356(e) {
        "use strict"
        e.exports = require("node:buffer")
      },
      95398(e) {
        "use strict"
        e.exports = require("node:child_process")
      },
      78335(e) {
        "use strict"
        e.exports = require("node:crypto")
      },
      64854(e) {
        "use strict"
        e.exports = require("node:diagnostics_channel")
      },
      43728(e) {
        "use strict"
        e.exports = require("node:dns/promises")
      },
      93351(e) {
        "use strict"
        e.exports = require("node:events")
      },
      89477(e) {
        "use strict"
        e.exports = require("node:fs")
      },
      42524(e) {
        "use strict"
        e.exports = require("node:fs/promises")
      },
      16310(e) {
        "use strict"
        e.exports = require("node:http")
      },
      50447(e) {
        "use strict"
        e.exports = require("node:https")
      },
      12959(e) {
        "use strict"
        e.exports = require("node:inspector")
      },
      55822(e) {
        "use strict"
        e.exports = require("node:module")
      },
      7045(e) {
        "use strict"
        e.exports = require("node:net")
      },
      62228(e) {
        "use strict"
        e.exports = require("node:os")
      },
      86697(e) {
        "use strict"
        e.exports = require("node:path")
      },
      83917(e) {
        "use strict"
        e.exports = require("node:path/posix")
      },
      77166(e) {
        "use strict"
        e.exports = require("node:perf_hooks")
      },
      6467(e) {
        "use strict"
        e.exports = require("node:process")
      },
      25680(e) {
        "use strict"
        e.exports = require("node:readline")
      },
      97530(e) {
        "use strict"
        e.exports = require("node:sqlite")
      },
      26238(e) {
        "use strict"
        e.exports = require("node:stream")
      },
      22949(e) {
        "use strict"
        e.exports = require("node:stream/promises")
      },
      32892(e) {
        "use strict"
        e.exports = require("node:string_decoder")
      },
      68543(e) {
        "use strict"
        e.exports = require("node:timers/promises")
      },
      23311(e) {
        "use strict"
        e.exports = require("node:tls")
      },
      73127(e) {
        "use strict"
        e.exports = require("node:url")
      },
      37418(e) {
        "use strict"
        e.exports = require("node:util")
      },
      48312(e) {
        "use strict"
        e.exports = require("node:v8")
      },
      6726(e) {
        "use strict"
        e.exports = require("node:worker_threads")
      },
      24627(e) {
        "use strict"
        e.exports = require("node:zlib")
      },
      24250(e) {
        "use strict"
        e.exports = require("objc-js")
      },
      89366(e) {
        "use strict"
        e.exports = require("os")
      },
      62003(e) {
        "use strict"
        e.exports = require("path")
      },
      81860(e) {
        "use strict"
        e.exports = require("perf_hooks")
      },
      85949(e) {
        "use strict"
        e.exports = require("process")
      },
      76272(e) {
        "use strict"
        e.exports = require("stream")
      },
      83318(e) {
        "use strict"
        e.exports = require("string_decoder")
      },
      52553(e) {
        "use strict"
        e.exports = require("tls")
      },
      25584(e) {
        "use strict"
        e.exports = require("tslib")
      },
      15683(e) {
        "use strict"
        e.exports = require("tty")
      },
      16857(e) {
        "use strict"
        e.exports = require("url")
      },
      92460(e) {
        "use strict"
        e.exports = require("util")
      },
      52128(e) {
        "use strict"
        e.exports = require("worker_threads")
      },
      33925(e) {
        "use strict"
        e.exports = require("zlib")
      },
      62762(e, t, n) {
        "use strict"
        var a,
          i,
          r = n(40893),
          o = n(95908)
        let s = r.IeY((e) => null !== e && ("object" == typeof e || "function" == typeof e)),
          l = r.KCZ([r.YjP(), r.aig().int()]),
          c = r.YjP()
        r._H3({ ttl: r.aig().optional(), pollInterval: r.aig().optional() })
        let p = r.Ikc({ ttl: r.aig().optional() }),
          u = r.Ikc({ taskId: r.YjP() }),
          d = r._H3({ progressToken: l.optional(), "io.modelcontextprotocol/related-task": u.optional() }),
          m = r.Ikc({ _meta: d.optional() }),
          f = m.extend({ task: p.optional() }),
          h = r.Ikc({ method: r.YjP(), params: m.loose().optional() }),
          g = r.Ikc({ _meta: d.optional() }),
          v = r.Ikc({ method: r.YjP(), params: g.loose().optional() }),
          x = r._H3({ _meta: d.optional() }),
          b = r.KCZ([r.YjP(), r.aig().int()]),
          y = r.Ikc({ jsonrpc: r.euz("2.0"), id: b, ...h.shape }).strict(),
          w = r.Ikc({ jsonrpc: r.euz("2.0"), ...v.shape }).strict(),
          k = r.Ikc({ jsonrpc: r.euz("2.0"), id: b, result: x }).strict()
        ;(((a = i || (i = {}))[(a.ConnectionClosed = -32e3)] = "ConnectionClosed"),
          (a[(a.RequestTimeout = -32001)] = "RequestTimeout"),
          (a[(a.ParseError = -32700)] = "ParseError"),
          (a[(a.InvalidRequest = -32600)] = "InvalidRequest"),
          (a[(a.MethodNotFound = -32601)] = "MethodNotFound"),
          (a[(a.InvalidParams = -32602)] = "InvalidParams"),
          (a[(a.InternalError = -32603)] = "InternalError"),
          (a[(a.UrlElicitationRequired = -32042)] = "UrlElicitationRequired"))
        let _ = r
          .Ikc({
            jsonrpc: r.euz("2.0"),
            id: b.optional(),
            error: r.Ikc({ code: r.aig().int(), message: r.YjP(), data: r.L5J().optional() }),
          })
          .strict()
        ;(r.KCZ([y, w, k, _]), r.KCZ([k, _]))
        let P = x.strict(),
          I = g.extend({ requestId: b.optional(), reason: r.YjP().optional() }),
          j = v.extend({ method: r.euz("notifications/cancelled"), params: I }),
          A = r.Ikc({
            src: r.YjP(),
            mimeType: r.YjP().optional(),
            sizes: r.YOg(r.YjP()).optional(),
            theme: r.k5n(["light", "dark"]).optional(),
          }),
          S = r.Ikc({ icons: r.YOg(A).optional() }),
          O = r.Ikc({ name: r.YjP(), title: r.YjP().optional() }),
          E = O.extend({
            ...O.shape,
            ...S.shape,
            version: r.YjP(),
            websiteUrl: r.YjP().optional(),
            description: r.YjP().optional(),
          }),
          T = r.E$q(r.Ikc({ applyDefaults: r.zMY().optional() }), r.g1P(r.YjP(), r.L5J())),
          z = r.vkY(
            (e) => (e && "object" == typeof e && !Array.isArray(e) && 0 === Object.keys(e).length ? { form: {} } : e),
            r.E$q(r.Ikc({ form: T.optional(), url: s.optional() }), r.g1P(r.YjP(), r.L5J()).optional()),
          ),
          C = r._H3({
            list: s.optional(),
            cancel: s.optional(),
            requests: r
              ._H3({
                sampling: r._H3({ createMessage: s.optional() }).optional(),
                elicitation: r._H3({ create: s.optional() }).optional(),
              })
              .optional(),
          }),
          R = r._H3({
            list: s.optional(),
            cancel: s.optional(),
            requests: r._H3({ tools: r._H3({ call: s.optional() }).optional() }).optional(),
          }),
          $ = r.Ikc({
            experimental: r.g1P(r.YjP(), s).optional(),
            sampling: r.Ikc({ context: s.optional(), tools: s.optional() }).optional(),
            elicitation: z.optional(),
            roots: r.Ikc({ listChanged: r.zMY().optional() }).optional(),
            tasks: C.optional(),
            extensions: r.g1P(r.YjP(), s).optional(),
          }),
          M = m.extend({ protocolVersion: r.YjP(), capabilities: $, clientInfo: E }),
          Y = h.extend({ method: r.euz("initialize"), params: M }),
          D = r.Ikc({
            experimental: r.g1P(r.YjP(), s).optional(),
            logging: s.optional(),
            completions: s.optional(),
            prompts: r.Ikc({ listChanged: r.zMY().optional() }).optional(),
            resources: r.Ikc({ subscribe: r.zMY().optional(), listChanged: r.zMY().optional() }).optional(),
            tools: r.Ikc({ listChanged: r.zMY().optional() }).optional(),
            tasks: R.optional(),
            extensions: r.g1P(r.YjP(), s).optional(),
          }),
          N = x.extend({ protocolVersion: r.YjP(), capabilities: D, serverInfo: E, instructions: r.YjP().optional() }),
          L = v.extend({ method: r.euz("notifications/initialized"), params: g.optional() }),
          U = h.extend({ method: r.euz("ping"), params: m.optional() }),
          F = r.Ikc({ progress: r.aig(), total: r.lqM(r.aig()), message: r.lqM(r.YjP()) }),
          q = r.Ikc({ ...g.shape, ...F.shape, progressToken: l }),
          W = v.extend({ method: r.euz("notifications/progress"), params: q }),
          Z = m.extend({ cursor: c.optional() }),
          B = h.extend({ params: Z.optional() }),
          H = x.extend({ nextCursor: c.optional() }),
          K = r.k5n(["working", "input_required", "completed", "failed", "cancelled"]),
          J = r.Ikc({
            taskId: r.YjP(),
            status: K,
            ttl: r.KCZ([r.aig(), r.chJ()]),
            createdAt: r.YjP(),
            lastUpdatedAt: r.YjP(),
            pollInterval: r.lqM(r.aig()),
            statusMessage: r.lqM(r.YjP()),
          }),
          G = x.extend({ task: J }),
          V = g.merge(J),
          Q = v.extend({ method: r.euz("notifications/tasks/status"), params: V }),
          X = h.extend({ method: r.euz("tasks/get"), params: m.extend({ taskId: r.YjP() }) }),
          ee = x.merge(J),
          et = h.extend({ method: r.euz("tasks/result"), params: m.extend({ taskId: r.YjP() }) })
        x.loose()
        let en = B.extend({ method: r.euz("tasks/list") }),
          ea = H.extend({ tasks: r.YOg(J) }),
          ei = h.extend({ method: r.euz("tasks/cancel"), params: m.extend({ taskId: r.YjP() }) })
        x.merge(J)
        let er = r.Ikc({ uri: r.YjP(), mimeType: r.lqM(r.YjP()), _meta: r.g1P(r.YjP(), r.L5J()).optional() }),
          eo = er.extend({ text: r.YjP() }),
          es = r.YjP().refine(
            (e) => {
              try {
                return (atob(e), !0)
              } catch {
                return !1
              }
            },
            { message: "Invalid Base64 string" },
          ),
          el = er.extend({ blob: es }),
          ec = r.k5n(["user", "assistant"]),
          ep = r.Ikc({
            audience: r.YOg(ec).optional(),
            priority: r.aig().min(0).max(1).optional(),
            lastModified: o.w$({ offset: !0 }).optional(),
          }),
          eu = r.Ikc({
            ...O.shape,
            ...S.shape,
            uri: r.YjP(),
            description: r.lqM(r.YjP()),
            mimeType: r.lqM(r.YjP()),
            size: r.lqM(r.aig()),
            annotations: ep.optional(),
            _meta: r.lqM(r._H3({})),
          }),
          ed = r.Ikc({
            ...O.shape,
            ...S.shape,
            uriTemplate: r.YjP(),
            description: r.lqM(r.YjP()),
            mimeType: r.lqM(r.YjP()),
            annotations: ep.optional(),
            _meta: r.lqM(r._H3({})),
          }),
          em = B.extend({ method: r.euz("resources/list") }),
          ef = H.extend({ resources: r.YOg(eu) }),
          eh = B.extend({ method: r.euz("resources/templates/list") }),
          eg = H.extend({ resourceTemplates: r.YOg(ed) }),
          ev = m.extend({ uri: r.YjP() }),
          ex = h.extend({ method: r.euz("resources/read"), params: ev }),
          eb = x.extend({ contents: r.YOg(r.KCZ([eo, el])) }),
          ey = v.extend({ method: r.euz("notifications/resources/list_changed"), params: g.optional() }),
          ew = h.extend({ method: r.euz("resources/subscribe"), params: ev }),
          ek = h.extend({ method: r.euz("resources/unsubscribe"), params: ev }),
          e_ = g.extend({ uri: r.YjP() }),
          eP = v.extend({ method: r.euz("notifications/resources/updated"), params: e_ }),
          eI = r.Ikc({ name: r.YjP(), description: r.lqM(r.YjP()), required: r.lqM(r.zMY()) }),
          ej = r.Ikc({
            ...O.shape,
            ...S.shape,
            description: r.lqM(r.YjP()),
            arguments: r.lqM(r.YOg(eI)),
            _meta: r.lqM(r._H3({})),
          }),
          eA = B.extend({ method: r.euz("prompts/list") }),
          eS = H.extend({ prompts: r.YOg(ej) }),
          eO = m.extend({ name: r.YjP(), arguments: r.g1P(r.YjP(), r.YjP()).optional() }),
          eE = h.extend({ method: r.euz("prompts/get"), params: eO }),
          eT = r.Ikc({
            type: r.euz("text"),
            text: r.YjP(),
            annotations: ep.optional(),
            _meta: r.g1P(r.YjP(), r.L5J()).optional(),
          }),
          ez = r.Ikc({
            type: r.euz("image"),
            data: es,
            mimeType: r.YjP(),
            annotations: ep.optional(),
            _meta: r.g1P(r.YjP(), r.L5J()).optional(),
          }),
          eC = r.Ikc({
            type: r.euz("audio"),
            data: es,
            mimeType: r.YjP(),
            annotations: ep.optional(),
            _meta: r.g1P(r.YjP(), r.L5J()).optional(),
          }),
          eR = r.Ikc({
            type: r.euz("tool_use"),
            name: r.YjP(),
            id: r.YjP(),
            input: r.g1P(r.YjP(), r.L5J()),
            _meta: r.g1P(r.YjP(), r.L5J()).optional(),
          }),
          e$ = r.Ikc({
            type: r.euz("resource"),
            resource: r.KCZ([eo, el]),
            annotations: ep.optional(),
            _meta: r.g1P(r.YjP(), r.L5J()).optional(),
          }),
          eM = eu.extend({ type: r.euz("resource_link") }),
          eY = r.KCZ([eT, ez, eC, eM, e$]),
          eD = r.Ikc({ role: ec, content: eY }),
          eN = x.extend({ description: r.YjP().optional(), messages: r.YOg(eD) }),
          eL = v.extend({ method: r.euz("notifications/prompts/list_changed"), params: g.optional() }),
          eU = r.Ikc({
            title: r.YjP().optional(),
            readOnlyHint: r.zMY().optional(),
            destructiveHint: r.zMY().optional(),
            idempotentHint: r.zMY().optional(),
            openWorldHint: r.zMY().optional(),
          }),
          eF = r.Ikc({ taskSupport: r.k5n(["required", "optional", "forbidden"]).optional() }),
          eq = r.Ikc({
            ...O.shape,
            ...S.shape,
            description: r.YjP().optional(),
            inputSchema: r
              .Ikc({
                type: r.euz("object"),
                properties: r.g1P(r.YjP(), s).optional(),
                required: r.YOg(r.YjP()).optional(),
              })
              .catchall(r.L5J()),
            outputSchema: r
              .Ikc({
                type: r.euz("object"),
                properties: r.g1P(r.YjP(), s).optional(),
                required: r.YOg(r.YjP()).optional(),
              })
              .catchall(r.L5J())
              .optional(),
            annotations: eU.optional(),
            execution: eF.optional(),
            _meta: r.g1P(r.YjP(), r.L5J()).optional(),
          }),
          eW = B.extend({ method: r.euz("tools/list") }),
          eZ = H.extend({ tools: r.YOg(eq) }),
          eB = x.extend({
            content: r.YOg(eY).default([]),
            structuredContent: r.g1P(r.YjP(), r.L5J()).optional(),
            isError: r.zMY().optional(),
          })
        eB.or(x.extend({ toolResult: r.L5J() }))
        let eH = f.extend({ name: r.YjP(), arguments: r.g1P(r.YjP(), r.L5J()).optional() }),
          eK = h.extend({ method: r.euz("tools/call"), params: eH }),
          eJ = v.extend({ method: r.euz("notifications/tools/list_changed"), params: g.optional() })
        r.Ikc({ autoRefresh: r.zMY().default(!0), debounceMs: r.aig().int().nonnegative().default(300) })
        let eG = r.k5n(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
          eV = m.extend({ level: eG }),
          eQ = h.extend({ method: r.euz("logging/setLevel"), params: eV }),
          eX = g.extend({ level: eG, logger: r.YjP().optional(), data: r.L5J() }),
          e0 = v.extend({ method: r.euz("notifications/message"), params: eX }),
          e1 = r.Ikc({ name: r.YjP().optional() }),
          e2 = r.Ikc({
            hints: r.YOg(e1).optional(),
            costPriority: r.aig().min(0).max(1).optional(),
            speedPriority: r.aig().min(0).max(1).optional(),
            intelligencePriority: r.aig().min(0).max(1).optional(),
          }),
          e3 = r.Ikc({ mode: r.k5n(["auto", "required", "none"]).optional() }),
          e4 = r.Ikc({
            type: r.euz("tool_result"),
            toolUseId: r.YjP().describe("The unique identifier for the corresponding tool call."),
            content: r.YOg(eY).default([]),
            structuredContent: r.Ikc({}).loose().optional(),
            isError: r.zMY().optional(),
            _meta: r.g1P(r.YjP(), r.L5J()).optional(),
          }),
          e5 = r.gMt("type", [eT, ez, eC]),
          e6 = r.gMt("type", [eT, ez, eC, eR, e4]),
          e9 = r.Ikc({ role: ec, content: r.KCZ([e6, r.YOg(e6)]), _meta: r.g1P(r.YjP(), r.L5J()).optional() }),
          e8 = f.extend({
            messages: r.YOg(e9),
            modelPreferences: e2.optional(),
            systemPrompt: r.YjP().optional(),
            includeContext: r.k5n(["none", "thisServer", "allServers"]).optional(),
            temperature: r.aig().optional(),
            maxTokens: r.aig().int(),
            stopSequences: r.YOg(r.YjP()).optional(),
            metadata: s.optional(),
            tools: r.YOg(eq).optional(),
            toolChoice: e3.optional(),
          }),
          e7 = h.extend({ method: r.euz("sampling/createMessage"), params: e8 }),
          te = x.extend({
            model: r.YjP(),
            stopReason: r.lqM(r.k5n(["endTurn", "stopSequence", "maxTokens"]).or(r.YjP())),
            role: ec,
            content: e5,
          }),
          tt = x.extend({
            model: r.YjP(),
            stopReason: r.lqM(r.k5n(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(r.YjP())),
            role: ec,
            content: r.KCZ([e6, r.YOg(e6)]),
          }),
          tn = r.Ikc({
            type: r.euz("boolean"),
            title: r.YjP().optional(),
            description: r.YjP().optional(),
            default: r.zMY().optional(),
          }),
          ta = r.Ikc({
            type: r.euz("string"),
            title: r.YjP().optional(),
            description: r.YjP().optional(),
            minLength: r.aig().optional(),
            maxLength: r.aig().optional(),
            format: r.k5n(["email", "uri", "date", "date-time"]).optional(),
            default: r.YjP().optional(),
          }),
          ti = r.Ikc({
            type: r.k5n(["number", "integer"]),
            title: r.YjP().optional(),
            description: r.YjP().optional(),
            minimum: r.aig().optional(),
            maximum: r.aig().optional(),
            default: r.aig().optional(),
          }),
          tr = r.Ikc({
            type: r.euz("string"),
            title: r.YjP().optional(),
            description: r.YjP().optional(),
            enum: r.YOg(r.YjP()),
            default: r.YjP().optional(),
          }),
          to = r.Ikc({
            type: r.euz("string"),
            title: r.YjP().optional(),
            description: r.YjP().optional(),
            oneOf: r.YOg(r.Ikc({ const: r.YjP(), title: r.YjP() })),
            default: r.YjP().optional(),
          }),
          ts = r.Ikc({
            type: r.euz("string"),
            title: r.YjP().optional(),
            description: r.YjP().optional(),
            enum: r.YOg(r.YjP()),
            enumNames: r.YOg(r.YjP()).optional(),
            default: r.YjP().optional(),
          }),
          tl = r.KCZ([tr, to]),
          tc = r.Ikc({
            type: r.euz("array"),
            title: r.YjP().optional(),
            description: r.YjP().optional(),
            minItems: r.aig().optional(),
            maxItems: r.aig().optional(),
            items: r.Ikc({ type: r.euz("string"), enum: r.YOg(r.YjP()) }),
            default: r.YOg(r.YjP()).optional(),
          }),
          tp = r.Ikc({
            type: r.euz("array"),
            title: r.YjP().optional(),
            description: r.YjP().optional(),
            minItems: r.aig().optional(),
            maxItems: r.aig().optional(),
            items: r.Ikc({ anyOf: r.YOg(r.Ikc({ const: r.YjP(), title: r.YjP() })) }),
            default: r.YOg(r.YjP()).optional(),
          }),
          tu = r.KCZ([tc, tp]),
          td = r.KCZ([ts, tl, tu]),
          tm = r.KCZ([td, tn, ta, ti]),
          tf = f.extend({
            mode: r.euz("form").optional(),
            message: r.YjP(),
            requestedSchema: r.Ikc({
              type: r.euz("object"),
              properties: r.g1P(r.YjP(), tm),
              required: r.YOg(r.YjP()).optional(),
            }),
          }),
          th = f.extend({ mode: r.euz("url"), message: r.YjP(), elicitationId: r.YjP(), url: r.YjP().url() }),
          tg = r.KCZ([tf, th]),
          tv = h.extend({ method: r.euz("elicitation/create"), params: tg }),
          tx = g.extend({ elicitationId: r.YjP() }),
          tb = v.extend({ method: r.euz("notifications/elicitation/complete"), params: tx }),
          ty = x.extend({
            action: r.k5n(["accept", "decline", "cancel"]),
            content: r.vkY(
              (e) => (null === e ? void 0 : e),
              r.g1P(r.YjP(), r.KCZ([r.YjP(), r.aig(), r.zMY(), r.YOg(r.YjP())])).optional(),
            ),
          }),
          tw = r.Ikc({ type: r.euz("ref/resource"), uri: r.YjP() }),
          tk = r.Ikc({ type: r.euz("ref/prompt"), name: r.YjP() }),
          t_ = m.extend({
            ref: r.KCZ([tk, tw]),
            argument: r.Ikc({ name: r.YjP(), value: r.YjP() }),
            context: r.Ikc({ arguments: r.g1P(r.YjP(), r.YjP()).optional() }).optional(),
          }),
          tP = h.extend({ method: r.euz("completion/complete"), params: t_ }),
          tI = x.extend({
            completion: r._H3({
              values: r.YOg(r.YjP()).max(100),
              total: r.lqM(r.aig().int()),
              hasMore: r.lqM(r.zMY()),
            }),
          }),
          tj = r.Ikc({
            uri: r.YjP().startsWith("file://"),
            name: r.YjP().optional(),
            _meta: r.g1P(r.YjP(), r.L5J()).optional(),
          }),
          tA = h.extend({ method: r.euz("roots/list"), params: m.optional() }),
          tS = x.extend({ roots: r.YOg(tj) }),
          tO = v.extend({ method: r.euz("notifications/roots/list_changed"), params: g.optional() })
        ;(r.KCZ([U, Y, tP, eQ, eE, eA, em, eh, ex, ew, ek, eK, eW, X, et, en, ei]),
          r.KCZ([j, W, L, tO, Q]),
          r.KCZ([P, te, tt, ty, tS, ee, ea, G]),
          r.KCZ([U, e7, tv, tA, X, et, en, ei]),
          r.KCZ([j, W, e0, eP, ey, eJ, eL, Q, tb]),
          r.KCZ([P, N, tI, eN, eS, ef, eg, eb, eB, eZ, ee, ea, G]),
          n.d(t, {}, { gX: ez, u$: eM, w9: e$, yu: eT }))
      },
      7695(e, t, n) {
        "use strict"
        function a() {
          return {
            async: !1,
            breaks: !1,
            extensions: null,
            gfm: !0,
            hooks: null,
            pedantic: !1,
            renderer: null,
            silent: !1,
            tokenizer: null,
            walkTokens: null,
          }
        }
        var i = a(),
          r = { exec: () => null }
        function o(e) {
          let t = []
          return (n) => {
            let a = Math.max(0, Math.min(3, n - 1)),
              i = t[a]
            return (i || ((i = e(a)), (t[a] = i)), i)
          }
        }
        function s(e, t = "") {
          let n = "string" == typeof e ? e : e.source,
            a = {
              replace: (e, t) => {
                let i = "string" == typeof t ? t : t.source
                return ((i = i.replace(c.caret, "$1")), (n = n.replace(e, i)), a)
              },
              getRegex: () => new RegExp(n, t),
            }
          return a
        }
        var l = ((e = "") => {
            try {
              return !!RegExp("(?<=1)(?<!1)" + e)
            } catch {
              return !1
            }
          })(),
          c = {
            codeRemoveIndent: /^(?: {0,3}\t| {1,4})/gm,
            outputLinkReplace: /\\([\[\]])/g,
            indentCodeCompensation: /^(\s+)(?:```)/,
            beginningSpace: /^\s+/,
            endingHash: /#$/,
            startingSpaceChar: /^ /,
            endingSpaceChar: / $/,
            endingSpaceTabChar: /[ \t]$/,
            nonSpaceChar: /[^ ]/,
            newLineCharGlobal: /\n/g,
            tabCharGlobal: /\t/g,
            leadingSpaceTab: /^[ \t]+/,
            multipleSpaceGlobal: /\s+/g,
            blankLine: /^[ \t]*$/,
            doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
            blockquoteStart: /^ {0,3}>/,
            blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
            blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
            listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
            listIsTask: /^\[[ xX]\] +\S/,
            listReplaceTask: /^\[[ xX]\] +/,
            listTaskCheckbox: /\[[ xX]\]/,
            anyLine: /\n.*\n/,
            hrefBrackets: /^<(.*)>$/,
            tableDelimiter: /[:|]/,
            tableAlignChars: /^\||\| *$/g,
            tableRowBlankLine: /\n[ \t]*$/,
            tableAlignRight: /^ *-+: *$/,
            tableAlignCenter: /^ *:-+: *$/,
            tableAlignLeft: /^ *:-+ *$/,
            startATag: /^<a /i,
            endATag: /^<\/a>/i,
            startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
            endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
            startAngleBracket: /^</,
            endAngleBracket: />$/,
            pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
            unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
            numericCharacterReference: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,
            numericCharacterReferenceOrAmpersand:
              /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
            escapeTest: /[&<>"']/,
            escapeReplace: /[&<>"']/g,
            escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
            escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
            caret: /(^|[^\[])\^/g,
            percentDecode: /%25/g,
            findPipe: /\|/g,
            splitPipe: / \|/,
            slashPipe: /\\\|/g,
            carriageReturn: /\r\n|\r/g,
            spaceLine: /^ +$/gm,
            notSpaceStart: /^\S*/,
            endingNewline: /\n$/,
            listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
            nextBulletRegex: o((e) => RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),
            hrRegex: o((e) => RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),
            fencesBeginRegex: o((e) => RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),
            headingBeginRegex: o((e) => RegExp(`^ {0,${e}}#`)),
            htmlBeginRegex: o((e) =>
              RegExp(
                `^ {0,${e}}(?:</?(?:${b})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,
                "i",
              ),
            ),
            blockquoteBeginRegex: o((e) => RegExp(`^ {0,${e}}>`)),
          },
          p = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
          u = / {0,3}(?:[*+-]|\d{1,9}[.)])/,
          d =
            /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
          m = s(d)
            .replace(/bull/g, u)
            .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
            .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
            .replace(/blockquote/g, / {0,3}>/)
            .replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/)
            .replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/)
            .replace(/html/g, / {0,3}<[^\n>]+>\n/)
            .replace(/\|table/g, "")
            .getRegex(),
          f = s(d)
            .replace(/bull/g, u)
            .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
            .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
            .replace(/blockquote/g, / {0,3}>/)
            .replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/)
            .replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/)
            .replace(/html/g, / {0,3}<[^\n>]+>\n/)
            .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
            .getRegex(),
          h = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,
          g = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
          v = s(
            /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
          )
            .replace("label", g)
            .replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
            .getRegex(),
          x = s(/^(bull)([ \t][^\n]*?)?(?:\n|$)/)
            .replace(/bull/g, u)
            .getRegex(),
          b =
            "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
          y = /<\x21--(?:-?>|[\s\S]*?(?:--\x3e|$))/,
          w = s(
            "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
            "i",
          )
            .replace("comment", y)
            .replace("tag", b)
            .replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
            .getRegex(),
          k = (e) =>
            s(h)
              .replace("hr", p)
              .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
              .replace("|lheading", "")
              .replace("|table", "")
              .replace("blockquote", " {0,3}>")
              .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)")
              .replace("list", e)
              .replace(
                "html",
                " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)",
              )
              .replace("tag", b)
              .getRegex(),
          _ = k(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),
          P = k(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),
          I = {
            blockquote: s(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
              .replace("paragraph", P)
              .getRegex(),
            code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
            def: v,
            fences:
              /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
            heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
            hr: p,
            html: w,
            lheading: m,
            list: x,
            newline: /^(?:[ \t]*(?:\n|$))+/,
            paragraph: _,
            table: r,
            text: /^[^\n]+/,
          },
          j = s(
            "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
          )
            .replace("hr", p)
            .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
            .replace("blockquote", " {0,3}>")
            .replace("code", "(?: {4}| {0,3}	)[^\\n]")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)")
            .replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]")
            .replace(
              "html",
              " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)",
            )
            .replace("tag", b)
            .getRegex(),
          A = {
            ...I,
            lheading: f,
            table: j,
            paragraph: s(h)
              .replace("hr", p)
              .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
              .replace("|lheading", "")
              .replace("table", j)
              .replace("blockquote", " {0,3}>")
              .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)")
              .replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]")
              .replace(
                "html",
                " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)",
              )
              .replace("tag", b)
              .getRegex(),
          },
          S = {
            ...I,
            html: s(
              "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))",
            )
              .replace("comment", y)
              .replace(
                /tag/g,
                "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",
              )
              .getRegex(),
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
            heading: /^(#{1,6})(.*)(?:\n+|$)/,
            fences: r,
            lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
            paragraph: s(h)
              .replace("hr", p)
              .replace(
                "heading",
                ` *#{1,6} *[^
]`,
              )
              .replace("lheading", m)
              .replace("|table", "")
              .replace("blockquote", " {0,3}>")
              .replace("|fences", "")
              .replace("|list", "")
              .replace("|html", "")
              .replace("|tag", "")
              .getRegex(),
          },
          O = /^( {2,}|\\)\n(?!\s*$)[ \t]*/,
          E = /[\p{P}\p{S}]/u,
          T = /[\s\p{P}\p{S}]/u,
          z = /[^\s\p{P}\p{S}]/u,
          C = s(/^((?![*_])punctSpace)/, "u")
            .replace(/punctSpace/g, T)
            .getRegex(),
          R = /(?!~)[\p{P}\p{S}]/u,
          $ = s(/link|precode-code|html/, "g")
            .replace(
              "link",
              /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/,
            )
            .replace("precode-", l ? "(?<!`)()" : "(^^|[^`])")
            .replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/)
            .replace("html", /<(?! )[^<>]*?>/)
            .getRegex(),
          M = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,
          Y = s(M, "u").replace(/punct/g, E).getRegex(),
          D = s(M, "u").replace(/punct/g, R).getRegex(),
          N = s(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/, "u")
            .replace(/openQuote/g, /[\p{Pi}\p{Ps}"']/u)
            .replace(/punct/g, E)
            .getRegex(),
          L =
            "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
          U = s(L, "gu")
            .replace(/notPunctSpace/g, z)
            .replace(/punctSpace/g, T)
            .replace(/punct/g, E)
            .getRegex(),
          F = s(L, "gu")
            .replace(/notPunctSpace/g, /(?:[^\s\p{P}\p{S}]|~)/u)
            .replace(/punctSpace/g, /(?!~)[\s\p{P}\p{S}]/u)
            .replace(/punct/g, R)
            .getRegex(),
          q = s(
            "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",
            "gu",
          )
            .replace(/notPunctSpace/g, z)
            .replace(/punctSpace/g, T)
            .replace(/punct/g, E)
            .getRegex(),
          W = s(
            "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
            "gu",
          )
            .replace(/notPunctSpace/g, z)
            .replace(/punctSpace/g, T)
            .replace(/punct/g, E)
            .getRegex(),
          Z = s(
            "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",
            "gu",
          )
            .replace(/notPunctSpace/g, z)
            .replace(/punctSpace/g, T)
            .replace(/punct/g, E)
            .getRegex(),
          B = s(/^~~?(?:((?!~)punct)|[^\s~])/, "u")
            .replace(/punct/g, E)
            .getRegex(),
          H = s(
            "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",
            "gu",
          )
            .replace(/notPunctSpace/g, z)
            .replace(/punctSpace/g, T)
            .replace(/punct/g, E)
            .getRegex(),
          K = s(/\\(punct)/, "gu")
            .replace(/punct/g, E)
            .getRegex(),
          J = s(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/, "gu")
            .replace(/punct/g, E)
            .getRegex(),
          G = s(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
            .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
            .replace(
              "email",
              /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
            )
            .getRegex(),
          V = s(y).replace("(?:--\x3e|$)", "--\x3e").getRegex(),
          Q = s(
            "^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
          )
            .replace("comment", V)
            .replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/)
            .getRegex(),
          X = /\[(?:\\[\s\S]|[^\[\]\\])*\]/,
          ee = s(
            /(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|(?<codeFence>`+)(?!`)(?:[^`]|(?!\k<codeFence>(?!`))`+(?!`))*\k<codeFence>(?!`)|``+(?=\])|[^\[\]\\`])*?/,
          )
            .replace("brackets", X)
            .getRegex(),
          et = s(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/)
            .replace("label", ee)
            .replace("href", /<(?:\\.|[^\n<>\\])*>|(?!<)[^ \t\n\x00-\x1f]+|(?=\))/)
            .replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
            .getRegex(),
          en = s(/^!?\[(label)\]\[(ref)\]/)
            .replace("label", ee)
            .replace("ref", g)
            .getRegex(),
          ea = s(/^!?\[(ref)\](?:\[\])?/)
            .replace("ref", g)
            .getRegex(),
          ei = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,
          er = s(
            /(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|(?<codeFence>`+)(?!`)(?:[^`]|(?!\k<codeFence>(?!`))`+(?!`))*\k<codeFence>(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/,
          )
            .replace("brackets", X)
            .getRegex(),
          eo = s("reflink|nolink(?!\\()", "g")
            .replace(
              "reflink",
              s(/^!?\[(label)\]\[(ref)\]/)
                .replace("label", er)
                .replace("ref", ei)
                .getRegex(),
            )
            .replace(
              "nolink",
              s(/^!?\[(ref)\](?:\[\])?/)
                .replace("ref", ei)
                .getRegex(),
            )
            .getRegex(),
          es = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
          el = s(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/)
            .replace(/email/g, /[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/)
            .getRegex(),
          ec = {
            _backpedal: r,
            anyPunctuation: K,
            anyPunctuationOutsideCode: J,
            autolink: G,
            blockSkip: $,
            br: O,
            code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
            del: r,
            delLDelim: r,
            delRDelim: r,
            emStrongLDelim: Y,
            emStrongRDelimAst: U,
            emStrongRDelimUnd: W,
            escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
            link: et,
            nolink: ea,
            punctuation: C,
            reflink: en,
            reflinkSearch: eo,
            tag: Q,
            text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
            url: r,
          },
          ep = {
            ...ec,
            emStrongLDelim: N,
            emStrongRDelimAst: q,
            emStrongRDelimUnd: Z,
            link: s(/^!?\[(label)\]\((.*?)\)/)
              .replace("label", ee)
              .getRegex(),
            reflink: s(/^!?\[(label)\]\s*\[([^\]]*)\]/)
              .replace("label", ee)
              .getRegex(),
          },
          eu = {
            ...ec,
            emStrongRDelimAst: F,
            emStrongLDelim: D,
            delLDelim: B,
            delRDelim: H,
            url: s(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
              .replace("emailProtocol", el)
              .replace("protocol", es)
              .replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/)
              .getRegex(),
            _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
            del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
            text: s(
              /^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/,
            )
              .replace("protocol", es)
              .replace(/emailProtocol/g, /(?:mailto|xmpp):/)
              .getRegex(),
          },
          ed = {
            ...eu,
            br: s(O).replace("{2,}", "*").getRegex(),
            text: s(eu.text)
              .replace("\\b_", "\\b_| {2,}\\n")
              .replace(/\{2,\}/g, "*")
              .getRegex(),
          },
          em = { normal: I, gfm: A, pedantic: S },
          ef = { normal: ec, gfm: eu, breaks: ed, pedantic: ep },
          eh = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
          eg = (e) => eh[e]
        function ev(e, t) {
          if (t) {
            if (c.escapeTest.test(e)) return e.replace(c.escapeReplace, eg)
          } else if (c.escapeTestNoEncode.test(e)) return e.replace(c.escapeReplaceNoEncode, eg)
          return e
        }
        function ex(e) {
          try {
            e = encodeURI(e).replace(c.percentDecode, "%")
          } catch {
            return null
          }
          return e
        }
        function eb(e, t) {
          let n = e
              .replace(c.findPipe, (e, t, n) => {
                let a = !1,
                  i = t
                for (; --i >= 0 && "\\" === n[i];) a = !a
                return a ? "|" : " |"
              })
              .split(c.splitPipe),
            a = 0
          if ((n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t))
            if (n.length > t) n.splice(t)
            else for (; n.length < t;) n.push("")
          for (; a < n.length; a++) n[a] = n[a].trim().replace(c.slashPipe, "|")
          return n
        }
        function ey(e, t, n) {
          let a = e.length
          if (0 === a) return ""
          let i = 0
          for (; i < a;) {
            let r = e.charAt(a - i - 1)
            if (r !== t || n)
              if (r !== t && n) i++
              else break
            else i++
          }
          return e.slice(0, a - i)
        }
        function ew(e) {
          let t = e.split(`
`),
            n = t.length - 1
          for (; n >= 0 && c.blankLine.test(t[n]);) n--
          return t.length - n <= 2
            ? e
            : t.slice(0, n + 1).join(`
`)
        }
        function ek(e) {
          return e.trim().toLowerCase().toUpperCase().toLowerCase()
        }
        function e_(e, t) {
          if (-1 === e.indexOf(t[0]) && -1 === e.indexOf(t[1])) return -1
          let n = 0
          for (let a = 0; a < e.length; a++)
            if ("\\" === e[a]) a++
            else if (e[a] === t[0]) n++
            else if (e[a] === t[1] && --n < 0) return a
          return n > 0 ? -2 : -1
        }
        function eP(e, t = 0) {
          let n = t,
            a = ""
          for (let t of e)
            if ("	" === t) {
              let e = 4 - (n % 4)
              ;((a += " ".repeat(e)), (n += e))
            } else ((a += t), n++)
          return a
        }
        function eI(e, t, n, a, i) {
          let r = t.href,
            o = t.title || null,
            s = e[1].replace(i.other.outputLinkReplace, "$1"),
            l = "!" === e[0].charAt(0),
            c = a.state.inLink,
            p = a.state.linkEmitted,
            u = a.state.inRawBlock
          ;((a.state.inLink = !0), (a.state.linkEmitted = !1))
          let d = a.inlineTokens(s),
            m = a.state.linkEmitted
          if (((a.state.linkEmitted = p), (a.state.inLink = c), !l)) {
            if (m) {
              a.state.inRawBlock = u
              return
            }
            a.state.linkEmitted = !0
          }
          return { type: l ? "image" : "link", raw: n, href: r, title: o, text: s, tokens: d }
        }
        function ej(e, t, n, a) {
          if (!t.includes("<")) return !1
          for (let i = 0; i < t.length; i++) {
            if ("\\" === t[i]) {
              i++
              continue
            }
            if ("`" === t[i]) {
              let e = a.inline.code.exec(t.slice(i))
              if (e) {
                i += e[0].length - 1
                continue
              }
            }
            if ("<" !== t[i]) continue
            let r = e.slice(n + i),
              o = a.inline.tag.exec(r) || a.inline.autolink.exec(r)
            if (o) {
              if (o[0].length > t.length - i) return !0
              i += o[0].length - 1
            }
          }
          return !1
        }
        var eA = class {
            options
            rules
            lexer
            constructor(e) {
              this.options = e || i
            }
            space(e) {
              let t = this.rules.block.newline.exec(e)
              if (t && t[0].length > 0) return { type: "space", raw: t[0] }
            }
            code(e) {
              let t = this.rules.block.code.exec(e)
              if (t) {
                let e = this.options.pedantic ? t[0] : ew(t[0]),
                  n = e.replace(this.rules.other.codeRemoveIndent, "")
                return { type: "code", raw: e, codeBlockStyle: "indented", text: n }
              }
            }
            fences(e) {
              let t = this.rules.block.fences.exec(e)
              if (t) {
                let e = t[0],
                  n = (function (e, t, n) {
                    let a = e.match(n.other.indentCodeCompensation)
                    if (null === a) return t
                    let i = a[1]
                    return t
                      .split(
                        `
`,
                      )
                      .map((e) => {
                        let t = e.match(n.other.beginningSpace)
                        if (null === t) return e
                        let [a] = t
                        return e.slice(Math.min(a.length, i.length))
                      }).join(`
`)
                  })(e, t[3] || "", this.rules)
                return {
                  type: "code",
                  raw: e,
                  lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
                  text: n,
                }
              }
            }
            heading(e) {
              let t = this.rules.block.heading.exec(e)
              if (t) {
                let e = t[2].trim()
                if (this.rules.other.endingHash.test(e)) {
                  let t = ey(e, "#")
                  ;(this.options.pedantic || !t || this.rules.other.endingSpaceTabChar.test(t)) && (e = t.trim())
                }
                return {
                  type: "heading",
                  raw: ey(
                    t[0],
                    `
`,
                  ),
                  depth: t[1].length,
                  text: e,
                  tokens: this.lexer.inline(e),
                }
              }
            }
            hr(e) {
              let t = this.rules.block.hr.exec(e)
              if (t)
                return {
                  type: "hr",
                  raw: ey(
                    t[0],
                    `
`,
                  ),
                }
            }
            blockquote(e) {
              let t = this.rules.block.blockquote.exec(e)
              if (t) {
                let e = ey(
                    t[0],
                    `
`,
                  ).split(`
`),
                  n = "",
                  a = "",
                  i = []
                for (; e.length > 0;) {
                  let t = !1,
                    r = [],
                    o
                  for (o = 0; o < e.length; o++)
                    if (this.rules.other.blockquoteStart.test(e[o])) (r.push(e[o]), (t = !0))
                    else if (t) break
                    else r.push(e[o])
                  e = e.slice(o)
                  let s = r.join(`
`),
                    l = s
                      .replace(
                        this.rules.other.blockquoteSetextReplace,
                        `
    $1`,
                      )
                      .replace(this.rules.other.blockquoteSetextReplace2, "")
                  ;((n = n
                    ? `${n}
${s}`
                    : s),
                    (a = a
                      ? `${a}
${l}`
                      : l))
                  let c = this.lexer.state.top
                  if (
                    ((this.lexer.state.top = !0),
                    this.lexer.blockTokens(l, i, !0),
                    (this.lexer.state.top = c),
                    0 === e.length)
                  )
                    break
                  let p = i.at(-1)
                  if (p?.type === "code" || p?.type === "heading" || p?.type === "hr" || p?.type === "html") break
                  if (p?.type === "blockquote") {
                    let t = e.join(`
`),
                      r =
                        p.raw +
                        `
` +
                        t.replace(this.rules.other.blockquoteSetextReplace2, ""),
                      o = this.blockquote(r)
                    i[i.length - 1] = o
                    let s = r.substring(o.raw.length).replace(/^\n/, ""),
                      l = s
                        ? s.split(`
`).length
                        : 0,
                      c = l ? e.slice(0, -l) : e
                    ;(c.length > 0 &&
                      (n = `${n}
${c.join(`
`)}`),
                      (a = a.substring(0, a.length - p.text.length) + o.text))
                    break
                  }
                  if (p?.type === "list") {
                    let t =
                        p.raw +
                        `
` +
                        e.join(`
`),
                      r = this.list(t)
                    ;((i[i.length - 1] = r),
                      (n = n.substring(0, n.length - p.raw.length) + r.raw),
                      (a = a.substring(0, a.length - p.raw.length) + r.raw),
                      (e = t.substring(i.at(-1).raw.length).split(`
`)))
                    continue
                  }
                }
                return { type: "blockquote", raw: n, tokens: i, text: a }
              }
            }
            list(e) {
              let t = this.rules.block.list.exec(e)
              if (t) {
                let n = e,
                  a = () => n.length - e.length,
                  i = t[1].trim(),
                  r = i.length > 1,
                  o = { type: "list", raw: "", ordered: r, start: r ? +i.slice(0, -1) : "", loose: !1, items: [] }
                ;((i = r ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`), this.options.pedantic && (i = r ? i : "[*+-]"))
                let s = this.rules.other.listItemRegex(i),
                  l = !1
                for (; e;) {
                  let i = !1,
                    r = ""
                  if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) break
                  let c = a()
                  e = e.substring(t[0].length)
                  let p = t[2].split(
                      `
`,
                      1,
                    )[0],
                    u = t[1].length,
                    d = this.options.pedantic ? eP(p, u) : p.replace(this.rules.other.leadingSpaceTab, (e) => eP(e, u)),
                    m = e.split(
                      `
`,
                      1,
                    )[0],
                    f = !d.trim(),
                    h = 0
                  if (
                    (this.options.pedantic
                      ? ((h = 2), (r = d.trimStart()))
                      : f
                        ? (h = u + 1)
                        : ((h = (h = d.search(this.rules.other.nonSpaceChar)) > 4 ? 1 : h), (r = d.slice(h)), (h += u)),
                    f && this.rules.other.blankLine.test(m) && ((e = e.substring(m.length + 1)), (i = !0)),
                    !i)
                  ) {
                    let t = this.rules.other.nextBulletRegex(h),
                      n = this.rules.other.hrRegex(h),
                      a = this.rules.other.fencesBeginRegex(h),
                      i = this.rules.other.headingBeginRegex(h),
                      o = this.rules.other.htmlBeginRegex(h),
                      s = this.rules.other.blockquoteBeginRegex(h)
                    for (; e;) {
                      let l = e.split(
                          `
`,
                          1,
                        )[0],
                        c
                      if (
                        ((m = l),
                        (c = this.options.pedantic
                          ? (m = m.replace(this.rules.other.listReplaceNesting, "  "))
                          : m.replace(this.rules.other.leadingSpaceTab, (e) => eP(e))),
                        a.test(m) || i.test(m) || o.test(m) || s.test(m) || t.test(m) || n.test(m))
                      )
                        break
                      if (c.search(this.rules.other.nonSpaceChar) >= h || !m.trim())
                        r +=
                          `
` + c.slice(h)
                      else {
                        if (
                          f ||
                          d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >=
                            4 ||
                          a.test(d) ||
                          i.test(d) ||
                          n.test(d)
                        )
                          break
                        r +=
                          `
` + m
                      }
                      ;((f = !m.trim()), (e = e.substring(l.length + 1)), (d = c.slice(h)))
                    }
                  }
                  let g = n.slice(c, a())
                  ;(o.loose || (l ? (o.loose = !0) : this.rules.other.doubleBlankLine.test(g) && (l = !0)),
                    o.items.push({
                      type: "list_item",
                      raw: g,
                      task: !!this.options.gfm && this.rules.other.listIsTask.test(r),
                      loose: !1,
                      text: r,
                      tokens: [],
                    }))
                }
                let c = o.items.at(-1)
                if (!c) return
                for (let e of ((c.raw = c.raw.trimEnd()),
                (c.text = c.text.trimEnd()),
                (o.raw = n.slice(0, a()).trimEnd()),
                o.items))
                  if (((this.lexer.state.top = !1), (e.tokens = this.lexer.blockTokens(e.text, [])), !o.loose)) {
                    let t = e.tokens.filter((e) => "space" === e.type)
                    o.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw))
                  }
                for (let e of o.items) {
                  let t = e.tokens[0]
                  if (e.task && (t?.type === "text" || t?.type === "paragraph")) {
                    ;((e.text = e.text.replace(this.rules.other.listReplaceTask, "")),
                      (t.raw = t.raw.replace(this.rules.other.listReplaceTask, "")),
                      (t.text = t.text.replace(this.rules.other.listReplaceTask, "")))
                    for (let e = this.lexer.inlineQueue.length - 1; e >= 0; e--)
                      if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)) {
                        this.lexer.inlineQueue[e].src = this.lexer.inlineQueue[e].src.replace(
                          this.rules.other.listReplaceTask,
                          "",
                        )
                        break
                      }
                    let n = this.rules.other.listTaskCheckbox.exec(e.raw)
                    if (n) {
                      let t = { type: "checkbox", raw: n[0] + " ", checked: "[ ]" !== n[0] }
                      ;((e.checked = t.checked),
                        o.loose
                          ? e.tokens[0] &&
                            ["paragraph", "text"].includes(e.tokens[0].type) &&
                            "tokens" in e.tokens[0] &&
                            e.tokens[0].tokens
                            ? ((e.tokens[0].raw = t.raw + e.tokens[0].raw),
                              (e.tokens[0].text = t.raw + e.tokens[0].text),
                              e.tokens[0].tokens.unshift(t))
                            : e.tokens.unshift({ type: "paragraph", raw: t.raw, text: t.raw, tokens: [t] })
                          : e.tokens.unshift(t))
                    }
                  } else e.task && (e.task = !1)
                }
                if (o.loose)
                  for (let e of o.items)
                    for (let t of ((e.loose = !0), e.tokens)) "text" === t.type && (t.type = "paragraph")
                return o
              }
            }
            html(e) {
              let t = this.rules.block.html.exec(e)
              if (t) {
                let e = ew(t[0])
                return {
                  type: "html",
                  block: !0,
                  raw: e,
                  pre: "pre" === t[1] || "script" === t[1] || "style" === t[1],
                  text: e,
                }
              }
            }
            def(e) {
              let t = this.rules.block.def.exec(e)
              if (t) {
                if (!this.rules.other.startAngleBracket.test(t[2]) && -1 !== e_(t[2], "()")) return
                let e = ek(t[1]).replace(this.rules.other.multipleSpaceGlobal, " "),
                  n = t[2]
                    ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1")
                    : "",
                  a = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3]
                return {
                  type: "def",
                  tag: e,
                  raw: ey(
                    t[0],
                    `
`,
                  ),
                  href: n,
                  title: a,
                }
              }
            }
            table(e) {
              let t = this.rules.block.table.exec(e)
              if (!t || !this.rules.other.tableDelimiter.test(t[2])) return
              let n = eb(t[1]),
                a = t[2].replace(this.rules.other.tableAlignChars, "").split("|"),
                i = t[3]?.trim()
                  ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`)
                  : [],
                r = {
                  type: "table",
                  raw: ey(
                    t[0],
                    `
`,
                  ),
                  header: [],
                  align: [],
                  rows: [],
                }
              if (n.length === a.length) {
                for (let e of a)
                  this.rules.other.tableAlignRight.test(e)
                    ? r.align.push("right")
                    : this.rules.other.tableAlignCenter.test(e)
                      ? r.align.push("center")
                      : this.rules.other.tableAlignLeft.test(e)
                        ? r.align.push("left")
                        : r.align.push(null)
                for (let e = 0; e < n.length; e++)
                  r.header.push({ text: n[e], tokens: this.lexer.inline(n[e]), header: !0, align: r.align[e] })
                for (let e of i)
                  r.rows.push(
                    eb(e, r.header.length).map((e, t) => ({
                      text: e,
                      tokens: this.lexer.inline(e),
                      header: !1,
                      align: r.align[t],
                    })),
                  )
                return r
              }
            }
            lheading(e) {
              let t = this.rules.block.lheading.exec(e)
              if (t) {
                let e = t[1].trim()
                return {
                  type: "heading",
                  raw: ey(
                    t[0],
                    `
`,
                  ),
                  depth: "=" === t[2].charAt(0) ? 1 : 2,
                  text: e,
                  tokens: this.lexer.inline(e),
                }
              }
            }
            paragraph(e) {
              let t = this.rules.block.paragraph.exec(e)
              if (t) {
                let e =
                  t[1].charAt(t[1].length - 1) ===
                  `
`
                    ? t[1].slice(0, -1)
                    : t[1]
                return { type: "paragraph", raw: t[0], text: e, tokens: this.lexer.inline(e) }
              }
            }
            text(e) {
              let t = this.rules.block.text.exec(e)
              if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) }
            }
            escape(e) {
              let t = this.rules.inline.escape.exec(e)
              if (t) return { type: "escape", raw: t[0], text: t[1] }
            }
            tag(e) {
              let t = this.rules.inline.tag.exec(e)
              if (t)
                return (
                  !this.lexer.state.inLink && this.rules.other.startATag.test(t[0])
                    ? (this.lexer.state.inLink = !0)
                    : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1),
                  !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0])
                    ? (this.lexer.state.inRawBlock = !0)
                    : this.lexer.state.inRawBlock &&
                      this.rules.other.endPreScriptTag.test(t[0]) &&
                      (this.lexer.state.inRawBlock = !1),
                  {
                    type: "html",
                    raw: t[0],
                    inLink: this.lexer.state.inLink,
                    inRawBlock: this.lexer.state.inRawBlock,
                    block: !1,
                    text: t[0],
                  }
                )
            }
            link(e) {
              if (!1 === this.lexer.state.linkParenPossible) return
              let t = this.rules.inline.link.exec(e)
              if (t) {
                t.groups && Object.hasOwn(t.groups, "codeFence") && t.splice(2, 1)
                let n = "!" === t[0].charAt(0) ? 2 : 1
                if (!this.options.pedantic && ej(e, t[1], n, this.rules)) return
                let a = t[2].trim()
                if (!this.options.pedantic && this.rules.other.startAngleBracket.test(a)) {
                  if (!this.rules.other.endAngleBracket.test(a)) return
                  let e = ey(a.slice(0, -1), "\\")
                  if ((a.length - e.length) % 2 == 0) return
                } else {
                  let e = e_(t[2], "()")
                  if (-2 === e) return
                  if (e > -1) {
                    let n = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e
                    ;((t[2] = t[2].substring(0, e)), (t[0] = t[0].substring(0, n).trim()), (t[3] = ""))
                  }
                }
                let i = t[2],
                  r = ""
                if (this.options.pedantic) {
                  let e = this.rules.other.pedanticHrefTitle.exec(i)
                  e && ((i = e[1]), (r = e[3]))
                } else r = t[3] ? t[3].slice(1, -1) : ""
                return (
                  (i = i.trim()),
                  this.rules.other.startAngleBracket.test(i) &&
                    (i =
                      this.options.pedantic && !this.rules.other.endAngleBracket.test(a) ? i.slice(1) : i.slice(1, -1)),
                  eI(
                    t,
                    {
                      href: i && i.replace(this.rules.inline.anyPunctuation, "$1"),
                      title: r && r.replace(this.rules.inline.anyPunctuation, "$1"),
                    },
                    t[0],
                    this.lexer,
                    this.rules,
                  )
                )
              }
            }
            reflink(e, t) {
              let n
              if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                n.groups && Object.hasOwn(n.groups, "codeFence") && n.splice(2, 1)
                let a = "!" === n[0].charAt(0) ? 2 : 1
                if (!this.options.pedantic && ej(e, n[1], a, this.rules)) return
                let i = t[ek((n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "))]
                if (!i) {
                  let e = n[0].charAt(0)
                  return { type: "text", raw: e, text: e }
                }
                return eI(n, i, n[0], this.lexer, this.rules)
              }
            }
            emStrong(e, t, n = "") {
              let a = this.rules.inline.emStrongLDelim.exec(e)
              if (
                !(
                  !a ||
                  (!a[1] && !a[2] && !a[3] && !a[4]) ||
                  (a[4] && n.match(this.rules.other.unicodeAlphaNumeric))
                ) &&
                (!(a[1] || a[3]) || !n || this.rules.inline.punctuation.exec(n))
              ) {
                let i = [...a[0]].length - 1,
                  r,
                  o,
                  s = i,
                  l = 0,
                  c = a[0][0],
                  p = n === c,
                  u = "*" === c ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd
                for (u.lastIndex = 0, t = t.slice(-1 * e.length + i); null !== (a = u.exec(t));) {
                  if (!(r = a[1] || a[2] || a[3] || a[4] || a[5] || a[6])) continue
                  if (((o = [...r].length), a[3] || a[4])) {
                    s += o
                    continue
                  }
                  if (a[5] || a[6]) {
                    if (i % 3 && !((i + o) % 3)) {
                      l += o
                      continue
                    }
                    if (p) break
                  }
                  if ((s -= o) > 0) continue
                  o = Math.min(o, o + s + l)
                  let t = [...a[0]][0].length,
                    n = e.slice(0, i + a.index + t + o)
                  if (Math.min(i, o) % 2) {
                    let e = n.slice(1, -1)
                    return { type: "em", raw: n, text: e, tokens: this.lexer.inlineTokens(e) }
                  }
                  let c = n.slice(2, -2)
                  return { type: "strong", raw: n, text: c, tokens: this.lexer.inlineTokens(c) }
                }
              }
            }
            codespan(e) {
              let t = this.rules.inline.code.exec(e)
              if (t) {
                let e = t[2].replace(this.rules.other.newLineCharGlobal, " "),
                  n = this.rules.other.nonSpaceChar.test(e),
                  a = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e)
                return (n && a && (e = e.substring(1, e.length - 1)), { type: "codespan", raw: t[0], text: e })
              }
            }
            br(e) {
              let t = this.rules.inline.br.exec(e)
              if (t) return { type: "br", raw: t[0] }
            }
            del(e, t, n = "") {
              let a = this.rules.inline.delLDelim.exec(e)
              if (a && (!a[1] || !n || this.rules.inline.punctuation.exec(n))) {
                let n = [...a[0]].length - 1,
                  i,
                  r,
                  o = n,
                  s = this.rules.inline.delRDelim
                for (s.lastIndex = 0, t = t.slice(-1 * e.length + n); null !== (a = s.exec(t));) {
                  if (!(i = a[1] || a[2] || a[3] || a[4] || a[5] || a[6]) || (r = [...i].length) !== n) continue
                  if (a[3] || a[4]) {
                    o += r
                    continue
                  }
                  if ((o -= r) > 0) continue
                  r = Math.min(r, r + o)
                  let t = [...a[0]][0].length,
                    s = e.slice(0, n + a.index + t + r),
                    l = s.slice(n, -n)
                  return { type: "del", raw: s, text: l, tokens: this.lexer.inlineTokens(l) }
                }
              }
            }
            autolink(e) {
              let t = this.rules.inline.autolink.exec(e)
              if (t) {
                let e, n
                return (
                  (n = "@" === t[2] ? "mailto:" + (e = t[1]) : (e = t[1])),
                  {
                    type: "link",
                    raw: t[0],
                    text: e,
                    href: n,
                    autolink: !0,
                    tokens: [{ type: "text", raw: e, text: e }],
                  }
                )
              }
            }
            url(e) {
              let t
              if ((t = this.rules.inline.url.exec(e))) {
                let e, n
                if ("@" === t[2]) n = "mailto:" + (e = t[0])
                else {
                  let a
                  do ((a = t[0]), (t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? ""))
                  while (a !== t[0])
                  ;((e = t[0]), (n = "www." === t[1] ? "http://" + t[0] : t[0]))
                }
                return {
                  type: "link",
                  raw: t[0],
                  text: e,
                  href: n,
                  autolink: !0,
                  tokens: [{ type: "text", raw: e, text: e }],
                }
              }
            }
            inlineText(e) {
              let t = this.rules.inline.text.exec(e)
              if (t) {
                var n
                let e = this.lexer.state.inRawBlock
                return {
                  type: "text",
                  raw: t[0],
                  text: e
                    ? t[0]
                    : ((n = t[0]),
                      c.numericCharacterReference.test(n)
                        ? n.replace(c.numericCharacterReferenceOrAmpersand, (e, t, n) => {
                            if (void 0 === t && void 0 === n) return "&amp;"
                            let a = void 0 === t ? Number.parseInt(n, 16) : Number.parseInt(t, 10)
                            return 0 === a || a > 1114111 || (a >= 55296 && a <= 57343)
                              ? "�"
                              : 38 === a
                                ? "&amp;"
                                : String.fromCodePoint(a)
                          })
                        : n),
                  escaped: e,
                }
              }
            }
          },
          eS = class e {
            tokens
            options
            state
            inlineQueue
            tokenizer
            constructor(e) {
              ;((this.tokens = []),
                (this.tokens.links = Object.create(null)),
                (this.options = e || i),
                (this.options.tokenizer = this.options.tokenizer || new eA()),
                (this.tokenizer = this.options.tokenizer),
                (this.tokenizer.options = this.options),
                (this.tokenizer.lexer = this),
                (this.inlineQueue = []),
                (this.state = { inLink: !1, inRawBlock: !1, linkEmitted: !1, linkParenPossible: !0, top: !0 }))
              let t = { other: c, block: em.normal, inline: ef.normal }
              ;(this.options.pedantic
                ? ((t.block = em.pedantic), (t.inline = ef.pedantic))
                : this.options.gfm &&
                  ((t.block = em.gfm), this.options.breaks ? (t.inline = ef.breaks) : (t.inline = ef.gfm)),
                (this.tokenizer.rules = t))
            }
            static get rules() {
              return { block: em, inline: ef }
            }
            static lex(t, n) {
              return new e(n).lex(t)
            }
            static lexInline(t, n) {
              return new e(n).inlineTokens(t)
            }
            lex(e) {
              ;((e = e.replace(
                c.carriageReturn,
                `
`,
              )),
                this.blockTokens(e, this.tokens))
              for (let e = 0; e < this.inlineQueue.length; e++) {
                let t = this.inlineQueue[e]
                this.inlineTokens(t.src, t.tokens)
              }
              return ((this.inlineQueue = []), this.tokens)
            }
            blockTokens(e, t = [], n = !1) {
              ;((this.tokenizer.lexer = this),
                this.options.pedantic && (e = e.replace(c.tabCharGlobal, "    ").replace(c.spaceLine, "")))
              let a = 1 / 0
              for (; e;) {
                let i
                if (e.length < a) a = e.length
                else {
                  this.infiniteLoopError(e.charCodeAt(0))
                  break
                }
                if (
                  this.options.extensions?.block?.some(
                    (n) => !!(i = n.call({ lexer: this }, e, t)) && ((e = e.substring(i.raw.length)), t.push(i), !0),
                  )
                )
                  continue
                if ((i = this.tokenizer.space(e))) {
                  e = e.substring(i.raw.length)
                  let n = t.at(-1)
                  1 === i.raw.length && void 0 !== n
                    ? (n.raw += `
`)
                    : t.push(i)
                  continue
                }
                if ((i = this.tokenizer.code(e))) {
                  e = e.substring(i.raw.length)
                  let n = t.at(-1)
                  n?.type === "paragraph" || n?.type === "text"
                    ? ((n.raw +=
                        (n.raw.endsWith(`
`)
                          ? ""
                          : `
`) + i.raw),
                      (n.text +=
                        `
` + i.text),
                      (this.inlineQueue.at(-1).src = n.text))
                    : t.push(i)
                  continue
                }
                if (
                  (i = this.tokenizer.fences(e)) ||
                  (i = this.tokenizer.heading(e)) ||
                  (i = this.tokenizer.hr(e)) ||
                  (i = this.tokenizer.blockquote(e)) ||
                  (i = this.tokenizer.list(e)) ||
                  (i = this.tokenizer.html(e))
                ) {
                  ;((e = e.substring(i.raw.length)), t.push(i))
                  continue
                }
                if ((i = this.tokenizer.def(e))) {
                  e = e.substring(i.raw.length)
                  let n = t.at(-1)
                  n?.type === "paragraph" || n?.type === "text"
                    ? ((n.raw +=
                        (n.raw.endsWith(`
`)
                          ? ""
                          : `
`) + i.raw),
                      (n.text +=
                        `
` + i.raw),
                      (this.inlineQueue.at(-1).src = n.text))
                    : this.tokens.links[i.tag] ||
                      ((this.tokens.links[i.tag] = { href: i.href, title: i.title }), t.push(i))
                  continue
                }
                if ((i = this.tokenizer.table(e)) || (i = this.tokenizer.lheading(e))) {
                  ;((e = e.substring(i.raw.length)), t.push(i))
                  continue
                }
                let r = e
                if (this.options.extensions?.startBlock) {
                  let t = 1 / 0,
                    n = e.slice(1),
                    a
                  ;(this.options.extensions.startBlock.forEach((e) => {
                    "number" == typeof (a = e.call({ lexer: this }, n)) && a >= 0 && (t = Math.min(t, a))
                  }),
                    t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1)))
                }
                if (this.state.top && (i = this.tokenizer.paragraph(r))) {
                  let a = t.at(-1)
                  ;(n && a?.type === "paragraph"
                    ? ((a.raw +=
                        (a.raw.endsWith(`
`)
                          ? ""
                          : `
`) + i.raw),
                      (a.text +=
                        `
` + i.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue.at(-1).src = a.text))
                    : t.push(i),
                    (n = r.length !== e.length),
                    (e = e.substring(i.raw.length)))
                  continue
                }
                if ((i = this.tokenizer.text(e))) {
                  e = e.substring(i.raw.length)
                  let n = t.at(-1)
                  n?.type === "text"
                    ? ((n.raw +=
                        (n.raw.endsWith(`
`)
                          ? ""
                          : `
`) + i.raw),
                      (n.text +=
                        `
` + i.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue.at(-1).src = n.text))
                    : t.push(i)
                  continue
                }
                if (e) {
                  this.infiniteLoopError(e.charCodeAt(0))
                  break
                }
              }
              return ((this.state.top = !0), t)
            }
            inline(e, t = []) {
              return (this.inlineQueue.push({ src: e, tokens: t }), t)
            }
            linkInText(e) {
              if (!e.includes("[")) return !1
              let t = this.tokenizer.rules.inline.link
              for (let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))
                if (t.test(n[0]) && "!" !== e.charAt(n.index - 1)) return !0
              for (let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)) {
                let e = t[0],
                  n = e.lastIndexOf("[")
                if (
                  !("!" === e.charAt(0) || !Object.hasOwn(this.tokens.links, ek(e.slice(n + 1, -1)))) &&
                  !(n > 1 && this.linkInText(e.slice(1, n - 1)))
                )
                  return !0
              }
              return !1
            }
            inlineTokens(e, t = []) {
              this.tokenizer.lexer = this
              let n = this.state.linkParenPossible
              this.state.linkParenPossible = n && e.includes(")")
              try {
                return this.#t(e, t)
              } finally {
                this.state.linkParenPossible = n
              }
            }
            #t(e, t) {
              let n = e
              if (this.tokens.links && e.includes("[")) {
                let e = this.tokenizer.rules.inline.reflinkSearch,
                  t = (n) => {
                    let a = n.lastIndexOf("[")
                    if (!Object.hasOwn(this.tokens.links, ek(n.slice(a + 1, -1)))) return n
                    if (a > 1 && "!" !== n.charAt(0)) {
                      let i = n.slice(1, a - 1)
                      if (this.linkInText(i)) return "[" + i.replace(e, t) + "][" + "a".repeat(n.length - a - 2) + "]"
                    }
                    return "[" + "a".repeat(n.length - 2) + "]"
                  }
                n = n.replace(e, t)
              }
              ;((n = (n = n.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode, (e, t, n) =>
                n ? "+".repeat(e.length) : t ? t + e.slice(t.length, -t.length).replace(/`/g, "+") + t : e,
              )).replace(this.tokenizer.rules.inline.blockSkip, (e, t, n) => {
                let a = n ? n.length : 0
                return e.slice(0, a) + "[" + "a".repeat(e.length - a - 2) + "]"
              })),
                (n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n))
              let a = !1,
                i = "",
                r = 1 / 0
              for (; e;) {
                let o
                if (e.length < r) r = e.length
                else {
                  this.infiniteLoopError(e.charCodeAt(0))
                  break
                }
                if (
                  (a || (i = ""),
                  (a = !1),
                  this.options.extensions?.inline?.some(
                    (n) => !!(o = n.call({ lexer: this }, e, t)) && ((e = e.substring(o.raw.length)), t.push(o), !0),
                  ))
                )
                  continue
                if ((o = this.tokenizer.escape(e)) || (o = this.tokenizer.tag(e)) || (o = this.tokenizer.link(e))) {
                  ;((e = e.substring(o.raw.length)), t.push(o))
                  continue
                }
                if ((o = this.tokenizer.reflink(e, this.tokens.links))) {
                  e = e.substring(o.raw.length)
                  let n = t.at(-1)
                  "text" === o.type && n?.type === "text" ? ((n.raw += o.raw), (n.text += o.text)) : t.push(o)
                  continue
                }
                if (
                  (o = this.tokenizer.emStrong(e, n, i)) ||
                  (o = this.tokenizer.codespan(e)) ||
                  (o = this.tokenizer.br(e)) ||
                  (o = this.tokenizer.del(e, n, i)) ||
                  (o = this.tokenizer.autolink(e)) ||
                  (!this.state.inLink && (o = this.tokenizer.url(e)))
                ) {
                  ;((e = e.substring(o.raw.length)), t.push(o))
                  continue
                }
                let s = e
                if (this.options.extensions?.startInline) {
                  let t = 1 / 0,
                    n = e.slice(1),
                    a
                  ;(this.options.extensions.startInline.forEach((e) => {
                    "number" == typeof (a = e.call({ lexer: this }, n)) && a >= 0 && (t = Math.min(t, a))
                  }),
                    t < 1 / 0 && t >= 0 && (s = e.substring(0, t + 1)))
                }
                if ((o = this.tokenizer.inlineText(s))) {
                  ;((e = e.substring(o.raw.length)), "_" !== o.raw.slice(-1) && (i = o.raw.slice(-1)), (a = !0))
                  let n = t.at(-1)
                  n?.type === "text" ? ((n.raw += o.raw), (n.text += o.text)) : t.push(o)
                  continue
                }
                if (e) {
                  this.infiniteLoopError(e.charCodeAt(0))
                  break
                }
              }
              return t
            }
            infiniteLoopError(e) {
              let t = "Infinite loop on byte: " + e
              if (this.options.silent) console.error(t)
              else throw Error(t)
            }
          },
          eO = class {
            options
            parser
            constructor(e) {
              this.options = e || i
            }
            space(e) {
              return ""
            }
            code({ text: e, lang: t, escaped: n }) {
              let a = (t || "").match(c.notSpaceStart)?.[0],
                i = e
                  ? e.replace(c.endingNewline, "") +
                    `
`
                  : ""
              return a
                ? '<pre><code class="language-' +
                    ev(a) +
                    '">' +
                    (n ? i : ev(i, !0)) +
                    `</code></pre>
`
                : "<pre><code>" +
                    (n ? i : ev(i, !0)) +
                    `</code></pre>
`
            }
            blockquote({ tokens: e }) {
              return `<blockquote>
${this.parser.parse(e)}</blockquote>
`
            }
            html({ text: e }) {
              return e
            }
            def(e) {
              return ""
            }
            heading({ tokens: e, depth: t }) {
              return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`
            }
            hr(e) {
              return `<hr>
`
            }
            list(e) {
              let t = e.ordered,
                n = e.start,
                a = ""
              for (let t = 0; t < e.items.length; t++) {
                let n = e.items[t]
                a += this.listitem(n)
              }
              let i = t ? "ol" : "ul"
              return (
                "<" +
                i +
                (t && 1 !== n ? ' start="' + n + '"' : "") +
                `>
` +
                a +
                "</" +
                i +
                `>
`
              )
            }
            listitem(e) {
              return `<li>${this.parser.parse(e.tokens)}</li>
`
            }
            checkbox({ checked: e }) {
              return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"> '
            }
            paragraph({ tokens: e }) {
              return `<p>${this.parser.parseInline(e)}</p>
`
            }
            table(e) {
              let t = "",
                n = ""
              for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t])
              t += this.tablerow({ text: n })
              let a = ""
              for (let t = 0; t < e.rows.length; t++) {
                let i = e.rows[t]
                n = ""
                for (let e = 0; e < i.length; e++) n += this.tablecell(i[e])
                a += this.tablerow({ text: n })
              }
              return (
                a && (a = `<tbody>${a}</tbody>`),
                `<table>
<thead>
` +
                  t +
                  `</thead>
` +
                  a +
                  `</table>
`
              )
            }
            tablerow({ text: e }) {
              return `<tr>
${e}</tr>
`
            }
            tablecell(e) {
              let t = this.parser.parseInline(e.tokens),
                n = e.header ? "th" : "td"
              return (
                (e.align ? `<${n} align="${e.align}">` : `<${n}>`) +
                t +
                `</${n}>
`
              )
            }
            strong({ tokens: e }) {
              return `<strong>${this.parser.parseInline(e)}</strong>`
            }
            em({ tokens: e }) {
              return `<em>${this.parser.parseInline(e)}</em>`
            }
            codespan({ text: e }) {
              return `<code>${ev(e, !0)}</code>`
            }
            br(e) {
              return "<br>"
            }
            del({ tokens: e }) {
              return `<del>${this.parser.parseInline(e)}</del>`
            }
            link({ href: e, title: t, text: n, tokens: a, autolink: i }) {
              let r = i ? ev(n, !0) : this.parser.parseInline(a),
                o = ex(e)
              if (null === o) return r
              let s = '<a href="' + (e = ev(o, i)) + '"'
              return (t && (s += ' title="' + ev(t) + '"'), (s += ">" + r + "</a>"))
            }
            image({ href: e, title: t, text: n, tokens: a }) {
              a && (n = this.parser.parseInline(a, this.parser.textRenderer))
              let i = ex(e)
              if (null === i) return ev(n)
              e = i
              let r = `<img src="${ev(e)}" alt="${ev(n)}"`
              return (t && (r += ` title="${ev(t)}"`), (r += ">"))
            }
            text(e) {
              return "tokens" in e && e.tokens
                ? this.parser.parseInline(e.tokens)
                : "escaped" in e && e.escaped
                  ? e.text
                  : ev(e.text)
            }
          },
          eE = class {
            strong({ text: e }) {
              return e
            }
            em({ text: e }) {
              return e
            }
            codespan({ text: e }) {
              return e
            }
            del({ text: e }) {
              return e
            }
            html({ text: e }) {
              return e
            }
            text({ text: e }) {
              return e
            }
            link({ text: e }) {
              return "" + e
            }
            image({ text: e }) {
              return "" + e
            }
            br() {
              return ""
            }
            checkbox({ raw: e }) {
              return e
            }
          },
          eT = class e {
            options
            renderer
            textRenderer
            constructor(e) {
              ;((this.options = e || i),
                (this.options.renderer = this.options.renderer || new eO()),
                (this.renderer = this.options.renderer),
                (this.renderer.options = this.options),
                (this.renderer.parser = this),
                (this.textRenderer = new eE()))
            }
            static parse(t, n) {
              return new e(n).parse(t)
            }
            static parseInline(t, n) {
              return new e(n).parseInline(t)
            }
            parse(e) {
              this.renderer.parser = this
              let t = ""
              for (let n = 0; n < e.length; n++) {
                let a = e[n]
                if (this.options.extensions?.renderers?.[a.type]) {
                  let e = this.options.extensions.renderers[a.type].call({ parser: this }, a)
                  if (
                    !1 !== e ||
                    ![
                      "space",
                      "hr",
                      "heading",
                      "code",
                      "table",
                      "blockquote",
                      "list",
                      "checkbox",
                      "html",
                      "def",
                      "paragraph",
                      "text",
                    ].includes(a.type)
                  ) {
                    t += e || ""
                    continue
                  }
                }
                switch (a.type) {
                  case "space":
                    t += this.renderer.space(a)
                    break
                  case "hr":
                    t += this.renderer.hr(a)
                    break
                  case "heading":
                    t += this.renderer.heading(a)
                    break
                  case "code":
                    t += this.renderer.code(a)
                    break
                  case "table":
                    t += this.renderer.table(a)
                    break
                  case "blockquote":
                    t += this.renderer.blockquote(a)
                    break
                  case "list":
                    t += this.renderer.list(a)
                    break
                  case "checkbox":
                    t += this.renderer.checkbox(a)
                    break
                  case "html":
                    t += this.renderer.html(a)
                    break
                  case "def":
                    t += this.renderer.def(a)
                    break
                  case "paragraph":
                    t += this.renderer.paragraph(a)
                    break
                  case "text":
                    t += this.renderer.text(a)
                    break
                  default: {
                    let e = 'Token with "' + a.type + '" type was not found.'
                    if (this.options.silent) return (console.error(e), "")
                    throw Error(e)
                  }
                }
              }
              return t
            }
            parseInline(e, t = this.renderer) {
              this.renderer.parser = this
              let n = ""
              for (let a = 0; a < e.length; a++) {
                let i = e[a]
                if (this.options.extensions?.renderers?.[i.type]) {
                  let e = this.options.extensions.renderers[i.type].call({ parser: this }, i)
                  if (
                    !1 !== e ||
                    ![
                      "escape",
                      "html",
                      "link",
                      "image",
                      "checkbox",
                      "strong",
                      "em",
                      "codespan",
                      "br",
                      "del",
                      "text",
                    ].includes(i.type)
                  ) {
                    n += e || ""
                    continue
                  }
                }
                switch (i.type) {
                  case "escape":
                  case "text":
                    n += t.text(i)
                    break
                  case "html":
                    n += t.html(i)
                    break
                  case "link":
                    n += t.link(i)
                    break
                  case "image":
                    n += t.image(i)
                    break
                  case "checkbox":
                    n += t.checkbox(i)
                    break
                  case "strong":
                    n += t.strong(i)
                    break
                  case "em":
                    n += t.em(i)
                    break
                  case "codespan":
                    n += t.codespan(i)
                    break
                  case "br":
                    n += t.br(i)
                    break
                  case "del":
                    n += t.del(i)
                    break
                  default: {
                    let e = 'Token with "' + i.type + '" type was not found.'
                    if (this.options.silent) return (console.error(e), "")
                    throw Error(e)
                  }
                }
              }
              return n
            }
          },
          ez = class {
            options
            block
            constructor(e) {
              this.options = e || i
            }
            static passThroughHooks = new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])
            static passThroughHooksRespectAsync = new Set(["preprocess", "postprocess", "processAllTokens"])
            preprocess(e) {
              return e
            }
            postprocess(e) {
              return e
            }
            processAllTokens(e) {
              return e
            }
            emStrongMask(e) {
              return e
            }
            provideLexer(e = this.block) {
              return e ? eS.lex : eS.lexInline
            }
            provideParser(e = this.block) {
              return e ? eT.parse : eT.parseInline
            }
          }
        function eC(e, t) {
          if (Array.isArray(t)) for (let n = 0; n < t.length; n++) e.push(t[n])
          else e.push(t)
        }
        var eR = class {
            defaults = a()
            options = this.setOptions
            parse = this.parseMarkdown(!0)
            parseInline = this.parseMarkdown(!1)
            Parser = eT
            Renderer = eO
            TextRenderer = eE
            Lexer = eS
            Tokenizer = eA
            Hooks = ez
            constructor(...e) {
              this.use(...e)
            }
            walkTokens(e, t) {
              let n = []
              for (let a of e)
                switch ((eC(n, t.call(this, a)), a.type)) {
                  case "table":
                    for (let e of a.header) eC(n, this.walkTokens(e.tokens, t))
                    for (let e of a.rows) for (let a of e) eC(n, this.walkTokens(a.tokens, t))
                    break
                  case "list":
                    eC(n, this.walkTokens(a.items, t))
                    break
                  default: {
                    let e = a
                    this.defaults.extensions?.childTokens?.[e.type]
                      ? this.defaults.extensions.childTokens[e.type].forEach((a) => {
                          let i = e[a].flat(1 / 0)
                          eC(n, this.walkTokens(i, t))
                        })
                      : e.tokens && eC(n, this.walkTokens(e.tokens, t))
                  }
                }
              return n
            }
            use(...e) {
              let t = this.defaults.extensions || { renderers: {}, childTokens: {} }
              return (
                e.forEach((e) => {
                  let n = { ...e }
                  if (
                    ((n.async = this.defaults.async || n.async || !1),
                    e.extensions &&
                      (e.extensions.forEach((e) => {
                        if (!e.name) throw Error("extension name required")
                        if ("renderer" in e) {
                          let n = t.renderers[e.name]
                          n
                            ? (t.renderers[e.name] = function (...t) {
                                let a = e.renderer.apply(this, t)
                                return (!1 === a && (a = n.apply(this, t)), a)
                              })
                            : (t.renderers[e.name] = e.renderer)
                        }
                        if ("tokenizer" in e) {
                          if (!e.level || ("block" !== e.level && "inline" !== e.level))
                            throw Error("extension level must be 'block' or 'inline'")
                          let n = t[e.level]
                          ;(n ? n.unshift(e.tokenizer) : (t[e.level] = [e.tokenizer]),
                            e.start &&
                              ("block" === e.level
                                ? t.startBlock
                                  ? t.startBlock.push(e.start)
                                  : (t.startBlock = [e.start])
                                : "inline" === e.level &&
                                  (t.startInline ? t.startInline.push(e.start) : (t.startInline = [e.start]))))
                        }
                        "childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens)
                      }),
                      (n.extensions = t)),
                    e.renderer)
                  ) {
                    let t = this.defaults.renderer || new eO(this.defaults)
                    for (let n in e.renderer) {
                      if (!(n in t)) throw Error(`renderer '${n}' does not exist`)
                      if (["options", "parser"].includes(n)) continue
                      let a = e.renderer[n],
                        i = t[n]
                      t[n] = (...e) => {
                        let n = a.apply(t, e)
                        return (!1 === n && (n = i.apply(t, e)), n || "")
                      }
                    }
                    n.renderer = t
                  }
                  if (e.tokenizer) {
                    let t = this.defaults.tokenizer || new eA(this.defaults)
                    for (let n in e.tokenizer) {
                      if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`)
                      if (["options", "rules", "lexer"].includes(n)) continue
                      let a = e.tokenizer[n],
                        i = t[n]
                      t[n] = (...e) => {
                        let n = a.apply(t, e)
                        return (!1 === n && (n = i.apply(t, e)), n)
                      }
                    }
                    n.tokenizer = t
                  }
                  if (e.hooks) {
                    let t = this.defaults.hooks || new ez()
                    for (let n in e.hooks) {
                      if (!(n in t)) throw Error(`hook '${n}' does not exist`)
                      if (["options", "block"].includes(n)) continue
                      let a = e.hooks[n],
                        i = t[n]
                      ez.passThroughHooks.has(n)
                        ? (t[n] = (e) => {
                            if (this.defaults.async && ez.passThroughHooksRespectAsync.has(n))
                              return (async () => {
                                let n = await a.call(t, e)
                                return i.call(t, n)
                              })()
                            let r = a.call(t, e)
                            return i.call(t, r)
                          })
                        : (t[n] = (...e) => {
                            if (this.defaults.async)
                              return (async () => {
                                let n = await a.apply(t, e)
                                return (!1 === n && (n = await i.apply(t, e)), n)
                              })()
                            let n = a.apply(t, e)
                            return (!1 === n && (n = i.apply(t, e)), n)
                          })
                    }
                    n.hooks = t
                  }
                  if (e.walkTokens) {
                    let t = this.defaults.walkTokens,
                      a = e.walkTokens
                    n.walkTokens = function (e) {
                      let n = []
                      return (n.push(a.call(this, e)), t && eC(n, t.call(this, e)), n)
                    }
                  }
                  this.defaults = { ...this.defaults, ...n }
                }),
                this
              )
            }
            setOptions(e) {
              return ((this.defaults = { ...this.defaults, ...e }), this)
            }
            lexer(e, t) {
              return eS.lex(e, t ?? this.defaults)
            }
            parser(e, t) {
              return eT.parse(e, t ?? this.defaults)
            }
            parseMarkdown(e) {
              return (t, n) => {
                let a = { ...n },
                  i = { ...this.defaults, ...a },
                  r = this.onError(!!i.silent, !!i.async)
                if (!0 === this.defaults.async && !1 === a.async)
                  return r(
                    Error(
                      "marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.",
                    ),
                  )
                if (typeof t > "u" || null === t) return r(Error("marked(): input parameter is undefined or null"))
                if ("string" != typeof t)
                  return r(
                    Error(
                      "marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected",
                    ),
                  )
                if ((i.hooks && ((i.hooks.options = i), (i.hooks.block = e)), i.async))
                  return (async () => {
                    let n = i.hooks ? await i.hooks.preprocess(t) : t,
                      a = await (i.hooks ? await i.hooks.provideLexer(e) : e ? eS.lex : eS.lexInline)(n, i),
                      r = i.hooks ? await i.hooks.processAllTokens(a) : a
                    i.walkTokens && (await Promise.all(this.walkTokens(r, i.walkTokens)))
                    let o = await (i.hooks ? await i.hooks.provideParser(e) : e ? eT.parse : eT.parseInline)(r, i)
                    return i.hooks ? await i.hooks.postprocess(o) : o
                  })().catch(r)
                try {
                  i.hooks && (t = i.hooks.preprocess(t))
                  let n = (i.hooks ? i.hooks.provideLexer(e) : e ? eS.lex : eS.lexInline)(t, i)
                  ;(i.hooks && (n = i.hooks.processAllTokens(n)), i.walkTokens && this.walkTokens(n, i.walkTokens))
                  let a = (i.hooks ? i.hooks.provideParser(e) : e ? eT.parse : eT.parseInline)(n, i)
                  return (i.hooks && (a = i.hooks.postprocess(a)), a)
                } catch (e) {
                  return r(e)
                }
              }
            }
            onError(e, t) {
              return (n) => {
                if (
                  ((n.message += `
Please report this to https://github.com/markedjs/marked.`),
                  e)
                ) {
                  let e = "<p>An error occurred:</p><pre>" + ev(n.message + "", !0) + "</pre>"
                  return t ? Promise.resolve(e) : e
                }
                if (t) return Promise.reject(n)
                throw n
              }
            }
          },
          e$ = new eR()
        function eM(e, t) {
          return e$.parse(e, t)
        }
        ;((eM.options = eM.setOptions =
          function (e) {
            return (e$.setOptions(e), (eM.defaults = e$.defaults), (i = eM.defaults), eM)
          }),
          (eM.getDefaults = a),
          (eM.defaults = i),
          (eM.use = function (...e) {
            return (e$.use(...e), (eM.defaults = e$.defaults), (i = eM.defaults), eM)
          }),
          (eM.walkTokens = function (e, t) {
            return e$.walkTokens(e, t)
          }),
          (eM.parseInline = e$.parseInline),
          (eM.Parser = eT),
          (eM.parser = eT.parse),
          (eM.Renderer = eO),
          (eM.TextRenderer = eE),
          (eM.Lexer = eS),
          (eM.lexer = eS.lex),
          (eM.Tokenizer = eA),
          (eM.Hooks = ez),
          (eM.parse = eM),
          eM.options,
          eM.setOptions)
        var eY = eM.walkTokens
        ;(eM.parseInline, eT.parse, eS.lex, n.d(t, {}, { Dz: eR, JG: eS, KR: eY, _F: eA }))
      },
      13082(e, t, n) {
        "use strict"
        var a = n(22433),
          i = n(23065),
          r = n(43578)
        let o = new WeakSet([Object.prototype, Error.prototype])
        function s(e, t, n) {
          Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            get() {
              let e = n(this)
              return (Object.defineProperty(this, t, { value: e, configurable: !0, writable: !0 }), e)
            },
            set(e) {
              Object.defineProperty(this, t, { value: e, configurable: !0, writable: !0 })
            },
          })
        }
        let l = (e, t) => {
            ;(a.a$.init(e, t), (e.name = "ZodError"))
            let n = Object.getPrototypeOf(e)
            o.has(n) ||
              (o.add(n),
              s(n, "format", (e) => (t) => a.Wk(e, t)),
              s(n, "flatten", (e) => (t) => a.JM(e, t)),
              s(n, "addIssue", (e) => (t) => {
                ;(e.issues.push(t), (e.message = JSON.stringify(e.issues, r.k8, 2)))
              }),
              s(n, "addIssues", (e) => (t) => {
                ;(e.issues.push(...t), (e.message = JSON.stringify(e.issues, r.k8, 2)))
              }),
              Object.defineProperty(n, "isEmpty", {
                configurable: !0,
                enumerable: !1,
                get() {
                  return 0 === this.issues.length
                },
              }))
          },
          c = i.xI("ZodError", l),
          p = i.xI("ZodError", l, void 0, { Parent: Error })
        n.d(t, {}, { G: c, g: p })
      },
      95908(e, t, n) {
        "use strict"
        var a = n(69580),
          i = n(40893)
        n.d(
          t,
          {},
          {
            p6: function (e) {
              return a.db(i.Brp, e)
            },
            w$: function (e) {
              return a.G1(i.You, e)
            },
          },
        )
      },
      80554(e, t, n) {
        "use strict"
        var a = n(69683),
          i = n(13082)
        let r = a.Tj(i.g),
          o = a.Rb(i.g),
          s = a.Od(i.g),
          l = a.wG(i.g),
          c = a.Mv(i.g),
          p = a.e2(i.g),
          u = a.GW(i.g),
          d = a.or(i.g),
          m = a.rh(i.g),
          f = a.VS(i.g),
          h = a.v_(i.g),
          g = a.R3(i.g)
        n.d(t, {}, { D4: p, EJ: o, EM: h, Re: d, X$: u, bp: l, ex: f, lF: c, qg: r, wy: m, xL: s, yR: g })
      },
      40893(e, t, n) {
        "use strict"
        let a
        n.d(t, {
          naA: () => ey,
          XiL: () => eH,
          Brp: () => S,
          You: () => A,
          l1C: () => eZ,
          rSt: () => en,
          bvH: () => ek,
          IiU: () => eF,
          b8S: () => eR,
          NDH: () => P,
          bzn: () => em,
          YOg: () => ew,
          K39: () => Q,
          zMY: () => es,
          IeY: () => te,
          gMt: () => eO,
          Rpp: () => z,
          k5n: () => eY,
          fHH: () => e8,
          OsD: () => R,
          Nlp: () => tn,
          Whr: () => er,
          E$q: () => eT,
          uXy: () => H,
          Pq9: () => ta,
          RZV: () => e4,
          euz: () => eN,
          _H3: () => eI,
          ZmZ: () => ev,
          chJ: () => eu,
          aig: () => ea,
          Ikc: () => e_,
          lqM: () => eq,
          vkY: () => ti,
          ivC: () => e6,
          g1P: () => e$,
          rej: () => eP,
          YjP: () => I,
          Uy$: () => e2,
          PVZ: () => eC,
          Vxk: () => ec,
          KCZ: () => eA,
          L5J: () => eh,
          OZ5: () => D,
          uRe: () => M,
          rIH: () => eb,
        })
        var i = n(23065),
          r = n(43578)
        class o extends Error {
          constructor() {
            ;(super("Cannot parse a reference cycle that closes through a transform"), (this.name = "ZodCyclicError"))
          }
        }
        let s = "~memo",
          l = []
        function c(e) {
          return null !== e && "object" == typeof e
        }
        function p(e) {
          return e.map((e) => (e.path ? { ...e, path: e.path.slice() } : { ...e }))
        }
        let u = new WeakMap(),
          d = [],
          m = {
            alloc(e, t, n) {
              let i = a
              if (!i) return n
              a = void 0
              let r = { value: n, issues: null }
              return (i.set(t.value, r), d.push(r), n)
            },
            guard(e) {
              var t
              ;((t = e._zod).deferred ?? (t.deferred = []),
                e._zod.deferred.push(() => {
                  let t = e._zod.parse,
                    n = (e, n) => {
                      var a, i
                      let r
                      if (
                        "backward" !== n.direction &&
                        ((a = n), (i = e.value), void 0 !== (r = a[s]?.backEdges) && c(i) && r.has(i))
                      )
                        throw new o()
                      return t(e, n)
                    }
                  ;((e._zod.parse = n), e._zod.run === t && (e._zod.run = n))
                }))
            },
            attach(e) {
              var t
              let n,
                i,
                o,
                m = !1
              ;((t = e._zod).deferred ?? (t.deferred = []),
                e._zod.deferred.push(() => {
                  let t = e._zod.parse,
                    f = (h, g) => {
                      let v
                      if (void 0 === n) {
                        let a = (function e(t, n, a) {
                          var i, o
                          let s = u.get(t)
                          if (void 0 !== s) return 2 * !!s
                          if (n.has(t)) return 2
                          n.add(t)
                          let l = 0,
                            c = (t) => {
                              if (2 !== l && t?._zod) {
                                let i = e(t, n, a)
                                i > l && (l = i)
                              }
                            },
                            p = (e) => {
                              e > l && (l = e)
                            },
                            d = t._zod.def
                          switch (d.type) {
                            case "object": {
                              let t = r.MO(d)
                              ;(p(
                                t
                                  ? ((t, i) => {
                                      let r = 0
                                      for (let o of Reflect.ownKeys(t)) {
                                        let s = Object.getOwnPropertyDescriptor(t, o)
                                        if (i && !s.enumerable) continue
                                        let l = s.get ? 1 : s.value?._zod ? e(s.value, n, a) : 0
                                        l > r && (r = l)
                                      }
                                      return r
                                    })(t, !0)
                                  : 1,
                              ),
                                c(d.catchall))
                              break
                            }
                            case "array":
                              c(d.element)
                              break
                            case "tuple":
                              for (let e of d.items) c(e)
                              c(d.rest)
                              break
                            case "record":
                            case "map":
                              ;(c(d.keyType), c(d.valueType))
                              break
                            case "set":
                              c(d.valueType)
                              break
                            case "union":
                              for (let e of d.options) c(e)
                              break
                            case "intersection":
                              ;(c(d.left), c(d.right))
                              break
                            case "optional":
                            case "nullable":
                            case "default":
                            case "prefault":
                            case "catch":
                            case "readonly":
                            case "nonoptional":
                            case "promise":
                            case "success":
                              c(d.innerType)
                              break
                            case "pipe":
                              ;(c(d.in), c(d.out))
                              break
                            case "function":
                              ;(c(d.input), c(d.output))
                              break
                            case "lazy": {
                              let i = d._cachedInner ?? (a ? t._zod.innerType : void 0)
                              p(i ? e(i, n, !1) : 1)
                              break
                            }
                            case "template_literal":
                            case "string":
                            case "number":
                            case "int":
                            case "boolean":
                            case "bigint":
                            case "symbol":
                            case "undefined":
                            case "null":
                            case "void":
                            case "never":
                            case "any":
                            case "unknown":
                            case "date":
                            case "nan":
                            case "enum":
                            case "literal":
                            case "file":
                            case "transform":
                            case "custom":
                              break
                            default:
                              for (let e in d) {
                                let t = Object.getOwnPropertyDescriptor(d, e)
                                if (!t || t.get) continue
                                let n = t.value
                                if (n && "object" == typeof n) {
                                  if (n._zod) c(n)
                                  else if (Array.isArray(n)) for (let e of n) c(e)
                                }
                              }
                          }
                          return (n.delete(t), (i = t), 1 !== (o = l) && u.set(i, 2 === o), o)
                        })(e, new Set(), !1)
                        if (0 === a) return ((e._zod.parse = t), e._zod.run === f && (e._zod.run = t), t(h, g))
                        2 === a || m ? (n = !0) : (m = !0)
                      }
                      let x = h.value
                      if (!c(x)) return t(h, g)
                      let b = g[s]
                      if ((b || ((b = { buckets: new WeakMap(), backEdges: void 0 }), (g[s] = b)), i === g)) v = o
                      else {
                        var y
                        let t
                        ;((t = (y = b).buckets.get(e)) || ((t = new WeakMap()), y.buckets.set(e, t)),
                          (v = t),
                          (i = g),
                          (o = v))
                      }
                      let w = v.get(x)
                      if (w)
                        return (
                          (h.value = w.value),
                          w.issues
                            ? w.issues.length && h.issues.push(...p(w.issues))
                            : ((h.memo = !0), b.backEdges ?? (b.backEdges = new WeakSet()), b.backEdges.add(w.value)),
                          h
                        )
                      a = v
                      let k = d.length,
                        _ = t(h, g)
                      a = void 0
                      let P = d.length > k ? d.pop() : void 0
                      return _ instanceof Promise
                        ? _.then((e) => (P && (P.issues = e.issues.length ? p(e.issues) : l), e))
                        : (P && (P.issues = _.issues.length ? p(_.issues) : l), _)
                    }
                  ;((e._zod.parse = f), e._zod.run === t && (e._zod.run = f))
                }))
            },
          }
        var f = n(69274),
          h = n(79105),
          g = n(69580),
          v = n(69150),
          x = n(78468),
          b = n(80554),
          y = n(69683)
        function w() {
          i.cr.memoizer || i.$W({ memoizer: m })
        }
        let k = i.xI(
            "ZodType",
            (e, t) => (
              i.cr.localeError ||
                i.$W({
                  localeError: (() => {
                    let e = {
                        string: { unit: "characters", verb: "to have" },
                        file: { unit: "bytes", verb: "to have" },
                        array: { unit: "items", verb: "to have" },
                        set: { unit: "items", verb: "to have" },
                        map: { unit: "entries", verb: "to have" },
                      },
                      t = {
                        regex: "input",
                        email: "email address",
                        url: "URL",
                        emoji: "emoji",
                        uuid: "UUID",
                        uuidv4: "UUIDv4",
                        uuidv6: "UUIDv6",
                        nanoid: "nanoid",
                        guid: "GUID",
                        cuid: "cuid",
                        cuid2: "cuid2",
                        ulid: "ULID",
                        xid: "XID",
                        ksuid: "KSUID",
                        datetime: "ISO datetime",
                        date: "ISO date",
                        time: "ISO time",
                        duration: "ISO duration",
                        ipv4: "IPv4 address",
                        ipv6: "IPv6 address",
                        mac: "MAC address",
                        cidrv4: "IPv4 range",
                        cidrv6: "IPv6 range",
                        base64: "base64-encoded string",
                        base64url: "base64url-encoded string",
                        json_string: "JSON string",
                        e164: "E.164 number",
                        currency_code: "currency code",
                        credit_card: "credit card number",
                        iban: "IBAN",
                        jwt: "JWT",
                        template_literal: "input",
                      },
                      n = { nan: "NaN" }
                    function a(e, t) {
                      return "number" !== e || "number" != typeof t || Number.isFinite(t) ? (n[e] ?? e) : String(t)
                    }
                    return (n) => {
                      switch (n.code) {
                        case "invalid_type": {
                          let e = a(n.expected),
                            t = a(r.GW(n.input), n.input)
                          return `Invalid input: expected ${e}, received ${t}`
                        }
                        case "invalid_value":
                          if (1 === n.values.length) return `Invalid input: expected ${r.B7(n.values[0])}`
                          return `Invalid option: expected one of ${r.jw(n.values, "|")}`
                        case "too_big": {
                          let t = n.exact ? "exactly " : n.inclusive ? "<=" : "<",
                            a = e[n.origin] ?? null
                          if (a)
                            return `Too big: expected ${n.origin ?? "value"} to have ${t}${n.maximum.toString()} ${a.unit ?? "elements"}`
                          return `Too big: expected ${n.origin ?? "value"} to be ${t}${n.maximum.toString()}`
                        }
                        case "too_small": {
                          let t = n.exact ? "exactly " : n.inclusive ? ">=" : ">",
                            a = e[n.origin] ?? null
                          if (a) return `Too small: expected ${n.origin} to have ${t}${n.minimum.toString()} ${a.unit}`
                          return `Too small: expected ${n.origin} to be ${t}${n.minimum.toString()}`
                        }
                        case "invalid_format":
                          if ("starts_with" === n.format) return `Invalid string: must start with "${n.prefix}"`
                          if ("ends_with" === n.format) return `Invalid string: must end with "${n.suffix}"`
                          if ("includes" === n.format) return `Invalid string: must include "${n.includes}"`
                          if ("regex" === n.format) return `Invalid string: must match pattern ${n.pattern}`
                          return `Invalid ${t[n.format] ?? n.format}`
                        case "not_multiple_of":
                          return `Invalid number: must be a multiple of ${n.divisor}`
                        case "unrecognized_keys":
                          return `Unrecognized key${n.keys.length > 1 ? "s" : ""}: ${r.jw(n.keys, ", ")}`
                        case "invalid_key":
                          return `Invalid key in ${n.origin}`
                        case "invalid_union":
                          if (n.options && Array.isArray(n.options) && n.options.length > 0) {
                            let e = n.options.map((e) => `'${e}'`).join(" | ")
                            return `Invalid discriminator value. Expected ${e}`
                          }
                          if (!1 === n.inclusive) return "Invalid input: more than one option matched"
                          return "Invalid input"
                        case "invalid_element":
                          return `Invalid value in ${n.origin}`
                        default:
                          return "Invalid input"
                      }
                    }
                  })(),
                }),
              f.W4.init(e, t),
              (e.def = t),
              (e.type = t.type),
              e
            ),
            {
              check(...e) {
                let t = this.def
                return this.clone(
                  r.zM(t, {
                    checks: [
                      ...(t.checks ?? []),
                      ...e.map((e) =>
                        "function" == typeof e ? { _zod: { check: e, def: { check: "custom" }, onattach: [] } } : e,
                      ),
                    ],
                  }),
                  { parent: !0 },
                )
              },
              with(...e) {
                return this.check(...e)
              },
              clone(e, t) {
                return r.o8(this, e, t)
              },
              brand() {
                return this
              },
              register(e, t) {
                return (e.add(this, t), this)
              },
              refine(e, t) {
                return this.check(
                  (function (e, t = {}) {
                    return g.fU(e7, e, t)
                  })(e, t),
                )
              },
              superRefine(e, t) {
                var n, a
                return this.check(((n = e), (a = t), g.MB(n, a)))
              },
              overwrite(e) {
                return this.check(g.bS(e))
              },
              optional() {
                return eq(this)
              },
              exactOptional() {
                var e
                return ((e = this), new eW({ type: "optional", innerType: e }))
              },
              nullable() {
                return eB(this)
              },
              nullish() {
                return eq(eB(this))
              },
              nonoptional(e) {
                var t, n
                return ((t = this), (n = e), new eJ({ type: "nonoptional", innerType: t, ...r.A2(n) }))
              },
              array() {
                return ew(this)
              },
              or(e) {
                return eA([this, e])
              },
              and(e) {
                return eT(this, e)
              },
              transform(e) {
                return eQ(this, eU(e))
              },
              default(e) {
                var t, n
                return (
                  (t = this),
                  (n = e),
                  new eH({
                    type: "default",
                    innerType: t,
                    get defaultValue() {
                      return "function" == typeof n ? n() : r.yG(n)
                    },
                  })
                )
              },
              prefault(e) {
                var t, n
                return (
                  (t = this),
                  (n = e),
                  new eK({
                    type: "prefault",
                    innerType: t,
                    get defaultValue() {
                      return "function" == typeof n ? n() : r.yG(n)
                    },
                  })
                )
              },
              catch(e) {
                var t, n
                return (
                  (t = this),
                  new eG({ type: "catch", innerType: t, catchValue: "function" == typeof (n = e) ? n : r.SS(n) })
                )
              },
              pipe(e) {
                return eQ(this, e)
              },
              readonly() {
                var e
                return ((e = this), new e0({ type: "readonly", innerType: e }))
              },
              describe(e) {
                let t = this.clone()
                return (h.fd.add(t, { description: e }), t)
              },
              meta(...e) {
                if (0 === e.length) return h.fd.get(this)
                let t = this.clone()
                return (h.fd.add(t, e[0]), t)
              },
              isOptional() {
                return this.safeParse(void 0).success
              },
              isNullable() {
                return this.safeParse(null).success
              },
              apply(e, ...t) {
                return 0 === t.length ? e(this) : e(this, ...t)
              },
              get "~standard"() {
                return r.jD(this, "~standard", {
                  ...f.YK(this),
                  jsonSchema: { input: (0, x.uE)(this, "input"), output: (0, x.uE)(this, "output") },
                })
              },
              set "~standard"(e) {
                r.qh(this, "~standard", e)
              },
              parse: function e(t, n) {
                return b.qg(this, t, n, { callee: e })
              },
              parseAsync: async function e(t, n) {
                return await b.EJ(this, t, n, { callee: e })
              },
              safeParse(e, t) {
                return b.xL(this, e, t)
              },
              async safeParseAsync(e, t) {
                return b.bp(this, e, t)
              },
              get spa() {
                return this?.safeParseAsync
              },
              set spa(e) {
                r.qh(this, "spa", e)
              },
              validate(e, t) {
                return y.tf(this, e, t)
              },
              validateAsync(e, t) {
                return y.F0(this, e, t)
              },
              encode: function e(t, n) {
                return b.lF(this, t, n, { callee: e })
              },
              decode: function e(t, n) {
                return b.D4(this, t, n, { callee: e })
              },
              encodeAsync: async function e(t, n) {
                return await b.X$(this, t, n, { callee: e })
              },
              decodeAsync: async function e(t, n) {
                return await b.Re(this, t, n, { callee: e })
              },
              safeEncode(e, t) {
                return b.wy(this, e, t)
              },
              safeDecode(e, t) {
                return b.ex(this, e, t)
              },
              async safeEncodeAsync(e, t) {
                return b.EM(this, e, t)
              },
              async safeDecodeAsync(e, t) {
                return b.yR(this, e, t)
              },
              toJSONSchema(e) {
                return (0, x.OA)(this, {})(e)
              },
              get description() {
                return h.fd.get(this)?.description
              },
              get _def() {
                return this._zod.def
              },
            },
          ),
          _ = i.xI(
            "_ZodString",
            (e, t) => {
              ;(f.$v.init(e, t), k.init(e, t), (e._zod.processJSONSchema = (t, n, a) => v.SW(e, t, n, a)))
            },
            r.un(
              {
                format: (e) => v.Fs(e).format ?? null,
                minLength: (e) => v.Fs(e).minimum ?? null,
                maxLength: (e) => v.Fs(e).maximum ?? null,
              },
              {
                regex(...e) {
                  return this.check(g.Fk(...e))
                },
                includes(...e) {
                  return this.check(g.dR(...e))
                },
                startsWith(...e) {
                  return this.check(g.$S(...e))
                },
                endsWith(...e) {
                  return this.check(g.ER(...e))
                },
                min(...e) {
                  return this.check(g.m9(...e))
                },
                max(...e) {
                  return this.check(g.Eb(...e))
                },
                length(...e) {
                  return this.check(g.YA(...e))
                },
                nonempty(...e) {
                  return this.check(g.m9(1, ...e))
                },
                lowercase(e) {
                  return this.check(g.hH(e))
                },
                uppercase(e) {
                  return this.check(g.qF(e))
                },
                trim() {
                  return this.check(g.WN())
                },
                normalize(...e) {
                  return this.check(g.lo(...e))
                },
                toLowerCase() {
                  return this.check(g.Il())
                },
                toUpperCase() {
                  return this.check(g.xY())
                },
                slugify() {
                  return this.check(g.TL())
                },
              },
            ),
          ),
          P = i.xI(
            "ZodString",
            (e, t) => {
              ;(f.$v.init(e, t), _.init(e, t))
            },
            {
              email(e) {
                return this.check(g.Mu(T, e))
              },
              url(e) {
                return this.check(g.Fn(Y, e))
              },
              jwt(e) {
                return this.check(g.rk(et, e))
              },
              emoji(e) {
                return this.check(g.aC(N, e))
              },
              guid(e) {
                return this.check(g.tB(C, e))
              },
              uuid(e) {
                return this.check(g.Be($, e))
              },
              uuidv4(e) {
                return this.check(g.nA($, e))
              },
              uuidv6(e) {
                return this.check(g.pY($, e))
              },
              uuidv7(e) {
                return this.check(g.wA($, e))
              },
              nanoid(e) {
                return this.check(g.Dl(L, e))
              },
              cuid(e) {
                return this.check(g.fs(U, e))
              },
              cuid2(e) {
                return this.check(g.Bj(F, e))
              },
              ulid(e) {
                return this.check(g.Ct(q, e))
              },
              base64(e) {
                return this.check(g.rt(V, e))
              },
              base64url(e) {
                return this.check(g.cU(X, e))
              },
              xid(e) {
                return this.check(g.Pw(W, e))
              },
              ksuid(e) {
                return this.check(g._z(Z, e))
              },
              ipv4(e) {
                return this.check(g.Ny(B, e))
              },
              ipv6(e) {
                return this.check(g.$O(K, e))
              },
              cidrv4(e) {
                return this.check(g.Uy(J, e))
              },
              cidrv6(e) {
                return this.check(g.gP(G, e))
              },
              e164(e) {
                return this.check(g.KB(ee, e))
              },
              datetime(e) {
                return this.check(g.G1(A, e))
              },
              date(e) {
                return this.check(g.db(S, e))
              },
              time(e) {
                return this.check(g.Kn(O, e))
              },
              duration(e) {
                return this.check(g.f2(E, e))
              },
            },
          )
        function I(e) {
          return g.Rl(P, e)
        }
        let j = i.xI("ZodStringFormat", (e, t) => {
            ;(f.EY.init(e, t), _.init(e, t))
          }),
          A = i.xI("ZodISODateTime", (e, t) => {
            ;(f.Ko.init(e, t), j.init(e, t))
          }),
          S = i.xI("ZodISODate", (e, t) => {
            ;(f.v1.init(e, t), j.init(e, t))
          }),
          O = i.xI("ZodISOTime", (e, t) => {
            ;(f.Ax.init(e, t), j.init(e, t))
          }),
          E = i.xI("ZodISODuration", (e, t) => {
            ;(f.$N.init(e, t), j.init(e, t))
          }),
          T = i.xI("ZodEmail", (e, t) => {
            ;(f.qG.init(e, t), j.init(e, t))
          })
        function z(e) {
          return g.Mu(T, e)
        }
        let C = i.xI("ZodGUID", (e, t) => {
          ;(f.Zc.init(e, t), j.init(e, t))
        })
        function R(e) {
          return g.tB(C, e)
        }
        let $ = i.xI("ZodUUID", (e, t) => {
          ;(f.Zn.init(e, t), j.init(e, t))
        })
        function M(e) {
          return g.Be($, e)
        }
        let Y = i.xI("ZodURL", (e, t) => {
          ;(f.VY.init(e, t), j.init(e, t))
        })
        function D(e) {
          return g.Fn(Y, e)
        }
        let N = i.xI("ZodEmoji", (e, t) => {
            ;(f.cG.init(e, t), j.init(e, t))
          }),
          L = i.xI("ZodNanoID", (e, t) => {
            ;(f.Py.init(e, t), j.init(e, t))
          }),
          U = i.xI("ZodCUID", (e, t) => {
            ;(f.bl.init(e, t), j.init(e, t))
          }),
          F = i.xI("ZodCUID2", (e, t) => {
            ;(f.Zu.init(e, t), j.init(e, t))
          }),
          q = i.xI("ZodULID", (e, t) => {
            ;(f.g5.init(e, t), j.init(e, t))
          }),
          W = i.xI("ZodXID", (e, t) => {
            ;(f.TF.init(e, t), j.init(e, t))
          }),
          Z = i.xI("ZodKSUID", (e, t) => {
            ;(f.GY.init(e, t), j.init(e, t))
          }),
          B = i.xI("ZodIPv4", (e, t) => {
            ;(f.Lc.init(e, t), j.init(e, t))
          })
        function H(e) {
          return g.Ny(B, e)
        }
        let K = i.xI("ZodIPv6", (e, t) => {
            ;(f.Zy.init(e, t), j.init(e, t))
          }),
          J = i.xI("ZodCIDRv4", (e, t) => {
            ;(f.CI.init(e, t), j.init(e, t))
          }),
          G = i.xI("ZodCIDRv6", (e, t) => {
            ;(f.Cn.init(e, t), j.init(e, t))
          }),
          V = i.xI("ZodBase64", (e, t) => {
            ;(f.Dq.init(e, t), j.init(e, t))
          })
        function Q(e) {
          return g.rt(V, e)
        }
        let X = i.xI("ZodBase64URL", (e, t) => {
            ;(f.CQ.init(e, t), j.init(e, t))
          }),
          ee = i.xI("ZodE164", (e, t) => {
            ;(f.Oy.init(e, t), j.init(e, t))
          }),
          et = i.xI("ZodJWT", (e, t) => {
            ;(f.h8.init(e, t), j.init(e, t))
          }),
          en = i.xI(
            "ZodNumber",
            (e, t) => {
              ;(f.vz.init(e, t),
                k.init(e, t),
                (e._zod.processJSONSchema = (t, n, a) => v.Wg(e, t, n, a)),
                (e.isFinite = !0))
            },
            r.un(
              {
                minValue: (e) => {
                  let { minimum: t, exclusiveMinimum: n } = v.Fs(e)
                  return Math.max(t ?? -1 / 0, n ?? -1 / 0)
                },
                maxValue: (e) => {
                  let { maximum: t, exclusiveMaximum: n } = v.Fs(e)
                  return Math.min(t ?? 1 / 0, n ?? 1 / 0)
                },
                isInt: (e) => {
                  let { isInt: t, multipleOf: n } = v.Fs(e)
                  return !!t || !!n?.some(Number.isSafeInteger)
                },
                format: (e) => v.Fs(e).format ?? null,
              },
              {
                gt(e, t) {
                  return this.check(g.Tx(e, t))
                },
                gte(e, t) {
                  return this.check(g.qm(e, t))
                },
                min(e, t) {
                  return this.check(g.qm(e, t))
                },
                lt(e, t) {
                  return this.check(g.Au(e, t))
                },
                lte(e, t) {
                  return this.check(g.Zm(e, t))
                },
                max(e, t) {
                  return this.check(g.Zm(e, t))
                },
                int(e) {
                  return this.check(er(e))
                },
                safe(e) {
                  return this.check(er(e))
                },
                positive(e) {
                  return this.check(g.Tx(0, e))
                },
                nonnegative(e) {
                  return this.check(g.qm(0, e))
                },
                negative(e) {
                  return this.check(g.Au(0, e))
                },
                nonpositive(e) {
                  return this.check(g.Zm(0, e))
                },
                multipleOf(e, t) {
                  return this.check(g.Hi(e, t))
                },
                step(e, t) {
                  return this.check(g.Hi(e, t))
                },
                finite() {
                  return this
                },
              },
            ),
          )
        function ea(e) {
          return g.F7(en, e)
        }
        let ei = i.xI("ZodNumberFormat", (e, t) => {
          ;(f.I.init(e, t), en.init(e, t))
        })
        function er(e) {
          return g.LK(ei, e)
        }
        let eo = i.xI("ZodBoolean", (e, t) => {
          ;(f.sF.init(e, t), k.init(e, t), (e._zod.processJSONSchema = (t, n, a) => v.dO(e, t, n, a)))
        })
        function es(e) {
          return g._L(eo, e)
        }
        let el = i.xI("ZodUndefined", (e, t) => {
          ;(f.Mv.init(e, t), k.init(e, t), (e._zod.processJSONSchema = (t, n, a) => v.BU(e, t, n, a)))
        })
        function ec(e) {
          return g.E4(el, e)
        }
        let ep = i.xI("ZodNull", (e, t) => {
          ;(f.x8.init(e, t), k.init(e, t), (e._zod.processJSONSchema = (t, n, a) => v.In(e, t, n, a)))
        })
        function eu(e) {
          return g.jw(ep, e)
        }
        let ed = i.xI("ZodAny", (e, t) => {
          ;(f.Gb.init(e, t), k.init(e, t), (e._zod.processJSONSchema = (t, n, a) => v.NX(e, t, n, a)))
        })
        function em() {
          return g.KA(ed)
        }
        let ef = i.xI("ZodUnknown", (e, t) => {
          ;(f.GP.init(e, t), k.init(e, t), (e._zod.processJSONSchema = (t, n, a) => v.NV(e, t, n, a)))
        })
        function eh() {
          return g.em(ef)
        }
        let eg = i.xI("ZodNever", (e, t) => {
          ;(f.Um.init(e, t), k.init(e, t), (e._zod.processJSONSchema = (t, n, a) => v.RH(e, t, n, a)))
        })
        function ev(e) {
          return g.G8(eg, e)
        }
        let ex = i.xI("ZodVoid", (e, t) => {
          ;(f.WH.init(e, t), k.init(e, t), (e._zod.processJSONSchema = (t, n, a) => v.vn(e, t, n, a)))
        })
        function eb(e) {
          return g.OC(ex, e)
        }
        let ey = i.xI(
          "ZodArray",
          (e, t) => {
            ;(w(),
              f.$p.init(e, t),
              k.init(e, t),
              (e._zod.processJSONSchema = (t, n, a) => v.cY(e, t, n, a)),
              (e.element = t.element))
          },
          {
            min(e, t) {
              return this.check(g.m9(e, t))
            },
            nonempty(e) {
              return this.check(g.m9(1, e))
            },
            max(e, t) {
              return this.check(g.Eb(e, t))
            },
            length(e, t) {
              return this.check(g.YA(e, t))
            },
            unwrap() {
              return this.element
            },
          },
        )
        function ew(e, t) {
          return g.dZ(ey, e, t)
        }
        let ek = i.xI(
          "ZodObject",
          (e, t) => {
            ;(w(),
              f.w.init(e, t),
              k.init(e, t),
              (e._zod.processJSONSchema = (t, n, a) => v.Ec(e, t, n, a)),
              r.X(e, "shape", (e) => e._zod.def.shape, !1))
          },
          {
            keyof() {
              return eY(Object.keys(this._zod.def.shape))
            },
            catchall(e) {
              return this.clone(r.zM(this._zod.def, { catchall: e }))
            },
            passthrough() {
              return this.clone(r.zM(this._zod.def, { catchall: eh() }))
            },
            loose() {
              return this.clone(r.zM(this._zod.def, { catchall: eh() }))
            },
            strict() {
              return this.clone(r.zM(this._zod.def, { catchall: ev() }))
            },
            strip() {
              return this.clone(r.zM(this._zod.def, { catchall: void 0 }))
            },
            extend(e) {
              return r.X$(this, e)
            },
            safeExtend(e) {
              return r.W0(this, e)
            },
            merge(e) {
              return r.h1(this, e)
            },
            pick(e) {
              return r.Up(this, e)
            },
            omit(e) {
              return r.cJ(this, e)
            },
            partial(...e) {
              return r.OH(eF, this, e[0])
            },
            exactPartial(...e) {
              return r.OH(eW, this, e[0], "exactPartial")
            },
            required(...e) {
              return r.mw(eJ, this, e[0])
            },
          },
        )
        function e_(e, t) {
          return new ek({ type: "object", shape: e ?? {}, ...r.A2(t) })
        }
        function eP(e, t) {
          return new ek({ type: "object", shape: e, catchall: ev(), ...r.A2(t) })
        }
        function eI(e, t) {
          return new ek({ type: "object", shape: e, catchall: eh(), ...r.A2(t) })
        }
        let ej = i.xI("ZodUnion", (e, t) => {
          ;(f.cu.init(e, t),
            k.init(e, t),
            (e._zod.processJSONSchema = (t, n, a) => v.iC(e, t, n, a)),
            (e.options = t.options))
        })
        function eA(e, t) {
          return new ej({ type: "union", options: e, ...r.A2(t) })
        }
        let eS = i.xI("ZodDiscriminatedUnion", (e, t) => {
          ;(ej.init(e, t), f.P0.init(e, t))
        })
        function eO(e, t, n) {
          return new eS({ type: "union", options: t, discriminator: e, ...r.A2(n) })
        }
        let eE = i.xI("ZodIntersection", (e, t) => {
          ;(f.LJ.init(e, t), k.init(e, t), (e._zod.processJSONSchema = (t, n, a) => v.i_(e, t, n, a)))
        })
        function eT(e, t) {
          return new eE({ type: "intersection", left: e, right: t })
        }
        let ez = i.xI(
          "ZodTuple",
          (e, t) => {
            ;(w(), f.G3.init(e, t), k.init(e, t), (e._zod.processJSONSchema = (t, n, a) => v.CN(e, t, n, a)))
          },
          {
            rest(e) {
              return this.clone({ ...this._zod.def, rest: e })
            },
            partial() {
              let e = this._zod.def
              if (e.checks?.length) throw Error(".partial() cannot be used on tuple schemas containing refinements")
              return this.clone({ ...e, items: e.items.map((e) => new eF({ type: "optional", innerType: e })) })
            },
          },
        )
        function eC(e, t, n) {
          let a = t instanceof f.W4,
            i = a ? n : t
          return new ez({ type: "tuple", items: e, rest: a ? t : null, ...r.A2(i) })
        }
        let eR = i.xI("ZodRecord", (e, t) => {
          ;(w(),
            f.h.init(e, t),
            k.init(e, t),
            (e._zod.processJSONSchema = (t, n, a) => v.GC(e, t, n, a)),
            (e.keyType = t.keyType),
            (e.valueType = t.valueType))
        })
        function e$(e, t, n) {
          return new eR(
            t && t._zod
              ? { type: "record", keyType: e, valueType: t, ...r.A2(n) }
              : { type: "record", keyType: I(), valueType: e, ...r.A2(t) },
          )
        }
        let eM = i.xI("ZodEnum", (e, t) => {
          ;(f.VO.init(e, t),
            k.init(e, t),
            (e._zod.processJSONSchema = (t, n, a) => v.C0(e, t, n, a)),
            (e.enum = t.entries),
            (e.options = [...e._zod.values]))
          let n = new Set(Object.keys(t.entries))
          ;((e.extract = (e, a) => {
            let i = {}
            for (let a of e)
              if (n.has(a)) i[a] = t.entries[a]
              else throw Error(`Key ${a} not found in enum`)
            return new eM({ ...t, checks: [], ...r.A2(a), entries: i })
          }),
            (e.exclude = (e, a) => {
              let i = { ...t.entries }
              for (let t of e)
                if (n.has(t)) delete i[t]
                else throw Error(`Key ${t} not found in enum`)
              return new eM({ ...t, checks: [], ...r.A2(a), entries: i })
            }))
        })
        function eY(e, t) {
          return new eM({
            type: "enum",
            entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
            ...r.A2(t),
          })
        }
        let eD = i.xI("ZodLiteral", (e, t) => {
          ;(f.nu.init(e, t),
            k.init(e, t),
            (e._zod.processJSONSchema = (t, n, a) => v.Yv(e, t, n, a)),
            (e.values = new Set(t.values)),
            Object.defineProperty(e, "value", {
              get() {
                if (t.values.length > 1)
                  throw Error("This schema contains multiple valid literal values. Use `.values` instead.")
                return t.values[0]
              },
            }))
        })
        function eN(e, t) {
          return new eD({ type: "literal", values: Array.isArray(e) ? e : [e], ...r.A2(t) })
        }
        let eL = i.xI("ZodTransform", (e, t) => {
          ;(w(),
            f.Wc.init(e, t),
            k.init(e, t),
            (e._zod.processJSONSchema = (t, n, a) => v.xi(e, t, n, a)),
            (e._zod.parse = (n, a) => {
              if ("backward" === a.direction) throw new i.cV(e.constructor.name)
              n.addIssue = (a) => {
                "string" == typeof a
                  ? n.issues.push(r.sn(a, n.value, t))
                  : (a.fatal && (a.continue = !1),
                    a.code ?? (a.code = "custom"),
                    "input" in a || (a.input = n.value),
                    a.inst ?? (a.inst = e),
                    n.issues.push(r.sn(a)))
              }
              let o = t.transform(n.value, n)
              return o instanceof Promise ? o.then((e) => ((n.value = e), n)) : ((n.value = o), n)
            }))
        })
        function eU(e) {
          return new eL({ type: "transform", transform: e })
        }
        let eF = i.xI("ZodOptional", (e, t) => {
          ;(f.ig.init(e, t),
            k.init(e, t),
            (e._zod.processJSONSchema = (t, n, a) => v.$k(e, t, n, a)),
            (e.unwrap = () => e._zod.def.innerType))
        })
        function eq(e) {
          return new eF({ type: "optional", innerType: e })
        }
        let eW = i.xI("ZodExactOptional", (e, t) => {
            ;(f.RL.init(e, t),
              k.init(e, t),
              (e._zod.processJSONSchema = (t, n, a) => v.$k(e, t, n, a)),
              (e.unwrap = () => e._zod.def.innerType))
          }),
          eZ = i.xI("ZodNullable", (e, t) => {
            ;(f.qc.init(e, t),
              k.init(e, t),
              (e._zod.processJSONSchema = (t, n, a) => v.yq(e, t, n, a)),
              (e.unwrap = () => e._zod.def.innerType))
          })
        function eB(e) {
          return new eZ({ type: "nullable", innerType: e })
        }
        let eH = i.xI("ZodDefault", (e, t) => {
            ;(f.rv.init(e, t),
              k.init(e, t),
              (e._zod.processJSONSchema = (t, n, a) => v.mh(e, t, n, a)),
              (e.unwrap = () => e._zod.def.innerType),
              (e.removeDefault = e.unwrap))
          }),
          eK = i.xI("ZodPrefault", (e, t) => {
            ;(f.VF.init(e, t),
              k.init(e, t),
              (e._zod.processJSONSchema = (t, n, a) => v.A(e, t, n, a)),
              (e.unwrap = () => e._zod.def.innerType))
          }),
          eJ = i.xI("ZodNonOptional", (e, t) => {
            ;(f.N$.init(e, t),
              k.init(e, t),
              (e._zod.processJSONSchema = (t, n, a) => v.cR(e, t, n, a)),
              (e.unwrap = () => e._zod.def.innerType))
          }),
          eG = i.xI("ZodCatch", (e, t) => {
            ;(f.t$.init(e, t),
              k.init(e, t),
              (e._zod.processJSONSchema = (t, n, a) => v.Q9(e, t, n, a)),
              (e.unwrap = () => e._zod.def.innerType),
              (e.removeCatch = e.unwrap))
          }),
          eV = i.xI("ZodPipe", (e, t) => {
            ;(f._m.init(e, t),
              k.init(e, t),
              (e._zod.processJSONSchema = (t, n, a) => v.fs(e, t, n, a)),
              (e.in = t.in),
              (e.out = t.out))
          })
        function eQ(e, t) {
          return new eV({ type: "pipe", in: e, out: t })
        }
        let eX = i.xI("ZodPreprocess", (e, t) => {
            ;(eV.init(e, t), f.KX.init(e, t))
          }),
          e0 = i.xI("ZodReadonly", (e, t) => {
            ;(f.Sb.init(e, t),
              k.init(e, t),
              (e._zod.processJSONSchema = (t, n, a) => v.$X(e, t, n, a)),
              (e.unwrap = () => e._zod.def.innerType))
          }),
          e1 = i.xI("ZodTemplateLiteral", (e, t) => {
            ;(f.d.init(e, t), k.init(e, t), (e._zod.processJSONSchema = (t, n, a) => v.Cv(e, t, n, a)))
          })
        function e2(e, t) {
          return new e1({ type: "template_literal", parts: e, ...r.A2(t) })
        }
        let e3 = i.xI("ZodLazy", (e, t) => {
          ;(f.kU.init(e, t),
            k.init(e, t),
            (e._zod.processJSONSchema = (t, n, a) => v.Tr(e, t, n, a)),
            (e.unwrap = () => e._zod.def.getter()))
        })
        function e4(e) {
          return new e3({ type: "lazy", getter: e })
        }
        let e5 = i.xI("ZodPromise", (e, t) => {
          ;(f.hA.init(e, t),
            k.init(e, t),
            (e._zod.processJSONSchema = (t, n, a) => v.CX(e, t, n, a)),
            (e.unwrap = () => e._zod.def.innerType))
        })
        function e6(e) {
          return new e5({ type: "promise", innerType: e })
        }
        let e9 = i.xI("ZodFunction", (e, t) => {
          ;(f._A.init(e, t), k.init(e, t), (e._zod.processJSONSchema = (t, n, a) => v.bq(e, t, n, a)))
        })
        function e8(e) {
          return new e9({
            type: "function",
            input: Array.isArray(e?.input) ? eC(e?.input) : (e?.input ?? ew(eh())),
            output: e?.output ?? eh(),
          })
        }
        let e7 = i.xI("ZodCustom", (e, t) => {
          ;(f.b0.init(e, t), k.init(e, t), (e._zod.processJSONSchema = (t, n, a) => v.A6(e, t, n, a)))
        })
        function te(e, t) {
          return g.FO(e7, e ?? (() => !0), t)
        }
        ;(g.q0, g.mI)
        let tt = i.xI(
          "ZodInstanceOf",
          (e, t) => {
            e7.init(e, t)
          },
          {
            properties(e, t) {
              return this.check(g.T2(e, t))
            },
          },
        )
        function tn(e, t = {}) {
          let n = new tt({ type: "custom", check: "custom", fn: (t) => t instanceof e, abort: !0, ...r.A2(t) })
          return (
            (n._zod.bag.Class = e),
            (n._zod.check = (t) => {
              t.value instanceof e ||
                t.issues.push({
                  code: "invalid_type",
                  expected: e.name,
                  input: t.value,
                  inst: n,
                  path: [...(n._zod.def.path ?? [])],
                })
            }),
            n
          )
        }
        function ta(e) {
          let t = e4(() => eA([I(e), ea(), es(), eu(), ew(t), e$(I(), t)]))
          return t
        }
        function ti(e, t) {
          return new eX({ type: "pipe", in: eU(e), out: t })
        }
      },
      69580(e, t, n) {
        "use strict"
        var a = n(17691),
          i = n(79105),
          r = n(43578)
        function o(e) {
          return (e.checks && (e.checks = [...e.checks]), e)
        }
        function s(e) {
          return new a.v$({ check: "overwrite", tx: e })
        }
        n.d(
          t,
          {},
          {
            $O: function (e, t) {
              return new e({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...r.A2(t) })
            },
            $S: function (e, t) {
              return new a.J({ check: "string_format", format: "starts_with", ...r.A2(t), prefix: e })
            },
            Au: function (e, t) {
              return new a.sm({ check: "less_than", ...r.A2(t), value: e, inclusive: !1 })
            },
            Be: function (e, t) {
              return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, ...r.A2(t) })
            },
            Bj: function (e, t) {
              return new e({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...r.A2(t) })
            },
            Ct: function (e, t) {
              return new e({ type: "string", format: "ulid", check: "string_format", abort: !1, ...r.A2(t) })
            },
            Dl: function (e, t) {
              return new e({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...r.A2(t) })
            },
            E4: function (e, t) {
              return new e({ type: "undefined", ...r.A2(t) })
            },
            ER: function (e, t) {
              return new a.E6({ check: "string_format", format: "ends_with", ...r.A2(t), suffix: e })
            },
            Eb: function (e, t) {
              return new a.Yk({ check: "max_length", ...r.A2(t), maximum: e })
            },
            F7: function (e, t) {
              return new e(o({ type: "number", checks: [], ...r.A2(t) }))
            },
            FO: function (e, t, n) {
              let a = r.A2(n)
              return (a.abort ?? (a.abort = !0), new e({ type: "custom", check: "custom", fn: t, ...a }))
            },
            Fk: function (e, t) {
              return new a.DG({ check: "string_format", format: "regex", ...r.A2(t), pattern: e })
            },
            Fn: function (e, t) {
              return new e({ type: "string", format: "url", check: "string_format", abort: !1, ...r.A2(t) })
            },
            G1: function (e, t) {
              return new e({
                type: "string",
                format: "datetime",
                check: "string_format",
                offset: !1,
                local: !1,
                precision: null,
                ...r.A2(t),
              })
            },
            G8: function (e, t) {
              return new e({ type: "never", ...r.A2(t) })
            },
            Hi: function (e, t) {
              return new a.Jk({ check: "multiple_of", ...r.A2(t), value: e })
            },
            Il: function () {
              return s((e) => e.toLowerCase())
            },
            KA: function (e) {
              return new e({ type: "any" })
            },
            KB: function (e, t) {
              return new e({ type: "string", format: "e164", check: "string_format", abort: !1, ...r.A2(t) })
            },
            K_: function (e, t) {
              return new e(o({ type: "string", coerce: !0, ...r.A2(t) }))
            },
            Kn: function (e, t) {
              return new e({ type: "string", format: "time", check: "string_format", precision: null, ...r.A2(t) })
            },
            LK: function (e, t) {
              return new e({ type: "number", check: "number_format", abort: !1, format: "safeint", ...r.A2(t) })
            },
            MB: function (e, t) {
              var n, i
              let o,
                s =
                  ((n = (t) => (
                    (t.addIssue = (e) => {
                      "string" == typeof e
                        ? t.issues.push(r.sn(e, t.value, s._zod.def))
                        : (e.fatal && (e.continue = !1),
                          e.code ?? (e.code = "custom"),
                          "input" in e || (e.input = t.value),
                          e.inst ?? (e.inst = s),
                          e.continue ?? (e.continue = !s._zod.def.abort),
                          t.issues.push(r.sn(e)))
                    }),
                    e(t.value, t)
                  )),
                  (i = t),
                  ((o = new a.QP({ check: "custom", ...r.A2(i) }))._zod.check = n),
                  o)
              return s
            },
            Mu: function (e, t) {
              return new e({ type: "string", format: "email", check: "string_format", abort: !1, ...r.A2(t) })
            },
            Ny: function (e, t) {
              return new e({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...r.A2(t) })
            },
            OC: function (e, t) {
              return new e({ type: "void", ...r.A2(t) })
            },
            Pw: function (e, t) {
              return new e({ type: "string", format: "xid", check: "string_format", abort: !1, ...r.A2(t) })
            },
            Rl: function (e, t) {
              return new e(o({ type: "string", ...r.A2(t) }))
            },
            T2: function (e, t) {
              return new a.nJ({ check: "properties", shape: e, ...r.A2(t) })
            },
            TL: function () {
              return s((e) => r.Yv(e))
            },
            Tx: function (e, t) {
              return new a.J_({ check: "greater_than", ...r.A2(t), value: e, inclusive: !1 })
            },
            Uy: function (e, t) {
              return new e({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...r.A2(t) })
            },
            WN: function () {
              return s((e) => e.trim())
            },
            YA: function (e, t) {
              return new a.RM({ check: "length_equals", ...r.A2(t), length: e })
            },
            Zm: function (e, t) {
              return new a.sm({ check: "less_than", ...r.A2(t), value: e, inclusive: !0 })
            },
            _L: function (e, t) {
              return new e({ type: "boolean", ...r.A2(t) })
            },
            _z: function (e, t) {
              return new e({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...r.A2(t) })
            },
            aC: function (e, t) {
              return new e({ type: "string", format: "emoji", check: "string_format", abort: !1, ...r.A2(t) })
            },
            bS: s,
            cU: function (e, t) {
              return new e({ type: "string", format: "base64url", check: "string_format", abort: !1, ...r.A2(t) })
            },
            dR: function (e, t) {
              return new a.Tt({ check: "string_format", format: "includes", ...r.A2(t), includes: e })
            },
            dZ: function (e, t, n) {
              return new e({ type: "array", element: t, ...r.A2(n) })
            },
            db: function (e, t) {
              return new e({ type: "string", format: "date", check: "string_format", ...r.A2(t) })
            },
            em: function (e) {
              return new e({ type: "unknown" })
            },
            f2: function (e, t) {
              return new e({ type: "string", format: "duration", check: "string_format", ...r.A2(t) })
            },
            fU: function (e, t, n) {
              return new e({ type: "custom", check: "custom", fn: t, ...r.A2(n) })
            },
            fs: function (e, t) {
              return new e({ type: "string", format: "cuid", check: "string_format", abort: !1, ...r.A2(t) })
            },
            gP: function (e, t) {
              return new e({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...r.A2(t) })
            },
            hH: function (e) {
              return new a.NI({ check: "string_format", format: "lowercase", ...r.A2(e) })
            },
            jw: function (e, t) {
              return new e({ type: "null", ...r.A2(t) })
            },
            lo: function (e) {
              return s((t) => t.normalize(e))
            },
            m9: function (e, t) {
              return new a.Kk({ check: "min_length", ...r.A2(t), minimum: e })
            },
            mI: function (e) {
              let t = new a.QP({ check: "meta" })
              return (
                (t._zod.onattach = [
                  (t) => {
                    let n = i.fd.get(t) ?? {}
                    i.fd.add(t, { ...n, ...e })
                  },
                ]),
                (t._zod.check = () => {}),
                t
              )
            },
            nA: function (e, t) {
              return new e({
                type: "string",
                format: "uuid",
                check: "string_format",
                abort: !1,
                version: "v4",
                ...r.A2(t),
              })
            },
            pY: function (e, t) {
              return new e({
                type: "string",
                format: "uuid",
                check: "string_format",
                abort: !1,
                version: "v6",
                ...r.A2(t),
              })
            },
            q0: function (e) {
              let t = new a.QP({ check: "describe" })
              return (
                (t._zod.onattach = [
                  (t) => {
                    let n = i.fd.get(t) ?? {}
                    i.fd.add(t, { ...n, description: e })
                  },
                ]),
                (t._zod.check = () => {}),
                t
              )
            },
            qF: function (e) {
              return new a.kH({ check: "string_format", format: "uppercase", ...r.A2(e) })
            },
            qG: function (e, t) {
              return new e(o({ type: "number", coerce: !0, checks: [], ...r.A2(t) }))
            },
            qm: function (e, t) {
              return new a.J_({ check: "greater_than", ...r.A2(t), value: e, inclusive: !0 })
            },
            rk: function (e, t) {
              return new e({ type: "string", format: "jwt", check: "string_format", abort: !1, ...r.A2(t) })
            },
            rt: function (e, t) {
              return new e({ type: "string", format: "base64", check: "string_format", abort: !1, ...r.A2(t) })
            },
            tB: function (e, t) {
              return new e({ type: "string", format: "guid", check: "string_format", abort: !1, ...r.A2(t) })
            },
            wA: function (e, t) {
              return new e({
                type: "string",
                format: "uuid",
                check: "string_format",
                abort: !1,
                version: "v7",
                ...r.A2(t),
              })
            },
            xY: function () {
              return s((e) => e.toUpperCase())
            },
          },
        )
      },
      17691(e, t, n) {
        "use strict"
        var a = n(23065),
          i = n(91947),
          r = n(43578)
        let o = a.xI("$ZodCheck", (e, t) => {
            var n
            ;(e._zod ?? (e._zod = {}), (e._zod.def = t), (n = e._zod).onattach ?? (n.onattach = []))
          }),
          s = (e) => {
            let t = e.value
            return !r.cl(t) && void 0 !== t.length
          },
          l = { number: "number", bigint: "bigint", object: "date" },
          c = a.xI("$ZodCheckLessThan", (e, t) => {
            o.init(e, t)
            let n = l[typeof t.value]
            e._zod.check = (a) => {
              ;(t.inclusive ? a.value <= t.value : a.value < t.value) ||
                a.issues.push({
                  origin: l[typeof a.value] ?? n,
                  code: "too_big",
                  maximum: "object" == typeof t.value ? t.value.getTime() : t.value,
                  input: a.value,
                  inclusive: t.inclusive,
                  inst: e,
                  continue: !t.abort,
                })
            }
          }),
          p = a.xI("$ZodCheckGreaterThan", (e, t) => {
            o.init(e, t)
            let n = l[typeof t.value]
            e._zod.check = (a) => {
              ;(t.inclusive ? a.value >= t.value : a.value > t.value) ||
                a.issues.push({
                  origin: l[typeof a.value] ?? n,
                  code: "too_small",
                  minimum: "object" == typeof t.value ? t.value.getTime() : t.value,
                  input: a.value,
                  inclusive: t.inclusive,
                  inst: e,
                  continue: !t.abort,
                })
            }
          }),
          u = a.xI("$ZodCheckMultipleOf", (e, t) => {
            ;(o.init(e, t),
              (e._zod.check = (n) => {
                if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.")
                ;("bigint" == typeof n.value
                  ? t.value !== BigInt(0) && n.value % t.value === BigInt(0)
                  : 0 === r.LG(n.value, t.value)) ||
                  n.issues.push({
                    origin: typeof n.value,
                    code: "not_multiple_of",
                    divisor: t.value,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                  })
              }))
          }),
          d = a.xI("$ZodCheckNumberFormat", (e, t) => {
            ;(o.init(e, t), (t.format = t.format || "float64"))
            let n = t.format?.includes("int"),
              a = n ? "int" : "number",
              [i, s] = r.zH[t.format]
            e._zod.check = (r) => {
              let o = r.value
              if (n) {
                if (!Number.isInteger(o))
                  return void r.issues.push({
                    expected: a,
                    format: t.format,
                    code: "invalid_type",
                    continue: !1,
                    input: o,
                    inst: e,
                  })
                if (!Number.isSafeInteger(o))
                  return void (o > 0
                    ? r.issues.push({
                        input: o,
                        code: "too_big",
                        maximum: Number.MAX_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst: e,
                        origin: a,
                        inclusive: !0,
                        continue: !t.abort,
                      })
                    : r.issues.push({
                        input: o,
                        code: "too_small",
                        minimum: Number.MIN_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst: e,
                        origin: a,
                        inclusive: !0,
                        continue: !t.abort,
                      }))
              }
              ;(o < i &&
                r.issues.push({
                  origin: "number",
                  input: o,
                  code: "too_small",
                  minimum: i,
                  inclusive: !0,
                  inst: e,
                  continue: !t.abort,
                }),
                o > s &&
                  r.issues.push({
                    origin: "number",
                    input: o,
                    code: "too_big",
                    maximum: s,
                    inclusive: !0,
                    inst: e,
                    continue: !t.abort,
                  }))
            }
          }),
          m = a.xI("$ZodCheckMaxLength", (e, t) => {
            var n
            ;(o.init(e, t),
              (n = e._zod.def).when ?? (n.when = s),
              (e._zod.check = (n) => {
                let a = n.value,
                  i = a.length
                if (("string" == typeof a && i > t.maximum ? r.O7(a) : i) <= t.maximum) return
                let o = r.Rc(a)
                n.issues.push({
                  origin: o,
                  code: "too_big",
                  maximum: t.maximum,
                  inclusive: !0,
                  input: a,
                  inst: e,
                  continue: !t.abort,
                })
              }))
          }),
          f = a.xI("$ZodCheckMinLength", (e, t) => {
            var n
            ;(o.init(e, t),
              (n = e._zod.def).when ?? (n.when = s),
              (e._zod.check = (n) => {
                let a = n.value,
                  i = a.length
                if (("string" == typeof a && i >= t.minimum && i < 2 * t.minimum ? r.O7(a) : i) >= t.minimum) return
                let o = r.Rc(a)
                n.issues.push({
                  origin: o,
                  code: "too_small",
                  minimum: t.minimum,
                  inclusive: !0,
                  input: a,
                  inst: e,
                  continue: !t.abort,
                })
              }))
          }),
          h = a.xI("$ZodCheckLengthEquals", (e, t) => {
            var n
            ;(o.init(e, t),
              (n = e._zod.def).when ?? (n.when = s),
              (e._zod.check = (n) => {
                let a = n.value,
                  i = a.length,
                  o = "string" == typeof a && i >= t.length && i <= 2 * t.length ? r.O7(a) : i
                if (o === t.length) return
                let s = r.Rc(a),
                  l = o > t.length
                n.issues.push({
                  origin: s,
                  ...(l ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length }),
                  inclusive: !0,
                  exact: !0,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                })
              }))
          }),
          g = a.xI("$ZodCheckStringFormat", (e, t) => {
            var n, a
            ;(o.init(e, t),
              t.pattern
                ? ((n = e._zod).check ??
                  (n.check = (n) => {
                    ;((t.pattern.lastIndex = 0),
                      t.pattern.test(n.value) ||
                        n.issues.push({
                          origin: "string",
                          code: "invalid_format",
                          format: t.format,
                          input: n.value,
                          ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                          inst: e,
                          continue: !t.abort,
                        }))
                  }))
                : ((a = e._zod).check ?? (a.check = () => {})))
          }),
          v = a.xI("$ZodCheckRegex", (e, t) => {
            ;(g.init(e, t),
              (e._zod.check = (n) => {
                ;((t.pattern.lastIndex = 0),
                  t.pattern.test(n.value) ||
                    n.issues.push({
                      origin: "string",
                      code: "invalid_format",
                      format: "regex",
                      input: n.value,
                      pattern: t.pattern.toString(),
                      inst: e,
                      continue: !t.abort,
                    }))
              }))
          }),
          x = a.xI("$ZodCheckLowerCase", (e, t) => {
            ;(t.pattern ?? (t.pattern = i.AC), g.init(e, t))
          }),
          b = a.xI("$ZodCheckUpperCase", (e, t) => {
            ;(t.pattern ?? (t.pattern = i.Zv), g.init(e, t))
          }),
          y = a.xI("$ZodCheckIncludes", (e, t) => {
            o.init(e, t)
            let n = r.sD(t.includes),
              a = new RegExp("number" == typeof t.position ? `^.{${t.position},}${n}` : n)
            ;((t.pattern = a),
              (e._zod.check = (n) => {
                n.value.includes(t.includes, t.position) ||
                  n.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: "includes",
                    includes: t.includes,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                  })
              }))
          }),
          w = a.xI("$ZodCheckStartsWith", (e, t) => {
            o.init(e, t)
            let n = RegExp(`^${r.sD(t.prefix)}.*`)
            ;(t.pattern ?? (t.pattern = n),
              (e._zod.check = (n) => {
                n.value.startsWith(t.prefix) ||
                  n.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: "starts_with",
                    prefix: t.prefix,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                  })
              }))
          }),
          k = a.xI("$ZodCheckEndsWith", (e, t) => {
            o.init(e, t)
            let n = RegExp(`.*${r.sD(t.suffix)}$`)
            ;(t.pattern ?? (t.pattern = n),
              (e._zod.check = (n) => {
                n.value.endsWith(t.suffix) ||
                  n.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: "ends_with",
                    suffix: t.suffix,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                  })
              }))
          })
        function _(e, t, n) {
          e.issues.length && t.issues.push(...r.lQ(n, e.issues))
        }
        let P = a.xI("$ZodCheckProperties", (e, t) => {
            let n
            ;(o.init(e, t),
              r.jD(e, Symbol.iterator, function* () {
                yield e
              }),
              (e._zod.check = (a) => {
                let i
                if (null == a.value)
                  return void a.issues.push({ expected: "object", code: "invalid_type", input: a.value, inst: e })
                n ?? (n = Reflect.ownKeys(t.shape).map((e) => [e, t.shape[e]]))
                let r = a.value
                for (let [e, t] of n) {
                  let n = t._zod.run({ value: r[e], issues: [] }, {})
                  n instanceof Promise ? (i ?? (i = []), i.push(n.then((t) => _(t, a, e)))) : _(n, a, e)
                }
                if (i) return Promise.all(i).then(() => void 0)
              }))
          }),
          I = a.xI("$ZodCheckOverwrite", (e, t) => {
            ;(o.init(e, t),
              (e._zod.check = (e) => {
                e.value = t.tx(e.value)
              }))
          })
        n.d(
          t,
          {},
          {
            DG: v,
            E6: k,
            J: w,
            J_: p,
            Jk: u,
            KH: d,
            Kk: f,
            NI: x,
            QP: o,
            RM: h,
            Tt: y,
            Yk: m,
            kH: b,
            nJ: P,
            ql: g,
            sm: c,
            v$: I,
          },
        )
      },
      23065(e, t, n) {
        "use strict"
        n.d(t, { $W: () => d, GT: () => c, cV: () => p, cr: () => u, tm: () => r, xI: () => l })
        var a,
          i = n(43578)
        let r = Object.freeze({ status: "aborted" }),
          o = { value: void 0, enumerable: !1 },
          s = "captureStackTrace" in Error ? Error : null
        function l(e, t, n, a) {
          function r(e) {
            ;((this.def = e), (this.constr = d), (this.traits = new Set()))
          }
          r.prototype = {}
          let l = n && new WeakSet()
          function c(a, s) {
            if (a._zod) {
              if (a._zod.traits.has(e)) return
            } else {
              o.value = new r(s)
              try {
                Object.defineProperty(a, "_zod", o)
              } finally {
                o.value = void 0
              }
            }
            if ((a._zod.traits.add(e), t(a, s), l)) {
              let e = Object.getPrototypeOf(a),
                t = a._zod.constr.prototype,
                r = e
              for (; r && r !== t;) r = Object.getPrototypeOf(r)
              let o = r ?? e
              l.has(o) || (l.add(o), (0, i.ol)(o, n))
            }
            let c = d.prototype
            for (let e in c) Object.prototype.hasOwnProperty.call(c, e) && (e in a || (a[e] = c[e].bind(a)))
          }
          let p = a?.Parent ?? Object
          class u extends p {}
          function d(e) {
            let t = a?.Parent
              ? (function (e) {
                  let t = s
                  if (t) {
                    let n = t.stackTraceLimit
                    if ("number" == typeof n) {
                      try {
                        t.stackTraceLimit = 0
                      } catch {
                        return ((s = null), new e())
                      }
                      try {
                        return new e()
                      } finally {
                        t.stackTraceLimit = n
                      }
                    }
                  }
                  return new e()
                })(u)
              : this
            c(t, e)
            let n = t._zod.deferred
            if (n) {
              for (let e of n) e()
              t._zod.deferred = void 0
            }
            let i = globalThis.__zod_globalConfig?.postProcessor
            return (i && i(t), t)
          }
          return (
            Object.defineProperty(u, "name", { value: e }),
            Object.defineProperty(d, "init", { value: c }),
            Object.defineProperty(d, Symbol.hasInstance, {
              value: (t) => (!!a?.Parent && t instanceof a.Parent) || t?._zod?.traits?.has(e),
            }),
            Object.defineProperty(d, "name", { value: e }),
            d
          )
        }
        class c extends Error {
          constructor() {
            super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")
          }
        }
        class p extends Error {
          constructor(e) {
            ;(super(`Encountered unidirectional transform during encode: ${e}`), (this.name = "ZodEncodeError"))
          }
        }
        ;(a = globalThis).__zod_globalConfig ?? (a.__zod_globalConfig = {})
        let u = globalThis.__zod_globalConfig
        function d(e) {
          return (e && Object.assign(u, e), u)
        }
      },
      22433(e, t, n) {
        "use strict"
        var a = n(23065),
          i = n(43578)
        let r = {
            get: function () {
              let e = this._zod
              return (e.message ?? (e.message = JSON.stringify(e.def, i.k8, 2)), e.message)
            },
            set: function (e) {
              this._zod.message = e
            },
            enumerable: !0,
            configurable: !0,
          },
          o = { value: void 0, enumerable: !1 },
          s = new WeakSet([Object.prototype, Error.prototype]),
          l = (e, t) => {
            ;((e.name = "$ZodError"),
              (o.value = t),
              Object.defineProperty(e, "issues", o),
              (o.value = void 0),
              Object.defineProperty(e, "message", r))
            let n = Object.getPrototypeOf(e)
            s.has(n) ||
              (s.add(n),
              Object.defineProperty(n, "toString", {
                configurable: !0,
                enumerable: !1,
                get() {
                  let e = () => this.message
                  return (Object.defineProperty(this, "toString", { value: e, configurable: !0, writable: !0 }), e)
                },
                set(e) {
                  Object.defineProperty(this, "toString", { value: e, configurable: !0, writable: !0 })
                },
              }))
          },
          c = (0, a.xI)("$ZodError", l),
          p = (0, a.xI)("$ZodError", l, void 0, { Parent: Error })
        n.d(
          t,
          {},
          {
            JM: function (e, t = (e) => e.message) {
              let n = {},
                a = []
              for (let o of e.issues)
                if (o.path.length > 0) {
                  var i, r
                  ;((i = o.path[0]),
                  (r = () => []),
                  !Object.prototype.hasOwnProperty.call(n, i) &&
                    ("__proto__" === i
                      ? Object.defineProperty(n, i, { value: r(), writable: !0, enumerable: !0, configurable: !0 })
                      : (n[i] = r())),
                  n[i]).push(t(o))
                } else a.push(t(o))
              return { formErrors: a, fieldErrors: n }
            },
            Kd: p,
            Wk: function (e, t = (e) => e.message) {
              let n = { _errors: [] },
                a = (e, i = []) => {
                  for (let r of e.issues)
                    if ("invalid_union" === r.code && r.errors.length)
                      r.errors.map((e) => a({ issues: e }, [...i, ...r.path]))
                    else if ("invalid_key" === r.code) a({ issues: r.issues }, [...i, ...r.path])
                    else if ("invalid_element" === r.code) a({ issues: r.issues }, [...i, ...r.path])
                    else {
                      let e = [...i, ...r.path]
                      if (0 === e.length) n._errors.push(t(r))
                      else {
                        let a = n,
                          i = 0
                        for (; i < e.length;) {
                          let n = e[i],
                            o = i === e.length - 1
                          if ("_errors" === n) {
                            ;(o && a._errors.push(t(r)), i++)
                            continue
                          }
                          Object.prototype.hasOwnProperty.call(a, n) ||
                            Object.defineProperty(a, n, {
                              value: { _errors: [] },
                              enumerable: !0,
                              writable: !0,
                              configurable: !0,
                            })
                          let s = a[n]
                          ;(o && s._errors.push(t(r)), (a = s), i++)
                        }
                      }
                    }
                }
              return (a(e), n)
            },
            a$: c,
          },
        )
      },
      69150(e, t, n) {
        "use strict"
        var a = n(91947),
          i = n(69274),
          r = n(78468),
          o = n(43578)
        let s = (e, t, n) => {
            ;(void 0 === e[t] || n > e[t]) && (e[t] = n)
          },
          l = (e, t, n) => {
            ;(void 0 === e[t] || n < e[t]) && (e[t] = n)
          },
          c = (e, t) => {
            ;(s(e, "minimum", t), l(e, "maximum", t))
          },
          p = (e, t) => {
            ;(e.multipleOf ?? (e.multipleOf = []), e.multipleOf.includes(t) || e.multipleOf.push(t))
          },
          u = (e, t) => {
            ;(e.patterns ?? (e.patterns = new Set()), e.patterns.add(t))
          },
          d = (e, t) => {
            e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t]
          },
          m = (e, t) => {
            ;((e.format = t), t.includes("int") && (e.isInt = !0))
          },
          f = (e, t) => s(e, "minimum", t.minimum),
          h = (e, t) => l(e, "maximum", t.maximum),
          g = (e) => (t, n) => {
            m(t, n.format)
            let [a, i] = e[n.format]
            ;(s(t, "minimum", a), l(t, "maximum", i))
          },
          v = {
            greater_than: (e, t) => s(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
            less_than: (e, t) => l(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
            multiple_of: (e, t) => p(e, t.value),
            number_format: g(o.zH),
            bigint_format: g(o.NR),
            min_length: f,
            max_length: h,
            length_equals: (e, t) => c(e, t.length),
            min_size: f,
            max_size: h,
            size_equals: (e, t) => c(e, t.size),
            string_format: (e, t) => {
              ;(m(e, t.format),
                t.pattern && u(e, t.pattern),
                ("base64" === t.format || "base64url" === t.format) && (e.contentEncoding = t.format),
                (t.local || -1 === t.precision) && (e.laxFormat = !0))
            },
            mime_type: (e, t) => d(e, t.mime),
          }
        function x(e) {
          let t = {},
            n = e._zod.def
          for (let a of e._zod.traits.has("$ZodCheck") ? [e, ...(n.checks ?? [])] : (n.checks ?? []))
            v[a._zod.def.check]?.(t, a._zod.def)
          let a = e._zod.bag
          for (let e of (void 0 !== a.minimum && s(t, "minimum", a.minimum),
          void 0 !== a.exclusiveMinimum && s(t, "exclusiveMinimum", a.exclusiveMinimum),
          void 0 !== a.maximum && l(t, "maximum", a.maximum),
          void 0 !== a.exclusiveMaximum && l(t, "exclusiveMaximum", a.exclusiveMaximum),
          void 0 !== a.multipleOf && p(t, a.multipleOf),
          void 0 !== a.format && (t.format ?? (t.format = a.format), a.format.includes("int") && (t.isInt = !0)),
          a.mime && d(t, a.mime),
          a.patterns ?? []))
            u(t, e)
          return t
        }
        let b = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" },
          y = new Map([
            [i.cq, a.K3],
            [i.xE, a.r0],
          ]),
          w = (e) => y.get(e) ?? e,
          k = (e, t, n, a) => {
            n.type = "string"
            let { minimum: i, maximum: r, format: o, patterns: s, contentEncoding: l, laxFormat: c } = x(e)
            if (
              ("number" == typeof i && (n.minLength = i),
              "number" == typeof r && (n.maxLength = r),
              o && ((n.format = b[o] ?? o), "" === n.format && delete n.format, ("time" === o || c) && delete n.format),
              l && (n.contentEncoding = l),
              s && s.size > 0)
            ) {
              let e = [...s].map(w)
              1 === e.length
                ? (n.pattern = e[0].source)
                : e.length > 1 &&
                  (n.allOf = [
                    ...e.map((e) => ({
                      ...("draft-07" === t.target || "draft-04" === t.target || "openapi-3.0" === t.target
                        ? { type: "string" }
                        : {}),
                      pattern: e.source,
                    })),
                  ])
            }
          },
          _ = (e, t, n, a) => {
            let { minimum: i, maximum: o, multipleOf: s, exclusiveMaximum: l, exclusiveMinimum: c, isInt: p } = x(e)
            n.type = p ? "integer" : "number"
            let u = "number" == typeof c && c >= (i ?? -1 / 0),
              d = "number" == typeof l && l <= (o ?? 1 / 0),
              m = "draft-04" === t.target || "openapi-3.0" === t.target
            if (
              (u
                ? m
                  ? ((n.minimum = c), (n.exclusiveMinimum = !0))
                  : (n.exclusiveMinimum = c)
                : "number" == typeof i && (n.minimum = i),
              d
                ? m
                  ? ((n.maximum = l), (n.exclusiveMaximum = !0))
                  : (n.exclusiveMaximum = l)
                : "number" == typeof o && (n.maximum = o),
              s)
            ) {
              let i = new Set()
              for (let o of s)
                Number.isFinite(o) && 0 !== o
                  ? i.add(Math.abs(o))
                  : (0, r._S)(e, t, n, a, `A multipleOf divisor of ${o} cannot be represented in JSON Schema`)
              let [o, ...l] = i
              ;(void 0 !== o && (n.multipleOf = o),
                l.length && (n.allOf = [...(n.allOf ?? []), ...l.map((e) => ({ multipleOf: e }))]))
            }
          },
          P = (e, t, n, a) => {
            n.type = "boolean"
          },
          I = (e, t, n, a) => {
            "openapi-3.0" === t.target ? ((n.type = "string"), (n.nullable = !0), (n.enum = [null])) : (n.type = "null")
          },
          j = (e, t, n, a) => {
            ;(0, r._S)(e, t, n, a, "Undefined cannot be represented in JSON Schema")
          },
          A = (e, t, n, a) => {
            ;(0, r._S)(e, t, n, a, "Void cannot be represented in JSON Schema")
          },
          S = (e, t, n, a) => {
            n.not = {}
          },
          O = (e, t, n, a) => {},
          E = (e, t, n, a) => {},
          T = (e, t, n, a) => {
            let i = e._zod.def,
              r = (0, o.w5)(i.entries)
            if (0 === r.length) {
              n.not = {}
              return
            }
            ;(r.every((e) => "number" == typeof e) && (n.type = "number"),
              r.every((e) => "string" == typeof e) && (n.type = "string"),
              (n.enum = r))
          },
          z = (e, t, n, a) => {
            let i = e._zod.def
            if (0 === i.values.length) {
              n.not = {}
              return
            }
            let o = []
            for (let s of i.values)
              if (void 0 === s) {
                if ((0, r._S)(e, t, n, a, "Literal `undefined` cannot be represented in JSON Schema")) return
              } else if ("bigint" == typeof s) {
                if ((0, r._S)(e, t, n, a, "BigInt literals cannot be represented in JSON Schema")) return
                o.push(Number(s))
              } else o.push(s)
            if (0 === o.length);
            else if (1 === o.length) {
              let e = o[0]
              ;((n.type = null === e ? "null" : typeof e),
                "draft-04" === t.target || "openapi-3.0" === t.target ? (n.enum = [e]) : (n.const = e))
            } else
              (o.every((e) => "number" == typeof e) && (n.type = "number"),
                o.every((e) => "string" == typeof e) && (n.type = "string"),
                o.every((e) => "boolean" == typeof e) && (n.type = "boolean"),
                o.every((e) => null === e) && (n.type = "null"),
                (n.enum = o))
          },
          C = (e, t, n, a) => {
            let i = e._zod.pattern
            if (!i) throw Error("Pattern not found in template literal")
            ;((n.type = "string"), (n.pattern = i.source))
          },
          R = (e, t, n, a) => {
            ;(0, r._S)(e, t, n, a, "Custom types cannot be represented in JSON Schema")
          },
          $ = (e, t, n, a) => {
            ;(0, r._S)(e, t, n, a, "Function types cannot be represented in JSON Schema")
          },
          M = (e, t, n, a) => {
            ;(0, r._S)(e, t, n, a, "Transforms cannot be represented in JSON Schema")
          },
          Y = (e, t, n, a) => {
            let i = e._zod.def,
              { minimum: o, maximum: s } = x(e)
            ;("number" == typeof o && (n.minItems = o),
              "number" == typeof s && (n.maxItems = s),
              (n.type = "array"),
              (n.items = (0, r.Lp)(i.element, t, { ...a, path: [...a.path, "items"] })))
          }
        function D(e) {
          let t = e._zod.def
          return "pipe" === t.type && t.in._zod.traits.has("$ZodTransform")
            ? D(t.out)
            : "catch" === t.type
              ? D(t.innerType)
              : e._zod.optin
        }
        let N = (e, t, n, a) => {
            let i = e._zod.def,
              s = i.shape
            if (
              Object.getOwnPropertySymbols(s).length &&
              (0, r._S)(e, t, n, a, "Symbol keys cannot be represented in JSON Schema")
            )
              return
            for (let e in ((n.type = "object"), (n.properties = {}), s))
              (0, o.Vy)(n.properties, e, (0, r.Lp)(s[e], t, { ...a, path: [...a.path, "properties", e] }))
            let l = []
            for (let e of Object.keys(s)) {
              let n = i.shape[e]
              ;("input" === t.io ? void 0 === D(n) : void 0 === n._zod.optout) && l.push(e)
            }
            ;(l.length > 0 && (n.required = l),
              i.catchall?._zod.def.type === "never"
                ? (n.additionalProperties = !1)
                : i.catchall
                  ? i.catchall &&
                    (n.additionalProperties = (0, r.Lp)(i.catchall, t, {
                      ...a,
                      path: [...a.path, "additionalProperties"],
                    }))
                  : "output" === t.io && (n.additionalProperties = !1))
          },
          L = (e, t, n, a) => {
            let i = e._zod.def,
              o = !1 === i.inclusive,
              s = i.options.map((e, n) => (0, r.Lp)(e, t, { ...a, path: [...a.path, o ? "oneOf" : "anyOf", n] }))
            o ? (n.oneOf = s) : (n.anyOf = s)
          },
          U = (e, t, n, a) => {
            let i = e._zod.def,
              o = (0, r.Lp)(i.left, t, { ...a, path: [...a.path, "allOf", 0] }),
              s = (0, r.Lp)(i.right, t, { ...a, path: [...a.path, "allOf", 1] }),
              l = (e) => "allOf" in e && 1 === Object.keys(e).length,
              c = [...(l(o) ? o.allOf : [o]), ...(l(s) ? s.allOf : [s])]
            ;((n.allOf = c), t.intersections.push(c))
          },
          F = (e, t, n, a) => {
            let i = e._zod.def
            n.type = "array"
            let o = "draft-2020-12" === t.target ? "prefixItems" : "items",
              s = "draft-2020-12" === t.target || "openapi-3.0" === t.target ? "items" : "additionalItems",
              l = i.items.map((e, n) => (0, r.Lp)(e, t, { ...a, path: [...a.path, o, n] })),
              c = i.rest
                ? (0, r.Lp)(i.rest, t, {
                    ...a,
                    path: [...a.path, s, ...("openapi-3.0" === t.target ? [i.items.length] : [])],
                  })
                : null,
              p = i.items.length
            for (; p > 0;) {
              let e = i.items[p - 1]
              if (!("input" === t.io ? void 0 !== D(e) : "optional" === e._zod.optout)) break
              p--
            }
            let u = i.items.length,
              d = !i.rest
            ;("draft-2020-12" === t.target
              ? ((n.prefixItems = l), d ? (n.items = !1) : c && (n.items = c))
              : "openapi-3.0" === t.target
                ? ((n.items = { anyOf: l }), c && n.items.anyOf.push(c))
                : ((n.items = l), d ? (n.additionalItems = !1) : c && (n.additionalItems = c)),
              p > 0 && (n.minItems = p),
              d && (n.maxItems = u))
            let { minimum: m, maximum: f } = x(e)
            ;("number" == typeof m && (n.minItems = m), "number" == typeof f && (n.maxItems = f))
          },
          q = new WeakMap(),
          W = (e, t, n, i) => {
            let s = e._zod.def
            n.type = "object"
            let l = s.keyType,
              c = x(l).patterns
            if ("loose" === s.mode && c && c.size > 0) {
              let e = (0, r.Lp)(s.valueType, t, { ...i, path: [...i.path, "patternProperties", "*"] })
              for (let t of ((n.patternProperties = {}), c)) (0, o.Vy)(n.patternProperties, w(t).source, e)
            } else {
              if ("draft-07" === t.target || "draft-2020-12" === t.target) {
                n.propertyNames = (0, r.Lp)(s.keyType, t, { ...i, path: [...i.path, "propertyNames"] })
                let o = q.get(t)
                ;(o ||
                  ((o = []),
                  q.set(t, o),
                  t.deferred.push(() =>
                    (function (e) {
                      let t = new Map()
                      for (let n of e.seen.values()) n.def && !t.has(n.schema) && t.set(n.schema, n)
                      let n = new Map()
                      for (let i of q.get(e) ?? []) {
                        let r = e.seen.get(i),
                          o = (r?.def ?? r?.schema)?.propertyNames
                        if (!o || !0 === o || n.has(o)) continue
                        let s = (function e(t, n, i) {
                          if (n.$ref) {
                            if (i.has(n)) return n
                            i.add(n)
                            let a = t.get(n)?.def
                            if (!a) return n
                            let r = e(t, a, i)
                            return r === a ? n : r
                          }
                          for (let a of ["anyOf", "oneOf"]) {
                            let r = n[a]
                            if (!Array.isArray(r)) continue
                            let o = r.map((n) => e(t, n, i))
                            o.some((e, t) => e !== r[t]) && (n = { ...n, [a]: o })
                          }
                          let r = Array.isArray(n.type) ? n.type : [n.type],
                            o = !r.includes("string") && r.some((e) => "number" === e || "integer" === e),
                            s = n.enum ?? (void 0 !== n.const ? [n.const] : void 0)
                          if (!o && !s?.some((e) => "number" == typeof e)) return n
                          let {
                            minimum: l,
                            maximum: c,
                            exclusiveMinimum: p,
                            exclusiveMaximum: u,
                            multipleOf: d,
                            format: m,
                            id: f,
                            ...h
                          } = n
                          return (
                            h.enum
                              ? (h.enum = h.enum.map((e) => ("number" == typeof e ? String(e) : e)))
                              : "number" == typeof h.const && (h.const = String(h.const)),
                            o && ((h.type = "string"), s || (h.pattern = (r.includes("number") ? a.ai : a.nd).source)),
                            h
                          )
                        })(t, o, new Set())
                        s !== o && n.set(o, s)
                      }
                      if (n.size)
                        for (let t of e.seen.values())
                          for (let e of [t.schema, t.def]) {
                            let t = e && n.get(e.propertyNames)
                            t && (e.propertyNames = t)
                          }
                    })(t),
                  )),
                  o.push(e))
              }
              n.additionalProperties = (0, r.Lp)(s.valueType, t, { ...i, path: [...i.path, "additionalProperties"] })
            }
            let p = l._zod.values,
              u = "input" === t.io && void 0 !== D(s.valueType)
            if (p && !s.partial && !u) {
              let e = [...p].filter((e) => "string" == typeof e || "number" == typeof e)
              e.length > 0 && (n.required = e.map(String))
            }
          },
          Z = (e, t, n, a) => {
            let i = e._zod.def,
              o = (0, r.Lp)(i.innerType, t, a),
              s = t.seen.get(e)
            "openapi-3.0" === t.target ? ((s.ref = i.innerType), (n.nullable = !0)) : (n.anyOf = [o, { type: "null" }])
          },
          B = (e, t, n, a) => {
            let i = e._zod.def
            ;((0, r.Lp)(i.innerType, t, a), (t.seen.get(e).ref = i.innerType))
          },
          H = Symbol()
        function K(e, t, n, a, i) {
          let o = !1,
            s = JSON.stringify(e, (e, t) => ("bigint" != typeof t ? t : ((o = !0), null)))
          return o ? ((0, r._S)(t, n, a, i, "BigInt defaults cannot be represented in JSON Schema"), H) : JSON.parse(s)
        }
        let J = (e, t, n, a) => {
            let i = e._zod.def
            ;((0, r.Lp)(i.innerType, t, a), (t.seen.get(e).ref = i.innerType))
            let o = K(i.defaultValue, e, t, n, a)
            o !== H && (n.default = o)
          },
          G = (e, t, n, a) => {
            let i = e._zod.def
            if (((0, r.Lp)(i.innerType, t, a), (t.seen.get(e).ref = i.innerType), "input" !== t.io)) return
            let o = K(i.defaultValue, e, t, n, a)
            o !== H && (n._prefault = o)
          },
          V = (e, t, n, a) => {
            let i,
              o = e._zod.def
            ;((0, r.Lp)(o.innerType, t, a), (t.seen.get(e).ref = o.innerType))
            try {
              i = o.catchValue(void 0)
            } catch {
              ;(0, r._S)(e, t, n, a, "Dynamic catch values are not supported in JSON Schema")
              return
            }
            n.default = i
          },
          Q = (e, t, n, a) => {
            let i = e._zod.def,
              o = i.in._zod.traits.has("$ZodTransform"),
              s = "input" === t.io ? (o ? i.out : i.in) : i.out
            ;((0, r.Lp)(s, t, a), (t.seen.get(e).ref = s))
          },
          X = (e, t, n, a) => {
            let i = e._zod.def
            ;((0, r.Lp)(i.innerType, t, a), (t.seen.get(e).ref = i.innerType), (n.readOnly = !0))
          },
          ee = (e, t, n, a) => {
            let i = e._zod.def
            ;((0, r.Lp)(i.innerType, t, a), (t.seen.get(e).ref = i.innerType))
          },
          et = (e, t, n, a) => {
            let i = e._zod.def
            ;((0, r.Lp)(i.innerType, t, a), (t.seen.get(e).ref = i.innerType))
          },
          en = (e, t, n, a) => {
            let i = e._zod.innerType
            ;((0, r.Lp)(i, t, a), (t.seen.get(e).ref = i))
          },
          ea = {
            string: k,
            number: _,
            boolean: P,
            bigint: (e, t, n, a) => {
              ;(0, r._S)(e, t, n, a, "BigInt cannot be represented in JSON Schema")
            },
            symbol: (e, t, n, a) => {
              ;(0, r._S)(e, t, n, a, "Symbols cannot be represented in JSON Schema")
            },
            null: I,
            undefined: j,
            void: A,
            never: S,
            any: O,
            unknown: E,
            date: (e, t, n, a) => {
              ;(0, r._S)(e, t, n, a, "Date cannot be represented in JSON Schema")
            },
            enum: T,
            literal: z,
            nan: (e, t, n, a) => {
              ;(0, r._S)(e, t, n, a, "NaN cannot be represented in JSON Schema")
            },
            template_literal: C,
            file: (e, t, n, a) => {
              ;((n.type = "string"), (n.format = "binary"), (n.contentEncoding = "binary"))
              let { minimum: i, maximum: r, mime: o } = x(e)
              ;(void 0 !== i && (n.minLength = i),
                void 0 !== r && (n.maxLength = r),
                o &&
                  (0 === o.length
                    ? (n.not = {})
                    : 1 === o.length
                      ? (n.contentMediaType = o[0])
                      : (n.anyOf = o.map((e) => ({ contentMediaType: e })))))
            },
            success: (e, t, n, a) => {
              n.type = "boolean"
            },
            custom: R,
            function: $,
            transform: M,
            map: (e, t, n, a) => {
              ;(0, r._S)(e, t, n, a, "Map cannot be represented in JSON Schema")
            },
            set: (e, t, n, a) => {
              ;(0, r._S)(e, t, n, a, "Set cannot be represented in JSON Schema")
            },
            array: Y,
            object: N,
            union: L,
            intersection: U,
            tuple: F,
            record: W,
            nullable: Z,
            nonoptional: B,
            default: J,
            prefault: G,
            catch: V,
            pipe: Q,
            readonly: X,
            promise: ee,
            optional: et,
            lazy: en,
          }
        n.d(
          t,
          {},
          {
            $X: X,
            $k: et,
            A: G,
            A6: R,
            BU: j,
            C0: T,
            CN: F,
            CX: ee,
            Cv: C,
            Ec: N,
            Fs: x,
            GC: W,
            In: I,
            NV: E,
            NX: O,
            Q9: V,
            RH: S,
            SW: k,
            Tr: en,
            Wg: _,
            Yv: z,
            bl: function (e, t) {
              if ("_idmap" in e) {
                let n = (0, r.az)({ ...t, processors: ea }),
                  a = {}
                for (let t of e._idmap.entries()) {
                  let [e, a] = t
                  ;(0, r.Lp)(a, n)
                }
                let i = {}
                for (let s of ((n.external = { registry: e, uri: t?.uri, defs: a }), e._idmap.entries())) {
                  let [e, t] = s
                  ;((0, r.Wb)(n, t), (0, o.Vy)(i, e, (0, r.jE)(n, t)))
                }
                return (
                  Object.keys(a).length > 0 &&
                    (i.__shared = { ["draft-2020-12" === n.target ? "$defs" : "definitions"]: a }),
                  { schemas: i }
                )
              }
              let n = (0, r.az)({ ...t, processors: ea })
              return ((0, r.Lp)(e, n), (0, r.Wb)(n, e), (0, r.jE)(n, e))
            },
            bq: $,
            cR: B,
            cY: Y,
            dO: P,
            fs: Q,
            iC: L,
            i_: U,
            mh: J,
            vn: A,
            xi: M,
            yq: Z,
          },
        )
      },
      69683(e, t, n) {
        "use strict"
        var a = n(23065),
          i = n(22433),
          r = n(43578)
        function o(e, t) {
          return { callee: t?.callee ?? e, Err: t?.Err }
        }
        let s = (e) => {
            let t = (n, i, o, s) => {
              let l = o ? { ...o, async: !1 } : { async: !1 },
                c = n._zod.run({ value: i, issues: [] }, l)
              if (c instanceof Promise) throw new a.GT()
              if (c.issues.length) {
                let n = new (s?.Err ?? e)(c.issues.map((e) => r.iR(e, l, a.$W())))
                throw (r.gx(n, s?.callee ?? t), n)
              }
              return c.value
            }
            return t
          },
          l = s(i.Kd),
          c = (e) => {
            let t = async (n, i, o, s) => {
              let l = o ? { ...o, async: !0 } : { async: !0 },
                c = n._zod.run({ value: i, issues: [] }, l)
              if ((c instanceof Promise && (c = await c), c.issues.length)) {
                let n = new (s?.Err ?? e)(c.issues.map((e) => r.iR(e, l, a.$W())))
                throw (r.gx(n, s?.callee ?? t), n)
              }
              return c.value
            }
            return t
          },
          p = c(i.Kd),
          u = (e) => (t, n, i) => {
            let r = i ? { ...i, async: !1 } : { async: !1 },
              o = t._zod.run({ value: n, issues: [] }, r)
            if (o instanceof Promise) throw new a.GT()
            return o.issues.length ? d(e, o.issues, r) : { success: !0, data: o.value }
          }
        function d(e, t, n) {
          let i
          return {
            success: !1,
            get error() {
              return (i || ((i = new e(t.map((e) => r.iR(e, n, a.$W())))), (t = void 0), (n = void 0)), i)
            },
            set error(e) {
              ;((i = e), (t = void 0), (n = void 0))
            },
          }
        }
        i.Kd
        let m = (e) => async (t, n, a) => {
          let i = a ? { ...a, async: !0 } : { async: !0 },
            r = t._zod.run({ value: n, issues: [] }, i)
          return (
            r instanceof Promise && (r = await r),
            r.issues.length ? d(e, r.issues, i) : { success: !0, data: r.value }
          )
        }
        i.Kd
        let f = Symbol.for("zod.compile.invalid"),
          h = Symbol.for("zod.compile.fallback")
        ;(i.Kd,
          i.Kd,
          i.Kd,
          i.Kd,
          i.Kd,
          i.Kd,
          i.Kd,
          i.Kd,
          n.d(
            t,
            {},
            {
              EJ: p,
              F0: async (e, t, n) => {
                let a = n ? { ...n, async: !0, abortEarly: !0 } : { async: !0, abortEarly: !0 },
                  i = e._zod.run({ value: t, issues: [] }, a)
                return (i instanceof Promise && (i = await i), 0 === i.issues.length)
              },
              GW: (e) => {
                let t = c(e),
                  n = async (e, a, i, r) => {
                    let s = i ? { ...i, direction: "backward" } : { direction: "backward" }
                    return await t(e, a, s, o(n, r))
                  }
                return n
              },
              Mv: (e) => {
                let t = s(e),
                  n = (e, a, i, r) => t(e, a, i ? { ...i, direction: "backward" } : { direction: "backward" }, o(n, r))
                return n
              },
              Od: u,
              R3: (e) => async (t, n, a) => m(e)(t, n, a),
              Rb: c,
              Tj: s,
              VS: (e) => (t, n, a) => u(e)(t, n, a),
              e2: (e) => {
                let t = s(e),
                  n = (e, a, i, r) => t(e, a, i, o(n, r))
                return n
              },
              or: (e) => {
                let t = c(e),
                  n = async (e, a, i, r) => await t(e, a, i, o(n, r))
                return n
              },
              qg: l,
              rh: (e) => (t, n, a) => {
                let i = a ? { ...a, direction: "backward" } : { direction: "backward" }
                return u(e)(t, n, i)
              },
              tf: (e, t, n) => {
                let i = e._zod.bag.validator
                if (void 0 !== i) {
                  if (i(t) !== f) return !0
                  if (!0 === i.definite && void 0 === n) return !1
                }
                var r = e,
                  o = t,
                  s = n
                let l,
                  c = s ? { ...s, async: !1, abortEarly: !0 } : { async: !1, abortEarly: !0 },
                  p = r._zod.bag.fallbackRun
                if (
                  (p
                    ? ((c[h] = !0), (l = p({ value: o, issues: [] }, c)))
                    : (l = r._zod.run({ value: o, issues: [] }, c)),
                  l instanceof Promise)
                )
                  throw new a.GT()
                return 0 === l.issues.length
              },
              v_: (e) => async (t, n, a) => {
                let i = a ? { ...a, direction: "backward" } : { direction: "backward" }
                return m(e)(t, n, i)
              },
              wG: m,
            },
          ))
      },
      91947(e, t, n) {
        "use strict"
        let a =
            "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
          i = RegExp(`^${a}$`)
        function r(e) {
          let t = "(?:[01]\\d|2[0-3]):[0-5]\\d"
          return "number" == typeof e.precision
            ? -1 === e.precision
              ? `${t}`
              : 0 === e.precision
                ? `${t}:[0-5]\\d`
                : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
            : e.seconds
              ? `${t}:[0-5]\\d(?:\\.\\d+)?`
              : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`
        }
        n.d(
          t,
          {},
          {
            AC: /^[^A-Z]*$/,
            Ak: /^[a-zA-Z0-9_-]{21}$/,
            D2: function (e) {
              return RegExp(`^[a-zA-Z0-9_-]{${e}}$`)
            },
            F: /^https?$/,
            Gl: /^[0-9a-z]+$/,
            K3: /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
            Os: /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
            Rp: /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
            Vx: /^undefined$/i,
            Yj: (e) => {
              let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*"
              return RegExp(`^${t}$`)
            },
            Z0: /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
            Zg: function () {
              return RegExp(
                "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$",
                "u",
              )
            },
            Zv: /^[^a-z]*$/,
            ai: /^-?\d+(?:\.\d+)?$/,
            ch: /^null$/i,
            fO: /^[A-Za-z0-9]{27}$/,
            gF: /^[cC][0-9a-z]{6,}$/,
            gp: /^[\s\S]{0,}$/,
            hQ: /^\+[1-9]\d{6,14}$/,
            kB: function (e) {
              return RegExp(`^${r(e)}$`)
            },
            kM: /^[0-9a-vA-V]{20}$/,
            l7: /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
            nd: /^-?\d+$/,
            p0: /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
            p6: i,
            r0: /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,
            uR: (e) =>
              e
                ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`)
                : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
            uX: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
            ug: /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
            w$: function (e) {
              let t = ["Z"]
              e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)")
              let n = `${r({ precision: e.precision, seconds: !0 })}(?:${t.join("|")})`,
                i = e.local ? `${n}|${r({ precision: e.precision })}` : n
              return RegExp(`^${a}T(?:${i})$`)
            },
            zM: /^(?:true|false)$/i,
            zr: /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
          },
        )
      },
      79105(e, t, n) {
        "use strict"
        var a
        ;(a = globalThis).__zod_globalRegistry ??
          (a.__zod_globalRegistry = new (class e {
            constructor() {
              ;((this._map = new WeakMap()), (this._idmap = new Map()))
            }
            add(e, ...t) {
              let n = t[0]
              return (this._map.set(e, n), n && "object" == typeof n && "id" in n && this._idmap.set(n.id, e), this)
            }
            clear() {
              return ((this._map = new WeakMap()), (this._idmap = new Map()), this)
            }
            remove(e) {
              let t = this._map.get(e)
              return (t && "object" == typeof t && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this)
            }
            get(e) {
              let t = e._zod.parent
              if (t) {
                let n = { ...(this.get(t) ?? {}) }
                delete n.id
                let a = { ...n, ...this._map.get(e) }
                return Object.keys(a).length ? a : void 0
              }
              return this._map.get(e)
            }
            has(e) {
              return this._map.has(e)
            }
          })())
        let i = globalThis.__zod_globalRegistry
        n.d(t, {}, { fd: i })
      },
      69274(e, t, n) {
        "use strict"
        n.d(t, {
          Gb: () => V,
          $p: () => ea,
          Dq: () => U,
          CQ: () => q,
          sF: () => K,
          CI: () => Y,
          Cn: () => D,
          bl: () => P,
          Zu: () => I,
          t$: () => eC,
          b0: () => eq,
          rv: () => eA,
          P0: () => ed,
          Oy: () => W,
          qG: () => v,
          cG: () => k,
          VO: () => ey,
          RL: () => eI,
          _A: () => eL,
          Zc: () => h,
          Lc: () => C,
          Zy: () => M,
          v1: () => E,
          Ko: () => O,
          $N: () => z,
          Ax: () => T,
          LJ: () => em,
          h8: () => Z,
          GY: () => S,
          kU: () => eF,
          nu: () => ew,
          Py: () => _,
          Um: () => X,
          N$: () => eE,
          x8: () => G,
          qc: () => ej,
          vz: () => B,
          I: () => H,
          w: () => ec,
          ig: () => eP,
          _m: () => eR,
          VF: () => eO,
          KX: () => eM,
          hA: () => eU,
          Sb: () => eY,
          h: () => eb,
          $v: () => m,
          EY: () => f,
          d: () => eN,
          Wc: () => ek,
          G3: () => eh,
          W4: () => p,
          g5: () => j,
          VY: () => w,
          Zn: () => g,
          Mv: () => J,
          cu: () => eu,
          GP: () => Q,
          WH: () => ee,
          TF: () => A,
          cq: () => L,
          xE: () => F,
          YK: () => d,
        })
        var a = n(17691),
          i = n(23065)
        class r {
          constructor(e = [], t = {}) {
            ;((this.content = []), (this.indent = 0), (this.args = e), (this.closed = t))
          }
          indented(e) {
            this.indent += 1
            try {
              e(this)
            } finally {
              this.indent -= 1
            }
          }
          write(e) {
            if ("function" == typeof e) {
              ;(e(this, { execution: "sync" }), e(this, { execution: "async" }))
              return
            }
            let t = e.split("\n").filter((e) => e),
              n = Math.min(...t.map((e) => e.length - e.trimStart().length))
            for (let e of t.map((e) => e.slice(n)).map((e) => " ".repeat(2 * this.indent) + e)) this.content.push(e)
          }
          compile() {
            let e = Function,
              t = this?.content ?? [""]
            return new e(
              ...Object.keys(this.closed),
              `return function (${this.args.join(", ")}) {
${t.join("\n")}
};`,
            )(...Object.values(this.closed))
          }
        }
        var o = n(69683),
          s = n(91947),
          l = n(43578)
        let c = { major: 4, minor: 6, patch: 7 },
          p = i.xI(
            "$ZodType",
            (e, t) => {
              var n
              ;(e ?? (e = {}), (e._zod.def = t), (e._zod.bag = e._zod.bag || {}), (e._zod.version = c))
              let a = e._zod.def.checks,
                r = e._zod.traits.has("$ZodCheck") ? [e, ...(a ?? [])] : a?.length ? [...a] : []
              for (let t of r) for (let n of t._zod.onattach) n(e)
              if (0 === r.length)
                ((n = e._zod).deferred ?? (n.deferred = []),
                  e._zod.deferred?.push(() => {
                    e._zod.run = e._zod.parse
                  }))
              else {
                let t = (t, n, a) => {
                    let r
                    if (t.memo) return t
                    let o = l.QH(t)
                    for (let s of n) {
                      if (s._zod.def.when) {
                        if (l.rL(t) || !s._zod.def.when(t)) continue
                      } else if (o) continue
                      let n = t.issues.length,
                        c = s._zod.check(t)
                      if (c instanceof Promise && a?.async === !1) throw new i.GT()
                      if (r || c instanceof Promise)
                        r = (r ?? Promise.resolve()).then(async () => {
                          ;(await c, t.issues.length !== n && (l.d3(t.issues, n, e), o || (o = l.QH(t, n))))
                        })
                      else {
                        if (t.issues.length === n) continue
                        ;(l.d3(t.issues, n, e), o || (o = l.QH(t, n)))
                      }
                    }
                    return r ? r.then(() => t) : t
                  },
                  n = (n, a, o) => {
                    if (l.QH(n)) return ((n.aborted = !0), n)
                    let s = t(a, r, o)
                    if (s instanceof Promise) {
                      if (!1 === o.async) throw new i.GT()
                      return s.then((t) => e._zod.parse(t, o))
                    }
                    return e._zod.parse(s, o)
                  }
                e._zod.run = (a, o) => {
                  if (o.skipChecks) return e._zod.parse(a, o)
                  if ("backward" === o.direction) {
                    let t = e._zod.parse({ value: a.value, issues: [] }, { ...o, skipChecks: !0 })
                    return t instanceof Promise ? t.then((e) => n(e, a, o)) : n(t, a, o)
                  }
                  let s = e._zod.parse(a, o)
                  if (s instanceof Promise) {
                    if (!1 === o.async) throw new i.GT()
                    return s.then((e) => t(e, r, o))
                  }
                  return t(s, r, o)
                }
              }
            },
            {
              get "~standard"() {
                return l.jD(this, "~standard", d(this))
              },
              set "~standard"(e) {
                l.qh(this, "~standard", e)
              },
            },
          ),
          u = (e, t) => (e.issues.length ? { issues: e.issues.map((e) => l.iR(e, t, i.$W())) } : { value: e.value })
        function d(e) {
          return {
            validate: (t) => {
              let n = { async: !1 }
              try {
                let a = e._zod.run({ value: t, issues: [] }, n)
                if (!(a instanceof Promise)) return u(a, n)
              } catch (e) {}
              return (async function (e, t) {
                let n = { async: !0 }
                return u(await e._zod.run({ value: t, issues: [] }, n), n)
              })(e, t)
            },
            vendor: "zod",
            version: 1,
          }
        }
        let m = i.xI("$ZodString", (e, t) => {
            ;(p.init(e, t),
              (e._zod.pattern = t.pattern ?? s.gp),
              (e._zod.parse = (n, a) => {
                if (t.coerce)
                  try {
                    n.value = String(n.value)
                  } catch (e) {}
                return (
                  "string" == typeof n.value ||
                    n.issues.push({ expected: "string", code: "invalid_type", input: n.value, inst: e }),
                  n
                )
              }))
          }),
          f = i.xI("$ZodStringFormat", (e, t) => {
            ;(a.ql.init(e, t), m.init(e, t))
          }),
          h = i.xI("$ZodGUID", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.Os), f.init(e, t))
          }),
          g = i.xI("$ZodUUID", (e, t) => {
            if (t.version) {
              let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version]
              if (void 0 === e) throw Error(`Invalid UUID version: "${t.version}"`)
              t.pattern ?? (t.pattern = s.uR(e))
            } else t.pattern ?? (t.pattern = s.uR())
            f.init(e, t)
          }),
          v = i.xI("$ZodEmail", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.Rp), f.init(e, t))
          })
        function x(e) {
          try {
            if ("u" > typeof URL && "function" == typeof URL.canParse) return URL.canParse(e)
            return (new URL(e), !0)
          } catch {
            return !1
          }
        }
        let b = /[\t\n\r]/g
        function y(e) {
          return e.replace(b, "")
        }
        let w = i.xI("$ZodURL", (e, t) => {
            ;(f.init(e, t),
              (e._zod.check = (n) => {
                try {
                  var a, i
                  let r = n.value.trim(),
                    o =
                      "normalize" in t || "hostname" in t || "protocol" in t
                        ? (function (e, t) {
                            if (!t.normalize && t.protocol?.source === s.F.source && !/^https?:\/\//i.test(e)) return 1
                            try {
                              if ("u" > typeof URL) {
                                let t = URL
                                if ("function" == typeof t.parse) return t.parse(e) ?? 2
                              }
                              return new URL(e)
                            } catch {
                              return 2
                            }
                          })(r, t)
                        : x(r) || 2
                  if (1 === o)
                    return void n.issues.push({
                      code: "invalid_format",
                      format: "url",
                      note: "Invalid URL format",
                      input: n.value,
                      inst: e,
                      continue: !t.abort,
                    })
                  if (2 === o)
                    return void n.issues.push({
                      code: "invalid_format",
                      format: "url",
                      input: n.value,
                      inst: e,
                      continue: !t.abort,
                    })
                  if (!0 === o) {
                    n.value = y(r)
                    return
                  }
                  ;(t.hostname &&
                    (((a = t.hostname).lastIndex = 0), !a.test(o.hostname)) &&
                    n.issues.push({
                      code: "invalid_format",
                      format: "url",
                      note: "Invalid hostname",
                      pattern: t.hostname.source,
                      input: n.value,
                      inst: e,
                      continue: !t.abort,
                    }),
                    t.protocol &&
                      (((i = t.protocol).lastIndex = 0),
                      !i.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol)) &&
                      n.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid protocol",
                        pattern: t.protocol.source,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                      }),
                    (n.value = t.normalize ? o.href : y(r)))
                  return
                } catch (a) {
                  n.issues.push({ code: "invalid_format", format: "url", input: n.value, inst: e, continue: !t.abort })
                }
              }))
          }),
          k = i.xI("$ZodEmoji", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.Zg()), f.init(e, t))
          }),
          _ = i.xI("$ZodNanoID", (e, t) => {
            if (void 0 !== t.length && (!Number.isInteger(t.length) || t.length < 1))
              throw Error(`Invalid nanoid length: ${t.length}`)
            ;(t.pattern ?? (t.pattern = void 0 === t.length ? s.Ak : s.D2(t.length)), f.init(e, t))
          }),
          P = i.xI("$ZodCUID", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.gF), f.init(e, t))
          }),
          I = i.xI("$ZodCUID2", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.Gl), f.init(e, t))
          }),
          j = i.xI("$ZodULID", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.Z0), f.init(e, t))
          }),
          A = i.xI("$ZodXID", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.kM), f.init(e, t))
          }),
          S = i.xI("$ZodKSUID", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.fO), f.init(e, t))
          }),
          O = i.xI("$ZodISODateTime", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.w$(t)), f.init(e, t))
          }),
          E = i.xI("$ZodISODate", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.p6), f.init(e, t))
          }),
          T = i.xI("$ZodISOTime", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.kB(t)), f.init(e, t))
          }),
          z = i.xI("$ZodISODuration", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.p0), f.init(e, t))
          }),
          C = i.xI("$ZodIPv4", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.uX), f.init(e, t))
          }),
          R = /^[0-9a-fA-F:.]+$/
        function $(e) {
          return !!R.test(e) && x(`http://[${e}]`)
        }
        let M = i.xI("$ZodIPv6", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.ug),
              f.init(e, t),
              (e._zod.check = (n) => {
                $(n.value) ||
                  n.issues.push({ code: "invalid_format", format: "ipv6", input: n.value, inst: e, continue: !t.abort })
              }))
          }),
          Y = i.xI("$ZodCIDRv4", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.zr), f.init(e, t))
          }),
          D = i.xI("$ZodCIDRv6", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.l7),
              f.init(e, t),
              (e._zod.check = (n) => {
                !(function (e) {
                  let t = e.split("/")
                  if (2 !== t.length) return !1
                  let [n, a] = t
                  if (!a) return !1
                  let i = Number(a)
                  return `${i}` === a && !(i < 0) && !(i > 128) && $(n)
                })(n.value) &&
                  n.issues.push({
                    code: "invalid_format",
                    format: "cidrv6",
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                  })
              }))
          })
        function N(e) {
          if ("" === e) return !0
          if (/\s/.test(e) || e.length % 4 != 0) return !1
          try {
            return (atob(e), !0)
          } catch {
            return !1
          }
        }
        let L = /^[0-9a-zA-Z+/]*={0,2}$/,
          U = i.xI("$ZodBase64", (e, t) => {
            ;(t.pattern ?? (t.pattern = L),
              f.init(e, t),
              (e._zod.check = (n) => {
                N(n.value) ||
                  n.issues.push({
                    code: "invalid_format",
                    format: "base64",
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                  })
              }))
          }),
          F = /^[A-Za-z0-9_-]*$/,
          q = i.xI("$ZodBase64URL", (e, t) => {
            ;(t.pattern ?? (t.pattern = F),
              f.init(e, t),
              (e._zod.check = (n) => {
                !(function (e) {
                  if (!F.test(e)) return !1
                  let t = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"))
                  return N(t.padEnd(4 * Math.ceil(t.length / 4), "="))
                })(n.value) &&
                  n.issues.push({
                    code: "invalid_format",
                    format: "base64url",
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                  })
              }))
          }),
          W = i.xI("$ZodE164", (e, t) => {
            ;(t.pattern ?? (t.pattern = s.hQ), f.init(e, t))
          }),
          Z = i.xI("$ZodJWT", (e, t) => {
            ;(f.init(e, t),
              (e._zod.check = (n) => {
                !(function (e, t = null) {
                  try {
                    let n = e.split(".")
                    if (3 !== n.length) return !1
                    let [a] = n
                    if (!a) return !1
                    let i = JSON.parse(atob(a))
                    if (("typ" in i && i?.typ !== "JWT") || !i.alg || (t && (!("alg" in i) || i.alg !== t))) return !1
                    return !0
                  } catch {
                    return !1
                  }
                })(n.value, t.alg) &&
                  n.issues.push({ code: "invalid_format", format: "jwt", input: n.value, inst: e, continue: !t.abort })
              }))
          }),
          B = i.xI("$ZodNumber", (e, t) => {
            ;(p.init(e, t),
              (e._zod.pattern = s.ai),
              (e._zod.parse = (n, a) => {
                if (t.coerce)
                  try {
                    n.value = Number(n.value)
                  } catch (e) {}
                let i = n.value
                if ("number" == typeof i && !Number.isNaN(i) && Number.isFinite(i)) return n
                let r =
                  "number" == typeof i ? (Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : String(i)) : void 0
                return (
                  n.issues.push({
                    expected: "number",
                    code: "invalid_type",
                    input: i,
                    inst: e,
                    ...(r ? { received: r } : {}),
                  }),
                  n
                )
              }))
          }),
          H = i.xI("$ZodNumberFormat", (e, t) => {
            ;(a.KH.init(e, t), B.init(e, t))
          }),
          K = i.xI("$ZodBoolean", (e, t) => {
            ;(p.init(e, t),
              (e._zod.pattern = s.zM),
              (e._zod.parse = (n, a) => {
                if (t.coerce)
                  try {
                    n.value = !!n.value
                  } catch (e) {}
                let i = n.value
                return (
                  "boolean" == typeof i ||
                    n.issues.push({ expected: "boolean", code: "invalid_type", input: i, inst: e }),
                  n
                )
              }))
          }),
          J = i.xI("$ZodUndefined", (e, t) => {
            ;(p.init(e, t),
              (e._zod.pattern = s.Vx),
              (e._zod.values = new Set([void 0])),
              (e._zod.parse = (t, n) => {
                let a = t.value
                return (
                  void 0 === a || t.issues.push({ expected: "undefined", code: "invalid_type", input: a, inst: e }),
                  t
                )
              }))
          }),
          G = i.xI("$ZodNull", (e, t) => {
            ;(p.init(e, t),
              (e._zod.pattern = s.ch),
              (e._zod.values = new Set([null])),
              (e._zod.parse = (t, n) => {
                let a = t.value
                return (null === a || t.issues.push({ expected: "null", code: "invalid_type", input: a, inst: e }), t)
              }))
          }),
          V = i.xI("$ZodAny", (e, t) => {
            ;(p.init(e, t), (e._zod.parse = (e) => e))
          }),
          Q = i.xI("$ZodUnknown", (e, t) => {
            ;(p.init(e, t), (e._zod.parse = (e) => e))
          }),
          X = i.xI("$ZodNever", (e, t) => {
            ;(p.init(e, t),
              (e._zod.parse = (t, n) => (
                t.issues.push({ expected: "never", code: "invalid_type", input: t.value, inst: e }),
                t
              )))
          }),
          ee = i.xI("$ZodVoid", (e, t) => {
            ;(p.init(e, t),
              (e._zod.parse = (t, n) => {
                let a = t.value
                return (void 0 === a || t.issues.push({ expected: "void", code: "invalid_type", input: a, inst: e }), t)
              }))
          }),
          et = (e) => (Array.isArray(e) ? e.length : -1)
        function en(e, t, n) {
          ;(e.issues.length && t.issues.push(...l.lQ(n, e.issues)), (t.value[n] = e.value))
        }
        let ea = i.xI("$ZodArray", (e, t) => {
          p.init(e, t)
          let n = i.cr.memoizer
          ;(n?.attach(e),
            (e._zod.parse = (a, i) => {
              let r = a.value
              if (!Array.isArray(r))
                return (a.issues.push({ expected: "array", code: "invalid_type", input: r, inst: e }), a)
              a.value = n ? n.alloc(e, a, Array(r.length), i) : Array(r.length)
              let o = [],
                s = i?.abortEarly
              for (let e = 0; e < r.length; e++) {
                let n = r[e],
                  c = t.element._zod.run({ value: n, issues: [] }, i)
                if (c instanceof Promise) o.push(c.then((t) => en(t, a, e)))
                else if ((en(c, a, e), s && 0 !== c.issues.length && l.QH(c))) break
              }
              return o.length ? Promise.all(o).then(() => a) : a
            }),
            (function (e, t) {
              let n = l.hi(e._zod.def.checks)
              if (!n.length) return
              let a = Math.min(...n.map((e) => e[0])),
                i = e._zod.parse
              e._zod.parse = (n, r) => {
                let o = t(n.value)
                if (o > a && !r?.skipChecks && r?.direction !== "backward") {
                  for (let [t, a] of l.hi(e._zod.def.checks))
                    if (o > t && a._zod.def.when(n)) {
                      let t = n.issues.length
                      return (a._zod.check(n), (n.issues[t].continue = !1), l.d3(n.issues, t, e), n)
                    }
                }
                return i(n, r)
              }
            })(e, et))
        })
        function ei(e, t, n, a, i, r) {
          let o = n in a,
            s = "optional" === r
          if (o || !s || "optional" !== i) {
            if (e.issues.length) {
              if (void 0 !== i && s && !o) return
              t.issues.push(...l.lQ(n, e.issues))
            }
            if (!o && void 0 === i) {
              e.issues.length ||
                t.issues.push({ code: "invalid_type", expected: "nonoptional", input: void 0, path: [n] })
              return
            }
            void 0 === e.value ? (o || ("defaulted" === i && !s)) && (t.value[n] = void 0) : (t.value[n] = e.value)
          }
        }
        let er = []
        function eo(e) {
          let t = Object.keys(e.shape),
            n = Object.getOwnPropertySymbols(e.shape),
            a = n.length ? n : er,
            i = a.length ? [...t, ...a] : t
          for (let t of i)
            if (!e.shape?.[t]?._zod?.traits?.has("$ZodType"))
              throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`)
          let r = l.NM(e.shape)
          return { ...e, allKeys: i, symbolKeys: a, keySet: new Set(t), numKeys: t.length, optionalKeys: new Set(r) }
        }
        function es(e, t, n, a, i, r, o) {
          let s = [],
            c = i.keySet,
            p = i.catchall._zod,
            u = p.def.type,
            d = p.optin,
            m = p.optout,
            f = 0
          for (let i in t) {
            if (o && n.issues.length !== f) {
              if (l.QH(n, f)) break
              f = n.issues.length
            }
            if (c.has(i)) continue
            if ("__proto__" === i) {
              "never" === u && s.push(i)
              continue
            }
            if ("never" === u) {
              s.push(i)
              continue
            }
            let r = p.run({ value: t[i], issues: [] }, a)
            r instanceof Promise ? e.push(r.then((e) => ei(e, n, i, t, d, m))) : ei(r, n, i, t, d, m)
          }
          return (s.length && n.issues.push({ code: "unrecognized_keys", keys: s, input: t, inst: r, continue: !0 }),
          e.length)
            ? Promise.all(e).then(() => n)
            : n
        }
        let el = i.xI("$ZodObject", (e, t) => {
            let n
            p.init(e, t)
            let a = Object.getOwnPropertyDescriptor(t, "shape"),
              r = a?.get ? a.get.raw : (t.shape ?? {})
            if (r) {
              let e = () => {
                let n = { ...r }
                return (Object.defineProperty(t, "shape", { value: n }), (e.raw = n), n)
              }
              ;((e.raw = r), Object.defineProperty(t, "shape", { get: e }))
            }
            let o = l.PO(() => eo(t))
            l.v5(e, "propValues", (e) => {
              let t = e.def.shape,
                n = {}
              for (let e in t) {
                let a = t[e]._zod
                if (a.values) {
                  for (let t of (Object.prototype.hasOwnProperty.call(n, e) || l.Vy(n, e, new Set()), a.values))
                    n[e].add(t)
                  void 0 !== a.optin && n[e].add(void 0)
                }
              }
              return n
            })
            let s = l.Gv,
              c = t.catchall,
              u = i.cr.memoizer
            ;(u?.attach(e),
              (e._zod.parse = (t, a) => {
                n ?? (n = o.value)
                let i = t.value
                if (!s(i)) return (t.issues.push({ expected: "object", code: "invalid_type", input: i, inst: e }), t)
                t.value = u ? u.alloc(e, t, {}, a) : {}
                let r = [],
                  p = n.shape,
                  d = a?.abortEarly,
                  m = t.issues.length
                for (let e of n.allKeys) {
                  if (d && t.issues.length !== m) {
                    if (l.QH(t, m)) break
                    m = t.issues.length
                  }
                  if ("__proto__" === e) continue
                  let n = p[e],
                    o = n._zod.optin,
                    s = n._zod.optout,
                    c = n._zod.run({ value: i[e], issues: [] }, a)
                  c instanceof Promise ? r.push(c.then((n) => ei(n, t, e, i, o, s))) : ei(c, t, e, i, o, s)
                }
                return c ? es(r, i, t, a, o.value, e, !0 === d) : r.length ? Promise.all(r).then(() => t) : t
              }))
          }),
          ec = i.xI("$ZodObjectJIT", (e, t) => {
            let n, a
            el.init(e, t)
            let o = e._zod.parse,
              s = l.PO(() => eo(t)),
              c = i.cr.memoizer,
              p = l.Gv,
              u = !i.cr.jitless,
              d = l.hI,
              m = u && d.value,
              f = t.catchall
            e._zod.parse = (i, d) => {
              a ?? (a = s.value)
              let h = i.value
              return p(h)
                ? u && m && d?.async === !1 && !0 !== d.jitless
                  ? (n ||
                      (n = ((t) => {
                        let n = s.value,
                          a = n.symbolKeys,
                          i = new r(["payload", "ctx"], { shape: t, inst: e, memo: c, syms: a }),
                          o = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`,
                          p = (e, t) => `
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`
                        i.write("const input = payload.value;")
                        let u = Object.create(null),
                          d = 0
                        for (let e of n.allKeys) u[e] = `key_${d++}`
                        for (let e of (i.write(
                          c ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};",
                        ),
                        n.allKeys)) {
                          if ("__proto__" === e) continue
                          let n = u[e],
                            r = "symbol" == typeof e ? `syms[${a.indexOf(e)}]` : l.UQ(e),
                            s = `${r} in input`,
                            c = t[e],
                            d = c?._zod?.optin,
                            m = void 0 !== d,
                            f = c?._zod?.optout === "optional"
                          if ((i.write(`const ${n} = ${o(r)};`), m && f)) {
                            let e = "optional" === d ? `${n}_present` : `${n}.value !== undefined || ${n}_present`
                            i.write(`
        const ${n}_present = ${s};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${p(n, r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `)
                          } else
                            m
                              ? (i.write(`
        if (${n}.issues.length) {${p(n, r)}
        }
      `),
                                "defaulted" === d
                                  ? i.write(`newResult[${r}] = ${n}.value;`)
                                  : i.write(`
        if (${n}.value !== undefined || ${s}) {
          newResult[${r}] = ${n}.value;
        }
      `))
                              : i.write(`
        const ${n}_present = ${s};
        if (${n}.issues.length) {${p(n, r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `)
                        }
                        return (i.write("payload.value = newResult;"), i.write("return payload;"), i.compile())
                      })(t.shape)),
                    (i = n(i, d)),
                    f)
                    ? es([], h, i, d, a, e, d?.abortEarly === !0)
                    : i
                  : o(i, d)
                : (i.issues.push({ expected: "object", code: "invalid_type", input: h, inst: e }), i)
            }
          })
        function ep(e, t, n, a) {
          for (let n of e) if (0 === n.issues.length) return ((t.value = n.value), t)
          let r = e.filter((e) => !l.QH(e))
          return 1 === r.length
            ? ((t.value = r[0].value), r[0])
            : (t.issues.push({
                code: "invalid_union",
                input: t.value,
                inst: n,
                errors: e.map((e) => e.issues.map((e) => l.iR(e, a, i.$W()))),
              }),
              t)
        }
        let eu = i.xI("$ZodUnion", (e, t) => {
            ;(p.init(e, t),
              l.v5(e, "optin", (e) =>
                e.def.options.some((e) => "defaulted" === e._zod.optin)
                  ? "defaulted"
                  : e.def.options.some((e) => void 0 !== e._zod.optin)
                    ? "optional"
                    : void 0,
              ),
              l.v5(e, "optout", (e) => (e.def.options.some((e) => "optional" === e._zod.optout) ? "optional" : void 0)),
              l.v5(e, "values", (e) => {
                if (e.def.options.every((e) => e._zod.values))
                  return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)))
              }),
              l.v5(e, "pattern", (e) => {
                if (e.def.options.every((e) => e._zod.pattern)) {
                  let t = e.def.options.map((e) => e._zod.pattern)
                  return RegExp(`^(${t.map((e) => l.p6(e.source)).join("|")})$`)
                }
              }))
            let n = 1 === t.options.length ? t.options[0]._zod.run : null
            e._zod.parse = (a, i) => {
              if (n) return n(a, i)
              let r = !1,
                o = []
              for (let e of t.options) {
                let t = e._zod.run({ value: a.value, issues: [] }, i)
                if (t instanceof Promise) (o.push(t), (r = !0))
                else {
                  if (0 === t.issues.length) return t
                  o.push(t)
                }
              }
              return r ? Promise.all(o).then((t) => ep(t, a, e, i)) : ep(o, a, e, i)
            }
          }),
          ed = i.xI("$ZodDiscriminatedUnion", (e, t) => {
            ;((t.inclusive = !1), eu.init(e, t))
            let n = e._zod.parse
            ;(l.v5(e, "propValues", (e) => {
              let t = {},
                n = 0
              for (let a of e.def.options) {
                let i = a._zod.propValues
                if (!i || 0 === Object.keys(i).length)
                  throw Error(`Invalid discriminated union option at index "${e.def.options.indexOf(a)}"`)
                for (let [a, r] of (i[e.def.discriminator]?.has(void 0) && n++, Object.entries(i)))
                  for (let e of (Object.prototype.hasOwnProperty.call(t, a) || l.Vy(t, a, new Set()), r)) t[a].add(e)
              }
              return (!e.def.unionFallback && n > 1 && t[e.def.discriminator]?.delete(void 0), t)
            }),
              t.options.forEach((e, n) => {
                let a = l.MO(e._zod.def)
                if (a && !Object.prototype.hasOwnProperty.call(a, t.discriminator))
                  throw Error(`Invalid discriminated union option at index "${n}"`)
              }))
            let a = l.PO(() =>
              (function (e) {
                let t = new Map()
                for (let n of e.options) {
                  let a = n._zod.propValues?.[e.discriminator]
                  if (!a || 0 === a.size)
                    throw Error(`Invalid discriminated union option at index "${e.options.indexOf(n)}"`)
                  for (let e of a)
                    if (t.has(e)) {
                      if (void 0 !== e) throw Error(`Duplicate discriminator value "${String(e)}"`)
                      t.set(e, null)
                    } else t.set(e, n)
                }
                return t
              })(t),
            )
            e._zod.parse = (i, r) => {
              let o = i.value
              if (!l.Gv(o)) return (i.issues.push({ code: "invalid_type", expected: "object", input: o, inst: e }), i)
              let s = o?.[t.discriminator],
                c = a.value.get(s)
              return c && (void 0 !== s || "backward" !== r.direction)
                ? c._zod.run(i, r)
                : t.unionFallback || "backward" === r.direction
                  ? n(i, r)
                  : (i.issues.push({
                      code: "invalid_union",
                      errors: [],
                      note: "No matching discriminator",
                      discriminator: t.discriminator,
                      options: Array.from(a.value.keys()).filter((e) => null !== a.value.get(e)),
                      input: o,
                      path: [t.discriminator],
                      inst: e,
                    }),
                    i)
            }
          }),
          em = i.xI("$ZodIntersection", (e, t) => {
            ;(p.init(e, t),
              (e._zod.parse = (e, n) => {
                let a = e.value,
                  i = t.left._zod.run({ value: a, issues: [] }, n),
                  r = t.right._zod.run({ value: a, issues: [] }, n)
                return i instanceof Promise || r instanceof Promise
                  ? Promise.all([i, r]).then(([t, n]) => ef(e, t, n))
                  : ef(e, i, r)
              }))
          })
        function ef(e, t, n) {
          let a,
            i = new Map(),
            r = new Map(),
            o = (e, t) => {
              let n
              if ("unrecognized_keys" !== e.code || e.path?.length)
                if ("invalid_key" !== e.code || "record" !== e.origin || e.path?.length !== 1) return !1
                else {
                  let t = String(e.path[0])
                  ;(r.has(t) || r.set(t, e), (n = [t]))
                }
              else (a ?? (a = e), (n = e.keys))
              for (let e of n) (i.has(e) || i.set(e, {}), (i.get(e)[t] = !0))
              return !0
            }
          for (let n of t.issues) o(n, "l") || e.issues.push(n)
          for (let t of n.issues) o(t, "r") || e.issues.push(t)
          let s = [...i].filter(([, e]) => e.l && e.r).map(([e]) => e)
          if (s.length) {
            let t = a ? s.filter((e) => a.keys.includes(e)) : []
            for (let n of (t.length && e.issues.push({ ...a, keys: t }), s))
              !t.includes(n) && r.has(n) && e.issues.push(r.get(n))
          }
          let c = (function e(t, n) {
            if (t === n || (t instanceof Date && n instanceof Date && +t == +n)) return { valid: !0, data: t }
            if (l.Qd(t) && l.Qd(n)) {
              let a = Object.keys(n),
                i = Object.keys(t).filter((e) => -1 !== a.indexOf(e)),
                r = { ...t, ...n }
              for (let a of (Object.prototype.hasOwnProperty.call(r, "__proto__") && delete r.__proto__, i)) {
                if ("__proto__" === a) continue
                let i = e(t[a], n[a])
                if (!i.valid) return { valid: !1, mergeErrorPath: [a, ...i.mergeErrorPath] }
                r[a] = i.data
              }
              return { valid: !0, data: r }
            }
            if (Array.isArray(t) && Array.isArray(n)) {
              if (t.length !== n.length) return { valid: !1, mergeErrorPath: [] }
              let a = []
              for (let i = 0; i < t.length; i++) {
                let r = e(t[i], n[i])
                if (!r.valid) return { valid: !1, mergeErrorPath: [i, ...r.mergeErrorPath] }
                a.push(r.data)
              }
              return { valid: !0, data: a }
            }
            return { valid: !1, mergeErrorPath: [] }
          })(t.value, n.value)
          if (!c.valid) {
            if (l.QH(e)) return e
            throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`)
          }
          return ((e.value = c.data), e)
        }
        let eh = i.xI("$ZodTuple", (e, t) => {
          p.init(e, t)
          let n = t.items,
            a = i.cr.memoizer
          ;(a?.attach(e),
            (e._zod.parse = (i, r) => {
              let o = i.value
              if (!Array.isArray(o))
                return (i.issues.push({ input: o, inst: e, expected: "tuple", code: "invalid_type" }), i)
              i.value = a ? a.alloc(e, i, [], r) : []
              let s = [],
                c = eg(n, "optin"),
                p = eg(n, "optout")
              if (!t.rest) {
                if (o.length < c)
                  return (
                    i.issues.push({ code: "too_small", minimum: c, inclusive: !0, input: o, inst: e, origin: "array" }),
                    i
                  )
                o.length > n.length &&
                  i.issues.push({
                    code: "too_big",
                    maximum: n.length,
                    inclusive: !0,
                    input: o,
                    inst: e,
                    origin: "array",
                  })
              }
              let u = Array(n.length),
                d = t.rest ? r?.abortEarly : void 0,
                m = !1
              for (let e = 0; e < n.length; e++) {
                let t = n[e]._zod.run({ value: o[e], issues: [] }, r)
                t instanceof Promise
                  ? s.push(
                      t.then((t) => {
                        u[e] = t
                      }),
                    )
                  : ((u[e] = t), d && !m && t.issues.length && (m = l.QH(t)))
              }
              if (t.rest && !m) {
                let e = n.length - 1,
                  a = o.slice(n.length),
                  c = i.issues.length
                for (let n of a) {
                  if (d && i.issues.length !== c) {
                    if (l.QH(i, c)) break
                    c = i.issues.length
                  }
                  e++
                  let a = t.rest._zod.run({ value: n, issues: [] }, r)
                  a instanceof Promise ? s.push(a.then((t) => ev(t, i, e))) : ev(a, i, e)
                }
              }
              return s.length ? Promise.all(s).then(() => ex(u, i, n, o, p)) : ex(u, i, n, o, p)
            }))
        })
        function eg(e, t) {
          for (let n = e.length - 1; n >= 0; n--)
            if (!("optin" === t ? void 0 !== e[n]._zod.optin : "optional" === e[n]._zod.optout)) return n + 1
          return 0
        }
        function ev(e, t, n) {
          ;(e.issues.length && t.issues.push(...l.lQ(n, e.issues)), (t.value[n] = e.value))
        }
        function ex(e, t, n, a, i) {
          for (let r = 0; r < n.length; r++) {
            let o = e[r],
              s = r < a.length
            if (!s && r >= i && "optional" === n[r]._zod.optin) {
              t.value.length = r
              break
            }
            if (o.issues.length) {
              if (!s && r >= i) {
                t.value.length = r
                break
              }
              t.issues.push(...l.lQ(r, o.issues))
            }
            t.value[r] = o.value
          }
          for (
            let e = t.value.length - 1;
            e >= a.length && "optional" === n[e]._zod.optout && void 0 === t.value[e];
            e--
          )
            t.value.length = e
          return t
        }
        let eb = i.xI("$ZodRecord", (e, t) => {
            p.init(e, t)
            let n = i.cr.memoizer
            ;(n?.attach(e),
              (e._zod.parse = (a, r) => {
                let o = a.value
                if (!l.Qd(o)) return (a.issues.push({ expected: "record", code: "invalid_type", input: o, inst: e }), a)
                let c = [],
                  p = t.keyType._zod.values
                if (p && !t.partial) {
                  let s
                  a.value = n ? n.alloc(e, a, {}, r) : {}
                  let u = new Set()
                  for (let n of p)
                    if ("string" == typeof n || "number" == typeof n || "symbol" == typeof n) {
                      if ((u.add("number" == typeof n ? n.toString() : n), "__proto__" === n)) continue
                      let s = t.keyType._zod.run({ value: n, issues: [] }, r)
                      if (s instanceof Promise) throw Error("Async schemas not supported in object keys currently")
                      if (s.issues.length) {
                        a.issues.push({
                          code: "invalid_key",
                          origin: "record",
                          issues: s.issues.map((e) => l.iR(e, r, i.$W())),
                          input: n,
                          path: [n],
                          inst: e,
                        })
                        continue
                      }
                      let p = s.value
                      if ("__proto__" === p) continue
                      let d = t.valueType._zod.run({ value: o[n], issues: [] }, r)
                      d instanceof Promise
                        ? c.push(
                            d.then((e) => {
                              ;(e.issues.length && a.issues.push(...l.lQ(n, e.issues)), (a.value[p] = e.value))
                            }),
                          )
                        : (d.issues.length && a.issues.push(...l.lQ(n, d.issues)), (a.value[p] = d.value))
                    }
                  for (let e in o)
                    if (!u.has(e))
                      if ("loose" === t.mode) {
                        if ("__proto__" === e) continue
                        a.value[e] = o[e]
                      } else (s = s ?? []).push(e)
                  s &&
                    s.length > 0 &&
                    a.issues.push({ code: "unrecognized_keys", input: o, inst: e, keys: s, continue: !0 })
                } else {
                  let u
                  for (let d of ((a.value = n ? n.alloc(e, a, {}, r) : {}), Reflect.ownKeys(o))) {
                    if ("__proto__" === d || !Object.prototype.propertyIsEnumerable.call(o, d)) continue
                    let n = t.keyType._zod.run({ value: d, issues: [] }, r)
                    if (n instanceof Promise) throw Error("Async schemas not supported in object keys currently")
                    if ("string" == typeof d && s.ai.test(d) && n.issues.length) {
                      let e = t.keyType._zod.run({ value: Number(d), issues: [] }, r)
                      if (e instanceof Promise) throw Error("Async schemas not supported in object keys currently")
                      0 === e.issues.length && (n = e)
                    }
                    if (n.issues.length) {
                      "loose" === t.mode
                        ? (a.value[d] = o[d])
                        : p
                          ? (u = u ?? []).push(d)
                          : a.issues.push({
                              code: "invalid_key",
                              origin: "record",
                              issues: n.issues.map((e) => l.iR(e, r, i.$W())),
                              input: d,
                              path: [d],
                              inst: e,
                            })
                      continue
                    }
                    let m = n.value
                    if ("__proto__" === m) continue
                    let f = t.valueType._zod.run({ value: o[d], issues: [] }, r)
                    f instanceof Promise
                      ? c.push(
                          f.then((e) => {
                            ;(e.issues.length && a.issues.push(...l.lQ(d, e.issues)), (a.value[m] = e.value))
                          }),
                        )
                      : (f.issues.length && a.issues.push(...l.lQ(d, f.issues)), (a.value[m] = f.value))
                  }
                  u &&
                    u.length > 0 &&
                    a.issues.push({ code: "unrecognized_keys", input: o, inst: e, keys: u, continue: !0 })
                }
                return c.length ? Promise.all(c).then(() => a) : a
              }))
          }),
          ey = i.xI("$ZodEnum", (e, t) => {
            p.init(e, t)
            let n = l.w5(t.entries),
              a = new Set(n)
            ;((e._zod.values = a),
              l.v5(e, "pattern", (e) => {
                let t = l.w5(e.def.entries).filter((e) => l.qQ.has(typeof e))
                return new RegExp(t.length ? `^(${t.map((e) => l.sD(e.toString())).join("|")})$` : "^[^\\s\\S]$")
              }),
              (e._zod.parse = (t, i) => {
                let r = t.value
                return (a.has(r) || t.issues.push({ code: "invalid_value", values: n, input: r, inst: e }), t)
              }))
          }),
          ew = i.xI("$ZodLiteral", (e, t) => {
            p.init(e, t)
            let n = new Set(t.values)
            ;((e._zod.values = n),
              l.v5(e, "pattern", (e) => {
                let t = e.def.values
                return new RegExp(
                  t.length
                    ? `^(${t.map((e) => ("string" == typeof e ? l.sD(e) : e ? l.sD(e.toString()) : String(e))).join("|")})$`
                    : "^[^\\s\\S]$",
                )
              }),
              (e._zod.parse = (a, i) => {
                let r = a.value
                return (n.has(r) || a.issues.push({ code: "invalid_value", values: t.values, input: r, inst: e }), a)
              }))
          }),
          ek = i.xI("$ZodTransform", (e, t) => {
            ;(p.init(e, t),
              (e._zod.optin = "optional"),
              i.cr.memoizer?.guard(e),
              (e._zod.parse = (n, a) => {
                if ("backward" === a.direction) throw new i.cV(e.constructor.name)
                let r = t.transform(n.value, n)
                if (a.async) return (r instanceof Promise ? r : Promise.resolve(r)).then((e) => ((n.value = e), n))
                if (r instanceof Promise) throw new i.GT()
                return ((n.value = r), n)
              }))
          })
        function e_(e, t) {
          return ((e.value = t.issues.length ? void 0 : t.value), e)
        }
        let eP = i.xI("$ZodOptional", (e, t) => {
            ;(p.init(e, t),
              l.v5(e, "optin", (e) => ("defaulted" === e.def.innerType._zod.optin ? "defaulted" : "optional")),
              (e._zod.optout = "optional"),
              l.v5(e, "values", (e) => {
                let t = e.def.innerType._zod.values
                return t ? new Set([...t, void 0]) : void 0
              }),
              l.v5(e, "pattern", (e) => {
                let t = e.def.innerType._zod.pattern
                return t ? RegExp(`^(${l.p6(t.source)})?$`) : void 0
              }),
              (e._zod.parse = (e, n) => {
                if (void 0 === e.value) {
                  if ("defaulted" !== t.innerType._zod.optin) return e
                  let a = t.innerType._zod.run({ value: e.value, issues: [] }, n)
                  return a instanceof Promise ? a.then((t) => e_(e, t)) : e_(e, a)
                }
                return t.innerType._zod.run(e, n)
              }))
          }),
          eI = i.xI("$ZodExactOptional", (e, t) => {
            ;(eP.init(e, t),
              l.v5(e, "values", (e) => e.def.innerType._zod.values),
              l.v5(e, "pattern", (e) => e.def.innerType._zod.pattern),
              (e._zod.parse = (e, n) => t.innerType._zod.run(e, n)))
          }),
          ej = i.xI("$ZodNullable", (e, t) => {
            ;(p.init(e, t),
              l.v5(e, "optin", (e) => e.def.innerType._zod.optin),
              l.v5(e, "optout", (e) => e.def.innerType._zod.optout),
              l.v5(e, "pattern", (e) => {
                let t = e.def.innerType._zod.pattern
                return t ? RegExp(`^(${l.p6(t.source)}|null)$`) : void 0
              }),
              l.v5(e, "values", (e) =>
                e.def.innerType._zod.values ? new Set([...e.def.innerType._zod.values, null]) : void 0,
              ),
              (e._zod.parse = (e, n) => (null === e.value ? e : t.innerType._zod.run(e, n))))
          }),
          eA = i.xI("$ZodDefault", (e, t) => {
            ;(p.init(e, t),
              (e._zod.optin = "defaulted"),
              l.v5(e, "values", (e) => e.def.innerType._zod.values),
              (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) return t.innerType._zod.run(e, n)
                if (void 0 === e.value) return ((e.value = t.defaultValue), e)
                let a = t.innerType._zod.run(e, n)
                return a instanceof Promise ? a.then((e) => eS(e, t)) : eS(a, t)
              }))
          })
        function eS(e, t) {
          return (void 0 === e.value && (e.value = t.defaultValue), e)
        }
        let eO = i.xI("$ZodPrefault", (e, t) => {
            ;(p.init(e, t),
              (e._zod.optin = "defaulted"),
              l.v5(e, "values", (e) => e.def.innerType._zod.values),
              (e._zod.parse = (e, n) => (
                "backward" === n.direction || (void 0 === e.value && (e.value = t.defaultValue)),
                t.innerType._zod.run(e, n)
              )))
          }),
          eE = i.xI("$ZodNonOptional", (e, t) => {
            ;(p.init(e, t),
              l.v5(e, "values", (e) => {
                let t = e.def.innerType._zod.values
                return t ? new Set([...t].filter((e) => void 0 !== e)) : void 0
              }),
              (e._zod.parse = (n, a) => {
                let i = t.innerType._zod.run(n, a)
                return i instanceof Promise ? i.then((t) => eT(t, e)) : eT(i, e)
              }))
          })
        function eT(e, t) {
          return (
            e.issues.length ||
              void 0 !== e.value ||
              e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: t }),
            e
          )
        }
        function ez(e, t, n, a) {
          return (
            t.issues.length
              ? (e.value = n.catchValue({
                  ...t,
                  value: e.value,
                  error: { issues: t.issues.map((e) => l.iR(e, a, i.$W())) },
                  input: e.value,
                }))
              : ((e.value = t.value), t.memo && (e.memo = !0)),
            e
          )
        }
        let eC = i.xI("$ZodCatch", (e, t) => {
            ;(p.init(e, t),
              l.v5(e, "optin", (e) => ("defaulted" === e.def.innerType._zod.optin ? "defaulted" : "optional")),
              l.v5(e, "optout", (e) => e.def.innerType._zod.optout),
              l.v5(e, "values", (e) => e.def.innerType._zod.values),
              (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) return t.innerType._zod.run(e, n)
                let a = t.innerType._zod.run({ value: e.value, issues: [] }, n)
                return a instanceof Promise ? a.then((a) => ez(e, a, t, n)) : ez(e, a, t, n)
              }))
          }),
          eR = i.xI("$ZodPipe", (e, t) => {
            ;(p.init(e, t),
              l.v5(e, "values", (e) => e.def.in._zod.values),
              l.v5(e, "optin", (e) => e.def.in._zod.optin),
              l.v5(e, "optout", (e) => e.def.out._zod.optout),
              l.v5(e, "propValues", (e) => e.def.in._zod.propValues),
              (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) {
                  let a = t.out._zod.run(e, n)
                  return a instanceof Promise ? a.then((e) => e$(e, t.in, n)) : e$(a, t.in, n)
                }
                let a = t.in._zod.run(e, n)
                return a instanceof Promise ? a.then((e) => e$(e, t.out, n)) : e$(a, t.out, n)
              }))
          })
        function e$(e, t, n) {
          return e.issues.some((e) => "unrecognized_keys" !== e.code)
            ? ((e.aborted = !0), e)
            : t._zod.run({ value: e.value, issues: e.issues }, n)
        }
        let eM = i.xI("$ZodPreprocess", (e, t) => {
            eR.init(e, t)
          }),
          eY = i.xI("$ZodReadonly", (e, t) => {
            ;(p.init(e, t),
              l.v5(e, "propValues", (e) => e.def.innerType._zod.propValues),
              l.v5(e, "values", (e) => e.def.innerType._zod.values),
              l.v5(e, "optin", (e) => e.def.innerType?._zod?.optin),
              l.v5(e, "optout", (e) => e.def.innerType?._zod?.optout),
              (e._zod.parse = (e, n) => {
                if ("backward" === n.direction) return t.innerType._zod.run(e, n)
                let a = t.innerType._zod.run(e, n)
                return a instanceof Promise ? a.then(eD) : eD(a)
              }))
          })
        function eD(e) {
          return (e.memo || (e.value = Object.freeze(e.value)), e)
        }
        let eN = i.xI("$ZodTemplateLiteral", (e, t) => {
            p.init(e, t)
            let n = []
            for (let e of t.parts)
              if ("object" == typeof e && null !== e) {
                let t = (function e(t) {
                  let n = t._zod.def,
                    a = t._zod.pattern?.source,
                    i = n.innerType ?? t._zod.innerType
                  if (i) {
                    let t = i._zod.pattern?.source,
                      n = e(i)
                    return a && t && n && n !== t ? a.replace(l.p6(t), () => l.p6(n)) : a
                  }
                  if (n.options) {
                    let t = n.options.map(e)
                    if (t.every(Boolean)) return `^(${t.map((e) => l.p6(e)).join("|")})$`
                  }
                  return (function (e) {
                    let t,
                      n,
                      a = e._zod.def,
                      i = a.pattern,
                      r = !!a.format?.includes("int")
                    for (let e of a.checks ?? []) {
                      let a = e._zod.def
                      ;(a.pattern && (i = a.pattern), r || (r = !!a.format?.includes("int")))
                      let o = a.minimum ?? a.length,
                        s = a.maximum ?? a.length
                      ;(void 0 !== o && (void 0 === t || o > t) && (t = o),
                        void 0 !== s && (void 0 === n || s < n) && (n = s))
                    }
                    if (i) return i.source
                    if (void 0 !== t && void 0 !== n && t > n) return "(?!)"
                    if (void 0 !== t || void 0 !== n) return s.Yj({ minimum: t, maximum: n }).source
                    let o = e._zod.pattern
                    return (r && o === s.ai ? s.nd : o)?.source
                  })(t)
                })(e)
                if (!t) throw Error(`Invalid template literal part, no pattern found: ${[...e._zod.traits].shift()}`)
                n.push(l.p6(t))
              } else if (null === e || l.bI.has(typeof e)) n.push(l.sD(`${e}`))
              else throw Error(`Invalid template literal part: ${e}`)
            ;((e._zod.pattern = RegExp(`^${n.join("")}$`)),
              (e._zod.parse = (n, a) => (
                "string" != typeof n.value
                  ? n.issues.push({ input: n.value, inst: e, expected: "string", code: "invalid_type" })
                  : ((e._zod.pattern.lastIndex = 0),
                    e._zod.pattern.test(n.value) ||
                      n.issues.push({
                        input: n.value,
                        inst: e,
                        code: "invalid_format",
                        format: t.format ?? "template_literal",
                        pattern: e._zod.pattern.source,
                      })),
                n
              )))
          }),
          eL = i.xI(
            "$ZodFunction",
            (e, t) => (
              p.init(e, t),
              Object.defineProperty(e, "_def", { value: t }),
              (e._zod.def = t),
              (e.implement = (t) => {
                if ("function" != typeof t) throw Error("implement() must be called with a function")
                return Object.defineProperty(
                  function (...n) {
                    let a = Reflect.apply(t, this, e._def.input ? (0, o.qg)(e._def.input, n) : n)
                    return e._def.output ? (0, o.qg)(e._def.output, a) : a
                  },
                  "_zod",
                  { value: e._zod, enumerable: !1 },
                )
              }),
              (e.implementAsync = (t) => {
                if ("function" != typeof t) throw Error("implementAsync() must be called with a function")
                return Object.defineProperty(
                  async function (...n) {
                    let a = e._def.input ? await (0, o.EJ)(e._def.input, n) : n,
                      i = await Reflect.apply(t, this, a)
                    return e._def.output ? await (0, o.EJ)(e._def.output, i) : i
                  },
                  "_zod",
                  { value: e._zod, enumerable: !1 },
                )
              }),
              (e._zod.parse = (t, n) => (
                "function" != typeof t.value
                  ? t.issues.push({ code: "invalid_type", expected: "function", input: t.value, inst: e })
                  : e._def.output && "promise" === e._def.output._zod.def.type
                    ? (t.value = e.implementAsync(t.value))
                    : (t.value = e.implement(t.value)),
                t
              )),
              (e.input = (...t) => {
                let n = e.constructor
                return new n(
                  Array.isArray(t[0])
                    ? {
                        type: "function",
                        input: new eh({ type: "tuple", items: t[0], rest: t[1] }),
                        output: e._def.output,
                      }
                    : { type: "function", input: t[0], output: e._def.output },
                )
              }),
              (e.output = (t) => new e.constructor({ type: "function", input: e._def.input, output: t })),
              e
            ),
          ),
          eU = i.xI("$ZodPromise", (e, t) => {
            ;(p.init(e, t),
              (e._zod.parse = (e, n) =>
                Promise.resolve(e.value).then((e) => t.innerType._zod.run({ value: e, issues: [] }, n))))
          }),
          eF = i.xI("$ZodLazy", (e, t) => {
            ;(p.init(e, t),
              l.gJ(e._zod, "innerType", () => (t._cachedInner || (t._cachedInner = t.getter()), t._cachedInner)),
              l.v5(e, "pattern", (e) => e.innerType?._zod?.pattern),
              l.v5(e, "propValues", (e) => e.innerType?._zod?.propValues),
              l.v5(e, "optin", (e) => e.innerType?._zod?.optin ?? void 0),
              l.v5(e, "optout", (e) => e.innerType?._zod?.optout ?? void 0),
              (e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n)))
          }),
          eq = i.xI("$ZodCustom", (e, t) => {
            ;(a.QP.init(e, t),
              p.init(e, t),
              (e._zod.parse = (e, t) => e),
              (e._zod.check = (n) => {
                let a = n.value,
                  i = t.fn(a)
                if (i instanceof Promise) return i.then((t) => eW(t, n, a, e))
                eW(i, n, a, e)
              }))
          })
        function eW(e, t, n, a) {
          if (!e) {
            let e = {
              code: "custom",
              input: n,
              inst: a,
              path: [...(a._zod.def.path ?? [])],
              continue: !a._zod.def.abort,
            }
            ;(a._zod.def.params && (e.params = a._zod.def.params), t.issues.push(l.sn(e)))
          }
        }
      },
      78468(e, t, n) {
        "use strict"
        var a = n(79105),
          i = n(43578)
        function r(e, ...t) {
          for (let n of t)
            for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && (0, i.Vy)(e, t, n[t])
          return e
        }
        function o(e) {
          let t = e?.target ?? "draft-2020-12"
          return (
            "draft-4" === t && (t = "draft-04"),
            "draft-7" === t && (t = "draft-07"),
            {
              processors: e.processors ?? {},
              metadataRegistry: e?.metadata ?? a.fd,
              target: t,
              unrepresentable: e?.unrepresentable ?? "throw",
              override: e?.override ?? (() => {}),
              io: e?.io ?? "output",
              counter: 0,
              seen: new Map(),
              sharedDefsExtractedFor: void 0,
              sharedEmitDoneFor: void 0,
              cycles: e?.cycles ?? "ref",
              reused: e?.reused ?? "inline",
              intersections: [],
              deferred: [],
              external: e?.external ?? void 0,
            }
          )
        }
        function s(e, t, n = { path: [], schemaPath: [] }) {
          var a
          let i = e._zod.def,
            o = t.seen.get(e)
          if (o) return (o.count++, n.schemaPath.includes(e) && (o.cycle = n.path), o.schema)
          let l = { schema: {}, count: 1, cycle: void 0, path: n.path }
          ;(t.seen.set(e, l), (t.sharedDefsExtractedFor = void 0), (t.sharedEmitDoneFor = void 0))
          let c = e._zod.toJSONSchema?.()
          if (c) l.schema = c
          else {
            let a = { ...n, schemaPath: [...n.schemaPath, e], path: n.path }
            if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, l.schema, a)
            else {
              let n = l.schema,
                r = t.processors[i.type]
              if (!r) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`)
              r(e, t, n, a)
            }
            let r = e._zod.parent
            r && (l.ref || (l.ref = r), s(r, t, a), (t.seen.get(r).isParent = !0))
          }
          let p = t.metadataRegistry.get(e)
          return (
            p && r(l.schema, p),
            "input" === t.io &&
              (function e(t, n) {
                let a = n ?? { seen: new Set() }
                if (a.seen.has(t)) return !1
                a.seen.add(t)
                let i = t._zod.def
                if ("transform" === i.type) return !0
                if ("array" === i.type) return e(i.element, a)
                if ("set" === i.type) return e(i.valueType, a)
                if ("lazy" === i.type) return e(i.getter(), a)
                if (
                  "promise" === i.type ||
                  "optional" === i.type ||
                  "nonoptional" === i.type ||
                  "nullable" === i.type ||
                  "readonly" === i.type ||
                  "default" === i.type ||
                  "prefault" === i.type ||
                  "catch" === i.type
                )
                  return e(i.innerType, a)
                if ("intersection" === i.type) return e(i.left, a) || e(i.right, a)
                if ("record" === i.type || "map" === i.type) return e(i.keyType, a) || e(i.valueType, a)
                if ("pipe" === i.type) return !!t._zod.traits.has("$ZodCodec") || e(i.in, a) || e(i.out, a)
                if ("object" === i.type) {
                  for (let t in i.shape) if (e(i.shape[t], a)) return !0
                  return !1
                }
                if ("union" === i.type) {
                  for (let t of i.options) if (e(t, a)) return !0
                  return !1
                }
                if ("tuple" === i.type) {
                  for (let t of i.items) if (e(t, a)) return !0
                  if (i.rest && e(i.rest, a)) return !0
                }
                return !1
              })(e) &&
              (delete l.schema.examples, delete l.schema.default),
            "input" === t.io && "_prefault" in l.schema && ((a = l.schema).default ?? (a.default = l.schema._prefault)),
            delete l.schema._prefault,
            t.seen.get(e).schema
          )
        }
        function l(e) {
          return e.replace(/~/g, "~0").replace(/\//g, "~1")
        }
        function c(e, t) {
          let n = e.seen.get(t)
          if (!n) throw Error("Unprocessed schema. This is a bug in Zod.")
          if (e.external && e.sharedDefsExtractedFor === e.external) return
          let a = new Map()
          for (let t of e.seen.entries()) {
            let n = e.metadataRegistry.get(t[0])?.id
            if (n) {
              let e = a.get(n)
              if (e && e !== t[0])
                throw Error(
                  `Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
                )
              a.set(n, t[0])
            }
          }
          let i = (t) => {
            if (t[1].schema.$ref) return
            let a = t[1],
              { ref: i, defId: r } = ((t) => {
                let a = "draft-2020-12" === e.target ? "$defs" : "definitions"
                if (e.external) {
                  let n = e.external.registry.get(t[0])?.id,
                    i = e.external.uri ?? ((e) => e)
                  if (n) return { ref: i(n) }
                  let r = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`
                  return ((t[1].defId = r), { defId: r, ref: `${i("__shared")}#/${a}/${l(r)}` })
                }
                let i = `#/${a}/`
                if (t[1] === n && !t[1].schema.id) return { ref: "#" }
                let r = t[1].schema.id ?? `__schema${e.counter++}`
                return { defId: r, ref: i + l(r) }
              })(t)
            ;((a.def = { ...a.schema }), r && (a.defId = r))
            let o = a.schema
            for (let e in o) delete o[e]
            o.$ref = i
          }
          if ("throw" === e.cycles)
            for (let t of e.seen.entries()) {
              let e = t[1]
              if (e.cycle)
                throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)
            }
          for (let n of e.seen.entries()) {
            let a = n[1]
            if (t === n[0]) {
              i(n)
              continue
            }
            if (e.external) {
              let a = e.external.registry.get(n[0])?.id
              if (t !== n[0] && a) {
                i(n)
                continue
              }
            }
            if (e.metadataRegistry.get(n[0])?.id || a.cycle) {
              i(n)
              continue
            }
            a.count > 1 && "ref" === e.reused && i(n)
          }
          e.external && (e.sharedDefsExtractedFor = e.external)
        }
        let p = new Set(["type", "properties", "required", "additionalProperties"]),
          u = ["oneOf", "anyOf"]
        function d(e) {
          let t = e.additionalProperties
          return void 0 === t || !1 === t || "object" != typeof t || null === t
            ? null
            : Object.keys(t).length
              ? t
              : null
        }
        function m(e) {
          let t = []
          for (let n of e) {
            if ("object" != typeof n || "object" !== n.type) return null
            for (let e in n) if (!p.has(e)) return null
            t.push(n)
          }
          let n = {},
            a = new Set()
          for (let e of t) {
            for (let a in e.properties) {
              if (Object.prototype.hasOwnProperty.call(n, a)) continue
              let e = []
              for (let n of t) {
                let t = n.properties?.[a] ?? d(n)
                null != t && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t))
              }
              let r = 1 === e.length ? e[0] : (m(e) ?? { allOf: e })
              ;(0, i.Vy)(n, a, r)
            }
            for (let t of e.required ?? []) a.add(t)
          }
          let r = { type: "object", properties: n }
          if ((a.size && (r.required = [...a]), t.every((e) => !1 === e.additionalProperties)))
            r.additionalProperties = !1
          else {
            let e = []
            for (let n of t) {
              let t = d(n)
              t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t)
            }
            1 === e.length ? (r.additionalProperties = e[0]) : e.length > 1 && (r.additionalProperties = { allOf: e })
          }
          return r
        }
        function f(e, t) {
          let n = e.seen.get(t)
          if (!n) throw Error("Unprocessed schema. This is a bug in Zod.")
          let a = (t) => {
            let n = e.seen.get(t)
            if (null === n.ref) return
            let i = n.def ?? n.schema,
              o = { ...i },
              s = n.ref
            if (((n.ref = null), s)) {
              a(s)
              let n = e.seen.get(s),
                l = n.schema
              if (
                (l.$ref && ("draft-07" === e.target || "draft-04" === e.target || "openapi-3.0" === e.target)
                  ? ((i.allOf = i.allOf ?? []), i.allOf.push(l))
                  : r(i, l),
                r(i, o),
                t._zod.parent === s)
              )
                for (let e in i) "$ref" !== e && "allOf" !== e && (e in o || delete i[e])
              if (l.$ref && n.def)
                for (let e in i)
                  "$ref" !== e &&
                    "allOf" !== e &&
                    e in n.def &&
                    JSON.stringify(i[e]) === JSON.stringify(n.def[e]) &&
                    delete i[e]
            }
            let l = t._zod.parent
            if (l && l !== s) {
              a(l)
              let t = e.seen.get(l)
              if (t?.schema.$ref && ((i.$ref = t.schema.$ref), t.def))
                for (let e in i)
                  "$ref" !== e &&
                    "allOf" !== e &&
                    e in t.def &&
                    JSON.stringify(i[e]) === JSON.stringify(t.def[e]) &&
                    delete i[e]
            }
            e.override({ zodSchema: t, jsonSchema: i, path: n.path ?? [] })
          }
          if (!e.external || e.sharedEmitDoneFor !== e.external) {
            for (let t of [...e.seen.entries()].reverse()) a(t[0])
            if ("openapi-3.0" !== e.target)
              for (let t of e.seen.entries())
                !(function e(t) {
                  let n = t.anyOf
                  if (!Array.isArray(n) || 0 === n.length || void 0 !== t.type) return
                  let a = []
                  for (let t of n) {
                    if (!t || "object" != typeof t) return
                    e(t)
                    let n = Object.keys(t)
                    if (1 !== n.length || "type" !== n[0]) return
                    let i = t.type
                    for (let e of Array.isArray(i) ? i : [i]) {
                      if ("string" != typeof e) return
                      a.includes(e) || a.push(e)
                    }
                  }
                  ;(delete t.anyOf, (t.type = 1 === a.length ? a[0] : a))
                })(t[1].def ?? t[1].schema)
            for (let t of e.deferred) t()
            if (e.intersections.length) {
              let t = new Map()
              for (let n of e.seen.values())
                for (let e of [n.schema, n.def]) {
                  let n = e?.allOf
                  if (!Array.isArray(n)) continue
                  let a = t.get(n)
                  a ? a.push(e) : t.set(n, [e])
                }
              for (let n of e.intersections)
                for (let e of t.get(n) ?? [])
                  !(function (e) {
                    let t = e.allOf
                    if (!Array.isArray(t) || t.length < 2) return
                    for (let t of p) if (t in e) return
                    let n = t.filter((e) => u.some((t) => Array.isArray(e[t]))),
                      a = null
                    if (n.length) {
                      let e = n[0],
                        i = u.find((t) => Array.isArray(e[t]))
                      if (1 !== Object.keys(e).length) return
                      let r = t.filter((t) => t !== e),
                        o = e[i].map((e) => m([...r, e]))
                      if (o.some((e) => !e)) return
                      a = { [i]: o }
                    } else a = m(t)
                    a && (delete e.allOf, r(e, a))
                  })(e)
            }
          }
          let o = {}
          if (
            ("draft-2020-12" === e.target
              ? (o.$schema = "https://json-schema.org/draft/2020-12/schema")
              : "draft-07" === e.target
                ? (o.$schema = "http://json-schema.org/draft-07/schema#")
                : "draft-04" === e.target
                  ? (o.$schema = "http://json-schema.org/draft-04/schema#")
                  : e.target,
            e.external?.uri)
          ) {
            let n = e.external.registry.get(t)?.id
            if (!n) throw Error("Schema is missing an `id` property")
            o.$id = e.external.uri(n)
          }
          r(o, n.defId ? n.schema : (n.def ?? n.schema))
          let s = e.metadataRegistry.get(t)?.id
          void 0 !== s && o.id === s && delete o.id
          let l = e.external?.defs ?? {}
          if (!e.external || e.sharedEmitDoneFor !== e.external)
            for (let t of e.seen.entries()) {
              let e = t[1]
              e.def && e.defId && (e.def.id === e.defId && delete e.def.id, (0, i.Vy)(l, e.defId, e.def))
            }
          ;(e.external && (e.sharedEmitDoneFor = e.external),
            e.external ||
              (Object.keys(l).length > 0 && ("draft-2020-12" === e.target ? (o.$defs = l) : (o.definitions = l))))
          try {
            let n = JSON.parse(JSON.stringify(o))
            return (
              Object.defineProperty(n, "~standard", {
                value: {
                  ...t["~standard"],
                  jsonSchema: { input: h(t, "input", e.processors), output: h(t, "output", e.processors) },
                },
                enumerable: !1,
                writable: !1,
              }),
              n
            )
          } catch (e) {
            throw Error("Error converting schema to JSON.")
          }
        }
        let h =
          (e, t, n = {}) =>
          (a) => {
            let { libraryOptions: i, target: r } = a ?? {},
              l = o({ ...(i ?? {}), target: r, io: t, processors: n })
            return (s(e, l), c(l, e), f(l, e))
          }
        n.d(
          t,
          {},
          {
            Lp: s,
            OA:
              (e, t = {}) =>
              (n) => {
                let a = o({ ...n, processors: t })
                return (s(e, a), c(a, e), f(a, e))
              },
            Wb: c,
            _S: function (e, t, n, a, i) {
              let r =
                "function" == typeof t.unrepresentable
                  ? t.unrepresentable({ zodSchema: e, path: a.path, message: i })
                  : t.unrepresentable
              if ("any" === r) return !1
              if (void 0 === r || "throw" === r) throw Error(i)
              return (Object.assign(n, r), !0)
            },
            az: o,
            jE: f,
            uE: h,
          },
        )
      },
      43578(e, t, n) {
        "use strict"
        let a
        n.d(t, {
          A2: () => C,
          B7: () => R,
          GW: () => ea,
          Gv: () => I,
          LG: () => d,
          MO: () => g,
          NM: () => $,
          NR: () => Y,
          O7: () => et,
          OH: () => Z,
          PO: () => c,
          QH: () => H,
          Qd: () => A,
          Rc: () => en,
          SS: () => em,
          UQ: () => k,
          Up: () => D,
          Vy: () => h,
          W0: () => q,
          X: () => ed,
          X$: () => U,
          Yv: () => _,
          bI: () => E,
          cJ: () => L,
          cl: () => p,
          d3: () => Q,
          gJ: () => f,
          gx: () => P,
          h1: () => W,
          hI: () => j,
          hi: () => V,
          iR: () => X,
          jD: () => es,
          jw: () => o,
          k8: () => s,
          lQ: () => J,
          mw: () => B,
          o8: () => z,
          ol: () => er,
          p6: () => u,
          qQ: () => O,
          qh: () => eo,
          rL: () => K,
          sD: () => T,
          sn: () => ei,
          un: () => el,
          v5: () => eu,
          w5: () => r,
          yG: () => S,
          zH: () => M,
          zM: () => w,
        })
        var i = n(23065)
        function r(e) {
          let t = Object.values(e).filter((e) => "number" == typeof e)
          return Object.entries(e)
            .filter(([e, n]) => -1 === t.indexOf(+e))
            .map(([e, t]) => t)
        }
        function o(e, t = "|") {
          return e.map((e) => R(e)).join(t)
        }
        function s(e, t) {
          return "bigint" == typeof t ? t.toString() : t
        }
        class l {
          constructor(e) {
            ;((this._getter = e), (this._value = void 0))
          }
          get value() {
            let e = this._getter
            return (void 0 !== e && ((this._value = e()), (this._getter = void 0)), this._value)
          }
        }
        function c(e) {
          return new l(e)
        }
        function p(e) {
          return null == e
        }
        function u(e) {
          let t = +!!e.startsWith("^"),
            n = e.endsWith("$") ? e.length - 1 : e.length
          return e.slice(t, n)
        }
        function d(e, t) {
          let n = e / t,
            a = Math.round(n),
            i = 4 * Number.EPSILON * Math.max(Math.abs(n), 1)
          return Math.abs(n - a) < i ? 0 : n - a
        }
        let m = Symbol("evaluating")
        function f(e, t, n) {
          let a
          Object.defineProperty(e, t, {
            get() {
              if (a !== m) return (void 0 === a && ((a = m), (a = n())), a)
            },
            set(n) {
              Object.defineProperty(e, t, { value: n })
            },
            configurable: !0,
          })
        }
        function h(e, t, n) {
          Object.defineProperty(e, t, { value: n, writable: !0, enumerable: !0, configurable: !0 })
        }
        function g(e) {
          let t = Object.getOwnPropertyDescriptor(e, "shape")
          return t?.get ? t.get.raw : t?.value
        }
        function v(e) {
          return g(e._zod.def) ?? e._zod.def.shape
        }
        function x(e, t, n) {
          Object.defineProperty(e, t, {
            get() {
              let e = n()
              return (h(this, t, e), e)
            },
            enumerable: !0,
            configurable: !0,
          })
        }
        function b(e, t, n) {
          t in e ? h(e, t, n) : (e[t] = n)
        }
        function y(e, t, n, a) {
          let i = v(t)
          for (let r of n) {
            let n = Object.getOwnPropertyDescriptor(i, r)
            n.enumerable &&
              (n.get
                ? x(e, r, () => {
                    let e = t._zod.def.shape[r]
                    return a ? a(e, r) : e
                  })
                : b(e, r, a ? a(n.value, r) : n.value))
          }
        }
        function w(...e) {
          let t = {}
          for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n))
          return Object.defineProperties({}, t)
        }
        function k(e) {
          return JSON.stringify(e)
        }
        function _(e) {
          return e
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "")
        }
        let P = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {}
        function I(e) {
          return "object" == typeof e && null !== e && !Array.isArray(e)
        }
        let j = c(() => {
          if (i.cr.jitless || ("u" > typeof navigator && navigator?.userAgent?.includes("Cloudflare"))) return !1
          try {
            return (Function(""), !0)
          } catch (e) {
            return !1
          }
        })
        function A(e) {
          if (!1 === I(e)) return !1
          let t = e.constructor
          if (void 0 === t || "function" != typeof t) return !0
          let n = t.prototype
          return !1 !== I(n) && !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf")
        }
        function S(e) {
          return A(e)
            ? { ...e }
            : Array.isArray(e)
              ? [...e]
              : e instanceof Map
                ? new Map(e)
                : e instanceof Set
                  ? new Set(e)
                  : e
        }
        let O = new Set(["string", "number", "symbol"]),
          E = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"])
        function T(e) {
          return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }
        function z(e, t, n) {
          let a = new e._zod.constr(t ?? e._zod.def)
          return ((!t || n?.parent) && (a._zod.parent = e), a)
        }
        function C(e) {
          if (!e) return {}
          if ("string" == typeof e) return { error: () => e }
          if (e?.message !== void 0) {
            if (e?.error !== void 0) throw Error("Cannot specify both `message` and `error` params")
            e.error = e.message
          }
          return (delete e.message, "string" == typeof e.error) ? { ...e, error: () => e.error } : e
        }
        function R(e) {
          return "bigint" == typeof e ? e.toString() + "n" : "string" == typeof e ? `"${e}"` : `${e}`
        }
        function $(e) {
          return Object.keys(e).filter((t) => void 0 !== e[t]._zod.optin && "optional" === e[t]._zod.optout)
        }
        let M = {
            safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
            int32: [-0x80000000, 0x7fffffff],
            uint32: [0, 0xffffffff],
            float32: [-34028234663852886e22, 34028234663852886e22],
            float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
          },
          Y = {
            int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")],
            uint64: [BigInt(0), BigInt("18446744073709551615")],
          }
        function D(e, t) {
          let n = e._zod.def,
            a = n.checks
          if (a && a.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements")
          let i = {}
          return (y(i, e, N(e, t)), z(e, w(n, { shape: i, checks: [] })))
        }
        function N(e, t) {
          let n = v(e),
            a = []
          for (let e of Reflect.ownKeys(t)) {
            if (!Object.getOwnPropertyDescriptor(n, e)?.enumerable) throw Error(`Unrecognized key: "${String(e)}"`)
            t[e] && a.push(e)
          }
          return a
        }
        function L(e, t) {
          let n = e._zod.def,
            a = n.checks
          if (a && a.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements")
          let i = new Set(N(e, t)),
            r = {}
          return (
            y(
              r,
              e,
              Reflect.ownKeys(v(e)).filter((e) => !i.has(e)),
            ),
            z(e, w(n, { shape: r, checks: [] }))
          )
        }
        function U(e, t) {
          if (!A(t)) throw Error("Invalid input to extend: expected a plain object")
          let n = e._zod.def.checks
          if (n && n.length > 0) {
            let n = v(e)
            for (let e of Reflect.ownKeys(t))
              if (void 0 !== Object.getOwnPropertyDescriptor(n, e))
                throw Error(
                  "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                )
          }
          return z(e, w(e._zod.def, { shape: F(e, t) }))
        }
        function F(e, t) {
          let n = {}
          y(n, e, Reflect.ownKeys(v(e)))
          for (let e of Reflect.ownKeys(t)) {
            let a = Object.getOwnPropertyDescriptor(t, e)
            a.enumerable && (a.get ? x(n, e, () => t[e]) : b(n, e, a.value))
          }
          return n
        }
        function q(e, t) {
          if (!A(t)) throw Error("Invalid input to safeExtend: expected a plain object")
          return z(e, w(e._zod.def, { shape: F(e, t) }))
        }
        function W(e, t) {
          if (!t?._zod?.def)
            throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.")
          if (e._zod.def.checks?.length)
            throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.")
          let n = {}
          ;(y(n, e, Reflect.ownKeys(v(e))), y(n, t, Reflect.ownKeys(v(t))))
          let a = w(e._zod.def, {
            shape: n,
            get catchall() {
              return t._zod.def.catchall
            },
            checks: t._zod.def.checks ?? [],
          })
          return z(e, a)
        }
        function Z(e, t, n, a = "partial") {
          let i = t._zod.def.checks
          if (i && i.length > 0) throw Error(`.${a}() cannot be used on object schemas containing refinements`)
          let r = n ? new Set(N(t, n)) : void 0,
            o = {}
          return (
            y(
              o,
              t,
              Reflect.ownKeys(v(t)),
              e && ((t, n) => (r && !r.has(n) ? t : new e({ type: "optional", innerType: t }))),
            ),
            z(t, w(t._zod.def, { shape: o, checks: [] }))
          )
        }
        function B(e, t, n) {
          let a = n ? new Set(N(t, n)) : void 0,
            i = {}
          return (
            y(i, t, Reflect.ownKeys(v(t)), (t, n) =>
              a && !a.has(n) ? t : new e({ type: "nonoptional", innerType: t }),
            ),
            z(t, w(t._zod.def, { shape: i }))
          )
        }
        function H(e, t = 0) {
          if (!0 === e.aborted) return !0
          for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0
          return !1
        }
        function K(e, t = 0) {
          if (!0 === e.aborted) return !0
          for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0
          return !1
        }
        function J(e, t) {
          return t.map((t) => (t.path ?? (t.path = []), t.path.unshift(e), t))
        }
        function G(e) {
          return "string" == typeof e ? e : e?.message
        }
        function V(e) {
          let t = []
          for (let n of e ?? []) {
            let e = n._zod.def
            if (!/_(length|size)$|_equals$/.test(e.check)) break
            let a = e.maximum ?? e.length ?? e.size
            a >= 0 && t.push([a, n])
          }
          return t
        }
        function Q(e, t, n) {
          var a
          for (let i = t; i < e.length; i++) (a = e[i]).schema ?? (a.schema = n)
        }
        function X(e, t, n) {
          let a = e.inst?._zod?.traits
          a?.has("$ZodType") && (a.has("$ZodCheck") ? (e.schema ?? (e.schema = e.inst)) : (e.schema = e.inst))
          let i = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0,
            r = e.message
              ? e.message
              : (G(e.inst?._zod.def?.error?.(e)) ??
                G(i?.(e)) ??
                G(t?.error?.(e)) ??
                G(n.customError?.(e)) ??
                G(n.localeError?.(e)) ??
                "Invalid input"),
            o = {}
          for (let t of Object.keys(e))
            "inst" !== t && "schema" !== t && "continue" !== t && "input" !== t && "__proto__" !== t && (o[t] = e[t])
          return (o.path ?? (o.path = []), (o.message = r), t?.reportInput && (o.input = e.input), o)
        }
        let ee = /[\uD800-\uDBFF]/
        function et(e) {
          let t = e.length
          if (!ee.test(e)) return t
          let n = t
          for (let a = 0; a < t - 1; a++)
            (64512 & e.charCodeAt(a)) == 55296 && (64512 & e.charCodeAt(a + 1)) == 56320 && (n--, a++)
          return n
        }
        function en(e) {
          return Array.isArray(e) ? "array" : "string" == typeof e ? "string" : "unknown"
        }
        function ea(e) {
          let t = typeof e
          switch (t) {
            case "number":
              return Number.isNaN(e) ? "nan" : "number"
            case "object":
              if (null === e) return "null"
              if (Array.isArray(e)) return "array"
              if (e && Object.getPrototypeOf(e) !== Object.prototype && "constructor" in e && e.constructor)
                return e.constructor.name
          }
          return t
        }
        function ei(...e) {
          let [t, n, a] = e
          return "string" == typeof t ? { message: t, code: "custom", input: n, inst: a } : { ...t }
        }
        function er(e, t) {
          for (let n in t) {
            let a = Object.getOwnPropertyDescriptor(t, n)
            a.get
              ? Object.defineProperty(e, n, { ...a, enumerable: !1 })
              : (function (e, t, n) {
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get() {
                      return this == null ? n : eo(this, t, n.bind(this))
                    },
                    set(e) {
                      eo(this, t, e)
                    },
                  })
                })(e, n, a.value)
          }
        }
        function eo(e, t, n, a = !0) {
          return (Object.defineProperty(e, t, { configurable: !0, writable: !0, enumerable: a, value: n }), n)
        }
        function es(e, t, n) {
          return eo(e, t, n, !1)
        }
        function el(e, t) {
          for (let n in e) {
            let a = e[n]
            Object.defineProperty(t, n, {
              configurable: !0,
              enumerable: !0,
              get() {
                return eo(this, n, a(this))
              },
              set(e) {
                eo(this, n, e)
              },
            })
          }
          return t
        }
        let ec = !1,
          ep = {
            configurable: !0,
            get() {
              ec = !0
            },
          }
        function eu(e, t, n) {
          let i = Object.getPrototypeOf(e._zod)
          if (t in i && a !== e._zod) {
            a = void 0
            return
          }
          ;((a = e._zod),
            Object.defineProperty(i, t, {
              configurable: !0,
              get() {
                Object.defineProperty(this, t, ep)
                let e = ec
                ec = !1
                try {
                  let a = n(this)
                  return (
                    ec ? delete this[t] : Object.defineProperty(this, t, { configurable: !0, writable: !0, value: a }),
                    (ec = ec || e),
                    a
                  )
                } catch (n) {
                  throw (delete this[t], (ec = ec || e), n)
                }
              },
              set(e) {
                Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e })
              },
            }))
        }
        function ed(e, t, n, a) {
          let i,
            r = t in (i = Object.getPrototypeOf(e)) ? void 0 : i
          r &&
            Object.defineProperty(r, t, {
              configurable: !0,
              get() {
                let e = { configurable: !0, writable: !0, enumerable: a, value: void 0 }
                return (
                  Object.defineProperty(this, t, e),
                  (e.value = n(this)),
                  Object.defineProperty(this, t, e),
                  e.value
                )
              },
              set(e) {
                Object.defineProperty(this, t, { configurable: !0, writable: !0, enumerable: a, value: e })
              },
            })
        }
        function em(e) {
          let t = () => e
          return ((t["~constantCatch"] = !0), t)
        }
      },
      35796(e) {
        "use strict"
        e.exports = JSON.parse(
          '{"application/1d-interleaved-parityfec":{"source":"iana"},"application/3gpdash-qoe-report+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/3gpp-ims+xml":{"source":"iana","compressible":true},"application/3gpphal+json":{"source":"iana","compressible":true},"application/3gpphalforms+json":{"source":"iana","compressible":true},"application/a2l":{"source":"iana"},"application/ace+cbor":{"source":"iana"},"application/activemessage":{"source":"iana"},"application/activity+json":{"source":"iana","compressible":true},"application/alto-costmap+json":{"source":"iana","compressible":true},"application/alto-costmapfilter+json":{"source":"iana","compressible":true},"application/alto-directory+json":{"source":"iana","compressible":true},"application/alto-endpointcost+json":{"source":"iana","compressible":true},"application/alto-endpointcostparams+json":{"source":"iana","compressible":true},"application/alto-endpointprop+json":{"source":"iana","compressible":true},"application/alto-endpointpropparams+json":{"source":"iana","compressible":true},"application/alto-error+json":{"source":"iana","compressible":true},"application/alto-networkmap+json":{"source":"iana","compressible":true},"application/alto-networkmapfilter+json":{"source":"iana","compressible":true},"application/alto-updatestreamcontrol+json":{"source":"iana","compressible":true},"application/alto-updatestreamparams+json":{"source":"iana","compressible":true},"application/aml":{"source":"iana"},"application/andrew-inset":{"source":"iana","extensions":["ez"]},"application/applefile":{"source":"iana"},"application/applixware":{"source":"apache","extensions":["aw"]},"application/at+jwt":{"source":"iana"},"application/atf":{"source":"iana"},"application/atfx":{"source":"iana"},"application/atom+xml":{"source":"iana","compressible":true,"extensions":["atom"]},"application/atomcat+xml":{"source":"iana","compressible":true,"extensions":["atomcat"]},"application/atomdeleted+xml":{"source":"iana","compressible":true,"extensions":["atomdeleted"]},"application/atomicmail":{"source":"iana"},"application/atomsvc+xml":{"source":"iana","compressible":true,"extensions":["atomsvc"]},"application/atsc-dwd+xml":{"source":"iana","compressible":true,"extensions":["dwd"]},"application/atsc-dynamic-event-message":{"source":"iana"},"application/atsc-held+xml":{"source":"iana","compressible":true,"extensions":["held"]},"application/atsc-rdt+json":{"source":"iana","compressible":true},"application/atsc-rsat+xml":{"source":"iana","compressible":true,"extensions":["rsat"]},"application/atxml":{"source":"iana"},"application/auth-policy+xml":{"source":"iana","compressible":true},"application/bacnet-xdd+zip":{"source":"iana","compressible":false},"application/batch-smtp":{"source":"iana"},"application/bdoc":{"compressible":false,"extensions":["bdoc"]},"application/beep+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/calendar+json":{"source":"iana","compressible":true},"application/calendar+xml":{"source":"iana","compressible":true,"extensions":["xcs"]},"application/call-completion":{"source":"iana"},"application/cals-1840":{"source":"iana"},"application/captive+json":{"source":"iana","compressible":true},"application/cbor":{"source":"iana"},"application/cbor-seq":{"source":"iana"},"application/cccex":{"source":"iana"},"application/ccmp+xml":{"source":"iana","compressible":true},"application/ccxml+xml":{"source":"iana","compressible":true,"extensions":["ccxml"]},"application/cdfx+xml":{"source":"iana","compressible":true,"extensions":["cdfx"]},"application/cdmi-capability":{"source":"iana","extensions":["cdmia"]},"application/cdmi-container":{"source":"iana","extensions":["cdmic"]},"application/cdmi-domain":{"source":"iana","extensions":["cdmid"]},"application/cdmi-object":{"source":"iana","extensions":["cdmio"]},"application/cdmi-queue":{"source":"iana","extensions":["cdmiq"]},"application/cdni":{"source":"iana"},"application/cea":{"source":"iana"},"application/cea-2018+xml":{"source":"iana","compressible":true},"application/cellml+xml":{"source":"iana","compressible":true},"application/cfw":{"source":"iana"},"application/city+json":{"source":"iana","compressible":true},"application/clr":{"source":"iana"},"application/clue+xml":{"source":"iana","compressible":true},"application/clue_info+xml":{"source":"iana","compressible":true},"application/cms":{"source":"iana"},"application/cnrp+xml":{"source":"iana","compressible":true},"application/coap-group+json":{"source":"iana","compressible":true},"application/coap-payload":{"source":"iana"},"application/commonground":{"source":"iana"},"application/conference-info+xml":{"source":"iana","compressible":true},"application/cose":{"source":"iana"},"application/cose-key":{"source":"iana"},"application/cose-key-set":{"source":"iana"},"application/cpl+xml":{"source":"iana","compressible":true,"extensions":["cpl"]},"application/csrattrs":{"source":"iana"},"application/csta+xml":{"source":"iana","compressible":true},"application/cstadata+xml":{"source":"iana","compressible":true},"application/csvm+json":{"source":"iana","compressible":true},"application/cu-seeme":{"source":"apache","extensions":["cu"]},"application/cwt":{"source":"iana"},"application/cybercash":{"source":"iana"},"application/dart":{"compressible":true},"application/dash+xml":{"source":"iana","compressible":true,"extensions":["mpd"]},"application/dash-patch+xml":{"source":"iana","compressible":true,"extensions":["mpp"]},"application/dashdelta":{"source":"iana"},"application/davmount+xml":{"source":"iana","compressible":true,"extensions":["davmount"]},"application/dca-rft":{"source":"iana"},"application/dcd":{"source":"iana"},"application/dec-dx":{"source":"iana"},"application/dialog-info+xml":{"source":"iana","compressible":true},"application/dicom":{"source":"iana"},"application/dicom+json":{"source":"iana","compressible":true},"application/dicom+xml":{"source":"iana","compressible":true},"application/dii":{"source":"iana"},"application/dit":{"source":"iana"},"application/dns":{"source":"iana"},"application/dns+json":{"source":"iana","compressible":true},"application/dns-message":{"source":"iana"},"application/docbook+xml":{"source":"apache","compressible":true,"extensions":["dbk"]},"application/dots+cbor":{"source":"iana"},"application/dskpp+xml":{"source":"iana","compressible":true},"application/dssc+der":{"source":"iana","extensions":["dssc"]},"application/dssc+xml":{"source":"iana","compressible":true,"extensions":["xdssc"]},"application/dvcs":{"source":"iana"},"application/ecmascript":{"source":"iana","compressible":true,"extensions":["es","ecma"]},"application/edi-consent":{"source":"iana"},"application/edi-x12":{"source":"iana","compressible":false},"application/edifact":{"source":"iana","compressible":false},"application/efi":{"source":"iana"},"application/elm+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/elm+xml":{"source":"iana","compressible":true},"application/emergencycalldata.cap+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/emergencycalldata.comment+xml":{"source":"iana","compressible":true},"application/emergencycalldata.control+xml":{"source":"iana","compressible":true},"application/emergencycalldata.deviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.ecall.msd":{"source":"iana"},"application/emergencycalldata.providerinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.serviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.subscriberinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.veds+xml":{"source":"iana","compressible":true},"application/emma+xml":{"source":"iana","compressible":true,"extensions":["emma"]},"application/emotionml+xml":{"source":"iana","compressible":true,"extensions":["emotionml"]},"application/encaprtp":{"source":"iana"},"application/epp+xml":{"source":"iana","compressible":true},"application/epub+zip":{"source":"iana","compressible":false,"extensions":["epub"]},"application/eshop":{"source":"iana"},"application/exi":{"source":"iana","extensions":["exi"]},"application/expect-ct-report+json":{"source":"iana","compressible":true},"application/express":{"source":"iana","extensions":["exp"]},"application/fastinfoset":{"source":"iana"},"application/fastsoap":{"source":"iana"},"application/fdt+xml":{"source":"iana","compressible":true,"extensions":["fdt"]},"application/fhir+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/fhir+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/fido.trusted-apps+json":{"compressible":true},"application/fits":{"source":"iana"},"application/flexfec":{"source":"iana"},"application/font-sfnt":{"source":"iana"},"application/font-tdpfr":{"source":"iana","extensions":["pfr"]},"application/font-woff":{"source":"iana","compressible":false},"application/framework-attributes+xml":{"source":"iana","compressible":true},"application/geo+json":{"source":"iana","compressible":true,"extensions":["geojson"]},"application/geo+json-seq":{"source":"iana"},"application/geopackage+sqlite3":{"source":"iana"},"application/geoxacml+xml":{"source":"iana","compressible":true},"application/gltf-buffer":{"source":"iana"},"application/gml+xml":{"source":"iana","compressible":true,"extensions":["gml"]},"application/gpx+xml":{"source":"apache","compressible":true,"extensions":["gpx"]},"application/gxf":{"source":"apache","extensions":["gxf"]},"application/gzip":{"source":"iana","compressible":false,"extensions":["gz"]},"application/h224":{"source":"iana"},"application/held+xml":{"source":"iana","compressible":true},"application/hjson":{"extensions":["hjson"]},"application/http":{"source":"iana"},"application/hyperstudio":{"source":"iana","extensions":["stk"]},"application/ibe-key-request+xml":{"source":"iana","compressible":true},"application/ibe-pkg-reply+xml":{"source":"iana","compressible":true},"application/ibe-pp-data":{"source":"iana"},"application/iges":{"source":"iana"},"application/im-iscomposing+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/index":{"source":"iana"},"application/index.cmd":{"source":"iana"},"application/index.obj":{"source":"iana"},"application/index.response":{"source":"iana"},"application/index.vnd":{"source":"iana"},"application/inkml+xml":{"source":"iana","compressible":true,"extensions":["ink","inkml"]},"application/iotp":{"source":"iana"},"application/ipfix":{"source":"iana","extensions":["ipfix"]},"application/ipp":{"source":"iana"},"application/isup":{"source":"iana"},"application/its+xml":{"source":"iana","compressible":true,"extensions":["its"]},"application/java-archive":{"source":"apache","compressible":false,"extensions":["jar","war","ear"]},"application/java-serialized-object":{"source":"apache","compressible":false,"extensions":["ser"]},"application/java-vm":{"source":"apache","compressible":false,"extensions":["class"]},"application/javascript":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["js","mjs"]},"application/jf2feed+json":{"source":"iana","compressible":true},"application/jose":{"source":"iana"},"application/jose+json":{"source":"iana","compressible":true},"application/jrd+json":{"source":"iana","compressible":true},"application/jscalendar+json":{"source":"iana","compressible":true},"application/json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["json","map"]},"application/json-patch+json":{"source":"iana","compressible":true},"application/json-seq":{"source":"iana"},"application/json5":{"extensions":["json5"]},"application/jsonml+json":{"source":"apache","compressible":true,"extensions":["jsonml"]},"application/jwk+json":{"source":"iana","compressible":true},"application/jwk-set+json":{"source":"iana","compressible":true},"application/jwt":{"source":"iana"},"application/kpml-request+xml":{"source":"iana","compressible":true},"application/kpml-response+xml":{"source":"iana","compressible":true},"application/ld+json":{"source":"iana","compressible":true,"extensions":["jsonld"]},"application/lgr+xml":{"source":"iana","compressible":true,"extensions":["lgr"]},"application/link-format":{"source":"iana"},"application/load-control+xml":{"source":"iana","compressible":true},"application/lost+xml":{"source":"iana","compressible":true,"extensions":["lostxml"]},"application/lostsync+xml":{"source":"iana","compressible":true},"application/lpf+zip":{"source":"iana","compressible":false},"application/lxf":{"source":"iana"},"application/mac-binhex40":{"source":"iana","extensions":["hqx"]},"application/mac-compactpro":{"source":"apache","extensions":["cpt"]},"application/macwriteii":{"source":"iana"},"application/mads+xml":{"source":"iana","compressible":true,"extensions":["mads"]},"application/manifest+json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["webmanifest"]},"application/marc":{"source":"iana","extensions":["mrc"]},"application/marcxml+xml":{"source":"iana","compressible":true,"extensions":["mrcx"]},"application/mathematica":{"source":"iana","extensions":["ma","nb","mb"]},"application/mathml+xml":{"source":"iana","compressible":true,"extensions":["mathml"]},"application/mathml-content+xml":{"source":"iana","compressible":true},"application/mathml-presentation+xml":{"source":"iana","compressible":true},"application/mbms-associated-procedure-description+xml":{"source":"iana","compressible":true},"application/mbms-deregister+xml":{"source":"iana","compressible":true},"application/mbms-envelope+xml":{"source":"iana","compressible":true},"application/mbms-msk+xml":{"source":"iana","compressible":true},"application/mbms-msk-response+xml":{"source":"iana","compressible":true},"application/mbms-protection-description+xml":{"source":"iana","compressible":true},"application/mbms-reception-report+xml":{"source":"iana","compressible":true},"application/mbms-register+xml":{"source":"iana","compressible":true},"application/mbms-register-response+xml":{"source":"iana","compressible":true},"application/mbms-schedule+xml":{"source":"iana","compressible":true},"application/mbms-user-service-description+xml":{"source":"iana","compressible":true},"application/mbox":{"source":"iana","extensions":["mbox"]},"application/media-policy-dataset+xml":{"source":"iana","compressible":true,"extensions":["mpf"]},"application/media_control+xml":{"source":"iana","compressible":true},"application/mediaservercontrol+xml":{"source":"iana","compressible":true,"extensions":["mscml"]},"application/merge-patch+json":{"source":"iana","compressible":true},"application/metalink+xml":{"source":"apache","compressible":true,"extensions":["metalink"]},"application/metalink4+xml":{"source":"iana","compressible":true,"extensions":["meta4"]},"application/mets+xml":{"source":"iana","compressible":true,"extensions":["mets"]},"application/mf4":{"source":"iana"},"application/mikey":{"source":"iana"},"application/mipc":{"source":"iana"},"application/missing-blocks+cbor-seq":{"source":"iana"},"application/mmt-aei+xml":{"source":"iana","compressible":true,"extensions":["maei"]},"application/mmt-usd+xml":{"source":"iana","compressible":true,"extensions":["musd"]},"application/mods+xml":{"source":"iana","compressible":true,"extensions":["mods"]},"application/moss-keys":{"source":"iana"},"application/moss-signature":{"source":"iana"},"application/mosskey-data":{"source":"iana"},"application/mosskey-request":{"source":"iana"},"application/mp21":{"source":"iana","extensions":["m21","mp21"]},"application/mp4":{"source":"iana","extensions":["mp4s","m4p"]},"application/mpeg4-generic":{"source":"iana"},"application/mpeg4-iod":{"source":"iana"},"application/mpeg4-iod-xmt":{"source":"iana"},"application/mrb-consumer+xml":{"source":"iana","compressible":true},"application/mrb-publish+xml":{"source":"iana","compressible":true},"application/msc-ivr+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msc-mixer+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msword":{"source":"iana","compressible":false,"extensions":["doc","dot"]},"application/mud+json":{"source":"iana","compressible":true},"application/multipart-core":{"source":"iana"},"application/mxf":{"source":"iana","extensions":["mxf"]},"application/n-quads":{"source":"iana","extensions":["nq"]},"application/n-triples":{"source":"iana","extensions":["nt"]},"application/nasdata":{"source":"iana"},"application/news-checkgroups":{"source":"iana","charset":"US-ASCII"},"application/news-groupinfo":{"source":"iana","charset":"US-ASCII"},"application/news-transmission":{"source":"iana"},"application/nlsml+xml":{"source":"iana","compressible":true},"application/node":{"source":"iana","extensions":["cjs"]},"application/nss":{"source":"iana"},"application/oauth-authz-req+jwt":{"source":"iana"},"application/oblivious-dns-message":{"source":"iana"},"application/ocsp-request":{"source":"iana"},"application/ocsp-response":{"source":"iana"},"application/octet-stream":{"source":"iana","compressible":false,"extensions":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{"source":"iana","extensions":["oda"]},"application/odm+xml":{"source":"iana","compressible":true},"application/odx":{"source":"iana"},"application/oebps-package+xml":{"source":"iana","compressible":true,"extensions":["opf"]},"application/ogg":{"source":"iana","compressible":false,"extensions":["ogx"]},"application/omdoc+xml":{"source":"apache","compressible":true,"extensions":["omdoc"]},"application/onenote":{"source":"apache","extensions":["onetoc","onetoc2","onetmp","onepkg"]},"application/opc-nodeset+xml":{"source":"iana","compressible":true},"application/oscore":{"source":"iana"},"application/oxps":{"source":"iana","extensions":["oxps"]},"application/p21":{"source":"iana"},"application/p21+zip":{"source":"iana","compressible":false},"application/p2p-overlay+xml":{"source":"iana","compressible":true,"extensions":["relo"]},"application/parityfec":{"source":"iana"},"application/passport":{"source":"iana"},"application/patch-ops-error+xml":{"source":"iana","compressible":true,"extensions":["xer"]},"application/pdf":{"source":"iana","compressible":false,"extensions":["pdf"]},"application/pdx":{"source":"iana"},"application/pem-certificate-chain":{"source":"iana"},"application/pgp-encrypted":{"source":"iana","compressible":false,"extensions":["pgp"]},"application/pgp-keys":{"source":"iana","extensions":["asc"]},"application/pgp-signature":{"source":"iana","extensions":["asc","sig"]},"application/pics-rules":{"source":"apache","extensions":["prf"]},"application/pidf+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pidf-diff+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pkcs10":{"source":"iana","extensions":["p10"]},"application/pkcs12":{"source":"iana"},"application/pkcs7-mime":{"source":"iana","extensions":["p7m","p7c"]},"application/pkcs7-signature":{"source":"iana","extensions":["p7s"]},"application/pkcs8":{"source":"iana","extensions":["p8"]},"application/pkcs8-encrypted":{"source":"iana"},"application/pkix-attr-cert":{"source":"iana","extensions":["ac"]},"application/pkix-cert":{"source":"iana","extensions":["cer"]},"application/pkix-crl":{"source":"iana","extensions":["crl"]},"application/pkix-pkipath":{"source":"iana","extensions":["pkipath"]},"application/pkixcmp":{"source":"iana","extensions":["pki"]},"application/pls+xml":{"source":"iana","compressible":true,"extensions":["pls"]},"application/poc-settings+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/postscript":{"source":"iana","compressible":true,"extensions":["ai","eps","ps"]},"application/ppsp-tracker+json":{"source":"iana","compressible":true},"application/problem+json":{"source":"iana","compressible":true},"application/problem+xml":{"source":"iana","compressible":true},"application/provenance+xml":{"source":"iana","compressible":true,"extensions":["provx"]},"application/prs.alvestrand.titrax-sheet":{"source":"iana"},"application/prs.cww":{"source":"iana","extensions":["cww"]},"application/prs.cyn":{"source":"iana","charset":"7-BIT"},"application/prs.hpub+zip":{"source":"iana","compressible":false},"application/prs.nprend":{"source":"iana"},"application/prs.plucker":{"source":"iana"},"application/prs.rdf-xml-crypt":{"source":"iana"},"application/prs.xsf+xml":{"source":"iana","compressible":true},"application/pskc+xml":{"source":"iana","compressible":true,"extensions":["pskcxml"]},"application/pvd+json":{"source":"iana","compressible":true},"application/qsig":{"source":"iana"},"application/raml+yaml":{"compressible":true,"extensions":["raml"]},"application/raptorfec":{"source":"iana"},"application/rdap+json":{"source":"iana","compressible":true},"application/rdf+xml":{"source":"iana","compressible":true,"extensions":["rdf","owl"]},"application/reginfo+xml":{"source":"iana","compressible":true,"extensions":["rif"]},"application/relax-ng-compact-syntax":{"source":"iana","extensions":["rnc"]},"application/remote-printing":{"source":"iana"},"application/reputon+json":{"source":"iana","compressible":true},"application/resource-lists+xml":{"source":"iana","compressible":true,"extensions":["rl"]},"application/resource-lists-diff+xml":{"source":"iana","compressible":true,"extensions":["rld"]},"application/rfc+xml":{"source":"iana","compressible":true},"application/riscos":{"source":"iana"},"application/rlmi+xml":{"source":"iana","compressible":true},"application/rls-services+xml":{"source":"iana","compressible":true,"extensions":["rs"]},"application/route-apd+xml":{"source":"iana","compressible":true,"extensions":["rapd"]},"application/route-s-tsid+xml":{"source":"iana","compressible":true,"extensions":["sls"]},"application/route-usd+xml":{"source":"iana","compressible":true,"extensions":["rusd"]},"application/rpki-ghostbusters":{"source":"iana","extensions":["gbr"]},"application/rpki-manifest":{"source":"iana","extensions":["mft"]},"application/rpki-publication":{"source":"iana"},"application/rpki-roa":{"source":"iana","extensions":["roa"]},"application/rpki-updown":{"source":"iana"},"application/rsd+xml":{"source":"apache","compressible":true,"extensions":["rsd"]},"application/rss+xml":{"source":"apache","compressible":true,"extensions":["rss"]},"application/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"application/rtploopback":{"source":"iana"},"application/rtx":{"source":"iana"},"application/samlassertion+xml":{"source":"iana","compressible":true},"application/samlmetadata+xml":{"source":"iana","compressible":true},"application/sarif+json":{"source":"iana","compressible":true},"application/sarif-external-properties+json":{"source":"iana","compressible":true},"application/sbe":{"source":"iana"},"application/sbml+xml":{"source":"iana","compressible":true,"extensions":["sbml"]},"application/scaip+xml":{"source":"iana","compressible":true},"application/scim+json":{"source":"iana","compressible":true},"application/scvp-cv-request":{"source":"iana","extensions":["scq"]},"application/scvp-cv-response":{"source":"iana","extensions":["scs"]},"application/scvp-vp-request":{"source":"iana","extensions":["spq"]},"application/scvp-vp-response":{"source":"iana","extensions":["spp"]},"application/sdp":{"source":"iana","extensions":["sdp"]},"application/secevent+jwt":{"source":"iana"},"application/senml+cbor":{"source":"iana"},"application/senml+json":{"source":"iana","compressible":true},"application/senml+xml":{"source":"iana","compressible":true,"extensions":["senmlx"]},"application/senml-etch+cbor":{"source":"iana"},"application/senml-etch+json":{"source":"iana","compressible":true},"application/senml-exi":{"source":"iana"},"application/sensml+cbor":{"source":"iana"},"application/sensml+json":{"source":"iana","compressible":true},"application/sensml+xml":{"source":"iana","compressible":true,"extensions":["sensmlx"]},"application/sensml-exi":{"source":"iana"},"application/sep+xml":{"source":"iana","compressible":true},"application/sep-exi":{"source":"iana"},"application/session-info":{"source":"iana"},"application/set-payment":{"source":"iana"},"application/set-payment-initiation":{"source":"iana","extensions":["setpay"]},"application/set-registration":{"source":"iana"},"application/set-registration-initiation":{"source":"iana","extensions":["setreg"]},"application/sgml":{"source":"iana"},"application/sgml-open-catalog":{"source":"iana"},"application/shf+xml":{"source":"iana","compressible":true,"extensions":["shf"]},"application/sieve":{"source":"iana","extensions":["siv","sieve"]},"application/simple-filter+xml":{"source":"iana","compressible":true},"application/simple-message-summary":{"source":"iana"},"application/simplesymbolcontainer":{"source":"iana"},"application/sipc":{"source":"iana"},"application/slate":{"source":"iana"},"application/smil":{"source":"iana"},"application/smil+xml":{"source":"iana","compressible":true,"extensions":["smi","smil"]},"application/smpte336m":{"source":"iana"},"application/soap+fastinfoset":{"source":"iana"},"application/soap+xml":{"source":"iana","compressible":true},"application/sparql-query":{"source":"iana","extensions":["rq"]},"application/sparql-results+xml":{"source":"iana","compressible":true,"extensions":["srx"]},"application/spdx+json":{"source":"iana","compressible":true},"application/spirits-event+xml":{"source":"iana","compressible":true},"application/sql":{"source":"iana"},"application/srgs":{"source":"iana","extensions":["gram"]},"application/srgs+xml":{"source":"iana","compressible":true,"extensions":["grxml"]},"application/sru+xml":{"source":"iana","compressible":true,"extensions":["sru"]},"application/ssdl+xml":{"source":"apache","compressible":true,"extensions":["ssdl"]},"application/ssml+xml":{"source":"iana","compressible":true,"extensions":["ssml"]},"application/stix+json":{"source":"iana","compressible":true},"application/swid+xml":{"source":"iana","compressible":true,"extensions":["swidtag"]},"application/tamp-apex-update":{"source":"iana"},"application/tamp-apex-update-confirm":{"source":"iana"},"application/tamp-community-update":{"source":"iana"},"application/tamp-community-update-confirm":{"source":"iana"},"application/tamp-error":{"source":"iana"},"application/tamp-sequence-adjust":{"source":"iana"},"application/tamp-sequence-adjust-confirm":{"source":"iana"},"application/tamp-status-query":{"source":"iana"},"application/tamp-status-response":{"source":"iana"},"application/tamp-update":{"source":"iana"},"application/tamp-update-confirm":{"source":"iana"},"application/tar":{"compressible":true},"application/taxii+json":{"source":"iana","compressible":true},"application/td+json":{"source":"iana","compressible":true},"application/tei+xml":{"source":"iana","compressible":true,"extensions":["tei","teicorpus"]},"application/tetra_isi":{"source":"iana"},"application/thraud+xml":{"source":"iana","compressible":true,"extensions":["tfi"]},"application/timestamp-query":{"source":"iana"},"application/timestamp-reply":{"source":"iana"},"application/timestamped-data":{"source":"iana","extensions":["tsd"]},"application/tlsrpt+gzip":{"source":"iana"},"application/tlsrpt+json":{"source":"iana","compressible":true},"application/tnauthlist":{"source":"iana"},"application/token-introspection+jwt":{"source":"iana"},"application/toml":{"compressible":true,"extensions":["toml"]},"application/trickle-ice-sdpfrag":{"source":"iana"},"application/trig":{"source":"iana","extensions":["trig"]},"application/ttml+xml":{"source":"iana","compressible":true,"extensions":["ttml"]},"application/tve-trigger":{"source":"iana"},"application/tzif":{"source":"iana"},"application/tzif-leap":{"source":"iana"},"application/ubjson":{"compressible":false,"extensions":["ubj"]},"application/ulpfec":{"source":"iana"},"application/urc-grpsheet+xml":{"source":"iana","compressible":true},"application/urc-ressheet+xml":{"source":"iana","compressible":true,"extensions":["rsheet"]},"application/urc-targetdesc+xml":{"source":"iana","compressible":true,"extensions":["td"]},"application/urc-uisocketdesc+xml":{"source":"iana","compressible":true},"application/vcard+json":{"source":"iana","compressible":true},"application/vcard+xml":{"source":"iana","compressible":true},"application/vemmi":{"source":"iana"},"application/vividence.scriptfile":{"source":"apache"},"application/vnd.1000minds.decision-model+xml":{"source":"iana","compressible":true,"extensions":["1km"]},"application/vnd.3gpp-prose+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc3ch+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-v2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.5gnas":{"source":"iana"},"application/vnd.3gpp.access-transfer-events+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.bsf+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gmop+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gtpc":{"source":"iana"},"application/vnd.3gpp.interworking-data":{"source":"iana"},"application/vnd.3gpp.lpp":{"source":"iana"},"application/vnd.3gpp.mc-signalling-ear":{"source":"iana"},"application/vnd.3gpp.mcdata-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-payload":{"source":"iana"},"application/vnd.3gpp.mcdata-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-signalling":{"source":"iana"},"application/vnd.3gpp.mcdata-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-floor-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-signed+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-init-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-transmission-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mid-call+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ngap":{"source":"iana"},"application/vnd.3gpp.pfcp":{"source":"iana"},"application/vnd.3gpp.pic-bw-large":{"source":"iana","extensions":["plb"]},"application/vnd.3gpp.pic-bw-small":{"source":"iana","extensions":["psb"]},"application/vnd.3gpp.pic-bw-var":{"source":"iana","extensions":["pvb"]},"application/vnd.3gpp.s1ap":{"source":"iana"},"application/vnd.3gpp.sms":{"source":"iana"},"application/vnd.3gpp.sms+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-ext+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.state-and-event-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ussd+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.bcmcsinfo+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.sms":{"source":"iana"},"application/vnd.3gpp2.tcap":{"source":"iana","extensions":["tcap"]},"application/vnd.3lightssoftware.imagescal":{"source":"iana"},"application/vnd.3m.post-it-notes":{"source":"iana","extensions":["pwn"]},"application/vnd.accpac.simply.aso":{"source":"iana","extensions":["aso"]},"application/vnd.accpac.simply.imp":{"source":"iana","extensions":["imp"]},"application/vnd.acucobol":{"source":"iana","extensions":["acu"]},"application/vnd.acucorp":{"source":"iana","extensions":["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{"source":"apache","compressible":false,"extensions":["air"]},"application/vnd.adobe.flash.movie":{"source":"iana"},"application/vnd.adobe.formscentral.fcdt":{"source":"iana","extensions":["fcdt"]},"application/vnd.adobe.fxp":{"source":"iana","extensions":["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{"source":"iana"},"application/vnd.adobe.xdp+xml":{"source":"iana","compressible":true,"extensions":["xdp"]},"application/vnd.adobe.xfdf":{"source":"iana","extensions":["xfdf"]},"application/vnd.aether.imp":{"source":"iana"},"application/vnd.afpc.afplinedata":{"source":"iana"},"application/vnd.afpc.afplinedata-pagedef":{"source":"iana"},"application/vnd.afpc.cmoca-cmresource":{"source":"iana"},"application/vnd.afpc.foca-charset":{"source":"iana"},"application/vnd.afpc.foca-codedfont":{"source":"iana"},"application/vnd.afpc.foca-codepage":{"source":"iana"},"application/vnd.afpc.modca":{"source":"iana"},"application/vnd.afpc.modca-cmtable":{"source":"iana"},"application/vnd.afpc.modca-formdef":{"source":"iana"},"application/vnd.afpc.modca-mediummap":{"source":"iana"},"application/vnd.afpc.modca-objectcontainer":{"source":"iana"},"application/vnd.afpc.modca-overlay":{"source":"iana"},"application/vnd.afpc.modca-pagesegment":{"source":"iana"},"application/vnd.age":{"source":"iana","extensions":["age"]},"application/vnd.ah-barcode":{"source":"iana"},"application/vnd.ahead.space":{"source":"iana","extensions":["ahead"]},"application/vnd.airzip.filesecure.azf":{"source":"iana","extensions":["azf"]},"application/vnd.airzip.filesecure.azs":{"source":"iana","extensions":["azs"]},"application/vnd.amadeus+json":{"source":"iana","compressible":true},"application/vnd.amazon.ebook":{"source":"apache","extensions":["azw"]},"application/vnd.amazon.mobi8-ebook":{"source":"iana"},"application/vnd.americandynamics.acc":{"source":"iana","extensions":["acc"]},"application/vnd.amiga.ami":{"source":"iana","extensions":["ami"]},"application/vnd.amundsen.maze+xml":{"source":"iana","compressible":true},"application/vnd.android.ota":{"source":"iana"},"application/vnd.android.package-archive":{"source":"apache","compressible":false,"extensions":["apk"]},"application/vnd.anki":{"source":"iana"},"application/vnd.anser-web-certificate-issue-initiation":{"source":"iana","extensions":["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{"source":"apache","extensions":["fti"]},"application/vnd.antix.game-component":{"source":"iana","extensions":["atx"]},"application/vnd.apache.arrow.file":{"source":"iana"},"application/vnd.apache.arrow.stream":{"source":"iana"},"application/vnd.apache.thrift.binary":{"source":"iana"},"application/vnd.apache.thrift.compact":{"source":"iana"},"application/vnd.apache.thrift.json":{"source":"iana"},"application/vnd.api+json":{"source":"iana","compressible":true},"application/vnd.aplextor.warrp+json":{"source":"iana","compressible":true},"application/vnd.apothekende.reservation+json":{"source":"iana","compressible":true},"application/vnd.apple.installer+xml":{"source":"iana","compressible":true,"extensions":["mpkg"]},"application/vnd.apple.keynote":{"source":"iana","extensions":["key"]},"application/vnd.apple.mpegurl":{"source":"iana","extensions":["m3u8"]},"application/vnd.apple.numbers":{"source":"iana","extensions":["numbers"]},"application/vnd.apple.pages":{"source":"iana","extensions":["pages"]},"application/vnd.apple.pkpass":{"compressible":false,"extensions":["pkpass"]},"application/vnd.arastra.swi":{"source":"iana"},"application/vnd.aristanetworks.swi":{"source":"iana","extensions":["swi"]},"application/vnd.artisan+json":{"source":"iana","compressible":true},"application/vnd.artsquare":{"source":"iana"},"application/vnd.astraea-software.iota":{"source":"iana","extensions":["iota"]},"application/vnd.audiograph":{"source":"iana","extensions":["aep"]},"application/vnd.autopackage":{"source":"iana"},"application/vnd.avalon+json":{"source":"iana","compressible":true},"application/vnd.avistar+xml":{"source":"iana","compressible":true},"application/vnd.balsamiq.bmml+xml":{"source":"iana","compressible":true,"extensions":["bmml"]},"application/vnd.balsamiq.bmpr":{"source":"iana"},"application/vnd.banana-accounting":{"source":"iana"},"application/vnd.bbf.usp.error":{"source":"iana"},"application/vnd.bbf.usp.msg":{"source":"iana"},"application/vnd.bbf.usp.msg+json":{"source":"iana","compressible":true},"application/vnd.bekitzur-stech+json":{"source":"iana","compressible":true},"application/vnd.bint.med-content":{"source":"iana"},"application/vnd.biopax.rdf+xml":{"source":"iana","compressible":true},"application/vnd.blink-idb-value-wrapper":{"source":"iana"},"application/vnd.blueice.multipass":{"source":"iana","extensions":["mpm"]},"application/vnd.bluetooth.ep.oob":{"source":"iana"},"application/vnd.bluetooth.le.oob":{"source":"iana"},"application/vnd.bmi":{"source":"iana","extensions":["bmi"]},"application/vnd.bpf":{"source":"iana"},"application/vnd.bpf3":{"source":"iana"},"application/vnd.businessobjects":{"source":"iana","extensions":["rep"]},"application/vnd.byu.uapi+json":{"source":"iana","compressible":true},"application/vnd.cab-jscript":{"source":"iana"},"application/vnd.canon-cpdl":{"source":"iana"},"application/vnd.canon-lips":{"source":"iana"},"application/vnd.capasystems-pg+json":{"source":"iana","compressible":true},"application/vnd.cendio.thinlinc.clientconf":{"source":"iana"},"application/vnd.century-systems.tcp_stream":{"source":"iana"},"application/vnd.chemdraw+xml":{"source":"iana","compressible":true,"extensions":["cdxml"]},"application/vnd.chess-pgn":{"source":"iana"},"application/vnd.chipnuts.karaoke-mmd":{"source":"iana","extensions":["mmd"]},"application/vnd.ciedi":{"source":"iana"},"application/vnd.cinderella":{"source":"iana","extensions":["cdy"]},"application/vnd.cirpack.isdn-ext":{"source":"iana"},"application/vnd.citationstyles.style+xml":{"source":"iana","compressible":true,"extensions":["csl"]},"application/vnd.claymore":{"source":"iana","extensions":["cla"]},"application/vnd.cloanto.rp9":{"source":"iana","extensions":["rp9"]},"application/vnd.clonk.c4group":{"source":"iana","extensions":["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{"source":"iana","extensions":["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{"source":"iana","extensions":["c11amz"]},"application/vnd.coffeescript":{"source":"iana"},"application/vnd.collabio.xodocuments.document":{"source":"iana"},"application/vnd.collabio.xodocuments.document-template":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation-template":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{"source":"iana"},"application/vnd.collection+json":{"source":"iana","compressible":true},"application/vnd.collection.doc+json":{"source":"iana","compressible":true},"application/vnd.collection.next+json":{"source":"iana","compressible":true},"application/vnd.comicbook+zip":{"source":"iana","compressible":false},"application/vnd.comicbook-rar":{"source":"iana"},"application/vnd.commerce-battelle":{"source":"iana"},"application/vnd.commonspace":{"source":"iana","extensions":["csp"]},"application/vnd.contact.cmsg":{"source":"iana","extensions":["cdbcmsg"]},"application/vnd.coreos.ignition+json":{"source":"iana","compressible":true},"application/vnd.cosmocaller":{"source":"iana","extensions":["cmc"]},"application/vnd.crick.clicker":{"source":"iana","extensions":["clkx"]},"application/vnd.crick.clicker.keyboard":{"source":"iana","extensions":["clkk"]},"application/vnd.crick.clicker.palette":{"source":"iana","extensions":["clkp"]},"application/vnd.crick.clicker.template":{"source":"iana","extensions":["clkt"]},"application/vnd.crick.clicker.wordbank":{"source":"iana","extensions":["clkw"]},"application/vnd.criticaltools.wbs+xml":{"source":"iana","compressible":true,"extensions":["wbs"]},"application/vnd.cryptii.pipe+json":{"source":"iana","compressible":true},"application/vnd.crypto-shade-file":{"source":"iana"},"application/vnd.cryptomator.encrypted":{"source":"iana"},"application/vnd.cryptomator.vault":{"source":"iana"},"application/vnd.ctc-posml":{"source":"iana","extensions":["pml"]},"application/vnd.ctct.ws+xml":{"source":"iana","compressible":true},"application/vnd.cups-pdf":{"source":"iana"},"application/vnd.cups-postscript":{"source":"iana"},"application/vnd.cups-ppd":{"source":"iana","extensions":["ppd"]},"application/vnd.cups-raster":{"source":"iana"},"application/vnd.cups-raw":{"source":"iana"},"application/vnd.curl":{"source":"iana"},"application/vnd.curl.car":{"source":"apache","extensions":["car"]},"application/vnd.curl.pcurl":{"source":"apache","extensions":["pcurl"]},"application/vnd.cyan.dean.root+xml":{"source":"iana","compressible":true},"application/vnd.cybank":{"source":"iana"},"application/vnd.cyclonedx+json":{"source":"iana","compressible":true},"application/vnd.cyclonedx+xml":{"source":"iana","compressible":true},"application/vnd.d2l.coursepackage1p0+zip":{"source":"iana","compressible":false},"application/vnd.d3m-dataset":{"source":"iana"},"application/vnd.d3m-problem":{"source":"iana"},"application/vnd.dart":{"source":"iana","compressible":true,"extensions":["dart"]},"application/vnd.data-vision.rdz":{"source":"iana","extensions":["rdz"]},"application/vnd.datapackage+json":{"source":"iana","compressible":true},"application/vnd.dataresource+json":{"source":"iana","compressible":true},"application/vnd.dbf":{"source":"iana","extensions":["dbf"]},"application/vnd.debian.binary-package":{"source":"iana"},"application/vnd.dece.data":{"source":"iana","extensions":["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{"source":"iana","compressible":true,"extensions":["uvt","uvvt"]},"application/vnd.dece.unspecified":{"source":"iana","extensions":["uvx","uvvx"]},"application/vnd.dece.zip":{"source":"iana","extensions":["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{"source":"iana","extensions":["fe_launch"]},"application/vnd.desmume.movie":{"source":"iana"},"application/vnd.dir-bi.plate-dl-nosuffix":{"source":"iana"},"application/vnd.dm.delegation+xml":{"source":"iana","compressible":true},"application/vnd.dna":{"source":"iana","extensions":["dna"]},"application/vnd.document+json":{"source":"iana","compressible":true},"application/vnd.dolby.mlp":{"source":"apache","extensions":["mlp"]},"application/vnd.dolby.mobile.1":{"source":"iana"},"application/vnd.dolby.mobile.2":{"source":"iana"},"application/vnd.doremir.scorecloud-binary-document":{"source":"iana"},"application/vnd.dpgraph":{"source":"iana","extensions":["dpg"]},"application/vnd.dreamfactory":{"source":"iana","extensions":["dfac"]},"application/vnd.drive+json":{"source":"iana","compressible":true},"application/vnd.ds-keypoint":{"source":"apache","extensions":["kpxx"]},"application/vnd.dtg.local":{"source":"iana"},"application/vnd.dtg.local.flash":{"source":"iana"},"application/vnd.dtg.local.html":{"source":"iana"},"application/vnd.dvb.ait":{"source":"iana","extensions":["ait"]},"application/vnd.dvb.dvbisl+xml":{"source":"iana","compressible":true},"application/vnd.dvb.dvbj":{"source":"iana"},"application/vnd.dvb.esgcontainer":{"source":"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess2":{"source":"iana"},"application/vnd.dvb.ipdcesgpdd":{"source":"iana"},"application/vnd.dvb.ipdcroaming":{"source":"iana"},"application/vnd.dvb.iptv.alfec-base":{"source":"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{"source":"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-container+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-generic+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-msglist+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-request+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-response+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-init+xml":{"source":"iana","compressible":true},"application/vnd.dvb.pfr":{"source":"iana"},"application/vnd.dvb.service":{"source":"iana","extensions":["svc"]},"application/vnd.dxr":{"source":"iana"},"application/vnd.dynageo":{"source":"iana","extensions":["geo"]},"application/vnd.dzr":{"source":"iana"},"application/vnd.easykaraoke.cdgdownload":{"source":"iana"},"application/vnd.ecdis-update":{"source":"iana"},"application/vnd.ecip.rlp":{"source":"iana"},"application/vnd.eclipse.ditto+json":{"source":"iana","compressible":true},"application/vnd.ecowin.chart":{"source":"iana","extensions":["mag"]},"application/vnd.ecowin.filerequest":{"source":"iana"},"application/vnd.ecowin.fileupdate":{"source":"iana"},"application/vnd.ecowin.series":{"source":"iana"},"application/vnd.ecowin.seriesrequest":{"source":"iana"},"application/vnd.ecowin.seriesupdate":{"source":"iana"},"application/vnd.efi.img":{"source":"iana"},"application/vnd.efi.iso":{"source":"iana"},"application/vnd.emclient.accessrequest+xml":{"source":"iana","compressible":true},"application/vnd.enliven":{"source":"iana","extensions":["nml"]},"application/vnd.enphase.envoy":{"source":"iana"},"application/vnd.eprints.data+xml":{"source":"iana","compressible":true},"application/vnd.epson.esf":{"source":"iana","extensions":["esf"]},"application/vnd.epson.msf":{"source":"iana","extensions":["msf"]},"application/vnd.epson.quickanime":{"source":"iana","extensions":["qam"]},"application/vnd.epson.salt":{"source":"iana","extensions":["slt"]},"application/vnd.epson.ssf":{"source":"iana","extensions":["ssf"]},"application/vnd.ericsson.quickcall":{"source":"iana"},"application/vnd.espass-espass+zip":{"source":"iana","compressible":false},"application/vnd.eszigno3+xml":{"source":"iana","compressible":true,"extensions":["es3","et3"]},"application/vnd.etsi.aoc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.asic-e+zip":{"source":"iana","compressible":false},"application/vnd.etsi.asic-s+zip":{"source":"iana","compressible":false},"application/vnd.etsi.cug+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvcommand+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-bc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-cod+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-npvr+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvservice+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsync+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvueprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mcid+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mheg5":{"source":"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{"source":"iana","compressible":true},"application/vnd.etsi.pstn+xml":{"source":"iana","compressible":true},"application/vnd.etsi.sci+xml":{"source":"iana","compressible":true},"application/vnd.etsi.simservs+xml":{"source":"iana","compressible":true},"application/vnd.etsi.timestamp-token":{"source":"iana"},"application/vnd.etsi.tsl+xml":{"source":"iana","compressible":true},"application/vnd.etsi.tsl.der":{"source":"iana"},"application/vnd.eu.kasparian.car+json":{"source":"iana","compressible":true},"application/vnd.eudora.data":{"source":"iana"},"application/vnd.evolv.ecig.profile":{"source":"iana"},"application/vnd.evolv.ecig.settings":{"source":"iana"},"application/vnd.evolv.ecig.theme":{"source":"iana"},"application/vnd.exstream-empower+zip":{"source":"iana","compressible":false},"application/vnd.exstream-package":{"source":"iana"},"application/vnd.ezpix-album":{"source":"iana","extensions":["ez2"]},"application/vnd.ezpix-package":{"source":"iana","extensions":["ez3"]},"application/vnd.f-secure.mobile":{"source":"iana"},"application/vnd.familysearch.gedcom+zip":{"source":"iana","compressible":false},"application/vnd.fastcopy-disk-image":{"source":"iana"},"application/vnd.fdf":{"source":"iana","extensions":["fdf"]},"application/vnd.fdsn.mseed":{"source":"iana","extensions":["mseed"]},"application/vnd.fdsn.seed":{"source":"iana","extensions":["seed","dataless"]},"application/vnd.ffsns":{"source":"iana"},"application/vnd.ficlab.flb+zip":{"source":"iana","compressible":false},"application/vnd.filmit.zfc":{"source":"iana"},"application/vnd.fints":{"source":"iana"},"application/vnd.firemonkeys.cloudcell":{"source":"iana"},"application/vnd.flographit":{"source":"iana","extensions":["gph"]},"application/vnd.fluxtime.clip":{"source":"iana","extensions":["ftc"]},"application/vnd.font-fontforge-sfd":{"source":"iana"},"application/vnd.framemaker":{"source":"iana","extensions":["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{"source":"iana","extensions":["fnc"]},"application/vnd.frogans.ltf":{"source":"iana","extensions":["ltf"]},"application/vnd.fsc.weblaunch":{"source":"iana","extensions":["fsc"]},"application/vnd.fujifilm.fb.docuworks":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.binder":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.container":{"source":"iana"},"application/vnd.fujifilm.fb.jfi+xml":{"source":"iana","compressible":true},"application/vnd.fujitsu.oasys":{"source":"iana","extensions":["oas"]},"application/vnd.fujitsu.oasys2":{"source":"iana","extensions":["oa2"]},"application/vnd.fujitsu.oasys3":{"source":"iana","extensions":["oa3"]},"application/vnd.fujitsu.oasysgp":{"source":"iana","extensions":["fg5"]},"application/vnd.fujitsu.oasysprs":{"source":"iana","extensions":["bh2"]},"application/vnd.fujixerox.art-ex":{"source":"iana"},"application/vnd.fujixerox.art4":{"source":"iana"},"application/vnd.fujixerox.ddd":{"source":"iana","extensions":["ddd"]},"application/vnd.fujixerox.docuworks":{"source":"iana","extensions":["xdw"]},"application/vnd.fujixerox.docuworks.binder":{"source":"iana","extensions":["xbd"]},"application/vnd.fujixerox.docuworks.container":{"source":"iana"},"application/vnd.fujixerox.hbpl":{"source":"iana"},"application/vnd.fut-misnet":{"source":"iana"},"application/vnd.futoin+cbor":{"source":"iana"},"application/vnd.futoin+json":{"source":"iana","compressible":true},"application/vnd.fuzzysheet":{"source":"iana","extensions":["fzs"]},"application/vnd.genomatix.tuxedo":{"source":"iana","extensions":["txd"]},"application/vnd.gentics.grd+json":{"source":"iana","compressible":true},"application/vnd.geo+json":{"source":"iana","compressible":true},"application/vnd.geocube+xml":{"source":"iana","compressible":true},"application/vnd.geogebra.file":{"source":"iana","extensions":["ggb"]},"application/vnd.geogebra.slides":{"source":"iana"},"application/vnd.geogebra.tool":{"source":"iana","extensions":["ggt"]},"application/vnd.geometry-explorer":{"source":"iana","extensions":["gex","gre"]},"application/vnd.geonext":{"source":"iana","extensions":["gxt"]},"application/vnd.geoplan":{"source":"iana","extensions":["g2w"]},"application/vnd.geospace":{"source":"iana","extensions":["g3w"]},"application/vnd.gerber":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt-response":{"source":"iana"},"application/vnd.gmx":{"source":"iana","extensions":["gmx"]},"application/vnd.google-apps.document":{"compressible":false,"extensions":["gdoc"]},"application/vnd.google-apps.presentation":{"compressible":false,"extensions":["gslides"]},"application/vnd.google-apps.spreadsheet":{"compressible":false,"extensions":["gsheet"]},"application/vnd.google-earth.kml+xml":{"source":"iana","compressible":true,"extensions":["kml"]},"application/vnd.google-earth.kmz":{"source":"iana","compressible":false,"extensions":["kmz"]},"application/vnd.gov.sk.e-form+xml":{"source":"iana","compressible":true},"application/vnd.gov.sk.e-form+zip":{"source":"iana","compressible":false},"application/vnd.gov.sk.xmldatacontainer+xml":{"source":"iana","compressible":true},"application/vnd.grafeq":{"source":"iana","extensions":["gqf","gqs"]},"application/vnd.gridmp":{"source":"iana"},"application/vnd.groove-account":{"source":"iana","extensions":["gac"]},"application/vnd.groove-help":{"source":"iana","extensions":["ghf"]},"application/vnd.groove-identity-message":{"source":"iana","extensions":["gim"]},"application/vnd.groove-injector":{"source":"iana","extensions":["grv"]},"application/vnd.groove-tool-message":{"source":"iana","extensions":["gtm"]},"application/vnd.groove-tool-template":{"source":"iana","extensions":["tpl"]},"application/vnd.groove-vcard":{"source":"iana","extensions":["vcg"]},"application/vnd.hal+json":{"source":"iana","compressible":true},"application/vnd.hal+xml":{"source":"iana","compressible":true,"extensions":["hal"]},"application/vnd.handheld-entertainment+xml":{"source":"iana","compressible":true,"extensions":["zmm"]},"application/vnd.hbci":{"source":"iana","extensions":["hbci"]},"application/vnd.hc+json":{"source":"iana","compressible":true},"application/vnd.hcl-bireports":{"source":"iana"},"application/vnd.hdt":{"source":"iana"},"application/vnd.heroku+json":{"source":"iana","compressible":true},"application/vnd.hhe.lesson-player":{"source":"iana","extensions":["les"]},"application/vnd.hl7cda+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.hl7v2+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.hp-hpgl":{"source":"iana","extensions":["hpgl"]},"application/vnd.hp-hpid":{"source":"iana","extensions":["hpid"]},"application/vnd.hp-hps":{"source":"iana","extensions":["hps"]},"application/vnd.hp-jlyt":{"source":"iana","extensions":["jlt"]},"application/vnd.hp-pcl":{"source":"iana","extensions":["pcl"]},"application/vnd.hp-pclxl":{"source":"iana","extensions":["pclxl"]},"application/vnd.httphone":{"source":"iana"},"application/vnd.hydrostatix.sof-data":{"source":"iana","extensions":["sfd-hdstx"]},"application/vnd.hyper+json":{"source":"iana","compressible":true},"application/vnd.hyper-item+json":{"source":"iana","compressible":true},"application/vnd.hyperdrive+json":{"source":"iana","compressible":true},"application/vnd.hzn-3d-crossword":{"source":"iana"},"application/vnd.ibm.afplinedata":{"source":"iana"},"application/vnd.ibm.electronic-media":{"source":"iana"},"application/vnd.ibm.minipay":{"source":"iana","extensions":["mpy"]},"application/vnd.ibm.modcap":{"source":"iana","extensions":["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{"source":"iana","extensions":["irm"]},"application/vnd.ibm.secure-container":{"source":"iana","extensions":["sc"]},"application/vnd.iccprofile":{"source":"iana","extensions":["icc","icm"]},"application/vnd.ieee.1905":{"source":"iana"},"application/vnd.igloader":{"source":"iana","extensions":["igl"]},"application/vnd.imagemeter.folder+zip":{"source":"iana","compressible":false},"application/vnd.imagemeter.image+zip":{"source":"iana","compressible":false},"application/vnd.immervision-ivp":{"source":"iana","extensions":["ivp"]},"application/vnd.immervision-ivu":{"source":"iana","extensions":["ivu"]},"application/vnd.ims.imsccv1p1":{"source":"iana"},"application/vnd.ims.imsccv1p2":{"source":"iana"},"application/vnd.ims.imsccv1p3":{"source":"iana"},"application/vnd.ims.lis.v2.result+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy.id+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings.simple+json":{"source":"iana","compressible":true},"application/vnd.informedcontrol.rms+xml":{"source":"iana","compressible":true},"application/vnd.informix-visionary":{"source":"iana"},"application/vnd.infotech.project":{"source":"iana"},"application/vnd.infotech.project+xml":{"source":"iana","compressible":true},"application/vnd.innopath.wamp.notification":{"source":"iana"},"application/vnd.insors.igm":{"source":"iana","extensions":["igm"]},"application/vnd.intercon.formnet":{"source":"iana","extensions":["xpw","xpx"]},"application/vnd.intergeo":{"source":"iana","extensions":["i2g"]},"application/vnd.intertrust.digibox":{"source":"iana"},"application/vnd.intertrust.nncp":{"source":"iana"},"application/vnd.intu.qbo":{"source":"iana","extensions":["qbo"]},"application/vnd.intu.qfx":{"source":"iana","extensions":["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.conceptitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.knowledgeitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsmessage+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.packageitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.planningitem+xml":{"source":"iana","compressible":true},"application/vnd.ipunplugged.rcprofile":{"source":"iana","extensions":["rcprofile"]},"application/vnd.irepository.package+xml":{"source":"iana","compressible":true,"extensions":["irp"]},"application/vnd.is-xpr":{"source":"iana","extensions":["xpr"]},"application/vnd.isac.fcs":{"source":"iana","extensions":["fcs"]},"application/vnd.iso11783-10+zip":{"source":"iana","compressible":false},"application/vnd.jam":{"source":"iana","extensions":["jam"]},"application/vnd.japannet-directory-service":{"source":"iana"},"application/vnd.japannet-jpnstore-wakeup":{"source":"iana"},"application/vnd.japannet-payment-wakeup":{"source":"iana"},"application/vnd.japannet-registration":{"source":"iana"},"application/vnd.japannet-registration-wakeup":{"source":"iana"},"application/vnd.japannet-setstore-wakeup":{"source":"iana"},"application/vnd.japannet-verification":{"source":"iana"},"application/vnd.japannet-verification-wakeup":{"source":"iana"},"application/vnd.jcp.javame.midlet-rms":{"source":"iana","extensions":["rms"]},"application/vnd.jisp":{"source":"iana","extensions":["jisp"]},"application/vnd.joost.joda-archive":{"source":"iana","extensions":["joda"]},"application/vnd.jsk.isdn-ngn":{"source":"iana"},"application/vnd.kahootz":{"source":"iana","extensions":["ktz","ktr"]},"application/vnd.kde.karbon":{"source":"iana","extensions":["karbon"]},"application/vnd.kde.kchart":{"source":"iana","extensions":["chrt"]},"application/vnd.kde.kformula":{"source":"iana","extensions":["kfo"]},"application/vnd.kde.kivio":{"source":"iana","extensions":["flw"]},"application/vnd.kde.kontour":{"source":"iana","extensions":["kon"]},"application/vnd.kde.kpresenter":{"source":"iana","extensions":["kpr","kpt"]},"application/vnd.kde.kspread":{"source":"iana","extensions":["ksp"]},"application/vnd.kde.kword":{"source":"iana","extensions":["kwd","kwt"]},"application/vnd.kenameaapp":{"source":"iana","extensions":["htke"]},"application/vnd.kidspiration":{"source":"iana","extensions":["kia"]},"application/vnd.kinar":{"source":"iana","extensions":["kne","knp"]},"application/vnd.koan":{"source":"iana","extensions":["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{"source":"iana","extensions":["sse"]},"application/vnd.las":{"source":"iana"},"application/vnd.las.las+json":{"source":"iana","compressible":true},"application/vnd.las.las+xml":{"source":"iana","compressible":true,"extensions":["lasxml"]},"application/vnd.laszip":{"source":"iana"},"application/vnd.leap+json":{"source":"iana","compressible":true},"application/vnd.liberty-request+xml":{"source":"iana","compressible":true},"application/vnd.llamagraphics.life-balance.desktop":{"source":"iana","extensions":["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{"source":"iana","compressible":true,"extensions":["lbe"]},"application/vnd.logipipe.circuit+zip":{"source":"iana","compressible":false},"application/vnd.loom":{"source":"iana"},"application/vnd.lotus-1-2-3":{"source":"iana","extensions":["123"]},"application/vnd.lotus-approach":{"source":"iana","extensions":["apr"]},"application/vnd.lotus-freelance":{"source":"iana","extensions":["pre"]},"application/vnd.lotus-notes":{"source":"iana","extensions":["nsf"]},"application/vnd.lotus-organizer":{"source":"iana","extensions":["org"]},"application/vnd.lotus-screencam":{"source":"iana","extensions":["scm"]},"application/vnd.lotus-wordpro":{"source":"iana","extensions":["lwp"]},"application/vnd.macports.portpkg":{"source":"iana","extensions":["portpkg"]},"application/vnd.mapbox-vector-tile":{"source":"iana","extensions":["mvt"]},"application/vnd.marlin.drm.actiontoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.conftoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.license+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.mdcf":{"source":"iana"},"application/vnd.mason+json":{"source":"iana","compressible":true},"application/vnd.maxar.archive.3tz+zip":{"source":"iana","compressible":false},"application/vnd.maxmind.maxmind-db":{"source":"iana"},"application/vnd.mcd":{"source":"iana","extensions":["mcd"]},"application/vnd.medcalcdata":{"source":"iana","extensions":["mc1"]},"application/vnd.mediastation.cdkey":{"source":"iana","extensions":["cdkey"]},"application/vnd.meridian-slingshot":{"source":"iana"},"application/vnd.mfer":{"source":"iana","extensions":["mwf"]},"application/vnd.mfmp":{"source":"iana","extensions":["mfm"]},"application/vnd.micro+json":{"source":"iana","compressible":true},"application/vnd.micrografx.flo":{"source":"iana","extensions":["flo"]},"application/vnd.micrografx.igx":{"source":"iana","extensions":["igx"]},"application/vnd.microsoft.portable-executable":{"source":"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{"source":"iana"},"application/vnd.miele+json":{"source":"iana","compressible":true},"application/vnd.mif":{"source":"iana","extensions":["mif"]},"application/vnd.minisoft-hp3000-save":{"source":"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{"source":"iana"},"application/vnd.mobius.daf":{"source":"iana","extensions":["daf"]},"application/vnd.mobius.dis":{"source":"iana","extensions":["dis"]},"application/vnd.mobius.mbk":{"source":"iana","extensions":["mbk"]},"application/vnd.mobius.mqy":{"source":"iana","extensions":["mqy"]},"application/vnd.mobius.msl":{"source":"iana","extensions":["msl"]},"application/vnd.mobius.plc":{"source":"iana","extensions":["plc"]},"application/vnd.mobius.txf":{"source":"iana","extensions":["txf"]},"application/vnd.mophun.application":{"source":"iana","extensions":["mpn"]},"application/vnd.mophun.certificate":{"source":"iana","extensions":["mpc"]},"application/vnd.motorola.flexsuite":{"source":"iana"},"application/vnd.motorola.flexsuite.adsi":{"source":"iana"},"application/vnd.motorola.flexsuite.fis":{"source":"iana"},"application/vnd.motorola.flexsuite.gotap":{"source":"iana"},"application/vnd.motorola.flexsuite.kmr":{"source":"iana"},"application/vnd.motorola.flexsuite.ttc":{"source":"iana"},"application/vnd.motorola.flexsuite.wem":{"source":"iana"},"application/vnd.motorola.iprm":{"source":"iana"},"application/vnd.mozilla.xul+xml":{"source":"iana","compressible":true,"extensions":["xul"]},"application/vnd.ms-3mfdocument":{"source":"iana"},"application/vnd.ms-artgalry":{"source":"iana","extensions":["cil"]},"application/vnd.ms-asf":{"source":"iana"},"application/vnd.ms-cab-compressed":{"source":"iana","extensions":["cab"]},"application/vnd.ms-color.iccprofile":{"source":"apache"},"application/vnd.ms-excel":{"source":"iana","compressible":false,"extensions":["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{"source":"iana","extensions":["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{"source":"iana","extensions":["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{"source":"iana","extensions":["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{"source":"iana","extensions":["xltm"]},"application/vnd.ms-fontobject":{"source":"iana","compressible":true,"extensions":["eot"]},"application/vnd.ms-htmlhelp":{"source":"iana","extensions":["chm"]},"application/vnd.ms-ims":{"source":"iana","extensions":["ims"]},"application/vnd.ms-lrm":{"source":"iana","extensions":["lrm"]},"application/vnd.ms-office.activex+xml":{"source":"iana","compressible":true},"application/vnd.ms-officetheme":{"source":"iana","extensions":["thmx"]},"application/vnd.ms-opentype":{"source":"apache","compressible":true},"application/vnd.ms-outlook":{"compressible":false,"extensions":["msg"]},"application/vnd.ms-package.obfuscated-opentype":{"source":"apache"},"application/vnd.ms-pki.seccat":{"source":"apache","extensions":["cat"]},"application/vnd.ms-pki.stl":{"source":"apache","extensions":["stl"]},"application/vnd.ms-playready.initiator+xml":{"source":"iana","compressible":true},"application/vnd.ms-powerpoint":{"source":"iana","compressible":false,"extensions":["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{"source":"iana","extensions":["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{"source":"iana","extensions":["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{"source":"iana","extensions":["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{"source":"iana","extensions":["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{"source":"iana","extensions":["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{"source":"iana","compressible":true},"application/vnd.ms-printing.printticket+xml":{"source":"apache","compressible":true},"application/vnd.ms-printschematicket+xml":{"source":"iana","compressible":true},"application/vnd.ms-project":{"source":"iana","extensions":["mpp","mpt"]},"application/vnd.ms-tnef":{"source":"iana"},"application/vnd.ms-windows.devicepairing":{"source":"iana"},"application/vnd.ms-windows.nwprinting.oob":{"source":"iana"},"application/vnd.ms-windows.printerpairing":{"source":"iana"},"application/vnd.ms-windows.wsd.oob":{"source":"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.lic-resp":{"source":"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.meter-resp":{"source":"iana"},"application/vnd.ms-word.document.macroenabled.12":{"source":"iana","extensions":["docm"]},"application/vnd.ms-word.template.macroenabled.12":{"source":"iana","extensions":["dotm"]},"application/vnd.ms-works":{"source":"iana","extensions":["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{"source":"iana","extensions":["wpl"]},"application/vnd.ms-xpsdocument":{"source":"iana","compressible":false,"extensions":["xps"]},"application/vnd.msa-disk-image":{"source":"iana"},"application/vnd.mseq":{"source":"iana","extensions":["mseq"]},"application/vnd.msign":{"source":"iana"},"application/vnd.multiad.creator":{"source":"iana"},"application/vnd.multiad.creator.cif":{"source":"iana"},"application/vnd.music-niff":{"source":"iana"},"application/vnd.musician":{"source":"iana","extensions":["mus"]},"application/vnd.muvee.style":{"source":"iana","extensions":["msty"]},"application/vnd.mynfc":{"source":"iana","extensions":["taglet"]},"application/vnd.nacamar.ybrid+json":{"source":"iana","compressible":true},"application/vnd.ncd.control":{"source":"iana"},"application/vnd.ncd.reference":{"source":"iana"},"application/vnd.nearst.inv+json":{"source":"iana","compressible":true},"application/vnd.nebumind.line":{"source":"iana"},"application/vnd.nervana":{"source":"iana"},"application/vnd.netfpx":{"source":"iana"},"application/vnd.neurolanguage.nlu":{"source":"iana","extensions":["nlu"]},"application/vnd.nimn":{"source":"iana"},"application/vnd.nintendo.nitro.rom":{"source":"iana"},"application/vnd.nintendo.snes.rom":{"source":"iana"},"application/vnd.nitf":{"source":"iana","extensions":["ntf","nitf"]},"application/vnd.noblenet-directory":{"source":"iana","extensions":["nnd"]},"application/vnd.noblenet-sealer":{"source":"iana","extensions":["nns"]},"application/vnd.noblenet-web":{"source":"iana","extensions":["nnw"]},"application/vnd.nokia.catalogs":{"source":"iana"},"application/vnd.nokia.conml+wbxml":{"source":"iana"},"application/vnd.nokia.conml+xml":{"source":"iana","compressible":true},"application/vnd.nokia.iptv.config+xml":{"source":"iana","compressible":true},"application/vnd.nokia.isds-radio-presets":{"source":"iana"},"application/vnd.nokia.landmark+wbxml":{"source":"iana"},"application/vnd.nokia.landmark+xml":{"source":"iana","compressible":true},"application/vnd.nokia.landmarkcollection+xml":{"source":"iana","compressible":true},"application/vnd.nokia.n-gage.ac+xml":{"source":"iana","compressible":true,"extensions":["ac"]},"application/vnd.nokia.n-gage.data":{"source":"iana","extensions":["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{"source":"iana","extensions":["n-gage"]},"application/vnd.nokia.ncd":{"source":"iana"},"application/vnd.nokia.pcd+wbxml":{"source":"iana"},"application/vnd.nokia.pcd+xml":{"source":"iana","compressible":true},"application/vnd.nokia.radio-preset":{"source":"iana","extensions":["rpst"]},"application/vnd.nokia.radio-presets":{"source":"iana","extensions":["rpss"]},"application/vnd.novadigm.edm":{"source":"iana","extensions":["edm"]},"application/vnd.novadigm.edx":{"source":"iana","extensions":["edx"]},"application/vnd.novadigm.ext":{"source":"iana","extensions":["ext"]},"application/vnd.ntt-local.content-share":{"source":"iana"},"application/vnd.ntt-local.file-transfer":{"source":"iana"},"application/vnd.ntt-local.ogw_remote-access":{"source":"iana"},"application/vnd.ntt-local.sip-ta_remote":{"source":"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{"source":"iana"},"application/vnd.oasis.opendocument.chart":{"source":"iana","extensions":["odc"]},"application/vnd.oasis.opendocument.chart-template":{"source":"iana","extensions":["otc"]},"application/vnd.oasis.opendocument.database":{"source":"iana","extensions":["odb"]},"application/vnd.oasis.opendocument.formula":{"source":"iana","extensions":["odf"]},"application/vnd.oasis.opendocument.formula-template":{"source":"iana","extensions":["odft"]},"application/vnd.oasis.opendocument.graphics":{"source":"iana","compressible":false,"extensions":["odg"]},"application/vnd.oasis.opendocument.graphics-template":{"source":"iana","extensions":["otg"]},"application/vnd.oasis.opendocument.image":{"source":"iana","extensions":["odi"]},"application/vnd.oasis.opendocument.image-template":{"source":"iana","extensions":["oti"]},"application/vnd.oasis.opendocument.presentation":{"source":"iana","compressible":false,"extensions":["odp"]},"application/vnd.oasis.opendocument.presentation-template":{"source":"iana","extensions":["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{"source":"iana","compressible":false,"extensions":["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{"source":"iana","extensions":["ots"]},"application/vnd.oasis.opendocument.text":{"source":"iana","compressible":false,"extensions":["odt"]},"application/vnd.oasis.opendocument.text-master":{"source":"iana","extensions":["odm"]},"application/vnd.oasis.opendocument.text-template":{"source":"iana","extensions":["ott"]},"application/vnd.oasis.opendocument.text-web":{"source":"iana","extensions":["oth"]},"application/vnd.obn":{"source":"iana"},"application/vnd.ocf+cbor":{"source":"iana"},"application/vnd.oci.image.manifest.v1+json":{"source":"iana","compressible":true},"application/vnd.oftn.l10n+json":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessdownload+xml":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessstreaming+xml":{"source":"iana","compressible":true},"application/vnd.oipf.cspg-hexbinary":{"source":"iana"},"application/vnd.oipf.dae.svg+xml":{"source":"iana","compressible":true},"application/vnd.oipf.dae.xhtml+xml":{"source":"iana","compressible":true},"application/vnd.oipf.mippvcontrolmessage+xml":{"source":"iana","compressible":true},"application/vnd.oipf.pae.gem":{"source":"iana"},"application/vnd.oipf.spdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.oipf.spdlist+xml":{"source":"iana","compressible":true},"application/vnd.oipf.ueprofile+xml":{"source":"iana","compressible":true},"application/vnd.oipf.userprofile+xml":{"source":"iana","compressible":true},"application/vnd.olpc-sugar":{"source":"iana","extensions":["xo"]},"application/vnd.oma-scws-config":{"source":"iana"},"application/vnd.oma-scws-http-request":{"source":"iana"},"application/vnd.oma-scws-http-response":{"source":"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.drm-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.imd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.ltkm":{"source":"iana"},"application/vnd.oma.bcast.notification+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.provisioningtrigger":{"source":"iana"},"application/vnd.oma.bcast.sgboot":{"source":"iana"},"application/vnd.oma.bcast.sgdd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sgdu":{"source":"iana"},"application/vnd.oma.bcast.simple-symbol-container":{"source":"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sprov+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.stkm":{"source":"iana"},"application/vnd.oma.cab-address-book+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-feature-handler+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-pcc+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-subs-invite+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-user-prefs+xml":{"source":"iana","compressible":true},"application/vnd.oma.dcd":{"source":"iana"},"application/vnd.oma.dcdc":{"source":"iana"},"application/vnd.oma.dd2+xml":{"source":"iana","compressible":true,"extensions":["dd2"]},"application/vnd.oma.drm.risd+xml":{"source":"iana","compressible":true},"application/vnd.oma.group-usage-list+xml":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+cbor":{"source":"iana"},"application/vnd.oma.lwm2m+json":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+tlv":{"source":"iana"},"application/vnd.oma.pal+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.detailed-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.final-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.groups+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.invocation-descriptor+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.optimized-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.push":{"source":"iana"},"application/vnd.oma.scidm.messages+xml":{"source":"iana","compressible":true},"application/vnd.oma.xcap-directory+xml":{"source":"iana","compressible":true},"application/vnd.omads-email+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-file+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-folder+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omaloc-supl-init":{"source":"iana"},"application/vnd.onepager":{"source":"iana"},"application/vnd.onepagertamp":{"source":"iana"},"application/vnd.onepagertamx":{"source":"iana"},"application/vnd.onepagertat":{"source":"iana"},"application/vnd.onepagertatp":{"source":"iana"},"application/vnd.onepagertatx":{"source":"iana"},"application/vnd.openblox.game+xml":{"source":"iana","compressible":true,"extensions":["obgx"]},"application/vnd.openblox.game-binary":{"source":"iana"},"application/vnd.openeye.oeb":{"source":"iana"},"application/vnd.openofficeorg.extension":{"source":"apache","extensions":["oxt"]},"application/vnd.openstreetmap.data+xml":{"source":"iana","compressible":true,"extensions":["osm"]},"application/vnd.opentimestamps.ots":{"source":"iana"},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawing+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"source":"iana","compressible":false,"extensions":["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slide":{"source":"iana","extensions":["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{"source":"iana","extensions":["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.template":{"source":"iana","extensions":["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"source":"iana","compressible":false,"extensions":["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{"source":"iana","extensions":["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.theme+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.vmldrawing":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"source":"iana","compressible":false,"extensions":["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{"source":"iana","extensions":["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.core-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.relationships+xml":{"source":"iana","compressible":true},"application/vnd.oracle.resource+json":{"source":"iana","compressible":true},"application/vnd.orange.indata":{"source":"iana"},"application/vnd.osa.netdeploy":{"source":"iana"},"application/vnd.osgeo.mapguide.package":{"source":"iana","extensions":["mgp"]},"application/vnd.osgi.bundle":{"source":"iana"},"application/vnd.osgi.dp":{"source":"iana","extensions":["dp"]},"application/vnd.osgi.subsystem":{"source":"iana","extensions":["esa"]},"application/vnd.otps.ct-kip+xml":{"source":"iana","compressible":true},"application/vnd.oxli.countgraph":{"source":"iana"},"application/vnd.pagerduty+json":{"source":"iana","compressible":true},"application/vnd.palm":{"source":"iana","extensions":["pdb","pqa","oprc"]},"application/vnd.panoply":{"source":"iana"},"application/vnd.paos.xml":{"source":"iana"},"application/vnd.patentdive":{"source":"iana"},"application/vnd.patientecommsdoc":{"source":"iana"},"application/vnd.pawaafile":{"source":"iana","extensions":["paw"]},"application/vnd.pcos":{"source":"iana"},"application/vnd.pg.format":{"source":"iana","extensions":["str"]},"application/vnd.pg.osasli":{"source":"iana","extensions":["ei6"]},"application/vnd.piaccess.application-licence":{"source":"iana"},"application/vnd.picsel":{"source":"iana","extensions":["efif"]},"application/vnd.pmi.widget":{"source":"iana","extensions":["wg"]},"application/vnd.poc.group-advertisement+xml":{"source":"iana","compressible":true},"application/vnd.pocketlearn":{"source":"iana","extensions":["plf"]},"application/vnd.powerbuilder6":{"source":"iana","extensions":["pbd"]},"application/vnd.powerbuilder6-s":{"source":"iana"},"application/vnd.powerbuilder7":{"source":"iana"},"application/vnd.powerbuilder7-s":{"source":"iana"},"application/vnd.powerbuilder75":{"source":"iana"},"application/vnd.powerbuilder75-s":{"source":"iana"},"application/vnd.preminet":{"source":"iana"},"application/vnd.previewsystems.box":{"source":"iana","extensions":["box"]},"application/vnd.proteus.magazine":{"source":"iana","extensions":["mgz"]},"application/vnd.psfs":{"source":"iana"},"application/vnd.publishare-delta-tree":{"source":"iana","extensions":["qps"]},"application/vnd.pvi.ptid1":{"source":"iana","extensions":["ptid"]},"application/vnd.pwg-multiplexed":{"source":"iana"},"application/vnd.pwg-xhtml-print+xml":{"source":"iana","compressible":true},"application/vnd.qualcomm.brew-app-res":{"source":"iana"},"application/vnd.quarantainenet":{"source":"iana"},"application/vnd.quark.quarkxpress":{"source":"iana","extensions":["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{"source":"iana"},"application/vnd.radisys.moml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conn+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-stream+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-base+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-detect+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-group+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-speech+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-transform+xml":{"source":"iana","compressible":true},"application/vnd.rainstor.data":{"source":"iana"},"application/vnd.rapid":{"source":"iana"},"application/vnd.rar":{"source":"iana","extensions":["rar"]},"application/vnd.realvnc.bed":{"source":"iana","extensions":["bed"]},"application/vnd.recordare.musicxml":{"source":"iana","extensions":["mxl"]},"application/vnd.recordare.musicxml+xml":{"source":"iana","compressible":true,"extensions":["musicxml"]},"application/vnd.renlearn.rlprint":{"source":"iana"},"application/vnd.resilient.logic":{"source":"iana"},"application/vnd.restful+json":{"source":"iana","compressible":true},"application/vnd.rig.cryptonote":{"source":"iana","extensions":["cryptonote"]},"application/vnd.rim.cod":{"source":"apache","extensions":["cod"]},"application/vnd.rn-realmedia":{"source":"apache","extensions":["rm"]},"application/vnd.rn-realmedia-vbr":{"source":"apache","extensions":["rmvb"]},"application/vnd.route66.link66+xml":{"source":"iana","compressible":true,"extensions":["link66"]},"application/vnd.rs-274x":{"source":"iana"},"application/vnd.ruckus.download":{"source":"iana"},"application/vnd.s3sms":{"source":"iana"},"application/vnd.sailingtracker.track":{"source":"iana","extensions":["st"]},"application/vnd.sar":{"source":"iana"},"application/vnd.sbm.cid":{"source":"iana"},"application/vnd.sbm.mid2":{"source":"iana"},"application/vnd.scribus":{"source":"iana"},"application/vnd.sealed.3df":{"source":"iana"},"application/vnd.sealed.csf":{"source":"iana"},"application/vnd.sealed.doc":{"source":"iana"},"application/vnd.sealed.eml":{"source":"iana"},"application/vnd.sealed.mht":{"source":"iana"},"application/vnd.sealed.net":{"source":"iana"},"application/vnd.sealed.ppt":{"source":"iana"},"application/vnd.sealed.tiff":{"source":"iana"},"application/vnd.sealed.xls":{"source":"iana"},"application/vnd.sealedmedia.softseal.html":{"source":"iana"},"application/vnd.sealedmedia.softseal.pdf":{"source":"iana"},"application/vnd.seemail":{"source":"iana","extensions":["see"]},"application/vnd.seis+json":{"source":"iana","compressible":true},"application/vnd.sema":{"source":"iana","extensions":["sema"]},"application/vnd.semd":{"source":"iana","extensions":["semd"]},"application/vnd.semf":{"source":"iana","extensions":["semf"]},"application/vnd.shade-save-file":{"source":"iana"},"application/vnd.shana.informed.formdata":{"source":"iana","extensions":["ifm"]},"application/vnd.shana.informed.formtemplate":{"source":"iana","extensions":["itp"]},"application/vnd.shana.informed.interchange":{"source":"iana","extensions":["iif"]},"application/vnd.shana.informed.package":{"source":"iana","extensions":["ipk"]},"application/vnd.shootproof+json":{"source":"iana","compressible":true},"application/vnd.shopkick+json":{"source":"iana","compressible":true},"application/vnd.shp":{"source":"iana"},"application/vnd.shx":{"source":"iana"},"application/vnd.sigrok.session":{"source":"iana"},"application/vnd.simtech-mindmapper":{"source":"iana","extensions":["twd","twds"]},"application/vnd.siren+json":{"source":"iana","compressible":true},"application/vnd.smaf":{"source":"iana","extensions":["mmf"]},"application/vnd.smart.notebook":{"source":"iana"},"application/vnd.smart.teacher":{"source":"iana","extensions":["teacher"]},"application/vnd.snesdev-page-table":{"source":"iana"},"application/vnd.software602.filler.form+xml":{"source":"iana","compressible":true,"extensions":["fo"]},"application/vnd.software602.filler.form-xml-zip":{"source":"iana"},"application/vnd.solent.sdkm+xml":{"source":"iana","compressible":true,"extensions":["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{"source":"iana","extensions":["dxp"]},"application/vnd.spotfire.sfs":{"source":"iana","extensions":["sfs"]},"application/vnd.sqlite3":{"source":"iana"},"application/vnd.sss-cod":{"source":"iana"},"application/vnd.sss-dtf":{"source":"iana"},"application/vnd.sss-ntf":{"source":"iana"},"application/vnd.stardivision.calc":{"source":"apache","extensions":["sdc"]},"application/vnd.stardivision.draw":{"source":"apache","extensions":["sda"]},"application/vnd.stardivision.impress":{"source":"apache","extensions":["sdd"]},"application/vnd.stardivision.math":{"source":"apache","extensions":["smf"]},"application/vnd.stardivision.writer":{"source":"apache","extensions":["sdw","vor"]},"application/vnd.stardivision.writer-global":{"source":"apache","extensions":["sgl"]},"application/vnd.stepmania.package":{"source":"iana","extensions":["smzip"]},"application/vnd.stepmania.stepchart":{"source":"iana","extensions":["sm"]},"application/vnd.street-stream":{"source":"iana"},"application/vnd.sun.wadl+xml":{"source":"iana","compressible":true,"extensions":["wadl"]},"application/vnd.sun.xml.calc":{"source":"apache","extensions":["sxc"]},"application/vnd.sun.xml.calc.template":{"source":"apache","extensions":["stc"]},"application/vnd.sun.xml.draw":{"source":"apache","extensions":["sxd"]},"application/vnd.sun.xml.draw.template":{"source":"apache","extensions":["std"]},"application/vnd.sun.xml.impress":{"source":"apache","extensions":["sxi"]},"application/vnd.sun.xml.impress.template":{"source":"apache","extensions":["sti"]},"application/vnd.sun.xml.math":{"source":"apache","extensions":["sxm"]},"application/vnd.sun.xml.writer":{"source":"apache","extensions":["sxw"]},"application/vnd.sun.xml.writer.global":{"source":"apache","extensions":["sxg"]},"application/vnd.sun.xml.writer.template":{"source":"apache","extensions":["stw"]},"application/vnd.sus-calendar":{"source":"iana","extensions":["sus","susp"]},"application/vnd.svd":{"source":"iana","extensions":["svd"]},"application/vnd.swiftview-ics":{"source":"iana"},"application/vnd.sycle+xml":{"source":"iana","compressible":true},"application/vnd.syft+json":{"source":"iana","compressible":true},"application/vnd.symbian.install":{"source":"apache","extensions":["sis","sisx"]},"application/vnd.syncml+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xsm"]},"application/vnd.syncml.dm+wbxml":{"source":"iana","charset":"UTF-8","extensions":["bdm"]},"application/vnd.syncml.dm+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xdm"]},"application/vnd.syncml.dm.notification":{"source":"iana"},"application/vnd.syncml.dmddf+wbxml":{"source":"iana"},"application/vnd.syncml.dmddf+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["ddf"]},"application/vnd.syncml.dmtnds+wbxml":{"source":"iana"},"application/vnd.syncml.dmtnds+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.syncml.ds.notification":{"source":"iana"},"application/vnd.tableschema+json":{"source":"iana","compressible":true},"application/vnd.tao.intent-module-archive":{"source":"iana","extensions":["tao"]},"application/vnd.tcpdump.pcap":{"source":"iana","extensions":["pcap","cap","dmp"]},"application/vnd.think-cell.ppttc+json":{"source":"iana","compressible":true},"application/vnd.tmd.mediaflex.api+xml":{"source":"iana","compressible":true},"application/vnd.tml":{"source":"iana"},"application/vnd.tmobile-livetv":{"source":"iana","extensions":["tmo"]},"application/vnd.tri.onesource":{"source":"iana"},"application/vnd.trid.tpt":{"source":"iana","extensions":["tpt"]},"application/vnd.triscape.mxs":{"source":"iana","extensions":["mxs"]},"application/vnd.trueapp":{"source":"iana","extensions":["tra"]},"application/vnd.truedoc":{"source":"iana"},"application/vnd.ubisoft.webplayer":{"source":"iana"},"application/vnd.ufdl":{"source":"iana","extensions":["ufd","ufdl"]},"application/vnd.uiq.theme":{"source":"iana","extensions":["utz"]},"application/vnd.umajin":{"source":"iana","extensions":["umj"]},"application/vnd.unity":{"source":"iana","extensions":["unityweb"]},"application/vnd.uoml+xml":{"source":"iana","compressible":true,"extensions":["uoml"]},"application/vnd.uplanet.alert":{"source":"iana"},"application/vnd.uplanet.alert-wbxml":{"source":"iana"},"application/vnd.uplanet.bearer-choice":{"source":"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{"source":"iana"},"application/vnd.uplanet.cacheop":{"source":"iana"},"application/vnd.uplanet.cacheop-wbxml":{"source":"iana"},"application/vnd.uplanet.channel":{"source":"iana"},"application/vnd.uplanet.channel-wbxml":{"source":"iana"},"application/vnd.uplanet.list":{"source":"iana"},"application/vnd.uplanet.list-wbxml":{"source":"iana"},"application/vnd.uplanet.listcmd":{"source":"iana"},"application/vnd.uplanet.listcmd-wbxml":{"source":"iana"},"application/vnd.uplanet.signal":{"source":"iana"},"application/vnd.uri-map":{"source":"iana"},"application/vnd.valve.source.material":{"source":"iana"},"application/vnd.vcx":{"source":"iana","extensions":["vcx"]},"application/vnd.vd-study":{"source":"iana"},"application/vnd.vectorworks":{"source":"iana"},"application/vnd.vel+json":{"source":"iana","compressible":true},"application/vnd.verimatrix.vcas":{"source":"iana"},"application/vnd.veritone.aion+json":{"source":"iana","compressible":true},"application/vnd.veryant.thin":{"source":"iana"},"application/vnd.ves.encrypted":{"source":"iana"},"application/vnd.vidsoft.vidconference":{"source":"iana"},"application/vnd.visio":{"source":"iana","extensions":["vsd","vst","vss","vsw"]},"application/vnd.visionary":{"source":"iana","extensions":["vis"]},"application/vnd.vividence.scriptfile":{"source":"iana"},"application/vnd.vsf":{"source":"iana","extensions":["vsf"]},"application/vnd.wap.sic":{"source":"iana"},"application/vnd.wap.slc":{"source":"iana"},"application/vnd.wap.wbxml":{"source":"iana","charset":"UTF-8","extensions":["wbxml"]},"application/vnd.wap.wmlc":{"source":"iana","extensions":["wmlc"]},"application/vnd.wap.wmlscriptc":{"source":"iana","extensions":["wmlsc"]},"application/vnd.webturbo":{"source":"iana","extensions":["wtb"]},"application/vnd.wfa.dpp":{"source":"iana"},"application/vnd.wfa.p2p":{"source":"iana"},"application/vnd.wfa.wsc":{"source":"iana"},"application/vnd.windows.devicepairing":{"source":"iana"},"application/vnd.wmc":{"source":"iana"},"application/vnd.wmf.bootstrap":{"source":"iana"},"application/vnd.wolfram.mathematica":{"source":"iana"},"application/vnd.wolfram.mathematica.package":{"source":"iana"},"application/vnd.wolfram.player":{"source":"iana","extensions":["nbp"]},"application/vnd.wordperfect":{"source":"iana","extensions":["wpd"]},"application/vnd.wqd":{"source":"iana","extensions":["wqd"]},"application/vnd.wrq-hp3000-labelled":{"source":"iana"},"application/vnd.wt.stf":{"source":"iana","extensions":["stf"]},"application/vnd.wv.csp+wbxml":{"source":"iana"},"application/vnd.wv.csp+xml":{"source":"iana","compressible":true},"application/vnd.wv.ssp+xml":{"source":"iana","compressible":true},"application/vnd.xacml+json":{"source":"iana","compressible":true},"application/vnd.xara":{"source":"iana","extensions":["xar"]},"application/vnd.xfdl":{"source":"iana","extensions":["xfdl"]},"application/vnd.xfdl.webform":{"source":"iana"},"application/vnd.xmi+xml":{"source":"iana","compressible":true},"application/vnd.xmpie.cpkg":{"source":"iana"},"application/vnd.xmpie.dpkg":{"source":"iana"},"application/vnd.xmpie.plan":{"source":"iana"},"application/vnd.xmpie.ppkg":{"source":"iana"},"application/vnd.xmpie.xlim":{"source":"iana"},"application/vnd.yamaha.hv-dic":{"source":"iana","extensions":["hvd"]},"application/vnd.yamaha.hv-script":{"source":"iana","extensions":["hvs"]},"application/vnd.yamaha.hv-voice":{"source":"iana","extensions":["hvp"]},"application/vnd.yamaha.openscoreformat":{"source":"iana","extensions":["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{"source":"iana","compressible":true,"extensions":["osfpvg"]},"application/vnd.yamaha.remote-setup":{"source":"iana"},"application/vnd.yamaha.smaf-audio":{"source":"iana","extensions":["saf"]},"application/vnd.yamaha.smaf-phrase":{"source":"iana","extensions":["spf"]},"application/vnd.yamaha.through-ngn":{"source":"iana"},"application/vnd.yamaha.tunnel-udpencap":{"source":"iana"},"application/vnd.yaoweme":{"source":"iana"},"application/vnd.yellowriver-custom-menu":{"source":"iana","extensions":["cmp"]},"application/vnd.youtube.yt":{"source":"iana"},"application/vnd.zul":{"source":"iana","extensions":["zir","zirz"]},"application/vnd.zzazz.deck+xml":{"source":"iana","compressible":true,"extensions":["zaz"]},"application/voicexml+xml":{"source":"iana","compressible":true,"extensions":["vxml"]},"application/voucher-cms+json":{"source":"iana","compressible":true},"application/vq-rtcpxr":{"source":"iana"},"application/wasm":{"source":"iana","compressible":true,"extensions":["wasm"]},"application/watcherinfo+xml":{"source":"iana","compressible":true,"extensions":["wif"]},"application/webpush-options+json":{"source":"iana","compressible":true},"application/whoispp-query":{"source":"iana"},"application/whoispp-response":{"source":"iana"},"application/widget":{"source":"iana","extensions":["wgt"]},"application/winhlp":{"source":"apache","extensions":["hlp"]},"application/wita":{"source":"iana"},"application/wordperfect5.1":{"source":"iana"},"application/wsdl+xml":{"source":"iana","compressible":true,"extensions":["wsdl"]},"application/wspolicy+xml":{"source":"iana","compressible":true,"extensions":["wspolicy"]},"application/x-7z-compressed":{"source":"apache","compressible":false,"extensions":["7z"]},"application/x-abiword":{"source":"apache","extensions":["abw"]},"application/x-ace-compressed":{"source":"apache","extensions":["ace"]},"application/x-amf":{"source":"apache"},"application/x-apple-diskimage":{"source":"apache","extensions":["dmg"]},"application/x-arj":{"compressible":false,"extensions":["arj"]},"application/x-authorware-bin":{"source":"apache","extensions":["aab","x32","u32","vox"]},"application/x-authorware-map":{"source":"apache","extensions":["aam"]},"application/x-authorware-seg":{"source":"apache","extensions":["aas"]},"application/x-bcpio":{"source":"apache","extensions":["bcpio"]},"application/x-bdoc":{"compressible":false,"extensions":["bdoc"]},"application/x-bittorrent":{"source":"apache","extensions":["torrent"]},"application/x-blorb":{"source":"apache","extensions":["blb","blorb"]},"application/x-bzip":{"source":"apache","compressible":false,"extensions":["bz"]},"application/x-bzip2":{"source":"apache","compressible":false,"extensions":["bz2","boz"]},"application/x-cbr":{"source":"apache","extensions":["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{"source":"apache","extensions":["vcd"]},"application/x-cfs-compressed":{"source":"apache","extensions":["cfs"]},"application/x-chat":{"source":"apache","extensions":["chat"]},"application/x-chess-pgn":{"source":"apache","extensions":["pgn"]},"application/x-chrome-extension":{"extensions":["crx"]},"application/x-cocoa":{"source":"nginx","extensions":["cco"]},"application/x-compress":{"source":"apache"},"application/x-conference":{"source":"apache","extensions":["nsc"]},"application/x-cpio":{"source":"apache","extensions":["cpio"]},"application/x-csh":{"source":"apache","extensions":["csh"]},"application/x-deb":{"compressible":false},"application/x-debian-package":{"source":"apache","extensions":["deb","udeb"]},"application/x-dgc-compressed":{"source":"apache","extensions":["dgc"]},"application/x-director":{"source":"apache","extensions":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{"source":"apache","extensions":["wad"]},"application/x-dtbncx+xml":{"source":"apache","compressible":true,"extensions":["ncx"]},"application/x-dtbook+xml":{"source":"apache","compressible":true,"extensions":["dtb"]},"application/x-dtbresource+xml":{"source":"apache","compressible":true,"extensions":["res"]},"application/x-dvi":{"source":"apache","compressible":false,"extensions":["dvi"]},"application/x-envoy":{"source":"apache","extensions":["evy"]},"application/x-eva":{"source":"apache","extensions":["eva"]},"application/x-font-bdf":{"source":"apache","extensions":["bdf"]},"application/x-font-dos":{"source":"apache"},"application/x-font-framemaker":{"source":"apache"},"application/x-font-ghostscript":{"source":"apache","extensions":["gsf"]},"application/x-font-libgrx":{"source":"apache"},"application/x-font-linux-psf":{"source":"apache","extensions":["psf"]},"application/x-font-pcf":{"source":"apache","extensions":["pcf"]},"application/x-font-snf":{"source":"apache","extensions":["snf"]},"application/x-font-speedo":{"source":"apache"},"application/x-font-sunos-news":{"source":"apache"},"application/x-font-type1":{"source":"apache","extensions":["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{"source":"apache"},"application/x-freearc":{"source":"apache","extensions":["arc"]},"application/x-futuresplash":{"source":"apache","extensions":["spl"]},"application/x-gca-compressed":{"source":"apache","extensions":["gca"]},"application/x-glulx":{"source":"apache","extensions":["ulx"]},"application/x-gnumeric":{"source":"apache","extensions":["gnumeric"]},"application/x-gramps-xml":{"source":"apache","extensions":["gramps"]},"application/x-gtar":{"source":"apache","extensions":["gtar"]},"application/x-gzip":{"source":"apache"},"application/x-hdf":{"source":"apache","extensions":["hdf"]},"application/x-httpd-php":{"compressible":true,"extensions":["php"]},"application/x-install-instructions":{"source":"apache","extensions":["install"]},"application/x-iso9660-image":{"source":"apache","extensions":["iso"]},"application/x-iwork-keynote-sffkey":{"extensions":["key"]},"application/x-iwork-numbers-sffnumbers":{"extensions":["numbers"]},"application/x-iwork-pages-sffpages":{"extensions":["pages"]},"application/x-java-archive-diff":{"source":"nginx","extensions":["jardiff"]},"application/x-java-jnlp-file":{"source":"apache","compressible":false,"extensions":["jnlp"]},"application/x-javascript":{"compressible":true},"application/x-keepass2":{"extensions":["kdbx"]},"application/x-latex":{"source":"apache","compressible":false,"extensions":["latex"]},"application/x-lua-bytecode":{"extensions":["luac"]},"application/x-lzh-compressed":{"source":"apache","extensions":["lzh","lha"]},"application/x-makeself":{"source":"nginx","extensions":["run"]},"application/x-mie":{"source":"apache","extensions":["mie"]},"application/x-mobipocket-ebook":{"source":"apache","extensions":["prc","mobi"]},"application/x-mpegurl":{"compressible":false},"application/x-ms-application":{"source":"apache","extensions":["application"]},"application/x-ms-shortcut":{"source":"apache","extensions":["lnk"]},"application/x-ms-wmd":{"source":"apache","extensions":["wmd"]},"application/x-ms-wmz":{"source":"apache","extensions":["wmz"]},"application/x-ms-xbap":{"source":"apache","extensions":["xbap"]},"application/x-msaccess":{"source":"apache","extensions":["mdb"]},"application/x-msbinder":{"source":"apache","extensions":["obd"]},"application/x-mscardfile":{"source":"apache","extensions":["crd"]},"application/x-msclip":{"source":"apache","extensions":["clp"]},"application/x-msdos-program":{"extensions":["exe"]},"application/x-msdownload":{"source":"apache","extensions":["exe","dll","com","bat","msi"]},"application/x-msmediaview":{"source":"apache","extensions":["mvb","m13","m14"]},"application/x-msmetafile":{"source":"apache","extensions":["wmf","wmz","emf","emz"]},"application/x-msmoney":{"source":"apache","extensions":["mny"]},"application/x-mspublisher":{"source":"apache","extensions":["pub"]},"application/x-msschedule":{"source":"apache","extensions":["scd"]},"application/x-msterminal":{"source":"apache","extensions":["trm"]},"application/x-mswrite":{"source":"apache","extensions":["wri"]},"application/x-netcdf":{"source":"apache","extensions":["nc","cdf"]},"application/x-ns-proxy-autoconfig":{"compressible":true,"extensions":["pac"]},"application/x-nzb":{"source":"apache","extensions":["nzb"]},"application/x-perl":{"source":"nginx","extensions":["pl","pm"]},"application/x-pilot":{"source":"nginx","extensions":["prc","pdb"]},"application/x-pkcs12":{"source":"apache","compressible":false,"extensions":["p12","pfx"]},"application/x-pkcs7-certificates":{"source":"apache","extensions":["p7b","spc"]},"application/x-pkcs7-certreqresp":{"source":"apache","extensions":["p7r"]},"application/x-pki-message":{"source":"iana"},"application/x-rar-compressed":{"source":"apache","compressible":false,"extensions":["rar"]},"application/x-redhat-package-manager":{"source":"nginx","extensions":["rpm"]},"application/x-research-info-systems":{"source":"apache","extensions":["ris"]},"application/x-sea":{"source":"nginx","extensions":["sea"]},"application/x-sh":{"source":"apache","compressible":true,"extensions":["sh"]},"application/x-shar":{"source":"apache","extensions":["shar"]},"application/x-shockwave-flash":{"source":"apache","compressible":false,"extensions":["swf"]},"application/x-silverlight-app":{"source":"apache","extensions":["xap"]},"application/x-sql":{"source":"apache","extensions":["sql"]},"application/x-stuffit":{"source":"apache","compressible":false,"extensions":["sit"]},"application/x-stuffitx":{"source":"apache","extensions":["sitx"]},"application/x-subrip":{"source":"apache","extensions":["srt"]},"application/x-sv4cpio":{"source":"apache","extensions":["sv4cpio"]},"application/x-sv4crc":{"source":"apache","extensions":["sv4crc"]},"application/x-t3vm-image":{"source":"apache","extensions":["t3"]},"application/x-tads":{"source":"apache","extensions":["gam"]},"application/x-tar":{"source":"apache","compressible":true,"extensions":["tar"]},"application/x-tcl":{"source":"apache","extensions":["tcl","tk"]},"application/x-tex":{"source":"apache","extensions":["tex"]},"application/x-tex-tfm":{"source":"apache","extensions":["tfm"]},"application/x-texinfo":{"source":"apache","extensions":["texinfo","texi"]},"application/x-tgif":{"source":"apache","extensions":["obj"]},"application/x-ustar":{"source":"apache","extensions":["ustar"]},"application/x-virtualbox-hdd":{"compressible":true,"extensions":["hdd"]},"application/x-virtualbox-ova":{"compressible":true,"extensions":["ova"]},"application/x-virtualbox-ovf":{"compressible":true,"extensions":["ovf"]},"application/x-virtualbox-vbox":{"compressible":true,"extensions":["vbox"]},"application/x-virtualbox-vbox-extpack":{"compressible":false,"extensions":["vbox-extpack"]},"application/x-virtualbox-vdi":{"compressible":true,"extensions":["vdi"]},"application/x-virtualbox-vhd":{"compressible":true,"extensions":["vhd"]},"application/x-virtualbox-vmdk":{"compressible":true,"extensions":["vmdk"]},"application/x-wais-source":{"source":"apache","extensions":["src"]},"application/x-web-app-manifest+json":{"compressible":true,"extensions":["webapp"]},"application/x-www-form-urlencoded":{"source":"iana","compressible":true},"application/x-x509-ca-cert":{"source":"iana","extensions":["der","crt","pem"]},"application/x-x509-ca-ra-cert":{"source":"iana"},"application/x-x509-next-ca-cert":{"source":"iana"},"application/x-xfig":{"source":"apache","extensions":["fig"]},"application/x-xliff+xml":{"source":"apache","compressible":true,"extensions":["xlf"]},"application/x-xpinstall":{"source":"apache","compressible":false,"extensions":["xpi"]},"application/x-xz":{"source":"apache","extensions":["xz"]},"application/x-zmachine":{"source":"apache","extensions":["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{"source":"iana"},"application/xacml+xml":{"source":"iana","compressible":true},"application/xaml+xml":{"source":"apache","compressible":true,"extensions":["xaml"]},"application/xcap-att+xml":{"source":"iana","compressible":true,"extensions":["xav"]},"application/xcap-caps+xml":{"source":"iana","compressible":true,"extensions":["xca"]},"application/xcap-diff+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/xcap-el+xml":{"source":"iana","compressible":true,"extensions":["xel"]},"application/xcap-error+xml":{"source":"iana","compressible":true},"application/xcap-ns+xml":{"source":"iana","compressible":true,"extensions":["xns"]},"application/xcon-conference-info+xml":{"source":"iana","compressible":true},"application/xcon-conference-info-diff+xml":{"source":"iana","compressible":true},"application/xenc+xml":{"source":"iana","compressible":true,"extensions":["xenc"]},"application/xhtml+xml":{"source":"iana","compressible":true,"extensions":["xhtml","xht"]},"application/xhtml-voice+xml":{"source":"apache","compressible":true},"application/xliff+xml":{"source":"iana","compressible":true,"extensions":["xlf"]},"application/xml":{"source":"iana","compressible":true,"extensions":["xml","xsl","xsd","rng"]},"application/xml-dtd":{"source":"iana","compressible":true,"extensions":["dtd"]},"application/xml-external-parsed-entity":{"source":"iana"},"application/xml-patch+xml":{"source":"iana","compressible":true},"application/xmpp+xml":{"source":"iana","compressible":true},"application/xop+xml":{"source":"iana","compressible":true,"extensions":["xop"]},"application/xproc+xml":{"source":"apache","compressible":true,"extensions":["xpl"]},"application/xslt+xml":{"source":"iana","compressible":true,"extensions":["xsl","xslt"]},"application/xspf+xml":{"source":"apache","compressible":true,"extensions":["xspf"]},"application/xv+xml":{"source":"iana","compressible":true,"extensions":["mxml","xhvml","xvml","xvm"]},"application/yang":{"source":"iana","extensions":["yang"]},"application/yang-data+json":{"source":"iana","compressible":true},"application/yang-data+xml":{"source":"iana","compressible":true},"application/yang-patch+json":{"source":"iana","compressible":true},"application/yang-patch+xml":{"source":"iana","compressible":true},"application/yin+xml":{"source":"iana","compressible":true,"extensions":["yin"]},"application/zip":{"source":"iana","compressible":false,"extensions":["zip"]},"application/zlib":{"source":"iana"},"application/zstd":{"source":"iana"},"audio/1d-interleaved-parityfec":{"source":"iana"},"audio/32kadpcm":{"source":"iana"},"audio/3gpp":{"source":"iana","compressible":false,"extensions":["3gpp"]},"audio/3gpp2":{"source":"iana"},"audio/aac":{"source":"iana"},"audio/ac3":{"source":"iana"},"audio/adpcm":{"source":"apache","extensions":["adp"]},"audio/amr":{"source":"iana","extensions":["amr"]},"audio/amr-wb":{"source":"iana"},"audio/amr-wb+":{"source":"iana"},"audio/aptx":{"source":"iana"},"audio/asc":{"source":"iana"},"audio/atrac-advanced-lossless":{"source":"iana"},"audio/atrac-x":{"source":"iana"},"audio/atrac3":{"source":"iana"},"audio/basic":{"source":"iana","compressible":false,"extensions":["au","snd"]},"audio/bv16":{"source":"iana"},"audio/bv32":{"source":"iana"},"audio/clearmode":{"source":"iana"},"audio/cn":{"source":"iana"},"audio/dat12":{"source":"iana"},"audio/dls":{"source":"iana"},"audio/dsr-es201108":{"source":"iana"},"audio/dsr-es202050":{"source":"iana"},"audio/dsr-es202211":{"source":"iana"},"audio/dsr-es202212":{"source":"iana"},"audio/dv":{"source":"iana"},"audio/dvi4":{"source":"iana"},"audio/eac3":{"source":"iana"},"audio/encaprtp":{"source":"iana"},"audio/evrc":{"source":"iana"},"audio/evrc-qcp":{"source":"iana"},"audio/evrc0":{"source":"iana"},"audio/evrc1":{"source":"iana"},"audio/evrcb":{"source":"iana"},"audio/evrcb0":{"source":"iana"},"audio/evrcb1":{"source":"iana"},"audio/evrcnw":{"source":"iana"},"audio/evrcnw0":{"source":"iana"},"audio/evrcnw1":{"source":"iana"},"audio/evrcwb":{"source":"iana"},"audio/evrcwb0":{"source":"iana"},"audio/evrcwb1":{"source":"iana"},"audio/evs":{"source":"iana"},"audio/flexfec":{"source":"iana"},"audio/fwdred":{"source":"iana"},"audio/g711-0":{"source":"iana"},"audio/g719":{"source":"iana"},"audio/g722":{"source":"iana"},"audio/g7221":{"source":"iana"},"audio/g723":{"source":"iana"},"audio/g726-16":{"source":"iana"},"audio/g726-24":{"source":"iana"},"audio/g726-32":{"source":"iana"},"audio/g726-40":{"source":"iana"},"audio/g728":{"source":"iana"},"audio/g729":{"source":"iana"},"audio/g7291":{"source":"iana"},"audio/g729d":{"source":"iana"},"audio/g729e":{"source":"iana"},"audio/gsm":{"source":"iana"},"audio/gsm-efr":{"source":"iana"},"audio/gsm-hr-08":{"source":"iana"},"audio/ilbc":{"source":"iana"},"audio/ip-mr_v2.5":{"source":"iana"},"audio/isac":{"source":"apache"},"audio/l16":{"source":"iana"},"audio/l20":{"source":"iana"},"audio/l24":{"source":"iana","compressible":false},"audio/l8":{"source":"iana"},"audio/lpc":{"source":"iana"},"audio/melp":{"source":"iana"},"audio/melp1200":{"source":"iana"},"audio/melp2400":{"source":"iana"},"audio/melp600":{"source":"iana"},"audio/mhas":{"source":"iana"},"audio/midi":{"source":"apache","extensions":["mid","midi","kar","rmi"]},"audio/mobile-xmf":{"source":"iana","extensions":["mxmf"]},"audio/mp3":{"compressible":false,"extensions":["mp3"]},"audio/mp4":{"source":"iana","compressible":false,"extensions":["m4a","mp4a"]},"audio/mp4a-latm":{"source":"iana"},"audio/mpa":{"source":"iana"},"audio/mpa-robust":{"source":"iana"},"audio/mpeg":{"source":"iana","compressible":false,"extensions":["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{"source":"iana"},"audio/musepack":{"source":"apache"},"audio/ogg":{"source":"iana","compressible":false,"extensions":["oga","ogg","spx","opus"]},"audio/opus":{"source":"iana"},"audio/parityfec":{"source":"iana"},"audio/pcma":{"source":"iana"},"audio/pcma-wb":{"source":"iana"},"audio/pcmu":{"source":"iana"},"audio/pcmu-wb":{"source":"iana"},"audio/prs.sid":{"source":"iana"},"audio/qcelp":{"source":"iana"},"audio/raptorfec":{"source":"iana"},"audio/red":{"source":"iana"},"audio/rtp-enc-aescm128":{"source":"iana"},"audio/rtp-midi":{"source":"iana"},"audio/rtploopback":{"source":"iana"},"audio/rtx":{"source":"iana"},"audio/s3m":{"source":"apache","extensions":["s3m"]},"audio/scip":{"source":"iana"},"audio/silk":{"source":"apache","extensions":["sil"]},"audio/smv":{"source":"iana"},"audio/smv-qcp":{"source":"iana"},"audio/smv0":{"source":"iana"},"audio/sofa":{"source":"iana"},"audio/sp-midi":{"source":"iana"},"audio/speex":{"source":"iana"},"audio/t140c":{"source":"iana"},"audio/t38":{"source":"iana"},"audio/telephone-event":{"source":"iana"},"audio/tetra_acelp":{"source":"iana"},"audio/tetra_acelp_bb":{"source":"iana"},"audio/tone":{"source":"iana"},"audio/tsvcis":{"source":"iana"},"audio/uemclip":{"source":"iana"},"audio/ulpfec":{"source":"iana"},"audio/usac":{"source":"iana"},"audio/vdvi":{"source":"iana"},"audio/vmr-wb":{"source":"iana"},"audio/vnd.3gpp.iufp":{"source":"iana"},"audio/vnd.4sb":{"source":"iana"},"audio/vnd.audiokoz":{"source":"iana"},"audio/vnd.celp":{"source":"iana"},"audio/vnd.cisco.nse":{"source":"iana"},"audio/vnd.cmles.radio-events":{"source":"iana"},"audio/vnd.cns.anp1":{"source":"iana"},"audio/vnd.cns.inf1":{"source":"iana"},"audio/vnd.dece.audio":{"source":"iana","extensions":["uva","uvva"]},"audio/vnd.digital-winds":{"source":"iana","extensions":["eol"]},"audio/vnd.dlna.adts":{"source":"iana"},"audio/vnd.dolby.heaac.1":{"source":"iana"},"audio/vnd.dolby.heaac.2":{"source":"iana"},"audio/vnd.dolby.mlp":{"source":"iana"},"audio/vnd.dolby.mps":{"source":"iana"},"audio/vnd.dolby.pl2":{"source":"iana"},"audio/vnd.dolby.pl2x":{"source":"iana"},"audio/vnd.dolby.pl2z":{"source":"iana"},"audio/vnd.dolby.pulse.1":{"source":"iana"},"audio/vnd.dra":{"source":"iana","extensions":["dra"]},"audio/vnd.dts":{"source":"iana","extensions":["dts"]},"audio/vnd.dts.hd":{"source":"iana","extensions":["dtshd"]},"audio/vnd.dts.uhd":{"source":"iana"},"audio/vnd.dvb.file":{"source":"iana"},"audio/vnd.everad.plj":{"source":"iana"},"audio/vnd.hns.audio":{"source":"iana"},"audio/vnd.lucent.voice":{"source":"iana","extensions":["lvp"]},"audio/vnd.ms-playready.media.pya":{"source":"iana","extensions":["pya"]},"audio/vnd.nokia.mobile-xmf":{"source":"iana"},"audio/vnd.nortel.vbk":{"source":"iana"},"audio/vnd.nuera.ecelp4800":{"source":"iana","extensions":["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{"source":"iana","extensions":["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{"source":"iana","extensions":["ecelp9600"]},"audio/vnd.octel.sbc":{"source":"iana"},"audio/vnd.presonus.multitrack":{"source":"iana"},"audio/vnd.qcelp":{"source":"iana"},"audio/vnd.rhetorex.32kadpcm":{"source":"iana"},"audio/vnd.rip":{"source":"iana","extensions":["rip"]},"audio/vnd.rn-realaudio":{"compressible":false},"audio/vnd.sealedmedia.softseal.mpeg":{"source":"iana"},"audio/vnd.vmx.cvsd":{"source":"iana"},"audio/vnd.wave":{"compressible":false},"audio/vorbis":{"source":"iana","compressible":false},"audio/vorbis-config":{"source":"iana"},"audio/wav":{"compressible":false,"extensions":["wav"]},"audio/wave":{"compressible":false,"extensions":["wav"]},"audio/webm":{"source":"apache","compressible":false,"extensions":["weba"]},"audio/x-aac":{"source":"apache","compressible":false,"extensions":["aac"]},"audio/x-aiff":{"source":"apache","extensions":["aif","aiff","aifc"]},"audio/x-caf":{"source":"apache","compressible":false,"extensions":["caf"]},"audio/x-flac":{"source":"apache","extensions":["flac"]},"audio/x-m4a":{"source":"nginx","extensions":["m4a"]},"audio/x-matroska":{"source":"apache","extensions":["mka"]},"audio/x-mpegurl":{"source":"apache","extensions":["m3u"]},"audio/x-ms-wax":{"source":"apache","extensions":["wax"]},"audio/x-ms-wma":{"source":"apache","extensions":["wma"]},"audio/x-pn-realaudio":{"source":"apache","extensions":["ram","ra"]},"audio/x-pn-realaudio-plugin":{"source":"apache","extensions":["rmp"]},"audio/x-realaudio":{"source":"nginx","extensions":["ra"]},"audio/x-tta":{"source":"apache"},"audio/x-wav":{"source":"apache","extensions":["wav"]},"audio/xm":{"source":"apache","extensions":["xm"]},"chemical/x-cdx":{"source":"apache","extensions":["cdx"]},"chemical/x-cif":{"source":"apache","extensions":["cif"]},"chemical/x-cmdf":{"source":"apache","extensions":["cmdf"]},"chemical/x-cml":{"source":"apache","extensions":["cml"]},"chemical/x-csml":{"source":"apache","extensions":["csml"]},"chemical/x-pdb":{"source":"apache"},"chemical/x-xyz":{"source":"apache","extensions":["xyz"]},"font/collection":{"source":"iana","extensions":["ttc"]},"font/otf":{"source":"iana","compressible":true,"extensions":["otf"]},"font/sfnt":{"source":"iana"},"font/ttf":{"source":"iana","compressible":true,"extensions":["ttf"]},"font/woff":{"source":"iana","extensions":["woff"]},"font/woff2":{"source":"iana","extensions":["woff2"]},"image/aces":{"source":"iana","extensions":["exr"]},"image/apng":{"compressible":false,"extensions":["apng"]},"image/avci":{"source":"iana","extensions":["avci"]},"image/avcs":{"source":"iana","extensions":["avcs"]},"image/avif":{"source":"iana","compressible":false,"extensions":["avif"]},"image/bmp":{"source":"iana","compressible":true,"extensions":["bmp"]},"image/cgm":{"source":"iana","extensions":["cgm"]},"image/dicom-rle":{"source":"iana","extensions":["drle"]},"image/emf":{"source":"iana","extensions":["emf"]},"image/fits":{"source":"iana","extensions":["fits"]},"image/g3fax":{"source":"iana","extensions":["g3"]},"image/gif":{"source":"iana","compressible":false,"extensions":["gif"]},"image/heic":{"source":"iana","extensions":["heic"]},"image/heic-sequence":{"source":"iana","extensions":["heics"]},"image/heif":{"source":"iana","extensions":["heif"]},"image/heif-sequence":{"source":"iana","extensions":["heifs"]},"image/hej2k":{"source":"iana","extensions":["hej2"]},"image/hsj2":{"source":"iana","extensions":["hsj2"]},"image/ief":{"source":"iana","extensions":["ief"]},"image/jls":{"source":"iana","extensions":["jls"]},"image/jp2":{"source":"iana","compressible":false,"extensions":["jp2","jpg2"]},"image/jpeg":{"source":"iana","compressible":false,"extensions":["jpeg","jpg","jpe"]},"image/jph":{"source":"iana","extensions":["jph"]},"image/jphc":{"source":"iana","extensions":["jhc"]},"image/jpm":{"source":"iana","compressible":false,"extensions":["jpm"]},"image/jpx":{"source":"iana","compressible":false,"extensions":["jpx","jpf"]},"image/jxr":{"source":"iana","extensions":["jxr"]},"image/jxra":{"source":"iana","extensions":["jxra"]},"image/jxrs":{"source":"iana","extensions":["jxrs"]},"image/jxs":{"source":"iana","extensions":["jxs"]},"image/jxsc":{"source":"iana","extensions":["jxsc"]},"image/jxsi":{"source":"iana","extensions":["jxsi"]},"image/jxss":{"source":"iana","extensions":["jxss"]},"image/ktx":{"source":"iana","extensions":["ktx"]},"image/ktx2":{"source":"iana","extensions":["ktx2"]},"image/naplps":{"source":"iana"},"image/pjpeg":{"compressible":false},"image/png":{"source":"iana","compressible":false,"extensions":["png"]},"image/prs.btif":{"source":"iana","extensions":["btif"]},"image/prs.pti":{"source":"iana","extensions":["pti"]},"image/pwg-raster":{"source":"iana"},"image/sgi":{"source":"apache","extensions":["sgi"]},"image/svg+xml":{"source":"iana","compressible":true,"extensions":["svg","svgz"]},"image/t38":{"source":"iana","extensions":["t38"]},"image/tiff":{"source":"iana","compressible":false,"extensions":["tif","tiff"]},"image/tiff-fx":{"source":"iana","extensions":["tfx"]},"image/vnd.adobe.photoshop":{"source":"iana","compressible":true,"extensions":["psd"]},"image/vnd.airzip.accelerator.azv":{"source":"iana","extensions":["azv"]},"image/vnd.cns.inf2":{"source":"iana"},"image/vnd.dece.graphic":{"source":"iana","extensions":["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{"source":"iana","extensions":["djvu","djv"]},"image/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"image/vnd.dwg":{"source":"iana","extensions":["dwg"]},"image/vnd.dxf":{"source":"iana","extensions":["dxf"]},"image/vnd.fastbidsheet":{"source":"iana","extensions":["fbs"]},"image/vnd.fpx":{"source":"iana","extensions":["fpx"]},"image/vnd.fst":{"source":"iana","extensions":["fst"]},"image/vnd.fujixerox.edmics-mmr":{"source":"iana","extensions":["mmr"]},"image/vnd.fujixerox.edmics-rlc":{"source":"iana","extensions":["rlc"]},"image/vnd.globalgraphics.pgb":{"source":"iana"},"image/vnd.microsoft.icon":{"source":"iana","compressible":true,"extensions":["ico"]},"image/vnd.mix":{"source":"iana"},"image/vnd.mozilla.apng":{"source":"iana"},"image/vnd.ms-dds":{"compressible":true,"extensions":["dds"]},"image/vnd.ms-modi":{"source":"iana","extensions":["mdi"]},"image/vnd.ms-photo":{"source":"apache","extensions":["wdp"]},"image/vnd.net-fpx":{"source":"iana","extensions":["npx"]},"image/vnd.pco.b16":{"source":"iana","extensions":["b16"]},"image/vnd.radiance":{"source":"iana"},"image/vnd.sealed.png":{"source":"iana"},"image/vnd.sealedmedia.softseal.gif":{"source":"iana"},"image/vnd.sealedmedia.softseal.jpg":{"source":"iana"},"image/vnd.svf":{"source":"iana"},"image/vnd.tencent.tap":{"source":"iana","extensions":["tap"]},"image/vnd.valve.source.texture":{"source":"iana","extensions":["vtf"]},"image/vnd.wap.wbmp":{"source":"iana","extensions":["wbmp"]},"image/vnd.xiff":{"source":"iana","extensions":["xif"]},"image/vnd.zbrush.pcx":{"source":"iana","extensions":["pcx"]},"image/webp":{"source":"apache","extensions":["webp"]},"image/wmf":{"source":"iana","extensions":["wmf"]},"image/x-3ds":{"source":"apache","extensions":["3ds"]},"image/x-cmu-raster":{"source":"apache","extensions":["ras"]},"image/x-cmx":{"source":"apache","extensions":["cmx"]},"image/x-freehand":{"source":"apache","extensions":["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{"source":"apache","compressible":true,"extensions":["ico"]},"image/x-jng":{"source":"nginx","extensions":["jng"]},"image/x-mrsid-image":{"source":"apache","extensions":["sid"]},"image/x-ms-bmp":{"source":"nginx","compressible":true,"extensions":["bmp"]},"image/x-pcx":{"source":"apache","extensions":["pcx"]},"image/x-pict":{"source":"apache","extensions":["pic","pct"]},"image/x-portable-anymap":{"source":"apache","extensions":["pnm"]},"image/x-portable-bitmap":{"source":"apache","extensions":["pbm"]},"image/x-portable-graymap":{"source":"apache","extensions":["pgm"]},"image/x-portable-pixmap":{"source":"apache","extensions":["ppm"]},"image/x-rgb":{"source":"apache","extensions":["rgb"]},"image/x-tga":{"source":"apache","extensions":["tga"]},"image/x-xbitmap":{"source":"apache","extensions":["xbm"]},"image/x-xcf":{"compressible":false},"image/x-xpixmap":{"source":"apache","extensions":["xpm"]},"image/x-xwindowdump":{"source":"apache","extensions":["xwd"]},"message/cpim":{"source":"iana"},"message/delivery-status":{"source":"iana"},"message/disposition-notification":{"source":"iana","extensions":["disposition-notification"]},"message/external-body":{"source":"iana"},"message/feedback-report":{"source":"iana"},"message/global":{"source":"iana","extensions":["u8msg"]},"message/global-delivery-status":{"source":"iana","extensions":["u8dsn"]},"message/global-disposition-notification":{"source":"iana","extensions":["u8mdn"]},"message/global-headers":{"source":"iana","extensions":["u8hdr"]},"message/http":{"source":"iana","compressible":false},"message/imdn+xml":{"source":"iana","compressible":true},"message/news":{"source":"iana"},"message/partial":{"source":"iana","compressible":false},"message/rfc822":{"source":"iana","compressible":true,"extensions":["eml","mime"]},"message/s-http":{"source":"iana"},"message/sip":{"source":"iana"},"message/sipfrag":{"source":"iana"},"message/tracking-status":{"source":"iana"},"message/vnd.si.simp":{"source":"iana"},"message/vnd.wfa.wsc":{"source":"iana","extensions":["wsc"]},"model/3mf":{"source":"iana","extensions":["3mf"]},"model/e57":{"source":"iana"},"model/gltf+json":{"source":"iana","compressible":true,"extensions":["gltf"]},"model/gltf-binary":{"source":"iana","compressible":true,"extensions":["glb"]},"model/iges":{"source":"iana","compressible":false,"extensions":["igs","iges"]},"model/mesh":{"source":"iana","compressible":false,"extensions":["msh","mesh","silo"]},"model/mtl":{"source":"iana","extensions":["mtl"]},"model/obj":{"source":"iana","extensions":["obj"]},"model/step":{"source":"iana"},"model/step+xml":{"source":"iana","compressible":true,"extensions":["stpx"]},"model/step+zip":{"source":"iana","compressible":false,"extensions":["stpz"]},"model/step-xml+zip":{"source":"iana","compressible":false,"extensions":["stpxz"]},"model/stl":{"source":"iana","extensions":["stl"]},"model/vnd.collada+xml":{"source":"iana","compressible":true,"extensions":["dae"]},"model/vnd.dwf":{"source":"iana","extensions":["dwf"]},"model/vnd.flatland.3dml":{"source":"iana"},"model/vnd.gdl":{"source":"iana","extensions":["gdl"]},"model/vnd.gs-gdl":{"source":"apache"},"model/vnd.gs.gdl":{"source":"iana"},"model/vnd.gtw":{"source":"iana","extensions":["gtw"]},"model/vnd.moml+xml":{"source":"iana","compressible":true},"model/vnd.mts":{"source":"iana","extensions":["mts"]},"model/vnd.opengex":{"source":"iana","extensions":["ogex"]},"model/vnd.parasolid.transmit.binary":{"source":"iana","extensions":["x_b"]},"model/vnd.parasolid.transmit.text":{"source":"iana","extensions":["x_t"]},"model/vnd.pytha.pyox":{"source":"iana"},"model/vnd.rosette.annotated-data-model":{"source":"iana"},"model/vnd.sap.vds":{"source":"iana","extensions":["vds"]},"model/vnd.usdz+zip":{"source":"iana","compressible":false,"extensions":["usdz"]},"model/vnd.valve.source.compiled-map":{"source":"iana","extensions":["bsp"]},"model/vnd.vtu":{"source":"iana","extensions":["vtu"]},"model/vrml":{"source":"iana","compressible":false,"extensions":["wrl","vrml"]},"model/x3d+binary":{"source":"apache","compressible":false,"extensions":["x3db","x3dbz"]},"model/x3d+fastinfoset":{"source":"iana","extensions":["x3db"]},"model/x3d+vrml":{"source":"apache","compressible":false,"extensions":["x3dv","x3dvz"]},"model/x3d+xml":{"source":"iana","compressible":true,"extensions":["x3d","x3dz"]},"model/x3d-vrml":{"source":"iana","extensions":["x3dv"]},"multipart/alternative":{"source":"iana","compressible":false},"multipart/appledouble":{"source":"iana"},"multipart/byteranges":{"source":"iana"},"multipart/digest":{"source":"iana"},"multipart/encrypted":{"source":"iana","compressible":false},"multipart/form-data":{"source":"iana","compressible":false},"multipart/header-set":{"source":"iana"},"multipart/mixed":{"source":"iana"},"multipart/multilingual":{"source":"iana"},"multipart/parallel":{"source":"iana"},"multipart/related":{"source":"iana","compressible":false},"multipart/report":{"source":"iana"},"multipart/signed":{"source":"iana","compressible":false},"multipart/vnd.bint.med-plus":{"source":"iana"},"multipart/voice-message":{"source":"iana"},"multipart/x-mixed-replace":{"source":"iana"},"text/1d-interleaved-parityfec":{"source":"iana"},"text/cache-manifest":{"source":"iana","compressible":true,"extensions":["appcache","manifest"]},"text/calendar":{"source":"iana","extensions":["ics","ifb"]},"text/calender":{"compressible":true},"text/cmd":{"compressible":true},"text/coffeescript":{"extensions":["coffee","litcoffee"]},"text/cql":{"source":"iana"},"text/cql-expression":{"source":"iana"},"text/cql-identifier":{"source":"iana"},"text/css":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["css"]},"text/csv":{"source":"iana","compressible":true,"extensions":["csv"]},"text/csv-schema":{"source":"iana"},"text/directory":{"source":"iana"},"text/dns":{"source":"iana"},"text/ecmascript":{"source":"iana"},"text/encaprtp":{"source":"iana"},"text/enriched":{"source":"iana"},"text/fhirpath":{"source":"iana"},"text/flexfec":{"source":"iana"},"text/fwdred":{"source":"iana"},"text/gff3":{"source":"iana"},"text/grammar-ref-list":{"source":"iana"},"text/html":{"source":"iana","compressible":true,"extensions":["html","htm","shtml"]},"text/jade":{"extensions":["jade"]},"text/javascript":{"source":"iana","compressible":true},"text/jcr-cnd":{"source":"iana"},"text/jsx":{"compressible":true,"extensions":["jsx"]},"text/less":{"compressible":true,"extensions":["less"]},"text/markdown":{"source":"iana","compressible":true,"extensions":["markdown","md"]},"text/mathml":{"source":"nginx","extensions":["mml"]},"text/mdx":{"compressible":true,"extensions":["mdx"]},"text/mizar":{"source":"iana"},"text/n3":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["n3"]},"text/parameters":{"source":"iana","charset":"UTF-8"},"text/parityfec":{"source":"iana"},"text/plain":{"source":"iana","compressible":true,"extensions":["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{"source":"iana","charset":"UTF-8"},"text/prs.fallenstein.rst":{"source":"iana"},"text/prs.lines.tag":{"source":"iana","extensions":["dsc"]},"text/prs.prop.logic":{"source":"iana"},"text/raptorfec":{"source":"iana"},"text/red":{"source":"iana"},"text/rfc822-headers":{"source":"iana"},"text/richtext":{"source":"iana","compressible":true,"extensions":["rtx"]},"text/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"text/rtp-enc-aescm128":{"source":"iana"},"text/rtploopback":{"source":"iana"},"text/rtx":{"source":"iana"},"text/sgml":{"source":"iana","extensions":["sgml","sgm"]},"text/shaclc":{"source":"iana"},"text/shex":{"source":"iana","extensions":["shex"]},"text/slim":{"extensions":["slim","slm"]},"text/spdx":{"source":"iana","extensions":["spdx"]},"text/strings":{"source":"iana"},"text/stylus":{"extensions":["stylus","styl"]},"text/t140":{"source":"iana"},"text/tab-separated-values":{"source":"iana","compressible":true,"extensions":["tsv"]},"text/troff":{"source":"iana","extensions":["t","tr","roff","man","me","ms"]},"text/turtle":{"source":"iana","charset":"UTF-8","extensions":["ttl"]},"text/ulpfec":{"source":"iana"},"text/uri-list":{"source":"iana","compressible":true,"extensions":["uri","uris","urls"]},"text/vcard":{"source":"iana","compressible":true,"extensions":["vcard"]},"text/vnd.a":{"source":"iana"},"text/vnd.abc":{"source":"iana"},"text/vnd.ascii-art":{"source":"iana"},"text/vnd.curl":{"source":"iana","extensions":["curl"]},"text/vnd.curl.dcurl":{"source":"apache","extensions":["dcurl"]},"text/vnd.curl.mcurl":{"source":"apache","extensions":["mcurl"]},"text/vnd.curl.scurl":{"source":"apache","extensions":["scurl"]},"text/vnd.debian.copyright":{"source":"iana","charset":"UTF-8"},"text/vnd.dmclientscript":{"source":"iana"},"text/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"text/vnd.esmertec.theme-descriptor":{"source":"iana","charset":"UTF-8"},"text/vnd.familysearch.gedcom":{"source":"iana","extensions":["ged"]},"text/vnd.ficlab.flt":{"source":"iana"},"text/vnd.fly":{"source":"iana","extensions":["fly"]},"text/vnd.fmi.flexstor":{"source":"iana","extensions":["flx"]},"text/vnd.gml":{"source":"iana"},"text/vnd.graphviz":{"source":"iana","extensions":["gv"]},"text/vnd.hans":{"source":"iana"},"text/vnd.hgl":{"source":"iana"},"text/vnd.in3d.3dml":{"source":"iana","extensions":["3dml"]},"text/vnd.in3d.spot":{"source":"iana","extensions":["spot"]},"text/vnd.iptc.newsml":{"source":"iana"},"text/vnd.iptc.nitf":{"source":"iana"},"text/vnd.latex-z":{"source":"iana"},"text/vnd.motorola.reflex":{"source":"iana"},"text/vnd.ms-mediapackage":{"source":"iana"},"text/vnd.net2phone.commcenter.command":{"source":"iana"},"text/vnd.radisys.msml-basic-layout":{"source":"iana"},"text/vnd.senx.warpscript":{"source":"iana"},"text/vnd.si.uricatalogue":{"source":"iana"},"text/vnd.sosi":{"source":"iana"},"text/vnd.sun.j2me.app-descriptor":{"source":"iana","charset":"UTF-8","extensions":["jad"]},"text/vnd.trolltech.linguist":{"source":"iana","charset":"UTF-8"},"text/vnd.wap.si":{"source":"iana"},"text/vnd.wap.sl":{"source":"iana"},"text/vnd.wap.wml":{"source":"iana","extensions":["wml"]},"text/vnd.wap.wmlscript":{"source":"iana","extensions":["wmls"]},"text/vtt":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["vtt"]},"text/x-asm":{"source":"apache","extensions":["s","asm"]},"text/x-c":{"source":"apache","extensions":["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{"source":"nginx","extensions":["htc"]},"text/x-fortran":{"source":"apache","extensions":["f","for","f77","f90"]},"text/x-gwt-rpc":{"compressible":true},"text/x-handlebars-template":{"extensions":["hbs"]},"text/x-java-source":{"source":"apache","extensions":["java"]},"text/x-jquery-tmpl":{"compressible":true},"text/x-lua":{"extensions":["lua"]},"text/x-markdown":{"compressible":true,"extensions":["mkd"]},"text/x-nfo":{"source":"apache","extensions":["nfo"]},"text/x-opml":{"source":"apache","extensions":["opml"]},"text/x-org":{"compressible":true,"extensions":["org"]},"text/x-pascal":{"source":"apache","extensions":["p","pas"]},"text/x-processing":{"compressible":true,"extensions":["pde"]},"text/x-sass":{"extensions":["sass"]},"text/x-scss":{"extensions":["scss"]},"text/x-setext":{"source":"apache","extensions":["etx"]},"text/x-sfv":{"source":"apache","extensions":["sfv"]},"text/x-suse-ymp":{"compressible":true,"extensions":["ymp"]},"text/x-uuencode":{"source":"apache","extensions":["uu"]},"text/x-vcalendar":{"source":"apache","extensions":["vcs"]},"text/x-vcard":{"source":"apache","extensions":["vcf"]},"text/xml":{"source":"iana","compressible":true,"extensions":["xml"]},"text/xml-external-parsed-entity":{"source":"iana"},"text/yaml":{"compressible":true,"extensions":["yaml","yml"]},"video/1d-interleaved-parityfec":{"source":"iana"},"video/3gpp":{"source":"iana","extensions":["3gp","3gpp"]},"video/3gpp-tt":{"source":"iana"},"video/3gpp2":{"source":"iana","extensions":["3g2"]},"video/av1":{"source":"iana"},"video/bmpeg":{"source":"iana"},"video/bt656":{"source":"iana"},"video/celb":{"source":"iana"},"video/dv":{"source":"iana"},"video/encaprtp":{"source":"iana"},"video/ffv1":{"source":"iana"},"video/flexfec":{"source":"iana"},"video/h261":{"source":"iana","extensions":["h261"]},"video/h263":{"source":"iana","extensions":["h263"]},"video/h263-1998":{"source":"iana"},"video/h263-2000":{"source":"iana"},"video/h264":{"source":"iana","extensions":["h264"]},"video/h264-rcdo":{"source":"iana"},"video/h264-svc":{"source":"iana"},"video/h265":{"source":"iana"},"video/iso.segment":{"source":"iana","extensions":["m4s"]},"video/jpeg":{"source":"iana","extensions":["jpgv"]},"video/jpeg2000":{"source":"iana"},"video/jpm":{"source":"apache","extensions":["jpm","jpgm"]},"video/jxsv":{"source":"iana"},"video/mj2":{"source":"iana","extensions":["mj2","mjp2"]},"video/mp1s":{"source":"iana"},"video/mp2p":{"source":"iana"},"video/mp2t":{"source":"iana","extensions":["ts"]},"video/mp4":{"source":"iana","compressible":false,"extensions":["mp4","mp4v","mpg4"]},"video/mp4v-es":{"source":"iana"},"video/mpeg":{"source":"iana","compressible":false,"extensions":["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{"source":"iana"},"video/mpv":{"source":"iana"},"video/nv":{"source":"iana"},"video/ogg":{"source":"iana","compressible":false,"extensions":["ogv"]},"video/parityfec":{"source":"iana"},"video/pointer":{"source":"iana"},"video/quicktime":{"source":"iana","compressible":false,"extensions":["qt","mov"]},"video/raptorfec":{"source":"iana"},"video/raw":{"source":"iana"},"video/rtp-enc-aescm128":{"source":"iana"},"video/rtploopback":{"source":"iana"},"video/rtx":{"source":"iana"},"video/scip":{"source":"iana"},"video/smpte291":{"source":"iana"},"video/smpte292m":{"source":"iana"},"video/ulpfec":{"source":"iana"},"video/vc1":{"source":"iana"},"video/vc2":{"source":"iana"},"video/vnd.cctv":{"source":"iana"},"video/vnd.dece.hd":{"source":"iana","extensions":["uvh","uvvh"]},"video/vnd.dece.mobile":{"source":"iana","extensions":["uvm","uvvm"]},"video/vnd.dece.mp4":{"source":"iana"},"video/vnd.dece.pd":{"source":"iana","extensions":["uvp","uvvp"]},"video/vnd.dece.sd":{"source":"iana","extensions":["uvs","uvvs"]},"video/vnd.dece.video":{"source":"iana","extensions":["uvv","uvvv"]},"video/vnd.directv.mpeg":{"source":"iana"},"video/vnd.directv.mpeg-tts":{"source":"iana"},"video/vnd.dlna.mpeg-tts":{"source":"iana"},"video/vnd.dvb.file":{"source":"iana","extensions":["dvb"]},"video/vnd.fvt":{"source":"iana","extensions":["fvt"]},"video/vnd.hns.video":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.ttsavc":{"source":"iana"},"video/vnd.iptvforum.ttsmpeg2":{"source":"iana"},"video/vnd.motorola.video":{"source":"iana"},"video/vnd.motorola.videop":{"source":"iana"},"video/vnd.mpegurl":{"source":"iana","extensions":["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{"source":"iana","extensions":["pyv"]},"video/vnd.nokia.interleaved-multimedia":{"source":"iana"},"video/vnd.nokia.mp4vr":{"source":"iana"},"video/vnd.nokia.videovoip":{"source":"iana"},"video/vnd.objectvideo":{"source":"iana"},"video/vnd.radgamettools.bink":{"source":"iana"},"video/vnd.radgamettools.smacker":{"source":"iana"},"video/vnd.sealed.mpeg1":{"source":"iana"},"video/vnd.sealed.mpeg4":{"source":"iana"},"video/vnd.sealed.swf":{"source":"iana"},"video/vnd.sealedmedia.softseal.mov":{"source":"iana"},"video/vnd.uvvu.mp4":{"source":"iana","extensions":["uvu","uvvu"]},"video/vnd.vivo":{"source":"iana","extensions":["viv"]},"video/vnd.youtube.yt":{"source":"iana"},"video/vp8":{"source":"iana"},"video/vp9":{"source":"iana"},"video/webm":{"source":"apache","compressible":false,"extensions":["webm"]},"video/x-f4v":{"source":"apache","extensions":["f4v"]},"video/x-fli":{"source":"apache","extensions":["fli"]},"video/x-flv":{"source":"apache","compressible":false,"extensions":["flv"]},"video/x-m4v":{"source":"apache","extensions":["m4v"]},"video/x-matroska":{"source":"apache","compressible":false,"extensions":["mkv","mk3d","mks"]},"video/x-mng":{"source":"apache","extensions":["mng"]},"video/x-ms-asf":{"source":"apache","extensions":["asf","asx"]},"video/x-ms-vob":{"source":"apache","extensions":["vob"]},"video/x-ms-wm":{"source":"apache","extensions":["wm"]},"video/x-ms-wmv":{"source":"apache","compressible":false,"extensions":["wmv"]},"video/x-ms-wmx":{"source":"apache","extensions":["wmx"]},"video/x-ms-wvx":{"source":"apache","extensions":["wvx"]},"video/x-msvideo":{"source":"apache","extensions":["avi"]},"video/x-sgi-movie":{"source":"apache","extensions":["movie"]},"video/x-smv":{"source":"apache","extensions":["smv"]},"x-conference/x-cooltalk":{"source":"apache","extensions":["ice"]},"x-shader/x-fragment":{"compressible":true},"x-shader/x-vertex":{"compressible":true}}',
        )
      },
    },
    i = {}
  function r(e) {
    var t = i[e]
    if (void 0 !== t) return t.exports
    var n = (i[e] = { exports: {} })
    return (a[e].call(n.exports, n, n.exports, r), n.exports)
  }
  ;((r.m = a),
    (r.c = i),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e
      return (r.d(t, { a: t }), t)
    }),
    (t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__),
    (r.t = function (n, a) {
      if (
        (1 & a && (n = this(n)),
        8 & a || ("object" == typeof n && n && ((4 & a && n.__esModule) || (16 & a && "function" == typeof n.then))))
      )
        return n
      var i = Object.create(null)
      r.r(i)
      var o = {}
      e = e || [null, t({}), t([]), t(t)]
      for (var s = 2 & a && n; ("object" == typeof s || "function" == typeof s) && !~e.indexOf(s); s = t(s))
        Object.getOwnPropertyNames(s).forEach((e) => {
          o[e] = () => n[e]
        })
      return ((o.default = () => n), r.d(i, o), i)
    }),
    (r.d = (e, t, n) => {
      var a = (t, n) => {
        for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, [n]: t[a] })
      }
      ;(a(t, "get"), a(n, "value"))
    }),
    (r.f = {}),
    (r.e = (e) => Promise.all(Object.keys(r.f).reduce((t, n) => (r.f[n](e, t), t), []))),
    (r.u = (e) =>
      "early-bootstrap-" +
      e +
      "-" +
      {
        176: "f9b18f792cc535b1",
        207: "650163685606ae20",
        217: "693574dde6e08ba2",
        238: "7e7d910d46ec7d57",
        300: "84e82dcbcf3e9362",
        337: "586c97155defdf81",
        35: "4a401639174c6adf",
        441: "16b3dfee683f3646",
        507: "bb196959312428b7",
        623: "793323257ed31f5e",
        650: "677fb0ac5aafeb17",
        683: "10e6326b5a084418",
        694: "69d8eace30d87705",
        7: "a5d632ed685e6979",
        718: "fe77df518c1b6f73",
        719: "3f2c0f5e5974a155",
        800: "ea0bfe6c2dec424f",
        824: "de8313738dd96f7c",
        887: "f7ed78e57a5e2e4f",
        904: "7cf0df7d2b242d62",
        916: "2fd4cc5178eaa3b5",
        927: "c1255fa39aa718b7",
        966: "ff3074313522caad",
      }[e] +
      ".js"),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      ;("u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }))
    }),
    (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (n = { 942: 1 }),
    (r.f.require = (e, t) => {
      n[e] ||
        ((e) => {
          var t = e.modules,
            a = e.ids,
            i = e.runtime
          for (var o in t) r.o(t, o) && (r.m[o] = t[o])
          i && i(r)
          for (var s = 0; s < a.length; s++) n[a[s]] = 1
        })(require("./" + r.u(e)))
    }))
  var o = r(10478)
  module.exports = o
})()
//# sourceMappingURL=early-bootstrap.js.map
