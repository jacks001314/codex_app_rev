import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Zt as t,
  A3t as n,
  AJ as r,
  B4t as i,
  B9 as a,
  BWt as o,
  Cpn as s,
  D2t as c,
  D3t as l,
  E5 as u,
  F3t as d,
  H4t as f,
  IXt as p,
  J4t as m,
  JA as h,
  JG as g,
  JXt as ee,
  M6t as _,
  MMt as v,
  Mwt as y,
  O3t as b,
  Opn as te,
  P6t as ne,
  QXt as x,
  QZt as S,
  S9 as re,
  SVt as ie,
  Spn as C,
  Ten as w,
  UWt as ae,
  Uw as oe,
  V9 as se,
  XZt as ce,
  ZG as T,
  Zw as E,
  _Jt as le,
  _Vt as D,
  a3t as ue,
  aIt as O,
  aYt as de,
  ayt as k,
  bJt as A,
  cs as fe,
  cxt as j,
  dct as M,
  dyt as pe,
  e0t as N,
  fct as me,
  fj as he,
  hct as P,
  hmn as F,
  iBt as I,
  iIt as L,
  jMt as R,
  jXt as z,
  k5 as ge,
  k6t as _e,
  kXt as B,
  kmn as V,
  ls as H,
  lxt as U,
  mct as W,
  nZt as ve,
  o3t as G,
  pJt as K,
  pct as q,
  rBt as J,
  rIt as Y,
  rTt as X,
  s3t as ye,
  sYt as be,
  t0t as xe,
  uct as Se,
  v9 as Ce,
  xJt as we,
  xVt as Te,
  xpn as Ee,
  y9 as De,
  zJ as Oe,
} from "./app-initial-f094ef01c64d.js";
import { fE as ke, mE as Ae, pE as je, sE as Me } from "./app-primary-4c40d73a1074.js";
function Ne(e) {
  switch (Ue(e)) {
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
function Pe(e) {
  return (
    e.find(
      (e) =>
        e.id === `connector_5f3c8c41a1e54ad7a76272c89e2554fa` ||
        [e.id, e.name, ...e.pluginDisplayNames].some((e) => We(e) === `google-drive`),
    ) ?? null
  );
}
function Fe(e) {
  let t = Pe(e);
  return t?.isAccessible === !0 && t.isEnabled;
}
function Ie(e) {
  return (
    e.find((e) =>
      [e.plugin.id.split(`@`)[0], e.plugin.name, e.displayName].some(
        (e) => e != null && We(e) === `google-drive`,
      ),
    ) ?? null
  );
}
function Le({ apps: e, plugin: t }) {
  if (e != null && Fe(e)) return { kind: `upload` };
  if (t == null) return { kind: `refresh` };
  if (!t.plugin.installed) return { kind: `installPlugin`, plugin: t };
  if (!t.plugin.enabled) return { kind: `enablePlugin`, plugin: t };
  if (e == null) return { kind: `refresh` };
  let n = Pe(e);
  return n == null
    ? { kind: `refresh` }
    : n.isAccessible === !0 && n.isEnabled === !1
      ? { app: n, kind: `openPluginDetail`, plugin: t }
      : { app: n, kind: `connectApp` };
}
async function Re({ hostId: e, path: t, title: n }) {
  if (Ne(t) == null) throw Error(Xe);
  let r = await K(`read-file-binary`, { params: { hostId: e, path: t } });
  if (r.contentsBase64 == null) throw Error(`File contents are unavailable.`);
  let a = i(t),
    s = Ge(t),
    c = Be({ fileBytes: o(r.contentsBase64), filename: a, mimeType: s, title: n ?? a }),
    l = await (
      await A.getInstance().fetch(Ye, {
        method: `POST`,
        body: c.body,
        headers: { "Content-Type": `multipart/form-data; boundary=${c.boundary}` },
      })
    ).json(),
    u = l.connector_result;
  if (Ve(u)) throw new Je();
  if (u.isError === !0) throw Error(`Google Drive could not open this file.`);
  return l;
}
function ze(e) {
  let t = e.connector_result,
    n = t.structuredContent;
  if (typeof n == `object` && n && !Array.isArray(n)) {
    let e = He(n.url) ?? He(n.webViewLink);
    if (e != null) return e;
  }
  for (let e of t.content) {
    if (typeof e != `object` || !e || Array.isArray(e) || e.type !== `text`) continue;
    let t = He(e.text);
    if (t != null) return t;
  }
  return null;
}
function Be({ fileBytes: e, filename: t, mimeType: n, title: r }) {
  let i = `----codex-google-drive-${Math.random().toString(36).slice(2)}`,
    a = [],
    o = (e) => {
      a.push(new TextEncoder().encode(e));
    };
  return (
    ((e, t) => {
      o(`--${i}\r\nContent-Disposition: form-data; name="${Ke(e)}"\r\n\r\n${t}\r\n`);
    })(`arguments`, JSON.stringify({ title: r })),
    o(
      `--${i}\r\nContent-Disposition: form-data; name="file"; filename="${Ke(t)}"\r\nContent-Type: ${n}\r\n\r\n`,
    ),
    a.push(e),
    o(`\r\n--${i}--\r\n`),
    { body: qe(a), boundary: i }
  );
}
function Ve(e) {
  let t = e._meta;
  if (typeof t != `object` || !t || Array.isArray(t)) return !1;
  let n = t._codex_apps;
  if (typeof n != `object` || !n || Array.isArray(n)) return !1;
  let r = n.connector_auth_failure;
  return typeof r == `object` && !!r && !Array.isArray(r) && r.is_auth_failure === !0;
}
function He(e) {
  return typeof e == `string`
    ? ((e.match(Ze)?.[0] ?? null)?.replace(/[.;:!?]+$/, ``) ?? null)
    : null;
}
function Ue(e) {
  let t = i(e),
    n = t.lastIndexOf(`.`);
  return n < 0 ? `` : t.slice(n + 1).toLowerCase();
}
function We(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, `-`);
}
function Ge(e) {
  switch (Ue(e)) {
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
function Ke(e) {
  return e.replace(/[\r\n"]/g, `_`);
}
function qe(e) {
  let t = e.reduce((e, t) => e + t.length, 0),
    n = new Uint8Array(t),
    r = 0;
  for (let t of e) (n.set(t, r), (r += t.length));
  return n;
}
var Je,
  Ye,
  Xe,
  Ze,
  Qe = e(() => {
    (ae(),
      f(),
      le(),
      we(),
      (Je = class extends Error {
        constructor() {
          (super(`Google Drive connector authentication is required.`),
            (this.name = `GoogleDriveConnectorAuthError`));
        }
      }),
      (Ye = `/wham/apps/google_drive/upload`),
      (Xe = `Unsupported file type. Expected one of: .docx, .pptx, .xlsx.`),
      (Ze = /https?:\/\/(?:docs|drive)\.google\.com\/[^\s"'<>),]+/i));
  });
function $e({ clickAction: e, clickSource: t, context: n, productLogger: r, resourceKind: i }) {
  let a = et(i);
  a != null &&
    r.logProductEvent(S, {
      threadId: n.threadId ?? void 0,
      turnId: n.turnId ?? void 0,
      inputMessageId: n.inputMessageId ?? void 0,
      messageId: n.messageId ?? void 0,
      resourceKind: a,
      clickAction: e,
      clickSource: t,
    });
}
function et(e) {
  switch (e) {
    case `document`:
      return t.CODEX_GOOGLE_WORKSPACE_RESOURCE_KIND_DOCUMENT;
    case `spreadsheet`:
      return t.CODEX_GOOGLE_WORKSPACE_RESOURCE_KIND_SPREADSHEET;
    case `presentation`:
      return t.CODEX_GOOGLE_WORKSPACE_RESOURCE_KIND_PRESENTATION;
    default:
      return null;
  }
}
var tt = e(() => {
  N();
});
function nt(e) {
  let t = (0, Z.c)(16),
    {
      analyticsClickSource: n,
      analyticsContext: r,
      cwd: i,
      getAnalyticsContext: a,
      handleConnectApp: o,
      hostId: s,
      isOpening: c,
      onCloseDropdown: l,
      onBeforeFileRead: u,
      onOpeningChange: d,
      path: f,
      title: p,
    } = e,
    m;
  t[0] === f ? (m = t[1]) : ((m = Ne(f)), (t[0] = f), (t[1] = m));
  let h = m;
  if (h == null) return null;
  let g;
  return (
    t[2] !== n ||
    t[3] !== r ||
    t[4] !== i ||
    t[5] !== a ||
    t[6] !== o ||
    t[7] !== s ||
    t[8] !== c ||
    t[9] !== u ||
    t[10] !== l ||
    t[11] !== d ||
    t[12] !== f ||
    t[13] !== h ||
    t[14] !== p
      ? ((g = (0, Q.jsx)(at, {
          analyticsClickSource: n,
          analyticsContext: r,
          cwd: i,
          getAnalyticsContext: a,
          handleConnectApp: o,
          hostId: s,
          isOpening: c,
          onCloseDropdown: l,
          onBeforeFileRead: u,
          onOpeningChange: d,
          path: f,
          targetType: h,
          title: p,
        })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c),
        (t[9] = u),
        (t[10] = l),
        (t[11] = d),
        (t[12] = f),
        (t[13] = h),
        (t[14] = p),
        (t[15] = g))
      : (g = t[15]),
    g
  );
}
function rt(e) {
  let t = (0, Z.c)(13),
    { app: r, hostId: i, onClose: a, onOAuthStarted: o } = e,
    s = n(ue),
    c = l(),
    u = be(`403472035`),
    d;
  t[0] === a
    ? (d = t[1])
    : ((d = (e) => {
        e || a();
      }),
      (t[0] = a),
      (t[1] = d));
  let f;
  t[2] !== i || t[3] !== c || t[4] !== s || t[5] !== u
    ? ((f = async () => {
        await Ce({
          scope: s,
          accountId: j(s),
          hostId: i,
          queryClient: c,
          shouldUseNewAppLifecycle: u,
        });
      }),
      (t[2] = i),
      (t[3] = c),
      (t[4] = s),
      (t[5] = u),
      (t[6] = f))
    : (f = t[6]);
  let p;
  return (
    t[7] !== r || t[8] !== i || t[9] !== o || t[10] !== d || t[11] !== f
      ? ((p = (0, Q.jsx)(fe, {
          app: r,
          hostId: i,
          onOpenChange: d,
          onConnected: f,
          onOAuthStarted: o,
        })),
        (t[7] = r),
        (t[8] = i),
        (t[9] = o),
        (t[10] = d),
        (t[11] = f),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
function it() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsxs)(`span`, {
          className: `pointer-events-auto inline-flex h-token-button-composer shrink-0 cursor-default items-center gap-1.5 text-base leading-[18px] text-secondary`,
          role: `status`,
          children: [
            (0, Q.jsx)(R, { className: `icon-s` }),
            (0, Q.jsx)(s, {
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
function at(e) {
  let t = (0, Z.c)(64),
    {
      analyticsClickSource: i,
      analyticsContext: o,
      cwd: s,
      getAnalyticsContext: c,
      handleConnectApp: l,
      hostId: u,
      isOpening: f,
      onCloseDropdown: p,
      onBeforeFileRead: h,
      onOpeningChange: _,
      path: v,
      targetType: y,
      title: b,
    } = e,
    x = n(r),
    S = te(),
    ie = ee(),
    C;
  t[0] === u ? (C = t[1]) : ((C = { hostId: u }), (t[0] = u), (t[1] = C));
  let { data: w, hardRefetchAppsList: ae } = re(C),
    { availablePlugins: se, refetch: T } = pe(u),
    { installPlugin: E, status: le } = ke(),
    D;
  t[2] === u ? (D = t[3]) : ((D = { hostId: u }), (t[2] = u), (t[3] = D));
  let { pendingPluginId: ue, setPluginEnabled: O } = ge(D),
    de = d(ve),
    k;
  t[4] === se ? (k = t[5]) : ((k = Ie(se)), (t[4] = se), (t[5] = k));
  let A = k,
    fe = ue === A?.plugin.id,
    j;
  t[6] !== u || t[7] !== ie
    ? ((j = (e) => {
        ie(oe(e, { hostId: u }));
      }),
      (t[6] = u),
      (t[7] = ie),
      (t[8] = j))
    : (j = t[8]);
  let M = j,
    N;
  t[9] !== u || t[10] !== E || t[11] !== T
    ? ((N = (e) => {
        E(e, {
          hostId: u,
          marketplaceAnalytics: Ae.composer,
          onSuccess: async () => {
            await T();
          },
        });
      }),
      (t[9] = u),
      (t[10] = E),
      (t[11] = T),
      (t[12] = N))
    : (N = t[12]);
  let me = N,
    P;
  t[13] !== S || t[14] !== me || t[15] !== x
    ? ((P = (e) => {
        let t = x.get(z).warning(S.formatMessage($.installRequired), {
          primaryAction: {
            label: S.formatMessage($.installAction),
            onClick: () => {
              (t.close(), me(e));
            },
          },
        });
      }),
      (t[13] = S),
      (t[14] = me),
      (t[15] = x),
      (t[16] = P))
    : (P = t[16]);
  let F = P,
    I;
  t[17] !== l || t[18] !== S || t[19] !== x
    ? ((I = (e) => {
        let t = x.get(z).warning(S.formatMessage($.authFailure), {
          primaryAction: {
            label: S.formatMessage($.connectAction),
            onClick: async () => {
              (t.close(), await l(e));
            },
          },
        });
      }),
      (t[17] = l),
      (t[18] = S),
      (t[19] = x),
      (t[20] = I))
    : (I = t[20]);
  let L = I,
    R;
  t[21] !== i ||
  t[22] !== o ||
  t[23] !== s ||
  t[24] !== c ||
  t[25] !== u ||
  t[26] !== S ||
  t[27] !== h ||
  t[28] !== v ||
  t[29] !== de ||
  t[30] !== x ||
  t[31] !== y ||
  t[32] !== b
    ? ((R = async (e) => {
        if (h != null && (await h()) === !1) return;
        let t = s == null ? v : m(s, v),
          n = c == null ? o : c();
        $e({
          clickAction: ce.CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_ACTION_UPLOAD_LOCAL_FILE,
          clickSource: i,
          context: {
            threadId: n?.threadId ?? null,
            turnId: n?.turnId ?? null,
            inputMessageId: n?.inputMessageId ?? null,
            messageId: n?.messageId ?? null,
          },
          productLogger: de,
          resourceKind: y,
        });
        let r = ze(await Re({ hostId: u, path: t, title: b }));
        if (r != null) {
          let n = ct(y),
            i = b?.trim(),
            a = {
              id: `google-drive-open:${y}:${t}`,
              imageAttachments: [],
              text: `The user uploaded ${i == null || i.length === 0 ? t : `${i} from ${t}`} to ${n}.\n${n} link: ${r}`,
              title: `Opened in ${n}`,
            };
          (he(x, (e) => {
            let t = e.mcpAppModelContextAttachments.findIndex((e) => e.id === a.id);
            if (t === -1) {
              e.mcpAppModelContextAttachments.push(a);
              return;
            }
            e.mcpAppModelContextAttachments[t] = a;
          }),
            ne({ disposition: e, href: r, initiator: `mcp_app_resource` }));
          return;
        }
        x.get(z).success(
          S.formatMessage(
            {
              id: `connectedApps.googleDrive.opened`,
              defaultMessage: `Opened in {app}`,
              description: `Toast shown after a file was opened in a connected Google app but no URL was returned.`,
            },
            { app: ct(y) },
          ),
        );
      }),
      (t[21] = i),
      (t[22] = o),
      (t[23] = s),
      (t[24] = c),
      (t[25] = u),
      (t[26] = S),
      (t[27] = h),
      (t[28] = v),
      (t[29] = de),
      (t[30] = x),
      (t[31] = y),
      (t[32] = b),
      (t[33] = R))
    : (R = t[33]);
  let B = R,
    V;
  t[34] === O
    ? (V = t[35])
    : ((V = async (e) => {
        try {
          await O({ pluginDisplayName: a(e), pluginId: e.plugin.id, enabled: !0 });
        } catch {
          return;
        }
      }),
      (t[34] = O),
      (t[35] = V));
  let H = V,
    U;
  t[36] !== w ||
  t[37] !== H ||
  t[38] !== A ||
  t[39] !== ae ||
  t[40] !== S ||
  t[41] !== f ||
  t[42] !== _ ||
  t[43] !== M ||
  t[44] !== T ||
  t[45] !== x ||
  t[46] !== L ||
  t[47] !== F ||
  t[48] !== y ||
  t[49] !== B
    ? ((U = async (e) => {
        f ||
          (_(!0),
          await (async () => {
            let t = w == null ? null : Pe(w);
            try {
              let n = Le({ apps: w, plugin: A });
              switch (n.kind) {
                case `upload`:
                  await B(e);
                  return;
                case `installPlugin`:
                  F(n.plugin);
                  return;
                case `enablePlugin`:
                  await H(n.plugin);
                  return;
                case `connectApp`:
                  L(n.app);
                  return;
                case `openPluginDetail`:
                  M(n.plugin);
                  return;
                case `refresh`:
              }
              let [r, i] = await Promise.all([ae(), T()]),
                a = Ie(i.availablePlugins),
                o = Pe(r);
              if (((t = o), Fe(r))) {
                await B(e);
                return;
              }
              if (a?.plugin.installed !== !0) {
                if (a != null) {
                  F(a);
                  return;
                }
                x.get(z).warning(S.formatMessage($.authFailure));
                return;
              }
              if (!a.plugin.enabled) {
                await H(a);
                return;
              }
              if (o?.isAccessible === !0 && o.isEnabled === !1) {
                M(a);
                return;
              }
              if (o != null) {
                L(o);
                return;
              }
              x.get(z).warning(S.formatMessage($.authFailure));
            } catch (e) {
              e instanceof Je
                ? t == null
                  ? x.get(z).warning(S.formatMessage($.authFailure))
                  : L(t)
                : x.get(z).danger(
                    S.formatMessage(
                      {
                        id: `connectedApps.googleDrive.openFailed`,
                        defaultMessage: `Could not open in {app}`,
                        description: `Toast shown when opening a local file in a connected Google app fails.`,
                      },
                      { app: ct(y) },
                    ),
                  );
            }
          })().finally(() => {
            _(!1);
          }));
      }),
      (t[36] = w),
      (t[37] = H),
      (t[38] = A),
      (t[39] = ae),
      (t[40] = S),
      (t[41] = f),
      (t[42] = _),
      (t[43] = M),
      (t[44] = T),
      (t[45] = x),
      (t[46] = L),
      (t[47] = F),
      (t[48] = y),
      (t[49] = B),
      (t[50] = U))
    : (U = t[50]);
  let W = U,
    G = f || le != null || fe,
    K,
    q;
  t[51] !== p || t[52] !== W
    ? ((K = (e) => {
        let t = _e(e);
        t != null && (e.preventDefault(), e.stopPropagation(), W(t), p?.());
      }),
      (q = () => {
        (W(), p?.());
      }),
      (t[51] = p),
      (t[52] = W),
      (t[53] = K),
      (t[54] = q))
    : ((K = t[53]), (q = t[54]));
  let J, Y;
  t[55] === y
    ? ((J = t[56]), (Y = t[57]))
    : ((J = (0, Q.jsx)(g.ItemIcon, { children: (0, Q.jsx)(st, { targetType: y }) })),
      (Y = (0, Q.jsx)(ot, { targetType: y })),
      (t[55] = y),
      (t[56] = J),
      (t[57] = Y));
  let X;
  return (
    t[58] !== G || t[59] !== K || t[60] !== q || t[61] !== J || t[62] !== Y
      ? ((X = (0, Q.jsxs)(g.Item, {
          disabled: G,
          onClickCapture: K,
          onSelect: q,
          children: [J, Y],
        })),
        (t[58] = G),
        (t[59] = K),
        (t[60] = q),
        (t[61] = J),
        (t[62] = Y),
        (t[63] = X))
      : (X = t[63]),
    X
  );
}
function ot(e) {
  let t = (0, Z.c)(3),
    { targetType: n } = e;
  switch (n) {
    case `document`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(s, {
              id: `connectedApps.googleDrive.openInDocs`,
              defaultMessage: `Export to Google Docs`,
              description: `Dropdown item for exporting a file to Google Docs`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `spreadsheet`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(s, {
              id: `connectedApps.googleDrive.openInSheets`,
              defaultMessage: `Export to Google Sheets`,
              description: `Dropdown item for exporting a file to Google Sheets`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `presentation`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(s, {
              id: `connectedApps.googleDrive.openInSlides`,
              defaultMessage: `Export to Google Slides`,
              description: `Dropdown item for exporting a file to Google Slides`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function st(e) {
  let t = (0, Z.c)(3),
    { targetType: n } = e;
  switch (n) {
    case `document`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(W, { "aria-hidden": !0, className: `icon-sm` })), (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `spreadsheet`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(me, { "aria-hidden": !0, className: `icon-sm` })), (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `presentation`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(Se, { "aria-hidden": !0, className: `icon-sm` })), (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function ct(e) {
  switch (e) {
    case `document`:
      return `Google Docs`;
    case `spreadsheet`:
      return `Google Sheets`;
    case `presentation`:
      return `Google Slides`;
  }
}
var Z,
  Q,
  $,
  lt = e(() => {
    ((Z = V()),
      N(),
      ye(),
      b(),
      C(),
      p(),
      U(),
      h(),
      T(),
      _(),
      v(),
      B(),
      P(),
      q(),
      M(),
      se(),
      je(),
      Me(),
      E(),
      u(),
      k(),
      x(),
      De(),
      G(),
      Oe(),
      H(),
      de(),
      f(),
      tt(),
      Qe(),
      (Q = F()),
      ($ = Ee({
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
  });
function ut(e, { hostId: t, originatingTurn: n, path: r, threadId: i }) {
  let a = e.value,
    o = a.routeKind === `local-thread` && a.conversationId === i ? a.conversationId : null,
    s = o == null ? void 0 : dt(e, { conversationId: o, fallback: n, hostId: t, path: r });
  return {
    threadId: o,
    turnId: s?.turnId ?? null,
    inputMessageId: s?.inputMessageId ?? null,
    messageId: s?.messageId ?? null,
  };
}
function dt(e, { conversationId: t, fallback: n, hostId: r, path: i }) {
  let a = e.value;
  if (
    a.routeKind !== `local-thread` ||
    a.conversationId !== t ||
    (a.hostId != null && a.hostId !== r)
  )
    return;
  let o = e.get(y, r);
  if (o?.getHostId() !== r) return;
  let s = o.getConversation(a.conversationId);
  if (s == null || s.id !== t) return;
  let l = Te(s),
    u = l;
  if (D(s) == null) {
    if (s.turnHistory?.kind !== `canonical`) return;
    let { history: e } = s.turnHistory,
      t = c(e)?.entries[0],
      n = t == null ? null : e.entitiesByKey[t.value];
    if (n?.turnId == null) return;
    let r = l.findIndex((e) => e.turnId === n.turnId);
    if (r < 0) return;
    u = l.slice(r);
  }
  for (let e = u.length - 1; e >= 0; --e) {
    let t = u[e];
    if (t?.status !== `completed` || t.itemsPagination?.hasLoadedOldest === !1) return;
    let r = J(t);
    if (![...r.outputFilePaths, ...r.editedFilePaths].some((e) => w(m(t.params.cwd ?? ``, e), i)))
      continue;
    if (t.turnId == null) return;
    let a = n?.turnId === t.turnId ? n : void 0;
    return {
      turnId: t.turnId,
      inputMessageId: Y(t) ?? a?.inputMessageId ?? null,
      messageId: L(t) ?? a?.messageId ?? null,
    };
  }
}
var ft = e(() => {
  (xe(), X(), ie(), O(), I(), f());
});
export {
  it as a,
  tt as c,
  Qe as d,
  rt as i,
  $e as l,
  ft as n,
  nt as o,
  dt as r,
  lt as s,
  ut as t,
  Ne as u,
};
//# sourceMappingURL=artifact-originating-turn-1d99e170e424.js.map
