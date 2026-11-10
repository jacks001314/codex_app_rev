import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  Cot as n,
  EDt as r,
  FT as i,
  GE as a,
  IDt as o,
  IT as s,
  Pxt as c,
  WE as l,
  aSt as u,
  jDt as d,
  vzt as f,
  wot as p,
  xMt as m,
} from "./app-shared-bbfeca5e5737.js";
import { eDr as h, tDr as g } from "./app-initial-5851df3f6cb1.js";
var _;
function v() {
  return (v = e(() => {
    (c(), p(), (_ = u(n, (e) => null)));
  }))();
}
function y(e) {
  let t = (0, E.c)(23),
    { failedFiles: n, files: r, issues: a, migrationSucceeded: s } = e,
    c = g(`2513446768`),
    u;
  t[0] === c ? (u = t[1]) : ((u = c.get(`disable_gpt_updates`, !1)), (t[0] = c), (t[1] = u));
  let d = u,
    f;
  t[2] === n ? (f = t[3]) : ((f = n.filter(x)), (t[2] = n), (t[3] = f));
  let p = f,
    m,
    h,
    _;
  if (t[4] !== n || t[5] !== r || t[6] !== d || t[7] !== a || t[8] !== s || t[9] !== p.length) {
    let e = n.filter(b),
      c;
    if (s) {
      let e;
      (t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, D.jsx)(o, {
            id: `chatgptConversations.gpts.migration.referenceCopyWarningAfterSuccess`,
            defaultMessage: `Your plugin was created without these files. Open your plugin and choose Edit plugin to add them.`,
            description: `Warning on the destination after successful migration reports files that were not copied; the plugin already exists`,
          })),
          (t[13] = e))
        : (e = t[13]),
        (c = e));
    } else if (d) {
      let e;
      (t[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, D.jsx)(o, {
            id: `chatgptConversations.gpts.migration.referenceCopyFailedReadonlyDescription`,
            defaultMessage: `Your plugin wasn’t created. Try again later.`,
            description: `Explains that failed reference file copies prevented creating the plugin when GPT editing and publishing are no longer available, so retrying later is the available recovery action`,
          })),
          (t[14] = e))
        : (e = t[14]),
        (c = e));
    } else {
      let e;
      (t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, D.jsx)(o, {
            id: `chatgptConversations.gpts.migration.referenceCopyFailedDescription`,
            defaultMessage: `Your plugin wasn’t created. Try again, or fix these files and republish the GPT.`,
            description: `Explains that failed reference file copies prevent creating the plugin and how to retry or fix the GPT`,
          })),
          (t[15] = e))
        : (e = t[15]),
        (c = e));
    }
    ((m = `flex flex-col gap-3 text-start text-sm`),
      t[16] !== s || t[17] !== p.length
        ? ((h =
            p.length > 0
              ? (0, D.jsx)(l, {
                  type: `warning`,
                  variant: `callout`,
                  layout: `vertical`,
                  role: `alert`,
                  content: (0, D.jsx)(`p`, {
                    className: `select-none`,
                    children: s
                      ? (0, D.jsx)(o, {
                          id: `chatgptConversations.gpts.migration.profileCopyFailedAfterSuccess`,
                          defaultMessage: `Your plugin was created, but we couldn’t copy the GPT’s profile picture. To add a logo, open your plugin and choose Edit plugin.`,
                          description: `Notice after a GPT successfully becomes a plugin but its profile picture could not be copied; Edit plugin is the action used to upload a replacement plugin logo`,
                        })
                      : (0, D.jsx)(o, {
                          id: `chatgptConversations.gpts.migration.profileCopyFailedBeforeSuccess`,
                          defaultMessage: `We couldn’t copy the GPT’s profile picture. After migration succeeds, open your plugin and choose Edit plugin to add a logo.`,
                          description: `Notice that the GPT profile picture could not be copied while other errors prevented creating a plugin; explains how to add a logo after resolving the blocking errors and completing migration`,
                        }),
                  }),
                })
              : null),
          (t[16] = s),
          (t[17] = p.length),
          (t[18] = h))
        : (h = t[18]),
      (_ =
        e.length > 0
          ? (0, D.jsx)(i, {
              level: `danger`,
              children: (0, D.jsxs)(`div`, {
                className: `flex flex-col gap-1 text-sm`,
                children: [
                  (0, D.jsx)(`h3`, {
                    className: `font-semibold text-default select-none`,
                    children: (0, D.jsx)(o, {
                      id: `chatgptConversations.gpts.migration.referenceCopyFailed`,
                      defaultMessage: `{count, plural, one {A reference file couldn’t be synced} other {Reference files couldn’t be synced}}`,
                      description: `Heading for GPT reference file copy failures that prevent migration, followed by the affected filenames and errors`,
                      values: { count: e.length },
                    }),
                  }),
                  (0, D.jsx)(`p`, { className: `text-secondary select-none`, children: c }),
                  (0, D.jsx)(`ul`, {
                    className: `flex list-disc flex-col gap-1 ps-5`,
                    children: e.map((e, t) => (0, D.jsx)(S, { file: e, files: r, issues: a }, t)),
                  }),
                ],
              }),
            })
          : null),
      (t[4] = n),
      (t[5] = r),
      (t[6] = d),
      (t[7] = a),
      (t[8] = s),
      (t[9] = p.length),
      (t[10] = m),
      (t[11] = h),
      (t[12] = _));
  } else ((m = t[10]), (h = t[11]), (_ = t[12]));
  let v;
  return (
    t[19] !== m || t[20] !== h || t[21] !== _
      ? ((v = (0, D.jsxs)(`div`, { className: m, children: [h, _] })),
        (t[19] = m),
        (t[20] = h),
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
    s;
  if (t[0] !== n || t[1] !== r || t[2] !== i) {
    a = i?.filter(
      (e) => e.resource.type === `knowledge_file` && n.file_id != null && e.resource.id === n.file_id,
    );
    let e;
    t[5] !== n || t[6] !== r
      ? ((e = r?.find((e) => e.file_id === n.file_id)), (t[5] = n), (t[6] = r), (t[7] = e))
      : (e = t[7]);
    let o = e;
    ((s =
      a?.find(T)?.resource.name ||
      (o?.file_response_type === `full_file_response` ? o.name : void 0) ||
      n.file_id),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = s));
  } else ((a = t[3]), (s = t[4]));
  let c = s,
    l;
  return (
    t[8] !== n || t[9] !== a?.[0]?.message || t[10] !== c
      ? ((l = (0, D.jsx)(`li`, {
          className: `wrap-anywhere text-default select-text`,
          children: c
            ? (0, D.jsx)(o, {
                id: `chatgptConversations.gpts.migration.referenceFileCopyErrorWithFilename`,
                defaultMessage: `<strong>{filename}</strong> — {message}`,
                description: `One failed reference file and the server's reason it could not be copied during GPT migration`,
                values: { filename: c, message: a?.[0]?.message || n.message, strong: w },
              })
            : (0, D.jsx)(o, {
                id: `chatgptConversations.gpts.migration.unnamedReferenceFileCopyErrorWithLabel`,
                defaultMessage: `<strong>Reference file</strong> — {message}`,
                description: `Copy failure and the server's reason when neither a reference file's name nor identifier is available during GPT migration`,
                values: { message: a?.[0]?.message || n.message, strong: C },
              }),
        })),
        (t[8] = n),
        (t[9] = a?.[0]?.message),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
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
    ((E = f()), d(), a(), s(), h(), (D = m()));
  }))();
}
var k;
function A() {
  return (A = e(() => {
    (d(),
      (k = t({
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
    { count: n, filenames: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (0, N.jsx)(`p`, { children: (0, N.jsx)(o, { ...k.description, values: { count: n } }) })),
      (t[0] = n),
      (t[1] = a));
  let s;
  t[2] === i
    ? (s = t[3])
    : ((s =
        i != null &&
        i.length > 0 &&
        (0, N.jsx)(`p`, {
          children: (0, N.jsx)(`strong`, {
            className: `font-medium select-text`,
            children: (0, N.jsx)(r, { value: i, type: `conjunction` }),
          }),
        })),
      (t[2] = i),
      (t[3] = s));
  let c;
  return (
    t[4] !== a || t[5] !== s
      ? ((c = (0, N.jsx)(l, {
          type: `warning`,
          variant: `callout`,
          layout: `vertical`,
          role: `alert`,
          content: (0, N.jsxs)(`div`, {
            className: `flex flex-col gap-1 wrap-anywhere select-none`,
            children: [a, s],
          }),
        })),
        (t[4] = a),
        (t[5] = s),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
var M, N;
function P() {
  return (P = e(() => {
    ((M = f()), d(), a(), A(), (N = m()));
  }))();
}
export { y as a, _ as c, k as i, P as n, O as o, A as r, v as s, j as t };
//# sourceMappingURL=skipped-files-e53dfe3f2e69.js.map
