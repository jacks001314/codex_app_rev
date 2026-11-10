const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./chatgpt-file-upload-2087ff1c1ccd.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  IDt as n,
  Ixt as r,
  Pxt as i,
  VDt as a,
  Vxt as o,
  Xot as s,
  Yot as c,
  aSt as l,
  fO as u,
  fPt as d,
  hrt as f,
  jDt as p,
  pPt as m,
  uO as ee,
  vrt as te,
  vzt as h,
  wot as g,
  xMt as _,
  yzt as ne,
  zxt as re,
} from "./app-shared-bbfeca5e5737.js";
import {
  $yr as v,
  BIt as y,
  DPn as ie,
  EPn as b,
  FAn as x,
  Fu as S,
  G4n as C,
  GMr as w,
  GOr as T,
  HIt as E,
  J4n as D,
  Jyr as O,
  KIt as k,
  PIt as A,
  QDr as ae,
  QQn as oe,
  Qyr as j,
  Ru as M,
  SAn as se,
  ULn as N,
  Uyr as P,
  VIt as F,
  Vyr as I,
  WIt as L,
  WMr as R,
  XDr as z,
  XIt as B,
  XQn as V,
  Xd as ce,
  Xyr as H,
  YIt as U,
  YMr as W,
  Yd as le,
  Ymr as G,
  e$n as K,
  eDr as q,
  ehr as ue,
  fJn as de,
  hJn as fe,
  kZn as pe,
  lJn as me,
  nDr as he,
  oDr as ge,
  qQn as _e,
  sJn as ve,
  tNr as ye,
  xIt as be,
  yjn as xe,
} from "./app-initial-5851df3f6cb1.js";
import { n as Se, t as Ce } from "./controller-5717fd004098.js";
import { a as we, i as Te, r as Ee, t as De } from "./chatgpt-conversation-share-dialog-6e637f73793e.js";
var Oe;
function ke() {
  return (ke = e(() => {
    Oe = { $type: `protobuf_analytics_events.v1.ChatgptImagegenPromptSharingAction` };
  }))();
}
function Ae(e) {
  let t = (0, je.c)(18),
    { content: r, onChange: i, disabled: a } = e,
    o = a !== void 0 && a,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, J.jsx)(`label`, {
        className: `text-sm font-medium select-none`,
        htmlFor: `image-prompt-title`,
        children: (0, J.jsx)(n, {
          id: `imagePromptShare.titleLabel`,
          defaultMessage: `Title`,
          description: `Label for the shared image prompt template title`,
        }),
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] !== r || t[2] !== i
    ? ((c = (e) => i({ ...r, title: e.target.value })), (t[1] = r), (t[2] = i), (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] !== r.title || t[5] !== c
    ? ((l = (0, J.jsxs)(ee, {
        children: [
          s,
          (0, J.jsx)(b, {
            id: `image-prompt-title`,
            name: `title`,
            variant: `outlined`,
            required: !0,
            maxLength: 400,
            value: r.title,
            onChange: c,
          }),
        ],
      })),
      (t[4] = r.title),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, J.jsx)(`label`, {
        className: `text-sm font-medium select-none`,
        htmlFor: `image-prompt-text`,
        children: (0, J.jsx)(n, {
          id: `imagePromptShare.promptLabel`,
          defaultMessage: `Prompt`,
          description: `Label for the reusable image generation prompt`,
        }),
      })),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] !== r || t[9] !== i
    ? ((d = (e) => i({ ...r, prompt: e.target.value })), (t[8] = r), (t[9] = i), (t[10] = d))
    : (d = t[10]);
  let f;
  t[11] !== r.prompt || t[12] !== d
    ? ((f = (0, J.jsxs)(ee, {
        children: [
          u,
          (0, J.jsx)(b, {
            id: `image-prompt-text`,
            name: `prompt`,
            variant: `outlined`,
            required: !0,
            rows: 6,
            maxLength: 2e5,
            value: r.prompt,
            onChange: d,
          }),
        ],
      })),
      (t[11] = r.prompt),
      (t[12] = d),
      (t[13] = f))
    : (f = t[13]);
  let p;
  return (
    t[14] !== o || t[15] !== l || t[16] !== f
      ? ((p = (0, J.jsxs)(`fieldset`, {
          className: `flex min-w-0 flex-col gap-4`,
          disabled: o,
          children: [l, f],
        })),
        (t[14] = o),
        (t[15] = l),
        (t[16] = f),
        (t[17] = p))
      : (p = t[17]),
    p
  );
}
var je, J;
function Me() {
  return (Me = e(() => {
    ((je = h()), p(), u(), ie(), (J = _()));
  }))();
}
function Ne(e) {
  let t = (0, Pe.c)(10),
    { content: n, previewSrc: r, alt: i, disabled: a, onChange: o } = e,
    s;
  t[0] !== i || t[1] !== r
    ? ((s =
        r != null &&
        (0, Y.jsx)(`img`, {
          className: `size-20 rounded-lg object-cover`,
          alt: i,
          src: r,
          referrerPolicy: `no-referrer`,
        })),
      (t[0] = i),
      (t[1] = r),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] !== n || t[4] !== a || t[5] !== o
    ? ((c = (0, Y.jsx)(Ae, { content: n, disabled: a, onChange: o })),
      (t[3] = n),
      (t[4] = a),
      (t[5] = o),
      (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] !== s || t[8] !== c
      ? ((l = (0, Y.jsx)(`div`, {
          className: `rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default`,
          children: (0, Y.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [s, c] }),
        })),
        (t[7] = s),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
var Pe, Y;
function Fe() {
  return (Fe = e(() => {
    ((Pe = h()), Me(), (Y = _()));
  }))();
}
function Ie(e) {
  return (
    !!e.title.trim() &&
    !!e.prompt.trim() &&
    Array.from(e.title.trim()).length <= 200 &&
    Array.from(e.prompt).length <= 1e5
  );
}
function Le(e, t) {
  let n = Object.entries(e.mapping).find(
    ([, e]) =>
      e?.message != null &&
      ve(e.message, { isActiveTurn: !1, isStreaming: !1 }).some((e) => e.id === t.id || e.src === t.src),
  );
  if (n?.[1]?.message == null) return null;
  let [, r] = n,
    i = n[1].message,
    a = ve(i, { isActiveTurn: !1, isStreaming: !1 }).find((e) => e.id === t.id || e.src === t.src);
  if (a?.src == null || a.status !== `completed` || !de(a.src)) return null;
  let o = I({ mapping: e.mapping, current_node: r?.parent }).find((e) => e.author.role === `user`);
  if (o == null || H(o)) return null;
  let s = j(i.content),
    c = (Array.isArray(s?.parts) ? s.parts : [])
      .map(j)
      .find((e) => e?.asset_pointer === a.src || j(e?.image_asset_pointer)?.asset_pointer === a.src),
    l = j(c?.image_asset_pointer) ?? c,
    u = v(j(j(l?.metadata)?.dalle)?.prompt) ?? v(P(o));
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
function Re() {
  return (Re = e(() => {
    (O(), fe(), me());
  }))();
}
async function ze(e, t, n) {
  X(e, t);
  let r = t.assetPointer;
  if (r == null) throw Error(`Image prompt share source unavailable`);
  let i = e.get(Z, t);
  if (i.publication != null) return i.publication;
  let a = i.idempotencyKey ?? crypto.randomUUID();
  e.set(Z, t, { ...i, idempotencyKey: a });
  try {
    let o = await e.queryClient.fetchQuery({
      queryKey: [`image-prompt-share-publication`, t, a],
      staleTime: 1 / 0,
      gcTime: 1 / 0,
      retry: !1,
      queryFn: () =>
        G.safePost(`/share/prompt-share`, {
          isExpectedError: Ve,
          requestBody: {
            idempotency_key: a,
            output_asset_pointer: r,
            post_text: n.title,
            published_content: i.editedContent ?? void 0,
          },
        }),
    });
    return (X(e, t), e.set(Z, t, (e) => ({ ...e, publication: o })), o);
  } catch (n) {
    throw (n instanceof f && Ve(n) && e.set(Z, t, (e) => ({ ...e, idempotencyKey: null })), n);
  }
}
async function Be(e, t, n, r) {
  X(e, t);
  let i = e.get(Z, t),
    a = i.idempotencyKey == null ? i.publication : await ze(e, t, n),
    o = r;
  if (a != null) {
    let e = await G.safePatch(`/share/post/{post_id}/prompt-share`, {
      isExpectedError: Ve,
      parameters: { path: { post_id: a.post_id } },
      requestBody: r,
    });
    o = { title: e.title, prompt: e.prompt };
  }
  (X(e, t),
    e.set(Z, t, (e) => ({
      ...e,
      editedContent: o,
      publication: e.publication == null ? null : { ...e.publication, title: o.title },
      revision: e.revision + 1,
    })));
}
function X(e, t) {
  if (t.accountId == null || t.userId == null || e.get(w) !== t.accountId || e.get(W) !== t.userId)
    throw Error(`Image prompt share account changed`);
}
function Ve(e) {
  return e.errorCode === `prompt_share_not_publishable`;
}
var Z;
function He() {
  return (He = e(() => {
    (i(),
      ye(),
      g(),
      te(),
      ue(),
      (Z = l(t, (e) => ({ idempotencyKey: null, publication: null, editedContent: null, revision: 0 }))));
  }))();
}
function Ue(e) {
  let i = (0, We.c)(55),
    c = r(t),
    l = a(),
    u = o(w),
    d = o(W),
    p;
  i[0] !== u || i[1] !== d
    ? ((p = { accountId: u, userId: d }), (i[0] = u), (i[1] = d), (i[2] = p))
    : (p = i[2]);
  let [m] = (0, Q.useState)(p),
    ee = he(`2496586795`),
    te = he(`1939400492`),
    h = ge(`250422953`),
    [g, _] = (0, Q.useState)(`image`),
    [ne, v] = (0, Q.useState)(null),
    y = e.image,
    ie = m.accountId === u && m.userId === d,
    b = y != null && !y.additionalImages?.length && u != null && d != null && ie && ee && !te,
    x;
  i[3] !== b || i[4] !== h
    ? ((x = b && h.get(`imagegen_prompt_share_tabs_enabled`, !1)), (i[3] = b), (i[4] = h), (i[5] = x))
    : (x = i[5]);
  let S = x,
    C = y?.item.id,
    T;
  i[6] !== u || i[7] !== e.serverConversationId || i[8] !== C || i[9] !== d
    ? ((T = [`image-prompt-share-source`, u, d, e.serverConversationId, C]),
      (i[6] = u),
      (i[7] = e.serverConversationId),
      (i[8] = C),
      (i[9] = d),
      (i[10] = T))
    : (T = i[10]);
  let E;
  i[11] !== y || i[12] !== e.serverConversationId || i[13] !== c
    ? ((E = async (t) => {
        let { signal: n } = t;
        if (y == null) return null;
        let r = oe(e.serverConversationId),
          i = c.get(_e, r) ?? r,
          a = () => {
            let e = c.get(pe, i) ?? c.query.getData(se, r)?.mapping;
            return e == null ? null : Le({ mapping: e }, y.item);
          };
        return a() ?? (await Ce(c, r, n), a());
      }),
      (i[11] = y),
      (i[12] = e.serverConversationId),
      (i[13] = c),
      (i[14] = E))
    : (E = i[14]);
  let D;
  i[15] !== T || i[16] !== E || i[17] !== S
    ? ((D = { enabled: S, queryKey: T, staleTime: 1 / 0, retry: !1, queryFn: E }),
      (i[15] = T),
      (i[16] = E),
      (i[17] = S),
      (i[18] = D))
    : (D = i[18]);
  let { data: O } = s(D),
    k = O?.assetPointer ?? null,
    A;
  i[19] !== u || i[20] !== e.serverConversationId || i[21] !== k || i[22] !== d
    ? ((A = { accountId: u, userId: d, conversationId: e.serverConversationId, assetPointer: k }),
      (i[19] = u),
      (i[20] = e.serverConversationId),
      (i[21] = k),
      (i[22] = d),
      (i[23] = A))
    : (A = i[23]);
  let j = A,
    { editedContent: M, publication: N } = re(Z, j),
    P = S && O != null,
    F = P && g === `template`,
    I;
  i[24] !== M || i[25] !== N?.title || i[26] !== O
    ? ((I = M ?? (O == null ? void 0 : { ...O.content, title: N?.title ?? O.content.title })),
      (i[24] = M),
      (i[25] = N?.title),
      (i[26] = O),
      (i[27] = I))
    : (I = i[27]);
  let L = I,
    R = ne ?? L,
    z;
  i[28] !== m.accountId || i[29] !== m.userId || i[30] !== c
    ? ((z = function () {
        if (c.get(w) !== m.accountId || c.get(W) !== m.userId)
          throw Error(`Image prompt share account changed`);
      }),
      (i[28] = m.accountId),
      (i[29] = m.userId),
      (i[30] = c),
      (i[31] = z))
    : (z = i[31]);
  let B = z,
    V;
  i[32] !== R ||
  i[33] !== y?.item ||
  i[34] !== e.source ||
  i[35] !== B ||
  i[36] !== L ||
  i[37] !== c ||
  i[38] !== j ||
  i[39] !== O
    ? ((V = async function (t) {
        if ((B(), O == null || R == null || !Ie(R)))
          throw Error(`Image prompt share source unavailable or invalid`);
        let n;
        try {
          (L != null &&
            (R.title.trim() !== L.title.trim() || R.prompt !== L.prompt) &&
            (await Be(c, j, O.content, { title: R.title.trim(), prompt: R.prompt })),
            (n = await ze(c, j, O.content)));
        } catch (e) {
          let t = e;
          throw t instanceof f && t.errorCode === `prompt_share_not_publishable` ? new be() : t;
        }
        if ((B(), v(null), t === `copy`)) {
          let t;
          (e.source === U.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION ||
          e.source === U.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID
            ? (t = `image_inline_action`)
            : (e.source === U.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION ||
                e.source === U.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_LIGHTBOX) &&
              (t = `image_lightbox_action`),
            ae(c, Oe, {
              action: `tap_send_to`,
              entryPoint: t,
              tapTarget: `copy_link`,
              shareType: `prompt_with_generated_image`,
              promptShareId: n.prompt_share_id,
              originalGenerationId: y?.item.chatGptGenerationId,
            }));
        }
        return {
          shareLinkId: n.post_id,
          shareLinkUrl: `https://chatgpt.com/s/${encodeURIComponent(n.post_id)}`,
          isWorkspaceOnly: !1,
          title: n.title,
        };
      }),
      (i[32] = R),
      (i[33] = y?.item),
      (i[34] = e.source),
      (i[35] = B),
      (i[36] = L),
      (i[37] = c),
      (i[38] = j),
      (i[39] = O),
      (i[40] = V))
    : (V = i[40]);
  let ce = V;
  if (!ie) return null;
  let H = F ? `template` : `image`,
    G;
  i[41] !== l || i[42] !== g || i[43] !== P
    ? ((G = P
        ? (e) =>
            (0, $.jsx)(le, {
              fullWidth: !0,
              wrapLabels: !0,
              variant: `form`,
              selectedId: g,
              onSelect: _,
              ariaLabel: l.formatMessage({
                id: `imagePromptShare.mode`,
                defaultMessage: `Share format`,
                description: `Label for choosing between sharing an image or its prompt template`,
              }),
              options: [
                {
                  id: `image`,
                  disabled: e,
                  label: (0, $.jsx)(n, {
                    id: `imagePromptShare.imageOnly`,
                    defaultMessage: `Image only`,
                    description: `Share only the generated image`,
                  }),
                },
                {
                  id: `template`,
                  disabled: e,
                  label: (0, $.jsx)(n, {
                    id: `imagePromptShare.template`,
                    defaultMessage: `Prompt with image`,
                    description: `Share the reusable prompt together with the generated image`,
                  }),
                },
              ],
            })
        : void 0),
      (i[41] = l),
      (i[42] = g),
      (i[43] = P),
      (i[44] = G))
    : (G = i[44]);
  let K;
  i[45] !== R || i[46] !== ce || i[47] !== y?.alt || i[48] !== F
    ? ((K =
        F && R != null
          ? {
              createLink: ce,
              actionsDisabled: !Ie(R),
              preview: (e, t, n) =>
                (0, $.jsx)(Ne, {
                  content: R,
                  previewSrc: t,
                  alt: y?.alt ?? ``,
                  disabled: e,
                  onChange: (e) => {
                    (v(e), n());
                  },
                }),
            }
          : void 0),
      (i[45] = R),
      (i[46] = ce),
      (i[47] = y?.alt),
      (i[48] = F),
      (i[49] = K))
    : (K = i[49]);
  let q;
  return (
    i[50] !== e || i[51] !== H || i[52] !== G || i[53] !== K
      ? ((q = (0, $.jsx)(De, { ...e, imageShareOptions: G, imagePromptTemplate: K }, H)),
        (i[50] = e),
        (i[51] = H),
        (i[52] = G),
        (i[53] = K),
        (i[54] = q))
      : (q = i[54]),
    q
  );
}
var We, Q, $;
function Ge() {
  return (Ge = e(() => {
    ((We = h()),
      ke(),
      B(),
      c(),
      i(),
      (Q = ne()),
      p(),
      ye(),
      ce(),
      z(),
      g(),
      q(),
      te(),
      x(),
      A(),
      Ee(),
      V(),
      K(),
      xe(),
      Se(),
      Fe(),
      Re(),
      He(),
      ($ = _()));
  }))();
}
function Ke(
  e,
  {
    additionalImages: t,
    alt: n,
    image: r,
    isDirectLightboxShare: i,
    previewSrc: a,
    serverConversationId: o,
    source: s = U.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION,
    title: c,
  },
) {
  let l = crypto.randomUUID();
  (ae(e, k, {
    action: y.CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED,
    actor: F.CHATGPT_SHARE_FLOW_ACTOR_SHARER,
    attachmentType: E.CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE,
    contentType: L.CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE,
    conversationId: o,
    shareSessionId: l,
    source: s,
  }),
    e.get(w),
    e.get(W));
  let u = e.get(R);
  (u.status === `loaded` && u.structure === `personal`) || (u.status === `loading` && u.structureAtLogin);
  let d = { additionalImages: t, alt: n, isDirectLightboxShare: i, item: r, previewSrc: a };
  D(e, Ue, {
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
async function qe(e, t) {
  if (!t.src?.startsWith(`data:image/gif`)) return t;
  let { uploadChatGptConversationFile: n } = await d(
      async () => {
        let { uploadChatGptConversationFile: e } = await import(`./chatgpt-file-upload-2087ff1c1ccd.js`);
        return { uploadChatGptConversationFile: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5]),
      import.meta.url,
    ),
    { file: r } = S(t.src, `animation.gif`),
    i = await n(e, r, { storeInLibrary: !1 });
  return { ...t, src: `sediment://${i.id}` };
}
function Je() {
  return (Je = e(() => {
    (B(), N(), ye(), C(), z(), T(), M(), we(), Te(), Ge(), m());
  }))();
}
export { Ke as n, qe as r, Je as t };
//# sourceMappingURL=chatgpt-image-share-6a21745248b3.js.map
