import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  FBt as i,
  GOt as a,
  IH as o,
  LNt as s,
  NSt as c,
  PBt as l,
  Pit as u,
  Qst as d,
  TY as f,
  USt as p,
  VSt as m,
  XOt as h,
  Y3 as g,
  Z3 as _,
  ZSt as v,
  ck as y,
  ew as b,
  iCt as ee,
  iw as te,
  jit as ne,
  lk as x,
  lw as re,
  okt as S,
  rk as C,
  sw as w,
  tk as T,
  tkt as E,
  uk as D,
  uw as O,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as k,
  Djr as A,
  FF as j,
  GLn as M,
  LF as N,
  Ojr as ie,
  QF as ae,
  RF as P,
  Xft as F,
  ZLn as I,
  _Mr as L,
  b_ as oe,
  cA as R,
  eI as z,
  eMr as se,
  ept as ce,
  gMr as le,
  hMr as ue,
  iRr as de,
  mMr as fe,
  nMr as pe,
  pMr as B,
  qLn as me,
  sA as he,
  tyr as ge,
  vMr as _e,
  x_ as V,
  xjr as ve,
} from "./app-initial-ad16eaadf81f.js";
import { n as ye, t as be } from "./settings-loading-row-1fcc5b514745.js";
import { n as xe, t as Se } from "./settings-unsaved-changes-dialog-ffd581d4a9b5.js";
import { n as Ce, r as H, t as we } from "./legacy-study-hours-schedule-680e5861bb81.js";
function Te(e) {
  let n = (0, U.c)(33),
    { schedule: r, description: i, disabled: a, maxBlocks: o, createBlock: s, onChange: c } = e,
    l = o === void 0 ? 12 : o,
    u = S(),
    d;
  n[0] !== c || n[1] !== r
    ? ((d = (e) => {
        c(L(r, e), e);
      }),
      (n[0] = c),
      (n[1] = r),
      (n[2] = d))
    : (d = n[2]);
  let f = d,
    p;
  n[3] === f
    ? (p = n[4])
    : ((p = (e, t) => {
        f({ type: `update_block`, blockId: e, update: t });
      }),
      (n[3] = f),
      (n[4] = p));
  let m = p,
    h;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, G.jsx)(E, {
        id: `settings.recurringSchedule.enabled`,
        defaultMessage: `Scheduled`,
        description: `Switch label that enables the recurring Quiet Hours or Study Hours time blocks in settings`,
      })),
      (n[5] = h))
    : (h = n[5]);
  let _;
  n[6] !== f || n[7] !== s || n[8] !== a || n[9] !== r.blocks || n[10] !== r.enabled
    ? ((_ = (e) =>
        (0, G.jsx)(x, {
          ...e,
          checked: r.enabled,
          disabled: a,
          onChange: (e) =>
            f({ type: `set_enabled`, enabled: e, initialBlock: e && r.blocks.length === 0 ? s() : void 0 }),
        })),
      (n[6] = f),
      (n[7] = s),
      (n[8] = a),
      (n[9] = r.blocks),
      (n[10] = r.enabled),
      (n[11] = _))
    : (_ = n[11]);
  let v;
  n[12] !== i || n[13] !== _
    ? ((v = (0, G.jsx)(t, { children: (0, G.jsx)(w, { label: h, description: i, control: _ }) })),
      (n[12] = i),
      (n[13] = _),
      (n[14] = v))
    : (v = n[14]);
  let y;
  n[15] !== f || n[16] !== a || n[17] !== u || n[18] !== r.blocks || n[19] !== r.enabled || n[20] !== m
    ? ((y =
        r.enabled &&
        r.blocks.map((e, n) =>
          (0, G.jsx)(
            `fieldset`,
            {
              className: `min-w-0`,
              disabled: a,
              "aria-label": u.formatMessage(
                {
                  id: `settings.recurringSchedule.block`,
                  defaultMessage: `Schedule block {number}`,
                  description: `Accessible label for one recurring Quiet Hours or Study Hours block; number is its one-based position`,
                },
                { number: n + 1 },
              ),
              children: (0, G.jsxs)(t, {
                children: [
                  [`start_time`, `end_time`].map((t) =>
                    (0, G.jsx)(
                      w,
                      {
                        label:
                          t === `start_time`
                            ? (0, G.jsx)(E, {
                                id: `settings.recurringSchedule.start`,
                                defaultMessage: `Start time`,
                                description: `Label for the local start time of a recurring Quiet Hours or Study Hours block`,
                              })
                            : (0, G.jsx)(E, {
                                id: `settings.recurringSchedule.end`,
                                defaultMessage: `End time`,
                                description: `Label for the local end time of a recurring Quiet Hours or Study Hours block; an earlier end time means the following day`,
                              }),
                        control: (n) =>
                          (0, G.jsx)(I, {
                            ...n,
                            name: `${t}-${e.id}`,
                            type: `time`,
                            value: e[t],
                            disabled: a,
                            onChange: (n) => m(e.id, { [t]: n.currentTarget.value }),
                          }),
                      },
                      t,
                    ),
                  ),
                  (0, G.jsx)(Ee, { days: e.days, disabled: a, onChange: (t) => m(e.id, { days: t }) }),
                  e.end_time < e.start_time &&
                    (0, G.jsx)(w, {
                      label: (0, G.jsx)(E, {
                        id: `settings.recurringSchedule.overnight`,
                        defaultMessage: `Ends the following day. Selected days are the days it starts.`,
                        description: `Explanation for an overnight Quiet Hours or Study Hours block, clarifying that selected weekdays refer to its start`,
                      }),
                      control: null,
                    }),
                  r.blocks.length > 1 &&
                    (0, G.jsx)(w, {
                      label: null,
                      control: (0, G.jsx)(g, {
                        color: `ghost`,
                        disabled: a,
                        type: `button`,
                        onClick: () => f({ type: `remove_block`, blockId: e.id }),
                        children: (0, G.jsx)(E, {
                          id: `settings.recurringSchedule.remove`,
                          defaultMessage: `Delete block`,
                          description: `Button that removes this block from the unsaved recurring Quiet Hours or Study Hours schedule`,
                        }),
                      }),
                    }),
                ],
              }),
            },
            e.id,
          ),
        )),
      (n[15] = f),
      (n[16] = a),
      (n[17] = u),
      (n[18] = r.blocks),
      (n[19] = r.enabled),
      (n[20] = m),
      (n[21] = y))
    : (y = n[21]);
  let b;
  n[22] !== f || n[23] !== s || n[24] !== a || n[25] !== l || n[26] !== r.blocks || n[27] !== r.enabled
    ? ((b =
        r.enabled &&
        (0, G.jsx)(w, {
          label: null,
          control: (0, G.jsx)(g, {
            color: `secondary`,
            disabled: a || r.blocks.length >= l,
            type: `button`,
            onClick: () => f({ type: `add_block`, block: s() }),
            children: (0, G.jsx)(E, {
              id: `settings.recurringSchedule.add`,
              defaultMessage: `Add a new block`,
              description: `Button adding another recurring Quiet Hours or Study Hours block, up to twelve blocks`,
            }),
          }),
        })),
      (n[22] = f),
      (n[23] = s),
      (n[24] = a),
      (n[25] = l),
      (n[26] = r.blocks),
      (n[27] = r.enabled),
      (n[28] = b))
    : (b = n[28]);
  let ee;
  return (
    n[29] !== v || n[30] !== y || n[31] !== b
      ? ((ee = (0, G.jsxs)(he.Content, { children: [v, y, b] })),
        (n[29] = v),
        (n[30] = y),
        (n[31] = b),
        (n[32] = ee))
      : (ee = n[32]),
    ee
  );
}
function Ee(e) {
  let t = (0, U.c)(15),
    { days: n, disabled: r, onChange: i } = e,
    o = S(),
    s = (0, W.useId)(),
    [c, l] = (0, W.useState)(!1),
    [u, d] = (0, W.useState)(n),
    f;
  if (t[0] !== n || t[1] !== o) {
    if (n.length === ue.length)
      f = (0, G.jsx)(E, {
        id: `settings.recurringSchedule.days.everyDay`,
        defaultMessage: `Every day`,
        description: `Summary beside Days in recurring schedule settings when all seven weekdays are selected`,
      });
    else if (n.length === 5 && ue.slice(0, 5).every((e) => n.includes(e)))
      f = (0, G.jsx)(E, {
        id: `settings.recurringSchedule.days.weekDays`,
        defaultMessage: `Week days`,
        description: `Summary beside Days in recurring schedule settings when Monday through Friday are selected and Saturday and Sunday are not`,
      });
    else {
      let e;
      (t[3] === o
        ? (e = t[4])
        : ((e = (e) =>
            o.formatDate(new Date(Date.UTC(2026, 0, 5 + ue.indexOf(e))), {
              weekday: `short`,
              timeZone: `UTC`,
            })),
          (t[3] = o),
          (t[4] = e)),
        (f = (0, G.jsx)(a, { value: n.map(e) })));
    }
    ((t[0] = n), (t[1] = o), (t[2] = f));
  } else f = t[2];
  let p;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, G.jsx)(E, {
        id: `settings.recurringSchedule.days`,
        defaultMessage: `Days`,
        description: `Label for the weekdays on which this recurring Quiet Hours or Study Hours block starts`,
      })),
      (t[5] = p))
    : (p = t[5]);
  let m;
  return (
    t[6] !== n ||
    t[7] !== r ||
    t[8] !== o ||
    t[9] !== i ||
    t[10] !== c ||
    t[11] !== u ||
    t[12] !== f ||
    t[13] !== s
      ? ((m = (0, G.jsx)(w, {
          variant: `nested`,
          label: p,
          control: (e) =>
            (0, G.jsxs)(T, {
              align: `end`,
              contentWidth: `menuWide`,
              disabled: r,
              open: c,
              onOpenChange: (e) => {
                (e && d(n), l(e));
              },
              triggerButton: (0, G.jsx)(j, {
                ...e,
                "aria-describedby": s,
                children: (0, G.jsx)(`span`, { id: s, className: `truncate`, children: f }),
              }),
              children: [
                ue.map((e, t) =>
                  (0, G.jsx)(
                    C.CheckboxItem,
                    {
                      checked: u.includes(e),
                      disabled: r,
                      onCheckedChange: (t) =>
                        d((n) => ue.filter((r) => (r === e ? t === !0 : n.includes(r)))),
                      children: o.formatDate(new Date(Date.UTC(2026, 0, 5 + t)), {
                        weekday: `long`,
                        timeZone: `UTC`,
                      }),
                    },
                    e,
                  ),
                ),
                (0, G.jsx)(C.Separator, {}),
                (0, G.jsx)(C.Item, {
                  onSelect: () => l(!1),
                  children: (0, G.jsx)(E, {
                    id: `common.cancel`,
                    defaultMessage: `Cancel`,
                    description: `Button to dismiss without saving changes`,
                  }),
                }),
                (0, G.jsx)(C.Item, {
                  disabled: u.length === 0,
                  onSelect: () => {
                    (u.length !== n.length || u.some((e) => !n.includes(e))) && i(u);
                  },
                  children: (0, G.jsx)(E, {
                    id: `settings.recurringSchedule.days.done`,
                    defaultMessage: `Done`,
                    description: `Menu action applying selected weekdays to the unsaved schedule block and closing the weekday selector`,
                  }),
                }),
              ],
            }),
        })),
        (t[6] = n),
        (t[7] = r),
        (t[8] = o),
        (t[9] = i),
        (t[10] = c),
        (t[11] = u),
        (t[12] = f),
        (t[13] = s),
        (t[14] = m))
      : (m = t[14]),
    m
  );
}
var U, W, G;
function De() {
  return (De = e(() => {
    ((U = l()), (W = i()), h(), _(), y(), k(), D(), R(), O(), P(), b(), le(), (G = s()));
  }))();
}
function Oe() {
  let e = (0, K.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, q.jsx)(E, {
          id: `settings.chatGpt.timeManagement.studyHours.title`,
          defaultMessage: `Study hours`,
          description: `Title and summary-row label for the Study Hours schedule editor in ChatGPT Safety and wellbeing settings. Short label for scheduled learning-oriented responses that ask questions and offer hints.`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ke() {
  let e = (0, K.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, q.jsx)(E, {
          id: `settings.chatGpt.timeManagement.studyHours.studyModeDescription`,
          defaultMessage: `Have ChatGPT ask questions and give hints before answering questions. <link>Learn more</link>`,
          description: `Helper text below Study Hours in the ChatGPT Safety and wellbeing overview and schedule editor. Explains the learning-oriented response behavior. The <link> placeholder wraps only the words Learn more and opens the Study Mode Help Center article.`,
          values: { link: Ae },
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ae(e) {
  return (0, q.jsx)(M, {
    className: `relative z-10`,
    appearance: `secondary`,
    href: `https://help.openai.com/articles/11780217`,
    initiator: `open_in_browser_bridge`,
    children: e,
  });
}
var K, q;
function J() {
  return (J = e(() => {
    ((K = l()), h(), me(), (q = s()));
  }))();
}
function je(e, t, n, r) {
  let i = r?.study_hours_schedule === !0 || r?.default_to_study_mode === !0;
  return t && e == null
    ? { status: `unsupported`, managedByParent: i }
    : { status: `loaded`, managedByParent: i, schedule: n ? Ce() : (e ?? { enabled: !1, blocks: [] }) };
}
function Y() {
  return (Y = e(() => {
    H();
  }))();
}
function Me(e) {
  let t = (0, Le.c)(3),
    { initialSchedule: n, onClose: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, Z.jsx)(Pe, { kind: `quiet`, initialSchedule: n, onClose: r })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function Ne(e) {
  let t = (0, Le.c)(4),
    { initialSchedule: n, initialLegacyStudyMode: r, onClose: i } = e,
    a;
  return (
    t[0] !== r || t[1] !== n || t[2] !== i
      ? ((a = (0, Z.jsx)(Pe, { kind: `study`, initialSchedule: n, initialLegacyStudyMode: r, onClose: i })),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function Pe(e) {
  let t = (0, Le.c)(88),
    { kind: r, initialSchedule: i, initialLegacyStudyMode: a, onClose: o } = e,
    s = a !== void 0 && a,
    c = n(d),
    l = (0, X.useId)(),
    { data: u } = ee(se),
    [f] = (0, X.useState)(i),
    [p, m] = (0, X.useState)(i),
    [h, _] = (0, X.useState)(s),
    [v, y] = (0, X.useState)(!1),
    [b, te] = (0, X.useState)(!1),
    [ne, x] = (0, X.useState)(null),
    [re, S] = (0, X.useState)(!1),
    [C, w] = (0, X.useState)(!1),
    T = (0, X.useRef)(null),
    D;
  t[0] !== u?.amphoraLocks ||
  t[1] !== u?.defaultToStudyMode ||
  t[2] !== u?.hasRecurringStudyHours ||
  t[3] !== u?.quietHours ||
  t[4] !== u?.studyHoursSchedule ||
  t[5] !== r
    ? ((D =
        r === `quiet`
          ? u?.quietHours
          : je(u?.studyHoursSchedule, u?.hasRecurringStudyHours, u?.defaultToStudyMode, u?.amphoraLocks)),
      (t[0] = u?.amphoraLocks),
      (t[1] = u?.defaultToStudyMode),
      (t[2] = u?.hasRecurringStudyHours),
      (t[3] = u?.quietHours),
      (t[4] = u?.studyHoursSchedule),
      (t[5] = r),
      (t[6] = D))
    : (D = t[6]);
  let O = D,
    k;
  t[7] !== O || t[8] !== r
    ? ((k =
        O?.status === `unsupported` || (r === `quiet` && O?.status === `loaded` && fe(O.schedule) != null)),
      (t[7] = O),
      (t[8] = r),
      (t[9] = k))
    : (k = t[9]);
  let A = k,
    j = u == null || O?.managedByParent === !0,
    M;
  t[10] !== p || t[11] !== s || t[12] !== h || t[13] !== f || t[14] !== b
    ? ((M = b || h !== s || JSON.stringify(p) !== JSON.stringify(f)),
      (t[10] = p),
      (t[11] = s),
      (t[12] = h),
      (t[13] = f),
      (t[14] = b),
      (t[15] = M))
    : (M = t[15]);
  let N = M,
    ie;
  t[16] !== p || t[17] !== r
    ? ((ie = r === `quiet` ? fe(p) : _e(p)), (t[16] = p), (t[17] = r), (t[18] = ie))
    : (ie = t[18]);
  let P = ie,
    F;
  t[19] !== p || t[20] !== h ? ((F = h ? Ce() : p), (t[19] = p), (t[20] = h), (t[21] = F)) : (F = t[21]);
  let I = F;
  ce(`time-management.${r}-hours`, N || v);
  let L, R;
  (t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = () => () => {
        T.current?.abort();
      }),
      (R = []),
      (t[22] = L),
      (t[23] = R))
    : ((L = t[22]), (R = t[23])),
    (0, X.useEffect)(L, R));
  let z = ne;
  A
    ? (z = `unsupported`)
    : j
      ? (z = `locked`)
      : ne == null &&
        re &&
        P != null &&
        (z = P === `insufficient_break` ? `break` : P === `too_many_blocks` ? `limit` : `invalid`);
  let le;
  t[24] !== N || t[25] !== p || t[26] !== r || t[27] !== o || t[28] !== c || t[29] !== A || t[30] !== P
    ? ((le = async () => {
        if ((S(!0), T.current != null || !N || P != null || A)) return;
        let e = c.get(oe),
          t = c.query.getData(se),
          n =
            r === `quiet`
              ? t?.quietHours
              : je(t?.studyHoursSchedule, t?.hasRecurringStudyHours, t?.defaultToStudyMode, t?.amphoraLocks);
        if (
          e.status !== `allowed` ||
          t?.eligibleNowOrBefore !== !0 ||
          n?.managedByParent ||
          n?.status === `unsupported`
        ) {
          x(n?.managedByParent ? `locked` : `denied`);
          return;
        }
        let i = new AbortController();
        T.current = i;
        let a = c.query.snapshot(se),
          { userId: s, accountId: l } = e,
          u = function () {
            let e = c.get(oe);
            return e.status === `allowed` && e.userId === s && e.accountId === l;
          },
          d = c.watch((e) => {
            let t = e.get(oe);
            (t.status !== `allowed` || t.userId !== s || t.accountId !== l) && i.abort();
          });
        (y(!0), x(null));
        let f = !1;
        (a.invalidate({ refetchType: `none` }),
          await de
            .safePatch(`/settings/account_user_setting`, {
              additionalHeaders: { "ChatGPT-Account-ID": l },
              parameters: {
                query: {
                  feature: r === `quiet` ? `quiet_hours_schedule` : `study_hours_schedule`,
                  value: JSON.stringify(p),
                },
              },
              signal: i.signal,
            })
            .then(Fe, Ie)
            .then(async (e) => {
              u() &&
                (await a.cancel(),
                u() &&
                  (await a.invalidate({ refetchType: `all` }),
                  !i.signal.aborted &&
                    (e == null && !c.get(se).isError ? ((f = !0), o()) : (te(!0), x(e ?? `save`)))));
            })
            .finally(() => {
              (d(), f || ((T.current = null), y(!1)));
            }));
      }),
      (t[24] = N),
      (t[25] = p),
      (t[26] = r),
      (t[27] = o),
      (t[28] = c),
      (t[29] = A),
      (t[30] = P),
      (t[31] = le))
    : (le = t[31]);
  let pe = le,
    B;
  t[32] === r
    ? (B = t[33])
    : ((B =
        r === `quiet`
          ? (0, Z.jsx)(E, {
              id: `settings.chatGpt.timeManagement.quietHours.title`,
              defaultMessage: `Quiet hours`,
              description: `Title of the settings section showing scheduled times when ChatGPT is unavailable`,
            })
          : (0, Z.jsx)(Oe, {})),
      (t[32] = r),
      (t[33] = B));
  let me;
  t[34] !== N || t[35] !== o
    ? ((me = () => {
        N ? w(!0) : o();
      }),
      (t[34] = N),
      (t[35] = o),
      (t[36] = me))
    : (me = t[36]);
  let ge;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (0, Z.jsx)(E, {
        id: `settings.chatGpt.quietHours.back`,
        defaultMessage: `Back`,
        description: `Button in the Quiet Hours or Study Hours schedule editor that returns to Time management after confirming any unsaved changes can be discarded`,
      })),
      (t[37] = ge))
    : (ge = t[37]);
  let V;
  t[38] !== v || t[39] !== me
    ? ((V = (0, Z.jsx)(g, {
        color: `ghost`,
        size: `toolbar`,
        disabled: v,
        type: `button`,
        onClick: me,
        children: ge,
      })),
      (t[38] = v),
      (t[39] = me),
      (t[40] = V))
    : (V = t[40]);
  let ve;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, Z.jsx)(E, {
        id: `common.cancel`,
        defaultMessage: `Cancel`,
        description: `Button to dismiss without saving changes`,
      })),
      (t[41] = ve))
    : (ve = t[41]);
  let ye;
  t[42] !== o || t[43] !== v
    ? ((ye = (0, Z.jsx)(g, { color: `secondary`, disabled: v, type: `button`, onClick: o, children: ve })),
      (t[42] = o),
      (t[43] = v),
      (t[44] = ye))
    : (ye = t[44]);
  let be = v || j || A || !N,
    xe;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (0, Z.jsx)(E, {
        id: `common.save`,
        defaultMessage: `Save`,
        description: `Button to save changes`,
      })),
      (t[45] = xe))
    : (xe = t[45]);
  let H;
  t[46] !== l || t[47] !== v || t[48] !== be
    ? ((H = (0, Z.jsx)(g, {
        color: `primary`,
        disabled: be,
        loading: v,
        form: l,
        type: `submit`,
        children: xe,
      })),
      (t[46] = l),
      (t[47] = v),
      (t[48] = be),
      (t[49] = H))
    : (H = t[49]);
  let Ee;
  t[50] !== ye || t[51] !== H
    ? ((Ee = (0, Z.jsxs)(Z.Fragment, { children: [ye, H] })), (t[50] = ye), (t[51] = H), (t[52] = Ee))
    : (Ee = t[52]);
  let U;
  t[53] === pe
    ? (U = t[54])
    : ((U = (e) => {
        (e.preventDefault(), pe());
      }),
      (t[53] = pe),
      (t[54] = U));
  let W;
  t[55] === r
    ? (W = t[56])
    : ((W =
        r === `quiet`
          ? (0, Z.jsx)(E, {
              id: `settings.chatGpt.quietHours.scheduleDescription`,
              defaultMessage: `Schedule hours when ChatGPT can’t be used`,
              description: `Helper text for the Scheduled switch in Quiet hours settings, explaining that the selected times make ChatGPT unavailable`,
            })
          : (0, Z.jsx)(ke, {})),
      (t[55] = r),
      (t[56] = W));
  let G = v || j || A,
    De = h ? 12 - Math.max(p.blocks.length - 1, 0) : void 0,
    Ae;
  t[57] !== I.blocks[0]?.days || t[58] !== r
    ? ((Ae = () => ({
        id: crypto.randomUUID(),
        days: I.blocks[0]?.days ?? ue.slice(0, 5),
        start_time: r === `quiet` ? `22:00` : `16:00`,
        end_time: r === `quiet` ? `07:00` : `20:00`,
      })),
      (t[57] = I.blocks[0]?.days),
      (t[58] = r),
      (t[59] = Ae))
    : (Ae = t[59]);
  let K;
  t[60] !== p || t[61] !== h
    ? ((K = (e, t) => {
        let n = h ? we(p, t) : e;
        (m(n), _(!1), h && S(n.blocks.length > 12), x(null));
      }),
      (t[60] = p),
      (t[61] = h),
      (t[62] = K))
    : (K = t[62]);
  let q;
  t[63] !== I || t[64] !== W || t[65] !== G || t[66] !== De || t[67] !== Ae || t[68] !== K
    ? ((q = (0, Z.jsx)(Te, {
        schedule: I,
        description: W,
        disabled: G,
        maxBlocks: De,
        createBlock: Ae,
        onChange: K,
      })),
      (t[63] = I),
      (t[64] = W),
      (t[65] = G),
      (t[66] = De),
      (t[67] = Ae),
      (t[68] = K),
      (t[69] = q))
    : (q = t[69]);
  let J;
  t[70] === z
    ? (J = t[71])
    : ((J =
        z != null &&
        (0, Z.jsx)(he.Footer, {
          children: (0, Z.jsxs)(`span`, {
            role: `alert`,
            children: [
              z === `unsupported` &&
                (0, Z.jsx)(E, {
                  id: `settings.chatGpt.quietHours.unsupported`,
                  defaultMessage: `This schedule can’t be edited here. Your existing settings have been preserved.`,
                  description: `Warning when the saved Quiet Hours or Study Hours schedule is malformed or unsupported; no changes will be written`,
                }),
              z === `locked` &&
                (0, Z.jsx)(E, {
                  id: `settings.chatGpt.quietHours.managedByParent`,
                  defaultMessage: `This setting is managed by your parent`,
                  description: `Notice when a parent has locked the Quiet Hours or Study Hours schedule and its controls cannot be changed`,
                }),
              z === `denied` &&
                (0, Z.jsx)(E, {
                  id: `settings.chatGpt.quietHours.denied`,
                  defaultMessage: `You can’t change this schedule right now. Close the editor to review the current setting.`,
                  description: `Error when the server denies a Quiet Hours or Study Hours update or the account no longer permits it; no parent ownership is inferred from a generic denial`,
                }),
              z === `save` &&
                (0, Z.jsx)(E, {
                  id: `settings.chatGpt.quietHours.saveError`,
                  defaultMessage: `Couldn’t confirm the updated schedule. Try again.`,
                  description: `Error after saving or refreshing Quiet Hours or Study Hours fails; unsaved edits remain available for another save attempt`,
                }),
              z === `break` &&
                (0, Z.jsx)(E, {
                  id: `settings.chatGpt.quietHours.breakRequired`,
                  defaultMessage: `Leave at least five minutes outside quiet hours each day`,
                  description: `Validation error when combined recurring Quiet Hours blocks cover nearly an entire local day`,
                }),
              z === `invalid` &&
                (0, Z.jsx)(E, {
                  id: `settings.chatGpt.quietHours.invalidSchedule`,
                  defaultMessage: `Select at least one day per block and different start and end times`,
                  description: `Validation guidance when the Quiet Hours or Study Hours editor contains missing weekdays or invalid or equal times`,
                }),
              z === `limit` &&
                (0, Z.jsx)(E, {
                  id: `settings.recurringSchedule.blockLimit`,
                  defaultMessage: `Use no more than twelve blocks`,
                  description: `Validation error when a recurring schedule exceeds twelve blocks, including a converted legacy Study Hours block`,
                }),
            ],
          }),
        })),
      (t[70] = z),
      (t[71] = J));
  let Y;
  t[72] !== l || t[73] !== U || t[74] !== q || t[75] !== J
    ? ((Y = (0, Z.jsxs)(`form`, { id: l, className: `flex flex-col gap-3`, onSubmit: U, children: [q, J] })),
      (t[72] = l),
      (t[73] = U),
      (t[74] = q),
      (t[75] = J),
      (t[76] = Y))
    : (Y = t[76]);
  let Me;
  t[77] !== B || t[78] !== V || t[79] !== Ee || t[80] !== Y
    ? ((Me = (0, Z.jsx)(ae, { title: B, backSlot: V, footer: Ee, children: Y })),
      (t[77] = B),
      (t[78] = V),
      (t[79] = Ee),
      (t[80] = Y),
      (t[81] = Me))
    : (Me = t[81]);
  let Ne = C ? o : null,
    Pe;
  t[82] === Symbol.for(`react.memo_cache_sentinel`) ? ((Pe = () => w(!1)), (t[82] = Pe)) : (Pe = t[82]);
  let Q;
  t[83] === Ne
    ? (Q = t[84])
    : ((Q = (0, Z.jsx)(Se, { pendingNavigation: Ne, onClearPendingNavigation: Pe })),
      (t[83] = Ne),
      (t[84] = Q));
  let Re;
  return (
    t[85] !== Me || t[86] !== Q
      ? ((Re = (0, Z.jsxs)(Z.Fragment, { children: [Me, Q] })), (t[85] = Me), (t[86] = Q), (t[87] = Re))
      : (Re = t[87]),
    Re
  );
}
function Fe() {
  return null;
}
function Ie(e) {
  return e instanceof ne && e.status === 403
    ? e.errorCode === `feature-locked-by-owner`
      ? `locked`
      : `denied`
    : `save`;
}
var Le, X, Z;
function Q() {
  return (Q = e(() => {
    ((Le = l()),
      v(),
      (X = i()),
      h(),
      ge(),
      pe(),
      _(),
      r(),
      z(),
      R(),
      xe(),
      F(),
      u(),
      V(),
      H(),
      B(),
      le(),
      De(),
      J(),
      Y(),
      (Z = s()));
  }))();
}
function Re() {
  let e = (0, He.c)(8),
    t = n(d),
    r = ee(oe);
  if (r.status === `denied`) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, $.jsx)(Ve, {})), (e[0] = t)) : (t = e[0]),
      t
    );
  }
  if (r.status !== `allowed`) {
    let n = r.status === `error`,
      i;
    e[1] === t.queryClient
      ? (i = e[2])
      : ((i = () => {
          t.queryClient.invalidateQueries({ queryKey: [`accounts`, `check`] });
        }),
        (e[1] = t.queryClient),
        (e[2] = i));
    let a;
    return (
      e[3] !== n || e[4] !== i
        ? ((a = (0, $.jsx)(Be, { isError: n, onRetry: i })), (e[3] = n), (e[4] = i), (e[5] = a))
        : (a = e[5]),
      a
    );
  }
  let i = `${r.userId}:${r.accountId}`,
    a;
  return (e[6] === i ? (a = e[7]) : ((a = (0, $.jsx)(ze, {}, i)), (e[6] = i), (e[7] = a)), a);
}
function ze() {
  let e = (0, He.c)(89),
    n = m(),
    r = p(),
    i = (0, Ue.useId)(),
    a = new URLSearchParams(n.search),
    { data: s, isError: c, isFetching: l, refetch: u } = ee(se),
    d = A(`67629032`),
    f = ie(),
    h = a.get(`view`) === `quiet-hours`,
    _ = a.get(`view`) === `study-hours`,
    v = h || _ || a.get(`view`) === `time-management`;
  if ((c && !h && !_) || s == null || f) {
    let t;
    e[0] === u ? (t = e[1]) : ((t = () => void u()), (e[0] = u), (e[1] = t));
    let n;
    return (
      e[2] !== c || e[3] !== l || e[4] !== t
        ? ((n = (0, $.jsx)(Be, { isError: c, isFetching: l, onRetry: t })),
          (e[2] = c),
          (e[3] = l),
          (e[4] = t),
          (e[5] = n))
        : (n = e[5]),
      n
    );
  }
  if (s.eligibleNowOrBefore !== !0 || !d.get(`enable_chatgpt_time_management_settings`, !1)) {
    let t;
    return (
      e[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, $.jsx)(Ve, {})), (e[6] = t)) : (t = e[6]),
      t
    );
  }
  let y;
  e[7] !== s.amphoraLocks ||
  e[8] !== s.defaultToStudyMode ||
  e[9] !== s.hasRecurringStudyHours ||
  e[10] !== s.studyHoursSchedule
    ? ((y = je(s.studyHoursSchedule, s.hasRecurringStudyHours, s.defaultToStudyMode, s.amphoraLocks)),
      (e[7] = s.amphoraLocks),
      (e[8] = s.defaultToStudyMode),
      (e[9] = s.hasRecurringStudyHours),
      (e[10] = s.studyHoursSchedule),
      (e[11] = y))
    : (y = e[11]);
  let b = y,
    ne;
  e[12] !== s.quietHours.schedule || e[13] !== s.quietHours.status
    ? ((ne =
        s.quietHours.status === `unsupported` ||
        (s.quietHours.status === `loaded` && fe(s.quietHours.schedule) != null)),
      (e[12] = s.quietHours.schedule),
      (e[13] = s.quietHours.status),
      (e[14] = ne))
    : (ne = e[14]);
  let x = ne,
    S = (e, t) => {
      let i = new URLSearchParams(a);
      (e == null ? i.delete(`view`) : i.set(`view`, e),
        r({ pathname: n.pathname, search: i.toString(), hash: n.hash }, { ...t, state: n.state }));
    };
  if (h && !x) {
    let t;
    e[15] !== s.quietHours.schedule || e[16] !== s.quietHours.status
      ? ((t = s.quietHours.status === `loaded` ? s.quietHours.schedule : { enabled: !1, blocks: [] }),
        (e[15] = s.quietHours.schedule),
        (e[16] = s.quietHours.status),
        (e[17] = t))
      : (t = e[17]);
    let n;
    e[18] === S ? (n = e[19]) : ((n = () => S(`time-management`, { replace: !0 })), (e[18] = S), (e[19] = n));
    let r;
    return (
      e[20] !== t || e[21] !== n
        ? ((r = (0, $.jsx)(Me, { initialSchedule: t, onClose: n })), (e[20] = t), (e[21] = n), (e[22] = r))
        : (r = e[22]),
      r
    );
  }
  if (_ && b.status === `loaded`) {
    let t;
    e[23] === s.studyHoursSchedule
      ? (t = e[24])
      : ((t = s.studyHoursSchedule ?? { enabled: !1, blocks: [] }),
        (e[23] = s.studyHoursSchedule),
        (e[24] = t));
    let n = s.defaultToStudyMode === !0,
      r;
    e[25] === S ? (r = e[26]) : ((r = () => S(`time-management`, { replace: !0 })), (e[25] = S), (e[26] = r));
    let i;
    return (
      e[27] !== t || e[28] !== n || e[29] !== r
        ? ((i = (0, $.jsx)(Ne, { initialSchedule: t, initialLegacyStudyMode: n, onClose: r })),
          (e[27] = t),
          (e[28] = n),
          (e[29] = r),
          (e[30] = i))
        : (i = e[30]),
      i
    );
  }
  let C;
  e[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(N, { slug: `time-management` })), (e[31] = C))
    : (C = e[31]);
  let T;
  e[32] === S ? (T = e[33]) : ((T = () => S(`time-management`)), (e[32] = S), (e[33] = T));
  let D;
  e[34] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = (0, $.jsx)(o, {})), (e[34] = D)) : (D = e[34]);
  let O;
  e[35] === T
    ? (O = e[36])
    : ((O = (0, $.jsx)(te, { edgeRounding: `surface`, label: C, onClick: T, trailing: D })),
      (e[35] = T),
      (e[36] = O));
  let k = O;
  if (v) {
    let t;
    e[37] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(E, {
          id: `settings.chatGpt.timeManagement.quietHours.title`,
          defaultMessage: `Quiet hours`,
          description: `Title of the settings section showing scheduled times when ChatGPT is unavailable`,
        })),
        (e[37] = t))
      : (t = e[37]);
    let n;
    e[38] === s.quietHours.managedByParent
      ? (n = e[39])
      : ((n = s.quietHours.managedByParent
          ? (0, $.jsx)(`span`, {
              className: `sr-only`,
              children: (0, $.jsx)(E, {
                id: `settings.chatGpt.timeManagement.managedByParent`,
                defaultMessage: `Managed by your parent`,
                description: `Explanation that a parent controls the teen's quiet hours schedule`,
              }),
            })
          : null),
        (e[38] = s.quietHours.managedByParent),
        (e[39] = n));
    let r;
    e[40] === n
      ? (r = e[41])
      : ((r = (0, $.jsxs)($.Fragment, { children: [t, n] })), (e[40] = n), (e[41] = r));
    let a;
    e[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, $.jsx)(E, {
          id: `settings.chatGpt.timeManagement.quietHours.description`,
          defaultMessage: `Schedule hours when ChatGPT can’t be used`,
          description: `Description of the Quiet hours settings row, which opens its schedule editor`,
        })),
        (e[42] = a))
      : (a = e[42]);
    let c;
    e[43] === S ? (c = e[44]) : ((c = () => S(`quiet-hours`)), (e[43] = S), (e[44] = c));
    let l;
    e[45] !== s.quietHours.schedule || e[46] !== s.quietHours.status || e[47] !== x
      ? ((l = (0, $.jsx)(re, {
          children: x
            ? (0, $.jsx)(E, {
                id: `settings.chatGpt.timeManagement.unsupportedStatus`,
                defaultMessage: `Unsupported schedule`,
                description: `Quiet hours status when its saved format is unsupported; this does not mean the schedule is disabled`,
              })
            : (0, $.jsx)(E, {
                id: `settings.chatGpt.timeManagement.scheduleStatus`,
                defaultMessage: `{enabled, select, true {Scheduled} other {Not scheduled}}`,
                description: `Quiet hours status indicating whether a schedule is enabled, rather than whether it is currently active`,
                values: {
                  enabled: String(s.quietHours.status === `loaded` && s.quietHours.schedule.enabled),
                },
              }),
        })),
        (e[45] = s.quietHours.schedule),
        (e[46] = s.quietHours.status),
        (e[47] = x),
        (e[48] = l))
      : (l = e[48]);
    let u;
    e[49] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = (0, $.jsx)(o, {})), (e[49] = u)) : (u = e[49]);
    let d;
    e[50] === l
      ? (d = e[51])
      : ((d = (0, $.jsxs)($.Fragment, { children: [l, u] })), (e[50] = l), (e[51] = d));
    let f;
    e[52] !== c || e[53] !== d || e[54] !== r
      ? ((f = (0, $.jsx)(te, { edgeRounding: `surface`, label: r, description: a, onClick: c, trailing: d })),
        (e[52] = c),
        (e[53] = d),
        (e[54] = r),
        (e[55] = f))
      : (f = e[55]);
    let p;
    e[56] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = (0, $.jsx)(Oe, {})), (e[56] = p)) : (p = e[56]);
    let m;
    e[57] === b.managedByParent
      ? (m = e[58])
      : ((m =
          b.managedByParent &&
          (0, $.jsx)(`span`, {
            className: `sr-only`,
            children: (0, $.jsx)(E, {
              id: `settings.chatGpt.timeManagement.studyManagedByParent`,
              defaultMessage: `Managed by your parent`,
              description: `Explanation that a parent manages the teen's schedule`,
            }),
          })),
        (e[57] = b.managedByParent),
        (e[58] = m));
    let h;
    e[59] === m
      ? (h = e[60])
      : ((h = (0, $.jsxs)($.Fragment, { children: [p, m] })), (e[59] = m), (e[60] = h));
    let g;
    e[61] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = (0, $.jsx)(ke, {})), (e[61] = g)) : (g = e[61]);
    let _;
    e[62] !== S || e[63] !== b.schedule || e[64] !== b.status || e[65] !== i
      ? ((_ = (e) =>
          (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(`button`, {
                ...e,
                "aria-describedby": [e[`aria-describedby`], i].filter(Boolean).join(` `),
                className: `absolute inset-0 cursor-interaction focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring`,
                onClick: () => S(`study-hours`),
                type: `button`,
              }),
              (0, $.jsxs)(`span`, {
                className: `flex items-center gap-2`,
                id: i,
                children: [
                  (0, $.jsx)(re, {
                    children:
                      b.status === `unsupported`
                        ? (0, $.jsx)(E, {
                            id: `settings.chatGpt.timeManagement.studyUnsupportedStatus`,
                            defaultMessage: `Unsupported schedule`,
                            description: `Status when a saved schedule cannot be edited`,
                          })
                        : (0, $.jsx)(E, {
                            id: `settings.chatGpt.timeManagement.studyScheduleStatus`,
                            defaultMessage: `{enabled, select, true {Scheduled} other {Not scheduled}}`,
                            description: `Status indicating whether the recurring schedule is enabled`,
                            values: { enabled: String(b.schedule.enabled) },
                          }),
                  }),
                  (0, $.jsx)(o, {}),
                ],
              }),
            ],
          })),
        (e[62] = S),
        (e[63] = b.schedule),
        (e[64] = b.status),
        (e[65] = i),
        (e[66] = _))
      : (_ = e[66]);
    let v;
    e[67] !== h || e[68] !== _
      ? ((v = (0, $.jsx)(w, {
          className: `relative focus-within:bg-primary-ghost-hover hover:bg-primary-ghost-hover`,
          label: h,
          description: g,
          control: _,
        })),
        (e[67] = h),
        (e[68] = _),
        (e[69] = v))
      : (v = e[69]);
    let y;
    (e[70] !== f || e[71] !== v
      ? ((y = (0, $.jsxs)($.Fragment, { children: [f, v] })), (e[70] = f), (e[71] = v), (e[72] = y))
      : (y = e[72]),
      (k = y));
  }
  if (h || _) {
    let t;
    (e[73] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(w, {
          label: (0, $.jsx)(E, {
            id: `settings.chatGpt.timeManagement.scheduleUnsupported`,
            defaultMessage: `This schedule can’t be edited here. Your existing settings have been preserved.`,
            description: `Message when a saved Quiet Hours or Study Hours schedule uses a format this editor cannot support; the stored schedule remains unchanged`,
          }),
          control: null,
        })),
        (e[73] = t))
      : (t = e[73]),
      (k = t));
  }
  let j = v ? `time-management` : `safety`,
    M;
  e[74] === j ? (M = e[75]) : ((M = (0, $.jsx)(N, { slug: j })), (e[74] = j), (e[75] = M));
  let P = M;
  if (h) {
    let t;
    (e[76] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(E, {
          id: `settings.chatGpt.timeManagement.quietHours.title`,
          defaultMessage: `Quiet hours`,
          description: `Title of the settings section showing scheduled times when ChatGPT is unavailable`,
        })),
        (e[76] = t))
      : (t = e[76]),
      (P = t));
  } else if (_) {
    let t;
    (e[77] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(Oe, {})), (e[77] = t))
      : (t = e[77]),
      (P = t));
  }
  let F;
  e[78] !== h || e[79] !== _ || e[80] !== v || e[81] !== S
    ? ((F = v
        ? (0, $.jsx)(g, {
            color: `ghost`,
            size: `toolbar`,
            onClick: () => S(h || _ ? `time-management` : null, { replace: !0 }),
            children: (0, $.jsx)(E, {
              id: `settings.chatGpt.timeManagement.back`,
              defaultMessage: `Back`,
              description: `Returns to the previous Safety and wellbeing settings page`,
            }),
          })
        : void 0),
      (e[78] = h),
      (e[79] = _),
      (e[80] = v),
      (e[81] = S),
      (e[82] = F))
    : (F = e[82]);
  let I;
  e[83] === k
    ? (I = e[84])
    : ((I = (0, $.jsx)(he, {
        children: (0, $.jsx)(he.Content, { children: (0, $.jsx)(t, { children: k }) }),
      })),
      (e[83] = k),
      (e[84] = I));
  let L;
  return (
    e[85] !== F || e[86] !== I || e[87] !== P
      ? ((L = (0, $.jsx)(ae, { title: P, backSlot: F, children: I })),
        (e[85] = F),
        (e[86] = I),
        (e[87] = P),
        (e[88] = L))
      : (L = e[88]),
    L
  );
}
function Be(e) {
  let n = (0, He.c)(5),
    { isError: r, isFetching: i, onRetry: a } = e,
    o = i !== void 0 && i,
    s;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(N, { slug: `safety` })), (n[0] = s))
    : (s = n[0]);
  let c;
  return (
    n[1] !== r || n[2] !== o || n[3] !== a
      ? ((c = (0, $.jsx)(ae, {
          title: s,
          children: (0, $.jsx)(t, {
            children: r
              ? (0, $.jsx)(w, {
                  label: (0, $.jsx)(`span`, {
                    role: `alert`,
                    children: (0, $.jsx)(E, {
                      id: `settings.chatGpt.timeManagement.schedule.loadError`,
                      defaultMessage: `Couldn’t load schedule settings`,
                      description: `Error shown in ChatGPT Safety and wellbeing settings when Quiet Hours and Study Hours cannot be loaded, with a nearby Retry button`,
                    }),
                  }),
                  control: (0, $.jsx)(g, {
                    color: `secondary`,
                    loading: o,
                    size: `toolbar`,
                    onClick: a,
                    type: `button`,
                    children: (0, $.jsx)(E, {
                      id: `common.retry`,
                      defaultMessage: `Retry`,
                      description: `Button to retry an operation after an error`,
                    }),
                  }),
                })
              : (0, $.jsx)(be, {
                  children: (0, $.jsx)(E, {
                    id: `settings.chatGpt.timeManagement.schedule.loading`,
                    defaultMessage: `Loading schedule settings…`,
                    description: `Status shown while ChatGPT Safety and wellbeing settings retrieve the user's saved Quiet Hours and Study Hours schedules`,
                  }),
                }),
          }),
        })),
        (n[1] = r),
        (n[2] = o),
        (n[3] = a),
        (n[4] = c))
      : (c = n[4]),
    c
  );
}
function Ve() {
  let e = (0, He.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(ae, {
          children: (0, $.jsx)(E, {
            id: `settings.chatGpt.timeManagement.ineligible`,
            defaultMessage: `Time management isn’t available for this account`,
            description: `Message when a user opens time management settings for an account that is not eligible for that feature`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var He, Ue, $;
function We() {
  return (We = e(() => {
    ((He = l()),
      v(),
      (Ue = i()),
      h(),
      c(),
      pe(),
      _(),
      f(),
      r(),
      z(),
      R(),
      ye(),
      O(),
      P(),
      b(),
      ve(),
      V(),
      Q(),
      B(),
      J(),
      Y(),
      ($ = s()));
  }))();
}
We();
export { Re as ChatGptSafetySettings };
//# sourceMappingURL=safety-settings-7057496b8a54.js.map
