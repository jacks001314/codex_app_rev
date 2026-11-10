import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  Amn as i,
  BS as a,
  CW as o,
  Cpn as s,
  Hu as c,
  JS as l,
  KS as u,
  O3t as d,
  Opn as f,
  Qu as p,
  Spn as m,
  TW as h,
  VS as g,
  Vu as _,
  XS as v,
  Xu as y,
  Zu as b,
  a3t as x,
  hmn as S,
  jXt as C,
  kMt as w,
  kXt as T,
  kmn as E,
  o3t as D,
  qS as O,
  qu as k,
} from "./app-initial-f094ef01c64d.js";
import { n as A, t as j } from "./segmented-toggle-30e6111a9bfb.js";
import {
  a as M,
  i as ee,
  n as te,
  o as ne,
  r as N,
  t as re,
} from "./cloud-preferences-534ab4bdf935.js";
function P() {
  let e = (0, L.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, z.jsx)(l, {
          title: (0, z.jsx)(a, { slug: `cloud-settings` }),
          children: (0, z.jsx)(F, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function F() {
  let e = (0, L.c)(95),
    t = n(x),
    r = f(),
    i = M(),
    a = ee(),
    c = ne(),
    [l, d] = (0, R.useState)(null);
  if (i.isError || a.isError) {
    let t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, z.jsx)(s, {
          id: `settings.general.cloudPreferences.loadError`,
          defaultMessage: `Unable to load cloud preferences`,
          description: `Error message shown when cloud preferences fail to load`,
        })),
        (e[0] = t))
      : (t = e[0]);
    let n;
    e[1] !== a || e[2] !== i
      ? ((n = () => {
          (i.refetch(), a.refetch());
        }),
        (e[1] = a),
        (e[2] = i),
        (e[3] = n))
      : (n = e[3]);
    let r;
    e[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, z.jsx)(s, {
          id: `settings.general.cloudPreferences.retry`,
          defaultMessage: `Retry`,
          description: `Button label to retry loading cloud preferences`,
        })),
        (e[4] = r))
      : (r = e[4]);
    let o;
    return (
      e[5] === n
        ? (o = e[6])
        : ((o = (0, z.jsx)(b, {
            children: (0, z.jsx)(b.Content, {
              children: (0, z.jsx)(_, {
                children: (0, z.jsx)(k, {
                  label: t,
                  control: (0, z.jsx)(w, {
                    color: `secondary`,
                    onClick: n,
                    size: `toolbar`,
                    children: r,
                  }),
                }),
              }),
            }),
          })),
          (e[5] = n),
          (e[6] = o)),
      o
    );
  }
  if (i.data == null || a.data == null) {
    let t;
    return (
      e[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, z.jsx)(u, {
            children: (0, z.jsx)(s, {
              id: `settings.general.cloudPreferences.loading`,
              defaultMessage: `Loading cloud preferences…`,
              description: `Loading label for cloud preferences`,
            }),
          })),
          (e[7] = t))
        : (t = e[7]),
      t
    );
  }
  let p = i.data,
    m = a.data,
    h = l?.baseline === p.branch_format ? l.value : p.branch_format,
    g,
    v,
    y,
    S,
    T,
    E,
    D,
    O,
    A;
  if (
    e[8] !== h ||
    e[9] !== m.branch_format_max_length ||
    e[10] !== m.branch_format_special_values ||
    e[11] !== r ||
    e[12] !== p.git_diff_mode ||
    e[13] !== t ||
    e[14] !== c
  ) {
    T = te(h, m.branch_format_max_length, m.branch_format_special_values);
    let n;
    (e[24] !== r || e[25] !== t || e[26] !== c
      ? ((n = (e, n) => {
          c.mutate(e, {
            onSuccess: () => {
              t.get(C).success(n);
            },
            onError: () => {
              t.get(C).danger(
                r.formatMessage({
                  id: `settings.general.cloudPreferences.save.error`,
                  defaultMessage: `Unable to save cloud preference`,
                  description: `Toast shown when saving a cloud preference fails`,
                }),
              );
            },
          });
        }),
        (e[24] = r),
        (e[25] = t),
        (e[26] = c),
        (e[27] = n))
      : (n = e[27]),
      (E = n),
      (S = b),
      (y = b.Content),
      (v = _));
    let i, a;
    e[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, z.jsx)(s, {
          id: `settings.general.cloudPreferences.diffView.label`,
          defaultMessage: `Diff view`,
          description: `Label for cloud diff display preference`,
        })),
        (a = (0, z.jsx)(s, {
          id: `settings.general.cloudPreferences.diffView.description`,
          defaultMessage: `Choose how changes are shown in cloud chats`,
          description: `Description for cloud diff display preference`,
        })),
        (e[28] = i),
        (e[29] = a))
      : ((i = e[28]), (a = e[29]));
    let o;
    e[30] === r
      ? (o = e[31])
      : ((o = r.formatMessage({
          id: `settings.general.cloudPreferences.diffView.ariaLabel`,
          defaultMessage: `Diff view`,
          description: `Aria label for cloud diff display selector`,
        })),
        (e[30] = r),
        (e[31] = o));
    let l;
    e[32] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, z.jsx)(s, {
          id: `settings.general.cloudPreferences.diffView.unified`,
          defaultMessage: `Unified`,
          description: `Unified diff display preference option`,
        })),
        (e[32] = l))
      : (l = e[32]);
    let u;
    e[33] === c.isPending
      ? (u = e[34])
      : ((u = { id: `unified`, label: l, disabled: c.isPending }),
        (e[33] = c.isPending),
        (e[34] = u));
    let d;
    e[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, z.jsx)(s, {
          id: `settings.general.cloudPreferences.diffView.split`,
          defaultMessage: `Split`,
          description: `Split diff display preference option`,
        })),
        (e[35] = d))
      : (d = e[35]);
    let f;
    e[36] === c.isPending
      ? (f = e[37])
      : ((f = { id: `split`, label: d, disabled: c.isPending }),
        (e[36] = c.isPending),
        (e[37] = f));
    let x;
    e[38] !== f || e[39] !== u
      ? ((x = [u, f]), (e[38] = f), (e[39] = u), (e[40] = x))
      : (x = e[40]);
    let w;
    (e[41] !== r || e[42] !== E
      ? ((w = (e) => {
          E(
            { git_diff_mode: e },
            r.formatMessage({
              id: `settings.general.cloudPreferences.diffView.save.success`,
              defaultMessage: `Saved diff view`,
              description: `Toast shown when cloud diff display preference is saved`,
            }),
          );
        }),
        (e[41] = r),
        (e[42] = E),
        (e[43] = w))
      : (w = e[43]),
      e[44] !== p.git_diff_mode || e[45] !== x || e[46] !== w || e[47] !== o
        ? ((A = (0, z.jsx)(k, {
            label: i,
            description: a,
            control: (0, z.jsx)(j, {
              ariaLabel: o,
              options: x,
              selectedId: p.git_diff_mode,
              onSelect: w,
            }),
          })),
          (e[44] = p.git_diff_mode),
          (e[45] = x),
          (e[46] = w),
          (e[47] = o),
          (e[48] = A))
        : (A = e[48]),
      (g = k),
      e[49] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((D = (0, z.jsx)(s, {
            id: `settings.general.cloudPreferences.branchFormat.title`,
            defaultMessage: `Branch format`,
            description: `Heading for cloud branch format preference`,
          })),
          (e[49] = D))
        : (D = e[49]),
      (O =
        T == null
          ? (0, z.jsx)(s, {
              id: `settings.general.cloudPreferences.branchFormat.preview`,
              defaultMessage: `Example: {branchName}`,
              description: `Example branch name produced by the cloud branch format`,
              values: { branchName: re(h, m.branch_format_special_values) },
            })
          : I(T)),
      (e[8] = h),
      (e[9] = m.branch_format_max_length),
      (e[10] = m.branch_format_special_values),
      (e[11] = r),
      (e[12] = p.git_diff_mode),
      (e[13] = t),
      (e[14] = c),
      (e[15] = g),
      (e[16] = v),
      (e[17] = y),
      (e[18] = S),
      (e[19] = T),
      (e[20] = E),
      (e[21] = D),
      (e[22] = O),
      (e[23] = A));
  } else
    ((g = e[15]),
      (v = e[16]),
      (y = e[17]),
      (S = e[18]),
      (T = e[19]),
      (E = e[20]),
      (D = e[21]),
      (O = e[22]),
      (A = e[23]));
  let N;
  e[50] === r
    ? (N = e[51])
    : ((N = r.formatMessage({
        id: `settings.general.cloudPreferences.branchFormat.input.ariaLabel`,
        defaultMessage: `Branch format pattern`,
        description: `Accessible label for the cloud branch format input`,
      })),
      (e[50] = r),
      (e[51] = N));
  let P = c.isPending,
    F;
  e[52] === r
    ? (F = e[53])
    : ((F = r.formatMessage(
        {
          id: `settings.general.cloudPreferences.branchFormat.input.placeholder`,
          defaultMessage: `codex/{pattern}`,
          description: `Placeholder for the cloud branch format input`,
        },
        { pattern: `{feature}` },
      )),
      (e[52] = r),
      (e[53] = F));
  let B;
  e[54] === p.branch_format
    ? (B = e[55])
    : ((B = (e) => {
        d({ baseline: p.branch_format, value: e.target.value });
      }),
      (e[54] = p.branch_format),
      (e[55] = B));
  let V;
  e[56] !== h || e[57] !== N || e[58] !== F || e[59] !== B || e[60] !== c.isPending
    ? ((V = (0, z.jsx)(`div`, {
        className: `w-56 max-w-full`,
        children: (0, z.jsx)(o, {
          "aria-label": N,
          disabled: P,
          placeholder: F,
          value: h,
          onChange: B,
        }),
      })),
      (e[56] = h),
      (e[57] = N),
      (e[58] = F),
      (e[59] = B),
      (e[60] = c.isPending),
      (e[61] = V))
    : (V = e[61]);
  let H;
  e[62] !== g || e[63] !== D || e[64] !== O || e[65] !== V
    ? ((H = (0, z.jsx)(g, { label: D, description: O, control: V })),
      (e[62] = g),
      (e[63] = D),
      (e[64] = O),
      (e[65] = V),
      (e[66] = H))
    : (H = e[66]);
  let U;
  e[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, z.jsx)(s, {
        id: `settings.general.cloudPreferences.branchFormat.availableTags`,
        defaultMessage: `Available placeholders`,
        description: `Label for branch format placeholders`,
      })),
      (e[67] = U))
    : (U = e[67]);
  let W;
  e[68] === m.branch_format_special_values
    ? (W = e[69])
    : ((W = m.branch_format_special_values.map(ie).join(`, `)),
      (e[68] = m.branch_format_special_values),
      (e[69] = W));
  let G;
  e[70] === W
    ? (G = e[71])
    : ((G = (0, z.jsx)(`span`, { className: `[text-wrap:wrap]`, children: W })),
      (e[70] = W),
      (e[71] = G));
  let K = h === p.branch_format || T != null,
    q;
  e[72] !== h || e[73] !== r || e[74] !== E
    ? ((q = () => {
        E(
          { branch_format: h },
          r.formatMessage({
            id: `settings.general.cloudPreferences.branchFormat.save.success`,
            defaultMessage: `Saved branch format`,
            description: `Toast shown when cloud branch format is saved`,
          }),
        );
      }),
      (e[72] = h),
      (e[73] = r),
      (e[74] = E),
      (e[75] = q))
    : (q = e[75]);
  let J;
  e[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, z.jsx)(s, {
        id: `settings.general.cloudPreferences.branchFormat.save`,
        defaultMessage: `Save`,
        description: `Button label to save cloud branch format`,
      })),
      (e[76] = J))
    : (J = e[76]);
  let Y;
  e[77] !== K || e[78] !== q || e[79] !== c.isPending
    ? ((Y = (0, z.jsx)(w, {
        color: `primary`,
        disabled: K,
        loading: c.isPending,
        onClick: q,
        size: `toolbar`,
        children: J,
      })),
      (e[77] = K),
      (e[78] = q),
      (e[79] = c.isPending),
      (e[80] = Y))
    : (Y = e[80]);
  let X;
  e[81] !== G || e[82] !== Y
    ? ((X = (0, z.jsx)(k, { label: U, description: G, control: Y })),
      (e[81] = G),
      (e[82] = Y),
      (e[83] = X))
    : (X = e[83]);
  let Z;
  e[84] !== v || e[85] !== X || e[86] !== A || e[87] !== H
    ? ((Z = (0, z.jsxs)(v, { children: [A, H, X] })),
      (e[84] = v),
      (e[85] = X),
      (e[86] = A),
      (e[87] = H),
      (e[88] = Z))
    : (Z = e[88]);
  let Q;
  e[89] !== y || e[90] !== Z
    ? ((Q = (0, z.jsx)(y, { children: Z })), (e[89] = y), (e[90] = Z), (e[91] = Q))
    : (Q = e[91]);
  let $;
  return (
    e[92] !== S || e[93] !== Q
      ? (($ = (0, z.jsx)(S, { children: Q })), (e[92] = S), (e[93] = Q), (e[94] = $))
      : ($ = e[94]),
    $
  );
}
function ie(e) {
  return e.value;
}
function I(e) {
  switch (e) {
    case `bracket-mismatch`:
      return (0, z.jsx)(s, {
        id: `settings.general.cloudPreferences.branchFormat.error.bracketMismatch`,
        defaultMessage: `Branch format has unmatched brackets`,
        description: `Validation error for mismatched branch format brackets`,
      });
    case `invalid-characters`:
      return (0, z.jsx)(s, {
        id: `settings.general.cloudPreferences.branchFormat.error.invalidCharacters`,
        defaultMessage: `Branch format contains invalid characters`,
        description: `Validation error for invalid branch format characters`,
      });
    case `invalid-pattern`:
      return (0, z.jsx)(s, {
        id: `settings.general.cloudPreferences.branchFormat.error.invalidPattern`,
        defaultMessage: `Branch format contains an unavailable placeholder`,
        description: `Validation error for unavailable branch format placeholders`,
      });
    case `leading-slash`:
      return (0, z.jsx)(s, {
        id: `settings.general.cloudPreferences.branchFormat.error.leadingSlash`,
        defaultMessage: `Branch format cannot start with '/'`,
        description: `Validation error for branch format starting with slash`,
      });
    case `missing-pattern`:
      return (0, z.jsx)(s, {
        id: `settings.general.cloudPreferences.branchFormat.error.missingPattern`,
        defaultMessage: `Branch format must contain at least one placeholder`,
        description: `Validation error when a branch format has no placeholder`,
      });
    case `too-long`:
      return (0, z.jsx)(s, {
        id: `settings.general.cloudPreferences.branchFormat.error.tooLong`,
        defaultMessage: `Generated branch name exceeds the allowed length`,
        description: `Validation error when a generated branch name is too long`,
      });
  }
}
var L, R, z;
e(() => {
  ((L = E()),
    d(),
    (R = t(i(), 1)),
    m(),
    r(),
    A(),
    h(),
    T(),
    D(),
    v(),
    p(),
    O(),
    y(),
    g(),
    c(),
    N(),
    (z = S()));
})();
export { P as CloudPreferencesSettings };
//# sourceMappingURL=cloud-preferences-settings-b8c60aa76a25.js.map
