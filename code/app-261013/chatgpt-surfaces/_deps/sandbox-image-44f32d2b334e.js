const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./open-chatgpt-file-6fc1fe73a6ed.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./external-link-confirmation-dialog-290d71033041.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cat as t,
  EPt as n,
  Ixt as r,
  JCt as i,
  Pxt as a,
  TLt as o,
  Vxt as s,
  Xot as c,
  YCt as l,
  Yot as u,
  fPt as d,
  i3 as f,
  pLt as p,
  pPt as m,
  r3 as ee,
  vzt as h,
  xMt as g,
  xat as _,
  yzt as v,
  zxt as y,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Qn as b,
  BZn as x,
  Cwr as S,
  DGn as te,
  DOn as C,
  Dur as ne,
  EGn as re,
  Eur as ie,
  G4n as ae,
  GMr as oe,
  IGn as w,
  Iet as se,
  J4n as ce,
  JPn as le,
  Let as ue,
  NZn as T,
  O0n as de,
  OPr as fe,
  TGn as pe,
  VGn as E,
  Xl as me,
  YMr as D,
  YPn as O,
  ZPn as k,
  Zl as A,
  ap as j,
  e$n as M,
  fWn as N,
  gwr as P,
  kPr as F,
  kZn as I,
  lIr as L,
  nJn as R,
  nc as z,
  op as he,
  pWn as ge,
  pZn as B,
  rc as _e,
  rs as ve,
  tJn as ye,
  tNr as be,
  ts as xe,
  uIr as Se,
  vfr as V,
  wOn as Ce,
  xfr as we,
  yjn as H,
  zZn as Te,
} from "./app-initial-5851df3f6cb1.js";
import { c as Ee, n as De, o as Oe, t as ke } from "./file-ef1f4b6b35dd.js";
function U(e, t) {
  (e.get(F, `1775679520`) ? O : k)({ href: t, initiator: `markdown_link_click` });
}
function W() {
  return (W = e(() => {
    (le(), fe());
  }))();
}
function Ae(
  e,
  { type: t, payload: n, turnContext: r, sourceMessageId: i, signal: a, onInteraction: o, onLinkClick: s },
) {
  if (t === `open_conversation`) {
    let t = J.safeParse(n);
    if (t.success && !a.aborted) {
      let n = _(t.data.conversation_id);
      Se(e, t.data.message_id == null ? n : `${n}?${new URLSearchParams({ messageId: t.data.message_id })}`);
    }
    return Promise.resolve();
  }
  if (t !== `open_url`) return !1;
  let c = n.url,
    l = n.require_safe_url_confirmation === !0;
  if (typeof c != `string` || !c || a.aborted || (l && !/^https:\/\//i.test(c))) return Promise.resolve();
  let u = q(c);
  if (u != null)
    return r == null || i == null
      ? Promise.resolve()
      : G(e, { sandboxPath: u, turnContext: r, sourceMessageId: i, signal: a });
  let d;
  try {
    d = new URL(c, window.location.origin);
  } catch {
    return Promise.resolve();
  }
  if (d.protocol !== `http:` && d.protocol !== `https:`) return Promise.resolve();
  (r?.shouldBlockExternalEgress || o?.(), s?.());
  let f = d.toString();
  return l ? je(e, f, a) : (U(e, f), Promise.resolve());
}
async function G(
  e,
  { sandboxPath: t, turnContext: n, sourceMessageId: r, sharedConversationId: i, signal: a },
) {
  let o = e.get(x, n.conversationId),
    s = i ?? (o?.kind === `conversation` ? o.id : void 0),
    c = {
      conversationId: e.get(B, n.conversationId) ?? (s == null ? null : b(s)),
      fileName: t.slice(t.lastIndexOf(`/`) + 1),
      gizmoId: e.get(T, n.conversationId),
      sharedConversationId: s,
      postId: o?.kind === `post` ? o.post.id : void 0,
      requestSource: `web_dil_action`,
      target: K(e, { sandboxPath: t, turnContext: n, sourceMessageId: r }),
    };
  if (!ge(t)) return pe({ ...c, signal: a });
  let { openChatGptFile: l } = await d(
    async () => {
      let { openChatGptFile: e } = await import(`./open-chatgpt-file-6fc1fe73a6ed.js`);
      return { openChatGptFile: e };
    },
    __vite__mapDeps([0, 1, 2, 3, 4, 5]),
    import.meta.url,
  );
  return l(e, {
    ...c,
    isAccessBlocked: (e) => C(e, n.conversationId),
    messageId: r,
    browserPreview: !0,
    tabKey: `${r}:sandbox:${t}`,
    signal: a,
  });
}
function K(e, { sandboxPath: t, turnContext: n, sourceMessageId: r }) {
  let i = e.get(x, n.conversationId),
    a;
  if (i?.kind === `post`) {
    let i = e.get(I, n.conversationId)?.[r]?.message;
    if (i != null) {
      let e = ye([i]);
      a = e.get(t) ?? e.get(decodeURIComponent(t.replace(/%(?![0-9a-f]{2})/gi, `%25`)));
    }
  }
  return j(e, n.conversationId, { type: `sandbox`, fileId: a, sandboxPath: t, messageId: r });
}
function q(e) {
  if (
    e.length > 4096 ||
    ![`sandbox:/mnt/data/`, `sandbox:/workspace/`, `sandbox:/root/.codex/skills/remote-skills/`].some((t) =>
      e.startsWith(t),
    )
  )
    return;
  let t = e.slice(8),
    n = t;
  for (let e = 0; e < 4; e++) {
    if (
      n.endsWith(`/`) ||
      n.split(`/`).some((e) => e === `.` || e === `..`) ||
      Array.from(n).some((e) => e.charCodeAt(0) <= 31 || e.charCodeAt(0) === 127)
    )
      return;
    try {
      let e = decodeURIComponent(n.replace(/%(?![0-9a-f]{2})/gi, `%25`));
      if (e === n) return t;
      n = e;
    } catch {
      return;
    }
  }
}
async function je(e, t, n) {
  let r = await ue(t).catch(() => !1);
  if (n.aborted) return;
  if (r) {
    U(e, t);
    return;
  }
  let { ExternalLinkConfirmationDialog: i } = await d(
    async () => {
      let { ExternalLinkConfirmationDialog: e } = await import(
        `./external-link-confirmation-dialog-290d71033041.js`
      );
      return { ExternalLinkConfirmationDialog: e };
    },
    __vite__mapDeps([6, 1, 2, 3, 4, 5]),
    import.meta.url,
  );
  n.aborted ||
    ce(e, i, {
      href: t,
      initiator: `markdown_link_click`,
      onOpen: () => {
        n.aborted || U(e, t);
      },
    });
}
var J;
function Y() {
  return (Y = e(() => {
    (R(),
      n(),
      L(),
      ae(),
      se(),
      N(),
      w(),
      M(),
      H(),
      Ce(),
      he(),
      t(),
      W(),
      m(),
      (J = p({
        conversation_id: o()
          .min(1)
          .refine((e) => e !== `.` && e !== `..` && encodeURIComponent(e) === e),
        message_id: o()
          .refine((e) => e.trim().length > 0)
          .optional()
          .catch(void 0),
      })));
  }))();
}
function Me(e) {
  let t = (0, X.c)(7),
    n = _e(),
    r = (0, Z.useContext)(me);
  if (n == null || n.isStreaming || n.shouldBlockExternalEgress || r === `restricted`) {
    let n;
    t[0] === e.reference.alt ? (n = t[1]) : ((n = E(e.reference.alt)), (t[0] = e.reference.alt), (t[1] = n));
    let r;
    return (
      t[2] === n ? (r = t[3]) : ((r = (0, Q.jsx)(Q.Fragment, { children: n })), (t[2] = n), (t[3] = r)),
      r
    );
  }
  let i;
  return (
    t[4] !== n || t[5] !== e
      ? ((i = (0, Q.jsx)(Ne, { ...e, context: n })), (t[4] = n), (t[5] = e), (t[6] = i))
      : (i = t[6]),
    i
  );
}
function Ne({ reference: e, contentReferenceIndex: t, context: n, fallback: i, renderImage: a }) {
  let o = r(P),
    u = (0, Z.useRef)(null),
    d = l(u, { once: !0 }),
    f = (0, Z.useContext)(ie),
    p = s(oe),
    m = s(D),
    h = y(B, n.conversationId) ?? n.conversationId,
    g = y(T, n.conversationId),
    _ = y(Te, n.conversationId),
    v = y(Ee, f)?.id,
    b = te(e, { messageId: n.messageId }),
    { data: x, isPending: S } = c({
      queryKey: [`chatgpt-sandbox-image`, p, m, h, g, _, v, b, t],
      enabled: d && b != null,
      queryFn: async ({ signal: e }) => {
        if (b == null) throw Error(`Sandbox image has no download target`);
        let r = await re({
          conversationId: h,
          gizmoId: g,
          sharedConversationId: _,
          postId: v,
          signal: e,
          target:
            t == null && b.type === `sandbox`
              ? K(o, { sandboxPath: b.sandboxPath, turnContext: n, sourceMessageId: b.messageId })
              : b,
          maxBytes: V,
        });
        if ((e.throwIfAborted(), !r.type.startsWith(`image/`)))
          throw Error(`Sandbox image download is not an image`);
        let i = await de(r);
        return (e.throwIfAborted(), i);
      },
      retry: !1,
      staleTime: 0,
      gcTime: 0,
    });
  if (a != null && (x != null || (b != null && S))) return a(x, u);
  let C;
  return (
    (C =
      x == null
        ? b != null && S
          ? (0, Q.jsx)(ee, { "aria-label": E(e.alt) ?? void 0 })
          : t == null
            ? (0, Q.jsx)(Q.Fragment, { children: i ?? E(e.alt) })
            : (0, Q.jsx)(ke, { contentReferenceIndex: t, reference: { ...e, type: `file` } })
        : (0, Q.jsx)(xe, {
            alt: E(e.alt) ?? ``,
            downloadFileName: E(e.file_name) ?? void 0,
            hostId: n.hostId,
            imageSizing: `conversation`,
            mediaPresentation: `default`,
            src: x,
          })),
    (0, Q.jsx)(`div`, { ref: u, children: C })
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = h()),
      u(),
      i(),
      a(),
      (Z = v()),
      ne(),
      be(),
      f(),
      we(),
      ve(),
      A(),
      S(),
      w(),
      H(),
      z(),
      Y(),
      Oe(),
      De(),
      (Q = g()));
  }))();
}
export { G as a, U as c, Y as i, $ as n, Ae as o, q as r, W as s, Me as t };
//# sourceMappingURL=sandbox-image-44f32d2b334e.js.map
