const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./source-dialogs-62d5bed6ccbd.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./data-6d8d734487a6.js",
      "./chatgpt-project-sources-18481a4a6584.js",
      "./source-queries-3db0a1460491.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $v as n,
  AO as r,
  CO as i,
  Cat as a,
  Cot as o,
  IDt as s,
  Ixt as c,
  Pxt as l,
  Qv as u,
  TDt as d,
  TJ as f,
  TO as p,
  VDt as m,
  Vxt as ee,
  fPt as h,
  hG as te,
  hot as ne,
  jDt as g,
  lot as _,
  mV as re,
  pPt as ie,
  sJ as ae,
  t3 as v,
  vzt as y,
  wot as b,
  xMt as x,
  xat as oe,
  yzt as S,
  zxt as C,
} from "./app-shared-bbfeca5e5737.js";
import {
  ALn as w,
  BW as se,
  C7t as T,
  ELn as E,
  G4n as D,
  GMr as O,
  J4n as k,
  KW as ce,
  MLn as le,
  QDr as A,
  QW as j,
  XDr as M,
  YMr as N,
  _In as P,
  _Ln as F,
  bLn as I,
  lIr as L,
  qW as ue,
  tNr as R,
  uIr as de,
  vIn as z,
  vLn as B,
  w7t as fe,
} from "./app-initial-5851df3f6cb1.js";
import { a as V, n as H, o as U, r as pe, t as W } from "./data-6d8d734487a6.js";
function G(e) {
  let t = (0, q.c)(50),
    { metadata: n, onOpenOriginal: r, projectId: a, title: l } = e,
    d = c(o),
    f = m(),
    h = ee(H),
    [g, _] = (0, J.useState)(!1),
    { data: ie } = C(P, a),
    { isPending: v, mutateAsync: y, variables: b } = C(pe, a),
    x = fe(),
    S = ie?.gizmo.current_user_permission?.can_write,
    w;
  t[0] !== x || t[1] !== S ? ((w = le(S, x)), (t[0] = x), (t[1] = S), (t[2] = w)) : (w = t[2]);
  let T = w,
    E;
  t[3] === n.conversation_id
    ? (E = t[4])
    : ((E = n.conversation_id?.trim()), (t[3] = n.conversation_id), (t[4] = E));
  let D = E,
    k;
  t[5] === n.message_id ? (k = t[6]) : ((k = n.message_id?.trim()), (t[5] = n.message_id), (t[6] = k));
  let j = k,
    M;
  t[7] === n.save_id ? (M = t[8]) : ((M = n.save_id?.trim()), (t[7] = n.save_id), (t[8] = M));
  let F = M,
    I;
  t[9] !== D || t[10] !== j || t[11] !== n || t[12] !== r || t[13] !== a || t[14] !== d
    ? ((I = () => {
        D &&
          j &&
          (A(d, ue, { ...V(d, a, n), targetConversationId: D, targetMessageId: j }),
          r?.(),
          de(d, {
            pathname: oe(D, { gizmoId: a }),
            search: new URLSearchParams({ messageId: j, conversation_save: `1` }).toString(),
          }));
      }),
      (t[9] = D),
      (t[10] = j),
      (t[11] = n),
      (t[12] = r),
      (t[13] = a),
      (t[14] = d),
      (t[15] = I))
    : (I = t[15]);
  let L = I,
    R;
  t[16] !== n || t[17] !== y || t[18] !== a || t[19] !== F || t[20] !== d
    ? ((R = async () => {
        if (!F || d.get(H) !== `ready`) return;
        let e = V(d, a, n);
        (await y({ type: `delete`, saveId: F }), A(d, se, e));
      }),
      (t[16] = n),
      (t[17] = y),
      (t[18] = a),
      (t[19] = F),
      (t[20] = d),
      (t[21] = R))
    : (R = t[21]);
  let z = R,
    B;
  t[22] === d
    ? (B = t[23])
    : ((B = (e) => {
        e.name !== `AbortError` &&
          d
            .get(ne)
            .danger(
              (0, Y.jsx)(s, {
                id: `chatgptProjectSaves.actionFailed`,
                defaultMessage: `Unable to update saved response. Please try again.`,
                description: `Error toast when a saved response could not be removed from a ChatGPT project or its management dialog could not open`,
              }),
              { errorAnalytics: { toastId: `chatgptProjectSaves.actionFailed` } },
            );
      }),
      (t[22] = d),
      (t[23] = B));
  let U = B,
    W;
  t[24] !== D || t[25] !== f || t[26] !== j || t[27] !== L || t[28] !== l
    ? ((W =
        D && j
          ? (0, Y.jsx)(`button`, {
              className: `absolute inset-0 cursor-interaction focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
              "aria-label": f.formatMessage(
                {
                  id: `chatgptProjectSaves.openOriginalLabel`,
                  defaultMessage: `Open original response: {title}`,
                  description: `Accessible label for opening a saved project response at its original message in the chat`,
                },
                { title: l },
              ),
              title: l,
              type: `button`,
              onClick: L,
            })
          : null),
      (t[24] = D),
      (t[25] = f),
      (t[26] = j),
      (t[27] = L),
      (t[28] = l),
      (t[29] = W))
    : (W = t[29]);
  let G;
  t[30] !== T ||
  t[31] !== D ||
  t[32] !== z ||
  t[33] !== h ||
  t[34] !== f ||
  t[35] !== v ||
  t[36] !== j ||
  t[37] !== n ||
  t[38] !== g ||
  t[39] !== L ||
  t[40] !== a ||
  t[41] !== F ||
  t[42] !== d ||
  t[43] !== U ||
  t[44] !== l ||
  t[45] !== b
    ? ((G = T
        ? (0, Y.jsx)(`div`, {
            className: `relative`,
            children: (0, Y.jsx)(i, {
              align: `end`,
              open: g,
              onOpenChange: _,
              triggerButton: (0, Y.jsx)(u, {
                "aria-busy": v,
                label: f.formatMessage(
                  {
                    id: `chatgptProjectSaves.actionsLabel`,
                    defaultMessage: `Actions for {title}`,
                    description: `Accessible label for the menu on a saved response in a ChatGPT project's sources`,
                  },
                  { title: l },
                ),
              }),
              children: (0, Y.jsxs)(p.Group, {
                children: [
                  (0, Y.jsx)(p.Item, {
                    disabled: !D || !j,
                    leftIcon: (0, Y.jsx)(re, {}),
                    onSelect: L,
                    children: (0, Y.jsx)(s, {
                      id: `chatgptProjectSaves.showOriginal`,
                      defaultMessage: `Show original chat`,
                      description: `Menu action opening the original chat at the response saved to a ChatGPT project`,
                    }),
                  }),
                  (0, Y.jsx)(p.Item, {
                    disabled: !F || v || h !== `ready`,
                    leftIcon: (0, Y.jsx)(te, {}),
                    onSelect: () => {
                      let e = d.get(O),
                        t = d.get(N);
                      e != null &&
                        t != null &&
                        d.get(H) === `ready` &&
                        (A(d, ce, V(d, a, n)),
                        K(d, {
                          accountId: e,
                          action: `rename`,
                          metadata: n,
                          projectId: a,
                          title: l,
                          userId: t,
                        }).catch(U));
                    },
                    children: (0, Y.jsx)(s, {
                      id: `chatgptProjectSaves.rename`,
                      defaultMessage: `Rename`,
                      description: `Menu action renaming a response saved to a ChatGPT project`,
                    }),
                  }),
                  (0, Y.jsx)(p.Item, {
                    disabled: !F || v || h !== `ready`,
                    leftIcon: (0, Y.jsx)(ae, {}),
                    tone: `danger`,
                    onSelect: () => {
                      let e = d.get(O),
                        t = d.get(N);
                      e != null &&
                        t != null &&
                        d.get(H) === `ready` &&
                        (V(d, a, n).isSharedProject
                          ? K(d, {
                              accountId: e,
                              action: `delete`,
                              metadata: n,
                              projectId: a,
                              title: l,
                              userId: t,
                            }).catch(U)
                          : z().catch(U));
                    },
                    children:
                      v && b?.type === `delete` && b.saveId === F
                        ? (0, Y.jsx)(s, {
                            id: `chatgptProjectSaves.removing`,
                            defaultMessage: `Removing…`,
                            description: `Disabled menu action while this saved response is being removed from a ChatGPT project`,
                          })
                        : (0, Y.jsx)(s, {
                            id: `chatgptProjectSaves.remove`,
                            defaultMessage: `Remove`,
                            description: `Menu action removing a saved response from a ChatGPT project`,
                          }),
                  }),
                ],
              }),
            }),
          })
        : null),
      (t[30] = T),
      (t[31] = D),
      (t[32] = z),
      (t[33] = h),
      (t[34] = f),
      (t[35] = v),
      (t[36] = j),
      (t[37] = n),
      (t[38] = g),
      (t[39] = L),
      (t[40] = a),
      (t[41] = F),
      (t[42] = d),
      (t[43] = U),
      (t[44] = l),
      (t[45] = b),
      (t[46] = G))
    : (G = t[46]);
  let X;
  return (
    t[47] !== G || t[48] !== W
      ? ((X = (0, Y.jsxs)(Y.Fragment, { children: [W, G] })), (t[47] = G), (t[48] = W), (t[49] = X))
      : (X = t[49]),
    X
  );
}
async function K(e, t) {
  let { ProjectSaveSourceDialog: n } = await h(
    async () => {
      let { ProjectSaveSourceDialog: e } = await import(`./source-dialogs-62d5bed6ccbd.js`);
      return { ProjectSaveSourceDialog: e };
    },
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
    import.meta.url,
  );
  e.get(H) === `ready` && e.get(O) === t.accountId && e.get(N) === t.userId && k(e, n, t);
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = y()),
      j(),
      l(),
      (J = S()),
      g(),
      L(),
      R(),
      r(),
      f(),
      D(),
      n(),
      _(),
      M(),
      b(),
      z(),
      T(),
      a(),
      U(),
      W(),
      (Y = x()),
      ie());
  }))();
}
function me(e) {
  let t = (0, Z.c)(12),
    { metadata: n, projectId: r, timestamp: i } = e,
    a = m(),
    { data: o } = C(P, r),
    c = n.creator_id,
    l;
  if (o != null && w(o) && c) {
    if (o.gizmo.author.user_id === c) l = o.gizmo.author.display_name ?? void 0;
    else {
      let e;
      t[0] !== c || t[1] !== o.gizmo.sharing?.subjects
        ? ((e = o.gizmo.sharing?.subjects.find((e) => e.type === 1 && e.user_id === c)),
          (t[0] = c),
          (t[1] = o.gizmo.sharing?.subjects),
          (t[2] = e))
        : (e = t[2]);
      let n = e;
      n?.type === 1 && (l = n.user_name ?? void 0);
    }
  }
  if (i === 0) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(s, {
            id: `chatgptProjectSaves.sourceDescription`,
            defaultMessage: `Saved response`,
            description: `Source type shown for a saved response when its creation date is unavailable in a ChatGPT project's sources`,
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  if (l) {
    let e = l,
      n;
    t[4] !== a || t[5] !== i
      ? ((n = a.formatDate(i, { month: `short`, day: `numeric`, year: `numeric` })),
        (t[4] = a),
        (t[5] = i),
        (t[6] = n))
      : (n = t[6]);
    let r;
    return (
      t[7] !== l || t[8] !== n
        ? ((r = (0, Q.jsx)(s, {
            id: `chatgptProjectSaves.ownerAndCreatedDate`,
            defaultMessage: `{ownerName} · {createdDate}`,
            description: `Metadata below a saved response in a shared ChatGPT project's sources; ownerName is the creator's display name and createdDate is its localized creation date`,
            values: { ownerName: e, createdDate: n },
          })),
          (t[7] = l),
          (t[8] = n),
          (t[9] = r))
        : (r = t[9]),
      r
    );
  }
  let u;
  return (
    t[10] === i
      ? (u = t[11])
      : ((u = (0, Q.jsx)(d, { value: i, month: `short`, day: `numeric`, year: `numeric` })),
        (t[10] = i),
        (t[11] = u)),
    u
  );
}
var Z, Q;
function he() {
  return (he = e(() => {
    ((Z = y()), l(), g(), z(), E(), (Q = x()));
  }))();
}
function ge(e) {
  let n = (0, ve.c)(14),
    { attachments: r, canRetry: i, onRetry: a } = e,
    o,
    c,
    l,
    u;
  if (n[0] !== r || n[1] !== i || n[2] !== a) {
    u = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = r.filter(_e);
      if (e.length === 0) {
        u = null;
        break bb0;
      }
      ((o = `polite`), (c = `flex flex-col gap-2`));
      let d;
      (n[7] !== i || n[8] !== a
        ? ((d = (e) => {
            let { file: n, status: r, error: o } = e,
              c = B(o),
              l;
            return (
              (l =
                r === `pending`
                  ? (0, $.jsx)(s, {
                      id: `chatgptProjectHome.sources.attachmentPending`,
                      defaultMessage: `Adding to Sources…`,
                      description: `Status shown while an already uploaded file is being attached to a ChatGPT project's Sources`,
                    })
                  : c === `limit`
                    ? (0, $.jsx)(s, {
                        id: `chatgptProjectHome.sources.attachmentLimit`,
                        defaultMessage: `Remove a source to make room, then retry`,
                        description: `Status shown when an uploaded file could not be attached to a ChatGPT project because the project has reached its source limit`,
                      })
                    : c === `access`
                      ? (0, $.jsx)(s, {
                          id: `chatgptProjectHome.sources.attachmentAccess`,
                          defaultMessage: `Sources are unavailable or you don’t have permission to add files`,
                          description: `Status shown when attaching an uploaded file to a ChatGPT project fails because the project sources are unavailable or the user lacks access`,
                        })
                      : c === `rejected`
                        ? (0, $.jsx)(s, {
                            id: `chatgptProjectHome.sources.attachmentRejected`,
                            defaultMessage: `This file can’t be added to Sources`,
                            description: `Status shown when a ChatGPT project rejects an uploaded file and attaching it again is not supported`,
                          })
                        : (0, $.jsx)(s, {
                            id: `chatgptProjectHome.sources.attachmentFailed`,
                            defaultMessage: `Couldn’t add to Sources. Try again.`,
                            description: `Status shown after a retryable failure to attach an already uploaded file to a ChatGPT project's Sources`,
                          })),
              (0, $.jsxs)(
                `li`,
                {
                  className: `flex items-center justify-between gap-3 px-3 py-2`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex min-w-0 flex-1 flex-col gap-0.5`,
                      children: [
                        (0, $.jsx)(`span`, { className: `truncate text-sm text-default`, children: n.name }),
                        (0, $.jsx)(`span`, {
                          className: `text-sm text-secondary select-none`,
                          role: r === `failed` ? `alert` : void 0,
                          children: l,
                        }),
                      ],
                    }),
                    r === `failed` && i && F(o)
                      ? (0, $.jsx)(t, {
                          color: `ghostSecondary`,
                          onClick: () => a(n.file_id),
                          type: `button`,
                          children: (0, $.jsx)(s, {
                            id: `chatgptProjectHome.sources.retryAttachment`,
                            defaultMessage: `Retry`,
                            description: `Button that retries attaching an already uploaded file to a ChatGPT project without uploading the file again`,
                          }),
                        })
                      : null,
                  ],
                },
                n.file_id,
              )
            );
          }),
          (n[7] = i),
          (n[8] = a),
          (n[9] = d))
        : (d = n[9]),
        (l = e.map(d)));
    }
    ((n[0] = r), (n[1] = i), (n[2] = a), (n[3] = o), (n[4] = c), (n[5] = l), (n[6] = u));
  } else ((o = n[3]), (c = n[4]), (l = n[5]), (u = n[6]));
  if (u !== Symbol.for(`react.early_return_sentinel`)) return u;
  let d;
  return (
    n[10] !== o || n[11] !== c || n[12] !== l
      ? ((d = (0, $.jsx)(`ul`, { "aria-live": o, className: c, children: l })),
        (n[10] = o),
        (n[11] = c),
        (n[12] = l),
        (n[13] = d))
      : (d = n[13]),
    d
  );
}
function _e(e) {
  return e.status !== `saved`;
}
var ve, $;
function ye() {
  return (ye = e(() => {
    ((ve = y()), g(), v(), I(), ($ = x()));
  }))();
}
export { G as a, he as i, ye as n, X as o, me as r, ge as t };
//# sourceMappingURL=file-attachment-status-586c52bfa9c0.js.map
