const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./repository-picker-81d0c9ab1959.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-295ec67e1c5d.css",
      "./repository-picker-d5faa6ad8292.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./github-connection-empty-state-38c2d949e9e4.js",
      "./plugin-settings-url-shared-636b299186d8.js",
      "./plugin-settings-url-a388503d206b.js",
      "./cloud-environment-packages-dialog-2b59e16fb2b0.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as n,
  $St as r,
  $st as i,
  F3 as a,
  FBt as o,
  HO as s,
  I3 as c,
  IO as l,
  JO as u,
  JOt as d,
  LNt as f,
  LO as p,
  OFt as m,
  PBt as h,
  Pit as g,
  Qst as _,
  Vrt as v,
  WO as y,
  XOt as b,
  Y3 as x,
  YOt as S,
  Z3 as C,
  ZSt as w,
  ck as T,
  ew as E,
  iCt as ee,
  jit as te,
  kFt as D,
  lk as ne,
  nCt as re,
  okt as ie,
  qO as ae,
  qrt as oe,
  rk as O,
  sw as k,
  tk as se,
  tkt as A,
  uk as ce,
  uw as j,
  vD as le,
  yD as ue,
  yft as M,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as N,
  A8n as de,
  Cjr as fe,
  D8n as pe,
  E8n as me,
  FF as he,
  GLn as ge,
  IIr as _e,
  LIr as ve,
  M8n as ye,
  Mcn as be,
  N8n as xe,
  P8n as Se,
  QLn as Ce,
  Qd as P,
  RF as F,
  T8n as we,
  Xft as I,
  ZLn as L,
  Zd as Te,
  _8n as Ee,
  _p as R,
  cA as z,
  ept as De,
  gp as B,
  h8n as Oe,
  imr as ke,
  j8n as V,
  k8n as Ae,
  qLn as H,
  rmr as U,
  sA as W,
  sBr as je,
  sLr as Me,
  tLr as Ne,
  u8n as Pe,
  w8n as Fe,
  wcn as G,
  xjr as Ie,
  y8n as Le,
} from "./app-initial-ad16eaadf81f.js";
import { i as Re, n as ze, r as Be, t as Ve } from "./useForm-357912521946.js";
import { a as He, r as Ue } from "./cloud-preferences-9ffa0fef6409.js";
import { n as We, t as Ge } from "./settings-unsaved-changes-dialog-ffd581d4a9b5.js";
function Ke(e) {
  let t = (0, Je.c)(9),
    { form: r, isPending: i } = e,
    a = ie(),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, K.jsx)(A, {
        id: `settings.cloudEnvironments.sharing.onlyMe`,
        defaultMessage: `Only me`,
        description: `Label for an environment visible only to its owner`,
      })),
      (t[0] = o))
    : (o = t[0]);
  let s = o,
    c;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, K.jsx)(A, {
        id: `settings.cloudEnvironments.editor.sharing.workspace`,
        defaultMessage: `Shared with workspace`,
        description: `Label for an environment visible to people in the current workspace`,
      })),
      (t[1] = c))
    : (c = t[1]);
  let l = c,
    u;
  t[2] !== r || t[3] !== a || t[4] !== i
    ? ((u = (e) =>
        (0, K.jsxs)(W, {
          children: [
            (0, K.jsx)(W.Header, {
              title: (0, K.jsx)(A, {
                id: `settings.cloudEnvironments.editor.sharing`,
                defaultMessage: `Sharing`,
                description: `Heading for cloud environment sharing settings`,
              }),
            }),
            (0, K.jsx)(W.Content, {
              children: (0, K.jsxs)(n, {
                children: [
                  (0, K.jsx)(k, {
                    label: (0, K.jsx)(A, {
                      id: `settings.cloudEnvironments.editor.sharing.visibility`,
                      defaultMessage: `Visibility`,
                      description: `Label for cloud environment visibility`,
                    }),
                    description:
                      e.shareSettings === `workspace`
                        ? (0, K.jsx)(A, {
                            id: `settings.cloudEnvironments.sharing.permissions`,
                            defaultMessage: `Workspace members can launch chats with this environment. Only you, ChatGPT Workspace Admins, and any additional editors can make changes.`,
                            description: `Explains who can use and edit a workspace-shared cloud environment`,
                          })
                        : void 0,
                    control: (0, K.jsx)(se, {
                      triggerButton: (0, K.jsx)(he, {
                        "aria-label": a.formatMessage({
                          id: `settings.cloudEnvironments.editor.sharing.visibility.aria`,
                          defaultMessage: `Environment visibility`,
                          description: `Accessible label for cloud environment visibility`,
                        }),
                        disabled: i,
                        children: e.shareSettings === `private` ? s : l,
                      }),
                      children: (0, K.jsxs)(O.RadioGroup, {
                        value: e.shareSettings,
                        children: [
                          (0, K.jsx)(O.RadioItem, {
                            disabled: i,
                            value: `private`,
                            onSelect: () => r.setFieldValue(`shareSettings`, `private`),
                            SubText: (0, K.jsx)(A, {
                              id: `settings.cloudEnvironments.sharing.private.description`,
                              defaultMessage: `Visible only to you`,
                              description: `Explains the Only me environment visibility option`,
                            }),
                            children: s,
                          }),
                          (0, K.jsx)(O.RadioItem, {
                            disabled: i,
                            value: `workspace`,
                            onSelect: () => r.setFieldValue(`shareSettings`, `workspace`),
                            SubText: (0, K.jsx)(A, {
                              id: `settings.cloudEnvironments.sharing.workspace.description`,
                              defaultMessage: `Visible to people in your workspace`,
                              description: `Explains the Workspace environment visibility option`,
                            }),
                            children: l,
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, K.jsx)(k, {
                    variant: `stacked`,
                    label: (0, K.jsx)(A, {
                      id: `settings.cloudEnvironments.editor.sharing.editors`,
                      defaultMessage: `Add additional editors`,
                      description: `Label for additional cloud environment editors`,
                    }),
                    description:
                      e.shareSettings === `workspace`
                        ? (0, K.jsx)(A, {
                            id: `settings.cloudEnvironments.sharing.editors.description`,
                            defaultMessage: `Add one email per line. Users will be able to edit or delete this environment, or add and remove editors. The environment creator, and ChatGPT Workspace Admins, always have edit access.`,
                            description: `Explains the permissions granted to additional editors of a shared cloud environment`,
                          })
                        : (0, K.jsx)(A, {
                            id: `settings.cloudEnvironments.sharing.editors.private`,
                            defaultMessage: `Share this environment with your workspace to add editors`,
                            description: `Explains why adding editors is disabled for a private cloud environment and how to enable it`,
                          }),
                    control: (0, K.jsx)(Ce, {
                      "aria-invalid": !!ye(e).shareTargets,
                      "aria-label": a.formatMessage({
                        id: `settings.cloudEnvironments.editor.sharing.editors.aria`,
                        defaultMessage: `Additional editors`,
                        description: `Accessible label for the list of additional cloud environment editors, entered one email address per line`,
                      }),
                      autoResize: !0,
                      disabled: i || e.shareSettings === `private`,
                      placeholder: a.formatMessage({
                        id: `settings.cloudEnvironments.editor.sharing.editors.placeholder`,
                        defaultMessage: `user@example.com`,
                        description: `Example email address in the additional cloud environment editors field`,
                      }),
                      rows: 3,
                      value: e.shareTargets.join(`
`),
                      variant: `compact`,
                      onChange: (e) =>
                        r.setFieldValue(
                          `shareTargets`,
                          e.target.value === ``
                            ? []
                            : e.target.value.split(`
`),
                        ),
                    }),
                  }),
                ],
              }),
            }),
            ye(e).shareTargets
              ? (0, K.jsx)(W.Footer, {
                  children: (0, K.jsx)(`span`, {
                    role: `alert`,
                    className: `text-danger`,
                    children: (0, K.jsx)(A, {
                      id: `settings.cloudEnvironments.sharing.invalidEmail`,
                      defaultMessage: `Enter a valid email address for each editor`,
                      description: `Validation message for invalid additional-editor email addresses in a cloud environment`,
                    }),
                  }),
                })
              : null,
          ],
        })),
      (t[2] = r),
      (t[3] = a),
      (t[4] = i),
      (t[5] = u))
    : (u = t[5]);
  let d;
  return (
    t[6] !== r.Subscribe || t[7] !== u
      ? ((d = (0, K.jsx)(r.Subscribe, { selector: qe, children: u })),
        (t[6] = r.Subscribe),
        (t[7] = u),
        (t[8] = d))
      : (d = t[8]),
    d
  );
}
function qe(e) {
  return e.values;
}
var Je, K;
function Ye() {
  return (Ye = e(() => {
    ((Je = h()), b(), T(), N(), z(), j(), F(), E(), V(), (K = f()));
  }))();
}
function q(e) {
  let t = (0, Xe.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Ze.jsx)(`div`, { className: `w-72 max-w-full`, children: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
var Xe, Ze;
function Qe() {
  return (Qe = e(() => {
    ((Xe = h()), (Ze = f()));
  }))();
}
function $e(e) {
  let t = [];
  for (let n of e.split(/\r?\n/)) {
    let e = n.trim();
    if (!e || e.startsWith(`#`) || e.startsWith(`;`)) continue;
    let r = /^(?:export\s+)?([\w.-]+)\s*=\s*(.*)$/.exec(e);
    if (r == null) return [];
    let i = r[2];
    if (i.startsWith(`"`) || i.startsWith(`'`)) {
      let e = /^(["'])(.*)\1\s*(?:#.*)?$/.exec(i);
      if (e == null) return [];
      i = e[2];
    } else i = i.replace(/(^|[^\\])#.*$/, `$1`).trim();
    t.push({ key: r[1], value: i });
  }
  return t;
}
function et(e) {
  let t = (0, at.c)(8),
    { form: n, isPending: r, showDomainScopedSecrets: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, J.jsx)(W.Header, {
        title: (0, J.jsx)(A, {
          id: `settings.cloudEnvironments.editor.variables`,
          defaultMessage: `Variables and secrets`,
          description: `Heading for cloud environment variables and secrets`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] !== n || t[2] !== r || t[3] !== i
    ? ((o = (e) => {
        let t = ye(e);
        return (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsx)(nt, {
              entries: e.environmentVariables,
              hideLanguageVersions: e.machineId === Fe,
              error: t.environmentVariables
                ? (0, J.jsx)(A, {
                    id: `settings.cloudEnvironments.editor.variables.invalid`,
                    defaultMessage: `Variable names and values are required, and names must be unique`,
                    description: `Validation message for invalid cloud environment variables`,
                  })
                : void 0,
              isPending: r,
              label: (0, J.jsx)(A, {
                id: `settings.cloudEnvironments.editor.environmentVariables`,
                defaultMessage: `Environment variables`,
                description: `Label for cloud environment variables`,
              }),
              onChange: (e) => n.setFieldValue(`environmentVariables`, e),
            }),
            (0, J.jsx)(rt, {
              entries: e.secrets,
              domainScoped: e.enableAuthtranslator,
              showDomainScopedSecrets: i,
              onDomainScopedChange: (e) => n.setFieldValue(`enableAuthtranslator`, e),
              error: t.secrets
                ? (0, J.jsx)(A, {
                    id: `settings.cloudEnvironments.editor.secrets.invalid`,
                    defaultMessage: `Secret keys and values are required, and key and domain combinations must be unique. Renaming a global secret requires a new value`,
                    description: `Validation message for invalid cloud environment secrets`,
                  })
                : void 0,
              isPending: r,
              onChange: (e) => n.setFieldValue(`secrets`, e),
            }),
          ],
        });
      }),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = o))
    : (o = t[4]);
  let s;
  return (
    t[5] !== n.Subscribe || t[6] !== o
      ? ((s = (0, J.jsxs)(W, {
          children: [
            a,
            (0, J.jsx)(W.Content, { children: (0, J.jsx)(n.Subscribe, { selector: tt, children: o }) }),
          ],
        })),
        (t[5] = n.Subscribe),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function tt(e) {
  return e.values;
}
function nt(e) {
  let t = (0, at.c)(22),
    { entries: r, hideLanguageVersions: i, error: a, isPending: o, label: s, onChange: c } = e,
    l = ie(),
    u;
  t[0] === a
    ? (u = t[1])
    : ((u =
        a ??
        (0, J.jsx)(A, {
          id: `settings.cloudEnvironments.variables.paste`,
          defaultMessage: `Paste .env content into a variable name to add multiple values`,
          description: `Explains how to paste multiple environment-variable assignments into the cloud environment form`,
        })),
      (t[0] = a),
      (t[1] = u));
  let d;
  t[2] !== r || t[3] !== c
    ? ((d = () => c([...r, { key: ``, value: `` }])), (t[2] = r), (t[3] = c), (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, J.jsx)(A, {
        id: `settings.cloudEnvironments.editor.addVariable`,
        defaultMessage: `Add variable`,
        description: `Button label for adding a cloud environment variable`,
      })),
      (t[5] = f))
    : (f = t[5]);
  let p;
  t[6] !== o || t[7] !== d
    ? ((p = (0, J.jsx)(x, {
        color: `secondary`,
        disabled: o,
        onClick: d,
        size: `toolbar`,
        type: `button`,
        children: f,
      })),
      (t[6] = o),
      (t[7] = d),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== s || t[10] !== u || t[11] !== p
    ? ((m = (0, J.jsx)(k, { description: u, label: s, control: p })),
      (t[9] = s),
      (t[10] = u),
      (t[11] = p),
      (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] !== r || t[14] !== i || t[15] !== l || t[16] !== o || t[17] !== c
    ? ((h = r.map((e, t) =>
        i &&
        e.value.trim() !== `` &&
        !r.some((n, r) => r !== t && n.key.trim() === e.key.trim()) &&
        xe.some((t) => {
          let { variable: n } = t;
          return n === e.key.trim();
        })
          ? null
          : (0, J.jsx)(
              k,
              {
                label: null,
                variant: `nested`,
                control: (0, J.jsxs)(`div`, {
                  className: `grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2`,
                  children: [
                    (0, J.jsx)(q, {
                      children: (0, J.jsx)(L, {
                        "aria-label": l.formatMessage({
                          id: `settings.cloudEnvironments.editor.variable.name`,
                          defaultMessage: `Variable name`,
                          description: `Accessible label for a cloud environment variable name`,
                        }),
                        disabled: o,
                        value: e.key,
                        onPaste: (e) => it(e, t, r, c),
                        onChange: (e) => c(r.map((n, r) => (r === t ? { ...n, key: e.target.value } : n))),
                      }),
                    }),
                    (0, J.jsx)(q, {
                      children: (0, J.jsx)(L, {
                        "aria-label": l.formatMessage({
                          id: `settings.cloudEnvironments.editor.variable.value`,
                          defaultMessage: `Variable value`,
                          description: `Accessible label for a cloud environment variable value`,
                        }),
                        disabled: o,
                        value: e.value,
                        onChange: (e) => c(r.map((n, r) => (r === t ? { ...n, value: e.target.value } : n))),
                      }),
                    }),
                    (0, J.jsx)(x, {
                      color: `secondary`,
                      disabled: o,
                      onClick: () => c(r.filter((e, n) => n !== t)),
                      size: `toolbar`,
                      type: `button`,
                      children: (0, J.jsx)(A, {
                        id: `settings.cloudEnvironments.editor.removeVariable`,
                        defaultMessage: `Remove`,
                        description: `Button label for removing a cloud environment variable`,
                      }),
                    }),
                  ],
                }),
              },
              t,
            ),
      )),
      (t[13] = r),
      (t[14] = i),
      (t[15] = l),
      (t[16] = o),
      (t[17] = c),
      (t[18] = h))
    : (h = t[18]);
  let g;
  return (
    t[19] !== m || t[20] !== h
      ? ((g = (0, J.jsxs)(n, { children: [m, h] })), (t[19] = m), (t[20] = h), (t[21] = g))
      : (g = t[21]),
    g
  );
}
function rt(e) {
  let t = (0, at.c)(29),
    {
      entries: r,
      error: i,
      isPending: a,
      domainScoped: o,
      showDomainScopedSecrets: s,
      onDomainScopedChange: c,
      onChange: l,
    } = e,
    u = ie(),
    d;
  t[0] === i
    ? (d = t[1])
    : ((d =
        i ??
        (0, J.jsx)(A, {
          id: `settings.cloudEnvironments.secrets.paste`,
          defaultMessage: `Paste .env content into a secret key to add multiple secrets`,
          description: `Explains how to paste multiple secrets into the cloud environment form without exposing secret values`,
        })),
      (t[0] = i),
      (t[1] = d));
  let f;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, J.jsx)(A, {
        id: `settings.cloudEnvironments.editor.secrets`,
        defaultMessage: `Secrets`,
        description: `Label for cloud environment secrets`,
      })),
      (t[2] = f))
    : (f = t[2]);
  let p;
  t[3] !== r || t[4] !== l
    ? ((p = () => l([...r, { key: ``, value: `` }])), (t[3] = r), (t[4] = l), (t[5] = p))
    : (p = t[5]);
  let m;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, J.jsx)(A, {
        id: `settings.cloudEnvironments.editor.addSecret`,
        defaultMessage: `Add secret`,
        description: `Button label for adding a cloud environment secret`,
      })),
      (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] !== a || t[8] !== p
    ? ((h = (0, J.jsx)(x, {
        color: `secondary`,
        disabled: a,
        onClick: p,
        size: `toolbar`,
        type: `button`,
        children: m,
      })),
      (t[7] = a),
      (t[8] = p),
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] !== d || t[11] !== h
    ? ((g = (0, J.jsx)(k, { description: d, label: f, control: h })), (t[10] = d), (t[11] = h), (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] !== o || t[14] !== u || t[15] !== a || t[16] !== c || t[17] !== s
    ? ((_ = s
        ? (0, J.jsx)(k, {
            label: (0, J.jsx)(A, {
              id: `settings.cloudEnvironments.secrets.domainScoped`,
              defaultMessage: `Domain-scoped secrets`,
              description: `Label for limiting cloud environment secrets to requests to their configured domains`,
            }),
            description: o
              ? (0, J.jsx)(A, {
                  id: `settings.cloudEnvironments.secrets.domainScoped.enabled`,
                  defaultMessage: `During tasks, secrets are sent only to their configured domain. Secrets without a domain are available only to setup scripts.`,
                  description: `Explains that domain-scoped cloud secrets without a domain are not injected during tasks, while setup scripts still receive real secret values`,
                })
              : (0, J.jsx)(A, {
                  id: `settings.cloudEnvironments.secrets.domainScoped.description`,
                  defaultMessage: `Limit each secret to requests to a specific domain`,
                  description: `Explains the optional domain-scoped secret mode in cloud environment settings`,
                }),
            control: (0, J.jsx)(ne, {
              ariaLabel: u.formatMessage({
                id: `settings.cloudEnvironments.secrets.domainScoped.aria`,
                defaultMessage: `Domain-scoped secrets`,
                description: `Accessible label for enabling domain-scoped secrets in a cloud environment`,
              }),
              checked: o,
              disabled: a,
              onChange: c,
            }),
          })
        : null),
      (t[13] = o),
      (t[14] = u),
      (t[15] = a),
      (t[16] = c),
      (t[17] = s),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  t[19] !== o || t[20] !== r || t[21] !== u || t[22] !== a || t[23] !== l
    ? ((v = r.map((e, t) =>
        (0, J.jsx)(
          k,
          {
            label: null,
            variant: `nested`,
            control: (0, J.jsxs)(`div`, {
              className: `grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2`,
              children: [
                (0, J.jsx)(q, {
                  children: (0, J.jsx)(L, {
                    "aria-label": u.formatMessage({
                      id: `settings.cloudEnvironments.editor.secret.name`,
                      defaultMessage: `Secret key`,
                      description: `Accessible label for a cloud environment secret key`,
                    }),
                    disabled: a,
                    value: e.key,
                    onPaste: (e) => it(e, t, r, l),
                    onChange: (e) => l(r.map((n, r) => (r === t ? { ...n, key: e.target.value } : n))),
                  }),
                }),
                (0, J.jsx)(q, {
                  children: (0, J.jsx)(L, {
                    "aria-label": u.formatMessage({
                      id: `settings.cloudEnvironments.editor.secret.value`,
                      defaultMessage: `Secret value`,
                      description: `Accessible label for a cloud environment secret value`,
                    }),
                    disabled: a,
                    placeholder: e.previousKey
                      ? u.formatMessage({
                          id: `settings.cloudEnvironments.editor.secret.keepPlaceholder`,
                          defaultMessage: `Leave unchanged to keep`,
                          description: `Placeholder for an existing cloud environment secret value`,
                        })
                      : void 0,
                    type: `password`,
                    value: e.value,
                    onChange: (e) => l(r.map((n, r) => (r === t ? { ...n, value: e.target.value } : n))),
                  }),
                }),
                (0, J.jsx)(x, {
                  color: `secondary`,
                  disabled: a,
                  onClick: () => l(r.filter((e, n) => n !== t)),
                  size: `toolbar`,
                  type: `button`,
                  children: (0, J.jsx)(A, {
                    id: `settings.cloudEnvironments.editor.removeSecret`,
                    defaultMessage: `Remove`,
                    description: `Button label for removing a cloud environment secret`,
                  }),
                }),
                o
                  ? (0, J.jsx)(`div`, {
                      className: `col-span-2`,
                      children: (0, J.jsx)(q, {
                        children: (0, J.jsx)(L, {
                          "aria-label": u.formatMessage({
                            id: `settings.cloudEnvironments.editor.secret.domain`,
                            defaultMessage: `Secret domain`,
                            description: `Accessible label for a cloud environment secret domain`,
                          }),
                          disabled: a,
                          placeholder: u.formatMessage({
                            id: `settings.cloudEnvironments.editor.secret.domainPlaceholder`,
                            defaultMessage: `Optional domain`,
                            description: `Placeholder for an optional cloud environment secret domain`,
                          }),
                          value: e.domain ?? ``,
                          onChange: (e) =>
                            l(r.map((n, r) => (r === t ? { ...n, domain: e.target.value } : n))),
                        }),
                      }),
                    })
                  : null,
              ],
            }),
          },
          `${e.previousKey ?? `new`}-${t}`,
        ),
      )),
      (t[19] = o),
      (t[20] = r),
      (t[21] = u),
      (t[22] = a),
      (t[23] = l),
      (t[24] = v))
    : (v = t[24]);
  let y;
  return (
    t[25] !== g || t[26] !== _ || t[27] !== v
      ? ((y = (0, J.jsxs)(n, { children: [g, _, v] })), (t[25] = g), (t[26] = _), (t[27] = v), (t[28] = y))
      : (y = t[28]),
    y
  );
}
function it(e, t, n, r) {
  let i = $e(e.clipboardData.getData(`text/plain`));
  i.length !== 0 &&
    (e.preventDefault(), r([...n.slice(0, t), { ...n[t], ...i[0] }, ...i.slice(1), ...n.slice(t + 1)]));
}
var at, J;
function ot() {
  return (ot = e(() => {
    ((at = h()), b(), C(), N(), ce(), z(), j(), E(), Qe(), V(), Se(), (J = f()));
  }))();
}
function st(e) {
  let t = (0, lt.c)(18),
    { form: r, isPending: i, inDialog: a } = e,
    o = a !== void 0 && a,
    s = ie(),
    c = (0, ut.useId)(),
    { accountId: l, planAtLogin: u } = ke(),
    d;
  t[0] === u ? (d = t[1]) : ((d = Me(u) || je(u)), (t[0] = u), (t[1] = d));
  let f = d,
    p = f && l != null,
    m;
  t[2] === p ? (m = t[3]) : ((m = { enabled: p }), (t[2] = p), (t[3] = m));
  let { data: h, isPending: g, isError: _, refetch: v } = re(_e, l ?? ``, m),
    y = f && (l == null || g),
    b = f && _,
    S = f && h != null && !h.beta_settings.codex_agent_network_access,
    C = i || y || b || S,
    w;
  t[4] !== S ||
  t[5] !== C ||
  t[6] !== c ||
  t[7] !== b ||
  t[8] !== r ||
  t[9] !== o ||
  t[10] !== s ||
  t[11] !== i ||
  t[12] !== y ||
  t[13] !== v
    ? ((w = (e) => {
        let t = e ?? { mode: `off` },
          a = ye(r.state.values).agentNetworkAccess != null,
          l = dt.find((e) => e.value === (t.preset_allowlist ?? `none`)) ?? dt[0],
          u;
        return (
          (u = y
            ? (0, Y.jsx)(A, {
                id: `settings.cloudEnvironments.network.policy.loading`,
                defaultMessage: `Checking workspace network policy…`,
                description: `Shown while workspace policy is being loaded before enabling cloud environment network controls`,
              })
            : b
              ? (0, Y.jsx)(A, {
                  id: `settings.cloudEnvironments.network.policy.error`,
                  defaultMessage: `Couldn’t check your workspace network policy`,
                  description: `Error explaining why cloud environment network controls are temporarily unavailable`,
                })
              : S
                ? (0, Y.jsx)(A, {
                    id: `settings.cloudEnvironments.network.policy.blocked`,
                    defaultMessage: `Your workspace doesn’t allow internet access after setup`,
                    description: `Explains that workspace policy disables internet access for cloud tasks after setup`,
                  })
                : t.mode === `off`
                  ? (0, Y.jsx)(A, {
                      id: `settings.cloudEnvironments.network.off.description`,
                      defaultMessage: `Internet access will be disabled after setup. Codex will only be able to use dependencies installed by the setup script.`,
                      description: `Explains that cloud task network access is disabled after setup and dependencies must be installed beforehand`,
                    })
                  : (0, Y.jsx)(A, {
                      id: `settings.cloudEnvironments.editor.network.mode.description`,
                      defaultMessage: `Controls internet access after setup completes`,
                      description: `Explanation for cloud environment network access`,
                    })),
          (0, Y.jsxs)(W, {
            children: [
              (0, Y.jsx)(W.Header, {
                title: (0, Y.jsx)(A, {
                  id: `settings.cloudEnvironments.editor.network`,
                  defaultMessage: `Agent internet access`,
                  description: `Heading for cloud environment network access`,
                }),
              }),
              (0, Y.jsxs)(W.Content, {
                children: [
                  (0, Y.jsxs)(n, {
                    children: [
                      (0, Y.jsx)(k, {
                        label: (0, Y.jsx)(A, {
                          id: `settings.cloudEnvironments.editor.network.mode`,
                          defaultMessage: `Access`,
                          description: `Label for the cloud environment network access mode`,
                        }),
                        description: u,
                        control: (0, Y.jsx)(Te, {
                          ariaLabel: s.formatMessage({
                            id: `settings.cloudEnvironments.editor.network.aria`,
                            defaultMessage: `Agent internet access`,
                            description: `Accessible label for cloud environment network access`,
                          }),
                          options: [
                            {
                              id: `off`,
                              label: (0, Y.jsx)(A, {
                                id: `settings.cloudEnvironments.network.off`,
                                defaultMessage: `Off`,
                                description: `Label for disabled cloud environment network access`,
                              }),
                              disabled: i,
                            },
                            {
                              id: `on`,
                              label: (0, Y.jsx)(A, {
                                id: `settings.cloudEnvironments.network.on`,
                                defaultMessage: `On`,
                                description: `Label for enabled cloud environment network access`,
                              }),
                              disabled: C,
                            },
                          ],
                          selectedId: t.mode === `off` ? `off` : `on`,
                          onSelect: (e) =>
                            r.setFieldValue(`agentNetworkAccess`, {
                              ...t,
                              mode: e,
                              preset_allowlist: t.preset_allowlist ?? `codex`,
                            }),
                        }),
                      }),
                      b
                        ? (0, Y.jsx)(k, {
                            label: null,
                            control: (0, Y.jsx)(x, {
                              color: `secondary`,
                              size: `toolbar`,
                              type: `button`,
                              onClick: () => void v(),
                              children: (0, Y.jsx)(A, {
                                id: `settings.cloudEnvironments.network.policy.retry`,
                                defaultMessage: `Retry`,
                                description: `Retries loading the workspace network policy for cloud environments`,
                              }),
                            }),
                          })
                        : null,
                      t.mode === `off`
                        ? null
                        : (0, Y.jsxs)(Y.Fragment, {
                            children: [
                              (0, Y.jsx)(k, {
                                label: (0, Y.jsx)(A, {
                                  id: `settings.cloudEnvironments.network.preset`,
                                  defaultMessage: `Domain access`,
                                  description: `Label for the allowed-domain preset in cloud environment network settings`,
                                }),
                                controlSizing: `grow`,
                                control: (0, Y.jsxs)(`span`, {
                                  className: `flex flex-wrap items-center justify-end gap-2`,
                                  children: [
                                    (0, Y.jsx)(se, {
                                      triggerButton: (0, Y.jsx)(he, {
                                        disabled: C,
                                        "aria-label": s.formatMessage({
                                          id: `settings.cloudEnvironments.network.preset.aria`,
                                          defaultMessage: `Domain access`,
                                          description: `Accessible label for the cloud environment allowed-domain preset`,
                                        }),
                                        children: (0, Y.jsx)(A, { ...l.label }),
                                      }),
                                      children: (0, Y.jsx)(O.RadioGroup, {
                                        value: t.preset_allowlist ?? `none`,
                                        children: dt.map((e) =>
                                          (0, Y.jsx)(
                                            O.RadioItem,
                                            {
                                              value: e.value,
                                              onSelect: () =>
                                                r.setFieldValue(`agentNetworkAccess`, {
                                                  ...t,
                                                  preset_allowlist: e.value,
                                                }),
                                              children: (0, Y.jsx)(A, { ...e.label }),
                                            },
                                            e.value,
                                          ),
                                        ),
                                      }),
                                    }),
                                    (0, Y.jsx)(ge, {
                                      appearance: `secondary`,
                                      href: `https://developers.openai.com/codex/cloud/internet-access#preset-domain-lists`,
                                      initiator: `external_link`,
                                      openTarget: o ? `external-browser` : void 0,
                                      children: (0, Y.jsx)(A, {
                                        id: `settings.cloudEnvironments.network.domainDetails`,
                                        defaultMessage: `Domain details`,
                                        description: `Link beside the domain allowlist selector in legacy cloud environment settings that opens documentation listing the domains included in each preset`,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              t.preset_allowlist === `all`
                                ? null
                                : (0, Y.jsx)(k, {
                                    label: (0, Y.jsx)(A, {
                                      id: `settings.cloudEnvironments.editor.network.allowedDomains`,
                                      defaultMessage: `Allowed domains`,
                                      description: `Label for allowed cloud environment network domains`,
                                    }),
                                    description: a
                                      ? (0, Y.jsx)(`span`, {
                                          id: c,
                                          role: `alert`,
                                          className: `text-danger`,
                                          children: (0, Y.jsx)(A, {
                                            id: `settings.cloudEnvironments.network.domains.required`,
                                            defaultMessage: `Enter at least one allowed domain, or choose a different domain preset`,
                                            description: `Validation message when custom cloud network access has no allowed domains`,
                                          }),
                                        })
                                      : (0, Y.jsx)(A, {
                                          id: `settings.cloudEnvironments.network.domains.help`,
                                          defaultMessage: `Separate domains with commas`,
                                          description: `Instructions for entering allowed domains in cloud environment network settings`,
                                        }),
                                    control: (0, Y.jsx)(q, {
                                      children: (0, Y.jsx)(L, {
                                        "aria-label": s.formatMessage({
                                          id: `settings.cloudEnvironments.editor.network.allowedDomains.aria`,
                                          defaultMessage: `Allowed domains`,
                                          description: `Accessible label for allowed cloud environment network domains`,
                                        }),
                                        disabled: C,
                                        "aria-invalid": a,
                                        "aria-describedby": a ? c : void 0,
                                        value: t.allowlist_domains ?? ``,
                                        onChange: (e) =>
                                          r.setFieldValue(`agentNetworkAccess`, {
                                            ...t,
                                            allowlist_domains: e.target.value,
                                          }),
                                      }),
                                    }),
                                  }),
                              (0, Y.jsx)(k, {
                                label: (0, Y.jsx)(A, {
                                  id: `settings.cloudEnvironments.network.methods`,
                                  defaultMessage: `Read-only HTTP methods`,
                                  description: `Label for restricting a cloud environment's allowed HTTP methods`,
                                }),
                                description: (0, Y.jsx)(A, {
                                  id: `settings.cloudEnvironments.network.methods.description`,
                                  defaultMessage: `Allow only GET, HEAD, and OPTIONS`,
                                  description: `Explains which HTTP methods remain available when the cloud environment method restriction is enabled`,
                                }),
                                control: (0, Y.jsx)(ne, {
                                  ariaLabel: s.formatMessage({
                                    id: `settings.cloudEnvironments.network.methods.aria`,
                                    defaultMessage: `Read-only HTTP methods`,
                                    description: `Accessible label for restricting HTTP methods in a cloud environment`,
                                  }),
                                  checked: t.safe_methods_only ?? !1,
                                  disabled: C,
                                  onChange: (e) =>
                                    r.setFieldValue(`agentNetworkAccess`, { ...t, safe_methods_only: e }),
                                }),
                              }),
                            ],
                          }),
                    ],
                  }),
                  null,
                  t.mode !== `off` && !y && !b && !S
                    ? (0, Y.jsx)(le, {
                        variant: `settings`,
                        layout: `vertical`,
                        type: `caution`,
                        ariaLive: `polite`,
                        title: (0, Y.jsx)(A, {
                          id: `settings.cloudEnvironments.network.risks.title`,
                          defaultMessage: `Enabling internet access exposes your environment to security risks`,
                          description: `Warning title shown when agent internet access is enabled for a legacy cloud environment`,
                        }),
                        content: (0, Y.jsx)(A, {
                          id: `settings.cloudEnvironments.network.risks.description`,
                          defaultMessage: `These include prompt injection, exfiltration of code or secrets, inclusion of malware or vulnerabilities, or use of content with license restrictions. <docs>See the docs</docs> for an example exfiltration attack.{br}{br}To mitigate risks, only allow necessary domains and methods, and always review Codex's outputs and work log.`,
                          description: `Warning body shown when agent internet access is enabled for a legacy cloud environment. The docs link opens the security risks documentation; br separates the risk explanation from advice for reducing those risks.`,
                          values: {
                            br: (0, Y.jsx)(`br`, {}),
                            docs: (e) =>
                              (0, Y.jsx)(ge, {
                                appearance: `inherit`,
                                underline: `always`,
                                href: `https://developers.openai.com/codex/cloud/internet-access#risks-of-agent-internet-access`,
                                initiator: `external_link`,
                                openTarget: o ? `external-browser` : void 0,
                                children: e,
                              }),
                          },
                        }),
                      })
                    : null,
                ],
              }),
            ],
          })
        );
      }),
      (t[4] = S),
      (t[5] = C),
      (t[6] = c),
      (t[7] = b),
      (t[8] = r),
      (t[9] = o),
      (t[10] = s),
      (t[11] = i),
      (t[12] = y),
      (t[13] = v),
      (t[14] = w))
    : (w = t[14]);
  let T;
  return (
    t[15] !== r.Subscribe || t[16] !== w
      ? ((T = (0, Y.jsx)(r.Subscribe, { selector: ct, children: w })),
        (t[15] = r.Subscribe),
        (t[16] = w),
        (t[17] = T))
      : (T = t[17]),
    T
  );
}
function ct(e) {
  return e.values.agentNetworkAccess;
}
var lt, ut, Y, dt;
function ft() {
  return (ft = e(() => {
    ((lt = h()),
      w(),
      (ut = o()),
      b(),
      ve(),
      U(),
      ue(),
      C(),
      T(),
      H(),
      P(),
      N(),
      ce(),
      z(),
      j(),
      F(),
      E(),
      Ne(),
      Qe(),
      V(),
      (Y = f()),
      (dt = [
        {
          value: `none`,
          label: d({
            id: `settings.cloudEnvironments.network.preset.none`,
            defaultMessage: `Custom domains`,
            description: `Allow only the domains entered below in the cloud environment network settings`,
          }),
        },
        {
          value: `codex`,
          label: d({
            id: `settings.cloudEnvironments.network.preset.dependencies`,
            defaultMessage: `Common dependencies`,
            description: `Allow the standard coding dependency domains in the cloud environment network settings`,
          }),
        },
        {
          value: `all`,
          label: d({
            id: `settings.cloudEnvironments.network.preset.all`,
            defaultMessage: `All domains`,
            description: `Allow all domains in the cloud environment network settings`,
          }),
        },
      ]));
  }))();
}
function pt(e) {
  let t = (0, gt.c)(8),
    { form: n, isPending: r, preferredConnectorId: i } = e,
    [a, o] = (0, _t.useState)(!1),
    s;
  t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i
    ? ((s = (e) => {
        let { githubConnectorId: t, repositoryName: s } = e;
        return (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(he, {
              disabled: r,
              onClick: () => o(!0),
              children:
                s ||
                (0, X.jsx)(A, {
                  id: `settings.cloudEnvironments.editor.repository.select`,
                  defaultMessage: `Select a repository`,
                  description: `Placeholder for the cloud environment repository selector`,
                }),
            }),
            a
              ? (0, X.jsx)(ht, {
                  isPending: r,
                  preferredConnectorId: t ?? i,
                  onClose: () => o(!1),
                  onSelect: (e) => {
                    let { connectorId: t, repository: r } = e;
                    (n.setFieldValue(`label`, me(r.repository_full_name, n.getFieldValue(`label`), s)),
                      n.setFieldValue(`githubConnectorId`, t),
                      n.setFieldValue(`repositoryId`, r.id),
                      n.setFieldValue(`repositoryName`, r.repository_full_name),
                      o(!1));
                  },
                })
              : null,
          ],
        });
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = i),
      (t[4] = s))
    : (s = t[4]);
  let c;
  return (
    t[5] !== n.Subscribe || t[6] !== s
      ? ((c = (0, X.jsx)(n.Subscribe, { selector: mt, children: s })),
        (t[5] = n.Subscribe),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function mt(e) {
  return { githubConnectorId: e.values.githubConnectorId, repositoryName: e.values.repositoryName };
}
function ht(e) {
  let t = (0, gt.c)(19),
    { isPending: n, preferredConnectorId: r, onClose: i, onSelect: a } = e,
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = (e) => {
        e || i();
      }),
      (t[0] = i),
      (t[1] = o));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = []), (t[2] = s)) : (s = t[2]);
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(ae, {
        className: `heading-lg font-semibold`,
        children: (0, X.jsx)(A, {
          id: `settings.cloudEnvironments.editor.repository.dialogTitle`,
          defaultMessage: `Choose a repository`,
          description: `Title of the repository selection dialog for a legacy cloud environment`,
        }),
      })),
      (t[3] = c))
    : (c = t[3]);
  let u;
  t[4] === a
    ? (u = t[5])
    : ((u = (e) => {
        let t = e[0];
        t != null && a(t);
      }),
      (t[4] = a),
      (t[5] = u));
  let d;
  t[6] !== n || t[7] !== r || t[8] !== u
    ? ((d = (0, X.jsx)(vt, {
        disabled: n,
        preferredConnectorId: r,
        selectionMode: `single`,
        selectedRepositories: s,
        header: c,
        onChange: u,
      })),
      (t[6] = n),
      (t[7] = r),
      (t[8] = u),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsx)(A, {
        id: `settings.cloudEnvironments.editor.repository.cancel`,
        defaultMessage: `Cancel`,
        description: `Closes the repository dialog without changing the cloud environment`,
      })),
      (t[10] = f))
    : (f = t[10]);
  let m;
  t[11] === i
    ? (m = t[12])
    : ((m = (0, X.jsx)(p, {
        expandSingleButton: !1,
        children: (0, X.jsx)(x, {
          color: `secondary`,
          onClick: i,
          size: `dialog`,
          type: `button`,
          children: f,
        }),
      })),
      (t[11] = i),
      (t[12] = m));
  let h;
  t[13] !== d || t[14] !== m
    ? ((h = (0, X.jsxs)(l, { size: `viewport`, children: [d, m] })), (t[13] = d), (t[14] = m), (t[15] = h))
    : (h = t[15]);
  let g;
  return (
    t[16] !== o || t[17] !== h
      ? ((g = (0, X.jsx)(y, { open: !0, size: `beacon`, onOpenChange: o, children: h })),
        (t[16] = o),
        (t[17] = h),
        (t[18] = g))
      : (g = t[18]),
    g
  );
}
var gt, _t, X, vt;
function yt() {
  return (yt = e(() => {
    ((gt = h()),
      (_t = o()),
      b(),
      C(),
      u(),
      s(),
      R(),
      a(),
      F(),
      V(),
      (X = f()),
      D(),
      (vt = c(
        async () =>
          (
            await m(
              async () => {
                let { CloudEnvironmentRepositoryPicker: e } = await import(
                  `./repository-picker-81d0c9ab1959.js`
                );
                return { CloudEnvironmentRepositoryPicker: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
              import.meta.url,
            )
          ).CloudEnvironmentRepositoryPicker,
        {
          fallback: (0, X.jsx)(B, {
            layout: `settings-row`,
            children: (0, X.jsx)(ae, {
              children: (0, X.jsx)(A, {
                id: `settings.cloudEnvironments.editor.repository.loading`,
                defaultMessage: `Loading repositories…`,
                description: `Shown while the cloud environment repository picker loads`,
              }),
            }),
          }),
          errorFallback: (0, X.jsx)(B, {
            layout: `settings-row`,
            children: (0, X.jsx)(ae, {
              children: (0, X.jsx)(A, {
                id: `settings.cloudEnvironments.editor.repository.loadFailed`,
                defaultMessage: `Couldn’t open the repository picker. Reload the app and try again`,
                description: `Recovery instructions when the repository picker code could not be downloaded after retrying`,
              }),
            }),
          }),
        },
      )));
  }))();
}
function bt(e) {
  let t = (0, St.c)(7),
    { form: r, isPending: i } = e,
    a = ie(),
    o;
  t[0] !== r || t[1] !== a || t[2] !== i
    ? ((o = (e) => {
        let t = e.autoSetupSettings?.use_auto_setup ?? e.setupCommands === ``,
          o = e.cacheSettings?.post_setup_cache_enabled ?? !1;
        return (0, Z.jsxs)(W, {
          children: [
            (0, Z.jsx)(W.Header, {
              title: (0, Z.jsx)(A, {
                id: `settings.cloudEnvironments.editor.setup.title`,
                defaultMessage: `Code execution`,
                description: `Heading for dependency installation and container caching when configuring a cloud environment`,
              }),
            }),
            (0, Z.jsx)(W.Content, {
              children: (0, Z.jsxs)(n, {
                children: [
                  (0, Z.jsx)(k, {
                    label: (0, Z.jsx)(A, {
                      id: `settings.cloudEnvironments.editor.runtime.cache`,
                      defaultMessage: `Container Caching`,
                      description: `Label for cloud environment post-setup caching`,
                    }),
                    description: (0, Z.jsx)(A, {
                      id: `settings.cloudEnvironments.editor.setup.cache.description`,
                      defaultMessage: `Speed up container start by caching state after running the setup script. Maintenance scripts are run before every task.`,
                      description: `Explains why cloud environment setup can be cached`,
                    }),
                    control: (0, Z.jsx)(ne, {
                      ariaLabel: a.formatMessage({
                        id: `settings.cloudEnvironments.editor.runtime.cache.aria`,
                        defaultMessage: `Container Caching`,
                        description: `Accessible label for cloud environment post-setup caching`,
                      }),
                      checked: o,
                      disabled: i,
                      onChange: (e) => r.setFieldValue(`cacheSettings`, { post_setup_cache_enabled: e }),
                    }),
                  }),
                  (0, Z.jsx)(k, {
                    label: (0, Z.jsx)(A, {
                      id: `settings.cloudEnvironments.editor.setup.mode`,
                      defaultMessage: `Setup script`,
                      description: `Label for choosing automatic or manual dependency installation in a cloud environment`,
                    }),
                    description: t
                      ? (0, Z.jsx)(A, {
                          id: `settings.cloudEnvironments.editor.setup.automatic.description`,
                          defaultMessage: `Runs the install commands like npm install for common package managers`,
                          description: `Explains automatic dependency installation in a cloud environment`,
                        })
                      : (0, Z.jsx)(A, {
                          id: `settings.cloudEnvironments.editor.setup.manual.description`,
                          defaultMessage: `Run your own setup script after the repository is cloned`,
                          description: `Explains manual dependency installation in a cloud environment`,
                        }),
                    control: (0, Z.jsx)(Te, {
                      ariaLabel: a.formatMessage({
                        id: `settings.cloudEnvironments.editor.setup.mode.aria`,
                        defaultMessage: `Setup script mode`,
                        description: `Accessible label for automatic or manual cloud environment setup`,
                      }),
                      selectedId: t ? `automatic` : `manual`,
                      options: [
                        {
                          id: `automatic`,
                          disabled: i,
                          label: (0, Z.jsx)(A, {
                            id: `settings.cloudEnvironments.editor.setup.automatic`,
                            defaultMessage: `Automatic`,
                            description: `Choose automatic dependency installation for a cloud environment`,
                          }),
                        },
                        {
                          id: `manual`,
                          disabled: i,
                          label: (0, Z.jsx)(A, {
                            id: `settings.cloudEnvironments.editor.setup.manual`,
                            defaultMessage: `Manual`,
                            description: `Choose a custom setup script for a cloud environment`,
                          }),
                        },
                      ],
                      onSelect: (e) =>
                        r.setFieldValue(`autoSetupSettings`, { use_auto_setup: e === `automatic` }),
                    }),
                  }),
                  t
                    ? null
                    : (0, Z.jsx)(k, {
                        variant: `stacked`,
                        label: null,
                        description: (0, Z.jsx)(A, {
                          id: `settings.cloudEnvironments.editor.setup.network`,
                          defaultMessage: `Network access is available during setup, even when agent internet access is off`,
                          description: `Explains that the cloud environment setup script can download dependencies regardless of the agent network setting`,
                        }),
                        control: (0, Z.jsx)(Ce, {
                          "aria-label": a.formatMessage({
                            id: `settings.cloudEnvironments.editor.setup.aria`,
                            defaultMessage: `Setup script`,
                            description: `Accessible label for a cloud environment setup script`,
                          }),
                          autoResize: !0,
                          disabled: i,
                          rows: 3,
                          value: e.setupCommands,
                          variant: `compact`,
                          onChange: (e) => r.setFieldValue(`setupCommands`, e.target.value),
                        }),
                      }),
                  o && !t
                    ? (0, Z.jsx)(k, {
                        variant: `stacked`,
                        label: (0, Z.jsx)(A, {
                          id: `settings.cloudEnvironments.editor.maintenance`,
                          defaultMessage: `Maintenance script`,
                          description: `Label for a cloud environment maintenance script`,
                        }),
                        description: (0, Z.jsx)(A, {
                          id: `settings.cloudEnvironments.editor.maintenance.description`,
                          defaultMessage: `Runs before every task when using a cached container`,
                          description: `Explanation for the cloud environment maintenance script`,
                        }),
                        control: (0, Z.jsx)(Ce, {
                          "aria-label": a.formatMessage({
                            id: `settings.cloudEnvironments.editor.maintenance.aria`,
                            defaultMessage: `Maintenance script`,
                            description: `Accessible label for a cloud environment maintenance script`,
                          }),
                          autoResize: !0,
                          disabled: i,
                          rows: 3,
                          value: e.maintenanceSetupCommands,
                          variant: `compact`,
                          onChange: (e) => r.setFieldValue(`maintenanceSetupCommands`, e.target.value),
                        }),
                      })
                    : null,
                ],
              }),
            }),
          ],
        });
      }),
      (t[0] = r),
      (t[1] = a),
      (t[2] = i),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] !== r.Subscribe || t[5] !== o
      ? ((s = (0, Z.jsx)(r.Subscribe, { selector: xt, children: o })),
        (t[4] = r.Subscribe),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function xt(e) {
  return e.values;
}
var St, Z;
function Ct() {
  return (Ct = e(() => {
    ((St = h()), b(), P(), N(), ce(), z(), j(), E(), (Z = f()));
  }))();
}
function wt(e) {
  let t = (0, kt.c)(14),
    {
      ref: n,
      environment: r,
      initialRepository: i,
      inDialog: a,
      requestContext: o,
      onCancel: s,
      onSaved: c,
    } = e,
    l = a !== void 0 && a;
  if (r == null) {
    let e;
    return (
      t[0] !== l || t[1] !== i || t[2] !== s || t[3] !== c || t[4] !== n || t[5] !== o
        ? ((e = (0, $.jsx)(Tt, {
            ref: n,
            initialRepository: i,
            inDialog: l,
            requestContext: o,
            onCancel: s,
            onSaved: c,
          })),
          (t[0] = l),
          (t[1] = i),
          (t[2] = s),
          (t[3] = c),
          (t[4] = n),
          (t[5] = o),
          (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  let u;
  return (
    t[7] !== r || t[8] !== l || t[9] !== s || t[10] !== c || t[11] !== n || t[12] !== o
      ? ((u = (0, $.jsx)(Et, {
          ref: n,
          environment: r,
          inDialog: l,
          requestContext: o,
          onCancel: s,
          onSaved: c,
          preferredConnectorId: null,
        })),
        (t[7] = r),
        (t[8] = l),
        (t[9] = s),
        (t[10] = c),
        (t[11] = n),
        (t[12] = o),
        (t[13] = u))
      : (u = t[13]),
    u
  );
}
function Tt(e) {
  let t = (0, kt.c)(8),
    { ref: n, initialRepository: r, inDialog: i, requestContext: a, onCancel: o, onSaved: s } = e,
    c = i !== void 0 && i,
    l = He(),
    u = r?.githubConnectorId ?? l.data?.preferred_github_connector_id ?? null,
    d;
  return (
    t[0] !== c || t[1] !== r || t[2] !== o || t[3] !== s || t[4] !== n || t[5] !== a || t[6] !== u
      ? ((d = (0, $.jsx)(Et, {
          ref: n,
          environment: null,
          initialRepository: r,
          inDialog: c,
          requestContext: a,
          onCancel: o,
          onSaved: s,
          preferredConnectorId: u,
        })),
        (t[0] = c),
        (t[1] = r),
        (t[2] = o),
        (t[3] = s),
        (t[4] = n),
        (t[5] = a),
        (t[6] = u),
        (t[7] = d))
      : (d = t[7]),
    d
  );
}
function Et(e) {
  let t = (0, kt.c)(49),
    {
      ref: i,
      environment: a,
      initialRepository: o,
      inDialog: s,
      requestContext: c,
      onCancel: l,
      onSaved: u,
      preferredConnectorId: d,
    } = e,
    f = s !== void 0 && s,
    p = r(_),
    m = ie(),
    h = (0, Q.useId)(),
    g = (0, Q.useId)(),
    v = (0, Q.useId)(),
    y = (0, Q.useId)(),
    [b, S] = (0, Q.useState)(!1),
    { data: C, error: w, isError: T, refetch: E } = be(),
    D = C != null || (w instanceof te && w.status === 404),
    [ne, re] = (0, Q.useState)(!1),
    [ae, ce] = (0, Q.useState)(!1),
    j;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, $.jsx)(A, {
        id: `settings.cloudEnvironments.editor.machine.universal`,
        defaultMessage: `Universal`,
        description: `Name of the built-in general-purpose machine preset for cloud environments`,
      })),
      (t[0] = j))
    : (j = t[0]);
  let le = j,
    { planAtLogin: ue } = ke(),
    M = ee(Pe),
    N = ee(Oe),
    me = ee(Le),
    ge = fe(`479474474`),
    _e;
  t[1] === ue ? (_e = t[2]) : ((_e = Me(ue) || je(ue)), (t[1] = ue), (t[2] = _e));
  let ve = _e,
    xe = a ?? void 0,
    Se = ve ? `workspace` : `private`,
    P;
  t[3] !== o || t[4] !== d || t[5] !== xe || t[6] !== Se
    ? ((P = Ae(xe, d, o, Se)), (t[3] = o), (t[4] = d), (t[5] = xe), (t[6] = Se), (t[7] = P))
    : (P = t[7]);
  let F = ze({
      defaultValues: P,
      onSubmit: (e) => {
        let { value: t } = e;
        if (
          we(t, M.data?.some((e) => e.id === t.machineId) === !0, a?.machine_id, C, a?.id) &&
          (D || t.label.trim() === a?.label)
        ) {
          if (a == null) {
            N.mutate(
              { requestBody: pe(t), requestContext: c },
              {
                onSuccess: (e) => {
                  c?.signal.aborted ||
                    (p
                      .get(oe)
                      .success(
                        m.formatMessage({
                          id: `settings.cloudEnvironments.create.success`,
                          defaultMessage: `Created cloud environment`,
                          description: `Toast shown after creating a cloud environment`,
                        }),
                      ),
                    F.reset(t),
                    u(e.id, t));
                },
                onError: () => {
                  c?.signal.aborted ||
                    p
                      .get(oe)
                      .danger(
                        m.formatMessage({
                          id: `settings.cloudEnvironments.create.error`,
                          defaultMessage: `Unable to create cloud environment`,
                          description: `Toast shown when creating a cloud environment fails`,
                        }),
                        { errorAnalytics: { toastId: `wham_mutations_failed_to_create_environment` } },
                      );
                },
              },
            );
            return;
          }
          me.mutate(
            { environmentId: a.id, requestBody: de(t, a), requestContext: c },
            {
              onSuccess: () => {
                c?.signal.aborted ||
                  (p
                    .get(oe)
                    .success(
                      m.formatMessage({
                        id: `settings.cloudEnvironments.update.success`,
                        defaultMessage: `Updated cloud environment`,
                        description: `Toast shown after updating a cloud environment`,
                      }),
                    ),
                  F.reset(t),
                  u(a.id, t));
              },
              onError: () => {
                c?.signal.aborted ||
                  p
                    .get(oe)
                    .danger(
                      m.formatMessage({
                        id: `settings.cloudEnvironments.update.error`,
                        defaultMessage: `Unable to update cloud environment. Reload and try again`,
                        description: `Toast shown when updating a cloud environment fails`,
                      }),
                      { errorAnalytics: { toastId: `wham_edit_environment_failed_to_update_environment` } },
                    );
              },
            },
          );
        }
      },
    }),
    I = N.isPending || me.isPending,
    Te = Re(F.store, Ot);
  De(h, Te || I);
  let Ee;
  t[8] !== Te || t[9] !== I || t[10] !== l
    ? ((Ee = () => {
        I || (Te ? S(!0) : l());
      }),
      (t[8] = Te),
      (t[9] = I),
      (t[10] = l),
      (t[11] = Ee))
    : (Ee = t[11]);
  let R = Ee,
    z;
  (t[12] === R ? (z = t[13]) : ((z = () => ({ requestClose: R })), (t[12] = R), (t[13] = z)),
    (0, Q.useImperativeHandle)(i, z));
  let B;
  t[14] === F
    ? (B = t[15])
    : ((B = (e) => {
        (e.preventDefault(), F.handleSubmit());
      }),
      (t[14] = F),
      (t[15] = B));
  let V;
  t[16] !== v ||
  t[17] !== y ||
  t[18] !== a ||
  t[19] !== C ||
  t[20] !== T ||
  t[21] !== F ||
  t[22] !== f ||
  t[23] !== o ||
  t[24] !== m ||
  t[25] !== I ||
  t[26] !== M ||
  t[27] !== g ||
  t[28] !== D ||
  t[29] !== ne ||
  t[30] !== d ||
  t[31] !== E ||
  t[32] !== R ||
  t[33] !== ge ||
  t[34] !== ve ||
  t[35] !== ae
    ? ((V = (e) => {
        let t = ye(e, C, a?.id),
          r = ae || t.workspaceDirectory != null,
          i = M.data?.find((t) => t.id === e.machineId),
          s = a?.machine_id === e.machineId ? a.machine : void 0;
        return (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)(W, {
              children: (0, $.jsx)(W.Content, {
                children: (0, $.jsxs)(n, {
                  children: [
                    (0, $.jsx)(k, {
                      label: (0, $.jsx)(A, {
                        id: `settings.cloudEnvironments.editor.repository`,
                        defaultMessage: `Repository`,
                        description: `Label for a cloud environment repository`,
                      }),
                      control:
                        a == null && o == null
                          ? (0, $.jsx)(pt, { form: F, isPending: I, preferredConnectorId: d })
                          : (0, $.jsx)(q, {
                              children: (0, $.jsx)(L, {
                                "aria-label": m.formatMessage({
                                  id: `settings.cloudEnvironments.editor.repository.aria`,
                                  defaultMessage: `Repository`,
                                  description: `Accessible label for a cloud environment repository input`,
                                }),
                                disabled: !0,
                                value: e.repositoryName,
                              }),
                            }),
                    }),
                    (0, $.jsx)(F.Field, {
                      name: `label`,
                      children: (e) => {
                        let n = t.label != null && (e.state.meta.isTouched || t.label === `duplicate`),
                          r;
                        return (
                          n && t.label != null
                            ? (r = (0, $.jsx)(`span`, {
                                id: g,
                                role: `alert`,
                                className: `text-danger`,
                                children: (0, $.jsx)(A, { ...Mt[t.label] }),
                              }))
                            : !D && T
                              ? (r = (0, $.jsx)(x, {
                                  color: `ghostSecondary`,
                                  size: `inline`,
                                  type: `button`,
                                  onClick: () => void E(),
                                  children: (0, $.jsx)(A, {
                                    id: `settings.cloudEnvironments.name.retry`,
                                    defaultMessage: `Couldn’t check existing names. Retry`,
                                    description: `Retries loading cloud environments after checking for duplicate names fails`,
                                  }),
                                }))
                              : D ||
                                (r = (0, $.jsx)(A, {
                                  id: `settings.cloudEnvironments.name.checking`,
                                  defaultMessage: `Checking existing environment names…`,
                                  description: `Shown while loading cloud environments to check for duplicate names before saving`,
                                })),
                          (0, $.jsx)(k, {
                            label: (0, $.jsx)(A, {
                              id: `settings.cloudEnvironments.editor.name`,
                              defaultMessage: `Name`,
                              description: `Label for a cloud environment name`,
                            }),
                            description: r,
                            control: (0, $.jsx)(q, {
                              children: (0, $.jsx)(L, {
                                "aria-invalid": n,
                                "aria-describedby": n ? g : void 0,
                                onBlur: e.handleBlur,
                                "aria-label": m.formatMessage({
                                  id: `settings.cloudEnvironments.editor.name.aria`,
                                  defaultMessage: `Environment name`,
                                  description: `Accessible label for a cloud environment name input`,
                                }),
                                disabled: I,
                                maxLength: 64,
                                value: e.state.value,
                                onChange: (t) => e.handleChange(t.target.value),
                              }),
                            }),
                          })
                        );
                      },
                    }),
                    (0, $.jsx)(F.Field, {
                      name: `description`,
                      children: (e) =>
                        (0, $.jsx)(k, {
                          label: (0, $.jsx)(A, {
                            id: `settings.cloudEnvironments.editor.description`,
                            defaultMessage: `Description`,
                            description: `Label for a cloud environment description`,
                          }),
                          description: (0, $.jsx)(A, {
                            id: `settings.cloudEnvironments.editor.description.help`,
                            defaultMessage: `Explain to members of your organization what this environment is for`,
                            description: `Help text for the description of a legacy cloud environment`,
                          }),
                          control: (0, $.jsx)(q, {
                            children: (0, $.jsx)(Ce, {
                              "aria-label": m.formatMessage({
                                id: `settings.cloudEnvironments.editor.description.aria`,
                                defaultMessage: `Environment description`,
                                description: `Accessible label for a cloud environment description input`,
                              }),
                              disabled: I,
                              maxLength: 512,
                              placeholder: m.formatMessage({
                                id: `settings.cloudEnvironments.editor.description.placeholder`,
                                defaultMessage: `1-2 sentence description`,
                                description: `Placeholder for a short description of a legacy cloud environment`,
                              }),
                              rows: 2,
                              value: e.state.value,
                              variant: `compact`,
                              onChange: (t) => e.handleChange(t.target.value),
                            }),
                          }),
                        }),
                    }),
                    (0, $.jsx)(F.Field, {
                      name: `machineId`,
                      children: (t) =>
                        (0, $.jsx)(k, {
                          label: (0, $.jsx)(A, {
                            id: `settings.cloudEnvironments.editor.machine`,
                            defaultMessage: `Container image`,
                            description: `Label for the container image used by a cloud environment`,
                          }),
                          description: (0, $.jsxs)($.Fragment, {
                            children: [
                              M.isError
                                ? (0, $.jsx)(`div`, {
                                    children: (0, $.jsx)(A, {
                                      id: `settings.cloudEnvironments.editor.machine.error`,
                                      defaultMessage: `Unable to load container images`,
                                      description: `Error shown when cloud environment machines cannot be loaded`,
                                    }),
                                  })
                                : null,
                              (0, $.jsx)(A, {
                                id: `settings.cloudEnvironments.editor.workspaceDirectory.summary`,
                                defaultMessage: `The repository will be cloned to {directory}. <edit>Edit workspace directory</edit>.`,
                                description: `Helper text beneath Container image in the cloud environment form. The directory is the full path where the selected repository will be cloned. The edit link reveals the workspace directory input.`,
                                values: {
                                  directory: At.default.posix.join(
                                    e.workspaceDirectory.trim(),
                                    At.default.posix.basename(e.repositoryName),
                                  ),
                                  edit: (e) =>
                                    (0, $.jsx)(x, {
                                      className: `inline-flex max-w-full underline underline-offset-2`,
                                      "aria-controls": y,
                                      "aria-expanded": r,
                                      color: `ghostMuted`,
                                      disabled: I,
                                      size: `inline`,
                                      type: `button`,
                                      onClick: () => ce(!r),
                                      children: (0, $.jsx)(`span`, {
                                        className: `min-w-0 text-start break-words whitespace-normal`,
                                        children: e,
                                      }),
                                    }),
                                },
                              }),
                            ],
                          }),
                          control: M.isError
                            ? (0, $.jsxs)(`div`, {
                                className: `flex items-center gap-2`,
                                children: [
                                  s == null
                                    ? null
                                    : (0, $.jsx)(he, {
                                        disabled: !0,
                                        children: s.id === `wham-public/wham-universal` ? le : s.label,
                                      }),
                                  (0, $.jsx)(x, {
                                    color: `secondary`,
                                    onClick: () => void M.refetch(),
                                    size: `toolbar`,
                                    type: `button`,
                                    children: (0, $.jsx)(A, {
                                      id: `settings.cloudEnvironments.editor.machine.retry`,
                                      defaultMessage: `Retry`,
                                      description: `Button label for retrying cloud environment machine loading`,
                                    }),
                                  }),
                                ],
                              })
                            : (0, $.jsxs)($.Fragment, {
                                children: [
                                  (0, $.jsx)(se, {
                                    triggerButton: (0, $.jsx)(he, {
                                      disabled: M.isPending || I,
                                      children:
                                        e.machineId === `wham-public/wham-universal`
                                          ? le
                                          : (i?.label ??
                                            s?.label ??
                                            (0, $.jsx)(A, {
                                              id: `settings.cloudEnvironments.editor.machine.select`,
                                              defaultMessage: `Select a container image`,
                                              description: `Placeholder for a cloud environment machine selector`,
                                            })),
                                    }),
                                    children: (0, $.jsx)(O.RadioGroup, {
                                      value: e.machineId,
                                      children: M.data?.map((e) =>
                                        (0, $.jsx)(
                                          O.RadioItem,
                                          {
                                            value: e.id,
                                            onSelect: () => t.handleChange(e.id),
                                            children: e.id === `wham-public/wham-universal` ? le : e.label,
                                          },
                                          e.id,
                                        ),
                                      ),
                                    }),
                                  }),
                                  e.machineId === `wham-public/wham-universal`
                                    ? (0, $.jsx)(x, {
                                        color: `secondary`,
                                        size: `toolbar`,
                                        type: `button`,
                                        disabled: I,
                                        onClick: () => re(!0),
                                        children: (0, $.jsx)(A, {
                                          id: `settings.cloudEnvironments.editor.packages`,
                                          defaultMessage: `Preinstalled packages`,
                                          description: `Button opening the installed language and runtime versions for the Universal cloud container image`,
                                        }),
                                      })
                                    : null,
                                ],
                              }),
                        }),
                    }),
                    r
                      ? (0, $.jsx)(F.Field, {
                          name: `workspaceDirectory`,
                          children: (e) =>
                            (0, $.jsx)(k, {
                              variant: `nested`,
                              label: (0, $.jsx)(A, {
                                id: `settings.cloudEnvironments.editor.workspaceDirectory`,
                                defaultMessage: `Workspace directory`,
                                description: `Label for a cloud environment workspace directory`,
                              }),
                              description: t.workspaceDirectory
                                ? (0, $.jsx)(`span`, {
                                    id: v,
                                    role: `alert`,
                                    className: `text-danger`,
                                    children: (0, $.jsx)(A, {
                                      id: `settings.cloudEnvironments.workspaceDirectory.invalid`,
                                      defaultMessage: `Enter an absolute directory such as /workspace, not the root directory`,
                                      description: `Validation message for an empty, relative, or root cloud environment workspace directory`,
                                    }),
                                  })
                                : (0, $.jsx)(A, {
                                    id: `settings.cloudEnvironments.editor.workspaceDirectory.description`,
                                    defaultMessage: `Directory where the repository is cloned; change this only when setup requires an absolute path`,
                                    description: `Explanation for the cloud environment workspace directory`,
                                  }),
                              control: (0, $.jsx)(q, {
                                children: (0, $.jsx)(L, {
                                  id: y,
                                  autoFocus: !0,
                                  "aria-label": m.formatMessage({
                                    id: `settings.cloudEnvironments.editor.workspaceDirectory.aria`,
                                    defaultMessage: `Workspace directory`,
                                    description: `Accessible label for the cloud environment workspace directory input`,
                                  }),
                                  disabled: I,
                                  "aria-invalid": t.workspaceDirectory != null,
                                  "aria-describedby": t.workspaceDirectory ? v : void 0,
                                  value: e.state.value,
                                  onChange: (t) => e.handleChange(t.target.value),
                                }),
                              }),
                            }),
                        })
                      : null,
                  ],
                }),
              }),
            }),
            ve ? (0, $.jsx)(Ke, { form: F, isPending: I }) : null,
            (0, $.jsx)(bt, { form: F, isPending: I }),
            (0, $.jsx)(et, { form: F, isPending: I, showDomainScopedSecrets: ge }),
            (0, $.jsx)(st, { form: F, isPending: I, inDialog: f }),
            ne ? (0, $.jsx)(jt, { form: F, isPending: I, onClose: () => re(!1) }) : null,
            (0, $.jsxs)(`div`, {
              className: `flex items-center justify-end gap-2`,
              children: [
                (0, $.jsx)(x, {
                  color: `secondary`,
                  size: `dialogAction`,
                  disabled: I,
                  onClick: R,
                  type: `button`,
                  children: (0, $.jsx)(A, {
                    id: `settings.cloudEnvironments.editor.cancel`,
                    defaultMessage: `Cancel`,
                    description: `Button label for cancelling cloud environment editing`,
                  }),
                }),
                (0, $.jsx)(x, {
                  color: `primary`,
                  size: `dialogAction`,
                  disabled: !we(e, i != null, a?.machine_id, C, a?.id) || (!D && e.label.trim() !== a?.label),
                  loading: I,
                  type: `submit`,
                  children:
                    a == null
                      ? (0, $.jsx)(A, {
                          id: `settings.cloudEnvironments.editor.create`,
                          defaultMessage: `Create environment`,
                          description: `Button label for creating a cloud environment`,
                        })
                      : (0, $.jsx)(A, {
                          id: `settings.cloudEnvironments.editor.save`,
                          defaultMessage: `Save changes`,
                          description: `Button label for saving a cloud environment`,
                        }),
                }),
              ],
            }),
          ],
        });
      }),
      (t[16] = v),
      (t[17] = y),
      (t[18] = a),
      (t[19] = C),
      (t[20] = T),
      (t[21] = F),
      (t[22] = f),
      (t[23] = o),
      (t[24] = m),
      (t[25] = I),
      (t[26] = M),
      (t[27] = g),
      (t[28] = D),
      (t[29] = ne),
      (t[30] = d),
      (t[31] = E),
      (t[32] = R),
      (t[33] = ge),
      (t[34] = ve),
      (t[35] = ae),
      (t[36] = V))
    : (V = t[36]);
  let H;
  t[37] !== F.Subscribe || t[38] !== V
    ? ((H = (0, $.jsx)(F.Subscribe, { selector: Dt, children: V })),
      (t[37] = F.Subscribe),
      (t[38] = V),
      (t[39] = H))
    : (H = t[39]);
  let U;
  t[40] !== B || t[41] !== H
    ? ((U = (0, $.jsx)(`form`, {
        className: `flex flex-col gap-[var(--padding-panel)]`,
        onSubmit: B,
        children: H,
      })),
      (t[40] = B),
      (t[41] = H),
      (t[42] = U))
    : (U = t[42]);
  let Ne = b ? l : null,
    Fe;
  t[43] === Symbol.for(`react.memo_cache_sentinel`) ? ((Fe = () => S(!1)), (t[43] = Fe)) : (Fe = t[43]);
  let G;
  t[44] === Ne
    ? (G = t[45])
    : ((G = (0, $.jsx)(Ge, { pendingNavigation: Ne, onClearPendingNavigation: Fe })),
      (t[44] = Ne),
      (t[45] = G));
  let Ie;
  return (
    t[46] !== U || t[47] !== G
      ? ((Ie = (0, $.jsxs)($.Fragment, { children: [U, G] })), (t[46] = U), (t[47] = G), (t[48] = Ie))
      : (Ie = t[48]),
    Ie
  );
}
function Dt(e) {
  return e.values;
}
function Ot(e) {
  return !e.isDefaultValue;
}
var kt, At, Q, $, jt, Mt;
function Nt() {
  return (Nt = e(() => {
    ((kt = h()),
      Ve(),
      Be(),
      w(),
      (At = t(M(), 1)),
      (Q = o()),
      b(),
      U(),
      G(),
      C(),
      T(),
      a(),
      N(),
      v(),
      i(),
      z(),
      j(),
      F(),
      E(),
      We(),
      I(),
      Ie(),
      Ne(),
      g(),
      Ue(),
      Ye(),
      ot(),
      Qe(),
      V(),
      ft(),
      Ee(),
      yt(),
      Ct(),
      ($ = f()),
      D(),
      (jt = c(
        async () =>
          (
            await m(
              async () => {
                let { CloudEnvironmentPackagesDialog: e } = await import(
                  `./cloud-environment-packages-dialog-2b59e16fb2b0.js`
                );
                return { CloudEnvironmentPackagesDialog: e };
              },
              __vite__mapDeps([10, 2, 1, 3, 5, 6]),
              import.meta.url,
            )
          ).CloudEnvironmentPackagesDialog,
      )),
      (Mt = S({
        required: {
          id: `settings.cloudEnvironments.name.required`,
          defaultMessage: `Enter an environment name`,
          description: `Validation error for an empty cloud environment name`,
        },
        "too-long": {
          id: `settings.cloudEnvironments.name.tooLong`,
          defaultMessage: `Use 64 characters or fewer`,
          description: `Validation error for a cloud environment name exceeding the maximum length`,
        },
        duplicate: {
          id: `settings.cloudEnvironments.name.duplicate`,
          defaultMessage: `An environment with this name already exists`,
          description: `Validation error asking the user to choose a different name for a cloud environment`,
        },
      })));
  }))();
}
export { Nt as n, wt as t };
//# sourceMappingURL=cloud-environment-editor-252c3d5d6175.js.map
