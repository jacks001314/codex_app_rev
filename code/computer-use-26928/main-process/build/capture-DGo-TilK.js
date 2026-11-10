const e = require("./rolldown-runtime-CPUxUITh.js"),
  t = require("./zod-ClKgiFhi.js"),
  n = require("./application-network-startup-D74LEWDz.js");
require("./bootstrap-DvSEn4qy.js");
let r = require("electron"),
  i = require("node:path");
i = e.a(i);
let a = require("node:child_process");
var o = t.y(`type`, [
    t.O({ type: t.w(`ready`), sampleRate: t.D().positive() }),
    t.O({ type: t.w(`levels`), levels: t.h(t.D().min(0).max(1)).length(24) }),
    t.O({ type: t.w(`error`), operation: t.N() }),
  ]),
  s = class {
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
      let e = r.app.isPackaged
          ? i.default.join(process.resourcesPath, `native`, `system-audio-spectrum`)
          : i.default.join(
              r.app.getAppPath(),
              `native/system-audio-spectrum/build`,
              `Release-${process.arch}`,
              `system-audio-spectrum`,
            ),
        t = (0, a.spawn)(n.At.resolve(e) ?? e, [], { stdio: [`pipe`, `pipe`, `ignore`] });
      ((this.#t = t), (this.#n = setTimeout(() => this.#o(t), 6e4)), this.#n.unref());
      let s = ``;
      (t.stdout?.setEncoding(`utf8`),
        t.stdout?.on(`data`, (e) => {
          if (this.#t !== t) return;
          s += e;
          let n = s.indexOf(`
`);
          for (; n !== -1 && this.#t === t;) {
            let e = s.slice(0, n);
            s = s.slice(n + 1);
            try {
              let n = o.safeParse(JSON.parse(e));
              if (!n.success) {
                this.#o(t);
                return;
              }
              if (n.data.type === `error`) {
                this.#o(
                  t,
                  n.data.operation === `permission` ? `permission-denied` : `capture-failed`,
                );
                return;
              }
              n.data.type === `ready` && ((this.#r = !0), clearTimeout(this.#n));
              for (let e of this.#e) e(n.data.type === `ready` ? { type: `ready` } : n.data);
            } catch {
              this.#o(t);
            }
            n = s.indexOf(`
`);
          }
          s.length > 4096 && this.#o(t);
        }),
        t.once(`error`, () => this.#o(t)),
        t.once(`exit`, () => this.#o(t)));
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
exports.SpectrumCapture = s;
//# sourceMappingURL=capture-DGo-TilK.js.map
