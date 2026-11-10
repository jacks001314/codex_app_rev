import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  FBt as i,
  HFt as a,
  LNt as o,
  PBt as s,
  Qst as c,
  SLt as l,
  XOt as u,
  Y3 as d,
  Z3 as f,
  ZSt as p,
  e6 as m,
  kLt as h,
  kRt as g,
  nCt as _,
  okt as v,
  tkt as y,
  yCt as b,
} from "./app-shared-2feb3d4c6fcc.js";
import { $Ln as x, Jbr as S, Wbr as C, ZLn as w, ixr as T } from "./app-initial-ad16eaadf81f.js";
var E, D;
function O() {
  return (O = e(() => {
    (p(),
      a(),
      S(),
      r(),
      (E = g({ allowedLoginMethods: h(l([`api`, `chatgpt`])).nullable() })),
      (D = b(c, (e, { get: t }) => {
        let { data: n, isError: r, isPending: i } = t(C, { hostId: e });
        if (i) return { status: `loading` };
        if (r || n?.requirements === void 0) return { status: `error` };
        if (n.requirements == null) {
          let { data: n, isPending: r, isError: i } = t(T, e);
          if (r) return { status: `loading` };
          if (i || !n?.configReadSucceeded) return { status: `error` };
          let a = n.config.forced_login_method;
          return { status: `ready`, api: a == null || a === `api`, chatgpt: a == null || a === `chatgpt` };
        }
        if (!(`allowedLoginMethods` in n.requirements)) return { status: `unsupported` };
        let a = E.safeParse(n.requirements);
        if (!a.success) return { status: `error` };
        let o = a.data.allowedLoginMethods;
        return {
          status: `ready`,
          api: o == null || o.includes(`api`),
          chatgpt: o == null || o.includes(`chatgpt`),
        };
      })));
  }))();
}
function k(e) {
  let r = (0, A.c)(4),
    { hostId: i } = e,
    a = n(c),
    o = _(D, i),
    s;
  return (
    r[0] !== i || r[1] !== o.status || r[2] !== a
      ? ((s = (0, j.jsx)(`div`, {
          className: `flex h-full w-full flex-col items-center justify-center gap-3 text-codex-description select-none`,
          children:
            o.status === `loading`
              ? (0, j.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  role: `status`,
                  children: [
                    (0, j.jsx)(t, { className: `h-4 w-4 text-default` }),
                    (0, j.jsx)(y, {
                      id: `electron.loginMethods.loading`,
                      defaultMessage: `Loading sign-in requirements…`,
                      description: `Loading message while reading managed sign-in requirements from the machine being authenticated`,
                    }),
                  ],
                })
              : (0, j.jsxs)(j.Fragment, {
                  children: [
                    (0, j.jsxs)(`div`, {
                      role: `alert`,
                      children: [
                        o.status === `unsupported`
                          ? (0, j.jsx)(y, {
                              id: `electron.loginMethods.unsupported`,
                              defaultMessage: `Update Codex on this machine to read its managed sign-in requirements`,
                              description: `An older app-server cannot expose configured managed login restrictions, so sign-in options are hidden`,
                            })
                          : null,
                        o.status === `ready`
                          ? (0, j.jsx)(y, {
                              id: `electron.loginMethods.noneAllowed`,
                              defaultMessage: `Your administrator has disabled all available sign-in methods`,
                              description: `No Desktop login method is permitted by managed requirements`,
                            })
                          : null,
                        o.status === `error`
                          ? (0, j.jsx)(y, {
                              id: `electron.loginMethods.error`,
                              defaultMessage: `Unable to load sign-in requirements`,
                              description: `Managed sign-in requirements could not be read; sign-in options remain hidden until retry succeeds`,
                            })
                          : null,
                      ],
                    }),
                    (0, j.jsx)(d, {
                      color: `secondary`,
                      onClick: () => {
                        (a.get(C, { hostId: i }).refetch(), a.get(T, i).refetch());
                      },
                      children: (0, j.jsx)(y, {
                        id: `electron.loginMethods.retry`,
                        defaultMessage: `Retry`,
                        description: `Retry reading managed sign-in requirements`,
                      }),
                    }),
                  ],
                }),
        })),
        (r[0] = i),
        (r[1] = o.status),
        (r[2] = a),
        (r[3] = s))
      : (s = r[3]),
    s
  );
}
var A, j;
function M() {
  return (M = e(() => {
    ((A = s()), p(), u(), f(), m(), S(), r(), O(), (j = o()));
  }))();
}
function N(e) {
  let t = (0, P.c)(42),
    {
      allowApiKey: n,
      allowChatGpt: r,
      apiKeyHelp: i,
      apiKeyValue: a,
      isApiKeyEntryVisible: o,
      isApiKeySignInPending: s,
      isChatGptSignInPending: c,
      onApiKeySecondaryAction: l,
      onApiKeySubmit: u,
      onApiKeyValueChange: f,
      onChatGptSignIn: p,
      onShowApiKeyEntry: m,
      apiKeySecondaryActionLabel: h,
    } = e,
    g = v(),
    _ = (0, F.useId)();
  if (n && o) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, I.jsx)(y, {
          id: `electron.onboarding.login.apikey.label`,
          defaultMessage: `OpenAI API key`,
          description: `Label for API key input on desktop onboarding`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n = i == null ? void 0 : _,
      r;
    t[1] === g
      ? (r = t[2])
      : ((r = g.formatMessage({
          id: `electron.onboarding.login.apikey.placeholder`,
          defaultMessage: `sk-…`,
          description: `Placeholder for API key input on desktop onboarding`,
        })),
        (t[1] = g),
        (t[2] = r));
    let o;
    t[3] === f ? (o = t[4]) : ((o = (e) => f(e.target.value)), (t[3] = f), (t[4] = o));
    let c;
    t[5] !== a || t[6] !== n || t[7] !== r || t[8] !== o
      ? ((c = (0, I.jsxs)(`label`, {
          className: `flex flex-col gap-2 text-base font-medium text-default`,
          children: [
            e,
            (0, I.jsx)(w, { "aria-describedby": n, autoFocus: !0, placeholder: r, value: a, onChange: o }),
          ],
        })),
        (t[5] = a),
        (t[6] = n),
        (t[7] = r),
        (t[8] = o),
        (t[9] = c))
      : (c = t[9]);
    let p;
    t[10] !== i || t[11] !== _
      ? ((p = i == null ? null : (0, I.jsx)(`div`, { id: _, children: i })),
        (t[10] = i),
        (t[11] = _),
        (t[12] = p))
      : (p = t[12]);
    let m;
    t[13] !== h || t[14] !== l
      ? ((m = (0, I.jsx)(d, {
          className: `flex-1 justify-center`,
          color: `secondary`,
          size: `large`,
          onClick: l,
          children: h,
        })),
        (t[13] = h),
        (t[14] = l),
        (t[15] = m))
      : (m = t[15]);
    let v;
    t[16] !== a || t[17] !== s
      ? ((v = a.trim().length === 0 || s), (t[16] = a), (t[17] = s), (t[18] = v))
      : (v = t[18]);
    let b;
    t[19] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((b = (0, I.jsx)(y, {
          id: `electron.onboarding.login.apikey.continue`,
          defaultMessage: `Continue`,
          description: `Continue button label for API key sign-in on desktop onboarding`,
        })),
        (t[19] = b))
      : (b = t[19]);
    let x;
    t[20] !== s || t[21] !== u || t[22] !== v
      ? ((x = (0, I.jsx)(d, {
          className: `flex-1 justify-center`,
          onClick: u,
          disabled: v,
          loading: s,
          size: `large`,
          children: b,
        })),
        (t[20] = s),
        (t[21] = u),
        (t[22] = v),
        (t[23] = x))
      : (x = t[23]);
    let S;
    t[24] !== x || t[25] !== m
      ? ((S = (0, I.jsxs)(`div`, { className: `flex items-center gap-2`, children: [m, x] })),
        (t[24] = x),
        (t[25] = m),
        (t[26] = S))
      : (S = t[26]);
    let C;
    return (
      t[27] !== S || t[28] !== c || t[29] !== p
        ? ((C = (0, I.jsxs)(`div`, { className: `flex w-full flex-col gap-3`, children: [c, p, S] })),
          (t[27] = S),
          (t[28] = c),
          (t[29] = p),
          (t[30] = C))
        : (C = t[30]),
      C
    );
  }
  let b;
  t[31] !== r || t[32] !== c || t[33] !== p
    ? ((b = r
        ? (0, I.jsx)(d, {
            color: `primary`,
            className: `w-full justify-center py-2.5`,
            onClick: p,
            children: c
              ? (0, I.jsx)(y, {
                  id: `electron.onboarding.login.chatgpt.cancel`,
                  defaultMessage: `Cancel sign-in`,
                  description: `Cancel button label while ChatGPT sign-in is in progress on desktop onboarding`,
                })
              : (0, I.jsx)(y, {
                  id: `electron.onboarding.login.chatgpt.continue`,
                  defaultMessage: `Continue with ChatGPT`,
                  description: `Button label to sign in with ChatGPT on desktop onboarding`,
                }),
          })
        : null),
      (t[31] = r),
      (t[32] = c),
      (t[33] = p),
      (t[34] = b))
    : (b = t[34]);
  let x;
  t[35] !== n || t[36] !== c || t[37] !== m
    ? ((x =
        n && !c
          ? (0, I.jsx)(d, {
              color: `outline`,
              className: `w-full justify-center py-2.5`,
              onClick: m,
              children: (0, I.jsx)(y, {
                id: `electron.onboarding.login.apikey.open`,
                defaultMessage: `Enter API key`,
                description: `Button label to open API key entry on desktop onboarding`,
              }),
            })
          : null),
      (t[35] = n),
      (t[36] = c),
      (t[37] = m),
      (t[38] = x))
    : (x = t[38]);
  let S;
  return (
    t[39] !== b || t[40] !== x
      ? ((S = (0, I.jsxs)(`div`, {
          className: `flex w-full max-w-[200px] flex-col gap-3`,
          children: [b, x],
        })),
        (t[39] = b),
        (t[40] = x),
        (t[41] = S))
      : (S = t[41]),
    S
  );
}
var P, F, I;
function L() {
  return (L = e(() => {
    ((P = s()), (F = i()), u(), f(), x(), (I = o()));
  }))();
}
export { O as a, M as i, L as n, D as o, k as r, N as t };
//# sourceMappingURL=onboarding-login-content-f7bde5c8a665.js.map
