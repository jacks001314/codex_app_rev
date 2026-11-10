import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $It as n,
  AO as r,
  CO as i,
  CPt as a,
  Cot as o,
  EPt as s,
  HMt as c,
  IDt as l,
  Iot as u,
  Ixt as d,
  JC as f,
  LLt as p,
  Lot as m,
  MO as h,
  Pxt as g,
  Rnt as _,
  Rot as v,
  SPt as y,
  TLt as b,
  TO as x,
  VDt as S,
  Vxt as C,
  Xot as w,
  Yot as T,
  _It as E,
  cLt as D,
  cz as O,
  fLt as k,
  gNt as A,
  iw as j,
  jDt as M,
  jO as N,
  n7 as P,
  nst as ee,
  oIt as F,
  pIt as I,
  pLt as L,
  qC as te,
  sz as ne,
  t3 as re,
  tst as ie,
  tw as ae,
  vzt as oe,
  wot as se,
  xLt as ce,
  xMt as le,
  yzt as R,
  zot as ue,
  zxt as de,
} from "./app-shared-bbfeca5e5737.js";
import {
  AOn as fe,
  B_r as pe,
  CEn as z,
  DPn as me,
  Djr as he,
  EMn as ge,
  Ejr as _e,
  Ek as ve,
  GMr as B,
  H_r as ye,
  J_r as be,
  K_r as xe,
  Kyt as Se,
  QDr as Ce,
  QP as we,
  Sjr as V,
  TEn as H,
  TMn as Te,
  TPn as Ee,
  Tk as U,
  U_r as W,
  Udr as G,
  V_r as De,
  XDr as Oe,
  XMr as ke,
  YMr as K,
  _4n as Ae,
  _F as je,
  bjr as Me,
  f4n as Ne,
  hF as Pe,
  jOn as Fe,
  nEt as Ie,
  qyt as Le,
  tEt as Re,
  tF as ze,
  tNr as Be,
  u4n as Ve,
  y4n as He,
} from "./app-initial-5851df3f6cb1.js";
import { i as Ue, r as We } from "./plugin-connected-account-links-8dea8c830000.js";
import { n as Ge, t as Ke } from "./quick-action-dialog-cb81d076a636.js";
async function q(e, t, n, r, i) {
  if (t.transport.type === `app-server`) {
    let i = V({
      server: t.server,
      toolScope: t.toolScope ?? null,
      toolName: n,
      toolArguments: r,
      tools: t.transport.tools,
    });
    return Ve(e, t.hostId, t.server, i.name, r, {
      hostToolCallMetadata:
        i.codexAppsResourceUri == null ? void 0 : { _codex_apps: { resource_uri: i.codexAppsResourceUri } },
    });
  }
  let o = Se({
      scope: e,
      accountId: t.transport.accountId,
      signal: i,
      appUri: `connectors://${t.connectorId ?? t.server}`,
      chatGptConversationId: null,
      messageId: null,
      productSku: `CODEX`,
      originMetadata: { link_id: t.transport.linkId },
      attribution: z(e, t),
    }),
    s = c.parse(await o.handleRequest({ method: `tools/call`, params: { name: n, arguments: r } }));
  return (
    s.isError &&
      a.warning(`App settings tool failed`, {
        safe: { connectorId: t.connectorId, linkId: t.transport.linkId },
        sensitive: { tool: n, error: s.content.find((e) => e.type === `text`)?.text },
      }),
    s
  );
}
function J() {
  return (J = e(() => {
    (A(), Le(), Me(), y(), H(), Ne());
  }))();
}
function qe(e) {
  let t = [],
    n = new Set();
  for (let r of e.layout ?? []) {
    t.push({ title: r.title, other: !1, items: r.items });
    for (let e of r.items) e.kind === `property` && n.add(e.property);
  }
  let r = Object.keys(e.schema.properties).filter((e) => !n.has(e));
  return (
    r.length > 0 &&
      t.push({
        title: void 0,
        other: e.layout !== void 0,
        items: r.map((e) => ({ kind: `property`, property: e })),
      }),
    t.filter((e) => e.items.length > 0)
  );
}
var Je, Ye;
function Xe() {
  return (Xe = e(() => {
    (W(),
      s(),
      (Je = pe
        .extend({
          type: F([`boolean`, `string`, `number`, `integer`]),
          enum: I(b()).nonempty().optional(),
          $ref: D().optional(),
          anyOf: D().optional(),
          oneOf: D().optional(),
          allOf: D().optional(),
          minimum: k().optional(),
          maximum: k().optional(),
          multipleOf: k().positive().optional(),
          minLength: k().int().nonnegative().optional(),
          maxLength: k().int().nonnegative().optional(),
          pattern: b().optional(),
        })
        .refine((e) => e.enum == null || e.type === `string`, `Only string settings can declare an enum`)),
      (Ye = De.safeExtend({
        schema: L({ type: n(`object`), properties: ce(b(), Je), required: I(b()).optional() }),
        values: ce(b(), p([E(), b(), k()])),
      }).superRefine(({ schema: e, values: t }, n) => {
        for (let [r, i] of Object.entries(e.properties)) {
          let e = t[r],
            a;
          switch (i.type) {
            case `boolean`:
              a = typeof e == `boolean`;
              break;
            case `string`:
              if (
                ((a =
                  typeof e == `string` &&
                  (i.enum == null || i.enum.includes(e)) &&
                  (i.minLength == null || Array.from(e).length >= i.minLength) &&
                  (i.maxLength == null || Array.from(e).length <= i.maxLength)),
                typeof e == `string` && a && i.pattern != null)
              )
                try {
                  a = new RegExp(i.pattern, `u`).test(e);
                } catch {
                  a = !1;
                }
              break;
            case `number`:
            case `integer`:
              a =
                typeof e == `number` &&
                (i.type !== `integer` || Number.isInteger(e)) &&
                (i.minimum == null || e >= i.minimum) &&
                (i.maximum == null || e <= i.maximum) &&
                (i.multipleOf == null || k().multipleOf(i.multipleOf).safeParse(e).success);
          }
          a ||
            n.addIssue({
              code: `custom`,
              path: [`values`, r],
              message: `Missing or invalid effective settings value`,
            });
        }
      })));
  }))();
}
function Ze(e) {
  let n = (0, Y.c)(55),
    { action: r, view: i } = e,
    a = d(o),
    s = S(),
    [c, l] = (0, X.useState)(!1),
    [u, f] = (0, X.useState)(),
    p,
    m,
    h,
    g;
  if (n[0] !== r.tool || n[1] !== i.server || n[2] !== i.toolScope || n[3] !== i.transport) {
    try {
      h = V({
        server: i.server,
        toolScope: i.toolScope ?? null,
        toolName: r.tool,
        toolArguments: {},
        tools: i.transport.type === `app-server` ? i.transport.tools : [],
      }).tool;
    } catch {
      h = null;
    }
    m = xe(h)?.trim() || r.tool;
    let e = he(i.server) && i.toolScope?.kind === `target` && $e.safeParse(h?._meta).success;
    ((g = h == null ? !0 : (h.inputSchema.required?.some((t) => t !== `link_id` || !e) ?? !1)),
      (p = h == null ? void 0 : Te(h)),
      (n[0] = r.tool),
      (n[1] = i.server),
      (n[2] = i.toolScope),
      (n[3] = i.transport),
      (n[4] = p),
      (n[5] = m),
      (n[6] = h),
      (n[7] = g));
  } else ((p = n[4]), (m = n[5]), (h = n[6]), (g = n[7]));
  let _ = p,
    v;
  n[8] !== s || n[9] !== c || n[10] !== a || n[11] !== h || n[12] !== g || n[13] !== i
    ? ((v = async () =>
        c || h == null || g
          ? null
          : (l(!0),
            q(a, i, h.name, {})
              .then((e) => {
                if (e.isError) throw Error(`Settings action failed`);
                return (
                  f(
                    e.content.find(Qe)?.text ||
                      s.formatMessage({
                        id: `mcpSettings.action.complete`,
                        defaultMessage: `Completed`,
                        description: `Tooltip when a plugin settings action succeeded without a text response`,
                      }),
                  ),
                  e
                );
              })
              .catch(
                () => (
                  f(
                    s.formatMessage({
                      id: `mcpSettings.action.failed`,
                      defaultMessage: `Couldn’t complete this action. Try again.`,
                      description: `Tooltip when a plugin settings action fails`,
                    }),
                  ),
                  null
                ),
              )
              .finally(() => l(!1)))),
      (n[8] = s),
      (n[9] = c),
      (n[10] = a),
      (n[11] = h),
      (n[12] = g),
      (n[13] = i),
      (n[14] = v))
    : (v = n[14]);
  let y = v,
    b = c || g,
    x;
  n[15] !== c || n[16] !== b || n[17] !== m
    ? ((x = (0, Z.jsx)(t, { color: `secondary`, size: `default`, disabled: b, loading: c, children: m })),
      (n[15] = c),
      (n[16] = b),
      (n[17] = m),
      (n[18] = x))
    : (x = n[18]);
  let C = x,
    w;
  if (Fe() && _ != null && h != null) {
    let e;
    n[19] !== i.transport.tools || n[20] !== i.transport.type
      ? ((e = i.transport.type === `app-server` ? i.transport.tools : []),
        (n[19] = i.transport.tools),
        (n[20] = i.transport.type),
        (n[21] = e))
      : (e = n[21]);
    let t;
    n[22] !== _ || n[23] !== e || n[24] !== h || n[25] !== i
      ? ((t = { ...i, tool: h, resourceUri: _, serverTools: e }),
        (n[22] = _),
        (n[23] = e),
        (n[24] = h),
        (n[25] = i),
        (n[26] = t))
      : (t = n[26]);
    let r = t,
      a;
    n[27] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = []), (n[27] = a)) : (a = n[27]);
    let o;
    n[28] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = {}), (n[28] = o)) : (o = n[28]);
    let s;
    n[29] === h.name
      ? (s = n[30])
      : ((s = { type: `tool`, name: h.name, arguments: o }), (n[29] = h.name), (n[30] = s));
    let l;
    n[31] !== s || n[32] !== m
      ? ((l = { title: m, icons: a, target: s }), (n[31] = s), (n[32] = m), (n[33] = l))
      : (l = n[33]);
    let d;
    (n[34] !== r || n[35] !== C || n[36] !== u || n[37] !== c || n[38] !== y || n[39] !== l
      ? ((d = (0, Z.jsx)(Ke, {
          action: l,
          pending: c,
          quickActionView: r,
          source: `settings`,
          view: r,
          onOpen: y,
          trigger: C,
          tooltipText: u,
        })),
        (n[34] = r),
        (n[35] = C),
        (n[36] = u),
        (n[37] = c),
        (n[38] = y),
        (n[39] = l),
        (n[40] = d))
      : (d = n[40]),
      (w = d));
  } else {
    let e = u ?? r.description ?? m,
      i = c || g,
      a;
    n[41] === y ? (a = n[42]) : ((a = () => void y()), (n[41] = y), (n[42] = a));
    let o;
    n[43] !== c || n[44] !== i || n[45] !== a || n[46] !== m
      ? ((o = (0, Z.jsx)(t, {
          color: `secondary`,
          size: `default`,
          disabled: i,
          loading: c,
          onClick: a,
          children: m,
        })),
        (n[43] = c),
        (n[44] = i),
        (n[45] = a),
        (n[46] = m),
        (n[47] = o))
      : (o = n[47]);
    let s;
    (n[48] !== e || n[49] !== o
      ? ((s = (0, Z.jsx)(ne, { tooltipContent: e, children: o })), (n[48] = e), (n[49] = o), (n[50] = s))
      : (s = n[50]),
      (w = s));
  }
  let T;
  return (
    n[51] !== r.description || n[52] !== w || n[53] !== m
      ? ((T = (0, Z.jsx)(ae, { label: m, description: r.description, control: w })),
        (n[51] = r.description),
        (n[52] = w),
        (n[53] = m),
        (n[54] = T))
      : (T = n[54]),
    T
  );
}
function Qe(e) {
  return e.type === `text`;
}
var Y, X, Z, $e;
function et() {
  return (et = e(() => {
    ((Y = oe()),
      g(),
      (X = R()),
      M(),
      s(),
      be(),
      _e(),
      re(),
      O(),
      fe(),
      Me(),
      se(),
      j(),
      ge(),
      Ge(),
      J(),
      (Z = le()),
      ($e = L({ _codex_apps: L({ requires_explicit_link_id: n(!0) }) })));
  }))();
}
function tt(e) {
  let t = (0, Q.c)(5),
    { view: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = (0, $.jsx)(nt, { view: n })), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] !== r || t[3] !== n.title
      ? ((i = (0, $.jsx)(Pe, { title: n.title, children: r })), (t[2] = r), (t[3] = n.title), (t[4] = i))
      : (i = t[4]),
    i
  );
}
function nt(e) {
  let t = (0, Q.c)(3),
    { view: n, links: r } = e,
    i;
  return (
    t[0] !== r || t[1] !== n
      ? ((i =
          n.transport.type === `hosted`
            ? (0, $.jsx)(rt, { view: n, accountId: n.transport.accountId, links: r })
            : (0, $.jsx)(it, { view: n })),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function rt(e) {
  let t = (0, Q.c)(29),
    { view: n, accountId: r, links: i } = e,
    a = C(B),
    o = C(ke),
    s = C(K),
    c = n.connectorId ?? n.server,
    l;
  t[0] === c ? (l = t[1]) : ((l = G(c)), (t[0] = c), (t[1] = l));
  let u = l,
    d = n.connectorId ?? n.server,
    f;
  t[2] !== r || t[3] !== d || t[4] !== o
    ? ((f = { accountId: r, userId: o, appId: d }), (t[2] = r), (t[3] = d), (t[4] = o), (t[5] = f))
    : (f = t[5]);
  let p = de(Ue, f),
    m,
    h,
    g,
    _;
  if (t[6] !== r || t[7] !== a || t[8] !== u || t[9] !== i || t[10] !== s || t[11] !== p || t[12] !== o) {
    _ = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = i?.filter(
        (e) => G(e.connector_id) === u && (e.visibility !== `HIDDEN` || e.id.startsWith(`implicit_link::`)),
      );
      if (
        ((h = (e?.find((e) => e.id === p) ?? (e?.length === 1 ? e[0] : void 0))?.id),
        a !== r || s == null || h == null)
      ) {
        let e;
        (t[17] === i ? (e = t[18]) : ((e = i == null ? (0, $.jsx)(Re, {}) : null), (t[17] = i), (t[18] = e)),
          (_ = e));
        break bb0;
      }
      ((m = it), (g = JSON.stringify([r, o, s, h])));
    }
    ((t[6] = r),
      (t[7] = a),
      (t[8] = u),
      (t[9] = i),
      (t[10] = s),
      (t[11] = p),
      (t[12] = o),
      (t[13] = m),
      (t[14] = h),
      (t[15] = g),
      (t[16] = _));
  } else ((m = t[13]), (h = t[14]), (g = t[15]), (_ = t[16]));
  if (_ !== Symbol.for(`react.early_return_sentinel`)) return _;
  let v;
  t[19] !== r || t[20] !== h
    ? ((v = { type: `hosted`, accountId: r, linkId: h }), (t[19] = r), (t[20] = h), (t[21] = v))
    : (v = t[21]);
  let y;
  t[22] !== v || t[23] !== n
    ? ((y = { ...n, transport: v }), (t[22] = v), (t[23] = n), (t[24] = y))
    : (y = t[24]);
  let b;
  return (
    t[25] !== m || t[26] !== g || t[27] !== y
      ? ((b = (0, $.jsx)(m, { view: y }, g)), (t[25] = m), (t[26] = g), (t[27] = y), (t[28] = b))
      : (b = t[28]),
    b
  );
}
function it(e) {
  let n = (0, Q.c)(27),
    { view: r } = e,
    i = d(o),
    s = C(B),
    c = C(K),
    u = r.transport.type === `hosted` ? r.transport.accountId : s,
    f = ee(),
    p = [
      `mcp-structured-settings`,
      u,
      c,
      r.transport.type === `hosted` ? r.transport.linkId : null,
      r.hostId,
      r.server,
      r.readTool,
      r.toolScope,
    ],
    h;
  n[0] !== u || n[1] !== i || n[2] !== c
    ? ((h = () => {
        if (i.get(B) !== u || i.get(K) !== c)
          throw new DOMException(`Settings account changed`, `AbortError`);
      }),
      (n[0] = u),
      (n[1] = i),
      (n[2] = c),
      (n[3] = h))
    : (h = n[3]);
  let g = h,
    _;
  n[4] !== g || n[5] !== i || n[6] !== r
    ? ((_ = async (e) => {
        let { signal: t } = e;
        g();
        try {
          let e = await q(i, r, r.readTool, {}, t);
          e.isError && (await Promise.reject(Error(`Settings read failed`)));
          let n = Ye.parse(e.structuredContent);
          return (
            a.info(`Loaded app settings`, {
              safe: {
                connectorId: r.connectorId,
                linkId: r.transport.type === `hosted` ? r.transport.linkId : void 0,
                tool: r.readTool,
              },
              sensitive: { hostId: r.hostId, server: r.server },
            }),
            n
          );
        } catch (e) {
          let n = e;
          throw (
            a[t.aborted ? `info` : `warning`](
              t.aborted ? `Cancelled app settings load` : `Failed to load app settings`,
              {
                safe: {
                  ...Ae(n),
                  connectorId: r.connectorId,
                  linkId: r.transport.type === `hosted` ? r.transport.linkId : void 0,
                  tool: r.readTool,
                },
                sensitive: { hostId: r.hostId, server: r.server, error: n },
              },
            ),
            n
          );
        }
      }),
      (n[4] = g),
      (n[5] = i),
      (n[6] = r),
      (n[7] = _))
    : (_ = n[7]);
  let {
      data: v,
      error: y,
      isPending: b,
      refetch: x,
    } = w({ queryKey: p, queryFn: _, staleTime: 0, retry: !1, refetchOnWindowFocus: !1 }),
    {
      mutate: S,
      variables: T,
      isPending: E,
      error: D,
      reset: O,
    } = m({
      mutationKey: p,
      mutationFn: async (e) => {
        (await f.cancelQueries({ queryKey: p }),
          g(),
          await st(i, r, e, async () => {
            await x({ throwOnError: !0 });
          }));
      },
      retry: !1,
    }),
    k = ue({ mutationKey: p }),
    A;
  n[8] !== r.transport.tools || n[9] !== r.transport.type || n[10] !== r.updateTool
    ? ((A = r.transport.type === `hosted` || r.transport.tools.some((e) => e.name === r.updateTool)),
      (n[8] = r.transport.tools),
      (n[9] = r.transport.type),
      (n[10] = r.updateTool),
      (n[11] = A))
    : (A = n[11]);
  let j = A,
    M;
  n[12] === b ? (M = n[13]) : ((M = b ? (0, $.jsx)(Re, {}) : null), (n[12] = b), (n[13] = M));
  let N;
  n[14] !== y || n[15] !== x || n[16] !== O || n[17] !== D || n[18] !== E
    ? ((N =
        y != null || D != null
          ? (0, $.jsxs)(`div`, {
              role: `alert`,
              className: `flex items-center gap-2 text-sm text-danger`,
              children: [
                (0, $.jsx)(l, {
                  id: `mcpSettings.failed`,
                  defaultMessage: `Couldn’t load or save settings. Try again.`,
                  description: `Error when a plugin settings read or update fails; the displayed values revert to the server state`,
                }),
                (0, $.jsx)(t, {
                  color: `secondary`,
                  size: `default`,
                  disabled: E,
                  onClick: () => {
                    (O(), x());
                  },
                  children: (0, $.jsx)(l, {
                    id: `mcpSettings.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry loading the current plugin settings`,
                  }),
                }),
              ],
            })
          : null),
      (n[14] = y),
      (n[15] = x),
      (n[16] = O),
      (n[17] = D),
      (n[18] = E),
      (n[19] = N))
    : (N = n[19]);
  let P;
  n[20] === j
    ? (P = n[21])
    : ((P = j
        ? null
        : (0, $.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-secondary`,
            children: (0, $.jsx)(l, {
              id: `mcpSettings.updateUnavailable`,
              defaultMessage: `This server’s settings update tool is unavailable`,
              description: `Explains why a plugin settings page is read-only when the advertised update tool is missing`,
            }),
          })),
      (n[20] = j),
      (n[21] = P));
  let F =
      v == null
        ? null
        : (0, $.jsx)(
            at,
            {
              definition: v,
              disabled: k > 0 || y != null || !j,
              pendingChange: E ? T : void 0,
              onChange: (e, t) => S({ name: e, value: t }),
              view: r,
            },
            JSON.stringify(p),
          ),
    I;
  return (
    n[22] !== M || n[23] !== N || n[24] !== P || n[25] !== F
      ? ((I = (0, $.jsxs)($.Fragment, { children: [M, N, P, F] })),
        (n[22] = M),
        (n[23] = N),
        (n[24] = P),
        (n[25] = F),
        (n[26] = I))
      : (I = n[26]),
    I
  );
}
function at(e) {
  let t = (0, Q.c)(8),
    { definition: n, disabled: r, pendingChange: a, onChange: o, view: s } = e,
    c;
  t[0] !== n || t[1] !== r || t[2] !== o || t[3] !== a || t[4] !== s
    ? ((c = qe(n).map((e, t) =>
        (0, $.jsxs)(
          U,
          {
            children: [
              (0, $.jsx)(U.Header, {
                title: e.other
                  ? (0, $.jsx)(l, {
                      id: `mcpSettings.otherSettings`,
                      defaultMessage: `Other settings`,
                      description: `Section containing plugin settings omitted from its declared layout`,
                    })
                  : e.title,
              }),
              (0, $.jsx)(te, {
                children: e.items.map((e, t) => {
                  if (e.kind === `tool`)
                    return s.transport.type === `hosted`
                      ? null
                      : (0, $.jsx)(Ze, { action: e, view: s }, JSON.stringify([`tool`, e.tool, t]));
                  let c = e.property,
                    l = n.schema.properties[c];
                  return (0, $.jsx)(
                    ae,
                    {
                      label: l.title,
                      description: l.description,
                      control: (e) => {
                        let t = a?.name === c ? a.value : n.values[c];
                        return typeof t == `boolean`
                          ? (0, $.jsx)(N, { ...e, checked: t, disabled: r, onChange: (e) => o(c, e) })
                          : l.enum == null
                            ? typeof t != `string` && typeof t != `number`
                              ? null
                              : (0, $.jsx)(
                                  ot,
                                  { ariaProps: e, field: l, value: t, disabled: r, onChange: (e) => o(c, e) },
                                  JSON.stringify([l, t, r]),
                                )
                            : (0, $.jsx)(i, {
                                triggerButton: (0, $.jsx)(we, { ...e, disabled: r, children: t }),
                                children: l.enum.map((e) =>
                                  (0, $.jsx)(x.Item, { onSelect: () => o(c, e), children: e }, e),
                                ),
                              });
                      },
                    },
                    JSON.stringify([`setting`, c]),
                  );
                }),
              }),
            ],
          },
          JSON.stringify([e, t]),
        ),
      )),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o),
      (t[3] = a),
      (t[4] = s),
      (t[5] = c))
    : (c = t[5]);
  let u;
  return (
    t[6] === c
      ? (u = t[7])
      : ((u = (0, $.jsx)(Pe, { embedded: !0, fullWidth: !0, children: c })), (t[6] = c), (t[7] = u)),
    u
  );
}
function ot(e) {
  let t = (0, Q.c)(24),
    { ariaProps: n, field: r, value: i, disabled: a, onChange: o } = e,
    s = S(),
    [c, l] = (0, ct.useState)(String(i)),
    u = r.type === `number` || r.type === `integer`,
    d;
  t[0] !== r.multipleOf ||
  t[1] !== r.pattern ||
  t[2] !== r.type ||
  t[3] !== s ||
  t[4] !== u ||
  t[5] !== o ||
  t[6] !== i
    ? ((d = (e) => {
        let t = u ? e.valueAsNumber : e.value,
          n = !0;
        if (typeof t == `string` && r.pattern != null)
          try {
            n = new RegExp(r.pattern).test(t);
          } catch {
            n = !1;
          }
        let a =
            typeof t != `number` || r.multipleOf == null || k().multipleOf(r.multipleOf).safeParse(t).success,
          c = ``;
        (r.type === `integer` && !Number.isInteger(e.valueAsNumber)
          ? (c = s.formatMessage({
              id: `mcpSettings.integerRequired`,
              defaultMessage: `Enter a whole number`,
              description: `Validation message for a plugin setting that accepts only integers`,
            }))
          : (!n || !a) &&
            (c = s.formatMessage({
              id: `mcpSettings.constraintRequired`,
              defaultMessage: `Enter a value that matches this setting’s requirements`,
              description: `Validation message when a plugin setting does not match its required text pattern or numeric multiple`,
            })),
          e.setCustomValidity(c),
          e.reportValidity() && t !== i && o(t));
      }),
      (t[0] = r.multipleOf),
      (t[1] = r.pattern),
      (t[2] = r.type),
      (t[3] = s),
      (t[4] = u),
      (t[5] = o),
      (t[6] = i),
      (t[7] = d))
    : (d = t[7]);
  let f = d,
    p = u ? `number` : `text`,
    m;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (e) => {
        (e.currentTarget.setCustomValidity(``), l(e.currentTarget.value));
      }),
      (t[8] = m))
    : (m = t[8]);
  let h, g;
  t[9] === f
    ? ((h = t[10]), (g = t[11]))
    : ((h = (e) => f(e.currentTarget)),
      (g = (e) => {
        e.key === `Enter` && (e.preventDefault(), f(e.currentTarget));
      }),
      (t[9] = f),
      (t[10] = h),
      (t[11] = g));
  let _;
  return (
    t[12] !== n ||
    t[13] !== a ||
    t[14] !== c ||
    t[15] !== r.maxLength ||
    t[16] !== r.maximum ||
    t[17] !== r.minLength ||
    t[18] !== r.minimum ||
    t[19] !== u ||
    t[20] !== p ||
    t[21] !== h ||
    t[22] !== g
      ? ((_ = (0, $.jsx)(`div`, {
          className: `w-40`,
          children: (0, $.jsx)(Ee, {
            ...n,
            variant: `compact`,
            type: p,
            value: c,
            disabled: a,
            required: u,
            min: r.minimum,
            max: r.maximum,
            step: `any`,
            minLength: r.minLength,
            maxLength: r.maxLength,
            onChange: m,
            onBlur: h,
            onKeyDown: g,
          }),
        })),
        (t[12] = n),
        (t[13] = a),
        (t[14] = c),
        (t[15] = r.maxLength),
        (t[16] = r.maximum),
        (t[17] = r.minLength),
        (t[18] = r.minimum),
        (t[19] = u),
        (t[20] = p),
        (t[21] = h),
        (t[22] = g),
        (t[23] = _))
      : (_ = t[23]),
    _
  );
}
async function st(e, t, n, r) {
  try {
    Ce(e, P, { ...z(e, t), feature: `settings`, action: `update` });
    let r = await q(e, t, t.updateTool, { set: { [n.name]: n.value } });
    if (r.isError) throw Error(`Settings update failed`);
    (ye.parse(r.structuredContent),
      a.info(`Saved app settings`, {
        safe: {
          connectorId: t.connectorId,
          linkId: t.transport.type === `hosted` ? t.transport.linkId : void 0,
          tool: t.updateTool,
        },
        sensitive: { hostId: t.hostId, server: t.server },
      }));
  } catch (e) {
    throw (
      a.warning(`Failed to save app settings`, {
        safe: {
          ...Ae(e),
          connectorId: t.connectorId,
          linkId: t.transport.type === `hosted` ? t.transport.linkId : void 0,
          tool: t.updateTool,
        },
        sensitive: { hostId: t.hostId, server: t.server, error: e },
      }),
      e
    );
  } finally {
    await r();
  }
}
var Q, ct, $;
function lt() {
  return (lt = e(() => {
    ((Q = oe()),
      _(),
      W(),
      v(),
      u(),
      T(),
      ie(),
      g(),
      (ct = R()),
      M(),
      s(),
      Be(),
      re(),
      r(),
      Ie(),
      me(),
      h(),
      He(),
      We(),
      Oe(),
      se(),
      je(),
      ve(),
      j(),
      ze(),
      f(),
      y(),
      H(),
      J(),
      Xe(),
      et(),
      ($ = le()));
  }))();
}
export { tt as n, lt as r, nt as t };
//# sourceMappingURL=page-93c8753f7ad2.js.map
