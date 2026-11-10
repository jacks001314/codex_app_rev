import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as n,
  CNt as r,
  Klt as i,
  LNt as a,
  PBt as o,
  XOt as s,
  YOt as c,
  ZSt as l,
  ck as u,
  ew as d,
  iCt as f,
  rk as ee,
  sct as p,
  sw as te,
  tk as ne,
  tkt as m,
  uw as h,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Atr as g,
  DJt as re,
  Etr as ie,
  F7n as ae,
  FF as oe,
  IF as _,
  L7n as v,
  OJt as y,
  Otr as b,
  QF as x,
  RF as S,
  TJt as C,
  XF as w,
  XWn as T,
  YWn as E,
  ZF as D,
  ZWn as O,
  cA as k,
  eI as A,
  rPn as j,
  sA as se,
  sIn as M,
} from "./app-initial-ad16eaadf81f.js";
import { Rl as N, Um as P, Wm as F, zl as I } from "./app-primary-3e00728c2a4c.js";
import { n as L, t as ce } from "./model-and-reasoning-effort-translations-ac0973a6e9a8.js";
var R, le;
function z() {
  return (z = e(() => {
    (s(),
      I(),
      (R = a()),
      (le = [
        { value: `on-request`, label: (0, R.jsx)(m, { ...N.onRequest }) },
        { value: `untrusted`, label: (0, R.jsx)(m, { ...N.untrusted }) },
        { value: `never`, label: (0, R.jsx)(m, { ...N.never }) },
      ]));
  }))();
}
function B(e) {
  let t = (0, V.c)(16),
    { label: n, description: r, value: i, options: a, disabled: o, isLoading: s, onChange: c } = e,
    l = s !== void 0 && s,
    u;
  if (t[0] !== l || t[1] !== a || t[2] !== i) {
    if (l) {
      let e, n;
      (t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, H.jsx)(`span`, {
            className: `sr-only`,
            children: (0, H.jsx)(m, {
              id: `workPreferences.loadingLabel`,
              defaultMessage: `Loading…`,
              description: `Accessible status while the saved Work model or reasoning effort label is loading`,
            }),
          })),
          (n = (0, H.jsx)(ae, { as: `span`, className: `block w-24`, size: `sm` })),
          (t[4] = e),
          (t[5] = n))
        : ((e = t[4]), (n = t[5])),
        (u = (0, H.jsxs)(`span`, { role: `status`, children: [e, n] })));
    } else
      u =
        i == null
          ? (0, H.jsx)(ue, {})
          : (a.find((e) => e.value === i)?.label ??
            (0, H.jsx)(m, {
              id: `workPreferences.unavailableValue`,
              defaultMessage: `Unavailable`,
              description: `Label for a saved Work setting whose value is no longer among the available choices`,
            }));
    ((t[0] = l), (t[1] = a), (t[2] = i), (t[3] = u));
  } else u = t[3];
  let d;
  t[6] !== o || t[7] !== l || t[8] !== c || t[9] !== a || t[10] !== u
    ? ((d = (e) =>
        (0, H.jsxs)(ne, {
          align: `end`,
          disabled: o,
          triggerButton: (0, H.jsx)(oe, { ...e, "aria-busy": l || void 0, disabled: o, children: u }),
          children: [
            (0, H.jsx)(ee.Item, { onSelect: () => c(null), children: (0, H.jsx)(ue, {}) }),
            a.map((e) =>
              (0, H.jsx)(ee.Item, { onSelect: () => c(e.value), children: e.label }, String(e.value)),
            ),
          ],
        })),
      (t[6] = o),
      (t[7] = l),
      (t[8] = c),
      (t[9] = a),
      (t[10] = u),
      (t[11] = d))
    : (d = t[11]);
  let f;
  return (
    t[12] !== r || t[13] !== n || t[14] !== d
      ? ((f = (0, H.jsx)(te, { label: n, description: r, control: d })),
        (t[12] = r),
        (t[13] = n),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function ue() {
  let e = (0, V.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, H.jsx)(m, {
          id: `workPreferences.current`,
          defaultMessage: `Use default`,
          description: `Reset this saved Work preference to its default behavior`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var V, H;
function U() {
  return (U = e(() => {
    ((V = o()), s(), u(), v(), h(), S(), (H = a()));
  }))();
}
function W() {
  let e = (0, ge.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, q.jsx)(x, { title: (0, q.jsx)(_, { slug: `agent` }), children: (0, q.jsx)(G, {}) })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function G() {
  let e = (0, ge.c)(14),
    { data: t, isPending: n, error: r, refetch: i } = f(O),
    { mutate: a, isPending: o, error: s } = f(T),
    c;
  e[0] === n ? (c = e[1]) : ((c = n ? (0, q.jsx)(w, {}) : null), (e[0] = n), (e[1] = c));
  let l;
  e[2] !== r || e[3] !== i || e[4] !== s
    ? ((l =
        r != null || s != null
          ? (0, q.jsx)(P, {
              operation: s == null ? `load` : `save`,
              onReload: () => {
                i();
              },
            })
          : null),
      (e[2] = r),
      (e[3] = i),
      (e[4] = s),
      (e[5] = l))
    : (l = e[5]);
  let u;
  e[6] !== t || e[7] !== o || e[8] !== a
    ? ((u = t == null ? null : (0, q.jsx)(K, { settings: t.settings, disabled: o, onUpdate: a })),
      (e[6] = t),
      (e[7] = o),
      (e[8] = a),
      (e[9] = u))
    : (u = e[9]);
  let d;
  return (
    e[10] !== c || e[11] !== l || e[12] !== u
      ? ((d = (0, q.jsxs)(q.Fragment, { children: [c, l, u] })),
        (e[10] = c),
        (e[11] = l),
        (e[12] = u),
        (e[13] = d))
      : (d = e[13]),
    d
  );
}
function K(e) {
  let t = (0, ge.c)(121),
    { settings: r, disabled: a, onUpdate: o } = e,
    { data: s, isPending: c } = f(M),
    l,
    u,
    d,
    p,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S;
  if (t[0] !== a || t[1] !== c || t[2] !== s || t[3] !== o || t[4] !== r) {
    let e = (0, _e.default)(
        [...(s?.options ?? []), ...(s?.versionOptions?.flatMap(he) ?? []), ...(s?.internalOptions ?? [])],
        me,
      ),
      f = r?.enabledReasoningEfforts ?? i.enabledReasoningEfforts.default,
      C = s == null ? void 0 : re(s),
      w = s?.modelConfigBySlug?.[r?.model ?? s.defaultModelSlug]?.thinkingEfforts,
      T = r?.model ?? s?.defaultModelSlug;
    h = ie(T, T == null ? void 0 : s?.serviceTiersByModelSlug?.[T]).flatMap(pe);
    let E;
    if (c) E = (0, q.jsx)(ae, { as: `span`, className: `block w-24`, size: `sm` });
    else if (C == null)
      E = (0, q.jsx)(m, {
        id: `workPreferences.unavailableValue`,
        defaultMessage: `Unavailable`,
        description: `Label for a saved Work setting whose value is no longer among the available choices`,
      });
    else if (r?.enabledReasoningEfforts == null) E = (0, q.jsx)(ue, {});
    else {
      let e;
      t[17] === f ? (e = t[18]) : ((e = (e) => f.includes(e)), (t[17] = f), (t[18] = e));
      let n = C.filter(e),
        r;
      (t[19] === n ? (r = t[20]) : ((r = { count: n.length }), (t[19] = n), (t[20] = r)),
        (E = (0, q.jsx)(m, {
          id: `workPreferences.effortCount`,
          defaultMessage: `{count, plural, one {# selected} other {# selected}}`,
          description: `Number of reasoning effort levels enabled in Work model controls`,
          values: r,
        })));
    }
    ((p = se), (d = se.Content), (u = n));
    let D;
    t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((D = (0, q.jsx)(m, {
          id: `workPreferences.model`,
          defaultMessage: `Model`,
          description: `Default model for new Work tasks`,
        })),
        (t[21] = D))
      : (D = t[21]);
    let O = r?.model,
      k = c && r?.model != null,
      A = e.map(fe),
      j = a || s == null,
      M;
    (t[22] === o
      ? (M = t[23])
      : ((M = (e) => o({ model: e, reasoningEffort: null })), (t[22] = o), (t[23] = M)),
      t[24] !== k || t[25] !== A || t[26] !== j || t[27] !== M || t[28] !== O
        ? ((v = (0, q.jsx)(B, { label: D, value: O, isLoading: k, options: A, disabled: j, onChange: M })),
          (t[24] = k),
          (t[25] = A),
          (t[26] = j),
          (t[27] = M),
          (t[28] = O),
          (t[29] = v))
        : (v = t[29]));
    let N;
    t[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((N = (0, q.jsx)(m, {
          id: `workPreferences.reasoning`,
          defaultMessage: `Default reasoning effort`,
          description: `Default thinking effort for new Work tasks with the selected model`,
        })),
        (t[30] = N))
      : (N = t[30]);
    let P = r?.reasoningEffort,
      F = c && r?.reasoningEffort != null,
      I;
    t[31] === w ? (I = t[32]) : ((I = w ?? []), (t[31] = w), (t[32] = I));
    let L;
    t[33] === I ? (L = t[34]) : ((L = I.map(de)), (t[33] = I), (t[34] = L));
    let R = a || w == null || w.length === 0,
      z;
    (t[35] === o ? (z = t[36]) : ((z = (e) => o({ reasoningEffort: e })), (t[35] = o), (t[36] = z)),
      t[37] !== P || t[38] !== F || t[39] !== L || t[40] !== R || t[41] !== z
        ? ((y = (0, q.jsx)(B, { label: N, value: P, isLoading: F, options: L, disabled: R, onChange: z })),
          (t[37] = P),
          (t[38] = F),
          (t[39] = L),
          (t[40] = R),
          (t[41] = z),
          (t[42] = y))
        : (y = t[42]));
    let V;
    (t[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((V = (0, q.jsx)(m, {
          id: `workPreferences.availableEfforts`,
          defaultMessage: `Efforts shown in model picker`,
          description: `Reasoning effort levels displayed in Work model controls`,
        })),
        (t[43] = V))
      : (V = t[43]),
      t[44] !== C || t[45] !== a || t[46] !== E || t[47] !== f || t[48] !== c || t[49] !== o
        ? ((b = (0, q.jsx)(te, {
            label: V,
            control: (e) =>
              (0, q.jsxs)(ne, {
                align: `end`,
                disabled: a || C == null,
                triggerButton: (0, q.jsx)(oe, {
                  ...e,
                  "aria-busy": c || void 0,
                  disabled: a || C == null,
                  children: E,
                }),
                children: [
                  (0, q.jsx)(ee.Item, {
                    onSelect: () => o({ enabledReasoningEfforts: null }),
                    children: (0, q.jsx)(ue, {}),
                  }),
                  C?.map((e) =>
                    (0, q.jsx)(
                      ee.CheckboxItem,
                      {
                        checked: f.includes(e),
                        onCheckedChange: (t) =>
                          o({ enabledReasoningEfforts: t ? [...f, e] : f.filter((t) => t !== e) }),
                        children: (0, q.jsx)(ce, { effort: e }),
                      },
                      e,
                    ),
                  ),
                ],
              }),
          })),
          (t[44] = C),
          (t[45] = a),
          (t[46] = E),
          (t[47] = f),
          (t[48] = c),
          (t[49] = o),
          (t[50] = b))
        : (b = t[50]));
    let H, U;
    t[51] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((H = (0, q.jsx)(m, {
          id: `workPreferences.localApprovalPolicy`,
          defaultMessage: `Local approval policy`,
          description: `Approval policy for Work tasks executing on the user's computer`,
        })),
        (U = (0, q.jsx)(m, {
          id: `workPreferences.localApprovalPolicyDescription`,
          defaultMessage: `Applies to native Work chats. Classic Work currently forwards only on-request approvals`,
          description: `Distinguishes native Work approval support from the existing classic Work forwarding limitation`,
        })),
        (t[51] = H),
        (t[52] = U))
      : ((H = t[51]), (U = t[52]));
    let W = r?.approvalPolicy,
      G;
    (t[53] === o ? (G = t[54]) : ((G = (e) => o({ approvalPolicy: e })), (t[53] = o), (t[54] = G)),
      t[55] !== a || t[56] !== W || t[57] !== G
        ? ((x = (0, q.jsx)(B, { label: H, description: U, value: W, options: le, disabled: a, onChange: G })),
          (t[55] = a),
          (t[56] = W),
          (t[57] = G),
          (t[58] = x))
        : (x = t[58]));
    let K;
    (t[59] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((K = [`showUltraInModelPickerSlider`, `localBrowserUse`]), (t[59] = K))
      : (K = t[59]),
      t[60] !== a || t[61] !== o || t[62] !== r
        ? ((S = K.map((e) =>
            (0, q.jsx)(
              B,
              {
                label: (0, q.jsx)(m, { ...J[e] }),
                value: r?.[e],
                options: [
                  { value: !1, label: (0, q.jsx)(m, { ...J.off }) },
                  { value: !0, label: (0, q.jsx)(m, { ...J.on }) },
                ],
                disabled: a,
                onChange: (t) => o({ [e]: t }),
              },
              e,
            ),
          )),
          (t[60] = a),
          (t[61] = o),
          (t[62] = r),
          (t[63] = S))
        : (S = t[63]),
      (l = B),
      t[64] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((g = (0, q.jsx)(m, {
            id: `workPreferences.speed`,
            defaultMessage: `Speed`,
            description: `Default execution speed for Work`,
          })),
          (t[64] = g))
        : (g = t[64]),
      (_ =
        s != null && r?.serviceTier != null && !h.some((e) => e.value === r.serviceTier)
          ? (0, q.jsx)(m, {
              id: `workPreferences.unavailableSpeed`,
              defaultMessage: `Your saved speed isn’t available for this model or account. Standard will be used`,
              description: `Explains that a saved Work speed is unavailable for the selected model or current account and new tasks will fall back to Standard speed`,
            })
          : void 0),
      (t[0] = a),
      (t[1] = c),
      (t[2] = s),
      (t[3] = o),
      (t[4] = r),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d),
      (t[8] = p),
      (t[9] = h),
      (t[10] = g),
      (t[11] = _),
      (t[12] = v),
      (t[13] = y),
      (t[14] = b),
      (t[15] = x),
      (t[16] = S));
  } else
    ((l = t[5]),
      (u = t[6]),
      (d = t[7]),
      (p = t[8]),
      (h = t[9]),
      (g = t[10]),
      (_ = t[11]),
      (v = t[12]),
      (y = t[13]),
      (b = t[14]),
      (x = t[15]),
      (S = t[16]));
  let C = r?.serviceTier,
    w = c && r?.serviceTier != null,
    T = a || s == null,
    E;
  t[65] === o ? (E = t[66]) : ((E = (e) => o({ serviceTier: e })), (t[65] = o), (t[66] = E));
  let D;
  t[67] !== l ||
  t[68] !== h ||
  t[69] !== g ||
  t[70] !== T ||
  t[71] !== E ||
  t[72] !== _ ||
  t[73] !== C ||
  t[74] !== w
    ? ((D = (0, q.jsx)(l, {
        label: g,
        description: _,
        value: C,
        isLoading: w,
        options: h,
        disabled: T,
        onChange: E,
      })),
      (t[67] = l),
      (t[68] = h),
      (t[69] = g),
      (t[70] = T),
      (t[71] = E),
      (t[72] = _),
      (t[73] = C),
      (t[74] = w),
      (t[75] = D))
    : (D = t[75]);
  let O;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, q.jsx)(m, {
        id: `workPreferences.sandbox`,
        defaultMessage: `Local file access`,
        description: `Default filesystem sandbox for local tools in Work`,
      })),
      (t[76] = O))
    : (O = t[76]);
  let k = r?.sandboxMode,
    A;
  t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = { value: `read-only`, label: (0, q.jsx)(m, { ...N.readOnly }) }), (t[77] = A))
    : (A = t[77]);
  let j;
  t[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = [A, { value: `workspace-write`, label: (0, q.jsx)(m, { ...N.workspaceWrite }) }]), (t[78] = j))
    : (j = t[78]);
  let P;
  t[79] === o ? (P = t[80]) : ((P = (e) => o({ sandboxMode: e })), (t[79] = o), (t[80] = P));
  let F;
  t[81] !== a || t[82] !== k || t[83] !== P
    ? ((F = (0, q.jsx)(B, { label: O, value: k, options: j, disabled: a, onChange: P })),
      (t[81] = a),
      (t[82] = k),
      (t[83] = P),
      (t[84] = F))
    : (F = t[84]);
  let I;
  t[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, q.jsx)(m, {
        id: `workPreferences.network`,
        defaultMessage: `Local network access`,
        description: `Network access for sandboxed local tools in Work`,
      })),
      (t[85] = I))
    : (I = t[85]);
  let L = r?.networkAccess,
    R;
  t[86] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = { value: !1, label: (0, q.jsx)(m, { ...J.off }) }), (t[86] = R))
    : (R = t[86]);
  let z;
  t[87] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = [R, { value: !0, label: (0, q.jsx)(m, { ...J.on }) }]), (t[87] = z))
    : (z = t[87]);
  let V;
  t[88] === o ? (V = t[89]) : ((V = (e) => o({ networkAccess: e })), (t[88] = o), (t[89] = V));
  let H;
  t[90] !== a || t[91] !== L || t[92] !== V
    ? ((H = (0, q.jsx)(B, { label: I, value: L, options: z, disabled: a, onChange: V })),
      (t[90] = a),
      (t[91] = L),
      (t[92] = V),
      (t[93] = H))
    : (H = t[93]);
  let U;
  t[94] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, q.jsx)(m, {
        id: `workPreferences.search`,
        defaultMessage: `Local web search`,
        description: `Web search setting for the local Work executor`,
      })),
      (t[94] = U))
    : (U = t[94]);
  let W = r?.webSearch,
    G;
  t[95] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = { value: `disabled`, label: (0, q.jsx)(m, { ...J.off }) }), (t[95] = G))
    : (G = t[95]);
  let K;
  t[96] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = { value: `cached`, label: (0, q.jsx)(m, { ...N.webSearchCached }) }), (t[96] = K))
    : (K = t[96]);
  let Y;
  t[97] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = [G, K, { value: `live`, label: (0, q.jsx)(m, { ...N.webSearchLive }) }]), (t[97] = Y))
    : (Y = t[97]);
  let X;
  t[98] === o ? (X = t[99]) : ((X = (e) => o({ webSearch: e })), (t[98] = o), (t[99] = X));
  let Z;
  t[100] !== a || t[101] !== W || t[102] !== X
    ? ((Z = (0, q.jsx)(B, { label: U, value: W, options: Y, disabled: a, onChange: X })),
      (t[100] = a),
      (t[101] = W),
      (t[102] = X),
      (t[103] = Z))
    : (Z = t[103]);
  let Q;
  t[104] !== u ||
  t[105] !== D ||
  t[106] !== F ||
  t[107] !== H ||
  t[108] !== v ||
  t[109] !== Z ||
  t[110] !== y ||
  t[111] !== b ||
  t[112] !== x ||
  t[113] !== S
    ? ((Q = (0, q.jsxs)(u, { children: [v, y, b, x, S, D, F, H, Z] })),
      (t[104] = u),
      (t[105] = D),
      (t[106] = F),
      (t[107] = H),
      (t[108] = v),
      (t[109] = Z),
      (t[110] = y),
      (t[111] = b),
      (t[112] = x),
      (t[113] = S),
      (t[114] = Q))
    : (Q = t[114]);
  let $;
  t[115] !== d || t[116] !== Q
    ? (($ = (0, q.jsx)(d, { children: Q })), (t[115] = d), (t[116] = Q), (t[117] = $))
    : ($ = t[117]);
  let ve;
  return (
    t[118] !== p || t[119] !== $
      ? ((ve = (0, q.jsx)(p, { children: $ })), (t[118] = p), (t[119] = $), (t[120] = ve))
      : (ve = t[120]),
    ve
  );
}
function de(e) {
  return { value: e.thinking_effort, label: (0, q.jsx)(ce, { effort: C[e.thinking_effort] }) };
}
function fe(e) {
  return {
    value: e.slug,
    label:
      (e.modelTitle === void 0 ? (e.selectedLabel ?? e.title) : e.modelTitle) ??
      (0, q.jsx)(m, {
        id: `workPreferences.unnamedModel`,
        defaultMessage: `Model`,
        description: `Label for an available Work model with no catalog display name, in Work preferences`,
      }),
  };
}
function pe(e) {
  let t = e.value == null ? `standard` : e.iconKind;
  return t == null ? [] : [{ value: t, label: (0, q.jsx)(m, { ...g[`${t}Label`] }) }];
}
function me(e) {
  return e.slug;
}
function he(e) {
  return e.options;
}
var ge, _e, q, J;
function Y() {
  return (Y = e(() => {
    ((ge = o()),
      (_e = t(r(), 1)),
      l(),
      p(),
      s(),
      j(),
      y(),
      L(),
      u(),
      v(),
      A(),
      I(),
      k(),
      D(),
      h(),
      S(),
      d(),
      b(),
      z(),
      F(),
      U(),
      E(),
      (q = a()),
      (J = c({
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
export { Y as i, G as n, W as r, K as t };
//# sourceMappingURL=panel-ede8cf50d7fd.js.map
