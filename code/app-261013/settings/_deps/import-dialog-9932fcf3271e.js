import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  Cot as r,
  HT as i,
  IDt as a,
  Ixt as ee,
  JC as o,
  Kat as te,
  Pxt as ne,
  VDt as re,
  VT as ie,
  Xot as ae,
  Yot as s,
  _O as oe,
  cO as se,
  fO as c,
  gO as ce,
  iw as l,
  jDt as le,
  lO as ue,
  mO as de,
  oO as fe,
  qC as pe,
  qat as u,
  sO as d,
  t3 as me,
  tw as he,
  vO as f,
  vzt as ge,
  wot as p,
  xMt as m,
  yzt as _e,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as h,
  GMr as ve,
  TPn as ye,
  XMr as be,
  hp as g,
  mp as xe,
  tNr as Se,
} from "./app-initial-5851df3f6cb1.js";
import { i as _, n as Ce, r as we, t as Te } from "./targets-491db353a53e.js";
function v(e) {
  let n = (0, Oe.c)(139),
    { accountId: i, userId: o, initialNamespace: ne, onClose: s } = e,
    c = ee(r),
    l = re(),
    le = te?.localPersonalSecrets,
    [u, me] = (0, y.useState)(ne),
    [f, ge] = (0, y.useState)(``),
    p;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = []), (n[0] = p)) : (p = n[0]);
  let [m, _e] = (0, y.useState)(p),
    h;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = { type: `all_environment_configs` }), (n[1] = h))
    : (h = n[1]);
  let [g, Se] = (0, y.useState)(h),
    [_, Ce] = (0, y.useState)(!1),
    [v, Ae] = (0, y.useState)(!1),
    x;
  n[2] !== i || n[3] !== o
    ? ((x = [`personal-vault-local-variables`, i, o]), (n[2] = i), (n[3] = o), (n[4] = x))
    : (x = n[4]);
  let je;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = async () => {
        let e = await le?.listVariables();
        if (!e?.ok) throw Error(`Local environment variables could not be loaded`);
        return [...e.names];
      }),
      (n[5] = je))
    : (je = n[5]);
  let Me;
  n[6] === x
    ? (Me = n[7])
    : ((Me = { queryKey: x, staleTime: 0, gcTime: 0, retry: !1, refetchOnWindowFocus: !1, queryFn: je }),
      (n[6] = x),
      (n[7] = Me));
  let { data: Ne, isPending: S, isError: C, isFetching: Pe, refetch: Fe } = ae(Me),
    w = g.type === `all_environment_configs` || g.ids.length > 0,
    T,
    E,
    D,
    O,
    k,
    A,
    j,
    M,
    N,
    Ie,
    P,
    F,
    I,
    L,
    R,
    z,
    B,
    V,
    H;
  if (
    n[8] !== i ||
    n[9] !== l ||
    n[10] !== C ||
    n[11] !== Pe ||
    n[12] !== S ||
    n[13] !== Ne ||
    n[14] !== u ||
    n[15] !== s ||
    n[16] !== _ ||
    n[17] !== Fe ||
    n[18] !== v ||
    n[19] !== c ||
    n[20] !== f ||
    n[21] !== m ||
    n[22] !== g ||
    n[23] !== o ||
    n[24] !== w
  ) {
    let e = Ne?.filter((e) => e.toLowerCase().includes(f.toLowerCase())),
      r;
    n[44] !== i || n[45] !== c || n[46] !== o
      ? ((r = () => c.get(ve) === i && c.get(be) === o), (n[44] = i), (n[45] = c), (n[46] = o), (n[47] = r))
      : (r = n[47]);
    let ee = r,
      te;
    n[48] !== i ||
    n[49] !== ee ||
    n[50] !== u ||
    n[51] !== s ||
    n[52] !== _ ||
    n[53] !== v ||
    n[54] !== m ||
    n[55] !== g ||
    n[56] !== o ||
    n[57] !== w
      ? ((te = async function (e) {
          if ((e.preventDefault(), _ || v || !w || m.length === 0 || le == null || !ee())) return;
          Ce(!0);
          let t = await le
            .importVariables({ accountId: i, userId: o, namespace: u, names: m, target: g })
            .catch(De);
          (Ce(!1),
            ee() &&
              (t?.ok &&
              !(`next_cursor` in t.data) &&
              t.data.secrets.length === m.length &&
              t.data.secrets.every(Ee)
                ? s(u)
                : Ae(!0)));
        }),
        (n[48] = i),
        (n[49] = ee),
        (n[50] = u),
        (n[51] = s),
        (n[52] = _),
        (n[53] = v),
        (n[54] = m),
        (n[55] = g),
        (n[56] = o),
        (n[57] = w),
        (n[58] = te))
      : (te = n[58]);
    let ne = te;
    ((O = de),
      (L = !0),
      n[59] !== u || n[60] !== s || n[61] !== _
        ? ((R = (e) => {
            !e && !_ && s(u);
          }),
          (n[59] = u),
          (n[60] = s),
          (n[61] = _),
          (n[62] = R))
        : (R = n[62]),
      (D = fe),
      (Ie = `form`),
      n[63] === ne ? (P = n[64]) : ((P = (e) => void ne(e)), (n[63] = ne), (n[64] = P)),
      (F = `viewport`));
    let re;
    (n[65] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((re = (0, b.jsx)(oe, {
          children: (0, b.jsx)(a, {
            id: `personalVault.importTitle`,
            defaultMessage: `Import local variables`,
            description: `Dialog title for importing local environment variables into the personal vault`,
          }),
        })),
        (n[65] = re))
      : (re = n[65]),
      n[66] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((I = (0, b.jsx)(ue, {
            children: (0, b.jsx)(se, {
              title: re,
              subtitle: (0, b.jsx)(ce, {
                className: `contents`,
                children: (0, b.jsx)(a, {
                  id: `personalVault.importDescription`,
                  defaultMessage: `Choose up to 100 variables from this computer’s shell environment. Platform-reserved variables are excluded. Only selected values will be saved to your personal vault, and values stay hidden.`,
                  description: `Explains selective import from the desktop computer's shell into the personal vault`,
                }),
              }),
            }),
          })),
          (n[66] = I))
        : (I = n[66]),
      (E = ue),
      (N = `large`),
      (A = `flex flex-col gap-3`));
    let ae = _ || v;
    n[67] !== u || n[68] !== ae
      ? ((j = (0, b.jsx)(we, { namespace: u, disabled: ae, onChange: me })),
        (n[67] = u),
        (n[68] = ae),
        (n[69] = j))
      : (j = n[69]);
    let d;
    n[70] === l ? (d = n[71]) : ((d = l.formatMessage(ke.searchVariables)), (n[70] = l), (n[71] = d));
    let p;
    n[72] === l ? (p = n[73]) : ((p = l.formatMessage(ke.searchVariables)), (n[72] = l), (n[73] = p));
    let h;
    (n[74] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((h = (e) => ge(e.target.value)), (n[74] = h))
      : (h = n[74]),
      n[75] !== _ || n[76] !== f || n[77] !== d || n[78] !== p
        ? ((M = (0, b.jsx)(ye, {
            autoFocus: !0,
            "aria-label": d,
            placeholder: p,
            value: f,
            onChange: h,
            disabled: _,
          })),
          (n[75] = _),
          (n[76] = f),
          (n[77] = d),
          (n[78] = p),
          (n[79] = M))
        : (M = n[79]),
      (T = pe),
      (z = `max-h-40 min-h-40 flex-1 overflow-y-auto`),
      n[80] === S
        ? (B = n[81])
        : ((B = S
            ? (0, b.jsx)(xe, {
                layout: `settings-row`,
                children: (0, b.jsx)(a, {
                  id: `personalVault.variablesLoading`,
                  defaultMessage: `Loading local variables…`,
                  description: `Loading state while reading local shell variable names`,
                }),
              })
            : null),
          (n[80] = S),
          (n[81] = B)),
      n[82] !== C || n[83] !== Pe || n[84] !== Fe
        ? ((V = C
            ? (0, b.jsxs)(xe, {
                layout: `settings-row`,
                children: [
                  (0, b.jsx)(a, {
                    id: `personalVault.variablesError`,
                    defaultMessage: `Couldn’t load local variables`,
                    description: `Safe error when the local shell environment cannot be read`,
                  }),
                  (0, b.jsx)(t, {
                    color: `secondary`,
                    size: `compact`,
                    disabled: Pe,
                    onClick: () => void Fe(),
                    children: (0, b.jsx)(a, {
                      id: `personalVault.retry`,
                      defaultMessage: `Retry`,
                      description: `Retry loading personal vault metadata`,
                    }),
                  }),
                ],
              })
            : null),
          (n[82] = C),
          (n[83] = Pe),
          (n[84] = Fe),
          (n[85] = V))
        : (V = n[85]),
      (H =
        e?.length === 0
          ? (0, b.jsx)(xe, {
              layout: `settings-row`,
              children: (0, b.jsx)(a, {
                id: `personalVault.variablesEmpty`,
                defaultMessage: `No matching variables`,
                description: `Empty state for local environment variable search`,
              }),
            })
          : null),
      (k = e?.map((e) => {
        let t = m.includes(e),
          n = _ || v || (!t && m.length >= 100);
        return (0, b.jsx)(
          `label`,
          {
            className: n ? void 0 : `cursor-interaction`,
            htmlFor: `local-variable-${e}`,
            children: (0, b.jsx)(he, {
              label: (0, b.jsx)(`span`, { className: `font-mono select-none`, children: e }),
              control: (r) =>
                (0, b.jsx)(`div`, {
                  className: `relative`,
                  children: (0, b.jsx)(ie, {
                    id: `local-variable-${e}`,
                    ...r,
                    checked: t,
                    disabled: n,
                    onCheckedChange: (t) => _e(t ? [...m, e] : m.filter((t) => t !== e)),
                  }),
                }),
            }),
          },
          e,
        );
      })),
      (n[8] = i),
      (n[9] = l),
      (n[10] = C),
      (n[11] = Pe),
      (n[12] = S),
      (n[13] = Ne),
      (n[14] = u),
      (n[15] = s),
      (n[16] = _),
      (n[17] = Fe),
      (n[18] = v),
      (n[19] = c),
      (n[20] = f),
      (n[21] = m),
      (n[22] = g),
      (n[23] = o),
      (n[24] = w),
      (n[25] = T),
      (n[26] = E),
      (n[27] = D),
      (n[28] = O),
      (n[29] = k),
      (n[30] = A),
      (n[31] = j),
      (n[32] = M),
      (n[33] = N),
      (n[34] = Ie),
      (n[35] = P),
      (n[36] = F),
      (n[37] = I),
      (n[38] = L),
      (n[39] = R),
      (n[40] = z),
      (n[41] = B),
      (n[42] = V),
      (n[43] = H));
  } else
    ((T = n[25]),
      (E = n[26]),
      (D = n[27]),
      (O = n[28]),
      (k = n[29]),
      (A = n[30]),
      (j = n[31]),
      (M = n[32]),
      (N = n[33]),
      (Ie = n[34]),
      (P = n[35]),
      (F = n[36]),
      (I = n[37]),
      (L = n[38]),
      (R = n[39]),
      (z = n[40]),
      (B = n[41]),
      (V = n[42]),
      (H = n[43]));
  let U;
  n[86] !== T || n[87] !== k || n[88] !== z || n[89] !== B || n[90] !== V || n[91] !== H
    ? ((U = (0, b.jsxs)(T, { className: z, children: [B, V, H, k] })),
      (n[86] = T),
      (n[87] = k),
      (n[88] = z),
      (n[89] = B),
      (n[90] = V),
      (n[91] = H),
      (n[92] = U))
    : (U = n[92]);
  let W;
  n[93] === m.length
    ? (W = n[94])
    : ((W = (0, b.jsx)(`p`, {
        className: `text-sm text-secondary select-none`,
        role: `status`,
        children: (0, b.jsx)(a, {
          id: `personalVault.variablesSelected`,
          defaultMessage: `{count, plural, one {# variable selected} other {# variables selected}}`,
          description: `Number of local environment variables selected for import, including those hidden by search`,
          values: { count: m.length },
        }),
      })),
      (n[93] = m.length),
      (n[94] = W));
  let Le = _ || v,
    G;
  n[95] !== Le || n[96] !== g
    ? ((G = (0, b.jsx)(Te, { target: g, disabled: Le, onChange: Se })),
      (n[95] = Le),
      (n[96] = g),
      (n[97] = G))
    : (G = n[97]);
  let K;
  n[98] !== A || n[99] !== j || n[100] !== M || n[101] !== U || n[102] !== W || n[103] !== G
    ? ((K = (0, b.jsxs)(`div`, { className: A, children: [j, M, U, W, G] })),
      (n[98] = A),
      (n[99] = j),
      (n[100] = M),
      (n[101] = U),
      (n[102] = W),
      (n[103] = G),
      (n[104] = K))
    : (K = n[104]);
  let q;
  n[105] !== E || n[106] !== N || n[107] !== K
    ? ((q = (0, b.jsx)(E, { spacing: N, children: K })),
      (n[105] = E),
      (n[106] = N),
      (n[107] = K),
      (n[108] = q))
    : (q = n[108]);
  let J;
  n[109] === v
    ? (J = n[110])
    : ((J = v
        ? (0, b.jsx)(ue, {
            spacing: `large`,
            children: (0, b.jsx)(`p`, {
              role: `alert`,
              className: `text-sm text-danger`,
              children: (0, b.jsx)(a, {
                id: `personalVault.importError`,
                defaultMessage: `Couldn’t confirm the full import. Some secrets may have been saved. Close this dialog to check the vault before trying again; selected keys must not overlap existing secrets’ environments.`,
                description: `Safe error for failed, partial, or uncertain batch imports, instructing the user to check for saved secrets before retrying`,
              }),
            }),
          })
        : null),
      (n[109] = v),
      (n[110] = J));
  let Y;
  n[111] !== u || n[112] !== s ? ((Y = () => s(u)), (n[111] = u), (n[112] = s), (n[113] = Y)) : (Y = n[113]);
  let Re;
  n[114] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Re = (0, b.jsx)(a, {
        id: `personalVault.closeImport`,
        defaultMessage: `Close`,
        description: `Close the local variable import dialog and reload the vault`,
      })),
      (n[114] = Re))
    : (Re = n[114]);
  let X;
  n[115] !== _ || n[116] !== Y
    ? ((X = (0, b.jsx)(t, { color: `secondary`, type: `button`, disabled: _, onClick: Y, children: Re })),
      (n[115] = _),
      (n[116] = Y),
      (n[117] = X))
    : (X = n[117]);
  let ze = S || C || v || !w || m.length === 0,
    Be;
  n[118] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (0, b.jsx)(a, {
        id: `personalVault.importSelected`,
        defaultMessage: `Import selected`,
        description: `Save the selected local environment variables to the personal vault`,
      })),
      (n[118] = Be))
    : (Be = n[118]);
  let Z;
  n[119] !== _ || n[120] !== ze
    ? ((Z = (0, b.jsx)(t, { color: `primary`, type: `submit`, loading: _, disabled: ze, children: Be })),
      (n[119] = _),
      (n[120] = ze),
      (n[121] = Z))
    : (Z = n[121]);
  let Q;
  n[122] !== X || n[123] !== Z
    ? ((Q = (0, b.jsx)(ue, {
        spacing: `large`,
        children: (0, b.jsxs)(d, { expandSingleButton: !1, children: [X, Z] }),
      })),
      (n[122] = X),
      (n[123] = Z),
      (n[124] = Q))
    : (Q = n[124]);
  let $;
  n[125] !== D ||
  n[126] !== Ie ||
  n[127] !== P ||
  n[128] !== F ||
  n[129] !== I ||
  n[130] !== q ||
  n[131] !== J ||
  n[132] !== Q
    ? (($ = (0, b.jsxs)(D, { as: Ie, onSubmit: P, size: F, children: [I, q, J, Q] })),
      (n[125] = D),
      (n[126] = Ie),
      (n[127] = P),
      (n[128] = F),
      (n[129] = I),
      (n[130] = q),
      (n[131] = J),
      (n[132] = Q),
      (n[133] = $))
    : ($ = n[133]);
  let Ve;
  return (
    n[134] !== O || n[135] !== L || n[136] !== R || n[137] !== $
      ? ((Ve = (0, b.jsx)(O, { open: L, onOpenChange: R, children: $ })),
        (n[134] = O),
        (n[135] = L),
        (n[136] = R),
        (n[137] = $),
        (n[138] = Ve))
      : (Ve = n[138]),
    Ve
  );
}
function Ee(e) {
  return e.id != null && e.error == null;
}
function De() {
  return null;
}
var Oe, y, b, ke;
function Ae() {
  return (Ae = e(() => {
    ((Oe = ge()),
      s(),
      ne(),
      (y = _e()),
      le(),
      Se(),
      me(),
      i(),
      f(),
      c(),
      g(),
      h(),
      u(),
      p(),
      l(),
      o(),
      _(),
      Ce(),
      (b = m()),
      (ke = n({
        searchVariables: {
          id: `personalVault.searchVariables`,
          defaultMessage: `Search variable names`,
          description: `Accessible label and placeholder for filtering local environment variable names`,
        },
      })));
  }))();
}
Ae();
export { v as PersonalSecretImportDialog };
//# sourceMappingURL=import-dialog-9932fcf3271e.js.map
