import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  FBt as i,
  LNt as a,
  PBt as o,
  Qst as s,
  Vrt as c,
  XOt as l,
  Y3 as u,
  Z3 as d,
  ZSt as f,
  ew as p,
  okt as m,
  qrt as h,
  sw as g,
  tkt as _,
  uw as v,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as y,
  LF as b,
  QF as x,
  Qd as S,
  RF as C,
  XF as w,
  ZF as T,
  ZLn as E,
  Zd as ee,
  cA as D,
  eI as O,
  sA as k,
} from "./app-initial-ad16eaadf81f.js";
import { a as te, i as ne, n as A, o as j, r as M, t as N } from "./cloud-preferences-9ffa0fef6409.js";
import { n as P, t as re } from "./cloud-preferences-error-2916cc4d89ab.js";
function F() {
  let e = (0, L.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, z.jsx)(x, {
          title: (0, z.jsx)(b, { slug: `cloud-settings` }),
          children: (0, z.jsx)(I, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function I() {
  let e = (0, L.c)(94),
    r = n(s),
    i = m(),
    a = te(),
    o = ne(),
    c = j(),
    [l, d] = (0, R.useState)(null);
  if (a.isError || o.isError) {
    let t = a.isFetching || o.isFetching,
      n;
    e[0] !== o || e[1] !== a
      ? ((n = () => {
          (a.refetch(), o.refetch());
        }),
        (e[0] = o),
        (e[1] = a),
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
  if (a.data == null || o.data == null) {
    let t;
    return (
      e[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, z.jsx)(w, {
            children: (0, z.jsx)(_, {
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
  let f = a.data,
    p = o.data,
    v = l?.baseline === f.branch_format ? l.value : f.branch_format,
    y,
    b,
    x,
    S,
    C,
    T,
    D,
    O,
    M;
  if (
    e[7] !== v ||
    e[8] !== p.branch_format_max_length ||
    e[9] !== p.branch_format_special_values ||
    e[10] !== i ||
    e[11] !== f.git_diff_mode ||
    e[12] !== r ||
    e[13] !== c
  ) {
    C = A(v, p.branch_format_max_length, p.branch_format_special_values);
    let n;
    (e[23] !== i || e[24] !== r || e[25] !== c
      ? ((n = (e, t) => {
          c.mutate(e, {
            onSuccess: () => {
              r.get(h).success(t);
            },
            onError: () => {
              r.get(h).danger(
                i.formatMessage({
                  id: `settings.general.cloudPreferences.save.error`,
                  defaultMessage: `Unable to save cloud preference`,
                  description: `Toast shown when saving a cloud preference fails`,
                }),
                { errorAnalytics: { toastId: `wham_preferences_page_preferences_update_error` } },
              );
            },
          });
        }),
        (e[23] = i),
        (e[24] = r),
        (e[25] = c),
        (e[26] = n))
      : (n = e[26]),
      (T = n),
      (S = k),
      (x = k.Content),
      (b = t));
    let a, o;
    e[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, z.jsx)(_, {
          id: `settings.general.cloudPreferences.diffView.label`,
          defaultMessage: `Diff view`,
          description: `Label for cloud diff display preference`,
        })),
        (o = (0, z.jsx)(_, {
          id: `settings.general.cloudPreferences.diffView.description`,
          defaultMessage: `Choose how changes are shown in cloud chats`,
          description: `Description for cloud diff display preference`,
        })),
        (e[27] = a),
        (e[28] = o))
      : ((a = e[27]), (o = e[28]));
    let s;
    e[29] === i
      ? (s = e[30])
      : ((s = i.formatMessage({
          id: `settings.general.cloudPreferences.diffView.ariaLabel`,
          defaultMessage: `Diff view`,
          description: `Aria label for cloud diff display selector`,
        })),
        (e[29] = i),
        (e[30] = s));
    let l;
    e[31] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, z.jsx)(_, {
          id: `settings.general.cloudPreferences.diffView.unified`,
          defaultMessage: `Unified`,
          description: `Unified diff display preference option`,
        })),
        (e[31] = l))
      : (l = e[31]);
    let u;
    e[32] === c.isPending
      ? (u = e[33])
      : ((u = { id: `unified`, label: l, disabled: c.isPending }), (e[32] = c.isPending), (e[33] = u));
    let d;
    e[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, z.jsx)(_, {
          id: `settings.general.cloudPreferences.diffView.split`,
          defaultMessage: `Split`,
          description: `Split diff display preference option`,
        })),
        (e[34] = d))
      : (d = e[34]);
    let m;
    e[35] === c.isPending
      ? (m = e[36])
      : ((m = { id: `split`, label: d, disabled: c.isPending }), (e[35] = c.isPending), (e[36] = m));
    let w;
    e[37] !== m || e[38] !== u ? ((w = [u, m]), (e[37] = m), (e[38] = u), (e[39] = w)) : (w = e[39]);
    let E;
    (e[40] !== i || e[41] !== T
      ? ((E = (e) => {
          T(
            { git_diff_mode: e },
            i.formatMessage({
              id: `settings.general.cloudPreferences.diffView.save.success`,
              defaultMessage: `Saved diff view`,
              description: `Toast shown when cloud diff display preference is saved`,
            }),
          );
        }),
        (e[40] = i),
        (e[41] = T),
        (e[42] = E))
      : (E = e[42]),
      e[43] !== f.git_diff_mode || e[44] !== w || e[45] !== E || e[46] !== s
        ? ((M = (0, z.jsx)(g, {
            label: a,
            description: o,
            control: (0, z.jsx)(ee, { ariaLabel: s, options: w, selectedId: f.git_diff_mode, onSelect: E }),
          })),
          (e[43] = f.git_diff_mode),
          (e[44] = w),
          (e[45] = E),
          (e[46] = s),
          (e[47] = M))
        : (M = e[47]),
      (y = g),
      e[48] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((D = (0, z.jsx)(_, {
            id: `settings.general.cloudPreferences.branchFormat.title`,
            defaultMessage: `Branch format`,
            description: `Heading for cloud branch format preference`,
          })),
          (e[48] = D))
        : (D = e[48]),
      (O =
        C == null
          ? (0, z.jsx)(_, {
              id: `settings.general.cloudPreferences.branchFormat.preview`,
              defaultMessage: `Example: {branchName}`,
              description: `Example branch name produced by the cloud branch format`,
              values: { branchName: N(v, p.branch_format_special_values) },
            })
          : ae(C)),
      (e[7] = v),
      (e[8] = p.branch_format_max_length),
      (e[9] = p.branch_format_special_values),
      (e[10] = i),
      (e[11] = f.git_diff_mode),
      (e[12] = r),
      (e[13] = c),
      (e[14] = y),
      (e[15] = b),
      (e[16] = x),
      (e[17] = S),
      (e[18] = C),
      (e[19] = T),
      (e[20] = D),
      (e[21] = O),
      (e[22] = M));
  } else
    ((y = e[14]),
      (b = e[15]),
      (x = e[16]),
      (S = e[17]),
      (C = e[18]),
      (T = e[19]),
      (D = e[20]),
      (O = e[21]),
      (M = e[22]));
  let P;
  e[49] === i
    ? (P = e[50])
    : ((P = i.formatMessage({
        id: `settings.general.cloudPreferences.branchFormat.input.ariaLabel`,
        defaultMessage: `Branch format pattern`,
        description: `Accessible label for the cloud branch format input`,
      })),
      (e[49] = i),
      (e[50] = P));
  let F = c.isPending,
    I;
  e[51] === i
    ? (I = e[52])
    : ((I = i.formatMessage(
        {
          id: `settings.general.cloudPreferences.branchFormat.input.placeholder`,
          defaultMessage: `codex/{pattern}`,
          description: `Placeholder for the cloud branch format input`,
        },
        { pattern: `{feature}` },
      )),
      (e[51] = i),
      (e[52] = I));
  let B;
  e[53] === f.branch_format
    ? (B = e[54])
    : ((B = (e) => {
        d({ baseline: f.branch_format, value: e.target.value });
      }),
      (e[53] = f.branch_format),
      (e[54] = B));
  let V;
  e[55] !== v || e[56] !== P || e[57] !== I || e[58] !== B || e[59] !== c.isPending
    ? ((V = (0, z.jsx)(`div`, {
        className: `w-56 max-w-full`,
        children: (0, z.jsx)(E, { "aria-label": P, disabled: F, placeholder: I, value: v, onChange: B }),
      })),
      (e[55] = v),
      (e[56] = P),
      (e[57] = I),
      (e[58] = B),
      (e[59] = c.isPending),
      (e[60] = V))
    : (V = e[60]);
  let H;
  e[61] !== y || e[62] !== D || e[63] !== O || e[64] !== V
    ? ((H = (0, z.jsx)(y, { label: D, description: O, control: V })),
      (e[61] = y),
      (e[62] = D),
      (e[63] = O),
      (e[64] = V),
      (e[65] = H))
    : (H = e[65]);
  let U;
  e[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, z.jsx)(_, {
        id: `settings.general.cloudPreferences.branchFormat.availableTags`,
        defaultMessage: `Available placeholders`,
        description: `Label for branch format placeholders`,
      })),
      (e[66] = U))
    : (U = e[66]);
  let W;
  e[67] === p.branch_format_special_values
    ? (W = e[68])
    : ((W = p.branch_format_special_values.map(ie).join(`, `)),
      (e[67] = p.branch_format_special_values),
      (e[68] = W));
  let G;
  e[69] === W
    ? (G = e[70])
    : ((G = (0, z.jsx)(`span`, { className: `[text-wrap:wrap]`, children: W })), (e[69] = W), (e[70] = G));
  let K = v === f.branch_format || C != null,
    q;
  e[71] !== v || e[72] !== i || e[73] !== T
    ? ((q = () => {
        T(
          { branch_format: v },
          i.formatMessage({
            id: `settings.general.cloudPreferences.branchFormat.save.success`,
            defaultMessage: `Saved branch format`,
            description: `Toast shown when cloud branch format is saved`,
          }),
        );
      }),
      (e[71] = v),
      (e[72] = i),
      (e[73] = T),
      (e[74] = q))
    : (q = e[74]);
  let J;
  e[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, z.jsx)(_, {
        id: `settings.general.cloudPreferences.branchFormat.save`,
        defaultMessage: `Save`,
        description: `Button label to save cloud branch format`,
      })),
      (e[75] = J))
    : (J = e[75]);
  let Y;
  e[76] !== K || e[77] !== q || e[78] !== c.isPending
    ? ((Y = (0, z.jsx)(u, {
        color: `primary`,
        disabled: K,
        loading: c.isPending,
        onClick: q,
        size: `toolbar`,
        children: J,
      })),
      (e[76] = K),
      (e[77] = q),
      (e[78] = c.isPending),
      (e[79] = Y))
    : (Y = e[79]);
  let X;
  e[80] !== G || e[81] !== Y
    ? ((X = (0, z.jsx)(g, { label: U, description: G, control: Y })), (e[80] = G), (e[81] = Y), (e[82] = X))
    : (X = e[82]);
  let Z;
  e[83] !== b || e[84] !== X || e[85] !== M || e[86] !== H
    ? ((Z = (0, z.jsxs)(b, { children: [M, H, X] })),
      (e[83] = b),
      (e[84] = X),
      (e[85] = M),
      (e[86] = H),
      (e[87] = Z))
    : (Z = e[87]);
  let Q;
  e[88] !== x || e[89] !== Z
    ? ((Q = (0, z.jsx)(x, { children: Z })), (e[88] = x), (e[89] = Z), (e[90] = Q))
    : (Q = e[90]);
  let $;
  return (
    e[91] !== S || e[92] !== Q
      ? (($ = (0, z.jsx)(S, { children: Q })), (e[91] = S), (e[92] = Q), (e[93] = $))
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
      return (0, z.jsx)(_, {
        id: `settings.general.cloudPreferences.branchFormat.error.bracketMismatch`,
        defaultMessage: `Branch format has unmatched brackets`,
        description: `Validation error for mismatched branch format brackets`,
      });
    case `invalid-characters`:
      return (0, z.jsx)(_, {
        id: `settings.general.cloudPreferences.branchFormat.error.invalidCharacters`,
        defaultMessage: `Branch format contains invalid characters`,
        description: `Validation error for invalid branch format characters`,
      });
    case `invalid-pattern`:
      return (0, z.jsx)(_, {
        id: `settings.general.cloudPreferences.branchFormat.error.invalidPattern`,
        defaultMessage: `Branch format contains an unavailable placeholder`,
        description: `Validation error for unavailable branch format placeholders`,
      });
    case `leading-slash`:
      return (0, z.jsx)(_, {
        id: `settings.general.cloudPreferences.branchFormat.error.leadingSlash`,
        defaultMessage: `Branch format cannot start with '/'`,
        description: `Validation error for branch format starting with slash`,
      });
    case `missing-pattern`:
      return (0, z.jsx)(_, {
        id: `settings.general.cloudPreferences.branchFormat.error.missingPattern`,
        defaultMessage: `Branch format must contain at least one placeholder`,
        description: `Validation error when a branch format has no placeholder`,
      });
    case `too-long`:
      return (0, z.jsx)(_, {
        id: `settings.general.cloudPreferences.branchFormat.error.tooLong`,
        defaultMessage: `Generated branch name exceeds the allowed length`,
        description: `Validation error when a generated branch name is too long`,
      });
  }
}
var L, R, z;
function B() {
  return (B = e(() => {
    ((L = o()),
      f(),
      (R = i()),
      l(),
      d(),
      S(),
      y(),
      c(),
      r(),
      O(),
      D(),
      T(),
      v(),
      C(),
      p(),
      M(),
      P(),
      (z = a()));
  }))();
}
export { F as n, B as r, I as t };
//# sourceMappingURL=cloud-preferences-settings-54bfef4ea3ab.js.map
