import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $Rt as n,
  $St as r,
  $st as i,
  BH as a,
  FBt as o,
  GOt as s,
  HFt as c,
  HH as l,
  HO as u,
  IO as d,
  IW as f,
  JO as p,
  KO as m,
  LNt as h,
  LO as ee,
  MNt as te,
  Mst as g,
  NNt as _,
  NSt as ne,
  ORt as v,
  Ost as y,
  PBt as b,
  Pit as re,
  Qst as ie,
  SLt as x,
  TY as ae,
  USt as oe,
  VRt as S,
  Vrt as C,
  WO as w,
  XOt as T,
  Y3 as se,
  YOt as E,
  Z3 as D,
  ZSt as ce,
  ezt as O,
  hRt as k,
  iCt as A,
  jit as le,
  jst as ue,
  kLt as j,
  kRt as M,
  nB as N,
  nCt as P,
  okt as de,
  qO as fe,
  qrt as pe,
  rB as F,
  tkt as I,
  vD as L,
  yD as me,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as he,
  Bhr as ge,
  Cjr as _e,
  Ejr as ve,
  GMn as R,
  IIr as z,
  LIr as B,
  Mmr as ye,
  Nmr as be,
  SBr as xe,
  SRn as Se,
  WMn as Ce,
  Whr as we,
  XIr as V,
  YIr as Te,
  ZIr as Ee,
  bIr as De,
  bRn as H,
  efr as Oe,
  iRr as ke,
  imr as Ae,
  jcn as je,
  oOt as U,
  rmr as Me,
  sOt as Ne,
  tyr as Pe,
  wLr as W,
  wcn as Fe,
  xBr as Ie,
  xIr as Le,
  xjr as G,
  zRr as Re,
} from "./app-initial-ad16eaadf81f.js";
import { Ng as K, jg as ze } from "./app-primary-3e00728c2a4c.js";
import { a as Be, i as Ve, o as He, r as Ue, t as We } from "./workspace-plugin-permissions-4ff2558a0323.js";
import {
  c as Ge,
  l as q,
  n as Ke,
  o as qe,
  s as Je,
  t as Ye,
} from "./permission-explanation-eb8b87e3721b.js";
import { t as Xe } from "./gpt-management-url-e06e14b9dc20.js";
import { n as Ze, r as Qe } from "./migrated-plugin-bd1222c52d99.js";
import {
  a as $e,
  c as et,
  i as tt,
  n as nt,
  o as rt,
  r as it,
  s as at,
  t as ot,
} from "./skipped-files-e1019f2b225e.js";
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
  if (!(e instanceof le)) return { kind: `request` };
  try {
    let t = M({ detail: O() }).parse(JSON.parse(e.message)),
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
      re(),
      (dt = n([
        S()
          .min(1)
          .transform((e) => ({ message: e, suggestion: void 0 })),
        M({ message: S().min(1), suggestion: S().optional() }),
      ])),
      (ft = n([
        x([
          `gpt_plugin_migration_source_changed`,
          `gpt_plugin_migration_owner_changed`,
          `gpt_plugin_migration_editor_access_failed`,
        ]),
        M({ code: k(`gpt_plugin_migration_editor_access_failed`) }).transform((e) => e.code),
        M({
          type: k(`apps_sdk_error`),
          error_code: x([`gpt_plugin_migration_in_progress`, `gpt_plugin_migration_conflict`]),
        }).transform((e) => e.error_code),
      ])),
      (pt = M({
        code: S(),
        resource: M({
          type: x([`gpt`, `action`, `app`, `knowledge_file`, `knowledge_files`, `profile_picture`, `plugin`]),
          id: S().nullish(),
          name: S().nullish(),
          url: S().nullish(),
          tool_id: S().nullish(),
        }),
        field: S().nullish(),
        message: S(),
        suggestion: S(),
        actual: v().nullish(),
        limit: v().nullish(),
      })),
      (mt = M({
        type: x([`profile_picture`, `knowledge_file`]),
        file_id: S().nullish(),
        code: x([`download_failed`, `invalid_file`, `timeout`]),
        message: S(),
      })),
      (ht = M({ code: k(`gpt_plugin_incompatible`), issues: j(pt), failed_files: j(mt).nullish() })),
      (gt = M({ code: k(`gpt_plugin_file_copy_failed`), issues: j(pt), failed_files: j(mt) })));
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
      title: (0, J.jsx)(I, { ...yt.failed }),
      description: (0, J.jsxs)(`div`, {
        className: `flex flex-col gap-3 text-start wrap-anywhere`,
        children: [
          n && !r ? (0, J.jsx)(I, { ...bt.readOnly }) : null,
          i.map((r, i) => {
            let o = e.kind === `validation` || e.kind === `file_copy` ? e.issues[i]?.resource : void 0,
              s = o?.type === `knowledge_file` ? o.id : a?.[i]?.file_id,
              c = s == null ? void 0 : t?.find((e) => (e.file_id || e.id) === s),
              l = o?.name || (c?.file_response_type === `full_file_response` ? c.name : void 0) || s;
            return (0, J.jsx)(
              L,
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
        title: (0, J.jsx)(I, { ...yt.bundleSize }),
        description: n
          ? (0, J.jsx)(I, { ...bt.readOnly })
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
    title: (0, J.jsx)(I, { ...yt[a === `editorAccess` ? `failed` : a], values: s }),
    description: (0, J.jsx)(I, { ...bt[a], values: s }),
  };
}
var J, yt, bt;
function xt() {
  return (xt = e(() => {
    (T(),
      me(),
      _t(),
      (J = h()),
      (yt = E({
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
      (bt = E({
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
    d,
    f;
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
      p = `unavailable`;
    (i ? (p = `omit`) : a && (p = `edit`),
      (o = `flex flex-col gap-3 wrap-anywhere`),
      (c = `alert`),
      (l = n.oversized?.length
        ? (0, Y.jsx)(`p`, {
            children: (0, Y.jsx)(I, {
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
                recovery: p,
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
                      ? (0, Y.jsx)(I, {
                          id: `chatgptConversations.gpts.migration.readiness.profilePictureTooLargeNamedHelp`,
                          defaultMessage: `<strong>{filename}</strong> exceeds the 5 MB limit and won’t migrate. You can add a new profile picture to the plugin after migration.`,
                          description: `Advisory warning before GPT migration when a profile picture exceeds the migration size limit, displayed as 5 MB. filename is its name or identifier. Migration can continue and the user can add a replacement picture to the plugin. Two complete sentences.`,
                          values: { filename: n.profilePicture.name || n.profilePicture.fileId, strong: Dt },
                        })
                      : null,
                    n.profilePicture.status === `unavailable`
                      ? (0, Y.jsx)(I, {
                          id: `chatgptConversations.gpts.migration.readiness.profilePictureUnavailableNamedHelp`,
                          defaultMessage: `<strong>{filename}</strong> couldn’t be accessed. You can still try migrating.`,
                          description: `Advisory warning before GPT migration when profile picture metadata is inaccessible. filename is its name or identifier. The lookup cannot distinguish deletion from lack of access; migration remains allowed. Two complete sentences.`,
                          values: { filename: n.profilePicture.name || n.profilePicture.fileId, strong: Et },
                        })
                      : null,
                    n.profilePicture.status === `unchecked`
                      ? (0, Y.jsx)(I, {
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
      (d = n.unavailable.length
        ? (0, Y.jsx)(`p`, {
            children: (0, Y.jsx)(I, {
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
      (f = n.unchecked.length
        ? (0, Y.jsx)(`p`, {
            children: (0, Y.jsx)(I, {
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
      (t[12] = d),
      (t[13] = f));
  } else ((o = t[8]), (c = t[9]), (l = t[10]), (u = t[11]), (d = t[12]), (f = t[13]));
  let p;
  return (
    t[16] !== o || t[17] !== c || t[18] !== l || t[19] !== u || t[20] !== d || t[21] !== f
      ? ((p = (0, Y.jsxs)(`div`, { className: o, role: c, children: [l, u, d, f] })),
        (t[16] = o),
        (t[17] = c),
        (t[18] = l),
        (t[19] = u),
        (t[20] = d),
        (t[21] = f),
        (t[22] = p))
      : (p = t[22]),
    p
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
    ((At = b()), T(), (Y = h()));
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
          let n = await ke.safeGet(`/files/{file_id}`, {
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
          let t = e instanceof le && e.status === 404 ? `unavailable` : `unchecked`;
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
    ((Nt = t(we(), 1)), (Pt = t(Oe(), 1)), c(), re(), Pe(), (Ft = v().int().positive().catch(104857600)));
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
            ? (0, X.jsx)(I, {
                id: `chatgptConversations.gpts.migration.unavailableAppsOmitOrEdit`,
                defaultMessage: `These apps aren’t available to you. Edit the GPT to remove or replace them, or migrate without them.`,
                description: `Recovery guidance above a list of unavailable saved app IDs. The user can edit the source GPT or explicitly choose Migrate anyway to omit these apps. Missing metadata means the apps are unavailable to this user, not necessarily deleted.`,
              })
            : (0, X.jsx)(I, {
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
      ? ((e = (0, X.jsx)(I, {
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
      ? ((e = (0, X.jsx)(I, {
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
      children: (0, X.jsx)(I, {
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
    ((Vt = b()), T(), (X = h()));
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
      isCheckingSharing: d,
      isWorkspaceAccount: f,
      sharingCheckFailed: p,
      sharingChecked: m,
      canEdit: h,
      canOmitUnavailableApps: ee,
      canOmitOversizedFiles: te,
      editingDisabled: g,
    } = e,
    _ = i?.status === `loading`,
    ne = a && i?.status === `ready`,
    v,
    y,
    b,
    re,
    ie,
    x,
    ae,
    oe,
    S,
    C;
  if (
    t[0] !== i ||
    t[1] !== h ||
    t[2] !== a ||
    t[3] !== te ||
    t[4] !== ee ||
    t[5] !== o ||
    t[6] !== s ||
    t[7] !== g ||
    t[8] !== c ||
    t[9] !== l ||
    t[10] !== r ||
    t[11] !== u ||
    t[12] !== d ||
    t[13] !== f ||
    t[14] !== ne ||
    t[15] !== p ||
    t[16] !== m ||
    t[17] !== n
  ) {
    ((oe = c != null && c.kind !== `request` ? c.issues.filter(Kt) : []),
      (ie = Q.noIssues),
      !ne || c?.kind === `request`
        ? (ie = Q.checkFailed)
        : c != null || l?.oversized?.length || l?.unavailable.length || l?.profilePicture != null
          ? (ie = Q.needsReview)
          : l?.unchecked.length && (ie = Q.fileCheckFailed),
      (ae =
        (l?.oversized?.length ?? 0) > 0 ||
        (l?.unavailable.length ?? 0) > 0 ||
        (l?.unchecked.length ?? 0) > 0 ||
        l?.profilePicture != null));
    let e;
    if (
      (t[28] === ie ? (e = t[29]) : ((e = (0, Z.jsx)(I, { ...ie })), (t[28] = ie), (t[29] = e)),
      (x = e),
      oe.length > 0 || l?.oversized?.length)
    )
      x = (0, Z.jsx)(I, {
        id: `chatgptConversations.gpts.migration.readiness.oversizedCount`,
        defaultMessage: `{count, plural, one {# file is too large} other {# files are too large}}`,
        description: `Number of oversized knowledge files blocking GPT migration`,
        values: { count: oe.length || l?.oversized?.length },
      });
    else if (l?.unavailable.length) {
      let e;
      (t[30] === l.unavailable.length
        ? (e = t[31])
        : ((e = (0, Z.jsx)(I, {
            id: `chatgptConversations.gpts.migration.readiness.unavailableFileCount`,
            defaultMessage: `{count, plural, one {# file unavailable} other {# files unavailable}}`,
            description: `Advisory count of knowledge files that could not be accessed before GPT migration; not found may also mean the caller no longer has access`,
            values: { count: l.unavailable.length },
          })),
          (t[30] = l.unavailable.length),
          (t[31] = e)),
        (x = e));
    } else if (l?.profilePicture?.status === `tooLarge`) {
      let e;
      (t[32] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(I, {
            id: `chatgptConversations.gpts.migration.readiness.profilePictureTooLarge`,
            defaultMessage: `Profile picture too large`,
            description: `Advisory status before GPT migration when the profile picture exceeds the 5 MiB migration limit`,
          })),
          (t[32] = e))
        : (e = t[32]),
        (x = e));
    } else if (l?.profilePicture?.status === `unavailable`) {
      let e;
      (t[33] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(I, {
            id: `chatgptConversations.gpts.migration.readiness.profilePictureUnavailable`,
            defaultMessage: `Profile picture unavailable`,
            description: `Advisory status before GPT migration when profile picture metadata could not be accessed; the file may be missing or access may be restricted`,
          })),
          (t[33] = e))
        : (e = t[33]),
        (x = e));
    } else if (l?.profilePicture?.status === `unchecked`) {
      let e;
      (t[34] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(I, {
            id: `chatgptConversations.gpts.migration.readiness.profilePictureUnchecked`,
            defaultMessage: `Couldn’t check profile picture`,
            description: `Advisory status before GPT migration when the profile picture could not be checked`,
          })),
          (t[34] = e))
        : (e = t[34]),
        (x = e));
    }
    ((y = Q.noIssues),
      !ne || i?.apps == null
        ? (y = Q.checkFailed)
        : i.apps.unavailable.length > 0
          ? (y = Q.appsUnavailable)
          : i.apps.disabledByAdmin.length > 0
            ? (y = Q.appsDisabled)
            : u && (y = Q.unsupportedActions));
    let _ = i?.status === `ready` ? i.apps?.unavailable : void 0,
      w = i?.status === `ready` ? i.apps?.disabledByAdmin : void 0,
      T = (_?.length ?? 0) + (w?.length ?? 0),
      se;
    if (
      (t[35] === y ? (se = t[36]) : ((se = (0, Z.jsx)(I, { ...y })), (t[35] = y), (t[36] = se)),
      (b = se),
      _?.length && w?.length)
    ) {
      let e;
      (t[37] === T
        ? (e = t[38])
        : ((e = (0, Z.jsx)(I, {
            id: `chatgptConversations.gpts.migration.readiness.appIssueCount`,
            defaultMessage: `{count, plural, one {# app needs attention} other {# apps need attention}}`,
            description: `Short Apps and actions checklist status in the GPT migration modal when both unavailable and admin-disabled apps are present. Count is the total number of affected apps; unavailable apps prevent migration.`,
            values: { count: T },
          })),
          (t[37] = T),
          (t[38] = e)),
        (b = e));
    } else if (_ != null && _.length > 0) {
      let e;
      (t[39] === _.length
        ? (e = t[40])
        : ((e = (0, Z.jsx)(I, {
            id: `chatgptConversations.gpts.migration.readiness.unavailableAppCount`,
            defaultMessage: `{count, plural, one {# app is unavailable} other {# apps are unavailable}}`,
            description: `Short warning status in the Apps row of the migration modal. The positive integer count is the number of missing required apps, which block migration until the published GPT is fixed.`,
            values: { count: _.length },
          })),
          (t[39] = _.length),
          (t[40] = e)),
        (b = e));
    } else if (w != null && w.length > 0) {
      let e;
      (t[41] === w.length
        ? (e = t[42])
        : ((e = (0, Z.jsx)(I, {
            id: `chatgptConversations.gpts.migration.readiness.disabledAppCount`,
            defaultMessage: `{count, plural, one {# app is disabled} other {# apps are disabled}}`,
            description: `Short Apps and actions checklist status before GPT migration. Count is the positive number of apps disabled by the workspace admin. Migration remains allowed, but the plugin stays disabled until these apps are enabled.`,
            values: { count: w.length },
          })),
          (t[41] = w.length),
          (t[42] = e)),
        (b = e));
    }
    let E;
    (t[43] !== a ||
    t[44] !== o ||
    t[45] !== s ||
    t[46] !== d ||
    t[47] !== f ||
    t[48] !== p ||
    t[49] !== m ||
    t[50] !== n
      ? ((E = Wt({
          sourceAudience: n,
          canMigrate: a,
          isWorkspaceAccount: f,
          canSharePlugin: s,
          canPublishPlugin: o,
          isCheckingSharing: d,
          sharingCheckFailed: p,
          sharingChecked: m,
        })),
        (t[43] = a),
        (t[44] = o),
        (t[45] = s),
        (t[46] = d),
        (t[47] = f),
        (t[48] = p),
        (t[49] = m),
        (t[50] = n),
        (t[51] = E))
      : (E = t[51]),
      (S = E));
    let D;
    if (
      (t[52] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((D = [
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
          (t[52] = D))
        : (D = t[52]),
      (C = D.includes(S)),
      i?.status === `ready` && i.apps == null)
    ) {
      let e;
      (t[53] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(I, {
            id: `chatgptConversations.gpts.migration.readiness.appLookupFailed`,
            defaultMessage: `We couldn’t confirm whether this GPT’s required apps are available and enabled. Check again before migrating.`,
            description: `Blocking explanation for a failed app-availability lookup; the user must retry before migration`,
          })),
          (t[53] = e))
        : (e = t[53]),
        (v = e));
    } else if (T > 0 || u) {
      let e = T > 0 ? `alert` : void 0,
        n;
      t[54] !== h || t[55] !== ee || t[56] !== g || t[57] !== _
        ? ((n =
            _ != null && _.length > 0
              ? (0, Z.jsx)(Lt, { unavailable: _, canEdit: h, canOmit: ee, editingDisabled: g })
              : null),
          (t[54] = h),
          (t[55] = ee),
          (t[56] = g),
          (t[57] = _),
          (t[58] = n))
        : (n = t[58]);
      let r;
      t[59] !== w || t[60] !== _
        ? ((r = w?.map((e) =>
            (0, Z.jsx)(
              `p`,
              {
                children:
                  _ != null && _.length > 0
                    ? (0, Z.jsx)(I, {
                        id: `chatgptConversations.gpts.migration.readiness.disabledAppCombinedHelp`,
                        defaultMessage: `{appName} is disabled. After migration, the plugin will stay disabled until your admin enables {appName}.`,
                        description: `Warning inside the Apps and actions checklist row when an admin-disabled app and other unavailable apps are both present before GPT migration. appName is the disabled app's display name or ID, which may be long. Unavailable apps must first be fixed; this warning explains the separate admin restriction after migration. Two sentences that may wrap.`,
                        values: { appName: e.name || e.id },
                      })
                    : (0, Z.jsx)(I, {
                        id: `chatgptConversations.gpts.migration.readiness.disabledAppHelp`,
                        defaultMessage: `{appName} is disabled by your admin. You can migrate, but the plugin will stay disabled until this app is enabled.`,
                        description: `Warning inside the Apps and actions checklist row before GPT migration. appName is the required app's display name, or its ID when unnamed, and may be long. Migration is allowed but the resulting plugin is disabled until the admin enables this app. Two sentences that may wrap.`,
                        values: { appName: e.name || e.id },
                      }),
              },
              e.id,
            ),
          )),
          (t[59] = w),
          (t[60] = _),
          (t[61] = r))
        : (r = t[61]);
      let i;
      t[62] === u
        ? (i = t[63])
        : ((i = u
            ? (0, Z.jsx)(`p`, {
                children: (0, Z.jsx)(I, {
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
        (v = a));
    } else v = void 0;
    if (oe.length > 0) {
      let e;
      t[69] !== g || t[70] !== r
        ? ((e = (e, t) => {
            let n = r?.find((t) => t.file_id === e.resource.id),
              i = e.resource.name || (n?.file_response_type === `full_file_response` ? n.name : void 0);
            return (0, Z.jsx)(
              `p`,
              {
                children:
                  !g && i
                    ? (0, Z.jsx)(I, {
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
          (t[69] = g),
          (t[70] = r),
          (t[71] = e))
        : (e = t[71]);
      let n;
      (t[72] === g
        ? (n = t[73])
        : ((n = g
            ? (0, Z.jsx)(`p`, {
                children: (0, Z.jsx)(I, {
                  id: `chatgptConversations.gpts.migration.readiness.editingUnavailable`,
                  defaultMessage: `This GPT can’t be migrated because of the issues above. GPT editing and publishing are no longer available.`,
                  description: `Explains why migration is blocked by oversized files when retirement has disabled GPT editing`,
                }),
              })
            : null),
          (t[72] = g),
          (t[73] = n)),
        (re = (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-3 wrap-anywhere`,
          role: `alert`,
          children: [oe.map(e), n],
        })));
    } else if (ae && l != null) {
      let e;
      (t[74] !== h || t[75] !== te || t[76] !== l || t[77] !== r
        ? ((e = (0, Z.jsx)(St, { fileCheck: l, files: r, canOmitOversizedFiles: te, canEdit: h })),
          (t[74] = h),
          (t[75] = te),
          (t[76] = l),
          (t[77] = r),
          (t[78] = e))
        : (e = t[78]),
        (re = e));
    }
    ((t[0] = i),
      (t[1] = h),
      (t[2] = a),
      (t[3] = te),
      (t[4] = ee),
      (t[5] = o),
      (t[6] = s),
      (t[7] = g),
      (t[8] = c),
      (t[9] = l),
      (t[10] = r),
      (t[11] = u),
      (t[12] = d),
      (t[13] = f),
      (t[14] = ne),
      (t[15] = p),
      (t[16] = m),
      (t[17] = n),
      (t[18] = v),
      (t[19] = y),
      (t[20] = b),
      (t[21] = re),
      (t[22] = ie),
      (t[23] = x),
      (t[24] = ae),
      (t[25] = oe),
      (t[26] = S),
      (t[27] = C));
  } else
    ((v = t[18]),
      (y = t[19]),
      (b = t[20]),
      (re = t[21]),
      (ie = t[22]),
      (x = t[23]),
      (ae = t[24]),
      (oe = t[25]),
      (S = t[26]),
      (C = t[27]));
  let w;
  t[79] !== _ || t[80] !== d
    ? ((w =
        _ || d
          ? (0, Z.jsx)(`span`, {
              className: `sr-only`,
              role: `status`,
              children: (0, Z.jsx)(I, {
                id: `chatgptConversations.gpts.migration.checkingReadiness`,
                defaultMessage: `Checking migration readiness…`,
                description: `Accessible progress status while checking a GPT’s saved configuration, knowledge files, required apps, and plugin sharing permissions before migration`,
              }),
            })
          : null),
      (t[79] = _),
      (t[80] = d),
      (t[81] = w))
    : (w = t[81]);
  let T = ie === Q.noIssues,
    se = c?.kind === `validation` || oe.length > 0 || ae,
    E;
  t[82] !== re || t[83] !== x || t[84] !== _ || t[85] !== T || t[86] !== se
    ? ((E = (0, Z.jsx)(qt, {
        label: Q.instructionsAndFiles,
        loading: _,
        positive: T,
        status: x,
        warning: se,
        details: re,
      })),
      (t[82] = re),
      (t[83] = x),
      (t[84] = _),
      (t[85] = T),
      (t[86] = se),
      (t[87] = E))
    : (E = t[87]);
  let D = y === Q.noIssues,
    ce = (i?.status === `ready` && i.apps == null) || y === Q.appsUnavailable || y === Q.appsDisabled || u,
    O;
  t[88] !== v || t[89] !== b || t[90] !== _ || t[91] !== D || t[92] !== ce
    ? ((O = (0, Z.jsx)(qt, { label: Q.apps, loading: _, positive: D, status: b, warning: ce, details: v })),
      (t[88] = v),
      (t[89] = b),
      (t[90] = _),
      (t[91] = D),
      (t[92] = ce),
      (t[93] = O))
    : (O = t[93]);
  let k = _ || d,
    A;
  t[94] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = [`personal`, `private`, `enabled`, `publish`]), (t[94] = A))
    : (A = t[94]);
  let le = A.includes(S),
    ue = C || S === `error`,
    j;
  t[95] === S
    ? (j = t[96])
    : ((j = (0, Z.jsx)(I, {
        id: `chatgptConversations.gpts.migration.readiness.sharing.audience_status`,
        defaultMessage: `{status, select, unavailable {Migration unavailable} error {Couldn’t check sharing} personal {Private plugin} private {No issues found} enabled {Sharing enabled} publish {Publishing enabled} disabled {Sharing disabled} sharedUnavailable {Sharing unavailable} publishUnavailable {Publishing unavailable} publishPrivate {Publishing unavailable} publicBoth {Public sharing unavailable} publicShare {Public sharing unavailable} publicPublish {Public sharing unavailable} publicPrivate {Public sharing unavailable} publicDisabled {Sharing disabled} other {Workspace permissions apply}}`,
        description: `Short status beside Access and sharing in the GPT migration preview, read by the creator or migrating admin. The status selector is unavailable for blocked migration, error for a failed permission check, personal for personal-account private plugins, private when a private GPT stays private under workspace restrictions, enabled or publish for allowed plugin sharing or directory publishing, disabled for confirmed restrictions with unknown source audience, sharedUnavailable, publishUnavailable, or publishPrivate when the GPT’s existing workspace audience cannot transfer, publicBoth/publicShare/publicPublish/publicPrivate when public access cannot transfer, publicDisabled when a public GPT must become private under workspace restrictions, and other while permissions are unconfirmed. Keep each label short; allowed sharing is never applied automatically.`,
        values: { status: S },
      })),
      (t[95] = S),
      (t[96] = j));
  let M;
  t[97] !== S || t[98] !== C
    ? ((M = C
        ? (0, Z.jsx)(I, {
            id: `chatgptConversations.gpts.migration.readiness.sharing.audience_help`,
            defaultMessage: `{status, select, sharedUnavailable {This GPT is shared in your workspace, but plugin sharing is disabled. The plugin will start private and can’t be shared with the same people.} publishUnavailable {This GPT is published to your workspace, but publishing plugins to the workspace directory is disabled. You can share the plugin with people or groups instead.} publishPrivate {This GPT is published to your workspace, but plugin sharing and publishing are disabled. The plugin will stay private.} publicBoth {Plugins can’t be shared publicly. Share within your workspace, publish to its plugin directory, or keep it private.} publicShare {Plugins can’t be shared publicly. Share with people or groups in your workspace, or keep it private.} publicPublish {Plugins can’t be shared publicly. Publish to your workspace’s plugin directory or keep it private.} publicDisabled {Your workspace doesn’t allow plugin sharing. The plugin will stay private.} publicPrivate {Plugins can’t be shared publicly. The plugin will stay private.} other {This plugin will remain private. Ask an admin to enable sharing.}}`,
            description: `Nonblocking explanation inside Access and sharing in the GPT migration preview, read by the GPT creator or migrating admin. The status selector combines the published GPT audience and confirmed plugin permissions: sharedUnavailable means its workspace recipients cannot retain access; publishUnavailable means directory publishing is disabled but direct sharing is allowed; publishPrivate means neither is allowed for a workspace-published GPT; publicBoth, publicShare, and publicPublish list the allowed workspace alternatives to public sharing; publicDisabled means the workspace allows neither; publicPrivate is a personal-account public GPT; other is a confirmed restriction with unknown source audience. Each branch is complete prose that may wrap. Migration creates a private plugin and does not share it automatically.`,
            values: { status: S },
          })
        : void 0),
      (t[97] = S),
      (t[98] = C),
      (t[99] = M))
    : (M = t[99]);
  let N;
  t[100] !== le || t[101] !== ue || t[102] !== j || t[103] !== M || t[104] !== k
    ? ((N = (0, Z.jsx)(qt, {
        label: Q.accessAndSharing,
        loading: k,
        positive: le,
        warning: ue,
        status: j,
        details: M,
      })),
      (t[100] = le),
      (t[101] = ue),
      (t[102] = j),
      (t[103] = M),
      (t[104] = k),
      (t[105] = N))
    : (N = t[105]);
  let P;
  t[106] !== N || t[107] !== E || t[108] !== O
    ? ((P = (0, Z.jsxs)(`dl`, {
        className: `flex flex-col divide-y divide-border-subtle text-sm`,
        children: [E, O, N],
      })),
      (t[106] = N),
      (t[107] = E),
      (t[108] = O),
      (t[109] = P))
    : (P = t[109]);
  let de;
  return (
    t[110] !== w || t[111] !== P
      ? ((de = (0, Z.jsxs)(`div`, {
          className: `rounded-2xl bg-surface-secondary px-5 select-none`,
          children: [w, P],
        })),
        (t[110] = w),
        (t[111] = P),
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
    u = s !== void 0 && s,
    d;
  t[0] === n
    ? (d = t[1])
    : ((d = (0, Z.jsx)(`dt`, {
        className: `min-w-0 basis-35 text-secondary`,
        children: (0, Z.jsx)(I, { ...n }),
      })),
      (t[0] = n),
      (t[1] = d));
  let p = u ? `text-warning` : `text-default`,
    m;
  t[2] === p
    ? (m = t[3])
    : ((m = te(`flex min-w-0 grow basis-32 items-center justify-end gap-2 text-end`, p)),
      (t[2] = p),
      (t[3] = m));
  let h;
  t[4] !== r || t[5] !== i || t[6] !== o || t[7] !== u
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
              i && (0, Z.jsx)(a, { className: `text-success` }),
              !i && u && (0, Z.jsx)(l, { className: `text-warning` }),
              !i && !u && (0, Z.jsx)(f, { className: `text-secondary` }),
            ],
          })),
      (t[4] = r),
      (t[5] = i),
      (t[6] = o),
      (t[7] = u),
      (t[8] = h))
    : (h = t[8]);
  let ee;
  t[9] !== m || t[10] !== h
    ? ((ee = (0, Z.jsx)(`dd`, { className: m, children: h })), (t[9] = m), (t[10] = h), (t[11] = ee))
    : (ee = t[11]);
  let g;
  t[12] !== c || t[13] !== r
    ? ((g =
        !r && c != null
          ? (0, Z.jsx)(`dd`, { className: `w-full border-s border-default ps-3 text-default`, children: c })
          : null),
      (t[12] = c),
      (t[13] = r),
      (t[14] = g))
    : (g = t[14]);
  let _;
  return (
    t[15] !== d || t[16] !== ee || t[17] !== g
      ? ((_ = (0, Z.jsxs)(`div`, {
          className: `flex min-w-0 flex-wrap items-center justify-between gap-x-5 gap-y-3 py-5`,
          children: [d, ee, g],
        })),
        (t[15] = d),
        (t[16] = ee),
        (t[17] = g),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
}
var Jt, Z, Q;
function Yt() {
  return (Yt = e(() => {
    ((Jt = b()),
      _(),
      T(),
      ae(),
      Ht(),
      jt(),
      (Z = h()),
      (Q = E({
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
    { resource: n, remigration: i, onClose: a, onMigratingChange: o, onMigrated: s } = e,
    c = r(ie),
    l = de(),
    u = oe(),
    d = ve(),
    { accountId: f, userId: p } = Ae(),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = { preview: !1 }), (t[0] = m)) : (m = t[0]);
  let { data: h } = je(void 0, m),
    ee = _e(`2160578039`),
    te = A(Be),
    _ = A(He),
    ne = P(Le, `2513446768`),
    v;
  t[1] === ne ? (v = t[2]) : ((v = ne?.get(`disable_gpt_updates`, !1)), (t[1] = ne), (t[2] = v));
  let b = v === !0,
    re = P(Le, `3358027618`),
    x = Ft.parse(re?.value.max_file_bytes),
    ae = P(Le, `2562735250`)?.get(`enabled`, !1) === !0,
    S = Ue(h, _e(`1355972088`)),
    C = P(Le, `2826703856`)?.get(`enable_gpt_fe_controls`, !1) === !0,
    w = _e(`782250190`),
    {
      data: T,
      isPending: se,
      isError: E,
    } = P(z, f ?? ``, { enabled: f != null && h?.id === f && h.structure === `workspace` && (S || C) }),
    [D, ce] = (0, fn.useState)(i ? void 0 : n.gizmo.migrated_plugin_id),
    O = P(et, `${f}:${D}`),
    k;
  t[3] === n.tools ? (k = t[4]) : ((k = n.tools.some(rn)), (t[3] = n.tools), (t[4] = k));
  let [le, ue] = (0, fn.useState)(k),
    [j, M] = (0, fn.useState)(!1),
    [N, fe] = (0, fn.useState)(!1),
    [F, I] = (0, fn.useState)(),
    [L, me] = (0, fn.useState)(),
    ge;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = { hasCustomActions: !1, disabledAppIds: [] }), (t[5] = ge))
    : (ge = t[5]);
  let [B, be] = (0, fn.useState)(ge),
    Ce = (0, fn.useRef)(!1),
    we = Ge({ account: h, rbacEnabled: C, permissions: T?.permissions, isPending: se, isError: E }),
    V =
      ae &&
      Je({
        resource: n,
        account: h,
        accountId: f,
        userId: p,
        enabled: ee,
        allowMigrated: N,
        remigration: i,
      }) &&
      We(h, S, T?.permissions),
    De = y({
      queryKey: [`chatgpt-gizmos`, `migration-preview`, f, p, n.gizmo.id, n.gizmo.gizmo_config_id, x],
      queryFn: async (e) => {
        let { signal: t } = e;
        if (f == null) throw Error(`GPT migration requires an account`);
        let r = await ke.safeGet(`/gizmos/{gizmo_id_or_short_url}`, {
            parameters: { path: { gizmo_id_or_short_url: n.gizmo.id } },
            additionalHeaders: { "ChatGPT-Account-ID": f },
            expectedErrorStatuses: [401, 403, 404],
            signal: t,
          }),
          i = r.gizmo.migrated_plugin_id
            ? await c.queryClient.fetchQuery(
                ze({ gizmoId: r.gizmo.id, pluginId: r.gizmo.migrated_plugin_id }, f, p),
              )
            : void 0;
        t.throwIfAborted();
        let a = i?.deleted_plugin_id && i?.gizmo_config_id ? i : void 0,
          o = a?.gizmo_config_id ?? r.gizmo.gizmo_config_id,
          [s, l] = await Promise.all([
            r.gizmo.migrated_plugin_id == null || a != null
              ? cn(r, f, t).catch(() => (t.throwIfAborted(), null))
              : { unavailable: [], disabledByAdmin: [] },
            r.gizmo.migrated_plugin_id == null || a != null ? Mt(r, f, t, x) : void 0,
          ]);
        return { resource: r, remigration: a, configId: o, apps: s, fileCheck: l };
      },
      enabled: V && D == null && (we === `allowed` || N || F != null),
      retry: !1,
      staleTime: 0,
      refetchOnWindowFocus: !1,
    }),
    { data: H, isFetching: Oe, isError: U, error: Me, refetch: Pe } = g(De),
    W = N || (H?.resource.gizmo.migrated_plugin_id != null && !H.remigration),
    Fe = V && (te || W) && (we === `allowed` || W),
    Ie;
  t[6] !== H?.resource || t[7] !== le
    ? ((Ie = le || H?.resource.tools.some(nn) === !0), (t[6] = H?.resource), (t[7] = le), (t[8] = Ie))
    : (Ie = t[8]);
  let G = Ie,
    K;
  if (Oe && !j) {
    let e;
    (t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = { status: `loading` }), (t[9] = e))
      : (e = t[9]),
      (K = e));
  } else if (U) {
    let e;
    t[10] === Me ? (e = t[11]) : ((e = ut(Me)), (t[10] = Me), (t[11] = e));
    let n = e,
      r = n.kind === `request` ? n.status : void 0,
      i;
    (t[12] === r ? (i = t[13]) : ((i = { status: `error`, httpStatus: r }), (t[12] = r), (t[13] = i)),
      (K = i));
  } else if (H == null) {
    let e;
    (t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = { status: `loading` }), (t[14] = e))
      : (e = t[14]),
      (K = e));
  } else {
    let e;
    (t[15] === H.apps
      ? (e = t[16])
      : ((e = { status: `ready`, apps: H.apps }), (t[15] = H.apps), (t[16] = e)),
      (K = e));
  }
  let Ve = K.status === `ready` && K.apps?.unavailable.length === 0,
    q =
      L?.gizmoId === n.gizmo.id && L.accountId === f && L.userId === p && L.configId === H?.configId
        ? L
        : void 0,
    Ke;
  t[17] !== U ||
  t[18] !== B ||
  t[19] !== F?.kind ||
  t[20] !== G ||
  t[21] !== H?.apps?.disabledByAdmin ||
  t[22] !== H?.apps?.unavailable ||
  t[23] !== q?.appIds
    ? ((Ke =
        F?.kind === `request` &&
        (U ||
          H?.apps?.unavailable.some((e) => !q?.appIds.includes(e)) === !0 ||
          (G && !B.hasCustomActions) ||
          H?.apps?.disabledByAdmin.some((e) => !B.disabledAppIds.includes(e.id)) === !0)),
      (t[17] = U),
      (t[18] = B),
      (t[19] = F?.kind),
      (t[20] = G),
      (t[21] = H?.apps?.disabledByAdmin),
      (t[22] = H?.apps?.unavailable),
      (t[23] = q?.appIds),
      (t[24] = Ke))
    : (Ke = t[24]);
  let Ye = Ke,
    Qe = H?.resource.gizmo,
    $e = Qe?.share_recipient === `link` || Qe?.share_recipient === `marketplace`,
    nt =
      w &&
      h?.id === f &&
      h?.structure === `workspace` &&
      Qe?.workspace_id === f &&
      Qe.author.user_id === h.account_user_id,
    rt = Qe?.gizmo_config_id,
    it;
  t[25] !== f || t[26] !== n.gizmo.id || t[27] !== rt || t[28] !== p
    ? ((it = [`chatgpt-gizmos`, `migration-sharing-capabilities`, f, p, n.gizmo.id, rt]),
      (t[25] = f),
      (t[26] = n.gizmo.id),
      (t[27] = rt),
      (t[28] = p),
      (t[29] = it))
    : (it = t[29]);
  let at;
  t[30] !== f || t[31] !== n.gizmo.id
    ? ((at = (e) => {
        let { signal: t } = e;
        if (f == null) throw Error(`Plugin sharing capabilities require an account`);
        return ke.safeGet(`/gizmos/{gizmo_id}/export/plugin/capabilities`, {
          parameters: { path: { gizmo_id: n.gizmo.id } },
          additionalHeaders: { "ChatGPT-Account-ID": f },
          expectedErrorStatuses: [401, 403, 404],
          signal: t,
        });
      }),
      (t[30] = f),
      (t[31] = n.gizmo.id),
      (t[32] = at))
    : (at = t[32]);
  let ot = Fe && D == null && nt,
    ct;
  t[33] !== at || t[34] !== ot || t[35] !== it
    ? ((ct = { queryKey: it, queryFn: at, enabled: ot, retry: !1, staleTime: 0, refetchOnWindowFocus: !1 }),
      (t[33] = at),
      (t[34] = ot),
      (t[35] = it),
      (t[36] = ct))
    : (ct = t[36]);
  let { data: lt, isError: dt, isFetching: ft } = g(ct),
    pt = Fe && D == null && nt && !dt && !ft && lt?.workspace_id === f,
    mt;
  Fe &&
    K.status === `ready` &&
    H != null &&
    qe({
      resource: H.resource,
      remigration: H.remigration,
      account: h,
      accountId: f,
      userId: p,
      enabled: ee,
      allowMigrated: N,
      gptPermission: we,
    }) &&
    (mt = H.resource.gizmo.author.user_id === (h?.structure === `personal` ? p : h?.account_user_id));
  let ht;
  t[37] !== F ||
  t[38] !== H?.configId ||
  t[39] !== H?.fileCheck?.oversized?.length ||
  t[40] !== q?.fileIds.length
    ? ((ht =
        ((q?.fileIds.length ?? 0) > 0 || (H?.fileCheck?.oversized?.length ?? 0) > 0) &&
        !!H?.configId &&
        (F == null || st(F) != null)),
      (t[37] = F),
      (t[38] = H?.configId),
      (t[39] = H?.fileCheck?.oversized?.length),
      (t[40] = q?.fileIds.length),
      (t[41] = ht))
    : (ht = t[41]);
  let gt = ht,
    _t =
      K.status === `ready` &&
      (K.apps?.unavailable.length ?? 0) > 0 &&
      !!H?.configId &&
      (F == null || Ye || gt),
    vt = K.status === `ready` && K.apps != null && (gt || _t),
    J;
  t[42] === a
    ? (J = t[43])
    : ((J = () => {
        Ce.current || a();
      }),
      (t[42] = a),
      (t[43] = J));
  let yt = J,
    bt;
  t[44] !== u || t[45] !== a || t[46] !== s
    ? ((bt = (e) => {
        (a(), s == null ? Ne(e, u) : s(e));
      }),
      (t[44] = u),
      (t[45] = a),
      (t[46] = s),
      (t[47] = bt))
    : (bt = t[47]);
  let xt = bt,
    St;
  t[48] !== f ||
  t[49] !== Ve ||
  t[50] !== Fe ||
  t[51] !== vt ||
  t[52] !== _t ||
  t[53] !== W ||
  t[54] !== F ||
  t[55] !== G ||
  t[56] !== l ||
  t[57] !== N ||
  t[58] !== o ||
  t[59] !== xt ||
  t[60] !== D ||
  t[61] !== H ||
  t[62] !== De ||
  t[63] !== q?.fileIds ||
  t[64] !== n.gizmo.id ||
  t[65] !== c ||
  t[66] !== be ||
  t[67] !== I ||
  t[68] !== ue ||
  t[69] !== M ||
  t[70] !== fe ||
  t[71] !== me ||
  t[72] !== ce ||
  t[73] !== d ||
  t[74] !== p
    ? ((St = (e) => {
        let t = e !== void 0 && e;
        if (Ce.current || D != null || (!c.get(Be) && !W) || !Fe || (!Ve && !_t && F == null) || (t && !vt))
          return;
        let r =
            t && f != null && H?.configId
              ? {
                  accountId: f,
                  userId: p,
                  gizmoId: n.gizmo.id,
                  configId: H.configId,
                  fileIds: (0, dn.default)([
                    ...(q?.fileIds ?? []),
                    ...(H.fileCheck?.oversized?.map(tn) ?? []),
                  ]),
                  appIds: H.apps?.unavailable ?? [],
                }
              : void 0,
          i;
        ((Ce.current = !0),
          M(!0),
          o?.(!0),
          I(void 0),
          me(r),
          be({ hasCustomActions: G, disabledAppIds: H?.apps?.disabledByAdmin.map(en) ?? [] }),
          c.queryClient
            .fetchQuery(De)
            .catch($t)
            .then(async (e) => {
              if (e == null) return;
              let { resource: t, apps: n, fileCheck: a } = e;
              if (e.remigration?.deleted_plugin_id !== H?.remigration?.deleted_plugin_id) return;
              let o = c.queryClient.getQueryData([`accounts`, `check`])?.accounts?.find((e) => e.id === f);
              if (f == null) {
                I({ kind: `request`, status: 403 });
                return;
              }
              let s = d.getDynamicConfig(`2826703856`).get(`enable_gpt_fe_controls`, !1),
                u = c.query.getData(z, f);
              if (
                o?.structure === `workspace` &&
                ((s && (t.gizmo.migrated_plugin_id == null || e.remigration != null)) ||
                  Ue(o, d.checkGate(`1355972088`)))
              )
                try {
                  (await c.query.cancel(z, f),
                    await Ee(f),
                    (u = await c.queryClient.fetchQuery({
                      ...c.query.getOptions(z, f),
                      queryFn: (e) => {
                        let { signal: t } = e;
                        return Te(c, f, t, !0);
                      },
                      staleTime: 0,
                    })));
                } catch {
                  I({ kind: `request`, status: 403 });
                  return;
                }
              if (
                c.get(Re) !== f ||
                c.get(he) !== p ||
                !d.checkGate(`2160578039`) ||
                !d.getDynamicConfig(`2562735250`).get(`enabled`, !1) ||
                !We(o, d.checkGate(`1355972088`), u?.permissions)
              ) {
                I({ kind: `request`, status: 403 });
                return;
              }
              let m = e.remigration ? void 0 : t.gizmo.migrated_plugin_id;
              if (m == null) {
                if (!c.get(Be) && !N) return;
                if (r != null && e.configId !== r.configId) {
                  (me(void 0),
                    I({ kind: `request`, status: 409, errorCode: `gpt_plugin_migration_source_changed` }));
                  return;
                }
                if (
                  !qe({
                    resource: t,
                    remigration: e.remigration,
                    account: o,
                    accountId: f,
                    userId: p,
                    enabled: !0,
                    gptPermission: Ge({
                      account: o,
                      rbacEnabled: d.getDynamicConfig(`2826703856`).get(`enable_gpt_fe_controls`, !1),
                      permissions: u?.permissions,
                      isPending: !1,
                      isError: !1,
                    }),
                  })
                ) {
                  I({ kind: `request`, status: 403 });
                  return;
                }
                if (
                  n == null ||
                  a?.oversized?.some((e) => !r?.fileIds.includes(e.fileId)) ||
                  (a != null &&
                    (a.unavailable.some(
                      (e) => !r?.fileIds.includes(e) && !H?.fileCheck?.unavailable.includes(e),
                    ) ||
                      a.unchecked.some(
                        (e) => !r?.fileIds.includes(e) && !H?.fileCheck?.unchecked.includes(e),
                      ) ||
                      (a.profilePicture != null &&
                        (a.profilePicture.fileId !== H?.fileCheck?.profilePicture?.fileId ||
                          a.profilePicture.status !== H?.fileCheck?.profilePicture?.status)))) ||
                  (r != null &&
                    ((r = { ...r, appIds: r.appIds.filter((e) => n.unavailable.includes(e)) }), me(r)),
                  n.unavailable.some((e) => !r?.appIds.includes(e))) ||
                  n?.disabledByAdmin.some((e) => !H?.apps?.disabledByAdmin.some((t) => t.id === e.id))
                )
                  return;
                if (!G && t.tools.some(Qt)) {
                  ue(!0);
                  return;
                }
              }
              if (m == null || N) {
                if (!e.configId) throw Error(`Missing published GPT configuration for migration`);
                i = e.configId;
                let a = r?.appIds.filter((e) => n?.unavailable.includes(e)),
                  o = (r?.fileIds.length ?? 0) > 0 || (a?.length ?? 0) > 0,
                  s = await ke.safePost(`/gizmos/{gizmo_id}/migrate/plugin`, {
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
                if (((m = s.plugin_id), c.get(Re) !== f || c.get(he) !== p)) return;
                (c.set(et, `${f}:${m}`, {
                  failedFiles: s.failed_files ?? [],
                  files: t.files,
                  skippedFiles: s.skipped_files?.map(Zt) ?? [],
                }),
                  s.skipped_files != null &&
                    s.skipped_files.length > 0 &&
                    c.get(pe).warning(l.formatMessage(tt.description, { count: s.skipped_files.length })),
                  fe(!1));
              }
              if (c.get(Re) !== f || c.get(he) !== p) return;
              let h = { ...t, gizmo: { ...t.gizmo, migrated_plugin_id: m } };
              (c.queryClient.setQueriesData({ queryKey: [`chatgpt-gizmos`, `detail`] }, (e) =>
                e?.gizmo.id === t.gizmo.id ? h : e,
              ),
                c.queryClient.setQueryData([`chatgpt-gizmos`, `detail`, t.gizmo.id], h));
              try {
                await ke.safePost(`/ps/plugins/{plugin_id}/install`, {
                  surface: `plugin_management`,
                  parameters: { path: { plugin_id: m } },
                  additionalHeaders: { ...ye(), "ChatGPT-Account-ID": f },
                  expectedErrorStatuses: [400, 401, 403, 404, 409],
                });
              } catch {
                c.get(Re) === f &&
                  c.get(he) === p &&
                  c
                    .get(pe)
                    .warning(
                      l.formatMessage({
                        id: `chatgptConversations.gpts.migration.installFailed`,
                        defaultMessage: `Your plugin was migrated, but couldn’t be installed. You can try installing it from its page.`,
                        description: `Warning after GPT migration succeeded but automatic installation failed. The user is taken to the new plugin's detail page, where they can retry installation without migrating again.`,
                      }),
                    );
              }
              c.get(Re) === f &&
                c.get(he) === p &&
                (R((e) => xe(c.queryClient, e), !0),
                ce(m),
                c.get(et, `${f}:${m}`)?.failedFiles.length || xt(m),
                c.queryClient.invalidateQueries({ queryKey: [`chatgpt-gizmos`] }));
            })
            .catch((e) => {
              if (c.get(Re) === f && c.get(he) === p) {
                let t = ut(e),
                  a = st(t);
                (me(
                  f != null && i != null && a != null
                    ? {
                        accountId: f,
                        userId: p,
                        gizmoId: n.gizmo.id,
                        configId: i,
                        fileIds: [...new Set([...(r?.fileIds ?? []), ...a])],
                        appIds: r?.appIds ?? [],
                      }
                    : r,
                ),
                  t.kind === `request` &&
                    t.errorCode === `gpt_plugin_migration_editor_access_failed` &&
                    fe(!0),
                  I(t),
                  i != null && c.queryClient.invalidateQueries({ queryKey: De.queryKey }));
              }
            })
            .finally(() => {
              ((Ce.current = !1), M(!1), o?.(!1));
            }));
      }),
      (t[48] = f),
      (t[49] = Ve),
      (t[50] = Fe),
      (t[51] = vt),
      (t[52] = _t),
      (t[53] = W),
      (t[54] = F),
      (t[55] = G),
      (t[56] = l),
      (t[57] = N),
      (t[58] = o),
      (t[59] = xt),
      (t[60] = D),
      (t[61] = H),
      (t[62] = De),
      (t[63] = q?.fileIds),
      (t[64] = n.gizmo.id),
      (t[65] = c),
      (t[66] = be),
      (t[67] = I),
      (t[68] = ue),
      (t[69] = M),
      (t[70] = fe),
      (t[71] = me),
      (t[72] = ce),
      (t[73] = d),
      (t[74] = p),
      (t[75] = St))
    : (St = t[75]);
  let Ct = St,
    wt = H?.resource.gizmo,
    Tt;
  t[76] === wt ? (Tt = t[77]) : ((Tt = Ut(wt)), (t[76] = wt), (t[77] = Tt));
  let Et = Fe || F != null ? K : void 0,
    Dt = _ && D == null && !W,
    Ot = W ? `allowed` : we,
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
  let Y = O?.failedFiles,
    jt = O?.skippedFiles,
    Nt = Ye ? void 0 : F,
    Pt = H?.fileCheck,
    It = O?.files ?? H?.resource.files,
    Lt;
  t[84] !== pt || t[85] !== lt?.sharing
    ? ((Lt = pt && lt?.sharing.allowed_modes.includes(`private`) === !0),
      (t[84] = pt),
      (t[85] = lt?.sharing),
      (t[86] = Lt))
    : (Lt = t[86]);
  let Rt = nt && ft,
    zt = h?.id === f && h?.structure === `workspace`,
    Bt;
  t[87] !== xt || t[88] !== D
    ? ((Bt = D == null ? void 0 : (0, $.jsx)(Ze, { onOpen: () => xt(D) })),
      (t[87] = xt),
      (t[88] = D),
      (t[89] = Bt))
    : (Bt = t[89]);
  let Vt = nt && (dt || (!ft && lt?.workspace_id !== f)),
    X = $e && !U && !Oe && Qe?.current_user_permission != null && (!nt || pt),
    Ht;
  t[90] === Pe ? (Ht = t[91]) : ((Ht = () => void Pe()), (t[90] = Pe), (t[91] = Ht));
  let Wt;
  t[92] !== h?.structure ||
  t[93] !== K.status ||
  t[94] !== yt ||
  t[95] !== b ||
  t[96] !== C ||
  t[97] !== H ||
  t[98] !== n.gizmo.id ||
  t[99] !== T?.permissions
    ? ((Wt =
        K.status === `ready` &&
        !b &&
        H?.resource.gizmo.current_user_permission?.can_write &&
        (!C || h?.structure === `personal` || T?.permissions?.includes(`chatgpt.workspace.gpt.crud`)) &&
        !H.resource.gizmo.migrated_plugin_id
          ? (e) => {
              Ce.current ||
                (yt(),
                Se({
                  event: e,
                  href: `${Xe(`/gpts/editor`)}/${encodeURIComponent(n.gizmo.id)}`,
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                }));
            }
          : void 0),
      (t[92] = h?.structure),
      (t[93] = K.status),
      (t[94] = yt),
      (t[95] = b),
      (t[96] = C),
      (t[97] = H),
      (t[98] = n.gizmo.id),
      (t[99] = T?.permissions),
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
    t[106] !== Fe ||
    t[107] !== gt ||
    t[108] !== yt ||
    t[109] !== b ||
    t[110] !== G ||
    t[111] !== mt ||
    t[112] !== j ||
    t[113] !== D ||
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
          canMigrate: Fe,
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
          editingDisabled: b,
          isCheckingSharing: Rt,
          isGptOwner: mt,
          isMigrating: j,
          isWorkspaceAccount: zt,
          pluginAction: Bt,
          pluginId: D,
          sharingCheckFailed: Vt,
          showPublicSharingNote: X,
          onCheckApps: Ht,
          onClose: yt,
          onEdit: Wt,
          onMigrate: Gt,
          hasFileOmissions: gt,
          onMigrateAnyway: Kt,
        })),
        (t[106] = Fe),
        (t[107] = gt),
        (t[108] = yt),
        (t[109] = b),
        (t[110] = G),
        (t[111] = mt),
        (t[112] = j),
        (t[113] = D),
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
      sourceAudience: n,
      appCheck: r,
      canMigrate: i,
      workspaceAuthoringDisabled: a,
      gptPermission: o,
      canPublishPlugin: s,
      canSharePlugin: c,
      failedFiles: l,
      skippedFiles: u,
      failure: f,
      fileCheck: p,
      files: h,
      gizmoName: te,
      hasCustomActions: g,
      hasFileOmissions: _,
      isCheckingSharing: ne,
      isGptOwner: v,
      isMigrating: y,
      isWorkspaceAccount: b,
      modal: re,
      pluginAction: ie,
      pluginId: x,
      portalContainer: ae,
      sharingCheckFailed: oe,
      sharingChecked: S,
      editingDisabled: C,
      showPublicSharingNote: T,
      onCheckApps: E,
      onClose: D,
      onMigrate: ce,
      onMigrateAnyway: O,
      onEdit: k,
    } = e,
    A = a !== void 0 && a,
    le = o === void 0 ? `allowed` : o,
    ue = s !== void 0 && s,
    j = c !== void 0 && c,
    M = _ !== void 0 && _,
    P = ne !== void 0 && ne,
    de = b !== void 0 && b,
    pe = oe !== void 0 && oe,
    F = S !== void 0 && S,
    L = C !== void 0 && C,
    me;
  t[0] === te ? (me = t[1]) : ((me = te.trim()), (t[0] = te), (t[1] = me));
  let he = me,
    ge;
  t[2] !== h || t[3] !== u
    ? ((ge = u?.map((e) => {
        let { fileId: t } = e,
          n = h?.find((e) => (e.file_id || e.id) === t);
        return (n?.file_response_type === `full_file_response` && n.name) || t;
      })),
      (t[2] = h),
      (t[3] = u),
      (t[4] = ge))
    : (ge = t[4]);
  let _e = ge,
    ve;
  t[5] !== f || t[6] !== O || t[7] !== x
    ? ((ve = x == null && O != null && st(f) != null), (t[5] = f), (t[6] = O), (t[7] = x), (t[8] = ve))
    : (ve = t[8]);
  let R = ve,
    z =
      x == null &&
      O != null &&
      r?.status === `ready` &&
      (r.apps?.unavailable.length ?? 0) > 0 &&
      (f == null || R),
    B = (p?.oversized?.length ?? 0) > 0,
    ye = x == null && O != null && B,
    be = R || ye || z || (x == null && O != null && M),
    xe;
  t[9] === f
    ? (xe = t[10])
    : ((xe =
        f != null && f.kind !== `request` && (f.status == null || f.status === 400) && f.issues.every(on)
          ? f.issues
          : []),
      (t[9] = f),
      (t[10] = xe));
  let Se = xe,
    Ce = x == null && (r?.status === `error` || (r?.status === `ready` && r.apps == null)),
    we;
  if (x == null && f != null && (Se.length === 0 || R)) {
    let e;
    (t[11] !== R || t[12] !== L || t[13] !== f || t[14] !== h
      ? ((e = vt(f, h, L, R)), (t[11] = R), (t[12] = L), (t[13] = f), (t[14] = h), (t[15] = e))
      : (e = t[15]),
      (we = e));
  } else if (r?.status === `error`) {
    let e;
    (t[16] === r.httpStatus
      ? (e = t[17])
      : ((e = vt({ kind: `preview`, status: r.httpStatus })), (t[16] = r.httpStatus), (t[17] = e)),
      (we = e));
  }
  let V = we != null,
    Te = r == null || (r.status === `ready` && r.apps != null),
    Ee = r == null || (r.status === `ready` && r.apps?.unavailable.length === 0),
    De;
  if (we != null) De = we.title;
  else if (x != null) {
    let e;
    (t[18] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(I, {
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
      : ((e = (0, $.jsx)(I, {
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
      ? ((e = (0, $.jsx)(I, {
          id: `chatgptConversations.gpts.migration.untitledTitle`,
          defaultMessage: `Migrate Untitled GPT`,
          description: `Confirmation dialog title when the GPT being migrated into a private plugin has no name`,
        })),
        (t[21] = e))
      : (e = t[21]),
      (De = e));
  }
  let H, Oe;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (0, $.jsx)(I, {
        id: `chatgptConversations.gpts.migration.workspaceAuthoringDisabledTooltip`,
        defaultMessage: `Plugin creation is disabled for this workspace`,
        description: `Tooltip for a disabled GPT migration button when plugin authoring is disabled for the current workspace. This workspace feature restriction is separate from plugin-use permissions and administrator settings for Plugin Creator. Complete sentence with no placeholders.`,
      })),
      (t[22] = Oe))
    : (Oe = t[22]);
  let ke = Oe;
  if (A && !y) H = ke;
  else if (x == null && !y && le !== `allowed`) {
    let e;
    (t[23] === le ? (e = t[24]) : ((e = (0, $.jsx)(Ye, { permission: le })), (t[23] = le), (t[24] = e)),
      (H = e));
  } else if (we != null) H = we.description;
  else if (x != null) {
    let e;
    (t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(I, {
          id: `chatgptConversations.gpts.migration.successReviewDescription`,
          defaultMessage: `Open your plugin to review it`,
          description: `Next step in the GPT migration success dialog. The plugin has been created and automatic installation has been attempted. The Open plugin button navigates to its detail page, where the user can review the result, including any file-copy warnings. One sentence with no placeholders.`,
        })),
        (t[25] = e))
      : (e = t[25]),
      (H = e));
  } else if (!i && !y && f == null) {
    let e;
    (t[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(I, {
          id: `chatgptConversations.gpts.migration.unavailable`,
          defaultMessage: `Migration isn't available for this GPT. Check that the GPT is saved and that you have permission to use plugins`,
          description: `Explains that GPT migration is unavailable while source eligibility or plugin-use permissions are missing`,
        })),
        (t[26] = e))
      : (e = t[26]),
      (H = e));
  } else if (!de) {
    let e;
    (t[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(I, {
          id: `chatgptConversations.gpts.migration.nonWorkspaceDescription.editingLocked`,
          defaultMessage: `Turn this GPT into a plugin using its instructions and knowledge files. It starts private. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.`,
          description: `Standalone confirmation description before GPT migration in a personal account or while the current account is unconfirmed. Migration copies saved instructions and knowledge files into a private plugin, prevents further edits to the original GPT, and allows future updates to the plugin. Do not promise that sharing will be available afterward. Four complete sentences with no placeholders.`,
        })),
        (t[27] = e))
      : (e = t[27]),
      (H = e));
  } else if (v === !1) {
    let e;
    (t[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(I, {
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
      ? ((e = (0, $.jsx)(I, {
          id: `chatgptConversations.gpts.migration.description.editingLocked`,
          defaultMessage: `Turn this GPT into a plugin using its instructions and knowledge files. It starts private. You can manage sharing afterward, within your workspace’s permissions. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.`,
          description: `Standalone confirmation description before GPT migration, shown to its current owner or while the caller’s ownership is still being confirmed in a workspace. Migration copies saved instructions and knowledge files into a private plugin, with sharing afterward subject to workspace permissions. Migration prevents further edits to the original GPT; future updates can be made to the plugin. Five complete sentences with no placeholders.`,
        })),
        (t[29] = e))
      : (e = t[29]),
      (H = e));
  }
  let Ae;
  t[30] !== r ||
  t[31] !== R ||
  t[32] !== L ||
  t[33] !== f ||
  t[34] !== B ||
  t[35] !== V ||
  t[36] !== k ||
  t[37] !== Se ||
  t[38] !== x
    ? ((Ae =
        x == null &&
        r?.status === `ready` &&
        !R &&
        ((B && !V) ||
          Se.length > 0 ||
          ((ct(f) || (!V && (r.apps?.unavailable.length ?? 0) > 0)) && k != null && !L))),
      (t[30] = r),
      (t[31] = R),
      (t[32] = L),
      (t[33] = f),
      (t[34] = B),
      (t[35] = V),
      (t[36] = k),
      (t[37] = Se),
      (t[38] = x),
      (t[39] = Ae))
    : (Ae = t[39]);
  let je = Ae,
    U;
  if (Ce) {
    let e = y || E == null,
      n;
    t[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(I, {
          id: `chatgptConversations.gpts.migration.checkAppsAgain`,
          defaultMessage: `Check again`,
          description: `Retry loading the published GPT and its app availability before migration`,
        })),
        (t[40] = n))
      : (n = t[40]);
    let r;
    (t[41] !== E || t[42] !== e
      ? ((r = (0, $.jsx)(se, {
          className: `w-full`,
          color: `primary`,
          size: `promotionalAction`,
          type: `button`,
          disabled: e,
          onClick: E,
          children: n,
        })),
        (t[41] = E),
        (t[42] = e),
        (t[43] = r))
      : (r = t[43]),
      (U = r));
  } else if (je) {
    let e = y || L || k == null,
      n;
    t[44] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(I, {
          id: `chatgptConversations.gpts.migration.editGpt`,
          defaultMessage: `Edit GPT`,
          description: `Primary recovery button in the GPT migration modal for incompatible GPT settings, oversized knowledge files, or unavailable required apps. Opens the web GPT editor to fix the configuration and publish an update. Disabled when editing is unavailable.`,
        })),
        (t[44] = n))
      : (n = t[44]);
    let r;
    (t[45] !== k || t[46] !== e
      ? ((r = (0, $.jsx)(se, {
          className: `w-full`,
          color: `primary`,
          size: `promotionalAction`,
          type: `button`,
          disabled: e,
          onClick: k,
          children: n,
        })),
        (t[45] = k),
        (t[46] = e),
        (t[47] = r))
      : (r = t[47]),
      (U = r));
  } else if (V || R) {
    let e = y || A || !i || !Te,
      n;
    t[48] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(I, {
          id: `chatgptConversations.gpts.migration.recovery.retry`,
          defaultMessage: `Try again`,
          description: `Primary button in the GPT migration recovery dialog. Retries the failed operation: migration and any outstanding admin editor grant. Does not create a duplicate plugin.`,
        })),
        (t[48] = n))
      : (n = t[48]);
    let r;
    (t[49] === e
      ? (r = t[50])
      : ((r = (0, $.jsx)(se, {
          className: `w-full`,
          color: `primary`,
          size: `promotionalAction`,
          type: `submit`,
          disabled: e,
          children: n,
        })),
        (t[49] = e),
        (t[50] = r)),
      (U = r));
  } else if (x != null) U = ie;
  else {
    let e = A || !i || !Ee || B || Se.length > 0,
      n;
    t[51] === y
      ? (n = t[52])
      : ((n = y
          ? (0, $.jsx)(I, {
              id: `chatgptConversations.gpts.migration.migratingLabel`,
              defaultMessage: `Migrating`,
              description: `Disabled primary button status while the GPT migration request is in progress. A spinner accompanies this short label.`,
            })
          : (0, $.jsx)(I, {
              id: `chatgptConversations.gpts.migration.confirm`,
              defaultMessage: `Migrate to plugin`,
              description: `Confirms creation of a private plugin from the latest published GPT`,
            })),
        (t[51] = y),
        (t[52] = n));
    let r;
    (t[53] !== y || t[54] !== e || t[55] !== n
      ? ((r = (0, $.jsx)(se, {
          className: `w-full`,
          color: `primary`,
          size: `promotionalAction`,
          disabled: e,
          loading: y,
          type: `submit`,
          children: n,
        })),
        (t[53] = y),
        (t[54] = e),
        (t[55] = n),
        (t[56] = r))
      : (r = t[56]),
      (U = r));
  }
  if (!Ce && !je && x == null) {
    let e = A ? ke : void 0,
      n;
    (t[57] !== U || t[58] !== e
      ? ((n = (0, $.jsx)(N, { cloneCustomTrigger: !0, tooltipContent: e, children: U })),
        (t[57] = U),
        (t[58] = e),
        (t[59] = n))
      : (n = t[59]),
      (U = n));
  }
  let Me = !y,
    Ne;
  t[60] !== y || t[61] !== D
    ? ((Ne = (e) => {
        !e && !y && D();
      }),
      (t[60] = y),
      (t[61] = D),
      (t[62] = Ne))
    : (Ne = t[62]);
  let Pe;
  t[63] !== Ee ||
  t[64] !== Te ||
  t[65] !== i ||
  t[66] !== R ||
  t[67] !== B ||
  t[68] !== y ||
  t[69] !== V ||
  t[70] !== ce ||
  t[71] !== Se ||
  t[72] !== x ||
  t[73] !== je ||
  t[74] !== A
    ? ((Pe = (e) => {
        (e.preventDefault(),
          !y &&
            !A &&
            i &&
            (Ee || (V && Te)) &&
            !je &&
            (!B || V) &&
            (Se.length === 0 || R) &&
            x == null &&
            ce());
      }),
      (t[63] = Ee),
      (t[64] = Te),
      (t[65] = i),
      (t[66] = R),
      (t[67] = B),
      (t[68] = y),
      (t[69] = V),
      (t[70] = ce),
      (t[71] = Se),
      (t[72] = x),
      (t[73] = je),
      (t[74] = A),
      (t[75] = Pe))
    : (Pe = t[75]);
  let W;
  t[76] === De
    ? (W = t[77])
    : ((W = (0, $.jsx)(fe, {
        className: `text-center text-heading-lg leading-7 font-semibold wrap-anywhere select-none`,
        children: De,
      })),
      (t[76] = De),
      (t[77] = W));
  let Fe = H == null ? `sr-only` : `text-center text-sm leading-5 text-secondary select-none`,
    Ie = V ? `alert` : void 0,
    Le;
  t[78] === H ? (Le = t[79]) : ((Le = (0, $.jsx)(`div`, { children: H })), (t[78] = H), (t[79] = Le));
  let G;
  t[80] !== Fe || t[81] !== Ie || t[82] !== Le
    ? ((G = (0, $.jsx)(m, { asChild: !0, className: Fe, "aria-live": `polite`, role: Ie, children: Le })),
      (t[80] = Fe),
      (t[81] = Ie),
      (t[82] = Le),
      (t[83] = G))
    : (G = t[83]);
  let Re;
  t[84] !== W || t[85] !== G
    ? ((Re = (0, $.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [W, G] })),
      (t[84] = W),
      (t[85] = G),
      (t[86] = Re))
    : (Re = t[86]);
  let K;
  t[87] !== r ||
  t[88] !== i ||
  t[89] !== ye ||
  t[90] !== z ||
  t[91] !== ue ||
  t[92] !== j ||
  t[93] !== L ||
  t[94] !== f ||
  t[95] !== p ||
  t[96] !== h ||
  t[97] !== g ||
  t[98] !== P ||
  t[99] !== V ||
  t[100] !== de ||
  t[101] !== k ||
  t[102] !== x ||
  t[103] !== pe ||
  t[104] !== F ||
  t[105] !== T ||
  t[106] !== n
    ? ((K =
        x == null && !V
          ? (0, $.jsx)(Gt, {
              sourceAudience: n ?? (T ? `public` : void 0),
              appCheck: r,
              canMigrate: i,
              canPublishPlugin: ue,
              canSharePlugin: j,
              failure: f,
              fileCheck: p,
              files: h,
              hasCustomActions: g,
              isCheckingSharing: P,
              isWorkspaceAccount: de,
              sharingCheckFailed: pe,
              sharingChecked: F,
              canEdit: k != null && !L,
              canOmitUnavailableApps: z,
              canOmitOversizedFiles: ye,
              editingDisabled: L,
            })
          : null),
      (t[87] = r),
      (t[88] = i),
      (t[89] = ye),
      (t[90] = z),
      (t[91] = ue),
      (t[92] = j),
      (t[93] = L),
      (t[94] = f),
      (t[95] = p),
      (t[96] = h),
      (t[97] = g),
      (t[98] = P),
      (t[99] = V),
      (t[100] = de),
      (t[101] = k),
      (t[102] = x),
      (t[103] = pe),
      (t[104] = F),
      (t[105] = T),
      (t[106] = n),
      (t[107] = K))
    : (K = t[107]);
  let ze;
  t[108] !== ye ||
  t[109] !== L ||
  t[110] !== p ||
  t[111] !== h ||
  t[112] !== B ||
  t[113] !== V ||
  t[114] !== k ||
  t[115] !== x
    ? ((ze =
        x == null &&
        V &&
        p != null &&
        (B || p.unavailable.length > 0 || p.unchecked.length > 0 || p.profilePicture != null)
          ? (0, $.jsx)(`div`, {
              className: `w-full border-s border-default ps-3 text-sm text-default select-none`,
              children: (0, $.jsx)(St, {
                fileCheck: p,
                files: h,
                canOmitOversizedFiles: ye,
                canEdit: k != null && !L,
              }),
            })
          : null),
      (t[108] = ye),
      (t[109] = L),
      (t[110] = p),
      (t[111] = h),
      (t[112] = B),
      (t[113] = V),
      (t[114] = k),
      (t[115] = x),
      (t[116] = ze))
    : (ze = t[116]);
  let Be;
  t[117] === y
    ? (Be = t[118])
    : ((Be = y
        ? (0, $.jsx)(`p`, {
            className: `sr-only`,
            role: `status`,
            children: (0, $.jsx)(I, {
              id: `chatgptConversations.gpts.migration.pending`,
              defaultMessage: `Creating your plugin…`,
              description: `Progress status while a GPT is being migrated; the dialog cannot be dismissed during creation`,
            }),
          })
        : null),
      (t[117] = y),
      (t[118] = Be));
  let Ve;
  t[119] !== l || t[120] !== h || t[121] !== x
    ? ((Ve =
        l != null && l.length > 0
          ? (0, $.jsx)($e, { failedFiles: l, files: h, migrationSucceeded: x != null })
          : null),
      (t[119] = l),
      (t[120] = h),
      (t[121] = x),
      (t[122] = Ve))
    : (Ve = t[122]);
  let He;
  t[123] !== x || t[124] !== _e || t[125] !== u
    ? ((He =
        x != null && u != null && u.length > 0 ? (0, $.jsx)(ot, { count: u.length, filenames: _e }) : null),
      (t[123] = x),
      (t[124] = _e),
      (t[125] = u),
      (t[126] = He))
    : (He = t[126]);
  let Ue;
  t[127] !== Ee ||
  t[128] !== i ||
  t[129] !== R ||
  t[130] !== ye ||
  t[131] !== be ||
  t[132] !== z ||
  t[133] !== M ||
  t[134] !== y ||
  t[135] !== O ||
  t[136] !== A
    ? ((Ue =
        be &&
        (0, $.jsx)(N, {
          cloneCustomTrigger: !0,
          tooltipContent: A
            ? ke
            : (0, $.jsxs)($.Fragment, {
                children: [
                  z &&
                    (R || ye || M) &&
                    (0, $.jsx)(I, {
                      id: `chatgptConversations.gpts.migration.omitAppsAndFilesTooltip`,
                      defaultMessage: `Create the plugin without the unavailable apps and failed knowledge files. Invalid app settings and conversation starters may also be left out.`,
                      description: `Tooltip for Migrate anyway when unavailable apps and failed knowledge files will be omitted, including previously approved file omissions for this saved GPT configuration. The backend can also omit invalid app settings and conversation starters.`,
                    }),
                  z &&
                    !R &&
                    !ye &&
                    !M &&
                    (0, $.jsx)(I, {
                      id: `chatgptConversations.gpts.migration.omitUnavailableAppsTooltip`,
                      defaultMessage: `Create the plugin without the unavailable apps. Invalid app settings and conversation starters may also be left out.`,
                      description: `Tooltip for the explicit Migrate anyway action when required apps are unavailable to the user. Only unavailable apps are omitted; available and admin-disabled apps remain. The backend can also omit invalid app settings and conversation starters.`,
                    }),
                  !z &&
                    (0, $.jsx)(I, {
                      id: `chatgptConversations.gpts.migration.omitFailedFilesTooltip`,
                      defaultMessage: `Create the plugin without the failed knowledge files. Invalid app settings and conversation starters may also be left out.`,
                      description: `Tooltip explaining the explicit Migrate anyway recovery action after required GPT knowledge files failed. The failed knowledge files are omitted, including files the user agreed to omit in earlier attempts on the same saved GPT configuration. The backend may also omit malformed app selections and invalid conversation starters.`,
                    }),
                ],
              }),
          children: (0, $.jsx)(se, {
            color: `ghostSecondary`,
            size: `dialogAction`,
            disabled: y || A || !i || (!Ee && !z),
            type: `button`,
            onClick: O,
            children: (0, $.jsx)(`span`, {
              className: `underline decoration-from-font underline-offset-2`,
              children: (0, $.jsx)(I, {
                id: `chatgptConversations.gpts.migration.omitFailedFiles`,
                defaultMessage: `Migrate anyway`,
                description: `Optional migration recovery action. Creates the plugin while explicitly omitting unavailable apps or failed knowledge files, as explained by its tooltip.`,
              }),
            }),
          }),
        })),
      (t[127] = Ee),
      (t[128] = i),
      (t[129] = R),
      (t[130] = ye),
      (t[131] = be),
      (t[132] = z),
      (t[133] = M),
      (t[134] = y),
      (t[135] = O),
      (t[136] = A),
      (t[137] = Ue))
    : (Ue = t[137]);
  let We;
  t[138] !== be || t[139] !== y || t[140] !== V || t[141] !== D || t[142] !== x || t[143] !== je
    ? ((We =
        !je &&
        !V &&
        !be &&
        (0, $.jsx)(se, {
          color: `ghostSecondary`,
          size: `dialogAction`,
          disabled: y,
          type: `button`,
          onClick: D,
          children: (0, $.jsxs)(`span`, {
            className: `underline decoration-from-font underline-offset-2`,
            children: [
              x != null &&
                (0, $.jsx)(I, {
                  id: `chatgptConversations.gpts.migration.done`,
                  defaultMessage: `Done`,
                  description: `Closes the successful GPT migration dialog without opening the plugin`,
                }),
              x == null &&
                (0, $.jsx)(I, {
                  id: `chatgptConversations.gpts.migration.later`,
                  defaultMessage: `Migrate later`,
                  description: `Dismisses GPT migration without creating a plugin`,
                }),
            ],
          }),
        })),
      (t[138] = be),
      (t[139] = y),
      (t[140] = V),
      (t[141] = D),
      (t[142] = x),
      (t[143] = je),
      (t[144] = We))
    : (We = t[144]);
  let Ge;
  t[145] !== U || t[146] !== Ue || t[147] !== We
    ? ((Ge = (0, $.jsxs)(ee, {
        className: `flex-col text-center`,
        expandSingleButton: !1,
        children: [U, Ue, We],
      })),
      (t[145] = U),
      (t[146] = Ue),
      (t[147] = We),
      (t[148] = Ge))
    : (Ge = t[148]);
  let q;
  t[149] !== Re ||
  t[150] !== K ||
  t[151] !== ze ||
  t[152] !== Be ||
  t[153] !== Ve ||
  t[154] !== He ||
  t[155] !== Ge
    ? ((q = (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-8 p-6 pt-14 text-start sm:p-10`,
        children: [Re, K, ze, Be, Ve, He, Ge],
      })),
      (t[149] = Re),
      (t[150] = K),
      (t[151] = ze),
      (t[152] = Be),
      (t[153] = Ve),
      (t[154] = He),
      (t[155] = Ge),
      (t[156] = q))
    : (q = t[156]);
  let Ke;
  t[157] !== Pe || t[158] !== q
    ? ((Ke = (0, $.jsx)(d, { as: `form`, size: `viewport`, variant: `chatgpt`, onSubmit: Pe, children: q })),
      (t[157] = Pe),
      (t[158] = q),
      (t[159] = Ke))
    : (Ke = t[159]);
  let qe;
  return (
    t[160] !== y || t[161] !== re || t[162] !== ae || t[163] !== Me || t[164] !== Ne || t[165] !== Ke
      ? ((qe = (0, $.jsx)(w, {
          open: !0,
          modal: re,
          portalContainer: ae,
          showDialogClose: Me,
          shouldIgnoreClickOutside: y,
          size: `beacon`,
          closeButtonSize: `large`,
          variant: `promotional`,
          onOpenChange: Ne,
          children: Ke,
        })),
        (t[160] = y),
        (t[161] = re),
        (t[162] = ae),
        (t[163] = Me),
        (t[164] = Ne),
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
          ke.safePost(`/aip/connectors/batch`, {
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
    a = new Map(i.map((e) => [ge(e.id), e]));
  return {
    unavailable: r.filter((e) => !a.has(ge(e))),
    disabledByAdmin: i.filter((e) => e.status === `DISABLED_BY_ADMIN`),
  };
}
var ln, un, dn, fn, $, pn, mn;
function hn() {
  return (hn = e(() => {
    ((ln = b()),
      ue(),
      (un = t(we(), 1)),
      (dn = t(Oe(), 1)),
      ce(),
      (fn = o()),
      T(),
      ne(),
      c(),
      V(),
      W(),
      B(),
      Me(),
      Ve(),
      Fe(),
      D(),
      p(),
      u(),
      H(),
      C(),
      F(),
      U(),
      be(),
      Ce(),
      Ie(),
      i(),
      G(),
      De(),
      Pe(),
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
      ($ = h()),
      (pn = M({ action_ids: j(O()).nullish().catch(null) })),
      (mn = /^(?:asdk_app|connector|templated_apps)_[A-Za-z0-9][A-Za-z0-9_-]*$/));
  }))();
}
hn();
export { Xt as GptPluginMigrationDialog };
//# sourceMappingURL=dialog-d71e1fa83ee6.js.map
