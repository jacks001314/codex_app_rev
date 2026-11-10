import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  FBt as i,
  HO as a,
  LNt as o,
  OT as s,
  PBt as c,
  Qst as l,
  TY as u,
  VO as d,
  XOt as f,
  Y3 as p,
  Z3 as m,
  ZSt as h,
  ck as g,
  ew as _,
  iCt as v,
  kH as y,
  kT as b,
  okt as x,
  rk as S,
  sw as C,
  tk as w,
  tkt as T,
  uw as E,
} from "./app-shared-2feb3d4c6fcc.js";
import { _p as D, gp as O } from "./app-initial-ad16eaadf81f.js";
import { n as k, t as A } from "./entry-type-c9ae5f86f136.js";
import { n as j, t as M } from "./settings-configs-fc9555d3bbc1.js";
function N(e) {
  let t = (0, P.c)(25),
    { namespace: n, disabled: r, onChange: i } = e,
    a = (0, F.useId)(),
    o = `${a}-label`,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, I.jsx)(T, {
        id: `personalVault.entryType`,
        defaultMessage: `Type`,
        description: `Label for choosing whether a personal vault entry is an environment variable or a network secret`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === o
    ? (c = t[2])
    : ((c = (0, I.jsx)(`span`, { id: o, className: `text-sm select-none`, children: s })),
      (t[1] = o),
      (t[2] = c));
  let l = `${a}-label ${a}-value`,
    u = `${a}-value`,
    f;
  t[3] === n ? (f = t[4]) : ((f = (0, I.jsx)(A, { namespace: n })), (t[3] = n), (t[4] = f));
  let m;
  t[5] !== u || t[6] !== f
    ? ((m = (0, I.jsx)(`span`, { id: u, children: f })), (t[5] = u), (t[6] = f), (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = (0, I.jsx)(y, {})), (t[8] = h)) : (h = t[8]);
  let g;
  t[9] !== r || t[10] !== l || t[11] !== m
    ? ((g = (0, I.jsxs)(p, {
        "aria-labelledby": l,
        color: `outline`,
        size: `compact`,
        type: `button`,
        disabled: r,
        children: [m, h],
      })),
      (t[9] = r),
      (t[10] = l),
      (t[11] = m),
      (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = [`not_sensitive`, `sensitive`]), (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] === i
    ? (v = t[15])
    : ((v = _.map((e) =>
        (0, I.jsx)(
          S.RadioItem,
          {
            value: e,
            onSelect: () => i(e),
            SubText:
              e === `not_sensitive`
                ? (0, I.jsx)(T, {
                    id: `personalVault.variableTypeDescription`,
                    defaultMessage: `Real value inside the environment, visible to the task and its tools`,
                    description: `Subtitle for the Environment variable option in the personal vault Type menu. The task can read the actual value as an environment variable.`,
                  })
                : (0, I.jsx)(T, {
                    id: `personalVault.networkSecretTypeDescription`,
                    defaultMessage: `Placeholder inside the environment, replaced in outgoing requests`,
                    description: `Subtitle for the Network secret option in the personal vault Type menu. The task uses a placeholder; the network proxy sends the actual value only to domains allowed by the environment.`,
                  }),
            children: (0, I.jsx)(A, { namespace: e }),
          },
          e,
        ),
      )),
      (t[14] = i),
      (t[15] = v));
  let b;
  t[16] !== n || t[17] !== v
    ? ((b = (0, I.jsx)(S.RadioGroup, { value: n, children: v })), (t[16] = n), (t[17] = v), (t[18] = b))
    : (b = t[18]);
  let x;
  t[19] !== b || t[20] !== g
    ? ((x = (0, I.jsx)(w, { align: `end`, contentWidth: `panelWide`, triggerButton: g, children: b })),
      (t[19] = b),
      (t[20] = g),
      (t[21] = x))
    : (x = t[21]);
  let C;
  return (
    t[22] !== x || t[23] !== c
      ? ((C = (0, I.jsxs)(d, { className: `justify-between`, children: [c, x] })),
        (t[22] = x),
        (t[23] = c),
        (t[24] = C))
      : (C = t[24]),
    C
  );
}
var P, F, I;
function L() {
  return (L = e(() => {
    ((P = c()), (F = i()), f(), m(), a(), g(), u(), k(), (I = o()));
  }))();
}
function R(e) {
  let r = (0, V.c)(39),
    { target: i, disabled: a, onChange: o } = e,
    c = n(l),
    u = x(),
    { data: f, isFetching: m, isPending: h, isError: g } = v(j),
    _;
  if (
    r[0] !== f ||
    r[1] !== a ||
    r[2] !== u ||
    r[3] !== g ||
    r[4] !== m ||
    r[5] !== h ||
    r[6] !== o ||
    r[7] !== c ||
    r[8] !== i.ids ||
    r[9] !== i.type
  ) {
    let e = i.type === `environment_config_ids` ? i.ids : [],
      n = e.filter((e) => !f?.some((t) => t.id === e)),
      l;
    r[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, H.jsx)(`span`, {
          className: `text-sm select-none`,
          children: (0, H.jsx)(T, {
            id: `personalVault.appliesTo`,
            defaultMessage: `Applies to`,
            description: `Label for choosing which environments may use a personal vault entry`,
          }),
        })),
        (r[11] = l))
      : (l = r[11]);
    let v;
    r[12] === u
      ? (v = r[13])
      : ((v = u.formatMessage({
          id: `personalVault.appliesTo`,
          defaultMessage: `Applies to`,
          description: `Label for choosing which environments may use a personal vault entry`,
        })),
        (r[12] = u),
        (r[13] = v));
    let b;
    r[14] === i.type
      ? (b = r[15])
      : ((b =
          i.type === `all_environment_configs`
            ? (0, H.jsx)(T, {
                id: `personalVault.allEnvironments`,
                defaultMessage: `All environments`,
                description: `Allow all cloud environments to use a personal vault entry`,
              })
            : (0, H.jsx)(T, {
                id: `personalVault.selectedEnvironments`,
                defaultMessage: `Selected environments`,
                description: `Allow only selected cloud environments to use a personal vault entry`,
              })),
        (r[14] = i.type),
        (r[15] = b));
    let x;
    r[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = (0, H.jsx)(y, {})), (r[16] = x)) : (x = r[16]);
    let E;
    r[17] !== a || r[18] !== v || r[19] !== b
      ? ((E = (0, H.jsxs)(p, {
          "aria-label": v,
          color: `outline`,
          size: `compact`,
          type: `button`,
          disabled: a,
          children: [b, x],
        })),
        (r[17] = a),
        (r[18] = v),
        (r[19] = b),
        (r[20] = E))
      : (E = r[20]);
    let D;
    r[21] === o
      ? (D = r[22])
      : ((D = () => o({ type: `all_environment_configs` })), (r[21] = o), (r[22] = D));
    let k;
    r[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((k = (0, H.jsx)(T, {
          id: `personalVault.allEnvironments`,
          defaultMessage: `All environments`,
          description: `Allow all cloud environments to use a personal vault entry`,
        })),
        (r[23] = k))
      : (k = r[23]);
    let A;
    r[24] === D
      ? (A = r[25])
      : ((A = (0, H.jsx)(S.RadioItem, { value: `all_environment_configs`, onSelect: D, children: k })),
        (r[24] = D),
        (r[25] = A));
    let M;
    r[26] !== o || r[27] !== i.type
      ? ((M = () => {
          i.type !== `environment_config_ids` && o({ type: `environment_config_ids`, ids: [] });
        }),
        (r[26] = o),
        (r[27] = i.type),
        (r[28] = M))
      : (M = r[28]);
    let N;
    r[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((N = (0, H.jsx)(T, {
          id: `personalVault.selectedEnvironments`,
          defaultMessage: `Selected environments`,
          description: `Allow only selected cloud environments to use a personal vault entry`,
        })),
        (r[29] = N))
      : (N = r[29]);
    let P;
    r[30] === M
      ? (P = r[31])
      : ((P = (0, H.jsx)(S.RadioItem, { value: `environment_config_ids`, onSelect: M, children: N })),
        (r[30] = M),
        (r[31] = P));
    let F;
    r[32] !== P || r[33] !== A || r[34] !== i.type
      ? ((F = (0, H.jsxs)(S.RadioGroup, { value: i.type, children: [A, P] })),
        (r[32] = P),
        (r[33] = A),
        (r[34] = i.type),
        (r[35] = F))
      : (F = r[35]);
    let I;
    (r[36] !== F || r[37] !== E
      ? ((I = (0, H.jsxs)(d, {
          className: `justify-between`,
          children: [l, (0, H.jsx)(w, { align: `end`, contentWidth: `menu`, triggerButton: E, children: F })],
        })),
        (r[36] = F),
        (r[37] = E),
        (r[38] = I))
      : (I = r[38]),
      (_ = (0, H.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [
          I,
          i.type === `environment_config_ids`
            ? (0, H.jsxs)(H.Fragment, {
                children: [
                  (0, H.jsx)(`p`, {
                    className: `text-sm text-secondary select-none`,
                    children: (0, H.jsx)(T, {
                      id: `personalVault.selectTargets`,
                      defaultMessage: `Select up to 100 environments`,
                      description: `Instruction for selecting which configurations may use a personal secret`,
                    }),
                  }),
                  (0, H.jsxs)(t, {
                    className: `max-h-40 min-h-40 flex-1 overflow-y-auto`,
                    children: [
                      [...(f?.map(B) ?? []), ...n.map(z)].map((t) => {
                        let n = e.includes(t.id),
                          r = a || (!n && e.length >= 100);
                        return (0, H.jsx)(
                          `label`,
                          {
                            className: r ? void 0 : `cursor-interaction`,
                            htmlFor: `personal-target-${t.id}`,
                            children: (0, H.jsx)(C, {
                              label: (0, H.jsx)(`span`, { className: `select-none`, children: t.name }),
                              control: (i) =>
                                (0, H.jsx)(`div`, {
                                  className: `relative`,
                                  children: (0, H.jsx)(s, {
                                    id: `personal-target-${t.id}`,
                                    ...i,
                                    checked: n,
                                    disabled: r,
                                    onCheckedChange: (n) =>
                                      o({
                                        type: `environment_config_ids`,
                                        ids: n ? [...e, t.id] : e.filter((e) => e !== t.id),
                                      }),
                                  }),
                                }),
                            }),
                          },
                          t.id,
                        );
                      }),
                      h && !g
                        ? (0, H.jsx)(O, {
                            layout: `settings-row`,
                            children: (0, H.jsx)(T, {
                              id: `personalVault.targetsLoading`,
                              defaultMessage: `Loading environments…`,
                              description: `Loading configuration targets for a personal secret`,
                            }),
                          })
                        : null,
                      g
                        ? (0, H.jsxs)(O, {
                            layout: `settings-row`,
                            children: [
                              (0, H.jsx)(T, {
                                id: `personalVault.targetsError`,
                                defaultMessage: `Couldn’t load environments`,
                                description: `Configuration target list failed to load`,
                              }),
                              (0, H.jsx)(p, {
                                color: `secondary`,
                                size: `compact`,
                                disabled: m,
                                onClick: () => void c.query.invalidate(j),
                                children: (0, H.jsx)(T, {
                                  id: `personalVault.retry`,
                                  defaultMessage: `Retry`,
                                  description: `Retry loading personal vault metadata`,
                                }),
                              }),
                            ],
                          })
                        : null,
                      f?.length === 0 && !h && !g
                        ? (0, H.jsx)(O, {
                            layout: `settings-row`,
                            children: (0, H.jsx)(T, {
                              id: `personalVault.noTargets`,
                              defaultMessage: `No saved environments`,
                              description: `There are no cloud configurations available to target`,
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              })
            : null,
        ],
      })),
      (r[0] = f),
      (r[1] = a),
      (r[2] = u),
      (r[3] = g),
      (r[4] = m),
      (r[5] = h),
      (r[6] = o),
      (r[7] = c),
      (r[8] = i.ids),
      (r[9] = i.type),
      (r[10] = _));
  } else _ = r[10];
  return _;
}
function z(e) {
  return { id: e, name: e };
}
function B(e) {
  return { id: e.id, name: e.name };
}
var V, H;
function U() {
  return (U = e(() => {
    ((V = c()), h(), f(), m(), b(), a(), g(), u(), D(), r(), E(), _(), M(), (H = o()));
  }))();
}
export { L as i, U as n, N as r, R as t };
//# sourceMappingURL=targets-5fc9003b8270.js.map
