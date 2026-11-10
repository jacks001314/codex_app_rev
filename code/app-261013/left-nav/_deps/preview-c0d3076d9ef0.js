import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  B4 as n,
  CPt as r,
  Cot as i,
  Hxt as a,
  IDt as o,
  Iw as s,
  Ixt as c,
  Lw as l,
  Pxt as u,
  QK as d,
  Rxt as f,
  SPt as p,
  TJ as m,
  VDt as h,
  Vxt as g,
  Zxt as _,
  _Mt as v,
  aSt as y,
  cSt as b,
  cz as x,
  frt as S,
  gMt as C,
  gSt as w,
  hot as T,
  hrt as E,
  i3 as D,
  jDt as O,
  lot as k,
  r3 as A,
  sz as j,
  t3 as M,
  urt as N,
  vrt as P,
  vzt as F,
  wot as I,
  xMt as L,
  yzt as ee,
  z4 as te,
  zxt as R,
} from "./app-shared-bbfeca5e5737.js";
import {
  $ln as z,
  BIr as ne,
  Bmt as re,
  Cwr as B,
  FIr as V,
  Fb as ie,
  GMr as ae,
  Gy as oe,
  HIr as H,
  Hln as se,
  Iwr as ce,
  Iy as le,
  JNn as ue,
  KNn as de,
  Ly as fe,
  Nb as pe,
  Nx as me,
  OFn as he,
  QDr as ge,
  Vb as _e,
  Wmt as ve,
  XDr as U,
  XMr as ye,
  aIr as be,
  c$n as xe,
  c6 as Se,
  cx as W,
  dpt as Ce,
  eIn as we,
  gwr as Te,
  hpt as Ee,
  jFn as De,
  kFn as Oe,
  kmt as G,
  kx as ke,
  l$n as K,
  lIr as q,
  lS as Ae,
  lVn as je,
  lx as Me,
  m8 as Ne,
  npt as Pe,
  oIr as J,
  opt as Fe,
  p8 as Y,
  ppt as X,
  qNn as Z,
  qwr as Ie,
  s6 as Le,
  sIr as Re,
  sS as ze,
  tNr as Be,
  tpt as Ve,
  ux as He,
  wKn as Ue,
  wpt as We,
  xKn as Ge,
  yVn as Ke,
  zIr as qe,
  zb as Je,
} from "./app-initial-5851df3f6cb1.js";
import { n as Ye, r as Xe, t as Ze } from "./scope-fb5d3b4015cc.js";
import { n as Qe, t as $e } from "./context-38c75790ce9d.js";
import { n as et, t as tt } from "./editable-writing-block-67c0bb761270.js";
import { n as nt, t as rt } from "./chatgpt-writing-block-ai-tools-49a17c07b981.js";
import { i as it, t as at } from "./writing-block-surface-635635c06cb8.js";
import { a as ot, d as st } from "./types-b46e00871847.js";
import { n as ct, r as lt, t as ut } from "./library-multiplayer-access-d2184d962fe8.js";
import { n as dt, r as ft } from "./menu-53a4f4c3463d.js";
import {
  a as pt,
  c as mt,
  i as ht,
  r as gt,
  t as _t,
} from "./library-artifact-preview-chrome-65b42e599b90.js";
import { n as vt, r as yt, t as bt } from "./entry-ef8bf7c3d37d.js";
import { n as xt, t as St } from "./preview-b10b7af0f642.js";
import { r as Ct, t as wt } from "./library-cloud-file-preview-dc5b405ea2fb.js";
import { i as Tt, n as Et, r as Dt } from "./preview-layout-654555235726.js";
import { n as Ot, t as kt } from "./actions-menu-21f2f0dee98d.js";
function At(e) {
  let t = Ft(e);
  if (t == null) return `Untitled.md`;
  let n = Se(t).replaceAll(/[\\/]/g, `-`).trim();
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
          if (typeof e.text == `string`) return s(e.text);
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
    (Le(),
      ne(),
      l(),
      (Lt = 50),
      (Rt =
        typeof Intl.Segmenter == `function` ? new Intl.Segmenter(void 0, { granularity: `grapheme` }) : null),
      (zt = new qe()),
      (Bt = new V()));
  }))();
}
function Ht(e) {
  return e.file == null ? !!e.content.trim() : e.content !== e.savedContent || e.fileName !== e.file.name;
}
var Ut, Wt, Gt;
function Kt() {
  return (Kt = e(() => {
    (vt(),
      we(),
      st(),
      Ne(),
      u(),
      Be(),
      xe(),
      Ue(),
      k(),
      be(),
      de(),
      I(),
      p(),
      P(),
      S(),
      Vt(),
      Ve(),
      se(),
      We(),
      W(),
      Ee(),
      (Ut = y(i, (e) => ({}))),
      (Wt = _(i, ({ id: e, accountId: t, userId: n }, { scope: r }) => ({
        queryKey: [`library-api`, t, n, `note-content`, e],
        staleTime: 0,
        refetchOnMount: !0,
        queryFn: async ({ signal: n }) => {
          let { content_url: i } = await r
              .get(G, t)
              .safeGet(`/files/library/files/{library_file_id}/content_url`, {
                parameters: { path: { library_file_id: e } },
                signal: n,
              }),
            a = Ge({ download_url: i });
          return (
            await N.getInstance().fetch(a.downloadUrl, {
              headers: a.requestHeaders == null ? void 0 : { ...a.requestHeaders, "ChatGPT-Account-ID": t },
              signal: n,
            })
          ).text();
        },
      }))),
      (Gt = b(
        i,
        (e, { scope: t, signal: n, externalSignal: i }) => {
          let {
              initial: a,
              id: o,
              analyticsContext: s,
              directoryId: c,
              accountId: l,
              userId: u,
              originBasePath: d,
            } = e,
            f = { accountId: l, userId: u },
            p = u ?? t.get(ye),
            m = n({
              content: a?.content ?? ``,
              file: a?.file ?? null,
              fileName: a?.file.name ?? `Untitled.md`,
              savedContent: a?.content ?? ``,
              saving: !1,
              failure: null,
              versionNumber: a?.versionNumber,
            }),
            h,
            g,
            _,
            v = !1,
            y = a != null,
            b = 0,
            x = !1,
            S,
            C = n(null),
            D = null,
            O,
            k,
            A,
            j,
            M,
            N = i(
              () => D,
              ({ set: e }) => (
                (M = e),
                e(D),
                () => {
                  M = void 0;
                }
              ),
            ),
            P = () => t.get(ae) === l && (p == null || t.get(ye) === p),
            F = () => {
              (k?.abort(),
                (k = void 0),
                (O = void 0),
                D != null &&
                  ((A = { kind: ot.UPDATE, update: D.editor.encodeFullState() }),
                  D.destroy().catch((e) => {
                    r.warning(`Failed to close the multiplayer document`, {
                      safe: {},
                      sensitive: { error: e },
                    });
                  }),
                  (D = null),
                  M?.(null)));
            },
            I = () => {
              if (D != null) return Promise.resolve(D);
              if (O != null) return O;
              if (!P() || p == null) return Promise.reject(Error(`The note's account is no longer active.`));
              let e = new AbortController();
              k = e;
              let n = bt(t, o, { accountId: l, userId: p }, e.signal, A)
                .then(async (n) => {
                  if (e.signal.aborted || !P())
                    throw (await n.destroy(), Error(`The note's account is no longer active.`));
                  ((D = n),
                    n.subscribeToEditorChanges(() => {
                      if (!P() || e.signal.aborted) return;
                      let t = n.editor.snapshot().document;
                      if (t != null) {
                        let e = Y({
                          isMultiplayerImageSupportEnabled: !0,
                          isMultiplayerImageIdentityEnabled: !0,
                        });
                        ne(e.serialize(e.schema().nodeFromJSON(t.ast)));
                      }
                    }));
                  let r = t.get(m).file;
                  return (r != null && n.connect(r.id), M?.(n), n);
                })
                .catch((n) => {
                  throw (k === e && !e.signal.aborted && t.set(m, (e) => ({ ...e, failure: `save` })), n);
                })
                .finally(() => {
                  O === n && (O = void 0);
                });
              return ((O = n), n);
            },
            L = (e) => {
              let t = !P() || (e instanceof Error && e.name === `AbortError`);
              r[t ? `debug` : `warning`](`Failed to initialize the multiplayer Library note`, {
                safe: {},
                sensitive: { error: e },
              });
            },
            ee = () => {
              (t.queryClient.invalidateQueries({ queryKey: [`library-api`, l] }),
                t.queryClient.invalidateQueries({ queryKey: [`4231797315`] }));
              let e = t.get(m).file;
              e != null && t.queryClient.invalidateQueries({ queryKey: [`library-file-preview-text`, e.id] });
            },
            te = async () => {
              (S?.close(), (S = void 0));
              let e = t.get(m).failure != null;
              t.set(m, (e) => ({ ...e, saving: !0, failure: null }));
              try {
                let n = t.get(C) ? await I() : null;
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
                  let { content: i, fileName: a } =
                      r && _ != null ? _ : { content: e.content, fileName: e.fileName },
                    u = t.get(G, l);
                  if (!P()) return (t.set(m, (e) => ({ ...e, failure: `save` })), !1);
                  let d;
                  if (e.file == null)
                    d = await u.safePost(`/files/library/files/inline-content`, {
                      requestBody: {
                        content:
                          (n == null && i) ||
                          `
`,
                        file_name: a,
                        create_key: o,
                        directory_id: c,
                        library_file_info: { library_artifact_type: `writing_block` },
                      },
                      expectedErrorStatuses: [413],
                      isExpectedError: K,
                      signal: n?.signal,
                    });
                  else if (n != null) {
                    if ((await n.save(), n.signal.throwIfAborted(), a === e.file.name)) {
                      t.set(m, (e) => ({ ...e, savedContent: i }));
                      continue;
                    }
                    d = await u.safePatch(`/files/library/files/{library_file_id}`, {
                      parameters: { path: { library_file_id: e.file.id } },
                      requestBody: { file_name: a },
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
                        file_name: a,
                      },
                      expectedErrorStatuses: [409, 413],
                      isExpectedError: K,
                    });
                  if (!d.id || !d.file_id)
                    throw new E(`Created Library note is missing its file id`, 502, `missing_library_file`);
                  if (
                    (t.set(m, (e) => ({
                      ...e,
                      file: z(d).node,
                      savedContent: n == null || !r ? i : e.savedContent,
                      versionNumber: d.current_version_number ?? void 0,
                      fileName: e.fileName === a ? d.file_name : e.fileName,
                    })),
                    r &&
                      (t.set(Ut, f, (e) => ({ ...e, [d.id]: o })),
                      Fe(t, s, {
                        action: he.CHATGPT_FILE_LIBRARY_NOTE_EDITOR_ACTION_CREATED,
                        libraryFileId: d.id,
                      })),
                    n != null && r)
                  ) {
                    if ((n.signal.throwIfAborted(), !P()))
                      throw Error(`The note's account is no longer active.`);
                    (n.connect(d.id), await n.save(), t.set(m, (e) => ({ ...e, savedContent: i })));
                  }
                  ee();
                }
              } catch (e) {
                let n = X(e)?.httpStatus,
                  i = `save`;
                if (
                  (K(e) ? (i = `storage`) : n === 413 && (i = `size`),
                  (i === `storage` || i === `size`) && (_ = void 0),
                  t.set(m, (e) => ({ ...e, failure: i })),
                  i === `storage`)
                ) {
                  let e = t.get(J);
                  S = t
                    .get(T)
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
                            await R();
                          },
                        },
                        errorAnalytics: { toastId: `libraryNext.note.save.storage` },
                      },
                    );
                }
                return (
                  r[P() ? `warning` : `debug`](`Failed to save the Library note`, {
                    safe: { failure: i },
                    sensitive: { error: e },
                  }),
                  Fe(t, s, {
                    action: he.CHATGPT_FILE_LIBRARY_NOTE_EDITOR_ACTION_FAILED,
                    step: Oe.CHATGPT_FILE_LIBRARY_NOTE_EDITOR_STEP_EDITOR,
                    error: e,
                  }),
                  !1
                );
              } finally {
                (clearTimeout(h), t.set(m, (e) => ({ ...e, saving: !1 })));
              }
            },
            R = () => (
              clearTimeout(h),
              (g ??= te().finally(() => {
                g = void 0;
              })),
              g
            ),
            ne = (e) => {
              (t.set(m, (t) => ({ ...t, content: e, fileName: y ? t.fileName : At(e) })),
                clearTimeout(h),
                t.get(m).failure ??
                  (h = setTimeout(() => {
                    R();
                  }, 500)));
            };
          return {
            state$: m,
            multiplayer$: C,
            multiplayerSession$: N,
            edit: ne,
            flush: R,
            async ensureFile() {
              return (
                (v = !0),
                !(await R()) || (t.get(m).file == null && !(await R())) ? null : t.get(m).file
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
                r && j == null
                  ? (j = t.watch(({ get: e }) => (e(ae) === l && e(ye) === p && b > 0 && I().catch(L), F)))
                  : r && P() && I().catch(L),
                a == null &&
                  !x &&
                  ((x = !0),
                  Fe(t, s, {
                    action: he.CHATGPT_FILE_LIBRARY_NOTE_EDITOR_ACTION_SHOWN,
                    step: Oe.CHATGPT_FILE_LIBRARY_NOTE_EDITOR_STEP_EDITOR,
                  })),
                () => {
                  if ((--b, t.get(m).failure === `storage`)) {
                    clearTimeout(h);
                    return;
                  }
                  R().then((n) => {
                    if (
                      (b === 0 &&
                        !n &&
                        t.get(m).failure !== `storage` &&
                        t
                          .get(T)
                          .danger(
                            Z(d ?? `/space`, ue(t))
                              ? t
                                  .get(J)
                                  .formatMessage({
                                    id: `libraryNext.note.save.backgroundFailure.space`,
                                    defaultMessage: `Note changes weren’t saved. Return to Space to try again. For a new note, choose New → Note to reopen your draft`,
                                    description: `Persistent warning when autosaving a Space note fails after leaving its editor. Saved notes can be reopened from Space; a new unsaved draft is restored using New then Note. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                                  })
                              : t
                                  .get(J)
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
                      (j?.(), (j = void 0));
                      let n = t.get(m).file;
                      n != null &&
                        t.set(Ut, f, (e) => {
                          let t = { ...e };
                          return (delete t[n.id], t);
                        });
                      let r = t.get(Me, f);
                      (r?.entry == null && r?.noteId === o && t.set(Me, f, null), w(t, Gt, e));
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
    ((Jt = F()), rt());
  }))();
}
function Xt(e) {
  let n = (0, $t.c)(161),
    {
      accountId: i,
      userId: a,
      editorKey: s,
      request: l,
      session: u,
      multiplayer: f,
      reloadStatus: p,
      onReload: m,
      onClose: _,
      isCurrent: v,
      showComposer: y,
      tabId: b,
    } = e,
    x = y === void 0 || y,
    S = c(Ze),
    w = h(),
    E = g(u.state$),
    D = g(u.multiplayerSession$),
    O = g(Xe),
    k = g(ve),
    M;
  n[0] === E ? (M = n[1]) : ((M = Ht(E)), (n[0] = E), (n[1] = M));
  let N = M,
    P = p != null,
    F;
  n[2] === E.fileName ? (F = n[3]) : ((F = Se(E.fileName)), (n[2] = E.fileName), (n[3] = F));
  let I = F,
    L = (0, en.useRef)(!1),
    [ee, te] = (0, en.useState)(!1),
    R;
  n[4] !== _ || n[5] !== l || n[6] !== S || n[7] !== u
    ? ((R = async () => {
        if (S.get(u.state$).failure === `storage`) {
          _();
          return;
        }
        let e = await u.flush();
        (e || S.get(u.state$).failure === `storage`) &&
          (e &&
            S.get(u.state$).file == null &&
            Fe(S, l.analyticsContext, {
              action: he.CHATGPT_FILE_LIBRARY_NOTE_EDITOR_ACTION_CANCELED,
              step: Oe.CHATGPT_FILE_LIBRARY_NOTE_EDITOR_STEP_EDITOR,
            }),
          _());
      }),
      (n[4] = _),
      (n[5] = l),
      (n[6] = S),
      (n[7] = u),
      (n[8] = R))
    : (R = n[8]);
  let z = R,
    ne;
  n[9] !== i || n[10] !== w || n[11] !== v || n[12] !== l || n[13] !== S || n[14] !== u || n[15] !== a
    ? ((ne = () => {
        if (L.current) return;
        if (!navigator.onLine) {
          S.get(T).warning(
            w.formatMessage({
              id: `libraryNext.note.share.offline`,
              defaultMessage: `You’re offline. Connect to the internet to share this note`,
              description: `Toast after clicking Share in the Library note editor without an internet connection. The note draft stays in the editor and can be shared after reconnecting.`,
            }),
          );
          return;
        }
        ((L.current = !0), te(!0));
        let e = S.get(Re),
          t = S.get(He);
        (l.entry ?? S.set(Me, { accountId: i, userId: a }, l),
          u
            .ensureFile()
            .then((n) => {
              if (!(
                S.get(Re) !== e ||
                (v == null ? S.get(He) !== t : !v()) ||
                S.get(ae) !== i ||
                (a != null && S.get(ye) !== a)
              )) {
                if (n == null) {
                  S.get(T).warning(
                    w.formatMessage({
                      id: `libraryNext.note.share.saveFailed`,
                      defaultMessage: `Couldn’t save this note for sharing. Try again`,
                      description: `Toast after Share cannot save a Library note. The draft is preserved so the user can retry sharing.`,
                    }),
                  );
                  return;
                }
                return _e(S, { accountId: i, entry: { node: n } });
              }
            })
            .finally(() => {
              ((L.current = !1), te(!1));
            }));
      }),
      (n[9] = i),
      (n[10] = w),
      (n[11] = v),
      (n[12] = l),
      (n[13] = S),
      (n[14] = u),
      (n[15] = a),
      (n[16] = ne))
    : (ne = n[16]);
  let re = ne,
    B = E.file,
    V,
    ie;
  n[17] === B
    ? ((V = n[18]), (ie = n[19]))
    : ((V = B == null ? void 0 : mt(B)),
      (ie = V == null ? void 0 : pe(V)),
      (n[17] = B),
      (n[18] = V),
      (n[19] = ie));
  let H = ie,
    se;
  n[20] !== B || n[21] !== w || n[22] !== l || n[23] !== S
    ? ((se = async (e) => {
        try {
          (await ke(e),
            B != null && Ce(S, [B.id], De.CHATGPT_FILE_LIBRARY_ORIGIN_FILE_PREVIEW, l.analyticsContext));
        } catch (e) {
          let t = e;
          (r.warning(`Failed to download Library note`, { safe: {}, sensitive: { error: t } }),
            S.get(T).danger(
              w.formatMessage({
                id: `libraryFilePreview.downloadError`,
                defaultMessage: `Unable to download file`,
                description: `Toast shown when downloading a Library file from the preview fails`,
              }),
              { errorAnalytics: { toastId: `libraryFilePreview.downloadError` } },
            ));
        }
      }),
      (n[20] = B),
      (n[21] = w),
      (n[22] = l),
      (n[23] = S),
      (n[24] = se))
    : (se = n[24]);
  let ce = se,
    ue;
  n[25] !== ce || n[26] !== S || n[27] !== u
    ? ((ue = async () => {
        if (!(await u.flush())) return;
        let e = S.get(u.state$).file;
        e != null &&
          (await ce({
            file_id: e.file_id ?? e.id,
            file_name: e.name,
            gizmo_id: e.gizmo_id,
            mime_type: e.mime_type,
          }));
      }),
      (n[25] = ce),
      (n[26] = S),
      (n[27] = u),
      (n[28] = ue))
    : (ue = n[28]);
  let de = ue,
    fe;
  n[29] !== z ||
  n[30] !== N ||
  n[31] !== B ||
  n[32] !== O ||
  n[33] !== _ ||
  n[34] !== P ||
  n[35] !== l ||
  n[36] !== S ||
  n[37] !== u ||
  n[38] !== E.saving
    ? ((fe = (e) =>
        B == null
          ? null
          : (0, Q.jsx)(ht, {
              enableDelete: !0,
              analyticsContext: l.analyticsContext,
              entry: { ...l.entry, node: B },
              footer: e,
              knownParentDirectories: l.entry == null ? void 0 : l.knownParentDirectories,
              navigationDisabled: N || E.saving || P,
              onDeleted: _,
              onOpenLibrary: () => void z(),
              versionHistoryAction:
                O == null
                  ? null
                  : (0, Q.jsx)(dt, {
                      file: O.file,
                      disabled: P || O.isRestoring,
                      onSelect: () => {
                        u.flush().then((e) => {
                          e && S.get(Xe)?.open();
                        });
                      },
                    }),
            })),
      (n[29] = z),
      (n[30] = N),
      (n[31] = B),
      (n[32] = O),
      (n[33] = _),
      (n[34] = P),
      (n[35] = l),
      (n[36] = S),
      (n[37] = u),
      (n[38] = E.saving),
      (n[39] = fe))
    : (fe = n[39]);
  let me = fe,
    U = O?.isOpen ? O.selectedVersion : void 0,
    be;
  n[40] !== B ||
  n[41] !== U?.file_id ||
  n[42] !== U?.file_name ||
  n[43] !== U?.file_size_bytes ||
  n[44] !== U?.gizmo_id ||
  n[45] !== U?.library_artifact_type ||
  n[46] !== U?.library_file_category ||
  n[47] !== U?.mime_type ||
  n[48] !== U?.origination_message_id ||
  n[49] !== U?.origination_thread_id
    ? ((be =
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
      (n[40] = B),
      (n[41] = U?.file_id),
      (n[42] = U?.file_name),
      (n[43] = U?.file_size_bytes),
      (n[44] = U?.gizmo_id),
      (n[45] = U?.library_artifact_type),
      (n[46] = U?.library_file_category),
      (n[47] = U?.mime_type),
      (n[48] = U?.origination_message_id),
      (n[49] = U?.origination_thread_id),
      (n[50] = be))
    : (be = n[50]);
  let xe = be,
    W = O?.isOpen || O?.isRestoring || P,
    we;
  n[51] !== B || n[52] !== P || n[53] !== k
    ? ((we = !P && k && (B == null || ze({ node: B }))), (n[51] = B), (n[52] = P), (n[53] = k), (n[54] = we))
    : (we = n[54]);
  let Te = we,
    Ee;
  n[55] !== u || n[56] !== E.failure
    ? ((Ee =
        E.failure != null && E.failure !== `storage`
          ? (0, Q.jsxs)(`div`, {
              role: `alert`,
              className: `mx-auto flex w-[min(48rem,calc(100vw-2rem))] max-w-full flex-col gap-2 px-toolbar pt-8 text-danger`,
              children: [
                (0, Q.jsx)(Qt, { failure: E.failure }),
                (0, Q.jsx)(t, {
                  color: `ghost`,
                  onClick: () => void u.flush(),
                  children: (0, Q.jsx)(o, {
                    id: `libraryNext.note.save.retry`,
                    defaultMessage: `Retry`,
                    description: `Button to retry saving the preserved Library note draft`,
                  }),
                }),
              ],
            })
          : null),
      (n[55] = u),
      (n[56] = E.failure),
      (n[57] = Ee))
    : (Ee = n[57]);
  let G = Ee,
    K;
  n[58] !== i ||
  n[59] !== N ||
  n[60] !== s ||
  n[61] !== B ||
  n[62] !== O?.isOpen ||
  n[63] !== _ ||
  n[64] !== xe ||
  n[65] !== P ||
  n[66] !== l ||
  n[67] !== S ||
  n[68] !== u ||
  n[69] !== x ||
  n[70] !== E.failure ||
  n[71] !== E.saving ||
  n[72] !== a
    ? ((K =
        !x || O?.isOpen || P
          ? null
          : (0, Q.jsx)(
              wt,
              {
                disableAutoFocus: l.entry == null,
                draftId: s,
                file: xe,
                imageSrc: null,
                submitDisabled: B == null || N || E.saving || E.failure != null,
                onUserInput: () => {
                  let e = S.get(u.state$);
                  e.file != null ||
                    e.saving ||
                    e.failure != null ||
                    (l.entry ?? S.set(Me, { accountId: i, userId: a }, l), u.ensureFile());
                },
                onClose: _,
                renderSurface: Zt,
              },
              s,
            )),
      (n[58] = i),
      (n[59] = N),
      (n[60] = s),
      (n[61] = B),
      (n[62] = O?.isOpen),
      (n[63] = _),
      (n[64] = xe),
      (n[65] = P),
      (n[66] = l),
      (n[67] = S),
      (n[68] = u),
      (n[69] = x),
      (n[70] = E.failure),
      (n[71] = E.saving),
      (n[72] = a),
      (n[73] = K))
    : (K = n[73]);
  let q = K;
  if (f) {
    if (D == null) {
      let e;
      return (
        n[74] !== H ||
        n[75] !== i ||
        n[76] !== z ||
        n[77] !== V ||
        n[78] !== O ||
        n[79] !== G ||
        n[80] !== E.failure ||
        n[81] !== E.fileName ||
        n[82] !== b ||
        n[83] !== a
          ? ((e =
              E.failure == null
                ? (0, Q.jsx)(le, { fileName: E.fileName, importKind: `writing-block` })
                : (0, Q.jsx)(Dt, {
                    assetName: null,
                    contentOwnsHeader: !0,
                    onClose: () => void z(),
                    children: (0, Q.jsx)(_t, {
                      accountId: i,
                      accessoryOwnerId: H,
                      actions: (0, Q.jsx)(kt, { title: E.fileName, onClose: () => void z() }),
                      contentFade: !0,
                      placement: oe(`text-document`),
                      filePreviewKind: `text-document`,
                      fileInfoSource: V,
                      title: E.fileName,
                      onClose: () => void z(),
                      tabId: b,
                      userId: a,
                      versionHistory: O ?? void 0,
                      children: G,
                    }),
                  })),
            (n[74] = H),
            (n[75] = i),
            (n[76] = z),
            (n[77] = V),
            (n[78] = O),
            (n[79] = G),
            (n[80] = E.failure),
            (n[81] = E.fileName),
            (n[82] = b),
            (n[83] = a),
            (n[84] = e))
          : (e = n[84]),
        e
      );
    }
    let e = l.entry == null,
      t = B?.id,
      r;
    n[85] === B ? (r = n[86]) : ((r = B == null ? void 0 : { node: B }), (n[85] = B), (n[86] = r));
    let o;
    n[87] === z ? (o = n[88]) : ((o = () => void z()), (n[87] = z), (n[88] = o));
    let s = Te ? re : void 0,
      c;
    n[89] === u ? (c = n[90]) : ((c = async () => (await u.ensureFile())?.id), (n[89] = u), (n[90] = c));
    let d = E.saving && E.failure == null,
      f = O ?? void 0,
      p;
    return (
      n[91] !== H ||
      n[92] !== i ||
      n[93] !== q ||
      n[94] !== D ||
      n[95] !== V ||
      n[96] !== G ||
      n[97] !== E.fileName ||
      n[98] !== e ||
      n[99] !== t ||
      n[100] !== r ||
      n[101] !== o ||
      n[102] !== s ||
      n[103] !== c ||
      n[104] !== d ||
      n[105] !== f ||
      n[106] !== b ||
      n[107] !== a
        ? ((p = (0, Q.jsx)(tn, {
            accountId: i,
            accessoryOwnerId: H,
            autoFocus: e,
            bottomContent: q,
            documentId: t,
            entry: r,
            fileInfoSource: V,
            notice: G,
            onClose: o,
            tabId: b,
            onShare: s,
            prepareImageUpload: c,
            saving: d,
            session: D,
            title: E.fileName,
            userId: a,
            versionHistory: f,
          })),
          (n[91] = H),
          (n[92] = i),
          (n[93] = q),
          (n[94] = D),
          (n[95] = V),
          (n[96] = G),
          (n[97] = E.fileName),
          (n[98] = e),
          (n[99] = t),
          (n[100] = r),
          (n[101] = o),
          (n[102] = s),
          (n[103] = c),
          (n[104] = d),
          (n[105] = f),
          (n[106] = b),
          (n[107] = a),
          (n[108] = p))
        : (p = n[108]),
      p
    );
  }
  let Ae = E.content,
    Ne = !W,
    Pe = B?.id,
    J;
  n[109] === w
    ? (J = n[110])
    : ((J = w.formatMessage({
        id: `libraryNext.note.editor.placeholder`,
        defaultMessage: `Write or type '/' for commands…`,
        description: `Placeholder in the full-page Library note editor; typing slash opens formatting commands`,
      })),
      (n[109] = w),
      (n[110] = J));
  let Y;
  n[111] !== i || n[112] !== l || n[113] !== S || n[114] !== u || n[115] !== a
    ? ((Y = (e) => {
        (l.entry ?? S.set(Me, { accountId: i, userId: a }, l), u.edit(e));
      }),
      (n[111] = i),
      (n[112] = l),
      (n[113] = S),
      (n[114] = u),
      (n[115] = a),
      (n[116] = Y))
    : (Y = n[116]);
  let X;
  n[117] !== S || n[118] !== u
    ? ((X = () => {
        S.get(u.state$).failure !== `storage` && u.flush();
      }),
      (n[117] = S),
      (n[118] = u),
      (n[119] = X))
    : (X = n[119]);
  let Z;
  n[120] !== B || n[121] !== S
    ? ((Z = () => {
        B != null && ge(S, je, { libraryFileId: B.id, variant: `standard` });
      }),
      (n[120] = B),
      (n[121] = S),
      (n[122] = Z))
    : (Z = n[122]);
  let Ie;
  n[123] !== H ||
  n[124] !== i ||
  n[125] !== q ||
  n[126] !== Te ||
  n[127] !== z ||
  n[128] !== de ||
  n[129] !== W ||
  n[130] !== B ||
  n[131] !== V ||
  n[132] !== O ||
  n[133] !== w ||
  n[134] !== G ||
  n[135] !== m ||
  n[136] !== U ||
  n[137] !== P ||
  n[138] !== p ||
  n[139] !== me ||
  n[140] !== l.entry ||
  n[141] !== re ||
  n[142] !== ee ||
  n[143] !== E.failure ||
  n[144] !== E.saving ||
  n[145] !== b ||
  n[146] !== I ||
  n[147] !== a
    ? ((Ie = (e) =>
        (0, Q.jsx)(qt, {
          autoFocus: l.entry == null,
          context: e,
          isEditable: !W,
          renderViewerMenu: me,
          renderFrame: (e) => {
            let { actions: n, children: r, leadingContent: s } = e;
            return (0, Q.jsx)(Dt, {
              assetName: null,
              contentOwnsHeader: !0,
              bottomContent: q,
              onClose: () => {
                z();
              },
              children: (0, Q.jsx)(_t, {
                accountId: i,
                accessoryOwnerId: H,
                actions: s,
                contentFade: !0,
                placement: oe(`text-document`),
                historyControlGroup: n,
                downloadDisabled: P || O?.isRestoring === !0,
                onClose: () => void z(),
                tabId: b,
                onDownload:
                  l.entry != null && B != null
                    ? () => {
                        de();
                      }
                    : void 0,
                onShare: Te ? re : void 0,
                shareDisabled: ee || O?.isRestoring === !0,
                status:
                  E.saving && E.failure == null
                    ? (0, Q.jsx)(j, {
                        tooltipContent: w.formatMessage({
                          id: `libraryNext.note.save.pending`,
                          defaultMessage: `Saving…`,
                          description: `Status while the Library note is saving automatically`,
                        }),
                        children: (0, Q.jsxs)(`span`, {
                          role: `status`,
                          className: `inline-flex shrink-0 text-tertiary select-none`,
                          children: [
                            (0, Q.jsx)(A, { as: `span`, Icon: d }),
                            (0, Q.jsx)(`span`, {
                              className: `sr-only`,
                              children: (0, Q.jsx)(o, {
                                id: `libraryNext.note.save.pending`,
                                defaultMessage: `Saving…`,
                                description: `Status while the Library note is saving automatically`,
                              }),
                            }),
                          ],
                        }),
                      })
                    : null,
                title: I,
                versionHistoryEnabled: O != null,
                filePreviewKind: `text-document`,
                fileInfoSource: V,
                userId: a,
                versionHistory: O ?? void 0,
                children:
                  O?.isOpen && U != null
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
                          className: C(
                            `flex h-full min-h-0 flex-1 flex-col overflow-y-auto [--wb-editor-page-max-width:min(48rem,calc(100vw-2rem))] [--wb-editor-page-inline-inset:var(--padding-toolbar)] [--wb-editor-page-bottom-inset:calc(var(--spacing)*8)]`,
                            E.failure != null && `[--wb-editor-page-top-inset:0px]`,
                          ),
                          children: (0, Q.jsxs)(`div`, {
                            className: `flex grow flex-col`,
                            children: [
                              p === `pending`
                                ? (0, Q.jsx)(`div`, {
                                    role: `status`,
                                    className: `mx-auto w-[min(48rem,calc(100vw-2rem))] max-w-full px-toolbar pt-8`,
                                    children: (0, Q.jsx)(o, {
                                      id: `libraryNext.note.restore.loading`,
                                      defaultMessage: `Loading restored version…`,
                                      description: `Status while the Library note editor loads the content of a successfully restored version`,
                                    }),
                                  })
                                : null,
                              p === `failed`
                                ? (0, Q.jsxs)(`div`, {
                                    role: `alert`,
                                    className: `mx-auto flex w-[min(48rem,calc(100vw-2rem))] max-w-full flex-col gap-2 px-toolbar pt-8 text-danger`,
                                    children: [
                                      (0, Q.jsx)(o, {
                                        id: `libraryNext.note.restore.loadFailed`,
                                        defaultMessage: `This version was restored, but couldn’t be loaded. Retry before editing`,
                                        description: `The Library version restore succeeded but downloading its content failed; editing remains disabled until retry succeeds`,
                                      }),
                                      (0, Q.jsx)(t, {
                                        color: `ghost`,
                                        onClick: m,
                                        children: (0, Q.jsx)(o, {
                                          id: `libraryNext.note.restore.retry`,
                                          defaultMessage: `Retry`,
                                          description: `Button to retry loading a restored Library note before allowing editing`,
                                        }),
                                      }),
                                    ],
                                  })
                                : null,
                              G,
                              P ? null : r,
                            ],
                          }),
                        }),
                      }),
              }),
            });
          },
        })),
      (n[123] = H),
      (n[124] = i),
      (n[125] = q),
      (n[126] = Te),
      (n[127] = z),
      (n[128] = de),
      (n[129] = W),
      (n[130] = B),
      (n[131] = V),
      (n[132] = O),
      (n[133] = w),
      (n[134] = G),
      (n[135] = m),
      (n[136] = U),
      (n[137] = P),
      (n[138] = p),
      (n[139] = me),
      (n[140] = l.entry),
      (n[141] = re),
      (n[142] = ee),
      (n[143] = E.failure),
      (n[144] = E.saving),
      (n[145] = b),
      (n[146] = I),
      (n[147] = a),
      (n[148] = Ie))
    : (Ie = n[148]);
  let Le;
  return (
    n[149] !== s ||
    n[150] !== P ||
    n[151] !== E.content ||
    n[152] !== Ne ||
    n[153] !== Pe ||
    n[154] !== J ||
    n[155] !== Y ||
    n[156] !== X ||
    n[157] !== Z ||
    n[158] !== Ie ||
    n[159] !== I
      ? ((Le = (0, Q.jsx)(tt, {
          content: Ae,
          copyInteractionDisabled: P,
          editorKey: s,
          emailMetadata: void 0,
          isEditable: Ne,
          libraryFileId: Pe,
          title: I,
          variant: void 0,
          testId: `library-note-editor`,
          placeholder: J,
          onContentChange: Y,
          onBlur: X,
          onCopy: Z,
          render: Ie,
        })),
        (n[149] = s),
        (n[150] = P),
        (n[151] = E.content),
        (n[152] = Ne),
        (n[153] = Pe),
        (n[154] = J),
        (n[155] = Y),
        (n[156] = X),
        (n[157] = Z),
        (n[158] = Ie),
        (n[159] = I),
        (n[160] = Le))
      : (Le = n[160]),
    Le
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
          ? ((e = (0, Q.jsx)(o, {
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
          ? ((e = (0, Q.jsx)(o, {
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
    (($t = F()),
      vt(),
      Ke(),
      we(),
      Le(),
      v(),
      u(),
      (en = ee()),
      O(),
      q(),
      Be(),
      ie(),
      ft(),
      Ye(),
      M(),
      m(),
      te(),
      D(),
      k(),
      x(),
      re(),
      U(),
      p(),
      et(),
      xt(),
      it(),
      Ae(),
      Je(),
      Ve(),
      pt(),
      W(),
      gt(),
      Ct(),
      me(),
      fe(),
      Tt(),
      Ot(),
      Kt(),
      Yt(),
      (Q = L()),
      (tn = n(yt)));
  }))();
}
function rn(e) {
  let t = (0, cn.c)(20),
    { routeScope: n, accountId: r, userId: i, entry: o, onClose: s, showComposer: c, tabId: l } = e,
    u = g(Pe),
    d;
  t[0] === n ? (d = t[1]) : ((d = n.getOwnValue(ce)), (t[0] = n), (t[1] = d));
  let f;
  t[2] === n ? (f = t[3]) : ((f = n.getOwnValue(Te)), (t[2] = n), (t[3] = f));
  let p;
  t[4] !== u || t[5] !== o
    ? ((p = { entry: o, analyticsContext: u }), (t[4] = u), (t[5] = o), (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] !== r || t[8] !== s || t[9] !== c || t[10] !== p || t[11] !== l || t[12] !== i
    ? ((m = (0, $.jsx)(an, { accountId: r, userId: i, request: p, onClose: s, showComposer: c, tabId: l })),
      (t[7] = r),
      (t[8] = s),
      (t[9] = c),
      (t[10] = p),
      (t[11] = l),
      (t[12] = i),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] !== f || t[15] !== m
    ? ((h = (0, $.jsx)(a, { scope: Te, value: f, children: m })), (t[14] = f), (t[15] = m), (t[16] = h))
    : (h = t[16]);
  let _;
  return (
    t[17] !== d || t[18] !== h
      ? ((_ = (0, $.jsx)(a, { scope: ce, value: d, children: h })), (t[17] = d), (t[18] = h), (t[19] = _))
      : (_ = t[19]),
    _
  );
}
function an(e) {
  let t = (0, cn.c)(18),
    { accountId: n, userId: r, request: i, onClose: a, isCurrent: o, showComposer: s, tabId: c } = e,
    l = s === void 0 || s,
    u = g(i.entry == null && ct);
  if (g(i.entry == null && lt)) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(le, { importKind: `writing-block` })), (t[0] = e))
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
  let n = (0, cn.c)(33),
    { accountId: r, userId: a, request: s, onClose: l, isCurrent: u, showComposer: d, tabId: f } = e,
    p = d === void 0 || d,
    m = c(i),
    h = s.entry.node,
    _ = mt(h),
    v;
  n[0] === h.name ? (v = n[1]) : ((v = Se(h.name)), (n[0] = h.name), (n[1] = v));
  let y = v,
    b = g(ve),
    x;
  n[2] !== r || n[3] !== h.id || n[4] !== a
    ? ((x = { id: h.id, accountId: r, userId: a }), (n[2] = r), (n[3] = h.id), (n[4] = a), (n[5] = x))
    : (x = n[5]);
  let { data: S, isError: C, isFetchedAfterMount: w, refetch: T } = R(Wt, x);
  if (S == null || !w) {
    let e = pe(_),
      i;
    n[6] !== l || n[7] !== s.analyticsContext || n[8] !== s.entry || n[9] !== s.knownParentDirectories
      ? ((i = (0, $.jsx)(ht, {
          analyticsContext: s.analyticsContext,
          entry: s.entry,
          knownParentDirectories: s.knownParentDirectories,
          onOpenLibrary: l,
        })),
        (n[6] = l),
        (n[7] = s.analyticsContext),
        (n[8] = s.entry),
        (n[9] = s.knownParentDirectories),
        (n[10] = i))
      : (i = n[10]);
    let c;
    n[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = oe(`text-document`)), (n[11] = c))
      : (c = n[11]);
    let u;
    n[12] !== r || n[13] !== s.entry || n[14] !== m || n[15] !== b
      ? ((u =
          b && ze(s.entry)
            ? () => {
                _e(m, { accountId: r, entry: s.entry });
              }
            : void 0),
        (n[12] = r),
        (n[13] = s.entry),
        (n[14] = m),
        (n[15] = b),
        (n[16] = u))
      : (u = n[16]);
    let d;
    return (
      n[17] !== h.name || n[18] !== C || n[19] !== T
        ? ((d = C
            ? (0, $.jsx)(`div`, {
                className: `flex h-full items-center justify-center`,
                children: (0, $.jsx)(t, {
                  onClick: () => {
                    T();
                  },
                  children: (0, $.jsx)(o, {
                    id: `libraryNext.note.load.retry`,
                    defaultMessage: `Retry loading note`,
                    description: `Button in the Library note editor when loading the saved content fails`,
                  }),
                }),
              })
            : (0, $.jsx)(le, { fileName: h.name, importKind: `writing-block` })),
          (n[17] = h.name),
          (n[18] = C),
          (n[19] = T),
          (n[20] = d))
        : (d = n[20]),
      (0, $.jsx)(Dt, {
        assetName: null,
        contentOwnsHeader: !0,
        onClose: l,
        children: (0, $.jsx)(_t, {
          accountId: r,
          accessoryOwnerId: e,
          actions: i,
          contentFade: !0,
          placement: c,
          fileInfoSource: _,
          filePreviewKind: `text-document`,
          onClose: l,
          onShare: u,
          tabId: f,
          title: y,
          userId: a,
          children: d,
        }),
      })
    );
  }
  let E;
  n[21] !== S || n[22] !== h
    ? ((E = { file: h, content: S }), (n[21] = S), (n[22] = h), (n[23] = E))
    : (E = n[23]);
  let D;
  return (
    n[24] !== r ||
    n[25] !== u ||
    n[26] !== l ||
    n[27] !== s ||
    n[28] !== p ||
    n[29] !== E ||
    n[30] !== f ||
    n[31] !== a
      ? ((D = (0, $.jsx)(sn, {
          accountId: r,
          userId: a,
          request: s,
          initial: E,
          onClose: l,
          isCurrent: u,
          showComposer: p,
          tabId: f,
        })),
        (n[24] = r),
        (n[25] = u),
        (n[26] = l),
        (n[27] = s),
        (n[28] = p),
        (n[29] = E),
        (n[30] = f),
        (n[31] = a),
        (n[32] = D))
      : (D = n[32]),
    D
  );
}
function sn(e) {
  let t = (0, cn.c)(50),
    {
      accountId: n,
      userId: r,
      request: a,
      initial: o,
      multiplayer: s,
      onClose: l,
      isCurrent: u,
      showComposer: d,
      tabId: p,
    } = e,
    m = s !== void 0 && s,
    h = d === void 0 || d,
    _ = c(i),
    v;
  t[0] !== n || t[1] !== a.entry || t[2] !== a.noteId || t[3] !== _ || t[4] !== r
    ? ((v =
        a.entry == null
          ? a.noteId
          : (_.get(Ut, { accountId: n, userId: r })[a.entry.node.id] ?? a.entry.node.id)),
      (t[0] = n),
      (t[1] = a.entry),
      (t[2] = a.noteId),
      (t[3] = _),
      (t[4] = r),
      (t[5] = v))
    : (v = t[5]);
  let y = v,
    b = _.get(Re).pathname?.startsWith(`/library`) ? `/library` : `/space`,
    x = a.entry == null ? a.directoryId : null,
    S;
  t[6] !== n ||
  t[7] !== y ||
  t[8] !== o ||
  t[9] !== b ||
  t[10] !== a.analyticsContext ||
  t[11] !== x ||
  t[12] !== r
    ? ((S = {
        accountId: n,
        userId: r,
        id: y,
        initial: o,
        directoryId: x,
        analyticsContext: a.analyticsContext,
        originBasePath: b,
      }),
      (t[6] = n),
      (t[7] = y),
      (t[8] = o),
      (t[9] = b),
      (t[10] = a.analyticsContext),
      (t[11] = x),
      (t[12] = r),
      (t[13] = S))
    : (S = t[13]);
  let C = f(Gt, S),
    w = g(C.state$),
    T = g(C.multiplayer$) ?? m,
    [E, D] = (0, ln.useState)(null),
    O,
    k;
  (t[14] !== n || t[15] !== T || t[16] !== a || t[17] !== _ || t[18] !== C || t[19] !== r
    ? ((O = () => (
        T && a.entry == null && _.set(Me, { accountId: n, userId: r }, a),
        C.attach({ multiplayer: T })
      )),
      (k = [C, T, a, _, n, r]),
      (t[14] = n),
      (t[15] = T),
      (t[16] = a),
      (t[17] = _),
      (t[18] = C),
      (t[19] = r),
      (t[20] = O),
      (t[21] = k))
    : ((O = t[20]), (k = t[21])),
    (0, ln.useEffect)(O, k));
  let A;
  t[22] !== n || t[23] !== _.query || t[24] !== C || t[25] !== r
    ? ((A = async (e) => {
        D({ file: e, status: `pending` });
        try {
          let t = await _.query.fetch(Wt, { id: e.id, accountId: n, userId: r });
          if (
            C.replaceSavedDocument({
              file: z(e).node,
              content: t,
              versionNumber: e.current_version_number ?? void 0,
            })
          ) {
            D(null);
            return;
          }
        } catch {}
        D({ file: e, status: `failed` });
      }),
      (t[22] = n),
      (t[23] = _.query),
      (t[24] = C),
      (t[25] = r),
      (t[26] = A))
    : (A = t[26]);
  let j = A,
    M = E?.status,
    N;
  t[27] !== j || t[28] !== E
    ? ((N = () => {
        E != null && j(E.file);
      }),
      (t[27] = j),
      (t[28] = E),
      (t[29] = N))
    : (N = t[29]);
  let P;
  t[30] !== n ||
  t[31] !== y ||
  t[32] !== u ||
  t[33] !== T ||
  t[34] !== l ||
  t[35] !== a ||
  t[36] !== C ||
  t[37] !== h ||
  t[38] !== N ||
  t[39] !== M ||
  t[40] !== p ||
  t[41] !== r
    ? ((P = (0, $.jsx)(Xt, {
        accountId: n,
        userId: r,
        editorKey: y,
        request: a,
        session: C,
        multiplayer: T,
        reloadStatus: M,
        onReload: N,
        onClose: l,
        isCurrent: u,
        showComposer: h,
        tabId: p,
      })),
      (t[30] = n),
      (t[31] = y),
      (t[32] = u),
      (t[33] = T),
      (t[34] = l),
      (t[35] = a),
      (t[36] = C),
      (t[37] = h),
      (t[38] = N),
      (t[39] = M),
      (t[40] = p),
      (t[41] = r),
      (t[42] = P))
    : (P = t[42]);
  let F = P,
    I;
  t[43] !== T || t[44] !== w
    ? ((I =
        T || w.file == null
          ? void 0
          : {
              browserPreview: !0,
              conversationId: null,
              gizmoId: w.file.gizmo_id,
              libraryFileId: w.file.id,
              versionNumber: w.versionNumber,
            }),
      (t[43] = T),
      (t[44] = w),
      (t[45] = I))
    : (I = t[45]);
  let L;
  return (
    t[46] !== F || t[47] !== j || t[48] !== I
      ? ((L = (0, $.jsx)($e, { file: I, onRestored: j, children: F })),
        (t[46] = F),
        (t[47] = j),
        (t[48] = I),
        (t[49] = L))
      : (L = t[49]),
    L
  );
}
var cn, ln, $;
function un() {
  return (un = e(() => {
    ((cn = F()),
      Le(),
      u(),
      (ln = ee()),
      O(),
      q(),
      ie(),
      Qe(),
      M(),
      re(),
      I(),
      B(),
      Ie(),
      Ae(),
      Je(),
      Ve(),
      se(),
      ut(),
      pt(),
      W(),
      gt(),
      fe(),
      Tt(),
      nn(),
      Kt(),
      ($ = L()));
  }))();
}
un();
export { an as LibraryNotePreview, rn as LibraryRoutedNotePreview };
//# sourceMappingURL=preview-c0d3076d9ef0.js.map
