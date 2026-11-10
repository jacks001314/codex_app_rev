const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ["./decoder-f966011fa07a.js", "./decoder-c080d3c57107.js", "./rolldown-runtime-2d059c5e81f4.js"]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as t,
  MNt as n,
  NNt as r,
  OFt as i,
  Oit as a,
  PBt as o,
  SCt as s,
  TCt as c,
  Vrt as l,
  Y3 as u,
  Z3 as d,
  ZSt as f,
  jit as p,
  kFt as m,
  qrt as h,
  yCt as g,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Au as _,
  B1n as v,
  CIr as y,
  MOr as b,
  Nu as x,
  SIr as S,
  SYn as C,
  VPn as w,
  c6n as T,
  ct as E,
  gYn as D,
  iRr as O,
  lt as k,
  tyr as A,
  xYn as j,
  zOr as M,
} from "./app-initial-ad16eaadf81f.js";
function N(e) {
  let t = (0, F.c)(28),
    r,
    i,
    a,
    o,
    s;
  t[0] === e
    ? ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]), (s = t[5]))
    : (({ appearance: o, children: r, className: i, iconOnly: s, ...a } = e),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s));
  let c = o === void 0 ? `compact` : o,
    l = s !== void 0 && s,
    d = c === `blurred`,
    f,
    p,
    m,
    h,
    g,
    _;
  if (t[6] !== i || t[7] !== l || t[8] !== d || t[9] !== a) {
    let e = n(
      `h-6 !bg-media-background/45 !px-2 !py-0 !text-media-foreground enabled:hover:!bg-media-background/60`,
      L,
    );
    (d && l
      ? (e = `group/gallery-action pointer-events-auto h-10 w-10 !bg-transparent !p-0 !text-media-foreground enabled:hover:!bg-transparent`)
      : d &&
        (e = `pointer-events-auto h-10 !bg-media-background/15 !px-3 !py-0 font-medium !text-media-foreground backdrop-blur-md enabled:hover:!bg-media-background/30 focus:!bg-media-background/30`),
      (f = u),
      (p = a),
      (m = `secondary`),
      (h = d ? `full` : `default`),
      (g = d ? `default` : `icon`),
      (_ = n(e, i)),
      (t[6] = i),
      (t[7] = l),
      (t[8] = d),
      (t[9] = a),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m),
      (t[13] = h),
      (t[14] = g),
      (t[15] = _));
  } else ((f = t[10]), (p = t[11]), (m = t[12]), (h = t[13]), (g = t[14]), (_ = t[15]));
  let v;
  t[16] !== r || t[17] !== l || t[18] !== d
    ? ((v =
        d && l
          ? (0, I.jsx)(`span`, {
              className: `flex size-9 items-center justify-center rounded-full bg-media-background/15 backdrop-blur-md group-hover/gallery-action:bg-media-background/30 group-focus/gallery-action:bg-media-background/30`,
              children: r,
            })
          : r),
      (t[16] = r),
      (t[17] = l),
      (t[18] = d),
      (t[19] = v))
    : (v = t[19]);
  let y;
  return (
    t[20] !== f || t[21] !== p || t[22] !== m || t[23] !== h || t[24] !== g || t[25] !== _ || t[26] !== v
      ? ((y = (0, I.jsx)(f, {
          ...p,
          color: m,
          radius: h,
          size: g,
          className: _,
          onPointerUp: P,
          children: v,
        })),
        (t[20] = f),
        (t[21] = p),
        (t[22] = m),
        (t[23] = h),
        (t[24] = g),
        (t[25] = _),
        (t[26] = v),
        (t[27] = y))
      : (y = t[27]),
    y
  );
}
function P(e) {
  e.currentTarget.blur();
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = o()),
      r(),
      d(),
      (I = t()),
      (L = `rounded-full bg-media-background/45 font-medium text-media-foreground shadow-sm backdrop-blur-[12px]`));
  }))();
}
function z(e, t, n = e.value.routeKind === `chatgpt-thread` ? e.value.conversationId : null) {
  return t?.isAnimated === !0 && n != null ? (e.get(E, n)?.find((e) => e.id === t.id) ?? t) : t;
}
function B(e, t) {
  return e.isAnimated !== !0 || t == null || t.originalSrc !== (e.gifPlayback?.originalSrc ?? e.src)
    ? e
    : {
        ...e,
        src: t.src,
        sizeBytes: t.sizeBytes,
        gifPlayback: { ...e.gifPlayback, originalSrc: t.originalSrc, speed: t.speed },
      };
}
var V, H, U;
function W() {
  return (W = e(() => {
    (f(),
      A(),
      w(),
      k(),
      l(),
      x(),
      S(),
      M(),
      j(),
      a(),
      m(),
      (V = s(b, (e) => null)),
      (H = c(
        b,
        ({ image: e, imageAssetResolver: t }, { signal: n, scope: r }) => {
          let a = e?.gifPlayback?.originalSrc ?? e?.src,
            o = JSON.stringify([e?.id, a]),
            s,
            c = 0,
            l = Promise.resolve(),
            u = n(
              { preview: null, busy: !1 },
              {
                onMount: (t) => {
                  if (e?.isAnimated)
                    return r.watch((n) => {
                      if (c !== 0) return;
                      let r = n.get(V, o),
                        i = r ?? z(n, e)?.gifPlayback?.speed ?? 1;
                      (r != null || i !== 1) && (t({ preview: null, busy: !0 }), g(i, !1));
                    });
                },
              },
            ),
            d = async (e) => {
              let n = e != null && C(e) && t != null ? await D(r.queryClient, e, t) : e,
                i = n == null ? null : await _(n);
              if (i == null) throw Error(`GIF download unavailable`);
              return i.blob;
            },
            f = () => (
              (s ??= d(a).catch((e) => {
                throw ((s = void 0), e);
              })),
              s
            ),
            m = async (t, n = a) => {
              let r = u.get().preview;
              if (r?.speed === t && r.originalSrc === n) return r;
              let o = (
                  n === e?.watermarkedSrc ? e?.gifPlayback?.watermarkedVariants : e?.gifPlayback?.variants
                )?.[String(t)],
                s = o == null ? null : await d(o).catch(() => null),
                c = s ?? (n === a ? await f() : await d(n)),
                l =
                  s != null || t === 1
                    ? c
                    : await (
                        await i(
                          async () => {
                            let { withGifPlaybackSpeed: e } = await import(`./decoder-f966011fa07a.js`);
                            return { withGifPlaybackSpeed: e };
                          },
                          __vite__mapDeps([0, 1, 2]),
                          import.meta.url,
                        )
                      ).withGifPlaybackSpeed(c, t);
              return {
                assetSrc: s == null ? void 0 : o,
                originalSrc: n ?? ``,
                speed: t,
                src: await T(l),
                sizeBytes: l.size,
              };
            },
            g = async (t, n) => {
              let i = ++c;
              u.set((e) => ({ ...e, busy: !0 }));
              try {
                let s = await m(t);
                return (
                  i === c &&
                  (u.set({ preview: s, busy: !1 }),
                  n &&
                    (r.set(V, o, t),
                    (l = l
                      .then(async () => {
                        if (
                          i !== c ||
                          r.value.routeKind !== `chatgpt-thread` ||
                          e?.chatGptMessageId == null ||
                          a == null
                        )
                          return;
                        let n = r.get(v, r.value.conversationId);
                        n != null &&
                          (await O.safePost(`/image-gen/gif/select_speed`, {
                            requestBody: {
                              conversation_id: n,
                              message_id: e.chatGptMessageId,
                              asset_pointer: a,
                              selected_speed: t,
                            },
                            expectedErrorStatuses: [404, 405],
                          }));
                      })
                      .catch((e) => {
                        (e instanceof p && (e.status === 404 || e.status === 405)) ||
                          r
                            .get(h)
                            .danger(
                              r
                                .get(y)
                                .formatMessage({
                                  id: `gifEditor.saveSpeedFailed`,
                                  defaultMessage: `Couldn’t save GIF speed. Try again`,
                                  description: `Error toast when the selected GIF playback speed could not be saved to the conversation`,
                                }),
                              { errorAnalytics: { toastId: `gifEditor.saveSpeedFailed` } },
                            );
                      }))),
                  !0)
                );
              } catch {
                return (
                  n &&
                    i === c &&
                    r
                      .get(h)
                      .danger(
                        r
                          .get(y)
                          .formatMessage({
                            id: `gifEditor.speedChangeFailed`,
                            defaultMessage: `Couldn’t change GIF speed. Try again`,
                            description: `Error shown when a generated GIF could not be loaded or retimed after choosing a playback speed`,
                          }),
                        { errorAnalytics: { toastId: `gifEditor.speedChangeFailed` } },
                      ),
                  !1
                );
              } finally {
                i === c && u.set((e) => ({ ...e, busy: !1 }));
              }
            };
          return {
            state$: u,
            loadOriginal: f,
            loadExport: async (e) => d((await m(e)).src),
            changeSpeed: (e) => g(e, !0),
            imageForExport: async (e, t = a, { forSharing: n = !1 } = {}) => {
              if (!e.isAnimated || t == null) return e;
              let i = u.get().preview?.speed ?? r.get(V, o) ?? e.gifPlayback?.speed ?? 1,
                s = { ...e, src: t, gifPlayback: { ...e.gifPlayback, originalSrc: t, speed: i } };
              if (i === 1) return s;
              let c = await m(i, t);
              return B(s, n && c.assetSrc != null ? { ...c, src: c.assetSrc } : c);
            },
          };
        },
        {
          autoDispose: 6e4,
          key: ({ image: e }) => JSON.stringify([e?.id, e?.gifPlayback?.originalSrc ?? e?.src]),
        },
      )),
      (U = g(b, ({ image: e, conversationId: t, imageAssetResolver: n }, { scope: r }) => {
        let i = z(r, e, t),
          a = r.get(H, { image: i?.isAnimated === !0 ? i : void 0, imageAssetResolver: n }),
          { preview: o } = r.get(a.state$);
        return {
          playback: a,
          previewSrc: o?.src,
          image: i == null ? void 0 : B(i, o),
          originalSrc: i?.isAnimated === !0 ? (i.gifPlayback?.originalSrc ?? i.src) : i?.src,
          canControl: e?.isAnimated === !0 && e.gifPlayback != null && r.value.routeKind === `chatgpt-thread`,
        };
      })));
  }))();
}
export { W as a, U as i, z as n, N as o, H as r, R as s, B as t };
//# sourceMappingURL=inline-playback-3c9452efb9d4.js.map
