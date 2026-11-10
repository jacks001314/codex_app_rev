import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  FBt as i,
  HO as a,
  IO as ee,
  JO as o,
  KO as te,
  LNt as s,
  LO as ne,
  Mst as re,
  OT as ie,
  PBt as c,
  Qst as ae,
  RO as oe,
  WO as se,
  XOt as l,
  Y3 as ce,
  YOt as le,
  Z3 as u,
  ZSt as ue,
  ast as d,
  ew as de,
  ist as fe,
  jst as f,
  kT as p,
  okt as m,
  qO as pe,
  sw as me,
  tkt as h,
  uw as he,
  zO as ge,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as g,
  BRr as _e,
  ZLn as ve,
  _p as _,
  gp as ye,
  wLr as be,
  zRr as xe,
} from "./app-initial-ad16eaadf81f.js";
import { i as v, n as Se, r as Ce, t as we } from "./targets-5fc9003b8270.js";
function y(e) {
  let r = (0, De.c)(139),
    { accountId: i, userId: a, initialNamespace: o, onClose: s } = e,
    c = n(ae),
    l = m(),
    le = fe?.localPersonalSecrets,
    [u, ue] = (0, b.useState)(o),
    [d, de] = (0, b.useState)(``),
    f;
  r[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = []), (r[0] = f)) : (f = r[0]);
  let [p, he] = (0, b.useState)(f),
    g;
  r[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = { type: `all_environment_configs` }), (r[1] = g))
    : (g = r[1]);
  let [_, be] = (0, b.useState)(g),
    [v, Se] = (0, b.useState)(!1),
    [y, ke] = (0, b.useState)(!1),
    S;
  r[2] !== i || r[3] !== a
    ? ((S = [`personal-vault-local-variables`, i, a]), (r[2] = i), (r[3] = a), (r[4] = S))
    : (S = r[4]);
  let Ae;
  r[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = async () => {
        let e = await le?.listVariables();
        if (!e?.ok) throw Error(`Local environment variables could not be loaded`);
        return [...e.names];
      }),
      (r[5] = Ae))
    : (Ae = r[5]);
  let je;
  r[6] === S
    ? (je = r[7])
    : ((je = { queryKey: S, staleTime: 0, gcTime: 0, retry: !1, refetchOnWindowFocus: !1, queryFn: Ae }),
      (r[6] = S),
      (r[7] = je));
  let { data: Me, isPending: C, isError: w, isFetching: Ne, refetch: Pe } = re(je),
    T = _.type === `all_environment_configs` || _.ids.length > 0,
    Fe,
    E,
    D,
    O,
    k,
    A,
    j,
    M,
    N,
    P,
    F,
    I,
    L,
    R,
    z,
    B,
    V,
    H,
    U;
  if (
    r[8] !== i ||
    r[9] !== l ||
    r[10] !== w ||
    r[11] !== Ne ||
    r[12] !== C ||
    r[13] !== Me ||
    r[14] !== u ||
    r[15] !== s ||
    r[16] !== v ||
    r[17] !== Pe ||
    r[18] !== y ||
    r[19] !== c ||
    r[20] !== d ||
    r[21] !== p ||
    r[22] !== _ ||
    r[23] !== a ||
    r[24] !== T
  ) {
    let e = Me?.filter((e) => e.toLowerCase().includes(d.toLowerCase())),
      n;
    r[44] !== i || r[45] !== c || r[46] !== a
      ? ((n = () => c.get(xe) === i && c.get(_e) === a), (r[44] = i), (r[45] = c), (r[46] = a), (r[47] = n))
      : (n = r[47]);
    let o = n,
      ne;
    r[48] !== i ||
    r[49] !== o ||
    r[50] !== u ||
    r[51] !== s ||
    r[52] !== v ||
    r[53] !== y ||
    r[54] !== p ||
    r[55] !== _ ||
    r[56] !== a ||
    r[57] !== T
      ? ((ne = async function (e) {
          if ((e.preventDefault(), v || y || !T || p.length === 0 || le == null || !o())) return;
          Se(!0);
          let t = await le
            .importVariables({ accountId: i, userId: a, namespace: u, names: p, target: _ })
            .catch(Ee);
          (Se(!1),
            o() &&
              (t?.ok &&
              !(`next_cursor` in t.data) &&
              t.data.secrets.length === p.length &&
              t.data.secrets.every(Te)
                ? s(u)
                : ke(!0)));
        }),
        (r[48] = i),
        (r[49] = o),
        (r[50] = u),
        (r[51] = s),
        (r[52] = v),
        (r[53] = y),
        (r[54] = p),
        (r[55] = _),
        (r[56] = a),
        (r[57] = T),
        (r[58] = ne))
      : (ne = r[58]);
    let re = ne;
    ((O = se),
      (R = !0),
      r[59] !== u || r[60] !== s || r[61] !== v
        ? ((z = (e) => {
            !e && !v && s(u);
          }),
          (r[59] = u),
          (r[60] = s),
          (r[61] = v),
          (r[62] = z))
        : (z = r[62]),
      (D = ee),
      (P = `form`),
      r[63] === re ? (F = r[64]) : ((F = (e) => void re(e)), (r[63] = re), (r[64] = F)),
      (I = `viewport`));
    let ae;
    (r[65] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((ae = (0, x.jsx)(pe, {
          children: (0, x.jsx)(h, {
            id: `personalVault.importTitle`,
            defaultMessage: `Import local variables`,
            description: `Dialog title for importing local environment variables into the personal vault`,
          }),
        })),
        (r[65] = ae))
      : (ae = r[65]),
      r[66] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((L = (0, x.jsx)(ge, {
            children: (0, x.jsx)(oe, {
              title: ae,
              subtitle: (0, x.jsx)(te, {
                className: `contents`,
                children: (0, x.jsx)(h, {
                  id: `personalVault.importDescription`,
                  defaultMessage: `Choose up to 100 variables from this computer’s shell environment. Platform-reserved variables are excluded. Only selected values will be saved to your personal vault, and values stay hidden.`,
                  description: `Explains selective import from the desktop computer's shell into the personal vault`,
                }),
              }),
            }),
          })),
          (r[66] = L))
        : (L = r[66]),
      (E = ge),
      (N = `large`),
      (A = `flex flex-col gap-3`));
    let fe = v || y;
    r[67] !== u || r[68] !== fe
      ? ((j = (0, x.jsx)(Ce, { namespace: u, disabled: fe, onChange: ue })),
        (r[67] = u),
        (r[68] = fe),
        (r[69] = j))
      : (j = r[69]);
    let f;
    r[70] === l ? (f = r[71]) : ((f = l.formatMessage(Oe.searchVariables)), (r[70] = l), (r[71] = f));
    let m;
    r[72] === l ? (m = r[73]) : ((m = l.formatMessage(Oe.searchVariables)), (r[72] = l), (r[73] = m));
    let g;
    (r[74] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((g = (e) => de(e.target.value)), (r[74] = g))
      : (g = r[74]),
      r[75] !== v || r[76] !== d || r[77] !== f || r[78] !== m
        ? ((M = (0, x.jsx)(ve, {
            autoFocus: !0,
            "aria-label": f,
            placeholder: m,
            value: d,
            onChange: g,
            disabled: v,
          })),
          (r[75] = v),
          (r[76] = d),
          (r[77] = f),
          (r[78] = m),
          (r[79] = M))
        : (M = r[79]),
      (Fe = t),
      (B = `max-h-40 min-h-40 flex-1 overflow-y-auto`),
      r[80] === C
        ? (V = r[81])
        : ((V = C
            ? (0, x.jsx)(ye, {
                layout: `settings-row`,
                children: (0, x.jsx)(h, {
                  id: `personalVault.variablesLoading`,
                  defaultMessage: `Loading local variables…`,
                  description: `Loading state while reading local shell variable names`,
                }),
              })
            : null),
          (r[80] = C),
          (r[81] = V)),
      r[82] !== w || r[83] !== Ne || r[84] !== Pe
        ? ((H = w
            ? (0, x.jsxs)(ye, {
                layout: `settings-row`,
                children: [
                  (0, x.jsx)(h, {
                    id: `personalVault.variablesError`,
                    defaultMessage: `Couldn’t load local variables`,
                    description: `Safe error when the local shell environment cannot be read`,
                  }),
                  (0, x.jsx)(ce, {
                    color: `secondary`,
                    size: `compact`,
                    disabled: Ne,
                    onClick: () => void Pe(),
                    children: (0, x.jsx)(h, {
                      id: `personalVault.retry`,
                      defaultMessage: `Retry`,
                      description: `Retry loading personal vault metadata`,
                    }),
                  }),
                ],
              })
            : null),
          (r[82] = w),
          (r[83] = Ne),
          (r[84] = Pe),
          (r[85] = H))
        : (H = r[85]),
      (U =
        e?.length === 0
          ? (0, x.jsx)(ye, {
              layout: `settings-row`,
              children: (0, x.jsx)(h, {
                id: `personalVault.variablesEmpty`,
                defaultMessage: `No matching variables`,
                description: `Empty state for local environment variable search`,
              }),
            })
          : null),
      (k = e?.map((e) => {
        let t = p.includes(e),
          n = v || y || (!t && p.length >= 100);
        return (0, x.jsx)(
          `label`,
          {
            className: n ? void 0 : `cursor-interaction`,
            htmlFor: `local-variable-${e}`,
            children: (0, x.jsx)(me, {
              label: (0, x.jsx)(`span`, { className: `font-mono select-none`, children: e }),
              control: (r) =>
                (0, x.jsx)(`div`, {
                  className: `relative`,
                  children: (0, x.jsx)(ie, {
                    id: `local-variable-${e}`,
                    ...r,
                    checked: t,
                    disabled: n,
                    onCheckedChange: (t) => he(t ? [...p, e] : p.filter((t) => t !== e)),
                  }),
                }),
            }),
          },
          e,
        );
      })),
      (r[8] = i),
      (r[9] = l),
      (r[10] = w),
      (r[11] = Ne),
      (r[12] = C),
      (r[13] = Me),
      (r[14] = u),
      (r[15] = s),
      (r[16] = v),
      (r[17] = Pe),
      (r[18] = y),
      (r[19] = c),
      (r[20] = d),
      (r[21] = p),
      (r[22] = _),
      (r[23] = a),
      (r[24] = T),
      (r[25] = Fe),
      (r[26] = E),
      (r[27] = D),
      (r[28] = O),
      (r[29] = k),
      (r[30] = A),
      (r[31] = j),
      (r[32] = M),
      (r[33] = N),
      (r[34] = P),
      (r[35] = F),
      (r[36] = I),
      (r[37] = L),
      (r[38] = R),
      (r[39] = z),
      (r[40] = B),
      (r[41] = V),
      (r[42] = H),
      (r[43] = U));
  } else
    ((Fe = r[25]),
      (E = r[26]),
      (D = r[27]),
      (O = r[28]),
      (k = r[29]),
      (A = r[30]),
      (j = r[31]),
      (M = r[32]),
      (N = r[33]),
      (P = r[34]),
      (F = r[35]),
      (I = r[36]),
      (L = r[37]),
      (R = r[38]),
      (z = r[39]),
      (B = r[40]),
      (V = r[41]),
      (H = r[42]),
      (U = r[43]));
  let W;
  r[86] !== Fe || r[87] !== k || r[88] !== B || r[89] !== V || r[90] !== H || r[91] !== U
    ? ((W = (0, x.jsxs)(Fe, { className: B, children: [V, H, U, k] })),
      (r[86] = Fe),
      (r[87] = k),
      (r[88] = B),
      (r[89] = V),
      (r[90] = H),
      (r[91] = U),
      (r[92] = W))
    : (W = r[92]);
  let G;
  r[93] === p.length
    ? (G = r[94])
    : ((G = (0, x.jsx)(`p`, {
        className: `text-sm text-secondary select-none`,
        role: `status`,
        children: (0, x.jsx)(h, {
          id: `personalVault.variablesSelected`,
          defaultMessage: `{count, plural, one {# variable selected} other {# variables selected}}`,
          description: `Number of local environment variables selected for import, including those hidden by search`,
          values: { count: p.length },
        }),
      })),
      (r[93] = p.length),
      (r[94] = G));
  let Ie = v || y,
    K;
  r[95] !== Ie || r[96] !== _
    ? ((K = (0, x.jsx)(we, { target: _, disabled: Ie, onChange: be })),
      (r[95] = Ie),
      (r[96] = _),
      (r[97] = K))
    : (K = r[97]);
  let q;
  r[98] !== A || r[99] !== j || r[100] !== M || r[101] !== W || r[102] !== G || r[103] !== K
    ? ((q = (0, x.jsxs)(`div`, { className: A, children: [j, M, W, G, K] })),
      (r[98] = A),
      (r[99] = j),
      (r[100] = M),
      (r[101] = W),
      (r[102] = G),
      (r[103] = K),
      (r[104] = q))
    : (q = r[104]);
  let J;
  r[105] !== E || r[106] !== N || r[107] !== q
    ? ((J = (0, x.jsx)(E, { spacing: N, children: q })),
      (r[105] = E),
      (r[106] = N),
      (r[107] = q),
      (r[108] = J))
    : (J = r[108]);
  let Y;
  r[109] === y
    ? (Y = r[110])
    : ((Y = y
        ? (0, x.jsx)(ge, {
            spacing: `large`,
            children: (0, x.jsx)(`p`, {
              role: `alert`,
              className: `text-sm text-danger`,
              children: (0, x.jsx)(h, {
                id: `personalVault.importError`,
                defaultMessage: `Couldn’t confirm the full import. Some secrets may have been saved. Close this dialog to check the vault before trying again; selected keys must not overlap existing secrets’ environments.`,
                description: `Safe error for failed, partial, or uncertain batch imports, instructing the user to check for saved secrets before retrying`,
              }),
            }),
          })
        : null),
      (r[109] = y),
      (r[110] = Y));
  let X;
  r[111] !== u || r[112] !== s ? ((X = () => s(u)), (r[111] = u), (r[112] = s), (r[113] = X)) : (X = r[113]);
  let Le;
  r[114] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Le = (0, x.jsx)(h, {
        id: `personalVault.closeImport`,
        defaultMessage: `Close`,
        description: `Close the local variable import dialog and reload the vault`,
      })),
      (r[114] = Le))
    : (Le = r[114]);
  let Z;
  r[115] !== v || r[116] !== X
    ? ((Z = (0, x.jsx)(ce, { color: `secondary`, type: `button`, disabled: v, onClick: X, children: Le })),
      (r[115] = v),
      (r[116] = X),
      (r[117] = Z))
    : (Z = r[117]);
  let Re = C || w || y || !T || p.length === 0,
    ze;
  r[118] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ze = (0, x.jsx)(h, {
        id: `personalVault.importSelected`,
        defaultMessage: `Import selected`,
        description: `Save the selected local environment variables to the personal vault`,
      })),
      (r[118] = ze))
    : (ze = r[118]);
  let Q;
  r[119] !== v || r[120] !== Re
    ? ((Q = (0, x.jsx)(ce, { color: `primary`, type: `submit`, loading: v, disabled: Re, children: ze })),
      (r[119] = v),
      (r[120] = Re),
      (r[121] = Q))
    : (Q = r[121]);
  let Be;
  r[122] !== Z || r[123] !== Q
    ? ((Be = (0, x.jsx)(ge, {
        spacing: `large`,
        children: (0, x.jsxs)(ne, { expandSingleButton: !1, children: [Z, Q] }),
      })),
      (r[122] = Z),
      (r[123] = Q),
      (r[124] = Be))
    : (Be = r[124]);
  let $;
  r[125] !== D ||
  r[126] !== P ||
  r[127] !== F ||
  r[128] !== I ||
  r[129] !== L ||
  r[130] !== J ||
  r[131] !== Y ||
  r[132] !== Be
    ? (($ = (0, x.jsxs)(D, { as: P, onSubmit: F, size: I, children: [L, J, Y, Be] })),
      (r[125] = D),
      (r[126] = P),
      (r[127] = F),
      (r[128] = I),
      (r[129] = L),
      (r[130] = J),
      (r[131] = Y),
      (r[132] = Be),
      (r[133] = $))
    : ($ = r[133]);
  let Ve;
  return (
    r[134] !== O || r[135] !== R || r[136] !== z || r[137] !== $
      ? ((Ve = (0, x.jsx)(O, { open: R, onOpenChange: z, children: $ })),
        (r[134] = O),
        (r[135] = R),
        (r[136] = z),
        (r[137] = $),
        (r[138] = Ve))
      : (Ve = r[138]),
    Ve
  );
}
function Te(e) {
  return e.id != null && e.error == null;
}
function Ee() {
  return null;
}
var De, b, x, Oe;
function ke() {
  return (ke = e(() => {
    ((De = c()),
      f(),
      ue(),
      (b = i()),
      l(),
      be(),
      u(),
      p(),
      o(),
      a(),
      _(),
      g(),
      d(),
      r(),
      he(),
      de(),
      v(),
      Se(),
      (x = s()),
      (Oe = le({
        searchVariables: {
          id: `personalVault.searchVariables`,
          defaultMessage: `Search variable names`,
          description: `Accessible label and placeholder for filtering local environment variable names`,
        },
      })));
  }))();
}
ke();
export { y as PersonalSecretImportDialog };
//# sourceMappingURL=import-dialog-18c2e6f816a1.js.map
