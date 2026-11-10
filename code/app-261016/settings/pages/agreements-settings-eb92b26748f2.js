import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  LNt as i,
  Lst as a,
  Mst as o,
  PBt as s,
  Qst as c,
  Rst as l,
  Smt as u,
  XOt as d,
  Y3 as f,
  YOt as p,
  Z3 as m,
  ZSt as h,
  ew as g,
  iCt as _,
  jst as v,
  okt as y,
  sct as b,
  sw as x,
  tkt as S,
  uw as C,
  vst as w,
  yst as T,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  GLn as E,
  LF as D,
  QF as O,
  RF as k,
  XF as A,
  ZF as j,
  cA as M,
  eI as N,
  iRr as P,
  lLr as F,
  lNr as I,
  qLn as L,
  sA as R,
  tyr as z,
} from "./app-initial-ad16eaadf81f.js";
import { n as B, t as V } from "./agreements-access-108705e4e29e.js";
function H() {
  let e = (0, q.c)(10),
    t = n(c),
    r = _(V),
    i = null;
  if (r.status === `loading`) {
    let t;
    (e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = (0, J.jsx)(A, {})), (e[0] = t)) : (t = e[0]),
      (i = t));
  } else if (r.status === `error`) {
    let n;
    (e[1] !== r.accountId || e[2] !== t
      ? ((n = (0, J.jsx)(K, { onRetry: () => void t.get(F, r.accountId).refetch() })),
        (e[1] = r.accountId),
        (e[2] = t),
        (e[3] = n))
      : (n = e[3]),
      (i = n));
  } else if (r.status === `allowed`) {
    let t;
    (e[4] !== r.accountId || e[5] !== r.isHipaaWorkspace
      ? ((t = (0, J.jsx)(U, { workspaceId: r.accountId, isHipaaWorkspace: r.isHipaaWorkspace }, r.accountId)),
        (e[4] = r.accountId),
        (e[5] = r.isHipaaWorkspace),
        (e[6] = t))
      : (t = e[6]),
      (i = t));
  }
  let a;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, J.jsx)(D, { slug: `agreements` })), (e[7] = a))
    : (a = e[7]);
  let o;
  return (
    e[8] === i ? (o = e[9]) : ((o = (0, J.jsx)(O, { title: a, children: i })), (e[8] = i), (e[9] = o)),
    o
  );
}
function U(e) {
  let n = (0, q.c)(37),
    { workspaceId: r, isHipaaWorkspace: i } = e,
    a = y(),
    s = l(),
    c;
  n[0] === r ? (c = n[1]) : ((c = [`account-agreements-metadata`, r]), (n[0] = r), (n[1] = c));
  let d = c,
    p;
  n[2] === r
    ? (p = n[3])
    : ((p = (e) => {
        let { signal: t } = e;
        return P.safeGet(`/accounts/{account_id}/metadata`, {
          parameters: { path: { account_id: r } },
          additionalHeaders: { "ChatGPT-Account-ID": r, [u]: r },
          signal: t,
        });
      }),
      (n[2] = r),
      (n[3] = p));
  let m;
  n[4] !== d || n[5] !== p
    ? ((m = { queryKey: d, queryFn: p, staleTime: 0 }), (n[4] = d), (n[5] = p), (n[6] = m))
    : (m = n[6]);
  let { data: h, isPending: g, isError: _, refetch: v } = o(m),
    b;
  n[7] === r
    ? (b = n[8])
    : ((b = () =>
        P.safePost(`/quorum/workspace/{account_id}/sign_baa`, {
          parameters: { path: { account_id: r } },
          additionalHeaders: { "ChatGPT-Account-ID": r, [u]: r },
        })),
      (n[7] = r),
      (n[8] = b));
  let C;
  n[9] !== s || n[10] !== d
    ? ((C = async (e) => {
        let { timestamp: t } = e;
        (s.setQueryData(d, (e) => ({ ...e, workspace_baa_metadata: { signed: !0, timestamp: t } })),
          await s.invalidateQueries({ queryKey: d }));
      }),
      (n[9] = s),
      (n[10] = d),
      (n[11] = C))
    : (C = n[11]);
  let w;
  n[12] !== b || n[13] !== C
    ? ((w = { mutationFn: b, onSuccess: C }), (n[12] = b), (n[13] = C), (n[14] = w))
    : (w = n[14]);
  let { mutate: D, isPending: O, isError: k } = T(w);
  if (g) {
    let e;
    return (
      n[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(A, {})), (n[15] = e))
        : (e = n[15]),
      e
    );
  }
  if (_ && h == null) {
    let e;
    return (
      n[16] === v
        ? (e = n[17])
        : ((e = (0, J.jsx)(K, { onRetry: () => void v() })), (n[16] = v), (n[17] = e)),
      e
    );
  }
  let j = h?.workspace_baa_metadata?.timestamp,
    M = h?.workspace_baa_metadata?.signed ?? !!j,
    N;
  if (j) {
    let e;
    if (n[18] !== a || n[19] !== j) {
      let t = new Date(j);
      ((e = Number.isNaN(t.getTime()) ? j : a.formatDate(t, { dateStyle: `short`, timeStyle: `medium` })),
        (n[18] = a),
        (n[19] = j),
        (n[20] = e));
    } else e = n[20];
    N = e;
  }
  let F = G,
    I;
  n[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, J.jsx)(R.Header, {
        size: `large`,
        title: (0, J.jsx)(`h2`, { children: (0, J.jsx)(S, { ...Q.serviceAgreementTitle }) }),
      })),
      (n[21] = I))
    : (I = n[21]);
  let L;
  n[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, J.jsx)(S, { ...Q.serviceAgreementDescription })), (n[22] = L))
    : (L = n[22]);
  let z;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, J.jsxs)(R, {
        children: [
          I,
          (0, J.jsx)(t, {
            children: (0, J.jsx)(x, {
              label: L,
              control: (0, J.jsx)(E, {
                href: Y,
                initiator: `open_in_browser_bridge`,
                underline: `always`,
                children: (0, J.jsx)(S, { ...Q.viewLink }),
              }),
            }),
          }),
        ],
      })),
      (n[23] = z))
    : (z = n[23]);
  let B;
  n[24] !== M || n[25] !== N || n[26] !== i || n[27] !== O || n[28] !== D || n[29] !== k
    ? ((B =
        i &&
        (0, J.jsxs)(R, {
          children: [
            (0, J.jsx)(R.Header, {
              title: (0, J.jsx)(`h2`, { children: (0, J.jsx)(S, { ...Q.baaTitle }) }),
              subtitle: (0, J.jsx)(S, { ...Q.baaDescription }),
            }),
            (0, J.jsxs)(t, {
              children: [
                (0, J.jsx)(x, {
                  label: (0, J.jsx)(S, {
                    ...(M ? Q.baaSignedDisclaimer : Q.baaUnsignedDisclaimer),
                    values: { baaLink: F },
                  }),
                  description: (0, J.jsx)(S, {
                    ...Q.baaHipaaEligibleFeaturesHelp,
                    values: { helpCenterLink: W },
                  }),
                  control: M
                    ? F((0, J.jsx)(S, { ...Q.viewLink }))
                    : (0, J.jsx)(f, {
                        color: `secondary`,
                        size: `toolbar`,
                        disabled: O,
                        loading: O,
                        onClick: () => D(),
                        children: (0, J.jsx)(S, { ...Q.agreeButton }),
                      }),
                }),
                M &&
                  (0, J.jsx)(x, {
                    label: (0, J.jsx)(S, { ...Q.timestampLabel }),
                    control: N ?? (0, J.jsx)(S, { ...Q.notAvailable }),
                  }),
              ],
            }),
            k &&
              (0, J.jsx)(R.Footer, {
                children: (0, J.jsx)(`p`, {
                  role: `alert`,
                  children: (0, J.jsx)(S, {
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
      (n[26] = i),
      (n[27] = O),
      (n[28] = D),
      (n[29] = k),
      (n[30] = B))
    : (B = n[30]);
  let V;
  n[31] !== _ || n[32] !== v
    ? ((V = _ && (0, J.jsx)(K, { onRetry: () => void v() })), (n[31] = _), (n[32] = v), (n[33] = V))
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
  return (0, J.jsx)(E, { href: Z, initiator: `open_in_browser_bridge`, underline: `always`, children: e });
}
function G(e) {
  return (0, J.jsx)(E, { href: X, initiator: `open_in_browser_bridge`, underline: `always`, children: e });
}
function K(e) {
  let t = (0, q.c)(4),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, J.jsx)(`p`, {
        role: `alert`,
        children: (0, J.jsx)(S, {
          id: `workspaceAgreements.loadError`,
          defaultMessage: `Couldn't load agreements`,
          description: `Error shown when workspace eligibility or agreement details could not be loaded in Agreements settings.`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, J.jsx)(S, {
        id: `workspaceAgreements.retry`,
        defaultMessage: `Retry`,
        description: `Button to retry loading the current workspace's Agreements settings after a request fails.`,
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, J.jsxs)(`div`, {
          className: `flex flex-col items-center gap-3 py-4 text-center`,
          children: [r, (0, J.jsx)(f, { color: `secondary`, onClick: n, children: i })],
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
var q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((q = s()),
      w(),
      v(),
      a(),
      h(),
      b(),
      d(),
      I(),
      z(),
      m(),
      L(),
      r(),
      N(),
      M(),
      j(),
      C(),
      k(),
      g(),
      B(),
      (J = i()),
      (Y = `https://openai.com/policies/services-agreement/`),
      (X = `https://cdn.openai.com/osa/baa.pdf`),
      (Z = `https://help.openai.com/en/articles/20001069-chatgpt-healthcare-and-regulated-workspace-functionality`),
      (Q = p({
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
//# sourceMappingURL=agreements-settings-eb92b26748f2.js.map
