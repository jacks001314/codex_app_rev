import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $Rt as n,
  $St as r,
  $st as i,
  FBt as a,
  HFt as o,
  LNt as s,
  LRt as c,
  Lst as l,
  MPt as u,
  Mst as d,
  NLt as f,
  ORt as p,
  PBt as m,
  Qst as h,
  RFt as g,
  Rrt as _,
  Rst as v,
  SLt as y,
  VRt as b,
  XOt as x,
  Y3 as S,
  Z3 as C,
  ZSt as w,
  bst as T,
  ck as ee,
  ew as E,
  hRt as D,
  iCt as O,
  iPt as k,
  jst as A,
  kLt as j,
  kRt as M,
  lk as N,
  n9 as te,
  nB as ne,
  nCt as re,
  okt as ie,
  rB as ae,
  rk as oe,
  sw as se,
  tk as ce,
  tkt as P,
  uk as le,
  uw as ue,
  vst as de,
  wRt as F,
  xst as fe,
  yst as pe,
  zFt as I,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $8n as me,
  $Ln as he,
  $jn as ge,
  BRr as _e,
  Bhr as L,
  FF as ve,
  GFr as R,
  Gxr as z,
  Hxr as ye,
  Jkn as B,
  Jxr as be,
  K8n as xe,
  Kkn as V,
  MSt as H,
  NSt as Se,
  QF as U,
  RF as Ce,
  UFr as we,
  Uxr as Te,
  W8n as Ee,
  Wxr as De,
  XFn as Oe,
  XFr as ke,
  Xxr as Ae,
  YFn as je,
  YFr as Me,
  Z8n as Ne,
  ZLn as Pe,
  bLr as W,
  cA as Fe,
  eI as Ie,
  eMn as Le,
  oxt as Re,
  sA as ze,
  sxt as Be,
  wLr as Ve,
  xMr as He,
  yMr as Ue,
  zRr as G,
} from "./app-initial-ad16eaadf81f.js";
import { i as We, r as Ge } from "./plugin-connected-account-links-e850d089d83d.js";
import { n as Ke, t as qe } from "./quick-action-dialog-e856f0090edc.js";
async function K(e, t, n, r, i) {
  if (t.transport.type === `app-server`) {
    let i = R({
      server: t.server,
      toolScope: t.toolScope ?? null,
      toolName: n,
      toolArguments: r,
      tools: t.transport.tools,
    });
    return Ee(e, t.hostId, t.server, i.name, r, {
      hostToolCallMetadata:
        i.codexAppsResourceUri == null ? void 0 : { _codex_apps: { resource_uri: i.codexAppsResourceUri } },
    });
  }
  let a = Re({
      scope: e,
      accountId: t.transport.accountId,
      signal: i,
      appUri: `connectors://${t.connectorId ?? t.server}`,
      chatGptConversationId: null,
      messageId: null,
      productSku: `CODEX`,
      originMetadata: { link_id: t.transport.linkId },
      attribution: V(e, t),
    }),
    o = k.parse(await a.handleRequest({ method: `tools/call`, params: { name: n, arguments: r } }));
  return (
    o.isError &&
      I.warning(`App settings tool failed`, {
        safe: { connectorId: t.connectorId, linkId: t.transport.linkId },
        sensitive: { tool: n, error: o.content.find((e) => e.type === `text`)?.text },
      }),
    o
  );
}
function q() {
  return (q = e(() => {
    (u(), Be(), we(), g(), B(), xe());
  }))();
}
function Je(e) {
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
var Ye, Xe;
function Ze() {
  return (Ze = e(() => {
    (z(),
      o(),
      (Ye = ye
        .extend({
          type: y([`boolean`, `string`, `number`, `integer`]),
          enum: j(b()).nonempty().optional(),
          $ref: F().optional(),
          anyOf: F().optional(),
          oneOf: F().optional(),
          allOf: F().optional(),
          minimum: p().optional(),
          maximum: p().optional(),
          multipleOf: p().positive().optional(),
          minLength: p().int().nonnegative().optional(),
          maxLength: p().int().nonnegative().optional(),
          pattern: b().optional(),
        })
        .refine((e) => e.enum == null || e.type === `string`, `Only string settings can declare an enum`)),
      (Xe = Te.safeExtend({
        schema: M({ type: D(`object`), properties: c(b(), Ye), required: j(b()).optional() }),
        values: c(b(), n([f(), b(), p()])),
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
                (i.multipleOf == null || p().multipleOf(i.multipleOf).safeParse(e).success);
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
function Qe(e) {
  let t = (0, J.c)(55),
    { action: n, view: i } = e,
    a = r(h),
    o = ie(),
    [s, c] = (0, Y.useState)(!1),
    [l, u] = (0, Y.useState)(),
    d,
    f,
    p,
    m;
  if (t[0] !== n.tool || t[1] !== i.server || t[2] !== i.toolScope || t[3] !== i.transport) {
    try {
      p = R({
        server: i.server,
        toolScope: i.toolScope ?? null,
        toolName: n.tool,
        toolArguments: {},
        tools: i.transport.type === `app-server` ? i.transport.tools : [],
      }).tool;
    } catch {
      p = null;
    }
    f = be(p)?.trim() || n.tool;
    let e = ke(i.server) && i.toolScope?.kind === `target` && et.safeParse(p?._meta).success;
    ((m = p == null ? !0 : (p.inputSchema.required?.some((t) => t !== `link_id` || !e) ?? !1)),
      (d = p == null ? void 0 : je(p)),
      (t[0] = n.tool),
      (t[1] = i.server),
      (t[2] = i.toolScope),
      (t[3] = i.transport),
      (t[4] = d),
      (t[5] = f),
      (t[6] = p),
      (t[7] = m));
  } else ((d = t[4]), (f = t[5]), (p = t[6]), (m = t[7]));
  let g = d,
    _;
  t[8] !== o || t[9] !== s || t[10] !== a || t[11] !== p || t[12] !== m || t[13] !== i
    ? ((_ = async () =>
        s || p == null || m
          ? null
          : (c(!0),
            K(a, i, p.name, {})
              .then((e) => {
                if (e.isError) throw Error(`Settings action failed`);
                return (
                  u(
                    e.content.find($e)?.text ||
                      o.formatMessage({
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
                  u(
                    o.formatMessage({
                      id: `mcpSettings.action.failed`,
                      defaultMessage: `Couldn’t complete this action. Try again.`,
                      description: `Tooltip when a plugin settings action fails`,
                    }),
                  ),
                  null
                ),
              )
              .finally(() => c(!1)))),
      (t[8] = o),
      (t[9] = s),
      (t[10] = a),
      (t[11] = p),
      (t[12] = m),
      (t[13] = i),
      (t[14] = _))
    : (_ = t[14]);
  let v = _,
    y = s || m,
    b;
  t[15] !== s || t[16] !== y || t[17] !== f
    ? ((b = (0, X.jsx)(S, { color: `secondary`, size: `default`, disabled: y, loading: s, children: f })),
      (t[15] = s),
      (t[16] = y),
      (t[17] = f),
      (t[18] = b))
    : (b = t[18]);
  let x = b,
    C;
  if (Le() && g != null && p != null) {
    let e;
    t[19] !== i.transport.tools || t[20] !== i.transport.type
      ? ((e = i.transport.type === `app-server` ? i.transport.tools : []),
        (t[19] = i.transport.tools),
        (t[20] = i.transport.type),
        (t[21] = e))
      : (e = t[21]);
    let n;
    t[22] !== g || t[23] !== e || t[24] !== p || t[25] !== i
      ? ((n = { ...i, tool: p, resourceUri: g, serverTools: e }),
        (t[22] = g),
        (t[23] = e),
        (t[24] = p),
        (t[25] = i),
        (t[26] = n))
      : (n = t[26]);
    let r = n,
      a;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = []), (t[27] = a)) : (a = t[27]);
    let o;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = {}), (t[28] = o)) : (o = t[28]);
    let c;
    t[29] === p.name
      ? (c = t[30])
      : ((c = { type: `tool`, name: p.name, arguments: o }), (t[29] = p.name), (t[30] = c));
    let u;
    t[31] !== c || t[32] !== f
      ? ((u = { title: f, icons: a, target: c }), (t[31] = c), (t[32] = f), (t[33] = u))
      : (u = t[33]);
    let d;
    (t[34] !== r || t[35] !== x || t[36] !== l || t[37] !== s || t[38] !== v || t[39] !== u
      ? ((d = (0, X.jsx)(qe, {
          action: u,
          pending: s,
          quickActionView: r,
          source: `settings`,
          view: r,
          onOpen: v,
          trigger: x,
          tooltipText: l,
        })),
        (t[34] = r),
        (t[35] = x),
        (t[36] = l),
        (t[37] = s),
        (t[38] = v),
        (t[39] = u),
        (t[40] = d))
      : (d = t[40]),
      (C = d));
  } else {
    let e = l ?? n.description ?? f,
      r = s || m,
      i;
    t[41] === v ? (i = t[42]) : ((i = () => void v()), (t[41] = v), (t[42] = i));
    let a;
    t[43] !== s || t[44] !== r || t[45] !== i || t[46] !== f
      ? ((a = (0, X.jsx)(S, {
          color: `secondary`,
          size: `default`,
          disabled: r,
          loading: s,
          onClick: i,
          children: f,
        })),
        (t[43] = s),
        (t[44] = r),
        (t[45] = i),
        (t[46] = f),
        (t[47] = a))
      : (a = t[47]);
    let o;
    (t[48] !== e || t[49] !== a
      ? ((o = (0, X.jsx)(ne, { tooltipContent: e, children: a })), (t[48] = e), (t[49] = a), (t[50] = o))
      : (o = t[50]),
      (C = o));
  }
  let w;
  return (
    t[51] !== n.description || t[52] !== C || t[53] !== f
      ? ((w = (0, X.jsx)(se, { label: f, description: n.description, control: C })),
        (t[51] = n.description),
        (t[52] = C),
        (t[53] = f),
        (t[54] = w))
      : (w = t[54]),
    w
  );
}
function $e(e) {
  return e.type === `text`;
}
var J, Y, X, et;
function tt() {
  return (tt = e(() => {
    ((J = m()),
      w(),
      (Y = a()),
      x(),
      o(),
      Ae(),
      Me(),
      C(),
      ae(),
      ge(),
      we(),
      i(),
      ue(),
      Oe(),
      Ke(),
      q(),
      (X = s()),
      (et = M({ _codex_apps: M({ requires_explicit_link_id: D(!0) }) })));
  }))();
}
function nt(e) {
  let t = (0, Z.c)(5),
    { view: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = (0, Q.jsx)(rt, { view: n })), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] !== r || t[3] !== n.title
      ? ((i = (0, Q.jsx)(U, { title: n.title, children: r })), (t[2] = r), (t[3] = n.title), (t[4] = i))
      : (i = t[4]),
    i
  );
}
function rt(e) {
  let t = (0, Z.c)(3),
    { view: n, links: r } = e,
    i;
  return (
    t[0] !== r || t[1] !== n
      ? ((i =
          n.transport.type === `hosted`
            ? (0, Q.jsx)(it, { view: n, accountId: n.transport.accountId, links: r })
            : (0, Q.jsx)(at, { view: n })),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function it(e) {
  let t = (0, Z.c)(29),
    { view: n, accountId: r, links: i } = e,
    a = O(G),
    o = O(_e),
    s = O(W),
    c = n.connectorId ?? n.server,
    l;
  t[0] === c ? (l = t[1]) : ((l = L(c)), (t[0] = c), (t[1] = l));
  let u = l,
    d = n.connectorId ?? n.server,
    f;
  t[2] !== r || t[3] !== d || t[4] !== o
    ? ((f = { accountId: r, userId: o, appId: d }), (t[2] = r), (t[3] = d), (t[4] = o), (t[5] = f))
    : (f = t[5]);
  let p = re(We, f),
    m,
    h,
    g,
    _;
  if (t[6] !== r || t[7] !== a || t[8] !== u || t[9] !== i || t[10] !== s || t[11] !== p || t[12] !== o) {
    _ = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = i?.filter(
        (e) => L(e.connector_id) === u && (e.visibility !== `HIDDEN` || e.id.startsWith(`implicit_link::`)),
      );
      if (
        ((h = (e?.find((e) => e.id === p) ?? (e?.length === 1 ? e[0] : void 0))?.id),
        a !== r || s == null || h == null)
      ) {
        let e;
        (t[17] === i ? (e = t[18]) : ((e = i == null ? (0, Q.jsx)(H, {}) : null), (t[17] = i), (t[18] = e)),
          (_ = e));
        break bb0;
      }
      ((m = at), (g = JSON.stringify([r, o, s, h])));
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
      ? ((b = (0, Q.jsx)(m, { view: y }, g)), (t[25] = m), (t[26] = g), (t[27] = y), (t[28] = b))
      : (b = t[28]),
    b
  );
}
function at(e) {
  let t = (0, Z.c)(27),
    { view: n } = e,
    i = r(h),
    a = O(G),
    o = O(W),
    s = n.transport.type === `hosted` ? n.transport.accountId : a,
    c = v(),
    l = [
      `mcp-structured-settings`,
      s,
      o,
      n.transport.type === `hosted` ? n.transport.linkId : null,
      n.hostId,
      n.server,
      n.readTool,
      n.toolScope,
    ],
    u;
  t[0] !== s || t[1] !== i || t[2] !== o
    ? ((u = () => {
        if (i.get(G) !== s || i.get(W) !== o)
          throw new DOMException(`Settings account changed`, `AbortError`);
      }),
      (t[0] = s),
      (t[1] = i),
      (t[2] = o),
      (t[3] = u))
    : (u = t[3]);
  let f = u,
    p;
  t[4] !== f || t[5] !== i || t[6] !== n
    ? ((p = async (e) => {
        let { signal: t } = e;
        f();
        try {
          let e = await K(i, n, n.readTool, {}, t);
          e.isError && (await Promise.reject(Error(`Settings read failed`)));
          let r = Xe.parse(e.structuredContent);
          return (
            I.info(`Loaded app settings`, {
              safe: {
                connectorId: n.connectorId,
                linkId: n.transport.type === `hosted` ? n.transport.linkId : void 0,
                tool: n.readTool,
              },
              sensitive: { hostId: n.hostId, server: n.server },
            }),
            r
          );
        } catch (e) {
          let r = e;
          throw (
            I[t.aborted ? `info` : `warning`](
              t.aborted ? `Cancelled app settings load` : `Failed to load app settings`,
              {
                safe: {
                  ...Ne(r),
                  connectorId: n.connectorId,
                  linkId: n.transport.type === `hosted` ? n.transport.linkId : void 0,
                  tool: n.readTool,
                },
                sensitive: { hostId: n.hostId, server: n.server, error: r },
              },
            ),
            r
          );
        }
      }),
      (t[4] = f),
      (t[5] = i),
      (t[6] = n),
      (t[7] = p))
    : (p = t[7]);
  let {
      data: m,
      error: g,
      isPending: _,
      refetch: y,
    } = d({ queryKey: l, queryFn: p, staleTime: 0, retry: !1, refetchOnWindowFocus: !1 }),
    {
      mutate: b,
      variables: x,
      isPending: C,
      error: w,
      reset: T,
    } = pe({
      mutationKey: l,
      mutationFn: async (e) => {
        (await c.cancelQueries({ queryKey: l }),
          f(),
          await ct(i, n, e, async () => {
            await y({ throwOnError: !0 });
          }));
      },
      retry: !1,
    }),
    ee = fe({ mutationKey: l }),
    E;
  t[8] !== n.transport.tools || t[9] !== n.transport.type || t[10] !== n.updateTool
    ? ((E = n.transport.type === `hosted` || n.transport.tools.some((e) => e.name === n.updateTool)),
      (t[8] = n.transport.tools),
      (t[9] = n.transport.type),
      (t[10] = n.updateTool),
      (t[11] = E))
    : (E = t[11]);
  let D = E,
    k;
  t[12] === _ ? (k = t[13]) : ((k = _ ? (0, Q.jsx)(H, {}) : null), (t[12] = _), (t[13] = k));
  let A;
  t[14] !== g || t[15] !== y || t[16] !== T || t[17] !== w || t[18] !== C
    ? ((A =
        g != null || w != null
          ? (0, Q.jsxs)(`div`, {
              role: `alert`,
              className: `flex items-center gap-2 text-sm text-danger`,
              children: [
                (0, Q.jsx)(P, {
                  id: `mcpSettings.failed`,
                  defaultMessage: `Couldn’t load or save settings. Try again.`,
                  description: `Error when a plugin settings read or update fails; the displayed values revert to the server state`,
                }),
                (0, Q.jsx)(S, {
                  color: `secondary`,
                  size: `default`,
                  disabled: C,
                  onClick: () => {
                    (T(), y());
                  },
                  children: (0, Q.jsx)(P, {
                    id: `mcpSettings.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry loading the current plugin settings`,
                  }),
                }),
              ],
            })
          : null),
      (t[14] = g),
      (t[15] = y),
      (t[16] = T),
      (t[17] = w),
      (t[18] = C),
      (t[19] = A))
    : (A = t[19]);
  let j;
  t[20] === D
    ? (j = t[21])
    : ((j = D
        ? null
        : (0, Q.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-secondary`,
            children: (0, Q.jsx)(P, {
              id: `mcpSettings.updateUnavailable`,
              defaultMessage: `This server’s settings update tool is unavailable`,
              description: `Explains why a plugin settings page is read-only when the advertised update tool is missing`,
            }),
          })),
      (t[20] = D),
      (t[21] = j));
  let M =
      m == null
        ? null
        : (0, Q.jsx)(
            ot,
            {
              definition: m,
              disabled: ee > 0 || g != null || !D,
              pendingChange: C ? x : void 0,
              onChange: (e, t) => b({ name: e, value: t }),
              view: n,
            },
            JSON.stringify(l),
          ),
    N;
  return (
    t[22] !== k || t[23] !== A || t[24] !== j || t[25] !== M
      ? ((N = (0, Q.jsxs)(Q.Fragment, { children: [k, A, j, M] })),
        (t[22] = k),
        (t[23] = A),
        (t[24] = j),
        (t[25] = M),
        (t[26] = N))
      : (N = t[26]),
    N
  );
}
function ot(e) {
  let n = (0, Z.c)(8),
    { definition: r, disabled: i, pendingChange: a, onChange: o, view: s } = e,
    c;
  n[0] !== r || n[1] !== i || n[2] !== o || n[3] !== a || n[4] !== s
    ? ((c = Je(r).map((e, n) =>
        (0, Q.jsxs)(
          ze,
          {
            children: [
              (0, Q.jsx)(ze.Header, {
                title: e.other
                  ? (0, Q.jsx)(P, {
                      id: `mcpSettings.otherSettings`,
                      defaultMessage: `Other settings`,
                      description: `Section containing plugin settings omitted from its declared layout`,
                    })
                  : e.title,
              }),
              (0, Q.jsx)(t, {
                children: e.items.map((e, t) => {
                  if (e.kind === `tool`)
                    return s.transport.type === `hosted`
                      ? null
                      : (0, Q.jsx)(Qe, { action: e, view: s }, JSON.stringify([`tool`, e.tool, t]));
                  let n = e.property,
                    c = r.schema.properties[n];
                  return (0, Q.jsx)(
                    se,
                    {
                      label: c.title,
                      description: c.description,
                      control: (e) => {
                        let t = a?.name === n ? a.value : r.values[n];
                        return typeof t == `boolean`
                          ? (0, Q.jsx)(N, { ...e, checked: t, disabled: i, onChange: (e) => o(n, e) })
                          : c.enum == null
                            ? typeof t != `string` && typeof t != `number`
                              ? null
                              : (0, Q.jsx)(
                                  st,
                                  { ariaProps: e, field: c, value: t, disabled: i, onChange: (e) => o(n, e) },
                                  JSON.stringify([c, t, i]),
                                )
                            : (0, Q.jsx)(ce, {
                                triggerButton: (0, Q.jsx)(ve, { ...e, disabled: i, children: t }),
                                children: c.enum.map((e) =>
                                  (0, Q.jsx)(oe.Item, { onSelect: () => o(n, e), children: e }, e),
                                ),
                              });
                      },
                    },
                    JSON.stringify([`setting`, n]),
                  );
                }),
              }),
            ],
          },
          JSON.stringify([e, n]),
        ),
      )),
      (n[0] = r),
      (n[1] = i),
      (n[2] = o),
      (n[3] = a),
      (n[4] = s),
      (n[5] = c))
    : (c = n[5]);
  let l;
  return (
    n[6] === c
      ? (l = n[7])
      : ((l = (0, Q.jsx)(U, { embedded: !0, fullWidth: !0, children: c })), (n[6] = c), (n[7] = l)),
    l
  );
}
function st(e) {
  let t = (0, Z.c)(24),
    { ariaProps: n, field: r, value: i, disabled: a, onChange: o } = e,
    s = ie(),
    [c, l] = (0, lt.useState)(String(i)),
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
            typeof t != `number` || r.multipleOf == null || p().multipleOf(r.multipleOf).safeParse(t).success,
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
    m = u ? `number` : `text`,
    h;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (e) => {
        (e.currentTarget.setCustomValidity(``), l(e.currentTarget.value));
      }),
      (t[8] = h))
    : (h = t[8]);
  let g, _;
  t[9] === f
    ? ((g = t[10]), (_ = t[11]))
    : ((g = (e) => f(e.currentTarget)),
      (_ = (e) => {
        e.key === `Enter` && (e.preventDefault(), f(e.currentTarget));
      }),
      (t[9] = f),
      (t[10] = g),
      (t[11] = _));
  let v;
  return (
    t[12] !== n ||
    t[13] !== a ||
    t[14] !== c ||
    t[15] !== r.maxLength ||
    t[16] !== r.maximum ||
    t[17] !== r.minLength ||
    t[18] !== r.minimum ||
    t[19] !== u ||
    t[20] !== m ||
    t[21] !== g ||
    t[22] !== _
      ? ((v = (0, Q.jsx)(`div`, {
          className: `w-40`,
          children: (0, Q.jsx)(Pe, {
            ...n,
            variant: `compact`,
            type: m,
            value: c,
            disabled: a,
            required: u,
            min: r.minimum,
            max: r.maximum,
            step: `any`,
            minLength: r.minLength,
            maxLength: r.maxLength,
            onChange: h,
            onBlur: g,
            onKeyDown: _,
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
        (t[20] = m),
        (t[21] = g),
        (t[22] = _),
        (t[23] = v))
      : (v = t[23]),
    v
  );
}
async function ct(e, t, n, r) {
  try {
    He(e, te, { ...V(e, t), feature: `settings`, action: `update` });
    let r = await K(e, t, t.updateTool, { set: { [n.name]: n.value } });
    if (r.isError) throw Error(`Settings update failed`);
    (De.parse(r.structuredContent),
      I.info(`Saved app settings`, {
        safe: {
          connectorId: t.connectorId,
          linkId: t.transport.type === `hosted` ? t.transport.linkId : void 0,
          tool: t.updateTool,
        },
        sensitive: { hostId: t.hostId, server: t.server },
      }));
  } catch (e) {
    throw (
      I.warning(`Failed to save app settings`, {
        safe: {
          ...Ne(e),
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
var Z, lt, Q;
function $() {
  return ($ = e(() => {
    ((Z = m()),
      _(),
      z(),
      T(),
      de(),
      A(),
      l(),
      w(),
      (lt = a()),
      x(),
      o(),
      Ve(),
      C(),
      ee(),
      Se(),
      he(),
      le(),
      me(),
      Ge(),
      Ue(),
      i(),
      Ie(),
      Fe(),
      ue(),
      Ce(),
      E(),
      g(),
      B(),
      q(),
      Ze(),
      tt(),
      (Q = s()));
  }))();
}
export { nt as n, $ as r, rt as t };
//# sourceMappingURL=page-27aa30d7e5b4.js.map
