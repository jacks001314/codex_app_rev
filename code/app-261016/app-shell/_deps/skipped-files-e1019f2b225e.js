import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  GOt as n,
  LNt as r,
  PBt as i,
  Qst as a,
  SCt as o,
  XOt as s,
  YOt as c,
  ZSt as l,
  _T as u,
  gT as d,
  tkt as f,
  vD as p,
  yD as m,
} from "./app-shared-2feb3d4c6fcc.js";
import { Sjr as h, xjr as g } from "./app-initial-ad16eaadf81f.js";
var _;
function v() {
  return (v = e(() => {
    (l(), t(), (_ = o(a, (e) => null)));
  }))();
}
function y(e) {
  let t = (0, E.c)(23),
    { failedFiles: n, files: r, issues: i, migrationSucceeded: a } = e,
    o = h(`2513446768`),
    s;
  t[0] === o ? (s = t[1]) : ((s = o.get(`disable_gpt_updates`, !1)), (t[0] = o), (t[1] = s));
  let c = s,
    l;
  t[2] === n ? (l = t[3]) : ((l = n.filter(x)), (t[2] = n), (t[3] = l));
  let u = l,
    m,
    g,
    _;
  if (t[4] !== n || t[5] !== r || t[6] !== c || t[7] !== i || t[8] !== a || t[9] !== u.length) {
    let e = n.filter(b),
      o;
    if (a) {
      let e;
      (t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, D.jsx)(f, {
            id: `chatgptConversations.gpts.migration.referenceCopyWarningAfterSuccess`,
            defaultMessage: `Your plugin was created without these files. Open your plugin and choose Edit plugin to add them.`,
            description: `Warning on the destination after successful migration reports files that were not copied; the plugin already exists`,
          })),
          (t[13] = e))
        : (e = t[13]),
        (o = e));
    } else if (c) {
      let e;
      (t[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, D.jsx)(f, {
            id: `chatgptConversations.gpts.migration.referenceCopyFailedReadonlyDescription`,
            defaultMessage: `Your plugin wasn’t created. Try again later.`,
            description: `Explains that failed reference file copies prevented creating the plugin when GPT editing and publishing are no longer available, so retrying later is the available recovery action`,
          })),
          (t[14] = e))
        : (e = t[14]),
        (o = e));
    } else {
      let e;
      (t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, D.jsx)(f, {
            id: `chatgptConversations.gpts.migration.referenceCopyFailedDescription`,
            defaultMessage: `Your plugin wasn’t created. Try again, or fix these files and republish the GPT.`,
            description: `Explains that failed reference file copies prevent creating the plugin and how to retry or fix the GPT`,
          })),
          (t[15] = e))
        : (e = t[15]),
        (o = e));
    }
    ((m = `flex flex-col gap-3 text-start text-sm`),
      t[16] !== a || t[17] !== u.length
        ? ((g =
            u.length > 0
              ? (0, D.jsx)(p, {
                  type: `warning`,
                  variant: `callout`,
                  layout: `vertical`,
                  role: `alert`,
                  content: (0, D.jsx)(`p`, {
                    className: `select-none`,
                    children: a
                      ? (0, D.jsx)(f, {
                          id: `chatgptConversations.gpts.migration.profileCopyFailedAfterSuccess`,
                          defaultMessage: `Your plugin was created, but we couldn’t copy the GPT’s profile picture. To add a logo, open your plugin and choose Edit plugin.`,
                          description: `Notice after a GPT successfully becomes a plugin but its profile picture could not be copied; Edit plugin is the action used to upload a replacement plugin logo`,
                        })
                      : (0, D.jsx)(f, {
                          id: `chatgptConversations.gpts.migration.profileCopyFailedBeforeSuccess`,
                          defaultMessage: `We couldn’t copy the GPT’s profile picture. After migration succeeds, open your plugin and choose Edit plugin to add a logo.`,
                          description: `Notice that the GPT profile picture could not be copied while other errors prevented creating a plugin; explains how to add a logo after resolving the blocking errors and completing migration`,
                        }),
                  }),
                })
              : null),
          (t[16] = a),
          (t[17] = u.length),
          (t[18] = g))
        : (g = t[18]),
      (_ =
        e.length > 0
          ? (0, D.jsx)(d, {
              level: `danger`,
              children: (0, D.jsxs)(`div`, {
                className: `flex flex-col gap-1 text-sm`,
                children: [
                  (0, D.jsx)(`h3`, {
                    className: `font-semibold text-default select-none`,
                    children: (0, D.jsx)(f, {
                      id: `chatgptConversations.gpts.migration.referenceCopyFailed`,
                      defaultMessage: `{count, plural, one {A reference file couldn’t be synced} other {Reference files couldn’t be synced}}`,
                      description: `Heading for GPT reference file copy failures that prevent migration, followed by the affected filenames and errors`,
                      values: { count: e.length },
                    }),
                  }),
                  (0, D.jsx)(`p`, { className: `text-secondary select-none`, children: o }),
                  (0, D.jsx)(`ul`, {
                    className: `flex list-disc flex-col gap-1 ps-5`,
                    children: e.map((e, t) => (0, D.jsx)(S, { file: e, files: r, issues: i }, t)),
                  }),
                ],
              }),
            })
          : null),
      (t[4] = n),
      (t[5] = r),
      (t[6] = c),
      (t[7] = i),
      (t[8] = a),
      (t[9] = u.length),
      (t[10] = m),
      (t[11] = g),
      (t[12] = _));
  } else ((m = t[10]), (g = t[11]), (_ = t[12]));
  let v;
  return (
    t[19] !== m || t[20] !== g || t[21] !== _
      ? ((v = (0, D.jsxs)(`div`, { className: m, children: [g, _] })),
        (t[19] = m),
        (t[20] = g),
        (t[21] = _),
        (t[22] = v))
      : (v = t[22]),
    v
  );
}
function b(e) {
  return e.type === `knowledge_file`;
}
function x(e) {
  return e.type === `profile_picture`;
}
function S(e) {
  let t = (0, E.c)(12),
    { file: n, files: r, issues: i } = e,
    a,
    o;
  if (t[0] !== n || t[1] !== r || t[2] !== i) {
    a = i?.filter(
      (e) => e.resource.type === `knowledge_file` && n.file_id != null && e.resource.id === n.file_id,
    );
    let e;
    t[5] !== n || t[6] !== r
      ? ((e = r?.find((e) => e.file_id === n.file_id)), (t[5] = n), (t[6] = r), (t[7] = e))
      : (e = t[7]);
    let s = e;
    ((o =
      a?.find(T)?.resource.name ||
      (s?.file_response_type === `full_file_response` ? s.name : void 0) ||
      n.file_id),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o));
  } else ((a = t[3]), (o = t[4]));
  let s = o,
    c;
  return (
    t[8] !== n || t[9] !== a?.[0]?.message || t[10] !== s
      ? ((c = (0, D.jsx)(`li`, {
          className: `wrap-anywhere text-default select-text`,
          children: s
            ? (0, D.jsx)(f, {
                id: `chatgptConversations.gpts.migration.referenceFileCopyErrorWithFilename`,
                defaultMessage: `<strong>{filename}</strong> — {message}`,
                description: `One failed reference file and the server's reason it could not be copied during GPT migration`,
                values: { filename: s, message: a?.[0]?.message || n.message, strong: w },
              })
            : (0, D.jsx)(f, {
                id: `chatgptConversations.gpts.migration.unnamedReferenceFileCopyErrorWithLabel`,
                defaultMessage: `<strong>Reference file</strong> — {message}`,
                description: `Copy failure and the server's reason when neither a reference file's name nor identifier is available during GPT migration`,
                values: { message: a?.[0]?.message || n.message, strong: C },
              }),
        })),
        (t[8] = n),
        (t[9] = a?.[0]?.message),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function C(e) {
  return (0, D.jsx)(`strong`, { children: e });
}
function w(e) {
  return (0, D.jsx)(`strong`, { children: e });
}
function T(e) {
  return e.resource.name;
}
var E, D;
function O() {
  return (O = e(() => {
    ((E = i()), s(), m(), u(), g(), (D = r()));
  }))();
}
var k;
function A() {
  return (A = e(() => {
    (s(),
      (k = c({
        description: {
          id: `chatgptConversations.gpts.migration.skippedFiles.description.unavailable`,
          defaultMessage: `{count, plural, one {Your plugin was created without a knowledge file that is no longer available.} other {Your plugin was created without # knowledge files that are no longer available.}} You can add replacement files in Edit plugin.`,
          description: `Nonblocking warning body in a toast and destination plugin page after GPT-to-plugin migration succeeds while skipping knowledge files that are no longer available for migration. Shown to the GPT creator or workspace administrator; explains that the plugin exists and replacement files can be uploaded through Edit plugin. Describe file availability without claiming that a user deleted the files or identifying a cause. Placeholder count is the positive integer number of skipped knowledge files, used for pluralization. Two complete sentences; no filenames or upstream errors are shown.`,
        },
      })));
  }))();
}
function j(e) {
  let t = (0, M.c)(7),
    { count: r, filenames: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = (0, N.jsx)(`p`, { children: (0, N.jsx)(f, { ...k.description, values: { count: r } }) })),
      (t[0] = r),
      (t[1] = a));
  let o;
  t[2] === i
    ? (o = t[3])
    : ((o =
        i != null &&
        i.length > 0 &&
        (0, N.jsx)(`p`, {
          children: (0, N.jsx)(`strong`, {
            className: `font-medium select-text`,
            children: (0, N.jsx)(n, { value: i, type: `conjunction` }),
          }),
        })),
      (t[2] = i),
      (t[3] = o));
  let s;
  return (
    t[4] !== a || t[5] !== o
      ? ((s = (0, N.jsx)(p, {
          type: `warning`,
          variant: `callout`,
          layout: `vertical`,
          role: `alert`,
          content: (0, N.jsxs)(`div`, {
            className: `flex flex-col gap-1 wrap-anywhere select-none`,
            children: [a, o],
          }),
        })),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
var M, N;
function P() {
  return (P = e(() => {
    ((M = i()), s(), m(), A(), (N = r()));
  }))();
}
export { y as a, _ as c, k as i, P as n, O as o, A as r, v as s, j as t };
//# sourceMappingURL=skipped-files-e1019f2b225e.js.map
