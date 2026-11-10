import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as n,
  A3t as r,
  AMt as i,
  Amn as a,
  BS as o,
  Cpn as s,
  Hu as c,
  JG as l,
  JS as u,
  KG as d,
  KS as f,
  O3t as p,
  Opn as m,
  QG as h,
  Qu as g,
  RS as _,
  Spn as v,
  VS as y,
  Vu as b,
  XS as x,
  Xu as S,
  ZG as C,
  Zu as w,
  a3t as T,
  aYt as E,
  hmn as D,
  jXt as O,
  kMt as k,
  kXt as A,
  kmn as j,
  o3t as M,
  qS as N,
  qu as P,
  sYt as F,
} from "./app-initial-f094ef01c64d.js";
import { Eh as I, Th as L } from "./app-primary-4c40d73a1074.js";
import { a as ee, o as R, r as z } from "./cloud-preferences-534ab4bdf935.js";
function B(e) {
  let t = (0, W.c)(35),
    { disabled: n, preferences: r, onUpdate: i } = e,
    a = (0, G.useId)(),
    o = F(`579168209`),
    c = r.trigger_policy ?? `code_review`,
    u;
  t[0] !== o || t[1] !== c
    ? ((u = q.filter((e) => e !== `smart_detect` || o || c === `smart_detect`)),
      (t[0] = o),
      (t[1] = c),
      (t[2] = u))
    : (u = t[2]);
  let f = u,
    p;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, K.jsx)(w.Header, {
        title: (0, K.jsx)(s, {
          id: `settings.codeReview.security.title`,
          defaultMessage: `Personal security review preferences`,
          description: `Title for personal security review preferences`,
        }),
        subtitle: (0, K.jsx)(s, {
          id: `settings.codeReview.security.subtitle`,
          defaultMessage: `Control how Codex reviews your pull requests for security by default`,
          description: `Description for personal security review preferences`,
        }),
      })),
      (t[3] = p))
    : (p = t[3]);
  let m, g;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, K.jsx)(s, {
        id: `settings.codeReview.security.autoReview.label`,
        defaultMessage: `Automatic security review`,
        description: `Label for automatic security review preference`,
      })),
      (g = (0, K.jsx)(s, {
        id: `settings.codeReview.security.autoReview.description`,
        defaultMessage: `Automatically review your pull requests in enabled repositories for security`,
        description: `Description for automatic security review preference`,
      })),
      (t[4] = m),
      (t[5] = g))
    : ((m = t[4]), (g = t[5]));
  let v;
  t[6] !== n || t[7] !== i || t[8] !== r.preference
    ? ((v = (0, K.jsx)(P, {
        label: m,
        description: g,
        control: (e) =>
          (0, K.jsx)(h, {
            ...e,
            checked: r.preference === `always`,
            disabled: n,
            onChange: (e) => {
              i({ security_review: { preference: e ? `always` : `repo_default` } });
            },
          }),
      })),
      (t[6] = n),
      (t[7] = i),
      (t[8] = r.preference),
      (t[9] = v))
    : (v = t[9]);
  let y, x;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, K.jsx)(s, {
        id: `settings.codeReview.security.trigger.label`,
        defaultMessage: `Security review trigger`,
        description: `Label for security review trigger preference`,
      })),
      (x = (0, K.jsx)(s, {
        id: `settings.codeReview.security.trigger.description`,
        defaultMessage: `Choose when Codex should review your pull requests for security`,
        description: `Description for security review trigger preference`,
      })),
      (t[10] = y),
      (t[11] = x))
    : ((y = t[10]), (x = t[11]));
  let S;
  t[12] !== n || t[13] !== i || t[14] !== f || t[15] !== c || t[16] !== a
    ? ((S = (0, K.jsx)(P, {
        label: y,
        description: x,
        control: (e) =>
          (0, K.jsx)(d, {
            contentWidth: `panelWide`,
            triggerButton: (0, K.jsx)(_, {
              ...e,
              "aria-labelledby": `${e[`aria-labelledby`]} ${a}`,
              disabled: n,
              children: (0, K.jsx)(`span`, { id: a, children: (0, K.jsx)(U, { value: c }) }),
            }),
            children: f.map((e) =>
              (0, K.jsx)(
                l.Item,
                {
                  subTextAllowWrap: !0,
                  SubText: (0, K.jsx)(s, {
                    id: `settings.codeReview.security.trigger.option.description`,
                    defaultMessage: `{policy, select, pr_open {Review when a pull request is opened.} every_push {Review again whenever new commits are pushed after the initial review.} smart_detect {Codex decides whether to review again based on changes since the last completed security review. Experimental and may change.} code_review {Review whenever Codex runs a code review.} other {}}`,
                    description: `Explanation for each security review trigger option`,
                    values: { policy: e },
                  }),
                  onSelect: () => {
                    i({ security_review: { trigger_policy: e } });
                  },
                  children: (0, K.jsx)(U, { value: e }),
                },
                e,
              ),
            ),
          }),
      })),
      (t[12] = n),
      (t[13] = i),
      (t[14] = f),
      (t[15] = c),
      (t[16] = a),
      (t[17] = S))
    : (S = t[17]);
  let C, T;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, K.jsx)(s, {
        id: `settings.codeReview.security.autoSeverity.label`,
        defaultMessage: `Minimum automatic review reporting severity`,
        description: `Label for the minimum automatic security review severity`,
      })),
      (C = (0, K.jsx)(s, {
        id: `settings.codeReview.security.autoSeverity.description`,
        defaultMessage: `Choose the lowest severity reported for automated reviews`,
        description: `Description for the minimum automatic security review severity`,
      })),
      (t[18] = C),
      (t[19] = T))
    : ((C = t[18]), (T = t[19]));
  let E;
  t[20] !== n || t[21] !== i || t[22] !== r.severity_threshold
    ? ((E = (0, K.jsx)(P, {
        label: T,
        description: C,
        control: (e) =>
          (0, K.jsx)(V, {
            ...e,
            disabled: n,
            value: r.severity_threshold ?? `high`,
            onChange: (e) => {
              i({ security_review: { severity_threshold: e } });
            },
          }),
      })),
      (t[20] = n),
      (t[21] = i),
      (t[22] = r.severity_threshold),
      (t[23] = E))
    : (E = t[23]);
  let D, O;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, K.jsx)(s, {
        id: `settings.codeReview.security.manualSeverity.label`,
        defaultMessage: `Minimum manual review reporting severity`,
        description: `Label for the minimum manual security review severity`,
      })),
      (O = (0, K.jsx)(s, {
        id: `settings.codeReview.security.manualSeverity.description`,
        defaultMessage: `Choose the lowest severity reported for reviews requested with @codex`,
        description: `Description for the minimum manual security review severity`,
      })),
      (t[24] = D),
      (t[25] = O))
    : ((D = t[24]), (O = t[25]));
  let k;
  t[26] !== n || t[27] !== i || t[28] !== r.manual_severity_threshold
    ? ((k = (0, K.jsx)(P, {
        label: D,
        description: O,
        control: (e) =>
          (0, K.jsx)(V, {
            ...e,
            disabled: n,
            value: r.manual_severity_threshold ?? `medium`,
            onChange: (e) => {
              i({ security_review: { manual_severity_threshold: e } });
            },
          }),
      })),
      (t[26] = n),
      (t[27] = i),
      (t[28] = r.manual_severity_threshold),
      (t[29] = k))
    : (k = t[29]);
  let A;
  return (
    t[30] !== E || t[31] !== k || t[32] !== v || t[33] !== S
      ? ((A = (0, K.jsxs)(w, {
          children: [
            p,
            (0, K.jsx)(w.Content, { children: (0, K.jsxs)(b, { children: [v, S, E, k] }) }),
          ],
        })),
        (t[30] = E),
        (t[31] = k),
        (t[32] = v),
        (t[33] = S),
        (t[34] = A))
      : (A = t[34]),
    A
  );
}
function V(e) {
  let t = (0, W.c)(20),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ disabled: r, value: a, onChange: i, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = (0, G.useId)(),
    s = `${n[`aria-labelledby`]} ${o}`,
    c;
  t[5] === a ? (c = t[6]) : ((c = (0, K.jsx)(H, { value: a })), (t[5] = a), (t[6] = c));
  let u;
  t[7] !== c || t[8] !== o
    ? ((u = (0, K.jsx)(`span`, { id: o, children: c })), (t[7] = c), (t[8] = o), (t[9] = u))
    : (u = t[9]);
  let f;
  t[10] !== n || t[11] !== r || t[12] !== s || t[13] !== u
    ? ((f = (0, K.jsx)(_, { ...n, "aria-labelledby": s, disabled: r, children: u })),
      (t[10] = n),
      (t[11] = r),
      (t[12] = s),
      (t[13] = u),
      (t[14] = f))
    : (f = t[14]);
  let p;
  t[15] === i
    ? (p = t[16])
    : ((p = J.map((e) =>
        (0, K.jsx)(
          l.Item,
          {
            onSelect: () => {
              i(e);
            },
            children: (0, K.jsx)(H, { value: e }),
          },
          e,
        ),
      )),
      (t[15] = i),
      (t[16] = p));
  let m;
  return (
    t[17] !== f || t[18] !== p
      ? ((m = (0, K.jsx)(d, { triggerButton: f, children: p })),
        (t[17] = f),
        (t[18] = p),
        (t[19] = m))
      : (m = t[19]),
    m
  );
}
function H(e) {
  let t = (0, W.c)(2),
    { value: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, K.jsx)(s, {
          id: `settings.codeReview.security.severity`,
          defaultMessage: `{severity, select, critical {Critical} high {High} medium {Medium} low {Low} other {Unknown}}`,
          description: `Severity threshold label for security review findings`,
          values: { severity: n },
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function U(e) {
  let t = (0, W.c)(2),
    { value: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, K.jsx)(s, {
          id: `settings.codeReview.security.trigger.option`,
          defaultMessage: `{policy, select, pr_open {On PR open} every_push {On every push} smart_detect {Smart detect (Experimental)} code_review {Whenever code review runs} other {Unknown}}`,
          description: `Trigger policy label for security reviews`,
          values: { policy: n },
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var W,
  G,
  K,
  q,
  J,
  Y = e(() => {
    ((W = j()),
      (G = t(a(), 1)),
      v(),
      C(),
      n(),
      g(),
      S(),
      y(),
      c(),
      E(),
      (K = D()),
      (q = [`pr_open`, `every_push`, `smart_detect`, `code_review`]),
      (J = [`critical`, `high`, `medium`, `low`]));
  });
function te() {
  let e = (0, Z.c)(11),
    t = r(T),
    n = m(),
    i = ee(),
    a = R(),
    { canManageCreditSettings: c } = I(),
    l;
  e[0] !== n || e[1] !== t || e[2] !== a
    ? ((l = (e) => {
        a.mutate(e, {
          onError: () => {
            t.get(O).danger(
              n.formatMessage({
                id: `settings.codeReview.save.error`,
                defaultMessage: `Unable to save code review settings`,
                description: `Toast shown when saving code review settings fails`,
              }),
            );
          },
        });
      }),
      (e[0] = n),
      (e[1] = t),
      (e[2] = a),
      (e[3] = l))
    : (l = e[3]);
  let d = l,
    p,
    h;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(o, { slug: `code-review` })),
      (h = (0, Q.jsx)(s, {
        id: `settings.codeReview.subtitle`,
        defaultMessage: `Set up ChatGPT to automatically review pull requests`,
        description: `Subtitle for automatic code review settings`,
      })),
      (e[4] = p),
      (e[5] = h))
    : ((p = e[4]), (h = e[5]));
  let g;
  return (
    e[6] !== c || e[7] !== d || e[8] !== i || e[9] !== a.isPending
      ? ((g = (0, Q.jsx)(u, {
          title: p,
          subtitle: h,
          children:
            i.data == null
              ? i.isError
                ? (0, Q.jsx)(w, {
                    children: (0, Q.jsx)(w.Content, {
                      children: (0, Q.jsx)(b, {
                        children: (0, Q.jsx)(P, {
                          label: (0, Q.jsx)(s, {
                            id: `settings.codeReview.error`,
                            defaultMessage: `Unable to load code review settings`,
                            description: `Error state for code review settings`,
                          }),
                          control: (0, Q.jsx)(k, {
                            color: `secondary`,
                            size: `toolbar`,
                            onClick: () => {
                              i.refetch();
                            },
                            children: (0, Q.jsx)(s, {
                              id: `settings.codeReview.retry`,
                              defaultMessage: `Retry`,
                              description: `Button to retry loading code review settings`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  })
                : (0, Q.jsx)(f, {
                    children: (0, Q.jsx)(s, {
                      id: `settings.codeReview.loading`,
                      defaultMessage: `Loading code review settings…`,
                      description: `Loading state for code review settings`,
                    }),
                  })
              : (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    (0, Q.jsx)(ne, {
                      disabled: a.isPending,
                      showCreditPreference: c,
                      preferences: i.data,
                      onUpdate: d,
                    }),
                    i.data.security_review == null
                      ? null
                      : (0, Q.jsx)(B, {
                          disabled: a.isPending,
                          preferences: i.data.security_review,
                          onUpdate: d,
                        }),
                  ],
                }),
        })),
        (e[6] = c),
        (e[7] = d),
        (e[8] = i),
        (e[9] = a.isPending),
        (e[10] = g))
      : (g = e[10]),
    g
  );
}
function ne(e) {
  let t = (0, Z.c)(46),
    { disabled: n, preferences: r, showCreditPreference: i, onUpdate: a } = e,
    o = m(),
    c = r.code_review_trigger_policy ?? $[0],
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(w.Header, {
        title: (0, Q.jsx)(s, {
          id: `settings.codeReview.personal.title`,
          defaultMessage: `Personal preferences`,
          description: `Title for personal code review preferences`,
        }),
      })),
      (t[0] = u))
    : (u = t[0]);
  let f, p;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(s, {
        id: `settings.codeReview.personal.autoReview.label`,
        defaultMessage: `Automatic review`,
        description: `Label for automatic code review preference`,
      })),
      (p = (0, Q.jsx)(s, {
        id: `settings.codeReview.personal.autoReview.description`,
        defaultMessage: `Automatically review pull requests in repositories with code review enabled`,
        description: `Description for automatic code review preference`,
      })),
      (t[1] = f),
      (t[2] = p))
    : ((f = t[1]), (p = t[2]));
  let g;
  t[3] === o
    ? (g = t[4])
    : ((g = o.formatMessage({
        id: `settings.codeReview.personal.autoReview.aria`,
        defaultMessage: `Enable automatic code review`,
        description: `Accessible label for automatic code review`,
      })),
      (t[3] = o),
      (t[4] = g));
  let v = r.code_review_preference === `always`,
    y;
  t[5] === a
    ? (y = t[6])
    : ((y = (e) => {
        a({ code_review_preference: e ? `always` : `repo_default` });
      }),
      (t[5] = a),
      (t[6] = y));
  let x;
  t[7] !== n || t[8] !== g || t[9] !== v || t[10] !== y
    ? ((x = (0, Q.jsx)(P, {
        label: f,
        description: p,
        control: (0, Q.jsx)(h, { ariaLabel: g, checked: v, disabled: n, onChange: y }),
      })),
      (t[7] = n),
      (t[8] = g),
      (t[9] = v),
      (t[10] = y),
      (t[11] = x))
    : (x = t[11]);
  let S, C;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(s, {
        id: `settings.codeReview.personal.trigger.label`,
        defaultMessage: `Review trigger`,
        description: `Label for review trigger preference`,
      })),
      (C = (0, Q.jsx)(s, {
        id: `settings.codeReview.personal.trigger.description`,
        defaultMessage: `Choose when ChatGPT should review your pull requests`,
        description: `Description for review trigger preference`,
      })),
      (t[12] = S),
      (t[13] = C))
    : ((S = t[12]), (C = t[13]));
  let T;
  t[14] === c ? (T = t[15]) : ((T = X(c)), (t[14] = c), (t[15] = T));
  let E;
  t[16] !== n || t[17] !== T
    ? ((E = (0, Q.jsx)(_, { disabled: n, children: T })), (t[16] = n), (t[17] = T), (t[18] = E))
    : (E = t[18]);
  let D;
  t[19] === a
    ? (D = t[20])
    : ((D = $.map((e) =>
        (0, Q.jsx)(
          l.Item,
          {
            onSelect: () => {
              a({ code_review_trigger_policy: e });
            },
            children: X(e),
          },
          e,
        ),
      )),
      (t[19] = a),
      (t[20] = D));
  let O;
  t[21] !== E || t[22] !== D
    ? ((O = (0, Q.jsx)(P, {
        label: S,
        description: C,
        control: (0, Q.jsx)(d, { triggerButton: E, children: D }),
      })),
      (t[21] = E),
      (t[22] = D),
      (t[23] = O))
    : (O = t[23]);
  let k, A;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(s, {
        id: `settings.codeReview.personal.exhaustive.label`,
        defaultMessage: `Exhaustive code review`,
        description: `Label for exhaustive code review preference`,
      })),
      (A = (0, Q.jsx)(s, {
        id: `settings.codeReview.personal.exhaustive.description`,
        defaultMessage: `Keep looking for findings until ChatGPT stops finding new issues`,
        description: `Description for exhaustive code review preference`,
      })),
      (t[24] = k),
      (t[25] = A))
    : ((k = t[24]), (A = t[25]));
  let j;
  t[26] === o
    ? (j = t[27])
    : ((j = o.formatMessage({
        id: `settings.codeReview.personal.exhaustive.aria`,
        defaultMessage: `Enable exhaustive code review`,
        description: `Accessible label for exhaustive code review`,
      })),
      (t[26] = o),
      (t[27] = j));
  let M;
  t[28] === a
    ? (M = t[29])
    : ((M = (e) => {
        a({ exhaustive_code_review: e });
      }),
      (t[28] = a),
      (t[29] = M));
  let N;
  t[30] !== n || t[31] !== r.exhaustive_code_review || t[32] !== j || t[33] !== M
    ? ((N = (0, Q.jsx)(P, {
        label: k,
        description: A,
        control: (0, Q.jsx)(h, {
          ariaLabel: j,
          checked: r.exhaustive_code_review,
          disabled: n,
          onChange: M,
        }),
      })),
      (t[30] = n),
      (t[31] = r.exhaustive_code_review),
      (t[32] = j),
      (t[33] = M),
      (t[34] = N))
    : (N = t[34]);
  let F;
  t[35] !== n ||
  t[36] !== o ||
  t[37] !== a ||
  t[38] !== r.allow_credits_for_code_reviews ||
  t[39] !== i
    ? ((F = i
        ? (0, Q.jsx)(P, {
            label: (0, Q.jsx)(s, {
              id: `settings.codeReview.personal.credits.label`,
              defaultMessage: `Use credits for reviews`,
              description: `Label for code review credits preference`,
            }),
            description: (0, Q.jsx)(s, {
              id: `settings.codeReview.personal.credits.description`,
              defaultMessage: `Allow credits to be consumed for reviews after rate limits`,
              description: `Description for code review credits preference`,
            }),
            control: (0, Q.jsx)(h, {
              ariaLabel: o.formatMessage({
                id: `settings.codeReview.personal.credits.aria`,
                defaultMessage: `Allow credits for code reviews`,
                description: `Accessible label for code review credits preference`,
              }),
              checked: r.allow_credits_for_code_reviews,
              disabled: n,
              onChange: (e) => {
                a({ allow_credits_for_code_reviews: e });
              },
            }),
          })
        : null),
      (t[35] = n),
      (t[36] = o),
      (t[37] = a),
      (t[38] = r.allow_credits_for_code_reviews),
      (t[39] = i),
      (t[40] = F))
    : (F = t[40]);
  let I;
  return (
    t[41] !== O || t[42] !== N || t[43] !== F || t[44] !== x
      ? ((I = (0, Q.jsxs)(w, {
          children: [
            u,
            (0, Q.jsx)(w.Content, { children: (0, Q.jsxs)(b, { children: [x, O, N, F] }) }),
          ],
        })),
        (t[41] = O),
        (t[42] = N),
        (t[43] = F),
        (t[44] = x),
        (t[45] = I))
      : (I = t[45]),
    I
  );
}
function X(e) {
  switch (e) {
    case `pr_open`:
      return (0, Q.jsx)(s, {
        id: `settings.codeReview.personal.trigger.prOpen`,
        defaultMessage: `On PR open`,
        description: `Code review trigger option for pull request creation`,
      });
    case `every_push`:
      return (0, Q.jsx)(s, {
        id: `settings.codeReview.personal.trigger.everyPush`,
        defaultMessage: `On every push`,
        description: `Code review trigger option for every push`,
      });
    case `smart_detect`:
      return (0, Q.jsx)(s, {
        id: `settings.codeReview.personal.trigger.smart`,
        defaultMessage: `Smart trigger`,
        description: `Experimental smart code review trigger option`,
      });
  }
}
var Z, Q, $;
e(() => {
  ((Z = j()),
    p(),
    v(),
    i(),
    C(),
    A(),
    n(),
    L(),
    M(),
    x(),
    g(),
    N(),
    S(),
    y(),
    c(),
    z(),
    Y(),
    (Q = D()),
    ($ = [`pr_open`, `every_push`, `smart_detect`]));
})();
export { te as CodeReviewSettings };
//# sourceMappingURL=code-review-settings-f64eacc74392.js.map
