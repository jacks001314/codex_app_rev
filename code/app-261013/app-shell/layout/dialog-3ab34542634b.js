import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $C as n,
  Gs as r,
  Hs as i,
  IDt as a,
  JC as o,
  Ks as s,
  MO as c,
  Mz as l,
  Nz as u,
  VDt as d,
  Vs as f,
  _O as p,
  bc as m,
  bx as h,
  cO as g,
  fO as _,
  gO as ee,
  iO as v,
  iw as y,
  jDt as b,
  jO as te,
  lO as x,
  mO as ne,
  oO as re,
  qC as ie,
  rO as S,
  sO as ae,
  t3 as C,
  tw as oe,
  vO as w,
  vzt as T,
  xMt as E,
  yc as se,
  yx as ce,
  yzt as D,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as O,
  EPn as le,
  KQ as ue,
  TPn as de,
  Xd as k,
  Yd as fe,
  qQ as pe,
} from "./app-initial-5851df3f6cb1.js";
import { n as A, t as me } from "./error-54a41f068476.js";
function he(e) {
  let t = (0, M.c)(35),
    { connection: n } = e,
    r;
  t[0] === n.provider_kind
    ? (r = t[1])
    : ((r =
        n.provider_kind === `azure`
          ? (0, P.jsx)(a, {
              id: `restricted.environmentSetup.oic.azureTrustHelp`,
              defaultMessage: `Add a federated credential to your Entra app registration with this issuer, audience, and subject`,
              description: `Azure-specific federation setup after saving a connection`,
            })
          : null),
      (t[0] = n.provider_kind),
      (t[1] = r));
  let i;
  t[2] === n.provider_kind
    ? (i = t[3])
    : ((i =
        n.provider_kind === `aws`
          ? (0, P.jsx)(a, {
              id: `restricted.environmentSetup.oic.awsTrustHelp`,
              defaultMessage: `Add this OIDC provider in IAM, then restrict the role’s trust policy to this audience and subject`,
              description: `AWS-specific federation setup after saving a connection`,
            })
          : null),
      (t[2] = n.provider_kind),
      (t[3] = i));
  let o;
  t[4] === n.provider_kind
    ? (o = t[5])
    : ((o =
        n.provider_kind === `gcp`
          ? (0, P.jsx)(a, {
              id: `restricted.environmentSetup.oic.gcpTrustHelp`,
              defaultMessage: `Set these values on your workload identity provider and grant the matching identity access to the service account`,
              description: `Google Cloud federation setup after saving a connection`,
            })
          : null),
      (t[4] = n.provider_kind),
      (t[5] = o));
  let s;
  t[6] !== r || t[7] !== i || t[8] !== o
    ? ((s = (0, P.jsxs)(`p`, { className: `text-sm text-secondary select-none`, children: [r, i, o] })),
      (t[6] = r),
      (t[7] = i),
      (t[8] = o),
      (t[9] = s))
    : (s = t[9]);
  let c;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, P.jsx)(a, {
        id: `restricted.environmentSetup.oic.connectionId`,
        defaultMessage: `Connection ID`,
        description: `Saved OpenAI outbound identity connection identifier`,
      })),
      (t[10] = c))
    : (c = t[10]);
  let l;
  t[11] === n.connection_id
    ? (l = t[12])
    : ((l = (0, P.jsx)(j, { label: c, value: n.connection_id })), (t[11] = n.connection_id), (t[12] = l));
  let u;
  t[13] === n.issuer
    ? (u = t[14])
    : ((u =
        n.issuer == null
          ? null
          : (0, P.jsx)(j, {
              label: (0, P.jsx)(a, {
                id: `restricted.environmentSetup.oic.issuer`,
                defaultMessage: `Issuer`,
                description: `OpenAI OIDC issuer to trust in the cloud provider`,
              }),
              value: n.issuer,
            })),
      (t[13] = n.issuer),
      (t[14] = u));
  let d;
  t[15] === n.audience
    ? (d = t[16])
    : ((d =
        n.audience == null
          ? null
          : (0, P.jsx)(j, {
              label: (0, P.jsx)(a, {
                id: `restricted.environmentSetup.oic.audience`,
                defaultMessage: `Audience`,
                description: `Server-provided audience for this provider’s federated identity`,
              }),
              value: n.audience,
            })),
      (t[15] = n.audience),
      (t[16] = d));
  let f;
  t[17] === n.subject
    ? (f = t[18])
    : ((f =
        n.subject == null
          ? null
          : (0, P.jsx)(j, {
              label: (0, P.jsx)(a, {
                id: `restricted.environmentSetup.oic.subject`,
                defaultMessage: `Subject`,
                description: `Actual saved subject to match in the provider trust policy`,
              }),
              value: n.subject,
            })),
      (t[17] = n.subject),
      (t[18] = f));
  let p;
  t[19] !== l || t[20] !== u || t[21] !== d || t[22] !== f
    ? ((p = (0, P.jsxs)(ie, { children: [l, u, d, f] })),
      (t[19] = l),
      (t[20] = u),
      (t[21] = d),
      (t[22] = f),
      (t[23] = p))
    : (p = t[23]);
  let m;
  t[24] !== n.audience || t[25] !== n.issuer
    ? ((m =
        n.issuer == null || n.audience == null
          ? (0, P.jsx)(`p`, {
              role: `status`,
              className: `text-sm text-secondary select-none`,
              children: (0, P.jsx)(a, {
                id: `restricted.environmentSetup.oic.trustUnavailable`,
                defaultMessage: `The connection is saved, but its issuer or audience is not available yet. Reopen it later to load the federation details`,
                description: `Confirms a successful save when the backend omits trust metadata, without inventing values or asking the user to create again`,
              }),
            })
          : null),
      (t[24] = n.audience),
      (t[25] = n.issuer),
      (t[26] = m))
    : (m = t[26]);
  let h;
  t[27] === n.subject
    ? (h = t[28])
    : ((h =
        n.subject == null
          ? (0, P.jsx)(`p`, {
              className: `text-sm text-secondary select-none`,
              children: (0, P.jsx)(a, {
                id: `restricted.environmentSetup.oic.runtimeSubject`,
                defaultMessage: `This subject depends on the user or environment at runtime. Configure your provider for the resolved subject; this template has no fixed subject to copy`,
                description: `Avoids inventing a subject for a template requiring verified runtime context`,
              }),
            })
          : null),
      (t[27] = n.subject),
      (t[28] = h));
  let g;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, P.jsx)(`p`, {
        className: `text-xs text-secondary select-none`,
        children: (0, P.jsx)(a, {
          id: `restricted.environmentSetup.oic.savedAttachmentHelp`,
          defaultMessage: `Environment access starts after its attachment is saved and approved`,
          description: `Connection creation alone does not grant environment access`,
        }),
      })),
      (t[29] = g))
    : (g = t[29]);
  let _;
  return (
    t[30] !== p || t[31] !== m || t[32] !== h || t[33] !== s
      ? ((_ = (0, P.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-3`, children: [s, p, m, h, g] })),
        (t[30] = p),
        (t[31] = m),
        (t[32] = h),
        (t[33] = s),
        (t[34] = _))
      : (_ = t[34]),
    _
  );
}
function j(e) {
  let t = (0, M.c)(20),
    { label: r, value: i } = e,
    a = (0, N.useId)(),
    o = d(),
    s;
  t[0] !== r || t[1] !== a
    ? ((s = (0, P.jsx)(`span`, { id: a, children: r })), (t[0] = r), (t[1] = a), (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === i
    ? (c = t[4])
    : ((c = (0, P.jsx)(`code`, {
        className: `min-w-0 flex-1 text-xs break-all whitespace-pre-wrap`,
        children: i,
      })),
      (t[3] = i),
      (t[4] = c));
  let l;
  t[5] !== o || t[6] !== i
    ? ((l = o.formatMessage(
        {
          id: `restricted.environmentSetup.oic.copyValue`,
          defaultMessage: `Copy {value}`,
          description: `Copy a non-secret connection identifier or trust value`,
        },
        { value: i },
      )),
      (t[5] = o),
      (t[6] = i),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] === i ? (u = t[9]) : ((u = (e) => S(i, e)), (t[8] = i), (t[9] = u));
  let f;
  t[10] !== l || t[11] !== u
    ? ((f = (0, P.jsx)(ce, { variant: `codeBlock`, iconOnly: !0, ariaLabel: l, onCopy: u })),
      (t[10] = l),
      (t[11] = u),
      (t[12] = f))
    : (f = t[12]);
  let p;
  t[13] !== a || t[14] !== c || t[15] !== f
    ? ((p = (0, P.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2`,
        role: `group`,
        "aria-labelledby": a,
        children: [c, f],
      })),
      (t[13] = a),
      (t[14] = c),
      (t[15] = f),
      (t[16] = p))
    : (p = t[16]);
  let m;
  return (
    t[17] !== s || t[18] !== p
      ? ((m = (0, P.jsx)(n, { label: s, children: p })), (t[17] = s), (t[18] = p), (t[19] = m))
      : (m = t[19]),
    m
  );
}
var M, N, P;
function F() {
  return (F = e(() => {
    ((M = T()), (N = D()), b(), h(), y(), o(), v(), (P = E()));
  }))();
}
function ge(e) {
  let t = (0, z.c)(42),
    { target: n, onChange: r, readOnly: i } = e,
    o,
    s,
    c;
  if (t[0] !== r || t[1] !== i || t[2] !== n) {
    let e;
    bb0: switch (n.provider_kind) {
      case `azure`: {
        let i;
        (t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((i = (0, B.jsx)(a, {
              id: `restricted.environmentSetup.oic.azureHelp`,
              defaultMessage: `Use IDs from your Entra app registration, not a client secret. Access comes from the app’s service principal`,
              description: `Explains Azure configuration and application-level permissions`,
            })),
            (t[6] = i))
          : (i = t[6]),
          (o = i));
        let s;
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((s = (0, B.jsx)(a, {
              id: `restricted.environmentSetup.oic.tenantId`,
              defaultMessage: `Directory (tenant) ID`,
              description: `Azure directory tenant identifier`,
            })),
            (t[7] = s))
          : (s = t[7]);
        let c;
        t[8] !== r || t[9] !== n
          ? ((c = (e) => r({ ...n, tenant_id: e })), (t[8] = r), (t[9] = n), (t[10] = c))
          : (c = t[10]);
        let l;
        t[11] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((l = (0, B.jsx)(a, {
              id: `restricted.environmentSetup.oic.clientId`,
              defaultMessage: `Application (client) ID`,
              description: `Azure application client identifier, not an object ID or secret`,
            })),
            (t[11] = l))
          : (l = t[11]);
        let u;
        (t[12] !== r || t[13] !== n
          ? ((u = (e) => r({ ...n, client_id: e })), (t[12] = r), (t[13] = n), (t[14] = u))
          : (u = t[14]),
          (e = [
            {
              label: s,
              value: n.tenant_id,
              placeholder: `11111111-1111-4111-8111-111111111111`,
              onChange: c,
            },
            {
              label: l,
              value: n.client_id,
              placeholder: `22222222-2222-4222-8222-222222222222`,
              onChange: u,
            },
          ]));
        break bb0;
      }
      case `aws`: {
        let i;
        (t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((i = (0, B.jsx)(a, {
              id: `restricted.environmentSetup.oic.awsHelp`,
              defaultMessage: `Use the role’s ARN, not an access key. Its IAM policies determine access`,
              description: `Explains secretless AWS role-based access`,
            })),
            (t[15] = i))
          : (i = t[15]),
          (o = i));
        let s;
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((s = (0, B.jsx)(a, {
              id: `restricted.environmentSetup.oic.awsRoleArn`,
              defaultMessage: `IAM role ARN`,
              description: `Amazon Resource Name of the AWS IAM role the connection will assume`,
            })),
            (t[16] = s))
          : (s = t[16]);
        let c;
        t[17] !== r || t[18] !== n
          ? ((c = (e) => r({ ...n, role_arn: e })), (t[17] = r), (t[18] = n), (t[19] = c))
          : (c = t[19]);
        let l;
        t[20] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((l = (0, B.jsx)(a, {
              id: `restricted.environmentSetup.oic.awsRegion`,
              defaultMessage: `AWS region`,
              description: `AWS region used by the identity connection`,
            })),
            (t[20] = l))
          : (l = t[20]);
        let u;
        (t[21] !== r || t[22] !== n
          ? ((u = (e) => r({ ...n, region: e })), (t[21] = r), (t[22] = n), (t[23] = u))
          : (u = t[23]),
          (e = [
            {
              label: s,
              value: n.role_arn,
              placeholder: `arn:aws:iam::123456789012:role/codex-readers`,
              onChange: c,
            },
            { label: l, value: n.region, placeholder: `us-east-1`, onChange: u },
          ]));
        break bb0;
      }
      case `gcp`: {
        let i;
        (t[24] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((i = (0, B.jsx)(a, {
              id: `restricted.environmentSetup.oic.gcpHelp`,
              defaultMessage: `Use a workload identity pool provider and service account, not a JSON key`,
              description: `Explains secretless Google Cloud configuration`,
            })),
            (t[24] = i))
          : (i = t[24]),
          (o = i));
        let s;
        t[25] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((s = (0, B.jsx)(a, {
              id: `restricted.environmentSetup.oic.gcpProvider`,
              defaultMessage: `Workload identity provider`,
              description: `Full Google Cloud workload identity pool provider resource path`,
            })),
            (t[25] = s))
          : (s = t[25]);
        let c;
        t[26] !== r || t[27] !== n
          ? ((c = (e) => r({ ...n, workload_identity_provider: e })), (t[26] = r), (t[27] = n), (t[28] = c))
          : (c = t[28]);
        let l;
        t[29] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((l = (0, B.jsx)(a, {
              id: `restricted.environmentSetup.oic.gcpServiceAccount`,
              defaultMessage: `Service account email`,
              description: `Google Cloud service account identity the connection will use, not the employee’s email`,
            })),
            (t[29] = l))
          : (l = t[29]);
        let u;
        (t[30] !== r || t[31] !== n
          ? ((u = (e) => r({ ...n, service_account_email: e })), (t[30] = r), (t[31] = n), (t[32] = u))
          : (u = t[32]),
          (e = [
            {
              label: s,
              value: n.workload_identity_provider,
              placeholder: `projects/123456789/locations/global/workloadIdentityPools/codex/providers/openai`,
              onChange: c,
            },
            {
              label: l,
              value: n.service_account_email,
              placeholder: `codex-readers@my-project.iam.gserviceaccount.com`,
              onChange: u,
            },
          ]));
      }
    }
    ((s = `flex min-w-0 flex-col gap-3`),
      (c = i ? (0, B.jsx)(ie, { children: e.map(L) }) : e.map(I)),
      (t[0] = r),
      (t[1] = i),
      (t[2] = n),
      (t[3] = s),
      (t[4] = c),
      (t[5] = o));
  } else ((s = t[3]), (c = t[4]), (o = t[5]));
  let l;
  t[33] !== o || t[34] !== i
    ? ((l = i
        ? (0, B.jsx)(a, {
            id: `restricted.environmentSetup.oic.immutableTarget`,
            defaultMessage: `The provider and target are fixed for this connection`,
            description: `Explains why an existing cloud identity target is displayed read-only`,
          })
        : o),
      (t[33] = o),
      (t[34] = i),
      (t[35] = l))
    : (l = t[35]);
  let u;
  t[36] === l
    ? (u = t[37])
    : ((u = (0, B.jsx)(`p`, { className: `text-xs text-secondary select-none`, children: l })),
      (t[36] = l),
      (t[37] = u));
  let d;
  return (
    t[38] !== s || t[39] !== c || t[40] !== u
      ? ((d = (0, B.jsxs)(`div`, { className: s, children: [c, u] })),
        (t[38] = s),
        (t[39] = c),
        (t[40] = u),
        (t[41] = d))
      : (d = t[41]),
    d
  );
}
function I(e) {
  return (0, B.jsx)(
    R,
    {
      label: e.label,
      children: (0, B.jsx)(de, {
        autoComplete: `off`,
        required: !0,
        value: e.value,
        placeholder: e.placeholder,
        onChange: (t) => e.onChange(t.target.value),
      }),
    },
    e.placeholder,
  );
}
function L(e) {
  return (0, B.jsx)(j, { label: e.label, value: e.value }, e.placeholder);
}
function R(e) {
  let t = (0, z.c)(5),
    { label: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, B.jsx)(`span`, { className: `select-none`, children: n })), (t[0] = n), (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, B.jsxs)(`label`, {
          className: `flex min-w-0 flex-col gap-2 text-sm text-secondary`,
          children: [i, r],
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
var z, B;
function V() {
  return (V = e(() => {
    ((z = T()), b(), O(), o(), F(), (B = E()));
  }))();
}
function H(e) {
  let n = (0, _e.c)(71),
    { isOpen: o, connection: s, onClose: c, onSubmit: u } = e,
    f = d(),
    m = s?.display_name ?? ``,
    h = s?.subject_template ?? `oai:v1:oic:{connection_id}`,
    _ = s?.include_actor_email ?? !1,
    v;
  n[0] !== m || n[1] !== h || n[2] !== _
    ? ((v = { display_name: m, subject_template: h, include_actor_email: _ }),
      (n[0] = m),
      (n[1] = h),
      (n[2] = _),
      (n[3] = v))
    : (v = n[3]);
  let [y, b] = (0, U.useState)(v),
    S;
  n[4] === s
    ? (S = n[5])
    : ((S = s?.target ?? {
        provider_kind: `azure`,
        tenant_id: s?.provider_kind === `azure` ? s.azure_tenant_id : ``,
        client_id: s?.provider_kind === `azure` ? s.azure_client_id : ``,
      }),
      (n[4] = s),
      (n[5] = S));
  let [C, w] = (0, U.useState)(S),
    T;
  n[6] === s?.additional_claims
    ? (T = n[7])
    : ((T = JSON.stringify(s?.additional_claims ?? {}, null, 2)), (n[6] = s?.additional_claims), (n[7] = T));
  let [E, ce] = (0, U.useState)(T),
    [D, O] = (0, U.useState)(!1),
    [k, pe] = (0, U.useState)(null),
    [A, j] = (0, U.useState)(null),
    M,
    N;
  if (k != null) {
    let e;
    (n[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, W.jsx)(a, {
          id: `restricted.environmentSetup.oic.savedTitle`,
          defaultMessage: `Connection saved`,
          description: `Heading after an outbound identity connection has been saved`,
        })),
        (n[8] = e))
      : (e = n[8]),
      (M = e));
    let t;
    (n[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, W.jsx)(a, {
          id: `restricted.environmentSetup.oic.savedSubtitle`,
          defaultMessage: `Finish setup in your cloud provider using these trust settings`,
          description: `The connection is persisted but cloud-side federation still needs configuration`,
        })),
        (n[9] = t))
      : (t = n[9]),
      (N = t));
  } else if (s == null) {
    let e;
    (n[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, W.jsx)(a, {
          id: `restricted.environmentSetup.oic.newTitle`,
          defaultMessage: `New identity connection`,
          description: `Title when creating an outbound identity connection`,
        })),
        (n[10] = e))
      : (e = n[10]),
      (M = e));
    let t;
    (n[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, W.jsx)(a, {
          id: `restricted.environmentSetup.oic.newSubtitle`,
          defaultMessage: `Let this environment access your cloud resources without storing secrets`,
          description: `Short explanation of outbound workload identity`,
        })),
        (n[11] = t))
      : (t = n[11]),
      (N = t));
  } else {
    let e;
    (n[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, W.jsx)(a, {
          id: `restricted.environmentSetup.oic.editTitle`,
          defaultMessage: `Edit identity connection`,
          description: `Title when editing an existing outbound identity connection`,
        })),
        (n[12] = e))
      : (e = n[12]),
      (M = e));
    let t;
    (n[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, W.jsx)(a, {
          id: `restricted.environmentSetup.oic.editSubtitle`,
          defaultMessage: `Changes apply to every environment using this connection`,
          description: `Warns that editing the shared connection affects its other attachments`,
        })),
        (n[13] = t))
      : (t = n[13]),
      (N = t));
  }
  let P;
  n[14] === s
    ? (P = n[15])
    : ((P =
        s == null
          ? (0, W.jsx)(a, {
              id: `restricted.environmentSetup.oic.create`,
              defaultMessage: `Create connection`,
              description: `Persists a real outbound identity connection`,
            })
          : (0, W.jsx)(a, {
              id: `restricted.environmentSetup.oic.save`,
              defaultMessage: `Save connection`,
              description: `Saves edits to a real shared outbound identity connection`,
            })),
      (n[14] = s),
      (n[15] = P));
  let F = P,
    I =
      s == null &&
      A != null &&
      (A.error === `unavailable` ||
        A.error === `invalid-response` ||
        A.error === `authentication` ||
        (A.error === `http` && (A.status == null || A.status === 408 || A.status >= 500))),
    L;
  n[16] !== E ||
  n[17] !== I ||
  n[18] !== y ||
  n[19] !== o ||
  n[20] !== u ||
  n[21] !== k ||
  n[22] !== D ||
  n[23] !== C
    ? ((L = async () => {
        if (!o || D || k != null || I) return;
        let e;
        try {
          e = ue.parse({
            ...y,
            additional_claims: JSON.parse(E),
            ...(C.provider_kind === `azure`
              ? { azure_tenant_id: C.tenant_id, azure_client_id: C.client_id }
              : { target: C }),
          });
        } catch {
          j({ ok: !1, error: `invalid-request` });
          return;
        }
        (j(null), O(!0));
        try {
          let t = await u(e);
          t.ok
            ? t.data.provider_kind === C.provider_kind
              ? pe(t.data)
              : j({ ok: !1, error: `invalid-response` })
            : j(t);
        } catch {
          j({ ok: !1, error: `unavailable` });
        }
        O(!1);
      }),
      (n[16] = E),
      (n[17] = I),
      (n[18] = y),
      (n[19] = o),
      (n[20] = u),
      (n[21] = k),
      (n[22] = D),
      (n[23] = C),
      (n[24] = L))
    : (L = n[24]);
  let z = L,
    B;
  n[25] !== c || n[26] !== D
    ? ((B = (e) => {
        !e && !D && c();
      }),
      (n[25] = c),
      (n[26] = D),
      (n[27] = B))
    : (B = n[27]);
  let V;
  n[28] === z
    ? (V = n[29])
    : ((V = (e) => {
        (e.preventDefault(), e.stopPropagation(), z());
      }),
      (n[28] = z),
      (n[29] = V));
  let H;
  n[30] === M
    ? (H = n[31])
    : ((H = (0, W.jsx)(p, { className: `sr-only`, children: M })), (n[30] = M), (n[31] = H));
  let G;
  n[32] === N ? (G = n[33]) : ((G = (0, W.jsx)(ee, { children: N })), (n[32] = N), (n[33] = G));
  let K;
  n[34] !== G || n[35] !== M
    ? ((K = (0, W.jsx)(x, { children: (0, W.jsx)(g, { title: M, subtitleSize: `sm`, subtitle: G }) })),
      (n[34] = G),
      (n[35] = M),
      (n[36] = K))
    : (K = n[36]);
  let q;
  n[37] !== E ||
  n[38] !== s ||
  n[39] !== I ||
  n[40] !== y ||
  n[41] !== f ||
  n[42] !== k ||
  n[43] !== D ||
  n[44] !== C
    ? ((q =
        k == null
          ? (0, W.jsxs)(W.Fragment, {
              children: [
                (0, W.jsxs)(`fieldset`, {
                  disabled: D || I,
                  className: `flex min-w-0 flex-col gap-4`,
                  children: [
                    s == null
                      ? (0, W.jsx)(fe, {
                          fullWidth: !0,
                          size: `dialog`,
                          ariaLabel: f.formatMessage({
                            id: `restricted.environmentSetup.oic.provider`,
                            defaultMessage: `Cloud provider`,
                            description: `Select the cloud provider preset for a connection`,
                          }),
                          selectedId: C.provider_kind,
                          options: [
                            {
                              id: `azure`,
                              label: (0, W.jsxs)(W.Fragment, {
                                children: [
                                  (0, W.jsx)(l, { asset: i }),
                                  (0, W.jsx)(a, {
                                    id: `restricted.environmentSetup.oic.azurePreset`,
                                    defaultMessage: `Azure`,
                                    description: `Microsoft Azure cloud provider preset`,
                                  }),
                                ],
                              }),
                            },
                            {
                              id: `aws`,
                              label: (0, W.jsxs)(W.Fragment, {
                                children: [
                                  (0, W.jsx)(l, { asset: se }),
                                  (0, W.jsx)(a, {
                                    id: `restricted.environmentSetup.oic.awsPreset`,
                                    defaultMessage: `AWS`,
                                    description: `Amazon Web Services cloud provider preset`,
                                  }),
                                ],
                              }),
                            },
                            {
                              id: `gcp`,
                              label: (0, W.jsxs)(W.Fragment, {
                                children: [
                                  (0, W.jsx)(l, { asset: r }),
                                  (0, W.jsx)(a, {
                                    id: `restricted.environmentSetup.oic.gcpPreset`,
                                    defaultMessage: `Google Cloud`,
                                    description: `Google Cloud provider preset`,
                                  }),
                                ],
                              }),
                            },
                          ],
                          onSelect: (e) => {
                            if (e !== C.provider_kind) {
                              j(null);
                              bb203: switch (e) {
                                case `azure`:
                                  w({ provider_kind: `azure`, tenant_id: ``, client_id: `` });
                                  break bb203;
                                case `aws`:
                                  w({ provider_kind: `aws`, role_arn: ``, region: `us-east-1` });
                                  break bb203;
                                case `gcp`:
                                  w({
                                    provider_kind: `gcp`,
                                    workload_identity_provider: ``,
                                    service_account_email: ``,
                                  });
                              }
                            }
                          },
                        })
                      : null,
                    (0, W.jsx)(R, {
                      label: (0, W.jsx)(a, {
                        id: `restricted.environmentSetup.oic.name`,
                        defaultMessage: `Connection name`,
                        description: `Human-readable name for an outbound identity connection`,
                      }),
                      children: (0, W.jsx)(de, {
                        autoFocus: !0,
                        autoComplete: `off`,
                        required: !0,
                        maxLength: 200,
                        value: y.display_name,
                        placeholder: f.formatMessage({
                          id: `restricted.environmentSetup.oic.namePlaceholder`,
                          defaultMessage: `e.g. Analytics read-only`,
                          description: `Example name for a shared outbound identity connection`,
                        }),
                        onChange: (e) => b({ ...y, display_name: e.target.value }),
                      }),
                    }),
                    (0, W.jsx)(ge, { target: C, onChange: w, readOnly: s != null }),
                    (0, W.jsxs)(`details`, {
                      children: [
                        (0, W.jsx)(`summary`, {
                          className: `cursor-interaction text-sm text-secondary select-none`,
                          children: (0, W.jsx)(a, {
                            id: `restricted.environmentSetup.oic.subjectAndClaims`,
                            defaultMessage: `Subject and token claims`,
                            description: `Disclosure for customizing the signed OIDC subject and additional claims`,
                          }),
                        }),
                        (0, W.jsxs)(`div`, {
                          className: `flex min-w-0 flex-col gap-3`,
                          children: [
                            (0, W.jsx)(R, {
                              label: (0, W.jsx)(a, {
                                id: `restricted.environmentSetup.oic.subjectTemplate`,
                                defaultMessage: `Subject template`,
                                description: `Template for the outgoing OIDC token subject`,
                              }),
                              children: (0, W.jsx)(de, {
                                autoComplete: `off`,
                                required: !0,
                                value: y.subject_template,
                                onChange: (e) => b({ ...y, subject_template: e.target.value }),
                              }),
                            }),
                            (0, W.jsx)(`p`, {
                              className: `text-sm text-secondary select-none`,
                              children: (0, W.jsx)(a, {
                                id: `restricted.environmentSetup.oic.templateHelp`,
                                defaultMessage: `Keep {prefix} at the start. You can append fields such as {actor}, {environment}, and {workspace}; AuthAPI fills them from verified runtime context`,
                                description: `Explains the required OIC namespace and example supported template placeholders`,
                                values: {
                                  prefix: `oai:v1:oic:{connection_id}`,
                                  actor: `{actor_id}`,
                                  environment: `{environment_id}`,
                                  workspace: `{workspace_id}`,
                                },
                              }),
                            }),
                            (0, W.jsx)(R, {
                              label: (0, W.jsx)(a, {
                                id: `restricted.environmentSetup.oic.additionalClaims`,
                                defaultMessage: `Additional claims (JSON)`,
                                description: `Editor for extra signed claims whose values are strings or templates`,
                              }),
                              children: (0, W.jsx)(le, {
                                autoComplete: `off`,
                                rows: 4,
                                value: E,
                                onChange: (e) => ce(e.target.value),
                              }),
                            }),
                            (0, W.jsx)(ie, {
                              children: (0, W.jsx)(oe, {
                                size: `compact`,
                                label: (0, W.jsx)(a, {
                                  id: `restricted.environmentSetup.oic.includeEmail`,
                                  defaultMessage: `Include the triggering user's verified email`,
                                  description: `Opt-in to disclose the human actor email in outbound OIDC assertions`,
                                }),
                                control: (e) =>
                                  (0, W.jsx)(te, {
                                    ...e,
                                    checked: y.include_actor_email,
                                    onChange: (e) => b({ ...y, include_actor_email: e }),
                                  }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                s == null
                  ? null
                  : (0, W.jsxs)(`details`, {
                      children: [
                        (0, W.jsx)(`summary`, {
                          className: `cursor-interaction text-sm text-secondary select-none`,
                          children: (0, W.jsx)(a, {
                            id: `restricted.environmentSetup.oic.savedTrustDisclosure`,
                            defaultMessage: `Saved federation settings`,
                            description: `Expands the saved trust settings separately from unsaved connection edits`,
                          }),
                        }),
                        (0, W.jsx)(x, { children: (0, W.jsx)(he, { connection: s }) }),
                      ],
                    }),
              ],
            })
          : (0, W.jsx)(he, { connection: k })),
      (n[37] = E),
      (n[38] = s),
      (n[39] = I),
      (n[40] = y),
      (n[41] = f),
      (n[42] = k),
      (n[43] = D),
      (n[44] = C),
      (n[45] = q))
    : (q = n[45]);
  let J;
  n[46] === I
    ? (J = n[47])
    : ((J = I
        ? (0, W.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-danger select-none`,
            children: (0, W.jsx)(a, {
              id: `restricted.environmentSetup.oic.createUnconfirmed`,
              defaultMessage: `Couldn't confirm whether this connection was created. Close this dialog and check the available connections before creating another`,
              description: `Recovery after an unconfirmed create; the connection may have been saved, so the user must inspect the refreshed catalog before creating again`,
            }),
          })
        : null),
      (n[46] = I),
      (n[47] = J));
  let Y;
  n[48] !== I || n[49] !== A
    ? ((Y = !I && A != null ? (0, W.jsx)(me, { error: A }) : null), (n[48] = I), (n[49] = A), (n[50] = Y))
    : (Y = n[50]);
  let X;
  n[51] !== q || n[52] !== J || n[53] !== Y
    ? ((X = (0, W.jsx)(x, {
        spacing: `large`,
        children: (0, W.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-4`, children: [q, J, Y] }),
      })),
      (n[51] = q),
      (n[52] = J),
      (n[53] = Y),
      (n[54] = X))
    : (X = n[54]);
  let Z;
  n[55] !== I || n[56] !== c || n[57] !== k || n[58] !== D || n[59] !== F
    ? ((Z = (0, W.jsx)(x, {
        spacing: `large`,
        children: (0, W.jsx)(ae, {
          expandSingleButton: !1,
          children:
            k == null
              ? (0, W.jsxs)(W.Fragment, {
                  children: [
                    (0, W.jsx)(t, {
                      type: `button`,
                      color: `secondary`,
                      size: `dialog`,
                      disabled: D,
                      onClick: c,
                      children: I
                        ? (0, W.jsx)(a, {
                            id: `restricted.environmentSetup.oic.closeUnconfirmed`,
                            defaultMessage: `Close`,
                            description: `Closes the editor without claiming that an unconfirmed connection creation was canceled`,
                          })
                        : (0, W.jsx)(a, {
                            id: `restricted.environmentSetup.oic.cancel`,
                            defaultMessage: `Cancel`,
                            description: `Cancels unsaved connection form edits`,
                          }),
                    }),
                    (0, W.jsx)(t, {
                      type: `submit`,
                      size: `dialog`,
                      disabled: D || I,
                      children: D
                        ? (0, W.jsx)(a, {
                            id: `restricted.environmentSetup.oic.saving`,
                            defaultMessage: `Saving…`,
                            description: `Connection save in progress`,
                          })
                        : F,
                    }),
                  ],
                })
              : (0, W.jsx)(t, {
                  type: `button`,
                  size: `dialog`,
                  onClick: c,
                  children: (0, W.jsx)(a, {
                    id: `restricted.environmentSetup.oic.done`,
                    defaultMessage: `Done`,
                    description: `Closes the saved connection settings`,
                  }),
                }),
        }),
      })),
      (n[55] = I),
      (n[56] = c),
      (n[57] = k),
      (n[58] = D),
      (n[59] = F),
      (n[60] = Z))
    : (Z = n[60]);
  let Q;
  n[61] !== V || n[62] !== H || n[63] !== K || n[64] !== X || n[65] !== Z
    ? ((Q = (0, W.jsxs)(re, { as: `form`, size: `viewport`, onSubmit: V, children: [H, K, X, Z] })),
      (n[61] = V),
      (n[62] = H),
      (n[63] = K),
      (n[64] = X),
      (n[65] = Z),
      (n[66] = Q))
    : (Q = n[66]);
  let $;
  return (
    n[67] !== o || n[68] !== Q || n[69] !== B
      ? (($ = (0, W.jsx)(ne, { open: o, onOpenChange: B, children: Q })),
        (n[67] = o),
        (n[68] = Q),
        (n[69] = B),
        (n[70] = $))
      : ($ = n[70]),
    $
  );
}
var _e, U, W;
function G() {
  return (G = e(() => {
    ((_e = T()),
      m(),
      s(),
      f(),
      pe(),
      (U = D()),
      b(),
      C(),
      w(),
      _(),
      u(),
      k(),
      O(),
      c(),
      y(),
      o(),
      A(),
      F(),
      V(),
      (W = E()));
  }))();
}
G();
export { H as OutboundIdentityConnectionDialog };
//# sourceMappingURL=dialog-3ab34542634b.js.map
