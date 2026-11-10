const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./source-dialogs-b61e65e13127.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./data-99703db588c3.js",
      "./chatgpt-project-sources-9d1a715e38b6.js",
      "./source-queries-8e76fe9923fd.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  OFt as a,
  PBt as o,
  Qst as s,
  TY as c,
  Ty as l,
  Uot as u,
  Vot as ee,
  Vrt as d,
  WOt as f,
  XOt as p,
  Y3 as m,
  Z3 as h,
  ZSt as g,
  ck as _,
  fK as te,
  iCt as ne,
  kFt as v,
  nCt as y,
  okt as b,
  qrt as re,
  rk as x,
  sY as ie,
  tk as ae,
  tkt as S,
  uH as oe,
  wy as se,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Bn as C,
  A5n as w,
  D5n as T,
  GBn as E,
  Gen as ce,
  Gzn as D,
  Kzn as O,
  Mir as k,
  Nir as le,
  WBn as A,
  Wen as j,
  aVn as ue,
  bLr as M,
  eK as de,
  fK as N,
  oK as fe,
  qBn as P,
  rVn as F,
  sK as pe,
  wLr as I,
  xMr as L,
  yMr as R,
  zRr as z,
} from "./app-initial-ad16eaadf81f.js";
import { a as B, n as V, o as H, r as me, t as U } from "./data-99703db588c3.js";
function W(e) {
  let n = (0, K.c)(50),
    { metadata: r, onOpenOriginal: i, projectId: a, title: o } = e,
    c = t(s),
    l = b(),
    u = ne(V),
    [d, f] = (0, q.useState)(!1),
    { data: p } = y(D, a),
    { isPending: m, mutateAsync: h, variables: g } = y(me, a),
    _ = ce(),
    v = p?.gizmo.current_user_permission?.can_write,
    C;
  n[0] !== _ || n[1] !== v ? ((C = ue(v, _)), (n[0] = _), (n[1] = v), (n[2] = C)) : (C = n[2]);
  let w = C,
    T;
  n[3] === r.conversation_id
    ? (T = n[4])
    : ((T = r.conversation_id?.trim()), (n[3] = r.conversation_id), (n[4] = T));
  let E = T,
    O;
  n[5] === r.message_id ? (O = n[6]) : ((O = r.message_id?.trim()), (n[5] = r.message_id), (n[6] = O));
  let k = O,
    A;
  n[7] === r.save_id ? (A = n[8]) : ((A = r.save_id?.trim()), (n[7] = r.save_id), (n[8] = A));
  let j = A,
    N;
  n[9] !== E || n[10] !== k || n[11] !== r || n[12] !== i || n[13] !== a || n[14] !== c
    ? ((N = () => {
        E &&
          k &&
          (L(c, pe, { ...B(c, a, r), targetConversationId: E, targetMessageId: k }),
          i?.(),
          le(c, {
            pathname: ee(E, { gizmoId: a }),
            search: new URLSearchParams({ messageId: k, conversation_save: `1` }).toString(),
          }));
      }),
      (n[9] = E),
      (n[10] = k),
      (n[11] = r),
      (n[12] = i),
      (n[13] = a),
      (n[14] = c),
      (n[15] = N))
    : (N = n[15]);
  let P = N,
    F;
  n[16] !== r || n[17] !== h || n[18] !== a || n[19] !== j || n[20] !== c
    ? ((F = async () => {
        if (!j || c.get(V) !== `ready`) return;
        let e = B(c, a, r);
        (await h({ type: `delete`, saveId: j }), L(c, de, e));
      }),
      (n[16] = r),
      (n[17] = h),
      (n[18] = a),
      (n[19] = j),
      (n[20] = c),
      (n[21] = F))
    : (F = n[21]);
  let I = F,
    R;
  n[22] === c
    ? (R = n[23])
    : ((R = (e) => {
        e.name !== `AbortError` &&
          c
            .get(re)
            .danger(
              (0, J.jsx)(S, {
                id: `chatgptProjectSaves.actionFailed`,
                defaultMessage: `Unable to update saved response. Please try again.`,
                description: `Error toast when a saved response could not be removed from a ChatGPT project or its management dialog could not open`,
              }),
              { errorAnalytics: { toastId: `chatgptProjectSaves.actionFailed` } },
            );
      }),
      (n[22] = c),
      (n[23] = R));
  let H = R,
    U;
  n[24] !== E || n[25] !== l || n[26] !== k || n[27] !== P || n[28] !== o
    ? ((U =
        E && k
          ? (0, J.jsx)(`button`, {
              className: `absolute inset-0 cursor-interaction focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
              "aria-label": l.formatMessage(
                {
                  id: `chatgptProjectSaves.openOriginalLabel`,
                  defaultMessage: `Open original response: {title}`,
                  description: `Accessible label for opening a saved project response at its original message in the chat`,
                },
                { title: o },
              ),
              title: o,
              type: `button`,
              onClick: P,
            })
          : null),
      (n[24] = E),
      (n[25] = l),
      (n[26] = k),
      (n[27] = P),
      (n[28] = o),
      (n[29] = U))
    : (U = n[29]);
  let W;
  n[30] !== w ||
  n[31] !== E ||
  n[32] !== I ||
  n[33] !== u ||
  n[34] !== l ||
  n[35] !== m ||
  n[36] !== k ||
  n[37] !== r ||
  n[38] !== d ||
  n[39] !== P ||
  n[40] !== a ||
  n[41] !== j ||
  n[42] !== c ||
  n[43] !== H ||
  n[44] !== o ||
  n[45] !== g
    ? ((W = w
        ? (0, J.jsx)(`div`, {
            className: `relative`,
            children: (0, J.jsx)(ae, {
              align: `end`,
              open: d,
              onOpenChange: f,
              triggerButton: (0, J.jsx)(se, {
                "aria-busy": m,
                label: l.formatMessage(
                  {
                    id: `chatgptProjectSaves.actionsLabel`,
                    defaultMessage: `Actions for {title}`,
                    description: `Accessible label for the menu on a saved response in a ChatGPT project's sources`,
                  },
                  { title: o },
                ),
              }),
              children: (0, J.jsxs)(x.Group, {
                children: [
                  (0, J.jsx)(x.Item, {
                    disabled: !E || !k,
                    leftIcon: (0, J.jsx)(oe, {}),
                    onSelect: P,
                    children: (0, J.jsx)(S, {
                      id: `chatgptProjectSaves.showOriginal`,
                      defaultMessage: `Show original chat`,
                      description: `Menu action opening the original chat at the response saved to a ChatGPT project`,
                    }),
                  }),
                  (0, J.jsx)(x.Item, {
                    disabled: !j || m || u !== `ready`,
                    leftIcon: (0, J.jsx)(te, {}),
                    onSelect: () => {
                      let e = c.get(z),
                        t = c.get(M);
                      e != null &&
                        t != null &&
                        c.get(V) === `ready` &&
                        (L(c, fe, B(c, a, r)),
                        G(c, {
                          accountId: e,
                          action: `rename`,
                          metadata: r,
                          projectId: a,
                          title: o,
                          userId: t,
                        }).catch(H));
                    },
                    children: (0, J.jsx)(S, {
                      id: `chatgptProjectSaves.rename`,
                      defaultMessage: `Rename`,
                      description: `Menu action renaming a response saved to a ChatGPT project`,
                    }),
                  }),
                  (0, J.jsx)(x.Item, {
                    disabled: !j || m || u !== `ready`,
                    leftIcon: (0, J.jsx)(ie, {}),
                    tone: `danger`,
                    onSelect: () => {
                      let e = c.get(z),
                        t = c.get(M);
                      e != null &&
                        t != null &&
                        c.get(V) === `ready` &&
                        (B(c, a, r).isSharedProject
                          ? G(c, {
                              accountId: e,
                              action: `delete`,
                              metadata: r,
                              projectId: a,
                              title: o,
                              userId: t,
                            }).catch(H)
                          : I().catch(H));
                    },
                    children:
                      m && g?.type === `delete` && g.saveId === j
                        ? (0, J.jsx)(S, {
                            id: `chatgptProjectSaves.removing`,
                            defaultMessage: `Removing…`,
                            description: `Disabled menu action while this saved response is being removed from a ChatGPT project`,
                          })
                        : (0, J.jsx)(S, {
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
      (n[30] = w),
      (n[31] = E),
      (n[32] = I),
      (n[33] = u),
      (n[34] = l),
      (n[35] = m),
      (n[36] = k),
      (n[37] = r),
      (n[38] = d),
      (n[39] = P),
      (n[40] = a),
      (n[41] = j),
      (n[42] = c),
      (n[43] = H),
      (n[44] = o),
      (n[45] = g),
      (n[46] = W))
    : (W = n[46]);
  let Y;
  return (
    n[47] !== W || n[48] !== U
      ? ((Y = (0, J.jsxs)(J.Fragment, { children: [U, W] })), (n[47] = W), (n[48] = U), (n[49] = Y))
      : (Y = n[49]),
    Y
  );
}
async function G(e, t) {
  let { ProjectSaveSourceDialog: n } = await a(
    async () => {
      let { ProjectSaveSourceDialog: e } = await import(`./source-dialogs-b61e65e13127.js`);
      return { ProjectSaveSourceDialog: e };
    },
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
    import.meta.url,
  );
  e.get(V) === `ready` && e.get(z) === t.accountId && e.get(M) === t.userId && w(e, n, t);
}
var K, q, J;
function Y() {
  return (Y = e(() => {
    ((K = o()),
      N(),
      g(),
      (q = r()),
      p(),
      k(),
      I(),
      _(),
      c(),
      T(),
      l(),
      d(),
      R(),
      n(),
      O(),
      j(),
      u(),
      H(),
      U(),
      (J = i()),
      v());
  }))();
}
function he(e) {
  let t = (0, X.c)(12),
    { metadata: n, projectId: r, timestamp: i } = e,
    a = b(),
    { data: o } = y(D, r),
    s = n.creator_id,
    c;
  if (o != null && F(o) && s) {
    if (o.gizmo.author.user_id === s) c = o.gizmo.author.display_name ?? void 0;
    else {
      let e;
      t[0] !== s || t[1] !== o.gizmo.sharing?.subjects
        ? ((e = o.gizmo.sharing?.subjects.find((e) => e.type === 1 && e.user_id === s)),
          (t[0] = s),
          (t[1] = o.gizmo.sharing?.subjects),
          (t[2] = e))
        : (e = t[2]);
      let n = e;
      n?.type === 1 && (c = n.user_name ?? void 0);
    }
  }
  if (i === 0) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(S, {
            id: `chatgptProjectSaves.sourceDescription`,
            defaultMessage: `Saved response`,
            description: `Source type shown for a saved response when its creation date is unavailable in a ChatGPT project's sources`,
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  if (c) {
    let e = c,
      n;
    t[4] !== a || t[5] !== i
      ? ((n = a.formatDate(i, { month: `short`, day: `numeric`, year: `numeric` })),
        (t[4] = a),
        (t[5] = i),
        (t[6] = n))
      : (n = t[6]);
    let r;
    return (
      t[7] !== c || t[8] !== n
        ? ((r = (0, Z.jsx)(S, {
            id: `chatgptProjectSaves.ownerAndCreatedDate`,
            defaultMessage: `{ownerName} · {createdDate}`,
            description: `Metadata below a saved response in a shared ChatGPT project's sources; ownerName is the creator's display name and createdDate is its localized creation date`,
            values: { ownerName: e, createdDate: n },
          })),
          (t[7] = c),
          (t[8] = n),
          (t[9] = r))
        : (r = t[9]),
      r
    );
  }
  let l;
  return (
    t[10] === i
      ? (l = t[11])
      : ((l = (0, Z.jsx)(f, { value: i, month: `short`, day: `numeric`, year: `numeric` })),
        (t[10] = i),
        (t[11] = l)),
    l
  );
}
var X, Z;
function Q() {
  return (Q = e(() => {
    ((X = o()), g(), p(), O(), C(), (Z = i()));
  }))();
}
function ge(e) {
  let t = (0, ve.c)(14),
    { attachments: n, canRetry: r, onRetry: i } = e,
    a,
    o,
    s,
    c;
  if (t[0] !== n || t[1] !== r || t[2] !== i) {
    c = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = n.filter(_e);
      if (e.length === 0) {
        c = null;
        break bb0;
      }
      ((a = `polite`), (o = `flex flex-col gap-2`));
      let l;
      (t[7] !== r || t[8] !== i
        ? ((l = (e) => {
            let { file: t, status: n, error: a } = e,
              o = E(a),
              s;
            return (
              (s =
                n === `pending`
                  ? (0, $.jsx)(S, {
                      id: `chatgptProjectHome.sources.attachmentPending`,
                      defaultMessage: `Adding to Sources…`,
                      description: `Status shown while an already uploaded file is being attached to a ChatGPT project's Sources`,
                    })
                  : o === `limit`
                    ? (0, $.jsx)(S, {
                        id: `chatgptProjectHome.sources.attachmentLimit`,
                        defaultMessage: `Remove a source to make room, then retry`,
                        description: `Status shown when an uploaded file could not be attached to a ChatGPT project because the project has reached its source limit`,
                      })
                    : o === `access`
                      ? (0, $.jsx)(S, {
                          id: `chatgptProjectHome.sources.attachmentAccess`,
                          defaultMessage: `Sources are unavailable or you don’t have permission to add files`,
                          description: `Status shown when attaching an uploaded file to a ChatGPT project fails because the project sources are unavailable or the user lacks access`,
                        })
                      : o === `rejected`
                        ? (0, $.jsx)(S, {
                            id: `chatgptProjectHome.sources.attachmentRejected`,
                            defaultMessage: `This file can’t be added to Sources`,
                            description: `Status shown when a ChatGPT project rejects an uploaded file and attaching it again is not supported`,
                          })
                        : (0, $.jsx)(S, {
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
                        (0, $.jsx)(`span`, { className: `truncate text-sm text-default`, children: t.name }),
                        (0, $.jsx)(`span`, {
                          className: `text-sm text-secondary select-none`,
                          role: n === `failed` ? `alert` : void 0,
                          children: s,
                        }),
                      ],
                    }),
                    n === `failed` && r && A(a)
                      ? (0, $.jsx)(m, {
                          color: `ghostSecondary`,
                          onClick: () => i(t.file_id),
                          type: `button`,
                          children: (0, $.jsx)(S, {
                            id: `chatgptProjectHome.sources.retryAttachment`,
                            defaultMessage: `Retry`,
                            description: `Button that retries attaching an already uploaded file to a ChatGPT project without uploading the file again`,
                          }),
                        })
                      : null,
                  ],
                },
                t.file_id,
              )
            );
          }),
          (t[7] = r),
          (t[8] = i),
          (t[9] = l))
        : (l = t[9]),
        (s = e.map(l)));
    }
    ((t[0] = n), (t[1] = r), (t[2] = i), (t[3] = a), (t[4] = o), (t[5] = s), (t[6] = c));
  } else ((a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]));
  if (c !== Symbol.for(`react.early_return_sentinel`)) return c;
  let l;
  return (
    t[10] !== a || t[11] !== o || t[12] !== s
      ? ((l = (0, $.jsx)(`ul`, { "aria-live": a, className: o, children: s })),
        (t[10] = a),
        (t[11] = o),
        (t[12] = s),
        (t[13] = l))
      : (l = t[13]),
    l
  );
}
function _e(e) {
  return e.status !== `saved`;
}
var ve, $;
function ye() {
  return (ye = e(() => {
    ((ve = o()), p(), h(), P(), ($ = i()));
  }))();
}
export { W as a, Q as i, ye as n, Y as o, he as r, ge as t };
//# sourceMappingURL=file-attachment-status-151f8b7fbd10.js.map
