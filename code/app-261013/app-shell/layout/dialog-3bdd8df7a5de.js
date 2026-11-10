import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Ext as r,
  Gdt as i,
  IDt as a,
  Ixt as o,
  Pxt as s,
  VDt as ee,
  _O as te,
  _xt as c,
  fO as l,
  gO as ne,
  hot as re,
  jDt as u,
  lot as d,
  mO as ie,
  oO as ae,
  sO as oe,
  t3 as f,
  vO as p,
  vzt as m,
  wot as h,
  xMt as g,
  yzt as _,
  zxt as se,
} from "./app-shared-bbfeca5e5737.js";
import { FAn as v, Idn as ce, LAn as le, Ldn as y, nT as b, rT as ue } from "./app-initial-5851df3f6cb1.js";
import { a as x, i as S, n as C, r as de } from "./start-abc4426cd95c.js";
import { i as fe, n as pe, r as w } from "./target-2990e1e26a79.js";
import { n as T, t as me } from "./plugin-install-logo-row-ae4a9223315e.js";
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
  let s = (0, O.c)(73),
    { onboarding: c, onClose: l } = e,
    u = o(n),
    d = ue(),
    f = ee(),
    p = r(),
    [m, h] = (0, k.useState)(!1),
    [g, _] = (0, k.useState)(null),
    v = g?.status === `outcome-unknown`,
    y;
  s[0] === c.plugin ? (y = s[1]) : ((y = ce(c.plugin)), (s[0] = c.plugin), (s[1] = y));
  let b = y,
    { target: S } = c,
    C = S.conversationId,
    w = se(fe, S),
    T;
  s[2] !== m || s[3] !== l
    ? ((T = function () {
        m || l();
      }),
      (s[2] = m),
      (s[3] = l),
      (s[4] = T))
    : (T = s[4]);
  let E = T,
    D;
  s[5] !== p || s[6] !== l || s[7] !== u
    ? ((D = async function (e) {
        try {
          (l(), await p(e));
        } catch (e) {
          let t = e;
          u.get(re).danger(i(t), { errorAnalytics: { toastId: `plugins.onboarding.navigationFailed` } });
        }
      }),
      (s[5] = p),
      (s[6] = l),
      (s[7] = u),
      (s[8] = D))
    : (D = s[8]);
  let j = D,
    M;
  s[9] !== E || s[10] !== j || s[11] !== C || s[12] !== m || s[13] !== u || s[14] !== S
    ? ((M = async function () {
        if (!(m || C == null)) {
          if (S.type === `chatgpt` && le(u, C)) {
            E();
            return;
          }
          await j(pe(S, C));
        }
      }),
      (s[9] = E),
      (s[10] = j),
      (s[11] = C),
      (s[12] = m),
      (s[13] = u),
      (s[14] = S),
      (s[15] = M))
    : (M = s[15]);
  let N = M,
    P;
  s[16] !== j ||
  s[17] !== f ||
  s[18] !== d ||
  s[19] !== w ||
  s[20] !== v ||
  s[21] !== m ||
  s[22] !== c ||
  s[23] !== u
    ? ((P = function () {
        if (m || v || !w) return;
        (x(u, c, `selected`), h(!0), _(null));
        let e = async (e) => {
          if (d()) {
            if (e.status === `started`) {
              (await j(e.route),
                e.message != null &&
                  u
                    .get(re)
                    .danger(e.message, { errorAnalytics: { toastId: `plugins.onboarding.startFailed` } }));
              return;
            }
            _(e);
          }
        };
        de(u, c, e)
          .then(e, (e) => {
            if (!d()) return;
            let t =
              e instanceof Error
                ? e.message
                : f.formatMessage({
                    id: `plugins.onboarding.startFailed`,
                    defaultMessage: `Couldn’t start setup. Please try again`,
                    description: `Error when starting a plugin setup conversation fails`,
                  });
            _({ status: `failed`, message: t });
          })
          .finally(() => h(!1));
      }),
      (s[16] = j),
      (s[17] = f),
      (s[18] = d),
      (s[19] = w),
      (s[20] = v),
      (s[21] = m),
      (s[22] = c),
      (s[23] = u),
      (s[24] = P))
    : (P = s[24]);
  let F = P,
    I;
  s[25] === E
    ? (I = s[26])
    : ((I = (e) => {
        e || E();
      }),
      (s[25] = E),
      (s[26] = I));
  let L = !m,
    R;
  s[27] === F
    ? (R = s[28])
    : ((R = (e) => {
        (e.preventDefault(), F());
      }),
      (s[27] = F),
      (s[28] = R));
  let z;
  s[29] === c.plugin
    ? (z = s[30])
    : ((z = (0, A.jsx)(me, { plugin: c.plugin })), (s[29] = c.plugin), (s[30] = z));
  let B;
  s[31] === b
    ? (B = s[32])
    : ((B = (0, A.jsx)(te, {
        className: `heading-dialog font-semibold text-pretty`,
        children: (0, A.jsx)(a, {
          id: `plugins.onboarding.title`,
          defaultMessage: `{pluginName} is ready for use`,
          description: `Title after installing a plugin that offers a setup conversation`,
          values: { pluginName: b },
        }),
      })),
      (s[31] = b),
      (s[32] = B));
  let V;
  s[33] === b
    ? (V = s[34])
    : ((V = (0, A.jsx)(ne, {
        className: `text-base text-pretty text-secondary`,
        children: (0, A.jsx)(a, {
          id: `plugins.onboarding.description`,
          defaultMessage: `Set up {pluginName} to start using it in ChatGPT`,
          description: `Invites the user to set up their newly installed plugin in a conversation`,
          values: { pluginName: b },
        }),
      })),
      (s[33] = b),
      (s[34] = V));
  let H;
  s[35] !== B || s[36] !== V || s[37] !== z
    ? ((H = (0, A.jsxs)(`div`, {
        className: `flex flex-col items-center gap-2 text-center`,
        children: [z, B, V],
      })),
      (s[35] = B),
      (s[36] = V),
      (s[37] = z),
      (s[38] = H))
    : (H = s[38]);
  let U;
  s[39] === g
    ? (U = s[40])
    : ((U =
        g == null
          ? null
          : (0, A.jsx)(`p`, { role: `alert`, className: `text-sm text-secondary`, children: g.message })),
      (s[39] = g),
      (s[40] = U));
  let W;
  s[41] !== E || s[42] !== N || s[43] !== C || s[44] !== c || s[45] !== u
    ? ((W = () => {
        (x(u, c, `skipped`), C == null ? E() : N());
      }),
      (s[41] = E),
      (s[42] = N),
      (s[43] = C),
      (s[44] = c),
      (s[45] = u),
      (s[46] = W))
    : (W = s[46]);
  let G;
  s[47] === C
    ? (G = s[48])
    : ((G =
        C == null
          ? (0, A.jsx)(a, {
              id: `plugins.onboarding.later`,
              defaultMessage: `Maybe later`,
              description: `Dismiss plugin setup without starting a conversation`,
            })
          : (0, A.jsx)(a, {
              id: `plugins.onboarding.continue`,
              defaultMessage: `Continue`,
              description: `Return to the conversation after plugin installation without starting optional setup`,
            })),
      (s[47] = C),
      (s[48] = G));
  let K;
  s[49] !== m || s[50] !== W || s[51] !== G
    ? ((K = (0, A.jsx)(t, {
        className: `w-full justify-center`,
        color: `outlineGhost`,
        radius: `full`,
        size: `auth`,
        type: `button`,
        disabled: m,
        onClick: W,
        children: G,
      })),
      (s[49] = m),
      (s[50] = W),
      (s[51] = G),
      (s[52] = K))
    : (K = s[52]);
  let q = v || m || !w,
    J;
  s[53] === b
    ? (J = s[54])
    : ((J = (0, A.jsx)(a, {
        id: `plugins.onboarding.setup`,
        defaultMessage: `Set up {pluginName}`,
        description: `Start a conversation with the plugin’s onboarding skill`,
        values: { pluginName: b },
      })),
      (s[53] = b),
      (s[54] = J));
  let Y;
  s[55] !== m || s[56] !== q || s[57] !== J
    ? ((Y = (0, A.jsx)(t, {
        className: `w-full justify-center`,
        color: `primary`,
        radius: `full`,
        size: `auth`,
        type: `submit`,
        disabled: q,
        loading: m,
        children: J,
      })),
      (s[55] = m),
      (s[56] = q),
      (s[57] = J),
      (s[58] = Y))
    : (Y = s[58]);
  let X;
  s[59] !== K || s[60] !== Y
    ? ((X = (0, A.jsxs)(oe, { className: `flex-col`, children: [K, Y] })),
      (s[59] = K),
      (s[60] = Y),
      (s[61] = X))
    : (X = s[61]);
  let Z;
  s[62] !== H || s[63] !== U || s[64] !== X
    ? ((Z = (0, A.jsxs)(`div`, {
        className: `flex flex-col gap-6 px-8 pt-6 pb-8 select-none`,
        children: [H, U, X],
      })),
      (s[62] = H),
      (s[63] = U),
      (s[64] = X),
      (s[65] = Z))
    : (Z = s[65]);
  let Q;
  s[66] !== Z || s[67] !== R
    ? ((Q = (0, A.jsx)(ae, { as: `form`, variant: `chatgpt`, onSubmit: R, children: Z })),
      (s[66] = Z),
      (s[67] = R),
      (s[68] = Q))
    : (Q = s[68]);
  let $;
  return (
    s[69] !== Q || s[70] !== I || s[71] !== L
      ? (($ = (0, A.jsx)(ie, {
          open: !0,
          onOpenChange: I,
          size: `feature`,
          variant: `beacon`,
          showDialogClose: L,
          children: Q,
        })),
        (s[69] = Q),
        (s[70] = I),
        (s[71] = L),
        (s[72] = $))
      : ($ = s[72]),
    $
  );
}
var O, k, A;
function j() {
  return (j = e(() => {
    ((O = m()),
      s(),
      y(),
      (k = _()),
      u(),
      c(),
      v(),
      f(),
      p(),
      l(),
      d(),
      h(),
      b(),
      T(),
      S(),
      C(),
      w(),
      (A = g()));
  }))();
}
j();
export { E as PluginOnboardingDialog };
//# sourceMappingURL=dialog-3bdd8df7a5de.js.map
