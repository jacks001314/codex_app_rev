import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  AO as n,
  Avt as r,
  CS as i,
  Cot as a,
  Cv as o,
  Dz as s,
  Ext as c,
  FR as l,
  IDt as u,
  Iot as d,
  Ixt as f,
  Kat as p,
  LR as m,
  Lot as h,
  Pxt as g,
  Rnt as _,
  Rot as v,
  Sv as y,
  TO as ee,
  Tv as b,
  VDt as te,
  VR as ne,
  Vvt as x,
  Vxt as S,
  _E as re,
  _Q as C,
  _xt as w,
  a5 as T,
  bv as ie,
  cA as E,
  dL as D,
  dQ as O,
  fL as k,
  fQ as ae,
  frt as A,
  g4 as j,
  gE as oe,
  gL as M,
  gQ as se,
  h4 as ce,
  hL as N,
  hQ as P,
  hot as F,
  i3 as I,
  jDt as L,
  kz as R,
  lot as le,
  mL as ue,
  mQ as de,
  nst as fe,
  o5 as z,
  pL as pe,
  pQ as me,
  qat as he,
  r3 as ge,
  r5 as _e,
  rrt as B,
  rst as V,
  srt as ve,
  tst as ye,
  urt as be,
  vE as xe,
  vQ as Se,
  vzt as H,
  wot as U,
  wv as Ce,
  xMt as W,
  xv as we,
  zot as Te,
  zxt as Ee,
} from "./app-shared-bbfeca5e5737.js";
import {
  $fr as De,
  Bcr as Oe,
  Blr as ke,
  Cwr as Ae,
  Dkn as je,
  GDt as G,
  GGn as K,
  GPn as Me,
  Hcr as Ne,
  Icr as q,
  Idn as Pe,
  JDt as Fe,
  JPn as J,
  Jlr as Ie,
  LPr as Le,
  Ldn as Y,
  Ocr as Re,
  QOn as ze,
  RPr as Be,
  Rcr as Ve,
  Skn as He,
  Tdn as Ue,
  Vcr as We,
  XDr as Ge,
  Ycr as Ke,
  ZOn as qe,
  ZPn as Je,
  a0n as Ye,
  alr as Xe,
  eDr as Ze,
  eOr as Qe,
  epr as $e,
  gwr as et,
  hOr as tt,
  i0n as nt,
  jdn as rt,
  kcr as it,
  lit as at,
  mOr as ot,
  nDr as st,
  qlr as ct,
  s0n as lt,
  tit as ut,
  vCr as dt,
  yCr as ft,
  zlr as pt,
} from "./app-initial-5851df3f6cb1.js";
import { n as mt, t as ht } from "./app-connect-modal-fb7e1b0124f4.js";
function gt({ clickAction: e, clickSource: t, context: n, productLogger: r, resourceKind: i }) {
  let a = _t(i);
  a != null &&
    r.logProductEvent(T, {
      threadId: n.threadId ?? void 0,
      turnId: n.turnId ?? void 0,
      inputMessageId: n.inputMessageId ?? void 0,
      messageId: n.messageId ?? void 0,
      resourceKind: a,
      clickAction: e,
      clickSource: t,
    });
}
function _t(e) {
  switch (e) {
    case `document`:
      return z.CODEX_GOOGLE_WORKSPACE_RESOURCE_KIND_DOCUMENT;
    case `spreadsheet`:
      return z.CODEX_GOOGLE_WORKSPACE_RESOURCE_KIND_SPREADSHEET;
    case `presentation`:
      return z.CODEX_GOOGLE_WORKSPACE_RESOURCE_KIND_PRESENTATION;
    default:
      return null;
  }
}
function vt() {
  return (vt = e(() => {
    _();
  }))();
}
function yt(e) {
  switch (At(e)) {
    case `docx`:
      return `document`;
    case `xlsx`:
      return `spreadsheet`;
    case `pptx`:
      return `presentation`;
    default:
      return null;
  }
}
function bt(e) {
  return (
    e.find(
      (e) =>
        e.id === `connector_5f3c8c41a1e54ad7a76272c89e2554fa` ||
        [e.id, e.name, ...e.pluginDisplayNames].some((e) => jt(e) === `google-drive`),
    ) ?? null
  );
}
function xt(e) {
  let t = bt(e);
  return t?.isAccessible === !0 && t.isEnabled;
}
function St(e) {
  return (
    e.find((e) =>
      [e.plugin.id.split(`@`)[0], e.plugin.name, e.displayName].some(
        (e) => e != null && jt(e) === `google-drive`,
      ),
    ) ?? null
  );
}
function Ct({ apps: e, plugin: t }) {
  if (e != null && xt(e)) return { kind: `upload` };
  if (t == null) return { kind: `refresh` };
  if (!t.plugin.installed) return { kind: `installPlugin`, plugin: t };
  if (!t.plugin.enabled) return { kind: `enablePlugin`, plugin: t };
  if (e == null) return { kind: `refresh` };
  let n = bt(e);
  return n == null
    ? { kind: `refresh` }
    : n.isAccessible === !0 && n.isEnabled === !1
      ? { app: n, kind: `openPluginDetail`, plugin: t }
      : { app: n, kind: `connectApp` };
}
async function wt({ hostId: e, path: t, title: n }) {
  if (yt(t) == null) throw Error(Lt);
  let r = await B(`read-file-binary`, { params: { hostId: e, path: t } });
  if (r.contentsBase64 == null) throw Error(`File contents are unavailable.`);
  return Tt({ bytes: $e(r.contentsBase64), contentType: Mt(t), fileName: l(t), title: n });
}
async function Tt({ bytes: e, contentType: t, fileName: n, title: r }) {
  if (yt(n) == null) throw Error(Lt);
  let i = Dt({ fileBytes: e, filename: n, mimeType: t, title: r ?? n }),
    a = await (
      await be
        .getInstance()
        .fetch(It, {
          method: `POST`,
          body: i.body,
          headers: { "Content-Type": `multipart/form-data; boundary=${i.boundary}` },
        })
    ).json(),
    o = a.connector_result;
  if (Ot(o)) throw new Ft();
  if (o.isError === !0) throw Error(`Google Drive could not open this file.`);
  return a;
}
function Et(e) {
  let t = e.connector_result,
    n = t.structuredContent;
  if (typeof n == `object` && n && !Array.isArray(n)) {
    let e = kt(n.url) ?? kt(n.webViewLink);
    if (e != null) return e;
  }
  for (let e of t.content) {
    if (typeof e != `object` || !e || Array.isArray(e) || e.type !== `text`) continue;
    let t = kt(e.text);
    if (t != null) return t;
  }
  return null;
}
function Dt({ fileBytes: e, filename: t, mimeType: n, title: r }) {
  let i = `----codex-google-drive-${Math.random().toString(36).slice(2)}`,
    a = [],
    o = (e) => {
      a.push(new TextEncoder().encode(e));
    };
  return (
    ((e, t) => {
      o(`--${i}\r\nContent-Disposition: form-data; name="${Nt(e)}"\r\n\r\n${t}\r\n`);
    })(`arguments`, JSON.stringify({ title: r })),
    o(
      `--${i}\r\nContent-Disposition: form-data; name="file"; filename="${Nt(t)}"\r\nContent-Type: ${n}\r\n\r\n`,
    ),
    a.push(e),
    o(`\r\n--${i}--\r\n`),
    { body: Pt(a), boundary: i }
  );
}
function Ot(e) {
  let t = e._meta;
  if (typeof t != `object` || !t || Array.isArray(t)) return !1;
  let n = t._codex_apps;
  if (typeof n != `object` || !n || Array.isArray(n)) return !1;
  let r = n.connector_auth_failure;
  return typeof r == `object` && !!r && !Array.isArray(r) && r.is_auth_failure === !0;
}
function kt(e) {
  return typeof e == `string` ? ((e.match(Rt)?.[0] ?? null)?.replace(/[.;:!?]+$/, ``) ?? null) : null;
}
function At(e) {
  let t = l(e),
    n = t.lastIndexOf(`.`);
  return n < 0 ? `` : t.slice(n + 1).toLowerCase();
}
function jt(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, `-`);
}
function Mt(e) {
  switch (At(e)) {
    case `docx`:
      return `application/vnd.openxmlformats-officedocument.wordprocessingml.document`;
    case `pptx`:
      return `application/vnd.openxmlformats-officedocument.presentationml.presentation`;
    case `xlsx`:
      return `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`;
    default:
      return `application/octet-stream`;
  }
}
function Nt(e) {
  return e.replace(/[\r\n"]/g, `_`);
}
function Pt(e) {
  let t = e.reduce((e, t) => e + t.length, 0),
    n = new Uint8Array(t),
    r = 0;
  for (let t of e) (n.set(t, r), (r += t.length));
  return n;
}
var Ft, It, Lt, Rt;
function zt() {
  return (zt = e(() => {
    (De(),
      m(),
      ve(),
      A(),
      (Ft = class extends Error {
        constructor() {
          (super(`Google Drive connector authentication is required.`),
            (this.name = `GoogleDriveConnectorAuthError`));
        }
      }),
      (It = `/wham/apps/google_drive/upload`),
      (Lt = `Unsupported file type. Expected one of: .docx, .pptx, .xlsx.`),
      (Rt = /https?:\/\/(?:docs|drive)\.google\.com\/[^\s"'<>),]+/i));
  }))();
}
function Bt(e) {
  let t = (0, X.c)(5),
    n = st(`2546594521`),
    r;
  t[0] === e ? (r = t[1]) : ((r = `path` in e ? yt(e.path) : e.targetType), (t[0] = e), (t[1] = r));
  let i = r;
  if (n || i == null) return null;
  let a;
  return (
    t[2] !== e || t[3] !== i
      ? ((a = (0, Z.jsx)(Ut, { ...e, targetType: i })), (t[2] = e), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Vt(e) {
  let t = (0, X.c)(13),
    { app: n, hostId: r, onClose: i, onOAuthStarted: o } = e,
    s = f(a),
    c = fe(),
    l = st(`403472035`),
    u;
  t[0] === i
    ? (u = t[1])
    : ((u = (e) => {
        e || i();
      }),
      (t[0] = i),
      (t[1] = u));
  let d;
  t[2] !== r || t[3] !== c || t[4] !== s || t[5] !== l
    ? ((d = async () => {
        await nt({ scope: s, accountId: ot(s), hostId: r, queryClient: c, shouldUseNewAppLifecycle: l });
      }),
      (t[2] = r),
      (t[3] = c),
      (t[4] = s),
      (t[5] = l),
      (t[6] = d))
    : (d = t[6]);
  let p;
  return (
    t[7] !== n || t[8] !== r || t[9] !== o || t[10] !== u || t[11] !== d
      ? ((p = (0, Z.jsx)(ht, { app: n, hostId: r, onOpenChange: u, onConnected: d, onOAuthStarted: o })),
        (t[7] = n),
        (t[8] = r),
        (t[9] = o),
        (t[10] = u),
        (t[11] = d),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
function Ht() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsxs)(`span`, {
          className: `pointer-events-auto inline-flex h-token-button-composer shrink-0 cursor-default items-center gap-1.5 text-base leading-[18px] text-secondary`,
          role: `status`,
          children: [
            (0, Z.jsx)(ge, { className: `icon-s` }),
            (0, Z.jsx)(u, {
              id: `connectedApps.googleDrive.openingStatus`,
              defaultMessage: `Opening`,
              description: `Status shown in place of the open button while exporting a file to a Google app`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ut(e) {
  let t = (0, X.c)(94),
    n = f(et),
    r = S(Qe),
    {
      analyticsClickSource: i,
      analyticsContext: a,
      getAnalyticsContext: o,
      handleConnectApp: s,
      hostId: l,
      iconSize: d,
      isOpening: p,
      keepOpenWhileOpening: m,
      onCloseDropdown: h,
      onBeforeFileRead: g,
      onOpeningChange: _,
      targetType: v,
      title: y,
    } = e,
    b = m !== void 0 && m,
    x = te(),
    re = c(),
    C;
  t[0] === l ? (C = t[1]) : ((C = { hostId: l }), (t[0] = l), (t[1] = C));
  let { data: w, hardRefetchAppsList: T } = lt(C),
    ie;
  t[2] === l ? (ie = t[3]) : ((ie = { hostId: l, enabled: !0 }), (t[2] = l), (t[3] = ie));
  let E = Ie(ie),
    D;
  t[4] !== l || t[5] !== E
    ? ((D = { hostId: l, roots: void 0, resolveActiveRoots: !0, enabled: E }),
      (t[4] = l),
      (t[5] = E),
      (t[6] = D))
    : (D = t[6]);
  let { data: O, refetch: k } = Oe(D),
    ae;
  t[7] === O ? (ae = t[8]) : ((ae = O == null ? null : St(O)), (t[7] = O), (t[8] = ae));
  let A = ae,
    j = Ee(Ne, l),
    M,
    se,
    ce,
    N;
  if (t[9] !== l || t[10] !== j) {
    M = Ve(l);
    let e = M || j === !0;
    ((se = Ee),
      (ce = it),
      (N = Gt(l, e)),
      (t[9] = l),
      (t[10] = j),
      (t[11] = M),
      (t[12] = se),
      (t[13] = ce),
      (t[14] = N));
  } else ((M = t[11]), (se = t[12]), (ce = t[13]), (N = t[14]));
  let P = E && O != null && A == null && (M || j != null),
    I;
  t[15] === P ? (I = t[16]) : ((I = { enabled: P }), (t[15] = P), (t[16] = I));
  let { data: L } = se(ce, N, I),
    { installPlugin: R, status: le } = rt(),
    ue;
  t[17] === l ? (ue = t[18]) : ((ue = { hostId: l }), (t[17] = l), (t[18] = ue));
  let { pendingPluginId: de, setPluginEnabled: fe } = je(ue),
    z;
  t[19] !== L || t[20] !== A
    ? ((z = A ?? (L == null ? null : Ke(L))), (t[19] = L), (t[20] = A), (t[21] = z))
    : (z = t[21]);
  let pe = z,
    me = de === pe?.plugin.id,
    he;
  t[22] !== l || t[23] !== M || t[24] !== E || t[25] !== k || t[26] !== n
    ? ((he = async () => {
        if (!E) return null;
        let { data: e } = await k(),
          t = e == null ? null : St(e);
        if (t != null) return t;
        !M && n.get(Ne, l) == null && (await n.query.getOrFetch(Le, l));
        let r = await n.query.fetch(it, Gt(l, M || n.get(Ne, l) === !0)).catch(Wt);
        return r == null ? null : Ke(r);
      }),
      (t[22] = l),
      (t[23] = M),
      (t[24] = E),
      (t[25] = k),
      (t[26] = n),
      (t[27] = he))
    : (he = t[27]);
  let B = he,
    V;
  t[28] !== l || t[29] !== re
    ? ((V = (e) => {
        re(ut(e, { hostId: l }));
      }),
      (t[28] = l),
      (t[29] = re),
      (t[30] = V))
    : (V = t[30]);
  let ve = V,
    ye;
  t[31] !== l || t[32] !== R || t[33] !== B
    ? ((ye = (e) => {
        R(e, {
          hostId: l,
          marketplaceAnalytics: ze.composer,
          onSuccess: async () => {
            await B();
          },
        });
      }),
      (t[31] = l),
      (t[32] = R),
      (t[33] = B),
      (t[34] = ye))
    : (ye = t[34]);
  let be = ye,
    xe;
  t[35] !== x || t[36] !== be || t[37] !== n
    ? ((xe = (e) => {
        let t = n.get(F).warning(x.formatMessage(Q.installRequired), {
          primaryAction: {
            label: x.formatMessage(Q.installAction),
            onClick: () => {
              (t.close(), be(e));
            },
          },
        });
      }),
      (t[35] = x),
      (t[36] = be),
      (t[37] = n),
      (t[38] = xe))
    : (xe = t[38]);
  let Se = xe,
    H;
  t[39] !== s || t[40] !== x || t[41] !== n
    ? ((H = (e) => {
        let t = n.get(F).warning(x.formatMessage(Q.authFailure), {
          primaryAction: {
            label: x.formatMessage(Q.connectAction),
            onClick: async () => {
              (t.close(), await s(e));
            },
          },
        });
      }),
      (t[39] = s),
      (t[40] = x),
      (t[41] = n),
      (t[42] = H))
    : (H = t[42]);
  let U = H,
    Ce;
  t[43] !== i ||
  t[44] !== a ||
  t[45] !== o ||
  t[46] !== l ||
  t[47] !== x ||
  t[48] !== g ||
  t[49] !== r ||
  t[50] !== e ||
  t[51] !== n ||
  t[52] !== v ||
  t[53] !== y
    ? ((Ce = async (t) => {
        let s = dt(n);
        if (g != null && (await g()) === !1) return;
        let c = o == null ? a : o();
        gt({
          clickAction: _e.CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_ACTION_UPLOAD_LOCAL_FILE,
          clickSource: i,
          context: {
            threadId: c?.threadId ?? null,
            turnId: c?.turnId ?? null,
            inputMessageId: c?.inputMessageId ?? null,
            messageId: c?.messageId ?? null,
          },
          productLogger: r,
          resourceKind: v,
        });
        let u, d, f;
        if (`path` in e) {
          let t = e.cwd == null ? e.path : ne(e.cwd, e.path);
          ((u = t), (d = t), (f = await wt({ hostId: l, path: t, title: y })));
        } else {
          let t = await e.readUploadFile();
          ((u = e.sourceId), (d = t.fileName), (f = await Tt({ ...t, title: y })));
        }
        let p = Et(f);
        if (p != null) {
          let e = Jt(v),
            n = y?.trim(),
            r = {
              kind: `context`,
              untrusted: !1,
              id: `google-drive-open:${v}:${u}`,
              modelContextUpdateId: crypto.randomUUID(),
              imageAttachments: [],
              text: `The user uploaded ${n == null || n.length === 0 ? d : `${n} from ${d}`} to ${e}.\n${e} link: ${p}`,
              sourceName: e,
            };
          (s != null && Fe(s, r), Je({ disposition: t, href: p, initiator: `mcp_app_resource` }));
          return;
        }
        n.get(F).success(
          x.formatMessage(
            {
              id: `connectedApps.googleDrive.opened`,
              defaultMessage: `Opened in {app}`,
              description: `Toast shown after a file was opened in a connected Google app but no URL was returned.`,
            },
            { app: Jt(v) },
          ),
        );
      }),
      (t[43] = i),
      (t[44] = a),
      (t[45] = o),
      (t[46] = l),
      (t[47] = x),
      (t[48] = g),
      (t[49] = r),
      (t[50] = e),
      (t[51] = n),
      (t[52] = v),
      (t[53] = y),
      (t[54] = Ce))
    : (Ce = t[54]);
  let W = Ce,
    we;
  t[55] === fe
    ? (we = t[56])
    : ((we = async (e) => {
        try {
          await fe({ pluginDisplayName: Pe(e), pluginId: e.plugin.id, enabled: !0 });
        } catch {
          return;
        }
      }),
      (t[55] = fe),
      (t[56] = we));
  let Te = we,
    De;
  t[57] !== w ||
  t[58] !== Te ||
  t[59] !== pe ||
  t[60] !== T ||
  t[61] !== x ||
  t[62] !== p ||
  t[63] !== _ ||
  t[64] !== ve ||
  t[65] !== B ||
  t[66] !== n ||
  t[67] !== U ||
  t[68] !== Se ||
  t[69] !== v ||
  t[70] !== W
    ? ((De = async (e) => {
        p ||
          (_(!0),
          await (async () => {
            let t = w == null ? null : bt(w);
            try {
              let r = Ct({ apps: w, plugin: pe });
              switch (r.kind) {
                case `upload`:
                  await W(e);
                  return;
                case `installPlugin`:
                  Se(r.plugin);
                  return;
                case `enablePlugin`:
                  await Te(r.plugin);
                  return;
                case `connectApp`:
                  U(r.app);
                  return;
                case `openPluginDetail`:
                  ve(r.plugin);
                  return;
              }
              let [i, a] = await Promise.all([T(), B()]),
                o = bt(i);
              if (((t = o), xt(i))) {
                await W(e);
                return;
              }
              if (a?.plugin.installed !== !0) {
                if (a != null) {
                  Se(a);
                  return;
                }
                n.get(F).warning(x.formatMessage(Q.authFailure));
                return;
              }
              if (!a.plugin.enabled) {
                await Te(a);
                return;
              }
              if (o?.isAccessible === !0 && o.isEnabled === !1) {
                ve(a);
                return;
              }
              if (o != null) {
                U(o);
                return;
              }
              n.get(F).warning(x.formatMessage(Q.authFailure));
            } catch (e) {
              e instanceof Ft
                ? t == null
                  ? n.get(F).warning(x.formatMessage(Q.authFailure))
                  : U(t)
                : n
                    .get(F)
                    .danger(
                      x.formatMessage(
                        {
                          id: `connectedApps.googleDrive.openFailed`,
                          defaultMessage: `Could not open in {app}`,
                          description: `Toast shown when opening a local file in a connected Google app fails.`,
                        },
                        { app: Jt(v) },
                      ),
                      { errorAnalytics: { toastId: `connectedApps.googleDrive.openFailed` } },
                    );
            }
          })().finally(() => {
            _(!1);
          }));
      }),
      (t[57] = w),
      (t[58] = Te),
      (t[59] = pe),
      (t[60] = T),
      (t[61] = x),
      (t[62] = p),
      (t[63] = _),
      (t[64] = ve),
      (t[65] = B),
      (t[66] = n),
      (t[67] = U),
      (t[68] = Se),
      (t[69] = v),
      (t[70] = W),
      (t[71] = De))
    : (De = t[71]);
  let ke = De,
    Ae = p || le != null || me,
    G;
  t[72] !== p || t[73] !== v
    ? ((G = p ? (0, Z.jsx)(ge, {}) : (0, Z.jsx)(qt, { targetType: v })),
      (t[72] = p),
      (t[73] = v),
      (t[74] = G))
    : (G = t[74]);
  let K;
  t[75] !== d || t[76] !== G
    ? ((K = (0, Z.jsx)(oe, { size: d, children: G })), (t[75] = d), (t[76] = G), (t[77] = K))
    : (K = t[77]);
  let q, J;
  t[78] !== b || t[79] !== h || t[80] !== ke
    ? ((q = (e) => {
        let t = Me(e);
        t != null &&
          (e.preventDefault(),
          e.stopPropagation(),
          ke(t).finally(() => {
            b && h?.();
          }),
          b || h?.());
      }),
      (J = (e) => {
        (b && e.preventDefault(),
          ke().finally(() => {
            b && h?.();
          }),
          b || h?.());
      }),
      (t[78] = b),
      (t[79] = h),
      (t[80] = ke),
      (t[81] = q),
      (t[82] = J))
    : ((q = t[81]), (J = t[82]));
  let Y;
  t[83] !== p || t[84] !== e.labelVariant || t[85] !== v
    ? ((Y = p
        ? (0, Z.jsx)(`span`, {
            role: `status`,
            children: (0, Z.jsx)(u, {
              id: `connectedApps.googleDrive.exporting`,
              defaultMessage: `Exporting to {app}…`,
              description: `Loading state in the Google export menu item while uploading an artifact`,
              values: { app: Jt(v) },
            }),
          })
        : (0, Z.jsx)(Kt, { targetType: v, variant: e.labelVariant })),
      (t[83] = p),
      (t[84] = e.labelVariant),
      (t[85] = v),
      (t[86] = Y))
    : (Y = t[86]);
  let Re;
  return (
    t[87] !== p || t[88] !== Ae || t[89] !== K || t[90] !== q || t[91] !== J || t[92] !== Y
      ? ((Re = (0, Z.jsx)(ee.Item, {
          "aria-busy": p,
          disabled: Ae,
          leftIcon: K,
          onClickCapture: q,
          onSelect: J,
          children: Y,
        })),
        (t[87] = p),
        (t[88] = Ae),
        (t[89] = K),
        (t[90] = q),
        (t[91] = J),
        (t[92] = Y),
        (t[93] = Re))
      : (Re = t[93]),
    Re
  );
}
function Wt() {
  return null;
}
function Gt(e, t) {
  return {
    hostId: e,
    marketplacePath: null,
    pluginName: t ? (pt[`google-drive`] ?? null) : `google-drive`,
    remoteMarketplaceName: t ? r : null,
    localMarketplaceName: t ? null : x,
  };
}
function Kt(e) {
  let t = (0, X.c)(7),
    { targetType: n, variant: r } = e;
  if (r === `app`) {
    let e;
    t[0] === n ? (e = t[1]) : ((e = Jt(n)), (t[0] = n), (t[1] = e));
    let r;
    return (
      t[2] === e
        ? (r = t[3])
        : ((r = (0, Z.jsx)(u, {
            id: `connectedApps.googleDrive.appName`,
            defaultMessage: `{app}`,
            description: `Google app name in an Open in menu section; app is the product name Google Docs, Google Sheets, or Google Slides and should remain untranslated`,
            values: { app: e },
          })),
          (t[2] = e),
          (t[3] = r)),
      r
    );
  }
  switch (n) {
    case `document`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(u, {
              id: `connectedApps.googleDrive.openInDocs`,
              defaultMessage: `Export to Google Docs`,
              description: `Dropdown item for exporting a file to Google Docs`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `spreadsheet`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(u, {
              id: `connectedApps.googleDrive.openInSheets`,
              defaultMessage: `Export to Google Sheets`,
              description: `Dropdown item for exporting a file to Google Sheets`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `presentation`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(u, {
              id: `connectedApps.googleDrive.openInSlides`,
              defaultMessage: `Export to Google Slides`,
              description: `Dropdown item for exporting a file to Google Slides`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
  }
}
function qt(e) {
  let t = (0, X.c)(3),
    { targetType: n } = e;
  switch (n) {
    case `document`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(N, { "aria-hidden": !0, className: `size-full` })), (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `spreadsheet`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(pe, { "aria-hidden": !0, className: `size-full` })), (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `presentation`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(D, { "aria-hidden": !0, className: `size-full` })), (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function Jt(e) {
  switch (e) {
    case `document`:
      return `Google Docs`;
    case `spreadsheet`:
      return `Google Sheets`;
    case `presentation`:
      return `Google Slides`;
  }
}
var X, Z, Q;
function Yt() {
  return (Yt = e(() => {
    ((X = H()),
      _(),
      ye(),
      g(),
      V(),
      Y(),
      L(),
      w(),
      Ye(),
      tt(),
      G(),
      n(),
      J(),
      I(),
      le(),
      ct(),
      M(),
      ue(),
      k(),
      ke(),
      qe(),
      Ue(),
      at(),
      He(),
      Re(),
      q(),
      We(),
      Xe(),
      Ge(),
      Be(),
      U(),
      ft(),
      Ae(),
      mt(),
      Ze(),
      m(),
      xe(),
      vt(),
      zt(),
      (Z = W()),
      (Q = t({
        authFailure: {
          id: `connectedApps.googleDrive.authFailure`,
          defaultMessage: `Connect Google Drive to open this file`,
          description: `Toast shown when the Google Drive connector needs authentication before opening a file.`,
        },
        connectAction: {
          id: `connectedApps.googleDrive.connectAction`,
          defaultMessage: `Connect`,
          description: `Button label that connects Google Drive before opening a file`,
        },
        installAction: {
          id: `connectedApps.googleDrive.installAction`,
          defaultMessage: `Install`,
          description: `Button label that installs Google Drive before opening a file`,
        },
        installRequired: {
          id: `connectedApps.googleDrive.installRequired`,
          defaultMessage: `Install Google Drive to open this file`,
          description: `Toast shown when Google Drive must be installed before opening a file`,
        },
      })));
  }))();
}
function Xt(e) {
  let t = (0, $t.c)(39),
    { disabled: n, downloadId: r, format: i, exportFile: o, saveFile: c, variant: l } = e,
    d = l === void 0 ? `submenu` : l,
    m = f(a),
    g = te(),
    _ = p.workspaceFiles,
    v;
  t[0] === r ? (v = t[1]) : ((v = [`artifact-download`, r]), (t[0] = r), (t[1] = v));
  let b = v,
    ne;
  t[2] === b ? (ne = t[3]) : ((ne = { mutationKey: b }), (t[2] = b), (t[3] = ne));
  let x = Te(ne) > 0,
    S = n || x || o == null,
    C;
  t[4] !== o || t[5] !== c
    ? ((C = async (e) => {
        if (o == null) return;
        let t = await o(e);
        c == null
          ? (await Promise.resolve(_.saveCopy)) == null
            ? K(
                new Blob([new Uint8Array(t.bytes)], {
                  type: (0, en.lookup)(t.fileName) || `application/octet-stream`,
                }),
                t.fileName,
              )
            : await _.saveCopy?.(t)
          : await c(t);
      }),
      (t[4] = o),
      (t[5] = c),
      (t[6] = C))
    : (C = t[6]);
  let w;
  t[7] !== g || t[8] !== m
    ? ((w = () => {
        m.get(F).danger(
          g.formatMessage({
            id: `artifactTab.preview.downloadFailure`,
            defaultMessage: `Could not download artifact`,
            description: `Error shown when an artifact download fails`,
          }),
          { errorAnalytics: { toastId: `artifactTab.preview.downloadFailure` } },
        );
      }),
      (t[7] = g),
      (t[8] = m),
      (t[9] = w))
    : (w = t[9]);
  let T;
  t[10] !== b || t[11] !== C || t[12] !== w
    ? ((T = { mutationKey: b, mutationFn: C, onError: w }),
      (t[10] = b),
      (t[11] = C),
      (t[12] = w),
      (t[13] = T))
    : (T = t[13]);
  let { mutate: E } = h(T),
    D;
  t[14] === i
    ? (D = t[15])
    : ((D = (0, $.jsx)(oe, {
        size: `base`,
        children: (0, $.jsx)(s, { icon: { assets: i === `pptx` ? { 16: de, 20: ae } : { 16: Se, 20: se } } }),
      })),
      (t[14] = i),
      (t[15] = D));
  let O;
  t[16] === E ? (O = t[17]) : ((O = () => E(`office`)), (t[16] = E), (t[17] = O));
  let k;
  t[18] === i
    ? (k = t[19])
    : ((k =
        i === `pptx`
          ? (0, $.jsx)(u, {
              id: `artifactViewer.downloadPowerPointFormat`,
              defaultMessage: `PowerPoint <format>(PPTX)</format>`,
              description: `Download a presentation as a PowerPoint file; format marks the secondary file extension label`,
              values: { format: Qt },
            })
          : (0, $.jsx)(u, {
              id: `artifactViewer.downloadExcelFormat`,
              defaultMessage: `Excel <format>(XLSX)</format>`,
              description: `Download a spreadsheet as an Excel file; format marks the secondary file extension label`,
              values: { format: Zt },
            })),
      (t[18] = i),
      (t[19] = k));
  let A;
  t[20] !== S || t[21] !== D || t[22] !== O || t[23] !== k
    ? ((A = (0, $.jsx)(ee.Item, { disabled: S, leftIcon: D, onSelect: O, children: k })),
      (t[20] = S),
      (t[21] = D),
      (t[22] = O),
      (t[23] = k),
      (t[24] = A))
    : (A = t[24]);
  let j;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, $.jsx)(oe, {
        size: `base`,
        children: (0, $.jsx)(s, { icon: { assets: { 16: y, 20: ie } } }),
      })),
      (t[25] = j))
    : (j = t[25]);
  let M;
  t[26] === E ? (M = t[27]) : ((M = () => E(`pdf`)), (t[26] = E), (t[27] = M));
  let N;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, $.jsx)(u, {
        id: `artifactViewer.downloadPdf`,
        defaultMessage: `PDF`,
        description: `Download a presentation or spreadsheet in PDF format`,
      })),
      (t[28] = N))
    : (N = t[28]);
  let P;
  t[29] !== S || t[30] !== M
    ? ((P = (0, $.jsx)(ee.Item, { disabled: S, leftIcon: j, onSelect: M, children: N })),
      (t[29] = S),
      (t[30] = M),
      (t[31] = P))
    : (P = t[31]);
  let I;
  t[32] !== A || t[33] !== P
    ? ((I = (0, $.jsxs)($.Fragment, { children: [A, P] })), (t[32] = A), (t[33] = P), (t[34] = I))
    : (I = t[34]);
  let L = I,
    R;
  return (
    t[35] !== S || t[36] !== L || t[37] !== d
      ? ((R =
          d === `items`
            ? L
            : (0, $.jsx)(re, {
                disabled: S,
                leftIcon: (0, $.jsx)(s, { icon: { assets: { 16: Ce, 20: ce } } }),
                label: (0, $.jsx)(u, {
                  id: `artifactTab.preview.downloadTitleMenu`,
                  defaultMessage: `Download`,
                  description: `Title menu action for saving an artifact to a user-selected location`,
                }),
                children: L,
              })),
        (t[35] = S),
        (t[36] = L),
        (t[37] = d),
        (t[38] = R))
      : (R = t[38]),
    R
  );
}
function Zt(e) {
  return (0, $.jsx)(`span`, { className: `text-tertiary`, children: e });
}
function Qt(e) {
  return (0, $.jsx)(`span`, { className: `text-tertiary`, children: e });
}
var $t, en, $;
function tn() {
  return (tn = e(() => {
    (($t = H()),
      b(),
      j(),
      o(),
      we(),
      C(),
      P(),
      me(),
      O(),
      v(),
      d(),
      g(),
      (en = E()),
      L(),
      n(),
      R(),
      le(),
      he(),
      U(),
      i(),
      ($ = W()));
  }))();
}
export { Bt as a, zt as c, Ht as i, vt as l, tn as n, Yt as o, Vt as r, yt as s, Xt as t, gt as u };
//# sourceMappingURL=download-submenu-2fee9f2333f7.js.map
