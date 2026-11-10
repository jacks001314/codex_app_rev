import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  CO as r,
  Cot as i,
  HT as a,
  IDt as o,
  Ixt as s,
  JC as c,
  NV as l,
  Pxt as u,
  TJ as d,
  TO as f,
  VDt as p,
  VT as m,
  Vxt as h,
  dO as g,
  fO as _,
  iw as v,
  jDt as y,
  qC as b,
  t3 as x,
  tw as S,
  vzt as C,
  wot as w,
  xMt as T,
  yzt as E,
} from "./app-shared-bbfeca5e5737.js";
import { hp as D, mp as O } from "./app-initial-5851df3f6cb1.js";
import { n as k, t as A } from "./entry-type-6eeefc5c8bdc.js";
import { n as j, t as M } from "./settings-configs-7488cda7afdb.js";
function N(e) {
  let n = (0, P.c)(25),
    { namespace: i, disabled: a, onChange: s } = e,
    c = (0, F.useId)(),
    u = `${c}-label`,
    d;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, I.jsx)(o, {
        id: `personalVault.entryType`,
        defaultMessage: `Type`,
        description: `Label for choosing whether a personal vault entry is an environment variable or a network secret`,
      })),
      (n[0] = d))
    : (d = n[0]);
  let p;
  n[1] === u
    ? (p = n[2])
    : ((p = (0, I.jsx)(`span`, { id: u, className: `text-sm select-none`, children: d })),
      (n[1] = u),
      (n[2] = p));
  let m = `${c}-label ${c}-value`,
    h = `${c}-value`,
    _;
  n[3] === i ? (_ = n[4]) : ((_ = (0, I.jsx)(A, { namespace: i })), (n[3] = i), (n[4] = _));
  let v;
  n[5] !== h || n[6] !== _
    ? ((v = (0, I.jsx)(`span`, { id: h, children: _ })), (n[5] = h), (n[6] = _), (n[7] = v))
    : (v = n[7]);
  let y;
  n[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = (0, I.jsx)(l, {})), (n[8] = y)) : (y = n[8]);
  let b;
  n[9] !== a || n[10] !== m || n[11] !== v
    ? ((b = (0, I.jsxs)(t, {
        "aria-labelledby": m,
        color: `outline`,
        size: `compact`,
        type: `button`,
        disabled: a,
        children: [v, y],
      })),
      (n[9] = a),
      (n[10] = m),
      (n[11] = v),
      (n[12] = b))
    : (b = n[12]);
  let x;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = [`not_sensitive`, `sensitive`]), (n[13] = x))
    : (x = n[13]);
  let S;
  n[14] === s
    ? (S = n[15])
    : ((S = x.map((e) =>
        (0, I.jsx)(
          f.RadioItem,
          {
            value: e,
            onSelect: () => s(e),
            SubText:
              e === `not_sensitive`
                ? (0, I.jsx)(o, {
                    id: `personalVault.variableTypeDescription`,
                    defaultMessage: `Real value inside the environment, visible to the task and its tools`,
                    description: `Subtitle for the Environment variable option in the personal vault Type menu. The task can read the actual value as an environment variable.`,
                  })
                : (0, I.jsx)(o, {
                    id: `personalVault.networkSecretTypeDescription`,
                    defaultMessage: `Placeholder inside the environment, replaced in outgoing requests`,
                    description: `Subtitle for the Network secret option in the personal vault Type menu. The task uses a placeholder; the network proxy sends the actual value only to domains allowed by the environment.`,
                  }),
            children: (0, I.jsx)(A, { namespace: e }),
          },
          e,
        ),
      )),
      (n[14] = s),
      (n[15] = S));
  let C;
  n[16] !== i || n[17] !== S
    ? ((C = (0, I.jsx)(f.RadioGroup, { value: i, children: S })), (n[16] = i), (n[17] = S), (n[18] = C))
    : (C = n[18]);
  let w;
  n[19] !== C || n[20] !== b
    ? ((w = (0, I.jsx)(r, { align: `end`, contentWidth: `panelWide`, triggerButton: b, children: C })),
      (n[19] = C),
      (n[20] = b),
      (n[21] = w))
    : (w = n[21]);
  let T;
  return (
    n[22] !== w || n[23] !== p
      ? ((T = (0, I.jsxs)(g, { className: `justify-between`, children: [p, w] })),
        (n[22] = w),
        (n[23] = p),
        (n[24] = T))
      : (T = n[24]),
    T
  );
}
var P, F, I;
function L() {
  return (L = e(() => {
    ((P = C()), (F = E()), y(), x(), _(), n(), d(), k(), (I = T()));
  }))();
}
function R(e) {
  let n = (0, V.c)(39),
    { target: a, disabled: c, onChange: u } = e,
    d = s(i),
    _ = p(),
    { data: v, isFetching: y, isPending: x, isError: C } = h(j),
    w;
  if (
    n[0] !== v ||
    n[1] !== c ||
    n[2] !== _ ||
    n[3] !== C ||
    n[4] !== y ||
    n[5] !== x ||
    n[6] !== u ||
    n[7] !== d ||
    n[8] !== a.ids ||
    n[9] !== a.type
  ) {
    let e = a.type === `environment_config_ids` ? a.ids : [],
      i = e.filter((e) => !v?.some((t) => t.id === e)),
      s;
    n[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, H.jsx)(`span`, {
          className: `text-sm select-none`,
          children: (0, H.jsx)(o, {
            id: `personalVault.appliesTo`,
            defaultMessage: `Applies to`,
            description: `Label for choosing which environments may use a personal vault entry`,
          }),
        })),
        (n[11] = s))
      : (s = n[11]);
    let p;
    n[12] === _
      ? (p = n[13])
      : ((p = _.formatMessage({
          id: `personalVault.appliesTo`,
          defaultMessage: `Applies to`,
          description: `Label for choosing which environments may use a personal vault entry`,
        })),
        (n[12] = _),
        (n[13] = p));
    let h;
    n[14] === a.type
      ? (h = n[15])
      : ((h =
          a.type === `all_environment_configs`
            ? (0, H.jsx)(o, {
                id: `personalVault.allEnvironments`,
                defaultMessage: `All environments`,
                description: `Allow all cloud environments to use a personal vault entry`,
              })
            : (0, H.jsx)(o, {
                id: `personalVault.selectedEnvironments`,
                defaultMessage: `Selected environments`,
                description: `Allow only selected cloud environments to use a personal vault entry`,
              })),
        (n[14] = a.type),
        (n[15] = h));
    let T;
    n[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = (0, H.jsx)(l, {})), (n[16] = T)) : (T = n[16]);
    let E;
    n[17] !== c || n[18] !== p || n[19] !== h
      ? ((E = (0, H.jsxs)(t, {
          "aria-label": p,
          color: `outline`,
          size: `compact`,
          type: `button`,
          disabled: c,
          children: [h, T],
        })),
        (n[17] = c),
        (n[18] = p),
        (n[19] = h),
        (n[20] = E))
      : (E = n[20]);
    let D;
    n[21] === u
      ? (D = n[22])
      : ((D = () => u({ type: `all_environment_configs` })), (n[21] = u), (n[22] = D));
    let k;
    n[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((k = (0, H.jsx)(o, {
          id: `personalVault.allEnvironments`,
          defaultMessage: `All environments`,
          description: `Allow all cloud environments to use a personal vault entry`,
        })),
        (n[23] = k))
      : (k = n[23]);
    let A;
    n[24] === D
      ? (A = n[25])
      : ((A = (0, H.jsx)(f.RadioItem, { value: `all_environment_configs`, onSelect: D, children: k })),
        (n[24] = D),
        (n[25] = A));
    let M;
    n[26] !== u || n[27] !== a.type
      ? ((M = () => {
          a.type !== `environment_config_ids` && u({ type: `environment_config_ids`, ids: [] });
        }),
        (n[26] = u),
        (n[27] = a.type),
        (n[28] = M))
      : (M = n[28]);
    let N;
    n[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((N = (0, H.jsx)(o, {
          id: `personalVault.selectedEnvironments`,
          defaultMessage: `Selected environments`,
          description: `Allow only selected cloud environments to use a personal vault entry`,
        })),
        (n[29] = N))
      : (N = n[29]);
    let P;
    n[30] === M
      ? (P = n[31])
      : ((P = (0, H.jsx)(f.RadioItem, { value: `environment_config_ids`, onSelect: M, children: N })),
        (n[30] = M),
        (n[31] = P));
    let F;
    n[32] !== P || n[33] !== A || n[34] !== a.type
      ? ((F = (0, H.jsxs)(f.RadioGroup, { value: a.type, children: [A, P] })),
        (n[32] = P),
        (n[33] = A),
        (n[34] = a.type),
        (n[35] = F))
      : (F = n[35]);
    let I;
    (n[36] !== F || n[37] !== E
      ? ((I = (0, H.jsxs)(g, {
          className: `justify-between`,
          children: [s, (0, H.jsx)(r, { align: `end`, contentWidth: `menu`, triggerButton: E, children: F })],
        })),
        (n[36] = F),
        (n[37] = E),
        (n[38] = I))
      : (I = n[38]),
      (w = (0, H.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [
          I,
          a.type === `environment_config_ids`
            ? (0, H.jsxs)(H.Fragment, {
                children: [
                  (0, H.jsx)(`p`, {
                    className: `text-sm text-secondary select-none`,
                    children: (0, H.jsx)(o, {
                      id: `personalVault.selectTargets`,
                      defaultMessage: `Select up to 100 environments`,
                      description: `Instruction for selecting which configurations may use a personal secret`,
                    }),
                  }),
                  (0, H.jsxs)(b, {
                    className: `max-h-40 min-h-40 flex-1 overflow-y-auto`,
                    children: [
                      [...(v?.map(B) ?? []), ...i.map(z)].map((t) => {
                        let n = e.includes(t.id),
                          r = c || (!n && e.length >= 100);
                        return (0, H.jsx)(
                          `label`,
                          {
                            className: r ? void 0 : `cursor-interaction`,
                            htmlFor: `personal-target-${t.id}`,
                            children: (0, H.jsx)(S, {
                              label: (0, H.jsx)(`span`, { className: `select-none`, children: t.name }),
                              control: (i) =>
                                (0, H.jsx)(`div`, {
                                  className: `relative`,
                                  children: (0, H.jsx)(m, {
                                    id: `personal-target-${t.id}`,
                                    ...i,
                                    checked: n,
                                    disabled: r,
                                    onCheckedChange: (n) =>
                                      u({
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
                      x && !C
                        ? (0, H.jsx)(O, {
                            layout: `settings-row`,
                            children: (0, H.jsx)(o, {
                              id: `personalVault.targetsLoading`,
                              defaultMessage: `Loading environments…`,
                              description: `Loading configuration targets for a personal secret`,
                            }),
                          })
                        : null,
                      C
                        ? (0, H.jsxs)(O, {
                            layout: `settings-row`,
                            children: [
                              (0, H.jsx)(o, {
                                id: `personalVault.targetsError`,
                                defaultMessage: `Couldn’t load environments`,
                                description: `Configuration target list failed to load`,
                              }),
                              (0, H.jsx)(t, {
                                color: `secondary`,
                                size: `compact`,
                                disabled: y,
                                onClick: () => void d.query.invalidate(j),
                                children: (0, H.jsx)(o, {
                                  id: `personalVault.retry`,
                                  defaultMessage: `Retry`,
                                  description: `Retry loading personal vault metadata`,
                                }),
                              }),
                            ],
                          })
                        : null,
                      v?.length === 0 && !x && !C
                        ? (0, H.jsx)(O, {
                            layout: `settings-row`,
                            children: (0, H.jsx)(o, {
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
      (n[0] = v),
      (n[1] = c),
      (n[2] = _),
      (n[3] = C),
      (n[4] = y),
      (n[5] = x),
      (n[6] = u),
      (n[7] = d),
      (n[8] = a.ids),
      (n[9] = a.type),
      (n[10] = w));
  } else w = n[10];
  return w;
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
    ((V = C()), u(), y(), x(), a(), _(), n(), d(), D(), w(), v(), c(), M(), (H = T()));
  }))();
}
export { L as i, U as n, N as r, R as t };
//# sourceMappingURL=targets-491db353a53e.js.map
