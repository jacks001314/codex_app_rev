const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./usb-passkey-dialog-e76eaeb4d0d0.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $mt as n,
  $st as r,
  DB as i,
  Eit as a,
  F3 as o,
  FBt as s,
  HFt as c,
  I3 as l,
  JS as u,
  LNt as d,
  Mst as f,
  NLt as ee,
  OB as p,
  OFt as m,
  Oit as h,
  PBt as g,
  Pit as _,
  QK as v,
  Qst as y,
  RFt as b,
  TY as x,
  VRt as S,
  XOt as C,
  Y3 as w,
  YOt as T,
  YS as E,
  Z3 as D,
  ZSt as O,
  _p as k,
  ast as A,
  fU as j,
  hRt as M,
  iCt as N,
  ist as te,
  jit as P,
  jst as F,
  kFt as I,
  kLt as L,
  kRt as R,
  okt as ne,
  sct as z,
  tkt as B,
  vp as re,
  zFt as V,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as H,
  Mnr as U,
  O9n as W,
  bIr as G,
  bLr as K,
  bR as ie,
  eer as ae,
  jnr as oe,
  oRr as se,
  sRr as ce,
  wLr as le,
  xIr as ue,
  xR as de,
  zRr as fe,
} from "./app-initial-ad16eaadf81f.js";
import { a as q, i as J, n as pe, o as me, r as he, t as ge } from "./webauthn-7a4dd16f405b.js";
import { a as _e, i as ve, n as ye, r as be, t as xe } from "./view-4bc339113b58.js";
function Se(e) {
  let t = (0, we.c)(45),
    { connect: n, browserUnavailable: r, onError: a, diagnosticId: o } = e,
    s = ne(),
    c = (0, Y.useRef)(null),
    l = (0, Y.useRef)(null),
    [u, d] = (0, Y.useState)(null),
    [f, ee] = (0, Y.useState)(`signaling`),
    [p, m] = (0, Y.useState)(!1),
    [h, g] = (0, Y.useState)(`observing`),
    [_, y] = (0, Y.useState)(),
    b = (0, Y.useRef)(null),
    x;
  t[0] === n
    ? (x = t[1])
    : ((x = (e, t) => {
        if (n == null) throw Error(`Desktop connection is not ready`);
        return n(e, t);
      }),
      (t[0] = n),
      (t[1] = x));
  let S = (0, Y.useEffectEvent)(x),
    C = (0, Y.useEffectEvent)(a),
    T = n != null,
    E;
  t[2] !== T || t[3] !== S || t[4] !== o || t[5] !== C
    ? ((E = () => {
        let e = c.current;
        if (!T || e == null) return;
        let t = new AbortController(),
          n = !1,
          r = !1,
          i = !1,
          a = !1,
          s,
          u = new Set(),
          f = `signaling`,
          p,
          h = performance.now(),
          _ = (e) => {
            n ||
              ((f = e),
              ee(e),
              V.info(`Cloud desktop connection stage`, {
                safe: { diagnosticId: o, stage: e, elapsedMs: Math.round(performance.now() - h) },
                sensitive: {},
              }));
          },
          v = new me(``, null, async (e, n) => {
            let { body: r } = n;
            (t.signal.throwIfAborted(), _(`signaling`));
            try {
              let e = await S(r, t.signal);
              return ((p = e.ok ? void 0 : e.status), e.ok && _(`transport`), e);
            } catch (e) {
              let t = e;
              throw (t instanceof P && (p = t.explicitResponseStatus ?? void 0), t);
            }
          }),
          y = (e) => {
            u.add(e.button);
          },
          x = (e) => {
            u.delete(e.button);
          },
          w = () => {
            for (let e of u) v.mouseUp(e);
            u.clear();
          },
          E = () => {
            (w(),
              e.removeEventListener(`mousedown`, y),
              e.removeEventListener(`mouseup`, x),
              v.setKeyEventSource(null),
              v.setMouseEventSource(null));
          },
          D = () => {
            !n &&
              i &&
              r &&
              a &&
              !l.current?.isPromptOpen &&
              v.mode === q.CONTROL &&
              (v.setKeyEventSource(document.hasFocus() && document.activeElement === e ? e : null),
              v.setMouseEventSource(e),
              e.addEventListener(`mousedown`, y),
              e.addEventListener(`mouseup`, x));
          },
          O = () => {
            ((a = !1), (s = void 0), l.current?.cancel(), E(), i && v.setMode(q.OBSERVE), g(`observing`));
          },
          k = () => {
            ((s = void 0), v.setKeyEventSource(null), w());
          },
          A = () => {
            (l.current?.cancel(), k());
          };
        b.current = (t) => {
          if (!n && i && r) {
            if (a) {
              t ?? O();
              return;
            }
            ((a = !0),
              (s = t == null ? void 0 : { x: t.offsetX, y: t.offsetY, button: t.button }),
              e.focus({ preventScroll: !0 }),
              g(`requesting`),
              v.setMode(q.CONTROL));
          }
        };
        let j = () => {
            ((n = !0),
              (i = !1),
              (a = !1),
              (s = void 0),
              l.current?.dispose(),
              (l.current = null),
              clearTimeout(N),
              t.abort(),
              E(),
              v.disconnect(),
              (e.srcObject = null));
          },
          M = (e) => {
            n ||
              (V.info(`Cloud desktop connection failed`, {
                safe: {
                  diagnosticId: o,
                  stage: f,
                  reason: e,
                  httpStatus: p,
                  elapsedMs: Math.round(performance.now() - h),
                },
                sensitive: {},
              }),
              j(),
              C({ stage: f, reason: e, httpStatus: p }));
          },
          N = setTimeout(() => {
            (!r || !i) && M(f === `signaling` ? `signaling` : `connection`);
          }, 2e4),
          F = () => {
            n || r || ((r = !0), _(i ? `connected` : `input`), i && m(!0));
          };
        (v.addEventListener(J.STREAMING, (t) => {
          n || (e.srcObject = t);
        }),
          v.addEventListener(J.DATA_OPENED, (t) => {
            if (!n) {
              i = !0;
              let o = te?.localWebAuthn;
              (o != null &&
                (l.current?.dispose(),
                (l.current = new ge(
                  o,
                  t,
                  () =>
                    !n &&
                    i &&
                    r &&
                    a &&
                    document.hasFocus() &&
                    (document.activeElement === e || !!l.current?.isPromptOpen) &&
                    v.mode === q.CONTROL,
                  (e) => {
                    (d(e), e == null ? D() : E());
                  },
                  () => {
                    a && e.focus({ preventScroll: !0 });
                  },
                ))),
                _(r ? `connected` : `video`),
                r && m(!0));
            }
          }),
          v.addEventListener(J.MESSAGE, (e) => {
            l.current?.handleMessage(e);
          }),
          v.addEventListener(J.MODE_CHANGE, (t) => {
            n ||
              (t === `control` && a
                ? (g(`controlling`),
                  D(),
                  s != null && (v.mouseMoved(s, e), v.mouseDown(s.button), v.mouseUp(s.button), (s = void 0)))
                : ((a = !1),
                  (s = void 0),
                  l.current?.cancel(),
                  E(),
                  g(`observing`),
                  t === `control` && v.setMode(q.OBSERVE)));
          }),
          v.addEventListener(J.DATA_CLOSED, () => M(`input`)),
          v.addEventListener(J.ERROR, () => M(f === `signaling` ? `signaling` : `connection`)));
        let I = () => M(`video`);
        return (
          e.addEventListener(`playing`, F),
          e.addEventListener(`error`, I),
          e.addEventListener(`blur`, k),
          window.addEventListener(`blur`, A),
          e.addEventListener(`focus`, D),
          window.addEventListener(`focus`, D),
          v
            .connect(2e4)
            .then(() => {
              n && v.disconnect();
            })
            .catch(() => M(f === `signaling` ? `signaling` : `connection`)),
          () => {
            ((b.current = null),
              e.removeEventListener(`playing`, F),
              e.removeEventListener(`error`, I),
              e.removeEventListener(`blur`, k),
              window.removeEventListener(`blur`, A),
              e.removeEventListener(`focus`, D),
              window.removeEventListener(`focus`, D),
              j());
          }
        );
      }),
      (t[2] = T),
      (t[3] = S),
      (t[4] = o),
      (t[5] = C),
      (t[6] = E))
    : (E = t[6]);
  let D;
  (t[7] !== T || t[8] !== o ? ((D = [T, o]), (t[7] = T), (t[8] = o), (t[9] = D)) : (D = t[9]),
    (0, Y.useEffect)(E, D));
  let O;
  t[10] !== T || t[11] !== f
    ? ((O =
        f !== `connected` &&
        (0, X.jsx)(`span`, {
          className: `min-w-0 flex-1 text-sm text-secondary select-none`,
          role: `status`,
          children: (0, X.jsx)(B, { ...Ee[T ? f : `startup`] }),
        })),
      (t[10] = T),
      (t[11] = f),
      (t[12] = O))
    : (O = t[12]);
  let k;
  t[13] === r
    ? (k = t[14])
    : ((k =
        r &&
        (0, X.jsx)(`span`, {
          role: `alert`,
          children: (0, X.jsx)(B, {
            id: `cloudDesktop.browserUnavailable`,
            defaultMessage: `Desktop connected, but the managed browser could not start`,
            description: `The cloud desktop is usable but its managed browser failed to initialize`,
          }),
        })),
      (t[13] = r),
      (t[14] = k));
  let A;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, X.jsxs)(w, {
        color: `outlineSurfaceRaised`,
        size: `imageToolbar`,
        disabled: !0,
        children: [
          (0, X.jsx)(i, { asset: re }),
          (0, X.jsx)(B, {
            id: `cloudDesktop.record`,
            defaultMessage: `Record`,
            description: `Button above the cloud desktop to record a demonstration. Not yet available.`,
          }),
        ],
      })),
      (t[15] = A))
    : (A = t[15]);
  let j;
  t[16] === s
    ? (j = t[17])
    : ((j = s.formatMessage({
        id: `cloudDesktop.popOut`,
        defaultMessage: `Open desktop in a new window`,
        description: `Accessible label for the cloud desktop pop-out button. Not yet available.`,
      })),
      (t[16] = s),
      (t[17] = j));
  let M;
  t[18] === Symbol.for(`react.memo_cache_sentinel`) ? ((M = (0, X.jsx)(v, {})), (t[18] = M)) : (M = t[18]);
  let N;
  t[19] === j
    ? (N = t[20])
    : ((N = (0, X.jsx)(w, {
        color: `outlineSurfaceRaised`,
        size: `iconCircle`,
        disabled: !0,
        "aria-label": j,
        children: M,
      })),
      (t[19] = j),
      (t[20] = N));
  let F;
  t[21] !== O || t[22] !== k || t[23] !== N
    ? ((F = (0, X.jsxs)(`div`, {
        className: `flex shrink-0 items-center justify-end gap-3 p-4`,
        children: [O, k, A, N],
      })),
      (t[21] = O),
      (t[22] = k),
      (t[23] = N),
      (t[24] = F))
    : (F = t[24]);
  let I = p ? `streaming` : `connecting`,
    L;
  t[25] !== h || t[26] !== p
    ? ((L = p ? { state: h, onToggle: () => b.current?.() } : void 0), (t[25] = h), (t[26] = p), (t[27] = L))
    : (L = t[27]);
  let R;
  t[28] === s
    ? (R = t[29])
    : ((R = s.formatMessage({
        id: `restricted.cloudDesktop.video`,
        defaultMessage: `Live desktop`,
        description: `Accessible label for the interactive Cloud desktop video`,
      })),
      (t[28] = s),
      (t[29] = R));
  let z;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (e) => {
        let { videoWidth: t, videoHeight: n } = e.currentTarget;
        t > 0 && n > 0 && y(t / n);
      }),
      (t[30] = z))
    : (z = t[30]);
  let H;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (e) => b.current?.(e.nativeEvent)), (t[31] = H))
    : (H = t[31]);
  let U;
  t[32] === R
    ? (U = t[33])
    : ((U = (0, X.jsx)(`video`, {
        ref: c,
        className: `size-full object-contain outline-none`,
        "aria-label": R,
        autoPlay: !0,
        muted: !0,
        playsInline: !0,
        tabIndex: 0,
        onResize: z,
        onPointerDown: Ce,
        onClick: H,
      })),
      (t[32] = R),
      (t[33] = U));
  let W;
  t[34] !== _ || t[35] !== I || t[36] !== L || t[37] !== U
    ? ((W = (0, X.jsx)(xe, {
        connectionState: I,
        control: L,
        orbitName: `Codex`,
        orbitAvatar: null,
        orbitColor: `yellow`,
        videoAspectRatio: _,
        children: U,
      })),
      (t[34] = _),
      (t[35] = I),
      (t[36] = L),
      (t[37] = U),
      (t[38] = W))
    : (W = t[38]);
  let G;
  t[39] === u
    ? (G = t[40])
    : ((G =
        u != null &&
        (0, X.jsx)(Te, {
          details: u.details,
          prompt: u.prompt,
          onRespond: async (e) => {
            await l.current?.respond(e);
          },
          onCancel: () => l.current?.cancel(),
        })),
      (t[39] = u),
      (t[40] = G));
  let K;
  return (
    t[41] !== F || t[42] !== W || t[43] !== G
      ? ((K = (0, X.jsxs)(`div`, {
          className: `flex h-full min-h-0 w-full flex-col bg-surface`,
          children: [F, W, G],
        })),
        (t[41] = F),
        (t[42] = W),
        (t[43] = G),
        (t[44] = K))
      : (K = t[44]),
    K
  );
}
function Ce(e) {
  (e.stopPropagation(), e.currentTarget.focus());
}
var we, Y, X, Te, Ee;
function De() {
  return (De = e(() => {
    ((we = g()),
      k(),
      he(),
      (Y = s()),
      C(),
      pe(),
      D(),
      p(),
      x(),
      o(),
      ye(),
      A(),
      b(),
      _(),
      (X = d()),
      I(),
      (Te = l(() =>
        m(
          () => import(`./usb-passkey-dialog-e76eaeb4d0d0.js`).then((e) => e.UsbPasskeyDialog),
          __vite__mapDeps([0, 1, 2, 3, 4, 5]),
          import.meta.url,
        ),
      )),
      (Ee = T({
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
function Oe(e) {
  let t = (0, je.c)(8),
    { conversationId: n } = e,
    r = N(fe),
    i = N(H),
    a = N(K),
    o = N(ie);
  if (o?.conversationId !== n || r == null || i == null || a == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(u, {
            className: `h-full select-none`,
            icon: (0, Q.jsx)(j, {}),
            title: (0, Q.jsx)(B, {
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
    c;
  return (
    t[1] !== r || t[2] !== a || t[3] !== s || t[4] !== o.environmentId || t[5] !== o.hostId || t[6] !== i
      ? ((c = (0, Q.jsx)(
          ke,
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
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function ke(e) {
  let r = (0, je.c)(46),
    { accountId: i, userId: o, authenticatedUserId: s, environmentId: c, hostId: l } = e,
    d = t(y),
    { data: p, isError: m, refetch: h } = N(oe),
    [g, _] = (0, Z.useState)(0),
    [v] = (0, Z.useState)(Ae),
    b = `${v}:${g}`,
    x = p?.chatGptApiBaseUrl,
    C;
  r[0] !== i || r[1] !== g || r[2] !== c || r[3] !== l || r[4] !== x || r[5] !== o
    ? ((C = [`cloud-desktop-start`, i, o, c, l, x, g]),
      (r[0] = i),
      (r[1] = g),
      (r[2] = c),
      (r[3] = l),
      (r[4] = x),
      (r[5] = o),
      (r[6] = C))
    : (C = r[6]);
  let T = p != null,
    E;
  r[7] !== p?.chatGptApiBaseUrl || r[8] !== b || r[9] !== c || r[10] !== l || r[11] !== d
    ? ((E = async (e) => {
        let { signal: t } = e,
          r = ve(p?.chatGptApiBaseUrl),
          i = {
            environmentId: c,
            command: L(S())
              .min(1)
              .catch([`python3`, `-c`, be])
              .parse(d.get(ue, `204800026`)?.value.start_command),
            timeoutMs: 235e3,
            outputBytesCap: 4096,
          },
          a = performance.now();
        V.info(`Cloud desktop startup requested`, {
          safe: { diagnosticId: b },
          sensitive: { environmentId: c, hostId: l },
        });
        let o = await n(d.get(W, l).sendRequest(`command/exec`, i), t).catch(() => {
          throw (
            V.info(`Cloud desktop startup request failed`, {
              safe: { diagnosticId: b, aborted: t.aborted, elapsedMs: Math.round(performance.now() - a) },
              sensitive: {},
            }),
            new $(`startup`)
          );
        });
        if (
          (V.info(`Cloud desktop startup completed`, {
            safe: { diagnosticId: b, exitCode: o.exitCode, elapsedMs: Math.round(performance.now() - a) },
            sensitive: {},
          }),
          o.exitCode !== 0)
        )
          throw new $(
            { 10: `runtimeMissing`, 11: `runtimeUser`, 12: `startupTimeout` }[o.exitCode] ?? `startup`,
          );
        try {
          let e = R({
            status: M(`ready`),
            browser_ready: ee().optional(),
            session_id: S().min(1),
            bearer_token: S().regex(/^[A-Za-z0-9_-]{32,128}$/),
          }).parse(JSON.parse(o.stdout));
          return (
            V.info(`Cloud desktop connection details ready`, { safe: { diagnosticId: b }, sensitive: {} }),
            { ...e, connectionUrl: r }
          );
        } catch {
          throw (
            V.info(`Cloud desktop connection details invalid`, { safe: { diagnosticId: b }, sensitive: {} }),
            new $(`credentials`)
          );
        }
      }),
      (r[7] = p?.chatGptApiBaseUrl),
      (r[8] = b),
      (r[9] = c),
      (r[10] = l),
      (r[11] = d),
      (r[12] = E))
    : (E = r[12]);
  let D;
  r[13] !== C || r[14] !== T || r[15] !== E
    ? ((D = { queryKey: C, enabled: T, staleTime: 1 / 0, gcTime: 0, retry: !1, queryFn: E }),
      (r[13] = C),
      (r[14] = T),
      (r[15] = E),
      (r[16] = D))
    : (D = r[16]);
  let { data: O, error: k } = f(D),
    [A, te] = (0, Z.useState)(null);
  if (A != null || m || k != null) {
    let e = `startup`;
    A == null ? (m ? (e = `configuration`) : k instanceof $ && (e = k.reason)) : (e = A.stage);
    let t, n;
    r[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(j, {})),
        (n = (0, Q.jsx)(B, {
          id: `restricted.cloudDesktop.unavailable`,
          defaultMessage: `Desktop unavailable`,
          description: `Title when a Cloud environment desktop cannot be connected`,
        })),
        (r[17] = t),
        (r[18] = n))
      : ((t = r[17]), (n = r[18]));
    let i = Me[e],
      a;
    r[19] === i ? (a = r[20]) : ((a = (0, Q.jsx)(B, { ...i })), (r[19] = i), (r[20] = a));
    let o;
    r[21] === A
      ? (o = r[22])
      : ((o =
          A?.httpStatus != null &&
          (0, Q.jsx)(B, {
            id: `restricted.cloudDesktop.httpStatus`,
            defaultMessage: `Desktop service returned HTTP {status}`,
            description: `HTTP status returned by the desktop signaling service`,
            values: { status: A.httpStatus },
          })),
        (r[21] = A),
        (r[22] = o));
    let s;
    r[23] !== o || r[24] !== a
      ? ((s = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [a, o] })),
        (r[23] = o),
        (r[24] = a),
        (r[25] = s))
      : (s = r[25]);
    let c;
    r[26] !== g || r[27] !== m || r[28] !== h
      ? ((c = () => {
          (m && h(), te(null), _(g + 1));
        }),
        (r[26] = g),
        (r[27] = m),
        (r[28] = h),
        (r[29] = c))
      : (c = r[29]);
    let l;
    r[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, Q.jsx)(B, {
          id: `restricted.cloudDesktop.retry`,
          defaultMessage: `Try again`,
          description: `Retry connecting to the Cloud desktop`,
        })),
        (r[30] = l))
      : (l = r[30]);
    let d;
    r[31] === c
      ? (d = r[32])
      : ((d = (0, Q.jsx)(w, { color: `outline`, onClick: c, children: l })), (r[31] = c), (r[32] = d));
    let f;
    return (
      r[33] !== s || r[34] !== d
        ? ((f = (0, Q.jsx)(u, {
            className: `h-full select-none`,
            icon: t,
            title: n,
            description: s,
            actions: d,
          })),
          (r[33] = s),
          (r[34] = d),
          (r[35] = f))
        : (f = r[35]),
      f
    );
  }
  let P = O?.browser_ready === !1,
    F;
  r[36] !== i || r[37] !== s || r[38] !== O || r[39] !== c
    ? ((F =
        O == null
          ? void 0
          : (e, t) => {
              let n = new URL(O.connectionUrl);
              return (
                n.searchParams.set(`source`, `cloud`),
                n.searchParams.set(`environment_id`, c),
                n.searchParams.set(`session_id`, O.session_id),
                a
                  .getInstance()
                  .fetch(n.href, {
                    method: `POST`,
                    body: e,
                    headers: {
                      ...se(),
                      "Content-Type": `application/sdp`,
                      "X-Codex-Desktop-Token": O.bearer_token,
                    },
                    expectedIdentity: { accountId: i, userId: s },
                    signal: t,
                    retry: !1,
                  })
              );
            }),
      (r[36] = i),
      (r[37] = s),
      (r[38] = O),
      (r[39] = c),
      (r[40] = F))
    : (F = r[40]);
  let I;
  return (
    r[41] !== g || r[42] !== b || r[43] !== P || r[44] !== F
      ? ((I = (0, Q.jsx)(Se, { diagnosticId: b, onError: te, browserUnavailable: P, connect: F }, g)),
        (r[41] = g),
        (r[42] = b),
        (r[43] = P),
        (r[44] = F),
        (r[45] = I))
      : (I = r[45]),
    I
  );
}
function Ae() {
  return crypto.randomUUID();
}
var je, Z, Q, $, Me;
function Ne() {
  return (Ne = e(() => {
    ((je = g()),
      F(),
      O(),
      z(),
      (Z = s()),
      C(),
      c(),
      ae(),
      le(),
      D(),
      E(),
      x(),
      U(),
      r(),
      G(),
      b(),
      ce(),
      h(),
      _e(),
      de(),
      De(),
      (Q = d()),
      ($ = class extends Error {
        reason;
        constructor(e) {
          (super(e), (this.reason = e));
        }
      }),
      (Me = T({
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
Ne();
export { Oe as CloudDesktopPanel };
//# sourceMappingURL=panel-d16715215625.js.map
