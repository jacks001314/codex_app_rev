import { i as e, n as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as n,
  BIt as r,
  CPt as i,
  EPt as a,
  HMt as o,
  KMt as s,
  LLt as c,
  RLt as l,
  SPt as u,
  TLt as d,
  UMt as f,
  XMt as p,
  _It as m,
  cLt as h,
  cNt as ee,
  fIt as g,
  fLt as _,
  gNt as v,
  hNt as y,
  oft as b,
  pIt as x,
  pLt as S,
  rst as C,
  uIt as w,
  uNt as te,
  uzt as ne,
  xLt as T,
} from "./app-shared-bbfeca5e5737.js";
function E() {
  return (E = t(() => {
    v();
  }))();
}
var D, O, k, A, j, M, N, P, F, I, L, R, z, B;
function V() {
  return (V = t(() => {
    (v(),
      E(),
      r(),
      ((t) =>
        typeof e < `u`
          ? e
          : typeof Proxy < `u`
            ? new Proxy(t, { get: (t, n) => (typeof e < `u` ? e : t)[n] })
            : t)(function (t) {
        if (typeof e < `u`) return e.apply(this, arguments);
        throw Error(`Dynamic require of "` + t + `" is not supported`);
      }),
      (D = c([n(`light`), n(`dark`)]).describe(`Color theme preference for the host environment.`)),
      (O = c([n(`inline`), n(`fullscreen`), n(`pip`)]).describe(`Display mode for UI presentation.`)),
      (k = c([
        n(`--color-background-primary`),
        n(`--color-background-secondary`),
        n(`--color-background-tertiary`),
        n(`--color-background-inverse`),
        n(`--color-background-ghost`),
        n(`--color-background-info`),
        n(`--color-background-danger`),
        n(`--color-background-success`),
        n(`--color-background-warning`),
        n(`--color-background-disabled`),
        n(`--color-text-primary`),
        n(`--color-text-secondary`),
        n(`--color-text-tertiary`),
        n(`--color-text-inverse`),
        n(`--color-text-ghost`),
        n(`--color-text-info`),
        n(`--color-text-danger`),
        n(`--color-text-success`),
        n(`--color-text-warning`),
        n(`--color-text-disabled`),
        n(`--color-border-primary`),
        n(`--color-border-secondary`),
        n(`--color-border-tertiary`),
        n(`--color-border-inverse`),
        n(`--color-border-ghost`),
        n(`--color-border-info`),
        n(`--color-border-danger`),
        n(`--color-border-success`),
        n(`--color-border-warning`),
        n(`--color-border-disabled`),
        n(`--color-ring-primary`),
        n(`--color-ring-secondary`),
        n(`--color-ring-inverse`),
        n(`--color-ring-info`),
        n(`--color-ring-danger`),
        n(`--color-ring-success`),
        n(`--color-ring-warning`),
        n(`--font-sans`),
        n(`--font-mono`),
        n(`--font-weight-normal`),
        n(`--font-weight-medium`),
        n(`--font-weight-semibold`),
        n(`--font-weight-bold`),
        n(`--font-text-xs-size`),
        n(`--font-text-sm-size`),
        n(`--font-text-md-size`),
        n(`--font-text-lg-size`),
        n(`--font-heading-xs-size`),
        n(`--font-heading-sm-size`),
        n(`--font-heading-md-size`),
        n(`--font-heading-lg-size`),
        n(`--font-heading-xl-size`),
        n(`--font-heading-2xl-size`),
        n(`--font-heading-3xl-size`),
        n(`--font-text-xs-line-height`),
        n(`--font-text-sm-line-height`),
        n(`--font-text-md-line-height`),
        n(`--font-text-lg-line-height`),
        n(`--font-heading-xs-line-height`),
        n(`--font-heading-sm-line-height`),
        n(`--font-heading-md-line-height`),
        n(`--font-heading-lg-line-height`),
        n(`--font-heading-xl-line-height`),
        n(`--font-heading-2xl-line-height`),
        n(`--font-heading-3xl-line-height`),
        n(`--border-radius-xs`),
        n(`--border-radius-sm`),
        n(`--border-radius-md`),
        n(`--border-radius-lg`),
        n(`--border-radius-xl`),
        n(`--border-radius-full`),
        n(`--border-width-regular`),
        n(`--shadow-hairline`),
        n(`--shadow-sm`),
        n(`--shadow-md`),
        n(`--shadow-lg`),
      ]).describe(`CSS variable keys available to MCP apps for theming.`)),
      (A = T(
        k.describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`),
        c([d(), w()]).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`),
      ).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`)),
      S({ method: n(`ui/open-link`), params: S({ url: d().describe(`URL to open in the host's browser`) }) }),
      S({
        isError: m()
          .optional()
          .describe(`True if the host failed to open the URL (e.g., due to security policy).`),
      }).passthrough(),
      S({
        isError: m()
          .optional()
          .describe(`True if the download failed (e.g., user cancelled or host denied).`),
      }).passthrough(),
      S({
        isError: m().optional().describe(`True if the host rejected or failed to deliver the message.`),
      }).passthrough(),
      S({ method: n(`ui/notifications/sandbox-proxy-ready`), params: S({}) }),
      (j = S({
        connectDomains: x(d()).optional().describe(`Origins for network requests (fetch/XHR/WebSocket).

- Maps to CSP \`connect-src\` directive
- Empty or omitted → no network connections (secure default)`),
        resourceDomains: x(d())
          .optional()
          .describe(
            "Origins for static resources (images, scripts, stylesheets, fonts, media).\n\n- Maps to CSP `img-src`, `script-src`, `style-src`, `font-src`, `media-src` directives\n- Wildcard subdomains supported: `https://*.example.com`\n- Empty or omitted → no network resources (secure default)",
          ),
        frameDomains: x(d())
          .optional()
          .describe(
            "Origins for nested iframes.\n\n- Maps to CSP `frame-src` directive\n- Empty or omitted → no nested iframes allowed (`frame-src 'none'`)",
          ),
        baseUriDomains: x(d())
          .optional()
          .describe(
            "Allowed base URIs for the document.\n\n- Maps to CSP `base-uri` directive\n- Empty or omitted → only same origin allowed (`base-uri 'self'`)",
          ),
      })),
      (M = S({
        camera: S({}).optional().describe(`Request camera access.

Maps to Permission Policy \`camera\` feature.`),
        microphone: S({}).optional().describe(`Request microphone access.

Maps to Permission Policy \`microphone\` feature.`),
        geolocation: S({}).optional().describe(`Request geolocation access.

Maps to Permission Policy \`geolocation\` feature.`),
        clipboardWrite: S({}).optional().describe(`Request clipboard write access.

Maps to Permission Policy \`clipboard-write\` feature.`),
      })),
      S({
        method: n(`ui/notifications/size-changed`),
        params: S({
          width: _().optional().describe(`New width in pixels.`),
          height: _().optional().describe(`New height in pixels.`),
        }),
      }),
      S({
        method: n(`ui/notifications/tool-input`),
        params: S({
          arguments: T(d(), l().describe(`Complete tool call arguments as key-value pairs.`))
            .optional()
            .describe(`Complete tool call arguments as key-value pairs.`),
        }),
      }),
      S({
        method: n(`ui/notifications/tool-input-partial`),
        params: S({
          arguments: T(d(), l().describe(`Partial tool call arguments (incomplete, may change).`))
            .optional()
            .describe(`Partial tool call arguments (incomplete, may change).`),
        }),
      }),
      S({
        method: n(`ui/notifications/tool-cancelled`),
        params: S({
          reason: d()
            .optional()
            .describe(`Optional reason for the cancellation (e.g., "user action", "timeout").`),
        }),
      }),
      (N = S({ fonts: d().optional() })),
      (P = S({
        variables: A.optional().describe(`CSS variables for theming the app.`),
        css: N.optional().describe(`CSS blocks that apps can inject.`),
      })),
      S({ method: n(`ui/resource-teardown`), params: S({}) }),
      T(d(), l()),
      (F = S({
        text: S({}).optional().describe(`Host supports text content blocks.`),
        image: S({}).optional().describe(`Host supports image content blocks.`),
        audio: S({}).optional().describe(`Host supports audio content blocks.`),
        resource: S({}).optional().describe(`Host supports resource content blocks.`),
        resourceLink: S({}).optional().describe(`Host supports resource link content blocks.`),
        structuredContent: S({}).optional().describe(`Host supports structured content.`),
      })),
      S({ method: n(`ui/notifications/request-teardown`), params: S({}).optional() }),
      (I = S({
        experimental: T(d(), T(d(), g()).describe(`Experimental features keyed by identifier.`))
          .optional()
          .describe(`Experimental features keyed by identifier.`),
        openLinks: S({}).optional().describe(`Host supports opening external URLs.`),
        downloadFile: S({}).optional().describe(`Host supports file downloads via ui/download-file.`),
        serverTools: S({
          listChanged: m().optional().describe(`Host supports tools/list_changed notifications.`),
        })
          .optional()
          .describe(`Host can proxy tool calls to the MCP server.`),
        serverResources: S({
          listChanged: m().optional().describe(`Host supports resources/list_changed notifications.`),
        })
          .optional()
          .describe(`Host can proxy resource reads to the MCP server.`),
        logging: S({}).optional().describe(`Host accepts log messages.`),
        sandbox: S({
          permissions: M.optional().describe(
            `Permissions granted by the host (camera, microphone, geolocation).`,
          ),
          csp: j.optional().describe(`CSP domains approved by the host.`),
        })
          .optional()
          .describe(`Sandbox configuration applied by the host.`),
        updateModelContext: F.optional().describe(
          `Host accepts context updates (ui/update-model-context) to be included in the model's context for future turns.`,
        ),
        message: F.optional().describe(
          `Host supports receiving content messages (ui/message) from the view.`,
        ),
        sampling: S({
          tools: S({}).optional().describe("Host supports tool use via `tools` and `toolChoice` parameters."),
        })
          .optional()
          .describe(
            "Host supports LLM sampling (sampling/createMessage) from the view.\nMirrors the MCP `ClientCapabilities.sampling` shape so hosts can pass it through.",
          ),
      })),
      (L = S({
        experimental: T(d(), T(d(), g()).describe(`Experimental features keyed by identifier.`))
          .optional()
          .describe(`Experimental features keyed by identifier.`),
        tools: S({ listChanged: m().optional().describe(`App supports tools/list_changed notifications.`) })
          .optional()
          .describe(`App exposes MCP-style tools that the host can call.`),
        availableDisplayModes: x(O).optional().describe(`Display modes the app supports.`),
      })),
      S({ method: n(`ui/notifications/initialized`), params: S({}).optional() }),
      S({
        csp: j.optional().describe(`Content Security Policy configuration for UI resources.`),
        permissions: M.optional().describe(`Sandbox permissions requested by the UI resource.`),
        domain: d().optional().describe(`Dedicated origin for view sandbox.

Useful when views need stable, dedicated origins for OAuth callbacks, CORS policies, or API key allowlists.

**Host-dependent:** The format and validation rules for this field are determined by each host. Servers MUST consult host-specific documentation for the expected domain format. Common patterns include:
- Hash-based subdomains (e.g., \`{hash}.claudemcpcontent.com\`)
- URL-derived subdomains (e.g., \`www-example-com.oaiusercontent.com\`)

If omitted, host uses default sandbox origin (typically per-conversation).`),
        prefersBorder: m().optional()
          .describe(`Visual boundary preference - true if view prefers a visible border.

Boolean requesting whether a visible border and background is provided by the host. Specifying an explicit value for this is recommended because hosts' defaults may vary.

- \`true\`: request visible border + background
- \`false\`: request no visible border + background
- omitted: host decides border`),
      }),
      S({
        method: n(`ui/request-display-mode`),
        params: S({ mode: O.describe(`The display mode being requested.`) }),
      }),
      S({
        mode: O.describe(
          `The display mode that was actually set. May differ from requested if not supported.`,
        ),
      }).passthrough(),
      (R = c([n(`model`), n(`app`)]).describe(`Tool visibility scope - who can access the tool.`)),
      S({
        resourceUri: d().optional(),
        visibility: x(R).optional().describe(`Who can access this tool. Default: ["model", "app"]
- "model": Tool visible to and callable by the agent
- "app": Tool callable by the app from this server only`),
        csp: h().optional(),
        permissions: h().optional(),
      }),
      S({
        mimeTypes: x(d())
          .optional()
          .describe(
            'Array of supported MIME types for UI resources.\nMust include `"text/html;profile=mcp-app"` for MCP Apps support.',
          ),
      }),
      S({
        method: n(`ui/download-file`),
        params: S({
          contents: x(c([s, te])).describe(
            `Resource contents to download — embedded (inline data) or linked (host fetches). Uses standard MCP resource types.`,
          ),
        }),
      }),
      S({
        method: n(`ui/message`),
        params: S({
          role: n(`user`).describe(`Message role, currently only "user" is supported.`),
          content: x(f).describe(`Message content blocks (text, image, etc.).`),
        }),
      }),
      S({
        method: n(`ui/notifications/sandbox-resource-ready`),
        params: S({
          html: d().describe(`HTML content to load into the inner iframe.`),
          sandbox: d().optional().describe(`Optional override for the inner iframe's sandbox attribute.`),
          csp: j.optional().describe(`CSP configuration from resource metadata.`),
          permissions: M.optional().describe(`Sandbox permissions from resource metadata.`),
        }),
      }),
      S({
        method: n(`ui/notifications/tool-result`),
        params: o.describe(`Standard MCP tool execution result.`),
      }),
      (z = S({
        toolInfo: S({
          id: ee.optional().describe(`JSON-RPC id of the tools/call request.`),
          tool: y.describe(`Tool definition including name, inputSchema, etc.`),
        })
          .optional()
          .describe(`Metadata of the tool call that instantiated this App.`),
        theme: D.optional().describe(`Current color theme preference.`),
        styles: P.optional().describe(`Style configuration for theming the app.`),
        displayMode: O.optional().describe(`How the UI is currently displayed.`),
        availableDisplayModes: x(O).optional().describe(`Display modes the host supports.`),
        containerDimensions: c([
          S({ height: _().describe(`Fixed container height in pixels.`) }),
          S({ maxHeight: c([_(), w()]).optional().describe(`Maximum container height in pixels.`) }),
        ])
          .and(
            c([
              S({ width: _().describe(`Fixed container width in pixels.`) }),
              S({ maxWidth: c([_(), w()]).optional().describe(`Maximum container width in pixels.`) }),
            ]),
          )
          .optional().describe(`Container dimensions. Represents the dimensions of the iframe or other
container holding the app. Specify either width or maxWidth, and either height or maxHeight.`),
        locale: d().optional().describe(`User's language and region preference in BCP 47 format.`),
        timeZone: d().optional().describe(`User's timezone in IANA format.`),
        userAgent: d().optional().describe(`Host application identifier.`),
        platform: c([n(`web`), n(`desktop`), n(`mobile`)])
          .optional()
          .describe(`Platform type for responsive design decisions.`),
        deviceCapabilities: S({
          touch: m().optional().describe(`Whether the device supports touch input.`),
          hover: m().optional().describe(`Whether the device supports hover interactions.`),
        })
          .optional()
          .describe(`Device input capabilities.`),
        safeAreaInsets: S({
          top: _().describe(`Top safe area inset in pixels.`),
          right: _().describe(`Right safe area inset in pixels.`),
          bottom: _().describe(`Bottom safe area inset in pixels.`),
          left: _().describe(`Left safe area inset in pixels.`),
        })
          .optional()
          .describe(`Mobile safe area boundaries in pixels.`),
      }).passthrough()),
      S({
        method: n(`ui/notifications/host-context-changed`),
        params: z.describe(`Partial context update containing only changed fields.`),
      }),
      (B = S({
        method: n(`ui/update-model-context`),
        params: S({
          content: x(f).optional().describe(`Context content blocks (text, image, etc.).`),
          structuredContent: T(d(), l().describe(`Structured content for machine-readable context data.`))
            .optional()
            .describe(`Structured content for machine-readable context data.`),
        }),
      })),
      S({
        method: n(`ui/initialize`),
        params: S({
          appInfo: p.describe(`App identification (name and version).`),
          appCapabilities: L.describe(`Features and capabilities this app provides.`),
          protocolVersion: d().describe(`Protocol version this app supports.`),
        }),
      }),
      S({
        protocolVersion: d().describe(`Negotiated protocol version string (e.g., "2025-11-21").`),
        hostInfo: p.describe(`Host application identification and version.`),
        hostCapabilities: I.describe(`Features and capabilities provided by the host.`),
        hostContext: z.describe(`Rich context about the host environment.`),
      }).passthrough());
  }))();
}
function H(e) {
  let t = null;
  for (let n of e?.contents ?? []) {
    let e = Q.safeParse(n);
    if (!e.success) continue;
    if (e.data.mimeType === `text/x-dil;profile=mcp-app`) {
      t ??= { htmlFallback: null, kind: `dil`, source: e.data.text ?? null };
      continue;
    }
    if (e.data.mimeType == null || !K.has(e.data.mimeType)) continue;
    let r = e.data._meta?.[`openai/widgetHeightHint`],
      i = e.data._meta?.[`openai/widgetMinFrameHeight`],
      a = e.data._meta?.[`openai/ui`],
      o = {
        availableDisplayModes: a?.availableDisplayModes,
        preferredDisplayMode: a?.preferredDisplayMode,
        csp: re(e.data._meta),
        heightHint: r,
        hideAttribution: e.data._meta?.[`openai/widgetHideAttribution`],
        html: e.data.text ?? null,
        htmlByteLength: new Blob([e.data.text ?? ``]).size,
        kind: `html`,
        minFrameHeight: i,
        prefersBorder: e.data._meta?.[`openai/widgetPrefersBorder`] ?? e.data._meta?.ui?.prefersBorder ?? !1,
        isCollapsible: !(e.data._meta?.[`openai/widgetShowCodexWidgetInline`] ?? !1),
        widgetDomain: e.data._meta?.ui?.domain ?? e.data._meta?.[`openai/widgetDomain`] ?? null,
      };
    return t == null ? o : { ...t, htmlFallback: o };
  }
  return t;
}
function U(e, t, n = H(e)) {
  if (n != null && (n.kind === `html` ? n.html != null : n.source != null || n.htmlFallback?.html != null))
    return;
  let r = e.contents.map((e) => {
    let t = Q.safeParse(e),
      n = `missing_text`;
    return (
      t.success
        ? t.data.mimeType == null ||
          (!K.has(t.data.mimeType) && t.data.mimeType !== `text/x-dil;profile=mcp-app`)
          ? (n = `unsupported_mime_type`)
          : t.data.text != null && (n = `not_selected_for_rendering`)
        : (n = `invalid_resource_metadata`),
      {
        uri: e.uri,
        mimeType: e.mimeType,
        reason: n,
        validationErrors: t.error == null ? void 0 : ne(t.error),
      }
    );
  });
  i.warning(`App resource has no usable document`, {
    safe: { contentCount: r.length, reasons: [...new Set(r.map(({ reason: e }) => e))] },
    sensitive: { ...t, contents: r },
  });
}
function W({
  hasResourceError: e = !1,
  isDilEnabled: t,
  isResourceLoading: n = !1,
  renderData: r,
  resourceUri: i,
  shouldRenderMcpApp: a,
}) {
  if (!a) return { kind: `fallback` };
  if (r == null || (r.kind === `html` && r.html == null))
    return n || e ? { kind: `html`, renderData: null } : { kind: `fallback` };
  if (r.kind !== `dil`) return { kind: `html`, renderData: r };
  if (!t || i == null || r.source == null) {
    let t = r.htmlFallback;
    return t?.html == null
      ? e
        ? { kind: `html`, renderData: null }
        : { kind: `fallback` }
      : { kind: `html`, renderData: t };
  }
  return e ? { kind: `html`, renderData: null } : { kind: `dil`, source: r.source };
}
function re(e) {
  let t = e?.ui?.csp,
    n = e?.[`openai/widgetCSP`],
    r = t?.resourceDomains ?? n?.resourceDomains ?? n?.resource_domains ?? [],
    i = t?.frameDomains ?? n?.frameDomains ?? n?.frame_domains ?? [];
  return {
    baseUriDomains: t?.baseUriDomains ?? n?.baseUriDomains ?? n?.base_uri_domains ?? [],
    connectDomains: [
      ...new Set([...(t?.connectDomains ?? n?.connectDomains ?? n?.connect_domains ?? []), ...r]),
    ],
    frameDomains: i,
    includeDefaultDomains: !1,
    isTrusted: t != null || n != null,
    resourceDomains: r,
  };
}
function G(e, t, n) {
  return [
    ...new Set(
      e.flatMap((e) => {
        let r = se(e, t, n);
        return r == null ? [] : [r];
      }),
    ),
  ];
}
function ie(e) {
  return e.endsWith(`.internal.api.openai.org`) || e.endsWith(`.extapps.openai.org`);
}
function ae(e) {
  return !1;
}
function oe() {
  return !1;
}
function se(e, t, n) {
  let r = e.trim();
  if (r.length === 0 || J.test(r)) return null;
  if (r === `blob:` || r === `data:`) return r;
  let i = r.replace(q, `$1*`),
    a = /^[a-z][a-z0-9+.-]*:\/\//i.test(i) ? i : `https://${i}`,
    o;
  try {
    o = new URL(a);
  } catch {
    return null;
  }
  let s = n && oe() && o.hostname === `localhost` && (o.protocol === `http:` || (t && o.protocol === `ws:`));
  if (
    !(o.protocol === `https:` || (t && o.protocol === `wss:`) || s) ||
    o.hostname === `*` ||
    o.username.length > 0 ||
    o.password.length > 0
  )
    return null;
  let c = o.hostname.replace(/^%2a(?=\.)/i, `*`);
  return c.includes(`*`) && !c.startsWith(`*.`)
    ? null
    : `${o.protocol}//${c}${o.port.length > 0 ? `:${o.port}` : ``}`;
}
var K, q, J, Y, X, Z, Q;
function $() {
  return ($ = t(() => {
    (V(),
      C(),
      a(),
      u(),
      (K = new Set([`text/html`, ...b])),
      (q = /^([a-z][a-z0-9+.-]*:\/\/)?%2a(?=\.)/i),
      (J = /[\s;,"']/),
      (Y = x(d()).transform((e) => G(e, !1, !1))),
      (X = x(d()).transform((e) => G(e, !1, !0))),
      (Z = x(d()).transform((e) => G(e, !0, !0))),
      (Q = S({
        _meta: S({
          "openai/widgetCSP": S({
            baseUriDomains: Y.optional(),
            base_uri_domains: Y.optional(),
            connectDomains: Z.optional(),
            connect_domains: Z.optional(),
            frameDomains: Y.optional(),
            frame_domains: Y.optional(),
            resourceDomains: X.optional(),
            resource_domains: X.optional(),
          })
            .strip()
            .optional(),
          "openai/widgetDomain": d().optional(),
          "openai/widgetHeightHint": _()
            .positive()
            .optional()
            .catch(void 0),
          "openai/widgetShowCodexWidgetInline": m().optional(),
          "openai/widgetHideAttribution": m()
            .optional()
            .catch(void 0),
          "openai/widgetMinFrameHeight": _()
            .nonnegative()
            .optional()
            .catch(void 0),
          "openai/widgetPrefersBorder": m().optional(),
          "openai/ui": S({
            availableDisplayModes: x(O).optional(),
            preferredDisplayMode: O.optional(),
          }).optional(),
          ui: S({
            csp: S({
              baseUriDomains: Y.optional(),
              connectDomains: Z.optional(),
              frameDomains: Y.optional(),
              resourceDomains: X.optional(),
            })
              .strip()
              .optional(),
            domain: d().optional(),
            prefersBorder: m().optional(),
          })
            .strip()
            .optional(),
        })
          .strip()
          .optional(),
        mimeType: d()
          .optional()
          .catch(void 0),
        text: d()
          .optional()
          .catch(void 0),
      }).strip()));
  }))();
}
export { U as a, B as c, ie as i, V as l, H as n, ae as o, $ as r, L as s, W as t };
//# sourceMappingURL=resource-5df84eaadd7b.js.map
