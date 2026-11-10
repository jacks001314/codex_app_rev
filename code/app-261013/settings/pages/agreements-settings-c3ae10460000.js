import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  Cot as r,
  IDt as i,
  Iot as a,
  Ixt as o,
  JC as s,
  Lot as c,
  Pxt as l,
  VDt as u,
  Vxt as d,
  Xot as f,
  Yot as p,
  iw as m,
  jDt as h,
  nst as g,
  qC as _,
  rst as v,
  spt as y,
  t3 as b,
  tst as x,
  tw as S,
  vzt as C,
  wot as w,
  xMt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  Ek as E,
  LMr as D,
  Tk as O,
  Ymr as k,
  _F as A,
  eF as j,
  ehr as M,
  hF as N,
  mF as P,
  pF as F,
  tF as I,
  xPn as L,
  yPn as R,
  zOr as z,
} from "./app-initial-5851df3f6cb1.js";
import { n as B, t as V } from "./agreements-access-caa07e5e90a8.js";
function H() {
  let e = (0, q.c)(10),
    t = o(r),
    n = d(V),
    i = null;
  if (n.status === `loading`) {
    let t;
    (e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, J.jsx)(F, {})), (e[0] = t)) : (t = e[0]),
      (i = t));
  } else if (n.status === `error`) {
    let r;
    (e[1] !== n.accountId || e[2] !== t
      ? ((r = (0, J.jsx)(K, { onRetry: () => void t.get(D, n.accountId).refetch() })),
        (e[1] = n.accountId),
        (e[2] = t),
        (e[3] = r))
      : (r = e[3]),
      (i = r));
  } else if (n.status === `allowed`) {
    let t;
    (e[4] !== n.accountId || e[5] !== n.isHipaaWorkspace
      ? ((t = (0, J.jsx)(U, { workspaceId: n.accountId, isHipaaWorkspace: n.isHipaaWorkspace }, n.accountId)),
        (e[4] = n.accountId),
        (e[5] = n.isHipaaWorkspace),
        (e[6] = t))
      : (t = e[6]),
      (i = t));
  }
  let a;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, J.jsx)(j, { slug: `agreements` })), (e[7] = a))
    : (a = e[7]);
  let s;
  return (
    e[8] === i ? (s = e[9]) : ((s = (0, J.jsx)(N, { title: a, children: i })), (e[8] = i), (e[9] = s)),
    s
  );
}
function U(e) {
  let n = (0, q.c)(37),
    { workspaceId: r, isHipaaWorkspace: a } = e,
    o = u(),
    s = g(),
    l;
  n[0] === r ? (l = n[1]) : ((l = [`account-agreements-metadata`, r]), (n[0] = r), (n[1] = l));
  let d = l,
    p;
  n[2] === r
    ? (p = n[3])
    : ((p = (e) => {
        let { signal: t } = e;
        return k.safeGet(`/accounts/{account_id}/metadata`, {
          parameters: { path: { account_id: r } },
          additionalHeaders: { "ChatGPT-Account-ID": r, [y]: r },
          signal: t,
        });
      }),
      (n[2] = r),
      (n[3] = p));
  let m;
  n[4] !== d || n[5] !== p
    ? ((m = { queryKey: d, queryFn: p, staleTime: 0 }), (n[4] = d), (n[5] = p), (n[6] = m))
    : (m = n[6]);
  let { data: h, isPending: v, isError: b, refetch: x } = f(m),
    C;
  n[7] === r
    ? (C = n[8])
    : ((C = () =>
        k.safePost(`/quorum/workspace/{account_id}/sign_baa`, {
          parameters: { path: { account_id: r } },
          additionalHeaders: { "ChatGPT-Account-ID": r, [y]: r },
        })),
      (n[7] = r),
      (n[8] = C));
  let w;
  n[9] !== s || n[10] !== d
    ? ((w = async (e) => {
        let { timestamp: t } = e;
        (s.setQueryData(d, (e) => ({ ...e, workspace_baa_metadata: { signed: !0, timestamp: t } })),
          await s.invalidateQueries({ queryKey: d }));
      }),
      (n[9] = s),
      (n[10] = d),
      (n[11] = w))
    : (w = n[11]);
  let T;
  n[12] !== C || n[13] !== w
    ? ((T = { mutationFn: C, onSuccess: w }), (n[12] = C), (n[13] = w), (n[14] = T))
    : (T = n[14]);
  let { mutate: E, isPending: D, isError: A } = c(T);
  if (v) {
    let e;
    return (
      n[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(F, {})), (n[15] = e))
        : (e = n[15]),
      e
    );
  }
  if (b && h == null) {
    let e;
    return (
      n[16] === x
        ? (e = n[17])
        : ((e = (0, J.jsx)(K, { onRetry: () => void x() })), (n[16] = x), (n[17] = e)),
      e
    );
  }
  let j = h?.workspace_baa_metadata?.timestamp,
    M = h?.workspace_baa_metadata?.signed ?? !!j,
    N;
  if (j) {
    let e;
    if (n[18] !== o || n[19] !== j) {
      let t = new Date(j);
      ((e = Number.isNaN(t.getTime()) ? j : o.formatDate(t, { dateStyle: `short`, timeStyle: `medium` })),
        (n[18] = o),
        (n[19] = j),
        (n[20] = e));
    } else e = n[20];
    N = e;
  }
  let P = G,
    I;
  n[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, J.jsx)(O.Header, {
        size: `large`,
        title: (0, J.jsx)(`h2`, { children: (0, J.jsx)(i, { ...Q.serviceAgreementTitle }) }),
      })),
      (n[21] = I))
    : (I = n[21]);
  let L;
  n[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, J.jsx)(i, { ...Q.serviceAgreementDescription })), (n[22] = L))
    : (L = n[22]);
  let z;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, J.jsxs)(O, {
        children: [
          I,
          (0, J.jsx)(_, {
            children: (0, J.jsx)(S, {
              label: L,
              control: (0, J.jsx)(R, {
                href: Y,
                initiator: `open_in_browser_bridge`,
                underline: `always`,
                children: (0, J.jsx)(i, { ...Q.viewLink }),
              }),
            }),
          }),
        ],
      })),
      (n[23] = z))
    : (z = n[23]);
  let B;
  n[24] !== M || n[25] !== N || n[26] !== a || n[27] !== D || n[28] !== E || n[29] !== A
    ? ((B =
        a &&
        (0, J.jsxs)(O, {
          children: [
            (0, J.jsx)(O.Header, {
              title: (0, J.jsx)(`h2`, { children: (0, J.jsx)(i, { ...Q.baaTitle }) }),
              subtitle: (0, J.jsx)(i, { ...Q.baaDescription }),
            }),
            (0, J.jsxs)(_, {
              children: [
                (0, J.jsx)(S, {
                  label: (0, J.jsx)(i, {
                    ...(M ? Q.baaSignedDisclaimer : Q.baaUnsignedDisclaimer),
                    values: { baaLink: P },
                  }),
                  description: (0, J.jsx)(i, {
                    ...Q.baaHipaaEligibleFeaturesHelp,
                    values: { helpCenterLink: W },
                  }),
                  control: M
                    ? P((0, J.jsx)(i, { ...Q.viewLink }))
                    : (0, J.jsx)(t, {
                        color: `secondary`,
                        size: `toolbar`,
                        disabled: D,
                        loading: D,
                        onClick: () => E(),
                        children: (0, J.jsx)(i, { ...Q.agreeButton }),
                      }),
                }),
                M &&
                  (0, J.jsx)(S, {
                    label: (0, J.jsx)(i, { ...Q.timestampLabel }),
                    control: N ?? (0, J.jsx)(i, { ...Q.notAvailable }),
                  }),
              ],
            }),
            A &&
              (0, J.jsx)(O.Footer, {
                children: (0, J.jsx)(`p`, {
                  role: `alert`,
                  children: (0, J.jsx)(i, {
                    id: `workspaceAgreements.signError`,
                    defaultMessage: `Couldn't agree to the BAA. Please try again.`,
                    description: `Error after a workspace BAA signature request fails. The clinician can retry by clicking Agree again.`,
                  }),
                }),
              }),
          ],
        })),
      (n[24] = M),
      (n[25] = N),
      (n[26] = a),
      (n[27] = D),
      (n[28] = E),
      (n[29] = A),
      (n[30] = B))
    : (B = n[30]);
  let V;
  n[31] !== b || n[32] !== x
    ? ((V = b && (0, J.jsx)(K, { onRetry: () => void x() })), (n[31] = b), (n[32] = x), (n[33] = V))
    : (V = n[33]);
  let H;
  return (
    n[34] !== B || n[35] !== V
      ? ((H = (0, J.jsxs)(J.Fragment, { children: [z, B, V] })), (n[34] = B), (n[35] = V), (n[36] = H))
      : (H = n[36]),
    H
  );
}
function W(e) {
  return (0, J.jsx)(R, { href: Z, initiator: `open_in_browser_bridge`, underline: `always`, children: e });
}
function G(e) {
  return (0, J.jsx)(R, { href: X, initiator: `open_in_browser_bridge`, underline: `always`, children: e });
}
function K(e) {
  let n = (0, q.c)(4),
    { onRetry: r } = e,
    a;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, J.jsx)(`p`, {
        role: `alert`,
        children: (0, J.jsx)(i, {
          id: `workspaceAgreements.loadError`,
          defaultMessage: `Couldn't load agreements`,
          description: `Error shown when workspace eligibility or agreement details could not be loaded in Agreements settings.`,
        }),
      })),
      (n[0] = a))
    : (a = n[0]);
  let o;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, J.jsx)(i, {
        id: `workspaceAgreements.retry`,
        defaultMessage: `Retry`,
        description: `Button to retry loading the current workspace's Agreements settings after a request fails.`,
      })),
      (n[1] = o))
    : (o = n[1]);
  let s;
  return (
    n[2] === r
      ? (s = n[3])
      : ((s = (0, J.jsxs)(`div`, {
          className: `flex flex-col items-center gap-3 py-4 text-center`,
          children: [a, (0, J.jsx)(t, { color: `secondary`, onClick: r, children: o })],
        })),
        (n[2] = r),
        (n[3] = s)),
    s
  );
}
var q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((q = C()),
      a(),
      p(),
      x(),
      l(),
      v(),
      h(),
      z(),
      M(),
      b(),
      L(),
      w(),
      A(),
      E(),
      P(),
      m(),
      I(),
      s(),
      B(),
      (J = T()),
      (Y = `https://openai.com/policies/services-agreement/`),
      (X = `https://cdn.openai.com/osa/baa.pdf`),
      (Z = `https://help.openai.com/en/articles/20001069-chatgpt-healthcare-and-regulated-workspace-functionality`),
      (Q = n({
        serviceAgreementTitle: {
          id: `workspaceAgreements.serviceAgreementTitle`,
          defaultMessage: `OpenAI Services Agreement`,
          description: `Header for the Services Agreement section`,
        },
        serviceAgreementDescription: {
          id: `workspaceAgreements.serviceAgreementDescription`,
          defaultMessage: `Review the current Services Agreement.`,
          description: `Helper text for Services Agreement section`,
        },
        baaTitle: {
          id: `workspaceAgreements.baaTitle`,
          defaultMessage: `Business Associate Agreement (BAA)`,
          description: `Header for the BAA section`,
        },
        baaDescription: {
          id: `workspaceAgreements.baaDescription`,
          defaultMessage: `Available for HIPAA-eligible workspaces.`,
          description: `Helper text for the BAA section`,
        },
        viewLink: {
          id: `workspaceAgreements.viewLink`,
          defaultMessage: `View`,
          description: `Label for link button to view agreement`,
        },
        agreeButton: {
          id: `workspaceAgreements.agreeButton`,
          defaultMessage: `Agree`,
          description: `Label for button to agree to the BAA`,
        },
        timestampLabel: {
          id: `workspaceAgreements.timestampLabel`,
          defaultMessage: `BAA was agreed on`,
          description: `Label for BAA agreement timestamp field`,
        },
        notAvailable: {
          id: `workspaceAgreements.notAvailable`,
          defaultMessage: `Not available`,
          description: `Placeholder text when a detail is missing`,
        },
        baaUnsignedDisclaimer: {
          id: `workspaceAgreements.baaUnsignedDisclaimer`,
          defaultMessage: `By clicking Agree, you agree to the <baaLink>Business Associate and Healthcare Addendum</baaLink>. You represent that you are a Covered Entity or Business Associate under HIPAA and have authority to enter into this agreement.`,
          description: `Disclaimer shown before agreeing to the BAA`,
        },
        baaSignedDisclaimer: {
          id: `workspaceAgreements.baaSignedDisclaimer`,
          defaultMessage: `You agreed to the <baaLink>Business Associate and Healthcare Addendum</baaLink>. You represent that you are a Covered Entity or Business Associate under HIPAA and have authority to enter into this agreement.`,
          description: `Disclaimer shown after agreeing to the BAA`,
        },
        baaHipaaEligibleFeaturesHelp: {
          id: `workspaceAgreements.baaHipaaEligibleFeaturesHelp`,
          defaultMessage: `For a list of HIPAA eligible products and functionality, refer to <helpCenterLink>this help center article</helpCenterLink>.`,
          description: `Help center link for HIPAA eligible products and functionality`,
        },
      })));
  }))();
}
$();
export { H as AgreementsSettings };
//# sourceMappingURL=agreements-settings-c3ae10460000.js.map
