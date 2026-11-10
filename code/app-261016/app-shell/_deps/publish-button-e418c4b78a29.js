const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./publish-4e8116f7bb9c.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./handoff-error-29723776cb96.js",
      "./publish-dialog-dfeac2b542ac.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  F3 as r,
  FBt as i,
  I3 as a,
  LNt as o,
  NSt as s,
  OFt as c,
  PBt as l,
  Qst as u,
  TE as d,
  TY as f,
  USt as p,
  VSt as m,
  Vrt as h,
  XOt as g,
  XS as _,
  ZSt as v,
  gV as y,
  iCt as b,
  kFt as x,
  okt as S,
  qrt as C,
  tkt as w,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as T,
  Ejr as E,
  FV as D,
  PV as O,
  Tcn as k,
  VV as A,
  Xzr as j,
  tLr as M,
  wLr as N,
  wcn as P,
  xMr as F,
  xjr as I,
  yMr as L,
  zRr as R,
} from "./app-initial-ad16eaadf81f.js";
import { n as z, r as B } from "./handoff-error-29723776cb96.js";
function V(e) {
  let n = (0, U.c)(35),
    { file: r, beforePublish: i } = e,
    a = t(u),
    o = S(),
    s = m(),
    c = p(),
    l = b(R),
    f = b(T),
    { data: h } = k(),
    g;
  n[0] !== l || n[1] !== h?.accounts
    ? ((g = h?.accounts?.find((e) => {
        let { id: t } = e;
        return t === l;
      })),
      (n[0] = l),
      (n[1] = h?.accounts),
      (n[2] = g))
    : (g = n[2]);
  let _ = g,
    v = E(),
    [x, A] = (0, W.useState)(!1),
    [M, N] = (0, W.useState)(!1),
    P = (0, W.useRef)(null),
    I;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = () => () => P.current?.abort()), (n[3] = I))
    : (I = n[3]);
  let L;
  (n[4] !== l || n[5] !== r.id || n[6] !== s.pathname || n[7] !== f
    ? ((L = [l, f, r.id, s.pathname]), (n[4] = l), (n[5] = r.id), (n[6] = s.pathname), (n[7] = f), (n[8] = L))
    : (L = n[8]),
    (0, W.useEffect)(I, L));
  let B =
    _?.plan_type === `plus` ||
    _?.plan_type === `pro` ||
    _?.plan_type === `prolite` ||
    _?.plan_type === `promax`;
  if (
    l == null ||
    f == null ||
    _?.id !== l ||
    _.structure !== `personal` ||
    r.provider != null ||
    r.library_artifact_type !== `site_preview` ||
    (!B &&
      ((_.plan_type !== `free` && _.plan_type !== `go`) ||
        !v.checkGate(`3226734443`, { disableExposureLog: !0 }) ||
        !v.getLayer(`933354605`).get(`show_share_button`, !1)))
  )
    return null;
  let V;
  if (n[9] !== s.search) {
    let e = new URLSearchParams(s.search);
    ((V = e.get(`temporary-chat`) === `true` || e.get(`training_disabled`) === `true`),
      (n[9] = s.search),
      (n[10] = V));
  } else V = n[10];
  let q = V,
    J;
  n[11] !== l ||
  n[12] !== i ||
  n[13] !== r ||
  n[14] !== o ||
  n[15] !== q ||
  n[16] !== c ||
  n[17] !== B ||
  n[18] !== a
    ? ((J = () => {
        if (P.current != null) return;
        if ((F(a, B ? O : D, { conversationId: r.origination_thread_id ?? void 0 }), !B)) {
          A(!0);
          return;
        }
        let e = new AbortController();
        ((P.current = e),
          N(!0),
          Promise.resolve()
            .then(async () => {
              if (i != null && !(await i()))
                return (
                  a
                    .get(C)
                    .danger(
                      o.formatMessage({
                        id: `sitesPreview.customization.publishSaveFailed`,
                        defaultMessage: `Save your changes before publishing. Retry saving in the inline editor`,
                        description: `Publishing stopped because website appearance changes could not be saved`,
                      }),
                      { errorAnalytics: { toastId: `sitesPreview.customization.publishSaveFailed` } },
                    ),
                  null
                );
              e.signal.throwIfAborted();
              let { publishSitesPreview: t } = await H();
              return t(a, { accountId: l, file: r, isTemporaryChat: q }, o, e);
            })
            .then((t) => {
              e.signal.aborted || t == null || c(`/c/${encodeURIComponent(t)}?surface=work`);
            })
            .catch((t) => {
              e.signal.aborted ||
                a.get(C).danger(z(o, t), { errorAnalytics: { toastId: `sitesPreview.publish.failed` } });
            })
            .finally(() => {
              ((P.current = null), N(!1));
            }));
      }),
      (n[11] = l),
      (n[12] = i),
      (n[13] = r),
      (n[14] = o),
      (n[15] = q),
      (n[16] = c),
      (n[17] = B),
      (n[18] = a),
      (n[19] = J))
    : (J = n[19]);
  let Y;
  n[20] === Symbol.for(`react.memo_cache_sentinel`) ? ((Y = (0, G.jsx)(y, {})), (n[20] = Y)) : (Y = n[20]);
  let X;
  n[21] === B
    ? (X = n[22])
    : ((X = B
        ? (0, G.jsx)(w, {
            id: `sitesPreview.publish.button`,
            defaultMessage: `Publish`,
            description: `Short button label on a saved website preview for paid users. Starts a new Work task with the saved HTML to prepare the site for hosting.`,
          })
        : (0, G.jsx)(w, {
            id: `sitesPreview.share.button`,
            defaultMessage: `Share`,
            description: `Opens an upgrade prompt so a Free or Go user can publish their saved website preview`,
          })),
      (n[21] = B),
      (n[22] = X));
  let Z;
  n[23] !== M || n[24] !== J || n[25] !== X
    ? ((Z = (0, G.jsxs)(d, { type: `button`, disabled: M, loading: M, onClick: J, children: [Y, X] })),
      (n[23] = M),
      (n[24] = J),
      (n[25] = X),
      (n[26] = Z))
    : (Z = n[26]);
  let Q;
  n[27] !== _ || n[28] !== r.origination_thread_id || n[29] !== q || n[30] !== x
    ? ((Q = x
        ? (0, G.jsx)(K, {
            currentPlan: _.plan_type === `go` ? j.GO : j.FREE,
            sourceThreadId: q ? null : r.origination_thread_id,
            onCancel: () => A(!1),
          })
        : null),
      (n[27] = _),
      (n[28] = r.origination_thread_id),
      (n[29] = q),
      (n[30] = x),
      (n[31] = Q))
    : (Q = n[31]);
  let $;
  return (
    n[32] !== Z || n[33] !== Q
      ? (($ = (0, G.jsxs)(G.Fragment, { children: [Z, Q] })), (n[32] = Z), (n[33] = Q), (n[34] = $))
      : ($ = n[34]),
    $
  );
}
function H() {
  return c(
    () => import(`./publish-4e8116f7bb9c.js`),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
    import.meta.url,
  );
}
var U, W, G, K;
function q() {
  return (q = e(() => {
    ((U = l()),
      A(),
      v(),
      (W = i()),
      g(),
      s(),
      N(),
      P(),
      f(),
      r(),
      h(),
      L(),
      n(),
      I(),
      M(),
      _(),
      B(),
      (G = o()),
      x(),
      (K = a(
        async () =>
          (
            await c(
              async () => {
                let { SitesPreviewPublishDialog: e } = await import(`./publish-dialog-dfeac2b542ac.js`);
                return { SitesPreviewPublishDialog: e };
              },
              __vite__mapDeps([7, 1, 2, 3, 4, 5]),
              import.meta.url,
            )
          ).SitesPreviewPublishDialog,
      )));
  }))();
}
export { q as n, V as t };
//# sourceMappingURL=publish-button-e418c4b78a29.js.map
