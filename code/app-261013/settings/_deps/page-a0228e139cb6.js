import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  CO as r,
  DV as i,
  Ext as a,
  IDt as o,
  Iot as s,
  JC as c,
  Lot as l,
  Mz as ee,
  NV as u,
  Nz as d,
  Pxt as f,
  Rv as p,
  TJ as m,
  TO as h,
  VDt as g,
  Vxt as te,
  Xot as _,
  Yot as v,
  _O as ne,
  _xt as y,
  cO as re,
  cz as b,
  e3 as x,
  fO as S,
  frt as C,
  gO as w,
  hrt as T,
  iw as ie,
  jDt as E,
  lO as ae,
  mO as oe,
  nst as se,
  oO as ce,
  qC as le,
  sO as ue,
  sz as de,
  t3 as D,
  tst as O,
  tw as fe,
  uO as k,
  vO as A,
  vzt as j,
  xMt as M,
  yzt as N,
  zv as P,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as F,
  EPn as I,
  Gdt as pe,
  JPn as L,
  Upr as R,
  Vdt as z,
  Wpr as me,
  XPn as he,
  Ymr as ge,
  _F as _e,
  _ct as ve,
  bF as ye,
  c$n as B,
  ehr as V,
  fbn as H,
  hF as be,
  qpr as xe,
  s$n as U,
  vct as W,
  xF as G,
} from "./app-initial-5851df3f6cb1.js";
import { a as K, i as Se, n as Ce, o as we, r as Te, t as Ee } from "./title-3bd755049885.js";
function De(e) {
  let n = (0, Oe.c)(38),
    {
      action: a,
      options: s,
      disabled: c,
      fieldId: l,
      labelledBy: ee,
      describedBy: d,
      onChange: f,
      onEdit: p,
      onDelete: m,
    } = e,
    g;
  if (n[0] !== a || n[1] !== s) {
    let e;
    (n[3] === a ? (e = n[4]) : ((e = (e) => e.value === a), (n[3] = a), (n[4] = e)),
      (g = s.find(e)),
      (n[0] = a),
      (n[1] = s),
      (n[2] = g));
  } else g = n[2];
  let te = g,
    _ = l == null ? `max-w-full` : `w-full justify-between`,
    v;
  n[5] === te?.title
    ? (v = n[6])
    : ((v =
        te?.title ??
        (0, q.jsx)(o, {
          id: `settings.userRules.selectAction`,
          defaultMessage: `Choose an action`,
          description: `Placeholder when a saved rule action is no longer in the available action catalog`,
        })),
      (n[5] = te?.title),
      (n[6] = v));
  let ne;
  n[7] === v
    ? (ne = n[8])
    : ((ne = (0, q.jsx)(`span`, { className: `min-w-0 truncate`, children: v })), (n[7] = v), (n[8] = ne));
  let y;
  n[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = (0, q.jsx)(u, {})), (n[9] = y)) : (y = n[9]);
  let re;
  n[10] !== d || n[11] !== c || n[12] !== l || n[13] !== ee || n[14] !== _ || n[15] !== ne
    ? ((re = (0, q.jsxs)(t, {
        id: l,
        "aria-labelledby": ee,
        "aria-describedby": d,
        color: `outline`,
        size: `dialogAction`,
        disabled: c,
        className: _,
        children: [ne, y],
      })),
      (n[10] = d),
      (n[11] = c),
      (n[12] = l),
      (n[13] = ee),
      (n[14] = _),
      (n[15] = ne),
      (n[16] = re))
    : (re = n[16]);
  let b;
  if (n[17] !== a || n[18] !== f || n[19] !== s) {
    let e;
    (n[21] !== a || n[22] !== f
      ? ((e = (e) =>
          (0, q.jsx)(
            h.Item,
            {
              allowWrap: !0,
              subTextAllowWrap: !0,
              SubText: (0, q.jsx)(q.Fragment, { children: e.description }),
              rightIcon: e.value === a ? (0, q.jsx)(i, {}) : void 0,
              onSelect: () => f(e.value),
              children: e.title,
            },
            e.value,
          )),
        (n[21] = a),
        (n[22] = f),
        (n[23] = e))
      : (e = n[23]),
      (b = s.map(e)),
      (n[17] = a),
      (n[18] = f),
      (n[19] = s),
      (n[20] = b));
  } else b = n[20];
  let x;
  n[24] !== m || n[25] !== p
    ? ((x = p != null || m != null ? (0, q.jsx)(h.Separator, {}) : null),
      (n[24] = m),
      (n[25] = p),
      (n[26] = x))
    : (x = n[26]);
  let S;
  n[27] === p
    ? (S = n[28])
    : ((S =
        p == null
          ? null
          : (0, q.jsx)(h.Item, {
              onSelect: p,
              children: (0, q.jsx)(o, {
                id: `settings.userRules.edit`,
                defaultMessage: `Edit rule`,
                description: `Edit a custom rule's text and action`,
              }),
            })),
      (n[27] = p),
      (n[28] = S));
  let C;
  n[29] === m
    ? (C = n[30])
    : ((C =
        m == null
          ? null
          : (0, q.jsx)(h.Item, {
              tone: `destructive`,
              onSelect: m,
              children: (0, q.jsx)(o, {
                id: `settings.userRules.delete`,
                defaultMessage: `Delete rule`,
                description: `Open confirmation to delete one custom rule`,
              }),
            })),
      (n[29] = m),
      (n[30] = C));
  let w;
  return (
    n[31] !== c || n[32] !== C || n[33] !== re || n[34] !== b || n[35] !== x || n[36] !== S
      ? ((w = (0, q.jsxs)(r, {
          align: `end`,
          contentWidth: `panelWide`,
          size: `inset`,
          disabled: c,
          triggerButton: re,
          children: [b, x, S, C],
        })),
        (n[31] = c),
        (n[32] = C),
        (n[33] = re),
        (n[34] = b),
        (n[35] = x),
        (n[36] = S),
        (n[37] = w))
      : (w = n[37]),
    w
  );
}
var Oe, q;
function ke() {
  return (ke = e(() => {
    ((Oe = j()), E(), D(), n(), m(), (q = M()));
  }))();
}
function Ae() {
  let e = (0, je.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, J.jsx)(`p`, {
          className: `text-sm text-secondary select-none`,
          role: `status`,
          children: (0, J.jsx)(o, {
            id: `settings.userRules.readOnly`,
            defaultMessage: `Custom rules can't be edited right now.`,
            description: `Notice in Custom rules settings when editing is unavailable. Saved rules remain visible.`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var je, J;
function Me() {
  return (Me = e(() => {
    ((je = j()), E(), (J = M()));
  }))();
}
function Ne(e) {
  let n = (0, Pe.c)(93),
    { rule: r, options: i, busy: a, blocked: s, error: c, onClose: l, onSave: ee } = e,
    u = g(),
    d = te(we),
    f = (0, Y.useId)(),
    p = (0, Y.useId)(),
    m = (0, Y.useId)(),
    h = (0, Y.useId)(),
    [_, v] = (0, Y.useState)(r?.text ?? ``),
    [y, b] = (0, Y.useState)(r?.action ?? `always_ask`),
    x = _ !== (r?.text ?? ``) || y !== (r?.action ?? `always_ask`);
  pe(`personalization.user-rules`, x || a);
  let S, C;
  n[0] === _
    ? ((S = n[1]), (C = n[2]))
    : ((S = _.trim()), (C = Array.from(S)), (n[0] = _), (n[1] = S), (n[2] = C));
  let w = C.length,
    T = w > Z && S !== r?.text,
    ie;
  n[3] !== y || n[4] !== s || n[5] !== a || n[6] !== S || n[7] !== i || n[8] !== r || n[9] !== T
    ? ((ie =
        !a &&
        !s &&
        S.length > 0 &&
        !T &&
        i.some((e) => e.value === y) &&
        (r == null || S !== r.text || y !== r.action)),
      (n[3] = y),
      (n[4] = s),
      (n[5] = a),
      (n[6] = S),
      (n[7] = i),
      (n[8] = r),
      (n[9] = T),
      (n[10] = ie))
    : (ie = n[10]);
  let E = ie,
    se;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = { "aria-describedby": void 0 }), (n[11] = se))
    : (se = n[11]);
  let le = !a,
    de;
  n[12] !== a || n[13] !== l
    ? ((de = (e) => {
        !e && !a && l();
      }),
      (n[12] = a),
      (n[13] = l),
      (n[14] = de))
    : (de = n[14]);
  let D;
  n[15] !== y || n[16] !== E || n[17] !== S || n[18] !== ee || n[19] !== r?.id
    ? ((D = (e) => {
        (e.preventDefault(), E && ee({ id: r?.id, text: S, action: y }));
      }),
      (n[15] = y),
      (n[16] = E),
      (n[17] = S),
      (n[18] = ee),
      (n[19] = r?.id),
      (n[20] = D))
    : (D = n[20]);
  let O;
  n[21] === r
    ? (O = n[22])
    : ((O = (0, X.jsx)(re, {
        title: (0, X.jsx)(ne, {
          children:
            r == null
              ? (0, X.jsx)(o, {
                  id: `settings.userRules.addRule`,
                  defaultMessage: `Add rule`,
                  description: `Title and submit button for creating a custom rule`,
                })
              : (0, X.jsx)(o, {
                  id: `settings.userRules.edit`,
                  defaultMessage: `Edit rule`,
                  description: `Edit a custom rule's text and action`,
                }),
        }),
      })),
      (n[21] = r),
      (n[22] = O));
  let fe = d != null,
    A;
  n[23] !== d || n[24] !== fe
    ? ((A = (0, X.jsx)(o, {
        id: `settings.userRules.whenWithAssistantName.productName`,
        defaultMessage: `When {hasAssistantName, select, true {{assistantName}} other {your {dot}}} wants to:`,
        description: `Label above the action text field in the custom rule dialog. assistantName is the user-chosen name of their primary dot; preserve its capitalization. When no name is available, dot is the untranslated term for the user's agent.`,
        values: { dot: `dot`, hasAssistantName: fe, assistantName: d },
      })),
      (n[23] = d),
      (n[24] = fe),
      (n[25] = A))
    : (A = n[25]);
  let j;
  n[26] !== A || n[27] !== f
    ? ((j = (0, X.jsx)(`label`, {
        className: `text-sm font-medium text-default select-none`,
        htmlFor: f,
        children: A,
      })),
      (n[26] = A),
      (n[27] = f),
      (n[28] = j))
    : (j = n[28]);
  let M = T ? `${p} ${m}` : p,
    N = T || void 0,
    P;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (e) => v(e.target.value)), (n[29] = P))
    : (P = n[29]);
  let F;
  n[30] === u
    ? (F = n[31])
    : ((F = u.formatMessage({
        id: `settings.userRules.example`,
        defaultMessage: `e.g. write an email for me`,
        description: `Example action in the custom rule text field`,
      })),
      (n[30] = u),
      (n[31] = F));
  let L;
  n[32] !== a || n[33] !== M || n[34] !== N || n[35] !== F || n[36] !== _ || n[37] !== f
    ? ((L = (0, X.jsx)(I, {
        id: f,
        "aria-describedby": M,
        "aria-invalid": N,
        autoFocus: !0,
        variant: `settings`,
        rows: 3,
        disabled: a,
        value: _,
        onChange: P,
        placeholder: F,
      })),
      (n[32] = a),
      (n[33] = M),
      (n[34] = N),
      (n[35] = F),
      (n[36] = _),
      (n[37] = f),
      (n[38] = L))
    : (L = n[38]);
  let R;
  n[39] === w
    ? (R = n[40])
    : ((R = (0, X.jsx)(o, {
        id: `settings.userRules.characterCount`,
        defaultMessage: `{count, number} / {limit, number}`,
        description: `Current character count followed by the maximum for a custom rule. Count excludes leading and trailing whitespace.`,
        values: { count: w, limit: Z },
      })),
      (n[39] = w),
      (n[40] = R));
  let z;
  n[41] !== R || n[42] !== p
    ? ((z = (0, X.jsx)(`p`, { id: p, className: `text-xs text-secondary select-none`, children: R })),
      (n[41] = R),
      (n[42] = p),
      (n[43] = z))
    : (z = n[43]);
  let me;
  n[44] !== m || n[45] !== T
    ? ((me = T
        ? (0, X.jsx)(`p`, {
            id: m,
            className: `text-sm text-danger`,
            role: `alert`,
            children: (0, X.jsx)(o, {
              id: `settings.userRules.textTooLong`,
              defaultMessage: `This rule is too long. Shorten it to continue`,
              description: `Error below a custom rule's text field when newly entered text exceeds 400 characters. Ask the user to shorten it before saving.`,
            }),
          })
        : null),
      (n[44] = m),
      (n[45] = T),
      (n[46] = me))
    : (me = n[46]);
  let he;
  n[47] !== j || n[48] !== L || n[49] !== z || n[50] !== me
    ? ((he = (0, X.jsx)(ae, { spacing: `large`, children: (0, X.jsxs)(k, { children: [j, L, z, me] }) })),
      (n[47] = j),
      (n[48] = L),
      (n[49] = z),
      (n[50] = me),
      (n[51] = he))
    : (he = n[51]);
  let ge = d != null,
    _e;
  n[52] !== d || n[53] !== ge
    ? ((_e = (0, X.jsx)(o, {
        id: `settings.userRules.shouldWithAssistantName.productName`,
        defaultMessage: `{hasAssistantName, select, true {{assistantName}} other {Your {dot}}} should:`,
        description: `Label above the menu for how the user's primary dot should handle an action in the custom rule dialog. assistantName is the dot's user-chosen name; preserve its capitalization. When no name is available, dot is the untranslated term for the user's agent.`,
        values: { dot: `dot`, hasAssistantName: ge, assistantName: d },
      })),
      (n[52] = d),
      (n[53] = ge),
      (n[54] = _e))
    : (_e = n[54]);
  let ve;
  n[55] !== h || n[56] !== _e
    ? ((ve = (0, X.jsx)(`label`, {
        className: `text-sm font-medium text-default select-none`,
        htmlFor: h,
        children: _e,
      })),
      (n[55] = h),
      (n[56] = _e),
      (n[57] = ve))
    : (ve = n[57]);
  let ye;
  n[58] !== y || n[59] !== h || n[60] !== a || n[61] !== i
    ? ((ye = (0, X.jsx)(De, { fieldId: h, options: i, action: y, disabled: a, onChange: b })),
      (n[58] = y),
      (n[59] = h),
      (n[60] = a),
      (n[61] = i),
      (n[62] = ye))
    : (ye = n[62]);
  let B;
  n[63] !== ve || n[64] !== ye
    ? ((B = (0, X.jsx)(ae, { spacing: `large`, children: (0, X.jsxs)(k, { children: [ve, ye] }) })),
      (n[63] = ve),
      (n[64] = ye),
      (n[65] = B))
    : (B = n[65]);
  let V;
  n[66] === c
    ? (V = n[67])
    : ((V = c == null ? null : (0, X.jsx)(ae, { children: c })), (n[66] = c), (n[67] = V));
  let H;
  n[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, X.jsx)(o, {
        id: `settings.userRules.cancel`,
        defaultMessage: `Cancel`,
        description: `Close the rule dialog without saving changes`,
      })),
      (n[68] = H))
    : (H = n[68]);
  let be;
  n[69] !== a || n[70] !== l
    ? ((be = (0, X.jsx)(t, { color: `outline`, size: `dialogAction`, disabled: a, onClick: l, children: H })),
      (n[69] = a),
      (n[70] = l),
      (n[71] = be))
    : (be = n[71]);
  let xe = !E,
    U;
  n[72] === r
    ? (U = n[73])
    : ((U =
        r == null
          ? (0, X.jsx)(o, {
              id: `settings.userRules.addRule`,
              defaultMessage: `Add rule`,
              description: `Title and submit button for creating a custom rule`,
            })
          : (0, X.jsx)(o, {
              id: `settings.userRules.save`,
              defaultMessage: `Save`,
              description: `Save edits to one custom rule`,
            })),
      (n[72] = r),
      (n[73] = U));
  let W;
  n[74] !== a || n[75] !== xe || n[76] !== U
    ? ((W = (0, X.jsx)(t, {
        type: `submit`,
        color: `primary`,
        size: `dialogAction`,
        loading: a,
        disabled: xe,
        children: U,
      })),
      (n[74] = a),
      (n[75] = xe),
      (n[76] = U),
      (n[77] = W))
    : (W = n[77]);
  let G;
  n[78] !== be || n[79] !== W
    ? ((G = (0, X.jsx)(ae, { spacing: `large`, children: (0, X.jsxs)(ue, { children: [be, W] }) })),
      (n[78] = be),
      (n[79] = W),
      (n[80] = G))
    : (G = n[80]);
  let K;
  n[81] !== he || n[82] !== B || n[83] !== V || n[84] !== G || n[85] !== D || n[86] !== O
    ? ((K = (0, X.jsxs)(ce, { as: `form`, size: `viewport`, onSubmit: D, children: [O, he, B, V, G] })),
      (n[81] = he),
      (n[82] = B),
      (n[83] = V),
      (n[84] = G),
      (n[85] = D),
      (n[86] = O),
      (n[87] = K))
    : (K = n[87]);
  let Se;
  return (
    n[88] !== a || n[89] !== K || n[90] !== le || n[91] !== de
      ? ((Se = (0, X.jsx)(oe, {
          open: !0,
          variant: `chatgpt`,
          size: `large`,
          contentProps: se,
          showDialogClose: le,
          shouldIgnoreClickOutside: a,
          onOpenChange: de,
          children: K,
        })),
        (n[88] = a),
        (n[89] = K),
        (n[90] = le),
        (n[91] = de),
        (n[92] = Se))
      : (Se = n[92]),
    Se
  );
}
var Pe, Y, X, Z;
function Fe() {
  return (Fe = e(() => {
    ((Pe = j()), f(), (Y = N()), E(), D(), A(), S(), F(), z(), H(), ke(), K(), (X = M()), (Z = 400));
  }))();
}
function Ie(e) {
  let n = (0, ze.c)(133),
    { accountId: r, userId: i, onClose: s } = e,
    c = a(),
    u = se(),
    d = te(xe),
    f = te(we),
    m = te(me),
    h;
  n[0] !== r || n[1] !== f || n[2] !== d || n[3] !== i
    ? ((h = Se(r, i, d, f)), (n[0] = r), (n[1] = f), (n[2] = d), (n[3] = i), (n[4] = h))
    : (h = n[4]);
  let g = h,
    v = !m,
    y;
  n[5] !== g || n[6] !== v
    ? ((y = { ...g, enabled: v, staleTime: 0 }), (n[5] = g), (n[6] = v), (n[7] = y))
    : (y = n[7]);
  let { data: b, error: x, isFetchedAfterMount: S, isFetching: C, isPlaceholderData: ie, refetch: E } = _(y),
    D = b == null || (C && !S),
    [O, k] = (0, Be.useState)(null),
    A;
  n[8] !== r || n[9] !== g || n[10] !== u || n[11] !== i
    ? ((A = async (e) => {
        await u.cancelQueries({ queryKey: g.queryKey });
        let t = {
          additionalHeaders: { "ChatGPT-Account-ID": r, "x-openai-use-sheep": `1` },
          expectedIdentity: { accountId: r, userId: i },
          expectedErrorStatuses: [403, 404, 409, 422],
          retry: !1,
        };
        return e.kind === `delete`
          ? ge.safeDelete(`/wham/user-rules`, {
              ...t,
              requestBody: { id: e.rule.id, expectedRevision: e.snapshot.revision },
            })
          : e.kind === `edit`
            ? ge.safePatch(`/wham/user-rules`, {
                ...t,
                requestBody: { ...e.rule, expectedRevision: e.snapshot.revision },
              })
            : ge.safePut(`/wham/user-rules`, {
                ...t,
                requestBody: { rules: [...e.snapshot.rules, e.rule], expectedRevision: e.snapshot.revision },
              });
      }),
      (n[8] = r),
      (n[9] = g),
      (n[10] = u),
      (n[11] = i),
      (n[12] = A))
    : (A = n[12]);
  let j;
  n[13] !== g || n[14] !== u
    ? ((j = async (e) => {
        (await u.cancelQueries({ queryKey: g.queryKey }), u.setQueryData(g.queryKey, e), k(null));
      }),
      (n[13] = g),
      (n[14] = u),
      (n[15] = j))
    : (j = n[15]);
  let M;
  n[16] === E
    ? (M = n[17])
    : ((M = async (e) => {
        (e instanceof T && e.status === 422) || (await E());
      }),
      (n[16] = E),
      (n[17] = M));
  let N;
  n[18] !== A || n[19] !== j || n[20] !== M
    ? ((N = { retry: !1, mutationFn: A, onSuccess: j, onError: M }),
      (n[18] = A),
      (n[19] = j),
      (n[20] = M),
      (n[21] = N))
    : (N = n[21]);
  let { mutate: P, isPending: F, error: I, variables: pe, reset: L } = l(N),
    R = I instanceof T && I.status === 422,
    z = I instanceof T && I.status === 403,
    he = b?.canEdit === !0 && !z;
  O != null && (b?.canEdit === !1 || z) && k(null);
  let _e =
      I instanceof T && I.status === 409 && b != null && pe != null && b.revision !== pe.snapshot.revision,
    B = I != null && !R,
    V;
  n[22] !== b?.rules || n[23] !== O || n[24] !== I || n[25] !== pe
    ? ((V =
        I != null && O == null && pe?.kind === `edit` ? b?.rules.find((e) => e.id === pe.rule.id) : void 0),
      (n[22] = b?.rules),
      (n[23] = O),
      (n[24] = I),
      (n[25] = pe),
      (n[26] = V))
    : (V = n[26]);
  let H = V,
    W = !he || F || C || ie || m || B || x != null,
    G = b != null && b.rules.length >= 32,
    K = b == null || W || b.validActions.length === 0,
    Ce;
  n[27] !== B || n[28] !== L
    ? ((Ce = () => {
        (k(null), B || L());
      }),
      (n[27] = B),
      (n[28] = L),
      (n[29] = Ce))
    : (Ce = n[29]);
  let Te = Ce,
    Oe;
  n[30] !== E || n[31] !== L
    ? ((Oe = async () => {
        (await E()).isError || (k(null), L());
      }),
      (n[30] = E),
      (n[31] = L),
      (n[32] = Oe))
    : (Oe = n[32]);
  let q = Oe,
    ke = `unconfirmed`;
  R ? (ke = `invalid`) : _e && (ke = `conflict`);
  let je;
  n[33] !== B || n[34] !== O || n[35] !== ke || n[36] !== I || n[37] !== C || n[38] !== q
    ? ((je =
        I == null
          ? null
          : (0, Q.jsxs)(`div`, {
              className: `flex flex-col items-start gap-3`,
              children: [
                (0, Q.jsx)(`p`, {
                  className: `text-sm text-danger`,
                  role: `alert`,
                  children:
                    (I instanceof T && U(I)?.trim()) ||
                    (0, Q.jsx)(o, {
                      id: `settings.userRules.writeError`,
                      defaultMessage: `{reason, select, invalid {This rule could not be saved. Check that your rules are supported and keep their combined text short.} conflict {Your rules changed elsewhere. Reload the saved rules before making more changes.} other {This change could not be confirmed. Reload the saved rules before trying again.}}`,
                      description: `Actionable custom rules validation, conflict, and uncertain write errors; drafts remain visible until the user discards them`,
                      values: { reason: ke },
                    }),
                }),
                B
                  ? (0, Q.jsx)(t, {
                      disabled: C,
                      onClick: () => void q(),
                      color: `secondary`,
                      children:
                        O == null
                          ? (0, Q.jsx)(o, {
                              id: `settings.userRules.reload`,
                              defaultMessage: `Reload rules`,
                              description: `Reload the saved custom rules before making more changes`,
                            })
                          : (0, Q.jsx)(o, {
                              id: `settings.userRules.discardAndReload`,
                              defaultMessage: `Discard edits and reload`,
                              description: `Explicitly discard the rule draft and reload the saved rules after a conflict or uncertain write`,
                            }),
                    })
                  : null,
              ],
            })),
      (n[33] = B),
      (n[34] = O),
      (n[35] = ke),
      (n[36] = I),
      (n[37] = C),
      (n[38] = q),
      (n[39] = je))
    : (je = n[39]);
  let J = je,
    Me;
  n[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = (0, Q.jsx)(o, {
        id: `settings.userRules.loading`,
        defaultMessage: `Loading rules…`,
        description: `Loading indicator while fetching custom rules`,
      })),
      (n[40] = Me))
    : (Me = n[40]);
  let Pe = Me,
    Y,
    X;
  n[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, Q.jsx)(ee, { asset: p, className: `rtl:rotate-180` })),
      (X = (0, Q.jsx)(o, {
        id: `settings.userRules.back`,
        defaultMessage: `Back`,
        description: `Return to Personalization settings`,
      })),
      (n[41] = Y),
      (n[42] = X))
    : ((Y = n[41]), (X = n[42]));
  let Z;
  n[43] !== F || n[44] !== s
    ? ((Z = (0, Q.jsxs)(t, {
        color: `ghostActive`,
        size: `toolbar`,
        onClick: s,
        disabled: F,
        children: [Y, X],
      })),
      (n[43] = F),
      (n[44] = s),
      (n[45] = Z))
    : (Z = n[45]);
  let Fe;
  n[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = (0, Q.jsx)(Ee, {})), (n[46] = Fe))
    : (Fe = n[46]);
  let Ie = f != null,
    Re;
  n[47] !== f || n[48] !== Ie
    ? ((Re = (0, Q.jsx)(o, {
        id: `settings.userRules.pageDescriptionWithAssistantName.productName`,
        defaultMessage: `{hasAssistantName, select, true {{assistantName}} other {Your {dot}}} knows when to take action, and when to ask for approval. Add custom rules for more control. {hasAssistantName, select, true {{assistantName}} other {Your {dot}}} will always try to follow these rules, but may make mistakes.`,
        description: `Introduction on the Custom rules settings page explaining approval rules and possible mistakes. assistantName is the user-chosen name of the user's primary dot; preserve its capitalization. When no name is available, dot is the untranslated term for the user's agent. Rules apply across the account.`,
        values: { dot: `dot`, hasAssistantName: Ie, assistantName: f },
      })),
      (n[47] = f),
      (n[48] = Ie),
      (n[49] = Re))
    : (Re = n[49]);
  let $;
  n[50] !== K || n[51] !== G
    ? (($ =
        G && !K
          ? (0, Q.jsx)(o, {
              id: `settings.userRules.addLimitTooltip`,
              defaultMessage: `You’ve reached the custom rule limit. Delete an existing rule before creating a new one.`,
              description: `Tooltip on the disabled Add button in custom rules settings when the user has reached the maximum number of saved rules. Explains how to make room for another rule.`,
            })
          : null),
      (n[50] = K),
      (n[51] = G),
      (n[52] = $))
    : ($ = n[52]);
  let Ve = G || void 0,
    He;
  n[53] !== K || n[54] !== G || n[55] !== b || n[56] !== L
    ? ((He = () => {
        b != null && !K && !G && (L(), k({ kind: `create`, snapshot: b }));
      }),
      (n[53] = K),
      (n[54] = G),
      (n[55] = b),
      (n[56] = L),
      (n[57] = He))
    : (He = n[57]);
  let Ue;
  n[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = (0, Q.jsx)(o, {
        id: `settings.userRules.add`,
        defaultMessage: `Add`,
        description: `Open the add custom rule dialog`,
      })),
      (n[58] = Ue))
    : (Ue = n[58]);
  let We;
  n[59] !== K || n[60] !== Ve || n[61] !== He
    ? ((We = (0, Q.jsx)(t, {
        color: `primary`,
        size: `cardAction`,
        disabled: K,
        "aria-disabled": Ve,
        onClick: He,
        children: Ue,
      })),
      (n[59] = K),
      (n[60] = Ve),
      (n[61] = He),
      (n[62] = We))
    : (We = n[62]);
  let Ge;
  n[63] !== $ || n[64] !== We
    ? ((Ge = (0, Q.jsx)(de, { cloneCustomTrigger: !0, tooltipContent: $, children: We })),
      (n[63] = $),
      (n[64] = We),
      (n[65] = Ge))
    : (Ge = n[65]);
  let Ke;
  n[66] !== Re || n[67] !== Ge
    ? ((Ke = (0, Q.jsx)(ye, { title: Fe, variant: `settings`, subtitle: Re, actions: Ge })),
      (n[66] = Re),
      (n[67] = Ge),
      (n[68] = Ke))
    : (Ke = n[68]);
  let qe;
  n[69] !== C || n[70] !== x || n[71] !== q
    ? ((qe =
        x == null
          ? null
          : (0, Q.jsxs)(`div`, {
              className: `flex items-center justify-between gap-3`,
              children: [
                (0, Q.jsx)(`p`, {
                  className: `text-sm text-danger`,
                  role: `alert`,
                  children:
                    (x instanceof T && U(x)?.trim()) ||
                    (0, Q.jsx)(o, {
                      id: `settings.userRules.loadError`,
                      defaultMessage: `Couldn’t load your rules`,
                      description: `Custom rules loading error; does not imply that the user has no rules`,
                    }),
                }),
                (0, Q.jsx)(t, {
                  color: `secondary`,
                  disabled: C,
                  onClick: () => void q(),
                  children: (0, Q.jsx)(o, {
                    id: `settings.userRules.retry`,
                    defaultMessage: `Try again`,
                    description: `Retry loading the account's custom rules`,
                  }),
                }),
              ],
            })),
      (n[69] = C),
      (n[70] = x),
      (n[71] = q),
      (n[72] = qe))
    : (qe = n[72]);
  let Je;
  n[73] !== b || n[74] !== x
    ? ((Je =
        b == null && x == null
          ? (0, Q.jsx)(le, {
              children: (0, Q.jsx)(ve, { density: `compact`, rowCount: 3, loadingLabel: Pe }),
            })
          : null),
      (n[73] = b),
      (n[74] = x),
      (n[75] = Je))
    : (Je = n[75]);
  let Ye;
  n[76] !== b || n[77] !== x || n[78] !== D
    ? ((Ye =
        b != null && D && x == null
          ? (0, Q.jsx)(`span`, { className: `sr-only`, role: `status`, children: Pe })
          : null),
      (n[76] = b),
      (n[77] = x),
      (n[78] = D),
      (n[79] = Ye))
    : (Ye = n[79]);
  let Xe = O == null && H == null ? J : null,
    Ze;
  n[80] !== b || n[81] !== D
    ? ((Ze = b != null && b.canEdit !== !0 && !D ? (0, Q.jsx)(Ae, {}) : null),
      (n[80] = b),
      (n[81] = D),
      (n[82] = Ze))
    : (Ze = n[82]);
  let Qe;
  n[83] !== b || n[84] !== W || n[85] !== J || n[86] !== H?.id || n[87] !== P || n[88] !== L
    ? ((Qe =
        b != null && b.rules.length > 0
          ? (0, Q.jsx)(le, {
              children: b.rules.map((e) =>
                (0, Q.jsx)(
                  fe,
                  {
                    className: `max-sm:flex-col max-sm:items-stretch`,
                    label: (0, Q.jsx)(`span`, { className: `select-text`, children: e.text }),
                    description: H?.id === e.id ? J : null,
                    controlSizing: `content`,
                    control: (t) =>
                      (0, Q.jsx)(De, {
                        labelledBy: t[`aria-labelledby`],
                        describedBy: t[`aria-describedby`],
                        options: b.validActions,
                        action: e.action,
                        disabled: W,
                        onChange: (t) => {
                          t !== e.action && !W && P({ kind: `edit`, rule: { ...e, action: t }, snapshot: b });
                        },
                        onEdit: () => {
                          W || (L(), k({ kind: `edit`, rule: e, snapshot: b }));
                        },
                        onDelete: () => {
                          W || (L(), k({ kind: `delete`, rule: e, snapshot: b }));
                        },
                      }),
                  },
                  e.id,
                ),
              ),
            })
          : null),
      (n[83] = b),
      (n[84] = W),
      (n[85] = J),
      (n[86] = H?.id),
      (n[87] = P),
      (n[88] = L),
      (n[89] = Qe))
    : (Qe = n[89]);
  let $e;
  n[90] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($e = (0, Q.jsx)(fe, {
        label: (0, Q.jsx)(o, {
          id: `settings.userRules.defaults.title`,
          defaultMessage: `Default rules`,
          description: `Label for Help Center guidance about the user's dot's default rules, separate from the user's editable custom rules. A dot is the user's always-on agent.`,
        }),
        controlSizing: `content`,
        control: Le,
      })),
      (n[90] = $e))
    : ($e = n[90]);
  let et;
  n[91] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((et = (0, Q.jsx)(o, {
        id: `settings.userRules.plugins.title`,
        defaultMessage: `Plugin permissions`,
        description: `Label for the plugin permission settings entry on the custom rules page`,
      })),
      (n[91] = et))
    : (et = n[91]);
  let tt = f != null,
    nt;
  n[92] !== f || n[93] !== tt
    ? ((nt = (0, Q.jsx)(o, {
        id: `settings.userRules.plugins.descriptionWithAssistantName.productName`,
        defaultMessage: `{hasAssistantName, select, true {{assistantName}} other {Your {dot}}} respects the permissions you set for installed plugins`,
        description: `Description of plugin permissions on the Custom rules settings page. assistantName is the user-chosen name of the user's primary dot; preserve its capitalization. When no name is available, dot is the untranslated term for the user's agent. Plugin permissions are managed separately from custom rules.`,
        values: { dot: `dot`, hasAssistantName: tt, assistantName: f },
      })),
      (n[92] = f),
      (n[93] = tt),
      (n[94] = nt))
    : (nt = n[94]);
  let rt;
  n[95] === c ? (rt = n[96]) : ((rt = () => void c(`/settings/plugins-settings`)), (n[95] = c), (n[96] = rt));
  let it;
  n[97] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((it = (0, Q.jsx)(o, {
        id: `settings.userRules.plugins.manage`,
        defaultMessage: `Open Plugins`,
        description: `Open Plugins settings from the custom rules page`,
      })),
      (n[97] = it))
    : (it = n[97]);
  let at;
  n[98] !== F || n[99] !== rt
    ? ((at = (0, Q.jsx)(t, { color: `secondary`, size: `dialog`, disabled: F, onClick: rt, children: it })),
      (n[98] = F),
      (n[99] = rt),
      (n[100] = at))
    : (at = n[100]);
  let ot;
  n[101] !== nt || n[102] !== at
    ? ((ot = (0, Q.jsxs)(le, {
        className: `select-none`,
        children: [$e, (0, Q.jsx)(fe, { label: et, description: nt, controlSizing: `content`, control: at })],
      })),
      (n[101] = nt),
      (n[102] = at),
      (n[103] = ot))
    : (ot = n[103]);
  let st;
  n[104] !== Z ||
  n[105] !== Ke ||
  n[106] !== qe ||
  n[107] !== Je ||
  n[108] !== Ye ||
  n[109] !== Xe ||
  n[110] !== Ze ||
  n[111] !== Qe ||
  n[112] !== ot
    ? ((st = (0, Q.jsxs)(be, {
        density: `compact`,
        backSlot: Z,
        children: [Ke, qe, Je, Ye, Xe, Ze, Qe, ot],
      })),
      (n[104] = Z),
      (n[105] = Ke),
      (n[106] = qe),
      (n[107] = Je),
      (n[108] = Ye),
      (n[109] = Xe),
      (n[110] = Ze),
      (n[111] = Qe),
      (n[112] = ot),
      (n[113] = st))
    : (st = n[113]);
  let ct;
  n[114] !== Te ||
  n[115] !== b?.validActions ||
  n[116] !== W ||
  n[117] !== O ||
  n[118] !== J ||
  n[119] !== F ||
  n[120] !== P
    ? ((ct =
        O != null && O.kind !== `delete`
          ? (0, Q.jsx)(Ne, {
              rule: O.kind === `edit` ? O.rule : null,
              options: b?.validActions ?? O.snapshot.validActions,
              busy: F,
              blocked: W,
              error: J,
              onClose: Te,
              onSave: (e) => {
                W ||
                  (O.kind === `edit`
                    ? P({
                        kind: `edit`,
                        rule: { ...O.rule, text: e.text, action: e.action },
                        snapshot: O.snapshot,
                      })
                    : P({ kind: `create`, rule: e, snapshot: O.snapshot }));
              },
            })
          : null),
      (n[114] = Te),
      (n[115] = b?.validActions),
      (n[116] = W),
      (n[117] = O),
      (n[118] = J),
      (n[119] = F),
      (n[120] = P),
      (n[121] = ct))
    : (ct = n[121]);
  let lt;
  n[122] !== Te || n[123] !== W || n[124] !== O || n[125] !== J || n[126] !== F || n[127] !== P
    ? ((lt =
        O?.kind === `delete`
          ? (0, Q.jsx)(oe, {
              open: !0,
              variant: `chatgpt`,
              size: `compact`,
              showDialogClose: !F,
              shouldIgnoreClickOutside: F,
              onOpenChange: (e) => {
                !e && !F && Te();
              },
              children: (0, Q.jsxs)(ce, {
                as: `form`,
                onSubmit: (e) => {
                  (e.preventDefault(), W || P(O));
                },
                children: [
                  (0, Q.jsx)(re, {
                    title: (0, Q.jsx)(ne, {
                      children: (0, Q.jsx)(o, {
                        id: `settings.userRules.deleteTitle`,
                        defaultMessage: `Delete rule?`,
                        description: `Confirmation title before deleting a custom rule`,
                      }),
                    }),
                    subtitle: (0, Q.jsx)(w, {
                      children: (0, Q.jsx)(o, {
                        id: `settings.userRules.deleteWarning`,
                        defaultMessage: `This can’t be undone`,
                        description: `Warning that deleting a rule is permanent`,
                      }),
                    }),
                    subtitleSize: `sm`,
                  }),
                  J == null ? null : (0, Q.jsx)(ae, { children: J }),
                  (0, Q.jsx)(ae, {
                    spacing: `large`,
                    children: (0, Q.jsxs)(ue, {
                      children: [
                        (0, Q.jsx)(t, {
                          color: `secondary`,
                          size: `dialogAction`,
                          disabled: F,
                          onClick: Te,
                          children: (0, Q.jsx)(o, {
                            id: `settings.userRules.cancel`,
                            defaultMessage: `Cancel`,
                            description: `Close the rule dialog without saving changes`,
                          }),
                        }),
                        (0, Q.jsx)(t, {
                          color: `danger`,
                          size: `dialogAction`,
                          loading: F,
                          disabled: W,
                          type: `submit`,
                          children: (0, Q.jsx)(o, {
                            id: `settings.userRules.delete`,
                            defaultMessage: `Delete rule`,
                            description: `Open confirmation to delete one custom rule`,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : null),
      (n[122] = Te),
      (n[123] = W),
      (n[124] = O),
      (n[125] = J),
      (n[126] = F),
      (n[127] = P),
      (n[128] = lt))
    : (lt = n[128]);
  let ut;
  return (
    n[129] !== st || n[130] !== ct || n[131] !== lt
      ? ((ut = (0, Q.jsxs)(Q.Fragment, { children: [st, ct, lt] })),
        (n[129] = st),
        (n[130] = ct),
        (n[131] = lt),
        (n[132] = ut))
      : (ut = n[132]),
    ut
  );
}
function Le(e) {
  return (0, Q.jsx)(x, {
    ...e,
    color: `secondary`,
    size: `dialog`,
    href: $,
    target: `_blank`,
    rel: `noopener noreferrer`,
    onClick: Re,
    children: (0, Q.jsx)(o, {
      id: `settings.userRules.defaults.view`,
      defaultMessage: `Learn more`,
      description: `Opens Help Center guidance about default rules`,
    }),
  });
}
function Re(e) {
  he({ event: e, href: $, initiator: `external_link` });
}
var ze, Be, Q, $;
function Ve() {
  return (Ve = e(() => {
    ((ze = j()),
      P(),
      s(),
      v(),
      O(),
      f(),
      (Be = N()),
      E(),
      y(),
      B(),
      V(),
      D(),
      A(),
      S(),
      L(),
      d(),
      G(),
      W(),
      b(),
      _e(),
      ie(),
      c(),
      C(),
      H(),
      R(),
      ke(),
      K(),
      Me(),
      Fe(),
      Te(),
      Ce(),
      (Q = M()),
      ($ = `https://help.openai.com/articles/20001529`));
  }))();
}
Ve();
export { Ie as UserRulesPage };
//# sourceMappingURL=page-a0228e139cb6.js.map
