const e = require("./src-KMpTO78a.js"),
  t = require("./src-B6LqG3ek.js");
let n = require("electron"),
  r = require("node:path");
r = e.o(r);
let i = require("node:child_process");
var a = t.Ql(`type`, [
    t.ru({ type: t.eu(`ready`), sampleRate: t.nu().positive() }),
    t.ru({ type: t.eu(`levels`), levels: t.Yl(t.nu().min(0).max(1)).length(24) }),
    t.ru({ type: t.eu(`error`), operation: t.su() }),
  ]),
  o = class {
    #e = new Set();
    #t;
    #n;
    #r = !1;
    subscribe(e) {
      return (
        this.#e.add(e),
        this.#t == null ? this.#i() : this.#r && e({ type: `ready` }),
        () => {
          (this.#e.delete(e), this.#e.size === 0 && this.#a());
        }
      );
    }
    #i() {
      let e = n.app.isPackaged
          ? r.default.join(process.resourcesPath, `native`, `system-audio-spectrum`)
          : r.default.join(
              n.app.getAppPath(),
              `native/system-audio-spectrum/build`,
              `Release-${process.arch}`,
              `system-audio-spectrum`,
            ),
        o = (0, i.spawn)(t.Jn.resolve(e) ?? e, [], { stdio: [`pipe`, `pipe`, `ignore`] });
      ((this.#t = o), (this.#n = setTimeout(() => this.#o(o), 6e4)), this.#n.unref());
      let s = ``;
      (o.stdout?.setEncoding(`utf8`),
        o.stdout?.on(`data`, (e) => {
          if (this.#t !== o) return;
          s += e;
          let t = s.indexOf(`
`);
          for (; t !== -1 && this.#t === o;) {
            let e = s.slice(0, t);
            s = s.slice(t + 1);
            try {
              let t = a.safeParse(JSON.parse(e));
              if (!t.success) {
                this.#o(o);
                return;
              }
              if (t.data.type === `error`) {
                this.#o(
                  o,
                  t.data.operation === `permission` ? `permission-denied` : `capture-failed`,
                );
                return;
              }
              t.data.type === `ready` && ((this.#r = !0), clearTimeout(this.#n));
              for (let e of this.#e) e(t.data.type === `ready` ? { type: `ready` } : t.data);
            } catch {
              this.#o(o);
            }
            t = s.indexOf(`
`);
          }
          s.length > 4096 && this.#o(o);
        }),
        o.once(`error`, () => this.#o(o)),
        o.once(`exit`, () => this.#o(o)));
    }
    #a() {
      let e = this.#t;
      if (
        ((this.#t = void 0),
        (this.#r = !1),
        clearTimeout(this.#n),
        (this.#n = void 0),
        e == null || (e.stdin?.end(), e.exitCode != null || e.signalCode != null))
      )
        return;
      let t = setTimeout(() => e.kill(`SIGKILL`), 2e3);
      (t.unref(), e.once(`exit`, () => clearTimeout(t)), e.kill());
    }
    #o(e, t = `capture-failed`) {
      if (this.#t === e) for (let e of this.#e) e({ type: `error`, reason: t });
    }
  };
exports.SpectrumCapture = o;
//# sourceMappingURL=capture-DTd6sk5l.js.map
