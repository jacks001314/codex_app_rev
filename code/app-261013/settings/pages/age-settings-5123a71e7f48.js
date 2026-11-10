import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  Cot as r,
  Ext as i,
  HV as a,
  IDt as o,
  Ixt as s,
  JC as c,
  LV as l,
  Pxt as u,
  QC as d,
  TJ as f,
  Vxt as p,
  _xt as m,
  cSt as h,
  iw as g,
  jDt as _,
  oxt as v,
  qC as y,
  t3 as b,
  tw as x,
  vzt as S,
  wot as C,
  wxt as ee,
  xMt as w,
  zH as te,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ek as ne,
  GMr as T,
  KMr as E,
  Mvr as re,
  NDr as D,
  Nvr as ie,
  QDr as ae,
  Tk as oe,
  XDr as se,
  XMr as O,
  YMr as k,
  _F as A,
  eDr as ce,
  eF as j,
  eNr as M,
  f$n as le,
  h$n as ue,
  hF as de,
  m$n as N,
  mF as fe,
  nDr as P,
  p$n as F,
  pF as pe,
  pOr as I,
  tF as me,
  tNr as L,
  xPn as he,
  yPn as R,
} from "./app-initial-5851df3f6cb1.js";
import { n as ge, t as _e } from "./age-settings-state-c2e11a22f725.js";
import { n as ve, t as ye } from "./age-verification-session-dbe5b6956b02.js";
import { c as be, n as xe, t as Se } from "./chatgpt_family-e849ec087b1a.js";
function Ce(e) {
  return e.get(z, `settings`);
}
var z;
function B() {
  return (B = e(() => {
    (be(),
      u(),
      re(),
      L(),
      D(),
      se(),
      C(),
      ve(),
      (z = h(r, (e, { scope: t }) => {
        let n = { phase: `idle` },
          r,
          i,
          a = ie(t, { read: () => n, getServerSnapshot: () => ({ phase: `idle` }) }),
          o = (e) => {
            ((n = e), a.publish(`state`));
          },
          s = () => {
            (r?.dispose(), (r = void 0), i?.(), (i = void 0), o({ phase: `idle` }));
          };
        return a.own(
          {
            state$: a.at(`state`),
            start() {
              let e = t.get(I),
                n = t.get(O),
                a = t.get(k);
              e != null &&
                n != null &&
                t.get(M) &&
                t.get(E) &&
                t.get(T) === e &&
                (r ??
                  ((r = ye(t, { accountId: e, userId: n }, o, () =>
                    ae(t, Se, { entryPoint: xe.CHATGPT_FAMILY_AGE_VERIFICATION_ENTRY_POINT_SETTINGS }),
                  )),
                  (i = t.watch((t) => {
                    (!t.get(M) ||
                      !t.get(E) ||
                      t.get(I) !== e ||
                      t.get(O) !== n ||
                      t.get(k) !== a ||
                      t.get(T) !== e) &&
                      s();
                  }))),
                r.start());
            },
          },
          s,
        );
      })));
  }))();
}
var V;
function H() {
  return (H = e(() => {
    (_(),
      (V = n({
        verify: {
          id: `settings.chatGpt.age.verify`,
          defaultMessage: `Verify age`,
          description: `Button to start Persona age verification from Settings`,
        },
        retry: {
          id: `settings.chatGpt.age.retry`,
          defaultMessage: `Retry`,
          description: `Button to retry a failed age status read or age verification attempt`,
        },
      })));
  }))();
}
function U(e) {
  let n = (0, W.c)(24),
    { primary: i } = e,
    a = i !== void 0 && i,
    c = s(r),
    l;
  n[0] === c ? (l = n[1]) : ((l = Ce(c)), (n[0] = c), (n[1] = l));
  let u = l,
    d = p(u.state$),
    f = d.phase === `loading` || d.phase === `active` || d.phase === `refreshing`,
    m;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, G.jsx)(o, { ...V.verify })), (n[2] = m))
    : (m = n[2]);
  let h = m;
  if (
    d.phase === `refresh-error` ||
    d.phase === `pending` ||
    d.phase === `redirect` ||
    d.phase === `refreshing`
  ) {
    let e;
    (n[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(o, {
          id: `settings.chatGpt.age.refresh`,
          defaultMessage: `Refresh status`,
          description: `Read back age settings after verification without starting another inquiry`,
        })),
        (n[3] = e))
      : (e = n[3]),
      (h = e));
  } else if (d.phase === `error`) {
    let e;
    (n[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(o, { ...V.retry })), (n[4] = e))
      : (e = n[4]),
      (h = e));
  }
  let g;
  n[5] === d.phase
    ? (g = n[6])
    : ((g =
        d.phase === `error`
          ? (0, G.jsx)(`span`, {
              role: `alert`,
              children: (0, G.jsx)(o, {
                id: `settings.chatGpt.age.verificationError`,
                defaultMessage: `Couldn’t start age verification`,
                description: `Persona failed to start; the user can retry verification`,
              }),
            })
          : null),
      (n[5] = d.phase),
      (n[6] = g));
  let _;
  n[7] === d.phase
    ? (_ = n[8])
    : ((_ =
        d.phase === `refresh-error`
          ? (0, G.jsx)(`span`, {
              role: `alert`,
              children: (0, G.jsx)(o, {
                id: `settings.chatGpt.age.refreshError`,
                defaultMessage: `Verification finished, but we couldn’t refresh your age settings`,
                description: `Authoritative readback failed after verification; retry refresh does not submit another inquiry`,
              }),
            })
          : null),
      (n[7] = d.phase),
      (n[8] = _));
  let v;
  n[9] === d.phase
    ? (v = n[10])
    : ((v =
        d.phase === `pending`
          ? (0, G.jsx)(`span`, {
              role: `status`,
              children: (0, G.jsx)(o, {
                id: `settings.chatGpt.age.pending`,
                defaultMessage: `Your verification is still being processed`,
                description: `Provider completed but authoritative verification evidence is not yet available; this is not an age label`,
              }),
            })
          : null),
      (n[9] = d.phase),
      (n[10] = v));
  let y = a ? `primary` : `secondary`,
    b;
  n[11] !== d || n[12] !== u
    ? ((b = () => (d.retry ? d.retry() : u.start())), (n[11] = d), (n[12] = u), (n[13] = b))
    : (b = n[13]);
  let x;
  n[14] !== f || n[15] !== h || n[16] !== y || n[17] !== b
    ? ((x = (0, G.jsx)(t, { color: y, size: `toolbar`, disabled: f, loading: f, onClick: b, children: h })),
      (n[14] = f),
      (n[15] = h),
      (n[16] = y),
      (n[17] = b),
      (n[18] = x))
    : (x = n[18]);
  let S;
  return (
    n[19] !== g || n[20] !== _ || n[21] !== v || n[22] !== x
      ? ((S = (0, G.jsxs)(`div`, { className: `flex flex-col items-start gap-2`, children: [g, _, v, x] })),
        (n[19] = g),
        (n[20] = _),
        (n[21] = v),
        (n[22] = x),
        (n[23] = S))
      : (S = n[23]),
    S
  );
}
var W, G;
function K() {
  return (K = e(() => {
    ((W = S()), u(), _(), b(), C(), B(), H(), (G = w()));
  }))();
}
function we() {
  let e = (0, X.c)(2),
    t = p(le),
    n;
  return (
    e[0] === t ? (n = e[1]) : ((n = t ? (0, Z.jsx)(Te, {}) : (0, Z.jsx)(Oe, {})), (e[0] = t), (e[1] = n)),
    n
  );
}
function Te() {
  let e = (0, X.c)(18),
    t = i(),
    n = ee(),
    { data: r } = p(F),
    s;
  e[0] === r ? (s = e[1]) : ((s = N(r)), (e[0] = r), (e[1] = s));
  let c = s,
    l;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsx)(j, { slug: `age` })), (e[2] = l))
    : (l = e[2]);
  let u = l;
  if (c == null) {
    let t;
    return (
      e[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Z.jsx)(x, { label: u, control: (0, Z.jsx)(J, {}) })), (e[3] = t))
        : (t = e[3]),
      t
    );
  }
  if (c.ageGroup === `adult`) {
    let t;
    return (
      e[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Z.jsx)(x, {
            label: u,
            control: (0, Z.jsx)(o, {
              id: `settings.chatGpt.age.adult`,
              defaultMessage: `18 or older`,
              description: `Read-only adult age range in ChatGPT Account settings; there is no adult detail page`,
            }),
          })),
          (e[4] = t))
        : (t = e[4]),
      t
    );
  }
  let f;
  e[5] === n.hash
    ? (f = e[6])
    : ((f = (e) => {
        n.hash === `#age` && e?.focus();
      }),
      (e[5] = n.hash),
      (e[6] = f));
  let m;
  e[7] === t ? (m = e[8]) : ((m = () => void t(`/settings/age`)), (e[7] = t), (e[8] = m));
  let h;
  e[9] === c.ageGroup
    ? (h = e[10])
    : ((h =
        c.ageGroup === `teen`
          ? (0, Z.jsx)(o, {
              id: `settings.chatGpt.age.teen`,
              defaultMessage: `Teen`,
              description: `Age group summary for a teen in ChatGPT Account settings`,
            })
          : (0, Z.jsxs)(Z.Fragment, { children: [(0, Z.jsx)(te, {}), (0, Z.jsx)(o, { ...V.verify })] })),
      (e[9] = c.ageGroup),
      (e[10] = h));
  let g;
  e[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = (0, Z.jsx)(a, {})), (e[11] = g)) : (g = e[11]);
  let _;
  e[12] === h ? (_ = e[13]) : ((_ = (0, Z.jsxs)(Z.Fragment, { children: [h, g] })), (e[12] = h), (e[13] = _));
  let v;
  return (
    e[14] !== f || e[15] !== m || e[16] !== _
      ? ((v = (0, Z.jsx)(d, { ref: f, label: u, onClick: m, trailing: _ })),
        (e[14] = f),
        (e[15] = m),
        (e[16] = _),
        (e[17] = v))
      : (v = e[17]),
    v
  );
}
function Ee() {
  let e = (0, X.c)(23),
    n = p(_e),
    r = i(),
    { data: a } = p(F),
    s;
  e[0] === a ? (s = e[1]) : ((s = N(a)), (e[0] = a), (e[1] = s));
  let c = s;
  if (!n) {
    let t;
    return (
      e[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Z.jsx)(v, { to: `/settings/account`, replace: !0 })), (e[2] = t))
        : (t = e[2]),
      t
    );
  }
  let u;
  e[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = (0, Z.jsx)(J, {})), (e[3] = u)) : (u = e[3]);
  let d = u;
  if (c?.ageGroup === `teen`) {
    let t, n;
    e[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(o, {
          id: `settings.chatGpt.age.teenRange`,
          defaultMessage: `17 or under`,
          description: `Age range heading on the teen Age details page`,
        })),
        (n = (0, Z.jsx)(q, { teen: !0 })),
        (e[4] = t),
        (e[5] = n))
      : ((t = e[4]), (n = e[5]));
    let r;
    e[6] === c.canVerifyAge
      ? (r = e[7])
      : ((r = c.canVerifyAge ? (0, Z.jsx)(U, {}) : null), (e[6] = c.canVerifyAge), (e[7] = r));
    let i;
    (e[8] === r
      ? (i = e[9])
      : ((i = (0, Z.jsx)(x, { label: t, description: n, control: r })), (e[8] = r), (e[9] = i)),
      (d = i));
  } else if (c?.ageGroup === `unsure`) {
    let t;
    (e[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(x, {
          label: (0, Z.jsx)(U, { primary: !0 }),
          description: (0, Z.jsx)(q, { teen: !1 }),
          control: null,
        })),
        (e[10] = t))
      : (t = e[10]),
      (d = t));
  }
  let f;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(j, { slug: `age` })), (e[11] = f))
    : (f = e[11]);
  let m;
  e[12] === r
    ? (m = e[13])
    : ((m = () => void r(`/settings/account#age`, { replace: !0 })), (e[12] = r), (e[13] = m));
  let h, g;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(l, {})),
      (g = (0, Z.jsx)(o, {
        id: `settings.chatGpt.age.back`,
        defaultMessage: `Account`,
        description: `Back button from Age details to Account settings`,
      })),
      (e[14] = h),
      (e[15] = g))
    : ((h = e[14]), (g = e[15]));
  let _;
  e[16] === m
    ? (_ = e[17])
    : ((_ = (0, Z.jsxs)(t, { color: `ghost`, size: `toolbar`, autoFocus: !0, onClick: m, children: [h, g] })),
      (e[16] = m),
      (e[17] = _));
  let b;
  e[18] === d
    ? (b = e[19])
    : ((b = (0, Z.jsx)(oe, { children: (0, Z.jsx)(y, { children: d }) })), (e[18] = d), (e[19] = b));
  let S;
  return (
    e[20] !== _ || e[21] !== b
      ? ((S = (0, Z.jsx)(de, { title: f, backSlot: _, children: b })), (e[20] = _), (e[21] = b), (e[22] = S))
      : (S = e[22]),
    S
  );
}
function q(e) {
  let t = (0, X.c)(2),
    { teen: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = n
          ? (0, Z.jsx)(o, {
              id: `settings.chatGpt.age.teenExplanation`,
              defaultMessage: `Your ChatGPT experience includes additional safeguards and features designed to support teens. <learnMore>Learn more</learnMore>`,
              description: `Reassuring explanation on ChatGPT Age details for users with teen safeguards. The learnMore tag links to the ChatGPT for Teens help article.`,
              values: { learnMore: De },
            })
          : (0, Z.jsx)(o, {
              id: `settings.chatGpt.age.unsureExplanation`,
              defaultMessage: `Because we don’t know your age, additional safeguards apply. Verify your age to get the right settings and features. <learnMore>Learn more</learnMore>`,
              description: `Unknown age explanation, also used for unrecognized age statuses; learnMore links to the age verification help article`,
              values: { learnMore: Ae },
            })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function De(e) {
  return (0, Z.jsx)(R, {
    appearance: `secondary`,
    initiator: `open_in_browser_bridge`,
    href: `https://help.openai.com/en/articles/20001421-chatgpt-for-teens`,
    underline: `always`,
    children: e,
  });
}
function J() {
  let e = (0, X.c)(4),
    { isError: n, isFetching: r, refetch: i } = p(F),
    a;
  return (
    e[0] !== n || e[1] !== r || e[2] !== i
      ? ((a = n
          ? (0, Z.jsxs)(`div`, {
              role: `alert`,
              className: `flex items-center gap-2`,
              children: [
                (0, Z.jsx)(o, {
                  id: `settings.chatGpt.age.unavailable`,
                  defaultMessage: `Couldn’t load age`,
                  description: `Age status failed to load; does not imply any age group`,
                }),
                (0, Z.jsx)(t, {
                  color: `secondary`,
                  size: `toolbar`,
                  disabled: r,
                  loading: r,
                  onClick: () => void i(),
                  children: (0, Z.jsx)(o, { ...V.retry }),
                }),
              ],
            })
          : (0, Z.jsx)(pe, {})),
        (e[0] = n),
        (e[1] = r),
        (e[2] = i),
        (e[3] = a))
      : (a = e[3]),
    a
  );
}
function Oe() {
  let e = (0, X.c)(2),
    t = P(`2444205802`),
    n = P(`408981619`),
    r = p(I),
    i = p(O),
    a = p(E);
  if ((!t && !n) || r == null || i == null || !a) return null;
  let o;
  return (e[0] === t ? (o = e[1]) : ((o = (0, Z.jsx)(ke, { full: t })), (e[0] = t), (e[1] = o)), o);
}
function ke(e) {
  let t = (0, X.c)(3),
    { full: n } = e,
    { data: r } = p(F),
    i = r?.age_status === `under_18` && !r.has_verified_age_or_dob;
  if (r == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(x, { label: (0, Z.jsx)(o, { ...Q.verification }), control: (0, Z.jsx)(J, {}) })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (!(r.show_age_verification_setting || (i && (n || r.is_u18_model_policy_enabled)))) return null;
  let a;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(o, { ...Q.verification })), (t[1] = a))
    : (a = t[1]);
  let s;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, Z.jsx)(x, {
          label: a,
          description: (0, Z.jsx)(o, {
            id: `settings.chatGpt.age.verificationExplanation`,
            defaultMessage: `To help keep ChatGPT appropriate for everyone, some settings require age verification. <learnMore>Learn more</learnMore>`,
            description: `Legacy verification explanation; learnMore links to the age verification help article`,
            values: { learnMore: Y },
          }),
          control: (0, Z.jsx)(U, {}),
        })),
        (t[2] = s))
      : (s = t[2]),
    s
  );
}
function Y(e) {
  return (0, Z.jsx)(R, {
    appearance: `secondary`,
    initiator: `open_in_browser_bridge`,
    href: `https://help.openai.com/articles/12652064-age-verification`,
    children: e,
  });
}
function Ae(e) {
  return (0, Z.jsx)(R, {
    appearance: `secondary`,
    initiator: `open_in_browser_bridge`,
    href: `https://help.openai.com/articles/12652064-age-verification`,
    underline: `always`,
    children: e,
  });
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = S()),
      u(),
      _(),
      m(),
      L(),
      ue(),
      D(),
      b(),
      he(),
      f(),
      A(),
      ne(),
      fe(),
      g(),
      me(),
      c(),
      ce(),
      ge(),
      K(),
      H(),
      (Z = w()),
      (Q = n({
        verification: {
          id: `settings.chatGpt.age.verification`,
          defaultMessage: `Age verification`,
          description: `Account settings entry for legacy age verification when the Age page rollout is disabled`,
        },
      })));
  }))();
}
export { Ee as n, $ as r, we as t };
//# sourceMappingURL=age-settings-5123a71e7f48.js.map
