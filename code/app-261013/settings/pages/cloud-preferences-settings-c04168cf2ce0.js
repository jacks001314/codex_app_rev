import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  IDt as r,
  Ixt as i,
  JC as a,
  Pxt as o,
  VDt as s,
  hot as c,
  iw as l,
  jDt as u,
  lot as d,
  qC as ee,
  t3 as f,
  tw as p,
  vzt as m,
  wot as h,
  xMt as g,
  yzt as _,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as v,
  Ek as y,
  TPn as b,
  Tk as x,
  Xd as S,
  Yd as te,
  _F as C,
  eF as w,
  hF as T,
  mF as E,
  pF as D,
  tF as O,
} from "./app-initial-5851df3f6cb1.js";
import { a as k, i as A, n as j, o as M, r as N, t as ne } from "./cloud-preferences-cef52f477346.js";
import { n as P, t as re } from "./cloud-preferences-error-7be95067c7ff.js";
function F() {
  let e = (0, L.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, z.jsx)(T, {
          title: (0, z.jsx)(w, { slug: `cloud-settings` }),
          children: (0, z.jsx)(I, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function I() {
  let e = (0, L.c)(94),
    a = i(n),
    o = s(),
    l = k(),
    u = A(),
    d = M(),
    [f, m] = (0, R.useState)(null);
  if (l.isError || u.isError) {
    let t = l.isFetching || u.isFetching,
      n;
    e[0] !== u || e[1] !== l
      ? ((n = () => {
          (l.refetch(), u.refetch());
        }),
        (e[0] = u),
        (e[1] = l),
        (e[2] = n))
      : (n = e[2]);
    let r;
    return (
      e[3] !== t || e[4] !== n
        ? ((r = (0, z.jsx)(re, { isRetrying: t, onRetry: n })), (e[3] = t), (e[4] = n), (e[5] = r))
        : (r = e[5]),
      r
    );
  }
  if (l.data == null || u.data == null) {
    let t;
    return (
      e[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, z.jsx)(D, {
            children: (0, z.jsx)(r, {
              id: `settings.general.cloudPreferences.loading`,
              defaultMessage: `Loading cloud preferences…`,
              description: `Loading label for cloud preferences`,
            }),
          })),
          (e[6] = t))
        : (t = e[6]),
      t
    );
  }
  let h = l.data,
    g = u.data,
    _ = f?.baseline === h.branch_format ? f.value : h.branch_format,
    v,
    y,
    S,
    C,
    w,
    T,
    E,
    O,
    N;
  if (
    e[7] !== _ ||
    e[8] !== g.branch_format_max_length ||
    e[9] !== g.branch_format_special_values ||
    e[10] !== o ||
    e[11] !== h.git_diff_mode ||
    e[12] !== a ||
    e[13] !== d
  ) {
    w = j(_, g.branch_format_max_length, g.branch_format_special_values);
    let t;
    (e[23] !== o || e[24] !== a || e[25] !== d
      ? ((t = (e, t) => {
          d.mutate(e, {
            onSuccess: () => {
              a.get(c).success(t);
            },
            onError: () => {
              a.get(c).danger(
                o.formatMessage({
                  id: `settings.general.cloudPreferences.save.error`,
                  defaultMessage: `Unable to save cloud preference`,
                  description: `Toast shown when saving a cloud preference fails`,
                }),
                { errorAnalytics: { toastId: `wham_preferences_page_preferences_update_error` } },
              );
            },
          });
        }),
        (e[23] = o),
        (e[24] = a),
        (e[25] = d),
        (e[26] = t))
      : (t = e[26]),
      (T = t),
      (C = x),
      (S = x.Content),
      (y = ee));
    let n, i;
    e[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, z.jsx)(r, {
          id: `settings.general.cloudPreferences.diffView.label`,
          defaultMessage: `Diff view`,
          description: `Label for cloud diff display preference`,
        })),
        (i = (0, z.jsx)(r, {
          id: `settings.general.cloudPreferences.diffView.description`,
          defaultMessage: `Choose how changes are shown in cloud chats`,
          description: `Description for cloud diff display preference`,
        })),
        (e[27] = n),
        (e[28] = i))
      : ((n = e[27]), (i = e[28]));
    let s;
    e[29] === o
      ? (s = e[30])
      : ((s = o.formatMessage({
          id: `settings.general.cloudPreferences.diffView.ariaLabel`,
          defaultMessage: `Diff view`,
          description: `Aria label for cloud diff display selector`,
        })),
        (e[29] = o),
        (e[30] = s));
    let l;
    e[31] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, z.jsx)(r, {
          id: `settings.general.cloudPreferences.diffView.unified`,
          defaultMessage: `Unified`,
          description: `Unified diff display preference option`,
        })),
        (e[31] = l))
      : (l = e[31]);
    let u;
    e[32] === d.isPending
      ? (u = e[33])
      : ((u = { id: `unified`, label: l, disabled: d.isPending }), (e[32] = d.isPending), (e[33] = u));
    let f;
    e[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, z.jsx)(r, {
          id: `settings.general.cloudPreferences.diffView.split`,
          defaultMessage: `Split`,
          description: `Split diff display preference option`,
        })),
        (e[34] = f))
      : (f = e[34]);
    let m;
    e[35] === d.isPending
      ? (m = e[36])
      : ((m = { id: `split`, label: f, disabled: d.isPending }), (e[35] = d.isPending), (e[36] = m));
    let b;
    e[37] !== m || e[38] !== u ? ((b = [u, m]), (e[37] = m), (e[38] = u), (e[39] = b)) : (b = e[39]);
    let D;
    (e[40] !== o || e[41] !== T
      ? ((D = (e) => {
          T(
            { git_diff_mode: e },
            o.formatMessage({
              id: `settings.general.cloudPreferences.diffView.save.success`,
              defaultMessage: `Saved diff view`,
              description: `Toast shown when cloud diff display preference is saved`,
            }),
          );
        }),
        (e[40] = o),
        (e[41] = T),
        (e[42] = D))
      : (D = e[42]),
      e[43] !== h.git_diff_mode || e[44] !== b || e[45] !== D || e[46] !== s
        ? ((N = (0, z.jsx)(p, {
            label: n,
            description: i,
            control: (0, z.jsx)(te, { ariaLabel: s, options: b, selectedId: h.git_diff_mode, onSelect: D }),
          })),
          (e[43] = h.git_diff_mode),
          (e[44] = b),
          (e[45] = D),
          (e[46] = s),
          (e[47] = N))
        : (N = e[47]),
      (v = p),
      e[48] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((E = (0, z.jsx)(r, {
            id: `settings.general.cloudPreferences.branchFormat.title`,
            defaultMessage: `Branch format`,
            description: `Heading for cloud branch format preference`,
          })),
          (e[48] = E))
        : (E = e[48]),
      (O =
        w == null
          ? (0, z.jsx)(r, {
              id: `settings.general.cloudPreferences.branchFormat.preview`,
              defaultMessage: `Example: {branchName}`,
              description: `Example branch name produced by the cloud branch format`,
              values: { branchName: ne(_, g.branch_format_special_values) },
            })
          : ae(w)),
      (e[7] = _),
      (e[8] = g.branch_format_max_length),
      (e[9] = g.branch_format_special_values),
      (e[10] = o),
      (e[11] = h.git_diff_mode),
      (e[12] = a),
      (e[13] = d),
      (e[14] = v),
      (e[15] = y),
      (e[16] = S),
      (e[17] = C),
      (e[18] = w),
      (e[19] = T),
      (e[20] = E),
      (e[21] = O),
      (e[22] = N));
  } else
    ((v = e[14]),
      (y = e[15]),
      (S = e[16]),
      (C = e[17]),
      (w = e[18]),
      (T = e[19]),
      (E = e[20]),
      (O = e[21]),
      (N = e[22]));
  let P;
  e[49] === o
    ? (P = e[50])
    : ((P = o.formatMessage({
        id: `settings.general.cloudPreferences.branchFormat.input.ariaLabel`,
        defaultMessage: `Branch format pattern`,
        description: `Accessible label for the cloud branch format input`,
      })),
      (e[49] = o),
      (e[50] = P));
  let F = d.isPending,
    I;
  e[51] === o
    ? (I = e[52])
    : ((I = o.formatMessage(
        {
          id: `settings.general.cloudPreferences.branchFormat.input.placeholder`,
          defaultMessage: `codex/{pattern}`,
          description: `Placeholder for the cloud branch format input`,
        },
        { pattern: `{feature}` },
      )),
      (e[51] = o),
      (e[52] = I));
  let B;
  e[53] === h.branch_format
    ? (B = e[54])
    : ((B = (e) => {
        m({ baseline: h.branch_format, value: e.target.value });
      }),
      (e[53] = h.branch_format),
      (e[54] = B));
  let V;
  e[55] !== _ || e[56] !== P || e[57] !== I || e[58] !== B || e[59] !== d.isPending
    ? ((V = (0, z.jsx)(`div`, {
        className: `w-56 max-w-full`,
        children: (0, z.jsx)(b, { "aria-label": P, disabled: F, placeholder: I, value: _, onChange: B }),
      })),
      (e[55] = _),
      (e[56] = P),
      (e[57] = I),
      (e[58] = B),
      (e[59] = d.isPending),
      (e[60] = V))
    : (V = e[60]);
  let H;
  e[61] !== v || e[62] !== E || e[63] !== O || e[64] !== V
    ? ((H = (0, z.jsx)(v, { label: E, description: O, control: V })),
      (e[61] = v),
      (e[62] = E),
      (e[63] = O),
      (e[64] = V),
      (e[65] = H))
    : (H = e[65]);
  let U;
  e[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, z.jsx)(r, {
        id: `settings.general.cloudPreferences.branchFormat.availableTags`,
        defaultMessage: `Available placeholders`,
        description: `Label for branch format placeholders`,
      })),
      (e[66] = U))
    : (U = e[66]);
  let W;
  e[67] === g.branch_format_special_values
    ? (W = e[68])
    : ((W = g.branch_format_special_values.map(ie).join(`, `)),
      (e[67] = g.branch_format_special_values),
      (e[68] = W));
  let G;
  e[69] === W
    ? (G = e[70])
    : ((G = (0, z.jsx)(`span`, { className: `[text-wrap:wrap]`, children: W })), (e[69] = W), (e[70] = G));
  let K = _ === h.branch_format || w != null,
    q;
  e[71] !== _ || e[72] !== o || e[73] !== T
    ? ((q = () => {
        T(
          { branch_format: _ },
          o.formatMessage({
            id: `settings.general.cloudPreferences.branchFormat.save.success`,
            defaultMessage: `Saved branch format`,
            description: `Toast shown when cloud branch format is saved`,
          }),
        );
      }),
      (e[71] = _),
      (e[72] = o),
      (e[73] = T),
      (e[74] = q))
    : (q = e[74]);
  let J;
  e[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, z.jsx)(r, {
        id: `settings.general.cloudPreferences.branchFormat.save`,
        defaultMessage: `Save`,
        description: `Button label to save cloud branch format`,
      })),
      (e[75] = J))
    : (J = e[75]);
  let Y;
  e[76] !== K || e[77] !== q || e[78] !== d.isPending
    ? ((Y = (0, z.jsx)(t, {
        color: `primary`,
        disabled: K,
        loading: d.isPending,
        onClick: q,
        size: `toolbar`,
        children: J,
      })),
      (e[76] = K),
      (e[77] = q),
      (e[78] = d.isPending),
      (e[79] = Y))
    : (Y = e[79]);
  let X;
  e[80] !== G || e[81] !== Y
    ? ((X = (0, z.jsx)(p, { label: U, description: G, control: Y })), (e[80] = G), (e[81] = Y), (e[82] = X))
    : (X = e[82]);
  let Z;
  e[83] !== y || e[84] !== X || e[85] !== N || e[86] !== H
    ? ((Z = (0, z.jsxs)(y, { children: [N, H, X] })),
      (e[83] = y),
      (e[84] = X),
      (e[85] = N),
      (e[86] = H),
      (e[87] = Z))
    : (Z = e[87]);
  let Q;
  e[88] !== S || e[89] !== Z
    ? ((Q = (0, z.jsx)(S, { children: Z })), (e[88] = S), (e[89] = Z), (e[90] = Q))
    : (Q = e[90]);
  let $;
  return (
    e[91] !== C || e[92] !== Q
      ? (($ = (0, z.jsx)(C, { children: Q })), (e[91] = C), (e[92] = Q), (e[93] = $))
      : ($ = e[93]),
    $
  );
}
function ie(e) {
  return e.value;
}
function ae(e) {
  switch (e) {
    case `bracket-mismatch`:
      return (0, z.jsx)(r, {
        id: `settings.general.cloudPreferences.branchFormat.error.bracketMismatch`,
        defaultMessage: `Branch format has unmatched brackets`,
        description: `Validation error for mismatched branch format brackets`,
      });
    case `invalid-characters`:
      return (0, z.jsx)(r, {
        id: `settings.general.cloudPreferences.branchFormat.error.invalidCharacters`,
        defaultMessage: `Branch format contains invalid characters`,
        description: `Validation error for invalid branch format characters`,
      });
    case `invalid-pattern`:
      return (0, z.jsx)(r, {
        id: `settings.general.cloudPreferences.branchFormat.error.invalidPattern`,
        defaultMessage: `Branch format contains an unavailable placeholder`,
        description: `Validation error for unavailable branch format placeholders`,
      });
    case `leading-slash`:
      return (0, z.jsx)(r, {
        id: `settings.general.cloudPreferences.branchFormat.error.leadingSlash`,
        defaultMessage: `Branch format cannot start with '/'`,
        description: `Validation error for branch format starting with slash`,
      });
    case `missing-pattern`:
      return (0, z.jsx)(r, {
        id: `settings.general.cloudPreferences.branchFormat.error.missingPattern`,
        defaultMessage: `Branch format must contain at least one placeholder`,
        description: `Validation error when a branch format has no placeholder`,
      });
    case `too-long`:
      return (0, z.jsx)(r, {
        id: `settings.general.cloudPreferences.branchFormat.error.tooLong`,
        defaultMessage: `Generated branch name exceeds the allowed length`,
        description: `Validation error when a generated branch name is too long`,
      });
  }
}
var L, R, z;
function B() {
  return (B = e(() => {
    ((L = m()),
      o(),
      (R = _()),
      u(),
      f(),
      S(),
      v(),
      d(),
      h(),
      C(),
      y(),
      E(),
      l(),
      O(),
      a(),
      N(),
      P(),
      (z = g()));
  }))();
}
export { F as n, B as r, I as t };
//# sourceMappingURL=cloud-preferences-settings-c04168cf2ce0.js.map
