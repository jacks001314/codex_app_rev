"use strict"
;((exports.ids = [176]),
  (exports.modules = {
    10739(e, t, i) {
      var s = i(95398),
        r = i(86697),
        a = i.n(r),
        l = i(4482),
        d = i(4745),
        o = i(35553)
      let n = o.discriminatedUnion("type", [
        o.object({ type: o.literal("ready"), sampleRate: o.number().positive() }),
        o.object({ type: o.literal("levels"), levels: o.array(o.number().min(0).max(1)).length(24) }),
        o.object({ type: o.literal("error"), operation: o.string() }),
      ])
      i.d(
        t,
        {},
        {
          SpectrumCapture: class {
            #e = new Set()
            #t
            #i
            #s = !1
            subscribe(e) {
              return (
                this.#e.add(e),
                null == this.#t ? this.#r() : this.#s && e({ type: "ready" }),
                () => {
                  ;(this.#e.delete(e), 0 === this.#e.size && this.#a())
                }
              )
            }
            #r() {
              let e = l.app.isPackaged
                  ? a().join(process.resourcesPath, "native", "system-audio-spectrum")
                  : a().join(
                      l.app.getAppPath(),
                      "native/system-audio-spectrum/build",
                      `Release-${process.arch}`,
                      "system-audio-spectrum",
                    ),
                t = (0, s.spawn)(d.K56.resolve(e) ?? e, [], { stdio: ["pipe", "pipe", "ignore"] })
              ;((this.#t = t), (this.#i = setTimeout(() => this.#l(t), 6e4)), this.#i.unref())
              let i = ""
              ;(t.stdout?.setEncoding("utf8"),
                t.stdout?.on("data", (e) => {
                  if (this.#t !== t) return
                  let s = (i += e).indexOf("\n")
                  for (; -1 !== s && this.#t === t;) {
                    let e = i.slice(0, s)
                    i = i.slice(s + 1)
                    try {
                      let i = n.safeParse(JSON.parse(e))
                      if (!i.success) return void this.#l(t)
                      if ("error" === i.data.type)
                        return void this.#l(
                          t,
                          "permission" === i.data.operation ? "permission-denied" : "capture-failed",
                        )
                      for (let e of ("ready" === i.data.type && ((this.#s = !0), clearTimeout(this.#i)), this.#e))
                        e("ready" === i.data.type ? { type: "ready" } : i.data)
                    } catch {
                      this.#l(t)
                    }
                    s = i.indexOf("\n")
                  }
                  i.length > 4096 && this.#l(t)
                }),
                t.once("error", () => this.#l(t)),
                t.once("exit", () => this.#l(t)))
            }
            #a() {
              let e = this.#t
              if (
                ((this.#t = void 0),
                (this.#s = !1),
                clearTimeout(this.#i),
                (this.#i = void 0),
                null == e || (e.stdin?.end(), null != e.exitCode || null != e.signalCode))
              )
                return
              let t = setTimeout(() => e.kill("SIGKILL"), 2e3)
              ;(t.unref(), e.once("exit", () => clearTimeout(t)), e.kill())
            }
            #l(e, t = "capture-failed") {
              if (this.#t === e) for (let e of this.#e) e({ type: "error", reason: t })
            }
          },
        },
      )
    },
  }))
//# sourceMappingURL=early-bootstrap-176-2e3ffb6d8b22c677.js.map
