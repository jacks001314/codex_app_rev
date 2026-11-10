import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  CPt as n,
  Gc as r,
  Ixt as i,
  Jc as a,
  Kc as o,
  Mz as s,
  Nz as c,
  Pxt as l,
  SPt as u,
  TJ as d,
  VDt as ee,
  cz as f,
  e3 as p,
  i3 as m,
  iB as h,
  jDt as g,
  nm as te,
  qc as _,
  r3 as v,
  sz as y,
  t3 as b,
  tm as x,
  vzt as S,
  xMt as C,
  yzt as w,
  zxt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as E,
  IGn as ne,
  NZn as D,
  PGn as re,
  QGn as ie,
  RLn as ae,
  XGn as oe,
  _ as O,
  _In as k,
  bKn as se,
  g as A,
  gwr as j,
  m as ce,
  pZn as le,
  vIn as ue,
  wKn as de,
  yjn as fe,
  zZn as pe,
} from "./app-initial-5851df3f6cb1.js";
function me(e) {
  let n = (0, he.c)(68),
    {
      durationSeconds: r,
      fileName: i,
      mimeType: c,
      resolveSrc: l,
      resolveDownloadSrc: u,
      onPlaybackError: d,
      src: f,
      isLoading: m,
    } = e,
    g = m !== void 0 && m,
    _ = ee(),
    b = (0, M.useRef)(null),
    x = (0, M.useRef)(null),
    S = (0, M.useRef)(null),
    C = (0, M.useRef)(!1),
    w = (0, M.useRef)(!1),
    T = (0, M.useRef)(0),
    [E, ne] = (0, M.useState)(),
    [D, re] = (0, M.useState)(),
    [ie, ae] = (0, M.useState)(!1),
    [oe, O] = (0, M.useState)(!1),
    [k, se] = (0, M.useState)(!1),
    [A, j] = (0, M.useState)(!1),
    [le, ue] = (0, M.useState)(!1),
    [de, fe] = (0, M.useState)(0),
    [pe, me] = (0, M.useState)(),
    P,
    F;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = () => {
        let e = b.current;
        return () => {
          ((w.current = !1), (T.current += 1), x.current?.abort(), S.current?.abort(), e?.pause());
        };
      }),
      (F = []),
      (n[0] = P),
      (n[1] = F))
    : ((P = n[0]), (F = n[1])),
    (0, M.useEffect)(P, F));
  let I;
  n[2] !== d || n[3] !== l
    ? ((I = async function () {
        let e = b.current;
        if (e == null || l == null || x.current != null) return !1;
        let t = new AbortController();
        return (
          (x.current = t),
          ae(!0),
          l(t.signal)
            .then((n) => !t.signal.aborted && ((e.src = n), ne(n), !0))
            .catch((e) => (t.signal.aborted || d?.(e), !1))
            .finally(() => {
              t.signal.aborted || ((x.current = null), ae(!1));
            })
        );
      }),
      (n[2] = d),
      (n[3] = l),
      (n[4] = I))
    : (I = n[4]);
  let L = I,
    R;
  n[5] !== D || n[6] !== d || n[7] !== u
    ? ((R = async function () {
        if (((w.current = !1), se(!0), u == null || D != null || S.current != null)) return;
        let e = new AbortController();
        return (
          (S.current = e),
          O(!0),
          u(e.signal)
            .then((t) => {
              e.signal.aborted || re(t);
            })
            .catch((t) => {
              e.signal.aborted || d?.(t);
            })
            .finally(() => {
              e.signal.aborted || ((S.current = null), O(!1));
            })
        );
      }),
      (n[5] = D),
      (n[6] = d),
      (n[7] = u),
      (n[8] = R))
    : (R = n[8]);
  let z = R,
    B;
  n[9] === d
    ? (B = n[10])
    : ((B = async function () {
        let e = b.current;
        if (e == null || !w.current) return;
        let t = (T.current += 1);
        try {
          await e.play();
        } catch (e) {
          let n = e;
          t === T.current && w.current && ((w.current = !1), d?.(n));
        }
      }),
      (n[9] = d),
      (n[10] = B));
  let V = B,
    H;
  n[11] !== L || n[12] !== c || n[13] !== V || n[14] !== E || n[15] !== z || n[16] !== f
    ? ((H = async function () {
        let e = b.current;
        if (e != null) {
          if (!e.paused) {
            ((w.current = !1), e.pause());
            return;
          }
          if (((w.current = !0), f == null && E == null && !(await L()))) {
            w.current = !1;
            return;
          }
          if (c != null && e.canPlayType(c) === ``) {
            await z();
            return;
          }
          await V();
        }
      }),
      (n[11] = L),
      (n[12] = c),
      (n[13] = V),
      (n[14] = E),
      (n[15] = z),
      (n[16] = f),
      (n[17] = H))
    : (H = n[17]);
  let ge = H,
    U;
  n[18] !== i || n[19] !== _ || n[20] !== A
    ? ((U = A
        ? _.formatMessage(
            {
              id: `chatgpt.audioAttachment.pause`,
              defaultMessage: `Pause {fileName}`,
              description: `Accessible label and tooltip for pausing a sent audio attachment; the filename distinguishes recordings in the same message`,
            },
            { fileName: i },
          )
        : _.formatMessage(
            {
              id: `chatgpt.audioAttachment.play`,
              defaultMessage: `Play {fileName}`,
              description: `Accessible label and tooltip for playing a sent audio attachment; the filename distinguishes recordings in the same message`,
            },
            { fileName: i },
          )),
      (n[18] = i),
      (n[19] = _),
      (n[20] = A),
      (n[21] = U))
    : (U = n[21]);
  let _e = U,
    ve;
  n[22] !== i || n[23] !== _
    ? ((ve = _.formatMessage(
        {
          id: `chatgpt.audioAttachment.download`,
          defaultMessage: `Download {fileName}`,
          description: `Accessible label and tooltip for downloading a sent audio attachment when its format cannot play in this browser`,
        },
        { fileName: i },
      )),
      (n[22] = i),
      (n[23] = _),
      (n[24] = ve))
    : (ve = n[24]);
  let W = ve,
    ye = D ?? (u == null ? (f ?? E) : void 0),
    G = g || ie || oe,
    be;
  n[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, N.jsx)(s, { asset: o })), (n[25] = be))
    : (be = n[25]);
  let K = be;
  if (G) {
    let e;
    (n[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, N.jsx)(v, { className: `icon-xs` })), (n[26] = e))
      : (e = n[26]),
      (K = e));
  } else if (k) {
    let e;
    (n[27] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, N.jsx)(h, {})), (n[27] = e)) : (e = n[27]),
      (K = e));
  } else if (A) {
    let e;
    (n[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, N.jsx)(s, { asset: a })), (n[28] = e))
      : (e = n[28]),
      (K = e));
  }
  let xe, Se, Ce, we, Te;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (e) => {
        Number.isFinite(e.currentTarget.duration) && me(e.currentTarget.duration);
      }),
      (Se = () => {
        (j(!0), ue(!0));
      }),
      (Ce = () => j(!1)),
      (we = () => {
        ((w.current = !1), j(!1), ue(!1), fe(0));
      }),
      (Te = (e) => fe(e.currentTarget.currentTime)),
      (n[29] = xe),
      (n[30] = Se),
      (n[31] = Ce),
      (n[32] = we),
      (n[33] = Te))
    : ((xe = n[29]), (Se = n[30]), (Ce = n[31]), (we = n[32]), (Te = n[33]));
  let q;
  n[34] !== L || n[35] !== d || n[36] !== V || n[37] !== l || n[38] !== z
    ? ((q = (e) => {
        let t = e.currentTarget.error;
        if ((j(!1), t?.code === MediaError.MEDIA_ERR_NETWORK && !C.current && l != null)) {
          ((C.current = !0),
            (T.current += 1),
            ne(void 0),
            e.currentTarget.removeAttribute(`src`),
            L().then((e) => {
              b.current != null && (e ? V() : z());
            }));
          return;
        }
        (z(), d?.(t ?? Error(`Audio playback failed`)));
      }),
      (n[34] = L),
      (n[35] = d),
      (n[36] = V),
      (n[37] = l),
      (n[38] = z),
      (n[39] = q))
    : (q = n[39]);
  let J;
  n[40] !== f || n[41] !== q
    ? ((J = (0, N.jsx)(`audio`, {
        ref: b,
        src: f,
        preload: `metadata`,
        onDurationChange: xe,
        onPlay: Se,
        onPause: Ce,
        onEnded: we,
        onTimeUpdate: Te,
        onError: q,
      })),
      (n[40] = f),
      (n[41] = q),
      (n[42] = J))
    : (J = n[42]);
  let Ee = k ? W : _e,
    Y;
  n[43] !== G ||
  n[44] !== K ||
  n[45] !== W ||
  n[46] !== ye ||
  n[47] !== i ||
  n[48] !== _e ||
  n[49] !== l ||
  n[50] !== z ||
  n[51] !== f ||
  n[52] !== ge ||
  n[53] !== k
    ? ((Y =
        k && ye != null
          ? (0, N.jsx)(p, {
              size: `iconCircleSm`,
              color: `secondary`,
              radius: `full`,
              href: ye,
              download: i,
              "aria-label": W,
              children: (0, N.jsx)(h, {}),
            })
          : (0, N.jsx)(t, {
              size: `iconCircleSm`,
              color: `secondary`,
              radius: `full`,
              "aria-label": k ? W : _e,
              disabled: G || (!k && f == null && l == null),
              onClick: () => {
                k ? z() : ge();
              },
              children: K,
            })),
      (n[43] = G),
      (n[44] = K),
      (n[45] = W),
      (n[46] = ye),
      (n[47] = i),
      (n[48] = _e),
      (n[49] = l),
      (n[50] = z),
      (n[51] = f),
      (n[52] = ge),
      (n[53] = k),
      (n[54] = Y))
    : (Y = n[54]);
  let X;
  n[55] !== Ee || n[56] !== Y
    ? ((X = (0, N.jsx)(y, { tooltipContent: Ee, children: Y })), (n[55] = Ee), (n[56] = Y), (n[57] = X))
    : (X = n[57]);
  let De;
  n[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (0, N.jsx)(s, { asset: te, className: `shrink-0 text-tertiary` })), (n[58] = De))
    : (De = n[58]);
  let Oe = le ? de : (pe ?? r),
    Z;
  n[59] === Oe ? (Z = n[60]) : ((Z = ce(Oe)), (n[59] = Oe), (n[60] = Z));
  let Q;
  n[61] === Z
    ? (Q = n[62])
    : ((Q = (0, N.jsx)(`span`, {
        className: `min-w-8 shrink-0 text-xs font-medium tabular-nums`,
        children: Z,
      })),
      (n[61] = Z),
      (n[62] = Q));
  let $;
  return (
    n[63] !== G || n[64] !== J || n[65] !== X || n[66] !== Q
      ? (($ = (0, N.jsxs)(`div`, {
          className: `flex h-9 w-fit max-w-full items-center gap-2 rounded-full bg-surface-tertiary px-2 text-default select-none`,
          "aria-busy": G,
          "data-testid": `audio-attachment-player`,
          children: [J, X, De, Q],
        })),
        (n[63] = G),
        (n[64] = J),
        (n[65] = X),
        (n[66] = Q),
        (n[67] = $))
      : ($ = n[67]),
    $
  );
}
var he, M, N;
function P() {
  return (P = e(() => {
    ((he = S()), _(), r(), x(), (M = w()), g(), b(), c(), d(), m(), f(), O(), (N = C()));
  }))();
}
function F(e) {
  let t = (0, R.c)(26),
    { attachment: r, conversationId: a, target: o } = e,
    s = i(j),
    c = T(le, a),
    l = T(D, a),
    u = T(pe, a),
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = new Set()), (t[0] = d)) : (d = t[0]);
  let ee = (0, z.useRef)(d),
    f,
    p;
  (t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = () => {
        let e = ee.current;
        return () => {
          for (let t of e) URL.revokeObjectURL(t);
          e.clear();
        };
      }),
      (p = []),
      (t[1] = f),
      (t[2] = p))
    : ((f = t[1]), (p = t[2])),
    (0, z.useEffect)(f, p));
  let m;
  t[3] !== l || t[4] !== s.query || t[5] !== s.queryClient || t[6] !== c || t[7] !== u || t[8] !== o
    ? ((m = async (e, t) => {
        t.throwIfAborted();
        let n =
            o.type === `download-url` && o.fileId != null && !o.isSharedLibraryFile
              ? { type: `file-id`, fileId: o.fileId, libraryFileId: o.libraryFileId }
              : o,
          r = [`chatgpt-user-message-audio`, c, l, u, n, e],
          i = () => {
            s.queryClient.cancelQueries({ queryKey: r, exact: !0 });
          };
        return (
          t.addEventListener(`abort`, i, { once: !0 }),
          s.queryClient
            .fetchQuery({
              queryKey: r,
              gcTime: 0,
              staleTime: 0,
              retry: L,
              retryDelay: I,
              queryFn: async (t) => {
                let { signal: r } = t,
                  i = l == null || !ae(l) || u != null ? null : await s.query.getOrFetch(k, l);
                r.throwIfAborted();
                let a = i?.gizmo.gizmo_snorlax_type;
                return re({
                  checkContextScopesForConversationId: a === `potion` || a === `locked_chats` ? c : void 0,
                  conversationId: c,
                  downloadIntent: e,
                  gizmoId: l,
                  sharedConversationId: u,
                  showInline: !e,
                  signal: r,
                  target: n,
                });
              },
            })
            .then(async (n) => {
              t.throwIfAborted();
              let r = new URL(n.downloadUrl, `https://chatgpt.com`),
                i =
                  r.protocol === `https:` &&
                  r.hostname.endsWith(`.oaiusercontent.com`) &&
                  r.port === `` &&
                  r.username === `` &&
                  r.password === ``;
              if (n.requestHeaders == null && (e || i)) return n.downloadUrl;
              let a = await oe(n, t);
              t.throwIfAborted();
              let o = URL.createObjectURL(a);
              return (ee.current.add(o), o);
            })
            .finally(() => {
              t.removeEventListener(`abort`, i);
            })
        );
      }),
      (t[3] = l),
      (t[4] = s.query),
      (t[5] = s.queryClient),
      (t[6] = c),
      (t[7] = u),
      (t[8] = o),
      (t[9] = m))
    : (m = t[9]);
  let h = m,
    g = `${c ?? a}:${l ?? ``}:${u ?? ``}:${r.mountedLibraryFileId ?? r.fileId ?? ``}:${r.downloadUrl ?? ``}`,
    te = r.durationSeconds,
    _ = r.name,
    v = r.mountedLibraryMimeType ?? r.mimeType,
    y;
  t[10] !== r.name || t[11] !== v
    ? ((y = A({ fileName: r.name, mimeType: v })), (t[10] = r.name), (t[11] = v), (t[12] = y))
    : (y = t[12]);
  let b;
  t[13] === r.fileId
    ? (b = t[14])
    : ((b = (e) => {
        n.warning(`ChatGPT audio attachment failed to play`, {
          safe: {},
          sensitive: { error: e, fileId: r.fileId },
        });
      }),
      (t[13] = r.fileId),
      (t[14] = b));
  let x, S;
  t[15] === h
    ? ((x = t[16]), (S = t[17]))
    : ((x = (e) => h(!0, e)), (S = (e) => h(!1, e)), (t[15] = h), (t[16] = x), (t[17] = S));
  let C;
  return (
    t[18] !== r.durationSeconds ||
    t[19] !== r.name ||
    t[20] !== b ||
    t[21] !== x ||
    t[22] !== S ||
    t[23] !== g ||
    t[24] !== y
      ? ((C = (0, B.jsx)(
          me,
          {
            durationSeconds: te,
            fileName: _,
            mimeType: y,
            onPlaybackError: b,
            resolveDownloadSrc: x,
            resolveSrc: S,
          },
          g,
        )),
        (t[18] = r.durationSeconds),
        (t[19] = r.name),
        (t[20] = b),
        (t[21] = x),
        (t[22] = S),
        (t[23] = g),
        (t[24] = y),
        (t[25] = C))
      : (C = t[25]),
    C
  );
}
function I(e) {
  return V[e] ?? 3e4;
}
function L(e, t) {
  return t instanceof se && e < V.length;
}
var R, z, B, V;
function H() {
  return (H = e(() => {
    ((R = S()),
      l(),
      (z = w()),
      E(),
      ie(),
      u(),
      O(),
      P(),
      ne(),
      ue(),
      fe(),
      de(),
      (B = C()),
      (V = [250, 1e3, 2e3, 4e3, 8e3, 15e3, 3e4]));
  }))();
}
H();
export { F as ChatGptUserMessageAudioAttachment };
//# sourceMappingURL=audio-6a6025b5575c.js.map
