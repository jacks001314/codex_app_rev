import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as n,
  HNt as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  Vxt as s,
  _xt as c,
  jDt as l,
  rSt as u,
  vzt as d,
  wot as f,
  wxt as p,
  xMt as m,
  zxt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ahn as g,
  BI as _,
  Bsn as v,
  Dor as y,
  GI as b,
  Hz as ee,
  KI as x,
  Mhn as S,
  Nsn as te,
  O3 as C,
  RI as w,
  T3 as T,
  Vz as E,
  XMr as D,
  _4 as O,
  a5 as k,
  aIr as A,
  aor as j,
  cor as M,
  f4 as N,
  i5 as P,
  lIr as F,
  oIr as I,
  oq as L,
  qI as R,
  sIr as z,
  sq as B,
  tNr as V,
  uIr as H,
  xsn as U,
} from "./app-initial-5851df3f6cb1.js";
import { a as W, i as G } from "./references-4e565b8c19a8.js";
import { n as K, t as q } from "./icons-ade0758d4408.js";
function ne(e) {
  let t = (0, Y.c)(25),
    { pageId: r, indentLevel: o, expanded: c, onNavigate: l } = e,
    u = a(n),
    d = p(),
    f = s(y),
    { files: m, isError: g } = h(Q, r);
  if (!c) return null;
  if (m == null) {
    if (!g) return null;
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(i, {
          id: `codex.space.page.artifacts.retry`,
          defaultMessage: `Could not load files. Retry`,
          description: `Sidebar action to retry loading a Page's artifact children`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    t[1] !== d.pathname || t[2] !== r || t[3] !== u
      ? ((n = () => {
          let e = u.get(R, r);
          if (d.pathname === `/space/${r}` && u.get(e.state$)?.error != null) {
            (e.retry(), u.get(v, r).refetch());
            return;
          }
          let t = N({ scope: u, pageId: r, pageViewReportingEnabled: !1 });
          (t.session.retry(), t.release(), u.get(v, r).refetch());
        }),
        (t[1] = d.pathname),
        (t[2] = r),
        (t[3] = u),
        (t[4] = n))
      : (n = t[4]);
    let a;
    return (
      t[5] !== o || t[6] !== n
        ? ((a = (0, Z.jsx)(L, { excludeFromNavigation: !0, indentLevel: o, label: e, onPress: n })),
          (t[5] = o),
          (t[6] = n),
          (t[7] = a))
        : (a = t[7]),
      a
    );
  }
  let _;
  if (t[8] !== f || t[9] !== m || t[10] !== o || t[11] !== d || t[12] !== l || t[13] !== r || t[14] !== u) {
    let e;
    (t[16] !== f || t[17] !== o || t[18] !== d || t[19] !== l || t[20] !== r || t[21] !== u
      ? ((e = (e) => {
          let t = K[e.kind];
          return (0, Z.jsx)(
            L,
            {
              icon: (0, Z.jsx)(t, {}),
              indentLevel: o,
              isActive:
                d.pathname === `/space/${r}` &&
                d.state?.pageArtifact?.accountId === f &&
                d.state.pageArtifact.pageId === r &&
                J(d.state.pageArtifact.reference) === J(e),
              label: e.fileName,
              onPress: () => {
                let t = { ...d.state, pageArtifact: { accountId: f, pageId: r, reference: e } };
                (H(u, `/space/${r}`, { state: { ...t, scrollPageToTop: !1 } }), l?.());
              },
            },
            J(e),
          );
        }),
        (t[16] = f),
        (t[17] = o),
        (t[18] = d),
        (t[19] = l),
        (t[20] = r),
        (t[21] = u),
        (t[22] = e))
      : (e = t[22]),
      (_ = m.map(e)),
      (t[8] = f),
      (t[9] = m),
      (t[10] = o),
      (t[11] = d),
      (t[12] = l),
      (t[13] = r),
      (t[14] = u),
      (t[15] = _));
  } else _ = t[15];
  let b;
  return (
    t[23] === _ ? (b = t[24]) : ((b = (0, Z.jsx)(Z.Fragment, { children: _ })), (t[23] = _), (t[24] = b)),
    b
  );
}
function J(e) {
  return `fileId` in e ? e.fileId : JSON.stringify([e.threadId, e.kind, e.relativePath ?? e.fileName]);
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = d()),
      (X = t(r(), 1)),
      o(),
      l(),
      c(),
      F(),
      V(),
      A(),
      P(),
      j(),
      w(),
      C(),
      g(),
      x(),
      O(),
      U(),
      f(),
      B(),
      q(),
      W(),
      E(),
      (Z = m()),
      (Q = u(
        n,
        () => ({ files: void 0, isError: !1 }),
        (e, { get: t, scope: n, set: r }) => {
          let i = t(y),
            a = t(D);
          if (i == null) {
            r({ files: void 0, isError: !1 });
            return;
          }
          let o = (t) => {
              (r(t),
                (t.files != null || t.isError) &&
                  n.set(
                    ee,
                    { accountId: i, userId: a, pageId: e },
                    t.files == null ? void 0 : t.files.length > 0,
                  ));
            },
            s = t(S),
            { data: c, isError: l } = t(v, e);
          if (c != null && (!c.metadata.access.can_read || c.metadata.deleted_at != null)) {
            o({ files: void 0, isError: !0 });
            return;
          }
          let u = t(z).pathname?.match(/^\/space\/([^/?]+)/)?.[1] === e,
            d = u ? t(R, e) : void 0,
            f = d == null ? null : t(d.state$),
            p = u ? (t(_, e) ?? c?.metadata ?? t(te, e, { enabled: !1 }).data?.metadata) : c?.metadata;
          if (u && p == null && f?.documentType == null) {
            o({ files: void 0, isError: l || f?.error != null });
            return;
          }
          let m =
              u && p?.site_project_id == null && (p == null ? f?.documentType === `page` : M(p) === `page`),
            h = N({
              scope: n,
              pageId: e,
              pageViewReportingEnabled: !1,
              requestedScope: m ? b(p?.access, `content`, f?.grantedScope) : `read`,
              initialBootstrap: m ? d?.takeBootstrap() : void 0,
            });
          s && c != null && h.session.applyPageRead(c);
          let g = T((e) => n.get(I).formatMessage(e)),
            x,
            C = new Map(),
            w = () => {
              let e = h.session.getSnapshot();
              if (
                e.errorCode === `page_read_forbidden` ||
                e.errorCode === `page_not_found` ||
                e.errorCode === `page_deleted`
              ) {
                o({ files: void 0, isError: !0 });
                return;
              }
              if (x === e.documentRevision) return;
              let t = s ? c?.content?.blocks : void 0,
                n = e.hasDocument ? k(h.session.document).units : t;
              if (n == null) {
                o({ files: void 0, isError: l || e.status === `error` });
                return;
              }
              x = e.documentRevision;
              let r = new Map(),
                i = new Map();
              for (let e of n) {
                if (e.kind != null && e.kind !== `markdown`) continue;
                let t = C.get(e.markdown) ?? G(g.parse(e.markdown)).map(({ reference: e }) => e);
                i.set(e.markdown, t);
                for (let e of t) r.set(J(e), e);
              }
              ((C = i),
                o(
                  l && r.size === 0
                    ? { files: void 0, isError: !0 }
                    : { files: [...r.values()], isError: !1 },
                ));
            },
            E = h.session.subscribe(w);
          return (
            w(),
            () => {
              (E(), h.release());
            }
          );
        },
        { autoDispose: !0, isEqual: X.default },
      )));
  }))();
}
$();
export { ne as PageArtifactSidebarChildren };
//# sourceMappingURL=sidebar-children-3f0a333b4521.js.map
