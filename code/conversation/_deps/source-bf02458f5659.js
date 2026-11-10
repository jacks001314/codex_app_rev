import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A4t as n,
  CCt as r,
  Jgt as i,
  Xgt as a,
  Ygt as o,
  Zgt as s,
  _Ct as c,
  dCt as l,
  j4t as u,
  ont as d,
  pCt as f,
  qgt as p,
  yCt as m,
} from "./app-initial-f094ef01c64d.js";
function h({ conversation: e, conversationId: t }) {
  let n = new Blob([JSON.stringify(e, null, 2)], { type: _ }),
    r = URL.createObjectURL(n),
    i = document.createElement(`a`);
  ((i.href = r),
    (i.download = `chatgpt-conversation-${g(t)}.json`),
    i.click(),
    URL.revokeObjectURL(r));
}
function g(e) {
  return e.replace(/[^a-zA-Z0-9._-]/g, `_`) || `conversation`;
}
var _,
  v = e(() => {
    _ = `application/json;charset=utf-8`;
  });
function y(e, t) {
  let n = r(e.content),
    i = r(e.metadata),
    a = r(i?.__internal),
    o = a?.raw_tokens;
  return {
    authorName: c(e.author.name),
    compressionFactor: typeof a?.compression_factor == `number` ? a.compression_factor : null,
    contentType: c(n?.content_type),
    createdAt: typeof e.create_time == `number` ? e.create_time : null,
    engine: b(a),
    experimentName: c(a?.model_experiment_name),
    experimentTreatment: c(a?.model_experiment_treatment),
    id: e.id ?? `${e.author.role}-${t}`,
    imageGenerationModelId: c(a?.image_gen_virtual_model),
    json: JSON.stringify(e, null, 2),
    modelId: c(a?.model_id),
    preview: f(e).replace(/\s+/g, ` `).trim(),
    rawTokenCount: Array.isArray(o) ? o.length : null,
    recipient: c(e.recipient),
    requestId: c(i?.request_id),
    role: e.author.role,
  };
}
function b(e) {
  let t = c(e?.s2s_vm_id);
  if (t != null) return t;
  let n = r(r(e?.agent)?.settings),
    i = c(e?.completion_api_used);
  if (i != null && n != null)
    for (let [e, t] of Object.entries(n)) {
      let n = r(t);
      if (e.endsWith(`_api`) && c(n?.name) === i) {
        let e = c(n?.engine);
        if (e != null) return e;
      }
    }
  return c(r(r(n?.completion_api))?.engine);
}
var x,
  S,
  C,
  w,
  T = e(() => {
    (u(),
      (x = t(d(), 1)),
      v(),
      s(),
      m(),
      (S = class extends n {
        #e = null;
        #t = null;
        #n = new Set();
        #r = null;
        #i = (0, x.default)(() => this.#a(), 100, { leading: !1 });
        async runAction({ action: e, conversationId: t }) {
          let n = this.#e;
          if (n == null || n.conversationId !== t) return !1;
          switch (e) {
            case `clear-trace`:
              i();
              break;
            case `download-messages`:
              if (n.conversation == null) return !1;
              h({
                conversation: { conversation_id: t, messages: l(n.conversation) },
                conversationId: t,
              });
              break;
            case `download-trace`:
              h({ conversation: o(), conversationId: `stream-trace` });
              break;
            case `refresh-trace`:
              break;
          }
          return (this.#i.cancel(), this.#a(), !0);
        }
        clearConversation(e) {
          this.#t === e && this.setConversation(e, null);
        }
        setConversation(e, t) {
          let n = this.#e?.conversationId !== t?.conversationId;
          ((this.#e = t),
            (this.#t = e),
            this.#s(),
            this.#n.size !== 0 && (n ? (this.#i.cancel(), this.#a()) : this.#i()));
        }
        async subscribe(e) {
          let t = e.dup();
          return (
            this.#n.add(t),
            t.onRpcBroken(() => this.#o(t)),
            this.#s(),
            this.#a(),
            new w(() => this.#o(t))
          );
        }
        #a() {
          if (this.#n.size === 0) return;
          let e = this.#e,
            t =
              e == null
                ? null
                : {
                    conversationId: e.conversationId,
                    isTppConversation: e.isTppConversation,
                    messages: e.conversation == null ? null : l(e.conversation).map(y),
                    traceEntryCount: a(),
                  };
          for (let e of this.#n) e(t).catch(() => this.#o(e));
        }
        #o(e) {
          this.#n.delete(e) && (e[Symbol.dispose](), this.#s());
        }
        #s() {
          if (this.#e != null && this.#n.size > 0) {
            this.#r = this.#r ?? p();
            return;
          }
          (this.#i.cancel(), this.#r?.(), (this.#r = null));
        }
      }),
      (C = new S()),
      (w = class extends n {
        cleanup;
        constructor(e) {
          (super(), (this.cleanup = e));
        }
        unsubscribe() {
          this.cleanup();
        }
        [Symbol.dispose]() {
          this.unsubscribe();
        }
      }));
  });
export { T as n, C as t };
//# sourceMappingURL=source-bf02458f5659.js.map
