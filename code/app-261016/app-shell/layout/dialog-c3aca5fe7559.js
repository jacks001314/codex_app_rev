import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HO as i,
  IO as a,
  JO as o,
  KO as ee,
  LNt as s,
  LO as te,
  NSt as c,
  PBt as l,
  Qst as u,
  USt as ne,
  Vrt as d,
  WO as re,
  XOt as f,
  Y3 as p,
  Z3 as m,
  ZSt as h,
  nCt as ie,
  okt as ae,
  qO as oe,
  qrt as g,
  tkt as _,
  tpt as se,
} from "./app-shared-2feb3d4c6fcc.js";
import { Enn as v, MT as ce, Tnn as le, aPn as ue, jT as y, rPn as b } from "./app-initial-ad16eaadf81f.js";
import { a as x, i as S, n as C, r as de } from "./start-395ac002176b.js";
import { i as fe, n as pe, r as w } from "./target-6acf22dd3cfe.js";
import { n as T, t as me } from "./plugin-install-logo-row-f7ef06c8f492.js";
function E(e) {
  let t = (0, O.c)(6),
    { onboarding: n, onClose: r } = e,
    i;
  t[0] === n.target ? (i = t[1]) : ((i = JSON.stringify(n.target)), (t[0] = n.target), (t[1] = i));
  let a = `${i}:${n.plugin.plugin.id}`,
    o;
  return (
    t[2] !== r || t[3] !== n || t[4] !== a
      ? ((o = (0, A.jsx)(D, { onboarding: n, onClose: r }, a)),
        (t[2] = r),
        (t[3] = n),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function D(e) {
  let n = (0, O.c)(73),
    { onboarding: r, onClose: i } = e,
    o = t(u),
    s = ce(),
    c = ae(),
    l = ne(),
    [d, f] = (0, k.useState)(!1),
    [m, h] = (0, k.useState)(null),
    v = m?.status === `outcome-unknown`,
    y;
  n[0] === r.plugin ? (y = n[1]) : ((y = le(r.plugin)), (n[0] = r.plugin), (n[1] = y));
  let b = y,
    { target: S } = r,
    C = S.conversationId,
    w = ie(fe, S),
    T;
  n[2] !== d || n[3] !== i
    ? ((T = function () {
        d || i();
      }),
      (n[2] = d),
      (n[3] = i),
      (n[4] = T))
    : (T = n[4]);
  let E = T,
    D;
  n[5] !== l || n[6] !== i || n[7] !== o
    ? ((D = async function (e) {
        try {
          (i(), await l(e));
        } catch (e) {
          let t = e;
          o.get(g).danger(se(t), { errorAnalytics: { toastId: `plugins.onboarding.navigationFailed` } });
        }
      }),
      (n[5] = l),
      (n[6] = i),
      (n[7] = o),
      (n[8] = D))
    : (D = n[8]);
  let j = D,
    M;
  n[9] !== E || n[10] !== j || n[11] !== C || n[12] !== d || n[13] !== o || n[14] !== S
    ? ((M = async function () {
        if (!(d || C == null)) {
          if (S.type === `chatgpt` && ue(o, C)) {
            E();
            return;
          }
          await j(pe(S, C));
        }
      }),
      (n[9] = E),
      (n[10] = j),
      (n[11] = C),
      (n[12] = d),
      (n[13] = o),
      (n[14] = S),
      (n[15] = M))
    : (M = n[15]);
  let N = M,
    P;
  n[16] !== j ||
  n[17] !== c ||
  n[18] !== s ||
  n[19] !== w ||
  n[20] !== v ||
  n[21] !== d ||
  n[22] !== r ||
  n[23] !== o
    ? ((P = function () {
        if (d || v || !w) return;
        (x(o, r, `selected`), f(!0), h(null));
        let e = async (e) => {
          if (s()) {
            if (e.status === `started`) {
              (await j(e.route),
                e.message != null &&
                  o
                    .get(g)
                    .danger(e.message, { errorAnalytics: { toastId: `plugins.onboarding.startFailed` } }));
              return;
            }
            h(e);
          }
        };
        de(o, r, e)
          .then(e, (e) => {
            if (!s()) return;
            let t =
              e instanceof Error
                ? e.message
                : c.formatMessage({
                    id: `plugins.onboarding.startFailed`,
                    defaultMessage: `Couldn’t start setup. Please try again`,
                    description: `Error when starting a plugin setup conversation fails`,
                  });
            h({ status: `failed`, message: t });
          })
          .finally(() => f(!1));
      }),
      (n[16] = j),
      (n[17] = c),
      (n[18] = s),
      (n[19] = w),
      (n[20] = v),
      (n[21] = d),
      (n[22] = r),
      (n[23] = o),
      (n[24] = P))
    : (P = n[24]);
  let F = P,
    I;
  n[25] === E
    ? (I = n[26])
    : ((I = (e) => {
        e || E();
      }),
      (n[25] = E),
      (n[26] = I));
  let L = !d,
    R;
  n[27] === F
    ? (R = n[28])
    : ((R = (e) => {
        (e.preventDefault(), F());
      }),
      (n[27] = F),
      (n[28] = R));
  let z;
  n[29] === r.plugin
    ? (z = n[30])
    : ((z = (0, A.jsx)(me, { plugin: r.plugin })), (n[29] = r.plugin), (n[30] = z));
  let B;
  n[31] === b
    ? (B = n[32])
    : ((B = (0, A.jsx)(oe, {
        className: `heading-dialog font-semibold text-pretty`,
        children: (0, A.jsx)(_, {
          id: `plugins.onboarding.title`,
          defaultMessage: `{pluginName} is ready for use`,
          description: `Title after installing a plugin that offers a setup conversation`,
          values: { pluginName: b },
        }),
      })),
      (n[31] = b),
      (n[32] = B));
  let V;
  n[33] === b
    ? (V = n[34])
    : ((V = (0, A.jsx)(ee, {
        className: `text-base text-pretty text-secondary`,
        children: (0, A.jsx)(_, {
          id: `plugins.onboarding.description`,
          defaultMessage: `Set up {pluginName} to start using it in ChatGPT`,
          description: `Invites the user to set up their newly installed plugin in a conversation`,
          values: { pluginName: b },
        }),
      })),
      (n[33] = b),
      (n[34] = V));
  let H;
  n[35] !== B || n[36] !== V || n[37] !== z
    ? ((H = (0, A.jsxs)(`div`, {
        className: `flex flex-col items-center gap-2 text-center`,
        children: [z, B, V],
      })),
      (n[35] = B),
      (n[36] = V),
      (n[37] = z),
      (n[38] = H))
    : (H = n[38]);
  let U;
  n[39] === m
    ? (U = n[40])
    : ((U =
        m == null
          ? null
          : (0, A.jsx)(`p`, { role: `alert`, className: `text-sm text-secondary`, children: m.message })),
      (n[39] = m),
      (n[40] = U));
  let W;
  n[41] !== E || n[42] !== N || n[43] !== C || n[44] !== r || n[45] !== o
    ? ((W = () => {
        (x(o, r, `skipped`), C == null ? E() : N());
      }),
      (n[41] = E),
      (n[42] = N),
      (n[43] = C),
      (n[44] = r),
      (n[45] = o),
      (n[46] = W))
    : (W = n[46]);
  let G;
  n[47] === C
    ? (G = n[48])
    : ((G =
        C == null
          ? (0, A.jsx)(_, {
              id: `plugins.onboarding.later`,
              defaultMessage: `Maybe later`,
              description: `Dismiss plugin setup without starting a conversation`,
            })
          : (0, A.jsx)(_, {
              id: `plugins.onboarding.continue`,
              defaultMessage: `Continue`,
              description: `Return to the conversation after plugin installation without starting optional setup`,
            })),
      (n[47] = C),
      (n[48] = G));
  let K;
  n[49] !== d || n[50] !== W || n[51] !== G
    ? ((K = (0, A.jsx)(p, {
        className: `w-full justify-center`,
        color: `outlineGhost`,
        radius: `full`,
        size: `auth`,
        type: `button`,
        disabled: d,
        onClick: W,
        children: G,
      })),
      (n[49] = d),
      (n[50] = W),
      (n[51] = G),
      (n[52] = K))
    : (K = n[52]);
  let q = v || d || !w,
    J;
  n[53] === b
    ? (J = n[54])
    : ((J = (0, A.jsx)(_, {
        id: `plugins.onboarding.setup`,
        defaultMessage: `Set up {pluginName}`,
        description: `Start a conversation with the plugin’s onboarding skill`,
        values: { pluginName: b },
      })),
      (n[53] = b),
      (n[54] = J));
  let Y;
  n[55] !== d || n[56] !== q || n[57] !== J
    ? ((Y = (0, A.jsx)(p, {
        className: `w-full justify-center`,
        color: `primary`,
        radius: `full`,
        size: `auth`,
        type: `submit`,
        disabled: q,
        loading: d,
        children: J,
      })),
      (n[55] = d),
      (n[56] = q),
      (n[57] = J),
      (n[58] = Y))
    : (Y = n[58]);
  let X;
  n[59] !== K || n[60] !== Y
    ? ((X = (0, A.jsxs)(te, { className: `flex-col`, children: [K, Y] })),
      (n[59] = K),
      (n[60] = Y),
      (n[61] = X))
    : (X = n[61]);
  let Z;
  n[62] !== H || n[63] !== U || n[64] !== X
    ? ((Z = (0, A.jsxs)(`div`, {
        className: `flex flex-col gap-6 px-8 pt-6 pb-8 select-none`,
        children: [H, U, X],
      })),
      (n[62] = H),
      (n[63] = U),
      (n[64] = X),
      (n[65] = Z))
    : (Z = n[65]);
  let Q;
  n[66] !== Z || n[67] !== R
    ? ((Q = (0, A.jsx)(a, { as: `form`, variant: `chatgpt`, onSubmit: R, children: Z })),
      (n[66] = Z),
      (n[67] = R),
      (n[68] = Q))
    : (Q = n[68]);
  let $;
  return (
    n[69] !== Q || n[70] !== I || n[71] !== L
      ? (($ = (0, A.jsx)(re, {
          open: !0,
          onOpenChange: I,
          size: `feature`,
          variant: `beacon`,
          showDialogClose: L,
          children: Q,
        })),
        (n[69] = Q),
        (n[70] = I),
        (n[71] = L),
        (n[72] = $))
      : ($ = n[72]),
    $
  );
}
var O, k, A;
function j() {
  return (j = e(() => {
    ((O = l()),
      h(),
      v(),
      (k = r()),
      f(),
      c(),
      b(),
      m(),
      o(),
      i(),
      d(),
      n(),
      y(),
      T(),
      S(),
      C(),
      w(),
      (A = s()));
  }))();
}
j();
export { E as PluginOnboardingDialog };
//# sourceMappingURL=dialog-c3aca5fe7559.js.map
