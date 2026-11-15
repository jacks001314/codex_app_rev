export const __rspack_esm_ids = [84934]
export const __webpack_modules__ = {
  mIK0(e, s, t) {
    var i = t("ABep"),
      n = t("QosV"),
      a = t("irkb"),
      o = t("xSOA"),
      r = t("zd8w"),
      l = t("Wf1j"),
      d = t("oyxz"),
      c = t("Qgfj"),
      f = t("Ghh3"),
      u = t("Sm6l"),
      p = t("uuN8"),
      h = t("mUDD"),
      m = t("nzx4"),
      x = t("zLIa"),
      g = t("AWNZ"),
      b = t("ZEx5"),
      y = t("aepO"),
      w = t("eShZ"),
      P = t("WIbF"),
      j = t("UeZw"),
      S = t("tzGG"),
      _ = t("VVBW")
    let v = (0, c.YK)({
      password: {
        id: "businessProfiles.feeds.sftp.password",
        defaultMessage: "Password",
        description: "Use a generated password to authenticate to inbound SFTP storage",
      },
      ssh_key: {
        id: "businessProfiles.feeds.sftp.sshKey",
        defaultMessage: "SSH key",
        description: "Use an SSH public key to authenticate to inbound SFTP storage",
      },
      publicKey: {
        id: "businessProfiles.feeds.sftp.publicKey",
        defaultMessage: "SSH public key",
        description: "Public key to provision for this feed; never a private key",
      },
      host: { id: "businessProfiles.feeds.sftp.host", defaultMessage: "Host", description: "SFTP storage hostname" },
      port: { id: "businessProfiles.feeds.sftp.port", defaultMessage: "Port", description: "SFTP storage port" },
      username: {
        id: "businessProfiles.feeds.sftp.username",
        defaultMessage: "Username",
        description: "Provisioned SFTP storage username",
      },
      root_path: {
        id: "businessProfiles.feeds.sftp.uploadPath",
        defaultMessage: "Upload path",
        description: "Root directory where this feed's files must be uploaded",
      },
    })
    t.d(
      s,
      {},
      {
        FeedSftpFlow: function (e) {
          let s,
            t,
            c,
            k,
            A,
            F,
            T,
            M,
            N,
            C,
            E,
            H,
            I,
            D,
            G,
            R,
            q,
            z,
            K,
            W,
            B,
            U,
            O,
            $,
            L,
            Q,
            V,
            Y,
            Z,
            J,
            X,
            ee,
            es = (0, n.c)(138),
            {
              accountId: et,
              manager: ei,
              initialFeedId: en,
              getFeedId: ea,
              configuration: eo,
              onBack: er,
              onClose: el,
            } = e,
            ed = (0, l.A)(),
            ec = (0, a.jE)(),
            ef = ei.profile.business_profile_id,
            [eu, ep] = (0, r.useState)("choose"),
            [eh, em] = (0, r.useState)(eo),
            [ex, eg] = (0, r.useState)(en),
            [eb, ey] = (0, r.useState)("password"),
            [ew, eP] = (0, r.useState)(""),
            [ej, eS] = (0, r.useState)(null),
            [e_, ev] = (0, r.useState)(!1),
            [ek, eA] = (0, r.useState)(!eo?.configured),
            [eF, eT] = (0, r.useState)(null)
          es[0] !== et || es[1] !== ef || es[2] !== ec
            ? ((s = function (e, s) {
                return (
                  ec.setQueryData(["business-profiles", et, ef, "sftp", e], { ...s, password: null }),
                  ec.invalidateQueries({
                    queryKey: ["business-profiles", et, ef, "feed-connection-summaries"],
                    predicate: (s) => Array.isArray(s.queryKey[4]) && s.queryKey[4].includes(e),
                  }),
                  s
                )
              }),
              (es[0] = et),
              (es[1] = ef),
              (es[2] = ec),
              (es[3] = s))
            : (s = es[3])
          let eM = s
          es[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (e) => {
                e instanceof w.fk &&
                  [401, 403, 404].includes(e.status) &&
                  (eS(null), em(void 0), ev(!1), ep("configure"))
              }),
              (es[4] = t))
            : (t = es[4])
          let eN = t
          es[5] !== et ||
          es[6] !== eb ||
          es[7] !== eM ||
          es[8] !== ea ||
          es[9] !== ef ||
          es[10] !== eh?.configured ||
          es[11] !== ew
            ? ((c = {
                mutationFn: async () => {
                  let e = await ea()
                  return (eg(e),
                  eh?.configured ||
                    (await f.Request.safePost(
                      "/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/sftp",
                      {
                        additionalHeaders: { "ChatGPT-Account-ID": et },
                        parameters: { path: { business_profile_id: ef, feed_id: e } },
                        requestBody: {
                          authentication_method: eb,
                          ssh_public_key: "ssh_key" === eb ? ew.trim() : void 0,
                        },
                        expectedErrorStatuses: [400, 401, 403, 404, 409, 422],
                      },
                    ).then((s) => eM(e, s))),
                  "ssh_key" === eb)
                    ? f.Request.safePost(
                        "/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/sftp/ssh-key",
                        {
                          additionalHeaders: { "ChatGPT-Account-ID": et },
                          parameters: { path: { business_profile_id: ef, feed_id: e } },
                          requestBody: { ssh_public_key: ew.trim() },
                          expectedErrorStatuses: [400, 401, 403, 404, 409, 422],
                        },
                      ).then((s) => eM(e, s))
                    : f.Request.safePost(
                        "/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/sftp/password-reset",
                        {
                          additionalHeaders: { "ChatGPT-Account-ID": et },
                          parameters: { path: { business_profile_id: ef, feed_id: e } },
                          expectedErrorStatuses: [400, 401, 403, 404, 409],
                        },
                      ).then((s) => eM(e, s))
                },
                retry: !1,
                gcTime: 0,
                onError: eN,
              }),
              (es[5] = et),
              (es[6] = eb),
              (es[7] = eM),
              (es[8] = ea),
              (es[9] = ef),
              (es[10] = eh?.configured),
              (es[11] = ew),
              (es[12] = c))
            : (c = es[12])
          let { mutate: eC, isPending: eE, error: eH, reset: eI } = (0, o.n)(c)
          es[13] !== et || es[14] !== eM || es[15] !== ea || es[16] !== ef
            ? ((k = {
                mutationFn: async (e) => {
                  let s = await ea()
                  return (
                    eg(s),
                    f.Request.safePatch("/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/sftp", {
                      additionalHeaders: { "ChatGPT-Account-ID": et },
                      parameters: { path: { business_profile_id: ef, feed_id: s } },
                      requestBody: { enabled: e },
                      expectedErrorStatuses: [400, 401, 403, 404, 409],
                    }).then((e) => eM(s, e))
                  )
                },
                retry: !1,
                gcTime: 0,
                onError: eN,
              }),
              (es[13] = et),
              (es[14] = eM),
              (es[15] = ea),
              (es[16] = ef),
              (es[17] = k))
            : (k = es[17])
          let { mutate: eD, isPending: eG, variables: eR, error: eq, reset: ez } = (0, o.n)(k),
            eK = eE || eG,
            eW = "password" === eb && ek
          es[18] !== eG || es[19] !== eK || es[20] !== eR || es[21] !== eD || es[22] !== eh
            ? ((A =
                eh?.configured && eh.enabled
                  ? (0, i.jsx)(u.$, {
                      color: "ghost",
                      loading: eG && !1 === eR,
                      disabled: eK,
                      onClick: () =>
                        eD(!1, {
                          onSuccess: (e) => {
                            ;(em({ ...e, password: null }), eT(!1), eS(null), ev(!1))
                          },
                        }),
                      children: (0, i.jsx)(d.A, {
                        id: "businessProfiles.feeds.sftp.disable",
                        defaultMessage: "Disable SFTP access and ingestion",
                        description: "Remove storage login access and stop polling for future SFTP uploads",
                      }),
                    })
                  : null),
              (es[18] = eG),
              (es[19] = eK),
              (es[20] = eR),
              (es[21] = eD),
              (es[22] = eh),
              (es[23] = A))
            : (A = es[23])
          let eB = A
          es[24] !== eF || es[25] !== eq
            ? ((F =
                !1 === eF && null == eq
                  ? (0, i.jsx)("p", {
                      role: "status",
                      className: "text-sm text-secondary",
                      children: (0, i.jsx)(d.A, {
                        id: "businessProfiles.feeds.sftp.intakeDisabled",
                        defaultMessage:
                          "SFTP access and intake disabled. Already-dispatched products may still finish processing",
                        description:
                          "Reports that intake was disabled without claiming already-dispatched processing was cancelled",
                      }),
                    })
                  : null),
              (es[24] = eF),
              (es[25] = eq),
              (es[26] = F))
            : (F = es[26])
          let eU = F
          es[27] !== eD
            ? ((T = function () {
                eD(!0, {
                  onSuccess: (e) => {
                    ;(em({ ...e, password: null }), eT(!0), eS(null), ep("connected"))
                  },
                })
              }),
              (es[27] = eD),
              (es[28] = T))
            : (T = es[28])
          let eO = T
          es[29] !== eb || es[30] !== eO || es[31] !== ez || es[32] !== eC
            ? ((M = function (e) {
                eC(void 0, {
                  onSuccess: (s) => {
                    ;(em({ ...s, password: null }),
                      eS(s.password ?? null),
                      null != s.password && eA(!1),
                      ev("ssh_key" === eb || null != s.password),
                      eT(null),
                      ez(),
                      ep("configure"),
                      e && eO())
                  },
                })
              }),
              (es[29] = eb),
              (es[30] = eO),
              (es[31] = ez),
              (es[32] = eC),
              (es[33] = M))
            : (M = es[33])
          let e$ = M
          ;(es[34] === Symbol.for("react.memo_cache_sentinel")
            ? ((N = (0, i.jsx)("h2", {
                className: "text-sm font-medium select-none",
                children: (0, i.jsx)(d.A, {
                  id: "businessProfiles.feeds.sftp.connectionInfo",
                  defaultMessage: "Connection info",
                  description: "Details to enter into an SFTP client for the selected product feed",
                }),
              })),
              (es[34] = N))
            : (N = es[34]),
            es[35] !== ex || es[36] !== eh
              ? ((C =
                  null != ex || eh?.configured
                    ? (0, i.jsxs)("dl", {
                        className: "flex flex-col gap-3 rounded-xl border border-default p-6 text-sm select-text",
                        children: [
                          null != ex
                            ? (0, i.jsxs)("div", {
                                className: "flex min-w-0 flex-wrap justify-between gap-2",
                                children: [
                                  (0, i.jsx)("dt", {
                                    className: "text-secondary",
                                    children: (0, i.jsx)(d.A, {
                                      id: "businessProfiles.feeds.sftp.productFeed",
                                      defaultMessage: "Product feed",
                                      description: "Identifier of the product feed receiving SFTP files",
                                    }),
                                  }),
                                  (0, i.jsx)("dd", { className: "min-w-0 break-all", children: ex }),
                                ],
                              })
                            : null,
                          eh?.configured
                            ? ["host", "username", "root_path", "port"].map((e) =>
                                (0, i.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "flex min-w-0 flex-wrap justify-between gap-2 border-t border-default pt-3",
                                    children: [
                                      (0, i.jsx)("dt", {
                                        className: "text-secondary",
                                        children: (0, i.jsx)(d.A, { ...v[e] }),
                                      }),
                                      (0, i.jsx)("dd", { className: "min-w-0 break-all", children: eh[e] }),
                                    ],
                                  },
                                  e,
                                ),
                              )
                            : null,
                        ],
                      })
                    : null),
                (es[35] = ex),
                (es[36] = eh),
                (es[37] = C))
              : (C = es[37]),
            es[38] !== eb || es[39] !== eh?.configured
              ? ((E = eh?.configured
                  ? null
                  : (0, i.jsx)("p", {
                      className: "text-sm text-secondary",
                      children:
                        "password" === eb
                          ? (0, i.jsx)(d.A, {
                              id: "businessProfiles.feeds.sftp.pendingPasswordConnection",
                              defaultMessage: "Your connection details will appear after you generate a password",
                              description:
                                "A new SFTP feed is created and provisioned only when the user generates a password",
                            })
                          : (0, i.jsx)(d.A, {
                              id: "businessProfiles.feeds.sftp.pendingConnection",
                              defaultMessage:
                                "Your connection details will appear after you save your SSH key and connect",
                              description:
                                "An unprovisioned SSH feed cannot show a host or username until the public key has been saved",
                            }),
                    })),
                (es[38] = eb),
                (es[39] = eh?.configured),
                (es[40] = E))
              : (E = es[40]),
            es[41] !== C || es[42] !== E
              ? ((H = (0, i.jsxs)(h.RW, { children: [N, C, E] })), (es[41] = C), (es[42] = E), (es[43] = H))
              : (H = es[43]))
          let eL = H
          if ("connected" === eu) {
            let e, s, t, n, a, o, r
            return (
              es[44] !== ei
                ? ((e = (0, i.jsx)("div", {
                    inert: !0,
                    className: "mx-auto w-full max-w-sm overflow-hidden rounded-3xl opacity-30",
                    children: (0, i.jsx)(j.G, { manager: ei }),
                  })),
                  (es[44] = ei),
                  (es[45] = e))
                : (e = es[45]),
              es[46] === Symbol.for("react.memo_cache_sentinel")
                ? ((s = (0, i.jsx)("h1", {
                    className: "text-heading-lg leading-tight font-normal md:text-heading-app",
                    children: (0, i.jsx)(d.A, {
                      id: "businessProfiles.feeds.sftp.connectedTitle",
                      defaultMessage: "Your SFTP feed is connected",
                      description:
                        "SFTP intake was enabled; this does not claim that a product file has arrived or begun processing",
                    }),
                  })),
                  (es[46] = s))
                : (s = es[46]),
              es[47] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, i.jsxs)("div", {
                    role: "status",
                    className: "flex flex-col gap-2",
                    children: [
                      s,
                      (0, i.jsx)("p", {
                        className: "text-base text-secondary",
                        children: (0, i.jsx)(d.A, {
                          id: "businessProfiles.feeds.sftp.connectedDescription",
                          defaultMessage:
                            "We’ll import completed files you upload. Check upload history for processing results",
                          description:
                            "Explains when an enabled SFTP feed will import files and where to follow their status",
                        }),
                      }),
                    ],
                  })),
                  (es[47] = t))
                : (t = es[47]),
              es[48] === Symbol.for("react.memo_cache_sentinel")
                ? ((n = (0, i.jsx)(d.A, {
                    id: "businessProfiles.feeds.sftp.backToBusiness",
                    defaultMessage: "Back to business page",
                    description: "Return from completed SFTP setup to the business product feed",
                  })),
                  (es[48] = n))
                : (n = es[48]),
              es[49] !== el
                ? ((a = (0, i.jsx)(u.$, { color: "primary", size: "beaconAction", onClick: el, children: n })),
                  (es[49] = el),
                  (es[50] = a))
                : (a = es[50]),
              es[51] !== eL || es[52] !== a
                ? ((o = (0, i.jsxs)("div", {
                    className: "m-auto flex w-full max-w-xl flex-col items-start gap-6 px-8 py-20 select-none",
                    children: [t, eL, a],
                  })),
                  (es[51] = eL),
                  (es[52] = a),
                  (es[53] = o))
                : (o = es[53]),
              es[54] !== el || es[55] !== e || es[56] !== o
                ? ((r = (0, i.jsx)(_.I, { onExit: el, completed: !0, preview: e, children: o })),
                  (es[54] = el),
                  (es[55] = e),
                  (es[56] = o),
                  (es[57] = r))
                : (r = es[57]),
              r
            )
          }
          ;(es[58] !== ei ? ((I = (0, i.jsx)(j.G, { manager: ei })), (es[58] = ei), (es[59] = I)) : (I = es[59]),
            es[60] !== eb ||
            es[61] !== e_ ||
            es[62] !== eO ||
            es[63] !== eW ||
            es[64] !== eK ||
            es[65] !== e$ ||
            es[66] !== eh?.configured ||
            es[67] !== eu
              ? ((D = (e) => {
                  ;(e.preventDefault(),
                    eK ||
                      ("choose" === eu
                        ? ep("configure")
                        : "ssh_key" !== eb || e_
                          ? eh?.configured && !eW && eO()
                          : e$(!0)))
                }),
                (es[60] = eb),
                (es[61] = e_),
                (es[62] = eO),
                (es[63] = eW),
                (es[64] = eK),
                (es[65] = e$),
                (es[66] = eh?.configured),
                (es[67] = eu),
                (es[68] = D))
              : (D = es[68]),
            es[69] !== eu
              ? ((G = (0, i.jsx)("h1", {
                  className: "text-heading-lg leading-tight font-normal md:text-heading-app",
                  children:
                    "choose" === eu
                      ? (0, i.jsx)(d.A, {
                          id: "businessProfiles.feeds.sftp.connectTitle",
                          defaultMessage: "Connect with SFTP",
                          description: "Heading for selecting how to authenticate to the business profile's SFTP feed",
                        })
                      : (0, i.jsx)(d.A, {
                          id: "businessProfiles.feeds.sftp.configureTitle",
                          defaultMessage: "Configure SFTP",
                          description: "Heading for configuring an SFTP client with the feed's credentials",
                        }),
                })),
                (R =
                  "configure" === eu
                    ? (0, i.jsx)("p", {
                        className: "text-base text-secondary",
                        children: (0, i.jsx)(d.A, {
                          id: "businessProfiles.feeds.sftp.configureDescription",
                          defaultMessage:
                            "Use these details to configure SFTP. We’ll import completed product files after you connect",
                          description:
                            "Configure an SFTP client, then enable the server to watch for completed uploads; connecting does not immediately validate products",
                        }),
                      })
                    : null),
                (es[69] = eu),
                (es[70] = G),
                (es[71] = R))
              : ((G = es[70]), (R = es[71])),
            es[72] !== G || es[73] !== R
              ? ((q = (0, i.jsxs)("div", { className: "flex flex-col gap-1 select-none", children: [G, R] })),
                (es[72] = G),
                (es[73] = R),
                (es[74] = q))
              : (q = es[74]),
            es[75] !== eb ||
            es[76] !== eL ||
            es[77] !== e_ ||
            es[78] !== ed ||
            es[79] !== ej ||
            es[80] !== eK ||
            es[81] !== eI ||
            es[82] !== ez ||
            es[83] !== e$ ||
            es[84] !== eE ||
            es[85] !== eh?.configured ||
            es[86] !== ew ||
            es[87] !== eu
              ? ((z =
                  "choose" === eu
                    ? (0, i.jsx)("fieldset", {
                        disabled: eK,
                        children: (0, i.jsx)(b.t, {
                          variant: "form",
                          children: ["password", "ssh_key"].map((e) =>
                            (0, i.jsx)(
                              g.lu,
                              {
                                id: `feed-sftp-${e}`,
                                ariaLabel: ed.formatMessage(v[e]),
                                label: (0, i.jsx)(d.A, { ...v[e] }),
                                description:
                                  "password" === e
                                    ? (0, i.jsx)(d.A, {
                                        id: "businessProfiles.feeds.sftp.passwordOption",
                                        defaultMessage: "Generate a password and save it in your SFTP client",
                                        description: "Explanation of password authentication for an SFTP product feed",
                                      })
                                    : (0, i.jsx)(d.A, {
                                        id: "businessProfiles.feeds.sftp.sshOption",
                                        defaultMessage:
                                          "Paste a public key. SFTP client will use the matching private key",
                                        description:
                                          "Explanation of public key authentication for an SFTP product feed; the private key stays in the client",
                                      }),
                                name: "feed-sftp-authentication",
                                value: e,
                                checked: eb === e,
                                onChange: () => {
                                  e !== eb && (ey(e), ev(!1), eS(null), eP(""), eI(), ez(), eT(null))
                                },
                                variant: "form",
                              },
                              e,
                            ),
                          ),
                        }),
                      })
                    : (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsxs)(h.RW, {
                            children: [
                              "ssh_key" === eb
                                ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                      (0, i.jsx)("label", {
                                        htmlFor: "feed-sftp-public-key",
                                        className: "text-sm font-medium select-none",
                                        children: (0, i.jsx)(d.A, { ...v.publicKey }),
                                      }),
                                      (0, i.jsx)(x.TM, {
                                        id: "feed-sftp-public-key",
                                        variant: "outlined",
                                        rows: 3,
                                        required: !0,
                                        maxLength: 8192,
                                        disabled: eK || e_,
                                        value: ew,
                                        onChange: (e) => eP(e.target.value),
                                        placeholder: ed.formatMessage({
                                          id: "businessProfiles.feeds.sftp.keyPlaceholder",
                                          defaultMessage: "Enter your configured SSH public key",
                                          description:
                                            "Placeholder requesting the public SSH key used by the SFTP client, never a private key",
                                        }),
                                      }),
                                    ],
                                  })
                                : (0, i.jsxs)(i.Fragment, {
                                    children: [
                                      (0, i.jsx)("label", {
                                        htmlFor: "feed-sftp-password",
                                        className: "text-sm font-medium select-none",
                                        children: (0, i.jsx)(d.A, { ...v.password }),
                                      }),
                                      null != ej
                                        ? (0, i.jsxs)("div", {
                                            className:
                                              "flex items-center gap-3 rounded-xl border border-default px-6 py-4",
                                            children: [
                                              (0, i.jsx)("output", {
                                                id: "feed-sftp-password",
                                                className: "min-w-0 flex-1 text-sm break-all select-text",
                                                "aria-label": ed.formatMessage({
                                                  id: "businessProfiles.feeds.sftp.oneTimePassword",
                                                  defaultMessage: "Generated password",
                                                  description: "One-time display of a newly generated SFTP password",
                                                }),
                                                children: ej,
                                              }),
                                              (0, i.jsx)(p.i, {
                                                iconOnly: !0,
                                                variant: "codeBlock",
                                                ariaLabel: ed.formatMessage({
                                                  id: "businessProfiles.feeds.sftp.copyCredential",
                                                  defaultMessage: "Copy password",
                                                  description: "Copy the one-time SFTP password to the clipboard",
                                                }),
                                                onCopy: (e) => (0, y.E)(ej, e),
                                              }),
                                            ],
                                          })
                                        : (0, i.jsx)(u.$, {
                                            color: "outlineGhost",
                                            size: "beaconAction",
                                            loading: eE,
                                            disabled: eK,
                                            onClick: () => e$(!1),
                                            children: (0, i.jsx)(d.A, {
                                              id: "businessProfiles.feeds.sftp.generatePassword",
                                              defaultMessage: "Generate new password",
                                              description:
                                                "Explicitly replace the SFTP password; the returned password is only shown once",
                                            }),
                                          }),
                                    ],
                                  }),
                              (0, i.jsxs)("div", {
                                className: "flex flex-wrap items-center gap-x-1",
                                children: [
                                  "password" === eb
                                    ? (0, i.jsx)("p", {
                                        className: "text-xs text-tertiary",
                                        children:
                                          null == ej && eh?.configured
                                            ? (0, i.jsx)(d.A, {
                                                id: "businessProfiles.feeds.sftp.passwordResetHelp",
                                                defaultMessage: "Generating a new password replaces the previous one",
                                                description:
                                                  "Warns that generating a password for an existing SFTP connection rotates its current credential",
                                              })
                                            : (0, i.jsx)(d.A, {
                                                id: "businessProfiles.feeds.sftp.passwordHelp",
                                                defaultMessage:
                                                  "Passwords are only shown once. Save yours before continuing",
                                                description:
                                                  "Save the newly generated password now because it cannot be retrieved later",
                                              }),
                                      })
                                    : null,
                                  (0, i.jsxs)(m.AM, {
                                    children: [
                                      (0, i.jsx)(m.Wv, {
                                        asChild: !0,
                                        children: (0, i.jsx)(u.$, {
                                          color: "ghostTertiary",
                                          size: "compact",
                                          children: (0, i.jsx)(d.A, {
                                            id: "businessProfiles.feeds.sftp.viewDocs",
                                            defaultMessage: "View docs",
                                            description:
                                              "Open instructions for uploading complete product files using SFTP",
                                          }),
                                        }),
                                      }),
                                      (0, i.jsx)(m.hl, {
                                        size: "large",
                                        children: (0, i.jsx)("div", {
                                          className: "p-3",
                                          children: (0, i.jsxs)("ol", {
                                            className:
                                              "flex list-decimal flex-col gap-2 ps-5 text-sm text-secondary select-text",
                                            children: [
                                              (0, i.jsx)("li", {
                                                children: (0, i.jsx)(d.A, {
                                                  id: "businessProfiles.feeds.sftp.uploadPartInstruction",
                                                  defaultMessage:
                                                    "Upload catalog.csv.part in the root directory and finish the transfer before renaming it to catalog.csv",
                                                  description:
                                                    "Required SFTP protocol: upload to a temporary .part filename, close the transfer, then rename to a completed filename",
                                                }),
                                              }),
                                              (0, i.jsx)("li", {
                                                children: (0, i.jsx)(d.A, {
                                                  id: "businessProfiles.feeds.sftp.refreshPartInstruction",
                                                  defaultMessage:
                                                    "To refresh, upload the new .part file, remove the old final file, then rename the new file. Keep the .part file present until the rename",
                                                  description:
                                                    "Azure SFTP cannot rename over an existing final file; the temporary file blocks ingestion during replacement",
                                                }),
                                              }),
                                              (0, i.jsx)("li", {
                                                children: (0, i.jsx)(d.A, {
                                                  id: "businessProfiles.feeds.sftp.waitForCompleteInstruction",
                                                  defaultMessage:
                                                    "Do not upload directly to the final filename. Processing waits while any .part file remains; an upload appears in history only after completion is detected",
                                                  description:
                                                    "Incomplete SFTP transfers are not accepted processing runs and must not be reported as uploaded or processed",
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          eL,
                        ],
                      })),
                (es[75] = eb),
                (es[76] = eL),
                (es[77] = e_),
                (es[78] = ed),
                (es[79] = ej),
                (es[80] = eK),
                (es[81] = eI),
                (es[82] = ez),
                (es[83] = e$),
                (es[84] = eE),
                (es[85] = eh?.configured),
                (es[86] = ew),
                (es[87] = eu),
                (es[88] = z))
              : (z = es[88]),
            es[89] !== eH
              ? ((K = null != eH ? (0, i.jsx)(S.A, { error: eH }) : null), (es[89] = eH), (es[90] = K))
              : (K = es[90]),
            es[91] !== eq
              ? ((W =
                  null != eq
                    ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(S.A, { error: eq }),
                          (0, i.jsx)("p", {
                            className: "text-sm text-secondary",
                            children: (0, i.jsx)(d.A, {
                              id: "businessProfiles.feeds.sftp.intakeFailed",
                              defaultMessage:
                                "The intake change was not confirmed. Retry the same action; you do not need to generate credentials again",
                              description:
                                "A failed or ambiguous intake update does not invalidate the successful credential response",
                            }),
                          }),
                        ],
                      })
                    : null),
                (es[91] = eq),
                (es[92] = W))
              : (W = es[92]),
            es[93] !== er || es[94] !== eu
              ? ((B = () => {
                  "choose" === eu ? er() : ep("choose")
                }),
                (es[93] = er),
                (es[94] = eu),
                (es[95] = B))
              : (B = es[95]),
            es[96] === Symbol.for("react.memo_cache_sentinel")
              ? ((U = (0, i.jsx)(d.A, {
                  id: "businessProfiles.feeds.sftp.back",
                  defaultMessage: "Back",
                  description: "Return to the previous step of SFTP setup",
                })),
                (es[96] = U))
              : (U = es[96]),
            es[97] !== eK || es[98] !== B
              ? ((O = (0, i.jsx)(u.$, {
                  color: "outlineGhost",
                  size: "formAction",
                  radius: "full",
                  disabled: eK,
                  onClick: B,
                  children: U,
                })),
                (es[97] = eK),
                (es[98] = B),
                (es[99] = O))
              : (O = es[99]))
          let eQ = eK || ("configure" === eu && "password" === eb && (!eh?.configured || eW))
          ;(es[100] !== eu
            ? (($ =
                "choose" === eu &&
                (0, i.jsx)(d.A, {
                  id: "businessProfiles.feeds.sftp.continue",
                  defaultMessage: "Continue",
                  description: "Continue from SFTP authentication selection to configuration",
                })),
              (es[100] = eu),
              (es[101] = $))
            : ($ = es[101]),
            es[102] !== eu
              ? ((L =
                  "configure" === eu &&
                  (0, i.jsx)(d.A, {
                    id: "businessProfiles.feeds.sftp.connectImport",
                    defaultMessage: "Connect and import",
                    description:
                      "Save SSH credentials if needed and enable the SFTP worker to import completed uploads",
                  })),
                (es[102] = eu),
                (es[103] = L))
              : (L = es[103]),
            es[104] !== eK || es[105] !== eQ || es[106] !== $ || es[107] !== L
              ? ((Q = (0, i.jsxs)(u.$, {
                  color: "primary",
                  size: "formAction",
                  radius: "full",
                  type: "submit",
                  loading: eK,
                  disabled: eQ,
                  children: [$, L],
                })),
                (es[104] = eK),
                (es[105] = eQ),
                (es[106] = $),
                (es[107] = L),
                (es[108] = Q))
              : (Q = es[108]))
          let eV = "configure" === eu ? eB : null
          ;(es[109] !== O || es[110] !== Q || es[111] !== eV
            ? ((V = (0, i.jsxs)("div", { className: "flex flex-wrap gap-2 select-none", children: [O, Q, eV] })),
              (es[109] = O),
              (es[110] = Q),
              (es[111] = eV),
              (es[112] = V))
            : (V = es[112]),
            es[113] !== eU ||
            es[114] !== D ||
            es[115] !== q ||
            es[116] !== z ||
            es[117] !== K ||
            es[118] !== W ||
            es[119] !== V
              ? ((Y = (0, i.jsxs)("form", {
                  className: "m-auto flex w-full max-w-xl flex-col gap-6 px-8 py-20",
                  onSubmit: D,
                  children: [q, z, K, W, eU, V],
                })),
                (es[113] = eU),
                (es[114] = D),
                (es[115] = q),
                (es[116] = z),
                (es[117] = K),
                (es[118] = W),
                (es[119] = V),
                (es[120] = Y))
              : (Y = es[120]),
            es[121] !== el || es[122] !== eK || es[123] !== I || es[124] !== Y
              ? ((Z = (0, i.jsx)(_.I, { onExit: el, busy: eK, preview: I, children: Y })),
                (es[121] = el),
                (es[122] = eK),
                (es[123] = I),
                (es[124] = Y),
                (es[125] = Z))
              : (Z = es[125]))
          let eY = Z
          return (
            es[126] !== eq
              ? ((J = null != eq ? (0, i.jsx)(S.A, { error: eq }) : null), (es[126] = eq), (es[127] = J))
              : (J = es[127]),
            es[128] !== eB || es[129] !== eU || es[130] !== J
              ? ((X = (0, i.jsxs)(i.Fragment, { children: [J, eU, eB] })),
                (es[128] = eB),
                (es[129] = eU),
                (es[130] = J),
                (es[131] = X))
              : (X = es[131]),
            es[132] !== et || es[133] !== ei || es[134] !== el || es[135] !== eY || es[136] !== X
              ? ((ee = (0, i.jsx)(P.K, { accountId: et, manager: ei, onExit: el, fallbackActions: X, children: eY })),
                (es[132] = et),
                (es[133] = ei),
                (es[134] = el),
                (es[135] = eY),
                (es[136] = X),
                (es[137] = ee))
              : (ee = es[137]),
            ee
          )
        },
      },
    )
  },
}
//# sourceMappingURL=84934.a0aeb0091f.js.map
