/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
export const __rspack_esm_ids = [583345]
export const __webpack_modules__ = {
  j1Su(e, t, n) {
    var r = n("OeLR"),
      s = n("W9Ad"),
      a = n("ASxG")
    let i = a.IeY(v),
      l = a.zMY(),
      o = a.YOg(a.YjP()),
      d = a.k5n(["allow", "deny"]),
      c = a.k5n(["turn", "thread"]),
      u = i.transform(function (e) {
        return {
          access: h(e.access, d),
          downloads: h(e.downloads, d),
          uploads: h(e.uploads, d),
          fullCdpAccess: h(e.full_cdp_access, d),
          autoReview: h(e.auto_review, d),
          persistentApproval: h(e.persistent_approval, l),
          accessApprovalLifetime: h(e.access_approval_lifetime, c),
        }
      }),
      m = i.transform(function (e) {
        return {
          extension: null,
          allowWebmcp: h(e.allow_webmcp, l),
          allowHistoryAccess: h(e.allow_history_access, l),
          disableAutoReview: h(e.disable_auto_review, l),
          allowGlobalPersistentApproval: h(e.allow_global_persistent_approval, l),
          defaultOriginPolicy: h(e.default_origin_policy, u),
          origins: h(e.origins, g(u)),
        }
      }),
      p = i.transform(function (e) {
        let t = h(e.allowed_domains, o),
          n = h(e.denied_domains, o),
          r = h(e.domains, g(d))
        return (
          null != r && (null != t || null != n) && x(),
          {
            enabled: h(e.enabled, l),
            httpPort: null,
            socksPort: null,
            allowUpstreamProxy: h(e.allow_upstream_proxy, l),
            dangerouslyAllowNonLoopbackProxy: null,
            dangerouslyAllowAllUnixSockets: null,
            unixSockets: null,
            allowUnixSockets: null,
            allowLocalBinding: h(e.allow_local_binding, l),
            domains: r,
            reviewDomains: h(e.review_domains, o),
            managedAllowedDomainsOnly: h(e.managed_allowed_domains_only, l),
            allowedDomains: t,
            deniedDomains: n,
          }
        )
      })
    function f(e) {
      return (
        void 0 !== e.features && void 0 !== e.feature_requirements && x(),
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
          ...r.JF,
          allowBrowserAndComputerUse: h(e.allow_browser_and_computer_use, l),
          browserUse: h(e.browser_use, m),
          network: h(e.experimental_network, p),
          featureRequirements: h(void 0 === e.features ? e.feature_requirements : e.features, g(l)),
        }
      )
    }
    function v(e) {
      if (null == e || "object" != typeof e) return !1
      let t = Object.getPrototypeOf(e)
      return t === Object.prototype || null == t
    }
    function h(e, t) {
      return void 0 === e ? null : t.parse(e)
    }
    function g(e) {
      return i.transform((t) => Object.fromEntries(Object.entries(t).map(([t, n]) => [t, e.parse(n)])))
    }
    function x() {
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
              let t = (0, s.qg)(e.contents, { integersAsBigInt: !0 })
              ;(f(t),
                (n = (function e(t, n) {
                  let r = new Map(Object.entries(t))
                  for (let [t, s] of Object.entries(n)) {
                    let n = r.get(t)
                    r.set(t, v(n) && v(s) ? e(n, s) : s)
                  }
                  return Object.fromEntries(r)
                })(n, t)))
            }
            return { supportsIndependentSpeedModes: null, requirements: f(n) }
          } catch {
            return x()
          }
        },
      },
    )
  },
  kPrN(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("ms37"),
      i = n("DBCl"),
      l = n("zd8w"),
      o = n("unG7"),
      d = n("eLzw"),
      c = n("NgMj"),
      u = n("tgV8"),
      m = n("RxZZ"),
      p = n("kkEw"),
      f = n("dDkj"),
      v = n("a6Zv")
    function h(e) {
      let t,
        n,
        r = (0, s.c)(4),
        { lineDiffType: i } = e,
        o = (0, a.iy)()
      return (
        r[0] !== i || r[1] !== o
          ? ((t = () => {
              if (null == o) return
              let e = o.getDiffRenderOptions()
              e.lineDiffType !== i && o.setRenderOptions({ ...e, lineDiffType: i })
            }),
            (n = [i, o]),
            (r[0] = i),
            (r[1] = o),
            (r[2] = t),
            (r[3] = n))
          : ((t = r[2]), (n = r[3])),
        (0, l.useEffect)(t, n),
        null
      )
    }
    ;(n("wIFP"),
      n.d(
        t,
        {},
        {
          FileDiff: function (e) {
            let t,
              n,
              a,
              l,
              g,
              x,
              b,
              j,
              y,
              S,
              w,
              M,
              A,
              k,
              _,
              C,
              N,
              P = (0, s.c)(45)
            P[0] !== e
              ? (({ alignCommentGutter: l, lineDiffType: t, onPostRenderInstance: n, ...a } = e),
                (P[0] = e),
                (P[1] = t),
                (P[2] = n),
                (P[3] = a),
                (P[4] = l))
              : ((t = P[1]), (n = P[2]), (a = P[3]), (l = P[4]))
            let I = void 0 !== l && l,
              E = (0, f.P)(),
              z = (0, f._)(E),
              T = (0, m.iK)(i.oKj.lightCodeThemeId),
              L = (0, m.iK)(i.oKj.darkCodeThemeId),
              D = (0, m.iK)(i.oKj.diffMarkerStyle)
            ;(0, v.Y)()
            let O = "symbols" === D
            P[5] !== z || P[6] !== L || P[7] !== T
              ? ((g = "light" === z ? (0, p.oW)(T, "light") : (0, p.oW)(L, "dark")),
                (P[5] = z),
                (P[6] = L),
                (P[7] = T),
                (P[8] = g))
              : (g = P[8])
            let R = g
            if (P[9] !== I || P[10] !== R || P[11] !== t || P[12] !== n || P[13] !== a || P[14] !== O) {
              let e
              ;((0, p.aD)(void 0),
                P[25] !== a.fileDiff ? ((e = (0, c._)(a.fileDiff)), (P[25] = a.fileDiff), (P[26] = e)) : (e = P[26]))
              let s = e
              ;((b = d.U),
                P[27] !== t
                  ? ((j = null == t ? null : (0, r.jsx)(h, { lineDiffType: t })), (P[27] = t), (P[28] = j))
                  : (j = P[28]),
                (x = o.FileDiffPresentation),
                (y = a),
                (S = s),
                (w = I),
                (M = O ? "classic" : "bars"),
                (A = t),
                P[29] !== n
                  ? ((k = (e, t, r) => {
                      ;((0, u.O8)(e, t), n?.(e, t, r))
                    }),
                    (P[29] = n),
                    (P[30] = k))
                  : (k = P[30]),
                (_ = R.name),
                (P[9] = I),
                (P[10] = R),
                (P[11] = t),
                (P[12] = n),
                (P[13] = a),
                (P[14] = O),
                (P[15] = x),
                (P[16] = b),
                (P[17] = j),
                (P[18] = y),
                (P[19] = S),
                (P[20] = w),
                (P[21] = M),
                (P[22] = A),
                (P[23] = k),
                (P[24] = _))
            } else
              ((x = P[15]),
                (b = P[16]),
                (j = P[17]),
                (y = P[18]),
                (S = P[19]),
                (w = P[20]),
                (M = P[21]),
                (A = P[22]),
                (k = P[23]),
                (_ = P[24]))
            return (
              P[31] !== x ||
              P[32] !== z ||
              P[33] !== y ||
              P[34] !== S ||
              P[35] !== w ||
              P[36] !== M ||
              P[37] !== A ||
              P[38] !== k ||
              P[39] !== _
                ? ((C = (0, r.jsx)(x, {
                    ...y,
                    fileDiff: S,
                    alignCommentGutter: w,
                    diffIndicators: M,
                    lineDiffType: A,
                    onPostRenderInstance: k,
                    theme: _,
                    themeType: z,
                  })),
                  (P[31] = x),
                  (P[32] = z),
                  (P[33] = y),
                  (P[34] = S),
                  (P[35] = w),
                  (P[36] = M),
                  (P[37] = A),
                  (P[38] = k),
                  (P[39] = _),
                  (P[40] = C))
                : (C = P[40]),
              P[41] !== b || P[42] !== j || P[43] !== C
                ? ((N = (0, r.jsxs)(b, { children: [j, C] })), (P[41] = b), (P[42] = j), (P[43] = C), (P[44] = N))
                : (N = P[44]),
              N
            )
          },
        },
      ))
  },
  eLzw(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("ms37"),
      i = n("zd8w")
    let l = (0, n("CSxw").$t)(),
      o = (0, i.lazy)(async () => ({ default: (await n.e(548896).then(n.bind(n, "eZl1"))).PierreHighlightProvider }))
    n.d(
      t,
      {},
      {
        U: function (e) {
          let t,
            n = (0, s.c)(3),
            { children: d } = e,
            c = (0, a.iy)()
          return l
            ? d
            : (n[0] !== d || n[1] !== c
                ? ((t =
                    null == c
                      ? (0, r.jsx)(i.Suspense, { fallback: null, children: (0, r.jsx)(o, { children: d }) })
                      : d),
                  (n[0] = d),
                  (n[1] = c),
                  (n[2] = t))
                : (t = n[2]),
              t)
        },
      },
    )
  },
  tgV8(e, t, n) {
    var r = n("axtm"),
      s = n("Iv6t")
    let a = new WeakMap()
    function i(e) {
      let t = e.querySelector(s.mZ)
      return null == t ? void 0 : a.get(t)
    }
    n.d(
      t,
      {},
      {
        KO: function (e, t, n) {
          let r = i(e),
            s = r?.getLinePosition(t, n)
          if (r?.top != null && null != s) return { height: s.height, top: r.top + s.top }
        },
        O8: function (e, t) {
          t instanceof r.V && a.set(e, t)
        },
        kQ: function (e, t) {
          i(e)?.setSelectedLines(t, { notify: !0 })
        },
      },
    )
  },
  Laxs(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("qmMi"),
      i = n("zd8w"),
      l = n("Wf1j"),
      o = n("oyxz"),
      d = n("Sm6l"),
      c = n("SGsN"),
      u = n("Yewb"),
      m = n("OWtl"),
      p = n("rLsS"),
      f = n("KZOJ"),
      v = n("fUey")
    function h() {
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
            x,
            b,
            j = (0, s.c)(21),
            { connectorId: y, disabled: S, reconnect: w, compact: M } = e,
            A = void 0 !== M && M,
            k = (0, a.gh)(m.u)
          j[0] !== y ? ((t = (0, v.Pt)(y)), (j[0] = y), (j[1] = t)) : (t = j[1])
          let _ = t,
            C = (0, l.A)(),
            { status: N } = (0, u.XY)(),
            [P, I] = (0, i.useState)(!1),
            E = P || null != N,
            z = A ? "ghostActive" : "accent",
            T = S || E,
            L = A ? "menuRow" : "dialog"
          return (
            j[2] !== y || j[3] !== C || j[4] !== _ || j[5] !== k
              ? ((n = () => {
                  ;(I(!0),
                    (0, p.X_)(k, y, { allowGitLab: !0 })
                      .catch(h)
                      .then((e) => {
                        if ("unavailable" === e.status)
                          return void k
                            .get(c.Id)
                            .danger(
                              C.formatMessage(
                                {
                                  id: "environmentSetup.repositoryPicker.connectProvider.unavailable",
                                  defaultMessage: "{provider} could not be loaded. Try again",
                                },
                                { provider: _ },
                              ),
                              {
                                errorAnalytics: {
                                  toastId: "environmentSetup.repositoryPicker.connectGithub.unavailable",
                                },
                              },
                            )
                      })
                      .finally(() => {
                        I(!1)
                      }))
                }),
                (j[2] = y),
                (j[3] = C),
                (j[4] = _),
                (j[5] = k),
                (j[6] = n))
              : (n = j[6]),
            j[7] !== A || j[8] !== y
              ? ((g = A ? (0, r.jsx)(f.R, { connectorId: y, compact: !0 }) : null), (j[7] = A), (j[8] = y), (j[9] = g))
              : (g = j[9]),
            j[10] !== _ || j[11] !== w
              ? ((x = w
                  ? (0, r.jsx)(o.A, {
                      id: "restricted.environmentSetup.repositoryPicker.reconnectAction.provider",
                      defaultMessage: "Reconnect {provider}",
                      values: { provider: _ },
                    })
                  : (0, r.jsx)(o.A, {
                      id: "restricted.environmentSetup.repositoryPicker.connectAction.provider",
                      defaultMessage: "Connect {provider}",
                      values: { provider: _ },
                    })),
                (j[10] = _),
                (j[11] = w),
                (j[12] = x))
              : (x = j[12]),
            j[13] !== E || j[14] !== z || j[15] !== T || j[16] !== L || j[17] !== n || j[18] !== g || j[19] !== x
              ? ((b = (0, r.jsxs)(d.$, {
                  "aria-busy": E,
                  color: z,
                  disabled: T,
                  loading: E,
                  size: L,
                  onClick: n,
                  children: [g, x],
                })),
                (j[13] = E),
                (j[14] = z),
                (j[15] = T),
                (j[16] = L),
                (j[17] = n),
                (j[18] = g),
                (j[19] = x),
                (j[20] = b))
              : (b = j[20]),
            b
          )
        },
      },
    )
  },
  Jd1d(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("oyxz"),
      i = n("Sm6l"),
      l = n("FrrB"),
      o = n("Laxs"),
      d = n("KZOJ"),
      c = n("fUey")
    function u() {
      return (0, r.jsx)("br", {})
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
            f,
            v = (0, s.c)(23),
            {
              connectorId: h,
              connectionIcon: g,
              connectionMessage: x,
              connectionAction: b,
              disabled: j,
              reconnect: y,
              status: S,
              onRetry: w,
            } = e
          v[0] !== h ? ((t = (0, c.Pt)(h)), (v[0] = h), (v[1] = t)) : (t = v[1])
          let M = t
          if ("error" === S) {
            let e, t, s
            ;(v[2] !== M
              ? ((e = (0, r.jsx)(a.A, {
                  id: "restricted.environmentSetup.repositoryPicker.connectionError.provider",
                  defaultMessage: "{provider} connections couldn\u2019t load",
                  values: { provider: M },
                })),
                (v[2] = M),
                (v[3] = e))
              : (e = v[3]),
              (n = e),
              v[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, r.jsx)(a.A, {
                    id: "restricted.environmentSetup.repositoryPicker.retryConnection",
                    defaultMessage: "Try again",
                  })),
                  (v[4] = t))
                : (t = v[4]),
              v[5] !== j || v[6] !== w
                ? ((s = (0, r.jsx)(i.$, { color: "accent", disabled: j, onClick: w, size: "dialog", children: t })),
                  (v[5] = j),
                  (v[6] = w),
                  (v[7] = s))
                : (s = v[7]),
              (m = s))
          } else if ("disabled" === S) {
            let e
            ;(v[8] !== M
              ? ((e = (0, r.jsx)(a.A, {
                  id: "restricted.environmentSetup.repositoryPicker.blockedGuidance.provider",
                  defaultMessage:
                    "{provider} isn\u2019t enabled in this workspace<br></br>Ask a workspace admin to enable the {provider} plugin",
                  values: { provider: M, br: u },
                })),
                (v[8] = M),
                (v[9] = e))
              : (e = v[9]),
              (n = e))
          } else {
            let e
            ;((n = x),
              v[10] !== b || v[11] !== h || v[12] !== j || v[13] !== y
                ? ((e = b ?? (0, r.jsx)(o.z, { connectorId: h, disabled: j, reconnect: y })),
                  (v[10] = b),
                  (v[11] = h),
                  (v[12] = j),
                  (v[13] = y),
                  (v[14] = e))
                : (e = v[14]),
              (m = e))
          }
          return (
            v[15] !== g || v[16] !== h || v[17] !== S
              ? ((p = "connect" === S ? (g ?? (0, r.jsx)(d.R, { connectorId: h })) : void 0),
                (v[15] = g),
                (v[16] = h),
                (v[17] = S),
                (v[18] = p))
              : (p = v[18]),
            v[19] !== m || v[20] !== n || v[21] !== p
              ? ((f = (0, r.jsx)(l.A, {
                  className: "flex-1 select-none",
                  title: null,
                  description: n,
                  actions: m,
                  illustration: p,
                  illustrationSize: "icon",
                })),
                (v[19] = m),
                (v[20] = n),
                (v[21] = p),
                (v[22] = f))
              : (f = v[22]),
            f
          )
        },
      },
    )
  },
  KZOJ(e, t, n) {
    n.d(t, { R: () => m })
    var r = n("ABep"),
      s = n("QosV")
    let a = (0, n("ESTr").a)({
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
    var i = n("on57"),
      l = n("HOLv"),
      o = n("z7xo"),
      d = n("WcS9"),
      c = n("fUey")
    let u = { [c.Lw.GitHub]: o.A, [c.Lw.GitLab]: d.A }
    function m(e) {
      let t,
        n,
        o = (0, s.c)(10),
        { connectorId: d, compact: m, className: p } = e,
        f = void 0 !== m && m,
        v = (0, c.Pt)(d)
      if (f && v === c.Lw.GitHub) {
        let e, t
        return (
          o[0] !== p ? ((e = (0, i.A)("shrink-0", p)), (o[0] = p), (o[1] = e)) : (e = o[1]),
          o[2] !== e
            ? ((t = (0, r.jsx)(l.I, { asset: a, alignment: "composite", className: e })), (o[2] = e), (o[3] = t))
            : (t = o[3]),
          t
        )
      }
      let h = u[v]
      return (
        o[4] !== p || o[5] !== f
          ? ((t = f ? (0, i.A)("icon-xs shrink-0", p) : p), (o[4] = p), (o[5] = f), (o[6] = t))
          : (t = o[6]),
        o[7] !== h || o[8] !== t
          ? ((n = (0, r.jsx)(h, { className: t })), (o[7] = h), (o[8] = t), (o[9] = n))
          : (n = o[9]),
        n
      )
    }
  },
  BExl(e, t, n) {
    n.d(t, { CloudEnvironmentRepositoryPicker: () => H })
    var r = n("ABep"),
      s = n("QosV"),
      a = n("on57"),
      i = n("i5ac"),
      l = n.n(i),
      o = n("qmMi"),
      d = n("zd8w"),
      c = n("Wf1j"),
      u = n("oyxz"),
      m = n("Rvvc"),
      p = n("Sm6l"),
      f = n("Sezd"),
      v = n("mUDD"),
      h = n("Ot7V"),
      g = n("evwP"),
      x = n("FrrB"),
      b = n("okCa"),
      j = n("RNul"),
      y = n("mYWF"),
      S = n("OWtl"),
      w = n("S5Ho"),
      M = n("LH8k"),
      A = n("GEsy"),
      k = n("VPEh"),
      _ = n("Jd1d"),
      C = n("rLsS"),
      N = n("fUey"),
      P = n("HFi9"),
      I = n.n(P),
      E = n("bqtn"),
      z = n("bVeK"),
      T = n("X3K1"),
      L = n("KZOJ")
    function D(e) {
      let t,
        n,
        i,
        l,
        d,
        f,
        v,
        g,
        x,
        b,
        j,
        y,
        M,
        A,
        k,
        _ = (0, s.c)(61),
        {
          connector: P,
          connectors: D,
          disabled: V,
          headerAlignment: H,
          configureInAccountMenu: U,
          browsing: B,
          connectorsPending: q,
          getConfigureHref: W,
          onChange: F,
        } = e,
        K = (0, o.gh)(S.u),
        Z = (0, c.A)(),
        Q = P?.id ?? m.qD,
        G = P?.linkId,
        Y = (0, N.Pt)(Q),
        J = "github" === N.Gq[Y].accountHandleSource && null == G
      _[0] !== P ? ((t = (0, C.jh)(P)), (_[0] = P), (_[1] = t)) : (t = _[1])
      let X = "connected" === t.status
      _[2] !== Q || _[3] !== G ? ((n = { connectorId: Q, linkId: G }), (_[2] = Q), (_[3] = G), (_[4] = n)) : (n = _[4])
      let ee = J && !V && X
      _[5] !== ee ? ((i = { enabled: ee }), (_[5] = ee), (_[6] = i)) : (i = _[6])
      let { data: et, isError: en, isPending: er } = (0, o._U)(w.cd, n, i)
      _[7] !== P?.link?.owner_profile?.nickname || _[8] !== et || _[9] !== J
        ? ((l = J ? et : P?.link?.owner_profile?.nickname?.trim()),
          (_[7] = P?.link?.owner_profile?.nickname),
          (_[8] = et),
          (_[9] = J),
          (_[10] = l))
        : (l = _[10])
      let es = l,
        ea = B && (!J || !en) && !!es,
        ei = q || (B && J && er)
      _[11] !== B || _[12] !== Q || _[13] !== D || _[14] !== V || _[15] !== W || _[16] !== Z || _[17] !== K
        ? ((d = Object.entries(I()(D, $))),
          (f = D.length > 1 || B),
          (v = B
            ? d.map((e) => {
                let [t, n] = e,
                  s =
                    n.find((e) => {
                      let { id: t } = e
                      return t === Q
                    }) ?? n[0]
                if (null == s) return null
                let a = W(s.id)
                return (0, r.jsx)(
                  E.ms.Item,
                  {
                    disabled: V,
                    href: a,
                    leftIcon: (0, r.jsx)(L.R, { connectorId: s.id, compact: !0 }),
                    "aria-label": Z.formatMessage(
                      {
                        id: "environmentSetup.repositoryPicker.connection.manageProviderConnections",
                        defaultMessage: "Manage {provider} connections",
                      },
                      { provider: t },
                    ),
                    onClick: (e) => {
                      ;((0, h.PQ)({
                        event: e,
                        href: a,
                        initiator: "open_in_browser_bridge",
                        openTarget: "external-browser",
                      }),
                        (0, C.pI)(K, "none"))
                    },
                    children:
                      d.length > 1
                        ? t
                        : (0, r.jsx)(u.A, {
                            id: "environmentSetup.repositoryPicker.connection.manageProviderConnections",
                            defaultMessage: "Manage {provider} connections",
                            values: { provider: t },
                          }),
                  },
                  t,
                )
              })
            : null),
          (_[11] = B),
          (_[12] = Q),
          (_[13] = D),
          (_[14] = V),
          (_[15] = W),
          (_[16] = Z),
          (_[17] = K),
          (_[18] = d),
          (_[19] = f),
          (_[20] = v))
        : ((d = _[18]), (f = _[19]), (v = _[20]))
      let el = v
      _[21] !== Q ? ((g = (0, r.jsx)(L.R, { connectorId: Q, compact: !0 })), (_[21] = Q), (_[22] = g)) : (g = _[22])
      let eo = ea ? "group" : void 0,
        ed = ea
          ? Z.formatMessage(
              {
                id: "restricted.environmentSetup.repositoryPicker.connection.browsingAs.provider",
                defaultMessage: "Browsing {provider} as @{handle}",
              },
              { provider: Y, handle: es },
            )
          : void 0
      ;(_[23] !== es || _[24] !== ei || _[25] !== P?.accountLabel || _[26] !== Y || _[27] !== ea
        ? ((x =
            !ea && ei
              ? (0, r.jsx)(T.X, { as: "span", className: "w-64 max-w-full", size: "sm" })
              : (0, r.jsx)("span", { className: "truncate", children: ea ? es : (P?.accountLabel ?? Y) })),
          (_[23] = es),
          (_[24] = ei),
          (_[25] = P?.accountLabel),
          (_[26] = Y),
          (_[27] = ea),
          (_[28] = x))
        : (x = _[28]),
        _[29] !== eo || _[30] !== ed || _[31] !== x
          ? ((b = (0, r.jsx)("span", {
              id: "cloud-environment-repo-account",
              className: "flex h-5 min-w-0 items-center",
              role: eo,
              "aria-label": ed,
              children: x,
            })),
            (_[29] = eo),
            (_[30] = ed),
            (_[31] = x),
            (_[32] = b))
          : (b = _[32]),
        _[33] !== f ? ((j = f ? (0, r.jsx)(z.Aq_, {}) : null), (_[33] = f), (_[34] = j)) : (j = _[34]),
        _[35] !== b || _[36] !== j || _[37] !== g
          ? ((y = (0, r.jsxs)(r.Fragment, { children: [g, b, j] })), (_[35] = b), (_[36] = j), (_[37] = g), (_[38] = y))
          : (y = _[38]))
      let ec = y,
        eu = "start" === H ? "justify-start" : "justify-center"
      return (
        _[39] !== eu
          ? ((M = (0, a.A)("flex min-h-7 max-w-full min-w-0 items-center gap-2 text-sm text-secondary", eu)),
            (_[39] = eu),
            (_[40] = M))
          : (M = _[40]),
        _[41] !== B ||
        _[42] !== U ||
        _[43] !== ec ||
        _[44] !== P?.accountLabel ||
        _[45] !== Q ||
        _[46] !== D ||
        _[47] !== V ||
        _[48] !== H ||
        _[49] !== Z ||
        _[50] !== G ||
        _[51] !== el ||
        _[52] !== F ||
        _[53] !== Y ||
        _[54] !== d ||
        _[55] !== ea ||
        _[56] !== f
          ? ((A = f
              ? (0, r.jsxs)(E.Ab, {
                  align: "end",
                  contentMaxHeight: "list",
                  contentWidth: "menu",
                  disabled: V,
                  triggerButton: (0, r.jsx)(p.$, {
                    className: (0, a.A)("max-w-full", "start" === H && !U && "-ms-2"),
                    allowShrink: !0,
                    "aria-describedby": ea ? "cloud-environment-repo-account" : void 0,
                    "aria-label": Z.formatMessage(
                      {
                        id: "restricted.environmentSetup.repositoryPicker.connection.selectionLabel.provider",
                        defaultMessage: "{provider} connection: {connection}",
                      },
                      { provider: Y, connection: P?.accountLabel ?? "" },
                    ),
                    color: "ghostSecondary",
                    disabled: V,
                    size: "settingsAction",
                    radius: "full",
                    children: ec,
                  }),
                  children: [
                    (0, r.jsxs)(E.ms.Group, {
                      children: [
                        (0, r.jsx)(E.ms.SectionLabel, {
                          children: (0, r.jsx)(u.A, {
                            id: "environmentSetup.repositoryPicker.connection.selectConnection",
                            defaultMessage: "Select connection",
                          }),
                        }),
                        D.map((e) =>
                          (0, r.jsx)(
                            E.ms.Item,
                            {
                              leftIcon: (0, r.jsx)(L.R, { connectorId: e.id, compact: !0 }),
                              RightIcon: e.id === Q && e.linkId === G ? z.ALZ : void 0,
                              onSelect: () => F(e),
                              children:
                                e.accountLabel !== e.name
                                  ? (0, r.jsx)("span", {
                                      className: "flex min-w-0 items-center gap-2",
                                      children: (0, r.jsx)(u.A, {
                                        id: "environmentSetup.repositoryPicker.connection.accountAndProvider",
                                        defaultMessage:
                                          "<account>{accountName}</account> <provider>{providerName}</provider>",
                                        values: {
                                          accountName: e.accountLabel,
                                          providerName: e.name,
                                          account: R,
                                          provider: O,
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
                    B
                      ? (0, r.jsx)(E.ms.Group, {
                          children:
                            d.length > 1
                              ? (0, r.jsx)(E.ms.SubmenuItem, {
                                  trigger: (0, r.jsx)(E.ms.Item, {
                                    disabled: V,
                                    children: (0, r.jsx)(u.A, {
                                      id: "environmentSetup.repositoryPicker.connection.manageConnections",
                                      defaultMessage: "Manage connections",
                                    }),
                                  }),
                                  children: el,
                                })
                              : el,
                        })
                      : null,
                  ],
                })
              : (0, r.jsx)("div", {
                  className: (0, a.A)(
                    "flex min-w-0 items-center gap-1 text-base text-secondary",
                    "start" === H && "-ms-1",
                  ),
                  children: ec,
                })),
            (_[41] = B),
            (_[42] = U),
            (_[43] = ec),
            (_[44] = P?.accountLabel),
            (_[45] = Q),
            (_[46] = D),
            (_[47] = V),
            (_[48] = H),
            (_[49] = Z),
            (_[50] = G),
            (_[51] = el),
            (_[52] = F),
            (_[53] = Y),
            (_[54] = d),
            (_[55] = ea),
            (_[56] = f),
            (_[57] = A))
          : (A = _[57]),
        _[58] !== M || _[59] !== A
          ? ((k = (0, r.jsx)("div", { className: M, children: A })), (_[58] = M), (_[59] = A), (_[60] = k))
          : (k = _[60]),
        k
      )
    }
    function O(e) {
      return (0, r.jsx)("span", { className: "truncate text-tertiary", children: e }, "provider")
    }
    function R(e) {
      return (0, r.jsx)("span", { className: "truncate", children: e }, "account")
    }
    function $(e) {
      let { id: t } = e
      return (0, N.Pt)(t)
    }
    function V(e) {
      let t,
        n,
        a,
        i,
        f,
        v,
        g,
        x,
        b,
        j,
        y,
        M,
        A,
        k,
        _,
        N,
        P,
        I,
        T,
        L,
        D,
        O = (0, s.c)(76),
        { connectorId: R, disabled: $, installation: V, linkId: H, onChange: U } = e,
        B = (0, o.gh)(S.u),
        q = (0, c.A)(),
        [W, F] = (0, d.useState)(!1)
      O[0] !== R || O[1] !== H ? ((t = { connectorId: R, linkId: H }), (O[0] = R), (O[1] = H), (O[2] = t)) : (t = O[2])
      let K = !$
      O[3] !== K ? ((n = { enabled: K }), (O[3] = K), (O[4] = n)) : (n = O[4])
      let { data: Z, isError: Q, isPending: G, refetch: Y } = (0, o._U)(w.ky, t, n)
      if (
        O[5] !== R ||
        O[6] !== Z?.app_installation_url ||
        O[7] !== Z?.memberships ||
        O[8] !== Z?.other ||
        O[9] !== $ ||
        O[10] !== V ||
        O[11] !== q ||
        O[12] !== U ||
        O[13] !== W
      ) {
        let e, t, n, s, o, d, c, h
        ;(O[25] !== Z?.memberships ? ((e = Z?.memberships ?? []), (O[25] = Z?.memberships), (O[26] = e)) : (e = O[26]),
          O[27] !== Z?.other ? ((t = Z?.other ?? []), (O[27] = Z?.other), (O[28] = t)) : (t = O[28]))
        let S = l()([...e, ...t], "id")
        ;((i = Z?.app_installation_url ?? (R === m.qD ? m.rh : null)),
          O[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, r.jsx)(u.A, {
                id: "restricted.environmentSetup.repositoryPicker.organization.all",
                defaultMessage: "All",
              })),
              (O[29] = n))
            : (n = O[29]))
        let w = n
        ;((a = E.Ab),
          (x = "end"),
          (b = "list"),
          (j = "menu"),
          (y = $),
          (M = W),
          (A = F),
          O[30] !== V || O[31] !== q
            ? ((s =
                null == V
                  ? q.formatMessage({
                      id: "restricted.environmentSetup.repositoryPicker.organization.allSelectionLabel",
                      defaultMessage: "GitHub account: All repositories",
                    })
                  : q.formatMessage(
                      {
                        id: "restricted.environmentSetup.repositoryPicker.organization.selectedAccountLabel",
                        defaultMessage: "GitHub account: {account}",
                      },
                      { account: V.account_login },
                    )),
              (O[30] = V),
              (O[31] = q),
              (O[32] = s))
            : (s = O[32]))
        let k = V?.account_login ?? w
        ;(O[33] !== k
          ? ((o = (0, r.jsx)("span", { className: "truncate", children: k })), (O[33] = k), (O[34] = o))
          : (o = O[34]),
          O[35] === Symbol.for("react.memo_cache_sentinel") ? ((d = (0, r.jsx)(z.Aq_, {})), (O[35] = d)) : (d = O[35]),
          O[36] !== $ || O[37] !== s || O[38] !== o
            ? ((f = (0, r.jsxs)(p.$, {
                className: "max-w-full",
                allowShrink: !0,
                "aria-label": s,
                color: "ghostSecondary",
                disabled: $,
                size: "settingsAction",
                radius: "full",
                children: [o, d],
              })),
              (O[36] = $),
              (O[37] = s),
              (O[38] = o),
              (O[39] = f))
            : (f = O[39]))
        let _ = null == V ? z.ALZ : void 0
        ;(O[40] !== U ? ((c = () => U(null)), (O[40] = U), (O[41] = c)) : (c = O[41]),
          O[42] !== _ || O[43] !== c
            ? ((v = (0, r.jsx)(E.ms.Item, { RightIcon: _, onSelect: c, children: w })),
              (O[42] = _),
              (O[43] = c),
              (O[44] = v))
            : (v = O[44]),
          O[45] !== V?.id || O[46] !== U
            ? ((h = (e) =>
                (0, r.jsx)(
                  E.ms.Item,
                  { RightIcon: e.id === V?.id ? z.ALZ : void 0, onSelect: () => U(e), children: e.account_login },
                  e.id,
                )),
              (O[45] = V?.id),
              (O[46] = U),
              (O[47] = h))
            : (h = O[47]),
          (g = S.map(h)),
          (O[5] = R),
          (O[6] = Z?.app_installation_url),
          (O[7] = Z?.memberships),
          (O[8] = Z?.other),
          (O[9] = $),
          (O[10] = V),
          (O[11] = q),
          (O[12] = U),
          (O[13] = W),
          (O[14] = a),
          (O[15] = i),
          (O[16] = f),
          (O[17] = v),
          (O[18] = g),
          (O[19] = x),
          (O[20] = b),
          (O[21] = j),
          (O[22] = y),
          (O[23] = M),
          (O[24] = A))
      } else
        ((a = O[14]),
          (i = O[15]),
          (f = O[16]),
          (v = O[17]),
          (g = O[18]),
          (x = O[19]),
          (b = O[20]),
          (j = O[21]),
          (y = O[22]),
          (M = O[23]),
          (A = O[24]))
      ;(O[48] !== G
        ? ((k = G
            ? (0, r.jsx)(E.ms.Message, {
                compact: !0,
                children: (0, r.jsx)(u.A, {
                  id: "restricted.environmentSetup.repositoryPicker.organization.loading",
                  defaultMessage: "Loading organizations\u2026",
                }),
              })
            : null),
          (O[48] = G),
          (O[49] = k))
        : (k = O[49]),
        O[50] !== Q || O[51] !== Y
          ? ((_ = Q
              ? (0, r.jsx)(E.ms.Item, {
                  onSelect: () => void Y(),
                  children: (0, r.jsx)(u.A, {
                    id: "restricted.environmentSetup.repositoryPicker.organization.retry",
                    defaultMessage: "Retry loading organizations",
                  }),
                })
              : null),
            (O[50] = Q),
            (O[51] = Y),
            (O[52] = _))
          : (_ = O[52]),
        O[53] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, r.jsx)(E.ms.Separator, {})), (O[53] = N))
          : (N = O[53]),
        O[54] === Symbol.for("react.memo_cache_sentinel") ? ((P = (0, r.jsx)(z.xFs, {})), (O[54] = P)) : (P = O[54]))
      let J = null == i
      return (
        O[55] !== i || O[56] !== B
          ? ((I = (e) => {
              null != i &&
                (F(!1),
                (0, h.PQ)({ event: e, href: i, initiator: "open_in_browser_bridge", openTarget: "external-browser" }),
                (0, C.pI)(B, "none"))
            }),
            (O[55] = i),
            (O[56] = B),
            (O[57] = I))
          : (I = O[57]),
        O[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, r.jsx)(u.A, {
              id: "restricted.environmentSetup.repositoryPicker.connection.connectOrganization",
              defaultMessage: "Connect GitHub org",
            })),
            (O[58] = T))
          : (T = O[58]),
        O[59] !== J || O[60] !== I
          ? ((L = (0, r.jsx)(E.ms.Item, { leftIcon: P, disabled: J, onClick: I, children: T })),
            (O[59] = J),
            (O[60] = I),
            (O[61] = L))
          : (L = O[61]),
        O[62] !== a ||
        O[63] !== f ||
        O[64] !== v ||
        O[65] !== g ||
        O[66] !== k ||
        O[67] !== _ ||
        O[68] !== L ||
        O[69] !== x ||
        O[70] !== b ||
        O[71] !== j ||
        O[72] !== y ||
        O[73] !== M ||
        O[74] !== A
          ? ((D = (0, r.jsxs)(a, {
              align: x,
              contentMaxHeight: b,
              contentWidth: j,
              disabled: y,
              open: M,
              onOpenChange: A,
              triggerButton: f,
              children: [v, g, k, _, N, L],
            })),
            (O[62] = a),
            (O[63] = f),
            (O[64] = v),
            (O[65] = g),
            (O[66] = k),
            (O[67] = _),
            (O[68] = L),
            (O[69] = x),
            (O[70] = b),
            (O[71] = j),
            (O[72] = y),
            (O[73] = M),
            (O[74] = A),
            (O[75] = D))
          : (D = O[75]),
        D
      )
    }
    function H(e) {
      let t,
        n,
        i,
        P,
        I,
        E,
        z,
        T,
        L,
        O,
        R,
        $,
        H = (0, s.c)(154),
        {
          disabled: W,
          allowedProviders: F,
          selectedRepositoryIds: K,
          header: Z,
          headerAlignment: Q,
          configureInAccountMenu: G,
          onChange: Y,
          preferredConnectorId: J,
          selectionMode: X,
          maxRepositories: ee,
        } = e,
        et = void 0 === Q ? "center" : Q,
        en = void 0 !== G && G,
        er = void 0 === X ? "multiple" : X,
        es = (0, o.gh)(S.u),
        ea = (0, c.A)(),
        ei = null != ee && K.length >= ee,
        [el, eo] = (0, d.useState)(""),
        ed = (0, d.useRef)(null),
        [ec, eu] = (0, d.useState)(),
        [em, ep] = (0, d.useState)(null),
        [ef, ev] = (0, d.useState)(null)
      H[0] !== el ? ((t = el.trim()), (H[0] = el), (H[1] = t)) : (t = H[1])
      let eh = t,
        eg = (0, A.o)(eh, 200),
        ex = eg !== eh,
        eb = "" !== eh || ex
      H[2] !== F ? ((n = { surface: "picker", allowedProviders: F }), (H[2] = F), (H[3] = n)) : (n = H[3])
      let { data: ej, hasDiscoveryError: ey, isError: eS, isPending: ew, refetch: eM } = (0, o._U)(k.G, n)
      H[4] !== ej || H[5] !== J || H[6] !== em
        ? ((i =
            ej?.find((e) => {
              let { id: t, linkId: n } = e
              return t === em?.connectorId && (null == em.linkId || n === em.linkId)
            }) ??
            ej?.find((e) => e.id === J && "connected" === (0, C.jh)(e).status) ??
            ej?.find(q) ??
            ej?.find(B) ??
            ej?.[0]),
          (H[4] = ej),
          (H[5] = J),
          (H[6] = em),
          (H[7] = i))
        : (i = H[7])
      let eA = i,
        ek = eA?.id ?? m.qD
      H[8] !== ek ? ((P = (0, N.Pt)(ek)), (H[8] = ek), (H[9] = P)) : (P = H[9])
      let e_ = P,
        { missingLinkError: eC, repositoryBrowseMode: eN } = N.Gq[e_],
        eP = "github-installations" === eN,
        eI = eA?.linkId
      H[10] !== eA ? ((I = (0, C.jh)(eA)), (H[10] = eA), (H[11] = I)) : (I = H[11])
      let { status: eE, reconnect: ez } = I
      H[12] !== ek || H[13] !== ej || H[14] !== eI
        ? ((E = ej?.some((e) => e.id === ek && null != e.linkId && e.linkId !== eI)),
          (H[12] = ek),
          (H[13] = ej),
          (H[14] = eI),
          (H[15] = E))
        : (E = H[15])
      let eT = E,
        eL = (eS && !ej?.length) || "error" === eE,
        eD = "connected" === eE
      H[16] !== ek || H[17] !== eI
        ? ((z = { connectorId: ek, linkId: eI, poll: !0 }), (H[16] = ek), (H[17] = eI), (H[18] = z))
        : (z = H[18])
      let eO = eP && !W && eD
      H[19] !== eO ? ((T = { enabled: eO }), (H[19] = eO), (H[20] = T)) : (T = H[20])
      let { data: eR } = (0, o._U)(w.ky, z, T)
      ;(H[21] !== ek || H[22] !== eR || H[23] !== eI || H[24] !== ef
        ? ((L = ef?.installation ?? null),
          null != ef &&
            (ef.connectorId !== ek || ef.linkId !== eI
              ? (L = null)
              : null != eR &&
                (L =
                  [...eR.memberships, ...eR.other].find((e) => {
                    let { id: t } = e
                    return t === ef.installation.id
                  }) ?? null),
            null == L && ev(null)),
          (H[21] = ek),
          (H[22] = eR),
          (H[23] = eI),
          (H[24] = ef),
          (H[25] = L))
        : (L = H[25]),
        H[26] !== ek || H[27] !== eg || H[28] !== L || H[29] !== eI
          ? ((O = { connectorId: ek, linkId: eI, installation: L, query: eg, poll: !0 }),
            (H[26] = ek),
            (H[27] = eg),
            (H[28] = L),
            (H[29] = eI),
            (H[30] = O))
          : (O = H[30]))
      let e$ = !W && !eL && eD
      H[31] !== e$ ? ((R = { enabled: e$ }), (H[31] = e$), (H[32] = R)) : (R = H[32])
      let {
        data: eV,
        error: eH,
        fetchNextPage: eU,
        hasNextPage: eB,
        isError: eq,
        isFetching: eW,
        isFetchingNextPage: eF,
        isFetchNextPageError: eK,
        isPending: eZ,
        refetch: eQ,
      } = (0, o._U)(w.go, O, R)
      if (
        H[33] !== F ||
        H[34] !== en ||
        H[35] !== eD ||
        H[36] !== eL ||
        H[37] !== eA ||
        H[38] !== ek ||
        H[39] !== ej ||
        H[40] !== eS ||
        H[41] !== ew ||
        H[42] !== eg ||
        H[43] !== W ||
        H[44] !== ey ||
        H[45] !== eU ||
        H[46] !== eT ||
        H[47] !== eB ||
        H[48] !== Z ||
        H[49] !== et ||
        H[50] !== L ||
        H[51] !== eR?.app_installation_url ||
        H[52] !== ea ||
        H[53] !== ex ||
        H[54] !== eb ||
        H[55] !== eI ||
        H[56] !== eC ||
        H[57] !== eK ||
        H[58] !== eF ||
        H[59] !== Y ||
        H[60] !== e_ ||
        H[61] !== el ||
        H[62] !== ez ||
        H[63] !== eM ||
        H[64] !== eQ ||
        H[65] !== eH ||
        H[66] !== eq ||
        H[67] !== eW ||
        H[68] !== eZ ||
        H[69] !== eV ||
        H[70] !== es ||
        H[71] !== ec ||
        H[72] !== K ||
        H[73] !== ei ||
        H[74] !== er ||
        H[75] !== eE ||
        H[76] !== eP
      ) {
        let e,
          t,
          n,
          s,
          i,
          o,
          d,
          c,
          S,
          w,
          A,
          k,
          P,
          I,
          E,
          z = null == eV ? void 0 : l()(eV.pages.flatMap(U), "id"),
          T = eb || eZ ? ec : void 0
        H[78] !== F || H[79] !== eA || H[80] !== eS || H[81] !== ew || H[82] !== W || H[83] !== eM
          ? ((e =
              null == eA && F && !F.includes(N.Lw.GitHub)
                ? (0, r.jsxs)(g.W, {
                    layout: "settings-row",
                    children: [
                      ew && (0, r.jsx)(j.y, {}),
                      !ew &&
                        eS &&
                        (0, r.jsx)(p.$, {
                          color: "accent",
                          disabled: W,
                          onClick: () => void eM(),
                          size: "dialog",
                          children: (0, r.jsx)(u.A, {
                            id: "restricted.environmentSetup.repositoryPicker.retryConnection",
                            defaultMessage: "Try again",
                          }),
                        }),
                      !ew &&
                        !eS &&
                        (0, r.jsx)(u.A, {
                          id: "environmentSetup.repositoryPicker.noAvailableConnections",
                          defaultMessage: "No repository connections available",
                        }),
                    ],
                  })
                : null),
            (H[78] = F),
            (H[79] = eA),
            (H[80] = eS),
            (H[81] = ew),
            (H[82] = W),
            (H[83] = eM),
            (H[84] = e))
          : (e = H[84])
        let O = e
        H[85] !== eC || H[86] !== eH
          ? ((t = eH instanceof Error && (0, M.d)(eH)?.type === eC), (H[85] = eC), (H[86] = eH), (H[87] = t))
          : (t = H[87])
        let R = t,
          B = eD && !R && !eL
        H[88] !== ek
          ? ((n = (0, y.Y2)({ appId: ek, installUrl: null, remotePluginId: null })), (H[88] = ek), (H[89] = n))
          : (n = H[89])
        let q = n
        H[90] !== q || H[91] !== es
          ? ((s = (e) => {
              ;((0, h.PQ)({ event: e, href: q, initiator: "open_in_browser_bridge", openTarget: "external-browser" }),
                (0, C.pI)(es, "none"))
            }),
            (H[90] = q),
            (H[91] = es),
            (H[92] = s))
          : (s = H[92])
        let Q = s
        ;(H[93] !== e_
          ? ((i = (0, r.jsx)(u.A, {
              id: "restricted.environmentSetup.repositoryPicker.openSettings.provider",
              defaultMessage: "Open {provider} settings",
              values: { provider: e_ },
            })),
            (H[93] = e_),
            (H[94] = i))
          : (i = H[94]),
          H[95] !== W || H[96] !== Q || H[97] !== i
            ? ((o = (0, r.jsx)(p.$, { color: "accent", disabled: W, onClick: Q, size: "dialog", children: i })),
              (H[95] = W),
              (H[96] = Q),
              (H[97] = i),
              (H[98] = o))
            : (o = H[98]))
        let G = o,
          J = null,
          X = eL ? "error" : eE
        H[99] !== eD ||
        H[100] !== eL ||
        H[101] !== ek ||
        H[102] !== G ||
        H[103] !== ew ||
        H[104] !== W ||
        H[105] !== X ||
        H[106] !== eT ||
        H[107] !== eI ||
        H[108] !== R ||
        H[109] !== e_ ||
        H[110] !== ez ||
        H[111] !== eM ||
        H[112] !== eE
          ? ((c =
              eL || "disabled" === eE || (!ew && (!eD || R))
                ? (0, r.jsx)(_.P, {
                    connectorId: ek,
                    connectionMessage:
                      ez || R
                        ? (0, r.jsx)(u.A, {
                            id: "restricted.environmentSetup.repositoryPicker.reconnect.provider",
                            defaultMessage: "Reconnect {provider} to load your repositories",
                            values: { provider: e_ },
                          })
                        : (0, r.jsx)(u.A, {
                            id: "restricted.environmentSetup.repositoryPicker.connect.provider",
                            defaultMessage: "Connect {provider} to see your repositories",
                            values: { provider: e_ },
                          }),
                    connectionAction: null != eI && eT && (ez || R) ? G : void 0,
                    disabled: W,
                    reconnect: ez || R,
                    status: "connected" === X ? "connect" : X,
                    onRetry: () => void eM(),
                  })
                : null),
            (H[99] = eD),
            (H[100] = eL),
            (H[101] = ek),
            (H[102] = G),
            (H[103] = ew),
            (H[104] = W),
            (H[105] = X),
            (H[106] = eT),
            (H[107] = eI),
            (H[108] = R),
            (H[109] = e_),
            (H[110] = ez),
            (H[111] = eM),
            (H[112] = eE),
            (H[113] = c))
          : (c = H[113])
        let ee = c
        if (!eq || z?.length || eb) {
          if (!ex && null == L && "" === eg && z?.length === 0) {
            let e
            ;(H[121] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(u.A, {
                  id: "restricted.environmentSetup.repositoryPicker.noAccess",
                  defaultMessage: "No repositories are available to this connection",
                })),
                (H[121] = e))
              : (e = H[121]),
              (J = e),
              (d = G))
          }
        } else {
          let e, t, n, s
          ;(H[114] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(u.A, {
                id: "restricted.environmentSetup.repositoryPicker.loadError",
                defaultMessage: "Repositories couldn\u2019t load",
              })),
              (H[114] = e))
            : (e = H[114]),
            (J = e),
            H[115] !== eQ ? ((t = () => void eQ()), (H[115] = eQ), (H[116] = t)) : (t = H[116]),
            H[117] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, r.jsx)(u.A, {
                  id: "restricted.environmentSetup.repositoryPicker.retryRepositories",
                  defaultMessage: "Try again",
                })),
                (H[117] = n))
              : (n = H[117]),
            H[118] !== W || H[119] !== t
              ? ((s = (0, r.jsx)(p.$, { color: "accent", disabled: W, onClick: t, size: "dialog", children: n })),
                (H[118] = W),
                (H[119] = t),
                (H[120] = s))
              : (s = H[120]),
            (d = s))
        }
        H[122] !== ee || H[123] !== d || H[124] !== J
          ? ((S =
              ee ??
              (null != J
                ? (0, r.jsx)(x.A, { className: "flex-1 select-none", title: null, description: J, actions: d })
                : null)),
            (H[122] = ee),
            (H[123] = d),
            (H[124] = J),
            (H[125] = S))
          : (S = H[125])
        let em = S
        H[126] !== ea
          ? ((w = ea.formatMessage({
              id: "restricted.environmentSetup.repositoryPicker.search",
              defaultMessage: "Search repositories",
            })),
            (H[126] = ea),
            (H[127] = w))
          : (w = H[127])
        let ef = w
        H[128] !== ek || H[129] !== L || H[130] !== eR?.app_installation_url
          ? ((A = (e) =>
              (e === ek ? (L?.html_url ?? eR?.app_installation_url) : void 0) ??
              (e === m.qD ? m.rh : (0, y.Y2)({ appId: e, installUrl: null, remotePluginId: null }))),
            (H[128] = ek),
            (H[129] = L),
            (H[130] = eR?.app_installation_url),
            (H[131] = A))
          : (A = H[131])
        let eh = A
        H[132] !== B ||
        H[133] !== en ||
        H[134] !== eA ||
        H[135] !== ek ||
        H[136] !== ej ||
        H[137] !== ew ||
        H[138] !== W ||
        H[139] !== eh ||
        H[140] !== et ||
        H[141] !== eI ||
        H[142] !== O
          ? ((k =
              null == O
                ? (0, r.jsx)(D, {
                    connector: eA,
                    connectors: ej,
                    disabled: W,
                    headerAlignment: et,
                    configureInAccountMenu: en,
                    browsing: B,
                    connectorsPending: ew,
                    getConfigureHref: eh,
                    onChange: (e) => {
                      ;(ep({ connectorId: e.id, linkId: e.linkId }), (e.id !== ek || e.linkId !== eI) && ev(null))
                    },
                  })
                : null),
            (H[132] = B),
            (H[133] = en),
            (H[134] = eA),
            (H[135] = ek),
            (H[136] = ej),
            (H[137] = ew),
            (H[138] = W),
            (H[139] = eh),
            (H[140] = et),
            (H[141] = eI),
            (H[142] = O),
            (H[143] = k))
          : (k = H[143])
        let eN = k,
          eO = (0, a.A)("gap-3 px-3 text-base", en && "multiple" === er ? "py-1.5 leading-5" : "py-1"),
          e$ = "start" === et ? "gap-3" : "gap-4"
        ;(H[144] !== e$ ? ((P = (0, a.A)("flex min-h-0 flex-col", e$)), (H[144] = e$), (H[145] = P)) : (P = H[145]),
          H[146] !== en || H[147] !== eN || H[148] !== Z || H[149] !== et
            ? ((I =
                "start" === et
                  ? (0, r.jsx)(v.c7, {
                      className: "shrink-0 select-none",
                      title: Z,
                      subtitle: en ? void 0 : eN,
                      subtitleTone: "secondary",
                    })
                  : (0, r.jsxs)("div", {
                      className: "flex flex-col items-center gap-2 text-center select-none",
                      children: [Z, !en && eN],
                    })),
              (H[146] = en),
              (H[147] = eN),
              (H[148] = Z),
              (H[149] = et),
              (H[150] = I))
            : (I = H[150]),
          H[151] !== en || H[152] !== eN
            ? ((E =
                en && null != eN
                  ? (0, r.jsxs)("div", {
                      className: "flex min-w-0 items-center justify-between gap-4",
                      children: [
                        (0, r.jsx)("span", {
                          className: "shrink-0 text-base font-medium",
                          children: (0, r.jsx)(u.A, {
                            id: "environmentSetup.repositoryPicker.connectedAsLabel",
                            defaultMessage: "Connected as",
                          }),
                        }),
                        eN,
                      ],
                    })
                  : null),
              (H[151] = en),
              (H[152] = eN),
              (H[153] = E))
            : (E = H[153]),
          ($ = (0, r.jsxs)("div", {
            className: P,
            children: [
              I,
              E,
              O ??
                (0, r.jsxs)("div", {
                  className: "flex min-h-0 flex-1 flex-col gap-2",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex min-w-0 items-center justify-between gap-4",
                      children: [
                        (0, r.jsx)("span", {
                          className: "min-w-0 truncate text-base font-medium select-none",
                          children:
                            "single" === er
                              ? (0, r.jsx)(u.A, {
                                  id: "environmentSetup.repositoryPicker.single.label",
                                  defaultMessage: "Select a repository",
                                })
                              : (0, r.jsx)(u.A, {
                                  id: "restricted.environmentSetup.create.repositories.label",
                                  defaultMessage: "Select repositories",
                                }),
                        }),
                        eP && (B || ew)
                          ? (0, r.jsx)("div", {
                              className: "max-w-1/2 min-w-0",
                              children: (0, r.jsx)(V, {
                                connectorId: ek,
                                disabled: W || ew,
                                installation: L,
                                linkId: eI,
                                onChange: (e) =>
                                  ev(null == e ? null : { connectorId: ek, linkId: eI, installation: e }),
                              }),
                            })
                          : null,
                      ],
                    }),
                    null == ee && (null == J || B)
                      ? (0, r.jsx)(b.s, {
                          id: "cloud-environment-repository-search",
                          className: "min-w-0 shrink-0",
                          autoFocus: !0,
                          variant: "toolbar",
                          label: ef,
                          onSearchQueryChange: (e) => {
                            ;(eb || "" === e.trim() || eu(ed.current?.offsetHeight || void 0), eo(e))
                          },
                          placeholder: ea.formatMessage({
                            id: "restricted.environmentSetup.repositoryPicker.search.placeholder",
                            defaultMessage: "Search",
                          }),
                          searchQuery: el,
                        })
                      : null,
                    ey && !eL
                      ? (0, r.jsx)(p.$, {
                          color: "ghostActive",
                          disabled: W,
                          onClick: () => void eM(),
                          children: (0, r.jsx)(u.A, {
                            id: "environmentSetup.repositoryPicker.connections.retry",
                            defaultMessage: "Retry loading repository connections",
                          }),
                        })
                      : null,
                    em ??
                      (0, r.jsxs)("div", {
                        ref: ed,
                        className: "max-h-64 min-h-0 overflow-y-auto select-none",
                        style: { height: T },
                        children: [
                          ex || eZ
                            ? (0, r.jsxs)("div", {
                                className: (0, a.A)("flex items-center text-secondary", eO),
                                role: "status",
                                children: [
                                  (0, r.jsx)(j.y, { className: "icon-xs", containerClassName: "min-w-4 shrink-0" }),
                                  (0, r.jsx)("span", {
                                    className: "truncate",
                                    children: (0, r.jsx)(u.A, {
                                      id: "restricted.environmentSetup.repositoryPicker.repositories.loading",
                                      defaultMessage: "Loading repositories\u2026",
                                    }),
                                  }),
                                ],
                              })
                            : null,
                          ex || !eq || eK
                            ? null
                            : (0, r.jsx)(p.$, {
                                color: "ghostActive",
                                disabled: W,
                                onClick: () => void eQ(),
                                children: (0, r.jsx)(u.A, {
                                  id: "restricted.environmentSetup.repositoryPicker.repositories.retry",
                                  defaultMessage: "Retry loading repositories",
                                }),
                              }),
                          ex || eq || z?.length !== 0
                            ? null
                            : (0, r.jsx)(g.W, {
                                layout: null == T ? "settings-row" : "default",
                                className: null == T ? void 0 : "h-full",
                                children:
                                  "" !== eg
                                    ? (0, r.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.noMatches",
                                        defaultMessage: "No repositories match \u201C{query}\u201D",
                                        values: { query: eg },
                                      })
                                    : (0, r.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.repositories.empty",
                                        defaultMessage: "No repositories found",
                                      }),
                              }),
                          ex
                            ? null
                            : z?.map((e) => {
                                let t = K.includes(e.id),
                                  n = { linkId: eI, connectorId: (0, N.Ip)(e.id, ek), repository: e },
                                  s = e.repository_full_name.lastIndexOf("/") + 1,
                                  i = (0, r.jsxs)("span", {
                                    className: (0, a.A)("truncate", en && "single" !== er && "-translate-y-px"),
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: "text-secondary",
                                        children: e.repository_full_name.slice(0, s),
                                      }),
                                      e.repository_full_name.slice(s),
                                    ],
                                  })
                                return "single" === er
                                  ? (0, r.jsx)(
                                      p.$,
                                      {
                                        className: (0, a.A)(
                                          "w-full rounded-lg text-start hover:bg-secondary-ghost-hover",
                                          eO,
                                        ),
                                        disabled: W,
                                        unstyled: !0,
                                        onClick: () => Y(n, !0),
                                        type: "button",
                                        children: i,
                                      },
                                      e.id,
                                    )
                                  : (0, r.jsxs)(
                                      "label",
                                      {
                                        className: (0, a.A)("flex cursor-interaction items-center select-none", eO),
                                        htmlFor: `cloud-environment-repository-${e.id}`,
                                        children: [
                                          (0, r.jsx)("span", {
                                            className: "relative flex",
                                            children: (0, r.jsx)(f.S, {
                                              variant: "secondary",
                                              checked: t,
                                              disabled: W || (!t && (ei || !e.default_branch)),
                                              id: `cloud-environment-repository-${e.id}`,
                                              onCheckedChange: (e) => {
                                                Y(n, !0 === e)
                                              },
                                            }),
                                          }),
                                          i,
                                          !e.default_branch &&
                                            (0, r.jsx)("span", {
                                              className: "text-secondary",
                                              children: (0, r.jsx)(u.A, {
                                                id: "environmentSetup.repositoryPicker.noDefaultBranch",
                                                defaultMessage: "No default branch",
                                              }),
                                            }),
                                        ],
                                      },
                                      e.id,
                                    )
                              }),
                          !ex && (eB || eK) && (!eq || eK)
                            ? (0, r.jsx)(g.W, {
                                layout: "settings-row",
                                children: (0, r.jsxs)(p.$, {
                                  color: "secondary",
                                  disabled: W || eW,
                                  loading: eF,
                                  size: "dialog",
                                  onClick: () => void eU(),
                                  children: [
                                    eF &&
                                      (0, r.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.repositories.loadingMore",
                                        defaultMessage: "Loading more\u2026",
                                      }),
                                    !eF &&
                                      eK &&
                                      (0, r.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.repositories.retry",
                                        defaultMessage: "Retry loading repositories",
                                      }),
                                    !eF &&
                                      !eK &&
                                      (0, r.jsx)(u.A, {
                                        id: "restricted.environmentSetup.repositoryPicker.repositories.loadMore",
                                        defaultMessage: "Load more repositories",
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
          (H[33] = F),
          (H[34] = en),
          (H[35] = eD),
          (H[36] = eL),
          (H[37] = eA),
          (H[38] = ek),
          (H[39] = ej),
          (H[40] = eS),
          (H[41] = ew),
          (H[42] = eg),
          (H[43] = W),
          (H[44] = ey),
          (H[45] = eU),
          (H[46] = eT),
          (H[47] = eB),
          (H[48] = Z),
          (H[49] = et),
          (H[50] = L),
          (H[51] = eR?.app_installation_url),
          (H[52] = ea),
          (H[53] = ex),
          (H[54] = eb),
          (H[55] = eI),
          (H[56] = eC),
          (H[57] = eK),
          (H[58] = eF),
          (H[59] = Y),
          (H[60] = e_),
          (H[61] = el),
          (H[62] = ez),
          (H[63] = eM),
          (H[64] = eQ),
          (H[65] = eH),
          (H[66] = eq),
          (H[67] = eW),
          (H[68] = eZ),
          (H[69] = eV),
          (H[70] = es),
          (H[71] = ec),
          (H[72] = K),
          (H[73] = ei),
          (H[74] = er),
          (H[75] = eE),
          (H[76] = eP),
          (H[77] = $))
      } else $ = H[77]
      return $
    }
    function U(e) {
      return e.repositories
    }
    function B(e) {
      let { status: t } = e
      return "DISABLED_BY_ADMIN" !== t
    }
    function q(e) {
      return "connected" === (0, C.jh)(e).status
    }
  },
  NxjN(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("slpy"),
      i = n("zd8w"),
      l = n("Sm6l")
    n.d(
      t,
      {},
      {
        F: function (e) {
          let t,
            n,
            o,
            d,
            c,
            u,
            m,
            p,
            f = (0, s.c)(22)
          f[0] !== e
            ? (({ id: n, tooltipContent: d, size: o, ...t } = e),
              (f[0] = e),
              (f[1] = t),
              (f[2] = n),
              (f[3] = o),
              (f[4] = d))
            : ((t = f[1]), (n = f[2]), (o = f[3]), (d = f[4]))
          let v = void 0 === o ? "compact" : o,
            h = (0, i.useId)(),
            g = n ?? h,
            x = (0, i.useId)(),
            b = t.disabled || t.loading,
            j = b && null != d
          f[5] !== d || f[6] !== x
            ? ((c = null == d ? null : (0, r.jsx)("span", { id: x, children: d })), (f[5] = d), (f[6] = x), (f[7] = c))
            : (c = f[7])
          let y = j || void 0,
            S = j ? g : void 0,
            w = j ? "group" : void 0,
            M = j ? 0 : void 0,
            A = b || null == d ? void 0 : x
          return (
            f[8] !== g || f[9] !== t || f[10] !== v || f[11] !== A
              ? ((u = (0, r.jsx)(l.$, { id: g, "aria-describedby": A, size: v, ...t })),
                (f[8] = g),
                (f[9] = t),
                (f[10] = v),
                (f[11] = A),
                (f[12] = u))
              : (u = f[12]),
            f[13] !== y || f[14] !== S || f[15] !== w || f[16] !== M || f[17] !== u
              ? ((m = (0, r.jsx)("span", {
                  className:
                    "inline-flex max-w-full min-w-0 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                  "aria-disabled": y,
                  "aria-labelledby": S,
                  role: w,
                  tabIndex: M,
                  children: u,
                })),
                (f[13] = y),
                (f[14] = S),
                (f[15] = w),
                (f[16] = M),
                (f[17] = u),
                (f[18] = m))
              : (m = f[18]),
            f[19] !== c || f[20] !== m
              ? ((p = (0, r.jsx)(a.m, { content: c, children: m })), (f[19] = c), (f[20] = m), (f[21] = p))
              : (p = f[21]),
            p
          )
        },
      },
    )
  },
  teEn(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("on57"),
      i = n("zd8w"),
      l = n("Wf1j"),
      o = n("oyxz"),
      d = n("Qgfj"),
      c = n("Sm6l"),
      u = n("JNtf"),
      m = n("mUDD"),
      p = n("bVeK"),
      f = n("AWNZ"),
      v = n("NxjN"),
      h = n("J0Wh"),
      g = n("K489")
    let x = (0, d.YK)({
      editLabel: {
        id: "restricted.environmentSetup.network.domain.edit",
        defaultMessage: "Edit additional allowed domains ({count, plural, one {# domain} other {# domains}})",
      },
      title: {
        id: "restricted.environmentSetup.configuration.network.domains",
        defaultMessage: "Additional allowed domains",
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
            b,
            j,
            y,
            S,
            w,
            M,
            A,
            k,
            _,
            C,
            N,
            P = (0, s.c)(40),
            { disabled: I, disabledTooltip: E, domains: z, onChange: T, issues: L } = e
          P[0] !== L ? ((t = void 0 === L ? [] : L), (P[0] = L), (P[1] = t)) : (t = P[1])
          let D = t,
            O = (0, l.A)(),
            [R, $] = (0, i.useState)(null)
          I && null != R && $(null)
          let V = D.length > 0,
            H = I && "opacity-50"
          ;(P[2] !== H ? ((n = (0, a.A)("select-none", H)), (P[2] = H), (P[3] = n)) : (n = P[3]),
            P[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, r.jsx)("span", {
                  className: "shrink-0 select-none",
                  children: (0, r.jsx)(o.A, { ...x.title }),
                })),
                (P[4] = d))
              : (d = P[4]),
            P[5] !== z[0] || P[6] !== z.length
              ? ((b = (0, r.jsxs)("div", {
                  className: "flex min-w-0 items-center justify-between gap-3",
                  children: [
                    d,
                    (0, r.jsx)("span", {
                      className: "truncate text-secondary",
                      children:
                        z.length > 0
                          ? (0, r.jsx)(o.A, {
                              id: "restricted.environmentSetup.network.domain.summary",
                              defaultMessage:
                                "{count, plural, =1 {{firstDomain}} one {# domain \xb7 {firstDomain}} other {# domains \xb7 {firstDomain}}}",
                              values: { count: z.length, firstDomain: z[0] },
                            })
                          : (0, r.jsx)(o.A, {
                              id: "restricted.environmentSetup.network.domain.empty",
                              defaultMessage: "No additional domains",
                            }),
                    }),
                  ],
                })),
                (P[5] = z[0]),
                (P[6] = z.length),
                (P[7] = b))
              : (b = P[7]),
            P[8] !== z.length || P[9] !== O
              ? ((j = O.formatMessage(x.editLabel, { count: z.length })), (P[8] = z.length), (P[9] = O), (P[10] = j))
              : (j = P[10]))
          let U = I ? E : null
          return (
            P[11] !== z ? ((y = () => $({ domains: [...z], value: "" })), (P[11] = z), (P[12] = y)) : (y = P[12]),
            P[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = (0, r.jsx)(p.Npl, {})), (P[13] = S))
              : (S = P[13]),
            P[14] !== I || P[15] !== y || P[16] !== j || P[17] !== U
              ? ((w = (0, r.jsx)(v.F, {
                  "aria-label": j,
                  color: "ghost",
                  disabled: I,
                  disabledAppearance: "unchanged",
                  tooltipContent: U,
                  size: "icon",
                  onClick: y,
                  children: S,
                })),
                (P[14] = I),
                (P[15] = y),
                (P[16] = j),
                (P[17] = U),
                (P[18] = w))
              : (w = P[18]),
            P[19] !== I || P[20] !== D[0]
              ? ((M = !I && null != D[0] && (0, r.jsx)(g.o, { issue: D[0] })), (P[19] = I), (P[20] = D[0]), (P[21] = M))
              : (M = P[21]),
            P[22] !== w || P[23] !== M
              ? ((A = (0, r.jsxs)(r.Fragment, { children: [w, M] })), (P[22] = w), (P[23] = M), (P[24] = A))
              : (A = P[24]),
            P[25] !== A || P[26] !== n || P[27] !== b
              ? ((k = (0, r.jsx)(f.ic, {
                  className: n,
                  controlSizing: "content",
                  variant: "featured",
                  size: "compact",
                  label: b,
                  control: A,
                })),
                (P[25] = A),
                (P[26] = n),
                (P[27] = b),
                (P[28] = k))
              : (k = P[28]),
            P[29] !== k || P[30] !== V
              ? ((_ = (0, r.jsx)("div", { "data-environment-invalid": V, children: k })),
                (P[29] = k),
                (P[30] = V),
                (P[31] = _))
              : (_ = P[31]),
            P[32] !== I || P[33] !== R || P[34] !== D.length || P[35] !== T
              ? ((C =
                  null == R || I
                    ? null
                    : (0, r.jsx)(u.lG, {
                        open: !0,
                        size: "wide",
                        onOpenChange: (e) => !e && $(null),
                        children: (0, r.jsxs)(m.R4, {
                          as: "form",
                          size: "viewport",
                          onSubmit: (e) => {
                            ;(e.preventDefault(), e.stopPropagation(), R.value.trim() || (T(R.domains), $(null)))
                          },
                          children: [
                            (0, r.jsx)(m.OO, {
                              children: (0, r.jsx)(m.c7, {
                                title: (0, r.jsx)(u.L3, { children: (0, r.jsx)(o.A, { ...x.title }) }),
                              }),
                            }),
                            (0, r.jsx)(m.OO, {
                              children: (0, r.jsx)(h.Y, {
                                disabled: I,
                                domains: R.domains,
                                showErrors: D.length > 0,
                                value: R.value,
                                onChange: (e) => $((t) => (null == t ? null : { ...t, domains: e })),
                                onInputChange: (e) => $((t) => (null == t ? null : { ...t, value: e })),
                              }),
                            }),
                            (0, r.jsx)(m.OO, {
                              children: (0, r.jsxs)(m.Es, {
                                children: [
                                  (0, r.jsx)(c.$, {
                                    color: "secondary",
                                    onClick: () => $(null),
                                    children: (0, r.jsx)(o.A, {
                                      id: "restricted.environmentSetup.configuration.dialog.cancel",
                                      defaultMessage: "Cancel",
                                    }),
                                  }),
                                  (0, r.jsx)(c.$, {
                                    color: "primary",
                                    disabled: !!R.value.trim(),
                                    type: "submit",
                                    children: (0, r.jsx)(o.A, {
                                      id: "restricted.environmentSetup.configuration.dialog.save",
                                      defaultMessage: "Save",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      })),
                (P[32] = I),
                (P[33] = R),
                (P[34] = D.length),
                (P[35] = T),
                (P[36] = C))
              : (C = P[36]),
            P[37] !== _ || P[38] !== C
              ? ((N = (0, r.jsxs)(r.Fragment, { children: [_, C] })), (P[37] = _), (P[38] = C), (P[39] = N))
              : (N = P[39]),
            N
          )
        },
      },
    )
  },
  J0Wh(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("on57"),
      i = n("Wf1j"),
      l = n("oyxz"),
      o = n("Qgfj"),
      d = n("wU6J"),
      c = n("yvV6"),
      u = n("K489")
    let m = (0, o.YK)({
      duplicate: {
        id: "restricted.environmentSetup.network.domain.duplicate",
        defaultMessage: "This domain is already allowed",
      },
      ipv4: {
        id: "restricted.environmentSetup.network.domain.ipv4",
        defaultMessage: "Use a full IPv4 address, such as 192.0.2.1",
      },
      long: {
        id: "restricted.environmentSetup.network.domain.long",
        defaultMessage: "Hosts must be at most 253 characters, with labels at most 63 characters",
      },
      url: {
        id: "restricted.environmentSetup.network.domain.url",
        defaultMessage: "Enter a host without a URL, path, or port",
      },
      invalid: {
        id: "restricted.environmentSetup.network.domain.invalid",
        defaultMessage: "Enter a host such as example.com or *.example.com",
      },
      wildcard: {
        id: "environmentSetup.secret.domain.wildcard",
        defaultMessage: "Wildcards are not supported for secrets; enter an exact host",
      },
    })
    n.d(
      t,
      {},
      {
        Y: function (e) {
          let t,
            n,
            o,
            p,
            f,
            v,
            h,
            g,
            x = (0, s.c)(42),
            {
              disabled: b,
              domains: j,
              value: y,
              onChange: S,
              onInputChange: w,
              showErrors: M,
              purpose: A,
              readOnly: k,
            } = e,
            _ = void 0 !== M && M,
            C = void 0 === A ? "network" : A,
            N = void 0 !== k && k,
            P = (0, i.A)()
          x[0] !== b || x[1] !== j || x[2] !== P || x[3] !== S || x[4] !== C || x[5] !== N || x[6] !== _
            ? ((n = { purpose: C }),
              (t = j.map((e, t) =>
                (0, r.jsx)(
                  c.b,
                  {
                    value: e,
                    removeLabel: P.formatMessage(
                      { id: "restricted.environmentSetup.network.domain.remove", defaultMessage: "Remove {domain}" },
                      { domain: e },
                    ),
                    disabled: b,
                    onRemove: N ? void 0 : () => S(j.filter((e, n) => n !== t)),
                    children:
                      _ && (!e.trim() || null != (0, d.r)(e, "secret" === C ? j.slice(0, t) : [], n))
                        ? (0, r.jsx)(u.o, { issue: { field: `network-${t}`, code: "domains" } })
                        : null,
                  },
                  `${e}-${t}`,
                ),
              )),
              (x[0] = b),
              (x[1] = j),
              (x[2] = P),
              (x[3] = S),
              (x[4] = C),
              (x[5] = N),
              (x[6] = _),
              (x[7] = t),
              (x[8] = n))
            : ((t = x[7]), (n = x[8]))
          let I = t
          if (N) {
            let e,
              t,
              n,
              s = "secret" === C ? "max-h-24" : "h-24"
            return (
              x[9] !== s
                ? ((e = (0, a.A)("flex w-full min-w-0 flex-wrap content-start gap-1 overflow-y-auto", s)),
                  (x[9] = s),
                  (x[10] = e))
                : (e = x[10]),
              x[11] !== I || x[12] !== j.length
                ? ((t =
                    j.length > 0
                      ? I
                      : (0, r.jsx)("p", {
                          className: "text-xs text-secondary select-none",
                          children: (0, r.jsx)(l.A, {
                            id: "restricted.environmentSetup.network.domain.emptyList",
                            defaultMessage: "No domains added yet",
                          }),
                        })),
                  (x[11] = I),
                  (x[12] = j.length),
                  (x[13] = t))
                : (t = x[13]),
              x[14] !== e || x[15] !== t
                ? ((n = (0, r.jsx)("div", { className: e, children: t })), (x[14] = e), (x[15] = t), (x[16] = n))
                : (n = x[16]),
              n
            )
          }
          return (
            x[17] !== n
              ? ((o = (e) => (null == (0, d.r)(e, [], n) ? (0, d.T)(e) : null)), (x[17] = n), (x[18] = o))
              : (o = x[18]),
            x[19] !== j || x[20] !== C || x[21] !== n
              ? ((p = (e) => {
                  let t = (0, d.r)(e, j, n)
                  return "secret" === C && "invalid" === t
                    ? (0, r.jsx)(l.A, {
                        id: "environmentSetup.secret.domain.invalid",
                        defaultMessage: "Enter an exact host, such as api.example.com",
                      })
                    : null == t
                      ? null
                      : (0, r.jsx)(l.A, { ...m[t] })
                }),
                (x[19] = j),
                (x[20] = C),
                (x[21] = n),
                (x[22] = p))
              : (p = x[22]),
            x[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, r.jsx)(l.A, {
                  id: "restricted.environmentSetup.network.domain.addBeforeSave",
                  defaultMessage: "Press Enter to add this domain before saving",
                })),
                (x[23] = f))
              : (f = x[23]),
            x[24] !== P || x[25] !== C
              ? ((v =
                  "secret" === C
                    ? P.formatMessage({
                        id: "environmentSetup.secret.domain.input",
                        defaultMessage: "Allowed secret domains",
                      })
                    : P.formatMessage({
                        id: "restricted.environmentSetup.sidePanel.network.domains",
                        defaultMessage: "Additional allowed domains",
                      })),
                (x[24] = P),
                (x[25] = C),
                (x[26] = v))
              : (v = x[26]),
            x[27] !== P || x[28] !== C
              ? ((h =
                  "secret" === C
                    ? P.formatMessage({
                        id: "environmentSetup.secret.domain.placeholder",
                        defaultMessage: "api.example.com",
                      })
                    : P.formatMessage({
                        id: "restricted.environmentSetup.network.domain.placeholder",
                        defaultMessage: "example.com or *.example.com",
                      })),
                (x[27] = P),
                (x[28] = C),
                (x[29] = h))
              : (h = x[29]),
            x[30] !== b ||
            x[31] !== I ||
            x[32] !== j ||
            x[33] !== S ||
            x[34] !== w ||
            x[35] !== C ||
            x[36] !== o ||
            x[37] !== p ||
            x[38] !== v ||
            x[39] !== h ||
            x[40] !== y
              ? ((g = (0, r.jsx)(c.G, {
                  entries: j,
                  value: y,
                  onChange: S,
                  onInputChange: w,
                  disabled: b,
                  purpose: C,
                  parseEntry: o,
                  errorFor: p,
                  pendingHelp: f,
                  label: v,
                  placeholder: h,
                  children: I,
                })),
                (x[30] = b),
                (x[31] = I),
                (x[32] = j),
                (x[33] = S),
                (x[34] = w),
                (x[35] = C),
                (x[36] = o),
                (x[37] = p),
                (x[38] = v),
                (x[39] = h),
                (x[40] = y),
                (x[41] = g))
              : (g = x[41]),
            g
          )
        },
      },
    )
  },
  BPZJ(e, t, n) {
    n.d(t, { b: () => g })
    var r = n("ABep"),
      s = n("QosV"),
      a = n("zd8w"),
      i = n("v7qY"),
      l = n("oyxz"),
      o = n("Sm6l"),
      d = n("JNtf"),
      c = n("mUDD"),
      u = n("ZRUt"),
      m = n("qoby"),
      p = n("pKvz"),
      f = n("WGE9"),
      v = n("EkMM")
    n("PFi3")
    var h = n("ECQF")
    function g(e) {
      let t,
        n,
        g,
        b,
        j,
        y,
        S,
        w,
        M,
        A,
        k,
        _,
        C,
        N,
        P,
        I,
        E,
        z,
        T,
        L,
        D,
        O,
        R,
        $,
        V,
        H,
        U,
        B,
        q,
        W = (0, s.c)(80),
        {
          hasConflict: F,
          initialSecrets: K,
          requireValues: Z,
          configuration: Q,
          runningThread: G,
          onClose: Y,
          onLocalSave: J,
        } = e,
        X = void 0 === Z || Z,
        ee = void 0 === Q ? null : Q,
        et = void 0 !== G && G
      W[0] !== K
        ? ((t = () => (K.length > 0 ? K : [{ id: 0, name: "", value: "", source: "environment" }])),
          (W[0] = K),
          (W[1] = t))
        : (t = W[1])
      let [en, er] = (0, a.useState)(t),
        [es, ea] = (0, a.useState)(null)
      W[2] !== en ? ((n = Math.max(-1, ...en.map(x))), (W[2] = en), (W[3] = n)) : (n = W[3])
      let ei = (0, a.useRef)(n + 1),
        [el, eo] = (0, a.useState)(!1),
        [ed, ec] = (0, a.useState)(!1)
      if (
        W[4] !== ee ||
        W[5] !== F ||
        W[6] !== el ||
        W[7] !== K ||
        W[8] !== es ||
        W[9] !== Y ||
        W[10] !== J ||
        W[11] !== X ||
        W[12] !== et ||
        W[13] !== en ||
        W[14] !== ed
      ) {
        let e, t, n
        ;(W[30] !== K
          ? ((e = (e) =>
              K.some((t) => {
                let { id: n } = t
                return n === e.id
              }) ||
              e.name.length > 0 ||
              e.value.length > 0 ||
              (e.injectionTarget?.domain?.length ?? 0) > 0 ||
              "user_provided" === e.source),
            (W[30] = K),
            (W[31] = e))
          : (e = W[31]),
          (y = en.filter(e)),
          W[32] !== X || W[33] !== en
            ? ((t = (e) =>
                (0, f.E)(
                  e,
                  en.some((t) => t.id !== e.id && t.name === e.name),
                  X,
                )),
              (W[32] = X),
              (W[33] = en),
              (W[34] = t))
            : (t = W[34]))
        let s = y.flatMap(t)
        W[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, r.jsx)(l.A, {
              id: "restricted.environmentSetup.batchSecrets.title",
              defaultMessage: "Manage secrets",
            })),
            (W[35] = n))
          : (n = W[35])
        let a = n
        ;((j = d.lG),
          (k = !0),
          (_ = "xxwide"),
          W[36] !== Y
            ? ((C = (e) => {
                e || Y()
              }),
              (W[36] = Y),
              (W[37] = C))
            : (C = W[37]),
          (b = c.R4),
          (I = "form"),
          (E = !et),
          (S = "max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] overflow-hidden"),
          (w = (e) => {
            ;(e.preventDefault(),
              e.stopPropagation(),
              (0, i.flushSync)(() => ec(!0)),
              (0, p.yk)(e.currentTarget),
              F || el || 0 !== s.length || (J(y), Y()))
          }),
          W[38] === Symbol.for("react.memo_cache_sentinel")
            ? ((M = (0, r.jsx)(d.L3, { className: "sr-only", children: a })), (W[38] = M))
            : (M = W[38]),
          W[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = (0, r.jsx)(c.OO, { className: "shrink-0", children: (0, r.jsx)(c.c7, { title: a }) })), (W[39] = A))
            : (A = W[39]),
          (g = c.OO),
          (N = "min-h-0 gap-4 overflow-y-auto"),
          (P =
            en.length > 0
              ? (0, r.jsx)("div", {
                  className: "flex flex-col gap-3",
                  children: en.map((e) =>
                    (0, r.jsx)(
                      v.s,
                      {
                        keyInputRef: es?.id === e.id ? es.ref : void 0,
                        configuration: ee,
                        runningThread: et,
                        secret: e,
                        readOnly: e.requested || e.injectionTarget?.type === "http_header",
                        issues: ed
                          ? s.filter((t) => {
                              let { field: n } = t
                              return n?.startsWith(`secret-${e.id}-`)
                            })
                          : [],
                        onChange: (e) => er(en.map((t) => (t.id === e.id ? e : t))),
                        onDelete: () =>
                          er(
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
          (W[4] = ee),
          (W[5] = F),
          (W[6] = el),
          (W[7] = K),
          (W[8] = es),
          (W[9] = Y),
          (W[10] = J),
          (W[11] = X),
          (W[12] = et),
          (W[13] = en),
          (W[14] = ed),
          (W[15] = g),
          (W[16] = b),
          (W[17] = j),
          (W[18] = y),
          (W[19] = S),
          (W[20] = w),
          (W[21] = M),
          (W[22] = A),
          (W[23] = k),
          (W[24] = _),
          (W[25] = C),
          (W[26] = N),
          (W[27] = P),
          (W[28] = I),
          (W[29] = E))
      } else
        ((g = W[15]),
          (b = W[16]),
          (j = W[17]),
          (y = W[18]),
          (S = W[19]),
          (w = W[20]),
          (M = W[21]),
          (A = W[22]),
          (k = W[23]),
          (_ = W[24]),
          (C = W[25]),
          (N = W[26]),
          (P = W[27]),
          (I = W[28]),
          (E = W[29]))
      ;(W[40] !== y
        ? ((z = (e, t) => {
            ei.current = ei.current + 1
            let n = ei.current
            ;(er([
              ...y,
              {
                id: n,
                name: e,
                value: "",
                source: "environment",
                injectionTarget: { type: "environment_variable", name: e },
              },
            ]),
              ea({ id: n, ref: t }))
          }),
          (W[40] = y),
          (W[41] = z))
        : (z = W[41]),
        W[42] !== y
          ? ((T = (e) => {
              let t = (function (e, t) {
                let n = (0, h.d)(
                  t,
                  128,
                  e.filter((t, n) => e.some((e, r) => n !== r && e.name === t.name)).map(({ name: e }) => e),
                  e.map(({ name: e }) => e),
                )
                if (!n.ok) return n
                let { entries: r } = n,
                  s = Math.max(-1, ...e.map(({ id: e }) => e)) + 1,
                  a = e.map((e) => {
                    let t = r.get(e.name)
                    return (r.delete(e.name), void 0 === t ? e : { ...e, value: t })
                  })
                for (let [e, t] of r)
                  a.push({
                    id: s++,
                    name: e,
                    value: t,
                    source: "environment",
                    injectionTarget: { type: "environment_variable", name: e },
                  })
                return { ok: !0, secrets: a }
              })(y, e)
              return (
                t.ok &&
                  (ea(null),
                  er(
                    t.secrets.map((e, t) =>
                      t < y.length ? e : ((ei.current = ei.current + 1), { ...e, id: ei.current }),
                    ),
                  )),
                t
              )
            }),
            (W[42] = y),
            (W[43] = T))
          : (T = W[43]),
        W[44] !== z || W[45] !== T
          ? ((L = (0, r.jsx)(m.Y, { onAddKey: z, onPendingChange: eo, onImport: T })),
            (W[44] = z),
            (W[45] = T),
            (W[46] = L))
          : (L = W[46]),
        W[47] !== F ? ((D = F ? (0, r.jsx)(u.A, {}) : null), (W[47] = F), (W[48] = D)) : (D = W[48]),
        W[49] !== g || W[50] !== L || W[51] !== D || W[52] !== N || W[53] !== P
          ? ((O = (0, r.jsxs)(g, { className: N, children: [P, L, D] })),
            (W[49] = g),
            (W[50] = L),
            (W[51] = D),
            (W[52] = N),
            (W[53] = P),
            (W[54] = O))
          : (O = W[54]),
        W[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = (0, r.jsx)(l.A, { id: "restricted.environmentSetup.batchSecrets.cancel", defaultMessage: "Cancel" })),
            (W[55] = R))
          : (R = W[55]),
        W[56] !== Y
          ? (($ = (0, r.jsx)(o.$, { className: "me-auto", color: "secondary", onClick: Y, children: R })),
            (W[56] = Y),
            (W[57] = $))
          : ($ = W[57]))
      let eu = F || el
      return (
        W[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = (0, r.jsx)(l.A, { id: "restricted.environmentSetup.batchSecrets.save", defaultMessage: "Save" })),
            (W[58] = V))
          : (V = W[58]),
        W[59] !== eu
          ? ((H = (0, r.jsx)(o.$, { color: "primary", disabled: eu, type: "submit", children: V })),
            (W[59] = eu),
            (W[60] = H))
          : (H = W[60]),
        W[61] !== $ || W[62] !== H
          ? ((U = (0, r.jsx)(c.OO, { className: "shrink-0", children: (0, r.jsxs)(c.Es, { children: [$, H] }) })),
            (W[61] = $),
            (W[62] = H),
            (W[63] = U))
          : (U = W[63]),
        W[64] !== b ||
        W[65] !== S ||
        W[66] !== w ||
        W[67] !== M ||
        W[68] !== A ||
        W[69] !== O ||
        W[70] !== U ||
        W[71] !== I ||
        W[72] !== E
          ? ((B = (0, r.jsxs)(b, { as: I, noValidate: E, className: S, onSubmit: w, children: [M, A, O, U] })),
            (W[64] = b),
            (W[65] = S),
            (W[66] = w),
            (W[67] = M),
            (W[68] = A),
            (W[69] = O),
            (W[70] = U),
            (W[71] = I),
            (W[72] = E),
            (W[73] = B))
          : (B = W[73]),
        W[74] !== j || W[75] !== k || W[76] !== _ || W[77] !== C || W[78] !== B
          ? ((q = (0, r.jsx)(j, { open: k, size: _, onOpenChange: C, children: B })),
            (W[74] = j),
            (W[75] = k),
            (W[76] = _),
            (W[77] = C),
            (W[78] = B),
            (W[79] = q))
          : (q = W[79]),
        q
      )
    }
    function x(e) {
      let { id: t } = e
      return t
    }
  },
  SbKN(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("slpy"),
      i = n("NhqU"),
      l = n("on57"),
      o = n("Wf1j"),
      d = n("oyxz"),
      c = n("Sm6l"),
      u = n("HOLv"),
      m = n("bVeK"),
      p = n("BSnr"),
      f = n("AWNZ"),
      v = n("ZEx5"),
      h = n("NxjN"),
      g = n("jf0i"),
      x = n("K489")
    function b(e) {
      return (0, r.jsx)(x.o, { issue: e }, e.field)
    }
    function j(e) {
      return e.injectionTarget?.name ?? e.name
    }
    n.d(
      t,
      {},
      {
        m: function (e) {
          let t,
            n,
            x,
            y,
            S,
            w,
            M,
            A,
            k,
            _ = (0, s.c)(29),
            { secrets: C, conflictRows: N, issues: P, isReadOnly: I, readOnlyTooltip: E, showHeading: z, onEdit: T } = e
          _[0] !== P ? ((t = void 0 === P ? [] : P), (_[0] = P), (_[1] = t)) : (t = _[1])
          let L = t,
            D = void 0 === z || z,
            O = (0, o.A)(),
            R = I ? E : null
          return (
            _[2] !== O
              ? ((n = O.formatMessage({
                  id: "environmentSetup.secrets.manageLabel",
                  defaultMessage: "Manage secrets",
                })),
                (_[2] = O),
                (_[3] = n))
              : (n = _[3]),
            _[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (0, r.jsx)(d.A, { id: "environmentSetup.secrets.manage", defaultMessage: "Manage" })), (_[4] = x))
              : (x = _[4]),
            _[5] !== I || _[6] !== T || _[7] !== R || _[8] !== n
              ? ((y = (0, r.jsx)(h.F, {
                  tooltipContent: R,
                  "aria-label": n,
                  color: "secondary",
                  disabled: I,
                  size: "settingsAction",
                  onClick: T,
                  children: x,
                })),
                (_[5] = I),
                (_[6] = T),
                (_[7] = R),
                (_[8] = n),
                (_[9] = y))
              : (y = _[9]),
            _[10] !== O || _[11] !== D
              ? ((S = D
                  ? (0, r.jsxs)("div", {
                      className: "flex items-center gap-1",
                      children: [
                        (0, r.jsx)(d.A, {
                          id: "environmentSetup.networkSecrets.title",
                          defaultMessage: "HTTP secrets",
                        }),
                        (0, r.jsx)(a.m, {
                          content: (0, r.jsx)(d.A, {
                            id: "restricted.environmentSetup.sidePanel.secrets.tooltip",
                            defaultMessage:
                              "Secrets stay outside the environment. Code receives a placeholder that is replaced only in HTTP and HTTPS requests to allowed domains. Saving a secret also allows access to its domains.",
                          }),
                          children: (0, r.jsx)(c.$, {
                            "aria-label": O.formatMessage({
                              id: "restricted.environmentSetup.sidePanel.secrets.tooltip.label",
                              defaultMessage: "About HTTP secrets",
                            }),
                            color: "ghostSecondary",
                            size: "inline",
                            type: "button",
                            children: (0, r.jsx)(u.I, { asset: i.c }),
                          }),
                        }),
                      ],
                    })
                  : null),
                (_[10] = O),
                (_[11] = D),
                (_[12] = S))
              : (S = _[12]),
            _[13] !== y || _[14] !== S
              ? ((w = (0, r.jsx)(p.X.Header, {
                  className: "select-none",
                  actions: y,
                  size: "base",
                  spacing: "compact",
                  title: S,
                })),
                (_[13] = y),
                (_[14] = S),
                (_[15] = w))
              : (w = _[15]),
            _[16] !== N || _[17] !== O || _[18] !== I || _[19] !== L || _[20] !== T || _[21] !== E || _[22] !== C
              ? ((M =
                  0 !== C.length || N?.size
                    ? (0, g.i)(
                        C,
                        j,
                        (e) => {
                          let t = L.filter((t) => {
                              let { field: n } = t
                              return n?.startsWith(`secret-${e.id}-`)
                            }),
                            n =
                              !0 === e.isMissing &&
                              "user_provided" !== e.source &&
                              null == e.serverId &&
                              0 === e.value.length,
                            s = (0, r.jsx)("span", {
                              "aria-hidden": "true",
                              children: (0, r.jsx)(d.A, {
                                id: "environmentSetup.secret.mask",
                                defaultMessage: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                              }),
                            })
                          return (
                            n
                              ? (s = (0, r.jsx)(d.A, {
                                  id: "restricted.environmentSetup.configuration.secret.missing",
                                  defaultMessage: "Missing",
                                }))
                              : "user_provided" === e.source
                                ? (s = (0, r.jsx)(d.A, {
                                    id: "restricted.environmentSetup.configuration.secret.source.userProvided",
                                    defaultMessage: "User-provided",
                                  }))
                                : 0 !== e.value.length ||
                                  null != e.serverId ||
                                  (I && "environment" === e.source) ||
                                  (s = (0, r.jsx)(d.A, {
                                    id: "restricted.environmentSetup.configuration.secret.noValue",
                                    defaultMessage: "No value",
                                  })),
                            (0, r.jsx)(
                              f.ic,
                              {
                                className: "select-none",
                                controlSizing: "content",
                                variant: "featured",
                                size: "compact",
                                control: (e) =>
                                  (0, r.jsxs)(r.Fragment, {
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: (0, l.A)(
                                          "text-base select-none",
                                          n ? "text-danger" : "text-secondary",
                                        ),
                                        children: s,
                                      }),
                                      (0, r.jsx)(h.F, {
                                        tooltipContent: I ? E : null,
                                        "aria-describedby": e["aria-describedby"],
                                        "data-environment-invalid": t.length > 0,
                                        "aria-label": O.formatMessage({
                                          id: "restricted.environmentSetup.configuration.secret.edit",
                                          defaultMessage: "Edit secret",
                                        }),
                                        color: "ghost",
                                        size: "icon",
                                        disabled: I,
                                        onClick: T,
                                        children: (0, r.jsx)(m.Npl, {}),
                                      }),
                                    ],
                                  }),
                                icon: (0, r.jsx)(m.iNn, {}),
                                label: (0, r.jsx)("span", {
                                  className: "block truncate",
                                  children: e.injectionTarget?.name ?? e.name,
                                }),
                                description:
                                  0 === t.length
                                    ? void 0
                                    : (0, r.jsx)("div", { className: "flex flex-col gap-1", children: t.map(b) }),
                              },
                              e.id,
                            )
                          )
                        },
                        N,
                      )
                    : (0, r.jsx)(f.ic, {
                        className: "select-none",
                        controlSizing: "content",
                        variant: "featured",
                        size: "compact",
                        control: null,
                        icon: (0, r.jsx)(m.iNn, { className: "text-secondary" }),
                        label: (0, r.jsx)(d.A, {
                          id: "restricted.environmentSetup.configuration.secret.empty",
                          defaultMessage: "No HTTP secrets added",
                        }),
                      })),
                (_[16] = N),
                (_[17] = O),
                (_[18] = I),
                (_[19] = L),
                (_[20] = T),
                (_[21] = E),
                (_[22] = C),
                (_[23] = M))
              : (M = _[23]),
            _[24] !== M
              ? ((A = (0, r.jsx)(p.X.Content, { children: (0, r.jsx)(v.t, { children: M }) })),
                (_[24] = M),
                (_[25] = A))
              : (A = _[25]),
            _[26] !== A || _[27] !== w
              ? ((k = (0, r.jsxs)("section", {
                  className: "flex flex-col",
                  "data-environment-section": "secrets",
                  children: [w, A],
                })),
                (_[26] = A),
                (_[27] = w),
                (_[28] = k))
              : (k = _[28]),
            k
          )
        },
      },
    )
  },
  SXhj(e, t, n) {
    var r = n("Qgfj")
    let s = (0, r.zR)({ id: "environmentSetup.description.label", defaultMessage: "Description" }),
      a = (0, r.YK)({
        variables: { id: "restricted.environmentSetup.changes.variables", defaultMessage: "Environment variables" },
        tcpAccess: { id: "environmentSetup.changes.tcpAccess", defaultMessage: "TCP access" },
        connections: {
          id: "restricted.environmentSetup.changes.connections",
          defaultMessage: "Outbound identity connections",
        },
        name: { id: "restricted.environmentSetup.changes.name", defaultMessage: "Environment name" },
        scripts: { id: "restricted.environmentSetup.changes.scripts", defaultMessage: "Scripts" },
        network: { id: "restricted.environmentSetup.changes.network", defaultMessage: "Internet access" },
        repositories: { id: "restricted.environmentSetup.changes.repositories", defaultMessage: "Repositories" },
        secrets: { id: "restricted.environmentSetup.changes.secrets", defaultMessage: "Secrets" },
        privacy: { id: "restricted.environmentSetup.changes.privacy", defaultMessage: "Privacy" },
      })
    n.d(t, {}, { S: s, b: a })
  },
  JiLO(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("slpy"),
      i = n("on57")
    n.d(
      t,
      {},
      {
        V: function (e) {
          let t,
            n,
            l,
            o = (0, s.c)(13),
            { children: d, reason: c, label: u, className: m } = e,
            p = c ?? "",
            f = null != c && void 0
          o[0] !== m
            ? ((t = (0, i.A)(
                "inline-flex rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                m,
              )),
              (o[0] = m),
              (o[1] = t))
            : (t = o[1])
          let v = null != c || void 0,
            h = null == c ? void 0 : u,
            g = null == c ? void 0 : "group",
            x = null == c ? void 0 : 0
          return (
            o[2] !== d || o[3] !== t || o[4] !== v || o[5] !== h || o[6] !== g || o[7] !== x
              ? ((n = (0, r.jsx)("div", {
                  className: t,
                  "aria-disabled": v,
                  "aria-label": h,
                  role: g,
                  tabIndex: x,
                  children: d,
                })),
                (o[2] = d),
                (o[3] = t),
                (o[4] = v),
                (o[5] = h),
                (o[6] = g),
                (o[7] = x),
                (o[8] = n))
              : (n = o[8]),
            o[9] !== p || o[10] !== f || o[11] !== n
              ? ((l = (0, r.jsx)(a.m, { content: p, forceOpen: f, children: n })),
                (o[9] = p),
                (o[10] = f),
                (o[11] = n),
                (o[12] = l))
              : (l = o[12]),
            l
          )
        },
      },
    )
  },
  ZRUt(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("oyxz")
    n.d(
      t,
      {},
      {
        A: function () {
          let e,
            t = (0, s.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)("p", {
                  className: "text-sm text-danger select-none",
                  role: "alert",
                  children: (0, r.jsx)(a.A, {
                    id: "restricted.environmentSetup.batchSecrets.conflict",
                    defaultMessage:
                      "This environment changed elsewhere. Close and reopen the editor to load the latest version, then re-enter your edits",
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
    var r = n("ABep"),
      s = n("QosV"),
      a = n("zd8w"),
      i = n("Wf1j"),
      l = n("oyxz"),
      o = n("zLIa")
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
            f,
            v,
            h,
            g,
            x,
            b,
            j,
            y,
            S,
            w = (0, s.c)(44),
            { ref: M, onAddKey: A, onImport: k, onPendingChange: _ } = e,
            C = (0, i.A)(),
            N = (0, a.useId)(),
            [P, I] = (0, a.useState)(""),
            [E, z] = (0, a.useState)(null),
            T = (0, a.useRef)(!1),
            L = (0, a.useRef)(null)
          w[0] !== k || w[1] !== _
            ? ((t = function (e) {
                let t = k(e)
                ;(z(t), I(t.ok ? "" : e), _(!t.ok && e.trim().length > 0))
              }),
              (w[0] = k),
              (w[1] = _),
              (w[2] = t))
            : (t = w[2])
          let D = t
          w[3] !== D || w[4] !== P
            ? ((n = function (e) {
                let t = L.current
                null != t && (D(P.slice(0, t.selectionStart) + e + P.slice(t.selectionEnd)), t.focus())
              }),
              (w[3] = D),
              (w[4] = P),
              (w[5] = n))
            : (n = w[5])
          let O = n
          ;(w[6] !== O ? ((d = () => ({ importText: O })), (w[6] = O), (w[7] = d)) : (d = w[7]),
            (0, a.useImperativeHandle)(M, d),
            w[8] !== A || w[9] !== _
              ? ((c = function (e) {
                  let { value: t, selectionStart: n, selectionEnd: r, selectionDirection: s } = e
                  ;(I(t),
                    z(null),
                    _(t.trim().length > 0),
                    T.current ||
                      !t ||
                      /[=\r\n]/.test(t) ||
                      (A(t, (e) => {
                        ;(e?.focus(), e?.setSelectionRange(n, r, s))
                      }),
                      I(""),
                      _(!1)))
                }),
                (w[8] = A),
                (w[9] = _),
                (w[10] = c))
              : (c = w[10]))
          let R = c
          w[11] !== C
            ? ((u = C.formatMessage({
                id: "environmentSetup.entries.input",
                defaultMessage: "Paste .env or type a key",
              })),
              (w[11] = C),
              (w[12] = u))
            : (u = w[12])
          let $ = E?.ok === !1,
            V = E?.ok === !1 ? N : void 0
          return (
            w[13] !== C
              ? ((m = C.formatMessage({
                  id: "environmentSetup.entries.placeholder",
                  defaultMessage: "Paste your .env or type a key",
                })),
                (w[13] = C),
                (w[14] = m))
              : (m = w[14]),
            w[15] !== R ? ((p = (e) => R(e.currentTarget)), (w[15] = R), (w[16] = p)) : (p = w[16]),
            w[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = () => {
                  T.current = !0
                }),
                (w[17] = f))
              : (f = w[17]),
            w[18] !== R
              ? ((v = (e) => {
                  ;((T.current = !1), R(e.currentTarget))
                }),
                (w[18] = R),
                (w[19] = v))
              : (v = w[19]),
            w[20] !== D || w[21] !== P
              ? ((h = (e) => {
                  "Enter" !== e.key ||
                    e.shiftKey ||
                    e.nativeEvent.isComposing ||
                    (e.preventDefault(), e.stopPropagation(), D(P))
                }),
                (w[20] = D),
                (w[21] = P),
                (w[22] = h))
              : (h = w[22]),
            w[23] !== O
              ? ((g = (e) => {
                  let t = e.clipboardData.getData("text/plain")
                  ;(t.includes("=") || t.includes("\n")) && (e.preventDefault(), O(t))
                }),
                (w[23] = O),
                (w[24] = g))
              : (g = w[24]),
            w[25] !== v ||
            w[26] !== h ||
            w[27] !== g ||
            w[28] !== u ||
            w[29] !== $ ||
            w[30] !== V ||
            w[31] !== m ||
            w[32] !== p ||
            w[33] !== P
              ? ((x = (0, r.jsx)(o.TM, {
                  ref: L,
                  "aria-label": u,
                  "aria-invalid": $,
                  "aria-describedby": V,
                  autoComplete: "off",
                  autoFocus: !0,
                  focusIndicator: "border",
                  spellCheck: !1,
                  placeholder: m,
                  rows: 1,
                  value: P,
                  variant: "compact",
                  onChange: p,
                  onCompositionStart: f,
                  onCompositionEnd: v,
                  onKeyDown: h,
                  onPaste: g,
                })),
                (w[25] = v),
                (w[26] = h),
                (w[27] = g),
                (w[28] = u),
                (w[29] = $),
                (w[30] = V),
                (w[31] = m),
                (w[32] = p),
                (w[33] = P),
                (w[34] = x))
              : (x = w[34]),
            w[35] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = (0, r.jsx)("div", { className: "w-8 shrink-0", "aria-hidden": !0 })), (w[35] = b))
              : (b = w[35]),
            w[36] !== x
              ? ((j = (0, r.jsxs)("div", { className: "flex gap-2", children: [x, b] })), (w[36] = x), (w[37] = j))
              : (j = w[37]),
            w[38] !== E || w[39] !== N
              ? ((y =
                  E?.ok === !1
                    ? (0, r.jsx)("p", {
                        id: N,
                        className: "text-sm text-danger",
                        role: "alert",
                        children: (0, r.jsx)(l.A, {
                          id: "environmentSetup.entries.invalid",
                          defaultMessage: "Line {line} is invalid or repeats an unavailable key; nothing was imported",
                          values: { line: E.line },
                        }),
                      })
                    : null),
                (w[38] = E),
                (w[39] = N),
                (w[40] = y))
              : (y = w[40]),
            w[41] !== j || w[42] !== y
              ? ((S = (0, r.jsxs)("div", { className: "flex flex-col gap-2", children: [j, y] })),
                (w[41] = j),
                (w[42] = y),
                (w[43] = S))
              : (S = w[43]),
            S
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
        d: function (e, t, n = [], r = []) {
          let s = e.trim(),
            a = /^[A-Za-z_][A-Za-z0-9_]*$/.test(s)
          if (a && (r.includes(s) || n.includes(s))) return { ok: !1, reason: "duplicate", line: 1 }
          let i = (a ? `${s}=` : e).split(/\r?\n/),
            l = new Map()
          for (let e = 0; e < i.length; e++) {
            let r = i[e].trim(),
              s = e + 1
            if ("" === r || r.startsWith("#") || r.startsWith(";")) continue
            let a = /^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=(.*)$/.exec(r)
            if (null == a || a[1].length > t) return { ok: !1, reason: "malformed", line: s }
            let o = a[1]
            if (l.has(o) || n.includes(o)) return { ok: !1, reason: "duplicate", line: s }
            let d = a[2].trim(),
              c = d[0]
            if ('"' === c || "'" === c) {
              let t = 1
              for (; ; t++) {
                if (t >= d.length) {
                  if (++e >= i.length) return { ok: !1, reason: "malformed", line: s }
                  d += `
${i[e]}`
                }
                if ("\\" === d[t] && '"' === c) t++
                else if (d[t] === c) break
              }
              let n = d.slice(t + 1).trim()
              if ("" !== n && !n.startsWith("#")) return { ok: !1, reason: "malformed", line: s }
              d = d.slice(1, t)
            } else d = d.replace(/\s+#.*$/, "").trim()
            l.set(o, d)
          }
          return { ok: !0, entries: l }
        },
      },
    )
  },
  KdHD(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("zd8w"),
      i = n("Wf1j"),
      l = n("Sm6l"),
      o = n("bVeK"),
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
            f,
            v,
            h,
            g,
            x,
            b,
            j,
            y,
            S,
            w,
            M,
            A,
            k,
            _ = (0, s.c)(55),
            {
              keyInputRef: C,
              variable: N,
              keyError: P,
              valueError: I,
              configuration: E,
              disabled: z,
              runningThread: T,
              onChange: L,
              onDelete: D,
            } = e,
            O = void 0 !== T && T,
            R = (0, i.A)(),
            $ = (0, a.useId)(),
            V = (void 0 !== z && z) || (O && null == E),
            H = N.source ?? "environment"
          ;(_[0] !== L || _[1] !== N
            ? ((t = (e) =>
                L({
                  ...N,
                  source: e,
                  optional: "user_provided" === e,
                  value: "",
                  serverId: void 0,
                  origin: void 0,
                  personalSecret: void 0,
                  error: void 0,
                })),
              (_[0] = L),
              (_[1] = N),
              (_[2] = t))
            : (t = _[2]),
            _[3] !== V || _[4] !== H || _[5] !== t || _[6] !== N.name
              ? ((n = (0, r.jsx)(u.w, { attached: !0, disabled: V, name: N.name, source: H, onChange: t })),
                (_[3] = V),
                (_[4] = H),
                (_[5] = t),
                (_[6] = N.name),
                (_[7] = n))
              : (n = _[7]))
          let U = n,
            B = N.name
          ;(_[8] !== R
            ? ((f = R.formatMessage({
                id: "environmentSetup.variables.editor.namePlaceholder",
                defaultMessage: "Key",
              })),
              (_[8] = R),
              (_[9] = f))
            : (f = _[9]),
            _[10] !== R
              ? ((v = R.formatMessage({
                  id: "environmentSetup.variables.editor.nameInput",
                  defaultMessage: "Variable key",
                })),
                (_[10] = R),
                (_[11] = v))
              : (v = _[11]))
          let q = null != P,
            W = null == P ? void 0 : `${$}-key`
          return (
            _[12] !== L || _[13] !== N
              ? ((h = (e) =>
                  L({
                    ...N,
                    name: e.target.value,
                    serverId: "user_provided" === N.source ? void 0 : N.serverId,
                    personalSecret: void 0,
                  })),
                (_[12] = L),
                (_[13] = N),
                (_[14] = h))
              : (h = _[14]),
            _[15] !== C || _[16] !== q || _[17] !== W || _[18] !== h || _[19] !== f || _[20] !== v || _[21] !== N.name
              ? ((g = (0, r.jsx)("div", {
                  className: "min-w-0 flex-1 basis-32",
                  children: (0, r.jsx)(d.pd, {
                    ref: C,
                    variant: "segmented",
                    placeholder: f,
                    "aria-label": v,
                    "aria-invalid": q,
                    "aria-describedby": W,
                    autoComplete: "off",
                    maxLength: 256,
                    value: N.name,
                    onChange: h,
                  }),
                })),
                (_[15] = C),
                (_[16] = q),
                (_[17] = W),
                (_[18] = h),
                (_[19] = f),
                (_[20] = v),
                (_[21] = N.name),
                (_[22] = g))
              : (g = _[22]),
            _[23] !== E ||
            _[24] !== $ ||
            _[25] !== R ||
            _[26] !== L ||
            _[27] !== O ||
            _[28] !== U ||
            _[29] !== I ||
            _[30] !== N
              ? ((x = (0, r.jsx)("div", {
                  className: "min-w-0 flex-2 basis-64",
                  children:
                    "user_provided" === N.source
                      ? (0, r.jsx)(c.u, {
                          id: `${$}-value-input`,
                          scopeControl: U,
                          ariaLabel: R.formatMessage(
                            {
                              id: "restricted.environmentSetup.variables.batch.value",
                              defaultMessage: "Value for {name}",
                            },
                            { name: N.name },
                          ),
                          requireValue: O,
                          saved: null != N.personalSecret || (O && null != N.serverId),
                          configuration: E,
                          namespace: "not_sensitive",
                          name: N.name,
                          value: N.value,
                          invalid: null != I,
                          describedBy: null == I ? void 0 : `${$}-value`,
                          onChange: (e) => L({ ...N, value: e }),
                        })
                      : (0, r.jsx)(p.p, {
                          id: `${$}-value-input`,
                          scopeControl: U,
                          ariaLabel: R.formatMessage(
                            {
                              id: "restricted.environmentSetup.variables.batch.value",
                              defaultMessage: "Value for {name}",
                            },
                            { name: N.name },
                          ),
                          hasSavedValue: null != N.serverId,
                          value: N.value,
                          ariaInvalid: null != I,
                          ariaDescribedBy: null == I ? void 0 : `${$}-value`,
                          onChange: (e) => L({ ...N, value: e }),
                        }),
                })),
                (_[23] = E),
                (_[24] = $),
                (_[25] = R),
                (_[26] = L),
                (_[27] = O),
                (_[28] = U),
                (_[29] = I),
                (_[30] = N),
                (_[31] = x))
              : (x = _[31]),
            _[32] !== g || _[33] !== x
              ? ((b = (0, r.jsxs)("div", {
                  className: "flex min-w-0 flex-1 flex-wrap items-start gap-2",
                  children: [g, x],
                })),
                (_[32] = g),
                (_[33] = x),
                (_[34] = b))
              : (b = _[34]),
            _[35] !== R
              ? ((j = R.formatMessage({
                  id: "restricted.environmentSetup.variables.delete",
                  defaultMessage: "Delete variable",
                })),
                (_[35] = R),
                (_[36] = j))
              : (j = _[36]),
            _[37] === Symbol.for("react.memo_cache_sentinel")
              ? ((y = (0, r.jsx)(o.cSG, {})), (_[37] = y))
              : (y = _[37]),
            _[38] !== D || _[39] !== j
              ? ((S = (0, r.jsx)("div", {
                  className: "flex h-10 w-8 shrink-0 items-center justify-center",
                  children: (0, r.jsx)(l.$, { "aria-label": j, color: "ghost", size: "icon", onClick: D, children: y }),
                })),
                (_[38] = D),
                (_[39] = j),
                (_[40] = S))
              : (S = _[40]),
            _[41] !== b || _[42] !== S
              ? ((w = (0, r.jsxs)("div", { className: "flex min-w-0 items-start gap-2", children: [b, S] })),
                (_[41] = b),
                (_[42] = S),
                (_[43] = w))
              : (w = _[43]),
            _[44] !== $ || _[45] !== P
              ? ((M =
                  null == P
                    ? null
                    : (0, r.jsx)("p", {
                        id: `${$}-key`,
                        className: "text-sm text-danger",
                        role: "alert",
                        children: (0, r.jsx)(m.P, { error: P }),
                      })),
                (_[44] = $),
                (_[45] = P),
                (_[46] = M))
              : (M = _[46]),
            _[47] !== $ || _[48] !== I
              ? ((A =
                  null == I
                    ? null
                    : (0, r.jsx)("p", {
                        id: `${$}-value`,
                        className: "text-sm text-danger",
                        role: "alert",
                        children: (0, r.jsx)(m.P, { error: I }),
                      })),
                (_[47] = $),
                (_[48] = I),
                (_[49] = A))
              : (A = _[49]),
            _[50] !== w || _[51] !== M || _[52] !== A || _[53] !== N.name
              ? ((k = (0, r.jsxs)("div", {
                  className: "flex min-w-0 flex-col gap-2",
                  "aria-label": B,
                  role: "group",
                  children: [w, M, A],
                })),
                (_[50] = w),
                (_[51] = M),
                (_[52] = A),
                (_[53] = N.name),
                (_[54] = k))
              : (k = _[54]),
            k
          )
        },
      },
    )
  },
  vw1I(e, t, n) {
    n.d(t, { W: () => $ })
    var r = n("ABep"),
      s = n("QosV"),
      a = n("on57"),
      i = n("qmMi"),
      l = n("zd8w"),
      o = n("Wf1j"),
      d = n("oyxz"),
      c = n("SPnB"),
      u = n("bVeK"),
      m = n("BSnr"),
      p = n("AWNZ"),
      f = n("ZEx5"),
      v = n("NxjN"),
      h = n("rQvE"),
      g = n("jf0i"),
      x = n("K489"),
      b = n("NySd"),
      j = n("Sm6l"),
      y = n("PD37"),
      S = n("JNtf"),
      w = n("mUDD"),
      M = n("kFKz"),
      A = n("ZRUt"),
      k = n("qoby"),
      _ = n("ECQF"),
      C = n("KdHD"),
      N = n("zft3")
    function P(e) {
      let t,
        n,
        a,
        i,
        o,
        c,
        u,
        m,
        p,
        f,
        v,
        h,
        g,
        x,
        P,
        R,
        $,
        V,
        H,
        U,
        B,
        q,
        W,
        F,
        K,
        Z,
        Q,
        G,
        Y,
        J,
        X = (0, s.c)(86),
        {
          initialVariables: ee,
          unavailableNames: et,
          hasConflict: en,
          configuration: er,
          runningThread: es,
          onClose: ea,
          onSave: ei,
        } = e,
        el = void 0 !== en && en,
        eo = void 0 === er ? null : er,
        ed = void 0 !== es && es
      X[0] !== ee
        ? ((t = () => (ee.length > 0 ? ee.map(O) : [{ id: 0, variable: { name: "", value: "", optional: !1 } }])),
          (X[0] = ee),
          (X[1] = t))
        : (t = X[1])
      let [ec, eu] = (0, l.useState)(t),
        [em, ep] = (0, l.useState)(null),
        [ef, ev] = (0, l.useState)(!1),
        [eh, eg] = (0, l.useState)(!1),
        ex = (0, l.useRef)(null),
        eb = (0, l.useRef)(0),
        ej = (0, l.useRef)(0),
        [ey, eS] = (0, l.useState)(!1),
        [ew, eM] = (0, l.useState)(!1),
        [eA, ek] = (0, l.useState)(null)
      if (X[2] !== ee || X[3] !== ec || X[4] !== et) {
        let e, t
        ;(X[9] !== ee.length
          ? ((e = (e) => {
              let { id: t, variable: n } = e
              return t < ee.length || n.name.length > 0 || n.value.length > 0 || "user_provided" === n.source
            }),
            (X[9] = ee.length),
            (X[10] = e))
          : (e = X[10]),
          (o = (n = ec.filter(e)).map(D)),
          X[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, r.jsx)(d.A, {
                id: "restricted.environmentSetup.variables.batch.title",
                defaultMessage: "Manage environment variables",
              })),
              (X[11] = t))
            : (t = X[11]),
          (i = t),
          (a = new Map(
            n.map((e, t) => {
              let { id: n, variable: r } = e
              return [
                n,
                {
                  key: (0, N.Ow)(r.name, [...et, ...o.filter((e, n) => n !== t).map(L)]),
                  value: ee.includes(r) ? null : (0, N.Ym)(r.value, null != r.serverId, "user_provided" === r.source),
                },
              ]
            }),
          )),
          (X[2] = ee),
          (X[3] = ec),
          (X[4] = et),
          (X[5] = n),
          (X[6] = a),
          (X[7] = i),
          (X[8] = o))
      } else ((n = X[5]), (a = X[6]), (i = X[7]), (o = X[8]))
      let e_ = a
      X[12] !== el
        ? ((c = function (e) {
            ;(0, b.aA)(e.dataTransfer) &&
              (e.preventDefault(),
              e.stopPropagation(),
              (e.dataTransfer.dropEffect = el ? "none" : "copy"),
              "dragenter" === e.type && (eb.current = eb.current + 1),
              eS(!el))
          }),
          (X[12] = el),
          (X[13] = c))
        : (c = X[13])
      let eC = c
      X[14] !== el
        ? ((u = async function (e) {
            if (!(0, b.aA)(e.dataTransfer)) return
            ;(e.preventDefault(), e.stopPropagation(), (eb.current = 0), eS(!1))
            let t = (ej.current = ej.current + 1)
            if ((eM(!1), el)) return
            let n = (0, M.p)(e.dataTransfer)
            if (1 !== n.length || n[0].isDirectory || !/^(?:\.env(?:\..+)?|.+\.env)$/i.test(n[0].file.name))
              return void ek("unsupported")
            let r = e.currentTarget
            ;(ek(null), eM(!0))
            let s = await n[0].file.text().catch(T)
            if (r.isConnected && ej.current === t) {
              if ((eM(!1), null == s)) return void ek("read")
              ex.current?.importText(s)
            }
          }),
          (X[14] = el),
          (X[15] = u))
        : (u = X[15])
      let eN = u
      ;(X[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = (e) => {
            ;(0, b.aA)(e.dataTransfer) &&
              (e.stopPropagation(),
              (eb.current = Math.max(0, eb.current - 1)),
              (0 === eb.current || (e.relatedTarget instanceof Node && !e.currentTarget.contains(e.relatedTarget))) &&
                ((eb.current = 0), eS(!1)))
          }),
          (X[16] = m))
        : (m = X[16]),
        X[17] !== eN ? ((p = (e) => void eN(e)), (X[17] = eN), (X[18] = p)) : (p = X[18]),
        X[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = () => {
              ;((eb.current = 0), eS(!1))
            }),
            (X[19] = f))
          : (f = X[19]),
        X[20] !== eC || X[21] !== p
          ? ((v = { onDragEnter: eC, onDragOver: eC, onDragLeave: m, onDrop: p, onDragEnd: f }),
            (X[20] = eC),
            (X[21] = p),
            (X[22] = v))
          : (v = X[22]),
        X[23] !== ea
          ? ((h = (e) => {
              e || ea()
            }),
            (X[23] = ea),
            (X[24] = h))
          : (h = X[24]))
      let eP = !ed
      ;(X[25] !== e_ || X[26] !== el || X[27] !== ef || X[28] !== ew || X[29] !== ei || X[30] !== o
        ? ((g = (e) => {
            ;(e.preventDefault(), e.stopPropagation(), eg(!0), !el && !ew && !ef && [...e_.values()].every(z) && ei(o))
          }),
          (X[25] = e_),
          (X[26] = el),
          (X[27] = ef),
          (X[28] = ew),
          (X[29] = ei),
          (X[30] = o),
          (X[31] = g))
        : (g = X[31]),
        X[32] !== i
          ? ((x = (0, r.jsx)(S.L3, { className: "sr-only", children: i })), (X[32] = i), (X[33] = x))
          : (x = X[33]),
        X[34] !== i
          ? ((P = (0, r.jsx)(w.OO, { className: "shrink-0", children: (0, r.jsx)(w.c7, { title: i }) })),
            (X[34] = i),
            (X[35] = P))
          : (P = X[35]),
        X[36] !== eo || X[37] !== e_ || X[38] !== em || X[39] !== ec || X[40] !== ed || X[41] !== eh
          ? ((R =
              ec.length > 0
                ? (0, r.jsx)("div", {
                    className: "flex flex-col gap-3",
                    children: ec.map((e) => {
                      let { id: t, variable: n } = e
                      return (0, r.jsx)(
                        C.b,
                        {
                          runningThread: ed,
                          keyInputRef: em?.id === t ? em.ref : void 0,
                          configuration: eo,
                          variable: n,
                          keyError: eh ? (e_.get(t)?.key ?? null) : null,
                          valueError: eh ? (e_.get(t)?.value ?? null) : null,
                          onChange: (e) => eu(ec.map((n) => (n.id === t ? { id: t, variable: e } : n))),
                          onDelete: () => eu(ec.filter((e) => e.id !== t)),
                        },
                        t,
                      )
                    }),
                  })
                : null),
            (X[36] = eo),
            (X[37] = e_),
            (X[38] = em),
            (X[39] = ec),
            (X[40] = ed),
            (X[41] = eh),
            (X[42] = R))
          : (R = X[42]),
        X[43] !== n || X[44] !== ec
          ? (($ = (e, t) => {
              let r = Math.max(-1, ...ec.map(E)) + 1
              ;(eu([...n, { id: r, variable: { name: e, value: "", optional: !1 } }]), ep({ id: r, ref: t }))
            }),
            (X[43] = n),
            (X[44] = ec),
            (X[45] = $))
          : ($ = X[45]),
        X[46] !== n || X[47] !== ec || X[48] !== et || X[49] !== o
          ? ((V = (e) => {
              ek(null)
              let t = (function (e, t, n) {
                let r = (0, _.d)(
                  t,
                  256,
                  [...n, ...e.filter((t, n) => e.some((e, r) => n !== r && e.name === t.name)).map(({ name: e }) => e)],
                  e.map(({ name: e }) => e),
                )
                if (!r.ok) return r
                let { entries: s } = r,
                  a = e.map((e) => {
                    let t = s.get(e.name)
                    return (s.delete(e.name), void 0 === t ? e : { ...e, value: t })
                  })
                for (let [e, t] of s) a.push({ name: e, value: t, optional: !1 })
                return { ok: !0, variables: a }
              })(o, e, et)
              if (t.ok) {
                ep(null)
                let e = Math.max(-1, ...ec.map(I)) + 1
                eu(t.variables.map((t, r) => ({ id: n[r]?.id ?? e + r, variable: t })))
              }
              return t
            }),
            (X[46] = n),
            (X[47] = ec),
            (X[48] = et),
            (X[49] = o),
            (X[50] = V))
          : (V = X[50]),
        X[51] !== $ || X[52] !== V
          ? ((H = (0, r.jsx)(k.Y, { ref: ex, onAddKey: $, onPendingChange: ev, onImport: V })),
            (X[51] = $),
            (X[52] = V),
            (X[53] = H))
          : (H = X[53]),
        X[54] !== eA
          ? ((U =
              null != eA
                ? (0, r.jsx)("p", {
                    className: "text-sm text-danger",
                    role: "alert",
                    children:
                      "unsupported" === eA
                        ? (0, r.jsx)(d.A, {
                            id: "environmentSetup.variables.fileDrop.unsupported",
                            defaultMessage: "Drop one .env file at a time",
                          })
                        : (0, r.jsx)(d.A, {
                            id: "environmentSetup.variables.fileDrop.readFailed",
                            defaultMessage: "Could not read this file. Try again or paste its contents",
                          }),
                  })
                : null),
            (X[54] = eA),
            (X[55] = U))
          : (U = X[55]),
        X[56] !== el ? ((B = el ? (0, r.jsx)(A.A, {}) : null), (X[56] = el), (X[57] = B)) : (B = X[57]),
        X[58] !== R || X[59] !== H || X[60] !== U || X[61] !== B
          ? ((q = (0, r.jsxs)(w.OO, { className: "min-h-0 gap-4 overflow-y-auto", children: [R, H, U, B] })),
            (X[58] = R),
            (X[59] = H),
            (X[60] = U),
            (X[61] = B),
            (X[62] = q))
          : (q = X[62]),
        X[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((W = (0, r.jsx)(d.A, {
              id: "restricted.environmentSetup.variables.batch.cancel",
              defaultMessage: "Cancel",
            })),
            (X[63] = W))
          : (W = X[63]),
        X[64] !== ea
          ? ((F = (0, r.jsx)(j.$, { className: "me-auto", color: "secondary", onClick: ea, children: W })),
            (X[64] = ea),
            (X[65] = F))
          : (F = X[65]))
      let eI = el || ef || ew
      return (
        X[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((K = (0, r.jsx)(d.A, { id: "restricted.environmentSetup.variables.save", defaultMessage: "Save" })),
            (X[66] = K))
          : (K = X[66]),
        X[67] !== eI
          ? ((Z = (0, r.jsx)(j.$, { color: "primary", disabled: eI, type: "submit", children: K })),
            (X[67] = eI),
            (X[68] = Z))
          : (Z = X[68]),
        X[69] !== F || X[70] !== Z
          ? ((Q = (0, r.jsx)(w.OO, { className: "shrink-0", children: (0, r.jsxs)(w.Es, { children: [F, Z] }) })),
            (X[69] = F),
            (X[70] = Z),
            (X[71] = Q))
          : (Q = X[71]),
        X[72] !== eP || X[73] !== g || X[74] !== x || X[75] !== P || X[76] !== q || X[77] !== Q
          ? ((G = (0, r.jsxs)(w.R4, {
              as: "form",
              noValidate: eP,
              className: "max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] overflow-hidden",
              onSubmit: g,
              children: [x, P, q, Q],
            })),
            (X[72] = eP),
            (X[73] = g),
            (X[74] = x),
            (X[75] = P),
            (X[76] = q),
            (X[77] = Q),
            (X[78] = G))
          : (G = X[78]),
        X[79] !== ey
          ? ((Y = ey
              ? (0, r.jsx)(y.D, {
                  tone: "neutral",
                  inert: !0,
                  children: (0, r.jsx)(d.A, {
                    id: "environmentSetup.variables.fileDrop.prompt",
                    defaultMessage: "Drop .env to import variables",
                  }),
                })
              : null),
            (X[79] = ey),
            (X[80] = Y))
          : (Y = X[80]),
        X[81] !== v || X[82] !== h || X[83] !== G || X[84] !== Y
          ? ((J = (0, r.jsxs)(S.lG, { open: !0, size: "xxwide", contentProps: v, onOpenChange: h, children: [G, Y] })),
            (X[81] = v),
            (X[82] = h),
            (X[83] = G),
            (X[84] = Y),
            (X[85] = J))
          : (J = X[85]),
        J
      )
    }
    function I(e) {
      let { id: t } = e
      return t
    }
    function E(e) {
      return e.id
    }
    function z(e) {
      let { key: t, value: n } = e
      return null == t && null == n
    }
    function T() {
      return null
    }
    function L(e) {
      let { name: t } = e
      return t
    }
    function D(e) {
      let { variable: t } = e
      return t
    }
    function O(e, t) {
      return { id: t, variable: e }
    }
    var R = n("Q00z")
    function $(e) {
      let t,
        n,
        a,
        i,
        c,
        x,
        b,
        j,
        y,
        S,
        w = (0, s.c)(36),
        {
          config: M,
          configuration: A,
          variables: k,
          conflictRows: _,
          issues: C,
          unavailableNames: N,
          isReadOnly: I,
          readOnlyTooltip: E,
          onChange: z,
          showHeading: T,
          runningThread: L,
        } = e,
        D = void 0 === T || T,
        O = void 0 !== L && L,
        R = (0, o.A)(),
        [$, B] = (0, l.useState)(null)
      ;(I && null != $ && B(null),
        w[0] !== R
          ? ((t = R.formatMessage({
              id: "environmentSetup.variables.manageLabel",
              defaultMessage: "Manage environment variables",
            })),
            (w[0] = R),
            (w[1] = t))
          : (t = w[1]))
      let q = I ? E : null
      return (
        w[2] !== M || w[3] !== k
          ? ((n = () => B({ config: M, variables: k })), (w[2] = M), (w[3] = k), (w[4] = n))
          : (n = w[4]),
        w[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)(d.A, { id: "environmentSetup.variables.manage", defaultMessage: "Manage" })), (w[5] = a))
          : (a = w[5]),
        w[6] !== I || w[7] !== t || w[8] !== q || w[9] !== n
          ? ((i = (0, r.jsx)(v.F, {
              "aria-label": t,
              color: "secondary",
              disabled: I,
              tooltipContent: q,
              size: "settingsAction",
              onClick: n,
              children: a,
            })),
            (w[6] = I),
            (w[7] = t),
            (w[8] = q),
            (w[9] = n),
            (w[10] = i))
          : (i = w[10]),
        w[11] !== D
          ? ((c = D
              ? (0, r.jsx)(d.A, {
                  id: "restricted.environmentSetup.variables.title",
                  defaultMessage: "Environment variables",
                })
              : null),
            (w[11] = D),
            (w[12] = c))
          : (c = w[12]),
        w[13] !== i || w[14] !== c
          ? ((x = (0, r.jsx)(m.X.Header, { actions: i, size: "base", spacing: "compact", title: c })),
            (w[13] = i),
            (w[14] = c),
            (w[15] = x))
          : (x = w[15]),
        w[16] !== M || w[17] !== _ || w[18] !== I || w[19] !== C || w[20] !== E || w[21] !== k
          ? ((b =
              0 !== k.length || _?.size
                ? (0, g.i)(
                    k,
                    H,
                    (e) =>
                      (0, r.jsx)(
                        U,
                        {
                          variable: e,
                          issue: C.find((t) => {
                            let { field: n } = t
                            return n === `variable-${e.name}`
                          }),
                          isReadOnly: I,
                          readOnlyTooltip: E,
                          onEdit: () => B({ config: M, variables: k }),
                        },
                        e.name,
                      ),
                    _,
                  )
                : (0, r.jsx)(p.ic, {
                    variant: "featured",
                    size: "compact",
                    control: null,
                    icon: (0, r.jsx)(u.iNn, { className: "text-secondary" }),
                    label: (0, r.jsx)(d.A, {
                      id: "restricted.environmentSetup.variables.empty",
                      defaultMessage: "No environment variables added",
                    }),
                  })),
            (w[16] = M),
            (w[17] = _),
            (w[18] = I),
            (w[19] = C),
            (w[20] = E),
            (w[21] = k),
            (w[22] = b))
          : (b = w[22]),
        w[23] !== b
          ? ((j = (0, r.jsx)(m.X.Content, { children: (0, r.jsx)(f.t, { children: b }) })), (w[23] = b), (w[24] = j))
          : (j = w[24]),
        w[25] !== M || w[26] !== A || w[27] !== $ || w[28] !== z || w[29] !== O || w[30] !== N
          ? ((y =
              null == $
                ? null
                : (0, r.jsx)(P, {
                    runningThread: O,
                    configuration: A,
                    initialVariables: $.variables,
                    unavailableNames: N,
                    hasConflict: (0, h.p)(M, $.config),
                    onClose: () => B(null),
                    onSave: (e) => {
                      ;(z(
                        e,
                        $.variables
                          .filter((t) => {
                            let { name: n } = t
                            return !e.some((e) => e.name === n)
                          })
                          .map(V),
                      ),
                        B(null))
                    },
                  })),
            (w[25] = M),
            (w[26] = A),
            (w[27] = $),
            (w[28] = z),
            (w[29] = O),
            (w[30] = N),
            (w[31] = y))
          : (y = w[31]),
        w[32] !== j || w[33] !== y || w[34] !== x
          ? ((S = (0, r.jsxs)("section", {
              className: "flex flex-col",
              "data-environment-section": "variables",
              children: [x, j, y],
            })),
            (w[32] = j),
            (w[33] = y),
            (w[34] = x),
            (w[35] = S))
          : (S = w[35]),
        S
      )
    }
    function V(e) {
      let { name: t } = e
      return t
    }
    function H(e) {
      return e.name
    }
    function U(e) {
      let t,
        n,
        l,
        m,
        f,
        h,
        g,
        b = (0, s.c)(28),
        { variable: j, issue: y, isReadOnly: S, readOnlyTooltip: w, onEdit: M } = e,
        A = (0, o.A)(),
        k = (0, i.Ul)(c.chatGptAuthenticatedAccountId$),
        _ = (0, i.Ul)(c.chatGptAuthenticatedUserId$),
        C = j.serverId ?? ""
      b[0] !== k || b[1] !== C || b[2] !== _
        ? ((t = { accountId: k, userId: _, id: C }), (b[0] = k), (b[1] = C), (b[2] = _), (b[3] = t))
        : (t = b[3])
      let N = (0, i._U)(R.du, t),
        P = "user_provided" !== j.source && null == j.serverId && !j.value && !N && null == j.error
      return (
        b[4] !== P || b[5] !== N || b[6] !== j.error || b[7] !== j.source || b[8] !== j.value
          ? ((n = (0, r.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
            })),
            "user_provided" === j.source
              ? (n = (0, r.jsx)(d.A, {
                  id: "restricted.environmentSetup.variables.source.userProvided",
                  defaultMessage: "User-provided",
                }))
              : j.value || N || null == j.error
                ? P &&
                  (n = (0, r.jsx)(d.A, {
                    id: "restricted.environmentSetup.variables.missing",
                    defaultMessage: "Missing",
                  }))
                : (n = (0, r.jsx)(d.A, {
                    id: "restricted.environmentSetup.variables.unavailable",
                    defaultMessage: "Unavailable",
                  })),
            (b[4] = P),
            (b[5] = N),
            (b[6] = j.error),
            (b[7] = j.source),
            (b[8] = j.value),
            (b[9] = n))
          : (n = b[9]),
        b[10] === Symbol.for("react.memo_cache_sentinel") ? ((l = (0, r.jsx)(u.iNn, {})), (b[10] = l)) : (l = b[10]),
        b[11] !== j.name
          ? ((m = (0, r.jsx)("span", { className: "block truncate", children: j.name })), (b[11] = j.name), (b[12] = m))
          : (m = b[12]),
        b[13] !== y
          ? ((f = null == y ? void 0 : (0, r.jsx)(x.o, { issue: y })), (b[13] = y), (b[14] = f))
          : (f = b[14]),
        b[15] !== A ||
        b[16] !== P ||
        b[17] !== S ||
        b[18] !== y ||
        b[19] !== M ||
        b[20] !== w ||
        b[21] !== n ||
        b[22] !== j.name
          ? ((h = (e) =>
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("span", {
                    className: (0, a.A)("text-base select-none", P ? "text-danger" : "text-secondary"),
                    children: n,
                  }),
                  (0, r.jsx)(v.F, {
                    "aria-describedby": e["aria-describedby"],
                    "data-environment-invalid": null != y,
                    "aria-label": A.formatMessage(
                      { id: "restricted.environmentSetup.variables.edit", defaultMessage: "Edit {name}" },
                      { name: j.name },
                    ),
                    color: "ghost",
                    disabled: S,
                    tooltipContent: S ? w : null,
                    size: "icon",
                    onClick: M,
                    children: (0, r.jsx)(u.Npl, {}),
                  }),
                ],
              })),
            (b[15] = A),
            (b[16] = P),
            (b[17] = S),
            (b[18] = y),
            (b[19] = M),
            (b[20] = w),
            (b[21] = n),
            (b[22] = j.name),
            (b[23] = h))
          : (h = b[23]),
        b[24] !== m || b[25] !== f || b[26] !== h
          ? ((g = (0, r.jsx)(p.ic, {
              variant: "featured",
              size: "compact",
              icon: l,
              label: m,
              description: f,
              control: h,
            })),
            (b[24] = m),
            (b[25] = f),
            (b[26] = h),
            (b[27] = g))
          : (g = b[27]),
        g
      )
    }
  },
  JZp5(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("oyxz")
    n.d(
      t,
      {},
      {
        P: function (e) {
          let t = (0, s.c)(6),
            { error: n } = e
          switch (n) {
            case "missing-key": {
              let e
              return (
                t[0] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(a.A, {
                      id: "restricted.environmentSetup.variables.missingKey",
                      defaultMessage: "Enter a key",
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
                  ? ((e = (0, r.jsx)(a.A, {
                      id: "restricted.environmentSetup.variables.invalidKey",
                      defaultMessage:
                        "Start the key with a letter or underscore, then use only letters, numbers or underscores (up to 256 characters)",
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
                  ? ((e = (0, r.jsx)(a.A, {
                      id: "restricted.environmentSetup.variables.reservedKey",
                      defaultMessage: "This key is reserved by the platform. Choose a different key",
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
                  ? ((e = (0, r.jsx)(a.A, {
                      id: "restricted.environmentSetup.variables.duplicate",
                      defaultMessage: "This key is already used by another variable or proxy secret",
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
                  ? ((e = (0, r.jsx)(a.A, {
                      id: "restricted.environmentSetup.variables.missingValue",
                      defaultMessage: "Enter a value; leave it blank only to keep an existing saved value",
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
                  ? ((e = (0, r.jsx)(a.A, {
                      id: "restricted.environmentSetup.variables.invalidValue",
                      defaultMessage: "Remove null characters from the value",
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
            n = (0, s.c)(2),
            { name: i } = e
          return (
            n[0] !== i
              ? ((t = (0, r.jsx)(a.A, {
                  id: "restricted.environmentSetup.variables.invalidSavedKey",
                  defaultMessage:
                    "Couldn\u2019t save environment variable \u201C{name}\u201D. Choose a valid, non-reserved key that isn\u2019t used by another variable or proxy secret",
                  values: { name: i },
                })),
                (n[0] = i),
                (n[1] = t))
              : (t = n[1]),
            t
          )
        },
      },
    )
  },
  iN9g(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("zd8w"),
      i = n("Wf1j"),
      l = n("zLIa")
    n.d(
      t,
      {},
      {
        p: function (e) {
          let t,
            n,
            o,
            d,
            c,
            u,
            m = (0, s.c)(30),
            {
              id: p,
              ariaLabel: f,
              ariaInvalid: v,
              ariaDescribedBy: h,
              onFocus: g,
              onBlur: x,
              hasSavedValue: b,
              optional: j,
              required: y,
              value: S,
              onChange: w,
              scopeControl: M,
            } = e,
            A = void 0 !== y && y,
            k = (0, i.A)(),
            [_, C] = (0, a.useState)(!1)
          m[0] !== S ? ((t = S.includes("\n")), (m[0] = S), (m[1] = t)) : (t = m[1])
          let [N, P] = (0, a.useState)(t)
          ;(!N && S.includes("\n") && P(!0),
            m[2] !== k
              ? ((n = k.formatMessage({ id: "environmentSetup.variables.valuePlaceholder", defaultMessage: "Value" })),
                (m[2] = k),
                (m[3] = n))
              : (n = m[3]))
          let I = n
          if (b) {
            let e
            ;(m[4] !== _ || m[5] !== k
              ? ((e = _
                  ? k.formatMessage({
                      id: "restricted.environmentSetup.variables.keepValue",
                      defaultMessage: "Leave blank to keep saved value",
                    })
                  : "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"),
                (m[4] = _),
                (m[5] = k),
                (m[6] = e))
              : (e = m[6]),
              (I = e))
          } else if (void 0 !== j && j) {
            let e
            ;(m[7] !== k
              ? ((e = k.formatMessage({
                  id: "environmentSetup.secret.optionalValue",
                  defaultMessage: "Your value (optional)",
                })),
                (m[7] = k),
                (m[8] = e))
              : (e = m[8]),
              (I = e))
          }
          ;(m[9] !== g
            ? ((o = () => {
                ;(C(!0), g?.())
              }),
              (m[9] = g),
              (m[10] = o))
            : (o = m[10]),
            m[11] !== x
              ? ((d = () => {
                  ;(C(!1), x?.())
                }),
                (m[11] = x),
                (m[12] = d))
              : (d = m[12]),
            m[13] !== h ||
            m[14] !== v ||
            m[15] !== f ||
            m[16] !== p ||
            m[17] !== I ||
            m[18] !== A ||
            m[19] !== o ||
            m[20] !== d ||
            m[21] !== S
              ? ((c = {
                  id: p,
                  "aria-label": f,
                  "aria-invalid": v,
                  "aria-describedby": h,
                  required: A,
                  autoComplete: "off",
                  spellCheck: !1,
                  value: S,
                  placeholder: I,
                  onFocus: o,
                  onBlur: d,
                }),
                (m[13] = h),
                (m[14] = v),
                (m[15] = f),
                (m[16] = p),
                (m[17] = I),
                (m[18] = A),
                (m[19] = o),
                (m[20] = d),
                (m[21] = S),
                (m[22] = c))
              : (c = m[22]))
          let E = c
          return (
            m[23] !== _ || m[24] !== N || m[25] !== w || m[26] !== E || m[27] !== M || m[28] !== S
              ? ((u = N
                  ? (0, r.jsx)(l.TM, {
                      ...E,
                      autoFocus: _,
                      rows: 3,
                      variant: "segmented",
                      trailingControl: M,
                      onChange: (e) => w(e.target.value),
                    })
                  : (0, r.jsx)(l.pd, {
                      ...E,
                      variant: "segmented",
                      trailingControl: M,
                      onChange: (e) => w(e.target.value),
                      onPaste: (e) => {
                        let t = e.clipboardData.getData("text/plain")
                        if (t.includes("\n")) {
                          e.preventDefault()
                          let n = e.currentTarget
                          w(S.slice(0, n.selectionStart ?? 0) + t + S.slice(n.selectionEnd ?? S.length))
                        }
                      },
                    })),
                (m[23] = _),
                (m[24] = N),
                (m[25] = w),
                (m[26] = E),
                (m[27] = M),
                (m[28] = S),
                (m[29] = u))
              : (u = m[29]),
            u
          )
        },
      },
    )
  },
  jmoh(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("qmMi"),
      i = n("VrVA"),
      l = n("zd8w"),
      o = n("Wf1j"),
      d = n("oyxz"),
      c = n("Sm6l"),
      u = n("JNtf"),
      m = n("mUDD"),
      p = n("bVeK"),
      f = n("F0xz"),
      v = n("AWNZ"),
      h = n("ZEx5"),
      g = n("yvV6"),
      x = n("ZEpF")
    function b(e) {
      let t,
        n,
        a,
        x,
        b,
        j,
        y,
        S,
        w,
        M = (0, s.c)(45),
        { httpEnabled: A, sshEnabled: k, disabled: _, portals: C, running: N, onChange: P } = e,
        I = (0, o.A)(),
        [E, z] = (0, l.useState)(null),
        [T, L] = (0, l.useState)(""),
        D = N ? i.$b : i.ss
      if (M[0] !== E || M[1] !== C || M[2] !== D) {
        let e
        ;(M[4] !== E ? ((e = E ?? []), (M[4] = E), (M[5] = e)) : (e = M[5]),
          (t = D.safeParse({ ...C, http_ports: e })),
          (M[0] = E),
          (M[1] = C),
          (M[2] = D),
          (M[3] = t))
      } else t = M[3]
      let O = t
      M[6] !== O.success || M[7] !== T
        ? ((n = O.success && !T.trim()), (M[6] = O.success), (M[7] = T), (M[8] = n))
        : (n = M[8])
      let R = n
      M[9] !== N
        ? ((a = function (e) {
            return !0 === N && (22 === e || 8082 === e)
          }),
          (M[9] = N),
          (M[10] = a))
        : (a = M[10])
      let $ = a
      M[11] !== C?.ssh || M[12] !== N
        ? ((x = function (e) {
            let t = Number(e)
            return !(N && 8082 === t) && /^\d+$/.test(e) && i.ss.safeParse({ ssh: C?.ssh, http_ports: [t] }).success
              ? t
              : null
          }),
          (M[11] = C?.ssh),
          (M[12] = N),
          (M[13] = x))
        : (x = M[13])
      let V = x
      return (
        M[14] !== _ || M[15] !== I || M[16] !== P || M[17] !== C || M[18] !== N || M[19] !== k
          ? ((b =
              k &&
              (0, r.jsx)(v.ic, {
                className: "select-none",
                controlSizing: "content",
                variant: "featured",
                size: "compact",
                label: (0, r.jsx)(d.A, { id: "environmentSetup.ssh.title", defaultMessage: "SSH access" }),
                description: N
                  ? (0, r.jsx)(d.A, {
                      id: "threadEnvironment.portals.live",
                      defaultMessage: "Connect from a terminal or editor. Existing access can continue with SSH off.",
                    })
                  : (0, r.jsx)(d.A, {
                      id: "environmentSetup.ssh.description",
                      defaultMessage: "Connect from a terminal or editor. Changes apply to new runtimes.",
                    }),
                control: (0, r.jsx)(f.l, {
                  ariaLabel: I.formatMessage({ id: "environmentSetup.ssh.title", defaultMessage: "SSH access" }),
                  checked: C?.ssh === !0,
                  disabled: _ || (!0 === N && C?.http_ports?.includes(22) === !0),
                  onChange: (e) => P({ ...C, ssh: e }),
                }),
              })),
            (M[14] = _),
            (M[15] = I),
            (M[16] = P),
            (M[17] = C),
            (M[18] = N),
            (M[19] = k),
            (M[20] = b))
          : (b = M[20]),
        M[21] !== _ || M[22] !== A || M[23] !== I || M[24] !== C
          ? ((j =
              A &&
              (0, r.jsx)(v.ic, {
                controlSizing: "content",
                variant: "featured",
                size: "compact",
                label: (0, r.jsx)(d.A, { id: "environmentSetup.httpPortals.title", defaultMessage: "HTTP Previews" }),
                control: (0, r.jsx)(c.$, {
                  "aria-label": I.formatMessage({
                    id: "environmentSetup.httpPortals.edit",
                    defaultMessage: "Edit HTTP Preview ports",
                  }),
                  color: "ghost",
                  size: "icon",
                  disabled: _,
                  onClick: () => {
                    ;(z(C?.http_ports ?? []), L(""))
                  },
                  children: (0, r.jsx)(p.Npl, {}),
                }),
                description: C?.http_ports?.length
                  ? C.http_ports.join(", ")
                  : (0, r.jsx)(d.A, { id: "environmentSetup.httpPortals.empty", defaultMessage: "No HTTP ports" }),
              })),
            (M[21] = _),
            (M[22] = A),
            (M[23] = I),
            (M[24] = C),
            (M[25] = j))
          : (j = M[25]),
        M[26] !== b || M[27] !== j
          ? ((y = (0, r.jsxs)(h.t, { className: "shrink-0", children: [b, j] })), (M[26] = b), (M[27] = j), (M[28] = y))
          : (y = M[28]),
        M[29] !== R ||
        M[30] !== _ ||
        M[31] !== E ||
        M[32] !== A ||
        M[33] !== I ||
        M[34] !== $ ||
        M[35] !== P ||
        M[36] !== V ||
        M[37] !== O.data ||
        M[38] !== O.success ||
        M[39] !== N ||
        M[40] !== T
          ? ((S =
              A && null != E && !_
                ? (0, r.jsx)(u.lG, {
                    open: !0,
                    onOpenChange: (e) => !e && z(null),
                    children: (0, r.jsxs)(m.R4, {
                      as: "form",
                      onSubmit: (e) => {
                        ;(e.preventDefault(), e.stopPropagation(), R && (P(O.data), z(null)))
                      },
                      children: [
                        (0, r.jsx)(m.OO, {
                          children: (0, r.jsx)(m.c7, {
                            title: (0, r.jsx)(u.L3, {
                              children: (0, r.jsx)(d.A, {
                                id: "environmentSetup.httpPortals.edit",
                                defaultMessage: "Edit HTTP Preview ports",
                              }),
                            }),
                          }),
                        }),
                        (0, r.jsxs)(m.OO, {
                          children: [
                            (0, r.jsx)("p", {
                              children: N
                                ? (0, r.jsx)(d.A, {
                                    id: "threadEnvironment.httpPortals.description",
                                    defaultMessage:
                                      "Add a port to enable its preview. Remove it to block new requests to the preview URL.",
                                  })
                                : (0, r.jsx)(d.A, {
                                    id: "environmentSetup.httpPortals.accessHelp",
                                    defaultMessage:
                                      "Only you can access these HTTP Previews. Changes apply to new runtimes.",
                                  }),
                            }),
                            (0, r.jsx)(g.G, {
                              entries: E,
                              value: T,
                              onChange: (e) => {
                                E.every((t) => !$(t) || e.includes(t)) && z(e)
                              },
                              onInputChange: L,
                              parseEntry: V,
                              errorFor: (e) => {
                                if (22 === Number(e) && /^\d+$/.test(e))
                                  return (0, r.jsx)(d.A, {
                                    id: "environmentSetup.httpPortals.sshPort",
                                    defaultMessage: "Port 22 is reserved for SSH",
                                  })
                                if (N && /^\d+$/.test(e) && 8082 === Number(e))
                                  return (0, r.jsx)(d.A, {
                                    id: "threadEnvironment.httpPortals.desktopPort",
                                    defaultMessage: "Port 8082 is reserved for remote desktop",
                                  })
                                let t = V(e)
                                return null == t
                                  ? (0, r.jsx)(d.A, {
                                      id: "environmentSetup.httpPortals.invalidPort",
                                      defaultMessage: "Enter a whole-number port from 1 to 65535",
                                    })
                                  : E.includes(t)
                                    ? (0, r.jsx)(d.A, {
                                        id: "environmentSetup.httpPortals.duplicate",
                                        defaultMessage: "This port has already been added",
                                      })
                                    : null
                              },
                              label: I.formatMessage({
                                id: "environmentSetup.httpPortals.ports",
                                defaultMessage: "HTTP ports",
                              }),
                              placeholder: I.formatMessage({
                                id: "environmentSetup.httpPortals.placeholder",
                                defaultMessage: "Add a port",
                              }),
                              pendingHelp: (0, r.jsx)(d.A, {
                                id: "environmentSetup.httpPortals.addBeforeApply",
                                defaultMessage: "Press Enter to add this port before applying",
                              }),
                              children: E.map((e) =>
                                (0, r.jsx)(
                                  g.b,
                                  {
                                    value: e,
                                    disabled: $(e),
                                    removeLabel: I.formatMessage(
                                      { id: "environmentSetup.httpPortals.remove", defaultMessage: "Remove {port}" },
                                      { port: String(e) },
                                    ),
                                    onRemove: () => z(E.filter((t) => t !== e)),
                                  },
                                  e,
                                ),
                              ),
                            }),
                            O.success
                              ? null
                              : (0, r.jsx)("p", {
                                  className: "text-sm text-danger",
                                  role: "alert",
                                  children: (0, r.jsx)(d.A, {
                                    id: "environmentSetup.httpPortals.invalid",
                                    defaultMessage:
                                      "Use unique whole-number ports from 1 to 65535 and leave port 22 for SSH",
                                  }),
                                }),
                          ],
                        }),
                        (0, r.jsx)(m.OO, {
                          children: (0, r.jsxs)(m.Es, {
                            children: [
                              (0, r.jsx)(c.$, {
                                color: "secondary",
                                onClick: () => z(null),
                                children: (0, r.jsx)(d.A, {
                                  id: "environmentSetup.httpPortals.cancel",
                                  defaultMessage: "Cancel",
                                }),
                              }),
                              (0, r.jsx)(c.$, {
                                color: "primary",
                                type: "submit",
                                disabled: !R,
                                children: (0, r.jsx)(d.A, {
                                  id: "environmentSetup.httpPortals.apply",
                                  defaultMessage: "Apply",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  })
                : null),
            (M[29] = R),
            (M[30] = _),
            (M[31] = E),
            (M[32] = A),
            (M[33] = I),
            (M[34] = $),
            (M[35] = P),
            (M[36] = V),
            (M[37] = O.data),
            (M[38] = O.success),
            (M[39] = N),
            (M[40] = T),
            (M[41] = S))
          : (S = M[41]),
        M[42] !== y || M[43] !== S
          ? ((w = (0, r.jsxs)(r.Fragment, { children: [y, S] })), (M[42] = y), (M[43] = S), (M[44] = w))
          : (w = M[44]),
        w
      )
    }
    n.d(
      t,
      {},
      {
        y: function (e) {
          let t,
            n = (0, s.c)(4),
            i = (0, a.Ul)(x.H),
            l = (0, a.Ul)(x.F)
          return (
            n[0] !== i || n[1] !== e || n[2] !== l
              ? ((t =
                  i || l
                    ? (0, r.jsx)(b, { httpEnabled: i, sshEnabled: l, ...e }, e.disabled ? "readonly" : "editable")
                    : null),
                (n[0] = i),
                (n[1] = e),
                (n[2] = l),
                (n[3] = t))
              : (t = n[3]),
            t
          )
        },
      },
    )
  },
  pqcU(e, t, n) {
    n.d(t, { u: () => b })
    var r = n("ABep"),
      s = n("QosV"),
      a = n("qmMi"),
      i = n("oyxz"),
      l = n("ZtSy"),
      o = n("D7Ms"),
      d = n("SZCv"),
      c = n.n(d),
      u = n("SPnB")
    n("X1mr")
    var m = n("ReGc"),
      p = n("OWtl"),
      f = n("rvFo"),
      v = n("kK7d"),
      h = n("j1Su")
    let g = (0, a.un)(
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
      x = (0, a.RD)(p.u, ({ get: e, scope: t }) => {
        let n = e(g)
        return {
          queryKey: ["cloud-environment-network-policy", n?.accountId, n?.requestUserId],
          queryFn:
            null == n
              ? o.hT
              : async ({ signal: e }) => {
                  var r, s
                  let a = { accountId: n.accountId, userId: n.requestUserId },
                    i = await Promise.all(
                      ["linux", "mac_os", "windows"].map(async (t) =>
                        (function (e) {
                          try {
                            let t = e.environment
                            if (null == t) return !1
                            if ("cloud" !== t.target.environment_type) return
                            let n = (0, h.f)(t).requirements?.network
                            if (null == n) return !1
                            let r =
                                null == n.domains
                                  ? n.allowedDomains
                                  : Object.entries(n.domains)
                                      .filter(([, e]) => "allow" === e)
                                      .map(([e]) => e),
                              s =
                                null == n.domains
                                  ? (n.deniedDomains?.length ?? 0) > 0
                                  : Object.values(n.domains).includes("deny")
                            return (
                              !1 === n.enabled ||
                              !1 === n.allowUpstreamProxy ||
                              !1 === n.allowLocalBinding ||
                              s ||
                              (!0 === n.managedAllowedDomainsOnly && !r?.some((e) => "*" === e.trim()))
                            )
                          } catch {
                            return
                          }
                        })(
                          await v.CodexRequest.safeGet("/wham/config/agent-bundle", {
                            parameters: { query: { environment_type: "cloud", environment_os: t } },
                            expectedIdentity: a,
                            signal: e,
                            retry: !1,
                          }),
                        ),
                      ),
                    )
                  if (!i.every((e) => !0 === e))
                    return { restricted: !i.every((e) => !1 === e) && void 0, settingsUrl: null }
                  let l = await v.CodexRequest.safeGet("/wham/config/agent-enterprise-managed", {
                      expectedIdentity: a,
                      signal: e,
                      retry: !1,
                    }).then(
                      (e) => !0 === e.delivery_enabled && e.capabilities?.can_view !== !1,
                      () => !1,
                    ),
                    o = null
                  return (
                    l &&
                      (o = await t.query.fetch(m.a).then(
                        (e) => null != e.chatGptDesktopAuthOrigin,
                        () => null,
                      )),
                    {
                      restricted: !0,
                      settingsUrl:
                        null == o
                          ? null
                          : ((r = n.accountId),
                            (s = o),
                            new URL(
                              `/workspace/${encodeURIComponent(r)}/agent-security?redirectfrom=chatgpt`,
                              s ? "https://admin.api.openai.org" : "https://admin.openai.com",
                            ).href),
                    }
                  )
                },
          staleTime: f.D.ONE_MINUTE,
          gcTime: 0,
          refetchOnMount: "always",
          refetchOnWindowFocus: "always",
          refetchInterval: f.D.ONE_MINUTE,
          retry: !1,
        }
      })
    function b(e) {
      let t,
        n = (0, s.c)(2),
        { configuration: o } = e,
        d = (0, a.Ul)(g),
        { data: c, isPending: u, isError: m, isPaused: p } = (0, a.Ul)(x)
      if (null == d || o.accountId !== d.accountId || o.userId !== d.userId || u || m || p || c?.restricted !== !0)
        return null
      let { settingsUrl: f } = c
      return (
        n[0] !== f
          ? ((t = (0, r.jsx)("p", {
              className: "text-sm text-secondary select-none",
              children:
                null != f
                  ? (0, r.jsx)(i.A, {
                      id: "environmentSetup.networkPolicy.withSettings",
                      defaultMessage:
                        "Your organization's <settings>Agent Security settings</settings> define network access restrictions which apply to this environment.",
                      values: {
                        settings: (e) =>
                          (0, r.jsx)(l.G, {
                            appearance: "accent",
                            href: f,
                            initiator: "external_link",
                            underline: "hover",
                            children: e,
                          }),
                      },
                    })
                  : (0, r.jsx)(i.A, {
                      id: "environmentSetup.networkPolicy.contactAdmin",
                      defaultMessage:
                        "Your organization's Agent Security settings define network access restrictions which apply to this environment. Contact an admin for details.",
                    }),
            })),
            (n[0] = f),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
  },
  yvV6(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("zd8w"),
      i = n("oyxz"),
      l = n("TjgH"),
      o = n("bVeK"),
      d = n("zLIa")
    n.d(
      t,
      {},
      {
        G: function (e) {
          let t,
            n,
            l,
            o,
            c,
            u,
            m,
            p,
            f,
            v,
            h,
            g,
            x,
            b = (0, s.c)(52),
            {
              entries: j,
              value: y,
              onChange: S,
              onInputChange: w,
              parseEntry: M,
              errorFor: A,
              pendingHelp: k,
              label: _,
              placeholder: C,
              disabled: N,
              purpose: P,
              children: I,
            } = e,
            E = void 0 !== N && N,
            z = void 0 === P ? "network" : P,
            T = (0, a.useId)(),
            [L, D] = (0, a.useState)(!1),
            O = (0, a.useRef)(null),
            R = (0, a.useRef)(j.length)
          b[0] !== A || b[1] !== L || b[2] !== z || b[3] !== y
            ? ((t = ("secret" === z || L) && y.trim() ? A(y.split(",")[0]?.trim() ?? "") : null),
              (b[0] = A),
              (b[1] = L),
              (b[2] = z),
              (b[3] = y),
              (b[4] = t))
            : (t = b[4])
          let $ = t
          ;(b[5] !== j.length
            ? ((n = () => {
                ;(j.length > R.current && O.current?.scrollIntoView({ block: "nearest" }), (R.current = j.length))
              }),
              (l = [j.length]),
              (b[5] = j.length),
              (b[6] = n),
              (b[7] = l))
            : ((n = b[6]), (l = b[7])),
            (0, a.useLayoutEffect)(n, l),
            b[8] !== j || b[9] !== S || b[10] !== w || b[11] !== M
              ? ((o = function (e, t) {
                  let n = e.split(/[,\r\n]/),
                    r = t ? n.pop() : void 0,
                    s = [...j],
                    a = new Set(j.map((e) => M(String(e)))),
                    i = []
                  for (let e of n) {
                    let t = e.trim()
                    if (!t) continue
                    let n = M(t)
                    null == n || a.has(n) ? i.push(t) : (a.add(n), s.push(n))
                  }
                  ;(s.length !== j.length && S(s), w([...i, r?.trim()].filter(Boolean).join(", ")), D(i.length > 0))
                }),
                (b[8] = j),
                (b[9] = S),
                (b[10] = w),
                (b[11] = M),
                (b[12] = o))
              : (o = b[12]))
          let V = o
          b[13] !== I ? ((c = (0, r.jsx)(r.Fragment, { children: I })), (b[13] = I), (b[14] = c)) : (c = b[14])
          let H = null != $
          ;(b[15] !== y ? ((u = () => D(y.trim().length > 0)), (b[15] = y), (b[16] = u)) : (u = b[16]),
            b[17] !== V || b[18] !== w
              ? ((m = (e) => {
                  let t = e.currentTarget.value
                  t.includes(",") ? V(t, !0) : (w(t), D(!1))
                }),
                (b[17] = V),
                (b[18] = w),
                (b[19] = m))
              : (m = b[19]),
            b[20] !== V || b[21] !== j || b[22] !== S || b[23] !== z || b[24] !== y
              ? ((p = (e) => {
                  !e.nativeEvent.isComposing &&
                    ("Enter" === e.key || "," === e.key
                      ? (e.preventDefault(), y.trim() && V(y, !1))
                      : "network" === z && "Backspace" === e.key && !y && j.length > 0 && S(j.slice(0, -1)))
                }),
                (b[20] = V),
                (b[21] = j),
                (b[22] = S),
                (b[23] = z),
                (b[24] = y),
                (b[25] = p))
              : (p = b[25]),
            b[26] !== V
              ? ((f = (e) => {
                  let t = e.clipboardData.getData("text")
                  if (!/[,\r\n]/.test(t)) return
                  e.preventDefault()
                  let n = e.currentTarget,
                    r = n.selectionStart ?? n.value.length,
                    s = n.selectionEnd ?? r
                  V(n.value.slice(0, r) + t + n.value.slice(s), !1)
                }),
                (b[26] = V),
                (b[27] = f))
              : (f = b[27]),
            b[28] !== E ||
            b[29] !== T ||
            b[30] !== _ ||
            b[31] !== C ||
            b[32] !== m ||
            b[33] !== p ||
            b[34] !== f ||
            b[35] !== c ||
            b[36] !== H ||
            b[37] !== u ||
            b[38] !== y
              ? ((v = (0, r.jsx)(d.pd, {
                  ref: O,
                  leadingControl: c,
                  variant: "tags",
                  "aria-label": _,
                  "aria-describedby": T,
                  "aria-invalid": H,
                  autoFocus: !0,
                  disabled: E,
                  placeholder: C,
                  value: y,
                  onBlur: u,
                  onChange: m,
                  onKeyDown: p,
                  onPaste: f,
                })),
                (b[28] = E),
                (b[29] = T),
                (b[30] = _),
                (b[31] = C),
                (b[32] = m),
                (b[33] = p),
                (b[34] = f),
                (b[35] = c),
                (b[36] = H),
                (b[37] = u),
                (b[38] = y),
                (b[39] = v))
              : (v = b[39]))
          let U = null == $ ? "text-xs text-secondary select-none" : "text-xs text-danger select-none",
            B = null == $ ? void 0 : "alert"
          return (
            b[40] !== $ || b[41] !== k || b[42] !== y
              ? ((h =
                  $ ??
                  (y.trim()
                    ? k
                    : (0, r.jsx)(i.A, {
                        id: "restricted.environmentSetup.network.domain.help",
                        defaultMessage: "Press Enter to add, or paste a comma- or line-separated list",
                      }))),
                (b[40] = $),
                (b[41] = k),
                (b[42] = y),
                (b[43] = h))
              : (h = b[43]),
            b[44] !== T || b[45] !== U || b[46] !== B || b[47] !== h
              ? ((g = (0, r.jsx)("p", { id: T, className: U, role: B, children: h })),
                (b[44] = T),
                (b[45] = U),
                (b[46] = B),
                (b[47] = h),
                (b[48] = g))
              : (g = b[48]),
            b[49] !== v || b[50] !== g
              ? ((x = (0, r.jsxs)("div", {
                  className: "flex w-full min-w-0 flex-col gap-1.5 [&>div]:gap-x-2",
                  children: [v, g],
                })),
                (b[49] = v),
                (b[50] = g),
                (b[51] = x))
              : (x = b[51]),
            x
          )
        },
        b: function (e) {
          let t,
            n,
            a,
            i = (0, s.c)(10),
            { value: d, removeLabel: c, disabled: u, onRemove: m, children: p } = e,
            f = String(d)
          return (
            i[0] !== f
              ? ((t = (0, r.jsx)("span", { className: "min-w-0 truncate", title: f, children: f })),
                (i[0] = f),
                (i[1] = t))
              : (t = i[1]),
            i[2] !== u || i[3] !== m || i[4] !== c
              ? ((n =
                  null != m &&
                  (0, r.jsx)("button", {
                    type: "button",
                    "aria-label": c,
                    className:
                      "cursor-interaction rounded-sm text-secondary hover:text-default focus-visible:outline-2 focus-visible:outline-ring",
                    disabled: u,
                    onClick: m,
                    children: (0, r.jsx)(o.Gmf, {}),
                  })),
                (i[2] = u),
                (i[3] = m),
                (i[4] = c),
                (i[5] = n))
              : (n = i[5]),
            i[6] !== p || i[7] !== t || i[8] !== n
              ? ((a = (0, r.jsxs)(l.E, { className: "max-w-full gap-1", variant: "outline", children: [t, p, n] })),
                (i[6] = p),
                (i[7] = t),
                (i[8] = n),
                (i[9] = a))
              : (a = i[9]),
            a
          )
        },
      },
    )
  },
  W857(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("qmMi"),
      i = n("oyxz"),
      l = n("Qgfj"),
      o = n("Sm6l"),
      d = n("iN9g"),
      c = n("st5O"),
      u = n("Qm3F")
    let m = (0, l.YK)({
      unavailable: {
        id: "environmentSetup.review.secret.unavailable",
        defaultMessage: "Saved value status unavailable",
      },
      ambiguous: { id: "environmentSetup.review.secret.ambiguous", defaultMessage: "Multiple personal values match" },
      retry: { id: "environmentSetup.review.secret.retry", defaultMessage: "Retry checking personal values" },
    })
    n.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            n,
            l,
            p,
            f,
            v,
            h,
            g = (0, s.c)(27),
            {
              id: x,
              configuration: b,
              namespace: j,
              name: y,
              value: S,
              saved: w,
              requireValue: M,
              ariaLabel: A,
              invalid: k,
              describedBy: _,
              onChange: C,
              scopeControl: N,
            } = e,
            P = void 0 !== M && M
          g[0] !== b || g[1] !== j
            ? ((t = { configuration: b, namespace: j }), (g[0] = b), (g[1] = j), (g[2] = t))
            : (t = g[2])
          let { data: I, isError: E, refetch: z } = (0, a._U)(c.Fz, t)
          g[3] !== b || g[4] !== I || g[5] !== y
            ? ((n = null == I || null == b ? void 0 : (0, c.op)(I, y, b.configId)),
              (g[3] = b),
              (g[4] = I),
              (g[5] = y),
              (g[6] = n))
            : (n = g[6])
          let T = n,
            L = (void 0 !== w && w) || (null != T && "ambiguous" !== T)
          return (
            0 === S.length && !L && ("ambiguous" === T ? (l = m.ambiguous) : E && (l = m.unavailable)),
            g[7] !== A ||
            g[8] !== _ ||
            g[9] !== L ||
            g[10] !== x ||
            g[11] !== k ||
            g[12] !== j ||
            g[13] !== C ||
            g[14] !== P ||
            g[15] !== N ||
            g[16] !== S
              ? ((p =
                  "sensitive" === j
                    ? (0, r.jsx)(u.n, {
                        id: x,
                        value: S,
                        personal: !P,
                        required: P && !L,
                        saved: L,
                        ariaLabel: A,
                        invalid: k,
                        describedBy: _,
                        onChange: C,
                        scopeControl: N,
                      })
                    : (0, r.jsx)(d.p, {
                        id: x,
                        value: S,
                        optional: !P,
                        required: P && !L,
                        hasSavedValue: L,
                        ariaLabel: A,
                        ariaInvalid: k,
                        ariaDescribedBy: _,
                        onChange: C,
                        scopeControl: N,
                      })),
                (g[7] = A),
                (g[8] = _),
                (g[9] = L),
                (g[10] = x),
                (g[11] = k),
                (g[12] = j),
                (g[13] = C),
                (g[14] = P),
                (g[15] = N),
                (g[16] = S),
                (g[17] = p))
              : (p = g[17]),
            g[18] !== l
              ? ((f =
                  null != l
                    ? (0, r.jsx)("div", {
                        className: "text-xs text-secondary select-none",
                        role: "status",
                        children: (0, r.jsx)(i.A, { ...l }),
                      })
                    : null),
                (g[18] = l),
                (g[19] = f))
              : (f = g[19]),
            g[20] !== E || g[21] !== z
              ? ((v = E
                  ? (0, r.jsx)(o.$, {
                      color: "ghost",
                      size: "compact",
                      onClick: () => void z(),
                      children: (0, r.jsx)(i.A, { ...m.retry }),
                    })
                  : null),
                (g[20] = E),
                (g[21] = z),
                (g[22] = v))
              : (v = g[22]),
            g[23] !== p || g[24] !== f || g[25] !== v
              ? ((h = (0, r.jsxs)("div", { className: "flex min-w-0 flex-col gap-1", children: [p, f, v] })),
                (g[23] = p),
                (g[24] = f),
                (g[25] = v),
                (g[26] = h))
              : (h = g[26]),
            h
          )
        },
      },
    )
  },
  jf0i(e, t, n) {
    n.d(t, { R: () => m, i: () => p })
    var r = n("ABep"),
      s = n("QosV"),
      a = n("oyxz"),
      i = n("bVeK"),
      l = n("AWNZ"),
      o = n("MVTZ")
    let d =
      /^((?:.*? \xb7 )?(\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022|User-provided value|No value)), (required|optional)(?= \xb7 |$)/
    function c(e) {
      let t,
        n,
        c,
        m,
        p,
        f,
        v,
        h,
        g,
        x,
        b,
        j,
        y,
        S,
        w,
        M,
        A,
        k,
        _,
        C,
        N,
        P,
        I = (0, s.c)(64),
        { bindingName: E, bindingRow: z, conflict: T } = e,
        { environmentValue: L, configValue: D } = T
      I[0] !== E || I[1] !== L ? ((t = E && L?.match(d)), (I[0] = E), (I[1] = L), (I[2] = t)) : (t = I[2])
      let O = t
      I[3] !== E || I[4] !== D ? ((n = E && D?.match(d)), (I[3] = E), (I[4] = D), (I[5] = n)) : (n = I[5])
      let R = n,
        $ = O?.[2],
        V = R?.[2],
        H = null != $ && null != V && $ !== V
      if (null != E && ($ !== V || O?.[3] === R?.[3])) {
        let e, t
        ;(I[6] !== L ? ((e = L?.replace(d, "$1")), (I[6] = L), (I[7] = e)) : (e = I[7]),
          (L = e),
          I[8] !== D ? ((t = D?.replace(d, "$1")), (I[8] = D), (I[9] = t)) : (t = I[9]),
          (D = t))
      }
      if (I[10] !== D || I[11] !== T.setting || I[12] !== L || I[13] !== $) {
        let e,
          [t, n, s] = L?.split(" \xb7 Allowed domains: ") ?? []
        ;((f = n),
          I[19] !== D ? ((e = D?.split(" \xb7 Allowed domains: ") ?? []), (I[19] = D), (I[20] = e)) : (e = I[20]))
        let [a, i, l] = e
        if (
          ((m = i),
          (c =
            T.setting.startsWith("Secret \xb7 ") &&
            null != f &&
            null != m &&
            null == s &&
            null == l &&
            t === a &&
            f !== m),
          (v = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" === $ && L === $),
          (p = null),
          c)
        )
          p = u(t, $)
        else if (v) {
          let e
          ;(I[21] !== $
            ? ((e = (0, r.jsx)("span", { "aria-hidden": "true", children: $ })), (I[21] = $), (I[22] = e))
            : (e = I[22]),
            (p = e))
        }
        ;((I[10] = D),
          (I[11] = T.setting),
          (I[12] = L),
          (I[13] = $),
          (I[14] = c),
          (I[15] = m),
          (I[16] = p),
          (I[17] = f),
          (I[18] = v))
      } else ((c = I[14]), (m = I[15]), (p = I[16]), (f = I[17]), (v = I[18]))
      let U = T.setting
      if (c) {
        let e
        ;(I[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(a.A, { id: "threadEnvironment.conflictDomains", defaultMessage: "Allowed domains" })),
            (I[23] = e))
          : (e = I[23]),
          (U = e))
      } else if (null != E) {
        let e
        ;(I[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(a.A, { id: "threadEnvironment.conflictValue", defaultMessage: "Value" })), (I[24] = e))
          : (e = I[24]),
          (U = e))
      }
      I[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (0, r.jsx)(a.A, { id: "threadEnvironment.conflictRemoved", defaultMessage: "Removed" })), (I[25] = h))
        : (h = I[25])
      let B = h
      I[26] !== L || I[27] !== H || I[28] !== v || I[29] !== $
        ? ((g = v ? (0, r.jsx)(o.W, { source: "environment", showLabel: !0 }) : u(L ?? B, $, H)),
          (I[26] = L),
          (I[27] = H),
          (I[28] = v),
          (I[29] = $),
          (I[30] = g))
        : (g = I[30])
      let q = g,
        W = E ?? T.setting
      ;(I[31] !== E || I[32] !== z || I[33] !== p || I[34] !== v
        ? ((x =
            v && null != z
              ? z
              : null != E &&
                (0, r.jsx)(l.ic, {
                  variant: "featured",
                  size: "compact",
                  controlSizing: "content",
                  icon: (0, r.jsx)(i.iNn, { className: "text-secondary" }),
                  label: (0, r.jsx)("span", { className: "wrap-anywhere", children: E }),
                  control:
                    null != p
                      ? (0, r.jsx)("span", {
                          className: "text-base wrap-anywhere text-secondary select-none",
                          children: p,
                        })
                      : null,
                })),
          (I[31] = E),
          (I[32] = z),
          (I[33] = p),
          (I[34] = v),
          (I[35] = x))
        : (x = I[35]),
        I[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, r.jsx)(i.Ko7, { "aria-hidden": !0, className: "shrink-0 text-danger" })), (I[36] = b))
          : (b = I[36]),
        I[37] !== U
          ? ((j = (0, r.jsxs)("span", {
              className: "flex min-w-0 items-center gap-2 font-medium wrap-anywhere",
              children: [b, U],
            })),
            (I[37] = U),
            (I[38] = j))
          : (j = I[38]),
        I[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, r.jsx)("span", {
              className: "text-sm font-medium text-danger",
              children: (0, r.jsx)(a.A, { id: "threadEnvironment.conflictLabel", defaultMessage: "Conflict" }),
            })),
            (I[39] = y))
          : (y = I[39]),
        I[40] !== j
          ? ((S = (0, r.jsxs)("div", { className: "flex items-baseline justify-between gap-2", children: [j, y] })),
            (I[40] = j),
            (I[41] = S))
          : (S = I[41]),
        I[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, r.jsx)("dt", {
              className: "text-secondary",
              children: (0, r.jsx)(a.A, { id: "threadEnvironment.conflictThread", defaultMessage: "This thread" }),
            })),
            (I[42] = w))
          : (w = I[42]))
      let F = c ? f : q
      return (
        I[43] !== F
          ? ((M = (0, r.jsx)("dd", { className: "wrap-anywhere whitespace-pre-wrap", children: F })),
            (I[43] = F),
            (I[44] = M))
          : (M = I[44]),
        I[45] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, r.jsx)("dt", {
              className: "text-secondary",
              children: (0, r.jsx)(a.A, {
                id: "threadEnvironment.conflictEnvironmentConfig",
                defaultMessage: "Environment config",
              }),
            })),
            (I[45] = A))
          : (A = I[45]),
        I[46] !== c || I[47] !== m || I[48] !== V || I[49] !== D || I[50] !== H
          ? ((k = c ? m : u(D ?? B, V, H)),
            (I[46] = c),
            (I[47] = m),
            (I[48] = V),
            (I[49] = D),
            (I[50] = H),
            (I[51] = k))
          : (k = I[51]),
        I[52] !== k
          ? ((_ = (0, r.jsx)("dd", { className: "wrap-anywhere whitespace-pre-wrap", children: k })),
            (I[52] = k),
            (I[53] = _))
          : (_ = I[53]),
        I[54] !== M || I[55] !== _
          ? ((C = (0, r.jsxs)("dl", {
              className: "mt-2 grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1 text-sm",
              children: [w, M, A, _],
            })),
            (I[54] = M),
            (I[55] = _),
            (I[56] = C))
          : (C = I[56]),
        I[57] !== S || I[58] !== C
          ? ((N = (0, r.jsxs)("div", {
              className: "border-s-2 border-danger-outline bg-text-danger/8 px-4 py-3",
              children: [S, C],
            })),
            (I[57] = S),
            (I[58] = C),
            (I[59] = N))
          : (N = I[59]),
        I[60] !== N || I[61] !== W || I[62] !== x
          ? ((P = (0, r.jsxs)("div", { role: "group", "aria-label": W, children: [x, N] })),
            (I[60] = N),
            (I[61] = W),
            (I[62] = x),
            (I[63] = P))
          : (P = I[63]),
        P
      )
    }
    function u(e, t, n = !1) {
      return "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" !== t && "User-provided value" !== t
        ? e
        : "User-provided value" === e
          ? (0, r.jsx)(o.W, { source: "user_provided", showLabel: !0 })
          : (0, r.jsxs)("span", {
              className: "inline-flex items-center gap-1.5",
              children: [
                (0, r.jsx)(o.W, {
                  source: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" === t ? "environment" : "user_provided",
                  showLabel: n,
                }),
                e,
              ],
            })
    }
    function m(e) {
      let t = new Map(),
        n = new Map(),
        s = [],
        a = new Map([
          ["Environment variable", t],
          ["Secret", n],
        ])
      for (let t of e?.conflicts ?? []) {
        let [e, ...n] = t.setting.split(" \xb7 "),
          i = n.join(" \xb7 "),
          l = a.get(e)
        l && i ? l.set(i, t) : s.push((0, r.jsx)(c, { conflict: t }, t.setting))
      }
      return { variables: t, secrets: n, other: s }
    }
    function p(e, t, n, s) {
      if (!s?.size) return e.map(n)
      let a = new Map(s),
        i = e.map((e) => {
          let i = t(e)
          a.delete(i)
          let l = s.get(i),
            o = n(e)
          return l ? (0, r.jsx)(c, { bindingName: i, conflict: l, bindingRow: o }, i) : o
        })
      for (let [e, t] of a) i.push((0, r.jsx)(c, { bindingName: e, conflict: t }, e))
      return i
    }
  },
  CFI7(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("slpy"),
      i = n("NhqU"),
      l = n("on57"),
      o = n("zd8w"),
      d = n("Wf1j"),
      c = n("oyxz"),
      u = n("Sm6l"),
      m = n("ZtSy"),
      p = n("Ot7V"),
      f = n("HOLv"),
      v = n("bVeK"),
      h = n("nzx4"),
      g = n("F0xz"),
      x = n("BSnr"),
      b = n("AWNZ"),
      j = n("ZEx5"),
      y = n("teEn"),
      S = n("JiLO")
    function w(e) {
      let { field: t } = e
      return t?.startsWith("network-")
    }
    function M(e) {
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
            A,
            k,
            _,
            C,
            N,
            P,
            I,
            E,
            z,
            T,
            L,
            D,
            O,
            R,
            $,
            V,
            H,
            U,
            B,
            q,
            W,
            F,
            K,
            Z,
            Q,
            G,
            Y,
            J,
            X,
            ee,
            et,
            en = (0, s.c)(95),
            {
              draft: er,
              onDraftChange: es,
              isReadOnly: ea,
              readOnlyTooltip: ei,
              issues: el,
              packageManagersDescription: eo,
              packageManagersTooltip: ed,
              help: ec,
              allInternetDescription: eu,
              previousRestrictedAccess: em,
              notice: ep,
              children: ef,
            } = e
          en[0] !== el ? ((t = void 0 === el ? [] : el), (en[0] = el), (en[1] = t)) : (t = en[1])
          let ev = t,
            eh = (0, d.A)()
          en[2] !== eh
            ? ((n = eh.formatMessage({
                id: "restricted.environmentSetup.configuration.network.toggle",
                defaultMessage: "Enable all public internet access",
              })),
              (en[2] = eh),
              (en[3] = n))
            : (n = en[3])
          let eg = n,
            ex = !0 === er.networkEnabled && "all" === er.networkPreset,
            [eb, ej] = (0, o.useState)(null),
            ey = em ?? eb
          en[4] !== er.networkDomains || en[5] !== ex || en[6] !== ey?.domains
            ? ((p = (ex ? ey?.domains : null) ?? er.networkDomains ?? []),
              (en[4] = er.networkDomains),
              (en[5] = ex),
              (en[6] = ey?.domains),
              (en[7] = p))
            : (p = en[7])
          let eS = p,
            ew = ex ? (ey?.packageManagers ?? !1) : !0 === er.networkEnabled && "none" !== er.networkPreset
          en[8] !== eh
            ? ((A = eh.formatMessage({
                id: "environmentSetup.configuration.network.packageManagers",
                defaultMessage: "Enable package manager domains",
              })),
              (en[8] = eh),
              (en[9] = A))
            : (A = en[9])
          let eM = A
          en[10] !== eh
            ? ((k = eh.formatMessage({
                id: "threadEnvironment.network.aboutPolicy",
                defaultMessage: "About network access",
              })),
              (en[10] = eh),
              (en[11] = k))
            : (k = en[11])
          let eA = k
          ;(en[12] !== eh
            ? ((_ = eh.formatMessage({
                id: "environmentSetup.configuration.network.docsLabel",
                defaultMessage: "Cloud environment networking docs",
              })),
              (en[12] = eh),
              (en[13] = _))
            : (_ = en[13]),
            en[14] === Symbol.for("react.memo_cache_sentinel")
              ? ((C = (0, r.jsx)(v.Xkx, {})),
                (N = (0, r.jsx)(c.A, { id: "environmentSetup.configuration.network.docs", defaultMessage: "Docs" })),
                (en[14] = C),
                (en[15] = N))
              : ((C = en[14]), (N = en[15])),
            en[16] !== _
              ? ((P = (0, r.jsxs)(m.G, {
                  className: "inline-flex items-center gap-1 text-sm",
                  "aria-label": _,
                  appearance: "secondary",
                  href: "https://learn.chatgpt.com/docs/environments/cloud-environments#connect-to-services",
                  initiator: "external_link",
                  underline: "hover",
                  children: [C, N],
                })),
                (en[16] = _),
                (en[17] = P))
              : (P = en[17]))
          let ek = P
          ;(en[18] !== ek || en[19] !== ec || en[20] !== eA
            ? ((I =
                null == ec
                  ? ek
                  : (0, r.jsxs)(h.AM, {
                      children: [
                        (0, r.jsx)(a.m, {
                          content: eA,
                          children: (0, r.jsx)(h.Wv, {
                            asChild: !0,
                            children: (0, r.jsx)(u.$, {
                              color: "ghostSecondary",
                              size: "icon",
                              "aria-label": eA,
                              children: (0, r.jsx)(v.ehD, {}),
                            }),
                          }),
                        }),
                        (0, r.jsx)(h.hl, {
                          "aria-label": eA,
                          align: "end",
                          variant: "menu",
                          children: (0, r.jsxs)("div", {
                            className: "flex flex-col items-start gap-2 p-2 text-sm text-secondary",
                            children: [ec, ek],
                          }),
                        }),
                      ],
                    })),
              (en[18] = ek),
              (en[19] = ec),
              (en[20] = eA),
              (en[21] = I))
            : (I = en[21]),
            en[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((E = (0, r.jsx)(c.A, {
                  id: "restricted.environmentSetup.configuration.network.title",
                  defaultMessage: "Public internet access",
                })),
                (en[22] = E))
              : (E = en[22]),
            en[23] !== I
              ? ((z = (0, r.jsx)(x.X.Header, {
                  className: "select-none",
                  size: "base",
                  spacing: "compact",
                  actions: I,
                  title: E,
                })),
                (en[23] = I),
                (en[24] = z))
              : (z = en[24]))
          let e_ = ea ? ei : null
          ;(en[25] !== eS || en[26] !== es || en[27] !== ew
            ? ((T = (e) => {
                e && ej({ packageManagers: ew, domains: eS })
                let t = ew ? "package_managers" : "none"
                es({ networkEnabled: e || ew || eS.length > 0, networkPreset: e ? "all" : t, networkDomains: eS })
              }),
              (en[25] = eS),
              (en[26] = es),
              (en[27] = ew),
              (en[28] = T))
            : (T = en[28]),
            en[29] !== ea || en[30] !== eg || en[31] !== ex || en[32] !== T
              ? ((L = (0, r.jsx)(g.l, { ariaLabel: eg, checked: ex, disabled: ea, onChange: T })),
                (en[29] = ea),
                (en[30] = eg),
                (en[31] = ex),
                (en[32] = T),
                (en[33] = L))
              : (L = en[33]),
            en[34] !== eg || en[35] !== e_ || en[36] !== L
              ? ((D = (0, r.jsx)(S.V, { label: eg, reason: e_, children: L })),
                (en[34] = eg),
                (en[35] = e_),
                (en[36] = L),
                (en[37] = D))
              : (D = en[37]),
            en[38] === Symbol.for("react.memo_cache_sentinel")
              ? ((O = (0, r.jsx)(c.A, {
                  id: "restricted.environmentSetup.configuration.network.label",
                  defaultMessage: "Enable all public internet access",
                })),
                (en[38] = O))
              : (O = en[38]),
            en[39] !== eu || en[40] !== D
              ? ((R = (0, r.jsx)(b.ic, {
                  description: eu,
                  className: "select-none",
                  controlSizing: "content",
                  variant: "featured",
                  size: "compact",
                  control: D,
                  label: O,
                })),
                (en[39] = eu),
                (en[40] = D),
                (en[41] = R))
              : (R = en[41]))
          let eC = ex && "opacity-50"
          en[42] !== eC ? (($ = (0, l.A)("select-none", eC)), (en[42] = eC), (en[43] = $)) : ($ = en[43])
          let eN = ea ? ei : null,
            eP = ex ? "disabled:opacity-100" : void 0,
            eI = ea || ex
          ;(en[44] !== eS || en[45] !== es
            ? ((V = (e) => {
                es({ networkEnabled: e || eS.length > 0, networkPreset: e ? "package_managers" : "none" })
              }),
              (en[44] = eS),
              (en[45] = es),
              (en[46] = V))
            : (V = en[46]),
            en[47] !== ew || en[48] !== eM || en[49] !== eP || en[50] !== eI || en[51] !== V
              ? ((H = (0, r.jsx)(g.l, { ariaLabel: eM, checked: ew, className: eP, disabled: eI, onChange: V })),
                (en[47] = ew),
                (en[48] = eM),
                (en[49] = eP),
                (en[50] = eI),
                (en[51] = V),
                (en[52] = H))
              : (H = en[52]),
            en[53] !== eM || en[54] !== eN || en[55] !== H
              ? ((U = (0, r.jsx)(S.V, { label: eM, reason: eN, children: H })),
                (en[53] = eM),
                (en[54] = eN),
                (en[55] = H),
                (en[56] = U))
              : (U = en[56]),
            en[57] === Symbol.for("react.memo_cache_sentinel")
              ? ((B = (0, r.jsx)(c.A, {
                  id: "environmentSetup.configuration.network.packageManagers",
                  defaultMessage: "Enable package manager domains",
                })),
                (en[57] = B))
              : (B = en[57]),
            en[58] !== ed
              ? ((q =
                  ed ??
                  (0, r.jsx)(c.A, {
                    id: "environmentSetup.configuration.network.presets.tooltip",
                    defaultMessage: "View domain presets",
                  })),
                (en[58] = ed),
                (en[59] = q))
              : (q = en[59]),
            en[60] !== eh
              ? ((W = eh.formatMessage({
                  id: "environmentSetup.configuration.network.presets.about",
                  defaultMessage: "About allowed domain presets",
                })),
                (en[60] = eh),
                (en[61] = W))
              : (W = en[61]),
            en[62] === Symbol.for("react.memo_cache_sentinel")
              ? ((F = (0, r.jsx)(f.I, { asset: i.c })), (en[62] = F))
              : (F = en[62]),
            en[63] !== W
              ? ((K = (0, r.jsx)(u.$, {
                  "aria-label": W,
                  color: "ghostSecondary",
                  size: "inline",
                  type: "button",
                  onClick: M,
                  children: F,
                })),
                (en[63] = W),
                (en[64] = K))
              : (K = en[64]),
            en[65] !== q || en[66] !== K
              ? ((Z = (0, r.jsxs)("span", {
                  className: "flex items-center gap-1",
                  children: [B, (0, r.jsx)(a.m, { content: q, children: K })],
                })),
                (en[65] = q),
                (en[66] = K),
                (en[67] = Z))
              : (Z = en[67]),
            en[68] !== eo || en[69] !== $ || en[70] !== U || en[71] !== Z
              ? ((Q = (0, r.jsx)(b.ic, {
                  description: eo,
                  className: $,
                  controlSizing: "content",
                  variant: "featured",
                  size: "compact",
                  control: U,
                  label: Z,
                })),
                (en[68] = eo),
                (en[69] = $),
                (en[70] = U),
                (en[71] = Z),
                (en[72] = Q))
              : (Q = en[72]))
          let eE = ea || ex,
            ez = ea ? ei : void 0
          return (
            en[73] !== ev ? ((G = ev.filter(w)), (en[73] = ev), (en[74] = G)) : (G = en[74]),
            en[75] !== es || en[76] !== ew
              ? ((Y = (e) =>
                  es({
                    networkDomains: e,
                    networkEnabled: ew || e.length > 0,
                    networkPreset: ew ? "package_managers" : "none",
                  })),
                (en[75] = es),
                (en[76] = ew),
                (en[77] = Y))
              : (Y = en[77]),
            en[78] !== eS || en[79] !== eE || en[80] !== ez || en[81] !== G || en[82] !== Y
              ? ((J = (0, r.jsx)(y.y, { disabled: eE, disabledTooltip: ez, domains: eS, issues: G, onChange: Y })),
                (en[78] = eS),
                (en[79] = eE),
                (en[80] = ez),
                (en[81] = G),
                (en[82] = Y),
                (en[83] = J))
              : (J = en[83]),
            en[84] !== ef || en[85] !== R || en[86] !== Q || en[87] !== J
              ? ((X = (0, r.jsxs)(j.t, { children: [R, Q, J, ef] })),
                (en[84] = ef),
                (en[85] = R),
                (en[86] = Q),
                (en[87] = J),
                (en[88] = X))
              : (X = en[88]),
            en[89] !== ep || en[90] !== X
              ? ((ee = (0, r.jsxs)(x.X.Content, { children: [ep, X] })), (en[89] = ep), (en[90] = X), (en[91] = ee))
              : (ee = en[91]),
            en[92] !== z || en[93] !== ee
              ? ((et = (0, r.jsxs)("section", {
                  className: "flex flex-col",
                  "data-environment-section": "network",
                  children: [z, ee],
                })),
                (en[92] = z),
                (en[93] = ee),
                (en[94] = et))
              : (et = en[94]),
            et
          )
        },
      },
    )
  },
  KEmQ(e, t, n) {
    n.d(t, { j: () => M, G: () => w })
    var r = n("ABep"),
      s = n("QosV"),
      a = n("slpy"),
      i = n("zd8w"),
      l = n("Wf1j"),
      o = n("oyxz"),
      d = n("bVeK"),
      c = n("BSnr"),
      u = n("AWNZ"),
      m = n("ZEx5"),
      p = n("KZOJ"),
      f = n("fUey"),
      v = n("NxjN"),
      h = n("Sm6l"),
      g = n("JNtf"),
      x = n("mUDD"),
      b = n("BExl"),
      j = n("ZRUt"),
      y = n("K489")
    function S(e) {
      let t,
        n,
        a,
        l,
        d,
        c,
        u,
        m,
        p,
        f,
        v,
        S,
        w,
        M = (0, s.c)(42),
        { initialRepositoryIds: A, initialSelections: k, hasConflict: _, onClose: C, onSave: N } = e,
        [P, I] = (0, i.useState)(A),
        [E, z] = (0, i.useState)(k)
      M[0] !== A || M[1] !== P
        ? ((t = P.length !== A.length || P.some((e) => !A.includes(e))), (M[0] = A), (M[1] = P), (M[2] = t))
        : (t = M[2])
      let T = t
      if (M[3] !== A || M[4] !== P || M[5] !== E) {
        let e
        ;(M[7] !== A || M[8] !== E
          ? ((e = (e) =>
              !A.includes(e) &&
              !E.find((t) => {
                let { repository: n } = t
                return n.id === e
              })?.repository.default_branch),
            (M[7] = A),
            (M[8] = E),
            (M[9] = e))
          : (e = M[9]),
          (n = P.some(e)),
          (M[3] = A),
          (M[4] = P),
          (M[5] = E),
          (M[6] = n))
      } else n = M[6]
      let L = n,
        D = !_ && !L && T && P.length <= 16
      ;(M[10] !== C
        ? ((a = (e) => {
            e || C()
          }),
          (M[10] = C),
          (M[11] = a))
        : (a = M[11]),
        M[12] !== D || M[13] !== C || M[14] !== N || M[15] !== P || M[16] !== E
          ? ((l = (e) => {
              if ((e.preventDefault(), e.stopPropagation(), !D)) return
              let t = E.filter((e) => {
                let { repository: t } = e
                return P.includes(t.id)
              })
              ;(N(P, t), C())
            }),
            (M[12] = D),
            (M[13] = C),
            (M[14] = N),
            (M[15] = P),
            (M[16] = E),
            (M[17] = l))
          : (l = M[17]),
        M[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, r.jsx)(g.L3, {
              children: (0, r.jsx)(o.A, {
                id: "environmentSetup.repositories.addTitle",
                defaultMessage: "Add git repository",
              }),
            })),
            (M[18] = d))
          : (d = M[18]),
        M[19] !== P || M[20] !== E
          ? ((c = (e, t) => {
              let n = e.repository.id
              ;(I(t ? [...P, n] : P.filter((e) => e !== n)),
                z([
                  ...E.filter((e) => {
                    let { repository: t } = e
                    return t.id !== n
                  }),
                  ...(t ? [e] : []),
                ]))
            }),
            (M[19] = P),
            (M[20] = E),
            (M[21] = c))
          : (c = M[21]),
        M[22] !== _ || M[23] !== P || M[24] !== c
          ? ((u = (0, r.jsx)(b.CloudEnvironmentRepositoryPicker, {
              disabled: _,
              headerAlignment: "start",
              configureInAccountMenu: !0,
              selectedRepositoryIds: P,
              maxRepositories: 16,
              header: d,
              onChange: c,
            })),
            (M[22] = _),
            (M[23] = P),
            (M[24] = c),
            (M[25] = u))
          : (u = M[25]),
        M[26] !== _ ? ((m = _ ? (0, r.jsx)(j.A, {}) : null), (M[26] = _), (M[27] = m)) : (m = M[27]),
        M[28] !== L
          ? ((p = L ? (0, r.jsx)(y.o, { issue: { code: "repository" } }) : null), (M[28] = L), (M[29] = p))
          : (p = M[29]))
      let O = !D
      return (
        M[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)(o.A, { id: "environmentSetup.repositories.setUp", defaultMessage: "Save" })), (M[30] = f))
          : (f = M[30]),
        M[31] !== O
          ? ((v = (0, r.jsx)(x.Es, {
              children: (0, r.jsx)(h.$, { color: "primary", size: "dialog", type: "submit", disabled: O, children: f }),
            })),
            (M[31] = O),
            (M[32] = v))
          : (v = M[32]),
        M[33] !== v || M[34] !== l || M[35] !== u || M[36] !== m || M[37] !== p
          ? ((S = (0, r.jsxs)(x.R4, { as: "form", size: "viewport", onSubmit: l, children: [u, m, p, v] })),
            (M[33] = v),
            (M[34] = l),
            (M[35] = u),
            (M[36] = m),
            (M[37] = p),
            (M[38] = S))
          : (S = M[38]),
        M[39] !== S || M[40] !== a
          ? ((w = (0, r.jsx)(g.lG, {
              open: !0,
              size: "compact",
              dialogCloseClassName: "top-5.5!",
              onOpenChange: a,
              children: S,
            })),
            (M[39] = S),
            (M[40] = a),
            (M[41] = w))
          : (w = M[41]),
        w
      )
    }
    function w(e) {
      let t,
        n,
        a,
        i,
        l,
        o = (0, s.c)(21),
        {
          config: d,
          isReadOnly: c,
          readOnlyTooltip: u,
          onChange: m,
          configuration: p,
          draft: f,
          panelState: v,
          issues: h,
          showHeading: g,
        } = e,
        x = void 0 === c || c
      o[0] !== h ? ((t = void 0 === h ? [] : h), (o[0] = h), (o[1] = t)) : (t = o[1])
      let b = t,
        j = void 0 === g || g,
        y = f.repositories
      return (
        o[2] !== v?.repositorySelections
          ? ((n = v?.repositorySelections ?? []), (o[2] = v?.repositorySelections), (o[3] = n))
          : (n = o[3]),
        o[4] !== p?.repositoryNamesById
          ? ((a = p?.repositoryNamesById ?? {}), (o[4] = p?.repositoryNamesById), (o[5] = a))
          : (a = o[5]),
        o[6] !== d?.draft?.id || o[7] !== d?.draft?.revision || o[8] !== d?.id || o[9] !== d?.version_id
          ? ((i = JSON.stringify([d?.id, d?.version_id, d?.draft?.id, d?.draft?.revision])),
            (o[6] = d?.draft?.id),
            (o[7] = d?.draft?.revision),
            (o[8] = d?.id),
            (o[9] = d?.version_id),
            (o[10] = i))
          : (i = o[10]),
        o[11] !== f.repositories ||
        o[12] !== x ||
        o[13] !== b ||
        o[14] !== m ||
        o[15] !== u ||
        o[16] !== j ||
        o[17] !== n ||
        o[18] !== a ||
        o[19] !== i
          ? ((l = (0, r.jsx)(M, {
              repositoryIds: y,
              selections: n,
              repositoryNames: a,
              revision: i,
              isReadOnly: x,
              readOnlyTooltip: u,
              onChange: m,
              issues: b,
              showHeading: j,
            })),
            (o[11] = f.repositories),
            (o[12] = x),
            (o[13] = b),
            (o[14] = m),
            (o[15] = u),
            (o[16] = j),
            (o[17] = n),
            (o[18] = a),
            (o[19] = i),
            (o[20] = l))
          : (l = o[20]),
        l
      )
    }
    function M(e) {
      let t,
        n,
        h,
        g,
        x,
        b,
        j,
        w,
        M,
        A = (0, s.c)(47),
        {
          repositoryIds: k,
          selections: _,
          repositoryNames: C,
          revision: N,
          isReadOnly: P,
          readOnlyTooltip: I,
          onChange: E,
          issues: z,
          showHeading: T,
        } = e
      A[0] !== z ? ((t = void 0 === z ? [] : z), (A[0] = z), (A[1] = t)) : (t = A[1])
      let L = t,
        D = void 0 === T || T,
        O = (0, l.A)(),
        [R, $] = (0, i.useState)(null)
      if (
        (P && null != R && $(null),
        A[2] !== O || A[3] !== P || A[4] !== E || A[5] !== I || A[6] !== k || A[7] !== N || A[8] !== _
          ? ((n =
              null == E
                ? void 0
                : (0, r.jsx)(v.F, {
                    "aria-label": O.formatMessage({
                      id: "environmentSetup.repositories.addLabel",
                      defaultMessage: "Manage repositories",
                    }),
                    type: "button",
                    "aria-haspopup": "dialog",
                    color: "secondary",
                    size: "settingsAction",
                    disabled: P,
                    tooltipContent: P ? I : null,
                    onClick: () => $({ revision: N, repositoryIds: k, selections: _ }),
                    children: (0, r.jsx)(o.A, { id: "environmentSetup.repositories.add", defaultMessage: "Manage" }),
                  })),
            (A[2] = O),
            (A[3] = P),
            (A[4] = E),
            (A[5] = I),
            (A[6] = k),
            (A[7] = N),
            (A[8] = _),
            (A[9] = n))
          : (n = A[9]),
        A[10] !== D
          ? ((h = D
              ? (0, r.jsx)(o.A, {
                  id: "restricted.environmentSetup.sidePanel.repositories",
                  defaultMessage: "Repositories",
                })
              : null),
            (A[10] = D),
            (A[11] = h))
          : (h = A[11]),
        A[12] !== n || A[13] !== h
          ? ((g = (0, r.jsx)(c.X.Header, {
              className: "select-none",
              actions: n,
              size: "base",
              spacing: "compact",
              title: h,
            })),
            (A[12] = n),
            (A[13] = h),
            (A[14] = g))
          : (g = A[14]),
        A[15] !== k ? ((x = 0 === k.length ? [""] : k), (A[15] = k), (A[16] = x)) : (x = A[16]),
        A[17] !== O ||
          A[18] !== P ||
          A[19] !== L ||
          A[20] !== E ||
          A[21] !== I ||
          A[22] !== k ||
          A[23] !== C ||
          A[24] !== _ ||
          A[25] !== x)
      ) {
        let e
        ;(A[27] !== O ||
        A[28] !== P ||
        A[29] !== L ||
        A[30] !== E ||
        A[31] !== I ||
        A[32] !== k ||
        A[33] !== C ||
        A[34] !== _
          ? ((e = (e, t) => {
              let n =
                  C[e] ??
                  _.find((t) => {
                    let { repository: n } = t
                    return n.id === e
                  })?.repository.repository_full_name ??
                  e,
                s = Math.max(0, n.lastIndexOf("/"))
              return (0, r.jsx)(
                u.ic,
                {
                  className: "select-none",
                  variant: "featured",
                  controlSizing: "content",
                  control:
                    "" === e || null == E
                      ? null
                      : (0, r.jsx)(v.F, {
                          type: "button",
                          color: "ghostSecondary",
                          size: "iconSm",
                          disabled: P,
                          tooltipContent: P ? I : null,
                          "aria-label": O.formatMessage(
                            { id: "environmentSetup.repositories.removeLabel", defaultMessage: "Remove {repository}" },
                            { repository: n },
                          ),
                          onClick: () =>
                            E(
                              k.filter((t) => t !== e),
                              _.filter((t) => {
                                let { repository: n } = t
                                return n.id !== e
                              }),
                            ),
                          children: (0, r.jsx)(d.cSG, {}),
                        }),
                  size: "compact",
                  description:
                    null ==
                    L.find((e) => {
                      let { field: n } = e
                      return n === `repository-${t}`
                    })
                      ? void 0
                      : (0, r.jsx)("span", {
                          tabIndex: -1,
                          "data-environment-invalid": "true",
                          children: (0, r.jsx)(y.o, { issue: { field: `repository-${t}`, code: "repository" } }),
                        }),
                  icon:
                    "" === e
                      ? (0, r.jsx)(d.uH1, {})
                      : (0, r.jsx)(p.R, { connectorId: (0, f.ns)(e).connectorId, className: "icon-xs" }),
                  label: n
                    ? (0, r.jsx)(a.m, {
                        content: n,
                        preventDismissOnFastClick: !0,
                        children: (0, r.jsx)(a.m.TriggerDecorator, {
                          children: (0, r.jsxs)("span", {
                            "aria-label": n,
                            className: "flex max-w-full min-w-0 text-start",
                            children: [
                              (0, r.jsx)("span", { className: "min-w-0 truncate", children: n.slice(0, s) }),
                              (0, r.jsx)("span", { className: "max-w-full shrink-0 truncate", children: n.slice(s) }),
                            ],
                          }),
                        }),
                      })
                    : (0, r.jsx)(o.A, {
                        id: "restricted.environmentSetup.configuration.repository.empty",
                        defaultMessage: "No repository selected",
                      }),
                },
                t,
              )
            }),
            (A[27] = O),
            (A[28] = P),
            (A[29] = L),
            (A[30] = E),
            (A[31] = I),
            (A[32] = k),
            (A[33] = C),
            (A[34] = _),
            (A[35] = e))
          : (e = A[35]),
          (b = x.map(e)),
          (A[17] = O),
          (A[18] = P),
          (A[19] = L),
          (A[20] = E),
          (A[21] = I),
          (A[22] = k),
          (A[23] = C),
          (A[24] = _),
          (A[25] = x),
          (A[26] = b))
      } else b = A[26]
      return (
        A[36] !== b
          ? ((j = (0, r.jsx)(c.X.Content, { children: (0, r.jsx)(m.t, { children: b }) })), (A[36] = b), (A[37] = j))
          : (j = A[37]),
        A[38] !== R || A[39] !== P || A[40] !== E || A[41] !== N
          ? ((w =
              null == R || P || null == E
                ? null
                : (0, r.jsx)(S, {
                    initialRepositoryIds: R.repositoryIds,
                    initialSelections: R.selections,
                    hasConflict: N !== R.revision,
                    onClose: () => $(null),
                    onSave: E,
                  })),
            (A[38] = R),
            (A[39] = P),
            (A[40] = E),
            (A[41] = N),
            (A[42] = w))
          : (w = A[42]),
        A[43] !== w || A[44] !== g || A[45] !== j
          ? ((M = (0, r.jsxs)(c.X, { children: [g, j, w] })), (A[43] = w), (A[44] = g), (A[45] = j), (A[46] = M))
          : (M = A[46]),
        M
      )
    }
  },
  K489(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("slpy"),
      i = n("NhqU"),
      l = n("on57"),
      o = n("zd8w"),
      d = n("Wf1j"),
      c = n("oyxz"),
      u = n("Qgfj"),
      m = n("HOLv"),
      p = n("nzx4")
    function f(e) {
      let t,
        n,
        l,
        u,
        f,
        v,
        h,
        g,
        x,
        j,
        y,
        S,
        w,
        M,
        A,
        k,
        _ = (0, s.c)(45),
        { id: C, issue: N } = e,
        P = (0, d.A)(),
        I = (0, o.useId)(),
        E = (0, o.useId)(),
        [z, T] = (0, o.useState)(!1),
        L = b[`${N.code}Label`],
        D = b[`${N.code}Help`],
        O = `${I}-summary`
      ;(_[0] !== L ? ((t = (0, r.jsx)(c.A, { ...L })), (_[0] = L), (_[1] = t)) : (t = _[1]),
        _[2] !== O || _[3] !== t
          ? ((n = (0, r.jsx)("span", { id: O, className: "select-none", children: t })),
            (_[2] = O),
            (_[3] = t),
            (_[4] = n))
          : (n = _[4]),
        _[5] !== D ? ((l = (0, r.jsx)(c.A, { ...D })), (_[5] = D), (_[6] = l)) : (l = _[6]),
        _[7] !== P ? ((u = P.formatMessage(b.details)), (_[7] = P), (_[8] = u)) : (u = _[8]))
      let R = `${I}-summary`
      return (
        _[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)(m.I, { asset: i.c })), (_[9] = f))
          : (f = _[9]),
        _[10] !== u || _[11] !== R
          ? ((v = (0, r.jsx)(p.Wv, {
              asChild: !0,
              children: (0, r.jsx)("button", {
                "aria-label": u,
                "aria-describedby": R,
                className:
                  "inline-flex cursor-interaction rounded-sm focus-visible:outline-2 focus-visible:outline-ring",
                type: "button",
                children: f,
              }),
            })),
            (_[10] = u),
            (_[11] = R),
            (_[12] = v))
          : (v = _[12]),
        _[13] !== z || _[14] !== l || _[15] !== v
          ? ((h = (0, r.jsx)(a.m, { disabled: z, content: l, children: v })),
            (_[13] = z),
            (_[14] = l),
            (_[15] = v),
            (_[16] = h))
          : (h = _[16]),
        _[17] !== L ? ((g = (0, r.jsx)(c.A, { ...L })), (_[17] = L), (_[18] = g)) : (g = _[18]),
        _[19] !== g || _[20] !== I
          ? ((x = (0, r.jsx)(p.eO, { id: I, children: g })), (_[19] = g), (_[20] = I), (_[21] = x))
          : (x = _[21]),
        _[22] !== D ? ((j = (0, r.jsx)(c.A, { ...D })), (_[22] = D), (_[23] = j)) : (j = _[23]),
        _[24] !== E || _[25] !== j
          ? ((y = (0, r.jsx)("p", { id: E, children: j })), (_[24] = E), (_[25] = j), (_[26] = y))
          : (y = _[26]),
        _[27] !== N.valuesSaved
          ? ((S = N.valuesSaved ? (0, r.jsx)("p", { children: (0, r.jsx)(c.A, { ...b.valuesSaved }) }) : null),
            (_[27] = N.valuesSaved),
            (_[28] = S))
          : (S = _[28]),
        _[29] !== x || _[30] !== y || _[31] !== S
          ? ((w = (0, r.jsxs)("div", {
              className: "flex flex-col gap-3 p-2 text-sm select-text",
              children: [x, y, S],
            })),
            (_[29] = x),
            (_[30] = y),
            (_[31] = S),
            (_[32] = w))
          : (w = _[32]),
        _[33] !== E || _[34] !== w || _[35] !== I
          ? ((M = (0, r.jsx)(p.hl, {
              "aria-labelledby": I,
              "aria-describedby": E,
              size: "large",
              variant: "menu",
              children: w,
            })),
            (_[33] = E),
            (_[34] = w),
            (_[35] = I),
            (_[36] = M))
          : (M = _[36]),
        _[37] !== z || _[38] !== M || _[39] !== h
          ? ((A = (0, r.jsxs)(p.AM, { open: z, onOpenChange: T, children: [h, M] })),
            (_[37] = z),
            (_[38] = M),
            (_[39] = h),
            (_[40] = A))
          : (A = _[40]),
        _[41] !== C || _[42] !== A || _[43] !== n
          ? ((k = (0, r.jsxs)("span", {
              id: C,
              className: "inline-flex items-center gap-1 text-xs text-danger",
              children: [n, A],
            })),
            (_[41] = C),
            (_[42] = A),
            (_[43] = n),
            (_[44] = k))
          : (k = _[44]),
        k
      )
    }
    function v(e) {
      let { valuesSaved: t } = e
      return t
    }
    function h(e) {
      let { field: t } = e
      return null == t
    }
    function g(e) {
      let { field: t } = e
      return null != t
    }
    function x(e) {
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
    let b = (0, u.YK)({
      "runtime-rejectedLabel": {
        id: "environmentSetup.saveErrors.runtimeRejected.label",
        defaultMessage: "Draft saved, update rejected",
      },
      "runtime-rejectedHelp": {
        id: "environmentSetup.saveErrors.runtimeRejected.help",
        defaultMessage:
          "Your draft was saved, but the build environment rejected the update. Reload the draft before retrying",
      },
      "runtime-unconfirmedLabel": {
        id: "environmentSetup.saveErrors.runtimeUnconfirmed.label",
        defaultMessage: "Draft saved, update unconfirmed",
      },
      "runtime-unconfirmedHelp": {
        id: "environmentSetup.saveErrors.runtimeUnconfirmed.help",
        defaultMessage:
          "Your draft was saved, but we couldn\u2019t confirm the build environment was updated. Reload the draft before retrying",
      },
      "repository-threadLabel": {
        id: "environmentSetup.saveErrors.repositoryThread.label",
        defaultMessage: "Open the environment\u2019s setup chat",
      },
      "repository-threadHelp": {
        id: "environmentSetup.saveErrors.repositoryThread.help",
        defaultMessage:
          "Open this environment\u2019s setup chat and save the repository changes there so they can be applied to its workspace",
      },
      "tcp-accessLabel": {
        id: "environmentSetup.saveErrors.tcpAccess.label",
        defaultMessage: "Check TCP destinations",
      },
      "tcp-accessHelp": {
        id: "environmentSetup.saveErrors.tcpAccess.help",
        defaultMessage: "Enter valid private IPv4 CIDRs or hostnames in TCP destinations",
      },
      "tcp-unavailableLabel": {
        id: "environmentSetup.saveErrors.tcpUnavailable.label",
        defaultMessage: "TCP access unavailable",
      },
      "tcp-unavailableHelp": {
        id: "environmentSetup.saveErrors.tcpUnavailable.help",
        defaultMessage: "Refresh TCP support and check the VPN configuration, or clear all TCP grants before saving",
      },
      "too-largeLabel": { id: "environmentSetup.saveErrors.tooLarge.label", defaultMessage: "Configuration too large" },
      "too-largeHelp": {
        id: "environmentSetup.saveErrors.tooLarge.help",
        defaultMessage: "Reduce the domain list, scripts, or other settings, then save again",
      },
      nameLabel: { id: "restricted.environmentSetup.saveErrors.name.label", defaultMessage: "Name required" },
      repositoryLabel: {
        id: "restricted.environmentSetup.saveErrors.repository.label",
        defaultMessage: "Check repository",
      },
      keyLabel: { id: "restricted.environmentSetup.saveErrors.key.label", defaultMessage: "Invalid key" },
      duplicateLabel: { id: "restricted.environmentSetup.saveErrors.duplicate.label", defaultMessage: "Duplicate key" },
      reservedLabel: { id: "restricted.environmentSetup.saveErrors.reserved.label", defaultMessage: "Reserved key" },
      "reserved-targetLabel": {
        id: "restricted.environmentSetup.saveErrors.reservedTarget.label",
        defaultMessage: "Reserved key",
      },
      domainsLabel: { id: "restricted.environmentSetup.saveErrors.domains.label", defaultMessage: "Check domains" },
      valueLabel: { id: "restricted.environmentSetup.saveErrors.value.label", defaultMessage: "Value required" },
      connectionLabel: {
        id: "restricted.environmentSetup.saveErrors.connection.label",
        defaultMessage: "Check connection",
      },
      "save-valueLabel": {
        id: "restricted.environmentSetup.saveErrors.saveValue.label",
        defaultMessage: "Couldn\u2019t save value",
      },
      unconfirmedLabel: {
        id: "restricted.environmentSetup.saveErrors.unconfirmed.label",
        defaultMessage: "Save unconfirmed",
      },
      conflictLabel: {
        id: "restricted.environmentSetup.saveErrors.conflict.label",
        defaultMessage: "Environment changed",
      },
      authenticationLabel: {
        id: "restricted.environmentSetup.saveErrors.authentication.label",
        defaultMessage: "Check sign-in",
      },
      permissionLabel: {
        id: "restricted.environmentSetup.saveErrors.permission.label",
        defaultMessage: "Permission denied",
      },
      "not-foundLabel": {
        id: "restricted.environmentSetup.saveErrors.notFound.label",
        defaultMessage: "No longer available",
      },
      unavailableLabel: {
        id: "restricted.environmentSetup.saveErrors.unavailable.label",
        defaultMessage: "Save unconfirmed",
      },
      requestLabel: {
        id: "restricted.environmentSetup.saveErrors.request.label",
        defaultMessage: "Couldn\u2019t save environment",
      },
      nameHelp: {
        id: "restricted.environmentSetup.saveErrors.name.help",
        defaultMessage: "Enter a name for this environment",
      },
      repositoryHelp: {
        id: "restricted.environmentSetup.saveErrors.repository.help",
        defaultMessage: "Select a repository with an available default branch before saving",
      },
      keyHelp: {
        id: "restricted.environmentSetup.saveErrors.key.help",
        defaultMessage:
          "Use a letter or underscore first, followed by letters, digits, or underscores, without surrounding spaces",
      },
      duplicateHelp: {
        id: "restricted.environmentSetup.saveErrors.duplicate.help",
        defaultMessage: "Each secret must have a unique key; rename this secret or remove the duplicate",
      },
      reservedHelp: {
        id: "restricted.environmentSetup.saveErrors.reserved.help",
        defaultMessage:
          "This key is reserved for platform configuration; rename or remove this proxy secret before saving",
      },
      "reserved-targetHelp": {
        id: "restricted.environmentSetup.saveErrors.reservedTarget.help",
        defaultMessage:
          "One or more proxy secrets use a key reserved for platform configuration. Rename or remove those secrets before saving; your edits are still here.",
      },
      domainsHelp: {
        id: "restricted.environmentSetup.saveErrors.domains.help",
        defaultMessage:
          "Use hostnames without URLs, paths, or ports; each proxy secret needs at least one exact hostname",
      },
      valueHelp: {
        id: "restricted.environmentSetup.saveErrors.value.help",
        defaultMessage: "Enter a value for this required secret before continuing the review",
      },
      connectionHelp: {
        id: "restricted.environmentSetup.saveErrors.connection.help",
        defaultMessage:
          "Use unique connections and aliases, with at most 16 attachments; aliases start with an uppercase letter followed by up to 63 uppercase letters, digits, or underscores",
      },
      "save-valueHelp": {
        id: "restricted.environmentSetup.saveErrors.saveValue.help",
        defaultMessage: "The service couldn\u2019t save this value; your edits are still here, so try saving again",
      },
      unconfirmedHelp: {
        id: "restricted.environmentSetup.saveErrors.unconfirmed.manualRetryHelp",
        defaultMessage:
          "The service didn\u2019t confirm whether this value was saved. Your input is still here. Saving again may create another stored value.",
      },
      conflictHelp: {
        id: "restricted.environmentSetup.saveErrors.conflict.help",
        defaultMessage:
          "This environment changed elsewhere. Your edits are still here; review the refreshed configuration before saving again.",
      },
      authenticationHelp: {
        id: "restricted.environmentSetup.saveErrors.authentication.help",
        defaultMessage: "Sign in to the account and workspace where you started setup, then try saving again",
      },
      permissionHelp: {
        id: "restricted.environmentSetup.saveErrors.permission.help",
        defaultMessage:
          "You don\u2019t have permission to save these changes; check your account and environment access",
      },
      "not-foundHelp": {
        id: "restricted.environmentSetup.saveErrors.notFound.help",
        defaultMessage:
          "The environment or a referenced resource is no longer available; reload it to check its current state",
      },
      unavailableHelp: {
        id: "restricted.environmentSetup.saveErrors.unavailable.help",
        defaultMessage:
          "The service didn\u2019t return a confirmed result. Your edits are still here; reload the environment to check whether it saved before trying again.",
      },
      requestHelp: {
        id: "restricted.environmentSetup.saveErrors.request.explanation",
        defaultMessage:
          "The service rejected this save without identifying a field. Your edits are still here. Try saving again.",
      },
      details: { id: "restricted.environmentSetup.saveErrors.details.button", defaultMessage: "Error details" },
      valuesSaved: {
        id: "restricted.environmentSetup.saveErrors.valuesSaved.help",
        defaultMessage:
          "Some values were already saved and will be reused on retry; updates to existing values already affect other bindings that use them",
      },
    })
    n.d(
      t,
      {},
      {
        B: function (e) {
          let t,
            n,
            a,
            i,
            o,
            d,
            u,
            m,
            p = (0, s.c)(26),
            { issues: j, announce: y, inBanner: S } = e,
            w = void 0 !== S && S
          if (0 === j.length) return null
          p[0] !== j ? ((t = j.filter(x)), (p[0] = j), (p[1] = t)) : (t = p[1])
          let M = t
          p[2] !== j ? ((n = j.filter(g)), (p[2] = j), (p[3] = n)) : (n = p[3])
          let A = n,
            k = !w && "text-xs"
          p[4] !== k
            ? ((a = (0, l.A)("flex min-w-0 flex-1 flex-col gap-1 text-danger select-none", k)), (p[4] = k), (p[5] = a))
            : (a = p[5])
          let _ = void 0 === y || y ? "alert" : void 0
          if (
            (p[6] !== M.length
              ? ((i =
                  M.length > 0
                    ? (0, r.jsx)(c.A, {
                        id: "restricted.environmentSetup.saveErrors.summary.invalid",
                        defaultMessage: "Fix {count, plural, one {# error} other {# errors}} to save",
                        values: { count: M.length },
                      })
                    : null),
                (p[6] = M.length),
                (p[7] = i))
              : (i = p[7]),
            p[8] !== A || p[9] !== M.length
              ? ((o =
                  0 === M.length && A.length > 0
                    ? (0, r.jsx)(c.A, {
                        id: "restricted.environmentSetup.saveErrors.summary.values",
                        defaultMessage: "Check {count, plural, one {# value save} other {# value saves}}",
                        values: { count: A.length },
                      })
                    : null),
                (p[8] = A),
                (p[9] = M.length),
                (p[10] = o))
              : (o = p[10]),
            p[11] !== w || p[12] !== j)
          ) {
            let e
            ;(p[14] !== w
              ? ((e = (e, t) =>
                  w
                    ? (0, r.jsx)(
                        "p",
                        { className: "select-text", children: (0, r.jsx)(c.A, { ...b[`${e.code}Help`] }) },
                        t,
                      )
                    : (0, r.jsx)(f, { issue: e }, t)),
                (p[14] = w),
                (p[15] = e))
              : (e = p[15]),
              (d = j.filter(h).map(e)),
              (p[11] = w),
              (p[12] = j),
              (p[13] = d))
          } else d = p[13]
          return (
            p[16] !== w || p[17] !== j
              ? ((u =
                  w && j.some(v)
                    ? (0, r.jsx)("p", { className: "select-text", children: (0, r.jsx)(c.A, { ...b.valuesSaved }) })
                    : null),
                (p[16] = w),
                (p[17] = j),
                (p[18] = u))
              : (u = p[18]),
            p[19] !== d || p[20] !== u || p[21] !== a || p[22] !== _ || p[23] !== i || p[24] !== o
              ? ((m = (0, r.jsxs)("div", { className: a, role: _, children: [i, o, d, u] })),
                (p[19] = d),
                (p[20] = u),
                (p[21] = a),
                (p[22] = _),
                (p[23] = i),
                (p[24] = o),
                (p[25] = m))
              : (m = p[25]),
            m
          )
        },
        o: f,
      },
    )
  },
  n0dE(e, t, n) {
    n.d(t, { m: () => z })
    var r = n("ABep"),
      s = n("QosV"),
      a = n("H7No"),
      i = n("on57"),
      l = n("zd8w"),
      o = n("Wf1j"),
      d = n("oyxz"),
      c = n("Qgfj"),
      u = n("Sm6l"),
      m = n("JNtf"),
      p = n("mUDD"),
      f = n("bVeK"),
      v = n("X3K1"),
      h = n("kPrN"),
      g = n("BSnr"),
      x = n("AWNZ"),
      b = n("ZEx5"),
      j = n("NxjN"),
      y = n("n6fU"),
      S = n("gz4m"),
      w = n("N0bB"),
      M = n("DBCl"),
      A = n("Ovip"),
      k = n("uNhY"),
      _ = n("RxZZ"),
      C = n("kkEw"),
      N = n("dDkj")
    function P(e) {
      let t,
        n,
        a,
        i,
        o,
        d,
        c,
        u,
        m = (0, s.c)(20),
        { label: p, language: f, value: v, onChange: h } = e
      m[0] !== p || m[1] !== f || m[2] !== v
        ? ((t = () => ({ name: p, lang: f, contents: v })), (m[0] = p), (m[1] = f), (m[2] = v), (m[3] = t))
        : (t = m[3])
      let [g] = (0, l.useState)(t),
        x = (0, N.P)(),
        b = (0, N._)(x),
        j = (0, _.iK)(M.oKj.lightCodeThemeId),
        y = (0, _.iK)(M.oKj.darkCodeThemeId)
      m[4] !== b || m[5] !== y || m[6] !== j
        ? ((n = "light" === b ? (0, C.oW)(j, "light") : (0, C.oW)(y, "dark")),
          (m[4] = b),
          (m[5] = y),
          (m[6] = j),
          (m[7] = n))
        : (n = m[7])
      let P = n
      ;(m[8] === Symbol.for("react.memo_cache_sentinel") ? ((a = { onAttach: I }), (m[8] = a)) : (a = m[8]),
        m[9] === Symbol.for("react.memo_cache_sentinel") ? ((i = (0, k.S)()), (m[9] = i)) : (i = m[9]))
      let z = P.name
      return (
        m[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, A.M)({
              includeDiffHeader: !1,
              includeSimpleLineSeparators: !1,
              rootSelector: "[data-file]",
              surface: "var(--color-surface)",
            })),
            (m[10] = o))
          : (o = m[10]),
        m[11] !== b || m[12] !== P.name
          ? ((d = {
              preferredHighlighter: i,
              disableFileHeader: !0,
              overflow: "wrap",
              theme: z,
              themeType: b,
              useTokenTransformer: !0,
              unsafeCSS: `${o}
              [data-file], [data-code] {
                min-height: inherit;
              }
              [data-code] {
                align-content: start;
              }
              [data-file] {
                /* Align the editor's caret and selection overlays to code rows. */
                --diffs-line-height: round(nearest, calc(var(--diffs-font-size, 12px) * 1.8), 1px);
                line-height: var(--diffs-line-height);
              }
            `,
            }),
            (m[11] = b),
            (m[12] = P.name),
            (m[13] = d))
          : (d = m[13]),
        m[14] !== h ? ((c = (e) => h(e.file.contents)), (m[14] = h), (m[15] = c)) : (c = m[15]),
        m[16] !== g || m[17] !== d || m[18] !== c
          ? ((u = (0, r.jsx)("div", {
              className: "max-h-96 overflow-y-auto",
              children: (0, r.jsx)(S.eo, {
                createEditor: E,
                children: (0, r.jsx)(w.Z, {
                  className:
                    "min-h-40 [--diffs-dark:currentColor] [--diffs-editor-selection-bg:var(--color-background-text-selection)] [--diffs-light:currentColor] [--diffs-min-number-column-width:1ch]",
                  disableWorkerPool: !0,
                  edit: !0,
                  editorOptions: a,
                  file: g,
                  options: d,
                  onEditChange: c,
                }),
              }),
            })),
            (m[16] = g),
            (m[17] = d),
            (m[18] = c),
            (m[19] = u))
          : (u = m[19]),
        u
      )
    }
    function I(e) {
      return e.focus({ lineNumber: 1 })
    }
    function E(e, t, n) {
      return new y.K(e, t, n)
    }
    function z(e) {
      let t,
        n,
        a,
        c,
        u,
        m,
        p = (0, s.c)(20),
        { baseline: v, draft: h, isReadOnly: y, readOnlyTooltip: S, showHeading: w, onDraftChange: M } = e,
        A = void 0 === w || w,
        k = (0, o.A)(),
        [_, C] = (0, l.useState)(null)
      return (
        y && null != _ && C(null),
        p[0] !== A
          ? ((t =
              A &&
              (0, r.jsx)(g.X.Header, {
                className: "select-none",
                size: "base",
                spacing: "compact",
                title: (0, r.jsx)(d.A, { ...O.scripts }),
              })),
            (p[0] = A),
            (p[1] = t))
          : (t = p[1]),
        p[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = ["setupScript", "startSkill"]), (p[2] = n))
          : (n = p[2]),
        p[3] !== h || p[4] !== k || p[5] !== y || p[6] !== S
          ? ((a = (0, r.jsx)(g.X.Content, {
              children: (0, r.jsx)(b.t, {
                children: n.map((e) =>
                  (0, r.jsx)(
                    x.ic,
                    {
                      className: "select-none",
                      controlSizing: "content",
                      variant: "featured",
                      size: "compact",
                      label: (0, r.jsxs)("div", {
                        className: "flex min-w-0 items-center justify-between gap-3",
                        children: [
                          (0, r.jsx)("span", {
                            className: "shrink-0 select-none",
                            children: (0, r.jsx)(d.A, { ...O[e] }),
                          }),
                          (0, r.jsx)("span", {
                            className: (0, i.A)("truncate text-secondary", h[e] && "font-mono"),
                            children: h[e] || (0, r.jsx)(d.A, { ...O.empty }),
                          }),
                        ],
                      }),
                      control: (0, r.jsx)(j.F, {
                        "aria-label": k.formatMessage(O[e]),
                        color: "ghost",
                        disabled: y,
                        tooltipContent: y ? S : null,
                        size: "icon",
                        onClick: () => C(e),
                        children: (0, r.jsx)(f.Npl, {}),
                      }),
                    },
                    e,
                  ),
                ),
              }),
            })),
            (p[3] = h),
            (p[4] = k),
            (p[5] = y),
            (p[6] = S),
            (p[7] = a))
          : (a = p[7]),
        p[8] !== t || p[9] !== a
          ? ((c = (0, r.jsxs)(g.X, { children: [t, a] })), (p[8] = t), (p[9] = a), (p[10] = c))
          : (c = p[10]),
        p[11] !== v || p[12] !== h || p[13] !== _ || p[14] !== y || p[15] !== M
          ? ((u =
              null == _ || y
                ? null
                : (0, r.jsx)(T, {
                    field: _,
                    baseline: null == v ? void 0 : (v["setupScript" === _ ? "install_script" : "start_skill"] ?? ""),
                    value: h[_] ?? "",
                    onClose: () => C(null),
                    onSave: (e) => {
                      ;(M({ [_]: e }), C(null))
                    },
                  })),
            (p[11] = v),
            (p[12] = h),
            (p[13] = _),
            (p[14] = y),
            (p[15] = M),
            (p[16] = u))
          : (u = p[16]),
        p[17] !== c || p[18] !== u
          ? ((m = (0, r.jsxs)(r.Fragment, { children: [c, u] })), (p[17] = c), (p[18] = u), (p[19] = m))
          : (m = p[19]),
        m
      )
    }
    function T(e) {
      let t,
        n,
        a,
        i,
        c,
        f,
        v,
        h,
        g,
        x,
        b,
        j = (0, s.c)(33),
        { field: y, baseline: S, value: w, onClose: M, onSave: A } = e,
        k = (0, o.A)(),
        [_, C] = (0, l.useState)(),
        [N, I] = (0, l.useState)(null == S || S === w),
        E = _ ?? w,
        z = null != S && S !== E,
        T = N || !z,
        R = "setupScript" === y ? "install.sh" : "SKILL.md"
      ;(j[0] !== M ? ((t = (e) => !e && M()), (j[0] = M), (j[1] = t)) : (t = j[1]),
        j[2] !== A || j[3] !== E
          ? ((n = (e) => {
              ;(e.preventDefault(), e.stopPropagation(), A(E))
            }),
            (j[2] = A),
            (j[3] = E),
            (j[4] = n))
          : (n = j[4]))
      let $ = O[y]
      return (
        j[5] !== $
          ? ((a = (0, r.jsx)(p.OO, {
              children: (0, r.jsx)(p.c7, { title: (0, r.jsx)(m.L3, { children: (0, r.jsx)(d.A, { ...$ }) }) }),
            })),
            (j[5] = $),
            (j[6] = a))
          : (a = j[6]),
        j[7] !== S || j[8] !== y || j[9] !== R || j[10] !== k || j[11] !== E || j[12] !== T || j[13] !== w
          ? ((i = (0, r.jsx)(p.OO, {
              children: (0, r.jsx)("div", {
                className: "overflow-hidden border border-subtle",
                children: T
                  ? (0, r.jsx)(
                      P,
                      {
                        label: k.formatMessage(O[y]),
                        language: "setupScript" === y ? "bash" : "markdown",
                        value: E,
                        onChange: C,
                      },
                      w,
                    )
                  : (0, r.jsx)(D, { baseline: S ?? "", filename: R, proposed: E }),
              }),
            })),
            (j[7] = S),
            (j[8] = y),
            (j[9] = R),
            (j[10] = k),
            (j[11] = E),
            (j[12] = T),
            (j[13] = w),
            (j[14] = i))
          : (i = j[14]),
        j[15] !== z || j[16] !== T
          ? ((c =
              z &&
              (0, r.jsx)(u.$, {
                color: "secondary",
                onClick: () => I(!T),
                children: T
                  ? (0, r.jsx)(d.A, { id: "environmentSetup.script.reviewChanges", defaultMessage: "Review changes" })
                  : (0, r.jsx)(d.A, { id: "environmentSetup.script.edit", defaultMessage: "Edit" }),
              })),
            (j[15] = z),
            (j[16] = T),
            (j[17] = c))
          : (c = j[17]),
        j[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)(d.A, {
              id: "restricted.environmentSetup.configuration.dialog.cancel",
              defaultMessage: "Cancel",
            })),
            (j[18] = f))
          : (f = j[18]),
        j[19] !== M
          ? ((v = (0, r.jsx)(u.$, { color: "secondary", onClick: M, children: f })), (j[19] = M), (j[20] = v))
          : (v = j[20]),
        j[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, r.jsx)(u.$, {
              color: "primary",
              type: "submit",
              children: (0, r.jsx)(d.A, {
                id: "restricted.environmentSetup.configuration.dialog.save",
                defaultMessage: "Save",
              }),
            })),
            (j[21] = h))
          : (h = j[21]),
        j[22] !== c || j[23] !== v
          ? ((g = (0, r.jsx)(p.OO, { children: (0, r.jsxs)(p.Es, { children: [c, v, h] }) })),
            (j[22] = c),
            (j[23] = v),
            (j[24] = g))
          : (g = j[24]),
        j[25] !== g || j[26] !== n || j[27] !== a || j[28] !== i
          ? ((x = (0, r.jsxs)(p.R4, {
              as: "form",
              size: "viewport",
              onKeyDownCapture: L,
              onSubmit: n,
              children: [a, i, g],
            })),
            (j[25] = g),
            (j[26] = n),
            (j[27] = a),
            (j[28] = i),
            (j[29] = x))
          : (x = j[29]),
        j[30] !== t || j[31] !== x
          ? ((b = (0, r.jsx)(m.lG, { open: !0, size: "xxwide", onOpenChange: t, children: x })),
            (j[30] = t),
            (j[31] = x),
            (j[32] = b))
          : (b = j[32]),
        b
      )
    }
    function L(e) {
      "Enter" === e.key &&
        (e.metaKey || e.ctrlKey) &&
        (e.preventDefault(), e.stopPropagation(), e.currentTarget.requestSubmit())
    }
    function D(e) {
      let t,
        n,
        o,
        c,
        u,
        m,
        p = (0, s.c)(17),
        { baseline: f, filename: g, proposed: x } = e,
        [b, j] = (0, l.useState)(!1)
      p[0] !== f || p[1] !== g || p[2] !== x
        ? ((t = (0, a.$)({ name: g, contents: f }, { name: g, contents: x })),
          (p[0] = f),
          (p[1] = g),
          (p[2] = x),
          (p[3] = t))
        : (t = p[3])
      let y = t,
        S = !b,
        w = b ? "relative" : "absolute inset-x-0 top-0"
      return (
        p[4] !== w
          ? ((n = (0, i.A)(
              "overflow-clip [contain:content] [--codex-diffs-surface:var(--color-surface)] [--diffs-min-number-column-width:1ch]",
              w,
            )),
            (p[4] = w),
            (p[5] = n))
          : (n = p[5]),
        p[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (e) => {
              e.shadowRoot?.querySelector("[data-line], [data-error-wrapper]") && j(!0)
            }),
            (p[6] = o))
          : (o = p[6]),
        p[7] !== y || p[8] !== n
          ? ((c = (0, r.jsx)(h.FileDiff, {
              className: n,
              diffStyle: "unified",
              expandUnchanged: !0,
              fileDiff: y,
              hunkSeparators: "simple",
              overflow: "wrap",
              onPostRender: o,
            })),
            (p[7] = y),
            (p[8] = n),
            (p[9] = c))
          : (c = p[9]),
        p[10] !== y || p[11] !== b
          ? ((u =
              !b &&
              (0, r.jsxs)("div", {
                className: "relative bg-surface px-3 pt-2 pb-3 text-sm",
                role: "status",
                children: [
                  (0, r.jsx)("span", {
                    className: "sr-only",
                    children: (0, r.jsx)(d.A, { id: "codex.review.diff.loading", defaultMessage: "Loading diff" }),
                  }),
                  (0, r.jsx)(v.P, { lines: Math.min(y.unifiedLineCount, 12), minWidth: 42, maxWidth: 96 }),
                ],
              })),
            (p[10] = y),
            (p[11] = b),
            (p[12] = u))
          : (u = p[12]),
        p[13] !== S || p[14] !== c || p[15] !== u
          ? ((m = (0, r.jsxs)("div", {
              className: "relative max-h-96 overflow-y-auto",
              "aria-busy": S,
              children: [c, u],
            })),
            (p[13] = S),
            (p[14] = c),
            (p[15] = u),
            (p[16] = m))
          : (m = p[16]),
        m
      )
    }
    n("AVx8")
    let O = (0, c.YK)({
      scripts: { id: "restricted.environmentSetup.configuration.scripts.title", defaultMessage: "Scripts" },
      setupScript: {
        id: "restricted.environmentSetup.configuration.installScript.title",
        defaultMessage: "Install script",
      },
      startSkill: { id: "restricted.environmentSetup.configuration.startSkill.title", defaultMessage: "Start skill" },
      empty: { id: "restricted.environmentSetup.configuration.script.empty", defaultMessage: "Not set" },
    })
  },
  Qm3F(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("slpy"),
      i = n("zd8w"),
      l = n("v7qY"),
      o = n("Wf1j"),
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
            f,
            v,
            h,
            g,
            x,
            b,
            j,
            y,
            S = (0, s.c)(41),
            {
              id: w,
              value: M,
              personal: A,
              required: k,
              onChange: _,
              ariaLabel: C,
              invalid: N,
              describedBy: P,
              saved: I,
              scopeControl: E,
            } = e,
            z = void 0 !== k && k,
            T = (0, o.A)(),
            L = (0, i.useRef)(null),
            [D, O] = (0, i.useState)(!1),
            [R, $] = (0, i.useState)(!1)
          S[0] !== T
            ? ((t = T.formatMessage({ id: "environmentSetup.secret.valuePlaceholder", defaultMessage: "Value" })),
              (S[0] = T),
              (S[1] = t))
            : (t = S[1])
          let V = t
          if (void 0 !== I && I) {
            let e
            ;(S[2] !== R || S[3] !== T
              ? ((e = R
                  ? T.formatMessage({
                      id: "restricted.environmentSetup.secret.keepValue",
                      defaultMessage: "Leave blank to keep saved value",
                    })
                  : "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"),
                (S[2] = R),
                (S[3] = T),
                (S[4] = e))
              : (e = S[4]),
              (V = e))
          } else if (void 0 !== A && A) {
            let e
            ;(S[5] !== T
              ? ((e = T.formatMessage({
                  id: "environmentSetup.secret.optionalValue",
                  defaultMessage: "Your value (optional)",
                })),
                (S[5] = T),
                (S[6] = e))
              : (e = S[6]),
              (V = e))
          }
          S[7] !== T || S[8] !== D
            ? ((n = D
                ? T.formatMessage({
                    id: "restricted.environmentSetup.configuration.secret.dialog.hide",
                    defaultMessage: "Hide secret value",
                  })
                : T.formatMessage({
                    id: "restricted.environmentSetup.configuration.secret.dialog.reveal",
                    defaultMessage: "Reveal secret value",
                  })),
              (S[7] = T),
              (S[8] = D),
              (S[9] = n))
            : (n = S[9])
          let H = n,
            U = 0 === M.length
          ;(S[10] !== D
            ? ((p = () => {
                let e = L.current,
                  t = e?.selectionStart ?? null,
                  n = e?.selectionEnd ?? null
                ;((0, l.flushSync)(() => O(!D)), e?.getBoundingClientRect(), e?.setSelectionRange(t, n))
              }),
              (S[10] = D),
              (S[11] = p))
            : (p = S[11]),
            S[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, r.jsx)(c.X9D, {})), (S[12] = f))
              : (f = S[12]),
            S[13] !== w || S[14] !== U || S[15] !== p || S[16] !== H
              ? ((v = (0, r.jsx)(d.$, {
                  "aria-label": H,
                  "aria-controls": w,
                  color: "ghost",
                  disabled: U,
                  size: "inputIcon",
                  onMouseDown: m,
                  onClick: p,
                  children: f,
                })),
                (S[13] = w),
                (S[14] = U),
                (S[15] = p),
                (S[16] = H),
                (S[17] = v))
              : (v = S[17]),
            S[18] !== v || S[19] !== H
              ? ((h = (0, r.jsx)(a.m, { content: H, children: v })), (S[18] = v), (S[19] = H), (S[20] = h))
              : (h = S[20]))
          let B = h
          S[21] !== C || S[22] !== T
            ? ((g =
                C ??
                T.formatMessage({
                  id: "restricted.environmentSetup.input.secret.value",
                  defaultMessage: "Secret value",
                })),
              (S[21] = C),
              (S[22] = T),
              (S[23] = g))
            : (g = S[23])
          let q = D ? "text" : "password",
            W = null == E ? "default" : "segmented",
            F = null == E ? void 0 : B,
            K = E ?? B
          return (
            S[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = () => $(!0)), (b = () => $(!1)), (S[24] = x), (S[25] = b))
              : ((x = S[24]), (b = S[25])),
            S[26] !== _ ? ((j = (e) => _(e.target.value)), (S[26] = _), (S[27] = j)) : (j = S[27]),
            S[28] !== P ||
            S[29] !== w ||
            S[30] !== N ||
            S[31] !== V ||
            S[32] !== z ||
            S[33] !== g ||
            S[34] !== q ||
            S[35] !== W ||
            S[36] !== F ||
            S[37] !== K ||
            S[38] !== j ||
            S[39] !== M
              ? ((y = (0, r.jsx)(u.pd, {
                  id: w,
                  ref: L,
                  required: z,
                  "aria-invalid": N,
                  "aria-describedby": P,
                  "data-environment-invalid": N,
                  "aria-label": g,
                  autoComplete: "new-password",
                  placeholder: V,
                  type: q,
                  value: M,
                  variant: W,
                  trailingInlineControl: F,
                  trailingControl: K,
                  onFocus: x,
                  onBlur: b,
                  onChange: j,
                })),
                (S[28] = P),
                (S[29] = w),
                (S[30] = N),
                (S[31] = V),
                (S[32] = z),
                (S[33] = g),
                (S[34] = q),
                (S[35] = W),
                (S[36] = F),
                (S[37] = K),
                (S[38] = j),
                (S[39] = M),
                (S[40] = y))
              : (y = S[40]),
            y
          )
        },
      },
    )
  },
  EkMM(e, t, n) {
    n.d(t, { s: () => w })
    var r = n("ABep"),
      s = n("QosV"),
      a = n("slpy")
    n("PFi3")
    var i = n("zd8w"),
      l = n("Wf1j"),
      o = n("Sm6l"),
      d = n("bVeK"),
      c = n("zLIa"),
      u = n("ILsY"),
      m = n("W857"),
      p = n("K489"),
      f = n("Qm3F"),
      v = n("oyxz"),
      h = n("nzx4"),
      g = n("J0Wh"),
      x = n("wU6J")
    function b(e) {
      let t,
        n,
        a,
        c,
        u,
        m,
        p,
        f,
        b,
        S,
        w,
        M,
        A,
        k,
        _,
        C,
        N,
        P,
        I,
        E = (0, s.c)(54),
        { name: z, value: T, disabled: L, readOnly: D, invalid: O, describedBy: R, onChange: $ } = e,
        V = (0, l.A)(),
        H = (0, i.useId)(),
        [U, B] = (0, i.useState)(null)
      ;(L && null != U && B(null),
        E[0] !== T ? ((t = T.split(",").map(y).filter(j)), (E[0] = T), (E[1] = t)) : (t = E[1]))
      let q = t
      E[2] !== U
        ? ((n =
            null != U &&
            U.domains.length > 0 &&
            !U.input.trim() &&
            U.domains.every((e, t) => null == (0, x.r)(e, U.domains.slice(0, t), { purpose: "secret" }))),
          (E[2] = U),
          (E[3] = n))
        : (n = E[3])
      let W = n,
        F = null != U && !L
      ;(E[4] !== L || E[5] !== q
        ? ((a = (e) => {
            B(e && !L ? { domains: q, input: "" } : null)
          }),
          (E[4] = L),
          (E[5] = q),
          (E[6] = a))
        : (a = E[6]),
        E[7] !== V || E[8] !== z
          ? ((c = V.formatMessage(
              { id: "environmentSetup.review.secret.domainsForSecret", defaultMessage: "Allowed domains for {name}" },
              { name: z },
            )),
            (E[7] = V),
            (E[8] = z),
            (E[9] = c))
          : (c = E[9]),
        E[10] !== q.length
          ? ((u = (0, r.jsx)(v.A, {
              id: "environmentSetup.review.secret.domainCount",
              defaultMessage: "{count, plural, =0 {No domains} one {# domain} other {# domains}}",
              values: { count: q.length },
            })),
            (E[10] = q.length),
            (E[11] = u))
          : (u = E[11]),
        E[12] === Symbol.for("react.memo_cache_sentinel") ? ((m = (0, r.jsx)(d.Aq_, {})), (E[12] = m)) : (m = E[12]),
        E[13] !== R || E[14] !== L || E[15] !== O || E[16] !== c || E[17] !== u
          ? ((p = (0, r.jsx)(h.Wv, {
              asChild: !0,
              children: (0, r.jsxs)(o.$, {
                className: "w-full justify-between",
                "aria-label": c,
                "aria-invalid": O,
                "aria-describedby": R,
                "data-environment-invalid": O,
                color: "outline",
                size: "inputControl",
                disabled: L,
                children: [u, m],
              }),
            })),
            (E[13] = R),
            (E[14] = L),
            (E[15] = O),
            (E[16] = c),
            (E[17] = u),
            (E[18] = p))
          : (p = E[18]),
        E[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)(v.A, { id: "environmentSetup.review.secret.domains", defaultMessage: "Allowed domains" })),
            (E[19] = f))
          : (f = E[19]),
        E[20] !== H ? ((b = (0, r.jsx)(h.eO, { id: H, children: f })), (E[20] = H), (E[21] = b)) : (b = E[21]),
        E[22] !== L || E[23] !== U || E[24] !== D
          ? ((S =
              null != U &&
              (0, r.jsx)(g.Y, {
                purpose: "secret",
                disabled: L,
                readOnly: D,
                showErrors: !0,
                domains: U.domains,
                value: U.input,
                onChange: (e) => B({ ...U, domains: e }),
                onInputChange: (e) => B((t) => (null == t ? null : { ...t, input: e })),
              })),
            (E[22] = L),
            (E[23] = U),
            (E[24] = D),
            (E[25] = S))
          : (S = E[25]),
        E[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, r.jsx)("p", {
              className: "text-secondary",
              children: (0, r.jsx)(v.A, {
                id: "environmentSetup.review.secret.domainsHelp",
                defaultMessage: "Add at least one exact hostname that can receive this secret",
              }),
            })),
            (E[26] = w))
          : (w = E[26]),
        E[27] !== D
          ? ((M =
              !D &&
              (0, r.jsx)(o.$, {
                color: "secondary",
                size: "compact",
                onClick: () => B(null),
                children: (0, r.jsx)(v.A, { id: "environmentSetup.secret.domainsCancel", defaultMessage: "Cancel" }),
              })),
            (E[27] = D),
            (E[28] = M))
          : (M = E[28]))
      let K = !D && !W
      return (
        E[29] !== W || E[30] !== L || E[31] !== U || E[32] !== $ || E[33] !== D
          ? ((A = () => {
              ;(D || L || !W || null == U || $(U.domains.join(", ")), B(null))
            }),
            (E[29] = W),
            (E[30] = L),
            (E[31] = U),
            (E[32] = $),
            (E[33] = D),
            (E[34] = A))
          : (A = E[34]),
        E[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, r.jsx)(v.A, { id: "environmentSetup.secret.domainsDone", defaultMessage: "Done" })), (E[35] = k))
          : (k = E[35]),
        E[36] !== K || E[37] !== A
          ? ((_ = (0, r.jsx)(o.$, { color: "primary", size: "compact", disabled: K, onClick: A, children: k })),
            (E[36] = K),
            (E[37] = A),
            (E[38] = _))
          : (_ = E[38]),
        E[39] !== M || E[40] !== _
          ? ((C = (0, r.jsxs)("div", { className: "flex justify-end gap-2", children: [M, _] })),
            (E[39] = M),
            (E[40] = _),
            (E[41] = C))
          : (C = E[41]),
        E[42] !== b || E[43] !== S || E[44] !== C
          ? ((N = (0, r.jsxs)("div", { className: "flex flex-col gap-3 p-2 text-sm", children: [b, S, w, C] })),
            (E[42] = b),
            (E[43] = S),
            (E[44] = C),
            (E[45] = N))
          : (N = E[45]),
        E[46] !== N || E[47] !== H
          ? ((P = (0, r.jsx)(h.hl, { size: "large", variant: "menu", "aria-labelledby": H, children: N })),
            (E[46] = N),
            (E[47] = H),
            (E[48] = P))
          : (P = E[48]),
        E[49] !== P || E[50] !== F || E[51] !== a || E[52] !== p
          ? ((I = (0, r.jsxs)(h.AM, { open: F, onOpenChange: a, children: [p, P] })),
            (E[49] = P),
            (E[50] = F),
            (E[51] = a),
            (E[52] = p),
            (E[53] = I))
          : (I = E[53]),
        I
      )
    }
    function j(e) {
      return e.length > 0
    }
    function y(e) {
      return e.trim()
    }
    var S = n("MVTZ")
    function w(e) {
      let t,
        n,
        v,
        h,
        g,
        x,
        j,
        y,
        w,
        M,
        A,
        k,
        _,
        C,
        N,
        P,
        I,
        E,
        z,
        T,
        L,
        D = (0, s.c)(89),
        {
          keyInputRef: O,
          secret: R,
          issues: $,
          configuration: V,
          onChange: H,
          onDelete: U,
          readOnly: B,
          disabled: q,
          runningThread: W,
        } = e,
        F = void 0 !== B && B,
        K = void 0 !== q && q,
        Z = void 0 !== W && W,
        Q = (0, l.A)(),
        G = (0, i.useId)()
      if (D[0] !== R) {
        let e = (0, u.oj)(R)
        ;((t =
          R.injectionTarget ??
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
          (D[0] = R),
          (D[1] = t))
      } else t = D[1]
      let Y = t
      if (D[2] !== $ || D[3] !== R.id) {
        let e
        ;(D[5] !== R.id
          ? ((e = (e) => {
              let { field: t } = e
              return t === `secret-${R.id}-key`
            }),
            (D[5] = R.id),
            (D[6] = e))
          : (e = D[6]),
          (n = $.find(e)),
          (D[2] = $),
          (D[3] = R.id),
          (D[4] = n))
      } else n = D[4]
      let J = n
      if (D[7] !== $ || D[8] !== R.id) {
        let e
        ;(D[10] !== R.id
          ? ((e = (e) => {
              let { field: t } = e
              return t === `secret-${R.id}-value`
            }),
            (D[10] = R.id),
            (D[11] = e))
          : (e = D[11]),
          (v = $.find(e)),
          (D[7] = $),
          (D[8] = R.id),
          (D[9] = v))
      } else v = D[9]
      let X = v
      if (D[12] !== $ || D[13] !== R.id) {
        let e
        ;(D[15] !== R.id
          ? ((e = (e) => {
              let { field: t } = e
              return t === `secret-${R.id}-domains`
            }),
            (D[15] = R.id),
            (D[16] = e))
          : (e = D[16]),
          (h = $.find(e)),
          (D[12] = $),
          (D[13] = R.id),
          (D[14] = h))
      } else h = D[14]
      let ee = h
      D[17] !== Q || D[18] !== R.source
        ? ((g =
            "user_provided" === R.source
              ? Q.formatMessage({
                  id: "restricted.environmentSetup.secret.removeRequirement",
                  defaultMessage: "Remove requirement",
                })
              : Q.formatMessage({
                  id: "restricted.environmentSetup.input.secret.delete",
                  defaultMessage: "Delete secret",
                })),
          (D[17] = Q),
          (D[18] = R.source),
          (D[19] = g))
        : (g = D[19])
      let et = g,
        en = R.source ?? "environment",
        er = K || F || (Z && null == V)
      ;(D[20] !== H || D[21] !== R
        ? ((x = (e) =>
            H({
              ...R,
              source: e,
              optional: "user_provided" === e,
              value: "",
              serverId: void 0,
              origin: void 0,
              personalSecret: void 0,
              isMissing: "environment" === e,
            })),
          (D[20] = H),
          (D[21] = R),
          (D[22] = x))
        : (x = D[22]),
        D[23] !== er || D[24] !== x || D[25] !== en || D[26] !== Y.name
          ? ((j = (0, r.jsx)(S.w, { attached: !0, name: Y.name, source: en, disabled: er, onChange: x })),
            (D[23] = er),
            (D[24] = x),
            (D[25] = en),
            (D[26] = Y.name),
            (D[27] = j))
          : (j = D[27]))
      let es = j,
        ea = Y.name || R.name
      ;(D[28] !== Q
        ? ((y = Q.formatMessage({
            id: "restricted.environmentSetup.input.secret.name.placeholder",
            defaultMessage: "Key",
          })),
          (D[28] = Q),
          (D[29] = y))
        : (y = D[29]),
        D[30] !== Q
          ? ((w = Q.formatMessage({
              id: "restricted.environmentSetup.input.secret.key",
              defaultMessage: "Secret key",
            })),
            (D[30] = Q),
            (D[31] = w))
          : (w = D[31]))
      let ei = null != J,
        el = null == J ? void 0 : `${G}-key`,
        eo = null != J
      ;(D[32] !== H || D[33] !== R || D[34] !== Y
        ? ((M = (e) =>
            H({
              ...R,
              name: e.target.value,
              serverId: "user_provided" === R.source ? void 0 : R.serverId,
              personalSecret: void 0,
              target: void 0,
              injectionTarget: { ...Y, name: e.target.value },
            })),
          (D[32] = H),
          (D[33] = R),
          (D[34] = Y),
          (D[35] = M))
        : (M = D[35]),
        D[36] !== O ||
        D[37] !== F ||
        D[38] !== y ||
        D[39] !== w ||
        D[40] !== ei ||
        D[41] !== el ||
        D[42] !== eo ||
        D[43] !== M ||
        D[44] !== Y.name
          ? ((A = (0, r.jsx)("div", {
              className: "min-w-0 flex-1 basis-32",
              children: (0, r.jsx)(c.pd, {
                ref: O,
                placeholder: y,
                "aria-label": w,
                "aria-invalid": ei,
                "aria-describedby": el,
                "data-environment-invalid": eo,
                autoComplete: "off",
                maxLength: 128,
                readOnly: F,
                value: Y.name,
                variant: "segmented",
                onChange: M,
              }),
            })),
            (D[36] = O),
            (D[37] = F),
            (D[38] = y),
            (D[39] = w),
            (D[40] = ei),
            (D[41] = el),
            (D[42] = eo),
            (D[43] = M),
            (D[44] = Y.name),
            (D[45] = A))
          : (A = D[45]),
        D[46] !== V ||
        D[47] !== G ||
        D[48] !== Q ||
        D[49] !== H ||
        D[50] !== Z ||
        D[51] !== es ||
        D[52] !== R ||
        D[53] !== Y.name ||
        D[54] !== X
          ? ((k = (0, r.jsx)("div", {
              className: "min-w-0 flex-2 basis-64",
              children:
                "user_provided" === R.source
                  ? (0, r.jsx)(
                      m.u,
                      {
                        id: `${G}-value-input`,
                        scopeControl: es,
                        ariaLabel: Q.formatMessage(
                          { id: "restricted.environmentSetup.batchSecrets.value", defaultMessage: "Value for {name}" },
                          { name: Y.name },
                        ),
                        value: R.value,
                        configuration: V,
                        namespace: "sensitive",
                        name: Y.name,
                        requireValue: Z,
                        saved: null != R.personalSecret || (Z && null != R.serverId),
                        invalid: null != X,
                        describedBy: null == X ? void 0 : `${G}-value`,
                        onChange: (e) => H({ ...R, value: e }),
                      },
                      R.source,
                    )
                  : (0, r.jsx)(
                      f.n,
                      {
                        id: `${G}-value-input`,
                        scopeControl: es,
                        ariaLabel: Q.formatMessage(
                          { id: "restricted.environmentSetup.batchSecrets.value", defaultMessage: "Value for {name}" },
                          { name: Y.name },
                        ),
                        value: R.value,
                        saved: null != R.serverId && !R.isMissing,
                        invalid: null != X,
                        describedBy: null == X ? void 0 : `${G}-value`,
                        onChange: (e) => H({ ...R, value: e }),
                      },
                      R.source,
                    ),
            })),
            (D[46] = V),
            (D[47] = G),
            (D[48] = Q),
            (D[49] = H),
            (D[50] = Z),
            (D[51] = es),
            (D[52] = R),
            (D[53] = Y.name),
            (D[54] = X),
            (D[55] = k))
          : (k = D[55]))
      let ed = Y.domain ?? "",
        ec = F && ("environment_variable" !== Y.type || !R.requested),
        eu = null != ee,
        em = null == ee ? void 0 : `${G}-domains`
      return (
        D[56] !== H || D[57] !== R || D[58] !== Y
          ? ((_ = (e) => H({ ...R, target: void 0, injectionTarget: { ...Y, domain: e } })),
            (D[56] = H),
            (D[57] = R),
            (D[58] = Y),
            (D[59] = _))
          : (_ = D[59]),
        D[60] !== K || D[61] !== ed || D[62] !== ec || D[63] !== eu || D[64] !== em || D[65] !== _ || D[66] !== Y.name
          ? ((C = (0, r.jsx)("div", {
              className: "w-36 shrink-0",
              children: (0, r.jsx)(b, {
                name: Y.name,
                value: ed,
                disabled: K,
                readOnly: ec,
                invalid: eu,
                describedBy: em,
                onChange: _,
              }),
            })),
            (D[60] = K),
            (D[61] = ed),
            (D[62] = ec),
            (D[63] = eu),
            (D[64] = em),
            (D[65] = _),
            (D[66] = Y.name),
            (D[67] = C))
          : (C = D[67]),
        D[68] !== A || D[69] !== k || D[70] !== C
          ? ((N = (0, r.jsxs)("div", {
              className: "flex min-w-0 flex-1 flex-wrap items-start gap-2",
              children: [A, k, C],
            })),
            (D[68] = A),
            (D[69] = k),
            (D[70] = C),
            (D[71] = N))
          : (N = D[71]),
        D[72] === Symbol.for("react.memo_cache_sentinel") ? ((P = (0, r.jsx)(d.cSG, {})), (D[72] = P)) : (P = D[72]),
        D[73] !== U || D[74] !== et
          ? ((I = (0, r.jsx)(o.$, { "aria-label": et, color: "ghost", size: "icon", onClick: U, children: P })),
            (D[73] = U),
            (D[74] = et),
            (D[75] = I))
          : (I = D[75]),
        D[76] !== et || D[77] !== I
          ? ((E = (0, r.jsx)("div", {
              className: "flex h-10 w-8 shrink-0 items-center justify-center",
              children: (0, r.jsx)(a.m, { content: et, children: I }),
            })),
            (D[76] = et),
            (D[77] = I),
            (D[78] = E))
          : (E = D[78]),
        D[79] !== N || D[80] !== E
          ? ((z = (0, r.jsxs)("div", { className: "flex min-w-0 items-start gap-2", children: [N, E] })),
            (D[79] = N),
            (D[80] = E),
            (D[81] = z))
          : (z = D[81]),
        D[82] !== G || D[83] !== $
          ? ((T =
              $.length > 0
                ? (0, r.jsx)("div", {
                    className: "flex flex-col gap-2",
                    children: $.map((e) =>
                      (0, r.jsx)(p.o, { id: `${G}-${e.field?.split("-").at(-1)}`, issue: e }, e.field),
                    ),
                  })
                : null),
            (D[82] = G),
            (D[83] = $),
            (D[84] = T))
          : (T = D[84]),
        D[85] !== ea || D[86] !== z || D[87] !== T
          ? ((L = (0, r.jsxs)("div", {
              className: "flex min-w-0 flex-col gap-2",
              "aria-label": ea,
              role: "group",
              children: [z, T],
            })),
            (D[85] = ea),
            (D[86] = z),
            (D[87] = T),
            (D[88] = L))
          : (L = D[88]),
        L
      )
    }
  },
  MVTZ(e, t, n) {
    var r = n("ABep"),
      s = n("QosV"),
      a = n("l02Z"),
      i = n("eis6"),
      l = n("Wf1j"),
      o = n("oyxz"),
      d = n("Sm6l"),
      c = n("bqtn"),
      u = n("HOLv"),
      m = n("bVeK")
    let p = { environment: a.P, user_provided: i.x }
    n.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            n,
            a,
            i = (0, s.c)(10),
            { source: o, showLabel: d } = e,
            c = (0, l.A)(),
            m = "user_provided" === o
          i[0] !== c || i[1] !== m
            ? ((t = m
                ? c.formatMessage({ id: "environmentSetup.review.secret.personal", defaultMessage: "Personal" })
                : c.formatMessage({ id: "environmentSetup.review.secret.environment", defaultMessage: "Environment" })),
              (i[0] = c),
              (i[1] = m),
              (i[2] = t))
            : (t = i[2])
          let f = t,
            v = p[o]
          i[3] !== f || i[4] !== v
            ? ((n = (0, r.jsx)(u.I, { asset: v, label: f })), (i[3] = f), (i[4] = v), (i[5] = n))
            : (n = i[5])
          let h = void 0 !== d && d ? f : null
          return (
            i[6] !== f || i[7] !== n || i[8] !== h
              ? ((a = (0, r.jsxs)("span", {
                  title: f,
                  className: "inline-flex shrink-0 items-center gap-1.5",
                  children: [n, h],
                })),
                (i[6] = f),
                (i[7] = n),
                (i[8] = h),
                (i[9] = a))
              : (a = i[9]),
            a
          )
        },
        w: function (e) {
          let t,
            n,
            a,
            i,
            f,
            v,
            h,
            g,
            x,
            b,
            j,
            y,
            S,
            w,
            M,
            A,
            k,
            _ = (0, s.c)(38),
            { name: C, source: N, disabled: P, attached: I, onChange: E } = e,
            z = void 0 !== I && I,
            T = (0, l.A)(),
            L = z ? "ghostActive" : "outline",
            D = z ? "inputSelect" : "settingsSelect"
          return (
            _[0] !== T || _[1] !== C
              ? ((t = T.formatMessage(
                  { id: "environmentSetup.review.secret.scope", defaultMessage: "Scope for {name}" },
                  { name: C },
                )),
                (_[0] = T),
                (_[1] = C),
                (_[2] = t))
              : (t = _[2]),
            _[3] !== N
              ? ((n =
                  "user_provided" === N
                    ? (0, r.jsx)(o.A, { id: "environmentSetup.review.secret.personal", defaultMessage: "Personal" })
                    : (0, r.jsx)(o.A, {
                        id: "environmentSetup.review.secret.environment",
                        defaultMessage: "Environment",
                      })),
                (_[3] = N),
                (_[4] = n))
              : (n = _[4]),
            _[5] === Symbol.for("react.memo_cache_sentinel") ? ((a = (0, r.jsx)(m.Aq_, {})), (_[5] = a)) : (a = _[5]),
            _[6] !== P || _[7] !== L || _[8] !== D || _[9] !== t || _[10] !== n
              ? ((i = (0, r.jsxs)(d.$, {
                  className: "w-36 justify-between",
                  color: L,
                  size: D,
                  disabled: P,
                  "aria-label": t,
                  children: [n, a],
                })),
                (_[6] = P),
                (_[7] = L),
                (_[8] = D),
                (_[9] = t),
                (_[10] = n),
                (_[11] = i))
              : (i = _[11]),
            _[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, r.jsx)(c.ms.SectionLabel, {
                  children: (0, r.jsx)(o.A, { id: "environmentSetup.secret.typeOfKey", defaultMessage: "Type of key" }),
                })),
                (_[12] = f))
              : (f = _[12]),
            _[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = (0, r.jsx)(u.I, { asset: p.environment, className: "shrink-0" })), (_[13] = v))
              : (v = _[13]),
            _[14] !== E || _[15] !== N
              ? ((h = () => "environment" !== N && E("environment")), (_[14] = E), (_[15] = N), (_[16] = h))
              : (h = _[16]),
            _[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, r.jsx)(o.A, {
                  id: "environmentSetup.review.secret.environmentHelp",
                  defaultMessage: "All users of this environment can use this value",
                })),
                (x = (0, r.jsx)(o.A, {
                  id: "environmentSetup.review.secret.environment",
                  defaultMessage: "Environment",
                })),
                (_[17] = g),
                (_[18] = x))
              : ((g = _[17]), (x = _[18])),
            _[19] !== P || _[20] !== h
              ? ((b = (0, r.jsx)(c.ms.RadioItem, {
                  variant: "descriptive",
                  disabled: P,
                  icon: v,
                  value: "environment",
                  onSelect: h,
                  SubText: g,
                  children: x,
                })),
                (_[19] = P),
                (_[20] = h),
                (_[21] = b))
              : (b = _[21]),
            _[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((j = (0, r.jsx)(u.I, { asset: p.user_provided, className: "shrink-0" })), (_[22] = j))
              : (j = _[22]),
            _[23] !== E || _[24] !== N
              ? ((y = () => "user_provided" !== N && E("user_provided")), (_[23] = E), (_[24] = N), (_[25] = y))
              : (y = _[25]),
            _[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = (0, r.jsx)(o.A, {
                  id: "environmentSetup.review.secret.personalHelp",
                  defaultMessage: "Each user can add their own key",
                })),
                (w = (0, r.jsx)(o.A, { id: "environmentSetup.review.secret.personal", defaultMessage: "Personal" })),
                (_[26] = S),
                (_[27] = w))
              : ((S = _[26]), (w = _[27])),
            _[28] !== P || _[29] !== y
              ? ((M = (0, r.jsx)(c.ms.RadioItem, {
                  variant: "descriptive",
                  disabled: P,
                  icon: j,
                  value: "user_provided",
                  onSelect: y,
                  SubText: S,
                  children: w,
                })),
                (_[28] = P),
                (_[29] = y),
                (_[30] = M))
              : (M = _[30]),
            _[31] !== N || _[32] !== b || _[33] !== M
              ? ((A = (0, r.jsxs)(c.ms.RadioGroup, { value: N, children: [b, M] })),
                (_[31] = N),
                (_[32] = b),
                (_[33] = M),
                (_[34] = A))
              : (A = _[34]),
            _[35] !== A || _[36] !== i
              ? ((k = (0, r.jsxs)(c.Ab, { contentWidth: "panel", triggerButton: i, children: [f, A] })),
                (_[35] = A),
                (_[36] = i),
                (_[37] = k))
              : (k = _[37]),
            k
          )
        },
      },
    )
  },
  WT8y(e, t, n) {
    var r = n("rGp2")
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
          let s = new URL(
            null == n ? "/plugins" : `/plugins/${encodeURIComponent(n)}`,
            t?.trim() || "https://chatgpt.com",
          )
          return (
            s.searchParams.set("no_universal_links", "1"),
            (s.hash =
              null == n
                ? `settings/Connectors?${new URLSearchParams({ connector: e, "product-sku": (0, r.MR)(), referrer: "codex" })}`
                : `settings/Plugins/${encodeURIComponent(n)}?product-sku=CODEX`),
            s.toString()
          )
        },
      },
    )
  },
  mYWF(e, t, n) {
    var r = n("DBCl"),
      s = n("rGp2"),
      a = n("hOO0"),
      i = n("ReGc"),
      l = n("WT8y")
    async function o(e, { appId: t, appName: n }) {
      let l = await e.query.getOrFetch(i.a)
      return new URL(
        (0, s.Cj)({ id: (0, a.$)(t), name: n, installUrl: new URL(l.chatGptDesktopAuthOrigin ?? r.WaA).origin }),
      )
    }
    n.d(t, { Hd: () => o, Y2: () => l.x, x1: () => l.Q })
  },
  BSnr(e, t, n) {
    n.d(t, { X: () => i })
    var r = n("ABep"),
      s = n("QosV"),
      a = n("on57")
    let i = Object.assign(
      function (e) {
        let t,
          n,
          i = (0, s.c)(6),
          { children: l, id: o, className: d } = e
        return (
          i[0] !== d ? ((t = (0, a.A)("flex flex-col", d)), (i[0] = d), (i[1] = t)) : (t = i[1]),
          i[2] !== l || i[3] !== o || i[4] !== t
            ? ((n = (0, r.jsx)("section", { id: o, className: t, children: l })),
              (i[2] = l),
              (i[3] = o),
              (i[4] = t),
              (i[5] = n))
            : (n = i[5]),
          n
        )
      },
      {
        Header: function (e) {
          let t,
            n,
            i,
            l,
            o,
            d,
            c,
            u = (0, s.c)(33),
            {
              title: m,
              subtitle: p,
              actions: f,
              actionsAlignment: v,
              className: h,
              size: g,
              showDivider: x,
              titleGap: b,
              spacing: j,
              subtitlePlacement: y,
              subtitleWrap: S,
            } = e,
            w = void 0 === g ? "default" : g,
            M = void 0 === j ? "default" : j,
            A = void 0 === y ? "below-title" : y,
            k = void 0 === S ? "balance" : S,
            _ = null != m,
            C = null != p,
            N = null != f,
            P = "compact" === w
          u[0] !== P || u[1] !== p || u[2] !== A || u[3] !== k
            ? ((t = p
                ? (0, r.jsx)("div", {
                    className: (0, a.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === k ? "text-balance" : "text-wrap",
                      P ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === A && "w-full",
                    ),
                    children: p,
                  })
                : null),
              (u[0] = P),
              (u[1] = p),
              (u[2] = A),
              (u[3] = k),
              (u[4] = t))
            : (t = u[4])
          let I = t
          if (!_ && !C && !N) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(r.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let E =
              _ && (void 0 === x || x) && "[[data-settings-panel]_&]:border-b [[data-settings-panel]_&]:border-default",
            z = "below-header" === A ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            T = C && "compact" === M && "pb-2",
            L = C && "compact" !== M && "pb-3"
          u[6] !== h ||
          u[7] !== C ||
          u[8] !== P ||
          u[9] !== M ||
          u[10] !== T ||
          u[11] !== L ||
          u[12] !== E ||
          u[13] !== z
            ? ((n = (0, a.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                E,
                z,
                T,
                L,
                !C && (0, a.A)("items-center pb-1.5", "compact" === M ? "min-h-8" : "min-h-toolbar"),
                C && P && "items-center",
                C && !P && "items-start",
                h,
              )),
              (u[6] = h),
              (u[7] = C),
              (u[8] = P),
              (u[9] = M),
              (u[10] = T),
              (u[11] = L),
              (u[12] = E),
              (u[13] = z),
              (u[14] = n))
            : (n = u[14])
          let D =
            "none" === (void 0 === b ? "default" : b)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[15] !== D ? ((i = (0, a.A)("flex min-w-0 flex-1 flex-col", D)), (u[15] = D), (u[16] = i)) : (i = u[16]),
            u[17] !== C || u[18] !== w || u[19] !== m
              ? ((l = m
                  ? (0, r.jsx)("div", {
                      className: (0, a.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === w && "text-sm leading-[18px]",
                        ("large" === w || ("default" === w && C)) && "text-lg",
                        ("base" === w || ("default" === w && !C)) && "text-base",
                      ),
                      children: m,
                    })
                  : null),
                (u[17] = C),
                (u[18] = w),
                (u[19] = m),
                (u[20] = l))
              : (l = u[20]))
          let O = "below-title" === A ? I : null
          ;(u[21] !== i || u[22] !== l || u[23] !== O
            ? ((o = (0, r.jsxs)("div", { className: i, children: [l, O] })),
              (u[21] = i),
              (u[22] = l),
              (u[23] = O),
              (u[24] = o))
            : (o = u[24]),
            u[25] !== f || u[26] !== v
              ? ((d = f
                  ? (0, r.jsx)("div", {
                      className: (0, a.A)("flex items-center gap-2", "end" === v && "self-end"),
                      children: f,
                    })
                  : null),
                (u[25] = f),
                (u[26] = v),
                (u[27] = d))
              : (d = u[27]))
          let R = "below-header" === A ? I : null
          return (
            u[28] !== n || u[29] !== o || u[30] !== d || u[31] !== R
              ? ((c = (0, r.jsxs)("div", { className: n, children: [o, d, R] })),
                (u[28] = n),
                (u[29] = o),
                (u[30] = d),
                (u[31] = R),
                (u[32] = c))
              : (c = u[32]),
            c
          )
        },
        Content: function (e) {
          let t,
            n,
            i = (0, s.c)(5),
            { children: l, className: o } = e
          return (
            i[0] !== o ? ((t = (0, a.A)("flex flex-col gap-1.5", o)), (i[0] = o), (i[1] = t)) : (t = i[1]),
            i[2] !== l || i[3] !== t
              ? ((n = (0, r.jsx)("div", { className: t, children: l })), (i[2] = l), (i[3] = t), (i[4] = n))
              : (n = i[4]),
            n
          )
        },
        Footer: function (e) {
          let t,
            n,
            i = (0, s.c)(6),
            { children: l, className: o, variant: d } = e,
            c =
              "action" === (void 0 === d ? "description" : d)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            i[0] !== o || i[1] !== c
              ? ((t = (0, a.A)("text-balance text-secondary", c, o)), (i[0] = o), (i[1] = c), (i[2] = t))
              : (t = i[2]),
            i[3] !== l || i[4] !== t
              ? ((n = (0, r.jsx)("div", { className: t, children: l })), (i[3] = l), (i[4] = t), (i[5] = n))
              : (n = i[5]),
            n
          )
        },
      },
    )
  },
  W9Ad(e, t, n) {
    n.d(t, { qg: () => h })
    let r = /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i
    class s extends Date {
      #e = !1
      #t = !1
      #n = null
      constructor(e) {
        let t = !0,
          n = !0,
          s = "Z"
        if ("string" == typeof e) {
          let a = e.match(r)
          a
            ? (a[1] || ((t = !1), (e = `0000-01-01T${e}`)),
              (n = !!a[2]) && " " === e[10] && (e = e.replace(" ", "T")),
              a[2] && +a[2] > 23 ? (e = "") : ((s = a[3] || null), (e = e.toUpperCase()), !s && n && (e += "Z")))
            : (e = "")
        }
        ;(super(e), isNaN(this.getTime()) || ((this.#e = t), (this.#t = n), (this.#n = s)))
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
        let n = new s(e)
        return ((n.#n = t), n)
      }
      static wrapAsLocalDateTime(e) {
        let t = new s(e)
        return ((t.#n = null), t)
      }
      static wrapAsLocalDate(e) {
        let t = new s(e)
        return ((t.#t = !1), (t.#n = null), t)
      }
      static wrapAsLocalTime(e) {
        let t = new s(e)
        return ((t.#e = !1), (t.#n = null), t)
      }
    }
    class a extends Error {
      options
      line
      column
      codeblock
      constructor(e, t) {
        var n, r
        let s,
          [a, i] = ((n = t.toml), (r = t.ptr), [(s = n.slice(0, r).split(/\r\n|\n|\r/g)).length, s.pop().length + 1]),
          l = (function (e, t, n) {
            let r = e.split(/\r\n|\n|\r/g),
              s = "",
              a = (0 | Math.log10(t + 1)) + 1
            for (let e = t - 1; e <= t + 1; e++) {
              let i = r[e - 1]
              i &&
                ((s += e.toString().padEnd(a, " ")),
                (s += ":  "),
                (s += i),
                (s += "\n"),
                e === t && ((s += " ".repeat(a + n + 2)), (s += "^\n")))
            }
            return s
          })(t.toml, a, i)
        ;(super(
          `Invalid TOML document: ${e}

${l}`,
          t,
        ),
          (this.options = t),
          (this.line = a),
          (this.column = i),
          (this.codeblock = l))
      }
    }
    function i(e, t = 0) {
      let n = e.indexOf("\n", t)
      return (13 === e.charCodeAt(n - 1) && n--, n)
    }
    function l(e) {
      for (; e.p < e.s.length; e.p++) {
        let t = e.s.charCodeAt(e.p)
        if (10 === t) break
        if (13 === t && 10 === e.s.charCodeAt(e.p + 1)) {
          e.p++
          break
        }
        if ((t < 32 && 9 !== t) || 127 === t)
          throw new a("control characters are not allowed in comments", { toml: e.s, ptr: e.p })
      }
    }
    function o(e, t, n) {
      let r
      for (;;) {
        for (
          ;
          32 === (r = e.s.charCodeAt(e.p)) ||
          9 === r ||
          (!t && (10 === r || (13 === r && 10 === e.s.charCodeAt(e.p + 1))));
        )
          e.p++
        if (n || 35 !== r) break
        l(e)
      }
    }
    let d = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,
      c = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,
      u = /^[+-]?0[0-9_]/
    function m(e) {
      let t = e.p,
        n = e.s.charCodeAt(e.p++),
        r = n,
        s = 39 === n,
        i = n === e.s.charCodeAt(e.p) && n === e.s.charCodeAt(e.p + 1)
      i && (10 === (n = e.s.charCodeAt((e.p += 2))) ? e.p++ : 13 === n && 10 === e.s.charCodeAt(e.p + 1) && (e.p += 2))
      let l = "",
        o = e.p,
        d = 0
      for (; e.p < e.s.length; e.p++)
        if (((n = e.s.charCodeAt(e.p)), i && (10 === n || (13 === n && 10 === e.s.charCodeAt(e.p + 1))))) d = d && 3
        else if ((n < 32 && 9 !== n) || 127 === n)
          throw new a("control characters are not allowed in strings", { toml: e.s, ptr: e.p })
        else if ((!d || 3 === d) && n === r && (!i || (e.s.charCodeAt(e.p + 1) === r && e.s.charCodeAt(e.p + 2) === r)))
          return (
            i && (e.s.charCodeAt(e.p + 3) === r && e.p++, e.s.charCodeAt(e.p + 3) === r && e.p++),
            d || (l += e.s.slice(o, e.p)),
            (e.p += i ? 3 : 1),
            l
          )
        else if (d) {
          if (1 === d)
            if (120 === n || 117 === n || 85 === n) {
              let t = 0,
                r = 120 === n ? 2 : 117 === n ? 4 : 8
              for (let n = 0; n < r; n++, e.p++) {
                let n = e.s.charCodeAt(e.p + 1),
                  r =
                    n >= 48 && n <= 57
                      ? n - 48
                      : n >= 65 && n <= 70
                        ? n - 65 + 10
                        : n >= 97 && n <= 102
                          ? n - 97 + 10
                          : -1
                if (r < 0) throw new a("invalid non-hex character in unicode escape", { toml: e.s, ptr: e.p + 1 })
                t = (t << 4) | r
              }
              if (t < 0 || t > 1114111 || (t >= 55296 && t <= 57343))
                throw new a("invalid unicode escape", { toml: e.s, ptr: e.p })
              ;((l += String.fromCodePoint(t)), (o = e.p + 1), (d = 0))
            } else if (32 === n || 9 === n) d = 2
            else {
              if (98 === n) l += "\b"
              else if (116 === n) l += "	"
              else if (110 === n) l += "\n"
              else if (102 === n) l += "\f"
              else if (114 === n) l += "\r"
              else if (101 === n) l += "\x1b"
              else if (34 === n) l += '"'
              else if (92 === n) l += "\\"
              else throw new a("unrecognized escape sequence", { toml: e.s, ptr: e.p })
              ;((o = e.p + 1), (d = 0))
            }
          else if (32 !== n && 9 !== n) {
            if (2 === d)
              throw new a("invalid escape: only line-ending whitespace may be escaped", { toml: e.s, ptr: o })
            ;((d = +(!s && 92 === n)), (o = e.p))
          }
        } else s || 92 !== n || ((l += e.s.slice(o, (o = e.p))), (d = 1))
      throw new a("unfinished string", { toml: e.s, ptr: t })
    }
    let p = /^[a-zA-Z0-9-_]+[ \t]*$/
    function f(e, t = "=") {
      let n = e.p,
        r = n - 1,
        s = [],
        l = e.s.indexOf(t, n)
      if (l < 0) throw new a("incomplete key-value: cannot find end of key", { toml: e.s, ptr: n })
      do {
        let o = e.s.charCodeAt((e.p = ++r))
        if (32 !== o && 9 !== o)
          if (34 === o || 39 === o) {
            if (o === e.s.charCodeAt(e.p + 1) && o === e.s.charCodeAt(e.p + 2))
              throw new a("multiline strings are not allowed in keys", { toml: e.s, ptr: e.p })
            let d = m(e)
            r = e.s.indexOf(".", e.p)
            let c = e.s.slice(e.p, r < 0 || r > l ? l : r),
              u = i(c)
            if (u > -1) throw new a("newlines are not allowed in keys", { toml: e.s, ptr: u })
            if (c.trimStart()) throw new a("found extra tokens after the string part", { toml: e.s, ptr: e.p })
            if (l < e.p && (l = e.s.indexOf(t, e.p)) < 0)
              throw new a("incomplete key-value: cannot find end of key", { toml: e.s, ptr: n })
            s.push(d)
          } else {
            r = e.s.indexOf(".", e.p)
            let t = e.s.slice(e.p, r < 0 || r > l ? l : r)
            if (!p.test(t))
              throw new a("only letter, numbers, dashes and underscores are allowed in keys", { toml: e.s, ptr: e.p })
            s.push(t.trimEnd())
          }
      } while (r + 1 && r < l)
      return ((e.p = l + 1), o(e, !0, !0), s)
    }
    function v(e, t, n, r) {
      let s,
        a,
        i = t,
        l = n,
        o = !1
      for (let t = 0; t < e.length; t++) {
        if (t) {
          if (((i = o ? i[s] : (i[s] = {})), (l = (a = l[s]).c), 0 === r && (1 === a.t || 2 === a.t))) return null
          if (2 === a.t) {
            let e = i.length - 1
            ;((i = i[e]), (l = l[e].c))
          }
        }
        if ((o = Object.hasOwn(i, (s = e[t]))) && l[s]?.t === 0 && l[s]?.d) return null
        o ||
          ("__proto__" === s &&
            (Object.defineProperty(i, s, { enumerable: !0, configurable: !0, writable: !0 }),
            Object.defineProperty(l, s, { enumerable: !0, configurable: !0, writable: !0 })),
          (l[s] = { t: t < e.length - 1 && 2 === r ? 3 : r, d: !1, i: 0, c: {} }))
      }
      if (
        ((a = l[s]).t !== r && (1 !== r || 3 !== a.t)) ||
        (2 === r &&
          (a.d || ((a.d = !0), (i[s] = [])), i[s].push((i = {})), (a.c[a.i++] = a = { t: 1, d: !1, i: 0, c: {} })),
        a.d)
      )
        return null
      if (((a.d = !0), 1 === r)) i = o ? i[s] : (i[s] = {})
      else if (0 === r && o) return null
      return [s, i, a.c]
    }
    function h(e, { maxDepth: t = 1e3, integersAsBigInt: n } = {}) {
      let r,
        p = { s: e, p: 0, d: t },
        g = {},
        x = {},
        b = g,
        j = x
      for (o(p); p.p < e.length;) {
        if (91 === e.charCodeAt(p.p)) {
          let t = 91 === e.charCodeAt(++p.p)
          r = p.p += +t
          let n = f(p, "]")
          if (t) {
            if (93 !== e.charCodeAt(p.p - 1))
              throw new a("expected end of table declaration", { toml: e, ptr: p.p - 1 })
            p.p++
          }
          let s = v(n, g, x, t ? 2 : 1)
          if (!s) throw new a("trying to redefine an already defined table or value", { toml: e, ptr: r })
          ;((j = s[2]), (b = s[1]))
        } else {
          r = p.p
          let t = v(f(p), b, j, 0)
          if (!t) throw new a("trying to redefine an already defined table or value", { toml: e, ptr: r })
          t[1][t[0]] = (function e(t, n, r) {
            let p = t.p,
              v = t.s.charCodeAt(p)
            if (91 === v || 123 === v) {
              if (!t.d--)
                throw new a("document contains excessively nested structures. aborting.", { toml: t.s, ptr: p })
              let n =
                91 === v
                  ? (function (t, n) {
                      let r,
                        s = []
                      for (t.p++; t.p < t.s.length;) {
                        if ((o(t), 93 === (r = t.s.charCodeAt(t.p)))) return (t.p++, s)
                        if ((s.push(e(t, 93, n)), o(t), 93 === (r = t.s.charCodeAt(t.p++)))) return s
                        if (44 !== r) throw new a("expected comma or end of structure", { toml: t.s, ptr: t.p - 1 })
                      }
                      throw new a("unfinished array encountered", { toml: t.s, ptr: t.p })
                    })(t, r)
                  : (function (t, n) {
                      let r,
                        s = {},
                        i = new Set()
                      for (t.p++; t.p < t.s.length;) {
                        let l
                        if ((o(t), 125 === (r = t.s.charCodeAt(t.p)))) return (t.p++, s)
                        let d = s,
                          c = !1,
                          u = t.p,
                          m = f(t)
                        for (let e = 0; e < m.length; e++) {
                          if (
                            (e && (d = c ? d[l] : (d[l] = {})),
                            (c = Object.hasOwn(d, (l = m[e]))) && ("object" != typeof d[l] || i.has(d[l])))
                          )
                            throw new a("trying to redefine an already defined value", { toml: t.s, ptr: u })
                          c ||
                            "__proto__" !== l ||
                            Object.defineProperty(d, l, { enumerable: !0, configurable: !0, writable: !0 })
                        }
                        if (c) throw new a("trying to redefine an already defined value", { toml: t.s, ptr: t.p })
                        let p = e(t, 125, n)
                        if ((i.add((d[l] = p)), o(t), 125 === (r = t.s.charCodeAt(t.p++)))) return s
                        if (44 !== r) throw new a("expected comma or end of structure", { toml: t.s, ptr: t.p - 1 })
                      }
                      throw new a("unfinished table encountered", { toml: t.s, ptr: t.p })
                    })(t, r)
              return (t.d++, n)
            }
            if (34 === v || 39 === v) return m(t)
            if (116 === v) {
              if (114 !== t.s.charCodeAt(++t.p) || 117 !== t.s.charCodeAt(++t.p) || 101 !== t.s.charCodeAt(++t.p))
                throw new a("invalid value", { toml: t.s, ptr: p })
              return (t.p++, !0)
            }
            if (102 === v) {
              if (
                97 !== t.s.charCodeAt(++t.p) ||
                108 !== t.s.charCodeAt(++t.p) ||
                115 !== t.s.charCodeAt(++t.p) ||
                101 !== t.s.charCodeAt(++t.p)
              )
                throw new a("invalid value", { toml: t.s, ptr: p })
              return (t.p++, !1)
            }
            return (function (e, t, n) {
              var r
              let o,
                m,
                p = e.p,
                f = { toml: e.s, ptr: p }
              !(function (e, t) {
                let n = e.p
                if (!t) {
                  ;((n = i(e.s, n)), (e.p = n < 0 ? e.s.length : n))
                  return
                }
                for (; e.p < e.s.length; e.p++) {
                  let n = e.s.charCodeAt(e.p)
                  if (35 === n) l(e)
                  else if (n === t || 44 === n) return
                }
                throw new a("cannot find end of structure", { toml: e.s, ptr: n })
              })(e, n)
              let v =
                ((r = e.p),
                (m = (o = e.s.slice(p, r)).indexOf("#")) > 0 && (l({ s: o, p: m, d: 0 }), (o = o.slice(0, m))),
                o.trimEnd())
              if (!v) throw new a("incomplete declaration: value expected", f)
              if ("-inf" === v) return -1 / 0
              if ("inf" === v || "+inf" === v) return 1 / 0
              if ("nan" === v || "+nan" === v || "-nan" === v) return 0 / 0
              if ("-0" === v) return t ? 0n : 0
              let h = d.test(v)
              if (h || c.test(v)) {
                if (u.test(v)) throw new a("leading zeroes are not allowed", f)
                let e = +(v = v.replace(/_/g, ""))
                if (isNaN(e)) throw new a("invalid number", f)
                if (h) {
                  if ((h = !Number.isSafeInteger(e)) && !t)
                    throw new a("integer value cannot be represented losslessly", f)
                  ;(h || !0 === t) && (e = BigInt(v))
                }
                return e
              }
              let g = new s(v)
              if (!g.isValid()) throw new a("invalid value", f)
              return g
            })(t, r, n)
          })(p, void 0, n)
        }
        if ((o(p, !0), p.p < e.length && 10 !== (r = e.charCodeAt(p.p)) && 13 !== r))
          throw new a("each key-value declaration must be followed by an end-of-line", { toml: e, ptr: p.p })
        o(p)
      }
      return g
    }
  },
}
//# sourceMappingURL=583345.e569e2b948.js.map
