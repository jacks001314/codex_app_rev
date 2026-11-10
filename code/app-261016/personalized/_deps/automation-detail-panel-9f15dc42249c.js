import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  LNt as n,
  PBt as r,
  XOt as i,
  ZSt as a,
  cmt as o,
  ew as s,
  iCt as c,
  nCt as l,
  okt as u,
  sct as d,
  sw as f,
  tkt as p,
  uw as m,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Pr as h,
  HEn as g,
  Jbr as _,
  Jyn as v,
  U9n as y,
  WEn as b,
  Yyn as x,
  eFr as S,
  eer as C,
  iFr as ee,
  ixr as te,
  mFr as ne,
  tFr as re,
  xFr as w,
} from "./app-initial-ad16eaadf81f.js";
import {
  a as T,
  c as ie,
  i as ae,
  l as oe,
  n as se,
  o as ce,
  r as E,
  s as le,
  t as ue,
} from "./automation-notification-policy-dropdown-2708acfbf470.js";
import { a as D, i as O, n as de, r as fe, t as pe } from "./automation-dialog-843b9afb1cdf.js";
import { n as me, r as k } from "./automation-team-row-cf974f62fd66.js";
import { a as A, i as he, r as ge, t as _e } from "./automation-frequency-section-caeb4180ce42.js";
function j(e) {
  let n = (0, xe.c)(90),
    {
      afterFrequency: r,
      allowCloudTeamSelection: i,
      allowNewThread: a,
      detailsTrailing: s,
      disablePromptAutoFocus: d,
      draft: m,
      executionLocation: h,
      formId: g,
      setDraft: _,
      resolvedProjects: b,
      onSubmit: x,
    } = e,
    S = i === void 0 || i,
    C = a !== void 0 && a,
    ee = d !== void 0 && d,
    w = u(),
    T = h?.selectedLocation === `cloud`,
    oe = c(y),
    se = !T,
    E;
  n[0] === se ? (E = n[1]) : ((E = { enabled: se }), (n[0] = se), (n[1] = E));
  let { data: le } = l(te, oe, E),
    D = le?.config.sandbox_mode === `read-only`,
    O = le?.config.sandbox_mode === `danger-full-access`,
    k,
    A;
  if (n[2] !== m.projectId || n[3] !== b) {
    k = b.filter(ye);
    let e;
    n[6] === m.projectId
      ? (e = n[7])
      : ((e = (e) => e.projectId === m.projectId), (n[6] = m.projectId), (n[7] = e));
    let t = k.find(e);
    ((A = m.projectId == null ? [o(`~`)] : t == null ? [] : v(t).map(o)),
      (n[2] = m.projectId),
      (n[3] = b),
      (n[4] = k),
      (n[5] = A));
  } else ((k = n[4]), (A = n[5]));
  let ge = A,
    j;
  n[8] === w
    ? (j = n[9])
    : ((j = w.formatMessage({
        id: `settings.automations.projectDropdown.placeholder`,
        defaultMessage: `Select project`,
        description: `Placeholder text for automation project dropdown`,
      })),
      (n[8] = w),
      (n[9] = j));
  let N = j,
    P = m.kind === `heartbeat`,
    F;
  n[10] !== k || n[11] !== _
    ? ((F = (e) => {
        let t = e === `~` ? null : e,
          n = k.find((e) => e.projectId === t),
          r = t == null ? [o(`~`)] : n == null ? [] : v(n).map(o);
        _((e) => re(e, t, r));
      }),
      (n[10] = k),
      (n[11] = _),
      (n[12] = F))
    : (F = n[12]);
  let I = F,
    L;
  n[13] === _
    ? (L = n[14])
    : ((L = (e) => {
        _((t) => ({ ...t, rawRrule: null, scheduleConfig: e, scheduleDirty: !0 }));
      }),
      (n[13] = _),
      (n[14] = L));
  let R = L,
    z;
  n[15] !== m.scheduleConfig || n[16] !== h || n[17] !== R || n[18] !== P || n[19] !== _
    ? ((z = (e) => {
        (e === `cloud` && P
          ? _(ve)
          : e === `local` && m.scheduleConfig.mode === `monthly` && R(ne(m.scheduleConfig, `custom`)),
          h?.onSelect?.(e));
      }),
      (n[15] = m.scheduleConfig),
      (n[16] = h),
      (n[17] = R),
      (n[18] = P),
      (n[19] = _),
      (n[20] = z))
    : (z = n[20]);
  let Se = z,
    B;
  n[21] === _
    ? (B = n[22])
    : ((B = (e, t) => {
        _((n) => ({ ...n, model: e, reasoningEffort: t }));
      }),
      (n[21] = _),
      (n[22] = B));
  let V = B,
    H;
  n[23] !== ee || n[24] !== m || n[25] !== g || n[26] !== x || n[27] !== ge || n[28] !== _
    ? ((H = (0, M.jsx)(t, {
        children: (0, M.jsx)(`div`, {
          className: `min-h-0 min-w-0 flex-1`,
          children: (0, M.jsx)(pe, {
            disablePromptAutoFocus: ee,
            draft: m,
            formId: g,
            promptSize: `compact`,
            roots: ge,
            setDraft: _,
            onSubmit: x,
          }),
        }),
      })),
      (n[23] = ee),
      (n[24] = m),
      (n[25] = g),
      (n[26] = x),
      (n[27] = ge),
      (n[28] = _),
      (n[29] = H))
    : (H = n[29]);
  let U;
  n[30] !== T || n[31] !== O || n[32] !== P || n[33] !== D
    ? ((U = P || T ? null : (0, M.jsx)(fe, { isDangerFullAccess: O, isReadOnlySandbox: D })),
      (n[30] = T),
      (n[31] = O),
      (n[32] = P),
      (n[33] = D),
      (n[34] = U))
    : (U = n[34]);
  let W;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, M.jsx)(p, {
        id: `inbox.automations.details`,
        defaultMessage: `Details`,
        description: `Section label above the automation details rail`,
      })),
      (n[35] = W))
    : (W = n[35]);
  let G;
  n[36] !== h || n[37] !== Se
    ? ((G =
        h?.onSelect == null
          ? null
          : (0, M.jsx)(f, {
              control: (0, M.jsx)(ae, { selectedLocation: h.selectedLocation, onSelect: Se }),
              label: (0, M.jsx)(p, { ...ce.label }),
              variant: `nested`,
            })),
      (n[36] = h),
      (n[37] = Se),
      (n[38] = G))
    : (G = n[38]);
  let K;
  n[39] !== S || n[40] !== m.cloudTeam || n[41] !== m.id || n[42] !== T || n[43] !== _
    ? ((K =
        S && T && m.id == null
          ? (0, M.jsx)(me, {
              selection: m.cloudTeam,
              onSelect: (e) => {
                _((t) => ({ ...t, cloudTeam: e }));
              },
            })
          : null),
      (n[39] = S),
      (n[40] = m.cloudTeam),
      (n[41] = m.id),
      (n[42] = T),
      (n[43] = _),
      (n[44] = K))
    : (K = n[44]);
  let q;
  n[45] !== C || n[46] !== m || n[47] !== T || n[48] !== _
    ? ((q = T ? null : (0, M.jsx)(be, { allowNewThread: C, draft: m, setDraft: _ })),
      (n[45] = C),
      (n[46] = m),
      (n[47] = T),
      (n[48] = _),
      (n[49] = q))
    : (q = n[49]);
  let J;
  n[50] !== m.model ||
  n[51] !== m.projectId ||
  n[52] !== m.reasoningEffort ||
  n[53] !== V ||
  n[54] !== I ||
  n[55] !== w ||
  n[56] !== T ||
  n[57] !== P ||
  n[58] !== k ||
  n[59] !== N
    ? ((J =
        !T && !P
          ? (0, M.jsxs)(M.Fragment, {
              children: [
                (0, M.jsx)(f, {
                  control: (0, M.jsx)(ie, {
                    localOnlyTooltip: w.formatMessage({
                      id: `settings.automations.projectDropdown.localOnlyTooltip`,
                      defaultMessage: `Only local projects are available here`,
                      description: `Tooltip explaining why the scheduled task project picker only lists local projects when remote connections are connected`,
                    }),
                    align: `end`,
                    className: `!text-base`,
                    placeholder: N,
                    projects: k,
                    projectlessActionLabel: w.formatMessage({
                      id: `composer.localCwdDropdown.clearProject`,
                      defaultMessage: `Don't work in a project`,
                      description: `Menu item that clears the selected project and starts projectless tasks`,
                    }),
                    projectlessLabel: w.formatMessage({
                      id: `settings.automations.projectDropdown.none`,
                      defaultMessage: `None`,
                      description: `Label for selecting no project in the automation project dropdown`,
                    }),
                    selectedProjectId: m.projectId ?? `~`,
                    showIcon: !1,
                    onChange: I,
                  }),
                  label: w.formatMessage({
                    id: `inbox.automations.folder.label`,
                    defaultMessage: `Project`,
                    description: `Label for the automation folder row in the details rail`,
                  }),
                  variant: `nested`,
                }),
                (0, M.jsx)(f, {
                  control: (0, M.jsx)(de, {
                    align: `end`,
                    className: `!text-base`,
                    field: `model`,
                    reasoningEffort: m.reasoningEffort,
                    selectedModel: m.model,
                    onSelect: V,
                  }),
                  label: w.formatMessage({
                    id: `inbox.automations.model.label`,
                    defaultMessage: `Model`,
                    description: `Label for the automation model row in the details rail`,
                  }),
                  variant: `nested`,
                }),
                (0, M.jsx)(f, {
                  control: (0, M.jsx)(de, {
                    align: `end`,
                    className: `!text-base`,
                    field: `reasoning`,
                    reasoningEffort: m.reasoningEffort,
                    selectedModel: m.model,
                    onSelect: V,
                  }),
                  label: w.formatMessage({
                    id: `inbox.automations.reasoning.label`,
                    defaultMessage: `Reasoning`,
                    description: `Label for the automation reasoning level row in the details rail`,
                  }),
                  variant: `nested`,
                }),
              ],
            })
          : null),
      (n[50] = m.model),
      (n[51] = m.projectId),
      (n[52] = m.reasoningEffort),
      (n[53] = V),
      (n[54] = I),
      (n[55] = w),
      (n[56] = T),
      (n[57] = P),
      (n[58] = k),
      (n[59] = N),
      (n[60] = J))
    : (J = n[60]);
  let Y;
  n[61] !== s || n[62] !== G || n[63] !== K || n[64] !== q || n[65] !== J
    ? ((Y = (0, M.jsxs)(t, { children: [G, K, q, J, s] })),
      (n[61] = s),
      (n[62] = G),
      (n[63] = K),
      (n[64] = q),
      (n[65] = J),
      (n[66] = Y))
    : (Y = n[66]);
  let X;
  n[67] === T
    ? (X = n[68])
    : ((X = T
        ? (0, M.jsx)(`p`, {
            className: `mt-2 px-1 text-sm text-codex-description select-none`,
            children: (0, M.jsx)(p, {
              id: `inbox.automations.executionLocation.cloudDescription`,
              defaultMessage: `Runs in the cloud even when this device is offline. Chat, project, model, and reasoning settings aren't available for cloud tasks`,
              description: `Explains that cloud scheduled tasks run independently of the device and do not support local chat, project, model, or reasoning settings`,
            }),
          })
        : null),
      (n[67] = T),
      (n[68] = X));
  let Z;
  n[69] !== U || n[70] !== Y || n[71] !== X
    ? ((Z = (0, M.jsxs)(he, { actions: U, title: W, children: [Y, X] })),
      (n[69] = U),
      (n[70] = Y),
      (n[71] = X),
      (n[72] = Z))
    : (Z = n[72]);
  let Q;
  n[73] !== m.kind || n[74] !== m.notificationPolicy || n[75] !== w || n[76] !== T || n[77] !== _
    ? ((Q = T
        ? void 0
        : (0, M.jsx)(f, {
            control: (0, M.jsx)(ue, {
              kind: m.kind,
              value: m.notificationPolicy,
              onChange: (e) => {
                _((t) => ({ ...t, notificationPolicy: e }));
              },
            }),
            label: w.formatMessage({
              id: `inbox.automations.notifications.label`,
              defaultMessage: `Notifications`,
              description: `Label for the automation notification policy control`,
            }),
            variant: `nested`,
          })),
      (n[73] = m.kind),
      (n[74] = m.notificationPolicy),
      (n[75] = w),
      (n[76] = T),
      (n[77] = _),
      (n[78] = Q))
    : (Q = n[78]);
  let Ce = P && !T ? `heartbeat` : `default`,
    we = T ? `cloud` : `local`,
    $;
  n[79] !== m.scheduleConfig || n[80] !== R || n[81] !== Q || n[82] !== Ce || n[83] !== we
    ? (($ = (0, M.jsx)(_e, {
        afterScheduleRows: Q,
        intervalStyle: Ce,
        scheduleConfig: m.scheduleConfig,
        scheduleSource: we,
        onUpdateScheduleDraft: R,
      })),
      (n[79] = m.scheduleConfig),
      (n[80] = R),
      (n[81] = Q),
      (n[82] = Ce),
      (n[83] = we),
      (n[84] = $))
    : ($ = n[84]);
  let Te;
  return (
    n[85] !== r || n[86] !== H || n[87] !== Z || n[88] !== $
      ? ((Te = (0, M.jsxs)(`div`, { className: `flex min-h-0 flex-col gap-6`, children: [H, Z, $, r] })),
        (n[85] = r),
        (n[86] = H),
        (n[87] = Z),
        (n[88] = $),
        (n[89] = Te))
      : (Te = n[89]),
    Te
  );
}
function ve(e) {
  return S(e, `new-task`);
}
function ye(e) {
  return e.projectKind === `local`;
}
function be(e) {
  let t = (0, xe.c)(7),
    { allowNewThread: n, draft: r, setDraft: i } = e,
    a;
  if (t[0] !== n || t[1] !== r || t[2] !== i) {
    let { missingRequirements: e } = h(r, `local`, { allowNewThread: n }),
      o = (0, M.jsx)(E, { allowNewThread: n, draft: r, setDraft: i }),
      s;
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, M.jsx)(p, {
          id: `inbox.automations.destination.label`,
          defaultMessage: `Runs in`,
          description: `Label for choosing whether a scheduled task runs in a new or existing task`,
        })),
        (t[4] = s))
      : (s = t[4]);
    let c;
    (t[5] === o
      ? (c = t[6])
      : ((c = (0, M.jsx)(f, { control: o, label: s, labelSizing: `content`, variant: `nested` })),
        (t[5] = o),
        (t[6] = c)),
      (a = (0, M.jsxs)(`div`, {
        children: [
          c,
          e.includes(`thread`)
            ? (0, M.jsx)(`p`, {
                className: `px-4 py-2 text-sm text-danger select-none`,
                role: `alert`,
                children: (0, M.jsx)(p, {
                  id: `inbox.automations.targetThread.required`,
                  defaultMessage: `Select a chat for this task`,
                  description: `Validation message beneath the destination picker when a scheduled task needs an existing chat before it can be saved`,
                }),
              })
            : null,
        ],
      })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a));
  } else a = t[3];
  return a;
}
var xe, M;
function N() {
  return (N = e(() => {
    ((xe = r()),
      a(),
      d(),
      i(),
      C(),
      oe(),
      x(),
      _(),
      D(),
      m(),
      s(),
      k(),
      T(),
      le(),
      ge(),
      se(),
      w(),
      ee(),
      A(),
      (M = n()));
  }))();
}
function P(e) {
  let t = (0, F.c)(40),
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
          : (0, I.jsx)(`div`, {
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
          ? (0, I.jsx)(O, { id: `automation-detail-panel-title`, readOnly: !0, value: s })
          : (0, I.jsx)(O, { id: `automation-detail-panel-title`, autoFocus: f, value: s, onChange: l })),
      (t[2] = f),
      (t[3] = s),
      (t[4] = l),
      (t[5] = v))
    : (v = t[5]);
  let y;
  t[6] !== i || t[7] !== v
    ? ((y = (0, I.jsxs)(`div`, { className: `flex flex-col gap-6`, children: [v, i] })),
      (t[6] = i),
      (t[7] = v),
      (t[8] = y))
    : (y = t[8]);
  let b;
  t[9] !== _ || t[10] !== y
    ? ((b = (0, I.jsx)(`div`, { className: _, children: y })), (t[9] = _), (t[10] = y), (t[11] = b))
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
              : (0, I.jsxs)(`div`, {
                  className: `flex h-toolbar min-w-0 shrink-0 items-center gap-2 px-toolbar`,
                  children: [
                    h,
                    (0, I.jsx)(`div`, {
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
        : ((i = (0, I.jsx)(`div`, { className: `min-h-0 flex-1`, children: x })), (t[22] = x), (t[23] = i));
      let a;
      t[24] === p
        ? (a = t[25])
        : ((a =
            p == null
              ? null
              : (0, I.jsx)(`div`, { className: `shrink-0 border-t border-default p-panel`, children: p })),
          (t[24] = p),
          (t[25] = a));
      let o;
      (t[26] !== c || t[27] !== i || t[28] !== a || t[29] !== r
        ? ((o = (0, I.jsxs)(`div`, {
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
      ? ((C = (0, I.jsx)(g, { actions: n, footer: p, leading: h, onKeyDown: c, ...S, children: x })),
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
var F, I;
function L() {
  return (L = e(() => {
    ((F = r()), b(), D(), (I = n()));
  }))();
}
export { N as i, L as n, j as r, P as t };
//# sourceMappingURL=automation-detail-panel-9f15dc42249c.js.map
