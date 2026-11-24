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
export const __rspack_esm_ids = [181649]
export const __webpack_modules__ = {
  x55u(e, t, n) {
    var a = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, a.jsxs)("svg", {
          width: 18,
          height: 18,
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, a.jsx)("rect", {
              x: 3.19995,
              y: 6.20001,
              width: 11.6,
              height: 8.8,
              rx: 2.25,
              stroke: "currentColor",
              strokeWidth: 1.33,
            }),
            (0, a.jsx)("path", {
              d: "M5.30005 6.29999V5.99999C5.30005 3.95653 6.9566 2.29999 9.00005 2.29999C11.0435 2.29999 12.7 3.95653 12.7 5.99999V6.29999",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinejoin: "round",
            }),
            (0, a.jsx)("path", {
              d: "M8.5 10.5H9.5",
              stroke: "currentColor",
              strokeWidth: 1.33,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          ],
        })))
  },
  ZYH5(e, t, n) {
    var a = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 20,
          fill: "currentColor",
          viewBox: "0 0 20 20",
          ...e,
          children: [
            (0, a.jsx)("path", {
              d: "M9.995 12.315c.489 0 .875.37.875.842 0 .473-.386.843-.875.843-.488 0-.875-.37-.875-.843 0-.472.387-.842.875-.842ZM10.001 6c.478 0 .778.295.778.79 0 .042 0 .107-.006.16l-.08 3.716c-.016.456-.252.725-.698.725-.445 0-.681-.269-.692-.725L9.217 6.95c0-.053-.006-.118-.006-.16 0-.495.307-.79.79-.79Z",
            }),
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              d: "M10 2.085a7.915 7.915 0 1 1 0 15.83 7.915 7.915 0 0 1 0-15.83Zm0 1.33a6.585 6.585 0 1 0 0 13.17 6.585 6.585 0 0 0 0-13.17Z",
              clipRule: "evenodd",
            }),
          ],
        })))
  },
  W2xS(e, t, n) {
    n.d(
      t,
      {},
      {
        B: function (e) {
          if (!e.startsWith("---\n")) return e
          let t = e.indexOf("\n---", 4)
          if (-1 === t) return e
          let n = e.slice(t + 4)
          return n.startsWith("\n") ? n.slice(1) : n
        },
        v: function (e) {
          return e.find((e) => "SKILL.md" === e) ?? [...e].sort().find((e) => e.endsWith("/SKILL.md"))
        },
      },
    )
  },
  SIrB(e, t, n) {
    let a = {
      document: ["document", "google-docs"],
      presentation: ["presentation", "google-slides"],
      spreadsheet: ["spreadsheet", "google-sheets"],
      site: ["site"],
    }
    function s(e) {
      return a[e]
    }
    n.d(
      t,
      {},
      {
        AH: function (e) {
          switch (e) {
            case "documents":
            case "documents-router":
            case "documents-router@openai-curated-remote":
            case "documents@openai-primary-runtime":
            case "connector_openai_documents":
            case "google-docs":
              return "document"
            case "presentations":
            case "presentations-router":
            case "presentations-router@openai-curated-remote":
            case "presentations@openai-primary-runtime":
            case "connector_openai_presentations":
            case "google-slides":
              return "presentation"
            case "spreadsheets":
            case "spreadsheets-router":
            case "spreadsheets-router@openai-curated-remote":
            case "spreadsheets@openai-primary-runtime":
            case "connector_openai_spreadsheets":
            case "google-sheets":
              return "spreadsheet"
            default:
              return null
          }
        },
        C$: function (e, t) {
          return e.filter((e) => t.includes(e.type))
        },
        IP: function (e, t) {
          let n = s(t),
            a = new Set()
          return e
            .filter(({ template: e, enabled: t }) => !(!t || !n.includes(e.type) || a.has(e.id)) && (a.add(e.id), !0))
            .toSorted((e, t) =>
              e.personal !== t.personal
                ? e.personal
                  ? -1
                  : 1
                : (e.personal && (t.template.createdAt ?? -1 / 0) - (e.template.createdAt ?? -1 / 0)) || 0,
            )
            .map(({ template: e }) => e)
        },
        K$: function e(t) {
          return "string" == typeof t ? "document" === t || "google-docs" === t : t.length > 0 && t.every(e)
        },
        Zk: function (e) {
          return Object.entries(a).find((t) => t[1].some((t) => t === e))?.[0] ?? null
        },
        qt: s,
      },
    )
  },
  K4Yp(e, t, n) {
    var a = n("ASxG")
    let s = a.k5n(["granola_workbook", "granola_presentation"]),
      i = a.Ikc({
        accountId: a.YjP().min(1),
        userId: a.YjP().min(1),
        hostId: a.YjP().min(1),
        threadId: a.YjP().min(1),
      }),
      o = i.extend({ artifactRef: a.YjP().min(1) }),
      l = a.Ikc({
        source: o,
        attemptId: a.uRe(),
        title: a.YjP().min(1),
        documentType: s,
        destination: a.euz("personal_file_drive").optional(),
        initialUpdate: a.YjP().min(1).optional(),
        imageFileIds: a.g1P(a.YjP().min(1), a.YjP().min(1)).optional(),
        snapshotSha256: a
          .YjP()
          .regex(/^[a-f0-9]{64}$/)
          .optional(),
        pageId: a.YjP().min(1).optional(),
        sourceReleased: a.zMY().optional(),
      }),
      r = a.Ikc({ source: o })
    a.YOg(a.KCZ([l, r]))
    let d = a.Ikc({
      source: i.extend({ path: a.YjP().min(1) }),
      pageId: a.YjP().min(1),
      title: a.YjP().min(1),
      documentType: s,
    })
    n.d(
      t,
      {},
      {
        LG: d,
        Nh: function (e, t) {
          return (
            e.accountId === t.accountId &&
            e.userId === t.userId &&
            e.hostId === t.hostId &&
            e.threadId === t.threadId &&
            e.artifactRef === t.artifactRef
          )
        },
        Qi: i,
        i9: s,
      },
    )
  },
  N55g(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("zd8w"),
      o = n("oyxz"),
      l = n("Fl60")
    n.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            n,
            r = (0, s.c)(5),
            { stage: d, errorClass: c } = e,
            u = (0, i.useContext)(l.b),
            g = u ? "true" : void 0,
            p = u ? (d ?? "") : void 0,
            f = u ? c : void 0
          return (
            r[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(o.A, {
                  id: "dil.modelWrittenV2.responseFailure",
                  defaultMessage: "This response couldn\u2019t load",
                })),
                (r[0] = t))
              : (t = r[0]),
            r[1] !== g || r[2] !== p || r[3] !== f
              ? ((n = (0, a.jsx)("div", {
                  role: "status",
                  "data-dil-render-failed": "",
                  "data-internal-render-dil-render-failure": g,
                  "data-internal-render-dil-v2-failure-stage": p,
                  "data-internal-render-dil-v2-error-class": f,
                  children: t,
                })),
                (r[1] = g),
                (r[2] = p),
                (r[3] = f),
                (r[4] = n))
              : (n = r[4]),
            n
          )
        },
      },
    )
  },
  eXbv(e, t, n) {
    n.d(t, {}, { D: "3026692602" })
  },
  plx2(e, t, n) {
    var a = n("ABep"),
      s = n("oyxz")
    n.d(
      t,
      {},
      {
        J: function (e) {
          if (null == e) return 0
          switch (e.phase) {
            case "checking":
            case "error":
              return 0
            case "downloading":
              if (null == e.downloadedBytes || null == e.totalBytes) return 0
              return Math.floor(Math.min((e.downloadedBytes / e.totalBytes) * 100, 100))
            case "verifying":
            case "extracting":
              return 98
            case "validating":
            case "installed":
            case "configuring":
            case "ready":
              return 100
          }
        },
        T: function (e, t) {
          switch (e?.phase) {
            case void 0:
            case "checking":
            case "downloading":
            case "error":
              return (0, a.jsx)(s.A, {
                id: "localConversation.primaryRuntimeInstallStatus.downloading",
                defaultMessage: "Setting up your workspace: {percent}%",
                values: { percent: t },
              })
            case "extracting":
              return (0, a.jsx)(s.A, {
                id: "localConversation.primaryRuntimeInstallStatus.extracting",
                defaultMessage: "Preparing your workspace",
              })
            case "verifying":
            case "validating":
            case "installed":
            case "configuring":
            case "ready":
              return (0, a.jsx)(s.A, {
                id: "localConversation.primaryRuntimeInstallStatus.finalizing",
                defaultMessage: "Finalizing your workspace",
              })
          }
        },
      },
    )
  },
  GrRy(e, t, n) {
    n.d(
      t,
      {},
      {
        V: function (e) {
          return ["app-host", "primary-runtime", "diagnostics", e]
        },
      },
    )
  },
  kg1F(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("oyxz"),
      o = n("moNn")
    n.d(
      t,
      {},
      {
        w: function (e) {
          let t,
            n = (0, s.c)(2),
            { effort: l } = e,
            r = o.h[l]
          return (n[0] !== r ? ((t = (0, a.jsx)(i.A, { ...r })), (n[0] = r), (n[1] = t)) : (t = n[1]), t)
        },
      },
    )
  },
  moNn(e, t, n) {
    var a = n("Qgfj")
    let s = (0, a.YK)({
        none: { id: "composer.mode.local.reasoning.none.label", defaultMessage: "None" },
        minimal: { id: "composer.mode.local.reasoning.minimal.label", defaultMessage: "Minimal" },
        low: { id: "composer.mode.local.reasoning.low.label.v2", defaultMessage: "Light" },
        medium: { id: "composer.mode.local.reasoning.medium.label", defaultMessage: "Medium" },
        high: { id: "composer.mode.local.reasoning.high.label", defaultMessage: "High" },
        xhigh: { id: "composer.mode.local.reasoning.xhigh.label", defaultMessage: "Extra High" },
        max: { id: "composer.mode.local.reasoning.max.label", defaultMessage: "Max" },
        ultra: { id: "composer.mode.local.reasoning.ultra.label", defaultMessage: "Ultra" },
        persistent: { id: "composer.mode.local.reasoning.persistent.label", defaultMessage: "Persistent" },
      }),
      i = {
        ...s,
        medium: (0, a.zR)({ id: "composer.modelPicker.work.reasoning.standard.label", defaultMessage: "Standard" }),
        high: (0, a.zR)({ id: "composer.modelPicker.work.reasoning.extended.label", defaultMessage: "Extended" }),
      }
    n.d(t, {}, { P: i, h: s })
  },
  K5PF(e, t, n) {
    var a = n("SRbQ"),
      s = n("qmMi"),
      i = n("K4Yp"),
      o = n("G4E3"),
      l = n("SPnB"),
      r = n("svjy"),
      d = n("GaA7"),
      c = n("OWtl"),
      u = n("tv8P"),
      g = n("Ky0Z")
    async function p(e, t) {
      let n = d.appServices?.artifactSessions
      if (null == n) return null
      let s = (0, u.watchSpaceAccount)(e, t.accountId, t.userId)
      try {
        let i = { stack: [], error: void 0, hasError: !1 }
        try {
          s.signal.throwIfAborted()
          let l = (0, a.mS)(i, await n.readHandoff({ artifactRef: t.artifactRef, threadId: t.threadId }), !1)
          s.signal.throwIfAborted()
          let d = l.handoff
          if (d?.target == null) return null
          let c = (0, o.I0)(d.target.uri)
          if (c?.kind !== "page" || new URL(d.target.uri).searchParams.get("account_id") !== t.accountId)
            throw Error("artifact_handoff_account_changed")
          return {
            source: t,
            attemptId: d.attemptId,
            pageId: c.id,
            title:
              l.title ||
              e
                .get(r.g)
                .formatMessage({
                  id: "artifactHandoff.untitledDocument",
                  defaultMessage: "Untitled document",
                  description: "Fallback name for a shared local document without a title",
                }),
            documentType: "presentation" === l.kind ? "granola_presentation" : "granola_workbook",
            targetArtifactRef: d.target.artifactRef,
          }
        } catch (e) {
          ;((i.error = e), (i.hasError = !0))
        } finally {
          ;(0, a.hk)(i)
        }
      } finally {
        s.stop()
      }
    }
    let f = (0, s.vU)(c.u, (e, { get: t, scope: n }) => ({
        queryKey: [
          "artifact-shared-page",
          e,
          t(g.h, null == e ? null : i.Qi.parse(e))?.find((t) => null != e && (0, i.Nh)(t.source, e)),
        ],
        enabled:
          null != e &&
          d.appServices?.artifactSessions != null &&
          e.accountId === t(u.spaceAccountId$) &&
          e.userId === t(l.chatGptAuthenticatedUserId$),
        staleTime: 0,
        retry: !1,
        queryFn: () => (null == e ? Promise.resolve(null) : p(n, e)),
      })),
      m = (0, s.vU)(c.u, (e, { get: t, scope: n }) => {
        let s = t(u.spaceAccountId$),
          i = t(l.chatGptAuthenticatedUserId$),
          o = null == s || null == i ? null : { accountId: s, userId: i, hostId: e.hostId, threadId: e.conversationId }
        return {
          queryKey: ["artifact-shared-pages", e, s, i, t(g.h, o)],
          enabled: null != o && d.appServices?.artifactSessions != null && d.appServices?.artifactPageHandoffs != null,
          staleTime: 0,
          queryFn: async () => {
            let e = { stack: [], error: void 0, hasError: !1 }
            try {
              if (null == o || d.appServices?.artifactPageHandoffs == null) return []
              let t = (0, a.mS)(e, await d.appServices.artifactPageHandoffs.list(o), !1)
              return (await Promise.all(t.map((e) => p(n, e.source).catch(() => null)))).filter((e) => null != e)
            } catch (t) {
              ;((e.error = t), (e.hasError = !0))
            } finally {
              ;(0, a.hk)(e)
            }
          },
        }
      })
    n.d(t, { BK: () => m, V: () => p, Zj: () => f, h2: () => g.h })
  },
  Ky0Z(e, t, n) {
    var a = n("qmMi"),
      s = n("SPnB"),
      i = n("GaA7"),
      o = n("OWtl")
    let l = (0, a.A4)(
      o.u,
      (e) => null,
      (e, { set: t }) => {
        if (null == e) return void t([])
        let n = i.appServices?.artifactPageHandoffs
        if (null == n) return void t([])
        let a = !0,
          s = n.subscribe(e, (e) => {
            a && t(e)
          })
        return (
          Promise.resolve(s).catch(() => {
            a && t(null)
          }),
          () => {
            ;((a = !1), s[Symbol.dispose]())
          }
        )
      },
      { autoDispose: !0 },
    )
    n.d(
      t,
      {},
      {
        h: l,
        v: function (e, t, n) {
          let a = e.get(s.chatGptAuthenticatedAccountId$),
            o = e.get(s.chatGptAuthenticatedUserId$)
          if (null == a || null == o || i.appServices?.artifactPageHandoffs == null) return !1
          let r = e.get(l, { accountId: a, userId: o, hostId: t, threadId: n })
          return null == r || r.length > 0
        },
      },
    )
  },
  qvFq(e, t, n) {
    var a = n("DBCl"),
      s = n("G4E3"),
      i = n("r9ga"),
      o = n("uqg3"),
      l = n("tv8P")
    n.d(
      t,
      {},
      {
        $: function (e, t) {
          let n = new URL(`/space/${encodeURIComponent(t)}`, new URL(a.WaA).origin)
          return (n.searchParams.set("account_id", e), n.href)
        },
        openPageArtifactTarget: function (e, t, n, a) {
          let r = (0, s.I0)(t)
          if (r?.kind !== "page") return !1
          let d = new URL(t).searchParams.get("account_id")
          return (
            null != d &&
            d === e.get(l.spaceAccountId$) &&
            ((e.value.persistentWorkspace?.key !== "/space" &&
              (0, i.Kk)(e, e.value.pathname) === e.get(l.spacePageId$, r.id)) ||
              (0, o.openSpacePageSidePanelTab)(e, r.id, {
                openSource: a?.openSource,
                title: n,
                target: a?.target,
                revealAndFocus:
                  a?.revealAndFocus === "if-created"
                    ? null == (0, o.getOpenSpacePageTab)(e, d, r.id)
                    : a?.revealAndFocus,
              }).opened)
          )
        },
      },
    )
  },
  oFmV(e, t, n) {
    let a = (0, n("zd8w").createContext)(null)
    n.d(t, {}, { S: a })
  },
  xASy(e, t, n) {
    var a = n("mdqK"),
      s = n("XHhS"),
      i = n("AjxG")
    let o = [
        { value: "on-request", label: s.z.onRequest, description: i.i.onRequestDescription },
        { value: "never", label: s.z.never, description: i.i.neverDescription },
      ],
      l = [
        { value: "on-failure", label: s.z.onFailure },
        { value: "untrusted", label: s.z.untrusted },
      ],
      r = [
        { value: "read-only", label: s.z.readOnly, description: "Can read files, but cannot edit them" },
        {
          value: "workspace-write",
          label: s.z.workspaceWrite,
          description: "Can edit files, but only in this workspace",
        },
        { value: "danger-full-access", label: s.z.fullAccess, description: "Can edit files outside this workspace" },
      ],
      d = [
        { value: "disabled", label: s.z.webSearchDisabled, description: s.z.webSearchDisabledDescription },
        { value: "cached", label: s.z.webSearchCached, description: s.z.webSearchCachedDescription },
        { value: "indexed", label: s.z.webSearchIndexed, description: s.z.webSearchIndexedDescription },
        { value: "live", label: s.z.webSearchLive, description: s.z.webSearchLiveDescription },
      ],
      c = [
        { value: null, label: s.z.modelDefault, description: null },
        { value: "low", label: s.z.modelVerbosityLow, description: s.z.modelVerbosityLowDescription },
        { value: "medium", label: s.z.modelVerbosityMedium, description: s.z.modelVerbosityMediumDescription },
        { value: "high", label: s.z.modelVerbosityHigh, description: s.z.modelVerbosityHighDescription },
      ],
      u = [
        { value: "auto", label: s.z.reasoningSummaryAuto, description: s.z.reasoningSummaryAutoDescription },
        { value: "concise", label: s.z.reasoningSummaryConcise, description: s.z.reasoningSummaryConciseDescription },
        {
          value: "detailed",
          label: s.z.reasoningSummaryDetailed,
          description: s.z.reasoningSummaryDetailedDescription,
        },
        { value: "none", label: s.z.reasoningSummaryNone, description: s.z.reasoningSummaryNoneDescription },
      ]
    n.d(
      t,
      {},
      {
        $d: u,
        PU: o,
        f$: l,
        jp: c,
        n9: r,
        ov: function (e, t) {
          let n = (0, a.b6)({ allowedModes: e?.allowedWebSearchModes ?? null, appServerVersion: t })
          return {
            approvalOptions: o.filter(
              (t) => e?.allowedApprovalPolicies == null || e.allowedApprovalPolicies.includes(t.value),
            ),
            sandboxOptions: r.filter((t) => e?.allowedSandboxModes == null || e.allowedSandboxModes.includes(t.value)),
            webSearchOptions: d.filter((e) => n.includes(e.value)),
          }
        },
      },
    )
  },
  QMAr(e, t, n) {
    var a = n("qmMi"),
      s = n("mdqK"),
      i = n("Qgfj"),
      o = n("tl5a"),
      l = n("eFn4"),
      r = n("eXbv"),
      d = n("PfPw"),
      c = n("zEV5"),
      u = n("B81s"),
      g = n("uppa"),
      p = n("xS4d"),
      f = n("GaA7"),
      m = n("OWtl"),
      h = n("ndjw"),
      x = n("kfGJ"),
      b = n("jBHQ"),
      w = n("pyOZ"),
      y = n("tzYO"),
      v = n("xASy"),
      j = n("XHhS"),
      k = n("K9wN")
    let A = { section: "agent", searchParams: { mode: "codex", configScope: "user" } },
      S = {
        scope: {
          section: "agent",
          id: "agent-config-scope",
          title: (0, i.zR)({ id: "settings.agent.configuration.scope.label", defaultMessage: "Configuration scope" }),
          keywords: [j.z.agentConfig],
        },
        customPermissions: {
          ...A,
          id: "agent-custom-permissions",
          title: (0, i.zR)({
            id: "settings.agent.configuration.customPermissions.label",
            defaultMessage: "Show custom permission options",
          }),
        },
        approval: { ...A, id: "agent-approval-policy", title: j.z.approvalPolicy },
        sandbox: { ...A, id: "agent-sandbox", title: j.z.sandboxSettings },
        network: { ...A, id: "agent-network-access", title: j.z.networkAccess },
        webSearch: { ...A, id: "agent-web-search", title: j.z.webSearch },
        modelVerbosity: {
          ...A,
          id: "agent-model-verbosity",
          title: j.z.modelVerbosity,
          options: v.jp.map(({ label: e }) => e),
        },
        reasoningSummary: {
          ...A,
          id: "agent-reasoning-summary",
          title: j.z.reasoningSummary,
          options: v.$d.map(({ label: e }) => e),
        },
        configToml: {
          section: "agent",
          id: "agent-config-toml",
          title: (0, i.zR)({ id: "settings.agent.configuration.configToml", defaultMessage: "config.toml" }),
        },
        openConfigToml: j.a,
        enableDependencies: { ...A, id: "agent-enable-dependencies", title: j.z.codexDependencies },
        diagnoseDependencies: { ...A, id: "agent-diagnose-dependencies", title: j.z.diagnoseWorkspaceDependencies },
        reinstallDependencies: { ...A, id: "agent-reinstall-dependencies", title: j.z.resetWorkspaceDependencies },
      },
      M = {
        ...S.customPermissions,
        description: (0, i.zR)({
          id: "settings.agent.configuration.customPermissions.description",
          defaultMessage: "Show advanced permission settings and add Custom to the permissions menu when available",
        }),
      },
      C = (0, a.i1)(m.u, (e, { get: t }) => {
        if (!t(c.Ax, e)) return "unavailable"
        if ("host" !== t(w.gS)) return "loading"
        let n = t(c.lt, e)
        return null == n ? "loading" : "hidden" === n ? "disabled" : "enabled"
      }),
      _ = (0, a.i1)(m.u, (e, { get: t }) => {
        let n = t(l.Xr)
        if (!n && t(y.v8)) return []
        let a = n
          ? (function (e, t) {
              let n = e(C, t),
                a = "unavailable" === n || "enabled" === n,
                i = e(u.b9, { hostId: t }, { enabled: !1 }),
                l = null == i.data ? null : (0, v.ov)(i.data.requirements, e(o.B0, t)),
                r = [
                  S.scope,
                  ...("enabled" === n || "disabled" === n ? [M] : []),
                  ...(a
                    ? [
                        { ...S.approval, options: l?.approvalOptions.map(({ label: e }) => e) },
                        { ...S.sandbox, options: l?.sandboxOptions.map(({ label: e }) => e) },
                      ]
                    : []),
                  { ...S.webSearch, options: l?.webSearchOptions.map(({ label: e }) => e) },
                  S.modelVerbosity,
                  S.reasoningSummary,
                  S.openConfigToml,
                ]
              if (a) {
                let n = "local" === t ? e(h.pY) : null,
                  a = e(g.uV, { hostId: t, cwd: n }, { enabled: !1 }).data
                null != a && D(P((0, s.py)(a.layers)?.config ?? null), a.config.sandbox_mode) && r.push(S.network)
              }
              return r
            })(t, e)
          : []
        if (t(b.P, r.D)) {
          let n = t(d.mO)
          null != I(n?.id === e ? n : (0, x.vR)(e, [...(t(p.EP) ?? []), ...(t(p.K) ?? []), ...(t(p.Zr) ?? [])]), !0) &&
            a.push(S.enableDependencies, S.diagnoseDependencies, S.reinstallDependencies)
        }
        return [...a, ...t(k.Hb, e)]
      })
    function I(e, t) {
      return t && "local" === e.kind ? (f.appServices.primaryRuntime ?? null) : null
    }
    function P(e) {
      if (null == e || "object" != typeof e || Array.isArray(e)) return null
      let t = e.sandbox_mode
      return "read-only" === t || "workspace-write" === t || "danger-full-access" === t ? t : null
    }
    function D(e, t) {
      return (e ?? t) === "workspace-write"
    }
    n.d(t, {}, { Q5: D, h6: C, uf: _, uk: S, ul: P, wi: I })
  },
  XHhS(e, t, n) {
    var a = n("Qgfj")
    let s = (0, a.YK)({
        customConfig: { id: "settings.agent.customConfig.sectionTitle", defaultMessage: "Custom config.toml settings" },
        agentConfig: { id: "settings.agent.configuration.scope.sectionTitle", defaultMessage: "Agent config" },
        agentDefaults: { id: "settings.agent.agentDefaults.sectionTitle", defaultMessage: "Agent defaults" },
        projectConfig: { id: "settings.agent.configuration.scope.projectGroup", defaultMessage: "Project config" },
        globalConfig: { id: "settings.agent.configuration.scope.globalGroup", defaultMessage: "Global config" },
        userConfig: { id: "settings.agent.configuration.scope.user", defaultMessage: "User config" },
        adminConfig: { id: "settings.agent.configuration.scope.managed", defaultMessage: "Admin config" },
        managedConfigNoFile: {
          id: "settings.agent.configuration.scope.managedConfigNoFile",
          defaultMessage: "This configuration doesn\u2019t have a file to open",
        },
        approvalPolicy: { id: "settings.agent.configuration.approval.label", defaultMessage: "Approval policy" },
        untrusted: { id: "settings.agent.configuration.approval.option.untrusted", defaultMessage: "Untrusted" },
        onFailure: { id: "settings.agent.configuration.approval.option.onFailure", defaultMessage: "On failure" },
        onRequest: { id: "settings.agent.configuration.approval.option.onRequest", defaultMessage: "On request" },
        never: { id: "settings.agent.configuration.approval.option.never", defaultMessage: "Never ask for approval" },
        sandboxSettings: { id: "settings.agent.configuration.sandbox.label", defaultMessage: "Sandbox settings" },
        readOnly: { id: "settings.agent.configuration.sandbox.option.readOnly", defaultMessage: "Read only" },
        workspaceWrite: {
          id: "settings.agent.configuration.sandbox.option.workspaceWrite",
          defaultMessage: "Workspace write",
        },
        fullAccess: { id: "settings.agent.configuration.sandbox.option.fullAccess", defaultMessage: "Full access" },
        networkAccess: { id: "settings.agent.configuration.network.label", defaultMessage: "Allow network access" },
        webSearch: { id: "settings.agent.configuration.webSearch.label", defaultMessage: "Web search" },
        webSearchDisabled: { id: "settings.agent.configuration.webSearch.option.disabled", defaultMessage: "Disabled" },
        webSearchDisabledDescription: {
          id: "settings.agent.configuration.webSearch.option.disabled.description",
          defaultMessage: "Don't allow web search",
        },
        webSearchCached: { id: "settings.agent.configuration.webSearch.option.cached", defaultMessage: "Cached" },
        webSearchCachedDescription: {
          id: "settings.agent.configuration.webSearch.option.cached.description",
          defaultMessage: "Use OpenAI's maintained search index",
        },
        webSearchIndexed: { id: "settings.agent.configuration.webSearch.option.indexed", defaultMessage: "Indexed" },
        webSearchIndexedDescription: {
          id: "settings.agent.configuration.webSearch.option.indexed.description",
          defaultMessage: "Allow indexed external web access",
        },
        webSearchLive: { id: "settings.agent.configuration.webSearch.option.live", defaultMessage: "Live" },
        webSearchLiveDescription: {
          id: "settings.agent.configuration.webSearch.option.live.description",
          defaultMessage: "Allow unrestricted, current web access",
        },
        modelVerbosity: { id: "settings.agent.configuration.modelVerbosity.label", defaultMessage: "Output detail" },
        modelVerbosityLow: { id: "settings.agent.configuration.modelVerbosity.option.low", defaultMessage: "Low" },
        modelVerbosityLowDescription: {
          id: "settings.agent.configuration.modelVerbosity.option.low.description",
          defaultMessage: "Keep responses concise",
        },
        modelVerbosityMedium: {
          id: "settings.agent.configuration.modelVerbosity.option.medium",
          defaultMessage: "Medium",
        },
        modelVerbosityMediumDescription: {
          id: "settings.agent.configuration.modelVerbosity.option.medium.description",
          defaultMessage: "Balance detail and brevity",
        },
        modelVerbosityHigh: { id: "settings.agent.configuration.modelVerbosity.option.high", defaultMessage: "High" },
        modelVerbosityHighDescription: {
          id: "settings.agent.configuration.modelVerbosity.option.high.description",
          defaultMessage: "Include more detail in responses",
        },
        modelDefault: { id: "settings.agent.configuration.modelDefault", defaultMessage: "Model default" },
        reasoningSummary: {
          id: "settings.agent.configuration.reasoningSummary.label",
          defaultMessage: "Reasoning summary",
        },
        reasoningSummaryAuto: {
          id: "settings.agent.configuration.reasoningSummary.option.auto",
          defaultMessage: "Auto",
        },
        reasoningSummaryAutoDescription: {
          id: "settings.agent.configuration.reasoningSummary.option.auto.description",
          defaultMessage: "Let the model choose the summary detail",
        },
        reasoningSummaryConcise: {
          id: "settings.agent.configuration.reasoningSummary.option.concise",
          defaultMessage: "Concise",
        },
        reasoningSummaryConciseDescription: {
          id: "settings.agent.configuration.reasoningSummary.option.concise.description",
          defaultMessage: "Show a brief reasoning summary",
        },
        reasoningSummaryDetailed: {
          id: "settings.agent.configuration.reasoningSummary.option.detailed",
          defaultMessage: "Detailed",
        },
        reasoningSummaryDetailedDescription: {
          id: "settings.agent.configuration.reasoningSummary.option.detailed.description",
          defaultMessage: "Show a more detailed reasoning summary",
        },
        reasoningSummaryNone: {
          id: "settings.agent.configuration.reasoningSummary.option.none",
          defaultMessage: "None",
        },
        reasoningSummaryNoneDescription: {
          id: "settings.agent.configuration.reasoningSummary.option.none.description",
          defaultMessage: "Don't show reasoning summaries",
        },
        workspaceDependencies: { id: "settings.agent.dependencies.sectionTitle", defaultMessage: "Workspace tools" },
        currentDependencyVersion: {
          id: "settings.agent.dependencies.bundleVersion.label",
          defaultMessage: "Current version:",
        },
        codexDependencies: { id: "settings.agent.dependencies.enabled.label", defaultMessage: "Tools" },
        diagnoseWorkspaceDependencies: {
          id: "settings.agent.dependencies.diagnose.label",
          defaultMessage: "Check tools",
        },
        resetWorkspaceDependencies: {
          id: "settings.agent.dependencies.reset.label",
          defaultMessage: "Reinstall tools",
        },
        experimentalFeatures: {
          id: "settings.general.experimentalFeatures",
          defaultMessage: "Experimental features (Beta)",
        },
      }),
      i = (0, a.zR)({ id: "settings.agent.configuration.scope.open", defaultMessage: "Open config.toml" }),
      o = {
        section: "agent",
        id: "agent-open-config",
        searchParams: { mode: "codex", configScope: "user" },
        title: (0, a.zR)({ id: "settings.agent.configuration.scope.fileTitle", defaultMessage: "Configuration file" }),
        description: (0, a.zR)({
          id: "settings.agent.configuration.scope.fileDescription",
          defaultMessage: "View the config.toml file for the current selection",
        }),
        keywords: [i],
      }
    n.d(t, {}, { a: o, z: s })
  },
  AjxG(e, t, n) {
    let a = (0, n("Qgfj").YK)({
      onRequestDescription: {
        id: "settings.agent.configuration.approval.option.onRequest.description",
        defaultMessage: "Ask when escalation is requested",
      },
      neverDescription: {
        id: "settings.agent.configuration.approval.option.never.description",
        defaultMessage: "Blocked actions fail instead of requesting approval",
      },
    })
    n.d(t, {}, { i: a })
  },
  ZL1D(e, t, n) {
    var a = n("mBJV"),
      s = n("ASxG"),
      i = n("yGJW")
    a.crf.CHATGPT_SECURITY_RECOMMENDATION_SURFACE_SECURITY_SETTINGS
    let o = s.Ikc({
        recommendationId: s.k5n(["add_passkey", "add_sms_backup", "add_email", "review_sessions"]),
        decisionId: s.YjP().optional(),
        policyVersion: s.YjP().optional(),
        presentationId: s.uRe(),
        actionAttemptId: s.uRe(),
        position: s.aig().int().positive(),
        surface: s.k5n(a.crf),
      }),
      l = {
        add_passkey: "CHATGPT_SECURITY_RECOMMENDATION_TYPE_ADD_PASSKEY",
        add_sms_backup: "CHATGPT_SECURITY_RECOMMENDATION_TYPE_ADD_SMS_BACKUP",
        add_email: "CHATGPT_SECURITY_RECOMMENDATION_TYPE_ADD_EMAIL",
        review_sessions: "CHATGPT_SECURITY_RECOMMENDATION_TYPE_REVIEW_SESSIONS",
      }
    n.d(
      t,
      {},
      {
        Ce: o,
        fY: function (e, t, n) {
          if (t && n)
            try {
              ;(0, i.yy)(e, a.vKV, {
                stage: "CHATGPT_SECURITY_RECOMMENDATION_STAGE_ACTION_STARTED",
                actionAttemptId: t,
                mfaRequestId: n,
              })
            } catch {}
        },
        gM: function (e, t) {
          if (t) {
            var n = t.actionAttemptId
            try {
              ;(0, i.yy)(e, a.vKV, {
                decisionId: t.decisionId,
                policyVersion: t.policyVersion,
                presentationId: t.presentationId,
                actionAttemptId: n,
                recommendationType: l[t.recommendationId],
                stage: "CHATGPT_SECURITY_RECOMMENDATION_STAGE_ACTION_COMPLETED",
                surface: t.surface,
                position: t.position,
              })
            } catch {}
          }
        },
      },
    )
  },
  b6Vw(e, t, n) {
    n.d(t, {}, { c: "chronicle" })
  },
  K9wN(e, t, n) {
    n.d(t, { J1: () => p, iV: () => b, Hb: () => x, Dd: () => y, WK: () => w, ts: () => h })
    var a = n("qmMi"),
      s = n("d5Fp"),
      i = n("Qgfj"),
      o = n("Gg2s"),
      l = n("OWtl"),
      r = n("jMec"),
      d = n("jBHQ"),
      c = n("DBCl"),
      u = n("TjCl"),
      g = n("b6Vw")
    let p = "2106641128",
      f = { mode: "codex" },
      m = (0, i.YK)({
        requestUserInput: {
          id: "settings.general.experimentalFeatures.requestUserInput.label",
          defaultMessage: "Request user input",
        },
        requestUserInputDescription: {
          id: "settings.general.experimentalFeatures.requestUserInput.description",
          defaultMessage: "Allow Codex to ask questions outside Plan mode. Changes apply only to new chats",
        },
      }),
      h = {
        section: "agent",
        id: "agent-request-user-input",
        searchParams: f,
        title: m.requestUserInput,
        description: m.requestUserInputDescription,
      },
      x = (0, a.i1)(l.u, (e, { get: t }) => {
        if (!t(d.P, p)) return []
        let n = t(o.u9, e, { enabled: !1 })
        return [...(b(t(r.B), n.isPending) ? [h] : []), ...w(n.data ?? []).map(y)]
      })
    function b(e, t) {
      return !t && e?.[s.il] === !0
    }
    function w(e) {
      return e.filter(
        (e) =>
          "beta" === e.stage &&
          e.name !== u.j &&
          "multi_agent" !== e.name &&
          "plugins" !== e.name &&
          "plugin" !== e.name &&
          "remote_control" !== e.name &&
          !e.name.startsWith("realtime_") &&
          e.name !== g.c &&
          e.name !== c.R1o &&
          e.name !== s.il,
      )
    }
    function y(e) {
      return {
        section: "agent",
        id: `agent-beta-${e.name.replaceAll("_", "-")}`,
        searchParams: f,
        title: { localizedText: e.displayName ?? e.name },
      }
    }
  },
  gUPW(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("qmMi"),
      o = n("zd8w"),
      l = n("Wf1j"),
      r = n("oyxz"),
      d = n("CTWI"),
      c = n("F0xz"),
      u = n("Gg2s"),
      g = n("pO0d"),
      p = n("pIY4")
    n.d(
      t,
      {},
      {
        I: function (e) {
          let t,
            n,
            f,
            m,
            h,
            x,
            b = (0, s.c)(16),
            { hostId: w } = e,
            y = (0, l.A)(),
            v = (0, i._U)(p.z, w)
          b[0] !== w ? ((t = { hostId: w }), (b[0] = w), (b[1] = t)) : (t = b[1])
          let j = (0, u.jv)(t),
            [k, A] = (0, o.useState)(!1)
          if (null == v) return null
          b[2] !== k
            ? ((n = k
                ? (0, a.jsx)(r.A, {
                    id: "settings.general.plugins.restartNotice",
                    defaultMessage: "Restart {appName} to apply this change",
                    values: { appName: d.C },
                  })
                : (0, a.jsx)(r.A, {
                    id: "settings.general.plugins.description",
                    defaultMessage: "Allow ChatGPT to use installed plugins",
                  })),
              (b[2] = k),
              (b[3] = n))
            : (n = b[3])
          let S = v.enabled,
            M = j.isPending
          return (
            b[4] !== j
              ? ((f = (e) => {
                  j.mutate(
                    { featureName: "plugins", enabled: e },
                    {
                      onSuccess: () => {
                        A(!0)
                      },
                    },
                  )
                }),
                (b[4] = j),
                (b[5] = f))
              : (f = b[5]),
            b[6] !== y
              ? ((m = y.formatMessage({ id: "settings.general.plugins.toggle", defaultMessage: "Toggle plugins" })),
                (b[6] = y),
                (b[7] = m))
              : (m = b[7]),
            b[8] !== j.isPending || b[9] !== v.enabled || b[10] !== f || b[11] !== m
              ? ((h = (0, a.jsx)(c.l, { checked: S, disabled: M, onChange: f, ariaLabel: m })),
                (b[8] = j.isPending),
                (b[9] = v.enabled),
                (b[10] = f),
                (b[11] = m),
                (b[12] = h))
              : (h = b[12]),
            b[13] !== n || b[14] !== h
              ? ((x = (0, a.jsx)(g.GC, { entry: p.J, description: n, control: h })),
                (b[13] = n),
                (b[14] = h),
                (b[15] = x))
              : (x = b[15]),
            x
          )
        },
      },
    )
  },
  pIY4(e, t, n) {
    var a = n("qmMi"),
      s = n("Qgfj"),
      i = n("Gg2s"),
      o = n("OWtl")
    let l = {
        section: "general-settings",
        id: "general-plugins",
        title: (0, s.zR)({ id: "settings.general.plugins.label", defaultMessage: "Plugins" }),
      },
      r = (0, a.i1)(o.u, (e, { get: t }) => {
        let n = t(i.u9, e).data
        return n?.some((e) => "apps" === e.name && e.enabled)
          ? { enabled: n.find((e) => "plugins" === e.name)?.enabled ?? !0 }
          : null
      })
    n.d(t, {}, { J: l, z: r })
  },
  pO0d(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("oyxz"),
      o = n("Wf1j"),
      l = n("AWNZ"),
      r = n("DDOY")
    function d(e) {
      let t,
        n = (0, s.c)(2),
        { title: o } = e
      return (
        n[0] !== o
          ? ((t =
              "localizedText" in o ? (0, a.jsx)(a.Fragment, { children: o.localizedText }) : (0, a.jsx)(i.A, { ...o })),
            (n[0] = o),
            (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    n.d(
      t,
      {},
      {
        Ct: d,
        GC: function (e) {
          let t,
            n,
            o,
            r,
            c,
            u,
            g,
            p,
            f,
            m = (0, s.c)(19)
          m[0] !== e
            ? (({ entry: n, anchored: c, description: t, renderLabel: r, ...o } = e),
              (m[0] = e),
              (m[1] = t),
              (m[2] = n),
              (m[3] = o),
              (m[4] = r),
              (m[5] = c))
            : ((t = m[1]), (n = m[2]), (o = m[3]), (r = m[4]), (c = m[5]))
          let h = void 0 === c || c
          m[6] !== n.title ? ((u = (0, a.jsx)(d, { title: n.title })), (m[6] = n.title), (m[7] = u)) : (u = m[7])
          let x = u,
            b = h ? n.id : void 0
          return (
            m[8] !== x || m[9] !== r ? ((g = null == r ? x : r(x)), (m[8] = x), (m[9] = r), (m[10] = g)) : (g = m[10]),
            m[11] !== t || m[12] !== n.description
              ? ((p = null == n.description ? t : (0, a.jsx)(i.A, { ...n.description })),
                (m[11] = t),
                (m[12] = n.description),
                (m[13] = p))
              : (p = m[13]),
            m[14] !== o || m[15] !== b || m[16] !== g || m[17] !== p
              ? ((f = (0, a.jsx)(l.ic, { ...o, searchAnchor: b, label: g, description: p })),
                (m[14] = o),
                (m[15] = b),
                (m[16] = g),
                (m[17] = p),
                (m[18] = f))
              : (f = m[18]),
            f
          )
        },
        ek: function (e) {
          let t,
            n,
            i = (0, s.c)(12),
            { entry: l, anchored: d, className: c, children: u } = e,
            g = void 0 === d || d,
            p = (0, o.A)(),
            f = g ? l.id : void 0,
            m = g ? l.id : void 0,
            h = g ? -1 : void 0,
            x = g ? "group" : void 0
          return (
            i[0] !== g || i[1] !== l || i[2] !== p
              ? ((t = g ? (0, r.hz)(p, l.title) : void 0), (i[0] = g), (i[1] = l), (i[2] = p), (i[3] = t))
              : (t = i[3]),
            i[4] !== u || i[5] !== c || i[6] !== f || i[7] !== m || i[8] !== h || i[9] !== x || i[10] !== t
              ? ((n = (0, a.jsx)("div", {
                  id: f,
                  "data-settings-search-entry": m,
                  tabIndex: h,
                  role: x,
                  "aria-label": t,
                  className: c,
                  children: u,
                })),
                (i[4] = u),
                (i[5] = c),
                (i[6] = f),
                (i[7] = m),
                (i[8] = h),
                (i[9] = x),
                (i[10] = t),
                (i[11] = n))
              : (n = i[11]),
            n
          )
        },
        iu: function (e) {
          let t,
            n,
            i,
            o = (0, s.c)(6)
          return (
            o[0] !== e ? (({ action: t, ...n } = e), (o[0] = e), (o[1] = t), (o[2] = n)) : ((t = o[1]), (n = o[2])),
            o[3] !== t || o[4] !== n
              ? ((i = (0, a.jsx)(l.ic, { ...n, control: t })), (o[3] = t), (o[4] = n), (o[5] = i))
              : (i = o[5]),
            i
          )
        },
        kk: function (e) {
          let t,
            n,
            o,
            r,
            c,
            u,
            g,
            p = (0, s.c)(15)
          p[0] !== e
            ? (({ entry: n, anchored: r, description: t, ...o } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = n),
              (p[3] = o),
              (p[4] = r))
            : ((t = p[1]), (n = p[2]), (o = p[3]), (r = p[4]))
          let f = void 0 === r || r ? n.id : void 0
          return (
            p[5] !== n.title ? ((c = (0, a.jsx)(d, { title: n.title })), (p[5] = n.title), (p[6] = c)) : (c = p[6]),
            p[7] !== t || p[8] !== n.description
              ? ((u = null == n.description ? t : (0, a.jsx)(i.A, { ...n.description })),
                (p[7] = t),
                (p[8] = n.description),
                (p[9] = u))
              : (u = p[9]),
            p[10] !== o || p[11] !== f || p[12] !== c || p[13] !== u
              ? ((g = (0, a.jsx)(l.kG, { ...o, searchAnchor: f, label: c, description: u })),
                (p[10] = o),
                (p[11] = f),
                (p[12] = c),
                (p[13] = u),
                (p[14] = g))
              : (g = p[14]),
            g
          )
        },
      },
    )
  },
  BSnr(e, t, n) {
    n.d(t, { X: () => o })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("on57")
    let o = Object.assign(
      function (e) {
        let t,
          n,
          o = (0, s.c)(6),
          { children: l, id: r, className: d } = e
        return (
          o[0] !== d ? ((t = (0, i.A)("flex flex-col", d)), (o[0] = d), (o[1] = t)) : (t = o[1]),
          o[2] !== l || o[3] !== r || o[4] !== t
            ? ((n = (0, a.jsx)("section", { id: r, className: t, children: l })),
              (o[2] = l),
              (o[3] = r),
              (o[4] = t),
              (o[5] = n))
            : (n = o[5]),
          n
        )
      },
      {
        Header: function (e) {
          let t,
            n,
            o,
            l,
            r,
            d,
            c,
            u = (0, s.c)(33),
            {
              title: g,
              subtitle: p,
              actions: f,
              actionsAlignment: m,
              className: h,
              size: x,
              showDivider: b,
              titleGap: w,
              spacing: y,
              subtitlePlacement: v,
              subtitleWrap: j,
            } = e,
            k = void 0 === x ? "default" : x,
            A = void 0 === y ? "default" : y,
            S = void 0 === v ? "below-title" : v,
            M = void 0 === j ? "balance" : j,
            C = null != g,
            _ = null != p,
            I = null != f,
            P = "compact" === k
          u[0] !== P || u[1] !== p || u[2] !== S || u[3] !== M
            ? ((t = p
                ? (0, a.jsx)("div", {
                    className: (0, i.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === M ? "text-balance" : "text-wrap",
                      P ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === S && "w-full",
                    ),
                    children: p,
                  })
                : null),
              (u[0] = P),
              (u[1] = p),
              (u[2] = S),
              (u[3] = M),
              (u[4] = t))
            : (t = u[4])
          let D = t
          if (!C && !_ && !I) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(a.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let T =
              C && (void 0 === b || b) && "[[data-settings-panel]_&]:border-b [[data-settings-panel]_&]:border-default",
            R = "below-header" === S ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            E = _ && "compact" === A && "pb-2",
            N = _ && "compact" !== A && "pb-3"
          u[6] !== h ||
          u[7] !== _ ||
          u[8] !== P ||
          u[9] !== A ||
          u[10] !== E ||
          u[11] !== N ||
          u[12] !== T ||
          u[13] !== R
            ? ((n = (0, i.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                T,
                R,
                E,
                N,
                !_ && (0, i.A)("items-center pb-1.5", "compact" === A ? "min-h-8" : "min-h-toolbar"),
                _ && P && "items-center",
                _ && !P && "items-start",
                h,
              )),
              (u[6] = h),
              (u[7] = _),
              (u[8] = P),
              (u[9] = A),
              (u[10] = E),
              (u[11] = N),
              (u[12] = T),
              (u[13] = R),
              (u[14] = n))
            : (n = u[14])
          let z =
            "none" === (void 0 === w ? "default" : w)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[15] !== z ? ((o = (0, i.A)("flex min-w-0 flex-1 flex-col", z)), (u[15] = z), (u[16] = o)) : (o = u[16]),
            u[17] !== _ || u[18] !== k || u[19] !== g
              ? ((l = g
                  ? (0, a.jsx)("div", {
                      className: (0, i.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === k && "text-sm leading-[18px]",
                        ("large" === k || ("default" === k && _)) && "text-lg",
                        ("base" === k || ("default" === k && !_)) && "text-base",
                      ),
                      children: g,
                    })
                  : null),
                (u[17] = _),
                (u[18] = k),
                (u[19] = g),
                (u[20] = l))
              : (l = u[20]))
          let O = "below-title" === S ? D : null
          ;(u[21] !== o || u[22] !== l || u[23] !== O
            ? ((r = (0, a.jsxs)("div", { className: o, children: [l, O] })),
              (u[21] = o),
              (u[22] = l),
              (u[23] = O),
              (u[24] = r))
            : (r = u[24]),
            u[25] !== f || u[26] !== m
              ? ((d = f
                  ? (0, a.jsx)("div", {
                      className: (0, i.A)("flex items-center gap-2", "end" === m && "self-end"),
                      children: f,
                    })
                  : null),
                (u[25] = f),
                (u[26] = m),
                (u[27] = d))
              : (d = u[27]))
          let L = "below-header" === S ? D : null
          return (
            u[28] !== n || u[29] !== r || u[30] !== d || u[31] !== L
              ? ((c = (0, a.jsxs)("div", { className: n, children: [r, d, L] })),
                (u[28] = n),
                (u[29] = r),
                (u[30] = d),
                (u[31] = L),
                (u[32] = c))
              : (c = u[32]),
            c
          )
        },
        Content: function (e) {
          let t,
            n,
            o = (0, s.c)(5),
            { children: l, className: r } = e
          return (
            o[0] !== r ? ((t = (0, i.A)("flex flex-col gap-1.5", r)), (o[0] = r), (o[1] = t)) : (t = o[1]),
            o[2] !== l || o[3] !== t
              ? ((n = (0, a.jsx)("div", { className: t, children: l })), (o[2] = l), (o[3] = t), (o[4] = n))
              : (n = o[4]),
            n
          )
        },
        Footer: function (e) {
          let t,
            n,
            o = (0, s.c)(6),
            { children: l, className: r, variant: d } = e,
            c =
              "action" === (void 0 === d ? "description" : d)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            o[0] !== r || o[1] !== c
              ? ((t = (0, i.A)("text-balance text-secondary", c, r)), (o[0] = r), (o[1] = c), (o[2] = t))
              : (t = o[2]),
            o[3] !== l || o[4] !== t
              ? ((n = (0, a.jsx)("div", { className: t, children: l })), (o[3] = l), (o[4] = t), (o[5] = n))
              : (n = o[5]),
            n
          )
        },
      },
    )
  },
  I7Ou(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("RNul"),
      o = n("AWNZ")
    n.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            n,
            l = (0, s.c)(3),
            { children: r } = e
          return (
            l[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(i.y, { className: "icon-xs shrink-0 text-secondary" })), (l[0] = t))
              : (t = l[0]),
            l[1] !== r
              ? ((n = (0, a.jsx)("div", {
                  role: "status",
                  children: (0, a.jsx)(o.ic, {
                    label: (0, a.jsxs)("span", {
                      className: "flex items-center gap-2 font-normal text-secondary",
                      children: [t, (0, a.jsx)("span", { className: "text-balance", children: r })],
                    }),
                    control: null,
                  }),
                })),
                (l[1] = r),
                (l[2] = n))
              : (n = l[2]),
            n
          )
        },
      },
    )
  },
  odCE(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("oyxz"),
      o = n("RNul")
    n.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            n,
            l,
            r = (0, s.c)(5),
            { children: d } = e
          return (
            r[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(o.y, { className: "icon-xs shrink-0 text-secondary" })), (r[0] = t))
              : (t = r[0]),
            r[1] !== d
              ? ((n =
                  void 0 === d
                    ? (0, a.jsx)(i.A, { id: "settings.panel.loading", defaultMessage: "Loading settings\u2026" })
                    : d),
                (r[1] = d),
                (r[2] = n))
              : (n = r[2]),
            r[3] !== n
              ? ((l = (0, a.jsxs)("div", {
                  className: "flex items-center gap-2 py-2 text-sm text-secondary",
                  role: "status",
                  children: [t, (0, a.jsx)("span", { className: "text-balance", children: n })],
                })),
                (r[3] = n),
                (r[4] = l))
              : (l = r[4]),
            l
          )
        },
      },
    )
  },
  b8kl(e, t, n) {
    var a = n("ASxG"),
      s = n("ZL1D")
    let i = a
      .Ikc({
        passkeyEnrollmentCompleted: a.euz(!0).optional(),
        pepperOnboardingPersonalization: a.euz(!0).optional(),
        pepperOnboardingAccountId: a.YjP().optional(),
        returnToPreviousHistoryEntry: a.euz(!0).optional(),
        securitySubviewHasParent: a.euz(!0).optional(),
        securitySessionReviewIntent: a
          .Ikc({ accountId: a.YjP(), userId: a.YjP(), recommendationAttempt: s.Ce.optional().catch(void 0) })
          .optional(),
        securityAddEmailIntent: a
          .Ikc({ accountId: a.YjP(), userId: a.YjP(), recommendationAttempt: s.Ce.optional().catch(void 0) })
          .optional(),
        workspaceRoot: a.YjP().min(1).nullable().optional(),
      })
      .loose()
    n.d(
      t,
      {},
      {
        Ei: function (e) {
          let t = i.safeParse(e)
          return t.success && Object.hasOwn(t.data, "workspaceRoot")
            ? { hasValue: !0, workspaceRoot: t.data.workspaceRoot ?? null }
            : { hasValue: !1, workspaceRoot: null }
        },
        Kn: function (e, t, n) {
          let a = i.safeParse(e)
          return (
            a.success && a.data.securityAddEmailIntent?.accountId === t && a.data.securityAddEmailIntent.userId === n
          )
        },
        Qt: function (e) {
          let t = i.safeParse(e)
          return t.success && !0 === t.data.securitySubviewHasParent
        },
        TK: function (e) {
          let t = i.safeParse(e)
          return t.success && !0 === t.data.passkeyEnrollmentCompleted
        },
        VX: function (e) {
          let t = i.safeParse(e)
          return t.success && !0 === t.data.returnToPreviousHistoryEntry
        },
        lX: function (e) {
          let t = i.safeParse(e)
          if (!t.success || !t.data.securityAddEmailIntent) return e
          let n = { ...t.data }
          return (delete n.securityAddEmailIntent, n)
        },
        tt: function (e) {
          let t = i.safeParse(e)
          return t.success && !0 === t.data.pepperOnboardingPersonalization
            ? (t.data.pepperOnboardingAccountId ?? null)
            : null
        },
        x9: function (e, t, n, a) {
          let s = i.safeParse(e),
            o = s.success ? s.data[t] : void 0
          return o?.accountId === n && o.userId === a ? o.recommendationAttempt : void 0
        },
        z7: function (e, t, n) {
          let a = i.safeParse(e)
          return (
            a.success &&
            a.data.securitySessionReviewIntent?.accountId === t &&
            a.data.securitySessionReviewIntent.userId === n
          )
        },
      },
    )
  },
  DDOY(e, t, n) {
    var a = n("Ywss"),
      s = n("iiZm")
    function i(e, t) {
      return "localizedText" in t ? t.localizedText : e.formatMessage(t, t.values)
    }
    n.d(
      t,
      {},
      {
        Xl: function (e, t, n) {
          let s = (0, a.Rr)(e),
            i = new URLSearchParams(s.search)
          for (let [e, t] of Object.entries(n ?? {})) i.set(e, t)
          return (0, a.AO)({ ...s, search: i.toString(), hash: t })
        },
        hz: i,
        s9: function (e, t, n) {
          let a = n.trim()
          return 0 === a.length
            ? []
            : e
                .flatMap((e) => {
                  let n = i(t, e.title),
                    o = (0, s.gr)(n, a),
                    l = (null == e.description ? "" : t.formatMessage(e.description))
                      .toLocaleLowerCase(t.locale)
                      .includes(a.toLocaleLowerCase(t.locale)),
                    r = [...(e.options ?? []), ...(e.keywords ?? [])].some((e) => (0, s.gr)(i(t, e), a) > 0)
                  return 0 !== o || l || r
                    ? [
                        {
                          id: e.id,
                          label: n,
                          score: o,
                          sectionSlug: e.section,
                          path: e.path,
                          searchParams: e.searchParams,
                        },
                      ]
                    : []
                })
                .sort((e, t) => t.score - e.score)
                .map(({ id: e, label: t, sectionSlug: n, path: a, searchParams: s }) => ({
                  id: e,
                  label: t,
                  sectionSlug: n,
                  ...(null == a ? {} : { path: a }),
                  searchParams: s,
                }))
        },
      },
    )
  },
  QoN9(e, t, n) {
    var a = n("DBCl"),
      s = n("GaA7"),
      i = n("WFY2")
    let o = (0, n("Eq25").x)((e) => {
      let t = a.FD8.safeParse(e)
      return (
        t.success ||
          i.v.info("Invalid Codex runtime install config; using default runtime", {
            safe: {},
            sensitive: { runtimeInstallConfig: e, error: t.error },
          }),
        { source: e === a.crV ? "default" : "statsig-layer", value: t.success ? t.data : a.crV }
      )
    })
    function l(e) {
      return o(e.getLayer("2096615506").get(a.BAs, a.crV))
    }
    async function r(e) {
      var t
      ;(i.v.info("Codex runtime config selected", {
        safe: { artifact: a.BAs, source: e.source },
        sensitive: { runtimeInstallConfig: e.value },
      }),
        await s.appServices?.primaryRuntime
          ?.publishConfiguration(((t = e.value), { runtimes: { [a.BAs]: t } }))
          .catch((e) => {
            i.v.warning("Failed to publish Codex runtime config", { safe: {}, sensitive: { error: e } })
          }))
    }
    n.d(
      t,
      {},
      {
        cm: r,
        u4: l,
        x1: async function (e) {
          try {
            let t = await e.updateUserAsync(e.getContext().user)
            t.success ||
              i.v.warning("Failed to refresh Codex runtime config from Statsig", {
                safe: {},
                sensitive: { updateDetails: t },
              })
          } catch (e) {
            i.v.warning("Failed to refresh Codex runtime config from Statsig", { safe: {}, sensitive: { error: e } })
          }
          await r(l(e))
        },
      },
    )
  },
  Jm9C(e, t, n) {
    var a = n("ABep"),
      s = n("oyxz"),
      i = n("XHhS"),
      o = n("AjxG")
    let l = [
      { value: "on-request", title: i.z.onRequest, description: (0, a.jsx)(s.A, { ...o.i.onRequestDescription }) },
      {
        value: "untrusted",
        title: i.z.untrusted,
        description: (0, a.jsx)(s.A, {
          id: "workPreferences.approval.untrusted.description",
          defaultMessage: "Ask before commands unless an explicit rule allows them",
        }),
      },
      { value: "never", title: i.z.never, description: (0, a.jsx)(s.A, { ...o.i.neverDescription }) },
    ].map((e) => ({ ...e, label: (0, a.jsx)(s.A, { ...e.title }) }))
    n.d(t, {}, { V: l })
  },
  prAI(e, t, n) {
    let a = (0, n("Qgfj").YK)({
      contextWindow: { id: "workPreferences.personalCloud.window", defaultMessage: "Model context window (tokens)" },
      compactLimit: {
        id: "workPreferences.personalCloud.compactLimit",
        defaultMessage: "Auto-compaction limit (tokens)",
      },
    })
    n.d(
      t,
      {},
      {
        a: function () {
          let e = { section: "agent", searchParams: { mode: "work" } }
          return {
            contextWindow: { ...e, id: "agent-cloud-context-window", title: a.contextWindow },
            compactLimit: { ...e, id: "agent-cloud-auto-compaction-limit", title: a.compactLimit },
          }
        },
      },
    )
  },
  uTDl(e, t, n) {
    n.d(t, { ConfigurationPanel: () => eB })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("qmMi"),
      o = n("Wf1j"),
      l = n("oyxz"),
      r = n("Ywss"),
      d = n("eFn4"),
      c = n("iRMi"),
      u = n("Z7bw"),
      g = n("ClXH"),
      p = n("JpYk"),
      f = n("F1Bc"),
      m = n("i1uX"),
      h = n("T0Rc"),
      x = n("xSOA"),
      b = n("DBCl"),
      w = n("mdqK"),
      y = n("zd8w"),
      v = n("UduS"),
      j = n("tl5a")
    function k({ bundleVersion: e, durationMs: t, status: n }) {
      return {
        durationMs: t,
        status: (function (e) {
          switch (e) {
            case "already-current":
              return c.CodexPrimaryRuntimeDependenciesResetStatus
                .CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_ALREADY_CURRENT
            case "canceled":
              return c.CodexPrimaryRuntimeDependenciesResetStatus
                .CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_CANCELED
            case "failed":
              return c.CodexPrimaryRuntimeDependenciesResetStatus.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_FAILED
            case "installed":
              return c.CodexPrimaryRuntimeDependenciesResetStatus
                .CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_INSTALLED
          }
        })(n),
        ...A(e),
      }
    }
    function A(e) {
      return null == e || 0 === e.length ? {} : { bundleVersion: e }
    }
    var S = n("eXbv"),
      M = n("Z0Sb"),
      C = n("tEBs"),
      _ = n("plx2"),
      I = n("GrRy"),
      P = n("aTcy"),
      D = n("MM0V"),
      T = n("Sm6l"),
      R = n("bqtn"),
      E = n("bVeK"),
      N = n("UxN3"),
      z = n("SGsN"),
      O = n("F0xz"),
      L = n("A8rN"),
      U = n("B09n"),
      V = n("MI1z"),
      W = n("g1IH"),
      F = n("x55u"),
      G = n("YwPh"),
      Y = n("ZYH5"),
      $ = n("SziE"),
      q = n("r4En"),
      B = n("zEV5"),
      K = n("yGJW"),
      H = n("B81s"),
      X = n("Gg2s"),
      Q = n("OWtl"),
      Z = n("ndjw"),
      J = n("jxU8"),
      ee = n("xASy"),
      et = n("QMAr"),
      en = n("XHhS"),
      ea = n("W9Ad"),
      es = n("uNQ5"),
      ei = n("GaA7"),
      eo = n("q77y")
    function el(e) {
      return e.endsWith("\n")
        ? e
        : `${e}
`
    }
    function er(e) {
      let { commentIndex: t } = ed(e, null),
        n = (-1 === t ? e : e.slice(0, t)).match(/^\s*\[(?:\[(.+)\]|(.+))\]\s*$/),
        a = n?.[1] ?? n?.[2]
      return null == a ? null : a.trim().replace(/^(["'])(.*)\1$/, "$2")
    }
    function ed(e, t) {
      let n = t
      for (let t = 0; t < e.length; t += 1) {
        let a = e[t]
        if (null != n) {
          if ('"""' === n || "'''" === n) {
            if ('"""' === n && "\\" === a) {
              t += 1
              continue
            }
            e.startsWith(n, t) && ((t += 2), (n = null))
            continue
          }
          if ('"' === n && "\\" === a) {
            t += 1
            continue
          }
          a === n && (n = null)
          continue
        }
        if ("#" === a) return { multilineString: null, commentIndex: t }
        if (e.startsWith('"""', t)) {
          ;((n = '"""'), (t += 2))
          continue
        }
        if (e.startsWith("'''", t)) {
          ;((n = "'''"), (t += 2))
          continue
        }
        ;('"' === a || "'" === a) && (n = a)
      }
      return { multilineString: '"""' === n || "'''" === n ? n : null, commentIndex: -1 }
    }
    function ec(e, t, n, a = e) {
      let s = a.match(/^\s*/)?.[0] ?? ""
      if (-1 === n) return `${s}${t}`
      let i = e.slice(0, n).match(/\s*$/)?.[0] ?? ""
      return `${s}${t}${i}${e.slice(n)}`
    }
    var eu = n("K9wN"),
      eg = n("d5Fp"),
      ep = n("CTWI")
    n("sG8D")
    var ef = n("evwP"),
      em = n("RxZZ"),
      eh = n("pO0d"),
      ex = n("BSnr"),
      eb = n("I7Ou"),
      ew = n("DDOY"),
      ey = n("ZEx5"),
      ev = n("jMec"),
      ej = n("WFY2")
    function ek(e) {
      let t,
        n,
        r,
        d,
        c,
        u,
        g,
        p,
        f,
        m,
        h,
        x,
        w,
        v = (0, s.c)(48),
        { hostId: j } = e,
        k = (0, i.gh)(Q.u),
        A = (0, o.A)(),
        S = (0, i.Ul)(!1),
        [M, C] = (0, y.useState)(!1),
        _ = (0, i.Ul)(ev.B),
        I = (0, em.iK)(b.KYW.defaultModeRequestUserInput),
        { data: P, isLoading: D } = (0, i._U)(X.u9, j)
      v[0] !== P ? ((t = void 0 === P ? [] : P), (v[0] = P), (v[1] = t)) : (t = v[1])
      let T = t
      v[2] !== j ? ((n = { hostId: j }), (v[2] = j), (v[3] = n)) : (n = v[3])
      let R = (0, X.jv)(n)
      if (
        v[4] !== _ ||
        v[5] !== I ||
        v[6] !== T ||
        v[7] !== A ||
        v[8] !== D ||
        v[9] !== k ||
        v[10] !== R ||
        v[11] !== S ||
        v[12] !== M
      ) {
        let e,
          t,
          n,
          s = (0, eu.WK)(T)
        v[21] !== R
          ? ((e = (e) => ({
              key: e.name,
              entry: (0, eu.Dd)(e),
              description: e.description ?? void 0,
              enabled: e.enabled,
              onChange: (t) => {
                R.mutate(
                  { featureName: e.name, enabled: t },
                  {
                    onSuccess: () => {
                      C(!0)
                    },
                  },
                )
              },
            })),
            (v[21] = R),
            (v[22] = e))
          : (e = v[22])
        let i = [
            ...((0, eu.iV)(_, D)
              ? [
                  {
                    key: eg.il,
                    entry: eu.ts,
                    enabled: I,
                    onChange: (e) => {
                      ;(0, em.gc)(k, b.KYW.defaultModeRequestUserInput, e).catch((e) => {
                        ;(ej.v.warning("Failed to update request-user-input preference", {
                          safe: {},
                          sensitive: { error: e },
                        }),
                          k
                            .get(z.Id)
                            .danger(
                              A.formatMessage({
                                id: "settings.general.experimentalFeatures.requestUserInput.saveError",
                                defaultMessage: "Could not save Request user input. Try again",
                              }),
                              {
                                errorAnalytics: {
                                  toastId: "settings.general.experimentalFeatures.requestUserInput.saveError",
                                },
                              },
                            ))
                      })
                    },
                  },
                ]
              : []),
            ...s.map(e),
          ],
          o = i.length > 0 || S
        ;((c = ex.X),
          v[23] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(l.A, {
                id: "settings.general.experimentalFeatures",
                defaultMessage: "Experimental features (Beta)",
              })),
              (v[23] = t))
            : (t = v[23]),
          v[24] !== M
            ? ((n = M
                ? (0, a.jsx)("div", {
                    className: "mb-2 block font-medium text-danger",
                    children: (0, a.jsx)(l.A, {
                      id: "settings.general.experimentalFeatures.restartNote",
                      defaultMessage: "Restart {appName} to apply experimental feature changes",
                      values: { appName: ep.C },
                    }),
                  })
                : void 0),
              (v[24] = M),
              (v[25] = n))
            : (n = v[25]),
          v[26] !== n
            ? ((m = (0, a.jsx)(ex.X.Header, { title: t, subtitle: n })), (v[26] = n), (v[27] = m))
            : (m = v[27]),
          (d = ex.X.Content),
          (r = ey.t),
          v[28] !== S ? ((u = null), (v[28] = S), (v[29] = u)) : (u = v[29]),
          v[30] !== D
            ? ((g = D
                ? (0, a.jsx)(eb.u, {
                    children: (0, a.jsx)(l.A, {
                      id: "settings.general.experimentalFeatures.loading",
                      defaultMessage: "Loading experimental features\u2026",
                    }),
                  })
                : null),
              (v[30] = D),
              (v[31] = g))
            : (g = v[31]),
          v[32] !== o || v[33] !== D
            ? ((p =
                D || o
                  ? null
                  : (0, a.jsx)(ef.W, {
                      layout: "settings-row",
                      children: (0, a.jsx)(l.A, {
                        id: "settings.general.experimentalFeatures.empty",
                        defaultMessage: "No beta experimental features available",
                      }),
                    })),
              (v[32] = o),
              (v[33] = D),
              (v[34] = p))
            : (p = v[34]),
          (f = i.map((e) =>
            (0, a.jsx)(
              eh.GC,
              {
                entry: e.entry,
                description: e.description,
                control: (0, a.jsx)(O.l, {
                  checked: e.enabled,
                  disabled: R.isPending,
                  onChange: e.onChange,
                  ariaLabel: A.formatMessage(
                    { id: "settings.general.experimentalFeatures.toggle", defaultMessage: "Toggle {featureName}" },
                    { featureName: (0, ew.hz)(A, e.entry.title) },
                  ),
                }),
              },
              e.key,
            ),
          )),
          (v[4] = _),
          (v[5] = I),
          (v[6] = T),
          (v[7] = A),
          (v[8] = D),
          (v[9] = k),
          (v[10] = R),
          (v[11] = S),
          (v[12] = M),
          (v[13] = r),
          (v[14] = d),
          (v[15] = c),
          (v[16] = u),
          (v[17] = g),
          (v[18] = p),
          (v[19] = f),
          (v[20] = m))
      } else ((r = v[13]), (d = v[14]), (c = v[15]), (u = v[16]), (g = v[17]), (p = v[18]), (f = v[19]), (m = v[20]))
      return (
        v[35] !== r || v[36] !== u || v[37] !== g || v[38] !== p || v[39] !== f
          ? ((h = (0, a.jsxs)(r, { children: [u, g, p, f] })),
            (v[35] = r),
            (v[36] = u),
            (v[37] = g),
            (v[38] = p),
            (v[39] = f),
            (v[40] = h))
          : (h = v[40]),
        v[41] !== d || v[42] !== h
          ? ((x = (0, a.jsx)(d, { children: h })), (v[41] = d), (v[42] = h), (v[43] = x))
          : (x = v[43]),
        v[44] !== c || v[45] !== x || v[46] !== m
          ? ((w = (0, a.jsxs)(c, { children: [m, x] })), (v[44] = c), (v[45] = x), (v[46] = m), (v[47] = w))
          : (w = v[47]),
        w
      )
    }
    var eA = n("gUPW"),
      eS = n("fnPc"),
      eM = n("b8kl"),
      eC = n("QyE3"),
      e_ = n("kfGJ"),
      eI = n("QoN9"),
      eP = n("hZax"),
      eD = n("MLC6"),
      eT = n("rvFo")
    function eR(e) {
      let t,
        n,
        o,
        r,
        c,
        u,
        g,
        p = (0, s.c)(24),
        { workConfiguration: f } = e,
        { selectedHostId: m } = (0, eS.D8)(),
        h = (0, e_.Qz)(m),
        x = (0, i._U)(v.U, m),
        b = (0, i.Ul)(d.Xr),
        w = (0, eP.Zj)(S.D)
      p[0] !== h || p[1] !== w ? ((t = (0, et.wi)(h, w)), (p[0] = h), (p[1] = w), (p[2] = t)) : (t = p[2])
      let y = t,
        j = (0, eP.Zj)(eu.J1)
      return (
        p[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(eC.s, { slug: "agent" })), (p[3] = n))
          : (n = p[3]),
        p[4] !== f
          ? ((o =
              null != f
                ? (0, a.jsx)(l.A, {
                    id: "settings.configuration.subtitle",
                    defaultMessage: "Choose how ChatGPT works on your tasks",
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(l.A, {
                          id: "settings.agent.configuration.subtitle.summary.electron",
                          defaultMessage:
                            "Configure permissions, web access, and agent responses for new chats <a>Learn more</a>",
                          values: { a: eE },
                        }),
                      }),
                      null,
                    ],
                  })),
            (p[4] = f),
            (p[5] = o))
          : (o = p[5]),
        p[6] !== b || p[7] !== x || p[8] !== m || p[9] !== f
          ? ((r =
              b || null != f
                ? (0, a.jsxs)(ex.X, {
                    children: [
                      !f?.selected && x.length > 0
                        ? (0, a.jsx)("div", {
                            className: "mb-4 flex flex-col gap-4",
                            children: x.map((e, t) =>
                              (0, a.jsx)(
                                D.l,
                                {
                                  variant: "settings",
                                  layout: "verticalIcon",
                                  type: "caution",
                                  icon: (0, a.jsx)(E.zOs, {}),
                                  content: (0, a.jsxs)("div", {
                                    className: "flex flex-col gap-2 text-secondary",
                                    children: [
                                      (0, a.jsx)(q.Markdown, {
                                        cwd: null,
                                        className: "font-medium text-default [&>p]:my-0",
                                        textStyle: { kind: "small" },
                                        children: e.summary,
                                      }),
                                      null != e.details && e.details.length > 0
                                        ? (0, a.jsx)(q.Markdown, {
                                            cwd: null,
                                            className: "[&>p]:my-0",
                                            textStyle: { kind: "small", tone: "inherit" },
                                            children: e.details,
                                          })
                                        : null,
                                      null != e.path
                                        ? (0, a.jsx)(l.A, {
                                            id: "settings.agent.configuration.notice.fileContext",
                                            defaultMessage: "File: {path}{location}",
                                            values: {
                                              path: (0, a.jsx)("code", { children: e.path }),
                                              location:
                                                null != e.range
                                                  ? (0, a.jsx)(l.A, {
                                                      id: "settings.agent.configuration.notice.fileLocationSuffix",
                                                      defaultMessage: " (line {line}, column {column})",
                                                      values: {
                                                        line: e.range.start.line,
                                                        column: e.range.start.column,
                                                      },
                                                    })
                                                  : "",
                                            },
                                          })
                                        : null,
                                    ],
                                  }),
                                  onPrimaryCtaClick: () => {
                                    null != e.path &&
                                      (0, eD.t)({
                                        hostId: m,
                                        path: e.path,
                                        ...(null != e.range ? { range: e.range } : {}),
                                      })
                                  },
                                  primaryCtaText:
                                    null != e.path
                                      ? (0, a.jsx)(l.A, {
                                          id: "settings.agent.configuration.notice.openFile",
                                          defaultMessage: "Open file",
                                        })
                                      : void 0,
                                  role: "alert",
                                },
                                `${t}:${e.kind}:${e.summary}:${e.path ?? ""}`,
                              ),
                            ),
                          })
                        : null,
                      null,
                      (0, a.jsxs)(ex.X.Content, {
                        children: [
                          (0, a.jsx)(a.Fragment, { children: (0, a.jsx)(eO, { hostId: m, workConfiguration: f }) }),
                          null,
                        ],
                      }),
                    ],
                  })
                : null),
            (p[6] = b),
            (p[7] = x),
            (p[8] = m),
            (p[9] = f),
            (p[10] = r))
          : (r = p[10]),
        p[11] !== j || p[12] !== m || p[13] !== f?.selected
          ? ((c = f?.selected
              ? null
              : (0, a.jsxs)(a.Fragment, {
                  children: [j ? (0, a.jsx)("div", { children: (0, a.jsx)(ek, { hostId: m }) }) : null, null],
                })),
            (p[11] = j),
            (p[12] = m),
            (p[13] = f?.selected),
            (p[14] = c))
          : (c = p[14]),
        p[15] !== y || p[16] !== m || p[17] !== f?.selected
          ? ((u = f?.selected
              ? null
              : (0, a.jsx)(a.Fragment, {
                  children: null != y ? (0, a.jsx)(eN, { hostId: m, primaryRuntime: y }) : null,
                })),
            (p[15] = y),
            (p[16] = m),
            (p[17] = f?.selected),
            (p[18] = u))
          : (u = p[18]),
        p[19] !== o || p[20] !== r || p[21] !== c || p[22] !== u
          ? ((g = (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)(J.P, { title: n, subtitle: o, children: [r, c, u] }),
            })),
            (p[19] = o),
            (p[20] = r),
            (p[21] = c),
            (p[22] = u),
            (p[23] = g))
          : (g = p[23]),
        g
      )
    }
    function eE(e) {
      return (0, a.jsx)("a", {
        className: "inline-flex text-link-primary!",
        href: P.UJ,
        target: "_blank",
        rel: "noreferrer",
        children: e,
      })
    }
    function eN(e) {
      let t,
        n,
        r,
        d,
        g,
        p,
        w,
        y,
        v,
        j,
        S,
        P,
        D,
        R,
        E,
        L,
        U,
        V,
        F,
        Y,
        q,
        B,
        H,
        Z,
        J,
        ee,
        ea,
        es,
        ei,
        eo,
        el,
        er,
        ed,
        ec = (0, s.c)(95),
        { hostId: eu, primaryRuntime: eg } = e,
        ep = (0, i.gh)(Q.u),
        ef = (0, o.A)(),
        em = (0, eP.AS)(),
        { data: eb, isLoading: ew } = (0, i._U)(X.u9, eu)
      ec[0] !== eu ? ((t = { hostId: eu }), (ec[0] = eu), (ec[1] = t)) : (t = ec[1])
      let ev = (0, X.jv)(t)
      ec[2] !== eb ? ((n = eb?.find(ez)), (ec[2] = eb), (ec[3] = n)) : (n = ec[3])
      let ej = n,
        ek = ej?.enabled === !0
      ;(ec[4] !== eu || ec[5] !== eg
        ? ((r = () => eg.diagnoseDependencies({ hostId: eu })), (ec[4] = eu), (ec[5] = eg), (ec[6] = r))
        : (r = ec[6]),
        ec[7] !== eu ? ((d = (0, I.V)(eu)), (ec[7] = eu), (ec[8] = d)) : (d = ec[8]),
        ec[9] !== r || ec[10] !== d
          ? ((g = { queryFn: r, queryKey: d, staleTime: eT.D.FIVE_SECONDS }), (ec[9] = r), (ec[10] = d), (ec[11] = g))
          : (g = ec[11]))
      let eA = (0, h.I)(g)
      ec[12] !== eu || ec[13] !== eg
        ? ((p = { mutationFn: () => eg.diagnoseDependencies({ hostId: eu, probeExecutables: !0 }) }),
          (ec[12] = eu),
          (ec[13] = eg),
          (ec[14] = p))
        : (p = ec[14])
      let eS = (0, x.n)(p)
      ec[15] !== eg || ec[16] !== em
        ? ((w = {
            mutationFn: async (e) => {
              let { release: t } = e
              return (await (0, eI.x1)(em), eg.runUpdateNow({ release: t }))
            },
          }),
          (ec[15] = eg),
          (ec[16] = em),
          (ec[17] = w))
        : (w = ec[17])
      let eM = (0, x.n)(w)
      ec[18] !== eu || ec[19] !== eg || ec[20] !== em
        ? ((y = {
            mutationFn: async (e) => {
              let { release: t } = e
              return (await (0, eI.x1)(em), eg.resetDependencies({ hostId: eu, release: t }))
            },
          }),
          (ec[18] = eu),
          (ec[19] = eg),
          (ec[20] = em),
          (ec[21] = y))
        : (y = ec[21])
      let eC = (0, x.n)(y)
      ec[22] !== eu ? ((v = { mutationFn: () => (0, M.l)({ hostId: eu }) }), (ec[22] = eu), (ec[23] = v)) : (v = ec[23])
      let e_ = (0, x.n)(v),
        eD = (0, i.Ul)(C.jn),
        eR = (0, i.Ul)(C.B0),
        eE = eD?.hostId === eu ? eD : null
      ec[24] !== ep ? ((j = ep.get(z.Id)), (ec[24] = ep), (ec[25] = j)) : (j = ec[25])
      let eN = j,
        eO = ew || ev.isPending || eS.isPending || eM.isPending || eC.isPending || e_.isPending
      ec[26] !== eE ? ((S = (0, C.$X)(eE)), (ec[26] = eE), (ec[27] = S)) : (S = ec[27])
      let eL = S,
        eU = eA.data?.bundleVersion == null || 0 === eA.data.bundleVersion.length ? null : eA.data.bundleVersion
      ec[28] !== eS || ec[29] !== eA || ec[30] !== ef || ec[31] !== ep || ec[32] !== eN
        ? ((P = () => {
            let e = Date.now()
            eS.mutateAsync()
              .then((t) => {
                ;((0, K.yy)(
                  ep,
                  c.CodexPrimaryRuntimeDependenciesDiagnose,
                  (function ({ diagnostics: e, durationMs: t }) {
                    return {
                      durationMs: t,
                      problemCount: e.problems.length,
                      status: e.installed
                        ? c.CodexPrimaryRuntimeDependenciesDiagnoseStatus
                            .CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_OK
                        : c.CodexPrimaryRuntimeDependenciesDiagnoseStatus
                            .CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_PROBLEM,
                      ...A(e.bundleVersion),
                    }
                  })({ diagnostics: t, durationMs: Date.now() - e }),
                ),
                eA.refetch(),
                t.installed)
                  ? eN.success(
                      ef.formatMessage({
                        id: "settings.agent.dependencies.diagnose.ok",
                        defaultMessage: "Tools look healthy",
                      }),
                    )
                  : eN.warning(
                      ef.formatMessage({
                        id: "settings.agent.dependencies.diagnose.problem",
                        defaultMessage: "Tools may need repair. Send /feedback if this keeps happening",
                      }),
                    )
              })
              .catch(() => {
                ;((0, K.yy)(
                  ep,
                  c.CodexPrimaryRuntimeDependenciesDiagnose,
                  (function ({ durationMs: e }) {
                    return {
                      durationMs: e,
                      status:
                        c.CodexPrimaryRuntimeDependenciesDiagnoseStatus
                          .CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_FAILED,
                    }
                  })({ durationMs: Date.now() - e }),
                ),
                  eN.danger(
                    ef.formatMessage({
                      id: "settings.agent.dependencies.diagnose.failed",
                      defaultMessage: "Couldn\u2019t diagnose tools",
                    }),
                    { errorAnalytics: { toastId: "settings.agent.dependencies.diagnose.failed" } },
                  ))
              })
          }),
          (ec[28] = eS),
          (ec[29] = eA),
          (ec[30] = ef),
          (ec[31] = ep),
          (ec[32] = eN),
          (ec[33] = P))
        : (P = ec[33])
      let eV = P
      ec[34] !== eA || ec[35] !== ef || ec[36] !== eR || ec[37] !== eC || ec[38] !== ep || ec[39] !== eN
        ? ((D = () => {
            let e = Date.now()
            eC.mutateAsync({ release: eR })
              .then((t) => {
                ;((0, K.yy)(
                  ep,
                  c.CodexPrimaryRuntimeDependenciesReset,
                  k({ bundleVersion: t.bundleVersion, durationMs: Date.now() - e, status: t.status }),
                ),
                  eA.refetch(),
                  eN.success(
                    ef.formatMessage({
                      id: "settings.agent.dependencies.reset.installed",
                      defaultMessage: "Tools were reinstalled",
                    }),
                  ))
              })
              .catch((t) => {
                if (
                  (t instanceof Error || t instanceof DOMException) &&
                  ("AbortError" === t.name || t.message.toLowerCase().includes("aborted"))
                ) {
                  ;(ep.set(C.jn, null),
                    eA.refetch(),
                    (0, K.yy)(
                      ep,
                      c.CodexPrimaryRuntimeDependenciesReset,
                      k({ bundleVersion: null, durationMs: Date.now() - e, status: "canceled" }),
                    ),
                    eN.info(
                      ef.formatMessage({
                        id: "settings.agent.dependencies.reset.canceled",
                        defaultMessage: "Tool download canceled",
                      }),
                      { id: "install-primary-runtime" },
                    ))
                  return
                }
                ;((0, K.yy)(
                  ep,
                  c.CodexPrimaryRuntimeDependenciesReset,
                  k({ bundleVersion: null, durationMs: Date.now() - e, status: "failed" }),
                ),
                  eN.danger(
                    ef.formatMessage({
                      id: "settings.agent.dependencies.reset.failed",
                      defaultMessage: "Couldn\u2019t reinstall tools",
                    }),
                    { errorAnalytics: { toastId: "settings.agent.dependencies.reset.failed" } },
                  ))
              })
          }),
          (ec[34] = eA),
          (ec[35] = ef),
          (ec[36] = eR),
          (ec[37] = eC),
          (ec[38] = ep),
          (ec[39] = eN),
          (ec[40] = D))
        : (D = ec[40])
      let eW = D
      ec[41] !== e_ || ec[42] !== eA || ec[43] !== ef || ec[44] !== ep || ec[45] !== eN
        ? ((R = () => {
            e_.mutateAsync()
              .then((e) => {
                let { canceled: t } = e
                ;(ep.set(C.jn, null), eA.refetch(), t)
                  ? eN.info(
                      ef.formatMessage({
                        id: "settings.agent.dependencies.cancel.canceled",
                        defaultMessage: "Canceling tool download",
                      }),
                      { id: "install-primary-runtime" },
                    )
                  : eN.info(
                      ef.formatMessage({
                        id: "settings.agent.dependencies.cancel.noop",
                        defaultMessage: "No tool download is running",
                      }),
                    )
              })
              .catch(() => {
                eN.danger(
                  ef.formatMessage({
                    id: "settings.agent.dependencies.cancel.failed",
                    defaultMessage: "Couldn\u2019t cancel tool download",
                  }),
                  { errorAnalytics: { toastId: "settings.agent.dependencies.cancel.failed" } },
                )
              })
          }),
          (ec[41] = e_),
          (ec[42] = eA),
          (ec[43] = ef),
          (ec[44] = ep),
          (ec[45] = eN),
          (ec[46] = R))
        : (R = ec[46])
      let eF = R
      ;(ec[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = (0, a.jsx)(ex.X.Header, { title: (0, a.jsx)(l.A, { ...en.z.workspaceDependencies }) })), (ec[47] = E))
        : (E = ec[47]),
        ec[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (0, a.jsx)(l.A, {
              id: "settings.agent.dependencies.enabled.description",
              defaultMessage: "Allow ChatGPT to install and expose bundled Node.js and Python tools",
            })),
            (ec[48] = L))
          : (L = ec[48]))
      let eG = ew || ev.isPending || null == ej
      ;(ec[49] !== eR || ec[50] !== eM || ec[51] !== ev
        ? ((U = (e) => {
            ev.mutate(
              { enabled: e, featureName: b.R1o },
              {
                onSuccess: () => {
                  e && eM.mutate({ release: eR })
                },
              },
            )
          }),
          (ec[49] = eR),
          (ec[50] = eM),
          (ec[51] = ev),
          (ec[52] = U))
        : (U = ec[52]),
        ec[53] !== ef
          ? ((V = ef.formatMessage({
              id: "settings.agent.dependencies.enabled.ariaLabel",
              defaultMessage: "Enable tools",
            })),
            (ec[53] = ef),
            (ec[54] = V))
          : (V = ec[54]),
        ec[55] !== ek || ec[56] !== eG || ec[57] !== U || ec[58] !== V
          ? ((F = (0, a.jsx)(eh.GC, {
              entry: et.uk.enableDependencies,
              description: L,
              control: (0, a.jsx)(O.l, { checked: ek, disabled: eG, onChange: U, ariaLabel: V }),
            })),
            (ec[55] = ek),
            (ec[56] = eG),
            (ec[57] = U),
            (ec[58] = V),
            (ec[59] = F))
          : (F = ec[59]),
        ec[60] === Symbol.for("react.memo_cache_sentinel")
          ? ((Y = (0, a.jsx)(l.A, {
              id: "settings.agent.dependencies.diagnose.description",
              defaultMessage: "Checks the current bundle and records diagnostic logs",
            })),
            (ec[60] = Y))
          : (Y = ec[60]),
        ec[61] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = (0, a.jsx)(N.bF, { "aria-hidden": !1, asset16: f.Y, legacyIcon: G.A, legacyClassName: "icon-2xs" })),
            (B = (0, a.jsx)(l.A, { id: "settings.agent.dependencies.diagnose.button", defaultMessage: "Diagnose" })),
            (ec[61] = q),
            (ec[62] = B))
          : ((q = ec[61]), (B = ec[62])),
        ec[63] !== eS.isPending || ec[64] !== eV || ec[65] !== eC.isPending
          ? ((H = (0, a.jsx)(eh.GC, {
              entry: et.uk.diagnoseDependencies,
              description: Y,
              control: (0, a.jsxs)(T.$, {
                color: "secondary",
                size: "toolbar",
                loading: eS.isPending,
                disabled: eC.isPending,
                onClick: eV,
                children: [q, B],
              }),
            })),
            (ec[63] = eS.isPending),
            (ec[64] = eV),
            (ec[65] = eC.isPending),
            (ec[66] = H))
          : (H = ec[66]),
        ec[67] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = (0, a.jsx)(l.A, {
              id: "settings.agent.dependencies.reset.description",
              defaultMessage: "Downloads a fresh bundle, installs it, and reloads tools",
            })),
            (ec[67] = Z))
          : (Z = ec[67]))
      let eY = eL ? e_.isPending : eC.isPending,
        e$ = !ek || (eL ? e_.isPending : eO),
        eq = eL ? eF : eW
      return (
        ec[68] !== eL
          ? ((J = eL
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(N.bF, { "aria-hidden": !1, asset16: m.Q, legacyIcon: $.A, legacyClassName: "icon-2xs" }),
                    (0, a.jsx)(l.A, {
                      id: "settings.agent.dependencies.cancel.button",
                      defaultMessage: "Cancel download",
                    }),
                  ],
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(N.bF, { "aria-hidden": !1, asset16: u.Y, legacyIcon: W.A, legacyClassName: "icon-2xs" }),
                    (0, a.jsx)(l.A, { id: "settings.agent.dependencies.reset.button", defaultMessage: "Reinstall" }),
                  ],
                })),
            (ec[68] = eL),
            (ec[69] = J))
          : (J = ec[69]),
        ec[70] !== eY || ec[71] !== e$ || ec[72] !== eq || ec[73] !== J
          ? ((ee = (0, a.jsx)(eh.GC, {
              entry: et.uk.reinstallDependencies,
              description: Z,
              control: (0, a.jsx)(T.$, {
                color: "danger",
                size: "toolbar",
                loading: eY,
                disabled: e$,
                onClick: eq,
                children: J,
              }),
            })),
            (ec[70] = eY),
            (ec[71] = e$),
            (ec[72] = eq),
            (ec[73] = J),
            (ec[74] = ee))
          : (ee = ec[74]),
        ec[75] !== F || ec[76] !== H || ec[77] !== ee
          ? ((ea = (0, a.jsx)(ex.X.Content, { children: (0, a.jsxs)(ey.t, { children: [F, H, ee] }) })),
            (ec[75] = F),
            (ec[76] = H),
            (ec[77] = ee),
            (ec[78] = ea))
          : (ea = ec[78]),
        ec[79] === Symbol.for("react.memo_cache_sentinel")
          ? ((es = (0, a.jsx)(l.A, { ...en.z.currentDependencyVersion })), (ec[79] = es))
          : (es = ec[79]),
        ec[80] !== eU || ec[81] !== eA.isLoading || ec[82] !== eL || ec[83] !== eE
          ? ((ei = eL
              ? (0, _.T)(eE, (0, _.J)(eE))
              : eA.isLoading
                ? (0, a.jsx)(l.A, {
                    id: "settings.agent.dependencies.bundleVersion.loading",
                    defaultMessage: "Checking\u2026",
                  })
                : (eU ??
                  (0, a.jsx)(l.A, {
                    id: "settings.agent.dependencies.bundleVersion.notInstalled",
                    defaultMessage: "Not installed",
                  }))),
            (ec[80] = eU),
            (ec[81] = eA.isLoading),
            (ec[82] = eL),
            (ec[83] = eE),
            (ec[84] = ei))
          : (ei = ec[84]),
        ec[85] !== ei
          ? ((eo = (0, a.jsxs)("span", {
              className: "inline-flex flex-wrap gap-x-1",
              children: [es, (0, a.jsx)("span", { children: ei })],
            })),
            (ec[85] = ei),
            (ec[86] = eo))
          : (eo = ec[86]),
        ec[87] !== eA.data?.problems.length
          ? ((el = eA.data?.problems.length
              ? (0, a.jsx)("span", {
                  children: (0, a.jsx)(l.A, {
                    id: "settings.agent.dependencies.bundleVersion.problemDescription",
                    defaultMessage: "Run diagnostics or reinstall if tool calls fail",
                  }),
                })
              : null),
            (ec[87] = eA.data?.problems.length),
            (ec[88] = el))
          : (el = ec[88]),
        ec[89] !== eo || ec[90] !== el
          ? ((er = (0, a.jsxs)(ex.X.Footer, { className: "flex flex-col gap-1", children: [eo, el] })),
            (ec[89] = eo),
            (ec[90] = el),
            (ec[91] = er))
          : (er = ec[91]),
        ec[92] !== ea || ec[93] !== er
          ? ((ed = (0, a.jsxs)(ex.X, { children: [E, ea, er] })), (ec[92] = ea), (ec[93] = er), (ec[94] = ed))
          : (ed = ec[94]),
        ed
      )
    }
    function ez(e) {
      return e.name === b.R1o
    }
    function eO(e) {
      var t, n, d, c
      let u,
        p,
        f,
        m,
        h,
        x,
        v,
        k,
        A,
        S,
        M,
        C = (0, s.c)(27),
        { hostId: _, workConfiguration: I } = e,
        P = (0, i.gh)(Q.u),
        E = (0, y.useId)(),
        N = (0, o.A)(),
        z = (0, r.zy)(),
        W = (0, i._U)(et.h6, _),
        [F, G] = (0, y.useState)(null),
        $ =
          "user" === new URLSearchParams(z.search).get("configScope") && F?.locationKey !== z.key
            ? "user"
            : (F?.scopeKey ?? null)
      C[0] === Symbol.for("react.memo_cache_sentinel") ? ((u = []), (C[0] = u)) : (u = C[0])
      let [q, B] = (0, y.useState)(u)
      C[1] === Symbol.for("react.memo_cache_sentinel") ? ((p = {}), (C[1] = p)) : (p = C[1])
      let [K, X] = (0, y.useState)(p),
        J = (0, i.Ul)(Z.pY)
      C[2] !== z.state ? ((f = (0, eM.Ei)(z.state)), (C[2] = z.state), (C[3] = f)) : (f = C[3])
      let eu = f,
        eg = eu.hasValue ? (_ === e_.fI ? eu.workspaceRoot : null) : _ === e_.fI ? J : null,
        ep = (0, V.y)(_),
        ef = (0, i._U)(j.B0, _),
        em = _ === e_.fI ? "fallback-to-workspace" : "preserve-null"
      C[4] !== _ || C[5] !== em ? ((m = { hostId: _, cwdMode: em }), (C[4] = _), (C[5] = em), (C[6] = m)) : (m = C[6])
      let { data: eb, isPending: ew } = (0, H.PG)(eg, m)
      C[7] !== _ ? ((h = { hostId: _ }), (C[7] = _), (C[8] = h)) : (h = C[8])
      let { data: ev, isPending: ej } = (0, i._U)(H.b9, h),
        ek = eb?.config ?? null,
        eS = eb?.layers ?? null,
        eI = eb?.origins ?? null,
        eP = ev?.requirements ?? null,
        eD = (function (e, t) {
          if (null == e) return []
          let n = []
          for (let i of e) {
            var a, s
            if ("project" !== i.name.type) continue
            let e = (a = i.name.dotCodexFolder).endsWith("/.codex") || a.endsWith("\\.codex") ? a.slice(0, -7) : null
            n.push({
              key: `project:${e ?? i.name.dotCodexFolder}`,
              kind: "project",
              label: t.formatMessage(
                { id: "settings.agent.configuration.scope.project", defaultMessage: "{repoName}" },
                { repoName: (s = e ?? i.name.dotCodexFolder).split(/[/\\]/).at(-1) || s },
              ),
              tooltipText: (0, w.rg)(i.name) ?? i.name.dotCodexFolder,
              filePath: (0, w.rg)(i.name),
              expectedVersion: i.version,
              workspaceRoot: e,
              layer: i,
            })
          }
          return n
        })(eS, N),
        eT = (0, w.py)(eS),
        eR = null,
        eE = null
      if ((C[9] !== eS ? ((x = eS ?? []), (C[9] = eS), (C[10] = x)) : (x = C[10]), C[11] !== x)) {
        for (let e of x) (0, w.IH)(e.name) ? (eR = e) : "enterpriseManaged" === e.name.type && (eE = e)
        ;((C[11] = x), (C[12] = eR), (C[13] = eE))
      } else ((eR = C[12]), (eE = C[13]))
      null == eR && (eR = eE)
      let eN = null != ep ? `${ep}/config.toml` : null,
        ez = null != eT ? (0, w.rg)(eT.name) : eN
      C[14] !== N || C[15] !== I?.localLabel
        ? ((v = I?.localLabel ?? N.formatMessage(en.z.userConfig)), (C[14] = N), (C[15] = I?.localLabel), (C[16] = v))
        : (v = C[16])
      let eO = {
          key: "user",
          kind: "user",
          label: v,
          tooltipText: ez ?? "~/.codex/config.toml",
          filePath: ez,
          expectedVersion: eT?.version ?? null,
          workspaceRoot: null,
          layer: eT,
        },
        eY =
          null != eR
            ? {
                key: "managed",
                kind: "managed",
                label:
                  null == I
                    ? N.formatMessage(en.z.adminConfig)
                    : N.formatMessage({ id: "settings.configuration.admin", defaultMessage: "Admin" }),
                tooltipText: N.formatMessage({
                  id: "settings.agent.configuration.scope.managedDescription",
                  defaultMessage: "Managed by admin policy",
                }),
                filePath: (0, w.rg)(eR.name),
                expectedVersion: eR.version,
                workspaceRoot: null,
                layer: eR,
              }
            : null,
        e$ = [...eD, eO, ...(null != eY ? [eY] : [])],
        eq = eD.length > 0,
        eB = e$[0]?.key ?? null
      null != I ? (eB = "user") : null != eg && (eB = `project:${eg}`)
      let eK = e$.find((e) => e.key === $) ?? e$.find((e) => e.key === eB) ?? e$[0] ?? null,
        eH = eK?.kind === "user" && "unavailable" !== W,
        { data: eX } = (0, i._U)(L.pG, {
          cwd: eK?.workspaceRoot != null ? (0, b.DIv)(eK.workspaceRoot) : null != eg ? (0, b.DIv)(eg) : null,
          hostId: _,
        }),
        eQ = (function (e) {
          if (null == e || "object" != typeof e || Array.isArray(e))
            return {
              approvalPolicy: null,
              sandboxMode: null,
              networkAccess: null,
              webSearch: null,
              modelVerbosity: null,
              reasoningSummary: null,
            }
          let t = e.approval_policy,
            n = e.sandbox_workspace_write,
            a = e.web_search,
            s = e.model_verbosity,
            i = e.model_reasoning_summary
          return {
            approvalPolicy: eG(t ?? null),
            sandboxMode: (0, et.ul)(e),
            networkAccess:
              null == n || "object" != typeof n || Array.isArray(n) || "boolean" != typeof n.network_access
                ? null
                : n.network_access,
            webSearch: "disabled" === a || "cached" === a || "indexed" === a || "live" === a ? a : null,
            modelVerbosity: "low" === s || "medium" === s || "high" === s ? s : null,
            reasoningSummary: "auto" === i || "concise" === i || "detailed" === i || "none" === i ? i : null,
          }
        })(eK?.layer?.config ?? null),
        eZ = eG(ek?.approval_policy ?? null) ?? "on-request",
        eJ = ek?.sandbox_mode ?? "read-only",
        e0 = (0, et.Q5)(eQ.sandboxMode, eJ),
        e1 = eQ.approvalPolicy ?? eZ,
        e2 = eQ.sandboxMode ?? eJ,
        e3 = ((t = e1), ee.PU.find((e) => e.value === t) ?? ee.f$.find((e) => e.value === t) ?? null),
        e5 = ((n = e2), ee.n9.find((e) => e.value === n) ?? null),
        e4 = eQ.networkAccess ?? ek?.sandbox_workspace_write?.network_access ?? !1,
        e9 = eQ.webSearch ?? ek?.web_search ?? (0, w.dE)(e2),
        e6 = eQ.modelVerbosity ?? ek?.model_verbosity ?? null,
        e7 = eQ.reasoningSummary ?? ek?.model_reasoning_summary ?? "auto",
        e8 = null != eI ? (0, w.yI)(eI, "approval_policy", ["approvalPolicy"]) : null,
        te = null != eI ? (0, w.yI)(eI, "sandbox_mode") : null,
        tt = null != eI ? (0, w.yI)(eI, "sandbox_workspace_write", ["network_access"]) : null,
        tn = null != eI ? (0, w.yI)(eI, "web_search") : null,
        ta = null != eI ? (0, w.yI)(eI, "model_verbosity") : null,
        ts = null != eI ? (0, w.yI)(eI, "model_reasoning_summary") : null,
        ti = eK?.kind === "project" ? (eK.layer?.disabledReason ?? null) : null,
        to =
          ((d = eK),
          (c = N),
          null == d
            ? c.formatMessage({
                id: "settings.agent.configuration.scope.unavailable",
                defaultMessage: "Config scope unavailable.",
              })
            : "managed" === d.kind || null == d.filePath
              ? c.formatMessage({
                  id: "settings.agent.configuration.scope.readOnly",
                  defaultMessage: "This config source cannot be edited here.",
                })
              : null),
        { approvalOptions: tl, sandboxOptions: tr, webSearchOptions: td } = (0, ee.ov)(eP, ef),
        tc = async function (e, t, n) {
          if (eK?.filePath == null || q.includes(e)) return
          let a = eK.filePath
          ;(B((t) => [...t, e]),
            X((t) => ({ ...t, [e]: void 0 })),
            await (async () => {
              try {
                await P.get(H.YE, _).mutateAsync({
                  cwd: _ === e_.fI ? (eg ?? J) : null,
                  expectedVersion: eK.expectedVersion,
                  filePath: a,
                  keyPath: t,
                  kind: eK.kind,
                  projectWrite:
                    "project" === eK.kind
                      ? () =>
                          (async function ({ filePath: e, hostId: t, keyPath: n, value: a }) {
                            var s, i, o, l, r, d
                            let c,
                              u =
                                ((s = n),
                                (i = a),
                                "approval_policy" === s && ("on-request" === i || "never" === i)
                                  ? { name: "approval_policy", value: i }
                                  : "sandbox_mode" === s &&
                                      ("read-only" === i || "workspace-write" === i || "danger-full-access" === i)
                                    ? { name: "sandbox_mode", value: i }
                                    : "web_search" === s &&
                                        ("disabled" === i ||
                                          "cached" === i ||
                                          "indexed" === i ||
                                          "live" === i ||
                                          null == i)
                                      ? { name: "web_search", value: i }
                                      : "model_verbosity" === s &&
                                          ("low" === i || "medium" === i || "high" === i || null == i)
                                        ? { name: "model_verbosity", value: i }
                                        : "model_reasoning_summary" === s &&
                                            ("auto" === i ||
                                              "concise" === i ||
                                              "detailed" === i ||
                                              "none" === i ||
                                              null == i)
                                          ? { name: "model_reasoning_summary", value: i }
                                          : "sandbox_workspace_write.network_access" === s && "boolean" == typeof i
                                            ? { name: "network_access", value: i }
                                            : null)
                            if (null == u) throw Error("Unsupported config key for project config write.")
                            let g = ""
                            try {
                              g = (await (0, es.tA)({ hostId: t, path: e })).contents
                            } catch (e) {
                              if (
                                !(function (e) {
                                  if (!(e instanceof Error)) return !1
                                  let t = e.message.trim().toLowerCase()
                                  return "enoent" === t || t.includes("no such file") || t.includes("not found")
                                })(e)
                              )
                                throw Error("Failed to read project config.")
                            }
                            try {
                              c = null != (0, ea.qg)(g).sandbox_workspace_write
                            } catch {
                              throw Error("The project config.toml file is invalid.")
                            }
                            let p =
                              ((o = g),
                              (l = u.name),
                              (r = u.value),
                              (d = c),
                              "network_access" === l
                                ? (function (e, t, n) {
                                    let a = e.length > 0 ? e.split("\n") : [],
                                      s = !1,
                                      i = null,
                                      o = null,
                                      l = -1,
                                      r = a.length,
                                      d = !1,
                                      c = t ? "true" : "false"
                                    for (let [e, t] of a.entries()) {
                                      let n = ed(t, o),
                                        u = null != o
                                      if (((o = n.multilineString), u || null != o)) continue
                                      let g = er(t)
                                      if (null != g) {
                                        if ((-1 === l && (l = e), s)) {
                                          r = e
                                          break
                                        }
                                        ;("sandbox_workspace_write" === g && (s = !0), (i = g))
                                        continue
                                      }
                                      if (
                                        null == i &&
                                        /^\s*(?:sandbox_workspace_write|"sandbox_workspace_write"|'sandbox_workspace_write')\s*\.\s*(?:network_access|"network_access"|'network_access')\s*=/.test(
                                          t,
                                        )
                                      ) {
                                        ;((a[e] = ec(
                                          t,
                                          `sandbox_workspace_write.network_access = ${c}`,
                                          n.commentIndex,
                                        )),
                                          (d = !0))
                                        break
                                      }
                                      if (
                                        null == i &&
                                        /^\s*(?:sandbox_workspace_write|"sandbox_workspace_write"|'sandbox_workspace_write')\s*=\s*\{/.test(
                                          t,
                                        )
                                      )
                                        throw Error(
                                          "The sandbox_workspace_write inline table cannot be updated safely.",
                                        )
                                      if (s && /^\s*(?:network_access|"network_access"|'network_access')\s*=/.test(t)) {
                                        ;((a[e] = ec(t, `network_access = ${c}`, n.commentIndex)), (d = !0))
                                        break
                                      }
                                    }
                                    if (s && !d)
                                      return (
                                        a.splice(r, 0, `network_access = ${t ? "true" : "false"}`),
                                        el(a.join("\n"))
                                      )
                                    if (d) return el(a.join("\n"))
                                    if (n) {
                                      let e = l
                                      return (
                                        -1 === e && (e = "" === a.at(-1) ? a.length - 1 : a.length),
                                        a.splice(e, 0, `sandbox_workspace_write.network_access = ${c}`),
                                        el(a.join("\n"))
                                      )
                                    }
                                    let u =
                                        e.length > 0 && !e.endsWith("\n")
                                          ? `${e}
`
                                          : e,
                                      g = 0 === u.trim().length ? "" : "\n"
                                    return `${u}${g}[sandbox_workspace_write]
network_access = ${t ? "true" : "false"}
`
                                  })(o, !0 === r, d)
                                : (function (e, t, n) {
                                    let a = e.length > 0 ? e.split("\n") : [],
                                      s = null,
                                      i = null,
                                      o = -1,
                                      l = !1
                                    for (let [e, r] of a.entries()) {
                                      let d = ed(r, i),
                                        c = null != i
                                      if (((i = d.multilineString), c)) continue
                                      let u = er(r)
                                      if (null != u) {
                                        ;(-1 === o && (o = e), (s = u))
                                        continue
                                      }
                                      let g = r.match(/^\s*([A-Za-z0-9_-]+|"(?:[^"\\]|\\.)*"|'[^']*')\s*=/)?.[1]
                                      if (null == s && null != g && Object.hasOwn((0, ea.qg)(`${g} = ""`), t)) {
                                        let s = e,
                                          i = r,
                                          o = d
                                        for (let t of a.slice(e + 1)) {
                                          if (null == o.multilineString) break
                                          ;((s += 1), (i = t), (o = ed(t, o.multilineString)))
                                        }
                                        let c = s - e + 1
                                        ;(null == n
                                          ? -1 === o.commentIndex
                                            ? a.splice(e, c)
                                            : a.splice(e, c, `${r.match(/^\s*/)?.[0] ?? ""}${i.slice(o.commentIndex)}`)
                                          : a.splice(e, c, ec(i, `${t} = "${n}"`, o.commentIndex, r)),
                                          (l = !0))
                                        break
                                      }
                                    }
                                    if (!l) {
                                      if (null == n) return e
                                      let s = o
                                      ;(-1 === s && (s = "" === a.at(-1) ? a.length - 1 : a.length),
                                        a.splice(s, 0, `${t} = "${n}"`))
                                    }
                                    return el(a.join("\n"))
                                  })(o, l, null == r ? null : String(r)))
                            try {
                              ;(0, ea.qg)(p)
                            } catch {
                              throw Error("The updated project config.toml file is invalid.")
                            }
                            if (p !== g)
                              try {
                                let n = ei.appServices.workspaceFiles.writeText
                                if (null == n) throw Error("Text file writes are unavailable in this host.")
                                await (0, eo.P)(n({ path: e, hostId: t, contents: p }))
                              } catch {
                                throw Error("Failed to save project config.")
                              }
                          })({ filePath: a, hostId: _, keyPath: t, value: n })
                      : void 0,
                  value: n,
                })
              } catch (n) {
                let t =
                  n instanceof Error &&
                  "The sandbox_workspace_write inline table cannot be updated safely." === n.message
                    ? N.formatMessage({
                        id: "settings.agent.configuration.inlineSandboxWriteError",
                        defaultMessage:
                          "This project uses an inline sandbox table. Edit config.toml directly to change network access",
                      })
                    : N.formatMessage({
                        id: "settings.agent.configuration.writeError",
                        defaultMessage: "Couldn't update this setting. Check config.toml for errors and try again",
                      })
                X((n) => ({ ...n, [e]: t }))
              }
            })().finally(() => {
              B((t) => t.filter((t) => t !== e))
            }))
        },
        tu = eF({
          intl: N,
          scopeLockReason: to,
          origin: e8,
          selectedScope: eK,
          hasOptions: tl.length > 0,
          restrictedMessage: N.formatMessage({
            id: "settings.agent.configuration.approval.restricted",
            defaultMessage: "Approval policy is restricted by this installation.",
          }),
        }),
        tg = eF({
          intl: N,
          scopeLockReason: to,
          origin: te,
          selectedScope: eK,
          hasOptions: tr.length > 0,
          restrictedMessage: N.formatMessage({
            id: "settings.agent.configuration.sandbox.restricted",
            defaultMessage: "Sandbox mode is restricted by this installation.",
          }),
        }),
        tp = eF({ intl: N, scopeLockReason: to, origin: tt, selectedScope: eK, hasOptions: !0, restrictedMessage: "" }),
        tf = eF({
          intl: N,
          scopeLockReason: to,
          origin: tn,
          selectedScope: eK,
          hasOptions: td.length > 0,
          restrictedMessage: N.formatMessage({
            id: "settings.agent.configuration.webSearch.restricted",
            defaultMessage: "Web search is restricted by this installation",
          }),
        }),
        tm = eF({ intl: N, scopeLockReason: to, origin: ta, selectedScope: eK, hasOptions: !0, restrictedMessage: "" }),
        th = eF({ intl: N, scopeLockReason: to, origin: ts, selectedScope: eK, hasOptions: !0, restrictedMessage: "" }),
        tx = ew || ej || null != ti,
        tb = tx || q.includes("approval") || null != tu,
        tw = tx || q.includes("sandbox") || null != tg
      C[17] !== z.key || C[18] !== I
        ? ((k = (e) => {
            ;(G({ scopeKey: e, locationKey: z.key }), I?.onSelectCodex(), X({}))
          }),
          (C[17] = z.key),
          (C[18] = I),
          (C[19] = k))
        : (k = C[19])
      let ty = k
      C[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = (0, a.jsx)(ex.X.Header, { title: (0, a.jsx)(l.A, { ...en.z.agentConfig }) })), (C[20] = A))
        : (A = C[20])
      let tv = (0, a.jsxs)(ex.X, {
          className: "mb-8",
          children: [
            A,
            (0, a.jsx)(ex.X.Content, {
              children: (0, a.jsxs)(ey.t, {
                children: [
                  (0, a.jsx)(eh.GC, {
                    entry: et.uk.scope,
                    controlSizing: "grow",
                    control: (e) =>
                      (0, a.jsxs)(R.Ab, {
                        align: "end",
                        contentWidth: "menuWide",
                        disabled: 0 === e$.length,
                        triggerButton: (0, a.jsx)(eC.vg, {
                          ...e,
                          "aria-labelledby": `${e["aria-labelledby"]} ${E}`,
                          disabled: 0 === e$.length,
                          children: (0, a.jsx)("span", {
                            id: E,
                            className: "truncate",
                            children: I?.selected
                              ? I.label
                              : (eK?.label ??
                                N.formatMessage({
                                  id: "settings.agent.configuration.scope.loading",
                                  defaultMessage: "Loading\u2026",
                                })),
                          }),
                        }),
                        children: [
                          eq
                            ? (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsxs)(R.ms.Section, {
                                    children: [
                                      (0, a.jsx)(R.ms.SectionLabel, {
                                        children: (0, a.jsx)(l.A, { ...en.z.projectConfig }),
                                      }),
                                      eD.map((e) =>
                                        (0, a.jsx)(
                                          eV,
                                          {
                                            scopeOption: e,
                                            selected: !I?.selected && eK?.key === e.key,
                                            onSelect: () => {
                                              ty(e.key)
                                            },
                                          },
                                          e.key,
                                        ),
                                      ),
                                    ],
                                  }),
                                  (0, a.jsx)(R.ms.Separator, {}),
                                ],
                              })
                            : null,
                          (0, a.jsxs)(R.ms.Section, {
                            children: [
                              null == I
                                ? (0, a.jsx)(R.ms.SectionLabel, { children: (0, a.jsx)(l.A, { ...en.z.globalConfig }) })
                                : null,
                              (0, a.jsx)(eV, {
                                scopeOption: eO,
                                selected: !I?.selected && eK?.key === eO.key,
                                onSelect: () => {
                                  ty(eO.key)
                                },
                              }),
                              null != I
                                ? (0, a.jsx)(R.ms.Item, {
                                    rightIconAsset: I.selected ? g.G : void 0,
                                    onSelect: I.onSelect,
                                    children: I.label,
                                  })
                                : null,
                              null != eY
                                ? (0, a.jsx)(eV, {
                                    scopeOption: eY,
                                    selected: !I?.selected && eK?.key === eY.key,
                                    onSelect: () => {
                                      ty(eY.key)
                                    },
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),
                  }),
                  I?.selected
                    ? null
                    : (0, a.jsx)(eh.GC, {
                        entry:
                          eK?.kind === "managed" && null == eK.filePath
                            ? { ...et.uk.openConfigToml, description: en.z.managedConfigNoFile }
                            : et.uk.openConfigToml,
                        control: (0, a.jsx)(T.$, {
                          color: "secondary",
                          size: "toolbar",
                          disabled: eK?.filePath == null,
                          onClick: () => {
                            eK?.filePath != null &&
                              (0, U.openWorkspaceFile)({
                                path: eK.filePath,
                                cwd: null != eK.workspaceRoot ? (0, b.DIv)(eK.workspaceRoot) : null,
                                hostId: _,
                                target: eX?.preferredTarget,
                              })
                          },
                          children: (0, a.jsx)(l.A, {
                            id: "settings.agent.configuration.scope.openButton",
                            defaultMessage: "Open",
                          }),
                        }),
                      }),
                ],
              }),
            }),
          ],
        }),
        tj = ex.X
      C[21] !== I?.selected
        ? ((S = I?.selected ? null : (0, a.jsx)(ex.X.Header, { title: (0, a.jsx)(l.A, { ...en.z.agentDefaults }) })),
          (C[21] = I?.selected),
          (C[22] = S))
        : (S = C[22])
      let tk = I?.selected
        ? I.content
        : (0, a.jsxs)(ex.X.Content, {
            children: [
              null != ti ? (0, a.jsx)(D.l, { content: ti, Icon: Y.A, type: "warning" }) : null,
              (0, a.jsxs)(ey.t, {
                children: [
                  eH ? (0, a.jsx)(eL, { hostId: _, state: W }) : null,
                  eH && "enabled" !== W
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)(eh.GC, {
                            entry: et.uk.approval,
                            description: (0, a.jsx)(eW, {
                              error: K.approval,
                              lockReason: tu,
                              children: (0, a.jsx)(l.A, {
                                id: "settings.agent.configuration.approval.definition",
                                defaultMessage: "Choose when ChatGPT asks for approval",
                              }),
                            }),
                            control: (0, a.jsx)(R.Ab, {
                              align: "end",
                              contentWidth: "panelWide",
                              disabled: tb,
                              triggerButton: (0, a.jsx)(eC.vg, {
                                disabled: tb,
                                contentClassName: "truncate",
                                children: null != e3 ? N.formatMessage(e3.label) : e1,
                              }),
                              children: tl.map((e) =>
                                (0, a.jsx)(
                                  R.ms.Item,
                                  {
                                    rightIconAsset: e.value === e1 ? g.G : void 0,
                                    subTextAllowWrap: !0,
                                    onSelect: () => {
                                      tc("approval", "approval_policy", e.value)
                                    },
                                    SubText: (0, a.jsx)("div", {
                                      className: "pt-1 text-sm text-secondary",
                                      children: (0, a.jsx)(l.A, { ...e.description }),
                                    }),
                                    children: (0, a.jsx)("span", {
                                      className: "text-sm",
                                      children: N.formatMessage(e.label),
                                    }),
                                  },
                                  e.value,
                                ),
                              ),
                            }),
                          }),
                          (0, a.jsx)(eh.GC, {
                            entry: et.uk.sandbox,
                            description: (0, a.jsx)(eW, {
                              error: K.sandbox,
                              lockReason: tg,
                              children: (0, a.jsx)(l.A, {
                                id: "settings.agent.configuration.sandbox.definition",
                                defaultMessage: "Choose how much ChatGPT can do when running commands",
                              }),
                            }),
                            control: (0, a.jsx)(R.Ab, {
                              align: "end",
                              contentWidth: "panelWide",
                              disabled: tw,
                              triggerButton: (0, a.jsx)(eC.vg, {
                                disabled: tw,
                                contentClassName: "truncate",
                                children: null != e5 ? N.formatMessage(e5.label) : e2,
                              }),
                              children: tr.map((e) =>
                                (0, a.jsx)(
                                  R.ms.Item,
                                  {
                                    rightIconAsset: e.value === e2 ? g.G : void 0,
                                    subTextAllowWrap: !0,
                                    onSelect: () => {
                                      tc("sandbox", "sandbox_mode", e.value)
                                    },
                                    SubText: (0, a.jsx)("div", {
                                      className: "pt-1 text-sm text-secondary",
                                      children: e.description,
                                    }),
                                    children: (0, a.jsx)("span", {
                                      className: "text-sm",
                                      children: N.formatMessage(e.label),
                                    }),
                                  },
                                  e.value,
                                ),
                              ),
                            }),
                          }),
                          e0
                            ? (0, a.jsx)(eh.GC, {
                                entry: et.uk.network,
                                description: (0, a.jsx)(eW, {
                                  error: K.network,
                                  lockReason: tp,
                                  children: (0, a.jsx)(l.A, {
                                    id: "settings.agent.configuration.network.definition",
                                    defaultMessage: "Allow network access when the sandbox is set to workspace write",
                                  }),
                                }),
                                control: (0, a.jsx)(O.l, {
                                  checked: e4,
                                  disabled: tx || q.includes("network") || null != tp,
                                  onChange: (e) => {
                                    tc("network", "sandbox_workspace_write.network_access", e)
                                  },
                                  ariaLabel: N.formatMessage({
                                    id: "settings.agent.configuration.network.ariaLabel",
                                    defaultMessage: "Allow network access",
                                  }),
                                }),
                              })
                            : null,
                        ],
                      }),
                  (0, a.jsx)(eU, {
                    entry: et.uk.webSearch,
                    anchored: !0,
                    description: (0, a.jsx)(l.A, {
                      id: "settings.agent.configuration.webSearch.definition",
                      defaultMessage: "Choose how ChatGPT accesses the web",
                    }),
                    error: K.webSearch,
                    lockReason: tf,
                    options: td,
                    value: e9,
                    disabled: tx || q.includes("webSearch"),
                    onSelect: (e) => {
                      tc("webSearch", "web_search", e)
                    },
                  }),
                  (0, a.jsx)(eU, {
                    entry: et.uk.modelVerbosity,
                    anchored: !0,
                    description: (0, a.jsx)(l.A, {
                      id: "settings.agent.configuration.modelVerbosity.definition",
                      defaultMessage: "Choose how much detail ChatGPT includes in responses",
                    }),
                    error: K.modelVerbosity,
                    lockReason: tm,
                    options: ee.jp,
                    value: e6,
                    disabled: tx || q.includes("modelVerbosity"),
                    onSelect: (e) => {
                      tc("modelVerbosity", "model_verbosity", e)
                    },
                  }),
                  (0, a.jsx)(eU, {
                    entry: et.uk.reasoningSummary,
                    anchored: !0,
                    description: (0, a.jsx)(l.A, {
                      id: "settings.agent.configuration.reasoningSummary.definition",
                      defaultMessage: "Choose how ChatGPT summarizes its reasoning",
                    }),
                    error: K.reasoningSummary,
                    lockReason: th,
                    options: ee.$d,
                    value: e7,
                    disabled: tx || q.includes("reasoningSummary"),
                    onSelect: (e) => {
                      tc("reasoningSummary", "model_reasoning_summary", e)
                    },
                  }),
                  _ !== e_.fI ? (0, a.jsx)(eA.I, { hostId: _ }) : null,
                ],
              }),
            ],
          })
      C[23] !== tj || C[24] !== S || C[25] !== tk
        ? ((M = (0, a.jsxs)(tj, { children: [S, tk] })), (C[23] = tj), (C[24] = S), (C[25] = tk), (C[26] = M))
        : (M = C[26])
      let tA = M
      return (0, a.jsxs)(a.Fragment, { children: [tv, tA] })
    }
    function eL(e) {
      let t,
        n,
        i,
        o = (0, s.c)(8),
        { hostId: r, state: d } = e,
        { display_name: c } = (0, e_.Qz)(r)
      return (0, eP.Zj)("4226282475")
        ? (o[0] !== c
            ? ((t = (0, a.jsx)(l.A, {
                id: "settings.agent.configuration.customPermissions.descriptionWithHost",
                defaultMessage:
                  "Show advanced permission settings and add Custom to the permissions menu when available. Applies to {hostName} only.",
                values: { hostName: c },
              })),
              (o[0] = c),
              (o[1] = t))
            : (t = o[1]),
          o[2] !== r || o[3] !== d
            ? ((n = (e) =>
                (0, a.jsx)(O.l, {
                  ...e,
                  checked: "enabled" === d,
                  disabled: "loading" === d,
                  onChange: (e) => {
                    ;(0, B.D9)(r, e ? "visible" : "hidden")
                  },
                })),
              (o[2] = r),
              (o[3] = d),
              (o[4] = n))
            : (n = o[4]),
          o[5] !== t || o[6] !== n
            ? ((i = (0, a.jsx)(eh.GC, { entry: et.uk.customPermissions, description: t, control: n })),
              (o[5] = t),
              (o[6] = n),
              (o[7] = i))
            : (i = o[7]),
          i)
        : null
    }
    function eU(e) {
      let t,
        n,
        i,
        r,
        d,
        c,
        u,
        p,
        f = (0, s.c)(35),
        {
          anchored: m,
          description: h,
          disabled: x,
          error: b,
          entry: w,
          lockReason: y,
          onSelect: v,
          options: j,
          value: k,
        } = e,
        A = (0, o.A)()
      if (f[0] !== j || f[1] !== k) {
        let e
        ;(f[3] !== k ? ((e = (e) => e.value === k), (f[3] = k), (f[4] = e)) : (e = f[4]),
          (t = j.find(e)),
          (f[0] = j),
          (f[1] = k),
          (f[2] = t))
      } else t = f[2]
      let S = t,
        M = x || null != y
      if (
        (f[5] !== h || f[6] !== b || f[7] !== y
          ? ((n = (0, a.jsx)(eW, { error: b, lockReason: y, children: h })),
            (f[5] = h),
            (f[6] = b),
            (f[7] = y),
            (f[8] = n))
          : (n = f[8]),
        f[9] !== w.title || f[10] !== A
          ? ((i = (0, ew.hz)(A, w.title)), (f[9] = w.title), (f[10] = A), (f[11] = i))
          : (i = f[11]),
        f[12] !== S || f[13] !== k
          ? ((r = null != S ? (0, a.jsx)(l.A, { ...S.label }) : k), (f[12] = S), (f[13] = k), (f[14] = r))
          : (r = f[14]),
        f[15] !== M || f[16] !== i || f[17] !== r
          ? ((d = (0, a.jsx)(eC.vg, { disabled: M, contentClassName: "truncate", "aria-label": i, children: r })),
            (f[15] = M),
            (f[16] = i),
            (f[17] = r),
            (f[18] = d))
          : (d = f[18]),
        f[19] !== v || f[20] !== j || f[21] !== k)
      ) {
        let e
        ;(f[23] !== v || f[24] !== k
          ? ((e = (e) =>
              (0, a.jsx)(
                R.ms.Item,
                {
                  rightIconAsset: e.value === k ? g.G : void 0,
                  subTextAllowWrap: !0,
                  onSelect: () => {
                    v(e.value)
                  },
                  SubText:
                    null != e.description
                      ? (0, a.jsx)("div", {
                          className: "pt-1 text-sm text-secondary",
                          children: (0, a.jsx)(l.A, { ...e.description }),
                        })
                      : void 0,
                  children: (0, a.jsx)("span", { className: "text-sm", children: (0, a.jsx)(l.A, { ...e.label }) }),
                },
                e.value ?? "model-default",
              )),
            (f[23] = v),
            (f[24] = k),
            (f[25] = e))
          : (e = f[25]),
          (c = j.map(e)),
          (f[19] = v),
          (f[20] = j),
          (f[21] = k),
          (f[22] = c))
      } else c = f[22]
      return (
        f[26] !== M || f[27] !== d || f[28] !== c
          ? ((u = (0, a.jsx)(R.Ab, {
              align: "end",
              contentWidth: "panelWide",
              disabled: M,
              triggerButton: d,
              children: c,
            })),
            (f[26] = M),
            (f[27] = d),
            (f[28] = c),
            (f[29] = u))
          : (u = f[29]),
        f[30] !== m || f[31] !== w || f[32] !== n || f[33] !== u
          ? ((p = (0, a.jsx)(eh.GC, { entry: w, anchored: m, description: n, control: u })),
            (f[30] = m),
            (f[31] = w),
            (f[32] = n),
            (f[33] = u),
            (f[34] = p))
          : (p = f[34]),
        p
      )
    }
    function eV(e) {
      let t,
        n,
        i = (0, s.c)(7),
        { onSelect: o, scopeOption: l, selected: r } = e,
        d = r ? g.G : void 0
      return (
        i[0] !== l.label
          ? ((t = (0, a.jsx)("span", { className: "truncate text-sm", children: l.label })),
            (i[0] = l.label),
            (i[1] = t))
          : (t = i[1]),
        i[2] !== o || i[3] !== l.tooltipText || i[4] !== d || i[5] !== t
          ? ((n = (0, a.jsx)(R.ms.Item, {
              rightIconAsset: d,
              tooltipText: l.tooltipText,
              tooltipSide: "right",
              onSelect: o,
              children: t,
            })),
            (i[2] = o),
            (i[3] = l.tooltipText),
            (i[4] = d),
            (i[5] = t),
            (i[6] = n))
          : (n = i[6]),
        n
      )
    }
    function eW(e) {
      let t,
        n,
        i,
        o,
        l = (0, s.c)(10),
        { children: r, error: d, lockReason: c } = e
      return (
        l[0] !== r ? ((t = (0, a.jsx)("div", { children: r })), (l[0] = r), (l[1] = t)) : (t = l[1]),
        l[2] !== c
          ? ((n =
              null != c
                ? (0, a.jsxs)("div", {
                    className: "inline-flex items-center gap-1 text-sm text-warning",
                    children: [
                      (0, a.jsx)(N.bF, {
                        "aria-hidden": !1,
                        legacyIcon: F.A,
                        asset16: p.J,
                        legacyClassName: "icon-2xs",
                      }),
                      (0, a.jsx)("span", { children: c }),
                    ],
                  })
                : null),
            (l[2] = c),
            (l[3] = n))
          : (n = l[3]),
        l[4] !== d
          ? ((i = null != d ? (0, a.jsx)("div", { className: "text-sm text-danger", children: d }) : null),
            (l[4] = d),
            (l[5] = i))
          : (i = l[5]),
        l[6] !== t || l[7] !== n || l[8] !== i
          ? ((o = (0, a.jsxs)("div", { className: "flex flex-col gap-1", children: [t, n, i] })),
            (l[6] = t),
            (l[7] = n),
            (l[8] = i),
            (l[9] = o))
          : (o = l[9]),
        o
      )
    }
    function eF({ intl: e, scopeLockReason: t, origin: n, selectedScope: a, hasOptions: s, restrictedMessage: i }) {
      return null != t
        ? t
        : s
          ? a?.kind !== "managed" && null != n && (0, w.IH)(n.name)
            ? e.formatMessage({
                id: "settings.agent.configuration.control.managed",
                defaultMessage: "This value is managed by admin policy.",
              })
            : null
          : i
    }
    function eG(e) {
      return "untrusted" === e || "on-request" === e || "never" === e || "on-failure" === e ? e : null
    }
    var eY = n("pasN"),
      e$ = n("qe0m"),
      eq = n("tzYO")
    function eB() {
      let e,
        t,
        n,
        c,
        u,
        g,
        p,
        f,
        m = (0, s.c)(23),
        h = (0, o.A)(),
        x = (0, r.zy)(),
        [b, w] = (0, r.ok)(),
        y = (0, i.Ul)(eY.l),
        v = (0, i.Ul)(eq.v8),
        j = (0, i.Ul)(eq.J9),
        k = (0, i.Ul)(d.Xr),
        A = (0, eP.Zj)(!!k && (!!v || !!j) && "1308289094")
      m[0] !== b ? ((e = b.get("mode")), (m[0] = b), (m[1] = e)) : (e = m[1])
      let S = e
      if (!v && !j) {
        let e
        return (
          m[2] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(eR, {})), (m[2] = e)) : (e = m[2]),
          e
        )
      }
      if (!k) {
        let e
        return (
          m[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(e$.WorkSettingsPanel, {})), (m[3] = e))
            : (e = m[3]),
          e
        )
      }
      m[4] !== x || m[5] !== b || m[6] !== w
        ? ((t = function (e) {
            let t = new URLSearchParams(b)
            ;(t.set("mode", e), w(t, { replace: !0, state: x.state }))
          }),
          (m[4] = x),
          (m[5] = b),
          (m[6] = w),
          (m[7] = t))
        : (t = m[7])
      let M = t
      ;(m[8] !== A
        ? ((n = A
            ? (0, a.jsx)(l.A, { id: "settings.configuration.cloudDefaults", defaultMessage: "Cloud" })
            : (0, a.jsx)(l.A, { id: "settings.configuration.workDefaults", defaultMessage: "Work" })),
          (m[8] = A),
          (m[9] = n))
        : (n = m[9]),
        m[10] !== h || m[11] !== A
          ? ((c = A
              ? h.formatMessage({ id: "settings.configuration.localDefaults", defaultMessage: "Local" })
              : h.formatMessage({ id: "settings.configuration.codexDefaults", defaultMessage: "Codex" })),
            (m[10] = h),
            (m[11] = A),
            (m[12] = c))
          : (c = m[12]))
      let C = "work" === ("work" === S || "codex" === S ? S : y)
      return (
        m[13] !== M
          ? ((u = () => M("work")), (g = () => M("codex")), (m[13] = M), (m[14] = u), (m[15] = g))
          : ((u = m[14]), (g = m[15])),
        m[16] === Symbol.for("react.memo_cache_sentinel") ? ((p = (0, a.jsx)(e$.w, {})), (m[16] = p)) : (p = m[16]),
        m[17] !== n || m[18] !== c || m[19] !== C || m[20] !== u || m[21] !== g
          ? ((f = (0, a.jsx)(eR, {
              workConfiguration: { label: n, localLabel: c, selected: C, onSelect: u, onSelectCodex: g, content: p },
            })),
            (m[17] = n),
            (m[18] = c),
            (m[19] = C),
            (m[20] = u),
            (m[21] = g),
            (m[22] = f))
          : (f = m[22]),
        f
      )
    }
  },
  Hxso(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("oyxz"),
      o = n("MM0V"),
      l = n("eShZ")
    n.d(
      t,
      {},
      {
        s: function (e) {
          let t,
            n,
            r,
            d = (0, s.c)(8),
            { error: c, operation: u, onReload: g } = e
          if (c instanceof l.FetchError && "network" === c.errorKind) {
            let e
            ;(d[0] !== u
              ? ((e =
                  "save" === u
                    ? (0, a.jsx)(i.A, {
                        id: "workPreferences.saveNetworkFailed",
                        defaultMessage: "Your change was not saved. Check your internet connection and try again",
                      })
                    : (0, a.jsx)(i.A, {
                        id: "workPreferences.loadNetworkFailed",
                        defaultMessage: "Couldn't connect. Check your internet connection and try again",
                      })),
                (d[0] = u),
                (d[1] = e))
              : (e = d[1]),
              (t = e))
          } else {
            let e
            ;(d[2] !== u
              ? ((e =
                  "save" === u
                    ? (0, a.jsx)(i.A, {
                        id: "workPreferences.saveFailed",
                        defaultMessage: "Your change was not saved. Reload preferences and try again",
                      })
                    : (0, a.jsx)(i.A, {
                        id: "workPreferences.loadFailed",
                        defaultMessage: "Could not load Work preferences",
                      })),
                (d[2] = u),
                (d[3] = e))
              : (e = d[3]),
              (t = e))
          }
          return (
            d[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, a.jsx)(i.A, { id: "workPreferences.reload", defaultMessage: "Reload" })), (d[4] = n))
              : (n = d[4]),
            d[5] !== t || d[6] !== g
              ? ((r = (0, a.jsx)(o.l, {
                  type: "error",
                  role: "alert",
                  content: t,
                  primaryCtaText: n,
                  onPrimaryCtaClick: g,
                })),
                (d[5] = t),
                (d[6] = g),
                (d[7] = r))
              : (r = d[7]),
            r
          )
        },
      },
    )
  },
  qe0m(e, t, n) {
    n.d(t, { w: () => T, WorkSettingsPanel: () => D })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("qmMi"),
      o = n("oyxz"),
      l = n("CKur"),
      r = n("LLIt"),
      d = n("kg1F"),
      c = n("jxU8"),
      u = n("BSnr"),
      g = n("odCE"),
      p = n("QyE3"),
      f = n("ZEx5"),
      m = n("Jm9C"),
      h = n("zd8w"),
      x = n("Wf1j"),
      b = n("Sm6l"),
      w = n("zLIa"),
      y = n("i7fz"),
      v = n("pO0d"),
      j = n("prAI")
    function k(e) {
      let t,
        n,
        i,
        l,
        r,
        d,
        c,
        g,
        p,
        m = (0, s.c)(25),
        { settings: x, disabled: w, onUpdate: y } = e
      m[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, j.a)()), (m[0] = t)) : (t = m[0])
      let v = t,
        [k, C] = (0, h.useState)(0),
        _ = x?.modelContextWindow != null || x?.modelAutoCompactTokenLimit != null
      m[1] !== y
        ? ((n = async function () {
            try {
              ;(await y({ modelContextWindow: null, modelAutoCompactTokenLimit: null }), C(S))
            } catch {}
          }),
          (m[1] = y),
          (m[2] = n))
        : (n = m[2])
      let I = n,
        P = `context-${k}`,
        D = x?.modelContextWindow ?? null
      ;(m[3] !== y ? ((i = (e) => y({ modelContextWindow: e })), (m[3] = y), (m[4] = i)) : (i = m[4]),
        m[5] !== P || m[6] !== D || m[7] !== i
          ? ((l = (0, a.jsx)(M, { entry: v.contextWindow, savedLimit: D, onSave: i }, P)),
            (m[5] = P),
            (m[6] = D),
            (m[7] = i),
            (m[8] = l))
          : (l = m[8]))
      let T = `compact-${k}`,
        R = x?.modelAutoCompactTokenLimit ?? null
      return (
        m[9] !== y ? ((r = (e) => y({ modelAutoCompactTokenLimit: e })), (m[9] = y), (m[10] = r)) : (r = m[10]),
        m[11] !== T || m[12] !== R || m[13] !== r
          ? ((d = (0, a.jsx)(M, { entry: v.compactLimit, savedLimit: R, onSave: r }, T)),
            (m[11] = T),
            (m[12] = R),
            (m[13] = r),
            (m[14] = d))
          : (d = m[14]),
        m[15] !== d || m[16] !== l
          ? ((c = (0, a.jsxs)(f.t, { children: [l, d] })), (m[15] = d), (m[16] = l), (m[17] = c))
          : (c = m[17]),
        m[18] !== w || m[19] !== _ || m[20] !== I
          ? ((g = _
              ? (0, a.jsx)(u.X.Footer, {
                  variant: "action",
                  className: "flex justify-end",
                  children: (0, a.jsx)(b.$, {
                    color: "ghostSecondary",
                    size: "toolbar",
                    disabled: w,
                    onMouseDown: A,
                    onClick: () => {
                      I()
                    },
                    children: (0, a.jsx)(o.A, {
                      id: "workPreferences.personalCloud.reset",
                      defaultMessage: "Reset to defaults",
                    }),
                  }),
                })
              : null),
            (m[18] = w),
            (m[19] = _),
            (m[20] = I),
            (m[21] = g))
          : (g = m[21]),
        m[22] !== c || m[23] !== g
          ? ((p = (0, a.jsx)(u.X, { children: (0, a.jsxs)(u.X.Content, { children: [c, g] }) })),
            (m[22] = c),
            (m[23] = g),
            (m[24] = p))
          : (p = m[24]),
        p
      )
    }
    function A(e) {
      e.preventDefault()
    }
    function S(e) {
      return e + 1
    }
    function M(e) {
      let t,
        n,
        i,
        l,
        r = (0, s.c)(18),
        { entry: d, savedLimit: c, onSave: u } = e,
        g = (0, x.A)(),
        [p, f] = (0, h.useState)(null),
        [m, b] = (0, h.useState)(!1)
      ;(null != p && p.savedLimit !== c && f(null),
        r[0] !== p || r[1] !== m || r[2] !== u || r[3] !== c
          ? ((t = async function (e) {
              if (m || null == p) return
              let t = "" === e.value ? null : Number(e.value)
              if (e.validity.badInput || (null != t && (!Number.isSafeInteger(t) || t <= 5e4)))
                return void f({ ...p, invalid: !0 })
              if (t === c) return void f(null)
              b(!0)
              try {
                ;(await u(t), f(null))
              } catch {}
              b(!1)
            }),
            (r[0] = p),
            (r[1] = m),
            (r[2] = u),
            (r[3] = c),
            (r[4] = t))
          : (t = r[4]))
      let j = t
      return (
        r[5] !== p?.invalid
          ? ((n = p?.invalid
              ? (0, a.jsx)("span", {
                  role: "alert",
                  className: "text-danger",
                  children: (0, a.jsx)(o.A, {
                    id: "workPreferences.cloudTokenSettings.invalidLimit",
                    defaultMessage: "Enter a whole number greater than {minimum, number}, or leave this field blank",
                    values: { minimum: 5e4 },
                  }),
                })
              : void 0),
            (r[5] = p?.invalid),
            (r[6] = n))
          : (n = r[6]),
        r[7] !== j || r[8] !== p?.invalid || r[9] !== p?.value || r[10] !== g || r[11] !== m || r[12] !== c
          ? ((i = (e) =>
              (0, a.jsx)(w.pd, {
                ...e,
                type: "number",
                min: 50001,
                step: 1,
                placeholder: g.formatMessage({
                  id: "workPreferences.personalCloud.modelDefault",
                  defaultMessage: "Model default",
                }),
                value: p?.value ?? c?.toString() ?? "",
                readOnly: m,
                "aria-invalid": p?.invalid || void 0,
                onChange: (e) => {
                  f({ savedLimit: c, value: e.currentTarget.value, invalid: !1 })
                },
                onBlur: (e) => {
                  j(e.currentTarget)
                },
                onKeyDown: (e) => {
                  "Enter" !== e.key || (0, y.X)(e.nativeEvent) || (e.preventDefault(), j(e.currentTarget))
                },
              })),
            (r[7] = j),
            (r[8] = p?.invalid),
            (r[9] = p?.value),
            (r[10] = g),
            (r[11] = m),
            (r[12] = c),
            (r[13] = i))
          : (i = r[13]),
        r[14] !== d || r[15] !== n || r[16] !== i
          ? ((l = (0, a.jsx)(v.GC, { entry: d, description: n, control: i })),
            (r[14] = d),
            (r[15] = n),
            (r[16] = i),
            (r[17] = l))
          : (l = r[17]),
        l
      )
    }
    var C = n("Hxso"),
      _ = n("MSZ3"),
      I = n("wWjT"),
      P = n("tzYO")
    function D() {
      let e,
        t,
        n,
        l,
        r = (0, s.c)(6),
        d = (0, i.Ul)(P.v8)
      return (
        r[0] !== d
          ? ((e = d
              ? (0, a.jsx)(o.A, {
                  id: "settings.work.preferences.overview",
                  defaultMessage: "Choose the defaults for new Work tasks",
                })
              : void 0),
            (r[0] = d),
            (r[1] = e))
          : (e = r[1]),
        r[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(p.gl, { slug: "agent" })), (n = (0, a.jsx)(T, {})), (r[2] = t), (r[3] = n))
          : ((t = r[2]), (n = r[3])),
        r[4] !== e
          ? ((l = (0, a.jsx)(c.P, { overview: e, title: t, children: n })), (r[4] = e), (r[5] = l))
          : (l = r[5]),
        l
      )
    }
    function T() {
      let e,
        t,
        n,
        o,
        l,
        r = (0, s.c)(23),
        d = (0, i.Ul)(P.v8),
        c = (0, i.Ul)(P.J9),
        u = (0, i.Ul)(P.rQ),
        { data: p, isPending: f, error: m, refetch: h } = (0, i.Ul)(P.bU),
        x = (0, i.Ul)(P.$C),
        b = (0, i.Ul)(P.NI),
        w = x.isPending || b.isPending,
        y = x.error ?? b.error
      return (
        r[0] !== f ? ((e = f ? (0, a.jsx)(g.j, {}) : null), (r[0] = f), (r[1] = e)) : (e = r[1]),
        r[2] !== m || r[3] !== h || r[4] !== y
          ? ((t =
              null != m || null != y
                ? (0, a.jsx)(C.s, {
                    error: y ?? m,
                    operation: null != y ? "save" : "load",
                    onReload: () => {
                      h()
                    },
                  })
                : null),
            (r[2] = m),
            (r[3] = h),
            (r[4] = y),
            (r[5] = t))
          : (t = r[5]),
        r[6] !== p || r[7] !== d || r[8] !== w || r[9] !== x.mutate
          ? ((n = d && null != p ? (0, a.jsx)(R, { settings: p.settings, disabled: w, onUpdate: x.mutate }) : null),
            (r[6] = p),
            (r[7] = d),
            (r[8] = w),
            (r[9] = x.mutate),
            (r[10] = n))
          : (n = r[10]),
        r[11] !== c || r[12] !== p || r[13] !== u?.accountId || r[14] !== u?.userId || r[15] !== w || r[16] !== b
          ? ((o =
              c && null != p
                ? (0, a.jsx)(
                    k,
                    { settings: p.settings, disabled: w, onUpdate: b.mutateAsync },
                    JSON.stringify([u?.accountId, u?.userId]),
                  )
                : null),
            (r[11] = c),
            (r[12] = p),
            (r[13] = u?.accountId),
            (r[14] = u?.userId),
            (r[15] = w),
            (r[16] = b),
            (r[17] = o))
          : (o = r[17]),
        r[18] !== e || r[19] !== t || r[20] !== n || r[21] !== o
          ? ((l = (0, a.jsxs)(a.Fragment, { children: [e, t, n, o] })),
            (r[18] = e),
            (r[19] = t),
            (r[20] = n),
            (r[21] = o),
            (r[22] = l))
          : (l = r[22]),
        l
      )
    }
    function R(e) {
      let t,
        n,
        r,
        d,
        c,
        g,
        p,
        h,
        x,
        b,
        w,
        y,
        v,
        j,
        k,
        A,
        S,
        M,
        C,
        P,
        D,
        T,
        R,
        V,
        W,
        F,
        G = (0, s.c)(75),
        { settings: Y, disabled: $, onUpdate: q } = e,
        { data: B, isPending: K } = (0, i.Ul)(l.av)
      if (G[0] !== $ || G[1] !== K || G[2] !== B || G[3] !== q || G[4] !== Y) {
        let e,
          s,
          i,
          l,
          { models: v, thinkingEfforts: j, speeds: k } = (0, I.TK)(B, Y)
        ;((d = u.X),
          (r = u.X.Content),
          (n = f.t),
          G[17] !== q ? ((e = (e) => q({ model: e, reasoningEffort: null })), (G[17] = q), (G[18] = e)) : (e = G[18]),
          (b = (0, a.jsx)(_.g, {
            entry: I.pR.model,
            value: Y?.model,
            isLoading: K && Y?.model != null,
            options: v.map(U),
            disabled: $ || null == B,
            onChange: e,
          })),
          G[19] !== q ? ((s = (e) => q({ reasoningEffort: e })), (G[19] = q), (G[20] = s)) : (s = G[20]),
          (w = (0, a.jsx)(_.g, {
            entry: I.pR.reasoning,
            value: Y?.reasoningEffort,
            isLoading: K && Y?.reasoningEffort != null,
            options: j.map(L),
            disabled: $ || 0 === j.length,
            onChange: s,
          })))
        let A = Y?.approvalPolicy
        ;(G[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)(o.A, {
              id: "workPreferences.approval.default.description",
              defaultMessage: "Reset the saved choice and use Work\u2019s defaults",
            })),
            (G[21] = i))
          : (i = G[21]),
          G[22] !== q ? ((l = (e) => q({ approvalPolicy: e })), (G[22] = q), (G[23] = l)) : (l = G[23]),
          G[24] !== $ || G[25] !== A || G[26] !== l
            ? ((y = (0, a.jsx)(_.g, {
                entry: I.pR.approval,
                value: A,
                options: m.V,
                defaultDescription: i,
                disabled: $,
                onChange: l,
              })),
              (G[24] = $),
              (G[25] = A),
              (G[26] = l),
              (G[27] = y))
            : (y = G[27]),
          (t = _.g),
          (c = I.pR.speed),
          (g =
            null == B || Y?.serviceTier == null || k.some((e) => e.value === Y.serviceTier)
              ? void 0
              : (0, a.jsx)(o.A, {
                  id: "workPreferences.unavailableSpeed",
                  defaultMessage:
                    "Your saved speed isn\u2019t available for this model or account. Standard will be used",
                })),
          (p = Y?.serviceTier),
          (h = K && Y?.serviceTier != null),
          (x = k.map(O)),
          (G[0] = $),
          (G[1] = K),
          (G[2] = B),
          (G[3] = q),
          (G[4] = Y),
          (G[5] = t),
          (G[6] = n),
          (G[7] = r),
          (G[8] = d),
          (G[9] = c),
          (G[10] = g),
          (G[11] = p),
          (G[12] = h),
          (G[13] = x),
          (G[14] = b),
          (G[15] = w),
          (G[16] = y))
      } else
        ((t = G[5]),
          (n = G[6]),
          (r = G[7]),
          (d = G[8]),
          (c = G[9]),
          (g = G[10]),
          (p = G[11]),
          (h = G[12]),
          (x = G[13]),
          (b = G[14]),
          (w = G[15]),
          (y = G[16]))
      let H = $ || null == B
      ;(G[28] !== q ? ((v = (e) => q({ serviceTier: e })), (G[28] = q), (G[29] = v)) : (v = G[29]),
        G[30] !== t ||
        G[31] !== c ||
        G[32] !== v ||
        G[33] !== g ||
        G[34] !== p ||
        G[35] !== h ||
        G[36] !== x ||
        G[37] !== H
          ? ((j = (0, a.jsx)(t, {
              entry: c,
              description: g,
              value: p,
              isLoading: h,
              options: x,
              disabled: H,
              onChange: v,
            })),
            (G[30] = t),
            (G[31] = c),
            (G[32] = v),
            (G[33] = g),
            (G[34] = p),
            (G[35] = h),
            (G[36] = x),
            (G[37] = H),
            (G[38] = j))
          : (j = G[38]))
      let X = Y?.sandboxMode
      ;(G[39] === Symbol.for("react.memo_cache_sentinel") ? ((k = I.j0.map(z)), (G[39] = k)) : (k = G[39]),
        G[40] !== q ? ((A = (e) => q({ sandboxMode: e })), (G[40] = q), (G[41] = A)) : (A = G[41]),
        G[42] !== $ || G[43] !== X || G[44] !== A
          ? ((S = (0, a.jsx)(_.g, { entry: I.pR.sandbox, value: X, options: k, disabled: $, onChange: A })),
            (G[42] = $),
            (G[43] = X),
            (G[44] = A),
            (G[45] = S))
          : (S = G[45]))
      let Q = Y?.networkAccess
      ;(G[46] === Symbol.for("react.memo_cache_sentinel") ? ((M = I.y4.map(N)), (G[46] = M)) : (M = G[46]),
        G[47] !== q ? ((C = (e) => q({ networkAccess: e })), (G[47] = q), (G[48] = C)) : (C = G[48]),
        G[49] !== $ || G[50] !== Q || G[51] !== C
          ? ((P = (0, a.jsx)(_.g, { entry: I.pR.network, value: Q, options: M, disabled: $, onChange: C })),
            (G[49] = $),
            (G[50] = Q),
            (G[51] = C),
            (G[52] = P))
          : (P = G[52]))
      let Z = Y?.webSearch
      return (
        G[53] === Symbol.for("react.memo_cache_sentinel") ? ((D = I.GK.map(E)), (G[53] = D)) : (D = G[53]),
        G[54] !== q ? ((T = (e) => q({ webSearch: e })), (G[54] = q), (G[55] = T)) : (T = G[55]),
        G[56] !== $ || G[57] !== Z || G[58] !== T
          ? ((R = (0, a.jsx)(_.g, { entry: I.pR.search, value: Z, options: D, disabled: $, onChange: T })),
            (G[56] = $),
            (G[57] = Z),
            (G[58] = T),
            (G[59] = R))
          : (R = G[59]),
        G[60] !== n ||
        G[61] !== j ||
        G[62] !== S ||
        G[63] !== P ||
        G[64] !== R ||
        G[65] !== b ||
        G[66] !== w ||
        G[67] !== y
          ? ((V = (0, a.jsxs)(n, { children: [b, w, y, j, S, P, R] })),
            (G[60] = n),
            (G[61] = j),
            (G[62] = S),
            (G[63] = P),
            (G[64] = R),
            (G[65] = b),
            (G[66] = w),
            (G[67] = y),
            (G[68] = V))
          : (V = G[68]),
        G[69] !== r || G[70] !== V
          ? ((W = (0, a.jsx)(r, { children: V })), (G[69] = r), (G[70] = V), (G[71] = W))
          : (W = G[71]),
        G[72] !== d || G[73] !== W
          ? ((F = (0, a.jsx)(d, { children: W })), (G[72] = d), (G[73] = W), (G[74] = F))
          : (F = G[74]),
        F
      )
    }
    function E(e) {
      let { value: t, title: n } = e
      return { value: t, label: (0, a.jsx)(o.A, { ...n }) }
    }
    function N(e) {
      let { value: t, title: n } = e
      return { value: t, label: (0, a.jsx)(o.A, { ...n }) }
    }
    function z(e) {
      let { value: t, title: n } = e
      return { value: t, label: (0, a.jsx)(o.A, { ...n }) }
    }
    function O(e) {
      let { value: t, title: n } = e
      return { value: t, label: (0, a.jsx)(o.A, { ...n }) }
    }
    function L(e) {
      return { value: e.thinking_effort, label: (0, a.jsx)(d.w, { effort: r.QW[e.thinking_effort] }) }
    }
    function U(e) {
      return {
        value: e.slug,
        label: (0, I.ZB)(e) ?? (0, a.jsx)(o.A, { id: "workPreferences.unnamedModel", defaultMessage: "Model" }),
      }
    }
  },
  MSZ3(e, t, n) {
    var a = n("ABep"),
      s = n("QosV"),
      i = n("oyxz"),
      o = n("bqtn"),
      l = n("X3K1"),
      r = n("pO0d"),
      d = n("QyE3")
    function c(e) {
      return null != e.description
    }
    function u() {
      let e,
        t = (0, s.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(i.A, { id: "workPreferences.current", defaultMessage: "Use default" })), (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    n.d(
      t,
      {},
      {
        Q: u,
        g: function (e) {
          let t,
            n,
            g,
            p = (0, s.c)(17),
            {
              entry: f,
              description: m,
              defaultDescription: h,
              value: x,
              options: b,
              disabled: w,
              isLoading: y,
              onChange: v,
            } = e,
            j = void 0 !== y && y
          if (p[0] !== j || p[1] !== b || p[2] !== x) {
            if (j) {
              let e, n
              ;(p[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)("span", {
                    className: "sr-only",
                    children: (0, a.jsx)(i.A, { id: "workPreferences.loadingLabel", defaultMessage: "Loading\u2026" }),
                  })),
                  (n = (0, a.jsx)(l.X, { as: "span", className: "block w-24", size: "sm" })),
                  (p[4] = e),
                  (p[5] = n))
                : ((e = p[4]), (n = p[5])),
                (t = (0, a.jsxs)("span", { role: "status", children: [e, n] })))
            } else
              t =
                null == x
                  ? (0, a.jsx)(u, {})
                  : (b.find((e) => e.value === x)?.label ??
                    (0, a.jsx)(i.A, { id: "workPreferences.unavailableValue", defaultMessage: "Unavailable" }))
            ;((p[0] = j), (p[1] = b), (p[2] = x), (p[3] = t))
          } else t = p[3]
          return (
            p[6] !== h || p[7] !== w || p[8] !== j || p[9] !== v || p[10] !== b || p[11] !== t
              ? ((n = (e) =>
                  (0, a.jsxs)(o.Ab, {
                    align: "end",
                    contentWidth: null != h || b.some(c) ? "panelWide" : void 0,
                    disabled: w,
                    triggerButton: (0, a.jsx)(d.vg, { ...e, "aria-busy": j || void 0, disabled: w, children: t }),
                    children: [
                      (0, a.jsx)(o.ms.Item, {
                        SubText: h,
                        subTextAllowWrap: !0,
                        onSelect: () => v(null),
                        children: (0, a.jsx)(u, {}),
                      }),
                      b.map((e) =>
                        (0, a.jsx)(
                          o.ms.Item,
                          {
                            SubText: e.description,
                            subTextAllowWrap: !0,
                            onSelect: () => v(e.value),
                            children: e.label,
                          },
                          String(e.value),
                        ),
                      ),
                    ],
                  })),
                (p[6] = h),
                (p[7] = w),
                (p[8] = j),
                (p[9] = v),
                (p[10] = b),
                (p[11] = t),
                (p[12] = n))
              : (n = p[12]),
            p[13] !== m || p[14] !== f || p[15] !== n
              ? ((g = (0, a.jsx)(r.GC, { entry: f, description: m, control: n })),
                (p[13] = m),
                (p[14] = f),
                (p[15] = n),
                (p[16] = g))
              : (g = p[16]),
            g
          )
        },
      },
    )
  },
  wWjT(e, t, n) {
    var a = n("i5ac"),
      s = n.n(a),
      i = n("qmMi"),
      o = n("Qgfj"),
      l = n("LLIt"),
      r = n("sMGP"),
      d = n("moNn"),
      c = n("OWtl"),
      u = n("XHhS"),
      g = n("l2g8"),
      p = n("Jm9C"),
      f = n("tzYO")
    let m = (0, o.YK)({
        model: { id: "workPreferences.model", defaultMessage: "Model" },
        reasoning: { id: "workPreferences.reasoning", defaultMessage: "Default reasoning effort" },
        approval: { id: "workPreferences.localApprovalPolicy", defaultMessage: "Local approval policy" },
        approvalDescription: {
          id: "workPreferences.localApprovalPolicyDescription",
          defaultMessage: "Applies to native Work chats. Classic Work currently forwards only on-request approvals",
        },
        speed: { id: "workPreferences.speed", defaultMessage: "Speed" },
        sandbox: { id: "workPreferences.sandbox", defaultMessage: "Local file access" },
        network: { id: "workPreferences.network", defaultMessage: "Local network access" },
        search: { id: "workPreferences.search", defaultMessage: "Local web search" },
        off: { id: "workPreferences.off", defaultMessage: "Off" },
        on: { id: "workPreferences.on", defaultMessage: "On" },
      }),
      h = [
        { value: "read-only", title: u.z.readOnly },
        { value: "workspace-write", title: u.z.workspaceWrite },
      ],
      x = [
        { value: !1, title: m.off },
        { value: !0, title: m.on },
      ],
      b = [
        { value: "disabled", title: m.off },
        { value: "cached", title: u.z.webSearchCached },
        { value: "live", title: u.z.webSearchLive },
      ],
      w = {
        model: { section: "work-settings", id: "work-model", title: m.model },
        reasoning: { section: "work-settings", id: "work-reasoning", title: m.reasoning },
        approval: {
          section: "work-settings",
          id: "work-approval-policy",
          title: m.approval,
          description: m.approvalDescription,
          options: p.V.map(({ title: e }) => e),
        },
        speed: { section: "work-settings", id: "work-speed", title: m.speed },
        sandbox: {
          section: "work-settings",
          id: "work-file-access",
          title: m.sandbox,
          options: h.map(({ title: e }) => e),
        },
        network: {
          section: "work-settings",
          id: "work-network-access",
          title: m.network,
          options: x.map(({ title: e }) => e),
        },
        search: {
          section: "work-settings",
          id: "work-web-search",
          title: m.search,
          options: b.map(({ title: e }) => e),
        },
      },
      y = (0, i.un)(c.u, ({ get: e }) => {
        if (null == e(f.Wo)) return []
        let t = e(f.Kx, { enabled: !1 })
        if (t.isError && null == t.data) return []
        let n = j(e(r.a, { enabled: !1 }).data, t.data?.settings)
        return [
          {
            ...w.model,
            options: n.models.flatMap((e) => {
              let t = v(e)
              return "string" == typeof t ? [{ localizedText: t }] : []
            }),
          },
          { ...w.reasoning, options: n.thinkingEfforts.map(({ thinking_effort: e }) => d.h[l.QW[e]]) },
          w.approval,
          { ...w.speed, options: n.speeds.map(({ title: e }) => e) },
          w.sandbox,
          w.network,
          w.search,
        ]
      })
    function v(e) {
      return void 0 === e.modelTitle ? (e.selectedLabel ?? e.title) : e.modelTitle
    }
    function j(e, t) {
      let n = t?.model ?? e?.defaultModelSlug,
        a = (0, g.Ej)(n, null == n ? void 0 : e?.serviceTiersByModelSlug?.[n]).flatMap((e) => {
          let t = null == e.value ? "standard" : e.iconKind
          return null == t ? [] : [{ value: t, title: g.sN[`${t}Label`] }]
        })
      return {
        models: s()(
          [
            ...(e?.options ?? []),
            ...(e?.versionOptions?.flatMap((e) => e.options) ?? []),
            ...(e?.internalOptions ?? []),
          ],
          (e) => e.slug,
        ),
        thinkingEfforts: null == n ? [] : (e?.modelConfigBySlug?.[n]?.thinkingEfforts ?? []),
        speeds: a,
      }
    }
    n.d(t, {}, { GK: b, TK: j, ZB: v, j0: h, pR: w, xU: y, y4: x })
  },
  W9Ad(e, t, n) {
    n.d(t, { qg: () => h })
    let a = /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i
    class s extends Date {
      #e = !1
      #t = !1
      #n = null
      constructor(e) {
        let t = !0,
          n = !0,
          s = "Z"
        if ("string" == typeof e) {
          let i = e.match(a)
          i
            ? (i[1] || ((t = !1), (e = `0000-01-01T${e}`)),
              (n = !!i[2]) && " " === e[10] && (e = e.replace(" ", "T")),
              i[2] && +i[2] > 23 ? (e = "") : ((s = i[3] || null), (e = e.toUpperCase()), !s && n && (e += "Z")))
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
    class i extends Error {
      options
      line
      column
      codeblock
      constructor(e, t) {
        var n, a
        let s,
          [i, o] = ((n = t.toml), (a = t.ptr), [(s = n.slice(0, a).split(/\r\n|\n|\r/g)).length, s.pop().length + 1]),
          l = (function (e, t, n) {
            let a = e.split(/\r\n|\n|\r/g),
              s = "",
              i = (0 | Math.log10(t + 1)) + 1
            for (let e = t - 1; e <= t + 1; e++) {
              let o = a[e - 1]
              o &&
                ((s += e.toString().padEnd(i, " ")),
                (s += ":  "),
                (s += o),
                (s += "\n"),
                e === t && ((s += " ".repeat(i + n + 2)), (s += "^\n")))
            }
            return s
          })(t.toml, i, o)
        ;(super(
          `Invalid TOML document: ${e}

${l}`,
          t,
        ),
          (this.options = t),
          (this.line = i),
          (this.column = o),
          (this.codeblock = l))
      }
    }
    function o(e, t = 0) {
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
          throw new i("control characters are not allowed in comments", { toml: e.s, ptr: e.p })
      }
    }
    function r(e, t, n) {
      let a
      for (;;) {
        for (
          ;
          32 === (a = e.s.charCodeAt(e.p)) ||
          9 === a ||
          (!t && (10 === a || (13 === a && 10 === e.s.charCodeAt(e.p + 1))));
        )
          e.p++
        if (n || 35 !== a) break
        l(e)
      }
    }
    let d = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,
      c = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,
      u = /^[+-]?0[0-9_]/
    function g(e) {
      let t = e.p,
        n = e.s.charCodeAt(e.p++),
        a = n,
        s = 39 === n,
        o = n === e.s.charCodeAt(e.p) && n === e.s.charCodeAt(e.p + 1)
      o && (10 === (n = e.s.charCodeAt((e.p += 2))) ? e.p++ : 13 === n && 10 === e.s.charCodeAt(e.p + 1) && (e.p += 2))
      let l = "",
        r = e.p,
        d = 0
      for (; e.p < e.s.length; e.p++)
        if (((n = e.s.charCodeAt(e.p)), o && (10 === n || (13 === n && 10 === e.s.charCodeAt(e.p + 1))))) d = d && 3
        else if ((n < 32 && 9 !== n) || 127 === n)
          throw new i("control characters are not allowed in strings", { toml: e.s, ptr: e.p })
        else if ((!d || 3 === d) && n === a && (!o || (e.s.charCodeAt(e.p + 1) === a && e.s.charCodeAt(e.p + 2) === a)))
          return (
            o && (e.s.charCodeAt(e.p + 3) === a && e.p++, e.s.charCodeAt(e.p + 3) === a && e.p++),
            d || (l += e.s.slice(r, e.p)),
            (e.p += o ? 3 : 1),
            l
          )
        else if (d) {
          if (1 === d)
            if (120 === n || 117 === n || 85 === n) {
              let t = 0,
                a = 120 === n ? 2 : 117 === n ? 4 : 8
              for (let n = 0; n < a; n++, e.p++) {
                let n = e.s.charCodeAt(e.p + 1),
                  a =
                    n >= 48 && n <= 57
                      ? n - 48
                      : n >= 65 && n <= 70
                        ? n - 65 + 10
                        : n >= 97 && n <= 102
                          ? n - 97 + 10
                          : -1
                if (a < 0) throw new i("invalid non-hex character in unicode escape", { toml: e.s, ptr: e.p + 1 })
                t = (t << 4) | a
              }
              if (t < 0 || t > 1114111 || (t >= 55296 && t <= 57343))
                throw new i("invalid unicode escape", { toml: e.s, ptr: e.p })
              ;((l += String.fromCodePoint(t)), (r = e.p + 1), (d = 0))
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
              else throw new i("unrecognized escape sequence", { toml: e.s, ptr: e.p })
              ;((r = e.p + 1), (d = 0))
            }
          else if (32 !== n && 9 !== n) {
            if (2 === d)
              throw new i("invalid escape: only line-ending whitespace may be escaped", { toml: e.s, ptr: r })
            ;((d = +(!s && 92 === n)), (r = e.p))
          }
        } else s || 92 !== n || ((l += e.s.slice(r, (r = e.p))), (d = 1))
      throw new i("unfinished string", { toml: e.s, ptr: t })
    }
    let p = /^[a-zA-Z0-9-_]+[ \t]*$/
    function f(e, t = "=") {
      let n = e.p,
        a = n - 1,
        s = [],
        l = e.s.indexOf(t, n)
      if (l < 0) throw new i("incomplete key-value: cannot find end of key", { toml: e.s, ptr: n })
      do {
        let r = e.s.charCodeAt((e.p = ++a))
        if (32 !== r && 9 !== r)
          if (34 === r || 39 === r) {
            if (r === e.s.charCodeAt(e.p + 1) && r === e.s.charCodeAt(e.p + 2))
              throw new i("multiline strings are not allowed in keys", { toml: e.s, ptr: e.p })
            let d = g(e)
            a = e.s.indexOf(".", e.p)
            let c = e.s.slice(e.p, a < 0 || a > l ? l : a),
              u = o(c)
            if (u > -1) throw new i("newlines are not allowed in keys", { toml: e.s, ptr: u })
            if (c.trimStart()) throw new i("found extra tokens after the string part", { toml: e.s, ptr: e.p })
            if (l < e.p && (l = e.s.indexOf(t, e.p)) < 0)
              throw new i("incomplete key-value: cannot find end of key", { toml: e.s, ptr: n })
            s.push(d)
          } else {
            a = e.s.indexOf(".", e.p)
            let t = e.s.slice(e.p, a < 0 || a > l ? l : a)
            if (!p.test(t))
              throw new i("only letter, numbers, dashes and underscores are allowed in keys", { toml: e.s, ptr: e.p })
            s.push(t.trimEnd())
          }
      } while (a + 1 && a < l)
      return ((e.p = l + 1), r(e, !0, !0), s)
    }
    function m(e, t, n, a) {
      let s,
        i,
        o = t,
        l = n,
        r = !1
      for (let t = 0; t < e.length; t++) {
        if (t) {
          if (((o = r ? o[s] : (o[s] = {})), (l = (i = l[s]).c), 0 === a && (1 === i.t || 2 === i.t))) return null
          if (2 === i.t) {
            let e = o.length - 1
            ;((o = o[e]), (l = l[e].c))
          }
        }
        if ((r = Object.hasOwn(o, (s = e[t]))) && l[s]?.t === 0 && l[s]?.d) return null
        r ||
          ("__proto__" === s &&
            (Object.defineProperty(o, s, { enumerable: !0, configurable: !0, writable: !0 }),
            Object.defineProperty(l, s, { enumerable: !0, configurable: !0, writable: !0 })),
          (l[s] = { t: t < e.length - 1 && 2 === a ? 3 : a, d: !1, i: 0, c: {} }))
      }
      if (
        ((i = l[s]).t !== a && (1 !== a || 3 !== i.t)) ||
        (2 === a &&
          (i.d || ((i.d = !0), (o[s] = [])), o[s].push((o = {})), (i.c[i.i++] = i = { t: 1, d: !1, i: 0, c: {} })),
        i.d)
      )
        return null
      if (((i.d = !0), 1 === a)) o = r ? o[s] : (o[s] = {})
      else if (0 === a && r) return null
      return [s, o, i.c]
    }
    function h(e, { maxDepth: t = 1e3, integersAsBigInt: n } = {}) {
      let a,
        p = { s: e, p: 0, d: t },
        x = {},
        b = {},
        w = x,
        y = b
      for (r(p); p.p < e.length;) {
        if (91 === e.charCodeAt(p.p)) {
          let t = 91 === e.charCodeAt(++p.p)
          a = p.p += +t
          let n = f(p, "]")
          if (t) {
            if (93 !== e.charCodeAt(p.p - 1))
              throw new i("expected end of table declaration", { toml: e, ptr: p.p - 1 })
            p.p++
          }
          let s = m(n, x, b, t ? 2 : 1)
          if (!s) throw new i("trying to redefine an already defined table or value", { toml: e, ptr: a })
          ;((y = s[2]), (w = s[1]))
        } else {
          a = p.p
          let t = m(f(p), w, y, 0)
          if (!t) throw new i("trying to redefine an already defined table or value", { toml: e, ptr: a })
          t[1][t[0]] = (function e(t, n, a) {
            let p = t.p,
              m = t.s.charCodeAt(p)
            if (91 === m || 123 === m) {
              if (!t.d--)
                throw new i("document contains excessively nested structures. aborting.", { toml: t.s, ptr: p })
              let n =
                91 === m
                  ? (function (t, n) {
                      let a,
                        s = []
                      for (t.p++; t.p < t.s.length;) {
                        if ((r(t), 93 === (a = t.s.charCodeAt(t.p)))) return (t.p++, s)
                        if ((s.push(e(t, 93, n)), r(t), 93 === (a = t.s.charCodeAt(t.p++)))) return s
                        if (44 !== a) throw new i("expected comma or end of structure", { toml: t.s, ptr: t.p - 1 })
                      }
                      throw new i("unfinished array encountered", { toml: t.s, ptr: t.p })
                    })(t, a)
                  : (function (t, n) {
                      let a,
                        s = {},
                        o = new Set()
                      for (t.p++; t.p < t.s.length;) {
                        let l
                        if ((r(t), 125 === (a = t.s.charCodeAt(t.p)))) return (t.p++, s)
                        let d = s,
                          c = !1,
                          u = t.p,
                          g = f(t)
                        for (let e = 0; e < g.length; e++) {
                          if (
                            (e && (d = c ? d[l] : (d[l] = {})),
                            (c = Object.hasOwn(d, (l = g[e]))) && ("object" != typeof d[l] || o.has(d[l])))
                          )
                            throw new i("trying to redefine an already defined value", { toml: t.s, ptr: u })
                          c ||
                            "__proto__" !== l ||
                            Object.defineProperty(d, l, { enumerable: !0, configurable: !0, writable: !0 })
                        }
                        if (c) throw new i("trying to redefine an already defined value", { toml: t.s, ptr: t.p })
                        let p = e(t, 125, n)
                        if ((o.add((d[l] = p)), r(t), 125 === (a = t.s.charCodeAt(t.p++)))) return s
                        if (44 !== a) throw new i("expected comma or end of structure", { toml: t.s, ptr: t.p - 1 })
                      }
                      throw new i("unfinished table encountered", { toml: t.s, ptr: t.p })
                    })(t, a)
              return (t.d++, n)
            }
            if (34 === m || 39 === m) return g(t)
            if (116 === m) {
              if (114 !== t.s.charCodeAt(++t.p) || 117 !== t.s.charCodeAt(++t.p) || 101 !== t.s.charCodeAt(++t.p))
                throw new i("invalid value", { toml: t.s, ptr: p })
              return (t.p++, !0)
            }
            if (102 === m) {
              if (
                97 !== t.s.charCodeAt(++t.p) ||
                108 !== t.s.charCodeAt(++t.p) ||
                115 !== t.s.charCodeAt(++t.p) ||
                101 !== t.s.charCodeAt(++t.p)
              )
                throw new i("invalid value", { toml: t.s, ptr: p })
              return (t.p++, !1)
            }
            return (function (e, t, n) {
              var a
              let r,
                g,
                p = e.p,
                f = { toml: e.s, ptr: p }
              !(function (e, t) {
                let n = e.p
                if (!t) {
                  ;((n = o(e.s, n)), (e.p = n < 0 ? e.s.length : n))
                  return
                }
                for (; e.p < e.s.length; e.p++) {
                  let n = e.s.charCodeAt(e.p)
                  if (35 === n) l(e)
                  else if (n === t || 44 === n) return
                }
                throw new i("cannot find end of structure", { toml: e.s, ptr: n })
              })(e, n)
              let m =
                ((a = e.p),
                (g = (r = e.s.slice(p, a)).indexOf("#")) > 0 && (l({ s: r, p: g, d: 0 }), (r = r.slice(0, g))),
                r.trimEnd())
              if (!m) throw new i("incomplete declaration: value expected", f)
              if ("-inf" === m) return -1 / 0
              if ("inf" === m || "+inf" === m) return 1 / 0
              if ("nan" === m || "+nan" === m || "-nan" === m) return 0 / 0
              if ("-0" === m) return t ? 0n : 0
              let h = d.test(m)
              if (h || c.test(m)) {
                if (u.test(m)) throw new i("leading zeroes are not allowed", f)
                let e = +(m = m.replace(/_/g, ""))
                if (isNaN(e)) throw new i("invalid number", f)
                if (h) {
                  if ((h = !Number.isSafeInteger(e)) && !t)
                    throw new i("integer value cannot be represented losslessly", f)
                  ;(h || !0 === t) && (e = BigInt(m))
                }
                return e
              }
              let x = new s(m)
              if (!x.isValid()) throw new i("invalid value", f)
              return x
            })(t, a, n)
          })(p, void 0, n)
        }
        if ((r(p, !0), p.p < e.length && 10 !== (a = e.charCodeAt(p.p)) && 13 !== a))
          throw new i("each key-value declaration must be followed by an end-of-line", { toml: e, ptr: p.p })
        r(p)
      }
      return x
    }
  },
}
//# sourceMappingURL=181649.e1acfb5048.js.map
