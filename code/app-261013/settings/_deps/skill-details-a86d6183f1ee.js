import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  IDt as r,
  Ixt as i,
  Pxt as a,
  Vxt as o,
  _O as s,
  aO as c,
  fO as l,
  gO as u,
  jDt as d,
  mO as ee,
  sO as te,
  t3 as f,
  vO as p,
  vzt as m,
  wot as h,
  xMt as g,
  yzt as ne,
  zxt as _,
} from "./app-shared-bbfeca5e5737.js";
import { eo as v } from "./app-initial-5851df3f6cb1.js";
import { m as re, t as y } from "./src-c65a930b3c0e.js";
import { n as ie, r as b } from "./plugin-skill-preview-4eaa4ba9469e.js";
import { c as ae, l as oe, t as x, u as S } from "./telemetry-754c57f9b0cd.js";
function se(e) {
  let a = (0, C.c)(68),
    { skillData: l, item: d, onClose: f, onCloseAutoFocus: p } = e,
    m = i(n),
    h;
  a[0] === d ? (h = a[1]) : ((h = oe(d)), (a[0] = d), (a[1] = h));
  let { title: g, description: ne, icon: v } = h,
    y = d.pin.artifact_id,
    {
      getSkillName: b,
      getSkillSafetyStatus: x,
      setSkillInstalled: S,
      skillDetail$: se,
      skillSafetyConfig$: le,
      skillsAccess$: T,
      skillsCollection$: de,
    } = l,
    E = o(T),
    fe = o(le),
    { data: D, isError: O, isFetching: k, refetch: A } = _(se, y),
    { data: pe } = _(de, `installed`),
    [j, me] = (0, ue.useState)(!1),
    [he, ge] = (0, ue.useState)(!1),
    M;
  a[2] !== x || a[3] !== fe || a[4] !== D
    ? ((M = D == null ? null : x(D, fe)), (a[2] = x), (a[3] = fe), (a[4] = D), (a[5] = M))
    : (M = a[5]);
  let N = M,
    P;
  a[6] !== pe || a[7] !== D?.enabled || a[8] !== y
    ? ((P = D?.enabled || pe?.some((e) => e.id === y)),
      (a[6] = pe),
      (a[7] = D?.enabled),
      (a[8] = y),
      (a[9] = P))
    : (P = a[9]);
  let F = P,
    I = E === !0 && D ? D.description : ne,
    L;
  a[10] === p ? (L = a[11]) : ((L = { onCloseAutoFocus: p }), (a[10] = p), (a[11] = L));
  let R;
  a[12] === f
    ? (R = a[13])
    : ((R = (e) => {
        e || f();
      }),
      (a[12] = f),
      (a[13] = R));
  let z = E !== !0 || D == null || F || N != null,
    B;
  a[14] !== j || a[15] !== m || a[16] !== S || a[17] !== D
    ? ((B = () => {
        D == null ||
          j ||
          (me(!0),
          ge(!1),
          S(m, D, !0)
            .then((e) => {
              ae(m, e ? `success` : `failure`);
            })
            .catch((e) => {
              ((e instanceof Error && e.name === `AbortError`) || ae(m, `failure`), ge(!0));
            })
            .finally(() => me(!1)));
      }),
      (a[14] = j),
      (a[15] = m),
      (a[16] = S),
      (a[17] = D),
      (a[18] = B))
    : (B = a[18]);
  let V;
  a[19] === F
    ? (V = a[20])
    : ((V = F
        ? (0, w.jsx)(r, {
            id: `profile.showcase.skill.installed`,
            defaultMessage: `Installed`,
            description: `Status when a showcased skill is already installed`,
          })
        : (0, w.jsx)(r, {
            id: `profile.showcase.skill.installStandalone`,
            defaultMessage: `Install skill`,
            description: `Install the standalone skill shown in the profile Showcase preview`,
          })),
      (a[19] = F),
      (a[20] = V));
  let H;
  a[21] !== j || a[22] !== z || a[23] !== B || a[24] !== V
    ? ((H = (0, w.jsx)(t, { color: `primary`, loading: j, disabled: z, onClick: B, children: V })),
      (a[21] = j),
      (a[22] = z),
      (a[23] = B),
      (a[24] = V),
      (a[25] = H))
    : (H = a[25]);
  let U;
  a[26] !== E || a[27] !== b || a[28] !== D || a[29] !== g
    ? ((U = E === !0 && D ? b(D) : g), (a[26] = E), (a[27] = b), (a[28] = D), (a[29] = g), (a[30] = U))
    : (U = a[30]);
  let W;
  a[31] === U
    ? (W = a[32])
    : ((W = (0, w.jsx)(s, {
        asChild: !0,
        children: (0, w.jsx)(`div`, { role: `heading`, "aria-level": 2, children: U }),
      })),
      (a[31] = U),
      (a[32] = W));
  let G;
  a[33] === I
    ? (G = a[34])
    : ((G = I == null ? null : (0, w.jsx)(u, { className: `sr-only`, children: I })),
      (a[33] = I),
      (a[34] = G));
  let K;
  a[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, w.jsx)(r, {
        id: `common.close`,
        defaultMessage: `Close`,
        description: `Close button label`,
      })),
      (a[35] = K))
    : (K = a[35]);
  let q;
  a[36] === f
    ? (q = a[37])
    : ((q = (0, w.jsx)(te, {
        className: c,
        children: (0, w.jsx)(t, { color: `ghost`, size: `toolbar`, onClick: f, children: K }),
      })),
      (a[36] = f),
      (a[37] = q));
  let J;
  a[38] === he
    ? (J = a[39])
    : ((J =
        he &&
        (0, w.jsx)(`p`, {
          role: `alert`,
          children: (0, w.jsx)(r, {
            id: `browserSkills.actionError`,
            defaultMessage: `The skill couldn't be updated. Please try again.`,
            description: `An install, approval, or try-in-chat action failed`,
          }),
        })),
      (a[38] = he),
      (a[39] = J));
  let Y;
  a[40] === E
    ? (Y = a[41])
    : ((Y =
        E === !1 &&
        (0, w.jsx)(`div`, {
          role: `alert`,
          children: (0, w.jsx)(r, {
            id: `browserSkills.unavailable`,
            defaultMessage: `Skills aren't available for this account`,
            description: `Skills access denied message`,
          }),
        })),
      (a[40] = E),
      (a[41] = Y));
  let X;
  a[42] !== E || a[43] !== N || a[44] !== D || a[45] !== l
    ? ((X =
        E === !0 &&
        D != null &&
        (0, w.jsxs)(w.Fragment, {
          children: [
            N != null &&
              (0, w.jsxs)(`div`, {
                role: `alert`,
                children: [
                  N === `blocked`
                    ? (0, w.jsx)(r, {
                        id: `browserSkills.blocked`,
                        defaultMessage: `This skill is blocked by its safety review`,
                        description: `A skill cannot be installed or invoked due to its safety scan`,
                      })
                    : (0, w.jsx)(r, {
                        id: `browserSkills.needsReview`,
                        defaultMessage: `Review this skill's files before approving it for use`,
                        description: `Safety warning requiring a skill owner or editor to approve the skill`,
                      }),
                  D.safety_scan?.justification && (0, w.jsx)(`p`, { children: D.safety_scan.justification }),
                ],
              }),
            (0, w.jsx)(ce, { skillData: l, skill: D }),
          ],
        })),
      (a[42] = E),
      (a[43] = N),
      (a[44] = D),
      (a[45] = l),
      (a[46] = X))
    : (X = a[46]);
  let Z;
  a[47] !== E || a[48] !== O || a[49] !== k || a[50] !== A || a[51] !== D
    ? ((Z =
        E !== !1 &&
        (E !== !0 || D == null) &&
        (0, w.jsx)(ie, {
          markdown: void 0,
          isError: E === !0 && O,
          isFetching: k,
          refetch: () => void A(),
          shouldBlockExternalEgress: !1,
        })),
      (a[47] = E),
      (a[48] = O),
      (a[49] = k),
      (a[50] = A),
      (a[51] = D),
      (a[52] = Z))
    : (Z = a[52]);
  let Q;
  a[53] !== v ||
  a[54] !== I ||
  a[55] !== W ||
  a[56] !== G ||
  a[57] !== q ||
  a[58] !== J ||
  a[59] !== Y ||
  a[60] !== X ||
  a[61] !== Z
    ? ((Q = (0, w.jsxs)(re, {
        icon: v,
        title: W,
        description: I,
        accessibleDescription: G,
        footer: q,
        children: [J, Y, X, Z],
      })),
      (a[53] = v),
      (a[54] = I),
      (a[55] = W),
      (a[56] = G),
      (a[57] = q),
      (a[58] = J),
      (a[59] = Y),
      (a[60] = X),
      (a[61] = Z),
      (a[62] = Q))
    : (Q = a[62]);
  let $;
  return (
    a[63] !== Q || a[64] !== L || a[65] !== R || a[66] !== H
      ? (($ = (0, w.jsx)(ee, {
          open: !0,
          size: `editor`,
          contentProps: L,
          onOpenChange: R,
          headerActions: H,
          children: Q,
        })),
        (a[63] = Q),
        (a[64] = L),
        (a[65] = R),
        (a[66] = H),
        (a[67] = $))
      : ($ = a[67]),
    $
  );
}
function ce(e) {
  let t = (0, C.c)(7),
    { skillData: n, skill: i } = e,
    a;
  t[0] === i.files ? (a = t[1]) : ((a = v(Object.keys(i.files))), (t[0] = i.files), (t[1] = a));
  let o = a;
  if (o == null || i.permissions?.can_read === !1) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, w.jsx)(`p`, {
            role: `status`,
            children: (0, w.jsx)(r, {
              id: `skills.card.contentsError`,
              defaultMessage: `Unable to load skill contents.`,
              description: `Error message when a skill file preview fails`,
            }),
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let s;
  return (
    t[3] !== o || t[4] !== i || t[5] !== n
      ? ((s = (0, w.jsx)(le, { skillData: n, skill: i, path: o })),
        (t[3] = o),
        (t[4] = i),
        (t[5] = n),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function le(e) {
  let t = (0, C.c)(10),
    { skillData: n, skill: r, path: i } = e,
    a;
  t[0] !== i || t[1] !== r ? ((a = { skill: r, path: i }), (t[0] = i), (t[1] = r), (t[2] = a)) : (a = t[2]);
  let { data: o, isError: s, isFetching: c, refetch: l } = _(n.skillFile$, a),
    u;
  t[3] === l ? (u = t[4]) : ((u = () => void l()), (t[3] = l), (t[4] = u));
  let d;
  return (
    t[5] !== o || t[6] !== s || t[7] !== c || t[8] !== u
      ? ((d = (0, w.jsx)(ie, {
          markdown: o,
          isError: s,
          isFetching: c,
          refetch: u,
          shouldBlockExternalEgress: !1,
        })),
        (t[5] = o),
        (t[6] = s),
        (t[7] = c),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
var C, ue, w;
function T() {
  return (T = e(() => {
    ((C = m()), y(), a(), (ue = ne()), d(), f(), p(), l(), x(), h(), b(), S(), (w = g()));
  }))();
}
T();
export { se as PluginShowcaseSkillDetails };
//# sourceMappingURL=skill-details-a86d6183f1ee.js.map
