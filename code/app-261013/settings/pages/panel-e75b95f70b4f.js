import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $It as n,
  ADt as r,
  CPt as i,
  Cot as a,
  EPt as o,
  Hf as s,
  IDt as c,
  Ixt as l,
  Mz as u,
  Nz as d,
  Pxt as f,
  Rpt as p,
  SPt as m,
  TJ as h,
  TLt as g,
  VDt as _,
  Vf as v,
  Vxt as y,
  Xot as b,
  Yot as x,
  bS as S,
  frt as C,
  gH as w,
  hrt as T,
  jDt as E,
  pIt as D,
  pLt as O,
  rst as k,
  t3 as A,
  tK as j,
  urt as M,
  vrt as N,
  vzt as P,
  wot as F,
  xMt as I,
  yS as L,
  yzt as R,
} from "./app-shared-bbfeca5e5737.js";
import {
  GMr as z,
  K6n as B,
  LL as V,
  Qjr as H,
  RL as U,
  XMr as ee,
  YMr as te,
  Zjr as ne,
  d9n as re,
  oPr as ie,
  sPr as ae,
  tNr as oe,
  u9n as se,
  v8n as ce,
} from "./app-initial-5851df3f6cb1.js";
import { i as le, n as W, r as G, t as ue } from "./src-30df4959c626.js";
import { a as de, i as fe, n as pe, r as me, t as he } from "./view-49d726ac8ed7.js";
function ge(e) {
  let n = (0, K.c)(39),
    { connect: r, onError: a, diagnosticId: o } = e,
    l = _(),
    d = (0, q.useRef)(null),
    [f, p] = (0, q.useState)(`signaling`),
    [m, h] = (0, q.useState)(!1),
    [g, v] = (0, q.useState)(`observing`),
    [y, b] = (0, q.useState)(),
    x = (0, q.useRef)(null),
    S;
  n[0] === r
    ? (S = n[1])
    : ((S = (e, t) => {
        if (r == null) throw Error(`Desktop connection is not ready`);
        return r(e, t);
      }),
      (n[0] = r),
      (n[1] = S));
  let C = (0, q.useEffectEvent)(S),
    w = (0, q.useEffectEvent)(a),
    E = r != null,
    D;
  n[2] !== E || n[3] !== C || n[4] !== o || n[5] !== w
    ? ((D = () => {
        let e = d.current;
        if (!E || e == null) return;
        let t = new AbortController(),
          n = !1,
          r = !1,
          a = !1,
          s = !1,
          c,
          l = new Set(),
          u = `signaling`,
          f,
          m = performance.now(),
          g = (e) => {
            n ||
              ((u = e),
              p(e),
              i.info(`Cloud desktop connection stage`, {
                safe: { diagnosticId: o, stage: e, elapsedMs: Math.round(performance.now() - m) },
                sensitive: {},
              }));
          },
          _ = new le(``, null, async (e, n) => {
            let { body: r } = n;
            (t.signal.throwIfAborted(), g(`signaling`));
            try {
              let e = await C(r, t.signal);
              return ((f = e.ok ? void 0 : e.status), e.ok && g(`transport`), e);
            } catch (e) {
              let t = e;
              throw (t instanceof T && (f = t.explicitResponseStatus ?? void 0), t);
            }
          }),
          y = (e) => {
            l.add(e.button);
          },
          b = (e) => {
            l.delete(e.button);
          },
          S = () => {
            for (let e of l) _.mouseUp(e);
            l.clear();
          },
          D = () => {
            (S(),
              e.removeEventListener(`mousedown`, y),
              e.removeEventListener(`mouseup`, b),
              _.setKeyEventSource(null),
              _.setMouseEventSource(null));
          },
          O = () => {
            !n &&
              a &&
              r &&
              s &&
              _.mode === G.CONTROL &&
              (_.setKeyEventSource(document.hasFocus() && document.activeElement === e ? e : null),
              _.setMouseEventSource(e),
              e.addEventListener(`mousedown`, y),
              e.addEventListener(`mouseup`, b));
          },
          k = () => {
            ((s = !1), (c = void 0), D(), a && _.setMode(G.OBSERVE), v(`observing`));
          },
          A = () => {
            ((c = void 0), _.setKeyEventSource(null), S());
          };
        x.current = (t) => {
          if (!n && a && r) {
            if (s) {
              t ?? k();
              return;
            }
            ((s = !0),
              (c = t == null ? void 0 : { x: t.offsetX, y: t.offsetY, button: t.button }),
              e.focus({ preventScroll: !0 }),
              v(`requesting`),
              _.setMode(G.CONTROL));
          }
        };
        let j = () => {
            ((n = !0),
              (a = !1),
              (s = !1),
              (c = void 0),
              clearTimeout(N),
              t.abort(),
              D(),
              _.disconnect(),
              (e.srcObject = null));
          },
          M = (e) => {
            n ||
              (i.info(`Cloud desktop connection failed`, {
                safe: {
                  diagnosticId: o,
                  stage: u,
                  reason: e,
                  httpStatus: f,
                  elapsedMs: Math.round(performance.now() - m),
                },
                sensitive: {},
              }),
              j(),
              w({ stage: u, reason: e, httpStatus: f }));
          },
          N = setTimeout(() => {
            (!r || !a) && M(u === `signaling` ? `signaling` : `connection`);
          }, 2e4),
          P = () => {
            n || r || ((r = !0), g(a ? `connected` : `input`), a && h(!0));
          };
        (_.addEventListener(W.STREAMING, (t) => {
          n || (e.srcObject = t);
        }),
          _.addEventListener(W.DATA_OPENED, () => {
            n || ((a = !0), g(r ? `connected` : `video`), r && h(!0));
          }),
          _.addEventListener(W.MODE_CHANGE, (t) => {
            n ||
              (t === `control` && s
                ? (v(`controlling`),
                  O(),
                  c != null && (_.mouseMoved(c, e), _.mouseDown(c.button), _.mouseUp(c.button), (c = void 0)))
                : ((s = !1), (c = void 0), D(), v(`observing`), t === `control` && _.setMode(G.OBSERVE)));
          }),
          _.addEventListener(W.DATA_CLOSED, () => M(`input`)),
          _.addEventListener(W.ERROR, () => M(u === `signaling` ? `signaling` : `connection`)));
        let F = () => M(`video`);
        return (
          e.addEventListener(`playing`, P),
          e.addEventListener(`error`, F),
          e.addEventListener(`blur`, A),
          window.addEventListener(`blur`, A),
          e.addEventListener(`focus`, O),
          window.addEventListener(`focus`, O),
          _.connect(2e4)
            .then(() => {
              n && _.disconnect();
            })
            .catch(() => M(u === `signaling` ? `signaling` : `connection`)),
          () => {
            ((x.current = null),
              e.removeEventListener(`playing`, P),
              e.removeEventListener(`error`, F),
              e.removeEventListener(`blur`, A),
              window.removeEventListener(`blur`, A),
              e.removeEventListener(`focus`, O),
              window.removeEventListener(`focus`, O),
              j());
          }
        );
      }),
      (n[2] = E),
      (n[3] = C),
      (n[4] = o),
      (n[5] = w),
      (n[6] = D))
    : (D = n[6]);
  let O;
  (n[7] !== E || n[8] !== o ? ((O = [E, o]), (n[7] = E), (n[8] = o), (n[9] = O)) : (O = n[9]),
    (0, q.useEffect)(D, O));
  let k;
  n[10] !== E || n[11] !== f
    ? ((k =
        f !== `connected` &&
        (0, J.jsx)(`span`, {
          className: `min-w-0 flex-1 text-sm text-secondary select-none`,
          role: `status`,
          children: (0, J.jsx)(c, { ...ve[E ? f : `startup`] }),
        })),
      (n[10] = E),
      (n[11] = f),
      (n[12] = k))
    : (k = n[12]);
  let A;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, J.jsxs)(t, {
        color: `outlineSurfaceRaised`,
        size: `imageToolbar`,
        disabled: !0,
        children: [
          (0, J.jsx)(u, { asset: s }),
          (0, J.jsx)(c, {
            id: `cloudDesktop.record`,
            defaultMessage: `Record`,
            description: `Button above the cloud desktop to record a demonstration. Not yet available.`,
          }),
        ],
      })),
      (n[13] = A))
    : (A = n[13]);
  let M;
  n[14] === l
    ? (M = n[15])
    : ((M = l.formatMessage({
        id: `cloudDesktop.popOut`,
        defaultMessage: `Open desktop in a new window`,
        description: `Accessible label for the cloud desktop pop-out button. Not yet available.`,
      })),
      (n[14] = l),
      (n[15] = M));
  let N;
  n[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((N = (0, J.jsx)(j, {})), (n[16] = N)) : (N = n[16]);
  let P;
  n[17] === M
    ? (P = n[18])
    : ((P = (0, J.jsx)(t, {
        color: `outlineSurfaceRaised`,
        size: `iconCircle`,
        disabled: !0,
        "aria-label": M,
        children: N,
      })),
      (n[17] = M),
      (n[18] = P));
  let F;
  n[19] !== k || n[20] !== P
    ? ((F = (0, J.jsxs)(`div`, {
        className: `flex shrink-0 items-center justify-end gap-3 p-4`,
        children: [k, A, P],
      })),
      (n[19] = k),
      (n[20] = P),
      (n[21] = F))
    : (F = n[21]);
  let I = m ? `streaming` : `connecting`,
    L;
  n[22] !== g || n[23] !== m
    ? ((L = m ? { state: g, onToggle: () => x.current?.() } : void 0), (n[22] = g), (n[23] = m), (n[24] = L))
    : (L = n[24]);
  let R;
  n[25] === l
    ? (R = n[26])
    : ((R = l.formatMessage({
        id: `restricted.cloudDesktop.video`,
        defaultMessage: `Live desktop`,
        description: `Accessible label for the interactive Cloud desktop video`,
      })),
      (n[25] = l),
      (n[26] = R));
  let z;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (e) => {
        let { videoWidth: t, videoHeight: n } = e.currentTarget;
        t > 0 && n > 0 && b(t / n);
      }),
      (n[27] = z))
    : (z = n[27]);
  let B;
  n[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => x.current?.(e.nativeEvent)), (n[28] = B))
    : (B = n[28]);
  let V;
  n[29] === R
    ? (V = n[30])
    : ((V = (0, J.jsx)(`video`, {
        ref: d,
        className: `size-full object-contain outline-none`,
        "aria-label": R,
        autoPlay: !0,
        muted: !0,
        playsInline: !0,
        tabIndex: 0,
        onResize: z,
        onPointerDown: _e,
        onClick: B,
      })),
      (n[29] = R),
      (n[30] = V));
  let H;
  n[31] !== y || n[32] !== I || n[33] !== L || n[34] !== V
    ? ((H = (0, J.jsx)(he, {
        connectionState: I,
        control: L,
        orbitName: `Codex`,
        orbitAvatar: null,
        orbitColor: `yellow`,
        videoAspectRatio: y,
        children: V,
      })),
      (n[31] = y),
      (n[32] = I),
      (n[33] = L),
      (n[34] = V),
      (n[35] = H))
    : (H = n[35]);
  let U;
  return (
    n[36] !== H || n[37] !== F
      ? ((U = (0, J.jsxs)(`div`, {
          className: `flex h-full min-h-0 w-full flex-col bg-surface`,
          children: [F, H],
        })),
        (n[36] = H),
        (n[37] = F),
        (n[38] = U))
      : (U = n[38]),
    U
  );
}
function _e(e) {
  (e.stopPropagation(), e.currentTarget.focus());
}
var K, q, J, ve;
function ye() {
  return (ye = e(() => {
    ((K = P()),
      v(),
      ue(),
      (q = R()),
      E(),
      A(),
      d(),
      h(),
      pe(),
      m(),
      N(),
      (J = I()),
      (ve = r({
        startup: {
          id: `restricted.cloudDesktop.status.startup`,
          defaultMessage: `Starting desktop and waiting for connection details…`,
          description: `Status while the remote startup command runs and waits for desktop credentials`,
        },
        signaling: {
          id: `restricted.cloudDesktop.status.signaling`,
          defaultMessage: `Negotiating desktop connection…`,
          description: `Status while exchanging WebRTC signaling with the desktop service`,
        },
        transport: {
          id: `restricted.cloudDesktop.status.transport`,
          defaultMessage: `Connecting video and input…`,
          description: `Status after signaling succeeds while the WebRTC connection opens`,
        },
        video: {
          id: `restricted.cloudDesktop.status.video`,
          defaultMessage: `Waiting for desktop video…`,
          description: `Status when the input channel is open but no video is playing yet`,
        },
        input: {
          id: `restricted.cloudDesktop.status.input`,
          defaultMessage: `Waiting for input channel…`,
          description: `Status when video is playing but the input channel is not open`,
        },
      })));
  }))();
}
function be(e) {
  let t = (0, Y.c)(8),
    { conversationId: n } = e,
    r = y(z),
    i = y(ee),
    a = y(te),
    o = y(V);
  if (o?.conversationId !== n || r == null || i == null || a == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(L, {
            className: `h-full select-none`,
            icon: (0, Z.jsx)(w, {}),
            title: (0, Z.jsx)(c, {
              id: `restricted.cloudDesktop.selectEnvironment`,
              defaultMessage: `Select a Cloud environment to use its desktop`,
              description: `Desktop panel prompt when the task has no selected Cloud environment`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let s = `${r}:${i}:${o.environmentId}`,
    l;
  return (
    t[1] !== r || t[2] !== a || t[3] !== s || t[4] !== o.environmentId || t[5] !== o.hostId || t[6] !== i
      ? ((l = (0, Z.jsx)(
          xe,
          {
            accountId: r,
            userId: i,
            authenticatedUserId: a,
            hostId: o.hostId,
            environmentId: o.environmentId,
          },
          s,
        )),
        (t[1] = r),
        (t[2] = a),
        (t[3] = s),
        (t[4] = o.environmentId),
        (t[5] = o.hostId),
        (t[6] = i),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function xe(e) {
  let r = (0, Y.c)(45),
    { accountId: o, userId: s, authenticatedUserId: u, environmentId: d, hostId: f } = e,
    m = l(a),
    { data: h, isError: _, refetch: v } = y(se),
    [x, S] = (0, X.useState)(0),
    [C] = (0, X.useState)(Se),
    T = `${C}:${x}`,
    E = h?.chatGptApiBaseUrl,
    k;
  r[0] !== o || r[1] !== x || r[2] !== d || r[3] !== f || r[4] !== E || r[5] !== s
    ? ((k = [`cloud-desktop-start`, o, s, d, f, E, x]),
      (r[0] = o),
      (r[1] = x),
      (r[2] = d),
      (r[3] = f),
      (r[4] = E),
      (r[5] = s),
      (r[6] = k))
    : (k = r[6]);
  let A = h != null,
    j;
  r[7] !== h?.chatGptApiBaseUrl || r[8] !== T || r[9] !== d || r[10] !== f || r[11] !== m
    ? ((j = async (e) => {
        let { signal: t } = e,
          r = fe(h?.chatGptApiBaseUrl),
          a = {
            environmentId: d,
            command: D(g())
              .min(1)
              .catch([`python3`, `-c`, me])
              .parse(m.get(H, `204800026`)?.value.start_command),
            timeoutMs: 105e3,
            outputBytesCap: 4096,
          },
          o = performance.now();
        i.info(`Cloud desktop startup requested`, {
          safe: { diagnosticId: T },
          sensitive: { environmentId: d, hostId: f },
        });
        let s = await p(m.get(B, f).sendRequest(`command/exec`, a), t).catch(() => {
          throw (
            i.info(`Cloud desktop startup request failed`, {
              safe: { diagnosticId: T, aborted: t.aborted, elapsedMs: Math.round(performance.now() - o) },
              sensitive: {},
            }),
            new Q(`startup`)
          );
        });
        if (
          (i.info(`Cloud desktop startup completed`, {
            safe: { diagnosticId: T, exitCode: s.exitCode, elapsedMs: Math.round(performance.now() - o) },
            sensitive: {},
          }),
          s.exitCode !== 0)
        )
          throw new Q(
            { 10: `runtimeMissing`, 11: `runtimeUser`, 12: `startupTimeout` }[s.exitCode] ?? `startup`,
          );
        try {
          let e = O({
            status: n(`ready`),
            session_id: g().min(1),
            bearer_token: g().regex(/^[A-Za-z0-9_-]{32,128}$/),
          }).parse(JSON.parse(s.stdout));
          return (
            i.info(`Cloud desktop connection details ready`, { safe: { diagnosticId: T }, sensitive: {} }),
            { ...e, connectionUrl: r }
          );
        } catch {
          throw (
            i.info(`Cloud desktop connection details invalid`, { safe: { diagnosticId: T }, sensitive: {} }),
            new Q(`credentials`)
          );
        }
      }),
      (r[7] = h?.chatGptApiBaseUrl),
      (r[8] = T),
      (r[9] = d),
      (r[10] = f),
      (r[11] = m),
      (r[12] = j))
    : (j = r[12]);
  let N;
  r[13] !== k || r[14] !== A || r[15] !== j
    ? ((N = { queryKey: k, enabled: A, staleTime: 1 / 0, gcTime: 0, retry: !1, queryFn: j }),
      (r[13] = k),
      (r[14] = A),
      (r[15] = j),
      (r[16] = N))
    : (N = r[16]);
  let { data: P, error: F } = b(N),
    [I, R] = (0, X.useState)(null);
  if (I != null || _ || F != null) {
    let e = `startup`;
    I == null ? (_ ? (e = `configuration`) : F instanceof Q && (e = F.reason)) : (e = I.stage);
    let n, i;
    r[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Z.jsx)(w, {})),
        (i = (0, Z.jsx)(c, {
          id: `restricted.cloudDesktop.unavailable`,
          defaultMessage: `Desktop unavailable`,
          description: `Title when a Cloud environment desktop cannot be connected`,
        })),
        (r[17] = n),
        (r[18] = i))
      : ((n = r[17]), (i = r[18]));
    let a = Ce[e],
      o;
    r[19] === a ? (o = r[20]) : ((o = (0, Z.jsx)(c, { ...a })), (r[19] = a), (r[20] = o));
    let s;
    r[21] === I
      ? (s = r[22])
      : ((s =
          I?.httpStatus != null &&
          (0, Z.jsx)(c, {
            id: `restricted.cloudDesktop.httpStatus`,
            defaultMessage: `Desktop service returned HTTP {status}`,
            description: `HTTP status returned by the desktop signaling service`,
            values: { status: I.httpStatus },
          })),
        (r[21] = I),
        (r[22] = s));
    let l;
    r[23] !== s || r[24] !== o
      ? ((l = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [o, s] })),
        (r[23] = s),
        (r[24] = o),
        (r[25] = l))
      : (l = r[25]);
    let u;
    r[26] !== x || r[27] !== _ || r[28] !== v
      ? ((u = () => {
          (_ && v(), R(null), S(x + 1));
        }),
        (r[26] = x),
        (r[27] = _),
        (r[28] = v),
        (r[29] = u))
      : (u = r[29]);
    let d;
    r[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, Z.jsx)(c, {
          id: `restricted.cloudDesktop.retry`,
          defaultMessage: `Try again`,
          description: `Retry connecting to the Cloud desktop`,
        })),
        (r[30] = d))
      : (d = r[30]);
    let f;
    r[31] === u
      ? (f = r[32])
      : ((f = (0, Z.jsx)(t, { color: `outline`, onClick: u, children: d })), (r[31] = u), (r[32] = f));
    let p;
    return (
      r[33] !== l || r[34] !== f
        ? ((p = (0, Z.jsx)(L, {
            className: `h-full select-none`,
            icon: n,
            title: i,
            description: l,
            actions: f,
          })),
          (r[33] = l),
          (r[34] = f),
          (r[35] = p))
        : (p = r[35]),
      p
    );
  }
  let z;
  r[36] !== o || r[37] !== u || r[38] !== P || r[39] !== d
    ? ((z =
        P == null
          ? void 0
          : (e, t) => {
              let n = new URL(P.connectionUrl);
              return (
                n.searchParams.set(`source`, `cloud`),
                n.searchParams.set(`environment_id`, d),
                n.searchParams.set(`session_id`, P.session_id),
                M.getInstance().fetch(n.href, {
                  method: `POST`,
                  body: e,
                  headers: {
                    ...ie(),
                    "Content-Type": `application/sdp`,
                    "X-Codex-Desktop-Token": P.bearer_token,
                  },
                  expectedIdentity: { accountId: o, userId: u },
                  signal: t,
                  retry: !1,
                })
              );
            }),
      (r[36] = o),
      (r[37] = u),
      (r[38] = P),
      (r[39] = d),
      (r[40] = z))
    : (z = r[40]);
  let V;
  return (
    r[41] !== x || r[42] !== T || r[43] !== z
      ? ((V = (0, Z.jsx)(ge, { diagnosticId: T, onError: R, connect: z }, x)),
        (r[41] = x),
        (r[42] = T),
        (r[43] = z),
        (r[44] = V))
      : (V = r[44]),
    V
  );
}
function Se() {
  return crypto.randomUUID();
}
var Y, X, Z, Q, Ce;
function $() {
  return ($ = e(() => {
    ((Y = P()),
      x(),
      f(),
      k(),
      (X = R()),
      E(),
      o(),
      ce(),
      oe(),
      A(),
      S(),
      h(),
      re(),
      F(),
      ne(),
      m(),
      ae(),
      C(),
      de(),
      U(),
      ye(),
      (Z = I()),
      (Q = class extends Error {
        reason;
        constructor(e) {
          (super(e), (this.reason = e));
        }
      }),
      (Ce = r({
        runtimeMissing: {
          id: `restricted.cloudDesktop.error.runtimeMissing`,
          defaultMessage: `This environment image does not include the desktop runtime. Use an environment with desktop support`,
          description: `Explains that retrying cannot fix an image without the desktop launcher`,
        },
        runtimeUser: {
          id: `restricted.cloudDesktop.error.runtimeUser`,
          defaultMessage: `The desktop runtime requires the agent user (UID 1000). This environment uses a different user`,
          description: `Explains an incompatible execution user for the desktop runtime`,
        },
        startupTimeout: {
          id: `restricted.cloudDesktop.error.startupTimeout`,
          defaultMessage: `The desktop did not become ready within 95 seconds`,
          description: `Desktop startup timed out before credentials became available`,
        },
        startup: {
          id: `restricted.cloudDesktop.error.startup`,
          defaultMessage: `The remote desktop startup command failed. Check that the environment is online and try again`,
          description: `The command execution request or desktop launcher failed`,
        },
        credentials: {
          id: `restricted.cloudDesktop.error.credentials`,
          defaultMessage: `The desktop started but did not return valid connection details`,
          description: `Startup output could not be parsed as desktop connection credentials`,
        },
        configuration: {
          id: `restricted.cloudDesktop.error.configuration`,
          defaultMessage: `Could not load the app’s connection settings`,
          description: `Failed to read the app backend configuration before starting the desktop`,
        },
        signaling: {
          id: `restricted.cloudDesktop.error.signaling`,
          defaultMessage: `Could not negotiate a connection with the desktop service`,
          description: `Desktop failed during WebRTC signaling`,
        },
        transport: {
          id: `restricted.cloudDesktop.error.transport`,
          defaultMessage: `Signaling completed, but the desktop video and input connection failed`,
          description: `Desktop failed after signaling before media and data were ready`,
        },
        video: {
          id: `restricted.cloudDesktop.error.video`,
          defaultMessage: `The input channel opened, but desktop video did not start`,
          description: `Desktop failed while waiting for video`,
        },
        input: {
          id: `restricted.cloudDesktop.error.input`,
          defaultMessage: `Desktop video started, but the input channel failed to open`,
          description: `Desktop failed while waiting for data channel`,
        },
        connected: {
          id: `restricted.cloudDesktop.error.disconnected`,
          defaultMessage: `The desktop connection was interrupted. Try connecting again`,
          description: `An established desktop connection was lost`,
        },
      })));
  }))();
}
$();
export { be as CloudDesktopPanel };
//# sourceMappingURL=panel-e75b95f70b4f.js.map
