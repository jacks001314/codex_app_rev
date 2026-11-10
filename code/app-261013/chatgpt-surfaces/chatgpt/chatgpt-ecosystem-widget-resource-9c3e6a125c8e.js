import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { HNt as n, Pxt as r, RSt as i, nSt as a, zSt as o } from "./app-shared-bbfeca5e5737.js";
import {
  Iwr as s,
  mMn as c,
  nMn as l,
  pSt as u,
  qwr as d,
  rMn as f,
  uMn as p,
  uSt as m,
} from "./app-initial-5851df3f6cb1.js";
import { n as h, r as g } from "./resource-5df84eaadd7b.js";
import { r as _ } from "./inline-height-de22080375ee.js";
function v(e) {
  return e != null && `widget` in e;
}
function y(e) {
  let { csp: t, height_hint: n, html: r, prefers_border: i } = e.widget,
    a = e.resource ?? {
      contents: [
        {
          _meta: {
            "openai/ui": {
              availableDisplayModes: e.widget.available_display_modes ?? void 0,
              preferredDisplayMode: e.widget.preferred_display_mode ?? void 0,
            },
            "openai/widgetCSP":
              t == null
                ? void 0
                : {
                    base_uri_domains: t.base_uri_domains ?? [],
                    connect_domains: t.connect_domains ?? [],
                    frame_domains: t.frame_domains ?? [],
                    resource_domains: t.resource_domains ?? [],
                  },
            "openai/widgetHeightHint": n ?? void 0,
            "openai/widgetMinFrameHeight": b(e),
            "openai/widgetDomain": e.widget.domain ?? void 0,
            "openai/widgetPrefersBorder": i ?? !1,
          },
          mimeType: `text/html+skybridge`,
          text: r,
          uri: e.request.template,
        },
      ],
    },
    o = h(a);
  if (o?.kind !== `html`) throw Error(`The app returned an unsupported widget resource.`);
  return {
    ...o,
    resourceKey: e.resourceKey,
    resourceQuery: e.resourceQuery,
    widget: e.widget,
    appIcon: {
      alt: e.widget.name ?? void 0,
      logoUrl: e.widget.logo_url,
      logoDarkUrl: e.widget.logo_url_dark,
    },
    fitWidth: !1,
    widthHint: e.widget.width_hint ?? void 0,
  };
}
function b(e) {
  let t = e.widget.height_hint;
  return e.mcpAppHostAdapter.pluginSuggestions != null ||
    (e.widget.is_verified_first_party === !0 && t != null && t > 0 && t < 200)
    ? 0
    : void 0;
}
function x() {
  return (x = e(() => {
    (_(), g());
  }))();
}
var S, C, w;
function T() {
  return (T = e(() => {
    (o(),
      (S = t(n(), 1)),
      r(),
      p(),
      m(),
      d(),
      f(),
      x(),
      (C = a(s, ({ mcpAppId: e, resourceKey: t }, { get: n }) => {
        let r = n(u, e),
          i = r?.sessionId == null ? null : r.content,
          a = i?.resource;
        return t != null && i != null && v(a) && a.resourceKey === t ? a.widget : null;
      })),
      (w = a(
        s,
        (e, { get: t }) => {
          let n = t(l, e),
            r = n.data == null ? t(u, e.mcpAppId) : null,
            a = r?.content,
            o = a?.resource,
            s =
              r?.sessionId != null &&
              a != null &&
              v(o) &&
              o.resourceKey != null &&
              o.resourceQuery != null &&
              i([o.resourceQuery]) === i([e]) &&
              t(c, a.resourceIdentity) === `current`
                ? { widget: o.widget, resourceKey: o.resourceKey, resourceIdentity: a.resourceIdentity }
                : void 0,
            d = n.data ?? s;
          return { ...n, data: d == null ? void 0 : { ...d, resourceQuery: e } };
        },
        { autoDispose: !0, isEqual: S.default },
      )));
  }))();
}
export { y as a, b as i, w as n, x as o, T as r, v as s, C as t };
//# sourceMappingURL=chatgpt-ecosystem-widget-resource-9c3e6a125c8e.js.map
