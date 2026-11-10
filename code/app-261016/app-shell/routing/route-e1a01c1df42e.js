import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  FBt as r,
  FW as i,
  HO as a,
  IO as o,
  JO as s,
  LNt as c,
  LO as l,
  MNt as u,
  Mst as d,
  NNt as f,
  NSt as p,
  OT as m,
  PBt as h,
  RFt as g,
  RO as _,
  TY as v,
  WO as y,
  X3 as b,
  XOt as x,
  XSt as S,
  Y3 as ee,
  YOt as C,
  Z3 as w,
  ZSt as T,
  Zjt as E,
  e6 as D,
  fMt as O,
  hMt as k,
  jst as A,
  kT as te,
  mMt as j,
  nCt as ne,
  okt as re,
  qO as ie,
  rV as ae,
  tV as oe,
  tkt as M,
  zFt as se,
  zO as ce,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BFt as N,
  GLn as P,
  Xzr as F,
  dLr as I,
  iLr as le,
  imr as L,
  lLr as R,
  qLn as z,
  rmr as ue,
  sLr as de,
  tLr as B,
  zFt as fe,
} from "./app-initial-ad16eaadf81f.js";
import {
  S as pe,
  c as me,
  g as he,
  h as ge,
  m as _e,
  u as ve,
  v as ye,
  x as be,
  y as xe,
} from "./application-field-c46b6e09515b.js";
import {
  C as Se,
  E as V,
  S as Ce,
  T as we,
  _ as Te,
  a as Ee,
  b as H,
  c as De,
  d as Oe,
  f as ke,
  g as Ae,
  h as U,
  i as je,
  l as Me,
  m as Ne,
  n as Pe,
  o as Fe,
  p as Ie,
  r as Le,
  s as Re,
  t as W,
  u as ze,
  v as Be,
  w as Ve,
  x as G,
  y as He,
} from "./persona-client-7dd1d4a8ca29.js";
import { i as Ue, n as We, r as Ge, t as Ke } from "./persona-431f27950e80.js";
var qe, Je;
function Ye() {
  return (Ye = e(() => {
    (k(),
      (qe = t(O(), 1)),
      (Je = {
        backdropStyle: `dim`,
        iconNextVariant: `light`,
        menuAnimations: !0,
        pill: !0,
        squircle: !1,
        pressable: !1,
        pressableScaleMultiplier: 1,
      }),
      (0, qe.default)(Je, j));
  }))();
}
var Xe, Ze, Qe, $e;
function et() {
  return (et = e(() => {
    ((Xe = typeof navigator < `u`),
      (Ze = Xe ? (navigator.userAgent ?? ``) : ``),
      (Qe = (Xe && /(jsdom|happy-dom)/i.test(Ze)) || typeof Reflect.get(globalThis, `happyDOM`) == `object`),
      ($e = {
        BASE_URL: `./`,
        CODEX_ELECTRON_PLATFORM: `win32`,
        DEV: !1,
        MODE: `production`,
        PROD: !0,
        SSR: !1,
        VITE_CODEX_BUILD_COMMIT: `293b23553a2ef1949121cc87c52983472a85ea23`,
        VITE_DIL_RUNNER_URL: ``,
        VITE_WEB_PUSH_PUBLIC_KEY: ``,
      }),
      $e?.DEV,
      Qe || $e?.MODE);
  }))();
}
var tt;
function nt() {
  return (nt = e(() => {
    (Ye(),
      et(),
      (tt = (e) =>
        Object.keys(e).reduce((t, n) => {
          let r = e[n];
          if (r || r === 0) {
            let e = n.startsWith(`--`) ? `` : `--`,
              i = typeof r == `number` ? `${r}px` : r;
            t[`${e}${n}`] = i;
          }
          return t;
        }, {})));
  }))();
}
var rt, it, at;
function ot() {
  return (ot = e(() => {
    ((rt = `_Container_1owe9_2`),
      (it = `_Textarea_1owe9_2`),
      (at = { Container: rt, Textarea: it, "native-autofill-in": `_native-autofill-in_1owe9_2` }));
  }))();
}
var st, ct, lt;
function ut() {
  return (ut = e(() => {
    (f(),
      (st = r()),
      nt(),
      ot(),
      (ct = c()),
      (lt = (e) => {
        let t = (0, st.useRef)(null),
          n = `search-ui-input-${(0, st.useId)()}`,
          {
            id: r,
            name: i,
            variant: a = `outline`,
            size: o = `md`,
            gutterSize: s,
            className: c,
            autoComplete: l,
            disabled: d = !1,
            readOnly: f = !1,
            invalid: p = !1,
            allowAutofillExtensions: m = !!i || (!!l && l !== `off`),
            onFocus: h,
            onBlur: g,
            onAnimationStart: _,
            onAutofill: v,
            autoSelect: y,
            rows: b = 3,
            maxRows: x,
            autoResize: S,
            maxHeight: ee,
            resize: C = `none`,
            ref: w,
            onChange: T,
            __isWidget: D,
            ...O
          } = e,
          [k, A] = (0, st.useState)(!1),
          te = S ? Math.max(x ?? 10, b) : b,
          j = C !== `none`;
        (0, st.useEffect)(() => {
          y && t.current?.select();
        }, [y]);
        let ne = (e) => {
            (_?.(e), e.animationName === `native-autofill-in` && v?.());
          },
          re = (0, st.useCallback)(() => {
            if (!S || !t.current || te === void 0) return;
            t.current.style.height = `0px`;
            let e = t.current.scrollHeight;
            t.current.style.height = e + `px`;
          }, [S, te]);
        return (
          (0, st.useEffect)(() => {
            re();
          }, [e.value, b, re]),
          (0, ct.jsx)(`div`, {
            className: u(at.Container, c),
            "data-w-component": D ? `textarea` : ``,
            "data-variant": a,
            "data-size": o,
            "data-gutter-size": s,
            "data-focused": k,
            "data-disabled": d ? `` : void 0,
            "data-readonly": f ? `` : void 0,
            "data-invalid": p ? `` : void 0,
            style: tt({
              "textarea-min-rows": `${b}`,
              "textarea-max-rows": `${te}`,
              "textarea-max-height": ee,
              ...(j ? { "textarea-resize": C, "textarea-resizer-visibility": `visible` } : null),
            }),
            children: (0, ct.jsx)(`textarea`, {
              ...O,
              onChange: (e) => {
                (T?.(e), re());
              },
              ref: E([t, w]),
              id: r || (m ? void 0 : n),
              className: at.Textarea,
              name: i,
              autoComplete: l,
              readOnly: f,
              disabled: d,
              rows: b,
              onFocus: (e) => {
                (A(!0), h?.(e));
              },
              onBlur: (e) => {
                (A(!1), g?.(e));
              },
              onAnimationStart: ne,
              "data-lpignore": !m || void 0,
              "data-1p-ignore": !m || void 0,
            }),
          })
        );
      }));
  }))();
}
function dt() {
  return (dt = e(() => {
    ut();
  }))();
}
function ft(e) {
  let t = (0, pt.c)(13),
    { application: n } = e;
  if (!he(n.state)) return null;
  let r = n.state === `action_required` && n.actionOwner !== `applicant` ? `in_progress` : n.state,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = (0, K.jsx)(i, {})), (t[0] = a)) : (a = t[0]);
  let o;
  t[1] === n.organizationId
    ? (o = t[2])
    : ((o = (0, K.jsx)(M, { ...G.applicationConflict, values: { organizationId: n.organizationId } })),
      (t[1] = n.organizationId),
      (t[2] = o));
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, K.jsx)(M, { ...G.applicationStatusLabel })), (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = {
        submitted: G.submittedStatus,
        in_progress: G.inProgressStatus,
        action_required: G.actionRequiredStatus,
        approved: G.approvedStatus,
        access_granted: G.accessGrantedStatus,
        revoked: G.accessRevokedStatus,
        denied: G.deniedStatus,
      }),
      (t[4] = c))
    : (c = t[4]);
  let l = c[r],
    u;
  t[5] === l
    ? (u = t[6])
    : ((u = (0, K.jsxs)(`div`, {
        className: `mt-2 flex flex-wrap items-center gap-2`,
        children: [
          s,
          (0, K.jsx)(`span`, {
            className: `inline-flex min-h-6 items-center rounded-full bg-primary-soft px-2.5 text-xs text-default`,
            children: (0, K.jsx)(M, { ...l }),
          }),
        ],
      })),
      (t[5] = l),
      (t[6] = u));
  let d;
  t[7] !== o || t[8] !== u
    ? ((d = (0, K.jsxs)(`div`, {
        className: `flex items-start gap-2.5 rounded-xl border border-warning-surface bg-warning-surface p-4 text-sm leading-5 text-warning-surface`,
        role: `status`,
        children: [a, (0, K.jsxs)(`div`, { children: [o, u] })],
      })),
      (t[7] = o),
      (t[8] = u),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, K.jsx)(`p`, {
        className: `text-xs leading-4.5 text-secondary select-text`,
        children: (0, K.jsx)(M, { ...G.researchModeLockedAfterSubmission }),
      })),
      (t[10] = f))
    : (f = t[10]);
  let p;
  return (
    t[11] === d
      ? (p = t[12])
      : ((p = (0, K.jsxs)(K.Fragment, { children: [d, f] })), (t[11] = d), (t[12] = p)),
    p
  );
}
var pt, K;
function mt() {
  return (mt = e(() => {
    ((pt = h()), ge(), x(), v(), H(), (K = c()));
  }))();
}
function ht(e) {
  if (e == null) return q.notStarted;
  switch (e) {
    case `created`:
      return q.statusCreated;
    case `started`:
      return q.statusStarted;
    case `pending`:
      return q.statusPending;
    case `completed`:
      return q.statusCompleted;
    case `needs_review`:
      return q.statusNeedsReview;
    case `failed`:
      return q.statusFailed;
    case `approved`:
      return q.statusApproved;
    case `declined`:
      return q.statusDeclined;
    case `expired`:
      return q.statusExpired;
  }
}
function gt(e) {
  let t = (0, _t.c)(4),
    { status: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = ht(n)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, vt.jsx)(`span`, {
          "aria-live": `polite`,
          children: (0, vt.jsx)(fe, { variant: `outline`, children: (0, vt.jsx)(M, { ...r }) }),
        })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
var _t, vt, q;
function yt() {
  return (yt = e(() => {
    ((_t = h()),
      x(),
      N(),
      (vt = c()),
      (q = C({
        notStarted: {
          id: `chatgpt.rosalind_access.persona.not_started`,
          defaultMessage: `Not started`,
          description: `Compact business-verification status badge on the GPT-Rosalind Review screen or Persona step before the applicant starts an inquiry. Not started describes the provider verification process, not the entire access application.`,
        },
        statusCreated: {
          id: `chatgpt.rosalind_access.persona.status.incomplete.created`,
          defaultMessage: `Incomplete`,
          description: `Compact business-verification status badge in the GPT-Rosalind Review summary when a Persona inquiry exists but the applicant has not begun its steps. Incomplete describes the verification inquiry; it does not mean the access application has been denied.`,
        },
        statusStarted: {
          id: `chatgpt.rosalind_access.persona.status.incomplete.started`,
          defaultMessage: `Incomplete`,
          description: `Compact business-verification status badge in the GPT-Rosalind Review summary when the applicant has started but not finished the Persona inquiry. Incomplete describes unfinished provider steps and does not mean verification has failed.`,
        },
        statusPending: {
          id: `chatgpt.rosalind_access.persona.status.pending`,
          defaultMessage: `Pending`,
          description: `Compact business-verification status badge on the GPT-Rosalind Persona step or Review summary while the provider reports a pending inquiry. The applicant cannot continue past this verification state yet. Do not translate Pending as approved or verified.`,
        },
        statusCompleted: {
          id: `chatgpt.rosalind_access.persona.status.details_submitted`,
          defaultMessage: `Details submitted`,
          description: `Compact business-verification status badge on the GPT-Rosalind Persona step or Review summary after the applicant completes and submits the provider inquiry. Details submitted confirms receipt of information; it does not claim the business is verified or GPT-Rosalind access is approved.`,
        },
        statusNeedsReview: {
          id: `chatgpt.rosalind_access.persona.status.needs_review`,
          defaultMessage: `Needs review`,
          description: `Compact business-verification status badge on the GPT-Rosalind Persona step or Review summary when the provider has referred the submitted inquiry for manual review. It describes a reviewer task, not an action the applicant can perform in this badge.`,
        },
        statusFailed: {
          id: `chatgpt.rosalind_access.persona.status.unsuccessful`,
          defaultMessage: `Unsuccessful`,
          description: `Compact business-verification status badge on the GPT-Rosalind Persona step or Review summary when the provider reports an unsuccessful inquiry. Use neutral wording for the verification outcome; this is not a final denial of the GPT-Rosalind access application.`,
        },
        statusApproved: {
          id: `chatgpt.rosalind_access.persona.status.verified`,
          defaultMessage: `Verified`,
          description: `Compact business-verification status badge on the GPT-Rosalind Persona step or Review summary when Persona approves the organization verification inquiry. Verified refers only to business verification and must not imply that the separate GPT-Rosalind application or product access is approved.`,
        },
        statusDeclined: {
          id: `chatgpt.rosalind_access.persona.status.declined`,
          defaultMessage: `Declined`,
          description: `Compact business-verification status badge on the GPT-Rosalind Persona step or Review summary when Persona declines the inquiry. It reports the verification provider outcome, not a final decision on the separate GPT-Rosalind application.`,
        },
        statusExpired: {
          id: `chatgpt.rosalind_access.persona.status.session_expired`,
          defaultMessage: `Session expired`,
          description: `Compact business-verification status badge on the GPT-Rosalind Persona step or Review summary when the provider inquiry has expired. Session means the Persona verification process, not the signed-in OpenAI account session; the applicant must reopen Persona before continuing.`,
        },
      })));
  }))();
}
var bt, xt, St, Ct, wt;
function Tt() {
  return (Tt = e(() => {
    (H(),
      (bt = /^inq_[A-Za-z0-9]{16,64}$/),
      (xt = /^env_[A-Za-z0-9]{16,64}$/),
      (St = /^[A-Za-z0-9._~+/=-]{16,2048}$/),
      (Ct = {
        title: G.personaStep,
        heading: G.personaHeading,
        description: G.personaVisualDescription,
        visualHeading: G.personaHeading,
        visualDescription: G.personaVisualDescription,
      }),
      (wt = new Set([`completed`, `needs_review`, `approved`, `declined`, `failed`])));
  }))();
}
function Et(e) {
  let t = (0, Ot.c)(48),
    {
      organizationId: n,
      previousStatus: r,
      startPersona: i,
      checkPersona: a,
      onStatusChange: o,
      onActivityChange: s,
    } = e,
    c = re(),
    l = (0, kt.useRef)(null),
    u = (0, kt.useRef)(null),
    d = (0, kt.useRef)(0),
    [f, p] = (0, kt.useState)(null),
    [m, h] = (0, kt.useState)(null),
    [g, _] = (0, kt.useState)(null),
    v,
    y;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = () => () => {
        ((d.current += 1), l.current?.destroy(), (l.current = null));
      }),
      (y = []),
      (t[0] = v),
      (t[1] = y))
    : ((v = t[0]), (y = t[1])),
    (0, kt.useEffect)(v, y));
  let b;
  t[2] === n
    ? (b = t[3])
    : ((b = function () {
        if (u.current) return u.current;
        let e = `rosalind-persona-attempt-id:${n}`,
          t = `${e}:payload-version`,
          r = sessionStorage.getItem(e),
          i = sessionStorage.getItem(t);
        if ((r != null && !At.test(r)) || (i != null && (!At.test(i) || (r != null && r !== i))))
          throw Error(`invalid_attempt_binding`);
        let a = { attemptId: r ?? i ?? crypto.randomUUID(), payloadVersion: r != null && i == null ? 1 : 2 };
        return (
          r ?? (i ?? sessionStorage.setItem(t, a.attemptId), sessionStorage.setItem(e, a.attemptId)),
          (u.current = a),
          a
        );
      }),
      (t[2] = n),
      (t[3] = b));
  let x = b,
    S;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = function () {
        (l.current?.destroy(), (l.current = null));
      }),
      (t[4] = S))
    : (S = t[4]);
  let C = S,
    w;
  t[5] === s
    ? (w = t[6])
    : ((w = function (e) {
        (h(e), s(e != null));
      }),
      (t[5] = s),
      (t[6] = w));
  let T = w,
    E;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = function (e, t) {
        se.warning(`rosalind.persona.failure`, { safe: { stage: e, reason: t } });
      }),
      (t[7] = E))
    : (E = t[7]);
  let D = E,
    O;
  t[8] !== a || t[9] !== o || t[10] !== n || t[11] !== T
    ? ((O = async function (e, t) {
        let r = (d.current += 1);
        (T(`refresh`), _(null));
        try {
          let i = await a({ organizationId: n, inquiryId: e, attemptId: t });
          if (r !== d.current) return;
          let s = Dt(i);
          if (!s || s.inquiryId !== e) {
            (T(null), _(`status`), D(`status`, `invalid_provider_response`));
            return;
          }
          (p(s), o(s.status, { inquiryId: e }), T(null));
        } catch {
          r === d.current && (T(null), _(`status`), D(`status`, `request_failed`));
        }
      }),
      (t[8] = a),
      (t[9] = o),
      (t[10] = n),
      (t[11] = T),
      (t[12] = O))
    : (O = t[12]);
  let k = O,
    A;
  t[13] !== x || t[14] !== o || t[15] !== n || t[16] !== k || t[17] !== T || t[18] !== i
    ? ((A = async function () {
        let e = (d.current += 1);
        (C(), T(`start`), _(null));
        try {
          let t = x(),
            r = await i({
              organizationId: n,
              attemptId: t.attemptId,
              ...(t.payloadVersion === 2 ? { payloadVersion: 2 } : {}),
            });
          if (e !== d.current) return;
          let a = Dt(r);
          if (!a) {
            (T(null), _(`open`), D(`start`, `invalid_provider_response`));
            return;
          }
          (p(a), o(a.status, { inquiryId: a.inquiryId }));
          let s = !1,
            c = () => {
              e === d.current && (C(), k(a.inquiryId, t.attemptId));
            },
            u = await W(
              {
                inquiryId: a.inquiryId,
                environmentId: a.environmentId,
                sessionToken: a.sessionToken,
                onCancel: c,
                onComplete: c,
                onError: () => {
                  e === d.current && ((s = !0), C(), T(null), _(`interrupted`), D(`sdk`, `sdk_error`));
                },
              },
              () => e === d.current && !s,
            );
          if (!u) return;
          ((l.current = u), u.open(), T(`open`));
        } catch {
          e === d.current && (T(null), _(`open`), D(`start`, `request_failed`));
        }
      }),
      (t[13] = x),
      (t[14] = o),
      (t[15] = n),
      (t[16] = k),
      (t[17] = T),
      (t[18] = i),
      (t[19] = A))
    : (A = t[19]);
  let te = A,
    j = f?.status ?? r,
    ne = j === `completed` || j === `needs_review` || j === `approved`,
    ie = null;
  j === `needs_review`
    ? (ie = Y.needsReview)
    : (j === `declined` || j === `failed`) && (ie = Y.negativeResult);
  let ae = m === `refresh` ? Y.checking : Y.starting,
    oe = Y.start;
  g === `status` ? (oe = Y.checkAgain) : g ? (oe = Y.retry) : f && (oe = Y.resume);
  let ce = Y.openError;
  g === `status` ? (ce = Y.statusError) : g === `interrupted` && (ce = Y.interrupted);
  let N;
  t[20] === c ? (N = t[21]) : ((N = c.formatMessage(Y.personaBrand)), (t[20] = c), (t[21] = N));
  let P;
  t[22] === N
    ? (P = t[23])
    : ((P = (0, J.jsx)(Ke, {
        className: `h-auto w-28 shrink-0 text-default select-none`,
        role: `img`,
        "aria-label": N,
      })),
      (t[22] = N),
      (t[23] = P));
  let F;
  t[24] === j ? (F = t[25]) : ((F = (0, J.jsx)(gt, { status: j })), (t[24] = j), (t[25] = F));
  let I;
  t[26] !== oe ||
  t[27] !== m ||
  t[28] !== ae ||
  t[29] !== ne ||
  t[30] !== g ||
  t[31] !== k ||
  t[32] !== f ||
  t[33] !== te
    ? ((I = m
        ? (0, J.jsx)(`p`, {
            className: `text-sm text-secondary`,
            role: `status`,
            children: (0, J.jsx)(M, { ...(m === `open` ? Y.open : ae) }),
          })
        : (!ne || g) &&
          (0, J.jsx)(ee, {
            color: `primary`,
            size: `dialogAction`,
            type: `button`,
            onClick: () => {
              g === `status` && f && u.current ? k(f.inquiryId, u.current.attemptId) : te();
            },
            children: (0, J.jsx)(M, { ...oe }),
          })),
      (t[26] = oe),
      (t[27] = m),
      (t[28] = ae),
      (t[29] = ne),
      (t[30] = g),
      (t[31] = k),
      (t[32] = f),
      (t[33] = te),
      (t[34] = I))
    : (I = t[34]);
  let le;
  t[35] !== g || t[36] !== ce
    ? ((le =
        g &&
        (0, J.jsx)(`p`, {
          className: `text-sm text-danger`,
          role: `alert`,
          children: (0, J.jsx)(M, { ...ce }),
        })),
      (t[35] = g),
      (t[36] = ce),
      (t[37] = le))
    : (le = t[37]);
  let L;
  t[38] === ie
    ? (L = t[39])
    : ((L =
        ie && (0, J.jsx)(`p`, { className: `text-sm text-secondary`, children: (0, J.jsx)(M, { ...ie }) })),
      (t[38] = ie),
      (t[39] = L));
  let R;
  t[40] !== F || t[41] !== I || t[42] !== le || t[43] !== L
    ? ((R = (0, J.jsxs)(`div`, { className: `flex flex-col items-start gap-3`, children: [F, I, le, L] })),
      (t[40] = F),
      (t[41] = I),
      (t[42] = le),
      (t[43] = L),
      (t[44] = R))
    : (R = t[44]);
  let z;
  return (
    t[45] !== P || t[46] !== R
      ? ((z = (0, J.jsxs)(`div`, {
          className: `flex flex-wrap items-center justify-between gap-4 rounded-xl border border-default p-6`,
          children: [P, R],
        })),
        (t[45] = P),
        (t[46] = R),
        (t[47] = z))
      : (z = t[47]),
    z
  );
}
function Dt(e) {
  return bt.test(e.inquiryId) && xt.test(e.environmentId) && (!e.sessionToken || St.test(e.sessionToken))
    ? e
    : null;
}
var Ot, kt, J, At, Y;
function jt() {
  return (jt = e(() => {
    ((Ot = h()),
      (kt = r()),
      x(),
      w(),
      We(),
      g(),
      Pe(),
      yt(),
      Tt(),
      (J = c()),
      (At = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/),
      (Y = C({
        personaBrand: {
          id: `chatgpt.rosalind_access.persona.brand`,
          description: `Accessible brand name for the Persona logo in the GPT-Rosalind business-verification card. Persona is a proper name and should retain its brand spelling.`,
          defaultMessage: `Persona`,
        },
        start: {
          id: `chatgpt.rosalind_access.persona.start`,
          description: `Primary button in the GPT-Rosalind business-verification card that opens the real Persona verification flow for the selected organization.`,
          defaultMessage: `Start verification`,
        },
        starting: {
          id: `chatgpt.rosalind_access.persona.opening`,
          description: `Temporary compact status in the GPT-Rosalind business-verification card while the Persona verification dialog is opening.`,
          defaultMessage: `Opening…`,
        },
        open: {
          id: `chatgpt.rosalind_access.persona.open`,
          description: `Temporary compact status in the GPT-Rosalind business-verification card while the Persona verification dialog is open.`,
          defaultMessage: `Verification open`,
        },
        checking: {
          id: `chatgpt.rosalind_access.persona.checking`,
          description: `Temporary compact status in the GPT-Rosalind business-verification card while the backend checks the current Persona inquiry status.`,
          defaultMessage: `Checking status…`,
        },
        resume: {
          id: `chatgpt.rosalind_access.persona.resume`,
          description: `Button in the GPT-Rosalind business-verification card that reopens an incomplete Persona inquiry so the applicant can continue.`,
          defaultMessage: `Resume verification`,
        },
        reopen: {
          id: `chatgpt.rosalind_access.persona.reopen`,
          description: `Button in the GPT-Rosalind business-verification card that opens Persona again for a pending or expired verification inquiry.`,
          defaultMessage: `Open Persona`,
        },
        retry: {
          id: `chatgpt.rosalind_access.persona.retry`,
          description: `Retry button in the GPT-Rosalind business-verification card after Persona could not be opened.`,
          defaultMessage: `Try again`,
        },
        checkAgain: {
          id: `chatgpt.rosalind_access.persona.check_again`,
          description: `Retry button in the GPT-Rosalind business-verification card after the backend could not retrieve the inquiry status. Requests status again without starting a separate inquiry.`,
          defaultMessage: `Check again`,
        },
        openError: {
          id: `chatgpt.rosalind_access.persona.error.open`,
          description: `Concise error message in the GPT-Rosalind business-verification card when the real Persona verification dialog fails to open.`,
          defaultMessage: `Couldn’t open verification.`,
        },
        statusError: {
          id: `chatgpt.rosalind_access.persona.error.status`,
          description: `Concise error message in the GPT-Rosalind business-verification card when the backend cannot check the current Persona inquiry status.`,
          defaultMessage: `Couldn’t check verification status.`,
        },
        interrupted: {
          id: `chatgpt.rosalind_access.persona.error.interrupted`,
          description: `Concise error message in the GPT-Rosalind business-verification card when an opened Persona verification session is interrupted before the status can be confirmed.`,
          defaultMessage: `Verification was interrupted.`,
        },
        needsReview: {
          id: `chatgpt.rosalind_access.persona.guidance.review`,
          description: `Supporting guidance in the GPT-Rosalind business-verification card when Persona has received details and requires review. The applicant may continue the access application; this does not mean the business is verified.`,
          defaultMessage: `You can continue with your application.`,
        },
        negativeResult: {
          id: `chatgpt.rosalind_access.persona.guidance.negative`,
          description: `Supporting guidance in the GPT-Rosalind business-verification card after a declined or failed Persona outcome. The existing application gate allows continuing, but OpenAI must review the outcome before granting access.`,
          defaultMessage: `You can continue, but OpenAI must review this result.`,
        },
      })));
  }))();
}
function Mt(e) {
  let t = (0, Nt.c)(4),
    { message: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Pt.jsx)(
        P,
        {
          initiator: `external_link`,
          appearance: `inherit`,
          underline: `always`,
          href: `https://help.openai.com/en/articles/11481834-chatgpt-rate-card-business-enterpriseedu-credit-based-pricing`,
          children: (0, Pt.jsx)(M, { ...G.pricingChatgptRateCardLink }),
        },
        `pricing-link`,
      )),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = {
        chatgptRateCard: r,
        apiPricing: (0, Pt.jsx)(
          P,
          {
            initiator: `external_link`,
            appearance: `inherit`,
            underline: `always`,
            href: `https://developers.openai.com/api/docs/pricing?latest-pricing=standard`,
            children: (0, Pt.jsx)(M, { ...G.pricingApiLink }),
          },
          `api-pricing`,
        ),
      }),
      (t[1] = i))
    : (i = t[1]);
  let a;
  return (t[2] === n ? (a = t[3]) : ((a = (0, Pt.jsx)(M, { ...n, values: i })), (t[2] = n), (t[3] = a)), a);
}
var Nt, Pt;
function Ft() {
  return (Ft = e(() => {
    ((Nt = h()), x(), z(), H(), (Pt = c()));
  }))();
}
function It(e) {
  let t = (0, Lt.c)(15),
    { capabilities: n } = e,
    r = (0, Rt.useId)();
  if (!n?.discoveryApplications) return null;
  let i = `${r}-title`,
    a = `${r}-title`,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(M, {
        id: `chatgpt.rosalind_access.tier.overview.heading`,
        defaultMessage: `Rosalind model access`,
        description: `Heading of the informational tier overview in the Rosalind access application. Applicants learn about Discovery and Research but do not select a tier. Preserve the product name.`,
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === a
    ? (s = t[2])
    : ((s = (0, X.jsx)(`h2`, { className: `text-base font-medium`, id: a, children: o })),
      (t[1] = a),
      (t[2] = s));
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(`p`, {
        className: `text-sm leading-relaxed text-secondary`,
        children: (0, X.jsx)(M, {
          id: `chatgpt.rosalind_access.tier.overview.eligibility.description`,
          defaultMessage: `One application covers Rosalind Discovery and Rosalind Research. We review your application to determine which tier you are eligible for.`,
          description: `Introduction to the informational Rosalind access overview for applicants. A backend eligibility review determines the tier; applicants cannot select one, and submitting an application does not guarantee approval. Preserve both product names.`,
        }),
      })),
      (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, X.jsx)(`dt`, {
        className: `text-base font-medium`,
        children: (0, X.jsx)(M, {
          id: `chatgpt.rosalind_access.tier.overview.discovery.label`,
          defaultMessage: `Rosalind Discovery`,
          description: `Name of the mid tier model offering in the informational Rosalind access overview. This is a static label, not a selectable option. The other offering is Rosalind Research. Preserve the product name.`,
        }),
      })),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsxs)(`div`, {
        className: `grid content-start gap-1 rounded-xl border border-default p-4`,
        children: [
          l,
          (0, X.jsx)(`dd`, {
            className: `text-sm leading-relaxed text-secondary`,
            children: (0, X.jsx)(M, {
              id: `chatgpt.rosalind_access.tier.overview.discovery.task_focus.description`,
              defaultMessage: `For everyday scientific tasks.`,
              description: `Short static description of Rosalind Discovery in the access application's informational tier overview. It describes the offering's focus on everyday scientific work, contrasted with Research for complex work requiring advanced reasoning. Applicants do not select a tier, and privacy choices are separate. Plain text with no placeholders.`,
            }),
          }),
        ],
      })),
      (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, X.jsx)(`dt`, {
        className: `text-base font-medium`,
        children: (0, X.jsx)(M, {
          id: `chatgpt.rosalind_access.tier.overview.research.label`,
          defaultMessage: `Rosalind Research`,
          description: `Name of the frontier model offering in the informational Rosalind access overview. This is a static label, not a selectable option. The other offering is Rosalind Discovery. Preserve the product name.`,
        }),
      })),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsxs)(`dl`, {
        className: `my-3 grid gap-3 sm:grid-cols-2`,
        children: [
          u,
          (0, X.jsxs)(`div`, {
            className: `grid content-start gap-1 rounded-xl border border-default p-4`,
            children: [
              d,
              (0, X.jsx)(`dd`, {
                className: `text-sm leading-relaxed text-secondary`,
                children: (0, X.jsx)(M, {
                  id: `chatgpt.rosalind_access.tier.overview.research.task_focus.description`,
                  defaultMessage: `For complex scientific research requiring advanced reasoning.`,
                  description: `Short static description of Rosalind Research in the access application's informational tier overview. It describes the offering's focus on complex scientific work requiring advanced reasoning, contrasted with Discovery for everyday tasks. Applicants do not select a tier, and privacy choices are separate. Plain text with no placeholders.`,
                }),
              }),
            ],
          }),
        ],
      })),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] === n.researchUpgradeRequests
    ? (p = t[9])
    : ((p =
        n.researchUpgradeRequests &&
        (0, X.jsx)(`p`, {
          className: `text-sm leading-relaxed text-secondary`,
          children: (0, X.jsx)(M, {
            id: `chatgpt.rosalind_access.tier.overview.upgrade.help_text`,
            defaultMessage: `If you're approved for Discovery but need Research, you can request an upgrade. The upgrade form will request more information for further review.`,
            description: `Helper text in the Rosalind application explaining the upgrade path when the backend supports upgrade requests. Applicants approved for Discovery can submit more scientific use-case information for Research eligibility review. This is informational, not a clickable control or a promise of approval. Discovery and Research are product names.`,
          }),
        })),
      (t[8] = n.researchUpgradeRequests),
      (t[9] = p));
  let m;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsx)(`p`, {
        className: `text-sm leading-relaxed text-secondary`,
        children: (0, X.jsx)(M, {
          id: `chatgpt.rosalind_access.tier.overview.privacy.help_text`,
          defaultMessage: `Your privacy and data-retention choices are separate from your model access tier.`,
          description: `Helper text beneath the informational Discovery and Research overview in the Rosalind application. It clarifies that the model tier determined by eligibility review does not determine privacy or data-retention settings.`,
        }),
      })),
      (t[10] = m))
    : (m = t[10]);
  let h;
  return (
    t[11] !== i || t[12] !== p || t[13] !== s
      ? ((h = (0, X.jsxs)(`section`, {
          "aria-labelledby": i,
          className: `flex flex-col gap-3`,
          children: [s, c, f, p, m],
        })),
        (t[11] = i),
        (t[12] = p),
        (t[13] = s),
        (t[14] = h))
      : (h = t[14]),
    h
  );
}
var Lt, Rt, X;
function zt() {
  return (zt = e(() => {
    ((Lt = h()), (Rt = r()), x(), (X = c()));
  }))();
}
function Bt(e) {
  let t = (0, Kt.c)(32),
    n = e.selectedOrganizationId,
    r;
  if (t[0] !== e.organizations || t[1] !== n) {
    let i;
    (t[3] === n ? (i = t[4]) : ((i = (e) => e.id === n), (t[3] = n), (t[4] = i)),
      (r = e.organizations.find(i)),
      (t[0] = e.organizations),
      (t[1] = n),
      (t[2] = r));
  } else r = t[2];
  let i = r,
    [a, o] = (0, Z.useState)(null),
    s;
  t[5] !== e || t[6] !== n
    ? ((s = (t) => {
        t !== n && (o(null), e.onSelectOrganization(t));
      }),
      (t[5] = e),
      (t[6] = n),
      (t[7] = s))
    : (s = t[7]);
  let c;
  t[8] !== e.contextPending ||
  t[9] !== e.embedded ||
  t[10] !== e.organizationSource ||
  t[11] !== e.organizations ||
  t[12] !== n ||
  t[13] !== s
    ? ((c = (0, Q.jsx)(Le, {
        variant: `cards`,
        embedded: e.embedded,
        organizationSource: e.organizationSource,
        organizations: e.organizations,
        organizationId: n,
        lookupPending: e.contextPending,
        onSelectOrganization: s,
      })),
      (t[8] = e.contextPending),
      (t[9] = e.embedded),
      (t[10] = e.organizationSource),
      (t[11] = e.organizations),
      (t[12] = n),
      (t[13] = s),
      (t[14] = c))
    : (c = t[14]);
  let l;
  t[15] !== a || t[16] !== e.organizationActions || t[17] !== n
    ? ((l = e.organizationActions?.(a !== n)),
      (t[15] = a),
      (t[16] = e.organizationActions),
      (t[17] = n),
      (t[18] = l))
    : (l = t[18]);
  let u;
  t[19] !== c || t[20] !== l
    ? ((u = (0, Q.jsxs)(Q.Fragment, { children: [c, l] })), (t[19] = c), (t[20] = l), (t[21] = u))
    : (u = t[21]);
  let d = u,
    f;
  t[22] === n
    ? (f = t[23])
    : ((f = (e) => {
        e.target instanceof HTMLElement &&
          e.target.getAttribute(`name`) !== `openai-organization-card` &&
          o(n);
      }),
      (t[22] = n),
      (t[23] = f));
  let p = `${n}:${e.existingApplication?.bioagentsApplicationReference ?? `new`}:${e.existingApplication?.requestedResearchMode ?? `new`}`,
    m;
  t[24] !== d || t[25] !== e || t[26] !== i || t[27] !== p
    ? ((m = (0, Q.jsx)(Vt, { ...e, organization: i, organizationPicker: d }, p)),
      (t[24] = d),
      (t[25] = e),
      (t[26] = i),
      (t[27] = p),
      (t[28] = m))
    : (m = t[28]);
  let h;
  return (
    t[29] !== f || t[30] !== m
      ? ((h = (0, Q.jsx)(`div`, {
          className: `flex flex-col gap-6 rounded-2xl border border-default bg-surface p-4.5 text-sm text-default sm:p-6`,
          onChangeCapture: f,
          children: m,
        })),
        (t[29] = f),
        (t[30] = m),
        (t[31] = h))
      : (h = t[31]),
    h
  );
}
function Vt(e) {
  let t = (0, Kt.c)(177),
    n = re(),
    [r, a] = (0, Z.useState)(0),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = []), (t[0] = s)) : (s = t[0]);
  let c;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = []), (t[1] = c)) : (c = t[1]);
  let u, d;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = []), (d = []), (t[2] = u), (t[3] = d))
    : ((u = t[2]), (d = t[3]));
  let f =
      e.existingApplication?.requestedResearchMode === `research_zdr` ? `research_zdr` : `research_non_zdr`,
    p;
  t[4] === f
    ? (p = t[5])
    : ((p = {
        products: s,
        researchPurpose: ``,
        researchScopes: c,
        primaryCountry: ``,
        additionalLocations: null,
        additionalCountries: u,
        selectedSafeguards: d,
        otherSafeguardDetails: ``,
        requestedResearchMode: f,
        confirmResearchSafeguards: !1,
        certifyAccuracy: !1,
        certifyAuthority: !1,
      }),
      (t[4] = f),
      (t[5] = p));
  let [h, g] = (0, Z.useState)(p),
    [v, b] = (0, Z.useState)(null),
    [x, S] = (0, Z.useState)(null),
    [C, w] = (0, Z.useState)(!1),
    [T, E] = (0, Z.useState)(!1),
    [D, O] = (0, Z.useState)(null),
    [k, A] = (0, Z.useState)(null),
    [te, j] = (0, Z.useState)(null),
    [ne, se] = (0, Z.useState)(null),
    N = (0, Z.useRef)(null),
    P = (0, Z.useRef)(0),
    F,
    I;
  (t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = () => () => {
        P.current += 1;
      }),
      (I = []),
      (t[6] = F),
      (t[7] = I))
    : ((F = t[6]), (I = t[7])),
    (0, Z.useEffect)(F, I));
  let le;
  t[8] === D ? (le = t[9]) : ((le = D != null && wt.has(D)), (t[8] = D), (t[9] = le));
  let L = le,
    R =
      e.existingApplication == null &&
      e.contextAvailable &&
      !e.contextPending &&
      !e.workspaceHandoffRequired &&
      e.submissionEnabled &&
      e.organization?.submissionEligible === !0,
    z = R,
    ue = e.capabilities?.discoveryApplications ? ve : `gpt-rosalind-access-v2`,
    de = e.organization?.id ?? ``,
    B = te === de,
    fe = {
      organizationId: e.organization?.id ?? ``,
      products: h.products,
      researchPurpose: h.researchPurpose.trim(),
      researchScopes: h.researchScopes,
      primaryCountry: h.primaryCountry,
      additionalLocations: h.additionalLocations,
      ...(h.additionalLocations === `yes` ? { additionalCountries: h.additionalCountries } : {}),
      selectedSafeguards: h.selectedSafeguards,
      ...(h.selectedSafeguards?.includes(`other`)
        ? { otherSafeguardDetails: h.otherSafeguardDetails.trim() }
        : {}),
      confirmResearchSafeguards: h.confirmResearchSafeguards,
      certifyAccuracy: B && h.certifyAccuracy,
      certifyAuthority: B && h.certifyAuthority,
    },
    pe = { ...fe, requestedEnhancedPrivacy: h.requestedResearchMode === `research_zdr` },
    he = e.capabilities?.discoveryApplications
      ? pe
      : { ...fe, requestedResearchMode: h.requestedResearchMode },
    ge = JSON.stringify(he),
    ye = k?.inquiryId,
    be =
      ne &&
      z &&
      ne.organizationId === de &&
      ne.formSchemaVersion === ue &&
      ne.payload === ge &&
      ne.personaInquiryId === ye
        ? ne
        : null,
    xe = _e(
      r === 3
        ? pe
        : {
            ...pe,
            confirmResearchSafeguards: r < 2 || h.confirmResearchSafeguards,
            certifyAccuracy: !0,
            certifyAuthority: !0,
          },
    ),
    Se = {};
  for (let e of xe) Jt[e.field] === r && !Se[e.field] && (Se[e.field] = Te(e, n));
  r === -1 &&
    !L &&
    (Se.persona =
      D === `pending`
        ? n.formatMessage(G.personaPending)
        : D === `expired`
          ? n.formatMessage(G.personaExpired)
          : n.formatMessage(G.personaRequired));
  let V = v === r ? Se : {},
    Ce;
  t[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ce = [0, -1, 1, 2, 3]), (t[10] = Ce)) : (Ce = t[10]);
  let we = Ce,
    H = r === -1 ? Ct : Ne[r],
    U = C || T,
    je;
  t[11] === r
    ? (je = t[12])
    : ((je = function (e) {
        e !== r &&
          (a(e),
          b(null),
          S(null),
          requestAnimationFrame(() =>
            document.getElementById(`rosalind-step-heading-${e}`)?.focus({ preventScroll: !0 }),
          ));
      }),
      (t[11] = r),
      (t[12] = je));
  let Pe = je,
    Le;
  t[13] !== B || t[14] !== de
    ? ((Le = function (e, t) {
        let n = e === `certifyAccuracy` || e === `certifyAuthority`;
        (g((r) => ({ ...r, ...(!n || !B ? { certifyAccuracy: !1, certifyAuthority: !1 } : {}), [e]: t })),
          j(n ? de : null),
          S(null));
      }),
      (t[13] = B),
      (t[14] = de),
      (t[15] = Le))
    : (Le = t[15]);
  let W = Le,
    ze = function () {
      if (U) return;
      if (!R) {
        S(G.organizationEligibilityUnavailable);
        return;
      }
      if (Object.keys(Se).length) {
        (b(r), Be(r));
        return;
      }
      let e = Math.min(r + 1, 3);
      (r === 0 ? (e = -1) : r === -1 && (e = 1), Pe(e));
    },
    Ve = function () {
      if (!U) {
        if (!z) {
          S(G.submissionUnavailable);
          return;
        }
        if (!Gt(he, ue) || !L || !k) {
          let e = _e(pe).find(Wt),
            t = e ? (Jt[e.field] ?? 3) : 3;
          (L || (t = -1), Pe(t), b(t), Be(t));
          return;
        }
        se({
          body: he,
          payload: ge,
          organizationId: de,
          formSchemaVersion: ue,
          organizationName: e.organization?.name ?? ``,
          personaInquiryId: k.inquiryId,
        });
      }
    },
    He = async function () {
      if (C || !be) return;
      if (!z || !Gt(he, ue) || !L || !k) {
        (se(null), S(G.submissionUnavailable));
        return;
      }
      let t = be;
      try {
        (N.current?.payload !== t.payload || N.current.formSchemaVersion !== t.formSchemaVersion) &&
          (N.current = {
            key: crypto.randomUUID(),
            payload: t.payload,
            formSchemaVersion: t.formSchemaVersion,
          });
      } catch {
        (se(null), S(G.secureSubmissionFailed));
        return;
      }
      let n = N.current;
      if (!n) return;
      let r = (P.current += 1);
      (w(!0),
        S(null),
        se(null),
        await (async () => {
          try {
            let i = await e.submitApplication({
              body: t.body,
              headers: {
                "Idempotency-Key": n.key,
                "X-Rosalind-Form-Schema-Version": n.formSchemaVersion,
                "X-Rosalind-Persona-Inquiry-Id": t.personaInquiryId,
              },
            });
            if (r !== P.current) return;
            if (!i.submitted) {
              (i.code === `idempotency_conflict` && (N.current = null),
                i.code === `organization_unavailable` || i.code === `submission_policy_changed`
                  ? S(G.organizationUnavailable)
                  : i.code === `application_unprocessable`
                    ? S(G.applicationUnprocessable)
                    : i.code === `application_history_limit`
                      ? S(G.applicationHistoryLimit)
                      : S(G.submissionFailed));
              return;
            }
            i.organizationId === t.body.organizationId &&
            /^[0-9a-f]{64}$/.test(i.bioagentsApplicationReference)
              ? ((N.current = null), e.onApplicationSubmitted(i))
              : S(G.submissionUnconfirmed);
          } catch {
            r === P.current && S(G.submissionUnconfirmed);
          }
        })().finally(() => {
          r === P.current && w(!1);
        }));
    },
    Ue = G.organizationEligibilityUnavailable;
  e.organizations.length
    ? e.contextAvailable
      ? e.submissionEnabled
        ? e.organization?.submissionEligible === !1 && (Ue = G.organizationNotEligible)
        : (Ue = G.submissionUnavailable)
      : (Ue = G.organizationEligibilityUnavailable)
    : (Ue = G.noOrganizations);
  let We;
  t[16] === r
    ? (We = t[17])
    : ((We = r - 1), r === -1 ? (We = 0) : r === 1 && (We = -1), (t[16] = r), (t[17] = We));
  let Ke = r === 3 ? G.submit : G.next;
  C && (Ke = G.submitting);
  let qe = String(r),
    Je;
  t[18] === n ? (Je = t[19]) : ((Je = n.formatMessage(G.applicationProgress)), (t[18] = n), (t[19] = Je));
  let Ye;
  t[20] !== U || t[21] !== r
    ? ((Ye = we.map((e, t) => ({
        id: String(e),
        label: (0, Q.jsx)(M, { ...(e === -1 ? Ct.title : Ne[e].title) }),
        disabled: U || t > we.indexOf(r),
      }))),
      (t[20] = U),
      (t[21] = r),
      (t[22] = Ye))
    : (Ye = t[22]);
  let Xe;
  t[23] === Pe ? (Xe = t[24]) : ((Xe = (e) => Pe(Number(e))), (t[23] = Pe), (t[24] = Xe));
  let Ze;
  t[25] !== qe || t[26] !== Je || t[27] !== Ye || t[28] !== Xe
    ? ((Ze = (0, Q.jsx)(Ge, { currentStep: qe, ariaLabel: Je, steps: Ye, onStepSelect: Xe })),
      (t[25] = qe),
      (t[26] = Je),
      (t[27] = Ye),
      (t[28] = Xe),
      (t[29] = Ze))
    : (Ze = t[29]);
  let Qe = Ze;
  if (r === 0) {
    let n;
    t[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(`span`, {
          className: `sr-only`,
          children: (0, Q.jsx)(M, { ...G.organizationHeading }),
        })),
        (t[30] = n))
      : (n = t[30]);
    let r;
    t[31] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsxs)(`h2`, {
          className: `text-heading-sm leading-6 font-medium select-none`,
          id: `rosalind-step-heading-0`,
          tabIndex: -1,
          children: [
            n,
            (0, Q.jsx)(`span`, { "aria-hidden": `true`, children: (0, Q.jsx)(M, { ...G.yourOrganization }) }),
          ],
        })),
        (t[31] = r))
      : (r = t[31]);
    let a;
    t[32] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-1`,
          children: [
            r,
            (0, Q.jsx)(`p`, {
              className: `text-sm leading-5 text-secondary select-text`,
              children: (0, Q.jsx)(M, { ...G.organizationVisualDescription }),
            }),
          ],
        })),
        (t[32] = a))
      : (a = t[32]);
    let o;
    t[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, Q.jsx)(`h3`, {
          className: `text-sm leading-5 font-medium select-none`,
          children: (0, Q.jsx)(M, { ...G.organizationStep }),
        })),
        (t[33] = o))
      : (o = t[33]);
    let s;
    t[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, Q.jsx)(`p`, {
          className: `text-sm leading-5 text-secondary select-text`,
          children: (0, Q.jsx)(M, { ...G.organizationVerificationDescription }),
        })),
        (t[34] = s))
      : (s = t[34]);
    let c;
    t[35] === e.organizationPicker
      ? (c = t[36])
      : ((c = (0, Q.jsxs)(`section`, {
          className: `flex min-w-0 flex-col gap-3`,
          children: [o, s, e.organizationPicker],
        })),
        (t[35] = e.organizationPicker),
        (t[36] = c));
    let l;
    t[37] === e.contextPending
      ? (l = t[38])
      : ((l =
          e.contextPending &&
          (0, Q.jsx)(`p`, {
            className: `text-xs leading-4.5 text-secondary select-text`,
            role: `status`,
            children: (0, Q.jsx)(M, { ...G.organizationsLoading }),
          })),
        (t[37] = e.contextPending),
        (t[38] = l));
    let u;
    t[39] !== R ||
    t[40] !== e.contextPending ||
    t[41] !== e.existingApplication ||
    t[42] !== e.workspaceHandoffRequired ||
    t[43] !== Ue
      ? ((u =
          !R &&
          !e.contextPending &&
          !e.existingApplication &&
          (0, Q.jsx)(`p`, {
            className: `text-xs leading-4.5 text-secondary select-text`,
            role: `alert`,
            children: e.workspaceHandoffRequired
              ? (0, Q.jsx)(M, {
                  id: `codex.rosalind.workspaceRecovery.required`,
                  defaultMessage: `Open this organization’s workspace to continue`,
                  description: `Instruction on the Rosalind organization step while a verified business workspace needs to be selected or authenticated before the application can continue`,
                })
              : (0, Q.jsx)(M, { ...Ue }),
          })),
        (t[39] = R),
        (t[40] = e.contextPending),
        (t[41] = e.existingApplication),
        (t[42] = e.workspaceHandoffRequired),
        (t[43] = Ue),
        (t[44] = u))
      : (u = t[44]);
    let d;
    t[45] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, Q.jsx)(`legend`, {
          className: `text-sm leading-5 font-medium select-none`,
          children: (0, Q.jsx)(M, { ...G.researchModeVisualHeading }),
        })),
        (t[45] = d))
      : (d = t[45]);
    let f;
    t[46] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, Q.jsx)(`p`, {
          className: `text-sm leading-5 text-secondary select-text`,
          children: (0, Q.jsx)(M, { ...G.researchModeVisualDescription }),
        })),
        (t[46] = f))
      : (f = t[46]);
    let p;
    t[47] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((p = [`research_non_zdr`, `research_zdr`]), (t[47] = p))
      : (p = t[47]);
    let m;
    t[48] !== h || t[49] !== R || t[50] !== W
      ? ((m = (0, Q.jsx)(`div`, {
          className: `flex flex-wrap gap-2.5`,
          children: p.map((e) =>
            (0, Q.jsxs)(
              `label`,
              {
                className: `relative flex cursor-interaction items-center gap-2.5 rounded-xl border border-default p-3 text-sm has-focus-visible:ring-2 has-focus-visible:ring-ring has-disabled:cursor-default has-disabled:opacity-60 data-[state=selected]:border-text`,
                "data-state": h.requestedResearchMode === e ? `selected` : `unselected`,
                children: [
                  (0, Q.jsx)(`input`, {
                    className: `size-4 appearance-auto accent-current`,
                    type: `radio`,
                    name: `requested-research-mode`,
                    value: e,
                    checked: h.requestedResearchMode === e,
                    disabled: !R,
                    onChange: () => W(`requestedResearchMode`, e),
                  }),
                  (0, Q.jsxs)(`span`, {
                    className: `flex min-w-0 flex-col gap-0.5`,
                    children: [
                      (0, Q.jsx)(`span`, {
                        className: `text-sm font-medium`,
                        children: (0, Q.jsx)(M, {
                          ...(e === `research_non_zdr` ? G.nonZdrResearchMode : G.zdrResearchMode),
                        }),
                      }),
                      e === `research_non_zdr` &&
                        (0, Q.jsx)(`span`, {
                          className: `sr-only`,
                          children: (0, Q.jsx)(M, { ...G.nonZdrResearchModeDescription }),
                        }),
                    ],
                  }),
                ],
              },
              e,
            ),
          ),
        })),
        (t[48] = h),
        (t[49] = R),
        (t[50] = W),
        (t[51] = m))
      : (m = t[51]);
    let g;
    t[52] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((g = (0, Q.jsxs)(`div`, {
          className: `flex items-start gap-2.5 rounded-xl border border-default bg-primary-soft p-4 text-sm leading-5 text-secondary`,
          role: `note`,
          children: [
            (0, Q.jsx)(i, {}),
            (0, Q.jsxs)(`div`, {
              children: [
                (0, Q.jsx)(`p`, { children: (0, Q.jsx)(M, { ...G.privacyApprovalNotice }) }),
                (0, Q.jsx)(`p`, { children: (0, Q.jsx)(Mt, { message: G.zdrResearchModeDescription }) }),
              ],
            }),
          ],
        })),
        (t[52] = g))
      : (g = t[52]);
    let _;
    t[53] === m
      ? (_ = t[54])
      : ((_ = (0, Q.jsxs)(`fieldset`, { className: `flex min-w-0 flex-col gap-3`, children: [d, f, m, g] })),
        (t[53] = m),
        (t[54] = _));
    let v;
    t[55] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (0, Q.jsx)(`span`, { "aria-hidden": `true` })), (t[55] = v))
      : (v = t[55]);
    let y = !R,
      b,
      S;
    t[56] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((b = (0, Q.jsx)(M, { ...G.next })), (S = (0, Q.jsx)(ae, {})), (t[56] = b), (t[57] = S))
      : ((b = t[56]), (S = t[57]));
    let C;
    t[58] !== ze || t[59] !== y
      ? ((C = (0, Q.jsxs)(`div`, {
          className: `mt-1 flex items-center justify-end gap-3 border-t border-default pt-5`,
          children: [
            v,
            (0, Q.jsxs)(ee, {
              color: `primary`,
              size: `dialogAction`,
              type: `button`,
              disabled: y,
              onClick: ze,
              children: [b, S],
            }),
          ],
        })),
        (t[58] = ze),
        (t[59] = y),
        (t[60] = C))
      : (C = t[60]);
    let w;
    t[61] === e.existingApplication
      ? (w = t[62])
      : ((w = e.existingApplication && (0, Q.jsx)(ft, { application: e.existingApplication })),
        (t[61] = e.existingApplication),
        (t[62] = w));
    let T;
    t[63] !== R ||
    t[64] !== e.contextAvailable ||
    t[65] !== e.contextPending ||
    t[66] !== e.existingApplication ||
    t[67] !== e.onRetryContext ||
    t[68] !== e.submissionEnabled
      ? ((T =
          !e.existingApplication &&
          !R &&
          !e.contextPending &&
          (!e.contextAvailable || e.submissionEnabled) &&
          (0, Q.jsx)(ee, {
            color: `secondary`,
            size: `dialogAction`,
            type: `button`,
            onClick: e.onRetryContext,
            children: (0, Q.jsx)(M, { ...G.retryOrganizationLookup }),
          })),
        (t[63] = R),
        (t[64] = e.contextAvailable),
        (t[65] = e.contextPending),
        (t[66] = e.existingApplication),
        (t[67] = e.onRetryContext),
        (t[68] = e.submissionEnabled),
        (t[69] = T))
      : (T = t[69]);
    let E;
    t[70] === x
      ? (E = t[71])
      : ((E =
          x &&
          (0, Q.jsx)(`p`, {
            className: `text-sm text-danger`,
            role: `alert`,
            children: (0, Q.jsx)(M, { ...x }),
          })),
        (t[70] = x),
        (t[71] = E));
    let D;
    t[72] !== c ||
    t[73] !== l ||
    t[74] !== u ||
    t[75] !== _ ||
    t[76] !== C ||
    t[77] !== w ||
    t[78] !== T ||
    t[79] !== E
      ? ((D = (0, Q.jsxs)(`div`, {
          className: `flex min-w-0 flex-col gap-6`,
          children: [c, l, u, _, C, w, T, E],
        })),
        (t[72] = c),
        (t[73] = l),
        (t[74] = u),
        (t[75] = _),
        (t[76] = C),
        (t[77] = w),
        (t[78] = T),
        (t[79] = E),
        (t[80] = D))
      : (D = t[80]);
    let O;
    return (
      t[81] !== Qe || t[82] !== D
        ? ((O = (0, Q.jsxs)(Q.Fragment, { children: [Qe, a, D] })), (t[81] = Qe), (t[82] = D), (t[83] = O))
        : (O = t[83]),
      O
    );
  }
  let $e = (e) => {
      (e.preventDefault(), r === 3 ? Ve() : ze());
    },
    et = `rosalind-step-heading-${r}`,
    tt;
  t[84] === H.heading
    ? (tt = t[85])
    : ((tt = (0, Q.jsx)(`span`, { className: `sr-only`, children: (0, Q.jsx)(M, { ...H.heading }) })),
      (t[84] = H.heading),
      (t[85] = tt));
  let nt;
  t[86] === H.visualHeading
    ? (nt = t[87])
    : ((nt = (0, Q.jsx)(`span`, { "aria-hidden": `true`, children: (0, Q.jsx)(M, { ...H.visualHeading }) })),
      (t[86] = H.visualHeading),
      (t[87] = nt));
  let rt;
  t[88] !== et || t[89] !== tt || t[90] !== nt
    ? ((rt = (0, Q.jsxs)(`h2`, {
        className: `text-heading-sm leading-6 font-medium select-none`,
        id: et,
        tabIndex: -1,
        children: [tt, nt],
      })),
      (t[88] = et),
      (t[89] = tt),
      (t[90] = nt),
      (t[91] = rt))
    : (rt = t[91]);
  let it;
  t[92] === H.visualDescription
    ? (it = t[93])
    : ((it = (0, Q.jsx)(`p`, {
        className: `text-sm text-secondary`,
        children: (0, Q.jsx)(M, { ...H.visualDescription }),
      })),
      (t[92] = H.visualDescription),
      (t[93] = it));
  let at;
  t[94] !== rt || t[95] !== it
    ? ((at = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [rt, it] })),
      (t[94] = rt),
      (t[95] = it),
      (t[96] = at))
    : (at = t[96]);
  let ot =
      r === -1 &&
      e.organization &&
      (0, Q.jsxs)(`section`, {
        className: `flex flex-col gap-3`,
        "data-validation-field": `persona`,
        children: [
          (0, Q.jsx)(
            Et,
            {
              organizationId: e.organization.id,
              previousStatus: D,
              startPersona: e.startPersona,
              checkPersona: e.checkPersona,
              onStatusChange: (e, t) => {
                (O(e), A(t));
              },
              onActivityChange: E,
            },
            e.organization.id,
          ),
          (0, Q.jsx)(De, { field: `persona`, error: V.persona }),
        ],
      }),
    st =
      r === 1 &&
      (0, Q.jsxs)(Q.Fragment, {
        children: [
          (0, Q.jsx)(It, { capabilities: e.capabilities }),
          (0, Q.jsxs)(`fieldset`, {
            className: `flex min-w-0 flex-col gap-3`,
            disabled: U,
            "data-validation-field": `products`,
            ...Ae(`products`, V.products),
            children: [
              (0, Q.jsx)(`legend`, {
                className: `text-sm leading-5 font-medium select-none`,
                children: (0, Q.jsx)(M, { ...G.requestedAccessVisualHeading }),
              }),
              (0, Q.jsx)(`p`, {
                className: `text-sm leading-5 text-secondary select-text`,
                children: (0, Q.jsx)(M, { ...G.requestedAccessVisualDescription }),
              }),
              (0, Q.jsx)(`div`, {
                className: `flex flex-col gap-2.5`,
                children: Oe.map((e) =>
                  (0, Q.jsxs)(
                    `label`,
                    {
                      htmlFor: `product-${e.id}`,
                      className: `relative grid min-h-18 cursor-interaction grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-0.5 rounded-xl border border-default p-3 select-none data-[state=selected]:border-text`,
                      "data-state": h.products.includes(e.id) ? `selected` : `unselected`,
                      children: [
                        (0, Q.jsx)(`span`, {
                          className: `row-span-2 flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft`,
                          children: (0, Q.jsx)(e.Icon, {}),
                        }),
                        (0, Q.jsxs)(`span`, {
                          className: `text-sm font-medium`,
                          children: [
                            (0, Q.jsx)(`span`, {
                              className: `sr-only`,
                              children: (0, Q.jsx)(M, { ...e.title }),
                            }),
                            (0, Q.jsx)(`span`, {
                              "aria-hidden": `true`,
                              children: (0, Q.jsx)(M, { ...e.visualTitle }),
                            }),
                          ],
                        }),
                        (0, Q.jsx)(`span`, {
                          className: `col-start-2 text-xs leading-5 text-secondary select-text`,
                          children: (0, Q.jsx)(M, { ...e.description }),
                        }),
                        (0, Q.jsx)(m, {
                          id: `product-${e.id}`,
                          name: `product-${e.id}`,
                          className: `col-start-3 row-span-2 row-start-1`,
                          checked: h.products.includes(e.id),
                          disabled: U,
                          onCheckedChange: (t) =>
                            W(`products`, t ? [...h.products, e.id] : h.products.filter((t) => t !== e.id)),
                          size: `sm`,
                          variant: `choice`,
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
              (0, Q.jsx)(De, { field: `products`, error: V.products }),
            ],
          }),
          (0, Q.jsx)(Me, {
            capabilities: e.capabilities,
            researchPurpose: h.researchPurpose,
            researchScopes: h.researchScopes,
            fieldErrors: V,
            disabled: U,
            setResearchPurpose: (e) => W(`researchPurpose`, e),
            toggleResearchScope: (e, t) => {
              let n = h.researchScopes.filter((t) => t !== e);
              (t &&
                (n =
                  e === `none` ? [`none`] : [...h.researchScopes.filter((t) => t !== `none` && t !== e), e]),
                W(`researchScopes`, n));
            },
          }),
        ],
      }),
    ct;
  t[97] !== h || t[98] !== U || t[99] !== W || t[100] !== V || t[101] !== r
    ? ((ct =
        r === 2 &&
        (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsxs)(`div`, {
              className: `flex flex-col gap-2`,
              "data-validation-field": `primaryCountry`,
              children: [
                (0, Q.jsx)(`label`, {
                  className: `text-sm leading-5 font-medium select-none`,
                  htmlFor: `primary-country`,
                  children: (0, Q.jsx)(M, { ...G.primaryCountry }),
                }),
                (0, Q.jsx)(Re, {
                  value: h.primaryCountry,
                  disabled: U,
                  error: V.primaryCountry,
                  onChange: (e) => {
                    (W(`primaryCountry`, e),
                      g((t) => ({
                        ...t,
                        additionalCountries: t.additionalCountries.filter((t) => t !== e),
                      })));
                  },
                }),
                (0, Q.jsx)(De, { field: `primaryCountry`, error: V.primaryCountry }),
              ],
            }),
            (0, Q.jsxs)(`fieldset`, {
              className: `flex min-w-0 flex-col gap-3`,
              disabled: U,
              "data-validation-field": `additionalLocations`,
              ...Ae(`additionalLocations`, V.additionalLocations),
              children: [
                (0, Q.jsx)(`legend`, {
                  className: `text-sm leading-5 font-medium select-none`,
                  children: (0, Q.jsx)(M, { ...G.additionalLocations }),
                }),
                [`no`, `yes`, `unsure`].map((e) =>
                  (0, Q.jsx)(
                    Ee,
                    {
                      id: `additional-locations-${e}`,
                      checked: h.additionalLocations === e,
                      onChange: () => {
                        (W(`additionalLocations`, e), e !== `yes` && g(Ut));
                      },
                      title: (0, Q.jsx)(M, {
                        ...{ yes: G.additionalYes, no: G.additionalNo, unsure: G.additionalUnsure }[e],
                      }),
                    },
                    e,
                  ),
                ),
                (0, Q.jsx)(De, { field: `additionalLocations`, error: V.additionalLocations }),
              ],
            }),
            h.additionalLocations === `yes` &&
              (0, Q.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                "data-validation-field": `additionalCountries`,
                children: [
                  (0, Q.jsx)(`label`, {
                    className: `text-sm leading-5 font-medium select-none`,
                    htmlFor: `additional-countries`,
                    children: (0, Q.jsx)(M, { ...G.additionalCountries }),
                  }),
                  (0, Q.jsx)(Re, {
                    id: `additional-countries`,
                    multiple: !0,
                    selectedCountries: h.additionalCountries,
                    excludedCountry: h.primaryCountry,
                    disabled: U,
                    error: V.additionalCountries,
                    onChange: (e) => {
                      h.additionalCountries.includes(e)
                        ? W(
                            `additionalCountries`,
                            h.additionalCountries.filter((t) => t !== e),
                          )
                        : h.additionalCountries.length < me.additionalCountries.max &&
                          W(`additionalCountries`, [...h.additionalCountries, e]);
                    },
                  }),
                  (0, Q.jsx)(De, { field: `additionalCountries`, error: V.additionalCountries }),
                ],
              }),
            (0, Q.jsxs)(`fieldset`, {
              className: `flex min-w-0 flex-col gap-3`,
              disabled: U,
              "data-validation-field": `selectedSafeguards`,
              children: [
                (0, Q.jsx)(`legend`, {
                  className: `text-sm leading-5 font-medium select-none`,
                  children: (0, Q.jsx)(M, { ...G.safeguardsVisualLabel }),
                }),
                Ie.map((e) =>
                  (0, Q.jsx)(
                    Ee,
                    {
                      id: `safeguard-${e.id}`,
                      checked: h.selectedSafeguards?.includes(e.id) ?? !1,
                      onChange: (t) => {
                        (W(
                          `selectedSafeguards`,
                          t
                            ? [...(h.selectedSafeguards ?? []), e.id]
                            : h.selectedSafeguards?.filter((t) => t !== e.id),
                        ),
                          e.id === `other` && !t && g(Ht));
                      },
                      title: (0, Q.jsx)(M, { ...e.title }),
                    },
                    e.id,
                  ),
                ),
              ],
            }),
            h.selectedSafeguards?.includes(`other`) &&
              (0, Q.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                "data-validation-field": `otherSafeguardDetails`,
                children: [
                  (0, Q.jsx)(`label`, {
                    className: `text-sm leading-5 font-medium select-none`,
                    htmlFor: `other-safeguard-details`,
                    children: (0, Q.jsx)(M, { ...G.otherSafeguards }),
                  }),
                  (0, Q.jsx)(lt, {
                    id: `other-safeguard-details`,
                    name: `other-safeguard-details`,
                    variant: `outline`,
                    size: `2xl`,
                    resize: `vertical`,
                    maxHeight: `none`,
                    value: h.otherSafeguardDetails,
                    onChange: (e) => W(`otherSafeguardDetails`, e.target.value),
                    maxLength: me.otherSafeguardDetails.max,
                    disabled: U,
                    ...Ae(`otherSafeguardDetails`, V.otherSafeguardDetails),
                  }),
                  (0, Q.jsx)(De, { field: `otherSafeguardDetails`, error: V.otherSafeguardDetails }),
                ],
              }),
            (0, Q.jsxs)(`div`, {
              className: `flex flex-col gap-2`,
              "data-validation-field": `confirmResearchSafeguards`,
              children: [
                (0, Q.jsx)(Ee, {
                  id: `confirm-research-safeguards`,
                  checked: h.confirmResearchSafeguards,
                  onChange: (e) => W(`confirmResearchSafeguards`, e),
                  invalid: !!V.confirmResearchSafeguards,
                  describedBy: V.confirmResearchSafeguards
                    ? `application-error-confirmResearchSafeguards`
                    : void 0,
                  title: (0, Q.jsx)(M, { ...G.safeguardsConfirmation }),
                }),
                (0, Q.jsx)(De, { field: `confirmResearchSafeguards`, error: V.confirmResearchSafeguards }),
              ],
            }),
          ],
        })),
      (t[97] = h),
      (t[98] = U),
      (t[99] = W),
      (t[100] = V),
      (t[101] = r),
      (t[102] = ct))
    : (ct = t[102]);
  let ut;
  t[103] !== h ||
  t[104] !== B ||
  t[105] !== U ||
  t[106] !== Pe ||
  t[107] !== W ||
  t[108] !== V ||
  t[109] !== n ||
  t[110] !== e.organization?.name ||
  t[111] !== r
    ? ((ut =
        r === 3 &&
        (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsxs)(`section`, {
              className: `flex flex-col gap-4 rounded-xl border border-default p-4`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-3`,
                  children: [
                    (0, Q.jsx)(`h3`, {
                      className: `text-sm font-medium`,
                      children: (0, Q.jsx)(M, { ...G.applicationDetailsVisualHeading }),
                    }),
                    (0, Q.jsx)(ee, {
                      color: `ghost`,
                      size: `dialogAction`,
                      type: `button`,
                      disabled: U,
                      onClick: () => Pe(0),
                      children: (0, Q.jsx)(M, { ...G.editApplication }),
                    }),
                  ],
                }),
                (0, Q.jsxs)(`dl`, {
                  className: `@container flex flex-col gap-3`,
                  children: [
                    (0, Q.jsx)(Fe, { label: G.summaryOrganization, children: e.organization?.name }),
                    (0, Q.jsx)(Fe, {
                      label: G.summaryResearchMode,
                      children: (0, Q.jsx)(M, {
                        ...(h.requestedResearchMode === `research_zdr`
                          ? G.zdrResearchMode
                          : G.nonZdrResearchMode),
                      }),
                    }),
                    (0, Q.jsx)(Fe, {
                      label: G.requestedAccess,
                      children: n.formatList(
                        Oe.filter((e) => h.products.includes(e.id)).map((e) => n.formatMessage(e.title)),
                      ),
                    }),
                    (0, Q.jsx)(Fe, { label: G.researchPurposeSummary, children: h.researchPurpose }),
                    (0, Q.jsx)(Fe, {
                      label: G.summaryScope,
                      children: n.formatList(
                        ke
                          .filter((e) => h.researchScopes.includes(e.id))
                          .map((e) => n.formatMessage(e.title)),
                      ),
                    }),
                    (0, Q.jsx)(Fe, {
                      label: G.summaryPrimaryLocation,
                      children: n.formatDisplayName(h.primaryCountry, { type: `region` }) ?? h.primaryCountry,
                    }),
                    (0, Q.jsx)(Fe, {
                      label: G.summaryAdditionalLocations,
                      children:
                        h.additionalLocations === `yes`
                          ? n.formatList(
                              h.additionalCountries.map(
                                (e) => n.formatDisplayName(e, { type: `region` }) ?? e,
                              ),
                            )
                          : (0, Q.jsx)(M, {
                              ...(h.additionalLocations === `no` ? G.none : G.additionalUnsure),
                            }),
                    }),
                    (0, Q.jsx)(Fe, {
                      label: G.safeguardsVisualLabel,
                      children: n.formatList(
                        Ie.filter((e) => h.selectedSafeguards?.includes(e.id)).map((e) =>
                          n.formatMessage(e.title),
                        ),
                      ),
                    }),
                    h.selectedSafeguards?.includes(`other`) &&
                      (0, Q.jsx)(Fe, { label: G.otherSafeguards, children: h.otherSafeguardDetails }),
                  ],
                }),
              ],
            }),
            (0, Q.jsxs)(`fieldset`, {
              className: `flex flex-col gap-3`,
              disabled: U,
              children: [
                (0, Q.jsx)(`legend`, {
                  className: `text-sm leading-5 font-medium select-none`,
                  children: (0, Q.jsx)(M, { ...G.termsVisualHeading }),
                }),
                qt.map((e) => {
                  let { key: t, label: n } = e;
                  return (0, Q.jsxs)(
                    `div`,
                    {
                      className: `flex flex-col gap-2`,
                      "data-validation-field": t,
                      children: [
                        (0, Q.jsx)(Ee, {
                          id: t,
                          checked: B && h[t],
                          onChange: (e) => W(t, e),
                          invalid: !!V[t],
                          describedBy: V[t] ? `application-error-${t}` : void 0,
                          title: (0, Q.jsx)(M, { ...n }),
                        }),
                        (0, Q.jsx)(De, { field: t, error: V[t] }),
                      ],
                    },
                    t,
                  );
                }),
              ],
            }),
            (0, Q.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, Q.jsx)(M, { ...G.reviewStarts }),
            }),
          ],
        })),
      (t[103] = h),
      (t[104] = B),
      (t[105] = U),
      (t[106] = Pe),
      (t[107] = W),
      (t[108] = V),
      (t[109] = n),
      (t[110] = e.organization?.name),
      (t[111] = r),
      (t[112] = ut))
    : (ut = t[112]);
  let dt;
  t[113] === x
    ? (dt = t[114])
    : ((dt =
        x &&
        (0, Q.jsx)(`p`, {
          className: `text-sm text-danger`,
          role: `alert`,
          children: (0, Q.jsx)(M, { ...x }),
        })),
      (t[113] = x),
      (t[114] = dt));
  let pt;
  t[115] !== R || t[116] !== e.onRetryContext
    ? ((pt =
        !R &&
        (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-2`,
          children: [
            (0, Q.jsx)(`p`, {
              className: `text-sm text-secondary`,
              role: `alert`,
              children: (0, Q.jsx)(M, { ...G.submissionUnavailable }),
            }),
            (0, Q.jsx)(ee, {
              color: `secondary`,
              size: `dialogAction`,
              type: `button`,
              onClick: e.onRetryContext,
              children: (0, Q.jsx)(M, { ...G.retryOrganizationLookup }),
            }),
          ],
        })),
      (t[115] = R),
      (t[116] = e.onRetryContext),
      (t[117] = pt))
    : (pt = t[117]);
  let K;
  t[118] !== We || t[119] !== Pe
    ? ((K = () => Pe(We)), (t[118] = We), (t[119] = Pe), (t[120] = K))
    : (K = t[120]);
  let mt, ht;
  t[121] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = (0, Q.jsx)(oe, {})), (ht = (0, Q.jsx)(M, { ...G.back })), (t[121] = mt), (t[122] = ht))
    : ((mt = t[121]), (ht = t[122]));
  let gt;
  t[123] !== U || t[124] !== K
    ? ((gt = (0, Q.jsxs)(ee, {
        color: `outline`,
        size: `dialogAction`,
        type: `button`,
        disabled: U,
        onClick: K,
        children: [mt, ht],
      })),
      (t[123] = U),
      (t[124] = K),
      (t[125] = gt))
    : (gt = t[125]);
  let _t = !(r === 3 ? z : R) || Object.keys(Se).length > 0,
    vt;
  t[126] === Ke ? (vt = t[127]) : ((vt = (0, Q.jsx)(M, { ...Ke })), (t[126] = Ke), (t[127] = vt));
  let q;
  t[128] !== r || t[129] !== C
    ? ((q = r !== 3 && !C && (0, Q.jsx)(ae, {})), (t[128] = r), (t[129] = C), (t[130] = q))
    : (q = t[130]);
  let yt;
  t[131] !== U || t[132] !== _t || t[133] !== vt || t[134] !== q
    ? ((yt = (0, Q.jsxs)(ee, {
        color: `primary`,
        size: `dialogAction`,
        type: `submit`,
        disabled: U,
        "aria-disabled": _t,
        children: [vt, q],
      })),
      (t[131] = U),
      (t[132] = _t),
      (t[133] = vt),
      (t[134] = q),
      (t[135] = yt))
    : (yt = t[135]);
  let bt;
  t[136] !== gt || t[137] !== yt
    ? ((bt = (0, Q.jsxs)(`div`, {
        className: `mt-1 flex flex-wrap items-center justify-between gap-3 border-t border-default pt-5`,
        children: [gt, yt],
      })),
      (t[136] = gt),
      (t[137] = yt),
      (t[138] = bt))
    : (bt = t[138]);
  let xt;
  t[139] !== Qe ||
  t[140] !== r ||
  t[141] !== $e ||
  t[142] !== at ||
  t[143] !== ot ||
  t[144] !== st ||
  t[145] !== ct ||
  t[146] !== ut ||
  t[147] !== dt ||
  t[148] !== pt ||
  t[149] !== bt
    ? ((xt = (0, Q.jsxs)(`form`, {
        className: `flex min-w-0 flex-col gap-6`,
        "data-step": r,
        onSubmit: $e,
        children: [Qe, at, ot, st, ct, ut, dt, pt, bt],
      })),
      (t[139] = Qe),
      (t[140] = r),
      (t[141] = $e),
      (t[142] = at),
      (t[143] = ot),
      (t[144] = st),
      (t[145] = ct),
      (t[146] = ut),
      (t[147] = dt),
      (t[148] = pt),
      (t[149] = bt),
      (t[150] = xt))
    : (xt = t[150]);
  let St = be != null,
    Tt;
  t[151] === C
    ? (Tt = t[152])
    : ((Tt = (e) => {
        !e && !C && se(null);
      }),
      (t[151] = C),
      (t[152] = Tt));
  let Dt;
  t[153] === He
    ? (Dt = t[154])
    : ((Dt = (e) => {
        (e.preventDefault(), He());
      }),
      (t[153] = He),
      (t[154] = Dt));
  let Ot;
  t[155] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ot = (0, Q.jsx)(_, {
        title: (0, Q.jsx)(ie, { children: (0, Q.jsx)(M, { ...G.confirmOrganizationHeading }) }),
      })),
      (t[155] = Ot))
    : (Ot = t[155]);
  let kt = be?.organizationName ?? ``,
    J = be?.body.organizationId ?? ``,
    At;
  t[156] !== kt || t[157] !== J
    ? ((At = (0, Q.jsx)(`p`, {
        className: `text-sm`,
        children: (0, Q.jsx)(M, {
          ...G.confirmOrganizationQuestion,
          values: { organizationName: kt, organizationId: J },
        }),
      })),
      (t[156] = kt),
      (t[157] = J),
      (t[158] = At))
    : (At = t[158]);
  let Y;
  t[159] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, Q.jsx)(`p`, {
        className: `text-sm text-secondary`,
        children: (0, Q.jsx)(M, {
          id: `chatgpt.rosalind_access.review.organization_confirmation.dialog.administrator_legal_pricing_notice_and_provisioning_approval.description`,
          defaultMessage: `If approved, an organization owner or administrator must accept the GPT-Rosalind Terms, acknowledge the pricing notice, and confirm activation before access is granted.`,
          description: `Notice in the authenticated GPT-Rosalind application submission confirmation dialog, shown to every organization member after the exact verified organization name and identifier. Explains that an independently verified organization owner or administrator must separately accept the GPT-Rosalind Terms, acknowledge the pricing notice, and confirm activation after internal application approval and before access is granted. Activation confirmation does not itself grant access. This notice is informational and does not restrict submission.`,
        }),
      })),
      (t[159] = Y))
    : (Y = t[159]);
  let jt;
  t[160] === At
    ? (jt = t[161])
    : ((jt = (0, Q.jsxs)(ce, { children: [Ot, At, Y] })), (t[160] = At), (t[161] = jt));
  let Nt;
  t[162] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Nt = (0, Q.jsx)(ee, {
        color: `secondary`,
        size: `dialogAction`,
        type: `button`,
        onClick: () => {
          se(null);
        },
        children: (0, Q.jsx)(M, { ...G.confirmOrganizationBack }),
      })),
      (t[162] = Nt))
    : (Nt = t[162]);
  let Pt;
  t[163] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pt = (0, Q.jsx)(M, { ...G.confirmOrganizationSubmit })), (t[163] = Pt))
    : (Pt = t[163]);
  let Ft;
  t[164] === C
    ? (Ft = t[165])
    : ((Ft = (0, Q.jsxs)(l, {
        children: [
          Nt,
          (0, Q.jsx)(ee, {
            color: `primary`,
            size: `dialogAction`,
            type: `submit`,
            disabled: C,
            children: Pt,
          }),
        ],
      })),
      (t[164] = C),
      (t[165] = Ft));
  let Lt;
  t[166] !== Dt || t[167] !== jt || t[168] !== Ft
    ? ((Lt = (0, Q.jsxs)(o, { as: `form`, onSubmit: Dt, children: [jt, Ft] })),
      (t[166] = Dt),
      (t[167] = jt),
      (t[168] = Ft),
      (t[169] = Lt))
    : (Lt = t[169]);
  let Rt;
  t[170] !== St || t[171] !== Tt || t[172] !== Lt
    ? ((Rt = (0, Q.jsx)(y, { open: St, onOpenChange: Tt, children: Lt })),
      (t[170] = St),
      (t[171] = Tt),
      (t[172] = Lt),
      (t[173] = Rt))
    : (Rt = t[173]);
  let X;
  return (
    t[174] !== xt || t[175] !== Rt
      ? ((X = (0, Q.jsxs)(Q.Fragment, { children: [xt, Rt] })), (t[174] = xt), (t[175] = Rt), (t[176] = X))
      : (X = t[176]),
    X
  );
}
function Ht(e) {
  return { ...e, otherSafeguardDetails: `` };
}
function Ut(e) {
  return { ...e, additionalCountries: [] };
}
function Wt(e) {
  return Jt[e.field] !== void 0;
}
function Gt(e, t) {
  return t === `gpt-rosalind-access-v2` ? ye(e) : xe(e);
}
var Kt, Z, Q, qt, Jt;
function Yt() {
  return (Yt = e(() => {
    ((Kt = h()),
      ge(),
      dt(),
      (Z = r()),
      x(),
      w(),
      te(),
      s(),
      a(),
      v(),
      Ue(),
      mt(),
      He(),
      ze(),
      H(),
      U(),
      je(),
      jt(),
      Tt(),
      Ft(),
      zt(),
      (Q = c()),
      (qt = [
        { key: `certifyAccuracy`, label: G.certifyAccuracy },
        { key: `certifyAuthority`, label: G.certifyAuthority },
      ]),
      (Jt = {
        organizationId: 0,
        requestedResearchMode: 0,
        products: 1,
        researchPurpose: 1,
        researchScopes: 1,
        primaryCountry: 2,
        additionalLocations: 2,
        additionalCountries: 2,
        selectedSafeguards: 2,
        otherSafeguardDetails: 2,
        confirmResearchSafeguards: 2,
        certifyAccuracy: 3,
        certifyAuthority: 3,
      }));
  }))();
}
function Xt(e, t) {
  let n = Object.values(e.accounts).filter(
    ({ account: e }) =>
      e.organization_id === t &&
      e.account_id != null &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e.account_id) &&
      e.structure !== `personal` &&
      !e.is_deactivated &&
      (e.account_user_role === `account-owner` ||
        e.account_user_role === `account-admin` ||
        e.account_user_role === `standard-user`) &&
      e.plan_type !== F.K12 &&
      (de(e.plan_type) || le(e.plan_type)),
  );
  return (n.find((e) => e.can_access_with_session) ?? n[0])?.account.account_id ?? void 0;
}
function Zt() {
  return (Zt = e(() => {
    B();
  }))();
}
function Qt() {
  let e = (0, sn.c)(8),
    t = L();
  if (t.isLoading) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, $.jsx)(nn, {})), (e[0] = t)) : (t = e[0]),
      t
    );
  }
  if (t.authMethod !== `chatgpt` || t.accountId == null || t.userId == null) {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, $.jsx)(rn, {
            children: (0, $.jsx)(M, {
              id: `chatgpt.rosalind_access.customer.authentication_required`,
              defaultMessage: `Sign in with your ChatGPT account to apply for GPT-Rosalind access.`,
              description: `Message on the GPT-Rosalind customer application when ChatGPT authentication is unavailable`,
            }),
          })),
          (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let n;
  e[2] !== t.accountId || e[3] !== t.userId
    ? ((n = { accountId: t.accountId, userId: t.userId }),
      (e[2] = t.accountId),
      (e[3] = t.userId),
      (e[4] = n))
    : (n = e[4]);
  let r = n,
    i = `${r.userId}:${r.accountId}`,
    a;
  return (
    e[5] !== r || e[6] !== i
      ? ((a = (0, $.jsx)($t, { identity: r }, i)), (e[5] = r), (e[6] = i), (e[7] = a))
      : (a = e[7]),
    a
  );
}
function $t(e) {
  let t = (0, sn.c)(80),
    { identity: n } = e,
    [r, i] = S(),
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = r.get(`organization_id`) ?? r.get(`organizationId`) ?? void 0), (t[0] = r), (t[1] = a));
  let o = a,
    [s, c] = (0, cn.useState)(null),
    l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = { enabled: !1 }), (t[2] = l)) : (l = t[2]);
  let { data: u, isLoading: f } = ne(R, n.accountId, l),
    p =
      u == null
        ? void 0
        : Object.values(u.accounts).find((e) => {
            let { account: t } = e;
            return t.account_id === n.accountId;
          })?.account.organization_id,
    m;
  t[3] !== n.accountId || t[4] !== n.userId
    ? ((m = [`rosalind-customer-application-discovery`, n.userId, n.accountId]),
      (t[3] = n.accountId),
      (t[4] = n.userId),
      (t[5] = m))
    : (m = t[5]);
  let h;
  t[6] === n
    ? (h = t[7])
    : ((h = (e) => {
        let { signal: t } = e;
        return Se(n, { signal: t });
      }),
      (t[6] = n),
      (t[7] = h));
  let g;
  t[8] !== m || t[9] !== h
    ? ((g = { queryKey: m, queryFn: h, retry: !1, staleTime: 0, refetchOnWindowFocus: !0 }),
      (t[8] = m),
      (t[9] = h),
      (t[10] = g))
    : (g = t[10]);
  let _ = d(g),
    v;
  t[11] !== p || t[12] !== _.data?.organizations
    ? ((v =
        _.data?.organizations.find((e) => {
          let { id: t } = e;
          return t === p;
        }) ??
        _.data?.organizations.find(tn) ??
        _.data?.organizations[0]),
      (t[11] = p),
      (t[12] = _.data?.organizations),
      (t[13] = v))
    : (v = t[13]);
  let y = o ?? v?.id ?? ``,
    b;
  t[14] !== y || t[15] !== u
    ? ((b = u == null ? void 0 : Xt(u, y)), (t[14] = y), (t[15] = u), (t[16] = b))
    : (b = t[16]);
  let x = b,
    C;
  t[17] !== n.accountId || t[18] !== x || t[19] !== u
    ? ((C =
        u != null &&
        x != null &&
        (x !== n.accountId ||
          Object.values(u.accounts).some((e) => {
            let { account: t, can_access_with_session: n } = e;
            return t.account_id === x && n === !1;
          }))),
      (t[17] = n.accountId),
      (t[18] = x),
      (t[19] = u),
      (t[20] = C))
    : (C = t[20]);
  let w = C,
    T;
  t[21] !== n.accountId || t[22] !== n.userId || t[23] !== y
    ? ((T = [`rosalind-customer-application-context`, n.userId, n.accountId, y]),
      (t[21] = n.accountId),
      (t[22] = n.userId),
      (t[23] = y),
      (t[24] = T))
    : (T = t[24]);
  let E;
  t[25] !== n || t[26] !== y
    ? ((E = (e) => {
        let { signal: t } = e;
        return Se(n, { organizationId: y, signal: t });
      }),
      (t[25] = n),
      (t[26] = y),
      (t[27] = E))
    : (E = t[27]);
  let D = y !== ``,
    O;
  t[28] !== T || t[29] !== E || t[30] !== D
    ? ((O = { queryKey: T, queryFn: E, enabled: D, retry: !1, staleTime: 0, refetchOnWindowFocus: !0 }),
      (t[28] = T),
      (t[29] = E),
      (t[30] = D),
      (t[31] = O))
    : (O = t[31]);
  let k = d(O);
  if (_.isPending || f || (y !== `` && k.isPending)) {
    let e;
    return (
      t[32] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(nn, {})), (t[32] = e))
        : (e = t[32]),
      e
    );
  }
  if (_.isError || _.data == null) {
    let e;
    t[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`p`, {
          role: `alert`,
          children: (0, $.jsx)(M, {
            id: `chatgpt.rosalind_access.customer.context_failed`,
            defaultMessage: `We couldn’t load your GPT-Rosalind application.`,
            description: `Error shown when the GPT-Rosalind customer application context could not be loaded`,
          }),
        })),
        (t[33] = e))
      : (e = t[33]);
    let n;
    t[34] === _ ? (n = t[35]) : ((n = () => void _.refetch()), (t[34] = _), (t[35] = n));
    let r;
    t[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(M, {
          id: `chatgpt.rosalind_access.customer.context_retry`,
          defaultMessage: `Try again`,
          description: `Button that retries loading the GPT-Rosalind customer application context`,
        })),
        (t[36] = r))
      : (r = t[36]);
    let i;
    return (
      t[37] === n
        ? (i = t[38])
        : ((i = (0, $.jsxs)(rn, {
            children: [
              null,
              e,
              (0, $.jsx)(ee, {
                color: `secondary`,
                size: `dialogAction`,
                type: `button`,
                onClick: n,
                children: r,
              }),
            ],
          })),
          (t[37] = n),
          (t[38] = i)),
      i
    );
  }
  let A;
  if (t[39] !== _.data.organizations || t[40] !== k.data?.organizations || t[41] !== y) {
    let e = k.data?.organizations.find((e) => {
      let { id: t } = e;
      return t === y;
    });
    ((A = _.data.organizations.map((t) => (t.id === e?.id ? e : t))),
      e != null &&
        !A.some((t) => {
          let { id: n } = t;
          return n === e.id;
        }) &&
        A.push(e),
      (t[39] = _.data.organizations),
      (t[40] = k.data?.organizations),
      (t[41] = y),
      (t[42] = A));
  } else A = t[42];
  let te;
  t[43] !== k.data?.applications || t[44] !== y
    ? ((te = k.data?.applications.find((e) => e.organizationId === y && e.state !== `denied`)),
      (t[43] = k.data?.applications),
      (t[44] = y),
      (t[45] = te))
    : (te = t[45]);
  let j = te,
    re;
  t[46] !== k.data?.applicationHistoryKnownOrganizationIds || t[47] !== y
    ? ((re = y !== `` && k.data?.applicationHistoryKnownOrganizationIds.includes(y) === !0),
      (t[46] = k.data?.applicationHistoryKnownOrganizationIds),
      (t[47] = y),
      (t[48] = re))
    : (re = t[48]);
  let ie = re,
    ae = s?.organizationId === y ? s : null;
  if (ae != null) {
    let e;
    return (
      t[49] === ae ? (e = t[50]) : ((e = (0, $.jsx)(an, { application: ae })), (t[49] = ae), (t[50] = e)),
      e
    );
  }
  let oe;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (0, $.jsx)(`h1`, {
        className: `text-heading-md leading-8 font-semibold text-default select-text md:text-heading-lg`,
        children: (0, $.jsx)(M, { ...G.pageTitle }),
      })),
      (t[51] = oe))
    : (oe = t[51]);
  let se;
  t[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, $.jsxs)(`header`, {
        className: `flex flex-col gap-2`,
        children: [
          null,
          oe,
          (0, $.jsx)(`p`, {
            className: `text-sm leading-5 text-secondary select-text`,
            children: (0, $.jsx)(M, { ...G.pageDescription }),
          }),
        ],
      })),
      (t[52] = se))
    : (se = t[52]);
  let ce;
  t[53] === r ? (ce = t[54]) : ((ce = r.get(`embedded`)), (t[53] = r), (t[54] = ce));
  let N = ce === `codex`,
    P = y === `` || ie,
    F = _.isFetching || k.isFetching,
    I = k.data?.submissionEnabled ?? !1,
    le = k.data?.capabilities,
    L;
  t[55] === i
    ? (L = t[56])
    : ((L = (e) => {
        (c(null),
          i(
            (t) => {
              let n = new URLSearchParams(t);
              return (n.set(`organization_id`, e), n.delete(`organizationId`), n);
            },
            { replace: !0 },
          ));
      }),
      (t[55] = i),
      (t[56] = L));
  let z;
  t[57] !== _ || t[58] !== k || t[59] !== y
    ? ((z = () => {
        (_.refetch(), y !== `` && k.refetch());
      }),
      (t[57] = _),
      (t[58] = k),
      (t[59] = y),
      (t[60] = z))
    : (z = t[60]);
  let ue, de, B;
  t[61] === n
    ? ((ue = t[62]), (de = t[63]), (B = t[64]))
    : ((ue = (e) => V(n, e)),
      (de = (e) =>
        we(n, {
          attemptId: e.attemptId,
          organizationId: e.organizationId,
          ...(e.payloadVersion === 2 ? { payloadVersion: 2 } : {}),
        })),
      (B = (e) => Ce(n, e)),
      (t[61] = n),
      (t[62] = ue),
      (t[63] = de),
      (t[64] = B));
  let fe;
  return (
    t[65] !== j ||
    t[66] !== A ||
    t[67] !== w ||
    t[68] !== y ||
    t[69] !== N ||
    t[70] !== P ||
    t[71] !== F ||
    t[72] !== I ||
    t[73] !== le ||
    t[74] !== L ||
    t[75] !== z ||
    t[76] !== ue ||
    t[77] !== de ||
    t[78] !== B
      ? ((fe = (0, $.jsxs)(`section`, {
          className: `flex flex-col gap-8 text-sm text-default`,
          children: [
            se,
            (0, $.jsx)(Bt, {
              organizationActions: en,
              workspaceHandoffRequired: w,
              embedded: N,
              organizations: A,
              selectedOrganizationId: y,
              contextAvailable: P,
              existingApplication: j,
              organizationSource: `verified`,
              contextPending: F,
              submissionEnabled: I,
              capabilities: le,
              onSelectOrganization: L,
              onRetryContext: z,
              onApplicationSubmitted: c,
              submitApplication: ue,
              startPersona: de,
              checkPersona: B,
            }),
          ],
        })),
        (t[65] = j),
        (t[66] = A),
        (t[67] = w),
        (t[68] = y),
        (t[69] = N),
        (t[70] = P),
        (t[71] = F),
        (t[72] = I),
        (t[73] = le),
        (t[74] = L),
        (t[75] = z),
        (t[76] = ue),
        (t[77] = de),
        (t[78] = B),
        (t[79] = fe))
      : (fe = t[79]),
    fe
  );
}
function en(e) {
  return null;
}
function tn(e) {
  let { submissionEligible: t } = e;
  return t === !0;
}
function nn() {
  let e = (0, sn.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, $.jsx)(n, {})), (e[0] = t)) : (t = e[0]);
  let r;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsxs)(`div`, {
          className: `flex min-h-40 items-center justify-center`,
          role: `status`,
          children: [
            t,
            (0, $.jsx)(`span`, {
              className: `sr-only`,
              children: (0, $.jsx)(M, {
                id: `chatgpt.rosalind_access.customer.loading`,
                defaultMessage: `Loading GPT-Rosalind application`,
                description: `Accessible loading message for the GPT-Rosalind customer application`,
              }),
            }),
          ],
        })),
        (e[1] = r))
      : (r = e[1]),
    r
  );
}
function rn(e) {
  let t = (0, sn.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(`div`, { className: `flex flex-col items-start gap-4`, children: n })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function an(e) {
  let t = (0, sn.c)(9),
    { application: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(`h1`, {
        className: `text-2xl font-semibold`,
        children: (0, $.jsx)(M, {
          id: `chatgpt.rosalind_access.customer.submission_complete.title`,
          defaultMessage: `Application submitted`,
          description: `Title shown after a GPT-Rosalind customer application is submitted`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`p`, {
        className: `text-sm text-secondary`,
        children: (0, $.jsx)(M, {
          id: `chatgpt.rosalind_access.customer.submission_complete.description`,
          defaultMessage: `OpenAI will review your application and contact you with next steps.`,
          description: `Message shown after a GPT-Rosalind customer application is submitted`,
        }),
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  t[2] === n.bioagentsApplicationReference
    ? (a = t[3])
    : ((a = (0, $.jsx)(`p`, {
        className: `text-xs text-tertiary`,
        children: (0, $.jsx)(M, {
          id: `chatgpt.rosalind_access.customer.submission_complete.reference`,
          defaultMessage: `Application reference: {reference}`,
          description: `Reference shown after a GPT-Rosalind customer application is submitted`,
          values: { reference: n.bioagentsApplicationReference },
        }),
      })),
      (t[2] = n.bioagentsApplicationReference),
      (t[3] = a));
  let o;
  t[4] === n.organizationId
    ? (o = t[5])
    : ((o = (0, $.jsx)(on, { organizationId: n.organizationId })), (t[4] = n.organizationId), (t[5] = o));
  let s;
  return (
    t[6] !== a || t[7] !== o
      ? ((s = (0, $.jsxs)(`section`, {
          className: `flex flex-col gap-3`,
          "aria-live": `polite`,
          children: [r, i, a, o],
        })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
function on(e) {
  let t = (0, sn.c)(6),
    { organizationId: n } = e,
    [r] = S(),
    i;
  t[0] !== n || t[1] !== r
    ? ((i = new URLSearchParams({ organization_id: n })),
      r.get(`embedded`) === `codex` && i.set(`embedded`, `codex`),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i))
    : (i = t[2]);
  let a = `/rosalind/application/status?${i}`,
    o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(M, {
        id: `chatgpt.rosalind_access.customer.track_application`,
        defaultMessage: `Track application`,
        description: `Link from the Rosalind application or submission receipt to its persisted organization-specific status page`,
      })),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] === a
      ? (s = t[5])
      : ((s = (0, $.jsx)(b, { to: a, color: `secondary`, size: `dialogAction`, children: o })),
        (t[4] = a),
        (t[5] = s)),
    s
  );
}
var sn, cn, $;
function ln() {
  return (ln = e(() => {
    ((sn = h()), A(), T(), (cn = r()), x(), p(), I(), ue(), w(), D(), Ve(), Yt(), H(), Zt(), ($ = c()));
  }))();
}
function un() {
  let e = (0, dn.c)(5),
    [t] = S(),
    n;
  e[0] === t ? (n = e[1]) : ((n = t.get(`embedded`)), (e[0] = t), (e[1] = n));
  let r = n === `codex`,
    i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = (0, fn.jsx)(Qt, {})), (e[2] = i)) : (i = e[2]);
  let a;
  return (
    e[3] === r ? (a = e[4]) : ((a = (0, fn.jsx)(be, { embedded: r, children: i })), (e[3] = r), (e[4] = a)),
    a
  );
}
var dn, fn;
function pn() {
  return (pn = e(() => {
    ((dn = h()), p(), pe(), ln(), (fn = c()));
  }))();
}
pn();
export { un as RosalindCustomerApplicationRoute };
//# sourceMappingURL=route-e1a01c1df42e.js.map
