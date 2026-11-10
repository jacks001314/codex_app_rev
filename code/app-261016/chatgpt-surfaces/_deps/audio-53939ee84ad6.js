import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $B as n,
  $St as r,
  Al as i,
  Am as a,
  DB as o,
  FBt as s,
  LNt as c,
  Ml as l,
  OB as u,
  PBt as d,
  RFt as f,
  TY as p,
  X3 as m,
  XOt as h,
  Y3 as g,
  Z3 as _,
  ZSt as ee,
  e6 as v,
  jl as y,
  kl as b,
  km as x,
  nB as S,
  nCt as C,
  okt as w,
  rB as T,
  zFt as E,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as D,
  Gzn as te,
  JYn as O,
  Kzn as ne,
  MOr as re,
  VPn as ie,
  WYn as ae,
  _ as k,
  aYn as A,
  dVn as oe,
  f0n as j,
  g as M,
  m as se,
  o0n as ce,
  rYn as le,
  xYn as ue,
  yYn as de,
  zOr as fe,
} from "./app-initial-ad16eaadf81f.js";
function pe(e) {
  let r = (0, me.c)(68),
    {
      durationSeconds: s,
      fileName: c,
      mimeType: u,
      resolveSrc: d,
      resolveDownloadSrc: f,
      onPlaybackError: p,
      src: h,
      isLoading: _,
    } = e,
    ee = _ !== void 0 && _,
    v = w(),
    y = (0, N.useRef)(null),
    b = (0, N.useRef)(null),
    x = (0, N.useRef)(null),
    C = (0, N.useRef)(!1),
    T = (0, N.useRef)(!1),
    E = (0, N.useRef)(0),
    [D, te] = (0, N.useState)(),
    [O, ne] = (0, N.useState)(),
    [re, ie] = (0, N.useState)(!1),
    [ae, k] = (0, N.useState)(!1),
    [A, oe] = (0, N.useState)(!1),
    [j, M] = (0, N.useState)(!1),
    [ce, le] = (0, N.useState)(!1),
    [ue, de] = (0, N.useState)(0),
    [fe, pe] = (0, N.useState)(),
    F,
    I;
  (r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = () => {
        let e = y.current;
        return () => {
          ((T.current = !1), (E.current += 1), b.current?.abort(), x.current?.abort(), e?.pause());
        };
      }),
      (I = []),
      (r[0] = F),
      (r[1] = I))
    : ((F = r[0]), (I = r[1])),
    (0, N.useEffect)(F, I));
  let L;
  r[2] !== p || r[3] !== d
    ? ((L = async function () {
        let e = y.current;
        if (e == null || d == null || b.current != null) return !1;
        let t = new AbortController();
        return (
          (b.current = t),
          ie(!0),
          d(t.signal)
            .then((n) => !t.signal.aborted && ((e.src = n), te(n), !0))
            .catch((e) => (t.signal.aborted || p?.(e), !1))
            .finally(() => {
              t.signal.aborted || ((b.current = null), ie(!1));
            })
        );
      }),
      (r[2] = p),
      (r[3] = d),
      (r[4] = L))
    : (L = r[4]);
  let R = L,
    z;
  r[5] !== O || r[6] !== p || r[7] !== f
    ? ((z = async function () {
        if (((T.current = !1), oe(!0), f == null || O != null || x.current != null)) return;
        let e = new AbortController();
        return (
          (x.current = e),
          k(!0),
          f(e.signal)
            .then((t) => {
              e.signal.aborted || ne(t);
            })
            .catch((t) => {
              e.signal.aborted || p?.(t);
            })
            .finally(() => {
              e.signal.aborted || ((x.current = null), k(!1));
            })
        );
      }),
      (r[5] = O),
      (r[6] = p),
      (r[7] = f),
      (r[8] = z))
    : (z = r[8]);
  let B = z,
    V;
  r[9] === p
    ? (V = r[10])
    : ((V = async function () {
        let e = y.current;
        if (e == null || !T.current) return;
        let t = (E.current += 1);
        try {
          await e.play();
        } catch (e) {
          let n = e;
          t === E.current && T.current && ((T.current = !1), p?.(n));
        }
      }),
      (r[9] = p),
      (r[10] = V));
  let H = V,
    U;
  r[11] !== R || r[12] !== u || r[13] !== H || r[14] !== D || r[15] !== B || r[16] !== h
    ? ((U = async function () {
        let e = y.current;
        if (e != null) {
          if (!e.paused) {
            ((T.current = !1), e.pause());
            return;
          }
          if (((T.current = !0), h == null && D == null && !(await R()))) {
            T.current = !1;
            return;
          }
          if (u != null && e.canPlayType(u) === ``) {
            await B();
            return;
          }
          await H();
        }
      }),
      (r[11] = R),
      (r[12] = u),
      (r[13] = H),
      (r[14] = D),
      (r[15] = B),
      (r[16] = h),
      (r[17] = U))
    : (U = r[17]);
  let he = U,
    ge;
  r[18] !== c || r[19] !== v || r[20] !== j
    ? ((ge = j
        ? v.formatMessage(
            {
              id: `chatgpt.audioAttachment.pause`,
              defaultMessage: `Pause {fileName}`,
              description: `Accessible label and tooltip for pausing a sent audio attachment; the filename distinguishes recordings in the same message`,
            },
            { fileName: c },
          )
        : v.formatMessage(
            {
              id: `chatgpt.audioAttachment.play`,
              defaultMessage: `Play {fileName}`,
              description: `Accessible label and tooltip for playing a sent audio attachment; the filename distinguishes recordings in the same message`,
            },
            { fileName: c },
          )),
      (r[18] = c),
      (r[19] = v),
      (r[20] = j),
      (r[21] = ge))
    : (ge = r[21]);
  let _e = ge,
    ve;
  r[22] !== c || r[23] !== v
    ? ((ve = v.formatMessage(
        {
          id: `chatgpt.audioAttachment.download`,
          defaultMessage: `Download {fileName}`,
          description: `Accessible label and tooltip for downloading a sent audio attachment when its format cannot play in this browser`,
        },
        { fileName: c },
      )),
      (r[22] = c),
      (r[23] = v),
      (r[24] = ve))
    : (ve = r[24]);
  let W = ve,
    ye = O ?? (f == null ? (h ?? D) : void 0),
    G = ee || re || ae,
    be;
  r[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, P.jsx)(o, { asset: i })), (r[25] = be))
    : (be = r[25]);
  let K = be;
  if (G) {
    let e;
    (r[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, P.jsx)(t, { className: `icon-xs` })), (r[26] = e))
      : (e = r[26]),
      (K = e));
  } else if (A) {
    let e;
    (r[27] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, P.jsx)(n, {})), (r[27] = e)) : (e = r[27]),
      (K = e));
  } else if (j) {
    let e;
    (r[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, P.jsx)(o, { asset: l })), (r[28] = e))
      : (e = r[28]),
      (K = e));
  }
  let xe, Se, Ce, q, we;
  r[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (e) => {
        Number.isFinite(e.currentTarget.duration) && pe(e.currentTarget.duration);
      }),
      (Se = () => {
        (M(!0), le(!0));
      }),
      (Ce = () => M(!1)),
      (q = () => {
        ((T.current = !1), M(!1), le(!1), de(0));
      }),
      (we = (e) => de(e.currentTarget.currentTime)),
      (r[29] = xe),
      (r[30] = Se),
      (r[31] = Ce),
      (r[32] = q),
      (r[33] = we))
    : ((xe = r[29]), (Se = r[30]), (Ce = r[31]), (q = r[32]), (we = r[33]));
  let J;
  r[34] !== R || r[35] !== p || r[36] !== H || r[37] !== d || r[38] !== B
    ? ((J = (e) => {
        let t = e.currentTarget.error;
        if ((M(!1), t?.code === MediaError.MEDIA_ERR_NETWORK && !C.current && d != null)) {
          ((C.current = !0),
            (E.current += 1),
            te(void 0),
            e.currentTarget.removeAttribute(`src`),
            R().then((e) => {
              y.current != null && (e ? H() : B());
            }));
          return;
        }
        (B(), p?.(t ?? Error(`Audio playback failed`)));
      }),
      (r[34] = R),
      (r[35] = p),
      (r[36] = H),
      (r[37] = d),
      (r[38] = B),
      (r[39] = J))
    : (J = r[39]);
  let Y;
  r[40] !== h || r[41] !== J
    ? ((Y = (0, P.jsx)(`audio`, {
        ref: y,
        src: h,
        preload: `metadata`,
        onDurationChange: xe,
        onPlay: Se,
        onPause: Ce,
        onEnded: q,
        onTimeUpdate: we,
        onError: J,
      })),
      (r[40] = h),
      (r[41] = J),
      (r[42] = Y))
    : (Y = r[42]);
  let Te = A ? W : _e,
    X;
  r[43] !== G ||
  r[44] !== K ||
  r[45] !== W ||
  r[46] !== ye ||
  r[47] !== c ||
  r[48] !== _e ||
  r[49] !== d ||
  r[50] !== B ||
  r[51] !== h ||
  r[52] !== he ||
  r[53] !== A
    ? ((X =
        A && ye != null
          ? (0, P.jsx)(m, {
              size: `iconCircleSm`,
              color: `secondary`,
              radius: `full`,
              href: ye,
              download: c,
              "aria-label": W,
              children: (0, P.jsx)(n, {}),
            })
          : (0, P.jsx)(g, {
              size: `iconCircleSm`,
              color: `secondary`,
              radius: `full`,
              "aria-label": A ? W : _e,
              disabled: G || (!A && h == null && d == null),
              onClick: () => {
                A ? B() : he();
              },
              children: K,
            })),
      (r[43] = G),
      (r[44] = K),
      (r[45] = W),
      (r[46] = ye),
      (r[47] = c),
      (r[48] = _e),
      (r[49] = d),
      (r[50] = B),
      (r[51] = h),
      (r[52] = he),
      (r[53] = A),
      (r[54] = X))
    : (X = r[54]);
  let Z;
  r[55] !== Te || r[56] !== X
    ? ((Z = (0, P.jsx)(S, { tooltipContent: Te, children: X })), (r[55] = Te), (r[56] = X), (r[57] = Z))
    : (Z = r[57]);
  let Ee;
  r[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (0, P.jsx)(o, { asset: a, className: `shrink-0 text-tertiary` })), (r[58] = Ee))
    : (Ee = r[58]);
  let De = ce ? ue : (fe ?? s),
    Q;
  r[59] === De ? (Q = r[60]) : ((Q = se(De)), (r[59] = De), (r[60] = Q));
  let $;
  r[61] === Q
    ? ($ = r[62])
    : (($ = (0, P.jsx)(`span`, {
        className: `min-w-8 shrink-0 text-xs font-medium tabular-nums`,
        children: Q,
      })),
      (r[61] = Q),
      (r[62] = $));
  let Oe;
  return (
    r[63] !== G || r[64] !== Y || r[65] !== Z || r[66] !== $
      ? ((Oe = (0, P.jsxs)(`div`, {
          className: `flex h-9 w-fit max-w-full items-center gap-2 rounded-full bg-surface-tertiary px-2 text-default select-none`,
          "aria-busy": G,
          "data-testid": `audio-attachment-player`,
          children: [Y, Z, Ee, $],
        })),
        (r[63] = G),
        (r[64] = Y),
        (r[65] = Z),
        (r[66] = $),
        (r[67] = Oe))
      : (Oe = r[67]),
    Oe
  );
}
var me, N, P;
function F() {
  return (F = e(() => {
    ((me = d()), y(), b(), x(), (N = s()), h(), _(), u(), p(), v(), T(), k(), (P = c()));
  }))();
}
function I(e) {
  let t = (0, z.c)(26),
    { attachment: n, conversationId: i, target: a } = e,
    o = r(re),
    s = C(D, i),
    c = C(ce, i),
    l = C(j, i),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = new Set()), (t[0] = u)) : (u = t[0]);
  let d = (0, B.useRef)(u),
    f,
    p;
  (t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = () => {
        let e = d.current;
        return () => {
          for (let t of e) URL.revokeObjectURL(t);
          e.clear();
        };
      }),
      (p = []),
      (t[1] = f),
      (t[2] = p))
    : ((f = t[1]), (p = t[2])),
    (0, B.useEffect)(f, p));
  let m;
  t[3] !== c || t[4] !== o.query || t[5] !== o.queryClient || t[6] !== s || t[7] !== l || t[8] !== a
    ? ((m = async (e, t) => {
        t.throwIfAborted();
        let n =
            a.type === `download-url` && a.fileId != null && !a.isSharedLibraryFile
              ? { type: `file-id`, fileId: a.fileId, libraryFileId: a.libraryFileId }
              : a,
          r = [`chatgpt-user-message-audio`, s, c, l, n, e],
          i = () => {
            o.queryClient.cancelQueries({ queryKey: r, exact: !0 });
          };
        return (
          t.addEventListener(`abort`, i, { once: !0 }),
          o.queryClient
            .fetchQuery({
              queryKey: r,
              gcTime: 0,
              staleTime: 0,
              retry: R,
              retryDelay: L,
              queryFn: async (t) => {
                let { signal: r } = t,
                  i = c == null || !oe(c) || l != null ? null : await o.query.getOrFetch(te, c);
                r.throwIfAborted();
                let a = i?.gizmo.gizmo_snorlax_type;
                return le({
                  checkContextScopesForConversationId: a === `potion` || a === `locked_chats` ? s : void 0,
                  conversationId: s,
                  downloadIntent: e,
                  gizmoId: c,
                  sharedConversationId: l,
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
              let a = await de(n, t);
              t.throwIfAborted();
              let o = URL.createObjectURL(a);
              return (d.current.add(o), o);
            })
            .finally(() => {
              t.removeEventListener(`abort`, i);
            })
        );
      }),
      (t[3] = c),
      (t[4] = o.query),
      (t[5] = o.queryClient),
      (t[6] = s),
      (t[7] = l),
      (t[8] = a),
      (t[9] = m))
    : (m = t[9]);
  let h = m,
    g = `${s ?? i}:${c ?? ``}:${l ?? ``}:${n.mountedLibraryFileId ?? n.fileId ?? ``}:${n.downloadUrl ?? ``}`,
    _ = n.durationSeconds,
    ee = n.name,
    v = n.mountedLibraryMimeType ?? n.mimeType,
    y;
  t[10] !== n.name || t[11] !== v
    ? ((y = M({ fileName: n.name, mimeType: v })), (t[10] = n.name), (t[11] = v), (t[12] = y))
    : (y = t[12]);
  let b;
  t[13] === n.fileId
    ? (b = t[14])
    : ((b = (e) => {
        E.warning(`ChatGPT audio attachment failed to play`, {
          safe: {},
          sensitive: { error: e, fileId: n.fileId },
        });
      }),
      (t[13] = n.fileId),
      (t[14] = b));
  let x, S;
  t[15] === h
    ? ((x = t[16]), (S = t[17]))
    : ((x = (e) => h(!0, e)), (S = (e) => h(!1, e)), (t[15] = h), (t[16] = x), (t[17] = S));
  let w;
  return (
    t[18] !== n.durationSeconds ||
    t[19] !== n.name ||
    t[20] !== b ||
    t[21] !== x ||
    t[22] !== S ||
    t[23] !== g ||
    t[24] !== y
      ? ((w = (0, V.jsx)(
          pe,
          {
            durationSeconds: _,
            fileName: ee,
            mimeType: y,
            onPlaybackError: b,
            resolveDownloadSrc: x,
            resolveSrc: S,
          },
          g,
        )),
        (t[18] = n.durationSeconds),
        (t[19] = n.name),
        (t[20] = b),
        (t[21] = x),
        (t[22] = S),
        (t[23] = g),
        (t[24] = y),
        (t[25] = w))
      : (w = t[25]),
    w
  );
}
function L(e) {
  return H[e] ?? 3e4;
}
function R(e, t) {
  return t instanceof ae && e < H.length;
}
var z, B, V, H;
function U() {
  return (U = e(() => {
    ((z = d()),
      ee(),
      (B = s()),
      fe(),
      ue(),
      f(),
      k(),
      F(),
      A(),
      ne(),
      ie(),
      O(),
      (V = c()),
      (H = [250, 1e3, 2e3, 4e3, 8e3, 15e3, 3e4]));
  }))();
}
U();
export { I as ChatGptUserMessageAudioAttachment };
//# sourceMappingURL=audio-53939ee84ad6.js.map
