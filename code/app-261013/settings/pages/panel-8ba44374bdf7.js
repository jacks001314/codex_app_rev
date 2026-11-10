import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as n,
  AO as r,
  CO as ee,
  Hct as i,
  IDt as a,
  JC as o,
  Pxt as s,
  TO as c,
  Vxt as l,
  iw as u,
  jDt as d,
  qC as f,
  rst as p,
  sMt as m,
  tw as te,
  vzt as h,
  xMt as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  $P as _,
  Ek as v,
  FAn as y,
  J5n as b,
  K5n as x,
  LMn as S,
  MVn as C,
  NVn as w,
  PVn as T,
  Q3n as ne,
  QP as re,
  Tk as ie,
  W5n as ae,
  _F as E,
  _Xt as oe,
  e6n as D,
  hF as O,
  hXt as k,
  mF as A,
  pF as j,
  tF as M,
  vXt as N,
} from "./app-initial-5851df3f6cb1.js";
import { Am as P, Dl as F, Ol as I, jm as L } from "./app-primary-fe8a450b3b04.js";
import { n as R, t as se } from "./model-and-reasoning-effort-translations-96be4f100801.js";
var z, ce;
function B() {
  return (B = e(() => {
    (d(),
      I(),
      (z = g()),
      (ce = [
        { value: `on-request`, label: (0, z.jsx)(a, { ...F.onRequest }) },
        { value: `untrusted`, label: (0, z.jsx)(a, { ...F.untrusted }) },
        { value: `never`, label: (0, z.jsx)(a, { ...F.never }) },
      ]));
  }))();
}
function V(e) {
  let t = (0, H.c)(16),
    { label: n, description: r, value: i, options: o, disabled: s, isLoading: l, onChange: u } = e,
    d = l !== void 0 && l,
    f;
  if (t[0] !== d || t[1] !== o || t[2] !== i) {
    if (d) {
      let e, n;
      (t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(`span`, {
            className: `sr-only`,
            children: (0, U.jsx)(a, {
              id: `workPreferences.loadingLabel`,
              defaultMessage: `Loading…`,
              description: `Accessible status while the saved Work model or reasoning effort label is loading`,
            }),
          })),
          (n = (0, U.jsx)(ne, { as: `span`, className: `block w-24`, size: `sm` })),
          (t[4] = e),
          (t[5] = n))
        : ((e = t[4]), (n = t[5])),
        (f = (0, U.jsxs)(`span`, { role: `status`, children: [e, n] })));
    } else
      f =
        i == null
          ? (0, U.jsx)(le, {})
          : (o.find((e) => e.value === i)?.label ??
            (0, U.jsx)(a, {
              id: `workPreferences.unavailableValue`,
              defaultMessage: `Unavailable`,
              description: `Label for a saved Work setting whose value is no longer among the available choices`,
            }));
    ((t[0] = d), (t[1] = o), (t[2] = i), (t[3] = f));
  } else f = t[3];
  let p;
  t[6] !== s || t[7] !== d || t[8] !== u || t[9] !== o || t[10] !== f
    ? ((p = (e) =>
        (0, U.jsxs)(ee, {
          align: `end`,
          disabled: s,
          triggerButton: (0, U.jsx)(re, { ...e, "aria-busy": d || void 0, disabled: s, children: f }),
          children: [
            (0, U.jsx)(c.Item, { onSelect: () => u(null), children: (0, U.jsx)(le, {}) }),
            o.map((e) =>
              (0, U.jsx)(c.Item, { onSelect: () => u(e.value), children: e.label }, String(e.value)),
            ),
          ],
        })),
      (t[6] = s),
      (t[7] = d),
      (t[8] = u),
      (t[9] = o),
      (t[10] = f),
      (t[11] = p))
    : (p = t[11]);
  let m;
  return (
    t[12] !== r || t[13] !== n || t[14] !== p
      ? ((m = (0, U.jsx)(te, { label: n, description: r, control: p })),
        (t[12] = r),
        (t[13] = n),
        (t[14] = p),
        (t[15] = m))
      : (m = t[15]),
    m
  );
}
function le() {
  let e = (0, H.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, U.jsx)(a, {
          id: `workPreferences.current`,
          defaultMessage: `Use default`,
          description: `Reset this saved Work preference to its default behavior`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = h()), d(), r(), D(), u(), M(), (U = g()));
  }))();
}
function G() {
  let e = (0, he.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, J.jsx)(O, { title: (0, J.jsx)(_, { slug: `agent` }), children: (0, J.jsx)(K, {}) })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function K() {
  let e = (0, he.c)(14),
    { data: t, isPending: n, error: r, refetch: ee } = l(T),
    { mutate: i, isPending: a, error: o } = l(w),
    s;
  e[0] === n ? (s = e[1]) : ((s = n ? (0, J.jsx)(j, {}) : null), (e[0] = n), (e[1] = s));
  let c;
  e[2] !== r || e[3] !== ee || e[4] !== o
    ? ((c =
        r != null || o != null
          ? (0, J.jsx)(P, {
              operation: o == null ? `load` : `save`,
              onReload: () => {
                ee();
              },
            })
          : null),
      (e[2] = r),
      (e[3] = ee),
      (e[4] = o),
      (e[5] = c))
    : (c = e[5]);
  let u;
  e[6] !== t || e[7] !== a || e[8] !== i
    ? ((u = t == null ? null : (0, J.jsx)(q, { settings: t.settings, disabled: a, onUpdate: i })),
      (e[6] = t),
      (e[7] = a),
      (e[8] = i),
      (e[9] = u))
    : (u = e[9]);
  let d;
  return (
    e[10] !== s || e[11] !== c || e[12] !== u
      ? ((d = (0, J.jsxs)(J.Fragment, { children: [s, c, u] })),
        (e[10] = s),
        (e[11] = c),
        (e[12] = u),
        (e[13] = d))
      : (d = e[13]),
    d
  );
}
function q(e) {
  let t = (0, he.c)(121),
    { settings: n, disabled: r, onUpdate: o } = e,
    { data: s, isPending: u } = l(S),
    d,
    p,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    C,
    w;
  if (t[0] !== r || t[1] !== u || t[2] !== s || t[3] !== o || t[4] !== n) {
    let e = (0, ge.default)(
        [...(s?.options ?? []), ...(s?.versionOptions?.flatMap(me) ?? []), ...(s?.internalOptions ?? [])],
        pe,
      ),
      l = n?.enabledReasoningEfforts ?? i.enabledReasoningEfforts.default,
      S = s == null ? void 0 : oe(s),
      T = s?.modelConfigBySlug?.[n?.model ?? s.defaultModelSlug]?.thinkingEfforts,
      E = n?.model ?? s?.defaultModelSlug;
    g = ae(E, E == null ? void 0 : s?.serviceTiersByModelSlug?.[E]).flatMap(fe);
    let D;
    if (u) D = (0, J.jsx)(ne, { as: `span`, className: `block w-24`, size: `sm` });
    else if (S == null)
      D = (0, J.jsx)(a, {
        id: `workPreferences.unavailableValue`,
        defaultMessage: `Unavailable`,
        description: `Label for a saved Work setting whose value is no longer among the available choices`,
      });
    else if (n?.enabledReasoningEfforts == null) D = (0, J.jsx)(le, {});
    else {
      let e;
      t[17] === l ? (e = t[18]) : ((e = (e) => l.includes(e)), (t[17] = l), (t[18] = e));
      let n = S.filter(e),
        r;
      (t[19] === n ? (r = t[20]) : ((r = { count: n.length }), (t[19] = n), (t[20] = r)),
        (D = (0, J.jsx)(a, {
          id: `workPreferences.effortCount`,
          defaultMessage: `{count, plural, one {# selected} other {# selected}}`,
          description: `Number of reasoning effort levels enabled in Work model controls`,
          values: r,
        })));
    }
    ((h = ie), (m = ie.Content), (p = f));
    let O;
    t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((O = (0, J.jsx)(a, {
          id: `workPreferences.model`,
          defaultMessage: `Model`,
          description: `Default model for new Work tasks`,
        })),
        (t[21] = O))
      : (O = t[21]);
    let k = n?.model,
      A = u && n?.model != null,
      j = e.map(de),
      M = r || s == null,
      N;
    (t[22] === o
      ? (N = t[23])
      : ((N = (e) => o({ model: e, reasoningEffort: null })), (t[22] = o), (t[23] = N)),
      t[24] !== A || t[25] !== j || t[26] !== M || t[27] !== N || t[28] !== k
        ? ((y = (0, J.jsx)(V, { label: O, value: k, isLoading: A, options: j, disabled: M, onChange: N })),
          (t[24] = A),
          (t[25] = j),
          (t[26] = M),
          (t[27] = N),
          (t[28] = k),
          (t[29] = y))
        : (y = t[29]));
    let P;
    t[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((P = (0, J.jsx)(a, {
          id: `workPreferences.reasoning`,
          defaultMessage: `Default reasoning effort`,
          description: `Default thinking effort for new Work tasks with the selected model`,
        })),
        (t[30] = P))
      : (P = t[30]);
    let F = n?.reasoningEffort,
      I = u && n?.reasoningEffort != null,
      L;
    t[31] === T ? (L = t[32]) : ((L = T ?? []), (t[31] = T), (t[32] = L));
    let R;
    t[33] === L ? (R = t[34]) : ((R = L.map(ue)), (t[33] = L), (t[34] = R));
    let z = r || T == null || T.length === 0,
      B;
    (t[35] === o ? (B = t[36]) : ((B = (e) => o({ reasoningEffort: e })), (t[35] = o), (t[36] = B)),
      t[37] !== F || t[38] !== I || t[39] !== R || t[40] !== z || t[41] !== B
        ? ((b = (0, J.jsx)(V, { label: P, value: F, isLoading: I, options: R, disabled: z, onChange: B })),
          (t[37] = F),
          (t[38] = I),
          (t[39] = R),
          (t[40] = z),
          (t[41] = B),
          (t[42] = b))
        : (b = t[42]));
    let H;
    (t[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((H = (0, J.jsx)(a, {
          id: `workPreferences.availableEfforts`,
          defaultMessage: `Efforts shown in model picker`,
          description: `Reasoning effort levels displayed in Work model controls`,
        })),
        (t[43] = H))
      : (H = t[43]),
      t[44] !== S || t[45] !== r || t[46] !== D || t[47] !== l || t[48] !== u || t[49] !== o
        ? ((x = (0, J.jsx)(te, {
            label: H,
            control: (e) =>
              (0, J.jsxs)(ee, {
                align: `end`,
                disabled: r || S == null,
                triggerButton: (0, J.jsx)(re, {
                  ...e,
                  "aria-busy": u || void 0,
                  disabled: r || S == null,
                  children: D,
                }),
                children: [
                  (0, J.jsx)(c.Item, {
                    onSelect: () => o({ enabledReasoningEfforts: null }),
                    children: (0, J.jsx)(le, {}),
                  }),
                  S?.map((e) =>
                    (0, J.jsx)(
                      c.CheckboxItem,
                      {
                        checked: l.includes(e),
                        onCheckedChange: (t) =>
                          o({ enabledReasoningEfforts: t ? [...l, e] : l.filter((t) => t !== e) }),
                        children: (0, J.jsx)(se, { effort: e }),
                      },
                      e,
                    ),
                  ),
                ],
              }),
          })),
          (t[44] = S),
          (t[45] = r),
          (t[46] = D),
          (t[47] = l),
          (t[48] = u),
          (t[49] = o),
          (t[50] = x))
        : (x = t[50]));
    let U, W;
    t[51] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((U = (0, J.jsx)(a, {
          id: `workPreferences.localApprovalPolicy`,
          defaultMessage: `Local approval policy`,
          description: `Approval policy for Work tasks executing on the user's computer`,
        })),
        (W = (0, J.jsx)(a, {
          id: `workPreferences.localApprovalPolicyDescription`,
          defaultMessage: `Applies to native Work chats. Classic Work currently forwards only on-request approvals`,
          description: `Distinguishes native Work approval support from the existing classic Work forwarding limitation`,
        })),
        (t[51] = U),
        (t[52] = W))
      : ((U = t[51]), (W = t[52]));
    let G = n?.approvalPolicy,
      K;
    (t[53] === o ? (K = t[54]) : ((K = (e) => o({ approvalPolicy: e })), (t[53] = o), (t[54] = K)),
      t[55] !== r || t[56] !== G || t[57] !== K
        ? ((C = (0, J.jsx)(V, { label: U, description: W, value: G, options: ce, disabled: r, onChange: K })),
          (t[55] = r),
          (t[56] = G),
          (t[57] = K),
          (t[58] = C))
        : (C = t[58]));
    let q;
    (t[59] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((q = [`showUltraInModelPickerSlider`, `localBrowserUse`]), (t[59] = q))
      : (q = t[59]),
      t[60] !== r || t[61] !== o || t[62] !== n
        ? ((w = q.map((e) =>
            (0, J.jsx)(
              V,
              {
                label: (0, J.jsx)(a, { ...Y[e] }),
                value: n?.[e],
                options: [
                  { value: !1, label: (0, J.jsx)(a, { ...Y.off }) },
                  { value: !0, label: (0, J.jsx)(a, { ...Y.on }) },
                ],
                disabled: r,
                onChange: (t) => o({ [e]: t }),
              },
              e,
            ),
          )),
          (t[60] = r),
          (t[61] = o),
          (t[62] = n),
          (t[63] = w))
        : (w = t[63]),
      (d = V),
      t[64] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((_ = (0, J.jsx)(a, {
            id: `workPreferences.speed`,
            defaultMessage: `Speed`,
            description: `Default execution speed for Work`,
          })),
          (t[64] = _))
        : (_ = t[64]),
      (v =
        s != null && n?.serviceTier != null && !g.some((e) => e.value === n.serviceTier)
          ? (0, J.jsx)(a, {
              id: `workPreferences.unavailableSpeed`,
              defaultMessage: `Your saved speed isn’t available for this model or account. Standard will be used`,
              description: `Explains that a saved Work speed is unavailable for the selected model or current account and new tasks will fall back to Standard speed`,
            })
          : void 0),
      (t[0] = r),
      (t[1] = u),
      (t[2] = s),
      (t[3] = o),
      (t[4] = n),
      (t[5] = d),
      (t[6] = p),
      (t[7] = m),
      (t[8] = h),
      (t[9] = g),
      (t[10] = _),
      (t[11] = v),
      (t[12] = y),
      (t[13] = b),
      (t[14] = x),
      (t[15] = C),
      (t[16] = w));
  } else
    ((d = t[5]),
      (p = t[6]),
      (m = t[7]),
      (h = t[8]),
      (g = t[9]),
      (_ = t[10]),
      (v = t[11]),
      (y = t[12]),
      (b = t[13]),
      (x = t[14]),
      (C = t[15]),
      (w = t[16]));
  let T = n?.serviceTier,
    E = u && n?.serviceTier != null,
    D = r || s == null,
    O;
  t[65] === o ? (O = t[66]) : ((O = (e) => o({ serviceTier: e })), (t[65] = o), (t[66] = O));
  let k;
  t[67] !== d ||
  t[68] !== g ||
  t[69] !== _ ||
  t[70] !== D ||
  t[71] !== O ||
  t[72] !== v ||
  t[73] !== T ||
  t[74] !== E
    ? ((k = (0, J.jsx)(d, {
        label: _,
        description: v,
        value: T,
        isLoading: E,
        options: g,
        disabled: D,
        onChange: O,
      })),
      (t[67] = d),
      (t[68] = g),
      (t[69] = _),
      (t[70] = D),
      (t[71] = O),
      (t[72] = v),
      (t[73] = T),
      (t[74] = E),
      (t[75] = k))
    : (k = t[75]);
  let A;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, J.jsx)(a, {
        id: `workPreferences.sandbox`,
        defaultMessage: `Local file access`,
        description: `Default filesystem sandbox for local tools in Work`,
      })),
      (t[76] = A))
    : (A = t[76]);
  let j = n?.sandboxMode,
    M;
  t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = { value: `read-only`, label: (0, J.jsx)(a, { ...F.readOnly }) }), (t[77] = M))
    : (M = t[77]);
  let N;
  t[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = [M, { value: `workspace-write`, label: (0, J.jsx)(a, { ...F.workspaceWrite }) }]), (t[78] = N))
    : (N = t[78]);
  let P;
  t[79] === o ? (P = t[80]) : ((P = (e) => o({ sandboxMode: e })), (t[79] = o), (t[80] = P));
  let I;
  t[81] !== r || t[82] !== j || t[83] !== P
    ? ((I = (0, J.jsx)(V, { label: A, value: j, options: N, disabled: r, onChange: P })),
      (t[81] = r),
      (t[82] = j),
      (t[83] = P),
      (t[84] = I))
    : (I = t[84]);
  let L;
  t[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, J.jsx)(a, {
        id: `workPreferences.network`,
        defaultMessage: `Local network access`,
        description: `Network access for sandboxed local tools in Work`,
      })),
      (t[85] = L))
    : (L = t[85]);
  let R = n?.networkAccess,
    z;
  t[86] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = { value: !1, label: (0, J.jsx)(a, { ...Y.off }) }), (t[86] = z))
    : (z = t[86]);
  let B;
  t[87] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = [z, { value: !0, label: (0, J.jsx)(a, { ...Y.on }) }]), (t[87] = B))
    : (B = t[87]);
  let H;
  t[88] === o ? (H = t[89]) : ((H = (e) => o({ networkAccess: e })), (t[88] = o), (t[89] = H));
  let U;
  t[90] !== r || t[91] !== R || t[92] !== H
    ? ((U = (0, J.jsx)(V, { label: L, value: R, options: B, disabled: r, onChange: H })),
      (t[90] = r),
      (t[91] = R),
      (t[92] = H),
      (t[93] = U))
    : (U = t[93]);
  let W;
  t[94] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, J.jsx)(a, {
        id: `workPreferences.search`,
        defaultMessage: `Local web search`,
        description: `Web search setting for the local Work executor`,
      })),
      (t[94] = W))
    : (W = t[94]);
  let G = n?.webSearch,
    K;
  t[95] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = { value: `disabled`, label: (0, J.jsx)(a, { ...Y.off }) }), (t[95] = K))
    : (K = t[95]);
  let q;
  t[96] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = { value: `cached`, label: (0, J.jsx)(a, { ...F.webSearchCached }) }), (t[96] = q))
    : (q = t[96]);
  let X;
  t[97] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = [K, q, { value: `live`, label: (0, J.jsx)(a, { ...F.webSearchLive }) }]), (t[97] = X))
    : (X = t[97]);
  let Z;
  t[98] === o ? (Z = t[99]) : ((Z = (e) => o({ webSearch: e })), (t[98] = o), (t[99] = Z));
  let Q;
  t[100] !== r || t[101] !== G || t[102] !== Z
    ? ((Q = (0, J.jsx)(V, { label: W, value: G, options: X, disabled: r, onChange: Z })),
      (t[100] = r),
      (t[101] = G),
      (t[102] = Z),
      (t[103] = Q))
    : (Q = t[103]);
  let $;
  t[104] !== p ||
  t[105] !== k ||
  t[106] !== I ||
  t[107] !== U ||
  t[108] !== y ||
  t[109] !== Q ||
  t[110] !== b ||
  t[111] !== x ||
  t[112] !== C ||
  t[113] !== w
    ? (($ = (0, J.jsxs)(p, { children: [y, b, x, C, w, k, I, U, Q] })),
      (t[104] = p),
      (t[105] = k),
      (t[106] = I),
      (t[107] = U),
      (t[108] = y),
      (t[109] = Q),
      (t[110] = b),
      (t[111] = x),
      (t[112] = C),
      (t[113] = w),
      (t[114] = $))
    : ($ = t[114]);
  let _e;
  t[115] !== m || t[116] !== $
    ? ((_e = (0, J.jsx)(m, { children: $ })), (t[115] = m), (t[116] = $), (t[117] = _e))
    : (_e = t[117]);
  let ve;
  return (
    t[118] !== h || t[119] !== _e
      ? ((ve = (0, J.jsx)(h, { children: _e })), (t[118] = h), (t[119] = _e), (t[120] = ve))
      : (ve = t[120]),
    ve
  );
}
function ue(e) {
  return { value: e.thinking_effort, label: (0, J.jsx)(se, { effort: k[e.thinking_effort] }) };
}
function de(e) {
  return {
    value: e.slug,
    label:
      (e.modelTitle === void 0 ? (e.selectedLabel ?? e.title) : e.modelTitle) ??
      (0, J.jsx)(a, {
        id: `workPreferences.unnamedModel`,
        defaultMessage: `Model`,
        description: `Label for an available Work model with no catalog display name, in Work preferences`,
      }),
  };
}
function fe(e) {
  let t = e.value == null ? `standard` : e.iconKind;
  return t == null ? [] : [{ value: t, label: (0, J.jsx)(a, { ...b[`${t}Label`] }) }];
}
function pe(e) {
  return e.slug;
}
function me(e) {
  return e.options;
}
var he, ge, J, Y;
function X() {
  return (X = e(() => {
    ((he = h()),
      (ge = t(m(), 1)),
      s(),
      p(),
      d(),
      y(),
      N(),
      R(),
      r(),
      D(),
      E(),
      I(),
      v(),
      A(),
      u(),
      M(),
      o(),
      x(),
      B(),
      L(),
      W(),
      C(),
      (J = g()),
      (Y = n({
        showUltraInModelPickerSlider: {
          id: `workPreferences.showUltra`,
          defaultMessage: `Ultra in model picker slider`,
          description: `Whether Work model sliders offer Ultra effort`,
        },
        localBrowserUse: {
          id: `workPreferences.localBrowser`,
          defaultMessage: `Local browser use`,
          description: `Browser access on the user's computer in Work`,
        },
        off: {
          id: `workPreferences.off`,
          defaultMessage: `Off`,
          description: `Disable this Work capability`,
        },
        on: {
          id: `workPreferences.on`,
          defaultMessage: `On`,
          description: `Enable this Work capability subject to existing restrictions`,
        },
      })));
  }))();
}
export { X as i, K as n, G as r, q as t };
//# sourceMappingURL=panel-8ba44374bdf7.js.map
