import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  FO as i,
  HO as a,
  JO as o,
  KO as s,
  LNt as c,
  LO as l,
  PBt as u,
  Qst as d,
  WO as ee,
  XOt as f,
  Y3 as te,
  Z3 as p,
  ZSt as ne,
  iCt as re,
  nCt as m,
  qO as ie,
  tkt as h,
} from "./app-shared-2feb3d4c6fcc.js";
import { no as g } from "./app-initial-ad16eaadf81f.js";
import { m as ae, t as _ } from "./src-64808839b2f3.js";
import { n as oe, r as v } from "./plugin-skill-preview-9078c0eb7255.js";
import { c as se, t as y } from "./telemetry-ec8e0eb23919.js";
import { n as b, t as ce } from "./items-408453923691.js";
function le(e) {
  let n = (0, x.c)(68),
    { skillData: r, item: a, onClose: o, onCloseAutoFocus: c } = e,
    u = t(d),
    f;
  n[0] === a ? (f = n[1]) : ((f = ce(a)), (n[0] = a), (n[1] = f));
  let { title: p, description: ne, icon: g } = f,
    _ = a.pin.artifact_id,
    {
      getSkillName: v,
      getSkillSafetyStatus: y,
      setSkillInstalled: b,
      skillDetail$: le,
      skillSafetyConfig$: de,
      skillsAccess$: C,
      skillsCollection$: pe,
    } = r,
    w = re(C),
    T = re(de),
    { data: E, isError: D, isFetching: O, refetch: k } = m(le, _),
    { data: A } = m(pe, `installed`),
    [j, me] = (0, fe.useState)(!1),
    [M, he] = (0, fe.useState)(!1),
    N;
  n[2] !== y || n[3] !== T || n[4] !== E
    ? ((N = E == null ? null : y(E, T)), (n[2] = y), (n[3] = T), (n[4] = E), (n[5] = N))
    : (N = n[5]);
  let P = N,
    F;
  n[6] !== A || n[7] !== E?.enabled || n[8] !== _
    ? ((F = E?.enabled || A?.some((e) => e.id === _)),
      (n[6] = A),
      (n[7] = E?.enabled),
      (n[8] = _),
      (n[9] = F))
    : (F = n[9]);
  let I = F,
    L = w === !0 && E ? E.description : ne,
    R;
  n[10] === c ? (R = n[11]) : ((R = { onCloseAutoFocus: c }), (n[10] = c), (n[11] = R));
  let z;
  n[12] === o
    ? (z = n[13])
    : ((z = (e) => {
        e || o();
      }),
      (n[12] = o),
      (n[13] = z));
  let ge = w !== !0 || E == null || I || P != null,
    B;
  n[14] !== j || n[15] !== u || n[16] !== b || n[17] !== E
    ? ((B = () => {
        E == null ||
          j ||
          (me(!0),
          he(!1),
          b(u, E, !0)
            .then((e) => {
              se(u, e ? `success` : `failure`);
            })
            .catch((e) => {
              ((e instanceof Error && e.name === `AbortError`) || se(u, `failure`), he(!0));
            })
            .finally(() => me(!1)));
      }),
      (n[14] = j),
      (n[15] = u),
      (n[16] = b),
      (n[17] = E),
      (n[18] = B))
    : (B = n[18]);
  let V;
  n[19] === I
    ? (V = n[20])
    : ((V = I
        ? (0, S.jsx)(h, {
            id: `profile.showcase.skill.installed`,
            defaultMessage: `Installed`,
            description: `Status when a showcased skill is already installed`,
          })
        : (0, S.jsx)(h, {
            id: `profile.showcase.skill.installStandalone`,
            defaultMessage: `Install skill`,
            description: `Install the standalone skill shown in the profile Showcase preview`,
          })),
      (n[19] = I),
      (n[20] = V));
  let H;
  n[21] !== j || n[22] !== ge || n[23] !== B || n[24] !== V
    ? ((H = (0, S.jsx)(te, { color: `primary`, loading: j, disabled: ge, onClick: B, children: V })),
      (n[21] = j),
      (n[22] = ge),
      (n[23] = B),
      (n[24] = V),
      (n[25] = H))
    : (H = n[25]);
  let U;
  n[26] !== w || n[27] !== v || n[28] !== E || n[29] !== p
    ? ((U = w === !0 && E ? v(E) : p), (n[26] = w), (n[27] = v), (n[28] = E), (n[29] = p), (n[30] = U))
    : (U = n[30]);
  let W;
  n[31] === U
    ? (W = n[32])
    : ((W = (0, S.jsx)(ie, {
        asChild: !0,
        children: (0, S.jsx)(`div`, { role: `heading`, "aria-level": 2, children: U }),
      })),
      (n[31] = U),
      (n[32] = W));
  let G;
  n[33] === L
    ? (G = n[34])
    : ((G = L == null ? null : (0, S.jsx)(s, { className: `sr-only`, children: L })),
      (n[33] = L),
      (n[34] = G));
  let K;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, S.jsx)(h, {
        id: `common.close`,
        defaultMessage: `Close`,
        description: `Close button label`,
      })),
      (n[35] = K))
    : (K = n[35]);
  let q;
  n[36] === o
    ? (q = n[37])
    : ((q = (0, S.jsx)(l, {
        className: i,
        children: (0, S.jsx)(te, { color: `ghost`, size: `toolbar`, onClick: o, children: K }),
      })),
      (n[36] = o),
      (n[37] = q));
  let J;
  n[38] === M
    ? (J = n[39])
    : ((J =
        M &&
        (0, S.jsx)(`p`, {
          role: `alert`,
          children: (0, S.jsx)(h, {
            id: `browserSkills.actionError`,
            defaultMessage: `The skill couldn't be updated. Please try again.`,
            description: `An install, approval, or try-in-chat action failed`,
          }),
        })),
      (n[38] = M),
      (n[39] = J));
  let Y;
  n[40] === w
    ? (Y = n[41])
    : ((Y =
        w === !1 &&
        (0, S.jsx)(`div`, {
          role: `alert`,
          children: (0, S.jsx)(h, {
            id: `browserSkills.unavailable`,
            defaultMessage: `Skills aren't available for this account`,
            description: `Skills access denied message`,
          }),
        })),
      (n[40] = w),
      (n[41] = Y));
  let X;
  n[42] !== w || n[43] !== P || n[44] !== E || n[45] !== r
    ? ((X =
        w === !0 &&
        E != null &&
        (0, S.jsxs)(S.Fragment, {
          children: [
            P != null &&
              (0, S.jsxs)(`div`, {
                role: `alert`,
                children: [
                  P === `blocked`
                    ? (0, S.jsx)(h, {
                        id: `browserSkills.blocked`,
                        defaultMessage: `This skill is blocked by its safety review`,
                        description: `A skill cannot be installed or invoked due to its safety scan`,
                      })
                    : (0, S.jsx)(h, {
                        id: `browserSkills.needsReview`,
                        defaultMessage: `Review this skill's files before approving it for use`,
                        description: `Safety warning requiring a skill owner or editor to approve the skill`,
                      }),
                  E.safety_scan?.justification && (0, S.jsx)(`p`, { children: E.safety_scan.justification }),
                ],
              }),
            (0, S.jsx)(ue, { skillData: r, skill: E }),
          ],
        })),
      (n[42] = w),
      (n[43] = P),
      (n[44] = E),
      (n[45] = r),
      (n[46] = X))
    : (X = n[46]);
  let Z;
  n[47] !== w || n[48] !== D || n[49] !== O || n[50] !== k || n[51] !== E
    ? ((Z =
        w !== !1 &&
        (w !== !0 || E == null) &&
        (0, S.jsx)(oe, {
          markdown: void 0,
          isError: w === !0 && D,
          isFetching: O,
          refetch: () => void k(),
          shouldBlockExternalEgress: !1,
        })),
      (n[47] = w),
      (n[48] = D),
      (n[49] = O),
      (n[50] = k),
      (n[51] = E),
      (n[52] = Z))
    : (Z = n[52]);
  let Q;
  n[53] !== g ||
  n[54] !== L ||
  n[55] !== W ||
  n[56] !== G ||
  n[57] !== q ||
  n[58] !== J ||
  n[59] !== Y ||
  n[60] !== X ||
  n[61] !== Z
    ? ((Q = (0, S.jsxs)(ae, {
        icon: g,
        title: W,
        description: L,
        accessibleDescription: G,
        footer: q,
        children: [J, Y, X, Z],
      })),
      (n[53] = g),
      (n[54] = L),
      (n[55] = W),
      (n[56] = G),
      (n[57] = q),
      (n[58] = J),
      (n[59] = Y),
      (n[60] = X),
      (n[61] = Z),
      (n[62] = Q))
    : (Q = n[62]);
  let $;
  return (
    n[63] !== Q || n[64] !== R || n[65] !== z || n[66] !== H
      ? (($ = (0, S.jsx)(ee, {
          open: !0,
          size: `editor`,
          contentProps: R,
          onOpenChange: z,
          headerActions: H,
          children: Q,
        })),
        (n[63] = Q),
        (n[64] = R),
        (n[65] = z),
        (n[66] = H),
        (n[67] = $))
      : ($ = n[67]),
    $
  );
}
function ue(e) {
  let t = (0, x.c)(7),
    { skillData: n, skill: r } = e,
    i;
  t[0] === r.files ? (i = t[1]) : ((i = g(Object.keys(r.files))), (t[0] = r.files), (t[1] = i));
  let a = i;
  if (a == null || r.permissions?.can_read === !1) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, S.jsx)(`p`, {
            role: `status`,
            children: (0, S.jsx)(h, {
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
  let o;
  return (
    t[3] !== a || t[4] !== r || t[5] !== n
      ? ((o = (0, S.jsx)(de, { skillData: n, skill: r, path: a })),
        (t[3] = a),
        (t[4] = r),
        (t[5] = n),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function de(e) {
  let t = (0, x.c)(10),
    { skillData: n, skill: r, path: i } = e,
    a;
  t[0] !== i || t[1] !== r ? ((a = { skill: r, path: i }), (t[0] = i), (t[1] = r), (t[2] = a)) : (a = t[2]);
  let { data: o, isError: s, isFetching: c, refetch: l } = m(n.skillFile$, a),
    u;
  t[3] === l ? (u = t[4]) : ((u = () => void l()), (t[3] = l), (t[4] = u));
  let d;
  return (
    t[5] !== o || t[6] !== s || t[7] !== c || t[8] !== u
      ? ((d = (0, S.jsx)(oe, {
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
var x, fe, S;
function C() {
  return (C = e(() => {
    ((x = u()), _(), ne(), (fe = r()), f(), p(), o(), a(), y(), n(), v(), b(), (S = c()));
  }))();
}
C();
export { le as PluginShowcaseSkillDetails };
//# sourceMappingURL=skill-details-b9c5a5ac1edd.js.map
