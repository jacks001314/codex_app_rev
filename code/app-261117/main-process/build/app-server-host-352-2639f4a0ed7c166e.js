"use strict"
;((exports.ids = [352]),
  (exports.modules = {
    36083(e, t, r) {
      let o, a, s, n, i
      r.d(t, { SshWebsocketV0Transport: () => id, resolveSshWebsocketV0TransportOptions: () => ig })
      var l,
        c,
        u,
        d,
        p,
        h = r(95398),
        m = r(78335),
        f = r(86697),
        g = r(26238),
        y = r(37418),
        v = r(85816),
        S = r(19229),
        _ = r(58027),
        b = r(70408),
        P = r(16310),
        $ = r.n(P),
        w = Object.create,
        R = Object.defineProperty,
        j = Object.getOwnPropertyDescriptor,
        k = Object.getOwnPropertyNames,
        E = Object.getPrototypeOf,
        I = Object.prototype.hasOwnProperty,
        C = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
        x = (e, t, r) => (
          (r = null != e ? w(E(e)) : {}),
          ((e, t, r) => {
            if ((t && "object" == typeof t) || "function" == typeof t)
              for (var o, a = k(t), s = 0, n = a.length; s < n; s++)
                ((o = a[s]),
                  I.call(e, o) ||
                    void 0 === o ||
                    R(e, o, { get: ((e) => t[e]).bind(null, o), enumerable: !(r = j(t, o)) || r.enumerable }))
            return e
          })(!t && e && e.__esModule ? r : R(r, "default", { value: e, enumerable: !0 }), e)
        )
      let q = new Set(["https://json-schema.org/draft/2020-12/schema", "http://json-schema.org/draft/2020-12/schema"]),
        T = new Set(["https://json-schema.org/draft/2019-09/schema", "http://json-schema.org/draft/2019-09/schema"]),
        Y = new Set(["https://json-schema.org/draft-07/schema", "http://json-schema.org/draft-07/schema"]),
        O = new Set(["https://json-schema.org/draft-06/schema", "http://json-schema.org/draft-06/schema"])
      var M = r(40893),
        N = r(95908)
      p || (p = {})
      var z = r(23065),
        A = r(69580)
      let L = "2025-11-25",
        H = [L, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"],
        D = "io.modelcontextprotocol/protocolVersion",
        V = "io.modelcontextprotocol/clientInfo",
        U = "io.modelcontextprotocol/serverInfo",
        K = "io.modelcontextprotocol/clientCapabilities",
        J = "io.modelcontextprotocol/logLevel",
        F = M.RZV(() => M.KCZ([M.YjP(), M.aig(), M.zMY(), M.chJ(), M.g1P(M.YjP(), F), M.YOg(F)])),
        G = M.g1P(M.YjP(), F),
        B = M.YOg(F),
        Z = M.KCZ([M.YjP(), M.aig().int()]),
        W = M.YjP(),
        X = M.Ikc({ ttl: M.aig().optional() }),
        Q = M.Ikc({ taskId: M.YjP() }),
        ee = M._H3({ progressToken: Z.optional(), "io.modelcontextprotocol/related-task": Q.optional() }),
        et = M.Ikc({ _meta: ee.optional() }),
        er = et.extend({ task: X.optional() }),
        eo = M.Ikc({ method: M.YjP(), params: et.loose().optional() }),
        ea = M.Ikc({ _meta: ee.optional() }),
        es = M.Ikc({ method: M.YjP(), params: ea.loose().optional() }),
        en = M._H3({
          get [U]() {
            return eb.optional().catch(void 0)
          },
        }),
        ei = M._H3({ _meta: en.optional() }),
        el = M.KCZ([M.YjP(), M.aig().int()]),
        ec = M.Ikc({ jsonrpc: M.euz("2.0"), id: el, ...eo.shape }).strict(),
        eu = M.Ikc({ jsonrpc: M.euz("2.0"), ...es.shape }).strict(),
        ed = M.Ikc({ jsonrpc: M.euz("2.0"), id: el, result: ei }).strict(),
        ep = M.Ikc({
          jsonrpc: M.euz("2.0"),
          id: el.optional(),
          error: M.Ikc({ code: M.aig().int(), message: M.YjP(), data: M.L5J().optional() }),
        }).strict(),
        eh = M.KCZ([ec, eu, ed, ep]),
        em = M.KCZ([ed, ep]),
        ef = ei.strict(),
        eg = ea.extend({ requestId: el.optional(), reason: M.YjP().optional() }),
        ey = es.extend({ method: M.euz("notifications/cancelled"), params: eg }),
        ev = M.Ikc({
          src: M.YjP(),
          mimeType: M.YjP().optional(),
          sizes: M.YOg(M.YjP()).optional(),
          theme: M.k5n(["light", "dark"]).optional(),
        }),
        eS = M.Ikc({ icons: M.YOg(ev).optional() }),
        e_ = M.Ikc({ name: M.YjP(), title: M.YjP().optional() }),
        eb = e_.extend({
          ...e_.shape,
          ...eS.shape,
          version: M.YjP(),
          websiteUrl: M.YjP().optional(),
          description: M.YjP().optional(),
        }),
        eP = M.E$q(M.Ikc({ applyDefaults: M.zMY().optional() }), G),
        e$ = M.vkY(
          (e) => (e && "object" == typeof e && !Array.isArray(e) && 0 === Object.keys(e).length ? { form: {} } : e),
          M.E$q(M.Ikc({ form: eP.optional(), url: G.optional() }), G.optional()),
        ),
        ew = M._H3({
          list: G.optional(),
          cancel: G.optional(),
          requests: M._H3({
            sampling: M._H3({ createMessage: G.optional() }).optional(),
            elicitation: M._H3({ create: G.optional() }).optional(),
          }).optional(),
        }),
        eR = M._H3({
          list: G.optional(),
          cancel: G.optional(),
          requests: M._H3({ tools: M._H3({ call: G.optional() }).optional() }).optional(),
        }),
        ej = M.Ikc({
          experimental: M.g1P(M.YjP(), G).optional(),
          sampling: M.Ikc({ context: G.optional(), tools: G.optional() }).optional(),
          elicitation: e$.optional(),
          roots: M.Ikc({ listChanged: M.zMY().optional() }).optional(),
          tasks: ew.optional(),
          extensions: M.g1P(M.YjP(), G).optional(),
        }),
        ek = et.extend({ protocolVersion: M.YjP(), capabilities: ej, clientInfo: eb }),
        eE = eo.extend({ method: M.euz("initialize"), params: ek }),
        eI = M.Ikc({
          experimental: M.g1P(M.YjP(), G).optional(),
          logging: G.optional(),
          completions: G.optional(),
          prompts: M.Ikc({ listChanged: M.zMY().optional() }).optional(),
          resources: M.Ikc({ subscribe: M.zMY().optional(), listChanged: M.zMY().optional() }).optional(),
          tools: M.Ikc({ listChanged: M.zMY().optional() }).optional(),
          tasks: eR.optional(),
          extensions: M.g1P(M.YjP(), G).optional(),
        }),
        eC = ei.extend({
          protocolVersion: M.YjP(),
          capabilities: eI,
          serverInfo: eb,
          instructions: M.YjP().optional(),
        }),
        ex = es.extend({ method: M.euz("notifications/initialized"), params: ea.optional() }),
        eq = eo.extend({ method: M.euz("server/discover"), params: et.optional() }),
        eT = ei.extend({ supportedVersions: M.YOg(M.YjP()), capabilities: eI, instructions: M.YjP().optional() }),
        eY = eo.extend({ method: M.euz("ping"), params: et.optional() }),
        eO = M.Ikc({ progress: M.aig(), total: M.lqM(M.aig()), message: M.lqM(M.YjP()) }),
        eM = M.Ikc({ ...ea.shape, ...eO.shape, progressToken: Z }),
        eN = es.extend({ method: M.euz("notifications/progress"), params: eM }),
        ez = et.extend({ cursor: W.optional() }),
        eA = eo.extend({ params: ez.optional() }),
        eL = ei.extend({ nextCursor: W.optional() }),
        eH = M.Ikc({ uri: M.YjP(), mimeType: M.lqM(M.YjP()), _meta: M.g1P(M.YjP(), M.L5J()).optional() }),
        eD = eH.extend({ text: M.YjP() }),
        eV = M.YjP().refine(
          (e) => {
            try {
              return (atob(e), !0)
            } catch {
              return !1
            }
          },
          { message: "Invalid Base64 string" },
        ),
        eU = eH.extend({ blob: eV }),
        eK = M.k5n(["user", "assistant"]),
        eJ = M.Ikc({
          audience: M.YOg(eK).optional(),
          priority: M.aig().min(0).max(1).optional(),
          lastModified: N.w$({ offset: !0 }).optional(),
        }),
        eF = M.Ikc({
          ...e_.shape,
          ...eS.shape,
          uri: M.YjP(),
          description: M.lqM(M.YjP()),
          mimeType: M.lqM(M.YjP()),
          size: M.lqM(M.aig()),
          annotations: eJ.optional(),
          _meta: M.lqM(M._H3({})),
        }),
        eG = M.Ikc({
          ...e_.shape,
          ...eS.shape,
          uriTemplate: M.YjP(),
          description: M.lqM(M.YjP()),
          mimeType: M.lqM(M.YjP()),
          annotations: eJ.optional(),
          _meta: M.lqM(M._H3({})),
        }),
        eB = eA.extend({ method: M.euz("resources/list") }),
        eZ = eL.extend({ resources: M.YOg(eF) }),
        eW = eA.extend({ method: M.euz("resources/templates/list") }),
        eX = eL.extend({ resourceTemplates: M.YOg(eG) }),
        eQ = et.extend({ uri: M.YjP() }),
        e0 = eo.extend({ method: M.euz("resources/read"), params: eQ }),
        e1 = ei.extend({ contents: M.YOg(M.KCZ([eD, eU])) }),
        e2 = es.extend({ method: M.euz("notifications/resources/list_changed"), params: ea.optional() }),
        e9 = eo.extend({ method: M.euz("resources/subscribe"), params: eQ }),
        e5 = eo.extend({ method: M.euz("resources/unsubscribe"), params: eQ }),
        e3 = M.Ikc({
          toolsListChanged: M.zMY().optional(),
          promptsListChanged: M.zMY().optional(),
          resourcesListChanged: M.zMY().optional(),
          resourceSubscriptions: M.YOg(M.YjP()).optional(),
        }),
        e4 = et.extend({ notifications: e3 }),
        e6 = eo.extend({ method: M.euz("subscriptions/listen"), params: e4 }),
        e8 = ea.extend({ notifications: e3 }),
        e7 = es.extend({ method: M.euz("notifications/subscriptions/acknowledged"), params: e8 }),
        te = en.extend({ "io.modelcontextprotocol/subscriptionId": el }),
        tt = ei.extend({ _meta: te }),
        tr = ea.extend({ uri: M.YjP() }),
        to = es.extend({ method: M.euz("notifications/resources/updated"), params: tr }),
        ta = M.Ikc({ name: M.YjP(), description: M.lqM(M.YjP()), required: M.lqM(M.zMY()) }),
        ts = M.Ikc({
          ...e_.shape,
          ...eS.shape,
          description: M.lqM(M.YjP()),
          arguments: M.lqM(M.YOg(ta)),
          _meta: M.lqM(M._H3({})),
        }),
        tn = eA.extend({ method: M.euz("prompts/list") }),
        ti = eL.extend({ prompts: M.YOg(ts) }),
        tl = et.extend({ name: M.YjP(), arguments: M.g1P(M.YjP(), M.YjP()).optional() }),
        tc = eo.extend({ method: M.euz("prompts/get"), params: tl }),
        tu = M.Ikc({
          type: M.euz("text"),
          text: M.YjP(),
          annotations: eJ.optional(),
          _meta: M.g1P(M.YjP(), M.L5J()).optional(),
        }),
        td = M.Ikc({
          type: M.euz("image"),
          data: eV,
          mimeType: M.YjP(),
          annotations: eJ.optional(),
          _meta: M.g1P(M.YjP(), M.L5J()).optional(),
        }),
        tp = M.Ikc({
          type: M.euz("audio"),
          data: eV,
          mimeType: M.YjP(),
          annotations: eJ.optional(),
          _meta: M.g1P(M.YjP(), M.L5J()).optional(),
        }),
        th = M.Ikc({
          type: M.euz("tool_use"),
          name: M.YjP(),
          id: M.YjP(),
          input: M.g1P(M.YjP(), M.L5J()),
          _meta: M.g1P(M.YjP(), M.L5J()).optional(),
        }),
        tm = M.Ikc({
          type: M.euz("resource"),
          resource: M.KCZ([eD, eU]),
          annotations: eJ.optional(),
          _meta: M.g1P(M.YjP(), M.L5J()).optional(),
        }),
        tf = eF.extend({ type: M.euz("resource_link") }),
        tg = M.KCZ([tu, td, tp, tf, tm]),
        ty = M.Ikc({ role: eK, content: tg }),
        tv = ei.extend({ description: M.YjP().optional(), messages: M.YOg(ty) }),
        tS = es.extend({ method: M.euz("notifications/prompts/list_changed"), params: ea.optional() }),
        t_ = M.Ikc({
          title: M.YjP().optional(),
          readOnlyHint: M.zMY().optional(),
          destructiveHint: M.zMY().optional(),
          idempotentHint: M.zMY().optional(),
          openWorldHint: M.zMY().optional(),
        }),
        tb = M.Ikc({ taskSupport: M.k5n(["required", "optional", "forbidden"]).optional() }),
        tP = M.Ikc({
          ...e_.shape,
          ...eS.shape,
          description: M.YjP().optional(),
          inputSchema: M.Ikc({
            type: M.euz("object"),
            properties: M.g1P(M.YjP(), F).optional(),
            required: M.YOg(M.YjP()).optional(),
          }).catchall(M.L5J()),
          outputSchema: M._H3({ $schema: M.YjP().optional() }).optional(),
          annotations: t_.optional(),
          execution: tb.optional(),
          _meta: M.g1P(M.YjP(), M.L5J()).optional(),
        }),
        t$ = eA.extend({ method: M.euz("tools/list") }),
        tw = eL.extend({ tools: M.YOg(tP) }),
        tR = ei.extend({
          content: M.YOg(tg).default([]),
          structuredContent: M.L5J().optional(),
          isError: M.zMY().optional(),
        }),
        tj = tR.or(ei.extend({ toolResult: M.L5J() })),
        tk = er.extend({ name: M.YjP(), arguments: M.g1P(M.YjP(), M.L5J()).optional() }),
        tE = eo.extend({ method: M.euz("tools/call"), params: tk }),
        tI = es.extend({ method: M.euz("notifications/tools/list_changed"), params: ea.optional() }),
        tC = M.Ikc({ autoRefresh: M.zMY().default(!0), debounceMs: M.aig().int().nonnegative().default(300) }),
        tx = M.k5n(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
        tq = et.extend({ level: tx }),
        tT = eo.extend({ method: M.euz("logging/setLevel"), params: tq }),
        tY = ea.extend({ level: tx, logger: M.YjP().optional(), data: M.L5J() }),
        tO = es.extend({ method: M.euz("notifications/message"), params: tY }),
        tM = M.Ikc({ name: M.YjP().optional() }),
        tN = M.Ikc({
          hints: M.YOg(tM).optional(),
          costPriority: M.aig().min(0).max(1).optional(),
          speedPriority: M.aig().min(0).max(1).optional(),
          intelligencePriority: M.aig().min(0).max(1).optional(),
        }),
        tz = M.Ikc({ mode: M.k5n(["auto", "required", "none"]).optional() }),
        tA = M.Ikc({
          type: M.euz("tool_result"),
          toolUseId: M.YjP().describe("The unique identifier for the corresponding tool call."),
          content: M.YOg(tg),
          structuredContent: M.L5J().optional(),
          isError: M.zMY().optional(),
          _meta: M.g1P(M.YjP(), M.L5J()).optional(),
        }),
        tL = M.gMt("type", [tu, td, tp]),
        tH = M.gMt("type", [tu, td, tp, th, tA]),
        tD = M.Ikc({ role: eK, content: M.KCZ([tH, M.YOg(tH)]), _meta: M.g1P(M.YjP(), M.L5J()).optional() }),
        tV = er.extend({
          messages: M.YOg(tD),
          modelPreferences: tN.optional(),
          systemPrompt: M.YjP().optional(),
          includeContext: M.k5n(["none", "thisServer", "allServers"]).optional(),
          temperature: M.aig().optional(),
          maxTokens: M.aig().int(),
          stopSequences: M.YOg(M.YjP()).optional(),
          metadata: G.optional(),
          tools: M.YOg(tP).optional(),
          toolChoice: tz.optional(),
        }),
        tU = eo.extend({ method: M.euz("sampling/createMessage"), params: tV }),
        tK = ei.extend({
          model: M.YjP(),
          stopReason: M.lqM(M.k5n(["endTurn", "stopSequence", "maxTokens"]).or(M.YjP())),
          role: eK,
          content: tL,
        }),
        tJ = ei.extend({
          model: M.YjP(),
          stopReason: M.lqM(M.k5n(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(M.YjP())),
          role: eK,
          content: M.KCZ([tH, M.YOg(tH)]),
        }),
        tF = M.Ikc({
          type: M.euz("boolean"),
          title: M.YjP().optional(),
          description: M.YjP().optional(),
          default: M.zMY().optional(),
        }),
        tG = M.Ikc({
          type: M.euz("string"),
          title: M.YjP().optional(),
          description: M.YjP().optional(),
          minLength: M.aig().optional(),
          maxLength: M.aig().optional(),
          format: M.k5n(["email", "uri", "date", "date-time"]).optional(),
          default: M.YjP().optional(),
        }),
        tB = M.Ikc({
          type: M.k5n(["number", "integer"]),
          title: M.YjP().optional(),
          description: M.YjP().optional(),
          minimum: M.aig().optional(),
          maximum: M.aig().optional(),
          default: M.aig().optional(),
        }),
        tZ = M.Ikc({
          type: M.euz("string"),
          title: M.YjP().optional(),
          description: M.YjP().optional(),
          enum: M.YOg(M.YjP()),
          default: M.YjP().optional(),
        }),
        tW = M.Ikc({
          type: M.euz("string"),
          title: M.YjP().optional(),
          description: M.YjP().optional(),
          oneOf: M.YOg(M.Ikc({ const: M.YjP(), title: M.YjP() })),
          default: M.YjP().optional(),
        }),
        tX = M.Ikc({
          type: M.euz("string"),
          title: M.YjP().optional(),
          description: M.YjP().optional(),
          enum: M.YOg(M.YjP()),
          enumNames: M.YOg(M.YjP()).optional(),
          default: M.YjP().optional(),
        }),
        tQ = M.KCZ([tZ, tW]),
        t0 = M.Ikc({
          type: M.euz("array"),
          title: M.YjP().optional(),
          description: M.YjP().optional(),
          minItems: M.aig().optional(),
          maxItems: M.aig().optional(),
          items: M.Ikc({ type: M.euz("string"), enum: M.YOg(M.YjP()) }),
          default: M.YOg(M.YjP()).optional(),
        }),
        t1 = M.Ikc({
          type: M.euz("array"),
          title: M.YjP().optional(),
          description: M.YjP().optional(),
          minItems: M.aig().optional(),
          maxItems: M.aig().optional(),
          items: M.Ikc({ anyOf: M.YOg(M.Ikc({ const: M.YjP(), title: M.YjP() })) }),
          default: M.YOg(M.YjP()).optional(),
        }),
        t2 = M.KCZ([t0, t1]),
        t9 = M.KCZ([tX, tQ, t2]),
        t5 = M.KCZ([t9, tF, tG, tB]),
        t3 = er.extend({
          mode: M.euz("form").optional(),
          message: M.YjP(),
          requestedSchema: M.Ikc({
            type: M.euz("object"),
            properties: M.g1P(M.YjP(), t5),
            required: M.YOg(M.YjP()).optional(),
          }).catchall(M.L5J()),
        }),
        t4 = er.extend({ mode: M.euz("url"), message: M.YjP(), elicitationId: M.YjP(), url: M.YjP().url() }),
        t6 = M.KCZ([t3, t4]),
        t8 = eo.extend({ method: M.euz("elicitation/create"), params: t6 }),
        t7 = ea.extend({ elicitationId: M.YjP() }),
        re = es.extend({ method: M.euz("notifications/elicitation/complete"), params: t7 }),
        rt = ei.extend({
          action: M.k5n(["accept", "decline", "cancel"]),
          content: M.vkY(
            (e) => (null === e ? void 0 : e),
            M.g1P(M.YjP(), M.KCZ([M.YjP(), M.aig(), M.zMY(), M.YOg(M.YjP())])).optional(),
          ),
        }),
        rr = M.Ikc({ type: M.euz("ref/resource"), uri: M.YjP() }),
        ro = M.Ikc({ type: M.euz("ref/prompt"), name: M.YjP() }),
        ra = et.extend({
          ref: M.KCZ([ro, rr]),
          argument: M.Ikc({ name: M.YjP(), value: M.YjP() }),
          context: M.Ikc({ arguments: M.g1P(M.YjP(), M.YjP()).optional() }).optional(),
        }),
        rs = eo.extend({ method: M.euz("completion/complete"), params: ra }),
        rn = ei.extend({
          completion: M._H3({ values: M.YOg(M.YjP()).max(100), total: M.lqM(M.aig().int()), hasMore: M.lqM(M.zMY()) }),
        }),
        ri = M.Ikc({
          uri: M.YjP().startsWith("file://"),
          name: M.YjP().optional(),
          _meta: M.g1P(M.YjP(), M.L5J()).optional(),
        }),
        rl = eo.extend({ method: M.euz("roots/list"), params: et.optional() }),
        rc = ei.extend({ roots: M.YOg(ri) }),
        ru = es.extend({ method: M.euz("notifications/roots/list_changed"), params: ea.optional() }),
        rd = M._H3({ ttl: M.aig().optional(), pollInterval: M.aig().optional() }),
        rp = M.k5n(["working", "input_required", "completed", "failed", "cancelled"]),
        rh = M.Ikc({
          taskId: M.YjP(),
          status: rp,
          ttl: M.KCZ([M.aig(), M.chJ()]),
          createdAt: M.YjP(),
          lastUpdatedAt: M.YjP(),
          pollInterval: M.lqM(M.aig()),
          statusMessage: M.lqM(M.YjP()),
        }),
        rm = ei.extend({ task: rh }),
        rf = ea.merge(rh),
        rg = es.extend({ method: M.euz("notifications/tasks/status"), params: rf }),
        ry = eo.extend({ method: M.euz("tasks/get"), params: et.extend({ taskId: M.YjP() }) }),
        rv = ei.merge(rh),
        rS = eo.extend({ method: M.euz("tasks/result"), params: et.extend({ taskId: M.YjP() }) }),
        r_ = ei.loose(),
        rb = eA.extend({ method: M.euz("tasks/list") }),
        rP = eL.extend({ tasks: M.YOg(rh) }),
        r$ = eo.extend({ method: M.euz("tasks/cancel"), params: et.extend({ taskId: M.YjP() }) }),
        rw = ei.merge(rh),
        rR = M.KCZ([eY, eE, eq, rs, tT, tc, tn, eB, eW, e0, e9, e5, e6, tE, t$]),
        rj = M.KCZ([ey, eN, ex, ru]),
        rk = M.KCZ([ef, tK, tJ, rt, rc]),
        rE = M.KCZ([eY, tU, t8, rl]),
        rI = M.KCZ([ey, eN, tO, to, e2, tI, tS, e7, re]),
        rC = M.KCZ([ef, eC, eT, rn, tv, ti, eZ, eX, e1, tR, tw, tt]),
        rx = M.OZ5()
          .superRefine((e, t) => {
            if (!URL.canParse(e))
              return (t.addIssue({ code: "custom", message: "URL must be parseable", fatal: !0 }), z.tm)
          })
          .refine(
            (e) => {
              let t = new URL(e)
              return "javascript:" !== t.protocol && "data:" !== t.protocol && "vbscript:" !== t.protocol
            },
            { message: "URL cannot use javascript:, data:, or vbscript: scheme" },
          ),
        rq = M._H3({
          resource: M.YjP().url(),
          authorization_servers: M.YOg(rx).optional(),
          jwks_uri: M.YjP().url().optional(),
          scopes_supported: M.YOg(M.YjP()).optional(),
          bearer_methods_supported: M.YOg(M.YjP()).optional(),
          resource_signing_alg_values_supported: M.YOg(M.YjP()).optional(),
          resource_name: M.YjP().optional(),
          resource_documentation: M.YjP().optional(),
          resource_policy_uri: M.YjP().url().optional(),
          resource_tos_uri: M.YjP().url().optional(),
          tls_client_certificate_bound_access_tokens: M.zMY().optional(),
          authorization_details_types_supported: M.YOg(M.YjP()).optional(),
          dpop_signing_alg_values_supported: M.YOg(M.YjP()).optional(),
          dpop_bound_access_tokens_required: M.zMY().optional(),
        }),
        rT = M._H3({
          issuer: M.YjP(),
          authorization_endpoint: rx,
          token_endpoint: rx,
          registration_endpoint: rx.optional(),
          scopes_supported: M.YOg(M.YjP()).optional(),
          response_types_supported: M.YOg(M.YjP()),
          response_modes_supported: M.YOg(M.YjP()).optional(),
          grant_types_supported: M.YOg(M.YjP()).optional(),
          token_endpoint_auth_methods_supported: M.YOg(M.YjP()).optional(),
          token_endpoint_auth_signing_alg_values_supported: M.YOg(M.YjP()).optional(),
          service_documentation: rx.optional(),
          revocation_endpoint: rx.optional(),
          revocation_endpoint_auth_methods_supported: M.YOg(M.YjP()).optional(),
          revocation_endpoint_auth_signing_alg_values_supported: M.YOg(M.YjP()).optional(),
          introspection_endpoint: M.YjP().optional(),
          introspection_endpoint_auth_methods_supported: M.YOg(M.YjP()).optional(),
          introspection_endpoint_auth_signing_alg_values_supported: M.YOg(M.YjP()).optional(),
          code_challenge_methods_supported: M.YOg(M.YjP()).optional(),
          client_id_metadata_document_supported: M.zMY().optional(),
          authorization_response_iss_parameter_supported: M.zMY()
            .optional()
            .catch(void 0),
          dpop_signing_alg_values_supported: M.YOg(M.YjP()).optional(),
        }),
        rY = M._H3({
          issuer: M.YjP(),
          authorization_endpoint: rx,
          token_endpoint: rx,
          userinfo_endpoint: rx.optional(),
          jwks_uri: rx,
          registration_endpoint: rx.optional(),
          scopes_supported: M.YOg(M.YjP()).optional(),
          response_types_supported: M.YOg(M.YjP()),
          response_modes_supported: M.YOg(M.YjP()).optional(),
          grant_types_supported: M.YOg(M.YjP()).optional(),
          acr_values_supported: M.YOg(M.YjP()).optional(),
          subject_types_supported: M.YOg(M.YjP()),
          id_token_signing_alg_values_supported: M.YOg(M.YjP()),
          id_token_encryption_alg_values_supported: M.YOg(M.YjP()).optional(),
          id_token_encryption_enc_values_supported: M.YOg(M.YjP()).optional(),
          userinfo_signing_alg_values_supported: M.YOg(M.YjP()).optional(),
          userinfo_encryption_alg_values_supported: M.YOg(M.YjP()).optional(),
          userinfo_encryption_enc_values_supported: M.YOg(M.YjP()).optional(),
          request_object_signing_alg_values_supported: M.YOg(M.YjP()).optional(),
          request_object_encryption_alg_values_supported: M.YOg(M.YjP()).optional(),
          request_object_encryption_enc_values_supported: M.YOg(M.YjP()).optional(),
          token_endpoint_auth_methods_supported: M.YOg(M.YjP()).optional(),
          token_endpoint_auth_signing_alg_values_supported: M.YOg(M.YjP()).optional(),
          display_values_supported: M.YOg(M.YjP()).optional(),
          claim_types_supported: M.YOg(M.YjP()).optional(),
          claims_supported: M.YOg(M.YjP()).optional(),
          service_documentation: M.YjP().optional(),
          claims_locales_supported: M.YOg(M.YjP()).optional(),
          ui_locales_supported: M.YOg(M.YjP()).optional(),
          claims_parameter_supported: M.zMY().optional(),
          request_parameter_supported: M.zMY().optional(),
          request_uri_parameter_supported: M.zMY().optional(),
          require_request_uri_registration: M.zMY().optional(),
          op_policy_uri: rx.optional(),
          op_tos_uri: rx.optional(),
          client_id_metadata_document_supported: M.zMY().optional(),
          authorization_response_iss_parameter_supported: M.zMY()
            .optional()
            .catch(void 0),
        }),
        rO = M.Ikc({ ...rY.shape, ...rT.pick({ code_challenge_methods_supported: !0 }).shape }),
        rM = M.Ikc({
          access_token: M.YjP(),
          id_token: M.YjP().optional(),
          token_type: M.YjP(),
          expires_in: A.qG(M.rSt, void 0).optional(),
          scope: M.YjP().optional(),
          refresh_token: M.YjP().optional(),
          issuer: M.YjP()
            .optional()
            .catch(void 0),
        }).strip(),
        rN = M.Ikc({
          issued_token_type: M.euz("urn:ietf:params:oauth:token-type:id-jag"),
          access_token: M.YjP(),
          token_type: M.YjP().optional(),
          expires_in: M.aig().optional(),
          scope: M.YjP().optional(),
        }).strip(),
        rz = M.Ikc({ error: M.YjP(), error_description: M.YjP().optional(), error_uri: M.YjP().optional() }),
        rA = rx.optional().or(M.euz("").transform(() => void 0)),
        rL = M.Ikc({
          redirect_uris: M.YOg(rx),
          token_endpoint_auth_method: M.YjP().optional(),
          grant_types: M.YOg(M.YjP()).optional(),
          response_types: M.YOg(M.YjP()).optional(),
          application_type: M.YjP().optional(),
          client_name: M.YjP().optional(),
          client_uri: rx.optional(),
          logo_uri: rA,
          scope: M.YjP().optional(),
          contacts: M.YOg(M.YjP()).optional(),
          tos_uri: rA,
          policy_uri: M.YjP().optional(),
          jwks_uri: rx.optional(),
          jwks: M.bzn().optional(),
          software_id: M.YjP().optional(),
          software_version: M.YjP().optional(),
          software_statement: M.YjP().optional(),
        }).strip(),
        rH = M.Ikc({
          client_id: M.YjP(),
          client_secret: M.YjP().optional(),
          client_id_issued_at: M.aig().optional(),
          client_secret_expires_at: M.aig().optional(),
          issuer: M.YjP()
            .optional()
            .catch(void 0),
        }).strip(),
        rD = rL.merge(rH),
        rV = M.Ikc({ error: M.YjP(), error_description: M.YjP().optional() }).strip(),
        rU = M.Ikc({ token: M.YjP(), token_type_hint: M.YjP().optional() }).strip()
      var rK = r(35983),
        rJ = r(69150)
      let rF = Symbol.for("mcp.sdk.errorBrands")
      function rG(e, t) {
        let r = new Set(),
          o = t
        for (; "function" == typeof o;) {
          let e = o.mcpBrand
          ;(Object.prototype.hasOwnProperty.call(o, "mcpBrand") && "string" == typeof e && r.add(e),
            (o = Object.getPrototypeOf(o)))
        }
        0 !== r.size && Object.defineProperty(e, rF, { value: r, enumerable: !1, configurable: !0 })
      }
      function rB(e, t) {
        try {
          if (
            "object" == typeof t &&
            null !== t &&
            Object.prototype.hasOwnProperty.call(e, "mcpBrand") &&
            "string" == typeof e.mcpBrand &&
            Object.prototype.hasOwnProperty.call(t, rF)
          ) {
            let r = t[rF]
            if (r && "function" == typeof r.has && r.has(e.mcpBrand)) return !0
          }
        } catch {}
        return Function.prototype[Symbol.hasInstance].call(e, t)
      }
      let rZ =
        (((l = {}).InvalidRequest = "invalid_request"),
        (l.InvalidClient = "invalid_client"),
        (l.InvalidGrant = "invalid_grant"),
        (l.UnauthorizedClient = "unauthorized_client"),
        (l.UnsupportedGrantType = "unsupported_grant_type"),
        (l.InvalidScope = "invalid_scope"),
        (l.AccessDenied = "access_denied"),
        (l.ServerError = "server_error"),
        (l.TemporarilyUnavailable = "temporarily_unavailable"),
        (l.UnsupportedResponseType = "unsupported_response_type"),
        (l.UnsupportedTokenType = "unsupported_token_type"),
        (l.InvalidToken = "invalid_token"),
        (l.MethodNotAllowed = "method_not_allowed"),
        (l.TooManyRequests = "too_many_requests"),
        (l.InvalidClientMetadata = "invalid_client_metadata"),
        (l.InvalidRedirectUri = "invalid_redirect_uri"),
        (l.InsufficientScope = "insufficient_scope"),
        (l.InvalidTarget = "invalid_target"),
        (l.InvalidDpopProof = "invalid_dpop_proof"),
        (l.UseDpopNonce = "use_dpop_nonce"),
        l)
      var rW = class e extends Error {
        static {
          Object.defineProperty(this, "mcpBrand", { value: "mcp.OAuthError" })
        }
        static [Symbol.hasInstance](e) {
          return rB(this, e)
        }
        static isInstance(e) {
          if ("function" != typeof this)
            throw TypeError(
              "isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`",
            )
          return rB(this, e)
        }
        constructor(e, t, r) {
          ;(super(t), (this.code = e), (this.errorUri = r), (this.name = "OAuthError"), rG(this, new.target))
        }
        toResponseObject() {
          let e = { error: this.code, error_description: this.message }
          return (this.errorUri && (e.error_uri = this.errorUri), e)
        }
        static fromResponse(t) {
          return new e(t.error, t.error_description ?? t.error, t.error_uri)
        }
      }
      let rX =
        (((c = {}).NotConnected = "NOT_CONNECTED"),
        (c.AlreadyConnected = "ALREADY_CONNECTED"),
        (c.NotInitialized = "NOT_INITIALIZED"),
        (c.CapabilityNotSupported = "CAPABILITY_NOT_SUPPORTED"),
        (c.RequestTimeout = "REQUEST_TIMEOUT"),
        (c.ConnectionClosed = "CONNECTION_CLOSED"),
        (c.SendFailed = "SEND_FAILED"),
        (c.InvalidResult = "INVALID_RESULT"),
        (c.UnsupportedResultType = "UNSUPPORTED_RESULT_TYPE"),
        (c.InputRequiredRoundsExceeded = "INPUT_REQUIRED_ROUNDS_EXCEEDED"),
        (c.ListPaginationExceeded = "LIST_PAGINATION_EXCEEDED"),
        (c.MethodNotSupportedByProtocolVersion = "METHOD_NOT_SUPPORTED_BY_PROTOCOL_VERSION"),
        (c.EraNegotiationFailed = "ERA_NEGOTIATION_FAILED"),
        (c.ClientHttpNotImplemented = "CLIENT_HTTP_NOT_IMPLEMENTED"),
        (c.ClientHttpAuthentication = "CLIENT_HTTP_AUTHENTICATION"),
        (c.ClientHttpForbidden = "CLIENT_HTTP_FORBIDDEN"),
        (c.ClientHttpUnexpectedContent = "CLIENT_HTTP_UNEXPECTED_CONTENT"),
        (c.ClientHttpFailedToOpenStream = "CLIENT_HTTP_FAILED_TO_OPEN_STREAM"),
        (c.ClientHttpFailedToTerminateSession = "CLIENT_HTTP_FAILED_TO_TERMINATE_SESSION"),
        c)
      var rQ = class extends Error {
        static {
          Object.defineProperty(this, "mcpBrand", { value: "mcp.SdkError" })
        }
        static [Symbol.hasInstance](e) {
          return rB(this, e)
        }
        static isInstance(e) {
          if ("function" != typeof this)
            throw TypeError(
              "isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`",
            )
          return rB(this, e)
        }
        constructor(e, t, r, o) {
          ;(super(t, o), (this.code = e), (this.data = r), (this.name = "SdkError"), rG(this, new.target))
        }
      }
      function r0(e) {
        return null !== e && "object" == typeof e && !Array.isArray(e)
      }
      function r1(e, t) {
        let r = {}
        for (let [o, a] of Object.entries(e)) {
          if (void 0 === a) continue
          let e = void 0 === t ? void 0 : t[o]
          if (void 0 === e) {
            r[o] = a
            continue
          }
          if (r0(a) && r0(e)) {
            let t = {}
            for (let [r, s] of Object.entries(a))
              void 0 !== s &&
                void 0 === e[r] &&
                ("elicitation" !== o || "form" !== r || void 0 !== e.form || void 0 !== e.url) &&
                (t[r] = s)
            Object.keys(t).length > 0 && (r[o] = t)
          }
        }
        return Object.keys(r).length > 0 ? r : void 0
      }
      function r2(e) {
        return e >= "2026-07-28"
      }
      function r9(e) {
        return e.filter((e) => r2(e))
      }
      function r5(e) {
        let t = e.structuredContent
        return void 0 === t ||
          !("object" != typeof t || null === t || Array.isArray(t)) ||
          e.content?.some((e) => "text" === e.type)
          ? e
          : { ...e, content: [...(e.content ?? []), { type: "text", text: JSON.stringify(t) }] }
      }
      ;(class extends rQ {
        static {
          Object.defineProperty(this, "mcpBrand", { value: "mcp.SdkHttpError" })
        }
        constructor(e, t, r, o) {
          ;(super(e, t, r, o), (this.name = "SdkHttpError"))
        }
        get status() {
          return this.data.status
        }
        get statusText() {
          return this.data.statusText
        }
      })
      let r3 = ["task", "inputRequests", "requestState"]
      function r4(e) {
        return null === e || "object" != typeof e || Array.isArray(e) || void 0 !== e.content || r3.some((t) => t in e)
          ? e
          : { ...e, content: [] }
      }
      function r6() {
        let e,
          t,
          r,
          a,
          s,
          n,
          i,
          l,
          c,
          u,
          d,
          p,
          h,
          m,
          f,
          g,
          y,
          v,
          S,
          _,
          b,
          P,
          $,
          w,
          R,
          j,
          k,
          E,
          I,
          C,
          x,
          q,
          T,
          Y,
          O,
          z,
          A,
          L,
          H,
          D,
          V,
          U,
          K,
          J,
          F,
          G,
          B,
          Z,
          W,
          X,
          Q,
          ee,
          et,
          er,
          eo,
          ea,
          es,
          en,
          ei,
          el,
          ec,
          eu,
          ed,
          ep,
          eh,
          em,
          ef,
          eg,
          ey,
          ev,
          eS,
          e_,
          eb,
          eP,
          e$,
          ew,
          eR,
          ej,
          ek,
          eE,
          eI,
          eC,
          ex,
          eq,
          eT,
          eY,
          eO,
          eM,
          eN,
          ez,
          eA,
          eL,
          eH,
          eD,
          eV,
          eU,
          eK,
          eJ,
          eF,
          eG,
          eB,
          eZ,
          eW,
          eX,
          eQ,
          e0,
          e1,
          e2,
          e9,
          e5,
          e3,
          e4,
          e6,
          e8,
          e7,
          te,
          tt,
          tr,
          to,
          ta,
          ts,
          tn,
          ti,
          tl,
          tc,
          tu,
          td,
          tp,
          th,
          tm,
          tf,
          tg,
          ty,
          tv,
          tS,
          t_,
          tb,
          tP,
          t$,
          tw
        return (o ??=
          ((e = M.RZV(() => M.KCZ([M.YjP(), M.aig(), M.zMY(), M.chJ(), M.g1P(M.YjP(), e), M.YOg(e)]))),
          (t = M.g1P(M.YjP(), e)),
          (r = M.KCZ([M.YjP(), M.aig().int()])),
          (a = M.YjP()),
          (s = M.Ikc({ ttl: M.aig().optional() })),
          (n = M.Ikc({ taskId: M.YjP() })),
          (i = M._H3({ progressToken: r.optional(), "io.modelcontextprotocol/related-task": n.optional() })),
          (c = (l = M.Ikc({ _meta: i.optional() })).extend({ task: s.optional() })),
          (u = M.Ikc({ method: M.YjP(), params: l.loose().optional() })),
          (d = M.Ikc({ _meta: i.optional() })),
          (p = M.Ikc({ method: M.YjP(), params: d.loose().optional() })),
          (h = M._H3({ _meta: i.optional() })),
          (m = M.KCZ([M.YjP(), M.aig().int()])),
          (f = h.strict()),
          (g = d.extend({ requestId: m.optional(), reason: M.YjP().optional() })),
          (y = p.extend({ method: M.euz("notifications/cancelled"), params: g })),
          (v = M.Ikc({
            src: M.YjP(),
            mimeType: M.YjP().optional(),
            sizes: M.YOg(M.YjP()).optional(),
            theme: M.k5n(["light", "dark"]).optional(),
          })),
          (S = M.Ikc({ icons: M.YOg(v).optional() })),
          (b = (_ = M.Ikc({ name: M.YjP(), title: M.YjP().optional() })).extend({
            ..._.shape,
            ...S.shape,
            version: M.YjP(),
            websiteUrl: M.YjP().optional(),
            description: M.YjP().optional(),
          })),
          (P = M.E$q(M.Ikc({ applyDefaults: M.zMY().optional() }), t)),
          ($ = M.vkY(
            (e) => (e && "object" == typeof e && !Array.isArray(e) && 0 === Object.keys(e).length ? { form: {} } : e),
            M.E$q(M.Ikc({ form: P.optional(), url: t.optional() }), t.optional()),
          )),
          (w = M._H3({
            list: t.optional(),
            cancel: t.optional(),
            requests: M._H3({
              sampling: M._H3({ createMessage: t.optional() }).optional(),
              elicitation: M._H3({ create: t.optional() }).optional(),
            }).optional(),
          })),
          (R = M._H3({
            list: t.optional(),
            cancel: t.optional(),
            requests: M._H3({ tools: M._H3({ call: t.optional() }).optional() }).optional(),
          })),
          (j = M.Ikc({
            experimental: M.g1P(M.YjP(), t).optional(),
            sampling: M.Ikc({ context: t.optional(), tools: t.optional() }).optional(),
            elicitation: $.optional(),
            roots: M.Ikc({ listChanged: M.zMY().optional() }).optional(),
            tasks: w.optional(),
            extensions: M.g1P(M.YjP(), t).optional(),
          })),
          (k = l.extend({ protocolVersion: M.YjP(), capabilities: j, clientInfo: b })),
          (E = u.extend({ method: M.euz("initialize"), params: k })),
          (I = M.Ikc({
            experimental: M.g1P(M.YjP(), t).optional(),
            logging: t.optional(),
            completions: t.optional(),
            prompts: M.Ikc({ listChanged: M.zMY().optional() }).optional(),
            resources: M.Ikc({ subscribe: M.zMY().optional(), listChanged: M.zMY().optional() }).optional(),
            tools: M.Ikc({ listChanged: M.zMY().optional() }).optional(),
            tasks: R.optional(),
            extensions: M.g1P(M.YjP(), t).optional(),
          })),
          (C = h.extend({
            protocolVersion: M.YjP(),
            capabilities: I,
            serverInfo: b,
            instructions: M.YjP().optional(),
          })),
          (x = p.extend({ method: M.euz("notifications/initialized"), params: d.optional() })),
          (q = u.extend({ method: M.euz("ping"), params: l.optional() })),
          (T = M.Ikc({ progress: M.aig(), total: M.lqM(M.aig()), message: M.lqM(M.YjP()) })),
          (Y = M.Ikc({ ...d.shape, ...T.shape, progressToken: r })),
          (O = p.extend({ method: M.euz("notifications/progress"), params: Y })),
          (z = l.extend({ cursor: a.optional() })),
          (A = u.extend({ params: z.optional() })),
          (L = h.extend({ nextCursor: a.optional() })),
          (D = (H = M.Ikc({
            uri: M.YjP(),
            mimeType: M.lqM(M.YjP()),
            _meta: M.g1P(M.YjP(), M.L5J()).optional(),
          })).extend({ text: M.YjP() })),
          (V = M.YjP().refine(
            (e) => {
              try {
                return (atob(e), !0)
              } catch {
                return !1
              }
            },
            { message: "Invalid Base64 string" },
          )),
          (U = H.extend({ blob: V })),
          (K = M.k5n(["user", "assistant"])),
          (J = M.Ikc({
            audience: M.YOg(K).optional(),
            priority: M.aig().min(0).max(1).optional(),
            lastModified: N.w$({ offset: !0 }).optional(),
          })),
          (F = M.Ikc({
            ..._.shape,
            ...S.shape,
            uri: M.YjP(),
            description: M.lqM(M.YjP()),
            mimeType: M.lqM(M.YjP()),
            size: M.lqM(M.aig()),
            annotations: J.optional(),
            _meta: M.lqM(M._H3({})),
          })),
          (G = M.Ikc({
            ..._.shape,
            ...S.shape,
            uriTemplate: M.YjP(),
            description: M.lqM(M.YjP()),
            mimeType: M.lqM(M.YjP()),
            annotations: J.optional(),
            _meta: M.lqM(M._H3({})),
          })),
          (B = A.extend({ method: M.euz("resources/list") })),
          (Z = L.extend({ resources: M.YOg(F) })),
          (W = A.extend({ method: M.euz("resources/templates/list") })),
          (X = L.extend({ resourceTemplates: M.YOg(G) })),
          (Q = l.extend({ uri: M.YjP() })),
          (ee = u.extend({ method: M.euz("resources/read"), params: Q })),
          (et = h.extend({ contents: M.YOg(M.KCZ([D, U])) })),
          (er = p.extend({ method: M.euz("notifications/resources/list_changed"), params: d.optional() })),
          (eo = u.extend({ method: M.euz("resources/subscribe"), params: Q })),
          (ea = u.extend({ method: M.euz("resources/unsubscribe"), params: Q })),
          (es = d.extend({ uri: M.YjP() })),
          (en = p.extend({ method: M.euz("notifications/resources/updated"), params: es })),
          (ei = M.Ikc({ name: M.YjP(), description: M.lqM(M.YjP()), required: M.lqM(M.zMY()) })),
          (el = M.Ikc({
            ..._.shape,
            ...S.shape,
            description: M.lqM(M.YjP()),
            arguments: M.lqM(M.YOg(ei)),
            _meta: M.lqM(M._H3({})),
          })),
          (ec = A.extend({ method: M.euz("prompts/list") })),
          (eu = L.extend({ prompts: M.YOg(el) })),
          (ed = l.extend({ name: M.YjP(), arguments: M.g1P(M.YjP(), M.YjP()).optional() })),
          (ep = u.extend({ method: M.euz("prompts/get"), params: ed })),
          (eh = M.Ikc({
            type: M.euz("text"),
            text: M.YjP(),
            annotations: J.optional(),
            _meta: M.g1P(M.YjP(), M.L5J()).optional(),
          })),
          (em = M.Ikc({
            type: M.euz("image"),
            data: V,
            mimeType: M.YjP(),
            annotations: J.optional(),
            _meta: M.g1P(M.YjP(), M.L5J()).optional(),
          })),
          (ef = M.Ikc({
            type: M.euz("audio"),
            data: V,
            mimeType: M.YjP(),
            annotations: J.optional(),
            _meta: M.g1P(M.YjP(), M.L5J()).optional(),
          })),
          (eg = M.Ikc({
            type: M.euz("tool_use"),
            name: M.YjP(),
            id: M.YjP(),
            input: M.g1P(M.YjP(), M.L5J()),
            _meta: M.g1P(M.YjP(), M.L5J()).optional(),
          })),
          (ey = M.Ikc({
            type: M.euz("resource"),
            resource: M.KCZ([D, U]),
            annotations: J.optional(),
            _meta: M.g1P(M.YjP(), M.L5J()).optional(),
          })),
          (ev = F.extend({ type: M.euz("resource_link") })),
          (eS = M.KCZ([eh, em, ef, ev, ey])),
          (e_ = M.Ikc({ role: K, content: eS })),
          (eb = h.extend({ description: M.YjP().optional(), messages: M.YOg(e_) })),
          (eP = p.extend({ method: M.euz("notifications/prompts/list_changed"), params: d.optional() })),
          (e$ = M.Ikc({
            title: M.YjP().optional(),
            readOnlyHint: M.zMY().optional(),
            destructiveHint: M.zMY().optional(),
            idempotentHint: M.zMY().optional(),
            openWorldHint: M.zMY().optional(),
          })),
          (ew = M.Ikc({ taskSupport: M.k5n(["required", "optional", "forbidden"]).optional() })),
          (eR = M.Ikc({
            ..._.shape,
            ...S.shape,
            description: M.YjP().optional(),
            inputSchema: M.Ikc({
              type: M.euz("object"),
              properties: M.g1P(M.YjP(), e).optional(),
              required: M.YOg(M.YjP()).optional(),
            }).catchall(M.L5J()),
            outputSchema: M.Ikc({
              type: M.euz("object"),
              properties: M.g1P(M.YjP(), e).optional(),
              required: M.YOg(M.YjP()).optional(),
            })
              .catchall(M.L5J())
              .optional(),
            annotations: e$.optional(),
            execution: ew.optional(),
            _meta: M.g1P(M.YjP(), M.L5J()).optional(),
          })),
          (ej = A.extend({ method: M.euz("tools/list") })),
          (ek = L.extend({ tools: M.YOg(eR) })),
          (eE = h.extend({
            content: M.YOg(eS),
            structuredContent: M.g1P(M.YjP(), M.L5J()).optional(),
            isError: M.zMY().optional(),
          })),
          (eI = c.extend({ name: M.YjP(), arguments: M.g1P(M.YjP(), M.L5J()).optional() })),
          (eC = u.extend({ method: M.euz("tools/call"), params: eI })),
          (ex = p.extend({ method: M.euz("notifications/tools/list_changed"), params: d.optional() })),
          (eq = M.k5n(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"])),
          (eT = l.extend({ level: eq })),
          (eY = u.extend({ method: M.euz("logging/setLevel"), params: eT })),
          (eO = d.extend({ level: eq, logger: M.YjP().optional(), data: M.L5J() })),
          (eM = p.extend({ method: M.euz("notifications/message"), params: eO })),
          (eN = M.Ikc({ name: M.YjP().optional() })),
          (ez = M.Ikc({
            hints: M.YOg(eN).optional(),
            costPriority: M.aig().min(0).max(1).optional(),
            speedPriority: M.aig().min(0).max(1).optional(),
            intelligencePriority: M.aig().min(0).max(1).optional(),
          })),
          (eA = M.Ikc({ mode: M.k5n(["auto", "required", "none"]).optional() })),
          (eL = M.Ikc({
            type: M.euz("tool_result"),
            toolUseId: M.YjP().describe("The unique identifier for the corresponding tool call."),
            content: M.YOg(eS),
            structuredContent: M.Ikc({}).loose().optional(),
            isError: M.zMY().optional(),
            _meta: M.g1P(M.YjP(), M.L5J()).optional(),
          })),
          (eH = M.gMt("type", [eh, em, ef])),
          (eD = M.gMt("type", [eh, em, ef, eg, eL])),
          (eV = M.Ikc({ role: K, content: M.KCZ([eD, M.YOg(eD)]), _meta: M.g1P(M.YjP(), M.L5J()).optional() })),
          (eU = c.extend({
            messages: M.YOg(eV),
            modelPreferences: ez.optional(),
            systemPrompt: M.YjP().optional(),
            includeContext: M.k5n(["none", "thisServer", "allServers"]).optional(),
            temperature: M.aig().optional(),
            maxTokens: M.aig().int(),
            stopSequences: M.YOg(M.YjP()).optional(),
            metadata: t.optional(),
            tools: M.YOg(eR).optional(),
            toolChoice: eA.optional(),
          })),
          (eK = u.extend({ method: M.euz("sampling/createMessage"), params: eU })),
          (eJ = h.extend({
            model: M.YjP(),
            stopReason: M.lqM(M.k5n(["endTurn", "stopSequence", "maxTokens"]).or(M.YjP())),
            role: K,
            content: eH,
          })),
          (eF = h.extend({
            model: M.YjP(),
            stopReason: M.lqM(M.k5n(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(M.YjP())),
            role: K,
            content: M.KCZ([eD, M.YOg(eD)]),
          })),
          (eG = M.Ikc({
            type: M.euz("boolean"),
            title: M.YjP().optional(),
            description: M.YjP().optional(),
            default: M.zMY().optional(),
          })),
          (eB = M.Ikc({
            type: M.euz("string"),
            title: M.YjP().optional(),
            description: M.YjP().optional(),
            minLength: M.aig().optional(),
            maxLength: M.aig().optional(),
            format: M.k5n(["email", "uri", "date", "date-time"]).optional(),
            default: M.YjP().optional(),
          })),
          (eZ = M.Ikc({
            type: M.k5n(["number", "integer"]),
            title: M.YjP().optional(),
            description: M.YjP().optional(),
            minimum: M.aig().optional(),
            maximum: M.aig().optional(),
            default: M.aig().optional(),
          })),
          (eW = M.Ikc({
            type: M.euz("string"),
            title: M.YjP().optional(),
            description: M.YjP().optional(),
            enum: M.YOg(M.YjP()),
            default: M.YjP().optional(),
          })),
          (eX = M.Ikc({
            type: M.euz("string"),
            title: M.YjP().optional(),
            description: M.YjP().optional(),
            oneOf: M.YOg(M.Ikc({ const: M.YjP(), title: M.YjP() })),
            default: M.YjP().optional(),
          })),
          (eQ = M.Ikc({
            type: M.euz("string"),
            title: M.YjP().optional(),
            description: M.YjP().optional(),
            enum: M.YOg(M.YjP()),
            enumNames: M.YOg(M.YjP()).optional(),
            default: M.YjP().optional(),
          })),
          (e0 = M.KCZ([eW, eX])),
          (e1 = M.Ikc({
            type: M.euz("array"),
            title: M.YjP().optional(),
            description: M.YjP().optional(),
            minItems: M.aig().optional(),
            maxItems: M.aig().optional(),
            items: M.Ikc({ type: M.euz("string"), enum: M.YOg(M.YjP()) }),
            default: M.YOg(M.YjP()).optional(),
          })),
          (e2 = M.Ikc({
            type: M.euz("array"),
            title: M.YjP().optional(),
            description: M.YjP().optional(),
            minItems: M.aig().optional(),
            maxItems: M.aig().optional(),
            items: M.Ikc({ anyOf: M.YOg(M.Ikc({ const: M.YjP(), title: M.YjP() })) }),
            default: M.YOg(M.YjP()).optional(),
          })),
          (e9 = M.KCZ([e1, e2])),
          (e5 = M.KCZ([eQ, e0, e9])),
          (e3 = M.KCZ([e5, eG, eB, eZ])),
          (e4 = c.extend({
            mode: M.euz("form").optional(),
            message: M.YjP(),
            requestedSchema: M.Ikc({
              type: M.euz("object"),
              properties: M.g1P(M.YjP(), e3),
              required: M.YOg(M.YjP()).optional(),
            }).catchall(M.L5J()),
          })),
          (e6 = c.extend({ mode: M.euz("url"), message: M.YjP(), elicitationId: M.YjP(), url: M.YjP().url() })),
          (e8 = M.KCZ([e4, e6])),
          (e7 = u.extend({ method: M.euz("elicitation/create"), params: e8 })),
          (te = d.extend({ elicitationId: M.YjP() })),
          (tt = p.extend({ method: M.euz("notifications/elicitation/complete"), params: te })),
          (tr = h.extend({
            action: M.k5n(["accept", "decline", "cancel"]),
            content: M.vkY(
              (e) => (null === e ? void 0 : e),
              M.g1P(M.YjP(), M.KCZ([M.YjP(), M.aig(), M.zMY(), M.YOg(M.YjP())])).optional(),
            ),
          })),
          (to = M.Ikc({ type: M.euz("ref/resource"), uri: M.YjP() })),
          (ta = M.Ikc({ type: M.euz("ref/prompt"), name: M.YjP() })),
          (ts = l.extend({
            ref: M.KCZ([ta, to]),
            argument: M.Ikc({ name: M.YjP(), value: M.YjP() }),
            context: M.Ikc({ arguments: M.g1P(M.YjP(), M.YjP()).optional() }).optional(),
          })),
          (tn = u.extend({ method: M.euz("completion/complete"), params: ts })),
          (ti = h.extend({
            completion: M._H3({
              values: M.YOg(M.YjP()).max(100),
              total: M.lqM(M.aig().int()),
              hasMore: M.lqM(M.zMY()),
            }),
          })),
          (tl = M.Ikc({
            uri: M.YjP().startsWith("file://"),
            name: M.YjP().optional(),
            _meta: M.g1P(M.YjP(), M.L5J()).optional(),
          })),
          (tc = u.extend({ method: M.euz("roots/list"), params: l.optional() })),
          (tu = h.extend({ roots: M.YOg(tl) })),
          (td = p.extend({ method: M.euz("notifications/roots/list_changed"), params: d.optional() })),
          (tp = M._H3({ ttl: M.aig().optional(), pollInterval: M.aig().optional() })),
          (th = M.k5n(["working", "input_required", "completed", "failed", "cancelled"])),
          (tm = M.Ikc({
            taskId: M.YjP(),
            status: th,
            ttl: M.KCZ([M.aig(), M.chJ()]),
            createdAt: M.YjP(),
            lastUpdatedAt: M.YjP(),
            pollInterval: M.lqM(M.aig()),
            statusMessage: M.lqM(M.YjP()),
          })),
          (tf = h.extend({ task: tm })),
          (tg = d.merge(tm)),
          (ty = p.extend({ method: M.euz("notifications/tasks/status"), params: tg })),
          (tv = u.extend({ method: M.euz("tasks/get"), params: l.extend({ taskId: M.YjP() }) })),
          (tS = h.merge(tm)),
          (t_ = u.extend({ method: M.euz("tasks/result"), params: l.extend({ taskId: M.YjP() }) })),
          (tb = h.loose()),
          (tP = A.extend({ method: M.euz("tasks/list") })),
          (t$ = L.extend({ tasks: M.YOg(tm) })),
          (tw = u.extend({ method: M.euz("tasks/cancel"), params: l.extend({ taskId: M.YjP() }) })),
          {
            JSONValueSchema: e,
            JSONObjectSchema: t,
            ProgressTokenSchema: r,
            CursorSchema: a,
            TaskMetadataSchema: s,
            RelatedTaskMetadataSchema: n,
            RequestMetaSchema: i,
            BaseRequestParamsSchema: l,
            TaskAugmentedRequestParamsSchema: c,
            RequestSchema: u,
            NotificationsParamsSchema: d,
            NotificationSchema: p,
            ResultSchema: h,
            RequestIdSchema: m,
            EmptyResultSchema: f,
            CancelledNotificationParamsSchema: g,
            CancelledNotificationSchema: y,
            IconSchema: v,
            IconsSchema: S,
            BaseMetadataSchema: _,
            ImplementationSchema: b,
            ClientTasksCapabilitySchema: w,
            ServerTasksCapabilitySchema: R,
            ClientCapabilitiesSchema: j,
            InitializeRequestParamsSchema: k,
            InitializeRequestSchema: E,
            ServerCapabilitiesSchema: I,
            InitializeResultSchema: C,
            InitializedNotificationSchema: x,
            PingRequestSchema: q,
            ProgressSchema: T,
            ProgressNotificationParamsSchema: Y,
            ProgressNotificationSchema: O,
            PaginatedRequestParamsSchema: z,
            PaginatedRequestSchema: A,
            PaginatedResultSchema: L,
            ResourceContentsSchema: H,
            TextResourceContentsSchema: D,
            BlobResourceContentsSchema: U,
            RoleSchema: K,
            AnnotationsSchema: J,
            ResourceSchema: F,
            ResourceTemplateSchema: G,
            ListResourcesRequestSchema: B,
            ListResourcesResultSchema: Z,
            ListResourceTemplatesRequestSchema: W,
            ListResourceTemplatesResultSchema: X,
            ResourceRequestParamsSchema: Q,
            ReadResourceRequestParamsSchema: Q,
            ReadResourceRequestSchema: ee,
            ReadResourceResultSchema: et,
            ResourceListChangedNotificationSchema: er,
            SubscribeRequestParamsSchema: Q,
            SubscribeRequestSchema: eo,
            UnsubscribeRequestParamsSchema: Q,
            UnsubscribeRequestSchema: ea,
            ResourceUpdatedNotificationParamsSchema: es,
            ResourceUpdatedNotificationSchema: en,
            PromptArgumentSchema: ei,
            PromptSchema: el,
            ListPromptsRequestSchema: ec,
            ListPromptsResultSchema: eu,
            GetPromptRequestParamsSchema: ed,
            GetPromptRequestSchema: ep,
            TextContentSchema: eh,
            ImageContentSchema: em,
            AudioContentSchema: ef,
            ToolUseContentSchema: eg,
            EmbeddedResourceSchema: ey,
            ResourceLinkSchema: ev,
            ContentBlockSchema: eS,
            PromptMessageSchema: e_,
            GetPromptResultSchema: eb,
            PromptListChangedNotificationSchema: eP,
            ToolAnnotationsSchema: e$,
            ToolExecutionSchema: ew,
            ToolSchema: eR,
            ListToolsRequestSchema: ej,
            ListToolsResultSchema: ek,
            CallToolResultSchema: eE,
            CallToolRequestParamsSchema: eI,
            CallToolRequestSchema: eC,
            ToolListChangedNotificationSchema: ex,
            LoggingLevelSchema: eq,
            SetLevelRequestParamsSchema: eT,
            SetLevelRequestSchema: eY,
            LoggingMessageNotificationParamsSchema: eO,
            LoggingMessageNotificationSchema: eM,
            ModelHintSchema: eN,
            ModelPreferencesSchema: ez,
            ToolChoiceSchema: eA,
            ToolResultContentSchema: eL,
            SamplingContentSchema: eH,
            SamplingMessageContentBlockSchema: eD,
            SamplingMessageSchema: eV,
            CreateMessageRequestParamsSchema: eU,
            CreateMessageRequestSchema: eK,
            CreateMessageResultSchema: eJ,
            CreateMessageResultWithToolsSchema: eF,
            BooleanSchemaSchema: eG,
            StringSchemaSchema: eB,
            NumberSchemaSchema: eZ,
            UntitledSingleSelectEnumSchemaSchema: eW,
            TitledSingleSelectEnumSchemaSchema: eX,
            LegacyTitledEnumSchemaSchema: eQ,
            SingleSelectEnumSchemaSchema: e0,
            UntitledMultiSelectEnumSchemaSchema: e1,
            TitledMultiSelectEnumSchemaSchema: e2,
            MultiSelectEnumSchemaSchema: e9,
            EnumSchemaSchema: e5,
            PrimitiveSchemaDefinitionSchema: e3,
            ElicitRequestFormParamsSchema: e4,
            ElicitRequestURLParamsSchema: e6,
            ElicitRequestParamsSchema: e8,
            ElicitRequestSchema: e7,
            ElicitationCompleteNotificationParamsSchema: te,
            ElicitationCompleteNotificationSchema: tt,
            ElicitResultSchema: tr,
            ResourceTemplateReferenceSchema: to,
            PromptReferenceSchema: ta,
            CompleteRequestParamsSchema: ts,
            CompleteRequestSchema: tn,
            CompleteResultSchema: ti,
            RootSchema: tl,
            ListRootsRequestSchema: tc,
            ListRootsResultSchema: tu,
            RootsListChangedNotificationSchema: td,
            TaskCreationParamsSchema: tp,
            TaskStatusSchema: th,
            TaskSchema: tm,
            CreateTaskResultSchema: tf,
            TaskStatusNotificationParamsSchema: tg,
            TaskStatusNotificationSchema: ty,
            GetTaskRequestSchema: tv,
            GetTaskResultSchema: tS,
            GetTaskPayloadRequestSchema: t_,
            GetTaskPayloadResultSchema: tb,
            ListTasksRequestSchema: tP,
            ListTasksResultSchema: t$,
            CancelTaskRequestSchema: tw,
            CancelTaskResultSchema: h.merge(tm),
            ClientRequestSchema: M.KCZ([q, E, tn, eY, ep, ec, B, W, ee, eo, ea, eC, ej, tv, t_, tP, tw]),
            ClientNotificationSchema: M.KCZ([y, O, x, td, ty]),
            ClientResultSchema: M.KCZ([f, eJ, eF, tr, tu, tS, t$, tf]),
            ServerRequestSchema: M.KCZ([q, eK, e7, tc, tv, t_, tP, tw]),
            ServerNotificationSchema: M.KCZ([y, O, eM, en, er, ex, eP, ty, tt]),
            ServerResultSchema: M.KCZ([f, C, ti, eb, eu, Z, X, et, eE, ek, tS, t$, tf]),
            CallToolResultWireSchema: M.L5J()
              .superRefine((e, t) => {
                if (!("object" != typeof e || null === e || Array.isArray(e)) && void 0 === e.content) {
                  for (let r of r3)
                    if (r in e)
                      return void t.addIssue({
                        code: "custom",
                        message: `content is required when the body carries '${r}' — another result family cannot default into an empty tools/call success`,
                      })
                }
              })
              .transform(r4)
              .pipe(eE),
          }))
      }
      function r8(e) {
        return "object" !== e.type
      }
      let r7 = new Set(["const", "enum", "default", "examples"]),
        oe = new Set(["properties", "patternProperties", "$defs", "definitions", "dependentSchemas", "dependencies"])
      function ot(e) {
        return void 0 !== e && !("string" == typeof e && e.startsWith("#"))
      }
      let or = {
          ping: null,
          initialize: null,
          "completion/complete": null,
          "logging/setLevel": null,
          "prompts/get": null,
          "prompts/list": null,
          "resources/list": null,
          "resources/templates/list": null,
          "resources/read": null,
          "resources/subscribe": null,
          "resources/unsubscribe": null,
          "tools/call": null,
          "tools/list": null,
          "tasks/get": null,
          "tasks/result": null,
          "tasks/list": null,
          "tasks/cancel": null,
          "sampling/createMessage": null,
          "elicitation/create": null,
          "roots/list": null,
        },
        oo = {
          "notifications/cancelled": null,
          "notifications/progress": null,
          "notifications/initialized": null,
          "notifications/roots/list_changed": null,
          "notifications/tasks/status": null,
          "notifications/message": null,
          "notifications/resources/updated": null,
          "notifications/resources/list_changed": null,
          "notifications/tools/list_changed": null,
          "notifications/prompts/list_changed": null,
          "notifications/elicitation/complete": null,
        },
        oa = {
          ping: null,
          initialize: null,
          "completion/complete": null,
          "logging/setLevel": null,
          "prompts/get": null,
          "prompts/list": null,
          "resources/list": null,
          "resources/templates/list": null,
          "resources/read": null,
          "resources/subscribe": null,
          "resources/unsubscribe": null,
          "tools/call": null,
          "tools/list": null,
          "sampling/createMessage": null,
          "elicitation/create": null,
          "roots/list": null,
        }
      function os() {
        if (a) return a
        let e = r6()
        return (a = {
          requestSchemas: {
            ping: e.PingRequestSchema,
            initialize: e.InitializeRequestSchema,
            "completion/complete": e.CompleteRequestSchema,
            "logging/setLevel": e.SetLevelRequestSchema,
            "prompts/get": e.GetPromptRequestSchema,
            "prompts/list": e.ListPromptsRequestSchema,
            "resources/list": e.ListResourcesRequestSchema,
            "resources/templates/list": e.ListResourceTemplatesRequestSchema,
            "resources/read": e.ReadResourceRequestSchema,
            "resources/subscribe": e.SubscribeRequestSchema,
            "resources/unsubscribe": e.UnsubscribeRequestSchema,
            "tools/call": e.CallToolRequestSchema,
            "tools/list": e.ListToolsRequestSchema,
            "tasks/get": e.GetTaskRequestSchema,
            "tasks/result": e.GetTaskPayloadRequestSchema,
            "tasks/list": e.ListTasksRequestSchema,
            "tasks/cancel": e.CancelTaskRequestSchema,
            "sampling/createMessage": e.CreateMessageRequestSchema,
            "elicitation/create": e.ElicitRequestSchema,
            "roots/list": e.ListRootsRequestSchema,
          },
          notificationSchemas: {
            "notifications/cancelled": e.CancelledNotificationSchema,
            "notifications/progress": e.ProgressNotificationSchema,
            "notifications/initialized": e.InitializedNotificationSchema,
            "notifications/roots/list_changed": e.RootsListChangedNotificationSchema,
            "notifications/tasks/status": e.TaskStatusNotificationSchema,
            "notifications/message": e.LoggingMessageNotificationSchema,
            "notifications/resources/updated": e.ResourceUpdatedNotificationSchema,
            "notifications/resources/list_changed": e.ResourceListChangedNotificationSchema,
            "notifications/tools/list_changed": e.ToolListChangedNotificationSchema,
            "notifications/prompts/list_changed": e.PromptListChangedNotificationSchema,
            "notifications/elicitation/complete": e.ElicitationCompleteNotificationSchema,
          },
          resultSchemas: {
            ping: e.EmptyResultSchema,
            initialize: e.InitializeResultSchema,
            "completion/complete": e.CompleteResultSchema,
            "logging/setLevel": e.EmptyResultSchema,
            "prompts/get": e.GetPromptResultSchema,
            "prompts/list": e.ListPromptsResultSchema,
            "resources/list": e.ListResourcesResultSchema,
            "resources/templates/list": e.ListResourceTemplatesResultSchema,
            "resources/read": e.ReadResourceResultSchema,
            "resources/subscribe": e.EmptyResultSchema,
            "resources/unsubscribe": e.EmptyResultSchema,
            "tools/call": e.CallToolResultWireSchema,
            "tools/list": e.ListToolsResultSchema,
            "sampling/createMessage": e.CreateMessageResultWithToolsSchema,
            "elicitation/create": e.ElicitResultSchema,
            "roots/list": e.ListRootsResultSchema,
          },
        })
      }
      function on(e) {
        return Object.prototype.hasOwnProperty.call(or, e)
      }
      function oi(e) {
        return Object.prototype.hasOwnProperty.call(oo, e)
      }
      function ol(e) {
        return null !== e && "object" == typeof e && !Array.isArray(e)
      }
      function oc(e, t) {
        if (void 0 === e) return { ok: !1, reason: "not-in-era" }
        let r = e.safeParse(t)
        return r.success ? { ok: !0, value: r.data } : { ok: !1, reason: "invalid", message: String(r.error) }
      }
      ;(Object.keys(or), Object.keys(oo))
      let ou = { ok: !1, reason: "not-in-era" }
      function od(e) {
        return ol(e) && ol(e.outputSchema) && r8(e.outputSchema)
      }
      let op = {
        era: "2025-11-25",
        hasRequestMethod: on,
        hasNotificationMethod: oi,
        validateRequest: (e, t) => oc(on(e) ? os().requestSchemas[e] : void 0, t),
        validateResult: (e, t) => oc(Object.prototype.hasOwnProperty.call(oa, e) ? os().resultSchemas[e] : void 0, t),
        validateNotification: (e, t) => oc(oi(e) ? os().notificationSchemas[e] : void 0, t),
        hasInputRequestMethod: () => !1,
        validateInputRequest: () => ou,
        validateInputResponse: () => ou,
        samplingResultVariant: (e, t) => {
          let r = r6()
          return oc(e ? r.CreateMessageResultWithToolsSchema : r.CreateMessageResultSchema, t)
        },
        outboundEnvelope: (e) => void 0,
        validateEnvelopeMeta: (e) => [],
        projectCallToolResult(e, t) {
          let r = r5(e),
            o = r.structuredContent
          if (void 0 === o) return r
          let a = "object" != typeof o || null === o || Array.isArray(o),
            s = void 0 !== t && r8(t)
          return a || s ? { ...r, structuredContent: { result: o } } : r
        },
        decodeResult(e, t) {
          if (ol(t) && "resultType" in t) {
            let e = { ...t }
            return (delete e.resultType, { kind: "complete", result: e })
          }
          return { kind: "complete", result: t }
        },
        encodeResult(e, t) {
          if ("tools/list" !== e) return t
          let r = t.tools
          return Array.isArray(r) && r.some((e) => od(e))
            ? {
                ...t,
                tools: r.map((e) =>
                  od(e)
                    ? {
                        ...e,
                        outputSchema: (function (e) {
                          var t
                          let r = "string" == typeof e.$schema ? e.$schema : void 0
                          if (ot(e.$id))
                            return {
                              ...(void 0 !== r && { $schema: r }),
                              type: "object",
                              properties: { result: e },
                              required: ["result"],
                            }
                          let o =
                              "string" == typeof (t = e.$schema) &&
                              T.has(t.replace(/#$/, "")) &&
                              !0 !== e.$recursiveAnchor,
                            a = (e, t) => {
                              if (Array.isArray(e)) return e.map((e) => a(e, !1))
                              if (null === e || "object" != typeof e || (!t && ot(e.$id))) return e
                              let r = {},
                                s = !1
                              for (let [n, i] of Object.entries(e))
                                t
                                  ? (r[n] = a(i, !1))
                                  : ("$ref" === n || "$dynamicRef" === n) && "string" == typeof i
                                    ? (r[n] =
                                        "#" === i
                                          ? "#/properties/result"
                                          : i.startsWith("#/")
                                            ? `#/properties/result${i.slice(1)}`
                                            : i)
                                    : "$recursiveRef" === n && "#" === i && o
                                      ? (s = !0)
                                      : r7.has(n)
                                        ? (r[n] = i)
                                        : oe.has(n)
                                          ? (r[n] = a(i, !0))
                                          : (r[n] = a(i, !1))
                              return (
                                s &&
                                  ("$ref" in r
                                    ? (r.allOf = [
                                        ...(Array.isArray(r.allOf) ? r.allOf : []),
                                        { $ref: "#/properties/result" },
                                      ])
                                    : (r.$ref = "#/properties/result")),
                                r
                              )
                            }
                          return {
                            ...(void 0 !== r && { $schema: r }),
                            type: "object",
                            properties: { result: a(e, !1) },
                            required: ["result"],
                          }
                        })(e.outputSchema),
                      }
                    : e,
                ),
              }
            : t
        },
        encodeErrorCode: (e) => (-32002 === e ? -32602 : e),
        checkInboundEnvelope: (e) => void 0,
      }
      function oh() {
        return (s ??= (function () {
          let e = M.RZV(() => M.KCZ([M.YjP(), M.aig(), M.zMY(), M.chJ(), M.g1P(M.YjP(), e), M.YOg(e)])),
            t = M.g1P(M.YjP(), e),
            r = M.KCZ([M.YjP(), M.aig().int()]),
            o = M.YjP(),
            a = M.KCZ([M.YjP(), M.aig().int()]),
            s = M.k5n(["user", "assistant"]),
            n = M.k5n(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
            i = M.YjP().refine(
              (e) => {
                try {
                  return (atob(e), !0)
                } catch {
                  return !1
                }
              },
              { message: "Invalid Base64 string" },
            ),
            l = M.Ikc({ ttl: M.aig().optional() }),
            c = M.Ikc({ taskId: M.YjP() }),
            u = M._H3({ progressToken: r.optional(), "io.modelcontextprotocol/related-task": c.optional() }),
            d = M.Ikc({ _meta: u.optional() }),
            p = d.extend({ task: l.optional() }),
            h = M.Ikc({ _meta: u.optional() }),
            m = M.Ikc({ method: M.YjP(), params: h.loose().optional() }),
            f = M.Ikc({
              src: M.YjP(),
              mimeType: M.YjP().optional(),
              sizes: M.YOg(M.YjP()).optional(),
              theme: M.k5n(["light", "dark"]).optional(),
            }),
            g = M.Ikc({ icons: M.YOg(f).optional() }),
            y = M.Ikc({ name: M.YjP(), title: M.YjP().optional() }),
            v = y.extend({
              ...y.shape,
              ...g.shape,
              version: M.YjP(),
              websiteUrl: M.YjP().optional(),
              description: M.YjP().optional(),
            }),
            S = M.E$q(M.Ikc({ applyDefaults: M.zMY().optional() }), t),
            _ = M.vkY(
              (e) => (e && "object" == typeof e && !Array.isArray(e) && 0 === Object.keys(e).length ? { form: {} } : e),
              M.E$q(M.Ikc({ form: S.optional(), url: t.optional() }), t.optional()),
            ),
            b = M._H3({
              list: t.optional(),
              cancel: t.optional(),
              requests: M._H3({
                sampling: M._H3({ createMessage: t.optional() }).optional(),
                elicitation: M._H3({ create: t.optional() }).optional(),
              }).optional(),
            }),
            P = M._H3({
              list: t.optional(),
              cancel: t.optional(),
              requests: M._H3({ tools: M._H3({ call: t.optional() }).optional() }).optional(),
            }),
            $ = M.Ikc({
              experimental: M.g1P(M.YjP(), t).optional(),
              sampling: M.Ikc({ context: t.optional(), tools: t.optional() }).optional(),
              elicitation: _.optional(),
              roots: M.Ikc({ listChanged: M.zMY().optional() }).optional(),
              tasks: b.optional(),
              extensions: M.g1P(M.YjP(), t).optional(),
            }),
            w = M.Ikc({
              experimental: M.g1P(M.YjP(), t).optional(),
              logging: t.optional(),
              completions: t.optional(),
              prompts: M.Ikc({ listChanged: M.zMY().optional() }).optional(),
              resources: M.Ikc({ subscribe: M.zMY().optional(), listChanged: M.zMY().optional() }).optional(),
              tools: M.Ikc({ listChanged: M.zMY().optional() }).optional(),
              tasks: P.optional(),
              extensions: M.g1P(M.YjP(), t).optional(),
            }),
            R = M.Ikc({ progress: M.aig(), total: M.lqM(M.aig()), message: M.lqM(M.YjP()) }),
            j = M.Ikc({ ...h.shape, ...R.shape, progressToken: r }),
            k = m.extend({ method: M.euz("notifications/progress"), params: j }),
            E = h.extend({ level: n, logger: M.YjP().optional(), data: M.L5J() }),
            I = m.extend({ method: M.euz("notifications/message"), params: E }),
            C = M.Ikc({ uri: M.YjP(), mimeType: M.lqM(M.YjP()), _meta: M.g1P(M.YjP(), M.L5J()).optional() }),
            x = C.extend({ text: M.YjP() }),
            q = C.extend({ blob: i }),
            T = M.Ikc({
              audience: M.YOg(s).optional(),
              priority: M.aig().min(0).max(1).optional(),
              lastModified: N.w$({ offset: !0 }).optional(),
            }),
            Y = M.Ikc({
              ...y.shape,
              ...g.shape,
              uri: M.YjP(),
              description: M.lqM(M.YjP()),
              mimeType: M.lqM(M.YjP()),
              size: M.lqM(M.aig()),
              annotations: T.optional(),
              _meta: M.lqM(M._H3({})),
            }),
            O = M.Ikc({
              ...y.shape,
              ...g.shape,
              uriTemplate: M.YjP(),
              description: M.lqM(M.YjP()),
              mimeType: M.lqM(M.YjP()),
              annotations: T.optional(),
              _meta: M.lqM(M._H3({})),
            }),
            z = m.extend({ method: M.euz("notifications/resources/list_changed"), params: h.optional() }),
            A = h.extend({ uri: M.YjP() }),
            L = m.extend({ method: M.euz("notifications/resources/updated"), params: A }),
            H = M.Ikc({ name: M.YjP(), description: M.lqM(M.YjP()), required: M.lqM(M.zMY()) }),
            F = M.Ikc({
              ...y.shape,
              ...g.shape,
              description: M.lqM(M.YjP()),
              arguments: M.lqM(M.YOg(H)),
              _meta: M.lqM(M._H3({})),
            }),
            G = m.extend({ method: M.euz("notifications/prompts/list_changed"), params: h.optional() }),
            B = M.Ikc({
              type: M.euz("text"),
              text: M.YjP(),
              annotations: T.optional(),
              _meta: M.g1P(M.YjP(), M.L5J()).optional(),
            }),
            Z = M.Ikc({
              type: M.euz("image"),
              data: i,
              mimeType: M.YjP(),
              annotations: T.optional(),
              _meta: M.g1P(M.YjP(), M.L5J()).optional(),
            }),
            W = M.Ikc({
              type: M.euz("audio"),
              data: i,
              mimeType: M.YjP(),
              annotations: T.optional(),
              _meta: M.g1P(M.YjP(), M.L5J()).optional(),
            }),
            X = M.Ikc({
              type: M.euz("tool_use"),
              name: M.YjP(),
              id: M.YjP(),
              input: M.g1P(M.YjP(), M.L5J()),
              _meta: M.g1P(M.YjP(), M.L5J()).optional(),
            }),
            Q = M.Ikc({
              type: M.euz("resource"),
              resource: M.KCZ([x, q]),
              annotations: T.optional(),
              _meta: M.g1P(M.YjP(), M.L5J()).optional(),
            }),
            ee = Y.extend({ type: M.euz("resource_link") }),
            et = M.KCZ([B, Z, W, ee, Q]),
            er = M.Ikc({ role: s, content: et }),
            eo = M.Ikc({
              title: M.YjP().optional(),
              readOnlyHint: M.zMY().optional(),
              destructiveHint: M.zMY().optional(),
              idempotentHint: M.zMY().optional(),
              openWorldHint: M.zMY().optional(),
            }),
            ea = m.extend({ method: M.euz("notifications/tools/list_changed"), params: h.optional() }),
            es = M.Ikc({ name: M.YjP().optional() }),
            en = M.Ikc({
              hints: M.YOg(es).optional(),
              costPriority: M.aig().min(0).max(1).optional(),
              speedPriority: M.aig().min(0).max(1).optional(),
              intelligencePriority: M.aig().min(0).max(1).optional(),
            }),
            ei = M.Ikc({ mode: M.k5n(["auto", "required", "none"]).optional() }),
            el = M.Ikc({
              type: M.euz("boolean"),
              title: M.YjP().optional(),
              description: M.YjP().optional(),
              default: M.zMY().optional(),
            }),
            ec = M.Ikc({
              type: M.euz("string"),
              title: M.YjP().optional(),
              description: M.YjP().optional(),
              minLength: M.aig().optional(),
              maxLength: M.aig().optional(),
              format: M.k5n(["email", "uri", "date", "date-time"]).optional(),
              default: M.YjP().optional(),
            }),
            eu = M.Ikc({
              type: M.k5n(["number", "integer"]),
              title: M.YjP().optional(),
              description: M.YjP().optional(),
              minimum: M.aig().optional(),
              maximum: M.aig().optional(),
              default: M.aig().optional(),
            }),
            ed = M.Ikc({
              type: M.euz("string"),
              title: M.YjP().optional(),
              description: M.YjP().optional(),
              enum: M.YOg(M.YjP()),
              default: M.YjP().optional(),
            }),
            ep = M.Ikc({
              type: M.euz("string"),
              title: M.YjP().optional(),
              description: M.YjP().optional(),
              oneOf: M.YOg(M.Ikc({ const: M.YjP(), title: M.YjP() })),
              default: M.YjP().optional(),
            }),
            eh = M.Ikc({
              type: M.euz("string"),
              title: M.YjP().optional(),
              description: M.YjP().optional(),
              enum: M.YOg(M.YjP()),
              enumNames: M.YOg(M.YjP()).optional(),
              default: M.YjP().optional(),
            }),
            em = M.KCZ([ed, ep]),
            ef = M.Ikc({
              type: M.euz("array"),
              title: M.YjP().optional(),
              description: M.YjP().optional(),
              minItems: M.aig().optional(),
              maxItems: M.aig().optional(),
              items: M.Ikc({ type: M.euz("string"), enum: M.YOg(M.YjP()) }),
              default: M.YOg(M.YjP()).optional(),
            }),
            eg = M.Ikc({
              type: M.euz("array"),
              title: M.YjP().optional(),
              description: M.YjP().optional(),
              minItems: M.aig().optional(),
              maxItems: M.aig().optional(),
              items: M.Ikc({ anyOf: M.YOg(M.Ikc({ const: M.YjP(), title: M.YjP() })) }),
              default: M.YOg(M.YjP()).optional(),
            }),
            ey = M.KCZ([ef, eg]),
            ev = M.KCZ([eh, em, ey]),
            eS = M.KCZ([ev, el, ec, eu]),
            e_ = p.extend({
              mode: M.euz("form").optional(),
              message: M.YjP(),
              requestedSchema: M.Ikc({
                type: M.euz("object"),
                properties: M.g1P(M.YjP(), eS),
                required: M.YOg(M.YjP()).optional(),
              }).catchall(M.L5J()),
            }),
            eb = M.Ikc({ type: M.euz("ref/resource"), uri: M.YjP() }),
            eP = M.Ikc({ type: M.euz("ref/prompt"), name: M.YjP() }),
            e$ = M.Ikc({
              uri: M.YjP().startsWith("file://"),
              name: M.YjP().optional(),
              _meta: M.g1P(M.YjP(), M.L5J()).optional(),
            }),
            ew = $.shape,
            eR = M.Ikc({
              experimental: ew.experimental,
              sampling: ew.sampling,
              elicitation: ew.elicitation,
              roots: ew.roots,
              extensions: ew.extensions,
            }),
            ej = w.shape,
            ek = M.Ikc({
              experimental: ej.experimental,
              logging: ej.logging,
              completions: ej.completions,
              prompts: ej.prompts,
              resources: ej.resources,
              tools: ej.tools,
              extensions: ej.extensions,
            }),
            eE = M._H3({ progressToken: r.optional(), [D]: M.YjP(), [V]: v.optional(), [K]: eR, [J]: n.optional() }),
            eI = M.Ikc({
              ...y.shape,
              ...g.shape,
              description: M.YjP().optional(),
              inputSchema: M._H3({ $schema: M.YjP().optional(), type: M.euz("object") }),
              outputSchema: M._H3({ $schema: M.YjP().optional() }).optional(),
              annotations: eo.optional(),
              _meta: M.g1P(M.YjP(), M.L5J()).optional(),
            }),
            eC = M.Ikc({
              type: M.euz("tool_result"),
              toolUseId: M.YjP(),
              content: M.YOg(et),
              structuredContent: M.L5J().optional(),
              isError: M.zMY().optional(),
              _meta: M.g1P(M.YjP(), M.L5J()).optional(),
            }),
            ex = M.KCZ([B, Z, W, X, eC]),
            eq = M.Ikc({ role: s, content: M.KCZ([ex, M.YOg(ex)]), _meta: M.g1P(M.YjP(), M.L5J()).optional() }),
            eT = M.YjP(),
            eY = M._H3({ [U]: v.optional().catch(void 0) }),
            eO = eY.optional()
          function eM(e) {
            return M._H3({ _meta: eO, resultType: eT.default("complete"), ...e })
          }
          let eN = eM({}),
            ez = eM({ nextCursor: o.optional() }),
            eA = eM({ content: M.YOg(et), structuredContent: M.L5J().optional(), isError: M.zMY().optional() }),
            eL = eM({
              ttlMs: M.aig().int().min(0),
              cacheScope: M.k5n(["public", "private"]),
              tools: M.YOg(eI),
              nextCursor: o.optional(),
            }),
            eH = eM({
              ttlMs: M.aig().int().min(0),
              cacheScope: M.k5n(["public", "private"]),
              prompts: M.YOg(F),
              nextCursor: o.optional(),
            }),
            eD = eM({ description: M.YjP().optional(), messages: M.YOg(er) }),
            eV = eM({
              ttlMs: M.aig().int().min(0),
              cacheScope: M.k5n(["public", "private"]),
              resources: M.YOg(Y),
              nextCursor: o.optional(),
            }),
            eU = eM({
              ttlMs: M.aig().int().min(0),
              cacheScope: M.k5n(["public", "private"]),
              resourceTemplates: M.YOg(O),
              nextCursor: o.optional(),
            }),
            eK = eM({
              ttlMs: M.aig().int().min(0),
              cacheScope: M.k5n(["public", "private"]),
              contents: M.YOg(M.KCZ([x, q])),
            }),
            eJ = eM({
              completion: M.Ikc({
                values: M.YOg(M.YjP()).max(100),
                total: M.aig().int().optional(),
                hasMore: M.zMY().optional(),
              }).loose(),
            }),
            eF = eM({ ttlMs: M.aig().int().min(0), cacheScope: M.k5n(["public", "private"]) }),
            eG = eM({
              ttlMs: M.aig().int().min(0).catch(0),
              cacheScope: M.k5n(["public", "private"]).catch("private"),
              supportedVersions: M.YOg(M.YjP()),
              capabilities: ek,
              instructions: M.YjP().optional(),
            }),
            eB = M.Ikc({
              messages: M.YOg(eq),
              modelPreferences: en.optional(),
              systemPrompt: M.YjP().optional(),
              includeContext: M.k5n(["none", "thisServer", "allServers"]).optional(),
              temperature: M.aig().optional(),
              maxTokens: M.aig().int(),
              stopSequences: M.YOg(M.YjP()).optional(),
              metadata: t.optional(),
              tools: M.YOg(eI).optional(),
              toolChoice: ei.optional(),
            }),
            eZ = M.Ikc({ method: M.euz("sampling/createMessage"), params: eB }),
            eW = M.Ikc({
              method: M.euz("roots/list"),
              params: M.Ikc({ _meta: M.g1P(M.YjP(), M.L5J()).optional() }).optional(),
            }),
            eX = M.Ikc({ ...eq.shape, model: M.YjP(), stopReason: M.YjP().optional() }),
            eQ = M.Ikc({ roots: M.YOg(e$) }),
            e0 = M.Ikc({
              action: M.k5n(["accept", "decline", "cancel"]),
              content: M.g1P(M.YjP(), M.KCZ([M.YjP(), M.aig(), M.zMY(), M.YOg(M.YjP())])).optional(),
            }),
            e1 = M.Ikc({ mode: M.euz("url"), message: M.YjP(), url: M.YjP().url() }),
            e2 = M.KCZ([e_, e1]),
            e9 = M.Ikc({ method: M.euz("elicitation/create"), params: e2 }),
            e5 = M.KCZ([eZ, eW, e9]),
            e3 = M.KCZ([eX, eQ, e0]),
            e4 = M.g1P(M.YjP(), e5),
            e6 = M.g1P(M.YjP(), e3),
            e8 = eM({ inputRequests: e4.optional(), requestState: M.YjP().optional() }),
            e7 = { inputResponses: e6.optional(), requestState: M.YjP().optional() },
            te = M.Ikc({ _meta: eE, ...e7 }),
            tt = M._H3({ progressToken: r.optional() })
          function tr(e, t) {
            return M.Ikc({ method: M.euz(e), params: M.Ikc({ _meta: eE, ...t }) })
          }
          function to(e, t) {
            return M.Ikc({ method: M.euz(e), params: M.Ikc({ _meta: tt.optional(), ...t }).optional() })
          }
          let ta = { name: M.YjP(), arguments: M.g1P(M.YjP(), M.L5J()).optional(), ...e7 },
            ts = { cursor: o.optional() },
            tn = tr("tools/call", ta),
            ti = tr("tools/list", ts),
            tl = tr("prompts/list", ts),
            tc = tr("prompts/get", { name: M.YjP(), arguments: M.g1P(M.YjP(), M.YjP()).optional(), ...e7 }),
            tu = tr("resources/list", ts),
            td = tr("resources/templates/list", ts),
            tp = tr("resources/read", { uri: M.YjP(), ...e7 }),
            th = {
              ref: M.KCZ([eP, eb]),
              argument: M.Ikc({ name: M.YjP(), value: M.YjP() }),
              context: M.Ikc({ arguments: M.g1P(M.YjP(), M.YjP()).optional() }).optional(),
            },
            tm = tr("completion/complete", th),
            tf = tr("server/discover", {}),
            tg = M.Ikc({
              toolsListChanged: M.zMY().optional(),
              promptsListChanged: M.zMY().optional(),
              resourcesListChanged: M.zMY().optional(),
              resourceSubscriptions: M.YOg(M.YjP()).optional(),
            }),
            ty = { notifications: tg },
            tv = tr("subscriptions/listen", ty),
            tS = eY.extend({ "io.modelcontextprotocol/subscriptionId": a }),
            t_ = M._H3({ _meta: tS, resultType: eT.default("complete") }),
            tb = {
              "tools/call": to("tools/call", ta),
              "tools/list": to("tools/list", ts),
              "prompts/get": to("prompts/get", { name: M.YjP(), arguments: M.g1P(M.YjP(), M.YjP()).optional() }),
              "prompts/list": to("prompts/list", ts),
              "resources/list": to("resources/list", ts),
              "resources/templates/list": to("resources/templates/list", ts),
              "resources/read": to("resources/read", { uri: M.YjP() }),
              "completion/complete": to("completion/complete", th),
              "server/discover": to("server/discover", {}),
              "subscriptions/listen": to("subscriptions/listen", ty),
            }
          function tP(e) {
            return M._H3({ _meta: eO, ...e })
          }
          let t$ = {
              "tools/call": tP({
                content: M.YOg(et),
                structuredContent: M.L5J().optional(),
                isError: M.zMY().optional(),
              }),
              "tools/list": tP({
                ttlMs: M.aig().int().min(0),
                cacheScope: M.k5n(["public", "private"]),
                tools: M.YOg(eI),
                nextCursor: o.optional(),
              }),
              "prompts/get": tP({ description: M.YjP().optional(), messages: M.YOg(er) }),
              "prompts/list": tP({
                ttlMs: M.aig().int().min(0),
                cacheScope: M.k5n(["public", "private"]),
                prompts: M.YOg(F),
                nextCursor: o.optional(),
              }),
              "resources/list": tP({
                ttlMs: M.aig().int().min(0),
                cacheScope: M.k5n(["public", "private"]),
                resources: M.YOg(Y),
                nextCursor: o.optional(),
              }),
              "resources/templates/list": tP({
                ttlMs: M.aig().int().min(0),
                cacheScope: M.k5n(["public", "private"]),
                resourceTemplates: M.YOg(O),
                nextCursor: o.optional(),
              }),
              "resources/read": tP({
                ttlMs: M.aig().int().min(0),
                cacheScope: M.k5n(["public", "private"]),
                contents: M.YOg(M.KCZ([x, q])),
              }),
              "completion/complete": tP({
                completion: M.Ikc({
                  values: M.YOg(M.YjP()).max(100),
                  total: M.aig().int().optional(),
                  hasMore: M.zMY().optional(),
                }).loose(),
              }),
              "server/discover": tP({
                ttlMs: M.aig().int().min(0).catch(0),
                cacheScope: M.k5n(["public", "private"]).catch("private"),
                supportedVersions: M.YOg(M.YjP()),
                capabilities: ek,
                instructions: M.YjP().optional(),
              }),
              "subscriptions/listen": tP({}),
            },
            tw = M._H3({ "io.modelcontextprotocol/subscriptionId": a.optional() }),
            tR = M.Ikc({
              method: M.euz("notifications/subscriptions/acknowledged"),
              params: M.Ikc({ _meta: tw.optional(), notifications: tg }),
            }),
            tj = M.Ikc({ _meta: tw.optional(), requestId: a, reason: M.YjP().optional() }),
            tk = M.Ikc({ method: M.euz("notifications/cancelled"), params: tj }),
            tE = (e) => M.Ikc({ jsonrpc: M.euz("2.0"), id: M.KCZ([M.YjP(), M.aig().int()]), result: e }).strict()
          return {
            JSONValueSchema: e,
            JSONObjectSchema: t,
            ProgressTokenSchema: r,
            CursorSchema: o,
            RequestIdSchema: a,
            RoleSchema: s,
            LoggingLevelSchema: n,
            TaskMetadataSchema: l,
            RelatedTaskMetadataSchema: c,
            RequestMetaSchema: u,
            BaseRequestParamsSchema: d,
            TaskAugmentedRequestParamsSchema: p,
            NotificationsParamsSchema: h,
            NotificationSchema: m,
            IconSchema: f,
            IconsSchema: g,
            BaseMetadataSchema: y,
            ImplementationSchema: v,
            ClientTasksCapabilitySchema: b,
            ServerTasksCapabilitySchema: P,
            ClientCapabilitiesSchema: $,
            ServerCapabilitiesSchema: w,
            ProgressSchema: R,
            ProgressNotificationParamsSchema: j,
            ProgressNotificationSchema: k,
            LoggingMessageNotificationParamsSchema: E,
            LoggingMessageNotificationSchema: I,
            ResourceContentsSchema: C,
            TextResourceContentsSchema: x,
            BlobResourceContentsSchema: q,
            AnnotationsSchema: T,
            ResourceSchema: Y,
            ResourceTemplateSchema: O,
            ResourceListChangedNotificationSchema: z,
            ResourceUpdatedNotificationParamsSchema: A,
            ResourceUpdatedNotificationSchema: L,
            PromptArgumentSchema: H,
            PromptSchema: F,
            PromptListChangedNotificationSchema: G,
            TextContentSchema: B,
            ImageContentSchema: Z,
            AudioContentSchema: W,
            ToolUseContentSchema: X,
            EmbeddedResourceSchema: Q,
            ResourceLinkSchema: ee,
            ContentBlockSchema: et,
            PromptMessageSchema: er,
            ToolAnnotationsSchema: eo,
            ToolListChangedNotificationSchema: ea,
            ModelHintSchema: es,
            ModelPreferencesSchema: en,
            ToolChoiceSchema: ei,
            BooleanSchemaSchema: el,
            StringSchemaSchema: ec,
            NumberSchemaSchema: eu,
            UntitledSingleSelectEnumSchemaSchema: ed,
            TitledSingleSelectEnumSchemaSchema: ep,
            LegacyTitledEnumSchemaSchema: eh,
            SingleSelectEnumSchemaSchema: em,
            UntitledMultiSelectEnumSchemaSchema: ef,
            TitledMultiSelectEnumSchemaSchema: eg,
            MultiSelectEnumSchemaSchema: ey,
            EnumSchemaSchema: ev,
            PrimitiveSchemaDefinitionSchema: eS,
            ElicitRequestFormParamsSchema: e_,
            ResourceTemplateReferenceSchema: eb,
            PromptReferenceSchema: eP,
            RootSchema: e$,
            ClientCapabilities2026Schema: eR,
            ServerCapabilities2026Schema: ek,
            RequestMetaEnvelopeSchema: eE,
            ToolSchema: eI,
            ToolResultContentSchema: eC,
            SamplingMessageContentBlockSchema: ex,
            SamplingMessageSchema: eq,
            ResultTypeSchema: eT,
            ResultMetaSchema: eY,
            ResultSchema: eN,
            PaginatedResultSchema: ez,
            CallToolResultSchema: eA,
            ListToolsResultSchema: eL,
            ListPromptsResultSchema: eH,
            GetPromptResultSchema: eD,
            ListResourcesResultSchema: eV,
            ListResourceTemplatesResultSchema: eU,
            ReadResourceResultSchema: eK,
            CompleteResultSchema: eJ,
            CacheableResultSchema: eF,
            DiscoverResultSchema: eG,
            CreateMessageRequestParamsSchema: eB,
            CreateMessageRequestSchema: eZ,
            ListRootsRequestSchema: eW,
            CreateMessageResultSchema: eX,
            ListRootsResultSchema: eQ,
            ElicitResultSchema: e0,
            ElicitRequestURLParamsSchema: e1,
            ElicitRequestParamsSchema: e2,
            ElicitRequestSchema: e9,
            InputRequestSchema: e5,
            InputResponseSchema: e3,
            InputRequestsSchema: e4,
            InputResponsesSchema: e6,
            InputRequiredResultSchema: e8,
            InputResponseRequestParamsSchema: te,
            CallToolRequestSchema: tn,
            ListToolsRequestSchema: ti,
            ListPromptsRequestSchema: tl,
            GetPromptRequestSchema: tc,
            ListResourcesRequestSchema: tu,
            ListResourceTemplatesRequestSchema: td,
            ReadResourceRequestSchema: tp,
            CompleteRequestSchema: tm,
            DiscoverRequestSchema: tf,
            SubscriptionFilterSchema: tg,
            SubscriptionsListenRequestSchema: tv,
            SubscriptionsListenResultMetaSchema: tS,
            SubscriptionsListenResultSchema: t_,
            dispatchRequestSchemas: tb,
            dispatchResultSchemas: t$,
            NotificationMetaSchema: tw,
            SubscriptionsAcknowledgedNotificationSchema: tR,
            CancelledNotificationParamsSchema: tj,
            CancelledNotificationSchema: tk,
            notificationSchemas2026: {
              "notifications/cancelled": tk,
              "notifications/progress": k,
              "notifications/message": I,
              "notifications/resources/updated": L,
              "notifications/resources/list_changed": z,
              "notifications/tools/list_changed": ea,
              "notifications/prompts/list_changed": G,
              "notifications/subscriptions/acknowledged": tR,
            },
            JSONRPCResultResponseSchema: tE(eN),
            CallToolResultResponseSchema: tE(M.KCZ([eA, e8])),
            ListToolsResultResponseSchema: tE(eL),
            ListPromptsResultResponseSchema: tE(eH),
            GetPromptResultResponseSchema: tE(M.KCZ([eD, e8])),
            ListResourcesResultResponseSchema: tE(eV),
            ListResourceTemplatesResultResponseSchema: tE(eU),
            ReadResourceResultResponseSchema: tE(M.KCZ([eK, e8])),
            CompleteResultResponseSchema: tE(eJ),
            DiscoverResultResponseSchema: tE(eG),
            SubscriptionsListenResultResponseSchema: tE(t_),
          }
        })())
      }
      let om = [
          "tools/list",
          "prompts/list",
          "resources/list",
          "resources/templates/list",
          "resources/read",
          "server/discover",
        ],
        of = Symbol("modelcontextprotocol.resultCacheHintFallback")
      function og(e) {
        return "number" == typeof e && Number.isSafeInteger(e) && e >= 0
      }
      function oy(e) {
        return "public" === e || "private" === e
      }
      let ov =
        (((u = {})[(u.ParseError = -32700)] = "ParseError"),
        (u[(u.InvalidRequest = -32600)] = "InvalidRequest"),
        (u[(u.MethodNotFound = -32601)] = "MethodNotFound"),
        (u[(u.InvalidParams = -32602)] = "InvalidParams"),
        (u[(u.InternalError = -32603)] = "InternalError"),
        (u[(u.ResourceNotFound = -32002)] = "ResourceNotFound"),
        (u[(u.MissingRequiredClientCapability = -32021)] = "MissingRequiredClientCapability"),
        (u[(u.UnsupportedProtocolVersion = -32022)] = "UnsupportedProtocolVersion"),
        (u[(u.UrlElicitationRequired = -32042)] = "UrlElicitationRequired"),
        u)
      var oS = class e extends Error {
          static {
            Object.defineProperty(this, "mcpBrand", { value: "mcp.ProtocolError" })
          }
          static [Symbol.hasInstance](e) {
            return rB(this, e)
          }
          static isInstance(e) {
            if ("function" != typeof this)
              throw TypeError(
                "isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`",
              )
            return rB(this, e)
          }
          constructor(e, t, r) {
            ;(super(t), (this.code = e), (this.data = r), (this.name = "ProtocolError"), rG(this, new.target))
          }
          static fromError(t, r, o) {
            return t === ov.UrlElicitationRequired && o && o.elicitations
              ? new ob(o.elicitations, r)
              : t === ov.UnsupportedProtocolVersion && o && Array.isArray(o.supported) && "string" == typeof o.requested
                ? new oP({ supported: o.supported, requested: o.requested }, r)
                : (t === ov.InvalidParams || t === ov.ResourceNotFound) &&
                    "string" == typeof o?.uri &&
                    (t === ov.ResourceNotFound || 1 === Object.keys(o).length)
                  ? new o_(o.uri, r)
                  : t === ov.MissingRequiredClientCapability &&
                      o &&
                      null !== o.requiredCapabilities &&
                      "object" == typeof o.requiredCapabilities &&
                      !Array.isArray(o.requiredCapabilities)
                    ? new o$({ requiredCapabilities: o.requiredCapabilities }, r)
                    : new e(t, r, o)
          }
        },
        o_ = class extends oS {
          static {
            Object.defineProperty(this, "mcpBrand", { value: "mcp.ResourceNotFoundError" })
          }
          constructor(e, t = `Resource not found: ${e}`) {
            super(ov.InvalidParams, t, { uri: e })
          }
          get uri() {
            return this.data.uri
          }
        },
        ob = class extends oS {
          static {
            Object.defineProperty(this, "mcpBrand", { value: "mcp.UrlElicitationRequiredError" })
          }
          constructor(e, t = `URL elicitation${e.length > 1 ? "s" : ""} required`) {
            super(ov.UrlElicitationRequired, t, { elicitations: e })
          }
          get elicitations() {
            return this.data?.elicitations ?? []
          }
        },
        oP = class extends oS {
          static {
            Object.defineProperty(this, "mcpBrand", { value: "mcp.UnsupportedProtocolVersionError" })
          }
          constructor(e, t = `Unsupported protocol version: ${e.requested}`) {
            super(ov.UnsupportedProtocolVersion, t, e)
          }
          get supported() {
            return this.data.supported
          }
          get requested() {
            return this.data.requested
          }
        },
        o$ = class extends oS {
          static {
            Object.defineProperty(this, "mcpBrand", { value: "mcp.MissingRequiredClientCapabilityError" })
          }
          constructor(
            e,
            t = `Missing required client capabilities: ${Object.keys(e.requiredCapabilities).join(", ")}`,
          ) {
            super(ov.MissingRequiredClientCapability, t, e)
          }
          get requiredCapabilities() {
            return this.data.requiredCapabilities
          }
        }
      let ow = ["tools/call", "prompts/get", "resources/read"],
        oR = ["elicitation/create", "sampling/createMessage", "roots/list"]
      function oj() {
        if (n) return n
        let e = oh()
        return (n = {
          request: {
            "elicitation/create": M.Ikc({ method: M.euz("elicitation/create"), params: e.ElicitRequestParamsSchema }),
            "sampling/createMessage": M.Ikc({
              method: M.euz("sampling/createMessage"),
              params: e.CreateMessageRequestParamsSchema,
            }),
            "roots/list": M.Ikc({ method: M.euz("roots/list"), params: M._H3({}).optional() }),
          },
          response: {
            "elicitation/create": e.ElicitResultSchema,
            "sampling/createMessage": e.CreateMessageResultSchema,
            "roots/list": e.ListRootsResultSchema,
          },
        })
      }
      function ok(e) {
        return oR.includes(e)
      }
      function oE(e) {
        return ok(e) ? oj().request[e] : void 0
      }
      let oI = {
          "tools/call": null,
          "tools/list": null,
          "prompts/get": null,
          "prompts/list": null,
          "resources/list": null,
          "resources/templates/list": null,
          "resources/read": null,
          "completion/complete": null,
          "server/discover": null,
          "subscriptions/listen": null,
        },
        oC = {
          "notifications/cancelled": null,
          "notifications/progress": null,
          "notifications/message": null,
          "notifications/resources/updated": null,
          "notifications/resources/list_changed": null,
          "notifications/tools/list_changed": null,
          "notifications/prompts/list_changed": null,
          "notifications/subscriptions/acknowledged": null,
        }
      function ox(e) {
        return Object.prototype.hasOwnProperty.call(oI, e)
      }
      function oq(e) {
        return Object.prototype.hasOwnProperty.call(oC, e)
      }
      function oT(e) {
        return null !== e && "object" == typeof e && !Array.isArray(e)
      }
      function oY(e, t) {
        if (void 0 === e) return { ok: !1, reason: "not-in-era" }
        let r = e.safeParse(t)
        return r.success ? { ok: !0, value: r.data } : { ok: !1, reason: "invalid", message: String(r.error) }
      }
      ;(Object.keys(oI), Object.keys(oC))
      let oO = { ok: !1, reason: "not-in-era" },
        oM = [D, K],
        oN = {
          era: "2026-07-28",
          hasRequestMethod: ox,
          hasNotificationMethod: oq,
          hasInputRequestMethod: (e) => void 0 !== oE(e),
          validateRequest: (e, t) => oY(ox(e) ? oh().dispatchRequestSchemas[e] : void 0, t),
          validateResult: (e, t) =>
            oY(Object.prototype.hasOwnProperty.call(oI, e) ? oh().dispatchResultSchemas[e] : void 0, t),
          validateNotification: (e, t) => oY(oq(e) ? oh().notificationSchemas2026[e] : void 0, t),
          validateInputRequest: (e, t) => oY(oE(e), t),
          validateInputResponse: (e, t) => oY(ok(e) ? oj().response[e] : void 0, t),
          samplingResultVariant: () => oO,
          outboundEnvelope: (e) => ({
            [D]: e.protocolVersion,
            [V]: e.clientInfo,
            [K]: e.clientCapabilities,
            ...(void 0 !== e.logLevel && { [J]: e.logLevel }),
          }),
          validateEnvelopeMeta(e) {
            let t = []
            for (let r of oM) r in e || t.push({ key: r, problem: "missing" })
            let r = oh().RequestMetaEnvelopeSchema.safeParse(e)
            if (!r.success)
              for (let e of r.error.issues) {
                let r = e.path.map(String),
                  o = r.length > 0 ? r.join(".") : "_meta"
                ;(1 === r.length && t.some((e) => e.key === o && "missing" === e.problem)) ||
                  t.push({ key: o, problem: e.message })
              }
            return t
          },
          projectCallToolResult: (e) => r5(e),
          inputRequestSchema: oE,
          decodeResult(e, t) {
            if (!oT(t))
              return {
                kind: "invalid",
                error: new rQ(rX.InvalidResult, `Invalid result for ${e}: not an object`, { method: e }),
              }
            let r = t.resultType
            if (void 0 === r)
              return {
                kind: "invalid",
                error: new rQ(
                  rX.InvalidResult,
                  `Invalid result for ${e}: missing required resultType — servers implementing protocol revision 2026-07-28 MUST include it (the absent-means-complete bridge applies only to earlier-revision servers)`,
                  { method: e, violation: "missing-resultType" },
                ),
              }
            if ("string" != typeof r)
              return {
                kind: "invalid",
                error: new rQ(rX.InvalidResult, `Invalid result for ${e}: non-string resultType`, {
                  method: e,
                  resultType: r,
                }),
              }
            if ("input_required" === r) {
              let r = t.inputRequests,
                o = oT(r) ? r : {},
                a = t.requestState,
                s = void 0 === t._meta ? void 0 : oh().ResultMetaSchema.safeParse(t._meta),
                n = s?.success ? s.data : void 0
              return 0 === Object.keys(o).length && "string" != typeof a
                ? {
                    kind: "invalid",
                    error: new rQ(
                      rX.InvalidResult,
                      `Invalid result for ${e}: input_required carries neither inputRequests nor requestState (every input_required result must include at least one of the two)`,
                      { method: e, violation: "input-required-missing-both" },
                    ),
                  }
                : {
                    kind: "input_required",
                    inputRequests: o,
                    ...("string" == typeof a && { requestState: a }),
                    ...(void 0 !== n && { _meta: n }),
                  }
            }
            if ("complete" !== r)
              return {
                kind: "invalid",
                error: new rQ(rX.UnsupportedResultType, `Unsupported result type '${r}' for ${e}`, {
                  resultType: r,
                  method: e,
                }),
              }
            let o = (function () {
                if (i) return i
                let e = oh()
                return (i = {
                  "tools/call": e.CallToolResultSchema,
                  "tools/list": e.ListToolsResultSchema,
                  "prompts/get": e.GetPromptResultSchema,
                  "prompts/list": e.ListPromptsResultSchema,
                  "resources/list": e.ListResourcesResultSchema,
                  "resources/templates/list": e.ListResourceTemplatesResultSchema,
                  "resources/read": e.ReadResourceResultSchema,
                  "completion/complete": e.CompleteResultSchema,
                  "server/discover": e.DiscoverResultSchema,
                })
              })(),
              a = Object.hasOwn(o, e) ? o[e] : void 0
            if (void 0 !== a) {
              let r = a.safeParse(t)
              if (!r.success)
                return {
                  kind: "invalid",
                  error: new rQ(rX.InvalidResult, `Invalid result for ${e}: ${r.error}`, { method: e }),
                }
            }
            let s = { ...t }
            return (delete s.resultType, { kind: "complete", result: s })
          },
          encodeResult: (e, t, r) =>
            (function (e, t) {
              if (void 0 === t) return e
              let r = e._meta
              return void 0 === r
                ? { ...e, _meta: { [U]: t } }
                : null === r || "object" != typeof r || Array.isArray(r) || void 0 !== r[U]
                  ? e
                  : { ...e, _meta: { ...r, [U]: t } }
            })(
              (function (e, t) {
                var r, o
                let a = t[of]
                if ("complete" !== t.resultType || !om.includes(e)) {
                  let e
                  return void 0 === a ? t : ((e = { ...t }), delete e[of], e)
                }
                let s = og(t.ttlMs) ? t.ttlMs : void 0 !== (r = a) && og(r.ttlMs) ? r.ttlMs : 0,
                  n = oy(t.cacheScope)
                    ? t.cacheScope
                    : void 0 !== (o = a) && oy(o.cacheScope)
                      ? o.cacheScope
                      : "private",
                  i = { ...t, ttlMs: s, cacheScope: n }
                return (delete i[of], i)
              })(
                e,
                (function (e, t) {
                  let r = t.resultType
                  if (void 0 === r) return { ...t, resultType: "complete" }
                  if ("complete" === r || ow.includes(e)) return t
                  throw new oS(
                    ov.InternalError,
                    `Handler for ${e} returned resultType '${String(r)}', but results of ${e} only support 'complete' on protocol revision 2026-07-28`,
                  )
                })(
                  e,
                  (function (e, t) {
                    let r = t,
                      o = !1,
                      a = () => (o || ((r = { ...r }), (o = !0)), r),
                      s = t.tools
                    "tools/list" === e &&
                      Array.isArray(s) &&
                      s.some((e) => oT(e) && "execution" in e) &&
                      (a().tools = s.map((e) => {
                        if (!oT(e) || !("execution" in e)) return e
                        let t = { ...e }
                        return (delete t.execution, t)
                      }))
                    let n = t.capabilities
                    if (oT(n) && "tasks" in n) {
                      let e = { ...n }
                      ;(delete e.tasks, (a().capabilities = e))
                    }
                    return r
                  })(e, t),
                ),
              ),
              r,
            ),
          encodeErrorCode: (e) => (-32002 === e ? -32602 : e),
          checkInboundEnvelope(e) {
            if (void 0 === e.envelope)
              return "Request is missing the required _meta envelope for protocol revision 2026-07-28 (io.modelcontextprotocol/protocolVersion, io.modelcontextprotocol/clientCapabilities)"
            let t = oh().RequestMetaEnvelopeSchema.safeParse(e.envelope)
            if (!t.success)
              return `Invalid _meta envelope for protocol revision 2026-07-28: ${t.error.issues.map((e) => e.message).join("; ")}`
          },
        },
        oz = "2026-07-28"
      function oA(e) {
        return void 0 !== e && r2(e) ? oN : op
      }
      function oL(e) {
        return void 0 !== e.revision ? oA(e.revision).era : "modern" === e.era ? oN.era : op.era
      }
      function oH(e) {
        return oU.some((t) => t.hasRequestMethod(e))
      }
      function oD(e) {
        return oU.some((t) => t.hasNotificationMethod(e))
      }
      function oV(e) {
        return "tasks/get" === e || "tasks/cancel" === e
      }
      let oU = [op, oN]
      var oK = ((e) => {
        let t = {}
        for (var r in e) R(t, r, { get: e[r], enumerable: !0 })
        return t
      })({
        AnnotationsSchema: () => eJ,
        AudioContentSchema: () => tp,
        BaseMetadataSchema: () => e_,
        BaseRequestParamsSchema: () => et,
        BlobResourceContentsSchema: () => eU,
        BooleanSchemaSchema: () => tF,
        CallToolRequestParamsSchema: () => tk,
        CallToolRequestSchema: () => tE,
        CallToolResultSchema: () => tR,
        CancelTaskRequestSchema: () => r$,
        CancelTaskResultSchema: () => rw,
        CancelledNotificationParamsSchema: () => eg,
        CancelledNotificationSchema: () => ey,
        ClientCapabilitiesSchema: () => ej,
        ClientNotificationSchema: () => rj,
        ClientRequestSchema: () => rR,
        ClientResultSchema: () => rk,
        ClientTasksCapabilitySchema: () => ew,
        CompatibilityCallToolResultSchema: () => tj,
        CompleteRequestParamsSchema: () => ra,
        CompleteRequestSchema: () => rs,
        CompleteResultSchema: () => rn,
        ContentBlockSchema: () => tg,
        CreateMessageRequestParamsSchema: () => tV,
        CreateMessageRequestSchema: () => tU,
        CreateMessageResultSchema: () => tK,
        CreateMessageResultWithToolsSchema: () => tJ,
        CreateTaskResultSchema: () => rm,
        CursorSchema: () => W,
        DiscoverRequestSchema: () => eq,
        DiscoverResultSchema: () => eT,
        ElicitRequestFormParamsSchema: () => t3,
        ElicitRequestParamsSchema: () => t6,
        ElicitRequestSchema: () => t8,
        ElicitRequestURLParamsSchema: () => t4,
        ElicitResultSchema: () => rt,
        ElicitationCompleteNotificationParamsSchema: () => t7,
        ElicitationCompleteNotificationSchema: () => re,
        EmbeddedResourceSchema: () => tm,
        EmptyResultSchema: () => ef,
        EnumSchemaSchema: () => t9,
        GetPromptRequestParamsSchema: () => tl,
        GetPromptRequestSchema: () => tc,
        GetPromptResultSchema: () => tv,
        GetTaskPayloadRequestSchema: () => rS,
        GetTaskPayloadResultSchema: () => r_,
        GetTaskRequestSchema: () => ry,
        GetTaskResultSchema: () => rv,
        IconSchema: () => ev,
        IconsSchema: () => eS,
        ImageContentSchema: () => td,
        ImplementationSchema: () => eb,
        InitializeRequestParamsSchema: () => ek,
        InitializeRequestSchema: () => eE,
        InitializeResultSchema: () => eC,
        InitializedNotificationSchema: () => ex,
        JSONArraySchema: () => B,
        JSONObjectSchema: () => G,
        JSONRPCErrorResponseSchema: () => ep,
        JSONRPCMessageSchema: () => eh,
        JSONRPCNotificationSchema: () => eu,
        JSONRPCRequestSchema: () => ec,
        JSONRPCResponseSchema: () => em,
        JSONRPCResultResponseSchema: () => ed,
        JSONValueSchema: () => F,
        LegacyTitledEnumSchemaSchema: () => tX,
        ListChangedOptionsBaseSchema: () => tC,
        ListPromptsRequestSchema: () => tn,
        ListPromptsResultSchema: () => ti,
        ListResourceTemplatesRequestSchema: () => eW,
        ListResourceTemplatesResultSchema: () => eX,
        ListResourcesRequestSchema: () => eB,
        ListResourcesResultSchema: () => eZ,
        ListRootsRequestSchema: () => rl,
        ListRootsResultSchema: () => rc,
        ListTasksRequestSchema: () => rb,
        ListTasksResultSchema: () => rP,
        ListToolsRequestSchema: () => t$,
        ListToolsResultSchema: () => tw,
        LoggingLevelSchema: () => tx,
        LoggingMessageNotificationParamsSchema: () => tY,
        LoggingMessageNotificationSchema: () => tO,
        ModelHintSchema: () => tM,
        ModelPreferencesSchema: () => tN,
        MultiSelectEnumSchemaSchema: () => t2,
        NotificationSchema: () => es,
        NotificationsParamsSchema: () => ea,
        NumberSchemaSchema: () => tB,
        PaginatedRequestParamsSchema: () => ez,
        PaginatedRequestSchema: () => eA,
        PaginatedResultSchema: () => eL,
        PingRequestSchema: () => eY,
        PrimitiveSchemaDefinitionSchema: () => t5,
        ProgressNotificationParamsSchema: () => eM,
        ProgressNotificationSchema: () => eN,
        ProgressSchema: () => eO,
        ProgressTokenSchema: () => Z,
        PromptArgumentSchema: () => ta,
        PromptListChangedNotificationSchema: () => tS,
        PromptMessageSchema: () => ty,
        PromptReferenceSchema: () => ro,
        PromptSchema: () => ts,
        ReadResourceRequestParamsSchema: () => eQ,
        ReadResourceRequestSchema: () => e0,
        ReadResourceResultSchema: () => e1,
        RelatedTaskMetadataSchema: () => Q,
        RequestIdSchema: () => el,
        RequestMetaSchema: () => ee,
        RequestSchema: () => eo,
        ResourceContentsSchema: () => eH,
        ResourceLinkSchema: () => tf,
        ResourceListChangedNotificationSchema: () => e2,
        ResourceRequestParamsSchema: () => eQ,
        ResourceSchema: () => eF,
        ResourceTemplateReferenceSchema: () => rr,
        ResourceTemplateSchema: () => eG,
        ResourceUpdatedNotificationParamsSchema: () => tr,
        ResourceUpdatedNotificationSchema: () => to,
        ResultMetaObjectSchema: () => en,
        ResultSchema: () => ei,
        RoleSchema: () => eK,
        RootSchema: () => ri,
        RootsListChangedNotificationSchema: () => ru,
        SamplingContentSchema: () => tL,
        SamplingMessageContentBlockSchema: () => tH,
        SamplingMessageSchema: () => tD,
        ServerCapabilitiesSchema: () => eI,
        ServerNotificationSchema: () => rI,
        ServerRequestSchema: () => rE,
        ServerResultSchema: () => rC,
        ServerTasksCapabilitySchema: () => eR,
        SetLevelRequestParamsSchema: () => tq,
        SetLevelRequestSchema: () => tT,
        SingleSelectEnumSchemaSchema: () => tQ,
        StringSchemaSchema: () => tG,
        SubscribeRequestParamsSchema: () => eQ,
        SubscribeRequestSchema: () => e9,
        SubscriptionFilterSchema: () => e3,
        SubscriptionsAcknowledgedNotificationParamsSchema: () => e8,
        SubscriptionsAcknowledgedNotificationSchema: () => e7,
        SubscriptionsListenRequestParamsSchema: () => e4,
        SubscriptionsListenRequestSchema: () => e6,
        SubscriptionsListenResultMetaSchema: () => te,
        SubscriptionsListenResultSchema: () => tt,
        TaskAugmentedRequestParamsSchema: () => er,
        TaskCreationParamsSchema: () => rd,
        TaskMetadataSchema: () => X,
        TaskSchema: () => rh,
        TaskStatusNotificationParamsSchema: () => rf,
        TaskStatusNotificationSchema: () => rg,
        TaskStatusSchema: () => rp,
        TextContentSchema: () => tu,
        TextResourceContentsSchema: () => eD,
        TitledMultiSelectEnumSchemaSchema: () => t1,
        TitledSingleSelectEnumSchemaSchema: () => tW,
        ToolAnnotationsSchema: () => t_,
        ToolChoiceSchema: () => tz,
        ToolExecutionSchema: () => tb,
        ToolListChangedNotificationSchema: () => tI,
        ToolResultContentSchema: () => tA,
        ToolSchema: () => tP,
        ToolUseContentSchema: () => th,
        UnsubscribeRequestParamsSchema: () => eQ,
        UnsubscribeRequestSchema: () => e5,
        UntitledMultiSelectEnumSchemaSchema: () => t0,
        UntitledSingleSelectEnumSchemaSchema: () => tZ,
      })
      let oJ = (e) => ec.safeParse(e).success,
        oF = (e) => "object" == typeof e && null !== e && !Array.isArray(e) && "input_required" === e.resultType
      function oG(e) {
        return new Set(e.flatMap((e) => Object.keys(e.shape)))
      }
      function oB(e) {
        if (null == e) return !1
        let t = typeof e
        return ("object" === t || "function" === t) && "~standard" in e && "function" == typeof e["~standard"]?.validate
      }
      ;(ov.InvalidRequest,
        ov.UnsupportedProtocolVersion,
        ov.InvalidParams,
        ov.MethodNotFound,
        ov.InvalidParams,
        ov.MissingRequiredClientCapability,
        ov.ParseError,
        ov.InvalidRequest,
        ov.MethodNotFound,
        ov.UnsupportedProtocolVersion,
        ov.MissingRequiredClientCapability)
      let oZ = !1,
        oW = "draft-2020-12"
      async function oX(e, t) {
        let r = await e["~standard"].validate(t)
        return r.issues && r.issues.length > 0
          ? {
              success: !1,
              error: r.issues
                .map((e) =>
                  e.path?.length
                    ? `${e.path.map((e) => String("object" == typeof e ? e.key : e)).join(".")}: ${e.message}`
                    : e.message,
                )
                .join(", "),
            }
          : { success: !0, data: r.value }
      }
      let oQ = /\\\.\\d\{(\d+)\}/
      function o0(e) {
        return "object" == typeof e && null !== e && !Array.isArray(e)
      }
      let o1 = new Set(["$comment", "deprecated", "description", "examples", "readOnly", "title", "writeOnly"])
      function o2(e) {
        return o1.has(e) || e.startsWith("x-")
      }
      let o9 = new Set(["$schema", ...Object.keys(t3.shape.requestedSchema.shape)]),
        o5 = {
          string: oG([tG, tZ, tW, tX]),
          number: oG([tB]),
          integer: oG([tB]),
          boolean: oG([tF]),
          array: oG([t0, t1]),
        },
        o3 = new Set(tG.shape.format.unwrap().options)
      Object.assign(
        function (e) {
          let t = void 0 !== e.inputRequests && Object.keys(e.inputRequests).length > 0,
            r = "string" == typeof e.requestState
          if (!t && !r)
            throw TypeError(
              "inputRequired() requires at least one of inputRequests (with at least one entry) or requestState (spec: every InputRequiredResult MUST include at least one of the two)",
            )
          return {
            resultType: "input_required",
            ...(void 0 !== e.inputRequests && { inputRequests: e.inputRequests }),
            ...(void 0 !== e.requestState && { requestState: e.requestState }),
          }
        },
        {
          elicit(e) {
            try {
              return {
                method: "elicitation/create",
                params: (function (e) {
                  var t
                  if (!oB(e.requestedSchema)) return { ...e, mode: "form", requestedSchema: e.requestedSchema }
                  let r = e.requestedSchema["~standard"].vendor,
                    o = (function (e, t) {
                      let r = {},
                        o = []
                      for (let [a, s] of Object.entries(e))
                        "properties" === a && o0(s)
                          ? (r[a] = Object.fromEntries(
                              Object.entries(s).map(([e, r]) => [
                                e,
                                (function (e, t, r, o) {
                                  if (!o0(e)) return e
                                  let a = "string" == typeof e.type && Object.hasOwn(o5, e.type) ? o5[e.type] : void 0
                                  if (void 0 === a) return e
                                  let s = {}
                                  for (let [i, l] of Object.entries(e))
                                    if (a.has(i) || o2(i)) s[i] = l
                                    else if ("pattern" === i && "string" === e.type && "string" == typeof e.format)
                                      if (o3.has(e.format)) {
                                        var n
                                        ;("string" == typeof l &&
                                          ((n = e.format),
                                          "zod" !== r ||
                                            (function (e, t) {
                                              let r
                                              switch (e) {
                                                case "email":
                                                  r = [M.Rpp()]
                                                  break
                                                case "uri":
                                                  r = [M.OZ5()]
                                                  break
                                                case "date":
                                                  r = [N.p6()]
                                                  break
                                                case "date-time":
                                                  let o, a
                                                  ;((o = oQ.exec(t)),
                                                    (a = [void 0, -1, 0]),
                                                    o && a.push(Number(o[1])),
                                                    (r = [!1, !0].flatMap((e) =>
                                                      [!1, !0].flatMap((t) =>
                                                        a.map((r) => N.w$({ local: e, offset: t, precision: r })),
                                                      ),
                                                    )))
                                              }
                                              return new Set(
                                                r
                                                  .map((e) => {
                                                    let t
                                                    return (
                                                      (t = rJ.bl(e, { target: oW, io: "input" })),
                                                      "string" == typeof t.pattern ? t.pattern : void 0
                                                    )
                                                  })
                                                  .filter((e) => void 0 !== e),
                                              )
                                            })(n, l).has(l))) ||
                                          o.push(`${t}.${i}`)
                                      } else s[i] = l
                                    else o.push(`${t}.${i}`)
                                  return s
                                })(r, `properties.${e}`, t, o),
                              ]),
                            ))
                          : o9.has(a)
                            ? (r[a] = s)
                            : o2(a) || o.push(a)
                      if (o.length > 0)
                        throw new oS(
                          ov.InvalidParams,
                          `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${o.join(", ")}`,
                        )
                      return r
                    })(
                      (function (e) {
                        try {
                          return (function (e, t = "input") {
                            let r,
                              o = e["~standard"]
                            if (o.jsonSchema) r = o.jsonSchema[t]({ target: oW })
                            else if ("zod" === o.vendor) {
                              if (!("_zod" in e))
                                throw Error(
                                  "Schema appears to be from zod 3, which the SDK cannot convert to JSON Schema. Upgrade to zod >=4.2.0, or wrap your JSON Schema with fromJsonSchema().",
                                )
                              ;(oZ ||
                                ((oZ = !0),
                                console.warn(
                                  "[mcp-sdk] Your zod version does not implement `~standard.jsonSchema` (added in zod 4.2.0). Falling back to z.toJSONSchema(). Upgrade to zod >=4.2.0 to silence this warning.",
                                )),
                                (r = rJ.bl(e, { target: oW, io: t })))
                            } else
                              throw Error(
                                `Schema library "${o.vendor}" does not implement StandardJSONSchemaV1 (\`~standard.jsonSchema\`). Upgrade to a version that does, or wrap your JSON Schema with fromJsonSchema().`,
                              )
                            if ("output" === t)
                              return void 0 !== r.type ||
                                !(function e(t) {
                                  if (
                                    "properties" in t ||
                                    "patternProperties" in t ||
                                    "additionalProperties" in t ||
                                    "required" in t
                                  )
                                    return !0
                                  for (let r of ["oneOf", "anyOf", "allOf"]) {
                                    let o = t[r]
                                    if (Array.isArray(o) && o.length > 0)
                                      return o.every(
                                        (t) => null !== t && "object" == typeof t && ("object" === t.type || e(t)),
                                      )
                                  }
                                  return !1
                                })(r)
                                ? r
                                : { type: "object", ...r }
                            if (void 0 !== r.type && "object" !== r.type)
                              throw Error(
                                `MCP tool and prompt schemas must describe objects (got type: ${JSON.stringify(r.type)}). Wrap your schema in z.object({...}) or equivalent.`,
                              )
                            return { type: "object", ...r }
                          })(e, "input")
                        } catch (t) {
                          let e = t instanceof Error ? t.message : String(t)
                          throw new oS(
                            ov.InvalidParams,
                            `Elicitation requestedSchema must describe an object with flat primitive properties: ${e}`,
                          )
                        }
                      })(e.requestedSchema),
                      r,
                    ),
                    a = ((t = t3.shape.requestedSchema), rK.xL(t, o))
                  if (!a.success)
                    throw new oS(
                      ov.InvalidParams,
                      `Elicitation requestedSchema only supports flat primitive properties (string, number, integer, boolean, and string enums): ${(function (
                        e,
                        t,
                      ) {
                        if (!o0(e.properties)) return t
                        let r = Object.entries(e.properties)
                          .filter(([, e]) => !rK.xL(t5, e).success)
                          .map(([e]) => `properties.${e}`)
                        return r.length > 0 ? r.join(", ") : t
                      })(o, a.error.message)}`,
                    )
                  let s = (function e(t, r, o = "") {
                    return Array.isArray(t) && Array.isArray(r)
                      ? t.flatMap((t, a) => e(t, r[a], `${o}[${a}]`))
                      : o0(t) && o0(r)
                        ? Object.entries(t).flatMap(([t, a]) => {
                            let s = o ? `${o}.${t}` : t
                            return Object.prototype.hasOwnProperty.call(r, t) ? e(a, r[t], s) : o2(t) ? [] : [s]
                          })
                        : []
                  })(o, a.data)
                  if (s.length > 0)
                    throw new oS(
                      ov.InvalidParams,
                      `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${s.join(", ")}`,
                    )
                  let n = (a.data.required ?? []).filter(
                    (e) => !Object.prototype.hasOwnProperty.call(a.data.properties, e),
                  )
                  if (n.length > 0)
                    throw new oS(
                      ov.InvalidParams,
                      `Elicitation requestedSchema lists required properties that are not defined in properties: ${n.join(", ")}`,
                    )
                  return { ...e, mode: "form", requestedSchema: a.data }
                })(e),
              }
            } catch (e) {
              throw e instanceof oS ? TypeError(e.message, { cause: e }) : e
            }
          },
          elicitUrl: (e) => ({ method: "elicitation/create", params: { ...e, mode: "url" } }),
          createMessage: (e) => ({ method: "sampling/createMessage", params: e }),
          listRoots: () => ({ method: "roots/list" }),
        },
      )
      let o4 = {},
        o6 = {}
      function o8(e, t) {
        let r = e.slice(0, -6)
        ;((o4[r] = t), (o6[r] = (e) => t.safeParse(e).success))
      }
      for (let e of [
        "AnnotationsSchema",
        "AudioContentSchema",
        "BaseMetadataSchema",
        "BlobResourceContentsSchema",
        "BooleanSchemaSchema",
        "CallToolRequestSchema",
        "CallToolRequestParamsSchema",
        "CallToolResultSchema",
        "CancelledNotificationSchema",
        "CancelledNotificationParamsSchema",
        "CancelTaskRequestSchema",
        "CancelTaskResultSchema",
        "ClientCapabilitiesSchema",
        "ClientNotificationSchema",
        "ClientRequestSchema",
        "ClientResultSchema",
        "CompatibilityCallToolResultSchema",
        "CompleteRequestSchema",
        "CompleteRequestParamsSchema",
        "CompleteResultSchema",
        "ContentBlockSchema",
        "CreateMessageRequestSchema",
        "CreateMessageRequestParamsSchema",
        "CreateMessageResultSchema",
        "CreateMessageResultWithToolsSchema",
        "CreateTaskResultSchema",
        "CursorSchema",
        "DiscoverRequestSchema",
        "DiscoverResultSchema",
        "ElicitationCompleteNotificationSchema",
        "ElicitationCompleteNotificationParamsSchema",
        "ElicitRequestSchema",
        "ElicitRequestFormParamsSchema",
        "ElicitRequestParamsSchema",
        "ElicitRequestURLParamsSchema",
        "ElicitResultSchema",
        "EmbeddedResourceSchema",
        "EmptyResultSchema",
        "EnumSchemaSchema",
        "GetPromptRequestSchema",
        "GetPromptRequestParamsSchema",
        "GetPromptResultSchema",
        "GetTaskPayloadRequestSchema",
        "GetTaskPayloadResultSchema",
        "GetTaskRequestSchema",
        "GetTaskResultSchema",
        "IconSchema",
        "IconsSchema",
        "ImageContentSchema",
        "ImplementationSchema",
        "InitializedNotificationSchema",
        "InitializeRequestSchema",
        "InitializeRequestParamsSchema",
        "InitializeResultSchema",
        "JSONArraySchema",
        "JSONObjectSchema",
        "JSONRPCErrorResponseSchema",
        "JSONRPCMessageSchema",
        "JSONRPCNotificationSchema",
        "JSONRPCRequestSchema",
        "JSONRPCResponseSchema",
        "JSONRPCResultResponseSchema",
        "JSONValueSchema",
        "LegacyTitledEnumSchemaSchema",
        "ListPromptsRequestSchema",
        "ListPromptsResultSchema",
        "ListResourcesRequestSchema",
        "ListResourcesResultSchema",
        "ListResourceTemplatesRequestSchema",
        "ListResourceTemplatesResultSchema",
        "ListRootsRequestSchema",
        "ListRootsResultSchema",
        "ListTasksRequestSchema",
        "ListTasksResultSchema",
        "ListToolsRequestSchema",
        "ListToolsResultSchema",
        "LoggingLevelSchema",
        "LoggingMessageNotificationSchema",
        "LoggingMessageNotificationParamsSchema",
        "ModelHintSchema",
        "ModelPreferencesSchema",
        "MultiSelectEnumSchemaSchema",
        "NotificationSchema",
        "NumberSchemaSchema",
        "PaginatedRequestSchema",
        "PaginatedRequestParamsSchema",
        "PaginatedResultSchema",
        "PingRequestSchema",
        "PrimitiveSchemaDefinitionSchema",
        "ProgressSchema",
        "ProgressNotificationSchema",
        "ProgressNotificationParamsSchema",
        "ProgressTokenSchema",
        "PromptSchema",
        "PromptArgumentSchema",
        "PromptListChangedNotificationSchema",
        "PromptMessageSchema",
        "PromptReferenceSchema",
        "ReadResourceRequestSchema",
        "ReadResourceRequestParamsSchema",
        "ReadResourceResultSchema",
        "RelatedTaskMetadataSchema",
        "RequestSchema",
        "RequestIdSchema",
        "RequestMetaSchema",
        "ResourceSchema",
        "ResourceContentsSchema",
        "ResourceLinkSchema",
        "ResourceListChangedNotificationSchema",
        "ResourceRequestParamsSchema",
        "ResourceTemplateSchema",
        "ResourceTemplateReferenceSchema",
        "ResourceUpdatedNotificationSchema",
        "ResourceUpdatedNotificationParamsSchema",
        "ResultMetaObjectSchema",
        "ResultSchema",
        "RoleSchema",
        "RootSchema",
        "RootsListChangedNotificationSchema",
        "SamplingContentSchema",
        "SamplingMessageSchema",
        "SamplingMessageContentBlockSchema",
        "ServerCapabilitiesSchema",
        "ServerNotificationSchema",
        "ServerRequestSchema",
        "ServerResultSchema",
        "SetLevelRequestSchema",
        "SetLevelRequestParamsSchema",
        "SingleSelectEnumSchemaSchema",
        "StringSchemaSchema",
        "SubscribeRequestSchema",
        "SubscribeRequestParamsSchema",
        "SubscriptionFilterSchema",
        "SubscriptionsAcknowledgedNotificationSchema",
        "SubscriptionsAcknowledgedNotificationParamsSchema",
        "SubscriptionsListenRequestSchema",
        "SubscriptionsListenRequestParamsSchema",
        "SubscriptionsListenResultSchema",
        "SubscriptionsListenResultMetaSchema",
        "TaskAugmentedRequestParamsSchema",
        "TaskCreationParamsSchema",
        "TaskMetadataSchema",
        "TaskSchema",
        "TaskStatusSchema",
        "TaskStatusNotificationSchema",
        "TaskStatusNotificationParamsSchema",
        "TextContentSchema",
        "TextResourceContentsSchema",
        "TitledMultiSelectEnumSchemaSchema",
        "TitledSingleSelectEnumSchemaSchema",
        "ToolSchema",
        "ToolAnnotationsSchema",
        "ToolChoiceSchema",
        "ToolExecutionSchema",
        "ToolListChangedNotificationSchema",
        "ToolResultContentSchema",
        "ToolUseContentSchema",
        "UnsubscribeRequestSchema",
        "UnsubscribeRequestParamsSchema",
        "UntitledMultiSelectEnumSchemaSchema",
        "UntitledSingleSelectEnumSchemaSchema",
      ])
        o8(e, oK[e])
      for (let [e, t] of Object.entries({
        IdJagTokenExchangeResponseSchema: rN,
        OAuthClientInformationFullSchema: rD,
        OAuthClientInformationSchema: rH,
        OAuthClientMetadataSchema: rL,
        OAuthClientRegistrationErrorSchema: rV,
        OAuthErrorResponseSchema: rz,
        OAuthMetadataSchema: rT,
        OAuthProtectedResourceMetadataSchema: rq,
        OAuthTokenRevocationRequestSchema: rU,
        OAuthTokensSchema: rM,
        OpenIdProviderDiscoveryMetadataSchema: rO,
        OpenIdProviderMetadataSchema: rY,
      }))
        o8(e, t)
      ;(Object.freeze(o4), Object.freeze(o6))
      let o7 = [D, V, K, J],
        ae = ["inputResponses", "requestState"]
      function at(e, t) {
        let r = e.params
        if (!an(r)) return { message: e, lifted: {} }
        let o = r._meta,
          a = an(o) ? o7.filter((e) => e in o) : [],
          s = "request" === t ? ae.filter((e) => e in r) : []
        if (0 === a.length && 0 === s.length) return { message: e, lifted: {} }
        let n = {},
          i = { ...r }
        if (a.length > 0 && an(o)) {
          let e = {},
            t = { ...o }
          for (let r of a) ((e[r] = o[r]), delete t[r])
          ;((n.envelope = e), Object.keys(t).length > 0 ? (i._meta = t) : delete i._meta)
        }
        for (let e of s)
          ("inputResponses" === e && (n.inputResponses = i[e]),
            "requestState" === e && (n.requestState = i[e]),
            delete i[e])
        return { message: { ...e, params: i }, lifted: n }
      }
      function ar(e, t) {
        let r = e.validateResult(t, void 0)
        if (r.ok || "not-in-era" !== r.reason)
          return {
            "~standard": {
              version: 1,
              vendor: "mcp-wire-codec",
              validate(r) {
                let o = e.validateResult(t, r)
                return o.ok
                  ? { value: o.value }
                  : { issues: [{ message: "invalid" === o.reason ? o.message : `not-in-era: ${t}` }] }
              },
            },
          }
      }
      let ao = ((d = void 0), () => d)
      function aa(e, t) {
        return { ...e, mcpReq: { ...e.mcpReq, requestState: () => t } }
      }
      var as = class {
        _transport
        _requestMessageId = 0
        _requestHandlers = new Map()
        _customSchemaRequestMethods = new Set()
        _requestHandlerAbortControllers = new Map()
        _notificationHandlers = new Map()
        _responseHandlers = new Map()
        _progressHandlers = new Map()
        _timeoutInfo = new Map()
        _pendingDebouncedNotifications = new Set()
        _negotiatedProtocolVersion
        _supportedProtocolVersions
        onclose
        onerror
        fallbackRequestHandler
        fallbackNotificationHandler
        constructor(e) {
          ;((this._options = e),
            (this._supportedProtocolVersions = e?.supportedProtocolVersions ?? H),
            this.setNotificationHandler("notifications/cancelled", (e) => {
              this._oncancel(e)
            }),
            this.setNotificationHandler("notifications/progress", (e) => {
              this._onprogress(e)
            }),
            this.setRequestHandler("ping", (e) => ({})))
        }
        _shouldDropInbound(e) {}
        _outboundMetaEnvelope() {}
        _envelopeOutbound(e) {
          let t = this._outboundMetaEnvelope()
          if (void 0 === t) return e
          let r = e.params ?? {}
          return { ...e, params: { ...r, _meta: { ...t, ...r._meta } } }
        }
        _resolveNonCompleteResult(e, t) {
          return Promise.reject(
            new rQ(rX.UnsupportedResultType, `Unsupported result type '${e.kind}' for ${t.request.method}`, {
              resultType: e.kind,
              method: t.request.method,
            }),
          )
        }
        _getRequestHandler(e) {
          return this._requestHandlers.get(e)
        }
        async _oncancel(e) {
          void 0 !== e.params.requestId &&
            this._requestHandlerAbortControllers.get(e.params.requestId)?.abort(e.params.reason)
        }
        _setupTimeout(e, t, r, o, a = !1) {
          this._timeoutInfo.set(e, {
            timeoutId: setTimeout(o, t),
            startTime: Date.now(),
            timeout: t,
            maxTotalTimeout: r,
            resetTimeoutOnProgress: a,
            onTimeout: o,
          })
        }
        _resetTimeout(e) {
          let t = this._timeoutInfo.get(e)
          if (!t) return !1
          let r = Date.now() - t.startTime
          if (t.maxTotalTimeout && r >= t.maxTotalTimeout)
            throw (
              this._timeoutInfo.delete(e),
              new rQ(rX.RequestTimeout, "Maximum total timeout exceeded", {
                maxTotalTimeout: t.maxTotalTimeout,
                totalElapsed: r,
              })
            )
          return (clearTimeout(t.timeoutId), (t.timeoutId = setTimeout(t.onTimeout, t.timeout)), !0)
        }
        _cleanupTimeout(e) {
          let t = this._timeoutInfo.get(e)
          t && (clearTimeout(t.timeoutId), this._timeoutInfo.delete(e))
        }
        async connect(e) {
          this._transport = e
          let t = this.transport?.onclose
          this._transport.onclose = () => {
            try {
              t?.()
            } finally {
              this._onclose()
            }
          }
          let r = this.transport?.onerror
          this._transport.onerror = (e) => {
            ;(r?.(e), this._onerror(e))
          }
          let o = this._transport?.onmessage
          ;((this._transport.onmessage = (e, t) => {
            if ((o?.(e, t), ed.safeParse(e).success || ep.safeParse(e).success)) this._onresponse(e)
            else if (oJ(e)) this._onrequest(e, t)
            else
              eu.safeParse(e).success
                ? this._onnotification(e, t)
                : this._onerror(Error(`Unknown message type: ${JSON.stringify(e)}`))
          }),
            e.setSupportedProtocolVersions?.(this._supportedProtocolVersions),
            await this._transport.start())
        }
        _onclose() {
          let e = this._responseHandlers
          for (let e of ((this._responseHandlers = new Map()),
          this._progressHandlers.clear(),
          this._pendingDebouncedNotifications.clear(),
          this._timeoutInfo.values()))
            clearTimeout(e.timeoutId)
          this._timeoutInfo.clear()
          let t = this._requestHandlerAbortControllers
          this._requestHandlerAbortControllers = new Map()
          let r = new rQ(rX.ConnectionClosed, "Connection closed")
          this._transport = void 0
          try {
            this.onclose?.()
          } finally {
            for (let t of e.values()) t(r)
            for (let e of t.values()) e.abort(r)
          }
        }
        _onerror(e) {
          this.onerror?.(e)
        }
        _onnotification(e, t) {
          let { message: r } = at(e, "notification"),
            o = this._negotiatedWireCodec()
          if (t?.classification === void 0 && "drop" === this._shouldDropInbound(e)) return
          if (t?.classification !== void 0) {
            let e = oL(t.classification)
            if (e !== o.era)
              return void this._onerror(
                Error(
                  `Era mismatch on inbound notification '${r.method}': classified as ${e} but this instance serves ${o.era}`,
                ),
              )
          }
          if (oD(r.method) && !o.hasNotificationMethod(r.method)) return
          let a = this._notificationHandlers.get(r.method),
            s = this.fallbackNotificationHandler
          ;(void 0 !== a || void 0 !== s) &&
            Promise.resolve()
              .then(() => (void 0 === a ? s(r) : a(r, o)))
              .catch((e) => this._onerror(Error(`Uncaught error in notification handler: ${e}`)))
        }
        _onrequest(e, t) {
          var r
          let { message: o, lifted: a } = at(e, "request"),
            s = this._negotiatedWireCodec()
          if (t?.classification === void 0 && "drop" === this._shouldDropInbound(e))
            return void this._onerror(
              Error(`Dropped inbound request '${e.method}': not servable on this connection's protocol era`),
            )
          let n = this._transport,
            i = (e, t, r) => {
              let a = { jsonrpc: "2.0", id: o.id, error: { code: e, message: t, ...(void 0 !== r && { data: r }) } }
              n?.send(a).catch((e) => this._onerror(Error(`Failed to send an error response: ${e}`)))
            }
          if (t?.classification !== void 0) {
            let e = oL(t.classification)
            if (e !== s.era) {
              this._onerror(
                Error(
                  `Era mismatch on inbound request '${o.method}': classified as ${e} but this instance serves ${s.era}`,
                ),
              )
              let r = t.classification.revision ?? e
              i(ov.UnsupportedProtocolVersion, `Unsupported protocol version: ${r}`, {
                supported: this._supportedProtocolVersions,
                requested: r,
              })
              return
            }
          }
          if (
            oH(o.method) &&
            !s.hasRequestMethod(o.method) &&
            !(oV(o.method) && this._customSchemaRequestMethods.has(o.method))
          )
            return void i(ov.MethodNotFound, "Method not found")
          let l = this._requestHandlers.get(o.method) ?? this.fallbackRequestHandler
          if (void 0 === l) return void i(ov.MethodNotFound, "Method not found")
          let c = s.checkInboundEnvelope(a)
          if (void 0 !== c) return void i(ov.InvalidParams, c)
          let u = (e, t) =>
              this._notificationViaCodec(this._resolveOutboundCodec(e.method), e, { ...t, relatedRequestId: o.id }),
            d = (e, t, r) =>
              this._requestWithSchemaViaCodec(this._resolveOutboundCodec(e.method), e, t, {
                ...r,
                relatedRequestId: o.id,
              }),
            p = new AbortController()
          this._requestHandlerAbortControllers.set(o.id, p)
          let h =
              void 0 === a.inputResponses
                ? void 0
                : (function (e) {
                    let t = {},
                      r = []
                    if (!ai(e)) return { accepted: t, droppedKeys: r }
                    for (let [o, a] of Object.entries(e)) {
                      if (!ai(a) || "method" in a || "result" in a) {
                        r.push(o)
                        continue
                      }
                      t[o] = a
                    }
                    return { accepted: t, droppedKeys: r }
                  })(a.inputResponses),
            m = {
              sessionId: n?.sessionId,
              mcpReq: {
                id: o.id,
                method: o.method,
                _meta: o.params?._meta,
                ...(void 0 !== a.envelope && { envelope: a.envelope }),
                ...(void 0 !== h && { inputResponses: h.accepted }),
                ...(void 0 !== h && h.droppedKeys.length > 0 && { droppedInputResponseKeys: h.droppedKeys }),
                requestState: void 0 === a.requestState ? ao : ((r = a.requestState), () => r),
                signal: p.signal,
                send: (e, t, r) => {
                  let o = this._resolveOutboundCodec(e.method)
                  if ((this._assertOutboundRequestInEra(o, e.method), oB(t))) return d(e, t, r)
                  let a = ar(o, e.method)
                  if (void 0 === a)
                    throw TypeError(
                      `'${e.method}' is not a spec method; pass a result schema as the second argument to ctx.mcpReq.send().`,
                    )
                  return d(e, a, t)
                },
                notify: u,
              },
              http: t?.authInfo ? { authInfo: t.authInfo } : void 0,
            },
            f = this.buildContext(m, t)
          Promise.resolve()
            .then(() => l(o, f))
            .then(
              async (e) => {
                let t
                if (p.signal.aborted) return
                try {
                  t = s.encodeResult(o.method, e, this._outboundServerInfo())
                } catch (e) {
                  ;(this._onerror(Error(`Failed to encode result for ${o.method}: ${e}`)),
                    i(ov.InternalError, "Internal error"))
                  return
                }
                let r = { result: t, jsonrpc: "2.0", id: o.id }
                await n?.send(r)
              },
              async (e) => {
                if (p.signal.aborted) return
                let t = Number.isSafeInteger(e.code) ? e.code : ov.InternalError,
                  r = {
                    jsonrpc: "2.0",
                    id: o.id,
                    error: {
                      code: s.encodeErrorCode(t),
                      message: e.message ?? "Internal error",
                      ...(void 0 !== e.data && { data: e.data }),
                    },
                  }
                await n?.send(r)
              },
            )
            .catch((e) => this._onerror(Error(`Failed to send response: ${e}`)))
            .finally(() => {
              this._requestHandlerAbortControllers.get(o.id) === p && this._requestHandlerAbortControllers.delete(o.id)
            })
        }
        _onprogress(e) {
          let { progressToken: t, ...r } = e.params,
            o = Number(t),
            a = this._progressHandlers.get(o)
          if (!a)
            return void this._onerror(
              Error(`Received a progress notification for an unknown token: ${JSON.stringify(e)}`),
            )
          let s = this._responseHandlers.get(o),
            n = this._timeoutInfo.get(o)
          if (n && s && n.resetTimeoutOnProgress)
            try {
              this._resetTimeout(o)
            } catch (e) {
              ;(this._responseHandlers.delete(o), this._progressHandlers.delete(o), this._cleanupTimeout(o), s(e))
              return
            }
          a(r)
        }
        _onresponse(e) {
          let t = Number(e.id),
            r = this._responseHandlers.get(t)
          void 0 === r
            ? this._onerror(Error(`Received a response for an unknown message ID: ${JSON.stringify(e)}`))
            : (this._responseHandlers.delete(t),
              this._cleanupTimeout(t),
              this._progressHandlers.delete(t),
              r(ed.safeParse(e).success ? e : oS.fromError(e.error.code, e.error.message, e.error.data)))
        }
        get transport() {
          return this._transport
        }
        async close() {
          await this._transport?.close()
        }
        request(e, t, r) {
          let o = this._resolveOutboundCodec(e.method)
          if (oB(t))
            return (
              oV(e.method) || this._assertOutboundRequestInEra(o, e.method),
              this._requestWithSchemaViaCodec(o, e, t, r)
            )
          this._assertOutboundRequestInEra(o, e.method)
          let a = ar(o, e.method)
          if (void 0 === a)
            throw TypeError(
              `'${e.method}' is not a spec method; pass a result schema as the second argument to request().`,
            )
          return this._requestWithSchemaViaCodec(o, e, a, t)
        }
        _negotiatedWireCodec() {
          return oA(this._negotiatedProtocolVersion)
        }
        _wireCodec() {
          return this._negotiatedWireCodec()
        }
        _resolveOutboundCodec(e) {
          if (void 0 === this._negotiatedProtocolVersion) {
            let t = (function (e) {
              switch (e) {
                case "initialize":
                case "notifications/initialized":
                  return oA(void 0)
                case "server/discover":
                  return oA(oz)
                default:
                  return
              }
            })(e)
            if (t) return t
          }
          return this._negotiatedWireCodec()
        }
        _assertOutboundRequestInEra(e, t) {
          if (oH(t) && !e.hasRequestMethod(t))
            throw new rQ(
              rX.MethodNotSupportedByProtocolVersion,
              `Method '${t}' is not supported by the negotiated protocol version (wire era ${e.era})`,
              { method: t, era: e.era },
            )
        }
        _requestWithSchema(e, t, r) {
          let o = this._resolveOutboundCodec(e.method)
          return (this._assertOutboundRequestInEra(o, e.method), this._requestWithSchemaViaCodec(o, e, t, r))
        }
        _requestWithSchemaViaCodec(e, t, r, o) {
          let a,
            s,
            { relatedRequestId: n, resumptionToken: i, onresumptiontoken: l, headers: c } = o ?? {},
            u = Date.now()
          return new Promise((d, p) => {
            let h = (e) => {
              p(e)
            }
            if (!this._transport) return void h(Error("Not connected"))
            if (this._options?.enforceStrictCapabilities === !0)
              try {
                this.assertCapabilityForMethod(t.method)
              } catch (e) {
                h(e)
                return
              }
            if (o?.signal?.aborted) {
              let e = o.signal.reason
              throw e instanceof rQ ? e : new rQ(rX.RequestTimeout, String(e))
            }
            let m = e.era === oz && !0 === this._transport.hasPerRequestStream ? new AbortController() : void 0,
              f = this._requestMessageId++
            s = f
            let g = { ...t, jsonrpc: "2.0", id: f }
            o?.onprogress &&
              (this._progressHandlers.set(f, o.onprogress),
              (g.params = { ...t.params, _meta: { ...t.params?._meta, progressToken: f } }))
            let y = this._envelopeOutbound(g),
              v = !1,
              S = (e) => {
                v ||
                  (this._progressHandlers.delete(f),
                  void 0 === m
                    ? "initialize" !== t.method &&
                      this._transport
                        ?.send(
                          this._envelopeOutbound({
                            jsonrpc: "2.0",
                            method: "notifications/cancelled",
                            params: { requestId: f, reason: String(e) },
                          }),
                          { relatedRequestId: n, resumptionToken: i, onresumptiontoken: l },
                        )
                        .catch((e) => this._onerror(Error(`Failed to send cancellation: ${e}`)))
                    : m.abort(),
                  p(e instanceof rQ ? e : new rQ(rX.RequestTimeout, String(e))))
              }
            ;(this._responseHandlers.set(f, (a) => {
              let s
              if (!o?.signal?.aborted) {
                if (((v = !0), a instanceof Error)) return p(a)
                try {
                  s = e.decodeResult(t.method, a.result)
                } catch (e) {
                  return p(e instanceof Error ? e : Error(String(e)))
                }
                if ("invalid" === s.kind) return p(s.error)
                if ("input_required" === s.kind) {
                  var n
                  return o?.allowInputRequired === !0
                    ? d({
                        resultType: "input_required",
                        inputRequests: (n = s).inputRequests,
                        ...(void 0 !== n.requestState && { requestState: n.requestState }),
                        ...(void 0 !== n._meta && { _meta: n._meta }),
                      })
                    : d(
                        this._resolveNonCompleteResult(s, {
                          codec: e,
                          request: t,
                          resultSchema: r,
                          options: o,
                          flowStartedAt: u,
                          retry: (o, a) =>
                            this._requestWithSchemaViaCodec(
                              e,
                              void 0 === o ? { method: t.method } : { method: t.method, params: o },
                              r,
                              a,
                            ),
                        }),
                      )
                }
                oX(r, s.result).then((e) => {
                  e.success ? d(e.data) : p(new rQ(rX.InvalidResult, `Invalid result for ${t.method}: ${e.error}`))
                }, p)
              }
            }),
              (a = () => S(o?.signal?.reason)),
              o?.signal?.addEventListener("abort", a, { once: !0 }))
            let _ = o?.timeout ?? 6e4
            ;(this._setupTimeout(
              f,
              _,
              o?.maxTotalTimeout,
              () => S(new rQ(rX.RequestTimeout, "Request timed out", { timeout: _ })),
              o?.resetTimeoutOnProgress ?? !1,
            ),
              this._transport
                .send(y, {
                  relatedRequestId: n,
                  resumptionToken: i,
                  onresumptiontoken: l,
                  headers: c,
                  requestSignal: m?.signal,
                })
                .catch((e) => {
                  ;(this._progressHandlers.delete(f), p(e))
                }))
          }).finally(() => {
            ;(a && o?.signal?.removeEventListener("abort", a),
              void 0 !== s && (this._responseHandlers.delete(s), this._cleanupTimeout(s)))
          })
        }
        async notification(e, t) {
          return await this._notificationViaCodec(this._resolveOutboundCodec(e.method), e, t)
        }
        async _notificationViaCodec(e, t, r) {
          if (!this._transport) throw new rQ(rX.NotConnected, "Not connected")
          if (oD(t.method) && !e.hasNotificationMethod(t.method))
            throw new rQ(
              rX.MethodNotSupportedByProtocolVersion,
              `Notification '${t.method}' is not supported by the negotiated protocol version (wire era ${e.era})`,
              { method: t.method, era: e.era },
            )
          this.assertNotificationCapability(t.method)
          let o = this._envelopeOutbound({ jsonrpc: "2.0", ...t })
          if (
            (this._options?.debouncedNotificationMethods ?? []).includes(t.method) &&
            !t.params &&
            r?.relatedRequestId === void 0
          ) {
            if (this._pendingDebouncedNotifications.has(t.method)) return
            ;(this._pendingDebouncedNotifications.add(t.method),
              Promise.resolve().then(() => {
                ;(this._pendingDebouncedNotifications.delete(t.method),
                  this._transport && this._transport?.send(o, r).catch((e) => this._onerror(e)))
              }))
            return
          }
          await this._transport.send(o, r)
        }
        setRequestHandler(e, t, r) {
          let o
          if ((this.assertRequestHandlerCapability(e), "function" == typeof t)) {
            if (!oH(e))
              throw TypeError(
                `'${e}' is not a spec request method; pass schemas as the second argument to setRequestHandler().`,
              )
            o = (r, o) => {
              let a = this._negotiatedWireCodec(),
                s = a.validateRequest(e, r)
              if ((s.ok || "not-in-era" !== s.reason || (s = a.validateInputRequest(e, r)), !s.ok)) {
                if ("not-in-era" === s.reason)
                  throw new oS(ov.InternalError, `No wire schema for ${e} in the resolved era`)
                throw Error(s.message)
              }
              return Promise.resolve(t(s.value, o))
            }
          } else if (r)
            o = async (o, a) => {
              let s = await oX(t.params, { ...o.params })
              if (!s.success) throw new oS(ov.InvalidParams, `Invalid params for ${e}: ${s.error}`)
              return r(s.data, a)
            }
          else throw TypeError("setRequestHandler: handler is required")
          ;("function" == typeof t
            ? this._customSchemaRequestMethods.delete(e)
            : this._customSchemaRequestMethods.add(e),
            this._requestHandlers.set(e, this._wrapHandler(e, o)))
        }
        _wrapHandler(e, t) {
          return t
        }
        _outboundServerInfo() {}
        removeRequestHandler(e) {
          ;(this._requestHandlers.delete(e), this._customSchemaRequestMethods.delete(e))
        }
        assertCanSetRequestHandler(e) {
          if (this._requestHandlers.has(e))
            throw Error(`A request handler for ${e} already exists, which would be overridden`)
        }
        setNotificationHandler(e, t, r) {
          if ("function" == typeof t) {
            if (!oD(e))
              throw TypeError(
                `'${e}' is not a spec notification method; pass schemas as the second argument to setNotificationHandler().`,
              )
            this._notificationHandlers.set(e, (r, o) => {
              let a = o.validateNotification(e, r)
              if (!a.ok) {
                if ("not-in-era" === a.reason)
                  throw new oS(ov.InternalError, `No wire schema for ${e} in the resolved era`)
                throw Error(a.message)
              }
              return Promise.resolve(t(a.value))
            })
            return
          }
          if (!r) throw TypeError("setNotificationHandler: handler is required")
          this._notificationHandlers.set(e, async (o) => {
            let a = await oX(t.params, { ...o.params })
            if (!a.success) throw new oS(ov.InvalidParams, `Invalid params for notification ${e}: ${a.error}`)
            await r(a.data, o)
          })
        }
        removeNotificationHandler(e) {
          this._notificationHandlers.delete(e)
        }
      }
      function an(e) {
        return null !== e && "object" == typeof e && !Array.isArray(e)
      }
      function ai(e) {
        return "object" == typeof e && null !== e && !Array.isArray(e)
      }
      var al = x(
          C((e) => {
            var t =
                /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,
              r = /\\([\u000b\u0020-\u00ff])/g,
              o = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/
            function a(e) {
              ;((this.parameters = Object.create(null)), (this.type = e))
            }
            e.parse = function (e) {
              if (!e) throw TypeError("argument string is required")
              var s,
                n,
                i,
                l =
                  "object" == typeof e
                    ? (function (e) {
                        var t
                        if (
                          ("function" == typeof e.getHeader
                            ? (t = e.getHeader("content-type"))
                            : "object" == typeof e.headers && (t = e.headers && e.headers["content-type"]),
                          "string" != typeof t)
                        )
                          throw TypeError("content-type header is missing from object")
                        return t
                      })(e)
                    : e
              if ("string" != typeof l) throw TypeError("argument string is required to be a string")
              var c = l.indexOf(";"),
                u = -1 !== c ? l.slice(0, c).trim() : l.trim()
              if (!o.test(u)) throw TypeError("invalid media type")
              var d = new a(u.toLowerCase())
              if (-1 !== c) {
                for (t.lastIndex = c; (n = t.exec(l));) {
                  if (n.index !== c) throw TypeError("invalid parameter format")
                  ;((c += n[0].length),
                    (s = n[1].toLowerCase()),
                    34 === (i = n[2]).charCodeAt(0) &&
                      -1 !== (i = i.slice(1, -1)).indexOf("\\") &&
                      (i = i.replace(r, "$1")),
                    (d.parameters[s] = i))
                }
                if (c !== l.length) throw TypeError("invalid parameter format")
              }
              return d
            }
          })(),
          1,
        ),
        ac = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.regexpCode =
              e.getEsmExportName =
              e.getProperty =
              e.safeStringify =
              e.stringify =
              e.strConcat =
              e.addCodeArg =
              e.str =
              e._ =
              e.nil =
              e._Code =
              e.Name =
              e.IDENTIFIER =
              e._CodeOrName =
                void 0))
          var t = class {}
          ;((e._CodeOrName = t), (e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i))
          var r = class extends t {
            constructor(t) {
              if ((super(), !e.IDENTIFIER.test(t))) throw Error("CodeGen: name must be a valid identifier")
              this.str = t
            }
            toString() {
              return this.str
            }
            emptyStr() {
              return !1
            }
            get names() {
              return { [this.str]: 1 }
            }
          }
          e.Name = r
          var o = class extends t {
            constructor(e) {
              ;(super(), (this._items = "string" == typeof e ? [e] : e))
            }
            toString() {
              return this.str
            }
            emptyStr() {
              if (this._items.length > 1) return !1
              let e = this._items[0]
              return "" === e || '""' === e
            }
            get str() {
              var e
              return null != (e = this._str) ? e : (this._str = this._items.reduce((e, t) => `${e}${t}`, ""))
            }
            get names() {
              var e
              return null != (e = this._names)
                ? e
                : (this._names = this._items.reduce(
                    (e, t) => (t instanceof r && (e[t.str] = (e[t.str] || 0) + 1), e),
                    {},
                  ))
            }
          }
          function a(e, ...t) {
            let r = [e[0]],
              s = 0
            for (; s < t.length;) (i(r, t[s]), r.push(e[++s]))
            return new o(r)
          }
          ;((e._Code = o), (e.nil = new o("")), (e._ = a))
          let s = new o("+")
          function n(e, ...t) {
            let a = [l(e[0])],
              c = 0
            for (; c < t.length;) (a.push(s), i(a, t[c]), a.push(s, l(e[++c])))
            return (
              (function (e) {
                let t = 1
                for (; t < e.length - 1;) {
                  if (e[t] === s) {
                    var o, a
                    let s =
                      ((o = e[t - 1]),
                      '""' === (a = e[t + 1])
                        ? o
                        : '""' === o
                          ? a
                          : "string" == typeof o
                            ? a instanceof r || '"' !== o[o.length - 1]
                              ? void 0
                              : "string" != typeof a
                                ? `${o.slice(0, -1)}${a}"`
                                : '"' === a[0]
                                  ? o.slice(0, -1) + a.slice(1)
                                  : void 0
                            : "string" != typeof a || '"' !== a[0] || o instanceof r
                              ? void 0
                              : `"${o}${a.slice(1)}`)
                    if (void 0 !== s) {
                      e.splice(t - 1, 3, s)
                      continue
                    }
                    e[t++] = "+"
                  }
                  t++
                }
              })(a),
              new o(a)
            )
          }
          function i(e, t) {
            var a
            t instanceof o
              ? e.push(...t._items)
              : t instanceof r
                ? e.push(t)
                : e.push(
                    "number" == typeof (a = t) || "boolean" == typeof a || null === a
                      ? a
                      : l(Array.isArray(a) ? a.join(",") : a),
                  )
          }
          function l(e) {
            return JSON.stringify(e)
              .replace(/\u2028/g, "\\u2028")
              .replace(/\u2029/g, "\\u2029")
          }
          ;((e.str = n),
            (e.addCodeArg = i),
            (e.strConcat = function (e, t) {
              return t.emptyStr() ? e : e.emptyStr() ? t : n`${e}${t}`
            }),
            (e.stringify = function (e) {
              return new o(l(e))
            }),
            (e.safeStringify = l),
            (e.getProperty = function (t) {
              return "string" == typeof t && e.IDENTIFIER.test(t) ? new o(`.${t}`) : a`[${t}]`
            }),
            (e.getEsmExportName = function (t) {
              if ("string" == typeof t && e.IDENTIFIER.test(t)) return new o(`${t}`)
              throw Error(`CodeGen: invalid export name: ${t}, use explicit $id name mapping`)
            }),
            (e.regexpCode = function (e) {
              return new o(e.toString())
            }))
        }),
        au = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0))
          let t = ac()
          var r,
            o,
            a = class extends Error {
              constructor(e) {
                ;(super(`CodeGen: "code" for ${e} not defined`), (this.value = e.value))
              }
            }
          ;(((r = o || (e.UsedValueState = o = {}))[(r.Started = 0)] = "Started"),
            (r[(r.Completed = 1)] = "Completed"),
            (e.varKinds = { const: new t.Name("const"), let: new t.Name("let"), var: new t.Name("var") }))
          var s = class {
            constructor({ prefixes: e, parent: t } = {}) {
              ;((this._names = {}), (this._prefixes = e), (this._parent = t))
            }
            toName(e) {
              return e instanceof t.Name ? e : this.name(e)
            }
            name(e) {
              return new t.Name(this._newName(e))
            }
            _newName(e) {
              let t = this._names[e] || this._nameGroup(e)
              return `${e}${t.index++}`
            }
            _nameGroup(e) {
              var t, r
              if (
                (null == (r = null == (t = this._parent) ? void 0 : t._prefixes) ? void 0 : r.has(e)) ||
                (this._prefixes && !this._prefixes.has(e))
              )
                throw Error(`CodeGen: prefix "${e}" is not allowed in this scope`)
              return (this._names[e] = { prefix: e, index: 0 })
            }
          }
          e.Scope = s
          var n = class extends t.Name {
            constructor(e, t) {
              ;(super(t), (this.prefix = e))
            }
            setValue(e, { property: r, itemIndex: o }) {
              ;((this.value = e), (this.scopePath = (0, t._)`.${new t.Name(r)}[${o}]`))
            }
          }
          e.ValueScopeName = n
          let i = (0, t._)`\n`
          var l = class extends s {
            constructor(e) {
              ;(super(e), (this._values = {}), (this._scope = e.scope), (this.opts = { ...e, _n: e.lines ? i : t.nil }))
            }
            get() {
              return this._scope
            }
            name(e) {
              return new n(e, this._newName(e))
            }
            value(e, t) {
              var r
              if (void 0 === t.ref) throw Error("CodeGen: ref must be passed in value")
              let o = this.toName(e),
                { prefix: a } = o,
                s = null != (r = t.key) ? r : t.ref,
                n = this._values[a]
              if (n) {
                let e = n.get(s)
                if (e) return e
              } else n = this._values[a] = new Map()
              n.set(s, o)
              let i = this._scope[a] || (this._scope[a] = []),
                l = i.length
              return ((i[l] = t.ref), o.setValue(t, { property: a, itemIndex: l }), o)
            }
            getValue(e, t) {
              let r = this._values[e]
              if (r) return r.get(t)
            }
            scopeRefs(e, r = this._values) {
              return this._reduceValues(r, (r) => {
                if (void 0 === r.scopePath) throw Error(`CodeGen: name "${r}" has no value`)
                return (0, t._)`${e}${r.scopePath}`
              })
            }
            scopeCode(e = this._values, t, r) {
              return this._reduceValues(
                e,
                (e) => {
                  if (void 0 === e.value) throw Error(`CodeGen: name "${e}" has no value`)
                  return e.value.code
                },
                t,
                r,
              )
            }
            _reduceValues(r, s, n = {}, i) {
              let l = t.nil
              for (let c in r) {
                let u = r[c]
                if (!u) continue
                let d = (n[c] = n[c] || new Map())
                u.forEach((r) => {
                  if (d.has(r)) return
                  d.set(r, o.Started)
                  let n = s(r)
                  if (n) {
                    let o = this.opts.es5 ? e.varKinds.var : e.varKinds.const
                    l = (0, t._)`${l}${o} ${r} = ${n};${this.opts._n}`
                  } else if ((n = null == i ? void 0 : i(r))) l = (0, t._)`${l}${n}${this.opts._n}`
                  else throw new a(r)
                  d.set(r, o.Completed)
                })
              }
              return l
            }
          }
          e.ValueScope = l
        }),
        ad = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.or =
              e.and =
              e.not =
              e.CodeGen =
              e.operators =
              e.varKinds =
              e.ValueScopeName =
              e.ValueScope =
              e.Scope =
              e.Name =
              e.regexpCode =
              e.stringify =
              e.getProperty =
              e.nil =
              e.strConcat =
              e.str =
              e._ =
                void 0))
          let t = ac(),
            r = au()
          var o = ac()
          ;(Object.defineProperty(e, "_", {
            enumerable: !0,
            get: function () {
              return o._
            },
          }),
            Object.defineProperty(e, "str", {
              enumerable: !0,
              get: function () {
                return o.str
              },
            }),
            Object.defineProperty(e, "strConcat", {
              enumerable: !0,
              get: function () {
                return o.strConcat
              },
            }),
            Object.defineProperty(e, "nil", {
              enumerable: !0,
              get: function () {
                return o.nil
              },
            }),
            Object.defineProperty(e, "getProperty", {
              enumerable: !0,
              get: function () {
                return o.getProperty
              },
            }),
            Object.defineProperty(e, "stringify", {
              enumerable: !0,
              get: function () {
                return o.stringify
              },
            }),
            Object.defineProperty(e, "regexpCode", {
              enumerable: !0,
              get: function () {
                return o.regexpCode
              },
            }),
            Object.defineProperty(e, "Name", {
              enumerable: !0,
              get: function () {
                return o.Name
              },
            }))
          var a = au()
          ;(Object.defineProperty(e, "Scope", {
            enumerable: !0,
            get: function () {
              return a.Scope
            },
          }),
            Object.defineProperty(e, "ValueScope", {
              enumerable: !0,
              get: function () {
                return a.ValueScope
              },
            }),
            Object.defineProperty(e, "ValueScopeName", {
              enumerable: !0,
              get: function () {
                return a.ValueScopeName
              },
            }),
            Object.defineProperty(e, "varKinds", {
              enumerable: !0,
              get: function () {
                return a.varKinds
              },
            }),
            (e.operators = {
              GT: new t._Code(">"),
              GTE: new t._Code(">="),
              LT: new t._Code("<"),
              LTE: new t._Code("<="),
              EQ: new t._Code("==="),
              NEQ: new t._Code("!=="),
              NOT: new t._Code("!"),
              OR: new t._Code("||"),
              AND: new t._Code("&&"),
              ADD: new t._Code("+"),
            }))
          var s = class {
              optimizeNodes() {
                return this
              }
              optimizeNames(e, t) {
                return this
              }
            },
            n = class extends s {
              constructor(e, t, r) {
                ;(super(), (this.varKind = e), (this.name = t), (this.rhs = r))
              }
              render({ es5: e, _n: t }) {
                let o = e ? r.varKinds.var : this.varKind,
                  a = void 0 === this.rhs ? "" : ` = ${this.rhs}`
                return `${o} ${this.name}${a};` + t
              }
              optimizeNames(e, t) {
                if (e[this.name.str]) return (this.rhs && (this.rhs = C(this.rhs, e, t)), this)
              }
              get names() {
                return this.rhs instanceof t._CodeOrName ? this.rhs.names : {}
              }
            },
            i = class extends s {
              constructor(e, t, r) {
                ;(super(), (this.lhs = e), (this.rhs = t), (this.sideEffects = r))
              }
              render({ _n: e }) {
                return `${this.lhs} = ${this.rhs};` + e
              }
              optimizeNames(e, r) {
                if (!(this.lhs instanceof t.Name) || e[this.lhs.str] || this.sideEffects)
                  return ((this.rhs = C(this.rhs, e, r)), this)
              }
              get names() {
                return I(this.lhs instanceof t.Name ? {} : { ...this.lhs.names }, this.rhs)
              }
            },
            l = class extends i {
              constructor(e, t, r, o) {
                ;(super(e, r, o), (this.op = t))
              }
              render({ _n: e }) {
                return `${this.lhs} ${this.op}= ${this.rhs};` + e
              }
            },
            c = class extends s {
              constructor(e) {
                ;(super(), (this.label = e), (this.names = {}))
              }
              render({ _n: e }) {
                return `${this.label}:` + e
              }
            },
            u = class extends s {
              constructor(e) {
                ;(super(), (this.label = e), (this.names = {}))
              }
              render({ _n: e }) {
                return `break${this.label ? ` ${this.label}` : ""};` + e
              }
            },
            d = class extends s {
              constructor(e) {
                ;(super(), (this.error = e))
              }
              render({ _n: e }) {
                return `throw ${this.error};` + e
              }
              get names() {
                return this.error.names
              }
            },
            p = class extends s {
              constructor(e) {
                ;(super(), (this.code = e))
              }
              render({ _n: e }) {
                return `${this.code};` + e
              }
              optimizeNodes() {
                return `${this.code}` ? this : void 0
              }
              optimizeNames(e, t) {
                return ((this.code = C(this.code, e, t)), this)
              }
              get names() {
                return this.code instanceof t._CodeOrName ? this.code.names : {}
              }
            },
            h = class extends s {
              constructor(e = []) {
                ;(super(), (this.nodes = e))
              }
              render(e) {
                return this.nodes.reduce((t, r) => t + r.render(e), "")
              }
              optimizeNodes() {
                let { nodes: e } = this,
                  t = e.length
                for (; t--;) {
                  let r = e[t].optimizeNodes()
                  Array.isArray(r) ? e.splice(t, 1, ...r) : r ? (e[t] = r) : e.splice(t, 1)
                }
                return e.length > 0 ? this : void 0
              }
              optimizeNames(e, t) {
                let { nodes: r } = this,
                  o = r.length
                for (; o--;) {
                  let a = r[o]
                  a.optimizeNames(e, t) ||
                    ((function (e, t) {
                      for (let r in t) e[r] = (e[r] || 0) - (t[r] || 0)
                    })(e, a.names),
                    r.splice(o, 1))
                }
                return r.length > 0 ? this : void 0
              }
              get names() {
                return this.nodes.reduce((e, t) => E(e, t.names), {})
              }
            },
            m = class extends h {
              render(e) {
                return "{" + e._n + super.render(e) + "}" + e._n
              }
            },
            f = class extends h {},
            g = class extends m {}
          g.kind = "else"
          var y = class e extends m {
            constructor(e, t) {
              ;(super(t), (this.condition = e))
            }
            render(e) {
              let t = `if(${this.condition})` + super.render(e)
              return (this.else && (t += "else " + this.else.render(e)), t)
            }
            optimizeNodes() {
              super.optimizeNodes()
              let t = this.condition
              if (!0 === t) return this.nodes
              let r = this.else
              if (r) {
                let e = r.optimizeNodes()
                r = this.else = Array.isArray(e) ? new g(e) : e
              }
              return r
                ? !1 === t
                  ? r instanceof e
                    ? r
                    : r.nodes
                  : this.nodes.length
                    ? this
                    : new e(x(t), r instanceof e ? [r] : r.nodes)
                : !1 !== t && this.nodes.length
                  ? this
                  : void 0
            }
            optimizeNames(e, t) {
              var r
              if (
                ((this.else = null == (r = this.else) ? void 0 : r.optimizeNames(e, t)),
                super.optimizeNames(e, t) || this.else)
              )
                return ((this.condition = C(this.condition, e, t)), this)
            }
            get names() {
              let e = super.names
              return (I(e, this.condition), this.else && E(e, this.else.names), e)
            }
          }
          y.kind = "if"
          var v = class extends m {}
          v.kind = "for"
          var S = class extends v {
              constructor(e) {
                ;(super(), (this.iteration = e))
              }
              render(e) {
                return `for(${this.iteration})` + super.render(e)
              }
              optimizeNames(e, t) {
                if (super.optimizeNames(e, t)) return ((this.iteration = C(this.iteration, e, t)), this)
              }
              get names() {
                return E(super.names, this.iteration.names)
              }
            },
            _ = class extends v {
              constructor(e, t, r, o) {
                ;(super(), (this.varKind = e), (this.name = t), (this.from = r), (this.to = o))
              }
              render(e) {
                let t = e.es5 ? r.varKinds.var : this.varKind,
                  { name: o, from: a, to: s } = this
                return `for(${t} ${o}=${a}; ${o}<${s}; ${o}++)` + super.render(e)
              }
              get names() {
                return I(I(super.names, this.from), this.to)
              }
            },
            b = class extends v {
              constructor(e, t, r, o) {
                ;(super(), (this.loop = e), (this.varKind = t), (this.name = r), (this.iterable = o))
              }
              render(e) {
                return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e)
              }
              optimizeNames(e, t) {
                if (super.optimizeNames(e, t)) return ((this.iterable = C(this.iterable, e, t)), this)
              }
              get names() {
                return E(super.names, this.iterable.names)
              }
            },
            P = class extends m {
              constructor(e, t, r) {
                ;(super(), (this.name = e), (this.args = t), (this.async = r))
              }
              render(e) {
                return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e)
              }
            }
          P.kind = "func"
          var $ = class extends h {
            render(e) {
              return "return " + super.render(e)
            }
          }
          $.kind = "return"
          var w = class extends m {
              render(e) {
                let t = "try" + super.render(e)
                return (this.catch && (t += this.catch.render(e)), this.finally && (t += this.finally.render(e)), t)
              }
              optimizeNodes() {
                var e, t
                return (
                  super.optimizeNodes(),
                  null == (e = this.catch) || e.optimizeNodes(),
                  null == (t = this.finally) || t.optimizeNodes(),
                  this
                )
              }
              optimizeNames(e, t) {
                var r, o
                return (
                  super.optimizeNames(e, t),
                  null == (r = this.catch) || r.optimizeNames(e, t),
                  null == (o = this.finally) || o.optimizeNames(e, t),
                  this
                )
              }
              get names() {
                let e = super.names
                return (this.catch && E(e, this.catch.names), this.finally && E(e, this.finally.names), e)
              }
            },
            R = class extends m {
              constructor(e) {
                ;(super(), (this.error = e))
              }
              render(e) {
                return `catch(${this.error})` + super.render(e)
              }
            }
          R.kind = "catch"
          var j = class extends m {
            render(e) {
              return "finally" + super.render(e)
            }
          }
          j.kind = "finally"
          var k = class {
            constructor(e, t = {}) {
              ;((this._values = {}),
                (this._blockStarts = []),
                (this._constants = {}),
                (this.opts = { ...t, _n: t.lines ? "\n" : "" }),
                (this._extScope = e),
                (this._scope = new r.Scope({ parent: e })),
                (this._nodes = [new f()]))
            }
            toString() {
              return this._root.render(this.opts)
            }
            name(e) {
              return this._scope.name(e)
            }
            scopeName(e) {
              return this._extScope.name(e)
            }
            scopeValue(e, t) {
              let r = this._extScope.value(e, t)
              return ((this._values[r.prefix] || (this._values[r.prefix] = new Set())).add(r), r)
            }
            getScopeValue(e, t) {
              return this._extScope.getValue(e, t)
            }
            scopeRefs(e) {
              return this._extScope.scopeRefs(e, this._values)
            }
            scopeCode() {
              return this._extScope.scopeCode(this._values)
            }
            _def(e, t, r, o) {
              let a = this._scope.toName(t)
              return (void 0 !== r && o && (this._constants[a.str] = r), this._leafNode(new n(e, a, r)), a)
            }
            const(e, t, o) {
              return this._def(r.varKinds.const, e, t, o)
            }
            let(e, t, o) {
              return this._def(r.varKinds.let, e, t, o)
            }
            var(e, t, o) {
              return this._def(r.varKinds.var, e, t, o)
            }
            assign(e, t, r) {
              return this._leafNode(new i(e, t, r))
            }
            add(t, r) {
              return this._leafNode(new l(t, e.operators.ADD, r))
            }
            code(e) {
              return ("function" == typeof e ? e() : e !== t.nil && this._leafNode(new p(e)), this)
            }
            object(...e) {
              let r = ["{"]
              for (let [o, a] of e)
                (r.length > 1 && r.push(","),
                  r.push(o),
                  (o !== a || this.opts.es5) && (r.push(":"), (0, t.addCodeArg)(r, a)))
              return (r.push("}"), new t._Code(r))
            }
            if(e, t, r) {
              if ((this._blockNode(new y(e)), t && r)) this.code(t).else().code(r).endIf()
              else if (t) this.code(t).endIf()
              else if (r) throw Error('CodeGen: "else" body without "then" body')
              return this
            }
            elseIf(e) {
              return this._elseNode(new y(e))
            }
            else() {
              return this._elseNode(new g())
            }
            endIf() {
              return this._endBlockNode(y, g)
            }
            _for(e, t) {
              return (this._blockNode(e), t && this.code(t).endFor(), this)
            }
            for(e, t) {
              return this._for(new S(e), t)
            }
            forRange(e, t, o, a, s = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
              let n = this._scope.toName(e)
              return this._for(new _(s, n, t, o), () => a(n))
            }
            forOf(e, o, a, s = r.varKinds.const) {
              let n = this._scope.toName(e)
              if (this.opts.es5) {
                let e = o instanceof t.Name ? o : this.var("_arr", o)
                return this.forRange("_i", 0, (0, t._)`${e}.length`, (r) => {
                  ;(this.var(n, (0, t._)`${e}[${r}]`), a(n))
                })
              }
              return this._for(new b("of", s, n, o), () => a(n))
            }
            forIn(e, o, a, s = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
              if (this.opts.ownProperties) return this.forOf(e, (0, t._)`Object.keys(${o})`, a)
              let n = this._scope.toName(e)
              return this._for(new b("in", s, n, o), () => a(n))
            }
            endFor() {
              return this._endBlockNode(v)
            }
            label(e) {
              return this._leafNode(new c(e))
            }
            break(e) {
              return this._leafNode(new u(e))
            }
            return(e) {
              let t = new $()
              if ((this._blockNode(t), this.code(e), 1 !== t.nodes.length))
                throw Error('CodeGen: "return" should have one node')
              return this._endBlockNode($)
            }
            try(e, t, r) {
              if (!t && !r) throw Error('CodeGen: "try" without "catch" and "finally"')
              let o = new w()
              if ((this._blockNode(o), this.code(e), t)) {
                let e = this.name("e")
                ;((this._currNode = o.catch = new R(e)), t(e))
              }
              return (r && ((this._currNode = o.finally = new j()), this.code(r)), this._endBlockNode(R, j))
            }
            throw(e) {
              return this._leafNode(new d(e))
            }
            block(e, t) {
              return (this._blockStarts.push(this._nodes.length), e && this.code(e).endBlock(t), this)
            }
            endBlock(e) {
              let t = this._blockStarts.pop()
              if (void 0 === t) throw Error("CodeGen: not in self-balancing block")
              let r = this._nodes.length - t
              if (r < 0 || (void 0 !== e && r !== e))
                throw Error(`CodeGen: wrong number of nodes: ${r} vs ${e} expected`)
              return ((this._nodes.length = t), this)
            }
            func(e, r = t.nil, o, a) {
              return (this._blockNode(new P(e, r, o)), a && this.code(a).endFunc(), this)
            }
            endFunc() {
              return this._endBlockNode(P)
            }
            optimize(e = 1) {
              for (; e-- > 0;) (this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants))
            }
            _leafNode(e) {
              return (this._currNode.nodes.push(e), this)
            }
            _blockNode(e) {
              ;(this._currNode.nodes.push(e), this._nodes.push(e))
            }
            _endBlockNode(e, t) {
              let r = this._currNode
              if (r instanceof e || (t && r instanceof t)) return (this._nodes.pop(), this)
              throw Error(`CodeGen: not in block "${t ? `${e.kind}/${t.kind}` : e.kind}"`)
            }
            _elseNode(e) {
              let t = this._currNode
              if (!(t instanceof y)) throw Error('CodeGen: "else" without "if"')
              return ((this._currNode = t.else = e), this)
            }
            get _root() {
              return this._nodes[0]
            }
            get _currNode() {
              let e = this._nodes
              return e[e.length - 1]
            }
            set _currNode(e) {
              let t = this._nodes
              t[t.length - 1] = e
            }
          }
          function E(e, t) {
            for (let r in t) e[r] = (e[r] || 0) + (t[r] || 0)
            return e
          }
          function I(e, r) {
            return r instanceof t._CodeOrName ? E(e, r.names) : e
          }
          function C(e, r, o) {
            var a
            if (e instanceof t.Name) return s(e)
            if (!(
              (a = e) instanceof t._Code &&
              a._items.some((e) => e instanceof t.Name && 1 === r[e.str] && void 0 !== o[e.str])
            ))
              return e
            return new t._Code(
              e._items.reduce(
                (e, r) => (
                  r instanceof t.Name && (r = s(r)),
                  r instanceof t._Code ? e.push(...r._items) : e.push(r),
                  e
                ),
                [],
              ),
            )
            function s(e) {
              let t = o[e.str]
              return void 0 === t || 1 !== r[e.str] ? e : (delete r[e.str], t)
            }
          }
          function x(e) {
            return "boolean" == typeof e || "number" == typeof e || null === e ? !e : (0, t._)`!${O(e)}`
          }
          ;((e.CodeGen = k), (e.not = x))
          let q = Y(e.operators.AND)
          e.and = function (...e) {
            return e.reduce(q)
          }
          let T = Y(e.operators.OR)
          function Y(e) {
            return (r, o) => (r === t.nil ? o : o === t.nil ? r : (0, t._)`${O(r)} ${e} ${O(o)}`)
          }
          function O(e) {
            return e instanceof t.Name ? e : (0, t._)`(${e})`
          }
          e.or = function (...e) {
            return e.reduce(T)
          }
        }),
        ap = C((e) => {
          var t, r
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.checkStrictMode =
              e.getErrorPath =
              e.Type =
              e.useFunc =
              e.setEvaluated =
              e.evaluatedPropsToName =
              e.mergeEvaluated =
              e.eachItem =
              e.unescapeJsonPointer =
              e.escapeJsonPointer =
              e.escapeFragment =
              e.unescapeFragment =
              e.schemaRefOrVal =
              e.schemaHasRulesButRef =
              e.schemaHasRules =
              e.checkUnknownRules =
              e.alwaysValidSchema =
              e.toHash =
                void 0))
          let o = ad(),
            a = ac()
          function s(e, t = e.schema) {
            let { opts: r, self: o } = e
            if (!r.strictSchema || "boolean" == typeof t) return
            let a = o.RULES.keywords
            for (let r in t) a[r] || h(e, `unknown keyword: "${r}"`)
          }
          function n(e, t) {
            if ("boolean" == typeof e) return !e
            for (let r in e) if (t[r]) return !0
            return !1
          }
          function i(e) {
            return "number" == typeof e ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1")
          }
          function l(e) {
            return e.replace(/~1/g, "/").replace(/~0/g, "~")
          }
          function c({ mergeNames: e, mergeToName: t, mergeValues: r, resultToName: a }) {
            return (s, n, i, l) => {
              let c =
                void 0 === i
                  ? n
                  : i instanceof o.Name
                    ? (n instanceof o.Name ? e(s, n, i) : t(s, n, i), i)
                    : n instanceof o.Name
                      ? (t(s, i, n), n)
                      : r(n, i)
              return l !== o.Name || c instanceof o.Name ? c : a(s, c)
            }
          }
          function u(e, t) {
            if (!0 === t) return e.var("props", !0)
            let r = e.var("props", (0, o._)`{}`)
            return (void 0 !== t && d(e, r, t), r)
          }
          function d(e, t, r) {
            Object.keys(r).forEach((r) => e.assign((0, o._)`${t}${(0, o.getProperty)(r)}`, !0))
          }
          ;((e.toHash = function (e) {
            let t = {}
            for (let r of e) t[r] = !0
            return t
          }),
            (e.alwaysValidSchema = function (e, t) {
              return "boolean" == typeof t ? t : 0 === Object.keys(t).length || (s(e, t), !n(t, e.self.RULES.all))
            }),
            (e.checkUnknownRules = s),
            (e.schemaHasRules = n),
            (e.schemaHasRulesButRef = function (e, t) {
              if ("boolean" == typeof e) return !e
              for (let r in e) if ("$ref" !== r && t.all[r]) return !0
              return !1
            }),
            (e.schemaRefOrVal = function ({ topSchemaRef: e, schemaPath: t }, r, a, s) {
              if (!s) {
                if ("number" == typeof r || "boolean" == typeof r) return r
                if ("string" == typeof r) return (0, o._)`${r}`
              }
              return (0, o._)`${e}${t}${(0, o.getProperty)(a)}`
            }),
            (e.unescapeFragment = function (e) {
              return l(decodeURIComponent(e))
            }),
            (e.escapeFragment = function (e) {
              return encodeURIComponent(i(e))
            }),
            (e.escapeJsonPointer = i),
            (e.unescapeJsonPointer = l),
            (e.eachItem = function (e, t) {
              if (Array.isArray(e)) for (let r of e) t(r)
              else t(e)
            }),
            (e.mergeEvaluated = {
              props: c({
                mergeNames: (e, t, r) =>
                  e.if((0, o._)`${r} !== true && ${t} !== undefined`, () => {
                    e.if(
                      (0, o._)`${t} === true`,
                      () => e.assign(r, !0),
                      () => e.assign(r, (0, o._)`${r} || {}`).code((0, o._)`Object.assign(${r}, ${t})`),
                    )
                  }),
                mergeToName: (e, t, r) =>
                  e.if((0, o._)`${r} !== true`, () => {
                    !0 === t ? e.assign(r, !0) : (e.assign(r, (0, o._)`${r} || {}`), d(e, r, t))
                  }),
                mergeValues: (e, t) => !0 === e || { ...e, ...t },
                resultToName: u,
              }),
              items: c({
                mergeNames: (e, t, r) =>
                  e.if((0, o._)`${r} !== true && ${t} !== undefined`, () =>
                    e.assign(r, (0, o._)`${t} === true ? true : ${r} > ${t} ? ${r} : ${t}`),
                  ),
                mergeToName: (e, t, r) =>
                  e.if((0, o._)`${r} !== true`, () => e.assign(r, !0 === t || (0, o._)`${r} > ${t} ? ${r} : ${t}`)),
                mergeValues: (e, t) => !0 === e || Math.max(e, t),
                resultToName: (e, t) => e.var("items", t),
              }),
            }),
            (e.evaluatedPropsToName = u),
            (e.setEvaluated = d))
          let p = {}
          function h(e, t, r = e.opts.strictSchema) {
            if (r) {
              if (((t = `strict mode: ${t}`), !0 === r)) throw Error(t)
              e.self.logger.warn(t)
            }
          }
          ;((e.useFunc = function (e, t) {
            return e.scopeValue("func", { ref: t, code: p[t.code] || (p[t.code] = new a._Code(t.code)) })
          }),
            ((r = t || (e.Type = t = {}))[(r.Num = 0)] = "Num"),
            (r[(r.Str = 1)] = "Str"),
            (e.getErrorPath = function (e, r, a) {
              if (e instanceof o.Name) {
                let s = r === t.Num
                return a
                  ? s
                    ? (0, o._)`"[" + ${e} + "]"`
                    : (0, o._)`"['" + ${e} + "']"`
                  : s
                    ? (0, o._)`"/" + ${e}`
                    : (0, o._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`
              }
              return a ? (0, o.getProperty)(e).toString() : "/" + i(e)
            }),
            (e.checkStrictMode = h))
        }),
        ah = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad()
          e.default = {
            data: new t.Name("data"),
            valCxt: new t.Name("valCxt"),
            instancePath: new t.Name("instancePath"),
            parentData: new t.Name("parentData"),
            parentDataProperty: new t.Name("parentDataProperty"),
            rootData: new t.Name("rootData"),
            dynamicAnchors: new t.Name("dynamicAnchors"),
            vErrors: new t.Name("vErrors"),
            errors: new t.Name("errors"),
            this: new t.Name("this"),
            self: new t.Name("self"),
            scope: new t.Name("scope"),
            json: new t.Name("json"),
            jsonPos: new t.Name("jsonPos"),
            jsonLen: new t.Name("jsonLen"),
            jsonPart: new t.Name("jsonPart"),
          }
        }),
        am = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.extendErrors =
              e.resetErrorsCount =
              e.reportExtraError =
              e.reportError =
              e.keyword$DataError =
              e.keywordError =
                void 0))
          let t = ad(),
            r = ap(),
            o = ah()
          function a(e, r) {
            let a = e.const("err", r)
            ;(e.if(
              (0, t._)`${o.default.vErrors} === null`,
              () => e.assign(o.default.vErrors, (0, t._)`[${a}]`),
              (0, t._)`${o.default.vErrors}.push(${a})`,
            ),
              e.code((0, t._)`${o.default.errors}++`))
          }
          function s(e, r) {
            let { gen: o, validateName: a, schemaEnv: s } = e
            s.$async
              ? o.throw((0, t._)`new ${e.ValidationError}(${r})`)
              : (o.assign((0, t._)`${a}.errors`, r), o.return(!1))
          }
          ;((e.keywordError = { message: ({ keyword: e }) => (0, t.str)`must pass "${e}" keyword validation` }),
            (e.keyword$DataError = {
              message: ({ keyword: e, schemaType: r }) =>
                r ? (0, t.str)`"${e}" keyword must be ${r} ($data)` : (0, t.str)`"${e}" keyword is invalid ($data)`,
            }),
            (e.reportError = function (r, o = e.keywordError, n, l) {
              let { it: c } = r,
                { gen: u, compositeRule: d, allErrors: p } = c,
                h = i(r, o, n)
              ;(null != l ? l : d || p) ? a(u, h) : s(c, (0, t._)`[${h}]`)
            }),
            (e.reportExtraError = function (t, r = e.keywordError, n) {
              let { it: l } = t,
                { gen: c, compositeRule: u, allErrors: d } = l
              ;(a(c, i(t, r, n)), u || d || s(l, o.default.vErrors))
            }),
            (e.resetErrorsCount = function (e, r) {
              ;(e.assign(o.default.errors, r),
                e.if((0, t._)`${o.default.vErrors} !== null`, () =>
                  e.if(
                    r,
                    () => e.assign((0, t._)`${o.default.vErrors}.length`, r),
                    () => e.assign(o.default.vErrors, null),
                  ),
                ))
            }),
            (e.extendErrors = function ({ gen: e, keyword: r, schemaValue: a, data: s, errsCount: n, it: i }) {
              if (void 0 === n) throw Error("ajv implementation error")
              let l = e.name("err")
              e.forRange("i", n, o.default.errors, (n) => {
                ;(e.const(l, (0, t._)`${o.default.vErrors}[${n}]`),
                  e.if((0, t._)`${l}.instancePath === undefined`, () =>
                    e.assign((0, t._)`${l}.instancePath`, (0, t.strConcat)(o.default.instancePath, i.errorPath)),
                  ),
                  e.assign((0, t._)`${l}.schemaPath`, (0, t.str)`${i.errSchemaPath}/${r}`),
                  i.opts.verbose && (e.assign((0, t._)`${l}.schema`, a), e.assign((0, t._)`${l}.data`, s)))
              })
            }))
          let n = {
            keyword: new t.Name("keyword"),
            schemaPath: new t.Name("schemaPath"),
            params: new t.Name("params"),
            propertyName: new t.Name("propertyName"),
            message: new t.Name("message"),
            schema: new t.Name("schema"),
            parentSchema: new t.Name("parentSchema"),
          }
          function i(e, a, s) {
            let { createErrors: i } = e.it
            return !1 === i
              ? (0, t._)`{}`
              : (function (e, a, s = {}) {
                  let { gen: i, it: l } = e,
                    c = [
                      (function ({ errorPath: e }, { instancePath: a }) {
                        let s = a ? (0, t.str)`${e}${(0, r.getErrorPath)(a, r.Type.Str)}` : e
                        return [o.default.instancePath, (0, t.strConcat)(o.default.instancePath, s)]
                      })(l, s),
                      (function ({ keyword: e, it: { errSchemaPath: o } }, { schemaPath: a, parentSchema: s }) {
                        let i = s ? o : (0, t.str)`${o}/${e}`
                        return (a && (i = (0, t.str)`${i}${(0, r.getErrorPath)(a, r.Type.Str)}`), [n.schemaPath, i])
                      })(e, s),
                    ]
                  return (
                    (function (e, { params: r, message: a }, s) {
                      let { keyword: i, data: l, schemaValue: c, it: u } = e,
                        { opts: d, propertyName: p, topSchemaRef: h, schemaPath: m } = u
                      ;(s.push([n.keyword, i], [n.params, "function" == typeof r ? r(e) : r || (0, t._)`{}`]),
                        d.messages && s.push([n.message, "function" == typeof a ? a(e) : a]),
                        d.verbose && s.push([n.schema, c], [n.parentSchema, (0, t._)`${h}${m}`], [o.default.data, l]),
                        p && s.push([n.propertyName, p]))
                    })(e, a, c),
                    i.object(...c)
                  )
                })(e, a, s)
          }
        }),
        af = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.boolOrEmptySchema = e.topBoolOrEmptySchema = void 0))
          let t = am(),
            r = ad(),
            o = ah(),
            a = { message: "boolean schema is false" }
          function s(e, r) {
            let { gen: o, data: s } = e
            ;(0, t.reportError)(
              {
                gen: o,
                keyword: "false schema",
                data: s,
                schema: !1,
                schemaCode: !1,
                schemaValue: !1,
                params: {},
                it: e,
              },
              a,
              void 0,
              r,
            )
          }
          ;((e.topBoolOrEmptySchema = function (e) {
            let { gen: t, schema: a, validateName: n } = e
            !1 === a
              ? s(e, !1)
              : "object" == typeof a && !0 === a.$async
                ? t.return(o.default.data)
                : (t.assign((0, r._)`${n}.errors`, null), t.return(!0))
          }),
            (e.boolOrEmptySchema = function (e, t) {
              let { gen: r, schema: o } = e
              !1 === o ? (r.var(t, !1), s(e)) : r.var(t, !0)
            }))
        }),
        ag = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }), (e.getRules = e.isJSONType = void 0))
          let t = new Set(["string", "number", "integer", "boolean", "null", "object", "array"])
          ;((e.isJSONType = function (e) {
            return "string" == typeof e && t.has(e)
          }),
            (e.getRules = function () {
              let e = {
                number: { type: "number", rules: [] },
                string: { type: "string", rules: [] },
                array: { type: "array", rules: [] },
                object: { type: "object", rules: [] },
              }
              return {
                types: { ...e, integer: !0, boolean: !0, null: !0 },
                rules: [{ rules: [] }, e.number, e.string, e.array, e.object],
                post: { rules: [] },
                all: {},
                keywords: {},
              }
            }))
        }),
        ay = C((e) => {
          function t(e, t) {
            return t.rules.some((t) => r(e, t))
          }
          function r(e, t) {
            var r
            return (
              void 0 !== e[t.keyword] ||
              (null == (r = t.definition.implements) ? void 0 : r.some((t) => void 0 !== e[t]))
            )
          }
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.shouldUseRule = e.shouldUseGroup = e.schemaHasRulesForType = void 0),
            (e.schemaHasRulesForType = function ({ schema: e, self: r }, o) {
              let a = r.RULES.types[o]
              return a && !0 !== a && t(e, a)
            }),
            (e.shouldUseGroup = t),
            (e.shouldUseRule = r))
        }),
        av = C((e) => {
          var t, r
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.reportTypeError =
              e.checkDataTypes =
              e.checkDataType =
              e.coerceAndCheckDataType =
              e.getJSONTypes =
              e.getSchemaTypes =
              e.DataType =
                void 0))
          let o = ag(),
            a = ay(),
            s = am(),
            n = ad(),
            i = ap()
          function l(e) {
            let t = Array.isArray(e) ? e : e ? [e] : []
            if (t.every(o.isJSONType)) return t
            throw Error("type must be JSONType or JSONType[]: " + t.join(","))
          }
          ;(((r = t || (e.DataType = t = {}))[(r.Correct = 0)] = "Correct"),
            (r[(r.Wrong = 1)] = "Wrong"),
            (e.getSchemaTypes = function (e) {
              let t = l(e.type)
              if (t.includes("null")) {
                if (!1 === e.nullable) throw Error("type: null contradicts nullable: false")
              } else {
                if (!t.length && void 0 !== e.nullable) throw Error('"nullable" cannot be used without "type"')
                !0 === e.nullable && t.push("null")
              }
              return t
            }),
            (e.getJSONTypes = l),
            (e.coerceAndCheckDataType = function (e, r) {
              var o, s
              let { gen: i, data: l, opts: u } = e,
                p = ((o = r), (s = u.coerceTypes) ? o.filter((e) => c.has(e) || ("array" === s && "array" === e)) : []),
                m = r.length > 0 && !(0 === p.length && 1 === r.length && (0, a.schemaHasRulesForType)(e, r[0]))
              if (m) {
                let o = d(r, l, u.strictNumbers, t.Wrong)
                i.if(o, () => {
                  p.length
                    ? (function (e, t, r) {
                        let { gen: o, data: a, opts: s } = e,
                          i = o.let("dataType", (0, n._)`typeof ${a}`),
                          l = o.let("coerced", (0, n._)`undefined`)
                        for (let e of ("array" === s.coerceTypes &&
                          o.if((0, n._)`${i} == 'object' && Array.isArray(${a}) && ${a}.length == 1`, () =>
                            o
                              .assign(a, (0, n._)`${a}[0]`)
                              .assign(i, (0, n._)`typeof ${a}`)
                              .if(d(t, a, s.strictNumbers), () => o.assign(l, a)),
                          ),
                        o.if((0, n._)`${l} !== undefined`),
                        r))
                          (c.has(e) || ("array" === e && "array" === s.coerceTypes)) &&
                            (function (e) {
                              switch (e) {
                                case "string":
                                  o.elseIf((0, n._)`${i} == "number" || ${i} == "boolean"`)
                                    .assign(l, (0, n._)`"" + ${a}`)
                                    .elseIf((0, n._)`${a} === null`)
                                    .assign(l, (0, n._)`""`)
                                  return
                                case "number":
                                  o.elseIf(
                                    (0, n._)`${i} == "boolean" || ${a} === null
              || (${i} == "string" && ${a} && ${a} == +${a})`,
                                  ).assign(l, (0, n._)`+${a}`)
                                  return
                                case "integer":
                                  o.elseIf(
                                    (0, n._)`${i} === "boolean" || ${a} === null
              || (${i} === "string" && ${a} && ${a} == +${a} && !(${a} % 1))`,
                                  ).assign(l, (0, n._)`+${a}`)
                                  return
                                case "boolean":
                                  o.elseIf((0, n._)`${a} === "false" || ${a} === 0 || ${a} === null`)
                                    .assign(l, !1)
                                    .elseIf((0, n._)`${a} === "true" || ${a} === 1`)
                                    .assign(l, !0)
                                  return
                                case "null":
                                  ;(o.elseIf((0, n._)`${a} === "" || ${a} === 0 || ${a} === false`), o.assign(l, null))
                                  return
                                case "array":
                                  o.elseIf(
                                    (0, n._)`${i} === "string" || ${i} === "number"
              || ${i} === "boolean" || ${a} === null`,
                                  ).assign(l, (0, n._)`[${a}]`)
                              }
                            })(e)
                        ;(o.else(),
                          h(e),
                          o.endIf(),
                          o.if((0, n._)`${l} !== undefined`, () => {
                            ;(o.assign(a, l),
                              (function ({ gen: e, parentData: t, parentDataProperty: r }, o) {
                                e.if((0, n._)`${t} !== undefined`, () => e.assign((0, n._)`${t}[${r}]`, o))
                              })(e, l))
                          }))
                      })(e, r, p)
                    : h(e)
                })
              }
              return m
            }))
          let c = new Set(["string", "number", "integer", "boolean", "null"])
          function u(e, r, o, a = t.Correct) {
            let s,
              i = a === t.Correct ? n.operators.EQ : n.operators.NEQ
            switch (e) {
              case "null":
                return (0, n._)`${r} ${i} null`
              case "array":
                s = (0, n._)`Array.isArray(${r})`
                break
              case "object":
                s = (0, n._)`${r} && typeof ${r} == "object" && !Array.isArray(${r})`
                break
              case "integer":
                s = l((0, n._)`!(${r} % 1) && !isNaN(${r})`)
                break
              case "number":
                s = l()
                break
              default:
                return (0, n._)`typeof ${r} ${i} ${e}`
            }
            return a === t.Correct ? s : (0, n.not)(s)
            function l(e = n.nil) {
              return (0, n.and)((0, n._)`typeof ${r} == "number"`, e, o ? (0, n._)`isFinite(${r})` : n.nil)
            }
          }
          function d(e, t, r, o) {
            let a
            if (1 === e.length) return u(e[0], t, r, o)
            let s = (0, i.toHash)(e)
            if (s.array && s.object) {
              let e = (0, n._)`typeof ${t} != "object"`
              ;((a = s.null ? e : (0, n._)`!${t} || ${e}`), delete s.null, delete s.array, delete s.object)
            } else a = n.nil
            for (let e in (s.number && delete s.integer, s)) a = (0, n.and)(a, u(e, t, r, o))
            return a
          }
          ;((e.checkDataType = u), (e.checkDataTypes = d))
          let p = {
            message: ({ schema: e }) => `must be ${e}`,
            params: ({ schema: e, schemaValue: t }) =>
              "string" == typeof e ? (0, n._)`{type: ${e}}` : (0, n._)`{type: ${t}}`,
          }
          function h(e) {
            let t = (function (e) {
              let { gen: t, data: r, schema: o } = e,
                a = (0, i.schemaRefOrVal)(e, o, "type")
              return {
                gen: t,
                keyword: "type",
                data: r,
                schema: o.type,
                schemaCode: a,
                schemaValue: a,
                parentSchema: o,
                params: {},
                it: e,
              }
            })(e)
            ;(0, s.reportError)(t, p)
          }
          e.reportTypeError = h
        }),
        aS = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }), (e.assignDefaults = void 0))
          let t = ad(),
            r = ap()
          function o(e, o, a) {
            let { gen: s, compositeRule: n, data: i, opts: l } = e
            if (void 0 === a) return
            let c = (0, t._)`${i}${(0, t.getProperty)(o)}`
            if (n) return void (0, r.checkStrictMode)(e, `default is ignored for: ${c}`)
            let u = (0, t._)`${c} === undefined`
            ;("empty" === l.useDefaults && (u = (0, t._)`${u} || ${c} === null || ${c} === ""`),
              s.if(u, (0, t._)`${c} = ${(0, t.stringify)(a)}`))
          }
          e.assignDefaults = function (e, t) {
            let { properties: r, items: a } = e.schema
            if ("object" === t && r) for (let t in r) o(e, t, r[t].default)
            else "array" === t && Array.isArray(a) && a.forEach((t, r) => o(e, r, t.default))
          }
        }),
        a_ = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.validateUnion =
              e.validateArray =
              e.usePattern =
              e.callValidateCode =
              e.schemaProperties =
              e.allSchemaProperties =
              e.noPropertyInData =
              e.propertyInData =
              e.isOwnProperty =
              e.hasPropFunc =
              e.reportMissingProp =
              e.checkMissingProp =
              e.checkReportMissingProp =
                void 0))
          let t = ad(),
            r = ap(),
            o = ah(),
            a = ap()
          function s(e) {
            return e.scopeValue("func", {
              ref: Object.prototype.hasOwnProperty,
              code: (0, t._)`Object.prototype.hasOwnProperty`,
            })
          }
          function n(e, r, o) {
            return (0, t._)`${s(e)}.call(${r}, ${o})`
          }
          function i(e, r, o, a) {
            let s = (0, t._)`${r}${(0, t.getProperty)(o)} === undefined`
            return a ? (0, t.or)(s, (0, t.not)(n(e, r, o))) : s
          }
          function l(e) {
            return e ? Object.keys(e).filter((e) => "__proto__" !== e) : []
          }
          ;((e.checkReportMissingProp = function (e, r) {
            let { gen: o, data: a, it: s } = e
            o.if(i(o, a, r, s.opts.ownProperties), () => {
              ;(e.setParams({ missingProperty: (0, t._)`${r}` }, !0), e.error())
            })
          }),
            (e.checkMissingProp = function ({ gen: e, data: r, it: { opts: o } }, a, s) {
              return (0, t.or)(...a.map((a) => (0, t.and)(i(e, r, a, o.ownProperties), (0, t._)`${s} = ${a}`)))
            }),
            (e.reportMissingProp = function (e, t) {
              ;(e.setParams({ missingProperty: t }, !0), e.error())
            }),
            (e.hasPropFunc = s),
            (e.isOwnProperty = n),
            (e.propertyInData = function (e, r, o, a) {
              let s = (0, t._)`${r}${(0, t.getProperty)(o)} !== undefined`
              return a ? (0, t._)`${s} && ${n(e, r, o)}` : s
            }),
            (e.noPropertyInData = i),
            (e.allSchemaProperties = l),
            (e.schemaProperties = function (e, t) {
              return l(t).filter((o) => !(0, r.alwaysValidSchema)(e, t[o]))
            }),
            (e.callValidateCode = function (
              { schemaCode: e, data: r, it: { gen: a, topSchemaRef: s, schemaPath: n, errorPath: i }, it: l },
              c,
              u,
              d,
            ) {
              let p = d ? (0, t._)`${e}, ${r}, ${s}${n}` : r,
                h = [
                  [o.default.instancePath, (0, t.strConcat)(o.default.instancePath, i)],
                  [o.default.parentData, l.parentData],
                  [o.default.parentDataProperty, l.parentDataProperty],
                  [o.default.rootData, o.default.rootData],
                ]
              l.opts.dynamicRef && h.push([o.default.dynamicAnchors, o.default.dynamicAnchors])
              let m = (0, t._)`${p}, ${a.object(...h)}`
              return u !== t.nil ? (0, t._)`${c}.call(${u}, ${m})` : (0, t._)`${c}(${m})`
            }))
          let c = (0, t._)`new RegExp`
          ;((e.usePattern = function ({ gen: e, it: { opts: r } }, o) {
            let s = r.unicodeRegExp ? "u" : "",
              { regExp: n } = r.code,
              i = n(o, s)
            return e.scopeValue("pattern", {
              key: i.toString(),
              ref: i,
              code: (0, t._)`${"new RegExp" === n.code ? c : (0, a.useFunc)(e, n)}(${o}, ${s})`,
            })
          }),
            (e.validateArray = function (e) {
              let { gen: o, data: a, keyword: s, it: n } = e,
                i = o.name("valid")
              if (n.allErrors) {
                let e = o.let("valid", !0)
                return (l(() => o.assign(e, !1)), e)
              }
              return (o.var(i, !0), l(() => o.break()), i)
              function l(n) {
                let l = o.const("len", (0, t._)`${a}.length`)
                o.forRange("i", 0, l, (a) => {
                  ;(e.subschema({ keyword: s, dataProp: a, dataPropType: r.Type.Num }, i), o.if((0, t.not)(i), n))
                })
              }
            }),
            (e.validateUnion = function (e) {
              let { gen: o, schema: a, keyword: s, it: n } = e
              if (!Array.isArray(a)) throw Error("ajv implementation error")
              if (a.some((e) => (0, r.alwaysValidSchema)(n, e)) && !n.opts.unevaluated) return
              let i = o.let("valid", !1),
                l = o.name("_valid")
              ;(o.block(() =>
                a.forEach((r, a) => {
                  let n = e.subschema({ keyword: s, schemaProp: a, compositeRule: !0 }, l)
                  ;(o.assign(i, (0, t._)`${i} || ${l}`), e.mergeValidEvaluated(n, l) || o.if((0, t.not)(i)))
                }),
              ),
                e.result(
                  i,
                  () => e.reset(),
                  () => e.error(!0),
                ))
            }))
        }),
        ab = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.validateKeywordUsage = e.validSchemaType = e.funcKeywordCode = e.macroKeywordCode = void 0))
          let t = ad(),
            r = ah(),
            o = a_(),
            a = am()
          function s(e) {
            let { gen: r, data: o, it: a } = e
            r.if(a.parentData, () => r.assign(o, (0, t._)`${a.parentData}[${a.parentDataProperty}]`))
          }
          function n(e, r, o) {
            if (void 0 === o) throw Error(`keyword "${r}" failed to compile`)
            return e.scopeValue("keyword", "function" == typeof o ? { ref: o } : { ref: o, code: (0, t.stringify)(o) })
          }
          ;((e.macroKeywordCode = function (e, r) {
            let { gen: o, keyword: a, schema: s, parentSchema: i, it: l } = e,
              c = r.macro.call(l.self, s, i, l),
              u = n(o, a, c)
            !1 !== l.opts.validateSchema && l.self.validateSchema(c, !0)
            let d = o.name("valid")
            ;(e.subschema(
              {
                schema: c,
                schemaPath: t.nil,
                errSchemaPath: `${l.errSchemaPath}/${a}`,
                topSchemaRef: u,
                compositeRule: !0,
              },
              d,
            ),
              e.pass(d, () => e.error(!0)))
          }),
            (e.funcKeywordCode = function (e, i) {
              var l
              let { gen: c, keyword: u, schema: d, parentSchema: p, $data: h, it: m } = e
              !(function ({ schemaEnv: e }, t) {
                if (t.async && !e.$async) throw Error("async keyword in sync schema")
              })(m, i)
              let f = n(c, u, !h && i.compile ? i.compile.call(m.self, d, p, m) : i.validate),
                g = c.let("valid")
              function y(a = i.async ? (0, t._)`await ` : t.nil) {
                let s = m.opts.passContext ? r.default.this : r.default.self,
                  n = !(("compile" in i && !h) || !1 === i.schema)
                c.assign(g, (0, t._)`${a}${(0, o.callValidateCode)(e, f, s, n)}`, i.modifying)
              }
              function v(e) {
                var r
                c.if((0, t.not)(null != (r = i.valid) ? r : g), e)
              }
              ;(e.block$data(g, function () {
                if (!1 === i.errors) (y(), i.modifying && s(e), v(() => e.error()))
                else {
                  let o,
                    n,
                    l = i.async
                      ? ((o = c.let("ruleErrs", null)),
                        c.try(
                          () => y((0, t._)`await `),
                          (e) =>
                            c.assign(g, !1).if(
                              (0, t._)`${e} instanceof ${m.ValidationError}`,
                              () => c.assign(o, (0, t._)`${e}.errors`),
                              () => c.throw(e),
                            ),
                        ),
                        o)
                      : ((n = (0, t._)`${f}.errors`), c.assign(n, null), y(t.nil), n)
                  ;(i.modifying && s(e),
                    v(() =>
                      (function (e, o) {
                        let { gen: s } = e
                        s.if(
                          (0, t._)`Array.isArray(${o})`,
                          () => {
                            ;(s
                              .assign(
                                r.default.vErrors,
                                (0, t._)`${r.default.vErrors} === null ? ${o} : ${r.default.vErrors}.concat(${o})`,
                              )
                              .assign(r.default.errors, (0, t._)`${r.default.vErrors}.length`),
                              (0, a.extendErrors)(e))
                          },
                          () => e.error(),
                        )
                      })(e, l),
                    ))
                }
              }),
                e.ok(null != (l = i.valid) ? l : g))
            }),
            (e.validSchemaType = function (e, t, r = !1) {
              return (
                !t.length ||
                t.some((t) =>
                  "array" === t
                    ? Array.isArray(e)
                    : "object" === t
                      ? e && "object" == typeof e && !Array.isArray(e)
                      : typeof e == t || (r && void 0 === e),
                )
              )
            }),
            (e.validateKeywordUsage = function ({ schema: e, opts: t, self: r, errSchemaPath: o }, a, s) {
              if (Array.isArray(a.keyword) ? !a.keyword.includes(s) : a.keyword !== s)
                throw Error("ajv implementation error")
              let n = a.dependencies
              if (null == n ? void 0 : n.some((t) => !Object.prototype.hasOwnProperty.call(e, t)))
                throw Error(`parent schema must have dependencies of ${s}: ${n.join(",")}`)
              if (a.validateSchema && !a.validateSchema(e[s])) {
                let e = `keyword "${s}" value is invalid at path "${o}": ` + r.errorsText(a.validateSchema.errors)
                if ("log" === t.validateSchema) r.logger.error(e)
                else throw Error(e)
              }
            }))
        }),
        aP = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.extendSubschemaMode = e.extendSubschemaData = e.getSubschema = void 0))
          let t = ad(),
            r = ap()
          ;((e.getSubschema = function (
            e,
            { keyword: o, schemaProp: a, schema: s, schemaPath: n, errSchemaPath: i, topSchemaRef: l },
          ) {
            if (void 0 !== o && void 0 !== s) throw Error('both "keyword" and "schema" passed, only one allowed')
            if (void 0 !== o) {
              let s = e.schema[o]
              return void 0 === a
                ? {
                    schema: s,
                    schemaPath: (0, t._)`${e.schemaPath}${(0, t.getProperty)(o)}`,
                    errSchemaPath: `${e.errSchemaPath}/${o}`,
                  }
                : {
                    schema: s[a],
                    schemaPath: (0, t._)`${e.schemaPath}${(0, t.getProperty)(o)}${(0, t.getProperty)(a)}`,
                    errSchemaPath: `${e.errSchemaPath}/${o}/${(0, r.escapeFragment)(a)}`,
                  }
            }
            if (void 0 !== s) {
              if (void 0 === n || void 0 === i || void 0 === l)
                throw Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"')
              return { schema: s, schemaPath: n, topSchemaRef: l, errSchemaPath: i }
            }
            throw Error('either "keyword" or "schema" must be passed')
          }),
            (e.extendSubschemaData = function (
              e,
              o,
              { dataProp: a, dataPropType: s, data: n, dataTypes: i, propertyName: l },
            ) {
              if (void 0 !== n && void 0 !== a) throw Error('both "data" and "dataProp" passed, only one allowed')
              let { gen: c } = o
              if (void 0 !== a) {
                let { errorPath: n, dataPathArr: i, opts: l } = o
                ;(u(c.let("data", (0, t._)`${o.data}${(0, t.getProperty)(a)}`, !0)),
                  (e.errorPath = (0, t.str)`${n}${(0, r.getErrorPath)(a, s, l.jsPropertySyntax)}`),
                  (e.parentDataProperty = (0, t._)`${a}`),
                  (e.dataPathArr = [...i, e.parentDataProperty]))
              }
              function u(t) {
                ;((e.data = t),
                  (e.dataLevel = o.dataLevel + 1),
                  (e.dataTypes = []),
                  (o.definedProperties = new Set()),
                  (e.parentData = o.data),
                  (e.dataNames = [...o.dataNames, t]))
              }
              ;(void 0 !== n &&
                (u(n instanceof t.Name ? n : c.let("data", n, !0)), void 0 !== l && (e.propertyName = l)),
                i && (e.dataTypes = i))
            }),
            (e.extendSubschemaMode = function (
              e,
              { jtdDiscriminator: t, jtdMetadata: r, compositeRule: o, createErrors: a, allErrors: s },
            ) {
              ;(void 0 !== o && (e.compositeRule = o),
                void 0 !== a && (e.createErrors = a),
                void 0 !== s && (e.allErrors = s),
                (e.jtdDiscriminator = t),
                (e.jtdMetadata = r))
            }))
        }),
        a$ = C((e, t) => {
          t.exports = function e(t, r) {
            if (t === r) return !0
            if (t && r && "object" == typeof t && "object" == typeof r) {
              if (t.constructor !== r.constructor) return !1
              if (Array.isArray(t)) {
                if ((o = t.length) != r.length) return !1
                for (a = o; 0 != a--;) if (!e(t[a], r[a])) return !1
                return !0
              }
              if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags
              if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf()
              if (t.toString !== Object.prototype.toString) return t.toString() === r.toString()
              if ((o = (s = Object.keys(t)).length) !== Object.keys(r).length) return !1
              for (a = o; 0 != a--;) if (!Object.prototype.hasOwnProperty.call(r, s[a])) return !1
              for (a = o; 0 != a--;) {
                var o,
                  a,
                  s,
                  n = s[a]
                if (!e(t[n], r[n])) return !1
              }
              return !0
            }
            return t != t && r != r
          }
        }),
        aw = C((e, t) => {
          var r = (t.exports = function (e, t, o) {
            "function" == typeof t && ((o = t), (t = {}))
            var a = "function" == typeof (o = t.cb || o) ? o : o.pre || function () {}
            !(function e(t, o, a, s, n, i, l, c, u, d) {
              if (s && "object" == typeof s && !Array.isArray(s)) {
                for (var p in (o(s, n, i, l, c, u, d), s)) {
                  var h = s[p]
                  if (Array.isArray(h)) {
                    if (p in r.arrayKeywords)
                      for (var m = 0; m < h.length; m++) e(t, o, a, h[m], n + "/" + p + "/" + m, i, n, p, s, m)
                  } else if (p in r.propsKeywords) {
                    if (h && "object" == typeof h)
                      for (var f in h)
                        e(t, o, a, h[f], n + "/" + p + "/" + f.replace(/~/g, "~0").replace(/\//g, "~1"), i, n, p, s, f)
                  } else
                    (p in r.keywords || (t.allKeys && !(p in r.skipKeywords))) && e(t, o, a, h, n + "/" + p, i, n, p, s)
                }
                a(s, n, i, l, c, u, d)
              }
            })(t, a, o.post || function () {}, e, "", e)
          })
          ;((r.keywords = {
            additionalItems: !0,
            items: !0,
            contains: !0,
            additionalProperties: !0,
            propertyNames: !0,
            not: !0,
            if: !0,
            then: !0,
            else: !0,
          }),
            (r.arrayKeywords = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }),
            (r.propsKeywords = { $defs: !0, definitions: !0, properties: !0, patternProperties: !0, dependencies: !0 }),
            (r.skipKeywords = {
              default: !0,
              enum: !0,
              const: !0,
              required: !0,
              maximum: !0,
              minimum: !0,
              exclusiveMaximum: !0,
              exclusiveMinimum: !0,
              multipleOf: !0,
              maxLength: !0,
              minLength: !0,
              pattern: !0,
              format: !0,
              maxItems: !0,
              minItems: !0,
              uniqueItems: !0,
              maxProperties: !0,
              minProperties: !0,
            }))
        }),
        aR = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.getSchemaRefs = e.resolveUrl = e.normalizeId = e._getFullPath = e.getFullPath = e.inlineRef = void 0))
          let t = ap(),
            r = a$(),
            o = aw(),
            a = new Set([
              "type",
              "format",
              "pattern",
              "maxLength",
              "minLength",
              "maxProperties",
              "minProperties",
              "maxItems",
              "minItems",
              "maximum",
              "minimum",
              "uniqueItems",
              "multipleOf",
              "required",
              "enum",
              "const",
            ])
          e.inlineRef = function (e, r = !0) {
            return (
              "boolean" == typeof e ||
              (!0 === r
                ? !(function e(t) {
                    for (let r in t) {
                      if (s.has(r)) return !0
                      let o = t[r]
                      if ((Array.isArray(o) && o.some(e)) || ("object" == typeof o && e(o))) return !0
                    }
                    return !1
                  })(e)
                : !!r &&
                  (function e(r) {
                    let o = 0
                    for (let s in r)
                      if (
                        "$ref" === s ||
                        (o++,
                        !a.has(s) &&
                          ("object" == typeof r[s] && (0, t.eachItem)(r[s], (t) => (o += e(t))), 1 / 0 === o))
                      )
                        return 1 / 0
                    return o
                  })(e) <= r)
            )
          }
          let s = new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"])
          function n(e, t = "", r) {
            return (!1 !== r && (t = c(t)), i(e, e.parse(t)))
          }
          function i(e, t) {
            return e.serialize(t).split("#")[0] + "#"
          }
          ;((e.getFullPath = n), (e._getFullPath = i))
          let l = /#\/?$/
          function c(e) {
            return e ? e.replace(l, "") : ""
          }
          ;((e.normalizeId = c),
            (e.resolveUrl = function (e, t, r) {
              return ((r = c(r)), e.resolve(t, r))
            }))
          let u = /^[a-z_][-a-z0-9._]*$/i
          e.getSchemaRefs = function (e, t) {
            if ("boolean" == typeof e) return {}
            let { schemaId: a, uriResolver: s } = this.opts,
              i = c(e[a] || t),
              l = { "": i },
              d = n(s, i, !1),
              p = {},
              h = new Set()
            return (
              o(e, { allKeys: !0 }, (e, t, r, o) => {
                if (void 0 === o) return
                let s = d + t,
                  n = l[o]
                function i(t) {
                  let r = this.opts.uriResolver.resolve
                  if (((t = c(n ? r(n, t) : t)), h.has(t))) throw f(t)
                  h.add(t)
                  let o = this.refs[t]
                  return (
                    "string" == typeof o && (o = this.refs[o]),
                    "object" == typeof o
                      ? m(e, o.schema, t)
                      : t !== c(s) && ("#" === t[0] ? (m(e, p[t], t), (p[t] = e)) : (this.refs[t] = s)),
                    t
                  )
                }
                function g(e) {
                  if ("string" == typeof e) {
                    if (!u.test(e)) throw Error(`invalid anchor "${e}"`)
                    i.call(this, `#${e}`)
                  }
                }
                ;("string" == typeof e[a] && (n = i.call(this, e[a])),
                  g.call(this, e.$anchor),
                  g.call(this, e.$dynamicAnchor),
                  (l[t] = n))
              }),
              p
            )
            function m(e, t, o) {
              if (void 0 !== t && !r(e, t)) throw f(o)
            }
            function f(e) {
              return Error(`reference "${e}" resolves to more than one schema`)
            }
          }
        }),
        aj = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.getData = e.KeywordCxt = e.validateFunctionCode = void 0))
          let t = af(),
            r = av(),
            o = ay(),
            a = av(),
            s = aS(),
            n = ab(),
            i = aP(),
            l = ad(),
            c = ah(),
            u = aR(),
            d = ap(),
            p = am()
          function h({ gen: e, validateName: t, schema: r, schemaEnv: o, opts: a }, s) {
            var n
            a.code.es5
              ? e.func(t, (0, l._)`${c.default.data}, ${c.default.valCxt}`, o.$async, () => {
                  var t, o
                  ;(e.code((0, l._)`"use strict"; ${m(r, a)}`),
                    (t = e),
                    (o = a),
                    t.if(
                      c.default.valCxt,
                      () => {
                        ;(t.var(c.default.instancePath, (0, l._)`${c.default.valCxt}.${c.default.instancePath}`),
                          t.var(c.default.parentData, (0, l._)`${c.default.valCxt}.${c.default.parentData}`),
                          t.var(
                            c.default.parentDataProperty,
                            (0, l._)`${c.default.valCxt}.${c.default.parentDataProperty}`,
                          ),
                          t.var(c.default.rootData, (0, l._)`${c.default.valCxt}.${c.default.rootData}`),
                          o.dynamicRef &&
                            t.var(c.default.dynamicAnchors, (0, l._)`${c.default.valCxt}.${c.default.dynamicAnchors}`))
                      },
                      () => {
                        ;(t.var(c.default.instancePath, (0, l._)`""`),
                          t.var(c.default.parentData, (0, l._)`undefined`),
                          t.var(c.default.parentDataProperty, (0, l._)`undefined`),
                          t.var(c.default.rootData, c.default.data),
                          o.dynamicRef && t.var(c.default.dynamicAnchors, (0, l._)`{}`))
                      },
                    ),
                    e.code(s))
                })
              : e.func(
                  t,
                  (0,
                  l._)`${c.default.data}, ${((n = a), (0, l._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${n.dynamicRef ? (0, l._)`, ${c.default.dynamicAnchors}={}` : l.nil}}={}`)}`,
                  o.$async,
                  () => e.code(m(r, a)).code(s),
                )
          }
          function m(e, t) {
            let r = "object" == typeof e && e[t.schemaId]
            return r && (t.code.source || t.code.process) ? (0, l._)`/*# sourceURL=${r} */` : l.nil
          }
          function f({ schema: e, self: t }) {
            if ("boolean" == typeof e) return !e
            for (let r in e) if (t.RULES.all[r]) return !0
            return !1
          }
          function g(e) {
            return "boolean" != typeof e.schema
          }
          function y(e) {
            ;((0, d.checkUnknownRules)(e),
              (function (e) {
                let { schema: t, errSchemaPath: r, opts: o, self: a } = e
                t.$ref &&
                  o.ignoreKeywordsWithRef &&
                  (0, d.schemaHasRulesButRef)(t, a.RULES) &&
                  a.logger.warn(`$ref: keywords ignored in schema at path "${r}"`)
              })(e))
          }
          function v(e, t) {
            if (e.opts.jtd) return _(e, [], !1, t)
            let o = (0, r.getSchemaTypes)(e.schema)
            _(e, o, !(0, r.coerceAndCheckDataType)(e, o), t)
          }
          function S({ gen: e, schemaEnv: t, schema: r, errSchemaPath: o, opts: a }) {
            let s = r.$comment
            if (!0 === a.$comment) e.code((0, l._)`${c.default.self}.logger.log(${s})`)
            else if ("function" == typeof a.$comment) {
              let r = (0, l.str)`${o}/$comment`,
                a = e.scopeValue("root", { ref: t.root })
              e.code((0, l._)`${c.default.self}.opts.$comment(${s}, ${r}, ${a}.schema)`)
            }
          }
          function _(e, t, r, s) {
            var n, i, u, p
            let { gen: h, schema: m, data: f, allErrors: g, opts: y, self: v } = e,
              { RULES: S } = v
            if (m.$ref && (y.ignoreKeywordsWithRef || !(0, d.schemaHasRulesButRef)(m, S)))
              return void h.block(() => R(e, "$ref", S.all.$ref.definition))
            function _(n) {
              ;(0, o.shouldUseGroup)(m, n) &&
                (n.type
                  ? (h.if((0, a.checkDataType)(n.type, f, y.strictNumbers)),
                    b(e, n),
                    1 === t.length && t[0] === n.type && r && (h.else(), (0, a.reportTypeError)(e)),
                    h.endIf())
                  : b(e, n),
                g || h.if((0, l._)`${c.default.errors} === ${s || 0}`))
            }
            ;(y.jtd ||
              ((n = e),
              (i = t),
              !n.schemaEnv.meta &&
                n.opts.strictTypes &&
                ((function (e, t) {
                  if (t.length) {
                    if (!e.dataTypes.length) {
                      e.dataTypes = t
                      return
                    }
                    ;(t.forEach((t) => {
                      P(e.dataTypes, t) || $(e, `type "${t}" not allowed by context "${e.dataTypes.join(",")}"`)
                    }),
                      (function (e, t) {
                        let r = []
                        for (let o of e.dataTypes)
                          P(t, o) ? r.push(o) : t.includes("integer") && "number" === o && r.push("integer")
                        e.dataTypes = r
                      })(e, t))
                  }
                })(n, i),
                n.opts.allowUnionTypes ||
                  ((u = n),
                  (p = i).length > 1 &&
                    !(2 === p.length && p.includes("null")) &&
                    $(u, "use allowUnionTypes to allow union type keyword")),
                (function (e, t) {
                  let r = e.self.RULES.all
                  for (let a in r) {
                    let s = r[a]
                    if ("object" == typeof s && (0, o.shouldUseRule)(e.schema, s)) {
                      let { type: r } = s.definition
                      r.length &&
                        !r.some((e) => {
                          var r, o
                          return ((r = t), (o = e), r.includes(o) || ("number" === o && r.includes("integer")))
                        }) &&
                        $(e, `missing type "${r.join(",")}" for keyword "${a}"`)
                    }
                  }
                })(n, n.dataTypes))),
              h.block(() => {
                for (let e of S.rules) _(e)
                _(S.post)
              }))
          }
          function b(e, t) {
            let {
              gen: r,
              schema: a,
              opts: { useDefaults: n },
            } = e
            ;(n && (0, s.assignDefaults)(e, t.type),
              r.block(() => {
                for (let r of t.rules) (0, o.shouldUseRule)(a, r) && R(e, r.keyword, r.definition, t.type)
              }))
          }
          function P(e, t) {
            return e.includes(t) || ("integer" === t && e.includes("number"))
          }
          function $(e, t) {
            let r = e.schemaEnv.baseId + e.errSchemaPath
            ;((t += ` at "${r}" (strictTypes)`), (0, d.checkStrictMode)(e, t, e.opts.strictTypes))
          }
          e.validateFunctionCode = function (e) {
            g(e) && (y(e), f(e))
              ? (function (e) {
                  let { schema: t, opts: r, gen: o } = e
                  h(e, () => {
                    ;(r.$comment && t.$comment && S(e),
                      (function (e) {
                        let { schema: t, opts: r } = e
                        void 0 !== t.default &&
                          r.useDefaults &&
                          r.strictSchema &&
                          (0, d.checkStrictMode)(e, "default is ignored in the schema root")
                      })(e),
                      o.let(c.default.vErrors, null),
                      o.let(c.default.errors, 0),
                      r.unevaluated &&
                        (function (e) {
                          let { gen: t, validateName: r } = e
                          ;((e.evaluated = t.const("evaluated", (0, l._)`${r}.evaluated`)),
                            t.if((0, l._)`${e.evaluated}.dynamicProps`, () =>
                              t.assign((0, l._)`${e.evaluated}.props`, (0, l._)`undefined`),
                            ),
                            t.if((0, l._)`${e.evaluated}.dynamicItems`, () =>
                              t.assign((0, l._)`${e.evaluated}.items`, (0, l._)`undefined`),
                            ))
                        })(e),
                      v(e),
                      (function (e) {
                        let { gen: t, schemaEnv: r, validateName: o, ValidationError: a, opts: s } = e
                        r.$async
                          ? t.if(
                              (0, l._)`${c.default.errors} === 0`,
                              () => t.return(c.default.data),
                              () => t.throw((0, l._)`new ${a}(${c.default.vErrors})`),
                            )
                          : (t.assign((0, l._)`${o}.errors`, c.default.vErrors),
                            s.unevaluated &&
                              (function ({ gen: e, evaluated: t, props: r, items: o }) {
                                ;(r instanceof l.Name && e.assign((0, l._)`${t}.props`, r),
                                  o instanceof l.Name && e.assign((0, l._)`${t}.items`, o))
                              })(e),
                            t.return((0, l._)`${c.default.errors} === 0`))
                      })(e))
                  })
                })(e)
              : h(e, () => (0, t.topBoolOrEmptySchema)(e))
          }
          var w = class {
            constructor(e, t, r) {
              if (
                ((0, n.validateKeywordUsage)(e, t, r),
                (this.gen = e.gen),
                (this.allErrors = e.allErrors),
                (this.keyword = r),
                (this.data = e.data),
                (this.schema = e.schema[r]),
                (this.$data = t.$data && e.opts.$data && this.schema && this.schema.$data),
                (this.schemaValue = (0, d.schemaRefOrVal)(e, this.schema, r, this.$data)),
                (this.schemaType = t.schemaType),
                (this.parentSchema = e.schema),
                (this.params = {}),
                (this.it = e),
                (this.def = t),
                this.$data)
              )
                this.schemaCode = e.gen.const("vSchema", E(this.$data, e))
              else if (
                ((this.schemaCode = this.schemaValue),
                !(0, n.validSchemaType)(this.schema, t.schemaType, t.allowUndefined))
              )
                throw Error(`${r} value must be ${JSON.stringify(t.schemaType)}`)
              ;("code" in t ? t.trackErrors : !1 !== t.errors) &&
                (this.errsCount = e.gen.const("_errs", c.default.errors))
            }
            result(e, t, r) {
              this.failResult((0, l.not)(e), t, r)
            }
            failResult(e, t, r) {
              ;(this.gen.if(e),
                r ? r() : this.error(),
                t
                  ? (this.gen.else(), t(), this.allErrors && this.gen.endIf())
                  : this.allErrors
                    ? this.gen.endIf()
                    : this.gen.else())
            }
            pass(e, t) {
              this.failResult((0, l.not)(e), void 0, t)
            }
            fail(e) {
              if (void 0 === e) {
                ;(this.error(), this.allErrors || this.gen.if(!1))
                return
              }
              ;(this.gen.if(e), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else())
            }
            fail$data(e) {
              if (!this.$data) return this.fail(e)
              let { schemaCode: t } = this
              this.fail((0, l._)`${t} !== undefined && (${(0, l.or)(this.invalid$data(), e)})`)
            }
            error(e, t, r) {
              if (t) {
                ;(this.setParams(t), this._error(e, r), this.setParams({}))
                return
              }
              this._error(e, r)
            }
            _error(e, t) {
              ;(e ? p.reportExtraError : p.reportError)(this, this.def.error, t)
            }
            $dataError() {
              ;(0, p.reportError)(this, this.def.$dataError || p.keyword$DataError)
            }
            reset() {
              if (void 0 === this.errsCount) throw Error('add "trackErrors" to keyword definition')
              ;(0, p.resetErrorsCount)(this.gen, this.errsCount)
            }
            ok(e) {
              this.allErrors || this.gen.if(e)
            }
            setParams(e, t) {
              t ? Object.assign(this.params, e) : (this.params = e)
            }
            block$data(e, t, r = l.nil) {
              this.gen.block(() => {
                ;(this.check$data(e, r), t())
              })
            }
            check$data(e = l.nil, t = l.nil) {
              if (!this.$data) return
              let { gen: r, schemaCode: o, schemaType: a, def: s } = this
              ;(r.if((0, l.or)((0, l._)`${o} === undefined`, t)),
                e !== l.nil && r.assign(e, !0),
                (a.length || s.validateSchema) &&
                  (r.elseIf(this.invalid$data()), this.$dataError(), e !== l.nil && r.assign(e, !1)),
                r.else())
            }
            invalid$data() {
              let { gen: e, schemaCode: t, schemaType: r, def: o, it: s } = this
              return (0, l.or)(
                (function () {
                  if (r.length) {
                    if (!(t instanceof l.Name)) throw Error("ajv implementation error")
                    let e = Array.isArray(r) ? r : [r]
                    return (0, l._)`${(0, a.checkDataTypes)(e, t, s.opts.strictNumbers, a.DataType.Wrong)}`
                  }
                  return l.nil
                })(),
                (function () {
                  if (o.validateSchema) {
                    let r = e.scopeValue("validate$data", { ref: o.validateSchema })
                    return (0, l._)`!${r}(${t})`
                  }
                  return l.nil
                })(),
              )
            }
            subschema(e, r) {
              let o = (0, i.getSubschema)(this.it, e)
              ;((0, i.extendSubschemaData)(o, this.it, e), (0, i.extendSubschemaMode)(o, e))
              let a = { ...this.it, ...o, items: void 0, props: void 0 }
              return (
                !(function (e, r) {
                  if (g(e) && (y(e), f(e)))
                    return (function (e, t) {
                      var r
                      let o,
                        { schema: a, gen: s, opts: n } = e
                      ;(n.$comment && a.$comment && S(e),
                        (o = (r = e).schema[r.opts.schemaId]) &&
                          (r.baseId = (0, u.resolveUrl)(r.opts.uriResolver, r.baseId, o)),
                        (function (e) {
                          if (e.schema.$async && !e.schemaEnv.$async) throw Error("async schema in sync schema")
                        })(e))
                      let i = s.const("_errs", c.default.errors)
                      ;(v(e, i), s.var(t, (0, l._)`${i} === ${c.default.errors}`))
                    })(e, r)
                  ;(0, t.boolOrEmptySchema)(e, r)
                })(a, r),
                a
              )
            }
            mergeEvaluated(e, t) {
              let { it: r, gen: o } = this
              r.opts.unevaluated &&
                (!0 !== r.props && void 0 !== e.props && (r.props = d.mergeEvaluated.props(o, e.props, r.props, t)),
                !0 !== r.items && void 0 !== e.items && (r.items = d.mergeEvaluated.items(o, e.items, r.items, t)))
            }
            mergeValidEvaluated(e, t) {
              let { it: r, gen: o } = this
              if (r.opts.unevaluated && (!0 !== r.props || !0 !== r.items))
                return (o.if(t, () => this.mergeEvaluated(e, l.Name)), !0)
            }
          }
          function R(e, t, r, o) {
            let a = new w(e, r, t)
            "code" in r
              ? r.code(a, o)
              : a.$data && r.validate
                ? (0, n.funcKeywordCode)(a, r)
                : "macro" in r
                  ? (0, n.macroKeywordCode)(a, r)
                  : (r.compile || r.validate) && (0, n.funcKeywordCode)(a, r)
          }
          e.KeywordCxt = w
          let j = /^\/(?:[^~]|~0|~1)*$/,
            k = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/
          function E(e, { dataLevel: t, dataNames: r, dataPathArr: o }) {
            let a, s
            if ("" === e) return c.default.rootData
            if ("/" === e[0]) {
              if (!j.test(e)) throw Error(`Invalid JSON-pointer: ${e}`)
              ;((a = e), (s = c.default.rootData))
            } else {
              let n = k.exec(e)
              if (!n) throw Error(`Invalid JSON-pointer: ${e}`)
              let l = +n[1]
              if ("#" === (a = n[2])) {
                if (l >= t) throw Error(i("property/index", l))
                return o[t - l]
              }
              if (l > t) throw Error(i("data", l))
              if (((s = r[t - l]), !a)) return s
            }
            let n = s
            for (let e of a.split("/"))
              e &&
                ((s = (0, l._)`${s}${(0, l.getProperty)((0, d.unescapeJsonPointer)(e))}`), (n = (0, l._)`${n} && ${s}`))
            return n
            function i(e, r) {
              return `Cannot access ${e} ${r} levels up, current level is ${t}`
            }
          }
          e.getData = E
        }),
        ak = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = class extends Error {
              constructor(e) {
                ;(super("validation failed"), (this.errors = e), (this.ajv = this.validation = !0))
              }
            }))
        }),
        aE = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = aR()
          e.default = class extends Error {
            constructor(e, r, o, a) {
              ;(super(a || `can't resolve reference ${o} from id ${r}`),
                (this.missingRef = (0, t.resolveUrl)(e, r, o)),
                (this.missingSchema = (0, t.normalizeId)((0, t.getFullPath)(e, this.missingRef))))
            }
          }
        }),
        aI = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.resolveSchema = e.getCompilingSchema = e.resolveRef = e.compileSchema = e.SchemaEnv = void 0))
          let t = ad(),
            r = ak(),
            o = ah(),
            a = aR(),
            s = ap(),
            n = aj()
          var i = class {
            constructor(e) {
              var t
              let r
              ;((this.refs = {}),
                (this.dynamicAnchors = {}),
                "object" == typeof e.schema && (r = e.schema),
                (this.schema = e.schema),
                (this.schemaId = e.schemaId),
                (this.root = e.root || this),
                (this.baseId =
                  null != (t = e.baseId) ? t : (0, a.normalizeId)(null == r ? void 0 : r[e.schemaId || "$id"])),
                (this.schemaPath = e.schemaPath),
                (this.localRefs = e.localRefs),
                (this.meta = e.meta),
                (this.$async = null == r ? void 0 : r.$async),
                (this.refs = {}))
            }
          }
          function l(e) {
            let s,
              i,
              l = u.call(this, e)
            if (l) return l
            let c = (0, a.getFullPath)(this.opts.uriResolver, e.root.baseId),
              { es5: d, lines: p } = this.opts.code,
              { ownProperties: h } = this.opts,
              m = new t.CodeGen(this.scope, { es5: d, lines: p, ownProperties: h })
            e.$async &&
              (s = m.scopeValue("Error", {
                ref: r.default,
                code: (0, t._)`require("ajv/dist/runtime/validation_error").default`,
              }))
            let f = m.scopeName("validate")
            e.validateName = f
            let g = {
              gen: m,
              allErrors: this.opts.allErrors,
              data: o.default.data,
              parentData: o.default.parentData,
              parentDataProperty: o.default.parentDataProperty,
              dataNames: [o.default.data],
              dataPathArr: [t.nil],
              dataLevel: 0,
              dataTypes: [],
              definedProperties: new Set(),
              topSchemaRef: m.scopeValue(
                "schema",
                !0 === this.opts.code.source ? { ref: e.schema, code: (0, t.stringify)(e.schema) } : { ref: e.schema },
              ),
              validateName: f,
              ValidationError: s,
              schema: e.schema,
              schemaEnv: e,
              rootId: c,
              baseId: e.baseId || c,
              schemaPath: t.nil,
              errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
              errorPath: (0, t._)`""`,
              opts: this.opts,
              self: this,
            }
            try {
              ;(this._compilations.add(e), (0, n.validateFunctionCode)(g), m.optimize(this.opts.code.optimize))
              let r = m.toString()
              ;((i = `${m.scopeRefs(o.default.scope)}return ${r}`),
                this.opts.code.process && (i = this.opts.code.process(i, e)))
              let a = Function(`${o.default.self}`, `${o.default.scope}`, i)(this, this.scope.get())
              if (
                (this.scope.value(f, { ref: a }),
                (a.errors = null),
                (a.schema = e.schema),
                (a.schemaEnv = e),
                e.$async && (a.$async = !0),
                !0 === this.opts.code.source &&
                  (a.source = { validateName: f, validateCode: r, scopeValues: m._values }),
                this.opts.unevaluated)
              ) {
                let { props: e, items: r } = g
                ;((a.evaluated = {
                  props: e instanceof t.Name ? void 0 : e,
                  items: r instanceof t.Name ? void 0 : r,
                  dynamicProps: e instanceof t.Name,
                  dynamicItems: r instanceof t.Name,
                }),
                  a.source && (a.source.evaluated = (0, t.stringify)(a.evaluated)))
              }
              return ((e.validate = a), e)
            } catch (t) {
              throw (
                delete e.validate,
                delete e.validateName,
                i && this.logger.error("Error compiling schema, function code:", i),
                t
              )
            } finally {
              this._compilations.delete(e)
            }
          }
          function c(e) {
            return (0, a.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : l.call(this, e)
          }
          function u(e) {
            for (let o of this._compilations) {
              var t, r
              if (((t = o), (r = e), t.schema === r.schema && t.root === r.root && t.baseId === r.baseId)) return o
            }
          }
          function d(e, t) {
            let r
            for (; "string" == typeof (r = this.refs[t]);) t = r
            return r || this.schemas[t] || p.call(this, e, t)
          }
          function p(e, t) {
            let r = this.opts.uriResolver.parse(t),
              o = (0, a._getFullPath)(this.opts.uriResolver, r),
              s = (0, a.getFullPath)(this.opts.uriResolver, e.baseId, void 0)
            if (Object.keys(e.schema).length > 0 && o === s) return m.call(this, r, e)
            let n = (0, a.normalizeId)(o),
              c = this.refs[n] || this.schemas[n]
            if ("string" == typeof c) {
              let t = p.call(this, e, c)
              if ("object" != typeof (null == t ? void 0 : t.schema)) return
              return m.call(this, r, t)
            }
            if ("object" == typeof (null == c ? void 0 : c.schema)) {
              if ((c.validate || l.call(this, c), n === (0, a.normalizeId)(t))) {
                let { schema: t } = c,
                  { schemaId: r } = this.opts,
                  o = t[r]
                return (
                  o && (s = (0, a.resolveUrl)(this.opts.uriResolver, s, o)),
                  new i({ schema: t, schemaId: r, root: e, baseId: s })
                )
              }
              return m.call(this, r, c)
            }
          }
          ;((e.SchemaEnv = i),
            (e.compileSchema = l),
            (e.resolveRef = function (e, t, r) {
              var o
              r = (0, a.resolveUrl)(this.opts.uriResolver, t, r)
              let s = e.refs[r]
              if (s) return s
              let n = d.call(this, e, r)
              if (void 0 === n) {
                let a = null == (o = e.localRefs) ? void 0 : o[r],
                  { schemaId: s } = this.opts
                a && (n = new i({ schema: a, schemaId: s, root: e, baseId: t }))
              }
              if (void 0 !== n) return (e.refs[r] = c.call(this, n))
            }),
            (e.getCompilingSchema = u),
            (e.resolveSchema = p))
          let h = new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"])
          function m(e, { baseId: t, schema: r, root: o }) {
            var n
            let l
            if ((null == (n = e.fragment) ? void 0 : n[0]) !== "/") return
            for (let o of e.fragment.slice(1).split("/")) {
              if ("boolean" == typeof r) return
              let e = r[(0, s.unescapeFragment)(o)]
              if (void 0 === e) return
              let n = "object" == typeof (r = e) && r[this.opts.schemaId]
              !h.has(o) && n && (t = (0, a.resolveUrl)(this.opts.uriResolver, t, n))
            }
            if ("boolean" != typeof r && r.$ref && !(0, s.schemaHasRulesButRef)(r, this.RULES)) {
              let e = (0, a.resolveUrl)(this.opts.uriResolver, t, r.$ref)
              l = p.call(this, o, e)
            }
            let { schemaId: c } = this.opts
            if ((l = l || new i({ schema: r, schemaId: c, root: o, baseId: t })).schema !== l.root.schema) return l
          }
        }),
        aC = C((e, t) => {
          t.exports = {
            $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
            description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
            type: "object",
            required: ["$data"],
            properties: {
              $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] },
            },
            additionalProperties: !1,
          }
        }),
        ax = C((e, t) => {
          let r = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),
            o = RegExp.prototype.test.bind(
              /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u,
            )
          function a(e) {
            let t = "",
              r = 0,
              o = 0
            for (o = 0; o < e.length; o++)
              if (48 !== (r = e[o].charCodeAt(0))) {
                if (!((r >= 48 && r <= 57) || (r >= 65 && r <= 70) || (r >= 97 && r <= 102))) return ""
                t += e[o]
                break
              }
            for (o += 1; o < e.length; o++) {
              if (!(((r = e[o].charCodeAt(0)) >= 48 && r <= 57) || (r >= 65 && r <= 70) || (r >= 97 && r <= 102)))
                return ""
              t += e[o]
            }
            return t
          }
          function s(e) {
            return ((e.length = 0), !0)
          }
          function n(e, t, r) {
            if (e.length) {
              let o = a(e)
              if ("" === o) return ((r.error = !0), !1)
              ;(t.push(o), (e.length = 0))
            }
            return !0
          }
          function i(e) {
            if (
              2 >
              (function (e) {
                let t = 0
                for (let r = 0; r < e.length; r++) ":" === e[r] && t++
                return t
              })(e)
            )
              return { host: e, isIPV6: !1 }
            let t = (function (e) {
              let t = 0,
                r = { error: !1, address: "", zone: "" },
                o = [],
                i = [],
                l = !1,
                c = !1,
                u = n
              for (let a = 0; a < e.length; a++) {
                let n = e[a]
                if ("[" !== n && "]" !== n)
                  if (":" === n) {
                    if ((!0 === l && (c = !0), !u(i, o, r))) break
                    if (++t > 7) {
                      r.error = !0
                      break
                    }
                    ;(a > 0 && ":" === e[a - 1] && (l = !0), o.push(":"))
                    continue
                  } else if ("%" === n) {
                    if (!u(i, o, r)) break
                    u = s
                  } else {
                    i.push(n)
                    continue
                  }
              }
              return (
                i.length && (u === s ? (r.zone = i.join("")) : c ? o.push(i.join("")) : o.push(a(i))),
                (r.address = o.join("")),
                r
              )
            })(e)
            if (t.error) return { host: e, isIPV6: !1 }
            {
              let e = t.address,
                r = t.address
              return (t.zone && ((e += "%" + t.zone), (r += "%25" + t.zone)), { host: e, isIPV6: !0, escapedHost: r })
            }
          }
          t.exports = {
            nonSimpleDomain: RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u),
            recomposeAuthority: function (e) {
              let t = []
              if ((void 0 !== e.userinfo && (t.push(e.userinfo), t.push("@")), void 0 !== e.host)) {
                let r = unescape(e.host)
                if (!o(r)) {
                  let t = i(r)
                  r = !0 === t.isIPV6 ? `[${t.escapedHost}]` : e.host
                }
                t.push(r)
              }
              return (
                ("number" == typeof e.port || "string" == typeof e.port) && (t.push(":"), t.push(String(e.port))),
                t.length ? t.join("") : void 0
              )
            },
            normalizeComponentEncoding: function (e, t) {
              let r = !0 !== t ? escape : unescape
              return (
                void 0 !== e.scheme && (e.scheme = r(e.scheme)),
                void 0 !== e.userinfo && (e.userinfo = r(e.userinfo)),
                void 0 !== e.host && (e.host = r(e.host)),
                void 0 !== e.path && (e.path = r(e.path)),
                void 0 !== e.query && (e.query = r(e.query)),
                void 0 !== e.fragment && (e.fragment = r(e.fragment)),
                e
              )
            },
            removeDotSegments: function (e) {
              let t = e,
                r = [],
                o = -1,
                a = 0
              for (; (a = t.length);) {
                if (1 === a)
                  if ("." === t) break
                  else if ("/" === t) {
                    r.push("/")
                    break
                  } else {
                    r.push(t)
                    break
                  }
                if (2 === a) {
                  if ("." === t[0]) {
                    if ("." === t[1]) break
                    else if ("/" === t[1]) {
                      t = t.slice(2)
                      continue
                    }
                  } else if ("/" === t[0] && ("." === t[1] || "/" === t[1])) {
                    r.push("/")
                    break
                  }
                } else if (3 === a && "/.." === t) {
                  ;(0 !== r.length && r.pop(), r.push("/"))
                  break
                }
                if ("." === t[0]) {
                  if ("." === t[1]) {
                    if ("/" === t[2]) {
                      t = t.slice(3)
                      continue
                    }
                  } else if ("/" === t[1]) {
                    t = t.slice(2)
                    continue
                  }
                } else if ("/" === t[0] && "." === t[1]) {
                  if ("/" === t[2]) {
                    t = t.slice(2)
                    continue
                  } else if ("." === t[2] && "/" === t[3]) {
                    ;((t = t.slice(3)), 0 !== r.length && r.pop())
                    continue
                  }
                }
                if (-1 === (o = t.indexOf("/", 1))) {
                  r.push(t)
                  break
                }
                ;(r.push(t.slice(0, o)), (t = t.slice(o)))
              }
              return r.join("")
            },
            isIPv4: o,
            isUUID: r,
            normalizeIPv6: i,
            stringArrayToHexStripped: a,
          }
        }),
        aq = C((e, t) => {
          let { isUUID: r } = ax(),
            o = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,
            a = ["http", "https", "ws", "wss", "urn", "urn:uuid"]
          function s(e) {
            return (
              !0 === e.secure ||
              (!1 !== e.secure &&
                !!e.scheme &&
                3 === e.scheme.length &&
                ("w" === e.scheme[0] || "W" === e.scheme[0]) &&
                ("s" === e.scheme[1] || "S" === e.scheme[1]) &&
                ("s" === e.scheme[2] || "S" === e.scheme[2]))
            )
          }
          function n(e) {
            return (e.host || (e.error = e.error || "HTTP URIs must have a host."), e)
          }
          function i(e) {
            let t = "https" === String(e.scheme).toLowerCase()
            return ((e.port === (t ? 443 : 80) || "" === e.port) && (e.port = void 0), e.path || (e.path = "/"), e)
          }
          let l = { scheme: "http", domainHost: !0, parse: n, serialize: i },
            c = { scheme: "https", domainHost: l.domainHost, parse: n, serialize: i },
            u = {
              scheme: "ws",
              domainHost: !0,
              parse: function (e) {
                return (
                  (e.secure = s(e)),
                  (e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : "")),
                  (e.path = void 0),
                  (e.query = void 0),
                  e
                )
              },
              serialize: function (e) {
                if (
                  ((e.port === (s(e) ? 443 : 80) || "" === e.port) && (e.port = void 0),
                  "boolean" == typeof e.secure && ((e.scheme = e.secure ? "wss" : "ws"), (e.secure = void 0)),
                  e.resourceName)
                ) {
                  let [t, r] = e.resourceName.split("?")
                  ;((e.path = t && "/" !== t ? t : void 0), (e.query = r), (e.resourceName = void 0))
                }
                return ((e.fragment = void 0), e)
              },
            },
            d = { scheme: "wss", domainHost: u.domainHost, parse: u.parse, serialize: u.serialize },
            p = {
              http: l,
              https: c,
              ws: u,
              wss: d,
              urn: {
                scheme: "urn",
                parse: function (e, t) {
                  if (!e.path) return ((e.error = "URN can not be parsed"), e)
                  let r = e.path.match(o)
                  if (r) {
                    let o = t.scheme || e.scheme || "urn"
                    ;((e.nid = r[1].toLowerCase()), (e.nss = r[2]))
                    let a = h(`${o}:${t.nid || e.nid}`)
                    ;((e.path = void 0), a && (e = a.parse(e, t)))
                  } else e.error = e.error || "URN can not be parsed."
                  return e
                },
                serialize: function (e, t) {
                  if (void 0 === e.nid) throw Error("URN without nid cannot be serialized")
                  let r = t.scheme || e.scheme || "urn",
                    o = e.nid.toLowerCase(),
                    a = h(`${r}:${t.nid || o}`)
                  a && (e = a.serialize(e, t))
                  let s = e,
                    n = e.nss
                  return ((s.path = `${o || t.nid}:${n}`), (t.skipEscape = !0), s)
                },
                skipNormalize: !0,
              },
              "urn:uuid": {
                scheme: "urn:uuid",
                parse: function (e, t) {
                  return (
                    (e.uuid = e.nss),
                    (e.nss = void 0),
                    t.tolerant || (e.uuid && r(e.uuid)) || (e.error = e.error || "UUID is not valid."),
                    e
                  )
                },
                serialize: function (e) {
                  return ((e.nss = (e.uuid || "").toLowerCase()), e)
                },
                skipNormalize: !0,
              },
            }
          function h(e) {
            return (e && (p[e] || p[e.toLowerCase()])) || void 0
          }
          ;(Object.setPrototypeOf(p, null),
            (t.exports = {
              wsIsSecure: s,
              SCHEMES: p,
              isValidSchemeName: function (e) {
                return -1 !== a.indexOf(e)
              },
              getSchemeHandler: h,
            }))
        }),
        aT = C((e, t) => {
          let {
              normalizeIPv6: r,
              removeDotSegments: o,
              recomposeAuthority: a,
              normalizeComponentEncoding: s,
              isIPv4: n,
              nonSimpleDomain: i,
            } = ax(),
            { SCHEMES: l, getSchemeHandler: c } = aq()
          function u(e, t, r, a) {
            let s = {}
            return (
              a || ((e = h(d(e, r), r)), (t = h(d(t, r), r))),
              !(r = r || {}).tolerant && t.scheme
                ? ((s.scheme = t.scheme),
                  (s.userinfo = t.userinfo),
                  (s.host = t.host),
                  (s.port = t.port),
                  (s.path = o(t.path || "")),
                  (s.query = t.query))
                : (void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port
                    ? ((s.userinfo = t.userinfo),
                      (s.host = t.host),
                      (s.port = t.port),
                      (s.path = o(t.path || "")),
                      (s.query = t.query))
                    : (t.path
                        ? ("/" === t.path[0]
                            ? (s.path = o(t.path))
                            : ((void 0 === e.userinfo && void 0 === e.host && void 0 === e.port) || e.path
                                ? e.path
                                  ? (s.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path)
                                  : (s.path = t.path)
                                : (s.path = "/" + t.path),
                              (s.path = o(s.path))),
                          (s.query = t.query))
                        : ((s.path = e.path), void 0 !== t.query ? (s.query = t.query) : (s.query = e.query)),
                      (s.userinfo = e.userinfo),
                      (s.host = e.host),
                      (s.port = e.port)),
                  (s.scheme = e.scheme)),
              (s.fragment = t.fragment),
              s
            )
          }
          function d(e, t) {
            let r = {
                host: e.host,
                scheme: e.scheme,
                userinfo: e.userinfo,
                port: e.port,
                path: e.path,
                query: e.query,
                nid: e.nid,
                nss: e.nss,
                uuid: e.uuid,
                fragment: e.fragment,
                reference: e.reference,
                resourceName: e.resourceName,
                secure: e.secure,
                error: "",
              },
              s = Object.assign({}, t),
              n = [],
              i = c(s.scheme || r.scheme)
            ;(i && i.serialize && i.serialize(r, s),
              void 0 !== r.path &&
                (s.skipEscape
                  ? (r.path = unescape(r.path))
                  : ((r.path = escape(r.path)), void 0 !== r.scheme && (r.path = r.path.split("%3A").join(":")))),
              "suffix" !== s.reference && r.scheme && n.push(r.scheme, ":"))
            let l = a(r)
            if (
              (void 0 !== l &&
                ("suffix" !== s.reference && n.push("//"), n.push(l), r.path && "/" !== r.path[0] && n.push("/")),
              void 0 !== r.path)
            ) {
              let e = r.path
              ;(s.absolutePath || (i && i.absolutePath) || (e = o(e)),
                void 0 === l && "/" === e[0] && "/" === e[1] && (e = "/%2F" + e.slice(2)),
                n.push(e))
            }
            return (
              void 0 !== r.query && n.push("?", r.query),
              void 0 !== r.fragment && n.push("#", r.fragment),
              n.join("")
            )
          }
          let p =
            /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u
          function h(e, t) {
            let o = Object.assign({}, t),
              a = {
                scheme: void 0,
                userinfo: void 0,
                host: "",
                port: void 0,
                path: "",
                query: void 0,
                fragment: void 0,
              },
              s = !1
            "suffix" === o.reference && (e = o.scheme ? o.scheme + ":" + e : "//" + e)
            let l = e.match(p)
            if (l) {
              if (
                ((a.scheme = l[1]),
                (a.userinfo = l[3]),
                (a.host = l[4]),
                (a.port = parseInt(l[5], 10)),
                (a.path = l[6] || ""),
                (a.query = l[7]),
                (a.fragment = l[8]),
                isNaN(a.port) && (a.port = l[5]),
                a.host)
              )
                if (!1 === n(a.host)) {
                  let e = r(a.host)
                  ;((a.host = e.host.toLowerCase()), (s = e.isIPV6))
                } else s = !0
              ;(void 0 !== a.scheme ||
              void 0 !== a.userinfo ||
              void 0 !== a.host ||
              void 0 !== a.port ||
              void 0 !== a.query ||
              a.path
                ? void 0 === a.scheme
                  ? (a.reference = "relative")
                  : void 0 === a.fragment
                    ? (a.reference = "absolute")
                    : (a.reference = "uri")
                : (a.reference = "same-document"),
                o.reference &&
                  "suffix" !== o.reference &&
                  o.reference !== a.reference &&
                  (a.error = a.error || "URI is not a " + o.reference + " reference."))
              let t = c(o.scheme || a.scheme)
              if (
                !o.unicodeSupport &&
                (!t || !t.unicodeSupport) &&
                a.host &&
                (o.domainHost || (t && t.domainHost)) &&
                !1 === s &&
                i(a.host)
              )
                try {
                  a.host = URL.domainToASCII(a.host.toLowerCase())
                } catch (e) {
                  a.error = a.error || "Host's domain name can not be converted to ASCII: " + e
                }
              ;((!t || (t && !t.skipNormalize)) &&
                (-1 !== e.indexOf("%") &&
                  (void 0 !== a.scheme && (a.scheme = unescape(a.scheme)),
                  void 0 !== a.host && (a.host = unescape(a.host))),
                a.path && (a.path = escape(unescape(a.path))),
                a.fragment && (a.fragment = encodeURI(decodeURIComponent(a.fragment)))),
                t && t.parse && t.parse(a, o))
            } else a.error = a.error || "URI can not be parsed."
            return a
          }
          let m = {
            SCHEMES: l,
            normalize: function (e, t) {
              return ("string" == typeof e ? (e = d(h(e, t), t)) : "object" == typeof e && (e = h(d(e, t), t)), e)
            },
            resolve: function (e, t, r) {
              let o = r ? Object.assign({ scheme: "null" }, r) : { scheme: "null" },
                a = u(h(e, o), h(t, o), o, !0)
              return ((o.skipEscape = !0), d(a, o))
            },
            resolveComponent: u,
            equal: function (e, t, r) {
              return (
                "string" == typeof e
                  ? (e = d(s(h((e = unescape(e)), r), !0), { ...r, skipEscape: !0 }))
                  : "object" == typeof e && (e = d(s(e, !0), { ...r, skipEscape: !0 })),
                "string" == typeof t
                  ? (t = d(s(h((t = unescape(t)), r), !0), { ...r, skipEscape: !0 }))
                  : "object" == typeof t && (t = d(s(t, !0), { ...r, skipEscape: !0 })),
                e.toLowerCase() === t.toLowerCase()
              )
            },
            serialize: d,
            parse: h,
          }
          ;((t.exports = m), (t.exports.default = m), (t.exports.fastUri = m))
        }),
        aY = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = aT()
          ;((t.code = 'require("ajv/dist/runtime/uri").default'), (e.default = t))
        }),
        aO = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0))
          var t = aj()
          Object.defineProperty(e, "KeywordCxt", {
            enumerable: !0,
            get: function () {
              return t.KeywordCxt
            },
          })
          var r = ad()
          ;(Object.defineProperty(e, "_", {
            enumerable: !0,
            get: function () {
              return r._
            },
          }),
            Object.defineProperty(e, "str", {
              enumerable: !0,
              get: function () {
                return r.str
              },
            }),
            Object.defineProperty(e, "stringify", {
              enumerable: !0,
              get: function () {
                return r.stringify
              },
            }),
            Object.defineProperty(e, "nil", {
              enumerable: !0,
              get: function () {
                return r.nil
              },
            }),
            Object.defineProperty(e, "Name", {
              enumerable: !0,
              get: function () {
                return r.Name
              },
            }),
            Object.defineProperty(e, "CodeGen", {
              enumerable: !0,
              get: function () {
                return r.CodeGen
              },
            }))
          let o = ak(),
            a = aE(),
            s = ag(),
            n = aI(),
            i = ad(),
            l = aR(),
            c = av(),
            u = ap(),
            d = aC(),
            p = aY(),
            h = (e, t) => new RegExp(e, t)
          h.code = "new RegExp"
          let m = ["removeAdditional", "useDefaults", "coerceTypes"],
            f = new Set([
              "validate",
              "serialize",
              "parse",
              "wrapper",
              "root",
              "schema",
              "keyword",
              "pattern",
              "formats",
              "validate$data",
              "func",
              "obj",
              "Error",
            ]),
            g = {
              errorDataPath: "",
              format: "`validateFormats: false` can be used instead.",
              nullable: '"nullable" keyword is supported by default.',
              jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
              extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
              missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
              processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
              sourceCode: "Use option `code: {source: true}`",
              strictDefaults: "It is default now, see option `strict`.",
              strictKeywords: "It is default now, see option `strict`.",
              uniqueItems: '"uniqueItems" keyword is always validated.',
              unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
              cache: "Map is used as cache, schema object as key.",
              serialize: "Map is used as cache, schema object as key.",
              ajvErrors: "It is default now.",
            },
            y = {
              ignoreKeywordsWithRef: "",
              jsPropertySyntax: "",
              unicode: '"minLength"/"maxLength" account for unicode characters by default.',
            }
          var v = class {
            constructor(e = {}) {
              var t, r, o, a, n, l, c, u, d, m, v, _, j, k, E, I, C, x, q, T, Y, O, M, N, z, A
              let L, H, D, V, U
              ;((this.schemas = {}),
                (this.refs = {}),
                (this.formats = {}),
                (this._compilations = new Set()),
                (this._loading = {}),
                (this._cache = new Map()),
                (e = this.opts =
                  {
                    ...e,
                    ...((L = (t = e).strict),
                    (D = !0 === (H = null == (r = t.code) ? void 0 : r.optimize) || void 0 === H ? 1 : H || 0),
                    (V = null != (a = null == (o = t.code) ? void 0 : o.regExp) ? a : h),
                    (U = null != (n = t.uriResolver) ? n : p.default),
                    {
                      strictSchema: null == (c = null != (l = t.strictSchema) ? l : L) || c,
                      strictNumbers: null == (d = null != (u = t.strictNumbers) ? u : L) || d,
                      strictTypes: null != (v = null != (m = t.strictTypes) ? m : L) ? v : "log",
                      strictTuples: null != (j = null != (_ = t.strictTuples) ? _ : L) ? j : "log",
                      strictRequired: null != (E = null != (k = t.strictRequired) ? k : L) && E,
                      code: t.code ? { ...t.code, optimize: D, regExp: V } : { optimize: D, regExp: V },
                      loopRequired: null != (I = t.loopRequired) ? I : 200,
                      loopEnum: null != (C = t.loopEnum) ? C : 200,
                      meta: null == (x = t.meta) || x,
                      messages: null == (q = t.messages) || q,
                      inlineRefs: null == (T = t.inlineRefs) || T,
                      schemaId: null != (Y = t.schemaId) ? Y : "$id",
                      addUsedSchema: null == (O = t.addUsedSchema) || O,
                      validateSchema: null == (M = t.validateSchema) || M,
                      validateFormats: null == (N = t.validateFormats) || N,
                      unicodeRegExp: null == (z = t.unicodeRegExp) || z,
                      int32range: null == (A = t.int32range) || A,
                      uriResolver: U,
                    }),
                  }))
              let { es5: K, lines: J } = this.opts.code
              ;((this.scope = new i.ValueScope({ scope: {}, prefixes: f, es5: K, lines: J })),
                (this.logger = (function (e) {
                  if (!1 === e) return R
                  if (void 0 === e) return console
                  if (e.log && e.warn && e.error) return e
                  throw Error("logger must implement log, warn and error methods")
                })(e.logger)))
              let F = e.validateFormats
              ;((e.validateFormats = !1),
                (this.RULES = (0, s.getRules)()),
                S.call(this, g, e, "NOT SUPPORTED"),
                S.call(this, y, e, "DEPRECATED", "warn"),
                (this._metaOpts = w.call(this)),
                e.formats && P.call(this),
                this._addVocabularies(),
                this._addDefaultMetaSchema(),
                e.keywords && $.call(this, e.keywords),
                "object" == typeof e.meta && this.addMetaSchema(e.meta),
                b.call(this),
                (e.validateFormats = F))
            }
            _addVocabularies() {
              this.addKeyword("$async")
            }
            _addDefaultMetaSchema() {
              let { $data: e, meta: t, schemaId: r } = this.opts,
                o = d
              ;("id" === r && (((o = { ...d }).id = o.$id), delete o.$id), t && e && this.addMetaSchema(o, o[r], !1))
            }
            defaultMeta() {
              let { meta: e, schemaId: t } = this.opts
              return (this.opts.defaultMeta = "object" == typeof e ? e[t] || e : void 0)
            }
            validate(e, t) {
              let r
              if ("string" == typeof e) {
                if (!(r = this.getSchema(e))) throw Error(`no schema with key or ref "${e}"`)
              } else r = this.compile(e)
              let o = r(t)
              return ("$async" in r || (this.errors = r.errors), o)
            }
            compile(e, t) {
              let r = this._addSchema(e, t)
              return r.validate || this._compileSchemaEnv(r)
            }
            compileAsync(e, t) {
              if ("function" != typeof this.opts.loadSchema) throw Error("options.loadSchema should be a function")
              let { loadSchema: r } = this.opts
              return o.call(this, e, t)
              async function o(e, t) {
                await s.call(this, e.$schema)
                let r = this._addSchema(e, t)
                return r.validate || n.call(this, r)
              }
              async function s(e) {
                e && !this.getSchema(e) && (await o.call(this, { $ref: e }, !0))
              }
              async function n(e) {
                try {
                  return this._compileSchemaEnv(e)
                } catch (t) {
                  if (!(t instanceof a.default)) throw t
                  return (i.call(this, t), await l.call(this, t.missingSchema), n.call(this, e))
                }
              }
              function i({ missingSchema: e, missingRef: t }) {
                if (this.refs[e]) throw Error(`AnySchema ${e} is loaded but ${t} cannot be resolved`)
              }
              async function l(e) {
                let r = await c.call(this, e)
                ;(this.refs[e] || (await s.call(this, r.$schema)), this.refs[e] || this.addSchema(r, e, t))
              }
              async function c(e) {
                let t = this._loading[e]
                if (t) return t
                try {
                  return await (this._loading[e] = r(e))
                } finally {
                  delete this._loading[e]
                }
              }
            }
            addSchema(e, t, r, o = this.opts.validateSchema) {
              let a
              if (Array.isArray(e)) {
                for (let t of e) this.addSchema(t, void 0, r, o)
                return this
              }
              if ("object" == typeof e) {
                let { schemaId: t } = this.opts
                if (void 0 !== (a = e[t]) && "string" != typeof a) throw Error(`schema ${t} must be string`)
              }
              return (
                (t = (0, l.normalizeId)(t || a)),
                this._checkUnique(t),
                (this.schemas[t] = this._addSchema(e, r, t, o, !0)),
                this
              )
            }
            addMetaSchema(e, t, r = this.opts.validateSchema) {
              return (this.addSchema(e, t, !0, r), this)
            }
            validateSchema(e, t) {
              let r
              if ("boolean" == typeof e) return !0
              if (void 0 !== (r = e.$schema) && "string" != typeof r) throw Error("$schema must be a string")
              if (!(r = r || this.opts.defaultMeta || this.defaultMeta()))
                return (this.logger.warn("meta-schema not available"), (this.errors = null), !0)
              let o = this.validate(r, e)
              if (!o && t) {
                let e = "schema is invalid: " + this.errorsText()
                if ("log" === this.opts.validateSchema) this.logger.error(e)
                else throw Error(e)
              }
              return o
            }
            getSchema(e) {
              let t
              for (; "string" == typeof (t = _.call(this, e));) e = t
              if (void 0 === t) {
                let { schemaId: r } = this.opts,
                  o = new n.SchemaEnv({ schema: {}, schemaId: r })
                if (!(t = n.resolveSchema.call(this, o, e))) return
                this.refs[e] = t
              }
              return t.validate || this._compileSchemaEnv(t)
            }
            removeSchema(e) {
              if (e instanceof RegExp)
                return (this._removeAllSchemas(this.schemas, e), this._removeAllSchemas(this.refs, e), this)
              switch (typeof e) {
                case "undefined":
                  return (
                    this._removeAllSchemas(this.schemas),
                    this._removeAllSchemas(this.refs),
                    this._cache.clear(),
                    this
                  )
                case "string": {
                  let t = _.call(this, e)
                  return (
                    "object" == typeof t && this._cache.delete(t.schema),
                    delete this.schemas[e],
                    delete this.refs[e],
                    this
                  )
                }
                case "object": {
                  this._cache.delete(e)
                  let t = e[this.opts.schemaId]
                  return (t && ((t = (0, l.normalizeId)(t)), delete this.schemas[t], delete this.refs[t]), this)
                }
                default:
                  throw Error("ajv.removeSchema: invalid parameter")
              }
            }
            addVocabulary(e) {
              for (let t of e) this.addKeyword(t)
              return this
            }
            addKeyword(e, t) {
              let r
              if ("string" == typeof e)
                ((r = e),
                  "object" == typeof t &&
                    (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), (t.keyword = r)))
              else if ("object" == typeof e && void 0 === t) {
                if (Array.isArray((r = (t = e).keyword)) && !r.length)
                  throw Error("addKeywords: keyword must be string or non-empty array")
              } else throw Error("invalid addKeywords parameters")
              if ((k.call(this, r, t), !t)) return ((0, u.eachItem)(r, (e) => E.call(this, e)), this)
              C.call(this, t)
              let o = { ...t, type: (0, c.getJSONTypes)(t.type), schemaType: (0, c.getJSONTypes)(t.schemaType) }
              return (
                (0, u.eachItem)(
                  r,
                  0 === o.type.length ? (e) => E.call(this, e, o) : (e) => o.type.forEach((t) => E.call(this, e, o, t)),
                ),
                this
              )
            }
            getKeyword(e) {
              let t = this.RULES.all[e]
              return "object" == typeof t ? t.definition : !!t
            }
            removeKeyword(e) {
              let { RULES: t } = this
              for (let r of (delete t.keywords[e], delete t.all[e], t.rules)) {
                let t = r.rules.findIndex((t) => t.keyword === e)
                t >= 0 && r.rules.splice(t, 1)
              }
              return this
            }
            addFormat(e, t) {
              return ("string" == typeof t && (t = new RegExp(t)), (this.formats[e] = t), this)
            }
            errorsText(e = this.errors, { separator: t = ", ", dataVar: r = "data" } = {}) {
              return e && 0 !== e.length
                ? e.map((e) => `${r}${e.instancePath} ${e.message}`).reduce((e, r) => e + t + r)
                : "No errors"
            }
            $dataMetaSchema(e, t) {
              let r = this.RULES.all
              for (let o of ((e = JSON.parse(JSON.stringify(e))), t)) {
                let t = o.split("/").slice(1),
                  a = e
                for (let e of t) a = a[e]
                for (let e in r) {
                  let t = r[e]
                  if ("object" != typeof t) continue
                  let { $data: o } = t.definition,
                    s = a[e]
                  o && s && (a[e] = q(s))
                }
              }
              return e
            }
            _removeAllSchemas(e, t) {
              for (let r in e) {
                let o = e[r]
                ;(!t || t.test(r)) &&
                  ("string" == typeof o ? delete e[r] : o && !o.meta && (this._cache.delete(o.schema), delete e[r]))
              }
            }
            _addSchema(e, t, r, o = this.opts.validateSchema, a = this.opts.addUsedSchema) {
              let s,
                { schemaId: i } = this.opts
              if ("object" == typeof e) s = e[i]
              else if (this.opts.jtd) throw Error("schema must be object")
              else if ("boolean" != typeof e) throw Error("schema must be object or boolean")
              let c = this._cache.get(e)
              if (void 0 !== c) return c
              r = (0, l.normalizeId)(s || r)
              let u = l.getSchemaRefs.call(this, e, r)
              return (
                (c = new n.SchemaEnv({ schema: e, schemaId: i, meta: t, baseId: r, localRefs: u })),
                this._cache.set(c.schema, c),
                a && !r.startsWith("#") && (r && this._checkUnique(r), (this.refs[r] = c)),
                o && this.validateSchema(e, !0),
                c
              )
            }
            _checkUnique(e) {
              if (this.schemas[e] || this.refs[e]) throw Error(`schema with key or id "${e}" already exists`)
            }
            _compileSchemaEnv(e) {
              if ((e.meta ? this._compileMetaSchema(e) : n.compileSchema.call(this, e), !e.validate))
                throw Error("ajv implementation error")
              return e.validate
            }
            _compileMetaSchema(e) {
              let t = this.opts
              this.opts = this._metaOpts
              try {
                n.compileSchema.call(this, e)
              } finally {
                this.opts = t
              }
            }
          }
          function S(e, t, r, o = "error") {
            for (let a in e) a in t && this.logger[o](`${r}: option ${a}. ${e[a]}`)
          }
          function _(e) {
            return ((e = (0, l.normalizeId)(e)), this.schemas[e] || this.refs[e])
          }
          function b() {
            let e = this.opts.schemas
            if (e)
              if (Array.isArray(e)) this.addSchema(e)
              else for (let t in e) this.addSchema(e[t], t)
          }
          function P() {
            for (let e in this.opts.formats) {
              let t = this.opts.formats[e]
              t && this.addFormat(e, t)
            }
          }
          function $(e) {
            if (Array.isArray(e)) return void this.addVocabulary(e)
            for (let t in (this.logger.warn("keywords option as map is deprecated, pass array"), e)) {
              let r = e[t]
              ;(r.keyword || (r.keyword = t), this.addKeyword(r))
            }
          }
          function w() {
            let e = { ...this.opts }
            for (let t of m) delete e[t]
            return e
          }
          ;((v.ValidationError = o.default), (v.MissingRefError = a.default), (e.default = v))
          let R = { log() {}, warn() {}, error() {} },
            j = /^[a-z_$][a-z0-9_$:-]*$/i
          function k(e, t) {
            let { RULES: r } = this
            if (
              ((0, u.eachItem)(e, (e) => {
                if (r.keywords[e]) throw Error(`Keyword ${e} is already defined`)
                if (!j.test(e)) throw Error(`Keyword ${e} has invalid name`)
              }),
              t && t.$data && !("code" in t || "validate" in t))
            )
              throw Error('$data keyword must have "code" or "validate" function')
          }
          function E(e, t, r) {
            var o
            let a = null == t ? void 0 : t.post
            if (r && a) throw Error('keyword with "post" flag cannot have "type"')
            let { RULES: s } = this,
              n = a ? s.post : s.rules.find(({ type: e }) => e === r)
            if ((n || ((n = { type: r, rules: [] }), s.rules.push(n)), (s.keywords[e] = !0), !t)) return
            let i = {
              keyword: e,
              definition: { ...t, type: (0, c.getJSONTypes)(t.type), schemaType: (0, c.getJSONTypes)(t.schemaType) },
            }
            ;(t.before ? I.call(this, n, i, t.before) : n.rules.push(i),
              (s.all[e] = i),
              null == (o = t.implements) || o.forEach((e) => this.addKeyword(e)))
          }
          function I(e, t, r) {
            let o = e.rules.findIndex((e) => e.keyword === r)
            o >= 0 ? e.rules.splice(o, 0, t) : (e.rules.push(t), this.logger.warn(`rule ${r} is not defined`))
          }
          function C(e) {
            let { metaSchema: t } = e
            void 0 !== t && (e.$data && this.opts.$data && (t = q(t)), (e.validateSchema = this.compile(t, !0)))
          }
          let x = { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }
          function q(e) {
            return { anyOf: [e, x] }
          }
        }),
        aM = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = {
              keyword: "id",
              code() {
                throw Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID')
              },
            }))
        }),
        aN = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }), (e.callRef = e.getValidate = void 0))
          let t = aE(),
            r = a_(),
            o = ad(),
            a = ah(),
            s = aI(),
            n = ap()
          function i(e, t) {
            let { gen: r } = e
            return t.validate
              ? r.scopeValue("validate", { ref: t.validate })
              : (0, o._)`${r.scopeValue("wrapper", { ref: t })}.validate`
          }
          function l(e, t, s, i) {
            let { gen: l, it: c } = e,
              { allErrors: u, schemaEnv: d, opts: p } = c,
              h = p.passContext ? a.default.this : o.nil
            function m(e) {
              let t = (0, o._)`${e}.errors`
              ;(l.assign(
                a.default.vErrors,
                (0, o._)`${a.default.vErrors} === null ? ${t} : ${a.default.vErrors}.concat(${t})`,
              ),
                l.assign(a.default.errors, (0, o._)`${a.default.vErrors}.length`))
            }
            function f(e) {
              var t
              if (!c.opts.unevaluated) return
              let r = null == (t = null == s ? void 0 : s.validate) ? void 0 : t.evaluated
              if (!0 !== c.props)
                if (r && !r.dynamicProps) void 0 !== r.props && (c.props = n.mergeEvaluated.props(l, r.props, c.props))
                else {
                  let t = l.var("props", (0, o._)`${e}.evaluated.props`)
                  c.props = n.mergeEvaluated.props(l, t, c.props, o.Name)
                }
              if (!0 !== c.items)
                if (r && !r.dynamicItems) void 0 !== r.items && (c.items = n.mergeEvaluated.items(l, r.items, c.items))
                else {
                  let t = l.var("items", (0, o._)`${e}.evaluated.items`)
                  c.items = n.mergeEvaluated.items(l, t, c.items, o.Name)
                }
            }
            i
              ? (function () {
                  if (!d.$async) throw Error("async schema referenced by sync schema")
                  let a = l.let("valid")
                  ;(l.try(
                    () => {
                      ;(l.code((0, o._)`await ${(0, r.callValidateCode)(e, t, h)}`), f(t), u || l.assign(a, !0))
                    },
                    (e) => {
                      ;(l.if((0, o._)`!(${e} instanceof ${c.ValidationError})`, () => l.throw(e)),
                        m(e),
                        u || l.assign(a, !1))
                    },
                  ),
                    e.ok(a))
                })()
              : e.result(
                  (0, r.callValidateCode)(e, t, h),
                  () => f(t),
                  () => m(t),
                )
          }
          ;((e.getValidate = i),
            (e.callRef = l),
            (e.default = {
              keyword: "$ref",
              schemaType: "string",
              code(e) {
                var r, a
                let n,
                  c,
                  u,
                  { gen: d, schema: p, it: h } = e,
                  { baseId: m, schemaEnv: f, validateName: g, opts: y, self: v } = h,
                  { root: S } = f
                if (("#" === p || "#/" === p) && m === S.baseId) {
                  if (f === S) return l(e, g, f, f.$async)
                  let t = d.scopeValue("root", { ref: S })
                  return l(e, (0, o._)`${t}.validate`, S, S.$async)
                }
                let _ = s.resolveRef.call(v, S, m, p)
                if (void 0 === _) throw new t.default(h.opts.uriResolver, m, p)
                _ instanceof s.SchemaEnv
                  ? void l(e, i(e, (r = _)), r, r.$async)
                  : ((a = _),
                    (n = d.scopeValue(
                      "schema",
                      !0 === y.code.source ? { ref: a, code: (0, o.stringify)(a) } : { ref: a },
                    )),
                    (c = d.name("valid")),
                    (u = e.subschema(
                      { schema: a, dataTypes: [], schemaPath: o.nil, topSchemaRef: n, errSchemaPath: p },
                      c,
                    )),
                    void (e.mergeEvaluated(u), e.ok(c)))
              },
            }))
        }),
        az = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = aM(),
            r = aN()
          e.default = [
            "$schema",
            "$id",
            "$defs",
            "$vocabulary",
            { keyword: "$comment" },
            "definitions",
            t.default,
            r.default,
          ]
        }),
        aA = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad(),
            r = t.operators,
            o = {
              maximum: { okStr: "<=", ok: r.LTE, fail: r.GT },
              minimum: { okStr: ">=", ok: r.GTE, fail: r.LT },
              exclusiveMaximum: { okStr: "<", ok: r.LT, fail: r.GTE },
              exclusiveMinimum: { okStr: ">", ok: r.GT, fail: r.LTE },
            }
          e.default = {
            keyword: Object.keys(o),
            type: "number",
            schemaType: "number",
            $data: !0,
            error: {
              message: ({ keyword: e, schemaCode: r }) => (0, t.str)`must be ${o[e].okStr} ${r}`,
              params: ({ keyword: e, schemaCode: r }) => (0, t._)`{comparison: ${o[e].okStr}, limit: ${r}}`,
            },
            code(e) {
              let { keyword: r, data: a, schemaCode: s } = e
              e.fail$data((0, t._)`${a} ${o[r].fail} ${s} || isNaN(${a})`)
            },
          }
        }),
        aL = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad()
          e.default = {
            keyword: "multipleOf",
            type: "number",
            schemaType: "number",
            $data: !0,
            error: {
              message: ({ schemaCode: e }) => (0, t.str)`must be multiple of ${e}`,
              params: ({ schemaCode: e }) => (0, t._)`{multipleOf: ${e}}`,
            },
            code(e) {
              let { gen: r, data: o, schemaCode: a, it: s } = e,
                n = s.opts.multipleOfPrecision,
                i = r.let("res"),
                l = n ? (0, t._)`Math.abs(Math.round(${i}) - ${i}) > 1e-${n}` : (0, t._)`${i} !== parseInt(${i})`
              e.fail$data((0, t._)`(${a} === 0 || (${i} = ${o}/${a}, ${l}))`)
            },
          }
        }),
        aH = C((e) => {
          function t(e) {
            let t,
              r = e.length,
              o = 0,
              a = 0
            for (; a < r;)
              (o++,
                (t = e.charCodeAt(a++)) >= 55296 &&
                  t <= 56319 &&
                  a < r &&
                  (64512 & (t = e.charCodeAt(a))) == 56320 &&
                  a++)
            return o
          }
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = t),
            (t.code = 'require("ajv/dist/runtime/ucs2length").default'))
        }),
        aD = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad(),
            r = ap(),
            o = aH()
          e.default = {
            keyword: ["maxLength", "minLength"],
            type: "string",
            schemaType: "number",
            $data: !0,
            error: {
              message: ({ keyword: e, schemaCode: r }) =>
                (0, t.str)`must NOT have ${"maxLength" === e ? "more" : "fewer"} than ${r} characters`,
              params: ({ schemaCode: e }) => (0, t._)`{limit: ${e}}`,
            },
            code(e) {
              let { keyword: a, data: s, schemaCode: n, it: i } = e,
                l = "maxLength" === a ? t.operators.GT : t.operators.LT,
                c = !1 === i.opts.unicode ? (0, t._)`${s}.length` : (0, t._)`${(0, r.useFunc)(e.gen, o.default)}(${s})`
              e.fail$data((0, t._)`${c} ${l} ${n}`)
            },
          }
        }),
        aV = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = a_(),
            r = ap(),
            o = ad()
          e.default = {
            keyword: "pattern",
            type: "string",
            schemaType: "string",
            $data: !0,
            error: {
              message: ({ schemaCode: e }) => (0, o.str)`must match pattern "${e}"`,
              params: ({ schemaCode: e }) => (0, o._)`{pattern: ${e}}`,
            },
            code(e) {
              let { gen: a, data: s, $data: n, schema: i, schemaCode: l, it: c } = e,
                u = c.opts.unicodeRegExp ? "u" : ""
              if (n) {
                let { regExp: t } = c.opts.code,
                  n = "new RegExp" === t.code ? (0, o._)`new RegExp` : (0, r.useFunc)(a, t),
                  i = a.let("valid")
                ;(a.try(
                  () => a.assign(i, (0, o._)`${n}(${l}, ${u}).test(${s})`),
                  () => a.assign(i, !1),
                ),
                  e.fail$data((0, o._)`!${i}`))
              } else {
                let r = (0, t.usePattern)(e, i)
                e.fail$data((0, o._)`!${r}.test(${s})`)
              }
            },
          }
        }),
        aU = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad()
          e.default = {
            keyword: ["maxProperties", "minProperties"],
            type: "object",
            schemaType: "number",
            $data: !0,
            error: {
              message: ({ keyword: e, schemaCode: r }) =>
                (0, t.str)`must NOT have ${"maxProperties" === e ? "more" : "fewer"} than ${r} properties`,
              params: ({ schemaCode: e }) => (0, t._)`{limit: ${e}}`,
            },
            code(e) {
              let { keyword: r, data: o, schemaCode: a } = e,
                s = "maxProperties" === r ? t.operators.GT : t.operators.LT
              e.fail$data((0, t._)`Object.keys(${o}).length ${s} ${a}`)
            },
          }
        }),
        aK = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = a_(),
            r = ad(),
            o = ap()
          e.default = {
            keyword: "required",
            type: "object",
            schemaType: "array",
            $data: !0,
            error: {
              message: ({ params: { missingProperty: e } }) => (0, r.str)`must have required property '${e}'`,
              params: ({ params: { missingProperty: e } }) => (0, r._)`{missingProperty: ${e}}`,
            },
            code(e) {
              let { gen: a, schema: s, schemaCode: n, data: i, $data: l, it: c } = e,
                { opts: u } = c
              if (!l && 0 === s.length) return
              let d = s.length >= u.loopRequired
              if (
                (c.allErrors
                  ? (function () {
                      if (d || l) e.block$data(r.nil, p)
                      else for (let r of s) (0, t.checkReportMissingProp)(e, r)
                    })()
                  : (function () {
                      let o = a.let("missing")
                      if (d || l) {
                        let s = a.let("valid", !0)
                        ;(e.block$data(s, () => {
                          var l, c
                          ;((l = o),
                            (c = s),
                            void (e.setParams({ missingProperty: l }),
                            a.forOf(
                              l,
                              n,
                              () => {
                                ;(a.assign(c, (0, t.propertyInData)(a, i, l, u.ownProperties)),
                                  a.if((0, r.not)(c), () => {
                                    ;(e.error(), a.break())
                                  }))
                              },
                              r.nil,
                            )))
                        }),
                          e.ok(s))
                      } else (a.if((0, t.checkMissingProp)(e, s, o)), (0, t.reportMissingProp)(e, o), a.else())
                    })(),
                u.strictRequired)
              ) {
                let t = e.parentSchema.properties,
                  { definedProperties: r } = e.it
                for (let e of s)
                  if ((null == t ? void 0 : t[e]) === void 0 && !r.has(e)) {
                    let t = `required property "${e}" is not defined at "${c.schemaEnv.baseId + c.errSchemaPath}" (strictRequired)`
                    ;(0, o.checkStrictMode)(c, t, c.opts.strictRequired)
                  }
              }
              function p() {
                a.forOf("prop", n, (r) => {
                  ;(e.setParams({ missingProperty: r }),
                    a.if((0, t.noPropertyInData)(a, i, r, u.ownProperties), () => e.error()))
                })
              }
            },
          }
        }),
        aJ = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad()
          e.default = {
            keyword: ["maxItems", "minItems"],
            type: "array",
            schemaType: "number",
            $data: !0,
            error: {
              message: ({ keyword: e, schemaCode: r }) =>
                (0, t.str)`must NOT have ${"maxItems" === e ? "more" : "fewer"} than ${r} items`,
              params: ({ schemaCode: e }) => (0, t._)`{limit: ${e}}`,
            },
            code(e) {
              let { keyword: r, data: o, schemaCode: a } = e,
                s = "maxItems" === r ? t.operators.GT : t.operators.LT
              e.fail$data((0, t._)`${o}.length ${s} ${a}`)
            },
          }
        }),
        aF = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = a$()
          ;((t.code = 'require("ajv/dist/runtime/equal").default'), (e.default = t))
        }),
        aG = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = av(),
            r = ad(),
            o = ap(),
            a = aF()
          e.default = {
            keyword: "uniqueItems",
            type: "array",
            schemaType: "boolean",
            $data: !0,
            error: {
              message: ({ params: { i: e, j: t } }) =>
                (0, r.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
              params: ({ params: { i: e, j: t } }) => (0, r._)`{i: ${e}, j: ${t}}`,
            },
            code(e) {
              let { gen: s, data: n, $data: i, schema: l, parentSchema: c, schemaCode: u, it: d } = e
              if (!i && !l) return
              let p = s.let("valid"),
                h = c.items ? (0, t.getSchemaTypes)(c.items) : []
              ;(e.block$data(
                p,
                function () {
                  let i = s.let("i", (0, r._)`${n}.length`),
                    l = s.let("j")
                  ;(e.setParams({ i, j: l }),
                    s.assign(p, !0),
                    s.if((0, r._)`${i} > 1`, () =>
                      (h.length > 0 && !h.some((e) => "object" === e || "array" === e)
                        ? function (o, a) {
                            let i = s.name("item"),
                              l = (0, t.checkDataTypes)(h, i, d.opts.strictNumbers, t.DataType.Wrong),
                              c = s.const("indices", (0, r._)`{}`)
                            s.for((0, r._)`;${o}--;`, () => {
                              ;(s.let(i, (0, r._)`${n}[${o}]`),
                                s.if(l, (0, r._)`continue`),
                                h.length > 1 && s.if((0, r._)`typeof ${i} == "string"`, (0, r._)`${i} += "_"`),
                                s
                                  .if((0, r._)`typeof ${c}[${i}] == "number"`, () => {
                                    ;(s.assign(a, (0, r._)`${c}[${i}]`), e.error(), s.assign(p, !1).break())
                                  })
                                  .code((0, r._)`${c}[${i}] = ${o}`))
                            })
                          }
                        : function (t, i) {
                            let l = (0, o.useFunc)(s, a.default),
                              c = s.name("outer")
                            s.label(c).for((0, r._)`;${t}--;`, () =>
                              s.for((0, r._)`${i} = ${t}; ${i}--;`, () =>
                                s.if((0, r._)`${l}(${n}[${t}], ${n}[${i}])`, () => {
                                  ;(e.error(), s.assign(p, !1).break(c))
                                }),
                              ),
                            )
                          })(i, l),
                    ))
                },
                (0, r._)`${u} === false`,
              ),
                e.ok(p))
            },
          }
        }),
        aB = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad(),
            r = ap(),
            o = aF()
          e.default = {
            keyword: "const",
            $data: !0,
            error: {
              message: "must be equal to constant",
              params: ({ schemaCode: e }) => (0, t._)`{allowedValue: ${e}}`,
            },
            code(e) {
              let { gen: a, data: s, $data: n, schemaCode: i, schema: l } = e
              n || (l && "object" == typeof l)
                ? e.fail$data((0, t._)`!${(0, r.useFunc)(a, o.default)}(${s}, ${i})`)
                : e.fail((0, t._)`${l} !== ${s}`)
            },
          }
        }),
        aZ = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad(),
            r = ap(),
            o = aF()
          e.default = {
            keyword: "enum",
            schemaType: "array",
            $data: !0,
            error: {
              message: "must be equal to one of the allowed values",
              params: ({ schemaCode: e }) => (0, t._)`{allowedValues: ${e}}`,
            },
            code(e) {
              let a,
                s,
                { gen: n, data: i, $data: l, schema: c, schemaCode: u, it: d } = e
              if (!l && 0 === c.length) throw Error("enum must have non-empty array")
              let p = c.length >= d.opts.loopEnum,
                h = () => (null != a ? a : (a = (0, r.useFunc)(n, o.default)))
              if (p || l)
                ((s = n.let("valid")),
                  e.block$data(s, function () {
                    ;(n.assign(s, !1),
                      n.forOf("v", u, (e) => n.if((0, t._)`${h()}(${i}, ${e})`, () => n.assign(s, !0).break())))
                  }))
              else {
                if (!Array.isArray(c)) throw Error("ajv implementation error")
                let e = n.const("vSchema", u)
                s = (0, t.or)(
                  ...c.map((r, o) => {
                    var a, s
                    let n
                    return (
                      (a = e),
                      "object" == typeof (n = c[(s = o)]) && null !== n
                        ? (0, t._)`${h()}(${i}, ${a}[${s}])`
                        : (0, t._)`${i} === ${n}`
                    )
                  }),
                )
              }
              e.pass(s)
            },
          }
        }),
        aW = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = aA(),
            r = aL(),
            o = aD(),
            a = aV(),
            s = aU(),
            n = aK(),
            i = aJ(),
            l = aG(),
            c = aB(),
            u = aZ()
          e.default = [
            t.default,
            r.default,
            o.default,
            a.default,
            s.default,
            n.default,
            i.default,
            l.default,
            { keyword: "type", schemaType: ["string", "array"] },
            { keyword: "nullable", schemaType: "boolean" },
            c.default,
            u.default,
          ]
        }),
        aX = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }), (e.validateAdditionalItems = void 0))
          let t = ad(),
            r = ap()
          function o(e, o) {
            let { gen: a, schema: s, data: n, keyword: i, it: l } = e
            l.items = !0
            let c = a.const("len", (0, t._)`${n}.length`)
            if (!1 === s) (e.setParams({ len: o.length }), e.pass((0, t._)`${c} <= ${o.length}`))
            else if ("object" == typeof s && !(0, r.alwaysValidSchema)(l, s)) {
              let s = a.var("valid", (0, t._)`${c} <= ${o.length}`)
              ;(a.if((0, t.not)(s), () => {
                var n
                ;((n = s),
                  void a.forRange("i", o.length, c, (o) => {
                    ;(e.subschema({ keyword: i, dataProp: o, dataPropType: r.Type.Num }, n),
                      l.allErrors || a.if((0, t.not)(n), () => a.break()))
                  }))
              }),
                e.ok(s))
            }
          }
          ;((e.validateAdditionalItems = o),
            (e.default = {
              keyword: "additionalItems",
              type: "array",
              schemaType: ["boolean", "object"],
              before: "uniqueItems",
              error: {
                message: ({ params: { len: e } }) => (0, t.str)`must NOT have more than ${e} items`,
                params: ({ params: { len: e } }) => (0, t._)`{limit: ${e}}`,
              },
              code(e) {
                let { parentSchema: t, it: a } = e,
                  { items: s } = t
                Array.isArray(s)
                  ? o(e, s)
                  : (0, r.checkStrictMode)(a, '"additionalItems" is ignored when "items" is not an array of schemas')
              },
            }))
        }),
        aQ = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }), (e.validateTuple = void 0))
          let t = ad(),
            r = ap(),
            o = a_()
          function a(e, o, s = e.schema) {
            let { gen: n, parentSchema: i, data: l, keyword: c, it: u } = e
            ;((function (e) {
              let { opts: t, errSchemaPath: a } = u,
                n = s.length,
                i = n === e.minItems && (n === e.maxItems || !1 === e[o])
              if (t.strictTuples && !i) {
                let e = `"${c}" is ${n}-tuple, but minItems or maxItems/${o} are not specified or different at path "${a}"`
                ;(0, r.checkStrictMode)(u, e, t.strictTuples)
              }
            })(i),
              u.opts.unevaluated &&
                s.length &&
                !0 !== u.items &&
                (u.items = r.mergeEvaluated.items(n, s.length, u.items)))
            let d = n.name("valid"),
              p = n.const("len", (0, t._)`${l}.length`)
            s.forEach((o, a) => {
              ;(0, r.alwaysValidSchema)(u, o) ||
                (n.if((0, t._)`${p} > ${a}`, () => e.subschema({ keyword: c, schemaProp: a, dataProp: a }, d)), e.ok(d))
            })
          }
          ;((e.validateTuple = a),
            (e.default = {
              keyword: "items",
              type: "array",
              schemaType: ["object", "array", "boolean"],
              before: "uniqueItems",
              code(e) {
                let { schema: t, it: s } = e
                if (Array.isArray(t)) return a(e, "additionalItems", t)
                ;((s.items = !0), (0, r.alwaysValidSchema)(s, t) || e.ok((0, o.validateArray)(e)))
              },
            }))
        }),
        a0 = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = aQ()
          e.default = {
            keyword: "prefixItems",
            type: "array",
            schemaType: ["array"],
            before: "uniqueItems",
            code: (e) => (0, t.validateTuple)(e, "items"),
          }
        }),
        a1 = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad(),
            r = ap(),
            o = a_(),
            a = aX()
          e.default = {
            keyword: "items",
            type: "array",
            schemaType: ["object", "boolean"],
            before: "uniqueItems",
            error: {
              message: ({ params: { len: e } }) => (0, t.str)`must NOT have more than ${e} items`,
              params: ({ params: { len: e } }) => (0, t._)`{limit: ${e}}`,
            },
            code(e) {
              let { schema: t, parentSchema: s, it: n } = e,
                { prefixItems: i } = s
              ;((n.items = !0),
                (0, r.alwaysValidSchema)(n, t) ||
                  (i ? (0, a.validateAdditionalItems)(e, i) : e.ok((0, o.validateArray)(e))))
            },
          }
        }),
        a2 = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad(),
            r = ap()
          e.default = {
            keyword: "contains",
            type: "array",
            schemaType: ["object", "boolean"],
            before: "uniqueItems",
            trackErrors: !0,
            error: {
              message: ({ params: { min: e, max: r } }) =>
                void 0 === r
                  ? (0, t.str)`must contain at least ${e} valid item(s)`
                  : (0, t.str)`must contain at least ${e} and no more than ${r} valid item(s)`,
              params: ({ params: { min: e, max: r } }) =>
                void 0 === r ? (0, t._)`{minContains: ${e}}` : (0, t._)`{minContains: ${e}, maxContains: ${r}}`,
            },
            code(e) {
              let o,
                a,
                { gen: s, schema: n, parentSchema: i, data: l, it: c } = e,
                { minContains: u, maxContains: d } = i
              c.opts.next ? ((o = void 0 === u ? 1 : u), (a = d)) : (o = 1)
              let p = s.const("len", (0, t._)`${l}.length`)
              if ((e.setParams({ min: o, max: a }), void 0 === a && 0 === o))
                return void (0, r.checkStrictMode)(
                  c,
                  '"minContains" == 0 without "maxContains": "contains" keyword ignored',
                )
              if (void 0 !== a && o > a) {
                ;((0, r.checkStrictMode)(c, '"minContains" > "maxContains" is always invalid'), e.fail())
                return
              }
              if ((0, r.alwaysValidSchema)(c, n)) {
                let r = (0, t._)`${p} >= ${o}`
                ;(void 0 !== a && (r = (0, t._)`${r} && ${p} <= ${a}`), e.pass(r))
                return
              }
              c.items = !0
              let h = s.name("valid")
              function m() {
                let e = s.name("_valid"),
                  r = s.let("count", 0)
                f(e, () =>
                  s.if(e, () => {
                    var e
                    ;((e = r),
                      void (s.code((0, t._)`${e}++`),
                      void 0 === a
                        ? s.if((0, t._)`${e} >= ${o}`, () => s.assign(h, !0).break())
                        : (s.if((0, t._)`${e} > ${a}`, () => s.assign(h, !1).break()),
                          1 === o ? s.assign(h, !0) : s.if((0, t._)`${e} >= ${o}`, () => s.assign(h, !0)))))
                  }),
                )
              }
              function f(t, o) {
                s.forRange("i", 0, p, (a) => {
                  ;(e.subschema({ keyword: "contains", dataProp: a, dataPropType: r.Type.Num, compositeRule: !0 }, t),
                    o())
                })
              }
              ;(void 0 === a && 1 === o
                ? f(h, () => s.if(h, () => s.break()))
                : 0 === o
                  ? (s.let(h, !0), void 0 !== a && s.if((0, t._)`${l}.length > 0`, m))
                  : (s.let(h, !1), m()),
                e.result(h, () => e.reset()))
            },
          }
        }),
        a9 = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0))
          let t = ad(),
            r = ap(),
            o = a_()
          e.error = {
            message: ({ params: { property: e, depsCount: r, deps: o } }) =>
              (0, t.str)`must have ${1 === r ? "property" : "properties"} ${o} when property ${e} is present`,
            params: ({ params: { property: e, depsCount: r, deps: o, missingProperty: a } }) => (0,
            t._)`{property: ${e},
    missingProperty: ${a},
    depsCount: ${r},
    deps: ${o}}`,
          }
          let a = {
            keyword: "dependencies",
            type: "object",
            schemaType: "object",
            error: e.error,
            code(e) {
              let [t, r] = (function ({ schema: e }) {
                let t = {},
                  r = {}
                for (let o in e) "__proto__" !== o && ((Array.isArray(e[o]) ? t : r)[o] = e[o])
                return [t, r]
              })(e)
              ;(s(e, t), n(e, r))
            },
          }
          function s(e, r = e.schema) {
            let { gen: a, data: n, it: i } = e
            if (0 === Object.keys(r).length) return
            let l = a.let("missing")
            for (let s in r) {
              let c = r[s]
              if (0 === c.length) continue
              let u = (0, o.propertyInData)(a, n, s, i.opts.ownProperties)
              ;(e.setParams({ property: s, depsCount: c.length, deps: c.join(", ") }),
                i.allErrors
                  ? a.if(u, () => {
                      for (let t of c) (0, o.checkReportMissingProp)(e, t)
                    })
                  : (a.if((0, t._)`${u} && (${(0, o.checkMissingProp)(e, c, l)})`),
                    (0, o.reportMissingProp)(e, l),
                    a.else()))
            }
          }
          function n(e, t = e.schema) {
            let { gen: a, data: s, keyword: i, it: l } = e,
              c = a.name("valid")
            for (let n in t)
              (0, r.alwaysValidSchema)(l, t[n]) ||
                (a.if(
                  (0, o.propertyInData)(a, s, n, l.opts.ownProperties),
                  () => {
                    let t = e.subschema({ keyword: i, schemaProp: n }, c)
                    e.mergeValidEvaluated(t, c)
                  },
                  () => a.var(c, !0),
                ),
                e.ok(c))
          }
          ;((e.validatePropertyDeps = s), (e.validateSchemaDeps = n), (e.default = a))
        }),
        a5 = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad(),
            r = ap()
          e.default = {
            keyword: "propertyNames",
            type: "object",
            schemaType: ["object", "boolean"],
            error: {
              message: "property name must be valid",
              params: ({ params: e }) => (0, t._)`{propertyName: ${e.propertyName}}`,
            },
            code(e) {
              let { gen: o, schema: a, data: s, it: n } = e
              if ((0, r.alwaysValidSchema)(n, a)) return
              let i = o.name("valid")
              ;(o.forIn("key", s, (r) => {
                ;(e.setParams({ propertyName: r }),
                  e.subschema(
                    { keyword: "propertyNames", data: r, dataTypes: ["string"], propertyName: r, compositeRule: !0 },
                    i,
                  ),
                  o.if((0, t.not)(i), () => {
                    ;(e.error(!0), n.allErrors || o.break())
                  }))
              }),
                e.ok(i))
            },
          }
        }),
        a3 = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = a_(),
            r = ad(),
            o = ah(),
            a = ap()
          e.default = {
            keyword: "additionalProperties",
            type: ["object"],
            schemaType: ["boolean", "object"],
            allowUndefined: !0,
            trackErrors: !0,
            error: {
              message: "must NOT have additional properties",
              params: ({ params: e }) => (0, r._)`{additionalProperty: ${e.additionalProperty}}`,
            },
            code(e) {
              let { gen: s, schema: n, parentSchema: i, data: l, errsCount: c, it: u } = e
              if (!c) throw Error("ajv implementation error")
              let { allErrors: d, opts: p } = u
              if (((u.props = !0), "all" !== p.removeAdditional && (0, a.alwaysValidSchema)(u, n))) return
              let h = (0, t.allSchemaProperties)(i.properties),
                m = (0, t.allSchemaProperties)(i.patternProperties)
              function f(e) {
                s.code((0, r._)`delete ${l}[${e}]`)
              }
              function g(t) {
                if ("all" === p.removeAdditional || (p.removeAdditional && !1 === n)) return void f(t)
                if (!1 === n) {
                  ;(e.setParams({ additionalProperty: t }), e.error(), d || s.break())
                  return
                }
                if ("object" == typeof n && !(0, a.alwaysValidSchema)(u, n)) {
                  let o = s.name("valid")
                  "failing" === p.removeAdditional
                    ? (y(t, o, !1),
                      s.if((0, r.not)(o), () => {
                        ;(e.reset(), f(t))
                      }))
                    : (y(t, o), d || s.if((0, r.not)(o), () => s.break()))
                }
              }
              function y(t, r, o) {
                let s = { keyword: "additionalProperties", dataProp: t, dataPropType: a.Type.Str }
                ;(!1 === o && Object.assign(s, { compositeRule: !0, createErrors: !1, allErrors: !1 }),
                  e.subschema(s, r))
              }
              ;(s.forIn("key", l, (o) => {
                h.length || m.length
                  ? s.if(
                      (function (o) {
                        let n
                        if (h.length > 8) {
                          let e = (0, a.schemaRefOrVal)(u, i.properties, "properties")
                          n = (0, t.isOwnProperty)(s, e, o)
                        } else n = h.length ? (0, r.or)(...h.map((e) => (0, r._)`${o} === ${e}`)) : r.nil
                        return (
                          m.length &&
                            (n = (0, r.or)(n, ...m.map((a) => (0, r._)`${(0, t.usePattern)(e, a)}.test(${o})`))),
                          (0, r.not)(n)
                        )
                      })(o),
                      () => g(o),
                    )
                  : g(o)
              }),
                e.ok((0, r._)`${c} === ${o.default.errors}`))
            },
          }
        }),
        a4 = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = aj(),
            r = a_(),
            o = ap(),
            a = a3()
          e.default = {
            keyword: "properties",
            type: "object",
            schemaType: "object",
            code(e) {
              let { gen: s, schema: n, parentSchema: i, data: l, it: c } = e
              "all" === c.opts.removeAdditional &&
                void 0 === i.additionalProperties &&
                a.default.code(new t.KeywordCxt(c, a.default, "additionalProperties"))
              let u = (0, r.allSchemaProperties)(n)
              for (let e of u) c.definedProperties.add(e)
              c.opts.unevaluated &&
                u.length &&
                !0 !== c.props &&
                (c.props = o.mergeEvaluated.props(s, (0, o.toHash)(u), c.props))
              let d = u.filter((e) => !(0, o.alwaysValidSchema)(c, n[e]))
              if (0 === d.length) return
              let p = s.name("valid")
              for (let t of d) {
                var h
                ;(((h = t), c.opts.useDefaults && !c.compositeRule && void 0 !== n[h].default)
                  ? m(t)
                  : (s.if((0, r.propertyInData)(s, l, t, c.opts.ownProperties)),
                    m(t),
                    c.allErrors || s.else().var(p, !0),
                    s.endIf()),
                  e.it.definedProperties.add(t),
                  e.ok(p))
              }
              function m(t) {
                e.subschema({ keyword: "properties", schemaProp: t, dataProp: t }, p)
              }
            },
          }
        }),
        a6 = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = a_(),
            r = ad(),
            o = ap(),
            a = ap()
          e.default = {
            keyword: "patternProperties",
            type: "object",
            schemaType: "object",
            code(e) {
              let { gen: s, schema: n, data: i, parentSchema: l, it: c } = e,
                { opts: u } = c,
                d = (0, t.allSchemaProperties)(n),
                p = d.filter((e) => (0, o.alwaysValidSchema)(c, n[e]))
              if (0 === d.length || (p.length === d.length && (!c.opts.unevaluated || !0 === c.props))) return
              let h = u.strictSchema && !u.allowMatchingProperties && l.properties,
                m = s.name("valid")
              !0 === c.props || c.props instanceof r.Name || (c.props = (0, a.evaluatedPropsToName)(s, c.props))
              let { props: f } = c
              for (let e of d)
                (h &&
                  (function (e) {
                    for (let t in h)
                      new RegExp(e).test(t) &&
                        (0, o.checkStrictMode)(c, `property ${t} matches pattern ${e} (use allowMatchingProperties)`)
                  })(e),
                  c.allErrors ? g(e) : (s.var(m, !0), g(e), s.if(m)))
              function g(o) {
                s.forIn("key", i, (n) => {
                  s.if((0, r._)`${(0, t.usePattern)(e, o)}.test(${n})`, () => {
                    let t = p.includes(o)
                    ;(t ||
                      e.subschema(
                        { keyword: "patternProperties", schemaProp: o, dataProp: n, dataPropType: a.Type.Str },
                        m,
                      ),
                      c.opts.unevaluated && !0 !== f
                        ? s.assign((0, r._)`${f}[${n}]`, !0)
                        : t || c.allErrors || s.if((0, r.not)(m), () => s.break()))
                  })
                })
              }
            },
          }
        }),
        a8 = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ap()
          e.default = {
            keyword: "not",
            schemaType: ["object", "boolean"],
            trackErrors: !0,
            code(e) {
              let { gen: r, schema: o, it: a } = e
              if ((0, t.alwaysValidSchema)(a, o)) return void e.fail()
              let s = r.name("valid")
              ;(e.subschema({ keyword: "not", compositeRule: !0, createErrors: !1, allErrors: !1 }, s),
                e.failResult(
                  s,
                  () => e.reset(),
                  () => e.error(),
                ))
            },
            error: { message: "must NOT be valid" },
          }
        }),
        a7 = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = {
              keyword: "anyOf",
              schemaType: "array",
              trackErrors: !0,
              code: a_().validateUnion,
              error: { message: "must match a schema in anyOf" },
            }))
        }),
        se = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad(),
            r = ap()
          e.default = {
            keyword: "oneOf",
            schemaType: "array",
            trackErrors: !0,
            error: {
              message: "must match exactly one schema in oneOf",
              params: ({ params: e }) => (0, t._)`{passingSchemas: ${e.passing}}`,
            },
            code(e) {
              let { gen: o, schema: a, parentSchema: s, it: n } = e
              if (!Array.isArray(a)) throw Error("ajv implementation error")
              if (n.opts.discriminator && s.discriminator) return
              let i = o.let("valid", !1),
                l = o.let("passing", null),
                c = o.name("_valid")
              ;(e.setParams({ passing: l }),
                o.block(function () {
                  a.forEach((a, s) => {
                    let u
                    ;((0, r.alwaysValidSchema)(n, a)
                      ? o.var(c, !0)
                      : (u = e.subschema({ keyword: "oneOf", schemaProp: s, compositeRule: !0 }, c)),
                      s > 0 &&
                        o
                          .if((0, t._)`${c} && ${i}`)
                          .assign(i, !1)
                          .assign(l, (0, t._)`[${l}, ${s}]`)
                          .else(),
                      o.if(c, () => {
                        ;(o.assign(i, !0), o.assign(l, s), u && e.mergeEvaluated(u, t.Name))
                      }))
                  })
                }),
                e.result(
                  i,
                  () => e.reset(),
                  () => e.error(!0),
                ))
            },
          }
        }),
        st = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ap()
          e.default = {
            keyword: "allOf",
            schemaType: "array",
            code(e) {
              let { gen: r, schema: o, it: a } = e
              if (!Array.isArray(o)) throw Error("ajv implementation error")
              let s = r.name("valid")
              o.forEach((r, o) => {
                if ((0, t.alwaysValidSchema)(a, r)) return
                let n = e.subschema({ keyword: "allOf", schemaProp: o }, s)
                ;(e.ok(s), e.mergeEvaluated(n))
              })
            },
          }
        }),
        sr = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad(),
            r = ap()
          function o(e, t) {
            let o = e.schema[t]
            return void 0 !== o && !(0, r.alwaysValidSchema)(e, o)
          }
          e.default = {
            keyword: "if",
            schemaType: ["object", "boolean"],
            trackErrors: !0,
            error: {
              message: ({ params: e }) => (0, t.str)`must match "${e.ifClause}" schema`,
              params: ({ params: e }) => (0, t._)`{failingKeyword: ${e.ifClause}}`,
            },
            code(e) {
              let a,
                { gen: s, parentSchema: n, it: i } = e
              void 0 === n.then &&
                void 0 === n.else &&
                (0, r.checkStrictMode)(i, '"if" without "then" and "else" is ignored')
              let l = o(i, "then"),
                c = o(i, "else")
              if (!l && !c) return
              let u = s.let("valid", !0),
                d = s.name("_valid")
              if (
                ((a = e.subschema({ keyword: "if", compositeRule: !0, createErrors: !1, allErrors: !1 }, d)),
                e.mergeEvaluated(a),
                e.reset(),
                l && c)
              ) {
                let t = s.let("ifClause")
                ;(e.setParams({ ifClause: t }), s.if(d, p("then", t), p("else", t)))
              } else l ? s.if(d, p("then")) : s.if((0, t.not)(d), p("else"))
              function p(r, o) {
                return () => {
                  let a = e.subschema({ keyword: r }, d)
                  ;(s.assign(u, d),
                    e.mergeValidEvaluated(a, u),
                    o ? s.assign(o, (0, t._)`${r}`) : e.setParams({ ifClause: r }))
                }
              }
              e.pass(u, () => e.error(!0))
            },
          }
        }),
        so = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ap()
          e.default = {
            keyword: ["then", "else"],
            schemaType: ["object", "boolean"],
            code({ keyword: e, parentSchema: r, it: o }) {
              void 0 === r.if && (0, t.checkStrictMode)(o, `"${e}" without "if" is ignored`)
            },
          }
        }),
        sa = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = aX(),
            r = a0(),
            o = aQ(),
            a = a1(),
            s = a2(),
            n = a9(),
            i = a5(),
            l = a3(),
            c = a4(),
            u = a6(),
            d = a8(),
            p = a7(),
            h = se(),
            m = st(),
            f = sr(),
            g = so()
          e.default = function (e = !1) {
            let y = [
              d.default,
              p.default,
              h.default,
              m.default,
              f.default,
              g.default,
              i.default,
              l.default,
              n.default,
              c.default,
              u.default,
            ]
            return (e ? y.push(r.default, a.default) : y.push(t.default, o.default), y.push(s.default), y)
          }
        }),
        ss = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad()
          e.default = {
            keyword: "format",
            type: ["number", "string"],
            schemaType: "string",
            $data: !0,
            error: {
              message: ({ schemaCode: e }) => (0, t.str)`must match format "${e}"`,
              params: ({ schemaCode: e }) => (0, t._)`{format: ${e}}`,
            },
            code(e, r) {
              let o,
                a,
                s,
                n,
                i,
                l,
                { gen: c, data: u, $data: d, schema: p, schemaCode: h, it: m } = e,
                { opts: f, errSchemaPath: g, schemaEnv: y, self: v } = m
              f.validateFormats &&
                (d
                  ? ((o = c.scopeValue("formats", { ref: v.formats, code: f.code.formats })),
                    (a = c.const("fDef", (0, t._)`${o}[${h}]`)),
                    (s = c.let("fType")),
                    (n = c.let("format")),
                    c.if(
                      (0, t._)`typeof ${a} == "object" && !(${a} instanceof RegExp)`,
                      () => c.assign(s, (0, t._)`${a}.type || "string"`).assign(n, (0, t._)`${a}.validate`),
                      () => c.assign(s, (0, t._)`"string"`).assign(n, a),
                    ),
                    e.fail$data(
                      (0, t.or)(
                        !1 === f.strictSchema ? t.nil : (0, t._)`${h} && !${n}`,
                        ((i = y.$async ? (0, t._)`(${a}.async ? await ${n}(${u}) : ${n}(${u}))` : (0, t._)`${n}(${u})`),
                        (l = (0, t._)`(typeof ${n} == "function" ? ${i} : ${n}.test(${u}))`),
                        (0, t._)`${n} && ${n} !== true && ${s} === ${r} && !${l}`),
                      ),
                    ))
                  : (function () {
                      var o
                      let a,
                        s,
                        n = v.formats[p]
                      if (!n) {
                        if (!1 === f.strictSchema) return v.logger.warn(i())
                        throw Error(i())
                        function i() {
                          return `unknown format "${p}" ignored in schema at path "${g}"`
                        }
                      }
                      if (!0 === n) return
                      let [l, d, h] =
                        ((a =
                          (o = n) instanceof RegExp
                            ? (0, t.regexpCode)(o)
                            : f.code.formats
                              ? (0, t._)`${f.code.formats}${(0, t.getProperty)(p)}`
                              : void 0),
                        (s = c.scopeValue("formats", { key: p, ref: o, code: a })),
                        "object" != typeof o || o instanceof RegExp
                          ? ["string", o, s]
                          : [o.type || "string", o.validate, (0, t._)`${s}.validate`])
                      l === r &&
                        e.pass(
                          (function () {
                            if ("object" == typeof n && !(n instanceof RegExp) && n.async) {
                              if (!y.$async) throw Error("async format in sync schema")
                              return (0, t._)`await ${h}(${u})`
                            }
                            return "function" == typeof d ? (0, t._)`${h}(${u})` : (0, t._)`${h}.test(${u})`
                          })(),
                        )
                    })())
            },
          }
        }),
        sn = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = [ss().default]))
        }),
        si = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.contentVocabulary = e.metadataVocabulary = void 0),
            (e.metadataVocabulary = [
              "title",
              "description",
              "default",
              "deprecated",
              "readOnly",
              "writeOnly",
              "examples",
            ]),
            (e.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"]))
        }),
        sl = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = az(),
            r = aW(),
            o = sa(),
            a = sn(),
            s = si()
          e.default = [t.default, r.default, (0, o.default)(), a.default, s.metadataVocabulary, s.contentVocabulary]
        }),
        sc = C((e) => {
          var t, r
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.DiscrError = void 0),
            ((r = t || (e.DiscrError = t = {})).Tag = "tag"),
            (r.Mapping = "mapping"))
        }),
        su = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad(),
            r = sc(),
            o = aI(),
            a = aE(),
            s = ap()
          e.default = {
            keyword: "discriminator",
            type: "object",
            schemaType: "object",
            error: {
              message: ({ params: { discrError: e, tagName: t } }) =>
                e === r.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
              params: ({ params: { discrError: e, tag: r, tagName: o } }) =>
                (0, t._)`{error: ${e}, tag: ${o}, tagValue: ${r}}`,
            },
            code(e) {
              let { gen: n, data: i, schema: l, parentSchema: c, it: u } = e,
                { oneOf: d } = c
              if (!u.opts.discriminator) throw Error("discriminator: requires discriminator option")
              let p = l.propertyName
              if ("string" != typeof p) throw Error("discriminator: requires propertyName")
              if (l.mapping) throw Error("discriminator: mapping is not supported")
              if (!d) throw Error("discriminator: requires oneOf keyword")
              let h = n.let("valid", !1),
                m = n.const("tag", (0, t._)`${i}${(0, t.getProperty)(p)}`)
              ;(n.if(
                (0, t._)`typeof ${m} == "string"`,
                () =>
                  (function () {
                    let i = (function () {
                      var e
                      let t = {},
                        r = i(c),
                        n = !0
                      for (let t = 0; t < d.length; t++) {
                        let c = d[t]
                        if ((null == c ? void 0 : c.$ref) && !(0, s.schemaHasRulesButRef)(c, u.self.RULES)) {
                          let e = c.$ref
                          if (
                            ((c = o.resolveRef.call(u.self, u.schemaEnv.root, u.baseId, e)) instanceof o.SchemaEnv &&
                              (c = c.schema),
                            void 0 === c)
                          )
                            throw new a.default(u.opts.uriResolver, u.baseId, e)
                        }
                        let h = null == (e = null == c ? void 0 : c.properties) ? void 0 : e[p]
                        if ("object" != typeof h)
                          throw Error(
                            `discriminator: oneOf subschemas (or referenced schemas) must have "properties/${p}"`,
                          )
                        ;((n = n && (r || i(c))),
                          (function (e, t) {
                            if (e.const) l(e.const, t)
                            else if (e.enum) for (let r of e.enum) l(r, t)
                            else throw Error(`discriminator: "properties/${p}" must have "const" or "enum"`)
                          })(h, t))
                      }
                      if (!n) throw Error(`discriminator: "${p}" must be required`)
                      return t
                      function i({ required: e }) {
                        return Array.isArray(e) && e.includes(p)
                      }
                      function l(e, r) {
                        if ("string" != typeof e || e in t)
                          throw Error(`discriminator: "${p}" values must be unique strings`)
                        t[e] = r
                      }
                    })()
                    for (let r in (n.if(!1), i))
                      (n.elseIf((0, t._)`${m} === ${r}`),
                        n.assign(
                          h,
                          (function (r) {
                            let o = n.name("valid"),
                              a = e.subschema({ keyword: "oneOf", schemaProp: r }, o)
                            return (e.mergeEvaluated(a, t.Name), o)
                          })(i[r]),
                        ))
                    ;(n.else(), e.error(!1, { discrError: r.DiscrError.Mapping, tag: m, tagName: p }), n.endIf())
                  })(),
                () => e.error(!1, { discrError: r.DiscrError.Tag, tag: m, tagName: p }),
              ),
                e.ok(h))
            },
          }
        }),
        sd = C((e, t) => {
          t.exports = {
            $schema: "http://json-schema.org/draft-07/schema#",
            $id: "http://json-schema.org/draft-07/schema#",
            title: "Core schema meta-schema",
            definitions: {
              schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } },
              nonNegativeInteger: { type: "integer", minimum: 0 },
              nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] },
              simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] },
              stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] },
            },
            type: ["object", "boolean"],
            properties: {
              $id: { type: "string", format: "uri-reference" },
              $schema: { type: "string", format: "uri" },
              $ref: { type: "string", format: "uri-reference" },
              $comment: { type: "string" },
              title: { type: "string" },
              description: { type: "string" },
              default: !0,
              readOnly: { type: "boolean", default: !1 },
              examples: { type: "array", items: !0 },
              multipleOf: { type: "number", exclusiveMinimum: 0 },
              maximum: { type: "number" },
              exclusiveMaximum: { type: "number" },
              minimum: { type: "number" },
              exclusiveMinimum: { type: "number" },
              maxLength: { $ref: "#/definitions/nonNegativeInteger" },
              minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
              pattern: { type: "string", format: "regex" },
              additionalItems: { $ref: "#" },
              items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 },
              maxItems: { $ref: "#/definitions/nonNegativeInteger" },
              minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
              uniqueItems: { type: "boolean", default: !1 },
              contains: { $ref: "#" },
              maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
              minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
              required: { $ref: "#/definitions/stringArray" },
              additionalProperties: { $ref: "#" },
              definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} },
              properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} },
              patternProperties: {
                type: "object",
                additionalProperties: { $ref: "#" },
                propertyNames: { format: "regex" },
                default: {},
              },
              dependencies: {
                type: "object",
                additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] },
              },
              propertyNames: { $ref: "#" },
              const: !0,
              enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 },
              type: {
                anyOf: [
                  { $ref: "#/definitions/simpleTypes" },
                  { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 },
                ],
              },
              format: { type: "string" },
              contentMediaType: { type: "string" },
              contentEncoding: { type: "string" },
              if: { $ref: "#" },
              then: { $ref: "#" },
              else: { $ref: "#" },
              allOf: { $ref: "#/definitions/schemaArray" },
              anyOf: { $ref: "#/definitions/schemaArray" },
              oneOf: { $ref: "#/definitions/schemaArray" },
              not: { $ref: "#" },
            },
            default: !0,
          }
        }),
        sp = C((e, t) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MissingRefError =
              e.ValidationError =
              e.CodeGen =
              e.Name =
              e.nil =
              e.stringify =
              e.str =
              e._ =
              e.KeywordCxt =
              e.Ajv =
                void 0))
          let r = aO(),
            o = sl(),
            a = su(),
            s = sd(),
            n = ["/properties"],
            i = "http://json-schema.org/draft-07/schema"
          var l = class extends r.default {
            _addVocabularies() {
              ;(super._addVocabularies(),
                o.default.forEach((e) => this.addVocabulary(e)),
                this.opts.discriminator && this.addKeyword(a.default))
            }
            _addDefaultMetaSchema() {
              if ((super._addDefaultMetaSchema(), !this.opts.meta)) return
              let e = this.opts.$data ? this.$dataMetaSchema(s, n) : s
              ;(this.addMetaSchema(e, i, !1), (this.refs["http://json-schema.org/schema"] = i))
            }
            defaultMeta() {
              return (this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0))
            }
          }
          ;((e.Ajv = l),
            (t.exports = e = l),
            (t.exports.Ajv = l),
            Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = l))
          var c = aj()
          Object.defineProperty(e, "KeywordCxt", {
            enumerable: !0,
            get: function () {
              return c.KeywordCxt
            },
          })
          var u = ad()
          ;(Object.defineProperty(e, "_", {
            enumerable: !0,
            get: function () {
              return u._
            },
          }),
            Object.defineProperty(e, "str", {
              enumerable: !0,
              get: function () {
                return u.str
              },
            }),
            Object.defineProperty(e, "stringify", {
              enumerable: !0,
              get: function () {
                return u.stringify
              },
            }),
            Object.defineProperty(e, "nil", {
              enumerable: !0,
              get: function () {
                return u.nil
              },
            }),
            Object.defineProperty(e, "Name", {
              enumerable: !0,
              get: function () {
                return u.Name
              },
            }),
            Object.defineProperty(e, "CodeGen", {
              enumerable: !0,
              get: function () {
                return u.CodeGen
              },
            }))
          var d = ak()
          Object.defineProperty(e, "ValidationError", {
            enumerable: !0,
            get: function () {
              return d.default
            },
          })
          var p = aE()
          Object.defineProperty(e, "MissingRefError", {
            enumerable: !0,
            get: function () {
              return p.default
            },
          })
        }),
        sh = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }), (e.dynamicAnchor = void 0))
          let t = ad(),
            r = ah(),
            o = aI(),
            a = aN()
          function s(e, s) {
            let { gen: n, it: i } = e
            i.schemaEnv.root.dynamicAnchors[s] = !0
            let l = (0, t._)`${r.default.dynamicAnchors}${(0, t.getProperty)(s)}`,
              c =
                "#" === i.errSchemaPath
                  ? i.validateName
                  : (function (e) {
                      let { schemaEnv: t, schema: r, self: s } = e.it,
                        { root: n, baseId: i, localRefs: l, meta: c } = t.root,
                        { schemaId: u } = s.opts,
                        d = new o.SchemaEnv({ schema: r, schemaId: u, root: n, baseId: i, localRefs: l, meta: c })
                      return (o.compileSchema.call(s, d), (0, a.getValidate)(e, d))
                    })(e)
            n.if((0, t._)`!${l}`, () => n.assign(l, c))
          }
          ;((e.dynamicAnchor = s),
            (e.default = { keyword: "$dynamicAnchor", schemaType: "string", code: (e) => s(e, e.schema) }))
        }),
        sm = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }), (e.dynamicRef = void 0))
          let t = ad(),
            r = ah(),
            o = aN()
          function a(e, a) {
            let { gen: s, keyword: n, it: i } = e
            if ("#" !== a[0]) throw Error(`"${n}" only supports hash fragment reference`)
            let l = a.slice(1)
            if (i.allErrors) c()
            else {
              let t = s.let("valid", !1)
              ;(c(t), e.ok(t))
            }
            function c(e) {
              if (i.schemaEnv.root.dynamicAnchors[l]) {
                let o = s.let("_v", (0, t._)`${r.default.dynamicAnchors}${(0, t.getProperty)(l)}`)
                s.if(o, u(o, e), u(i.validateName, e))
              } else u(i.validateName, e)()
            }
            function u(t, r) {
              return r
                ? () =>
                    s.block(() => {
                      ;((0, o.callRef)(e, t), s.let(r, !0))
                    })
                : () => (0, o.callRef)(e, t)
            }
          }
          ;((e.dynamicRef = a),
            (e.default = { keyword: "$dynamicRef", schemaType: "string", code: (e) => a(e, e.schema) }))
        }),
        sf = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = sh(),
            r = ap()
          e.default = {
            keyword: "$recursiveAnchor",
            schemaType: "boolean",
            code(e) {
              e.schema
                ? (0, t.dynamicAnchor)(e, "")
                : (0, r.checkStrictMode)(e.it, "$recursiveAnchor: false is ignored")
            },
          }
        }),
        sg = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = sm()
          e.default = { keyword: "$recursiveRef", schemaType: "string", code: (e) => (0, t.dynamicRef)(e, e.schema) }
        }),
        sy = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = sh(),
            r = sm(),
            o = sf(),
            a = sg()
          e.default = [t.default, r.default, o.default, a.default]
        }),
        sv = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = a9()
          e.default = {
            keyword: "dependentRequired",
            type: "object",
            schemaType: "object",
            error: t.error,
            code: (e) => (0, t.validatePropertyDeps)(e),
          }
        }),
        sS = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = a9()
          e.default = {
            keyword: "dependentSchemas",
            type: "object",
            schemaType: "object",
            code: (e) => (0, t.validateSchemaDeps)(e),
          }
        }),
        s_ = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ap()
          e.default = {
            keyword: ["maxContains", "minContains"],
            type: "array",
            schemaType: "number",
            code({ keyword: e, parentSchema: r, it: o }) {
              void 0 === r.contains && (0, t.checkStrictMode)(o, `"${e}" without "contains" is ignored`)
            },
          }
        }),
        sb = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = sv(),
            r = sS(),
            o = s_()
          e.default = [t.default, r.default, o.default]
        }),
        sP = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad(),
            r = ap(),
            o = ah()
          e.default = {
            keyword: "unevaluatedProperties",
            type: "object",
            schemaType: ["boolean", "object"],
            trackErrors: !0,
            error: {
              message: "must NOT have unevaluated properties",
              params: ({ params: e }) => (0, t._)`{unevaluatedProperty: ${e.unevaluatedProperty}}`,
            },
            code(e) {
              let { gen: a, schema: s, data: n, errsCount: i, it: l } = e
              if (!i) throw Error("ajv implementation error")
              let { allErrors: c, props: u } = l
              function d(o) {
                if (!1 === s) {
                  ;(e.setParams({ unevaluatedProperty: o }), e.error(), c || a.break())
                  return
                }
                if (!(0, r.alwaysValidSchema)(l, s)) {
                  let s = a.name("valid")
                  ;(e.subschema({ keyword: "unevaluatedProperties", dataProp: o, dataPropType: r.Type.Str }, s),
                    c || a.if((0, t.not)(s), () => a.break()))
                }
              }
              ;(u instanceof t.Name
                ? a.if((0, t._)`${u} !== true`, () =>
                    a.forIn("key", n, (e) => {
                      var r, o
                      return a.if(((r = u), (o = e), (0, t._)`!${r} || !${r}[${o}]`), () => d(e))
                    }),
                  )
                : !0 !== u &&
                  a.forIn("key", n, (e) =>
                    void 0 === u
                      ? d(e)
                      : a.if(
                          (function (e, r) {
                            let o = []
                            for (let a in e) !0 === e[a] && o.push((0, t._)`${r} !== ${a}`)
                            return (0, t.and)(...o)
                          })(u, e),
                          () => d(e),
                        ),
                  ),
                (l.props = !0),
                e.ok((0, t._)`${i} === ${o.default.errors}`))
            },
          }
        }),
        s$ = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = ad(),
            r = ap()
          e.default = {
            keyword: "unevaluatedItems",
            type: "array",
            schemaType: ["boolean", "object"],
            error: {
              message: ({ params: { len: e } }) => (0, t.str)`must NOT have more than ${e} items`,
              params: ({ params: { len: e } }) => (0, t._)`{limit: ${e}}`,
            },
            code(e) {
              let { gen: o, schema: a, data: s, it: n } = e,
                i = n.items || 0
              if (!0 === i) return
              let l = o.const("len", (0, t._)`${s}.length`)
              if (!1 === a) (e.setParams({ len: i }), e.fail((0, t._)`${l} > ${i}`))
              else if ("object" == typeof a && !(0, r.alwaysValidSchema)(n, a)) {
                let a = o.var("valid", (0, t._)`${l} <= ${i}`)
                ;(o.if((0, t.not)(a), () => {
                  var s, c
                  ;((s = a),
                    (c = i),
                    void o.forRange("i", c, l, (a) => {
                      ;(e.subschema({ keyword: "unevaluatedItems", dataProp: a, dataPropType: r.Type.Num }, s),
                        n.allErrors || o.if((0, t.not)(s), () => o.break()))
                    }))
                }),
                  e.ok(a))
              }
              n.items = !0
            },
          }
        }),
        sw = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = sP(),
            r = s$()
          e.default = [t.default, r.default]
        }),
        sR = C((e, t) => {
          t.exports = {
            $schema: "https://json-schema.org/draft/2019-09/schema",
            $id: "https://json-schema.org/draft/2019-09/schema",
            $vocabulary: {
              "https://json-schema.org/draft/2019-09/vocab/core": !0,
              "https://json-schema.org/draft/2019-09/vocab/applicator": !0,
              "https://json-schema.org/draft/2019-09/vocab/validation": !0,
              "https://json-schema.org/draft/2019-09/vocab/meta-data": !0,
              "https://json-schema.org/draft/2019-09/vocab/format": !1,
              "https://json-schema.org/draft/2019-09/vocab/content": !0,
            },
            $recursiveAnchor: !0,
            title: "Core and Validation specifications meta-schema",
            allOf: [
              { $ref: "meta/core" },
              { $ref: "meta/applicator" },
              { $ref: "meta/validation" },
              { $ref: "meta/meta-data" },
              { $ref: "meta/format" },
              { $ref: "meta/content" },
            ],
            type: ["object", "boolean"],
            properties: {
              definitions: {
                $comment:
                  "While no longer an official keyword as it is replaced by $defs, this keyword is retained in the meta-schema to prevent incompatible extensions as it remains in common use.",
                type: "object",
                additionalProperties: { $recursiveRef: "#" },
                default: {},
              },
              dependencies: {
                $comment:
                  '"dependencies" is no longer a keyword, but schema authors should avoid redefining it to facilitate a smooth transition to "dependentSchemas" and "dependentRequired"',
                type: "object",
                additionalProperties: {
                  anyOf: [{ $recursiveRef: "#" }, { $ref: "meta/validation#/$defs/stringArray" }],
                },
              },
            },
          }
        }),
        sj = C((e, t) => {
          t.exports = {
            $schema: "https://json-schema.org/draft/2019-09/schema",
            $id: "https://json-schema.org/draft/2019-09/meta/applicator",
            $vocabulary: { "https://json-schema.org/draft/2019-09/vocab/applicator": !0 },
            $recursiveAnchor: !0,
            title: "Applicator vocabulary meta-schema",
            type: ["object", "boolean"],
            properties: {
              additionalItems: { $recursiveRef: "#" },
              unevaluatedItems: { $recursiveRef: "#" },
              items: { anyOf: [{ $recursiveRef: "#" }, { $ref: "#/$defs/schemaArray" }] },
              contains: { $recursiveRef: "#" },
              additionalProperties: { $recursiveRef: "#" },
              unevaluatedProperties: { $recursiveRef: "#" },
              properties: { type: "object", additionalProperties: { $recursiveRef: "#" }, default: {} },
              patternProperties: {
                type: "object",
                additionalProperties: { $recursiveRef: "#" },
                propertyNames: { format: "regex" },
                default: {},
              },
              dependentSchemas: { type: "object", additionalProperties: { $recursiveRef: "#" } },
              propertyNames: { $recursiveRef: "#" },
              if: { $recursiveRef: "#" },
              then: { $recursiveRef: "#" },
              else: { $recursiveRef: "#" },
              allOf: { $ref: "#/$defs/schemaArray" },
              anyOf: { $ref: "#/$defs/schemaArray" },
              oneOf: { $ref: "#/$defs/schemaArray" },
              not: { $recursiveRef: "#" },
            },
            $defs: { schemaArray: { type: "array", minItems: 1, items: { $recursiveRef: "#" } } },
          }
        }),
        sk = C((e, t) => {
          t.exports = {
            $schema: "https://json-schema.org/draft/2019-09/schema",
            $id: "https://json-schema.org/draft/2019-09/meta/content",
            $vocabulary: { "https://json-schema.org/draft/2019-09/vocab/content": !0 },
            $recursiveAnchor: !0,
            title: "Content vocabulary meta-schema",
            type: ["object", "boolean"],
            properties: {
              contentMediaType: { type: "string" },
              contentEncoding: { type: "string" },
              contentSchema: { $recursiveRef: "#" },
            },
          }
        }),
        sE = C((e, t) => {
          t.exports = {
            $schema: "https://json-schema.org/draft/2019-09/schema",
            $id: "https://json-schema.org/draft/2019-09/meta/core",
            $vocabulary: { "https://json-schema.org/draft/2019-09/vocab/core": !0 },
            $recursiveAnchor: !0,
            title: "Core vocabulary meta-schema",
            type: ["object", "boolean"],
            properties: {
              $id: {
                type: "string",
                format: "uri-reference",
                $comment: "Non-empty fragments not allowed.",
                pattern: "^[^#]*#?$",
              },
              $schema: { type: "string", format: "uri" },
              $anchor: { type: "string", pattern: "^[A-Za-z][-A-Za-z0-9.:_]*$" },
              $ref: { type: "string", format: "uri-reference" },
              $recursiveRef: { type: "string", format: "uri-reference" },
              $recursiveAnchor: { type: "boolean", default: !1 },
              $vocabulary: {
                type: "object",
                propertyNames: { type: "string", format: "uri" },
                additionalProperties: { type: "boolean" },
              },
              $comment: { type: "string" },
              $defs: { type: "object", additionalProperties: { $recursiveRef: "#" }, default: {} },
            },
          }
        }),
        sI = C((e, t) => {
          t.exports = {
            $schema: "https://json-schema.org/draft/2019-09/schema",
            $id: "https://json-schema.org/draft/2019-09/meta/format",
            $vocabulary: { "https://json-schema.org/draft/2019-09/vocab/format": !0 },
            $recursiveAnchor: !0,
            title: "Format vocabulary meta-schema",
            type: ["object", "boolean"],
            properties: { format: { type: "string" } },
          }
        }),
        sC = C((e, t) => {
          t.exports = {
            $schema: "https://json-schema.org/draft/2019-09/schema",
            $id: "https://json-schema.org/draft/2019-09/meta/meta-data",
            $vocabulary: { "https://json-schema.org/draft/2019-09/vocab/meta-data": !0 },
            $recursiveAnchor: !0,
            title: "Meta-data vocabulary meta-schema",
            type: ["object", "boolean"],
            properties: {
              title: { type: "string" },
              description: { type: "string" },
              default: !0,
              deprecated: { type: "boolean", default: !1 },
              readOnly: { type: "boolean", default: !1 },
              writeOnly: { type: "boolean", default: !1 },
              examples: { type: "array", items: !0 },
            },
          }
        }),
        sx = C((e, t) => {
          t.exports = {
            $schema: "https://json-schema.org/draft/2019-09/schema",
            $id: "https://json-schema.org/draft/2019-09/meta/validation",
            $vocabulary: { "https://json-schema.org/draft/2019-09/vocab/validation": !0 },
            $recursiveAnchor: !0,
            title: "Validation vocabulary meta-schema",
            type: ["object", "boolean"],
            properties: {
              multipleOf: { type: "number", exclusiveMinimum: 0 },
              maximum: { type: "number" },
              exclusiveMaximum: { type: "number" },
              minimum: { type: "number" },
              exclusiveMinimum: { type: "number" },
              maxLength: { $ref: "#/$defs/nonNegativeInteger" },
              minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
              pattern: { type: "string", format: "regex" },
              maxItems: { $ref: "#/$defs/nonNegativeInteger" },
              minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
              uniqueItems: { type: "boolean", default: !1 },
              maxContains: { $ref: "#/$defs/nonNegativeInteger" },
              minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 },
              maxProperties: { $ref: "#/$defs/nonNegativeInteger" },
              minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
              required: { $ref: "#/$defs/stringArray" },
              dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } },
              const: !0,
              enum: { type: "array", items: !0 },
              type: {
                anyOf: [
                  { $ref: "#/$defs/simpleTypes" },
                  { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 },
                ],
              },
            },
            $defs: {
              nonNegativeInteger: { type: "integer", minimum: 0 },
              nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 },
              simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] },
              stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] },
            },
          }
        }),
        sq = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = sR(),
            r = sj(),
            o = sk(),
            a = sE(),
            s = sI(),
            n = sC(),
            i = sx(),
            l = ["/properties"]
          e.default = function (e) {
            return ([t, r, o, a, c(this, s), n, c(this, i)].forEach((e) => this.addMetaSchema(e, void 0, !1)), this)
            function c(t, r) {
              return e ? t.$dataMetaSchema(r, l) : r
            }
          }
        }),
        sT = C((e, t) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MissingRefError =
              e.ValidationError =
              e.CodeGen =
              e.Name =
              e.nil =
              e.stringify =
              e.str =
              e._ =
              e.KeywordCxt =
              e.Ajv2019 =
                void 0))
          let r = aO(),
            o = sl(),
            a = sy(),
            s = sb(),
            n = sw(),
            i = su(),
            l = sq(),
            c = "https://json-schema.org/draft/2019-09/schema"
          var u = class extends r.default {
            constructor(e = {}) {
              super({ ...e, dynamicRef: !0, next: !0, unevaluated: !0 })
            }
            _addVocabularies() {
              ;(super._addVocabularies(),
                this.addVocabulary(a.default),
                o.default.forEach((e) => this.addVocabulary(e)),
                this.addVocabulary(s.default),
                this.addVocabulary(n.default),
                this.opts.discriminator && this.addKeyword(i.default))
            }
            _addDefaultMetaSchema() {
              super._addDefaultMetaSchema()
              let { $data: e, meta: t } = this.opts
              t && (l.default.call(this, e), (this.refs["http://json-schema.org/schema"] = c))
            }
            defaultMeta() {
              return (this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(c) ? c : void 0))
            }
          }
          ;((e.Ajv2019 = u),
            (t.exports = e = u),
            (t.exports.Ajv2019 = u),
            Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = u))
          var d = aj()
          Object.defineProperty(e, "KeywordCxt", {
            enumerable: !0,
            get: function () {
              return d.KeywordCxt
            },
          })
          var p = ad()
          ;(Object.defineProperty(e, "_", {
            enumerable: !0,
            get: function () {
              return p._
            },
          }),
            Object.defineProperty(e, "str", {
              enumerable: !0,
              get: function () {
                return p.str
              },
            }),
            Object.defineProperty(e, "stringify", {
              enumerable: !0,
              get: function () {
                return p.stringify
              },
            }),
            Object.defineProperty(e, "nil", {
              enumerable: !0,
              get: function () {
                return p.nil
              },
            }),
            Object.defineProperty(e, "Name", {
              enumerable: !0,
              get: function () {
                return p.Name
              },
            }),
            Object.defineProperty(e, "CodeGen", {
              enumerable: !0,
              get: function () {
                return p.CodeGen
              },
            }))
          var h = ak()
          Object.defineProperty(e, "ValidationError", {
            enumerable: !0,
            get: function () {
              return h.default
            },
          })
          var m = aE()
          Object.defineProperty(e, "MissingRefError", {
            enumerable: !0,
            get: function () {
              return m.default
            },
          })
        }),
        sY = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = az(),
            r = aW(),
            o = sa(),
            a = sy(),
            s = sb(),
            n = sw(),
            i = sn(),
            l = si()
          e.default = [
            a.default,
            t.default,
            r.default,
            (0, o.default)(!0),
            i.default,
            l.metadataVocabulary,
            l.contentVocabulary,
            s.default,
            n.default,
          ]
        }),
        sO = C((e, t) => {
          t.exports = {
            $schema: "https://json-schema.org/draft/2020-12/schema",
            $id: "https://json-schema.org/draft/2020-12/schema",
            $vocabulary: {
              "https://json-schema.org/draft/2020-12/vocab/core": !0,
              "https://json-schema.org/draft/2020-12/vocab/applicator": !0,
              "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0,
              "https://json-schema.org/draft/2020-12/vocab/validation": !0,
              "https://json-schema.org/draft/2020-12/vocab/meta-data": !0,
              "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0,
              "https://json-schema.org/draft/2020-12/vocab/content": !0,
            },
            $dynamicAnchor: "meta",
            title: "Core and Validation specifications meta-schema",
            allOf: [
              { $ref: "meta/core" },
              { $ref: "meta/applicator" },
              { $ref: "meta/unevaluated" },
              { $ref: "meta/validation" },
              { $ref: "meta/meta-data" },
              { $ref: "meta/format-annotation" },
              { $ref: "meta/content" },
            ],
            type: ["object", "boolean"],
            $comment:
              "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",
            properties: {
              definitions: {
                $comment: '"definitions" has been replaced by "$defs".',
                type: "object",
                additionalProperties: { $dynamicRef: "#meta" },
                deprecated: !0,
                default: {},
              },
              dependencies: {
                $comment:
                  '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.',
                type: "object",
                additionalProperties: {
                  anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }],
                },
                deprecated: !0,
                default: {},
              },
              $recursiveAnchor: {
                $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".',
                $ref: "meta/core#/$defs/anchorString",
                deprecated: !0,
              },
              $recursiveRef: {
                $comment: '"$recursiveRef" has been replaced by "$dynamicRef".',
                $ref: "meta/core#/$defs/uriReferenceString",
                deprecated: !0,
              },
            },
          }
        }),
        sM = C((e, t) => {
          t.exports = {
            $schema: "https://json-schema.org/draft/2020-12/schema",
            $id: "https://json-schema.org/draft/2020-12/meta/applicator",
            $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 },
            $dynamicAnchor: "meta",
            title: "Applicator vocabulary meta-schema",
            type: ["object", "boolean"],
            properties: {
              prefixItems: { $ref: "#/$defs/schemaArray" },
              items: { $dynamicRef: "#meta" },
              contains: { $dynamicRef: "#meta" },
              additionalProperties: { $dynamicRef: "#meta" },
              properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} },
              patternProperties: {
                type: "object",
                additionalProperties: { $dynamicRef: "#meta" },
                propertyNames: { format: "regex" },
                default: {},
              },
              dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} },
              propertyNames: { $dynamicRef: "#meta" },
              if: { $dynamicRef: "#meta" },
              then: { $dynamicRef: "#meta" },
              else: { $dynamicRef: "#meta" },
              allOf: { $ref: "#/$defs/schemaArray" },
              anyOf: { $ref: "#/$defs/schemaArray" },
              oneOf: { $ref: "#/$defs/schemaArray" },
              not: { $dynamicRef: "#meta" },
            },
            $defs: { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } },
          }
        }),
        sN = C((e, t) => {
          t.exports = {
            $schema: "https://json-schema.org/draft/2020-12/schema",
            $id: "https://json-schema.org/draft/2020-12/meta/unevaluated",
            $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 },
            $dynamicAnchor: "meta",
            title: "Unevaluated applicator vocabulary meta-schema",
            type: ["object", "boolean"],
            properties: { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } },
          }
        }),
        sz = C((e, t) => {
          t.exports = {
            $schema: "https://json-schema.org/draft/2020-12/schema",
            $id: "https://json-schema.org/draft/2020-12/meta/content",
            $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/content": !0 },
            $dynamicAnchor: "meta",
            title: "Content vocabulary meta-schema",
            type: ["object", "boolean"],
            properties: {
              contentEncoding: { type: "string" },
              contentMediaType: { type: "string" },
              contentSchema: { $dynamicRef: "#meta" },
            },
          }
        }),
        sA = C((e, t) => {
          t.exports = {
            $schema: "https://json-schema.org/draft/2020-12/schema",
            $id: "https://json-schema.org/draft/2020-12/meta/core",
            $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/core": !0 },
            $dynamicAnchor: "meta",
            title: "Core vocabulary meta-schema",
            type: ["object", "boolean"],
            properties: {
              $id: {
                $ref: "#/$defs/uriReferenceString",
                $comment: "Non-empty fragments not allowed.",
                pattern: "^[^#]*#?$",
              },
              $schema: { $ref: "#/$defs/uriString" },
              $ref: { $ref: "#/$defs/uriReferenceString" },
              $anchor: { $ref: "#/$defs/anchorString" },
              $dynamicRef: { $ref: "#/$defs/uriReferenceString" },
              $dynamicAnchor: { $ref: "#/$defs/anchorString" },
              $vocabulary: {
                type: "object",
                propertyNames: { $ref: "#/$defs/uriString" },
                additionalProperties: { type: "boolean" },
              },
              $comment: { type: "string" },
              $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } },
            },
            $defs: {
              anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" },
              uriString: { type: "string", format: "uri" },
              uriReferenceString: { type: "string", format: "uri-reference" },
            },
          }
        }),
        sL = C((e, t) => {
          t.exports = {
            $schema: "https://json-schema.org/draft/2020-12/schema",
            $id: "https://json-schema.org/draft/2020-12/meta/format-annotation",
            $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 },
            $dynamicAnchor: "meta",
            title: "Format vocabulary meta-schema for annotation results",
            type: ["object", "boolean"],
            properties: { format: { type: "string" } },
          }
        }),
        sH = C((e, t) => {
          t.exports = {
            $schema: "https://json-schema.org/draft/2020-12/schema",
            $id: "https://json-schema.org/draft/2020-12/meta/meta-data",
            $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 },
            $dynamicAnchor: "meta",
            title: "Meta-data vocabulary meta-schema",
            type: ["object", "boolean"],
            properties: {
              title: { type: "string" },
              description: { type: "string" },
              default: !0,
              deprecated: { type: "boolean", default: !1 },
              readOnly: { type: "boolean", default: !1 },
              writeOnly: { type: "boolean", default: !1 },
              examples: { type: "array", items: !0 },
            },
          }
        }),
        sD = C((e, t) => {
          t.exports = {
            $schema: "https://json-schema.org/draft/2020-12/schema",
            $id: "https://json-schema.org/draft/2020-12/meta/validation",
            $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/validation": !0 },
            $dynamicAnchor: "meta",
            title: "Validation vocabulary meta-schema",
            type: ["object", "boolean"],
            properties: {
              type: {
                anyOf: [
                  { $ref: "#/$defs/simpleTypes" },
                  { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 },
                ],
              },
              const: !0,
              enum: { type: "array", items: !0 },
              multipleOf: { type: "number", exclusiveMinimum: 0 },
              maximum: { type: "number" },
              exclusiveMaximum: { type: "number" },
              minimum: { type: "number" },
              exclusiveMinimum: { type: "number" },
              maxLength: { $ref: "#/$defs/nonNegativeInteger" },
              minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
              pattern: { type: "string", format: "regex" },
              maxItems: { $ref: "#/$defs/nonNegativeInteger" },
              minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
              uniqueItems: { type: "boolean", default: !1 },
              maxContains: { $ref: "#/$defs/nonNegativeInteger" },
              minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 },
              maxProperties: { $ref: "#/$defs/nonNegativeInteger" },
              minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
              required: { $ref: "#/$defs/stringArray" },
              dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } },
            },
            $defs: {
              nonNegativeInteger: { type: "integer", minimum: 0 },
              nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 },
              simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] },
              stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] },
            },
          }
        }),
        sV = C((e) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let t = sO(),
            r = sM(),
            o = sN(),
            a = sz(),
            s = sA(),
            n = sL(),
            i = sH(),
            l = sD(),
            c = ["/properties"]
          e.default = function (e) {
            return ([t, r, o, a, s, u(this, n), i, u(this, l)].forEach((e) => this.addMetaSchema(e, void 0, !1)), this)
            function u(t, r) {
              return e ? t.$dataMetaSchema(r, c) : r
            }
          }
        }),
        sU = C((e, t) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.MissingRefError =
              e.ValidationError =
              e.CodeGen =
              e.Name =
              e.nil =
              e.stringify =
              e.str =
              e._ =
              e.KeywordCxt =
              e.Ajv2020 =
                void 0))
          let r = aO(),
            o = sY(),
            a = su(),
            s = sV(),
            n = "https://json-schema.org/draft/2020-12/schema"
          var i = class extends r.default {
            constructor(e = {}) {
              super({ ...e, dynamicRef: !0, next: !0, unevaluated: !0 })
            }
            _addVocabularies() {
              ;(super._addVocabularies(),
                o.default.forEach((e) => this.addVocabulary(e)),
                this.opts.discriminator && this.addKeyword(a.default))
            }
            _addDefaultMetaSchema() {
              super._addDefaultMetaSchema()
              let { $data: e, meta: t } = this.opts
              t && (s.default.call(this, e), (this.refs["http://json-schema.org/schema"] = n))
            }
            defaultMeta() {
              return (this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(n) ? n : void 0))
            }
          }
          ;((e.Ajv2020 = i),
            (t.exports = e = i),
            (t.exports.Ajv2020 = i),
            Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = i))
          var l = aj()
          Object.defineProperty(e, "KeywordCxt", {
            enumerable: !0,
            get: function () {
              return l.KeywordCxt
            },
          })
          var c = ad()
          ;(Object.defineProperty(e, "_", {
            enumerable: !0,
            get: function () {
              return c._
            },
          }),
            Object.defineProperty(e, "str", {
              enumerable: !0,
              get: function () {
                return c.str
              },
            }),
            Object.defineProperty(e, "stringify", {
              enumerable: !0,
              get: function () {
                return c.stringify
              },
            }),
            Object.defineProperty(e, "nil", {
              enumerable: !0,
              get: function () {
                return c.nil
              },
            }),
            Object.defineProperty(e, "Name", {
              enumerable: !0,
              get: function () {
                return c.Name
              },
            }),
            Object.defineProperty(e, "CodeGen", {
              enumerable: !0,
              get: function () {
                return c.CodeGen
              },
            }))
          var u = ak()
          Object.defineProperty(e, "ValidationError", {
            enumerable: !0,
            get: function () {
              return u.default
            },
          })
          var d = aE()
          Object.defineProperty(e, "MissingRefError", {
            enumerable: !0,
            get: function () {
              return d.default
            },
          })
        }),
        sK = C((e) => {
          function t(e, t) {
            return { validate: e, compare: t }
          }
          ;(Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.formatNames = e.fastFormats = e.fullFormats = void 0),
            (e.fullFormats = {
              date: t(a, s),
              time: t(i(!0), l),
              "date-time": t(d(!0), p),
              "iso-time": t(i(), c),
              "iso-date-time": t(d(), h),
              duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
              uri: function (e) {
                return m.test(e) && f.test(e)
              },
              "uri-reference":
                /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
              "uri-template":
                /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
              url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
              email:
                /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
              hostname:
                /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
              ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
              ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
              regex: function (e) {
                if (_.test(e)) return !1
                try {
                  return (new RegExp(e), !0)
                } catch (e) {
                  return !1
                }
              },
              uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
              "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
              "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
              "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
              byte: function (e) {
                return ((g.lastIndex = 0), g.test(e))
              },
              int32: {
                type: "number",
                validate: function (e) {
                  return Number.isInteger(e) && e <= v && e >= y
                },
              },
              int64: {
                type: "number",
                validate: function (e) {
                  return Number.isInteger(e)
                },
              },
              float: { type: "number", validate: S },
              double: { type: "number", validate: S },
              password: !0,
              binary: !0,
            }),
            (e.fastFormats = {
              ...e.fullFormats,
              date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, s),
              time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, l),
              "date-time": t(
                /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
                p,
              ),
              "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, c),
              "iso-date-time": t(
                /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
                h,
              ),
              uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
              "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
              email:
                /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
            }),
            (e.formatNames = Object.keys(e.fullFormats)))
          let r = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
            o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
          function a(e) {
            var t
            let a = r.exec(e)
            if (!a) return !1
            let s = +a[1],
              n = +a[2],
              i = +a[3]
            return (
              n >= 1 &&
              n <= 12 &&
              i >= 1 &&
              i <= (2 === n && (t = s) % 4 == 0 && (t % 100 != 0 || t % 400 == 0) ? 29 : o[n])
            )
          }
          function s(e, t) {
            if (e && t) return e > t ? 1 : e < t ? -1 : 0
          }
          let n = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i
          function i(e) {
            return function (t) {
              let r = n.exec(t)
              if (!r) return !1
              let o = +r[1],
                a = +r[2],
                s = +r[3],
                i = r[4],
                l = "-" === r[5] ? -1 : 1,
                c = +(r[6] || 0),
                u = +(r[7] || 0)
              if (c > 23 || u > 59 || (e && !i)) return !1
              if (o <= 23 && a <= 59 && s < 60) return !0
              let d = a - u * l,
                p = o - c * l - (d < 0)
              return (23 === p || -1 === p) && (59 === d || -1 === d) && s < 61
            }
          }
          function l(e, t) {
            if (!(e && t)) return
            let r = new Date("2020-01-01T" + e).valueOf(),
              o = new Date("2020-01-01T" + t).valueOf()
            if (r && o) return r - o
          }
          function c(e, t) {
            if (!(e && t)) return
            let r = n.exec(e),
              o = n.exec(t)
            if (r && o) return (e = r[1] + r[2] + r[3]) > (t = o[1] + o[2] + o[3]) ? 1 : e < t ? -1 : 0
          }
          let u = /t|\s/i
          function d(e) {
            let t = i(e)
            return function (e) {
              let r = e.split(u)
              return 2 === r.length && a(r[0]) && t(r[1])
            }
          }
          function p(e, t) {
            if (!(e && t)) return
            let r = new Date(e).valueOf(),
              o = new Date(t).valueOf()
            if (r && o) return r - o
          }
          function h(e, t) {
            if (!(e && t)) return
            let [r, o] = e.split(u),
              [a, n] = t.split(u),
              i = s(r, a)
            if (void 0 !== i) return i || l(o, n)
          }
          let m = /\/|:/,
            f =
              /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
            g = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm,
            y = -0x80000000,
            v = 0x7fffffff
          function S() {
            return !0
          }
          let _ = /[^\\]\\Z/
        }),
        sJ = C((e) => {
          ;(Object.defineProperty(e, "__esModule", { value: !0 }), (e.formatLimitDefinition = void 0))
          let t = sp(),
            r = ad(),
            o = r.operators,
            a = {
              formatMaximum: { okStr: "<=", ok: o.LTE, fail: o.GT },
              formatMinimum: { okStr: ">=", ok: o.GTE, fail: o.LT },
              formatExclusiveMaximum: { okStr: "<", ok: o.LT, fail: o.GTE },
              formatExclusiveMinimum: { okStr: ">", ok: o.GT, fail: o.LTE },
            }
          ;((e.formatLimitDefinition = {
            keyword: Object.keys(a),
            type: "string",
            schemaType: "string",
            $data: !0,
            error: {
              message: ({ keyword: e, schemaCode: t }) => (0, r.str)`should be ${a[e].okStr} ${t}`,
              params: ({ keyword: e, schemaCode: t }) => (0, r._)`{comparison: ${a[e].okStr}, limit: ${t}}`,
            },
            code(e) {
              let o,
                s,
                { gen: n, data: i, schemaCode: l, keyword: c, it: u } = e,
                { opts: d, self: p } = u
              if (!d.validateFormats) return
              let h = new t.KeywordCxt(u, p.RULES.all.format.definition, "format")
              function m(e) {
                return (0, r._)`${e}.compare(${i}, ${l}) ${a[c].fail} 0`
              }
              h.$data
                ? ((o = n.scopeValue("formats", { ref: p.formats, code: d.code.formats })),
                  (s = n.const("fmt", (0, r._)`${o}[${h.schemaCode}]`)),
                  e.fail$data(
                    (0, r.or)(
                      (0, r._)`typeof ${s} != "object"`,
                      (0, r._)`${s} instanceof RegExp`,
                      (0, r._)`typeof ${s}.compare != "function"`,
                      m(s),
                    ),
                  ))
                : (function () {
                    let t = h.schema,
                      o = p.formats[t]
                    if (!o || !0 === o) return
                    if ("object" != typeof o || o instanceof RegExp || "function" != typeof o.compare)
                      throw Error(`"${c}": format "${t}" does not define "compare" function`)
                    let a = n.scopeValue("formats", {
                      key: t,
                      ref: o,
                      code: d.code.formats ? (0, r._)`${d.code.formats}${(0, r.getProperty)(t)}` : void 0,
                    })
                    e.fail$data(m(a))
                  })()
            },
            dependencies: ["format"],
          }),
            (e.default = (t) => (t.addKeyword(e.formatLimitDefinition), t)))
        }),
        sF = C((e, t) => {
          Object.defineProperty(e, "__esModule", { value: !0 })
          let r = sK(),
            o = sJ(),
            a = ad(),
            s = new a.Name("fullFormats"),
            n = new a.Name("fastFormats"),
            i = (e, t = { keywords: !0 }) => {
              if (Array.isArray(t)) return (l(e, t, r.fullFormats, s), e)
              let [a, i] = "fast" === t.mode ? [r.fastFormats, n] : [r.fullFormats, s]
              return (l(e, t.formats || r.formatNames, a, i), t.keywords && (0, o.default)(e), e)
            }
          function l(e, t, r, o) {
            var s
            for (let n of (null != (s = e.opts.code).formats ||
              (s.formats = (0, a._)`require("ajv-formats/dist/formats").${o}`),
            t))
              e.addFormat(n, r[n])
          }
          ;((i.get = (e, t = "full") => {
            let o = ("fast" === t ? r.fastFormats : r.fullFormats)[e]
            if (!o) throw Error(`Unknown format "${e}"`)
            return o
          }),
            (t.exports = e = i),
            Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = i))
        }),
        sG = sp(),
        sB = sT(),
        sZ = sU()
      let sW = x(sF(), 1).default
      function sX(e) {
        let t = new e({ strict: !1, validateFormats: !0, validateSchema: !1, allErrors: !0 })
        return (sW(t), t)
      }
      var sQ = class {
        _ajv
        _ajvDraft7
        _ajv2019
        _userAjv
        constructor(e) {
          ;((this._userAjv = void 0 !== e), (this._ajv = e))
        }
        get ajv() {
          return (this._ajv ??= sX(sZ.Ajv2020))
        }
        _engineFor(e) {
          if (this._userAjv) return this.ajv
          let t = (function (e, t) {
            if (!("$schema" in e) || "string" != typeof e.$schema) return "2020-12"
            let r = e.$schema.replace(/#$/, "")
            if (q.has(r)) return "2020-12"
            if (T.has(r)) return "2019-09"
            if (Y.has(r) || O.has(r)) return "draft-7"
            throw Error(
              `JSON Schema declares an unsupported dialect ("$schema": "${e.$schema.slice(0, 200)}"). The default validator supports JSON Schema 2020-12, 2019-09, draft-07, and draft-06; ${t}`,
            )
          })(e, "pass a pre-configured Ajv instance to AjvJsonSchemaValidator(ajv) to validate other dialects.")
          return "2020-12" === t
            ? this.ajv
            : "2019-09" === t
              ? (this._ajv2019 ??= sX(sB.Ajv2019))
              : (this._ajvDraft7 ??= sX(sG.Ajv))
        }
        getValidator(e) {
          let t = this._engineFor(e),
            r = "$id" in e && "string" == typeof e.$id ? (t.getSchema(e.$id) ?? t.compile(e)) : t.compile(e)
          return (e) =>
            r(e)
              ? { valid: !0, data: e, errorMessage: void 0 }
              : { valid: !1, data: void 0, errorMessage: t.errorsText(r.errors) }
        }
      }
      ;(sG.Ajv, r(6467), Symbol.for("mcp.completable"))
      function s0(e) {
        return e.replaceAll(/[\\"]/g, String.raw`\$&`).replaceAll(/[^\u0020-\u007E]/g, " ")
      }
      function s1(e, t, r, o) {
        let a = `Bearer error="${s0(e)}", error_description="${s0(t)}"`
        return (r.length > 0 && (a += `, scope="${s0(r.join(" "))}"`), o && (a += `, resource_metadata="${s0(o)}"`), a)
      }
      function s2(e, t, r) {
        if (null === r || "object" != typeof r || "string" != typeof r.method)
          throw new oS(
            ov.InternalError,
            `Handler for ${e} returned an invalid input request '${t}': each inputRequests entry must be an embedded elicitation/create, sampling/createMessage, or roots/list request`,
          )
        let o = (function (e) {
          switch (e.method) {
            case "elicitation/create":
              if (e.params?.mode === "url") return { elicitation: { url: {} } }
              return { elicitation: { form: {} } }
            case "sampling/createMessage": {
              let t = e.params
              if (void 0 !== t && (void 0 !== t.tools || void 0 !== t.toolChoice)) return { sampling: { tools: {} } }
              return { sampling: {} }
            }
            case "roots/list":
              return { roots: {} }
            default:
              return
          }
        })(r)
        if (void 0 === o)
          throw new oS(
            ov.InternalError,
            `Handler for ${e} returned an input request '${t}' of kind '${r.method}', which is not an embedded request the 2026-07-28 revision defines`,
          )
        return { embedded: r, required: o }
      }
      function s9(e, t) {
        if ("tools/call" === e) return { content: [{ type: "text", text: t }], isError: !0 }
        throw new oS(ov.InternalError, t)
      }
      var s5 = class {
        constructor(e) {
          this._host = e
        }
        async fulfill(e, t, r, o, a) {
          let { maxRounds: s, roundTimeoutMs: n } = this._host,
            i = o.mcpReq.signal,
            l = a,
            c = 0
          for (;;) {
            let a
            if ((c += 1) > s)
              return s9(
                e,
                `Multi-round-trip request '${e}' still required input after ${s} rounds (inputRequired.maxRounds)`,
              )
            let u = l.inputRequests,
              d = null != u && Object.keys(u).length > 0,
              p = "string" == typeof l.requestState ? l.requestState : void 0
            if (!d && void 0 === p)
              throw new oS(
                ov.InternalError,
                `Handler for ${e} returned an input-required result with neither inputRequests nor requestState (every InputRequiredResult must include at least one of the two)`,
              )
            if (d) {
              let t = this._host.resolvedClientCapabilities(o),
                r = []
              for (let [o, a] of Object.entries(u)) {
                let { embedded: s, required: n } = s2(e, o, a)
                if ("roots/list" !== s.method && void 0 === s.params)
                  throw new oS(
                    ov.InternalError,
                    `Handler for ${e} returned an input request '${o}' of kind '${s.method}' without params`,
                  )
                if (void 0 !== r1(n, t))
                  return s9(
                    e,
                    `Cannot request input '${o}' (${s.method}): the client on this 2025-era connection did not declare the required capability${void 0 === t ? " (no client capabilities are available on this connection — per-request legacy serving cannot receive server-to-client requests)" : ""}`,
                  )
                r.push([o, s])
              }
              let s = (function (e) {
                let t = new AbortController(),
                  r = () => t.abort(e?.reason)
                return (
                  e?.addEventListener("abort", r, { once: !0 }),
                  e?.aborted && t.abort(e.reason),
                  { signal: t.signal, abort: (e) => t.abort(e), dispose: () => e?.removeEventListener("abort", r) }
                )
              })(i)
              try {
                let e = {
                    relatedRequestId: o.mcpReq.id,
                    timeout: n,
                    resetTimeoutOnProgress: !0,
                    onprogress: () => {},
                    signal: s.signal,
                  },
                  t = await Promise.all(
                    r.map(async ([t, r]) => {
                      try {
                        return [t, await this._dispatchLeg(r, e)]
                      } catch (e) {
                        throw (s.abort(e), e)
                      }
                    }),
                  )
                a = Object.fromEntries(t)
              } catch (t) {
                if (i.aborted) throw t
                return s9(
                  e,
                  `Fulfilling input required by '${e}' failed: ${t instanceof Error ? t.message : String(t)}`,
                )
              } finally {
                s.dispose()
              }
            } else
              await (function (e) {
                return new Promise((t, r) => {
                  if (e?.aborted)
                    return void r(e.reason instanceof rQ ? e.reason : new rQ(rX.RequestTimeout, String(e.reason)))
                  let o = setTimeout(() => {
                      ;(e?.removeEventListener("abort", a), t())
                    }, 250),
                    a = () => {
                      ;(clearTimeout(o),
                        r(e?.reason instanceof rQ ? e.reason : new rQ(rX.RequestTimeout, String(e?.reason))))
                    }
                  e?.addEventListener("abort", a, { once: !0 })
                })
              })(i)
            let h = {
              ...o,
              mcpReq: {
                ...o.mcpReq,
                inputResponses: a,
                droppedInputResponseKeys: void 0,
                requestState: (function (e) {
                  return () => e
                })(p),
              },
            }
            if (void 0 !== p) {
              let t = await this._host.verifyRequestState(p, h, e)
              void 0 !== t && (h = aa(h, t))
            }
            let m = await t(r, h)
            if (!oF(m)) return m
            l = m
          }
        }
        async _dispatchLeg(e, t) {
          switch (e.method) {
            case "elicitation/create": {
              let r = e.params
              return (
                "url" === r.mode &&
                  void 0 === r.elicitationId &&
                  (r = {
                    ...r,
                    elicitationId: (function () {
                      let e = globalThis.crypto
                      if (e?.randomUUID !== void 0) return e.randomUUID()
                      let t = new Uint8Array(16)
                      ;(e.getRandomValues(t), (t[6] = (15 & t[6]) | 64), (t[8] = (63 & t[8]) | 128))
                      let r = [...t].map((e) => e.toString(16).padStart(2, "0")).join("")
                      return `${r.slice(0, 8)}-${r.slice(8, 12)}-${r.slice(12, 16)}-${r.slice(16, 20)}-${r.slice(20)}`
                    })(),
                  }),
                await this._host.sendElicitation(r, t)
              )
            }
            case "sampling/createMessage":
              return await this._host.sendSampling(e.params, t)
            case "roots/list":
              return await this._host.listRoots(e.params, t)
          }
        }
      }
      let s3 = new Set(["tools/call", "prompts/get", "resources/read"])
      var s4 = class extends as {
          _clientCapabilities
          _clientVersion
          _capabilities
          _instructions
          _jsonSchemaValidator
          _cacheHints
          _requestStateVerify
          _inputRequiredServing
          _legacyShim
          _legacyInputRequiredShim() {
            return (this._legacyShim ??= new s5({
              maxRounds: this._inputRequiredServing.maxRounds,
              roundTimeoutMs: this._inputRequiredServing.roundTimeoutMs,
              resolvedClientCapabilities: (e) => this._inputRequestCapabilityView(e),
              verifyRequestState: (e, t, r) => this._verifyRequestState(e, t, r),
              sendElicitation: (e, t) => this._sendElicitationLeg(e, t, { validateAcceptedContent: !1 }),
              sendSampling: (e, t) => this.createMessage(e, t),
              listRoots: (e, t) => this.listRoots(e, t),
            }))
          }
          oninitialized
          constructor(e, t) {
            if (
              (super(t),
              (this._serverInfo = e),
              (this._capabilities = t?.capabilities ? { ...t.capabilities } : {}),
              (this._instructions = t?.instructions),
              (this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new sQ()),
              (this._requestStateVerify = t?.requestState?.verify),
              (this._inputRequiredServing = (function (e) {
                if (e?.maxRounds !== void 0 && (!Number.isInteger(e.maxRounds) || e.maxRounds < 1))
                  throw RangeError(`inputRequired.maxRounds must be a positive integer (got ${e.maxRounds})`)
                if (e?.roundTimeoutMs !== void 0 && (!Number.isFinite(e.roundTimeoutMs) || e.roundTimeoutMs <= 0))
                  throw RangeError(`inputRequired.roundTimeoutMs must be a positive number (got ${e.roundTimeoutMs})`)
                return {
                  maxRounds: e?.maxRounds ?? 8,
                  roundTimeoutMs: e?.roundTimeoutMs ?? 6e5,
                  legacyShim: e?.legacyShim ?? !0,
                }
              })(t?.inputRequired)),
              t?.cacheHints !== void 0)
            ) {
              for (let [e, r] of Object.entries(t.cacheHints))
                void 0 !== r &&
                  (function (e, t) {
                    if (void 0 !== e.ttlMs && !og(e.ttlMs))
                      throw RangeError(
                        `Invalid cache hint for ${t}: ttlMs must be a non-negative safe integer (got ${String(e.ttlMs)})`,
                      )
                    if (void 0 !== e.cacheScope && !oy(e.cacheScope))
                      throw RangeError(
                        `Invalid cache hint for ${t}: cacheScope must be 'public' or 'private' (got ${String(e.cacheScope)})`,
                      )
                  })(r, `cacheHints['${e}']`)
              this._cacheHints = t.cacheHints
            }
            ;(this.setRequestHandler("initialize", (e) => this._oninitialize(e)),
              this.setNotificationHandler("notifications/initialized", () => this.oninitialized?.()),
              r9(this._supportedProtocolVersions).length > 0 &&
                this.setRequestHandler("server/discover", () => this._ondiscover()),
              this._capabilities.logging && this._registerLoggingHandler())
          }
          async connect(e) {
            if (void 0 !== this.transport)
              throw new rQ(
                rX.AlreadyConnected,
                "Use a separate Server instance per connection: this instance is already connected to a transport. To connect it to a new transport, call close() first.",
              )
            await super.connect(e)
          }
          _registerLoggingHandler() {
            this.setRequestHandler("logging/setLevel", async (e, t) => {
              let r = t.sessionId || t.http?.req?.headers.get("mcp-session-id") || void 0,
                { level: o } = e.params,
                a = rK.xL(tx, o)
              return (a.success && this._loggingLevels.set(r, a.data), {})
            })
          }
          buildContext(e, t) {
            let r = e.http || t?.request || t?.closeSSEStream || t?.closeStandaloneSSEStream
            return {
              ...e,
              mcpReq: {
                ...e.mcpReq,
                log: (t, r, o) => {
                  let a
                  if (!this._capabilities.logging) return Promise.resolve()
                  if (this._servedModernEra()) {
                    if (void 0 === (a = e.mcpReq.envelope?.[J])) return Promise.resolve()
                  } else a = this._loggingLevels.get(e.sessionId) ?? this._loggingLevels.get(void 0)
                  return void 0 !== a && this.LOG_LEVEL_SEVERITY.get(t) < this.LOG_LEVEL_SEVERITY.get(a)
                    ? Promise.resolve()
                    : e.mcpReq.notify({ method: "notifications/message", params: { level: t, data: r, logger: o } })
                },
                elicitInput: (e, t) => this.elicitInput(e, t),
                requestSampling: (e, t) => this.createMessage(e, t),
              },
              http: r
                ? {
                    ...e.http,
                    req: t?.request,
                    closeSSE: t?.closeSSEStream,
                    closeStandaloneSSE: t?.closeStandaloneSSEStream,
                  }
                : void 0,
            }
          }
          _loggingLevels = new Map()
          LOG_LEVEL_SEVERITY = new Map(tx.options.map((e, t) => [e, t]))
          isMessageIgnored = (e, t) => {
            let r = this._loggingLevels.get(t)
            return !!r && this.LOG_LEVEL_SEVERITY.get(e) < this.LOG_LEVEL_SEVERITY.get(r)
          }
          registerCapabilities(e) {
            if (this.transport)
              throw new rQ(rX.AlreadyConnected, "Cannot register capabilities after connecting to transport")
            let t = !!this._capabilities.logging
            ;((this._capabilities = (function (e, t) {
              let r = { ...e }
              for (let e in t) {
                let o = t[e]
                if (void 0 === o) continue
                let a = r[e]
                r[e] = an(a) && an(o) ? { ...a, ...o } : o
              }
              return r
            })(this._capabilities, e)),
              !t && this._capabilities.logging && this._registerLoggingHandler())
          }
          _wrapHandler(e, t) {
            if ("tools/call" !== e) {
              let r = this._cacheHints?.[e],
                o = s3.has(e)
              return void 0 !== r || o
                ? async (a, s) => {
                    let n = o ? await this._invokeInputRequiredCapableHandler(e, t, a, s) : await t(a, s)
                    if (oF(n)) {
                      if (!o)
                        throw new oS(
                          ov.InternalError,
                          `Handler for ${e} returned an input-required result, but only tools/call, prompts/get and resources/read support input_required (protocol revision 2026-07-28)`,
                        )
                      return n
                    }
                    return void 0 === r
                      ? n
                      : (function (e, t) {
                          if (void 0 === t) return e
                          let r = e[of]
                          if (void 0 === r) return { ...e, [of]: t }
                          let o = {},
                            a = r.ttlMs ?? t.ttlMs
                          void 0 !== a && (o.ttlMs = a)
                          let s = r.cacheScope ?? t.cacheScope
                          return (void 0 !== s && (o.cacheScope = s), { ...e, [of]: o })
                        })(n, r)
                  }
                : async (r, o) => {
                    let a = await t(r, o)
                    if (oF(a))
                      throw new oS(
                        ov.InternalError,
                        `Handler for ${e} returned an input-required result, but only tools/call, prompts/get and resources/read support input_required (protocol revision 2026-07-28)`,
                      )
                    return a
                  }
            }
            return async (e, r) => {
              let o = oA(this._negotiatedProtocolVersion),
                a = o.validateRequest("tools/call", e)
              if (!a.ok)
                throw new oS(
                  "not-in-era" === a.reason ? ov.InternalError : ov.InvalidParams,
                  "not-in-era" === a.reason
                    ? "No wire schema for tools/call in the resolved era"
                    : `Invalid tools/call request: ${a.message}`,
                )
              let s = await this._invokeInputRequiredCapableHandler("tools/call", t, e, r)
              if (oF(s)) return s
              let n = r4(s),
                i = o.validateResult("tools/call", n)
              if (!i.ok)
                throw new oS(
                  "not-in-era" === i.reason ? ov.InternalError : ov.InvalidParams,
                  "not-in-era" === i.reason
                    ? "No wire schema for tools/call in the resolved era"
                    : `Invalid tools/call result: ${i.message}`,
                )
              return i.value
            }
          }
          _servedModernEra() {
            return void 0 !== this._negotiatedProtocolVersion && r2(this._negotiatedProtocolVersion)
          }
          async _invokeInputRequiredCapableHandler(e, t, r, o) {
            let a,
              s = this._servedModernEra(),
              n = o.mcpReq.requestState()
            if (void 0 !== n && "string" != typeof n)
              throw new oS(ov.InvalidParams, "Invalid or expired requestState", { reason: "invalid_request_state" })
            let i = o
            if ("string" == typeof n) {
              let t = await this._verifyRequestState(n, o, e)
              void 0 !== t && (i = aa(o, t))
            }
            try {
              a = await t(r, i)
            } catch (e) {
              if (e instanceof oS && e.code === ov.UrlElicitationRequired) {
                if (!s) throw e
                throw new oS(
                  ov.InternalError,
                  `URL elicitation cannot be signalled by throwing UrlElicitationRequiredError on protocol revision ${this._negotiatedProtocolVersion}: return inputRequired({ inputRequests: { …: inputRequired.elicitUrl(...) } }) from the handler instead. The urlElicitationRequired error (-32042) of earlier revisions is not available on this revision.`,
                )
              }
              throw e
            }
            if (!oF(a)) return a
            if (!s) {
              if (!this._inputRequiredServing.legacyShim)
                throw new oS(
                  ov.InternalError,
                  `Handler for ${e} returned an input-required result, but this request is served on protocol revision ${this._negotiatedProtocolVersion ?? L}, which has no input_required vocabulary`,
                )
              return await this._legacyInputRequiredShim().fulfill(e, t, r, i, a)
            }
            let l = a.inputRequests,
              c = null != l && Object.keys(l).length > 0,
              u = "string" == typeof a.requestState
            if (!c && !u)
              throw new oS(
                ov.InternalError,
                `Handler for ${e} returned an input-required result with neither inputRequests nor requestState (every InputRequiredResult must include at least one of the two)`,
              )
            if (c) {
              let t = this._inputRequestCapabilityView(o)
              for (let [r, o] of Object.entries(l)) {
                let { embedded: a, required: s } = s2(e, r, o),
                  n = r1(s, t)
                if (void 0 !== n)
                  throw new o$(
                    { requiredCapabilities: n },
                    `Cannot request input '${r}' (${a.method}): the request's client capabilities do not declare the required capability`,
                  )
              }
            }
            return a
          }
          async _verifyRequestState(e, t, r) {
            if (void 0 !== this._requestStateVerify)
              try {
                return await this._requestStateVerify(e, t)
              } catch (e) {
                throw (
                  this.onerror?.(
                    Error(`requestState verification rejected ${r}: ${e instanceof Error ? e.message : String(e)}`),
                  ),
                  new oS(ov.InvalidParams, "Invalid or expired requestState", { reason: "invalid_request_state" })
                )
              }
          }
          _inputRequestCapabilityView(e) {
            return this._servedModernEra() ? e.mcpReq.envelope?.[K] : this._clientCapabilities
          }
          _assertPushApiInServedEra(e) {
            if (this._servedModernEra())
              throw new rQ(
                rX.MethodNotSupportedByProtocolVersion,
                `Server-to-client requests are not available on protocol revision ${this._negotiatedProtocolVersion}: '${e}' cannot be sent while serving a request on that revision. Return inputRequired({ ... }) from the handler instead — the client fulfils the embedded requests and retries the original request (multi round-trip requests).`,
                { method: e, era: "2026-07-28" },
              )
          }
          assertCapabilityForMethod(e) {
            switch (e) {
              case "sampling/createMessage":
                if (!this._clientCapabilities?.sampling)
                  throw new rQ(rX.CapabilityNotSupported, `Client does not support sampling (required for ${e})`)
                break
              case "elicitation/create":
                if (!this._clientCapabilities?.elicitation)
                  throw new rQ(rX.CapabilityNotSupported, `Client does not support elicitation (required for ${e})`)
                break
              case "roots/list":
                if (!this._clientCapabilities?.roots)
                  throw new rQ(rX.CapabilityNotSupported, `Client does not support listing roots (required for ${e})`)
            }
          }
          assertNotificationCapability(e) {
            switch (e) {
              case "notifications/message":
                if (!this._capabilities.logging)
                  throw new rQ(rX.CapabilityNotSupported, `Server does not support logging (required for ${e})`)
                break
              case "notifications/resources/updated":
              case "notifications/resources/list_changed":
                if (!this._capabilities.resources)
                  throw new rQ(
                    rX.CapabilityNotSupported,
                    `Server does not support notifying about resources (required for ${e})`,
                  )
                break
              case "notifications/tools/list_changed":
                if (!this._capabilities.tools)
                  throw new rQ(
                    rX.CapabilityNotSupported,
                    `Server does not support notifying of tool list changes (required for ${e})`,
                  )
                break
              case "notifications/prompts/list_changed":
                if (!this._capabilities.prompts)
                  throw new rQ(
                    rX.CapabilityNotSupported,
                    `Server does not support notifying of prompt list changes (required for ${e})`,
                  )
                break
              case "notifications/elicitation/complete":
                if (!this._clientCapabilities?.elicitation?.url)
                  throw new rQ(rX.CapabilityNotSupported, `Client does not support URL elicitation (required for ${e})`)
            }
          }
          assertRequestHandlerCapability(e) {
            switch (e) {
              case "completion/complete":
                if (!this._capabilities.completions)
                  throw new rQ(rX.CapabilityNotSupported, `Server does not support completions (required for ${e})`)
                break
              case "logging/setLevel":
                if (!this._capabilities.logging)
                  throw new rQ(rX.CapabilityNotSupported, `Server does not support logging (required for ${e})`)
                break
              case "prompts/get":
              case "prompts/list":
                if (!this._capabilities.prompts)
                  throw new rQ(rX.CapabilityNotSupported, `Server does not support prompts (required for ${e})`)
                break
              case "resources/list":
              case "resources/templates/list":
              case "resources/read":
                if (!this._capabilities.resources)
                  throw new rQ(rX.CapabilityNotSupported, `Server does not support resources (required for ${e})`)
                break
              case "tools/call":
              case "tools/list":
                if (!this._capabilities.tools)
                  throw new rQ(rX.CapabilityNotSupported, `Server does not support tools (required for ${e})`)
            }
          }
          async _oninitialize(e) {
            let t = e.params.protocolVersion
            ;((this._clientCapabilities = e.params.capabilities), (this._clientVersion = e.params.clientInfo))
            let r = this._supportedProtocolVersions.filter((e) => !r2(e)),
              o = r.includes(t) ? t : (r[0] ?? L)
            return (
              (this._negotiatedProtocolVersion = o),
              this.transport?.setProtocolVersion?.(o),
              {
                protocolVersion: o,
                capabilities: this.getCapabilities(),
                serverInfo: this._serverInfo,
                ...(this._instructions && { instructions: this._instructions }),
              }
            )
          }
          _ondiscover() {
            return {
              supportedVersions: r9(this._supportedProtocolVersions),
              capabilities: { ...this.getCapabilities() },
              ...(this._instructions && { instructions: this._instructions }),
            }
          }
          _outboundServerInfo() {
            return this._serverInfo
          }
          getClientCapabilities() {
            return this._clientCapabilities
          }
          getClientVersion() {
            return this._clientVersion
          }
          getNegotiatedProtocolVersion() {
            return this._negotiatedProtocolVersion
          }
          projectCallToolResult(e, t) {
            return this._wireCodec().projectCallToolResult(e, t)
          }
          getCapabilities() {
            return this._capabilities
          }
          async ping() {
            return (this._assertPushApiInServedEra("ping"), this.request({ method: "ping" }))
          }
          async createMessage(e, t) {
            if (
              (this._assertPushApiInServedEra("sampling/createMessage"),
              (e.tools || e.toolChoice) && !this._clientCapabilities?.sampling?.tools)
            )
              throw new rQ(rX.CapabilityNotSupported, "Client does not support sampling tools capability.")
            if (e.messages.length > 0) {
              let t = e.messages.at(-1),
                r = Array.isArray(t.content) ? t.content : [t.content],
                o = r.some((e) => "tool_result" === e.type),
                a = e.messages.length > 1 ? e.messages.at(-2) : void 0,
                s = a ? (Array.isArray(a.content) ? a.content : [a.content]) : [],
                n = s.some((e) => "tool_use" === e.type)
              if (o) {
                if (r.some((e) => "tool_result" !== e.type))
                  throw new oS(
                    ov.InvalidParams,
                    "The last message must contain only tool_result content if any is present",
                  )
                if (!n)
                  throw new oS(
                    ov.InvalidParams,
                    "tool_result blocks are not matching any tool_use from the previous message",
                  )
              }
              if (n) {
                let e = new Set(s.filter((e) => "tool_use" === e.type).map((e) => e.id)),
                  t = new Set(r.filter((e) => "tool_result" === e.type).map((e) => e.toolUseId))
                if (e.size !== t.size || ![...e].every((e) => t.has(e)))
                  throw new oS(
                    ov.InvalidParams,
                    "ids of tool_result blocks and tool_use blocks from previous message do not match",
                  )
              }
            }
            let r = !!(e.tools || e.toolChoice),
              o = await this.request({ method: "sampling/createMessage", params: e }, t),
              a = this._wireCodec().samplingResultVariant(r, o)
            if (!a.ok)
              throw new rQ(
                rX.InvalidResult,
                `Invalid sampling/createMessage result: ${"invalid" === a.reason ? a.message : a.reason}`,
              )
            return a.value
          }
          async elicitInput(e, t) {
            switch ((this._assertPushApiInServedEra("elicitation/create"), e.mode ?? "form")) {
              case "url":
                if (!this._clientCapabilities?.elicitation?.url)
                  throw new rQ(rX.CapabilityNotSupported, "Client does not support url elicitation.")
                break
              case "form":
                if (!this._clientCapabilities?.elicitation?.form)
                  throw new rQ(rX.CapabilityNotSupported, "Client does not support form elicitation.")
            }
            return this._sendElicitationLeg(e, t)
          }
          async _sendElicitationLeg(e, t, r) {
            let o = e.mode ?? "form",
              a = r?.validateAcceptedContent ?? !0
            switch (o) {
              case "url":
                return this.request({ method: "elicitation/create", params: e }, t)
              case "form": {
                let r = "form" === e.mode ? e : { ...e, mode: "form" },
                  o = await this.request({ method: "elicitation/create", params: r }, t)
                if (a && "accept" === o.action && o.content && r.requestedSchema)
                  try {
                    let e = this._jsonSchemaValidator.getValidator(r.requestedSchema)(o.content)
                    if (!e.valid)
                      throw new oS(
                        ov.InvalidParams,
                        `Elicitation response content does not match requested schema: ${e.errorMessage}`,
                      )
                  } catch (e) {
                    if (e instanceof oS) throw e
                    throw new oS(
                      ov.InternalError,
                      `Error validating elicitation response: ${e instanceof Error ? e.message : String(e)}`,
                    )
                  }
                return o
              }
            }
          }
          createElicitationCompletionNotifier(e, t) {
            if (!this._clientCapabilities?.elicitation?.url)
              throw new rQ(
                rX.CapabilityNotSupported,
                "Client does not support URL elicitation (required for notifications/elicitation/complete)",
              )
            return () =>
              this.notification({ method: "notifications/elicitation/complete", params: { elicitationId: e } }, t)
          }
          async listRoots(e, t) {
            return (this._assertPushApiInServedEra("roots/list"), this.request({ method: "roots/list", params: e }, t))
          }
          async sendLoggingMessage(e, t) {
            if (this._capabilities.logging && !this.isMessageIgnored(e.level, t))
              return this.notification({ method: "notifications/message", params: e })
          }
          async sendResourceUpdated(e) {
            return this.notification({ method: "notifications/resources/updated", params: e })
          }
          async sendResourceListChanged() {
            return this.notification({ method: "notifications/resources/list_changed" })
          }
          async sendToolListChanged() {
            return this.notification({ method: "notifications/tools/list_changed" })
          }
          async sendPromptListChanged() {
            return this.notification({ method: "notifications/prompts/list_changed" })
          }
        },
        s6 = class {
          sessionIdGenerator
          _started = !1
          _hasHandledRequest = !1
          _closed = !1
          _streamMapping = new Map()
          _requestToStreamMapping = new Map()
          _requestResponseMap = new Map()
          _initialized = !1
          _enableJsonResponse = !1
          _standaloneSseStreamId = "_GET_stream"
          _eventStore
          _onsessioninitialized
          _onsessionclosed
          _allowedHosts
          _allowedOrigins
          _enableDnsRebindingProtection
          _retryInterval
          _supportedProtocolVersions
          _keepAliveMs
          _maxRequestBodySize
          _scopeChallengeResolver
          sessionId
          onclose
          onerror
          onmessage
          constructor(e = {}) {
            ;((this.sessionIdGenerator = e.sessionIdGenerator),
              (this._enableJsonResponse = e.enableJsonResponse ?? !1),
              (this._eventStore = e.eventStore),
              (this._onsessioninitialized = e.onsessioninitialized),
              (this._onsessionclosed = e.onsessionclosed),
              (this._allowedHosts = e.allowedHosts),
              (this._allowedOrigins = e.allowedOrigins),
              (this._enableDnsRebindingProtection = e.enableDnsRebindingProtection ?? !1),
              (this._retryInterval = e.retryInterval),
              (this._supportedProtocolVersions = e.supportedProtocolVersions ?? H),
              (this._keepAliveMs = e.keepAliveMs ?? 15e3),
              (this._maxRequestBodySize = (function (e) {
                if (void 0 === e) return 4194304
                if ("number" != typeof e || !Number.isFinite(e) || e <= 0)
                  throw RangeError(`maxRequestBodySize must be a positive number of bytes, got ${String(e)}`)
                return e
              })(e.maxRequestBodySize)))
          }
          startKeepAlive(e, t) {
            if (this._closed) return
            let r = (function (e, t) {
              if (!Number.isFinite(e) || e < 1) return
              let r = setInterval(t, Math.min(e, 0x7fffffff))
              return (r.unref?.(), r)
            })(this._keepAliveMs, () => {
              try {
                e.enqueue(t.encode(": keepalive\n\n"))
              } catch {
                void 0 !== r && clearInterval(r)
              }
            })
            return r
          }
          setScopeChallengeResolver(e) {
            this._scopeChallengeResolver = e
          }
          async start() {
            if (this._started) throw Error("Transport already started")
            this._started = !0
          }
          setSupportedProtocolVersions(e) {
            this._supportedProtocolVersions = e
          }
          createJsonErrorResponse(e, t, r, o) {
            let a = { code: t, message: r }
            return (
              o?.data !== void 0 && (a.data = o.data),
              Response.json(
                { jsonrpc: "2.0", error: a, id: null },
                { status: e, headers: { "Content-Type": "application/json", ...o?.headers } },
              )
            )
          }
          async _checkScopeChallenge(e, t) {
            var r
            if (!this._scopeChallengeResolver) return
            let o = await (async function (e, t, r) {
              for (let a of e) {
                let e = await r({ request: a, ...(void 0 !== t && { authInfo: t }) })
                if (void 0 !== e) {
                  if (null === e || "object" != typeof e || !Array.isArray(e.scopes) || 0 === e.scopes.length)
                    throw TypeError("scope challenge must contain at least one scope")
                  for (let [t, r] of e.scopes.entries()) {
                    var o = `scope challenge scopes[${t}]`
                    if ("string" != typeof r || !/^[\u0021\u0023-\u005B\u005D-\u007E]+$/.test(r))
                      throw TypeError(`${o} must satisfy the OAuth scope-token grammar`)
                  }
                  if (void 0 !== e.errorDescription && "string" != typeof e.errorDescription)
                    throw TypeError("scope challenge errorDescription must be a string")
                  if (
                    void 0 !== e.errorDescription &&
                    !/^[\u0020-\u0021\u0023-\u005B\u005D-\u007E]+$/.test(e.errorDescription)
                  )
                    throw TypeError(
                      "scope challenge errorDescription must satisfy the RFC 6750 error-description grammar",
                    )
                  return e
                }
              }
            })(
              e.filter((e) => oJ(e)),
              t,
              this._scopeChallengeResolver,
            )
            return void 0 === o
              ? void 0
              : ((r = (function (e) {
                  if (e?.resourceMetadataUrl !== void 0) return e.resourceMetadataUrl
                  if (e?.resource?.protocol === "https:" || e?.resource?.protocol === "http:") {
                    var t, r
                    let o, a
                    return (
                      (o = new URL((t = e.resource))),
                      (a = (r = t.pathname).length > 1 && r.endsWith("/") ? r.slice(0, -1) : r),
                      (o.pathname = `/.well-known/oauth-protected-resource${"/" === a ? "" : a}`),
                      (o.hash = ""),
                      o.href
                    )
                  }
                })(t)),
                (function (e, t) {
                  let { requiredScopes: r = [], resourceMetadataUrl: o } = t ?? {}
                  if (!(e instanceof rW)) {
                    let e = new rW(rZ.ServerError, "Internal Server Error")
                    return Response.json(e.toResponseObject(), { status: 500 })
                  }
                  switch (e.code) {
                    case rZ.InvalidToken: {
                      let t = s1(e.code, e.message, r, o)
                      return Response.json(e.toResponseObject(), { status: 401, headers: { "WWW-Authenticate": t } })
                    }
                    case rZ.InsufficientScope: {
                      let t = s1(e.code, e.message, r, o)
                      return Response.json(e.toResponseObject(), { status: 403, headers: { "WWW-Authenticate": t } })
                    }
                    case rZ.ServerError:
                      return Response.json(e.toResponseObject(), { status: 500 })
                    default:
                      return Response.json(e.toResponseObject(), { status: 400 })
                  }
                })(new rW(rZ.InsufficientScope, o.errorDescription ?? "Insufficient scope"), {
                  requiredScopes: [...o.scopes],
                  resourceMetadataUrl: r,
                }))
          }
          validateRequestHeaders(e) {
            if (this._enableDnsRebindingProtection) {
              if (this._allowedHosts && this._allowedHosts.length > 0) {
                let t = e.headers.get("host")
                if (!t || !this._allowedHosts.includes(t)) {
                  let e = `Invalid Host header: ${t}`
                  return (this.onerror?.(Error(e)), this.createJsonErrorResponse(403, -32e3, e))
                }
              }
              if (this._allowedOrigins && this._allowedOrigins.length > 0) {
                let t = e.headers.get("origin")
                if (t && !this._allowedOrigins.includes(t)) {
                  let e = `Invalid Origin header: ${t}`
                  return (this.onerror?.(Error(e)), this.createJsonErrorResponse(403, -32e3, e))
                }
              }
            }
          }
          async handleRequest(e, t) {
            if (this._closed) return this.createJsonErrorResponse(404, -32001, "Session not found")
            if (!this.sessionIdGenerator && this._hasHandledRequest)
              throw Error("Stateless transport cannot be reused across requests. Create a new transport per request.")
            this._hasHandledRequest = !0
            let r = this.validateRequestHeaders(e)
            if (r) return r
            switch (e.method) {
              case "POST":
                return this.handlePostRequest(e, t)
              case "GET":
                return this.handleGetRequest(e)
              case "DELETE":
                return this.handleDeleteRequest(e)
              default:
                return this.handleUnsupportedRequest()
            }
          }
          supportsEmptySSEData(e) {
            return this._supportedProtocolVersions.includes(e) && e >= "2025-11-25"
          }
          async writePrimingEvent(e, t, r, o) {
            if (!this._eventStore || !this.supportsEmptySSEData(o)) return
            let a = await this._eventStore.storeEvent(r, {}),
              s = `id: ${a}
data: 

`
            ;(void 0 !== this._retryInterval &&
              (s = `id: ${a}
retry: ${this._retryInterval}
data: 

`),
              e.enqueue(t.encode(s)))
          }
          async handleGetRequest(e) {
            let t, r
            if (!e.headers.get("accept")?.includes("text/event-stream"))
              return (
                this.onerror?.(Error("Not Acceptable: Client must accept text/event-stream")),
                this.createJsonErrorResponse(406, -32e3, "Not Acceptable: Client must accept text/event-stream")
              )
            let o = this.validateSession(e)
            if (o) return o
            let a = this.validateProtocolVersion(e)
            if (a) return a
            if (this._eventStore) {
              let t = e.headers.get("last-event-id")
              if (t) return this.replayEvents(t)
            }
            if (void 0 !== this._streamMapping.get(this._standaloneSseStreamId))
              return (
                this.onerror?.(Error("Conflict: Only one SSE stream is allowed per session")),
                this.createJsonErrorResponse(409, -32e3, "Conflict: Only one SSE stream is allowed per session")
              )
            let s = new TextEncoder(),
              n = new ReadableStream({
                start: (e) => {
                  t = e
                },
                cancel: () => {
                  ;(void 0 !== r && clearInterval(r),
                    this._streamMapping.get(this._standaloneSseStreamId)?.controller === t &&
                      this._streamMapping.delete(this._standaloneSseStreamId))
                },
              }),
              i = {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache, no-transform",
                Connection: "keep-alive",
                "X-Accel-Buffering": "no",
              }
            return (
              void 0 !== this.sessionId && (i["mcp-session-id"] = this.sessionId),
              this._streamMapping.set(this._standaloneSseStreamId, {
                controller: t,
                encoder: s,
                cleanup: () => {
                  ;(void 0 !== r && clearInterval(r), this._streamMapping.delete(this._standaloneSseStreamId))
                  try {
                    t.close()
                  } catch {}
                },
              }),
              (r = this.startKeepAlive(t, s)),
              new Response(n, { headers: i })
            )
          }
          async replayEvents(e) {
            if (!this._eventStore)
              return (
                this.onerror?.(Error("Event store not configured")),
                this.createJsonErrorResponse(400, -32e3, "Event store not configured")
              )
            try {
              let t, r, o, a
              if (this._eventStore.getStreamIdForEventId) {
                if (!(t = await this._eventStore.getStreamIdForEventId(e)))
                  return (
                    this.onerror?.(Error("Invalid event ID format")),
                    this.createJsonErrorResponse(400, -32e3, "Invalid event ID format")
                  )
                if (void 0 !== this._streamMapping.get(t))
                  return (
                    this.onerror?.(Error("Conflict: Stream already has an active connection")),
                    this.createJsonErrorResponse(409, -32e3, "Conflict: Stream already has an active connection")
                  )
              }
              let s = {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache, no-transform",
                Connection: "keep-alive",
                "X-Accel-Buffering": "no",
              }
              void 0 !== this.sessionId && (s["mcp-session-id"] = this.sessionId)
              let n = new TextEncoder(),
                i = !1,
                l = new ReadableStream({
                  start: (e) => {
                    r = e
                  },
                  cancel: () => {
                    ;((i = !0),
                      void 0 !== o && clearInterval(o),
                      void 0 !== a && this._streamMapping.get(a)?.controller === r && this._streamMapping.delete(a))
                  },
                }),
                c = new Set()
              if (
                ((a = await this._eventStore.replayEventsAfter(e, {
                  send: async (e, t) => {
                    if ((c.add(e), !this.writeSSEEvent(r, n, t, e)))
                      try {
                        r.close()
                      } catch {}
                  },
                })),
                this._closed || i)
              ) {
                try {
                  r.close()
                } catch {}
                return this.createJsonErrorResponse(404, -32001, "Session not found")
              }
              if (
                (this._streamMapping.get(a)?.cleanup(),
                this._streamMapping.set(a, {
                  controller: r,
                  encoder: n,
                  replayedEventIds: c,
                  cleanup: () => {
                    ;(void 0 !== o && clearInterval(o), this._streamMapping.delete(a))
                    try {
                      r.close()
                    } catch {}
                  },
                }),
                a !== this._standaloneSseStreamId && ![...this._requestToStreamMapping.values()].includes(a))
              ) {
                this._streamMapping.delete(a)
                try {
                  r.close()
                } catch {}
              }
              return (
                this._streamMapping.get(a)?.controller === r && (o = this.startKeepAlive(r, n)),
                new Response(l, { headers: s })
              )
            } catch (e) {
              return (this.onerror?.(e), this.createJsonErrorResponse(500, -32e3, "Error replaying events"))
            }
          }
          writeSSEEvent(e, t, r, o) {
            try {
              let a = `event: message
`
              return (
                o &&
                  (a += `id: ${o}
`),
                (a += `data: ${JSON.stringify(r)}

`),
                e.enqueue(t.encode(a)),
                !0
              )
            } catch (e) {
              return (this.onerror?.(e), !1)
            }
          }
          handleUnsupportedRequest() {
            return (
              this.onerror?.(Error("Method not allowed.")),
              Response.json(
                { jsonrpc: "2.0", error: { code: -32e3, message: "Method not allowed." }, id: null },
                { status: 405, headers: { Allow: "GET, POST, DELETE", "Content-Type": "application/json" } },
              )
            )
          }
          async handlePostRequest(e, t) {
            try {
              var r, o
              let a,
                s,
                n,
                i,
                l,
                c = e.headers.get("accept")
              if (!c?.includes("application/json") || !c.includes("text/event-stream"))
                return (
                  this.onerror?.(
                    Error("Not Acceptable: Client must accept both application/json and text/event-stream"),
                  ),
                  this.createJsonErrorResponse(
                    406,
                    -32e3,
                    "Not Acceptable: Client must accept both application/json and text/event-stream",
                  )
                )
              if (
                ((r = e.headers.get("content-type")),
                "application/json" !== r &&
                  "application/json" !==
                    (function (e) {
                      if (e)
                        try {
                          return al.parse(e).type
                        } catch {
                          let t = (e.split(";", 1)[0] ?? "").trim().toLowerCase()
                          if ("" === t || e.slice(t.length).includes(",")) return
                          return t
                        }
                    })(r))
              )
                return (
                  this.onerror?.(Error("Unsupported Media Type: Content-Type must be application/json")),
                  this.createJsonErrorResponse(
                    415,
                    -32e3,
                    "Unsupported Media Type: Content-Type must be application/json",
                  )
                )
              if (t?.parsedBody === void 0)
                try {
                  let t = await (async function (e, t = 4194304) {
                    if (Number(e.headers.get("content-length")) > t) return { tooLarge: !0 }
                    if (null === e.body) return { tooLarge: !1, text: "" }
                    let r = e.body.getReader(),
                      o = new TextDecoder(),
                      a = 0,
                      s = ""
                    try {
                      for (;;) {
                        let { done: e, value: n } = await r.read()
                        if (e) break
                        if ((a += n.byteLength) > t) return { tooLarge: !0 }
                        s += o.decode(n, { stream: !0 })
                      }
                    } finally {
                      r.releaseLock()
                    }
                    return { tooLarge: !1, text: s + o.decode() }
                  })(e, this._maxRequestBodySize)
                  if (t.tooLarge) {
                    let e =
                      ((o = this._maxRequestBodySize), `Payload Too Large: Request body must not exceed ${o} bytes`)
                    return (this.onerror?.(Error(e)), this.createJsonErrorResponse(413, -32e3, e))
                  }
                  a = JSON.parse(t.text)
                } catch (e) {
                  return (this.onerror?.(e), this.createJsonErrorResponse(400, -32700, "Parse error: Invalid JSON"))
                }
              else a = t.parsedBody
              if (Array.isArray(a) && a.length > 100)
                return (
                  this.onerror?.(Error("Invalid Request: Batch must not exceed 100 messages")),
                  this.createJsonErrorResponse(400, -32600, "Invalid Request: Batch must not exceed 100 messages")
                )
              try {
                s = Array.isArray(a) ? a.map((e) => eh.parse(e)) : [eh.parse(a)]
              } catch (e) {
                return (
                  this.onerror?.(e),
                  this.createJsonErrorResponse(400, -32700, "Parse error: Invalid JSON-RPC message")
                )
              }
              if (this._closed) return this.createJsonErrorResponse(404, -32001, "Session not found")
              let u = s.some((e) => eE.safeParse(e).success)
              if (u) {
                if (this._initialized && void 0 !== this.sessionId)
                  return (
                    this.onerror?.(Error("Invalid Request: Server already initialized")),
                    this.createJsonErrorResponse(400, -32600, "Invalid Request: Server already initialized")
                  )
                if (s.length > 1)
                  return (
                    this.onerror?.(Error("Invalid Request: Only one initialization request is allowed")),
                    this.createJsonErrorResponse(
                      400,
                      -32600,
                      "Invalid Request: Only one initialization request is allowed",
                    )
                  )
                ;((this.sessionId = this.sessionIdGenerator?.()),
                  (this._initialized = !0),
                  this.sessionId &&
                    this._onsessioninitialized &&
                    (await Promise.resolve(this._onsessioninitialized(this.sessionId))))
              }
              if (!u) {
                let t = this.validateSession(e)
                if (t) return t
                let r = this.validateProtocolVersion(e)
                if (r) return r
              }
              if (this._closed) return this.createJsonErrorResponse(404, -32001, "Session not found")
              try {
                n = await this._checkScopeChallenge(s, t?.authInfo)
              } catch (e) {
                return (this.onerror?.(e), this.createJsonErrorResponse(500, -32603, "Internal server error"))
              }
              if (n) return n
              if (!s.some((e) => oJ(e))) {
                for (let r of s) this.onmessage?.(r, { authInfo: t?.authInfo, request: e })
                return new Response(null, { status: 202 })
              }
              let d = crypto.randomUUID(),
                p = s.find((e) => eE.safeParse(e).success),
                h = p ? p.params.protocolVersion : (e.headers.get("mcp-protocol-version") ?? "2025-03-26")
              if (this._enableJsonResponse)
                return new Promise((r) => {
                  for (let e of (this._streamMapping.set(d, {
                    resolveJson: r,
                    cleanup: () => {
                      this._streamMapping.delete(d)
                    },
                  }),
                  s))
                    oJ(e) && this._requestToStreamMapping.set(e.id, d)
                  for (let r of s) this.onmessage?.(r, { authInfo: t?.authInfo, request: e })
                })
              let m = new TextEncoder(),
                f = new ReadableStream({
                  start: (e) => {
                    i = e
                  },
                  cancel: () => {
                    ;(void 0 !== l && clearInterval(l),
                      this._streamMapping.get(d)?.controller === i && this._streamMapping.delete(d))
                  },
                }),
                g = {
                  "Content-Type": "text/event-stream",
                  "Cache-Control": "no-cache, no-transform",
                  Connection: "keep-alive",
                  "X-Accel-Buffering": "no",
                }
              for (let e of (void 0 !== this.sessionId && (g["mcp-session-id"] = this.sessionId), s))
                oJ(e) &&
                  (this._streamMapping.set(d, {
                    controller: i,
                    encoder: m,
                    cleanup: () => {
                      ;(void 0 !== l && clearInterval(l), this._streamMapping.delete(d))
                      try {
                        i.close()
                      } catch {}
                    },
                  }),
                  this._requestToStreamMapping.set(e.id, d))
              for (let r of (await this.writePrimingEvent(i, m, d, h), s)) {
                let o, a
                ;(oJ(r) &&
                  this._eventStore &&
                  this.supportsEmptySSEData(h) &&
                  ((o = () => {
                    this.closeSSEStream(r.id)
                  }),
                  (a = () => {
                    this.closeStandaloneSSEStream()
                  })),
                  this.onmessage?.(r, {
                    authInfo: t?.authInfo,
                    request: e,
                    closeSSEStream: o,
                    closeStandaloneSSEStream: a,
                  }))
              }
              return (
                this._streamMapping.get(d)?.controller === i && (l = this.startKeepAlive(i, m)),
                new Response(f, { status: 200, headers: g })
              )
            } catch (e) {
              return (this.onerror?.(e), this.createJsonErrorResponse(400, -32700, "Parse error", { data: String(e) }))
            }
          }
          async handleDeleteRequest(e) {
            let t = this.validateSession(e)
            if (t) return t
            let r = this.validateProtocolVersion(e)
            if (r) return r
            try {
              return (
                await Promise.resolve(this._onsessionclosed?.(this.sessionId)),
                new Response(null, { status: 200 })
              )
            } finally {
              await this.close()
            }
          }
          validateSession(e) {
            if (void 0 === this.sessionIdGenerator) return
            if (!this._initialized)
              return (
                this.onerror?.(Error("Bad Request: Server not initialized")),
                this.createJsonErrorResponse(400, -32e3, "Bad Request: Server not initialized")
              )
            let t = e.headers.get("mcp-session-id")
            return t
              ? t !== this.sessionId
                ? (this.onerror?.(Error("Session not found")),
                  this.createJsonErrorResponse(404, -32001, "Session not found"))
                : void 0
              : (this.onerror?.(Error("Bad Request: Mcp-Session-Id header is required")),
                this.createJsonErrorResponse(400, -32e3, "Bad Request: Mcp-Session-Id header is required"))
          }
          validateProtocolVersion(e) {
            let t = e.headers.get("mcp-protocol-version")
            if (null !== t && !this._supportedProtocolVersions.includes(t)) {
              let e = `Bad Request: Unsupported protocol version: ${t} (supported versions: ${this._supportedProtocolVersions.join(", ")})`
              return (this.onerror?.(Error(e)), this.createJsonErrorResponse(400, -32e3, e))
            }
          }
          async close() {
            if (!this._closed) {
              for (let { cleanup: e } of ((this._closed = !0), this._streamMapping.values())) e()
              ;(this._streamMapping.clear(), this._requestResponseMap.clear(), this.onclose?.())
            }
          }
          closeSSEStream(e) {
            let t = this._requestToStreamMapping.get(e)
            if (!t) return
            let r = this._streamMapping.get(t)
            r && r.cleanup()
          }
          closeStandaloneSSEStream() {
            let e = this._streamMapping.get(this._standaloneSseStreamId)
            e && e.cleanup()
          }
          async send(e, t) {
            let r = t?.relatedRequestId
            if (((ed.safeParse(e).success || ep.safeParse(e).success) && (r = e.id), void 0 === r)) {
              let t
              if (ed.safeParse(e).success || ep.safeParse(e).success)
                throw Error(
                  "Cannot send a response on a standalone SSE stream unless resuming a previous client request",
                )
              this._eventStore && (t = await this._eventStore.storeEvent(this._standaloneSseStreamId, e))
              let r = this._streamMapping.get(this._standaloneSseStreamId)
              if (void 0 === r) return
              r.controller &&
                r.encoder &&
                (void 0 === t || !r.replayedEventIds?.has(t)) &&
                this.writeSSEEvent(r.controller, r.encoder, e, t)
              return
            }
            let o = this._requestToStreamMapping.get(r)
            if (!o) throw Error(`No connection established for request ID: ${String(r)}`)
            let a = this._streamMapping.get(o)
            if (!this._enableJsonResponse) {
              let t
              ;(this._eventStore && ((t = await this._eventStore.storeEvent(o, e)), (a = this._streamMapping.get(o))),
                a?.controller &&
                  a?.encoder &&
                  (void 0 === t || !a.replayedEventIds?.has(t)) &&
                  this.writeSSEEvent(a.controller, a.encoder, e, t))
            }
            if (ed.safeParse(e).success || ep.safeParse(e).success) {
              this._requestResponseMap.set(r, e)
              let t = [...this._requestToStreamMapping.entries()].filter(([e, t]) => t === o).map(([e]) => e)
              if (t.every((e) => this._requestResponseMap.has(e))) {
                if (!a) {
                  if (this._enableJsonResponse) throw Error(`No connection established for request ID: ${String(r)}`)
                  if (!this._eventStore) {
                    for (let e of (this.onerror?.(
                      Error(
                        `Response for request ID ${String(r)} is undeliverable: per-request stream is disconnected and no eventStore is configured`,
                      ),
                    ),
                    t))
                      (this._requestResponseMap.delete(e), this._requestToStreamMapping.delete(e))
                    return
                  }
                  for (let e of t) (this._requestResponseMap.delete(e), this._requestToStreamMapping.delete(e))
                  return
                }
                if (this._enableJsonResponse && a.resolveJson) {
                  let e = { "Content-Type": "application/json" }
                  void 0 !== this.sessionId && (e["mcp-session-id"] = this.sessionId)
                  let r = t.map((e) => this._requestResponseMap.get(e))
                  ;(1 === r.length
                    ? a.resolveJson(Response.json(r[0], { status: 200, headers: e }))
                    : a.resolveJson(Response.json(r, { status: 200, headers: e })),
                    a.cleanup())
                } else a.cleanup()
                for (let e of t) (this._requestResponseMap.delete(e), this._requestToStreamMapping.delete(e))
              }
            }
          }
        }
      r(9856)
      var s8 = r(9730),
        s7 = r(76272),
        ne = r(38749),
        nt = class extends Error {
          constructor(e, t) {
            ;(super(e, t), (this.name = "RequestError"))
          }
        },
        nr = global.Request,
        no = class extends nr {
          constructor(e, t) {
            ;("object" == typeof e && ns in e && (e = e[ns]()),
              void 0 !== t?.body?.getReader && (t.duplex ??= "half"),
              super(e, t))
          }
        },
        na = Symbol("wrapBodyStream"),
        ns = Symbol("getRequestCache"),
        nn = Symbol("requestCache"),
        ni = Symbol("incomingKey"),
        nl = Symbol("urlKey"),
        nc = Symbol("headersKey"),
        nu = Symbol("abortControllerKey"),
        nd = Symbol("getAbortController"),
        np = {
          get method() {
            return this[ni].method || "GET"
          },
          get url() {
            return this[nl]
          },
          get headers() {
            return (this[nc] ||= ((e) => {
              let t = [],
                r = e.rawHeaders
              for (let e = 0; e < r.length; e += 2) {
                let { [e]: o, [e + 1]: a } = r
                58 !== o.charCodeAt(0) && t.push([o, a])
              }
              return new Headers(t)
            })(this[ni]))
          },
          [nd]() {
            return (this[ns](), this[nu])
          },
          [ns]() {
            return (
              (this[nu] ||= new AbortController()),
              (this[nn] ||= ((e, t, r, o, a) => {
                let s = { method: e, headers: r, signal: a.signal }
                if ("TRACE" === e) {
                  s.method = "GET"
                  let e = new no(t, s)
                  return (Object.defineProperty(e, "method", { get: () => "TRACE" }), e)
                }
                if ("GET" !== e && "HEAD" !== e)
                  if ("rawBody" in o && o.rawBody instanceof Buffer)
                    s.body = new ReadableStream({
                      start(e) {
                        ;(e.enqueue(o.rawBody), e.close())
                      },
                    })
                  else if (o[na]) {
                    let e
                    s.body = new ReadableStream({
                      async pull(t) {
                        try {
                          e ||= s7.Readable.toWeb(o).getReader()
                          let { done: r, value: a } = await e.read()
                          r ? t.close() : t.enqueue(a)
                        } catch (e) {
                          t.error(e)
                        }
                      },
                    })
                  } else s.body = s7.Readable.toWeb(o)
                return new no(t, s)
              })(this.method, this[nl], this.headers, this[ni], this[nu]))
            )
          },
        }
      ;([
        "body",
        "bodyUsed",
        "cache",
        "credentials",
        "destination",
        "integrity",
        "mode",
        "redirect",
        "referrer",
        "referrerPolicy",
        "signal",
        "keepalive",
      ].forEach((e) => {
        Object.defineProperty(np, e, {
          get() {
            return this[ns]()[e]
          },
        })
      }),
        ["arrayBuffer", "blob", "clone", "formData", "json", "text"].forEach((e) => {
          Object.defineProperty(np, e, {
            value: function () {
              return this[ns]()[e]()
            },
          })
        }),
        Object.defineProperty(np, Symbol.for("nodejs.util.inspect.custom"), {
          value: function (e, t, r) {
            let o = { method: this.method, url: this.url, headers: this.headers, nativeRequest: this[nn] }
            return `Request (lightweight) ${r(o, { ...t, depth: null == e ? null : e - 1 })}`
          },
        }),
        Object.setPrototypeOf(np, no.prototype))
      var nh = Symbol("responseCache"),
        nm = Symbol("getResponseCache"),
        nf = Symbol("cache"),
        ng = global.Response,
        ny = class e {
          #e
          #t;
          [nm]() {
            return (delete this[nf], (this[nh] ||= new ng(this.#e, this.#t)))
          }
          constructor(t, r) {
            let o
            if (((this.#e = t), r instanceof e)) {
              let e = r[nh]
              if (e) {
                ;((this.#t = e), this[nm]())
                return
              }
              ;((this.#t = r.#t), (o = new Headers(r.#t.headers)))
            } else this.#t = r
            ;("string" == typeof t || void 0 !== t?.getReader || t instanceof Blob || t instanceof Uint8Array) &&
              (this[nf] = [r?.status || 200, t, o || r?.headers])
          }
          get headers() {
            let e = this[nf]
            return e
              ? (e[2] instanceof Headers ||
                  (e[2] = new Headers(e[2] || { "content-type": "text/plain; charset=UTF-8" })),
                e[2])
              : this[nm]().headers
          }
          get status() {
            return this[nf]?.[0] ?? this[nm]().status
          }
          get ok() {
            let e = this.status
            return e >= 200 && e < 300
          }
        }
      function nv(e, t, r) {
        let o = (t) => {
          e.cancel(t).catch(() => {})
        }
        return (
          t.on("close", o),
          t.on("error", o),
          (r ?? e.read()).then(n, a),
          e.closed.finally(() => {
            ;(t.off("close", o), t.off("error", o))
          })
        )
        function a(e) {
          e && t.destroy(e)
        }
        function s() {
          e.read().then(n, a)
        }
        function n({ done: r, value: o }) {
          try {
            if (r) t.end()
            else {
              if (t.write(o)) return e.read().then(n, a)
              t.once("drain", s)
            }
          } catch (e) {
            a(e)
          }
        }
      }
      ;(["body", "bodyUsed", "redirected", "statusText", "trailers", "type", "url"].forEach((e) => {
        Object.defineProperty(ny.prototype, e, {
          get() {
            return this[nm]()[e]
          },
        })
      }),
        ["arrayBuffer", "blob", "clone", "formData", "json", "text"].forEach((e) => {
          Object.defineProperty(ny.prototype, e, {
            value: function () {
              return this[nm]()[e]()
            },
          })
        }),
        Object.defineProperty(ny.prototype, Symbol.for("nodejs.util.inspect.custom"), {
          value: function (e, t, r) {
            let o = { status: this.status, headers: this.headers, ok: this.ok, nativeResponse: this[nh] }
            return `Response (lightweight) ${r(o, { ...t, depth: null == e ? null : e - 1 })}`
          },
        }),
        Object.setPrototypeOf(ny, ng),
        Object.setPrototypeOf(ny.prototype, ng.prototype))
      var nS = (e) => {
        let t = {}
        e instanceof Headers || (e = new Headers(e ?? void 0))
        let r = []
        for (let [o, a] of e) "set-cookie" === o ? r.push(a) : (t[o] = a)
        return (r.length > 0 && (t["set-cookie"] = r), (t["content-type"] ??= "text/plain; charset=UTF-8"), t)
      }
      void 0 === global.crypto && (global.crypto = ne)
      var n_ = Symbol("outgoingEnded"),
        nb = Symbol("incomingDraining"),
        nP = (e) => {
          if (e.destroyed || e[nb]) return
          if (((e[nb] = !0), e instanceof s8.Http2ServerRequest)) {
            try {
              e.stream?.close?.(s8.constants.NGHTTP2_NO_ERROR)
            } catch {}
            return
          }
          let t = 0,
            r = () => {
              ;(clearTimeout(a), e.off("data", s), e.off("end", r), e.off("error", r))
            },
            o = () => {
              r()
              let t = e.socket
              t && !t.destroyed && t.destroySoon()
            },
            a = setTimeout(o, 500)
          a.unref?.()
          let s = (e) => {
            ;(t += e.length) > 0x4000000 && o()
          }
          ;(e.on("data", s), e.on("end", r), e.on("error", r), e.resume())
        },
        n$ = (e) =>
          new Response(null, {
            status:
              e instanceof Error && ("TimeoutError" === e.name || "TimeoutError" === e.constructor.name) ? 504 : 500,
          }),
        nw = (e, t) => {
          let r = e instanceof Error ? e : Error("unknown error", { cause: e })
          "ERR_STREAM_PREMATURE_CLOSE" === r.code
            ? console.info("The user aborted a request.")
            : (console.error(e),
              t.headersSent || t.writeHead(500, { "Content-Type": "text/plain" }),
              t.end(`Error: ${r.message}`),
              t.destroy(r))
        },
        nR = (e) => {
          "flushHeaders" in e && e.writable && e.flushHeaders()
        },
        nj = async (e, t) => {
          let [r, o, a] = e[nf],
            s = !1
          if (a) {
            if (a instanceof Headers) ((s = a.has("content-length")), (a = nS(a)))
            else if (Array.isArray(a)) {
              let e = new Headers(a)
              ;((s = e.has("content-length")), (a = nS(e)))
            } else
              for (let e in a)
                if (14 === e.length && "content-length" === e.toLowerCase()) {
                  s = !0
                  break
                }
          } else a = { "content-type": "text/plain; charset=UTF-8" }
          ;(!s &&
            ("string" == typeof o
              ? (a["Content-Length"] = Buffer.byteLength(o))
              : o instanceof Uint8Array
                ? (a["Content-Length"] = o.byteLength)
                : o instanceof Blob && (a["Content-Length"] = o.size)),
            t.writeHead(r, a),
            "string" == typeof o || o instanceof Uint8Array
              ? t.end(o)
              : o instanceof Blob
                ? t.end(new Uint8Array(await o.arrayBuffer()))
                : (nR(t),
                  await (function (e, t) {
                    if (e.locked) throw TypeError("ReadableStream is locked.")
                    if (!t.destroyed) return nv(e.getReader(), t)
                  })(o, t)?.catch((e) => nw(e, t))),
            t[n_]?.())
        },
        nk = (e, t = {}) => {
          let r = t.autoCleanupIncoming ?? !0
          return (
            !1 !== t.overrideGlobalObjects &&
              global.Request !== no &&
              (Object.defineProperty(global, "Request", { value: no }),
              Object.defineProperty(global, "Response", { value: ny })),
            async (o, a) => {
              let s, n
              try {
                n = ((e, t) => {
                  let r,
                    o = Object.create(np)
                  o[ni] = e
                  let a = e.url || ""
                  if ("/" !== a[0] && (a.startsWith("http://") || a.startsWith("https://"))) {
                    if (e instanceof s8.Http2ServerRequest)
                      throw new nt("Absolute URL for :path is not allowed in HTTP/2")
                    try {
                      let e = new URL(a)
                      o[nl] = e.href
                    } catch (e) {
                      throw new nt("Invalid absolute URL", { cause: e })
                    }
                    return o
                  }
                  let s = (e instanceof s8.Http2ServerRequest ? e.authority : e.headers.host) || t
                  if (!s) throw new nt("Missing host header")
                  if (e instanceof s8.Http2ServerRequest) {
                    if ("http" !== (r = e.scheme) && "https" !== r) throw new nt("Unsupported scheme")
                  } else r = e.socket && e.socket.encrypted ? "https" : "http"
                  let n = new URL(`${r}://${s}${a}`)
                  if (n.hostname.length !== s.length && n.hostname !== s.replace(/:\d+$/, ""))
                    throw new nt("Invalid host header")
                  return ((o[nl] = n.href), o)
                })(o, t.hostname)
                let i = !r || "GET" === o.method || "HEAD" === o.method
                if (
                  (i ||
                    ((o[na] = !0),
                    o.on("end", () => {
                      i = !0
                    }),
                    o instanceof s8.Http2ServerRequest &&
                      (a[n_] = () => {
                        i ||
                          setTimeout(() => {
                            i ||
                              setTimeout(() => {
                                nP(o)
                              })
                          })
                      }),
                    a.on("finish", () => {
                      i || nP(o)
                    })),
                  a.on("close", () => {
                    ;(n[nu] &&
                      (o.errored
                        ? n[nu].abort(o.errored.toString())
                        : a.writableFinished || n[nu].abort("Client connection prematurely closed.")),
                      i ||
                        setTimeout(() => {
                          i ||
                            setTimeout(() => {
                              nP(o)
                            })
                        }))
                  }),
                  (s = e(n, { incoming: o, outgoing: a })),
                  nf in s)
                )
                  return nj(s, a)
              } catch (e) {
                if (s) return nw(e, a)
                if (t.errorHandler) {
                  if (!(s = await t.errorHandler(n || e instanceof nt ? e : new nt(e.message, { cause: e })))) return
                } else s = n ? n$(e) : new Response(null, { status: 400 })
              }
              try {
                return await (async (e, t, r = {}) => {
                  if ("function" == typeof e.then)
                    if (r.errorHandler)
                      try {
                        e = await e
                      } catch (o) {
                        let t = await r.errorHandler(o)
                        if (!t) return
                        e = t
                      }
                    else e = await e.catch(n$)
                  if (nf in e) return nj(e, t)
                  let o = nS(e.headers)
                  if (e.body) {
                    let r,
                      a = e.body.getReader(),
                      s = [],
                      n = !1
                    if ("chunked" !== o["transfer-encoding"]) {
                      let e = 2
                      for (let t = 0; t < e; t++) {
                        r ||= a.read()
                        let o = await (async function (e) {
                          return Promise.race([e, Promise.resolve().then(() => Promise.resolve(void 0))])
                        })(r).catch((e) => {
                          ;(console.error(e), (n = !0))
                        })
                        if (!o) {
                          if (1 === t) {
                            ;(await new Promise((e) => setTimeout(e)), (e = 3))
                            continue
                          }
                          break
                        }
                        if (((r = void 0), o.value && s.push(o.value), o.done)) {
                          n = !0
                          break
                        }
                      }
                      !n || "content-length" in o || (o["content-length"] = s.reduce((e, t) => e + t.length, 0))
                    }
                    ;(t.writeHead(e.status, o),
                      s.forEach((e) => {
                        t.write(e)
                      }),
                      n ? t.end() : (0 === s.length && nR(t), await nv(a, t, r)))
                  } else o["x-hono-already-sent"] || (t.writeHead(e.status, o), t.end())
                  t[n_]?.()
                })(s, a, t)
              } catch (e) {
                return nw(e, a)
              }
            }
          )
        },
        nE = class {
          _webStandardTransport
          _requestListener
          _requestContext = new WeakMap()
          constructor(e = {}) {
            ;((this._webStandardTransport = new s6(e)),
              (this._requestListener = nk(
                async (e) => {
                  let t = this._requestContext.get(e)
                  return this._webStandardTransport.handleRequest(e, {
                    authInfo: t?.authInfo,
                    parsedBody: t?.parsedBody,
                  })
                },
                { overrideGlobalObjects: !1 },
              )))
          }
          get sessionId() {
            return this._webStandardTransport.sessionId
          }
          set onclose(e) {
            this._webStandardTransport.onclose = e
          }
          get onclose() {
            return this._webStandardTransport.onclose
          }
          set onerror(e) {
            this._webStandardTransport.onerror = e
          }
          get onerror() {
            return this._webStandardTransport.onerror
          }
          set onmessage(e) {
            this._webStandardTransport.onmessage = e
          }
          get onmessage() {
            return this._webStandardTransport.onmessage
          }
          async start() {
            return this._webStandardTransport.start()
          }
          async close() {
            return this._webStandardTransport.close()
          }
          async send(e, t) {
            return this._webStandardTransport.send(e, t)
          }
          setSupportedProtocolVersions(e) {
            this._webStandardTransport.setSupportedProtocolVersions(e)
          }
          setScopeChallengeResolver(e) {
            this._webStandardTransport.setScopeChallengeResolver(e)
          }
          async handleRequest(e, t, r) {
            let o = e.auth
            await nk(async (e) => this._webStandardTransport.handleRequest(e, { authInfo: o, parsedBody: r }), {
              overrideGlobalObjects: !1,
            })(e, t)
          }
          closeSSEStream(e) {
            this._webStandardTransport.closeSSEStream(e)
          }
          closeStandaloneSSEStream() {
            this._webStandardTransport.closeStandaloneSSEStream()
          }
        },
        nI = r(85921)
      let nC = tP.extend({
          inputSchema: M.vkY(
            (e) => (null == e || "object" != typeof e || "type" in e ? e : { ...e, type: "object" }),
            tP.shape.inputSchema,
          ),
          namespace: M.YjP(),
        }),
        nx = M.Ikc({ tools: M.YOg(nC) }),
        nq = M.Ikc({ thread_id: M.YjP().optional(), turn_id: M.YjP().optional() }),
        nT = M.Ikc({
          contentItems: M.YOg(
            M.gMt("type", [
              M.Ikc({ text: M.YjP(), type: M.euz("inputText") }),
              M.Ikc({ imageUrl: M.YjP(), type: M.euz("inputImage") }),
              M.Ikc({ audioUrl: M.YjP(), type: M.euz("inputAudio") }),
            ]),
          ),
          success: M.zMY(),
        })
      function nY(e) {
        if ("inputText" === e.type) return { text: e.text, type: "text" }
        let t = "inputImage" === e.type ? e.imageUrl : e.audioUrl,
          r = /^data:([^;,]+);base64,(.*)$/s.exec(t)
        return null == r
          ? { text: t, type: "text" }
          : { data: r[2], mimeType: r[1], type: "inputImage" === e.type ? "image" : "audio" }
      }
      function nO(e, t) {
        for (let r of t) {
          let t = e[r]
          if ("string" == typeof t && t.trim()) return t
        }
        return null
      }
      function nM(e, t) {
        let r = e[t]
        return "object" == typeof r && null != r && "id" in r && "string" == typeof r.id && r.id.trim() ? r.id : null
      }
      ;(r(89477), r(42524))
      var nN = r(7045),
        nz = r(62228)
      r(11594)
      var nA = r(34441)
      r(74454)
      r(25356)
      nA.j
      var nL = r(92500)
      M.rej({
        targets: M.YOg(
          M.rej({
            threadId: M.YjP().min(1),
            hostId: M.YjP().min(1).optional(),
            afterCursor: M.YjP().min(1).optional(),
          }),
        )
          .min(1)
          .max(8),
        timeoutMs: M.aig().int().min(0).max(12e4).optional(),
      })
      let nH = ["none", "minimal", "low", "medium", "high", "xhigh", "max", "ultra"]
      ;([...nH], [...nH])
      let nD = M.rej({
        threadId: M.YjP()
          .trim()
          .min(1)
          .describe("Explicit thread or conversation ID from list_threads or list_archived_threads."),
        source: M.k5n(["codex", "chatgpt"]).optional().describe("Backing kind from the listing. Defaults to codex."),
        hostId: M.YjP().min(1).optional().describe("Host of a Codex thread, when known. Omit for ChatGPT."),
      })
      M.Pq9().parse(rJ.bl(nD, { io: "input" }))
      var nV = r(55822),
        nU = r(4482)
      ;(r(68464), (0, nV.createRequire)(__filename))
      let nK = "local",
        nJ = M.Ikc({
          environmentId: M.YjP().min(1),
          cwd: M.YjP().min(1).nullable(),
          includeModelDefaults: M.zMY().optional(),
          projectId: M.YjP().trim().min(1).optional(),
        }),
        nF = M.Ikc({ environmentId: M.YjP().min(1), projectId: M.YjP().trim().min(1), threadId: M.YjP().min(1) }),
        nG = M.Ikc({ environmentId: M.YjP().min(1) })
      ;(r(93796), M.Ikc({ turnId: M.YjP().min(1), nextItemIndex: M.aig().int().nonnegative().optional() }))
      let nB = M.Ikc({
          environmentId: M.YjP().min(1),
          threadId: M.YjP().min(1),
          cursor: M.YjP().nullable().optional(),
          limit: M.aig().int().min(1).max(50),
        }),
        nZ = new Set(v.qDu),
        nW = M.Ikc({
          arguments: M.Pq9(),
          callerSource: M.k5n(["codex", "chatgpt"]),
          callId: M.YjP().trim().min(1),
          namespace: M.k5n(v.qDu),
          threadId: M.YjP().trim().min(1),
          tool: M.YjP().trim().min(1),
          turnId: M.YjP().trim().min(1),
        })
      M.gMt("method", [
        M.Ikc({
          id: M.KCZ([M.aig(), M.YjP()]),
          jsonrpc: M.euz("2.0"),
          method: M.euz("taskThread/read"),
          params: nB.extend({ nonce: M.YjP().regex(/^[0-9a-f]{64}$/) }),
        }),
        M.Ikc({
          id: M.KCZ([M.aig(), M.YjP()]),
          jsonrpc: M.euz("2.0"),
          method: M.euz("taskProject/list"),
          params: nG.extend({ nonce: M.YjP().regex(/^[0-9a-f]{64}$/) }),
        }),
        M.Ikc({
          id: M.KCZ([M.aig(), M.YjP()]),
          jsonrpc: M.euz("2.0"),
          method: M.euz("taskProject/assign"),
          params: nF.extend({ nonce: M.YjP().regex(/^[0-9a-f]{64}$/) }),
        }),
        M.Ikc({
          id: M.KCZ([M.aig(), M.YjP()]),
          jsonrpc: M.euz("2.0"),
          method: M.euz(nL.i1G),
          params: M.Ikc({
            executorId: M.YjP().min(1),
            sessionId: M.YjP().min(1),
            turnId: M.YjP().min(1),
            nonce: M.YjP().regex(/^[0-9a-f]{64}$/),
            prepareIab: M.euz(!0).optional(),
          }),
        }),
        M.Ikc({
          id: M.KCZ([M.aig(), M.YjP()]),
          jsonrpc: M.euz("2.0"),
          method: M.euz("taskWorkspace/prepare"),
          params: nJ.extend({ nonce: M.YjP().regex(/^[0-9a-f]{64}$/) }).catchall(M.Pq9()),
        }),
        M.Ikc({
          id: M.KCZ([M.aig(), M.YjP()]),
          jsonrpc: M.euz("2.0"),
          method: M.euz("tools/list"),
          params: M.Ikc({ threadStartKind: M.k5n(["default", "all"]) }).optional(),
        }),
        M.Ikc({
          id: M.KCZ([M.aig(), M.YjP()]),
          jsonrpc: M.euz("2.0"),
          method: M.euz("tools/call"),
          params: nW.extend({ hostId: M.k5n([nK, v.iwv]).default(nK) }),
        }),
        M.Ikc({ id: M.KCZ([M.aig(), M.YjP()]), jsonrpc: M.euz("2.0"), method: M.euz("tools/cancel") }),
      ])
      var nX = r(37119),
        nQ = r(18176)
      ;(r(47981), r(99787), r(32892), r(98197), (0, y.promisify)(h.execFile), r(49555), r(34338), r(92272))
      var n0 = r(91747),
        n1 = r(33025)
      M.Ikc({
        data: M.Ikc({
          reason: M.k5n(["cloudRequirements", "cloudConfigBundle"]),
          errorCode: M.k5n(["Timeout", "RequestFailed"]),
          statusCode: M.aig().int().optional(),
        }),
      })
      let n2 = new Set([
          "INIT_CWD",
          "npm_command",
          "npm_execpath",
          "npm_node_execpath",
          "PNPM_PACKAGE_NAME",
          "PNPM_SCRIPT_SRC_DIR",
        ]),
        n9 = ["npm_config_", "npm_lifecycle_", "npm_package_"]
      function n5(e) {
        for (let t of Object.keys(e)) {
          let r = t.toLowerCase()
          ;(n2.has(t) || n9.some((e) => r.startsWith(e))) && delete e[t]
        }
      }
      let n3 = process.env.CODEX_ELECTRON_USER_DATA_PATH?.trim() ? process.env.CODEX_HOME : void 0,
        n4 = null,
        n6 = null,
        n8 = null,
        n7 = new Set()
      function ie(e, t, r) {
        let o = process.env.PATH ?? null
        return { caller: t, durationMs: Date.now() - e, pathEntryCount: it(o), resultSource: "load", timeoutMs: r }
      }
      function it(e) {
        return null == e || "" === e ? 0 : e.split(f.delimiter).length
      }
      let ir = '"${CODEX_HOME:-$HOME/.codex}/app-server-control/app-server.log"',
        io = '"${CODEX_HOME:-$HOME/.codex}/app-server-control/forwarded-ssh-agent.sock"',
        ia = [
          'if [ -S "${SSH_AUTH_SOCK:-}" ]; then ln -sfn -- "$SSH_AUTH_SOCK" ',
          io,
          "; elif [ ! -S ",
          io,
          " ]; then rm -f -- ",
          io,
          "; fi",
        ].join(""),
        is = new Map()
      function ii(e) {
        let t = ["-v", "-o", "BatchMode=yes"]
        return (
          null != e && t.push("-o", `ConnectTimeout=${e}`),
          t.push("-o", "ServerAliveInterval=15", "-o", "ServerAliveCountMax=12"),
          t
        )
      }
      function il(e) {
        return (0, y.stripVTControlCharacters)(e)
          .split(/\r?\n/u)
          .map((e) => e.trim())
          .filter((e) => "" !== e && !/^debug\d+:/u.test(e))
          .join("\n")
          .trim()
      }
      function ic(e, t) {
        let r = t.alias?.trim() || t.host
        if (
          /^ssh: Could not resolve hostname /imu.test(e) ||
          /^ssh: connect to host \S+ port \d+: (?:network is unreachable|network is down|no route to host)$/imu.test(
            e,
          ) ||
          /^Error: connect to gateway \S+: dial tcp\b[^\n]*: (?:no such host|network is unreachable|network is down|no route to host|i\/o timeout)$/imu.test(
            e,
          )
        )
          return (0, nX.F$)().formatMessage({
            messageId: "native.ssh.hostUnreachable",
            defaultMessage: "Couldn’t reach {host}. Check your network connection and try again.",
            values: { host: r },
          })
        let o =
          /failed to do websocket handshake with the server [^\n]*\nCaused by:\nInvalid status code: ([45]\d{2})\b/iu.exec(
            e,
          )?.[1]
        if (null == o) return null
        let a = (0, nX.F$)()
        return "401" === o || "403" === o
          ? a.formatMessage({
              messageId: "native.ssh.handshakeAccess",
              defaultMessage:
                "Couldn’t connect to {host}. The gateway rejected the WebSocket handshake (HTTP {status}). Check your SSH access to this host, then try again.",
              values: { host: r, status: o },
            })
          : a.formatMessage({
              messageId: "native.ssh.handshakeFailed",
              defaultMessage:
                "Couldn’t connect to {host}. The WebSocket handshake failed (HTTP {status}). Try again later.",
              values: { host: r, status: o },
            })
      }
      function iu(e) {
        if (e.alias?.trim()) return [e.alias.trim()]
        let t = []
        return (
          e.identity?.trim() && t.push("-i", e.identity.trim()),
          null != e.port && t.push("-p", String(e.port)),
          t.push(e.host),
          t
        )
      }
      class id {
        options
        kind = "websocket"
        logger = (0, S.$Cz)("AppServerTransportSshWebsocket")
        proxyStreams = new Set()
        hasConnected = !1
        disposed = !1
        installedCodexVersion
        desktopSocketDirectory
        desktopSession = null
        constructor(e) {
          this.options = e
        }
        supportsReconnect() {
          return !0
        }
        onAppServerInitializationFailed() {
          this.hasConnected = !1
        }
        get desktopMcpServerConfig() {
          return this.desktopSession?.forwardVerified ? this.desktopSession.endpoint.mcpServerConfig : null
        }
        dispose() {
          for (let e of ((this.disposed = !0), this.revokeDesktopSession(), this.proxyStreams)) e.destroy()
          this.proxyStreams.clear()
        }
        async connect() {
          if (this.disposed) throw Error("SSH transport is disposed")
          await this.options.prepareConnect?.()
          let e = this.startShellEnvLoadForSsh()
          ;(e.promise
            .then((e) => {
              this.logShellEnvLoadForSsh({ result: e, sshAttempted: !0, sshPhase: "connect" })
            })
            .catch((t) => {
              this.logger.warning("ssh_websocket_v0.shell_env_load_unexpected_error", {
                safe: { ...iy(e.getState()), sshAttempted: !0, sshPhase: "connect" },
                sensitive: {
                  error: t,
                  path: process.env.PATH ?? null,
                  sshAlias: this.options.sshConnection.alias,
                  sshHost: this.options.sshConnection.host,
                  sshPort: this.options.sshConnection.port,
                },
              })
            }),
            await this.waitForShellEnvIfProxyCommandNeedsPath(e, "connect"))
          let t = { phase: "connect", shellEnv: e.getState() }
          if (this.hasConnected)
            try {
              return await this.connectWithDesktopMcpFallback(t)
            } catch (e) {
              if (ip(e)) throw e
              this.logger.warning("ssh_websocket_v0.existing_app_server_reconnect_failed", {
                safe: { ...iy(t.shellEnv), sshPhase: t.phase },
                sensitive: {
                  error: e,
                  sshAlias: this.options.sshConnection.alias,
                  sshHost: this.options.sshConnection.host,
                  sshPort: this.options.sshConnection.port,
                },
              })
            }
          return (
            (this.installedCodexVersion = void 0),
            await this.ensureRemoteAppServer(t),
            this.connectWithDesktopMcpFallback(t)
          )
        }
        async connectWithDesktopMcpFallback(e) {
          let t = null != this.desktopSession,
            r = await this.getOrCreateDesktopSession()
          if (null != r)
            try {
              let t = await this.connectToRemoteAppServer(e, r.endpoint)
              return ((r.forwardVerified = !0), t)
            } catch (o) {
              if (ip(o)) throw o
              if (null != this.desktopSocketDirectory && t)
                return ((r.forwardVerified = !1), this.connectToRemoteAppServer(e, null))
              if (
                (this.revokeDesktopSession(r),
                (null != this.desktopSocketDirectory || r.forwardVerified) &&
                  !this.disposed &&
                  o instanceof S.WpG &&
                  "forward-refused" === o.failureReason)
              )
                return ((this.desktopSocketDirectory = void 0), this.connectWithDesktopMcpFallback(e))
              this.logger.warning("ssh_websocket_v0.desktop_mcp_unavailable", { safe: {}, sensitive: { error: o } })
            }
          return this.connectToRemoteAppServer(e, null)
        }
        async getOrCreateDesktopSession() {
          if (null != this.desktopSession) return this.desktopSession
          if (null == this.options.desktopAppTools) return null
          try {
            let e = await (async function ({ hostId: e, handlers: t, socketDirectory: r }) {
              let o = await (function ({ hostId: e, callTool: t, listTools: r }) {
                  return (async function (e) {
                    let t = (0, m.randomBytes)(32).toString("base64url"),
                      r = Buffer.from(`Bearer ${t}`),
                      o = new AbortController(),
                      a = new Map(),
                      s = $().createServer((t, s) => {
                        ;(async function (t, s) {
                          let n,
                            i = Buffer.from(t.headers.authorization ?? "")
                          if (o.signal.aborted || i.length !== r.length || !(0, m.timingSafeEqual)(i, r))
                            return void s.writeHead(401).end()
                          if (
                            "/mcp" !== t.url ||
                            null != t.headers.origin ||
                            !/^127\.0\.0\.1:\d+$/.test(t.headers.host ?? "")
                          )
                            return void s.writeHead(403).end()
                          let l = t.headers["mcp-session-id"],
                            c = "string" == typeof l ? a.get(l)?.transport : void 0
                          if (null != l && null == c) return void s.writeHead(404).end()
                          if ("POST" === t.method) {
                            let e = [],
                              r = 0
                            for await (let o of t) {
                              if (!Buffer.isBuffer(o)) throw Error("Invalid HTTP body chunk")
                              if ((r += o.length) > 8388608) return void s.writeHead(413).end()
                              e.push(o)
                            }
                            try {
                              n = JSON.parse(Buffer.concat(e).toString("utf8"))
                            } catch {
                              s.writeHead(400).end()
                              return
                            }
                          }
                          if (o.signal.aborted) return void s.writeHead(401).end()
                          if (null == c) {
                            if ("POST" !== t.method || a.size >= 256) return void s.writeHead(503).end()
                            let r = (0, m.randomUUID)(),
                              i = (function ({
                                request: e,
                                interactionClientId: t,
                                callerHostId: r,
                                instructions: o = nI.l2,
                              }) {
                                let a = new Map(),
                                  s = new s4(
                                    { name: "codex-app-tools", title: "ChatGPT App Tools", version: "0.1.0" },
                                    { capabilities: { tools: {} }, instructions: o },
                                  )
                                return (
                                  s.setRequestHandler("tools/list", async () => ({
                                    tools: (await n()).map(({ namespace: e, ...t }) => t),
                                  })),
                                  s.setRequestHandler("tools/call", async (o, s) => {
                                    0 === a.size && (await n())
                                    let i = a.get(o.params.name)
                                    if (null == i)
                                      throw new oS(ov.InvalidParams, `Unknown Codex app tool: ${o.params.name}`)
                                    let l = o.params._meta ?? {},
                                      c = (function (e) {
                                        let t = e
                                        if ("string" == typeof e)
                                          try {
                                            t = JSON.parse(e)
                                          } catch {
                                            return null
                                          }
                                        let r = nq.safeParse(t)
                                        return r.success ? r.data : null
                                      })(l["x-codex-turn-metadata"]),
                                      u =
                                        t ??
                                        nO(l, [
                                          "openai/threadId",
                                          "openai/thread_id",
                                          "codexThreadId",
                                          "codex_thread_id",
                                          "threadId",
                                          "thread_id",
                                        ]) ??
                                        c?.thread_id ??
                                        nM(l, "thread")
                                    if (null == u)
                                      throw new oS(
                                        ov.InvalidParams,
                                        "Codex app tools require thread metadata from the executor.",
                                      )
                                    let d = String(s.mcpReq.id),
                                      p = nT.parse(
                                        await e(
                                          "tools/call",
                                          {
                                            arguments: o.params.arguments ?? {},
                                            callerSource: null == t ? "codex" : "chatgpt",
                                            callId:
                                              nO(l, [
                                                "openai/toolCallId",
                                                "openai/tool_call_id",
                                                "codexCallId",
                                                "codex_call_id",
                                                "callId",
                                                "call_id",
                                              ]) ??
                                              nM(l, "call") ??
                                              `mcp-call-${(0, m.randomUUID)()}`,
                                            hostId: null == t ? r : void 0,
                                            namespace: i,
                                            threadId: u,
                                            tool: o.params.name,
                                            turnId:
                                              nO(l, [
                                                "openai/turnId",
                                                "openai/turn_id",
                                                "codexTurnId",
                                                "codex_turn_id",
                                                "turnId",
                                                "turn_id",
                                              ]) ??
                                              c?.turn_id ??
                                              nM(l, "turn") ??
                                              `mcp-turn-${d}`,
                                          },
                                          s.mcpReq.signal,
                                        ),
                                      )
                                    return { content: p.contentItems.map(nY), isError: !p.success }
                                  }),
                                  s
                                )
                                async function n() {
                                  let { tools: r } = nx.parse(
                                    await e("tools/list", { threadStartKind: null == t ? "all" : "default" }),
                                  )
                                  for (let e of r) a.set(e.name, e.namespace)
                                  return r
                                }
                              })({
                                request: (t, r, a) => {
                                  let s = AbortSignal.any([o.signal, ...(null == a ? [] : [a])])
                                  return (s.throwIfAborted(), e.request(t, r, s))
                                },
                              })
                            ;((c = new nE({ sessionIdGenerator: () => r, enableJsonResponse: !0 })),
                              a.set(r, { server: i, transport: c }),
                              (i.onclose = () => {
                                a.delete(r)
                              }))
                            try {
                              ;(await i.connect(c), await c.handleRequest(t, s, n))
                            } finally {
                              null == c.sessionId && (await i.close())
                            }
                            return
                          }
                          await c.handleRequest(t, s, n)
                        })(t, s).catch(() => {
                          ;(s.headersSent || s.writeHead(500), s.end())
                        })
                      })
                    ;((s.headersTimeout = 1e4),
                      (s.requestTimeout = 3e4),
                      await new Promise((e, t) => {
                        ;(s.once("error", t), s.listen(0, "127.0.0.1", e))
                      }))
                    let n = s.address()
                    if (null == n || "string" == typeof n)
                      throw (s.close(), Error("Desktop MCP did not bind a loopback port"))
                    return {
                      port: n.port,
                      bearerToken: t,
                      async dispose() {
                        ;(o.abort(),
                          await Promise.allSettled([...a.values()].map((e) => e.server.close())),
                          a.clear(),
                          s.closeAllConnections(),
                          await new Promise((e) => s.close(() => e())))
                      },
                    }
                  })({
                    request: async (o, a, s) => {
                      if ("tools/list" === o)
                        return {
                          tools: (await r("all")).flatMap((e) =>
                            "namespace" === e.type && nZ.has(e.name)
                              ? e.tools.map((t) => ({
                                  annotations:
                                    "codex_app" === e.name &&
                                    ("send_message_to_thread" === t.name || "delete_thread" === t.name)
                                      ? { destructiveHint: !0 }
                                      : void 0,
                                  description: t.description,
                                  inputSchema: t.inputSchema,
                                  name: t.name,
                                  namespace: e.name,
                                }))
                              : [],
                          ),
                        }
                      if (null == s) throw Error("Desktop MCP call requires a cancellation signal")
                      let { callerSource: n, ...i } = nW.parse(a)
                      return t({ callerSource: n, hostId: e, params: i }, s)
                    },
                  })
                })({ ...t, hostId: e }),
                a = o.port,
                s = null == r ? null : (0, m.randomUUID)(),
                n = a.toString(16).toUpperCase().padStart(4, "0"),
                i = `listeners=$(awk '$4 == "0A" && $2 ~ /:${n}$/ {print $2}' /proc/net/tcp /proc/net/tcp6) || exit 1
[ "$listeners" = '0100007F:${n}' ] || exit 1`
              return {
                mcpServerConfig: {
                  enabled: !0,
                  enabled_tools: [],
                  omit_tools_from: ["deferred"],
                  default_tools_approval_mode: "prompt",
                  startup_timeout_sec: 10,
                  tool_timeout_sec: 3600,
                  url: null == s ? `http://127.0.0.1:${a}/mcp` : `codex-desktop://${s}`,
                  http_headers: { Authorization: `Bearer ${o.bearerToken}` },
                },
                createForward() {
                  let e = `127.0.0.1:${a}`,
                    t = i
                  if (null != r && null != s) {
                    e = f.posix.join(r, `forward-${(0, m.randomUUID)()}.sock`)
                    let o = f.posix.join(r, `desktop-${s}.sock`)
                    t = `[ -S ${(0, _.hD)(e)} ] && mv -fT -- ${(0, _.hD)(e)} ${(0, _.hD)(o)} || exit 1`
                  }
                  return {
                    remoteForwardCheck: t,
                    sshArgs: [
                      "-o",
                      "ControlMaster=no",
                      "-o",
                      "ControlPath=none",
                      "-o",
                      "ExitOnForwardFailure=yes",
                      "-R",
                      `${e}:127.0.0.1:${a}`,
                    ],
                  }
                },
                dispose: () => o.dispose(),
              }
            })({ ...this.options.desktopAppTools, socketDirectory: this.desktopSocketDirectory })
            if (this.disposed) throw (await e.dispose(), Error("SSH transport is disposed"))
            return ((this.desktopSession = { endpoint: e, forwardVerified: !1 }), this.desktopSession)
          } catch (e) {
            return (
              this.logger.warning("ssh_websocket_v0.desktop_mcp_setup_failed", { safe: {}, sensitive: { error: e } }),
              null
            )
          }
        }
        async connectToRemoteAppServer(e, t) {
          return this.runWithSshStartupGate(async () => {
            if (this.disposed) throw Error("SSH transport is disposed")
            let r = { current: null },
              o = (0, S._ZH)(),
              a = new b.Ay("ws://codex-app-server/rpc", {
                perMessageDeflate: !1,
                headers: o,
                createConnection: () => ((r.current = this.createSshProxyStream(e, t)), r.current),
              }),
              s = { current: null },
              n = (e) => {
                s.current = s.current ?? e
              }
            a.on("error", n)
            let i = 0x1000000
            a.once("upgrade", (e) => {
              let t = Number(e.headers["x-codex-websocket-max-unfragmented-message-bytes"])
              Number.isSafeInteger(t) && t > 0 && (i = t)
            })
            let l = new S.sgi(a, null != o)
            a.once("close", () => {
              r.current?.destroy()
            })
            try {
              var c
              if (
                (await ((c = a).readyState === b.Ay.OPEN
                  ? Promise.resolve()
                  : new Promise((e, t) => {
                      let r = null,
                        o = () => {
                          ;(null != r && clearTimeout(r), c.off("open", a), c.off("error", s), c.off("close", n))
                        },
                        a = () => {
                          ;(o(), e())
                        },
                        s = (e) => {
                          ;(o(), t(e))
                        },
                        n = () => {
                          ;(o(), t(Error("SSH websocket closed before opening")))
                        }
                      ;(c.once("open", a),
                        c.once("error", s),
                        c.once("close", n),
                        (r = setTimeout(() => {
                          ;(o(), t(Error("SSH websocket open timed out")))
                        }, 3e4)).unref())
                    })),
                null != s.current)
              )
                throw s.current
            } catch (e) {
              throw (r.current?.destroy(), a.terminate(), e)
            }
            let u = new S.s4r(a, void 0, i, l)
            return (
              a.off("error", n),
              this.logger.info("app_server_connection.compression_negotiated", {
                safe: {
                  connectionId: (0, S.K7g)(u),
                  transport: "ssh_websocket",
                  compression: l.compression,
                  compressionOffered: null != o,
                },
                sensitive: {
                  sshAlias: this.options.sshConnection.alias,
                  sshHost: this.options.sshConnection.host,
                  sshPort: this.options.sshConnection.port,
                },
              }),
              (0, S.C2W)(a, {
                onPongTimeout: () => {
                  ;((u.terminationReason = "pong_timeout"), a.terminate())
                },
              }),
              (this.hasConnected = !0),
              u
            )
          })
        }
        revokeDesktopSession(e = this.desktopSession) {
          null != e && this.desktopSession === e && ((this.desktopSession = null), e.endpoint.dispose())
        }
        startShellEnvLoadForSsh() {
          let e = {
            caller: "ssh_connect",
            pathEntryCount: iv(process.env.PATH ?? null),
            resultSource: "pending",
            status: "loading",
          }
          return {
            getState: () => e,
            promise: (
              this.options.loadShell ??
              async function ({ caller: e = "startup", retryFailed: t = !0, timeoutMs: r = 5e3 } = {}) {
                var o, a, s
                if (n8?.status === "loaded" || (null != n8 && !t)) {
                  return ((o = n8), (a = e), { ...o, caller: a, resultSource: "cache" })
                }
                if (null != n4 && null != n6 && n6 >= r) return n4.then((t) => ({ ...t, caller: e }))
                let n = (async function (e, t) {
                  let r = Date.now()
                  nU.app.isPackaged || (n5(process.env), n7.forEach((e) => e()))
                  let o = new AbortController(),
                    a = null,
                    s = await Promise.race([
                      (0, n1.MN)({ interactive: !0, extraEnv: { [n1.$z]: "1" }, signal: o.signal })
                        .then((e) => ({ status: "loaded", userEnv: e }))
                        .catch((e) => ({ status: "failed", error: e })),
                      new Promise((e) => {
                        ;(a = setTimeout(() => {
                          ;(o.abort(), e({ status: "timed_out" }))
                        }, t)).unref()
                      }),
                    ]).finally(() => {
                      null != a && clearTimeout(a)
                    })
                  if ("loaded" === s.status)
                    return (
                      Object.assign(process.env, s.userEnv),
                      null != n3 && (process.env.CODEX_HOME = n3),
                      nU.app.isPackaged || n5(process.env),
                      n7.forEach((e) => e()),
                      { status: "loaded", path: process.env.PATH ?? null, ...ie(r, e, t) }
                    )
                  let n =
                    "timed_out" === s.status
                      ? `Timed out after ${t}ms.`
                      : s.error instanceof Error
                        ? s.error.message
                        : String(s.error)
                  return (
                    (0, n0.tZ)().warning("Failed to load shell env", {
                      safe: {
                        caller: e,
                        durationMs: Date.now() - r,
                        pathEntryCount: it(process.env.PATH ?? null),
                        resultSource: "load",
                        status: s.status,
                        timeoutMs: t,
                      },
                      sensitive: { detail: n, path: process.env.PATH ?? null },
                    }),
                    { status: s.status, detail: n, path: process.env.PATH ?? null, ...ie(r, e, t) }
                  )
                })(e, r)
                ;((n4 = n), (n6 = r))
                try {
                  let e = await n
                  return ((s = e), (n8?.status !== "loaded" || "loaded" === s.status) && (n8 = s), e)
                } finally {
                  n4 === n && ((n4 = null), (n6 = null))
                }
              }
            )({ caller: "ssh_connect", timeoutMs: 1e4 }).then((t) => {
              var r
              return (
                (e = {
                  caller: (r = t).caller,
                  durationMs: r.durationMs,
                  pathEntryCount: r.pathEntryCount,
                  resultSource: r.resultSource,
                  status: r.status,
                  timeoutMs: r.timeoutMs,
                }),
                t
              )
            }),
          }
        }
        async waitForShellEnvIfProxyCommandNeedsPath(e, t) {
          if ((await Promise.resolve(), "loading" !== e.getState().status)) return
          let r = await this.getSshProxyCommandShellEnvDependency()
          if (
            (this.logger.info("ssh_websocket_v0.shell_env_wait_decision", {
              safe: {
                needsShellEnv: r.needsShellEnv,
                pathEntryCount: r.pathEntryCount,
                reason: r.reason,
                sshPhase: t,
                timeoutMs: 5e3,
              },
              sensitive: {
                commandName: r.commandName,
                path: process.env.PATH ?? null,
                proxyCommand: r.proxyCommand,
                sshAlias: this.options.sshConnection.alias,
                sshHost: this.options.sshConnection.host,
                sshPort: this.options.sshConnection.port,
              },
            }),
            !r.needsShellEnv)
          )
            return
          let o = Date.now()
          try {
            let a = await e.promise
            this.logger.info("ssh_websocket_v0.shell_env_wait_completed", {
              safe: {
                durationMs: Date.now() - o,
                pathEntryCount: a.pathEntryCount,
                reason: r.reason,
                resultSource: a.resultSource,
                sshPhase: t,
                status: a.status,
                timeoutMs: a.timeoutMs,
              },
              sensitive: {
                detail: "loaded" === a.status ? null : a.detail,
                path: a.path,
                proxyCommand: r.proxyCommand,
                sshAlias: this.options.sshConnection.alias,
                sshHost: this.options.sshConnection.host,
                sshPort: this.options.sshConnection.port,
              },
            })
          } catch (e) {
            this.logger.warning("ssh_websocket_v0.shell_env_wait_unexpected_error", {
              safe: { durationMs: Date.now() - o, reason: r.reason, sshPhase: t },
              sensitive: {
                error: e,
                proxyCommand: r.proxyCommand,
                sshAlias: this.options.sshConnection.alias,
                sshHost: this.options.sshConnection.host,
                sshPort: this.options.sshConnection.port,
              },
            })
          }
        }
        async getSshProxyCommandShellEnvDependency() {
          let e = Date.now()
          try {
            let t = (0, S.sZG)({ args: ["ssh", "-G", ...iu(this.options.sshConnection)], spawnInsideWsl: !1 }),
              r = await i_({ process: t, timeoutMs: 5e3, timeoutMessage: "SSH: local ssh config probe timed out" })
            if (0 !== r.code)
              return (
                this.logger.warning("ssh_websocket_v0.ssh_config_probe_failed", {
                  safe: { code: r.code, durationMs: Date.now() - e, timeoutMs: 5e3 },
                  sensitive: {
                    sshAlias: this.options.sshConnection.alias,
                    sshHost: this.options.sshConnection.host,
                    sshPort: this.options.sshConnection.port,
                    stderr: r.stderr,
                    stdout: r.stdout,
                  },
                }),
                iS()
              )
            return (function (e, t) {
              var r, o, a, s
              let n = (function (e) {
                  let t = null
                  for (let r of e.split(/\r?\n/u)) {
                    let e = /^proxycommand\s+(?<command>.*)$/iu.exec(r.trim())
                    e?.groups?.command != null && (t = e.groups.command.trim())
                  }
                  return t
                })(e),
                i = iv(t)
              if (null == n)
                return {
                  commandName: null,
                  needsShellEnv: !1,
                  pathEntryCount: i,
                  proxyCommand: null,
                  reason: "no_proxy_command",
                }
              if ("none" === n.toLowerCase())
                return {
                  commandName: null,
                  needsShellEnv: !1,
                  pathEntryCount: i,
                  proxyCommand: n,
                  reason: "proxy_command_none",
                }
              let l =
                ((r = n),
                (function e(t, r) {
                  let o = (function (e) {
                    if (
                      (function (e) {
                        let t = null,
                          r = !1
                        for (let o = 0; o < e.length; o += 1) {
                          let a = e[o]
                          if (r) {
                            r = !1
                            continue
                          }
                          if ("\\" === a && "'" !== t) {
                            r = !0
                            continue
                          }
                          if (null != t) {
                            a === t && (t = null)
                            continue
                          }
                          if ("'" === a || '"' === a) {
                            t = a
                            continue
                          }
                          if (/[;&|<>]/u.test(a)) return !0
                        }
                        return !1
                      })(e)
                    )
                      return null
                    try {
                      return (0, _.lD)(e)
                    } catch {
                      return null
                    }
                  })(t)
                  if (null == o) return null
                  for (let t = 0; t < o.length; t += 1) {
                    var a
                    let s = o[t]
                    if (
                      ((a = s), !/^[A-Za-z_][A-Za-z0-9_]*=/u.test(a) && "exec" !== s && "command" !== s) &&
                      "env" !== s
                    ) {
                      if (
                        r < 2 &&
                        (function (e) {
                          let t = e.replace(/\\/gu, "/").toLowerCase(),
                            r = t.slice(t.lastIndexOf("/") + 1)
                          return "sh" === r || "bash" === r || "zsh" === r || "dash" === r || "ksh" === r
                        })(s)
                      ) {
                        let a = (function (e, t) {
                          for (let r = t; r < e.length; r += 1) {
                            let t = e[r]
                            if ("-c" === t || /^-[^-]*c/u.test(t)) return e[r + 1] ?? null
                            if (!t.startsWith("-") || "--" === t) break
                          }
                          return null
                        })(o, t + 1)
                        if (null != a) return e(a, r + 1)
                      }
                      return s
                    }
                  }
                  return null
                })(r, 0))
              return null == l
                ? {
                    commandName: null,
                    needsShellEnv: !1,
                    pathEntryCount: i,
                    proxyCommand: n,
                    reason: "proxy_command_unparsed",
                  }
                : (o = l).includes("/") || o.includes("\\") || /^[A-Za-z]:/u.test(o)
                  ? {
                      commandName: l,
                      needsShellEnv: !1,
                      pathEntryCount: i,
                      proxyCommand: n,
                      reason: "proxy_command_has_path",
                    }
                  : ((a = l),
                      (s = t),
                      null != s &&
                        "" !== s &&
                        null != S.K56.resolve(a, { env: { PATH: s, PATHEXT: process.env.PATHEXT } }))
                    ? {
                        commandName: l,
                        needsShellEnv: !1,
                        pathEntryCount: i,
                        proxyCommand: n,
                        reason: "proxy_command_resolved_in_path",
                      }
                    : {
                        commandName: l,
                        needsShellEnv: !0,
                        pathEntryCount: i,
                        proxyCommand: n,
                        reason: "proxy_command_unresolved_in_path",
                      }
            })(r.stdout, process.env.PATH ?? null)
          } catch (t) {
            return (
              this.logger.warning("ssh_websocket_v0.ssh_config_probe_failed", {
                safe: { durationMs: Date.now() - e, timeoutMs: 5e3 },
                sensitive: {
                  error: t,
                  sshAlias: this.options.sshConnection.alias,
                  sshHost: this.options.sshConnection.host,
                  sshPort: this.options.sshConnection.port,
                },
              }),
              iS()
            )
          }
        }
        logShellEnvLoadForSsh({ result: e, sshAttempted: t, sshPhase: r }) {
          this.logger.info("ssh_websocket_v0.shell_env_load_completed", {
            safe: {
              caller: e.caller,
              durationMs: e.durationMs,
              pathEntryCount: e.pathEntryCount,
              resultSource: e.resultSource,
              sshAttempted: t,
              sshPhase: r,
              status: e.status,
              timeoutMs: e.timeoutMs,
            },
            sensitive: {
              detail: "loaded" === e.status ? null : e.detail,
              path: e.path,
              sshAlias: this.options.sshConnection.alias,
              sshHost: this.options.sshConnection.host,
              sshPort: this.options.sshConnection.port,
            },
          })
        }
        async ensureRemoteAppServer(e) {
          ;(this.logger.info("ssh_websocket_v0.ensure_remote_app_server", {
            safe: { ...iy(e.shellEnv), sshAttempted: !0, sshPhase: e.phase },
            sensitive: {
              sshAlias: this.options.sshConnection.alias,
              sshHost: this.options.sshConnection.host,
              sshPort: this.options.sshConnection.port,
            },
          }),
            await this.startRemoteAppServer(e))
        }
        async startRemoteAppServer(e) {
          let t,
            r,
            o = (0, nQ.e2)()
          try {
            t = await this.runRemoteLoginShellCommand({
              command: ["if command -v ", (0, _.hD)(o), " >/dev/null 2>&1; then exit 0; fi; exit ", String(86)].join(
                "",
              ),
              context: e,
              operation: "codex_path_probe",
              timeoutMessage: "SSH: codex path probe timed out",
            })
          } catch (e) {
            throw this.createSshSetupError("remote_codex_lookup", e)
          }
          if (86 === t.code)
            throw new S.WpG({
              failureReason: "remote-codex-not-found",
              message: "No `codex` found in PATH. Please install the Codex CLI on the remote machine.",
              stage: "remote_codex_lookup",
            })
          if (0 !== t.code)
            throw this.createSshSetupError(
              "remote_codex_lookup",
              Error(await this.getSshCommandFailureMessage(t)),
              ih(t.code, t.stderr),
            )
          let a = await this.getInstalledCodexVersion(e)
          if (null != a && !(0, v.dlm)(a)) throw Error(v.qck + a)
          let s = [
            'uid=$(id -u) || exit 1; printf "%s\\n" "$uid"; ',
            'if [ "${CODEX_SSH_SKIP_APP_SERVER_BOOT:-}" = "true" ]; then exit 0; fi; ',
            "(umask 077; mkdir -p -- ",
            '"${CODEX_HOME:-$HOME/.codex}/app-server-control"',
            ' && (pkill -9 -U "$uid" -f ',
            (0, _.hD)(`${o}.*[d]esktop-ssh-websocket-v0.sock`),
            " || true) && ",
            ia,
            " && : >",
            ir,
            ") && { SSH_AUTH_SOCK=",
            io,
            " nohup ",
            (0, _.hD)(o),
            " -c features.code_mode_host=true",
            " app-server --listen ",
            (0, _.hD)("unix://"),
            ` </dev/null >${ir} 2>&1 & }`,
          ].join("")
          try {
            r = await this.runRemoteLoginShellCommand({
              command: s,
              context: e,
              operation: "app_server_bootstrap",
              timeoutMessage: "SSH: app-server bootstrap timed out",
            })
          } catch (e) {
            throw this.createSshSetupError("remote_app_server_start", e)
          }
          let { code: n, stdout: i, stderr: l } = r,
            c = i.trim()
          if (
            ((this.desktopSocketDirectory =
              (0, v.JFB)(a, "desktopMcpSocket") && /^\d+$/u.test(c) ? `/tmp/codex-daemon-${c}` : void 0),
            0 !== n)
          ) {
            this.logger.warning("ssh_websocket_v0.remote_app_server_bootstrap_failed", {
              safe: { code: n },
              sensitive: {
                sshAlias: this.options.sshConnection.alias,
                sshHost: this.options.sshConnection.host,
                sshPort: this.options.sshConnection.port,
                identity: this.options.sshConnection.identity,
                remoteLogPath: ir,
                stdout: i,
                stderr: l,
              },
            })
            let e = await this.getSshCommandFailureMessage(r)
            throw this.createSshSetupError("remote_app_server_start", Error(e), ih(n, l))
          }
        }
        createSshSetupError(e, t, r) {
          if (t instanceof S.WpG) return t
          let o = t instanceof Error ? t.message : `SSH-backed app-server setup failed: ${String(t)}`
          return new S.WpG({ failureReason: r, message: o, stage: e })
        }
        async getSshCommandFailureMessage(e) {
          let t = il([e.stderr, e.stdout].join("\n"))
          return t
            ? (ic(t, this.options.sshConnection) ?? t)
            : null == e.code
              ? "Remote SSH failed without an exit code or stderr"
              : `Remote SSH failed with exit code ${e.code} and did not return stderr`
        }
        async getInstalledCodexVersion(e) {
          if (void 0 !== this.installedCodexVersion) return this.installedCodexVersion
          let {
            code: t,
            stdout: r,
            stderr: o,
          } = await this.runRemoteLoginShellCommand({
            command: `${(0, _.hD)((0, nQ.e2)())} --version`,
            context: e,
            operation: "codex_version_probe",
            timeoutMessage: "SSH: codex --version check timed out",
          })
          return 0 !== t
            ? (this.logger.warning("ssh_websocket_v0.remote_codex_version_probe_failed", {
                safe: { code: t },
                sensitive: {
                  sshAlias: this.options.sshConnection.alias,
                  sshHost: this.options.sshConnection.host,
                  sshPort: this.options.sshConnection.port,
                  stdout: r,
                  stderr: o,
                },
              }),
              (this.installedCodexVersion = null),
              null)
            : ((this.installedCodexVersion = (0, v.jZe)(r || o)), this.installedCodexVersion)
        }
        async killCodexProcess() {
          let {
            code: e,
            stdout: t,
            stderr: r,
          } = await this.runRemoteLoginShellCommand({
            command: `pkill -9 -U "$(id -u)" -f ${(0, _.hD)(`${(0, nQ.e2)()}.* app-server.* --listen`)}`,
            operation: "remote_codex_kill",
            timeoutMessage: "SSH: codex pkill timed out",
          })
          if (0 === e || 1 === e)
            return void this.logger.info("ssh_websocket_v0.remote_codex_kill_completed", {
              safe: { matchedProcess: 0 === e },
              sensitive: {
                sshAlias: this.options.sshConnection.alias,
                sshHost: this.options.sshConnection.host,
                sshPort: this.options.sshConnection.port,
                stdout: t,
                stderr: r,
              },
            })
          throw Error(r || t || `pkill failed with exit code ${e}`)
        }
        async runRemoteLoginShellCommand({
          command: e,
          context: t,
          operation: r,
          timeoutMessage: o,
          timeoutMs: a = 6e4,
        }) {
          return this.runWithSshStartupGate(async () =>
            this.runRemoteLoginShellCommandWithoutGate({
              command: e,
              context: t,
              operation: r,
              timeoutMessage: o,
              timeoutMs: a,
            }),
          )
        }
        async runRemoteLoginShellCommandWithoutGate({
          command: e,
          context: t,
          operation: r,
          timeoutMessage: o,
          timeoutMs: a = 6e4,
        }) {
          var s, n
          let i,
            l = Date.now(),
            c = (0, m.randomBytes)(8),
            u = this.options.getConnectTimeoutSeconds?.(),
            d = Math.max(6e4, (u ?? 0) * 1e3, a),
            p = (0, S.sZG)({
              args: ["ssh", ...ii(u), ...iu(this.options.sshConnection), (0, nQ.x2)(e, c)],
              spawnInsideWsl: !1,
            }),
            h = await i_({ process: p, timeoutMs: d, timeoutMessage: o }),
            f =
              ((s = p.getStdout()),
              (n = c),
              -1 === (i = s.indexOf(n)) ? s.toString("utf8") : s.subarray(i + n.length).toString("utf8"))
          return (
            this.logger.info("ssh_websocket_v0.remote_login_shell_command_completed", {
              safe: {
                code: h.code,
                durationMs: Date.now() - l,
                operation: r,
                shellEnvCaller: t?.shellEnv.caller ?? "unknown",
                shellEnvPathEntryCount: t?.shellEnv.pathEntryCount ?? iv(process.env.PATH ?? null),
                shellEnvResultSource: t?.shellEnv.resultSource ?? "unknown",
                shellEnvStatus: t?.shellEnv.status ?? "unknown",
                sshCommandKind: "remote_login_shell",
                sshPhase: t?.phase ?? "standalone",
                timeoutMs: d,
              },
              sensitive: {
                sshAlias: this.options.sshConnection.alias,
                sshHost: this.options.sshConnection.host,
                sshPort: this.options.sshConnection.port,
                stdout: f,
                stderr: h.stderr,
              },
            }),
            { ...h, stdout: f }
          )
        }
        createSshProxyStream(e, t) {
          let r = (0, nQ.e2)(),
            o = `${ia} && exec ${(0, _.hD)(r)} app-server proxy`,
            a = t?.createForward(),
            s =
              null == a
                ? o
                : `${a.remoteForwardCheck}
${o}`,
            n = (0, m.randomBytes)(8)
          this.logger.info("ssh_websocket_v0.proxy_command_starting", {
            safe: {
              operation: "app_server_proxy",
              ...iy(e.shellEnv),
              sshCommandKind: "app_server_proxy",
              sshPhase: e.phase,
            },
            sensitive: {
              sshAlias: this.options.sshConnection.alias,
              sshHost: this.options.sshConnection.host,
              sshPort: this.options.sshConnection.port,
            },
          })
          let i = (0, h.spawn)(
              S.K56.resolve("ssh") ?? "ssh",
              [
                "-T",
                ...ii(this.options.getConnectTimeoutSeconds?.()),
                ...(a?.sshArgs ?? []),
                ...iu(this.options.sshConnection),
                (0, nQ.x2)(s, n),
              ],
              { env: (0, S.IHi)(process.env), stdio: ["pipe", "pipe", "pipe"], windowsHide: !0 },
            ),
            { stdin: l, stdout: c, stderr: u } = i
          if (null == l || null == c || null == u) throw (i.kill(), Error("ssh proxy stdio was unavailable"))
          let d = "",
            p = "",
            f = { authenticationDenied: !1, agentRefused: !1, certificateNetworkFailed: !1, forwardRefused: !1 }
          u.on("data", (e) => {
            let t = e.toString("utf8")
            d = `${d}${t}`.slice(-4e3)
            let r = t.split("\n")
            for (let [e, t] of r.entries())
              (null != p && (p += t).length > 8192 && (p = null), e < r.length - 1 && (null != p && im(p, f), (p = "")))
          })
          let y = new g.Duplex({
            read() {
              c.resume()
            },
            write(e, t, r) {
              l.write(e, t, r)
            },
            final(e) {
              ;(l.end(), e())
            },
            destroy(e, t) {
              ;(i.kill(), t(e))
            },
          })
          Object.assign(y, { setKeepAlive: () => y, setNoDelay: () => y, setTimeout: () => y })
          let v = (e) => {
            y.destroy(e)
          }
          ;(l.on("error", v),
            this.proxyStreams.add(y),
            y.once("close", () => {
              this.proxyStreams.delete(y)
            }))
          let b = !1,
            P = Buffer.alloc(0)
          return (
            c.on("data", (e) => {
              let t = e
              if (!b) {
                let r = Buffer.concat([P, e]),
                  o = r.indexOf(n)
                if (-1 === o) {
                  P = r.subarray(Math.max(0, r.length - (n.length - 1)))
                  return
                }
                ;((b = !0), (t = r.subarray(o + n.length)), (P = Buffer.alloc(0)))
              }
              0 !== t.length && (y.push(t) || c.pause())
            }),
            c.on("end", () => {
              b && y.push(null)
            }),
            i.on("error", (e) => {
              y.destroy(e)
            }),
            i.on("close", (t, r) => {
              if ((l.removeListener("error", v), 0 === t)) return void y.push(null)
              let o = il(d)
              ;(this.logger.warning("ssh_websocket_v0.proxy_command_failed", {
                safe: {
                  code: t,
                  operation: "app_server_proxy",
                  ...iy(e.shellEnv),
                  signal: r,
                  sshCommandKind: "app_server_proxy",
                  sshPhase: e.phase,
                },
                sensitive: {
                  sshAlias: this.options.sshConnection.alias,
                  sshHost: this.options.sshConnection.host,
                  sshPort: this.options.sshConnection.port,
                  stderr: d,
                },
              }),
                y.destroy(
                  new S.WpG({
                    failureReason: b ? void 0 : ih(t, p ?? "", f),
                    message:
                      ic(o, this.options.sshConnection) ??
                      `ssh app-server proxy exited with code ${t}, signal ${r}: ${o}`,
                    stage: "local_tunnel_start",
                  }),
                ))
            }),
            queueMicrotask(() => {
              y.emit("connect")
            }),
            y
          )
        }
        async runWithSshStartupGate(e) {
          var t
          let r,
            o =
              ((t = this.options.sshConnection),
              (r = t.alias?.trim())
                ? `alias:${r}`
                : ["direct", t.host, String(t.port ?? ""), t.identity?.trim() ?? ""].join("\n")),
            a = is.get(o),
            s = () => {},
            n = new Promise((e) => {
              s = e
            }),
            i = (a ?? Promise.resolve()).catch(() => void 0).then(() => n)
          ;(is.set(o, i), await a?.catch(() => void 0))
          try {
            if (this.disposed) throw Error("SSH transport is disposed")
            return await e()
          } finally {
            ;(s(), is.get(o) === i && is.delete(o))
          }
        }
      }
      function ip(e) {
        return (
          e instanceof S.WpG &&
          ("authentication-failed" === e.failureReason || "certificate-network-failed" === e.failureReason)
        )
      }
      function ih(
        e,
        t,
        r = { authenticationDenied: !1, agentRefused: !1, certificateNetworkFailed: !1, forwardRefused: !1 },
      ) {
        if ((im(t, r), 255 === e))
          return r.forwardRefused
            ? "forward-refused"
            : r.certificateNetworkFailed && !r.agentRefused
              ? "certificate-network-failed"
              : r.authenticationDenied
                ? "authentication-failed"
                : void 0
      }
      function im(e, t) {
        ;((t.forwardRefused =
          t.forwardRefused ||
          /^(?:Error: )?remote port forwarding failed for listen (?:port \d+|path [^\r\n]+)\r?$/mu.test(e)),
          (t.authenticationDenied =
            t.authenticationDenied || /^(?:[^\r\n]+: )?Permission denied \([^)\r\n]+\)\.[ \t]*\r?$/mu.test(e)),
          (t.agentRefused = t.agentRefused || /^sign_and_send_pubkey: [^\r\n]+agent refused operation\r?$/mu.test(e)),
          (t.certificateNetworkFailed =
            t.certificateNetworkFailed ||
            e.split(/\r?\n/u).some((e) => {
              let t =
                /^Error: issue SSH certificate for [^\r\n]+: call oaicert: Post "[^"\r\n]+": (?<cause>[^\r\n]+)\r?$/u.exec(
                  e,
                )?.groups?.cause
              return (
                null != t &&
                /^(?:(?:dial|read|write) (?:tcp|udp)\b.*: (?:no such host|network is unreachable|no route to host|i\/o timeout|connection reset by peer|connection refused)|context deadline exceeded(?: \(Client\.Timeout exceeded while awaiting headers\))?|net\/http: TLS handshake timeout)$/u.test(
                  t,
                )
              )
            })))
      }
      function ig(e) {
        let t
        if ("1" === process.env.CODEX_APP_SERVER_FORCE_CLI || "ssh" !== e.kind) return null
        let r = ((t = e[S.nhW]), t?.sshHost ? t : null)
        return r
          ? { sshConnection: { alias: r.sshAlias, host: r.sshHost, port: r.sshPort, identity: r.identity } }
          : null
      }
      function iy(e) {
        return {
          shellEnvCaller: e.caller,
          shellEnvPathEntryCount: e.pathEntryCount,
          shellEnvResultSource: e.resultSource,
          shellEnvStatus: e.status,
        }
      }
      function iv(e) {
        return null == e || "" === e ? 0 : e.split(f.delimiter).length
      }
      function iS() {
        return {
          commandName: null,
          needsShellEnv: !1,
          pathEntryCount: iv(process.env.PATH ?? null),
          proxyCommand: null,
          reason: "ssh_config_probe_failed",
        }
      }
      async function i_({ process: e, timeoutMs: t, timeoutMessage: r }) {
        let o = null
        try {
          return await Promise.race([
            e.wait(),
            new Promise((a, s) => {
              o = setTimeout(() => {
                ;(e.kill(), s(Error(`${r} after ${t}ms`)))
              }, t)
            }),
          ])
        } finally {
          null != o && clearTimeout(o)
        }
      }
    },
    37119(e, t, r) {
      var o = r(42524),
        a = r(86697),
        s = r(4482),
        n = r(85816),
        i = r(40893)
      let l = i.g1P(i.YjP(), i.YjP()),
        c = null,
        u = 0,
        d = new Set()
      class p {
        messages
        constructor(e) {
          this.messages = e
        }
        static async load(e, t = s.app.getLocale(), r) {
          let i = t.trim().replace(/_/g, "-"),
            [c, u] = i.toLowerCase().split("-"),
            d = null == u ? c : `${c}-${u.toUpperCase()}`,
            h = c ? new Intl.Locale(c).maximize().region : void 0,
            m =
              r ??
              (s.app.isPackaged
                ? (0, a.join)(s.app.getAppPath(), "native-menu-locales")
                : (0, a.join)(e, "webview", "src", "locales")),
            f = Array.from(new Set([i, d, n.oeH[c], null == h ? void 0 : `${c}-${h}`, c]))
              .filter((e) => null != e)
              .map((e) => (0, a.join)(m, `${e}.json`))
          return new p(
            (
              await Promise.all(
                f.map(async (e) => {
                  try {
                    return l.parse(JSON.parse(await (0, o.readFile)(e, "utf-8")))
                  } catch (e) {
                    if (e instanceof Error && "code" in e && "ENOENT" === e.code) return null
                    throw e
                  }
                }),
              )
            ).find((e) => null != e) ?? null,
          )
        }
        static createDefault() {
          return new p(null)
        }
        replaceMessagesFrom(e) {
          this.messages = e.messages
        }
        formatMessage({ messageId: e, defaultMessage: t, values: r }) {
          return (this.messages?.[e] ?? t).replace(/\{(\w+)\}/g, (e, t) => r?.[t] ?? e)
        }
      }
      r.d(
        t,
        {},
        {
          F$: function () {
            if (null == c) throw Error("NativeIntl has not been configured.")
            return c.nativeIntl
          },
          configureNativeIntl: async function (e, t, r) {
            let o = ++u,
              a = t
            try {
              if (((a = a ?? s.app.getLocale()), c?.repoRoot === e && c.locale === a)) return
              let t = await p.load(e, a, r)
              if (o !== u) return
              let n = c?.nativeIntl
              ;(n?.replaceMessagesFrom(t), (c = { repoRoot: e, locale: a, nativeIntl: n ?? t }))
            } catch {
              if (o !== u) return
              let e = p.createDefault(),
                t = c?.nativeIntl
              ;(t?.replaceMessagesFrom(e), (c = { repoRoot: null, locale: a ?? "en", nativeIntl: t ?? e }))
            }
            for (let e of d) e()
          },
        },
      )
    },
    18176(e, t, r) {
      function o(e) {
        return `'${e.replace(/'/g, "'\\''")}'`
      }
      r.d(
        t,
        {},
        {
          e2: function () {
            let e
            return (
              (null ==
                (e = (function () {
                  let e = process.env.CODEX_CLI_PATH
                  if (null == e) return null
                  let t = e.trim()
                  return 0 === t.length ? null : t
                })()) ||
              /[\\/]/.test(e) ||
              /^[a-zA-Z]:/.test(e)
                ? null
                : e) ?? "codex"
            )
          },
          x2: function (e, t) {
            let r = `PATH="$\{CODEX_INSTALL_DIR:-$HOME/.local/bin}:$PATH"; export PATH; ${e}`,
              a =
                null == t
                  ? r
                  : `printf '%b' ${o(Array.from(t, (e) => `\\${e.toString(8).padStart(3, "0")}`).join(""))}; ${r}`,
              s = 'exec /bin/sh -c "$CODEX_REMOTE_PAYLOAD"',
              n = [
                "set loginsh=1",
                "if ( -r /etc/csh.login ) source /etc/csh.login",
                "if ( -r ~/.login ) source ~/.login",
                s,
              ].join("; "),
              i = `CODEX_HOME="$\{CODEX_HOME:-$HOME/.codex}"; export CODEX_HOME; ${s}`,
              l = `if [ -z "$SHELL" ] || [ ! -x "$SHELL" ]; then echo "Codex remote SSH requires SHELL to point to an executable login shell" >&2; exit 127; fi; CODEX_REMOTE_PAYLOAD="$1"; export CODEX_REMOTE_PAYLOAD; case "$\{SHELL##*/}" in csh|tcsh) exec "$SHELL" -i -c ${o(n)} ;; nu) exec "$SHELL" -l -i -c ${o("exec /bin/sh -c $env.CODEX_REMOTE_PAYLOAD")} ;; fish|xonsh) exec "$SHELL" -l -i -c ${o(s)} ;; *) exec "$SHELL" -l -i -c ${o(i)} ;; esac`
            return `sh -c ${o(l)} sh ${o(a)}`
          },
        },
      )
    },
  }))
//# sourceMappingURL=app-server-host-352-2639f4a0ed7c166e.js.map
