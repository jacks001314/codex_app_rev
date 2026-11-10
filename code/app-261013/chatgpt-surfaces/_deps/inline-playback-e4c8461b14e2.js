const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ["./decoder-f966011fa07a.js", "./decoder-c080d3c57107.js", "./rolldown-runtime-2d059c5e81f4.js"]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Pxt as n,
  _Mt as r,
  aSt as i,
  cSt as a,
  fPt as o,
  frt as s,
  gMt as c,
  hot as l,
  hrt as u,
  lot as d,
  nSt as f,
  pPt as p,
  t3 as m,
  vzt as h,
  xMt as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Gn as _,
  Cwr as v,
  O0n as y,
  Ou as b,
  QGn as x,
  Ymr as S,
  aIr as C,
  at as w,
  ehr as T,
  gwr as E,
  ju as D,
  oIr as O,
  ot as k,
  pZn as A,
  qGn as j,
  yjn as M,
} from "./app-initial-5851df3f6cb1.js";
function N(e) {
  let n = (0, F.c)(28),
    r,
    i,
    a,
    o,
    s;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (a = n[3]), (o = n[4]), (s = n[5]))
    : (({ appearance: o, children: r, className: i, iconOnly: s, ...a } = e),
      (n[0] = e),
      (n[1] = r),
      (n[2] = i),
      (n[3] = a),
      (n[4] = o),
      (n[5] = s));
  let l = o === void 0 ? `compact` : o,
    u = s !== void 0 && s,
    d = l === `blurred`,
    f,
    p,
    m,
    h,
    g,
    _;
  if (n[6] !== i || n[7] !== u || n[8] !== d || n[9] !== a) {
    let e = c(
      `h-6 !bg-media-background/45 !px-2 !py-0 !text-media-foreground enabled:hover:!bg-media-background/60`,
      L,
    );
    (d && u
      ? (e = `group/gallery-action pointer-events-auto h-10 w-10 !bg-transparent !p-0 !text-media-foreground enabled:hover:!bg-transparent`)
      : d &&
        (e = `pointer-events-auto h-10 !bg-media-background/15 !px-3 !py-0 font-medium !text-media-foreground backdrop-blur-md enabled:hover:!bg-media-background/30 focus:!bg-media-background/30`),
      (f = t),
      (p = a),
      (m = `secondary`),
      (h = d ? `full` : `default`),
      (g = d ? `default` : `icon`),
      (_ = c(e, i)),
      (n[6] = i),
      (n[7] = u),
      (n[8] = d),
      (n[9] = a),
      (n[10] = f),
      (n[11] = p),
      (n[12] = m),
      (n[13] = h),
      (n[14] = g),
      (n[15] = _));
  } else ((f = n[10]), (p = n[11]), (m = n[12]), (h = n[13]), (g = n[14]), (_ = n[15]));
  let v;
  n[16] !== r || n[17] !== u || n[18] !== d
    ? ((v =
        d && u
          ? (0, I.jsx)(`span`, {
              className: `flex size-9 items-center justify-center rounded-full bg-media-background/15 backdrop-blur-md group-hover/gallery-action:bg-media-background/30 group-focus/gallery-action:bg-media-background/30`,
              children: r,
            })
          : r),
      (n[16] = r),
      (n[17] = u),
      (n[18] = d),
      (n[19] = v))
    : (v = n[19]);
  let y;
  return (
    n[20] !== f || n[21] !== p || n[22] !== m || n[23] !== h || n[24] !== g || n[25] !== _ || n[26] !== v
      ? ((y = (0, I.jsx)(f, {
          ...p,
          color: m,
          radius: h,
          size: g,
          className: _,
          onPointerUp: P,
          children: v,
        })),
        (n[20] = f),
        (n[21] = p),
        (n[22] = m),
        (n[23] = h),
        (n[24] = g),
        (n[25] = _),
        (n[26] = v),
        (n[27] = y))
      : (y = n[27]),
    y
  );
}
function P(e) {
  e.currentTarget.blur();
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = h()),
      r(),
      m(),
      (I = g()),
      (L = `rounded-full bg-media-background/45 font-medium text-media-foreground shadow-sm backdrop-blur-[12px]`));
  }))();
}
function z(e, t, n = e.value.routeKind === `chatgpt-thread` ? e.value.conversationId : null) {
  return t?.isAnimated === !0 && n != null ? (e.get(w, n)?.find((e) => e.id === t.id) ?? t) : t;
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
    (n(),
      T(),
      M(),
      k(),
      d(),
      D(),
      C(),
      v(),
      x(),
      s(),
      p(),
      (V = i(E, (e) => null)),
      (H = a(
        E,
        ({ image: e, imageAssetResolver: t }, { signal: n, scope: r }) => {
          let i = e?.gifPlayback?.originalSrc ?? e?.src,
            a = JSON.stringify([e?.id, i]),
            s,
            c = 0,
            d = Promise.resolve(),
            f = n(
              { preview: null, busy: !1 },
              {
                onMount: (t) => {
                  if (e?.isAnimated)
                    return r.watch((n) => {
                      if (c !== 0) return;
                      let r = n.get(V, a),
                        i = r ?? z(n, e)?.gifPlayback?.speed ?? 1;
                      (r != null || i !== 1) && (t({ preview: null, busy: !0 }), g(i, !1));
                    });
                },
              },
            ),
            p = async (e) => {
              let n = e != null && _(e) && t != null ? await j(r.queryClient, e, t) : e,
                i = n == null ? null : await b(n);
              if (i == null) throw Error(`GIF download unavailable`);
              return i.blob;
            },
            m = () => (
              (s ??= p(i).catch((e) => {
                throw ((s = void 0), e);
              })),
              s
            ),
            h = async (t, n = i) => {
              let r = f.get().preview;
              if (r?.speed === t && r.originalSrc === n) return r;
              let a = (
                  n === e?.watermarkedSrc ? e?.gifPlayback?.watermarkedVariants : e?.gifPlayback?.variants
                )?.[String(t)],
                s = a == null ? null : await p(a).catch(() => null),
                c = s ?? (n === i ? await m() : await p(n)),
                l =
                  s != null || t === 1
                    ? c
                    : await (
                        await o(
                          async () => {
                            let { withGifPlaybackSpeed: e } = await import(`./decoder-f966011fa07a.js`);
                            return { withGifPlaybackSpeed: e };
                          },
                          __vite__mapDeps([0, 1, 2]),
                          import.meta.url,
                        )
                      ).withGifPlaybackSpeed(c, t);
              return {
                assetSrc: s == null ? void 0 : a,
                originalSrc: n ?? ``,
                speed: t,
                src: await y(l),
                sizeBytes: l.size,
              };
            },
            g = async (t, n) => {
              let o = ++c;
              f.set((e) => ({ ...e, busy: !0 }));
              try {
                let s = await h(t);
                return (
                  o === c &&
                  (f.set({ preview: s, busy: !1 }),
                  n &&
                    (r.set(V, a, t),
                    (d = d
                      .then(async () => {
                        if (
                          o !== c ||
                          r.value.routeKind !== `chatgpt-thread` ||
                          e?.chatGptMessageId == null ||
                          i == null
                        )
                          return;
                        let n = r.get(A, r.value.conversationId);
                        n != null &&
                          (await S.safePost(`/image-gen/gif/select_speed`, {
                            requestBody: {
                              conversation_id: n,
                              message_id: e.chatGptMessageId,
                              asset_pointer: i,
                              selected_speed: t,
                            },
                            expectedErrorStatuses: [404, 405],
                          }));
                      })
                      .catch((e) => {
                        (e instanceof u && (e.status === 404 || e.status === 405)) ||
                          r
                            .get(l)
                            .danger(
                              r
                                .get(O)
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
                    o === c &&
                    r
                      .get(l)
                      .danger(
                        r
                          .get(O)
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
                o === c && f.set((e) => ({ ...e, busy: !1 }));
              }
            };
          return {
            state$: f,
            loadOriginal: m,
            loadExport: async (e) => p((await h(e)).src),
            changeSpeed: (e) => g(e, !0),
            imageForExport: async (e, t = i, { forSharing: n = !1 } = {}) => {
              if (!e.isAnimated || t == null) return e;
              let o = f.get().preview?.speed ?? r.get(V, a) ?? e.gifPlayback?.speed ?? 1,
                s = { ...e, src: t, gifPlayback: { ...e.gifPlayback, originalSrc: t, speed: o } };
              if (o === 1) return s;
              let c = await h(o, t);
              return B(s, n && c.assetSrc != null ? { ...c, src: c.assetSrc } : c);
            },
          };
        },
        {
          autoDispose: 6e4,
          key: ({ image: e }) => JSON.stringify([e?.id, e?.gifPlayback?.originalSrc ?? e?.src]),
        },
      )),
      (U = f(E, ({ image: e, conversationId: t, imageAssetResolver: n }, { scope: r }) => {
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
//# sourceMappingURL=inline-playback-e4c8461b14e2.js.map
