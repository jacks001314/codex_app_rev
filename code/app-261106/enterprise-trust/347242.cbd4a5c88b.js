/*! LICENSE: 347242.cbd4a5c88b.js.LICENSE.txt */
export const __rspack_esm_ids = [347242]
export const __webpack_modules__ = {
  cnjf(e, t, n) {
    var i = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, i.jsxs)("svg", {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, i.jsx)("path", {
              d: "M21.6644 9.99309L21.637 9.92141L18.9146 2.81857C18.8602 2.67941 18.7624 2.56219 18.635 2.48122C18.5081 2.39984 18.3593 2.36147 18.2083 2.36948C18.0582 2.37749 17.914 2.43231 17.7963 2.52592C17.6795 2.62038 17.5952 2.74815 17.5555 2.89237L15.7174 8.51805H8.28061L6.44248 2.89237C6.40285 2.74815 6.31851 2.62038 6.20171 2.52592C6.08405 2.43231 5.93984 2.37749 5.78972 2.36948C5.63876 2.36147 5.4899 2.39984 5.36298 2.48122C5.23563 2.56219 5.1378 2.67941 5.0834 2.81857L2.36102 9.92183L2.3336 9.99309C1.52692 12.0973 2.21426 14.476 4.01064 15.8347C4.01401 15.8368 4.01696 15.8393 4.02034 15.8418L4.04438 15.86L8.1912 18.9644L10.2423 20.517L11.4905 21.4608C11.7911 21.6885 12.2069 21.6885 12.5076 21.4608L13.7557 20.517L15.8064 18.9644L19.9777 15.8418C19.9815 15.8389 19.9849 15.8364 19.9886 15.8334C21.7838 14.4747 22.4707 12.0969 21.6644 9.99309Z",
              fill: "#E24329",
            }),
            (0, i.jsx)("path", {
              d: "M21.6644 9.99309L21.637 9.9214C20.2864 10.1989 19.0424 10.7703 17.9772 11.5672C17.9599 11.5799 14.7404 14.0147 11.999 16.0873C14.0345 17.6264 15.8064 18.9644 15.8064 18.9644L19.9777 15.8418C19.9815 15.8389 19.9849 15.8364 19.9887 15.8334C21.7838 14.4747 22.4707 12.0969 21.6644 9.99309Z",
              fill: "#FC6D26",
            }),
            (0, i.jsx)("path", {
              d: "M8.19122 18.9644L10.2423 20.5171L11.4905 21.4608C11.7911 21.6885 12.2069 21.6885 12.5076 21.4608L13.7558 20.5171L15.8064 18.9644C15.8064 18.9644 14.0345 17.6264 11.999 16.0873C9.96314 17.6264 8.19122 18.9644 8.19122 18.9644Z",
              fill: "#FCA326",
            }),
            (0, i.jsx)("path", {
              d: "M6.02041 11.5672C4.95566 10.7707 3.71211 10.1989 2.36105 9.92183L2.33363 9.99309C1.52695 12.0973 2.21429 14.476 4.01067 15.8347C4.01404 15.8368 4.01699 15.8393 4.02037 15.8418L4.04441 15.86L8.19124 18.9644C8.19124 18.9644 9.96315 17.6264 11.999 16.0873C9.25768 14.0147 6.0377 11.5799 6.02041 11.5672Z",
              fill: "#FC6D26",
            }),
          ],
        })))
  },
  j1Su(e, t, n) {
    var i = n("OeLR"),
      r = n("swDA"),
      s = n("ASxG")
    let a = s.custom(h),
      o = s.boolean(),
      l = s.array(s.string()),
      d = s.enum(["allow", "deny"]),
      c = s.enum(["turn", "thread"]),
      u = a.transform(function (e) {
        return {
          access: f(e.access, d),
          downloads: f(e.downloads, d),
          uploads: f(e.uploads, d),
          fullCdpAccess: f(e.full_cdp_access, d),
          autoReview: f(e.auto_review, d),
          persistentApproval: f(e.persistent_approval, o),
          accessApprovalLifetime: f(e.access_approval_lifetime, c),
        }
      }),
      m = a.transform(function (e) {
        return {
          extension: null,
          allowWebmcp: f(e.allow_webmcp, o),
          allowHistoryAccess: f(e.allow_history_access, o),
          disableAutoReview: f(e.disable_auto_review, o),
          allowGlobalPersistentApproval: f(e.allow_global_persistent_approval, o),
          defaultOriginPolicy: f(e.default_origin_policy, u),
          origins: f(e.origins, g(u)),
        }
      }),
      p = a.transform(function (e) {
        let t = f(e.allowed_domains, l),
          n = f(e.denied_domains, l),
          i = f(e.domains, g(d))
        return (
          null != i && (null != t || null != n) && b(),
          {
            enabled: f(e.enabled, o),
            httpPort: null,
            socksPort: null,
            allowUpstreamProxy: f(e.allow_upstream_proxy, o),
            dangerouslyAllowNonLoopbackProxy: null,
            dangerouslyAllowAllUnixSockets: null,
            unixSockets: null,
            allowUnixSockets: null,
            allowLocalBinding: f(e.allow_local_binding, o),
            domains: i,
            reviewDomains: f(e.review_domains, l),
            managedAllowedDomainsOnly: f(e.managed_allowed_domains_only, o),
            allowedDomains: t,
            deniedDomains: n,
          }
        )
      })
    function v(e) {
      return (
        void 0 !== e.features && void 0 !== e.feature_requirements && b(),
        {
          modelProvider: null,
          modelProviders: null,
          allowedLoginMethods: null,
          cliAuthCredentialsStore: null,
          chatgptBaseUrl: null,
          additionalDeveloperInstructions: null,
          allowedApprovalPolicies: null,
          allowedApprovalsReviewers: null,
          allowedSandboxModes: null,
          allowedWindowsSandboxImplementations: null,
          allowedPermissionProfiles: null,
          defaultPermissions: null,
          allowedWebSearchModes: null,
          allowManagedHooksOnly: null,
          allowAppshots: null,
          allowRemoteControl: null,
          computerUse: null,
          inAppBrowser: null,
          hooks: null,
          enforceResidency: null,
          application: null,
          autoReview: null,
          models: null,
          sqliteHome: null,
          logDir: null,
          modelCatalogJson: null,
          checkForUpdateOnStartup: null,
          allowLoginShell: null,
          feedback: null,
          ...i.JF,
          allowBrowserAndComputerUse: f(e.allow_browser_and_computer_use, o),
          browserUse: f(e.browser_use, m),
          network: f(e.experimental_network, p),
          featureRequirements: f(void 0 === e.features ? e.feature_requirements : e.features, g(o)),
        }
      )
    }
    function h(e) {
      if (null == e || "object" != typeof e) return !1
      let t = Object.getPrototypeOf(e)
      return t === Object.prototype || null == t
    }
    function f(e, t) {
      return void 0 === e ? null : t.parse(e)
    }
    function g(e) {
      return a.transform((t) => Object.fromEntries(Object.entries(t).map(([t, n]) => [t, e.parse(n)])))
    }
    function b() {
      throw Error("Cloud requirements bundle is invalid.")
    }
    n.d(
      t,
      {},
      {
        f: function (e) {
          try {
            let t = e.requirements_toml?.enterprise_managed
            if (null == t || 0 === t.length) return { supportsIndependentSpeedModes: null, requirements: null }
            let n = {}
            for (let e of t.toReversed()) {
              let t = (0, r.qg)(e.contents, { integersAsBigInt: !0 })
              ;(v(t),
                (n = (function e(t, n) {
                  let i = new Map(Object.entries(t))
                  for (let [t, r] of Object.entries(n)) {
                    let n = i.get(t)
                    i.set(t, h(n) && h(r) ? e(n, r) : r)
                  }
                  return Object.fromEntries(i)
                })(n, t)))
            }
            return { supportsIndependentSpeedModes: null, requirements: v(n) }
          } catch {
            return b()
          }
        },
      },
    )
  },
  Laxs(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("zTeN"),
      a = n("zd8w"),
      o = n("Wf1j"),
      l = n("oyxz"),
      d = n("Sm6l"),
      c = n("SGsN"),
      u = n("Yewb"),
      m = n("OWtl"),
      p = n("rLsS"),
      v = n("X1Fy"),
      h = n("fUey")
    function f() {
      return { status: "unavailable" }
    }
    n.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            n,
            g,
            b,
            x,
            y = (0, r.c)(21),
            { connectorId: w, disabled: j, reconnect: S, compact: k } = e,
            M = void 0 !== k && k,
            A = (0, s.gh)(m.u)
          y[0] !== w ? ((t = (0, h.Pt)(w)), (y[0] = w), (y[1] = t)) : (t = y[1])
          let C = t,
            _ = (0, o.A)(),
            { status: N } = (0, u.XY)(),
            [E, P] = (0, a.useState)(!1),
            I = E || null != N,
            L = M ? "ghostActive" : "accent",
            z = j || I,
            T = M ? "menuRow" : "dialog"
          return (
            y[2] !== w || y[3] !== _ || y[4] !== C || y[5] !== A
              ? ((n = () => {
                  ;(P(!0),
                    (0, p.X_)(A, w, { allowGitLab: !0 })
                      .catch(f)
                      .then((e) => {
                        if ("unavailable" === e.status)
                          return void A.get(c.Id).danger(
                            _.formatMessage(
                              {
                                id: "environmentSetup.repositoryPicker.connectProvider.unavailable",
                                defaultMessage: "{provider} could not be loaded. Try again",
                                description:
                                  "Error when the provider plugin cannot be found to connect it from the environment repository picker",
                              },
                              { provider: C },
                            ),
                            {
                              errorAnalytics: {
                                toastId: "environmentSetup.repositoryPicker.connectGithub.unavailable",
                              },
                            },
                          )
                      })
                      .finally(() => {
                        P(!1)
                      }))
                }),
                (y[2] = w),
                (y[3] = _),
                (y[4] = C),
                (y[5] = A),
                (y[6] = n))
              : (n = y[6]),
            y[7] !== M || y[8] !== w
              ? ((g = M ? (0, i.jsx)(v.R, { connectorId: w, compact: !0 }) : null), (y[7] = M), (y[8] = w), (y[9] = g))
              : (g = y[9]),
            y[10] !== C || y[11] !== S
              ? ((b = S
                  ? (0, i.jsx)(l.A, {
                      id: "restricted.environmentSetup.repositoryPicker.reconnectAction.provider",
                      defaultMessage: "Reconnect {provider}",
                      values: { provider: C },
                      description: "Starts provider plugin setup to reconnect the user's account",
                    })
                  : (0, i.jsx)(l.A, {
                      id: "restricted.environmentSetup.repositoryPicker.connectAction.provider",
                      defaultMessage: "Connect {provider}",
                      values: { provider: C },
                      description: "Starts provider plugin setup to connect the user's account",
                    })),
                (y[10] = C),
                (y[11] = S),
                (y[12] = b))
              : (b = y[12]),
            y[13] !== I || y[14] !== L || y[15] !== z || y[16] !== T || y[17] !== n || y[18] !== g || y[19] !== b
              ? ((x = (0, i.jsxs)(d.$, {
                  "aria-busy": I,
                  color: L,
                  disabled: z,
                  loading: I,
                  size: T,
                  onClick: n,
                  children: [g, b],
                })),
                (y[13] = I),
                (y[14] = L),
                (y[15] = z),
                (y[16] = T),
                (y[17] = n),
                (y[18] = g),
                (y[19] = b),
                (y[20] = x))
              : (x = y[20]),
            x
          )
        },
      },
    )
  },
  Jd1d(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("oyxz"),
      a = n("Sm6l"),
      o = n("FrrB"),
      l = n("Laxs"),
      d = n("X1Fy"),
      c = n("fUey")
    function u() {
      return (0, i.jsx)("br", {})
    }
    n.d(
      t,
      {},
      {
        P: function (e) {
          let t,
            n,
            m,
            p,
            v,
            h = (0, r.c)(23),
            {
              connectorId: f,
              connectionIcon: g,
              connectionMessage: b,
              connectionAction: x,
              disabled: y,
              reconnect: w,
              status: j,
              onRetry: S,
            } = e
          h[0] !== f ? ((t = (0, c.Pt)(f)), (h[0] = f), (h[1] = t)) : (t = h[1])
          let k = t
          if ("error" === j) {
            let e, t, r
            ;(h[2] !== k
              ? ((e = (0, i.jsx)(s.A, {
                  id: "restricted.environmentSetup.repositoryPicker.connectionError.provider",
                  defaultMessage: "{provider} connections couldn’t load",
                  values: { provider: k },
                  description: "Error when provider connections cannot be loaded",
                })),
                (h[2] = k),
                (h[3] = e))
              : (e = h[3]),
              (n = e),
              h[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, i.jsx)(s.A, {
                    id: "restricted.environmentSetup.repositoryPicker.retryConnection",
                    defaultMessage: "Try again",
                    description: "Retries loading provider connections",
                  })),
                  (h[4] = t))
                : (t = h[4]),
              h[5] !== y || h[6] !== S
                ? ((r = (0, i.jsx)(a.$, { color: "accent", disabled: y, onClick: S, size: "dialog", children: t })),
                  (h[5] = y),
                  (h[6] = S),
                  (h[7] = r))
                : (r = h[7]),
              (m = r))
          } else if ("disabled" === j) {
            let e
            ;(h[8] !== k
              ? ((e = (0, i.jsx)(s.A, {
                  id: "restricted.environmentSetup.repositoryPicker.blockedGuidance.provider",
                  defaultMessage:
                    "{provider} isn’t enabled in this workspace<br></br>Ask a workspace admin to enable the {provider} plugin",
                  description:
                    "Explains that the workspace administrator has disabled the provider and how the user can request access. The br tag starts a new line.",
                  values: { provider: k, br: u },
                })),
                (h[8] = k),
                (h[9] = e))
              : (e = h[9]),
              (n = e))
          } else {
            let e
            ;((n = b),
              h[10] !== x || h[11] !== f || h[12] !== y || h[13] !== w
                ? ((e = x ?? (0, i.jsx)(l.z, { connectorId: f, disabled: y, reconnect: w })),
                  (h[10] = x),
                  (h[11] = f),
                  (h[12] = y),
                  (h[13] = w),
                  (h[14] = e))
                : (e = h[14]),
              (m = e))
          }
          return (
            h[15] !== g || h[16] !== f || h[17] !== j
              ? ((p = "connect" === j ? (g ?? (0, i.jsx)(d.R, { connectorId: f })) : void 0),
                (h[15] = g),
                (h[16] = f),
                (h[17] = j),
                (h[18] = p))
              : (p = h[18]),
            h[19] !== m || h[20] !== n || h[21] !== p
              ? ((v = (0, i.jsx)(o.A, {
                  className: "flex-1 select-none",
                  title: null,
                  description: n,
                  actions: m,
                  illustration: p,
                  illustrationSize: "icon",
                })),
                (h[19] = m),
                (h[20] = n),
                (h[21] = p),
                (h[22] = v))
              : (v = h[22]),
            v
          )
        },
      },
    )
  },
  X1Fy(e, t, n) {
    n.d(t, { R: () => m })
    var i = n("ABep"),
      r = n("QosV")
    let s = (0, n("iJY0").a)({
      name: "github-logo-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.333252, y: 1.300293, width: 13.333252, height: 13.004395 },
        visualBounds: { x: 1.333252, y: 1.300293, width: 13.333252, height: 13.004395 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.333252, y: 1.300293, width: 13.333252, height: 13.004395 },
        center: { x: 7.999878, y: 7.802491 },
        insets: { top: 1.300293, right: 1.333496, bottom: 1.695312, left: 1.333252 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999878, y: 7.802491 }, foreground: { x: 7.999878, y: 7.802491 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.99992 1.30029C11.6833 1.30029 14.6666 4.28363 14.6666 7.96696C14.6662 9.36379 14.2278 10.7253 13.4131 11.86C12.5984 12.9946 11.4484 13.8452 10.1249 14.292C9.79158 14.3586 9.66658 14.1503 9.66658 13.9753C9.66658 13.7503 9.67492 13.0336 9.67492 12.142C9.67492 11.517 9.46659 11.117 9.22492 10.9086C10.7083 10.742 12.2666 10.1753 12.2666 7.61696C12.2666 6.88363 12.0083 6.29196 11.5833 5.82529C11.6499 5.65863 11.8833 4.97529 11.5166 4.05863C11.5166 4.05863 10.9583 3.87529 9.68325 4.74196C9.14992 4.59196 8.58325 4.51696 8.01659 4.51696C7.44992 4.51696 6.88325 4.59196 6.34992 4.74196C5.07492 3.88363 4.51659 4.05863 4.51659 4.05863C4.14992 4.97529 4.38325 5.65863 4.44992 5.82529C4.02492 6.29196 3.76659 6.89196 3.76659 7.61696C3.76659 10.167 5.31659 10.742 6.79992 10.9086C6.60825 11.0753 6.43325 11.367 6.37492 11.8003C5.99159 11.9753 5.03325 12.2586 4.43325 11.2503C4.30825 11.0503 3.93325 10.5586 3.40825 10.567C2.84992 10.5753 3.18325 10.8836 3.41659 11.0086C3.69992 11.167 4.02492 11.7586 4.09992 11.9503C4.23325 12.3253 4.66659 13.042 6.34159 12.7336C6.34159 13.292 6.34992 13.817 6.34992 13.9753C6.34992 14.1503 6.22492 14.3503 5.89159 14.292C4.56378 13.85 3.40886 13.0011 2.59066 11.8658C1.77246 10.7305 1.33252 9.36638 1.33325 7.96696C1.33325 4.28363 4.31659 1.30029 7.99992 1.30029Z" fill="currentColor"/>',
    })
    var a = n("on57"),
      o = n("HOLv"),
      l = n("mS6z"),
      d = n("cnjf"),
      c = n("fUey")
    let u = { [c.Lw.GitHub]: l.A, [c.Lw.GitLab]: d.A }
    function m(e) {
      let t,
        n,
        l = (0, r.c)(10),
        { connectorId: d, compact: m, className: p } = e,
        v = void 0 !== m && m,
        h = (0, c.Pt)(d)
      if (v && h === c.Lw.GitHub) {
        let e, t
        return (
          l[0] !== p ? ((e = (0, a.A)("shrink-0", p)), (l[0] = p), (l[1] = e)) : (e = l[1]),
          l[2] !== e
            ? ((t = (0, i.jsx)(o.I, { asset: s, alignment: "composite", className: e })), (l[2] = e), (l[3] = t))
            : (t = l[3]),
          t
        )
      }
      let f = u[h]
      return (
        l[4] !== p || l[5] !== v
          ? ((t = v ? (0, a.A)("icon-xs shrink-0", p) : p), (l[4] = p), (l[5] = v), (l[6] = t))
          : (t = l[6]),
        l[7] !== f || l[8] !== t
          ? ((n = (0, i.jsx)(f, { className: t })), (l[7] = f), (l[8] = t), (l[9] = n))
          : (n = l[9]),
        n
      )
    }
  },
  BExl(e, t, n) {
    n.d(t, { CloudEnvironmentRepositoryPicker: () => $ })
    var i = n("ABep"),
      r = n("QosV"),
      s = n("on57"),
      a = n("i5ac"),
      o = n.n(a),
      l = n("zTeN"),
      d = n("zd8w"),
      c = n("Wf1j"),
      u = n("oyxz"),
      m = n("Rvvc"),
      p = n("Sm6l"),
      v = n("djbx"),
      h = n("mUDD"),
      f = n("Ot7V"),
      g = n("evwP"),
      b = n("FrrB"),
      x = n("okCa"),
      y = n("X3K1"),
      w = n("RNul"),
      j = n("mYWF"),
      S = n("OWtl"),
      k = n("S5Ho"),
      M = n("LH8k"),
      A = n("GEsy"),
      C = n("VPEh"),
      _ = n("Jd1d"),
      N = n("rLsS"),
      E = n("fUey"),
      P = n("HFi9"),
      I = n.n(P),
      L = n("bqtn"),
      z = n("bVeK"),
      T = n("X1Fy")
    function O(e) {
      let t,
        n,
        a,
        o,
        d,
        v,
        h,
        g,
        b,
        x,
        w,
        j,
        M,
        A,
        C,
        _ = (0, r.c)(61),
        {
          connector: P,
          connectors: O,
          disabled: H,
          headerAlignment: $,
          configureInAccountMenu: B,
          browsing: U,
          connectorsPending: q,
          getConfigureHref: F,
          onChange: W,
        } = e,
        G = (0, l.gh)(S.u),
        Q = (0, c.A)(),
        Z = P?.id ?? m.qD,
        K = P?.linkId,
        Y = (0, E.Pt)(Z),
        X = "github" === E.Gq[Y].accountHandleSource && null == K
      _[0] !== P ? ((t = (0, N.jh)(P)), (_[0] = P), (_[1] = t)) : (t = _[1])
      let J = "connected" === t.status
      _[2] !== Z || _[3] !== K ? ((n = { connectorId: Z, linkId: K }), (_[2] = Z), (_[3] = K), (_[4] = n)) : (n = _[4])
      let ee = X && !H && J
      _[5] !== ee ? ((a = { enabled: ee }), (_[5] = ee), (_[6] = a)) : (a = _[6])
      let { data: et, isError: en, isPending: ei } = (0, l._U)(k.cd, n, a)
      _[7] !== P?.link?.owner_profile?.nickname || _[8] !== et || _[9] !== X
        ? ((o = X ? et : P?.link?.owner_profile?.nickname?.trim()),
          (_[7] = P?.link?.owner_profile?.nickname),
          (_[8] = et),
          (_[9] = X),
          (_[10] = o))
        : (o = _[10])
      let er = o,
        es = U && (!X || !en) && !!er,
        ea = q || (U && X && ei)
      _[11] !== U || _[12] !== Z || _[13] !== O || _[14] !== H || _[15] !== F || _[16] !== Q || _[17] !== G
        ? ((d = Object.entries(I()(O, V))),
          (v = O.length > 1 || U),
          (h = U
            ? d.map((e) => {
                let [t, n] = e,
                  r =
                    n.find((e) => {
                      let { id: t } = e
                      return t === Z
                    }) ?? n[0]
                if (null == r) return null
                let s = F(r.id)
                return (0, i.jsx)(
                  L.ms.Item,
                  {
                    disabled: H,
                    href: s,
                    leftIcon: (0, i.jsx)(T.R, { connectorId: r.id, compact: !0 }),
                    "aria-label": Q.formatMessage(
                      {
                        id: "environmentSetup.repositoryPicker.connection.manageProviderConnections",
                        defaultMessage: "Manage {provider} connections",
                        description:
                          "Opens the connection settings for a repository provider; provider is GitHub or GitLab",
                      },
                      { provider: t },
                    ),
                    onClick: (e) => {
                      ;((0, f.PQ)({
                        event: e,
                        href: s,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser",
                      }),
                        (0, N.pI)(G, "none"))
                    },
                    children:
                      d.length > 1
                        ? t
                        : (0, i.jsx)(u.A, {
                            id: "environmentSetup.repositoryPicker.connection.manageProviderConnections",
                            defaultMessage: "Manage {provider} connections",
                            description:
                              "Opens the connection settings for a repository provider; provider is GitHub or GitLab",
                            values: { provider: t },
                          }),
                  },
                  t,
                )
              })
            : null),
          (_[11] = U),
          (_[12] = Z),
          (_[13] = O),
          (_[14] = H),
          (_[15] = F),
          (_[16] = Q),
          (_[17] = G),
          (_[18] = d),
          (_[19] = v),
          (_[20] = h))
        : ((d = _[18]), (v = _[19]), (h = _[20]))
      let eo = h
      _[21] !== Z ? ((g = (0, i.jsx)(T.R, { connectorId: Z, compact: !0 })), (_[21] = Z), (_[22] = g)) : (g = _[22])
      let el = es ? "group" : void 0,
        ed = es
          ? Q.formatMessage(
              {
                id: "restricted.environmentSetup.repositoryPicker.connection.browsingAs.provider",
                defaultMessage: "Browsing {provider} as @{handle}",
                description:
                  "Identifies the user signed in to the selected connection in the Cloud environment repository picker",
              },
              { provider: Y, handle: er },
            )
          : void 0
      ;(_[23] !== er || _[24] !== ea || _[25] !== P?.accountLabel || _[26] !== Y || _[27] !== es
        ? ((b =
            !es && ea
              ? (0, i.jsx)(y.X, { as: "span", className: "w-64 max-w-full", size: "sm" })
              : (0, i.jsx)("span", { className: "truncate", children: es ? er : (P?.accountLabel ?? Y) })),
          (_[23] = er),
          (_[24] = ea),
          (_[25] = P?.accountLabel),
          (_[26] = Y),
          (_[27] = es),
          (_[28] = b))
        : (b = _[28]),
        _[29] !== el || _[30] !== ed || _[31] !== b
          ? ((x = (0, i.jsx)("span", {
              id: "cloud-environment-repo-account",
              className: "flex h-5 min-w-0 items-center",
              role: el,
              "aria-label": ed,
              children: b,
            })),
            (_[29] = el),
            (_[30] = ed),
            (_[31] = b),
            (_[32] = x))
          : (x = _[32]),
        _[33] !== v ? ((w = v ? (0, i.jsx)(z.Aq_, {}) : null), (_[33] = v), (_[34] = w)) : (w = _[34]),
        _[35] !== x || _[36] !== w || _[37] !== g
          ? ((j = (0, i.jsxs)(i.Fragment, { children: [g, x, w] })), (_[35] = x), (_[36] = w), (_[37] = g), (_[38] = j))
          : (j = _[38]))
      let ec = j,
        eu = "start" === $ ? "justify-start" : "justify-center"
      return (
        _[39] !== eu
          ? ((M = (0, s.A)("flex min-h-7 max-w-full min-w-0 items-center gap-2 text-sm text-secondary", eu)),
            (_[39] = eu),
            (_[40] = M))
          : (M = _[40]),
        _[41] !== U ||
        _[42] !== B ||
        _[43] !== ec ||
        _[44] !== P?.accountLabel ||
        _[45] !== Z ||
        _[46] !== O ||
        _[47] !== H ||
        _[48] !== $ ||
        _[49] !== Q ||
        _[50] !== K ||
        _[51] !== eo ||
        _[52] !== W ||
        _[53] !== Y ||
        _[54] !== d ||
        _[55] !== es ||
        _[56] !== v
          ? ((A = v
              ? (0, i.jsxs)(L.Ab, {
                  align: "end",
                  contentMaxHeight: "list",
                  contentWidth: "menu",
                  disabled: H,
                  triggerButton: (0, i.jsx)(p.$, {
                    className: (0, s.A)("max-w-full", "start" === $ && !B && "-ms-2"),
                    allowShrink: !0,
                    "aria-describedby": es ? "cloud-environment-repo-account" : void 0,
                    "aria-label": Q.formatMessage(
                      {
                        id: "restricted.environmentSetup.repositoryPicker.connection.selectionLabel.provider",
                        defaultMessage: "{provider} connection: {connection}",
                        description:
                          "Accessible label for choosing a connected repository account; connection is the selected account identity or connection name",
                      },
                      { provider: Y, connection: P?.accountLabel ?? "" },
                    ),
                    color: "ghostSecondary",
                    disabled: H,
                    size: "settingsAction",
                    radius: "full",
                    children: ec,
                  }),
                  children: [
                    (0, i.jsxs)(L.ms.Group, {
                      children: [
                        (0, i.jsx)(L.ms.SectionLabel, {
                          children: (0, i.jsx)(u.A, {
                            id: "environmentSetup.repositoryPicker.connection.selectConnection",
                            defaultMessage: "Select connection",
                            description:
                              "Heading for selecting a connected repository account in the Cloud environment repository picker",
                          }),
                        }),
                        O.map((e) =>
                          (0, i.jsx)(
                            L.ms.Item,
                            {
                              leftIcon: (0, i.jsx)(T.R, { connectorId: e.id, compact: !0 }),
                              RightIcon: e.id === Z && e.linkId === K ? z.ALZ : void 0,
                              onSelect: () => W(e),
                              children:
                                e.accountLabel !== e.name
                                  ? (0, i.jsx)("span", {
                                      className: "flex min-w-0 items-center gap-2",
                                      children: (0, i.jsx)(u.A, {
                                        id: "environmentSetup.repositoryPicker.connection.accountAndProvider",
                                        defaultMessage:
                                          "<account>{accountName}</account> <provider>{providerName}</provider>",
                                        description:
                                          "Connected repository account followed by its provider name on the same line; account and provider tags style the two names",
                                        values: {
                                          accountName: e.accountLabel,
                                          providerName: e.name,
                                          account: D,
                                          provider: R,
                                        },
                                      }),
                                    })
                                  : e.accountLabel,
                            },
                            `${e.id}:${e.linkId ?? ""}`,
                          ),
                        ),
                      ],
                    }),
                    U
                      ? (0, i.jsx)(L.ms.Group, {
                          children:
                            d.length > 1
                              ? (0, i.jsx)(L.ms.SubmenuItem, {
                                  trigger: (0, i.jsx)(L.ms.Item, {
                                    disabled: H,
                                    children: (0, i.jsx)(u.A, {
                                      id: "environmentSetup.repositoryPicker.connection.manageConnections",
                                      defaultMessage: "Manage connections",
                                      description:
                                        "Expand or collapse links to repository provider connection settings",
                                    }),
                                  }),
                                  children: eo,
                                })
                              : eo,
                        })
                      : null,
                  ],
                })
              : (0, i.jsx)("div", {
                  className: (0, s.A)(
                    "flex min-w-0 items-center gap-1 text-base text-secondary",
                    "start" === $ && "-ms-1",
                  ),
                  children: ec,
                })),
            (_[41] = U),
            (_[42] = B),
            (_[43] = ec),
            (_[44] = P?.accountLabel),
            (_[45] = Z),
            (_[46] = O),
            (_[47] = H),
            (_[48] = $),
            (_[49] = Q),
            (_[50] = K),
            (_[51] = eo),
            (_[52] = W),
            (_[53] = Y),
            (_[54] = d),
            (_[55] = es),
            (_[56] = v),
            (_[57] = A))
          : (A = _[57]),
        _[58] !== M || _[59] !== A
          ? ((C = (0, i.jsx)("div", { className: M, children: A })), (_[58] = M), (_[59] = A), (_[60] = C))
          : (C = _[60]),
        C
      )
    }
    function R(e) {
      return (0, i.jsx)("span", { className: "truncate text-tertiary", children: e }, "provider")
    }
    function D(e) {
      return (0, i.jsx)("span", { className: "truncate", children: e }, "account")
    }
    function V(e) {
      let { id: t } = e
      return (0, E.Pt)(t)
    }
    function H(e) {
      let t,
        n,
        s,
        a,
        v,
        h,
        g,
        b,
        x,
        y,
        w,
        j,
        M,
        A,
        C,
        _,
        E,
        P,
        I,
        T,
        O,
        R = (0, r.c)(76),
        { connectorId: D, disabled: V, installation: H, linkId: $, onChange: B } = e,
        U = (0, l.gh)(S.u),
        q = (0, c.A)(),
        [F, W] = (0, d.useState)(!1)
      R[0] !== D || R[1] !== $ ? ((t = { connectorId: D, linkId: $ }), (R[0] = D), (R[1] = $), (R[2] = t)) : (t = R[2])
      let G = !V
      R[3] !== G ? ((n = { enabled: G }), (R[3] = G), (R[4] = n)) : (n = R[4])
      let { data: Q, isError: Z, isPending: K, refetch: Y } = (0, l._U)(k.ky, t, n)
      if (
        R[5] !== D ||
        R[6] !== Q?.app_installation_url ||
        R[7] !== Q?.memberships ||
        R[8] !== Q?.other ||
        R[9] !== V ||
        R[10] !== H ||
        R[11] !== q ||
        R[12] !== B ||
        R[13] !== F
      ) {
        let e, t, n, r, l, d, c, f
        ;(R[25] !== Q?.memberships ? ((e = Q?.memberships ?? []), (R[25] = Q?.memberships), (R[26] = e)) : (e = R[26]),
          R[27] !== Q?.other ? ((t = Q?.other ?? []), (R[27] = Q?.other), (R[28] = t)) : (t = R[28]))
        let S = o()([...e, ...t], "id")
        ;((a = Q?.app_installation_url ?? (D === m.qD ? m.rh : null)),
          R[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, i.jsx)(u.A, {
                id: "restricted.environmentSetup.repositoryPicker.organization.all",
                defaultMessage: "All",
                description:
                  "Shows repositories from every connected GitHub organization and personal account in the Cloud environment repository filter",
              })),
              (R[29] = n))
            : (n = R[29]))
        let k = n
        ;((s = L.Ab),
          (b = "end"),
          (x = "list"),
          (y = "menu"),
          (w = V),
          (j = F),
          (M = W),
          R[30] !== H || R[31] !== q
            ? ((r =
                null == H
                  ? q.formatMessage({
                      id: "restricted.environmentSetup.repositoryPicker.organization.allSelectionLabel",
                      defaultMessage: "GitHub account: All repositories",
                      description:
                        "Accessible label for the Cloud repository organization filter when all connected organizations and personal accounts are selected",
                    })
                  : q.formatMessage(
                      {
                        id: "restricted.environmentSetup.repositoryPicker.organization.selectedAccountLabel",
                        defaultMessage: "GitHub account: {account}",
                        description:
                          "Accessible label for the Cloud repository filter; account is the selected GitHub organization or personal account name",
                      },
                      { account: H.account_login },
                    )),
              (R[30] = H),
              (R[31] = q),
              (R[32] = r))
            : (r = R[32]))
        let A = H?.account_login ?? k
        ;(R[33] !== A
          ? ((l = (0, i.jsx)("span", { className: "truncate", children: A })), (R[33] = A), (R[34] = l))
          : (l = R[34]),
          R[35] === Symbol.for("react.memo_cache_sentinel") ? ((d = (0, i.jsx)(z.Aq_, {})), (R[35] = d)) : (d = R[35]),
          R[36] !== V || R[37] !== r || R[38] !== l
            ? ((v = (0, i.jsxs)(p.$, {
                className: "max-w-full",
                allowShrink: !0,
                "aria-label": r,
                color: "ghostSecondary",
                disabled: V,
                size: "settingsAction",
                radius: "full",
                children: [l, d],
              })),
              (R[36] = V),
              (R[37] = r),
              (R[38] = l),
              (R[39] = v))
            : (v = R[39]))
        let C = null == H ? z.ALZ : void 0
        ;(R[40] !== B ? ((c = () => B(null)), (R[40] = B), (R[41] = c)) : (c = R[41]),
          R[42] !== C || R[43] !== c
            ? ((h = (0, i.jsx)(L.ms.Item, { RightIcon: C, onSelect: c, children: k })),
              (R[42] = C),
              (R[43] = c),
              (R[44] = h))
            : (h = R[44]),
          R[45] !== H?.id || R[46] !== B
            ? ((f = (e) =>
                (0, i.jsx)(
                  L.ms.Item,
                  { RightIcon: e.id === H?.id ? z.ALZ : void 0, onSelect: () => B(e), children: e.account_login },
                  e.id,
                )),
              (R[45] = H?.id),
              (R[46] = B),
              (R[47] = f))
            : (f = R[47]),
          (g = S.map(f)),
          (R[5] = D),
          (R[6] = Q?.app_installation_url),
          (R[7] = Q?.memberships),
          (R[8] = Q?.other),
          (R[9] = V),
          (R[10] = H),
          (R[11] = q),
          (R[12] = B),
          (R[13] = F),
          (R[14] = s),
          (R[15] = a),
          (R[16] = v),
          (R[17] = h),
          (R[18] = g),
          (R[19] = b),
          (R[20] = x),
          (R[21] = y),
          (R[22] = w),
          (R[23] = j),
          (R[24] = M))
      } else
        ((s = R[14]),
          (a = R[15]),
          (v = R[16]),
          (h = R[17]),
          (g = R[18]),
          (b = R[19]),
          (x = R[20]),
          (y = R[21]),
          (w = R[22]),
          (j = R[23]),
          (M = R[24]))
      ;(R[48] !== K
        ? ((A = K
            ? (0, i.jsx)(L.ms.Message, {
                compact: !0,
                children: (0, i.jsx)(u.A, {
                  id: "restricted.environmentSetup.repositoryPicker.organization.loading",
                  defaultMessage: "Loading organizations…",
                  description:
                    "Shown while loading the connected GitHub organizations for the Cloud environment repository filter",
                }),
              })
            : null),
          (R[48] = K),
          (R[49] = A))
        : (A = R[49]),
        R[50] !== Z || R[51] !== Y
          ? ((C = Z
              ? (0, i.jsx)(L.ms.Item, {
                  onSelect: () => void Y(),
                  children: (0, i.jsx)(u.A, {
                    id: "restricted.environmentSetup.repositoryPicker.organization.retry",
                    defaultMessage: "Retry loading organizations",
                    description:
                      "Retries loading connected GitHub organizations after a failure in the Cloud environment repository filter",
                  }),
                })
              : null),
            (R[50] = Z),
            (R[51] = Y),
            (R[52] = C))
          : (C = R[52]),
        R[53] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, i.jsx)(L.ms.Separator, {})), (R[53] = _))
          : (_ = R[53]),
        R[54] === Symbol.for("react.memo_cache_sentinel") ? ((E = (0, i.jsx)(z.xFs, {})), (R[54] = E)) : (E = R[54]))
      let X = null == a
      return (
        R[55] !== a || R[56] !== U
          ? ((P = (e) => {
              null != a &&
                (W(!1),
                (0, f.PQ)({ event: e, href: a, initiator: "open_in_browser_bridge", openTarget: "external-browser" }),
                (0, N.pI)(U, "none"))
            }),
            (R[55] = a),
            (R[56] = U),
            (R[57] = P))
          : (P = R[57]),
        R[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, i.jsx)(u.A, {
              id: "restricted.environmentSetup.repositoryPicker.connection.connectOrganization",
              defaultMessage: "Connect GitHub org",
              description: "Opens GitHub in the system browser to grant access to repositories in another organization",
            })),
            (R[58] = I))
          : (I = R[58]),
        R[59] !== X || R[60] !== P
          ? ((T = (0, i.jsx)(L.ms.Item, { leftIcon: E, disabled: X, onClick: P, children: I })),
            (R[59] = X),
            (R[60] = P),
            (R[61] = T))
          : (T = R[61]),
        R[62] !== s ||
        R[63] !== v ||
        R[64] !== h ||
        R[65] !== g ||
        R[66] !== A ||
        R[67] !== C ||
        R[68] !== T ||
        R[69] !== b ||
        R[70] !== x ||
        R[71] !== y ||
        R[72] !== w ||
        R[73] !== j ||
        R[74] !== M
          ? ((O = (0, i.jsxs)(s, {
              align: b,
              contentMaxHeight: x,
              contentWidth: y,
              disabled: w,
              open: j,
              onOpenChange: M,
              triggerButton: v,
              children: [h, g, A, C, _, T],
            })),
            (R[62] = s),
            (R[63] = v),
            (R[64] = h),
            (R[65] = g),
            (R[66] = A),
            (R[67] = C),
            (R[68] = T),
            (R[69] = b),
            (R[70] = x),
            (R[71] = y),
            (R[72] = w),
            (R[73] = j),
            (R[74] = M),
            (R[75] = O))
          : (O = R[75]),
        O
      )
    }
    function $(e) {
      let t,
        n,
        a,
        y,
        P,
        I,
        L,
        z,
        T,
        R,
        D,
        V,
        $,
        W = (0, r.c)(158),
        {
          disabled: G,
          allowedProviders: Q,
          selectedRepositoryIds: Z,
          header: K,
          headerAlignment: Y,
          configureInAccountMenu: X,
          onChange: J,
          preferredConnectorId: ee,
          selectionMode: et,
          children: en,
          preferredLinkId: ei,
          onConnectionChange: er,
          maxRepositories: es,
        } = e,
        ea = void 0 === Y ? "center" : Y,
        eo = void 0 !== X && X,
        el = void 0 === et ? "multiple" : et,
        ed = (0, l.gh)(S.u),
        ec = (0, c.A)(),
        eu = null != es && Z.length >= es,
        [em, ep] = (0, d.useState)(""),
        [ev, eh] = (0, d.useState)(null),
        [ef, eg] = (0, d.useState)(null)
      W[0] !== em ? ((t = em.trim()), (W[0] = em), (W[1] = t)) : (t = W[1])
      let eb = (0, A.o)(t, 200)
      W[2] !== em ? ((n = em.trim()), (W[2] = em), (W[3] = n)) : (n = W[3])
      let ex = eb !== n
      W[4] !== Q ? ((a = { surface: "picker", allowedProviders: Q }), (W[4] = Q), (W[5] = a)) : (a = W[5])
      let { data: ey, hasDiscoveryError: ew, isError: ej, isPending: eS, refetch: ek } = (0, l._U)(C.G, a)
      W[6] !== ey || W[7] !== ee || W[8] !== ei || W[9] !== ev
        ? ((y =
            ey?.find((e) => {
              let { id: t, linkId: n } = e
              return t === ev?.connectorId && (null == ev.linkId || n === ev.linkId)
            }) ??
            ey?.find((e) => e.id === ee && (null == ei || e.linkId === ei) && "connected" === (0, N.jh)(e).status) ??
            ey?.find(F) ??
            ey?.find(q) ??
            ey?.[0]),
          (W[6] = ey),
          (W[7] = ee),
          (W[8] = ei),
          (W[9] = ev),
          (W[10] = y))
        : (y = W[10])
      let eM = y,
        eA = eM?.id ?? m.qD
      W[11] !== eA ? ((P = (0, E.Pt)(eA)), (W[11] = eA), (W[12] = P)) : (P = W[12])
      let eC = P,
        { missingLinkError: e_, repositoryBrowseMode: eN } = E.Gq[eC],
        eE = "github-installations" === eN,
        eP = eM?.linkId
      W[13] !== eM ? ((I = (0, N.jh)(eM)), (W[13] = eM), (W[14] = I)) : (I = W[14])
      let { status: eI, reconnect: eL } = I
      W[15] !== eA || W[16] !== ey || W[17] !== eP
        ? ((L = ey?.some((e) => e.id === eA && null != e.linkId && e.linkId !== eP)),
          (W[15] = eA),
          (W[16] = ey),
          (W[17] = eP),
          (W[18] = L))
        : (L = W[18])
      let ez = L,
        eT = (ej && !ey?.length) || "error" === eI,
        eO = "connected" === eI
      W[19] !== eA || W[20] !== eP
        ? ((z = { connectorId: eA, linkId: eP, poll: !0 }), (W[19] = eA), (W[20] = eP), (W[21] = z))
        : (z = W[21])
      let eR = eE && null == en && !G && eO
      W[22] !== eR ? ((T = { enabled: eR }), (W[22] = eR), (W[23] = T)) : (T = W[23])
      let { data: eD } = (0, l._U)(k.ky, z, T)
      ;(W[24] !== eA || W[25] !== eD || W[26] !== eP || W[27] !== ef
        ? ((R = ef?.installation ?? null),
          null != ef &&
            (ef.connectorId !== eA || ef.linkId !== eP
              ? (R = null)
              : null != eD &&
                (R =
                  [...eD.memberships, ...eD.other].find((e) => {
                    let { id: t } = e
                    return t === ef.installation.id
                  }) ?? null),
            null == R && eg(null)),
          (W[24] = eA),
          (W[25] = eD),
          (W[26] = eP),
          (W[27] = ef),
          (W[28] = R))
        : (R = W[28]),
        W[29] !== eA || W[30] !== eb || W[31] !== R || W[32] !== eP
          ? ((D = { connectorId: eA, linkId: eP, installation: R, query: eb, poll: !0 }),
            (W[29] = eA),
            (W[30] = eb),
            (W[31] = R),
            (W[32] = eP),
            (W[33] = D))
          : (D = W[33]))
      let eV = null == en && !G && !eT && eO
      W[34] !== eV ? ((V = { enabled: eV }), (W[34] = eV), (W[35] = V)) : (V = W[35])
      let {
        data: eH,
        error: e$,
        fetchNextPage: eB,
        hasNextPage: eU,
        isError: eq,
        isFetching: eF,
        isFetchingNextPage: eW,
        isFetchNextPageError: eG,
        isPending: eQ,
        refetch: eZ,
      } = (0, l._U)(k.go, D, V)
      if (
        W[36] !== Q ||
        W[37] !== en ||
        W[38] !== eo ||
        W[39] !== eO ||
        W[40] !== eT ||
        W[41] !== eM ||
        W[42] !== eA ||
        W[43] !== ey ||
        W[44] !== ej ||
        W[45] !== eS ||
        W[46] !== eb ||
        W[47] !== G ||
        W[48] !== ew ||
        W[49] !== eB ||
        W[50] !== ez ||
        W[51] !== eU ||
        W[52] !== K ||
        W[53] !== ea ||
        W[54] !== R ||
        W[55] !== eD?.app_installation_url ||
        W[56] !== ec ||
        W[57] !== ex ||
        W[58] !== eP ||
        W[59] !== e_ ||
        W[60] !== eG ||
        W[61] !== eW ||
        W[62] !== J ||
        W[63] !== er ||
        W[64] !== eC ||
        W[65] !== em ||
        W[66] !== eL ||
        W[67] !== ek ||
        W[68] !== eZ ||
        W[69] !== e$ ||
        W[70] !== eq ||
        W[71] !== eF ||
        W[72] !== eQ ||
        W[73] !== eH ||
        W[74] !== ed ||
        W[75] !== Z ||
        W[76] !== eu ||
        W[77] !== el ||
        W[78] !== eI ||
        W[79] !== eE
      ) {
        let e,
          t,
          n,
          r,
          a,
          l,
          d,
          c,
          y,
          S,
          k,
          A,
          C,
          P,
          I,
          L = null == eH ? void 0 : o()(eH.pages.flatMap(U), "id")
        W[81] !== Q || W[82] !== eM || W[83] !== ej || W[84] !== eS || W[85] !== G || W[86] !== ek
          ? ((e =
              null == eM && Q && !Q.includes(E.Lw.GitHub)
                ? (0, i.jsxs)(g.W, {
                    layout: "settings-row",
                    children: [
                      eS && (0, i.jsx)(w.y, {}),
                      !eS &&
                        ej &&
                        (0, i.jsx)(p.$, {
                          color: "accent",
                          disabled: G,
                          onClick: () => void ek(),
                          size: "dialog",
                          children: (0, i.jsx)(u.A, {
                            id: "restricted.environmentSetup.repositoryPicker.retryConnection",
                            defaultMessage: "Try again",
                            description: "Retries loading provider connections",
                          }),
                        }),
                      !eS &&
                        !ej &&
                        (0, i.jsx)(u.A, {
                          id: "environmentSetup.repositoryPicker.noAvailableConnections",
                          defaultMessage: "No repository connections available",
                          description:
                            "Shown when no discovered repository connections match the providers allowed in this picker",
                        }),
                    ],
                  })
                : null),
            (W[81] = Q),
            (W[82] = eM),
            (W[83] = ej),
            (W[84] = eS),
            (W[85] = G),
            (W[86] = ek),
            (W[87] = e))
          : (e = W[87])
        let z = e
        W[88] !== e_ || W[89] !== e$
          ? ((t = e$ instanceof Error && (0, M.d)(e$)?.type === e_), (W[88] = e_), (W[89] = e$), (W[90] = t))
          : (t = W[90])
        let T = t,
          D = eO && !T && !eT
        W[91] !== eA
          ? ((n = (0, j.Y2)({ appId: eA, installUrl: null, remotePluginId: null })), (W[91] = eA), (W[92] = n))
          : (n = W[92])
        let V = n
        W[93] !== V || W[94] !== ed
          ? ((r = (e) => {
              ;((0, f.PQ)({ event: e, href: V, initiator: "open_in_browser_bridge", openTarget: "external-browser" }),
                (0, N.pI)(ed, "none"))
            }),
            (W[93] = V),
            (W[94] = ed),
            (W[95] = r))
          : (r = W[95])
        let q = r
        ;(W[96] !== eC
          ? ((a = (0, i.jsx)(u.A, {
              id: "restricted.environmentSetup.repositoryPicker.openSettings.provider",
              defaultMessage: "Open {provider} settings",
              values: { provider: eC },
              description: "Opens the selected provider's connection and repository access settings",
            })),
            (W[96] = eC),
            (W[97] = a))
          : (a = W[97]),
          W[98] !== G || W[99] !== q || W[100] !== a
            ? ((l = (0, i.jsx)(p.$, { color: "accent", disabled: G, onClick: q, size: "dialog", children: a })),
              (W[98] = G),
              (W[99] = q),
              (W[100] = a),
              (W[101] = l))
            : (l = W[101]))
        let F = l,
          Y = null,
          X = eT ? "error" : eI
        W[102] !== eO ||
        W[103] !== eT ||
        W[104] !== eA ||
        W[105] !== F ||
        W[106] !== eS ||
        W[107] !== G ||
        W[108] !== X ||
        W[109] !== ez ||
        W[110] !== eP ||
        W[111] !== T ||
        W[112] !== eC ||
        W[113] !== eL ||
        W[114] !== ek ||
        W[115] !== eI
          ? ((c =
              eT || "disabled" === eI || (!eS && (!eO || T))
                ? (0, i.jsx)(_.P, {
                    connectorId: eA,
                    connectionMessage:
                      eL || T
                        ? (0, i.jsx)(u.A, {
                            id: "restricted.environmentSetup.repositoryPicker.reconnect.provider",
                            defaultMessage: "Reconnect {provider} to load your repositories",
                            values: { provider: eC },
                            description: "The user's repository authorization needs to be renewed",
                          })
                        : (0, i.jsx)(u.A, {
                            id: "restricted.environmentSetup.repositoryPicker.connect.provider",
                            defaultMessage: "Connect {provider} to see your repositories",
                            values: { provider: eC },
                            description:
                              "Invites the user to connect their repository account before choosing repositories",
                          }),
                    connectionAction: null != eP && ez && (eL || T) ? F : void 0,
                    disabled: G,
                    reconnect: eL || T,
                    status: "connected" === X ? "connect" : X,
                    onRetry: () => void ek(),
                  })
                : null),
            (W[102] = eO),
            (W[103] = eT),
            (W[104] = eA),
            (W[105] = F),
            (W[106] = eS),
            (W[107] = G),
            (W[108] = X),
            (W[109] = ez),
            (W[110] = eP),
            (W[111] = T),
            (W[112] = eC),
            (W[113] = eL),
            (W[114] = ek),
            (W[115] = eI),
            (W[116] = c))
          : (c = W[116])
        let ee = c
        if (eq && !L?.length) {
          let e, t, n, r
          ;(W[117] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(u.A, {
                id: "restricted.environmentSetup.repositoryPicker.loadError",
                defaultMessage: "Repositories couldn’t load",
                description: "Error when the repository list cannot be loaded",
              })),
              (W[117] = e))
            : (e = W[117]),
            (Y = e),
            W[118] !== eZ ? ((t = () => void eZ()), (W[118] = eZ), (W[119] = t)) : (t = W[119]),
            W[120] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, i.jsx)(u.A, {
                  id: "restricted.environmentSetup.repositoryPicker.retryRepositories",
                  defaultMessage: "Try again",
                  description: "Retries loading repositories",
                })),
                (W[120] = n))
              : (n = W[120]),
            W[121] !== G || W[122] !== t
              ? ((r = (0, i.jsx)(p.$, { color: "accent", disabled: G, onClick: t, size: "dialog", children: n })),
                (W[121] = G),
                (W[122] = t),
                (W[123] = r))
              : (r = W[123]),
            (d = r))
        } else if (!ex && null == R && "" === eb && L?.length === 0) {
          let e
          ;(W[124] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(u.A, {
                id: "restricted.environmentSetup.repositoryPicker.noAccess",
                defaultMessage: "No repositories are available to this connection",
                description: "The provider is connected but repository discovery returned no repositories",
              })),
              (W[124] = e))
            : (e = W[124]),
            (Y = e),
            (d = F))
        }
        W[125] !== ee || W[126] !== d || W[127] !== Y
          ? ((y =
              ee ??
              (null != Y
                ? (0, i.jsx)(b.A, { className: "flex-1 select-none", title: null, description: Y, actions: d })
                : null)),
            (W[125] = ee),
            (W[126] = d),
            (W[127] = Y),
            (W[128] = y))
          : (y = W[128])
        let et = y
        W[129] !== ec
          ? ((S = ec.formatMessage({
              id: "restricted.environmentSetup.repositoryPicker.search",
              defaultMessage: "Search repositories",
              description: "Accessible label for searching repositories in the cloud environment creation dialog",
            })),
            (W[129] = ec),
            (W[130] = S))
          : (S = W[130])
        let ei = S
        W[131] !== eA || W[132] !== R || W[133] !== eD?.app_installation_url
          ? ((k = (e) =>
              (e === eA ? (R?.html_url ?? eD?.app_installation_url) : void 0) ??
              (e === m.qD ? m.rh : (0, j.Y2)({ appId: e, installUrl: null, remotePluginId: null }))),
            (W[131] = eA),
            (W[132] = R),
            (W[133] = eD?.app_installation_url),
            (W[134] = k))
          : (k = W[134])
        let es = k
        W[135] !== D ||
        W[136] !== eo ||
        W[137] !== eM ||
        W[138] !== eA ||
        W[139] !== ey ||
        W[140] !== eS ||
        W[141] !== G ||
        W[142] !== es ||
        W[143] !== ea ||
        W[144] !== eP ||
        W[145] !== z ||
        W[146] !== er
          ? ((A =
              null == z
                ? (0, i.jsx)(O, {
                    connector: eM,
                    connectors: ey,
                    disabled: G,
                    headerAlignment: ea,
                    configureInAccountMenu: eo,
                    browsing: D,
                    connectorsPending: eS,
                    getConfigureHref: es,
                    onChange: (e) => {
                      ;(eh({ connectorId: e.id, linkId: e.linkId }),
                        (e.id !== eA || e.linkId !== eP) && (eg(null), er?.()))
                    },
                  })
                : null),
            (W[135] = D),
            (W[136] = eo),
            (W[137] = eM),
            (W[138] = eA),
            (W[139] = ey),
            (W[140] = eS),
            (W[141] = G),
            (W[142] = es),
            (W[143] = ea),
            (W[144] = eP),
            (W[145] = z),
            (W[146] = er),
            (W[147] = A))
          : (A = W[147])
        let ev = A,
          ef = "start" === ea ? "gap-3" : "gap-4"
        ;(W[148] !== ef ? ((C = (0, s.A)("flex min-h-0 flex-col", ef)), (W[148] = ef), (W[149] = C)) : (C = W[149]),
          W[150] !== eo || W[151] !== ev || W[152] !== K || W[153] !== ea
            ? ((P =
                "start" === ea
                  ? (0, i.jsx)(h.c7, {
                      className: "shrink-0 select-none",
                      title: K,
                      subtitle: eo ? void 0 : ev,
                      subtitleTone: "secondary",
                    })
                  : (0, i.jsxs)("div", {
                      className: "flex flex-col items-center gap-2 text-center select-none",
                      children: [K, !eo && ev],
                    })),
              (W[150] = eo),
              (W[151] = ev),
              (W[152] = K),
              (W[153] = ea),
              (W[154] = P))
            : (P = W[154]),
          W[155] !== eo || W[156] !== ev
            ? ((I =
                eo && null != ev
                  ? (0, i.jsxs)("div", {
                      className: "flex min-w-0 items-center justify-between gap-4",
                      children: [
                        (0, i.jsx)("span", {
                          className: "shrink-0 text-base font-medium",
                          children: (0, i.jsx)(u.A, {
                            id: "environmentSetup.repositoryPicker.connectedAsLabel",
                            defaultMessage: "Connected as",
                            description: "Label beside the repository account selector in the add repository dialog",
                          }),
                        }),
                        ev,
                      ],
                    })
                  : null),
              (W[155] = eo),
              (W[156] = ev),
              (W[157] = I))
            : (I = W[157]),
          ($ = (0, i.jsxs)("div", {
            className: C,
            children: [
              P,
              I,
              en ??
                z ??
                (0, i.jsxs)("div", {
                  className: "flex min-h-0 flex-1 flex-col gap-2",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "flex min-w-0 items-center justify-between gap-4",
                      children: [
                        (0, i.jsx)("span", {
                          className: "min-w-0 truncate text-base font-medium select-none",
                          children:
                            "single" === el
                              ? (0, i.jsx)(u.A, {
                                  id: "environmentSetup.repositoryPicker.single.label",
                                  defaultMessage: "Select a repository",
                                  description: "Label for selecting one repository for a cloud environment",
                                })
                              : (0, i.jsx)(u.A, {
                                  id: "restricted.environmentSetup.create.repositories.label",
                                  defaultMessage: "Select repositories",
                                  description: "Label for the repositories to include in the new cloud environment",
                                }),
                        }),
                        eE && (D || eS)
                          ? (0, i.jsx)("div", {
                              className: "max-w-1/2 min-w-0",
                              children: (0, i.jsx)(H, {
                                connectorId: eA,
                                disabled: G || eS,
                                installation: R,
                                linkId: eP,
                                onChange: (e) =>
                                  eg(null == e ? null : { connectorId: eA, linkId: eP, installation: e }),
                              }),
                            })
                          : null,
                      ],
                    }),
                    null == ee && (null == Y || D)
                      ? (0, i.jsx)(x.s, {
                          id: "cloud-environment-repository-search",
                          className: "min-w-0 shrink-0",
                          autoFocus: !0,
                          variant: "toolbar",
                          label: ei,
                          onSearchQueryChange: ep,
                          placeholder: ec.formatMessage({
                            id: "restricted.environmentSetup.repositoryPicker.search.placeholder",
                            defaultMessage: "Search",
                            description:
                              "Placeholder for searching repositories in the cloud environment creation dialog",
                          }),
                          searchQuery: em,
                          trailingControl:
                            "" !== em.trim() && (eF || ex) ? (0, i.jsx)(w.y, { className: "icon-2xs" }) : void 0,
                        })
                      : null,
                    ew && !eT
                      ? (0, i.jsx)(p.$, {
                          color: "ghostActive",
                          disabled: G,
                          onClick: () => void ek(),
                          children: (0, i.jsx)(u.A, {
                            id: "environmentSetup.repositoryPicker.connections.retry",
                            defaultMessage: "Retry loading repository connections",
                            description:
                              "Retries discovering repository providers that could not load while keeping available connections usable",
                          }),
                        })
                      : null,
                    et ??
                      (0, i.jsxs)("div", {
                        className: "max-h-64 min-h-0 overflow-y-auto",
                        children: [
                          ex || eQ
                            ? (0, i.jsxs)("div", {
                                role: "status",
                                className: "select-none",
                                children: [
                                  (0, i.jsx)("div", {
                                    className: "sr-only",
                                    children: (0, i.jsx)(u.A, {
                                      id: "restricted.environmentSetup.repositoryPicker.repositories.loading",
                                      defaultMessage: "Loading repositories…",
                                      description:
                                        "Loading state while fetching repositories for the Cloud v2 repository picker",
                                    }),
                                  }),
                                  ["w-24", "w-32", "w-28", "w-36", "w-20", "w-16"].map(B),
                                ],
                              })
                            : null,
                          eq && !eG
                            ? (0, i.jsx)(p.$, {
                                color: "ghostActive",
                                onClick: () => void eZ(),
                                children: (0, i.jsx)(u.A, {
                                  id: "restricted.environmentSetup.repositoryPicker.repositories.retry",
                                  defaultMessage: "Retry loading repositories",
                                  description:
                                    "Retries a failed repository page or search in the Cloud v2 repository picker",
                                }),
                              })
                            : null,
                          ex || eq || L?.length !== 0
                            ? null
                            : (0, i.jsx)(g.W, {
                                layout: "settings-row",
                                children:
                                  "" !== eb
                                    ? (0, i.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.noMatches",
                                        defaultMessage: "No repositories match “{query}”",
                                        description: "No repositories match the user's search text",
                                        values: { query: eb },
                                      })
                                    : (0, i.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.repositories.empty",
                                        defaultMessage: "No repositories found",
                                        description:
                                          "Empty state when no repositories match the Cloud v2 repository picker search",
                                      }),
                              }),
                          ex
                            ? null
                            : L?.map((e) => {
                                let t = Z.includes(e.id),
                                  n = { linkId: eP, connectorId: (0, E.Ip)(e.id, eA), repository: e },
                                  r = e.repository_full_name.lastIndexOf("/") + 1,
                                  a = (0, i.jsxs)("span", {
                                    className: (0, s.A)("truncate", eo && "single" !== el && "-translate-y-px"),
                                    children: [
                                      (0, i.jsx)("span", {
                                        className: "text-secondary",
                                        children: e.repository_full_name.slice(0, r),
                                      }),
                                      e.repository_full_name.slice(r),
                                    ],
                                  })
                                return "single" === el
                                  ? (0, i.jsx)(
                                      p.$,
                                      {
                                        className:
                                          "w-full gap-3 rounded-lg px-3 py-1 text-start text-base hover:bg-secondary-ghost-hover",
                                        disabled: G,
                                        unstyled: !0,
                                        onClick: () => J(n, !0),
                                        type: "button",
                                        children: a,
                                      },
                                      e.id,
                                    )
                                  : (0, i.jsxs)(
                                      "label",
                                      {
                                        className: (0, s.A)(
                                          "flex cursor-interaction items-center gap-3 px-3 text-base select-none",
                                          eo ? "py-1.5 leading-5" : "py-1",
                                        ),
                                        htmlFor: `cloud-environment-repository-${e.id}`,
                                        children: [
                                          (0, i.jsx)("span", {
                                            className: "relative flex",
                                            children: (0, i.jsx)(v.S, {
                                              variant: "secondary",
                                              checked: t,
                                              disabled: G || (!t && (eu || !e.default_branch)),
                                              id: `cloud-environment-repository-${e.id}`,
                                              onCheckedChange: (e) => {
                                                J(n, !0 === e)
                                              },
                                            }),
                                          }),
                                          a,
                                          !e.default_branch &&
                                            (0, i.jsx)("span", {
                                              className: "text-secondary",
                                              children: (0, i.jsx)(u.A, {
                                                id: "environmentSetup.repositoryPicker.noDefaultBranch",
                                                defaultMessage: "No default branch",
                                                description:
                                                  "Reason an empty repository cannot be added to a cloud environment",
                                              }),
                                            }),
                                        ],
                                      },
                                      e.id,
                                    )
                              }),
                          !ex && (eU || eG) && (!eq || eG)
                            ? (0, i.jsx)(g.W, {
                                layout: "settings-row",
                                children: (0, i.jsxs)(p.$, {
                                  color: "secondary",
                                  disabled: G || eF,
                                  loading: eW,
                                  size: "dialog",
                                  onClick: () => void eB(),
                                  children: [
                                    eW &&
                                      (0, i.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.repositories.loadingMore",
                                        defaultMessage: "Loading more…",
                                        description:
                                          "Button label while loading another page of repositories in the cloud environment setup dialog",
                                      }),
                                    !eW &&
                                      eG &&
                                      (0, i.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.repositories.retry",
                                        defaultMessage: "Retry loading repositories",
                                        description:
                                          "Retries a failed repository page or search in the Cloud v2 repository picker",
                                      }),
                                    !eW &&
                                      !eG &&
                                      (0, i.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.repositories.loadMore",
                                        defaultMessage: "Load more repositories",
                                        description:
                                          "Loads another page of repositories in the Cloud v2 repository picker",
                                      }),
                                  ],
                                }),
                              })
                            : null,
                        ],
                      }),
                  ],
                }),
            ],
          })),
          (W[36] = Q),
          (W[37] = en),
          (W[38] = eo),
          (W[39] = eO),
          (W[40] = eT),
          (W[41] = eM),
          (W[42] = eA),
          (W[43] = ey),
          (W[44] = ej),
          (W[45] = eS),
          (W[46] = eb),
          (W[47] = G),
          (W[48] = ew),
          (W[49] = eB),
          (W[50] = ez),
          (W[51] = eU),
          (W[52] = K),
          (W[53] = ea),
          (W[54] = R),
          (W[55] = eD?.app_installation_url),
          (W[56] = ec),
          (W[57] = ex),
          (W[58] = eP),
          (W[59] = e_),
          (W[60] = eG),
          (W[61] = eW),
          (W[62] = J),
          (W[63] = er),
          (W[64] = eC),
          (W[65] = em),
          (W[66] = eL),
          (W[67] = ek),
          (W[68] = eZ),
          (W[69] = e$),
          (W[70] = eq),
          (W[71] = eF),
          (W[72] = eQ),
          (W[73] = eH),
          (W[74] = ed),
          (W[75] = Z),
          (W[76] = eu),
          (W[77] = el),
          (W[78] = eI),
          (W[79] = eE),
          (W[80] = $))
      } else $ = W[80]
      return $
    }
    function B(e) {
      return (0, i.jsxs)(
        "div",
        {
          "aria-hidden": !0,
          className: "flex h-8 items-center gap-3 px-3",
          children: [
            (0, i.jsx)("div", { className: "size-4 shrink-0", children: (0, i.jsx)(y.X, { size: "fill" }) }),
            (0, i.jsx)(y.X, { className: e, size: "sm" }),
          ],
        },
        e,
      )
    }
    function U(e) {
      return e.repositories
    }
    function q(e) {
      let { status: t } = e
      return "DISABLED_BY_ADMIN" !== t
    }
    function F(e) {
      return "connected" === (0, N.jh)(e).status
    }
  },
  NxjN(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("zd8w"),
      a = n("Sm6l"),
      o = n("CxEf")
    n.d(
      t,
      {},
      {
        F: function (e) {
          let t,
            n,
            l,
            d,
            c,
            u,
            m,
            p = (0, r.c)(25)
          p[0] !== e
            ? (({ id: n, tooltipContent: d, size: l, ...t } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = n),
              (p[3] = l),
              (p[4] = d))
            : ((t = p[1]), (n = p[2]), (l = p[3]), (d = p[4]))
          let v = void 0 === l ? "compact" : l,
            h = (0, s.useId)(),
            f = n ?? h,
            g = (0, s.useId)(),
            [b, x] = (0, s.useState)(null),
            y = t.disabled || t.loading,
            w = y && null != d,
            j = d ?? "",
            S = null != d && void 0,
            k = b ?? void 0,
            M = y ? x : void 0,
            A = w ? g : void 0,
            C = w || void 0,
            _ = w ? f : void 0,
            N = w ? "group" : void 0,
            E = w ? 0 : void 0,
            P = y ? void 0 : x,
            I = y || null == d ? void 0 : g
          return (
            p[5] !== f || p[6] !== t || p[7] !== v || p[8] !== P || p[9] !== I
              ? ((c = (0, i.jsx)(a.$, { id: f, ref: P, "aria-describedby": I, size: v, ...t })),
                (p[5] = f),
                (p[6] = t),
                (p[7] = v),
                (p[8] = P),
                (p[9] = I),
                (p[10] = c))
              : (c = p[10]),
            p[11] !== E || p[12] !== c || p[13] !== M || p[14] !== A || p[15] !== C || p[16] !== _ || p[17] !== N
              ? ((u = (0, i.jsx)("span", {
                  ref: M,
                  className:
                    "inline-flex max-w-full min-w-0 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                  "aria-describedby": A,
                  "aria-disabled": C,
                  "aria-labelledby": _,
                  role: N,
                  tabIndex: E,
                  children: c,
                })),
                (p[11] = E),
                (p[12] = c),
                (p[13] = M),
                (p[14] = A),
                (p[15] = C),
                (p[16] = _),
                (p[17] = N),
                (p[18] = u))
              : (u = p[18]),
            p[19] !== u || p[20] !== j || p[21] !== S || p[22] !== k || p[23] !== g
              ? ((m = (0, i.jsx)(o.m, {
                  color: "inverse",
                  tooltipContent: j,
                  open: S,
                  tooltipId: g,
                  triggerElement: k,
                  children: u,
                })),
                (p[19] = u),
                (p[20] = j),
                (p[21] = S),
                (p[22] = k),
                (p[23] = g),
                (p[24] = m))
              : (m = p[24]),
            m
          )
        },
      },
    )
  },
  teEn(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("on57"),
      a = n("zd8w"),
      o = n("Wf1j"),
      l = n("oyxz"),
      d = n("Qgfj"),
      c = n("Sm6l"),
      u = n("JNtf"),
      m = n("mUDD"),
      p = n("bVeK"),
      v = n("AWNZ"),
      h = n("NxjN"),
      f = n("J0Wh"),
      g = n("K489")
    let b = (0, d.YK)({
      editLabel: {
        id: "restricted.environmentSetup.network.domain.edit",
        defaultMessage: "Edit additional allowed domains ({count, plural, one {# domain} other {# domains}})",
        description:
          "Accessible label for editing individually allowed cloud environment network domains in addition to the selected preset, including their count",
      },
      title: {
        id: "restricted.environmentSetup.configuration.network.domains",
        defaultMessage: "Additional allowed domains",
        description:
          "Label and editor title for individually allowed cloud environment network domains in addition to the selected preset",
      },
    })
    n.d(
      t,
      {},
      {
        y: function (e) {
          let t,
            n,
            d,
            x,
            y,
            w,
            j,
            S,
            k,
            M,
            A,
            C,
            _,
            N,
            E = (0, r.c)(40),
            { disabled: P, disabledTooltip: I, domains: L, onChange: z, issues: T } = e
          E[0] !== T ? ((t = void 0 === T ? [] : T), (E[0] = T), (E[1] = t)) : (t = E[1])
          let O = t,
            R = (0, o.A)(),
            [D, V] = (0, a.useState)(null)
          P && null != D && V(null)
          let H = O.length > 0,
            $ = P && "opacity-50"
          ;(E[2] !== $ ? ((n = (0, s.A)("select-none", $)), (E[2] = $), (E[3] = n)) : (n = E[3]),
            E[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, i.jsx)("span", {
                  className: "shrink-0 select-none",
                  children: (0, i.jsx)(l.A, { ...b.title }),
                })),
                (E[4] = d))
              : (d = E[4]),
            E[5] !== L[0] || E[6] !== L.length
              ? ((x = (0, i.jsxs)("div", {
                  className: "flex min-w-0 items-center justify-between gap-3",
                  children: [
                    d,
                    (0, i.jsx)("span", {
                      className: "truncate text-secondary",
                      children:
                        L.length > 0
                          ? (0, i.jsx)(l.A, {
                              id: "restricted.environmentSetup.network.domain.summary",
                              defaultMessage:
                                "{count, plural, =1 {{firstDomain}} one {# domain · {firstDomain}} other {# domains · {firstDomain}}}",
                              description:
                                "Compact allowed-domain summary in cloud environment settings. Show only the host for one domain; otherwise show the total count and first host.",
                              values: { count: L.length, firstDomain: L[0] },
                            })
                          : (0, i.jsx)(l.A, {
                              id: "restricted.environmentSetup.network.domain.empty",
                              defaultMessage: "No additional domains",
                              description:
                                "Summary when no individual cloud environment network domains have been allowed",
                            }),
                    }),
                  ],
                })),
                (E[5] = L[0]),
                (E[6] = L.length),
                (E[7] = x))
              : (x = E[7]),
            E[8] !== L.length || E[9] !== R
              ? ((y = R.formatMessage(b.editLabel, { count: L.length })), (E[8] = L.length), (E[9] = R), (E[10] = y))
              : (y = E[10]))
          let B = P ? I : null
          return (
            E[11] !== L ? ((w = () => V({ domains: [...L], value: "" })), (E[11] = L), (E[12] = w)) : (w = E[12]),
            E[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((j = (0, i.jsx)(p.Npl, {})), (E[13] = j))
              : (j = E[13]),
            E[14] !== P || E[15] !== w || E[16] !== y || E[17] !== B
              ? ((S = (0, i.jsx)(h.F, {
                  "aria-label": y,
                  color: "ghost",
                  disabled: P,
                  tooltipContent: B,
                  size: "icon",
                  onClick: w,
                  children: j,
                })),
                (E[14] = P),
                (E[15] = w),
                (E[16] = y),
                (E[17] = B),
                (E[18] = S))
              : (S = E[18]),
            E[19] !== P || E[20] !== O[0]
              ? ((k = !P && null != O[0] && (0, i.jsx)(g.o, { issue: O[0] })), (E[19] = P), (E[20] = O[0]), (E[21] = k))
              : (k = E[21]),
            E[22] !== S || E[23] !== k
              ? ((M = (0, i.jsxs)(i.Fragment, { children: [S, k] })), (E[22] = S), (E[23] = k), (E[24] = M))
              : (M = E[24]),
            E[25] !== M || E[26] !== n || E[27] !== x
              ? ((A = (0, i.jsx)(v.ic, {
                  className: n,
                  controlSizing: "content",
                  variant: "featured",
                  size: "compact",
                  label: x,
                  control: M,
                })),
                (E[25] = M),
                (E[26] = n),
                (E[27] = x),
                (E[28] = A))
              : (A = E[28]),
            E[29] !== A || E[30] !== H
              ? ((C = (0, i.jsx)("div", { "data-environment-invalid": H, children: A })),
                (E[29] = A),
                (E[30] = H),
                (E[31] = C))
              : (C = E[31]),
            E[32] !== P || E[33] !== D || E[34] !== O.length || E[35] !== z
              ? ((_ =
                  null == D || P
                    ? null
                    : (0, i.jsx)(u.lG, {
                        open: !0,
                        size: "wide",
                        onOpenChange: (e) => !e && V(null),
                        children: (0, i.jsxs)(m.R4, {
                          as: "form",
                          size: "viewport",
                          onSubmit: (e) => {
                            ;(e.preventDefault(), e.stopPropagation(), D.value.trim() || (z(D.domains), V(null)))
                          },
                          children: [
                            (0, i.jsx)(m.OO, {
                              children: (0, i.jsx)(m.c7, {
                                title: (0, i.jsx)(u.L3, { children: (0, i.jsx)(l.A, { ...b.title }) }),
                              }),
                            }),
                            (0, i.jsx)(m.OO, {
                              children: (0, i.jsx)(f.Y, {
                                disabled: P,
                                domains: D.domains,
                                showErrors: O.length > 0,
                                value: D.value,
                                onChange: (e) => V((t) => (null == t ? null : { ...t, domains: e })),
                                onInputChange: (e) => V((t) => (null == t ? null : { ...t, value: e })),
                              }),
                            }),
                            (0, i.jsx)(m.OO, {
                              children: (0, i.jsxs)(m.Es, {
                                children: [
                                  (0, i.jsx)(c.$, {
                                    color: "secondary",
                                    onClick: () => V(null),
                                    children: (0, i.jsx)(l.A, {
                                      id: "restricted.environmentSetup.configuration.dialog.cancel",
                                      defaultMessage: "Cancel",
                                      description: "Discard edits in a cloud environment configuration dialog",
                                    }),
                                  }),
                                  (0, i.jsx)(c.$, {
                                    color: "primary",
                                    disabled: !!D.value.trim(),
                                    type: "submit",
                                    children: (0, i.jsx)(l.A, {
                                      id: "restricted.environmentSetup.configuration.dialog.save",
                                      defaultMessage: "Save",
                                      description:
                                        "Apply dialog edits to the cloud environment configuration being edited",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      })),
                (E[32] = P),
                (E[33] = D),
                (E[34] = O.length),
                (E[35] = z),
                (E[36] = _))
              : (_ = E[36]),
            E[37] !== C || E[38] !== _
              ? ((N = (0, i.jsxs)(i.Fragment, { children: [C, _] })), (E[37] = C), (E[38] = _), (E[39] = N))
              : (N = E[39]),
            N
          )
        },
      },
    )
  },
  J0Wh(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("on57"),
      a = n("Wf1j"),
      o = n("oyxz"),
      l = n("Qgfj"),
      d = n("wU6J"),
      c = n("yvV6"),
      u = n("K489")
    let m = (0, l.YK)({
      duplicate: {
        id: "restricted.environmentSetup.network.domain.duplicate",
        defaultMessage: "This domain is already allowed",
        description: "Validation error when adding a duplicate cloud environment network host",
      },
      ipv4: {
        id: "restricted.environmentSetup.network.domain.ipv4",
        defaultMessage: "Use a full IPv4 address, such as 192.0.2.1",
        description: "Validation error for a noncanonical numeric network host",
      },
      long: {
        id: "restricted.environmentSetup.network.domain.long",
        defaultMessage: "Hosts must be at most 253 characters, with labels at most 63 characters",
        description: "Validation error for a cloud environment network host that exceeds hostname length limits",
      },
      url: {
        id: "restricted.environmentSetup.network.domain.url",
        defaultMessage: "Enter a host without a URL, path, or port",
        description: "Validation error when a cloud environment allowed network host contains a URL or port",
      },
      invalid: {
        id: "restricted.environmentSetup.network.domain.invalid",
        defaultMessage: "Enter a host such as example.com or *.example.com",
        description: "Validation error for a malformed cloud environment allowed network hostname",
      },
      wildcard: {
        id: "environmentSetup.secret.domain.wildcard",
        defaultMessage: "Wildcards are not supported for secrets; enter an exact host",
        description: "Validation error explaining that proxy secrets require exact destination hostnames",
      },
    })
    n.d(
      t,
      {},
      {
        Y: function (e) {
          let t,
            n,
            l,
            p,
            v,
            h,
            f,
            g,
            b = (0, r.c)(42),
            {
              disabled: x,
              domains: y,
              value: w,
              onChange: j,
              onInputChange: S,
              showErrors: k,
              purpose: M,
              readOnly: A,
            } = e,
            C = void 0 !== k && k,
            _ = void 0 === M ? "network" : M,
            N = void 0 !== A && A,
            E = (0, a.A)()
          b[0] !== x || b[1] !== y || b[2] !== E || b[3] !== j || b[4] !== _ || b[5] !== N || b[6] !== C
            ? ((n = { purpose: _ }),
              (t = y.map((e, t) =>
                (0, i.jsx)(
                  c.b,
                  {
                    value: e,
                    removeLabel: E.formatMessage(
                      {
                        id: "restricted.environmentSetup.network.domain.remove",
                        defaultMessage: "Remove {domain}",
                        description: "Button for removing one allowed cloud environment network domain",
                      },
                      { domain: e },
                    ),
                    disabled: x,
                    onRemove: N ? void 0 : () => j(y.filter((e, n) => n !== t)),
                    children:
                      C && (!e.trim() || null != (0, d.r)(e, "secret" === _ ? y.slice(0, t) : [], n))
                        ? (0, i.jsx)(u.o, { issue: { field: `network-${t}`, code: "domains" } })
                        : null,
                  },
                  `${e}-${t}`,
                ),
              )),
              (b[0] = x),
              (b[1] = y),
              (b[2] = E),
              (b[3] = j),
              (b[4] = _),
              (b[5] = N),
              (b[6] = C),
              (b[7] = t),
              (b[8] = n))
            : ((t = b[7]), (n = b[8]))
          let P = t
          if (N) {
            let e,
              t,
              n,
              r = "secret" === _ ? "max-h-24" : "h-24"
            return (
              b[9] !== r
                ? ((e = (0, s.A)("flex w-full min-w-0 flex-wrap content-start gap-1 overflow-y-auto", r)),
                  (b[9] = r),
                  (b[10] = e))
                : (e = b[10]),
              b[11] !== P || b[12] !== y.length
                ? ((t =
                    y.length > 0
                      ? P
                      : (0, i.jsx)("p", {
                          className: "text-xs text-secondary select-none",
                          children: (0, i.jsx)(o.A, {
                            id: "restricted.environmentSetup.network.domain.emptyList",
                            defaultMessage: "No domains added yet",
                            description: "Empty-state message in the cloud environment allowed-domains editor",
                          }),
                        })),
                  (b[11] = P),
                  (b[12] = y.length),
                  (b[13] = t))
                : (t = b[13]),
              b[14] !== e || b[15] !== t
                ? ((n = (0, i.jsx)("div", { className: e, children: t })), (b[14] = e), (b[15] = t), (b[16] = n))
                : (n = b[16]),
              n
            )
          }
          return (
            b[17] !== n
              ? ((l = (e) => (null == (0, d.r)(e, [], n) ? (0, d.T)(e) : null)), (b[17] = n), (b[18] = l))
              : (l = b[18]),
            b[19] !== y || b[20] !== _ || b[21] !== n
              ? ((p = (e) => {
                  let t = (0, d.r)(e, y, n)
                  return "secret" === _ && "invalid" === t
                    ? (0, i.jsx)(o.A, {
                        id: "environmentSetup.secret.domain.invalid",
                        defaultMessage: "Enter an exact host, such as api.example.com",
                        description: "Validation error for a malformed proxy-secret destination hostname",
                      })
                    : null == t
                      ? null
                      : (0, i.jsx)(o.A, { ...m[t] })
                }),
                (b[19] = y),
                (b[20] = _),
                (b[21] = n),
                (b[22] = p))
              : (p = b[22]),
            b[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = (0, i.jsx)(o.A, {
                  id: "restricted.environmentSetup.network.domain.addBeforeSave",
                  defaultMessage: "Press Enter to add this domain before saving",
                  description: "Help text when a cloud environment domain has been typed but not added yet",
                })),
                (b[23] = v))
              : (v = b[23]),
            b[24] !== E || b[25] !== _
              ? ((h =
                  "secret" === _
                    ? E.formatMessage({
                        id: "environmentSetup.secret.domain.input",
                        defaultMessage: "Allowed secret domains",
                        description: "Accessible label for adding exact destination hostnames for a proxy secret",
                      })
                    : E.formatMessage({
                        id: "restricted.environmentSetup.sidePanel.network.domains",
                        defaultMessage: "Additional allowed domains",
                        description:
                          "Accessible label for entering individually allowed cloud environment network hosts in addition to the selected preset",
                      })),
                (b[24] = E),
                (b[25] = _),
                (b[26] = h))
              : (h = b[26]),
            b[27] !== E || b[28] !== _
              ? ((f =
                  "secret" === _
                    ? E.formatMessage({
                        id: "environmentSetup.secret.domain.placeholder",
                        defaultMessage: "api.example.com",
                        description: "Example exact destination hostname for a proxy secret",
                      })
                    : E.formatMessage({
                        id: "restricted.environmentSetup.network.domain.placeholder",
                        defaultMessage: "example.com or *.example.com",
                        description: "Example allowed network host or wildcard host in a cloud environment",
                      })),
                (b[27] = E),
                (b[28] = _),
                (b[29] = f))
              : (f = b[29]),
            b[30] !== x ||
            b[31] !== P ||
            b[32] !== y ||
            b[33] !== j ||
            b[34] !== S ||
            b[35] !== _ ||
            b[36] !== l ||
            b[37] !== p ||
            b[38] !== h ||
            b[39] !== f ||
            b[40] !== w
              ? ((g = (0, i.jsx)(c.G, {
                  entries: y,
                  value: w,
                  onChange: j,
                  onInputChange: S,
                  disabled: x,
                  purpose: _,
                  parseEntry: l,
                  errorFor: p,
                  pendingHelp: v,
                  label: h,
                  placeholder: f,
                  children: P,
                })),
                (b[30] = x),
                (b[31] = P),
                (b[32] = y),
                (b[33] = j),
                (b[34] = S),
                (b[35] = _),
                (b[36] = l),
                (b[37] = p),
                (b[38] = h),
                (b[39] = f),
                (b[40] = w),
                (b[41] = g))
              : (g = b[41]),
            g
          )
        },
      },
    )
  },
  BPZJ(e, t, n) {
    n.d(t, { b: () => g })
    var i = n("ABep"),
      r = n("QosV"),
      s = n("zd8w"),
      a = n("v7qY"),
      o = n("oyxz"),
      l = n("Sm6l"),
      d = n("JNtf"),
      c = n("mUDD"),
      u = n("ZRUt"),
      m = n("qoby"),
      p = n("pKvz"),
      v = n("WGE9"),
      h = n("EkMM")
    n("PFi3")
    var f = n("ECQF")
    function g(e) {
      let t,
        n,
        g,
        x,
        y,
        w,
        j,
        S,
        k,
        M,
        A,
        C,
        _,
        N,
        E,
        P,
        I,
        L,
        z,
        T,
        O,
        R,
        D,
        V,
        H,
        $,
        B,
        U,
        q,
        F = (0, r.c)(80),
        {
          hasConflict: W,
          initialSecrets: G,
          requireValues: Q,
          configuration: Z,
          environmentOnly: K,
          onClose: Y,
          onLocalSave: X,
        } = e,
        J = void 0 === Q || Q,
        ee = void 0 === Z ? null : Z,
        et = void 0 !== K && K
      F[0] !== G
        ? ((t = () => (G.length > 0 ? G : [{ id: 0, name: "", value: "", source: "environment" }])),
          (F[0] = G),
          (F[1] = t))
        : (t = F[1])
      let [en, ei] = (0, s.useState)(t),
        [er, es] = (0, s.useState)(null)
      F[2] !== en ? ((n = Math.max(-1, ...en.map(b))), (F[2] = en), (F[3] = n)) : (n = F[3])
      let ea = (0, s.useRef)(n + 1),
        [eo, el] = (0, s.useState)(!1),
        [ed, ec] = (0, s.useState)(!1)
      if (
        F[4] !== ee ||
        F[5] !== et ||
        F[6] !== W ||
        F[7] !== eo ||
        F[8] !== G ||
        F[9] !== er ||
        F[10] !== Y ||
        F[11] !== X ||
        F[12] !== J ||
        F[13] !== en ||
        F[14] !== ed
      ) {
        let e, t, n
        ;(F[30] !== G
          ? ((e = (e) =>
              G.some((t) => {
                let { id: n } = t
                return n === e.id
              }) ||
              e.name.length > 0 ||
              e.value.length > 0 ||
              (e.injectionTarget?.domain?.length ?? 0) > 0 ||
              "user_provided" === e.source),
            (F[30] = G),
            (F[31] = e))
          : (e = F[31]),
          (w = en.filter(e)),
          F[32] !== J || F[33] !== en
            ? ((t = (e) =>
                (0, v.E)(
                  e,
                  en.some((t) => t.id !== e.id && t.name === e.name),
                  J,
                )),
              (F[32] = J),
              (F[33] = en),
              (F[34] = t))
            : (t = F[34]))
        let r = w.flatMap(t)
        F[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(o.A, {
              id: "restricted.environmentSetup.batchSecrets.title",
              defaultMessage: "Manage secrets",
              description: "Title of the cloud environment batch secret editor",
            })),
            (F[35] = n))
          : (n = F[35])
        let s = n
        ;((y = d.lG),
          (A = !0),
          (C = "xxwide"),
          F[36] !== Y
            ? ((_ = (e) => {
                e || Y()
              }),
              (F[36] = Y),
              (F[37] = _))
            : (_ = F[37]),
          (x = c.R4),
          (P = "form"),
          (I = !0),
          (j = "max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] overflow-hidden"),
          (S = (e) => {
            ;(e.preventDefault(),
              e.stopPropagation(),
              (0, a.flushSync)(() => ec(!0)),
              (0, p.yk)(e.currentTarget),
              W || eo || 0 !== r.length || (X(w), Y()))
          }),
          F[38] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = (0, i.jsx)(d.L3, { className: "sr-only", children: s })), (F[38] = k))
            : (k = F[38]),
          F[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((M = (0, i.jsx)(c.OO, { className: "shrink-0", children: (0, i.jsx)(c.c7, { title: s }) })), (F[39] = M))
            : (M = F[39]),
          (g = c.OO),
          (N = "min-h-0 gap-4 overflow-y-auto"),
          (E =
            en.length > 0
              ? (0, i.jsx)("div", {
                  className: "flex flex-col gap-3",
                  children: en.map((e) =>
                    (0, i.jsx)(
                      h.s,
                      {
                        keyInputRef: er?.id === e.id ? er.ref : void 0,
                        configuration: ee,
                        environmentOnly: et,
                        secret: e,
                        readOnly: e.requested || e.injectionTarget?.type === "http_header",
                        issues: ed
                          ? r.filter((t) => {
                              let { field: n } = t
                              return n?.startsWith(`secret-${e.id}-`)
                            })
                          : [],
                        onChange: (e) => ei(en.map((t) => (t.id === e.id ? e : t))),
                        onDelete: () =>
                          ei(
                            en.filter((t) => {
                              let { id: n } = t
                              return n !== e.id
                            }),
                          ),
                      },
                      e.id,
                    ),
                  ),
                })
              : null),
          (F[4] = ee),
          (F[5] = et),
          (F[6] = W),
          (F[7] = eo),
          (F[8] = G),
          (F[9] = er),
          (F[10] = Y),
          (F[11] = X),
          (F[12] = J),
          (F[13] = en),
          (F[14] = ed),
          (F[15] = g),
          (F[16] = x),
          (F[17] = y),
          (F[18] = w),
          (F[19] = j),
          (F[20] = S),
          (F[21] = k),
          (F[22] = M),
          (F[23] = A),
          (F[24] = C),
          (F[25] = _),
          (F[26] = N),
          (F[27] = E),
          (F[28] = P),
          (F[29] = I))
      } else
        ((g = F[15]),
          (x = F[16]),
          (y = F[17]),
          (w = F[18]),
          (j = F[19]),
          (S = F[20]),
          (k = F[21]),
          (M = F[22]),
          (A = F[23]),
          (C = F[24]),
          (_ = F[25]),
          (N = F[26]),
          (E = F[27]),
          (P = F[28]),
          (I = F[29]))
      ;(F[40] !== w
        ? ((L = (e, t) => {
            ea.current = ea.current + 1
            let n = ea.current
            ;(ei([
              ...w,
              {
                id: n,
                name: e,
                value: "",
                source: "environment",
                injectionTarget: { type: "environment_variable", name: e },
              },
            ]),
              es({ id: n, ref: t }))
          }),
          (F[40] = w),
          (F[41] = L))
        : (L = F[41]),
        F[42] !== w
          ? ((z = (e) => {
              let t = (function (e, t) {
                let n = (0, f.d)(
                  t,
                  128,
                  e.filter((t, n) => e.some((e, i) => n !== i && e.name === t.name)).map(({ name: e }) => e),
                  e.map(({ name: e }) => e),
                )
                if (!n.ok) return n
                let { entries: i } = n,
                  r = Math.max(-1, ...e.map(({ id: e }) => e)) + 1,
                  s = e.map((e) => {
                    let t = i.get(e.name)
                    return (i.delete(e.name), void 0 === t ? e : { ...e, value: t })
                  })
                for (let [e, t] of i)
                  s.push({
                    id: r++,
                    name: e,
                    value: t,
                    source: "environment",
                    injectionTarget: { type: "environment_variable", name: e },
                  })
                return { ok: !0, secrets: s }
              })(w, e)
              return (
                t.ok &&
                  (es(null),
                  ei(
                    t.secrets.map((e, t) =>
                      t < w.length ? e : ((ea.current = ea.current + 1), { ...e, id: ea.current }),
                    ),
                  )),
                t
              )
            }),
            (F[42] = w),
            (F[43] = z))
          : (z = F[43]),
        F[44] !== L || F[45] !== z
          ? ((T = (0, i.jsx)(m.Y, { onAddKey: L, onPendingChange: el, onImport: z })),
            (F[44] = L),
            (F[45] = z),
            (F[46] = T))
          : (T = F[46]),
        F[47] !== W ? ((O = W ? (0, i.jsx)(u.A, {}) : null), (F[47] = W), (F[48] = O)) : (O = F[48]),
        F[49] !== g || F[50] !== T || F[51] !== O || F[52] !== N || F[53] !== E
          ? ((R = (0, i.jsxs)(g, { className: N, children: [E, T, O] })),
            (F[49] = g),
            (F[50] = T),
            (F[51] = O),
            (F[52] = N),
            (F[53] = E),
            (F[54] = R))
          : (R = F[54]),
        F[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, i.jsx)(o.A, {
              id: "restricted.environmentSetup.batchSecrets.cancel",
              defaultMessage: "Cancel",
              description: "Discards unsaved batch secret edits and closes the modal",
            })),
            (F[55] = D))
          : (D = F[55]),
        F[56] !== Y
          ? ((V = (0, i.jsx)(l.$, { className: "me-auto", color: "secondary", onClick: Y, children: D })),
            (F[56] = Y),
            (F[57] = V))
          : (V = F[57]))
      let eu = W || eo
      return (
        F[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = (0, i.jsx)(o.A, {
              id: "restricted.environmentSetup.batchSecrets.save",
              defaultMessage: "Save",
              description: "Stages edited cloud environment secrets until the environment panel is saved",
            })),
            (F[58] = H))
          : (H = F[58]),
        F[59] !== eu
          ? (($ = (0, i.jsx)(l.$, { color: "primary", disabled: eu, type: "submit", children: H })),
            (F[59] = eu),
            (F[60] = $))
          : ($ = F[60]),
        F[61] !== V || F[62] !== $
          ? ((B = (0, i.jsx)(c.OO, { className: "shrink-0", children: (0, i.jsxs)(c.Es, { children: [V, $] }) })),
            (F[61] = V),
            (F[62] = $),
            (F[63] = B))
          : (B = F[63]),
        F[64] !== x ||
        F[65] !== j ||
        F[66] !== S ||
        F[67] !== k ||
        F[68] !== M ||
        F[69] !== R ||
        F[70] !== B ||
        F[71] !== P ||
        F[72] !== I
          ? ((U = (0, i.jsxs)(x, { as: P, noValidate: I, className: j, onSubmit: S, children: [k, M, R, B] })),
            (F[64] = x),
            (F[65] = j),
            (F[66] = S),
            (F[67] = k),
            (F[68] = M),
            (F[69] = R),
            (F[70] = B),
            (F[71] = P),
            (F[72] = I),
            (F[73] = U))
          : (U = F[73]),
        F[74] !== y || F[75] !== A || F[76] !== C || F[77] !== _ || F[78] !== U
          ? ((q = (0, i.jsx)(y, { open: A, size: C, onOpenChange: _, children: U })),
            (F[74] = y),
            (F[75] = A),
            (F[76] = C),
            (F[77] = _),
            (F[78] = U),
            (F[79] = q))
          : (q = F[79]),
        q
      )
    }
    function b(e) {
      let { id: t } = e
      return t
    }
  },
  SbKN(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("slpy"),
      a = n("plV3"),
      o = n("on57"),
      l = n("Wf1j"),
      d = n("oyxz"),
      c = n("Sm6l"),
      u = n("HOLv"),
      m = n("bVeK"),
      p = n("BSnr"),
      v = n("AWNZ"),
      h = n("ZEx5"),
      f = n("NxjN"),
      g = n("jf0i"),
      b = n("K489")
    function x(e) {
      return (0, i.jsx)(b.o, { issue: e }, e.field)
    }
    function y(e) {
      return e.injectionTarget?.name ?? e.name
    }
    n.d(
      t,
      {},
      {
        m: function (e) {
          let t,
            n,
            b,
            w,
            j,
            S,
            k,
            M,
            A,
            C = (0, r.c)(29),
            { secrets: _, conflictRows: N, issues: E, isReadOnly: P, readOnlyTooltip: I, showHeading: L, onEdit: z } = e
          C[0] !== E ? ((t = void 0 === E ? [] : E), (C[0] = E), (C[1] = t)) : (t = C[1])
          let T = t,
            O = void 0 === L || L,
            R = (0, l.A)(),
            D = P ? I : null
          return (
            C[2] !== R
              ? ((n = R.formatMessage({
                  id: "environmentSetup.secrets.manageLabel",
                  defaultMessage: "Manage secrets",
                  description:
                    "Accessible label for opening the editor to add, edit, import, or remove network secrets",
                })),
                (C[2] = R),
                (C[3] = n))
              : (n = C[3]),
            C[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = (0, i.jsx)(d.A, {
                  id: "environmentSetup.secrets.manage",
                  defaultMessage: "Manage",
                  description: "Button to open the editor for adding, editing, importing, and removing network secrets",
                })),
                (C[4] = b))
              : (b = C[4]),
            C[5] !== P || C[6] !== z || C[7] !== D || C[8] !== n
              ? ((w = (0, i.jsx)(f.F, {
                  tooltipContent: D,
                  "aria-label": n,
                  color: "secondary",
                  disabled: P,
                  size: "settingsAction",
                  onClick: z,
                  children: b,
                })),
                (C[5] = P),
                (C[6] = z),
                (C[7] = D),
                (C[8] = n),
                (C[9] = w))
              : (w = C[9]),
            C[10] !== R || C[11] !== O
              ? ((j = O
                  ? (0, i.jsxs)("div", {
                      className: "flex items-center gap-1",
                      children: [
                        (0, i.jsx)(d.A, {
                          id: "environmentSetup.networkSecrets.title",
                          defaultMessage: "HTTP secrets",
                          description:
                            "Heading for secrets injected into HTTP and HTTPS requests in cloud environment settings",
                        }),
                        (0, i.jsx)(s.m, {
                          content: (0, i.jsx)(d.A, {
                            id: "restricted.environmentSetup.sidePanel.secrets.tooltip",
                            defaultMessage:
                              "Secrets stay outside the environment. Code receives a placeholder that is replaced only in HTTP and HTTPS requests to allowed domains. Saving a secret also allows access to its domains.",
                            description: "Tooltip explaining how proxy secrets are protected and delivered",
                          }),
                          children: (0, i.jsx)(c.$, {
                            "aria-label": R.formatMessage({
                              id: "restricted.environmentSetup.sidePanel.secrets.tooltip.label",
                              defaultMessage: "About HTTP secrets",
                              description: "Accessible label for the network secrets information tooltip",
                            }),
                            color: "ghostSecondary",
                            size: "inline",
                            type: "button",
                            children: (0, i.jsx)(u.I, { asset: a.c }),
                          }),
                        }),
                      ],
                    })
                  : null),
                (C[10] = R),
                (C[11] = O),
                (C[12] = j))
              : (j = C[12]),
            C[13] !== w || C[14] !== j
              ? ((S = (0, i.jsx)(p.X.Header, {
                  className: "select-none",
                  actions: w,
                  size: "base",
                  spacing: "compact",
                  title: j,
                })),
                (C[13] = w),
                (C[14] = j),
                (C[15] = S))
              : (S = C[15]),
            C[16] !== N || C[17] !== R || C[18] !== P || C[19] !== T || C[20] !== z || C[21] !== I || C[22] !== _
              ? ((k =
                  0 !== _.length || N?.size
                    ? (0, g.i)(
                        _,
                        y,
                        (e) => {
                          let t = T.filter((t) => {
                              let { field: n } = t
                              return n?.startsWith(`secret-${e.id}-`)
                            }),
                            n =
                              !0 === e.isMissing &&
                              "user_provided" !== e.source &&
                              null == e.serverId &&
                              0 === e.value.length,
                            r = (0, i.jsx)("span", {
                              "aria-hidden": "true",
                              children: (0, i.jsx)(d.A, {
                                id: "environmentSetup.secret.mask",
                                defaultMessage: "••••••••",
                                description:
                                  "Eight bullet characters masking a saved or staged secret; preserve these masking characters",
                              }),
                            })
                          return (
                            n
                              ? (r = (0, i.jsx)(d.A, {
                                  id: "restricted.environmentSetup.configuration.secret.missing",
                                  defaultMessage: "Missing",
                                  description:
                                    "Status for a cloud environment secret requirement with no saved or staged value",
                                }))
                              : "user_provided" === e.source
                                ? (r = (0, i.jsx)(d.A, {
                                    id: "restricted.environmentSetup.configuration.secret.source.userProvided",
                                    defaultMessage: "User-provided",
                                    description: "A cloud environment secret supplied by the executing user",
                                  }))
                                : 0 !== e.value.length ||
                                  null != e.serverId ||
                                  (P && "environment" === e.source) ||
                                  (r = (0, i.jsx)(d.A, {
                                    id: "restricted.environmentSetup.configuration.secret.noValue",
                                    defaultMessage: "No value",
                                    description:
                                      "Status for an environment secret with no value stored in the current mock editor",
                                  })),
                            (0, i.jsx)(
                              v.ic,
                              {
                                className: "select-none",
                                controlSizing: "content",
                                variant: "featured",
                                size: "compact",
                                control: (e) =>
                                  (0, i.jsxs)(i.Fragment, {
                                    children: [
                                      (0, i.jsx)("span", {
                                        className: (0, o.A)(
                                          "text-base select-none",
                                          n ? "text-danger" : "text-secondary",
                                        ),
                                        children: r,
                                      }),
                                      (0, i.jsx)(f.F, {
                                        tooltipContent: P ? I : null,
                                        "aria-describedby": e["aria-describedby"],
                                        "data-environment-invalid": t.length > 0,
                                        "aria-label": R.formatMessage({
                                          id: "restricted.environmentSetup.configuration.secret.edit",
                                          defaultMessage: "Edit secret",
                                          description:
                                            "Accessible label for editing a simulated cloud environment secret declaration",
                                        }),
                                        color: "ghost",
                                        size: "icon",
                                        disabled: P,
                                        onClick: z,
                                        children: (0, i.jsx)(m.Npl, {}),
                                      }),
                                    ],
                                  }),
                                icon: (0, i.jsx)(m.iNn, {}),
                                label: (0, i.jsx)("span", {
                                  className: "block truncate",
                                  children: e.injectionTarget?.name ?? e.name,
                                }),
                                description:
                                  0 === t.length
                                    ? void 0
                                    : (0, i.jsx)("div", { className: "flex flex-col gap-1", children: t.map(x) }),
                              },
                              e.id,
                            )
                          )
                        },
                        N,
                      )
                    : (0, i.jsx)(v.ic, {
                        className: "select-none",
                        controlSizing: "content",
                        variant: "featured",
                        size: "compact",
                        control: null,
                        icon: (0, i.jsx)(m.iNn, { className: "text-secondary" }),
                        label: (0, i.jsx)(d.A, {
                          id: "restricted.environmentSetup.configuration.secret.empty",
                          defaultMessage: "No HTTP secrets added",
                          description: "Description shown when a cloud environment has no proxy secret declarations",
                        }),
                      })),
                (C[16] = N),
                (C[17] = R),
                (C[18] = P),
                (C[19] = T),
                (C[20] = z),
                (C[21] = I),
                (C[22] = _),
                (C[23] = k))
              : (k = C[23]),
            C[24] !== k
              ? ((M = (0, i.jsx)(p.X.Content, { children: (0, i.jsx)(h.t, { children: k }) })),
                (C[24] = k),
                (C[25] = M))
              : (M = C[25]),
            C[26] !== M || C[27] !== S
              ? ((A = (0, i.jsxs)("section", {
                  className: "flex flex-col",
                  "data-environment-section": "secrets",
                  children: [S, M],
                })),
                (C[26] = M),
                (C[27] = S),
                (C[28] = A))
              : (A = C[28]),
            A
          )
        },
      },
    )
  },
  SXhj(e, t, n) {
    var i = n("Qgfj")
    let r = (0, i.zR)({
        id: "environmentSetup.description.label",
        defaultMessage: "Description",
        description: "Label for a saved cloud environment's description in its settings and pending changes",
      }),
      s = (0, i.YK)({
        variables: {
          id: "restricted.environmentSetup.changes.variables",
          defaultMessage: "Environment variables",
          description: "Changed environment-owned runtime variable names or values in the change summary",
        },
        tcpAccess: {
          id: "environmentSetup.changes.tcpAccess",
          defaultMessage: "TCP access",
          description: "Changed TCP destination grants in the environment change summary",
        },
        connections: {
          id: "restricted.environmentSetup.changes.connections",
          defaultMessage: "Outbound identity connections",
          description: "Changed outbound identity connection attachments or aliases in the environment change summary",
        },
        name: {
          id: "restricted.environmentSetup.changes.name",
          defaultMessage: "Environment name",
          description: "Changed environment name in the change summary",
        },
        scripts: {
          id: "restricted.environmentSetup.changes.scripts",
          defaultMessage: "Scripts",
          description: "Changed install script or start skill in the environment change summary",
        },
        network: {
          id: "restricted.environmentSetup.changes.network",
          defaultMessage: "Internet access",
          description: "Changed internet access policy in the environment change summary",
        },
        repositories: {
          id: "restricted.environmentSetup.changes.repositories",
          defaultMessage: "Repositories",
          description: "Changed repositories in the environment change summary",
        },
        secrets: {
          id: "restricted.environmentSetup.changes.secrets",
          defaultMessage: "Secrets",
          description: "Changed secret requirements or values in the environment change summary",
        },
        privacy: {
          id: "restricted.environmentSetup.changes.privacy",
          defaultMessage: "Privacy",
          description: "Changed sharing settings in the environment change summary",
        },
      })
    n.d(t, {}, { S: r, b: s })
  },
  JiLO(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("slpy"),
      a = n("on57")
    n.d(
      t,
      {},
      {
        V: function (e) {
          let t,
            n,
            o,
            l = (0, r.c)(13),
            { children: d, reason: c, label: u, className: m } = e,
            p = c ?? "",
            v = null != c && void 0
          l[0] !== m
            ? ((t = (0, a.A)(
                "inline-flex rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                m,
              )),
              (l[0] = m),
              (l[1] = t))
            : (t = l[1])
          let h = null != c || void 0,
            f = null == c ? void 0 : u,
            g = null == c ? void 0 : "group",
            b = null == c ? void 0 : 0
          return (
            l[2] !== d || l[3] !== t || l[4] !== h || l[5] !== f || l[6] !== g || l[7] !== b
              ? ((n = (0, i.jsx)("div", {
                  className: t,
                  "aria-disabled": h,
                  "aria-label": f,
                  role: g,
                  tabIndex: b,
                  children: d,
                })),
                (l[2] = d),
                (l[3] = t),
                (l[4] = h),
                (l[5] = f),
                (l[6] = g),
                (l[7] = b),
                (l[8] = n))
              : (n = l[8]),
            l[9] !== p || l[10] !== v || l[11] !== n
              ? ((o = (0, i.jsx)(s.m, { content: p, forceOpen: v, children: n })),
                (l[9] = p),
                (l[10] = v),
                (l[11] = n),
                (l[12] = o))
              : (o = l[12]),
            o
          )
        },
      },
    )
  },
  ZRUt(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("oyxz")
    n.d(
      t,
      {},
      {
        A: function () {
          let e,
            t = (0, r.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)("p", {
                  className: "text-sm text-danger select-none",
                  role: "alert",
                  children: (0, i.jsx)(s.A, {
                    id: "restricted.environmentSetup.batchSecrets.conflict",
                    defaultMessage:
                      "This environment changed elsewhere. Close and reopen the editor to load the latest version, then re-enter your edits",
                    description:
                      "Explains that private batch edits cannot replace a newer environment configuration and how to reopen the latest version",
                  }),
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
      },
    )
  },
  rQvE(e, t, n) {
    n.d(
      t,
      {},
      {
        p: function (e, t) {
          return (
            e?.id !== t?.id ||
            e?.version_id !== t?.version_id ||
            e?.draft?.id !== t?.draft?.id ||
            e?.draft?.revision !== t?.draft?.revision
          )
        },
      },
    )
  },
  qoby(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("zd8w"),
      a = n("Wf1j"),
      o = n("oyxz"),
      l = n("zLIa")
    n.d(
      t,
      {},
      {
        Y: function (e) {
          let t,
            n,
            d,
            c,
            u,
            m,
            p,
            v,
            h,
            f,
            g,
            b,
            x,
            y,
            w,
            j,
            S = (0, r.c)(44),
            { ref: k, onAddKey: M, onImport: A, onPendingChange: C } = e,
            _ = (0, a.A)(),
            N = (0, s.useId)(),
            [E, P] = (0, s.useState)(""),
            [I, L] = (0, s.useState)(null),
            z = (0, s.useRef)(!1),
            T = (0, s.useRef)(null)
          S[0] !== A || S[1] !== C
            ? ((t = function (e) {
                let t = A(e)
                ;(L(t), P(t.ok ? "" : e), C(!t.ok && e.trim().length > 0))
              }),
              (S[0] = A),
              (S[1] = C),
              (S[2] = t))
            : (t = S[2])
          let O = t
          S[3] !== O || S[4] !== E
            ? ((n = function (e) {
                let t = T.current
                null != t && (O(E.slice(0, t.selectionStart) + e + E.slice(t.selectionEnd)), t.focus())
              }),
              (S[3] = O),
              (S[4] = E),
              (S[5] = n))
            : (n = S[5])
          let R = n
          ;(S[6] !== R ? ((d = () => ({ importText: R })), (S[6] = R), (S[7] = d)) : (d = S[7]),
            (0, s.useImperativeHandle)(k, d),
            S[8] !== M || S[9] !== C
              ? ((c = function (e) {
                  let { value: t, selectionStart: n, selectionEnd: i, selectionDirection: r } = e
                  ;(P(t),
                    L(null),
                    C(t.trim().length > 0),
                    z.current ||
                      !t ||
                      /[=\r\n]/.test(t) ||
                      (M(t, (e) => {
                        ;(e?.focus(), e?.setSelectionRange(n, i, r))
                      }),
                      P(""),
                      C(!1)))
                }),
                (S[8] = M),
                (S[9] = C),
                (S[10] = c))
              : (c = S[10]))
          let D = c
          S[11] !== _
            ? ((u = _.formatMessage({
                id: "environmentSetup.entries.input",
                defaultMessage: "Paste .env or type a key",
                description: "Accessible label for adding entries to the network secret or environment variable editor",
              })),
              (S[11] = _),
              (S[12] = u))
            : (u = S[12])
          let V = I?.ok === !1,
            H = I?.ok === !1 ? N : void 0
          return (
            S[13] !== _
              ? ((m = _.formatMessage({
                  id: "environmentSetup.entries.placeholder",
                  defaultMessage: "Paste your .env or type a key",
                  description: "Input accepts dotenv contents to import multiple entries, or a name to add one entry",
                })),
                (S[13] = _),
                (S[14] = m))
              : (m = S[14]),
            S[15] !== D ? ((p = (e) => D(e.currentTarget)), (S[15] = D), (S[16] = p)) : (p = S[16]),
            S[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = () => {
                  z.current = !0
                }),
                (S[17] = v))
              : (v = S[17]),
            S[18] !== D
              ? ((h = (e) => {
                  ;((z.current = !1), D(e.currentTarget))
                }),
                (S[18] = D),
                (S[19] = h))
              : (h = S[19]),
            S[20] !== O || S[21] !== E
              ? ((f = (e) => {
                  "Enter" !== e.key ||
                    e.shiftKey ||
                    e.nativeEvent.isComposing ||
                    (e.preventDefault(), e.stopPropagation(), O(E))
                }),
                (S[20] = O),
                (S[21] = E),
                (S[22] = f))
              : (f = S[22]),
            S[23] !== R
              ? ((g = (e) => {
                  let t = e.clipboardData.getData("text/plain")
                  ;(t.includes("=") || t.includes("\n")) && (e.preventDefault(), R(t))
                }),
                (S[23] = R),
                (S[24] = g))
              : (g = S[24]),
            S[25] !== h ||
            S[26] !== f ||
            S[27] !== g ||
            S[28] !== u ||
            S[29] !== V ||
            S[30] !== H ||
            S[31] !== m ||
            S[32] !== p ||
            S[33] !== E
              ? ((b = (0, i.jsx)(l.TM, {
                  ref: T,
                  "aria-label": u,
                  "aria-invalid": V,
                  "aria-describedby": H,
                  autoComplete: "off",
                  autoFocus: !0,
                  focusIndicator: "border",
                  spellCheck: !1,
                  placeholder: m,
                  rows: 1,
                  value: E,
                  variant: "compact",
                  onChange: p,
                  onCompositionStart: v,
                  onCompositionEnd: h,
                  onKeyDown: f,
                  onPaste: g,
                })),
                (S[25] = h),
                (S[26] = f),
                (S[27] = g),
                (S[28] = u),
                (S[29] = V),
                (S[30] = H),
                (S[31] = m),
                (S[32] = p),
                (S[33] = E),
                (S[34] = b))
              : (b = S[34]),
            S[35] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (0, i.jsx)("div", { className: "w-8 shrink-0", "aria-hidden": !0 })), (S[35] = x))
              : (x = S[35]),
            S[36] !== b
              ? ((y = (0, i.jsxs)("div", { className: "flex gap-2", children: [b, x] })), (S[36] = b), (S[37] = y))
              : (y = S[37]),
            S[38] !== I || S[39] !== N
              ? ((w =
                  I?.ok === !1
                    ? (0, i.jsx)("p", {
                        id: N,
                        className: "text-sm text-danger",
                        role: "alert",
                        children: (0, i.jsx)(o.A, {
                          id: "environmentSetup.entries.invalid",
                          defaultMessage: "Line {line} is invalid or repeats an unavailable key; nothing was imported",
                          description:
                            "An invalid or duplicate name rejected the entire import without changing any rows",
                          values: { line: I.line },
                        }),
                      })
                    : null),
                (S[38] = I),
                (S[39] = N),
                (S[40] = w))
              : (w = S[40]),
            S[41] !== y || S[42] !== w
              ? ((j = (0, i.jsxs)("div", { className: "flex flex-col gap-2", children: [y, w] })),
                (S[41] = y),
                (S[42] = w),
                (S[43] = j))
              : (j = S[43]),
            j
          )
        },
      },
    )
  },
  ECQF(e, t, n) {
    n.d(
      t,
      {},
      {
        d: function (e, t, n = [], i = []) {
          let r = e.trim(),
            s = /^[A-Za-z_][A-Za-z0-9_]*$/.test(r)
          if (s && (i.includes(r) || n.includes(r))) return { ok: !1, reason: "duplicate", line: 1 }
          let a = (s ? `${r}=` : e).split(/\r?\n/),
            o = new Map()
          for (let e = 0; e < a.length; e++) {
            let i = a[e].trim(),
              r = e + 1
            if ("" === i || i.startsWith("#") || i.startsWith(";")) continue
            let s = /^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=(.*)$/.exec(i)
            if (null == s || s[1].length > t) return { ok: !1, reason: "malformed", line: r }
            let l = s[1]
            if (o.has(l) || n.includes(l)) return { ok: !1, reason: "duplicate", line: r }
            let d = s[2].trim(),
              c = d[0]
            if ('"' === c || "'" === c) {
              let t = 1
              for (; ; t++) {
                if (t >= d.length) {
                  if (++e >= a.length) return { ok: !1, reason: "malformed", line: r }
                  d += `
${a[e]}`
                }
                if ("\\" === d[t] && '"' === c) t++
                else if (d[t] === c) break
              }
              let n = d.slice(t + 1).trim()
              if ("" !== n && !n.startsWith("#")) return { ok: !1, reason: "malformed", line: r }
              d = d.slice(1, t)
            } else d = d.replace(/\s+#.*$/, "").trim()
            o.set(l, d)
          }
          return { ok: !0, entries: o }
        },
      },
    )
  },
  KdHD(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("zd8w"),
      a = n("Wf1j"),
      o = n("Sm6l"),
      l = n("bVeK"),
      d = n("zLIa"),
      c = n("W857"),
      u = n("MVTZ"),
      m = n("JZp5"),
      p = n("iN9g")
    n.d(
      t,
      {},
      {
        b: function (e) {
          let t,
            n,
            v,
            h,
            f,
            g,
            b,
            x,
            y,
            w,
            j,
            S,
            k,
            M,
            A,
            C = (0, r.c)(54),
            {
              keyInputRef: _,
              variable: N,
              keyError: E,
              valueError: P,
              configuration: I,
              disabled: L,
              environmentOnly: z,
              onChange: T,
              onDelete: O,
            } = e,
            R = (0, a.A)(),
            D = (0, s.useId)(),
            V = (void 0 !== L && L) || (void 0 !== z && z),
            H = N.source ?? "environment"
          ;(C[0] !== T || C[1] !== N
            ? ((t = (e) =>
                T({
                  ...N,
                  source: e,
                  optional: "user_provided" === e,
                  value: "",
                  serverId: void 0,
                  personalSecret: void 0,
                  error: void 0,
                })),
              (C[0] = T),
              (C[1] = N),
              (C[2] = t))
            : (t = C[2]),
            C[3] !== V || C[4] !== H || C[5] !== t || C[6] !== N.name
              ? ((n = (0, i.jsx)(u.w, { attached: !0, disabled: V, name: N.name, source: H, onChange: t })),
                (C[3] = V),
                (C[4] = H),
                (C[5] = t),
                (C[6] = N.name),
                (C[7] = n))
              : (n = C[7]))
          let $ = n,
            B = N.name
          ;(C[8] !== R
            ? ((v = R.formatMessage({
                id: "environmentSetup.variables.editor.namePlaceholder",
                defaultMessage: "Key",
                description: "Placeholder for a new cloud environment variable name",
              })),
              (C[8] = R),
              (C[9] = v))
            : (v = C[9]),
            C[10] !== R
              ? ((h = R.formatMessage({
                  id: "environmentSetup.variables.editor.nameInput",
                  defaultMessage: "Variable key",
                  description: "Accessible label for an editable environment variable name",
                })),
                (C[10] = R),
                (C[11] = h))
              : (h = C[11]))
          let U = null != E,
            q = null == E ? void 0 : `${D}-key`
          return (
            C[12] !== T || C[13] !== N
              ? ((f = (e) => T({ ...N, name: e.target.value, personalSecret: void 0 })),
                (C[12] = T),
                (C[13] = N),
                (C[14] = f))
              : (f = C[14]),
            C[15] !== _ || C[16] !== U || C[17] !== q || C[18] !== f || C[19] !== v || C[20] !== h || C[21] !== N.name
              ? ((g = (0, i.jsx)("div", {
                  className: "min-w-0 flex-1 basis-32",
                  children: (0, i.jsx)(d.pd, {
                    ref: _,
                    variant: "segmented",
                    placeholder: v,
                    "aria-label": h,
                    "aria-invalid": U,
                    "aria-describedby": q,
                    autoComplete: "off",
                    maxLength: 256,
                    value: N.name,
                    onChange: f,
                  }),
                })),
                (C[15] = _),
                (C[16] = U),
                (C[17] = q),
                (C[18] = f),
                (C[19] = v),
                (C[20] = h),
                (C[21] = N.name),
                (C[22] = g))
              : (g = C[22]),
            C[23] !== I || C[24] !== D || C[25] !== R || C[26] !== T || C[27] !== $ || C[28] !== P || C[29] !== N
              ? ((b = (0, i.jsx)("div", {
                  className: "min-w-0 flex-2 basis-64",
                  children:
                    "user_provided" === N.source
                      ? (0, i.jsx)(c.u, {
                          id: `${D}-value-input`,
                          scopeControl: $,
                          ariaLabel: R.formatMessage(
                            {
                              id: "restricted.environmentSetup.variables.batch.value",
                              defaultMessage: "Value for {name}",
                              description: "Accessible name of an environment variable value input in the batch editor",
                            },
                            { name: N.name },
                          ),
                          saved: null != N.personalSecret,
                          configuration: I,
                          namespace: "not_sensitive",
                          name: N.name,
                          value: N.value,
                          invalid: null != P,
                          describedBy: null == P ? void 0 : `${D}-value`,
                          onChange: (e) => T({ ...N, value: e }),
                        })
                      : (0, i.jsx)(p.p, {
                          id: `${D}-value-input`,
                          scopeControl: $,
                          ariaLabel: R.formatMessage(
                            {
                              id: "restricted.environmentSetup.variables.batch.value",
                              defaultMessage: "Value for {name}",
                              description: "Accessible name of an environment variable value input in the batch editor",
                            },
                            { name: N.name },
                          ),
                          hasSavedValue: null != N.serverId,
                          value: N.value,
                          ariaInvalid: null != P,
                          ariaDescribedBy: null == P ? void 0 : `${D}-value`,
                          onChange: (e) => T({ ...N, value: e }),
                        }),
                })),
                (C[23] = I),
                (C[24] = D),
                (C[25] = R),
                (C[26] = T),
                (C[27] = $),
                (C[28] = P),
                (C[29] = N),
                (C[30] = b))
              : (b = C[30]),
            C[31] !== g || C[32] !== b
              ? ((x = (0, i.jsxs)("div", {
                  className: "flex min-w-0 flex-1 flex-wrap items-start gap-2",
                  children: [g, b],
                })),
                (C[31] = g),
                (C[32] = b),
                (C[33] = x))
              : (x = C[33]),
            C[34] !== R
              ? ((y = R.formatMessage({
                  id: "restricted.environmentSetup.variables.delete",
                  defaultMessage: "Delete variable",
                  description: "Button to remove the variable from this environment",
                })),
                (C[34] = R),
                (C[35] = y))
              : (y = C[35]),
            C[36] === Symbol.for("react.memo_cache_sentinel")
              ? ((w = (0, i.jsx)(l.cSG, {})), (C[36] = w))
              : (w = C[36]),
            C[37] !== O || C[38] !== y
              ? ((j = (0, i.jsx)("div", {
                  className: "flex h-10 w-8 shrink-0 items-center justify-center",
                  children: (0, i.jsx)(o.$, { "aria-label": y, color: "ghost", size: "icon", onClick: O, children: w }),
                })),
                (C[37] = O),
                (C[38] = y),
                (C[39] = j))
              : (j = C[39]),
            C[40] !== x || C[41] !== j
              ? ((S = (0, i.jsxs)("div", { className: "flex min-w-0 items-start gap-2", children: [x, j] })),
                (C[40] = x),
                (C[41] = j),
                (C[42] = S))
              : (S = C[42]),
            C[43] !== D || C[44] !== E
              ? ((k =
                  null == E
                    ? null
                    : (0, i.jsx)("p", {
                        id: `${D}-key`,
                        className: "text-sm text-danger",
                        role: "alert",
                        children: (0, i.jsx)(m.P, { error: E }),
                      })),
                (C[43] = D),
                (C[44] = E),
                (C[45] = k))
              : (k = C[45]),
            C[46] !== D || C[47] !== P
              ? ((M =
                  null == P
                    ? null
                    : (0, i.jsx)("p", {
                        id: `${D}-value`,
                        className: "text-sm text-danger",
                        role: "alert",
                        children: (0, i.jsx)(m.P, { error: P }),
                      })),
                (C[46] = D),
                (C[47] = P),
                (C[48] = M))
              : (M = C[48]),
            C[49] !== S || C[50] !== k || C[51] !== M || C[52] !== N.name
              ? ((A = (0, i.jsxs)("div", {
                  className: "flex min-w-0 flex-col gap-2",
                  "aria-label": B,
                  role: "group",
                  children: [S, k, M],
                })),
                (C[49] = S),
                (C[50] = k),
                (C[51] = M),
                (C[52] = N.name),
                (C[53] = A))
              : (A = C[53]),
            A
          )
        },
      },
    )
  },
  vw1I(e, t, n) {
    n.d(t, { W: () => V })
    var i = n("ABep"),
      r = n("QosV"),
      s = n("on57"),
      a = n("zTeN"),
      o = n("zd8w"),
      l = n("Wf1j"),
      d = n("oyxz"),
      c = n("SPnB"),
      u = n("bVeK"),
      m = n("BSnr"),
      p = n("AWNZ"),
      v = n("ZEx5"),
      h = n("NxjN"),
      f = n("rQvE"),
      g = n("jf0i"),
      b = n("K489"),
      x = n("NySd"),
      y = n("Sm6l"),
      w = n("PD37"),
      j = n("JNtf"),
      S = n("mUDD"),
      k = n("kFKz"),
      M = n("ZRUt"),
      A = n("qoby"),
      C = n("ECQF"),
      _ = n("KdHD"),
      N = n("zft3")
    function E(e) {
      let t,
        n,
        s,
        a,
        l,
        c,
        u,
        m,
        p,
        v,
        h,
        f,
        g,
        b,
        E,
        D,
        V,
        H,
        $,
        B,
        U,
        q,
        F,
        W,
        G,
        Q,
        Z,
        K,
        Y,
        X,
        J = (0, r.c)(85),
        {
          initialVariables: ee,
          unavailableNames: et,
          hasConflict: en,
          configuration: ei,
          environmentOnly: er,
          onClose: es,
          onSave: ea,
        } = e,
        eo = void 0 !== en && en,
        el = void 0 === ei ? null : ei,
        ed = void 0 !== er && er
      J[0] !== ee
        ? ((t = () => (ee.length > 0 ? ee.map(R) : [{ id: 0, variable: { name: "", value: "", optional: !1 } }])),
          (J[0] = ee),
          (J[1] = t))
        : (t = J[1])
      let [ec, eu] = (0, o.useState)(t),
        [em, ep] = (0, o.useState)(null),
        [ev, eh] = (0, o.useState)(!1),
        [ef, eg] = (0, o.useState)(!1),
        eb = (0, o.useRef)(null),
        ex = (0, o.useRef)(0),
        ey = (0, o.useRef)(0),
        [ew, ej] = (0, o.useState)(!1),
        [eS, ek] = (0, o.useState)(!1),
        [eM, eA] = (0, o.useState)(null)
      if (J[2] !== ee || J[3] !== ec || J[4] !== et) {
        let e, t
        ;(J[9] !== ee.length
          ? ((e = (e) => {
              let { id: t, variable: n } = e
              return t < ee.length || n.name.length > 0 || n.value.length > 0 || "user_provided" === n.source
            }),
            (J[9] = ee.length),
            (J[10] = e))
          : (e = J[10]),
          (l = (n = ec.filter(e)).map(O)),
          J[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(d.A, {
                id: "restricted.environmentSetup.variables.batch.title",
                defaultMessage: "Manage environment variables",
                description: "Title of the batch environment variable editor",
              })),
              (J[11] = t))
            : (t = J[11]),
          (a = t),
          (s = new Map(
            n.map((e, t) => {
              let { id: n, variable: i } = e
              return [
                n,
                {
                  key: (0, N.Ow)(i.name, [...et, ...l.filter((e, n) => n !== t).map(T)]),
                  value: ee.includes(i) ? null : (0, N.Ym)(i.value, null != i.serverId, "user_provided" === i.source),
                },
              ]
            }),
          )),
          (J[2] = ee),
          (J[3] = ec),
          (J[4] = et),
          (J[5] = n),
          (J[6] = s),
          (J[7] = a),
          (J[8] = l))
      } else ((n = J[5]), (s = J[6]), (a = J[7]), (l = J[8]))
      let eC = s
      J[12] !== eo
        ? ((c = function (e) {
            ;(0, x.aA)(e.dataTransfer) &&
              (e.preventDefault(),
              e.stopPropagation(),
              (e.dataTransfer.dropEffect = eo ? "none" : "copy"),
              "dragenter" === e.type && (ex.current = ex.current + 1),
              ej(!eo))
          }),
          (J[12] = eo),
          (J[13] = c))
        : (c = J[13])
      let e_ = c
      J[14] !== eo
        ? ((u = async function (e) {
            if (!(0, x.aA)(e.dataTransfer)) return
            ;(e.preventDefault(), e.stopPropagation(), (ex.current = 0), ej(!1))
            let t = (ey.current = ey.current + 1)
            if ((ek(!1), eo)) return
            let n = (0, k.p)(e.dataTransfer)
            if (1 !== n.length || n[0].isDirectory || !/^(?:\.env(?:\..+)?|.+\.env)$/i.test(n[0].file.name))
              return void eA("unsupported")
            let i = e.currentTarget
            ;(eA(null), ek(!0))
            let r = await n[0].file.text().catch(z)
            if (i.isConnected && ey.current === t) {
              if ((ek(!1), null == r)) return void eA("read")
              eb.current?.importText(r)
            }
          }),
          (J[14] = eo),
          (J[15] = u))
        : (u = J[15])
      let eN = u
      ;(J[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = (e) => {
            ;(0, x.aA)(e.dataTransfer) &&
              (e.stopPropagation(),
              (ex.current = Math.max(0, ex.current - 1)),
              (0 === ex.current || (e.relatedTarget instanceof Node && !e.currentTarget.contains(e.relatedTarget))) &&
                ((ex.current = 0), ej(!1)))
          }),
          (J[16] = m))
        : (m = J[16]),
        J[17] !== eN ? ((p = (e) => void eN(e)), (J[17] = eN), (J[18] = p)) : (p = J[18]),
        J[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = () => {
              ;((ex.current = 0), ej(!1))
            }),
            (J[19] = v))
          : (v = J[19]),
        J[20] !== e_ || J[21] !== p
          ? ((h = { onDragEnter: e_, onDragOver: e_, onDragLeave: m, onDrop: p, onDragEnd: v }),
            (J[20] = e_),
            (J[21] = p),
            (J[22] = h))
          : (h = J[22]),
        J[23] !== es
          ? ((f = (e) => {
              e || es()
            }),
            (J[23] = es),
            (J[24] = f))
          : (f = J[24]),
        J[25] !== eC || J[26] !== eo || J[27] !== ev || J[28] !== eS || J[29] !== ea || J[30] !== l
          ? ((g = (e) => {
              ;(e.preventDefault(),
                e.stopPropagation(),
                eg(!0),
                !eo && !eS && !ev && [...eC.values()].every(L) && ea(l))
            }),
            (J[25] = eC),
            (J[26] = eo),
            (J[27] = ev),
            (J[28] = eS),
            (J[29] = ea),
            (J[30] = l),
            (J[31] = g))
          : (g = J[31]),
        J[32] !== a
          ? ((b = (0, i.jsx)(j.L3, { className: "sr-only", children: a })), (J[32] = a), (J[33] = b))
          : (b = J[33]),
        J[34] !== a
          ? ((E = (0, i.jsx)(S.OO, { className: "shrink-0", children: (0, i.jsx)(S.c7, { title: a }) })),
            (J[34] = a),
            (J[35] = E))
          : (E = J[35]),
        J[36] !== el || J[37] !== ed || J[38] !== eC || J[39] !== em || J[40] !== ec || J[41] !== ef
          ? ((D =
              ec.length > 0
                ? (0, i.jsx)("div", {
                    className: "flex flex-col gap-3",
                    children: ec.map((e) => {
                      let { id: t, variable: n } = e
                      return (0, i.jsx)(
                        _.b,
                        {
                          environmentOnly: ed,
                          keyInputRef: em?.id === t ? em.ref : void 0,
                          configuration: el,
                          variable: n,
                          keyError: ef ? (eC.get(t)?.key ?? null) : null,
                          valueError: ef ? (eC.get(t)?.value ?? null) : null,
                          onChange: (e) => eu(ec.map((n) => (n.id === t ? { id: t, variable: e } : n))),
                          onDelete: () => eu(ec.filter((e) => e.id !== t)),
                        },
                        t,
                      )
                    }),
                  })
                : null),
            (J[36] = el),
            (J[37] = ed),
            (J[38] = eC),
            (J[39] = em),
            (J[40] = ec),
            (J[41] = ef),
            (J[42] = D))
          : (D = J[42]),
        J[43] !== n || J[44] !== ec
          ? ((V = (e, t) => {
              let i = Math.max(-1, ...ec.map(I)) + 1
              ;(eu([...n, { id: i, variable: { name: e, value: "", optional: !1 } }]), ep({ id: i, ref: t }))
            }),
            (J[43] = n),
            (J[44] = ec),
            (J[45] = V))
          : (V = J[45]),
        J[46] !== n || J[47] !== ec || J[48] !== et || J[49] !== l
          ? ((H = (e) => {
              eA(null)
              let t = (function (e, t, n) {
                let i = (0, C.d)(
                  t,
                  256,
                  [...n, ...e.filter((t, n) => e.some((e, i) => n !== i && e.name === t.name)).map(({ name: e }) => e)],
                  e.map(({ name: e }) => e),
                )
                if (!i.ok) return i
                let { entries: r } = i,
                  s = e.map((e) => {
                    let t = r.get(e.name)
                    return (r.delete(e.name), void 0 === t ? e : { ...e, value: t })
                  })
                for (let [e, t] of r) s.push({ name: e, value: t, optional: !1 })
                return { ok: !0, variables: s }
              })(l, e, et)
              if (t.ok) {
                ep(null)
                let e = Math.max(-1, ...ec.map(P)) + 1
                eu(t.variables.map((t, i) => ({ id: n[i]?.id ?? e + i, variable: t })))
              }
              return t
            }),
            (J[46] = n),
            (J[47] = ec),
            (J[48] = et),
            (J[49] = l),
            (J[50] = H))
          : (H = J[50]),
        J[51] !== V || J[52] !== H
          ? (($ = (0, i.jsx)(A.Y, { ref: eb, onAddKey: V, onPendingChange: eh, onImport: H })),
            (J[51] = V),
            (J[52] = H),
            (J[53] = $))
          : ($ = J[53]),
        J[54] !== eM
          ? ((B =
              null != eM
                ? (0, i.jsx)("p", {
                    className: "text-sm text-danger",
                    role: "alert",
                    children:
                      "unsupported" === eM
                        ? (0, i.jsx)(d.A, {
                            id: "environmentSetup.variables.fileDrop.unsupported",
                            defaultMessage: "Drop one .env file at a time",
                            description:
                              "Error when the environment variable editor receives multiple files, a folder, or a file that is not a dotenv file",
                          })
                        : (0, i.jsx)(d.A, {
                            id: "environmentSetup.variables.fileDrop.readFailed",
                            defaultMessage: "Could not read this file. Try again or paste its contents",
                            description: "Error when a dropped environment variable file cannot be read",
                          }),
                  })
                : null),
            (J[54] = eM),
            (J[55] = B))
          : (B = J[55]),
        J[56] !== eo ? ((U = eo ? (0, i.jsx)(M.A, {}) : null), (J[56] = eo), (J[57] = U)) : (U = J[57]),
        J[58] !== D || J[59] !== $ || J[60] !== B || J[61] !== U
          ? ((q = (0, i.jsxs)(S.OO, { className: "min-h-0 gap-4 overflow-y-auto", children: [D, $, B, U] })),
            (J[58] = D),
            (J[59] = $),
            (J[60] = B),
            (J[61] = U),
            (J[62] = q))
          : (q = J[62]),
        J[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, i.jsx)(d.A, {
              id: "restricted.environmentSetup.variables.batch.cancel",
              defaultMessage: "Cancel",
              description: "Discards unsaved batch environment variable edits",
            })),
            (J[63] = F))
          : (F = J[63]),
        J[64] !== es
          ? ((W = (0, i.jsx)(y.$, { className: "me-auto", color: "secondary", onClick: es, children: F })),
            (J[64] = es),
            (J[65] = W))
          : (W = J[65]))
      let eE = eo || ev || eS
      return (
        J[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = (0, i.jsx)(d.A, {
              id: "restricted.environmentSetup.variables.save",
              defaultMessage: "Save",
              description: "Button to apply edits to an environment variable",
            })),
            (J[66] = G))
          : (G = J[66]),
        J[67] !== eE
          ? ((Q = (0, i.jsx)(y.$, { color: "primary", disabled: eE, type: "submit", children: G })),
            (J[67] = eE),
            (J[68] = Q))
          : (Q = J[68]),
        J[69] !== W || J[70] !== Q
          ? ((Z = (0, i.jsx)(S.OO, { className: "shrink-0", children: (0, i.jsxs)(S.Es, { children: [W, Q] }) })),
            (J[69] = W),
            (J[70] = Q),
            (J[71] = Z))
          : (Z = J[71]),
        J[72] !== g || J[73] !== b || J[74] !== E || J[75] !== q || J[76] !== Z
          ? ((K = (0, i.jsxs)(S.R4, {
              as: "form",
              noValidate: !0,
              className: "max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] overflow-hidden",
              onSubmit: g,
              children: [b, E, q, Z],
            })),
            (J[72] = g),
            (J[73] = b),
            (J[74] = E),
            (J[75] = q),
            (J[76] = Z),
            (J[77] = K))
          : (K = J[77]),
        J[78] !== ew
          ? ((Y = ew
              ? (0, i.jsx)(w.D, {
                  tone: "neutral",
                  inert: !0,
                  children: (0, i.jsx)(d.A, {
                    id: "environmentSetup.variables.fileDrop.prompt",
                    defaultMessage: "Drop .env to import variables",
                    description:
                      "Overlay shown while dragging a file over the environment variable editor; .env is a file extension",
                  }),
                })
              : null),
            (J[78] = ew),
            (J[79] = Y))
          : (Y = J[79]),
        J[80] !== h || J[81] !== f || J[82] !== K || J[83] !== Y
          ? ((X = (0, i.jsxs)(j.lG, { open: !0, size: "xxwide", contentProps: h, onOpenChange: f, children: [K, Y] })),
            (J[80] = h),
            (J[81] = f),
            (J[82] = K),
            (J[83] = Y),
            (J[84] = X))
          : (X = J[84]),
        X
      )
    }
    function P(e) {
      let { id: t } = e
      return t
    }
    function I(e) {
      return e.id
    }
    function L(e) {
      let { key: t, value: n } = e
      return null == t && null == n
    }
    function z() {
      return null
    }
    function T(e) {
      let { name: t } = e
      return t
    }
    function O(e) {
      let { variable: t } = e
      return t
    }
    function R(e, t) {
      return { id: t, variable: e }
    }
    var D = n("Q00z")
    function V(e) {
      let t,
        n,
        s,
        a,
        c,
        b,
        x,
        y,
        w,
        j,
        S = (0, r.c)(36),
        {
          config: k,
          configuration: M,
          variables: A,
          conflictRows: C,
          issues: _,
          unavailableNames: N,
          isReadOnly: P,
          readOnlyTooltip: I,
          onChange: L,
          showHeading: z,
          environmentOnly: T,
        } = e,
        O = void 0 === z || z,
        R = void 0 !== T && T,
        D = (0, l.A)(),
        [V, U] = (0, o.useState)(null)
      ;(P && null != V && U(null),
        S[0] !== D
          ? ((t = D.formatMessage({
              id: "environmentSetup.variables.manageLabel",
              defaultMessage: "Manage environment variables",
              description:
                "Accessible label for opening the editor to add, edit, import, or remove environment variables",
            })),
            (S[0] = D),
            (S[1] = t))
          : (t = S[1]))
      let q = P ? I : null
      return (
        S[2] !== k || S[3] !== A
          ? ((n = () => U({ config: k, variables: A })), (S[2] = k), (S[3] = A), (S[4] = n))
          : (n = S[4]),
        S[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)(d.A, {
              id: "environmentSetup.variables.manage",
              defaultMessage: "Manage",
              description:
                "Button to open the editor for adding, editing, importing, and removing environment variables",
            })),
            (S[5] = s))
          : (s = S[5]),
        S[6] !== P || S[7] !== t || S[8] !== q || S[9] !== n
          ? ((a = (0, i.jsx)(h.F, {
              "aria-label": t,
              color: "secondary",
              disabled: P,
              tooltipContent: q,
              size: "settingsAction",
              onClick: n,
              children: s,
            })),
            (S[6] = P),
            (S[7] = t),
            (S[8] = q),
            (S[9] = n),
            (S[10] = a))
          : (a = S[10]),
        S[11] !== O
          ? ((c = O
              ? (0, i.jsx)(d.A, {
                  id: "restricted.environmentSetup.variables.title",
                  defaultMessage: "Environment variables",
                  description: "Heading for values passed directly to programs in a cloud environment",
                })
              : null),
            (S[11] = O),
            (S[12] = c))
          : (c = S[12]),
        S[13] !== a || S[14] !== c
          ? ((b = (0, i.jsx)(m.X.Header, { actions: a, size: "base", spacing: "compact", title: c })),
            (S[13] = a),
            (S[14] = c),
            (S[15] = b))
          : (b = S[15]),
        S[16] !== k || S[17] !== C || S[18] !== P || S[19] !== _ || S[20] !== I || S[21] !== A
          ? ((x =
              0 !== A.length || C?.size
                ? (0, g.i)(
                    A,
                    $,
                    (e) =>
                      (0, i.jsx)(
                        B,
                        {
                          variable: e,
                          issue: _.find((t) => {
                            let { field: n } = t
                            return n === `variable-${e.name}`
                          }),
                          isReadOnly: P,
                          readOnlyTooltip: I,
                          onEdit: () => U({ config: k, variables: A }),
                        },
                        e.name,
                      ),
                    C,
                  )
                : (0, i.jsx)(p.ic, {
                    variant: "featured",
                    size: "compact",
                    control: null,
                    icon: (0, i.jsx)(u.iNn, { className: "text-secondary" }),
                    label: (0, i.jsx)(d.A, {
                      id: "restricted.environmentSetup.variables.empty",
                      defaultMessage: "No environment variables added",
                      description: "Empty state for environment-owned runtime variables",
                    }),
                  })),
            (S[16] = k),
            (S[17] = C),
            (S[18] = P),
            (S[19] = _),
            (S[20] = I),
            (S[21] = A),
            (S[22] = x))
          : (x = S[22]),
        S[23] !== x
          ? ((y = (0, i.jsx)(m.X.Content, { children: (0, i.jsx)(v.t, { children: x }) })), (S[23] = x), (S[24] = y))
          : (y = S[24]),
        S[25] !== k || S[26] !== M || S[27] !== V || S[28] !== R || S[29] !== L || S[30] !== N
          ? ((w =
              null == V
                ? null
                : (0, i.jsx)(E, {
                    environmentOnly: R,
                    configuration: M,
                    initialVariables: V.variables,
                    unavailableNames: N,
                    hasConflict: (0, f.p)(k, V.config),
                    onClose: () => U(null),
                    onSave: (e) => {
                      ;(L(
                        e,
                        V.variables
                          .filter((t) => {
                            let { name: n } = t
                            return !e.some((e) => e.name === n)
                          })
                          .map(H),
                      ),
                        U(null))
                    },
                  })),
            (S[25] = k),
            (S[26] = M),
            (S[27] = V),
            (S[28] = R),
            (S[29] = L),
            (S[30] = N),
            (S[31] = w))
          : (w = S[31]),
        S[32] !== y || S[33] !== w || S[34] !== b
          ? ((j = (0, i.jsxs)("section", {
              className: "flex flex-col",
              "data-environment-section": "variables",
              children: [b, y, w],
            })),
            (S[32] = y),
            (S[33] = w),
            (S[34] = b),
            (S[35] = j))
          : (j = S[35]),
        j
      )
    }
    function H(e) {
      let { name: t } = e
      return t
    }
    function $(e) {
      return e.name
    }
    function B(e) {
      let t,
        n,
        o,
        m,
        v,
        f,
        g,
        x = (0, r.c)(28),
        { variable: y, issue: w, isReadOnly: j, readOnlyTooltip: S, onEdit: k } = e,
        M = (0, l.A)(),
        A = (0, a.Ul)(c.chatGptAuthenticatedAccountId$),
        C = (0, a.Ul)(c.chatGptAuthenticatedUserId$),
        _ = y.serverId ?? ""
      x[0] !== A || x[1] !== _ || x[2] !== C
        ? ((t = { accountId: A, userId: C, id: _ }), (x[0] = A), (x[1] = _), (x[2] = C), (x[3] = t))
        : (t = x[3])
      let N = (0, a._U)(D.du, t),
        E = "user_provided" !== y.source && null == y.serverId && !y.value && !N && null == y.error
      return (
        x[4] !== E || x[5] !== N || x[6] !== y.error || x[7] !== y.source || x[8] !== y.value
          ? ((n = (0, i.jsx)("span", { "aria-hidden": "true", children: "••••••••" })),
            "user_provided" === y.source
              ? (n = (0, i.jsx)(d.A, {
                  id: "restricted.environmentSetup.variables.source.userProvided",
                  defaultMessage: "User-provided",
                  description: "A cloud environment variable supplied by the executing user",
                }))
              : y.value || N || null == y.error
                ? E &&
                  (n = (0, i.jsx)(d.A, {
                    id: "restricted.environmentSetup.variables.missing",
                    defaultMessage: "Missing",
                    description: "Status for a required environment variable whose value has not been supplied",
                  }))
                : (n = (0, i.jsx)(d.A, {
                    id: "restricted.environmentSetup.variables.unavailable",
                    defaultMessage: "Unavailable",
                    description: "An environment variable whose stored value the server could not resolve",
                  })),
            (x[4] = E),
            (x[5] = N),
            (x[6] = y.error),
            (x[7] = y.source),
            (x[8] = y.value),
            (x[9] = n))
          : (n = x[9]),
        x[10] === Symbol.for("react.memo_cache_sentinel") ? ((o = (0, i.jsx)(u.iNn, {})), (x[10] = o)) : (o = x[10]),
        x[11] !== y.name
          ? ((m = (0, i.jsx)("span", { className: "block truncate", children: y.name })), (x[11] = y.name), (x[12] = m))
          : (m = x[12]),
        x[13] !== w
          ? ((v = null == w ? void 0 : (0, i.jsx)(b.o, { issue: w })), (x[13] = w), (x[14] = v))
          : (v = x[14]),
        x[15] !== M ||
        x[16] !== E ||
        x[17] !== j ||
        x[18] !== w ||
        x[19] !== k ||
        x[20] !== S ||
        x[21] !== n ||
        x[22] !== y.name
          ? ((f = (e) =>
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("span", {
                    className: (0, s.A)("text-base select-none", E ? "text-danger" : "text-secondary"),
                    children: n,
                  }),
                  (0, i.jsx)(h.F, {
                    "aria-describedby": e["aria-describedby"],
                    "data-environment-invalid": null != w,
                    "aria-label": M.formatMessage(
                      {
                        id: "restricted.environmentSetup.variables.edit",
                        defaultMessage: "Edit {name}",
                        description: "Accessible label for editing the named environment variable",
                      },
                      { name: y.name },
                    ),
                    color: "ghost",
                    disabled: j,
                    tooltipContent: j ? S : null,
                    size: "icon",
                    onClick: k,
                    children: (0, i.jsx)(u.Npl, {}),
                  }),
                ],
              })),
            (x[15] = M),
            (x[16] = E),
            (x[17] = j),
            (x[18] = w),
            (x[19] = k),
            (x[20] = S),
            (x[21] = n),
            (x[22] = y.name),
            (x[23] = f))
          : (f = x[23]),
        x[24] !== m || x[25] !== v || x[26] !== f
          ? ((g = (0, i.jsx)(p.ic, {
              variant: "featured",
              size: "compact",
              icon: o,
              label: m,
              description: v,
              control: f,
            })),
            (x[24] = m),
            (x[25] = v),
            (x[26] = f),
            (x[27] = g))
          : (g = x[27]),
        g
      )
    }
  },
  JZp5(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("oyxz")
    n.d(
      t,
      {},
      {
        P: function (e) {
          let t = (0, r.c)(6),
            { error: n } = e
          switch (n) {
            case "missing-key": {
              let e
              return (
                t[0] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(s.A, {
                      id: "restricted.environmentSetup.variables.missingKey",
                      defaultMessage: "Enter a key",
                      description: "Validation error when an environment variable has no name",
                    })),
                    (t[0] = e))
                  : (e = t[0]),
                e
              )
            }
            case "invalid-key": {
              let e
              return (
                t[1] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(s.A, {
                      id: "restricted.environmentSetup.variables.invalidKey",
                      defaultMessage:
                        "Start the key with a letter or underscore, then use only letters, numbers or underscores (up to 256 characters)",
                      description: "Explains the permitted format of an environment variable name",
                    })),
                    (t[1] = e))
                  : (e = t[1]),
                e
              )
            }
            case "reserved-key": {
              let e
              return (
                t[2] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(s.A, {
                      id: "restricted.environmentSetup.variables.reservedKey",
                      defaultMessage: "This key is reserved by the platform. Choose a different key",
                      description:
                        "Validation error when a runtime variable name overrides a reserved platform environment variable",
                    })),
                    (t[2] = e))
                  : (e = t[2]),
                e
              )
            }
            case "duplicate": {
              let e
              return (
                t[3] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(s.A, {
                      id: "restricted.environmentSetup.variables.duplicate",
                      defaultMessage: "This key is already used by another variable or proxy secret",
                      description:
                        "Error when a variable key conflicts with another runtime variable or network proxy placeholder",
                    })),
                    (t[3] = e))
                  : (e = t[3]),
                e
              )
            }
            case "missing-value": {
              let e
              return (
                t[4] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(s.A, {
                      id: "restricted.environmentSetup.variables.missingValue",
                      defaultMessage: "Enter a value; leave it blank only to keep an existing saved value",
                      description: "Validation error for a new environment variable without a value",
                    })),
                    (t[4] = e))
                  : (e = t[4]),
                e
              )
            }
            case "invalid-value": {
              let e
              return (
                t[5] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(s.A, {
                      id: "restricted.environmentSetup.variables.invalidValue",
                      defaultMessage: "Remove null characters from the value",
                      description: "Validation error for an environment variable value containing a null character",
                    })),
                    (t[5] = e))
                  : (e = t[5]),
                e
              )
            }
          }
        },
        Z: function (e) {
          let t,
            n = (0, r.c)(2),
            { name: a } = e
          return (
            n[0] !== a
              ? ((t = (0, i.jsx)(s.A, {
                  id: "restricted.environmentSetup.variables.invalidSavedKey",
                  defaultMessage:
                    "Couldn’t save environment variable “{name}”. Choose a valid, non-reserved key that isn’t used by another variable or proxy secret",
                  description:
                    "Error identifying the runtime variable whose name is invalid, reserved, or shared with another runtime variable or network secret",
                  values: { name: a },
                })),
                (n[0] = a),
                (n[1] = t))
              : (t = n[1]),
            t
          )
        },
      },
    )
  },
  iN9g(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("zd8w"),
      a = n("Wf1j"),
      o = n("zLIa")
    n.d(
      t,
      {},
      {
        p: function (e) {
          let t,
            n,
            l,
            d,
            c,
            u,
            m = (0, r.c)(29),
            {
              id: p,
              ariaLabel: v,
              ariaInvalid: h,
              ariaDescribedBy: f,
              onFocus: g,
              onBlur: b,
              hasSavedValue: x,
              optional: y,
              value: w,
              onChange: j,
              scopeControl: S,
            } = e,
            k = (0, a.A)(),
            [M, A] = (0, s.useState)(!1)
          m[0] !== w ? ((t = w.includes("\n")), (m[0] = w), (m[1] = t)) : (t = m[1])
          let [C, _] = (0, s.useState)(t)
          ;(!C && w.includes("\n") && _(!0),
            m[2] !== k
              ? ((n = k.formatMessage({
                  id: "environmentSetup.variables.valuePlaceholder",
                  defaultMessage: "Value",
                  description: "Placeholder for a new cloud environment variable value",
                })),
                (m[2] = k),
                (m[3] = n))
              : (n = m[3]))
          let N = n
          if (x) {
            let e
            ;(m[4] !== M || m[5] !== k
              ? ((e = M
                  ? k.formatMessage({
                      id: "restricted.environmentSetup.variables.keepValue",
                      defaultMessage: "Leave blank to keep saved value",
                      description:
                        "Placeholder explaining how to preserve a saved environment variable value while editing its key",
                    })
                  : "••••••••"),
                (m[4] = M),
                (m[5] = k),
                (m[6] = e))
              : (e = m[6]),
              (N = e))
          } else if (void 0 !== y && y) {
            let e
            ;(m[7] !== k
              ? ((e = k.formatMessage({
                  id: "environmentSetup.secret.optionalValue",
                  defaultMessage: "Your value (optional)",
                  description: "Placeholder for an optional personal secret value belonging to the signed-in user",
                })),
                (m[7] = k),
                (m[8] = e))
              : (e = m[8]),
              (N = e))
          }
          ;(m[9] !== g
            ? ((l = () => {
                ;(A(!0), g?.())
              }),
              (m[9] = g),
              (m[10] = l))
            : (l = m[10]),
            m[11] !== b
              ? ((d = () => {
                  ;(A(!1), b?.())
                }),
                (m[11] = b),
                (m[12] = d))
              : (d = m[12]),
            m[13] !== f ||
            m[14] !== h ||
            m[15] !== v ||
            m[16] !== p ||
            m[17] !== N ||
            m[18] !== l ||
            m[19] !== d ||
            m[20] !== w
              ? ((c = {
                  id: p,
                  "aria-label": v,
                  "aria-invalid": h,
                  "aria-describedby": f,
                  autoComplete: "off",
                  spellCheck: !1,
                  value: w,
                  placeholder: N,
                  onFocus: l,
                  onBlur: d,
                }),
                (m[13] = f),
                (m[14] = h),
                (m[15] = v),
                (m[16] = p),
                (m[17] = N),
                (m[18] = l),
                (m[19] = d),
                (m[20] = w),
                (m[21] = c))
              : (c = m[21]))
          let E = c
          return (
            m[22] !== M || m[23] !== C || m[24] !== j || m[25] !== E || m[26] !== S || m[27] !== w
              ? ((u = C
                  ? (0, i.jsx)(o.TM, {
                      ...E,
                      autoFocus: M,
                      rows: 3,
                      variant: "segmented",
                      trailingControl: S,
                      onChange: (e) => j(e.target.value),
                    })
                  : (0, i.jsx)(o.pd, {
                      ...E,
                      variant: "segmented",
                      trailingControl: S,
                      onChange: (e) => j(e.target.value),
                      onPaste: (e) => {
                        let t = e.clipboardData.getData("text/plain")
                        if (t.includes("\n")) {
                          e.preventDefault()
                          let n = e.currentTarget
                          j(w.slice(0, n.selectionStart ?? 0) + t + w.slice(n.selectionEnd ?? w.length))
                        }
                      },
                    })),
                (m[22] = M),
                (m[23] = C),
                (m[24] = j),
                (m[25] = E),
                (m[26] = S),
                (m[27] = w),
                (m[28] = u))
              : (u = m[28]),
            u
          )
        },
      },
    )
  },
  pqcU(e, t, n) {
    n.d(t, { u: () => x })
    var i = n("ABep"),
      r = n("QosV"),
      s = n("zTeN"),
      a = n("oyxz"),
      o = n("ZtSy"),
      l = n("D7Ms"),
      d = n("SZCv"),
      c = n.n(d),
      u = n("SPnB")
    n("X1mr")
    var m = n("ReGc"),
      p = n("OWtl"),
      v = n("rvFo"),
      h = n("HFSu"),
      f = n("j1Su")
    let g = (0, s.un)(
        p.u,
        ({ get: e }) => {
          let t = e(u.PO)
          return t.authLoading ||
            "chatgpt" !== t.authMethod ||
            null == t.authenticatedAccountId ||
            null == t.authenticatedUserId
            ? null
            : { accountId: t.authenticatedAccountId, requestUserId: t.authenticatedUserId, userId: t.userId }
        },
        { isEqual: c() },
      ),
      b = (0, s.RD)(p.u, ({ get: e, scope: t }) => {
        let n = e(g)
        return {
          queryKey: ["cloud-environment-network-policy", n?.accountId, n?.requestUserId],
          queryFn:
            null == n
              ? l.hT
              : async ({ signal: e }) => {
                  var i, r
                  let s = { accountId: n.accountId, userId: n.requestUserId },
                    a = await Promise.all(
                      ["linux", "mac_os", "windows"].map(async (t) =>
                        (function (e) {
                          try {
                            let t = e.environment
                            if (null == t) return !1
                            if ("cloud" !== t.target.environment_type) return
                            let n = (0, f.f)(t).requirements?.network
                            if (null == n) return !1
                            let i =
                                null == n.domains
                                  ? n.allowedDomains
                                  : Object.entries(n.domains)
                                      .filter(([, e]) => "allow" === e)
                                      .map(([e]) => e),
                              r =
                                null == n.domains
                                  ? (n.deniedDomains?.length ?? 0) > 0
                                  : Object.values(n.domains).includes("deny")
                            return (
                              !1 === n.enabled ||
                              !1 === n.allowUpstreamProxy ||
                              !1 === n.allowLocalBinding ||
                              r ||
                              (!0 === n.managedAllowedDomainsOnly && !i?.some((e) => "*" === e.trim()))
                            )
                          } catch {
                            return
                          }
                        })(
                          await h.CodexRequest.safeGet("/wham/config/agent-bundle", {
                            parameters: { query: { environment_type: "cloud", environment_os: t } },
                            expectedIdentity: s,
                            signal: e,
                            retry: !1,
                          }),
                        ),
                      ),
                    )
                  if (!a.every((e) => !0 === e))
                    return { restricted: !a.every((e) => !1 === e) && void 0, settingsUrl: null }
                  let o = await h.CodexRequest.safeGet("/wham/config/agent-enterprise-managed", {
                      expectedIdentity: s,
                      signal: e,
                      retry: !1,
                    }).then(
                      (e) => !0 === e.delivery_enabled && e.capabilities?.can_view !== !1,
                      () => !1,
                    ),
                    l = null
                  return (
                    o &&
                      (l = await t.query.fetch(m.a).then(
                        (e) => null != e.chatGptDesktopAuthOrigin,
                        () => null,
                      )),
                    {
                      restricted: !0,
                      settingsUrl:
                        null == l
                          ? null
                          : ((i = n.accountId),
                            (r = l),
                            new URL(
                              `/workspace/${encodeURIComponent(i)}/agent-security?redirectfrom=chatgpt`,
                              r ? "https://admin.api.openai.org" : "https://admin.openai.com",
                            ).href),
                    }
                  )
                },
          staleTime: v.D.ONE_MINUTE,
          gcTime: 0,
          refetchOnMount: "always",
          refetchOnWindowFocus: "always",
          refetchInterval: v.D.ONE_MINUTE,
          retry: !1,
        }
      })
    function x(e) {
      let t,
        n = (0, r.c)(2),
        { configuration: l } = e,
        d = (0, s.Ul)(g),
        { data: c, isPending: u, isError: m, isPaused: p } = (0, s.Ul)(b)
      if (null == d || l.accountId !== d.accountId || l.userId !== d.userId || u || m || p || c?.restricted !== !0)
        return null
      let { settingsUrl: v } = c
      return (
        n[0] !== v
          ? ((t = (0, i.jsx)("p", {
              className: "text-sm text-secondary select-none",
              children:
                null != v
                  ? (0, i.jsx)(a.A, {
                      id: "environmentSetup.networkPolicy.withSettings",
                      defaultMessage:
                        "Your organization's <settings>Agent Security settings</settings> define network access restrictions which apply to this environment.",
                      description:
                        "Quiet note above Internet access controls in the Cloud environment editor when organization policy restricts networking. Editing and publishing remain available. The settings tag links to Agent Security settings for authorized users.",
                      values: {
                        settings: (e) =>
                          (0, i.jsx)(o.G, {
                            appearance: "accent",
                            href: v,
                            initiator: "external_link",
                            underline: "hover",
                            children: e,
                          }),
                      },
                    })
                  : (0, i.jsx)(a.A, {
                      id: "environmentSetup.networkPolicy.contactAdmin",
                      defaultMessage:
                        "Your organization's Agent Security settings define network access restrictions which apply to this environment. Contact an admin for details.",
                      description:
                        "Quiet note above Internet access controls in the Cloud environment editor when organization policy restricts networking and the user cannot view Agent Security settings. Editing and publishing remain available.",
                    }),
            })),
            (n[0] = v),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
  },
  yvV6(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("zd8w"),
      a = n("oyxz"),
      o = n("TjgH"),
      l = n("bVeK"),
      d = n("zLIa")
    n.d(
      t,
      {},
      {
        G: function (e) {
          let t,
            n,
            o,
            l,
            c,
            u,
            m,
            p,
            v,
            h,
            f,
            g,
            b,
            x = (0, r.c)(52),
            {
              entries: y,
              value: w,
              onChange: j,
              onInputChange: S,
              parseEntry: k,
              errorFor: M,
              pendingHelp: A,
              label: C,
              placeholder: _,
              disabled: N,
              purpose: E,
              children: P,
            } = e,
            I = void 0 !== N && N,
            L = void 0 === E ? "network" : E,
            z = (0, s.useId)(),
            [T, O] = (0, s.useState)(!1),
            R = (0, s.useRef)(null),
            D = (0, s.useRef)(y.length)
          x[0] !== M || x[1] !== T || x[2] !== L || x[3] !== w
            ? ((t = ("secret" === L || T) && w.trim() ? M(w.split(",")[0]?.trim() ?? "") : null),
              (x[0] = M),
              (x[1] = T),
              (x[2] = L),
              (x[3] = w),
              (x[4] = t))
            : (t = x[4])
          let V = t
          ;(x[5] !== y.length
            ? ((n = () => {
                ;(y.length > D.current && R.current?.scrollIntoView({ block: "nearest" }), (D.current = y.length))
              }),
              (o = [y.length]),
              (x[5] = y.length),
              (x[6] = n),
              (x[7] = o))
            : ((n = x[6]), (o = x[7])),
            (0, s.useLayoutEffect)(n, o),
            x[8] !== y || x[9] !== j || x[10] !== S || x[11] !== k
              ? ((l = function (e, t) {
                  let n = e.split(/[,\r\n]/),
                    i = t ? n.pop() : void 0,
                    r = [...y],
                    s = new Set(y.map((e) => k(String(e)))),
                    a = []
                  for (let e of n) {
                    let t = e.trim()
                    if (!t) continue
                    let n = k(t)
                    null == n || s.has(n) ? a.push(t) : (s.add(n), r.push(n))
                  }
                  ;(r.length !== y.length && j(r), S([...a, i?.trim()].filter(Boolean).join(", ")), O(a.length > 0))
                }),
                (x[8] = y),
                (x[9] = j),
                (x[10] = S),
                (x[11] = k),
                (x[12] = l))
              : (l = x[12]))
          let H = l
          x[13] !== P ? ((c = (0, i.jsx)(i.Fragment, { children: P })), (x[13] = P), (x[14] = c)) : (c = x[14])
          let $ = null != V
          ;(x[15] !== w ? ((u = () => O(w.trim().length > 0)), (x[15] = w), (x[16] = u)) : (u = x[16]),
            x[17] !== H || x[18] !== S
              ? ((m = (e) => {
                  let t = e.currentTarget.value
                  t.includes(",") ? H(t, !0) : (S(t), O(!1))
                }),
                (x[17] = H),
                (x[18] = S),
                (x[19] = m))
              : (m = x[19]),
            x[20] !== H || x[21] !== y || x[22] !== j || x[23] !== L || x[24] !== w
              ? ((p = (e) => {
                  !e.nativeEvent.isComposing &&
                    ("Enter" === e.key || "," === e.key
                      ? (e.preventDefault(), w.trim() && H(w, !1))
                      : "network" === L && "Backspace" === e.key && !w && y.length > 0 && j(y.slice(0, -1)))
                }),
                (x[20] = H),
                (x[21] = y),
                (x[22] = j),
                (x[23] = L),
                (x[24] = w),
                (x[25] = p))
              : (p = x[25]),
            x[26] !== H
              ? ((v = (e) => {
                  let t = e.clipboardData.getData("text")
                  if (!/[,\r\n]/.test(t)) return
                  e.preventDefault()
                  let n = e.currentTarget,
                    i = n.selectionStart ?? n.value.length,
                    r = n.selectionEnd ?? i
                  H(n.value.slice(0, i) + t + n.value.slice(r), !1)
                }),
                (x[26] = H),
                (x[27] = v))
              : (v = x[27]),
            x[28] !== I ||
            x[29] !== z ||
            x[30] !== C ||
            x[31] !== _ ||
            x[32] !== m ||
            x[33] !== p ||
            x[34] !== v ||
            x[35] !== c ||
            x[36] !== $ ||
            x[37] !== u ||
            x[38] !== w
              ? ((h = (0, i.jsx)(d.pd, {
                  ref: R,
                  leadingControl: c,
                  variant: "tags",
                  "aria-label": C,
                  "aria-describedby": z,
                  "aria-invalid": $,
                  autoFocus: !0,
                  disabled: I,
                  placeholder: _,
                  value: w,
                  onBlur: u,
                  onChange: m,
                  onKeyDown: p,
                  onPaste: v,
                })),
                (x[28] = I),
                (x[29] = z),
                (x[30] = C),
                (x[31] = _),
                (x[32] = m),
                (x[33] = p),
                (x[34] = v),
                (x[35] = c),
                (x[36] = $),
                (x[37] = u),
                (x[38] = w),
                (x[39] = h))
              : (h = x[39]))
          let B = null == V ? "text-xs text-secondary select-none" : "text-xs text-danger select-none",
            U = null == V ? void 0 : "alert"
          return (
            x[40] !== V || x[41] !== A || x[42] !== w
              ? ((f =
                  V ??
                  (w.trim()
                    ? A
                    : (0, i.jsx)(a.A, {
                        id: "restricted.environmentSetup.network.domain.help",
                        defaultMessage: "Press Enter to add, or paste a comma- or line-separated list",
                        description: "Instructions for adding one or more entries to a cloud environment network list",
                      }))),
                (x[40] = V),
                (x[41] = A),
                (x[42] = w),
                (x[43] = f))
              : (f = x[43]),
            x[44] !== z || x[45] !== B || x[46] !== U || x[47] !== f
              ? ((g = (0, i.jsx)("p", { id: z, className: B, role: U, children: f })),
                (x[44] = z),
                (x[45] = B),
                (x[46] = U),
                (x[47] = f),
                (x[48] = g))
              : (g = x[48]),
            x[49] !== h || x[50] !== g
              ? ((b = (0, i.jsxs)("div", {
                  className: "flex w-full min-w-0 flex-col gap-1.5 [&>div]:gap-x-2",
                  children: [h, g],
                })),
                (x[49] = h),
                (x[50] = g),
                (x[51] = b))
              : (b = x[51]),
            b
          )
        },
        b: function (e) {
          let t,
            n,
            s,
            a = (0, r.c)(10),
            { value: d, removeLabel: c, disabled: u, onRemove: m, children: p } = e,
            v = String(d)
          return (
            a[0] !== v
              ? ((t = (0, i.jsx)("span", { className: "min-w-0 truncate", title: v, children: v })),
                (a[0] = v),
                (a[1] = t))
              : (t = a[1]),
            a[2] !== u || a[3] !== m || a[4] !== c
              ? ((n =
                  null != m &&
                  (0, i.jsx)("button", {
                    type: "button",
                    "aria-label": c,
                    className:
                      "cursor-interaction rounded-sm text-secondary hover:text-default focus-visible:outline-2 focus-visible:outline-ring",
                    disabled: u,
                    onClick: m,
                    children: (0, i.jsx)(l.Gmf, {}),
                  })),
                (a[2] = u),
                (a[3] = m),
                (a[4] = c),
                (a[5] = n))
              : (n = a[5]),
            a[6] !== p || a[7] !== t || a[8] !== n
              ? ((s = (0, i.jsxs)(o.E, { className: "max-w-full gap-1", variant: "outline", children: [t, p, n] })),
                (a[6] = p),
                (a[7] = t),
                (a[8] = n),
                (a[9] = s))
              : (s = a[9]),
            s
          )
        },
      },
    )
  },
  W857(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("zTeN"),
      a = n("oyxz"),
      o = n("Qgfj"),
      l = n("Sm6l"),
      d = n("iN9g"),
      c = n("st5O"),
      u = n("Qm3F")
    let m = (0, o.YK)({
      unavailable: {
        id: "environmentSetup.review.secret.unavailable",
        defaultMessage: "Saved value status unavailable",
        description: "Personal vault metadata could not be loaded; this does not mean a value is missing",
      },
      ambiguous: {
        id: "environmentSetup.review.secret.ambiguous",
        defaultMessage: "Multiple personal values match",
        description: "Warning that runtime cannot choose between matching personal credentials",
      },
      retry: {
        id: "environmentSetup.review.secret.retry",
        defaultMessage: "Retry checking personal values",
        description: "Retry loading personal vault metadata after a failed read",
      },
    })
    n.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            n,
            o,
            p,
            v,
            h,
            f,
            g = (0, r.c)(26),
            {
              id: b,
              configuration: x,
              namespace: y,
              name: w,
              value: j,
              saved: S,
              ariaLabel: k,
              invalid: M,
              describedBy: A,
              onChange: C,
              scopeControl: _,
            } = e
          g[0] !== x || g[1] !== y
            ? ((t = { configuration: x, namespace: y }), (g[0] = x), (g[1] = y), (g[2] = t))
            : (t = g[2])
          let { data: N, isError: E, refetch: P } = (0, s._U)(c.Fz, t)
          g[3] !== x || g[4] !== N || g[5] !== w
            ? ((n = null == N || null == x ? void 0 : (0, c.op)(N, w, x.configId)),
              (g[3] = x),
              (g[4] = N),
              (g[5] = w),
              (g[6] = n))
            : (n = g[6])
          let I = n,
            L = (void 0 !== S && S) || (null != I && "ambiguous" !== I)
          return (
            0 === j.length && !L && ("ambiguous" === I ? (o = m.ambiguous) : E && (o = m.unavailable)),
            g[7] !== k ||
            g[8] !== A ||
            g[9] !== L ||
            g[10] !== b ||
            g[11] !== M ||
            g[12] !== y ||
            g[13] !== C ||
            g[14] !== _ ||
            g[15] !== j
              ? ((p =
                  "sensitive" === y
                    ? (0, i.jsx)(u.n, {
                        id: b,
                        value: j,
                        personal: !0,
                        saved: L,
                        ariaLabel: k,
                        invalid: M,
                        describedBy: A,
                        onChange: C,
                        scopeControl: _,
                      })
                    : (0, i.jsx)(d.p, {
                        id: b,
                        value: j,
                        optional: !0,
                        hasSavedValue: L,
                        ariaLabel: k,
                        ariaInvalid: M,
                        ariaDescribedBy: A,
                        onChange: C,
                        scopeControl: _,
                      })),
                (g[7] = k),
                (g[8] = A),
                (g[9] = L),
                (g[10] = b),
                (g[11] = M),
                (g[12] = y),
                (g[13] = C),
                (g[14] = _),
                (g[15] = j),
                (g[16] = p))
              : (p = g[16]),
            g[17] !== o
              ? ((v =
                  null != o
                    ? (0, i.jsx)("div", {
                        className: "text-xs text-secondary select-none",
                        role: "status",
                        children: (0, i.jsx)(a.A, { ...o }),
                      })
                    : null),
                (g[17] = o),
                (g[18] = v))
              : (v = g[18]),
            g[19] !== E || g[20] !== P
              ? ((h = E
                  ? (0, i.jsx)(l.$, {
                      color: "ghost",
                      size: "compact",
                      onClick: () => void P(),
                      children: (0, i.jsx)(a.A, { ...m.retry }),
                    })
                  : null),
                (g[19] = E),
                (g[20] = P),
                (g[21] = h))
              : (h = g[21]),
            g[22] !== p || g[23] !== v || g[24] !== h
              ? ((f = (0, i.jsxs)("div", { className: "flex min-w-0 flex-col gap-1", children: [p, v, h] })),
                (g[22] = p),
                (g[23] = v),
                (g[24] = h),
                (g[25] = f))
              : (f = g[25]),
            f
          )
        },
      },
    )
  },
  jf0i(e, t, n) {
    n.d(t, { R: () => m, i: () => p })
    var i = n("ABep"),
      r = n("QosV"),
      s = n("oyxz"),
      a = n("bVeK"),
      o = n("AWNZ"),
      l = n("MVTZ")
    let d = /^((?:.*? · )?(••••••••|User-provided value|No value)), (required|optional)(?= · |$)/
    function c(e) {
      let t,
        n,
        c,
        m,
        p,
        v,
        h,
        f,
        g,
        b,
        x,
        y,
        w,
        j,
        S,
        k,
        M,
        A,
        C,
        _,
        N,
        E,
        P = (0, r.c)(64),
        { bindingName: I, bindingRow: L, conflict: z } = e,
        { environmentValue: T, configValue: O } = z
      P[0] !== I || P[1] !== T ? ((t = I && T?.match(d)), (P[0] = I), (P[1] = T), (P[2] = t)) : (t = P[2])
      let R = t
      P[3] !== I || P[4] !== O ? ((n = I && O?.match(d)), (P[3] = I), (P[4] = O), (P[5] = n)) : (n = P[5])
      let D = n,
        V = R?.[2],
        H = D?.[2],
        $ = null != V && null != H && V !== H
      if (null != I && (V !== H || R?.[3] === D?.[3])) {
        let e, t
        ;(P[6] !== T ? ((e = T?.replace(d, "$1")), (P[6] = T), (P[7] = e)) : (e = P[7]),
          (T = e),
          P[8] !== O ? ((t = O?.replace(d, "$1")), (P[8] = O), (P[9] = t)) : (t = P[9]),
          (O = t))
      }
      if (P[10] !== O || P[11] !== z.setting || P[12] !== T || P[13] !== V) {
        let e,
          [t, n, r] = T?.split(" · Allowed domains: ") ?? []
        ;((v = n), P[19] !== O ? ((e = O?.split(" · Allowed domains: ") ?? []), (P[19] = O), (P[20] = e)) : (e = P[20]))
        let [s, a, o] = e
        if (
          ((m = a),
          (c =
            z.setting.startsWith("Secret · ") &&
            null != v &&
            null != m &&
            null == r &&
            null == o &&
            t === s &&
            v !== m),
          (h = "••••••••" === V && T === V),
          (p = null),
          c)
        )
          p = u(t, V)
        else if (h) {
          let e
          ;(P[21] !== V
            ? ((e = (0, i.jsx)("span", { "aria-hidden": "true", children: V })), (P[21] = V), (P[22] = e))
            : (e = P[22]),
            (p = e))
        }
        ;((P[10] = O),
          (P[11] = z.setting),
          (P[12] = T),
          (P[13] = V),
          (P[14] = c),
          (P[15] = m),
          (P[16] = p),
          (P[17] = v),
          (P[18] = h))
      } else ((c = P[14]), (m = P[15]), (p = P[16]), (v = P[17]), (h = P[18]))
      let B = z.setting
      if (c) {
        let e
        ;(P[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(s.A, {
              id: "threadEnvironment.conflictDomains",
              defaultMessage: "Allowed domains",
              description: "Conflicting allowed domains for an HTTP secret",
            })),
            (P[23] = e))
          : (e = P[23]),
          (B = e))
      } else if (null != I) {
        let e
        ;(P[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(s.A, {
              id: "threadEnvironment.conflictValue",
              defaultMessage: "Value",
              description: "Conflicting value of an environment variable or HTTP secret",
            })),
            (P[24] = e))
          : (e = P[24]),
          (B = e))
      }
      P[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (0, i.jsx)(s.A, {
            id: "threadEnvironment.conflictRemoved",
            defaultMessage: "Removed",
            description: "The setting is absent on this side of a promotion conflict",
          })),
          (P[25] = f))
        : (f = P[25])
      let U = f
      P[26] !== T || P[27] !== $ || P[28] !== h || P[29] !== V
        ? ((g = h ? (0, i.jsx)(l.W, { source: "environment", showLabel: !0 }) : u(T ?? U, V, $)),
          (P[26] = T),
          (P[27] = $),
          (P[28] = h),
          (P[29] = V),
          (P[30] = g))
        : (g = P[30])
      let q = g,
        F = I ?? z.setting
      ;(P[31] !== I || P[32] !== L || P[33] !== p || P[34] !== h
        ? ((b =
            h && null != L
              ? L
              : null != I &&
                (0, i.jsx)(o.ic, {
                  variant: "featured",
                  size: "compact",
                  controlSizing: "content",
                  icon: (0, i.jsx)(a.iNn, { className: "text-secondary" }),
                  label: (0, i.jsx)("span", { className: "wrap-anywhere", children: I }),
                  control:
                    null != p
                      ? (0, i.jsx)("span", {
                          className: "text-base wrap-anywhere text-secondary select-none",
                          children: p,
                        })
                      : null,
                })),
          (P[31] = I),
          (P[32] = L),
          (P[33] = p),
          (P[34] = h),
          (P[35] = b))
        : (b = P[35]),
        P[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, i.jsx)(a.Ko7, { "aria-hidden": !0, className: "shrink-0 text-danger" })), (P[36] = x))
          : (x = P[36]),
        P[37] !== B
          ? ((y = (0, i.jsxs)("span", {
              className: "flex min-w-0 items-center gap-2 font-medium wrap-anywhere",
              children: [x, B],
            })),
            (P[37] = B),
            (P[38] = y))
          : (y = P[38]),
        P[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, i.jsx)("span", {
              className: "text-sm font-medium text-danger",
              children: (0, i.jsx)(s.A, {
                id: "threadEnvironment.conflictLabel",
                defaultMessage: "Conflict",
                description: "Status of a setting changed in both the thread and the environment configuration",
              }),
            })),
            (P[39] = w))
          : (w = P[39]),
        P[40] !== y
          ? ((j = (0, i.jsxs)("div", { className: "flex items-baseline justify-between gap-2", children: [y, w] })),
            (P[40] = y),
            (P[41] = j))
          : (j = P[41]),
        P[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, i.jsx)("dt", {
              className: "text-secondary",
              children: (0, i.jsx)(s.A, {
                id: "threadEnvironment.conflictThread",
                defaultMessage: "This thread",
                description: "Thread side of a promotion conflict",
              }),
            })),
            (P[42] = S))
          : (S = P[42]))
      let W = c ? v : q
      return (
        P[43] !== W
          ? ((k = (0, i.jsx)("dd", { className: "wrap-anywhere whitespace-pre-wrap", children: W })),
            (P[43] = W),
            (P[44] = k))
          : (k = P[44]),
        P[45] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, i.jsx)("dt", {
              className: "text-secondary",
              children: (0, i.jsx)(s.A, {
                id: "threadEnvironment.conflictEnvironmentConfig",
                defaultMessage: "Environment config",
                description: "Config side of a promotion conflict",
              }),
            })),
            (P[45] = M))
          : (M = P[45]),
        P[46] !== c || P[47] !== m || P[48] !== H || P[49] !== O || P[50] !== $
          ? ((A = c ? m : u(O ?? U, H, $)),
            (P[46] = c),
            (P[47] = m),
            (P[48] = H),
            (P[49] = O),
            (P[50] = $),
            (P[51] = A))
          : (A = P[51]),
        P[52] !== A
          ? ((C = (0, i.jsx)("dd", { className: "wrap-anywhere whitespace-pre-wrap", children: A })),
            (P[52] = A),
            (P[53] = C))
          : (C = P[53]),
        P[54] !== k || P[55] !== C
          ? ((_ = (0, i.jsxs)("dl", {
              className: "mt-2 grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1 text-sm",
              children: [S, k, M, C],
            })),
            (P[54] = k),
            (P[55] = C),
            (P[56] = _))
          : (_ = P[56]),
        P[57] !== j || P[58] !== _
          ? ((N = (0, i.jsxs)("div", {
              className: "border-s-2 border-danger-outline bg-text-danger/8 px-4 py-3",
              children: [j, _],
            })),
            (P[57] = j),
            (P[58] = _),
            (P[59] = N))
          : (N = P[59]),
        P[60] !== N || P[61] !== F || P[62] !== b
          ? ((E = (0, i.jsxs)("div", { role: "group", "aria-label": F, children: [b, N] })),
            (P[60] = N),
            (P[61] = F),
            (P[62] = b),
            (P[63] = E))
          : (E = P[63]),
        E
      )
    }
    function u(e, t, n = !1) {
      return "••••••••" !== t && "User-provided value" !== t
        ? e
        : "User-provided value" === e
          ? (0, i.jsx)(l.W, { source: "user_provided", showLabel: !0 })
          : (0, i.jsxs)("span", {
              className: "inline-flex items-center gap-1.5",
              children: [
                (0, i.jsx)(l.W, { source: "••••••••" === t ? "environment" : "user_provided", showLabel: n }),
                e,
              ],
            })
    }
    function m(e) {
      let t = new Map(),
        n = new Map(),
        r = [],
        s = new Map([
          ["Environment variable", t],
          ["Secret", n],
        ])
      for (let t of e?.conflicts ?? []) {
        let [e, ...n] = t.setting.split(" · "),
          a = n.join(" · "),
          o = s.get(e)
        o && a ? o.set(a, t) : r.push((0, i.jsx)(c, { conflict: t }, t.setting))
      }
      return { variables: t, secrets: n, other: r }
    }
    function p(e, t, n, r) {
      if (!r?.size) return e.map(n)
      let s = new Map(r),
        a = e.map((e) => {
          let a = t(e)
          s.delete(a)
          let o = r.get(a),
            l = n(e)
          return o ? (0, i.jsx)(c, { bindingName: a, conflict: o, bindingRow: l }, a) : l
        })
      for (let [e, t] of s) a.push((0, i.jsx)(c, { bindingName: e, conflict: t }, e))
      return a
    }
  },
  CFI7(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("slpy"),
      a = n("plV3"),
      o = n("on57"),
      l = n("zd8w"),
      d = n("Wf1j"),
      c = n("oyxz"),
      u = n("Sm6l"),
      m = n("ZtSy"),
      p = n("Ot7V"),
      v = n("HOLv"),
      h = n("bVeK"),
      f = n("nzx4"),
      g = n("F0xz"),
      b = n("BSnr"),
      x = n("AWNZ"),
      y = n("ZEx5"),
      w = n("teEn"),
      j = n("JiLO")
    function S(e) {
      let { field: t } = e
      return t?.startsWith("network-")
    }
    function k(e) {
      ;(0, p.PQ)({
        event: e,
        href: "https://learn.chatgpt.com/docs/environments/cloud-environments#connect-to-services",
        initiator: "external_link",
      })
    }
    n.d(
      t,
      {},
      {
        _: function (e) {
          let t,
            n,
            p,
            M,
            A,
            C,
            _,
            N,
            E,
            P,
            I,
            L,
            z,
            T,
            O,
            R,
            D,
            V,
            H,
            $,
            B,
            U,
            q,
            F,
            W,
            G,
            Q,
            Z,
            K,
            Y,
            X,
            J,
            ee,
            et,
            en = (0, r.c)(94),
            {
              draft: ei,
              onDraftChange: er,
              isReadOnly: es,
              readOnlyTooltip: ea,
              issues: eo,
              packageManagersDescription: el,
              packageManagersTooltip: ed,
              help: ec,
              allInternetDescription: eu,
              previousRestrictedAccess: em,
              notice: ep,
              children: ev,
            } = e
          en[0] !== eo ? ((t = void 0 === eo ? [] : eo), (en[0] = eo), (en[1] = t)) : (t = en[1])
          let eh = t,
            ef = (0, d.A)()
          en[2] !== ef
            ? ((n = ef.formatMessage({
                id: "restricted.environmentSetup.configuration.network.toggle",
                defaultMessage: "Enable all public internet access",
                description:
                  "Accessible label for allowing a cloud environment to access all public internet destinations independently of its VPN",
              })),
              (en[2] = ef),
              (en[3] = n))
            : (n = en[3])
          let eg = n,
            eb = !0 === ei.networkEnabled && "all" === ei.networkPreset,
            [ex, ey] = (0, l.useState)(null),
            ew = em ?? ex
          en[4] !== ei.networkDomains || en[5] !== eb || en[6] !== ew?.domains
            ? ((p = (eb ? ew?.domains : null) ?? ei.networkDomains ?? []),
              (en[4] = ei.networkDomains),
              (en[5] = eb),
              (en[6] = ew?.domains),
              (en[7] = p))
            : (p = en[7])
          let ej = p,
            eS = eb ? (ew?.packageManagers ?? !1) : !0 === ei.networkEnabled && "none" !== ei.networkPreset
          en[8] !== ef
            ? ((M = ef.formatMessage({
                id: "environmentSetup.configuration.network.packageManagers",
                defaultMessage: "Enable package manager domains",
                description: "Label for allowing the predefined package manager domains in a cloud environment",
              })),
              (en[8] = ef),
              (en[9] = M))
            : (M = en[9])
          let ek = M
          en[10] !== ef
            ? ((A = ef.formatMessage({
                id: "threadEnvironment.network.aboutPolicy",
                defaultMessage: "About network access",
                description: "Accessible name for the help button containing network policy information and links",
              })),
              (en[10] = ef),
              (en[11] = A))
            : (A = en[11])
          let eM = A
          ;(en[12] !== ef
            ? ((C = ef.formatMessage({
                id: "environmentSetup.configuration.network.docsLabel",
                defaultMessage: "Cloud environment networking docs",
                description: "Accessible label for the documentation link beside the public internet access heading",
              })),
              (en[12] = ef),
              (en[13] = C))
            : (C = en[13]),
            en[14] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = (0, i.jsx)(h.Xkx, {})),
                (N = (0, i.jsx)(c.A, {
                  id: "environmentSetup.configuration.network.docs",
                  defaultMessage: "Docs",
                  description:
                    "Link beside the public internet access heading to cloud environment networking documentation",
                })),
                (en[14] = _),
                (en[15] = N))
              : ((_ = en[14]), (N = en[15])),
            en[16] !== C
              ? ((E = (0, i.jsxs)(m.G, {
                  className: "inline-flex items-center gap-1 text-sm",
                  "aria-label": C,
                  appearance: "secondary",
                  href: "https://learn.chatgpt.com/docs/environments/cloud-environments#connect-to-services",
                  initiator: "external_link",
                  underline: "hover",
                  children: [_, N],
                })),
                (en[16] = C),
                (en[17] = E))
              : (E = en[17]))
          let eA = E
          ;(en[18] !== eA || en[19] !== ec || en[20] !== eM
            ? ((P =
                null == ec
                  ? eA
                  : (0, i.jsxs)(f.AM, {
                      children: [
                        (0, i.jsx)(s.m, {
                          content: eM,
                          children: (0, i.jsx)(f.Wv, {
                            asChild: !0,
                            children: (0, i.jsx)(u.$, {
                              color: "ghostSecondary",
                              size: "icon",
                              "aria-label": eM,
                              children: (0, i.jsx)(h.ehD, {}),
                            }),
                          }),
                        }),
                        (0, i.jsx)(f.hl, {
                          "aria-label": eM,
                          align: "end",
                          variant: "menu",
                          children: (0, i.jsxs)("div", {
                            className: "flex flex-col items-start gap-2 p-2 text-sm text-secondary",
                            children: [ec, eA],
                          }),
                        }),
                      ],
                    })),
              (en[18] = eA),
              (en[19] = ec),
              (en[20] = eM),
              (en[21] = P))
            : (P = en[21]),
            en[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((I = (0, i.jsx)(c.A, {
                  id: "restricted.environmentSetup.configuration.network.title",
                  defaultMessage: "Public internet access",
                  description:
                    "Heading for public internet access controls, separate from VPN access, in cloud environment settings",
                })),
                (en[22] = I))
              : (I = en[22]),
            en[23] !== P
              ? ((L = (0, i.jsx)(b.X.Header, {
                  className: "select-none",
                  size: "base",
                  spacing: "compact",
                  actions: P,
                  title: I,
                })),
                (en[23] = P),
                (en[24] = L))
              : (L = en[24]))
          let eC = es ? ea : null
          ;(en[25] !== ej || en[26] !== er || en[27] !== eS
            ? ((z = (e) => {
                e && ey({ packageManagers: eS, domains: ej })
                let t = eS ? "package_managers" : "none"
                er({ networkEnabled: e || eS || ej.length > 0, networkPreset: e ? "all" : t, networkDomains: ej })
              }),
              (en[25] = ej),
              (en[26] = er),
              (en[27] = eS),
              (en[28] = z))
            : (z = en[28]),
            en[29] !== es || en[30] !== eg || en[31] !== eb || en[32] !== z
              ? ((T = (0, i.jsx)(g.l, { ariaLabel: eg, checked: eb, disabled: es, onChange: z })),
                (en[29] = es),
                (en[30] = eg),
                (en[31] = eb),
                (en[32] = z),
                (en[33] = T))
              : (T = en[33]),
            en[34] !== eg || en[35] !== eC || en[36] !== T
              ? ((O = (0, i.jsx)(j.V, { label: eg, reason: eC, children: T })),
                (en[34] = eg),
                (en[35] = eC),
                (en[36] = T),
                (en[37] = O))
              : (O = en[37]),
            en[38] === Symbol.for("react.memo_cache_sentinel")
              ? ((R = (0, i.jsx)(c.A, {
                  id: "restricted.environmentSetup.configuration.network.label",
                  defaultMessage: "Enable all public internet access",
                  description: "Label for allowing all public internet destinations independently of VPN access",
                })),
                (en[38] = R))
              : (R = en[38]),
            en[39] !== eu || en[40] !== O
              ? ((D = (0, i.jsx)(x.ic, {
                  description: eu,
                  className: "select-none",
                  controlSizing: "content",
                  variant: "featured",
                  size: "compact",
                  control: O,
                  label: R,
                })),
                (en[39] = eu),
                (en[40] = O),
                (en[41] = D))
              : (D = en[41]))
          let e_ = eb && "opacity-50"
          en[42] !== e_ ? ((V = (0, o.A)("select-none", e_)), (en[42] = e_), (en[43] = V)) : (V = en[43])
          let eN = es ? ea : null,
            eE = es || eb
          ;(en[44] !== ej || en[45] !== er
            ? ((H = (e) => {
                er({ networkEnabled: e || ej.length > 0, networkPreset: e ? "package_managers" : "none" })
              }),
              (en[44] = ej),
              (en[45] = er),
              (en[46] = H))
            : (H = en[46]),
            en[47] !== eS || en[48] !== ek || en[49] !== eE || en[50] !== H
              ? (($ = (0, i.jsx)(g.l, { ariaLabel: ek, checked: eS, disabled: eE, onChange: H })),
                (en[47] = eS),
                (en[48] = ek),
                (en[49] = eE),
                (en[50] = H),
                (en[51] = $))
              : ($ = en[51]),
            en[52] !== ek || en[53] !== eN || en[54] !== $
              ? ((B = (0, i.jsx)(j.V, { label: ek, reason: eN, children: $ })),
                (en[52] = ek),
                (en[53] = eN),
                (en[54] = $),
                (en[55] = B))
              : (B = en[55]),
            en[56] === Symbol.for("react.memo_cache_sentinel")
              ? ((U = (0, i.jsx)(c.A, {
                  id: "environmentSetup.configuration.network.packageManagers",
                  defaultMessage: "Enable package manager domains",
                  description: "Label for allowing the predefined package manager domains in a cloud environment",
                })),
                (en[56] = U))
              : (U = en[56]),
            en[57] !== ed
              ? ((q =
                  ed ??
                  (0, i.jsx)(c.A, {
                    id: "environmentSetup.configuration.network.presets.tooltip",
                    defaultMessage: "View domain presets",
                    description:
                      "Tooltip for the link to documentation listing the domains allowed by each network preset",
                  })),
                (en[57] = ed),
                (en[58] = q))
              : (q = en[58]),
            en[59] !== ef
              ? ((F = ef.formatMessage({
                  id: "environmentSetup.configuration.network.presets.about",
                  defaultMessage: "About allowed domain presets",
                  description:
                    "Accessible label for the information button that opens documentation about allowed domain presets",
                })),
                (en[59] = ef),
                (en[60] = F))
              : (F = en[60]),
            en[61] === Symbol.for("react.memo_cache_sentinel")
              ? ((W = (0, i.jsx)(v.I, { asset: a.c })), (en[61] = W))
              : (W = en[61]),
            en[62] !== F
              ? ((G = (0, i.jsx)(u.$, {
                  "aria-label": F,
                  color: "ghostSecondary",
                  size: "inline",
                  type: "button",
                  onClick: k,
                  children: W,
                })),
                (en[62] = F),
                (en[63] = G))
              : (G = en[63]),
            en[64] !== q || en[65] !== G
              ? ((Q = (0, i.jsxs)("span", {
                  className: "flex items-center gap-1",
                  children: [U, (0, i.jsx)(s.m, { content: q, children: G })],
                })),
                (en[64] = q),
                (en[65] = G),
                (en[66] = Q))
              : (Q = en[66]),
            en[67] !== el || en[68] !== V || en[69] !== B || en[70] !== Q
              ? ((Z = (0, i.jsx)(x.ic, {
                  description: el,
                  className: V,
                  controlSizing: "content",
                  variant: "featured",
                  size: "compact",
                  control: B,
                  label: Q,
                })),
                (en[67] = el),
                (en[68] = V),
                (en[69] = B),
                (en[70] = Q),
                (en[71] = Z))
              : (Z = en[71]))
          let eP = es || eb,
            eI = es ? ea : void 0
          return (
            en[72] !== eh ? ((K = eh.filter(S)), (en[72] = eh), (en[73] = K)) : (K = en[73]),
            en[74] !== er || en[75] !== eS
              ? ((Y = (e) =>
                  er({
                    networkDomains: e,
                    networkEnabled: eS || e.length > 0,
                    networkPreset: eS ? "package_managers" : "none",
                  })),
                (en[74] = er),
                (en[75] = eS),
                (en[76] = Y))
              : (Y = en[76]),
            en[77] !== ej || en[78] !== eP || en[79] !== eI || en[80] !== K || en[81] !== Y
              ? ((X = (0, i.jsx)(w.y, { disabled: eP, disabledTooltip: eI, domains: ej, issues: K, onChange: Y })),
                (en[77] = ej),
                (en[78] = eP),
                (en[79] = eI),
                (en[80] = K),
                (en[81] = Y),
                (en[82] = X))
              : (X = en[82]),
            en[83] !== ev || en[84] !== D || en[85] !== Z || en[86] !== X
              ? ((J = (0, i.jsxs)(y.t, { children: [D, Z, X, ev] })),
                (en[83] = ev),
                (en[84] = D),
                (en[85] = Z),
                (en[86] = X),
                (en[87] = J))
              : (J = en[87]),
            en[88] !== ep || en[89] !== J
              ? ((ee = (0, i.jsxs)(b.X.Content, { children: [ep, J] })), (en[88] = ep), (en[89] = J), (en[90] = ee))
              : (ee = en[90]),
            en[91] !== L || en[92] !== ee
              ? ((et = (0, i.jsxs)("section", {
                  className: "flex flex-col",
                  "data-environment-section": "network",
                  children: [L, ee],
                })),
                (en[91] = L),
                (en[92] = ee),
                (en[93] = et))
              : (et = en[93]),
            et
          )
        },
      },
    )
  },
  KEmQ(e, t, n) {
    n.d(t, { j: () => k, G: () => S })
    var i = n("ABep"),
      r = n("QosV"),
      s = n("zd8w"),
      a = n("Wf1j"),
      o = n("oyxz"),
      l = n("bVeK"),
      d = n("CxEf"),
      c = n("BSnr"),
      u = n("AWNZ"),
      m = n("ZEx5"),
      p = n("X1Fy"),
      v = n("fUey"),
      h = n("NxjN"),
      f = n("Sm6l"),
      g = n("JNtf"),
      b = n("mUDD"),
      x = n("BExl"),
      y = n("ZRUt"),
      w = n("K489")
    function j(e) {
      let t,
        n,
        a,
        l,
        d,
        c,
        u,
        m,
        p,
        v,
        h,
        j,
        S,
        k = (0, r.c)(42),
        { initialRepositoryIds: M, initialSelections: A, hasConflict: C, onClose: _, onSave: N } = e,
        [E, P] = (0, s.useState)(M),
        [I, L] = (0, s.useState)(A)
      k[0] !== M || k[1] !== E
        ? ((t = E.length !== M.length || E.some((e) => !M.includes(e))), (k[0] = M), (k[1] = E), (k[2] = t))
        : (t = k[2])
      let z = t
      if (k[3] !== M || k[4] !== E || k[5] !== I) {
        let e
        ;(k[7] !== M || k[8] !== I
          ? ((e = (e) =>
              !M.includes(e) &&
              !I.find((t) => {
                let { repository: n } = t
                return n.id === e
              })?.repository.default_branch),
            (k[7] = M),
            (k[8] = I),
            (k[9] = e))
          : (e = k[9]),
          (n = E.some(e)),
          (k[3] = M),
          (k[4] = E),
          (k[5] = I),
          (k[6] = n))
      } else n = k[6]
      let T = n,
        O = !C && !T && z && E.length <= 16
      ;(k[10] !== _
        ? ((a = (e) => {
            e || _()
          }),
          (k[10] = _),
          (k[11] = a))
        : (a = k[11]),
        k[12] !== O || k[13] !== _ || k[14] !== N || k[15] !== E || k[16] !== I
          ? ((l = (e) => {
              if ((e.preventDefault(), e.stopPropagation(), !O)) return
              let t = I.filter((e) => {
                let { repository: t } = e
                return E.includes(t.id)
              })
              ;(N(E, t), _())
            }),
            (k[12] = O),
            (k[13] = _),
            (k[14] = N),
            (k[15] = E),
            (k[16] = I),
            (k[17] = l))
          : (l = k[17]),
        k[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)(g.L3, {
              children: (0, i.jsx)(o.A, {
                id: "environmentSetup.repositories.addTitle",
                defaultMessage: "Add git repository",
                description: "Title of the dialog for selecting repositories to add to an environment",
              }),
            })),
            (k[18] = d))
          : (d = k[18]),
        k[19] !== E || k[20] !== I
          ? ((c = (e, t) => {
              let n = e.repository.id
              ;(P(t ? [...E, n] : E.filter((e) => e !== n)),
                L([
                  ...I.filter((e) => {
                    let { repository: t } = e
                    return t.id !== n
                  }),
                  ...(t ? [e] : []),
                ]))
            }),
            (k[19] = E),
            (k[20] = I),
            (k[21] = c))
          : (c = k[21]),
        k[22] !== C || k[23] !== E || k[24] !== c
          ? ((u = (0, i.jsx)(x.CloudEnvironmentRepositoryPicker, {
              disabled: C,
              headerAlignment: "start",
              configureInAccountMenu: !0,
              selectedRepositoryIds: E,
              maxRepositories: 16,
              header: d,
              onChange: c,
            })),
            (k[22] = C),
            (k[23] = E),
            (k[24] = c),
            (k[25] = u))
          : (u = k[25]),
        k[26] !== C ? ((m = C ? (0, i.jsx)(y.A, {}) : null), (k[26] = C), (k[27] = m)) : (m = k[27]),
        k[28] !== T
          ? ((p = T ? (0, i.jsx)(w.o, { issue: { code: "repository" } }) : null), (k[28] = T), (k[29] = p))
          : (p = k[29]))
      let R = !O
      return (
        k[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsx)(o.A, {
              id: "environmentSetup.repositories.setUp",
              defaultMessage: "Save",
              description:
                "Stages the repository selection in the environment editor; Save draft persists the changes and asks the setup agent to apply them",
            })),
            (k[30] = v))
          : (v = k[30]),
        k[31] !== R
          ? ((h = (0, i.jsx)(b.Es, {
              children: (0, i.jsx)(f.$, { color: "primary", size: "dialog", type: "submit", disabled: R, children: v }),
            })),
            (k[31] = R),
            (k[32] = h))
          : (h = k[32]),
        k[33] !== h || k[34] !== l || k[35] !== u || k[36] !== m || k[37] !== p
          ? ((j = (0, i.jsxs)(b.R4, { as: "form", size: "viewport", onSubmit: l, children: [u, m, p, h] })),
            (k[33] = h),
            (k[34] = l),
            (k[35] = u),
            (k[36] = m),
            (k[37] = p),
            (k[38] = j))
          : (j = k[38]),
        k[39] !== j || k[40] !== a
          ? ((S = (0, i.jsx)(g.lG, {
              open: !0,
              size: "compact",
              dialogCloseClassName: "top-5.5!",
              onOpenChange: a,
              children: j,
            })),
            (k[39] = j),
            (k[40] = a),
            (k[41] = S))
          : (S = k[41]),
        S
      )
    }
    function S(e) {
      let t,
        n,
        s,
        a,
        o,
        l = (0, r.c)(21),
        {
          config: d,
          isReadOnly: c,
          readOnlyTooltip: u,
          onChange: m,
          configuration: p,
          draft: v,
          panelState: h,
          issues: f,
          showHeading: g,
        } = e,
        b = void 0 === c || c
      l[0] !== f ? ((t = void 0 === f ? [] : f), (l[0] = f), (l[1] = t)) : (t = l[1])
      let x = t,
        y = void 0 === g || g,
        w = v.repositories
      return (
        l[2] !== h?.repositorySelections
          ? ((n = h?.repositorySelections ?? []), (l[2] = h?.repositorySelections), (l[3] = n))
          : (n = l[3]),
        l[4] !== p?.repositoryNamesById
          ? ((s = p?.repositoryNamesById ?? {}), (l[4] = p?.repositoryNamesById), (l[5] = s))
          : (s = l[5]),
        l[6] !== d?.draft?.id || l[7] !== d?.draft?.revision || l[8] !== d?.id || l[9] !== d?.version_id
          ? ((a = JSON.stringify([d?.id, d?.version_id, d?.draft?.id, d?.draft?.revision])),
            (l[6] = d?.draft?.id),
            (l[7] = d?.draft?.revision),
            (l[8] = d?.id),
            (l[9] = d?.version_id),
            (l[10] = a))
          : (a = l[10]),
        l[11] !== v.repositories ||
        l[12] !== b ||
        l[13] !== x ||
        l[14] !== m ||
        l[15] !== u ||
        l[16] !== y ||
        l[17] !== n ||
        l[18] !== s ||
        l[19] !== a
          ? ((o = (0, i.jsx)(k, {
              repositoryIds: w,
              selections: n,
              repositoryNames: s,
              revision: a,
              isReadOnly: b,
              readOnlyTooltip: u,
              onChange: m,
              issues: x,
              showHeading: y,
            })),
            (l[11] = v.repositories),
            (l[12] = b),
            (l[13] = x),
            (l[14] = m),
            (l[15] = u),
            (l[16] = y),
            (l[17] = n),
            (l[18] = s),
            (l[19] = a),
            (l[20] = o))
          : (o = l[20]),
        o
      )
    }
    function k(e) {
      let t,
        n,
        f,
        g,
        b,
        x,
        y,
        S,
        k,
        M = (0, r.c)(47),
        {
          repositoryIds: A,
          selections: C,
          repositoryNames: _,
          revision: N,
          isReadOnly: E,
          readOnlyTooltip: P,
          onChange: I,
          issues: L,
          showHeading: z,
        } = e
      M[0] !== L ? ((t = void 0 === L ? [] : L), (M[0] = L), (M[1] = t)) : (t = M[1])
      let T = t,
        O = void 0 === z || z,
        R = (0, a.A)(),
        [D, V] = (0, s.useState)(null)
      if (
        (E && null != D && V(null),
        M[2] !== R || M[3] !== E || M[4] !== I || M[5] !== P || M[6] !== A || M[7] !== N || M[8] !== C
          ? ((n =
              null == I
                ? void 0
                : (0, i.jsx)(h.F, {
                    "aria-label": R.formatMessage({
                      id: "environmentSetup.repositories.addLabel",
                      defaultMessage: "Manage repositories",
                      description: "Opens the editor to add or remove environment repositories",
                    }),
                    type: "button",
                    "aria-haspopup": "dialog",
                    color: "secondary",
                    size: "settingsAction",
                    disabled: E,
                    tooltipContent: E ? P : null,
                    onClick: () => V({ revision: N, repositoryIds: A, selections: C }),
                    children: (0, i.jsx)(o.A, {
                      id: "environmentSetup.repositories.add",
                      defaultMessage: "Manage",
                      description: "Button for adding or removing environment repositories",
                    }),
                  })),
            (M[2] = R),
            (M[3] = E),
            (M[4] = I),
            (M[5] = P),
            (M[6] = A),
            (M[7] = N),
            (M[8] = C),
            (M[9] = n))
          : (n = M[9]),
        M[10] !== O
          ? ((f = O
              ? (0, i.jsx)(o.A, {
                  id: "restricted.environmentSetup.sidePanel.repositories",
                  defaultMessage: "Repositories",
                  description: "Heading for repositories in the environment side-panel editor",
                })
              : null),
            (M[10] = O),
            (M[11] = f))
          : (f = M[11]),
        M[12] !== n || M[13] !== f
          ? ((g = (0, i.jsx)(c.X.Header, {
              className: "select-none",
              actions: n,
              size: "base",
              spacing: "compact",
              title: f,
            })),
            (M[12] = n),
            (M[13] = f),
            (M[14] = g))
          : (g = M[14]),
        M[15] !== A ? ((b = 0 === A.length ? [""] : A), (M[15] = A), (M[16] = b)) : (b = M[16]),
        M[17] !== R ||
          M[18] !== E ||
          M[19] !== T ||
          M[20] !== I ||
          M[21] !== P ||
          M[22] !== A ||
          M[23] !== _ ||
          M[24] !== C ||
          M[25] !== b)
      ) {
        let e
        ;(M[27] !== R ||
        M[28] !== E ||
        M[29] !== T ||
        M[30] !== I ||
        M[31] !== P ||
        M[32] !== A ||
        M[33] !== _ ||
        M[34] !== C
          ? ((e = (e, t) => {
              let n =
                  _[e] ??
                  C.find((t) => {
                    let { repository: n } = t
                    return n.id === e
                  })?.repository.repository_full_name ??
                  e,
                r = Math.max(0, n.lastIndexOf("/"))
              return (0, i.jsx)(
                u.ic,
                {
                  className: "select-none",
                  variant: "featured",
                  controlSizing: "content",
                  control:
                    "" === e || null == I
                      ? null
                      : (0, i.jsx)(h.F, {
                          type: "button",
                          color: "ghostSecondary",
                          size: "iconSm",
                          disabled: E,
                          tooltipContent: E ? P : null,
                          "aria-label": R.formatMessage(
                            {
                              id: "environmentSetup.repositories.removeLabel",
                              defaultMessage: "Remove {repository}",
                              description: "Accessible label for removing a repository from an environment",
                            },
                            { repository: n },
                          ),
                          onClick: () =>
                            I(
                              A.filter((t) => t !== e),
                              C.filter((t) => {
                                let { repository: n } = t
                                return n.id !== e
                              }),
                            ),
                          children: (0, i.jsx)(l.cSG, {}),
                        }),
                  size: "compact",
                  description:
                    null ==
                    T.find((e) => {
                      let { field: n } = e
                      return n === `repository-${t}`
                    })
                      ? void 0
                      : (0, i.jsx)("span", {
                          tabIndex: -1,
                          "data-environment-invalid": "true",
                          children: (0, i.jsx)(w.o, { issue: { field: `repository-${t}`, code: "repository" } }),
                        }),
                  icon:
                    "" === e
                      ? (0, i.jsx)(l.uH1, {})
                      : (0, i.jsx)(p.R, { connectorId: (0, v.ns)(e).connectorId, className: "icon-xs" }),
                  label: n
                    ? (0, i.jsxs)(d.m, {
                        tooltipContent: n,
                        "aria-label": n,
                        triggerAsChild: !1,
                        openOnClick: !0,
                        className: "flex max-w-full min-w-0 text-start",
                        children: [
                          (0, i.jsx)("span", { className: "min-w-0 truncate", children: n.slice(0, r) }),
                          (0, i.jsx)("span", { className: "max-w-full shrink-0 truncate", children: n.slice(r) }),
                        ],
                      })
                    : (0, i.jsx)(o.A, {
                        id: "restricted.environmentSetup.configuration.repository.empty",
                        defaultMessage: "No repository selected",
                        description:
                          "Description shown when a mocked cloud environment settings panel has no repository yet",
                      }),
                },
                t,
              )
            }),
            (M[27] = R),
            (M[28] = E),
            (M[29] = T),
            (M[30] = I),
            (M[31] = P),
            (M[32] = A),
            (M[33] = _),
            (M[34] = C),
            (M[35] = e))
          : (e = M[35]),
          (x = b.map(e)),
          (M[17] = R),
          (M[18] = E),
          (M[19] = T),
          (M[20] = I),
          (M[21] = P),
          (M[22] = A),
          (M[23] = _),
          (M[24] = C),
          (M[25] = b),
          (M[26] = x))
      } else x = M[26]
      return (
        M[36] !== x
          ? ((y = (0, i.jsx)(c.X.Content, { children: (0, i.jsx)(m.t, { children: x }) })), (M[36] = x), (M[37] = y))
          : (y = M[37]),
        M[38] !== D || M[39] !== E || M[40] !== I || M[41] !== N
          ? ((S =
              null == D || E || null == I
                ? null
                : (0, i.jsx)(j, {
                    initialRepositoryIds: D.repositoryIds,
                    initialSelections: D.selections,
                    hasConflict: N !== D.revision,
                    onClose: () => V(null),
                    onSave: I,
                  })),
            (M[38] = D),
            (M[39] = E),
            (M[40] = I),
            (M[41] = N),
            (M[42] = S))
          : (S = M[42]),
        M[43] !== S || M[44] !== g || M[45] !== y
          ? ((k = (0, i.jsxs)(c.X, { children: [g, y, S] })), (M[43] = S), (M[44] = g), (M[45] = y), (M[46] = k))
          : (k = M[46]),
        k
      )
    }
  },
  K489(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("slpy"),
      a = n("plV3"),
      o = n("on57"),
      l = n("zd8w"),
      d = n("Wf1j"),
      c = n("oyxz"),
      u = n("Qgfj"),
      m = n("HOLv"),
      p = n("nzx4")
    function v(e) {
      let t,
        n,
        o,
        u,
        v,
        h,
        f,
        g,
        b,
        y,
        w,
        j,
        S,
        k,
        M,
        A,
        C = (0, r.c)(45),
        { id: _, issue: N } = e,
        E = (0, d.A)(),
        P = (0, l.useId)(),
        I = (0, l.useId)(),
        [L, z] = (0, l.useState)(!1),
        T = x[`${N.code}Label`],
        O = x[`${N.code}Help`],
        R = `${P}-summary`
      ;(C[0] !== T ? ((t = (0, i.jsx)(c.A, { ...T })), (C[0] = T), (C[1] = t)) : (t = C[1]),
        C[2] !== R || C[3] !== t
          ? ((n = (0, i.jsx)("span", { id: R, className: "select-none", children: t })),
            (C[2] = R),
            (C[3] = t),
            (C[4] = n))
          : (n = C[4]),
        C[5] !== O ? ((o = (0, i.jsx)(c.A, { ...O })), (C[5] = O), (C[6] = o)) : (o = C[6]),
        C[7] !== E ? ((u = E.formatMessage(x.details)), (C[7] = E), (C[8] = u)) : (u = C[8]))
      let D = `${P}-summary`
      return (
        C[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsx)(m.I, { asset: a.c })), (C[9] = v))
          : (v = C[9]),
        C[10] !== u || C[11] !== D
          ? ((h = (0, i.jsx)(p.Wv, {
              asChild: !0,
              children: (0, i.jsx)("button", {
                "aria-label": u,
                "aria-describedby": D,
                className:
                  "inline-flex cursor-interaction rounded-sm focus-visible:outline-2 focus-visible:outline-ring",
                type: "button",
                children: v,
              }),
            })),
            (C[10] = u),
            (C[11] = D),
            (C[12] = h))
          : (h = C[12]),
        C[13] !== L || C[14] !== o || C[15] !== h
          ? ((f = (0, i.jsx)(s.m, { disabled: L, content: o, children: h })),
            (C[13] = L),
            (C[14] = o),
            (C[15] = h),
            (C[16] = f))
          : (f = C[16]),
        C[17] !== T ? ((g = (0, i.jsx)(c.A, { ...T })), (C[17] = T), (C[18] = g)) : (g = C[18]),
        C[19] !== g || C[20] !== P
          ? ((b = (0, i.jsx)(p.eO, { id: P, children: g })), (C[19] = g), (C[20] = P), (C[21] = b))
          : (b = C[21]),
        C[22] !== O ? ((y = (0, i.jsx)(c.A, { ...O })), (C[22] = O), (C[23] = y)) : (y = C[23]),
        C[24] !== I || C[25] !== y
          ? ((w = (0, i.jsx)("p", { id: I, children: y })), (C[24] = I), (C[25] = y), (C[26] = w))
          : (w = C[26]),
        C[27] !== N.valuesSaved
          ? ((j = N.valuesSaved ? (0, i.jsx)("p", { children: (0, i.jsx)(c.A, { ...x.valuesSaved }) }) : null),
            (C[27] = N.valuesSaved),
            (C[28] = j))
          : (j = C[28]),
        C[29] !== b || C[30] !== w || C[31] !== j
          ? ((S = (0, i.jsxs)("div", {
              className: "flex flex-col gap-3 p-2 text-sm select-text",
              children: [b, w, j],
            })),
            (C[29] = b),
            (C[30] = w),
            (C[31] = j),
            (C[32] = S))
          : (S = C[32]),
        C[33] !== I || C[34] !== S || C[35] !== P
          ? ((k = (0, i.jsx)(p.hl, {
              "aria-labelledby": P,
              "aria-describedby": I,
              size: "large",
              variant: "menu",
              children: S,
            })),
            (C[33] = I),
            (C[34] = S),
            (C[35] = P),
            (C[36] = k))
          : (k = C[36]),
        C[37] !== L || C[38] !== k || C[39] !== f
          ? ((M = (0, i.jsxs)(p.AM, { open: L, onOpenChange: z, children: [f, k] })),
            (C[37] = L),
            (C[38] = k),
            (C[39] = f),
            (C[40] = M))
          : (M = C[40]),
        C[41] !== _ || C[42] !== M || C[43] !== n
          ? ((A = (0, i.jsxs)("span", {
              id: _,
              className: "inline-flex items-center gap-1 text-xs text-danger",
              children: [n, M],
            })),
            (C[41] = _),
            (C[42] = M),
            (C[43] = n),
            (C[44] = A))
          : (A = C[44]),
        A
      )
    }
    function h(e) {
      let { valuesSaved: t } = e
      return t
    }
    function f(e) {
      let { field: t } = e
      return null == t
    }
    function g(e) {
      let { field: t } = e
      return null != t
    }
    function b(e) {
      let { code: t } = e
      return [
        "name",
        "repository",
        "key",
        "duplicate",
        "reserved",
        "domains",
        "tcp-access",
        "value",
        "connection",
      ].includes(t)
    }
    let x = (0, u.YK)({
      "runtime-rejectedLabel": {
        id: "environmentSetup.saveErrors.runtimeRejected.label",
        defaultMessage: "Draft saved, update rejected",
        description: "The environment settings draft was saved, but applying it to the build environment was rejected",
      },
      "runtime-rejectedHelp": {
        id: "environmentSetup.saveErrors.runtimeRejected.help",
        defaultMessage:
          "Your draft was saved, but the build environment rejected the update. Reload the draft before retrying",
        description:
          "Recovery guidance after the settings draft was saved successfully but its runtime update was rejected",
      },
      "runtime-unconfirmedLabel": {
        id: "environmentSetup.saveErrors.runtimeUnconfirmed.label",
        defaultMessage: "Draft saved, update unconfirmed",
        description:
          "The environment settings draft was saved, but the result of applying it to the build environment is unknown",
      },
      "runtime-unconfirmedHelp": {
        id: "environmentSetup.saveErrors.runtimeUnconfirmed.help",
        defaultMessage:
          "Your draft was saved, but we couldn’t confirm the build environment was updated. Reload the draft before retrying",
        description:
          "Recovery guidance after the settings draft was saved successfully but the runtime update could not be confirmed; it may have succeeded",
      },
      "repository-threadLabel": {
        id: "environmentSetup.saveErrors.repositoryThread.label",
        defaultMessage: "Open the environment’s setup chat",
        description: "Repository changes require the matching environment setup chat",
      },
      "repository-threadHelp": {
        id: "environmentSetup.saveErrors.repositoryThread.help",
        defaultMessage:
          "Open this environment’s setup chat and save the repository changes there so they can be applied to its workspace",
        description: "How to save repository changes when the editor cannot identify the matching setup chat",
      },
      "tcp-accessLabel": {
        id: "environmentSetup.saveErrors.tcpAccess.label",
        defaultMessage: "Check TCP destinations",
        description: "Invalid private TCP destination grants",
      },
      "tcp-accessHelp": {
        id: "environmentSetup.saveErrors.tcpAccess.help",
        defaultMessage: "Enter valid private IPv4 CIDRs or hostnames in TCP destinations",
        description: "How to correct invalid TCP grants before saving",
      },
      "tcp-unavailableLabel": {
        id: "environmentSetup.saveErrors.tcpUnavailable.label",
        defaultMessage: "TCP access unavailable",
        description: "Saving nonempty TCP grants was blocked because support or VPN configuration is unavailable",
      },
      "tcp-unavailableHelp": {
        id: "environmentSetup.saveErrors.tcpUnavailable.help",
        defaultMessage: "Refresh TCP support and check the VPN configuration, or clear all TCP grants before saving",
        description: "How to recover when a fresh VPN read cannot confirm TCP support",
      },
      "too-largeLabel": {
        id: "environmentSetup.saveErrors.tooLarge.label",
        defaultMessage: "Configuration too large",
        description: "Error when the complete cloud environment configuration exceeds its storage size limit",
      },
      "too-largeHelp": {
        id: "environmentSetup.saveErrors.tooLarge.help",
        defaultMessage: "Reduce the domain list, scripts, or other settings, then save again",
        description: "Guidance when the complete cloud environment configuration exceeds its storage size limit",
      },
      nameLabel: {
        id: "restricted.environmentSetup.saveErrors.name.label",
        defaultMessage: "Name required",
        description: "Short field error for an empty environment name",
      },
      repositoryLabel: {
        id: "restricted.environmentSetup.saveErrors.repository.label",
        defaultMessage: "Check repository",
        description: "Short field error for an incomplete environment repository selection",
      },
      keyLabel: {
        id: "restricted.environmentSetup.saveErrors.key.label",
        defaultMessage: "Invalid key",
        description: "Short error beside a malformed cloud environment secret key",
      },
      duplicateLabel: {
        id: "restricted.environmentSetup.saveErrors.duplicate.label",
        defaultMessage: "Duplicate key",
        description: "Short error beside a cloud environment secret whose key is already used",
      },
      reservedLabel: {
        id: "restricted.environmentSetup.saveErrors.reserved.label",
        defaultMessage: "Reserved key",
        description: "Short error beside a proxy secret key reserved for platform configuration",
      },
      "reserved-targetLabel": {
        id: "restricted.environmentSetup.saveErrors.reservedTarget.label",
        defaultMessage: "Reserved key",
        description:
          "Global environment save error when the server rejects a platform-reserved proxy secret key without identifying the affected field",
      },
      domainsLabel: {
        id: "restricted.environmentSetup.saveErrors.domains.label",
        defaultMessage: "Check domains",
        description: "Short error beside invalid cloud environment allowed domains",
      },
      valueLabel: {
        id: "restricted.environmentSetup.saveErrors.value.label",
        defaultMessage: "Value required",
        description: "Short error for a required secret value before reviewing an environment",
      },
      connectionLabel: {
        id: "restricted.environmentSetup.saveErrors.connection.label",
        defaultMessage: "Check connection",
        description: "Short error beside an invalid environment outbound identity attachment",
      },
      "save-valueLabel": {
        id: "restricted.environmentSetup.saveErrors.saveValue.label",
        defaultMessage: "Couldn’t save value",
        description: "Short service failure beside a specific cloud environment secret; does not imply invalid input",
      },
      unconfirmedLabel: {
        id: "restricted.environmentSetup.saveErrors.unconfirmed.label",
        defaultMessage: "Save unconfirmed",
        description: "Short status for a value creation that may have succeeded without returning its ID",
      },
      conflictLabel: {
        id: "restricted.environmentSetup.saveErrors.conflict.label",
        defaultMessage: "Environment changed",
        description: "Short global save failure when an environment revision changed elsewhere",
      },
      authenticationLabel: {
        id: "restricted.environmentSetup.saveErrors.authentication.label",
        defaultMessage: "Check sign-in",
        description: "Short global environment save failure for missing or changed authentication",
      },
      permissionLabel: {
        id: "restricted.environmentSetup.saveErrors.permission.label",
        defaultMessage: "Permission denied",
        description: "Short global environment save failure when the user lacks access",
      },
      "not-foundLabel": {
        id: "restricted.environmentSetup.saveErrors.notFound.label",
        defaultMessage: "No longer available",
        description: "Short global environment save failure when a server resource is missing",
      },
      unavailableLabel: {
        id: "restricted.environmentSetup.saveErrors.unavailable.label",
        defaultMessage: "Save unconfirmed",
        description: "Short global status when the environment save response was lost or invalid",
      },
      requestLabel: {
        id: "restricted.environmentSetup.saveErrors.request.label",
        defaultMessage: "Couldn’t save environment",
        description: "Short global error when no field-specific cause is known",
      },
      nameHelp: {
        id: "restricted.environmentSetup.saveErrors.name.help",
        defaultMessage: "Enter a name for this environment",
        description: "Explanation for an empty environment name in save-error details",
      },
      repositoryHelp: {
        id: "restricted.environmentSetup.saveErrors.repository.help",
        defaultMessage: "Select a repository with an available default branch before saving",
        description: "Explanation of an incomplete repository selection in environment save-error details",
      },
      keyHelp: {
        id: "restricted.environmentSetup.saveErrors.key.help",
        defaultMessage:
          "Use a letter or underscore first, followed by letters, digits, or underscores, without surrounding spaces",
        description: "Explanation of the environment variable grammar for a proxy secret key",
      },
      duplicateHelp: {
        id: "restricted.environmentSetup.saveErrors.duplicate.help",
        defaultMessage: "Each secret must have a unique key; rename this secret or remove the duplicate",
        description: "Correction for duplicate secret names or environment variable targets",
      },
      reservedHelp: {
        id: "restricted.environmentSetup.saveErrors.reserved.help",
        defaultMessage:
          "This key is reserved for platform configuration; rename or remove this proxy secret before saving",
        description: "Explains how to correct a proxy secret that overrides a platform-owned variable",
      },
      "reserved-targetHelp": {
        id: "restricted.environmentSetup.saveErrors.reservedTarget.help",
        defaultMessage:
          "One or more proxy secrets use a key reserved for platform configuration. Rename or remove those secrets before saving; your edits are still here.",
        description:
          "Recovery guidance for a server rejection that identifies a reserved proxy secret key but does not identify which field; asks the user to rename or remove the affected secrets and reassures them their edits are preserved",
      },
      domainsHelp: {
        id: "restricted.environmentSetup.saveErrors.domains.help",
        defaultMessage:
          "Use hostnames without URLs, paths, or ports; each proxy secret needs at least one exact hostname",
        description:
          "Explains invalid allowed-domain input; network rules can use wildcards but proxy secret destinations cannot",
      },
      valueHelp: {
        id: "restricted.environmentSetup.saveErrors.value.help",
        defaultMessage: "Enter a value for this required secret before continuing the review",
        description:
          "Explains missing values at the environment review boundary; draft saves can retain unresolved requirements",
      },
      connectionHelp: {
        id: "restricted.environmentSetup.saveErrors.connection.help",
        defaultMessage:
          "Use unique connections and aliases, with at most 16 attachments; aliases start with an uppercase letter followed by up to 63 uppercase letters, digits, or underscores",
        description: "Explains the existing outbound identity attachment validation rules",
      },
      "save-valueHelp": {
        id: "restricted.environmentSetup.saveErrors.saveValue.help",
        defaultMessage: "The service couldn’t save this value; your edits are still here, so try saving again",
        description: "Explanation for a failed value write whose outcome is known, without blaming valid user input",
      },
      unconfirmedHelp: {
        id: "restricted.environmentSetup.saveErrors.unconfirmed.manualRetryHelp",
        defaultMessage:
          "The service didn’t confirm whether this value was saved. Your input is still here. Saving again may create another stored value.",
        description:
          "Explanation beside a value in the environment panel after an unconfirmed creation; the existing Save button retries and may create another stored value",
      },
      conflictHelp: {
        id: "restricted.environmentSetup.saveErrors.conflict.help",
        defaultMessage:
          "This environment changed elsewhere. Your edits are still here; review the refreshed configuration before saving again.",
        description: "Recovery guidance for a stale environment draft revision, with local edits preserved",
      },
      authenticationHelp: {
        id: "restricted.environmentSetup.saveErrors.authentication.help",
        defaultMessage: "Sign in to the account and workspace where you started setup, then try saving again",
        description: "Recovery guidance for an environment save rejected because authentication changed or expired",
      },
      permissionHelp: {
        id: "restricted.environmentSetup.saveErrors.permission.help",
        defaultMessage: "You don’t have permission to save these changes; check your account and environment access",
        description: "Recovery guidance for an environment save denied by authorization",
      },
      "not-foundHelp": {
        id: "restricted.environmentSetup.saveErrors.notFound.help",
        defaultMessage:
          "The environment or a referenced resource is no longer available; reload it to check its current state",
        description: "Global resource-not-found guidance without guessing which resource is missing",
      },
      unavailableHelp: {
        id: "restricted.environmentSetup.saveErrors.unavailable.help",
        defaultMessage:
          "The service didn’t return a confirmed result. Your edits are still here; reload the environment to check whether it saved before trying again.",
        description: "Recovery guidance for a lost or invalid environment save response",
      },
      requestHelp: {
        id: "restricted.environmentSetup.saveErrors.request.explanation",
        defaultMessage:
          "The service rejected this save without identifying a field. Your edits are still here. Try saving again.",
        description:
          "Explanation in the environment save error popover when the service rejects a save without identifying an invalid field; reassures the user that their edits are preserved",
      },
      details: {
        id: "restricted.environmentSetup.saveErrors.details.button",
        defaultMessage: "Error details",
        description:
          "Accessible name of the information button next to an environment save error; opens a persistent explanation",
      },
      valuesSaved: {
        id: "restricted.environmentSetup.saveErrors.valuesSaved.help",
        defaultMessage:
          "Some values were already saved and will be reused on retry; updates to existing values already affect other bindings that use them",
        description:
          "Explains confirmed value writes before a later failed or unconfirmed save and the shared effect of updating an existing value",
      },
    })
    n.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            n,
            s,
            a,
            l,
            d,
            u,
            m,
            p = (0, r.c)(26),
            { issues: y, announce: w, inBanner: j } = e,
            S = void 0 !== j && j
          if (0 === y.length) return null
          p[0] !== y ? ((t = y.filter(b)), (p[0] = y), (p[1] = t)) : (t = p[1])
          let k = t
          p[2] !== y ? ((n = y.filter(g)), (p[2] = y), (p[3] = n)) : (n = p[3])
          let M = n,
            A = !S && "text-xs"
          p[4] !== A
            ? ((s = (0, o.A)("flex min-w-0 flex-1 flex-col gap-1 text-danger select-none", A)), (p[4] = A), (p[5] = s))
            : (s = p[5])
          let C = void 0 === w || w ? "alert" : void 0
          if (
            (p[6] !== k.length
              ? ((a =
                  k.length > 0
                    ? (0, i.jsx)(c.A, {
                        id: "restricted.environmentSetup.saveErrors.summary.invalid",
                        defaultMessage: "Fix {count, plural, one {# error} other {# errors}} to save",
                        description: "Compact environment save footer counting invalid fields that need correction",
                        values: { count: k.length },
                      })
                    : null),
                (p[6] = k.length),
                (p[7] = a))
              : (a = p[7]),
            p[8] !== M || p[9] !== k.length
              ? ((l =
                  0 === k.length && M.length > 0
                    ? (0, i.jsx)(c.A, {
                        id: "restricted.environmentSetup.saveErrors.summary.values",
                        defaultMessage: "Check {count, plural, one {# value save} other {# value saves}}",
                        description:
                          "Compact environment footer counting value writes that failed or have an unconfirmed outcome; the input is not necessarily invalid",
                        values: { count: M.length },
                      })
                    : null),
                (p[8] = M),
                (p[9] = k.length),
                (p[10] = l))
              : (l = p[10]),
            p[11] !== S || p[12] !== y)
          ) {
            let e
            ;(p[14] !== S
              ? ((e = (e, t) =>
                  S
                    ? (0, i.jsx)(
                        "p",
                        { className: "select-text", children: (0, i.jsx)(c.A, { ...x[`${e.code}Help`] }) },
                        t,
                      )
                    : (0, i.jsx)(v, { issue: e }, t)),
                (p[14] = S),
                (p[15] = e))
              : (e = p[15]),
              (d = y.filter(f).map(e)),
              (p[11] = S),
              (p[12] = y),
              (p[13] = d))
          } else d = p[13]
          return (
            p[16] !== S || p[17] !== y
              ? ((u =
                  S && y.some(h)
                    ? (0, i.jsx)("p", { className: "select-text", children: (0, i.jsx)(c.A, { ...x.valuesSaved }) })
                    : null),
                (p[16] = S),
                (p[17] = y),
                (p[18] = u))
              : (u = p[18]),
            p[19] !== d || p[20] !== u || p[21] !== s || p[22] !== C || p[23] !== a || p[24] !== l
              ? ((m = (0, i.jsxs)("div", { className: s, role: C, children: [a, l, d, u] })),
                (p[19] = d),
                (p[20] = u),
                (p[21] = s),
                (p[22] = C),
                (p[23] = a),
                (p[24] = l),
                (p[25] = m))
              : (m = p[25]),
            m
          )
        },
        o: v,
      },
    )
  },
  Qm3F(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("slpy"),
      a = n("zd8w"),
      o = n("v7qY"),
      l = n("Wf1j"),
      d = n("Sm6l"),
      c = n("bVeK"),
      u = n("zLIa")
    function m(e) {
      return e.preventDefault()
    }
    n.d(
      t,
      {},
      {
        n: function (e) {
          let t,
            n,
            p,
            v,
            h,
            f,
            g,
            b,
            x,
            y,
            w,
            j = (0, r.c)(40),
            {
              id: S,
              value: k,
              personal: M,
              onChange: A,
              ariaLabel: C,
              invalid: _,
              describedBy: N,
              saved: E,
              scopeControl: P,
            } = e,
            I = (0, l.A)(),
            L = (0, a.useRef)(null),
            [z, T] = (0, a.useState)(!1),
            [O, R] = (0, a.useState)(!1)
          j[0] !== I
            ? ((t = I.formatMessage({
                id: "environmentSetup.secret.valuePlaceholder",
                defaultMessage: "Value",
                description: "Placeholder for a new cloud network secret value",
              })),
              (j[0] = I),
              (j[1] = t))
            : (t = j[1])
          let D = t
          if (void 0 !== E && E) {
            let e
            ;(j[2] !== O || j[3] !== I
              ? ((e = O
                  ? I.formatMessage({
                      id: "restricted.environmentSetup.secret.keepValue",
                      defaultMessage: "Leave blank to keep saved value",
                      description: "Placeholder explaining that a blank secret value preserves the existing credential",
                    })
                  : "••••••••••••"),
                (j[2] = O),
                (j[3] = I),
                (j[4] = e))
              : (e = j[4]),
              (D = e))
          } else if (void 0 !== M && M) {
            let e
            ;(j[5] !== I
              ? ((e = I.formatMessage({
                  id: "environmentSetup.secret.optionalValue",
                  defaultMessage: "Your value (optional)",
                  description: "Placeholder for an optional personal secret value belonging to the signed-in user",
                })),
                (j[5] = I),
                (j[6] = e))
              : (e = j[6]),
              (D = e))
          }
          j[7] !== I || j[8] !== z
            ? ((n = z
                ? I.formatMessage({
                    id: "restricted.environmentSetup.configuration.secret.dialog.hide",
                    defaultMessage: "Hide secret value",
                    description: "Accessible label for hiding the currently revealed cloud environment secret value",
                  })
                : I.formatMessage({
                    id: "restricted.environmentSetup.configuration.secret.dialog.reveal",
                    defaultMessage: "Reveal secret value",
                    description:
                      "Accessible label for showing or hiding a private cloud environment secret value in its native dialog",
                  })),
              (j[7] = I),
              (j[8] = z),
              (j[9] = n))
            : (n = j[9])
          let V = n,
            H = 0 === k.length
          ;(j[10] !== z
            ? ((p = () => {
                let e = L.current,
                  t = e?.selectionStart ?? null,
                  n = e?.selectionEnd ?? null
                ;((0, o.flushSync)(() => T(!z)), e?.getBoundingClientRect(), e?.setSelectionRange(t, n))
              }),
              (j[10] = z),
              (j[11] = p))
            : (p = j[11]),
            j[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = (0, i.jsx)(c.X9D, {})), (j[12] = v))
              : (v = j[12]),
            j[13] !== S || j[14] !== H || j[15] !== p || j[16] !== V
              ? ((h = (0, i.jsx)(d.$, {
                  "aria-label": V,
                  "aria-controls": S,
                  color: "ghost",
                  disabled: H,
                  size: "inputIcon",
                  onMouseDown: m,
                  onClick: p,
                  children: v,
                })),
                (j[13] = S),
                (j[14] = H),
                (j[15] = p),
                (j[16] = V),
                (j[17] = h))
              : (h = j[17]),
            j[18] !== h || j[19] !== V
              ? ((f = (0, i.jsx)(s.m, { content: V, children: h })), (j[18] = h), (j[19] = V), (j[20] = f))
              : (f = j[20]))
          let $ = f
          j[21] !== C || j[22] !== I
            ? ((g =
                C ??
                I.formatMessage({
                  id: "restricted.environmentSetup.input.secret.value",
                  defaultMessage: "Secret value",
                  description: "Accessible label for a cloud environment secret value",
                })),
              (j[21] = C),
              (j[22] = I),
              (j[23] = g))
            : (g = j[23])
          let B = z ? "text" : "password",
            U = null == P ? "default" : "segmented",
            q = null == P ? void 0 : $,
            F = P ?? $
          return (
            j[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = () => R(!0)), (x = () => R(!1)), (j[24] = b), (j[25] = x))
              : ((b = j[24]), (x = j[25])),
            j[26] !== A ? ((y = (e) => A(e.target.value)), (j[26] = A), (j[27] = y)) : (y = j[27]),
            j[28] !== N ||
            j[29] !== S ||
            j[30] !== _ ||
            j[31] !== D ||
            j[32] !== g ||
            j[33] !== B ||
            j[34] !== U ||
            j[35] !== q ||
            j[36] !== F ||
            j[37] !== y ||
            j[38] !== k
              ? ((w = (0, i.jsx)(u.pd, {
                  id: S,
                  ref: L,
                  "aria-invalid": _,
                  "aria-describedby": N,
                  "data-environment-invalid": _,
                  "aria-label": g,
                  autoComplete: "new-password",
                  placeholder: D,
                  type: B,
                  value: k,
                  variant: U,
                  trailingInlineControl: q,
                  trailingControl: F,
                  onFocus: b,
                  onBlur: x,
                  onChange: y,
                })),
                (j[28] = N),
                (j[29] = S),
                (j[30] = _),
                (j[31] = D),
                (j[32] = g),
                (j[33] = B),
                (j[34] = U),
                (j[35] = q),
                (j[36] = F),
                (j[37] = y),
                (j[38] = k),
                (j[39] = w))
              : (w = j[39]),
            w
          )
        },
      },
    )
  },
  EkMM(e, t, n) {
    n.d(t, { s: () => S })
    var i = n("ABep"),
      r = n("QosV"),
      s = n("slpy")
    n("PFi3")
    var a = n("zd8w"),
      o = n("Wf1j"),
      l = n("Sm6l"),
      d = n("bVeK"),
      c = n("zLIa"),
      u = n("ILsY"),
      m = n("W857"),
      p = n("K489"),
      v = n("Qm3F"),
      h = n("oyxz"),
      f = n("nzx4"),
      g = n("J0Wh"),
      b = n("wU6J")
    function x(e) {
      let t,
        n,
        s,
        c,
        u,
        m,
        p,
        v,
        x,
        j,
        S,
        k,
        M,
        A,
        C,
        _,
        N,
        E,
        P,
        I = (0, r.c)(54),
        { name: L, value: z, disabled: T, readOnly: O, invalid: R, describedBy: D, onChange: V } = e,
        H = (0, o.A)(),
        $ = (0, a.useId)(),
        [B, U] = (0, a.useState)(null)
      ;(T && null != B && U(null),
        I[0] !== z ? ((t = z.split(",").map(w).filter(y)), (I[0] = z), (I[1] = t)) : (t = I[1]))
      let q = t
      I[2] !== B
        ? ((n =
            null != B &&
            B.domains.length > 0 &&
            !B.input.trim() &&
            B.domains.every((e, t) => null == (0, b.r)(e, B.domains.slice(0, t), { purpose: "secret" }))),
          (I[2] = B),
          (I[3] = n))
        : (n = I[3])
      let F = n,
        W = null != B && !T
      ;(I[4] !== T || I[5] !== q
        ? ((s = (e) => {
            U(e && !T ? { domains: q, input: "" } : null)
          }),
          (I[4] = T),
          (I[5] = q),
          (I[6] = s))
        : (s = I[6]),
        I[7] !== H || I[8] !== L
          ? ((c = H.formatMessage(
              {
                id: "environmentSetup.review.secret.domainsForSecret",
                defaultMessage: "Allowed domains for {name}",
                description: "Accessible label for editing the allowed destinations of a named proxy secret",
              },
              { name: L },
            )),
            (I[7] = H),
            (I[8] = L),
            (I[9] = c))
          : (c = I[9]),
        I[10] !== q.length
          ? ((u = (0, i.jsx)(h.A, {
              id: "environmentSetup.review.secret.domainCount",
              defaultMessage: "{count, plural, =0 {No domains} one {# domain} other {# domains}}",
              description: "Number of allowed destinations for a proxy secret",
              values: { count: q.length },
            })),
            (I[10] = q.length),
            (I[11] = u))
          : (u = I[11]),
        I[12] === Symbol.for("react.memo_cache_sentinel") ? ((m = (0, i.jsx)(d.Aq_, {})), (I[12] = m)) : (m = I[12]),
        I[13] !== D || I[14] !== T || I[15] !== R || I[16] !== c || I[17] !== u
          ? ((p = (0, i.jsx)(f.Wv, {
              asChild: !0,
              children: (0, i.jsxs)(l.$, {
                className: "w-full justify-between",
                "aria-label": c,
                "aria-invalid": R,
                "aria-describedby": D,
                "data-environment-invalid": R,
                color: "outline",
                size: "inputControl",
                disabled: T,
                children: [u, m],
              }),
            })),
            (I[13] = D),
            (I[14] = T),
            (I[15] = R),
            (I[16] = c),
            (I[17] = u),
            (I[18] = p))
          : (p = I[18]),
        I[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsx)(h.A, {
              id: "environmentSetup.review.secret.domains",
              defaultMessage: "Allowed domains",
              description: "Title and input label for allowed HTTPS destinations for a proxy secret",
            })),
            (I[19] = v))
          : (v = I[19]),
        I[20] !== $ ? ((x = (0, i.jsx)(f.eO, { id: $, children: v })), (I[20] = $), (I[21] = x)) : (x = I[21]),
        I[22] !== T || I[23] !== B || I[24] !== O
          ? ((j =
              null != B &&
              (0, i.jsx)(g.Y, {
                purpose: "secret",
                disabled: T,
                readOnly: O,
                showErrors: !0,
                domains: B.domains,
                value: B.input,
                onChange: (e) => U({ ...B, domains: e }),
                onInputChange: (e) => U((t) => (null == t ? null : { ...t, input: e })),
              })),
            (I[22] = T),
            (I[23] = B),
            (I[24] = O),
            (I[25] = j))
          : (j = I[25]),
        I[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, i.jsx)("p", {
              className: "text-secondary",
              children: (0, i.jsx)(h.A, {
                id: "environmentSetup.review.secret.domainsHelp",
                defaultMessage: "Add at least one exact hostname that can receive this secret",
                description:
                  "Explains that proxy secrets require at least one exact destination hostname before saving",
              }),
            })),
            (I[26] = S))
          : (S = I[26]),
        I[27] !== O
          ? ((k =
              !O &&
              (0, i.jsx)(l.$, {
                color: "secondary",
                size: "compact",
                onClick: () => U(null),
                children: (0, i.jsx)(h.A, {
                  id: "environmentSetup.secret.domainsCancel",
                  defaultMessage: "Cancel",
                  description: "Discard unconfirmed changes to a secret's allowed destinations and close the popover",
                }),
              })),
            (I[27] = O),
            (I[28] = k))
          : (k = I[28]))
      let G = !O && !F
      return (
        I[29] !== F || I[30] !== T || I[31] !== B || I[32] !== V || I[33] !== O
          ? ((M = () => {
              ;(O || T || !F || null == B || V(B.domains.join(", ")), U(null))
            }),
            (I[29] = F),
            (I[30] = T),
            (I[31] = B),
            (I[32] = V),
            (I[33] = O),
            (I[34] = M))
          : (M = I[34]),
        I[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, i.jsx)(h.A, {
              id: "environmentSetup.secret.domainsDone",
              defaultMessage: "Done",
              description: "Close the domain picker after editing a secret's allowed hostnames",
            })),
            (I[35] = A))
          : (A = I[35]),
        I[36] !== G || I[37] !== M
          ? ((C = (0, i.jsx)(l.$, { color: "primary", size: "compact", disabled: G, onClick: M, children: A })),
            (I[36] = G),
            (I[37] = M),
            (I[38] = C))
          : (C = I[38]),
        I[39] !== k || I[40] !== C
          ? ((_ = (0, i.jsxs)("div", { className: "flex justify-end gap-2", children: [k, C] })),
            (I[39] = k),
            (I[40] = C),
            (I[41] = _))
          : (_ = I[41]),
        I[42] !== x || I[43] !== j || I[44] !== _
          ? ((N = (0, i.jsxs)("div", { className: "flex flex-col gap-3 p-2 text-sm", children: [x, j, S, _] })),
            (I[42] = x),
            (I[43] = j),
            (I[44] = _),
            (I[45] = N))
          : (N = I[45]),
        I[46] !== N || I[47] !== $
          ? ((E = (0, i.jsx)(f.hl, { size: "large", variant: "menu", "aria-labelledby": $, children: N })),
            (I[46] = N),
            (I[47] = $),
            (I[48] = E))
          : (E = I[48]),
        I[49] !== E || I[50] !== W || I[51] !== s || I[52] !== p
          ? ((P = (0, i.jsxs)(f.AM, { open: W, onOpenChange: s, children: [p, E] })),
            (I[49] = E),
            (I[50] = W),
            (I[51] = s),
            (I[52] = p),
            (I[53] = P))
          : (P = I[53]),
        P
      )
    }
    function y(e) {
      return e.length > 0
    }
    function w(e) {
      return e.trim()
    }
    var j = n("MVTZ")
    function S(e) {
      let t,
        n,
        h,
        f,
        g,
        b,
        y,
        w,
        S,
        k,
        M,
        A,
        C,
        _,
        N,
        E,
        P,
        I,
        L,
        z,
        T,
        O = (0, r.c)(88),
        {
          keyInputRef: R,
          secret: D,
          issues: V,
          configuration: H,
          onChange: $,
          onDelete: B,
          readOnly: U,
          disabled: q,
          environmentOnly: F,
        } = e,
        W = void 0 !== U && U,
        G = void 0 !== q && q,
        Q = (0, o.A)(),
        Z = (0, a.useId)()
      if (O[0] !== D) {
        let e = (0, u.oj)(D)
        ;((t =
          D.injectionTarget ??
          ("environment_variable" in e
            ? {
                type: "environment_variable",
                name: e.environment_variable,
                domain: e.allowed_domains?.join(", ") ?? "",
              }
            : {
                type: "http_header",
                name: e.http_header.header_name,
                domain: e.http_header.allowed_domains.join(", "),
              })),
          (O[0] = D),
          (O[1] = t))
      } else t = O[1]
      let K = t
      if (O[2] !== V || O[3] !== D.id) {
        let e
        ;(O[5] !== D.id
          ? ((e = (e) => {
              let { field: t } = e
              return t === `secret-${D.id}-key`
            }),
            (O[5] = D.id),
            (O[6] = e))
          : (e = O[6]),
          (n = V.find(e)),
          (O[2] = V),
          (O[3] = D.id),
          (O[4] = n))
      } else n = O[4]
      let Y = n
      if (O[7] !== V || O[8] !== D.id) {
        let e
        ;(O[10] !== D.id
          ? ((e = (e) => {
              let { field: t } = e
              return t === `secret-${D.id}-value`
            }),
            (O[10] = D.id),
            (O[11] = e))
          : (e = O[11]),
          (h = V.find(e)),
          (O[7] = V),
          (O[8] = D.id),
          (O[9] = h))
      } else h = O[9]
      let X = h
      if (O[12] !== V || O[13] !== D.id) {
        let e
        ;(O[15] !== D.id
          ? ((e = (e) => {
              let { field: t } = e
              return t === `secret-${D.id}-domains`
            }),
            (O[15] = D.id),
            (O[16] = e))
          : (e = O[16]),
          (f = V.find(e)),
          (O[12] = V),
          (O[13] = D.id),
          (O[14] = f))
      } else f = O[14]
      let J = f
      O[17] !== Q || O[18] !== D.source
        ? ((g =
            "user_provided" === D.source
              ? Q.formatMessage({
                  id: "restricted.environmentSetup.secret.removeRequirement",
                  defaultMessage: "Remove requirement",
                  description:
                    "Button to remove a user-provided requirement from the environment without deleting a saved personal credential",
                })
              : Q.formatMessage({
                  id: "restricted.environmentSetup.input.secret.delete",
                  defaultMessage: "Delete secret",
                  description: "Accessible label for removing an environment secret",
                })),
          (O[17] = Q),
          (O[18] = D.source),
          (O[19] = g))
        : (g = O[19])
      let ee = g,
        et = D.source ?? "environment",
        en = G || W || (void 0 !== F && F)
      ;(O[20] !== $ || O[21] !== D
        ? ((b = (e) =>
            $({
              ...D,
              source: e,
              optional: "user_provided" === e,
              value: "",
              serverId: void 0,
              personalSecret: void 0,
              isMissing: "environment" === e,
            })),
          (O[20] = $),
          (O[21] = D),
          (O[22] = b))
        : (b = O[22]),
        O[23] !== en || O[24] !== b || O[25] !== et || O[26] !== K.name
          ? ((y = (0, i.jsx)(j.w, { attached: !0, name: K.name, source: et, disabled: en, onChange: b })),
            (O[23] = en),
            (O[24] = b),
            (O[25] = et),
            (O[26] = K.name),
            (O[27] = y))
          : (y = O[27]))
      let ei = y,
        er = K.name || D.name
      ;(O[28] !== Q
        ? ((w = Q.formatMessage({
            id: "restricted.environmentSetup.input.secret.name.placeholder",
            defaultMessage: "Key",
            description: "Placeholder for a cloud environment secret key",
          })),
          (O[28] = Q),
          (O[29] = w))
        : (w = O[29]),
        O[30] !== Q
          ? ((S = Q.formatMessage({
              id: "restricted.environmentSetup.input.secret.key",
              defaultMessage: "Secret key",
              description: "Accessible label for the environment variable key used by a cloud environment proxy secret",
            })),
            (O[30] = Q),
            (O[31] = S))
          : (S = O[31]))
      let es = null != Y,
        ea = null == Y ? void 0 : `${Z}-key`,
        eo = null != Y
      ;(O[32] !== $ || O[33] !== D || O[34] !== K
        ? ((k = (e) =>
            $({
              ...D,
              name: e.target.value,
              personalSecret: void 0,
              target: void 0,
              injectionTarget: { ...K, name: e.target.value },
            })),
          (O[32] = $),
          (O[33] = D),
          (O[34] = K),
          (O[35] = k))
        : (k = O[35]),
        O[36] !== R ||
        O[37] !== W ||
        O[38] !== w ||
        O[39] !== S ||
        O[40] !== es ||
        O[41] !== ea ||
        O[42] !== eo ||
        O[43] !== k ||
        O[44] !== K.name
          ? ((M = (0, i.jsx)("div", {
              className: "min-w-0 flex-1 basis-32",
              children: (0, i.jsx)(c.pd, {
                ref: R,
                placeholder: w,
                "aria-label": S,
                "aria-invalid": es,
                "aria-describedby": ea,
                "data-environment-invalid": eo,
                autoComplete: "off",
                maxLength: 128,
                readOnly: W,
                value: K.name,
                variant: "segmented",
                onChange: k,
              }),
            })),
            (O[36] = R),
            (O[37] = W),
            (O[38] = w),
            (O[39] = S),
            (O[40] = es),
            (O[41] = ea),
            (O[42] = eo),
            (O[43] = k),
            (O[44] = K.name),
            (O[45] = M))
          : (M = O[45]),
        O[46] !== H ||
        O[47] !== Z ||
        O[48] !== Q ||
        O[49] !== $ ||
        O[50] !== ei ||
        O[51] !== D ||
        O[52] !== K.name ||
        O[53] !== X
          ? ((A = (0, i.jsx)("div", {
              className: "min-w-0 flex-2 basis-64",
              children:
                "user_provided" === D.source
                  ? (0, i.jsx)(
                      m.u,
                      {
                        id: `${Z}-value-input`,
                        scopeControl: ei,
                        ariaLabel: Q.formatMessage(
                          {
                            id: "restricted.environmentSetup.batchSecrets.value",
                            defaultMessage: "Value for {name}",
                            description: "Accessible name of a secret value input in the batch editor",
                          },
                          { name: K.name },
                        ),
                        value: D.value,
                        configuration: H,
                        namespace: "sensitive",
                        name: K.name,
                        saved: null != D.personalSecret,
                        invalid: null != X,
                        describedBy: null == X ? void 0 : `${Z}-value`,
                        onChange: (e) => $({ ...D, value: e }),
                      },
                      D.source,
                    )
                  : (0, i.jsx)(
                      v.n,
                      {
                        id: `${Z}-value-input`,
                        scopeControl: ei,
                        ariaLabel: Q.formatMessage(
                          {
                            id: "restricted.environmentSetup.batchSecrets.value",
                            defaultMessage: "Value for {name}",
                            description: "Accessible name of a secret value input in the batch editor",
                          },
                          { name: K.name },
                        ),
                        value: D.value,
                        saved: null != D.serverId && !D.isMissing,
                        invalid: null != X,
                        describedBy: null == X ? void 0 : `${Z}-value`,
                        onChange: (e) => $({ ...D, value: e }),
                      },
                      D.source,
                    ),
            })),
            (O[46] = H),
            (O[47] = Z),
            (O[48] = Q),
            (O[49] = $),
            (O[50] = ei),
            (O[51] = D),
            (O[52] = K.name),
            (O[53] = X),
            (O[54] = A))
          : (A = O[54]))
      let el = K.domain ?? "",
        ed = W && ("environment_variable" !== K.type || !D.requested),
        ec = null != J,
        eu = null == J ? void 0 : `${Z}-domains`
      return (
        O[55] !== $ || O[56] !== D || O[57] !== K
          ? ((C = (e) => $({ ...D, target: void 0, injectionTarget: { ...K, domain: e } })),
            (O[55] = $),
            (O[56] = D),
            (O[57] = K),
            (O[58] = C))
          : (C = O[58]),
        O[59] !== G || O[60] !== el || O[61] !== ed || O[62] !== ec || O[63] !== eu || O[64] !== C || O[65] !== K.name
          ? ((_ = (0, i.jsx)("div", {
              className: "w-36 shrink-0",
              children: (0, i.jsx)(x, {
                name: K.name,
                value: el,
                disabled: G,
                readOnly: ed,
                invalid: ec,
                describedBy: eu,
                onChange: C,
              }),
            })),
            (O[59] = G),
            (O[60] = el),
            (O[61] = ed),
            (O[62] = ec),
            (O[63] = eu),
            (O[64] = C),
            (O[65] = K.name),
            (O[66] = _))
          : (_ = O[66]),
        O[67] !== M || O[68] !== A || O[69] !== _
          ? ((N = (0, i.jsxs)("div", {
              className: "flex min-w-0 flex-1 flex-wrap items-start gap-2",
              children: [M, A, _],
            })),
            (O[67] = M),
            (O[68] = A),
            (O[69] = _),
            (O[70] = N))
          : (N = O[70]),
        O[71] === Symbol.for("react.memo_cache_sentinel") ? ((E = (0, i.jsx)(d.cSG, {})), (O[71] = E)) : (E = O[71]),
        O[72] !== B || O[73] !== ee
          ? ((P = (0, i.jsx)(l.$, { "aria-label": ee, color: "ghost", size: "icon", onClick: B, children: E })),
            (O[72] = B),
            (O[73] = ee),
            (O[74] = P))
          : (P = O[74]),
        O[75] !== ee || O[76] !== P
          ? ((I = (0, i.jsx)("div", {
              className: "flex h-10 w-8 shrink-0 items-center justify-center",
              children: (0, i.jsx)(s.m, { content: ee, children: P }),
            })),
            (O[75] = ee),
            (O[76] = P),
            (O[77] = I))
          : (I = O[77]),
        O[78] !== N || O[79] !== I
          ? ((L = (0, i.jsxs)("div", { className: "flex min-w-0 items-start gap-2", children: [N, I] })),
            (O[78] = N),
            (O[79] = I),
            (O[80] = L))
          : (L = O[80]),
        O[81] !== Z || O[82] !== V
          ? ((z =
              V.length > 0
                ? (0, i.jsx)("div", {
                    className: "flex flex-col gap-2",
                    children: V.map((e) =>
                      (0, i.jsx)(p.o, { id: `${Z}-${e.field?.split("-").at(-1)}`, issue: e }, e.field),
                    ),
                  })
                : null),
            (O[81] = Z),
            (O[82] = V),
            (O[83] = z))
          : (z = O[83]),
        O[84] !== er || O[85] !== L || O[86] !== z
          ? ((T = (0, i.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-2",
              "aria-label": er,
              role: "group",
              children: [L, z],
            })),
            (O[84] = er),
            (O[85] = L),
            (O[86] = z),
            (O[87] = T))
          : (T = O[87]),
        T
      )
    }
  },
  MVTZ(e, t, n) {
    var i = n("ABep"),
      r = n("QosV"),
      s = n("poSs"),
      a = n("qlwg"),
      o = n("Wf1j"),
      l = n("oyxz"),
      d = n("Sm6l"),
      c = n("bqtn"),
      u = n("HOLv"),
      m = n("bVeK")
    let p = { environment: s.P, user_provided: a.x }
    n.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            n,
            s,
            a = (0, r.c)(10),
            { source: l, showLabel: d } = e,
            c = (0, o.A)(),
            m = "user_provided" === l
          a[0] !== c || a[1] !== m
            ? ((t = m
                ? c.formatMessage({
                    id: "environmentSetup.review.secret.personal",
                    defaultMessage: "Personal",
                    description: "Secret scope whose value belongs to the signed-in user",
                  })
                : c.formatMessage({
                    id: "environmentSetup.review.secret.environment",
                    defaultMessage: "Environment",
                    description: "Secret scope shared by users of the environment",
                  })),
              (a[0] = c),
              (a[1] = m),
              (a[2] = t))
            : (t = a[2])
          let v = t,
            h = p[l]
          a[3] !== v || a[4] !== h
            ? ((n = (0, i.jsx)(u.I, { asset: h, label: v })), (a[3] = v), (a[4] = h), (a[5] = n))
            : (n = a[5])
          let f = void 0 !== d && d ? v : null
          return (
            a[6] !== v || a[7] !== n || a[8] !== f
              ? ((s = (0, i.jsxs)("span", {
                  title: v,
                  className: "inline-flex shrink-0 items-center gap-1.5",
                  children: [n, f],
                })),
                (a[6] = v),
                (a[7] = n),
                (a[8] = f),
                (a[9] = s))
              : (s = a[9]),
            s
          )
        },
        w: function (e) {
          let t,
            n,
            s,
            a,
            v,
            h,
            f,
            g,
            b,
            x,
            y,
            w,
            j,
            S,
            k,
            M,
            A,
            C = (0, r.c)(38),
            { name: _, source: N, disabled: E, attached: P, onChange: I } = e,
            L = void 0 !== P && P,
            z = (0, o.A)(),
            T = L ? "ghostActive" : "outline",
            O = L ? "inputSelect" : "settingsSelect"
          return (
            C[0] !== z || C[1] !== _
              ? ((t = z.formatMessage(
                  {
                    id: "environmentSetup.review.secret.scope",
                    defaultMessage: "Scope for {name}",
                    description: "Accessible label for choosing Environment or Personal scope for a named secret",
                  },
                  { name: _ },
                )),
                (C[0] = z),
                (C[1] = _),
                (C[2] = t))
              : (t = C[2]),
            C[3] !== N
              ? ((n =
                  "user_provided" === N
                    ? (0, i.jsx)(l.A, {
                        id: "environmentSetup.review.secret.personal",
                        defaultMessage: "Personal",
                        description: "Secret scope whose value belongs to the signed-in user",
                      })
                    : (0, i.jsx)(l.A, {
                        id: "environmentSetup.review.secret.environment",
                        defaultMessage: "Environment",
                        description: "Secret scope shared by users of the environment",
                      })),
                (C[3] = N),
                (C[4] = n))
              : (n = C[4]),
            C[5] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, i.jsx)(m.Aq_, {})), (C[5] = s)) : (s = C[5]),
            C[6] !== E || C[7] !== T || C[8] !== O || C[9] !== t || C[10] !== n
              ? ((a = (0, i.jsxs)(d.$, {
                  className: "w-36 justify-between",
                  color: T,
                  size: O,
                  disabled: E,
                  "aria-label": t,
                  children: [n, s],
                })),
                (C[6] = E),
                (C[7] = T),
                (C[8] = O),
                (C[9] = t),
                (C[10] = n),
                (C[11] = a))
              : (a = C[11]),
            C[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = (0, i.jsx)(c.ms.SectionLabel, {
                  children: (0, i.jsx)(l.A, {
                    id: "environmentSetup.secret.typeOfKey",
                    defaultMessage: "Type of key",
                    description: "Heading for choosing Environment or Personal scope for a secret value",
                  }),
                })),
                (C[12] = v))
              : (v = C[12]),
            C[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((h = (0, i.jsx)(u.I, { asset: p.environment, className: "shrink-0" })), (C[13] = h))
              : (h = C[13]),
            C[14] !== I || C[15] !== N
              ? ((f = () => "environment" !== N && I("environment")), (C[14] = I), (C[15] = N), (C[16] = f))
              : (f = C[16]),
            C[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, i.jsx)(l.A, {
                  id: "environmentSetup.review.secret.environmentHelp",
                  defaultMessage: "All users of this environment can use this value",
                  description: "Explanation of Environment secret scope",
                })),
                (b = (0, i.jsx)(l.A, {
                  id: "environmentSetup.review.secret.environment",
                  defaultMessage: "Environment",
                  description: "Secret scope shared by users of the environment",
                })),
                (C[17] = g),
                (C[18] = b))
              : ((g = C[17]), (b = C[18])),
            C[19] !== E || C[20] !== f
              ? ((x = (0, i.jsx)(c.ms.RadioItem, {
                  variant: "descriptive",
                  disabled: E,
                  icon: h,
                  value: "environment",
                  onSelect: f,
                  SubText: g,
                  children: b,
                })),
                (C[19] = E),
                (C[20] = f),
                (C[21] = x))
              : (x = C[21]),
            C[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((y = (0, i.jsx)(u.I, { asset: p.user_provided, className: "shrink-0" })), (C[22] = y))
              : (y = C[22]),
            C[23] !== I || C[24] !== N
              ? ((w = () => "user_provided" !== N && I("user_provided")), (C[23] = I), (C[24] = N), (C[25] = w))
              : (w = C[25]),
            C[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((j = (0, i.jsx)(l.A, {
                  id: "environmentSetup.review.secret.personalHelp",
                  defaultMessage: "Each user can add their own key",
                  description: "Explanation of Personal scope; adding a value is optional",
                })),
                (S = (0, i.jsx)(l.A, {
                  id: "environmentSetup.review.secret.personal",
                  defaultMessage: "Personal",
                  description: "Secret scope whose value belongs to the signed-in user",
                })),
                (C[26] = j),
                (C[27] = S))
              : ((j = C[26]), (S = C[27])),
            C[28] !== E || C[29] !== w
              ? ((k = (0, i.jsx)(c.ms.RadioItem, {
                  variant: "descriptive",
                  disabled: E,
                  icon: y,
                  value: "user_provided",
                  onSelect: w,
                  SubText: j,
                  children: S,
                })),
                (C[28] = E),
                (C[29] = w),
                (C[30] = k))
              : (k = C[30]),
            C[31] !== N || C[32] !== x || C[33] !== k
              ? ((M = (0, i.jsxs)(c.ms.RadioGroup, { value: N, children: [x, k] })),
                (C[31] = N),
                (C[32] = x),
                (C[33] = k),
                (C[34] = M))
              : (M = C[34]),
            C[35] !== M || C[36] !== a
              ? ((A = (0, i.jsxs)(c.Ab, { contentWidth: "panel", triggerButton: a, children: [v, M] })),
                (C[35] = M),
                (C[36] = a),
                (C[37] = A))
              : (A = C[37]),
            A
          )
        },
      },
    )
  },
  WT8y(e, t, n) {
    var i = n("rGp2")
    n.d(
      t,
      {},
      {
        Q: function (e, t) {
          let n = new URL(`/plugins/${encodeURIComponent(e)}`, "https://chatgpt.com")
          return (
            n.searchParams.set("no_universal_links", "1"),
            1 === t && (n.hash = `settings/Plugins/${encodeURIComponent(e)}?product-sku=CODEX`),
            n.toString()
          )
        },
        x: function ({ appId: e, installUrl: t, remotePluginId: n }) {
          let r = new URL(
            null == n ? "/plugins" : `/plugins/${encodeURIComponent(n)}`,
            t?.trim() || "https://chatgpt.com",
          )
          return (
            r.searchParams.set("no_universal_links", "1"),
            (r.hash =
              null == n
                ? `settings/Connectors?${new URLSearchParams({ connector: e, "product-sku": (0, i.MR)(), referrer: "codex" })}`
                : `settings/Plugins/${encodeURIComponent(n)}?product-sku=CODEX`),
            r.toString()
          )
        },
      },
    )
  },
  mYWF(e, t, n) {
    var i = n("DBCl"),
      r = n("rGp2"),
      s = n("hOO0"),
      a = n("ReGc"),
      o = n("WT8y")
    n.d(
      t,
      { Y2: () => o.x, x1: () => o.Q },
      {
        Hd: async function (e, { appId: t, appName: n }) {
          let o = await e.query.getOrFetch(a.a)
          return new URL(
            (0, r.Cj)({ id: (0, s.$)(t), name: n, installUrl: new URL(o.chatGptDesktopAuthOrigin ?? i.WaA).origin }),
          )
        },
      },
    )
  },
  BSnr(e, t, n) {
    n.d(t, { X: () => a })
    var i = n("ABep"),
      r = n("QosV"),
      s = n("on57")
    let a = Object.assign(
      function (e) {
        let t,
          n,
          a = (0, r.c)(6),
          { children: o, id: l, className: d } = e
        return (
          a[0] !== d ? ((t = (0, s.A)("flex flex-col", d)), (a[0] = d), (a[1] = t)) : (t = a[1]),
          a[2] !== o || a[3] !== l || a[4] !== t
            ? ((n = (0, i.jsx)("section", { id: l, className: t, children: o })),
              (a[2] = o),
              (a[3] = l),
              (a[4] = t),
              (a[5] = n))
            : (n = a[5]),
          n
        )
      },
      {
        Header: function (e) {
          let t,
            n,
            a,
            o,
            l,
            d,
            c,
            u = (0, r.c)(32),
            {
              title: m,
              subtitle: p,
              actions: v,
              actionsAlignment: h,
              className: f,
              size: g,
              titleGap: b,
              spacing: x,
              subtitlePlacement: y,
              subtitleWrap: w,
            } = e,
            j = void 0 === g ? "default" : g,
            S = void 0 === x ? "default" : x,
            k = void 0 === y ? "below-title" : y,
            M = void 0 === w ? "balance" : w,
            A = null != m,
            C = null != p,
            _ = null != v,
            N = "compact" === j
          u[0] !== N || u[1] !== p || u[2] !== k || u[3] !== M
            ? ((t = p
                ? (0, i.jsx)("div", {
                    className: (0, s.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === M ? "text-balance" : "text-wrap",
                      N ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === k && "w-full",
                    ),
                    children: p,
                  })
                : null),
              (u[0] = N),
              (u[1] = p),
              (u[2] = k),
              (u[3] = M),
              (u[4] = t))
            : (t = u[4])
          let E = t
          if (!A && !C && !_) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(i.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let P = "below-header" === k ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            I = C && "compact" === S && "pb-2",
            L = C && "compact" !== S && "pb-3"
          u[6] !== f || u[7] !== C || u[8] !== N || u[9] !== S || u[10] !== P || u[11] !== I || u[12] !== L
            ? ((n = (0, s.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                P,
                I,
                L,
                !C && (0, s.A)("items-center pb-1.5", "compact" === S ? "min-h-8" : "min-h-toolbar"),
                C && N && "items-center",
                C && !N && "items-start",
                f,
              )),
              (u[6] = f),
              (u[7] = C),
              (u[8] = N),
              (u[9] = S),
              (u[10] = P),
              (u[11] = I),
              (u[12] = L),
              (u[13] = n))
            : (n = u[13])
          let z =
            "none" === (void 0 === b ? "default" : b)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[14] !== z ? ((a = (0, s.A)("flex min-w-0 flex-1 flex-col", z)), (u[14] = z), (u[15] = a)) : (a = u[15]),
            u[16] !== C || u[17] !== j || u[18] !== m
              ? ((o = m
                  ? (0, i.jsx)("div", {
                      className: (0, s.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === j && "text-sm leading-[18px]",
                        ("large" === j || ("default" === j && C)) && "text-lg",
                        ("base" === j || ("default" === j && !C)) && "text-base",
                      ),
                      children: m,
                    })
                  : null),
                (u[16] = C),
                (u[17] = j),
                (u[18] = m),
                (u[19] = o))
              : (o = u[19]))
          let T = "below-title" === k ? E : null
          ;(u[20] !== a || u[21] !== o || u[22] !== T
            ? ((l = (0, i.jsxs)("div", { className: a, children: [o, T] })),
              (u[20] = a),
              (u[21] = o),
              (u[22] = T),
              (u[23] = l))
            : (l = u[23]),
            u[24] !== v || u[25] !== h
              ? ((d = v
                  ? (0, i.jsx)("div", {
                      className: (0, s.A)("flex items-center gap-2", "end" === h && "self-end"),
                      children: v,
                    })
                  : null),
                (u[24] = v),
                (u[25] = h),
                (u[26] = d))
              : (d = u[26]))
          let O = "below-header" === k ? E : null
          return (
            u[27] !== n || u[28] !== l || u[29] !== d || u[30] !== O
              ? ((c = (0, i.jsxs)("div", { className: n, children: [l, d, O] })),
                (u[27] = n),
                (u[28] = l),
                (u[29] = d),
                (u[30] = O),
                (u[31] = c))
              : (c = u[31]),
            c
          )
        },
        Content: function (e) {
          let t,
            n,
            a = (0, r.c)(5),
            { children: o, className: l } = e
          return (
            a[0] !== l ? ((t = (0, s.A)("flex flex-col gap-1.5", l)), (a[0] = l), (a[1] = t)) : (t = a[1]),
            a[2] !== o || a[3] !== t
              ? ((n = (0, i.jsx)("div", { className: t, children: o })), (a[2] = o), (a[3] = t), (a[4] = n))
              : (n = a[4]),
            n
          )
        },
        Footer: function (e) {
          let t,
            n,
            a = (0, r.c)(6),
            { children: o, className: l, variant: d } = e,
            c =
              "action" === (void 0 === d ? "description" : d)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            a[0] !== l || a[1] !== c
              ? ((t = (0, s.A)("text-balance text-secondary", c, l)), (a[0] = l), (a[1] = c), (a[2] = t))
              : (t = a[2]),
            a[3] !== o || a[4] !== t
              ? ((n = (0, i.jsx)("div", { className: t, children: o })), (a[3] = o), (a[4] = t), (a[5] = n))
              : (n = a[5]),
            n
          )
        },
      },
    )
  },
  qlwg(e, t, n) {
    let i = (0, n("iJY0").a)({
      name: "person-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.343018, y: 1.311279, width: 11.313484, height: 13.236328 },
        visualBounds: { x: 2.343018, y: 1.311279, width: 11.313484, height: 13.236328 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.343018, y: 1.311279, width: 11.313484, height: 13.236328 },
        center: { x: 7.99976, y: 7.929443 },
        insets: { top: 1.311279, right: 2.343498, bottom: 1.452393, left: 2.343018 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.99976, y: 7.929443 }, foreground: { x: 7.99976, y: 7.929443 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.00025 8.79761C10.9675 8.79777 13.4025 11.0751 13.6545 13.9773C13.6794 14.2659 13.4657 14.5205 13.177 14.5457C12.8883 14.5707 12.6339 14.3567 12.6086 14.0681C12.4033 11.7038 10.4181 9.84855 8.00025 9.84839C5.58227 9.8484 3.59718 11.7037 3.39185 14.0681C3.36657 14.3568 3.11124 14.5707 2.82251 14.5457C2.53405 14.5204 2.32018 14.2658 2.34497 13.9773C2.59702 11.075 5.03284 8.79762 8.00025 8.79761Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00025 1.31128C9.75704 1.31137 11.1809 2.73611 11.1809 4.49292C11.1808 6.24966 9.75698 7.6735 8.00025 7.67358C6.24343 7.67358 4.81869 6.24971 4.81861 4.49292C4.81861 2.73605 6.24338 1.31128 8.00025 1.31128ZM8.00025 2.36206C6.82328 2.36206 5.86939 3.31595 5.86939 4.49292C5.86947 5.66981 6.82333 6.62378 8.00025 6.62378C9.17708 6.62369 10.131 5.66976 10.1311 4.49292C10.1311 3.31601 9.17714 2.36215 8.00025 2.36206Z" fill="currentColor"/>',
    })
    n.d(t, {}, { x: i })
  },
  swDA(e, t, n) {
    n.d(t, { qg: () => f })
    let i = /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i
    class r extends Date {
      #e = !1
      #t = !1
      #n = null
      constructor(e) {
        let t = !0,
          n = !0,
          r = "Z"
        if ("string" == typeof e) {
          let s = e.match(i)
          s
            ? (s[1] || ((t = !1), (e = `0000-01-01T${e}`)),
              (n = !!s[2]) && " " === e[10] && (e = e.replace(" ", "T")),
              s[2] && +s[2] > 23 ? (e = "") : ((r = s[3] || null), (e = e.toUpperCase()), !r && n && (e += "Z")))
            : (e = "")
        }
        ;(super(e), isNaN(this.getTime()) || ((this.#e = t), (this.#t = n), (this.#n = r)))
      }
      isDateTime() {
        return this.#e && this.#t
      }
      isLocal() {
        return !this.#e || !this.#t || !this.#n
      }
      isDate() {
        return this.#e && !this.#t
      }
      isTime() {
        return this.#t && !this.#e
      }
      isValid() {
        return this.#e || this.#t
      }
      toISOString() {
        let e = super.toISOString()
        if (this.isDate()) return e.slice(0, 10)
        if (this.isTime()) return e.slice(11, 23)
        if (null === this.#n) return e.slice(0, -1)
        if ("Z" === this.#n) return e
        let t = 60 * this.#n.slice(1, 3) + +this.#n.slice(4, 6)
        return (
          (t = "-" === this.#n[0] ? t : -t),
          new Date(this.getTime() - 6e4 * t).toISOString().slice(0, -1) + this.#n
        )
      }
      static wrapAsOffsetDateTime(e, t = "Z") {
        let n = new r(e)
        return ((n.#n = t), n)
      }
      static wrapAsLocalDateTime(e) {
        let t = new r(e)
        return ((t.#n = null), t)
      }
      static wrapAsLocalDate(e) {
        let t = new r(e)
        return ((t.#t = !1), (t.#n = null), t)
      }
      static wrapAsLocalTime(e) {
        let t = new r(e)
        return ((t.#e = !1), (t.#n = null), t)
      }
    }
    class s extends Error {
      line
      column
      codeblock
      constructor(e, t) {
        var n, i
        let r,
          [s, a] = ((n = t.toml), (i = t.ptr), [(r = n.slice(0, i).split(/\r\n|\n|\r/g)).length, r.pop().length + 1]),
          o = (function (e, t, n) {
            let i = e.split(/\r\n|\n|\r/g),
              r = "",
              s = (0 | Math.log10(t + 1)) + 1
            for (let e = t - 1; e <= t + 1; e++) {
              let a = i[e - 1]
              a &&
                ((r += e.toString().padEnd(s, " ")),
                (r += ":  "),
                (r += a),
                (r += "\n"),
                e === t && ((r += " ".repeat(s + n + 2)), (r += "^\n")))
            }
            return r
          })(t.toml, s, a)
        ;(super(
          `Invalid TOML document: ${e}

${o}`,
          t,
        ),
          (this.line = s),
          (this.column = a),
          (this.codeblock = o))
      }
    }
    let a = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,
      o = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,
      l = /^[+-]?0[0-9_]/
    function d(e, t) {
      let n = e[t++],
        i = n,
        r = "'" === n,
        a = n === e[t] && n === e[t + 1]
      a && ("\n" === e[(t += 2)] ? t++ : "\r" === e[t] && "\n" === e[t + 1] && (t += 2))
      let o = "",
        l = t,
        d = 0
      for (let c = t; c < e.length; c++)
        if (((n = e[c]), a && ("\n" === n || ("\r" === n && "\n" === e[c + 1])))) d = d && 3
        else if ((n < " " && "	" !== n) || "" === n)
          throw new s("control characters are not allowed in strings", { toml: e, ptr: c })
        else if ((!d || 3 === d) && n === i && (!a || (e[c + 1] === i && e[c + 2] === i)))
          return (a && (e[c + 3] === i && c++, e[c + 3] === i && c++), [d ? o : o + e.slice(l, c), c + (a ? 3 : 1)])
        else if (d) {
          if (1 === d)
            if ("x" === n || "u" === n || "U" === n) {
              let t = 0,
                i = "x" === n ? 2 : "u" === n ? 4 : 8
              for (let n = 0; n < i; n++, c++) {
                let n = e.charCodeAt(c + 1),
                  i =
                    n >= 48 && n <= 57
                      ? n - 48
                      : n >= 65 && n <= 70
                        ? n - 65 + 10
                        : n >= 97 && n <= 102
                          ? n - 97 + 10
                          : -1
                if (i < 0) throw new s("invalid non-hex character in unicode escape", { toml: e, ptr: c + 1 })
                t = (t << 4) | i
              }
              if (t < 0 || t > 1114111 || (t >= 55296 && t <= 57343))
                throw new s("invalid unicode escape", { toml: e, ptr: c })
              ;((o += String.fromCodePoint(t)), (l = c + 1), (d = 0))
            } else if (" " === n || "	" === n) d = 2
            else {
              if ("b" === n) o += "\b"
              else if ("t" === n) o += "	"
              else if ("n" === n) o += "\n"
              else if ("f" === n) o += "\f"
              else if ("r" === n) o += "\r"
              else if ("e" === n) o += "\x1b"
              else if ('"' === n) o += '"'
              else if ("\\" === n) o += "\\"
              else throw new s("unrecognized escape sequence", { toml: e, ptr: c })
              ;((l = c + 1), (d = 0))
            }
          else if (" " !== n && "	" !== n) {
            if (2 === d) throw new s("invalid escape: only line-ending whitespace may be escaped", { toml: e, ptr: l })
            ;((d = +(!r && "\\" === n)), (l = c))
          }
        } else r || "\\" !== n || ((o += e.slice(l, (l = c))), (d = 1))
      throw new s("unfinished string", { toml: e, ptr: t })
    }
    function c(e, t = 0, n = e.length) {
      let i = e.indexOf("\n", t)
      return ("\r" === e[i - 1] && i--, i <= n ? i : -1)
    }
    function u(e, t) {
      for (let n = t; n < e.length; n++) {
        let i = e[n]
        if ("\n" === i) return n
        if ("\r" === i && "\n" === e[n + 1]) return n + 1
        if ((i < " " && "	" !== i) || "" === i)
          throw new s("control characters are not allowed in comments", { toml: e, ptr: t })
      }
      return e.length
    }
    function m(e, t, n, i) {
      let r
      for (;;) {
        for (; " " === (r = e[t]) || "	" === r || (!n && ("\n" === r || ("\r" === r && "\n" === e[t + 1])));) t++
        if (i || "#" !== r) break
        t = u(e, t)
      }
      return t
    }
    let p = /^[a-zA-Z0-9-_]+[ \t]*$/
    function v(e, t, n = "=") {
      let i = t - 1,
        r = [],
        a = e.indexOf(n, t)
      if (a < 0) throw new s("incomplete key-value: cannot find end of key", { toml: e, ptr: t })
      do {
        let o = e[(t = ++i)]
        if (" " !== o && "	" !== o)
          if ('"' === o || "'" === o) {
            if (o === e[t + 1] && o === e[t + 2])
              throw new s("multiline strings are not allowed in keys", { toml: e, ptr: t })
            let [l, u] = d(e, t)
            i = e.indexOf(".", u)
            let m = e.slice(u, i < 0 || i > a ? a : i),
              p = c(m)
            if (p > -1) throw new s("newlines are not allowed in keys", { toml: e, ptr: t + i + p })
            if (m.trimStart()) throw new s("found extra tokens after the string part", { toml: e, ptr: u })
            if (a < u && (a = e.indexOf(n, u)) < 0)
              throw new s("incomplete key-value: cannot find end of key", { toml: e, ptr: t })
            r.push(l)
          } else {
            i = e.indexOf(".", t)
            let n = e.slice(t, i < 0 || i > a ? a : i)
            if (!p.test(n))
              throw new s("only letter, numbers, dashes and underscores are allowed in keys", { toml: e, ptr: t })
            r.push(n.trimEnd())
          }
      } while (i + 1 && i < a)
      return [r, m(e, a + 1, !0, !0)]
    }
    function h(e, t, n, i) {
      let r,
        s,
        a = t,
        o = n,
        l = !1
      for (let t = 0; t < e.length; t++) {
        if (t) {
          if (((a = l ? a[r] : (a[r] = {})), (o = (s = o[r]).c), 0 === i && (1 === s.t || 2 === s.t))) return null
          if (2 === s.t) {
            let e = a.length - 1
            ;((a = a[e]), (o = o[e].c))
          }
        }
        if ((l = Object.hasOwn(a, (r = e[t]))) && o[r]?.t === 0 && o[r]?.d) return null
        l ||
          ("__proto__" === r &&
            (Object.defineProperty(a, r, { enumerable: !0, configurable: !0, writable: !0 }),
            Object.defineProperty(o, r, { enumerable: !0, configurable: !0, writable: !0 })),
          (o[r] = { t: t < e.length - 1 && 2 === i ? 3 : i, d: !1, i: 0, c: {} }))
      }
      if (
        ((s = o[r]).t !== i && (1 !== i || 3 !== s.t)) ||
        (2 === i &&
          (s.d || ((s.d = !0), (a[r] = [])), a[r].push((a = {})), (s.c[s.i++] = s = { t: 1, d: !1, i: 0, c: {} })),
        s.d)
      )
        return null
      if (((s.d = !0), 1 === i)) a = l ? a[r] : (a[r] = {})
      else if (0 === i && l) return null
      return [r, a, s.c]
    }
    function f(e, { maxDepth: t = 1e3, integersAsBigInt: n } = {}) {
      let i = {},
        p = {},
        g = i,
        b = p
      for (let f = m(e, 0); f < e.length;) {
        if ("[" === e[f]) {
          let t = "[" === e[++f],
            n = v(e, (f += +t), "]")
          if (t) {
            if ("]" !== e[n[1] - 1]) throw new s("expected end of table declaration", { toml: e, ptr: n[1] - 1 })
            n[1]++
          }
          let r = h(n[0], i, p, t ? 2 : 1)
          if (!r) throw new s("trying to redefine an already defined table or value", { toml: e, ptr: f })
          ;((b = r[2]), (g = r[1]), (f = n[1]))
        } else {
          let i = v(e, f),
            p = h(i[0], g, b, 0)
          if (!p) throw new s("trying to redefine an already defined table or value", { toml: e, ptr: f })
          let x = (function e(t, n, i, p, h) {
            var f
            let g, b
            if (0 === p) throw new s("document contains excessively nested structures. aborting.", { toml: t, ptr: n })
            let x = t[n]
            if ("[" === x || "{" === x) {
              let [r, a] =
                "[" === x
                  ? (function (t, n, i, r) {
                      let a,
                        o = []
                      for (n++; "]" !== (a = t[n++]) && a;)
                        if ("," === a) throw new s("expected value, found comma", { toml: t, ptr: n - 1 })
                        else if ("#" === a) n = u(t, n)
                        else if (" " !== a && "	" !== a && "\n" !== a && "\r" !== a) {
                          let s = e(t, n - 1, "]", i - 1, r)
                          ;(o.push(s[0]), (n = s[1]))
                        }
                      if (!a) throw new s("unfinished array encountered", { toml: t, ptr: n })
                      return [o, n]
                    })(t, n, p, h)
                  : (function (t, n, i, r) {
                      let a,
                        o = {},
                        l = new Set()
                      for (n++; "}" !== (a = t[n++]) && a;)
                        if ("," === a) throw new s("expected value, found comma", { toml: t, ptr: n - 1 })
                        else if ("#" === a) n = u(t, n)
                        else if (" " !== a && "	" !== a && "\n" !== a && "\r" !== a) {
                          let a,
                            d = o,
                            c = !1,
                            [u, m] = v(t, n - 1)
                          for (let e = 0; e < u.length; e++) {
                            if (
                              (e && (d = c ? d[a] : (d[a] = {})),
                              (c = Object.hasOwn(d, (a = u[e]))) && ("object" != typeof d[a] || l.has(d[a])))
                            )
                              throw new s("trying to redefine an already defined value", { toml: t, ptr: n })
                            c ||
                              "__proto__" !== a ||
                              Object.defineProperty(d, a, { enumerable: !0, configurable: !0, writable: !0 })
                          }
                          if (c) throw new s("trying to redefine an already defined value", { toml: t, ptr: n })
                          let [p, h] = e(t, m, "}", i - 1, r)
                          ;(l.add(p), (d[a] = p), (n = h))
                        }
                      if (!a) throw new s("unfinished table encountered", { toml: t, ptr: n })
                      return [o, n]
                    })(t, n, p, h)
              if (i) {
                if (((a = m(t, a)), "," === t[a])) a++
                else if (t[a] !== i) throw new s("expected comma or end of structure", { toml: t, ptr: a })
              }
              return [r, a]
            }
            if ('"' === x || "'" === x) {
              let [e, r] = d(t, n)
              if (i) {
                if (((r = m(t, r)), t[r] && "," !== t[r] && t[r] !== i && "\n" !== t[r] && "\r" !== t[r]))
                  throw new s("unexpected character encountered", { toml: t, ptr: r })
                "," === t[r] && r++
              }
              return [e, r]
            }
            let y = (function (e, t, n, i = !1) {
                if (!n) return (t = c(e, t)) < 0 ? e.length : t
                for (let r = t; r < e.length; r++) {
                  let t = e[r]
                  if ("#" === t) r = c(e, r)
                  else if ("," === t) return r + 1
                  else if (t === n || (i && ("\n" === t || ("\r" === t && "\n" === e[r + 1])))) return r
                }
                throw new s("cannot find end of structure", { toml: e, ptr: t })
              })(t, n, i),
              w =
                ((f = y - ("," === t[y - 1])),
                (b = (g = t.slice(n, f)).indexOf("#")) > -1 && (u(t, b), (g = g.slice(0, b))),
                [g.trimEnd(), b])
            if (!w[0]) throw new s("incomplete key-value declaration: no value specified", { toml: t, ptr: n })
            return (
              i && w[1] > -1 && ((y = m(t, n + w[1])), "," === t[y] && y++),
              [
                (function (e, t, n, i) {
                  if ("true" === e) return !0
                  if ("false" === e) return !1
                  if ("-inf" === e) return -1 / 0
                  if ("inf" === e || "+inf" === e) return 1 / 0
                  if ("nan" === e || "+nan" === e || "-nan" === e) return 0 / 0
                  if ("-0" === e) return i ? 0n : 0
                  let d = a.test(e)
                  if (d || o.test(e)) {
                    if (l.test(e)) throw new s("leading zeroes are not allowed", { toml: t, ptr: n })
                    let r = +(e = e.replace(/_/g, ""))
                    if (isNaN(r)) throw new s("invalid number", { toml: t, ptr: n })
                    if (d) {
                      if ((d = !Number.isSafeInteger(r)) && !i)
                        throw new s("integer value cannot be represented losslessly", { toml: t, ptr: n })
                      ;(d || !0 === i) && (r = BigInt(e))
                    }
                    return r
                  }
                  let c = new r(e)
                  if (!c.isValid()) throw new s("invalid value", { toml: t, ptr: n })
                  return c
                })(w[0], t, n, h),
                y,
              ]
            )
          })(e, i[1], void 0, t, n)
          ;((p[1][p[0]] = x[0]), (f = x[1]))
        }
        if (((f = m(e, f, !0)), e[f] && "\n" !== e[f] && "\r" !== e[f]))
          throw new s("each key-value declaration must be followed by an end-of-line", { toml: e, ptr: f })
        f = m(e, f)
      }
      return i
    }
  },
}
//# sourceMappingURL=347242.cbd4a5c88b.js.map
