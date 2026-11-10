import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  Eit as i,
  F3 as a,
  FBt as o,
  I3 as s,
  LNt as c,
  MNt as l,
  NCt as u,
  NNt as d,
  Oit as f,
  PBt as p,
  Pit as m,
  Qq as h,
  Qst as g,
  RFt as _,
  SCt as v,
  TCt as y,
  TY as b,
  Vrt as x,
  XOt as S,
  Y3 as C,
  Z3 as w,
  ZSt as T,
  aCt as E,
  e6 as D,
  eO as O,
  iCt as k,
  jit as A,
  mCt as j,
  nB as M,
  nCt as N,
  okt as P,
  qrt as F,
  rB as I,
  tCt as ee,
  tO as te,
  tkt as L,
  zFt as ne,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A8 as R,
  Air as re,
  BRr as ie,
  Bht as ae,
  CIr as z,
  EWn as oe,
  Fx as se,
  GYn as B,
  I2n as V,
  I5 as ce,
  IS as le,
  IVr as H,
  IWn as ue,
  Ix as de,
  JYn as fe,
  Jpn as pe,
  L2n as me,
  L5 as he,
  Lpn as ge,
  MOr as U,
  Mir as _e,
  NVr as ve,
  Nmt as ye,
  Ozn as be,
  PVr as xe,
  Px as W,
  QOr as G,
  RS as Se,
  SIr as K,
  Smt as Ce,
  Zht as we,
  ab as Te,
  ax as Ee,
  bLn as q,
  bmt as De,
  dmt as J,
  dx as Y,
  hmt as Oe,
  ib as ke,
  izn as Ae,
  j8 as je,
  kVr as X,
  lkr as Z,
  nzn as Me,
  pb as Ne,
  px as Pe,
  rS as Fe,
  sS as Ie,
  sx as Le,
  tgt as Re,
  tzn as ze,
  umt as Be,
  vLn as Ve,
  wLr as He,
  wmt as Ue,
  xMr as We,
  yLn as Ge,
  yMr as Ke,
  zOr as qe,
  zRr as Je,
} from "./app-initial-ad16eaadf81f.js";
import { n as Ye, r as Xe, t as Ze } from "./scope-d4449ae19bab.js";
import { n as Qe, t as $e } from "./context-58add9b49ff2.js";
import { n as et, t as tt } from "./editable-writing-block-c63092446a34.js";
import { n as nt, t as rt } from "./chatgpt-writing-block-ai-tools-548b856a3cd1.js";
import { i as it, t as at } from "./writing-block-surface-2bef314d86c0.js";
import { a as ot, d as st } from "./types-b46e00871847.js";
import { n as ct, r as lt, t as ut } from "./library-multiplayer-access-eac3de12d373.js";
import { n as dt, r as ft } from "./menu-1e62df6de238.js";
import { a as pt, n as mt, t as ht } from "./file-actions-menu-6e870edcf7c5.js";
import { r as gt, t as _t } from "./library-artifact-preview-chrome-696f2d2b7883.js";
import { n as vt, r as yt, t as bt } from "./entry-d53dfcb57e93.js";
import { n as xt, t as St } from "./preview-262cc6ad6e97.js";
import { r as Ct, t as wt } from "./library-cloud-file-preview-cea0f3cb4b0c.js";
import { i as Tt, n as Et, r as Dt } from "./preview-layout-ada06d877162.js";
import { n as Ot, t as kt } from "./actions-menu-b5f8424d3705.js";
function At(e) {
  let t = Ft(e);
  if (t == null) return `Untitled.md`;
  let n = je(t).replaceAll(/[\\/]/g, `-`).trim();
  return n === `` ? `Untitled.md` : `${It(n)}.md`;
}
function jt(e) {
  return Rt == null ? Array.from(e) : Array.from(Rt.segment(e), ({ segment: e }) => e);
}
function Mt(e) {
  return e
    .map((e) => {
      switch (e.type) {
        case `text`:
          if (typeof e.text == `string`) return O(e.text);
          break;
        case `strong`:
        case `em`:
        case `del`:
        case `link`:
        case `image`:
          if (e.tokens != null) return Mt(e.tokens);
          break;
        case `html`:
          return ``;
      }
      return zt.parseInline([e], Bt);
    })
    .join(``);
}
function Nt(e) {
  return (
    e.type === `blockquote` ||
    e.type === `code` ||
    e.type === `heading` ||
    e.type === `list` ||
    e.type === `paragraph`
  );
}
function Pt(e) {
  if (e == null || !Nt(e)) return ``;
  switch (e.type) {
    case `heading`:
    case `paragraph`:
      return Mt(e.tokens);
    case `list`: {
      let t = e.items[0];
      return t == null ? `` : Mt(H.lexInline(t.text));
    }
    case `blockquote`:
      return Pt(e.tokens[0]);
    case `code`:
      return e.text;
  }
}
function Ft(e) {
  for (let t of e.split(/\r\n?|\n/)) {
    if (t.trim() === ``) continue;
    let e = Pt(H.lex(t, { gfm: !0 })[0])
      .replace(/^\[[ xX]\]\s+/, ``)
      .replaceAll(/\s+/g, ` `)
      .replaceAll(/\p{Cc}/gu, ``)
      .trim();
    if (e !== ``) return e;
  }
  return null;
}
function It(e) {
  let t = jt(e);
  if (t.length <= Lt) return e;
  let n = t.slice(0, Lt).join(``);
  if (t[Lt] === ` `) return n;
  let r = n.lastIndexOf(` `);
  return r === -1 ? n : n.slice(0, r);
}
var Lt, Rt, zt, Bt;
function Vt() {
  return (Vt = e(() => {
    (R(),
      xe(),
      te(),
      (Lt = 50),
      (Rt =
        typeof Intl.Segmenter == `function` ? new Intl.Segmenter(void 0, { granularity: `grapheme` }) : null),
      (zt = new ve()),
      (Bt = new X()));
  }))();
}
function Ht(e) {
  return e.file == null ? !!e.content.trim() : e.content !== e.savedContent || e.fileName !== e.file.name;
}
var Ut, Wt, Gt;
function Kt() {
  return (Kt = e(() => {
    (vt(),
      be(),
      st(),
      he(),
      T(),
      He(),
      V(),
      fe(),
      x(),
      K(),
      Ve(),
      r(),
      _(),
      m(),
      f(),
      Vt(),
      Be(),
      ge(),
      ye(),
      W(),
      Ue(),
      (Ut = v(g, (e) => ({}))),
      (Wt = j(g, ({ id: e, accountId: t, userId: n }, { scope: r }) => ({
        queryKey: [`library-api`, t, n, `note-content`, e],
        staleTime: 0,
        refetchOnMount: !0,
        queryFn: async ({ signal: n }) => {
          let { content_url: a } = await r
              .get(ae, t)
              .safeGet(`/files/library/files/{library_file_id}/content_url`, {
                parameters: { path: { library_file_id: e } },
                signal: n,
              }),
            o = B({ download_url: a });
          return (
            await i
              .getInstance()
              .fetch(o.downloadUrl, {
                headers: o.requestHeaders == null ? void 0 : { ...o.requestHeaders, "ChatGPT-Account-ID": t },
                signal: n,
              })
          ).text();
        },
      }))),
      (Gt = y(
        g,
        (e, { scope: t, signal: n, externalSignal: r }) => {
          let {
              initial: i,
              id: a,
              analyticsContext: o,
              directoryId: s,
              accountId: c,
              userId: l,
              originBasePath: d,
            } = e,
            f = { accountId: c, userId: l },
            p = l ?? t.get(ie),
            m = n({
              content: i?.content ?? ``,
              file: i?.file ?? null,
              fileName: i?.file.name ?? `Untitled.md`,
              savedContent: i?.content ?? ``,
              saving: !1,
              failure: null,
              versionNumber: i?.versionNumber,
            }),
            h,
            g,
            _,
            v = !1,
            y = i != null,
            b = 0,
            x = !1,
            S,
            C = n(null),
            w = null,
            T,
            E,
            D,
            O,
            k,
            j = r(
              () => w,
              ({ set: e }) => (
                (k = e),
                e(w),
                () => {
                  k = void 0;
                }
              ),
            ),
            M = () => t.get(Je) === c && (p == null || t.get(ie) === p),
            N = () => {
              (E?.abort(),
                (E = void 0),
                (T = void 0),
                w != null &&
                  ((D = { kind: ot.UPDATE, update: w.editor.encodeFullState() }),
                  w.destroy().catch((e) => {
                    ne.warning(`Failed to close the multiplayer document`, {
                      safe: {},
                      sensitive: { error: e },
                    });
                  }),
                  (w = null),
                  k?.(null)));
            },
            P = () => {
              if (w != null) return Promise.resolve(w);
              if (T != null) return T;
              if (!M() || p == null) return Promise.reject(Error(`The note's account is no longer active.`));
              let e = new AbortController();
              E = e;
              let n = bt(t, a, { accountId: c, userId: p }, e.signal, D)
                .then(async (n) => {
                  if (e.signal.aborted || !M())
                    throw (await n.destroy(), Error(`The note's account is no longer active.`));
                  ((w = n),
                    n.subscribeToEditorChanges(() => {
                      if (!M() || e.signal.aborted) return;
                      let t = n.editor.snapshot().document;
                      if (t != null) {
                        let e = ce({
                          isMultiplayerImageSupportEnabled: !0,
                          isMultiplayerImageIdentityEnabled: !0,
                        });
                        R(e.serialize(e.schema().nodeFromJSON(t.ast)));
                      }
                    }));
                  let r = t.get(m).file;
                  return (r != null && n.connect(r.id), k?.(n), n);
                })
                .catch((n) => {
                  throw (E === e && !e.signal.aborted && t.set(m, (e) => ({ ...e, failure: `save` })), n);
                })
                .finally(() => {
                  T === n && (T = void 0);
                });
              return ((T = n), n);
            },
            I = (e) => {
              let t = !M() || (e instanceof Error && e.name === `AbortError`);
              ne[t ? `debug` : `warning`](`Failed to initialize the multiplayer Library note`, {
                safe: {},
                sensitive: { error: e },
              });
            },
            ee = () => {
              (t.queryClient.invalidateQueries({ queryKey: [`library-api`, c] }),
                t.queryClient.invalidateQueries({ queryKey: [`4231797315`] }));
              let e = t.get(m).file;
              e != null && t.queryClient.invalidateQueries({ queryKey: [`library-file-preview-text`, e.id] });
            },
            te = async () => {
              (S?.close(), (S = void 0));
              let e = t.get(m).failure != null;
              t.set(m, (e) => ({ ...e, saving: !0, failure: null }));
              try {
                let n = t.get(C) ? await P() : null;
                for (e && t.get(m).file != null && n?.state?.failure != null && n.retry(); ;) {
                  let e = t.get(m);
                  if (
                    !Ht(e) &&
                    (e.file != null || (!v && _ == null)) &&
                    (e.file == null || n?.state?.localEditsSynced !== !1)
                  )
                    return !0;
                  let r = e.file == null;
                  r && _ == null && (_ = { content: e.content, fileName: e.fileName });
                  let { content: i, fileName: l } =
                      r && _ != null ? _ : { content: e.content, fileName: e.fileName },
                    u = t.get(ae, c);
                  if (!M()) return (t.set(m, (e) => ({ ...e, failure: `save` })), !1);
                  let d;
                  if (e.file == null)
                    d = await u.safePost(`/files/library/files/inline-content`, {
                      requestBody: {
                        content:
                          (n == null && i) ||
                          `
`,
                        file_name: l,
                        create_key: a,
                        directory_id: s,
                        library_file_info: { library_artifact_type: `writing_block` },
                      },
                      expectedErrorStatuses: [413],
                      isExpectedError: me,
                      signal: n?.signal,
                    });
                  else if (n != null) {
                    if ((await n.save(), n.signal.throwIfAborted(), l === e.file.name)) {
                      t.set(m, (e) => ({ ...e, savedContent: i }));
                      continue;
                    }
                    d = await u.safePatch(`/files/library/files/{library_file_id}`, {
                      parameters: { path: { library_file_id: e.file.id } },
                      requestBody: { file_name: l },
                      signal: n.signal,
                    });
                  } else
                    d = await u.safePatch(`/files/library/files/{library_file_id}`, {
                      parameters: { path: { library_file_id: e.file.id } },
                      requestBody: {
                        inline_content:
                          i ||
                          `
`,
                        file_name: l,
                      },
                      expectedErrorStatuses: [409, 413],
                      isExpectedError: me,
                    });
                  if (!d.id || !d.file_id)
                    throw new A(`Created Library note is missing its file id`, 502, `missing_library_file`);
                  if (
                    (t.set(m, (e) => ({
                      ...e,
                      file: pe(d).node,
                      savedContent: n == null || !r ? i : e.savedContent,
                      versionNumber: d.current_version_number ?? void 0,
                      fileName: e.fileName === l ? d.file_name : e.fileName,
                    })),
                    r &&
                      (t.set(Ut, f, (e) => ({ ...e, [d.id]: a })),
                      Oe(t, o, {
                        action: ze.CHATGPT_FILE_LIBRARY_NOTE_EDITOR_ACTION_CREATED,
                        libraryFileId: d.id,
                      })),
                    n != null && r)
                  ) {
                    if ((n.signal.throwIfAborted(), !M()))
                      throw Error(`The note's account is no longer active.`);
                    (n.connect(d.id), await n.save(), t.set(m, (e) => ({ ...e, savedContent: i })));
                  }
                  ee();
                }
              } catch (e) {
                let n = Ce(e)?.httpStatus,
                  r = `save`;
                if (
                  (me(e) ? (r = `storage`) : n === 413 && (r = `size`),
                  (r === `storage` || r === `size`) && (_ = void 0),
                  t.set(m, (e) => ({ ...e, failure: r })),
                  r === `storage`)
                ) {
                  let e = t.get(z);
                  S = t
                    .get(F)
                    .danger(
                      t.get(m).file == null
                        ? e.formatMessage({
                            id: `libraryNext.note.create.failed`,
                            defaultMessage: `Failed to create note`,
                            description: `Toast when creating a Library note fails; the draft is retained for retry`,
                          })
                        : e.formatMessage({
                            id: `libraryNext.note.update.failed`,
                            defaultMessage: `Failed to save note`,
                            description: `Toast when saving a Library note fails; unsaved edits are retained for retry`,
                          }),
                      {
                        duration: 1 / 0,
                        primaryAction: {
                          label: e.formatMessage({
                            id: `libraryNext.note.save.tryAgain`,
                            defaultMessage: `Try again`,
                            description: `Action in the Library note save failure toast to retry saving the retained draft`,
                          }),
                          onClick: async () => {
                            await L();
                          },
                        },
                        errorAnalytics: { toastId: `libraryNext.note.save.storage` },
                      },
                    );
                }
                return (
                  ne[M() ? `warning` : `debug`](`Failed to save the Library note`, {
                    safe: { failure: r },
                    sensitive: { error: e },
                  }),
                  Oe(t, o, {
                    action: ze.CHATGPT_FILE_LIBRARY_NOTE_EDITOR_ACTION_FAILED,
                    step: Me.CHATGPT_FILE_LIBRARY_NOTE_EDITOR_STEP_EDITOR,
                    error: e,
                  }),
                  !1
                );
              } finally {
                (clearTimeout(h), t.set(m, (e) => ({ ...e, saving: !1 })));
              }
            },
            L = () => (
              clearTimeout(h),
              (g ??= te().finally(() => {
                g = void 0;
              })),
              g
            ),
            R = (e) => {
              (t.set(m, (t) => ({ ...t, content: e, fileName: y ? t.fileName : At(e) })),
                clearTimeout(h),
                t.get(m).failure ??
                  (h = setTimeout(() => {
                    L();
                  }, 500)));
            };
          return {
            state$: m,
            multiplayer$: C,
            multiplayerSession$: j,
            edit: R,
            flush: L,
            async ensureFile() {
              return (
                (v = !0),
                !(await L()) || (t.get(m).file == null && !(await L())) ? null : t.get(m).file
              );
            },
            replaceSavedDocument(e) {
              let n = t.get(m);
              return g != null || Ht(n) || n.file?.id !== e.file.id
                ? !1
                : (t.set(m, {
                    content: e.content,
                    savedContent: e.content,
                    file: e.file,
                    fileName: e.file.name,
                    saving: !1,
                    failure: null,
                    versionNumber: e.versionNumber,
                  }),
                  !0);
            },
            attach({ multiplayer: n = !1 } = {}) {
              ((b += 1), t.set(C, (e) => e ?? n));
              let r = t.get(C);
              return (
                r && O == null
                  ? (O = t.watch(({ get: e }) => (e(Je) === c && e(ie) === p && b > 0 && P().catch(I), N)))
                  : r && M() && P().catch(I),
                i == null &&
                  !x &&
                  ((x = !0),
                  Oe(t, o, {
                    action: ze.CHATGPT_FILE_LIBRARY_NOTE_EDITOR_ACTION_SHOWN,
                    step: Me.CHATGPT_FILE_LIBRARY_NOTE_EDITOR_STEP_EDITOR,
                  })),
                () => {
                  if ((--b, t.get(m).failure === `storage`)) {
                    clearTimeout(h);
                    return;
                  }
                  L().then((n) => {
                    if (
                      (b === 0 &&
                        !n &&
                        t.get(m).failure !== `storage` &&
                        t
                          .get(F)
                          .danger(
                            Ge(d ?? `/space`, q(t))
                              ? t
                                  .get(z)
                                  .formatMessage({
                                    id: `libraryNext.note.save.backgroundFailure.space`,
                                    defaultMessage: `Note changes weren’t saved. Return to Space to try again. For a new note, choose New → Note to reopen your draft`,
                                    description: `Persistent warning when autosaving a Space note fails after leaving its editor. Saved notes can be reopened from Space; a new unsaved draft is restored using New then Note. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                                  })
                              : t
                                  .get(z)
                                  .formatMessage({
                                    id: `libraryNext.note.save.backgroundFailure`,
                                    defaultMessage: `Note changes weren’t saved. Return to Library to retry; for a new note, choose New → Note to reopen your draft`,
                                    description: `Persistent warning when autosaving a Library note fails after leaving its editor. Saved notes can be reopened from Library; a new unsaved draft is restored using New then Note.`,
                                  }),
                            {
                              duration: 1 / 0,
                              errorAnalytics: { toastId: `libraryNext.note.save.backgroundFailure` },
                            },
                          ),
                      b === 0 && n)
                    ) {
                      (O?.(), (O = void 0));
                      let n = t.get(m).file;
                      n != null &&
                        t.set(Ut, f, (e) => {
                          let t = { ...e };
                          return (delete t[n.id], t);
                        });
                      let r = t.get(se, f);
                      (r?.entry == null && r?.noteId === a && t.set(se, f, null), u(t, Gt, e));
                    }
                  });
                }
              );
            },
          };
        },
        { key: ({ id: e, accountId: t, userId: n }) => JSON.stringify([t, n, e]) },
      )));
  }))();
}
function qt(e) {
  let t = (0, Jt.c)(20),
    { autoFocus: n, context: r, isEditable: i, renderFrame: a, renderViewerMenu: o } = e,
    { state: s, renderView: c } = r,
    l;
  t[0] !== i || t[1] !== s.editorView || t[2] !== s.generatePluginState
    ? ((l = {
        editorView: s.editorView,
        enableAiTools: i,
        generatePluginState: s.generatePluginState,
        isEditable: i,
        serverConversationId: void 0,
        showMagicEditAction: !1,
      }),
      (t[0] = i),
      (t[1] = s.editorView),
      (t[2] = s.generatePluginState),
      (t[3] = l))
    : (l = t[3]);
  let u = nt(l),
    d;
  t[4] !== u || t[5] !== n
    ? ((d = (e) => {
        let t = u.createEditor(e);
        return (
          n &&
            queueMicrotask(() => {
              t.view.isDestroyed || t.view.focus();
            }),
          t
        );
      }),
      (t[4] = u),
      (t[5] = n),
      (t[6] = d))
    : (d = t[6]);
  let f;
  return (
    t[7] !== u.editorOverlays ||
    t[8] !== u.editorRootRef ||
    t[9] !== u.isEditorInteractionDisabled ||
    t[10] !== u.isHistoryInteractionDisabled ||
    t[11] !== u.magicEdit.isLoading ||
    t[12] !== u.onEditorKeyDownCapture ||
    t[13] !== u.onEditorPointerDownCapture ||
    t[14] !== u.resetAiTools ||
    t[15] !== a ||
    t[16] !== c ||
    t[17] !== o ||
    t[18] !== d
      ? ((f = c({
          actionsPresentation: `viewer`,
          createEditor: d,
          editorInteractionDisabled: u.isEditorInteractionDisabled,
          editorOverlays: u.editorOverlays,
          editorRootRef: u.editorRootRef,
          fillAvailableHeight: !0,
          historyInteractionDisabled: u.isHistoryInteractionDisabled,
          isMagicEditSubmitting: u.magicEdit.isLoading,
          onBeforeExternalContentUpdate: u.resetAiTools,
          onEditorKeyDownCapture: u.onEditorKeyDownCapture,
          onEditorPointerDownCapture: u.onEditorPointerDownCapture,
          renderFrame: a,
          renderViewerMenu: o,
        })),
        (t[7] = u.editorOverlays),
        (t[8] = u.editorRootRef),
        (t[9] = u.isEditorInteractionDisabled),
        (t[10] = u.isHistoryInteractionDisabled),
        (t[11] = u.magicEdit.isLoading),
        (t[12] = u.onEditorKeyDownCapture),
        (t[13] = u.onEditorPointerDownCapture),
        (t[14] = u.resetAiTools),
        (t[15] = a),
        (t[16] = c),
        (t[17] = o),
        (t[18] = d),
        (t[19] = f))
      : (f = t[19]),
    f
  );
}
var Jt;
function Yt() {
  return (Yt = e(() => {
    ((Jt = p()), rt());
  }))();
}
function Xt(e) {
  let r = (0, $t.c)(161),
    {
      accountId: i,
      userId: a,
      editorKey: o,
      request: s,
      session: c,
      multiplayer: u,
      reloadStatus: d,
      onReload: f,
      onClose: p,
      isCurrent: m,
      showComposer: g,
      tabId: _,
    } = e,
    v = g === void 0 || g,
    y = n(Ze),
    b = P(),
    x = k(c.state$),
    S = k(c.multiplayerSession$),
    w = k(Xe),
    T = k(Re),
    E;
  r[0] === x ? (E = r[1]) : ((E = Ht(x)), (r[0] = x), (r[1] = E));
  let D = E,
    O = d != null,
    A;
  r[2] === x.fileName ? (A = r[3]) : ((A = je(x.fileName)), (r[2] = x.fileName), (r[3] = A));
  let j = A,
    N = (0, en.useRef)(!1),
    [I, ee] = (0, en.useState)(!1),
    te;
  r[4] !== p || r[5] !== s || r[6] !== y || r[7] !== c
    ? ((te = async () => {
        if (y.get(c.state$).failure === `storage`) {
          p();
          return;
        }
        let e = await c.flush();
        (e || y.get(c.state$).failure === `storage`) &&
          (e &&
            y.get(c.state$).file == null &&
            Oe(y, s.analyticsContext, {
              action: ze.CHATGPT_FILE_LIBRARY_NOTE_EDITOR_ACTION_CANCELED,
              step: Me.CHATGPT_FILE_LIBRARY_NOTE_EDITOR_STEP_EDITOR,
            }),
          p());
      }),
      (r[4] = p),
      (r[5] = s),
      (r[6] = y),
      (r[7] = c),
      (r[8] = te))
    : (te = r[8]);
  let R = te,
    ae;
  r[9] !== i || r[10] !== b || r[11] !== m || r[12] !== s || r[13] !== y || r[14] !== c || r[15] !== a
    ? ((ae = () => {
        if (N.current) return;
        if (!navigator.onLine) {
          y.get(F).warning(
            b.formatMessage({
              id: `libraryNext.note.share.offline`,
              defaultMessage: `You’re offline. Connect to the internet to share this note`,
              description: `Toast after clicking Share in the Library note editor without an internet connection. The note draft stays in the editor and can be shared after reconnecting.`,
            }),
          );
          return;
        }
        ((N.current = !0), ee(!0));
        let e = y.get(re),
          t = y.get(de);
        (s.entry ?? y.set(se, { accountId: i, userId: a }, s),
          c
            .ensureFile()
            .then((n) => {
              if (!(
                y.get(re) !== e ||
                (m == null ? y.get(de) !== t : !m()) ||
                y.get(Je) !== i ||
                (a != null && y.get(ie) !== a)
              )) {
                if (n == null) {
                  y.get(F).warning(
                    b.formatMessage({
                      id: `libraryNext.note.share.saveFailed`,
                      defaultMessage: `Couldn’t save this note for sharing. Try again`,
                      description: `Toast after Share cannot save a Library note. The draft is preserved so the user can retry sharing.`,
                    }),
                  );
                  return;
                }
                return Pe(y, { accountId: i, entry: { node: n } });
              }
            })
            .finally(() => {
              ((N.current = !1), ee(!1));
            }));
      }),
      (r[9] = i),
      (r[10] = b),
      (r[11] = m),
      (r[12] = s),
      (r[13] = y),
      (r[14] = c),
      (r[15] = a),
      (r[16] = ae))
    : (ae = r[16]);
  let z = ae,
    B = x.file,
    V,
    ce;
  r[17] === B
    ? ((V = r[18]), (ce = r[19]))
    : ((V = B == null ? void 0 : pt(B)),
      (ce = V == null ? void 0 : Ee(V)),
      (r[17] = B),
      (r[18] = V),
      (r[19] = ce));
  let H = ce,
    ue;
  r[20] !== B || r[21] !== b || r[22] !== s || r[23] !== y
    ? ((ue = async (e) => {
        try {
          (await Fe(e),
            B != null && De(y, [B.id], Ae.CHATGPT_FILE_LIBRARY_ORIGIN_FILE_PREVIEW, s.analyticsContext));
        } catch (e) {
          let t = e;
          (ne.warning(`Failed to download Library note`, { safe: {}, sensitive: { error: t } }),
            y
              .get(F)
              .danger(
                b.formatMessage({
                  id: `libraryFilePreview.downloadError`,
                  defaultMessage: `Unable to download file`,
                  description: `Toast shown when downloading a Library file from the preview fails`,
                }),
                { errorAnalytics: { toastId: `libraryFilePreview.downloadError` } },
              ));
        }
      }),
      (r[20] = B),
      (r[21] = b),
      (r[22] = s),
      (r[23] = y),
      (r[24] = ue))
    : (ue = r[24]);
  let fe = ue,
    pe;
  r[25] !== fe || r[26] !== y || r[27] !== c
    ? ((pe = async () => {
        if (!(await c.flush())) return;
        let e = y.get(c.state$).file;
        e != null &&
          (await fe({
            file_id: e.file_id ?? e.id,
            file_name: e.name,
            gizmo_id: e.gizmo_id,
            mime_type: e.mime_type,
          }));
      }),
      (r[25] = fe),
      (r[26] = y),
      (r[27] = c),
      (r[28] = pe))
    : (pe = r[28]);
  let me = pe,
    he;
  r[29] !== R ||
  r[30] !== D ||
  r[31] !== B ||
  r[32] !== w ||
  r[33] !== p ||
  r[34] !== O ||
  r[35] !== s ||
  r[36] !== y ||
  r[37] !== c ||
  r[38] !== x.saving
    ? ((he = (e) =>
        B == null
          ? null
          : (0, Q.jsx)(ht, {
              enableDelete: !0,
              analyticsContext: s.analyticsContext,
              entry: { ...s.entry, node: B },
              footer: e,
              knownParentDirectories: s.entry == null ? void 0 : s.knownParentDirectories,
              navigationDisabled: D || x.saving || O,
              onDeleted: p,
              onOpenLibrary: () => void R(),
              versionHistoryAction:
                w == null
                  ? null
                  : (0, Q.jsx)(dt, {
                      file: w.file,
                      disabled: O || w.isRestoring,
                      onSelect: () => {
                        c.flush().then((e) => {
                          e && y.get(Xe)?.open();
                        });
                      },
                    }),
            })),
      (r[29] = R),
      (r[30] = D),
      (r[31] = B),
      (r[32] = w),
      (r[33] = p),
      (r[34] = O),
      (r[35] = s),
      (r[36] = y),
      (r[37] = c),
      (r[38] = x.saving),
      (r[39] = he))
    : (he = r[39]);
  let ge = he,
    U = w?.isOpen ? w.selectedVersion : void 0,
    _e;
  r[40] !== B ||
  r[41] !== U?.file_id ||
  r[42] !== U?.file_name ||
  r[43] !== U?.file_size_bytes ||
  r[44] !== U?.gizmo_id ||
  r[45] !== U?.library_artifact_type ||
  r[46] !== U?.library_file_category ||
  r[47] !== U?.mime_type ||
  r[48] !== U?.origination_message_id ||
  r[49] !== U?.origination_thread_id
    ? ((_e =
        B == null
          ? null
          : {
              id: B.id,
              file_id: U?.file_id ?? B.file_id ?? B.id,
              file_name: U?.file_name ?? B.name,
              library_artifact_type: U?.library_artifact_type ?? B.library_artifact_type,
              origination_thread_id: U?.origination_thread_id ?? B.origination_thread_id,
              origination_message_id: U?.origination_message_id ?? B.origination_message_id,
              file_size_bytes: U?.file_size_bytes ?? B.file_size_bytes,
              gizmo_id: U?.gizmo_id ?? B.gizmo_id,
              library_file_category: U?.library_file_category ?? B.library_file_category ?? `text`,
              mime_type: U?.mime_type ?? B.mime_type,
            }),
      (r[40] = B),
      (r[41] = U?.file_id),
      (r[42] = U?.file_name),
      (r[43] = U?.file_size_bytes),
      (r[44] = U?.gizmo_id),
      (r[45] = U?.library_artifact_type),
      (r[46] = U?.library_file_category),
      (r[47] = U?.mime_type),
      (r[48] = U?.origination_message_id),
      (r[49] = U?.origination_thread_id),
      (r[50] = _e))
    : (_e = r[50]);
  let ve = _e,
    ye = w?.isOpen || w?.isRestoring || O,
    be;
  r[51] !== B || r[52] !== O || r[53] !== T
    ? ((be = !O && T && (B == null || le({ node: B }))), (r[51] = B), (r[52] = O), (r[53] = T), (r[54] = be))
    : (be = r[54]);
  let xe = be,
    W;
  r[55] !== c || r[56] !== x.failure
    ? ((W =
        x.failure != null && x.failure !== `storage`
          ? (0, Q.jsxs)(`div`, {
              role: `alert`,
              className: `mx-auto flex w-[min(48rem,calc(100vw-2rem))] max-w-full flex-col gap-2 px-toolbar pt-8 text-danger`,
              children: [
                (0, Q.jsx)(Qt, { failure: x.failure }),
                (0, Q.jsx)(C, {
                  color: `ghost`,
                  onClick: () => void c.flush(),
                  children: (0, Q.jsx)(L, {
                    id: `libraryNext.note.save.retry`,
                    defaultMessage: `Retry`,
                    description: `Button to retry saving the preserved Library note draft`,
                  }),
                }),
              ],
            })
          : null),
      (r[55] = c),
      (r[56] = x.failure),
      (r[57] = W))
    : (W = r[57]);
  let G = W,
    Se;
  r[58] !== i ||
  r[59] !== D ||
  r[60] !== o ||
  r[61] !== B ||
  r[62] !== w?.isOpen ||
  r[63] !== p ||
  r[64] !== ve ||
  r[65] !== O ||
  r[66] !== s ||
  r[67] !== y ||
  r[68] !== c ||
  r[69] !== v ||
  r[70] !== x.failure ||
  r[71] !== x.saving ||
  r[72] !== a
    ? ((Se =
        !v || w?.isOpen || O
          ? null
          : (0, Q.jsx)(
              wt,
              {
                disableAutoFocus: s.entry == null,
                draftId: o,
                file: ve,
                imageSrc: null,
                submitDisabled: B == null || D || x.saving || x.failure != null,
                onUserInput: () => {
                  let e = y.get(c.state$);
                  e.file != null ||
                    e.saving ||
                    e.failure != null ||
                    (s.entry ?? y.set(se, { accountId: i, userId: a }, s), c.ensureFile());
                },
                onClose: p,
                renderSurface: Zt,
              },
              o,
            )),
      (r[58] = i),
      (r[59] = D),
      (r[60] = o),
      (r[61] = B),
      (r[62] = w?.isOpen),
      (r[63] = p),
      (r[64] = ve),
      (r[65] = O),
      (r[66] = s),
      (r[67] = y),
      (r[68] = c),
      (r[69] = v),
      (r[70] = x.failure),
      (r[71] = x.saving),
      (r[72] = a),
      (r[73] = Se))
    : (Se = r[73]);
  let K = Se;
  if (u) {
    if (S == null) {
      let e;
      return (
        r[74] !== H ||
        r[75] !== i ||
        r[76] !== R ||
        r[77] !== V ||
        r[78] !== w ||
        r[79] !== G ||
        r[80] !== x.failure ||
        r[81] !== x.fileName ||
        r[82] !== _ ||
        r[83] !== a
          ? ((e =
              x.failure == null
                ? (0, Q.jsx)(ke, { fileName: x.fileName, importKind: `writing-block` })
                : (0, Q.jsx)(Dt, {
                    assetName: null,
                    contentOwnsHeader: !0,
                    onClose: () => void R(),
                    children: (0, Q.jsx)(_t, {
                      accountId: i,
                      accessoryOwnerId: H,
                      actions: (0, Q.jsx)(kt, { title: x.fileName, onClose: () => void R() }),
                      contentFade: !0,
                      placement: Ne(`text-document`),
                      filePreviewKind: `text-document`,
                      fileInfoSource: V,
                      title: x.fileName,
                      onClose: () => void R(),
                      tabId: _,
                      userId: a,
                      versionHistory: w ?? void 0,
                      children: G,
                    }),
                  })),
            (r[74] = H),
            (r[75] = i),
            (r[76] = R),
            (r[77] = V),
            (r[78] = w),
            (r[79] = G),
            (r[80] = x.failure),
            (r[81] = x.fileName),
            (r[82] = _),
            (r[83] = a),
            (r[84] = e))
          : (e = r[84]),
        e
      );
    }
    let e = s.entry == null,
      t = B?.id,
      n;
    r[85] === B ? (n = r[86]) : ((n = B == null ? void 0 : { node: B }), (r[85] = B), (r[86] = n));
    let o;
    r[87] === R ? (o = r[88]) : ((o = () => void R()), (r[87] = R), (r[88] = o));
    let l = xe ? z : void 0,
      u;
    r[89] === c ? (u = r[90]) : ((u = async () => (await c.ensureFile())?.id), (r[89] = c), (r[90] = u));
    let d = x.saving && x.failure == null,
      f = w ?? void 0,
      p;
    return (
      r[91] !== H ||
      r[92] !== i ||
      r[93] !== K ||
      r[94] !== S ||
      r[95] !== V ||
      r[96] !== G ||
      r[97] !== x.fileName ||
      r[98] !== e ||
      r[99] !== t ||
      r[100] !== n ||
      r[101] !== o ||
      r[102] !== l ||
      r[103] !== u ||
      r[104] !== d ||
      r[105] !== f ||
      r[106] !== _ ||
      r[107] !== a
        ? ((p = (0, Q.jsx)(tn, {
            accountId: i,
            accessoryOwnerId: H,
            autoFocus: e,
            bottomContent: K,
            documentId: t,
            entry: n,
            fileInfoSource: V,
            notice: G,
            onClose: o,
            tabId: _,
            onShare: l,
            prepareImageUpload: u,
            saving: d,
            session: S,
            title: x.fileName,
            userId: a,
            versionHistory: f,
          })),
          (r[91] = H),
          (r[92] = i),
          (r[93] = K),
          (r[94] = S),
          (r[95] = V),
          (r[96] = G),
          (r[97] = x.fileName),
          (r[98] = e),
          (r[99] = t),
          (r[100] = n),
          (r[101] = o),
          (r[102] = l),
          (r[103] = u),
          (r[104] = d),
          (r[105] = f),
          (r[106] = _),
          (r[107] = a),
          (r[108] = p))
        : (p = r[108]),
      p
    );
  }
  let Ce = x.content,
    we = !ye,
    Te = B?.id,
    q;
  r[109] === b
    ? (q = r[110])
    : ((q = b.formatMessage({
        id: `libraryNext.note.editor.placeholder`,
        defaultMessage: `Write or type '/' for commands…`,
        description: `Placeholder in the full-page Library note editor; typing slash opens formatting commands`,
      })),
      (r[109] = b),
      (r[110] = q));
  let J;
  r[111] !== i || r[112] !== s || r[113] !== y || r[114] !== c || r[115] !== a
    ? ((J = (e) => {
        (s.entry ?? y.set(se, { accountId: i, userId: a }, s), c.edit(e));
      }),
      (r[111] = i),
      (r[112] = s),
      (r[113] = y),
      (r[114] = c),
      (r[115] = a),
      (r[116] = J))
    : (J = r[116]);
  let Y;
  r[117] !== y || r[118] !== c
    ? ((Y = () => {
        y.get(c.state$).failure !== `storage` && c.flush();
      }),
      (r[117] = y),
      (r[118] = c),
      (r[119] = Y))
    : (Y = r[119]);
  let X;
  r[120] !== B || r[121] !== y
    ? ((X = () => {
        B != null && We(y, oe, { libraryFileId: B.id, variant: `standard` });
      }),
      (r[120] = B),
      (r[121] = y),
      (r[122] = X))
    : (X = r[122]);
  let Z;
  r[123] !== H ||
  r[124] !== i ||
  r[125] !== K ||
  r[126] !== xe ||
  r[127] !== R ||
  r[128] !== me ||
  r[129] !== ye ||
  r[130] !== B ||
  r[131] !== V ||
  r[132] !== w ||
  r[133] !== b ||
  r[134] !== G ||
  r[135] !== f ||
  r[136] !== U ||
  r[137] !== O ||
  r[138] !== d ||
  r[139] !== ge ||
  r[140] !== s.entry ||
  r[141] !== z ||
  r[142] !== I ||
  r[143] !== x.failure ||
  r[144] !== x.saving ||
  r[145] !== _ ||
  r[146] !== j ||
  r[147] !== a
    ? ((Z = (e) =>
        (0, Q.jsx)(qt, {
          autoFocus: s.entry == null,
          context: e,
          isEditable: !ye,
          renderViewerMenu: ge,
          renderFrame: (e) => {
            let { actions: n, children: r, leadingContent: o } = e;
            return (0, Q.jsx)(Dt, {
              assetName: null,
              contentOwnsHeader: !0,
              bottomContent: K,
              onClose: () => {
                R();
              },
              children: (0, Q.jsx)(_t, {
                accountId: i,
                accessoryOwnerId: H,
                actions: o,
                contentFade: !0,
                placement: Ne(`text-document`),
                historyControlGroup: n,
                downloadDisabled: O || w?.isRestoring === !0,
                onClose: () => void R(),
                tabId: _,
                onDownload:
                  s.entry != null && B != null
                    ? () => {
                        me();
                      }
                    : void 0,
                onShare: xe ? z : void 0,
                shareDisabled: I || w?.isRestoring === !0,
                status:
                  x.saving && x.failure == null
                    ? (0, Q.jsx)(M, {
                        tooltipContent: b.formatMessage({
                          id: `libraryNext.note.save.pending`,
                          defaultMessage: `Saving…`,
                          description: `Status while the Library note is saving automatically`,
                        }),
                        children: (0, Q.jsxs)(`span`, {
                          role: `status`,
                          className: `inline-flex shrink-0 text-tertiary select-none`,
                          children: [
                            (0, Q.jsx)(t, { as: `span`, Icon: h }),
                            (0, Q.jsx)(`span`, {
                              className: `sr-only`,
                              children: (0, Q.jsx)(L, {
                                id: `libraryNext.note.save.pending`,
                                defaultMessage: `Saving…`,
                                description: `Status while the Library note is saving automatically`,
                              }),
                            }),
                          ],
                        }),
                      })
                    : null,
                title: j,
                versionHistoryEnabled: w != null,
                filePreviewKind: `text-document`,
                fileInfoSource: V,
                userId: a,
                versionHistory: w ?? void 0,
                children:
                  w?.isOpen && U != null
                    ? (0, Q.jsx)(`div`, {
                        className: `relative h-full min-h-0 overflow-hidden bg-surface`,
                        children: (0, Q.jsx)(`div`, {
                          className: `h-full overflow-y-auto pt-24`,
                          children: (0, Q.jsx)(
                            St,
                            {
                              serverConversationId: U.origination_thread_id ?? B?.origination_thread_id,
                              version: U,
                            },
                            U.file_id,
                          ),
                        }),
                      })
                    : (0, Q.jsx)(`div`, {
                        className: `relative isolate flex h-full min-h-0 flex-col`,
                        "data-writing-block-table-controls-container": !0,
                        children: (0, Q.jsx)(at, {
                          className: l(
                            `flex h-full min-h-0 flex-1 flex-col overflow-y-auto [--wb-editor-page-max-width:min(48rem,calc(100vw-2rem))] [--wb-editor-page-inline-inset:var(--padding-toolbar)] [--wb-editor-page-bottom-inset:calc(var(--spacing)*8)]`,
                            x.failure != null && `[--wb-editor-page-top-inset:0px]`,
                          ),
                          children: (0, Q.jsxs)(`div`, {
                            className: `flex grow flex-col`,
                            children: [
                              d === `pending`
                                ? (0, Q.jsx)(`div`, {
                                    role: `status`,
                                    className: `mx-auto w-[min(48rem,calc(100vw-2rem))] max-w-full px-toolbar pt-8`,
                                    children: (0, Q.jsx)(L, {
                                      id: `libraryNext.note.restore.loading`,
                                      defaultMessage: `Loading restored version…`,
                                      description: `Status while the Library note editor loads the content of a successfully restored version`,
                                    }),
                                  })
                                : null,
                              d === `failed`
                                ? (0, Q.jsxs)(`div`, {
                                    role: `alert`,
                                    className: `mx-auto flex w-[min(48rem,calc(100vw-2rem))] max-w-full flex-col gap-2 px-toolbar pt-8 text-danger`,
                                    children: [
                                      (0, Q.jsx)(L, {
                                        id: `libraryNext.note.restore.loadFailed`,
                                        defaultMessage: `This version was restored, but couldn’t be loaded. Retry before editing`,
                                        description: `The Library version restore succeeded but downloading its content failed; editing remains disabled until retry succeeds`,
                                      }),
                                      (0, Q.jsx)(C, {
                                        color: `ghost`,
                                        onClick: f,
                                        children: (0, Q.jsx)(L, {
                                          id: `libraryNext.note.restore.retry`,
                                          defaultMessage: `Retry`,
                                          description: `Button to retry loading a restored Library note before allowing editing`,
                                        }),
                                      }),
                                    ],
                                  })
                                : null,
                              G,
                              O ? null : r,
                            ],
                          }),
                        }),
                      }),
              }),
            });
          },
        })),
      (r[123] = H),
      (r[124] = i),
      (r[125] = K),
      (r[126] = xe),
      (r[127] = R),
      (r[128] = me),
      (r[129] = ye),
      (r[130] = B),
      (r[131] = V),
      (r[132] = w),
      (r[133] = b),
      (r[134] = G),
      (r[135] = f),
      (r[136] = U),
      (r[137] = O),
      (r[138] = d),
      (r[139] = ge),
      (r[140] = s.entry),
      (r[141] = z),
      (r[142] = I),
      (r[143] = x.failure),
      (r[144] = x.saving),
      (r[145] = _),
      (r[146] = j),
      (r[147] = a),
      (r[148] = Z))
    : (Z = r[148]);
  let Ie;
  return (
    r[149] !== o ||
    r[150] !== O ||
    r[151] !== x.content ||
    r[152] !== we ||
    r[153] !== Te ||
    r[154] !== q ||
    r[155] !== J ||
    r[156] !== Y ||
    r[157] !== X ||
    r[158] !== Z ||
    r[159] !== j
      ? ((Ie = (0, Q.jsx)(tt, {
          content: Ce,
          copyInteractionDisabled: O,
          editorKey: o,
          emailMetadata: void 0,
          isEditable: we,
          libraryFileId: Te,
          title: j,
          variant: void 0,
          testId: `library-note-editor`,
          placeholder: q,
          onContentChange: J,
          onBlur: Y,
          onCopy: X,
          render: Z,
        })),
        (r[149] = o),
        (r[150] = O),
        (r[151] = x.content),
        (r[152] = we),
        (r[153] = Te),
        (r[154] = q),
        (r[155] = J),
        (r[156] = Y),
        (r[157] = X),
        (r[158] = Z),
        (r[159] = j),
        (r[160] = Ie))
      : (Ie = r[160]),
    Ie
  );
}
function Zt(e) {
  let { renderComposer: t } = e;
  return t == null ? null : (0, Q.jsx)(Et, { children: t });
}
function Qt(e) {
  let t = (0, $t.c)(2),
    { failure: n } = e;
  switch (n) {
    case `size`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(L, {
              id: `libraryNext.note.save.size`,
              defaultMessage: `This note is too large. Shorten it and retry`,
              description: `Library note autosave failed because the note exceeds the size limit`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `save`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(L, {
              id: `libraryNext.note.save.failed`,
              defaultMessage: `Your edits haven’t been saved. Try again`,
              description: `Library note autosave failure; edits remain in the editor for retry`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
  }
}
var $t, en, Q, tn;
function nn() {
  return (nn = e(() => {
    (($t = p()),
      vt(),
      ue(),
      be(),
      R(),
      d(),
      T(),
      (en = o()),
      S(),
      _e(),
      He(),
      Le(),
      ft(),
      Ye(),
      w(),
      b(),
      a(),
      D(),
      x(),
      I(),
      we(),
      Ke(),
      _(),
      et(),
      xt(),
      it(),
      Se(),
      Y(),
      Be(),
      mt(),
      W(),
      gt(),
      Ct(),
      Ie(),
      Te(),
      Tt(),
      Ot(),
      Kt(),
      Yt(),
      (Q = c()),
      (tn = s(yt)));
  }))();
}
function rn(e) {
  let t = (0, cn.c)(20),
    { routeScope: n, accountId: r, userId: i, entry: a, onClose: o, showComposer: s, tabId: c } = e,
    l = k(J),
    u;
  t[0] === n ? (u = t[1]) : ((u = n.getOwnValue(G)), (t[0] = n), (t[1] = u));
  let d;
  t[2] === n ? (d = t[3]) : ((d = n.getOwnValue(U)), (t[2] = n), (t[3] = d));
  let f;
  t[4] !== l || t[5] !== a
    ? ((f = { entry: a, analyticsContext: l }), (t[4] = l), (t[5] = a), (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== r || t[8] !== o || t[9] !== s || t[10] !== f || t[11] !== c || t[12] !== i
    ? ((p = (0, $.jsx)(an, { accountId: r, userId: i, request: f, onClose: o, showComposer: s, tabId: c })),
      (t[7] = r),
      (t[8] = o),
      (t[9] = s),
      (t[10] = f),
      (t[11] = c),
      (t[12] = i),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] !== d || t[15] !== p
    ? ((m = (0, $.jsx)(E, { scope: U, value: d, children: p })), (t[14] = d), (t[15] = p), (t[16] = m))
    : (m = t[16]);
  let h;
  return (
    t[17] !== u || t[18] !== m
      ? ((h = (0, $.jsx)(E, { scope: G, value: u, children: m })), (t[17] = u), (t[18] = m), (t[19] = h))
      : (h = t[19]),
    h
  );
}
function an(e) {
  let t = (0, cn.c)(18),
    { accountId: n, userId: r, request: i, onClose: a, isCurrent: o, showComposer: s, tabId: c } = e,
    l = s === void 0 || s,
    u = k(i.entry == null && ct);
  if (k(i.entry == null && lt)) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(ke, { importKind: `writing-block` })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (i.entry == null) {
    let e;
    return (
      t[1] !== n ||
      t[2] !== o ||
      t[3] !== u ||
      t[4] !== a ||
      t[5] !== i ||
      t[6] !== l ||
      t[7] !== c ||
      t[8] !== r
        ? ((e = (0, $.jsx)(sn, {
            accountId: n,
            userId: r,
            request: i,
            initial: null,
            multiplayer: u,
            onClose: a,
            isCurrent: o,
            showComposer: l,
            tabId: c,
          })),
          (t[1] = n),
          (t[2] = o),
          (t[3] = u),
          (t[4] = a),
          (t[5] = i),
          (t[6] = l),
          (t[7] = c),
          (t[8] = r),
          (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  let d;
  return (
    t[10] !== n || t[11] !== o || t[12] !== a || t[13] !== i || t[14] !== l || t[15] !== c || t[16] !== r
      ? ((d = (0, $.jsx)(on, {
          accountId: n,
          userId: r,
          request: i,
          onClose: a,
          isCurrent: o,
          showComposer: l,
          tabId: c,
        })),
        (t[10] = n),
        (t[11] = o),
        (t[12] = a),
        (t[13] = i),
        (t[14] = l),
        (t[15] = c),
        (t[16] = r),
        (t[17] = d))
      : (d = t[17]),
    d
  );
}
function on(e) {
  let t = (0, cn.c)(33),
    { accountId: r, userId: i, request: a, onClose: o, isCurrent: s, showComposer: c, tabId: l } = e,
    u = c === void 0 || c,
    d = n(g),
    f = a.entry.node,
    p = pt(f),
    m;
  t[0] === f.name ? (m = t[1]) : ((m = je(f.name)), (t[0] = f.name), (t[1] = m));
  let h = m,
    _ = k(Re),
    v;
  t[2] !== r || t[3] !== f.id || t[4] !== i
    ? ((v = { id: f.id, accountId: r, userId: i }), (t[2] = r), (t[3] = f.id), (t[4] = i), (t[5] = v))
    : (v = t[5]);
  let { data: y, isError: b, isFetchedAfterMount: x, refetch: S } = N(Wt, v);
  if (y == null || !x) {
    let e = Ee(p),
      n;
    t[6] !== o || t[7] !== a.analyticsContext || t[8] !== a.entry || t[9] !== a.knownParentDirectories
      ? ((n = (0, $.jsx)(ht, {
          analyticsContext: a.analyticsContext,
          entry: a.entry,
          knownParentDirectories: a.knownParentDirectories,
          onOpenLibrary: o,
        })),
        (t[6] = o),
        (t[7] = a.analyticsContext),
        (t[8] = a.entry),
        (t[9] = a.knownParentDirectories),
        (t[10] = n))
      : (n = t[10]);
    let s;
    t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = Ne(`text-document`)), (t[11] = s))
      : (s = t[11]);
    let c;
    t[12] !== r || t[13] !== a.entry || t[14] !== d || t[15] !== _
      ? ((c =
          _ && le(a.entry)
            ? () => {
                Pe(d, { accountId: r, entry: a.entry });
              }
            : void 0),
        (t[12] = r),
        (t[13] = a.entry),
        (t[14] = d),
        (t[15] = _),
        (t[16] = c))
      : (c = t[16]);
    let u;
    return (
      t[17] !== f.name || t[18] !== b || t[19] !== S
        ? ((u = b
            ? (0, $.jsx)(`div`, {
                className: `flex h-full items-center justify-center`,
                children: (0, $.jsx)(C, {
                  onClick: () => {
                    S();
                  },
                  children: (0, $.jsx)(L, {
                    id: `libraryNext.note.load.retry`,
                    defaultMessage: `Retry loading note`,
                    description: `Button in the Library note editor when loading the saved content fails`,
                  }),
                }),
              })
            : (0, $.jsx)(ke, { fileName: f.name, importKind: `writing-block` })),
          (t[17] = f.name),
          (t[18] = b),
          (t[19] = S),
          (t[20] = u))
        : (u = t[20]),
      (0, $.jsx)(Dt, {
        assetName: null,
        contentOwnsHeader: !0,
        onClose: o,
        children: (0, $.jsx)(_t, {
          accountId: r,
          accessoryOwnerId: e,
          actions: n,
          contentFade: !0,
          placement: s,
          fileInfoSource: p,
          filePreviewKind: `text-document`,
          onClose: o,
          onShare: c,
          tabId: l,
          title: h,
          userId: i,
          children: u,
        }),
      })
    );
  }
  let w;
  t[21] !== y || t[22] !== f
    ? ((w = { file: f, content: y }), (t[21] = y), (t[22] = f), (t[23] = w))
    : (w = t[23]);
  let T;
  return (
    t[24] !== r ||
    t[25] !== s ||
    t[26] !== o ||
    t[27] !== a ||
    t[28] !== u ||
    t[29] !== w ||
    t[30] !== l ||
    t[31] !== i
      ? ((T = (0, $.jsx)(sn, {
          accountId: r,
          userId: i,
          request: a,
          initial: w,
          onClose: o,
          isCurrent: s,
          showComposer: u,
          tabId: l,
        })),
        (t[24] = r),
        (t[25] = s),
        (t[26] = o),
        (t[27] = a),
        (t[28] = u),
        (t[29] = w),
        (t[30] = l),
        (t[31] = i),
        (t[32] = T))
      : (T = t[32]),
    T
  );
}
function sn(e) {
  let t = (0, cn.c)(50),
    {
      accountId: r,
      userId: i,
      request: a,
      initial: o,
      multiplayer: s,
      onClose: c,
      isCurrent: l,
      showComposer: u,
      tabId: d,
    } = e,
    f = s !== void 0 && s,
    p = u === void 0 || u,
    m = n(g),
    h;
  t[0] !== r || t[1] !== a.entry || t[2] !== a.noteId || t[3] !== m || t[4] !== i
    ? ((h =
        a.entry == null
          ? a.noteId
          : (m.get(Ut, { accountId: r, userId: i })[a.entry.node.id] ?? a.entry.node.id)),
      (t[0] = r),
      (t[1] = a.entry),
      (t[2] = a.noteId),
      (t[3] = m),
      (t[4] = i),
      (t[5] = h))
    : (h = t[5]);
  let _ = h,
    v = m.get(re).pathname?.startsWith(`/library`) ? `/library` : `/space`,
    y = a.entry == null ? a.directoryId : null,
    b;
  t[6] !== r ||
  t[7] !== _ ||
  t[8] !== o ||
  t[9] !== v ||
  t[10] !== a.analyticsContext ||
  t[11] !== y ||
  t[12] !== i
    ? ((b = {
        accountId: r,
        userId: i,
        id: _,
        initial: o,
        directoryId: y,
        analyticsContext: a.analyticsContext,
        originBasePath: v,
      }),
      (t[6] = r),
      (t[7] = _),
      (t[8] = o),
      (t[9] = v),
      (t[10] = a.analyticsContext),
      (t[11] = y),
      (t[12] = i),
      (t[13] = b))
    : (b = t[13]);
  let x = ee(Gt, b),
    S = k(x.state$),
    C = k(x.multiplayer$) ?? f,
    [w, T] = (0, ln.useState)(null),
    E,
    D;
  (t[14] !== r || t[15] !== C || t[16] !== a || t[17] !== m || t[18] !== x || t[19] !== i
    ? ((E = () => (
        C && a.entry == null && m.set(se, { accountId: r, userId: i }, a),
        x.attach({ multiplayer: C })
      )),
      (D = [x, C, a, m, r, i]),
      (t[14] = r),
      (t[15] = C),
      (t[16] = a),
      (t[17] = m),
      (t[18] = x),
      (t[19] = i),
      (t[20] = E),
      (t[21] = D))
    : ((E = t[20]), (D = t[21])),
    (0, ln.useEffect)(E, D));
  let O;
  t[22] !== r || t[23] !== m.query || t[24] !== x || t[25] !== i
    ? ((O = async (e) => {
        T({ file: e, status: `pending` });
        try {
          let t = await m.query.fetch(Wt, { id: e.id, accountId: r, userId: i });
          if (
            x.replaceSavedDocument({
              file: pe(e).node,
              content: t,
              versionNumber: e.current_version_number ?? void 0,
            })
          ) {
            T(null);
            return;
          }
        } catch {}
        T({ file: e, status: `failed` });
      }),
      (t[22] = r),
      (t[23] = m.query),
      (t[24] = x),
      (t[25] = i),
      (t[26] = O))
    : (O = t[26]);
  let A = O,
    j = w?.status,
    M;
  t[27] !== A || t[28] !== w
    ? ((M = () => {
        w != null && A(w.file);
      }),
      (t[27] = A),
      (t[28] = w),
      (t[29] = M))
    : (M = t[29]);
  let N;
  t[30] !== r ||
  t[31] !== _ ||
  t[32] !== l ||
  t[33] !== C ||
  t[34] !== c ||
  t[35] !== a ||
  t[36] !== x ||
  t[37] !== p ||
  t[38] !== M ||
  t[39] !== j ||
  t[40] !== d ||
  t[41] !== i
    ? ((N = (0, $.jsx)(Xt, {
        accountId: r,
        userId: i,
        editorKey: _,
        request: a,
        session: x,
        multiplayer: C,
        reloadStatus: j,
        onReload: M,
        onClose: c,
        isCurrent: l,
        showComposer: p,
        tabId: d,
      })),
      (t[30] = r),
      (t[31] = _),
      (t[32] = l),
      (t[33] = C),
      (t[34] = c),
      (t[35] = a),
      (t[36] = x),
      (t[37] = p),
      (t[38] = M),
      (t[39] = j),
      (t[40] = d),
      (t[41] = i),
      (t[42] = N))
    : (N = t[42]);
  let P = N,
    F;
  t[43] !== C || t[44] !== S
    ? ((F =
        C || S.file == null
          ? void 0
          : {
              browserPreview: !0,
              conversationId: null,
              gizmoId: S.file.gizmo_id,
              libraryFileId: S.file.id,
              versionNumber: S.versionNumber,
            }),
      (t[43] = C),
      (t[44] = S),
      (t[45] = F))
    : (F = t[45]);
  let I;
  return (
    t[46] !== P || t[47] !== A || t[48] !== F
      ? ((I = (0, $.jsx)($e, { file: F, onRestored: A, children: P })),
        (t[46] = P),
        (t[47] = A),
        (t[48] = F),
        (t[49] = I))
      : (I = t[49]),
    I
  );
}
var cn, ln, $;
function un() {
  return (un = e(() => {
    ((cn = p()),
      R(),
      T(),
      (ln = o()),
      S(),
      _e(),
      Le(),
      Qe(),
      w(),
      we(),
      r(),
      qe(),
      Z(),
      Se(),
      Y(),
      Be(),
      ge(),
      ut(),
      mt(),
      W(),
      gt(),
      Te(),
      Tt(),
      nn(),
      Kt(),
      ($ = c()));
  }))();
}
un();
export { an as LibraryNotePreview, rn as LibraryRoutedNotePreview };
//# sourceMappingURL=preview-d25e6695f1ed.js.map
