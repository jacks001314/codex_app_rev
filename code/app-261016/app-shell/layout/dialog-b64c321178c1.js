import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $c as n,
  Cc as r,
  DB as i,
  Dc as a,
  FBt as o,
  HO as s,
  IO as c,
  JO as l,
  Jx as u,
  KO as d,
  LNt as f,
  LO as p,
  NO as m,
  OB as h,
  Oc as g,
  PBt as _,
  PO as v,
  RO as ee,
  WO as te,
  XOt as y,
  Y3 as ne,
  Yx as b,
  Z3 as x,
  aw as S,
  el as C,
  ew as w,
  lk as re,
  okt as ie,
  qO as ae,
  sw as oe,
  tkt as T,
  uk as se,
  uw as E,
  wc as ce,
  zO as D,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as O,
  F1 as k,
  P1 as le,
  QLn as ue,
  Qd as de,
  ZLn as fe,
  Zd as pe,
} from "./app-initial-ad16eaadf81f.js";
import { n as A, t as me } from "./error-13f3381c14b1.js";
function he(e) {
  let n = (0, M.c)(35),
    { connection: r } = e,
    i;
  n[0] === r.provider_kind
    ? (i = n[1])
    : ((i =
        r.provider_kind === `azure`
          ? (0, P.jsx)(T, {
              id: `restricted.environmentSetup.oic.azureTrustHelp`,
              defaultMessage: `Add a federated credential to your Entra app registration with this issuer, audience, and subject`,
              description: `Azure-specific federation setup after saving a connection`,
            })
          : null),
      (n[0] = r.provider_kind),
      (n[1] = i));
  let a;
  n[2] === r.provider_kind
    ? (a = n[3])
    : ((a =
        r.provider_kind === `aws`
          ? (0, P.jsx)(T, {
              id: `restricted.environmentSetup.oic.awsTrustHelp`,
              defaultMessage: `Add this OIDC provider in IAM, then restrict the role’s trust policy to this audience and subject`,
              description: `AWS-specific federation setup after saving a connection`,
            })
          : null),
      (n[2] = r.provider_kind),
      (n[3] = a));
  let o;
  n[4] === r.provider_kind
    ? (o = n[5])
    : ((o =
        r.provider_kind === `gcp`
          ? (0, P.jsx)(T, {
              id: `restricted.environmentSetup.oic.gcpTrustHelp`,
              defaultMessage: `Set these values on your workload identity provider and grant the matching identity access to the service account`,
              description: `Google Cloud federation setup after saving a connection`,
            })
          : null),
      (n[4] = r.provider_kind),
      (n[5] = o));
  let s;
  n[6] !== i || n[7] !== a || n[8] !== o
    ? ((s = (0, P.jsxs)(`p`, { className: `text-sm text-secondary select-none`, children: [i, a, o] })),
      (n[6] = i),
      (n[7] = a),
      (n[8] = o),
      (n[9] = s))
    : (s = n[9]);
  let c;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, P.jsx)(T, {
        id: `restricted.environmentSetup.oic.connectionId`,
        defaultMessage: `Connection ID`,
        description: `Saved OpenAI outbound identity connection identifier`,
      })),
      (n[10] = c))
    : (c = n[10]);
  let l;
  n[11] === r.connection_id
    ? (l = n[12])
    : ((l = (0, P.jsx)(j, { label: c, value: r.connection_id })), (n[11] = r.connection_id), (n[12] = l));
  let u;
  n[13] === r.issuer
    ? (u = n[14])
    : ((u =
        r.issuer == null
          ? null
          : (0, P.jsx)(j, {
              label: (0, P.jsx)(T, {
                id: `restricted.environmentSetup.oic.issuer`,
                defaultMessage: `Issuer`,
                description: `OpenAI OIDC issuer to trust in the cloud provider`,
              }),
              value: r.issuer,
            })),
      (n[13] = r.issuer),
      (n[14] = u));
  let d;
  n[15] === r.audience
    ? (d = n[16])
    : ((d =
        r.audience == null
          ? null
          : (0, P.jsx)(j, {
              label: (0, P.jsx)(T, {
                id: `restricted.environmentSetup.oic.audience`,
                defaultMessage: `Audience`,
                description: `Server-provided audience for this provider’s federated identity`,
              }),
              value: r.audience,
            })),
      (n[15] = r.audience),
      (n[16] = d));
  let f;
  n[17] === r.subject
    ? (f = n[18])
    : ((f =
        r.subject == null
          ? null
          : (0, P.jsx)(j, {
              label: (0, P.jsx)(T, {
                id: `restricted.environmentSetup.oic.subject`,
                defaultMessage: `Subject`,
                description: `Actual saved subject to match in the provider trust policy`,
              }),
              value: r.subject,
            })),
      (n[17] = r.subject),
      (n[18] = f));
  let p;
  n[19] !== l || n[20] !== u || n[21] !== d || n[22] !== f
    ? ((p = (0, P.jsxs)(t, { children: [l, u, d, f] })),
      (n[19] = l),
      (n[20] = u),
      (n[21] = d),
      (n[22] = f),
      (n[23] = p))
    : (p = n[23]);
  let m;
  n[24] !== r.audience || n[25] !== r.issuer
    ? ((m =
        r.issuer == null || r.audience == null
          ? (0, P.jsx)(`p`, {
              role: `status`,
              className: `text-sm text-secondary select-none`,
              children: (0, P.jsx)(T, {
                id: `restricted.environmentSetup.oic.trustUnavailable`,
                defaultMessage: `The connection is saved, but its issuer or audience is not available yet. Reopen it later to load the federation details`,
                description: `Confirms a successful save when the backend omits trust metadata, without inventing values or asking the user to create again`,
              }),
            })
          : null),
      (n[24] = r.audience),
      (n[25] = r.issuer),
      (n[26] = m))
    : (m = n[26]);
  let h;
  n[27] === r.subject
    ? (h = n[28])
    : ((h =
        r.subject == null
          ? (0, P.jsx)(`p`, {
              className: `text-sm text-secondary select-none`,
              children: (0, P.jsx)(T, {
                id: `restricted.environmentSetup.oic.runtimeSubject`,
                defaultMessage: `This subject depends on the user or environment at runtime. Configure your provider for the resolved subject; this template has no fixed subject to copy`,
                description: `Avoids inventing a subject for a template requiring verified runtime context`,
              }),
            })
          : null),
      (n[27] = r.subject),
      (n[28] = h));
  let g;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, P.jsx)(`p`, {
        className: `text-xs text-secondary select-none`,
        children: (0, P.jsx)(T, {
          id: `restricted.environmentSetup.oic.savedAttachmentHelp`,
          defaultMessage: `Environment access starts after its attachment is saved and approved`,
          description: `Connection creation alone does not grant environment access`,
        }),
      })),
      (n[29] = g))
    : (g = n[29]);
  let _;
  return (
    n[30] !== p || n[31] !== m || n[32] !== h || n[33] !== s
      ? ((_ = (0, P.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-3`, children: [s, p, m, h, g] })),
        (n[30] = p),
        (n[31] = m),
        (n[32] = h),
        (n[33] = s),
        (n[34] = _))
      : (_ = n[34]),
    _
  );
}
function j(e) {
  let t = (0, M.c)(20),
    { label: n, value: r } = e,
    i = (0, N.useId)(),
    a = ie(),
    o;
  t[0] !== n || t[1] !== i
    ? ((o = (0, P.jsx)(`span`, { id: i, children: n })), (t[0] = n), (t[1] = i), (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === r
    ? (s = t[4])
    : ((s = (0, P.jsx)(`code`, {
        className: `min-w-0 flex-1 text-xs break-all whitespace-pre-wrap`,
        children: r,
      })),
      (t[3] = r),
      (t[4] = s));
  let c;
  t[5] !== a || t[6] !== r
    ? ((c = a.formatMessage(
        {
          id: `restricted.environmentSetup.oic.copyValue`,
          defaultMessage: `Copy {value}`,
          description: `Copy a non-secret connection identifier or trust value`,
        },
        { value: r },
      )),
      (t[5] = a),
      (t[6] = r),
      (t[7] = c))
    : (c = t[7]);
  let l;
  t[8] === r ? (l = t[9]) : ((l = (e) => m(r, e)), (t[8] = r), (t[9] = l));
  let d;
  t[10] !== c || t[11] !== l
    ? ((d = (0, P.jsx)(u, { variant: `codeBlock`, iconOnly: !0, ariaLabel: c, onCopy: l })),
      (t[10] = c),
      (t[11] = l),
      (t[12] = d))
    : (d = t[12]);
  let f;
  t[13] !== i || t[14] !== s || t[15] !== d
    ? ((f = (0, P.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2`,
        role: `group`,
        "aria-labelledby": i,
        children: [s, d],
      })),
      (t[13] = i),
      (t[14] = s),
      (t[15] = d),
      (t[16] = f))
    : (f = t[16]);
  let p;
  return (
    t[17] !== o || t[18] !== f
      ? ((p = (0, P.jsx)(S, { label: o, children: f })), (t[17] = o), (t[18] = f), (t[19] = p))
      : (p = t[19]),
    p
  );
}
var M, N, P;
function F() {
  return (F = e(() => {
    ((M = _()), (N = o()), y(), b(), E(), w(), v(), (P = f()));
  }))();
}
function ge(e) {
  let n = (0, z.c)(42),
    { target: r, onChange: i, readOnly: a } = e,
    o,
    s,
    c;
  if (n[0] !== i || n[1] !== a || n[2] !== r) {
    let e;
    bb0: switch (r.provider_kind) {
      case `azure`: {
        let t;
        (n[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, B.jsx)(T, {
              id: `restricted.environmentSetup.oic.azureHelp`,
              defaultMessage: `Use IDs from your Entra app registration, not a client secret. Access comes from the app’s service principal`,
              description: `Explains Azure configuration and application-level permissions`,
            })),
            (n[6] = t))
          : (t = n[6]),
          (o = t));
        let a;
        n[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((a = (0, B.jsx)(T, {
              id: `restricted.environmentSetup.oic.tenantId`,
              defaultMessage: `Directory (tenant) ID`,
              description: `Azure directory tenant identifier`,
            })),
            (n[7] = a))
          : (a = n[7]);
        let s;
        n[8] !== i || n[9] !== r
          ? ((s = (e) => i({ ...r, tenant_id: e })), (n[8] = i), (n[9] = r), (n[10] = s))
          : (s = n[10]);
        let c;
        n[11] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((c = (0, B.jsx)(T, {
              id: `restricted.environmentSetup.oic.clientId`,
              defaultMessage: `Application (client) ID`,
              description: `Azure application client identifier, not an object ID or secret`,
            })),
            (n[11] = c))
          : (c = n[11]);
        let l;
        (n[12] !== i || n[13] !== r
          ? ((l = (e) => i({ ...r, client_id: e })), (n[12] = i), (n[13] = r), (n[14] = l))
          : (l = n[14]),
          (e = [
            {
              label: a,
              value: r.tenant_id,
              placeholder: `11111111-1111-4111-8111-111111111111`,
              onChange: s,
            },
            {
              label: c,
              value: r.client_id,
              placeholder: `22222222-2222-4222-8222-222222222222`,
              onChange: l,
            },
          ]));
        break bb0;
      }
      case `aws`: {
        let t;
        (n[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, B.jsx)(T, {
              id: `restricted.environmentSetup.oic.awsHelp`,
              defaultMessage: `Use the role’s ARN, not an access key. Its IAM policies determine access`,
              description: `Explains secretless AWS role-based access`,
            })),
            (n[15] = t))
          : (t = n[15]),
          (o = t));
        let a;
        n[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((a = (0, B.jsx)(T, {
              id: `restricted.environmentSetup.oic.awsRoleArn`,
              defaultMessage: `IAM role ARN`,
              description: `Amazon Resource Name of the AWS IAM role the connection will assume`,
            })),
            (n[16] = a))
          : (a = n[16]);
        let s;
        n[17] !== i || n[18] !== r
          ? ((s = (e) => i({ ...r, role_arn: e })), (n[17] = i), (n[18] = r), (n[19] = s))
          : (s = n[19]);
        let c;
        n[20] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((c = (0, B.jsx)(T, {
              id: `restricted.environmentSetup.oic.awsRegion`,
              defaultMessage: `AWS region`,
              description: `AWS region used by the identity connection`,
            })),
            (n[20] = c))
          : (c = n[20]);
        let l;
        (n[21] !== i || n[22] !== r
          ? ((l = (e) => i({ ...r, region: e })), (n[21] = i), (n[22] = r), (n[23] = l))
          : (l = n[23]),
          (e = [
            {
              label: a,
              value: r.role_arn,
              placeholder: `arn:aws:iam::123456789012:role/codex-readers`,
              onChange: s,
            },
            { label: c, value: r.region, placeholder: `us-east-1`, onChange: l },
          ]));
        break bb0;
      }
      case `gcp`: {
        let t;
        (n[24] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, B.jsx)(T, {
              id: `restricted.environmentSetup.oic.gcpHelp`,
              defaultMessage: `Use a workload identity pool provider and service account, not a JSON key`,
              description: `Explains secretless Google Cloud configuration`,
            })),
            (n[24] = t))
          : (t = n[24]),
          (o = t));
        let a;
        n[25] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((a = (0, B.jsx)(T, {
              id: `restricted.environmentSetup.oic.gcpProvider`,
              defaultMessage: `Workload identity provider`,
              description: `Full Google Cloud workload identity pool provider resource path`,
            })),
            (n[25] = a))
          : (a = n[25]);
        let s;
        n[26] !== i || n[27] !== r
          ? ((s = (e) => i({ ...r, workload_identity_provider: e })), (n[26] = i), (n[27] = r), (n[28] = s))
          : (s = n[28]);
        let c;
        n[29] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((c = (0, B.jsx)(T, {
              id: `restricted.environmentSetup.oic.gcpServiceAccount`,
              defaultMessage: `Service account email`,
              description: `Google Cloud service account identity the connection will use, not the employee’s email`,
            })),
            (n[29] = c))
          : (c = n[29]);
        let l;
        (n[30] !== i || n[31] !== r
          ? ((l = (e) => i({ ...r, service_account_email: e })), (n[30] = i), (n[31] = r), (n[32] = l))
          : (l = n[32]),
          (e = [
            {
              label: a,
              value: r.workload_identity_provider,
              placeholder: `projects/123456789/locations/global/workloadIdentityPools/codex/providers/openai`,
              onChange: s,
            },
            {
              label: c,
              value: r.service_account_email,
              placeholder: `codex-readers@my-project.iam.gserviceaccount.com`,
              onChange: l,
            },
          ]));
      }
    }
    ((s = `flex min-w-0 flex-col gap-3`),
      (c = a ? (0, B.jsx)(t, { children: e.map(L) }) : e.map(I)),
      (n[0] = i),
      (n[1] = a),
      (n[2] = r),
      (n[3] = s),
      (n[4] = c),
      (n[5] = o));
  } else ((s = n[3]), (c = n[4]), (o = n[5]));
  let l;
  n[33] !== o || n[34] !== a
    ? ((l = a
        ? (0, B.jsx)(T, {
            id: `restricted.environmentSetup.oic.immutableTarget`,
            defaultMessage: `The provider and target are fixed for this connection`,
            description: `Explains why an existing cloud identity target is displayed read-only`,
          })
        : o),
      (n[33] = o),
      (n[34] = a),
      (n[35] = l))
    : (l = n[35]);
  let u;
  n[36] === l
    ? (u = n[37])
    : ((u = (0, B.jsx)(`p`, { className: `text-xs text-secondary select-none`, children: l })),
      (n[36] = l),
      (n[37] = u));
  let d;
  return (
    n[38] !== s || n[39] !== c || n[40] !== u
      ? ((d = (0, B.jsxs)(`div`, { className: s, children: [c, u] })),
        (n[38] = s),
        (n[39] = c),
        (n[40] = u),
        (n[41] = d))
      : (d = n[41]),
    d
  );
}
function I(e) {
  return (0, B.jsx)(
    R,
    {
      label: e.label,
      children: (0, B.jsx)(fe, {
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
    ((z = _()), y(), O(), w(), F(), (B = f()));
  }))();
}
function H(e) {
  let r = (0, _e.c)(71),
    { isOpen: o, connection: s, onClose: l, onSubmit: u } = e,
    f = ie(),
    m = s?.display_name ?? ``,
    h = s?.subject_template ?? `oai:v1:oic:{connection_id}`,
    g = s?.include_actor_email ?? !1,
    _;
  r[0] !== m || r[1] !== h || r[2] !== g
    ? ((_ = { display_name: m, subject_template: h, include_actor_email: g }),
      (r[0] = m),
      (r[1] = h),
      (r[2] = g),
      (r[3] = _))
    : (_ = r[3]);
  let [v, y] = (0, U.useState)(_),
    b;
  r[4] === s
    ? (b = r[5])
    : ((b = s?.target ?? {
        provider_kind: `azure`,
        tenant_id: s?.provider_kind === `azure` ? s.azure_tenant_id : ``,
        client_id: s?.provider_kind === `azure` ? s.azure_client_id : ``,
      }),
      (r[4] = s),
      (r[5] = b));
  let [x, S] = (0, U.useState)(b),
    C;
  r[6] === s?.additional_claims
    ? (C = r[7])
    : ((C = JSON.stringify(s?.additional_claims ?? {}, null, 2)), (r[6] = s?.additional_claims), (r[7] = C));
  let [w, se] = (0, U.useState)(C),
    [E, O] = (0, U.useState)(!1),
    [k, de] = (0, U.useState)(null),
    [A, j] = (0, U.useState)(null),
    M,
    N;
  if (k != null) {
    let e;
    (r[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, W.jsx)(T, {
          id: `restricted.environmentSetup.oic.savedTitle`,
          defaultMessage: `Connection saved`,
          description: `Heading after an outbound identity connection has been saved`,
        })),
        (r[8] = e))
      : (e = r[8]),
      (M = e));
    let t;
    (r[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, W.jsx)(T, {
          id: `restricted.environmentSetup.oic.savedSubtitle`,
          defaultMessage: `Finish setup in your cloud provider using these trust settings`,
          description: `The connection is persisted but cloud-side federation still needs configuration`,
        })),
        (r[9] = t))
      : (t = r[9]),
      (N = t));
  } else if (s == null) {
    let e;
    (r[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, W.jsx)(T, {
          id: `restricted.environmentSetup.oic.newTitle`,
          defaultMessage: `New identity connection`,
          description: `Title when creating an outbound identity connection`,
        })),
        (r[10] = e))
      : (e = r[10]),
      (M = e));
    let t;
    (r[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, W.jsx)(T, {
          id: `restricted.environmentSetup.oic.newSubtitle`,
          defaultMessage: `Let this environment access your cloud resources without storing secrets`,
          description: `Short explanation of outbound workload identity`,
        })),
        (r[11] = t))
      : (t = r[11]),
      (N = t));
  } else {
    let e;
    (r[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, W.jsx)(T, {
          id: `restricted.environmentSetup.oic.editTitle`,
          defaultMessage: `Edit identity connection`,
          description: `Title when editing an existing outbound identity connection`,
        })),
        (r[12] = e))
      : (e = r[12]),
      (M = e));
    let t;
    (r[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, W.jsx)(T, {
          id: `restricted.environmentSetup.oic.editSubtitle`,
          defaultMessage: `Changes apply to every environment using this connection`,
          description: `Warns that editing the shared connection affects its other attachments`,
        })),
        (r[13] = t))
      : (t = r[13]),
      (N = t));
  }
  let P;
  r[14] === s
    ? (P = r[15])
    : ((P =
        s == null
          ? (0, W.jsx)(T, {
              id: `restricted.environmentSetup.oic.create`,
              defaultMessage: `Create connection`,
              description: `Persists a real outbound identity connection`,
            })
          : (0, W.jsx)(T, {
              id: `restricted.environmentSetup.oic.save`,
              defaultMessage: `Save connection`,
              description: `Saves edits to a real shared outbound identity connection`,
            })),
      (r[14] = s),
      (r[15] = P));
  let F = P,
    I =
      s == null &&
      A != null &&
      (A.error === `unavailable` ||
        A.error === `invalid-response` ||
        A.error === `authentication` ||
        (A.error === `http` && (A.status == null || A.status === 408 || A.status >= 500))),
    L;
  r[16] !== w ||
  r[17] !== I ||
  r[18] !== v ||
  r[19] !== o ||
  r[20] !== u ||
  r[21] !== k ||
  r[22] !== E ||
  r[23] !== x
    ? ((L = async () => {
        if (!o || E || k != null || I) return;
        let e;
        try {
          e = le.parse({
            ...v,
            additional_claims: JSON.parse(w),
            ...(x.provider_kind === `azure`
              ? { azure_tenant_id: x.tenant_id, azure_client_id: x.client_id }
              : { target: x }),
          });
        } catch {
          j({ ok: !1, error: `invalid-request` });
          return;
        }
        (j(null), O(!0));
        try {
          let t = await u(e);
          t.ok
            ? t.data.provider_kind === x.provider_kind
              ? de(t.data)
              : j({ ok: !1, error: `invalid-response` })
            : j(t);
        } catch {
          j({ ok: !1, error: `unavailable` });
        }
        O(!1);
      }),
      (r[16] = w),
      (r[17] = I),
      (r[18] = v),
      (r[19] = o),
      (r[20] = u),
      (r[21] = k),
      (r[22] = E),
      (r[23] = x),
      (r[24] = L))
    : (L = r[24]);
  let z = L,
    B;
  r[25] !== l || r[26] !== E
    ? ((B = (e) => {
        !e && !E && l();
      }),
      (r[25] = l),
      (r[26] = E),
      (r[27] = B))
    : (B = r[27]);
  let V;
  r[28] === z
    ? (V = r[29])
    : ((V = (e) => {
        (e.preventDefault(), e.stopPropagation(), z());
      }),
      (r[28] = z),
      (r[29] = V));
  let H;
  r[30] === M
    ? (H = r[31])
    : ((H = (0, W.jsx)(ae, { className: `sr-only`, children: M })), (r[30] = M), (r[31] = H));
  let G;
  r[32] === N ? (G = r[33]) : ((G = (0, W.jsx)(d, { children: N })), (r[32] = N), (r[33] = G));
  let K;
  r[34] !== G || r[35] !== M
    ? ((K = (0, W.jsx)(D, { children: (0, W.jsx)(ee, { title: M, subtitleSize: `sm`, subtitle: G }) })),
      (r[34] = G),
      (r[35] = M),
      (r[36] = K))
    : (K = r[36]);
  let q;
  r[37] !== w ||
  r[38] !== s ||
  r[39] !== I ||
  r[40] !== v ||
  r[41] !== f ||
  r[42] !== k ||
  r[43] !== E ||
  r[44] !== x
    ? ((q =
        k == null
          ? (0, W.jsxs)(W.Fragment, {
              children: [
                (0, W.jsxs)(`fieldset`, {
                  disabled: E || I,
                  className: `flex min-w-0 flex-col gap-4`,
                  children: [
                    s == null
                      ? (0, W.jsx)(pe, {
                          fullWidth: !0,
                          size: `dialog`,
                          ariaLabel: f.formatMessage({
                            id: `restricted.environmentSetup.oic.provider`,
                            defaultMessage: `Cloud provider`,
                            description: `Select the cloud provider preset for a connection`,
                          }),
                          selectedId: x.provider_kind,
                          options: [
                            {
                              id: `azure`,
                              label: (0, W.jsxs)(W.Fragment, {
                                children: [
                                  (0, W.jsx)(i, { asset: ce }),
                                  (0, W.jsx)(T, {
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
                                  (0, W.jsx)(i, { asset: n }),
                                  (0, W.jsx)(T, {
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
                                  (0, W.jsx)(i, { asset: a }),
                                  (0, W.jsx)(T, {
                                    id: `restricted.environmentSetup.oic.gcpPreset`,
                                    defaultMessage: `Google Cloud`,
                                    description: `Google Cloud provider preset`,
                                  }),
                                ],
                              }),
                            },
                          ],
                          onSelect: (e) => {
                            if (e !== x.provider_kind) {
                              j(null);
                              bb203: switch (e) {
                                case `azure`:
                                  S({ provider_kind: `azure`, tenant_id: ``, client_id: `` });
                                  break bb203;
                                case `aws`:
                                  S({ provider_kind: `aws`, role_arn: ``, region: `us-east-1` });
                                  break bb203;
                                case `gcp`:
                                  S({
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
                      label: (0, W.jsx)(T, {
                        id: `restricted.environmentSetup.oic.name`,
                        defaultMessage: `Connection name`,
                        description: `Human-readable name for an outbound identity connection`,
                      }),
                      children: (0, W.jsx)(fe, {
                        autoFocus: !0,
                        autoComplete: `off`,
                        required: !0,
                        maxLength: 200,
                        value: v.display_name,
                        placeholder: f.formatMessage({
                          id: `restricted.environmentSetup.oic.namePlaceholder`,
                          defaultMessage: `e.g. Analytics read-only`,
                          description: `Example name for a shared outbound identity connection`,
                        }),
                        onChange: (e) => y({ ...v, display_name: e.target.value }),
                      }),
                    }),
                    (0, W.jsx)(ge, { target: x, onChange: S, readOnly: s != null }),
                    (0, W.jsxs)(`details`, {
                      children: [
                        (0, W.jsx)(`summary`, {
                          className: `cursor-interaction text-sm text-secondary select-none`,
                          children: (0, W.jsx)(T, {
                            id: `restricted.environmentSetup.oic.subjectAndClaims`,
                            defaultMessage: `Subject and token claims`,
                            description: `Disclosure for customizing the signed OIDC subject and additional claims`,
                          }),
                        }),
                        (0, W.jsxs)(`div`, {
                          className: `flex min-w-0 flex-col gap-3`,
                          children: [
                            (0, W.jsx)(R, {
                              label: (0, W.jsx)(T, {
                                id: `restricted.environmentSetup.oic.subjectTemplate`,
                                defaultMessage: `Subject template`,
                                description: `Template for the outgoing OIDC token subject`,
                              }),
                              children: (0, W.jsx)(fe, {
                                autoComplete: `off`,
                                required: !0,
                                value: v.subject_template,
                                onChange: (e) => y({ ...v, subject_template: e.target.value }),
                              }),
                            }),
                            (0, W.jsx)(`p`, {
                              className: `text-sm text-secondary select-none`,
                              children: (0, W.jsx)(T, {
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
                              label: (0, W.jsx)(T, {
                                id: `restricted.environmentSetup.oic.additionalClaims`,
                                defaultMessage: `Additional claims (JSON)`,
                                description: `Editor for extra signed claims whose values are strings or templates`,
                              }),
                              children: (0, W.jsx)(ue, {
                                autoComplete: `off`,
                                rows: 4,
                                value: w,
                                onChange: (e) => se(e.target.value),
                              }),
                            }),
                            (0, W.jsx)(t, {
                              children: (0, W.jsx)(oe, {
                                size: `compact`,
                                label: (0, W.jsx)(T, {
                                  id: `restricted.environmentSetup.oic.includeEmail`,
                                  defaultMessage: `Include the triggering user's verified email`,
                                  description: `Opt-in to disclose the human actor email in outbound OIDC assertions`,
                                }),
                                control: (e) =>
                                  (0, W.jsx)(re, {
                                    ...e,
                                    checked: v.include_actor_email,
                                    onChange: (e) => y({ ...v, include_actor_email: e }),
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
                          children: (0, W.jsx)(T, {
                            id: `restricted.environmentSetup.oic.savedTrustDisclosure`,
                            defaultMessage: `Saved federation settings`,
                            description: `Expands the saved trust settings separately from unsaved connection edits`,
                          }),
                        }),
                        (0, W.jsx)(D, { children: (0, W.jsx)(he, { connection: s }) }),
                      ],
                    }),
              ],
            })
          : (0, W.jsx)(he, { connection: k })),
      (r[37] = w),
      (r[38] = s),
      (r[39] = I),
      (r[40] = v),
      (r[41] = f),
      (r[42] = k),
      (r[43] = E),
      (r[44] = x),
      (r[45] = q))
    : (q = r[45]);
  let J;
  r[46] === I
    ? (J = r[47])
    : ((J = I
        ? (0, W.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-danger select-none`,
            children: (0, W.jsx)(T, {
              id: `restricted.environmentSetup.oic.createUnconfirmed`,
              defaultMessage: `Couldn't confirm whether this connection was created. Close this dialog and check the available connections before creating another`,
              description: `Recovery after an unconfirmed create; the connection may have been saved, so the user must inspect the refreshed catalog before creating again`,
            }),
          })
        : null),
      (r[46] = I),
      (r[47] = J));
  let Y;
  r[48] !== I || r[49] !== A
    ? ((Y = !I && A != null ? (0, W.jsx)(me, { error: A }) : null), (r[48] = I), (r[49] = A), (r[50] = Y))
    : (Y = r[50]);
  let X;
  r[51] !== q || r[52] !== J || r[53] !== Y
    ? ((X = (0, W.jsx)(D, {
        spacing: `large`,
        children: (0, W.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-4`, children: [q, J, Y] }),
      })),
      (r[51] = q),
      (r[52] = J),
      (r[53] = Y),
      (r[54] = X))
    : (X = r[54]);
  let Z;
  r[55] !== I || r[56] !== l || r[57] !== k || r[58] !== E || r[59] !== F
    ? ((Z = (0, W.jsx)(D, {
        spacing: `large`,
        children: (0, W.jsx)(p, {
          expandSingleButton: !1,
          children:
            k == null
              ? (0, W.jsxs)(W.Fragment, {
                  children: [
                    (0, W.jsx)(ne, {
                      type: `button`,
                      color: `secondary`,
                      size: `dialog`,
                      disabled: E,
                      onClick: l,
                      children: I
                        ? (0, W.jsx)(T, {
                            id: `restricted.environmentSetup.oic.closeUnconfirmed`,
                            defaultMessage: `Close`,
                            description: `Closes the editor without claiming that an unconfirmed connection creation was canceled`,
                          })
                        : (0, W.jsx)(T, {
                            id: `restricted.environmentSetup.oic.cancel`,
                            defaultMessage: `Cancel`,
                            description: `Cancels unsaved connection form edits`,
                          }),
                    }),
                    (0, W.jsx)(ne, {
                      type: `submit`,
                      size: `dialog`,
                      disabled: E || I,
                      children: E
                        ? (0, W.jsx)(T, {
                            id: `restricted.environmentSetup.oic.saving`,
                            defaultMessage: `Saving…`,
                            description: `Connection save in progress`,
                          })
                        : F,
                    }),
                  ],
                })
              : (0, W.jsx)(ne, {
                  type: `button`,
                  size: `dialog`,
                  onClick: l,
                  children: (0, W.jsx)(T, {
                    id: `restricted.environmentSetup.oic.done`,
                    defaultMessage: `Done`,
                    description: `Closes the saved connection settings`,
                  }),
                }),
        }),
      })),
      (r[55] = I),
      (r[56] = l),
      (r[57] = k),
      (r[58] = E),
      (r[59] = F),
      (r[60] = Z))
    : (Z = r[60]);
  let Q;
  r[61] !== V || r[62] !== H || r[63] !== K || r[64] !== X || r[65] !== Z
    ? ((Q = (0, W.jsxs)(c, { as: `form`, size: `viewport`, onSubmit: V, children: [H, K, X, Z] })),
      (r[61] = V),
      (r[62] = H),
      (r[63] = K),
      (r[64] = X),
      (r[65] = Z),
      (r[66] = Q))
    : (Q = r[66]);
  let $;
  return (
    r[67] !== o || r[68] !== Q || r[69] !== B
      ? (($ = (0, W.jsx)(te, { open: o, onOpenChange: B, children: Q })),
        (r[67] = o),
        (r[68] = Q),
        (r[69] = B),
        (r[70] = $))
      : ($ = r[70]),
    $
  );
}
var _e, U, W;
function G() {
  return (G = e(() => {
    ((_e = _()),
      C(),
      g(),
      r(),
      k(),
      (U = o()),
      y(),
      x(),
      l(),
      s(),
      h(),
      de(),
      O(),
      se(),
      E(),
      w(),
      A(),
      F(),
      V(),
      (W = f()));
  }))();
}
G();
export { H as OutboundIdentityConnectionDialog };
//# sourceMappingURL=dialog-b64c321178c1.js.map
