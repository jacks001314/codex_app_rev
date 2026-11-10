export const __rspack_esm_ids = [84934]
export const __webpack_modules__ = {
  mIK0(e, s, t) {
    var i = t("ABep"),
      n = t("QosV"),
      a = t("xSOA"),
      o = t("zd8w"),
      r = t("Wf1j"),
      l = t("oyxz"),
      d = t("Qgfj"),
      c = t("Ghh3"),
      f = t("ygO2"),
      u = t("uuN8"),
      p = t("mUDD"),
      h = t("nzx4"),
      m = t("zLIa"),
      x = t("AWNZ"),
      g = t("ZEx5"),
      b = t("aepO"),
      w = t("eShZ"),
      y = t("WIbF"),
      P = t("UeZw"),
      j = t("tzGG"),
      S = t("VVBW")
    let _ = (0, d.YK)({
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
            d,
            v,
            k,
            F,
            T,
            A,
            M,
            N,
            C,
            H,
            I,
            E,
            G,
            D,
            R,
            z,
            q,
            W,
            B,
            K,
            O,
            U,
            $,
            L,
            V,
            Y,
            Z,
            Q,
            J,
            X = (0, n.c)(132),
            {
              accountId: ee,
              manager: es,
              initialFeedId: et,
              getFeedId: ei,
              configuration: en,
              onBack: ea,
              onClose: eo,
            } = e,
            er = (0, r.A)(),
            el = es.profile.business_profile_id,
            [ed, ec] = (0, o.useState)("choose"),
            [ef, eu] = (0, o.useState)(en),
            [ep, eh] = (0, o.useState)(et),
            [em, ex] = (0, o.useState)("password"),
            [eg, eb] = (0, o.useState)(""),
            [ew, ey] = (0, o.useState)(null),
            [eP, ej] = (0, o.useState)(!1),
            [eS, e_] = (0, o.useState)(!en?.configured),
            [ev, ek] = (0, o.useState)(null)
          X[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (e) => {
                e instanceof w.fk &&
                  [401, 403, 404].includes(e.status) &&
                  (ey(null), eu(void 0), ej(!1), ec("configure"))
              }),
              (X[0] = s))
            : (s = X[0])
          let eF = s
          X[1] !== ee || X[2] !== em || X[3] !== ei || X[4] !== el || X[5] !== ef?.configured || X[6] !== eg
            ? ((t = {
                mutationFn: async () => {
                  let e = await ei()
                  return (eh(e),
                  ef?.configured ||
                    (await c.Request.safePost(
                      "/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/sftp",
                      {
                        additionalHeaders: { "ChatGPT-Account-ID": ee },
                        parameters: { path: { business_profile_id: el, feed_id: e } },
                        requestBody: {
                          authentication_method: em,
                          ssh_public_key: "ssh_key" === em ? eg.trim() : void 0,
                        },
                        expectedErrorStatuses: [400, 401, 403, 404, 409, 422],
                      },
                    )),
                  "ssh_key" === em)
                    ? c.Request.safePost(
                        "/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/sftp/ssh-key",
                        {
                          additionalHeaders: { "ChatGPT-Account-ID": ee },
                          parameters: { path: { business_profile_id: el, feed_id: e } },
                          requestBody: { ssh_public_key: eg.trim() },
                          expectedErrorStatuses: [400, 401, 403, 404, 409, 422],
                        },
                      )
                    : c.Request.safePost(
                        "/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/sftp/password-reset",
                        {
                          additionalHeaders: { "ChatGPT-Account-ID": ee },
                          parameters: { path: { business_profile_id: el, feed_id: e } },
                          expectedErrorStatuses: [400, 401, 403, 404, 409],
                        },
                      )
                },
                retry: !1,
                gcTime: 0,
                onError: eF,
              }),
              (X[1] = ee),
              (X[2] = em),
              (X[3] = ei),
              (X[4] = el),
              (X[5] = ef?.configured),
              (X[6] = eg),
              (X[7] = t))
            : (t = X[7])
          let { mutate: eT, isPending: eA, error: eM, reset: eN } = (0, a.n)(t)
          X[8] !== ee || X[9] !== ei || X[10] !== el
            ? ((d = {
                mutationFn: async (e) => {
                  let s = await ei()
                  return (
                    eh(s),
                    c.Request.safePatch("/shopping/business-profiles/{business_profile_id}/feeds/{feed_id}/sftp", {
                      additionalHeaders: { "ChatGPT-Account-ID": ee },
                      parameters: { path: { business_profile_id: el, feed_id: s } },
                      requestBody: { enabled: e },
                      expectedErrorStatuses: [400, 401, 403, 404, 409],
                    })
                  )
                },
                retry: !1,
                gcTime: 0,
                onError: eF,
              }),
              (X[8] = ee),
              (X[9] = ei),
              (X[10] = el),
              (X[11] = d))
            : (d = X[11])
          let { mutate: eC, isPending: eH, variables: eI, error: eE, reset: eG } = (0, a.n)(d),
            eD = eA || eH,
            eR = "password" === em && eS
          X[12] !== eH || X[13] !== eD || X[14] !== eI || X[15] !== eC || X[16] !== ef
            ? ((v =
                ef?.configured && ef.enabled
                  ? (0, i.jsx)(f.$, {
                      color: "ghost",
                      loading: eH && !1 === eI,
                      disabled: eD,
                      onClick: () =>
                        eC(!1, {
                          onSuccess: (e) => {
                            ;(eu({ ...e, password: null }), ek(!1), ey(null), ej(!1))
                          },
                        }),
                      children: (0, i.jsx)(l.A, {
                        id: "businessProfiles.feeds.sftp.disable",
                        defaultMessage: "Disable SFTP access and ingestion",
                        description: "Remove storage login access and stop polling for future SFTP uploads",
                      }),
                    })
                  : null),
              (X[12] = eH),
              (X[13] = eD),
              (X[14] = eI),
              (X[15] = eC),
              (X[16] = ef),
              (X[17] = v))
            : (v = X[17])
          let ez = v
          X[18] !== ev || X[19] !== eE
            ? ((k =
                !1 === ev && null == eE
                  ? (0, i.jsx)("p", {
                      role: "status",
                      className: "text-sm text-secondary",
                      children: (0, i.jsx)(l.A, {
                        id: "businessProfiles.feeds.sftp.intakeDisabled",
                        defaultMessage:
                          "SFTP access and intake disabled. Already-dispatched products may still finish processing",
                        description:
                          "Reports that intake was disabled without claiming already-dispatched processing was cancelled",
                      }),
                    })
                  : null),
              (X[18] = ev),
              (X[19] = eE),
              (X[20] = k))
            : (k = X[20])
          let eq = k
          X[21] !== eC
            ? ((F = function () {
                eC(!0, {
                  onSuccess: (e) => {
                    ;(eu({ ...e, password: null }), ek(!0), ey(null), ec("connected"))
                  },
                })
              }),
              (X[21] = eC),
              (X[22] = F))
            : (F = X[22])
          let eW = F
          X[23] !== em || X[24] !== eW || X[25] !== eG || X[26] !== eT
            ? ((T = function (e) {
                eT(void 0, {
                  onSuccess: (s) => {
                    ;(eu({ ...s, password: null }),
                      ey(s.password ?? null),
                      null != s.password && e_(!1),
                      ej("ssh_key" === em || null != s.password),
                      ek(null),
                      eG(),
                      ec("configure"),
                      e && eW())
                  },
                })
              }),
              (X[23] = em),
              (X[24] = eW),
              (X[25] = eG),
              (X[26] = eT),
              (X[27] = T))
            : (T = X[27])
          let eB = T
          ;(X[28] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = (0, i.jsx)("h2", {
                className: "text-sm font-medium select-none",
                children: (0, i.jsx)(l.A, {
                  id: "businessProfiles.feeds.sftp.connectionInfo",
                  defaultMessage: "Connection info",
                  description: "Details to enter into an SFTP client for the selected product feed",
                }),
              })),
              (X[28] = A))
            : (A = X[28]),
            X[29] !== ep || X[30] !== ef
              ? ((M =
                  null != ep || ef?.configured
                    ? (0, i.jsxs)("dl", {
                        className: "flex flex-col gap-3 rounded-xl border border-default p-6 text-sm select-text",
                        children: [
                          null != ep
                            ? (0, i.jsxs)("div", {
                                className: "flex min-w-0 flex-wrap justify-between gap-2",
                                children: [
                                  (0, i.jsx)("dt", {
                                    className: "text-secondary",
                                    children: (0, i.jsx)(l.A, {
                                      id: "businessProfiles.feeds.sftp.productFeed",
                                      defaultMessage: "Product feed",
                                      description: "Identifier of the product feed receiving SFTP files",
                                    }),
                                  }),
                                  (0, i.jsx)("dd", { className: "min-w-0 break-all", children: ep }),
                                ],
                              })
                            : null,
                          ef?.configured
                            ? ["host", "username", "root_path", "port"].map((e) =>
                                (0, i.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "flex min-w-0 flex-wrap justify-between gap-2 border-t border-default pt-3",
                                    children: [
                                      (0, i.jsx)("dt", {
                                        className: "text-secondary",
                                        children: (0, i.jsx)(l.A, { ..._[e] }),
                                      }),
                                      (0, i.jsx)("dd", { className: "min-w-0 break-all", children: ef[e] }),
                                    ],
                                  },
                                  e,
                                ),
                              )
                            : null,
                        ],
                      })
                    : null),
                (X[29] = ep),
                (X[30] = ef),
                (X[31] = M))
              : (M = X[31]),
            X[32] !== em || X[33] !== ef?.configured
              ? ((N = ef?.configured
                  ? null
                  : (0, i.jsx)("p", {
                      className: "text-sm text-secondary",
                      children:
                        "password" === em
                          ? (0, i.jsx)(l.A, {
                              id: "businessProfiles.feeds.sftp.pendingPasswordConnection",
                              defaultMessage: "Your connection details will appear after you generate a password",
                              description:
                                "A new SFTP feed is created and provisioned only when the user generates a password",
                            })
                          : (0, i.jsx)(l.A, {
                              id: "businessProfiles.feeds.sftp.pendingConnection",
                              defaultMessage:
                                "Your connection details will appear after you save your SSH key and connect",
                              description:
                                "An unprovisioned SSH feed cannot show a host or username until the public key has been saved",
                            }),
                    })),
                (X[32] = em),
                (X[33] = ef?.configured),
                (X[34] = N))
              : (N = X[34]),
            X[35] !== N || X[36] !== M
              ? ((C = (0, i.jsxs)(p.RW, { children: [A, M, N] })), (X[35] = N), (X[36] = M), (X[37] = C))
              : (C = X[37]))
          let eK = C
          if ("connected" === ed) {
            let e, s, t, n, a, o, r
            return (
              X[38] !== es
                ? ((e = (0, i.jsx)("div", {
                    inert: !0,
                    className: "mx-auto w-full max-w-sm overflow-hidden rounded-3xl opacity-30",
                    children: (0, i.jsx)(P.G, { manager: es }),
                  })),
                  (X[38] = es),
                  (X[39] = e))
                : (e = X[39]),
              X[40] === Symbol.for("react.memo_cache_sentinel")
                ? ((s = (0, i.jsx)("h1", {
                    className: "text-heading-lg leading-tight font-normal md:text-heading-app",
                    children: (0, i.jsx)(l.A, {
                      id: "businessProfiles.feeds.sftp.connectedTitle",
                      defaultMessage: "Your SFTP feed is connected",
                      description:
                        "SFTP intake was enabled; this does not claim that a product file has arrived or begun processing",
                    }),
                  })),
                  (X[40] = s))
                : (s = X[40]),
              X[41] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, i.jsxs)("div", {
                    role: "status",
                    className: "flex flex-col gap-2",
                    children: [
                      s,
                      (0, i.jsx)("p", {
                        className: "text-base text-secondary",
                        children: (0, i.jsx)(l.A, {
                          id: "businessProfiles.feeds.sftp.connectedDescription",
                          defaultMessage:
                            "We’ll import completed files you upload. Check upload history for processing results",
                          description:
                            "Explains when an enabled SFTP feed will import files and where to follow their status",
                        }),
                      }),
                    ],
                  })),
                  (X[41] = t))
                : (t = X[41]),
              X[42] === Symbol.for("react.memo_cache_sentinel")
                ? ((n = (0, i.jsx)(l.A, {
                    id: "businessProfiles.feeds.sftp.backToBusiness",
                    defaultMessage: "Back to business page",
                    description: "Return from completed SFTP setup to the business product feed",
                  })),
                  (X[42] = n))
                : (n = X[42]),
              X[43] !== eo
                ? ((a = (0, i.jsx)(f.$, { color: "primary", size: "beaconAction", onClick: eo, children: n })),
                  (X[43] = eo),
                  (X[44] = a))
                : (a = X[44]),
              X[45] !== eK || X[46] !== a
                ? ((o = (0, i.jsxs)("div", {
                    className: "m-auto flex w-full max-w-xl flex-col items-start gap-6 px-8 py-20 select-none",
                    children: [t, eK, a],
                  })),
                  (X[45] = eK),
                  (X[46] = a),
                  (X[47] = o))
                : (o = X[47]),
              X[48] !== eo || X[49] !== e || X[50] !== o
                ? ((r = (0, i.jsx)(S.I, { onExit: eo, completed: !0, preview: e, children: o })),
                  (X[48] = eo),
                  (X[49] = e),
                  (X[50] = o),
                  (X[51] = r))
                : (r = X[51]),
              r
            )
          }
          ;(X[52] !== es ? ((H = (0, i.jsx)(P.G, { manager: es })), (X[52] = es), (X[53] = H)) : (H = X[53]),
            X[54] !== em ||
            X[55] !== eP ||
            X[56] !== eW ||
            X[57] !== eR ||
            X[58] !== eD ||
            X[59] !== eB ||
            X[60] !== ef?.configured ||
            X[61] !== ed
              ? ((I = (e) => {
                  ;(e.preventDefault(),
                    eD ||
                      ("choose" === ed
                        ? ec("configure")
                        : "ssh_key" !== em || eP
                          ? ef?.configured && !eR && eW()
                          : eB(!0)))
                }),
                (X[54] = em),
                (X[55] = eP),
                (X[56] = eW),
                (X[57] = eR),
                (X[58] = eD),
                (X[59] = eB),
                (X[60] = ef?.configured),
                (X[61] = ed),
                (X[62] = I))
              : (I = X[62]),
            X[63] !== ed
              ? ((E = (0, i.jsx)("h1", {
                  className: "text-heading-lg leading-tight font-normal md:text-heading-app",
                  children:
                    "choose" === ed
                      ? (0, i.jsx)(l.A, {
                          id: "businessProfiles.feeds.sftp.connectTitle",
                          defaultMessage: "Connect with SFTP",
                          description: "Heading for selecting how to authenticate to the business profile's SFTP feed",
                        })
                      : (0, i.jsx)(l.A, {
                          id: "businessProfiles.feeds.sftp.configureTitle",
                          defaultMessage: "Configure SFTP",
                          description: "Heading for configuring an SFTP client with the feed's credentials",
                        }),
                })),
                (G =
                  "configure" === ed
                    ? (0, i.jsx)("p", {
                        className: "text-base text-secondary",
                        children: (0, i.jsx)(l.A, {
                          id: "businessProfiles.feeds.sftp.configureDescription",
                          defaultMessage:
                            "Use these details to configure SFTP. We’ll import completed product files after you connect",
                          description:
                            "Configure an SFTP client, then enable the server to watch for completed uploads; connecting does not immediately validate products",
                        }),
                      })
                    : null),
                (X[63] = ed),
                (X[64] = E),
                (X[65] = G))
              : ((E = X[64]), (G = X[65])),
            X[66] !== E || X[67] !== G
              ? ((D = (0, i.jsxs)("div", { className: "flex flex-col gap-1 select-none", children: [E, G] })),
                (X[66] = E),
                (X[67] = G),
                (X[68] = D))
              : (D = X[68]),
            X[69] !== em ||
            X[70] !== eK ||
            X[71] !== eP ||
            X[72] !== er ||
            X[73] !== ew ||
            X[74] !== eD ||
            X[75] !== eN ||
            X[76] !== eG ||
            X[77] !== eB ||
            X[78] !== eA ||
            X[79] !== ef?.configured ||
            X[80] !== eg ||
            X[81] !== ed
              ? ((R =
                  "choose" === ed
                    ? (0, i.jsx)("fieldset", {
                        disabled: eD,
                        children: (0, i.jsx)(g.t, {
                          variant: "form",
                          children: ["password", "ssh_key"].map((e) =>
                            (0, i.jsx)(
                              x.lu,
                              {
                                id: `feed-sftp-${e}`,
                                ariaLabel: er.formatMessage(_[e]),
                                label: (0, i.jsx)(l.A, { ..._[e] }),
                                description:
                                  "password" === e
                                    ? (0, i.jsx)(l.A, {
                                        id: "businessProfiles.feeds.sftp.passwordOption",
                                        defaultMessage: "Generate a password and save it in your SFTP client",
                                        description: "Explanation of password authentication for an SFTP product feed",
                                      })
                                    : (0, i.jsx)(l.A, {
                                        id: "businessProfiles.feeds.sftp.sshOption",
                                        defaultMessage:
                                          "Paste a public key. SFTP client will use the matching private key",
                                        description:
                                          "Explanation of public key authentication for an SFTP product feed; the private key stays in the client",
                                      }),
                                name: "feed-sftp-authentication",
                                value: e,
                                checked: em === e,
                                onChange: () => {
                                  e !== em && (ex(e), ej(!1), ey(null), eb(""), eN(), eG(), ek(null))
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
                          (0, i.jsxs)(p.RW, {
                            children: [
                              "ssh_key" === em
                                ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                      (0, i.jsx)("label", {
                                        htmlFor: "feed-sftp-public-key",
                                        className: "text-sm font-medium select-none",
                                        children: (0, i.jsx)(l.A, { ..._.publicKey }),
                                      }),
                                      (0, i.jsx)(m.TM, {
                                        id: "feed-sftp-public-key",
                                        variant: "outlined",
                                        rows: 3,
                                        required: !0,
                                        maxLength: 8192,
                                        disabled: eD || eP,
                                        value: eg,
                                        onChange: (e) => eb(e.target.value),
                                        placeholder: er.formatMessage({
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
                                        children: (0, i.jsx)(l.A, { ..._.password }),
                                      }),
                                      null != ew
                                        ? (0, i.jsxs)("div", {
                                            className:
                                              "flex items-center gap-3 rounded-xl border border-default px-6 py-4",
                                            children: [
                                              (0, i.jsx)("output", {
                                                id: "feed-sftp-password",
                                                className: "min-w-0 flex-1 text-sm break-all select-text",
                                                "aria-label": er.formatMessage({
                                                  id: "businessProfiles.feeds.sftp.oneTimePassword",
                                                  defaultMessage: "Generated password",
                                                  description: "One-time display of a newly generated SFTP password",
                                                }),
                                                children: ew,
                                              }),
                                              (0, i.jsx)(u.i, {
                                                iconOnly: !0,
                                                variant: "codeBlock",
                                                ariaLabel: er.formatMessage({
                                                  id: "businessProfiles.feeds.sftp.copyCredential",
                                                  defaultMessage: "Copy password",
                                                  description: "Copy the one-time SFTP password to the clipboard",
                                                }),
                                                onCopy: (e) => (0, b.E)(ew, e),
                                              }),
                                            ],
                                          })
                                        : (0, i.jsx)(f.$, {
                                            color: "outlineGhost",
                                            size: "beaconAction",
                                            loading: eA,
                                            disabled: eD,
                                            onClick: () => eB(!1),
                                            children: (0, i.jsx)(l.A, {
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
                                  "password" === em
                                    ? (0, i.jsx)("p", {
                                        className: "text-xs text-tertiary",
                                        children:
                                          null == ew && ef?.configured
                                            ? (0, i.jsx)(l.A, {
                                                id: "businessProfiles.feeds.sftp.passwordResetHelp",
                                                defaultMessage: "Generating a new password replaces the previous one",
                                                description:
                                                  "Warns that generating a password for an existing SFTP connection rotates its current credential",
                                              })
                                            : (0, i.jsx)(l.A, {
                                                id: "businessProfiles.feeds.sftp.passwordHelp",
                                                defaultMessage:
                                                  "Passwords are only shown once. Save yours before continuing",
                                                description:
                                                  "Save the newly generated password now because it cannot be retrieved later",
                                              }),
                                      })
                                    : null,
                                  (0, i.jsxs)(h.AM, {
                                    children: [
                                      (0, i.jsx)(h.Wv, {
                                        asChild: !0,
                                        children: (0, i.jsx)(f.$, {
                                          color: "ghostTertiary",
                                          size: "compact",
                                          children: (0, i.jsx)(l.A, {
                                            id: "businessProfiles.feeds.sftp.viewDocs",
                                            defaultMessage: "View docs",
                                            description:
                                              "Open instructions for uploading complete product files using SFTP",
                                          }),
                                        }),
                                      }),
                                      (0, i.jsx)(h.hl, {
                                        size: "large",
                                        children: (0, i.jsx)("div", {
                                          className: "p-3",
                                          children: (0, i.jsxs)("ol", {
                                            className:
                                              "flex list-decimal flex-col gap-2 ps-5 text-sm text-secondary select-text",
                                            children: [
                                              (0, i.jsx)("li", {
                                                children: (0, i.jsx)(l.A, {
                                                  id: "businessProfiles.feeds.sftp.uploadPartInstruction",
                                                  defaultMessage:
                                                    "Upload catalog.csv.part in the root directory and finish the transfer before renaming it to catalog.csv",
                                                  description:
                                                    "Required SFTP protocol: upload to a temporary .part filename, close the transfer, then rename to a completed filename",
                                                }),
                                              }),
                                              (0, i.jsx)("li", {
                                                children: (0, i.jsx)(l.A, {
                                                  id: "businessProfiles.feeds.sftp.refreshPartInstruction",
                                                  defaultMessage:
                                                    "To refresh, upload the new .part file, remove the old final file, then rename the new file. Keep the .part file present until the rename",
                                                  description:
                                                    "Azure SFTP cannot rename over an existing final file; the temporary file blocks ingestion during replacement",
                                                }),
                                              }),
                                              (0, i.jsx)("li", {
                                                children: (0, i.jsx)(l.A, {
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
                          eK,
                        ],
                      })),
                (X[69] = em),
                (X[70] = eK),
                (X[71] = eP),
                (X[72] = er),
                (X[73] = ew),
                (X[74] = eD),
                (X[75] = eN),
                (X[76] = eG),
                (X[77] = eB),
                (X[78] = eA),
                (X[79] = ef?.configured),
                (X[80] = eg),
                (X[81] = ed),
                (X[82] = R))
              : (R = X[82]),
            X[83] !== eM
              ? ((z = null != eM ? (0, i.jsx)(j.A, { error: eM }) : null), (X[83] = eM), (X[84] = z))
              : (z = X[84]),
            X[85] !== eE
              ? ((q =
                  null != eE
                    ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(j.A, { error: eE }),
                          (0, i.jsx)("p", {
                            className: "text-sm text-secondary",
                            children: (0, i.jsx)(l.A, {
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
                (X[85] = eE),
                (X[86] = q))
              : (q = X[86]),
            X[87] !== ea || X[88] !== ed
              ? ((W = () => {
                  "choose" === ed ? ea() : ec("choose")
                }),
                (X[87] = ea),
                (X[88] = ed),
                (X[89] = W))
              : (W = X[89]),
            X[90] === Symbol.for("react.memo_cache_sentinel")
              ? ((B = (0, i.jsx)(l.A, {
                  id: "businessProfiles.feeds.sftp.back",
                  defaultMessage: "Back",
                  description: "Return to the previous step of SFTP setup",
                })),
                (X[90] = B))
              : (B = X[90]),
            X[91] !== eD || X[92] !== W
              ? ((K = (0, i.jsx)(f.$, {
                  color: "outlineGhost",
                  size: "formAction",
                  radius: "full",
                  disabled: eD,
                  onClick: W,
                  children: B,
                })),
                (X[91] = eD),
                (X[92] = W),
                (X[93] = K))
              : (K = X[93]))
          let eO = eD || ("configure" === ed && "password" === em && (!ef?.configured || eR))
          ;(X[94] !== ed
            ? ((O =
                "choose" === ed &&
                (0, i.jsx)(l.A, {
                  id: "businessProfiles.feeds.sftp.continue",
                  defaultMessage: "Continue",
                  description: "Continue from SFTP authentication selection to configuration",
                })),
              (X[94] = ed),
              (X[95] = O))
            : (O = X[95]),
            X[96] !== ed
              ? ((U =
                  "configure" === ed &&
                  (0, i.jsx)(l.A, {
                    id: "businessProfiles.feeds.sftp.connectImport",
                    defaultMessage: "Connect and import",
                    description:
                      "Save SSH credentials if needed and enable the SFTP worker to import completed uploads",
                  })),
                (X[96] = ed),
                (X[97] = U))
              : (U = X[97]),
            X[98] !== eD || X[99] !== eO || X[100] !== O || X[101] !== U
              ? (($ = (0, i.jsxs)(f.$, {
                  color: "primary",
                  size: "formAction",
                  radius: "full",
                  type: "submit",
                  loading: eD,
                  disabled: eO,
                  children: [O, U],
                })),
                (X[98] = eD),
                (X[99] = eO),
                (X[100] = O),
                (X[101] = U),
                (X[102] = $))
              : ($ = X[102]))
          let eU = "configure" === ed ? ez : null
          ;(X[103] !== K || X[104] !== $ || X[105] !== eU
            ? ((L = (0, i.jsxs)("div", { className: "flex flex-wrap gap-2 select-none", children: [K, $, eU] })),
              (X[103] = K),
              (X[104] = $),
              (X[105] = eU),
              (X[106] = L))
            : (L = X[106]),
            X[107] !== eq ||
            X[108] !== I ||
            X[109] !== D ||
            X[110] !== R ||
            X[111] !== z ||
            X[112] !== q ||
            X[113] !== L
              ? ((V = (0, i.jsxs)("form", {
                  className: "m-auto flex w-full max-w-xl flex-col gap-6 px-8 py-20",
                  onSubmit: I,
                  children: [D, R, z, q, eq, L],
                })),
                (X[107] = eq),
                (X[108] = I),
                (X[109] = D),
                (X[110] = R),
                (X[111] = z),
                (X[112] = q),
                (X[113] = L),
                (X[114] = V))
              : (V = X[114]),
            X[115] !== eo || X[116] !== eD || X[117] !== H || X[118] !== V
              ? ((Y = (0, i.jsx)(S.I, { onExit: eo, busy: eD, preview: H, children: V })),
                (X[115] = eo),
                (X[116] = eD),
                (X[117] = H),
                (X[118] = V),
                (X[119] = Y))
              : (Y = X[119]))
          let e$ = Y
          return (
            X[120] !== eE
              ? ((Z = null != eE ? (0, i.jsx)(j.A, { error: eE }) : null), (X[120] = eE), (X[121] = Z))
              : (Z = X[121]),
            X[122] !== ez || X[123] !== eq || X[124] !== Z
              ? ((Q = (0, i.jsxs)(i.Fragment, { children: [Z, eq, ez] })),
                (X[122] = ez),
                (X[123] = eq),
                (X[124] = Z),
                (X[125] = Q))
              : (Q = X[125]),
            X[126] !== ee || X[127] !== es || X[128] !== eo || X[129] !== e$ || X[130] !== Q
              ? ((J = (0, i.jsx)(y.K, { accountId: ee, manager: es, onExit: eo, fallbackActions: Q, children: e$ })),
                (X[126] = ee),
                (X[127] = es),
                (X[128] = eo),
                (X[129] = e$),
                (X[130] = Q),
                (X[131] = J))
              : (J = X[131]),
            J
          )
        },
      },
    )
  },
}
//# sourceMappingURL=84934.9d3243b2ca.js.map
