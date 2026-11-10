import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $It as r,
  ADt as i,
  BU as a,
  Cot as o,
  EDt as s,
  EPt as c,
  Ext as l,
  GE as u,
  IDt as d,
  Ixt as f,
  KV as p,
  Kot as m,
  LLt as h,
  Pxt as g,
  RLt as _,
  TJ as v,
  TLt as y,
  VDt as b,
  Vxt as x,
  WE as ee,
  WV as S,
  Xot as te,
  Yot as C,
  _Mt as w,
  _O as T,
  _xt as ne,
  cz as re,
  fLt as E,
  fO as ie,
  gMt as D,
  gO as ae,
  hot as oe,
  hrt as O,
  jDt as k,
  lot as A,
  mO as j,
  oIt as M,
  oO as se,
  pIt as N,
  pLt as P,
  sO as ce,
  sz as le,
  t3 as ue,
  vO as F,
  vrt as de,
  vzt as I,
  wot as fe,
  xMt as pe,
  yzt as L,
  zxt as me,
} from "./app-shared-bbfeca5e5737.js";
import {
  BPr as he,
  Ckn as ge,
  EMr as _e,
  Fin as ve,
  GMr as R,
  Hin as ye,
  Hur as z,
  JPn as B,
  Qjr as be,
  Sit as xe,
  Skn as Se,
  TMr as Ce,
  Udr as we,
  VPr as V,
  Vur as Te,
  XMr as Ee,
  XPn as De,
  Ymr as H,
  Zjr as U,
  aDr as Oe,
  dMr as ke,
  dcr as Ae,
  eDr as W,
  ehr as je,
  fMr as Me,
  fur as Ne,
  nDr as Pe,
  pur as Fe,
  qdr as Ie,
  tNr as Le,
  wMr as Re,
  xit as G,
} from "./app-initial-5851df3f6cb1.js";
import { gg as ze, vg as K } from "./app-primary-fe8a450b3b04.js";
import { a as Be, i as Ve, o as He, r as Ue, t as We } from "./workspace-plugin-permissions-a5234cd2a14d.js";
import {
  c as Ge,
  l as q,
  n as Ke,
  o as qe,
  s as Je,
  t as Ye,
} from "./permission-explanation-b56de09d0218.js";
import { t as Xe } from "./gpt-management-url-e06e14b9dc20.js";
import { n as Ze, r as Qe } from "./migrated-plugin-ece31f30dd17.js";
import {
  a as $e,
  c as et,
  i as tt,
  n as nt,
  o as rt,
  r as it,
  s as at,
  t as ot,
} from "./skipped-files-e53dfe3f2e69.js";
function st(e) {
  if (
    e == null ||
    e.kind === `request` ||
    (e.kind === `validation` ? e.status !== 400 : e.status !== 400 && e.status !== 502)
  )
    return;
  let t = new Set();
  for (let n of e.issues) {
    if (
      n.resource.type !== `knowledge_file` ||
      !n.resource.id?.trim() ||
      ![
        `download_failed`,
        `timeout`,
        `download_timeout`,
        `knowledge_file_download_failed`,
        `knowledge_file_metadata_unavailable`,
        `knowledge_file_not_found`,
        `knowledge_file_too_large`,
        `invalid_file_size`,
        `invalid_knowledge_filename`,
      ].includes(n.code)
    )
      return;
    t.add(n.resource.id);
  }
  if (e.failedFiles != null) {
    for (let n of e.failedFiles)
      if (n.type !== `profile_picture`) {
        if (!n.file_id?.trim()) return;
        t.add(n.file_id);
      }
  }
  return t.size > 0 ? [...t] : void 0;
}
function ct(e) {
  return e?.kind === `validation` && e.status === 400;
}
function lt(e) {
  if (e.kind === `request`)
    return e.backendMessage && (!e.errorCode || e.errorCode === `gpt_plugin_migration_editor_access_failed`)
      ? [{ message: e.backendMessage, suggestion: e.backendSuggestion }]
      : void 0;
  if (e.issues.length > 0) {
    let t = e.issues.every((e) => e.code === `skill_bundle_too_large`),
      n = e.issues.every(
        (e) =>
          e.resource.type === `knowledge_file` &&
          [
            `download_failed`,
            `timeout`,
            `download_timeout`,
            `knowledge_file_download_failed`,
            `knowledge_file_metadata_unavailable`,
          ].includes(e.code),
      );
    return t || n ? void 0 : e.issues;
  }
  let t = e.failedFiles?.filter((e) => e.type === `knowledge_file`);
  return t?.some((e) => e.code === `invalid_file`) ? t : void 0;
}
function ut(e) {
  if (!(e instanceof O)) return { kind: `request` };
  try {
    let t = P({ detail: _() }).parse(JSON.parse(e.message)),
      n = gt.safeParse(t.detail);
    if (n.success)
      return { kind: `file_copy`, status: e.status, issues: n.data.issues, failedFiles: n.data.failed_files };
    let r = ht.safeParse(t.detail);
    if (r.success)
      return {
        kind: `validation`,
        status: e.status,
        issues: r.data.issues,
        failedFiles: r.data.failed_files,
      };
    let i = ft.safeParse(t.detail).data,
      a =
        t.detail !== i && (e.status === 400 || i === `gpt_plugin_migration_editor_access_failed`)
          ? dt.safeParse(t.detail).data
          : void 0;
    return {
      kind: `request`,
      status: e.status,
      errorCode: i,
      backendMessage: a?.message,
      backendSuggestion: a?.suggestion,
    };
  } catch {
    return { kind: `request`, status: e.status };
  }
}
var dt, ft, pt, mt, ht, gt;
function _t() {
  return (_t = e(() => {
    (c(),
      de(),
      (dt = h([
        y()
          .min(1)
          .transform((e) => ({ message: e, suggestion: void 0 })),
        P({ message: y().min(1), suggestion: y().optional() }),
      ])),
      (ft = h([
        M([
          `gpt_plugin_migration_source_changed`,
          `gpt_plugin_migration_owner_changed`,
          `gpt_plugin_migration_editor_access_failed`,
        ]),
        P({ code: r(`gpt_plugin_migration_editor_access_failed`) }).transform((e) => e.code),
        P({
          type: r(`apps_sdk_error`),
          error_code: M([`gpt_plugin_migration_in_progress`, `gpt_plugin_migration_conflict`]),
        }).transform((e) => e.error_code),
      ])),
      (pt = P({
        code: y(),
        resource: P({
          type: M([`gpt`, `action`, `app`, `knowledge_file`, `knowledge_files`, `profile_picture`, `plugin`]),
          id: y().nullish(),
          name: y().nullish(),
          url: y().nullish(),
          tool_id: y().nullish(),
        }),
        field: y().nullish(),
        message: y(),
        suggestion: y(),
        actual: E().nullish(),
        limit: E().nullish(),
      })),
      (mt = P({
        type: M([`profile_picture`, `knowledge_file`]),
        file_id: y().nullish(),
        code: M([`download_failed`, `invalid_file`, `timeout`]),
        message: y(),
      })),
      (ht = P({ code: r(`gpt_plugin_incompatible`), issues: N(pt), failed_files: N(mt).nullish() })),
      (gt = P({ code: r(`gpt_plugin_file_copy_failed`), issues: N(pt), failed_files: N(mt) })));
  }))();
}
function vt(e, t, n = !1, r = !1) {
  let i = e.kind === `request` || e.kind === `validation` || e.kind === `file_copy` ? lt(e) : void 0;
  if (i) {
    let a =
      (e.kind === `validation` || e.kind === `file_copy`) && e.issues.length === 0
        ? e.failedFiles?.filter((e) => e.type === `knowledge_file`)
        : void 0;
    return {
      title: (0, J.jsx)(d, { ...yt.failed }),
      description: (0, J.jsxs)(`div`, {
        className: `flex flex-col gap-3 text-start wrap-anywhere`,
        children: [
          n && !r ? (0, J.jsx)(d, { ...bt.readOnly }) : null,
          i.map((r, i) => {
            let o = e.kind === `validation` || e.kind === `file_copy` ? e.issues[i]?.resource : void 0,
              s = o?.type === `knowledge_file` ? o.id : a?.[i]?.file_id,
              c = s == null ? void 0 : t?.find((e) => (e.file_id || e.id) === s),
              l = o?.name || (c?.file_response_type === `full_file_response` ? c.name : void 0) || s;
            return (0, J.jsx)(
              ee,
              {
                type: `warning`,
                variant: `callout`,
                layout: `vertical`,
                title: l ? (0, J.jsx)(`span`, { className: `select-text`, children: l }) : void 0,
                content: (0, J.jsxs)(`div`, {
                  className: `flex flex-col gap-2 whitespace-pre-wrap select-none`,
                  children: [
                    (0, J.jsx)(`p`, { children: r.message }),
                    !n && r.suggestion && (0, J.jsx)(`p`, { children: r.suggestion }),
                  ],
                }),
              },
              i,
            );
          }),
        ],
      }),
    };
  }
  let a = `failed`,
    o = [];
  if (e.kind === `preview` || e.kind === `unavailable`)
    ((a = e.kind),
      e.kind === `preview` &&
        (e.status === 401
          ? (a = `authentication`)
          : (e.status === 403 || e.status === 404) && (a = `unavailable`)));
  else if (e.kind === `request`)
    a =
      e.errorCode === `gpt_plugin_migration_editor_access_failed`
        ? `editorAccess`
        : e.status === 401
          ? `authentication`
          : e.status === 403 || e.status === 404
            ? `unavailable`
            : e.status === 409
              ? e.errorCode === `gpt_plugin_migration_in_progress`
                ? `running`
                : e.errorCode === `gpt_plugin_migration_conflict` ||
                    e.errorCode === `gpt_plugin_migration_source_changed` ||
                    e.errorCode === `gpt_plugin_migration_owner_changed`
                  ? `changed`
                  : `conflict`
              : e.status === 500 || e.status === 502
                ? `failed`
                : `unknown`;
  else if (e.kind === `validation` || e.kind === `file_copy`) {
    let r = e.issues.find((e) => e.code === `skill_bundle_too_large`);
    if (r)
      return {
        title: (0, J.jsx)(d, { ...yt.bundleSize }),
        description: n
          ? (0, J.jsx)(d, { ...bt.readOnly })
          : (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(`p`, { children: r.message }),
                (0, J.jsx)(`p`, { children: r.suggestion }),
              ],
            }),
      };
    {
      let n = e.issues.filter((e) => e.resource.type === `knowledge_file`),
        r = e.failedFiles?.filter((e) => e.type === `knowledge_file`);
      ((o = (
        r?.length
          ? r.map((e) => ({
              id: e.file_id,
              name: n.find((t) => e.file_id != null && t.resource.id === e.file_id)?.resource.name,
            }))
          : n.map((e) => e.resource)
      ).map((e) => {
        let n = e.id == null ? void 0 : t?.find((t) => t.file_id === e.id);
        return e.name || (n?.file_response_type === `full_file_response` ? (n.name ?? void 0) : void 0);
      })),
        (o.length > 0 || e.kind === `file_copy`) && (a = `copy`));
    }
  }
  let s = {
    count: o.length,
    named: o.length > 0 && o.every((e) => !!e) ? `all` : `some`,
    first: o[0] ?? ``,
    second: o[1] ?? ``,
    remaining: o.length - 1,
  };
  return {
    title: (0, J.jsx)(d, { ...yt[a === `editorAccess` ? `failed` : a], values: s }),
    description: (0, J.jsx)(d, { ...bt[a], values: s }),
  };
}
var J, yt, bt;
function xt() {
  return (xt = e(() => {
    (k(),
      u(),
      _t(),
      (J = pe()),
      (yt = i({
        unavailable: {
          id: `chatgptConversations.gpts.migration.failure.unavailable.title`,
          defaultMessage: `Migration unavailable`,
          description: `Title in the GPT-to-plugin migration failure dialog when the source GPT cannot be confirmed as eligible or accessible. Shown to a GPT creator or workspace administrator with a Try again button.`,
        },
        preview: {
          id: `chatgptConversations.gpts.migration.failure.preview.title`,
          defaultMessage: `We couldn’t check this GPT`,
          description: `Title in the GPT-to-plugin migration failure dialog when the saved GPT could not be loaded for readiness checks. Shown to a GPT creator or workspace administrator with a Try again button.`,
        },
        authentication: {
          id: `chatgptConversations.gpts.migration.failure.authentication.title`,
          defaultMessage: `Sign in to continue`,
          description: `Title in the GPT-to-plugin migration failure dialog when the user session has expired. Shown to a GPT creator or workspace administrator with a Try again button.`,
        },
        bundleSize: {
          id: `chatgptConversations.gpts.migration.failure.bundleSize.title`,
          defaultMessage: `Plugin exceeds the size limit`,
          description: `Title in the GPT-to-plugin migration failure dialog when the compressed skill bundle exceeds the server-configured size limit. Shown to a GPT creator or workspace administrator with a Try again button.`,
        },
        failed: {
          id: `chatgptConversations.gpts.migration.failure.failed.title`,
          defaultMessage: `Migration failed`,
          description: `Title in the GPT-to-plugin migration failure dialog after a server-reported migration failure or unrecognized validation error. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.`,
        },
        unknown: {
          id: `chatgptConversations.gpts.migration.failure.unknown.title`,
          defaultMessage: `We couldn’t confirm migration`,
          description: `Title in the GPT-to-plugin migration failure dialog when a network or unexpected response leaves the migration outcome unknown. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.`,
        },
        running: {
          id: `chatgptConversations.gpts.migration.failure.running.title`,
          defaultMessage: `Migration is already running`,
          description: `Title in the GPT-to-plugin migration failure dialog when a recent migration attempt prevents another attempt; it may still be running. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.`,
        },
        changed: {
          id: `chatgptConversations.gpts.migration.failure.changed.title`,
          defaultMessage: `Something changed during migration`,
          description: `Title in the GPT-to-plugin migration failure dialog when the source GPT, its owner, or destination plugin changed during migration. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.`,
        },
        conflict: {
          id: `chatgptConversations.gpts.migration.failure.conflict.title`,
          defaultMessage: `Migration couldn’t continue`,
          description: `Title in the GPT-to-plugin migration failure dialog when migration conflicts without a more specific reason. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.`,
        },
        copy: {
          id: `chatgptConversations.gpts.migration.failure.copy.title`,
          defaultMessage: `{count, plural, one {Knowledge file couldn’t be copied} other {Knowledge files couldn’t be copied}}`,
          description: `Title in the GPT-to-plugin migration failure dialog when required knowledge files could not be copied to the plugin. Shown to a GPT creator or workspace administrator with a Try again button. count is the number of failed knowledge files; named selects all when every filename is known. first and second are filenames, remaining counts files after the first. Never translate filenames.`,
        },
      })),
      (bt = i({
        unavailable: {
          id: `chatgptConversations.gpts.migration.failure.unavailable.detail`,
          defaultMessage: `We couldn’t confirm that this GPT is available to migrate`,
          description: `Description in the GPT-to-plugin migration failure dialog when the source GPT cannot be confirmed as eligible or accessible. Shown to a GPT creator or workspace administrator with a Try again button.`,
        },
        preview: {
          id: `chatgptConversations.gpts.migration.failure.preview.detail`,
          defaultMessage: `We couldn’t load this GPT’s saved settings to check whether it’s ready to migrate`,
          description: `Description in the GPT-to-plugin migration failure dialog when the saved GPT could not be loaded for readiness checks. Shown to a GPT creator or workspace administrator with a Try again button.`,
        },
        authentication: {
          id: `chatgptConversations.gpts.migration.failure.authentication.detail`,
          defaultMessage: `Your session expired. Sign in again, then retry migration.`,
          description: `Description in the GPT-to-plugin migration failure dialog when the user session has expired. Shown to a GPT creator or workspace administrator with a Try again button.`,
        },
        failed: {
          id: `chatgptConversations.gpts.migration.failure.failed.detail`,
          defaultMessage: `We couldn’t finish migration. Try again to continue.`,
          description: `Description in the GPT-to-plugin migration failure dialog after a server-reported migration failure or unrecognized validation error. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.`,
        },
        unknown: {
          id: `chatgptConversations.gpts.migration.failure.unknown.detail`,
          defaultMessage: `Try again to check whether your plugin was created and continue migration`,
          description: `Description in the GPT-to-plugin migration failure dialog when a network or unexpected response leaves the migration outcome unknown. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.`,
        },
        running: {
          id: `chatgptConversations.gpts.migration.failure.running.detail`,
          defaultMessage: `Wait up to 5 minutes, then try again`,
          description: `Description in the GPT-to-plugin migration failure dialog when a recent migration attempt prevents another attempt; it may still be running. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.`,
        },
        changed: {
          id: `chatgptConversations.gpts.migration.failure.changed.detail`,
          defaultMessage: `The GPT, its owner, or the plugin changed. Try again to use the latest settings.`,
          description: `Description in the GPT-to-plugin migration failure dialog when the source GPT, its owner, or destination plugin changed during migration. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.`,
        },
        conflict: {
          id: `chatgptConversations.gpts.migration.failure.conflict.detail`,
          defaultMessage: `Another migration may be running, or the GPT or plugin may have changed. Wait a moment, then try again.`,
          description: `Description in the GPT-to-plugin migration failure dialog when migration conflicts without a more specific reason. Shown to a GPT creator or workspace administrator with a Try again button. Do not imply that no plugin was created; retry checks the current migration state.`,
        },
        editorAccess: {
          id: `chatgptConversations.gpts.migration.failure.editorAccess.detail`,
          defaultMessage: `Your plugin was created, but we couldn’t finish setting up your access. Try again.`,
          description: `Description in the GPT-to-plugin migration failure dialog when the plugin was created but granting its migrating administrator edit access failed; retry finishes the grant. Shown to a GPT creator or workspace administrator with a Try again button.`,
        },
        copy: {
          id: `chatgptConversations.gpts.migration.failure.copy.detail`,
          defaultMessage: `{named, select, all {{count, plural, one {We couldn’t copy {first} to the plugin. Try again.} =2 {We couldn’t copy {first} and {second} to the plugin. Try again.} other {We couldn’t copy {first} and {remaining, number} other files to the plugin. Try again.}}} other {{count, plural, one {We couldn’t copy a knowledge file to the plugin. Try again.} other {We couldn’t copy some knowledge files to the plugin. Try again.}}}}`,
          description: `Description in the GPT-to-plugin migration failure dialog when required knowledge files could not be copied to the plugin. Shown to a GPT creator or workspace administrator with a Try again button. count is the number of failed knowledge files; named selects all when every filename is known. first and second are filenames, remaining counts files after the first. Never translate filenames.`,
        },
        readOnly: {
          id: `chatgptConversations.gpts.migration.failure.readOnly.detail`,
          defaultMessage: `This GPT can’t be migrated with its current settings. GPT editing and publishing are no longer available.`,
          description: `Description in the GPT migration failure dialog when validation requires changing a saved GPT but retirement has disabled editing and publishing. Do not suggest unavailable edits.`,
        },
      })));
  }))();
}
function St(e) {
  let t = (0, At.c)(23),
    { fileCheck: n, files: r, canOmitOversizedFiles: i, canEdit: a } = e,
    o,
    c,
    l,
    u,
    f,
    p;
  if (
    t[0] !== a ||
    t[1] !== i ||
    t[2] !== n.maxFileBytes ||
    t[3] !== n.oversized ||
    t[4] !== n.profilePicture ||
    t[5] !== n.unavailable ||
    t[6] !== n.unchecked ||
    t[7] !== r
  ) {
    let e = new Map(r?.map(kt)),
      m = `unavailable`;
    (i ? (m = `omit`) : a && (m = `edit`),
      (o = `flex flex-col gap-3 wrap-anywhere`),
      (c = `alert`),
      (l = n.oversized?.length
        ? (0, Y.jsx)(`p`, {
            children: (0, Y.jsx)(d, {
              id: `chatgptConversations.gpts.migration.readiness.oversizedFilesNamedLimitHelp`,
              defaultMessage: `<strong>{filenames}</strong> {count, plural, one {exceeds} other {exceed}} the {maxFileSizeMb, number} MB limit and can’t migrate. {recovery, select, omit {Choose Migrate anyway to create the plugin {count, plural, one {without it} other {without them}}.} edit {Replace {count, plural, one {it with a smaller file} other {them with smaller files}} and publish the GPT again.} other {GPT editing and publishing are no longer available.}}`,
              description: `Blocking warning before GPT migration for knowledge files exceeding the size limit. maxFileSizeMb is the configured per-file limit in megabytes (1024² bytes). filenames is a localized list of file names or identifiers; count is the number of files. recovery is omit when the explicit Migrate anyway action is available, edit when the GPT can be edited, or unavailable otherwise. Two complete sentences.`,
              values: {
                filenames: (0, Y.jsx)(s, {
                  value: n.oversized.map((t) => t.name || e.get(t.fileId) || t.fileId),
                  type: `conjunction`,
                }),
                count: n.oversized.length,
                maxFileSizeMb: n.maxFileBytes / 1048576,
                recovery: m,
                strong: Ot,
              },
            }),
          })
        : null),
      t[14] === n.profilePicture
        ? (u = t[15])
        : ((u =
            n.profilePicture == null
              ? null
              : (0, Y.jsxs)(`p`, {
                  children: [
                    n.profilePicture.status === `tooLarge`
                      ? (0, Y.jsx)(d, {
                          id: `chatgptConversations.gpts.migration.readiness.profilePictureTooLargeNamedHelp`,
                          defaultMessage: `<strong>{filename}</strong> exceeds the 5 MB limit and won’t migrate. You can add a new profile picture to the plugin after migration.`,
                          description: `Advisory warning before GPT migration when a profile picture exceeds the migration size limit, displayed as 5 MB. filename is its name or identifier. Migration can continue and the user can add a replacement picture to the plugin. Two complete sentences.`,
                          values: { filename: n.profilePicture.name || n.profilePicture.fileId, strong: Dt },
                        })
                      : null,
                    n.profilePicture.status === `unavailable`
                      ? (0, Y.jsx)(d, {
                          id: `chatgptConversations.gpts.migration.readiness.profilePictureUnavailableNamedHelp`,
                          defaultMessage: `<strong>{filename}</strong> couldn’t be accessed. You can still try migrating.`,
                          description: `Advisory warning before GPT migration when profile picture metadata is inaccessible. filename is its name or identifier. The lookup cannot distinguish deletion from lack of access; migration remains allowed. Two complete sentences.`,
                          values: { filename: n.profilePicture.name || n.profilePicture.fileId, strong: Et },
                        })
                      : null,
                    n.profilePicture.status === `unchecked`
                      ? (0, Y.jsx)(d, {
                          id: `chatgptConversations.gpts.migration.readiness.profilePictureUncheckedNamedHelp`,
                          defaultMessage: `<strong>{filename}</strong> couldn’t be checked. You can still try migrating.`,
                          description: `Advisory warning before GPT migration when profile picture metadata lookup failed, timed out, or did not provide a valid size. filename is its name or identifier. Ordinary migration remains allowed. Two complete sentences.`,
                          values: { filename: n.profilePicture.name || n.profilePicture.fileId, strong: Tt },
                        })
                      : null,
                  ],
                })),
          (t[14] = n.profilePicture),
          (t[15] = u)),
      (f = n.unavailable.length
        ? (0, Y.jsx)(`p`, {
            children: (0, Y.jsx)(d, {
              id: `chatgptConversations.gpts.migration.readiness.unavailableFilesNamedHelp`,
              defaultMessage: `<strong>{filenames}</strong> couldn’t be accessed. {count, plural, one {It may have been deleted or you may no longer have access. You can still try migrating with it.} other {They may have been deleted or you may no longer have access. You can still try migrating with them.}}`,
              description: `Advisory warning before GPT migration for inaccessible knowledge files. filenames is a localized list of file names or identifiers, and count is the number of files. The lookup cannot distinguish deletion from lack of access, so migration remains allowed without omitting files. Three complete sentences.`,
              values: {
                filenames: (0, Y.jsx)(s, {
                  value: n.unavailable.map((t) => e.get(t) || t),
                  type: `conjunction`,
                }),
                count: n.unavailable.length,
                strong: wt,
              },
            }),
          })
        : null),
      (p = n.unchecked.length
        ? (0, Y.jsx)(`p`, {
            children: (0, Y.jsx)(d, {
              id: `chatgptConversations.gpts.migration.readiness.uncheckedFilesNamedHelp`,
              defaultMessage: `<strong>{filenames}</strong> couldn’t be checked. You can still try migrating {count, plural, one {with this file} other {with these files}}.`,
              description: `Advisory warning before GPT migration when knowledge-file metadata is incomplete or an availability request failed or timed out. filenames is a localized list of names or identifiers, and count is the number of files. This does not mean the files are missing; ordinary migration remains allowed. Two complete sentences.`,
              values: {
                filenames: (0, Y.jsx)(s, {
                  value: n.unchecked.map((t) => e.get(t) || t),
                  type: `conjunction`,
                }),
                count: n.unchecked.length,
                strong: Ct,
              },
            }),
          })
        : null),
      (t[0] = a),
      (t[1] = i),
      (t[2] = n.maxFileBytes),
      (t[3] = n.oversized),
      (t[4] = n.profilePicture),
      (t[5] = n.unavailable),
      (t[6] = n.unchecked),
      (t[7] = r),
      (t[8] = o),
      (t[9] = c),
      (t[10] = l),
      (t[11] = u),
      (t[12] = f),
      (t[13] = p));
  } else ((o = t[8]), (c = t[9]), (l = t[10]), (u = t[11]), (f = t[12]), (p = t[13]));
  let m;
  return (
    t[16] !== o || t[17] !== c || t[18] !== l || t[19] !== u || t[20] !== f || t[21] !== p
      ? ((m = (0, Y.jsxs)(`div`, { className: o, role: c, children: [l, u, f, p] })),
        (t[16] = o),
        (t[17] = c),
        (t[18] = l),
        (t[19] = u),
        (t[20] = f),
        (t[21] = p),
        (t[22] = m))
      : (m = t[22]),
    m
  );
}
function Ct(e) {
  return (0, Y.jsx)(`strong`, { className: `font-medium select-text`, children: e });
}
function wt(e) {
  return (0, Y.jsx)(`strong`, { className: `font-medium select-text`, children: e });
}
function Tt(e) {
  return (0, Y.jsx)(`strong`, { className: `font-medium select-text`, children: e });
}
function Et(e) {
  return (0, Y.jsx)(`strong`, { className: `font-medium select-text`, children: e });
}
function Dt(e) {
  return (0, Y.jsx)(`strong`, { className: `font-medium select-text`, children: e });
}
function Ot(e) {
  return (0, Y.jsx)(`strong`, { className: `font-medium select-text`, children: e });
}
function kt(e) {
  let t = e.file_id || e.id;
  return [t, (e.file_response_type === `full_file_response` && e.name) || t];
}
var At, Y;
function jt() {
  return (jt = e(() => {
    ((At = I()), k(), (Y = pe()));
  }))();
}
async function Mt(e, t, n, r) {
  let i = { maxFileBytes: r, unavailable: [], unchecked: [] },
    a = AbortSignal.timeout(1e4),
    o = AbortSignal.any([n, a]),
    s = new Map(e.files.map((e) => [e.file_id || e.id, e])),
    c = new Map(
      e.files.flatMap((e) =>
        e.file_response_type === `full_file_response` && e.size != null && e.size > r
          ? [[e.file_id || e.id, e.name]]
          : [],
      ),
    ),
    l = e.gizmo.display.profile_pic_id,
    u = (0, Pt.default)([...s.keys(), ...(l ? [l] : [])]);
  for (let d of (0, Nt.default)(u, 4))
    await Promise.all(
      d.map(async (u) => {
        n.throwIfAborted();
        let d = s.get(u),
          f = d?.file_response_type === `full_file_response` && !!d.file_id,
          p = u === l;
        if ((d != null && !f && i.unchecked.push(u), (!f && !p) || a.aborted)) {
          (f && i.unchecked.push(u), p && (i.profilePicture = { fileId: u, status: `unchecked` }));
          return;
        }
        try {
          let n = await H.safeGet(`/files/{file_id}`, {
            parameters: { path: { file_id: u }, query: { gizmo_id: e.gizmo.id } },
            additionalHeaders: { "ChatGPT-Account-ID": t },
            expectedErrorStatuses: [401, 403, 404, 408, 429, 500, 502, 503, 504],
            signal: o,
          });
          (f && n.size != null && n.size > r && !c.has(u) && c.set(u, n.name || d.name),
            p &&
              (n.size == null || !Number.isFinite(n.size) || n.size < 0
                ? (i.profilePicture = { fileId: u, name: n.name || void 0, status: `unchecked` })
                : n.size > 5242880 &&
                  (i.profilePicture = { fileId: u, name: n.name || void 0, status: `tooLarge` })));
        } catch (e) {
          n.throwIfAborted();
          let t = e instanceof O && e.status === 404 ? `unavailable` : `unchecked`;
          (f && i[t].push(u), p && (i.profilePicture = { fileId: u, status: t }));
        }
      }),
    );
  return (
    c.size > 0 &&
      ((i.oversized = Array.from(c, ([e, t]) => ({ fileId: e, name: t || void 0 }))),
      (i.unavailable = i.unavailable.filter((e) => !c.has(e))),
      (i.unchecked = i.unchecked.filter((e) => !c.has(e)))),
    i
  );
}
var Nt, Pt, Ft;
function It() {
  return (It = e(() => {
    ((Nt = t(Ie(), 1)), (Pt = t(Ae(), 1)), c(), de(), je(), (Ft = E().int().positive().catch(104857600)));
  }))();
}
function Lt(e) {
  let t = (0, Vt.c)(18),
    { unavailable: n, canEdit: r, canOmit: i, editingDisabled: a } = e;
  if (r && !a && !i) {
    let e;
    t[0] === n ? (e = t[1]) : ((e = n.map(zt)), (t[0] = n), (t[1] = e));
    let r;
    return (
      t[2] === e
        ? (r = t[3])
        : ((r = (0, X.jsx)(`ul`, { className: `flex flex-col gap-3 wrap-anywhere`, children: e })),
          (t[2] = e),
          (t[3] = r)),
      r
    );
  }
  let o;
  if (i) {
    let e;
    (t[4] !== r || t[5] !== a
      ? ((e =
          r && !a
            ? (0, X.jsx)(d, {
                id: `chatgptConversations.gpts.migration.unavailableAppsOmitOrEdit`,
                defaultMessage: `These apps aren’t available to you. Edit the GPT to remove or replace them, or migrate without them.`,
                description: `Recovery guidance above a list of unavailable saved app IDs. The user can edit the source GPT or explicitly choose Migrate anyway to omit these apps. Missing metadata means the apps are unavailable to this user, not necessarily deleted.`,
              })
            : (0, X.jsx)(d, {
                id: `chatgptConversations.gpts.migration.unavailableAppsOmit`,
                defaultMessage: `These apps aren’t available to you. You can migrate without them.`,
                description: `Recovery guidance above a list of unavailable saved app IDs when GPT editing is unavailable. The user can explicitly choose Migrate anyway to omit these apps. Missing metadata means the apps are unavailable to this user, not necessarily deleted.`,
              })),
        (t[4] = r),
        (t[5] = a),
        (t[6] = e))
      : (e = t[6]),
      (o = e));
  } else if (a) {
    let e;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(d, {
          id: `chatgptConversations.gpts.migration.unavailableAppsReadOnly`,
          defaultMessage: `This GPT can’t be migrated because required apps are unavailable. GPT editing and publishing are no longer available.`,
          description: `Blocking explanation inside the Apps readiness row of the migration modal after GPT retirement disables updates. The user cannot fix missing required apps by editing. Two sentences, no placeholders.`,
        })),
        (t[7] = e))
      : (e = t[7]),
      (o = e));
  } else {
    let e;
    (t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(d, {
          id: `chatgptConversations.gpts.migration.unavailableAppsOwnerHelp`,
          defaultMessage: `Ask the GPT owner to remove or replace the unavailable apps and publish an update before migrating`,
          description: `Recovery guidance inside the Apps row of the GPT migration modal when the viewer lacks editing permission. Missing required apps block migration. Directs the viewer to the source GPT owner; may wrap.`,
        })),
        (t[8] = e))
      : (e = t[8]),
      (o = e));
  }
  let s;
  t[9] === o
    ? (s = t[10])
    : ((s = (0, X.jsx)(`p`, { className: `select-none`, children: o })), (t[9] = o), (t[10] = s));
  let c;
  t[11] === n ? (c = t[12]) : ((c = n.map(Rt)), (t[11] = n), (t[12] = c));
  let l;
  t[13] === c
    ? (l = t[14])
    : ((l = (0, X.jsx)(`ul`, { className: `flex flex-col gap-1 wrap-anywhere select-text`, children: c })),
      (t[13] = c),
      (t[14] = l));
  let u;
  return (
    t[15] !== s || t[16] !== l
      ? ((u = (0, X.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [s, l] })),
        (t[15] = s),
        (t[16] = l),
        (t[17] = u))
      : (u = t[17]),
    u
  );
}
function Rt(e) {
  return (0, X.jsx)(`li`, { children: e }, e);
}
function zt(e) {
  return (0, X.jsx)(
    `li`,
    {
      children: (0, X.jsx)(d, {
        id: `chatgptConversations.gpts.migration.unavailableApp.edit_help`,
        defaultMessage: `<strong>{appName}</strong> is no longer available. Edit the GPT to remove or replace it with an available app.`,
        description: `Blocking warning inside the Apps and actions row of the GPT migration modal, for a viewer who can edit the source GPT. appName is the unavailable app's identifier because its display name is unavailable; it may be long. The strong tag emphasizes that identifier. Explains how to fix the missing app before migration; two sentences that may wrap.`,
        values: { appName: e, strong: Bt },
      }),
    },
    e,
  );
}
function Bt(e) {
  return (0, X.jsx)(`strong`, { className: `font-medium select-text`, children: e }, `strong`);
}
var Vt, X;
function Ht() {
  return (Ht = e(() => {
    ((Vt = I()), k(), (X = pe()));
  }))();
}
function Ut(e) {
  if (e != null)
    return e.share_recipient === `link` || e.share_recipient === `marketplace`
      ? `public`
      : e.share_recipient === `workspace`
        ? `published`
        : (e.sharing?.subjects.length ?? 0) > 0 ||
            (e.share_recipient != null && e.share_recipient !== `private`)
          ? `shared`
          : e.share_recipient === `private`
            ? `private`
            : void 0;
}
function Wt({
  sourceAudience: e,
  canMigrate: t,
  isWorkspaceAccount: n,
  canSharePlugin: r,
  canPublishPlugin: i,
  isCheckingSharing: a,
  sharingCheckFailed: o,
  sharingChecked: s,
}) {
  return t
    ? a
      ? `restricted`
      : o
        ? `error`
        : n
          ? s
            ? e === `public`
              ? r
                ? i
                  ? `publicBoth`
                  : `publicShare`
                : i
                  ? `publicPublish`
                  : `publicDisabled`
              : e === `shared` && !r
                ? `sharedUnavailable`
                : e === `published` && !i
                  ? r
                    ? `publishUnavailable`
                    : `publishPrivate`
                  : r
                    ? `enabled`
                    : i
                      ? `publish`
                      : e === `private`
                        ? `private`
                        : `disabled`
            : `restricted`
          : e === `public`
            ? `publicPrivate`
            : `personal`
    : `unavailable`;
}
function Gt(e) {
  let t = (0, Jt.c)(113),
    {
      sourceAudience: n,
      files: r,
      appCheck: i,
      canMigrate: a,
      canPublishPlugin: o,
      canSharePlugin: s,
      failure: c,
      fileCheck: l,
      hasCustomActions: u,
      isCheckingSharing: f,
      isWorkspaceAccount: p,
      sharingCheckFailed: m,
      sharingChecked: h,
      canEdit: g,
      canOmitUnavailableApps: _,
      canOmitOversizedFiles: v,
      editingDisabled: y,
    } = e,
    b = i?.status === `loading`,
    x = a && i?.status === `ready`,
    ee,
    S,
    te,
    C,
    w,
    T,
    ne,
    re,
    E,
    ie;
  if (
    t[0] !== i ||
    t[1] !== g ||
    t[2] !== a ||
    t[3] !== v ||
    t[4] !== _ ||
    t[5] !== o ||
    t[6] !== s ||
    t[7] !== y ||
    t[8] !== c ||
    t[9] !== l ||
    t[10] !== r ||
    t[11] !== u ||
    t[12] !== f ||
    t[13] !== p ||
    t[14] !== x ||
    t[15] !== m ||
    t[16] !== h ||
    t[17] !== n
  ) {
    ((re = c != null && c.kind !== `request` ? c.issues.filter(Kt) : []),
      (w = Q.noIssues),
      !x || c?.kind === `request`
        ? (w = Q.checkFailed)
        : c != null || l?.oversized?.length || l?.unavailable.length || l?.profilePicture != null
          ? (w = Q.needsReview)
          : l?.unchecked.length && (w = Q.fileCheckFailed),
      (ne =
        (l?.oversized?.length ?? 0) > 0 ||
        (l?.unavailable.length ?? 0) > 0 ||
        (l?.unchecked.length ?? 0) > 0 ||
        l?.profilePicture != null));
    let e;
    if (
      (t[28] === w ? (e = t[29]) : ((e = (0, Z.jsx)(d, { ...w })), (t[28] = w), (t[29] = e)),
      (T = e),
      re.length > 0 || l?.oversized?.length)
    )
      T = (0, Z.jsx)(d, {
        id: `chatgptConversations.gpts.migration.readiness.oversizedCount`,
        defaultMessage: `{count, plural, one {# file is too large} other {# files are too large}}`,
        description: `Number of oversized knowledge files blocking GPT migration`,
        values: { count: re.length || l?.oversized?.length },
      });
    else if (l?.unavailable.length) {
      let e;
      (t[30] === l.unavailable.length
        ? (e = t[31])
        : ((e = (0, Z.jsx)(d, {
            id: `chatgptConversations.gpts.migration.readiness.unavailableFileCount`,
            defaultMessage: `{count, plural, one {# file unavailable} other {# files unavailable}}`,
            description: `Advisory count of knowledge files that could not be accessed before GPT migration; not found may also mean the caller no longer has access`,
            values: { count: l.unavailable.length },
          })),
          (t[30] = l.unavailable.length),
          (t[31] = e)),
        (T = e));
    } else if (l?.profilePicture?.status === `tooLarge`) {
      let e;
      (t[32] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(d, {
            id: `chatgptConversations.gpts.migration.readiness.profilePictureTooLarge`,
            defaultMessage: `Profile picture too large`,
            description: `Advisory status before GPT migration when the profile picture exceeds the 5 MiB migration limit`,
          })),
          (t[32] = e))
        : (e = t[32]),
        (T = e));
    } else if (l?.profilePicture?.status === `unavailable`) {
      let e;
      (t[33] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(d, {
            id: `chatgptConversations.gpts.migration.readiness.profilePictureUnavailable`,
            defaultMessage: `Profile picture unavailable`,
            description: `Advisory status before GPT migration when profile picture metadata could not be accessed; the file may be missing or access may be restricted`,
          })),
          (t[33] = e))
        : (e = t[33]),
        (T = e));
    } else if (l?.profilePicture?.status === `unchecked`) {
      let e;
      (t[34] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(d, {
            id: `chatgptConversations.gpts.migration.readiness.profilePictureUnchecked`,
            defaultMessage: `Couldn’t check profile picture`,
            description: `Advisory status before GPT migration when the profile picture could not be checked`,
          })),
          (t[34] = e))
        : (e = t[34]),
        (T = e));
    }
    ((S = Q.noIssues),
      !x || i?.apps == null
        ? (S = Q.checkFailed)
        : i.apps.unavailable.length > 0
          ? (S = Q.appsUnavailable)
          : i.apps.disabledByAdmin.length > 0
            ? (S = Q.appsDisabled)
            : u && (S = Q.unsupportedActions));
    let b = i?.status === `ready` ? i.apps?.unavailable : void 0,
      D = i?.status === `ready` ? i.apps?.disabledByAdmin : void 0,
      ae = (b?.length ?? 0) + (D?.length ?? 0),
      oe;
    if (
      (t[35] === S ? (oe = t[36]) : ((oe = (0, Z.jsx)(d, { ...S })), (t[35] = S), (t[36] = oe)),
      (te = oe),
      b?.length && D?.length)
    ) {
      let e;
      (t[37] === ae
        ? (e = t[38])
        : ((e = (0, Z.jsx)(d, {
            id: `chatgptConversations.gpts.migration.readiness.appIssueCount`,
            defaultMessage: `{count, plural, one {# app needs attention} other {# apps need attention}}`,
            description: `Short Apps and actions checklist status in the GPT migration modal when both unavailable and admin-disabled apps are present. Count is the total number of affected apps; unavailable apps prevent migration.`,
            values: { count: ae },
          })),
          (t[37] = ae),
          (t[38] = e)),
        (te = e));
    } else if (b != null && b.length > 0) {
      let e;
      (t[39] === b.length
        ? (e = t[40])
        : ((e = (0, Z.jsx)(d, {
            id: `chatgptConversations.gpts.migration.readiness.unavailableAppCount`,
            defaultMessage: `{count, plural, one {# app is unavailable} other {# apps are unavailable}}`,
            description: `Short warning status in the Apps row of the migration modal. The positive integer count is the number of missing required apps, which block migration until the published GPT is fixed.`,
            values: { count: b.length },
          })),
          (t[39] = b.length),
          (t[40] = e)),
        (te = e));
    } else if (D != null && D.length > 0) {
      let e;
      (t[41] === D.length
        ? (e = t[42])
        : ((e = (0, Z.jsx)(d, {
            id: `chatgptConversations.gpts.migration.readiness.disabledAppCount`,
            defaultMessage: `{count, plural, one {# app is disabled} other {# apps are disabled}}`,
            description: `Short Apps and actions checklist status before GPT migration. Count is the positive number of apps disabled by the workspace admin. Migration remains allowed, but the plugin stays disabled until these apps are enabled.`,
            values: { count: D.length },
          })),
          (t[41] = D.length),
          (t[42] = e)),
        (te = e));
    }
    let O;
    (t[43] !== a ||
    t[44] !== o ||
    t[45] !== s ||
    t[46] !== f ||
    t[47] !== p ||
    t[48] !== m ||
    t[49] !== h ||
    t[50] !== n
      ? ((O = Wt({
          sourceAudience: n,
          canMigrate: a,
          isWorkspaceAccount: p,
          canSharePlugin: s,
          canPublishPlugin: o,
          isCheckingSharing: f,
          sharingCheckFailed: m,
          sharingChecked: h,
        })),
        (t[43] = a),
        (t[44] = o),
        (t[45] = s),
        (t[46] = f),
        (t[47] = p),
        (t[48] = m),
        (t[49] = h),
        (t[50] = n),
        (t[51] = O))
      : (O = t[51]),
      (E = O));
    let k;
    if (
      (t[52] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((k = [
            `disabled`,
            `sharedUnavailable`,
            `publishUnavailable`,
            `publishPrivate`,
            `publicBoth`,
            `publicShare`,
            `publicPublish`,
            `publicDisabled`,
            `publicPrivate`,
          ]),
          (t[52] = k))
        : (k = t[52]),
      (ie = k.includes(E)),
      i?.status === `ready` && i.apps == null)
    ) {
      let e;
      (t[53] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(d, {
            id: `chatgptConversations.gpts.migration.readiness.appLookupFailed`,
            defaultMessage: `We couldn’t confirm whether this GPT’s required apps are available and enabled. Check again before migrating.`,
            description: `Blocking explanation for a failed app-availability lookup; the user must retry before migration`,
          })),
          (t[53] = e))
        : (e = t[53]),
        (ee = e));
    } else if (ae > 0 || u) {
      let e = ae > 0 ? `alert` : void 0,
        n;
      t[54] !== g || t[55] !== _ || t[56] !== y || t[57] !== b
        ? ((n =
            b != null && b.length > 0
              ? (0, Z.jsx)(Lt, { unavailable: b, canEdit: g, canOmit: _, editingDisabled: y })
              : null),
          (t[54] = g),
          (t[55] = _),
          (t[56] = y),
          (t[57] = b),
          (t[58] = n))
        : (n = t[58]);
      let r;
      t[59] !== D || t[60] !== b
        ? ((r = D?.map((e) =>
            (0, Z.jsx)(
              `p`,
              {
                children:
                  b != null && b.length > 0
                    ? (0, Z.jsx)(d, {
                        id: `chatgptConversations.gpts.migration.readiness.disabledAppCombinedHelp`,
                        defaultMessage: `{appName} is disabled. After migration, the plugin will stay disabled until your admin enables {appName}.`,
                        description: `Warning inside the Apps and actions checklist row when an admin-disabled app and other unavailable apps are both present before GPT migration. appName is the disabled app's display name or ID, which may be long. Unavailable apps must first be fixed; this warning explains the separate admin restriction after migration. Two sentences that may wrap.`,
                        values: { appName: e.name || e.id },
                      })
                    : (0, Z.jsx)(d, {
                        id: `chatgptConversations.gpts.migration.readiness.disabledAppHelp`,
                        defaultMessage: `{appName} is disabled by your admin. You can migrate, but the plugin will stay disabled until this app is enabled.`,
                        description: `Warning inside the Apps and actions checklist row before GPT migration. appName is the required app's display name, or its ID when unnamed, and may be long. Migration is allowed but the resulting plugin is disabled until the admin enables this app. Two sentences that may wrap.`,
                        values: { appName: e.name || e.id },
                      }),
              },
              e.id,
            ),
          )),
          (t[59] = D),
          (t[60] = b),
          (t[61] = r))
        : (r = t[61]);
      let i;
      t[62] === u
        ? (i = t[63])
        : ((i = u
            ? (0, Z.jsx)(`p`, {
                children: (0, Z.jsx)(d, {
                  id: `chatgptConversations.gpts.migration.readiness.unsupportedActionsHelp`,
                  defaultMessage: `Features that use custom actions won’t work in the plugin. You can migrate without them.`,
                  description: `Warning inside the Apps and actions checklist row before GPT migration when the GPT has custom API actions. Explains to the creator or migrating admin that these actions are omitted; migration remains allowed. Two sentences that may wrap.`,
                }),
              })
            : null),
          (t[62] = u),
          (t[63] = i));
      let a;
      (t[64] !== e || t[65] !== n || t[66] !== r || t[67] !== i
        ? ((a = (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-3 wrap-anywhere`,
            role: e,
            children: [n, r, i],
          })),
          (t[64] = e),
          (t[65] = n),
          (t[66] = r),
          (t[67] = i),
          (t[68] = a))
        : (a = t[68]),
        (ee = a));
    } else ee = void 0;
    if (re.length > 0) {
      let e;
      t[69] !== y || t[70] !== r
        ? ((e = (e, t) => {
            let n = r?.find((t) => t.file_id === e.resource.id),
              i = e.resource.name || (n?.file_response_type === `full_file_response` ? n.name : void 0);
            return (0, Z.jsx)(
              `p`,
              {
                children:
                  !y && i
                    ? (0, Z.jsx)(d, {
                        id: `chatgptConversations.gpts.migration.readiness.replaceFile`,
                        defaultMessage: `{filename} needs to be replaced with a smaller file`,
                        description: `Blocking knowledge-file warning. Edit GPT opens the web editor to replace this file and publish the update.`,
                        values: { filename: i },
                      })
                    : e.message,
              },
              t,
            );
          }),
          (t[69] = y),
          (t[70] = r),
          (t[71] = e))
        : (e = t[71]);
      let n;
      (t[72] === y
        ? (n = t[73])
        : ((n = y
            ? (0, Z.jsx)(`p`, {
                children: (0, Z.jsx)(d, {
                  id: `chatgptConversations.gpts.migration.readiness.editingUnavailable`,
                  defaultMessage: `This GPT can’t be migrated because of the issues above. GPT editing and publishing are no longer available.`,
                  description: `Explains why migration is blocked by oversized files when retirement has disabled GPT editing`,
                }),
              })
            : null),
          (t[72] = y),
          (t[73] = n)),
        (C = (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-3 wrap-anywhere`,
          role: `alert`,
          children: [re.map(e), n],
        })));
    } else if (ne && l != null) {
      let e;
      (t[74] !== g || t[75] !== v || t[76] !== l || t[77] !== r
        ? ((e = (0, Z.jsx)(St, { fileCheck: l, files: r, canOmitOversizedFiles: v, canEdit: g })),
          (t[74] = g),
          (t[75] = v),
          (t[76] = l),
          (t[77] = r),
          (t[78] = e))
        : (e = t[78]),
        (C = e));
    }
    ((t[0] = i),
      (t[1] = g),
      (t[2] = a),
      (t[3] = v),
      (t[4] = _),
      (t[5] = o),
      (t[6] = s),
      (t[7] = y),
      (t[8] = c),
      (t[9] = l),
      (t[10] = r),
      (t[11] = u),
      (t[12] = f),
      (t[13] = p),
      (t[14] = x),
      (t[15] = m),
      (t[16] = h),
      (t[17] = n),
      (t[18] = ee),
      (t[19] = S),
      (t[20] = te),
      (t[21] = C),
      (t[22] = w),
      (t[23] = T),
      (t[24] = ne),
      (t[25] = re),
      (t[26] = E),
      (t[27] = ie));
  } else
    ((ee = t[18]),
      (S = t[19]),
      (te = t[20]),
      (C = t[21]),
      (w = t[22]),
      (T = t[23]),
      (ne = t[24]),
      (re = t[25]),
      (E = t[26]),
      (ie = t[27]));
  let D;
  t[79] !== b || t[80] !== f
    ? ((D =
        b || f
          ? (0, Z.jsx)(`span`, {
              className: `sr-only`,
              role: `status`,
              children: (0, Z.jsx)(d, {
                id: `chatgptConversations.gpts.migration.checkingReadiness`,
                defaultMessage: `Checking migration readiness…`,
                description: `Accessible progress status while checking a GPT’s saved configuration, knowledge files, required apps, and plugin sharing permissions before migration`,
              }),
            })
          : null),
      (t[79] = b),
      (t[80] = f),
      (t[81] = D))
    : (D = t[81]);
  let ae = w === Q.noIssues,
    oe = c?.kind === `validation` || re.length > 0 || ne,
    O;
  t[82] !== C || t[83] !== T || t[84] !== b || t[85] !== ae || t[86] !== oe
    ? ((O = (0, Z.jsx)(qt, {
        label: Q.instructionsAndFiles,
        loading: b,
        positive: ae,
        status: T,
        warning: oe,
        details: C,
      })),
      (t[82] = C),
      (t[83] = T),
      (t[84] = b),
      (t[85] = ae),
      (t[86] = oe),
      (t[87] = O))
    : (O = t[87]);
  let k = S === Q.noIssues,
    A = (i?.status === `ready` && i.apps == null) || S === Q.appsUnavailable || S === Q.appsDisabled || u,
    j;
  t[88] !== ee || t[89] !== te || t[90] !== b || t[91] !== k || t[92] !== A
    ? ((j = (0, Z.jsx)(qt, { label: Q.apps, loading: b, positive: k, status: te, warning: A, details: ee })),
      (t[88] = ee),
      (t[89] = te),
      (t[90] = b),
      (t[91] = k),
      (t[92] = A),
      (t[93] = j))
    : (j = t[93]);
  let M = b || f,
    se;
  t[94] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = [`personal`, `private`, `enabled`, `publish`]), (t[94] = se))
    : (se = t[94]);
  let N = se.includes(E),
    P = ie || E === `error`,
    ce;
  t[95] === E
    ? (ce = t[96])
    : ((ce = (0, Z.jsx)(d, {
        id: `chatgptConversations.gpts.migration.readiness.sharing.audience_status`,
        defaultMessage: `{status, select, unavailable {Migration unavailable} error {Couldn’t check sharing} personal {Private plugin} private {No issues found} enabled {Sharing enabled} publish {Publishing enabled} disabled {Sharing disabled} sharedUnavailable {Sharing unavailable} publishUnavailable {Publishing unavailable} publishPrivate {Publishing unavailable} publicBoth {Public sharing unavailable} publicShare {Public sharing unavailable} publicPublish {Public sharing unavailable} publicPrivate {Public sharing unavailable} publicDisabled {Sharing disabled} other {Workspace permissions apply}}`,
        description: `Short status beside Access and sharing in the GPT migration preview, read by the creator or migrating admin. The status selector is unavailable for blocked migration, error for a failed permission check, personal for personal-account private plugins, private when a private GPT stays private under workspace restrictions, enabled or publish for allowed plugin sharing or directory publishing, disabled for confirmed restrictions with unknown source audience, sharedUnavailable, publishUnavailable, or publishPrivate when the GPT’s existing workspace audience cannot transfer, publicBoth/publicShare/publicPublish/publicPrivate when public access cannot transfer, publicDisabled when a public GPT must become private under workspace restrictions, and other while permissions are unconfirmed. Keep each label short; allowed sharing is never applied automatically.`,
        values: { status: E },
      })),
      (t[95] = E),
      (t[96] = ce));
  let le;
  t[97] !== E || t[98] !== ie
    ? ((le = ie
        ? (0, Z.jsx)(d, {
            id: `chatgptConversations.gpts.migration.readiness.sharing.audience_help`,
            defaultMessage: `{status, select, sharedUnavailable {This GPT is shared in your workspace, but plugin sharing is disabled. The plugin will start private and can’t be shared with the same people.} publishUnavailable {This GPT is published to your workspace, but publishing plugins to the workspace directory is disabled. You can share the plugin with people or groups instead.} publishPrivate {This GPT is published to your workspace, but plugin sharing and publishing are disabled. The plugin will stay private.} publicBoth {Plugins can’t be shared publicly. Share within your workspace, publish to its plugin directory, or keep it private.} publicShare {Plugins can’t be shared publicly. Share with people or groups in your workspace, or keep it private.} publicPublish {Plugins can’t be shared publicly. Publish to your workspace’s plugin directory or keep it private.} publicDisabled {Your workspace doesn’t allow plugin sharing. The plugin will stay private.} publicPrivate {Plugins can’t be shared publicly. The plugin will stay private.} other {This plugin will remain private. Ask an admin to enable sharing.}}`,
            description: `Nonblocking explanation inside Access and sharing in the GPT migration preview, read by the GPT creator or migrating admin. The status selector combines the published GPT audience and confirmed plugin permissions: sharedUnavailable means its workspace recipients cannot retain access; publishUnavailable means directory publishing is disabled but direct sharing is allowed; publishPrivate means neither is allowed for a workspace-published GPT; publicBoth, publicShare, and publicPublish list the allowed workspace alternatives to public sharing; publicDisabled means the workspace allows neither; publicPrivate is a personal-account public GPT; other is a confirmed restriction with unknown source audience. Each branch is complete prose that may wrap. Migration creates a private plugin and does not share it automatically.`,
            values: { status: E },
          })
        : void 0),
      (t[97] = E),
      (t[98] = ie),
      (t[99] = le))
    : (le = t[99]);
  let ue;
  t[100] !== N || t[101] !== P || t[102] !== ce || t[103] !== le || t[104] !== M
    ? ((ue = (0, Z.jsx)(qt, {
        label: Q.accessAndSharing,
        loading: M,
        positive: N,
        warning: P,
        status: ce,
        details: le,
      })),
      (t[100] = N),
      (t[101] = P),
      (t[102] = ce),
      (t[103] = le),
      (t[104] = M),
      (t[105] = ue))
    : (ue = t[105]);
  let F;
  t[106] !== ue || t[107] !== O || t[108] !== j
    ? ((F = (0, Z.jsxs)(`dl`, {
        className: `flex flex-col divide-y divide-border-subtle text-sm`,
        children: [O, j, ue],
      })),
      (t[106] = ue),
      (t[107] = O),
      (t[108] = j),
      (t[109] = F))
    : (F = t[109]);
  let de;
  return (
    t[110] !== D || t[111] !== F
      ? ((de = (0, Z.jsxs)(`div`, {
          className: `rounded-2xl bg-surface-secondary px-5 select-none`,
          children: [D, F],
        })),
        (t[110] = D),
        (t[111] = F),
        (t[112] = de))
      : (de = t[112]),
    de
  );
}
function Kt(e) {
  return e.code === `knowledge_file_too_large` && e.resource.type === `knowledge_file`;
}
function qt(e) {
  let t = (0, Jt.c)(19),
    { label: n, loading: r, positive: i, status: o, warning: s, details: c } = e,
    l = s !== void 0 && s,
    u;
  t[0] === n
    ? (u = t[1])
    : ((u = (0, Z.jsx)(`dt`, {
        className: `min-w-0 basis-35 text-secondary`,
        children: (0, Z.jsx)(d, { ...n }),
      })),
      (t[0] = n),
      (t[1] = u));
  let f = l ? `text-warning` : `text-default`,
    m;
  t[2] === f
    ? (m = t[3])
    : ((m = D(`flex min-w-0 grow basis-32 items-center justify-end gap-2 text-end`, f)),
      (t[2] = f),
      (t[3] = m));
  let h;
  t[4] !== r || t[5] !== i || t[6] !== o || t[7] !== l
    ? ((h = r
        ? (0, Z.jsxs)(`span`, {
            className: `flex items-center gap-2 motion-safe:animate-pulse`,
            "aria-hidden": !0,
            children: [
              (0, Z.jsx)(`span`, { className: `h-5 w-25 rounded-full bg-text/10` }),
              (0, Z.jsx)(`span`, { className: `size-5 shrink-0 rounded-full bg-text/10` }),
            ],
          })
        : (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsx)(`span`, { className: `min-w-0 wrap-anywhere`, children: o }),
              i && (0, Z.jsx)(S, { className: `text-success` }),
              !i && l && (0, Z.jsx)(p, { className: `text-warning` }),
              !i && !l && (0, Z.jsx)(a, { className: `text-secondary` }),
            ],
          })),
      (t[4] = r),
      (t[5] = i),
      (t[6] = o),
      (t[7] = l),
      (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] !== m || t[10] !== h
    ? ((g = (0, Z.jsx)(`dd`, { className: m, children: h })), (t[9] = m), (t[10] = h), (t[11] = g))
    : (g = t[11]);
  let _;
  t[12] !== c || t[13] !== r
    ? ((_ =
        !r && c != null
          ? (0, Z.jsx)(`dd`, { className: `w-full border-s border-default ps-3 text-default`, children: c })
          : null),
      (t[12] = c),
      (t[13] = r),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  return (
    t[15] !== u || t[16] !== g || t[17] !== _
      ? ((v = (0, Z.jsxs)(`div`, {
          className: `flex min-w-0 flex-wrap items-center justify-between gap-x-5 gap-y-3 py-5`,
          children: [u, g, _],
        })),
        (t[15] = u),
        (t[16] = g),
        (t[17] = _),
        (t[18] = v))
      : (v = t[18]),
    v
  );
}
var Jt, Z, Q;
function Yt() {
  return (Yt = e(() => {
    ((Jt = I()),
      w(),
      k(),
      v(),
      Ht(),
      jt(),
      (Z = pe()),
      (Q = i({
        instructionsAndFiles: {
          id: `chatgptConversations.gpts.migration.readiness.instructionsAndFiles`,
          defaultMessage: `Instructions and files`,
          description: `Label for the GPT instructions and knowledge files row in the migration readiness checklist`,
        },
        apps: {
          id: `chatgptConversations.gpts.migration.readiness.appsAndActions`,
          defaultMessage: `Apps and actions`,
          description: `Short label for required connected apps and custom API actions in the GPT migration readiness checklist`,
        },
        accessAndSharing: {
          id: `chatgptConversations.gpts.migration.readiness.accessAndSharing`,
          defaultMessage: `Access and sharing`,
          description: `Label for plugin access and workspace sharing permissions in the GPT migration readiness checklist`,
        },
        noIssues: {
          id: `chatgptConversations.gpts.migration.readiness.noIssues`,
          defaultMessage: `No issues found`,
          description: `Short status in the GPT migration checklist when the relevant instructions, files, apps, or actions check has no known issues. Does not guarantee later server validation will pass.`,
        },
        needsReview: {
          id: `chatgptConversations.gpts.migration.readiness.needsReview`,
          defaultMessage: `Needs review`,
          description: `Readiness status when migration has reported validation or file-copy issues that the user should review below the checklist`,
        },
        fileCheckFailed: {
          id: `chatgptConversations.gpts.migration.readiness.fileCheckFailed`,
          defaultMessage: `Couldn’t check files`,
          description: `Advisory status when knowledge-file availability could not be checked before GPT migration; this does not mean the files were deleted`,
        },
        checkFailed: {
          id: `chatgptConversations.gpts.migration.readiness.checkFailed`,
          defaultMessage: `Couldn’t check`,
          description: `Readiness status when a check has not succeeded; it does not imply the GPT content, apps, or sharing permissions are ready`,
        },
        unsupportedActions: {
          id: `chatgptConversations.gpts.migration.readiness.unsupportedActions`,
          defaultMessage: `Unsupported actions`,
          description: `Short warning status inside Apps and actions in the GPT migration checklist. Custom API actions will not transfer to the plugin, but migration remains allowed.`,
        },
        appsUnavailable: {
          id: `chatgptConversations.gpts.migration.readiness.appsUnavailable`,
          defaultMessage: `Apps unavailable`,
          description: `Readiness status when one or more required GPT apps are unavailable and prevent migration`,
        },
        appsDisabled: {
          id: `chatgptConversations.gpts.migration.readiness.appsDisabled`,
          defaultMessage: `Apps disabled by admin`,
          description: `Readiness status when required GPT apps are disabled by the workspace administrator; migration remains available but the resulting plugin will be disabled`,
        },
      })));
  }))();
}
function Xt(e) {
  let t = (0, ln.c)(137),
    { resource: n, remigration: r, onClose: i, onMigratingChange: a, onMigrated: s } = e,
    c = f(o),
    u = b(),
    d = l(),
    p = Oe(),
    { accountId: h, userId: g } = Fe(),
    _;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = { preview: !1 }), (t[0] = _)) : (_ = t[0]);
  let { data: v } = ye(void 0, _),
    y = Pe(`2160578039`),
    ee = x(Be),
    S = x(He),
    C = me(be, `2513446768`),
    w;
  t[1] === C ? (w = t[2]) : ((w = C?.get(`disable_gpt_updates`, !1)), (t[1] = C), (t[2] = w));
  let T = w === !0,
    ne = me(be, `3358027618`),
    re = Ft.parse(ne?.value.max_file_bytes),
    E = me(be, `2562735250`)?.get(`enabled`, !1) === !0,
    ie = Ue(v, Pe(`1355972088`)),
    D = me(be, `2826703856`)?.get(`enable_gpt_fe_controls`, !1) === !0,
    ae = Pe(`782250190`),
    {
      data: O,
      isPending: k,
      isError: A,
    } = me(ke, h ?? ``, { enabled: h != null && v?.id === h && v.structure === `workspace` && (ie || D) }),
    [j, M] = (0, fn.useState)(r ? void 0 : n.gizmo.migrated_plugin_id),
    se = me(et, `${h}:${j}`),
    N;
  t[3] === n.tools ? (N = t[4]) : ((N = n.tools.some(rn)), (t[3] = n.tools), (t[4] = N));
  let [P, ce] = (0, fn.useState)(N),
    [le, ue] = (0, fn.useState)(!1),
    [F, de] = (0, fn.useState)(!1),
    [I, fe] = (0, fn.useState)(),
    [pe, L] = (0, fn.useState)(),
    he;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = { hasCustomActions: !1, disabledAppIds: [] }), (t[5] = he))
    : (he = t[5]);
  let [ve, z] = (0, fn.useState)(he),
    B = (0, fn.useRef)(!1),
    Se = Ge({ account: v, rbacEnabled: D, permissions: O?.permissions, isPending: k, isError: A }),
    Ce =
      E &&
      Je({
        resource: n,
        account: v,
        accountId: h,
        userId: g,
        enabled: y,
        allowMigrated: F,
        remigration: r,
      }) &&
      We(v, ie, O?.permissions),
    we = m({
      queryKey: [`chatgpt-gizmos`, `migration-preview`, h, g, n.gizmo.id, n.gizmo.gizmo_config_id, re],
      queryFn: async (e) => {
        let { signal: t } = e;
        if (h == null) throw Error(`GPT migration requires an account`);
        let r = await H.safeGet(`/gizmos/{gizmo_id_or_short_url}`, {
            parameters: { path: { gizmo_id_or_short_url: n.gizmo.id } },
            additionalHeaders: { "ChatGPT-Account-ID": h },
            expectedErrorStatuses: [401, 403, 404],
            signal: t,
          }),
          i = r.gizmo.migrated_plugin_id
            ? await c.queryClient.fetchQuery(
                ze({ gizmoId: r.gizmo.id, pluginId: r.gizmo.migrated_plugin_id }, h, g),
              )
            : void 0;
        t.throwIfAborted();
        let a = i?.deleted_plugin_id && i?.gizmo_config_id ? i : void 0,
          o = a?.gizmo_config_id ?? r.gizmo.gizmo_config_id,
          [s, l] = await Promise.all([
            r.gizmo.migrated_plugin_id == null || a != null
              ? cn(r, h, t).catch(() => (t.throwIfAborted(), null))
              : { unavailable: [], disabledByAdmin: [] },
            r.gizmo.migrated_plugin_id == null || a != null ? Mt(r, h, t, re) : void 0,
          ]);
        return { resource: r, remigration: a, configId: o, apps: s, fileCheck: l };
      },
      enabled: Ce && j == null && (Se === `allowed` || F || I != null),
      retry: !1,
      staleTime: 0,
      refetchOnWindowFocus: !1,
    }),
    { data: U, isFetching: Ae, isError: W, error: je, refetch: Me } = te(we),
    Ne = F || (U?.resource.gizmo.migrated_plugin_id != null && !U.remigration),
    Ie = Ce && (ee || Ne) && (Se === `allowed` || Ne),
    Le;
  t[6] !== U?.resource || t[7] !== P
    ? ((Le = P || U?.resource.tools.some(nn) === !0), (t[6] = U?.resource), (t[7] = P), (t[8] = Le))
    : (Le = t[8]);
  let G = Le,
    K;
  if (Ae && !le) {
    let e;
    (t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = { status: `loading` }), (t[9] = e))
      : (e = t[9]),
      (K = e));
  } else if (W) {
    let e;
    t[10] === je ? (e = t[11]) : ((e = ut(je)), (t[10] = je), (t[11] = e));
    let n = e,
      r = n.kind === `request` ? n.status : void 0,
      i;
    (t[12] === r ? (i = t[13]) : ((i = { status: `error`, httpStatus: r }), (t[12] = r), (t[13] = i)),
      (K = i));
  } else if (U == null) {
    let e;
    (t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = { status: `loading` }), (t[14] = e))
      : (e = t[14]),
      (K = e));
  } else {
    let e;
    (t[15] === U.apps
      ? (e = t[16])
      : ((e = { status: `ready`, apps: U.apps }), (t[15] = U.apps), (t[16] = e)),
      (K = e));
  }
  let Ve = K.status === `ready` && K.apps?.unavailable.length === 0,
    q =
      pe?.gizmoId === n.gizmo.id && pe.accountId === h && pe.userId === g && pe.configId === U?.configId
        ? pe
        : void 0,
    Ke;
  t[17] !== W ||
  t[18] !== ve ||
  t[19] !== I?.kind ||
  t[20] !== G ||
  t[21] !== U?.apps?.disabledByAdmin ||
  t[22] !== U?.apps?.unavailable ||
  t[23] !== q?.appIds
    ? ((Ke =
        I?.kind === `request` &&
        (W ||
          U?.apps?.unavailable.some((e) => !q?.appIds.includes(e)) === !0 ||
          (G && !ve.hasCustomActions) ||
          U?.apps?.disabledByAdmin.some((e) => !ve.disabledAppIds.includes(e.id)) === !0)),
      (t[17] = W),
      (t[18] = ve),
      (t[19] = I?.kind),
      (t[20] = G),
      (t[21] = U?.apps?.disabledByAdmin),
      (t[22] = U?.apps?.unavailable),
      (t[23] = q?.appIds),
      (t[24] = Ke))
    : (Ke = t[24]);
  let Ye = Ke,
    Qe = U?.resource.gizmo,
    $e = Qe?.share_recipient === `link` || Qe?.share_recipient === `marketplace`,
    nt =
      ae &&
      v?.id === h &&
      v?.structure === `workspace` &&
      Qe?.workspace_id === h &&
      Qe.author.user_id === v.account_user_id,
    rt = Qe?.gizmo_config_id,
    it;
  t[25] !== h || t[26] !== n.gizmo.id || t[27] !== rt || t[28] !== g
    ? ((it = [`chatgpt-gizmos`, `migration-sharing-capabilities`, h, g, n.gizmo.id, rt]),
      (t[25] = h),
      (t[26] = n.gizmo.id),
      (t[27] = rt),
      (t[28] = g),
      (t[29] = it))
    : (it = t[29]);
  let at;
  t[30] !== h || t[31] !== n.gizmo.id
    ? ((at = (e) => {
        let { signal: t } = e;
        if (h == null) throw Error(`Plugin sharing capabilities require an account`);
        return H.safeGet(`/gizmos/{gizmo_id}/export/plugin/capabilities`, {
          parameters: { path: { gizmo_id: n.gizmo.id } },
          additionalHeaders: { "ChatGPT-Account-ID": h },
          expectedErrorStatuses: [401, 403, 404],
          signal: t,
        });
      }),
      (t[30] = h),
      (t[31] = n.gizmo.id),
      (t[32] = at))
    : (at = t[32]);
  let ot = Ie && j == null && nt,
    ct;
  t[33] !== at || t[34] !== ot || t[35] !== it
    ? ((ct = { queryKey: it, queryFn: at, enabled: ot, retry: !1, staleTime: 0, refetchOnWindowFocus: !1 }),
      (t[33] = at),
      (t[34] = ot),
      (t[35] = it),
      (t[36] = ct))
    : (ct = t[36]);
  let { data: lt, isError: dt, isFetching: ft } = te(ct),
    pt = Ie && j == null && nt && !dt && !ft && lt?.workspace_id === h,
    mt;
  Ie &&
    K.status === `ready` &&
    U != null &&
    qe({
      resource: U.resource,
      remigration: U.remigration,
      account: v,
      accountId: h,
      userId: g,
      enabled: y,
      allowMigrated: F,
      gptPermission: Se,
    }) &&
    (mt = U.resource.gizmo.author.user_id === (v?.structure === `personal` ? g : v?.account_user_id));
  let ht;
  t[37] !== I ||
  t[38] !== U?.configId ||
  t[39] !== U?.fileCheck?.oversized?.length ||
  t[40] !== q?.fileIds.length
    ? ((ht =
        ((q?.fileIds.length ?? 0) > 0 || (U?.fileCheck?.oversized?.length ?? 0) > 0) &&
        !!U?.configId &&
        (I == null || st(I) != null)),
      (t[37] = I),
      (t[38] = U?.configId),
      (t[39] = U?.fileCheck?.oversized?.length),
      (t[40] = q?.fileIds.length),
      (t[41] = ht))
    : (ht = t[41]);
  let gt = ht,
    _t =
      K.status === `ready` &&
      (K.apps?.unavailable.length ?? 0) > 0 &&
      !!U?.configId &&
      (I == null || Ye || gt),
    vt = K.status === `ready` && K.apps != null && (gt || _t),
    J;
  t[42] === i
    ? (J = t[43])
    : ((J = () => {
        B.current || i();
      }),
      (t[42] = i),
      (t[43] = J));
  let yt = J,
    bt;
  t[44] !== d || t[45] !== i || t[46] !== s
    ? ((bt = (e) => {
        (i(), s == null ? xe(e, d) : s(e));
      }),
      (t[44] = d),
      (t[45] = i),
      (t[46] = s),
      (t[47] = bt))
    : (bt = t[47]);
  let xt = bt,
    St;
  t[48] !== h ||
  t[49] !== Ve ||
  t[50] !== Ie ||
  t[51] !== vt ||
  t[52] !== _t ||
  t[53] !== Ne ||
  t[54] !== I ||
  t[55] !== G ||
  t[56] !== u ||
  t[57] !== F ||
  t[58] !== a ||
  t[59] !== xt ||
  t[60] !== j ||
  t[61] !== U ||
  t[62] !== we ||
  t[63] !== q?.fileIds ||
  t[64] !== n.gizmo.id ||
  t[65] !== c ||
  t[66] !== z ||
  t[67] !== fe ||
  t[68] !== ce ||
  t[69] !== ue ||
  t[70] !== de ||
  t[71] !== L ||
  t[72] !== M ||
  t[73] !== p ||
  t[74] !== g
    ? ((St = (e) => {
        let t = e !== void 0 && e;
        if (B.current || j != null || (!c.get(Be) && !Ne) || !Ie || (!Ve && !_t && I == null) || (t && !vt))
          return;
        let r =
            t && h != null && U?.configId
              ? {
                  accountId: h,
                  userId: g,
                  gizmoId: n.gizmo.id,
                  configId: U.configId,
                  fileIds: (0, dn.default)([
                    ...(q?.fileIds ?? []),
                    ...(U.fileCheck?.oversized?.map(tn) ?? []),
                  ]),
                  appIds: U.apps?.unavailable ?? [],
                }
              : void 0,
          i;
        ((B.current = !0),
          ue(!0),
          a?.(!0),
          fe(void 0),
          L(r),
          z({ hasCustomActions: G, disabledAppIds: U?.apps?.disabledByAdmin.map(en) ?? [] }),
          c.queryClient
            .fetchQuery(we)
            .catch($t)
            .then(async (e) => {
              if (e == null) return;
              let { resource: t, apps: n, fileCheck: a } = e;
              if (e.remigration?.deleted_plugin_id !== U?.remigration?.deleted_plugin_id) return;
              let o = c.queryClient.getQueryData([`accounts`, `check`])?.accounts?.find((e) => e.id === h);
              if (h == null) {
                fe({ kind: `request`, status: 403 });
                return;
              }
              let s = p.getDynamicConfig(`2826703856`).get(`enable_gpt_fe_controls`, !1),
                l = c.query.getData(ke, h);
              if (
                o?.structure === `workspace` &&
                ((s && (t.gizmo.migrated_plugin_id == null || e.remigration != null)) ||
                  Ue(o, p.checkGate(`1355972088`)))
              )
                try {
                  (await c.query.cancel(ke, h),
                    await _e(h),
                    (l = await c.queryClient.fetchQuery({
                      ...c.query.getOptions(ke, h),
                      queryFn: (e) => {
                        let { signal: t } = e;
                        return Re(c, h, t, !0);
                      },
                      staleTime: 0,
                    })));
                } catch {
                  fe({ kind: `request`, status: 403 });
                  return;
                }
              if (
                c.get(R) !== h ||
                c.get(Ee) !== g ||
                !p.checkGate(`2160578039`) ||
                !p.getDynamicConfig(`2562735250`).get(`enabled`, !1) ||
                !We(o, p.checkGate(`1355972088`), l?.permissions)
              ) {
                fe({ kind: `request`, status: 403 });
                return;
              }
              let d = e.remigration ? void 0 : t.gizmo.migrated_plugin_id;
              if (d == null) {
                if (!c.get(Be) && !F) return;
                if (r != null && e.configId !== r.configId) {
                  (L(void 0),
                    fe({ kind: `request`, status: 409, errorCode: `gpt_plugin_migration_source_changed` }));
                  return;
                }
                if (
                  !qe({
                    resource: t,
                    remigration: e.remigration,
                    account: o,
                    accountId: h,
                    userId: g,
                    enabled: !0,
                    gptPermission: Ge({
                      account: o,
                      rbacEnabled: p.getDynamicConfig(`2826703856`).get(`enable_gpt_fe_controls`, !1),
                      permissions: l?.permissions,
                      isPending: !1,
                      isError: !1,
                    }),
                  })
                ) {
                  fe({ kind: `request`, status: 403 });
                  return;
                }
                if (
                  n == null ||
                  a?.oversized?.some((e) => !r?.fileIds.includes(e.fileId)) ||
                  (a != null &&
                    (a.unavailable.some(
                      (e) => !r?.fileIds.includes(e) && !U?.fileCheck?.unavailable.includes(e),
                    ) ||
                      a.unchecked.some(
                        (e) => !r?.fileIds.includes(e) && !U?.fileCheck?.unchecked.includes(e),
                      ) ||
                      (a.profilePicture != null &&
                        (a.profilePicture.fileId !== U?.fileCheck?.profilePicture?.fileId ||
                          a.profilePicture.status !== U?.fileCheck?.profilePicture?.status)))) ||
                  (r != null &&
                    ((r = { ...r, appIds: r.appIds.filter((e) => n.unavailable.includes(e)) }), L(r)),
                  n.unavailable.some((e) => !r?.appIds.includes(e))) ||
                  n?.disabledByAdmin.some((e) => !U?.apps?.disabledByAdmin.some((t) => t.id === e.id))
                )
                  return;
                if (!G && t.tools.some(Qt)) {
                  ce(!0);
                  return;
                }
              }
              if (d == null || F) {
                if (!e.configId) throw Error(`Missing published GPT configuration for migration`);
                i = e.configId;
                let a = r?.appIds.filter((e) => n?.unavailable.includes(e)),
                  o = (r?.fileIds.length ?? 0) > 0 || (a?.length ?? 0) > 0,
                  s = await H.safePost(`/gizmos/{gizmo_id}/migrate/plugin`, {
                    parameters: {
                      path: { gizmo_id: t.gizmo.id },
                      query: o
                        ? {
                            skip_incompatible_configs: !0,
                            skip_file_ids: r?.fileIds.length ? r.fileIds : void 0,
                            skip_app_ids: a?.length ? a : void 0,
                          }
                        : void 0,
                    },
                    requestBody: {
                      gizmo_config_id: e.configId,
                      deleted_plugin_id: e.remigration?.deleted_plugin_id,
                    },
                    expectedErrorStatuses: [400, 401, 403, 404, 409, 502],
                  });
                if (((d = s.plugin_id), c.get(R) !== h || c.get(Ee) !== g)) return;
                (c.set(et, `${h}:${d}`, {
                  failedFiles: s.failed_files ?? [],
                  files: t.files,
                  skippedFiles: s.skipped_files?.map(Zt) ?? [],
                }),
                  s.skipped_files != null &&
                    s.skipped_files.length > 0 &&
                    c.get(oe).warning(u.formatMessage(tt.description, { count: s.skipped_files.length })),
                  de(!1));
              }
              if (c.get(R) !== h || c.get(Ee) !== g) return;
              let f = { ...t, gizmo: { ...t.gizmo, migrated_plugin_id: d } };
              (c.queryClient.setQueriesData({ queryKey: [`chatgpt-gizmos`, `detail`] }, (e) =>
                e?.gizmo.id === t.gizmo.id ? f : e,
              ),
                c.queryClient.setQueryData([`chatgpt-gizmos`, `detail`, t.gizmo.id], f));
              try {
                await H.safePost(`/ps/plugins/{plugin_id}/install`, {
                  surface: `plugin_management`,
                  parameters: { path: { plugin_id: d } },
                  additionalHeaders: { ...Te(), "ChatGPT-Account-ID": h },
                  expectedErrorStatuses: [400, 401, 403, 404, 409],
                });
              } catch {
                c.get(R) === h &&
                  c.get(Ee) === g &&
                  c
                    .get(oe)
                    .warning(
                      u.formatMessage({
                        id: `chatgptConversations.gpts.migration.installFailed`,
                        defaultMessage: `Your plugin was migrated, but couldn’t be installed. You can try installing it from its page.`,
                        description: `Warning after GPT migration succeeded but automatic installation failed. The user is taken to the new plugin's detail page, where they can retry installation without migrating again.`,
                      }),
                    );
              }
              c.get(R) === h &&
                c.get(Ee) === g &&
                (ge((e) => V(c.queryClient, e), !0),
                M(d),
                c.get(et, `${h}:${d}`)?.failedFiles.length || xt(d),
                c.queryClient.invalidateQueries({ queryKey: [`chatgpt-gizmos`] }));
            })
            .catch((e) => {
              if (c.get(R) === h && c.get(Ee) === g) {
                let t = ut(e),
                  a = st(t);
                (L(
                  h != null && i != null && a != null
                    ? {
                        accountId: h,
                        userId: g,
                        gizmoId: n.gizmo.id,
                        configId: i,
                        fileIds: [...new Set([...(r?.fileIds ?? []), ...a])],
                        appIds: r?.appIds ?? [],
                      }
                    : r,
                ),
                  t.kind === `request` &&
                    t.errorCode === `gpt_plugin_migration_editor_access_failed` &&
                    de(!0),
                  fe(t),
                  i != null && c.queryClient.invalidateQueries({ queryKey: we.queryKey }));
              }
            })
            .finally(() => {
              ((B.current = !1), ue(!1), a?.(!1));
            }));
      }),
      (t[48] = h),
      (t[49] = Ve),
      (t[50] = Ie),
      (t[51] = vt),
      (t[52] = _t),
      (t[53] = Ne),
      (t[54] = I),
      (t[55] = G),
      (t[56] = u),
      (t[57] = F),
      (t[58] = a),
      (t[59] = xt),
      (t[60] = j),
      (t[61] = U),
      (t[62] = we),
      (t[63] = q?.fileIds),
      (t[64] = n.gizmo.id),
      (t[65] = c),
      (t[66] = z),
      (t[67] = fe),
      (t[68] = ce),
      (t[69] = ue),
      (t[70] = de),
      (t[71] = L),
      (t[72] = M),
      (t[73] = p),
      (t[74] = g),
      (t[75] = St))
    : (St = t[75]);
  let Ct = St,
    wt = U?.resource.gizmo,
    Tt;
  t[76] === wt ? (Tt = t[77]) : ((Tt = Ut(wt)), (t[76] = wt), (t[77] = Tt));
  let Et = Ie || I != null ? K : void 0,
    Dt = S && j == null && !Ne,
    Ot = Ne ? `allowed` : Se,
    kt;
  t[78] !== pt || t[79] !== lt?.sharing
    ? ((kt = pt && lt?.sharing.allowed_modes.includes(`workspace_directory`) === !0),
      (t[78] = pt),
      (t[79] = lt?.sharing),
      (t[80] = kt))
    : (kt = t[80]);
  let At;
  t[81] !== pt || t[82] !== lt?.sharing
    ? ((At =
        pt &&
        (lt?.sharing.allowed_modes.includes(`users_and_groups`) === !0 ||
          lt?.sharing.allowed_modes.includes(`workspace_link`) === !0)),
      (t[81] = pt),
      (t[82] = lt?.sharing),
      (t[83] = At))
    : (At = t[83]);
  let Y = se?.failedFiles,
    jt = se?.skippedFiles,
    Nt = Ye ? void 0 : I,
    Pt = U?.fileCheck,
    It = se?.files ?? U?.resource.files,
    Lt;
  t[84] !== pt || t[85] !== lt?.sharing
    ? ((Lt = pt && lt?.sharing.allowed_modes.includes(`private`) === !0),
      (t[84] = pt),
      (t[85] = lt?.sharing),
      (t[86] = Lt))
    : (Lt = t[86]);
  let Rt = nt && ft,
    zt = v?.id === h && v?.structure === `workspace`,
    Bt;
  t[87] !== xt || t[88] !== j
    ? ((Bt = j == null ? void 0 : (0, $.jsx)(Ze, { onOpen: () => xt(j) })),
      (t[87] = xt),
      (t[88] = j),
      (t[89] = Bt))
    : (Bt = t[89]);
  let Vt = nt && (dt || (!ft && lt?.workspace_id !== h)),
    X = $e && !W && !Ae && Qe?.current_user_permission != null && (!nt || pt),
    Ht;
  t[90] === Me ? (Ht = t[91]) : ((Ht = () => void Me()), (t[90] = Me), (t[91] = Ht));
  let Wt;
  t[92] !== v?.structure ||
  t[93] !== K.status ||
  t[94] !== yt ||
  t[95] !== T ||
  t[96] !== D ||
  t[97] !== U ||
  t[98] !== n.gizmo.id ||
  t[99] !== O?.permissions
    ? ((Wt =
        K.status === `ready` &&
        !T &&
        U?.resource.gizmo.current_user_permission?.can_write &&
        (!D || v?.structure === `personal` || O?.permissions?.includes(`chatgpt.workspace.gpt.crud`)) &&
        !U.resource.gizmo.migrated_plugin_id
          ? (e) => {
              B.current ||
                (yt(),
                De({
                  event: e,
                  href: `${Xe(`/gpts/editor`)}/${encodeURIComponent(n.gizmo.id)}`,
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                }));
            }
          : void 0),
      (t[92] = v?.structure),
      (t[93] = K.status),
      (t[94] = yt),
      (t[95] = T),
      (t[96] = D),
      (t[97] = U),
      (t[98] = n.gizmo.id),
      (t[99] = O?.permissions),
      (t[100] = Wt))
    : (Wt = t[100]);
  let Gt;
  t[101] === Ct ? (Gt = t[102]) : ((Gt = () => Ct()), (t[101] = Ct), (t[102] = Gt));
  let Kt;
  t[103] !== vt || t[104] !== Ct
    ? ((Kt = vt ? () => Ct(!0) : void 0), (t[103] = vt), (t[104] = Ct), (t[105] = Kt))
    : (Kt = t[105]);
  let qt;
  return (
    t[106] !== Ie ||
    t[107] !== gt ||
    t[108] !== yt ||
    t[109] !== T ||
    t[110] !== G ||
    t[111] !== mt ||
    t[112] !== le ||
    t[113] !== j ||
    t[114] !== n.gizmo.display.name ||
    t[115] !== Tt ||
    t[116] !== Et ||
    t[117] !== Dt ||
    t[118] !== Ot ||
    t[119] !== kt ||
    t[120] !== At ||
    t[121] !== Y ||
    t[122] !== jt ||
    t[123] !== Nt ||
    t[124] !== Pt ||
    t[125] !== It ||
    t[126] !== Lt ||
    t[127] !== Rt ||
    t[128] !== zt ||
    t[129] !== Bt ||
    t[130] !== Vt ||
    t[131] !== X ||
    t[132] !== Ht ||
    t[133] !== Wt ||
    t[134] !== Gt ||
    t[135] !== Kt
      ? ((qt = (0, $.jsx)(an, {
          sourceAudience: Tt,
          appCheck: Et,
          canMigrate: Ie,
          workspaceAuthoringDisabled: Dt,
          gptPermission: Ot,
          canPublishPlugin: kt,
          canSharePlugin: At,
          failedFiles: Y,
          skippedFiles: jt,
          failure: Nt,
          fileCheck: Pt,
          files: It,
          gizmoName: n.gizmo.display.name,
          hasCustomActions: G,
          sharingChecked: Lt,
          editingDisabled: T,
          isCheckingSharing: Rt,
          isGptOwner: mt,
          isMigrating: le,
          isWorkspaceAccount: zt,
          pluginAction: Bt,
          pluginId: j,
          sharingCheckFailed: Vt,
          showPublicSharingNote: X,
          onCheckApps: Ht,
          onClose: yt,
          onEdit: Wt,
          onMigrate: Gt,
          hasFileOmissions: gt,
          onMigrateAnyway: Kt,
        })),
        (t[106] = Ie),
        (t[107] = gt),
        (t[108] = yt),
        (t[109] = T),
        (t[110] = G),
        (t[111] = mt),
        (t[112] = le),
        (t[113] = j),
        (t[114] = n.gizmo.display.name),
        (t[115] = Tt),
        (t[116] = Et),
        (t[117] = Dt),
        (t[118] = Ot),
        (t[119] = kt),
        (t[120] = At),
        (t[121] = Y),
        (t[122] = jt),
        (t[123] = Nt),
        (t[124] = Pt),
        (t[125] = It),
        (t[126] = Lt),
        (t[127] = Rt),
        (t[128] = zt),
        (t[129] = Bt),
        (t[130] = Vt),
        (t[131] = X),
        (t[132] = Ht),
        (t[133] = Wt),
        (t[134] = Gt),
        (t[135] = Kt),
        (t[136] = qt))
      : (qt = t[136]),
    qt
  );
}
function Zt(e) {
  return { fileId: e.file_id };
}
function Qt(e) {
  return e.type === `plugins_prototype`;
}
function $t() {}
function en(e) {
  return e.id;
}
function tn(e) {
  return e.fileId;
}
function nn(e) {
  return e.type === `plugins_prototype`;
}
function rn(e) {
  return e.type === `plugins_prototype`;
}
function an(e) {
  let t = (0, ln.c)(167),
    {
      sourceAudience: r,
      appCheck: i,
      canMigrate: a,
      workspaceAuthoringDisabled: o,
      gptPermission: s,
      canPublishPlugin: c,
      canSharePlugin: l,
      failedFiles: u,
      skippedFiles: f,
      failure: p,
      fileCheck: m,
      files: h,
      gizmoName: g,
      hasCustomActions: _,
      hasFileOmissions: v,
      isCheckingSharing: y,
      isGptOwner: b,
      isMigrating: x,
      isWorkspaceAccount: ee,
      modal: S,
      pluginAction: te,
      pluginId: C,
      portalContainer: w,
      sharingCheckFailed: ne,
      sharingChecked: re,
      editingDisabled: E,
      showPublicSharingNote: ie,
      onCheckApps: D,
      onClose: oe,
      onMigrate: O,
      onMigrateAnyway: k,
      onEdit: A,
    } = e,
    M = o !== void 0 && o,
    N = s === void 0 ? `allowed` : s,
    P = c !== void 0 && c,
    ue = l !== void 0 && l,
    F = v !== void 0 && v,
    de = y !== void 0 && y,
    I = ee !== void 0 && ee,
    fe = ne !== void 0 && ne,
    pe = re !== void 0 && re,
    L = E !== void 0 && E,
    me;
  t[0] === g ? (me = t[1]) : ((me = g.trim()), (t[0] = g), (t[1] = me));
  let he = me,
    ge;
  t[2] !== h || t[3] !== f
    ? ((ge = f?.map((e) => {
        let { fileId: t } = e,
          n = h?.find((e) => (e.file_id || e.id) === t);
        return (n?.file_response_type === `full_file_response` && n.name) || t;
      })),
      (t[2] = h),
      (t[3] = f),
      (t[4] = ge))
    : (ge = t[4]);
  let _e = ge,
    ve;
  t[5] !== p || t[6] !== k || t[7] !== C
    ? ((ve = C == null && k != null && st(p) != null), (t[5] = p), (t[6] = k), (t[7] = C), (t[8] = ve))
    : (ve = t[8]);
  let R = ve,
    ye =
      C == null &&
      k != null &&
      i?.status === `ready` &&
      (i.apps?.unavailable.length ?? 0) > 0 &&
      (p == null || R),
    z = (m?.oversized?.length ?? 0) > 0,
    B = C == null && k != null && z,
    be = R || B || ye || (C == null && k != null && F),
    xe;
  t[9] === p
    ? (xe = t[10])
    : ((xe =
        p != null && p.kind !== `request` && (p.status == null || p.status === 400) && p.issues.every(on)
          ? p.issues
          : []),
      (t[9] = p),
      (t[10] = xe));
  let Se = xe,
    Ce = C == null && (i?.status === `error` || (i?.status === `ready` && i.apps == null)),
    we;
  if (C == null && p != null && (Se.length === 0 || R)) {
    let e;
    (t[11] !== R || t[12] !== L || t[13] !== p || t[14] !== h
      ? ((e = vt(p, h, L, R)), (t[11] = R), (t[12] = L), (t[13] = p), (t[14] = h), (t[15] = e))
      : (e = t[15]),
      (we = e));
  } else if (i?.status === `error`) {
    let e;
    (t[16] === i.httpStatus
      ? (e = t[17])
      : ((e = vt({ kind: `preview`, status: i.httpStatus })), (t[16] = i.httpStatus), (t[17] = e)),
      (we = e));
  }
  let V = we != null,
    Te = i == null || (i.status === `ready` && i.apps != null),
    Ee = i == null || (i.status === `ready` && i.apps?.unavailable.length === 0),
    De;
  if (we != null) De = we.title;
  else if (C != null) {
    let e;
    (t[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          id: `chatgptConversations.gpts.migration.ready`,
          defaultMessage: `Your plugin is ready`,
          description: `Title after a GPT has successfully been migrated to a private plugin`,
        })),
        (t[18] = e))
      : (e = t[18]),
      (De = e));
  } else if (he) {
    let e;
    (t[19] === he
      ? (e = t[20])
      : ((e = (0, $.jsx)(d, {
          id: `chatgptConversations.gpts.migration.title`,
          defaultMessage: `Migrate {gptName}`,
          description: `Confirmation dialog title naming the GPT to migrate into a private plugin`,
          values: { gptName: he },
        })),
        (t[19] = he),
        (t[20] = e)),
      (De = e));
  } else {
    let e;
    (t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          id: `chatgptConversations.gpts.migration.untitledTitle`,
          defaultMessage: `Migrate Untitled GPT`,
          description: `Confirmation dialog title when the GPT being migrated into a private plugin has no name`,
        })),
        (t[21] = e))
      : (e = t[21]),
      (De = e));
  }
  let H, U;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, $.jsx)(d, {
        id: `chatgptConversations.gpts.migration.workspaceAuthoringDisabledTooltip`,
        defaultMessage: `Plugin creation is disabled for this workspace`,
        description: `Tooltip for a disabled GPT migration button when plugin authoring is disabled for the current workspace. This workspace feature restriction is separate from plugin-use permissions and administrator settings for Plugin Creator. Complete sentence with no placeholders.`,
      })),
      (t[22] = U))
    : (U = t[22]);
  let Oe = U;
  if (M && !x) H = Oe;
  else if (C == null && !x && N !== `allowed`) {
    let e;
    (t[23] === N ? (e = t[24]) : ((e = (0, $.jsx)(Ye, { permission: N })), (t[23] = N), (t[24] = e)),
      (H = e));
  } else if (we != null) H = we.description;
  else if (C != null) {
    let e;
    (t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          id: `chatgptConversations.gpts.migration.successReviewDescription`,
          defaultMessage: `Open your plugin to review it`,
          description: `Next step in the GPT migration success dialog. The plugin has been created and automatic installation has been attempted. The Open plugin button navigates to its detail page, where the user can review the result, including any file-copy warnings. One sentence with no placeholders.`,
        })),
        (t[25] = e))
      : (e = t[25]),
      (H = e));
  } else if (!a && !x && p == null) {
    let e;
    (t[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          id: `chatgptConversations.gpts.migration.unavailable`,
          defaultMessage: `Migration isn't available for this GPT. Check that the GPT is saved and that you have permission to use plugins`,
          description: `Explains that GPT migration is unavailable while source eligibility or plugin-use permissions are missing`,
        })),
        (t[26] = e))
      : (e = t[26]),
      (H = e));
  } else if (!I) {
    let e;
    (t[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          id: `chatgptConversations.gpts.migration.nonWorkspaceDescription.editingLocked`,
          defaultMessage: `Turn this GPT into a plugin using its instructions and knowledge files. It starts private. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.`,
          description: `Standalone confirmation description before GPT migration in a personal account or while the current account is unconfirmed. Migration copies saved instructions and knowledge files into a private plugin, prevents further edits to the original GPT, and allows future updates to the plugin. Do not promise that sharing will be available afterward. Four complete sentences with no placeholders.`,
        })),
        (t[27] = e))
      : (e = t[27]),
      (H = e));
  } else if (b === !1) {
    let e;
    (t[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          id: `chatgptConversations.gpts.migration.adminDescription.editingLocked`,
          defaultMessage: `Turn this GPT into a plugin using its instructions and knowledge files. It starts private. The GPT’s owner will own the plugin, and you’ll also have edit access. You can manage sharing afterward, within your workspace’s permissions. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.`,
          description: `Standalone confirmation description before an eligible workspace administrator or owner migrates a GPT owned by someone else. Migration copies saved instructions and knowledge files into a private plugin. The GPT’s current owner retains plugin ownership, the caller also receives editor access, and sharing is managed afterward within workspace permissions. Migration prevents further edits to the original GPT; future updates can be made to the plugin. Six complete sentences with no placeholders.`,
        })),
        (t[28] = e))
      : (e = t[28]),
      (H = e));
  } else {
    let e;
    (t[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          id: `chatgptConversations.gpts.migration.description.editingLocked`,
          defaultMessage: `Turn this GPT into a plugin using its instructions and knowledge files. It starts private. You can manage sharing afterward, within your workspace’s permissions. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.`,
          description: `Standalone confirmation description before GPT migration, shown to its current owner or while the caller’s ownership is still being confirmed in a workspace. Migration copies saved instructions and knowledge files into a private plugin, with sharing afterward subject to workspace permissions. Migration prevents further edits to the original GPT; future updates can be made to the plugin. Five complete sentences with no placeholders.`,
        })),
        (t[29] = e))
      : (e = t[29]),
      (H = e));
  }
  let ke;
  t[30] !== i ||
  t[31] !== R ||
  t[32] !== L ||
  t[33] !== p ||
  t[34] !== z ||
  t[35] !== V ||
  t[36] !== A ||
  t[37] !== Se ||
  t[38] !== C
    ? ((ke =
        C == null &&
        i?.status === `ready` &&
        !R &&
        ((z && !V) ||
          Se.length > 0 ||
          ((ct(p) || (!V && (i.apps?.unavailable.length ?? 0) > 0)) && A != null && !L))),
      (t[30] = i),
      (t[31] = R),
      (t[32] = L),
      (t[33] = p),
      (t[34] = z),
      (t[35] = V),
      (t[36] = A),
      (t[37] = Se),
      (t[38] = C),
      (t[39] = ke))
    : (ke = t[39]);
  let Ae = ke,
    W;
  if (Ce) {
    let e = x || D == null,
      r;
    t[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(d, {
          id: `chatgptConversations.gpts.migration.checkAppsAgain`,
          defaultMessage: `Check again`,
          description: `Retry loading the published GPT and its app availability before migration`,
        })),
        (t[40] = r))
      : (r = t[40]);
    let i;
    (t[41] !== D || t[42] !== e
      ? ((i = (0, $.jsx)(n, {
          className: `w-full`,
          color: `primary`,
          size: `promotionalAction`,
          type: `button`,
          disabled: e,
          onClick: D,
          children: r,
        })),
        (t[41] = D),
        (t[42] = e),
        (t[43] = i))
      : (i = t[43]),
      (W = i));
  } else if (Ae) {
    let e = x || L || A == null,
      r;
    t[44] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(d, {
          id: `chatgptConversations.gpts.migration.editGpt`,
          defaultMessage: `Edit GPT`,
          description: `Primary recovery button in the GPT migration modal for incompatible GPT settings, oversized knowledge files, or unavailable required apps. Opens the web GPT editor to fix the configuration and publish an update. Disabled when editing is unavailable.`,
        })),
        (t[44] = r))
      : (r = t[44]);
    let i;
    (t[45] !== A || t[46] !== e
      ? ((i = (0, $.jsx)(n, {
          className: `w-full`,
          color: `primary`,
          size: `promotionalAction`,
          type: `button`,
          disabled: e,
          onClick: A,
          children: r,
        })),
        (t[45] = A),
        (t[46] = e),
        (t[47] = i))
      : (i = t[47]),
      (W = i));
  } else if (V || R) {
    let e = x || M || !a || !Te,
      r;
    t[48] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(d, {
          id: `chatgptConversations.gpts.migration.recovery.retry`,
          defaultMessage: `Try again`,
          description: `Primary button in the GPT migration recovery dialog. Retries the failed operation: migration and any outstanding admin editor grant. Does not create a duplicate plugin.`,
        })),
        (t[48] = r))
      : (r = t[48]);
    let i;
    (t[49] === e
      ? (i = t[50])
      : ((i = (0, $.jsx)(n, {
          className: `w-full`,
          color: `primary`,
          size: `promotionalAction`,
          type: `submit`,
          disabled: e,
          children: r,
        })),
        (t[49] = e),
        (t[50] = i)),
      (W = i));
  } else if (C != null) W = te;
  else {
    let e = M || !a || !Ee || z || Se.length > 0,
      r;
    t[51] === x
      ? (r = t[52])
      : ((r = x
          ? (0, $.jsx)(d, {
              id: `chatgptConversations.gpts.migration.migratingLabel`,
              defaultMessage: `Migrating`,
              description: `Disabled primary button status while the GPT migration request is in progress. A spinner accompanies this short label.`,
            })
          : (0, $.jsx)(d, {
              id: `chatgptConversations.gpts.migration.confirm`,
              defaultMessage: `Migrate to plugin`,
              description: `Confirms creation of a private plugin from the latest published GPT`,
            })),
        (t[51] = x),
        (t[52] = r));
    let i;
    (t[53] !== x || t[54] !== e || t[55] !== r
      ? ((i = (0, $.jsx)(n, {
          className: `w-full`,
          color: `primary`,
          size: `promotionalAction`,
          disabled: e,
          loading: x,
          type: `submit`,
          children: r,
        })),
        (t[53] = x),
        (t[54] = e),
        (t[55] = r),
        (t[56] = i))
      : (i = t[56]),
      (W = i));
  }
  if (!Ce && !Ae && C == null) {
    let e = M ? Oe : void 0,
      n;
    (t[57] !== W || t[58] !== e
      ? ((n = (0, $.jsx)(le, { cloneCustomTrigger: !0, tooltipContent: e, children: W })),
        (t[57] = W),
        (t[58] = e),
        (t[59] = n))
      : (n = t[59]),
      (W = n));
  }
  let je = !x,
    Me;
  t[60] !== x || t[61] !== oe
    ? ((Me = (e) => {
        !e && !x && oe();
      }),
      (t[60] = x),
      (t[61] = oe),
      (t[62] = Me))
    : (Me = t[62]);
  let Ne;
  t[63] !== Ee ||
  t[64] !== Te ||
  t[65] !== a ||
  t[66] !== R ||
  t[67] !== z ||
  t[68] !== x ||
  t[69] !== V ||
  t[70] !== O ||
  t[71] !== Se ||
  t[72] !== C ||
  t[73] !== Ae ||
  t[74] !== M
    ? ((Ne = (e) => {
        (e.preventDefault(),
          !x &&
            !M &&
            a &&
            (Ee || (V && Te)) &&
            !Ae &&
            (!z || V) &&
            (Se.length === 0 || R) &&
            C == null &&
            O());
      }),
      (t[63] = Ee),
      (t[64] = Te),
      (t[65] = a),
      (t[66] = R),
      (t[67] = z),
      (t[68] = x),
      (t[69] = V),
      (t[70] = O),
      (t[71] = Se),
      (t[72] = C),
      (t[73] = Ae),
      (t[74] = M),
      (t[75] = Ne))
    : (Ne = t[75]);
  let Pe;
  t[76] === De
    ? (Pe = t[77])
    : ((Pe = (0, $.jsx)(T, {
        className: `text-center text-heading-lg leading-7 font-semibold wrap-anywhere select-none`,
        children: De,
      })),
      (t[76] = De),
      (t[77] = Pe));
  let Fe = H == null ? `sr-only` : `text-center text-sm leading-5 text-secondary select-none`,
    Ie = V ? `alert` : void 0,
    Le;
  t[78] === H ? (Le = t[79]) : ((Le = (0, $.jsx)(`div`, { children: H })), (t[78] = H), (t[79] = Le));
  let Re;
  t[80] !== Fe || t[81] !== Ie || t[82] !== Le
    ? ((Re = (0, $.jsx)(ae, { asChild: !0, className: Fe, "aria-live": `polite`, role: Ie, children: Le })),
      (t[80] = Fe),
      (t[81] = Ie),
      (t[82] = Le),
      (t[83] = Re))
    : (Re = t[83]);
  let G;
  t[84] !== Pe || t[85] !== Re
    ? ((G = (0, $.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [Pe, Re] })),
      (t[84] = Pe),
      (t[85] = Re),
      (t[86] = G))
    : (G = t[86]);
  let ze;
  t[87] !== i ||
  t[88] !== a ||
  t[89] !== B ||
  t[90] !== ye ||
  t[91] !== P ||
  t[92] !== ue ||
  t[93] !== L ||
  t[94] !== p ||
  t[95] !== m ||
  t[96] !== h ||
  t[97] !== _ ||
  t[98] !== de ||
  t[99] !== V ||
  t[100] !== I ||
  t[101] !== A ||
  t[102] !== C ||
  t[103] !== fe ||
  t[104] !== pe ||
  t[105] !== ie ||
  t[106] !== r
    ? ((ze =
        C == null && !V
          ? (0, $.jsx)(Gt, {
              sourceAudience: r ?? (ie ? `public` : void 0),
              appCheck: i,
              canMigrate: a,
              canPublishPlugin: P,
              canSharePlugin: ue,
              failure: p,
              fileCheck: m,
              files: h,
              hasCustomActions: _,
              isCheckingSharing: de,
              isWorkspaceAccount: I,
              sharingCheckFailed: fe,
              sharingChecked: pe,
              canEdit: A != null && !L,
              canOmitUnavailableApps: ye,
              canOmitOversizedFiles: B,
              editingDisabled: L,
            })
          : null),
      (t[87] = i),
      (t[88] = a),
      (t[89] = B),
      (t[90] = ye),
      (t[91] = P),
      (t[92] = ue),
      (t[93] = L),
      (t[94] = p),
      (t[95] = m),
      (t[96] = h),
      (t[97] = _),
      (t[98] = de),
      (t[99] = V),
      (t[100] = I),
      (t[101] = A),
      (t[102] = C),
      (t[103] = fe),
      (t[104] = pe),
      (t[105] = ie),
      (t[106] = r),
      (t[107] = ze))
    : (ze = t[107]);
  let K;
  t[108] !== B ||
  t[109] !== L ||
  t[110] !== m ||
  t[111] !== h ||
  t[112] !== z ||
  t[113] !== V ||
  t[114] !== A ||
  t[115] !== C
    ? ((K =
        C == null &&
        V &&
        m != null &&
        (z || m.unavailable.length > 0 || m.unchecked.length > 0 || m.profilePicture != null)
          ? (0, $.jsx)(`div`, {
              className: `w-full border-s border-default ps-3 text-sm text-default select-none`,
              children: (0, $.jsx)(St, {
                fileCheck: m,
                files: h,
                canOmitOversizedFiles: B,
                canEdit: A != null && !L,
              }),
            })
          : null),
      (t[108] = B),
      (t[109] = L),
      (t[110] = m),
      (t[111] = h),
      (t[112] = z),
      (t[113] = V),
      (t[114] = A),
      (t[115] = C),
      (t[116] = K))
    : (K = t[116]);
  let Be;
  t[117] === x
    ? (Be = t[118])
    : ((Be = x
        ? (0, $.jsx)(`p`, {
            className: `sr-only`,
            role: `status`,
            children: (0, $.jsx)(d, {
              id: `chatgptConversations.gpts.migration.pending`,
              defaultMessage: `Creating your plugin…`,
              description: `Progress status while a GPT is being migrated; the dialog cannot be dismissed during creation`,
            }),
          })
        : null),
      (t[117] = x),
      (t[118] = Be));
  let Ve;
  t[119] !== u || t[120] !== h || t[121] !== C
    ? ((Ve =
        u != null && u.length > 0
          ? (0, $.jsx)($e, { failedFiles: u, files: h, migrationSucceeded: C != null })
          : null),
      (t[119] = u),
      (t[120] = h),
      (t[121] = C),
      (t[122] = Ve))
    : (Ve = t[122]);
  let He;
  t[123] !== C || t[124] !== _e || t[125] !== f
    ? ((He =
        C != null && f != null && f.length > 0 ? (0, $.jsx)(ot, { count: f.length, filenames: _e }) : null),
      (t[123] = C),
      (t[124] = _e),
      (t[125] = f),
      (t[126] = He))
    : (He = t[126]);
  let Ue;
  t[127] !== Ee ||
  t[128] !== a ||
  t[129] !== R ||
  t[130] !== B ||
  t[131] !== be ||
  t[132] !== ye ||
  t[133] !== F ||
  t[134] !== x ||
  t[135] !== k ||
  t[136] !== M
    ? ((Ue =
        be &&
        (0, $.jsx)(le, {
          cloneCustomTrigger: !0,
          tooltipContent: M
            ? Oe
            : (0, $.jsxs)($.Fragment, {
                children: [
                  ye &&
                    (R || B || F) &&
                    (0, $.jsx)(d, {
                      id: `chatgptConversations.gpts.migration.omitAppsAndFilesTooltip`,
                      defaultMessage: `Create the plugin without the unavailable apps and failed knowledge files. Invalid app settings and conversation starters may also be left out.`,
                      description: `Tooltip for Migrate anyway when unavailable apps and failed knowledge files will be omitted, including previously approved file omissions for this saved GPT configuration. The backend can also omit invalid app settings and conversation starters.`,
                    }),
                  ye &&
                    !R &&
                    !B &&
                    !F &&
                    (0, $.jsx)(d, {
                      id: `chatgptConversations.gpts.migration.omitUnavailableAppsTooltip`,
                      defaultMessage: `Create the plugin without the unavailable apps. Invalid app settings and conversation starters may also be left out.`,
                      description: `Tooltip for the explicit Migrate anyway action when required apps are unavailable to the user. Only unavailable apps are omitted; available and admin-disabled apps remain. The backend can also omit invalid app settings and conversation starters.`,
                    }),
                  !ye &&
                    (0, $.jsx)(d, {
                      id: `chatgptConversations.gpts.migration.omitFailedFilesTooltip`,
                      defaultMessage: `Create the plugin without the failed knowledge files. Invalid app settings and conversation starters may also be left out.`,
                      description: `Tooltip explaining the explicit Migrate anyway recovery action after required GPT knowledge files failed. The failed knowledge files are omitted, including files the user agreed to omit in earlier attempts on the same saved GPT configuration. The backend may also omit malformed app selections and invalid conversation starters.`,
                    }),
                ],
              }),
          children: (0, $.jsx)(n, {
            color: `ghostSecondary`,
            size: `dialogAction`,
            disabled: x || M || !a || (!Ee && !ye),
            type: `button`,
            onClick: k,
            children: (0, $.jsx)(`span`, {
              className: `underline decoration-from-font underline-offset-2`,
              children: (0, $.jsx)(d, {
                id: `chatgptConversations.gpts.migration.omitFailedFiles`,
                defaultMessage: `Migrate anyway`,
                description: `Optional migration recovery action. Creates the plugin while explicitly omitting unavailable apps or failed knowledge files, as explained by its tooltip.`,
              }),
            }),
          }),
        })),
      (t[127] = Ee),
      (t[128] = a),
      (t[129] = R),
      (t[130] = B),
      (t[131] = be),
      (t[132] = ye),
      (t[133] = F),
      (t[134] = x),
      (t[135] = k),
      (t[136] = M),
      (t[137] = Ue))
    : (Ue = t[137]);
  let We;
  t[138] !== be || t[139] !== x || t[140] !== V || t[141] !== oe || t[142] !== C || t[143] !== Ae
    ? ((We =
        !Ae &&
        !V &&
        !be &&
        (0, $.jsx)(n, {
          color: `ghostSecondary`,
          size: `dialogAction`,
          disabled: x,
          type: `button`,
          onClick: oe,
          children: (0, $.jsxs)(`span`, {
            className: `underline decoration-from-font underline-offset-2`,
            children: [
              C != null &&
                (0, $.jsx)(d, {
                  id: `chatgptConversations.gpts.migration.done`,
                  defaultMessage: `Done`,
                  description: `Closes the successful GPT migration dialog without opening the plugin`,
                }),
              C == null &&
                (0, $.jsx)(d, {
                  id: `chatgptConversations.gpts.migration.later`,
                  defaultMessage: `Migrate later`,
                  description: `Dismisses GPT migration without creating a plugin`,
                }),
            ],
          }),
        })),
      (t[138] = be),
      (t[139] = x),
      (t[140] = V),
      (t[141] = oe),
      (t[142] = C),
      (t[143] = Ae),
      (t[144] = We))
    : (We = t[144]);
  let Ge;
  t[145] !== W || t[146] !== Ue || t[147] !== We
    ? ((Ge = (0, $.jsxs)(ce, {
        className: `flex-col text-center`,
        expandSingleButton: !1,
        children: [W, Ue, We],
      })),
      (t[145] = W),
      (t[146] = Ue),
      (t[147] = We),
      (t[148] = Ge))
    : (Ge = t[148]);
  let q;
  t[149] !== G ||
  t[150] !== ze ||
  t[151] !== K ||
  t[152] !== Be ||
  t[153] !== Ve ||
  t[154] !== He ||
  t[155] !== Ge
    ? ((q = (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-8 p-6 pt-14 text-start sm:p-10`,
        children: [G, ze, K, Be, Ve, He, Ge],
      })),
      (t[149] = G),
      (t[150] = ze),
      (t[151] = K),
      (t[152] = Be),
      (t[153] = Ve),
      (t[154] = He),
      (t[155] = Ge),
      (t[156] = q))
    : (q = t[156]);
  let Ke;
  t[157] !== Ne || t[158] !== q
    ? ((Ke = (0, $.jsx)(se, { as: `form`, size: `viewport`, variant: `chatgpt`, onSubmit: Ne, children: q })),
      (t[157] = Ne),
      (t[158] = q),
      (t[159] = Ke))
    : (Ke = t[159]);
  let qe;
  return (
    t[160] !== x || t[161] !== S || t[162] !== w || t[163] !== je || t[164] !== Me || t[165] !== Ke
      ? ((qe = (0, $.jsx)(j, {
          open: !0,
          modal: S,
          portalContainer: w,
          showDialogClose: je,
          shouldIgnoreClickOutside: x,
          size: `beacon`,
          closeButtonSize: `large`,
          variant: `promotional`,
          onOpenChange: Me,
          children: Ke,
        })),
        (t[160] = x),
        (t[161] = S),
        (t[162] = w),
        (t[163] = je),
        (t[164] = Me),
        (t[165] = Ke),
        (t[166] = qe))
      : (qe = t[166]),
    qe
  );
}
function on(e) {
  return e.code === `knowledge_file_too_large` && e.resource.type === `knowledge_file`;
}
function sn(e) {
  return [
    ...new Set(
      e.tools.flatMap((e) => {
        if (e.type !== `connector`) return [];
        let t = pn.safeParse(e.settings);
        return t.success ? (t.data.action_ids ?? []).filter((e) => typeof e == `string` && mn.test(e)) : [];
      }),
    ),
  ];
}
async function cn(e, t, n) {
  let r = sn(e);
  if (r.length === 0) return { unavailable: [], disabledByAdmin: [] };
  let i = (
      await Promise.all(
        (0, un.default)(r, 100).map((e) =>
          H.safePost(`/aip/connectors/batch`, {
            surface: `plugin_management`,
            parameters: { query: { apply_eligibility_filter: !1 } },
            requestBody: { connector_ids: e, include_actions: !1 },
            additionalHeaders: { "ChatGPT-Account-ID": t, "OAI-Product-Sku": `CONNECTOR_SETTING` },
            expectedErrorStatuses: [401, 403, 404],
            signal: n,
          }),
        ),
      )
    ).flatMap((e) => e.connectors),
    a = new Map(i.map((e) => [we(e.id), e]));
  return {
    unavailable: r.filter((e) => !a.has(we(e))),
    disabledByAdmin: i.filter((e) => e.status === `DISABLED_BY_ADMIN`),
  };
}
var ln, un, dn, fn, $, pn, mn;
function hn() {
  return (hn = e(() => {
    ((ln = I()),
      C(),
      (un = t(Ie(), 1)),
      (dn = t(Ae(), 1)),
      g(),
      (fn = L()),
      k(),
      ne(),
      c(),
      Ce(),
      Le(),
      Me(),
      Ne(),
      Ve(),
      ve(),
      ue(),
      F(),
      ie(),
      B(),
      A(),
      re(),
      G(),
      z(),
      Se(),
      he(),
      fe(),
      W(),
      U(),
      je(),
      at(),
      q(),
      rt(),
      xt(),
      _t(),
      jt(),
      It(),
      Qe(),
      Ke(),
      Yt(),
      K(),
      nt(),
      it(),
      ($ = pe()),
      (pn = P({ action_ids: N(_()).nullish().catch(null) })),
      (mn = /^(?:asdk_app|connector|templated_apps)_[A-Za-z0-9][A-Za-z0-9_-]*$/));
  }))();
}
hn();
export { Xt as GptPluginMigrationDialog };
//# sourceMappingURL=dialog-fc70cc99352a.js.map
