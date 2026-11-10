import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  JC as n,
  Pxt as r,
  VDt as i,
  Vxt as a,
  iw as o,
  jDt as s,
  qC as c,
  qft as l,
  rst as u,
  tw as d,
  vzt as f,
  xMt as p,
  zxt as m,
} from "./app-shared-bbfeca5e5737.js";
import {
  AAr as h,
  CCn as g,
  D_n as _,
  E_n as v,
  Ggr as y,
  PAr as b,
  QAr as x,
  TCn as S,
  WAr as C,
  jAr as ee,
  kAr as w,
  s8n as te,
  t_r as ne,
  v8n as T,
} from "./app-initial-5851df3f6cb1.js";
import {
  a as E,
  c as re,
  i as ie,
  l as ae,
  n as D,
  o as oe,
  r as O,
  s as se,
  t as ce,
} from "./automation-notification-policy-dropdown-53dcfcad0c55.js";
import { a as k, i as A, n as le, r as ue, t as de } from "./automation-dialog-8a01873d44d2.js";
import { n as fe, r as j } from "./automation-team-row-7df1613673f0.js";
import { a as M, i as pe, r as me, t as he } from "./automation-frequency-section-b14557c3b8fc.js";
function N(e) {
  let n = (0, ye.c)(90),
    {
      afterFrequency: r,
      allowCloudTeamSelection: o,
      allowNewThread: s,
      detailsTrailing: u,
      disablePromptAutoFocus: f,
      draft: p,
      executionLocation: h,
      formId: g,
      setDraft: _,
      resolvedProjects: y,
      onSubmit: b,
    } = e,
    x = o === void 0 || o,
    S = s !== void 0 && s,
    w = f !== void 0 && f,
    T = i(),
    E = h?.selectedLocation === `cloud`,
    ae = a(te),
    D = !E,
    O;
  n[0] === D ? (O = n[1]) : ((O = { enabled: D }), (n[0] = D), (n[1] = O));
  let { data: se } = m(ne, ae, O),
    k = se?.config.sandbox_mode === `read-only`,
    A = se?.config.sandbox_mode === `danger-full-access`,
    j,
    M;
  if (n[2] !== p.projectId || n[3] !== y) {
    j = y.filter(_e);
    let e;
    n[6] === p.projectId
      ? (e = n[7])
      : ((e = (e) => e.projectId === p.projectId), (n[6] = p.projectId), (n[7] = e));
    let t = j.find(e);
    ((M = p.projectId == null ? [l(`~`)] : t == null ? [] : v(t).map(l)),
      (n[2] = p.projectId),
      (n[3] = y),
      (n[4] = j),
      (n[5] = M));
  } else ((j = n[4]), (M = n[5]));
  let me = M,
    N;
  n[8] === T
    ? (N = n[9])
    : ((N = T.formatMessage({
        id: `settings.automations.projectDropdown.placeholder`,
        defaultMessage: `Select project`,
        description: `Placeholder text for automation project dropdown`,
      })),
      (n[8] = T),
      (n[9] = N));
  let F = N,
    I = p.kind === `heartbeat`,
    L;
  n[10] !== j || n[11] !== _
    ? ((L = (e) => {
        let t = e === `~` ? null : e,
          n = j.find((e) => e.projectId === t),
          r = t == null ? [l(`~`)] : n == null ? [] : v(n).map(l);
        _((e) => ee(e, t, r));
      }),
      (n[10] = j),
      (n[11] = _),
      (n[12] = L))
    : (L = n[12]);
  let R = L,
    z;
  n[13] === _
    ? (z = n[14])
    : ((z = (e) => {
        _((t) => ({ ...t, rawRrule: null, scheduleConfig: e, scheduleDirty: !0 }));
      }),
      (n[13] = _),
      (n[14] = z));
  let B = z,
    V;
  n[15] !== p.scheduleConfig || n[16] !== h || n[17] !== B || n[18] !== I || n[19] !== _
    ? ((V = (e) => {
        (e === `cloud` && I
          ? _(ge)
          : e === `local` && p.scheduleConfig.mode === `monthly` && B(C(p.scheduleConfig, `custom`)),
          h?.onSelect?.(e));
      }),
      (n[15] = p.scheduleConfig),
      (n[16] = h),
      (n[17] = B),
      (n[18] = I),
      (n[19] = _),
      (n[20] = V))
    : (V = n[20]);
  let be = V,
    H;
  n[21] === _
    ? (H = n[22])
    : ((H = (e, t) => {
        _((n) => ({ ...n, model: e, reasoningEffort: t }));
      }),
      (n[21] = _),
      (n[22] = H));
  let xe = H,
    U;
  n[23] !== w || n[24] !== p || n[25] !== g || n[26] !== b || n[27] !== me || n[28] !== _
    ? ((U = (0, P.jsx)(c, {
        children: (0, P.jsx)(`div`, {
          className: `min-h-0 min-w-0 flex-1`,
          children: (0, P.jsx)(de, {
            disablePromptAutoFocus: w,
            draft: p,
            formId: g,
            promptSize: `compact`,
            roots: me,
            setDraft: _,
            onSubmit: b,
          }),
        }),
      })),
      (n[23] = w),
      (n[24] = p),
      (n[25] = g),
      (n[26] = b),
      (n[27] = me),
      (n[28] = _),
      (n[29] = U))
    : (U = n[29]);
  let W;
  n[30] !== E || n[31] !== A || n[32] !== I || n[33] !== k
    ? ((W = I || E ? null : (0, P.jsx)(ue, { isDangerFullAccess: A, isReadOnlySandbox: k })),
      (n[30] = E),
      (n[31] = A),
      (n[32] = I),
      (n[33] = k),
      (n[34] = W))
    : (W = n[34]);
  let Se;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (0, P.jsx)(t, {
        id: `inbox.automations.details`,
        defaultMessage: `Details`,
        description: `Section label above the automation details rail`,
      })),
      (n[35] = Se))
    : (Se = n[35]);
  let G;
  n[36] !== h || n[37] !== be
    ? ((G =
        h?.onSelect == null
          ? null
          : (0, P.jsx)(d, {
              control: (0, P.jsx)(ie, { selectedLocation: h.selectedLocation, onSelect: be }),
              label: (0, P.jsx)(t, { ...oe.label }),
              variant: `nested`,
            })),
      (n[36] = h),
      (n[37] = be),
      (n[38] = G))
    : (G = n[38]);
  let K;
  n[39] !== x || n[40] !== p.cloudTeam || n[41] !== p.id || n[42] !== E || n[43] !== _
    ? ((K =
        x && E && p.id == null
          ? (0, P.jsx)(fe, {
              selection: p.cloudTeam,
              onSelect: (e) => {
                _((t) => ({ ...t, cloudTeam: e }));
              },
            })
          : null),
      (n[39] = x),
      (n[40] = p.cloudTeam),
      (n[41] = p.id),
      (n[42] = E),
      (n[43] = _),
      (n[44] = K))
    : (K = n[44]);
  let q;
  n[45] !== S || n[46] !== p || n[47] !== E || n[48] !== _
    ? ((q = E ? null : (0, P.jsx)(ve, { allowNewThread: S, draft: p, setDraft: _ })),
      (n[45] = S),
      (n[46] = p),
      (n[47] = E),
      (n[48] = _),
      (n[49] = q))
    : (q = n[49]);
  let J;
  n[50] !== p.model ||
  n[51] !== p.projectId ||
  n[52] !== p.reasoningEffort ||
  n[53] !== xe ||
  n[54] !== R ||
  n[55] !== T ||
  n[56] !== E ||
  n[57] !== I ||
  n[58] !== j ||
  n[59] !== F
    ? ((J =
        !E && !I
          ? (0, P.jsxs)(P.Fragment, {
              children: [
                (0, P.jsx)(d, {
                  control: (0, P.jsx)(re, {
                    localOnlyTooltip: T.formatMessage({
                      id: `settings.automations.projectDropdown.localOnlyTooltip`,
                      defaultMessage: `Only local projects are available here`,
                      description: `Tooltip explaining why the scheduled task project picker only lists local projects when remote connections are connected`,
                    }),
                    align: `end`,
                    className: `!text-base`,
                    placeholder: F,
                    projects: j,
                    projectlessActionLabel: T.formatMessage({
                      id: `composer.localCwdDropdown.clearProject`,
                      defaultMessage: `Don't work in a project`,
                      description: `Menu item that clears the selected project and starts projectless tasks`,
                    }),
                    projectlessLabel: T.formatMessage({
                      id: `settings.automations.projectDropdown.none`,
                      defaultMessage: `None`,
                      description: `Label for selecting no project in the automation project dropdown`,
                    }),
                    selectedProjectId: p.projectId ?? `~`,
                    showIcon: !1,
                    onChange: R,
                  }),
                  label: T.formatMessage({
                    id: `inbox.automations.folder.label`,
                    defaultMessage: `Project`,
                    description: `Label for the automation folder row in the details rail`,
                  }),
                  variant: `nested`,
                }),
                (0, P.jsx)(d, {
                  control: (0, P.jsx)(le, {
                    align: `end`,
                    className: `!text-base`,
                    field: `model`,
                    reasoningEffort: p.reasoningEffort,
                    selectedModel: p.model,
                    onSelect: xe,
                  }),
                  label: T.formatMessage({
                    id: `inbox.automations.model.label`,
                    defaultMessage: `Model`,
                    description: `Label for the automation model row in the details rail`,
                  }),
                  variant: `nested`,
                }),
                (0, P.jsx)(d, {
                  control: (0, P.jsx)(le, {
                    align: `end`,
                    className: `!text-base`,
                    field: `reasoning`,
                    reasoningEffort: p.reasoningEffort,
                    selectedModel: p.model,
                    onSelect: xe,
                  }),
                  label: T.formatMessage({
                    id: `inbox.automations.reasoning.label`,
                    defaultMessage: `Reasoning`,
                    description: `Label for the automation reasoning level row in the details rail`,
                  }),
                  variant: `nested`,
                }),
              ],
            })
          : null),
      (n[50] = p.model),
      (n[51] = p.projectId),
      (n[52] = p.reasoningEffort),
      (n[53] = xe),
      (n[54] = R),
      (n[55] = T),
      (n[56] = E),
      (n[57] = I),
      (n[58] = j),
      (n[59] = F),
      (n[60] = J))
    : (J = n[60]);
  let Y;
  n[61] !== u || n[62] !== G || n[63] !== K || n[64] !== q || n[65] !== J
    ? ((Y = (0, P.jsxs)(c, { children: [G, K, q, J, u] })),
      (n[61] = u),
      (n[62] = G),
      (n[63] = K),
      (n[64] = q),
      (n[65] = J),
      (n[66] = Y))
    : (Y = n[66]);
  let X;
  n[67] === E
    ? (X = n[68])
    : ((X = E
        ? (0, P.jsx)(`p`, {
            className: `mt-2 px-1 text-sm text-codex-description select-none`,
            children: (0, P.jsx)(t, {
              id: `inbox.automations.executionLocation.cloudDescription`,
              defaultMessage: `Runs in the cloud even when this device is offline. Chat, project, model, and reasoning settings aren't available for cloud tasks`,
              description: `Explains that cloud scheduled tasks run independently of the device and do not support local chat, project, model, or reasoning settings`,
            }),
          })
        : null),
      (n[67] = E),
      (n[68] = X));
  let Z;
  n[69] !== W || n[70] !== Y || n[71] !== X
    ? ((Z = (0, P.jsxs)(pe, { actions: W, title: Se, children: [Y, X] })),
      (n[69] = W),
      (n[70] = Y),
      (n[71] = X),
      (n[72] = Z))
    : (Z = n[72]);
  let Q;
  n[73] !== p.kind || n[74] !== p.notificationPolicy || n[75] !== T || n[76] !== E || n[77] !== _
    ? ((Q = E
        ? void 0
        : (0, P.jsx)(d, {
            control: (0, P.jsx)(ce, {
              kind: p.kind,
              value: p.notificationPolicy,
              onChange: (e) => {
                _((t) => ({ ...t, notificationPolicy: e }));
              },
            }),
            label: T.formatMessage({
              id: `inbox.automations.notifications.label`,
              defaultMessage: `Notifications`,
              description: `Label for the automation notification policy control`,
            }),
            variant: `nested`,
          })),
      (n[73] = p.kind),
      (n[74] = p.notificationPolicy),
      (n[75] = T),
      (n[76] = E),
      (n[77] = _),
      (n[78] = Q))
    : (Q = n[78]);
  let Ce = I && !E ? `heartbeat` : `default`,
    we = E ? `cloud` : `local`,
    $;
  n[79] !== p.scheduleConfig || n[80] !== B || n[81] !== Q || n[82] !== Ce || n[83] !== we
    ? (($ = (0, P.jsx)(he, {
        afterScheduleRows: Q,
        intervalStyle: Ce,
        scheduleConfig: p.scheduleConfig,
        scheduleSource: we,
        onUpdateScheduleDraft: B,
      })),
      (n[79] = p.scheduleConfig),
      (n[80] = B),
      (n[81] = Q),
      (n[82] = Ce),
      (n[83] = we),
      (n[84] = $))
    : ($ = n[84]);
  let Te;
  return (
    n[85] !== r || n[86] !== U || n[87] !== Z || n[88] !== $
      ? ((Te = (0, P.jsxs)(`div`, { className: `flex min-h-0 flex-col gap-6`, children: [U, Z, $, r] })),
        (n[85] = r),
        (n[86] = U),
        (n[87] = Z),
        (n[88] = $),
        (n[89] = Te))
      : (Te = n[89]),
    Te
  );
}
function ge(e) {
  return h(e, `new-task`);
}
function _e(e) {
  return e.projectKind === `local`;
}
function ve(e) {
  let n = (0, ye.c)(7),
    { allowNewThread: r, draft: i, setDraft: a } = e,
    o;
  if (n[0] !== r || n[1] !== i || n[2] !== a) {
    let { missingRequirements: e } = w(i, `local`, { allowNewThread: r }),
      s = (0, P.jsx)(O, { allowNewThread: r, draft: i, setDraft: a }),
      c;
    n[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, P.jsx)(t, {
          id: `inbox.automations.destination.label`,
          defaultMessage: `Runs in`,
          description: `Label for choosing whether a scheduled task runs in a new or existing task`,
        })),
        (n[4] = c))
      : (c = n[4]);
    let l;
    (n[5] === s
      ? (l = n[6])
      : ((l = (0, P.jsx)(d, { control: s, label: c, labelSizing: `content`, variant: `nested` })),
        (n[5] = s),
        (n[6] = l)),
      (o = (0, P.jsxs)(`div`, {
        children: [
          l,
          e.includes(`thread`)
            ? (0, P.jsx)(`p`, {
                className: `px-4 py-2 text-sm text-danger select-none`,
                role: `alert`,
                children: (0, P.jsx)(t, {
                  id: `inbox.automations.targetThread.required`,
                  defaultMessage: `Select a chat for this task`,
                  description: `Validation message beneath the destination picker when a scheduled task needs an existing chat before it can be saved`,
                }),
              })
            : null,
        ],
      })),
      (n[0] = r),
      (n[1] = i),
      (n[2] = a),
      (n[3] = o));
  } else o = n[3];
  return o;
}
var ye, P;
function F() {
  return (F = e(() => {
    ((ye = f()),
      r(),
      u(),
      s(),
      T(),
      ae(),
      _(),
      y(),
      k(),
      o(),
      n(),
      j(),
      E(),
      se(),
      me(),
      D(),
      x(),
      b(),
      M(),
      (P = p()));
  }))();
}
function I(e) {
  let t = (0, L.c)(40),
    {
      actions: n,
      autoFocusName: r,
      children: i,
      closeAction: a,
      footer: o,
      name: s,
      onKeyDown: c,
      onNameChange: l,
      renderSlots: u,
      statusLabel: d,
    } = e,
    f = r !== void 0 && r,
    p = o === void 0 ? null : o,
    m;
  t[0] === d
    ? (m = t[1])
    : ((m =
        d == null
          ? null
          : (0, R.jsx)(`div`, {
              className: `text-sm font-medium text-info electron:ms-1 extension:-ms-1`,
              children: d,
            })),
      (t[0] = d),
      (t[1] = m));
  let h = m,
    _ =
      u == null || n != null || h != null
        ? `h-full overflow-y-auto px-panel pb-panel`
        : `h-full overflow-y-auto p-panel`,
    v;
  t[2] !== f || t[3] !== s || t[4] !== l
    ? ((v =
        l == null
          ? (0, R.jsx)(A, { id: `automation-detail-panel-title`, readOnly: !0, value: s })
          : (0, R.jsx)(A, { id: `automation-detail-panel-title`, autoFocus: f, value: s, onChange: l })),
      (t[2] = f),
      (t[3] = s),
      (t[4] = l),
      (t[5] = v))
    : (v = t[5]);
  let y;
  t[6] !== i || t[7] !== v
    ? ((y = (0, R.jsxs)(`div`, { className: `flex flex-col gap-6`, children: [v, i] })),
      (t[6] = i),
      (t[7] = v),
      (t[8] = y))
    : (y = t[8]);
  let b;
  t[9] !== _ || t[10] !== y
    ? ((b = (0, R.jsx)(`div`, { className: _, children: y })), (t[9] = _), (t[10] = y), (t[11] = b))
    : (b = t[11]);
  let x = b;
  if (u != null) {
    let e;
    if (t[12] !== n || t[13] !== x || t[14] !== p || t[15] !== h || t[16] !== c || t[17] !== u) {
      let r;
      t[19] !== n || t[20] !== h
        ? ((r =
            n == null && h == null
              ? null
              : (0, R.jsxs)(`div`, {
                  className: `flex h-toolbar min-w-0 shrink-0 items-center gap-2 px-toolbar`,
                  children: [
                    h,
                    (0, R.jsx)(`div`, {
                      className: `ms-auto flex min-w-0 shrink-0 items-center gap-1.5`,
                      children: n,
                    }),
                  ],
                })),
          (t[19] = n),
          (t[20] = h),
          (t[21] = r))
        : (r = t[21]);
      let i;
      t[22] === x
        ? (i = t[23])
        : ((i = (0, R.jsx)(`div`, { className: `min-h-0 flex-1`, children: x })), (t[22] = x), (t[23] = i));
      let a;
      t[24] === p
        ? (a = t[25])
        : ((a =
            p == null
              ? null
              : (0, R.jsx)(`div`, { className: `shrink-0 border-t border-default p-panel`, children: p })),
          (t[24] = p),
          (t[25] = a));
      let o;
      (t[26] !== c || t[27] !== i || t[28] !== a || t[29] !== r
        ? ((o = (0, R.jsxs)(`div`, {
            className: `flex h-full min-h-0 flex-col bg-surface`,
            role: `presentation`,
            onKeyDown: c,
            children: [r, i, a],
          })),
          (t[26] = c),
          (t[27] = i),
          (t[28] = a),
          (t[29] = r),
          (t[30] = o))
        : (o = t[30]),
        (e = u({ headerRows: [], content: o })),
        (t[12] = n),
        (t[13] = x),
        (t[14] = p),
        (t[15] = h),
        (t[16] = c),
        (t[17] = u),
        (t[18] = e));
    } else e = t[18];
    return e;
  }
  let S;
  t[31] === a
    ? (S = t[32])
    : ((S = a == null ? { showCloseButton: !1 } : { closeLabel: a.label, onClose: a.onClose }),
      (t[31] = a),
      (t[32] = S));
  let C;
  return (
    t[33] !== n || t[34] !== x || t[35] !== p || t[36] !== h || t[37] !== c || t[38] !== S
      ? ((C = (0, R.jsx)(g, { actions: n, footer: p, leading: h, onKeyDown: c, ...S, children: x })),
        (t[33] = n),
        (t[34] = x),
        (t[35] = p),
        (t[36] = h),
        (t[37] = c),
        (t[38] = S),
        (t[39] = C))
      : (C = t[39]),
    C
  );
}
var L, R;
function z() {
  return (z = e(() => {
    ((L = f()), S(), k(), (R = p()));
  }))();
}
export { F as i, z as n, N as r, I as t };
//# sourceMappingURL=automation-detail-panel-d783fffd1a5b.js.map
