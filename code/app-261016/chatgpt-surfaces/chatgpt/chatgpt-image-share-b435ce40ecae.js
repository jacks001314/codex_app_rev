const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./chatgpt-file-upload-76e2e507108d.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  BO as r,
  FBt as i,
  HO as a,
  IO as o,
  JO as s,
  LNt as c,
  LO as l,
  MH as u,
  Mst as d,
  OFt as f,
  PBt as p,
  Pit as m,
  Qst as h,
  RO as g,
  SCt as _,
  TY as v,
  WO as y,
  XOt as b,
  Y3 as x,
  Z3 as S,
  ZSt as C,
  iCt as w,
  jit as ee,
  jst as T,
  kFt as E,
  nCt as D,
  okt as te,
  pK as O,
  qO as k,
  tkt as A,
  vD as j,
  yD as M,
  zO as ne,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as N,
  A5n as P,
  ANt as F,
  Bu as I,
  C2n as L,
  Cjr as R,
  D5n as z,
  Djr as B,
  E2n as V,
  GCr as H,
  GNt as U,
  HNt as W,
  HZn as re,
  IZn as ie,
  KNt as G,
  Lu as K,
  O2n as q,
  PZn as ae,
  QCr as oe,
  QLn as se,
  QNt as ce,
  Qd as le,
  VPn as ue,
  WNn as de,
  YNt as fe,
  Zd as pe,
  b2n as me,
  bLr as he,
  ewr as ge,
  gLr as _e,
  hNr as ve,
  iRr as ye,
  n0n as be,
  nPt as xe,
  nwr as J,
  qCr as Se,
  qNt as Ce,
  rPn as we,
  rwr as Te,
  tPt as Ee,
  tyr as De,
  wLr as Oe,
  xMr as ke,
  xjr as Ae,
  yMr as je,
  zRr as Me,
  zZn as Ne,
} from "./app-initial-ad16eaadf81f.js";
import { n as Pe, t as Fe } from "./controller-9c3c81f9854c.js";
import { a as Ie, i as Le, r as Re, t as ze } from "./chatgpt-conversation-share-dialog-2c5266898ceb.js";
var Be;
function Ve() {
  return (Ve = e(() => {
    Be = { $type: `protobuf_analytics_events.v1.ChatgptImagegenPromptSharingAction` };
  }))();
}
function He(e) {
  return (
    !!e.title.trim() &&
    !!e.prompt.trim() &&
    Array.from(e.title.trim()).length <= 200 &&
    Array.from(e.prompt).length <= 1e5
  );
}
function Ue(e) {
  let t = (0, We.c)(19),
    { content: n, onChange: i, disabled: a, autoFocus: o } = e,
    s = a !== void 0 && a,
    c = o !== void 0 && o,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Y.jsx)(`label`, {
        className: `text-sm font-medium select-none`,
        htmlFor: `image-prompt-title`,
        children: (0, Y.jsx)(A, {
          id: `imagePromptShare.titleLabel`,
          defaultMessage: `Title`,
          description: `Label for the shared image prompt template title`,
        }),
      })),
      (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] !== n || t[2] !== i
    ? ((u = (e) => i({ ...n, title: e.target.value })), (t[1] = n), (t[2] = i), (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] !== c || t[5] !== n.title || t[6] !== u
    ? ((d = (0, Y.jsxs)(r, {
        children: [
          l,
          (0, Y.jsx)(se, {
            id: `image-prompt-title`,
            autoFocus: c,
            name: `title`,
            variant: `compact`,
            required: !0,
            rows: 1,
            maxLength: 400,
            value: n.title,
            onChange: u,
          }),
        ],
      })),
      (t[4] = c),
      (t[5] = n.title),
      (t[6] = u),
      (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Y.jsx)(`label`, {
        className: `text-sm font-medium select-none`,
        htmlFor: `image-prompt-text`,
        children: (0, Y.jsx)(A, {
          id: `imagePromptShare.promptLabel`,
          defaultMessage: `Prompt`,
          description: `Label for the reusable image generation prompt`,
        }),
      })),
      (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] !== n || t[10] !== i
    ? ((p = (e) => i({ ...n, prompt: e.target.value })), (t[9] = n), (t[10] = i), (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] !== n.prompt || t[13] !== p
    ? ((m = (0, Y.jsxs)(r, {
        children: [
          f,
          (0, Y.jsx)(se, {
            id: `image-prompt-text`,
            name: `prompt`,
            variant: `compact`,
            required: !0,
            rows: 2,
            maxLength: 2e5,
            value: n.prompt,
            onChange: p,
          }),
        ],
      })),
      (t[12] = n.prompt),
      (t[13] = p),
      (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== s || t[16] !== d || t[17] !== m
      ? ((h = (0, Y.jsxs)(`fieldset`, {
          className: `flex min-w-0 flex-col gap-4`,
          disabled: s,
          children: [d, m],
        })),
        (t[15] = s),
        (t[16] = d),
        (t[17] = m),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
var We, Y;
function Ge() {
  return (Ge = e(() => {
    ((We = p()), b(), a(), N(), (Y = c()));
  }))();
}
function Ke(e) {
  let t = (0, qe.c)(54),
    { content: n, onSave: r, onClose: i, onCloseAutoFocus: a } = e,
    s = te(),
    [c, d] = (0, Je.useState)(n),
    [f, p] = (0, Je.useState)(!1),
    [m, h] = (0, Je.useState)(null),
    _;
  t[0] !== c || t[1] !== f || t[2] !== i || t[3] !== r
    ? ((_ = async function () {
        if (!f && He(c)) {
          (p(!0), h(null));
          try {
            (await r(c), i());
          } catch (e) {
            let t = e;
            h(t instanceof ee && t.errorCode === `prompt_share_not_publishable` ? `blocked` : `failed`);
          }
          p(!1);
        }
      }),
      (t[0] = c),
      (t[1] = f),
      (t[2] = i),
      (t[3] = r),
      (t[4] = _))
    : (_ = t[4]);
  let v = _,
    b = !f,
    S;
  t[5] === a
    ? (S = t[6])
    : ((S = { "aria-describedby": void 0, onCloseAutoFocus: a }), (t[5] = a), (t[6] = S));
  let C;
  t[7] !== f || t[8] !== i
    ? ((C = (e) => {
        !e && !f && i();
      }),
      (t[7] = f),
      (t[8] = i),
      (t[9] = C))
    : (C = t[9]);
  let w;
  t[10] === v
    ? (w = t[11])
    : ((w = (e) => {
        (e.preventDefault(), e.stopPropagation(), v());
      }),
      (t[10] = v),
      (t[11] = w));
  let T;
  t[12] === s
    ? (T = t[13])
    : ((T = s.formatMessage({
        id: `imagePromptShare.editBack`,
        defaultMessage: `Back`,
        description: `Return from the image prompt editor to the sharing preview without saving the draft`,
      })),
      (t[12] = s),
      (t[13] = T));
  let E;
  t[14] === Symbol.for(`react.memo_cache_sentinel`) ? ((E = (0, X.jsx)(u, {})), (t[14] = E)) : (E = t[14]);
  let D;
  t[15] !== f || t[16] !== i || t[17] !== T
    ? ((D = (0, X.jsx)(x, {
        color: `ghost`,
        size: `icon`,
        disabled: f,
        "aria-label": T,
        onClick: i,
        children: E,
      })),
      (t[15] = f),
      (t[16] = i),
      (t[17] = T),
      (t[18] = D))
    : (D = t[18]);
  let O;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, X.jsx)(g, {
        title: (0, X.jsx)(k, {
          children: (0, X.jsx)(A, {
            id: `imagePromptShare.editTitle`,
            defaultMessage: `Edit image prompt`,
            description: `Title of the dialog for editing the image's shared title and prompt`,
          }),
        }),
      })),
      (t[19] = O))
    : (O = t[19]);
  let M;
  t[20] === D
    ? (M = t[21])
    : ((M = (0, X.jsxs)(`div`, { className: `flex items-center gap-2 pe-8`, children: [D, O] })),
      (t[20] = D),
      (t[21] = M));
  let N;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (e) => {
        (d(e), h(null));
      }),
      (t[22] = N))
    : (N = t[22]);
  let P;
  t[23] !== c || t[24] !== f
    ? ((P = (0, X.jsx)(ne, {
        spacing: `large`,
        children: (0, X.jsx)(Ue, { content: c, disabled: f, autoFocus: !0, onChange: N }),
      })),
      (t[23] = c),
      (t[24] = f),
      (t[25] = P))
    : (P = t[25]);
  let F;
  t[26] === m
    ? (F = t[27])
    : ((F =
        m != null &&
        (0, X.jsx)(ne, {
          children: (0, X.jsx)(j, {
            type: `error`,
            role: `alert`,
            content:
              m === `blocked`
                ? (0, X.jsx)(A, {
                    id: `imagePromptShare.editBlocked`,
                    defaultMessage: `This prompt can’t be shared. Edit it and try again.`,
                    description: `Error when moderation rejects an edit to a shared image prompt`,
                  })
                : (0, X.jsx)(A, {
                    id: `imagePromptShare.editFailed`,
                    defaultMessage: `Couldn’t save your edits. Try again.`,
                    description: `Error when saving an image prompt fails; the draft remains in the editor for retry`,
                  }),
          }),
        })),
      (t[26] = m),
      (t[27] = F));
  let I;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, X.jsx)(A, {
        id: `imagePromptShare.editCancel`,
        defaultMessage: `Cancel`,
        description: `Discard edits and return to the image prompt sharing preview`,
      })),
      (t[28] = I))
    : (I = t[28]);
  let L;
  t[29] !== f || t[30] !== i
    ? ((L = (0, X.jsx)(x, { color: `outline`, disabled: f, onClick: i, children: I })),
      (t[29] = f),
      (t[30] = i),
      (t[31] = L))
    : (L = t[31]);
  let R;
  t[32] !== c || t[33] !== f ? ((R = !He(c) || f), (t[32] = c), (t[33] = f), (t[34] = R)) : (R = t[34]);
  let z;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, X.jsx)(A, {
        id: `imagePromptShare.editSave`,
        defaultMessage: `Save`,
        description: `Apply the edited title and prompt and return to the image sharing preview`,
      })),
      (t[35] = z))
    : (z = t[35]);
  let B;
  t[36] !== f || t[37] !== R
    ? ((B = (0, X.jsx)(x, { type: `submit`, color: `primary`, loading: f, disabled: R, children: z })),
      (t[36] = f),
      (t[37] = R),
      (t[38] = B))
    : (B = t[38]);
  let V;
  t[39] !== L || t[40] !== B
    ? ((V = (0, X.jsxs)(l, { expandSingleButton: !1, children: [L, B] })),
      (t[39] = L),
      (t[40] = B),
      (t[41] = V))
    : (V = t[41]);
  let H;
  t[42] !== M || t[43] !== P || t[44] !== F || t[45] !== V || t[46] !== w
    ? ((H = (0, X.jsxs)(o, { as: `form`, size: `viewport`, onSubmit: w, children: [M, P, F, V] })),
      (t[42] = M),
      (t[43] = P),
      (t[44] = F),
      (t[45] = V),
      (t[46] = w),
      (t[47] = H))
    : (H = t[47]);
  let U;
  return (
    t[48] !== f || t[49] !== b || t[50] !== H || t[51] !== S || t[52] !== C
      ? ((U = (0, X.jsx)(y, {
          open: !0,
          size: `share`,
          variant: `opaque`,
          showDialogClose: b,
          shouldIgnoreClickOutside: f,
          contentProps: S,
          onOpenChange: C,
          children: H,
        })),
        (t[48] = f),
        (t[49] = b),
        (t[50] = H),
        (t[51] = S),
        (t[52] = C),
        (t[53] = U))
      : (U = t[53]),
    U
  );
}
var qe, Je, X;
function Ye() {
  return (Ye = e(() => {
    ((qe = p()), (Je = i()), b(), M(), S(), s(), a(), v(), m(), Ge(), (X = c()));
  }))();
}
function Xe(e) {
  let t = (0, Ze.c)(28),
    { content: n, previewSrc: r, alt: i, disabled: a, onSave: o } = e,
    s = te(),
    [c, l] = (0, Qe.useState)(!1),
    u = (0, Qe.useRef)(null),
    d;
  t[0] !== i || t[1] !== r
    ? ((d =
        r != null &&
        (0, Z.jsx)(`img`, {
          className: `size-20 rounded-lg object-cover`,
          alt: i,
          src: r,
          referrerPolicy: `no-referrer`,
        })),
      (t[0] = i),
      (t[1] = r),
      (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] === s
    ? (f = t[4])
    : ((f = s.formatMessage({
        id: `imagePromptShare.edit`,
        defaultMessage: `Edit image prompt`,
        description: `Accessible label for the pencil button that opens the shared image title and prompt editor`,
      })),
      (t[3] = s),
      (t[4] = f));
  let p, m;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = () => l(!0)), (m = (0, Z.jsx)(O, {})), (t[5] = p), (t[6] = m))
    : ((p = t[5]), (m = t[6]));
  let h;
  t[7] !== a || t[8] !== f
    ? ((h = (0, Z.jsx)(x, {
        ref: u,
        className: `ms-auto`,
        color: `ghost`,
        size: `icon`,
        disabled: a,
        "aria-label": f,
        onClick: p,
        children: m,
      })),
      (t[7] = a),
      (t[8] = f),
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] !== d || t[11] !== h
    ? ((g = (0, Z.jsxs)(`div`, { className: `flex items-start justify-between gap-3`, children: [d, h] })),
      (t[10] = d),
      (t[11] = h),
      (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] === n.title
    ? (_ = t[14])
    : ((_ = (0, Z.jsx)(`p`, { className: `line-clamp-2 font-medium break-words`, children: n.title })),
      (t[13] = n.title),
      (t[14] = _));
  let v;
  t[15] === n.prompt
    ? (v = t[16])
    : ((v = (0, Z.jsx)(`p`, {
        className: `line-clamp-4 break-words whitespace-pre-wrap text-secondary`,
        children: n.prompt,
      })),
      (t[15] = n.prompt),
      (t[16] = v));
  let y;
  t[17] !== g || t[18] !== _ || t[19] !== v
    ? ((y = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-2 rounded-xl bg-secondary-soft p-4 text-sm text-default`,
        children: [g, _, v],
      })),
      (t[17] = g),
      (t[18] = _),
      (t[19] = v),
      (t[20] = y))
    : (y = t[20]);
  let b;
  t[21] !== n || t[22] !== c || t[23] !== o
    ? ((b =
        c &&
        (0, Z.jsx)(Ke, {
          content: n,
          onSave: o,
          onClose: () => l(!1),
          onCloseAutoFocus: (e) => {
            (e.preventDefault(), u.current?.focus());
          },
        })),
      (t[21] = n),
      (t[22] = c),
      (t[23] = o),
      (t[24] = b))
    : (b = t[24]);
  let S;
  return (
    t[25] !== b || t[26] !== y
      ? ((S = (0, Z.jsxs)(Z.Fragment, { children: [y, b] })), (t[25] = b), (t[26] = y), (t[27] = S))
      : (S = t[27]),
    S
  );
}
var Ze, Qe, Z;
function $e() {
  return ($e = e(() => {
    ((Ze = p()), (Qe = i()), b(), S(), v(), Ye(), (Z = c()));
  }))();
}
function et(e, t) {
  let n = Object.entries(e.mapping).find(
    ([, e]) =>
      e?.message != null &&
      ae(e.message, { isActiveTurn: !1, isStreaming: !1 }).some((e) => e.id === t.id || e.src === t.src),
  );
  if (n?.[1]?.message == null) return null;
  let [, r] = n,
    i = n[1].message,
    a = ae(i, { isActiveTurn: !1, isStreaming: !1 }).find((e) => e.id === t.id || e.src === t.src);
  if (a?.src == null || a.status !== `completed` || !Ne(a.src)) return null;
  let o = H({ mapping: e.mapping, current_node: r?.parent }).find((e) => e.author.role === `user`);
  if (o == null || ge(o)) return null;
  let s = J(i.content),
    c = (Array.isArray(s?.parts) ? s.parts : [])
      .map(J)
      .find((e) => e?.asset_pointer === a.src || J(e?.image_asset_pointer)?.asset_pointer === a.src),
    l = J(c?.image_asset_pointer) ?? c,
    u = Te(J(J(l?.metadata)?.dalle)?.prompt) ?? Te(Se(o));
  return u == null
    ? null
    : {
        assetPointer: a.src,
        content: {
          title: Array.from(a.chatGptDisplayTitle?.trim() || u)
            .slice(0, 200)
            .join(``),
          prompt: u,
        },
      };
}
function tt() {
  return (tt = e(() => {
    (oe(), re(), ie());
  }))();
}
async function nt(e, t, n) {
  it(e, t);
  let r = t.assetPointer;
  if (r == null) throw Error(`Image prompt share source unavailable`);
  let i = e.get(Q, t);
  if (i.publication != null) return i.publication;
  let a = i.idempotencyKey ?? crypto.randomUUID();
  e.set(Q, t, { ...i, idempotencyKey: a });
  try {
    let o = await e.queryClient.fetchQuery({
      queryKey: [`image-prompt-share-publication`, t, a],
      staleTime: 1 / 0,
      gcTime: 1 / 0,
      retry: !1,
      queryFn: () =>
        ye.safePost(`/share/prompt-share`, {
          isExpectedError: at,
          requestBody: {
            idempotency_key: a,
            output_asset_pointer: r,
            post_text: n.title,
            published_content: i.editedContent ?? void 0,
          },
        }),
    });
    return (it(e, t), e.set(Q, t, (e) => ({ ...e, publication: o })), o);
  } catch (n) {
    throw (n instanceof ee && at(n) && e.set(Q, t, (e) => ({ ...e, idempotencyKey: null })), n);
  }
}
async function rt(e, t, n, r) {
  it(e, t);
  let i = e.get(Q, t),
    a = i.idempotencyKey == null ? i.publication : await nt(e, t, n),
    o = r;
  if (a != null) {
    let e = await ye.safePatch(`/share/post/{post_id}/prompt-share`, {
      isExpectedError: at,
      parameters: { path: { post_id: a.post_id } },
      requestBody: r,
    });
    o = { title: e.title, prompt: e.prompt };
  }
  (it(e, t),
    e.set(Q, t, (e) => ({
      ...e,
      editedContent: o,
      publication: e.publication == null ? null : { ...e.publication, title: o.title },
      revision: e.revision + 1,
    })));
}
function it(e, t) {
  if (t.accountId == null || t.userId == null || e.get(Me) !== t.accountId || e.get(he) !== t.userId)
    throw Error(`Image prompt share account changed`);
}
function at(e) {
  return e.errorCode === `prompt_share_not_publishable`;
}
var Q;
function ot() {
  return (ot = e(() => {
    (C(),
      Oe(),
      n(),
      m(),
      De(),
      (Q = _(h, (e) => ({ idempotencyKey: null, publication: null, editedContent: null, revision: 0 }))));
  }))();
}
function st(e) {
  let n = (0, ct.c)(60),
    r = t(h),
    i = te(),
    a = w(Me),
    o = w(he),
    s;
  n[0] !== a || n[1] !== o
    ? ((s = { accountId: a, userId: o }), (n[0] = a), (n[1] = o), (n[2] = s))
    : (s = n[2]);
  let [c] = (0, lt.useState)(s),
    l = R(`2496586795`),
    u = R(`1939400492`),
    f = B(`250422953`),
    [p, m] = (0, lt.useState)(`image`),
    g = e.image,
    _ = c.accountId === a && c.userId === o,
    v = g != null && !g.additionalImages?.length && a != null && o != null && _ && l && !u,
    y;
  n[3] !== v || n[4] !== f
    ? ((y = v && f.get(`imagegen_prompt_share_tabs_enabled`, !1)), (n[3] = v), (n[4] = f), (n[5] = y))
    : (y = n[5]);
  let b = y,
    x = g?.item.id,
    S;
  n[6] !== a || n[7] !== e.serverConversationId || n[8] !== x || n[9] !== o
    ? ((S = [`image-prompt-share-source`, a, o, e.serverConversationId, x]),
      (n[6] = a),
      (n[7] = e.serverConversationId),
      (n[8] = x),
      (n[9] = o),
      (n[10] = S))
    : (S = n[10]);
  let C;
  n[11] !== g || n[12] !== e.serverConversationId || n[13] !== r
    ? ((C = async (t) => {
        let { signal: n } = t;
        if (g == null) return null;
        let i = V(e.serverConversationId),
          a = r.get(me, i) ?? i,
          o = () => {
            let e = r.get(be, a) ?? r.query.getData(de, i)?.mapping;
            return e == null ? null : et({ mapping: e }, g.item);
          };
        return o() ?? (await Fe(r, i, n), o());
      }),
      (n[11] = g),
      (n[12] = e.serverConversationId),
      (n[13] = r),
      (n[14] = C))
    : (C = n[14]);
  let T;
  n[15] !== S || n[16] !== C || n[17] !== b
    ? ((T = { enabled: b, queryKey: S, staleTime: 1 / 0, retry: !1, queryFn: C }),
      (n[15] = S),
      (n[16] = C),
      (n[17] = b),
      (n[18] = T))
    : (T = n[18]);
  let { data: E } = d(T),
    O = E?.assetPointer ?? null,
    k;
  n[19] !== a || n[20] !== e.serverConversationId || n[21] !== O || n[22] !== o
    ? ((k = { accountId: a, userId: o, conversationId: e.serverConversationId, assetPointer: O }),
      (n[19] = a),
      (n[20] = e.serverConversationId),
      (n[21] = O),
      (n[22] = o),
      (n[23] = k))
    : (k = n[23]);
  let j = k,
    { editedContent: M, publication: ne } = D(Q, j),
    N = b && E != null,
    P =
      N && f.get(`imagegen_prompt_share_label`, `prompt_with_image`) === `image_with_prompt`
        ? `image_with_prompt`
        : `prompt_with_image`,
    I = N && p === `template`,
    L;
  n[24] !== M || n[25] !== ne?.title || n[26] !== E
    ? ((L = M ?? (E == null ? void 0 : { ...E.content, title: ne?.title ?? E.content.title })),
      (n[24] = M),
      (n[25] = ne?.title),
      (n[26] = E),
      (n[27] = L))
    : (L = n[27]);
  let z = L,
    H;
  n[28] !== c.accountId || n[29] !== c.userId || n[30] !== r
    ? ((H = function () {
        if (r.get(Me) !== c.accountId || r.get(he) !== c.userId)
          throw Error(`Image prompt share account changed`);
      }),
      (n[28] = c.accountId),
      (n[29] = c.userId),
      (n[30] = r),
      (n[31] = H))
    : (H = n[31]);
  let U = H,
    W;
  n[32] !== z ||
  n[33] !== g?.item ||
  n[34] !== e.source ||
  n[35] !== U ||
  n[36] !== r ||
  n[37] !== j ||
  n[38] !== E
    ? ((W = async function (t) {
        if ((U(), E == null || z == null || !He(z)))
          throw Error(`Image prompt share source unavailable or invalid`);
        let n;
        try {
          n = await nt(r, j, E.content);
        } catch (e) {
          let t = e;
          throw t instanceof ee && t.errorCode === `prompt_share_not_publishable` ? new F() : t;
        }
        if ((U(), t === `copy`)) {
          let t;
          (e.source === Ee.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION ||
          e.source === Ee.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID
            ? (t = `image_inline_action`)
            : (e.source === Ee.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION ||
                e.source === Ee.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_LIGHTBOX) &&
              (t = `image_lightbox_action`),
            ke(r, Be, {
              action: `tap_send_to`,
              entryPoint: t,
              tapTarget: `copy_link`,
              shareType: `prompt_with_generated_image`,
              promptShareId: n.prompt_share_id,
              originalGenerationId: g?.item.chatGptGenerationId,
            }));
        }
        return {
          shareLinkId: n.post_id,
          shareLinkUrl: `https://chatgpt.com/s/${encodeURIComponent(n.post_id)}`,
          isWorkspaceOnly: !1,
          title: n.title,
        };
      }),
      (n[32] = z),
      (n[33] = g?.item),
      (n[34] = e.source),
      (n[35] = U),
      (n[36] = r),
      (n[37] = j),
      (n[38] = E),
      (n[39] = W))
    : (W = n[39]);
  let re = W;
  if (!_) return null;
  let ie = I ? `template` : `image`,
    G;
  n[40] !== i || n[41] !== p || n[42] !== N || n[43] !== P
    ? ((G = N
        ? (e) =>
            (0, $.jsx)(`div`, {
              className: `mx-auto w-80 max-w-full`,
              children: (0, $.jsx)(pe, {
                fullWidth: !0,
                wrapLabels: !0,
                variant: `form`,
                selectedId: p,
                onSelect: m,
                ariaLabel: i.formatMessage({
                  id: `imagePromptShare.mode`,
                  defaultMessage: `Share format`,
                  description: `Label for choosing between sharing an image or its prompt template`,
                }),
                options: [
                  {
                    id: `image`,
                    disabled: e,
                    label: (0, $.jsx)(A, {
                      id: `imagePromptShare.imageOnly`,
                      defaultMessage: `Image only`,
                      description: `Share only the generated image`,
                    }),
                  },
                  {
                    id: `template`,
                    disabled: e,
                    label:
                      P === `image_with_prompt`
                        ? (0, $.jsx)(A, {
                            id: `imagePromptShare.imageWithPrompt`,
                            defaultMessage: `Image with prompt`,
                            description: `Share-format option for sharing the generated image together with its reusable prompt. The other option is Image only.`,
                          })
                        : (0, $.jsx)(A, {
                            id: `imagePromptShare.template`,
                            defaultMessage: `Prompt with image`,
                            description: `Share the reusable prompt together with the generated image`,
                          }),
                  },
                ],
              }),
            })
        : void 0),
      (n[40] = i),
      (n[41] = p),
      (n[42] = N),
      (n[43] = P),
      (n[44] = G))
    : (G = n[44]);
  let K;
  n[45] !== z ||
  n[46] !== re ||
  n[47] !== g?.alt ||
  n[48] !== U ||
  n[49] !== r ||
  n[50] !== j ||
  n[51] !== E ||
  n[52] !== P ||
  n[53] !== I
    ? ((K =
        I && z != null
          ? {
              label: P,
              createLink: re,
              actionsDisabled: !He(z),
              preview: (e, t, n) =>
                (0, $.jsx)(Xe, {
                  content: z,
                  previewSrc: t,
                  alt: g?.alt ?? ``,
                  disabled: e,
                  onSave: async (e) => {
                    if ((U(), E == null)) throw Error(`Image prompt share source unavailable`);
                    ((e.title.trim() !== z.title.trim() || e.prompt !== z.prompt) &&
                      (await rt(r, j, E.content, { title: e.title.trim(), prompt: e.prompt })),
                      U(),
                      n());
                  },
                }),
            }
          : void 0),
      (n[45] = z),
      (n[46] = re),
      (n[47] = g?.alt),
      (n[48] = U),
      (n[49] = r),
      (n[50] = j),
      (n[51] = E),
      (n[52] = P),
      (n[53] = I),
      (n[54] = K))
    : (K = n[54]);
  let q;
  return (
    n[55] !== e || n[56] !== ie || n[57] !== G || n[58] !== K
      ? ((q = (0, $.jsx)(ze, { ...e, imageShareOptions: G, imagePromptTemplate: K }, ie)),
        (n[55] = e),
        (n[56] = ie),
        (n[57] = G),
        (n[58] = K),
        (n[59] = q))
      : (q = n[59]),
    q
  );
}
var ct, lt, $;
function ut() {
  return (ut = e(() => {
    ((ct = p()),
      Ve(),
      xe(),
      T(),
      C(),
      (lt = i()),
      b(),
      Oe(),
      le(),
      je(),
      n(),
      Ae(),
      m(),
      we(),
      W(),
      Re(),
      L(),
      q(),
      ue(),
      Pe(),
      $e(),
      tt(),
      ot(),
      ($ = c()));
  }))();
}
function dt(
  e,
  {
    additionalImages: t,
    alt: n,
    image: r,
    isDirectLightboxShare: i,
    previewSrc: a,
    serverConversationId: o,
    source: s = Ee.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION,
    title: c,
  },
) {
  let l = crypto.randomUUID();
  (ke(e, ce, {
    action: U.CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED,
    actor: G.CHATGPT_SHARE_FLOW_ACTOR_SHARER,
    attachmentType: Ce.CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE,
    contentType: fe.CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE,
    conversationId: o,
    shareSessionId: l,
    source: s,
  }),
    e.get(Me),
    e.get(he));
  let u = e.get(_e);
  (u.status === `loaded` && u.structure === `personal`) || (u.status === `loading` && u.structureAtLogin);
  let d = { additionalImages: t, alt: n, isDirectLightboxShare: i, item: r, previewSrc: a };
  P(e, st, {
    currentNodeId: r.id,
    image: d,
    serverConversationId: o,
    shareSessionId: l,
    source: s,
    title: c,
    mobileImageSheet: !1,
    trackMobileImageShareLifecycle: !1,
  });
}
async function ft(e, t) {
  if (!t.src?.startsWith(`data:image/gif`)) return t;
  let { uploadChatGptConversationFile: n } = await f(
      async () => {
        let { uploadChatGptConversationFile: e } = await import(`./chatgpt-file-upload-76e2e507108d.js`);
        return { uploadChatGptConversationFile: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5]),
      import.meta.url,
    ),
    { file: r } = K(t.src, `animation.gif`),
    i = await n(e, r, { storeInLibrary: !1 });
  return { ...t, src: `sediment://${i.id}` };
}
function pt() {
  return (pt = e(() => {
    (xe(), Oe(), z(), je(), ve(), I(), Ie(), Le(), ut(), E());
  }))();
}
export { dt as n, ft as r, pt as t };
//# sourceMappingURL=chatgpt-image-share-b435ce40ecae.js.map
