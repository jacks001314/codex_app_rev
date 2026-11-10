import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  BV as r,
  CO as i,
  Cot as a,
  EDt as o,
  Ext as s,
  IDt as c,
  Ixt as l,
  JC as u,
  MO as d,
  Pxt as f,
  QC as p,
  TJ as m,
  TO as h,
  VDt as g,
  Vxt as _,
  _xt as v,
  hrt as y,
  iw as b,
  jDt as x,
  jO as S,
  qC as ee,
  rw as C,
  t3 as w,
  tw as T,
  vrt as E,
  vzt as D,
  wot as O,
  wxt as te,
  xMt as k,
  yzt as A,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as j,
  Ek as M,
  GDr as ne,
  Gdt as re,
  Gg as N,
  JDr as P,
  KDr as F,
  Kg as I,
  NDr as L,
  QP as ie,
  TPn as R,
  Tk as ae,
  Vdt as oe,
  WDr as z,
  YDr as se,
  Ymr as ce,
  _F as le,
  eDr as ue,
  eF as B,
  ehr as de,
  hF as fe,
  jDr as pe,
  oDr as me,
  qDr as V,
  sDr as he,
  tF as ge,
  xPn as _e,
  yPn as ve,
} from "./app-initial-5851df3f6cb1.js";
import { n as ye, t as be } from "./settings-loading-row-bf72bf2df25d.js";
import { n as xe, t as Se } from "./settings-unsaved-changes-dialog-627a26422e8a.js";
import { n as Ce, r as H, t as we } from "./legacy-study-hours-schedule-493102f58ae0.js";
function Te(e) {
  let n = (0, U.c)(33),
    { schedule: r, description: i, disabled: a, maxBlocks: o, createBlock: s, onChange: l } = e,
    u = o === void 0 ? 12 : o,
    d = g(),
    f;
  n[0] !== l || n[1] !== r
    ? ((f = (e) => {
        l(P(r, e), e);
      }),
      (n[0] = l),
      (n[1] = r),
      (n[2] = f))
    : (f = n[2]);
  let p = f,
    m;
  n[3] === p
    ? (m = n[4])
    : ((m = (e, t) => {
        p({ type: `update_block`, blockId: e, update: t });
      }),
      (n[3] = p),
      (n[4] = m));
  let h = m,
    _;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, G.jsx)(c, {
        id: `settings.recurringSchedule.enabled`,
        defaultMessage: `Scheduled`,
        description: `Switch label that enables the recurring Quiet Hours or Study Hours time blocks in settings`,
      })),
      (n[5] = _))
    : (_ = n[5]);
  let v;
  n[6] !== p || n[7] !== s || n[8] !== a || n[9] !== r.blocks || n[10] !== r.enabled
    ? ((v = (e) =>
        (0, G.jsx)(S, {
          ...e,
          checked: r.enabled,
          disabled: a,
          onChange: (e) =>
            p({ type: `set_enabled`, enabled: e, initialBlock: e && r.blocks.length === 0 ? s() : void 0 }),
        })),
      (n[6] = p),
      (n[7] = s),
      (n[8] = a),
      (n[9] = r.blocks),
      (n[10] = r.enabled),
      (n[11] = v))
    : (v = n[11]);
  let y;
  n[12] !== i || n[13] !== v
    ? ((y = (0, G.jsx)(ee, { children: (0, G.jsx)(T, { label: _, description: i, control: v }) })),
      (n[12] = i),
      (n[13] = v),
      (n[14] = y))
    : (y = n[14]);
  let b;
  n[15] !== p || n[16] !== a || n[17] !== d || n[18] !== r.blocks || n[19] !== r.enabled || n[20] !== h
    ? ((b =
        r.enabled &&
        r.blocks.map((e, n) =>
          (0, G.jsx)(
            `fieldset`,
            {
              className: `min-w-0`,
              disabled: a,
              "aria-label": d.formatMessage(
                {
                  id: `settings.recurringSchedule.block`,
                  defaultMessage: `Schedule block {number}`,
                  description: `Accessible label for one recurring Quiet Hours or Study Hours block; number is its one-based position`,
                },
                { number: n + 1 },
              ),
              children: (0, G.jsxs)(ee, {
                children: [
                  [`start_time`, `end_time`].map((t) =>
                    (0, G.jsx)(
                      T,
                      {
                        label:
                          t === `start_time`
                            ? (0, G.jsx)(c, {
                                id: `settings.recurringSchedule.start`,
                                defaultMessage: `Start time`,
                                description: `Label for the local start time of a recurring Quiet Hours or Study Hours block`,
                              })
                            : (0, G.jsx)(c, {
                                id: `settings.recurringSchedule.end`,
                                defaultMessage: `End time`,
                                description: `Label for the local end time of a recurring Quiet Hours or Study Hours block; an earlier end time means the following day`,
                              }),
                        control: (n) =>
                          (0, G.jsx)(R, {
                            ...n,
                            name: `${t}-${e.id}`,
                            type: `time`,
                            value: e[t],
                            disabled: a,
                            onChange: (n) => h(e.id, { [t]: n.currentTarget.value }),
                          }),
                      },
                      t,
                    ),
                  ),
                  (0, G.jsx)(Ee, { days: e.days, disabled: a, onChange: (t) => h(e.id, { days: t }) }),
                  e.end_time < e.start_time &&
                    (0, G.jsx)(T, {
                      label: (0, G.jsx)(c, {
                        id: `settings.recurringSchedule.overnight`,
                        defaultMessage: `Ends the following day. Selected days are the days it starts.`,
                        description: `Explanation for an overnight Quiet Hours or Study Hours block, clarifying that selected weekdays refer to its start`,
                      }),
                      control: null,
                    }),
                  r.blocks.length > 1 &&
                    (0, G.jsx)(T, {
                      label: null,
                      control: (0, G.jsx)(t, {
                        color: `ghost`,
                        disabled: a,
                        type: `button`,
                        onClick: () => p({ type: `remove_block`, blockId: e.id }),
                        children: (0, G.jsx)(c, {
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
      (n[15] = p),
      (n[16] = a),
      (n[17] = d),
      (n[18] = r.blocks),
      (n[19] = r.enabled),
      (n[20] = h),
      (n[21] = b))
    : (b = n[21]);
  let x;
  n[22] !== p || n[23] !== s || n[24] !== a || n[25] !== u || n[26] !== r.blocks || n[27] !== r.enabled
    ? ((x =
        r.enabled &&
        (0, G.jsx)(T, {
          label: null,
          control: (0, G.jsx)(t, {
            color: `secondary`,
            disabled: a || r.blocks.length >= u,
            type: `button`,
            onClick: () => p({ type: `add_block`, block: s() }),
            children: (0, G.jsx)(c, {
              id: `settings.recurringSchedule.add`,
              defaultMessage: `Add a new block`,
              description: `Button adding another recurring Quiet Hours or Study Hours block, up to twelve blocks`,
            }),
          }),
        })),
      (n[22] = p),
      (n[23] = s),
      (n[24] = a),
      (n[25] = u),
      (n[26] = r.blocks),
      (n[27] = r.enabled),
      (n[28] = x))
    : (x = n[28]);
  let C;
  return (
    n[29] !== y || n[30] !== b || n[31] !== x
      ? ((C = (0, G.jsxs)(ae.Content, { children: [y, b, x] })),
        (n[29] = y),
        (n[30] = b),
        (n[31] = x),
        (n[32] = C))
      : (C = n[32]),
    C
  );
}
function Ee(e) {
  let t = (0, U.c)(15),
    { days: n, disabled: r, onChange: a } = e,
    s = g(),
    l = (0, W.useId)(),
    [u, d] = (0, W.useState)(!1),
    [f, p] = (0, W.useState)(n),
    m;
  if (t[0] !== n || t[1] !== s) {
    if (n.length === F.length)
      m = (0, G.jsx)(c, {
        id: `settings.recurringSchedule.days.everyDay`,
        defaultMessage: `Every day`,
        description: `Summary beside Days in recurring schedule settings when all seven weekdays are selected`,
      });
    else if (n.length === 5 && F.slice(0, 5).every((e) => n.includes(e)))
      m = (0, G.jsx)(c, {
        id: `settings.recurringSchedule.days.weekDays`,
        defaultMessage: `Week days`,
        description: `Summary beside Days in recurring schedule settings when Monday through Friday are selected and Saturday and Sunday are not`,
      });
    else {
      let e;
      (t[3] === s
        ? (e = t[4])
        : ((e = (e) =>
            s.formatDate(new Date(Date.UTC(2026, 0, 5 + F.indexOf(e))), {
              weekday: `short`,
              timeZone: `UTC`,
            })),
          (t[3] = s),
          (t[4] = e)),
        (m = (0, G.jsx)(o, { value: n.map(e) })));
    }
    ((t[0] = n), (t[1] = s), (t[2] = m));
  } else m = t[2];
  let _;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, G.jsx)(c, {
        id: `settings.recurringSchedule.days`,
        defaultMessage: `Days`,
        description: `Label for the weekdays on which this recurring Quiet Hours or Study Hours block starts`,
      })),
      (t[5] = _))
    : (_ = t[5]);
  let v;
  return (
    t[6] !== n ||
    t[7] !== r ||
    t[8] !== s ||
    t[9] !== a ||
    t[10] !== u ||
    t[11] !== f ||
    t[12] !== m ||
    t[13] !== l
      ? ((v = (0, G.jsx)(T, {
          variant: `nested`,
          label: _,
          control: (e) =>
            (0, G.jsxs)(i, {
              align: `end`,
              contentWidth: `menuWide`,
              disabled: r,
              open: u,
              onOpenChange: (e) => {
                (e && p(n), d(e));
              },
              triggerButton: (0, G.jsx)(ie, {
                ...e,
                "aria-describedby": l,
                children: (0, G.jsx)(`span`, { id: l, className: `truncate`, children: m }),
              }),
              children: [
                F.map((e, t) =>
                  (0, G.jsx)(
                    h.CheckboxItem,
                    {
                      checked: f.includes(e),
                      disabled: r,
                      onCheckedChange: (t) => p((n) => F.filter((r) => (r === e ? t === !0 : n.includes(r)))),
                      children: s.formatDate(new Date(Date.UTC(2026, 0, 5 + t)), {
                        weekday: `long`,
                        timeZone: `UTC`,
                      }),
                    },
                    e,
                  ),
                ),
                (0, G.jsx)(h.Separator, {}),
                (0, G.jsx)(h.Item, {
                  onSelect: () => d(!1),
                  children: (0, G.jsx)(c, {
                    id: `common.cancel`,
                    defaultMessage: `Cancel`,
                    description: `Button to dismiss without saving changes`,
                  }),
                }),
                (0, G.jsx)(h.Item, {
                  disabled: f.length === 0,
                  onSelect: () => {
                    (f.length !== n.length || f.some((e) => !n.includes(e))) && a(f);
                  },
                  children: (0, G.jsx)(c, {
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
        (t[8] = s),
        (t[9] = a),
        (t[10] = u),
        (t[11] = f),
        (t[12] = m),
        (t[13] = l),
        (t[14] = v))
      : (v = t[14]),
    v
  );
}
var U, W, G;
function De() {
  return (De = e(() => {
    ((U = D()), (W = A()), x(), w(), n(), j(), d(), M(), b(), ge(), u(), V(), (G = k()));
  }))();
}
function Oe() {
  let e = (0, K.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, q.jsx)(c, {
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
      ? ((t = (0, q.jsx)(c, {
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
  return (0, q.jsx)(ve, {
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
    ((K = D()), x(), _e(), (q = k()));
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
  let n = (0, Le.c)(88),
    { kind: r, initialSchedule: i, initialLegacyStudyMode: o, onClose: s } = e,
    u = o !== void 0 && o,
    d = l(a),
    f = (0, X.useId)(),
    { data: p } = _(pe),
    [m] = (0, X.useState)(i),
    [h, g] = (0, X.useState)(i),
    [v, y] = (0, X.useState)(u),
    [b, x] = (0, X.useState)(!1),
    [S, ee] = (0, X.useState)(!1),
    [C, w] = (0, X.useState)(null),
    [T, E] = (0, X.useState)(!1),
    [D, O] = (0, X.useState)(!1),
    te = (0, X.useRef)(null),
    k;
  n[0] !== p?.amphoraLocks ||
  n[1] !== p?.defaultToStudyMode ||
  n[2] !== p?.hasRecurringStudyHours ||
  n[3] !== p?.quietHours ||
  n[4] !== p?.studyHoursSchedule ||
  n[5] !== r
    ? ((k =
        r === `quiet`
          ? p?.quietHours
          : je(p?.studyHoursSchedule, p?.hasRecurringStudyHours, p?.defaultToStudyMode, p?.amphoraLocks)),
      (n[0] = p?.amphoraLocks),
      (n[1] = p?.defaultToStudyMode),
      (n[2] = p?.hasRecurringStudyHours),
      (n[3] = p?.quietHours),
      (n[4] = p?.studyHoursSchedule),
      (n[5] = r),
      (n[6] = k))
    : (k = n[6]);
  let A = k,
    j;
  n[7] !== A || n[8] !== r
    ? ((j =
        A?.status === `unsupported` || (r === `quiet` && A?.status === `loaded` && ne(A.schedule) != null)),
      (n[7] = A),
      (n[8] = r),
      (n[9] = j))
    : (j = n[9]);
  let M = j,
    P = p == null || A?.managedByParent === !0,
    I;
  n[10] !== h || n[11] !== u || n[12] !== v || n[13] !== m || n[14] !== S
    ? ((I = S || v !== u || JSON.stringify(h) !== JSON.stringify(m)),
      (n[10] = h),
      (n[11] = u),
      (n[12] = v),
      (n[13] = m),
      (n[14] = S),
      (n[15] = I))
    : (I = n[15]);
  let L = I,
    ie;
  n[16] !== h || n[17] !== r
    ? ((ie = r === `quiet` ? ne(h) : se(h)), (n[16] = h), (n[17] = r), (n[18] = ie))
    : (ie = n[18]);
  let R = ie,
    oe;
  n[19] !== h || n[20] !== v ? ((oe = v ? Ce() : h), (n[19] = h), (n[20] = v), (n[21] = oe)) : (oe = n[21]);
  let z = oe;
  re(`time-management.${r}-hours`, L || b);
  let le, ue;
  (n[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = () => () => {
        te.current?.abort();
      }),
      (ue = []),
      (n[22] = le),
      (n[23] = ue))
    : ((le = n[22]), (ue = n[23])),
    (0, X.useEffect)(le, ue));
  let B = C;
  M
    ? (B = `unsupported`)
    : P
      ? (B = `locked`)
      : C == null &&
        T &&
        R != null &&
        (B = R === `insufficient_break` ? `break` : R === `too_many_blocks` ? `limit` : `invalid`);
  let de;
  n[24] !== L || n[25] !== h || n[26] !== r || n[27] !== s || n[28] !== d || n[29] !== M || n[30] !== R
    ? ((de = async () => {
        if ((E(!0), te.current != null || !L || R != null || M)) return;
        let e = d.get(N),
          t = d.query.getData(pe),
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
          w(n?.managedByParent ? `locked` : `denied`);
          return;
        }
        let i = new AbortController();
        te.current = i;
        let a = d.query.snapshot(pe),
          { userId: o, accountId: c } = e,
          l = function () {
            let e = d.get(N);
            return e.status === `allowed` && e.userId === o && e.accountId === c;
          },
          u = d.watch((e) => {
            let t = e.get(N);
            (t.status !== `allowed` || t.userId !== o || t.accountId !== c) && i.abort();
          });
        (x(!0), w(null));
        let f = !1;
        (a.invalidate({ refetchType: `none` }),
          await ce
            .safePatch(`/settings/account_user_setting`, {
              additionalHeaders: { "ChatGPT-Account-ID": c },
              parameters: {
                query: {
                  feature: r === `quiet` ? `quiet_hours_schedule` : `study_hours_schedule`,
                  value: JSON.stringify(h),
                },
              },
              signal: i.signal,
            })
            .then(Fe, Ie)
            .then(async (e) => {
              l() &&
                (await a.cancel(),
                l() &&
                  (await a.invalidate({ refetchType: `all` }),
                  !i.signal.aborted &&
                    (e == null && !d.get(pe).isError ? ((f = !0), s()) : (ee(!0), w(e ?? `save`)))));
            })
            .finally(() => {
              (u(), f || ((te.current = null), x(!1)));
            }));
      }),
      (n[24] = L),
      (n[25] = h),
      (n[26] = r),
      (n[27] = s),
      (n[28] = d),
      (n[29] = M),
      (n[30] = R),
      (n[31] = de))
    : (de = n[31]);
  let me = de,
    V;
  n[32] === r
    ? (V = n[33])
    : ((V =
        r === `quiet`
          ? (0, Z.jsx)(c, {
              id: `settings.chatGpt.timeManagement.quietHours.title`,
              defaultMessage: `Quiet hours`,
              description: `Title of the settings section showing scheduled times when ChatGPT is unavailable`,
            })
          : (0, Z.jsx)(Oe, {})),
      (n[32] = r),
      (n[33] = V));
  let he;
  n[34] !== L || n[35] !== s
    ? ((he = () => {
        L ? O(!0) : s();
      }),
      (n[34] = L),
      (n[35] = s),
      (n[36] = he))
    : (he = n[36]);
  let ge;
  n[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (0, Z.jsx)(c, {
        id: `settings.chatGpt.quietHours.back`,
        defaultMessage: `Back`,
        description: `Button in the Quiet Hours or Study Hours schedule editor that returns to Time management after confirming any unsaved changes can be discarded`,
      })),
      (n[37] = ge))
    : (ge = n[37]);
  let _e;
  n[38] !== b || n[39] !== he
    ? ((_e = (0, Z.jsx)(t, {
        color: `ghost`,
        size: `toolbar`,
        disabled: b,
        type: `button`,
        onClick: he,
        children: ge,
      })),
      (n[38] = b),
      (n[39] = he),
      (n[40] = _e))
    : (_e = n[40]);
  let ve;
  n[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, Z.jsx)(c, {
        id: `common.cancel`,
        defaultMessage: `Cancel`,
        description: `Button to dismiss without saving changes`,
      })),
      (n[41] = ve))
    : (ve = n[41]);
  let ye;
  n[42] !== s || n[43] !== b
    ? ((ye = (0, Z.jsx)(t, { color: `secondary`, disabled: b, type: `button`, onClick: s, children: ve })),
      (n[42] = s),
      (n[43] = b),
      (n[44] = ye))
    : (ye = n[44]);
  let be = b || P || M || !L,
    xe;
  n[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (0, Z.jsx)(c, {
        id: `common.save`,
        defaultMessage: `Save`,
        description: `Button to save changes`,
      })),
      (n[45] = xe))
    : (xe = n[45]);
  let H;
  n[46] !== f || n[47] !== b || n[48] !== be
    ? ((H = (0, Z.jsx)(t, {
        color: `primary`,
        disabled: be,
        loading: b,
        form: f,
        type: `submit`,
        children: xe,
      })),
      (n[46] = f),
      (n[47] = b),
      (n[48] = be),
      (n[49] = H))
    : (H = n[49]);
  let Ee;
  n[50] !== ye || n[51] !== H
    ? ((Ee = (0, Z.jsxs)(Z.Fragment, { children: [ye, H] })), (n[50] = ye), (n[51] = H), (n[52] = Ee))
    : (Ee = n[52]);
  let U;
  n[53] === me
    ? (U = n[54])
    : ((U = (e) => {
        (e.preventDefault(), me());
      }),
      (n[53] = me),
      (n[54] = U));
  let W;
  n[55] === r
    ? (W = n[56])
    : ((W =
        r === `quiet`
          ? (0, Z.jsx)(c, {
              id: `settings.chatGpt.quietHours.scheduleDescription`,
              defaultMessage: `Schedule hours when ChatGPT can’t be used`,
              description: `Helper text for the Scheduled switch in Quiet hours settings, explaining that the selected times make ChatGPT unavailable`,
            })
          : (0, Z.jsx)(ke, {})),
      (n[55] = r),
      (n[56] = W));
  let G = b || P || M,
    De = v ? 12 - Math.max(h.blocks.length - 1, 0) : void 0,
    Ae;
  n[57] !== z.blocks[0]?.days || n[58] !== r
    ? ((Ae = () => ({
        id: crypto.randomUUID(),
        days: z.blocks[0]?.days ?? F.slice(0, 5),
        start_time: r === `quiet` ? `22:00` : `16:00`,
        end_time: r === `quiet` ? `07:00` : `20:00`,
      })),
      (n[57] = z.blocks[0]?.days),
      (n[58] = r),
      (n[59] = Ae))
    : (Ae = n[59]);
  let K;
  n[60] !== h || n[61] !== v
    ? ((K = (e, t) => {
        let n = v ? we(h, t) : e;
        (g(n), y(!1), v && E(n.blocks.length > 12), w(null));
      }),
      (n[60] = h),
      (n[61] = v),
      (n[62] = K))
    : (K = n[62]);
  let q;
  n[63] !== z || n[64] !== W || n[65] !== G || n[66] !== De || n[67] !== Ae || n[68] !== K
    ? ((q = (0, Z.jsx)(Te, {
        schedule: z,
        description: W,
        disabled: G,
        maxBlocks: De,
        createBlock: Ae,
        onChange: K,
      })),
      (n[63] = z),
      (n[64] = W),
      (n[65] = G),
      (n[66] = De),
      (n[67] = Ae),
      (n[68] = K),
      (n[69] = q))
    : (q = n[69]);
  let J;
  n[70] === B
    ? (J = n[71])
    : ((J =
        B != null &&
        (0, Z.jsx)(ae.Footer, {
          children: (0, Z.jsxs)(`span`, {
            role: `alert`,
            children: [
              B === `unsupported` &&
                (0, Z.jsx)(c, {
                  id: `settings.chatGpt.quietHours.unsupported`,
                  defaultMessage: `This schedule can’t be edited here. Your existing settings have been preserved.`,
                  description: `Warning when the saved Quiet Hours or Study Hours schedule is malformed or unsupported; no changes will be written`,
                }),
              B === `locked` &&
                (0, Z.jsx)(c, {
                  id: `settings.chatGpt.quietHours.managedByParent`,
                  defaultMessage: `This setting is managed by your parent`,
                  description: `Notice when a parent has locked the Quiet Hours or Study Hours schedule and its controls cannot be changed`,
                }),
              B === `denied` &&
                (0, Z.jsx)(c, {
                  id: `settings.chatGpt.quietHours.denied`,
                  defaultMessage: `You can’t change this schedule right now. Close the editor to review the current setting.`,
                  description: `Error when the server denies a Quiet Hours or Study Hours update or the account no longer permits it; no parent ownership is inferred from a generic denial`,
                }),
              B === `save` &&
                (0, Z.jsx)(c, {
                  id: `settings.chatGpt.quietHours.saveError`,
                  defaultMessage: `Couldn’t confirm the updated schedule. Try again.`,
                  description: `Error after saving or refreshing Quiet Hours or Study Hours fails; unsaved edits remain available for another save attempt`,
                }),
              B === `break` &&
                (0, Z.jsx)(c, {
                  id: `settings.chatGpt.quietHours.breakRequired`,
                  defaultMessage: `Leave at least five minutes outside quiet hours each day`,
                  description: `Validation error when combined recurring Quiet Hours blocks cover nearly an entire local day`,
                }),
              B === `invalid` &&
                (0, Z.jsx)(c, {
                  id: `settings.chatGpt.quietHours.invalidSchedule`,
                  defaultMessage: `Select at least one day per block and different start and end times`,
                  description: `Validation guidance when the Quiet Hours or Study Hours editor contains missing weekdays or invalid or equal times`,
                }),
              B === `limit` &&
                (0, Z.jsx)(c, {
                  id: `settings.recurringSchedule.blockLimit`,
                  defaultMessage: `Use no more than twelve blocks`,
                  description: `Validation error when a recurring schedule exceeds twelve blocks, including a converted legacy Study Hours block`,
                }),
            ],
          }),
        })),
      (n[70] = B),
      (n[71] = J));
  let Y;
  n[72] !== f || n[73] !== U || n[74] !== q || n[75] !== J
    ? ((Y = (0, Z.jsxs)(`form`, { id: f, className: `flex flex-col gap-3`, onSubmit: U, children: [q, J] })),
      (n[72] = f),
      (n[73] = U),
      (n[74] = q),
      (n[75] = J),
      (n[76] = Y))
    : (Y = n[76]);
  let Me;
  n[77] !== V || n[78] !== _e || n[79] !== Ee || n[80] !== Y
    ? ((Me = (0, Z.jsx)(fe, { title: V, backSlot: _e, footer: Ee, children: Y })),
      (n[77] = V),
      (n[78] = _e),
      (n[79] = Ee),
      (n[80] = Y),
      (n[81] = Me))
    : (Me = n[81]);
  let Ne = D ? s : null,
    Pe;
  n[82] === Symbol.for(`react.memo_cache_sentinel`) ? ((Pe = () => O(!1)), (n[82] = Pe)) : (Pe = n[82]);
  let Q;
  n[83] === Ne
    ? (Q = n[84])
    : ((Q = (0, Z.jsx)(Se, { pendingNavigation: Ne, onClearPendingNavigation: Pe })),
      (n[83] = Ne),
      (n[84] = Q));
  let Re;
  return (
    n[85] !== Me || n[86] !== Q
      ? ((Re = (0, Z.jsxs)(Z.Fragment, { children: [Me, Q] })), (n[85] = Me), (n[86] = Q), (n[87] = Re))
      : (Re = n[87]),
    Re
  );
}
function Fe() {
  return null;
}
function Ie(e) {
  return e instanceof y && e.status === 403
    ? e.errorCode === `feature-locked-by-owner`
      ? `locked`
      : `denied`
    : `save`;
}
var Le, X, Z;
function Q() {
  return (Q = e(() => {
    ((Le = D()),
      f(),
      (X = A()),
      x(),
      de(),
      L(),
      w(),
      O(),
      le(),
      M(),
      xe(),
      oe(),
      E(),
      I(),
      H(),
      z(),
      V(),
      De(),
      J(),
      Y(),
      (Z = k()));
  }))();
}
function Re() {
  let e = (0, He.c)(8),
    t = l(a),
    n = _(N);
  if (n.status === `denied`) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, $.jsx)(Ve, {})), (e[0] = t)) : (t = e[0]),
      t
    );
  }
  if (n.status !== `allowed`) {
    let r = n.status === `error`,
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
      e[3] !== r || e[4] !== i
        ? ((a = (0, $.jsx)(Be, { isError: r, onRetry: i })), (e[3] = r), (e[4] = i), (e[5] = a))
        : (a = e[5]),
      a
    );
  }
  let r = `${n.userId}:${n.accountId}`,
    i;
  return (e[6] === r ? (i = e[7]) : ((i = (0, $.jsx)(ze, {}, r)), (e[6] = r), (e[7] = i)), i);
}
function ze() {
  let e = (0, He.c)(89),
    n = te(),
    i = s(),
    a = (0, Ue.useId)(),
    o = new URLSearchParams(n.search),
    { data: l, isError: u, isFetching: d, refetch: f } = _(pe),
    m = me(`67629032`),
    h = he(),
    g = o.get(`view`) === `quiet-hours`,
    v = o.get(`view`) === `study-hours`,
    y = g || v || o.get(`view`) === `time-management`;
  if ((u && !g && !v) || l == null || h) {
    let t;
    e[0] === f ? (t = e[1]) : ((t = () => void f()), (e[0] = f), (e[1] = t));
    let n;
    return (
      e[2] !== u || e[3] !== d || e[4] !== t
        ? ((n = (0, $.jsx)(Be, { isError: u, isFetching: d, onRetry: t })),
          (e[2] = u),
          (e[3] = d),
          (e[4] = t),
          (e[5] = n))
        : (n = e[5]),
      n
    );
  }
  if (l.eligibleNowOrBefore !== !0 || !m.get(`enable_chatgpt_time_management_settings`, !1)) {
    let t;
    return (
      e[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, $.jsx)(Ve, {})), (e[6] = t)) : (t = e[6]),
      t
    );
  }
  let b;
  e[7] !== l.amphoraLocks ||
  e[8] !== l.defaultToStudyMode ||
  e[9] !== l.hasRecurringStudyHours ||
  e[10] !== l.studyHoursSchedule
    ? ((b = je(l.studyHoursSchedule, l.hasRecurringStudyHours, l.defaultToStudyMode, l.amphoraLocks)),
      (e[7] = l.amphoraLocks),
      (e[8] = l.defaultToStudyMode),
      (e[9] = l.hasRecurringStudyHours),
      (e[10] = l.studyHoursSchedule),
      (e[11] = b))
    : (b = e[11]);
  let x = b,
    S;
  e[12] !== l.quietHours.schedule || e[13] !== l.quietHours.status
    ? ((S =
        l.quietHours.status === `unsupported` ||
        (l.quietHours.status === `loaded` && ne(l.quietHours.schedule) != null)),
      (e[12] = l.quietHours.schedule),
      (e[13] = l.quietHours.status),
      (e[14] = S))
    : (S = e[14]);
  let w = S,
    E = (e, t) => {
      let r = new URLSearchParams(o);
      (e == null ? r.delete(`view`) : r.set(`view`, e),
        i({ pathname: n.pathname, search: r.toString(), hash: n.hash }, { ...t, state: n.state }));
    };
  if (g && !w) {
    let t;
    e[15] !== l.quietHours.schedule || e[16] !== l.quietHours.status
      ? ((t = l.quietHours.status === `loaded` ? l.quietHours.schedule : { enabled: !1, blocks: [] }),
        (e[15] = l.quietHours.schedule),
        (e[16] = l.quietHours.status),
        (e[17] = t))
      : (t = e[17]);
    let n;
    e[18] === E ? (n = e[19]) : ((n = () => E(`time-management`, { replace: !0 })), (e[18] = E), (e[19] = n));
    let r;
    return (
      e[20] !== t || e[21] !== n
        ? ((r = (0, $.jsx)(Me, { initialSchedule: t, onClose: n })), (e[20] = t), (e[21] = n), (e[22] = r))
        : (r = e[22]),
      r
    );
  }
  if (v && x.status === `loaded`) {
    let t;
    e[23] === l.studyHoursSchedule
      ? (t = e[24])
      : ((t = l.studyHoursSchedule ?? { enabled: !1, blocks: [] }),
        (e[23] = l.studyHoursSchedule),
        (e[24] = t));
    let n = l.defaultToStudyMode === !0,
      r;
    e[25] === E ? (r = e[26]) : ((r = () => E(`time-management`, { replace: !0 })), (e[25] = E), (e[26] = r));
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
  let D;
  e[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, $.jsx)(B, { slug: `time-management` })), (e[31] = D))
    : (D = e[31]);
  let O;
  e[32] === E ? (O = e[33]) : ((O = () => E(`time-management`)), (e[32] = E), (e[33] = O));
  let k;
  e[34] === Symbol.for(`react.memo_cache_sentinel`) ? ((k = (0, $.jsx)(r, {})), (e[34] = k)) : (k = e[34]);
  let A;
  e[35] === O
    ? (A = e[36])
    : ((A = (0, $.jsx)(p, { edgeRounding: `surface`, label: D, onClick: O, trailing: k })),
      (e[35] = O),
      (e[36] = A));
  let j = A;
  if (y) {
    let t;
    e[37] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(c, {
          id: `settings.chatGpt.timeManagement.quietHours.title`,
          defaultMessage: `Quiet hours`,
          description: `Title of the settings section showing scheduled times when ChatGPT is unavailable`,
        })),
        (e[37] = t))
      : (t = e[37]);
    let n;
    e[38] === l.quietHours.managedByParent
      ? (n = e[39])
      : ((n = l.quietHours.managedByParent
          ? (0, $.jsx)(`span`, {
              className: `sr-only`,
              children: (0, $.jsx)(c, {
                id: `settings.chatGpt.timeManagement.managedByParent`,
                defaultMessage: `Managed by your parent`,
                description: `Explanation that a parent controls the teen's quiet hours schedule`,
              }),
            })
          : null),
        (e[38] = l.quietHours.managedByParent),
        (e[39] = n));
    let i;
    e[40] === n
      ? (i = e[41])
      : ((i = (0, $.jsxs)($.Fragment, { children: [t, n] })), (e[40] = n), (e[41] = i));
    let o;
    e[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, $.jsx)(c, {
          id: `settings.chatGpt.timeManagement.quietHours.description`,
          defaultMessage: `Schedule hours when ChatGPT can’t be used`,
          description: `Description of the Quiet hours settings row, which opens its schedule editor`,
        })),
        (e[42] = o))
      : (o = e[42]);
    let s;
    e[43] === E ? (s = e[44]) : ((s = () => E(`quiet-hours`)), (e[43] = E), (e[44] = s));
    let u;
    e[45] !== l.quietHours.schedule || e[46] !== l.quietHours.status || e[47] !== w
      ? ((u = (0, $.jsx)(C, {
          children: w
            ? (0, $.jsx)(c, {
                id: `settings.chatGpt.timeManagement.unsupportedStatus`,
                defaultMessage: `Unsupported schedule`,
                description: `Quiet hours status when its saved format is unsupported; this does not mean the schedule is disabled`,
              })
            : (0, $.jsx)(c, {
                id: `settings.chatGpt.timeManagement.scheduleStatus`,
                defaultMessage: `{enabled, select, true {Scheduled} other {Not scheduled}}`,
                description: `Quiet hours status indicating whether a schedule is enabled, rather than whether it is currently active`,
                values: {
                  enabled: String(l.quietHours.status === `loaded` && l.quietHours.schedule.enabled),
                },
              }),
        })),
        (e[45] = l.quietHours.schedule),
        (e[46] = l.quietHours.status),
        (e[47] = w),
        (e[48] = u))
      : (u = e[48]);
    let d;
    e[49] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = (0, $.jsx)(r, {})), (e[49] = d)) : (d = e[49]);
    let f;
    e[50] === u
      ? (f = e[51])
      : ((f = (0, $.jsxs)($.Fragment, { children: [u, d] })), (e[50] = u), (e[51] = f));
    let m;
    e[52] !== s || e[53] !== f || e[54] !== i
      ? ((m = (0, $.jsx)(p, { edgeRounding: `surface`, label: i, description: o, onClick: s, trailing: f })),
        (e[52] = s),
        (e[53] = f),
        (e[54] = i),
        (e[55] = m))
      : (m = e[55]);
    let h;
    e[56] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = (0, $.jsx)(Oe, {})), (e[56] = h)) : (h = e[56]);
    let g;
    e[57] === x.managedByParent
      ? (g = e[58])
      : ((g =
          x.managedByParent &&
          (0, $.jsx)(`span`, {
            className: `sr-only`,
            children: (0, $.jsx)(c, {
              id: `settings.chatGpt.timeManagement.studyManagedByParent`,
              defaultMessage: `Managed by your parent`,
              description: `Explanation that a parent manages the teen's schedule`,
            }),
          })),
        (e[57] = x.managedByParent),
        (e[58] = g));
    let _;
    e[59] === g
      ? (_ = e[60])
      : ((_ = (0, $.jsxs)($.Fragment, { children: [h, g] })), (e[59] = g), (e[60] = _));
    let v;
    e[61] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = (0, $.jsx)(ke, {})), (e[61] = v)) : (v = e[61]);
    let y;
    e[62] !== E || e[63] !== x.schedule || e[64] !== x.status || e[65] !== a
      ? ((y = (e) =>
          (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(`button`, {
                ...e,
                "aria-describedby": [e[`aria-describedby`], a].filter(Boolean).join(` `),
                className: `absolute inset-0 cursor-interaction focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring`,
                onClick: () => E(`study-hours`),
                type: `button`,
              }),
              (0, $.jsxs)(`span`, {
                className: `flex items-center gap-2`,
                id: a,
                children: [
                  (0, $.jsx)(C, {
                    children:
                      x.status === `unsupported`
                        ? (0, $.jsx)(c, {
                            id: `settings.chatGpt.timeManagement.studyUnsupportedStatus`,
                            defaultMessage: `Unsupported schedule`,
                            description: `Status when a saved schedule cannot be edited`,
                          })
                        : (0, $.jsx)(c, {
                            id: `settings.chatGpt.timeManagement.studyScheduleStatus`,
                            defaultMessage: `{enabled, select, true {Scheduled} other {Not scheduled}}`,
                            description: `Status indicating whether the recurring schedule is enabled`,
                            values: { enabled: String(x.schedule.enabled) },
                          }),
                  }),
                  (0, $.jsx)(r, {}),
                ],
              }),
            ],
          })),
        (e[62] = E),
        (e[63] = x.schedule),
        (e[64] = x.status),
        (e[65] = a),
        (e[66] = y))
      : (y = e[66]);
    let b;
    e[67] !== _ || e[68] !== y
      ? ((b = (0, $.jsx)(T, {
          className: `relative focus-within:bg-primary-ghost-hover hover:bg-primary-ghost-hover`,
          label: _,
          description: v,
          control: y,
        })),
        (e[67] = _),
        (e[68] = y),
        (e[69] = b))
      : (b = e[69]);
    let S;
    (e[70] !== m || e[71] !== b
      ? ((S = (0, $.jsxs)($.Fragment, { children: [m, b] })), (e[70] = m), (e[71] = b), (e[72] = S))
      : (S = e[72]),
      (j = S));
  }
  if (g || v) {
    let t;
    (e[73] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(T, {
          label: (0, $.jsx)(c, {
            id: `settings.chatGpt.timeManagement.scheduleUnsupported`,
            defaultMessage: `This schedule can’t be edited here. Your existing settings have been preserved.`,
            description: `Message when a saved Quiet Hours or Study Hours schedule uses a format this editor cannot support; the stored schedule remains unchanged`,
          }),
          control: null,
        })),
        (e[73] = t))
      : (t = e[73]),
      (j = t));
  }
  let M = y ? `time-management` : `safety`,
    re;
  e[74] === M ? (re = e[75]) : ((re = (0, $.jsx)(B, { slug: M })), (e[74] = M), (e[75] = re));
  let N = re;
  if (g) {
    let t;
    (e[76] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(c, {
          id: `settings.chatGpt.timeManagement.quietHours.title`,
          defaultMessage: `Quiet hours`,
          description: `Title of the settings section showing scheduled times when ChatGPT is unavailable`,
        })),
        (e[76] = t))
      : (t = e[76]),
      (N = t));
  } else if (v) {
    let t;
    (e[77] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(Oe, {})), (e[77] = t))
      : (t = e[77]),
      (N = t));
  }
  let P;
  e[78] !== g || e[79] !== v || e[80] !== y || e[81] !== E
    ? ((P = y
        ? (0, $.jsx)(t, {
            color: `ghost`,
            size: `toolbar`,
            onClick: () => E(g || v ? `time-management` : null, { replace: !0 }),
            children: (0, $.jsx)(c, {
              id: `settings.chatGpt.timeManagement.back`,
              defaultMessage: `Back`,
              description: `Returns to the previous Safety and wellbeing settings page`,
            }),
          })
        : void 0),
      (e[78] = g),
      (e[79] = v),
      (e[80] = y),
      (e[81] = E),
      (e[82] = P))
    : (P = e[82]);
  let F;
  e[83] === j
    ? (F = e[84])
    : ((F = (0, $.jsx)(ae, {
        children: (0, $.jsx)(ae.Content, { children: (0, $.jsx)(ee, { children: j }) }),
      })),
      (e[83] = j),
      (e[84] = F));
  let I;
  return (
    e[85] !== P || e[86] !== F || e[87] !== N
      ? ((I = (0, $.jsx)(fe, { title: N, backSlot: P, children: F })),
        (e[85] = P),
        (e[86] = F),
        (e[87] = N),
        (e[88] = I))
      : (I = e[88]),
    I
  );
}
function Be(e) {
  let n = (0, He.c)(5),
    { isError: r, isFetching: i, onRetry: a } = e,
    o = i !== void 0 && i,
    s;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(B, { slug: `safety` })), (n[0] = s))
    : (s = n[0]);
  let l;
  return (
    n[1] !== r || n[2] !== o || n[3] !== a
      ? ((l = (0, $.jsx)(fe, {
          title: s,
          children: (0, $.jsx)(ee, {
            children: r
              ? (0, $.jsx)(T, {
                  label: (0, $.jsx)(`span`, {
                    role: `alert`,
                    children: (0, $.jsx)(c, {
                      id: `settings.chatGpt.timeManagement.schedule.loadError`,
                      defaultMessage: `Couldn’t load schedule settings`,
                      description: `Error shown in ChatGPT Safety and wellbeing settings when Quiet Hours and Study Hours cannot be loaded, with a nearby Retry button`,
                    }),
                  }),
                  control: (0, $.jsx)(t, {
                    color: `secondary`,
                    loading: o,
                    size: `toolbar`,
                    onClick: a,
                    type: `button`,
                    children: (0, $.jsx)(c, {
                      id: `common.retry`,
                      defaultMessage: `Retry`,
                      description: `Button to retry an operation after an error`,
                    }),
                  }),
                })
              : (0, $.jsx)(be, {
                  children: (0, $.jsx)(c, {
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
        (n[4] = l))
      : (l = n[4]),
    l
  );
}
function Ve() {
  let e = (0, He.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(fe, {
          children: (0, $.jsx)(c, {
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
    ((He = D()),
      f(),
      (Ue = A()),
      x(),
      v(),
      L(),
      w(),
      m(),
      O(),
      le(),
      M(),
      ye(),
      b(),
      ge(),
      u(),
      ue(),
      I(),
      Q(),
      z(),
      J(),
      Y(),
      ($ = k()));
  }))();
}
We();
export { Re as ChatGptSafetySettings };
//# sourceMappingURL=safety-settings-6b5b7756a156.js.map
