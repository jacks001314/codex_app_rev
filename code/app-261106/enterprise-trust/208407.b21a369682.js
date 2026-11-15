export const __rspack_esm_ids = [208407]
export const __webpack_modules__ = {
  afGK(e, t, i) {
    i.d(t, { OutboundIdentityConnectionDialog: () => I })
    var n = i("ABep"),
      s = i("QosV"),
      o = i("iYyt"),
      r = i("bLM8")
    let a = (0, i("iJY0").a)({
      name: "microsoft-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.708252, y: 2.708252, width: 14.583496, height: 14.583496 },
        visualBounds: { x: 2.708252, y: 2.708252, width: 14.583496, height: 14.583496 },
      },
      paint: {
        kind: "multicolor",
        layers: [
          {
            role: "fixed",
            color: "#F35325",
            bounds: { x: 2.708252, y: 2.708252, width: 6.666748, height: 6.666748 },
            wideGamut: "color(display-p3 0.9529 0.3255 0.1451)",
          },
          {
            role: "fixed",
            color: "#81BC06",
            bounds: { x: 10.625, y: 2.708252, width: 6.666748, height: 6.666748 },
            wideGamut: "color(display-p3 0.5059 0.7373 0.0235)",
          },
          {
            role: "fixed",
            color: "#05A6F0",
            bounds: { x: 2.708252, y: 10.625, width: 6.666748, height: 6.666748 },
            wideGamut: "color(display-p3 0.0196 0.6510 0.9412)",
          },
          {
            role: "fixed",
            color: "#FFBA08",
            bounds: { x: 10.625, y: 10.625, width: 6.666748, height: 6.666748 },
            wideGamut: "color(display-p3 1.0000 0.7294 0.0314)",
          },
        ],
      },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.708252, y: 2.708252, width: 14.583496, height: 14.583496 },
        center: { x: 10, y: 10 },
        insets: { top: 2.708252, right: 2.708252, bottom: 2.708252, left: 2.708252 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 10 } },
      },
      capabilities: ["icon"],
      body: '<path d="M2.7085 2.70825H9.37516V9.37492H2.7085V2.70825Z" fill="#F35325"/> <path d="M10.625 2.70825H17.2917V9.37492H10.625V2.70825Z" fill="#81BC06"/> <path d="M2.7085 10.625H9.37516V17.2917H2.7085V10.625Z" fill="#05A6F0"/> <path d="M10.625 10.625H17.2917V17.2917H10.625V10.625Z" fill="#FFBA08"/>',
    })
    var c = i("mtDM"),
      l = i("zd8w"),
      d = i("Wf1j"),
      u = i("oyxz"),
      p = i("Sm6l"),
      m = i("JNtf"),
      h = i("mUDD"),
      v = i("HOLv"),
      x = i("EShr"),
      f = i("zLIa"),
      g = i("F0xz"),
      j = i("AWNZ"),
      b = i("ZEx5"),
      y = i("R3Dy"),
      _ = i("uuN8"),
      S = i("aepO")
    function A(e) {
      let t,
        i,
        o,
        r,
        a,
        c,
        l,
        d,
        p,
        m,
        h,
        v,
        x,
        f,
        g = (0, s.c)(35),
        { connection: j } = e
      return (
        g[0] !== j.provider_kind
          ? ((t =
              "azure" === j.provider_kind
                ? (0, n.jsx)(u.A, {
                    id: "restricted.environmentSetup.oic.azureTrustHelp",
                    defaultMessage:
                      "Add a federated credential to your Entra app registration with this issuer, audience, and subject",
                    description: "Azure-specific federation setup after saving a connection",
                  })
                : null),
            (g[0] = j.provider_kind),
            (g[1] = t))
          : (t = g[1]),
        g[2] !== j.provider_kind
          ? ((i =
              "aws" === j.provider_kind
                ? (0, n.jsx)(u.A, {
                    id: "restricted.environmentSetup.oic.awsTrustHelp",
                    defaultMessage:
                      "Add this OIDC provider in IAM, then restrict the role’s trust policy to this audience and subject",
                    description: "AWS-specific federation setup after saving a connection",
                  })
                : null),
            (g[2] = j.provider_kind),
            (g[3] = i))
          : (i = g[3]),
        g[4] !== j.provider_kind
          ? ((o =
              "gcp" === j.provider_kind
                ? (0, n.jsx)(u.A, {
                    id: "restricted.environmentSetup.oic.gcpTrustHelp",
                    defaultMessage:
                      "Set these values on your workload identity provider and grant the matching identity access to the service account",
                    description: "Google Cloud federation setup after saving a connection",
                  })
                : null),
            (g[4] = j.provider_kind),
            (g[5] = o))
          : (o = g[5]),
        g[6] !== t || g[7] !== i || g[8] !== o
          ? ((r = (0, n.jsxs)("p", { className: "text-sm text-secondary select-none", children: [t, i, o] })),
            (g[6] = t),
            (g[7] = i),
            (g[8] = o),
            (g[9] = r))
          : (r = g[9]),
        g[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(u.A, {
              id: "restricted.environmentSetup.oic.connectionId",
              defaultMessage: "Connection ID",
              description: "Saved OpenAI outbound identity connection identifier",
            })),
            (g[10] = a))
          : (a = g[10]),
        g[11] !== j.connection_id
          ? ((c = (0, n.jsx)(w, { label: a, value: j.connection_id })), (g[11] = j.connection_id), (g[12] = c))
          : (c = g[12]),
        g[13] !== j.issuer
          ? ((l =
              null == j.issuer
                ? null
                : (0, n.jsx)(w, {
                    label: (0, n.jsx)(u.A, {
                      id: "restricted.environmentSetup.oic.issuer",
                      defaultMessage: "Issuer",
                      description: "OpenAI OIDC issuer to trust in the cloud provider",
                    }),
                    value: j.issuer,
                  })),
            (g[13] = j.issuer),
            (g[14] = l))
          : (l = g[14]),
        g[15] !== j.audience
          ? ((d =
              null == j.audience
                ? null
                : (0, n.jsx)(w, {
                    label: (0, n.jsx)(u.A, {
                      id: "restricted.environmentSetup.oic.audience",
                      defaultMessage: "Audience",
                      description: "Server-provided audience for this provider’s federated identity",
                    }),
                    value: j.audience,
                  })),
            (g[15] = j.audience),
            (g[16] = d))
          : (d = g[16]),
        g[17] !== j.subject
          ? ((p =
              null == j.subject
                ? null
                : (0, n.jsx)(w, {
                    label: (0, n.jsx)(u.A, {
                      id: "restricted.environmentSetup.oic.subject",
                      defaultMessage: "Subject",
                      description: "Actual saved subject to match in the provider trust policy",
                    }),
                    value: j.subject,
                  })),
            (g[17] = j.subject),
            (g[18] = p))
          : (p = g[18]),
        g[19] !== c || g[20] !== l || g[21] !== d || g[22] !== p
          ? ((m = (0, n.jsxs)(b.t, { children: [c, l, d, p] })),
            (g[19] = c),
            (g[20] = l),
            (g[21] = d),
            (g[22] = p),
            (g[23] = m))
          : (m = g[23]),
        g[24] !== j.audience || g[25] !== j.issuer
          ? ((h =
              null == j.issuer || null == j.audience
                ? (0, n.jsx)("p", {
                    role: "status",
                    className: "text-sm text-secondary select-none",
                    children: (0, n.jsx)(u.A, {
                      id: "restricted.environmentSetup.oic.trustUnavailable",
                      defaultMessage:
                        "The connection is saved, but its issuer or audience is not available yet. Reopen it later to load the federation details",
                      description:
                        "Confirms a successful save when the backend omits trust metadata, without inventing values or asking the user to create again",
                    }),
                  })
                : null),
            (g[24] = j.audience),
            (g[25] = j.issuer),
            (g[26] = h))
          : (h = g[26]),
        g[27] !== j.subject
          ? ((v =
              null == j.subject
                ? (0, n.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, n.jsx)(u.A, {
                      id: "restricted.environmentSetup.oic.runtimeSubject",
                      defaultMessage:
                        "This subject depends on the user or environment at runtime. Configure your provider for the resolved subject; this template has no fixed subject to copy",
                      description: "Avoids inventing a subject for a template requiring verified runtime context",
                    }),
                  })
                : null),
            (g[27] = j.subject),
            (g[28] = v))
          : (v = g[28]),
        g[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, n.jsx)("p", {
              className: "text-xs text-secondary select-none",
              children: (0, n.jsx)(u.A, {
                id: "restricted.environmentSetup.oic.savedAttachmentHelp",
                defaultMessage: "Environment access starts after its attachment is saved and approved",
                description: "Connection creation alone does not grant environment access",
              }),
            })),
            (g[29] = x))
          : (x = g[29]),
        g[30] !== m || g[31] !== h || g[32] !== v || g[33] !== r
          ? ((f = (0, n.jsxs)("div", { className: "flex min-w-0 flex-col gap-3", children: [r, m, h, v, x] })),
            (g[30] = m),
            (g[31] = h),
            (g[32] = v),
            (g[33] = r),
            (g[34] = f))
          : (f = g[34]),
        f
      )
    }
    function w(e) {
      let t,
        i,
        o,
        r,
        a,
        c,
        u,
        p = (0, s.c)(20),
        { label: m, value: h } = e,
        v = (0, l.useId)(),
        x = (0, d.A)()
      return (
        p[0] !== m || p[1] !== v
          ? ((t = (0, n.jsx)("span", { id: v, children: m })), (p[0] = m), (p[1] = v), (p[2] = t))
          : (t = p[2]),
        p[3] !== h
          ? ((i = (0, n.jsx)("code", {
              className: "min-w-0 flex-1 text-xs break-all whitespace-pre-wrap",
              children: h,
            })),
            (p[3] = h),
            (p[4] = i))
          : (i = p[4]),
        p[5] !== x || p[6] !== h
          ? ((o = x.formatMessage(
              {
                id: "restricted.environmentSetup.oic.copyValue",
                defaultMessage: "Copy {value}",
                description: "Copy a non-secret connection identifier or trust value",
              },
              { value: h },
            )),
            (p[5] = x),
            (p[6] = h),
            (p[7] = o))
          : (o = p[7]),
        p[8] !== h ? ((r = (e) => (0, S.E)(h, e)), (p[8] = h), (p[9] = r)) : (r = p[9]),
        p[10] !== o || p[11] !== r
          ? ((a = (0, n.jsx)(_.i, { variant: "codeBlock", iconOnly: !0, ariaLabel: o, onCopy: r })),
            (p[10] = o),
            (p[11] = r),
            (p[12] = a))
          : (a = p[12]),
        p[13] !== v || p[14] !== i || p[15] !== a
          ? ((c = (0, n.jsxs)("div", {
              className: "flex min-w-0 items-center gap-2",
              role: "group",
              "aria-labelledby": v,
              children: [i, a],
            })),
            (p[13] = v),
            (p[14] = i),
            (p[15] = a),
            (p[16] = c))
          : (c = p[16]),
        p[17] !== t || p[18] !== c
          ? ((u = (0, n.jsx)(j.$5, { label: t, children: c })), (p[17] = t), (p[18] = c), (p[19] = u))
          : (u = p[19]),
        u
      )
    }
    function M(e) {
      let t,
        i,
        o,
        r,
        a,
        c,
        l = (0, s.c)(42),
        { target: d, onChange: p, readOnly: m } = e
      if (l[0] !== p || l[1] !== m || l[2] !== d) {
        let e
        switch (d.provider_kind) {
          case "azure": {
            let i, s, o, r, a
            ;(l[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, n.jsx)(u.A, {
                  id: "restricted.environmentSetup.oic.azureHelp",
                  defaultMessage:
                    "Use IDs from your Entra app registration, not a client secret. Access comes from the app’s service principal",
                  description: "Explains Azure configuration and application-level permissions",
                })),
                (l[6] = i))
              : (i = l[6]),
              (t = i),
              l[7] === Symbol.for("react.memo_cache_sentinel")
                ? ((s = (0, n.jsx)(u.A, {
                    id: "restricted.environmentSetup.oic.tenantId",
                    defaultMessage: "Directory (tenant) ID",
                    description: "Azure directory tenant identifier",
                  })),
                  (l[7] = s))
                : (s = l[7]),
              l[8] !== p || l[9] !== d
                ? ((o = (e) => p({ ...d, tenant_id: e })), (l[8] = p), (l[9] = d), (l[10] = o))
                : (o = l[10]),
              l[11] === Symbol.for("react.memo_cache_sentinel")
                ? ((r = (0, n.jsx)(u.A, {
                    id: "restricted.environmentSetup.oic.clientId",
                    defaultMessage: "Application (client) ID",
                    description: "Azure application client identifier, not an object ID or secret",
                  })),
                  (l[11] = r))
                : (r = l[11]),
              l[12] !== p || l[13] !== d
                ? ((a = (e) => p({ ...d, client_id: e })), (l[12] = p), (l[13] = d), (l[14] = a))
                : (a = l[14]),
              (e = [
                { label: s, value: d.tenant_id, placeholder: "11111111-1111-4111-8111-111111111111", onChange: o },
                { label: r, value: d.client_id, placeholder: "22222222-2222-4222-8222-222222222222", onChange: a },
              ]))
            break
          }
          case "aws": {
            let i, s, o, r, a
            ;(l[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, n.jsx)(u.A, {
                  id: "restricted.environmentSetup.oic.awsHelp",
                  defaultMessage: "Use the role’s ARN, not an access key. Its IAM policies determine access",
                  description: "Explains secretless AWS role-based access",
                })),
                (l[15] = i))
              : (i = l[15]),
              (t = i),
              l[16] === Symbol.for("react.memo_cache_sentinel")
                ? ((s = (0, n.jsx)(u.A, {
                    id: "restricted.environmentSetup.oic.awsRoleArn",
                    defaultMessage: "IAM role ARN",
                    description: "Amazon Resource Name of the AWS IAM role the connection will assume",
                  })),
                  (l[16] = s))
                : (s = l[16]),
              l[17] !== p || l[18] !== d
                ? ((o = (e) => p({ ...d, role_arn: e })), (l[17] = p), (l[18] = d), (l[19] = o))
                : (o = l[19]),
              l[20] === Symbol.for("react.memo_cache_sentinel")
                ? ((r = (0, n.jsx)(u.A, {
                    id: "restricted.environmentSetup.oic.awsRegion",
                    defaultMessage: "AWS region",
                    description: "AWS region used by the identity connection",
                  })),
                  (l[20] = r))
                : (r = l[20]),
              l[21] !== p || l[22] !== d
                ? ((a = (e) => p({ ...d, region: e })), (l[21] = p), (l[22] = d), (l[23] = a))
                : (a = l[23]),
              (e = [
                {
                  label: s,
                  value: d.role_arn,
                  placeholder: "arn:aws:iam::123456789012:role/codex-readers",
                  onChange: o,
                },
                { label: r, value: d.region, placeholder: "us-east-1", onChange: a },
              ]))
            break
          }
          case "gcp": {
            let i, s, o, r, a
            ;(l[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, n.jsx)(u.A, {
                  id: "restricted.environmentSetup.oic.gcpHelp",
                  defaultMessage: "Use a workload identity pool provider and service account, not a JSON key",
                  description: "Explains secretless Google Cloud configuration",
                })),
                (l[24] = i))
              : (i = l[24]),
              (t = i),
              l[25] === Symbol.for("react.memo_cache_sentinel")
                ? ((s = (0, n.jsx)(u.A, {
                    id: "restricted.environmentSetup.oic.gcpProvider",
                    defaultMessage: "Workload identity provider",
                    description: "Full Google Cloud workload identity pool provider resource path",
                  })),
                  (l[25] = s))
                : (s = l[25]),
              l[26] !== p || l[27] !== d
                ? ((o = (e) => p({ ...d, workload_identity_provider: e })), (l[26] = p), (l[27] = d), (l[28] = o))
                : (o = l[28]),
              l[29] === Symbol.for("react.memo_cache_sentinel")
                ? ((r = (0, n.jsx)(u.A, {
                    id: "restricted.environmentSetup.oic.gcpServiceAccount",
                    defaultMessage: "Service account email",
                    description:
                      "Google Cloud service account identity the connection will use, not the employee’s email",
                  })),
                  (l[29] = r))
                : (r = l[29]),
              l[30] !== p || l[31] !== d
                ? ((a = (e) => p({ ...d, service_account_email: e })), (l[30] = p), (l[31] = d), (l[32] = a))
                : (a = l[32]),
              (e = [
                {
                  label: s,
                  value: d.workload_identity_provider,
                  placeholder: "projects/123456789/locations/global/workloadIdentityPools/codex/providers/openai",
                  onChange: o,
                },
                {
                  label: r,
                  value: d.service_account_email,
                  placeholder: "codex-readers@my-project.iam.gserviceaccount.com",
                  onChange: a,
                },
              ]))
          }
        }
        ;((i = "flex min-w-0 flex-col gap-3"),
          (o = m ? (0, n.jsx)(b.t, { children: e.map(C) }) : e.map(k)),
          (l[0] = p),
          (l[1] = m),
          (l[2] = d),
          (l[3] = i),
          (l[4] = o),
          (l[5] = t))
      } else ((i = l[3]), (o = l[4]), (t = l[5]))
      return (
        l[33] !== t || l[34] !== m
          ? ((r = m
              ? (0, n.jsx)(u.A, {
                  id: "restricted.environmentSetup.oic.immutableTarget",
                  defaultMessage: "The provider and target are fixed for this connection",
                  description: "Explains why an existing cloud identity target is displayed read-only",
                })
              : t),
            (l[33] = t),
            (l[34] = m),
            (l[35] = r))
          : (r = l[35]),
        l[36] !== r
          ? ((a = (0, n.jsx)("p", { className: "text-xs text-secondary select-none", children: r })),
            (l[36] = r),
            (l[37] = a))
          : (a = l[37]),
        l[38] !== i || l[39] !== o || l[40] !== a
          ? ((c = (0, n.jsxs)("div", { className: i, children: [o, a] })),
            (l[38] = i),
            (l[39] = o),
            (l[40] = a),
            (l[41] = c))
          : (c = l[41]),
        c
      )
    }
    function k(e) {
      return (0, n.jsx)(
        z,
        {
          label: e.label,
          children: (0, n.jsx)(f.pd, {
            autoComplete: "off",
            required: !0,
            value: e.value,
            placeholder: e.placeholder,
            onChange: (t) => e.onChange(t.target.value),
          }),
        },
        e.placeholder,
      )
    }
    function C(e) {
      return (0, n.jsx)(w, { label: e.label, value: e.value }, e.placeholder)
    }
    function z(e) {
      let t,
        i,
        o = (0, s.c)(5),
        { label: r, children: a } = e
      return (
        o[0] !== r
          ? ((t = (0, n.jsx)("span", { className: "select-none", children: r })), (o[0] = r), (o[1] = t))
          : (t = o[1]),
        o[2] !== a || o[3] !== t
          ? ((i = (0, n.jsxs)("label", {
              className: "flex min-w-0 flex-col gap-2 text-sm text-secondary",
              children: [t, a],
            })),
            (o[2] = a),
            (o[3] = t),
            (o[4] = i))
          : (i = o[4]),
        i
      )
    }
    function I(e) {
      let t,
        i,
        _,
        S,
        w,
        k,
        C,
        I,
        N,
        O,
        D,
        H,
        T,
        E,
        F,
        G,
        W,
        B,
        R,
        V = (0, s.c)(71),
        { isOpen: P, connection: L, onClose: U, onSubmit: q } = e,
        J = (0, d.A)(),
        Z = L?.display_name ?? "",
        $ = L?.subject_template ?? "oai:v1:oic:{connection_id}",
        Y = L?.include_actor_email ?? !1
      V[0] !== Z || V[1] !== $ || V[2] !== Y
        ? ((t = { display_name: Z, subject_template: $, include_actor_email: Y }),
          (V[0] = Z),
          (V[1] = $),
          (V[2] = Y),
          (V[3] = t))
        : (t = V[3])
      let [K, Q] = (0, l.useState)(t)
      V[4] !== L
        ? ((i = L?.target ?? {
            provider_kind: "azure",
            tenant_id: L?.provider_kind === "azure" ? L.azure_tenant_id : "",
            client_id: L?.provider_kind === "azure" ? L.azure_client_id : "",
          }),
          (V[4] = L),
          (V[5] = i))
        : (i = V[5])
      let [X, ee] = (0, l.useState)(i)
      V[6] !== L?.additional_claims
        ? ((_ = JSON.stringify(L?.additional_claims ?? {}, null, 2)), (V[6] = L?.additional_claims), (V[7] = _))
        : (_ = V[7])
      let [et, ei] = (0, l.useState)(_),
        [en, es] = (0, l.useState)(!1),
        [eo, er] = (0, l.useState)(null),
        [ea, ec] = (0, l.useState)(null)
      if (null != eo) {
        let e, t
        ;(V[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(u.A, {
              id: "restricted.environmentSetup.oic.savedTitle",
              defaultMessage: "Connection saved",
              description: "Heading after an outbound identity connection has been saved",
            })),
            (V[8] = e))
          : (e = V[8]),
          (S = e),
          V[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(u.A, {
                id: "restricted.environmentSetup.oic.savedSubtitle",
                defaultMessage: "Finish setup in your cloud provider using these trust settings",
                description: "The connection is persisted but cloud-side federation still needs configuration",
              })),
              (V[9] = t))
            : (t = V[9]),
          (w = t))
      } else if (null == L) {
        let e, t
        ;(V[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(u.A, {
              id: "restricted.environmentSetup.oic.newTitle",
              defaultMessage: "New identity connection",
              description: "Title when creating an outbound identity connection",
            })),
            (V[10] = e))
          : (e = V[10]),
          (S = e),
          V[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(u.A, {
                id: "restricted.environmentSetup.oic.newSubtitle",
                defaultMessage: "Let this environment access your cloud resources without storing secrets",
                description: "Short explanation of outbound workload identity",
              })),
              (V[11] = t))
            : (t = V[11]),
          (w = t))
      } else {
        let e, t
        ;(V[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(u.A, {
              id: "restricted.environmentSetup.oic.editTitle",
              defaultMessage: "Edit identity connection",
              description: "Title when editing an existing outbound identity connection",
            })),
            (V[12] = e))
          : (e = V[12]),
          (S = e),
          V[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(u.A, {
                id: "restricted.environmentSetup.oic.editSubtitle",
                defaultMessage: "Changes apply to every environment using this connection",
                description: "Warns that editing the shared connection affects its other attachments",
              })),
              (V[13] = t))
            : (t = V[13]),
          (w = t))
      }
      V[14] !== L
        ? ((k =
            null == L
              ? (0, n.jsx)(u.A, {
                  id: "restricted.environmentSetup.oic.create",
                  defaultMessage: "Create connection",
                  description: "Persists a real outbound identity connection",
                })
              : (0, n.jsx)(u.A, {
                  id: "restricted.environmentSetup.oic.save",
                  defaultMessage: "Save connection",
                  description: "Saves edits to a real shared outbound identity connection",
                })),
          (V[14] = L),
          (V[15] = k))
        : (k = V[15])
      let el = k,
        ed =
          null == L &&
          null != ea &&
          ("unavailable" === ea.error ||
            "invalid-response" === ea.error ||
            "authentication" === ea.error ||
            ("http" === ea.error && (null == ea.status || 408 === ea.status || ea.status >= 500)))
      V[16] !== et ||
      V[17] !== ed ||
      V[18] !== K ||
      V[19] !== P ||
      V[20] !== q ||
      V[21] !== eo ||
      V[22] !== en ||
      V[23] !== X
        ? ((C = async () => {
            let e
            if (P && !en && null == eo && !ed) {
              try {
                e = c.OI.parse({
                  ...K,
                  additional_claims: JSON.parse(et),
                  ...("azure" === X.provider_kind
                    ? { azure_tenant_id: X.tenant_id, azure_client_id: X.client_id }
                    : { target: X }),
                })
              } catch {
                ec({ ok: !1, error: "invalid-request" })
                return
              }
              ;(ec(null), es(!0))
              try {
                let t = await q(e)
                t.ok
                  ? t.data.provider_kind === X.provider_kind
                    ? er(t.data)
                    : ec({ ok: !1, error: "invalid-response" })
                  : ec(t)
              } catch {
                ec({ ok: !1, error: "unavailable" })
              }
              es(!1)
            }
          }),
          (V[16] = et),
          (V[17] = ed),
          (V[18] = K),
          (V[19] = P),
          (V[20] = q),
          (V[21] = eo),
          (V[22] = en),
          (V[23] = X),
          (V[24] = C))
        : (C = V[24])
      let eu = C
      return (
        V[25] !== U || V[26] !== en
          ? ((I = (e) => {
              e || en || U()
            }),
            (V[25] = U),
            (V[26] = en),
            (V[27] = I))
          : (I = V[27]),
        V[28] !== eu
          ? ((N = (e) => {
              ;(e.preventDefault(), e.stopPropagation(), eu())
            }),
            (V[28] = eu),
            (V[29] = N))
          : (N = V[29]),
        V[30] !== S
          ? ((O = (0, n.jsx)(m.L3, { className: "sr-only", children: S })), (V[30] = S), (V[31] = O))
          : (O = V[31]),
        V[32] !== w ? ((D = (0, n.jsx)(m.rr, { children: w })), (V[32] = w), (V[33] = D)) : (D = V[33]),
        V[34] !== D || V[35] !== S
          ? ((H = (0, n.jsx)(h.OO, { children: (0, n.jsx)(h.c7, { title: S, subtitleSize: "sm", subtitle: D }) })),
            (V[34] = D),
            (V[35] = S),
            (V[36] = H))
          : (H = V[36]),
        V[37] !== et ||
        V[38] !== L ||
        V[39] !== ed ||
        V[40] !== K ||
        V[41] !== J ||
        V[42] !== eo ||
        V[43] !== en ||
        V[44] !== X
          ? ((T =
              null != eo
                ? (0, n.jsx)(A, { connection: eo })
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsxs)("fieldset", {
                        disabled: en || ed,
                        className: "flex min-w-0 flex-col gap-4",
                        children: [
                          null == L
                            ? (0, n.jsx)(x.T, {
                                fullWidth: !0,
                                size: "dialog",
                                ariaLabel: J.formatMessage({
                                  id: "restricted.environmentSetup.oic.provider",
                                  defaultMessage: "Cloud provider",
                                  description: "Select the cloud provider preset for a connection",
                                }),
                                selectedId: X.provider_kind,
                                options: [
                                  {
                                    id: "azure",
                                    label: (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        (0, n.jsx)(v.I, { asset: a }),
                                        (0, n.jsx)(u.A, {
                                          id: "restricted.environmentSetup.oic.azurePreset",
                                          defaultMessage: "Azure",
                                          description: "Microsoft Azure cloud provider preset",
                                        }),
                                      ],
                                    }),
                                  },
                                  {
                                    id: "aws",
                                    label: (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        (0, n.jsx)(v.I, { asset: o.k }),
                                        (0, n.jsx)(u.A, {
                                          id: "restricted.environmentSetup.oic.awsPreset",
                                          defaultMessage: "AWS",
                                          description: "Amazon Web Services cloud provider preset",
                                        }),
                                      ],
                                    }),
                                  },
                                  {
                                    id: "gcp",
                                    label: (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        (0, n.jsx)(v.I, { asset: r.U }),
                                        (0, n.jsx)(u.A, {
                                          id: "restricted.environmentSetup.oic.gcpPreset",
                                          defaultMessage: "Google Cloud",
                                          description: "Google Cloud provider preset",
                                        }),
                                      ],
                                    }),
                                  },
                                ],
                                onSelect: (e) => {
                                  if (e !== X.provider_kind)
                                    switch ((ec(null), e)) {
                                      case "azure":
                                        ee({ provider_kind: "azure", tenant_id: "", client_id: "" })
                                        break
                                      case "aws":
                                        ee({ provider_kind: "aws", role_arn: "", region: "us-east-1" })
                                        break
                                      case "gcp":
                                        ee({
                                          provider_kind: "gcp",
                                          workload_identity_provider: "",
                                          service_account_email: "",
                                        })
                                    }
                                },
                              })
                            : null,
                          (0, n.jsx)(z, {
                            label: (0, n.jsx)(u.A, {
                              id: "restricted.environmentSetup.oic.name",
                              defaultMessage: "Connection name",
                              description: "Human-readable name for an outbound identity connection",
                            }),
                            children: (0, n.jsx)(f.pd, {
                              autoFocus: !0,
                              autoComplete: "off",
                              required: !0,
                              maxLength: 200,
                              value: K.display_name,
                              placeholder: J.formatMessage({
                                id: "restricted.environmentSetup.oic.namePlaceholder",
                                defaultMessage: "e.g. Analytics read-only",
                                description: "Example name for a shared outbound identity connection",
                              }),
                              onChange: (e) => Q({ ...K, display_name: e.target.value }),
                            }),
                          }),
                          (0, n.jsx)(M, { target: X, onChange: ee, readOnly: null != L }),
                          (0, n.jsxs)("details", {
                            children: [
                              (0, n.jsx)("summary", {
                                className: "cursor-interaction text-sm text-secondary select-none",
                                children: (0, n.jsx)(u.A, {
                                  id: "restricted.environmentSetup.oic.subjectAndClaims",
                                  defaultMessage: "Subject and token claims",
                                  description:
                                    "Disclosure for customizing the signed OIDC subject and additional claims",
                                }),
                              }),
                              (0, n.jsxs)("div", {
                                className: "flex min-w-0 flex-col gap-3",
                                children: [
                                  (0, n.jsx)(z, {
                                    label: (0, n.jsx)(u.A, {
                                      id: "restricted.environmentSetup.oic.subjectTemplate",
                                      defaultMessage: "Subject template",
                                      description: "Template for the outgoing OIDC token subject",
                                    }),
                                    children: (0, n.jsx)(f.pd, {
                                      autoComplete: "off",
                                      required: !0,
                                      value: K.subject_template,
                                      onChange: (e) => Q({ ...K, subject_template: e.target.value }),
                                    }),
                                  }),
                                  (0, n.jsx)("p", {
                                    className: "text-sm text-secondary select-none",
                                    children: (0, n.jsx)(u.A, {
                                      id: "restricted.environmentSetup.oic.templateHelp",
                                      defaultMessage:
                                        "Keep {prefix} at the start. You can append fields such as {actor}, {environment}, and {workspace}; AuthAPI fills them from verified runtime context",
                                      description:
                                        "Explains the required OIC namespace and example supported template placeholders",
                                      values: {
                                        prefix: "oai:v1:oic:{connection_id}",
                                        actor: "{actor_id}",
                                        environment: "{environment_id}",
                                        workspace: "{workspace_id}",
                                      },
                                    }),
                                  }),
                                  (0, n.jsx)(z, {
                                    label: (0, n.jsx)(u.A, {
                                      id: "restricted.environmentSetup.oic.additionalClaims",
                                      defaultMessage: "Additional claims (JSON)",
                                      description:
                                        "Editor for extra signed claims whose values are strings or templates",
                                    }),
                                    children: (0, n.jsx)(f.TM, {
                                      autoComplete: "off",
                                      rows: 4,
                                      value: et,
                                      onChange: (e) => ei(e.target.value),
                                    }),
                                  }),
                                  (0, n.jsx)(b.t, {
                                    children: (0, n.jsx)(j.ic, {
                                      size: "compact",
                                      label: (0, n.jsx)(u.A, {
                                        id: "restricted.environmentSetup.oic.includeEmail",
                                        defaultMessage: "Include the triggering user's verified email",
                                        description:
                                          "Opt-in to disclose the human actor email in outbound OIDC assertions",
                                      }),
                                      control: (e) =>
                                        (0, n.jsx)(g.l, {
                                          ...e,
                                          checked: K.include_actor_email,
                                          onChange: (e) => Q({ ...K, include_actor_email: e }),
                                        }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      null == L
                        ? null
                        : (0, n.jsxs)("details", {
                            children: [
                              (0, n.jsx)("summary", {
                                className: "cursor-interaction text-sm text-secondary select-none",
                                children: (0, n.jsx)(u.A, {
                                  id: "restricted.environmentSetup.oic.savedTrustDisclosure",
                                  defaultMessage: "Saved federation settings",
                                  description:
                                    "Expands the saved trust settings separately from unsaved connection edits",
                                }),
                              }),
                              (0, n.jsx)(h.OO, { children: (0, n.jsx)(A, { connection: L }) }),
                            ],
                          }),
                    ],
                  })),
            (V[37] = et),
            (V[38] = L),
            (V[39] = ed),
            (V[40] = K),
            (V[41] = J),
            (V[42] = eo),
            (V[43] = en),
            (V[44] = X),
            (V[45] = T))
          : (T = V[45]),
        V[46] !== ed
          ? ((E = ed
              ? (0, n.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger select-none",
                  children: (0, n.jsx)(u.A, {
                    id: "restricted.environmentSetup.oic.createUnconfirmed",
                    defaultMessage:
                      "Couldn't confirm whether this connection was created. Close this dialog and check the available connections before creating another",
                    description:
                      "Recovery after an unconfirmed create; the connection may have been saved, so the user must inspect the refreshed catalog before creating again",
                  }),
                })
              : null),
            (V[46] = ed),
            (V[47] = E))
          : (E = V[47]),
        V[48] !== ed || V[49] !== ea
          ? ((F = ed || null == ea ? null : (0, n.jsx)(y.R, { error: ea })), (V[48] = ed), (V[49] = ea), (V[50] = F))
          : (F = V[50]),
        V[51] !== T || V[52] !== E || V[53] !== F
          ? ((G = (0, n.jsx)(h.OO, {
              spacing: "large",
              children: (0, n.jsxs)("div", { className: "flex min-w-0 flex-col gap-4", children: [T, E, F] }),
            })),
            (V[51] = T),
            (V[52] = E),
            (V[53] = F),
            (V[54] = G))
          : (G = V[54]),
        V[55] !== ed || V[56] !== U || V[57] !== eo || V[58] !== en || V[59] !== el
          ? ((W = (0, n.jsx)(h.OO, {
              spacing: "large",
              children: (0, n.jsx)(h.Es, {
                expandSingleButton: !1,
                children:
                  null != eo
                    ? (0, n.jsx)(p.$, {
                        type: "button",
                        size: "dialog",
                        onClick: U,
                        children: (0, n.jsx)(u.A, {
                          id: "restricted.environmentSetup.oic.done",
                          defaultMessage: "Done",
                          description: "Closes the saved connection settings",
                        }),
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(p.$, {
                            type: "button",
                            color: "secondary",
                            size: "dialog",
                            disabled: en,
                            onClick: U,
                            children: ed
                              ? (0, n.jsx)(u.A, {
                                  id: "restricted.environmentSetup.oic.closeUnconfirmed",
                                  defaultMessage: "Close",
                                  description:
                                    "Closes the editor without claiming that an unconfirmed connection creation was canceled",
                                })
                              : (0, n.jsx)(u.A, {
                                  id: "restricted.environmentSetup.oic.cancel",
                                  defaultMessage: "Cancel",
                                  description: "Cancels unsaved connection form edits",
                                }),
                          }),
                          (0, n.jsx)(p.$, {
                            type: "submit",
                            size: "dialog",
                            disabled: en || ed,
                            children: en
                              ? (0, n.jsx)(u.A, {
                                  id: "restricted.environmentSetup.oic.saving",
                                  defaultMessage: "Saving…",
                                  description: "Connection save in progress",
                                })
                              : el,
                          }),
                        ],
                      }),
              }),
            })),
            (V[55] = ed),
            (V[56] = U),
            (V[57] = eo),
            (V[58] = en),
            (V[59] = el),
            (V[60] = W))
          : (W = V[60]),
        V[61] !== N || V[62] !== O || V[63] !== H || V[64] !== G || V[65] !== W
          ? ((B = (0, n.jsxs)(h.R4, { as: "form", size: "viewport", onSubmit: N, children: [O, H, G, W] })),
            (V[61] = N),
            (V[62] = O),
            (V[63] = H),
            (V[64] = G),
            (V[65] = W),
            (V[66] = B))
          : (B = V[66]),
        V[67] !== P || V[68] !== B || V[69] !== I
          ? ((R = (0, n.jsx)(m.lG, { open: P, onOpenChange: I, children: B })),
            (V[67] = P),
            (V[68] = B),
            (V[69] = I),
            (V[70] = R))
          : (R = V[70]),
        R
      )
    }
  },
}
//# sourceMappingURL=208407.b21a369682.js.map
