"use strict"
;((exports.ids = [927]),
  (exports.modules = {
    72546(e, t, r) {
      let n
      var i = r(89477),
        l = r(86697),
        o = r.n(l),
        a = r(4482),
        s = r(24250),
        p = r(68802)
      let u = new Map(),
        c = new Set(),
        S = (0, p.$Cz)("wallpaper-tint"),
        g = {
          "com.apple.wallpaper.choice.sequoia": "WallpaperSequoiaExtension.appex",
          "com.apple.wallpaper.choice.sonoma": "WallpaperSonomaExtension.appex",
          "com.apple.NeptuneOneExtension": "NeptuneOneWallpaper.appex",
        }
      function f() {
        return o().join(a.app.getPath("home"), "Library/Application Support/com.apple.wallpaper/Store")
      }
      r.d(
        t,
        {},
        {
          observeMacWallpaper: function (e, t, r) {
            let l
            if (e.isDestroyed()) return
            let a = new s.NobjcLibrary("/System/Library/Frameworks/AppKit.framework/AppKit"),
              p = (0, s.fromPointer)(e.getNativeWindowHandle()).window(),
              d = a.NSNotificationCenter.defaultCenter(),
              h = d.addObserverForName$object$queue$usingBlock$(
                a.NSString.stringWithUTF8String$("NSWindowDidChangeScreenNotification"),
                p,
                null,
                (0, s.typedBlock)({ returns: "v", args: ["@"] }, t),
              )
            try {
              var N
              ;((N = t),
                n ||
                  (n = (0, i.watch)(f(), (e, t) => {
                    if (null == t || "Index.plist" === t) for (let e of (u.clear(), c)) e()
                  })).on("error", (e) => {
                    S.warning("Wallpaper settings watcher failed", { safe: {}, sensitive: { error: e } })
                  }),
                c.add(N),
                (l = () => {
                  ;(c.delete(N), 0 === c.size && (n?.close(), (n = void 0), u.clear()))
                }))
            } catch (e) {
              S.warning("Unable to watch wallpaper settings", { safe: {}, sensitive: { error: e } })
            }
            return (
              r.addEventListener("abort", () => {
                ;(d.removeObserver$(h), l?.())
              }),
              () => {
                let e = p.screen()
                if (null == e) return null
                let t = (function (e, t) {
                  let r,
                    n = e.NSWorkspace.sharedWorkspace().desktopImageURLForScreen$(t)
                  if (null != n && "/System/Library/CoreServices/DefaultDesktop.heic" !== n.path().UTF8String())
                    return n
                  let i = t.deviceDescription().objectForKey$(e.NSString.stringWithUTF8String$("NSScreenNumber")),
                    l = (0, s.callFunction)(
                      "CGDisplayCreateUUIDFromDisplayID",
                      { returns: "@", args: ["I"] },
                      i.unsignedIntValue(),
                    ),
                    a = (0, s.callFunction)("CFUUIDCreateString", { returns: "@", args: ["^v", "@"] }, null, l)
                  try {
                    r = a.UTF8String()
                  } finally {
                    ;(a.release(), l.release())
                  }
                  let p = e.NSDictionary.dictionaryWithContentsOfFile$(
                    e.NSString.stringWithUTF8String$(o().join(f(), "Index.plist")),
                  )
                  return (function (e, t, r) {
                    let n = (t, r, ...n) => {
                        let i = t
                        for (let t of n) {
                          if (!i?.isKindOfClass$(e.NSDictionary)) return null
                          i = i.objectForKey$(e.NSString.stringWithUTF8String$(t))
                        }
                        return i?.isKindOfClass$(r) ? i : null
                      },
                      i =
                        n(t, e.NSDictionary, "Displays", r, "Desktop") ??
                        n(t, e.NSDictionary, "AllSpacesAndDisplays", "Desktop") ??
                        n(t, e.NSDictionary, "SystemDefault", "Desktop"),
                      l = n(i, e.NSArray, "Content", "Choices"),
                      a = l?.firstObject() ?? null,
                      s = (t) => e.NSURL.fileURLWithPath$(e.NSString.stringWithUTF8String$(t)),
                      p = n(a, e.NSData, "Configuration")
                    if (null != p && p.length() > 0) {
                      let t = e.NSPropertyListSerialization.propertyListWithData$options$format$error$(
                          p,
                          0,
                          null,
                          null,
                        ),
                        r = n(t, e.NSString, "url", "relative")
                      if (null != r) return e.NSURL.URLWithString$(r)
                      let i = n(t, e.NSString, "assetID")
                      if (null != i) {
                        let e = i.UTF8String()
                        return s(o().join(f(), "../aerials/thumbnails", `${e}.png`))
                      }
                    }
                    let u = n(a, e.NSString, "Provider")?.UTF8String(),
                      c = null == u ? void 0 : g[u]
                    return null != c
                      ? s(o().join("/System/Library/ExtensionKit/Extensions", c, "Contents/Resources/thumbnail.heic"))
                      : null
                  })(e, p, r)
                })(a, e)
                if (null == t) return null
                let r = t.absoluteString().UTF8String(),
                  n = u.get(r)
                if (null != n) return n
                let i = (function (e, t) {
                  let r = e.NSBitmapImageRep.imageRepWithContentsOfURL$(t)
                  if (null == r) throw Error("Wallpaper preview could not be decoded")
                  let n = r.pixelsWide(),
                    i = r.pixelsHigh(),
                    l = e.NSColorSpace.sRGBColorSpace(),
                    o = 0,
                    a = 0,
                    s = 0
                  for (let e = 0; e < 16; e++)
                    for (let t = 0; t < 16; t++) {
                      let p = r
                        .colorAtX$y$(Math.floor(((t + 0.5) * n) / 16), Math.floor(((e + 0.5) * i) / 16))
                        .colorUsingColorSpace$(l)
                      ;((o += p.redComponent()), (a += p.greenComponent()), (s += p.blueComponent()))
                    }
                  return `rgb(${(255 * o) / 256}, ${(255 * a) / 256}, ${(255 * s) / 256})`
                })(a, t)
                return (u.set(r, i), i)
              }
            )
          },
        },
      )
    },
  }))
//# sourceMappingURL=early-bootstrap-927-c1255fa39aa718b7.js.map
