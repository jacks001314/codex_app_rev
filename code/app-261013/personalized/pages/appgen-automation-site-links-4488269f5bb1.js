import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  Cot as r,
  Ext as i,
  HNt as a,
  Hk as o,
  IDt as s,
  IK as c,
  Mz as l,
  Nz as u,
  Pxt as d,
  TJ as f,
  Uk as p,
  VDt as m,
  _xt as h,
  cz as g,
  jDt as _,
  nSt as v,
  sMt as y,
  sz as b,
  t3 as x,
  vzt as S,
  wot as C,
  xMt as w,
  zxt as T,
} from "./app-shared-bbfeca5e5737.js";
import { cEr as E, nC as D, nEr as O, tC as k } from "./app-initial-5851df3f6cb1.js";
import { n as A, t as j } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
function M(e) {
  let t = (0, P.c)(7),
    { automationId: n } = e,
    r = m(),
    { data: i } = T(k, n);
  if (!i?.length) return null;
  let a;
  t[0] === r
    ? (a = t[1])
    : ((a = r.formatMessage({
        id: `appgenAutomations.linkedSiteIndicator`,
        defaultMessage: `Linked to a Site`,
        description: `Accessible label and tooltip for the Sites icon beside a scheduled task linked to a Site`,
      })),
      (t[0] = r),
      (t[1] = a));
  let o = a,
    s;
  t[2] === o
    ? (s = t[3])
    : ((s = (0, L.jsx)(`span`, {
        className: `inline-flex shrink-0`,
        children: (0, L.jsx)(l, { asset: p, "aria-label": o }),
      })),
      (t[2] = o),
      (t[3] = s));
  let c;
  return (
    t[4] !== o || t[5] !== s
      ? ((c = (0, L.jsx)(b, { tooltipContent: o, children: s })), (t[4] = o), (t[5] = s), (t[6] = c))
      : (c = t[6]),
    c
  );
}
function N(e) {
  let t = (0, P.c)(22),
    r,
    a,
    o;
  t[0] === e
    ? ((r = t[1]), (a = t[2]), (o = t[3]))
    : (({ children: a, presentation: o, ...r } = e), (t[0] = e), (t[1] = r), (t[2] = a), (t[3] = o));
  let l = o === void 0 ? `inline` : o,
    u;
  t[4] === r
    ? (u = t[5])
    : ((u = `automationId` in r ? [r.automationId] : r.automationIds), (t[4] = r), (t[5] = u));
  let d = T(R, u),
    f = i();
  if (d.length === 0) {
    let e;
    return (t[6] === a ? (e = t[7]) : ((e = a ? a(null) : null), (t[6] = a), (t[7] = e)), e);
  }
  let p;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = {
        inline: void 0,
        "editor-footer": `auth`,
        "detail-footer": `panelAction`,
        "run-result": `inline`,
      }),
      (t[8] = p))
    : (p = t[8]);
  let m = p,
    h;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = {
        inline: `outlineSurface`,
        "editor-footer": `primary`,
        "detail-footer": `outlineSurface`,
        "run-result": `ghostTertiary`,
      }),
      (t[9] = h))
    : (h = t[9]);
  let g = h,
    _;
  if (t[10] !== f || t[11] !== l || t[12] !== d) {
    let e;
    (t[14] !== f || t[15] !== l
      ? ((e = (e) => {
          let t = e.title.trim()
              ? e.title
              : (0, L.jsx)(s, {
                  id: `appgenAutomations.openAutomations`,
                  defaultMessage: `Scheduled tasks`,
                  description: `Button in a scheduled task footer that opens the linked Site's Scheduled tab`,
                }),
            r = () => {
              f(O(e.project_id));
            };
          return l === `summary`
            ? (0, L.jsxs)(
                j.ItemButton,
                {
                  onClick: r,
                  children: [
                    (0, L.jsx)(j.ItemLeading, { children: (0, L.jsx)(c, {}) }),
                    (0, L.jsx)(j.ItemLabel, { children: t }),
                  ],
                },
                e.project_id,
              )
            : (0, L.jsx)(
                n,
                {
                  className: l === `inline` ? void 0 : `w-fit max-w-full justify-center`,
                  color: g[l],
                  radius: l === `inline` || l === `run-result` ? void 0 : `full`,
                  size: m[l],
                  onClick: r,
                  children: (0, L.jsx)(`span`, { className: `truncate`, children: t }),
                },
                e.project_id,
              );
        }),
        (t[14] = f),
        (t[15] = l),
        (t[16] = e))
      : (e = t[16]),
      (_ = d.map(e)),
      (t[10] = f),
      (t[11] = l),
      (t[12] = d),
      (t[13] = _));
  } else _ = t[13];
  let v;
  t[17] === _ ? (v = t[18]) : ((v = (0, L.jsx)(L.Fragment, { children: _ })), (t[17] = _), (t[18] = v));
  let y = v,
    b;
  return (
    t[19] !== a || t[20] !== y ? ((b = a ? a(y) : y), (t[19] = a), (t[20] = y), (t[21] = b)) : (b = t[21]),
    b
  );
}
var P, F, I, L, R;
function z() {
  return (z = e(() => {
    ((P = S()),
      o(),
      (F = t(a(), 1)),
      (I = t(y(), 1)),
      d(),
      _(),
      h(),
      x(),
      u(),
      f(),
      g(),
      C(),
      A(),
      D(),
      E(),
      (L = w()),
      (R = v(
        r,
        (e, { get: t }) =>
          (0, I.default)(
            e.flatMap((e) => t(k, e).data ?? []),
            `project_id`,
          ),
        { isEqual: F.default },
      )));
  }))();
}
export { N as n, z as r, M as t };
//# sourceMappingURL=appgen-automation-site-links-4488269f5bb1.js.map
