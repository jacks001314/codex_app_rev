import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  LNt as i,
  NSt as a,
  PBt as o,
  Qst as s,
  VSt as c,
  XOt as l,
  ZSt as u,
  bCt as d,
  iCt as f,
  iFt as p,
  nCt as m,
  tkt as h,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  AJ as g,
  AL as _,
  Air as v,
  B3 as y,
  BRr as b,
  CIr as x,
  CL as S,
  D7 as C,
  Ddn as ee,
  F3 as w,
  J6 as T,
  Jlr as E,
  Mir as D,
  Nir as O,
  O7 as k,
  OL as A,
  Pdn as j,
  Q_n as M,
  RB as N,
  SIr as P,
  X_n as F,
  Z6 as I,
  Zlr as L,
  gur as R,
  hdn as z,
  kJ as B,
  kL as V,
  wLr as H,
  xL as U,
  zB as W,
} from "./app-initial-ad16eaadf81f.js";
import { a as G, i as K } from "./references-3c35b3bb7f76.js";
import { n as q, t as te } from "./icons-76a84b9e5e87.js";
function ne(e) {
  let t = (0, Y.c)(25),
    { pageId: r, indentLevel: i, expanded: a, onNavigate: o } = e,
    l = n(s),
    u = c(),
    d = f(R),
    { files: p, isError: g } = m(Q, r);
  if (!a) return null;
  if (p == null) {
    if (!g) return null;
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(h, {
          id: `codex.space.page.artifacts.retry`,
          defaultMessage: `Could not load files. Retry`,
          description: `Sidebar action to retry loading a Page's artifact children`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    t[1] !== u.pathname || t[2] !== r || t[3] !== l
      ? ((n = () => {
          let e = l.get(_, r);
          if (u.pathname === `/space/${r}` && l.get(e.state$)?.error != null) {
            (e.retry(), l.get(j, r).refetch());
            return;
          }
          let t = w({ scope: l, pageId: r, pageViewReportingEnabled: !1 });
          (t.session.retry(), t.release(), l.get(j, r).refetch());
        }),
        (t[1] = u.pathname),
        (t[2] = r),
        (t[3] = l),
        (t[4] = n))
      : (n = t[4]);
    let a;
    return (
      t[5] !== i || t[6] !== n
        ? ((a = (0, Z.jsx)(B, { excludeFromNavigation: !0, indentLevel: i, label: e, onPress: n })),
          (t[5] = i),
          (t[6] = n),
          (t[7] = a))
        : (a = t[7]),
      a
    );
  }
  let v;
  if (t[8] !== d || t[9] !== p || t[10] !== i || t[11] !== u || t[12] !== o || t[13] !== r || t[14] !== l) {
    let e;
    (t[16] !== d || t[17] !== i || t[18] !== u || t[19] !== o || t[20] !== r || t[21] !== l
      ? ((e = (e) => {
          let t = q[e.kind];
          return (0, Z.jsx)(
            B,
            {
              icon: (0, Z.jsx)(t, {}),
              indentLevel: i,
              isActive:
                u.pathname === `/space/${r}` &&
                u.state?.pageArtifact?.accountId === d &&
                u.state.pageArtifact.pageId === r &&
                J(u.state.pageArtifact.reference) === J(e),
              label: e.fileName,
              onPress: () => {
                let t = { ...u.state, pageArtifact: { accountId: d, pageId: r, reference: e } };
                (O(l, `/space/${r}`, { state: { ...t, scrollPageToTop: !1 } }), o?.());
              },
            },
            J(e),
          );
        }),
        (t[16] = d),
        (t[17] = i),
        (t[18] = u),
        (t[19] = o),
        (t[20] = r),
        (t[21] = l),
        (t[22] = e))
      : (e = t[22]),
      (v = p.map(e)),
      (t[8] = d),
      (t[9] = p),
      (t[10] = i),
      (t[11] = u),
      (t[12] = o),
      (t[13] = r),
      (t[14] = l),
      (t[15] = v));
  } else v = t[15];
  let y;
  return (
    t[23] === v ? (y = t[24]) : ((y = (0, Z.jsx)(Z.Fragment, { children: v })), (t[23] = v), (t[24] = y)),
    y
  );
}
function J(e) {
  return `fileId` in e ? e.fileId : JSON.stringify([e.threadId, e.kind, e.relativePath ?? e.fileName]);
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = o()),
      (X = t(p(), 1)),
      u(),
      l(),
      a(),
      D(),
      H(),
      P(),
      C(),
      E(),
      U(),
      I(),
      F(),
      V(),
      y(),
      z(),
      r(),
      g(),
      te(),
      G(),
      N(),
      (Z = i()),
      (Q = d(
        s,
        () => ({ files: void 0, isError: !1 }),
        (e, { get: t, scope: n, set: r }) => {
          let i = t(R),
            a = t(b);
          if (i == null) {
            r({ files: void 0, isError: !1 });
            return;
          }
          let o = (t) => {
              (r(t),
                (t.files != null || t.isError) &&
                  n.set(
                    W,
                    { accountId: i, userId: a, pageId: e },
                    t.files == null ? void 0 : t.files.length > 0,
                  ));
            },
            s = t(M),
            { data: c, isError: l } = t(j, e);
          if (c != null && (!c.metadata.access.can_read || c.metadata.deleted_at != null)) {
            o({ files: void 0, isError: !0 });
            return;
          }
          let u = t(v).pathname?.match(/^\/space\/([^/?]+)/)?.[1] === e,
            d = u ? t(_, e) : void 0,
            f = d == null ? null : t(d.state$),
            p = u ? (t(S, e) ?? c?.metadata ?? t(ee, e, { enabled: !1 }).data?.metadata) : c?.metadata;
          if (u && p == null && f?.documentType == null) {
            o({ files: void 0, isError: l || f?.error != null });
            return;
          }
          let m =
              u && p?.site_project_id == null && (p == null ? f?.documentType === `page` : L(p) === `page`),
            h = w({
              scope: n,
              pageId: e,
              pageViewReportingEnabled: !1,
              requestedScope: m ? A(p?.access, `content`, f?.grantedScope) : `read`,
              initialBootstrap: m ? d?.takeBootstrap() : void 0,
            });
          s && c != null && h.session.applyPageRead(c);
          let g = T((e) => n.get(x).formatMessage(e)),
            y,
            C = new Map(),
            E = () => {
              let e = h.session.getSnapshot();
              if (
                e.errorCode === `page_read_forbidden` ||
                e.errorCode === `page_not_found` ||
                e.errorCode === `page_deleted`
              ) {
                o({ files: void 0, isError: !0 });
                return;
              }
              if (y === e.documentRevision) return;
              let t = s ? c?.content?.blocks : void 0,
                n = e.hasDocument ? k(h.session.document).units : t;
              if (n == null) {
                o({ files: void 0, isError: l || e.status === `error` });
                return;
              }
              y = e.documentRevision;
              let r = new Map(),
                i = new Map();
              for (let e of n) {
                if (e.kind != null && e.kind !== `markdown`) continue;
                let t = C.get(e.markdown) ?? K(g.parse(e.markdown)).map(({ reference: e }) => e);
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
            D = h.session.subscribe(E);
          return (
            E(),
            () => {
              (D(), h.release());
            }
          );
        },
        { autoDispose: !0, isEqual: X.default },
      )));
  }))();
}
$();
export { ne as PageArtifactSidebarChildren };
//# sourceMappingURL=sidebar-children-7ad371c4680c.js.map
